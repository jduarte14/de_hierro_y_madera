const SiteMap = () => {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>https://dehierroymadera.com.uy/</loc>
        <lastmod>2023-06-14T21:50:38+00:00</lastmod>
      </url>
    </urlset>`;

  return (
    <div>
      <pre>{sitemapContent}</pre>
    </div>
  );
};

export default SiteMap;
