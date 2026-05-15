import { BentoCourseGrid } from "@/components/academy/BentoCourseGrid";

export default function CoursesPage() {
  return (
    <div>
      <h1 className="font-display text-4xl font-bold text-foreground">Courses</h1>
      <p className="mt-2 mb-8 text-muted">
        Phase I &amp; II domains, archives, fee structures — unified catalog
      </p>
      <BentoCourseGrid />
    </div>
  );
}
