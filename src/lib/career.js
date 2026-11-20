export const CAREER_STORAGE_KEY='muratovalife-career-results-v1';
export const careerIds=['temperament-teen','holland','klimov','thinking','perception'];
export function careerTests(cards){return careerIds.map(id=>cards.find(c=>c.id===id&&c.visible&&c.group==='tests')).filter(Boolean);}
export function careerTitle(c){return ({thinking:'Мышление и креативность',perception:'Особенности восприятия','temperament-teen':'Тип темперамента',e:'Тип темперамента (детская версия)','career-explore':'Профессиональные интересы: саморефлексия'})[c.id]||c.title;}
