import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import {
  academyLocation,
  academyMapDirectionsUrl,
  academyMapEmbedSrc,
} from "@/data/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactMap() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MapPin className="h-5 w-5 text-accent" aria-hidden />
          Find us on campus
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {academyLocation.plusCode}, {academyLocation.address}
        </p>
      </CardHeader>
      <CardContent className="space-y-4 p-0 pt-0 sm:px-6 sm:pb-6">
        <div className="overflow-hidden border-y border-theme-border sm:rounded-lg sm:border">
          <iframe
            title="E&ICT Academy IIT Guwahati location"
            src={academyMapEmbedSrc}
            className="h-[320px] w-full border-0 sm:h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="flex justify-center px-4 pb-4 sm:px-0 sm:pb-0">
          <Button variant="outline" asChild>
            <Link href={academyMapDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
