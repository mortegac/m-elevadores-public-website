import "react-phone-number-input/style.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { ThemeProvider } from "styled-components";
import { Amplify } from "aws-amplify";

import { repositoryName, linkResolver } from "../prismicio";
import { GlobalStyle, Theme } from "../components/styles";
import * as gtag from "../utils/gtag";
import outputs from "../amplify_outputs.json";

// Configure Amplify once at app startup (same pattern as melevadores-sdk-frontend-v2)
Amplify.configure(outputs, { ssr: true });

const GA_ID = "G-VJZB8M2VYD";

const internalLinkComponent = ({ href, children, ...props }) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
);

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics — deferred until page is interactive */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
      {/* Google Tag Manager — deferred until page is interactive */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5TR6ZVP4');`,
        }}
      />
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={internalLinkComponent}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <ThemeProvider theme={Theme}>
            <GlobalStyle theme={Theme} />
            <Component {...pageProps} />
          </ThemeProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}
