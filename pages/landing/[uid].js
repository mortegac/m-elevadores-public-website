import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { LandingLayout } from "../../components/LayoutLanding";

const LandingPage = (props) => {
  if (props?.error || !props?.page?.lang) {
    return null;
  }

  const { page, landingNav, landingFooter } = props;

  const activeDoc = {
    lang: page.lang,
    type: page.type,
    url: page.url,
    sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost",
  };

  return (
    <LandingLayout
      header={landingNav}
      footer={landingFooter}
      page={page}
      activeDocMeta={activeDoc}
    >
      <SliceZone slices={page.data?.slices} components={components} />
    </LandingLayout>
  );
};

export async function getStaticProps({ previewData, params: { uid } }) {
  try {
    const client = createClient({ previewData });
    const [page, landingNav, landingFooter] = await Promise.all([
      client.getByUID("landingpage", uid),
      client.getSingle("landingnav"),
      client.getSingle("landingfooter"),
    ]);

    return {
      props: { page, landingNav, landingFooter },
      revalidate: 60,
    };
  } catch (error) {
    if (
      error?.message?.includes("No documents") ||
      error?.response?.status === 404
    ) {
      return { notFound: true };
    }
    return { props: { error: JSON.stringify(error) } };
  }
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("landingpage");
  return {
    paths: pages.map((page) => ({ params: { uid: page.uid } })),
    fallback: "blocking",
  };
}

export default LandingPage;
