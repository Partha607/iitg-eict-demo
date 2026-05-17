import { BentoCourseGrid } from "@/components/academy/BentoCourseGrid";

export default function CoursesPage() {
  return (
    <div className="academy-container py-8 md:py-12">
      <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Courses</h1>
      <p className="mt-2 mb-8 text-muted">
        Phase I &amp; II domains, archives, fee structures - unified catalog
      </p>
      <BentoCourseGrid />
    </div>
  );
}
