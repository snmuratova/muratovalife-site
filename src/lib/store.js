import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import defaults from './defaults.json';
import seed from './tests.json';
import additions from './additions.json';
const dir=()=>process.env.CMS_DATA_DIR || '/app/data';
const removed=c=>c.id==='blog-new-4'||(c.group==='blog'&&c.title.trim()==='Из практики');
export async function readCards(){let cards;try{cards=JSON.parse(await fs.readFile(path.join(dir(),'cards.json'),'utf8'));}catch(e){if(e.code==='ENOENT')cards=defaults;else throw e;}const migrated=cards.filter(c=>!removed(c)).map(c=>({...c,category:c.category||({ 'blog-new-0':'learn','blog-new-1':'grow','blog-new-2':'life','blog-new-3':'stories'}[c.id]||''),title:c.id==='blog-new-0'?'Помоги себе учиться':c.id==='blog-new-3'?'Сказкотерапия':c.title}));for(const c of migrated){const fresh=additions.find(a=>a.id===c.id);if(fresh?.id.startsWith("v13-grow-")&&!c.body)Object.assign(c,fresh); }let ids=new Set(migrated.map(c=>c.id));return [...migrated,...[...seed,...additions].filter(c=>!ids.has(c.id))];}
export async function saveCards(cards){await fs.mkdir(dir(),{recursive:true});const tmp=path.join(dir(),randomUUID()+'.tmp');await fs.writeFile(tmp,JSON.stringify(cards),{mode:0o600});await fs.rename(tmp,path.join(dir(),'cards.json'));}
