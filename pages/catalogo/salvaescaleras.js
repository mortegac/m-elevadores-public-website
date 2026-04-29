import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { createClient } from "../../prismicio";
import { Layout } from "../../components/common/Layout";
import { getProductsByCategory } from "../../lib/products";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";
const WA_NUMBER = "56959382761";
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

// ---------------------------------------------------------------------------
// Design tokens (mirrors theme.js values)
// ---------------------------------------------------------------------------
const NAVY = "#243C70";
const BLUE = "#0066CC";
const DARK = "#001133";
const MUTED = "#605E5C";
const LIGHT_BG = "#F8FAFC";
const BORDER = "#E1E8F5";
const BLUE_TINT = "#E8F1FC";
const MAX_W = "1136px";
const BP = "960px";

// ---------------------------------------------------------------------------
// Keyframes
// ---------------------------------------------------------------------------
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ---------------------------------------------------------------------------
// Layout primitives
// ---------------------------------------------------------------------------
const PageWrapper = styled.main`
  font-family: "Quicksand", sans-serif;
  color: ${DARK};
  width: 100%;
`;

const Container = styled.div`
  max-width: ${MAX_W};
  margin: 0 auto;
  padding: 0 24px;
`;

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
const HeroSection = styled.section`
  background-color: ${NAVY};
  padding: 64px 0 72px;
  animation: ${fadeIn} 0.5s ease both;
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: #fff; }
  }

  span { color: rgba(255, 255, 255, 0.4); }
`;

const HeroH1 = styled.h1`
  font-size: 52px;
  font-weight: 800;
  line-height: 60px;
  color: #fff;
  margin: 0 0 16px;

  @media (max-width: ${BP}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 0 32px;

  @media (max-width: ${BP}) {
    font-size: 17px;
    line-height: 26px;
  }
`;

const StatChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StatChip = styled.span`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 22px;
  white-space: nowrap;
`;

// ---------------------------------------------------------------------------
// Section shared
// ---------------------------------------------------------------------------
const Section = styled.section`
  padding: 80px 0;
  background: ${(p) => p.bg || "#fff"};

  @media (max-width: ${BP}) {
    padding: 56px 0;
  }
`;

const SectionTag = styled.p`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${BLUE};
  margin: 0 0 12px;
`;

const SectionH2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: ${DARK};
  margin: 0 0 ${(p) => p.mb || "40px"};

  @media (max-width: ${BP}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

// ---------------------------------------------------------------------------
// What-is section
// ---------------------------------------------------------------------------
const ProseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 56px;
  align-items: start;

  @media (max-width: ${BP}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProseP = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${MUTED};
  margin: 0;
`;

const KeywordPill = styled.span`
  display: inline-block;
  background: ${BLUE_TINT};
  color: ${BLUE};
  font-size: 13px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
  margin: 0 6px 8px 0;
`;

const KeywordsRow = styled.div`
  margin-top: 32px;
`;

// ---------------------------------------------------------------------------
// Product comparison
// ---------------------------------------------------------------------------
const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: ${BP}) {
    grid-template-columns: 1fr;
  }
`;

const CompareHint = styled.div`
  text-align: center;
  background: ${(p) => (p.highlighted ? BLUE : LIGHT_BG)};
  color: ${(p) => (p.highlighted ? "#fff" : DARK)};
  font-size: 14px;
  font-weight: 700;
  padding: 10px 16px;
  border-radius: 10px 10px 0 0;
  border: 2px solid ${(p) => (p.highlighted ? BLUE : BORDER)};
  border-bottom: none;
`;

const ProductCard = styled.article`
  border: 2px solid ${(p) => (p.highlighted ? BLUE : BORDER)};
  border-radius: ${(p) => (p.highlighted ? "0 0 16px 16px" : "0 0 16px 16px")};
  background: #fff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 102, 204, 0.12);
  }
`;

const ProductBadge = styled.span`
  display: inline-block;
  background: ${BLUE};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 12px;
  border-radius: 12px;
  margin-bottom: 4px;
`;

const ProductName = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: ${DARK};
  margin: 0;
`;

const ProductTagline = styled.p`
  font-size: 15px;
  color: ${MUTED};
  margin: 0;
  line-height: 22px;
`;

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${BORDER};

  &:last-child { border-bottom: none; }
`;

const SpecKey = styled.span`
  color: ${MUTED};
  font-weight: 500;
`;

const SpecVal = styled.span`
  color: ${DARK};
  font-weight: 700;
`;

const PriceTag = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: ${DARK};
  margin: 0;
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${BLUE};
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 22px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  width: 100%;
  text-align: center;

  &:hover {
    background: #087df3;
    transform: translateY(-1px);
  }
`;

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------
const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${BP}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: #fff;
  border: 1px solid ${BORDER};
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 102, 204, 0.1);
  }
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  background: ${BLUE};
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`;

const StepIcon = styled.div`
  font-size: 28px;
  margin-bottom: 12px;
`;

const StepTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${DARK};
  margin: 0 0 8px;
`;

const StepDesc = styled.p`
  font-size: 14px;
  color: ${MUTED};
  line-height: 22px;
  margin: 0;
`;

// ---------------------------------------------------------------------------
// Audience cards
// ---------------------------------------------------------------------------
const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${BP}) {
    grid-template-columns: 1fr;
  }
`;

const AudienceCard = styled.div`
  background: #fff;
  border: 1px solid ${BORDER};
  border-radius: 16px;
  padding: 32px 28px;
  text-align: center;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 102, 204, 0.1);
    transform: translateY(-2px);
    transition: all 0.2s;
  }
`;

const AudienceIcon = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
`;

const AudienceTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${DARK};
  margin: 0 0 10px;
`;

const AudienceDesc = styled.p`
  font-size: 14px;
  color: ${MUTED};
  line-height: 22px;
  margin: 0;
`;

// ---------------------------------------------------------------------------
// FAQ accordion
// ---------------------------------------------------------------------------
const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 800px;
  margin: 0 auto;
`;

const FaqItem = styled.div`
  border: 1px solid ${BORDER};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
`;

const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: none;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${DARK};
  cursor: pointer;
  text-align: left;
  gap: 16px;
  transition: background 0.15s;

  &:hover { background: ${LIGHT_BG}; }
`;

const FaqChevron = styled.span`
  font-size: 18px;
  color: ${BLUE};
  flex-shrink: 0;
  transition: transform 0.2s;
  transform: ${(p) => (p.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const FaqAnswer = styled.div`
  padding: ${(p) => (p.open ? "0 24px 20px" : "0 24px")};
  max-height: ${(p) => (p.open ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.2s;
  font-size: 15px;
  line-height: 24px;
  color: ${MUTED};
`;

// ---------------------------------------------------------------------------
// CTA section
// ---------------------------------------------------------------------------
const CtaSection = styled.section`
  background: ${NAVY};
  padding: 72px 0;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 12px;

  @media (max-width: ${BP}) {
    font-size: 26px;
  }
`;

const CtaSubtitle = styled.p`
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 36px;
  line-height: 26px;
`;

const CtaButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const BtnWhatsApp = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25d366;
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 13px 32px;
  border-radius: 22px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #1ebe59;
    transform: translateY(-1px);
  }
`;

const BtnOutlineWhite = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 11px 28px;
  border-radius: 22px;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------
const STEPS = [
  {
    num: 1,
    icon: "📋",
    title: "Visita técnica gratuita",
    desc: "Evaluamos tu escalera sin costo ni compromiso. Medimos, fotografiamos y determinamos el modelo adecuado.",
  },
  {
    num: 2,
    icon: "📄",
    title: "Cotización detallada",
    desc: "Recibes un presupuesto exacto con todos los costos incluidos, sin sorpresas posteriores.",
  },
  {
    num: 3,
    icon: "🔧",
    title: "Instalación certificada",
    desc: "Técnicos certificados instalan tu salvaescaleras en 1 a 2 días, sin obras de albañilería.",
  },
  {
    num: 4,
    icon: "🛡️",
    title: "Soporte y mantenimiento",
    desc: "Garantía de 2 años y servicio técnico preventivo incluido para tu tranquilidad.",
  },
];

const AUDIENCE = [
  {
    icon: "👴",
    title: "Adultos mayores que viven solos",
    desc: "Recupera la autonomía en casa. Sube y baja escaleras con total seguridad sin depender de nadie, cuando lo necesites.",
  },
  {
    icon: "🏥",
    title: "Recuperación post-operatoria",
    desc: "Tras una cirugía de cadera, rodilla o columna, el salvaescaleras permite recuperarse en casa, evitando esfuerzos peligrosos.",
  },
  {
    icon: "🏠",
    title: "Familias que planifican el futuro",
    desc: "Una inversión hoy que garantiza que tu hogar siga siendo tu hogar mañana, sin importar la edad o condición física.",
  },
];

const FAQS = [
  {
    q: "¿Qué es exactamente un salvaescaleras?",
    a: "Un salvaescaleras (también llamado silla salvaescaleras o elevador de escaleras) es un dispositivo motorizado que se instala sobre el pasamano de una escalera. Una silla o plataforma se desliza sobre un riel, transportando a la persona de un piso al otro de forma segura y sin esfuerzo.",
  },
  {
    q: "¿Cuánto espacio ocupa en la escalera?",
    a: "El modelo Recto SOLO se pliega a solo 28 cm desde el muro cuando no está en uso. Esto permite que otras personas usen la escalera con normalidad. El modelo Curvo FLEX tiene dimensiones similares adaptadas a la geometría de cada escalera.",
  },
  {
    q: "¿Es seguro para personas con movilidad muy reducida?",
    a: "Sí. Todos nuestros modelos incluyen cinturón de seguridad, sensor de obstáculos y sistema de parada de emergencia. El control remoto bidireccional permite llamar la silla desde arriba o desde abajo.",
  },
  {
    q: "¿Requiere permiso municipal o de la comunidad?",
    a: "Para instalaciones en viviendas unifamiliares generalmente no se requiere permiso. Para departamentos o edificios, es conveniente informar al comité de administración. Nosotros te asesoramos en todo el proceso.",
  },
  {
    q: "¿Qué diferencia hay entre el modelo Recto y el Curvo?",
    a: "El Recto SOLO es para escaleras completamente rectas y se instala en 1 día. El Curvo FLEX está fabricado a medida para escaleras con curvas, rellanos, formas en L o U. El riel del FLEX se fabrica según los planos exactos de tu escalera, lo que toma 3-4 semanas adicionales.",
  },
  {
    q: "¿Qué pasa si hay un corte de luz?",
    a: "Todos nuestros modelos incluyen batería de emergencia. En caso de corte de luz, el sistema puede completar el recorrido actual y posicionar la silla en un lugar seguro, garantizando que nadie quede atrapado a mitad de la escalera.",
  },
  {
    q: "¿Cuánto vale un salvaescaleras en Chile?",
    a: "El Salvaescaleras Recto SOLO parte desde $2.800.000 CLP con instalación incluida. El Curvo FLEX parte desde $4.500.000 CLP según la complejidad de la escalera. Realizamos visita técnica gratuita y entregamos cotización exacta sin compromiso.",
  },
];

const KEY_SPECS_SOLO = ["Carga máxima", "Ancho plegado", "Tiempo de instalación", "Garantía"];
const KEY_SPECS_FLEX = ["Carga máxima", "Radio mínimo de curva", "Tiempo de instalación", "Garantía"];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <FaqList>
      {faqs.map((faq, i) => (
        <FaqItem key={i}>
          <FaqQuestion onClick={() => toggle(i)} aria-expanded={openIndex === i}>
            {faq.q}
            <FaqChevron open={openIndex === i} aria-hidden="true">
              &#8964;
            </FaqChevron>
          </FaqQuestion>
          <FaqAnswer open={openIndex === i} aria-hidden={openIndex !== i}>
            {faq.a}
          </FaqAnswer>
        </FaqItem>
      ))}
    </FaqList>
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
const SalvaescalerasPage = ({ menu, footer, salvaescalerasProducts }) => {
  const soloProduct = salvaescalerasProducts.find(
    (p) => p.slug === "salvaescaleras-recto-solo"
  );
  const flexProduct = salvaescalerasProducts.find(
    (p) => p.slug === "salvaescaleras-curvo-flex"
  );

  const canonicalUrl = `${SITE}/catalogo/salvaescaleras`;

  const syntheticPage = {
    data: {},
    lang: "es-cl",
    type: "page",
    url: canonicalUrl,
    slugs: ["salvaescaleras"],
    uid: "catalogo/salvaescaleras",
  };

  const activeDoc = {
    lang: "es-cl",
    type: "page",
    url: canonicalUrl,
    sitename: SITE,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Instalación de Salvaescaleras en Chile",
    description:
      "Servicio de venta e instalación de salvaescaleras para escaleras rectas y curvas. Incluye visita técnica gratuita, instalación en 1-2 días y soporte técnico.",
    provider: {
      "@type": "LocalBusiness",
      name: "M-Elevadores",
      url: "https://www.melevadores.cl",
      telephone: "+56959382761",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Marchant Pereira 150 of 1002",
        addressLocality: "Providencia",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
    },
    areaServed: { "@type": "Country", name: "Chile" },
    serviceType: "Salvaescaleras",
    offers: [
      {
        "@type": "Offer",
        name: "Salvaescaleras Recto SOLO",
        price: "2800000",
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
        description:
          "Salvaescaleras para escalera recta. Instalación en 1 día.",
      },
      {
        "@type": "Offer",
        name: "Salvaescaleras Curvo FLEX",
        price: "4500000",
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
        description:
          "Salvaescaleras fabricado a medida para escaleras curvas o con rellanos.",
      },
    ],
  };

  const pageTitle =
    "Salvaescaleras en Chile | Instalación en 1 Día | M-Elevadores";
  const pageDescription =
    "Salvaescaleras para escaleras rectas y curvas. Instalación en 1-2 días. Certificado MINVU. 25 años de experiencia. Cotiza gratis.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Layout
        header={menu || {}}
        footer={footer || {}}
        page={syntheticPage}
        activeDocMeta={activeDoc}
      >
        <PageWrapper>
          {/* ---------------------------------------------------------------- */}
          {/* HERO                                                              */}
          {/* ---------------------------------------------------------------- */}
          <HeroSection>
            <Container>
              <Breadcrumb aria-label="Ruta de navegación">
                <Link href="/">Inicio</Link>
                <span>›</span>
                <Link href="/catalogo">Catálogo</Link>
                <span>›</span>
                <span aria-current="page">Salvaescaleras</span>
              </Breadcrumb>

              <HeroH1>Salvaescaleras en Chile</HeroH1>

              <HeroSubtitle>
                Recupera la independencia en tu propia casa. Instalación en 1
                día, sin obras.
              </HeroSubtitle>

              <StatChips>
                <StatChip>Desde $2.800.000 CLP</StatChip>
                <StatChip>Instalación en 1-2 días</StatChip>
                <StatChip>Certificado MINVU</StatChip>
              </StatChips>
            </Container>
          </HeroSection>

          {/* ---------------------------------------------------------------- */}
          {/* WHAT IS A STAIRLIFT                                              */}
          {/* ---------------------------------------------------------------- */}
          <Section bg="#fff">
            <Container>
              <SectionTag>Información</SectionTag>
              <SectionH2>¿Qué es un salvaescaleras?</SectionH2>

              <ProseGrid>
                <ProseP>
                  Un <strong>salvaescaleras</strong> es un dispositivo motorizado
                  que se instala directamente sobre el muro o el pasamano de una
                  escalera existente. Una silla o plataforma se desliza a lo largo
                  de un riel, transportando al usuario de un piso al otro de forma
                  suave, silenciosa y completamente segura. No requiere obras de
                  albañilería ni modificaciones estructurales en la vivienda.
                </ProseP>

                <ProseP>
                  También conocido como <strong>silla salvaescaleras</strong> o{" "}
                  <strong>elevador de escaleras</strong>, este dispositivo es la
                  solución más rápida y económica para recuperar la accesibilidad
                  vertical en una casa. A diferencia de un ascensor, no necesita
                  foso ni sala de máquinas, y su instalación se completa en un
                  solo día para escaleras rectas.
                </ProseP>

                <ProseP>
                  La{" "}
                  <strong>plataforma salvaescaleras</strong> está diseñada para
                  personas que tienen dificultades para subir o bajar escaleras:
                  adultos mayores, personas en recuperación postoperatoria, o
                  quienes presentan problemas de rodilla, cadera o columna.
                  Permite mantenerse en el propio hogar con total independencia,
                  sin necesidad de trasladarse a una residencia o depender
                  permanentemente de terceros.
                </ProseP>

                <ProseP>
                  El funcionamiento es sencillo: el usuario se sienta en la silla,
                  se coloca el cinturón de seguridad y acciona el mando de
                  control. La silla recorre suavemente el riel hasta el piso
                  deseado. El control remoto bidireccional permite llamar la silla
                  desde cualquier nivel. Cuando no se usa, el asiento, el
                  reposapiés y los brazos se pliegan, ocupando solo 28 cm de
                  ancho y dejando libre el paso de la escalera para los demás
                  habitantes de la casa.
                </ProseP>
              </ProseGrid>

              <KeywordsRow>
                <KeywordPill>salvaescaleras Chile</KeywordPill>
                <KeywordPill>silla salvaescaleras</KeywordPill>
                <KeywordPill>plataforma salvaescaleras</KeywordPill>
                <KeywordPill>elevador de escaleras</KeywordPill>
                <KeywordPill>salvaescaleras precio Chile</KeywordPill>
                <KeywordPill>salvaescaleras adulto mayor</KeywordPill>
              </KeywordsRow>
            </Container>
          </Section>

          {/* ---------------------------------------------------------------- */}
          {/* PRODUCT COMPARISON                                               */}
          {/* ---------------------------------------------------------------- */}
          <Section bg={LIGHT_BG}>
            <Container>
              <SectionTag>Comparar modelos</SectionTag>
              <SectionH2>Elige el modelo adecuado para tu escalera</SectionH2>

              <CompareGrid>
                {/* SOLO */}
                <div>
                  <CompareHint>
                    ¿Tu escalera es recta? → Modelo SOLO
                  </CompareHint>
                  <ProductCard>
                    {soloProduct?.badge && (
                      <ProductBadge>{soloProduct.badge}</ProductBadge>
                    )}
                    <div>
                      <ProductName>{soloProduct?.name}</ProductName>
                      <ProductTagline>{soloProduct?.tagline}</ProductTagline>
                    </div>

                    <SpecList>
                      {KEY_SPECS_SOLO.map((key) => (
                        <SpecItem key={key}>
                          <SpecKey>{key}</SpecKey>
                          <SpecVal>{soloProduct?.specs[key]}</SpecVal>
                        </SpecItem>
                      ))}
                    </SpecList>

                    <PriceTag>{soloProduct?.priceRange}</PriceTag>

                    <BtnPrimary
                      href={`${WA_BASE}${encodeURIComponent(
                        "Hola, me interesa cotizar el Salvaescaleras Recto SOLO. ¿Pueden ayudarme?"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotizar Recto SOLO
                    </BtnPrimary>
                  </ProductCard>
                </div>

                {/* FLEX */}
                <div>
                  <CompareHint highlighted>
                    ¿Tiene curvas o rellanos? → Modelo FLEX
                  </CompareHint>
                  <ProductCard highlighted>
                    <div>
                      <ProductName>{flexProduct?.name}</ProductName>
                      <ProductTagline>{flexProduct?.tagline}</ProductTagline>
                    </div>

                    <SpecList>
                      {KEY_SPECS_FLEX.map((key) => (
                        <SpecItem key={key}>
                          <SpecKey>{key}</SpecKey>
                          <SpecVal>{flexProduct?.specs[key]}</SpecVal>
                        </SpecItem>
                      ))}
                    </SpecList>

                    <PriceTag>{flexProduct?.priceRange}</PriceTag>

                    <BtnPrimary
                      href={`${WA_BASE}${encodeURIComponent(
                        "Hola, me interesa cotizar el Salvaescaleras Curvo FLEX para una escalera con curvas. ¿Pueden ayudarme?"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotizar Curvo FLEX
                    </BtnPrimary>
                  </ProductCard>
                </div>
              </CompareGrid>
            </Container>
          </Section>

          {/* ---------------------------------------------------------------- */}
          {/* HOW IT WORKS                                                     */}
          {/* ---------------------------------------------------------------- */}
          <Section bg="#fff">
            <Container>
              <SectionTag>El proceso</SectionTag>
              <SectionH2 style={{ textAlign: "center" }}>
                ¿Cómo funciona el proceso?
              </SectionH2>

              <StepsGrid>
                {STEPS.map((step) => (
                  <StepCard key={step.num}>
                    <StepNumber>{step.num}</StepNumber>
                    <StepIcon role="img" aria-label={step.title}>
                      {step.icon}
                    </StepIcon>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.desc}</StepDesc>
                  </StepCard>
                ))}
              </StepsGrid>
            </Container>
          </Section>

          {/* ---------------------------------------------------------------- */}
          {/* WHO NEEDS IT                                                     */}
          {/* ---------------------------------------------------------------- */}
          <Section bg={LIGHT_BG}>
            <Container>
              <SectionTag>Para quién es</SectionTag>
              <SectionH2 style={{ textAlign: "center" }}>
                ¿Quién necesita un salvaescaleras?
              </SectionH2>

              <AudienceGrid>
                {AUDIENCE.map((item) => (
                  <AudienceCard key={item.title}>
                    <AudienceIcon role="img" aria-label={item.title}>
                      {item.icon}
                    </AudienceIcon>
                    <AudienceTitle>{item.title}</AudienceTitle>
                    <AudienceDesc>{item.desc}</AudienceDesc>
                  </AudienceCard>
                ))}
              </AudienceGrid>
            </Container>
          </Section>

          {/* ---------------------------------------------------------------- */}
          {/* FAQ                                                              */}
          {/* ---------------------------------------------------------------- */}
          <Section bg="#fff">
            <Container>
              <SectionTag>Preguntas frecuentes</SectionTag>
              <SectionH2 mb="32px" style={{ textAlign: "center" }}>
                Todo lo que necesitas saber
              </SectionH2>

              <FaqAccordion faqs={FAQS} />
            </Container>
          </Section>

          {/* ---------------------------------------------------------------- */}
          {/* CTA                                                              */}
          {/* ---------------------------------------------------------------- */}
          <CtaSection>
            <Container>
              <CtaTitle>¿Tienes dudas sobre cuál modelo elegir?</CtaTitle>
              <CtaSubtitle>
                Nuestros especialistas te asesoran sin costo ni compromiso.
                Visita técnica gratuita incluida.
              </CtaSubtitle>

              <CtaButtons>
                <BtnWhatsApp
                  href={`${WA_BASE}${encodeURIComponent(
                    "Hola, tengo dudas sobre qué salvaescaleras necesito. ¿Pueden ayudarme?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar por WhatsApp
                </BtnWhatsApp>

                <BtnOutlineWhite href="/catalogo">
                  Ver todos los productos
                </BtnOutlineWhite>
              </CtaButtons>
            </Container>
          </CtaSection>
        </PageWrapper>
      </Layout>
    </>
  );
};

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData });
    const [menu, footer] = await Promise.all([
      client.getSingle("menutop").catch(() => ({})),
      client.getSingle("footermenu").catch(() => ({})),
    ]);

    const salvaescalerasProducts = getProductsByCategory("salvaescaleras");

    return {
      props: { menu, footer, salvaescalerasProducts },
      revalidate: 60,
    };
  } catch (error) {
    const salvaescalerasProducts = getProductsByCategory("salvaescaleras");
    return {
      props: { menu: {}, footer: {}, salvaescalerasProducts },
      revalidate: 60,
    };
  }
}

export default SalvaescalerasPage;
