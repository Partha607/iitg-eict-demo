import { BentoCourseGrid } from "@/components/academy/BentoCourseGrid";

export default function CoursesPage() {
  return (
    <div>
      <h1 className="font-display text-4xl font-bold text-white">Courses</h1>
      <p className="mt-2 mb-8 text-slate-400">
        Phase I &amp; II domains, archives, fee structures — unified catalog
      </p>
      <BentoCourseGrid />
    </div>
  );
}
