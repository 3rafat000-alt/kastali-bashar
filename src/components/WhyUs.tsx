import { useLang } from '../hooks/useLanguage';
import { Award, Target, Zap, HeadphonesIcon } from 'lucide-react';

const pillars = ['experience', 'precision', 'reliability', 'support'] as const;
const icons = [Award, Target, Zap, HeadphonesIcon];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="whyUs" className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-gold-500 uppercase tracking-widest mb-3">
            {t.whyUs.title}
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.whyUs.subtitle}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((key, i) => {
            const pillar = t.whyUs.pillars[key];
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold-400" />
                </div>

                <span className="text-5xl font-bold text-white/5 absolute top-4 right-4 select-none">
                  0{i + 1}
                </span>

                <h4 className="text-xl font-bold text-white mb-3">{pillar.title}</h4>
                <p className="text-white/60 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
