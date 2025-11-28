import {
  FaJs,
  FaPython,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaLinux,
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiPrisma,
  SiTailwindcss,
  SiRedis,
  SiTerraform,
  SiGithubactions,
  SiSwagger,
  SiJest,
  SiPostman,
} from "react-icons/si";
import { HiServer, HiShieldCheck } from "react-icons/hi";
import { MdNetworkWifi, MdApi } from "react-icons/md";
import { VscJson } from "react-icons/vsc";

export const techStackData = [
  // Programming Languages
  { id: 1, name: "JavaScript", icon: FaJs, category: "language" },
  { id: 2, name: "TypeScript", icon: SiTypescript, category: "language" },
  { id: 3, name: "Python", icon: FaPython, category: "language" },
  { id: 4, name: "C++", icon: SiCplusplus, category: "language" },

  // Frontend Technologies
  { id: 5, name: "HTML/CSS", icon: FaHtml5, category: "frontend" },
  { id: 6, name: "React.js", icon: FaReact, category: "frontend" },
  { id: 7, name: "Angular", icon: FaAngular, category: "frontend" },
  { id: 8, name: "Vue.js", icon: FaVuejs, category: "frontend" },
  { id: 9, name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },

  // Backend Technologies
  { id: 10, name: "Node.js", icon: FaNodeJs, category: "backend" },
  { id: 11, name: "Express.js", icon: SiExpress, category: "backend" },
  { id: 12, name: "NestJS", icon: SiNestjs, category: "backend" },
  { id: 13, name: "Flask", icon: SiFlask, category: "backend" },
  { id: 14, name: "REST API", icon: MdApi, category: "backend" },
  { id: 15, name: "Swagger/OpenAPI", icon: SiSwagger, category: "backend" },

  // Databases & ORM
  { id: 16, name: "PostgreSQL", icon: SiPostgresql, category: "database" },
  { id: 17, name: "MongoDB", icon: SiMongodb, category: "database" },
  { id: 18, name: "Redis", icon: SiRedis, category: "database" },
  { id: 19, name: "Prisma ORM", icon: SiPrisma, category: "database" },

  // DevOps & Cloud
  { id: 20, name: "Docker", icon: FaDocker, category: "devops" },
  { id: 21, name: "Terraform", icon: SiTerraform, category: "devops" },
  { id: 22, name: "GitHub Actions", icon: SiGithubactions, category: "devops" },
  { id: 23, name: "AWS", icon: FaAws, category: "devops" },
  { id: 24, name: "Linux", icon: FaLinux, category: "devops" },

  // Tools & Others
  { id: 25, name: "Git", icon: FaGitAlt, category: "tools" },
  { id: 26, name: "NPM", icon: FaNpm, category: "tools" },
  { id: 27, name: "Postman", icon: SiPostman, category: "tools" },
  { id: 28, name: "Jest", icon: SiJest, category: "tools" },
  { id: 29, name: "Networking", icon: MdNetworkWifi, category: "other" },
  { id: 30, name: "Cybersecurity", icon: HiShieldCheck, category: "other" },
];
