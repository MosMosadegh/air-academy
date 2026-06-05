"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, Clock, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

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

export function CoursesSection() {
  const { locale, t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const getCourseTranslation = (id: string) => {
    switch (id) {
      case "para-pro-1": return t.courses.paraPro1;
      case "para-pro-2": return t.courses.paraPro2;
      case "para-pro-3": return t.courses.paraPro3;
      case "para-pro-4": return t.courses.paraPro4;
      case "para-pro-5": return t.courses.paraPro5;
      case "tandem": return t.courses.tandem;
      default: return { title: "", subtitle: "", description: "" };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-sky-500/50 text-sky-600">
            <GraduationCap className="w-4 h-4 mr-2" />
            {t.courses.subtitle}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 bg-clip-text text-transparent">
              {t.courses.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {locale === "fa"
              ? "با دوره‌های استاندارد APPI، از مبتدی تا حرفه‌ای پیش بروید و گواهینامه بین‌المللی دریافت کنید"
              : "Progress from beginner to professional with APPI standard courses and receive international certification"}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courseData.map((course) => {
            const courseT = getCourseTranslation(course.id);
            return (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className={cn(
                  "group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full",
                  "hover:-translate-y-2"
                )}>
                  {/* Top Gradient Bar */}
                  <div className={cn("h-2 bg-gradient-to-r", course.color)} />

                  <CardContent className="p-6">
                    {/* Level Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                        course.color,
                        course.shadowColor
                      )}>
                        <span className="text-2xl font-bold text-white">
                          {course.level}
                        </span>
                      </div>
                      <Badge variant="secondary" className="bg-muted">
                        {courseT.subtitle}
                      </Badge>
                    </div>

                    {/* Course Info */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-sky-600 transition-colors">
                      {courseT.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {courseT.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-sky-500" />
                        <span>{course.duration[locale]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span>{course.flights[locale]}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sky-600 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>{t.common.readMore}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/courses">
            <Button variant="outline" size="lg" className="group">
              {t.common.viewAll}
              <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
