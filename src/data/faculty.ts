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

/** Team from eict.iitg.ac.in/eictacad/index_page_team (Firecrawl scrape) */
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
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/035119ead94f603abf444c963fdae116a0cd23.jpg",
  },
  {
    id: "koushik",
    name: "Koushik Bharadwaj",
    role: "Project Engineer",
    category: "Team",
    email: "kaushikdeck@iisi.iitg.ac.in",
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/03591114509c5c6d17f77ea0f30660b335ba89.jpg",
  },
  {
    id: "pronamika",
    name: "Pronamika Buragohain",
    role: "Project Engineer",
    category: "Team",
    email: "mixcy92@iisi.iitg.ac.in",
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/035254ef15204ce34d0dfa655b21107838ec05.jpg",
  },
  {
    id: "manash",
    name: "Manash Pratim Baishya",
    role: "Project Engineer",
    category: "Team",
    email: "manashbaishya@iisi.iitg.ac.in",
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/1244570ff30c8e8e008324e503357ec36b2d92.jpg",
  },
  {
    id: "vartika",
    name: "Vartika Agarwal",
    role: "Associate Project Engineer",
    category: "Associate",
    email: "vartikaagarwal@iisi.iitg.ac.in",
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/0811173afa9b4a4c3eb61f527a88d715d11de7.jpeg",
  },
  {
    id: "neelotpal",
    name: "Neelotpal Sharma",
    role: "Associate Project Engineer",
    category: "Associate",
    email: "neelotpal2021@iisi.iitg.ac.in",
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/0515292f4185b548023e53ddd5ed73caa4c3d8.jpg",
  },
  {
    id: "moromi",
    name: "Moromi Buragohain",
    role: "Assistant Project Engineer",
    category: "Team",
    email: "gohainmoromi@iisi.iitg.ac.in",
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/07160250471c0d7bb65248c040484a7605a761.jpg",
  },
  {
    id: "ershikha",
    name: "Ershikha Das",
    role: "Assistant Project Engineer",
    category: "Team",
    email: "ershikha111@iisi.iitg.ac.in",
    phone: "+91-361-258-3199",
    image: "https://eict.iitg.ac.in/eictacad/people/12315970091dcaf1276fd956ad2e4438873f39.jpeg",
  },
  {
    id: "raktim",
    name: "Raktim Choudhury",
    role: "Associate Project Scientist",
    category: "Associate",
    email: "raktimchoudhury@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/0813376ca4d164c8a6210da062873855d67318.jpeg",
  },
  {
    id: "sahil",
    name: "Sahil Sharma",
    role: "Assistant Project Scientist",
    category: "Team",
    email: "sahil@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/111209c5bf07d4e8506514c6b5c61e2fd5788f.jpg",
  },
  {
    id: "susila",
    name: "Susila Saikia",
    role: "Office Assistant",
    category: "Team",
    email: "susila@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/0833430f189f89343efc2f3c42b59eccd46860.jpg",
  },
  {
    id: "nayanika",
    name: "Nayanika Borah",
    role: "Office Assistant",
    category: "Team",
    email: "nayanika@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/0833035d7adf9c62d9323ccbc5588c3819c646.jpg",
  },
  {
    id: "bijit",
    name: "Bijit Choudhury",
    role: "Office Assistant",
    category: "Team",
    email: "bijitchoudhury@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/120347b6b6f473334b90718e0c1a038eef32fa.jpg",
  },
  {
    id: "jagadish",
    name: "Jagadish Das",
    role: "Senior Project Technician",
    category: "Team",
    email: "jcdas1989@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/0835393deec081ec99a77f6e69caba8af2113a.jpeg",
  },
  {
    id: "amarjyoti",
    name: "Amarjyoti Kalita",
    role: "Senior Project Technician",
    category: "Team",
    email: "amarkalita@iisi.iitg.ac.in",
    phone: "+91-361-258-3182",
    image: "https://eict.iitg.ac.in/eictacad/people/083610945ad759d46362db77b5623bec10c0e1.jpeg",
  },
];
