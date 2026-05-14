import React from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import styled, { css } from "styled-components";

import { createClient } from "../prismicio";
import { asText } from "@prismicio/helpers";
import { components } from "../slices/index";
import { Layout } from "../components/common/Layout";
import { PRODUCTS } from "../lib/products";
import EmblaCarousel from "../components/common/EmblaCarousel";
import CotizacionBanner from "../components/common/CotizacionBanner";

/* ─────────────────────────────────────────────
   Shared tokens (DESIGN.md)
───────────────────────────────────────────── */
const COLOR = {
  navy: "#243C70",
  blue: "#0066CC",
  blueHover: "#0052A3",
  dark: "#001133",
  muted: "#605E5C",
  bg: "#F8FAFC",
  white: "#FFFFFF",
  border: "#E2E8F0",
  textPrimary: "#323130",
};

const containerStyle = css`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

const sectionPadding = css`
  padding: 64px 0;
  @media (max-width: 959px) {
    padding: 20px 1.25rem;
  }
`;

/* ─────────────────────────────────────────────
   Section 2 — Featured Products Grid
───────────────────────────────────────────── */
const ProductsSection = styled.section`
  background-color: ${COLOR.bg};
`;

const ProductsInner = styled.div`
  ${containerStyle}
  ${sectionPadding}
`;

const SectionTitle = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: ${COLOR.dark};
  text-align: center;
  margin: 0 0 8px 0;

  @media (max-width: 959px) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled.p`
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${COLOR.muted};
  text-align: center;
  margin: 0 0 48px 0;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 959px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background: ${COLOR.white};
  border: 1px solid ${COLOR.border};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 20px rgba(36, 60, 112, 0.14);
  }
`;

const CardImageArea = styled.div`
  height: 180px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background-color: ${({ bgColor }) => bgColor || COLOR.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const CardBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const CATEGORY_META = {
  salvaescaleras: { color: "#E8F4FD", text: "#0066CC", emoji: "🛗",  label: "Salvaescaleras" },
  plataformas:    { color: "#EDF7F0", text: "#1A7A3B", emoji: "♿",  label: "Plataforma" },
  ascensores:     { color: "#EEF2FF", text: "#3B47CC", emoji: "🏢",  label: "Ascensor" },
  modernizacion:  { color: "#FFF3E0", text: "#BF6000", emoji: "🔧",  label: "Modernización" },
  montacargas:    { color: "#FFF3E0", text: "#FF6F00", emoji: "📦",  label: "Montacargas" },
  alzahombres:    { color: "#E8F5E9", text: "#1B5E20", emoji: "🦺",  label: "Alza Hombres" },
  escaleras:      { color: "#F3E5F5", text: "#6A1B9A", emoji: "🏗️", label: "Escalera Mecánica" },
};

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-family: Quicksand, sans-serif;
  font-size: 12px;
  font-weight: 700;
  background-color: ${({ meta }) => meta?.color || "#F0F0F0"};
  color: ${({ meta }) => meta?.text || COLOR.muted};
  align-self: flex-start;
`;

const CardName = styled.h3`
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${COLOR.dark};
  margin: 0;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  font-family: Quicksand, sans-serif;
  font-size: 14px;
  color: ${COLOR.muted};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
`;

const CardPrice = styled.span`
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: ${COLOR.textPrimary};
`;

const CardActions = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 16px 16px;
  margin-top: auto;
`;

const CardBtnOutline = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  border-radius: 22px;
  border: 1.5px solid ${COLOR.navy};
  color: ${COLOR.navy};
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  min-height: 48px;

  &:hover {
    background-color: ${COLOR.navy};
    color: ${COLOR.white};
  }
`;

const CardBtnFill = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  border-radius: 22px;
  background-color: ${COLOR.blue};
  color: ${COLOR.white};
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s;
  min-height: 48px;

  &:hover {
    background-color: ${COLOR.blueHover};
  }
`;

function buildWhatsApp(productName) {
  const text = encodeURIComponent(
    `Hola, me interesa cotizar: ${productName}. ¿Pueden enviarme información?`
  );
  return `https://api.whatsapp.com/send/?phone=56959382761&text=${text}&type=phone_number&app_absent=0`;
}

function FeaturedProducts() {
  return (
    <ProductsSection>
      <ProductsInner>
        <SectionTitle>Productos destacados</SectionTitle>
        <SectionSubtitle>
          Soluciones certificadas para cada necesidad de accesibilidad y
          elevación.
        </SectionSubtitle>
        <ProductsGrid>
          {PRODUCTS.map((product) => {
            const meta = CATEGORY_META[product.category];
            return (
              <ProductCard key={product.slug}>
                <CardImageArea bgColor={meta?.color}>
                  {product.image ? (
                    <CardImage
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  ) : (
                    meta?.emoji
                  )}
                </CardImageArea>
                <CardBody>
                  <CategoryBadge meta={meta}>
                    {meta?.label || product.category}
                  </CategoryBadge>
                  <CardName>{product.name}</CardName>
                  <CardDesc>{product.description}</CardDesc>
                </CardBody>
                <CardActions>
                  <CardBtnOutline href={`/catalogo/${product.slug}`}>
                    Ver detalles
                  </CardBtnOutline>
                  <CardBtnFill
                    href={buildWhatsApp(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar
                  </CardBtnFill>
                </CardActions>
              </ProductCard>
            );
          })}
        </ProductsGrid>
      </ProductsInner>
    </ProductsSection>
  );
}

/* ─────────────────────────────────────────────
   Page Component
───────────────────────────────────────────── */
const OG_IMAGE =
  "https://images.prismic.io/m-elevadores/Ztovabzzk9ZrXEZc_SEO-melevadores.png";

const SEO_TITLE =
  "M-Elevadores | Ascensores, Salvaescaleras y Plataformas en Chile";
const SEO_DESCRIPTION =
  "Líderes en mantenimiento, reparación e instalación de ascensores multimarca en Chile. Salvaescaleras, plataformas elevadoras y modernización. Cotiza gratis.";

const Home = (props) => {
  if (props.error) {
    return <>{console.error(props, "index")}</>;
  }

  const { page, menu, footer } = props;
  const { lang, type, url } = page;

  const activeDoc = {
    lang,
    type,
    url,
    sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost",
  };

  const pageTitle = page?.data?.seoTitle || SEO_TITLE;
  const pageDescription = page?.data?.seodescription || SEO_DESCRIPTION;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="M-Elevadores — Salvaescaleras y ascensores Chile"
        />
        <meta property="og:url" content="https://www.melevadores.cl" />
        <meta property="og:site_name" content="M-Elevadores" />
        <meta property="og:locale" content="es_CL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:creator" content="@melevadores" />
      </Head>
      <Layout
        header={menu || {}}
        footer={footer || {}}
        page={page}
        activeDocMeta={activeDoc}
      >
        <h1 style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}>
          Ascensores, Salvaescaleras y Plataformas Elevadoras en Chile
        </h1>
        <EmblaCarousel />
        <SliceZone slices={page?.data?.slices} components={components} />
        <FeaturedProducts />
        <CotizacionBanner products={PRODUCTS} />
      </Layout>
    </div>
  );
};

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getSingle("homepage");
    } catch (error) {
      page = await client.getSingle("homepage");
    }
    let menu;
    try {
      menu = await client.getSingle("menutop");
    } catch (error) {
      menu = await client.getSingle("menutop");
    }

    let footer;
    try {
      footer = await client.getSingle("footermenu");
    } catch (error) {
      footer = await client.getSingle("footermenu");
    }

    return {
      props: {
        page,
        menu,
        footer,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify(error),
      },
    };
  }
}

export default Home;
