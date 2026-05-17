"use client";

import Script from "next/script";
import Link from "next/link";
import { ExternalLink, Facebook, Instagram } from "lucide-react";
import { FACEBOOK_EMBED_HEIGHT, facebookPagePluginSrc, socialLinks } from "@/data/social";
import { GlassCard } from "@/components/ui/GlassCard";

export function SocialFeed() {
  return (
    <section className="academy-container py-10 md:py-14">
      <div className="mb-6 text-center md:mb-8">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          Connect With Us
        </h2>
        <p className="mt-2 text-sm text-muted">
          Follow live updates on Facebook and Instagram
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="overflow-hidden p-0">
          <div className="relative flex items-center justify-center border-b border-theme-border px-4 py-3">
            <Facebook
              size={24}
              className="text-blue-600 dark:text-blue-400"
              aria-hidden
            />
            <span className="sr-only">Facebook</span>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 flex items-center gap-1 text-xs text-cyan-600 hover:underline dark:text-cyan-400"
            >
              @eictacadguwahati <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex justify-center overflow-hidden bg-white p-2 dark:bg-slate-900">
            <iframe
              title="E&ICT Academy IIT Guwahati on Facebook"
              src={facebookPagePluginSrc}
              className="w-full max-w-[500px] border-0"
              style={{ height: FACEBOOK_EMBED_HEIGHT }}
              scrolling="no"
              allow="encrypted-media"
              loading="lazy"
            />
          </div>
        </GlassCard>

        <GlassCard className="overflow-hidden p-0">
          <div className="relative flex items-center justify-center border-b border-theme-border px-4 py-3">
            <Instagram
              size={24}
              className="text-pink-600 dark:text-pink-400"
              aria-hidden
            />
            <span className="sr-only">Instagram</span>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 flex items-center gap-1 text-xs text-cyan-600 hover:underline dark:text-cyan-400"
            >
              @eict_academy_iitguwahati <ExternalLink size={12} />
            </a>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 p-6"
            style={{ minHeight: FACEBOOK_EMBED_HEIGHT }}
          >
            {/* <p className="max-w-sm text-center text-sm text-muted">
              Live Instagram posts load from Meta&apos;s embed service. Open the profile for the
              latest reels, announcements, and event photos.
            </p> */}
            <blockquote
              className="instagram-media hidden"
              data-instgrm-permalink={socialLinks.instagram}
              data-instgrm-version="14"
            />
            <Link
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-theme-border bg-nav px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              View on Instagram
            </Link>
            {/* <iframe
              title="E&ICT Academy IIT Guwahati on Instagram"
              src={`${socialLinks.instagram.replace(/\/?$/, "/")}embed`}
              className="h-[420px] w-full max-w-[400px] rounded-lg border border-theme-border bg-white"
              loading="lazy"
            /> */}
          </div>
        </GlassCard>
      </div>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
}
