"use client";

import { usePathname } from "next/navigation";
import { PageBackground } from "@/components/layouts/PageBackground";
import { images } from "@/lib/images";

type BgConfig = {
  sources: readonly string[];
  layout: "single" | "stacked";
  opacity?: number;
};

function resolveBackground(pathname: string): BgConfig {
  if (pathname === "/academy") {
    return {
      sources: [images.buildingCentral, images.buildingSide],
      layout: "stacked",
      opacity: 0.48,
    };
  }
  if (pathname === "/academy/about") {
    return { sources: [images.buildingLakeLeft], layout: "single", opacity: 0.45 };
  }
  if (pathname === "/academy/people") {
    return { sources: [images.topView], layout: "single", opacity: 0.42 };
  }
  if (pathname === "/academy/infrastructure") {
    return { sources: [images.buildingLake], layout: "single", opacity: 0.45 };
  }
  if (pathname === "/academy/contact") {
    return { sources: [images.gate], layout: "single", opacity: 0.44 };
  }
  return {
    sources: [images.buildingCentral, images.buildingSide],
    layout: "stacked",
    opacity: 0.46,
  };
}

export function AcademyPageBackground() {
  const pathname = usePathname();
  const { sources, layout, opacity } = resolveBackground(pathname);

  return (
    <PageBackground
      sources={sources}
      layout={layout}
      opacity={opacity}
      scrimStrength="light"
    />
  );
}
