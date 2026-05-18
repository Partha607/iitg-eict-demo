import { EnquiryKanban } from "@/components/portal/EnquiryKanban";
import { BackToLoginButton } from "@/components/portal/BackToLoginButton";
import { Logo } from "@/components/ui/Logo";

export default function EnquiriesPage() {
  return (
    <div className="text-base sm:text-lg">
      <div className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-theme-border bg-card/85 px-4 py-3 backdrop-blur-md sm:px-6">
        <BackToLoginButton />
        <Logo
          href="/"
          imageClassName="h-14 w-auto object-contain object-center sm:h-16 md:h-20 lg:h-24"
        />
        <span className="hidden text-sm font-medium text-muted sm:inline sm:text-base">
          Admin · Enquiries
        </span>
      </div>
      <EnquiryKanban />
    </div>
  );
}
