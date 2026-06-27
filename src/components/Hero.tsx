import { useState } from 'react';
import { useLang } from '../hooks/useLanguage';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t, dir } = useLang();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — pharmaceutical/industrial production line */}
      <div className="absolute inset-0">
        {!imgError && (
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt="Industrial production line"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        {imgError && (
          <div className="w-full h-full bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            {t.hero.expertise}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            {t.hero.title}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-8 animate-slide-up stagger-1">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up stagger-2">
            <a
              href="https://wa.me/963962401221?text=Hello%20Mr.%20Bashar,%20I%20need%20assistance%20with%20production%20line%20installation%20or%20maintenance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-gold-500/25 active:scale-95"
            >
              {t.hero.ctaQuote}
              <Arrow size={20} />
            </a>
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all active:scale-95"
            >
              {t.hero.ctaServices}
              <ArrowDown size={20} />
            </button>
          </div>

          <div className="flex items-center gap-4 mt-12 animate-slide-up stagger-3">
            <span className="text-white/50 text-sm">{t.about.countries}:</span>
            <div className="flex gap-3">
              {['🇩🇪', '🇮🇹', '🇨🇳', '🇹🇼'].map((flag, i) => (
                <span
                  key={i}
                  className="text-2xl hover:scale-110 transition-transform cursor-default"
                  title={t.about.countriesList[i]}
                >
                  {flag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
