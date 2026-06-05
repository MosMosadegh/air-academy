"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTASection() {
  const { locale, t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-orange-500" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {locale === "fa"
              ? "آماده‌اید پرواز کنید؟"
              : "Ready to Fly?"}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {locale === "fa"
              ? "همین امروز با ما تماس بگیرید و اولین قدم را به سمت آسمان بردارید. مشاوره رایگان و ثبت‌نام آنلاین در انتظار شماست."
              : "Contact us today and take your first step towards the sky. Free consultation and online registration await you."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/booking">
              <Button
                size="xl"
                className="bg-white text-sky-600 hover:bg-white/90 shadow-xl shadow-black/20 group"
              >
                {t.nav.booking}
                <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="glass" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                {t.nav.contact}
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <a
              href="tel:+989123456789"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr" className="font-medium">+98 912 345 6789</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <a
              href="https://t.me/airacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">@airacademy</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
