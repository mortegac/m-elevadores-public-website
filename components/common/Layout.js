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

const WhatsAppFab = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9998;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.45);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 24px rgba(37, 211, 102, 0.6);
  }

  svg {
    width: 32px;
    height: 32px;
    fill: #ffffff;
  }
`;

export const Layout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;

  const title = page?.data?.seoTitle || "M-Elevadores | Ascensores, Salvaescaleras y Plataformas en Chile";
  const description =
    page?.data?.seodescription ||
    "M-Elevadores — Líderes en instalación y mantenimiento de ascensores en Chile. Salvaescaleras y plataformas elevadoras certificadas. Cotiza gratis.";
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
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:30",
                },
              ],
              priceRange: "$$",
              sameAs: [
                "https://www.instagram.com/melevadores",
                "https://www.facebook.com/melevadores",
                "https://www.linkedin.com/company/m-elevadores",
              ],
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
        <WhatsAppFab
          href="https://api.whatsapp.com/send/?phone=56959382761&text=Necesito+informacion+desde+desde+melevadores.cl&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </WhatsAppFab>
      </Body>
    </>
  );
};
