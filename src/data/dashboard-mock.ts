export const dashboardNav = [
  { label: "Dashboard", href: "#", icon: "layout-dashboard" },
  { label: "My Courses", href: "#", icon: "book-open" },
  { label: "Live Classes", href: "#", icon: "video" },
  { label: "Assignments", href: "#", icon: "clipboard-list" },
  { label: "Quizzes", href: "#", icon: "help-circle" },
  { label: "Grades", href: "#", icon: "award" },
  { label: "Discussions", href: "#", icon: "message-square" },
  { label: "Announcements", href: "#", icon: "megaphone" },
  { label: "Calendar", href: "#", icon: "calendar" },
  { label: "Resources", href: "#", icon: "folder" },
  { label: "Help & Support", href: "#", icon: "life-buoy" },
] as const;

export const studentCourses = [
  {
    id: "dsp",
    title: "Digital Signal Processing",
    instructor: "Prof. P. K. Bora",
    status: "Ongoing" as const,
    progress: 75,
    startDate: null,
    thumb: "ml",
  },
  {
    id: "ml",
    title: "Introduction to Machine Learning",
    instructor: "Dr. S. R. N. Reddy",
    status: "Ongoing" as const,
    progress: 60,
    startDate: null,
    thumb: "ml",
  },
  {
    id: "cn",
    title: "Computer Networks",
    instructor: "Prof. G. Trivedi",
    status: "Upcoming" as const,
    progress: 0,
    startDate: "Jun 1, 2026",
    thumb: "iot",
  },
  {
    id: "vlsi",
    title: "VLSI Design Principles",
    instructor: "Dr. Raktim Choudhury",
    status: "Upcoming" as const,
    progress: 0,
    startDate: "Jun 15, 2026",
    thumb: "vlsi",
  },
];

export const continueLearning = [
  { title: "Data Structures and Algorithms", progress: 40 },
  { title: "Microprocessors and Interfacing", progress: 30 },
  { title: "Linear Integrated Circuits", progress: 20 },
];

export const studentAnnouncements = [
  {
    title: "PhD Admissions 2026–27",
    desc: "Applications open for ECSE PhD programme.",
    date: "May 12, 2026",
    icon: "megaphone",
  },
  {
    title: "Mid-Semester Exam Schedule",
    desc: "Timetable published for all UG/PG courses.",
    date: "May 10, 2026",
    icon: "calendar",
  },
  {
    title: "Lab Safety Orientation",
    desc: "Mandatory session for all new lab students.",
    date: "May 8, 2026",
    icon: "info",
  },
];

export const studentActivity = [
  { title: "Assignment submitted - Digital Signal Processing", time: "2 hours ago", type: "success" },
  { title: "New material added - Machine Learning", time: "Yesterday", type: "info" },
  { title: "Quiz graded - Embedded Systems", time: "2 days ago", type: "grade" },
];

export const quickLinks = [
  "Academic Calendar",
  "Lecture Schedule",
  "Department Notices",
  "Library Portal",
  "Student ERP",
];

export const staffStats = [
  { label: "Courses", count: 4, icon: "book-open" },
  { label: "Live Classes", count: 3, icon: "video" },
  { label: "Assignments", count: 12, icon: "clipboard-list" },
  { label: "Quizzes", count: 6, icon: "help-circle" },
  { label: "Students", count: 126, icon: "users" },
];

export const staffCourses = [
  { title: "Digital Signal Processing", code: "EC 512", thumb: "ml" },
  { title: "Introduction to Machine Learning", code: "EC 601", thumb: "ml" },
  { title: "Advanced VLSI Design", code: "EC 702", thumb: "vlsi" },
  { title: "Embedded Systems Lab", code: "EC 451", thumb: "iot" },
];

export const staffLiveClasses = [
  { title: "DSP - Lecture 12", date: "May 16, 2026", time: "10:00 AM" },
  { title: "ML - Tutorial 4", date: "May 17, 2026", time: "2:00 PM" },
  { title: "VLSI Lab Session", date: "May 18, 2026", time: "9:00 AM" },
];

export const staffAnnouncements = [
  { title: "Mid-semester exam guidelines", date: "May 14, 2026" },
  { title: "FDP registration reminder", date: "May 12, 2026" },
  { title: "Lab equipment maintenance", date: "May 10, 2026" },
];

export const staffAssignments = [
  { title: "DSP Assignment 3", due: "May 18, 2026" },
  { title: "ML Project Proposal", due: "May 20, 2026" },
  { title: "VLSI Lab Report 2", due: "May 22, 2026" },
];

export const staffQuizzes = [
  { title: "DSP Quiz 2", due: "May 17, 2026" },
  { title: "ML Weekly Quiz 5", due: "May 19, 2026" },
];

export const staffGrades = [
  { title: "DSP Mid-semester marks", published: "May 11, 2026" },
  { title: "ML Assignment 2 grades", published: "May 9, 2026" },
];

export const staffDiscussions = [
  { title: "FFT implementation doubts", posts: 14, last: "May 15, 2026" },
  { title: "ML project dataset sources", posts: 8, last: "May 14, 2026" },
];

export const staffResources = [
  { name: "DSP_Lecture12.pdf", type: "PDF", size: "2.4 MB" },
  { name: "ML_Slides_Week5.pptx", type: "PPTX", size: "5.1 MB" },
];

export const staffCalendarEvents = [
  { title: "Mid Semester Exams", range: "May 25 – Jun 5, 2026" },
  { title: "Department Seminar", range: "May 28, 2026" },
];

export const staffActivity = [
  { text: "You created a new announcement", time: "1 hour ago", icon: "megaphone" },
  { text: "You uploaded a new resource", time: "3 hours ago", icon: "upload" },
  { text: "You published grades for DSP", time: "Yesterday", icon: "award" },
  { text: "You scheduled a live class", time: "2 days ago", icon: "video" },
];

export const staffQuickLinks = [
  "Academic Calendar",
  "Departmental Forms",
  "Lab Booking",
  "Student Portal (ERP)",
];

export const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
export const calendarHighlight = 20;
