import Home from "./Home";
import { readCards } from "../lib/store";
export const dynamic = "force-dynamic";

function chooseFeatured(cards) {
  const blogs = cards.filter(c => c.visible && c.group === "blog");
  const picked = blogs.filter(c => c.featuredOnHome);
  const asArticle = c => ({id:c.id,title:c.title,text:c.text || "",href:c.href || `/material/${c.id}`,label:"Статья"});
  if (picked.length >= 3) return picked.slice(0,3).map(asArticle);
  const five = blogs.find(c => c.id === "v13-grow-3") || blogs.find(c => /^(пять|5) лет$/i.test(c.title.trim()));
  const perception = blogs.find(c => c.id === "blog-home-perception") || blogs.find(c => /как я воспринимаю информацию/i.test(c.title));
  const stories = blogs.find(c => c.id === "blog-home-stories") || blogs.find(c => c.title.trim().toLowerCase() === "сказкотерапия");
  const defaults = [
    five ? {...asArticle(five),title:"5 лет"} : {id:"five",title:"5 лет",text:"О развитии и особенностях пятилетнего возраста.",href:"/topics/grow",label:"Возраст"},
    perception ? {...asArticle(perception),label:"Опросник"} : {id:"perception",title:"Как я воспринимаю информацию",text:"Исследование индивидуальных особенностей восприятия.",href:"/test/perception",label:"Опросник"},
    stories ? {...asArticle(stories),label:"Раздел блога"} : {id:"stories",title:"Сказкотерапия",text:"Истории, которые помогают говорить о чувствах и переживаниях.",href:"/topics/stories",label:"Раздел блога"},
  ];
  return [...picked.map(asArticle),...defaults.filter(c=>!picked.some(x=>x.id===c.id))].slice(0,3);
}
export default async function Page() {
  const cards = await readCards();
  return <Home cards={cards.filter(c=>c.visible)} featuredArticles={chooseFeatured(cards)}/>;
}
