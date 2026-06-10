import React, { useState } from 'react';

export default function Membership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting application:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-sky-600 transition-colors">Главная</a>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2.5 text-slate-300">/</span>
                <span className="text-slate-600 font-medium">Членство</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Хедер страницы */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Сотрудничество</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Членство в <span className="text-sky-600">Федерации</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Объединяем профессионалов для создания нового стандарта реабилитации в Казахстане.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Информационный блок слева */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Преимущества для членов Федерации</h2>
              <ul className="space-y-4">
                {[
                  "Участие в разработке национальных клинических протоколов реабилитации.",
                  "Доступ к образовательным программам, вебинарам и зарубежным стажировкам.",
                  "Льготные условия участия во всех конференциях КФФМР.",
                  "Профессиональный нетворкинг с ведущими неврологами и реабилитологами Казахстана и Южной Кореи."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Документы для скачивания */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Документы для вступления</h3>
              <div className="space-y-4">
                {[
                  { title: "Заявление о вступлении в Федерацию", format: "DOCX", size: "45 KB" },
                  { title: "Анкета кандидата в члены КФФМР", format: "PDF", size: "120 KB" }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-sky-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                        {doc.format}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">{doc.title}</div>
                        <div className="text-xs text-slate-400">{doc.size}</div>
                      </div>
                    </div>
                    <button className="p-2 text-sky-600 hover:text-sky-700 bg-white hover:bg-sky-50 rounded-lg border border-slate-200 hover:border-sky-200 shadow-sm transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Форма обратной связи справа */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Подать заявку на вступление</h2>
            {submitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center text-teal-800 animate-fade-in">
                <svg className="mx-auto h-12 w-12 text-teal-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">Ваша заявка принята!</h3>
                <p className="text-sm text-teal-600">Наш секретарь свяжется с вами по указанному email и телефону в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">ФИО</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow"
                    placeholder="name@organization.kz"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow"
                    placeholder="+7 (707) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="org" className="block text-sm font-semibold text-slate-700 mb-2">Организация</label>
                  <input
                    type="text"
                    id="org"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow"
                    placeholder="Название клиники или учреждения"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Оставить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
