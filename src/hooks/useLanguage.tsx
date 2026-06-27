import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Translations } from '../i18n/translations';

type Lang = 'en' | 'ar';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  toggleLang: () => void;
  dir: 'ltr' | 'rtl';
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang;
    return saved === 'ar' ? 'ar' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  const value: LangContextType = {
    lang,
    setLang,
    t: translations[lang],
    toggleLang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be inside LangProvider');
  return ctx;
}
