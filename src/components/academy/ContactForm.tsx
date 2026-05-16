"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { siteConfig } from "@/data/site";
import { FaqSection } from "@/components/academy/FaqSection";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [channel, setChannel] = useState<"whatsapp" | "email">("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-theme-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20";

  return (
    <div className="academy-container space-y-12 py-8 md:py-12">
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-bold text-white">Contact Us</h1>
        <p className="mt-2 text-slate-400">
          Enquiries flow to the admin Kanban board (WhatsApp &amp; Email channels)
        </p>
        <GlassCard className="mt-8">
          <p className="text-sm text-slate-400">Email</p>
          <p className="text-cyan-400">{siteConfig.contact.email}</p>
          <p className="mt-4 text-sm text-slate-400">Phone</p>
          <p className="text-white">{siteConfig.contact.phoneOffice}</p>
          <p className="text-white">{siteConfig.contact.phoneMobile}</p>
          <p className="mt-4 text-sm text-slate-500">{siteConfig.contact.address}</p>
        </GlassCard>
      </div>

      <GlassCard>
        {submitted ? (
          <div className="py-8 text-center">
            <p className="font-display text-xl text-emerald-400">Thank you!</p>
            <p className="mt-2 text-slate-400">
              Your enquiry was submitted (demo). View it in{" "}
              <a href="/portal/admin/enquiries" className="text-cyan-400 underline">
                Enquiry Kanban
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className={inputClass} placeholder="Full name" required />
            <input className={inputClass} type="email" placeholder="Email" required />
            <input className={inputClass} placeholder="Phone" />
            <textarea
              className={`${inputClass} min-h-[120px]`}
              placeholder="Your message"
              required
            />
            <div>
              <p className="mb-2 text-sm text-slate-400">Preferred channel</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setChannel("whatsapp")}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm ${
                    channel === "whatsapp"
                      ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300"
                      : "border-white/10 text-slate-400"
                  }`}
                >
                  <MessageCircle size={16} /> WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setChannel("email")}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm ${
                    channel === "email"
                      ? "border-blue-400/50 bg-blue-500/10 text-blue-300"
                      : "border-white/10 text-slate-400"
                  }`}
                >
                  <Mail size={16} /> Email
                </button>
              </div>
            </div>
            <GlowButton type="submit" className="w-full">
              Send Enquiry
            </GlowButton>
          </form>
        )}
      </GlassCard>
    </div>
    <FaqSection />
    </div>
  );
}

