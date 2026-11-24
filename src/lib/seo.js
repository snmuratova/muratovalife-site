export const siteUrl = 'https://muratovalife.ru';
export const homeTitle = 'Светлана Муратова — психолог | MuratovaLife';
export const homeDescription = 'Психология обучения и развития детей и подростков, профориентация, онлайн-опросники и практики эмоционального восстановления. Автор — психолог Светлана Муратова.';
const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
export function pageSeo(title, description, path, image) {
  const name = clean(title);
  const text = clean(description);
  const desc = text.length > 180 ? text.slice(0, 177).replace(/\s+\S*$/, '') + '…' : text;
  const url = siteUrl + path;
  const cover = typeof image === 'string' && /^\/(?!\/)/.test(image) ? siteUrl + image : siteUrl + '/images/svetlana-muratova.jpeg';
  return {title: name + ' | MuratovaLife', description: desc, alternates: {canonical: url}, openGraph: {title: name + ' | MuratovaLife', description: desc, url, siteName: 'MuratovaLife', locale: 'ru_RU', type: 'website', images: [{url: cover}]}};
}
export const noIndex = {robots: {index: false, follow: true}};
export const testExtras = {attention: {title:'Тренировка концентрации внимания', text:'Онлайн-задание для тренировки концентрации внимания.'}, memory:{title:'Тренировка зрительной памяти', text:'Онлайн-задание для тренировки зрительной памяти.'}};
export function materialIndexable(c) { return c && c.visible && ['learning','quality','free','blog','products'].includes(c.group) && c.id !== 'v13-life-0' && !c.id.startsWith('v14-') && !(typeof c.href === 'string' && c.href.startsWith('/')) && !!clean(c.body || c.text); }
