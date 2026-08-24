const db = require('./database');

const projects = [
  {
    title: "Personal Website",
    description: "A modern, highly interactive personal portfolio website showcasing my projects, skills, and experience in web development and programming, featuring glassmorphism design and smooth animations. It includes an AI chatbot that can answer questions about my professional background, technical skills, projects, and work experience.",
    tags: JSON.stringify(["REACT", "TAILWIND CSS", "FRAMER MOTION", "AI INTEGRATION"]),
    image: "/project/personal_website.webp",
    link: "https://dimzulfaridha.my.id/"
  },
  {
    title: "Smart Irrigation System",
    description: "An IoT-based smart irrigation system designed to help farmers monitor and manage rice field water levels efficiently. It utilizes ultrasonic sensors for real-time measurement and automates pump control based on custom thresholds. Featuring long-range LoRa communication and cloud integration, the system enables remote data monitoring, storage, and manual override capabilities.",
    tags: JSON.stringify(["ESP32", "LoRa", "LoRaWAN", "ChirpStack", "AWS IoT", "MQTT"]),
    image: "/project/smart-irrigation-system.webp",
    link: "https://github.com/dimzulfaridha/Smart-Irrigation-System-IoT-LoRa"
  },
  {
    title: "SOYA FEED — Smart Tofu Wastewater Treatment",
    description: "An IoT-based water treatment system that processes tofu wastewater through multiple filtration stages to produce a cleaner water source for cattle. The system continuously monitors water quality, including pH levels, to determine whether the processed water is suitable for livestock use, while helping reduce wastewater and promote sustainable farming.",
    tags: JSON.stringify(["Arduino", "IoT", "pH Sensor", "Water Treatment", "Smart Farming"]),
    image: "/project/soyafeed.webp",
    link: "https://github.com/dimzulfaridha/Air-Limbah-Tahun-Project"
  },
  {
    title: "iMontir — Smart Irrigation Control App",
    description: "An IoT-based irrigation management application developed to simplify the monitoring and control of irrigation systems. iMontir allows users to monitor water levels, check pump status, and control irrigation pumps remotely through automatic or manual modes. The application also records operational history and pump activities, making it easier to track irrigation usage and manage field conditions efficiently.",
    tags: JSON.stringify(["IoT", "ESP32", "Mobile App", "Irrigation", "Remote Control", "C/C++"]),
    image: "/project/imontir-application.webp",
    link: "https://github.com/dimzulfaridha/Barang-Bekas-Sampah-Pabrik-ProjectWebsite"
  },
  {
    title: "BBSP Website",
    description: "Barang Bekas Sampah Pabrik (BBSP) is a platform that makes it easy for sellers to list items, while helping buyers find and purchase affordable factory scrap without the hassle of searching everywhere.",
    tags: JSON.stringify(["HTML", "PHP", "CSS"]),
    image: "/project/bbsp-website.webp",
    link: "https://github.com/dimzulfaridha/Barang-Bekas-Sampah-Pabrik-ProjectWebsite"
  },
  {
    title: "WudhuCycle – Greywater Reuse",
    description: "Smart greywater reuse system with integrated mobile application built in Flutter.",
    tags: JSON.stringify(["FLUTTER", "ARDUINO", "IOT", "SUSTAINABILITY"]),
    image: null,
    link: ""
  }
];

const experiences = [
  {
    title: "IT Technical Support Staff",
    company: "Universitas Syiah Kuala · Internship",
    startDate: "Aug 2026",
    endDate: "Present",
    image: "/logo/usk-logo.png"
  },
  {
    title: "Price Surveyor – Government Standard Price Preparation (FY 2027)",
    company: "Universitas Syiah Kuala · Contract",
    startDate: "Feb 2026",
    endDate: "Apr 2026",
    image: "/logo/usk-logo.png"
  },
  {
    title: "Social Innovation Project Team – Innovillage 2024",
    company: "Telkom University · Contract",
    startDate: "Dec 2024",
    endDate: "Feb 2025",
    image: "/logo/telkom-university-logo.png"
  },
  {
    title: "Media and Information Division Member",
    company: "Himpunan Mahasiswa Teknik Komputer USK · Full-time",
    startDate: "Feb 2024",
    endDate: "Jan 2025",
    image: "/logo/himatekkom-logo.png"
  },
  {
    title: "Media Creative Staff – Computer Media Challenge (CMD)",
    company: "Part-time",
    startDate: "Mar 2024",
    endDate: "Nov 2024",
    image: "/logo/himatekkom-logo.png"
  },
  {
    title: "Research Team (PKM-KC)",
    company: "Kementrian Pendidikan dan Kebudayaan · Contract",
    startDate: "Feb 2024",
    endDate: "Dec 2024",
    image: "/logo/kemdikbud-logo.png"
  },
  {
    title: "Administrative & Digital Media Intern",
    company: "Lembaga Administrasi Negara RI · Apprenticeship",
    startDate: "Feb 2024",
    endDate: "Mar 2024",
    image: "/logo/lan-logo.png"
  },
  {
    title: "Bangkit Academy 2023 - Machine Learning Path",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka · Seasonal",
    startDate: "Aug 2023",
    endDate: "Jan 2024",
    image: "/logo/bangkit-academy-logo.png"
  }
];

const certifications = [
  {
    title: "Peserta Top 165 Social Project Program Innovillage 2024",
    issuer: "PT Telkom Indonesia dan Universitas Telkom",
    description: "Successfully selected as one of the Top 165 teams in the Innovillage 2024 Social Project Program organized by PT Telkom Indonesia. The project focused on developing an Arduino-based solution that utilizes tofu production wastewater to support sustainable livestock farming. I contributed to system development, hardware assembly, testing, and project documentation while collaborating with the team to deliver a practical solution with positive social impact.",
    tags: JSON.stringify(["INNOVILLAGE", "SOCIAL INNOVATION", "IOT PROJECT"]),
    image: "/certif/innovilage.png",
    link: ""
  },
  {
    title: "Peraih Pendanaan Bidang PKM-KC Tahun 2024",
    issuer: "Kemendikbudristek",
    description: "Successfully awarded funding in the Student Creativity Program – Karsa Cipta (PKM-KC), organized by the Ministry of Education, Culture, Research, and Technology. The funded project developed an Internet of Things (IoT)-based irrigation monitoring and control system to improve water distribution efficiency in agricultural areas. This achievement recognizes innovative student projects that transform technology into practical solutions with real-world impact.",
    tags: JSON.stringify(["PKM-KC", "RESEARCH", "IOT PROJECT"]),
    image: "/certif/pkm.png",
    link: ""
  },
  {
    title: "Certificate of Completion Bangkit Specializing in Machine Learning",
    issuer: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    description: "Successfully completed Bangkit Academy 2023 Batch 2 in the Machine Learning learning path, a technology career program led by Google, GoTo, and Traveloka. The program provided intensive training in Machine Learning using Python and TensorFlow, covering data processing, deep learning, and AI model development while strengthening problem-solving, collaboration, and industry-ready skills through hands-on projects.",
    tags: JSON.stringify(["BANGKIT ACADEMY", "MACHINE LEARNING"]),
    image: "/certif/bangkit.png",
    link: ""
  },
  {
    title: "Analyze Data to Answer Questions",
    issuer: "Coursera",
    description: "Successfully completed the Analyze Data to Answer Questions course as part of the Google Data Analytics Professional Certificate. The course focused on analyzing and interpreting data using spreadsheets and SQL, applying data visualization techniques, and communicating insights to support data-driven decision-making.",
    tags: JSON.stringify(["COURSERA", "GOOGLE", "ANALYZE DATA"]),
    image: "/certif/coursera-data.png",
    link: "https://coursera.org/verify/522W8BEHAFSH"
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding",
    description: "Successfully completed the Belajar Dasar Git dengan GitHub course by Dicoding. The course introduced the fundamentals of version control using Git and GitHub, including repository management, branching, collaboration through remote repositories, and best practices for managing software development projects.",
    tags: JSON.stringify(["DICODING", "GIT", "GITHUB"]),
    image: "/certif/dicoding-git.png",
    link: "https://www.dicoding.com/certificates/EYX46N8WOPDL"
  },
  {
    title: "Using Python to Interact with the Operating System",
    issuer: "Coursera",
    description: "Successfully completed the Using Python to Interact with the Operating System course from Google. The course focused on using Python to automate system administration tasks, manage files and directories, execute operating system commands, and develop automation scripts to improve productivity and workflow efficiency.",
    tags: JSON.stringify(["COURSERA", "GOOGLE", "PYTHON"]),
    image: "/certif/coursera-python.png",
    link: "https://coursera.org/verify/V9JPJTJDDS9V"
  }
];

const seedTable = (tableName, dataArray) => {
  const baseTime = Date.now();
  dataArray.forEach((item, index) => {
    item.createdAt = baseTime - (index * 1000);
    const keys = Object.keys(item);
    const values = Object.values(item);
    const placeholders = keys.map(() => '?').join(',');
    const sql = `INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${placeholders})`;

    db.run(sql, values, (err) => {
      if (err) {
        console.error(`Error inserting into ${tableName}:`, err.message);
      } else {
        console.log(`Inserted into ${tableName}: ${item.title}`);
      }
    });
  });
};

setTimeout(() => {
  seedTable('projects', projects);
  seedTable('experiences', experiences);
  seedTable('certifications', certifications);
}, 2000); // Wait for db to initialize

setTimeout(() => {
  console.log("Seeding complete. Exiting...");
  process.exit(0);
}, 5000);
