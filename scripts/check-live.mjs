import assert from 'node:assert/strict';

const origin = process.env.SITE_URL || 'https://miguel-carretero-portfolio.miguel-carretero.workers.dev';
const routes = [
  { path: '/', title: 'Miguel Carretero — Product, operations &amp; AI' },
  { path: '/projects/gestor-aramis/', title: 'Gestor Aramis — Miguel Carretero' },
  { path: '/projects/editorial-cockpit/', title: 'Editorial Cockpit — Miguel Carretero' },
];

for (const route of routes) {
  const url = new URL(route.path, origin);
  const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  assert.equal(response.status, 200, `${route.path} must return 200`);
  assert.match(response.headers.get('content-type') || '', /text\/html/);
  const html = await response.text();
  assert.ok(html.includes(route.title), `${route.path} must contain its page title`);
  assert.ok(html.includes(`href="${url.href}"`), `${route.path} must contain its canonical URL`);
  assert.ok(html.includes(new URL('/social-card.png', origin).href), 'Social image must use the public origin');
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  console.log(`PASS ${route.path}: HTML, title, canonical, social image and headers`);
}

for (const asset of [
  { path: '/resume/miguel-carretero-cv-en.pdf', type: /application\/pdf/ },
  { path: '/social-card.png', type: /image\/png/ },
]) {
  const response = await fetch(new URL(asset.path, origin), { method: 'HEAD', signal: AbortSignal.timeout(15000) });
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') || '', asset.type);
  console.log(`PASS ${asset.path}: public asset and expected content type`);
}

const sitemapResponse = await fetch(new URL('/sitemap.xml', origin));
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
for (const route of routes) assert.ok(sitemap.includes(new URL(route.path, origin).href));
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
const robotsResponse = await fetch(new URL('/robots.txt', origin));
assert.equal(robotsResponse.status, 200);
assert.ok((await robotsResponse.text()).includes(new URL('/sitemap.xml', origin).href));
console.log('PASS sitemap and robots: only published pages, matching origin');

const missing = await fetch(new URL('/release-check-missing-page/', origin));
assert.equal(missing.status, 404, 'Unknown pages must return 404, not the home page');
const missingHtml = await missing.text();
assert.ok(missingHtml.includes('Page not found — Miguel Carretero'));
assert.ok(missingHtml.includes('noindex'));
console.log('PASS unknown route: custom 404 and noindex');
