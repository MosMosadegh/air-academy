"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Award, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { locale, t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-sky-900/70" />

        {/* Animated Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl animate-pulse-slow delay-2000" />
      </div>

      {/* Floating Paraglider Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Plane className="absolute top-[20%] left-[10%] w-8 h-8 text-white/10 animate-float transform -rotate-45" />
        <Plane className="absolute top-[30%] right-[15%] w-12 h-12 text-white/10 animate-float-delayed transform -rotate-45" />
        <Plane className="absolute bottom-[30%] left-[20%] w-6 h-6 text-white/10 animate-float transform -rotate-45" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-white/90">
              {locale === "fa" ? "مورد تایید APPI بین‌المللی" : "APPI Internationally Certified"}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">{t.hero.title}</span>
            <span className="block mt-2 bg-gradient-to-r from-sky-400 via-orange-400 to-gold-400 bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/courses">
              <Button size="xl" className="group">
                {t.hero.cta}
                <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Button>
            </Link>
            <Link href="/tandem">
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5" />
                {t.hero.tandemCta}
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                  10+
                </span>
              </div>
              <div className="text-sm text-white/60">{t.about.experience}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  500+
                </span>
              </div>
              <div className="text-sm text-white/60">{t.about.students}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  5000+
                </span>
              </div>
              <div className="text-sm text-white/60">{t.about.flights}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
