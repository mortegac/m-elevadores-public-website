import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/common/Layout";
import { PRODUCTS, CATEGORIES } from "../../lib/products";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";
const WHATSAPP_URL =
  "https://wa.me/56959382761?text=Hola%2C%20necesito%20ayuda%20para%20elegir%20un%20producto";

const CATEGORY_COLORS = {
  salvaescaleras: "#0066CC",
  plataformas: "#00897B",
  ascensores: "#243C70",
  modernizacion: "#E65100",
};

const CATEGORY_BG = {
  salvaescaleras: "#E3F0FF",
  plataformas: "#E0F2F1",
  ascensores: "#E8EBF5",
  modernizacion: "#FFF3E0",
};

// ─── Layout primitives ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  background: #f8fafc;
  font-family: Quicksand, sans-serif;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = styled.section`
  background: #243c70;
  padding: 56px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 0 36px;
  }
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.45);
  }
`;

const HeroH1 = styled.h1`
  font-family: Quicksand, sans-serif;
  font-size: 52px;
  font-weight: 800;
  line-height: 60px;
  && { color: #ffffff; }
  margin: 0 0 16px;

  @media (max-width: 960px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  && { color: rgba(255, 255, 255, 0.85); }
  margin: 0 0 28px;
  max-width: 560px;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`;

const StatChip = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 5px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
`;

// ─── Category filter bar ──────────────────────────────────────────────────────

const FilterBarOuter = styled.div`
  position: sticky;
  top: 65px;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0, 17, 51, 0.06);

  @media (max-width: 1000px) {
    top: 57px;
  }
`;

const FilterBarInner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  height: 60px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterPill = styled.button`
  flex-shrink: 0;
  height: 36px;
  padding: 0 18px;
  border-radius: 18px;
  font-family: Quicksand, sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border-color 0.18s;
  white-space: nowrap;
  border: 1.5px solid;

  ${({ active }) =>
    active
      ? css`
          background: #0066cc;
          color: #ffffff;
          border-color: #0066cc;
        `
      : css`
          background: #ffffff;
          color: #243c70;
          border-color: #cbd5e1;

          &:hover {
            border-color: #0066cc;
            color: #0066cc;
          }
        `}
`;

// ─── Product grid ─────────────────────────────────────────────────────────────

const GridSection = styled.section`
  padding: 48px 0;

  @media (max-width: 960px) {
    padding: 32px 0;
  }
`;

const GridHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 8px;
`;

const GridTitle = styled.p`
  font-size: 15px;
  color: #605e5c;
  font-weight: 600;
  margin: 0;

  strong {
    color: #001133;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// ─── Product card ─────────────────────────────────────────────────────────────

const Card = styled.article`
  background: #f7f8fa;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 17, 51, 0.07);
  border: 1.5px solid #e8ecf2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 102, 204, 0.13);
    border-color: #0066cc;
  }
`;

const CardImageArea = styled.div`
  position: relative;
  height: 200px;
  background: ${({ color }) => color || "#E8EBF5"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const CategoryIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ color }) => color || "#0066CC"};
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  font-family: Quicksand, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 4px;
  padding: 3px 8px;
`;

const PromoBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #0066cc;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  font-family: Quicksand, sans-serif;
  border-radius: 4px;
  padding: 3px 8px;
`;

const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardCategory = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: ${({ color }) => color || "#0066CC"};
  margin-bottom: 8px;
  display: block;
`;

const CardTitle = styled.h3`
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  color: #001133;
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #605e5c;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SpecsRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const SpecChip = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #eef2f8;
  border-radius: 6px;
  padding: 4px 9px;
  font-size: 12px;
  font-weight: 600;
  color: #243c70;
  white-space: nowrap;
`;

const SpecIcon = styled.span`
  font-size: 13px;
  line-height: 1;
`;

const PriceLabel = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #001133;
  margin-bottom: 16px;
  margin-top: auto;
`;

const CardActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const BtnSecondary = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 22px;
  border: 1.5px solid #243c70;
  background: transparent;
  color: #243c70;
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border-color 0.18s;
  white-space: nowrap;

  &:hover {
    background: #243c70;
    color: #ffffff;
  }
`;

const BtnPrimary = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 22px;
  background: #0066cc;
  border: 1.5px solid #0066cc;
  color: #ffffff;
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s;
  white-space: nowrap;

  &:hover {
    background: #0055aa;
    border-color: #0055aa;
  }
`;

// ─── Trust strip ──────────────────────────────────────────────────────────────

const TrustStrip = styled.section`
  background: #ffffff;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 28px 0;
`;

const TrustList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 960px) {
    justify-content: flex-start;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 8px 16px;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
`;

const TrustIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const TrustText = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #001133;
  white-space: nowrap;
`;

const TrustDivider = styled.span`
  color: #cbd5e1;
  font-size: 18px;
  flex-shrink: 0;

  @media (max-width: 960px) {
    display: none;
  }
`;

// ─── CTA section ─────────────────────────────────────────────────────────────

const CtaSection = styled.section`
  background: #f7f8fa;
  padding: 56px 0;

  @media (max-width: 960px) {
    padding: 40px 0;
  }
`;

const CtaInner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

const CtaHeading = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 64px;
  && { color: #323130; }
  margin: 0 0 12px;
  text-align: center;

  @media (max-width: 960px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const CtaSubtext = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  && { color: #605e5c; }
  margin: 0 0 28px;
  text-align: center;
`;

const CtaButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CtaBtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  height: 46px;
  padding: 0 28px;
  border-radius: 22px;
  background: #0066cc;
  color: #ffffff;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.18s;
  white-space: nowrap;

  &:hover {
    background: #0055aa;
  }
`;

const CtaBtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  height: 46px;
  padding: 0 28px;
  border-radius: 22px;
  background: transparent;
  border: 1.5px solid #243c70;
  color: #243c70;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.18s, color 0.18s;
  white-space: nowrap;

  &:hover {
    background: #243c70;
    color: #ffffff;
  }
`;

// ─── Category icon mapping ────────────────────────────────────────────────────

const CATEGORY_ICONS = {
  salvaescaleras: "♿",
  plataformas: "🔼",
  ascensores: "🏢",
  modernizacion: "🔧",
};

const CATEGORY_LABELS = {
  salvaescaleras: "Salvaescaleras",
  plataformas: "Plataforma",
  ascensores: "Ascensor",
  modernizacion: "Modernización",
};

const TRUST_SIGNALS = [
  { icon: "✅", text: "Certificado Ley 20.296" },
  { icon: "🗺️", text: "Instalación en todo Chile" },
  { icon: "🏆", text: "+25 años de experiencia" },
  { icon: "🔍", text: "Visita técnica gratis" },
  { icon: "💳", text: "Financiamiento disponible" },
];

// ─── JSON-LD helpers ─────────────────────────────────────────────────────────

function buildItemListJsonLd(products) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de Productos M-Elevadores",
    description:
      "Catálogo completo de salvaescaleras, plataformas elevadoras y ascensores en Chile.",
    url: `${SITE}/catalogo`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        url: `${SITE}/catalogo/${product.slug}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "CLP",
          description: product.priceRange,
          seller: {
            "@type": "Organization",
            name: "M-Elevadores",
          },
        },
      },
    })),
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProductCard({ product }) {
  const catColor = CATEGORY_COLORS[product.category] || "#0066CC";
  const catBg = CATEGORY_BG[product.category] || "#E8EBF5";
  const catIcon = CATEGORY_ICONS[product.category] || "🔼";
  const catLabel = CATEGORY_LABELS[product.category] || product.category;

  const cotizarHref = `https://wa.me/56959382761?text=Hola%2C%20quiero%20cotizar%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <Card>
      <CardImageArea color={product.image ? "#f0f0f0" : catBg}>
        {product.image
          ? <CardImg src={product.image} alt={product.name} loading="lazy" />
          : <CategoryIcon>{catIcon}</CategoryIcon>
        }
        <CategoryBadge color={catColor}>{catLabel}</CategoryBadge>
        {product.badge && <PromoBadge>{product.badge}</PromoBadge>}
      </CardImageArea>

      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>

        <SpecsRow>
          <SpecChip>
            <SpecIcon>⏱</SpecIcon>
            {product.specs["Tiempo de instalación"] || product.installTime}
          </SpecChip>
          <SpecChip>
            <SpecIcon>⚖️</SpecIcon>
            {product.specs["Carga máxima"]}
          </SpecChip>
          <SpecChip>
            <SpecIcon>👤</SpecIcon>
            {product.audienceShort}
          </SpecChip>
        </SpecsRow>

        <PriceLabel>{product.priceRange}</PriceLabel>

        <CardActions>
          <Link href={`/catalogo/${product.slug}`} passHref>
            <BtnSecondary>Ver detalles</BtnSecondary>
          </Link>
          <BtnPrimary href={cotizarHref} target="_blank" rel="noopener noreferrer">
            Cotizar
          </BtnPrimary>
        </CardActions>
      </CardBody>
    </Card>
  );
}

// ─── Page component ───────────────────────────────────────────────────────────

const PAGE_TITLE =
  "Catálogo de Productos | Ascensores y Salvaescaleras | M-Elevadores Chile";
const PAGE_DESCRIPTION =
  "Catálogo completo de salvaescaleras, plataformas elevadoras y ascensores en Chile. 8 productos certificados. Cotización gratis.";

const CatalogoPage = ({ menu, footer, products, categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filterBarRef = useRef(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const activeCategoryLabel =
    activeCategory === "all"
      ? "todos los productos"
      : categories.find((c) => c.id === activeCategory)?.label || activeCategory;

  const canonicalUrl = `${SITE}/catalogo`;

  const activeDoc = {
    lang: "es-cl",
    type: "page",
    url: "/catalogo",
    sitename: SITE,
  };

  const fakePage = {
    data: {
      seoTitle: PAGE_TITLE,
      seodescription: PAGE_DESCRIPTION,
    },
    lang: "es-cl",
    type: "page",
    url: "/catalogo",
    uid: "catalogo",
    slugs: ["catalogo"],
  };

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildItemListJsonLd(products)),
          }}
        />
      </Head>

      <Layout
        header={menu || {}}
        footer={footer || {}}
        page={fakePage}
        activeDocMeta={activeDoc}
      >
        <PageWrapper>
          {/* ── Hero ─────────────────────────────────────────────────── */}
          <Hero>
            <Container>
              <Breadcrumb aria-label="Navegación de migas de pan">
                <Link href="/">
                  <a>Inicio</a>
                </Link>
                <span aria-hidden="true">›</span>
                <span aria-current="page">Catálogo</span>
              </Breadcrumb>

              <HeroH1>Catálogo de Productos</HeroH1>
              <HeroSubtitle>
                Soluciones de accesibilidad y elevación para cada necesidad
              </HeroSubtitle>

              <StatsRow>
                <StatChip>8 productos</StatChip>
                <StatChip>4 categorías</StatChip>
                <StatChip>Certificados MINVU</StatChip>
                <StatChip>Instalación en Chile</StatChip>
              </StatsRow>
            </Container>
          </Hero>

          {/* ── Category filter bar ───────────────────────────────────── */}
          <FilterBarOuter ref={filterBarRef} role="navigation" aria-label="Filtro por categoría">
            <FilterBarInner>
              {categories.map((cat) => (
                <FilterPill
                  key={cat.id}
                  active={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                  {cat.count > 0 && cat.id !== "all" && (
                    <> ({cat.count})</>
                  )}
                </FilterPill>
              ))}
            </FilterBarInner>
          </FilterBarOuter>

          {/* ── Product grid ──────────────────────────────────────────── */}
          <GridSection aria-label="Listado de productos">
            <Container>
              <GridHeader>
                <GridTitle>
                  Mostrando{" "}
                  <strong>
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "producto" : "productos"}
                  </strong>{" "}
                  en {activeCategoryLabel}
                </GridTitle>
              </GridHeader>

              <ProductGrid>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </ProductGrid>
            </Container>
          </GridSection>

          {/* ── Trust strip ───────────────────────────────────────────── */}
          <TrustStrip aria-label="Señales de confianza">
            <Container>
              <TrustList>
                {TRUST_SIGNALS.map((signal, index) => (
                  <React.Fragment key={signal.text}>
                    <TrustItem>
                      <TrustIcon aria-hidden="true">{signal.icon}</TrustIcon>
                      <TrustText>{signal.text}</TrustText>
                    </TrustItem>
                    {index < TRUST_SIGNALS.length - 1 && (
                      <TrustDivider aria-hidden="true">·</TrustDivider>
                    )}
                  </React.Fragment>
                ))}
              </TrustList>
            </Container>
          </TrustStrip>

          {/* ── CTA section ───────────────────────────────────────────── */}
          <CtaSection>
            <CtaInner>
              <CtaHeading>¿No sabes cuál producto necesitas?</CtaHeading>
              <CtaSubtext>
                Responde 3 preguntas y te recomendamos la solución ideal para tu
                escalera, presupuesto y necesidad.
              </CtaSubtext>
              <CtaButtons>
                <Link href="/guia-de-compra" passHref>
                  <CtaBtnPrimary>Usar la Guía de Compra →</CtaBtnPrimary>
                </Link>
                <CtaBtnSecondary
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar con un experto
                </CtaBtnSecondary>
              </CtaButtons>
            </CtaInner>
          </CtaSection>
        </PageWrapper>
      </Layout>
    </>
  );
};

// ─── Data fetching ────────────────────────────────────────────────────────────

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData });

    const [menu, footer] = await Promise.all([
      client.getSingle("menutop").catch(() => ({})),
      client.getSingle("footermenu").catch(() => ({})),
    ]);

    return {
      props: {
        menu,
        footer,
        products: PRODUCTS,
        categories: CATEGORIES,
      },
      revalidate: 300,
    };
  } catch (error) {
    return {
      props: {
        menu: {},
        footer: {},
        products: PRODUCTS,
        categories: CATEGORIES,
        error: JSON.stringify(error),
      },
      revalidate: 300,
    };
  }
}

export default CatalogoPage;
