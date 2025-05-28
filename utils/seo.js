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

// Open Graph tags
export const getMetaTags = ({ description, author, title }) =>
  [
    {
      name: `description`,
      content: description || dummy(""),
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: "@melevadores",
    },
    {
      name: `twitter:title`,
      content: title || dummy(""),
    },
    {
      name: `twitter:description`,
      content: description || dummy(""),
    },
    {
      property: `og:title`,
      content: title || dummy(""),
    },
    {
      property: `og:description`,
      content: description || dummy(""),
    },
    {
      property: `og:url`,
      content: "https://melevadores.cl",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `og:image`,
      content:
        "https://images.prismic.io/m-elevadores/Ztovabzzk9ZrXEZc_SEO-melevadores.png",
    },
    {
      name: `og:image:alt`,
      content: "melevadores.cl",
    },
    {
      name: `og:image:width`,
      content: "1200",
    },
    {
      name: `og:image:height`,
      content: "630",
    },
    {
      name: `og:site_name`,
      content: "melevadores",
    },
    {
      name: `viewport`,
      content:
        "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1",
    },
    {
      name: `keywords`,
      content:
        "Comercializamos plataformas salvaescaleras que son soluciones de accesibilidad ideales para personas con movilidad reducida. Estos dispositivos motorizados permiten subir y bajar escaleras de forma segura y cómoda.",
    },
  ].map((items, i) => <meta key={`meta-${i}`} {...items}></meta>);

export const dummy = (content = "") => [
  {
    text: content,
    type: "heading 1",
    spans: [],
  },
];

export const getTitle = ({ type, title }) => title.replace(/['"]+/g, "");
