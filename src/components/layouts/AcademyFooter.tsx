import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

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
    <footer className="relative mt-16 overflow-hidden border-t border-theme-border bg-nav text-foreground">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 text-cyan-900/15 dark:text-cyan-400/10">
        <Image
          src="/images/iitg-silhouette.svg"
          alt=""
          width={1200}
          height={200}
          className="h-auto w-full object-cover object-bottom"
        />
      </div>

      <div className="academy-container relative z-10 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo href="/academy" showSubtitle imageClassName="h-12 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
          </div>

          <FooterColumn title="For Students">
            {footer.forStudents.map((link) => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </FooterColumn>

          <FooterColumn title="Quick Links">
            {footer.quickLinks.map((link) => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </FooterColumn>

          <FooterColumn title="About Northeast India">
            {footer.aboutNe.map((link) => (
              <FooterLink
                key={link.href}
                href={link.href}
                label={link.label}
                external={link.href.startsWith("http")}
              />
            ))}
          </FooterColumn>

          <FooterColumn title="Contact Info">
            <li className="flex gap-2 text-sm text-muted">
              <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span>{contact.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <Mail size={16} className="shrink-0" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phoneOffice.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <Phone size={16} className="shrink-0" />
                {contact.phoneOffice}
              </a>
            </li>
            <li className="text-sm text-muted">{contact.phoneMobile}</li>
          </FooterColumn>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-theme-border pt-8 sm:flex-row">
          <p className="text-center text-xs text-muted sm:text-left">
            © {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3" aria-label="Social media">
            <SocialIcon href={social.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon href={social.x} label="X">
              <XIcon className="h-[18px] w-[18px]" />
            </SocialIcon>
            <SocialIcon href={social.instagram} label="Instagram">
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon href={social.facebook} label="Facebook">
              <Facebook size={18} />
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
      <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
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
    "text-sm text-muted transition-colors hover:text-cyan-600 dark:hover:text-cyan-400";
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-theme-border text-muted transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400"
    >
      {children}
    </a>
  );
}
