import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/common/Layout";
import { TESTIMONIALS } from "../../lib/testimonials";
import { PRODUCTS } from "../../lib/products";
import CotizacionBanner from "../../components/common/CotizacionBanner";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";
const WHATSAPP_URL =
  "https://wa.me/56959382761?text=Hola%2C%20quiero%20agendar%20una%20visita%20técnica%20gratuita";

const PRODUCT_COLORS = {
  "salvaescaleras-recto-solo": "#0066CC",
  "salvaescaleras-curvo-flex": "#0066CC",
  "plataforma-vertical-dignity": "#00897B",
  "ascensor-residencial-home": "#243C70",
  "modernizacion-replus": "#E65100",
};

const PRODUCT_BG_COLORS = {
  "salvaescaleras-recto-solo": "#E3F0FF",
  "salvaescaleras-curvo-flex": "#E3F0FF",
  "plataforma-vertical-dignity": "#E0F2F1",
  "ascensor-residencial-home": "#E8EBF5",
  "modernizacion-replus": "#FFF3E0",
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
  && {
    color: #ffffff;
  }
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
  && {
    color: rgba(255, 255, 255, 0.85);
  }
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

// ─── Testimonials grid ────────────────────────────────────────────────────────

const GridSection = styled.section`
  padding: 56px 0;

  @media (max-width: 960px) {
    padding: 40px 0;
  }
`;

const TestimonialsGrid = styled.div`
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

// ─── Testimonial card ─────────────────────────────────────────────────────────

const Card = styled.article`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 17, 51, 0.07);
  border: 1.5px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 102, 204, 0.13);
    border-color: #0066cc;
  }
`;

const CardImageSquare = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background: ${({ bg }) => bg || "#E8EBF5"};
  flex-shrink: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProductTag = styled.span`
  display: inline-block;
  background: ${({ bg }) => bg || "#E3F0FF"};
  color: ${({ color }) => color || "#0066CC"};
  font-size: 11px;
  font-weight: 700;
  font-family: Quicksand, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 20px;
  padding: 3px 10px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

const StarRating = styled.div`
  font-size: 16px;
  color: #e0a100;
  letter-spacing: 1px;
  margin-bottom: 10px;
  line-height: 1;
`;

const Quote = styled.blockquote`
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  line-height: 26px;
  && {
    color: #001133;
  }
  margin: 0 0 16px;
  padding: 0;
  flex: 1;
`;

const CardDivider = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 0 0 14px;
`;

const PersonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const PersonName = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #243c70;
  font-family: Quicksand, sans-serif;
`;

const PersonMeta = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #605e5c;
`;

// ─── Products section ─────────────────────────────────────────────────────────

const ProductsSection = styled.section`
  background: #ffffff;
  padding: 56px 0;

  @media (max-width: 960px) {
    padding: 40px 0;
  }
`;

const ProductsSectionTitle = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 40px;
  && { color: #001133; }
  margin: 0 0 8px;
  text-align: center;
`;

const ProductsSectionSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  && { color: #605e5c; }
  margin: 0 0 40px;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: #0066cc;
    box-shadow: 0 4px 16px rgba(0, 102, 204, 0.1);
  }
`;

const ProductCardImg = styled.img`
  width: 72px;
  height: 56px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  background: #e8ecf2;
`;

const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const ProductCardName = styled.span`
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #001133;
  line-height: 1.3;
`;

const ProductCardCategory = styled.span`
  font-family: Quicksand, sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #0066cc;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

// ─── CTA section ─────────────────────────────────────────────────────────────

const CtaSection = styled.section`
  background: #243c70;
  padding: 64px 0;

  @media (max-width: 960px) {
    padding: 48px 0;
  }
`;

const CtaInner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

const CtaHeading = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 36px;
  font-weight: 800;
  line-height: 44px;
  text-align: center;
  && {
    color: #ffffff;
  }
  margin: 0 0 16px;

  @media (max-width: 960px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const CtaSubtext = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  && {
    color: rgba(255, 255, 255, 0.85);
  }
  margin: 0 0 32px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 960px) {
    font-size: 16px;
  }
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
  height: 50px;
  padding: 0 32px;
  border-radius: 25px;
  background: #25d366;
  color: #ffffff;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.18s;
  white-space: nowrap;

  &:hover {
    background: #1ebe59;
  }
`;

const CtaBtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 32px;
  border-radius: 25px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.18s, border-color 0.18s;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
  }
`;

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

function buildAggregateRatingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "M-Elevadores",
    url: SITE,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "4000",
    },
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stars({ count }) {
  return <StarRating aria-label={`${count} estrellas`}>{"★".repeat(count)}</StarRating>;
}

function TestimonialCard({ testimonial }) {
  const tagColor = PRODUCT_COLORS[testimonial.productSlug] || "#0066CC";
  const tagBg = PRODUCT_BG_COLORS[testimonial.productSlug] || "#E3F0FF";
  const imageBg = tagBg;

  return (
    <Card>
      <CardImageSquare bg={imageBg}>
        <img
          src={testimonial.image}
          alt={`${testimonial.who} — ${testimonial.product}`}
          loading="lazy"
        />
      </CardImageSquare>

      <CardBody>
        <ProductTag color={tagColor} bg={tagBg}>
          {testimonial.product}
        </ProductTag>

        <Stars count={testimonial.rating} />

        <Quote>"{testimonial.quote}"</Quote>

        <CardDivider />

        <PersonRow>
          <PersonName>{testimonial.who}</PersonName>
          <PersonMeta>
            {testimonial.role} · {testimonial.city}
          </PersonMeta>
        </PersonRow>
      </CardBody>
    </Card>
  );
}

// ─── Page component ───────────────────────────────────────────────────────────

const PAGE_TITLE =
  "Testimonios | Historias Reales de Clientes | M-Elevadores Chile";
const PAGE_DESCRIPTION =
  "Historias reales de familias chilenas que recuperaron la movilidad con M-Elevadores. +4.000 instalaciones, 25 años de experiencia, calificación 4,9★.";

const TestimoniosPage = ({ menu, footer }) => {
  const canonicalUrl = `${SITE}/testimonios`;

  const activeDoc = {
    lang: "es-cl",
    type: "page",
    url: "/testimonios",
    sitename: SITE,
  };

  const fakePage = {
    data: {
      seoTitle: PAGE_TITLE,
      seodescription: PAGE_DESCRIPTION,
    },
    lang: "es-cl",
    type: "page",
    url: "/testimonios",
    uid: "testimonios",
    slugs: ["testimonios"],
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
            __html: JSON.stringify(buildAggregateRatingJsonLd()),
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
                <span aria-current="page">Testimonios</span>
              </Breadcrumb>

              <HeroH1>
                Más de 4.000 familias han recuperado la movilidad
              </HeroH1>
              <HeroSubtitle>
                Desde 1999 acompañamos a familias, condominios y empresas en
                Chile. Estas son algunas de sus historias.
              </HeroSubtitle>

              <StatsRow>
                <StatChip>4.000+ instalaciones</StatChip>
                <StatChip>25 años de experiencia</StatChip>
                <StatChip>Calificación 4,9 ★</StatChip>
                <StatChip>98% recomiendan</StatChip>
              </StatsRow>
            </Container>
          </Hero>

          {/* ── Testimonials grid ─────────────────────────────────────── */}
          <GridSection aria-label="Testimonios de clientes">
            <Container>
              <TestimonialsGrid>
                {TESTIMONIALS.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.slug}
                    testimonial={testimonial}
                  />
                ))}
              </TestimonialsGrid>
            </Container>
          </GridSection>

          {/* ── Cotización exprés ────────────────────────────────────── */}
          <CotizacionBanner products={[]} />

          {/* ── Catálogo de productos ─────────────────────────────── */}
          <ProductsSection>
            <Container>
              <ProductsSectionTitle>Nuestros productos</ProductsSectionTitle>
              <ProductsSectionSubtitle>
                Soluciones de accesibilidad y elevación certificadas para cada necesidad
              </ProductsSectionSubtitle>
              <ProductsGrid>
                {PRODUCTS.map((product) => (
                  <Link key={product.slug} href={`/catalogo/${product.slug}`} passHref>
                    <ProductCard>
                      {product.image ? (
                        <ProductCardImg
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          width="72"
                          height="56"
                        />
                      ) : (
                        <ProductCardImg
                          as="div"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}
                        />
                      )}
                      <ProductCardInfo>
                        <ProductCardName>{product.name}</ProductCardName>
                        <ProductCardCategory>{product.category}</ProductCardCategory>
                      </ProductCardInfo>
                    </ProductCard>
                  </Link>
                ))}
              </ProductsGrid>
            </Container>
          </ProductsSection>

          {/* ── CTA section ───────────────────────────────────────────── */}
          <CtaSection>
            <CtaInner>
              <CtaHeading>¿Quieres ser la próxima historia?</CtaHeading>
              <CtaSubtext>
                Agenda una visita técnica gratuita y sin compromiso. En 48
                horas tendrás una solución personalizada para tu hogar o
                edificio.
              </CtaSubtext>
              <CtaButtons>
                <CtaBtnPrimary
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar visita por WhatsApp
                </CtaBtnPrimary>
                <Link href="/catalogo" passHref>
                  <CtaBtnSecondary>Ver catálogo de productos</CtaBtnSecondary>
                </Link>
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
      },
      revalidate: 300,
    };
  } catch (error) {
    return {
      props: {
        menu: {},
        footer: {},
      },
      revalidate: 300,
    };
  }
}

export default TestimoniosPage;
