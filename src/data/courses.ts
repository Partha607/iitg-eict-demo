export type CoursePhase = "Phase I" | "Phase II";
export type CourseStatus = "Published" | "Upcoming" | "Archived";

/**
 * High-level category - matches the tab nav on /academy/courses.
 * Mirrors the structure of eict.iitr.ac.in/programs/explore-courses/.
 */
export type CourseCategory =
  | "Self Paced"
  | "FDP"
  | "Advanced / PG Certificate"
  | "Short Term Training";

export type Course = {
  id: string;
  title: string;
  phase: CoursePhase;
  status: CourseStatus;
  category: CourseCategory;
  domain: string;
  duration: string;
  mode: "Online" | "Hybrid" | "NKN Virtual";
  fee?: string;
  description: string;
  size: "large" | "medium" | "small";
  featured?: boolean;
};

export const courses: Course[] = [
  {
    id: "vlsi-phase1",
    title: "Introduction to VLSI Design",
    phase: "Phase I",
    status: "Archived",
    category: "Short Term Training",
    domain: "VLSI",
    duration: "2 weeks",
    mode: "NKN Virtual",
    fee: "As per Phase-I norms",
    description: "Fundamentals of CMOS, layout, and digital design flows for faculty upskilling.",
    size: "large",
  },
  {
    id: "iot-phase2",
    title: "IoT for Smart Agriculture",
    phase: "Phase II",
    status: "Upcoming",
    category: "Short Term Training",
    domain: "IoT",
    duration: "3 weeks",
    mode: "Online",
    description: "Sensors, edge computing, and data pipelines for NE agricultural applications.",
    size: "medium",
    featured: true,
  },
  {
    id: "aiml-phase2",
    title: "AI/ML for Signal Processing",
    phase: "Phase II",
    status: "Published",
    category: "Advanced / PG Certificate",
    domain: "AI/ML",
    duration: "4 weeks",
    mode: "Hybrid",
    fee: "₹12,000",
    description: "Deep learning pipelines for speech, vision, and embedded inference.",
    size: "large",
    featured: true,
  },
  {
    id: "ds-pro",
    title: "Advanced Data Science Certification",
    phase: "Phase II",
    status: "Published",
    category: "Advanced / PG Certificate",
    domain: "Data Science",
    duration: "12 weeks",
    mode: "Online",
    fee: "₹45,000",
    description: "Industry-relevant certification for graduates and working professionals.",
    size: "medium",
    featured: true,
  },
  {
    id: "cloud-pro",
    title: "Cloud Computing & DevOps",
    phase: "Phase II",
    status: "Published",
    category: "Self Paced",
    domain: "Cloud",
    duration: "10 weeks",
    mode: "Online",
    fee: "₹38,000",
    description: "AWS/Azure fundamentals, CI/CD, and scalable deployment patterns.",
    size: "small",
    featured: true,
  },
  {
    id: "cyber-phase2",
    title: "Cybersecurity for Critical Infrastructure",
    phase: "Phase II",
    status: "Upcoming",
    category: "Short Term Training",
    domain: "Cybersecurity",
    duration: "3 weeks",
    mode: "Hybrid",
    description: "Threat modeling, incident response - tailored for government & defense partners.",
    size: "medium",
    featured: true,
  },
  {
    id: "fullstack",
    title: "Full Stack Web Development",
    phase: "Phase II",
    status: "Published",
    category: "Self Paced",
    domain: "Software",
    duration: "14 weeks",
    mode: "Online",
    fee: "₹42,000",
    description: "React, Node.js, databases, and deployment for employability.",
    size: "small",
    featured: true,
  },
  {
    id: "uiux",
    title: "UI/UX Design for Digital Products",
    phase: "Phase II",
    status: "Published",
    category: "Self Paced",
    domain: "Design",
    duration: "8 weeks",
    mode: "Online",
    fee: "₹28,000",
    description: "Design systems, prototyping, and accessibility for ICT products.",
    size: "small",
  },
  {
    id: "bigdata",
    title: "Big Data Analytics",
    phase: "Phase II",
    status: "Archived",
    category: "Self Paced",
    domain: "Big Data",
    duration: "6 weeks",
    mode: "Online",
    description: "Hadoop ecosystem, Spark, and visualization at scale.",
    size: "medium",
  },
  {
    id: "vlsi-adv",
    title: "Advanced VLSI - Physical Design",
    phase: "Phase II",
    status: "Upcoming",
    category: "Advanced / PG Certificate",
    domain: "VLSI",
    duration: "5 weeks",
    mode: "Hybrid",
    description: "Placement, routing, timing closure for industry-ready faculty.",
    size: "large",
  },
  {
    id: "embedded",
    title: "Embedded Systems with ARM",
    phase: "Phase I",
    status: "Archived",
    category: "Short Term Training",
    domain: "Embedded",
    duration: "2 weeks",
    mode: "NKN Virtual",
    description: "RTOS, peripherals, and hands-on labs for engineering colleges.",
    size: "medium",
  },
  {
    id: "classical-ml-fdp",
    title: "Joint FDP on Classical ML",
    phase: "Phase II",
    status: "Published",
    category: "FDP",
    domain: "AI/ML",
    duration: "1 week",
    mode: "Online",
    description: "Faculty Development Programme - registration open for NE institutions.",
    size: "small",
    featured: true,
  },
];

export const courseCategories: (CourseCategory | "All Courses")[] = [
  "All Courses",
  "Self Paced",
  "FDP",
  "Advanced / PG Certificate",
  "Short Term Training",
];
