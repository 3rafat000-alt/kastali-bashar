import { useState } from 'react';
import { useLang } from '../hooks/useLanguage';
import { Phone, MessageCircle, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { t, lang, dir } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-gold-500 uppercase tracking-widest mb-3">
            {t.contact.title}
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            {t.contact.subtitle}
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="space-y-6">
              {/* WhatsApp — primary CTA */}
              <a
                href="https://wa.me/963962401221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-green-600 font-medium">{t.contact.whatsapp}</p>
                  <p className="text-lg font-bold text-navy-900">+963 962 401 221</p>
                </div>
              </a>

              <a
                href="tel:+963962401221"
                className="flex items-center gap-4 p-6 bg-navy-50 rounded-xl border border-navy-100 hover:bg-navy-100 transition-colors"
              >
                <div className="w-14 h-14 bg-navy-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-navy-500 font-medium">{t.contact.phone}</p>
                  <p className="text-lg font-bold text-navy-900">+963 962 401 221</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-navy-50 rounded-xl border border-navy-100">
                <div className="w-14 h-14 bg-navy-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-navy-500 font-medium">{t.contact.location}</p>
                  <p className="text-lg font-bold text-navy-900">
                    {lang === 'en' ? 'Aleppo, Syria' : 'حلب، سوريا'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-48 bg-navy-50 rounded-xl border border-navy-100 flex items-center justify-center text-navy-400">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">{lang === 'en' ? 'Aleppo, Syria — Map' : 'حلب، سوريا — خريطة'}</p>
              </div>
            </div>
          </div>

          <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <p className="text-xl font-bold text-navy-900 mb-2">
                  {lang === 'en' ? 'Message Sent!' : 'تم إرسال الرسالة!'}
                </p>
                <p className="text-navy-500">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-all"
                    dir={dir}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-all"
                    dir={dir}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-all"
                    dir={dir}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-all resize-none"
                    dir={dir}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-lg transition-all hover:shadow-lg active:scale-[0.98]"
                >
                  <Send size={18} />
                  {t.contact.form.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
