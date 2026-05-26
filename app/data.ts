export const personal = {
  name: "Sabuj Kumar Modak",
  title: "Software QA Engineer",
  subtitle: "Functional · API · Security · Automation",
  location: "Vatara, Gulshan, Dhaka-1212",
  email: "Sabuj.modak.qa@gmail.com",
  phone: "+880 1761-288821",
  github: "https://github.com/xamiron",
  linkedin: "https://www.linkedin.com/in/sabuj-kumar-modak/",
  about:
    "Software QA Engineer with 2.5+ years of experience in functional, API, security, and test automation. Worked across web and mobile products in fintech and enterprise domains. Comfortable handling the full testing lifecycle — from writing test cases to reporting bugs and supporting developers through fixes. Strong believer in quality over speed, with real hands-on experience in Selenium automation and OWASP-based security testing.",
};

export const stats = [
  { value: "2.5+", label: "Years of Experience" },
  { value: "20+", label: "Projects Tested" },
  { value: "6+", label: "Industry Domains" },
  { value: "OWASP", label: "Top 10 Aware" },
];

export const experience = [
  {
    company: "Singularity Limited",
    role: "Software QA Engineer",
    period: "Jan 2025 – Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Created and executed manual & automated test cases (Selenium, Java) for web apps.",
      "Performed regression testing; tracked and verified fixes using test management tools.",
      "Conducted penetration testing and vulnerability assessments.",
      "Tested client-side and server-side input validation, authentication, and authorization.",
      "Conducted API testing with Postman and maintained structured test collections.",
    ],
    stack: [
      "Selenium",
      "Java",
      "Postman",
      "JMeter",
      "ClickUp",
      "BurpSuite",
      "OWASP",
      "Jira",
      "AI Based Testing",
      "Cursor AI",
    ],
  },
  {
    company: "Bdjobs.com Ltd",
    role: "Jr. Software QA Engineer",
    period: "Jan 2024 – Jan 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Designed and executed test cases for web & mobile apps; automated key workflows with Selenium.",
      "Conducted API testing with Postman and maintained structured test collections.",
      "Performed load testing with JMeter and security testing for web/mobile apps.",
      "Reported defects, vulnerabilities, and performance bottlenecks; improved release quality.",
    ],
    stack: ["Selenium", "Postman", "JMeter", "Java", "Manual Testing"],
  },
];

export const skillGroups = [
  {
    title: "QA Skills",
    icon: "ShieldCheck",
    items: [
      "Test Planning",
      "Test Case Design",
      "Test Reports",
      "Functional Testing",
      "Non-Functional Testing",
      "Test Execution & Evaluation",
      "Requirement Analysis",
      "Bug Reporting & Documentation",
    ],
  },
  {
    title: "Cyber Security",
    icon: "Lock",
    items: [
      "Web App Penetration Testing",
      "OWASP TOP 10",
      "OSINT",
      "Digital Forensics",
      "Offensive Security",
      "CTF",
      "Server & Client Validation",
      "Vulnerability Assessment",
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    items: [
      "Selenium",
      "Postman",
      "JMeter",
      "ClickUp",
      "Jira",
      "MongoDB Compass",
      "Kali Linux",
      "Git",
      "BurpSuite",
      "Nmap",
      "Acunetix",
      "Autopsy",
      "Wireshark",
      "Network Miner",
      "Cursor AI",
    ],
  },
  {
    title: "Tech & Programming",
    icon: "Code2",
    items: ["Java", "Python (Basic)", "MySQL", "HTML / CSS"],
  },
];

export const domains = [
  {
    title: "FinTech & Banking",
    icon: "Landmark",
    description:
      "Tested digital banking platforms, admin panels, and product configurators with strong focus on transactional accuracy and security.",
  },
  {
    title: "RegTech & Biometrics",
    icon: "Fingerprint",
    description:
      "Hands-on QA on passport, biometric verification, and identity systems with attention to compliance and data integrity.",
  },
  {
    title: "E-commerce Platforms",
    icon: "ShoppingCart",
    description:
      "End-to-end testing of cart, checkout, payment, and order management flows across web and mobile.",
  },
  {
    title: "ERP Solutions",
    icon: "Network",
    description:
      "Validated module-level workflows, permissions, and reporting for in-house ERP / project management tools.",
  },
  {
    title: "Biometric Devices",
    icon: "ScanFace",
    description:
      "Verification testing for biometric hardware integrations and matching algorithms in production environments.",
  },
  {
    title: "EV Charging & Smart Mobility",
    icon: "Zap",
    description:
      "Validated booking, station locator, real-time availability, and billing for EV charging mobile apps.",
  },
];

/**
 * Project category labels — used by the /projects page filter chips.
 * Order here is the order they appear in the category filter UI.
 */
export const projectCategories = [
  "FinTech",
  "Mobile",
  "Web",
  "ERP",
  "Automation",
  "API & Security",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: {
  title: string;
  org: string;
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  link?: string;
}[] = [
  {
    title: "Brac Bank Website",
    org: "Singularity Limited",
    description:
      "Worked on the new Brac Bank website and admin panel with 200+ dynamic pages and 150 products. All components — buttons, banners, colors, layouts — fully configurable. Handled API testing and vulnerability assessments to ensure security and smooth performance.",
    tags: ["Banking", "API Testing", "Security", "Admin Panel"],
    categories: ["FinTech", "Web", "API & Security"],
    link: "https://www.bracbank.com/en",
  },
  {
    title: "Brac Bank Product Selector Tree",
    org: "Singularity Limited",
    description:
      "Tested a fully dynamic platform suggesting loans, credit cards, accounts, and deposits based on user needs. Admin panel has 4500+ nodes with predefined questions and suggestions. Handled UI, UX, responsiveness, and overall functionality.",
    tags: ["FinTech", "UI/UX", "Functional Testing"],
    categories: ["FinTech", "Web"],
    link: "https://www.selector.bracbank.com/en",
  },
  {
    title: "Nagad Platform",
    org: "Singularity Limited",
    description:
      "Conducted User Acceptance Testing (UAT) and JMeter-based load testing on Nagad's consumer-facing website — Bangladesh's leading mobile financial services platform. Validated transactional flows, offers, and merchant pages for stability under concurrent traffic across desktop and mobile.",
    tags: ["FinTech", "UAT", "Load Testing", "JMeter"],
    categories: ["FinTech", "Web"],
    link: "https://nagad.com.bd/",
  },
  {
    title: "Leads Management System (LeadsBox)",
    org: "Singularity Limited",
    description:
      "Owned end-to-end QA for LeadsBox — a sales lead management ERP. Drove requirements analysis, test case design, functional QA, and User Acceptance Testing (UAT) across the full module suite to ensure release readiness.",
    tags: ["ERP", "Requirements Analysis", "UAT", "Functional QA"],
    categories: ["ERP", "Web"],
    link: "https://leadsbox.io/",
  },
  {
    title: "B Charge — Smart EV Charging App",
    org: "Singularity Limited",
    description:
      "Tested core features of the B Charge app including secure login, nearby station locator, real-time charger availability, booking, cost summary, and charging history across Android & iOS.",
    tags: ["Mobile QA", "Android", "iOS", "EV"],
    categories: ["Mobile"],
    link: "https://play.google.com/store/apps/details?id=com.bondstein.app.bcharge&hl=en_US",
  },
  {
    title: "The Pera App",
    org: "Singularity Limited",
    description:
      "In-house project management tool (similar to ClickUp) for web & mobile. Includes organizations, spaces, boards, tickets, scrum dashboards, attendance, and KPI reports. Responsible for full QA of both app and web.",
    tags: ["SaaS", "Web", "Mobile", "ERP"],
    categories: ["Web", "Mobile"],
    link: "https://thepera.app",
  },
  {
    title: "Automation of BDJobs Pro Subscription",
    org: "Bdjobs.com Ltd",
    description:
      "Built a Selenium WebDriver script in Java to automate Bdjobs Pro interactions — login, navigation, and feature usage on bdjobs.com.",
    tags: ["Selenium", "Java", "Automation"],
    categories: ["Automation"],
    link: "https://github.com/xamiron/Automation-of-Pro-Subscription",
  },
  {
    title: "Voice Blaster (BDJobs Web)",
    org: "Bdjobs.com Ltd",
    description:
      "Tested 1,000+ calls across 5 interview invitation types covering 20 use cases using AI-driven methods to validate IVR and call flows.",
    tags: ["IVR", "AI Testing", "Voice"],
    categories: ["Web", "Automation"],
    link: "",
  },
  {
    title: "API Testing Using Postman",
    org: "Personal Project",
    description:
      "Developed CRUD operations with Express.js, MongoDB, and Node.js. Created a Postman guide for API testing with collections and examples.",
    tags: ["Postman", "MongoDB", "Node.js", "API"],
    categories: ["API & Security", "Automation"],
    link: "https://github.com/xamiron/API-Testing-Using-Postman",
  },
];

export const education = [
  {
    school: "University of Information Technology & Sciences",
    degree: "B.Sc in Information Technology (IT)",
    period: "2023",
    grade: "CGPA: 3.22 / 4.00",
  },
  {
    school: "Bogura Govt. College",
    degree: "Higher Secondary School Certificate (HSC)",
    period: "2019",
    grade: "GPA: 3.75 / 5.00",
  },
  {
    school: "Uthali High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2017",
    grade: "GPA: 4.91 / 5.00",
  },
];

export const certifications = [
  { name: "Agile Scrum Master", issuer: "Simplilearn" },
  { name: "API Testing Learning Path", issuer: "Postman Academy" },
  { name: "API Security Fundamentals", issuer: "APIsec University" },
  { name: "Capture The Flag (CTF) 2023", issuer: "CTF Community Bangladesh" },
  {
    name: "Foundation Level Threat Intelligence Analyst",
    issuer: "ArcX",
  },
];

export const achievements = [
  {
    title: "Ranked 2nd — IEEE Cyber Crawler CTF 2023",
    venue: "Dhaka University",
    year: "2023",
  },
  {
    title: "Ranked 11th — LEETCON HackMeIfYouCan 2023",
    venue: "Bangladesh",
    year: "2023",
  },
  {
    title: "Ranked 11th — National Flaghunt 2022",
    venue: "Bangladesh",
    year: "2022",
  },
  {
    title: "Ranked 14th — National Cyber Drill 2022",
    venue: "BGD e-Gov CIRT",
    year: "2022",
  },
];

export const publication = {
  title:
    "Dynamic Phishing URL Detection Using Machine Learning & Deep Learning Algorithms",
  status: "In Progress",
};

export const quotes = [
  {
    text: "Hope Keeps Us Alive.",
    author: "Sabuj Modak",
    role: "QA Engineer",
  },
  {
    text: "Finding Bugs is Just the Start—Building Better Products is the Goal!",
    author: "Sabuj Modak",
    role: "QA Engineer",
  },
];

export const motto =
  "Test like a user. Think like a hacker. Ship with confidence.";
