import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Cảnh DEV — Senior Full-Stack & Mobile Engineer",
  description:
    "Portfolio of Cảnh DEV (Do Canh Tommy) — 5+ years of experience crafting high-performance web applications, scalable backends, and intuitive mobile solutions with React, Next.js, Node.js, and Flutter.",
  keywords: [
    "Full-Stack Developer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Tailwind CSS",
    "TypeScript",
    "Canh DEV",
  ],
  authors: [{ name: "Cảnh DEV (Do Canh Tommy)" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground relative selection:bg-primary/15 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {/* Background Ambient Glow Accents */}
            <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-gradient-to-tr from-primary/10 via-purple-500/10 to-blue-500/10 blur-3xl opacity-60 dark:opacity-40" />
              <div className="absolute top-[60vh] -left-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
              <div className="absolute top-[120vh] -right-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
