"use client";

import { faqItems } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FaqSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
        <CardDescription>Consolidated from courses.eictiitg.com/faq.html</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
