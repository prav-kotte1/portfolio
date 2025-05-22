const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];


const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "C++",
    modelPath: "/models/c.glb",
    scale: 0.09,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/js.glb",
    scale: 0.20,
    rotation: [0, 0, 0],
  },
  {
    name: "HTML5",
    modelPath: "/models/html.glb",
    scale: 0.1,
    rotation: [-1, -1, 0],
  },
  {
    name: "CSS3",
    modelPath: "/models/css.glb",
    scale: 0.1,
    rotation: [0,-3, 0],
  },
  // {
  //   name: "Tailwind CSS",
  //   modelPath: "/models/tailwind-transformed.glb",
  //   scale: 0.5,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 4,
    rotation: [0, -Math.PI / 2, 0],
  },
  // {
  //   name: "Express.js",
  //   modelPath: "/models/express-transformed.glb",
  //   scale: 0.5,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   name: "MongoDB",
  //   modelPath: "/models/mongodb-transformed.glb",
  //   scale: 0.4,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   name: "MySQL",
  //   modelPath: "/models/mysql-transformed.glb",
  //   scale: 0.4,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   name: "SQL Server",
  //   modelPath: "/models/sqlserver-transformed.glb",
  //   scale: 0.4,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Git",
    modelPath: "/models/git.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "GitHub",
    modelPath: "/models/github.glb",
    scale: 0.5,
    rotation: [-1, 0, 0],
  },
  // {
  //   name: "Jupyter Notebook",
  //   modelPath: "/models/jupyter-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   name: "VS Code",
  //   modelPath: "/models/vscode-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "AWS",
    modelPath: "/models/aws.glb",
    scale: 0.19,
    rotation: [0, 0, 0],
  },
];


const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/github.png",
    url: "https://github.com/prav-kotte1",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/kotte-pravallika/",
  },
  {
    name: "LeetCode",
    imgPath: "/images/lc.png",
    url: "https://leetcode.com/u/pravallika67/",
  },
];


export {
  words,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  navLinks,
};