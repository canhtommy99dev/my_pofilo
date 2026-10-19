"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Moon,
  Sun,
  Menu,
  Globe,
  Sparkles,
  ArrowUpRight,
  Code2,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills || "Skills", href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3">
        <nav className="relative flex h-14 items-center justify-between rounded-full border border-border/60 bg-background/75 px-4 md:px-6 backdrop-blur-xl shadow-sm transition-colors dark:bg-background/60 dark:border-border/40">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform active:scale-95"
          >
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-tight text-foreground flex items-center gap-1.5">
                Cảnh DEV
                <Badge variant="outline" className="hidden sm:inline-flex text-[10px] px-1.5 py-0 h-4 font-mono font-normal text-muted-foreground border-border/80">
                  v2.0
                </Badge>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full transition-colors hover:text-foreground hover:bg-accent/60"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/60"
                >
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36 rounded-xl p-1.5 shadow-lg border-border/70 backdrop-blur-lg">
                <DropdownMenuItem
                  onClick={() => toggleLanguage("en")}
                  className="flex items-center justify-between text-xs cursor-pointer rounded-lg px-2.5 py-1.5"
                >
                  <span>English</span>
                  {language === "en" && <Check className="h-3.5 w-3.5 text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => toggleLanguage("vi")}
                  className="flex items-center justify-between text-xs cursor-pointer rounded-lg px-2.5 py-1.5"
                >
                  <span>Tiếng Việt</span>
                  {language === "vi" && <Check className="h-3.5 w-3.5 text-primary" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/60"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32 rounded-xl p-1.5 shadow-lg border-border/70 backdrop-blur-lg">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="flex items-center justify-between text-xs cursor-pointer rounded-lg px-2.5 py-1.5"
                >
                  <span>Light</span>
                  {theme === "light" && <Check className="h-3.5 w-3.5 text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="flex items-center justify-between text-xs cursor-pointer rounded-lg px-2.5 py-1.5"
                >
                  <span>Dark</span>
                  {theme === "dark" && <Check className="h-3.5 w-3.5 text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="flex items-center justify-between text-xs cursor-pointer rounded-lg px-2.5 py-1.5"
                >
                  <span>System</span>
                  {theme === "system" && <Check className="h-3.5 w-3.5 text-primary" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quick Contact CTA */}
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex h-8 rounded-full px-3.5 text-xs font-medium gap-1.5 shadow-sm transition-all hover:shadow-primary/20"
            >
              <a href="#contact">
                <span>{t.contact?.buttons?.getInTouch || "Contact"}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
              </a>
            </Button>

            {/* Mobile Sheet Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full md:hidden text-muted-foreground hover:text-foreground"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80 backdrop-blur-2xl p-6">
                <SheetHeader className="text-left pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarImage src="/IMG_2259.jpeg" alt="CanhDEV" className="object-cover" />
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <div>
                      <SheetTitle className="text-base font-semibold">Cảnh DEV</SheetTitle>
                      <p className="text-xs text-muted-foreground">Senior Fullstack Engineer</p>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex flex-col space-y-1.5 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/60 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full rounded-xl gap-2 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      <a href="#contact">
                        <Sparkles className="h-4 w-4" />
                        {t.contact?.buttons?.getInTouch || "Contact Me"}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
