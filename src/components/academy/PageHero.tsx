import Image from "next/image";

type PageHeroProps = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  minHeight?: string;
  /** Apply sketch invert filter in dark mode (pencil line art) */
  sketch?: boolean;
};

export function PageHero({
  src,
  alt,
  title,
  subtitle,
  minHeight = "min-h-[220px] sm:min-h-[280px] md:min-h-[340px]",
  sketch = false,
}: PageHeroProps) {
  return (
    <section className={`academy-bleed relative mb-10 overflow-hidden ${minHeight}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={sketch ? "sketch-hero-image object-cover" : "object-cover"}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-8 text-center sm:px-6 sm:pb-12">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted sm:text-base">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
