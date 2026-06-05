"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Award, Users, Plane, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { locale, t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const highlights = [
    {
      icon: Award,
      stat: "APPI",
      label: locale === "fa" ? "عضو رسمی فدراسیون" : "Official Federation Member",
      color: "from-sky-400 to-sky-600",
    },
    {
      icon: Users,
      stat: "500+",
      label: locale === "fa" ? "هنرجوی فارغ‌التحصیل" : "Graduated Students",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Plane,
      stat: "10+",
      label: locale === "fa" ? "سال تجربه پرواز" : "Years Experience",
      color: "from-gold-400 to-gold-600",
    },
    {
      icon: Shield,
      stat: "100%",
      label: locale === "fa" ? "ایمنی در پروازها" : "Flight Safety",
      color: "from-emerald-400 to-emerald-600",
    },
  ];

  const features = locale === "fa"
    ? [
        "مربیان دارای مدرک بین‌المللی APPI",
        "تجهیزات استاندارد و به‌روز",
        "سایت‌های پروازی متعدد در سراسر ایران",
        "گواهینامه معتبر بین‌المللی",
        "پشتیبانی و مشاوره رایگان",
        "بیمه کامل هنرجویان",
      ]
    : [
        "APPI certified international instructors",
        "Standard and up-to-date equipment",
        "Multiple flying sites across Iran",
        "Valid international certification",
        "Free support and consultation",
        "Full student insurance",
      ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop"
                alt="Paragliding Training"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 lg:right-auto lg:-left-8 bg-white dark:bg-navy-900 rounded-2xl shadow-xl p-6 max-w-xs border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">{t.about.appiCertified}</div>
                  <div className="text-sm text-muted-foreground">
                    {locale === "fa" ? "از سال ۱۳۹۲" : "Since 2013"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-gold-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 mb-6">
              <Award className="w-4 h-4 text-sky-500" />
              <span className="text-sm text-sky-600 dark:text-sky-400 font-medium">
                {t.about.certified}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {locale === "fa"
                ? "آکادمی هوا با بیش از یک دهه تجربه در زمینه آموزش پاراگلایدر، یکی از معتبرترین مراکز آموزشی در ایران است. ما با رعایت استانداردهای بین‌المللی APPI، به شما کمک می‌کنیم تا مهارت‌های پروازی خود را به سطح حرفه‌ای برسانید."
                : "Air Academy, with over a decade of experience in paragliding training, is one of the most reputable training centers in Iran. Following APPI international standards, we help you elevate your flying skills to a professional level."}
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button size="lg" className="group">
                {t.common.readMore}
                <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white dark:bg-navy-900 shadow-lg border hover:shadow-xl transition-shadow"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-4",
                item.color
              )}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {item.stat}
              </div>
              <div className="text-sm text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
