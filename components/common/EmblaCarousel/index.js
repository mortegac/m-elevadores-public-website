import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Link from "next/link";
import styled from "styled-components";

/* ─────────────────────────────────────────────
   Slides data
───────────────────────────────────────────── */
const SLIDES = [
  {
    label: "Instalación de Ascensores",
    heading: "Importación e instalación para tu proyecto",
    description:
      "Ascensores para proyectos residenciales y comerciales. Asesoría personalizada y los mejores precios del mercado.",
    cta: "Más información",
    href: "/catalogo",
    image: "/images/slider-instalacion.webp",
  },
  {
    label: "Mantenimiento Multimarca",
    heading: "Mantenimiento mensual de ascensores",
    description:
      "Técnicos certificados que cumplen toda la normativa vigente. Multimarca. ¡Solicita tu revisión ahora!",
    cta: "Más información",
    href: "/catalogo",
    image: "/images/slider-mantenimiento.webp",
  },
  {
    label: "Reparación y Normalización",
    heading: "Servicio integral de reparación",
    description:
      "Modernización de ascensores, reemplazo de piezas, actualización electrónica y certificación según normativa vigente.",
    cta: "Más información",
    href: "/catalogo/modernizacion-replus",
    image: "/images/slider-reparacion.webp",
  },
  {
    label: "Salvaescaleras",
    heading: "Mejora la accesibilidad de tu hogar o negocio",
    description:
      "Dispositivos salvaescaleras seguros y certificados con garantía profesional. Instalación en 1 día, sin obras.",
    cta: "Más información",
    href: "/catalogo/salvaescaleras",
    image: "/images/products/salvaescaleras-recto-solo-v2.webp",
  },
];

/* ─────────────────────────────────────────────
   Styled components
───────────────────────────────────────────── */
const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: #243c70;
`;

const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  background-color: #243c70;
`;

const EmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  background-color: #243c70;
  position: relative;
`;

const SlideInner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 80px 24px;
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
  gap: 48px;
  min-height: 480px;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
    padding: 40px 20px 32px;
    min-height: auto;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 32px 16px 28px;
    gap: 16px;
  }
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SlideLabel = styled.span`
  font-family: Quicksand, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);

  @media (max-width: 480px) {
    display: none;
  }
`;

const SlideH2 = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.1;
  && {
    color: #ffffff;
  }
  margin: 0;

  @media (max-width: 959px) {
    font-size: 30px;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.25;
  }
`;

const SlideP = styled.p`
  font-family: Quicksand, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  && {
    color: rgba(255, 255, 255, 0.82);
  }
  margin: 0;
  max-width: 440px;

  @media (max-width: 959px) {
    max-width: 100%;
    font-size: 15px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SlideCta = styled.a`
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 30px;
  border-radius: 22px;
  background: #ffffff;
  color: #243c70;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  align-self: flex-start;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #e8eef8;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const SlideImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 959px) {
    display: flex;
    justify-content: center;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  max-width: 460px;
  height: 360px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  display: block;

  @media (max-width: 959px) {
    height: 220px;
    max-width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 180px;
    border-radius: 10px;
  }
`;

const EmblaDotsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 16px 0 20px;
  background: #243c70;

  @media (max-width: 480px) {
    padding: 12px 0 16px;
  }
`;

const EmblaDot = styled.button`
  width: ${({ active }) => (active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background: ${({ active }) =>
    active ? "#ffffff" : "rgba(255,255,255,0.35)"};
  border: none;
  cursor: pointer;
  transition: width 0.3s, background 0.3s;
  padding: 18px 0;
  box-sizing: content-box;
`;

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
    Fade(),
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section aria-label="Servicios M-Elevadores">
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {SLIDES.map((slide, i) => (
            <EmblaSlide key={i}>
              <SlideInner>
                <SlideContent>
                  <SlideLabel>{slide.label}</SlideLabel>
                  <SlideH2>{slide.heading}</SlideH2>
                  <SlideP>{slide.description}</SlideP>
                  <Link href={slide.href} passHref>
                    <SlideCta>{slide.cta} →</SlideCta>
                  </Link>
                </SlideContent>
                <SlideImageWrap>
                  <SlideImg
                    src={slide.image}
                    alt={slide.label}
                    loading="lazy"
                  />
                </SlideImageWrap>
              </SlideInner>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
      <EmblaDotsRow>
        {SLIDES.map((_, i) => (
          <EmblaDot
            key={i}
            active={i === selectedIndex}
            onClick={() => scrollTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </EmblaDotsRow>
    </section>
  );
}

export default EmblaCarousel;
