import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

type LogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
};

/** Main site logo — defaults to a large, legible size sitewide */
export function Logo({ href = "/", className, imageClassName }: LogoProps) {
  const inner = (
    <Image
      src={images.logo}
      alt="Electronics & ICT Academy"
      width={360}
      height={96}
      className={cn(
        "h-14 w-auto max-w-[min(100%,20rem)] object-contain object-left sm:h-16 md:h-[4.5rem] lg:h-20 dark:brightness-110",
        imageClassName
      )}
      priority
    />
  );

  const wrapClass = cn("inline-flex items-center", className);

  if (href) {
    return (
      <Link href={href} className={wrapClass}>
        {inner}
      </Link>
    );
  }

  return <div className={wrapClass}>{inner}</div>;
}
