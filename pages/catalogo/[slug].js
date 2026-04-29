import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/common/Layout";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "../../lib/products";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";
const PHONE = "56959382761";
const PHONE_DISPLAY = "+56 9 5938 2761";

// ---------------------------------------------------------------------------
// Category colours used for the image placeholder
// ---------------------------------------------------------------------------
const CATEGORY_COLORS = {
  salvaescaleras: "#243C70",
  plataformas: "#0066CC",
  ascensores: "#001133",
  modernizacion: "#605E5C",
};

const CATEGORY_ICONS = {
  salvaescaleras: "🪜",
  plataformas: "♿",
  ascensores: "🛗",
  modernizacion: "🔧",
};

// ---------------------------------------------------------------------------
// Layout wrappers
// ---------------------------------------------------------------------------
const PageWrapper = styled.div`
  background: #f8fafc;
  font-family: Quicksand, sans-serif;
  min-height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

const BreadcrumbBar = styled.nav`
  background: #fff;
  border-bottom: 1px solid #e8ecf0;
  padding: 12px 0;
`;

const BreadcrumbList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #605e5c;

  &:last-child {
    color: #243c70;
    font-weight: 600;
  }

  a {
    color: #605e5c;
    text-decoration: none;

    &:hover {
      color: #0066cc;
    }
  }
`;

const BreadcrumbSep = styled.span`
  color: #a19f9d;
  font-size: 14px;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  padding: 40px 0 64px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 24px 0 100px;
  }
`;

// ---------------------------------------------------------------------------
// Left column
// ---------------------------------------------------------------------------
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

// Hero block
const HeroBlock = styled.div`
  background: #243c70;
  border-radius: 16px;
  padding: 36px 40px 40px;
  color: #fff;

  @media (max-width: 960px) {
    padding: 28px 24px 32px;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 20px;
  padding: 4px 14px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #fff;
`;

const ProductTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  margin: 0 0 12px;
  color: #fff;

  @media (max-width: 960px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Tagline = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 960px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const AudienceChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const AudienceChip = styled.span`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

// Image placeholder
const ImagePlaceholder = styled.div`
  height: 380px;
  background: ${(props) => props.bgColor || "#243c70"};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 960px) {
    height: 260px;
  }
`;

const CategoryIconLarge = styled.span`
  font-size: 80px;
  line-height: 1;
  opacity: 0.85;

  @media (max-width: 960px) {
    font-size: 60px;
  }
`;

const ImagePlaceholderLabel = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.03em;
`;

// Long description section
const ContentSection = styled.section`
  background: #fff;
  border-radius: 16px;
  padding: 36px 40px;

  @media (max-width: 960px) {
    padding: 24px 20px;
  }
`;

const SectionHeading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #001133;
  margin: 0 0 16px;

  @media (max-width: 960px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const LongDescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #323130;
  margin: 0 0 24px;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #323130;
  line-height: 22px;
`;

const CheckIcon = styled.span`
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  background: #0066cc;
  border-radius: 50%;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
`;

// Specs table
const SpecsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 4px;
`;

const SpecRow = styled.tr`
  background: ${(props) => (props.even ? "#f8fafc" : "#fff")};
`;

const SpecLabel = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #605e5c;
  width: 45%;
  border-bottom: 1px solid #e8ecf0;
`;

const SpecValue = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #001133;
  border-bottom: 1px solid #e8ecf0;
`;

// FAQ accordion
const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const FaqItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e8ecf0;
  margin-bottom: 8px;
`;

const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  background: ${(props) => (props.isOpen ? "#f0f6ff" : "#fff")};
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.isOpen ? "#0066cc" : "#001133")};
  line-height: 22px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: #f0f6ff;
    color: #0066cc;
  }
`;

const ChevronIcon = styled.span`
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 700;
  color: #0066cc;
  transition: transform 0.2s;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  display: inline-block;
`;

const FaqAnswer = styled.div`
  padding: ${(props) => (props.isOpen ? "0 20px 16px" : "0 20px")};
  max-height: ${(props) => (props.isOpen ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.25s ease, padding 0.15s;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: #323130;
`;

// ---------------------------------------------------------------------------
// Right column — sticky sidebar
// ---------------------------------------------------------------------------
const RightColumn = styled.div`
  position: sticky;
  top: 89px; /* 65px nav height + 24px gap */

  @media (max-width: 1000px) {
    top: 81px; /* 57px nav mobile + 24px gap */
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const QuoteCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 17, 51, 0.1);
  padding: 28px 24px 24px;
`;

const QuoteCardProductName = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #605e5c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 6px;
`;

const PriceRange = styled.p`
  font-size: 26px;
  font-weight: 800;
  color: #0066cc;
  margin: 0 0 14px;
  line-height: 32px;
`;

const FreeVisitBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #1a7f4b;
  background: #e8f8ef;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 20px;
`;

const GreenTick = styled.span`
  width: 18px;
  height: 18px;
  background: #1a7f4b;
  border-radius: 50%;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CTAButtonPrimary = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 46px;
  background: #0066cc;
  border-radius: 22px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  transition: background 0.15s;
  border: none;
  cursor: pointer;

  &:hover {
    background: #087df3;
  }
`;

const CTAButtonSecondary = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 46px;
  background: #fff;
  border: 2px solid #243c70;
  border-radius: 22px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #243c70;
  text-decoration: none;
  margin-bottom: 16px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: #243c70;
    color: #fff;
  }
`;

const InstallTimeChip = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 600;
  color: #323130;
  margin-bottom: 14px;
`;

const TrustBadge = styled.div`
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #605e5c;
  padding-top: 8px;
  border-top: 1px solid #e8ecf0;
`;

// ---------------------------------------------------------------------------
// Mobile sticky bottom bar
// ---------------------------------------------------------------------------
const MobileStickyBar = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    gap: 12px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 -4px 20px rgba(0, 17, 51, 0.12);
    padding: 12px 20px;
    z-index: 100;
  }
`;

const MobilePriceLabel = styled.span`
  flex: 1;
  font-size: 15px;
  font-weight: 700;
  color: #0066cc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MobileCTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 24px;
  background: #0066cc;
  border-radius: 22px;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s;

  &:hover {
    background: #087df3;
  }
`;

// ---------------------------------------------------------------------------
// Related products
// ---------------------------------------------------------------------------
const RelatedSection = styled.section`
  padding: 48px 0 64px;

  @media (max-width: 960px) {
    padding: 32px 0 80px;
  }
`;

const RelatedHeading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #001133;
  margin: 0 0 28px;

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const RelatedCard = styled.a`
  display: block;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 17, 51, 0.07);
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 17, 51, 0.13);
    transform: translateY(-2px);
  }
`;

const RelatedCardImage = styled.div`
  height: 120px;
  background: ${(props) => props.bgColor || "#243c70"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44px;
`;

const RelatedCardBody = styled.div`
  padding: 16px 18px 20px;
`;

const RelatedCardCategory = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #605e5c;
`;

const RelatedCardName = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #001133;
  margin: 4px 0 6px;
  line-height: 21px;
`;

const RelatedCardPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #0066cc;
  margin: 0;
`;

// ---------------------------------------------------------------------------
// FAQ accordion item component
// ---------------------------------------------------------------------------
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(function (prev) {
      return !prev;
    });
  }

  return (
    <FaqItem>
      <FaqQuestion
        isOpen={isOpen}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronIcon isOpen={isOpen} aria-hidden="true">
          &#8964;
        </ChevronIcon>
      </FaqQuestion>
      <FaqAnswer isOpen={isOpen} aria-hidden={!isOpen}>
        {answer}
      </FaqAnswer>
    </FaqItem>
  );
}

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------
function ProductDetailPage({ product, relatedProducts, menu, footer }) {
  const sitename = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";

  const canonicalUrl = `${sitename}/catalogo/${product.slug}`;
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hola, quiero cotizar el ${product.name}`
  )}`;

  const categoryColor = CATEGORY_COLORS[product.category] || "#243c70";
  const categoryIcon = CATEGORY_ICONS[product.category] || "🛗";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription,
    brand: {
      "@type": "Brand",
      name: "M-Elevadores",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "CL",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: sitename,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catálogo",
        item: `${sitename}/catalogo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: canonicalUrl,
      },
    ],
  };

  const specsEntries = Object.entries(product.specs);

  // Synthetic page object for the Layout component
  const syntheticPage = {
    lang: "es-cl",
    type: "page",
    uid: `catalogo/${product.slug}`,
    slugs: [`catalogo-${product.slug}`],
    data: {
      seoTitle: product.seoTitle,
      seodescription: product.seoDescription,
    },
  };

  const activeDocMeta = {
    lang: "es-cl",
    type: "page",
    url: canonicalUrl,
    sitename: sitename,
  };

  return (
    <>
      <Head>
        <title>{product.seoTitle}</title>
        <meta name="description" content={product.seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={product.seoTitle} />
        <meta property="og:description" content={product.seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      <Layout
        header={menu || {}}
        footer={footer || {}}
        page={syntheticPage}
        activeDocMeta={activeDocMeta}
      >
        <PageWrapper>
          {/* Breadcrumb */}
          <BreadcrumbBar aria-label="Ruta de navegación">
            <Container>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/" passHref>
                    <a>Inicio</a>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSep aria-hidden="true">›</BreadcrumbSep>
                <BreadcrumbItem>
                  <Link href="/catalogo" passHref>
                    <a>Catálogo</a>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSep aria-hidden="true">›</BreadcrumbSep>
                <BreadcrumbItem aria-current="page">
                  {product.name}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Container>
          </BreadcrumbBar>

          <Container>
            <TwoColumnLayout>
              {/* ---- LEFT COLUMN ---- */}
              <LeftColumn>
                {/* Hero block */}
                <HeroBlock>
                  <CategoryBadge>
                    {product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}
                  </CategoryBadge>
                  <ProductTitle>{product.name}</ProductTitle>
                  <Tagline>{product.tagline}</Tagline>
                  <AudienceChips>
                    {product.audience.map(function (item) {
                      return (
                        <AudienceChip key={item}>{item}</AudienceChip>
                      );
                    })}
                  </AudienceChips>
                </HeroBlock>

                {/* Image placeholder */}
                <ImagePlaceholder bgColor={categoryColor} role="img" aria-label={`Imagen de ${product.name}`}>
                  <CategoryIconLarge aria-hidden="true">
                    {categoryIcon}
                  </CategoryIconLarge>
                  <ImagePlaceholderLabel>{product.name}</ImagePlaceholderLabel>
                </ImagePlaceholder>

                {/* Long description */}
                <ContentSection>
                  <SectionHeading>
                    ¿Qué es el {product.shortName}?
                  </SectionHeading>
                  <LongDescriptionText>
                    {product.longDescription}
                  </LongDescriptionText>
                  <FeatureList>
                    {product.features.map(function (feature) {
                      return (
                        <FeatureItem key={feature}>
                          <CheckIcon aria-hidden="true">✓</CheckIcon>
                          {feature}
                        </FeatureItem>
                      );
                    })}
                  </FeatureList>
                </ContentSection>

                {/* Specs table */}
                <ContentSection>
                  <SectionHeading>Especificaciones técnicas</SectionHeading>
                  <SpecsTable>
                    <tbody>
                      {specsEntries.map(function ([label, value], index) {
                        return (
                          <SpecRow key={label} even={index % 2 === 0}>
                            <SpecLabel>{label}</SpecLabel>
                            <SpecValue>{value}</SpecValue>
                          </SpecRow>
                        );
                      })}
                    </tbody>
                  </SpecsTable>
                </ContentSection>

                {/* FAQ accordion */}
                <ContentSection>
                  <SectionHeading>Preguntas frecuentes</SectionHeading>
                  <FaqList>
                    {product.faq.map(function (item) {
                      return (
                        <FaqAccordionItem
                          key={item.q}
                          question={item.q}
                          answer={item.a}
                        />
                      );
                    })}
                  </FaqList>
                </ContentSection>
              </LeftColumn>

              {/* ---- RIGHT COLUMN — STICKY SIDEBAR ---- */}
              <RightColumn>
                <QuoteCard>
                  <QuoteCardProductName>{product.name}</QuoteCardProductName>
                  <PriceRange>{product.priceRange}</PriceRange>
                  <FreeVisitBadge>
                    <GreenTick aria-hidden="true">✓</GreenTick>
                    Visita técnica gratuita incluida
                  </FreeVisitBadge>

                  <CTAButtonPrimary
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Cotizar ${product.name} por WhatsApp`}
                  >
                    Cotizar ahora
                  </CTAButtonPrimary>

                  <CTAButtonSecondary
                    href={`tel:+${PHONE}`}
                    aria-label={`Llamar a M-Elevadores: ${PHONE_DISPLAY}`}
                  >
                    Llamar ahora — {PHONE_DISPLAY}
                  </CTAButtonSecondary>

                  <InstallTimeChip>
                    <span aria-hidden="true">⏱</span>
                    Tiempo de instalación: {product.installTime}
                  </InstallTimeChip>

                  <TrustBadge>Certificado MINVU · 25 años de experiencia</TrustBadge>
                </QuoteCard>
              </RightColumn>
            </TwoColumnLayout>

            {/* ---- RELATED PRODUCTS ---- */}
            {relatedProducts && relatedProducts.length > 0 && (
              <RelatedSection>
                <RelatedHeading>También te puede interesar</RelatedHeading>
                <RelatedGrid>
                  {relatedProducts.map(function (related) {
                    return (
                      <Link
                        key={related.slug}
                        href={`/catalogo/${related.slug}`}
                        passHref
                      >
                        <RelatedCard
                          aria-label={`Ver ${related.name}`}
                        >
                          <RelatedCardImage
                            bgColor={CATEGORY_COLORS[related.category]}
                            aria-hidden="true"
                          >
                            {CATEGORY_ICONS[related.category]}
                          </RelatedCardImage>
                          <RelatedCardBody>
                            <RelatedCardCategory>
                              {related.category}
                            </RelatedCardCategory>
                            <RelatedCardName>{related.name}</RelatedCardName>
                            <RelatedCardPrice>
                              {related.priceRange}
                            </RelatedCardPrice>
                          </RelatedCardBody>
                        </RelatedCard>
                      </Link>
                    );
                  })}
                </RelatedGrid>
              </RelatedSection>
            )}
          </Container>

          {/* ---- MOBILE STICKY BOTTOM BAR ---- */}
          <MobileStickyBar>
            <MobilePriceLabel>{product.priceRange}</MobilePriceLabel>
            <MobileCTAButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Cotizar ${product.name} por WhatsApp`}
            >
              Cotizar
            </MobileCTAButton>
          </MobileStickyBar>
        </PageWrapper>
      </Layout>
    </>
  );
}

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------
export async function getStaticPaths() {
  return {
    paths: PRODUCTS.map(function (p) {
      return { params: { slug: p.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { notFound: true };
  }

  const relatedProducts = getRelatedProducts(slug, 3);

  let menu = {};
  let footer = {};

  try {
    const client = createClient({});
    const [menuData, footerData] = await Promise.all([
      client.getSingle("menutop"),
      client.getSingle("footermenu"),
    ]);
    menu = menuData;
    footer = footerData;
  } catch (_err) {
    // Prismic data is non-critical; page renders without it
  }

  return {
    props: {
      product,
      relatedProducts,
      menu,
      footer,
    },
    revalidate: 300,
  };
}

export default ProductDetailPage;
