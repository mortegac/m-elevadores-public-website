import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { createClient } from "../prismicio";
import { Layout } from "../components/common/Layout";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";

// ── Design tokens (M-Elevadores brand) ───────────────────────────────────────
const BLUE = "#0066CC";
const NAVY = "#243C70";
const DARK = "#001133";
const GRAY = "#605E5C";
const LIGHT_BG = "#F8FAFC";
const BORDER = "#E2E8F0";

// ── Styles ────────────────────────────────────────────────────────────────────

const HeroSection = styled.section`
  background-color: ${LIGHT_BG};
  border-bottom: 1px solid ${BORDER};
  padding: 48px 0;
`;

const HeroInner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;

  h1 {
    font-family: "Quicksand", sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 800;
    color: ${DARK};
    margin: 0 0 8px;
  }

  p {
    font-size: 1rem;
    color: ${GRAY};
    margin: 0;
  }
`;

const MainSection = styled.main`
  background: #fff;
  padding: 48px 0 64px;
`;

const MainInner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Column = styled.div`
  width: 100%;
`;

const CategoryTitle = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${DARK};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-left: 3px solid ${BLUE};
  padding-left: 12px;
  margin: 0 0 16px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2px 32px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const LinkItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${NAVY};
    font-size: 0.9rem;
    text-decoration: none;
    padding: 8px 0;
    font-family: "Quicksand", sans-serif;
    transition: color 0.15s;
    border-bottom: 1px solid ${BORDER};

    &::before {
      content: "→";
      color: ${BLUE};
      font-size: 0.75rem;
      flex-shrink: 0;
    }

    &:hover {
      color: ${BLUE};
      text-decoration: underline;
    }
  }
`;

const PageLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-left: auto;
  background: ${({ variant }) =>
    variant === "homepage" ? "#dbeafe" : variant === "landing" ? "#fef3c7" : "#e0e7ff"};
  color: ${({ variant }) =>
    variant === "homepage" ? "#1e40af" : variant === "landing" ? "#92400e" : "#3730a3"};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${BORDER};
  margin: 40px 0 0;
`;

const FooterNote = styled.p`
  font-size: 0.8rem;
  color: #a19f9d;
  margin: 16px 0 0;
  text-align: right;

  a {
    color: ${BLUE};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

export default function SitemapPage({
  menu,
  footer,
  page,
  activeDocMeta,
  pages,
  landings,
  generatedAt,
}) {
  const total = 1 + pages.length + landings.length;

  return (
    <Layout
      header={menu || {}}
      footer={footer || {}}
      page={page}
      activeDocMeta={activeDocMeta}
    >
      <Head>
        <title>Mapa del Sitio | M-Elevadores</title>
        <meta
          name="description"
          content="Directorio completo de todas las páginas de M-Elevadores — ascensores, salvaescaleras y plataformas elevadoras en Chile."
        />
        <link rel="canonical" href={`${SITE}/sitemap`} />
      </Head>

      <HeroSection>
        <HeroInner>
          <h1>Mapa del Sitio</h1>
          <p>
            Encuentra cualquier página de{" "}
            <strong>melevadores.cl</strong> —{" "}
            {total} página{total !== 1 ? "s" : ""} disponible{total !== 1 ? "s" : ""}.
          </p>
        </HeroInner>
      </HeroSection>

      <MainSection>
        <MainInner>
          <Grid>
            {/* Inicio */}
            <Column>
              <CategoryTitle>Inicio</CategoryTitle>
              <LinkList>
                <LinkItem>
                  <Link href="/">
                    <a>
                      Inicio — M-Elevadores
                      <PageLabel variant="homepage">Inicio</PageLabel>
                    </a>
                  </Link>
                </LinkItem>
              </LinkList>
            </Column>

            {/* Páginas principales */}
            {pages.length > 0 && (
              <Column>
                <CategoryTitle>Páginas</CategoryTitle>
                <LinkList>
                  {pages.map((p) => (
                    <LinkItem key={p.uid}>
                      <Link href={`/${p.uid}`}>
                        <a>
                          {p.label || formatUid(p.uid)}
                          <PageLabel variant="page">Página</PageLabel>
                        </a>
                      </Link>
                    </LinkItem>
                  ))}
                </LinkList>
              </Column>
            )}

            {/* Landing pages */}
            {landings.length > 0 && (
              <Column>
                <CategoryTitle>Landing Pages</CategoryTitle>
                <LinkList>
                  {landings.map((p) => (
                    <LinkItem key={p.uid}>
                      <Link href={`/landing/${p.uid}`}>
                        <a>
                          {p.label || formatUid(p.uid)}
                          <PageLabel variant="landing">Landing</PageLabel>
                        </a>
                      </Link>
                    </LinkItem>
                  ))}
                </LinkList>
              </Column>
            )}
          </Grid>

          <Divider />
          <FooterNote>
            Actualizado el {generatedAt} ·{" "}
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
              Descargar sitemap.xml
            </a>
          </FooterNote>
        </MainInner>
      </MainSection>
    </Layout>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatUid(uid = "") {
  return uid
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ── Data fetching ─────────────────────────────────────────────────────────────

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData });

    const [menu, footer, pages, landings] = await Promise.all([
      client.getSingle("menutop").catch(() => ({})),
      client.getSingle("footermenu").catch(() => ({})),
      client.getAllByType("page"),
      client.getAllByType("landingpage"),
    ]);

    const sitemapPage = {
      uid: "sitemap",
      lang: "es-cl",
      type: "page",
      slugs: ["sitemap"],
      data: {
        seoTitle: "Mapa del Sitio | M-Elevadores",
        seodescription:
          "Directorio completo de todas las páginas de M-Elevadores.",
      },
    };

    return {
      props: {
        menu,
        footer,
        page: sitemapPage,
        activeDocMeta: {
          lang: "es-cl",
          type: "page",
          url: "/sitemap",
          sitename: SITE,
        },
        pages: pages.map((p) => ({
          uid: p.uid,
          label: p.data?.seoTitle || null,
        })),
        landings: landings.map((p) => ({
          uid: p.uid,
          label: p.data?.seoTitle || null,
        })),
        generatedAt: new Date().toLocaleDateString("es-CL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      },
      revalidate: 300,
    };
  } catch {
    return {
      props: {
        menu: {},
        footer: {},
        page: {
          uid: "sitemap",
          lang: "es-cl",
          type: "page",
          slugs: ["sitemap"],
          data: { seoTitle: "Mapa del Sitio", seodescription: "" },
        },
        activeDocMeta: { lang: "es-cl", type: "page", url: "/sitemap", sitename: SITE },
        pages: [],
        landings: [],
        generatedAt: "-",
      },
      revalidate: 60,
    };
  }
}
