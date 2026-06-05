"use client";

import Link from "next/link";
import { Plane, Instagram, Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function Footer() {
  const { locale, t } = useLanguage();

  const quickLinks = [
    { href: "/courses", label: t.nav.courses },
    { href: "/tandem", label: t.nav.tandem },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/blog", label: t.nav.blog },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const courses = [
    { href: "/courses/para-pro-1", label: locale === "fa" ? "پاراپرو ۱" : "Para Pro 1" },
    { href: "/courses/para-pro-2", label: locale === "fa" ? "پاراپرو ۲" : "Para Pro 2" },
    { href: "/courses/para-pro-3", label: locale === "fa" ? "پاراپرو ۳" : "Para Pro 3" },
    { href: "/courses/para-pro-4", label: locale === "fa" ? "پاراپرو ۴" : "Para Pro 4" },
    { href: "/courses/para-pro-5", label: locale === "fa" ? "پاراپرو ۵" : "Para Pro 5" },
    { href: "/courses/tandem", label: locale === "fa" ? "پایلوت تندم" : "Tandem Pilot" },
  ];

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sky-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange-500 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  {locale === "fa" ? "آکادمی هوا" : "Air Academy"}
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {locale === "fa"
                ? "باشگاه پروازی پاراگلایدر با استانداردهای بین‌المللی APPI. ما به شما کمک می‌کنیم تا رویای پرواز را به واقعیت تبدیل کنید."
                : "APPI certified paragliding club with international standards. We help you turn your dream of flight into reality."}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-sky-400 hover:to-sky-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t.nav.courses}
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.href}>
                  <Link
                    href={course.href}
                    className="text-white/60 hover:text-orange-400 transition-colors text-sm"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t.contact.title}
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-sky-400" />
                <span dir="ltr">+98 912 345 6789</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>info@airacademy.ir</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5" />
                <span>
                  {locale === "fa"
                    ? "ایران، تهران، میدان آزادی"
                    : "Tehran, Iran"}
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <h5 className="text-sm font-semibold mb-3 text-white">
              {t.footer.newsletter}
            </h5>
            <p className="text-white/50 text-xs mb-3">
              {t.footer.subscribeText}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t.contact.email}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm"
              />
              <Button variant="secondary" size="sm">
                {t.footer.subscribe}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2024 Air Academy. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/50 text-sm">
              {locale === "fa" ? "عضو رسمی" : "Official Member"}
            </span>
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-500/20 to-orange-500/20 border border-sky-500/30">
              <span className="text-xs font-semibold text-sky-400">APPI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
