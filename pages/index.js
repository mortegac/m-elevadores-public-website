import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { SliceZone } from "@prismicio/react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { createClient } from "../prismicio";
import { asText } from "@prismicio/helpers";
import { components } from "../slices/index";
import { Layout } from "../components/common/Layout";
import { PRODUCTS } from "../lib/products";

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
   Section 1 — Hero Banner
───────────────────────────────────────────── */
const HeroBannerSection = styled.section`
  background-color: ${COLOR.navy};
  width: 100%;
`;

const HeroBannerInner = styled.div`
  ${containerStyle}
  ${sectionPadding}
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  gap: 48px;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const HeroHeading = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.15;
  color: ${COLOR.white};
  margin: 0;

  @media (max-width: 959px) {
    font-size: 32px;
  }
`;

const HeroCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 30px;
  border-radius: 22px;
  border: 2px solid ${COLOR.white};
  color: ${COLOR.white};
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  align-self: flex-start;
  min-width: 160px;
  min-height: 48px;

  &:hover {
    background-color: ${COLOR.white};
    color: ${COLOR.navy};
  }
`;

const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OvalCluster = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  grid-template-rows: 180px 180px;
  gap: 12px;
`;

const OvalImg = styled.div`
  border-radius: 50% / 60%;
  overflow: hidden;
  width: 130px;
  height: 180px;

  &:nth-child(1) {
    transform: rotate(5deg);
  }
  &:nth-child(2) {
    transform: rotate(-5deg) translateY(16px);
  }
  &:nth-child(3) {
    transform: rotate(-3deg) translateY(-8px);
  }
  &:nth-child(4) {
    transform: rotate(4deg) translateY(8px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const HERO_IMAGES = [
  { src: "/images/products/ascensor-cabina.png", alt: "Cabina de ascensor" },
  { src: "/images/products/ascensor-rhx16.png", alt: "Ascensor RHX16" },
  { src: "/images/products/ascensor-rhx17.png", alt: "Ascensor RHX17" },
  { src: "/images/products/ascensor-traccion.png", alt: "Ascensor tracción" },
];

function HeroBanner() {
  return (
    <HeroBannerSection>
      <HeroBannerInner>
        <HeroLeft>
          <HeroHeading>
            Líderes en mantenimiento, reparación e instalación de ascensores
            multimarca.
          </HeroHeading>
          <HeroCtaButton href="/catalogo">Cotiza aquí</HeroCtaButton>
        </HeroLeft>
        <HeroRight>
          <OvalCluster>
            {HERO_IMAGES.map((img) => (
              <OvalImg key={img.src}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </OvalImg>
            ))}
          </OvalCluster>
        </HeroRight>
      </HeroBannerInner>
    </HeroBannerSection>
  );
}

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
  salvaescaleras: { color: "#E8F4FD", text: "#0066CC", emoji: "🛗", label: "Salvaescaleras" },
  plataformas:    { color: "#EDF7F0", text: "#1A7A3B", emoji: "♿", label: "Plataforma" },
  ascensores:     { color: "#EEF2FF", text: "#3B47CC", emoji: "🏢", label: "Ascensor" },
  modernizacion:  { color: "#FFF3E0", text: "#BF6000", emoji: "🔧", label: "Modernización" },
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
                  <CardPrice>{product.priceRange}</CardPrice>
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
   Section 3 — Services Carousel
───────────────────────────────────────────── */
const SLIDES = [
  {
    num: "01",
    title: "Salvaescaleras",
    heading: "Sube y baja sin esfuerzo",
    description:
      "Instalación en 1 día, sin obras. Para escaleras rectas y curvas.",
    cta: "Ver salvaescaleras",
    href: "/catalogo/salvaescaleras-recto-solo",
    image: "/images/products/salvaescaleras-recto-solo-v2.png",
    imageAlt: "Salvaescaleras recto",
  },
  {
    num: "02",
    title: "Plataformas elevadoras",
    heading: "Accesibilidad universal",
    description:
      "Soluciones para silla de ruedas, interiores y exteriores.",
    cta: "Ver plataformas",
    href: "/catalogo/plataforma-vertical-dignity",
    image: "/images/products/plataforma-exterior.png",
    imageAlt: "Plataforma elevadora exterior",
  },
  {
    num: "03",
    title: "Ascensores",
    heading: "Eleva tu edificio",
    description:
      "Residenciales, condominios y comerciales. Certificados NCh440.",
    cta: "Ver ascensores",
    href: "/catalogo/ascensor-residencial-home",
    image: "/images/products/ascensor-rhx17.png",
    imageAlt: "Ascensor residencial RHX17",
  },
  {
    num: "04",
    title: "Modernización",
    heading: "Renueva sin reemplazar",
    description:
      "Actualizamos cualquier marca. Ahorra hasta 45% en energía.",
    cta: "Ver modernización",
    href: "/catalogo/modernizacion-replus",
    image: "/images/products/control-masha.png",
    imageAlt: "Control modernización MASHA",
  },
];

const CarouselSection = styled.section`
  background-color: ${COLOR.navy};
  position: relative;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  position: relative;
  width: 100%;
`;

const CarouselSlide = styled.div`
  display: ${({ active }) => (active ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  height: 480px;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
  align-items: center;
  gap: 48px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.4s ease;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
    height: auto;
    padding: 40px 24px;
    gap: 24px;
  }
`;

const SlideLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SlideNumBadge = styled.span`
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const SlideCategory = styled.p`
  font-family: Quicksand, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SlideHeading = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 44px;
  font-weight: 800;
  color: ${COLOR.white};
  line-height: 1.1;
  margin: 0;

  @media (max-width: 959px) {
    font-size: 28px;
  }
`;

const SlideDesc = styled.p`
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  line-height: 1.6;
`;

const SlideCtaBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 30px;
  border-radius: 22px;
  background-color: ${COLOR.blue};
  color: ${COLOR.white};
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  align-self: flex-start;
  min-height: 48px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${COLOR.blueHover};
  }
`;

const SlideRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 959px) {
    order: -1;
  }
`;

const SlideImageWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  height: 340px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);

  @media (max-width: 959px) {
    max-width: 100%;
    height: 200px;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 959px) {
    display: none;
  }
`;

const ArrowBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.18);
  color: ${COLOR.white};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  transition: background 0.2s;
  min-height: 48px;
  min-width: 48px;

  &:hover {
    background: rgba(255, 255, 255, 0.32);
  }
`;

const DotRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 20px 0 28px;
`;

const Dot = styled.button`
  width: ${({ active }) => (active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background: ${({ active }) =>
    active ? COLOR.white : "rgba(255,255,255,0.35)"};
  border: none;
  cursor: pointer;
  transition: width 0.3s, background 0.3s;
  padding: 0;
  min-height: 20px;
`;

function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <CarouselSection aria-label="Servicios M-Elevadores">
      <CarouselTrack>
        {SLIDES.map((slide, i) => (
          <CarouselSlide key={slide.num} active={i === current}>
            <SlideLeft>
              <SlideNumBadge>{slide.num} / {String(total).padStart(2, "0")}</SlideNumBadge>
              <SlideCategory>{slide.title}</SlideCategory>
              <SlideHeading>{slide.heading}</SlideHeading>
              <SlideDesc>{slide.description}</SlideDesc>
              <SlideCtaBtn href={slide.href}>{slide.cta}</SlideCtaBtn>
            </SlideLeft>
            <SlideRight>
              <SlideImageWrapper>
                <SlideImg src={slide.image} alt={slide.imageAlt} loading="lazy" />
              </SlideImageWrapper>
            </SlideRight>
          </CarouselSlide>
        ))}
        <CarouselControls>
          <ArrowBtn onClick={prev} aria-label="Slide anterior">&#8592;</ArrowBtn>
          <ArrowBtn onClick={next} aria-label="Siguiente slide">&#8594;</ArrowBtn>
        </CarouselControls>
      </CarouselTrack>
      <DotRow>
        {SLIDES.map((_, i) => (
          <Dot
            key={i}
            active={i === current}
            onClick={() => setCurrent(i)}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </DotRow>
    </CarouselSection>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        <SliceZone slices={page?.data?.slices} components={components} />
        <HeroBanner />
        <FeaturedProducts />
        <ServicesCarousel />
      </Layout>
    </motion.div>
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
