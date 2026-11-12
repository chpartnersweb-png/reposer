import type { APIRoute } from 'astro';

export const prerender = true;

// Only actual, indexable pages belong here; section anchors are not pages.
const pagePaths = ['/'];
const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  "'": '&apos;',
})[character]!);

export const GET: APIRoute = ({ site }) => {
  const entries = pagePaths.map((path) => (
    `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`
  )).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
