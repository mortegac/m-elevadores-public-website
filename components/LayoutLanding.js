import Head from "next/head";
import styled from "styled-components";
import LandingNav from "./common/LandingNav/LandingNav";
import LandingFooter from "./common/LandingFooter/LandingFooter";
import { getMetaTags } from "../utils/seo";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34d039;
  border-radius: 10px;
  width: fit-content;
  padding: 5px;
  position: fixed;
  bottom: 2rem;
  right: 3.5rem;
  z-index: 1000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    display: block;
    right: 1rem;
    bottom: 1rem;
  }
`;

export const LandingLayout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;
  const title = page?.data?.seoTitle || "M-Elevadores";
  const description =
    page?.data?.seodescription ||
    "M-Elevadores — Plataformas salvaescaleras para personas con movilidad reducida en Chile.";
  const canonicalUrl = `${activeDocMeta.sitename}/landing/${page?.uid ?? ""}`;

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
              "@type": "Service",
              "@id": `${canonicalUrl}#service`,
              name: title,
              provider: { "@id": "https://www.melevadores.cl/#business" },
              areaServed: { "@type": "Country", name: "Chile" },
              serviceType: "Venta e instalación de equipos de accesibilidad",
            }),
          }}
        />
      </Head>

      <LandingNav landingNav={header} />
      <main>{children}</main>

      <WhatsAppButton
        href="https://api.whatsapp.com/send?phone=56959382761&text=Hola,%20Quiero%20cotizar%20mi%20proyecto%20con%20ustedes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp color="white" size={40} />
      </WhatsAppButton>

      <LandingFooter landingFooter={footer} />
    </>
  );
};
