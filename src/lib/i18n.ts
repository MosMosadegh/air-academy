export type Locale = "fa" | "en";

export const defaultLocale: Locale = "fa";

export const locales: Locale[] = ["fa", "en"];

export const localeNames: Record<Locale, string> = {
  fa: "فارسی",
  en: "English",
};

export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  fa: "rtl",
  en: "ltr",
};

// Translation dictionary
export const translations = {
  fa: {
    // Navigation
    nav: {
      home: "صفحه اصلی",
      courses: "دوره‌های آموزشی",
      tandem: "پرواز تفریحی",
      gallery: "گالری",
      blog: "بلاگ",
      about: "درباره ما",
      contact: "تماس با ما",
      booking: "رزرو آنلاین",
      admin: "پنل مدیریت",
    },
    // Hero Section
    hero: {
      title: "آکادمی پرواز",
      subtitle: "پرواز را با ما تجربه کنید",
      description:
        "باشگاه پروازی پاراگلایدر مطابق استانداردهای بین‌المللی APPI",
      cta: "شروع یادگیری",
      tandemCta: "رزرو پرواز تفریحی",
    },
    // Courses
    courses: {
      title: "دوره‌های آموزشی",
      subtitle: "سطح‌بندی بین‌المللی APPI",
      paraPro1: {
        title: "پاراپرو ۱",
        subtitle: "مبتدی",
        description: "آشنایی با تجهیزات، تکنیک‌های پایه و اولین پروازها",
      },
      paraPro2: {
        title: "پاراپرو ۲",
        subtitle: "نوآموز",
        description: "پرواز مستقل در شرایط آرام و کنترل پایه",
      },
      paraPro3: {
        title: "پاراپرو ۳",
        subtitle: "متوسط",
        description: "پرواز در شرایط مختلف هوایی و ترمیک",
      },
      paraPro4: {
        title: "پاراپرو ۴",
        subtitle: "پیشرفته",
        description: "پرواز کراس کانتری و مانورهای پیشرفته",
      },
      paraPro5: {
        title: "پاراپرو ۵",
        subtitle: "حرفه‌ای",
        description: "تسلط کامل بر پرواز و آمادگی برای مسابقات",
      },
      tandem: {
        title: "پایلوت تندم",
        subtitle: "مربی پرواز دونفره",
        description: "آموزش پرواز با مسافر و گواهینامه تندم APPI",
      },
    },

    features: {
      title: "چرا آموزش در آکادمی ما؟",
      description:
        "ما تمام امکانات لازم برای یک آموزش ایمن، استاندارد و حرفه‌ای را در اختیار شما قرار می‌دهیم.",
      items: [
        {
          title: "آموزش استاندارد",
          desc: "آموزش بر اساس استانداردهای بین‌المللی و ایمنی",
          icon: "shield",
        },
        {
          title: "مربیان مجرب",
          desc: "حضور مربیان با تجربه و دارای گواهینامه‌های معتبر",
          icon: "users",
        },
        {
          titlete: "تجهیزات مدرن",
          desc: "استفاده از جدیدترین تجهیزات پروازی و ایمنی",
          icon: "settings",
        },
      ],
    },
    // About
    about: {
      title: "درباره آکادمی",
      mission: "ماموریت ما",
      missionText:
        "ارائه آموزش حرفه‌ای پاراگلایدر با بالاترین استانداردهای ایمنی",
      certified: "دارای مجوز رسمی",
      appiCertified: "آکادمی مورد تایید APPI",
      experience: "سال تجربه",
      students: "هنرجوی فارغ‌التحصیل",
      flights: "پرواز موفق",
    },
    // Contact
    contact: {
      title: "تماس با ما",
      name: "نام و نام خانوادگی",
      email: "ایمیل",
      phone: "شماره تماس",
      message: "پیام شما",
      send: "ارسال پیام",
      address: "آدرس",
      followUs: "ما را دنبال کنید",
    },
    // Booking
    booking: {
      title: "رزرو آنلاین",
      selectCourse: "انتخاب دوره",
      selectDate: "انتخاب تاریخ",
      personalInfo: "اطلاعات شخصی",
      submit: "ثبت رزرو",
      tandemTitle: "رزرو پرواز تفریحی",
      courseTitle: "رزرو دوره آموزشی",
    },
    // Footer
    footer: {
      rights: "تمامی حقوق محفوظ است",
      quickLinks: "دسترسی سریع",
      socialMedia: "شبکه‌های اجتماعی",
      newsletter: "خبرنامه",
      subscribeText: "برای دریافت آخرین اخبار و تخفیف‌ها عضو شوید",
      subscribe: "عضویت",
    },
    // Common
    common: {
      readMore: "بیشتر بخوانید",
      viewAll: "مشاهده همه",
      loading: "در حال بارگذاری...",
      error: "خطایی رخ داد",
      success: "عملیات موفق",
      close: "بستن",
      save: "ذخیره",
      cancel: "انصراف",
      delete: "حذف",
      edit: "ویرایش",
      search: "جستجو",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      courses: "Courses",
      tandem: "Tandem Flights",
      gallery: "Gallery",
      blog: "Blog",
      about: "About Us",
      contact: "Contact",
      booking: "Book Now",
      admin: "Admin Panel",
    },
    // Hero Section
    hero: {
      title: "Air Academy",
      subtitle: "Experience Flight With Us",
      description:
        "APPI Certified Paragliding School with International Standards",
      cta: "Start Learning",
      tandemCta: "Book Tandem Flight",
    },
    // Courses
    courses: {
      title: "Training Courses",
      subtitle: "APPI International Certification",
      paraPro1: {
        title: "Para Pro 1",
        subtitle: "Beginner",
        description:
          "Equipment introduction, basic techniques, and first flights",
      },
      paraPro2: {
        title: "Para Pro 2",
        subtitle: "Novice",
        description: "Independent flying in calm conditions and basic control",
      },
      paraPro3: {
        title: "Para Pro 3",
        subtitle: "Intermediate",
        description: "Flying in various weather conditions and thermals",
      },
      paraPro4: {
        title: "Para Pro 4",
        subtitle: "Advanced",
        description: "Cross-country flying and advanced maneuvers",
      },
      paraPro5: {
        title: "Para Pro 5",
        subtitle: "Professional",
        description: "Complete mastery of flight and competition readiness",
      },
      tandem: {
        title: "Tandem Pilot",
        subtitle: "Dual Seat Instructor",
        description:
          "Training for passenger flights and APPI Tandem certification",
      },
    },
    // About
    about: {
      title: "About Academy",
      mission: "Our Mission",
      missionText:
        "Providing professional paragliding training with the highest safety standards",
      certified: "Officially Licensed",
      appiCertified: "APPI Certified Academy",
      experience: "Years Experience",
      students: "Graduated Students",
      flights: "Successful Flights",
    },
    // Contact
    contact: {
      title: "Contact Us",
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      message: "Your Message",
      send: "Send Message",
      address: "Address",
      followUs: "Follow Us",
    },
    // Booking
    booking: {
      title: "Online Booking",
      selectCourse: "Select Course",
      selectDate: "Select Date",
      personalInfo: "Personal Information",
      submit: "Submit Booking",
      tandemTitle: "Book Tandem Flight",
      courseTitle: "Book Training Course",
    },
    // Footer
    footer: {
      rights: "All Rights Reserved",
      quickLinks: "Quick Links",
      socialMedia: "Social Media",
      newsletter: "Newsletter",
      subscribeText: "Subscribe for latest news and offers",
      subscribe: "Subscribe",
    },
    // Common
    common: {
      readMore: "Read More",
      viewAll: "View All",
      loading: "Loading...",
      error: "An error occurred",
      success: "Operation successful",
      close: "Close",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      search: "Search",
    },
  },
};

export type TranslationKey = keyof typeof translations.fa;

export function getTranslation(locale: Locale) {
  return translations[locale];
}
