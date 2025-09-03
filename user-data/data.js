/**
 * Portfolio Data Configuration
 * Easy-to-edit content for Charlie Cafaro's portfolio
 */

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Charlie Cafaro",
    title: "Unity Technical Artist",
    email: "charliecafaro@gmail.com",
    location: "Remote / Worldwide",
    availability: "Open for new opportunities",
    profileImage: "./logo.png"
  },

  // Social Links
  social: {
    github: "https://github.com/charliecafaro",
    linkedin: "https://linkedin.com/in/charliecafaro",
    email: "mailto:charliecafaro@gmail.com"
  },

  // About Section
  about: {
    paragraphs: [
      "I'm a seasoned Unity Technical Artist with deep expertise in building complex, Asset Store-quality tools and systems. My background spans custom editors, ECS architecture, shader development, and performance optimization.",
      "I specialize in creating designer-friendly workflows and robust technical solutions that scale across large development teams. My tools like Material Forge and ActionForge demonstrate my commitment to clean architecture and extensible design.",
      "Currently developing a 2.5D survival RPG while publishing advanced Unity tools, I bring both creative vision and technical precision to every project."
    ],
    stats: [
      { number: "5+", label: "Years Unity" },
      { number: "10+", label: "Tools Built" },
      { number: "3+", label: "Asset Store" },
      { number: "50+", label: "Projects" }
    ]
  },

  // Skills Section
  skills: [
    {
      category: "Unity Development",
      skills: [
        { name: "C# & Unity Core", level: 5 },
        { name: "ECS & DOTS", level: 4 },
        { name: "UI Toolkit", level: 5 },
        { name: "Custom Editors", level: 5 }
      ]
    },
    {
      category: "Graphics & Shaders",
      skills: [
        { name: "HLSL/ShaderGraph", level: 4 },
        { name: "URP Pipeline", level: 4 },
        { name: "VFX Graph", level: 3 },
        { name: "Blender", level: 3 }
      ]
    },
    {
      category: "Tools & Pipeline",
      skills: [
        { name: "Asset Pipelines", level: 5 },
        { name: "Performance Optimization", level: 4 },
        { name: "Git & Version Control", level: 5 },
        { name: "CI/CD Pipelines", level: 3 }
      ]
    }
  ],

  // Projects Section
  projects: [
    {
      title: "Material Forge",
      icon: "fas fa-hammer",
      description: "Advanced Unity tool for procedural material generation with real-time preview, batch processing, and extensive customization options.",
      tags: ["Unity", "C#", "UI Toolkit", "Shaders", "Asset Store"],
      links: [
        { text: "Asset Store", url: "#", type: "primary", icon: "fab fa-unity" },
        { text: "GitHub", url: "#", type: "secondary", icon: "fab fa-github" }
      ]
    },
    {
      title: "ActionForge",
      icon: "fas fa-cog",
      description: "Visual scripting system for Unity with node-based editor, custom actions, and seamless integration with existing codebases.",
      tags: ["Unity", "Visual Scripting", "Graph API", "Custom Editor"],
      links: [
        { text: "Asset Store", url: "#", type: "primary", icon: "fab fa-unity" },
        { text: "Demo", url: "#", type: "secondary", icon: "fas fa-play" }
      ]
    },
    {
      title: "Survival RPG 2.5D",
      icon: "fas fa-gamepad",
      description: "Comprehensive 2.5D survival RPG featuring ECS architecture, advanced inventory systems, crafting mechanics, and procedural generation.",
      tags: ["Unity", "ECS", "RPG Systems", "Procedural", "2.5D"],
      links: [
        { text: "Coming Soon", url: "#", type: "primary", icon: "fab fa-steam" },
        { text: "Devlog", url: "#", type: "secondary", icon: "fab fa-youtube" }
      ]
    },
    {
      title: "Sequences Framework",
      icon: "fas fa-magic",
      description: "Powerful sequence management system built at Homa Games, widely adopted across multiple teams for managing game events and transitions.",
      tags: ["Unity", "Framework", "Enterprise", "Timeline"],
      links: [
        { text: "Case Study", url: "#", type: "primary", icon: "fas fa-info-circle" }
      ]
    }
  ],

  // Experience Section
  experience: [
    {
      company: "Homa Games",
      position: "Senior Unity Technical Artist",
      duration: "Feb 2022 - Present (3+ Years)",
      description: "Leading technical development in the marketing department, building tools and frameworks used across dozens of projects and multiple teams.",
      achievements: [
        "Developed the Sequences Framework, adopted company-wide for managing game events and transitions",
        "Built custom Unity tools for rapid prototyping and asset pipeline optimization",
        "Created automated testing systems that reduced QA time by 60%",
        "Mentored junior developers and established coding standards across teams",
        "Collaborated with designers to create intuitive, artist-friendly workflows"
      ],
      technologies: ["Unity", "C#", "Custom Editors", "Pipeline Tools", "Team Leadership"]
    },
    {
      company: "Freelance / Asset Store",
      position: "Unity Developer & Publisher",
      duration: "2020 - Present",
      description: "Independent development of Unity tools and systems, with focus on Asset Store publishing and client work.",
      achievements: [
        "Published multiple Asset Store tools with 4.8+ star ratings",
        "Developed custom solutions for indie and AA game studios",
        "Created comprehensive documentation and video tutorials",
        "Built strong community presence through forums and Discord support"
      ],
      technologies: ["Unity", "Asset Store", "Client Work", "Documentation"]
    }
  ],

  // Contact Information
  contact: {
    title: "Get In Touch",
    subtitle: "Ready to collaborate on your next Unity project or discuss technical opportunities",
    description: "Feel free to email me for questions, business opportunities, or just to say hello—I'd love to hear from you!",
    items: [
      {
        icon: "fas fa-envelope",
        title: "Email",
        value: "charliecafaro@gmail.com"
      },
      {
        icon: "fas fa-map-marker-alt",
        title: "Location",
        value: "Remote / Worldwide"
      },
      {
        icon: "fas fa-clock",
        title: "Availability",
        value: "Open for new opportunities"
      }
    ]
  }
};

// Dynamic content loading (optional - for future use)
export const loadDynamicContent = async () => {
  // This could load content from an API or CMS in the future
  try {
    // Example: const response = await fetch('/api/portfolio-data');
    // return await response.json();
    return portfolioData;
  } catch (error) {
    console.error('Error loading dynamic content:', error);
    return portfolioData;
  }
};

// Content validation
export const validatePortfolioData = (data) => {
  const required = ['personal', 'about', 'skills', 'projects', 'experience', 'contact'];
  const missing = required.filter(key => !data[key]);

  if (missing.length > 0) {
    console.warn('Missing required portfolio data sections:', missing);
    return false;
  }

  return true;
};

// Default export
export default portfolioData;