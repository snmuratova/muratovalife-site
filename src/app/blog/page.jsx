import {pageSeo} from "../../lib/seo";
export const metadata = pageSeo("Блог психолога", "Статьи о развитии детей, обучении, профориентации, сказкотерапии и качестве жизни.", "/blog");
import { typo as displayTypography } from '../../lib/typography';
import {topics} from '../../lib/topics';import {readCards} from '../../lib/store';
export const dynamic='force-dynamic';
export default async function Page(){const other=(await readCards()).filter(c=>c.visible&&c.group==='blog'&&!c.category);return <main className="section-shell section"><a href="/">← Главная</a><h1>Блог</h1><div className="learning-grid">{displayTypography(Object.entries(topics).map(([id,t])=><article className="service-card" key={id}><h3>{displayTypography(t.title)}</h3><p>{displayTypography(t.parts.slice(0,3).join(' · '))}</p><a href={'/topics/'+id}>Открыть →</a></article>))}{displayTypography(other.map(c=><article className="service-card" key={c.id}><h3>{displayTypography(c.title)}</h3><p>{displayTypography(c.text)}</p><a href={c.href || '/material/'+c.id}>Открыть →</a></article>))}</div></main>}
