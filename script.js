// API Configuration
let ANTHROPIC_API_KEY = localStorage.getItem('anthropic_api_key') || '';

// Language Configuration
let currentLanguage = localStorage.getItem('portfolio_language') || 'en';

// Chat History for context
let chatHistory = [];

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setLanguage(currentLanguage);
  populateAboutSection();
  populateSkillsSection();
  populateProjectsSection();
  populateExperienceSection();
  loadOrPromptForAPIKey();
});

// ==================== Language Functions ====================

function t(key) {
  return translations[currentLanguage]?.[key] || translations['en']?.[key] || key;
}

function setLanguage(lang) {
  if (!['en', 'nl'].includes(lang)) lang = 'en';

  currentLanguage = lang;
  localStorage.setItem('portfolio_language', lang);

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[onclick="setLanguage('${lang}')"]`).classList.add('active');

  // Update all translatable elements
  updateTranslatableContent();

  // Repopulate dynamic content
  populateAboutSection();
  populateSkillsSection();
  populateProjectsSection();
  populateExperienceSection();
}

function updateTranslatableContent() {
  // Update navigation links
  document.querySelectorAll('[data-en][data-nl]').forEach(element => {
    const text = element.getAttribute(`data-${currentLanguage}`);
    if (text) element.textContent = text;
  });

  // Update section titles and other translatable text
  const elementsToUpdate = {
    '#aboutMeTitle': 'aboutMe',
    '#getToKnowMeTitle': 'getToKnowMeTitle',
    '#softSkillsTitle': 'softSkillsTitle',
    '#careerVisionLabel': 'careerVisionLabel',
    '#languagesLabel': 'languages',
    '#interestsLabel': 'interests',
    '#skillsTitle': 'technicalSkills',
    '#projectsTitle': 'featuredProjects',
    '#experienceTitle': 'experienceEducation',
    '#chatTitle': 'askMeAnything',
    '#chatSubtitle': 'chatSubtitle',
  };

  for (const [selector, key] of Object.entries(elementsToUpdate)) {
    const el = document.querySelector(selector);
    if (el) el.textContent = t(key);
  }

  // Update button texts
  const buttons = {
    '[onclick="scrollToChat()"]': 'chatWithAI',
    '.hero-cta .btn-secondary': 'viewMyWork',
  };

  for (const [selector, key] of Object.entries(buttons)) {
    const el = document.querySelector(selector);
    if (el) el.textContent = t(key);
  }

  // Update chat placeholder
  const chatInput = document.getElementById('chatInput');
  if (chatInput) chatInput.placeholder = t('chatPlaceholder');

  // Update chat welcome message if exists
  const chatMessages = document.getElementById('chatMessages');
  const firstBotMsg = chatMessages?.querySelector('.bot-message');
  if (firstBotMsg && !firstBotMsg.id?.includes('loading')) {
    const msgContent = firstBotMsg.querySelector('.message-content p');
    if (msgContent && msgContent.textContent.includes('Arthur')) {
      msgContent.textContent = t('chatWelcome');
    }
  }

  // Update footer "Let's Connect" heading
  const footerHeading = document.querySelector('.footer-section:nth-child(2) h4');
  if (footerHeading) footerHeading.textContent = t('letsConnect');
}

// ==================== Page Population ====================

function populateAboutSection() {
  // About text - split into paragraphs for better readability
  const aboutText = t('aboutStory');
  const paragraphs = aboutText.split('\n\n').filter(p => p.trim());

  const aboutContainer = document.getElementById('aboutText');
  aboutContainer.innerHTML = '';
  paragraphs.forEach(para => {
    const p = document.createElement('p');
    p.textContent = para;
    p.style.marginBottom = '1.5rem';
    aboutContainer.appendChild(p);
  });

  // Career goal
  document.getElementById('careerGoal').textContent = t('careerVision');

  // Traits
  const traitsGrid = document.getElementById('traitsGrid');
  traitsGrid.innerHTML = '';
  const traitsList = currentLanguage === 'nl' ? profileData.about.personality.traitsNl : profileData.about.personality.traitsEn;
  traitsList.forEach(trait => {
    const traitEl = document.createElement('div');
    traitEl.className = 'trait';
    traitEl.textContent = trait;
    traitsGrid.appendChild(traitEl);
  });

  // Languages
  const languagesList = document.getElementById('languagesList');
  languagesList.innerHTML = '';
  profileData.languages.forEach(lang => {
    const span = document.createElement('span');
    span.innerHTML = `<strong>${lang.name}</strong> (${lang.level})`;
    languagesList.appendChild(span);
    const br = document.createElement('br');
    languagesList.appendChild(br);
  });

  // Interests
  const interestsList = document.getElementById('interestsList');
  interestsList.innerHTML = '';
  const interestItems = currentLanguage === 'nl' ? profileData.about.personality.interestsNl : profileData.about.personality.interestsEn;
  interestItems.forEach((interest, index) => {
    const span = document.createElement('span');
    span.textContent = interest;
    interestsList.appendChild(span);
    if (index < interestItems.length - 1) {
      const br = document.createElement('br');
      interestsList.appendChild(br);
    }
  });
}

function populateSkillsSection() {
  const skillsGrid = document.getElementById('skillsGrid');
  skillsGrid.innerHTML = '';

  const skillCategories = [
    profileData.skills.cloud,
    profileData.skills.security,
    profileData.skills.networking,
    profileData.skills.automation,
  ];

  skillCategories.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    const skillDescription = currentLanguage === 'nl' ? (skill.descriptionNl || skill.description) : skill.description;
    card.innerHTML = `
      <h3>${skill.category}</h3>
      <p>${skillDescription}</p>
      <div class="tech-list">
        ${skill.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    `;
    skillsGrid.appendChild(card);
  });
}

function populateProjectsSection() {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '';

  profileData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = `project-card ${project.featured ? 'featured' : ''}`;

    const resultsList = currentLanguage === 'nl' ? (project.resultsNl || project.results) : project.results;
    const resultsHTML = resultsList
      .map(result => `<li>${result}</li>`)
      .join('');

    const toolsHTML = project.tools
      .map(tool => `<span class="tech-tag">${tool}</span>`)
      .join('');

    const shortDesc = currentLanguage === 'nl' ? (project.shortDescriptionNl || project.shortDescription) : project.shortDescription;
    const challenge = currentLanguage === 'nl' ? (project.challengeNl || project.challenge) : project.challenge;
    const solution = currentLanguage === 'nl' ? (project.solutionNl || project.solution) : project.solution;
    const impact = currentLanguage === 'nl' ? (project.impactNl || project.impact) : project.impact;

    card.innerHTML = `
      <div class="project-header">
        <div>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-meta">
            <span>${project.organization}</span>
            <span>${project.date}</span>
            ${project.featured ? `<span class="feature-badge">${t('featuredBadge')}</span>` : ''}
          </div>
        </div>
      </div>

      <p>${shortDesc}</p>

      <div class="project-sections" style="display: none;">
        <div class="project-section">
          <h4>${t('challenge')}</h4>
          <p style="color: var(--muted-text); margin: 0;">${challenge}</p>
        </div>

        <div class="project-section">
          <h4>${t('solution')}</h4>
          <p style="color: var(--muted-text); margin: 0;">${solution}</p>
        </div>

        <div class="project-section">
          <h4>${t('results')}</h4>
          <ul>
            ${resultsHTML}
          </ul>
        </div>

        <div class="project-section">
          <h4>${t('impact')}</h4>
          <p style="color: var(--muted-text); margin: 0;">${impact}</p>
        </div>
      </div>

      <div class="tech-used">
        ${toolsHTML}
      </div>

      <button class="expand-btn" style="margin-top: auto;">View Details</button>
    `;
    projectsGrid.appendChild(card);
  });
}

function populateExperienceSection() {
  const experienceTimeline = document.getElementById('experienceTimeline');
  experienceTimeline.innerHTML = '';

  profileData.experience.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'experience-item';

    const description = currentLanguage === 'nl' ? (exp.descriptionNl || exp.description) : exp.description;
    const highlightsList = currentLanguage === 'nl' ? (exp.highlightsNl || exp.highlights) : exp.highlights;
    const highlightsHTML = highlightsList
      .map(highlight => `<li>${highlight}</li>`)
      .join('');

    item.innerHTML = `
      <div class="experience-header">
        <div>
          <h3>${exp.role}</h3>
          <p class="experience-company">${exp.company}</p>
        </div>
        <span class="experience-duration">${exp.duration}</span>
      </div>
      <p class="experience-description">${description}</p>
      <ul class="highlights-list">
        ${highlightsHTML}
      </ul>
    `;
    experienceTimeline.appendChild(item);
  });
}

// ==================== Chat Functionality ====================

function loadOrPromptForAPIKey() {
  // API key is now stored server-side, no need to prompt user
  console.log('✅ Chat is enabled - API key is handled securely on the server');
}

function setAPIKey(key) {
  ANTHROPIC_API_KEY = key;
  localStorage.setItem('anthropic_api_key', key);
  console.log('✅ API key set successfully');
}

function scrollToChat() {
  document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('chatInput').focus();
}

function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();

  if (!message) return;

  if (!ANTHROPIC_API_KEY) {
    showChatError(t('apiKeyRequired'));
    return;
  }

  // Add user message to chat
  addMessageToChat(message, 'user');
  input.value = '';

  // Show loading indicator
  showLoadingIndicator();

  // Get AI response
  getAIResponse(message);
}

function addMessageToChat(content, sender) {
  const chatMessages = document.getElementById('chatMessages');
  const messageEl = document.createElement('div');
  messageEl.className = `message ${sender}-message`;

  const avatar = sender === 'user' ? 'U' : 'A';
  const avatarClass = sender === 'user' ? 'user-avatar' : 'bot-avatar';

  messageEl.innerHTML = `
    <div class="message-avatar ${avatarClass}">${avatar}</div>
    <div class="message-content">
      <p>${escapeHtml(content)}</p>
    </div>
  `;

  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showLoadingIndicator() {
  const chatMessages = document.getElementById('chatMessages');
  const loadingEl = document.createElement('div');
  loadingEl.className = 'message bot-message';
  loadingEl.id = 'loadingMessage';
  loadingEl.innerHTML = `
    <div class="message-avatar bot-avatar">A</div>
    <div class="message-content">
      <div class="loading-indicator">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>
  `;

  chatMessages.appendChild(loadingEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingIndicator() {
  const loadingEl = document.getElementById('loadingMessage');
  if (loadingEl) {
    loadingEl.remove();
  }
}

function showChatError(error) {
  const chatMessages = document.getElementById('chatMessages');
  const errorEl = document.createElement('div');
  errorEl.className = 'message bot-message';
  errorEl.innerHTML = `
    <div class="message-avatar">⚠️</div>
    <div class="message-content">
      <p style="color: #ff6b6b;">${escapeHtml(error)}</p>
    </div>
  `;

  chatMessages.appendChild(errorEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function getAIResponse(userMessage) {
  try {
    // Add message to history
    chatHistory.push({
      role: 'user',
      content: userMessage,
    });

    // Call our backend API instead of Anthropic directly
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        context: generateContextFromProfile(),
        systemPrompt: getSystemPrompt(),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API Error');
    }

    const data = await response.json();
    const aiMessage = data.response;

    // Add to history and display
    chatHistory.push({
      role: 'assistant',
      content: aiMessage,
    });

    removeLoadingIndicator();
    addMessageToChat(aiMessage, 'bot');

  } catch (error) {
    console.error('Chat Error:', error);
    removeLoadingIndicator();
    showChatError(`Error: ${error.message}`);
  }
}

function getSystemPrompt() {
  return `You are an AI Agent representing Arthur Van Kwikenborne, a Cloud Engineer and Cybersecurity & Infrastructure student at VIVES Kortrijk.

IMPORTANT CONTEXT ABOUT ARTHUR:
${generateContextFromProfile()}

Your role is to:
1. Answer questions about Arthur's background, skills, projects, and experience
2. Be enthusiastic and professional
3. Provide detailed, helpful information
4. If asked about something not in your knowledge base, be honest and say so
5. Encourage visitors to connect with Arthur for more information

Tone: Professional, friendly, and informative. Avoid being overly formal.
Keep responses concise but informative (1-2 paragraphs typically).`;
}

function generateContextFromProfile() {
  const profile = profileData;
  const lang = currentLanguage;

  let context = `
PERSONAL INFORMATION:
- Name: ${profile.personal.name}
- Location: ${profile.personal.location}
- Date of Birth: ${profile.personal.dateOfBirth}
- Bio: ${profile.personal.bio}

SKILLS:
- Cloud & DevOps: ${profile.skills.cloud.technologies.join(', ')}
- Security: ${profile.skills.security.technologies.join(', ')}
- Networking: ${profile.skills.networking.technologies.join(', ')}
- Automation: ${profile.skills.automation.technologies.join(', ')}

FEATURED PROJECTS:
${profile.projects.map(p => {
  const shortDesc = lang === 'nl' ? (p.shortDescriptionNl || p.shortDescription) : p.shortDescription;
  const challenge = lang === 'nl' ? (p.challengeNl || p.challenge) : p.challenge;
  const solution = lang === 'nl' ? (p.solutionNl || p.solution) : p.solution;
  const impact = lang === 'nl' ? (p.impactNl || p.impact) : p.impact;
  const results = lang === 'nl' ? (p.resultsNl || p.results) : p.results;

  return `
  PROJECT: ${p.title}
  Organization: ${p.organization}
  Date: ${p.date}
  Description: ${shortDesc}
  Challenge: ${challenge}
  Solution: ${solution}
  Impact: ${impact}
  Results: ${results.join(' | ')}
  Technologies: ${p.tools.join(', ')}
  `;
}).join('\n')}

EXPERIENCE & EDUCATION:
${profile.experience.map(exp => {
  const description = lang === 'nl' ? (exp.descriptionNl || exp.description) : exp.description;
  const highlights = lang === 'nl' ? (exp.highlightsNl || exp.highlights) : exp.highlights;

  return `
  POSITION: ${exp.role}
  Company: ${exp.company}
  Duration: ${exp.duration}
  Description: ${description}
  Key Achievements: ${highlights.join(' | ')}
  `;
}).join('\n')}

LANGUAGES:
${profile.languages.map(l => `- ${l.name} (${l.level})`).join('\n')}

PERSONALITY & INTERESTS:
- Traits: ${lang === 'nl' ? profile.about.personality.traitsNl.join(', ') : profile.about.personality.traitsEn.join(', ')}
- Interests: ${lang === 'nl' ? profile.about.personality.interestsNl.join(', ') : profile.about.personality.interestsEn.join(', ')}

CAREER VISION:
- Goal: ${profile.about.careerGoal}
- Short Term (1-2 years): ${profile.vision.shortTerm}
- Long Term (3-5+ years): ${profile.vision.longTerm}

SOFT SKILLS:
${profile.about?.softSkills && profile.about.softSkills.length > 0 ? profile.about.softSkills.map(skill => {
  const skillName = lang === 'nl' ? (skill.nameNl || skill.name) : skill.name;
  const skillDesc = lang === 'nl' ? (skill.descriptionNl || skill.description) : skill.description;
  return `- ${skillName}: ${skillDesc}`;
}).join('\n') : 'Various soft skills in communication, problem-solving, and teamwork.'}
`;

  return context;
}

// ==================== Utility Functions ====================

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ==================== Interactive Features ====================

// Scroll animations with Intersection Observer
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all cards and sections
  document.querySelectorAll('.skill-card, .project-card, .experience-item, .vision-box').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

// Expandable project cards
function initProjectExpansion() {
  document.querySelectorAll('.project-card').forEach(card => {
    const btn = card.querySelector('.expand-btn');
    const sections = card.querySelector('.project-sections');
    let isExpanded = false;

    if (btn && sections) {
      btn.addEventListener('click', function() {
        isExpanded = !isExpanded;

        if (isExpanded) {
          sections.style.display = 'block';
          setTimeout(() => sections.style.opacity = '1', 10);
          btn.textContent = 'Hide Details';
          btn.classList.add('expanded');
          card.classList.add('expanded');
        } else {
          sections.style.opacity = '0';
          setTimeout(() => sections.style.display = 'none', 300);
          btn.textContent = 'View Details';
          btn.classList.remove('expanded');
          card.classList.remove('expanded');
        }
      });
    }
  });
}

// Call animators when page loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initScrollAnimations();
    initProjectExpansion();
  }, 500);
});

// ==================== Console Commands ====================

console.log('%c🚀 Arthur\'s Portfolio Loaded!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cTo set your API key: setAPIKey("your-key")', 'color: #a8afc7;');
console.log('%cProfile data available at: profileData', 'color: #a8afc7;');
