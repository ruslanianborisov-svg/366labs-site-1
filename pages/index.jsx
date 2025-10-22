import React from "react";
import Head from "next/head";

export default function Landing366Labs() {
  const whatsapp = "https://wa.me/79999999999?text=Здравствуйте!%20Хочу%20сдать%20анализы%20на%20дому";
  const phone = "+7 (999) 999-99-99";
  const phoneHref = "tel:+79999999999";

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Head>
        <title>366 Лабс — анализы и чекапы на дому | Москва и область</title>
        <meta name="description" content="Выезд медсестры, без очередей, результаты онлайн. Анализы крови и чекапы у вас дома или в офисе. Записывайтесь в WhatsApp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Анализы и чекапы на дому</h1>
        <p className="text-lg text-slate-600 mb-6">Лаборатория 366 Лабс — без очередей и клиник. Медсестра приедет к вам домой, результаты будут онлайн.</p>
        <a href={whatsapp} className="inline-block px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700 transition">Записаться в WhatsApp</a>
        <div className="mt-8 text-slate-500">{phone}</div>
      </main>
    </div>
  );
}
