"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { localeNames, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const { locale, setLocale, t, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/courses", label: t.nav.courses },
    { href: "/tandem", label: t.nav.tandem },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/blog", label: t.nav.blog },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl shadow-lg shadow-sky-500/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:shadow-xl group-hover:shadow-sky-500/40 transition-all duration-300 group-hover:scale-105">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-bold bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 bg-clip-text text-transparent",
                isScrolled ? "" : "text-white [background:none] [-webkit-text-fill-color:white]"
              )}>
                {locale === "fa" ? "آکادمی هوا" : "Air Academy"}
              </span>
              <span className={cn(
                "text-xs",
                isScrolled ? "text-muted-foreground" : "text-white/70"
              )}>
                {locale === "fa" ? "باشگاه پرواز پاراگلایدر" : "Paragliding Club"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
                  isScrolled
                    ? "text-foreground/80 hover:text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-950"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "gap-2",
                    isScrolled
                      ? "text-foreground hover:text-sky-600"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{localeNames[locale]}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={dir === "rtl" ? "start" : "end"}>
                <DropdownMenuItem onClick={() => setLocale("fa")}>
                  <span className={locale === "fa" ? "font-bold text-sky-600" : ""}>
                    فارسی
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocale("en")}>
                  <span className={locale === "en" ? "font-bold text-sky-600" : ""}>
                    English
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Book Now Button */}
            <Link href="/booking" className="hidden sm:block">
              <Button variant={isScrolled ? "default" : "glass"} size="sm">
                {t.nav.booking}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={dir === "rtl" ? "right" : "left"} className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center gap-3 pb-6 border-b">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                      <Plane className="w-5 h-5 text-white transform -rotate-45" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-sky-600">
                        {locale === "fa" ? "آکادمی هوا" : "Air Academy"}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-3 rounded-xl text-foreground/80 hover:text-sky-600 hover:bg-sky-50 transition-all font-medium"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Book Button */}
                  <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full" size="lg">
                      {t.nav.booking}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
