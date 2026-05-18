"use client";

import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  useDroppable,
} from "@dnd-kit/core";
import { enquiries, type Enquiry, type EnquiryColumn } from "@/data/enquiries";
import { GlassCard } from "@/components/ui/GlassCard";
import { KanbanCard } from "@/components/portal/KanbanCard";

const columns: { id: EnquiryColumn; title: string }[] = [
  { id: "new", title: "New Inquiry" },
  { id: "communication", title: "In Communication" },
  { id: "resolved", title: "Resolved" },
];

export function EnquiryKanban() {
  const [items, setItems] = useState(enquiries);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragStart = (e: DragStartEvent) => setActiveId(String(e.active.id));

  const handleDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = e;
    if (!over) return;
    const enquiryId = String(active.id);
    const colIds = columns.map((c) => c.id);
    let targetCol: EnquiryColumn | undefined;
    if (colIds.includes(over.id as EnquiryColumn)) {
      targetCol = over.id as EnquiryColumn;
    } else {
      targetCol = items.find((i) => i.id === over.id)?.column;
    }
    if (targetCol) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === enquiryId ? { ...item, column: targetCol! } : item
        )
      );
    }
  };

  const activeItem = items.find((i) => i.id === activeId);

  return (
    <div className="p-4 md:p-8">
      <header className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          Enquiry Management
        </h1>
        <p className="text-foreground/80 dark:text-slate-400">
          Omnichannel pipeline - WhatsApp &amp; Email indicators (demo)
        </p>
      </header>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {columns.map((col) => (
            <DroppableColumn
              key={col.id}
              id={col.id}
              title={col.title}
              items={items.filter((i) => i.column === col.id)}
            />
          ))}
        </div>
        <DragOverlay>
          {activeItem ? <KanbanCard enquiry={activeItem} isDragging /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

function DroppableColumn({
  id,
  title,
  items,
}: {
  id: EnquiryColumn;
  title: string;
  items: Enquiry[];
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <GlassCard
      className={`min-h-[320px] transition-colors ${isOver ? "ring-1 ring-cyan-400/40" : ""}`}
    >
      <div ref={setNodeRef}>
        <h2 className="mb-4 font-display text-sm font-semibold text-slate-400">
          {title}
          <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">
            {items.length}
          </span>
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <KanbanCard key={item.id} enquiry={item} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
