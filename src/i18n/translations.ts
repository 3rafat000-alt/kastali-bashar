export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    whyUs: string;
    contact: string;
    langToggle: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaQuote: string;
    ctaServices: string;
    expertise: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    countries: string;
    countriesList: string[];
    specializations: string[];
    teamPhoto: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      installation: { title: string; desc: string };
      maintenance: { title: string; desc: string };
      calibration: { title: string; desc: string };
      consulting: { title: string; desc: string };
    };
  };
  projects: {
    title: string;
    subtitle: string;
    inquire: string;
    items: {
      pharmaLine: { name: string; desc: string };
      foodLine: { name: string; desc: string };
      packagingLine: { name: string; desc: string };
      fillingLine: { name: string; desc: string };
      cleaningLine: { name: string; desc: string };
    };
    categories: {
      pharmaceutical: string;
      food: string;
      industrial: string;
    };
  };
  whyUs: {
    title: string;
    subtitle: string;
    pillars: {
      experience: { title: string; desc: string };
      precision: { title: string; desc: string };
      reliability: { title: string; desc: string };
      support: { title: string; desc: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    location: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      send: string;
      success: string;
    };
  };
  footer: {
    quickLinks: string;
    services: string;
    contact: string;
    copyright: string;
    rights: string;
  };
  whatsapp: {
    tooltip: string;
  };
}

export const translations: Record<'en' | 'ar', Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      whyUs: 'Why Us',
      contact: 'Contact',
      langToggle: 'العربية',
    },
    hero: {
      title: 'Production Line Installation & Industrial Maintenance Expertise',
      subtitle: 'Specialist in Pharmaceutical, Food & Chemical Production Lines',
      ctaQuote: 'Get a Quote',
      ctaServices: 'Our Services',
      expertise: '20+ Years of Industrial Excellence | Former Delta Pharma',
    },
    about: {
      title: 'Who We Are',
      description:
        'Based in Aleppo, Syria, I am Bashar Kastali — a production line specialist with over 20 years of hands-on experience in installing, commissioning, calibrating, and maintaining industrial production lines. Having worked with leading manufacturers across Germany, Italy, China, and Taiwan, and formerly serving as Maintenance & Repair Manager at Delta Pharma, I bring deep technical knowledge of pharmaceutical, food, and chemical production systems. I combine global engineering standards with local expertise to deliver reliable, efficient industrial solutions.',
      experience: '20+ Years of Experience',
      countries: 'Global Training & Partnerships',
      countriesList: ['Germany', 'Italy', 'China', 'Taiwan'],
      specializations: [
        'Pharmaceutical Production Lines',
        'Food Processing Lines',
        'Chemical & Cleaning Product Lines',
        'Packaging & Filling Systems',
      ],
      teamPhoto: 'Production line installation expertise in action',
    },
    services: {
      title: 'Services',
      subtitle: 'End-to-end production line solutions from installation to optimization',
      items: {
        installation: {
          title: 'Installation & Commissioning',
          desc: 'Professional installation, setup, and commissioning of pharmaceutical, food, and chemical production lines. Full system integration and startup support.',
        },
        maintenance: {
          title: 'Maintenance & Repair',
          desc: 'Electrical and mechanical troubleshooting, repair, and preventive maintenance for all types of industrial production equipment. Minimizing downtime, maximizing output.',
        },
        calibration: {
          title: 'Calibration & Optimization',
          desc: 'Precision calibration of production line parameters, speed tuning, and process optimization to ensure consistent quality and maximum efficiency.',
        },
        consulting: {
          title: 'Consulting & Project Management',
          desc: 'Production line selection, factory layout consulting, project management, and technical supervision for new installations and facility upgrades.',
        },
      },
    },
    projects: {
      title: 'Recent Projects',
      subtitle: 'Production lines I have installed, commissioned, and maintained',
      inquire: 'Inquire About Similar Work',
      items: {
        pharmaLine: {
          name: 'Pharmaceutical Production Line',
          desc: 'Installation and commissioning of a complete pharmaceutical tablet production line including mixing, granulation, compression, and coating.',
        },
        foodLine: {
          name: 'Food Processing Line',
          desc: 'Full setup of a food processing line with cooking, filling, sealing, and labeling stations. Calibration and optimization completed.',
        },
        packagingLine: {
          name: 'Automated Packaging System',
          desc: 'Installation of a multi-format packaging line with flow wrapping, cartoning, and case packing. Electrical integration and PLC setup.',
        },
        fillingLine: {
          name: 'Liquid Filling & Capping Line',
          desc: 'Commissioning of a high-speed liquid filling line for cleaning products. Servo-driven fillers, cappers, and labelers calibrated and running.',
        },
        cleaningLine: {
          name: 'Cleaning Products Manufacturing Line',
          desc: 'End-to-end production line for household cleaning products: mixing reactors, filling, capping, labeling, and shrink wrapping.',
        },
      },
      categories: {
        pharmaceutical: 'Pharmaceutical',
        food: 'Food & Beverage',
        industrial: 'Industrial & Chemical',
      },
    },
    whyUs: {
      title: 'Why Choose Me',
      subtitle: 'What sets my service apart in the industrial sector',
      pillars: {
        experience: {
          title: '20+ Years Experience',
          desc: 'Deep hands-on experience with German, Italian, Chinese, and Taiwanese production line technology across multiple industries.',
        },
        precision: {
          title: 'Precision & Quality',
          desc: 'Former Maintenance Manager at Delta Pharma — accustomed to GMP standards, precision calibration, and pharmaceutical-grade quality requirements.',
        },
        reliability: {
          title: 'Reliable & Responsive',
          desc: 'Quick response to breakdowns, minimal production downtime, and a commitment to getting your line back up and running efficiently.',
        },
        support: {
          title: 'End-to-End Support',
          desc: 'From initial installation through ongoing maintenance and troubleshooting — I support your production every step of the way.',
        },
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Need installation, maintenance, or consulting? Contact me today for a free consultation.',
      phone: 'Call Me',
      whatsapp: 'Chat on WhatsApp',
      location: 'Aleppo, Syria',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Thank you! I will contact you shortly.',
      },
    },
    footer: {
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Info',
      copyright: 'BASHAR KASTALI',
      rights: 'All rights reserved.',
    },
    whatsapp: {
      tooltip: 'Chat with me on WhatsApp',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتي',
      projects: 'مشاريعي',
      whyUs: 'لماذا أنا',
      contact: 'اتصل بي',
      langToggle: 'English',
    },
    hero: {
      title: 'خبرة في تركيب خطوط الإنتاج والصيانة الصناعية',
      subtitle: 'متخصص في خطوط إنتاج الأدوية والأغذية والمواد الكيميائية',
      ctaQuote: 'اطلب عرض سعر',
      ctaServices: 'خدماتي',
      expertise: 'أكثر من 20 عاماً من الخبرة الصناعية | دلتا فارما سابقاً',
    },
    about: {
      title: 'من أنا',
      description:
        'من حلب، سوريا — أنا بشار قسطلّي، متخصص في خطوط الإنتاج بخبرة تزيد عن 20 عاماً في تركيب وتشغيل ومعايرة وصيانة خطوط الإنتاج الصناعية. عملت مع كبرى الشركات المصنعة في ألمانيا وإيطاليا والصين وتايوان، وشغلت سابقاً منصب مدير الصيانة والتصليح في شركة دلتا فارما للأدوية. أمتلك معرفة فنية عميقة بأنظمة الإنتاج الدوائي والغذائي والكيميائي، وأجمع بين المعايير الهندسية العالمية والخبرة المحلية لتقديم حلول صناعية موثوقة وفعالة.',
      experience: 'أكثر من 20 عاماً من الخبرة',
      countries: 'تدريب وشراكات عالمية',
      countriesList: ['ألمانيا', 'إيطاليا', 'الصين', 'تايوان'],
      specializations: [
        'خطوط إنتاج الأدوية',
        'خطوط تصنيع الأغذية',
        'خطوط المواد الكيميائية ومنتجات التنظيف',
        'أنظمة التعبئة والتغليف',
      ],
      teamPhoto: 'خبرة في تركيب خطوط الإنتاج',
    },
    services: {
      title: 'خدماتي',
      subtitle: 'حلول متكاملة لخطوط الإنتاج من التركيب إلى التحسين',
      items: {
        installation: {
          title: 'تركيب وتشغيل',
          desc: 'تركيب وتجهيز وتشغيل خطوط إنتاج الأدوية والأغذية والمواد الكيميائية. دمج كامل للنظام ودعم بدء التشغيل.',
        },
        maintenance: {
          title: 'صيانة وتصليح',
          desc: 'تشخيص وإصلاح الأعطال الكهربائية والميكانيكية، والصيانة الوقائية لجميع أنواع معدات الإنتاج الصناعي. تقليل وقت التوقف وزيادة الإنتاجية.',
        },
        calibration: {
          title: 'معايرة وتحسين',
          desc: 'معايرة دقيقة لمعايير خط الإنتاج، ضبط السرعة، وتحسين العمليات لضمان جودة متسقة وكفاءة قصوى.',
        },
        consulting: {
          title: 'استشارات وإدارة مشاريع',
          desc: 'استشارات في اختيار خطوط الإنتاج، تصميم تخطيط المصنع، إدارة المشاريع، والإشراف الفني للتركيبات الجديدة وتحديث المرافق.',
        },
      },
    },
    projects: {
      title: 'مشاريعي الحديثة',
      subtitle: 'خطوط إنتاج قمت بتركيبها وتشغيلها وصيانتها',
      inquire: 'استفسر عن عمل مشابه',
      items: {
        pharmaLine: {
          name: 'خط إنتاج أدوية',
          desc: 'تركيب وتشغيل خط إنتاج أقراص دوائية كامل يشمل الخلط، التحبيب، الكبس، والطلاء.',
        },
        foodLine: {
          name: 'خط تصنيع أغذية',
          desc: 'تجهيز كامل لخط تصنيع أغذية مع محطات طهي وتعبئة وإغلاق ولصق ملصقات. تمت المعايرة والتحسين.',
        },
        packagingLine: {
          name: 'نظام تغليف آلي',
          desc: 'تركيب خط تغليف متعدد الأشكال مع التغليف الأفقي، التغليف الكرتوني، والتعبئة في صناديق. تكامل كهربائي وبرمجة PLC.',
        },
        fillingLine: {
          name: 'خط تعبئة وتغطية سوائل',
          desc: 'تشغيل خط تعبئة سوائل عالي السرعة لمنتجات التنظيف. معايرة ماكينات التعبئة والتغطية ولصق الملصقات.',
        },
        cleaningLine: {
          name: 'خط تصنيع منتجات التنظيف',
          desc: 'خط إنتاج متكامل لمنتجات التنظيف المنزلية: مفاعلات خلط، تعبئة، تغطية، لصق ملصقات، وتغليف انكماشي.',
        },
      },
      categories: {
        pharmaceutical: 'الأدوية',
        food: 'الأغذية والمشروبات',
        industrial: 'الصناعات الكيميائية',
      },
    },
    whyUs: {
      title: 'لماذا تختارني',
      subtitle: 'ما يميز خدماتي في القطاع الصناعي',
      pillars: {
        experience: {
          title: 'أكثر من 20 عاماً',
          desc: 'خبرة عملية عميقة مع تكنولوجيا خطوط الإنتاج الألمانية والإيطالية والصينية والتايوانية في قطاعات صناعية متعددة.',
        },
        precision: {
          title: 'دقة وجودة',
          desc: 'مدير صيانة سابق في دلتا فارما — معتاد على معايير GMP والمعايرة الدقيقة ومتطلبات الجودة الدوائية.',
        },
        reliability: {
          title: 'موثوق وسريع الاستجابة',
          desc: 'استجابة سريعة للأعطال، تقليل وقت توقف الإنتاج، والتزام بإعادة خطك للإنتاج بكفاءة.',
        },
        support: {
          title: 'دعم متكامل',
          desc: 'من التركيب الأولي مروراً بالصيانة المستمرة وحتى حل المشكلات — أدعم إنتاجك في كل خطوة.',
        },
      },
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'تحتاج تركيب أو صيانة أو استشارة؟ تواصل معي اليوم للحصول على استشارة مجانية.',
      phone: 'اتصل بي',
      whatsapp: 'تحدث عبر واتساب',
      location: 'حلب، سوريا',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        success: 'شكراً لك! سأتصل بك قريباً.',
      },
    },
    footer: {
      quickLinks: 'روابط سريعة',
      services: 'خدماتي',
      contact: 'معلومات الاتصال',
      copyright: 'بشار قسطلّي',
      rights: 'جميع الحقوق محفوظة.',
    },
    whatsapp: {
      tooltip: 'تحدث معي عبر واتساب',
    },
  },
};
