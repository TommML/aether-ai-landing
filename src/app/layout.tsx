import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Aether AI — Wdrożenia AI dla biznesu",
    template: "%s | Aether AI",
  },
  description:
    "Aether AI pomaga firmom wdrażać modele językowe, automatyzować procesy i budować rozwiązania AI dopasowane do realnych potrzeb biznesowych.",
  keywords: [
    "AI",
    "wdrożenia LLM",
    "automatyzacja",
    "sztuczna inteligencja",
    "doradztwo AI",
    "Polska",
  ],
  authors: [{ name: "Aether AI" }],
  openGraph: {
    title: "Aether AI — Wdrożenia AI dla biznesu",
    description:
      "Profesjonalne wdrożenia LLM, automatyzacja procesów i doradztwo AI dla firm.",
    locale: "pl_PL",
    type: "website",
    siteName: "Aether AI",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("aether-theme");
    var dark =
      stored === "dark" ||
      (stored !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main" className="skip-link">
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
