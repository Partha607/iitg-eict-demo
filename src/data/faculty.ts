export type FacultyCategory =
  | "Administrative"
  | "Board"
  | "Team"
  | "Past"
  | "Associate";

export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  category: FacultyCategory;
  email?: string;
  phone?: string;
  image?: string;
  linkedin?: string;
};

export const faculty: FacultyMember[] = [
  {
    id: "trivedi",
    name: "Prof. Gaurav Trivedi",
    role: "Principal Investigator",
    category: "Administrative",
    email: "trivedi@iitg.ac.in",
    phone: "+91-361-258-3200",
    image: "https://eict.iitg.ac.in/eictacad/people/01123456390f70118847d1bc20a0d2cd0a1346.jpg",
  },
  {
    id: "feroza",
    name: "Feroza Haque",
    role: "Project Manager",
    category: "Team",
    email: "feroza.haque@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/0349120dd7a6181173723ba98b9b866f7f2b7b.jpeg",
  },
  {
    id: "aditi",
    name: "Aditi Biswas Das",
    role: "Project Engineer",
    category: "Team",
    email: "aditibiswasdas@iisi.iitg.ac.in",
    image: "https://eict.iitg.ac.in/eictacad/people/035119ead94f603abf444c963fdae116a0cd23.jpg",
  },
  {
    id: "koushik",
    name: "Koushik Bharadwaj",
    role: "Project Engineer",
    category: "Team",
    email: "kaushikdeck@iisi.iitg.ac.in",
    image: "https://eict.iitg.ac.in/eictacad/people/03591114509c5c6d17f77ea0f30660b335ba89.jpg",
  },
  {
    id: "pronamika",
    name: "Pronamika Buragohain",
    role: "Project Engineer",
    category: "Team",
    email: "mixcy92@iisi.iitg.ac.in",
    image: "https://eict.iitg.ac.in/eictacad/people/035254ef15204ce34d0dfa655b21107838ec05.jpg",
  },
  {
    id: "vartika",
    name: "Vartika Agarwal",
    role: "Associate Project Engineer",
    category: "Associate",
    email: "vartikaagarwal@iisi.iitg.ac.in",
    image: "https://eict.iitg.ac.in/eictacad/people/0811173afa9b4a4c3eb61f527a88d715d11de7.jpeg",
  },
  {
    id: "raktim",
    name: "Raktim Choudhury",
    role: "Associate Project Scientist",
    category: "Associate",
    email: "raktimchoudhury@iisi.iitg.ac.in",
    image: "https://eict.iitg.ac.in/eictacad/people/0813376ca4d164c8a6210da062873855d67318.jpeg",
  },
  {
    id: "sahil",
    name: "Sahil Sharma",
    role: "Assistant Project Scientist",
    category: "Team",
    email: "sahil@iisi.iitg.ac.in",
    image: "https://eict.iitg.ac.in/eictacad/people/111209c5bf07d4e8506514c6b5c61e2fd5788f.jpg",
  },
  {
    id: "board-chair",
    name: "Board Committee Chair",
    role: "Governing Board Representative",
    category: "Board",
    email: "eictacad@iitg.ac.in",
  },
  {
    id: "past-pi",
    name: "Former Principal Investigator",
    role: "Past Leadership — Phase I",
    category: "Past",
  },
];
