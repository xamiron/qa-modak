export const personal = {
  name: "Sabuj Kumar Modak",
  title: "Software QA Engineer",
  subtitle: "Functional · API · Security · Automation",
  location: "Vatara, Gulshan, Dhaka-1212",
  email: "Sabuj.modak.qa@gmail.com",
  phone: "+880 1761-288821",
  github: "https://github.com/xamiron",
  linkedin: "https://www.linkedin.com/in/sabuj-kumar-modak/",
  resume: "/Sabuj_Kumar_Modak_QA.pdf",
  about:
    "Software QA Engineer with 2.5+ years of experience in functional, API, security, and test automation. Worked across web and mobile products in fintech and enterprise domains. Comfortable handling the full testing lifecycle, from writing test cases to reporting bugs and supporting developers through fixes. Strong believer in quality over speed, with real hands-on experience in Selenium automation and OWASP-based security testing.",
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
      "Designed and executed test cases for **web and mobile applications**.",
      "Performed **functional, regression, API, performance, and security testing**.",
      "Developed and maintained automation scripts using **Selenium WebDriver (Java)**.",
      "Conducted API testing using **Postman** and performance testing using **JMeter**.",
      "Performed vulnerability assessments and security testing based on **OWASP Top 10**.",
      "Tracked defects, verified fixes, and collaborated with developers in **Agile Scrum** environments.",
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
      "Validated the Voice Blaster IVR: tested **1,000+ calls** across **5 interview invitation types** and **20 use cases**.",
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
      "Test Case & Scenario Design",
      "Requirement Analysis",
      "Functional & Regression Testing",
      "Integration & End-to-End Testing",
      "API Testing (Postman)",
      "Performance Testing (JMeter)",
      "Test Execution & Result Analysis",
      "Root Cause Analysis",
      "Test Reporting & Documentation",
      "Agile/Scrum Collaboration",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    items: [
      "Selenium WebDriver",
      "Postman",
      "JMeter",
      "ClickUp",
      "Jira",
      "BrowserStack",
      "Swagger",
      "MongoDB Compass",
      "MySQL",
      "Kali Linux",
      "GitHub",
      "Cursor AI",
      "Burp Suite",
      "Nmap",
      "Acunetix",
      "OWASP-ZAP",
      "Autopsy",
      "Wireshark",
      "NetworkMiner",
      "Chrome DevTools",
      "Figma",
      "Canva",
      "Microsoft Office Suite",
      "AI-Assisted Testing",
      "Prompt Engineering",
      "Vibe Coding",
    ],
  },
  {
    title: "Cyber Security Skills",
    icon: "Lock",
    items: [
      "Web Application Penetration Testing",
      "Vulnerability Assessment",
      "OWASP Top 10",
      "Security Testing",
      "OSINT",
      "Digital Forensics",
      "Offensive Security",
      "Client-Side & Server-Side Validation Testing",
      "Authentication & Authorization Testing",
      "HTTP Traffic Analysis",
      "CTF Challenges",
    ],
  },
  {
    title: "Web Technologies & Programming",
    icon: "Code2",
    items: ["HTML/CSS (Basic)", "MySQL", "Python (Basic)", "Java"],
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
 * Project category labels used by the /projects page filter chips.
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
  keyTakeaway?: string;
  tags: string[];
  categories: ProjectCategory[];
  link?: string;
}[] = [
  {
    title: "Passport Appointment Scheduler & Biometric Collection Portal",
    org: "Singularity Limited",
    description:
      "Performed **functional, API, integration, and security testing** on a passport appointment and biometric collection system. Validated **booking, payment, rescheduling, role-based access**, and biometric processes including **fingerprint, face verification, passport scanning, document scanning, and signature capture**. Ensured data integrity, authentication, and system reliability across multi-role workflows, covering **300+ test scenarios** and API/integration test cases with strict approval and biometric compliance.",
    keyTakeaway:
      "Covered 300+ scenarios across passport booking, payment, and biometric workflows — catching authorization and data-integrity gaps before a compliance-sensitive government identity system reached production.",
    tags: [
      "Biometrics",
      "API Testing",
      "Security",
      "Integration Testing",
      "RegTech",
    ],
    categories: ["Web", "API & Security"],
  },
  {
    title: "Brac Bank Website",
    org: "Singularity Limited",
    description:
      "Worked on the new Brac Bank website and admin panel with **200+ dynamic pages** and **150 products**. All components (buttons, banners, colors, layouts) are fully configurable. Handled API testing and vulnerability assessments to ensure security and smooth performance.",
    keyTakeaway:
      "Caught critical input validation and authorization gaps before production, protecting a banking platform serving millions of customers.",
    tags: ["Banking", "API Testing", "Security", "Admin Panel"],
    categories: ["FinTech", "Web", "API & Security"],
    link: "https://www.bracbank.com/en",
  },
  {
    title: "Brac Bank Product Selector Tree",
    org: "Singularity Limited",
    description:
      "Tested a fully dynamic platform suggesting loans, credit cards, accounts, and deposits based on user needs. Admin panel has **4500+ nodes** with predefined questions and suggestions. Handled UI, UX, responsiveness, and overall functionality.",
    keyTakeaway:
      "Validated every branch of a deeply nested decision tree, ensuring customers never hit a dead-end during product discovery.",
    tags: ["FinTech", "UI/UX", "Functional Testing"],
    categories: ["FinTech", "Web"],
    link: "https://www.selector.bracbank.com/en",
  },
  {
    title: "Nagad Platform",
    org: "Singularity Limited",
    description:
      "Conducted User Acceptance Testing (UAT) and JMeter-based load testing on Nagad's consumer-facing website, Bangladesh's leading mobile financial services platform. Validated transactional flows, offers, and merchant pages for stability under concurrent traffic across desktop and mobile.",
    keyTakeaway:
      "Confirmed stability under peak concurrent traffic, safeguarding a critical national payment service.",
    tags: ["FinTech", "UAT", "Load Testing", "JMeter"],
    categories: ["FinTech", "Web"],
    link: "https://nagad.com.bd/",
  },
  {
    title: "Leads Management System (LeadsBox)",
    org: "Singularity Limited",
    description:
      "Owned end-to-end QA for LeadsBox, a sales lead management ERP. Drove requirements analysis, test case design, functional QA, and User Acceptance Testing (UAT) across the full module suite to ensure release readiness.",
    keyTakeaway:
      "Acted as sole QA owner across every module and shipped a confident v1 with zero rollback after launch.",
    tags: ["ERP", "Requirements Analysis", "UAT", "Functional QA"],
    categories: ["ERP", "Web"],
    link: "https://leadsbox.io/",
  },
  {
    title: "B Charge: Smart EV Charging App",
    org: "Singularity Limited",
    description:
      "Tested core features of the B Charge app including secure login, nearby station locator, real-time charger availability, booking, cost summary, and charging history across **Android & iOS**.",
    keyTakeaway:
      "Surfaced billing edge cases in real-time charging sessions, preventing customer-side payment disputes post-launch.",
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
      "Built a Selenium WebDriver script in Java to automate Bdjobs Pro interactions: login, navigation, and feature usage on bdjobs.com.",
    tags: ["Selenium", "Java", "Automation"],
    categories: ["Automation"],
    link: "https://github.com/xamiron/Automation-of-Pro-Subscription",
  },
  {
    title: "Voice Blaster (BDJobs Web)",
    org: "Bdjobs.com Ltd",
    description:
      "Tested **1,000+ calls** across **5 interview invitation types** covering **20 use cases** using AI-driven methods to validate IVR and call flows.",
    keyTakeaway:
      "Caught IVR routing bugs that would have misdirected thousands of candidates, saving recruiters and applicants from broken voice flows.",
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
    title: "Ranked 2nd at IEEE Cyber Crawler CTF 2023",
    venue: "Dhaka University",
    year: "2023",
  },
  {
    title: "Ranked 11th at LEETCON HackMeIfYouCan 2023",
    venue: "Bangladesh",
    year: "2023",
  },
  {
    title: "Ranked 11th at National Flaghunt 2022",
    venue: "Bangladesh",
    year: "2022",
  },
  {
    title: "Ranked 14th at National Cyber Drill 2022",
    venue: "BGD e-Gov CIRT",
    year: "2022",
  },
];

export const publication = {
  title:
    "Dynamic Phishing URL Detection Using Machine Learning & Deep Learning Algorithms",
  status: "In Progress",
  abstract:
    "A hybrid ML / DL pipeline that flags phishing URLs in real-time using lexical, host-based, and content features, benchmarked against modern adversarial techniques.",
  abstractLink: "",
};

export const quotes = [
  {
    text: "Hope keeps us alive; thorough testing keeps the software alive.",
    author: "Sabuj Modak",
    role: "QA Engineer",
  },
  {
    text: "Finding bugs is just the start; building better products is the goal.",
    author: "Sabuj Modak",
    role: "QA Engineer",
  },
  {
    text: "Quality is not an afterthought; it's the way the work is done.",
    author: "Sabuj Modak",
    role: "QA Engineer",
  },
];

export const motto =
  "Test like a user. Think like a hacker. Ship with confidence.";
