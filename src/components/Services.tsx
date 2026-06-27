import { useLang } from '../hooks/useLanguage';
import { Cog, Wrench, Ruler, LineChart } from 'lucide-react';

const icons = [Cog, Wrench, Ruler, LineChart];
const serviceKeys = ['installation', 'maintenance', 'calibration', 'consulting'] as const;

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-gold-500 uppercase tracking-widest mb-3">
            {t.services.title}
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            {t.services.subtitle}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceKeys.map((key, i) => {
            const service = t.services.items[key];
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-navy-100/50"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                  <Icon className="w-7 h-7 text-navy-600 group-hover:text-white transition-colors" />
                </div>

                <h4 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h4>
                <p className="text-navy-600/80 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
