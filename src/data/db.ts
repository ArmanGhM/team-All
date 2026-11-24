import type { BlogPost, Project, TeamMember } from '../types/portfolio';

export const HERO_IMAGE = '/src/assets/images/hero_studio_architecture_1795509756678.jpg';

export const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    slug: 'aryan-rahimi',
    name: { en: 'Aryan Rahimi', fa: 'آرین رحیمی' },
    role: { en: 'Principal Systems Architect', fa: 'معمار ارشد سیستم‌ها' },
    location: { en: 'Tehran / Berlin', fa: 'تهران / برلین' },
    avatar: '/src/assets/images/avatar_aryan_rahimi_1795509757409.jpg',
    gradient: {
      from: '#1D4ED8',
      to: '#0E7490',
      css: 'linear-gradient(135deg, #1D4ED8 0%, #0E7490 100%)',
      softGlow: 'rgba(37, 99, 235, 0.22)',
    },
    bio: {
      en: 'Aryan architects resilient web platforms, headless commerce engines, and real-time telemetry pipelines. Over nine years of leading cross-disciplinary engineering teams, he focuses on predictable state machines, edge performance, and accessible multi-script interfaces.',
      fa: 'آرین پلتفرم‌های وب تاب‌آور، موتورهای تجارت الکترونیک بدون سر و پایپ‌لاین‌های تله‌متری بلادرنگ را معماری می‌کند. او با بیش از ۹ سال سابقه هدایت تیم‌های مهندسی چندتخصصی، بر ماشین‌های حالت قابل‌پیش‌بینی، کارایی لبه و رابط‌های کاربری چندخطی دسترس‌پذیر تمرکز دارد.',
    },
    email: 'aryan@studiochahar.dev',
    github: 'https://github.com/studio-chahar/aryan',
    linkedin: 'https://linkedin.com/in/aryan-rahimi',
    yearsExperience: 9,
    skills: ['TypeScript', 'React 18', 'Distributed Systems', 'Next.js', 'PostgreSQL', 'GraphQL', 'Edge Workers'],
    experience: [
      {
        id: 'exp-aryan-1',
        role: { en: 'Principal Architect', fa: 'معمار ارشد نرم‌افزار' },
        company: { en: 'Studio Chahar', fa: 'استودیو چهار' },
        period: { en: '2022 — Present', fa: '۱۴۰۱ — اکنون' },
        summary: {
          en: 'Leading full-stack architecture for luxury retail, telemetry, and bilingual publishing platforms.',
          fa: 'هدایت معماری فول‌استک برای پلتفرم‌های خرده‌فروشی لوکس، تله‌متری و نشر دوزبانه.',
        },
      },
      {
        id: 'exp-aryan-2',
        role: { en: 'Staff Frontend Engineer', fa: 'مهندس ارشد فرانت‌اند' },
        company: { en: 'Kinetix Cloud', fa: 'کینتیکس کلود' },
        period: { en: '2019 — 2022', fa: '۱۳۹۸ — ۱۴۰۱' },
        summary: {
          en: 'Designed high-throughput observability dashboards processing 40k events per second in the browser.',
          fa: 'طراحی داشبوردهای رصدپذیری پرترافیک با پردازش ۴۰ هزار رویداد در ثانیه درون مرورگر.',
        },
      },
    ],
    education: [
      {
        id: 'edu-aryan-1',
        degree: { en: 'M.Sc. Computer Engineering', fa: 'کارشناسی ارشد مهندسی کامپیوتر' },
        institution: { en: 'Sharif University of Technology', fa: 'دانشگاه صنعتی شریف' },
        year: '2017',
      },
    ],
  },
  {
    slug: 'sara-kiani',
    name: { en: 'Sara Kiani', fa: 'سارا کیانی' },
    role: { en: 'Lead Product Designer', fa: 'طراح ارشد محصول' },
    location: { en: 'Tehran / Amsterdam', fa: 'تهران / آمستردام' },
    avatar: '/src/assets/images/avatar_sara_kiani_1795509757671.jpg',
    gradient: {
      from: '#DB2777',
      to: '#7C3AED',
      css: 'linear-gradient(135deg, #DB2777 0%, #7C3AED 100%)',
      softGlow: 'rgba(219, 39, 119, 0.22)',
    },
    bio: {
      en: 'Sara shapes editorial e-commerce experiences and design systems that bridge Persian and Latin visual traditions. Her work pairs calm spatial rhythm with strict accessibility, ensuring every micro-interaction feels tactile and unhurried.',
      fa: 'سارا تجربه‌های تجارت الکترونیک سرمقاله‌ای و سیستم‌های طراحی را شکل می‌دهد که سنت‌های بصری فارسی و لاتین را پیوند می‌دهند. کار او ریتم فضایی آرام را با دسترس‌پذیری دقیق ترکیب می‌کند تا هر تعامل کوچک ملموس و سنجیده باشد.',
    },
    email: 'sara@studiochahar.dev',
    github: 'https://github.com/studio-chahar/sara',
    linkedin: 'https://linkedin.com/in/sara-kiani',
    yearsExperience: 7,
    skills: ['Design Systems', 'Figma', 'Editorial Commerce', 'UX Research', 'Accessibility (WCAG)', 'Prototyping'],
    experience: [
      {
        id: 'exp-sara-1',
        role: { en: 'Lead Product Designer', fa: 'طراح ارشد محصول' },
        company: { en: 'Studio Chahar', fa: 'استودیو چهار' },
        period: { en: '2021 — Present', fa: '۱۴۰۰ — اکنون' },
        summary: {
          en: 'Directed the visual identity and storefront experience for Gang of Forty and Persepolis Type.',
          fa: 'هدایت هویت بصری و تجربه فروشگاه آنلاین برای پروژه گروه چهل و تایپ پرسپولیس.',
        },
      },
      {
        id: 'exp-sara-2',
        role: { en: 'Senior UX Designer', fa: 'طراح ارشد تجربه کاربری' },
        company: { en: 'Verve Digital', fa: 'ورْو دیجیتال' },
        period: { en: '2018 — 2021', fa: '۱۳۹۷ — ۱۴۰۰' },
        summary: {
          en: 'Crafted multi-currency checkout flows and modular editorial landing systems for European craft brands.',
          fa: 'طراحی فرآیندهای پرداخت چندارزی و سیستم‌های فرود مدولار برای برندهای صنایع‌دستی اروپایی.',
        },
      },
    ],
    education: [
      {
        id: 'edu-sara-1',
        degree: { en: 'B.A. Industrial & Visual Design', fa: 'کارشناسی طراحی صنعتی و بصری' },
        institution: { en: 'University of Tehran', fa: 'دانشگاه تهران' },
        year: '2018',
      },
    ],
  },
  {
    slug: 'darius-mehr',
    name: { en: 'Darius Mehr', fa: 'داریوش مهر' },
    role: { en: 'Creative Frontend & Motion Engineer', fa: 'مهندس فرانت‌اند خلاق و موشن' },
    location: { en: 'Shiraz / London', fa: 'شیراز / لندن' },
    avatar: '/src/assets/images/avatar_darius_mehr_1795509758820.jpg',
    gradient: {
      from: '#C2410C',
      to: '#DC2626',
      css: 'linear-gradient(135deg, #C2410C 0%, #DC2626 100%)',
      softGlow: 'rgba(234, 88, 12, 0.22)',
    },
    bio: {
      en: 'Darius specializes in GPU-composited motion choreography, accessible keyboard interfaces, and custom WebAudio tooling. He builds fluid React applications where spring physics never compromise keyboard navigation or screen-reader clarity.',
      fa: 'داریوش در طراحی حرکت‌های کامپوزیت‌شده روی پردازنده گرافیکی، رابط‌های کیبوردی دسترس‌پذیر و ابزارهای WebAudio تخصص دارد. او برنامه‌های React روان می‌سازد که در آن‌ها فیزیک فنری هرگز وضوح صفحه‌خوان یا ناوبری کیبوردی را فدا نمی‌کند.',
    },
    email: 'darius@studiochahar.dev',
    github: 'https://github.com/studio-chahar/darius',
    linkedin: 'https://linkedin.com/in/darius-mehr',
    yearsExperience: 6,
    skills: ['Framer Motion', 'React', 'TypeScript', 'WebAudio API', 'Tailwind CSS', 'Canvas 2D', 'Keyboard UX'],
    experience: [
      {
        id: 'exp-darius-1',
        role: { en: 'Motion & UI Engineer', fa: 'مهندس رابط کاربری و موشن' },
        company: { en: 'Studio Chahar', fa: 'استودیو چهار' },
        period: { en: '2022 — Present', fa: '۱۴۰۱ — اکنون' },
        summary: {
          en: 'Built interactive sound controllers, gesture-driven galleries, and sub-16ms animation pipelines.',
          fa: 'ساخت کنترلرهای صوتی تعاملی، گالری‌های لمسی و پایپ‌لاین‌های انیمیشن زیر ۱۶ میلی‌ثانیه.',
        },
      },
      {
        id: 'exp-darius-2',
        role: { en: 'Frontend Developer', fa: 'توسعه‌دهنده فرانت‌اند' },
        company: { en: 'Sonora Labs', fa: 'سونورا لبز' },
        period: { en: '2019 — 2022', fa: '۱۳۹۸ — ۱۴۰۱' },
        summary: {
          en: 'Engineered browser-based acoustic analyzers and tactile rotary UI primitives.',
          fa: 'مهندسی تحلیلگرهای آکوستیک تحت وب و المان‌های رابط کاربری چرخشی لمسی.',
        },
      },
    ],
    education: [
      {
        id: 'edu-darius-1',
        degree: { en: 'B.Sc. Software Engineering', fa: 'کارشناسی مهندسی نرم‌افزار' },
        institution: { en: 'Shiraz University', fa: 'دانشگاه شیراز' },
        year: '2019',
      },
    ],
  },
  {
    slug: 'niloofar-azizi',
    name: { en: 'Niloofar Azizi', fa: 'نیلوفر عزیزی' },
    role: { en: 'Bilingual Typography & Systems Engineer', fa: 'مهندس سیستم‌ها و تایپوگرافی دوزبانه' },
    location: { en: 'Isfahan / Vienna', fa: 'اصفهان / وین' },
    avatar: '/src/assets/images/avatar_niloofar_azizi_1795509759159.jpg',
    gradient: {
      from: '#047857',
      to: '#0F766E',
      css: 'linear-gradient(135deg, #047857 0%, #0F766E 100%)',
      softGlow: 'rgba(5, 150, 105, 0.22)',
    },
    bio: {
      en: 'Niloofar bridges variable font engineering with bidirectional RTL/LTR layout architecture. She develops localization pipelines, OpenType feature tooling, and civic wayfinding interfaces that maintain optical balance across Persian and European scripts.',
      fa: 'نیلوفر مهندسی فونت‌های متغیر را به معماری چیدمان دوجهته راست‌به‌چپ و چپ‌به‌راست پیوند می‌زند. او پایپ‌لاین‌های بومی‌سازی، ابزارهای OpenType و رابط‌های مسیریابی شهری را توسعه می‌دهد که تعادل بصری میان خط فارسی و لاتین را حفظ می‌کنند.',
    },
    email: 'niloofar@studiochahar.dev',
    github: 'https://github.com/studio-chahar/niloofar',
    linkedin: 'https://linkedin.com/in/niloofar-azizi',
    yearsExperience: 8,
    skills: ['RTL/LTR Architecture', 'i18next', 'Variable Fonts', 'CSS Logical Properties', 'SVG Mapping', 'Design Tokens'],
    experience: [
      {
        id: 'exp-niloofar-1',
        role: { en: 'Typography & Systems Lead', fa: 'سرپرست تایپوگرافی و سیستم‌ها' },
        company: { en: 'Studio Chahar', fa: 'استودیو چهار' },
        period: { en: '2021 — Present', fa: '۱۴۰۰ — اکنون' },
        summary: {
          en: 'Authored Studio Chahar’s bilingual token engine and led Zagros Metro digital wayfinding.',
          fa: 'نگارش موتور توکن دوزبانه استودیو چهار و هدایت پروژه مسیریابی دیجیتال متروی زاگرس.',
        },
      },
      {
        id: 'exp-niloofar-2',
        role: { en: 'UI Systems Engineer', fa: 'مهندس سیستم‌های رابط کاربری' },
        company: { en: 'Forma Type Foundry', fa: 'تایپ‌فاوندری فورما' },
        period: { en: '2017 — 2021', fa: '۱۳۹۶ — ۱۴۰۰' },
        summary: {
          en: 'Created web specimen testers and automated kerning verification suites for multi-script typefaces.',
          fa: 'ساخت آزمایشگرهای آنلاین نمونه فونت و مجموعه‌های آزمون خودکار فاصله‌گذاری حروف برای فونت‌های چندخطی.',
        },
      },
    ],
    education: [
      {
        id: 'edu-niloofar-1',
        degree: { en: 'M.A. Visual Communication & Type Design', fa: 'کارشناسی ارشد ارتباط تصویری و طراحی حروف' },
        institution: { en: 'Tehran University of Art', fa: 'دانشگاه هنر تهران' },
        year: '2017',
      },
    ],
  },
];

export const PROJECTS: readonly Project[] = [
  {
    id: 'gang-of-forty',
    title: { en: 'Gang of Forty', fa: 'فروشگاه گروه چهل (Gang of Forty)' },
    subtitle: {
      en: 'Editorial Commerce & Craft Collective',
      fa: 'فروشگاه سرمقاله‌ای و کلکسیون صنایع معاصر',
    },
    summary: {
      en: 'A headless bilingual storefront uniting forty independent ceramicists, tailors, and printmakers in a calm, gallery-paced shopping architecture.',
      fa: 'یک فروشگاه آنلاین دوزبانه بدون سر که آثار چهل هنرمند سرامیک‌کار، خیاط و چاپگر مستقل را در معماری آرام و گالری‌گونه گرد هم می‌آورد.',
    },
    problem: {
      en: 'Independent ateliers struggled with generic marketplace templates that flattened the provenance of handmade ceramics and tailored garments, while multi-vendor inventory sync frequently caused checkout race conditions during limited batch drops.',
      fa: 'آتلیه‌های مستقل با قالب‌های عمومی فروشگاه‌ها مشکل داشتند که اصالت سرامیک‌های دست‌ساز و پوشاک دوخته‌شده را کم‌رنگ می‌کرد؛ همچنین همگام‌سازی موجودی چندفروشنده هنگام عرضه‌های محدود باعث تداخل در تسویه‌حساب می‌شد.',
    },
    solution: {
      en: 'We engineered an optimistic inventory reservation layer backed by idempotent edge webhooks and paired it with a stone-neutral editorial storefront. Customers filter drops by maker, material, and edition size with instant URL-synced state and full RTL/LTR parity.',
      fa: 'ما یک لایه رزرو خوش‌بینانه موجودی با وب‌هوک‌های ایدمپوتنت لبه طراحی کردیم و آن را با ویترین سرمقاله‌ای خنثی ترکیب نمودیم. مشتریان می‌توانند آثار را بر اساس سازنده، متریال و تیراژ با همگام‌سازی فوری نشانی وب در هر دو جهت فارسی و انگلیسی فیلتر کنند.',
    },
    coverImage: '/src/assets/images/project_gang_forty_1795509759677.jpg',
    year: '2026',
    client: { en: 'Gang of Forty Collective', fa: 'کلکتیو گروه چهل' },
    tools: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Stripe'],
    tags: ['E-Commerce', 'Design System', 'Bilingual'],
    creatorSlugs: ['sara-kiani', 'aryan-rahimi', 'darius-mehr'],
    liveUrl: 'https://gangofforty.example.com',
    githubUrl: 'https://github.com/studio-chahar/gang-of-forty',
    featured: true,
  },
  {
    id: 'persepolis-type',
    title: { en: 'Persepolis Type Specimen', fa: 'آزمایشگاه تایپ پرسپولیس' },
    subtitle: {
      en: 'Interactive Variable Font Foundry',
      fa: 'کارخانه حروف متغیر و نمونه فونت تعاملی',
    },
    summary: {
      en: 'A live OpenType specimen platform allowing art directors to test Persian and Latin optical pairing, weight axes, and baseline alignment in real time.',
      fa: 'پلتفرم زنده نمایش حروف OpenType که به مدیران هنری امکان می‌دهد جفت‌سازی فارسی و لاتین، محورهای وزن و تراز خط کرسی را به صورت بلادرنگ آزمایش کنند.',
    },
    problem: {
      en: 'Bilingual digital publications routinely suffer from mismatched x-heights and jarring line-height shifts when Persian and English sentences share a single paragraph.',
      fa: 'نشریات دیجیتال دوزبانه معمولاً از ناهماهنگی ارتفاع حروف و پرش‌های آزاردهنده فاصله خطوط هنگام ترکیب جملات فارسی و انگلیسی در یک پاراگراف رنج می‌برند.',
    },
    solution: {
      en: 'We built an interactive web specimen canvas with real-time glyph metric inspection, optical scale compensation sliders, and copyable CSS logical property tokens calibrated specifically for Vazirmatn and editorial serif pairings.',
      fa: 'ما یک بوم نمایش تعاملی تحت وب با بازبینی بلادرنگ متریک گلیف‌ها، لغزنده‌های جبران مقیاس بصری و توکن‌های قابل کپی CSS منطقی ویژه ترکیب وزیرمتن و فونت‌های سریف طراحی کردیم.',
    },
    coverImage: '/src/assets/images/project_persepolis_type_1795509760004.jpg',
    year: '2025',
    client: { en: 'Persepolis Foundry', fa: 'تایپ‌فاوندری پرسپولیس' },
    tools: ['TypeScript', 'OpenType.js', 'React', 'CSS Variables', 'i18next'],
    tags: ['Typography', 'Bilingual', 'Tooling'],
    creatorSlugs: ['niloofar-azizi', 'sara-kiani'],
    liveUrl: 'https://persepolistype.example.com',
    githubUrl: 'https://github.com/studio-chahar/persepolis-type',
    featured: true,
  },
  {
    id: 'atlas-telemetry',
    title: { en: 'Atlas Industrial Telemetry', fa: 'تله‌متری صنعتی اطلس' },
    subtitle: {
      en: 'Real-Time Edge Observability Console',
      fa: 'کنسول رصدپذیری بلادرنگ لبه' },
    summary: {
      en: 'High-density diagnostic interface tracking distributed solar microgrid inverters with sub-second chart streaming and zero-jank tabular readouts.',
      fa: 'رابط تشخیصی پرچگالی برای پایش اینورترهای میکروگرید خورشیدی توزیع‌شده با جریان نمودارهای زیر یک ثانیه و خوانش‌های جدولی بدون پرش.',
    },
    problem: {
      en: 'Field engineers diagnosing microgrid voltage anomalies faced sluggish legacy dashboards that froze browsers under continuous 60Hz telemetry bursts and lacked tabular numeric alignment.',
      fa: 'مهندسان میدانی هنگام عیب‌یابی نوسانات ولتاژ با داشبوردهای قدیمی کندی مواجه بودند که زیر بار جریان مداوم داده مرورگر را قفل می‌کردند و تراز عددی دقیقی نداشتند.',
    },
    solution: {
      en: 'Using ring-buffered WebWorker ingestion and Canvas 2D decimation, Atlas maintains steady 60fps curves across 120 sensor channels while enforcing tabular numerals and WCAG AA contrast in dark control rooms.',
      fa: 'با استفاده از بافر حلقوی در WebWorker و فشرده‌سازی Canvas 2D، اطلس نرخ ۶۰ فریم پایدار را در ۱۲۰ کانال حسگر حفظ کرده و خوانایی عددی و کنتراست بالا را در اتاق‌های کنترل تاریک تضمین می‌کند.',
    },
    coverImage: '/src/assets/images/project_atlas_telemetry_1795509760361.jpg',
    year: '2025',
    client: { en: 'Atlas Grid Systems', fa: 'سیستم‌های شبکه اطلس' },
    tools: ['TypeScript', 'WebWorkers', 'Canvas 2D', 'React', 'Node.js'],
    tags: ['Telemetry', 'Systems', 'Performance'],
    creatorSlugs: ['aryan-rahimi', 'darius-mehr'],
    liveUrl: 'https://atlastelemetry.example.com',
    githubUrl: 'https://github.com/studio-chahar/atlas-telemetry',
    featured: true,
  },
  {
    id: 'kashan-acoustics',
    title: { en: 'Kashan Acoustics Studio', fa: 'استودیو آکوستیک کاشان' },
    subtitle: {
      en: 'Tactile DSP Monitor & Web Companion',
      fa: 'مانیتور دیجیتال و همراه وب لمسی' },
    summary: {
      en: 'A WebHID and WebAudio calibration companion for walnut-encased studio monitors, pairing precision room-EQ curves with tactile rotary ergonomics.',
      fa: 'نرم‌افزار همراه WebHID و WebAudio برای کالیبراسیون مانیتورهای استودیویی با بدنه گردو، ترکیب منحنی‌های دقیق اکولایزر اتاق با کنترل چرخشی ملموس.',
    },
    problem: {
      en: 'Sound engineers setting up near-field studio monitors needed a driverless browser tool to sweep room resonances and store hardware DSP presets without installing bloated desktop suites.',
      fa: 'مهندسان صدا برای راه‌اندازی مانیتورهای استودیویی به ابزاری بدون نیاز به درایور در مرورگر نیاز داشتند تا رزونانس اتاق را اندازه‌گیری و پریست‌های DSP سخت‌افزار را ذخیره کنند.',
    },
    solution: {
      en: 'We designed a hardware-mirrored rotary control surface using Framer Motion physics and WebAudio FFT sweeps, allowing engineers to calibrate monitors in under ninety seconds straight from Chromium.',
      fa: 'ما یک کنترلر چرخشی همگام با سخت‌افزار با فیزیک Framer Motion و تحلیل FFT در WebAudio ساختیم که به مهندسان امکان می‌دهد مانیتورها را در کمتر از ۹۰ ثانیه کالیبره کنند.',
    },
    coverImage: '/src/assets/images/project_kashan_acoustics_1795509761546.jpg',
    year: '2024',
    client: { en: 'Kashan Audio Craft', fa: 'صنایع صوتی کاشان' },
    tools: ['WebAudio API', 'Framer Motion', 'TypeScript', 'React', 'WebHID'],
    tags: ['Hardware', 'Audio', 'Motion'],
    creatorSlugs: ['darius-mehr', 'sara-kiani'],
    liveUrl: 'https://kashanacoustics.example.com',
    githubUrl: 'https://github.com/studio-chahar/kashan-acoustics',
    featured: false,
  },
  {
    id: 'zagros-transit',
    title: { en: 'Zagros Metro Wayfinding', fa: 'مسیریابی متروی زاگرس' },
    subtitle: {
      en: 'Civic Signage & Interactive Route Map',
      fa: 'تابلوهای شهری و نقشه تعاملی خطوط' },
    summary: {
      en: 'A unified bilingual transit signage system and accessible kiosk route planner serving 1.2 million daily commuters across four metro corridors.',
      fa: 'سیستم یکپارچه علائم راهنمای دوزبانه و مسیریاب کیوسک دسترس‌پذیر که روزانه به ۱.۲ میلیون مسافر در چهار خط مترو خدمات می‌دهد.',
    },
    problem: {
      en: 'Existing station kiosks suffered from inconsistent Persian/English platform numbering and low-contrast route diagrams that slowed commuter transfers during peak hours.',
      fa: 'کیوسک‌های قبلی ایستگاه‌ها از ناهماهنگی شماره‌گذاری سکوها در فارسی و انگلیسی و کنتراست پایین نقشه‌ها رنج می‌بردند که سرعت جابه‌جایی مسافران در ساعات اوج را کاهش می‌داد.',
    },
    solution: {
      en: 'We unified physical platform signage and kiosk software under a single typographic grid, adding high-contrast line badges, offline-first route calculation, and instant RTL/LTR kiosk switching.',
      fa: 'ما تابلوهای فیزیکی سکو و نرم‌افزار کیوسک را تحت یک شبکه تایپوگرافی واحد یکپارچه کردیم و مسیریابی آفلاین و تغییر آنی جهت کیوسک را به آن افزودیم.',
    },
    coverImage: '/src/assets/images/project_zagros_transit_1795509761857.jpg',
    year: '2024',
    client: { en: 'Zagros Urban Mobility', fa: 'حمل‌ونقل شهری زاگرس' },
    tools: ['SVG Systems', 'React', 'i18next', 'TypeScript', 'Tailwind CSS'],
    tags: ['Wayfinding', 'Bilingual', 'Design System'],
    creatorSlugs: ['niloofar-azizi', 'aryan-rahimi'],
    liveUrl: 'https://zagrostransit.example.com',
    githubUrl: 'https://github.com/studio-chahar/zagros-transit',
    featured: false,
  },
];

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'designing-bidirectional-systems',
    title: {
      en: 'Designing Bidirectional Systems Without Compromising Rhythm',
      fa: 'طراحی سیستم‌های دوجهته بدون قربانی کردن ریتم بصری',
    },
    excerpt: {
      en: 'How CSS logical properties, optical font scaling, and mirrored motion vectors create true parity between Farsi RTL and English LTR layouts.',
      fa: 'چگونه ویژگی‌های منطقی CSS، مقیاس‌بندی بصری فونت و بردارهای حرکت معکوس، برابری واقعی میان چیدمان فارسی و انگلیسی ایجاد می‌کنند.',
    },
    content: {
      en: `Building a truly bilingual Farsi and English application demands far more than translating strings in a JSON file. When a user switches from English to Farsi, the entire spatial gravity of the interface flips along the vertical axis. Margins that anchored an element to the left edge must now anchor to the right, chevrons pointing forward must invert their direction, and reading measures must recalibrate for the connected geometry of Persian script.

At Studio Chahar, our first rule is eliminating directional CSS properties such as margin-left, padding-right, or text-align: left from our component vocabulary. Instead, we rely exclusively on logical properties—ms-, me-, ps-, pe-, and text-start—so that setting dir="rtl" on the root HTML element transforms the layout cleanly in one atomic step without fragile stylesheet overrides.

Typography requires equal care. Latin geometric sans-serifs often sit higher on the baseline than Persian typefaces like Vazirmatn at identical nominal pixel sizes. During our build of Persepolis Type Specimen and Gang of Forty, we measured optical x-height ratios and tuned line-height scales separately for RTL and LTR contexts. The result is an interface where Persian prose breathes comfortably at 1.8 line height while English editorial copy stays crisp at 1.6.

Finally, motion choreography must respect reading direction. Page transitions and drawer reveals that slide from the trailing edge in English automatically reverse their horizontal vector in Farsi, keeping spatial continuity effortless for every reader.`,
      fa: `ساخت یک وب‌اپلیکیشن واقعی دوزبانه فارسی و انگلیسی بسیار فراتر از ترجمه رشته‌های متنی در یک فایل JSON است. زمانی که کاربر زبان را از انگلیسی به فارسی تغییر می‌دهد، گرانش فضایی کل رابط کاربری در امتداد محور عمودی معکوس می‌شود. حاشیه‌هایی که یک المان را به لبه چپ تکیه داده بودند باید به لبه راست منتقل شوند، فلش‌های رو به جلو جهت خود را تغییر دهند و طول خطوط برای هندسه پیوسته خط فارسی بازتنظیم شود.

در استودیو چهار، نخستین قانون ما حذف کامل ویژگی‌های جهت‌دار مانند margin-left و padding-right از کدهای کامپوننت‌هاست. در عوض، ما منحصراً از ویژگی‌های منطقی CSS یعنی ms-، me-، ps- و text-start استفاده می‌کنیم تا تغییر ویژگی dir="rtl" روی تگ ریشه HTML کل چیدمان را در یک گام اتمیک و بدون نیاز به بازنویسی‌های شکننده دگرگون کند.

تایپوگرافی نیز نیازمند همین میزان دقت است. فونت‌های هندسی لاتین در اندازه پیکسلی یکسان، اغلب ارتفاع بصری متفاوتی نسبت به فونت فارسی وزیرمتن دارند. در جریان ساخت پروژه‌های تایپ پرسپولیس و فروشگاه گروه چهل، نسبت ارتفاع حروف و فاصله خطوط را به صورت جداگانه برای فارسی و انگلیسی کالیبره کردیم تا نثر فارسی با فاصله خط ۱.۸ نفس بکشد و متن انگلیسی در ۱.۶ شفاف بماند.

در نهایت، حرکت و انیمیشن نیز باید به جهت خواندن احترام بگذارد. باز شدن منوها و جابه‌جایی صفحات به صورت خودکار بر اساس راست‌به‌چپ یا چپ‌به‌راست بودن جهت‌گیری می‌شوند تا پیوستگی فضایی برای هر مخاطبی طبیعی باشد.`,
    },
    coverImage: '/src/assets/images/project_persepolis_type_1795509760004.jpg',
    authorSlug: 'niloofar-azizi',
    publishedAt: '2026-10-14',
    readTimeMinutes: 4,
    tags: ['Typography', 'RTL', 'Architecture'],
  },
  {
    slug: 'architecture-of-gang-of-forty',
    title: {
      en: 'Inside Gang of Forty: Calm Commerce at Edge Speed',
      fa: 'درون فروشگاه گروه چهل: تجارت آرام با سرعت لبه',
    },
    excerpt: {
      en: 'A technical post-mortem on pairing tactile gallery aesthetics with deterministic inventory locking for forty independent craft studios.',
      fa: 'بررسی فنی چگونگی ترکیب زیبایی‌شناسی آرام گالری با قفل‌گذاری قطعی موجودی برای چهل کارگاه مستقل صنایع دستی.',
    },
    content: {
      en: `Most e-commerce interfaces treat attention like a scarce commodity to be captured with countdown timers, pulsing badges, and crowded upsell carousels. When forty independent ceramicists, weavers, and tailors approached us to build Gang of Forty, they asked for the exact opposite: a digital storefront that felt as unhurried as walking into a quiet travertine gallery.

Behind that calm surface, however, lay a genuinely thorny distributed systems problem. Because many pieces in the collective are produced in editions of five or ten, simultaneous checkouts during seasonal drops previously caused overselling and painful manual refunds. We needed atomic inventory guarantees without sacrificing sub-100ms storefront browsing.

Our architecture separates read-heavy discovery from write-critical reservations. Catalog browsing, URL-synced search parameters, and image-first lookbooks are served directly from static edge caches with zero database round-trips. The moment a visitor clicks reserve, an optimistic reservation token is issued and validated via an idempotent PostgreSQL transaction with a strict fifteen-minute hold window.

On the frontend, we enforced strict spatial discipline: zero pill clutter on product cards, tabular numerals for edition counters and pricing, and a unified CSS variable token sheet that shifts seamlessly across editorial light and evening dark viewing modes. The result doubled checkout completion rates while cutting support tickets regarding stock conflicts to zero.`,
      fa: `بیشتر رابط‌های کاربری تجارت الکترونیک با تایمرهای شمارش معکوس، نشانگرهای چشمک‌زن و پیشنهادهای شلوغ به دنبال جلب توجه فوری هستند. زمانی که چهل هنرمند سرامیک‌کار، بافنده و خیاط مستقل برای ساخت فروشگاه «گروه چهل» به ما مراجعه کردند، دقیقاً نقطه مقابل را خواستند: ویترینی دیجیتال که به اندازه قدم زدن در یک گالری سنگی آرامش‌بخش باشد.

با این حال، پشت آن ظاهر آرام یک چالش واقعی سیستم‌های توزیع‌شده نهفته بود. از آنجا که بسیاری از آثار این کلکتیو در تیراژ محدود پنج یا ده عددی تولید می‌شوند، خرید هم‌زمان در زمان رونمایی‌های فصلی پیش‌تر باعث فروش بیش از موجودی و لغو دستی سفارش‌ها می‌شد. ما به تضمین اتمیک موجودی نیاز داشتیم، آن هم بدون کاهش سرعت مرور صفحات.

معماری ما مسیر خواندن کاتالوگ را از رزروهای حساس جدا کرد. مرور محصولات، فیلترهای همگام با نشانی وب و گالری تصاویر مستقیماً از کش لبه بدون درگیر کردن پایگاه داده سرو می‌شوند. اما به محض کلیک کاربر روی دکمه رزرو، یک توکن خوش‌بینانه صادر شده و از طریق تراکنش ایدمپوتنت PostgreSQL با پنجره زمانی پانزده‌دقیقه‌ای اعتبارسنجی می‌شود.

در فرانت‌اند نیز انضباط فضایی دقیقی را اجرا کردیم: حذف برچسب‌های کپسولی اضافی روی کارت‌ها، استفاده از اعداد هم‌عرض برای شماره تیراژ و قیمت‌ها، و سیستم توکن رنگی یکپارچه برای حالت روز و شب. نتیجه، دو برابر شدن نرخ تکمیل خرید و کاهش تیکت‌های تداخل موجودی به صفر بود.`,
    },
    coverImage: '/src/assets/images/project_gang_forty_1795509759677.jpg',
    authorSlug: 'sara-kiani',
    publishedAt: '2026-09-28',
    readTimeMinutes: 5,
    tags: ['E-Commerce', 'Systems', 'Case Study'],
  },
  {
    slug: 'url-synced-state-as-first-class-ux',
    title: {
      en: 'Why URL-Synced Filter State Beats Ephemeral Component State',
      fa: 'چرا همگام‌سازی فیلترها با نشانی وب از حافظه موقت بهتر است',
    },
    excerpt: {
      en: 'Treating URL search parameters as the single source of truth unlocks shareable queries, reliable back-button navigation, and simpler React code.',
      fa: 'در نظر گرفتن پارامترهای جستجوی نشانی وب به عنوان منبع واحد حقیقت، اشتراک‌گذاری لینک‌ها، دکمه بازگشت مرورگر و کدهای React را ساده‌تر می‌کند.',
    },
    content: {
      en: `A familiar frustration in modern single-page applications happens right after you filter a large catalog by tag, contributor, and search keyword: you click into an item, press the browser Back button, and discover every filter has vanished. Storing filter criteria purely inside local React useState hooks treats user intent as disposable.

When we build project directories or searchable archives, we derive filter state directly from URLSearchParams via React Router’s useSearchParams hook. Every keystroke in the search bar, every contributor selection, and every tag filter updates ?q=..., ?member=..., and ?tag=... cleanly using replace navigation so browser history stays tidy without polluting every character typed.

Just as importantly, keeping filter serialization and matching inside pure TypeScript utility modules makes the entire feature deterministic and testable in milliseconds using Node’s built-in test runner. Before opening a browser, we can verify edge cases like case-insensitive matching across English and Farsi titles, combined multi-axis filters, and empty-param cleanup.

The payoff for users is immediate: teammates can paste a filtered URL straight into Slack or Telegram, reload the page without losing context, or hit Clear Filters to reset the query string to a clean route in a single click.`,
      fa: `یکی از تجربه‌های آزاردهنده رایج در برنامه‌های تک‌صفحه‌ای مدرن، درست پس از فیلتر کردن یک فهرست بزرگ بر اساس برچسب، همکار و کلیدواژه رخ می‌دهد: وارد یک صفحه می‌شوید، دکمه بازگشت مرورگر را می‌زنید و می‌بینید تمام فیلترها ناپدید شده‌اند. نگهداری وضعیت فیلترها صرفاً در useState محلی، قصد کاربر را موقت و بی‌ارزش فرض می‌کند.

هنگام ساخت دایرکتوری پروژه‌ها یا آرشیوهای قابل جستجو، ما وضعیت فیلتر را مستقیماً از URLSearchParams و هوک useSearchParams در React Router استخراج می‌کنیم. هر کلیدواژه در نوار جستجو، انتخاب هر عضو تیم و هر برچسب به صورت تمیز پارامترهای ?q=، ?member= و ?tag= را با جایگزینی تاریخچه به‌روزرسانی می‌کند تا دکمه بازگشت مرورگر همیشه دقیق عمل کند.

به همان اندازه مهم، قرار دادن منطق تبدیل و تطبیق فیلترها در ماژول‌های خالص TypeScript است که کل این قابلیت را در کسری از میلی‌ثانیه با تست‌های واحد Node قابل راستی‌آزمایی می‌کند. پیش از باز کردن مرورگر می‌توانیم تطبیق حروف بزرگ و کوچک در متن‌های فارسی و انگلیسی، فیلترهای ترکیبی و پاک‌سازی پارامترهای خالی را تست کنیم.

سود این رویکرد برای کاربر فوری است: همکاران می‌توانند نشانی فیلترشده را مستقیم به اشتراک بگذارند، صفحه را بدون از دست دادن نتایج بازخوانی کنند یا با یک کلیک تمام فیلترها را پاک نمایند.`,
    },
    coverImage: '/src/assets/images/project_atlas_telemetry_1795509760361.jpg',
    authorSlug: 'aryan-rahimi',
    publishedAt: '2026-09-03',
    readTimeMinutes: 4,
    tags: ['React', 'Architecture', 'UX'],
  },
  {
    slug: 'compositor-motion-and-accessibility',
    title: {
      en: 'Sub-16ms Motion Choreography That Respects Reduced Motion',
      fa: 'طراحی حرکت زیر ۱۶ میلی‌ثانیه با احترام به کاهش حرکت',
    },
    excerpt: {
      en: 'Lessons from building tactile Framer Motion interfaces that animate solely on GPU compositor properties while keeping keyboard focus crystal clear.',
      fa: 'تجربیاتی از ساخت رابط‌های لمسی با Framer Motion که تنها روی ویژگی‌های پردازنده گرافیکی اجرا می‌شوند و تمرکز کیبورد را شفاف نگه می‌دارند.',
    },
    content: {
      en: `Animation in web interfaces often fails for two opposite reasons: either developers skip transitions completely, leaving state changes abrupt and disorienting, or they animate expensive layout properties like width, top, and box-shadow that stutter on mid-range laptops. Smoothness is not about flashy effects; it is about honoring the browser’s 16.6ms frame budget.

Every transition in our studio portfolio—from route cross-fades to 3D pointer tilt on team cards and command palette springs—restricts itself strictly to GPU-composited properties: transform, opacity, and backdrop-filter. By avoiding layout thrashing, Framer Motion springs settle crisply under 200ms without dropping frames even during simultaneous image decoding.

Equally critical is accessibility. Some visitors experience vestibular discomfort from parallax or card tilt, which is why we wrap motion primitives with Framer Motion’s useReducedMotion hook. When reduced motion is requested by the operating system, pointer tilts gracefully flatten and route transitions switch to an instantaneous opacity settle.

Finally, motion must never trap keyboard users. Our Ctrl+K command palette manages focus cleanly, supports full ArrowUp and ArrowDown navigation, and closes deterministically on Escape—proving that expressive motion and disciplined engineering belong together.`,
      fa: `انیمیشن در رابط‌های وب اغلب به دو دلیل متضاد شکست می‌خورد: یا توسعه‌دهندگان به‌کل از گذارها صرف‌نظر می‌کنند که باعث تغییر حالت ناگهانی و گیج‌کننده می‌شود، یا ویژگی‌های پرهزینه چیدمان مانند width، top و سایه‌ها را انیمیت می‌کنند که روی لپ‌تاپ‌های میان‌رده دچار لرزش می‌شوند. روانی حرکت به معنای جلوه‌های پرزرق‌وبرق نیست، بلکه احترام به بودجه زمانی ۱۶.۶ میلی‌ثانیه‌ای هر فریم است.

تمامی گذارها در پورتفولیوی استودیوی ما—از جابه‌جایی صفحات گرفته تا چرخش سه‌بعدی کارت‌های تیم و فنرهای پنجره دستورات—صرفاً روی ویژگی‌های کامپوزیت‌شده در پردازنده گرافیکی یعنی transform و opacity اجرا می‌شوند. با پرهیز از محاسبه مجدد چیدمان، انیمیشن‌های Framer Motion زیر ۲۰۰ میلی‌ثانیه با دقت کامل به پایداری می‌رسند.

دسترس‌پذیری نیز به همان اندازه حیاتی است. برخی کاربران نسبت به حرکت‌های پارالاکس یا چرخش کارت‌ها حساسیت دهلیزی دارند؛ به همین دلیل تمام المان‌های متحرک را با هوک useReducedMotion کنترل می‌کنیم تا در صورت فعال بودن تنظیمات کاهش حرکت سیستم‌عامل، افکت‌های چرخش به آرامی غیرفعال شوند.

در نهایت، انیمیشن هرگز نباید کاربر کیبورد را به دام بیندازد. پنجره دستورات Ctrl+K ما مدیریت فوکوس دقیق دارد، با کلیدهای جهت‌دار پیمایش می‌شود و با Escape بسته می‌شود.`,
    },
    coverImage: '/src/assets/images/project_kashan_acoustics_1795509761546.jpg',
    authorSlug: 'darius-mehr',
    publishedAt: '2026-08-19',
    readTimeMinutes: 4,
    tags: ['Motion', 'Accessibility', 'Frontend'],
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((m) => m.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
