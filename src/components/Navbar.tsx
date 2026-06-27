import { useState, useEffect } from 'react';
import { useLang } from '../hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';

const navItems = ['home', 'about', 'services', 'projects', 'whyUs', 'contact'] as const;

export default function Navbar() {
  const { t, toggleLang, dir } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold text-gold-500 tracking-tight">
              BASHAR <span className="text-white">KASTALI</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-400 transition-colors rounded-lg hover:bg-white/5"
              >
                {t.nav[item]}
              </button>
            ))}
            <button
              onClick={toggleLang}
              className="ml-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-gold-400 border border-gold-500/30 rounded-lg hover:bg-gold-500/10 transition-all"
            >
              <Globe size={16} />
              {t.nav.langToggle}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              className="p-2 text-gold-400 border border-gold-500/30 rounded-lg"
            >
              <Globe size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white rounded-lg hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-4 py-3 text-white/80 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors"
                style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}
              >
                {t.nav[item]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
