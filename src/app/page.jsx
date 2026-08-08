"use client";

import Image from "next/image";

function Icon({ name }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    person: <><circle cx="12" cy="7" r="3"/><path d="M5.5 20c.7-4.4 3-7 6.5-7s5.8 2.6 6.5 7"/></>,
    document: <><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 12h5M10 16h5"/></>,
    spark: <><path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11"/></>,
    brain: <><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v1a3 3 0 0 0-2 2.8A3.2 3.2 0 0 0 7.2 15H9v-10.5Z"/><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v1a3 3 0 0 1 2 2.8A3.2 3.2 0 0 1 16.8 15H15v-10.5Z"/><path d="M9 19a3 3 0 0 0 3-3V8M15 19a3 3 0 0 1-3-3"/></>,
    signpost: <><path d="M12 21V3"/><path d="M12 6H5l-2 2 2 2h7M12 12h7l2 2-2 2h-7"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20V7"/></>,
    leaf: <><path d="M19 4C11 4 5 8.5 5 15c0 3 2 5 5 5 6.5 0 9-8 9-16Z"/><path d="M5 20c2-5 6-8 11-10"/></>,
    moon: <><path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m4 17 5-5 4 4 2-2 5 4"/></>,
    heart: <><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
    telegram: <><path d="M21 3 3.8 10.2c-.8.3-.8 1.5.1 1.8l4.5 1.5 1.5 4.5c.3.9 1.5.9 1.8.1L21 3Z"/><path d="m8.4 13.5 5.2-5.2"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const learningCards = [
  { icon: "person", title: "Индивидуальная стратегия обучения и развития", text: "Комплексный подход к способностям, мышлению и личным особенностям." },
  { icon: "document", title: "Паспорт обучения ребёнка", text: "Итоговый документ с выводами и рекомендациями для обучения и развития." },
  { icon: "spark", title: "Творческая лаборатория", text: "Развитие креативности, воображения и гибкости мышления." },
  { icon: "brain", title: "Развитие критического мышления", text: "Анализ, аргументация и умение принимать обоснованные решения." },
  { icon: "signpost", title: "Профориентация и карьерная стратегия", text: "Поиск направления и построение личного маршрута." },
  { icon: "chart", title: "Методики", text: "Используем высоковалидные психологические и диагностические методики." },
];

const qualityCards = [
  { icon: "leaf", title: "Эмоциональный ретрит", text: "Пространство глубокого эмоционального восстановления." },
  { icon: "moon", title: "Спокойно", text: "Практики для снижения тревоги и внутреннего напряжения." },
  { icon: "image", title: "Метафорические образы", text: "Работа с подсознанием через образы и символы." },
  { icon: "heart", title: "Тёплая психология", text: "Поддержка, понимание и бережное сопровождение." },
];

function ArrowButton({ label, href, external = false }) {
  if (href) {
    return (
      <a
        className="arrow-button"
        href={href}
        aria-label={label}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        <Icon name="arrow" />
      </a>
    );
  }

  return <button className="arrow-button" type="button" aria-label={label}><Icon name="arrow" /></button>;
}

export default function Home() {
  function handleContactSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Сообщение с MuratovaLife${name ? ` — ${name}` : ""}`);
    const body = encodeURIComponent(`Имя: ${name}\nКонтакт для ответа: ${contact}\n\nЗапрос:\n${message}`);
    window.location.href = `mailto:snmuratova@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">MuratovaLife</a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#top">Главная</a><a href="#products">Продукты</a><a href="#free-materials">Бесплатные материалы</a><a href="#blog">Блог</a><a href="#about">Обо мне</a><a href="#contacts">Контакты</a>
        </nav>
        <a className="primary-button header-button" href="#contacts">Связаться</a>
        <button className="menu-button" aria-label="Открыть меню"><Icon name="menu" /></button>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-photo">
          <Image src="/images/svetlana-muratova.jpeg" alt="Светлана Муратова, психолог" fill priority sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="hero-content">
          <div className="hero-signature">
            <span className="hero-name">Светлана Муратова</span>
            <span className="hero-role">Психолог</span>
          </div>
          <h1>Наше восприятие определяет качество нашей жизни</h1>
          <p className="hero-subtitle">Рада приветствовать вас на сайте.</p>
          <div className="hero-directions">
            <article className="direction-card direction-learning">
              <span className="icon-circle"><Icon name="person" /></span>
              <div><h2>Обучение и развитие</h2><p>Помогаю понять причины учебных трудностей и выстроить подходящую ребёнку стратегию обучения и развития.</p></div>
              <ArrowButton label="Перейти к обучению и развитию" href="#learning" />
            </article>
            <article className="direction-card direction-quality">
              <span className="icon-circle"><Icon name="heart" /></span>
              <div><h2>Качество жизни</h2><p>Пространство эмоционального восстановления.</p></div>
              <ArrowButton label="Перейти к качеству жизни" href="#quality" />
            </article>
          </div>
        </div>
      </section>

      <section id="products" className="section section-shell"><div id="learning" className="anchor-offset" aria-hidden="true" />
        <div className="section-heading"><span>01</span><h2>Обучение и развитие</h2></div>
        <div className="learning-grid">
          {learningCards.map((card) => <article className="service-card" key={card.title}><span className="icon-circle"><Icon name={card.icon} /></span><h3>{card.title}</h3><p>{card.text}</p><ArrowButton label={`Открыть: ${card.title}`} /></article>)}
        </div>
      </section>

      <section id="quality" className="section section-shell quality-section">
        <div className="section-heading"><span>02</span><h2>Качество жизни</h2></div>
        <div className="quality-grid">
          {qualityCards.map((card, index) => {
            const links = {
              "Спокойно": "https://t.me/spokoino_online_bot",
              "Метафорические образы": "https://t.me/mak_practice_bot",
              "Тёплая психология": "https://t.me/teplaya_psihologiya",
            };
            const href = links[card.title];

            return (
              <article className={`quality-card quality-${index + 1}`} key={card.title}>
                <span className="icon-circle"><Icon name={card.icon} /></span>
                <div><h3>{card.title}</h3><p>{card.text}</p></div>
                <ArrowButton label={`Открыть: ${card.title}`} href={href} external={Boolean(href)} />
              </article>
            );
          })}
        </div>
      </section>

      <section id="free-materials" className="section section-shell">
        <div className="section-heading"><span>03</span><h2>Бесплатные материалы</h2></div>
        <div className="free-grid">
          <article className="free-card">
            <span className="icon-circle"><Icon name="moon" /></span>
            <div>
              <h3>Спокойно</h3>
              <p>Практики для снижения тревоги и внутреннего напряжения.</p>
            </div>
            <ArrowButton label="Открыть бот «Спокойно»" href="https://t.me/spokoino_online_bot" external />
          </article>

          <article className="free-card">
            <span className="icon-circle"><Icon name="image" /></span>
            <div>
              <h3>Метафорические образы</h3>
              <p>Образы и практики для размышлений и внутреннего отклика.</p>
            </div>
            <ArrowButton label="Открыть бот «Метафорические образы»" href="https://t.me/mak_practice_bot" external />
          </article>
        </div>
      </section>

      <section id="blog" className="section section-shell blog-section">
        <div className="section-heading"><span>04</span><h2>Блог</h2></div>
        <article className="blog-card">
          <div>
            <h3>Тёплая психология</h3>
            <p>Материалы о психологии, качестве жизни, обучении и восстановлении.</p>
          </div>
          <ArrowButton label="Перейти в Telegram-канал «Тёплая психология»" href="https://t.me/teplaya_psihologiya" external />
        </article>
      </section>

      <section className="section section-shell bottom-grid">
        <article id="cases" className="wide-card">
          <div>
            <h2>Из практики</h2>
          </div>
          <ArrowButton label="Открыть раздел «Из практики»" />
        </article>

        <article id="about" className="wide-card powder">
          <div className="about-content">
            <h2>Обо мне</h2>
            <h3 className="about-name">Светлана Муратова</h3>
            <p>Я создаю индивидуальные стратегии обучения, развития и восстановления.</p>
            <div className="about-socials" aria-label="Социальные сети">
              <a className="social-link" href="https://instagram.com/muratovalife" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
              <a className="social-link" href="https://t.me/teplaya_psihologiya" target="_blank" rel="noopener noreferrer" aria-label="Telegram — Тёплая психология"><Icon name="telegram" /></a>
            </div>
          </div>
          <ArrowButton label="Подробнее обо мне" />
        </article>

        <article id="contacts" className="wide-card sage contact-card">
          <div>
            <h2>Связаться со мной</h2>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label><span>Имя</span><input name="name" type="text" autoComplete="name" /></label>
              <label><span>Email или Telegram</span><input name="contact" type="text" required /></label>
              <label><span>Ваш запрос</span><textarea name="message" rows="4" required /></label>
              <button className="primary-button form-button" type="submit">Отправить</button>
            </form>
          </div>
        </article>
      </section>

      <footer className="site-footer section-shell"><span>MuratovaLife</span><span>© 2026 Светлана Муратова</span></footer>
    </main>
  );
}
