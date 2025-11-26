import { FaBriefcase, FaClipboardList, FaCloudUploadAlt } from "react-icons/fa";

export const projectsData = [
  {
    id: "personal1",
    title: "Portfolio Website",
    role: "Personal Project",
    description:
      "The very website you are browsing now. A responsive, modern personal portfolio built from scratch to showcase my skills in web development and design. Features smooth animations and interactive elements.",
    icon: FaBriefcase,
    techStack: ["React", "Tailwind CSS", "JavaScript", "Swiper.js"],
    modalDescription:
      "This project is a personal initiative to create a professional online presence. It serves as a dynamic resume and a gallery for my work. The focus was on creating a clean, responsive design with smooth user experience and animations to showcase my frontend development capabilities.",
    responsibilities: [],
    githubUrl: "https://github.com/khoirulmalik/portfolio-react",
    demoUrl: "https://khoirulmalik.github.io/portfolio",
  },
  {
    id: "personal2",
    title: "Full-Stack Task Manager",
    role: "Personal Project",
    description:
      "A full-stack web application for managing tasks and projects. Users can create accounts, organize tasks by projects, set deadlines, and track progress. Built with a RESTful API backend and a dynamic frontend.",
    icon: FaClipboardList,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    modalDescription:
      "A personal project to build a complete task management application. It allows users to register, log in, create, update, and delete tasks. Tasks can be categorized into projects. This project was an exercise in building a secure RESTful API with user authentication and a reactive frontend to consume it.",
    responsibilities: [],
    githubUrl: "https://github.com/khoirulmalik/task-manager",
    demoUrl: "https://task-manager-demo.vercel.app",
  },
  {
    id: "personal3",
    title: "Cloud File Storage Service",
    role: "Personal Project",
    description:
      "A simplified clone of a cloud storage service. This project involved creating a backend service to handle file uploads/downloads and a web interface to manage files and folders, focusing on cloud integration.",
    icon: FaCloudUploadAlt,
    techStack: ["Python", "Flask", "PostgreSQL", "AWS S3", "Docker"],
    modalDescription:
      "An exploratory project to understand the architecture of cloud storage services. This application provides basic file and folder management functionalities, including upload, download, and delete. The backend is built with Python and Flask, and it integrates with an external object storage service like AWS S3 for file persistence. The application is containerized using Docker for easy deployment.",
    responsibilities: [],
    githubUrl: "https://github.com/khoirulmalik/cloud-storage",
    demoUrl: null,
  },
];
