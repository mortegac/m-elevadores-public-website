import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const SITE = "https://www.melevadores.cl";

function buildSitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

function urlEntry(loc, priority = "0.8", changefreq = "weekly") {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  try {
    const client = prismic.createClient(sm.apiEndpoint, {
      accessToken: sm.apiAccessToken,
    });

    const [pages, landings] = await Promise.all([
      client.getAllByType("page"),
      client.getAllByType("landingpage"),
    ]);

    const urls = [
      urlEntry(`${SITE}/`, "1.0", "daily"),
      ...pages.map((p) => urlEntry(`${SITE}/${p.uid}`, "0.8", "weekly")),
      ...landings.map((p) =>
        urlEntry(`${SITE}/landing/${p.uid}`, "0.6", "monthly")
      ),
    ];

    const xml = buildSitemap(urls);

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
    res.write(xml);
    res.end();
  } catch (err) {
    res.statusCode = 500;
    res.end();
  }

  return { props: {} };
}
