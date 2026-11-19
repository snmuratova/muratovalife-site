import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import defaults from './defaults.json';
const dir=()=>process.env.CMS_DATA_DIR || '/app/data';
export async function readCards(){try{return JSON.parse(await fs.readFile(path.join(dir(),'cards.json'),'utf8'));}catch(e){if(e.code==='ENOENT')return defaults;throw e;}}
export async function saveCards(cards){await fs.mkdir(dir(),{recursive:true});const tmp=path.join(dir(),randomUUID()+'.tmp');await fs.writeFile(tmp,JSON.stringify(cards),{mode:0o600});await fs.rename(tmp,path.join(dir(),'cards.json'));}
