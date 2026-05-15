import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

type LogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  showSubtitle?: boolean;
  subtitle?: string;
};

export function Logo({
  href = "/",
  className,
  imageClassName,
  showSubtitle = false,
  subtitle = "IIT Guwahati",
}: LogoProps) {
  const inner = (
    <>
      <Image
        src={images.logo}
        alt="E&ICT Academy IIT Guwahati"
        width={140}
        height={40}
        className={cn("h-9 w-auto object-contain dark:brightness-110", imageClassName)}
        priority
      />
      {showSubtitle && (
        <span className="hidden text-xs font-normal text-cyan-600 dark:text-cyan-400/80 sm:inline">
          {subtitle}
        </span>
      )}
    </>
  );

  const wrapClass = cn("flex items-center gap-2", className);

  if (href) {
    return (
      <Link href={href} className={wrapClass}>
        {inner}
      </Link>
    );
  }

  return <div className={wrapClass}>{inner}</div>;
}
