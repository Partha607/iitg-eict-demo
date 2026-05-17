import { HeroCarousel } from "@/components/academy/HeroCarousel";
import { NoticeBulletin } from "@/components/academy/NoticeBulletin";

export function HeroSection() {
  return (
    <section className="academy-container py-6 md:py-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <HeroCarousel />
        <NoticeBulletin className="min-h-[320px] lg:min-h-0" />
      </div>
    </section>
  );
}
