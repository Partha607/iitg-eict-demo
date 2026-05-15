import { AcademyNav } from "@/components/layouts/AcademyNav";
import { siteConfig } from "@/data/site";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AcademyNav />
      <main className="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl px-4 py-10 md:px-6">
        {children}
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500">
        <p>{siteConfig.fullName}</p>
        <p className="mt-1">
          {siteConfig.contact.email} · {siteConfig.contact.phoneOffice}
        </p>
      </footer>
    </>
  );
}
