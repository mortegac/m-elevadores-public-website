import Head from "next/head";
import styled from "styled-components";

import { PageContainer } from "../common/Containers";
import { Header as Navbar } from "../common/Header";
import Footer from "../common/footer";
import { linkResolver } from "../../prismicio";
import { getMetaTags } from "../../utils/seo";
/**
 * The default layout for all pages.
 */

export const Body = styled.body`
  background-color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.secondary};
`;

export const Layout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;

  const title = page?.data?.seoTitle || "M-Elevadores";
  const description =
    page?.data?.seodescription ||
    "M-Elevadores — Plataformas salvaescaleras para personas con movilidad reducida en Chile.";
  const canonicalUrl = `${activeDocMeta.sitename}${linkResolver(page)}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />
        {getMetaTags({ description, title, url: canonicalUrl })}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.melevadores.cl/#business",
              name: "M-Elevadores",
              url: "https://www.melevadores.cl",
              telephone: "+56959382761",
              email: "contacto@melevadores.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Marchant Pereira 150 of 1002",
                addressLocality: "Providencia",
                addressRegion: "Región Metropolitana",
                addressCountry: "CL",
              },
              areaServed: { "@type": "Country", name: "Chile" },
              image:
                "https://images.prismic.io/m-elevadores/Ztovabzzk9ZrXEZc_SEO-melevadores.png",
            }),
          }}
        />
      </Head>
      <Body>
        <PageContainer>
          <Navbar
            header={header}
            pagename={page ? (page.uid ? page.uid : page.slugs[0]) : "Home"}
            lang={page.lang || "es-cl"}
            activeDocMeta={activeDocMeta}
          />
          {children}
          {/* <pre>footer{JSON.stringify(footer, 2, null)}</pre> */}
          <Footer items={footer} />
        </PageContainer>
      </Body>
    </>
  );
};
