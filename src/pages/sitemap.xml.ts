import type { APIRoute } from 'astro';

const site = 'https://muebleriacasablanca.cl';

// Páginas principales con prioridad y frecuencia
const pages = [
  { url: '', priority: 1.0, changefreq: 'daily' }, // Home
  { url: '/cocinas', priority: 0.9, changefreq: 'weekly' },
  { url: '/closets', priority: 0.9, changefreq: 'weekly' },
  { url: '/muebles-a-medida', priority: 0.9, changefreq: 'weekly' },
  { url: '/conocenos', priority: 0.8, changefreq: 'monthly' },
  { url: '/proyectos', priority: 0.8, changefreq: 'weekly' },
  { url: '/proceso-creativo', priority: 0.7, changefreq: 'monthly' },
  { url: '/cocina-moderna', priority: 0.8, changefreq: 'monthly' },
  { url: '/cocina-tradicional', priority: 0.8, changefreq: 'monthly' },
  { url: '/cocina-tope-de-linea', priority: 0.8, changefreq: 'monthly' },
  { url: '/iluminacion-de-cocinas', priority: 0.7, changefreq: 'monthly' },
  { url: '/tiradores-de-cocina-modernos', priority: 0.7, changefreq: 'monthly' },
  { url: '/almacenamiento', priority: 0.7, changefreq: 'monthly' },
  { url: '/cajones', priority: 0.7, changefreq: 'monthly' },
  { url: '/puertas-para-muebles', priority: 0.7, changefreq: 'monthly' },
  { url: '/privacidad', priority: 0.5, changefreq: 'yearly' },
  { url: '/privacidad-cocinas', priority: 0.5, changefreq: 'yearly' },
  { url: '/privacidad-closets', priority: 0.5, changefreq: 'yearly' },
  { url: '/privacidad-muebles', priority: 0.5, changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};


