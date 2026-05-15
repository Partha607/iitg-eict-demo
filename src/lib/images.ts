/** Local brand assets — served from /public/images */
export const images = {
  logo: "/images/logo.png",
  leftHemisphere: "/images/Left_Hemisphere.png",
  rightHemisphere: "/images/Right_Hemisphere.png",
  heroAbout: "/images/Hero_Image.png",
  achievements: "/images/Acheivements.png",
  history: "/images/History.png",
  thumbnails: {
    vlsi: "/images/Thumbnail_VLSI.png",
    iot: "/images/Thumbnail_IoT.png",
    ml: "/images/Thumbnail_Machine_Learning.png",
    cybersecurity: "/images/Thumbnail_Cybersecurity.png",
  },
  avatars: {
    male: "/images/Placeholder_Avatars_Male.png",
    female: "/images/Placeholder_Avatars_Female.png",
    neutral: "/images/Placeholder_Avatars_Nuetral.png",
  },
} as const;

export type AvatarVariant = keyof typeof images.avatars;

export function getDomainThumbnail(domain: string): string | undefined {
  const d = domain.toLowerCase();
  if (d.includes("vlsi")) return images.thumbnails.vlsi;
  if (d.includes("iot")) return images.thumbnails.iot;
  if (d.includes("ai") || d.includes("ml") || d.includes("machine")) return images.thumbnails.ml;
  if (d.includes("cyber") || d.includes("security")) return images.thumbnails.cybersecurity;
  return undefined;
}

export function avatarForIndex(index: number): AvatarVariant {
  const variants: AvatarVariant[] = ["neutral", "male", "female"];
  return variants[index % variants.length];
}
