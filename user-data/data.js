export const bio = [
  "Hello, I'm Charlie Cafaro!",
  "I’m a passionate and experienced <strong>Unity Developer</strong> specializing in gameplay, tools, and creative technical solutions.",
  "Beyond coding, I enjoy traveling, making games, and experimenting with new ideas.",
];

export const skills = [
  "Unity, C#, ECS/DOTS",
  "Blender, Photoshop, Spine 2D",
  "Shader Graph, VFX, Cinematics",
  "Git, Addressables, Editor Tooling",
];

export const experience = [
  {
    title: "Homa Games",
    duration: "February 2022 - June 2025",
    subtitle: "Technical Artist / Creative Unity Developer",
    details: [
      "Worked in the marketing department iterating on dozens of Unity projects.",
      "Developed advanced editor tooling and automated workflows.",
    ],
    tags: ["Unity", "C#", "Blender", "Photoshop", "Spine 2D", "After Effects", "GitHub"],
    icon: "truck",
  },
  {
    title: "Indie Development",
    duration: "2016 - Present",
    subtitle: "Game Developer",
    details: [
      "Building survival RPG projects with ECS-based architecture.",
      "Developing commercial Unity Asset Store tools (MaterialForge, ActionForge, etc.).",
    ],
    tags: ["Unity", "C#", "ECS", "Asset Store"],
    icon: "gamepad",
  },
];

export const education = [
  {
    title: "B.Sc. in Computer Science",
    duration: "2012 - 2016",
    subtitle: "Montevideo, Uruguay",
    details: [],
    tags: ["Programming", "Software Engineering", "Graphics"],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/charliecafaro",
      },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by Charlie Cafaro"],
  },
];

/* -------------------
   PROJECTS DATA
-------------------- */
export const projects = [
  {
    category: "Games",
    groups: [
      {
        title: "Survival RPG",
        videos: [
          { thumb: "images/rpg-thumb1.jpg", src: "videos/rpg1.mp4", title: "Gameplay Trailer" },
          { thumb: "images/rpg-thumb2.jpg", src: "videos/rpg2.mp4", title: "Combat Showcase" },
        ],
      },
      {
        title: "Puzzle Adventure",
        videos: [
          { thumb: "images/puzzle-thumb.jpg", src: "videos/puzzle.mp4", title: "Level Demo" },
        ],
      },
    ],
  },
  {
    category: "Tools",
    groups: [
      {
        title: "Unity Editor Extensions",
        videos: [
          { thumb: "images/tool-thumb.jpg", src: "videos/tool.mp4", title: "Editor Walkthrough" },
        ],
      },
    ],
  },
  {
    category: "Confidential",
    confidential: true,
    groups: [
      {
        title: "Prototype XYZ",
        videos: [
          { thumb: "images/conf-thumb.jpg", src: "videos/conf.mp4", title: "Confidential Demo" },
        ],
      },
    ],
  },
];
