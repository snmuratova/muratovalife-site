'use client';
import {useEffect,useState} from 'react';

const DEFAULT_DAYS = [
  {
    "name": "Выдохни. Остановись.",
    "caption": "День 1 · Заметить себя",
    "duration": "8–10 минут",
    "lead": "В течение дня мы редко замечаем, как себя чувствуем. Сегодня попробуйте уделить немного времени себе, своим мыслям и ощущениям.",
    "steps": [
      "Устройтесь удобно и посмотрите вокруг. Найдите три предмета, на которых приятно задержать взгляд.",
      "Спросите себя: «Что я чувствую прямо сейчас?» Можно назвать несколько разных чувств.",
      "Откройте метафорическую карту. Рассмотрите изображение. Какая деталь первой привлекла ваше внимание? Какие чувства или ассоциации возникли?"
    ],
    "question": "Чего мне сегодня больше всего хочется?"
  },
  {
    "name": "Сосредоточься на ощущениях",
    "caption": "День 2 · Почувствовать опору",
    "duration": "7–10 минут",
    "lead": "Когда мыслей слишком много, можно ненадолго переключить внимание на простые телесные ощущения.",
    "steps": [
      "Поставьте обе стопы на пол. Отметьте, где тело соприкасается с опорой.",
      "Мягко расслабьте плечи и челюсть. Дышите в естественном, комфортном ритме.",
      "Потянитесь или пройдитесь несколько шагов, замечая движение."
    ],
    "question": "Что помогает моему телу почувствовать себя комфортнее?"
  },
  {
    "name": "Тишина",
    "caption": "День 3 · Создать пространство",
    "duration": "10 минут",
    "lead": "Иногда восстановление начинается с небольшого пространства, в котором от нас ничего не требуют.",
    "steps": [
      "Выберите место, где можно побыть без спешки хотя бы несколько минут.",
      "Уберите один источник лишнего шума или раздражения.",
      "Представьте место, в котором вам легко. Что в нём есть?"
    ],
    "question": "Что я могу изменить вокруг себя, чтобы стало чуть спокойнее?"
  },
  {
    "name": "Заметь и отпусти лишнее",
    "caption": "День 4 · Ослабить напряжение",
    "duration": "10–12 минут",
    "lead": "Не все задачи одинаково срочные. Некоторые ожидания можно пересмотреть, не отказываясь от важного.",
    "steps": [
      "Вспомните три дела, которые сейчас занимают ваши мысли.",
      "Распределите дела: важное и срочное; важное, но не срочное; срочное, но неважное; неважное и несрочное. Подумайте, в чём можно попросить помощи.",
      "Выберите одну необязательную задачу и разрешите себе не делать её сегодня."
    ],
    "question": "Что я могу не нести на себе в одиночку?"
  },
  {
    "name": "Тепло",
    "caption": "День 5 · Почувствовать связь",
    "duration": "10 минут",
    "lead": "Поддержка может быть очень простой: несколько слов, внимание, разговор или добрый жест по отношению к себе.",
    "steps": [
      "Вспомните человека, рядом с которым вам обычно спокойно и свободно.",
      "Если хочется, отправьте ему короткое сообщение без обязательства продолжать разговор.",
      "Скажите себе одну добрую фразу, которую сказали бы близкому человеку в похожей ситуации."
    ],
    "question": "Какая поддержка мне нужна сейчас?"
  },
  {
    "name": "Посмотри вокруг",
    "caption": "День 6 · Вернуть интерес",
    "duration": "10–15 минут",
    "lead": "Внимание к приятным мелочам не отменяет сложностей, но помогает замечать, что в дне есть не только обязанности.",
    "steps": [
      "Выберите небольшое приятное действие: музыку, прогулку, любимый напиток, чтение или наблюдение за природой.",
      "Побудьте с этим занятием без параллельных дел несколько минут.",
      "Отметьте, что именно вам понравилось: звук, запах, цвет, движение, ощущение."
    ],
    "question": "Какие простые вещи возвращают мне ощущение жизни?"
  },
  {
    "name": "Что дальше?",
    "caption": "День 7 · Сохранить важное",
    "duration": "12–15 минут",
    "lead": "Завершение ретрита не требует больших решений. Достаточно заметить, что оказалось полезным именно вам.",
    "steps": [
      "Вспомните предыдущие шесть дней. К какой практике хотелось бы вернуться?",
      "Выберите один небольшой ритуал, который реально повторить на следующей неделе.",
      "Подумайте, что поможет оставить для него место в расписании."
    ],
    "question": "Что я хочу взять с собой в обычную жизнь?"
  }
];
const STORE='muratovalife-retreat-v1';
export default function RetreatJourney({title,description,body,image,retreatDays}){
  const days = DEFAULT_DAYS.map((day,i)=>({
    ...day,
    caption: Array.isArray(retreatDays)&&retreatDays.length===7 ? (retreatDays[i]?.caption||day.caption) : day.caption,
    duration: Array.isArray(retreatDays)&&retreatDays.length===7 ? (retreatDays[i]?.duration||day.duration) : day.duration
  }));
  const [done,setDone]=useState([]);
  const [notes,setNotes]=useState({});
  const [ready,setReady]=useState(false);
  useEffect(()=>{try{const v=JSON.parse(localStorage.getItem(STORE)||'{}');if(Array.isArray(v.done))setDone(v.done.filter(n=>Number.isInteger(n)&&n>=0&&n<7));if(v.notes&&typeof v.notes==='object')setNotes(v.notes);}catch{}setReady(true);},[]);
  useEffect(()=>{if(ready)try{localStorage.setItem(STORE,JSON.stringify({done,notes}));}catch{}},[done,notes,ready]);
  const downloadNotes=()=>{
    const content=['Эмоциональный ретрит · Мои заметки','',...days.flatMap((day,i)=>[
      `День ${i+1}. ${day.name}`,`Вопрос: ${day.question}`,
      notes[i]?.trim()||'(нет записи)',done.includes(i)?'Отмечен как завершённый':'', ''
    ])].join('\n');
    const blob=new Blob(['\uFEFF'+content],{type:'text/plain;charset=utf-8'});
    const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='moi-zametki-retreat.txt';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  const toggle=i=>setDone(prev=>prev.includes(i)?prev.filter(x=>x!==i):[...prev,i]);
  return <main className="retreat-page">
    <section className="retreat-hero" style={{'--scene-image':`url("${image||'/images/retreat/landscape-lake.jpg'}")`}}>
      <div className="retreat-hero-wash"/>
      <div className="retreat-hero-content">
        <a className="retreat-back" href="/topics/life">← Качество жизни</a>
        <p className="retreat-kicker">MuratovaLife · 7 дней для себя</p>
        <h1>{title}</h1>
        <p className="retreat-intro">Семь дней, чтобы замедлиться, услышать себя и постепенно вернуть внимание к тому, что поддерживает.</p>
        <p className="retreat-description">{description||'Пространство глубокого эмоционального восстановления.'}</p>
        {body&&<p className="retreat-description">{body}</p>}
        <a className="retreat-start" href="#retreat-day-1">Начать практику <span aria-hidden="true">↓</span></a>
        <p className="retreat-hero-small">По 7–15 минут в день · В своём темпе · Без регистрации</p>
      </div>
    </section>
    <nav className="retreat-day-nav" aria-label="Переход к дням ретрита">
      <div className="retreat-nav-inner"><span>Ваш путь</span><div className="retreat-nav-days">{days.map((day,i)=><a href={'#retreat-day-'+(i+1)} key={i} aria-label={'День '+(i+1)+': '+day.name} className={done.includes(i)?'completed':''}>{String(i+1).padStart(2,'0')}</a>)}</div><span className="retreat-progress" aria-live="polite">{ready?done.length:0} из 7</span></div>
    </nav>
    {days.map((day,i)=><section className={'retreat-scene retreat-scene-'+(i+1)} id={'retreat-day-'+(i+1)} key={i}  aria-labelledby={'retreat-title-'+i}>
      <div className="retreat-scene-wash" />
      <div className="retreat-scene-content">
        <div className="retreat-day-text">
          <p className="retreat-kicker">{day.caption} · {day.duration}</p>
          <h2 id={'retreat-title-'+i}>{day.name}</h2>
          <p className="retreat-lead">{day.lead}</p>
          <h3>Практика дня</h3>
          <ol>{day.steps.map((step,j)=><li key={j}>{step}</li>)}</ol>
          {i===0&&<a className="retreat-resource" href="https://t.me/mak_practice_bot" target="_blank" rel="noopener noreferrer">Открыть метафорическую карту ↗</a>}
          {i===3&&<a className="retreat-resource" href="/practice/priorities">Практика расстановки приоритетов →</a>}
          <label htmlFor={'retreat-note-'+i} className="retreat-question">{day.question}</label>
          <textarea id={'retreat-note-'+i} rows="3" value={notes[i]||''} onChange={e=>setNotes(prev=>({...prev,[i]:e.target.value}))} placeholder="Мои мысли сегодня…" />
          <p className="retreat-private">Заметка хранится только в этом браузере на вашем устройстве.</p>
          <button type="button" className={'retreat-done'+(done.includes(i)?' is-done':'')} onClick={()=>toggle(i)} aria-pressed={done.includes(i)}>{done.includes(i)?'✓ День отмечен':'Завершить день'}</button>
        </div>
      </div>
    </section>)}
    <footer className="retreat-end" >
      <div className="retreat-end-content"><p className="retreat-kicker">Продолжение пути</p><h2 className="retreat-handwritten">Пусть у вас останется время для себя</h2><p>Возвращайтесь к любому дню, когда захочется. Здесь нет обязательного темпа и правильного способа чувствовать.</p><button type="button" className="retreat-download" onClick={downloadNotes}>Скачать мои заметки ↓</button><p className="retreat-private">Файл сохраняется на ваше устройство. Записи не отправляются администратору сайта.</p><a href="#retreat-day-1">Вернуться к первому дню ↑</a><p className="retreat-safety">Эти практики предназначены для самостоятельной эмоциональной поддержки и не заменяют психологическую или медицинскую помощь.</p></div>
    </footer>
  </main>;
}
