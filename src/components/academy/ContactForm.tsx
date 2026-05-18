"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { FaqSection } from "@/components/academy/FaqSection";
import { ContactMap } from "@/components/academy/ContactMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [channel, setChannel] = useState<"whatsapp" | "email">("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="academy-container space-y-12 py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-on-watermark font-display text-4xl font-bold text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="text-on-watermark mt-2 text-base text-foreground/85 sm:text-lg">
            Enquiries flow to the admin Kanban board (WhatsApp &amp; Email channels)
          </p>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Reach the academy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base sm:text-lg">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{siteConfig.contact.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">{siteConfig.contact.phoneOffice}</p>
                <p className="font-medium text-foreground">{siteConfig.contact.phoneMobile}</p>
              </div>
              <p className="text-muted-foreground">{siteConfig.contact.address}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send an enquiry</CardTitle>
            <CardDescription>We typically respond within 2–3 business days.</CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-display text-xl font-semibold text-primary">Thank you!</p>
                <p className="mt-2 text-muted-foreground">
                  Your enquiry was submitted (demo). View it in{" "}
                  <a
                    href="/portal/admin/enquiries"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Enquiry Kanban
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full name</Label>
                  <Input id="contact-name" placeholder="Full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="Email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input id="contact-phone" placeholder="Phone" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" placeholder="Your message" required />
                </div>
                <div className="space-y-2">
                  <Label>Preferred channel</Label>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant={channel === "whatsapp" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChannel("whatsapp")}
                      className={cn(
                        channel === "whatsapp" &&
                          "bg-emerald-700 text-white hover:bg-emerald-700/90 dark:bg-emerald-600"
                      )}
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant={channel === "email" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChannel("email")}
                    >
                      <Mail className="h-4 w-4" /> Email
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Send Enquiry
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      <ContactMap />
      <FaqSection />
    </div>
  );
}
