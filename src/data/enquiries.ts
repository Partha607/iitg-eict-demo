export type EnquiryChannel = "whatsapp" | "email" | "both";
export type EnquiryColumn = "new" | "communication" | "resolved";

export type Enquiry = {
  id: string;
  name: string;
  course: string;
  date: string;
  channel: EnquiryChannel;
  column: EnquiryColumn;
  note?: string;
};

export const enquiries: Enquiry[] = [
  {
    id: "e1",
    name: "Ananya Sharma",
    course: "AI/ML for Signal Processing",
    date: "May 14, 2026",
    channel: "whatsapp",
    column: "new",
    note: "Asked about NE state fee waiver",
  },
  {
    id: "e2",
    name: "Rahul Das",
    course: "VLSI Design Certification",
    date: "May 13, 2026",
    channel: "email",
    column: "new",
  },
  {
    id: "e3",
    name: "Priya Gogoi",
    course: "Joint FDP Classical ML",
    date: "May 12, 2026",
    channel: "both",
    column: "communication",
    note: "Institutional bulk enrollment",
  },
  {
    id: "e4",
    name: "Dr. Binod Kalita",
    course: "Cybersecurity Programme",
    date: "May 10, 2026",
    channel: "email",
    column: "communication",
  },
  {
    id: "e5",
    name: "Meghalaya Polytechnic",
    course: "IoT for Smart Agriculture",
    date: "May 8, 2026",
    channel: "whatsapp",
    column: "communication",
  },
  {
    id: "e6",
    name: "Sanjay Verma",
    course: "Full Stack Development",
    date: "May 5, 2026",
    channel: "email",
    column: "resolved",
  },
  {
    id: "e7",
    name: "Lily Changmai",
    course: "Data Science Certification",
    date: "May 1, 2026",
    channel: "both",
    column: "resolved",
  },
  {
    id: "e8",
    name: "Tezpur University",
    course: "Spoke Institute Registration",
    date: "Apr 28, 2026",
    channel: "email",
    column: "new",
  },
  {
    id: "e9",
    name: "Arunachal IT Dept",
    course: "Custom Govt Training",
    date: "Apr 25, 2026",
    channel: "whatsapp",
    column: "resolved",
  },
];
