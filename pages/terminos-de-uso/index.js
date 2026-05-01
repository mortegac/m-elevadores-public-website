import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/common/Layout";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";

const PAGE_TITLE = "Términos de Uso | M-Elevadores Chile";
const PAGE_DESCRIPTION =
  "Términos y condiciones de uso del sitio web de M-Elevadores SpA. Información legal sobre el uso del sitio y los servicios ofrecidos.";

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
  padding: 56px 0;

  @media (max-width: 960px) {
    padding: 40px 0;
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
  margin: 0;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

// ─── Content ──────────────────────────────────────────────────────────────────

const ContentSection = styled.section`
  background: #ffffff;
  padding: 0 0 64px;
`;

const ContentInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const SectionHeading = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #243c70;
  margin-top: 36px;
  margin-bottom: 12px;

  &:first-child {
    margin-top: 0;
  }
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #323130;
  margin-bottom: 16px;
`;

// ─── Page component ───────────────────────────────────────────────────────────

const TerminosDeUsoPage = ({ menu, footer }) => {
  const canonicalUrl = `${SITE}/terminos-de-uso`;

  const activeDoc = {
    lang: "es-cl",
    type: "page",
    url: "/terminos-de-uso",
    sitename: SITE,
  };

  const fakePage = {
    data: {
      seoTitle: PAGE_TITLE,
      seodescription: PAGE_DESCRIPTION,
    },
    lang: "es-cl",
    type: "page",
    url: "/terminos-de-uso",
    uid: "terminos-de-uso",
    slugs: ["terminos-de-uso"],
  };

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={canonicalUrl} />
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
                <span aria-current="page">Términos de uso</span>
              </Breadcrumb>

              <HeroH1>Términos de Uso</HeroH1>
              <HeroSubtitle>Última actualización: abril 2026</HeroSubtitle>
            </Container>
          </Hero>

          {/* ── Content ──────────────────────────────────────────────── */}
          <ContentSection>
            <ContentInner>
              <SectionHeading>1. Aceptación de los Términos</SectionHeading>
              <BodyText>
                Al acceder y utilizar el sitio web de M-Elevadores SpA
                (www.melevadores.cl), usted acepta quedar vinculado por los
                presentes Términos de Uso, todas las leyes y regulaciones
                aplicables, y acepta que es responsable del cumplimiento de las
                leyes locales que le sean aplicables.
              </BodyText>
              <BodyText>
                Si no está de acuerdo con alguno de estos términos, le
                solicitamos que no utilice ni acceda a este sitio. Los materiales
                contenidos en este sitio web están protegidos por las leyes de
                derechos de autor y marcas comerciales aplicables en Chile.
              </BodyText>

              <SectionHeading>2. Descripción del Servicio</SectionHeading>
              <BodyText>
                M-Elevadores SpA es una empresa chilena especializada en la
                venta, instalación y mantenimiento de salvaescaleras, plataformas
                elevadoras, ascensores residenciales y servicios de
                modernización de equipos de elevación. Este sitio web tiene como
                propósito proporcionar información comercial, técnica y de
                contacto sobre dichos productos y servicios.
              </BodyText>
              <BodyText>
                Las cotizaciones y precios publicados o generados a través de los
                formularios del sitio tienen carácter referencial. Todo valor
                definitivo queda sujeto a confirmación mediante visita técnica al
                lugar de instalación, evaluación de condiciones estructurales y
                suscripción de un contrato formal entre las partes. M-Elevadores
                se reserva el derecho de ajustar cualquier cotización previa a la
                firma del contrato.
              </BodyText>

              <SectionHeading>3. Propiedad Intelectual</SectionHeading>
              <BodyText>
                Todo el contenido publicado en este sitio web, incluyendo pero no
                limitado a textos, imágenes, fotografías, ilustraciones,
                logotipos, íconos, videos, software e interfaces gráficas, es
                propiedad exclusiva de M-Elevadores SpA o de sus proveedores de
                contenido, y se encuentra protegido por las leyes de propiedad
                intelectual de la República de Chile y los tratados
                internacionales aplicables.
              </BodyText>
              <BodyText>
                La marca registrada M-Elevadores y todos sus elementos
                distintivos son propiedad de M-Elevadores SpA. Queda
                estrictamente prohibida cualquier reproducción, distribución,
                transmisión, exhibición pública, modificación o creación de obras
                derivadas de cualquier material de este sitio sin la autorización
                previa y por escrito de M-Elevadores SpA.
              </BodyText>

              <SectionHeading>4. Uso del Sitio Web</SectionHeading>
              <BodyText>
                Usted se compromete a utilizar este sitio web exclusivamente para
                fines lícitos y de conformidad con la ley, las buenas costumbres
                y estos Términos de Uso. En particular, queda prohibido:
              </BodyText>
              <BodyText>
                (a) Realizar scraping, extracción automatizada de datos o acceso
                masivo a los contenidos del sitio mediante robots, crawlers u
                otras herramientas automatizadas sin autorización expresa; (b)
                Enviar comunicaciones no solicitadas (spam) a través de cualquier
                formulario o canal disponible en el sitio; (c) Intentar obtener
                acceso no autorizado a los sistemas informáticos, servidores o
                bases de datos vinculados a este sitio; (d) Publicar o transmitir
                contenido ilegal, ofensivo, difamatorio o que vulnere derechos de
                terceros; (e) Utilizar los datos de contacto publicados para fines
                distintos de la comunicación comercial legítima con M-Elevadores.
              </BodyText>

              <SectionHeading>5. Formularios y Cotizaciones</SectionHeading>
              <BodyText>
                Los datos personales y de contacto que usted ingrese a través de
                los formularios de cotización, contacto o cualquier otro
                formulario disponible en el sitio, serán utilizados exclusivamente
                para fines de comunicación comercial, atención al cliente y
                gestión de solicitudes relacionadas con los productos y servicios
                de M-Elevadores SpA. Su uso se rige además por nuestra Política
                de Privacidad.
              </BodyText>
              <BodyText>
                Las cotizaciones generadas a partir de las solicitudes enviadas
                por este medio tienen una validez máxima de 30 días corridos
                desde su emisión, salvo que se indique expresamente un plazo
                distinto. Todos los precios se expresan en pesos chilenos (CLP) y
                están sujetos al Impuesto al Valor Agregado (IVA) vigente, salvo
                indicación en contrario.
              </BodyText>

              <SectionHeading>
                6. Instalaciones y Contratos
              </SectionHeading>
              <BodyText>
                La prestación efectiva de servicios de venta, instalación,
                mantenimiento o modernización de equipos de elevación se
                formaliza exclusivamente mediante la suscripción de documentos
                contractuales separados, firmados por ambas partes. Ninguna
                comunicación, cotización ni contenido publicado en este sitio
                constituye por sí solo un contrato vinculante entre el usuario y
                M-Elevadores SpA.
              </BodyText>
              <BodyText>
                Todos los trabajos de instalación realizados por M-Elevadores
                SpA se ejecutan en cumplimiento de la normativa chilena vigente,
                incluyendo la Ley N° 20.296 sobre ascensores y otras instalaciones
                similares, y la Norma Chilena NCh440 y sus actualizaciones, así
                como cualquier otra disposición técnica o reglamentaria que resulte
                aplicable según el tipo de equipo e instalación.
              </BodyText>

              <SectionHeading>7. Limitación de Responsabilidad</SectionHeading>
              <BodyText>
                M-Elevadores SpA no garantiza que el sitio web esté disponible de
                manera ininterrumpida, libre de errores o exento de virus u otros
                componentes dañinos. El acceso al sitio puede ser suspendido o
                interrumpido temporalmente sin previo aviso por razones de
                mantenimiento, actualización o causas ajenas a la voluntad de la
                empresa.
              </BodyText>
              <BodyText>
                M-Elevadores SpA no se responsabiliza por ningún daño directo,
                indirecto, incidental, especial o consecuente que resulte del uso
                o la imposibilidad de uso de este sitio, ni por decisiones
                tomadas con base en la información publicada en él sin la
                existencia de un contrato formal suscrito entre las partes. La
                información de carácter técnico publicada en el sitio es
                orientativa y puede variar según las condiciones específicas de
                cada proyecto.
              </BodyText>

              <SectionHeading>
                8. Ley Aplicable y Jurisdicción
              </SectionHeading>
              <BodyText>
                Estos Términos de Uso se rigen e interpretan de conformidad con
                las leyes de la República de Chile, sin perjuicio de las normas
                sobre conflicto de leyes. Cualquier disputa, controversia o
                reclamación que surja en relación con estos Términos de Uso, el
                uso del sitio o los servicios de M-Elevadores SpA, y que no pueda
                resolverse de manera amistosa entre las partes, se someterá a la
                competencia de los tribunales ordinarios de justicia de la ciudad
                de Santiago de Chile.
              </BodyText>

              <SectionHeading>9. Modificaciones</SectionHeading>
              <BodyText>
                M-Elevadores SpA se reserva el derecho de modificar, actualizar
                o reemplazar estos Términos de Uso en cualquier momento y sin
                previo aviso. Los cambios entrarán en vigencia de manera
                inmediata a partir de su publicación en esta misma URL. La fecha
                de última actualización indicada al inicio del documento reflejará
                la versión vigente.
              </BodyText>
              <BodyText>
                Es responsabilidad del usuario revisar periódicamente esta página
                para estar informado sobre cualquier modificación. El uso
                continuado del sitio web con posterioridad a la publicación de
                cambios en los Términos de Uso constituirá la aceptación de dichos
                cambios.
              </BodyText>

              <SectionHeading>10. Contacto</SectionHeading>
              <BodyText>
                Si tiene preguntas, comentarios o inquietudes sobre estos Términos
                de Uso, puede contactarnos a través de los siguientes medios:
              </BodyText>
              <BodyText>
                <strong>M-Elevadores SpA</strong>
                <br />
                Marchant Pereira 150 of. 1002, Providencia, Santiago, Chile
                <br />
                Correo electrónico:{" "}
                <a
                  href="mailto:contacto@melevadores.cl"
                  style={{ color: "#243c70", textDecoration: "underline" }}
                >
                  contacto@melevadores.cl
                </a>
                <br />
                Teléfono:{" "}
                <a
                  href="tel:+56959382761"
                  style={{ color: "#243c70", textDecoration: "underline" }}
                >
                  +56 9 5938 2761
                </a>
              </BodyText>
            </ContentInner>
          </ContentSection>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default TerminosDeUsoPage;

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
        error: JSON.stringify(error),
      },
      revalidate: 300,
    };
  }
}
