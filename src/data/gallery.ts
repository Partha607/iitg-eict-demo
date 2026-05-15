export type GalleryPhase = "Phase I" | "Phase II" | "All";

export type GalleryItem = {
  id: string;
  title: string;
  phase: "Phase I" | "Phase II";
  image: string;
  aspect: "tall" | "wide" | "square";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "FDP Inauguration 2025",
    phase: "Phase II",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    aspect: "wide",
  },
  {
    id: "g2",
    title: "VLSI Lab Session",
    phase: "Phase I",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    aspect: "tall",
  },
  {
    id: "g3",
    title: "NKN Virtual Classroom",
    phase: "Phase I",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    aspect: "square",
  },
  {
    id: "g4",
    title: "NE Faculty Workshop",
    phase: "Phase II",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    aspect: "tall",
  },
  {
    id: "g5",
    title: "Industry Partner Demo",
    phase: "Phase II",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    aspect: "wide",
  },
  {
    id: "g6",
    title: "Certificate Ceremony",
    phase: "Phase I",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    aspect: "square",
  },
  {
    id: "g7",
    title: "IoT Hands-on Training",
    phase: "Phase II",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    aspect: "wide",
  },
  {
    id: "g8",
    title: "Team at IITG Campus",
    phase: "Phase II",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    aspect: "tall",
  },
];
