import { AcademyNav } from "@/components/layouts/AcademyNav";
import { AcademyFooter } from "@/components/layouts/AcademyFooter";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AcademyNav />
      <main className="min-h-[calc(100vh-4rem)] overflow-x-hidden">{children}</main>
      <AcademyFooter />
    </>
  );
}
