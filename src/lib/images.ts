import { withBasePath } from "./asset-path";

/** Local brand assets - served from /public/images */
export const images = {
  logo: withBasePath("/images/logo.png"),
  academy: withBasePath("/images/academy.png"),
  portal: withBasePath("/images/portal.png"),
  leftHemisphere: withBasePath("/images/academy.png"),
  rightHemisphere: withBasePath("/images/portal.png"),
  buildingCentral: withBasePath("/images/building_central.png"),
  buildingSide: withBasePath("/images/building_side.png"),
  building: withBasePath("/images/building.png"),
  buildingLake: withBasePath("/images/building_lake.png"),
  buildingLakeLeft: withBasePath("/images/building_lake_left.png"),
  buildingGarden: withBasePath("/images/building_garden.png"),
  buildingFar: withBasePath("/images/building_far.png"),
  topView: withBasePath("/images/top_view.png"),
  gate: withBasePath("/images/Gate.png"),
  heroAbout: withBasePath("/images/Hero_Image.png"),
  achievements: withBasePath("/images/Acheivements.png"),
  history: withBasePath("/images/History.png"),
  iitPic7: withBasePath("/images/iit-pic-7.jpg"),
  aboutIitg: withBasePath("/images/about_iitg.jpg"),
  eictHero: withBasePath("/images/eict_hero.jpg"),
  infraHero: withBasePath("/images/infra_hero.jpg"),
  thumbnails: {
    vlsi: withBasePath("/images/Thumbnail_VLSI.png"),
    iot: withBasePath("/images/Thumbnail_IoT.png"),
    ml: withBasePath("/images/Thumbnail_Machine_Learning.png"),
    cybersecurity: withBasePath("/images/Thumbnail_Cybersecurity.png"),
    dataScience: withBasePath("/images/Advanced_Data_Science.png"),
    cloud: withBasePath("/images/Cloud_Computing_DevOps.png"),
    fullStack: withBasePath("/images/Full_Stack_Web_Development.png"),
    uiux: withBasePath("/images/UI-UX_Design_for_Digital_Products.png"),
    bigData: withBasePath("/images/Big_Data_Analytics.png"),
    embedded: withBasePath("/images/Embedded_Systems_with_ARM.png"),
  },
  avatars: {
    male: withBasePath("/images/Placeholder_Avatars_Male.png"),
    female: withBasePath("/images/Placeholder_Avatars_Female.png"),
    neutral: withBasePath("/images/Placeholder_Avatars_Nuetral.png"),
  },
} as const;

export type AvatarVariant = keyof typeof images.avatars;

export function getDomainThumbnail(domain: string): string | undefined {
  const d = domain.toLowerCase();
  if (d.includes("vlsi")) return images.thumbnails.vlsi;
  if (d.includes("iot")) return images.thumbnails.iot;
  if (d.includes("ai") || d.includes("ml") || d.includes("machine")) return images.thumbnails.ml;
  if (d.includes("cyber") || d.includes("security")) return images.thumbnails.cybersecurity;
  if (d.includes("data science")) return images.thumbnails.dataScience;
  if (d.includes("cloud")) return images.thumbnails.cloud;
  if (d.includes("software")) return images.thumbnails.fullStack;
  if (d.includes("design")) return images.thumbnails.uiux;
  if (d.includes("big data")) return images.thumbnails.bigData;
  if (d.includes("embedded")) return images.thumbnails.embedded;
  return undefined;
}

export function avatarForIndex(index: number): AvatarVariant {
  const variants: AvatarVariant[] = ["neutral", "male", "female"];
  return variants[index % variants.length];
}
