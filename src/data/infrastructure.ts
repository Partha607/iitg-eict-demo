export type LabFacility = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  image: string;
  accent: "cyan" | "amber" | "violet";
};

export const academyLabs: LabFacility[] = [
  {
    id: "smart-classroom",
    name: "E&ICT Smart Classroom",
    description:
      "Equipped for audio/video conferencing, live streaming, and webcasting with recording. Systems run MATLAB, Cadence, Vivado, Keil uVision, and Sentaurus TCAD.",
    highlights: [
      "42-seat capacity",
      "Full HD PTZ camera",
      "Digital podium with interactive panel",
      "Video conferencing & webcasting",
    ],
    image: "/images/iit-pic-3.png",
    accent: "cyan",
  },
  {
    id: "ai-lab",
    name: "AI & Computing Lab",
    description:
      "Cutting-edge facility for AI/ML research with high-memory workstations, dual-boot Windows and Linux, and GPU resources for deep learning.",
    highlights: [
      "MATLAB, PyTorch, TensorFlow, OpenCV",
      "Synopsys Quantum ATK",
      "Raspberry Pi kits for IoT",
      "LAN & Wi-Fi connectivity",
    ],
    image: "/images/Thumbnail_Machine_Learning.png",
    accent: "violet",
  },
  {
    id: "multipurpose",
    name: "Multi-Purpose ICT Lab",
    description:
      "Desktops and workstations with industry EDA tools, FPGA boards, and IoT development kits for hands-on electronics and ICT training.",
    highlights: [
      "30-seat capacity",
      "FPGA Zedboard 7000 Series",
      "MSP430 & Wi-Fi booster kits",
      "Projector for lectures",
    ],
    image: "/images/Thumbnail_VLSI.png",
    accent: "amber",
  },
];

export const instituteFacilities = [
  "NKN virtual classroom infrastructure",
  "Electronics & communication research laboratories at IIT Guwahati",
  "High-performance computing resources",
  "Industry-partner hands-on training bays",
  "Online learning platform with proctored assessments",
];
