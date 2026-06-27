import { useLang } from '../hooks/useLanguage';
import { Award, Globe, Wrench, Building2, Pill, Beaker, Package, FlaskConical } from 'lucide-react';

const stats = [
  { icon: Award, key: 'experience' },
  { icon: Globe, key: 'countries' },
  { icon: Wrench, key: 'lines' },
  { icon: Building2, key: 'projects' },
] as const;

const statLabels: Record<string, { en: string; ar: string }> = {
  experience: { en: 'Years Experience', ar: 'عام خبرة' },
  countries: { en: 'Countries Trained', ar: 'دولة تدربت بها' },
  lines: { en: 'Production Lines', ar: 'خط إنتاج' },
  projects: { en: 'Projects Completed', ar: 'مشروع منجز' },
};

const statValues: Record<string, string> = {
  experience: '20+',
  countries: '4',
  lines: '100+',
  projects: '200+',
};

const specIcons = [Pill, Beaker, FlaskConical, Package];

export default function About() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80"
                alt={t.about.teamPhoto}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 px-6 py-4 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm font-medium">{lang === 'en' ? 'Years' : 'عاماً'}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-sm font-semibold text-gold-500 uppercase tracking-widest mb-3">
              {t.about.title}
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              {lang === 'en'
                ? 'Production Line Specialist — Based in Aleppo'
                : 'متخصص خطوط إنتاج — من حلب'}
            </h3>
            <p className="text-navy-600/80 leading-relaxed mb-8 text-lg">
              {t.about.description}
            </p>

            {/* Specializations */}
            <div className="space-y-3 mb-8">
              {t.about.specializations.map((spec, i) => {
                const Icon = specIcons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <span className="text-navy-700 font-medium">{spec}</span>
                  </div>
                );
              })}
            </div>

            {/* Country flags */}
            <div className="flex flex-wrap gap-4">
              {t.about.countriesList.map((country, i) => (
                <div
                  key={country}
                  className="flex items-center gap-2 px-4 py-2 bg-navy-50 rounded-lg border border-navy-100"
                >
                  <span className="text-xl">{['🇩🇪', '🇮🇹', '🇨🇳', '🇹🇼'][i]}</span>
                  <span className="text-navy-700 font-medium text-sm">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="text-center p-6 bg-navy-50 rounded-xl border border-navy-100 hover:border-gold-500/30 transition-colors"
            >
              <Icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-navy-900">{statValues[key]}</p>
              <p className="text-sm text-navy-500 mt-1">{statLabels[key][lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
