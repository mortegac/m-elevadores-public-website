import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/common/Layout";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";

const PAGE_TITLE = "Política de Privacidad | M-Elevadores Chile";
const PAGE_DESCRIPTION =
  "Política de privacidad de M-Elevadores SpA. Información sobre el tratamiento de datos personales conforme a la Ley 19.628 de Chile.";

// ─── Styled Components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  width: 100%;
  background: #f8fafc;
  font-family: Quicksand, sans-serif;
`;

const Hero = styled.section`
  background: #243c70;
  padding: 56px 0;
`;

const Container = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Breadcrumb = styled.nav`
  font-size: 14px;
  margin-bottom: 16px;

  && a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;

    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }

  && span {
    color: rgba(255, 255, 255, 0.5);
    margin: 0 6px;
  }

  && strong {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }
`;

const HeroTitle = styled.h1`
  && {
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
    margin: 0 0 12px;
    line-height: 1.2;
    font-family: Quicksand, sans-serif;
  }
`;

const HeroSubtitle = styled.p`
  && {
    color: rgba(255, 255, 255, 0.85);
    font-size: 16px;
    margin: 0;
    font-family: Quicksand, sans-serif;
  }
`;

const ContentSection = styled.section`
  background: #ffffff;
  padding: 0 0 64px;
`;

const ContentInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #243c70;
  margin-top: 36px;
  margin-bottom: 12px;
  font-family: Quicksand, sans-serif;

  &:first-child {
    margin-top: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #323130;
  margin-bottom: 16px;
  font-family: Quicksand, sans-serif;
`;

const ContactLink = styled.a`
  color: #243c70;
  text-decoration: underline;

  &:hover {
    color: #1a2e56;
  }
`;

// ─── Page Component ───────────────────────────────────────────────────────────

const PoliticaPrivacidadPage = ({ menu, footer }) => {
  const canonicalUrl = `${SITE}/politica-de-privacidad`;

  const activeDoc = {
    lang: "es-cl",
    type: "page",
    url: "/politica-de-privacidad",
    sitename: SITE,
  };

  const fakePage = {
    data: {
      seoTitle: PAGE_TITLE,
      seodescription: PAGE_DESCRIPTION,
    },
    lang: "es-cl",
    type: "page",
    url: "/politica-de-privacidad",
    uid: "politica-de-privacidad",
    slugs: ["politica-de-privacidad"],
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
          {/* ── Hero ──────────────────────────────────────────────────── */}
          <Hero>
            <Container>
              <Breadcrumb aria-label="Navegación de migas de pan">
                <Link href="/">
                  <a>Inicio</a>
                </Link>
                <span>›</span>
                <strong>Política de privacidad</strong>
              </Breadcrumb>
              <HeroTitle>Política de Privacidad</HeroTitle>
              <HeroSubtitle>Última actualización: abril 2026</HeroSubtitle>
            </Container>
          </Hero>

          {/* ── Content ───────────────────────────────────────────────── */}
          <ContentSection>
            <ContentInner>
              <SectionTitle>1. Responsable del Tratamiento</SectionTitle>
              <Paragraph>
                El responsable del tratamiento de sus datos personales es{" "}
                <strong>M-Elevadores SpA</strong>, con
                domicilio en Marchant Pereira 150 of. 1002, Providencia,
                Santiago, Chile.
              </Paragraph>
              <Paragraph>
                Para cualquier consulta relacionada con el tratamiento de sus
                datos, puede contactarnos a través del correo electrónico{" "}
                <ContactLink href="mailto:contacto@melevadores.cl">
                  contacto@melevadores.cl
                </ContactLink>
                .
              </Paragraph>

              <SectionTitle>2. Datos que Recopilamos</SectionTitle>
              <Paragraph>
                En M-Elevadores recopilamos los siguientes datos personales
                cuando usted completa nuestros formularios de contacto o
                solicitud de cotización:
              </Paragraph>
              <Paragraph>
                <strong>Datos de contacto e identificación:</strong> nombre
                completo, número de teléfono, dirección de correo electrónico,
                dirección de instalación y el mensaje o consulta que nos envía.
              </Paragraph>
              <Paragraph>
                <strong>Datos de navegación:</strong> recopilamos información
                técnica de uso del sitio web mediante cookies de analítica
                (Google Analytics 4). Estos datos incluyen páginas visitadas,
                tiempo de permanencia, dispositivo utilizado y ubicación
                geográfica aproximada. No permiten identificarle directamente.
              </Paragraph>

              <SectionTitle>3. Finalidad del Tratamiento</SectionTitle>
              <Paragraph>
                Los datos personales que nos proporciona son tratados con las
                siguientes finalidades:
              </Paragraph>
              <Paragraph>
                <strong>Gestión de cotizaciones y visitas técnicas:</strong>{" "}
                utilizamos sus datos para responder a sus solicitudes de
                presupuesto, coordinar visitas técnicas al domicilio o lugar de
                instalación, y hacer seguimiento del proceso comercial.
              </Paragraph>
              <Paragraph>
                <strong>Comunicaciones comerciales:</strong> con su
                consentimiento, podemos enviarle información sobre nuestros
                productos, promociones y novedades relacionadas con ascensores,
                plataformas elevadoras y salvaescaleras.
              </Paragraph>
              <Paragraph>
                <strong>Mejora del servicio:</strong> los datos de navegación
                nos permiten analizar el comportamiento de los usuarios en
                nuestro sitio para mejorar la experiencia de uso y optimizar
                nuestros contenidos.
              </Paragraph>

              <SectionTitle>4. Base Legal del Tratamiento</SectionTitle>
              <Paragraph>
                El tratamiento de sus datos personales se realiza al amparo de
                la <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong>{" "}
                de Chile y sus modificaciones posteriores.
              </Paragraph>
              <Paragraph>
                La base de legitimación para el tratamiento de sus datos es,
                según el caso: (a) la ejecución de medidas precontractuales
                solicitadas por usted, como la elaboración de presupuestos; (b)
                su consentimiento expreso para el envío de comunicaciones
                comerciales; y (c) nuestro interés legítimo en el análisis del
                uso del sitio web para su mejora continua.
              </Paragraph>

              <SectionTitle>5. Conservación de Datos</SectionTitle>
              <Paragraph>
                Sus datos personales serán conservados durante un plazo máximo
                de <strong>5 años desde el último contacto</strong> o desde la
                última interacción comercial. Transcurrido este plazo, los datos
                serán eliminados de forma segura o anonimizados.
              </Paragraph>
              <Paragraph>
                En caso de que exista una relación contractual vigente, los
                datos se conservarán durante todo el tiempo que dure dicha
                relación y el período adicional exigido por la legislación
                aplicable.
              </Paragraph>

              <SectionTitle>6. Derechos del Titular</SectionTitle>
              <Paragraph>
                De conformidad con la Ley N° 19.628, usted tiene derecho a
                ejercer los siguientes derechos sobre sus datos personales
                (derechos ARCO):
              </Paragraph>
              <Paragraph>
                <strong>Acceso:</strong> conocer qué datos personales suyos
                tratamos, con qué finalidad y en qué condiciones.
              </Paragraph>
              <Paragraph>
                <strong>Rectificación:</strong> solicitar la corrección de datos
                inexactos o incompletos.
              </Paragraph>
              <Paragraph>
                <strong>Cancelación:</strong> solicitar la eliminación de sus
                datos cuando ya no sean necesarios para los fines para los que
                fueron recopilados.
              </Paragraph>
              <Paragraph>
                <strong>Oposición:</strong> oponerse al tratamiento de sus datos
                en determinadas circunstancias, en particular para el envío de
                comunicaciones comerciales.
              </Paragraph>
              <Paragraph>
                Para ejercer cualquiera de estos derechos, envíe su solicitud
                por escrito a{" "}
                <ContactLink href="mailto:contacto@melevadores.cl">
                  contacto@melevadores.cl
                </ContactLink>
                , indicando su nombre, número de cédula de identidad y el
                derecho que desea ejercer. Responderemos en un plazo máximo de
                30 días hábiles.
              </Paragraph>

              <SectionTitle>7. Cookies</SectionTitle>
              <Paragraph>
                Nuestro sitio web utiliza cookies propias y de terceros. Las
                cookies son pequeños archivos de texto que se almacenan en su
                dispositivo cuando visita un sitio web.
              </Paragraph>
              <Paragraph>
                <strong>Cookies de analítica:</strong> utilizamos{" "}
                <strong>Google Analytics 4 (GA4)</strong> para medir el
                rendimiento y uso del sitio. Estas cookies recopilan información
                de forma anónima y agregada. Google puede transferir esta
                información a terceros cuando así lo exija la legislación, o
                cuando dichos terceros procesen la información en nombre de
                Google.
              </Paragraph>
              <Paragraph>
                Puede desactivar las cookies en cualquier momento desde la
                configuración de su navegador. Tenga en cuenta que deshabilitar
                las cookies puede afectar la funcionalidad del sitio. Para más
                información sobre cómo deshabilitar las cookies según su
                navegador, consulte la sección de ayuda del mismo.
              </Paragraph>

              <SectionTitle>8. Transferencias Internacionales</SectionTitle>
              <Paragraph>
                Sus datos pueden ser transferidos a servidores ubicados fuera de
                Chile, en particular a:
              </Paragraph>
              <Paragraph>
                <strong>Vercel Inc. (EE.UU.):</strong> plataforma de alojamiento
                de nuestro sitio web. Vercel actúa como encargado del
                tratamiento y garantiza medidas de seguridad adecuadas conforme
                a sus términos de servicio y políticas de privacidad.
              </Paragraph>
              <Paragraph>
                <strong>Google LLC (EE.UU.):</strong> proveedor de Google
                Analytics 4. Google se adhiere al Marco de Privacidad de Datos
                entre la UE y EE.UU. y cuenta con certificaciones que garantizan
                niveles de protección adecuados.
              </Paragraph>
              <Paragraph>
                Estas transferencias se realizan con las debidas garantías de
                seguridad y protección de datos, conforme a lo establecido en la
                legislación chilena vigente.
              </Paragraph>

              <SectionTitle>9. Modificaciones a esta Política</SectionTitle>
              <Paragraph>
                M-Elevadores SpA se reserva el derecho de modificar la presente
                política de privacidad para adaptarla a cambios legislativos,
                jurisprudenciales o de los servicios que prestamos.
              </Paragraph>
              <Paragraph>
                Cualquier modificación será publicada en esta misma página. La
                fecha de la última actualización se indicará al inicio del
                documento. Le recomendamos revisar periódicamente esta política
                para mantenerse informado sobre cómo protegemos sus datos.
              </Paragraph>

              <SectionTitle>10. Contacto</SectionTitle>
              <Paragraph>
                Si tiene alguna pregunta, comentario o solicitud relacionada con
                esta política de privacidad o con el tratamiento de sus datos
                personales, puede contactarnos a través de los siguientes medios:
              </Paragraph>
              <Paragraph>
                Correo electrónico:{" "}
                <ContactLink href="mailto:contacto@melevadores.cl">
                  contacto@melevadores.cl
                </ContactLink>
              </Paragraph>
              <Paragraph>
                Teléfono:{" "}
                <ContactLink href="tel:+56959382761">
                  +56 9 5938 2761
                </ContactLink>
              </Paragraph>
              <Paragraph>
                Dirección: Marchant Pereira 150 of. 1002, Providencia, Santiago,
                Chile.
              </Paragraph>
            </ContentInner>
          </ContentSection>
        </PageWrapper>
      </Layout>
    </>
  );
};

// ─── Data Fetching ────────────────────────────────────────────────────────────

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

export default PoliticaPrivacidadPage;
