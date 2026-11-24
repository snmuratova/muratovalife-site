import {pageSeo} from "../../lib/seo";
export const metadata = pageSeo("Обучение и развитие детей и подростков", "Возрастные особенности, стратегии обучения, развитие способностей и профессиональный выбор.", "/topics");
import { typo as displayTypography } from '../../lib/typography';
import {topics} from '../../lib/topics';
export default function Page(){return <main className="section-shell section"><a href="/">← MuratovaLife</a><h1>Обучение и развитие</h1><div className="learning-grid topic-directory">{displayTypography(Object.entries(topics).slice(0,4).map(([id,t])=><article className="service-card" key={id}><h2>{displayTypography(t.title)}</h2><p>{displayTypography(t.parts.slice(0,3).join(' · '))}</p><a href={'/topics/'+id}>Открыть →</a></article>))}</div></main>}
