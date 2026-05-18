import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { PageBackground } from "@/components/layouts/PageBackground";
import { images } from "@/lib/images";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function AcademyFooter() {
  const { contact, footer, social, fullName } = siteConfig;

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-theme-border bg-nav/75 text-foreground backdrop-blur-sm">
      <PageBackground
        sources={[images.building]}
        layout="footer"
        opacity={0.18}
        scrimStrength="medium"
        className="absolute inset-0"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 md:py-14 lg:px-12">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo
              href="/academy"
              imageClassName="h-20 w-auto max-w-full object-contain sm:h-24 md:h-28"
            />
            <p className="mt-4 text-sm font-medium leading-relaxed text-foreground/85 sm:text-base">
              Electronics and ICT Academy would aim to provide specialized training to the
              faculties of Engineering, Arts, Commerce &amp; Science colleges, Polytechnics etc, by
              developing state-of-the-art facilities.
            </p>
            <p className="mt-3 text-xs font-medium leading-relaxed text-foreground/75 sm:text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          <FooterColumn title="For Students">
            {footer.forStudents.map((link) => (
              <FooterLink
                key={`${link.label}-${link.href}`}
                href={link.href}
                label={link.label}
              />
            ))}
          </FooterColumn>

          <FooterColumn title="Quick Links">
            {footer.quickLinks.map((link) => (
              <FooterLink
                key={`${link.label}-${link.href}`}
                href={link.href}
                label={link.label}
              />
            ))}
          </FooterColumn>

          <FooterColumn title="About Northeast India">
            {footer.aboutNe.map((link) => (
              <FooterLink
                key={`${link.label}-${link.href}`}
                href={link.href}
                label={link.label}
                external={link.href.startsWith("http")}
              />
            ))}
          </FooterColumn>

          <FooterColumn title="Contact Info">
            <li className="flex gap-2 text-sm font-medium text-foreground/80 sm:text-base">
              <MapPin size={14} className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span>{contact.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-cyan-600 sm:text-base dark:hover:text-cyan-400"
              >
                <Mail size={14} className="shrink-0" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phoneOffice.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-cyan-600 sm:text-base dark:hover:text-cyan-400"
              >
                <Phone size={14} className="shrink-0" />
                {contact.phoneOffice}
              </a>
            </li>
            <li className="text-sm font-medium text-foreground/80 sm:text-base">
              {contact.phoneMobile}
            </li>
          </FooterColumn>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-theme-border pt-6 sm:flex-row">
          <p className="text-center text-xs font-medium text-foreground/75 sm:text-left sm:text-sm">
            © {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5" aria-label="Social media">
            <SocialIcon href={social.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href={social.x} label="X">
              <XIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={social.instagram} label="Instagram">
              <Instagram size={16} />
            </SocialIcon>
            <SocialIcon href={social.facebook} label="Facebook">
              <Facebook size={16} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground sm:text-base">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "text-sm font-medium text-foreground/85 transition-colors hover:text-cyan-600 sm:text-base dark:hover:text-cyan-400";
  if (external) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className={className}>
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-theme-border text-muted transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400"
    >
      {children}
    </a>
  );
}
