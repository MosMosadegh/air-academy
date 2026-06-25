"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  Award,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } orbit="outline" from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

// همان داده‌های استفاده شده در بخش CoursesSection برای یکپارچگی
const courseData = [
  {
    id: "para-pro-1",
    level: 1,
    color: "from-emerald-400 to-emerald-600",
    shadowColor: "shadow-emerald-500/30",
    duration: { fa: "۳-۵ روز", en: "3-5 Days" },
    flights: { fa: "۱۰+ پرواز", en: "10+ Flights" },
  },
  {
    id: "para-pro-2",
    level: 2,
    color: "from-sky-400 to-sky-600",
    shadowColor: "shadow-sky-500/30",
    duration: { fa: "۵-۷ روز", en: "5-7 Days" },
    flights: { fa: "۲۰+ پرواز", en: "20+ Flights" },
  },
  {
    id: "para-pro-3",
    level: 3,
    color: "from-amber-400 to-amber-600",
    shadowColor: "shadow-amber-500/30",
    duration: { fa: "۷-۱۰ روز", en: "7-10 Days" },
    flights: { fa: "۳۰+ پرواز", en: "30+ Flights" },
  },
  {
    id: "para-pro-4",
    level: 4,
    color: "from-orange-400 to-orange-600",
    shadowColor: "shadow-orange-500/30",
    duration: { fa: "۱۰-۱۵ روز", en: "10-15 Days" },
    flights: { fa: "۵۰+ پرواز", en: "50+ Flights" },
  },
  {
    id: "para-pro-5",
    level: 5,
    color: "from-rose-400 to-rose-600",
    shadowColor: "shadow-rose-500/30",
    duration: { fa: "۱۵-۲۰ روز", en: "15-20 Days" },
    flights: { fa: "۱۰۰+ پرواز", en: "100+ Flights" },
  },
  {
    id: "tandem",
    level: "T",
    color: "from-violet-400 to-violet-600",
    shadowColor: "shadow-violet-500/30",
    duration: { fa: "۲۰+ روز", en: "20+ Days" },
    flights: { fa: "۲۰۰+ پرواز", en: "200+ Flights" },
  },
];

export default function CoursesPage() {
  const { locale, t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const getCourseTranslation = (id: string) => {
    switch (id) {
      case "para-pro-1":
        return t.courses.paraPro1;
      case "para_pro_2":
        return t.courses.paraPro2;
      case "para-pro-3":
        return t.courses.paraPro3;
      case "para-pro-4":
        return t.courses.paraPro4;
      case "para-pro-5":
        return t.courses.paraPro5;
      case "tandem":
        return t.courses.tandem;
      default:
        return { title: "", subtitle: "", description: "" };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section for Courses Page */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-navy-950/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* <Badge
              variant="outline"
              className="mb-4 px-4 py-1.5 border-sky-500/50 text-sky-600">
              {t.courses.subtitle}
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent">
              {t.courses.title}
              {/* Note: If you want a custom title for this page, replace with text */}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {locale === "fa"
                ? "ما در تمامی مراحل پرواز در کنار شما هستیم. از اولین قدم‌های آموزش تا دریافت گواهینامه بین‌المللی APPI، با استانداردهای جهانی و مربیان مجرب."
                : "We are with you in all stages of flight. From the first steps of training to receiving the international APPI certificate, with global standards and experienced instructors."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-ability-3 gap-8">
            {courseData.map(course => {
              const courseT = getCourseTranslation(course.id);
              return (
                <Card
                  key={course.id}
                  className="group border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <div
                    className={cn("h-2 w-full bg-gradient-to-r", course.color)}
                  />
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-xl shadow-lg",
                          course.color,
                          course.shadowColor
                        )}>
                        {course.level}
                      </div>
                      {/* <Badge variant="secondary">{courseT.subtitle}</Badge> */}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-600 transition-colors">
                      {courseT.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {courseT.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-sky-500" />
                        <span>{course.duration[locale]}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span>{course.flights[locale]}</span>
                      </div>
                    </div>

                    <Link href={`/courses/${course.id}`}>
                      <Button variant="outline" className="w-full group/btn">
                        {locale === "fa"
                          ? "مشاهده جزئیات دوره"
                          : "View Course Details"}
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1",
                            dir === "rtl" && "rotate-180"
                          )}
                        />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">چرا آموزش در آکادمی ما؟</h2>
            <p className="text-muted-foreground">
              ما تمام امکانات لازم برای یک آموزش ایمن، استاندارد و حرفه‌ای را در
              اختیار شما قرار می‌دهیم.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "آموزش استاندارد",
                desc: "مطابق با استانداردهای بین‌المللی و پروتکل‌های ایمنی جهانی.",
                icon: "🛡️",
              },
              {
                title: "مربیان مجرب",
                desc: "تیم متخصص با سال‌ها تجربه در زمینه پرواز و آموزش.",
                icon: "🎓",
              },
              {
                title: "تجهیزات مدرن",
                desc: "استفاده از جدیدترین تجهیزات ایمنی و پاراگلایدرهای استاندارد.",
                icon: "⚙️",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
