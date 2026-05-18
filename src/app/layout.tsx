import type { Metadata } from "next";
import { Source_Sans_3, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { withBasePath } from "@/lib/asset-path";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "E&ICT Academy | IIT Guwahati",
  description:
    "Electronics and ICT Academy, IIT Guwahati - Training, research, and innovation for North-East India.",
  icons: {
    icon: withBasePath("/images/logo.png"),
    apple: withBasePath("/images/logo.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("eict-theme");if(t==="light"||t==="dark"){document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(t);}else if(window.matchMedia("(prefers-color-scheme: light)").matches){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="eict-bg min-h-screen text-base">
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
