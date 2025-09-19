// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.webp';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/react.png';
import tailwindcssLogo from './assets/tech_logo/tailwind.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.webp';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.jpg';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.jpg';
import postmanLogo from './assets/tech_logo/postman.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/modulation.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/btkit.png';
import bsaLogo from './assets/education_logo/ggp.png';
import vpsLogo from './assets/education_logo/svm.jpg';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/social app.png';
import portfolio from './assets/work_logo/portfolio.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Digital Modulation",
      date: "May2025 - June2025",
      desc: "Worked on developing and enhancing web applications using HTML, CSS, JavaScript, and Node.js. Implemented responsive UI, integrated APIs, and managed databases with SQL/NoSQL. Used Git for version control and collaborated on full-stack development tasks.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "BTKIT Dwarahat",
      date: "sept2022 - june2025",
      grade: "69%",
      desc: "I have completed my Bachelor's degree (Btech) in Computer Science Engineering from BTKIT Dwarahat, Almora.",
      degree: "Bachelor Of Technology (Btech)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "GGP Almora",
      date: "2020 - 2022",
      grade: "85%",
      desc: "I have completed my Deploma in Information Technology from Girls Polytechnic Almora.",
      degree: "Diploma",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Saraswati VMIC Tarikhet, Almora",
      date: "29,July  2020",
      grade: "67%",
      desc: "I completed my class 12 education from SVMIC, Tarikhet, under the UK board.",
      degree: "UK(XII)",
    },

  ];
  
  export const projects = [
    {
      id: 0,
      title: "Social media app",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Diksha9761",
      webapp: "https://mern-social-platform-app.onrender.com",
    },
    {
      id: 1,
      title: "porfolio website",
      description:
        "A modern and respective personal portfolio website built with React.js, Tailwind CSS, and Vite to showcase my skills,projects,and contact information.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/Diksha9761",
      webapp: "https://myportfolio-nine-ivory-60.vercel.app/",
    },
  ];  
