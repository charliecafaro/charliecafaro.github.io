/**
 * Portfolio Data Configuration
 * Updated to match Charlie Cafaro's CV
 */

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Charlie Cafaro",
    title: "Technical Artist | Game Developer | UI/UX Design",
    email: "charliecafaro@gmail.com",
    location: "Montevideo, Uruguay",
    availability: "Available for new opportunities",
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
      "With over a decade of experience in mobile game development and digital media, I bring expertise that spans Unity development, 3D modelling, animation and digital media, with a strong foundation in programming and UI/UX design.",
      "I have proven ability to manage the entire production process, from visual direction to implementation, while collaborating with cross-functional teams to optimize workflows.",
      "My experience includes designing and implementing custom Unity tools and pipelines, leading full game visual overhauls, and developing advanced shaders and post-processing effects to enhance visual storytelling."
    ],
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "3", label: "Companies" },
      { number: "50+", label: "Projects worked on" },
      { number: "Editor", label: "Tools" }
    ]
  },

    // Projects Section - Updated based on experience
  projects: [
    {
      title: "Unity Tools & Pipelines",
      icon: "fas fa-tools",
      description: "Designed and implemented custom Unity tools and pipelines at Homa, optimizing asset workflows and visual quality across multiple game projects.",
      tags: ["Unity", "C#", "Pipeline", "Tools", "Optimization"],
      links: [
        { text: "Learn More", url: "#", type: "primary", icon: "fas fa-info-circle" }
      ]
    },
    {
      title: "Game Visual Overhauls",
      icon: "fas fa-paint-brush",
      description: "Led multiple full game visual overhauls, developing advanced shaders, post-processing effects, and cinematic sequences to enhance visual storytelling.",
      tags: ["Shaders", "Post-Processing", "Visual Effects", "Cinematic"],
      links: [
        { text: "Portfolio", url: "#", type: "primary", icon: "fas fa-images" }
      ]
    },
    {
      title: "ECS Game Systems",
      icon: "fas fa-cogs",
      description: "Built responsive UI systems and developed core game logic using ECS patterns for performance and modularity at Pomelo Games.",
      tags: ["Unity", "ECS", "Performance", "UI Systems", "Architecture"],
      links: [
        { text: "Case Study", url: "#", type: "primary", icon: "fas fa-chart-line" }
      ]
    },
    {
      title: "Cross-Platform Games",
      icon: "fas fa-gamepad",
      description: "Developed and maintained client-side game code across multiple platforms using ActionScript 3.0, HTML5 (Phaser), and C++ (Oxygine) at ConectaGames.",
      tags: ["ActionScript", "HTML5", "C++", "Cross-Platform", "UI/UX"],
      links: [
        { text: "Portfolio", url: "#", type: "primary", icon: "fas fa-desktop" }
      ]
    }
  ],

  // Experience Section - From CV
  experience: [
    {
      company: "Homa",
      position: "Technical Artist & Game Developer",
      duration: "2022 - 2025",
      description: "Designed and implemented custom Unity tools and pipelines while leading visual overhauls and creating advanced technical art solutions.",
      achievements: [
        "Designed and implemented custom Unity tools and pipelines",
        "Led multiple full game visual overhauls, optimizing asset pipelines and visual quality",
        "Developed advanced shaders, post-processing effects, and cinematic sequences",
        "Produced 3D models, rigs, and textures for characters and environments",
        "Created 2D animations and assets for UI and gameplay integration",
        "Collaborated cross-functionally with developers, artists, and product managers",
        "Provided technical art support and workflow optimization across departments"
      ],
      technologies: ["Unity", "Shaders", "3D Modeling", "Animation", "Pipeline Tools"]
    },
    {
      company: "Pomelo Games",
      position: "Programmer",
      duration: "2020 - 2021",
      description: "Built responsive UI systems and developed core game logic using ECS patterns for performance optimization.",
      achievements: [
        "Built responsive UI systems with Unity's UI tools",
        "Developed core game logic using ECS patterns for performance and modularity",
        "Utilized bitmasking and enum flag serialization for efficient state management",
        "Collaborated with top-level engineers, learning professional Unity development practices",
        "Focused on clean architecture and scalable design patterns"
      ],
      technologies: ["Unity", "ECS", "UI Systems", "C#", "Performance Optimization"]
    },
    {
      company: "ConectaGames",
      position: "Game Developer & 2D Artist",
      duration: "2012 - 2020",
      description: "Full-stack game development including client-side programming, UI/UX design, and 2D asset creation across multiple platforms.",
      achievements: [
        "Developed client-side game code using ActionScript 3.0, HTML5 (Phaser), and C++ (Oxygine)",
        "Designed and implemented responsive UI/UX elements",
        "Created and animated 2D assets using traditional and programmatic techniques",
        "Collaborated with senior engineers on Java-based server backend integration",
        "Defined internal art production workflows and mentored junior team members",
        "Produced technical documentation and bilingual content (Spanish/English)"
      ],
      technologies: ["ActionScript", "HTML5", "C++", "Java", "2D Animation", "UI/UX"]
    }
  ],

  // Education Section - From CV
  education: [
    {
      institution: "Universidad ORT Uruguay",
      degree: "BA in Animation and Videogame Design",
      duration: "2015 - 2020",
      description: "Multidisciplinary training in game design, 3D/2D art, animation, and interactive development with Unity focus.",
      achievements: [
        "Acquired training in game design, 3D/2D art, animation, and interactive development",
        "Strong focus on Unity-based prototyping and production workflows",
        "Hands-on experience with Unity, Adobe Suite, and 3D tools",
        "Graduation project awarded national development grant from ACAU"
      ],
      technologies: ["Unity", "Game Design", "3D Art", "Animation", "Adobe Suite"]
    },
    {
      institution: "Universidad ORT Uruguay",
      degree: "Computer Science",
      duration: "2011 - 2013",
      description: "Solid foundation in programming, algorithms, and software design principles.",
      achievements: [
        "Built foundation in programming, algorithms, and software design",
        "Experience with OOP, databases, and debugging practices",
        "Developed problem-solving and technical reasoning skills"
      ],
      technologies: ["Programming", "Algorithms", "OOP", "Databases"]
    }
  ],

  // Contact Information
  contact: {
    title: "Get In Touch",
    subtitle: "Available for technical art projects, Unity development, and creative collaborations",
    description: "Feel free to reach out for opportunities, collaborations, or just to connect—I'd love to hear about your project!",
    items: [
      {
        icon: "fas fa-envelope",
        title: "Email",
        value: "charliecafaro@gmail.com"
      },
      {
        icon: "fas fa-map-marker-alt",
        title: "Location",
        value: "Montevideo, Uruguay"
      },
      {
        icon: "fas fa-briefcase",
        title: "Status",
        value: "Available for opportunities"
      }
    ]
  }
};

// Dynamic content loading (optional - for future use)
export const loadDynamicContent = async () => {
  try {
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

// Skills V2

export const skillsV2 = [
  {
    group: "Programming & Development",
    items: [
      { name: "Unity", type: "Engine", tags: ["Gameplay", "Tools"] },
      { name: "C#", type: "Language", tags: ["Gameplay", "Editor"] },
      { name: "Java", type: "Language", tags: ["Back-end"] },
      { name: "JavaScript", type: "Language", tags: ["Web", "UI"] },
      { name: "C/C++", type: "Language", tags: ["Engines", "Performance"] },
      { name: "Git", type: "Tooling", tags: ["VCS", "CI/CD"] },
    ],
  },
  {
    group: "3D & Technical Art",
    items: [
      { name: "3D Modelling", type: "3D", tags: ["Assets", "Optimization"] },
      { name: "Rigging", type: "3D", tags: ["Characters", "Animation"] },
      { name: "Texturing", type: "3D", tags: ["Substance", "UVs"] },
      { name: "Topology", type: "3D", tags: ["Retopo", "Deformation"] },
      { name: "3D & 2D Animation", type: "Animation", tags: ["Gameplay", "Cinematic"] },
      { name: "Digital Illustration", type: "2D", tags: ["Concept", "UI"] },
      { name: "Shaders", type: "Rendering", tags: ["URP/HDRP", "Post"] },
      { name: "Post-Processing", type: "Rendering", tags: ["Color", "AA", "FX"] },
    ],
  },
  {
    group: "Creative Tools",
    items: [
      { name: "Adobe Animate", type: "Suite", tags: ["2D", "Animation"] },
      { name: "Adobe Photoshop", type: "Suite", tags: ["2D", "Texturing"] },
      { name: "Adobe After Effects", type: "Suite", tags: ["Motion", "Compositing"] },
      { name: "Adobe Illustrator", type: "Suite", tags: ["Vector", "UI"] },
      { name: "Spine 2D", type: "Animation", tags: ["Rigging", "UI/FX"] },
      { name: "Clip Studio Paint EX", type: "2D", tags: ["Illustration", "Comics"] },
      { name: "Blender", type: "3D DCC", tags: ["Model", "Rig", "Bake"] },
      { name: "Maya", type: "3D DCC", tags: ["Rig", "Anim"] },
      { name: "Substance Painter", type: "Texturing", tags: ["PBR", "Bakes"] },
    ],
  },
];

// Languages (from CV)
export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Proficient" },
];