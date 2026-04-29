import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { createClient } from "../prismicio";
import { Layout } from "../components/common/Layout";
import { PRODUCTS } from "../lib/products";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";
const WA_NUMBER = "56959382761";
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

// ---------------------------------------------------------------------------
// Design tokens
// ---------------------------------------------------------------------------
const NAVY = "#243C70";
const BLUE = "#0066CC";
const DARK = "#001133";
const MUTED = "#605E5C";
const LIGHT_BG = "#F8FAFC";
const BORDER = "#E1E8F5";
const BLUE_TINT = "#E8F1FC";
const SELECTED_BORDER = BLUE;
const MAX_W = "1136px";
const BP = "960px";

// ---------------------------------------------------------------------------
// Keyframes
// ---------------------------------------------------------------------------
const fadeSlide = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const checkDraw = keyframes`
  from { stroke-dashoffset: 100; }
  to   { stroke-dashoffset: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.7); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
`;

// ---------------------------------------------------------------------------
// Layout primitives
// ---------------------------------------------------------------------------
const PageWrapper = styled.main`
  font-family: "Quicksand", sans-serif;
  color: ${DARK};
  min-height: 100vh;
  background: ${LIGHT_BG};
`;

const Container = styled.div`
  max-width: ${MAX_W};
  margin: 0 auto;
  padding: 0 24px;
`;

const NarrowContainer = styled(Container)`
  max-width: 720px;
`;

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
const HeroSection = styled.section`
  background: ${LIGHT_BG};
  padding: 64px 0 40px;
  text-align: center;
`;

const HeroH1 = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 56px;
  color: ${DARK};
  margin: 0 0 14px;

  @media (max-width: ${BP}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${MUTED};
  line-height: 28px;
  margin: 0 0 36px;
`;

// ---------------------------------------------------------------------------
// Progress bar
// ---------------------------------------------------------------------------
const ProgressWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto 8px;
`;

const ProgressTrack = styled.div`
  height: 6px;
  background: ${BORDER};
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: ${BLUE};
  border-radius: 3px;
  transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${(p) => p.pct}%;
`;

const ProgressLabel = styled.p`
  font-size: 13px;
  color: ${MUTED};
  text-align: center;
  margin: 8px 0 0;
`;

// ---------------------------------------------------------------------------
// Wizard step
// ---------------------------------------------------------------------------
const WizardSection = styled.section`
  padding: 40px 0 80px;
`;

const StepWrapper = styled.div`
  animation: ${fadeSlide} 0.3s ease both;
`;

const StepQuestion = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: ${DARK};
  text-align: center;
  margin: 0 0 32px;
  line-height: 34px;

  @media (max-width: ${BP}) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px;
  border-radius: 16px;
  border: 2px solid ${(p) => (p.selected ? SELECTED_BORDER : BORDER)};
  background: ${(p) => (p.selected ? BLUE_TINT : "#fff")};
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  width: 100%;
  text-align: center;

  &:hover {
    border-color: ${BLUE};
    box-shadow: 0 4px 16px rgba(0, 102, 204, 0.12);
  }

  ${(p) =>
    p.selected &&
    css`
      box-shadow: 0 4px 16px rgba(0, 102, 204, 0.18);
    `}
`;

const OptionIcon = styled.span`
  font-size: 32px;
  line-height: 1;
`;

const OptionLabel = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${(p) => (p.selected ? BLUE : DARK)};
  line-height: 22px;
`;

// ---------------------------------------------------------------------------
// Navigation buttons
// ---------------------------------------------------------------------------
const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`;

const BtnOutline = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 2px solid ${BORDER};
  background: none;
  color: ${DARK};
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 11px 24px;
  border-radius: 22px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${BLUE};
    background: ${BLUE_TINT};
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const BtnPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${BLUE};
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 13px 32px;
  border-radius: 22px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  margin-left: auto;

  &:hover {
    background: #087df3;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #b3cff5;
    cursor: not-allowed;
    transform: none;
  }
`;

// ---------------------------------------------------------------------------
// Result screen
// ---------------------------------------------------------------------------
const ResultSection = styled.section`
  padding: 56px 0 80px;
  animation: ${fadeSlide} 0.4s ease both;
`;

const CheckmarkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  animation: ${scaleIn} 0.4s ease both;
`;

const CheckSvg = styled.svg`
  circle {
    fill: #dcfce7;
    stroke: none;
  }
  polyline {
    fill: none;
    stroke: #16a34a;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 100;
    animation: ${checkDraw} 0.5s ease 0.2s both;
  }
`;

const ResultTitle = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: ${MUTED};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 8px;
`;

const ResultProductName = styled.h2`
  text-align: center;
  font-size: 34px;
  font-weight: 800;
  color: ${DARK};
  margin: 0 0 40px;
  line-height: 42px;

  @media (max-width: ${BP}) {
    font-size: 26px;
    line-height: 34px;
  }
`;

const ResultCard = styled.div`
  background: #fff;
  border: 2px solid ${BLUE};
  border-radius: 20px;
  padding: 36px 40px;
  max-width: 600px;
  margin: 0 auto 32px;

  @media (max-width: ${BP}) {
    padding: 28px 24px;
  }
`;

const ResultCardHeader = styled.div`
  margin-bottom: 24px;
`;

const ResultBadge = styled.span`
  display: inline-block;
  background: ${BLUE};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 12px;
  border-radius: 12px;
  margin-bottom: 8px;
`;

const ResultProductTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: ${DARK};
  margin: 0 0 6px;
`;

const ResultTagline = styled.p`
  font-size: 15px;
  color: ${MUTED};
  margin: 0;
  line-height: 22px;
`;

const ResultSpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ResultSpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-bottom: 10px;
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

const ResultPrice = styled.p`
  font-size: 22px;
  font-weight: 800;
  color: ${DARK};
  margin: 0;
`;

const ResultActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto;
`;

const BtnWhatsApp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25d366;
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 32px;
  border-radius: 22px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #1ebe59;
    transform: translateY(-1px);
  }
`;

const BtnOutlineLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid ${BORDER};
  background: #fff;
  color: ${DARK};
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 13px 28px;
  border-radius: 22px;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${BLUE};
    background: ${BLUE_TINT};
  }
`;

const BtnTextReset = styled.button`
  background: none;
  border: none;
  color: ${MUTED};
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px;
  text-align: center;
  width: 100%;
  transition: color 0.2s;

  &:hover { color: ${BLUE}; }
`;

// ---------------------------------------------------------------------------
// Wizard data
// ---------------------------------------------------------------------------
const STEPS = [
  {
    id: "location",
    question: "¿Dónde se instalará?",
    options: [
      { value: "casa", label: "Casa particular", icon: "🏠" },
      { value: "duplex", label: "Departamento dúplex", icon: "🏢" },
      { value: "condominio", label: "Condominio / Edificio", icon: "🏗️" },
      { value: "comercial", label: "Local comercial / Institución", icon: "🏪" },
    ],
  },
  {
    id: "user",
    question: "¿Quién lo usará principalmente?",
    options: [
      { value: "adulto_mayor", label: "Adulto mayor", icon: "👴" },
      { value: "silla_ruedas", label: "Usuario de silla de ruedas", icon: "♿" },
      { value: "recuperacion", label: "Recuperación temporal", icon: "🏥" },
      { value: "varios", label: "Varios usuarios", icon: "👨‍👩‍👧" },
    ],
  },
  {
    id: "space",
    question: "¿Cómo es la escalera o el espacio?",
    options: [
      { value: "recta", label: "Escalera recta", icon: "📐" },
      { value: "curva", label: "Escalera con curvas / rellanos", icon: "🔀" },
      { value: "desnivel", label: "Desnivel sin escalera", icon: "↕️" },
      { value: "sin_ascensor", label: "No hay ascensor en el edificio", icon: "🚫" },
    ],
  },
  {
    id: "priority",
    question: "¿Qué es más importante para ti?",
    options: [
      { value: "rapidez", label: "Rapidez de instalación", icon: "⚡" },
      { value: "precio", label: "Menor inversión posible", icon: "💰" },
      { value: "normativa", label: "Cumplimiento de normativa", icon: "✅" },
      { value: "calidad", label: "La mejor calidad disponible", icon: "⭐" },
    ],
  },
];

const RESULT_SPEC_KEYS = [
  "Carga máxima",
  "Tiempo de instalación",
  "Garantía",
];

// ---------------------------------------------------------------------------
// Recommendation engine
// ---------------------------------------------------------------------------
function getRecommendedSlug(answers) {
  const { location, user, space, priority } = answers;

  // Condominio + normativa → modernizacion-replus
  if (location === "condominio" && priority === "normativa") {
    return "modernizacion-replus";
  }

  // Condominio + any → ascensor-condominio-tower
  if (location === "condominio") {
    return "ascensor-condominio-tower";
  }

  // Comercial + silla de ruedas → plataforma-vertical-dignity
  if (location === "comercial" && user === "silla_ruedas") {
    return "plataforma-vertical-dignity";
  }

  // Comercial + otros → ascensor-comercial-prime
  if (location === "comercial") {
    return "ascensor-comercial-prime";
  }

  // Silla de ruedas + desnivel → plataforma-vertical-dignity
  if (user === "silla_ruedas" && space === "desnivel") {
    return "plataforma-vertical-dignity";
  }

  // Silla de ruedas + escalera → plataforma-inclinada-access
  if (user === "silla_ruedas" && (space === "recta" || space === "curva")) {
    return "plataforma-inclinada-access";
  }

  // Casa / dúplex + premium + curva → ascensor-residencial-home
  if (
    (location === "casa" || location === "duplex") &&
    priority === "calidad" &&
    space === "curva"
  ) {
    return "ascensor-residencial-home";
  }

  // Casa + recta → salvaescaleras-recto-solo
  if ((location === "casa" || location === "duplex") && space === "recta") {
    return "salvaescaleras-recto-solo";
  }

  // Casa + curva → salvaescaleras-curvo-flex
  if ((location === "casa" || location === "duplex") && space === "curva") {
    return "salvaescaleras-curvo-flex";
  }

  // Default
  return "salvaescaleras-recto-solo";
}

// ---------------------------------------------------------------------------
// WhatsApp message builder
// ---------------------------------------------------------------------------
function buildWaMessage(product) {
  return encodeURIComponent(
    `Hola, usé la guía de compra y me recomendaron el ${product.name}. ¿Pueden ayudarme con más información y una cotización?`
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
const GuiaDeCompraPage = ({ menu, footer }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [resultSlug, setResultSlug] = useState(null);

  const canonicalUrl = `${SITE}/guia-de-compra`;
  const totalSteps = STEPS.length;

  const currentStepData = STEPS[currentStep];
  const currentAnswer = answers[currentStepData?.id];
  const progressPct = showResult ? 100 : ((currentStep) / totalSteps) * 100;

  const syntheticPage = {
    data: {},
    lang: "es-cl",
    type: "page",
    url: canonicalUrl,
    slugs: ["guia-de-compra"],
    uid: "guia-de-compra",
  };

  const activeDoc = {
    lang: "es-cl",
    type: "page",
    url: canonicalUrl,
    sitename: SITE,
  };

  const selectOption = (stepId, value) => {
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      const slug = getRecommendedSlug(answers);
      setResultSlug(slug);
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
    setResultSlug(null);
  };

  const recommendedProduct = resultSlug
    ? PRODUCTS.find((p) => p.slug === resultSlug) || null
    : null;

  const pageTitle = "Guia de Compra | ¿Qué producto necesito? | M-Elevadores";
  const pageDescription =
    "Responde 4 preguntas y te recomendamos el producto ideal para tu situación. Gratuito, sin compromiso.";

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
      </Head>

      <Layout
        header={menu || {}}
        footer={footer || {}}
        page={syntheticPage}
        activeDocMeta={activeDoc}
      >
        <PageWrapper>
          {/* ---------------------------------------------------------------- */}
          {/* HERO                                                             */}
          {/* ---------------------------------------------------------------- */}
          <HeroSection>
            <NarrowContainer>
              <HeroH1>¿Qué producto necesito?</HeroH1>
              <HeroSubtitle>
                4 preguntas para encontrar la solución ideal para ti
              </HeroSubtitle>

              <ProgressWrapper>
                <ProgressTrack role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
                  <ProgressFill pct={progressPct} />
                </ProgressTrack>
                <ProgressLabel>
                  {showResult
                    ? "Completo"
                    : `Pregunta ${currentStep + 1} de ${totalSteps}`}
                </ProgressLabel>
              </ProgressWrapper>
            </NarrowContainer>
          </HeroSection>

          {/* ---------------------------------------------------------------- */}
          {/* WIZARD / RESULT                                                  */}
          {/* ---------------------------------------------------------------- */}
          {showResult && recommendedProduct ? (
            <ResultSection>
              <NarrowContainer>
                <CheckmarkWrapper aria-hidden="true">
                  <CheckSvg width="72" height="72" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="36" />
                    <polyline points="20,36 30,46 52,26" />
                  </CheckSvg>
                </CheckmarkWrapper>

                <ResultTitle>Tu solución ideal:</ResultTitle>
                <ResultProductName>{recommendedProduct.name}</ResultProductName>

                <ResultCard>
                  <ResultCardHeader>
                    {recommendedProduct.badge && (
                      <ResultBadge>{recommendedProduct.badge}</ResultBadge>
                    )}
                    <ResultProductTitle>{recommendedProduct.name}</ResultProductTitle>
                    <ResultTagline>{recommendedProduct.tagline}</ResultTagline>
                  </ResultCardHeader>

                  <ResultSpecList>
                    {RESULT_SPEC_KEYS.filter(
                      (k) => recommendedProduct.specs[k]
                    ).map((key) => (
                      <ResultSpecItem key={key}>
                        <SpecKey>{key}</SpecKey>
                        <SpecVal>{recommendedProduct.specs[key]}</SpecVal>
                      </ResultSpecItem>
                    ))}
                    <ResultSpecItem>
                      <SpecKey>Tiempo instalación</SpecKey>
                      <SpecVal>{recommendedProduct.installTime}</SpecVal>
                    </ResultSpecItem>
                  </ResultSpecList>

                  <ResultPrice>{recommendedProduct.priceRange}</ResultPrice>
                </ResultCard>

                <ResultActions>
                  <BtnWhatsApp
                    href={`${WA_BASE}${buildWaMessage(recommendedProduct)}`}
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
                    Cotizar este producto
                  </BtnWhatsApp>

                  <BtnOutlineLink href={`/catalogo/${recommendedProduct.slug}`}>
                    Ver ficha completa
                  </BtnOutlineLink>

                  <BtnTextReset onClick={handleReset} type="button">
                    Empezar de nuevo
                  </BtnTextReset>
                </ResultActions>
              </NarrowContainer>
            </ResultSection>
          ) : (
            <WizardSection>
              <NarrowContainer>
                <StepWrapper key={currentStep}>
                  <StepQuestion>{currentStepData.question}</StepQuestion>

                  <OptionsGrid>
                    {currentStepData.options.map((opt) => {
                      const isSelected = currentAnswer === opt.value;
                      return (
                        <OptionCard
                          key={opt.value}
                          selected={isSelected}
                          onClick={() =>
                            selectOption(currentStepData.id, opt.value)
                          }
                          type="button"
                          aria-pressed={isSelected}
                        >
                          <OptionIcon role="img" aria-label={opt.label}>
                            {opt.icon}
                          </OptionIcon>
                          <OptionLabel selected={isSelected}>
                            {opt.label}
                          </OptionLabel>
                        </OptionCard>
                      );
                    })}
                  </OptionsGrid>

                  <NavRow>
                    <BtnOutline
                      type="button"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                    >
                      ← Anterior
                    </BtnOutline>

                    <BtnPrimary
                      type="button"
                      onClick={handleNext}
                      disabled={!currentAnswer}
                    >
                      {currentStep === totalSteps - 1
                        ? "Ver mi recomendación →"
                        : "Siguiente →"}
                    </BtnPrimary>
                  </NavRow>
                </StepWrapper>
              </NarrowContainer>
            </WizardSection>
          )}
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

    return {
      props: { menu, footer },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: { menu: {}, footer: {} },
      revalidate: 60,
    };
  }
}

export default GuiaDeCompraPage;
