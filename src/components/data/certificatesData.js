import {
  FaCloud,
  FaNetworkWired,
  FaRoute,
  FaServer,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaHtml5,
  FaMicrochip,
  FaCss3Alt,
  FaAws,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";

export const certificatesData = [
  // Dicoding Certificates
  {
    id: 1,
    title: "Menjadi Back-End Developer Expert dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Nov 2025 - Nov 2028",
    credentialId: "QLZ96O5RMZ5D",
    credentialUrl: "https://www.dicoding.com/certificates/QLZ96O5RMZ5D",
    icon: FaNodeJs,
  },
  {
    id: 2,
    title: "Menjadi Node.js Application Developer",
    issuer: "Dicoding Indonesia",
    date: "Nov 2025 - Nov 2028",
    credentialId: "1OP8JM58LPQK",
    credentialUrl: "https://www.dicoding.com/certificates/1OP8JM58LPQK",
    icon: FaNodeJs,
  },
  {
    id: 3,
    title: "Belajar Fundamental Back-End dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Nov 2025 - Nov 2028",
    credentialId: "MEPJ2W0NWP3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJ2W0NWP3V",
    icon: FaServer,
  },
  {
    id: 4,
    title: "Belajar Implementasi CI/CD",
    issuer: "Dicoding Indonesia",
    date: "Nov 2025 - Nov 2028",
    credentialId: "MEPJ235KLP3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJ235KLP3V",
    icon: FaCode,
  },
  {
    id: 5,
    title: "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
    issuer: "Dicoding Indonesia",
    date: "Oct 2025",
    credentialId: "N9ZO2Q4KRPG5",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZO2Q4KRPG5",
    icon: FaAws,
  },
  {
    id: 6,
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "Oct 2025 - Oct 2028",
    credentialId: "81P25V4DYPOY",
    credentialUrl: "https://www.dicoding.com/certificates/81P25V4DYPOY",
    icon: FaCloud,
  },
  {
    id: 7,
    title: "Belajar Jaringan Komputer untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Oct 2025 - Oct 2028",
    credentialId: "53XEK9J8KXRN",
    credentialUrl: "https://www.dicoding.com/certificates/53XEK9J8KXRN",
    icon: FaNetworkWired,
  },
  {
    id: 8,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Oct 2025 - Oct 2028",
    credentialId: "ERZR2N0VQPYV",
    credentialUrl: "https://www.dicoding.com/certificates/ERZR2N0VQPYV",
    icon: FaHtml5,
  },
  {
    id: 9,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Dec 2023 - Dec 2026",
    credentialId: "81P2V88RQPOY",
    credentialUrl: "https://www.dicoding.com/certificates/81P2V88RQPOY",
    icon: FaHtml5,
  },

  // Huawei Certificates
  {
    id: 10,
    title: "HCIA-Cloud Computing V5.0",
    issuer: "Huawei",
    date: "2024",
    icon: FaCloud,
  },
  {
    id: 11,
    title: "HCIA-Datacom V1.0",
    issuer: "Huawei",
    date: "2024",
    icon: FaNetworkWired,
  },

  // Cisco Certificates
  {
    id: 12,
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "2024",
    icon: FaRoute,
  },
  {
    id: 13,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco",
    date: "2024",
    icon: FaNetworkWired,
  },
  {
    id: 14,
    title: "IoT Fundamentals: Connecting Things",
    issuer: "Cisco",
    date: "2024",
    icon: FaMicrochip,
  },

  // CODEPOLITAN Certificates
  {
    id: 15,
    title: "Belajar RESTful dengan Express.js",
    issuer: "CODEPOLITAN",
    credentialId: "7RGQSCP",
    icon: FaServer,
  },
  {
    id: 16,
    title: "Belajar MongoDB",
    issuer: "CODEPOLITAN",
    credentialId: "AQGZOWQ",
    icon: SiMongodb,
  },
  {
    id: 17,
    title: "Belajar Membuat Halaman Web Dinamis dengan Express.js dan EJS",
    issuer: "CODEPOLITAN",
    credentialId: "XFH3OPG",
    icon: SiExpress,
  },
  {
    id: 18,
    title: "Belajar JavaScript",
    issuer: "CODEPOLITAN",
    credentialId: "IL3VM9H",
    icon: SiJavascript,
  },
  {
    id: 19,
    title: "Belajar Dasar Node.js dan NPM",
    issuer: "CODEPOLITAN",
    credentialId: "2MCO0AF",
    icon: FaNodeJs,
  },
  {
    id: 20,
    title: "Belajar Dasar Express.js",
    issuer: "CODEPOLITAN",
    credentialId: "RSFUZV4",
    icon: SiExpress,
  },
  {
    id: 21,
    title: "Belajar Dasar CSS",
    issuer: "CODEPOLITAN",
    credentialId: "ORLT1H6",
    icon: FaCss3Alt,
  },

  // LinkedIn Learning
  {
    id: 22,
    title: "Learning ECMAScript 6+ (ES6+)",
    issuer: "LinkedIn Learning",
    icon: SiJavascript,
  },
  {
    id: 23,
    title: "HTTP Essential Training",
    issuer: "LinkedIn Learning",
    icon: FaServer,
  },
  {
    id: 24,
    title: "Search Techniques for Web Developers",
    issuer: "LinkedIn Learning",
    icon: FaCode,
  },

  // Skilvul Certificates
  {
    id: 25,
    title: "Python Lanjutan (Gold)",
    issuer: "Skilvul",
    credentialId: "AZBaoERYSSSGPtWsXPetiQ",
    icon: FaPython,
  },
  {
    id: 26,
    title: "Python Dasar (Gold)",
    issuer: "Skilvul",
    credentialId: "ePNyjtOUS6GnHEt2iOE6nA",
    icon: FaPython,
  },
  {
    id: 27,
    title: "HTML Dasar (Gold)",
    issuer: "Skilvul",
    credentialId: "h37YgBudTbGw5PnP_DgQiw",
    icon: FaHtml5,
  },

  // Great Learning
  {
    id: 28,
    title: "C++ Tutorial",
    issuer: "Great Learning",
    icon: SiCplusplus,
  },

  // ID-Networkers
  {
    id: 29,
    title: "Jaringan Dasar",
    issuer: "ID-Networkers (IDN.ID)",
    credentialId: "IDN-1678189045-180-12642",
    icon: FaNetworkWired,
  },
];
