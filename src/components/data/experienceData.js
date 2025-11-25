import { FaTicketAlt, FaTasks, FaChild, FaSolarPanel } from "react-icons/fa";

export const experienceData = [
  {
    id: "exp1",
    title: "Community Service Program (KKN)",
    role: "Web Developer & Digital Transformation Lead",
    duration: "Jun 2025 – Aug 2025 | Mentawai Islands",
    description:
      "Led digital transformation by developing two web-based solutions for public information and internal administration.",
    image: "/assets/kkn.png",
    techStack: ["PostgreSQL", "Express.js", "React", "Node.js"],
    modalDescription:
      "Led the digital transformation initiative for the village community in Mentawai Islands by developing two critical web-based solutions for public information dissemination and internal administrative tasks.",
    responsibilities: [
      "Built a full-stack resident database system using the PERN (PostgreSQL, Express.js, React, Node.js) stack to improve data accessibility and management efficiency.",
      "Redesigned the official village website with a modern UI/UX using a low-code/no-code platform (Hostinger Website Builder), enhancing public access to information.",
      "Conducted training sessions for over 5 village officials to ensure the successful adoption and long-term sustainability of the new digital platforms.",
    ],
  },
  {
    id: "exp2",
    title: "Yayasan Al – Azhar Kelapa Gading",
    role: "Software Engineer Intern",
    duration: "Mar 2025 – Jul 2025 | Jakarta",
    description:
      "Built a full-stack internal ticketing system, automating workflows and reducing manual service requests by 70%.",
    icon: FaTicketAlt,
    techStack: ["PERN Stack", "TypeScript", "Prisma", "REST API"],
    modalDescription:
      "Developed a full-stack internal ticketing system from the ground up to streamline and automate IT service requests, achieving a 70% reduction in manual processing.",
    responsibilities: [
      "Engineered the system using a PERN (PostgreSQL, Express, React, Node.js) stack with TypeScript for enhanced type safety and code quality.",
      "Designed a scalable database schema using Prisma ORM and developed comprehensive RESTful APIs featuring Service Level Agreement (SLA) tracking.",
      "Delivered a responsive, role-based user interface with React.js, which significantly improved transparency and accountability in the service request process.",
    ],
  },
  {
    id: "exp3",
    title: "PT Parama Data Unit",
    role: "Project Manager & Backend Developer",
    duration: "Aug 2024 – Dec 2024 | Yogyakarta",
    description:
      "Led a team of 16 students across 5 divisions. Designed and implemented RESTful APIs with WebSocket integration.",
    icon: FaTasks,
    techStack: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
    modalDescription:
      "Managed a student project team and contributed as a backend developer to deliver a functional prototype within the specified timeline.",
    responsibilities: [
      "Led a team of 16 students across 5 divisions (Backend, Frontend, UI/UX, AI, QA) utilizing the Waterfall project management methodology.",
      "Designed and implemented RESTful APIs using Node.js and Express.js for the core application logic.",
      "Integrated computer vision results from OpenCV via WebSocket for real-time data communication.",
      "Successfully delivered a functional prototype using Node.js, Express.js, MongoDB, and basic HTML/CSS.",
    ],
  },
  {
    id: "exp4",
    title: "Kidiko",
    role: "Full Stack Web Developer Intern",
    duration: "May 2024 – Aug 2024 | Yogyakarta",
    description:
      "Developed prototype website (MEVN stack) for kidiko.id, enabling MVP launch and implementing core functionalities.",
    icon: FaChild,
    techStack: ["MEVN Stack", "Vue.js", "MongoDB", "Chatbot"],
    modalDescription:
      "Contributed to the initial launch of kidiko.id by developing a prototype website and implementing key features.",
    responsibilities: [
      "Developed the prototype website for kidiko.id using the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack, which was critical for the MVP launch.",
      "Configured the development environment and implemented core Authentication, Authorization, and Accounting (AAA) functionalities.",
      "Integrated a chatbot feature to enhance user interaction and engagement on the platform.",
    ],
  },
  {
    id: "exp5",
    title: "PT Tripower Solar Nusantara",
    role: "Web Developer Intern",
    duration: "May 2024 – Aug 2024 | Yogyakarta",
    description:
      "Developed web applications using HTML, CSS, JavaScript, Node.js, and MongoDB to support internal operations and workflows.",
    icon: FaSolarPanel,
    techStack: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
    modalDescription:
      "As part of the development team, I contributed to building and designing web applications to support the company's internal operations.",
    responsibilities: [
      "Developed web applications using a stack that included HTML, CSS, JavaScript, Node.js, and MongoDB.",
      "Collaborated with the team to design and implement solutions using the Express.js framework, which helped improve the efficiency of internal workflows.",
      "Actively contributed to the early-stage design and planning phases of new web applications.",
    ],
  },
];
