export type LmsCourse = {
  id: string;
  title: string;
  progress: number;
  instructor: string;
  nextClass: string;
};

export const lmsCourses: LmsCourse[] = [
  {
    id: "c1",
    title: "Advanced Embedded Systems",
    progress: 68,
    instructor: "Prof. Gaurav Trivedi",
    nextClass: "May 16, 10:00 AM",
  },
  {
    id: "c2",
    title: "VLSI Physical Design Lab",
    progress: 42,
    instructor: "Dr. Raktim Choudhury",
    nextClass: "May 17, 2:00 PM",
  },
  {
    id: "c3",
    title: "Classical ML - FDP Module 3",
    progress: 91,
    instructor: "Guest Faculty",
    nextClass: "May 15, 11:00 AM",
  },
];

export const announcements = [
  {
    title: "Assignment 3 due - Embedded Systems",
    date: "May 15, 2026",
    urgent: true,
  },
  {
    title: "Live session rescheduled to 10 AM",
    date: "May 14, 2026",
    urgent: false,
  },
  {
    title: "Phase-II certificate samples available",
    date: "May 12, 2026",
    urgent: false,
  },
];

export const calendarEvents = [
  { day: 15, title: "ML FDP Live", type: "live" },
  { day: 16, title: "Embedded Lab", type: "lab" },
  { day: 18, title: "VLSI Quiz", type: "assessment" },
  { day: 22, title: "Office Hours", type: "office" },
];

export const gradingMatrix = [
  { student: "Ananya S.", assignment: "Lab 4", score: 88, status: "Graded" },
  { student: "Rahul D.", assignment: "Lab 4", score: null, status: "Pending" },
  { student: "Priya G.", assignment: "Lab 4", score: 92, status: "Graded" },
  { student: "Binod K.", assignment: "Lab 4", score: 76, status: "Graded" },
];
