import {pageSeo} from "../../lib/seo";
export const metadata = pageSeo("Программы психолога и бесплатные онлайн-опросники", "Программы обучения и развития, профориентация, исследование сильных сторон и бесплатные практики.", "/catalog");
import { typo as displayTypography } from '../../lib/typography';
import { readCards } from "../../lib/store";
export const dynamic = "force-dynamic";


export default async function Page() {
  const cards = await readCards();
  const programs = cards.filter(c=>c.visible && c.group==="learning");
  const tests = cards.filter(c=>c.visible && c.group==="tests");
  const chosen = ["thinking","perception","career-explore","career-ready"].map(id=>tests.find(t=>t.id===id)).filter(Boolean);
  const extras = cards.filter(c=>c.visible && c.group==="free");
  return <main className="section-shell section catalog-landing">
    <a className="back-link" href="/">← Главная</a>
    <header className="catalog-heading"><p className="eyebrow">MuratovaLife · Продукты</p><h1>Узнайте свои сильные стороны</h1><p>Научно обоснованно · Конфиденциально · Практично</p></header>
    <section id="programs" className="catalog-section"><div className="section-heading"><span>01</span><h2>Программы и услуги</h2></div>
      <div className="learning-grid">{displayTypography(programs.map(c=><article className="service-card" key={c.id}><h3>{displayTypography(c.title)}</h3><p>{displayTypography(c.text)}</p><a className="catalog-card-link" href={`/material/${c.id}`}>Подробнее о программе →</a></article>))}</div>
    </section>
    <section id="explore" className="catalog-section catalog-free"><p className="eyebrow">Бесплатно и без регистрации</p><h2>Начните с исследования своих возможностей</h2><p className="catalog-free-intro">Узнайте больше о своих интересах, способностях и особенностях мышления. Это не тест, который за несколько минут определит вашу будущую профессию. Это возможность лучше понять себя, заметить сильные стороны и увидеть направления, которые стоит исследовать дальше.</p>
      <div className="catalog-free-grid">
        {displayTypography(chosen.map(c=><a className="catalog-free-item" key={c.id} href={`/test/${c.id}`}><h3>{displayTypography(c.title)}</h3><p>{displayTypography(c.text)}</p><span aria-hidden="true">→</span></a>))}
        <a className="catalog-free-item" href="/practice/priorities"><h3>Матрица Эйзенхауэра</h3><p>Практика расстановки приоритетов для учёбы, работы и повседневных задач.</p><span aria-hidden="true">→</span></a>
        {displayTypography(extras.map(c=><a className="catalog-free-item" key={c.id} href={c.href || `/material/${c.id}`}><h3>{displayTypography(c.title)}</h3><p>{displayTypography(c.text)}</p><span aria-hidden="true">→</span></a>))}
      </div>
      <a className="home-all-link" href="/topics/career">Все профориентационные опросники →</a>
    </section>
  </main>;
}
