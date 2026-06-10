import React from 'react';

const articles = [
  {
    id: 1,
    title: "В Алматы открылся Казахстанско-Корейский образовательный центр реабилитационной медицины",
    source: "Pharmaceutical Reviews Казахстан",
    url: "https://www.pharmreviews.kz/novosti/novosti-kazahstana/v-almaty-otkrylsya-kazahstansko-korejskij-obrazovatelnyj-tsentr-reabilitatsionnoj-meditsiny",
    date: "11 Ноября 2022",
    logoPlaceholder: "PR"
  },
  {
    id: 2,
    title: "Единая цифровая экосистема здравоохранения охватила свыше 21 тысячи медорганизаций",
    source: "Вечерний Алматы",
    url: "https://vecher.kz/ru/article/edinaya-tsifrovaya-ekosistema-zdravoohraneniya-ohvatila-svyshe-21-tysyachi-medorganizatsii.html",
    date: "05 Июня 2023",
    logoPlaceholder: "ВА"
  },
  {
    id: 3,
    title: "Реабилитация — это важно: проблемы и перспективы развития отрасли в Казахстане",
    source: "Новое Поколение",
    url: "https://np.kz/news/obshhestvo/zdorove-mediczina/reabilitacziya-eto-vazhno",
    date: "14 Сентября 2023",
    logoPlaceholder: "НП"
  }
];

const videos = [
  {
    id: 1,
    title: "Интервью о роботизированной реабилитации и применении экзоскелетов ExoAtlet",
    youtubeId: "xxj4vkzgWOY"
  },
  {
    id: 2,
    title: "Мастер-класс КФФМР: новые технологии физической терапии",
    youtubeId: "gd2vsQ8AbJA"
  }
];

export default function PressMedia() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-sky-600 transition-colors">Главная</a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2.5 text-slate-300">/</span>
                <span className="text-slate-400">Пресс-центр</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2.5 text-slate-300">/</span>
                <span className="text-slate-600 font-medium">СМИ о нас</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Заголовок */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Пресс-центр</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            СМИ о <span className="text-sky-600">нас</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Актуальные публикации, репортажи и видеоматериалы о деятельности нашей Федерации.
          </p>
        </div>

        {/* Публикации в прессе */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b pb-4 flex items-center">
            <span className="w-2 h-6 bg-teal-500 rounded-full mr-3"></span>
            Статьи и публикации
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Хедер карточки */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{article.date}</span>
                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center font-bold text-sky-600 border border-sky-100 text-xs">
                      {article.logoPlaceholder}
                    </div>
                  </div>
                  {/* Название издания */}
                  <div className="text-sm font-semibold text-teal-600 mb-2">{article.source}</div>
                  {/* Заголовок статьи */}
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-3 mb-4 leading-snug">
                    {article.title}
                  </h3>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-sky-200 text-sm font-medium rounded-xl text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white transition-colors duration-200"
                  >
                    Читать источник
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Видеоматериалы */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b pb-4 flex items-center">
            <span className="w-2 h-6 bg-teal-500 rounded-full mr-3"></span>
            Видео-репортажи
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-rose-600 text-xs font-semibold uppercase tracking-wider mb-2">
                    <span className="w-2.5 h-2.5 bg-rose-600 rounded-full animate-pulse"></span>
                    <span>YouTube Видео</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
