import { useState } from 'react';
import { useLang } from '../hooks/useLanguage';
import { MessageCircle, Pill, Beaker, FlaskConical } from 'lucide-react';

const projectItems = [
  { id: 'p1', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80', nameKey: 'pharmaLine', cat: 'pharmaceutical' },
  { id: 'p2', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', nameKey: 'foodLine', cat: 'food' },
  { id: 'p3', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80', nameKey: 'packagingLine', cat: 'industrial' },
  { id: 'p4', img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80', nameKey: 'fillingLine', cat: 'industrial' },
  { id: 'p5', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', nameKey: 'cleaningLine', cat: 'pharmaceutical' },
];

const catIcons: Record<string, React.ElementType> = {
  pharmaceutical: Pill,
  food: Beaker,
  industrial: FlaskConical,
};

const catColors: Record<string, string> = {
  pharmaceutical: 'bg-emerald-500',
  food: 'bg-amber-500',
  industrial: 'bg-blue-500',
};

export default function Projects() {
  const { t, lang } = useLang();
  const [catFilter, setCatFilter] = useState<string>('all');

  const filtered = catFilter === 'all'
    ? projectItems
    : projectItems.filter((item) => item.cat === catFilter);

  const inquireUrl = (name: string) =>
    `https://wa.me/963962401221?text=${encodeURIComponent(
      `Hello Mr. Bashar, I am interested in similar work to: ${name}`
    )}`;

  const cats = ['all', 'pharmaceutical', 'food', 'industrial'] as const;

  return (
    <section id="projects" className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-gold-500 uppercase tracking-widest mb-3">
            {t.projects.title}
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            {t.projects.subtitle}
          </h3>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setCatFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                catFilter === cat
                  ? 'bg-navy-900 text-white shadow-lg'
                  : 'bg-white text-navy-600 hover:bg-navy-100 border border-navy-200'
              }`}
            >
              {cat === 'all'
                ? lang === 'en' ? 'All Projects' : 'جميع المشاريع'
                : t.projects.categories[cat as keyof typeof t.projects.categories]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const items = t.projects.items as Record<string, { name: string; desc: string }>;
            const name = items[item.nameKey].name;
            const desc = items[item.nameKey].desc;
            const Icon = catIcons[item.cat];
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden border border-navy-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <span
                    className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${catColors[item.cat]}`}
                  >
                    {t.projects.categories[item.cat as keyof typeof t.projects.categories]}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-gold-500" />
                    <h4 className="font-bold text-navy-900">{name}</h4>
                  </div>
                  <p className="text-sm text-navy-500 mb-4 line-clamp-3">{desc}</p>
                  <a
                    href={inquireUrl(name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-900 text-sm font-medium rounded-lg transition-all w-full justify-center"
                  >
                    <MessageCircle size={16} />
                    {t.projects.inquire}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
