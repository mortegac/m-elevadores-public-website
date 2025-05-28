"use strict";
(() => {
var exports = {};
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 3922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(2333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(4065)

      const appMod = __webpack_require__(5265)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(2114)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? {
          afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        }
        : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(9185),
        notFoundModule: __webpack_require__(1635),
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: rewrites,
        i18n: undefined,
        page: "/landing/[uid]",
        buildId: "Hr1ofxSb1ahB9bwHflHBn",
        escapedBuildId: "Hr1ofxSb1ahB9bwHflHBn",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"b27d76c4eb03891779ece7041f237087",previewModeSigningKey:"3f3826ebe285a82c690b8f91346bf0dc1bd4ea03ffe3a03b949ab364f73c98fe",previewModeEncryptionKey:"83cf67d8f4ede923ec9aa83f27b6fce5690ef4b788acd5dd5d655f7f264b745a"}
      })
      
    

/***/ }),

/***/ 2114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _uid_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@prismicio/react/dist/SliceZone.js + 1 modules
var SliceZone = __webpack_require__(172);
// EXTERNAL MODULE: ./prismicio.js + 1 modules
var prismicio = __webpack_require__(1322);
// EXTERNAL MODULE: ./slices/index.js + 83 modules
var slices = __webpack_require__(1555);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./components/common/LandingNav/LandingNavStyles.js

const Nav = styled_components_cjs/* default.nav.withConfig */.ZP.nav.withConfig({
    componentId: "sc-15ba422f-0"
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const NavLinks = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-15ba422f-1"
})`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;

  li a {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    padding-bottom: 4px;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background: #3962e9;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 1160px) {
    display: none;
  }
`;
const MobileMenuIcon = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-15ba422f-2"
})`
  display: none;

  @media (max-width: 1160px) {
    display: block;
    cursor: pointer;
  }
`;
const MobileMenu = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-15ba422f-3"
})`
  position: fixed;
  top: 0;
  right: ${({ isOpen  })=>isOpen ? "0" : "-100%"};
  height: 100vh;
  width: 100%;
  background-color: #243c70;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  padding: 1rem;
  z-index: 1000;
  }
`;
const CloseIcon = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-15ba422f-4"
})`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
const MobileNavLinks = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-15ba422f-5"
})`
  list-style: none;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  
    li a {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    padding-bottom: 4px;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background: #3962e9;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
`;
const Logo = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-15ba422f-6"
})`
  img {
    height: 40px;
    width: auto;
  }
`;
const ContactButtons = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-15ba422f-7"
})`
  display: flex;
  gap: 1rem;

  @media (max-width: 1160px) {
    display: none;
  }

  .contact-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 10px;
    background: #3962e9;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;

    p {
      font-weight: bold;
    }

    img {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: #0059c1;
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.mjs
var fi = __webpack_require__(2777);
// EXTERNAL MODULE: ./node_modules/@prismicio/react/dist/PrismicRichText.js + 7 modules
var PrismicRichText = __webpack_require__(8152);
;// CONCATENATED MODULE: ./components/common/LandingNav/LandingNav.js






const LandingNav = ({ landingNav  })=>{
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,react.useState)(false);
    const logo = landingNav?.data?.logo?.url;
    const logourl = landingNav?.data?.logourl?.url || "/";
    const navlinks = landingNav?.data?.navlink || [];
    const contactButtons = landingNav?.data?.contanctbtn || [];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Nav, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: logourl,
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: logo && /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: logo,
                            alt: "Logo"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(NavLinks, {
                children: navlinks.map((item, index)=>{
                    const name = item.name?.[0]?.text || "Link";
                    const href = item.link?.url || "#";
                    return /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: href.startsWith("#") ? /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: href,
                            children: name
                        }) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: href,
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: name
                            })
                        })
                    }, index);
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ContactButtons, {
                children: contactButtons.map((btn, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: btn.link?.url || "#",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            className: "contact-btn",
                            children: [
                                btn.icon?.url && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: btn.icon.url,
                                    alt: "Icon"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(PrismicRichText/* PrismicRichText */.v, {
                                    field: btn.label
                                })
                            ]
                        })
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MobileMenuIcon, {
                onClick: ()=>setIsMenuOpen(true),
                children: /*#__PURE__*/ jsx_runtime.jsx(fi/* FiMenu */.cur, {
                    size: 28,
                    color: "white"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MobileMenu, {
                isOpen: isMenuOpen,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: logourl,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: logo && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: logo,
                                            alt: "Logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(CloseIcon, {
                                onClick: ()=>setIsMenuOpen(false),
                                children: /*#__PURE__*/ jsx_runtime.jsx(fi/* FiX */.q5L, {
                                    size: 28,
                                    color: "white"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MobileNavLinks, {
                        children: navlinks.map((item, index)=>{
                            const name = item.name?.[0]?.text || "Link";
                            const href = item.link?.url || "#";
                            return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                onClick: ()=>setIsMenuOpen(false),
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: href,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: name
                                    })
                                })
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const LandingNav_LandingNav = (LandingNav);

;// CONCATENATED MODULE: ./components/common/LandingFooter/LandingFooterStyles.js

const Footer = styled_components_cjs/* default.footer.withConfig */.ZP.footer.withConfig({
    componentId: "sc-8b08b82d-0"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  padding: 1rem 10rem;
  background-color: #222222;

  .footer-top {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    .footer-logo {
      max-width: 200px;
      margin-bottom: 2rem;
    }

    .footer-description {
      text-align: justify;
      width: 70%;
      font-size: 1rem;
      color: #fff;
    }
  }

  .footer-contacts {
    margin-top: 2rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center; // Centers .contact-item horizontally
    gap: 1rem;
    width: 100%;

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      max-width: 300px;
      justify-content: start;

      .contact-icon {
        width: 30px;
        height: 30px;
        margin-right: 1rem;
      }

      a {
        color: #0070f3;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      p,
      span,
      div {
        color: #fff;
      }
    }
  }

  .footer-bottom {
    margin-top: 2rem;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    font-size: 0.875rem;
    color: #999;
    border-top: 1px solid #ddd;
    padding-top: 1rem;
    text-align: center;
  }

  /* Mobile styles */

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;

    .footer-top {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      .footer-description {
        width: 100%;
      }
    }

    .footer-contacts {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      align-items: start;
    }

    .footer-bottom {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      margin-top: 0;
    }
  }
`;

;// CONCATENATED MODULE: ./components/common/LandingFooter/LandingFooter.js




const LandingFooter = ({ landingFooter  })=>{
    const logo = landingFooter?.data?.logo?.url;
    const description = landingFooter?.data?.description || [];
    const copyright = landingFooter?.data?.copyright || [];
    const contactItems = landingFooter?.data?.contactgroup || [];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Footer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer-top",
                children: [
                    logo && /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: logo,
                        alt: "Footer Logo",
                        className: "footer-logo"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "footer-description",
                        children: /*#__PURE__*/ jsx_runtime.jsx(PrismicRichText/* PrismicRichText */.v, {
                            field: description
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "footer-contacts",
                children: contactItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "contact-item",
                        children: [
                            item.icon?.url && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: item.icon.url,
                                alt: "Icon",
                                className: "contact-icon"
                            }),
                            item.url?.url ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: item.url.url,
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(PrismicRichText/* PrismicRichText */.v, {
                                        field: item.label
                                    })
                                })
                            }) : /*#__PURE__*/ jsx_runtime.jsx(PrismicRichText/* PrismicRichText */.v, {
                                field: item.label
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "footer-bottom",
                children: /*#__PURE__*/ jsx_runtime.jsx(PrismicRichText/* PrismicRichText */.v, {
                    field: copyright
                })
            })
        ]
    });
};
/* harmony default export */ const LandingFooter_LandingFooter = (LandingFooter);

// EXTERNAL MODULE: ./utils/seo.js
var seo = __webpack_require__(3553);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.mjs
var fa = __webpack_require__(2091);
;// CONCATENATED MODULE: ./components/LayoutLanding.js







const WhatsAppButton = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
    componentId: "sc-c12fdda8-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34d039;
  border-radius: 10px;
  width: fit-content;
  padding: 5px;
  position: fixed;
  bottom: 2rem;
  right: 3.5rem;
  z-index: 1000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    display: block;
    right: 1rem;
    bottom: 1rem;
  }
`;
const LandingLayout = (props)=>{
    const { children , header , footer , page , activeDocMeta  } = props;
    const title = page?.data?.seoTitle || "M-Elevadores";
    const description = page?.data?.seodescription || "-";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: `${activeDocMeta.sitename}${page ? `/${page.uid}` : ""}`
                    }),
                    (0,seo/* getMetaTags */.LX)({
                        description,
                        title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(LandingNav_LandingNav, {
                landingNav: header
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(WhatsAppButton, {
                href: "https://api.whatsapp.com/send?phone=56959382761&text=Hola,%20Quiero%20cotizar%20mi%20proyecto%20con%20ustedes",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ jsx_runtime.jsx(fa/* FaWhatsapp */.xpo, {
                    color: "white",
                    size: 32
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(LandingFooter_LandingFooter, {
                landingFooter: footer
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/landing/[uid].js





const LandingPage = (props)=>{
    if (props?.error || !props?.page?.lang) {
        ;
        return /*#__PURE__*/ jsx_runtime.jsx("p", {
            children: "Error loading page."
        });
    }
    const { page , landingNav , landingFooter  } = props;
    const activeDoc = {
        lang: page.lang,
        type: page.type,
        url: page.url,
        sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost"
    };
    return /*#__PURE__*/ jsx_runtime.jsx(LandingLayout, {
        header: landingNav,
        footer: landingFooter,
        page: page,
        activeDocMeta: activeDoc,
        children: /*#__PURE__*/ jsx_runtime.jsx(SliceZone/* SliceZone */.p, {
            slices: page.data?.slices,
            components: slices/* components */.wx
        })
    });
};
async function getStaticProps({ previewData , params: { uid  }  }) {
    try {
        const client = (0,prismicio/* createClient */.eI)({
            previewData
        });
        const page = await client.getByUID("landingpage", uid);
        const landingNav = await client.getSingle("landingnav");
        const landingFooter = await client.getSingle("landingfooter");
        return {
            props: {
                page: page || null,
                landingNav,
                landingFooter
            },
            revalidate: 60
        };
    } catch (error) {
        return {
            props: {
                error: JSON.stringify(error)
            }
        };
    }
}
async function getStaticPaths() {
    const client = (0,prismicio/* createClient */.eI)();
    const pages = await client.getAllByType("landingpage");
    return {
        paths: pages.map((page)=>({
                params: {
                    uid: page.uid
                }
            })),
        fallback: true
    };
}
/* harmony default export */ const _uid_ = (LandingPage);


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 9491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7643:
/***/ ((module) => {

module.exports = require("diagnostics_channel");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ 7282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [666,266,341,588,555,553], () => (__webpack_exec__(3922)));
module.exports = __webpack_exports__;

})();