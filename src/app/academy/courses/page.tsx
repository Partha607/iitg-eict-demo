import { BentoCourseGrid } from "@/components/academy/BentoCourseGrid";

export default function CoursesPage() {
  return (
    <div className="academy-container py-8 md:py-12">
      <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        Explore Courses
      </h1>
      <p className="mt-3 mb-8 max-w-2xl text-base text-muted sm:text-lg">
        Self-paced courses, Faculty Development Programmes, certifications and short-term
        trainings - unified catalog across Phase I &amp; II.
      </p>
      <BentoCourseGrid />
    </div>
  );
}
