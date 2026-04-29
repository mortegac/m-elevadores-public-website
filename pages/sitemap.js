import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { createClient } from "../prismicio";
import { asText } from "@prismicio/helpers";

const SITE = process.env.NEXT_PUBLIC_SITENAME || "https://www.melevadores.cl";

// ── Styles ────────────────────────────────────────────────────────────────────

const Page = styled.div`
  background: #f5f7fa;
  min-height: 100vh;
  padding: 64px 24px;
  font-family: "Quicksand", sans-serif;
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 48px;
  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #243c70;
    margin: 0 0 8px;
  }
  p {
    color: #605e5c;
    font-size: 1rem;
  }
`;

const Category = styled.section`
  background: #fff;
  border-radius: 12px;
  padding: 28px 32px;
  margin-bottom: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 12px;

  h2 {
    font-size: 1rem;
    font-weight: 700;
    color: #243c70;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0;
  }

  span {
    background: #e8edf7;
    color: #243c70;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 99px;
  }
`;

const PageGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
`;

const PageItem = styled.li`
  a {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 12px 16px;
    background: #f8f9ff;
    border: 1px solid #e8edf7;
    border-radius: 8px;
    text-decoration: none;
    transition: border-color 0.15s, background 0.15s;

    &:hover {
      border-color: #0066cc;
      background: #eef3ff;
    }
  }
`;

const PageTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #323130;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PageUrl = styled.span`
  font-size: 0.75rem;
  color: #0066cc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 4px;
  align-self: flex-start;
  background: ${({ type }) =>
    type === "homepage"
      ? "#d4edda"
      : type === "landing"
      ? "#fff3cd"
      : "#e2e8f0"};
  color: ${({ type }) =>
    type === "homepage"
      ? "#155724"
      : type === "landing"
      ? "#856404"
      : "#4a5568"};
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 0.8rem;
  color: #a19f9d;
  a {
    color: #0066cc;
    text-decoration: none;
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

export default function SitemapPage({ homepage, pages, landings, generatedAt }) {
  const total = 1 + pages.length + landings.length;

  return (
    <>
      <Head>
        <title>Mapa del Sitio | M-Elevadores</title>
        <meta
          name="description"
          content="Directorio completo de todas las páginas de M-Elevadores — ascensores, salvaescaleras y plataformas elevadoras en Chile."
        />
        <link rel="canonical" href={`${SITE}/sitemap`} />
      </Head>

      <Page>
        <Inner>
          <Hero>
            <h1>Mapa del Sitio</h1>
            <p>
              {total} página{total !== 1 ? "s" : ""} en{" "}
              <strong>melevadores.cl</strong>
            </p>
          </Hero>

          {/* Inicio */}
          <Category>
            <CategoryHeader>
              <h2>Inicio</h2>
              <span>1</span>
            </CategoryHeader>
            <PageGrid>
              <PageItem>
                <Link href="/">
                  <a>
                    <PageTitle>
                      {homepage?.data?.seoTitle || "M-Elevadores"}
                    </PageTitle>
                    <PageUrl>/</PageUrl>
                    <Badge type="homepage">Inicio</Badge>
                  </a>
                </Link>
              </PageItem>
            </PageGrid>
          </Category>

          {/* Páginas principales */}
          {pages.length > 0 && (
            <Category>
              <CategoryHeader>
                <h2>Páginas</h2>
                <span>{pages.length}</span>
              </CategoryHeader>
              <PageGrid>
                {pages.map((p) => (
                  <PageItem key={p.uid}>
                    <Link href={`/${p.uid}`}>
                      <a>
                        <PageTitle>
                          {p.data?.seoTitle || p.uid}
                        </PageTitle>
                        <PageUrl>/{p.uid}</PageUrl>
                        <Badge type="page">Página</Badge>
                      </a>
                    </Link>
                  </PageItem>
                ))}
              </PageGrid>
            </Category>
          )}

          {/* Landing pages */}
          {landings.length > 0 && (
            <Category>
              <CategoryHeader>
                <h2>Landing Pages</h2>
                <span>{landings.length}</span>
              </CategoryHeader>
              <PageGrid>
                {landings.map((p) => (
                  <PageItem key={p.uid}>
                    <Link href={`/landing/${p.uid}`}>
                      <a>
                        <PageTitle>
                          {p.data?.seoTitle || p.uid}
                        </PageTitle>
                        <PageUrl>/landing/{p.uid}</PageUrl>
                        <Badge type="landing">Landing</Badge>
                      </a>
                    </Link>
                  </PageItem>
                ))}
              </PageGrid>
            </Category>
          )}

          <Footer>
            Generado el {generatedAt} ·{" "}
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar sitemap.xml
            </a>
          </Footer>
        </Inner>
      </Page>
    </>
  );
}

export async function getStaticProps() {
  try {
    const client = createClient();
    const [homepage, pages, landings] = await Promise.all([
      client.getSingle("homepage").catch(() => null),
      client.getAllByType("page"),
      client.getAllByType("landingpage"),
    ]);

    return {
      props: {
        homepage: homepage
          ? { data: { seoTitle: homepage.data?.seoTitle || null } }
          : null,
        pages: pages.map((p) => ({
          uid: p.uid,
          data: { seoTitle: p.data?.seoTitle || null },
        })),
        landings: landings.map((p) => ({
          uid: p.uid,
          data: { seoTitle: p.data?.seoTitle || null },
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
      props: { homepage: null, pages: [], landings: [], generatedAt: "-" },
      revalidate: 60,
    };
  }
}
