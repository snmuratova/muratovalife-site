import { typo as displayTypography } from '../../../lib/typography';
import {notFound} from 'next/navigation';import {readCards} from '../../../lib/store';import Runner from './Runner';
export const dynamic='force-dynamic';
export default async function Page({params}){const {id}=await params;const c=(await readCards()).find(c=>c.id===id&&c.visible&&c.group==='tests');if(!c&&!['attention','memory'].includes(id))notFound();return <main className="section-shell section test-shell"><a href={c?.category==='career'?'/topics/career':'/topics/learn'}>{displayTypography(c?.category==='career'?'← Профориентация и карьерная стратегия':'← Помоги себе учиться')}</a><Runner id={id} card={c||null}/></main>}
