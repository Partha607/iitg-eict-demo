"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-12">
      <h2 className="font-display text-2xl font-bold text-white">Frequently Asked Questions</h2>
      <p className="mt-1 text-sm text-slate-500">
        Consolidated from courses.eictiitg.com/faq.html
      </p>
      <div className="mt-6 space-y-2">
        {faqItems.map((item, i) => (
          <div
            key={item.question}
            className="rounded-lg border border-white/5 bg-white/[0.02]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-sm font-medium text-white">{item.question}</span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-slate-500 transition-transform",
                  open === i && "rotate-180"
                )}
              />
            </button>
            {open === i && (
              <p className="border-t border-white/5 px-4 pb-3 text-sm text-slate-400">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
