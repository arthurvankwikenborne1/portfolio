// ==================== i18n (Internationalization) ====================
const translations = {
  en: {
    // Navigation
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    askMe: "Ask Me",

    // Hero
    heroTitle: "Arthur Van Kwikenborne",
    heroRole: "Junior Cloud / Infrastructure Engineer",
    heroDescription: "I architect scalable cloud solutions and automate infrastructure through code. Currently exploring how AI revolutionizes infrastructure provisioning.",
    heroLocation: "Belgium",
    heroEducation: "VIVES Kortrijk (2023-2026)",
    heroFocus: "Cloud Engineering Focus",
    chatWithAI: "Chat with AI Agent",
    viewMyWork: "View My Work",

    // About Section
    aboutMe: "About Me",
    getToKnowMeTitle: "Get to know me!",
    softSkillsTitle: "Soft Skills",
    aboutStory: "As a cybersecurity student with a strong interest in cloud engineering and infrastructure automation, I focus on designing systems that combine security with operational efficiency. My goal is to build scalable cloud environments that automate processes and increase infrastructure reliability.\n\nMy foundation lies in networking fundamentals, but my focus has shifted towards cloud architecture and intelligent workflow automation. Currently, I'm exploring how AI can be leveraged for smarter infrastructure provisioning. I'm a strong advocate of learning by doing: building, testing, and continuously optimizing to reach the best solution.\n\nThe combination of security, cloud, and emerging technology is where my strength lies. I'm seeking an environment where I can apply this expertise to challenging projects and continue developing myself as an engineer.",
    careerVisionLabel: "Career Vision",
    careerVision: "Seeking a role where I can grow and innovate in a dynamic, forward-thinking environment.",
    shortTerm: "Short Term",
    longTerm: "Long Term",
    whatDrivesMeLabel: "What Drives Me",
    languages: "Languages",
    interests: "Interests",

    // Skills Section
    technicalSkills: "Technical Skills",

    // Projects Section
    featuredProjects: "Featured Projects",
    challenge: "Challenge",
    solution: "Solution",
    results: "Results",
    impact: "Impact",

    // Experience Section
    experienceEducation: "Experience & Education",
    featuredBadge: "Featured",

    // Chat Section
    askMeAnything: "Ask Me Anything",
    chatSubtitle: "Chat with my AI Agent",
    chatPlaceholder: "Ask me about Arthur's skills, projects, or experience...",
    send: "Send",
    poweredBy: "Powered by AI Agent",
    chatWelcome: "Hi! I'm Arthur's AI Agent. Ask me anything about his projects, skills, experience, or career goals. I have all the information about his portfolio!",
    apiKeyPrompt: "Enter your API Key to enable the AI Agent:\n\nGet one at your AI service provider\n\nYour key will be stored locally in your browser.\n(You can always update it in console: setAPIKey(\"your-key\"))",
    apiKeyNotProvided: "API key not provided. Chat feature will not work.",
    apiKeyRequired: "Please set your API key first!",
    apiError: "Error",

    // Footer
    contact: "Contact",
    letsConnect: "Let's Connect",
    email: "Email",
    linkedIn: "LinkedIn",
    github: "GitHub",
    allRightsReserved: "All rights reserved.",
  },
  nl: {
    // Navigation
    about: "Over Mij",
    skills: "Vaardigheden",
    projects: "Projecten",
    experience: "Ervaring",
    askMe: "Vraag Me",

    // Hero
    heroTitle: "Arthur Van Kwikenborne",
    heroRole: "Junior Cloud / Infrastructure Engineer",
    heroDescription: "Ik ontwerp schaalbare cloudoplossingen en automatiseer infrastructuur via code. Op dit moment onderzoek ik hoe AI infrastructuurprovisioning revolutioneert.",
    heroLocation: "België",
    heroEducation: "VIVES Kortrijk (2023-2026)",
    heroFocus: "Cloud Engineering Focus",
    chatWithAI: "Chat met AI Agent",
    viewMyWork: "Bekijk Mijn Werk",

    // About Section
    aboutMe: "Over Mij",
    getToKnowMeTitle: "Leer me kennen!",
    softSkillsTitle: "Soft Skills",
    aboutStory: "Als cybersecurity-student met een sterke interesse in cloud engineering en infrastructure automation, richt ik me op het ontwerpen van systemen die veiligheid combineren met operationele efficiëntie. Mijn doel is om schaalbare cloudomgevingen te bouwen die processen automatiseren en de betrouwbaarheid van de infrastructuur verhogen.\n\nMijn basis ligt in de netwerkfundamentals, maar mijn focus is verschoven naar cloud-architectuur en het slim automatiseren van workflows. Momenteel onderzoek ik hoe AI ingezet kan worden voor slimmere infrastructure provisioning. Ik ben een voorstander van learning by doing: bouwen, testen en continu optimaliseren om tot de beste oplossing te komen.\n\nDe combinatie van security, cloud en opkomende technologie is waar mijn kracht ligt. Ik zoek een omgeving waar ik deze expertise kan inzetten voor uitdagende projecten en mezelf verder kan ontwikkelen als engineer.",
    careerVisionLabel: "Carrièrevisie",
    careerVision: "Op zoek naar een rol waarin ik kan groeien en innoveren in een dynamische, toekomstgerichte omgeving.",
    shortTerm: "Korte Termijn",
    longTerm: "Lange Termijn",
    whatDrivesMeLabel: "Wat mij drijft",
    languages: "Talen",
    interests: "Interesses",

    // Skills Section
    technicalSkills: "Technische Expertise",

    // Projects Section
    featuredProjects: "Uitgelichte Projecten",
    challenge: "Uitdaging",
    solution: "Oplossing",
    results: "Resultaten",
    impact: "Impact",

    // Experience Section
    experienceEducation: "Ervaring & Onderwijs",
    featuredBadge: "Uitgelicht",

    // Chat Section
    askMeAnything: "Stel Me Een Vraag",
    chatSubtitle: "Chat met mijn AI Agent",
    chatPlaceholder: "Stel me vragen over Arthurs vaardigheden, projecten of ervaring...",
    send: "Verzenden",
    poweredBy: "Powered by AI Agent",
    chatWelcome: "Hallo! Ik ben Arthurs AI Agent. Stel me vragen over zijn projecten, vaardigheden, ervaring of carrièrevisie. Ik heb alle informatie over zijn porfolio!",
    apiKeyPrompt: "Voer je API Key in om de AI Agent in te schakelen:\n\nVerkrijg een key bij je AI service provider\n\nJe key wordt veilig opgeslagen in je browser.\n(Je kunt het altijd updaten in console: setAPIKey(\"your-key\"))",
    apiKeyNotProvided: "API key niet opgegeven. Chat feature werkt niet.",
    apiKeyRequired: "Stel eerst je API key in!",
    apiError: "Fout",

    // Footer
    contact: "Contact",
    letsConnect: "Laten We Verbinden",
    email: "Email",
    linkedIn: "LinkedIn",
    github: "GitHub",
    allRightsReserved: "Alle rechten voorbehouden.",
  },
};

// ==================== Profile Data ====================

const profileData = {
  personal: {
    name: "Arthur Van Kwikenborne",
    title: "Cloud Engineer | DevOps Enthusiast | Cybersecurity Student",
    location: "Belgium",
    dateOfBirth: "March 13, 2004",
    bio: "Bachelor Cybersecurity & Infrastructure student at VIVES Kortrijk (2023–2026). Building tomorrow's infrastructure today with automation, cloud architecture, and infrastructure as code. Passionate about solving complex infrastructure challenges through innovative DevOps solutions.",
    email: "arthur.vankwikenborne@student.vives.be",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },

  about: {
    headline: "From Infrastructure to Innovation",
    story: "As a cybersecurity student with a strong interest in cloud engineering and infrastructure automation, I focus on designing systems that combine security with operational efficiency. My goal is to build scalable cloud environments that automate processes and increase infrastructure reliability.\n\nMy foundation lies in networking fundamentals, but my focus has shifted towards cloud architecture and intelligent workflow automation. Currently, I'm exploring how AI can be leveraged for smarter infrastructure provisioning. I'm a strong advocate of learning by doing: building, testing, and continuously optimizing to reach the best solution.\n\nThe combination of security, cloud, and emerging technology is where my strength lies. I'm seeking an environment where I can apply this expertise to challenging projects and continue developing myself as an engineer.",
    personality: {
      traitsEn: ["Problem-solving thinking", "Communication", "Collaboration", "Independence", "Curious"],
      traitsNl: ["Probleemoplossend denken", "Communicatie", "Samenwerking", "Zelfstandigheid", "Leergierig"],
      interestsEn: ["Cloud & emerging technologies", "AI and its impact", "Automation"],
      interestsNl: ["Cloud & nieuwe technologieën", "AI en de impact ervan", "Automatisering"],
    },
    careerGoal: "Seeking a role where I can grow and innovate in a dynamic, forward-thinking environment.",
  },

  skills: {
    cloud: {
      category: "Cloud & DevOps",
      description: "Infrastructure as Code, cloud architecture, containerization, and automation",
      descriptionNl: "Infrastructure as Code, cloudarchitectuur, containerisatie en automatisering",
      technologies: ["Azure", "Terraform", "Bicep", "Docker", "Kubernetes", "Helm", "Traefik", "CI/CD"],
    },
    security: {
      category: "Ethical Hacking & Security",
      description: "Network security, penetration testing, vulnerability assessment, security infrastructure",
      descriptionNl: "Netwerkbeveiliging, penetratietesten, kwetsbaarheidsanalyses en beveiligingsinfrastructuur",
      technologies: ["Penetration Testing", "Network Security", "Vulnerability Assessment", "Security Hardening", "IAM"],
    },
    networking: {
      category: "Enterprise Networking",
      description: "Network design, optimization, and management",
      descriptionNl: "Netwerkontwerp, optimalisatie en beheer",
      technologies: ["Cisco", "TP-Link", "Lancom", "Omada", "Network Architecture", "Routing & Switching"],
    },
    automation: {
      category: "Automation & Scripting",
      description: "Process automation, infrastructure automation, scripting solutions",
      descriptionNl: "Procesautomatisering, infrastructuurautomatisering en scriptoplossingen",
      technologies: ["Python", "Bash", "PowerShell", "Automation Frameworks"],
    },
  },

  projects: [
    {
      id: 1,
      title: "Network Optimization Project",
      organization: "Spes Nostra",
      date: "March 2026",
      shortDescription: "Comprehensive network infrastructure analysis and optimization",
      shortDescriptionNl: "Uitgebreide analyse en optimalisatie van netwerkinfrastructuur",
      challenge: "The organization required a detailed analysis of their existing network infrastructure to identify bottlenecks, security vulnerabilities, and optimization opportunities. Multiple network devices from different vendors needed to be integrated and properly configured.",
      challengeNl: "De organisatie had een gedetailleerde analyse nodig van hun bestaande netwerkinfrastructuur om knelpunten, beveiligingsrisico's en optimalisatiemogelijkheden te identificeren. Verschillende netwerkdevices van verschillende fabrikanten moesten geïntegreerd en goed geconfigureerd worden.",
      approach: "Conducted thorough network assessment using enterprise tools, analyzed current configuration, and designed optimization strategy for improved performance and security.",
      solution: "Configured Lancom and Omada controllers to centrally manage network access points and switches. Optimized Cisco and TP-Link switch configurations for improved traffic flow and redundancy. Implemented network segmentation and security policies.",
      solutionNl: "Lancom en Omada controllers geconfigureerd voor centraal beheer van netwerkaansluitpunten en switches. Cisco en TP-Link switchconfiguraties geoptimaliseerd voor beter verkeersdoorvoer en redundantie. Netwerkindeling en beveiligingsbeleid geïmplementeerd.",
      tools: ["Lancom", "Omada Controller", "Cisco Switches", "TP-Link Switches", "Network Analysis Tools"],
      results: [
        "Optimized network performance across multiple segments",
        "Improved network security posture with proper segmentation",
        "Reduced network latency and improved throughput",
        "Documented complete network topology and configurations",
      ],
      resultsNl: [
        "Netwerkprestaties over meerdere segmenten geoptimaliseerd",
        "Verbeterde netwerkbeveiligingsstatus met correcte segmentatie",
        "Verminderde netwerklatentie en verbeterde doorvoer",
        "Volledige netwerktopologie en configuraties gedocumenteerd",
      ],
      impact: "Enabled the organization to scale their network infrastructure confidently while maintaining security and performance standards.",
      impactNl: "De organisatie kon hun netwerkinfrastructuur nu zelfverzekerd uitbreiden terwijl beveiligings- en prestatienormen behouden bleven.",
      technologies: ["Enterprise Networking", "Network Optimization", "Network Security"],
    },
    {
      id: 2,
      title: "Virtual Lab Environment for Students",
      organization: "VIVES IT",
      date: "March 2026",
      shortDescription: "Innovative remote laboratory infrastructure for practical learning",
      shortDescriptionNl: "Innovatief remote labo platform voor praktisch leren",
      challenge: "Students needed access to expensive hardware and physical lab environments for hands-on learning. This created barriers to learning, required physical presence, and limited scalability.",
      challengeNl: "Studenten hadden toegang nodig tot dure hardware en fysieke labomleveringen voor praktische training. Dit zorgde voor leerbarrières, vereiste fysieke aanwezigheid en beperkte schaalbaarheid.",
      approach: "Designed and implemented a virtual lab environment accessible remotely, enabling students to practice on professional infrastructure without heavy capital investment.",
      solution: "Built a scalable virtual lab platform with proper isolation, resource management, and remote access capabilities. Students can now access full lab environments from anywhere.",
      solutionNl: "Een schaalbaar virtueel labplatform gebouwd met goede isolatie, resourcebeheer en remote toegang. Studenten kunnen nu volledig labomgevingen van overal benaderen.",
      tools: ["Virtualization Platform", "Cloud Infrastructure", "Network Simulation"],
      results: [
        "Eliminated need for expensive physical hardware per student",
        "Made learning accessible 24/7 from anywhere",
        "Reduced operational costs significantly",
        "Increased student engagement and practical learning outcomes",
      ],
      resultsNl: [
        "Behoefte aan dure fysieke hardware per student geëlimineerd",
        "Leren 24/7 van overal toegankelijk gemaakt",
        "Operationele kosten aanzienlijk verlaagd",
        "Studentenbetrokkenheid en praktische leerresultaten verhoogd",
      ],
      impact: "Democratized access to professional infrastructure training, enabling more students to develop practical cloud and infrastructure skills with minimal hardware investment.",
      impactNl: "Professionele infrastructuurtraining is nu voor meer studenten toegankelijk, zodat ze praktische cloud- en infrastructuurvaardigingen kunnen ontwikkelen met minimale hardware-investering.",
      technologies: ["Virtualization", "Cloud Infrastructure", "Remote Access"],
    },
    {
      id: 3,
      title: "AI-Powered Infrastructure as Code Agent",
      organization: "Delaware (Internship)",
      date: "June 2026 – Present",
      shortDescription: "Cutting-edge AI agent that transforms architecture designs into production-ready infrastructure code",
      shortDescriptionNl: "Geavanceerde AI-agent die architectuuraanzichten omzet in productie-klare infrastructuurcode",
      challenge: "Converting architectural diagrams into Infrastructure as Code (Terraform/Bicep) is time-consuming, error-prone, and requires deep technical expertise. Teams waste hours translating designs into code.",
      challengeNl: "Het omzetten van architectuuraanzichten naar Infrastructure as Code (Terraform/Bicep) kost veel tijd, is foutgevoelig en vereist diepgaande technische expertise. Teams verspillen uren aan het omzetten van aanzichten naar code.",
      approach: "Developed an intelligent AI Agent that analyzes architecture designs and generates ready-to-use infrastructure code, bridging the gap between architects and DevOps engineers.",
      solution: "Integrated advanced AI to understand architecture requirements, analyze design specifications, and generate optimized Terraform and Bicep code. Implemented validation and best-practice enforcement.",
      solutionNl: "Geavanceerde AI geïntegreerd om architectuurvereisten te begrijpen, specificaties te analyseren en geoptimaliseerde Terraform- en Bicep-code te genereren. Validatie en best-practice-handhaving geïmplementeerd.",
      tools: ["AI API", "Terraform", "Bicep", "Azure", "Python", "Architecture Analysis"],
      results: [
        "Reduced infrastructure provisioning time by automating code generation",
        "Ensured consistency and security best practices in generated code",
        "Enabled non-engineers to provision infrastructure from designs",
        "Created a scalable, reusable infrastructure automation pipeline",
      ],
      resultsNl: [
        "Infrastructuurvoorzieningingstime gereduceerd door codeautomatisering",
        "Consistentie en beveiligingsbest practices in gegenereerde code gegarandeerd",
        "Niet-ingenieurs in staat gesteld om infrastructuur op basis van aanzichten in te richten",
        "Schaalbare, herbruikbare infrastructuurautomatiseringspijplijn gemaakt",
      ],
      impact: "Revolutionary approach to infrastructure provisioning that accelerates cloud deployment cycles, reduces human error, and democratizes infrastructure knowledge across teams.",
      impactNl: "Een revolutionair aanpak van infrastructuurprovisioning die implementatiecycli versnelt, menselijke fouten vermindert en infrastructuurkennis democratiseert in het hele team.",
      technologies: ["AI/ML", "Infrastructure as Code", "Cloud Automation", "DevOps"],
      featured: true,
    },
  ],

  experience: [
    {
      role: "Cloud Engineering Intern",
      company: "Delaware",
      duration: "June 2026 – Present",
      description: "Working on innovative AI-powered Infrastructure as Code solutions using advanced AI models, Terraform, and Bicep. Developing enterprise-grade automation tooling for cloud infrastructure provisioning.",
      descriptionNl: "Werkend aan innovatieve AI-aangestuurde Infrastructure as Code-oplossingen met geavanceerde AI-modellen, Terraform en Bicep. Het ontwikkelen van enterprise-grade automatiseringstools voor cloudinfrastructuurprovisioning.",
      highlights: [
        "Designing AI-Agents for infrastructure automation",
        "Developing Terraform and Bicep modules",
        "Implementing cloud architecture best practices",
        "Collaborating with cloud architects and DevOps teams",
      ],
      highlightsNl: [
        "AI-Agents ontwerpen voor infrastructuurautomatisering",
        "Terraform- en Bicep-modules ontwikkelen",
        "Cloud architectuur best practices implementeren",
        "Samenwerken met cloud architecten en DevOps teams",
      ],
    },
    {
      role: "Bachelor Student - Cybersecurity & Infrastructure",
      company: "VIVES Kortrijk",
      duration: "2023 – 2026",
      description: "Comprehensive cybersecurity and infrastructure engineering education with hands-on projects in networking, cloud architecture, and security.",
      descriptionNl: "Uitgebreid onderwijs in cyberbeveiliging en infrastructuurengineering met praktische projecten in netwerking, cloudarchitectuur en beveiliging.",
      highlights: [
        "Network Optimization and Enterprise Networking",
        "Cloud Architecture and Infrastructure as Code",
        "Security and Penetration Testing",
        "Infrastructure Automation and DevOps practices",
      ],
      highlightsNl: [
        "Netwerkoptimalisatie en Enterprise Networking",
        "Cloud-architectuur en Infrastructure as Code",
        "Beveiliging en penetratietesten",
        "Infrastructuurautomatisering en DevOps-praktijken",
      ],
    },
  ],

  languages: [
    { name: "Dutch", level: "Native" },
    { name: "English", level: "B2" },
    { name: "French", level: "B1" },
  ],

  vision: {
    shortTerm: "Master cloud engineering, deepen DevOps expertise, and build production-grade infrastructure automation solutions.",
    longTerm: "Lead infrastructure innovation at scale, pioneering the intersection of AI and Infrastructure as Code to transform how enterprises provision and manage cloud resources.",
    interests: "Cloud Engineering, AI-powered Automation, Infrastructure as Code, DevOps, Enterprise Architecture",
  },
};
