import {
  FaBriefcase,
  FaMusic,
  FaComments,
  FaDocker,
  FaBook,
  FaMicrochip,
  FaRocket,
  FaChartLine,
  FaMotorcycle,
} from "react-icons/fa";

export const projectsData = [
  {
    id: "personal1",
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
      "A responsive and modern personal website built from scratch to showcase my work, skills, and software engineering background.",
    icon: FaBriefcase,
    techStack: ["React", "Tailwind CSS", "JavaScript", "Swiper.js"],
    modalDescription:
      "A self-developed portfolio serving as an interactive resume and project gallery. The website focuses on clean UI, smooth animations, and scalable component architecture built with React. Designed using Tailwind CSS with a strong emphasis on usability, responsiveness, and consistent visual hierarchy.",
    features: [
      "Fully responsive design across all screen sizes",
      "Smooth animations and micro-interactions",
      "Modular React component structure",
      "Modern Tailwind CSS styling with glass-like UI elements",
    ],
    githubUrl: "https://github.com/khoirulmalik/portfolio-react",
    demoUrl: "https://khoirulmalik.github.io/portfolio",
  },

  // -------------------------
  // FORUM API – BACKEND
  // -------------------------
  {
    id: "forum-api",
    title: "Forum API – Clean Architecture",
    category: "Backend",
    description:
      "A structured RESTful API for forum discussion platforms, built with Clean Architecture and TDD. Includes authentication, thread management, comments, and strict role-based authorization.",
    icon: FaComments,
    techStack: ["Hapi.js", "PostgreSQL", "JWT", "Jest", "Node.js"],
    modalDescription:
      "A backend expert-level project built with Hapi.js, applying Clean Architecture to separate business logic, domain entities, and infrastructure. Includes JWT-based authentication, thread and comment features, soft-delete support, repository pattern, and full test coverage through unit & integration tests. CI/CD is automated using GitHub Actions.",
    features: [
      "Full Clean Architecture structure",
      "Secure JWT authentication with refresh tokens",
      "Repository design pattern for testability",
      "High test coverage with Jest",
      "CI/CD automation with GitHub Actions",
    ],
    githubUrl: "https://github.com/khoirulmalik/forum-api",
    demoUrl: null,
  },

  // -------------------------
  // OPENMUSIC API
  // -------------------------
  {
    id: "openmusic-api",
    title: "OpenMusic API v3 – Music Platform Backend",
    category: "Backend",
    description:
      "A complete music service API with album management, playlist features, user authentication, caching, file upload, and message queue integration.",
    icon: FaMusic,
    techStack: [
      "Hapi.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "JWT",
      "Nodemailer",
    ],
    modalDescription:
      "A feature-rich API developed in progressive versions. Version 3 introduces file uploads for album covers, Redis caching to optimize reads, and RabbitMQ message queues for asynchronous playlist export via email. Implements microservices architecture using a separate consumer worker.",
    features: [
      "30+ REST endpoints (albums, playlists, songs, likes, users)",
      "Album cover upload with validation",
      "Redis caching for optimized queries",
      "RabbitMQ for async playlist export",
      "Microservice consumer worker using Nodemailer",
      "Relational DB schema with foreign keys",
    ],
    githubUrl: "https://github.com/khoirulmalik/openmusic-api-v3",
    demoUrl: null,
  },

  // -------------------------
  // DOCKER / DEVOPS
  // -------------------------
  {
    id: "devops1",
    title: "Item App – Containerized Microservices",
    category: "DevOps",
    period: "2024",
    description:
      "A containerized application demonstrating Docker-based microservices architecture with MongoDB and Node.js.",
    icon: FaDocker,
    techStack: [
      "Docker",
      "Docker Compose",
      "Node.js",
      "MongoDB",
      "Docker Hub",
      "PowerShell",
    ],
    modalDescription:
      "A microservices-style application deployed via multi-container setup using Docker Compose. Includes isolated frontend (Node.js) and MongoDB services with persistent volumes and restart policies, showcasing container orchestration fundamentals.",
    features: [
      "Two-service microservices architecture",
      "Automated Docker build & push pipeline",
      "Docker Compose orchestration",
      "Volume-based persistent storage",
      "Environment-based config management",
      "High availability through restart policies",
    ],
    githubUrl: "https://github.com/khoirulmalik/a433-microservices",
    demoUrl: null,
    dockerHub: "https://hub.docker.com/r/khoirulmalik/item-app",
  },

  // -------------------------
  // JOB API GO
  // -------------------------
  {
    id: "personal-jobapi-go",
    title: "Job API – Go (Golang)",
    category: "Backend",
    description:
      "A scalable job posting API developed with Go. Includes Dockerized environment, Swagger documentation, testing, and secure request handling.",
    techStack: [
      "Go",
      "Gin",
      "GORM",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Swagger",
      "Git",
      "GitHub",
    ],
    features: [
      "CRUD job postings with filters & pagination",
      "Data sanitization and security checks",
      "Clean architecture structure",
      "Integration tests",
      "Full Docker setup",
    ],
    link: "https://github.com/khoirulmalik/rediku-be-test",
  },

  // -------------------------
  // BOOKSHELF API
  // -------------------------
  {
    id: "bookshelf-api",
    title: "Bookshelf API – Book Management System",
    category: "Backend",
    description:
      "A beginner-friendly REST API for managing book collections with full CRUD and validation layers.",
    icon: FaBook,
    techStack: ["Hapi.js", "Node.js", "Nanoid", "In-Memory Storage"],
    modalDescription:
      "A foundational REST API for handling book data, with validation rules such as readPage ≤ pageCount, auto-calculated reading status, timestamps, and consistent JSON schema responses. Demonstrates HTTP fundamentals and error handling.",
    features: [
      "CRUD operations for books",
      "Strong validation system",
      "Automatic reading status logic",
      "Consistent response formatting",
      "REST best practices",
    ],
    githubUrl: "https://github.com/khoirulmalik/bookshelf-api",
    demoUrl: null,
  },

  // -------------------------
  // AUTH API
  // -------------------------
  {
    id: "personal-auth-api",
    title: "Authentication API with Email Verification",
    category: "Backend",
    description:
      "A secure authentication system featuring OTP email verification, RBAC, and HTML-based email templates.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Nodemailer",
      "bcryptjs",
      "validator.js",
      "dotenv",
      "Git",
      "GitHub",
    ],
    features: [
      "User registration + role assignment",
      "Email verification via 6-digit OTP",
      "HTML email templates",
      "Welcome email on verification",
      "Hashed passwords using bcrypt",
      "Role-based access control",
      "Input validation",
      "CORS-enabled API",
    ],
    link: "<repository-url>",
  },

  // -------------------------
  // CICD PIPELINE + PROMETHEUS + GRAFANA
  // -------------------------
  {
    id: "exp6",
    title: "CI/CD Pipeline with Jenkins, Prometheus & Grafana",
    category: "DevOps",
    duration: "Nov 2024 – Dec 2024 | Remote",
    description:
      "An end-to-end CI/CD pipeline for React applications using Jenkins, automated testing, Docker deployments, and observability with Prometheus & Grafana.",
    icon: FaRocket,
    images: [
      "../../../public/assets/cicd-project/jenkins-pipeline.png",
      "../../../public/assets/cicd-project/grafana-dashboard.png",
      "../../../public/assets/cicd-project/prometheus-metrics.png",
    ],
    techStack: [
      "Jenkins",
      "Docker",
      "Docker-in-Docker",
      "Prometheus",
      "Grafana",
      "React",
      "Node.js",
      "GitHub",
      "Nginx",
    ],
    modalDescription:
      "A production-style CI/CD pipeline using Jenkins Blue Ocean with automated build, test, approval gates, and dockerized deployment. Monitoring stack includes Prometheus metric scraping and Grafana dashboard visualizations for Jenkins health and performance.",
    features: [
      "Four-stage automated pipeline (Build, Test, Approval, Deploy)",
      "Manual approval gate before production",
      "Docker-in-Docker setup",
      "Prometheus metrics scraping (10-second interval)",
      "Grafana dashboards for CPU, JVM, queue, and build health",
      "Custom user authentication",
      "Secure port customization",
      "Webhook-ready CI/CD triggers",
      "Blue Ocean UI visualization",
    ],
    githubUrl: "https://github.com/khoirulmalik/a428-cicd-labs",
    demoUrl: null,
    additionalInfo: {
      achievements: [
        "Passed Dicoding CI/CD certification",
        "Implemented full monitoring stack",
        "100% pipeline success rate",
        "Reduced deployment time to ~5 minutes",
      ],
      metrics: {
        pipelineStages: 4,
        buildTime: "~3-5 minutes",
        metricsCollectionInterval: "10 seconds",
        monitoringMetrics: "20+ Jenkins metrics",
        deploymentAutomation: "100%",
      },
    },
  },

  // -------------------------
  // IOT COMPUTER VISION BACKEND
  // -------------------------
  {
    id: "exp7",
    title: "Stone Analysis & Real-Time IoT Monitoring System",
    category: "Backend",
    duration: "Nov 2024 | Remote",
    description:
      "A high-performance backend for IoT + computer vision workflows, supporting image ingestion, AI inference routing, telemetry storage, and real-time dashboards via WebSockets.",
    icon: FaMicrochip,
    images: [],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "WebSocket (ws)",
      "Multer",
      "Axios",
      "Chart.js",
      "Bootstrap 5",
      "Python/Flask",
    ],
    modalDescription:
      "A backend orchestrator for real-time stone object detection using an AI inference engine. Designed with MVC structure, real-time WebSocket broadcasting, image ingestion pipeline, and MongoDB telemetry storage.",
    features: [
      "Gateway integration with Python AI/ML service",
      "Real-time updates via WebSocket",
      "Image upload + validation",
      "MongoDB telemetry storage",
      "Automated object analysis (volume & count)",
      "Clean REST endpoint design",
      "Custom WS event system",
      "Real-time visualizations using Chart.js",
      "Production-grade error handling and logging",
    ],
    githubUrl: "https://github.com/khoirulmalik/stone-analysis-backend",
    demoUrl: null,
  },

  // -------------------------
  // RESEARCH – AQI PREDICTION
  // -------------------------
  {
    id: "research1",
    title: "Yogyakarta Air Quality Prediction",
    category: "Lead Researcher & Developer",
    duration: "May 2023 – Jun 2023 | Yogyakarta",
    description:
      "A Linux-based CLI tool that forecasts AQI using Simple Linear Regression.",
    icon: FaChartLine,
    images: ["../../../public/assets/research/air-quality/chart.jpg"],
    techStack: ["Linux", "Bash Script", "Gnuplot", "bc"],
    modalDescription:
      "A research-oriented CLI program built to predict AQI from PM2.5 values using Simple Linear Regression. Includes mathematical modeling, automated computation via Bash scripting, and chart generation using Gnuplot.",
    features: [
      "Simple Linear Regression modeling",
      "Automated calculations via Bash + bc",
      "Data visualization with Gnuplot",
      "Lightweight CLI for CSV processing",
    ],
    githubUrl: null,
    demoUrl: null,
  },

  // -------------------------
  // IoT SECURITY (ESP32)
  // -------------------------
  {
    id: "project_iot",
    title: "Smart Home Security – Motion Detection System",
    role: "IoT Developer & Researcher",
    duration: "Jan 2024 – Jun 2024 | Yogyakarta",
    description:
      "A smart home security prototype using ESP32-CAM and ultrasonic sensors with real-time Telegram notifications.",
    icon: FaMicrochip,
    images: [
      "../../../public/assets/projects/iot-security/circuit-diagram.jpg",
    ],
    techStack: [
      "Internet of Things (IoT)",
      "ESP32-CAM",
      "Telegram Bot API",
      "C++ (Arduino IDE)",
      "HC-SR04 Sensor",
    ],
    modalDescription:
      "A low-budget IoT security system capable of capturing photos on motion detection and sending them directly to Telegram. Includes remote device control through bot commands.",
    features: [
      "Ultrasonic motion detection",
      "Real-time Telegram alerts",
      "Remote flash and buzzer control",
      "ESP32-CAM integration",
    ],
    githubUrl: null,
    demoUrl: null,
  },

  // -------------------------
  // EMBEDDED SYSTEM – MOTORCYCLE SECURITY
  // -------------------------
  {
    id: "project_embedded",
    title: "Motorcycle Ignition Control via E-KTP",
    category: "Embedded System Engineer",
    duration: "Aug 2023 – Dec 2023 | Yogyakarta",
    description:
      "A secure motorcycle ignition system using RFID-based E-KTP authentication as a digital key replacement.",
    icon: FaMotorcycle,
    images: ["../../../public/assets/projects/embedded/wiring-diagram.jpg"],
    techStack: [
      "Arduino Uno",
      "C++",
      "RFID-RC522",
      "E-KTP",
      "Relay Module",
      "EEPROM",
    ],
    modalDescription:
      "An RFID authentication system allowing motorcycles to start only after validating a registered E-KTP UID. Supports master-card programming and persistent EEPROM storage.",
    features: [
      "Secure E-KTP authentication",
      "Master card for access management",
      "EEPROM persistence for stored UIDs",
      "Hardware-software integration with relay",
    ],
    githubUrl: null,
    demoUrl: null,
  },
];
