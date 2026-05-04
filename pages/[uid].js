import React from "react";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices/index";
import { Layout } from "../components/common/Layout";
import CotizacionBanner from "../components/common/CotizacionBanner";
import EmblaCarousel from "../components/common/EmblaCarousel";
import { PRODUCTS } from "../lib/products";

const Page = (props) => {
  if (props?.error || !props || !props?.page?.lang) {
    return null;
  }

  const { page, menu, footer } = props;
  const { lang, type, url } = page;

  const activeDoc = {
    lang,
    type,
    url,
    sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost",
  };

  return (
    <Layout
      header={menu || {}}
      footer={footer || {}}
      page={page}
      activeDocMeta={activeDoc}
    >
      {page?.uid === "cotiza" && <EmblaCarousel />}
      <SliceZone slices={page?.data?.slices} components={components} />
      {(page?.uid === "nosotros" || page?.uid === "cotiza") && <CotizacionBanner products={PRODUCTS} />}
    </Layout>
  );
};

export async function getStaticProps({ previewData, params: { uid } }) {
  try {
    const client = createClient({ previewData });
    const [page, menu, footer] = await Promise.all([
      client.getByUID("page", uid),
      client.getSingle("menutop"),
      client.getSingle("footermenu"),
    ]);

    return {
      props: { page, menu, footer, uid },
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
  const pages = await client.getAllByType("page");
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: "blocking",
  };
}

export default Page;
