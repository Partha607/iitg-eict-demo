import { AcademyNav } from "@/components/layouts/AcademyNav";
import { AcademyFooter } from "@/components/layouts/AcademyFooter";
import { AcademyPageBackground } from "@/components/layouts/AcademyPageBackground";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative isolate min-h-screen">
      <AcademyPageBackground />
      <div className="relative z-10">
        <AcademyNav />
        <main className="min-h-[calc(100vh-4rem)] overflow-x-hidden">{children}</main>
        <AcademyFooter />
      </div>
    </div>
  );
}
