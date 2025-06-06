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
  width: 50px;
  height: 50px;
  padding: 10px;
  position: fixed;
  bottom: 2rem;
  right: 3.5rem;
  z-index: 1000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    right: 1rem;
    bottom: 1rem;
    padding: 8px;
  }
`;

export const LandingLayout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;
  const title = page?.data?.seoTitle || "M-Elevadores";
  const description = page?.data?.seodescription || "-";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="canonical"
          href={`${activeDocMeta.sitename}${page ? `/${page.uid}` : ""}`}
        />
        {getMetaTags({
          description,
          title,
        })}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VJZB8M2VYD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-VJZB8M2VYD');`,
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
        <FaWhatsapp color="white" size={32} />
      </WhatsAppButton>

      <LandingFooter landingFooter={footer} />
    </>
  );
};
