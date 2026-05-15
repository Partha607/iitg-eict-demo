/** Maps legacy EICT URLs (from urls.txt) to consolidated demo routes — for stakeholder revamp walkthrough */
export type UrlMapping = {
  legacyUrl: string;
  label: string;
  demoRoute: string;
  section: "Main Website" | "Online Course";
};

export const urlMappings: UrlMapping[] = [
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index", label: "Home", demoRoute: "/academy" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_page_details?page=…&title=administrativ", label: "Administrative", demoRoute: "/academy/faculty" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/eictacad/index_page_board_committee", label: "Board Committee", demoRoute: "/academy/faculty" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/eictacad/index_page_team", label: "Team", demoRoute: "/academy/faculty" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/eictacad/index_page_past_member", label: "Past Members", demoRoute: "/academy/faculty" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/eictacad/index_page_details?page=…&title=benefits-to-north-east", label: "NE States Benefits", demoRoute: "/academy/about" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/eictacad/index_page_facility", label: "Facilities", demoRoute: "/academy/about" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_page_gallery", label: "Gallery", demoRoute: "/academy/gallery" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/eictacad/user/user_login", label: "Login", demoRoute: "/portal/login" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/eictacad/user/signup-basic", label: "Register", demoRoute: "/portal/register" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=synopsis", label: "Phase-I Synopsis", demoRoute: "/academy/about" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=achievements", label: "Achievements", demoRoute: "/academy/about" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=ed-tech-part", label: "Ed-Tech Partners", demoRoute: "/academy/about" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_course_page?type=Phase-I", label: "Phase-I Courses", demoRoute: "/academy/courses" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_scuccesful_learners", label: "Successful Learners", demoRoute: "/portal/lms" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_page_gallery?type=Phase-I", label: "Phase-I Gallery", demoRoute: "/academy/gallery" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=sample-certi", label: "Sample Certificate", demoRoute: "/academy/courses" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_archived_course?type=Phase-I", label: "Archived Phase-I", demoRoute: "/academy/courses" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…", label: "Phase-II About", demoRoute: "/academy/about" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=spokes", label: "Spokes", demoRoute: "/academy/about" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_course_category?cate=…", label: "FDP Category", demoRoute: "/academy/courses" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=course-domai", label: "Course Domains", demoRoute: "/academy/courses" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=fee-structur", label: "Fee Structure", demoRoute: "/academy/courses" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_phase_details?page=…&title=associate-fa", label: "Associate Faculty", demoRoute: "/academy/faculty" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_archived_course?type=Phase-II", label: "Archived Phase-II", demoRoute: "/academy/courses" },
  { section: "Main Website", legacyUrl: "https://eict.iitg.ac.in/index_page_gallery?type=Phase-II", label: "Phase-II Gallery", demoRoute: "/academy/gallery" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/index.html", label: "Course Portal Home", demoRoute: "/academy" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/about.html", label: "About", demoRoute: "/academy/about" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/history.html", label: "History", demoRoute: "/academy/about" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/future.html", label: "Future", demoRoute: "/academy/about" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/professional.html", label: "Professional Courses", demoRoute: "/academy/courses" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/other.html", label: "Other Courses", demoRoute: "/academy/courses" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/fee.html", label: "Fee", demoRoute: "/academy/courses" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/admission.html", label: "Admission", demoRoute: "/portal/register" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/why.html", label: "Why Enrol", demoRoute: "/academy/about" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/news.html", label: "News", demoRoute: "/academy" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/address.html", label: "Address", demoRoute: "/academy/contact" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/faq.html", label: "FAQ", demoRoute: "/academy/contact" },
  { section: "Online Course", legacyUrl: "https://courses.eictiitg.com/syllabus.html", label: "Syllabus", demoRoute: "/academy/courses" },
];
