import { useLang } from '../hooks/useLanguage';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t, lang } = useLang();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-bold text-gold-500 mb-4">
              BASHAR <span className="text-white">KASTALI</span>
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {lang === 'en'
                ? 'Production line installation, maintenance, and consulting specialist. Based in Aleppo — serving Syria.'
                : 'متخصص في تركيب وصيانة واستشارات خطوط الإنتاج. من حلب — نخدم سوريا.'}
            </p>
            <div className="flex gap-3">
              {['🇩🇪', '🇮🇹', '🇨🇳', '🇹🇼'].map((flag, i) => (
                <span key={i} className="text-xl opacity-70 hover:opacity-100 transition-opacity">
                  {flag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {(['home', 'about', 'services', 'projects', 'whyUs', 'contact'] as const).map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                    >
                      {t.nav[item]}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {(['installation', 'maintenance', 'calibration', 'consulting'] as const).map(
                (key) => (
                  <li key={key}>
                    <button
                      onClick={() => scrollTo('services')}
                      className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                    >
                      {t.services.items[key].title}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+963962401221"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  <Phone size={14} />
                  +963 962 401 221
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/963962401221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPin size={14} />
                  {lang === 'en' ? 'Aleppo, Syria' : 'حلب، سوريا'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {t.footer.copyright}. {t.footer.rights}
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-white/60 hover:text-gold-400 transition-colors"
            aria-label={lang === 'en' ? 'Scroll to top' : 'العودة إلى الأعلى'}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
