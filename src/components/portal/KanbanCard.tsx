"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Mail, MessageCircle } from "lucide-react";
import type { Enquiry } from "@/data/enquiries";
import { cn } from "@/lib/utils";

export function KanbanCard({
  enquiry,
  isDragging,
}: {
  enquiry: Enquiry;
  isDragging?: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: enquiry.id,
  });

  const style = transform
    ? { transform: CSS.Translate.toString(transform) }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        "cursor-grab rounded-lg border border-theme-border bg-theme-card p-4 active:cursor-grabbing",
        isDragging && "opacity-90 shadow-lg ring-2 ring-cyan-400/30"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-medium text-foreground">{enquiry.name}</p>
        <div className="flex gap-1">
          {(enquiry.channel === "whatsapp" || enquiry.channel === "both") && (
            <MessageCircle
              size={14}
              className="text-emerald-500 channel-glow-whatsapp"
              aria-label="WhatsApp"
            />
          )}
          {(enquiry.channel === "email" || enquiry.channel === "both") && (
            <Mail
              size={14}
              className="text-blue-500 channel-glow-email"
              aria-label="Email"
            />
          )}
        </div>
      </div>
      <p className="mt-1 text-xs text-cyan-600 dark:text-cyan-400/80">{enquiry.course}</p>
      <p className="mt-2 text-xs text-muted">{enquiry.date}</p>
      {enquiry.note && (
        <p className="mt-2 line-clamp-2 text-xs text-muted">{enquiry.note}</p>
      )}
    </div>
  );
}
