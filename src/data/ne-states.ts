export type NeState = {
  id: string;
  name: string;
  capital: string;
  description: string;
  accent: string;
  image: string;
};

/** Eight states of Northeast India covered by E&ICT Academy IIT Guwahati */
export const neStates: NeState[] = [
  {
    id: "arunachal",
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    description:
      "Faculty and students from state universities, government colleges, and polytechnics participate in basic, advanced, and research-oriented ICT programmes.",
    accent: "#22c55e",
    image: "/images/arunachal.jpg",
  },
  {
    id: "assam",
    name: "Assam",
    capital: "Dispur",
    description:
      "Largest outreach footprint in the region — engineering colleges, IIT Guwahati host institute, and industry partnerships for hands-on training.",
    accent: "#3b82f6",
    image: "/images/assam.jpg",
  },
  {
    id: "manipur",
    name: "Manipur",
    capital: "Imphal",
    description:
      "Central and state universities, private colleges, and technical institutes connected through FDPs and virtual classroom delivery.",
    accent: "#f59e0b",
    image: "/images/manipur.webp",
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    capital: "Shillong",
    description:
      "Programmes reach accredited arts, science, and commerce colleges alongside engineering and polytechnic institutions.",
    accent: "#8b5cf6",
    image: "/images/meghalaya.jpg",
  },
  {
    id: "mizoram",
    name: "Mizoram",
    capital: "Aizawl",
    description:
      "Beneficiaries include faculty from colleges across Aizawl and district headquarters, with NKN-enabled virtual participation.",
    accent: "#ec4899",
    image: "/images/mizoram.jpg",
  },
  {
    id: "nagaland",
    name: "Nagaland",
    capital: "Kohima",
    description:
      "Training supports upgradation of ICT skills for educators and students in Kohima, Dimapur, and affiliated institutions.",
    accent: "#ef4444",
    image: "/images/nagaland.jpg",
  },
  {
    id: "sikkim",
    name: "Sikkim",
    capital: "Gangtok",
    description:
      "Smaller but active participant base in state universities and technical colleges benefiting from MeitY-supported academies.",
    accent: "#14b8a6",
    image: "/images/sikkim.webp",
  },
  {
    id: "tripura",
    name: "Tripura",
    capital: "Agartala",
    description:
      "Engineering and polytechnic colleges join national FDPs with certificates recognized for CAS and professional development.",
    accent: "#06b6d4",
    image: "/images/Tripura.jpg",
  },
];

export const iitGuwahatiAbout =
  "Indian Institute of Technology Guwahati, established in 1994, is an Institute of National Importance and a centre of excellence for engineering, science, and technology education and research in North-East India. IIT Guwahati hosts the E&ICT Academy under MeitY, delivering industry-oriented programmes that bridge the gap between academic learning and ICT sector needs across the eight North-Eastern states and beyond.";
