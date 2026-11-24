import {readCards} from '../lib/store';
import {topics} from '../lib/topics';
import {siteUrl, materialIndexable, testExtras} from '../lib/seo';
export const dynamic = 'force-dynamic';
export default async function sitemap() {
  const cards = await readCards();
  const paths = ['/', '/catalog', '/blog', '/topics', '/practice/priorities', ...Object.keys(topics).map(id => '/topics/'+id), ...Object.keys(testExtras).map(id => '/test/'+id)];
  for (const c of cards) {
    if (!c.visible || !/^[a-zA-Z0-9_-]+$/.test(c.id)) continue;
    if (c.group === 'tests') paths.push('/test/'+c.id);
    else if (materialIndexable(c)) paths.push('/material/'+c.id);
  }
  return [...new Set(paths)].map(path => ({url: siteUrl+path}));
}
