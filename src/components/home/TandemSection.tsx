"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Camera, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function TandemSection() {
  const { locale, t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const features = [
    {
      icon: Shield,
      title: locale === "fa" ? "ایمنی کامل" : "Complete Safety",
      description: locale === "fa"
        ? "تجهیزات استاندارد و پایلوت‌های مجرب"
        : "Standard equipment and experienced pilots",
    },
    {
      icon: Camera,
      title: locale === "fa" ? "فیلمبرداری حرفه‌ای" : "Professional Recording",
      description: locale === "fa"
        ? "ثبت لحظات پرواز با دوربین GoPro"
        : "Capture flight moments with GoPro camera",
    },
    {
      icon: Clock,
      title: locale === "fa" ? "پرواز ۱۵-۳۰ دقیقه" : "15-30 Min Flight",
      description: locale === "fa"
        ? "بسته به شرایط جوی و انتخاب شما"
        : "Depending on weather and your choice",
    },
    {
      icon: Star,
      title: locale === "fa" ? "تجربه فراموش‌نشدنی" : "Unforgettable Experience",
      description: locale === "fa"
        ? "لذت پرواز در آسمان زیبای ایران"
        : "Enjoy flying in Iran's beautiful sky",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-sm text-orange-300">
                {locale === "fa" ? "رزرو آنلاین فعال است" : "Online Booking Available"}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="block text-white">
                {locale === "fa" ? "پرواز تفریحی" : "Tandem Flight"}
              </span>
              <span className="block mt-2 bg-gradient-to-r from-orange-400 to-gold-400 bg-clip-text text-transparent">
                {locale === "fa" ? "بدون نیاز به آموزش" : "No Training Required"}
              </span>
            </h2>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {locale === "fa"
                ? "با پایلوت‌های مجرب ما پرواز کنید و لذت پرواز آزاد را تجربه کنید. این پرواز نیازی به تجربه قبلی ندارد و مناسب همه سنین است."
                : "Fly with our experienced pilots and enjoy the thrill of free flight. This flight requires no prior experience and is suitable for all ages."}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/50 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link href="/tandem">
                <Button variant="secondary" size="lg" className="group">
                  {t.booking.tandemTitle}
                  <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="glass" size="lg">
                  {t.nav.gallery}
                </Button>
              </Link>
            </div>
          </div>

          {/* Price Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-500/20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-sky-500/20 blur-2xl" />

              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-sm">
                <div className="text-center mb-6">
                  <span className="text-white/60 text-sm">
                    {locale === "fa" ? "شروع قیمت از" : "Starting from"}
                  </span>
                  <div className="text-5xl font-bold text-white mt-2">
                    <span className="bg-gradient-to-r from-orange-400 to-gold-400 bg-clip-text text-transparent">
                      {locale === "fa" ? "۲,۵۰۰,۰۰۰" : "2,500,000"}
                    </span>
                  </div>
                  <span className="text-white/60 text-sm">
                    {locale === "fa" ? "تومان" : "Toman"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    locale === "fa" ? "پرواز ۱۵ دقیقه‌ای" : "15-minute flight",
                    locale === "fa" ? "فیلم و عکس رایگان" : "Free video & photos",
                    locale === "fa" ? "بیمه کامل پرواز" : "Full flight insurance",
                    locale === "fa" ? "گواهی پرواز" : "Flight certificate",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/booking?type=tandem" className="block">
                  <Button className="w-full" size="lg">
                    {t.booking.submit}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
