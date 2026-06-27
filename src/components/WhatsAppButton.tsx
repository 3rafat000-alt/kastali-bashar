import { useLang } from '../hooks/useLanguage';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { t } = useLang();

  return (
    <a
      href="https://wa.me/963962401221?text=Hello%20Mr.%20Bashar%2C%20I%20need%20assistance%20with%20production%20line%20installation%20or%20maintenance."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full shadow-xl hover:shadow-green-500/30 transition-all hover:scale-105 active:scale-95 whatsapp-pulse"
      aria-label={t.whatsapp.tooltip}
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline text-sm">{t.whatsapp.tooltip}</span>
    </a>
  );
}
