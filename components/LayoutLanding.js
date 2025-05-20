import Head from "next/head";
import LandingNav from "./common/LandingNav/LandingNav";
import LandingFooter from "./common/LandingFooter/LandingFooter";
import { getMetaTags } from "../utils/seo";

export const LandingLayout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;
  const title = page?.data?.seoTitle || "M-Elevadores";
  const description = page?.data?.seodescription || "-";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="canonical"
          href={`${activeDocMeta.sitename}${page ? `/${page.uid}` : ""}`}
        />
        {getMetaTags({
          description,
          title,
        })}
      </Head>

      <LandingNav landingNav={header} />

      <main>{children}</main>

      <LandingFooter landingFooter={footer} />
    </>
  );
};
