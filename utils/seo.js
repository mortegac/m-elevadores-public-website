import { linkResolver } from "../prismicio";

export const getAlternates = ({ alternate_languages, sitename }) => {
  return alternate_languages.map((page, i) => (
    <link
      key={i}
      hrefLang={page.lang}
      rel="alternate"
      href={`${sitename}${linkResolver(page)}/`}
    />
  ));
};

const OG_IMAGE =
  "https://images.prismic.io/m-elevadores/Ztovabzzk9ZrXEZc_SEO-melevadores.png";

const FALLBACK_DESCRIPTION =
  "M-Elevadores — Plataformas salvaescaleras para personas con movilidad reducida en Chile.";

export const getMetaTags = ({ description, title, url }) =>
  [
    {
      name: "description",
      content: description || FALLBACK_DESCRIPTION,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: "@melevadores",
    },
    {
      name: "twitter:title",
      content: title || "M-Elevadores",
    },
    {
      name: "twitter:description",
      content: description || FALLBACK_DESCRIPTION,
    },
    {
      name: "twitter:image",
      content: OG_IMAGE,
    },
    {
      property: "og:title",
      content: title || "M-Elevadores",
    },
    {
      property: "og:description",
      content: description || FALLBACK_DESCRIPTION,
    },
    {
      property: "og:url",
      content: url || "https://www.melevadores.cl",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: OG_IMAGE,
    },
    {
      property: "og:image:alt",
      content: "M-Elevadores — Salvaescaleras y plataformas elevadoras Chile",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:site_name",
      content: "M-Elevadores",
    },
    {
      property: "og:locale",
      content: "es_CL",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "keywords",
      content:
        "ascensores, salvaescaleras, plataformas elevadoras, accesibilidad, movilidad reducida, Chile",
    },
  ].map((attrs, i) => <meta key={`meta-${i}`} {...attrs} />);

export const getTitle = ({ type, title }) => title.replace(/['"]+/g, "");
