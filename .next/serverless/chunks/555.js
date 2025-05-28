"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 7351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_z": () => (/* reexport */ PageContainer_PageContainer),
  "S$": () => (/* reexport */ SectionContainer_SectionContainer),
  "HV": () => (/* reexport */ SliceContainer_js_SliceContainer),
  "ZD": () => (/* reexport */ SliceFactory)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1581);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./components/common/Containers/PageContainer/PageContainerStyles.js

const PageContainerBase = styled_components_cjs/* default.main.withConfig */.ZP.main.withConfig({
    componentId: "sc-6f79a41e-0"
})`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  margin: 0;
  margin-top: 64px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    margin-top: 56px;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    font-family: ${(props)=>props.theme.typography.fontFamily};
    letter-spacing: ${(props)=>props.theme.typography.letterSpacing};
  }

  h1 {
    color: ${(props)=>props.theme.colors.textPrimary};
    font-size: ${(props)=>props.theme.typography.h1.desktop.fontSize};
    font-weight: ${(props)=>props.theme.typography.h1.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h1.desktop.lineHeight};
  }

  h2 {
    color: ${(props)=>props.theme.colors.textPrimary};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    font-weight: ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      font-size: ${(props)=>props.theme.typography.h2.mobile.fontSize};
      line-height: ${(props)=>props.theme.typography.h2.mobile.lineHeight};
    }
  }
  h3 {
    color: ${(props)=>props.theme.colors.textPrimary};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    font-weight: ${(props)=>props.theme.typography.h3.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      font-size: ${(props)=>props.theme.typography.h3.mobile.fontSize};
      line-height: ${(props)=>props.theme.typography.h3.mobile.lineHeight};
    }
  }

  p {
    color: ${(props)=>props.theme.colors.textSecondary};
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      font-size: ${(props)=>props.theme.typography.p.mobile.fontSize};
      line-height: ${(props)=>props.theme.typography.p.mobile.lineHeight};
    }
  }
`;

;// CONCATENATED MODULE: ./components/common/Containers/PageContainer/PageContainer.js



const PageContainer = ({ children , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(PageContainerBase, {
        ...rest,
        children: children
    });
};
PageContainer.propTypes = {
    children: (prop_types_default()).array,
    rest: (prop_types_default()).element
};
PageContainer.defaultProps = {};
/* harmony default export */ const PageContainer_PageContainer = (PageContainer);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/common/Containers/SectionContainer/SectionContainerStyles.js

const SectionContainerBase = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
    componentId: "sc-9d267b7d-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${(props)=>props.theme.sectionContainer.padding.desktop};
  position: relative;
  padding: ${(props)=>props.boxed && "64px 24px"};
  // background: #5FDC00;
  // background: ${(props)=>props.background};
  padding-top: ${(props)=>props.paddingTop};
  padding-bottom: ${(props)=>props.paddingBottom};
  z-index: ${(props)=>props.boxed && "1"};
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    padding: ${(props)=>props.theme.sectionContainer.padding.mobile};
    // padding-top: ${(props)=>props.paddingMobileTop};
    // padding-bottom: ${(props)=>props.paddingMobileBottom};
    // padding: ${(props)=>props.boxed && "0 16px"};
    borderradius: 0;
  }

  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    // margin: ${(props)=>props.boxed && "32px 0"};
    borderradius: 0;
  }
`;
const SectionBackgroundImage = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-9d267b7d-1"
})`
  background-image: url("https://images.prismic.io/m-elevadores/ZsP6KEaF0TcGJFDM_fondo-contruccion.png?auto=format,compress");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    background-image: url("bg-green-light-mobile.svg");
    // display: none;
  }
`;

;// CONCATENATED MODULE: ./components/common/Containers/SectionContainer/SectionContainer.js




// const SectionContainer = ({ children, bgImage, ...rest }) => {
const SectionContainer = ({ children , bgImage , bgImageSrc , bgImageUrl , base , ...rest })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SectionContainerBase, {
        ...rest,
        children: [
            bgImage && /*#__PURE__*/ jsx_runtime.jsx(SectionBackgroundImage, {
                image: bgImageSrc
            }),
            children
        ]
    });
};
SectionContainer.propTypes = {
    children: (prop_types_default()).element,
    rest: (prop_types_default()).element
};
SectionContainer.defaultProps = {};
/* harmony default export */ const SectionContainer_SectionContainer = (SectionContainer);

;// CONCATENATED MODULE: ./components/common/Containers/SliceContainer.js/SliceContainerStyles.js

const SliceContainerBase = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-52bfb5bc-0"
})`
  width: 100%;
  max-width: ${(props)=>props.theme.sliceContainer.maxWidth};
  padding: ${(props)=>props.theme.sliceContainer.padding.desktop};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props)=>props.boxed && "48px"};
  background: ${(props)=>props.boxed && props.theme.colors.bgColorTertiary};
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    padding: ${(props)=>props.boxed && "32px"};
  }
`;

;// CONCATENATED MODULE: ./components/common/Containers/SliceContainer.js/SliceContainer.js



const SliceContainer = ({ children , ...rest })=>/*#__PURE__*/ jsx_runtime.jsx(SliceContainerBase, {
        ...rest,
        children: children
    });
SliceContainer.propTypes = {
    children: (prop_types_default()).element
};
SliceContainer.defaultProps = {};
/* harmony default export */ const SliceContainer_js_SliceContainer = (SliceContainer);

;// CONCATENATED MODULE: ./components/common/Containers/SliceFactory.js


const SliceFactory = (Slice, options = {
    sliceProps: {},
    sliceContainerProps: {},
    sectionContainerProps: {}
})=>{
    const { sliceProps , sliceContainerProps , sectionContainerProps  } = options;
    const SliceWrapper = (props)=>{
        return /*#__PURE__*/ jsx_runtime.jsx(SectionContainer_SectionContainer, {
            ...sectionContainerProps,
            children: /*#__PURE__*/ jsx_runtime.jsx(SliceContainer_js_SliceContainer, {
                ...sliceContainerProps,
                children: /*#__PURE__*/ jsx_runtime.jsx(Slice, {
                    ...props,
                    ...sliceProps
                })
            })
        });
    };
    return SliceWrapper;
};

;// CONCATENATED MODULE: ./components/common/Containers/index.js







/***/ }),

/***/ 1555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wx": () => (/* binding */ components)
});

// UNUSED EXPORTS: CardList, Comparative, Contact, Hero, Ideas, LandingBanner, LandingCallbackForm, LandingCountUp, LandingCustomerReview, LandingFaq, LandingServices, LandingStandout, LandingTimeline, LogoList, Metrics, Projects, Services, Staff

// NAMESPACE OBJECT: ./components/slices/Metrics/variants/default/index.js
var Metrics_variants_default_namespaceObject = {};
__webpack_require__.r(Metrics_variants_default_namespaceObject);
__webpack_require__.d(Metrics_variants_default_namespaceObject, {
  "g": () => (Metrics_variants_default_Default)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/common/Containers/index.js + 7 modules
var Containers = __webpack_require__(7351);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./components/slices/CardList/variants/Default/DefaultStyles.js

const MainContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-e1a7a417-0"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: white;
  h2 {
    text-align: center;
  }
`;
const DefaultStyles_Header = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-e1a7a417-1"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

// EXTERNAL MODULE: ./node_modules/@prismicio/react/dist/PrismicRichText.js + 7 modules
var dist_PrismicRichText = __webpack_require__(8152);
;// CONCATENATED MODULE: ./components/common/ItemsContainer/ItemsContainerStyles.js

const ItemsWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c9547549-0"
})`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
  flex-wrap: wrap;
  flex-direction: row;
`;
const Box = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c9547549-1"
})`
  padding: 20px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: ;
`;
const Item = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c9547549-2"
})`
  background-color: white;
  width: 30%;
  // max-width: "";
  padding: 24px;
  padding-top: 0;
  margin-right: 16px;
  min-height: 320px;
  border-radius: 8px;
  // box-shadow: 0px 3px 15px ${(props)=>props.theme.colors.textLightTertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // border: "";
  text-align: center;

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 45%;
    min-height: unset;
    height: unset;
    min-height: 456px;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    width: 100%;
    min-height: unset;
    height: unset;
  }
`;
const ItemsContainerStyles_Header = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c9547549-3"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
  h3 {
    margin-top: 24px;
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
  }
  .image {
    display: flex;
    justify-content: center;
    margin-bottom: "14px";
  }
`;
const Footer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c9547549-4"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    &:first-child {
      font-weight: "700";
    }
  }
  a {
    p {
      color: ${(props)=>props.theme.colors.primary};
    }
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background: ${(props)=>props.theme.colors.primary};
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
      bottom: 0;
      left: 0;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/prismic-reactjs/dist/prismic-reactjs.js
var prismic_reactjs = __webpack_require__(5833);
;// CONCATENATED MODULE: ./components/common/ItemsContainer/ItemsContainer.js




const ItemsContainer = ({ items  })=>{
    const cards = items;
    return /*#__PURE__*/ jsx_runtime.jsx(ItemsWrapper, {
        children: cards.map((card, i)=>/*#__PURE__*/ jsx_runtime.jsx(Item, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ItemsContainerStyles_Header, {
                    children: [
                        card.cardImage && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "image",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: card.cardImage.url,
                                alt: card.cardImage.alt || "item-image"
                            })
                        }),
                        card.cardTitle && /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                            field: card.cardTitle
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Box, {
                            children: card.cardDescription && /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                field: card.cardDescription
                            })
                        })
                    ]
                })
            }, i))
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 90 modules
var swiper_esm = __webpack_require__(1911);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 15 modules
var swiper_react = __webpack_require__(719);
;// CONCATENATED MODULE: ./components/common/Carousel/CarouselStyles.js

const CarouselStyles_CarouselContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-373bb2cf-0"
})`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .swiper {
    width: auto;
    padding: 0 20px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      padding: 0;
    }
  }
  .swiper-wrapper {
    width: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 24px;
    margin-bottom: 24px;
    @media (max-width: 960px) {
      justify-content: unset;
    }
  }
  .swiper-pagination {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translatey(24px);
  }
  .swiper-slide {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    color: ${(props)=>props.theme.colors.primary};
  }
  .swiper-button-next {
    color: ${(props)=>props.theme.colors.primary};
  }
  .swiper-pagination-bullet {
    background: ${(props)=>props.theme.colors.primary};
    opacity: 1;
    width: 6px;
    height: 6px;
  }
  .swiper-pagination-bullet-active {
    background: ${(props)=>props.theme.colors.secondary};
    opacity: 1;
    width: 6px;
    height: 6px;
    position: relative;
    outline: 2px solid ${(props)=>props.theme.colors.primary};
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
  }
`;
const CarouselStyles_TextCard = styled_components_cjs/* default.span.withConfig */.ZP.span.withConfig({
    componentId: "sc-373bb2cf-1"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 24px;
  // padding: 24px;
  // color: #313F5A;
  // font-size: 16px;
  // font-weight: 500;
  // line-height: 24px;

  h3 {
    margin-top: 16px;
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
  }
  .image {
    display: flex;
    justify-content: center;
    margin-bottom: "14px";
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    width: 100%;
    background: white;
    height: unset;
  }
`;
const CarouselStyles_TextDescription = styled_components_cjs/* default.span.withConfig */.ZP.span.withConfig({
    componentId: "sc-373bb2cf-2"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin-bottom: 8px;
  // margin-top:24px;
  h3 {
    margin-top: 32px;
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
  }
  .image {
    display: flex;
    justify-content: center;
    margin-bottom: "14px";
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    width: 100%;
    background: white;
    height: unset;
  }
`;
const CarouselStyles_Card = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-373bb2cf-3"
})`
  background-color: white;
  width: 80%;
  min-height: 290px;
  padding: 52px;

  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: ${(props)=>props.dandelion && "360px"};
  .image {
    width: 100%;
    max-height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    img {
      width: 100%;
    }
  }

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 300px;
    height: unset;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    width: 100%;
    height: unset;
    padding: 0px;
  }
`;
const CarouselStyles_Header = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-373bb2cf-4"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 8px;
  h3 {
    font-size: 16px;
  }
  .image {
    width: 100%;
  }
`;
const CarouselStyles_Footer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-373bb2cf-5"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    &:first-child {
      font-weight: 700;
    }
  }
  a {
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background: ${(props)=>props.theme.colors.primary};
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
      bottom: 0;
      left: 0;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;

;// CONCATENATED MODULE: ./components/common/Carousel/index.js



// import "swiper/css";


// import { RichText } from "prismic-reactjs";




const Span = ({ text  })=>/*#__PURE__*/ _jsx("span", {
        children: text && text
    });
const Carousel = ({ items  })=>{
    SwiperCore.use();
    // SwiperCore.use([Autoplay]);
    const cards = items;
    return /*#__PURE__*/ _jsx(CarouselContainer, {
        items: items,
        children: /*#__PURE__*/ _jsx(Swiper, {
            modules: [
                Navigation,
                Pagination,
                A11y,
                Autoplay
            ],
            navigation: true,
            centeredSlides: true,
            pagination: {
                clickable: true
            },
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                960: {
                    slidesPerView: 3,
                    centeredSlidesBounds: true
                }
            },
            children: cards.map((slide, i)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                    children: /*#__PURE__*/ _jsx(Card, {
                        children: /*#__PURE__*/ _jsx(Header, {
                            children: slide.cardImage && /*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: slide?.cardImage?.url || null,
                                            alt: slide?.cardImage?.alt || ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(TextCard, {
                                        children: slide?.cardTitle && /*#__PURE__*/ _jsx(PrismicRichText, {
                                            field: slide?.cardTitle || ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(TextDescription, {
                                        children: slide?.cardDescription && /*#__PURE__*/ _jsx(PrismicRichText, {
                                            field: slide?.cardDescription || ""
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }, i))
        })
    });
};

;// CONCATENATED MODULE: ./components/slices/CardList/variants/Default/Default.js






const Base = (slice)=>{
    const { title , description  } = slice.primary;
    const cards = slice.items;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MainContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DefaultStyles_Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                        field: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                        field: description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ItemsContainer, {
                items: cards
            })
        ]
    });
};
const Default = (0,Containers/* SliceFactory */.ZD)(Base, {
    sectionContainerProps: {
        style: {
            background: "white"
        }
    }
});


;// CONCATENATED MODULE: ./components/slices/CardList/variants/index.js



;// CONCATENATED MODULE: ./components/slices/CardList/index.js


const CardListSlice = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: Default
    };
    const TypeOfVariants = typeOfComponents[variation] || Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/CardList/index.js

/* harmony default export */ const CardList = (CardListSlice);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/slices/Comparative/variants/default/defaultStyles.js

const Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6876c319-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;
// export const CardList = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     flex-direction: column;
//   }
//   @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
//   }
// `;
const ButtonContainer = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-6876c319-1"
})`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props)=>props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  width: fit-content;
  height: ${(props)=>props.theme.button.height};
  background: ${(props)=>props.theme.button.bgPrimary};
  border: 1px solid ${(props)=>props.theme.colors.textLightPrimary};
  color: ${(props)=>props.theme.colors.white};
  :hover {
    background-color: ${(props)=>props.theme.button.bgPrimaryOver};
    color: ${(props)=>props.theme.colors.white};
  }
  padding: ${(props)=>props.theme.button.padding};

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
const Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6876c319-2"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  
  h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    color: ${(props)=>props.theme.colors.textDarkblue};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      // width: 100%;
      font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 16px;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      margin-top 16px;
      width: 100%;
      text-align: center;
      line-height:  ${(props)=>props.theme.typography.h2.mobile.lineHeight};
    }
    
  }
  p {
    margin: 0;
    margin-top: 32px;
    line-height:  ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      margin-bottom: 22px;
    }
  }
  
  h3 {
    font-weight:  ${(props)=>props.theme.typography.h3.desktop.fontWeight};
    line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color: ${(props)=>props.theme.colors.primary};
    margin-bottom: 8px;
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      // width: 70%;
      margin-bottom: 16px;
      font-weight:  ${(props)=>props.theme.typography.h3.desktop.fontWeight};
      line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    }
  }
`;
const defaultStyles_Card = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6876c319-3"
})`
  min-height: 870px;
  width: 48%;
  background: white;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 8px;
  padding: 48px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 98%;
  }
  .description {
    margin: 42px 0;
  }
  .list-check {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 16px;
    p {
      width: 86%;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 45px;
        margin-bottom: 12px;
      }
      p {
        text-align: center;
        width: 100%;
      }
    }
  }

  // @media (max-width: 500px) {
  //   padding: 24px;
  // }
  // @media (max-width: 400px) {
  //   padding: 0px;
  //   border: none;
  // }
`;
const defaultStyles_ItemsContainer = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-6876c319-4"
})`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
    flex-flow: column wrap;
  }
  @media (max-width: 500px) {
    flex-direction: row;
    flex-flow: column wrap;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      max-width: 200px;
      height: 40px;
      // margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
  }
`;
const ImgHolder = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6876c319-5"
})`
  width: 35px;
  img {
    width: 35px;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 70%;
    }
  }
`;

;// CONCATENATED MODULE: ./components/slices/Comparative/variants/default/index.js





const default_Base = (props)=>{
    const { description , title  } = props.primary;
    const positive = Array.isArray(props.items) && props.items[0];
    const negative = Array.isArray(props.items) && props.items[1];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Content, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Description, {
                children: [
                    title[0]?.text && prismic_reactjs.RichText.render(title),
                    description && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "description",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_ItemsContainer, {
                children: Array.isArray(props.items) ? props.items.map((box, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(defaultStyles_Card, {
                        children: [
                            props?.items[index]?.title[0]?.text && prismic_reactjs.RichText.render(props.items[index].title),
                            props?.items[index]?.description && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: props.items[index].description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "list-check",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                                srcSet: props.items[index].ico.url,
                                                media: "(max-width: 630px)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: props.items[index].ico.url,
                                                alt: "Ico"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: props.items[index].description1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "list-check",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                                srcSet: props.items[index].ico2.url,
                                                media: "(max-width: 630px)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: props.items[index].ico2.url,
                                                alt: "Ico"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: props.items[index].description2
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "list-check",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                                srcSet: props.items[index].ico3.url,
                                                media: "(max-width: 630px)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: props.items[index].ico3.url,
                                                alt: "Ico"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: props.items[index].description3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "list-check",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                                srcSet: props.items[index].ico4.url,
                                                media: "(max-width: 630px)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: props.items[index].ico4.url,
                                                alt: "Ico"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: props.items[index].description4
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "list-check",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                                srcSet: props.items[index].ico5.url,
                                                media: "(max-width: 630px)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: props.items[index].ico5.url,
                                                alt: "Ico"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: props.items[index].description5
                                    })
                                ]
                            }),
                            props?.items[index]?.buttontext && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                // href={calltoactionUri.url === "" ? `/${linkResolver(calltoactionUri)}` : calltoactionUri.uid}
                                href: "contact",
                                passHref: true,
                                prefetch: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx(ButtonContainer, {
                                    fullwidth: true,
                                    children: props.items[index].buttontext
                                })
                            }, `top-nav-contactButton`)
                        ]
                    });
                // ) : null;
                }) : null
            })
        ]
    });
};
const default_Default = (0,Containers/* SliceFactory */.ZD)(default_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "#F4F4F4"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/Comparative/variants/index.js



;// CONCATENATED MODULE: ./components/slices/Comparative/index.js


const Comparative = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: default_Default
    };
    const TypeOfVariants = typeOfComponents[variation] || default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Comparative/index.js

/* harmony default export */ const slices_Comparative = (Comparative);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7536);
// EXTERNAL MODULE: ./node_modules/emailjs-com/cjs/index.js
var cjs = __webpack_require__(427);
;// CONCATENATED MODULE: ./components/slices/Contact/variants/default/defaultStyles.js

const defaultStyles_PageContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6fbafcaa-0"
})`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 490px;
  margin-top: 64px;
  margin-bottom: 64px;
  text-align: left;
  h2 {
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
const defaultStyles_SectionContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6fbafcaa-1"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // min-height: 512px;
  position: relative;

  #hiddenForm {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
const FormContainer = styled_components_cjs/* default.form.withConfig */.ZP.form.withConfig({
    componentId: "sc-6fbafcaa-2"
})`
  max-width: 540px;
  width: 100%;
  background: white;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  .country-dropdown {
    position: relative;
    width: 100%;
    .error {
      color: #ff3355;
    }
    input {
      margin-top: 5px;
    }
    ul {
      top: 39px;
    }
    span.error {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 0;
      min-height: 22px;
    }
  }
  .dropdown {
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-family: ${(props)=>props.theme.typography.fontFamily};
    font-weight: 400;
    font-size: 14px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px ${(props)=>props.theme.colors.primary};
    }
    &.error {
      border: 1px solid #ff3355;
    }
  }
  .dial-dropdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    .dial-items {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 100%;
      input#phone {
        margin-left: 117px;
        z-index: 2;
      }
    }
    span {
      color: #ff3355;
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 12px;
      line-height: 16px;
      min-height: 22px;
    }
  }
  @media (max-width: 500px) {
    padding: 24px;
  }
  @media (max-width: 400px) {
    border: none;
  }
  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(0, 17, 51, 0.8);
    text-align: center;
    margin: 0;
    letter-spacing: 0px;
  }
  p {
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-weight: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    color: ${(props)=>props.theme.colors.textSecondary};
    font-family: ${(props)=>props.theme.typography.fontFamily};
    margin-top: 14px;
    margin-bottom: 23px;
    letter-spacing: 0px;
  }

  label {
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-weight: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    color: ${(props)=>props.theme.colors.textSecondary};
    font-family: ${(props)=>props.theme.typography.fontFamily};
    margin-top: 14px;
    letter-spacing: 0px;
    margin-bottom: 5px;
  }
  input {
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-family: ${(props)=>props.theme.typography.fontFamily};
    font-weight: 400;
    font-size: 14px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px ${(props)=>props.theme.colors.primary};
    }
    &.error {
      border: 1px solid #ff3355;
    }
  }
  textarea {
    min-height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-family: ${(props)=>props.theme.typography.fontFamily};
    font-weight: 400;
    font-size: 14px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px ${(props)=>props.theme.colors.primary};
    }
    &.error {
      border: 1px solid #ff3355;
    }
  }
  span {
    font-family: ${(props)=>props.theme.typography.fontFamily};
    color: #ff3355;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 16px;
    min-height: 22px;
    &.last {
      min-height: unset;
    }
  }

  input[type="submit"] {
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 24px;
    font-family: ${(props)=>props.theme.typography.fontFamily};
    font-size: 16px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: 48px;
    width: 100%;
    background: ${(props)=>props.theme.button.bgPrimary};
    border: 1px solid ${(props)=>props.theme.button.bgPrimary};
    color: ${(props)=>props.theme.colors.white};
    :hover {
      background-color: ${(props)=>props.theme.button.bgPrimaryOver};
      color: ${(props)=>props.theme.colors.white};
    }

    appearance: none;
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
  .checkbox-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border: none;
    input[type="checkbox"] {
      height: 24px;
      width: 24px;
      margin: 0;
      padding: 0 5px;
      &:focus {
        box-shadow: 0 0 0 0 transparent;
      }
    }
    p {
      margin: 0 0 0 10px;
      @media (max-width: 350px) {
        width: 300px;
      }
    }
    a {
      text-decoration: none;
      font-weight: 600;
      color: ${(props)=>props.theme.colors.textPrimary};
      transition: all 0.3s ease;
      &:hover {
        color: ${(props)=>props.theme.colors.primary};
      }
    }
  }
`;
const defaultStyles_ButtonContainer = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-6fbafcaa-3"
})`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props)=>props.theme.button.height};
  border-radius: ${(props)=>props.theme.button.borderRadius};
  background: ${(props)=>props.theme.button.bgPrimary};
  border: 1px solid ${(props)=>props.theme.button.bgPrimary};
  color: ${(props)=>props.theme.colors.white};
  :hover {
    background-color: ${(props)=>props.theme.button.bgPrimaryOver};
    color: ${(props)=>props.theme.colors.white};
  }
  padding: ${(props)=>props.theme.button.padding};

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
const defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6fbafcaa-4"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-right: 100px;
  align-items: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }

  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    color: ${(props)=>props.theme.colors.textDarkblue};
    text-align: center;
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      font-weight: ${(props)=>props.theme.typography.h2.desktop.fontWeight};
      line-height: ${(props)=>props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 16px;
    }
  }
`;

;// CONCATENATED MODULE: ./components/slices/Contact/variants/default/default.js








const SERVICE = "service_q11ht56";
const TEMPLATE = "template_wn0oacf";
(0,cjs/* init */.S1)("qn8t4Q--1S8ntkmL4"); // Public Key
const default_default_Base = (slice)=>{
    const { title , subtitle , email , message , name  } = slice.primary;
    const { 0: isSentEmail , 1: setIsSentEmail  } = (0,react.useState)({
        sentEmail: false,
        isFailure: false,
        title: "P\xe1gina no encontrada \uD83D\uDE2D",
        text: "Parece que no podemos encontrar la p\xe1gina que est\xe1s buscando"
    });
    const { 0: emailValue , 1: setEmailValue  } = (0,react.useState)("");
    const { register , handleSubmit , clearErrors , setValue , watch , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)();
    // Observar el valor del select de servicio
    const selectedService = watch("service");
    const onSubmit = (data)=>{
        setIsSentEmail({
            sentEmail: true,
            isFailure: false,
            title: "Espera por un momento \u231B",
            text: "Estamos enviando su solicitud."
        });
        const templateParams = {
            from_name: data.firstname,
            to_email: data.email,
            to_phone: data.phone,
            to_name: data.firstname,
            message: data.message,
            reply_to: data.email,
            service: data.service,
            budget: data.budget
        };
        cjs/* default.send */.ZP.send(SERVICE, TEMPLATE, {
            ...templateParams
        }).then(// emailjs.send("service_1ufc0ju", "template_vk47fc7", templateParams).then(
        function(response1) {
            setIsSentEmail({
                sentEmail: true,
                isFailure: false,
                title: "Gracias \uD83C\uDF89",
                text: "Nos pondremos en contacto lo antes posible.",
                response: response1 || ""
            });
        }, function(error) {
            setIsSentEmail({
                sentEmail: true,
                isFailure: true,
                title: "P\xe1gina no encontrada \uD83D\uDE2D",
                text: "Parece que no podemos encontrar la p\xe1gina que est\xe1s buscando",
                response: response || ""
            });
            ;
        }).catch((err)=>setIsSentEmail({
                sentEmail: true,
                isFailure: true,
                title: "P\xe1gina no encontrada \uD83D\uDE2D",
                text: "Parece que no podemos encontrar la p\xe1gina que est\xe1s buscando",
                response: response || ""
            }));
    };
    const emailValidation = (e, errors)=>{
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e.target.value);
        setEmailValue(e.target.value);
        if (emailPattern) {
            delete errors?.email;
        } else {}
    };
    return /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_PageContainer, {
        bgColor: "white",
        children: isSentEmail.sentEmail ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(defaultStyles_SectionContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: isSentEmail.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            " ",
                            isSentEmail.text
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        passHref: true,
                        prefetch: true,
                        children: /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_ButtonContainer, {
                            fullwidth: true,
                            children: "Ir al Inicio"
                        })
                    }, `top-nav-contactButton`)
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_SectionContainer, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormContainer, {
                noValidate: true,
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: title[0]?.text && title[0]?.text || "Contactanos"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: subtitle[0]?.text && subtitle[0]?.text || "Cu\xe9ntenos sobre usted y lo conectaremos con nuestros expertos para responder cualquier pregunta que tenga."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "firstname",
                        children: name[0].text || "Nombre"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        ...register("firstname", {
                            required: true,
                            minLength: 2
                        }),
                        type: "text",
                        name: "firstname",
                        id: "firstname",
                        className: errors.firstname && "error"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "error",
                        children: errors.firstname && "Por favor ingrese su nombre"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "email",
                        children: email[0].text || "Email"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        ...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            minLenght: {
                                value: 2
                            }
                        }),
                        type: "email",
                        name: "email",
                        id: "email",
                        value: emailValue,
                        onChange: (e)=>emailValidation(e, errors),
                        className: errors.email && "error"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "error",
                        children: errors.email && "Por favor ingrese su email"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "phone",
                        children: name[0].text || "Tel\xe9fono"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        ...register("phone", {
                            required: true,
                            minLength: 12
                        }),
                        type: "text",
                        name: "phone",
                        id: "phone",
                        className: errors.phone && "error"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "error",
                        children: errors.phone && "Por favor ingrese su tel\xe9fono"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "service",
                        children: name[0].text || "Servicio a cotizar"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                        ...register("service", {
                            required: true,
                            minLength: 1
                        }),
                        id: "service",
                        name: "service",
                        className: `dropdown ${errors.service && "error"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "Mantenci\xf3n",
                                children: "Mantenci\xf3n"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "Instalaci\xf3n",
                                children: "Instalaci\xf3n"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "Reparaci\xf3n",
                                children: "Reparaci\xf3n"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "error",
                        children: errors.service && "Por favor ingrese el servicio a cotizar"
                    }),
                    selectedService === "Instalaci\xf3n" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                htmlFor: "budget",
                                children: name[0].text || "Presupuesto"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                ...register("budget", {
                                    required: selectedService === "Instalaci\xf3n",
                                    minLength: 1
                                }),
                                id: "budget",
                                name: "budget",
                                className: `dropdown ${errors.budget && "error"}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "",
                                        children: "Seleccione un presupuesto"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "Menos de $5.000.000",
                                        children: "Menos de $5.000.000"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "$5.000.000 - $10.000.000",
                                        children: "$5.000.000 - $10.000.000"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "$10.000.000 - $20.000.000",
                                        children: "$10.000.000 - $20.000.000"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "M\xe1s de $20.000.000",
                                        children: "M\xe1s de $20.000.000"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "error",
                                children: errors.budget && "Por favor seleccione un presupuesto"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "message",
                        children: message[0].text || "En que podemos ayudarlo?"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                        ...register("message", {
                            required: true,
                            minLength: 5
                        }),
                        rows: "4",
                        cols: "50",
                        type: "text",
                        name: "message",
                        defaultValue: "",
                        id: "message",
                        className: errors.message && "error"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "error",
                        children: errors.message && "Por favor ingrese su inquietud"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "submit",
                        name: "Contact Us",
                        value: "Enviar"
                    })
                ]
            })
        })
    });
};
const default_default_Default = (0,Containers/* SliceFactory */.ZD)(default_default_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "#F4F4F4"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/Contact/variants/cotizarForm/index.js




const cotizarForm_Base = (slice)=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(PageContainer, {
            bgColor: "white",
            children: /*#__PURE__*/ jsx_runtime.jsx(SectionContainer, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Container, {})
            })
        })
    });
};
const CotizarForm = (0,Containers/* SliceFactory */.ZD)(cotizarForm_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "#F4F4F4"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/Contact/variants/index.js




;// CONCATENATED MODULE: ./components/slices/Contact/index.js


const ContactSlice = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: default_default_Default,
        ["cotizarForm"]: CotizarForm
    };
    const TypeOfVariants = typeOfComponents[variation] || default_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Contact/index.js

/* harmony default export */ const Contact = (ContactSlice);

;// CONCATENATED MODULE: ./components/slices/HeroSlice/variants/default/defaultStyles.js

const Anchor = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
    componentId: "sc-a32f1a0d-0"
})`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  margin-top: 24px;
  &.fullwidth {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
`;
const default_defaultStyles_ButtonContainer = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-a32f1a0d-1"
})`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props)=>props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props)=>props.theme.button.height};

  background: ${(props)=>props.theme.colors.white};

  color: ${(props)=>props.theme.colors.bgColorTertiary};

  :hover {
    background: #e4e1e1;
    color: ${(props)=>props.theme.colors.grey};
  }
  padding: ${(props)=>props.theme.button.padding};

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
const defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-a32f1a0d-2"
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-bottom: 102px;

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;
const default_defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-a32f1a0d-3"
})`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding-bottom: 50px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    text-align: center;
  }
  h1 {
    margin: 0;
    margin-bottom: 8px;
    line-height: ${(props)=>props.theme.typography.h1.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h1.desktop.fontSize};
    color: ${(props)=>props.theme.colors.white};
    z-index: 10px;
    em {
      color: ${(props)=>props.theme.colors.white};
      font-style: normal;
      z-index: 10px;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.xl}) {
      line-height: ${(props)=>props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props)=>props.theme.typography.h1.mobile.fontSize};
      margin-bottom: 16px;
      em {
        color: ${(props)=>props.theme.colors.white};
        font-style: normal;
        z-index: 10px;
      }
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      width: 100%;
      line-height: ${(props)=>props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props)=>props.theme.typography.h1.mobile.fontSize};
      em {
        color: ${(props)=>props.theme.colors.white};
        font-size: 34px;
        z-index: 10px;
      }
    }
  }
  h2 {
    margin: 0;
    margin-bottom: 8px;
    line-height: ${(props)=>props.theme.typography.h1.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    color: #e5e4e4;
    z-index: 10px;
    em {
      color: ${(props)=>props.theme.colors.white};
      font-style: normal;
      z-index: 10px;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.xl}) {
      line-height: ${(props)=>props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props)=>props.theme.typography.h1.mobile.fontSize};
      margin-bottom: 16px;
      em {
        color: ${(props)=>props.theme.colors.white};
        font-style: normal;
        z-index: 10px;
      }
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      width: 100%;
      line-height: ${(props)=>props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props)=>props.theme.typography.h1.mobile.fontSize};
      em {
        color: ${(props)=>props.theme.colors.white};
        font-size: 34px;
        z-index: 10px;
      }
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    // line-height:  ${(props)=>props.theme.typography.p.desktop.lineHeight};
    line-height: 1.5;
    font-size: 24px;
    z-index: 10px;
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    color: ${(props)=>props.theme.colors.white};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      width: 100%;
      line-height: ${(props)=>props.theme.typography.p.mobile.lineHeight};
      font-size: ${(props)=>props.theme.typography.p.mobile.fontSize};
      text-align: center;
    }
  }
`;
// jaja
const defaultStyles_ImgHolder = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-a32f1a0d-4"
})`
  z-index: 2;
  backgroundImage: ${(props)=>props.bgImage || ""}
  width: 50%;
  display: flex;
  justify-content: flex-start;
  picture{
    text-align: right;
    }
    img {
      width: 80%;
      // border-radius: 50%;
    }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 80%;
    // border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;
const Button = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-a32f1a0d-5"
})`
  border-radius: 22px;
  height: 48px;
  padding: 10px 30px;
  border: transparent;
  font-size: 16px;
  margin-top: 18px;
  line-height: 24px;
  width: 280px;
  height: 48px;
  cursor: pointer;
  color: ${(props)=>props.theme.colors.secondary};
  background: ${(props)=>props.theme.colors.white};
`;

;// CONCATENATED MODULE: ./components/slices/HeroSlice/variants/default/index.js




const variants_default_Base = (props)=>{
    const { description , image , title , mobileimage , buttontext , buttonlink  } = props.primary;
    // window && window.console.log('--props.primary--', props.primary)
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(defaultStyles_Content, {
        backgroundColor: "transparent",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(default_defaultStyles_Description, {
                children: [
                    title[0]?.text && prismic_reactjs.RichText.render(title),
                    description[0]?.text && prismic_reactjs.RichText.render(description),
                    buttontext && /*#__PURE__*/ jsx_runtime.jsx(Anchor, {
                        id: buttonlink?.uid,
                        href: buttonlink?.uid,
                        children: /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_ButtonContainer, {
                            fullwidth: true,
                            children: buttontext || "Cotiza"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_ImgHolder, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: image.url,
                            media: "(max-width: 450px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: mobileimage.url,
                            media: "(max-width: 960px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: image.url,
                            alt: "HeroImg"
                        })
                    ]
                })
            })
        ]
    });
};
// export const Default = SliceFactory(Base);
const variants_default_Default = (0,Containers/* SliceFactory */.ZD)(variants_default_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "#243C70",
            background: "#243C70"
        },
        bgImage: true,
        bgImageSrc: "https://images.prismic.io/m-elevadores/ZsP1BUaF0TcGJE_C_fondo-contruccion.png?auto=format,compress",
        base: variants_default_Base
    }
}); // ${(props) => props.theme.colors.secondary};

;// CONCATENATED MODULE: ./components/slices/HeroSlice/variants/noButton/index.js




const noButton_Base = (slice)=>{
    const { description , image , title , mobileimage  } = slice.primary;
    // window.console.log('--slice--', slice)
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(defaultStyles_Content, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_ImgHolder, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(default_defaultStyles_Description, {
                children: [
                    title[0]?.text && prismic_reactjs.RichText.render(title),
                    description[0]?.text && prismic_reactjs.RichText.render(description)
                ]
            })
        ]
    });
};
// export const  = SliceFactory(Base);
const NoButton = (0,Containers/* SliceFactory */.ZD)(noButton_Base, {
    sectionContainerProps: {
        style: {
        },
        bgImage: true,
        bgImageSrc: "",
        base: noButton_Base
    }
});

;// CONCATENATED MODULE: ./components/slices/HeroSlice/variants/noButtonnoDescription/index.js




const noButtonnoDescription_Base = (slice)=>{
    const { image , title , mobileimage  } = slice.primary;
    // window.console.log('--slice--', slice)
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(defaultStyles_Content, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_Description, {
                children: title[0]?.text ? prismic_reactjs.RichText.render(title) : /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    children: "Asesoramos en Proyectos de Electromovilidad"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_ImgHolder, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: image.url,
                            media: "(max-width: 500px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: mobileimage.url,
                            media: "(max-width: 960px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: image.url,
                            alt: "HeroImg"
                        })
                    ]
                })
            })
        ]
    });
};
// export const NoButtonnoDescription = SliceFactory(Base);
const NoButtonnoDescription = (0,Containers/* SliceFactory */.ZD)(noButtonnoDescription_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "rgb(176, 232, 222)",
            backgroundImage: "linear-gradient(188deg, #98EED5 0%, #05956B 100%)"
        },
        bgImage: true,
        // bgImageSrc: "https://electromove.cdn.prismic.io/electromove/1ac22623-0626-4d1d-a34c-1acf3fc168e3_header_02.svg",
        base: noButtonnoDescription_Base
    }
});

;// CONCATENATED MODULE: ./components/slices/HeroSlice/variants/index.js





;// CONCATENATED MODULE: ./components/slices/HeroSlice/index.js


const HeroSlice = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: variants_default_Default,
        ["noButton"]: NoButton,
        ["noButtonnoDescription"]: NoButtonnoDescription
    };
    const TypeOfVariants = typeOfComponents[variation] || variants_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Hero/index.js

/* harmony default export */ const Hero = (HeroSlice);

;// CONCATENATED MODULE: ./components/slices/Ideas/variants/default/defaultStyles.js

const default_defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-ae808477-0"
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;
const variants_default_defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-ae808477-1"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  
  h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 4px;
    font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    color: ${(props)=>props.theme.colors.white};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 6px;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      margin-top 6px;
      width: 100%;
      text-align: center;
      line-height:  ${(props)=>props.theme.typography.h2.mobile.lineHeight};
    }
    
  }
  p {
    margin: 0;
    margin-top: 32px;
    line-height:  ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    color: ${(props)=>props.theme.colors.white};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      margin-bottom: 22px;
    }
  }
  
  h3 {
    font-weight:  ${(props)=>props.theme.typography.h3.desktop.fontWeight};
    line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color: ${(props)=>props.theme.colors.white};
    margin-bottom: 8px;
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      // width: 70%;
      margin-bottom: 16px;
      font-weight:  ${(props)=>props.theme.typography.h3.desktop.fontWeight};
      line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    }
  }
`;
const defaultStyles_Button = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-ae808477-2"
})`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props)=>props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  width: fit-content;
  height: ${(props)=>props.theme.button.height};
  background: ${(props)=>props.theme.button.white};
  border: 1px solid ${(props)=>props.theme.button.bgColorTertiary};
  color: ${(props)=>props.theme.colors.bgColorTertiary};
  :hover {
    background-color: ${(props)=>props.theme.button.bgPrimaryOver};
    color: ${(props)=>props.theme.colors.white};
  }
  padding: ${(props)=>props.theme.button.padding};

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`; // export const Button = styled.button`
 //   border-radius: 22px;
 //   height: 46px;
 //   padding: 10px 30px;
 //   border: transparent;
 //   font-weight: ${(props) => props.theme.typography.btnText.desktop.fontWeight};
 //   line-height: ${(props) => props.theme.typography.btnText.desktop.lineHeight};
 //   font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
 //   line-height: 24px;
 //   cursor: pointer;
 //   color: ${(props) => props.theme.colors.secondary};
 //   background: ${(props) => props.theme.colors.bgColorQuaternary};
 //   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
 //     font-weight: ${(props) => props.theme.typography.btnText.mobile.fontWeight};
 //     line-height: ${(props) => props.theme.typography.btnText.mobile.lineHeight};
 //     font-size: ${(props) => props.theme.typography.btnText.mobile.fontSize};
 //   }
 //   &:hover {
 //     background-color: ${(props) => props.theme.colors.bgHoverBtn};
 //   }
 //   &:active {
 //     transform: scale(0.95);
 //   }
 //   &:disabled {
 //     cursor: default;
 //     opacity: 0.7;
 //   }
 // `;

;// CONCATENATED MODULE: ./components/slices/Ideas/variants/default/default.js





const variants_default_default_Base = (slice)=>{
    const { tittle , subtittle , buttontext , bgColorInitial , bgColorEnd , buttonlink ,  } = slice.primary;
    return /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_Content, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(variants_default_defaultStyles_Description, {
            children: [
                subtittle[0]?.text && prismic_reactjs.RichText.render(subtittle),
                tittle[0]?.text && prismic_reactjs.RichText.render(tittle),
                buttonlink.uid && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: buttonlink.uid,
                    children: /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_Button, {
                        children: buttontext && buttontext
                    })
                })
            ]
        })
    });
};
const variants_default_default_Default = (0,Containers/* SliceFactory */.ZD)(variants_default_default_Base, {
    sectionContainerProps: {
        style: {
            backgroundImage: "linear-gradient(188deg, #4D94FF, #003586 65% )"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/Ideas/variants/noButton/index.js




const variants_noButton_Base = (slice)=>{
    const { tittle , subtittle , bgColorInitial , bgColorEnd  } = slice.primary;
    return /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_Content, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(variants_default_defaultStyles_Description, {
            children: [
                subtittle[0]?.text ? prismic_reactjs.RichText.render(subtittle) : /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    children: "Ready to get started?"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("a", {
                    target: "_blank",
                    href: `https://api.whatsapp.com/send?phone=${tittle[0]?.text}&text=Hola,%20Quiero%20cotizar%20mi%20proyecto%20con%20ustedes`,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: "flex",
                            itemsCenter: "center",
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                style: {
                                    marginRight: 20,
                                    marginTop: 4
                                },
                                width: "50",
                                height: "50",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                        "clip-path": "url(#clip0_1220_5943)",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M34.1659 5.81282C30.4056 2.06655 25.4056 0.00228568 20.0785 0C9.10108 0 0.167687 8.89125 0.163293 19.8199C0.162013 23.3132 1.07882 26.7233 2.82142 29.7291L-0.00390625 40L10.5534 37.2439C13.4621 38.8233 16.7371 39.6555 20.0699 39.6568H20.0784H20.0785C31.0541 39.6568 39.9888 30.764 39.9935 19.8359C39.9953 14.5394 37.9256 9.55935 34.1659 5.81282ZM20.0785 36.3092H20.072C17.1013 36.3076 14.1882 35.5136 11.6472 34.0124L11.0425 33.6555L4.77759 35.2909L6.45024 29.2117L6.05625 28.5885C4.39918 25.9653 3.52439 22.9339 3.52564 19.8211C3.52928 10.7376 10.9544 3.34778 20.0847 3.34778C24.5062 3.34961 28.6618 5.06544 31.7872 8.17922C34.9123 11.293 36.6322 15.4323 36.6309 19.8345C36.627 28.9183 29.2016 36.3092 20.0785 36.3092Z",
                                                fill: "#E0E0E0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M0.910156 38.8595L3.60642 29.0578C1.943 26.1892 1.06824 22.9347 1.06929 19.6015C1.07365 9.17235 9.59905 0.6875 20.0741 0.6875C25.1581 0.689786 29.9298 2.65965 33.5175 6.23489C37.1059 9.81009 39.0809 14.5623 39.0789 19.6163C39.0745 30.0458 30.5486 38.5314 20.0748 38.5314C20.0741 38.5314 20.0754 38.5314 20.0748 38.5314H20.0664C16.8858 38.5304 13.7606 37.7355 10.985 36.2294L0.910156 38.8595Z",
                                                fill: "url(#paint0_linear_1220_5943)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M15.1572 11.4045C14.7888 10.589 14.4009 10.5726 14.0503 10.5584C13.7636 10.5461 13.4354 10.5469 13.1077 10.5469C12.7797 10.5469 12.2468 10.6696 11.7961 11.1596C11.3451 11.6497 10.0742 12.8344 10.0742 15.2438C10.0742 17.6534 11.8371 19.9817 12.0828 20.3087C12.3287 20.6353 15.4857 25.7378 20.4854 27.7007C24.6407 29.3321 25.4862 29.0076 26.3881 28.926C27.2901 28.8443 29.2983 27.7416 29.7083 26.5979C30.1183 25.4546 30.1183 24.4745 29.9953 24.2696C29.8723 24.0656 29.5443 23.9431 29.0524 23.6982C28.5604 23.4533 26.1422 22.2684 25.6912 22.1051C25.2402 21.9419 24.9123 21.8602 24.5843 22.3505C24.2563 22.8403 23.3142 23.9431 23.0272 24.2696C22.7402 24.5969 22.4533 24.6377 21.9613 24.3928C21.4694 24.1472 19.8851 23.6306 18.0057 21.9622C16.5434 20.6643 15.5562 19.0613 15.2692 18.571C14.9822 18.0812 15.2384 17.8159 15.4852 17.5717C15.706 17.3523 15.9771 17.0001 16.2231 16.7141C16.4686 16.4281 16.5506 16.224 16.7145 15.8975C16.8785 15.5705 16.7965 15.2845 16.6736 15.0396C16.5506 14.7947 15.5946 12.3729 15.1572 11.4045Z",
                                                fill: "white"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M34.0041 5.75002C30.287 2.04675 25.3444 0.00622459 20.0785 0.00390625C9.22703 0.00390625 0.396188 8.79308 0.391826 19.5962C0.390547 23.0496 1.29683 26.4204 3.01942 29.3918L0.226562 39.5447L10.6626 36.8202C13.538 38.3814 16.7754 39.2042 20.07 39.2054H20.0784H20.0785C30.9281 39.2054 39.7602 30.4147 39.7648 19.612C39.7666 14.3764 37.7206 9.45355 34.0041 5.75002ZM20.0785 35.8963H20.0721C17.1355 35.8948 14.2557 35.1098 11.7439 33.6259L11.1461 33.2731L4.95316 34.8897L6.60658 28.8803L6.21712 28.2643C4.57908 25.6712 3.71432 22.6745 3.7156 19.5975C3.71917 10.6183 11.059 3.31332 20.0846 3.31332C24.4553 3.31511 28.5632 5.01125 31.6527 8.08929C34.742 11.1673 36.4421 15.2591 36.4408 19.6108C36.4369 28.5903 29.0968 35.8963 20.0785 35.8963Z",
                                                fill: "white"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                                                id: "paint0_linear_1220_5943",
                                                x1: "19.9945",
                                                y1: "38.8595",
                                                x2: "19.9945",
                                                y2: "0.687564",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                                        "stop-color": "#424243"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                                        offset: "1",
                                                        "stop-color": "#272727",
                                                        "stop-opacity": "0.596078"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                                                id: "clip0_1220_5943",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                    width: "40",
                                                    height: "40",
                                                    fill: "white",
                                                    transform: "translate(-0.00390625)"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            "+ ",
                            tittle[0]?.text ? prismic_reactjs.RichText.render(tittle) : /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: "-"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const noButton_NoButton = (0,Containers/* SliceFactory */.ZD)(variants_noButton_Base, {
    sectionContainerProps: {
        style: {
            backgroundImage: "linear-gradient(188deg, #474747 , #474747 65% )"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/Ideas/variants/index.js




;// CONCATENATED MODULE: ./components/slices/Ideas/index.js


const IdeasSlice = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: variants_default_default_Default,
        ["noButton"]: noButton_NoButton
    };
    const TypeOfVariants = typeOfComponents[variation] || variants_default_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Ideas/index.js

/* harmony default export */ const Ideas = (IdeasSlice);

;// CONCATENATED MODULE: ./slices/LandingBanner/style.js

const Section = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3ad2996a-0"
})`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 4rem 10rem;
  background: ${({ bgimage  })=>bgimage ? `url(${bgimage}) center/cover no-repeat` : "#243c70"};
  color: white;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    display: ${({ bgimage  })=>bgimage ? "block" : "none"};
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    grid-template-columns: 1fr;
  }
`;
const KeywordWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3ad2996a-1"
})`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;
const Keyword = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3ad2996a-2"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
  }
`;
const Title = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3ad2996a-3"
})`
  margin-bottom: 10px;
  h1 {
    margin: 0;
    text-align: left;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;
const Form = styled_components_cjs/* default.form.withConfig */.ZP.form.withConfig({
    componentId: "sc-3ad2996a-4"
})`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h2 {
    margin: 0;
    line-height: 1.2;
  }

  p {
    margin: 0;
  }
`;
const InputWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3ad2996a-5"
})`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
  }

  .error-message {
    color: #ffd700;
    font-size: 0.875rem;
    visibility: hidden;

    &.visible {
      visibility: visible;
    }
  }
`;
const ButtonWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3ad2996a-6"
})`
  button {
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #005bb5;
    }
  }
`;

;// CONCATENATED MODULE: ./slices/LandingBanner/index.js






/**
 * @typedef {import("@prismicio/client").Content.LandingBannerSlice} LandingBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingBannerSlice>} LandingBannerProps
 * @param {LandingBannerProps} props
 */ // EmailJS configuration
const SERVICE_ID = "service_q11ht56";
const TEMPLATE_ID = "template_wn0oacf";
const PUBLIC_KEY = "qn8t4Q--1S8ntkmL4";
(0,cjs/* init */.S1)(PUBLIC_KEY);
const LandingBanner = ({ slice  })=>{
    const { title , subtitle , formtitle , formsubtitle , bgimage  } = slice.primary;
    const items = slice.items || [];
    const { register , handleSubmit , reset , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)();
    const { 0: status , 1: setStatus  } = (0,react.useState)({
        sent: false,
        success: null,
        message: ""
    });
    const onSubmit = (data)=>{
        setStatus({
            sent: true,
            success: null,
            message: "Enviando..."
        });
        const { name , phone , email  } = data;
        const templateParams = {
            from_name: name,
            to_phone: phone,
            to_email: email,
            message: `Nuevo contacto desde el formulario de landing. Nombre: ${name}, Teléfono: ${phone}, Email: ${email}`,
            service: "",
            budget: "",
            reply_to: email,
            to_name: name
        };
        cjs/* default.send */.ZP.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(()=>{
            setStatus({
                sent: true,
                success: true,
                message: "\xa1Gracias! Te contactaremos pronto."
            });
            reset();
        }).catch((error)=>{
            ;
            setStatus({
                sent: true,
                success: false,
                message: "Ocurri\xf3 un error al enviar el formulario. Intenta nuevamente."
            });
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section, {
        id: "banner",
        bgimage: bgimage.url,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Title, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                field: title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                field: subtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(KeywordWrapper, {
                        children: items.map((i, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Keyword, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: i.icon.url,
                                        alt: i.icon.alt
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: i.keyword
                                    })
                                ]
                            }, idx))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Form, {
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    marginBottom: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: formtitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: formsubtitle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputWrapper, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        children: "Nombre"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "text",
                                        ...register("name", {
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: `error-message ${errors.name ? "visible" : ""}`,
                                        children: "Por favor ingresa tu nombre"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputWrapper, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        htmlFor: "email",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        id: "email",
                                        type: "email",
                                        autoComplete: "email",
                                        ...register("email", {
                                            required: "Por favor ingresa tu email",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Por favor ingresa un email v\xe1lido"
                                            }
                                        }),
                                        className: errors.email ? "input-error" : ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: `error-message ${errors.phone ? "visible" : ""}`,
                                        children: "Por favor ingresa tu correo"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputWrapper, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        children: "Tel\xe9fono"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "tel",
                                        ...register("phone", {
                                            required: true,
                                            minLength: 12
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: `error-message ${errors.phone ? "visible" : ""}`,
                                        children: "Por favor ingresa tu tel\xe9fono"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(ButtonWrapper, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    children: "Enviar"
                                })
                            })
                        ]
                    }),
                    status.sent && /*#__PURE__*/ jsx_runtime.jsx("p", {
                        style: {
                            color: "white"
                        },
                        className: status.success ? "success" : "error",
                        children: status.message
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const slices_LandingBanner = (LandingBanner);

;// CONCATENATED MODULE: ./slices/LandingCallbackForm/style.js

const style_Section = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
    componentId: "sc-6c4bf5cc-0"
})`
  background-color: #243c70;
  padding: 2rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const style_Title = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6c4bf5cc-1"
})`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: white;
    text-align: center;
    margin: 0;
  }
`;
const Subtitle = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6c4bf5cc-2"
})`
  p {
    font-weight: 600;
    font-size: 1rem;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
const style_Form = styled_components_cjs/* default.form.withConfig */.ZP.form.withConfig({
    componentId: "sc-6c4bf5cc-3"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
const style_InputWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6c4bf5cc-4"
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 200px;

  input {
    padding: 8px;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    border: none;
  }

  label {
    color: white;
    margin-bottom: 4px;
  }

  .error-message {
    min-height: 1em;
    font-size: 0.8rem;
    color: #ffd700;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .error-message.visible {
    opacity: 1;
    visibility: visible;
  }
`;
const style_ButtonWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-6c4bf5cc-5"
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 200px;

  .error-message {
    height: 1em;
    min-height: 1em;
    visibility: hidden;
  }
`;
const style_Button = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-6c4bf5cc-6"
})`
  all: unset;
  padding: 8px;
  border-radius: 5px;
  background-color: #2760d9;
  color: white;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  line-height: 1;
`;

;// CONCATENATED MODULE: ./slices/LandingCallbackForm/index.js






/**
 * @typedef {import("@prismicio/client").Content.LandingCallbackSlice} LandingCallbackSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingCallbackSlice>} LandingCallbackProps
 * @param { LandingCallbackProps }
 */ // EmailJS configuration
const LandingCallbackForm_SERVICE_ID = "service_q11ht56";
const LandingCallbackForm_TEMPLATE_ID = "template_wn0oacf";
const LandingCallbackForm_PUBLIC_KEY = "qn8t4Q--1S8ntkmL4";
(0,cjs/* init */.S1)(LandingCallbackForm_PUBLIC_KEY);
const LandingCallbackForm = ({ slice  })=>{
    const { title , description  } = slice.primary;
    const { register , handleSubmit , reset , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)();
    const { 0: status , 1: setStatus  } = (0,react.useState)({
        sent: false,
        success: null,
        message: ""
    });
    const onSubmit = (data)=>{
        setStatus({
            sent: true,
            success: null,
            message: "Enviando..."
        });
        const templateParams = {
            from_name: data.name,
            to_name: data.name,
            to_phone: data.phone,
            to_email: "",
            reply_to: "",
            service: "",
            budget: "",
            message: `Nuevo contacto desde el formulario "Nosotros te contactamos".\n\nNombre: ${data.name}\nTeléfono: ${data.phone}`
        };
        cjs/* default.send */.ZP.send(LandingCallbackForm_SERVICE_ID, LandingCallbackForm_TEMPLATE_ID, templateParams).then(()=>{
            setStatus({
                sent: true,
                success: true,
                message: "\xa1Gracias! Te contactaremos pronto."
            });
            reset();
        }).catch((error)=>{
            ;
            setStatus({
                sent: true,
                success: false,
                message: "Ocurri\xf3 un error al enviar el formulario. Intenta nuevamente."
            });
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(style_Section, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(style_Title, {
                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                    field: title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Subtitle, {
                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                    field: description
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(style_Form, {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(style_InputWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                children: "Nombre"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "text",
                                ...register("name", {
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: `error-message ${errors.name ? "visible" : ""}`,
                                children: "Por favor ingresa tu nombre"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(style_InputWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                children: "Tel\xe9fono"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "tel",
                                ...register("phone", {
                                    required: true,
                                    minLength: 12
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: `error-message ${errors.phone ? "visible" : ""}`,
                                children: "Por favor ingresa tu tel\xe9fono"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(style_ButtonWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(style_Button, {
                                type: "submit",
                                children: "Enviar"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "error-message",
                                children: "\xa0"
                            })
                        ]
                    })
                ]
            }),
            status.sent && /*#__PURE__*/ jsx_runtime.jsx("p", {
                style: {
                    color: "white"
                },
                className: status.success ? "success" : "error",
                children: status.message
            })
        ]
    });
};
/* harmony default export */ const slices_LandingCallbackForm = (LandingCallbackForm);

// EXTERNAL MODULE: ./node_modules/react-countup/build/index.js
var build = __webpack_require__(7857);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/dist/index.mjs
var dist = __webpack_require__(8357);
;// CONCATENATED MODULE: ./slices/LandingCountUp/style.js

const LandingCountUp_style_Section = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
    componentId: "sc-4890b706-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: #fff;
  padding: 3rem 10rem;

  font-size: 4rem;
  font-weight: 800;
  color: #3962e9;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    font-size: 2.5rem;
    flex-wrap: wrap;
  }

  p {
    margin: 0;
    font: inherit;
    color: inherit;
    display: inline;
  }
`;
const Counter = styled_components_cjs/* default.span.withConfig */.ZP.span.withConfig({
    componentId: "sc-4890b706-1"
})`
  position: relative;
  display: inline-block;
  font: inherit;
  color: inherit;
  width: 4ch;
  text-align: right;
`;
const Text = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-4890b706-2"
})`
  font: inherit;
  color: inherit;

  * {
    display: inline;
    margin: 0;
    font: inherit;
    color: inherit;
  }
`;

;// CONCATENATED MODULE: ./slices/LandingCountUp/index.js





/**
 * @typedef {import("@prismicio/client").Content.LandingCountUpSlice} LandingCountUpSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingCountUpSlice>} LandingCountUpProps
 * @param { LandingCountUpProps }
 */ const LandingCountUp = ({ slice  })=>{
    const { max , duration , text  } = slice.primary;
    const { ref , inView  } = (0,dist/* useInView */.YD)({
        triggerOnce: true,
        threshold: 0.5
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LandingCountUp_style_Section, {
        ref: ref,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Counter, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        style: {
                            visibility: "hidden",
                            whiteSpace: "nowrap"
                        },
                        children: [
                            "+",
                            max
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        style: {
                            position: "absolute",
                            left: 0,
                            top: 0
                        },
                        children: inView && /*#__PURE__*/ jsx_runtime.jsx(build/* default */.ZP, {
                            end: max,
                            duration: duration,
                            prefix: "+"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Text, {
                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                    field: text
                })
            })
        ]
    });
};
/* harmony default export */ const slices_LandingCountUp = (LandingCountUp);

// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(6066);
;// CONCATENATED MODULE: ./slices/LandingCustomerReview/style.js


const LandingCustomerReview_style_Section = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
    componentId: "sc-c2026eb0-0"
})`
  padding: 2rem;
  background: white;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const LandingCustomerReview_style_Title = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2026eb0-1"
})`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
  }
`;
const StyledSlider = (0,styled_components_cjs/* default */.ZP)(lib/* default */.Z).withConfig({
    componentId: "sc-c2026eb0-2"
})`
  .slick-list {
    padding: 10px 0 !important;
  }

  .slick-slide > div {
    padding: 0 5px;
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: rgb(90, 115, 198);
  }

  .slick-dots li.slick-active button:before {
    color: #3962e9;
  }
`;
const Review = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2026eb0-3"
})`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  max-width: 350px;
  min-height: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;
const ReviewHead = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2026eb0-4"
})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #ddd;
  flex-shrink: 0;
`;
const UserIcon = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
    componentId: "sc-c2026eb0-5"
})`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const LetterFallback = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2026eb0-6"
})`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #007bff;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const Username = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2026eb0-7"
})`
  font-weight: 600;
`;
const Stars = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2026eb0-8"
})`
  display: flex;
  gap: 4px;
  margin-top: 0.25rem;
`;
const ReviewText = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2026eb0-9"
})`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;

// EXTERNAL MODULE: ./node_modules/react-icons/ti/index.mjs
var ti = __webpack_require__(1376);
;// CONCATENATED MODULE: ./slices/LandingCustomerReview/index.js






/**
 * @typedef {import("@prismicio/client").Content.LandingCustomerReviewSlice} LandingCustomerReviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingCustomerReviewSlice>} LandingCustomerReviewProps
 * @param { LandingCustomerReviewProps }
 */ const LandingCustomerReview = ({ slice  })=>{
    const title = slice.primary.title;
    const reviews = slice.items || [];
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        adaptiveHeight: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }, 
        ]
    };
    const getFirstLetter = (usernameField)=>{
        const text = Array.isArray(usernameField) ? usernameField[0]?.text || "" : "";
        return text.charAt(0).toUpperCase();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LandingCustomerReview_style_Section, {
        id: "reviews",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(LandingCustomerReview_style_Title, {
                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                    field: title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(StyledSlider, {
                ...settings,
                children: reviews.map((review, index)=>{
                    const hasIcon = review.usericon?.url;
                    const stars = review.stars || 0;
                    const firstLetter = getFirstLetter(review.username);
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Review, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ReviewHead, {
                                children: [
                                    hasIcon ? /*#__PURE__*/ jsx_runtime.jsx(UserIcon, {
                                        src: review.usericon.url,
                                        alt: review.usericon.alt || "User"
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(LetterFallback, {
                                        children: firstLetter
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Username, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                                    field: review.username
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Stars, {
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, i)=>/*#__PURE__*/ jsx_runtime.jsx(ti/* TiStarFullOutline */.DQk, {
                                                        color: i < stars ? "#FFD700" : "#ccc",
                                                        size: 20
                                                    }, i))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(ReviewText, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                    field: review.userreview
                                })
                            })
                        ]
                    }, index);
                })
            })
        ]
    });
};
/* harmony default export */ const slices_LandingCustomerReview = (LandingCustomerReview);

;// CONCATENATED MODULE: ./slices/LandingFaq/style.js

const Wrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-cd5ab12b-0"
})`
  background-color: #fff;
  padding: 0rem 10rem 2.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const Icon = styled_components_cjs/* default.span.withConfig */.ZP.span.withConfig({
    componentId: "sc-cd5ab12b-1"
})`
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  min-width: 1rem;
  min-height: 1rem;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #333;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  /* horizontal line */
  &::before {
    top: 50%;
    left: 0;
    right: 0;
    height: 0.2rem;
    transform: translateY(-50%);
  }

  /* vertical line */
  &::after {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    transform-origin: center;
    transform: translateX(-50%) rotate(0deg);
    opacity: 1;
  }

  /* when open (minus) */
  &.open::after {
    transform: translateX(-50%) rotate(90deg);
    opacity: 0;
  }

  &.open::before {
    background-color: white;
  }

  @media (max-width: 768px) {
    width: 1.25rem;
    height: 1.25rem;
    min-width: 1.25rem;
    min-height: 1.25rem;

    &::before {
      height: 0.25rem;
    }

    &::after {
      width: 0.25rem;
    }
  }
`;
const FaqSection = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
    componentId: "sc-cd5ab12b-2"
})`
  .title h1 {
    font-size: 2rem;
    text-align: center;
    color: #3962e9;
    margin-top: 0;
  }

  .faq-item {
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 0;

    &.open .faq-question {
      font-weight: 600;
      background-color: #3962e9;
      color: white;
      border-radius: 5px;
    }
  }

  .faq-question {
    cursor: pointer;
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 1.1rem;
    user-select: none;
    padding: 0.5rem;
    p {
      font-weight: bold;
    }
  }

  .faq-answer {
    p {
      padding: 0.5rem;
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js + 2 modules
var AnimatePresence = __webpack_require__(4441);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.js + 150 modules
var motion = __webpack_require__(8533);
;// CONCATENATED MODULE: ./slices/LandingFaq/index.js





const LandingFaq = ({ slice  })=>{
    const title = slice?.primary?.title;
    const items = slice?.items || [];
    const { 0: openIndex , 1: setOpenIndex  } = (0,react.useState)(null);
    const { 0: heights , 1: setHeights  } = (0,react.useState)({});
    const refs = (0,react.useRef)([]);
    const toggle = (index)=>{
        setOpenIndex((prev)=>prev === index ? null : index);
    };
    (0,react.useLayoutEffect)(()=>{
        const newHeights = {};
        refs.current.forEach((ref, i)=>{
            if (ref) {
                newHeights[i] = ref.scrollHeight;
            }
        });
        setHeights(newHeights);
    }, [
        items
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(Wrapper, {
        id: "faq",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FaqSection, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                        field: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "faq-list",
                    children: items.map((item, idx)=>{
                        const isOpen = openIndex === idx;
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `faq-item ${isOpen ? "open" : ""}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "faq-question",
                                    onClick: ()=>toggle(idx),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(Icon, {
                                            className: isOpen ? "open" : ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                            field: item.question
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "faq-answer",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(AnimatePresence/* AnimatePresence */.M, {
                                        initial: false,
                                        children: isOpen && /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.div */.E.div, {
                                            initial: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                height: heights[idx] ?? "auto",
                                                opacity: 1,
                                                visibility: "visible"
                                            },
                                            exit: {
                                                height: 0,
                                                opacity: 0,
                                                transitionEnd: {
                                                    visibility: "hidden"
                                                }
                                            },
                                            transition: {
                                                duration: 0.35,
                                                ease: "easeInOut"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                ref: (el)=>refs.current[idx] = el,
                                                style: {
                                                    overflow: "hidden"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                                    field: item.answer
                                                })
                                            })
                                        }, isOpen ? "open" : "closed")
                                    })
                                })
                            ]
                        }, idx);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const slices_LandingFaq = (LandingFaq);

// EXTERNAL MODULE: ./node_modules/@prismicio/react/dist/PrismicLink.js
var PrismicLink = __webpack_require__(7527);
;// CONCATENATED MODULE: ./slices/LandingServices/style.js

const LandingServices_style_Section = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-ef3e1501-0"
})`
  background-color: white;
  padding: 1rem 10rem;
  @media (max-width: 1100px) {
    padding: 1rem;
  }

  h1 {
    color: #3962e9;
    text-align: center;
    margin-top: 0;
    font-size: 2rem;
  }
`;
const ServicesWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-ef3e1501-1"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
const Service = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-ef3e1501-2"
})`
  position: relative;
  flex: 0 1 calc(33.33% - 1rem);
  height: 300px;
  border-radius: 8px;
  background: ${({ bgimage  })=>bgimage ? `url(${bgimage}) center/cover no-repeat` : "#3962E9"};
  overflow: hidden;
  cursor: ${({ nohover  })=>nohover ? "auto" : "pointer"};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ nohover  })=>nohover ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    z-index: 1;

    @media (max-width: 768px) {
      opacity: 1;
    }
  }

  .service-link {
    position: absolute;
    inset: 0;
    z-index: 2;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .service-content {
    pointer-events: none;
    text-align: left;
  }

  .service-content h2,
  .service-content p {
    color: white;
    opacity: ${({ nohover  })=>nohover ? 1 : 0};
    transform: ${({ nohover  })=>nohover ? "translateY(0)" : "translateY(10px)"};
    transition: opacity 0.3s ease, transform 0.3s ease;
    margin: 0;
    padding: 0 10px;
  }

  .service-content h2 {
    font-size: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.2;
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.1;
    }
  }

  .service-content p {
    font-size: 0.8rem;
    max-height: 120px;
    overflow: auto;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover .service-content h2,
  &:hover .service-content p {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 1rem);
  }

  @media (max-width: 600px) {
    flex: 0 1 100%;
  }
`;

;// CONCATENATED MODULE: ./slices/LandingServices/index.js



/**
 * @typedef {import("@prismicio/client").Content.LandingServicesSlice} LandingServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingServicesSlice>} LandingServicesProps
 * @param { LandingServicesProps }
 */ const LandingServices = ({ slice  })=>{
    const title = slice.primary.title;
    const items = slice.items || [];
    const isNoHover = slice.variation === "nohover";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LandingServices_style_Section, {
        id: isNoHover ? "services" : "other-services",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                field: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ServicesWrapper, {
                children: items.map((i, index)=>/*#__PURE__*/ jsx_runtime.jsx(Service, {
                        bgimage: i.bgimage.url,
                        nohover: isNoHover,
                        children: isNoHover ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "service-link",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "service-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: i.servicetitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: i.description
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ jsx_runtime.jsx(PrismicLink/* PrismicLink */.w, {
                            field: i.link,
                            className: "service-link",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "service-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: i.servicetitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: i.description
                                    })
                                ]
                            })
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const slices_LandingServices = (LandingServices);

;// CONCATENATED MODULE: ./slices/LandingStandout/style.js

const LandingStandout_style_Section = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
    componentId: "sc-5fe76a74-0"
})`
  background-color: #fff;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const LandingStandout_style_Title = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-5fe76a74-1"
})`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
const ItemGrid = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-5fe76a74-2"
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }
`;
const style_Item = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-5fe76a74-3"
})`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const IconWrapper = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-5fe76a74-4"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: #3962e9;
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const style_Icon = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
    componentId: "sc-5fe76a74-5"
})`
  width: 2rem;
  height: 2rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Label = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-5fe76a74-6"
})`
  font-weight: 700;
  text-align: center;

  p,
  span {
    font-weight: inherit !important;
    margin: 0;
    text-align: center;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;

;// CONCATENATED MODULE: ./slices/LandingStandout/index.js



/**
@typedef {import("@prismicio/client").Content.LandingStandoutSlice} LandingStandoutSlice
@typedef {import("@prismicio/react").SliceComponentProps<LandingStandoutSlice>} LandingStandoutProps
@param { LandingStandoutProps }
*/ const LandingStandout = ({ slice  })=>{
    const title = slice.primary.title;
    const items = slice.items;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LandingStandout_style_Section, {
        id: "why-us",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(LandingStandout_style_Title, {
                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                    field: title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ItemGrid, {
                children: items.map((i, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(style_Item, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(IconWrapper, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(style_Icon, {
                                    src: i.icon.url,
                                    alt: i.icon.alt || "Icon"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                    field: i.label
                                })
                            })
                        ]
                    }, idx))
            })
        ]
    });
};
/* harmony default export */ const slices_LandingStandout = (LandingStandout);

;// CONCATENATED MODULE: ./slices/LandingTimeline/style.js

const LandingTimeline_style_Section = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-271e383e-0"
})`
  background-color: white;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  .title h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin: 0;
  }

  .step-wrapper {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 3rem;
    position: relative;
    padding-bottom: 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 20px;
      left: var(--line-left, 40px);
      right: var(--line-right, 40px);
      height: 2px;
      background-color: #3962e9;
      z-index: 0;
      transition: left 0.3s ease, right 0.3s ease;
    }
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .step-number {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
      background: #3962e9;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    .step-text {
      text-align: center;
      max-width: 120px;
    }
  }

  .mobile-step-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .mobile-step {
      align-items: center;
      display: flex;
      gap: 1rem;
    }

    .mobile-step-number {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      padding: 10px;
      font-weight: bold;
      font-size: 1.5rem;
      color: white;
      background-color: #3962e9;
      border-radius: 5px;
    }

    .mobile-step-text {
    }
  }

  /* Connect to <p>
  .step-number::after {
    content: "";
    position: absolute;
    top: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background-color: #3962e9;
  }*/
`;

;// CONCATENATED MODULE: ./slices/LandingTimeline/index.js




/**
 * @typedef {import("@prismicio/client").Content.LandingTimelineSlice} LandingTimelineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingTimelineSlice>} LandingTimelineProps
 * @param { LandingTimelineProps }
 */ const LandingTimeline = ({ slice  })=>{
    const title = slice.primary.title;
    const items = slice.items || [];
    const { 0: isMobile , 1: setIsMobile  } = (0,react.useState)(false);
    const stepWrapperRef = (0,react.useRef)(null);
    const firstStepRef = (0,react.useRef)(null);
    const lastStepRef = (0,react.useRef)(null);
    const { 0: linePositions , 1: setLinePositions  } = (0,react.useState)({
        left: 0,
        right: 0
    });
    // Handle mobile detection
    (0,react.useEffect)(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Recalculate bar line on mount and resize
    (0,react.useEffect)(()=>{
        const updateLinePositions = ()=>{
            if (stepWrapperRef.current && firstStepRef.current && lastStepRef.current) {
                const wrapperRect = stepWrapperRef.current.getBoundingClientRect();
                const firstRect = firstStepRef.current.getBoundingClientRect();
                const lastRect = lastStepRef.current.getBoundingClientRect();
                const left = firstRect.left + firstRect.width / 2 - wrapperRect.left;
                const right = wrapperRect.right - (lastRect.left + lastRect.width / 2);
                setLinePositions({
                    left,
                    right
                });
            }
        };
        updateLinePositions(); // Initial run
        window.addEventListener("resize", updateLinePositions); // Update on resize
        return ()=>{
            window.removeEventListener("resize", updateLinePositions);
        };
    }, [
        items,
        isMobile
    ]);
    if (isMobile) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LandingTimeline_style_Section, {
            id: "steps",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                        field: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mobile-step-wrapper",
                    children: items.map((i, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mobile-step",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mobile-step-number",
                                    children: idx + 1
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mobile-step-text",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                        field: i.step
                                    })
                                })
                            ]
                        }, idx))
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LandingTimeline_style_Section, {
        id: "steps",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "title",
                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                    field: title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "step-wrapper",
                ref: stepWrapperRef,
                style: {
                    "--line-left": `${linePositions.left}px`,
                    "--line-right": `${linePositions.right}px`
                },
                children: items.map((i, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "step",
                        ref: idx === 0 ? firstStepRef : idx === items.length - 1 ? lastStepRef : null,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "step-number",
                                children: idx + 1
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "step-text",
                                children: /*#__PURE__*/ jsx_runtime.jsx(dist_PrismicRichText/* PrismicRichText */.v, {
                                    field: i.step
                                })
                            })
                        ]
                    }, idx))
            })
        ]
    });
};
/* harmony default export */ const slices_LandingTimeline = (LandingTimeline);

;// CONCATENATED MODULE: ./components/slices/LogoList/variants/default/defaultStyles.js

const variants_default_defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3810c594-0"
})`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;
const LogoList_variants_default_defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3810c594-1"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 100px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    text-align: center;
    color: ${(props)=>props.theme.colors.textSecondary};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
  }
`;
const default_defaultStyles_ImgHolder = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3810c594-2"
})`
  width: 100%;
  img {
    width: 100%;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;

;// CONCATENATED MODULE: ./components/common/LogoListStyle.js

const LogoListStyle_ItemsContainer = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-65cb68a9-0"
})`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      // max-width: 80px;
      // max-height: 80px;
      height: 40px;
      margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
   span{
    margin-top : 16px;
    margin-bottom : 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-size: 16px;
    color: #605E5C;
    text-align: center;
   }
   
   h4 {
    font-size: 18px;
   }
  }
  .swiper {
    width: 100%;
    padding: 0 20px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      padding: 0;
    }
  }
  .swiper-wrapper {
    width: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 24px;
    margin-bottom: 24px;
    @media (max-width: 960px) {
      justify-content: unset;
    }
  }
  .swiper-pagination {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translatey(24px);
  }
  .swiper-slide {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    color: ${(props)=>props.theme.colors.primary};
  }
  .swiper-button-next {
    color: ${(props)=>props.theme.colors.primary};
  }
  .swiper-pagination-bullet {
    background: ${(props)=>props.theme.colors.primary};
    opacity: 1;
    width: 6px;
    height: 6px;
  }
  .swiper-pagination-bullet-active {
    background: ${(props)=>props.theme.colors.secondary};
    opacity: 1;
    width: 6px;
    height: 6px;
    position: relative;
    outline: 2px solid ${(props)=>props.theme.colors.primary};
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
`;
const ItemsContainerv2 = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-65cb68a9-1"
})`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      max-width: 80px;
      max-height: 80px;
      // height: 40px;
      margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
    span {
      margin-top: 16px;
      margin-bottom: 16px;
      letter-spacing: 0.25px;
      line-height: 24px;
      font-size: 16px;
      color: #605e5c;
      text-align: center;
    }

    h4 {
      font-size: 18px;
    }
  }
`;
const LogoListStyle_Button = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-65cb68a9-2"
})`
  border-radius: 22px;
  height: 46px;
  padding: 10px 30px;
  border: 1px solid ${(props)=>props.theme.colors.secondary};
  font-weight: ${(props)=>props.theme.typography.btnText.desktop.fontWeight};
  line-height: ${(props)=>props.theme.typography.btnText.desktop.lineHeight};
  font-size: ${(props)=>props.theme.typography.btnText.desktop.fontSize};
  line-height: 24px;
  cursor: pointer;
  color: ${(props)=>props.theme.colors.secondary};
  // background: ${(props)=>props.theme.colors.bgColorQuaternary};
  background: transparent;
`;

;// CONCATENATED MODULE: ./components/common/LogoList.js




// import SwiperCore, { Navigation, Pagination } from 'swiper';

const LogoList = (props)=>{
    const { list  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(LogoListStyle_ItemsContainer, {
        children: /*#__PURE__*/ jsx_runtime.jsx(swiper_react/* Swiper */.tq, {
            spaceBetween: 5,
            slidesPerView: 4,
            navigation: true,
            pagination: {
                clickable: true
            },
            modules: [
                swiper_esm/* Navigation */.W_,
                swiper_esm/* Pagination */.tl,
                swiper_esm/* A11y */.s5,
                swiper_esm/* Autoplay */.pt
            ],
            // navigation={false}
            centeredSlides: true,
            // pagination={{ clickable: false }}
            // navigation={{
            //   nextEl: ".custom_next",
            //   prevEl: ".custom_prev"
            // }}
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                960: {
                    slidesPerView: 5,
                    centeredSlidesBounds: true
                }
            },
            children: Array.isArray(list) ? list.map((box, index)=>{
                return(// <SwiperSlide >
                /*#__PURE__*/ jsx_runtime.jsx(swiper_react/* SwiperSlide */.o5, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "item",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: box?.logoImage?.url || "-",
                            alt: ""
                        })
                    }, `box-item-${index}`)
                }, index));
            }) : null
        })
    });
};
/* harmony default export */ const common_LogoList = (LogoList);

;// CONCATENATED MODULE: ./components/slices/LogoList/variants/default/index.js





const LogoList_variants_default_Base = (props)=>{
    const { description , title  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(variants_default_defaultStyles_Content, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(LogoList_variants_default_defaultStyles_Description, {
                children: [
                    title[0]?.text ? prismic_reactjs.RichText.render(title) : /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "Title"
                    }),
                    description[0]?.text ? prismic_reactjs.RichText.render(description) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(common_LogoList, {
                list: props.items
            })
        ]
    });
};
const LogoList_variants_default_Default = (0,Containers/* SliceFactory */.ZD)(LogoList_variants_default_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "white"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/LogoList/variants/onlyLogosBg/defaultStyles.js

const onlyLogosBg_defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-aaa08589-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;

;// CONCATENATED MODULE: ./components/slices/LogoList/variants/onlyLogosBg/index.js




const onlyLogosBg_Base = (props)=>{
    const { description , title  } = props.primary;
    return /*#__PURE__*/ jsx_runtime.jsx(onlyLogosBg_defaultStyles_Content, {
        children: /*#__PURE__*/ jsx_runtime.jsx(common_LogoList, {
            list: props.items
        })
    });
};
const OnlyLogosBg = (0,Containers/* SliceFactory */.ZD)(onlyLogosBg_Base);

;// CONCATENATED MODULE: ./components/slices/LogoList/variants/buttonTitleDescription/defaultStyles.js

const buttonTitleDescription_defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-4d22629-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;

;// CONCATENATED MODULE: ./components/common/LogoListv2.js




const LogoListv2 = (props)=>{
    const { list  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(ItemsContainerv2, {
        children: Array.isArray(list) ? list.map((box, index)=>{
            return index <= 5 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                className: "item",
                children: [
                    console.log(">>>list  ", box),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: box?.logoImage?.url || "-",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        children: box.subtitle[0]?.text ? box.subtitle[0].text : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {})
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: box.description ? box.description : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {})
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        // href={calltoactionUri.url === "" ? `/${linkResolver(calltoactionUri)}` : calltoactionUri.uid}
                        href: box?.buttonlink?.uid || "#",
                        // href={"contact"}
                        passHref: true,
                        prefetch: true,
                        children: /*#__PURE__*/ jsx_runtime.jsx(LogoListStyle_Button, {
                            children: "Seguir Leyendo"
                        })
                    }, `industryButton${index}`)
                ]
            }, `box-item-${index}`) : null;
        }) : null
    });
};
/* harmony default export */ const common_LogoListv2 = (LogoListv2);

;// CONCATENATED MODULE: ./components/slices/LogoList/variants/buttonTitleDescription/index.js




const buttonTitleDescription_Base = (props)=>{
    const { description , title  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(buttonTitleDescription_defaultStyles_Content, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                children: title[0]?.text || ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx(common_LogoListv2, {
                list: props.items
            })
        ]
    });
};
const ButtonTitleDescription = (0,Containers/* SliceFactory */.ZD)(buttonTitleDescription_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "white"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/LogoList/variants/index.js





;// CONCATENATED MODULE: ./components/slices/LogoList/index.js


const LogoList_LogoList = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: LogoList_variants_default_Default,
        ["onlyLogosBg"]: OnlyLogosBg,
        ["buttonTitleDescription"]: ButtonTitleDescription
    };
    const TypeOfVariants = typeOfComponents[variation] || LogoList_variants_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
            ...slice
        })
    });
};

;// CONCATENATED MODULE: ./slices/LogoList/index.js

/* harmony default export */ const slices_LogoList = (LogoList_LogoList);

;// CONCATENATED MODULE: ./components/slices/Metrics/variants/default/defaultStyles.js

const Metrics_variants_default_defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-7b61253-0"
})`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;
const Metrics_variants_default_defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-7b61253-1"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 100px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    text-align: center;
    color: ${(props)=>props.theme.colors.textSecondary};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }
`;
const MetricsContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-7b61253-2"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: 1096px;
  height: 235px;
  margin-top: 64px;
  background-color: ${(props)=>props.theme.colors.bgColorCoral};
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
`;
const default_defaultStyles_ItemsContainer = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-7b61253-3"
})`
  margin: 0;
  padding: 0;
  margin-top: 34px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  h3 {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props)=>props.theme.typography.h3.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color: ${(props)=>props.theme.colors.textSecondary};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }

  span {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props)=>props.theme.typography.customSpan.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.customSpan.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.customSpan.desktop.fontSize};
    text-align: center;
    color: ${(props)=>props.theme.colors.bgColorQuaternary};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
  }
`;

;// CONCATENATED MODULE: ./components/slices/Metrics/variants/default/index.js




const Metrics_variants_default_Base = (props)=>{
    const { title  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Metrics_variants_default_defaultStyles_Content, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Metrics_variants_default_defaultStyles_Description, {
                children: title[0]?.text ? prismic_reactjs.RichText.render(title) : /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    children: "Staff Metrics"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MetricsContainer, {
                children: /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_ItemsContainer, {
                    children: Array.isArray(props.items) ? props.items.map((box, index)=>{
                        return index <= 3 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: box.contenttext
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: box.subtitle
                                })
                            ]
                        }, `box-item-${index}`) : null;
                    }) : null
                })
            })
        ]
    });
};
const Metrics_variants_default_Default = (0,Containers/* SliceFactory */.ZD)(Metrics_variants_default_Base);

;// CONCATENATED MODULE: ./components/slices/Metrics/index.js


const Metrics = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: Metrics_variants_default_Default,
        ["noBackground"]: Metrics_variants_default_namespaceObject.NoBackground
    };
    const TypeOfVariants = typeOfComponents[variation] || Metrics_variants_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Metrics/index.js

/* harmony default export */ const slices_Metrics = (Metrics);

;// CONCATENATED MODULE: ./components/slices/Projects/variants/default/defaultStyles.js

const defaultStyles_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-175efbf8-0"
})`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;
const ImgContent = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-175efbf8-1"
})`
  img {
    width: 535px;
    height: 612px;
  }
`;
const Projects_variants_default_defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-175efbf8-2"
})`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  //  h2 {
  //     margin: 0;
  //     margin-bottom: 24px;
  //     font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
  //     line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
  //     font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
  //     color: ${(props)=>props.theme.colors.textDarkPrimary};
  //     text-align: start;
  //     @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
  //       width: 70%;
  //       font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
  //       line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
  //       font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
  //       margin-bottom: 16px;
  //     }
  //   }
  //   h3 {
  //     font-weight:  ${(props)=>props.theme.typography.h3.desktop.fontWeight};
  //     line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
  //     font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
  //     text-align: start;
  //     color: ${(props)=>props.theme.colors.textSecondary};
  //     margin-bottom: 8px;
  //     @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
  //       width: 70%;
  //       margin-bottom: 16px;
  //       font-weight:  ${(props)=>props.theme.typography.h3.desktop.fontWeight};
  //       line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
  //       font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
  //     }
  //   }
  p {
    margin: 0;
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    text-align: justify;
    color: ${(props)=>props.theme.colors.textPrimary};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      // width: 70%;
      font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
      line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
      margin-bottom: 16px;
    }
  }
`;
const defaultStyles_Title = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-175efbf8-3"
})`
  width: 100%;
  text-align: center;
  // background-color: red;
  h2 {
    text-align: center;
    // margin: 40px 0;
  }
`;
const variants_default_defaultStyles_ImgHolder = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-175efbf8-4"
})`
  width: 50%;

  margin-top: 1.5rem;
  img {
    max-width: 525px;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`; // export const ImgHolder = styled.div`
 //   display: flex;
 //   flex-direction: row;
 //   margin-top: 1.5rem;
 //   img {
 //     width: 135px;
 //     height: 50px;
 //   }
 //   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
 //     width: 100%;
 //     border-radius: 24px;
 //     img {
 //       width: 100%;
 //     }
 //   }
 // `;

;// CONCATENATED MODULE: ./components/slices/Projects/variants/default/index.js





const Projects_variants_default_Base = (props)=>{
    const { description , imgswapp , title , subtitle , projects , imageapplestore  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(defaultStyles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(variants_default_defaultStyles_ImgHolder, {
                children: /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.div */.E.div, {
                    initial: {
                        opacity: 0,
                        x: 100
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("source", {
                                srcSet: imgswapp.url,
                                media: "(max-width: 630px)"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: imgswapp.url,
                                alt: "Estadistica m-elevadores"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Projects_variants_default_defaultStyles_Description, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_Title, {
                        children: subtitle && subtitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_Title, {
                        children: title && prismic_reactjs.RichText.render(title)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.div */.E.div, {
                        whileInView: {
                            y: [
                                0,
                                50
                            ]
                        },
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: description && prismic_reactjs.RichText.render(description)
                    })
                ]
            })
        ]
    });
};
const Projects_variants_default_Default = (0,Containers/* SliceFactory */.ZD)(Projects_variants_default_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "white"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/Projects/index.js


const ProjectSlice = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: Projects_variants_default_Default
    };
    const TypeOfVariants = typeOfComponents[variation] || Projects_variants_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Projects/index.js

/* harmony default export */ const Projects = (ProjectSlice);

;// CONCATENATED MODULE: ./components/slices/Services/variants/default/defaultStyles.js

// export const ButtonContainer = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   font-weight: bold;
//   font-family: ${(props) => props.theme.typography.fontFamily};
//   white-space: nowrap;
//   border-radius: ${(props) => props.theme.button.borderRadius};
//   font-size: 16px;
//   line-height: 24px;
//   border: none;
//   cursor: pointer;
//   transition: background 0.3s ease;
//   height: ${(props) => props.theme.button.height};
//   background:${(props) => props.theme.colors.bgColorTertiary};
//   color:${(props) => props.theme.colors.white};
//   :hover {
//     background: #e4e1e1;
//     color:${(props) => props.theme.colors.grey};
//   }
//   padding:${(props) => props.theme.button.padding};
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     width: 100%;
//   }
// `;
const default_defaultStyles_Title = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-18b5cb0f-0"
})`
  width: 100%;
  // background-color: red;
  h2 {
    text-align: left;
    margin: 40px 0;
  }
`;
const defaultStyles_Anchor = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
    componentId: "sc-18b5cb0f-1"
})`
  margin: 0;
  &.fullwidth {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
`;
const default_defaultStyles_Button = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-18b5cb0f-2"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // font-weight: bold;
  // font-weight: 100;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props)=>props.theme.button.borderRadius};
  border: none;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #e4e1e1;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props)=>props.theme.button.height};
  margin-top: 16px;
  background: #ffffff;

  color: #424243;

  :hover {
    background: #e4e1e1;
    color: ${(props)=>props.theme.colors.grey};
  }
  padding: ${(props)=>props.theme.button.padding};

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
const Services_variants_default_defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-18b5cb0f-3"
})`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  }
`;
const variants_default_defaultStyles_ButtonContainer = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-18b5cb0f-4"
})`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props)=>props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  width: fit-content;
  height: ${(props)=>props.theme.button.height};
  background: ${(props)=>props.theme.colors.bgHover};
  border: 1px solid ${(props)=>props.theme.colors.textLightPrimary};
  color: ${(props)=>props.theme.colors.white};
  :hover {
    background-color: ${(props)=>props.theme.colors.bgHover};
    color: ${(props)=>props.theme.colors.white};
  }
  padding: ${(props)=>props.theme.button.padding};

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
const Services_variants_default_defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-18b5cb0f-5"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-right: 50px;
  margin-left: 20px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
    padding: 0;
    margin: 0;
    padding-top: 22px;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    width: 100%;
    margin: 0;
  }
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    color: ${(props)=>props.theme.colors.textDarkblue};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 100%;
      font-weight:  ${(props)=>props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props)=>props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 16px;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      margin-top 16px;
      width: 100%;
      text-align: center;
      line-height:  ${(props)=>props.theme.typography.h2.mobile.lineHeight};
    }
    
  }
  p {
    margin: 0;
    line-height:  ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      margin-bottom: 22px;
      text-align: center;
    }
  }
`;
const Services_variants_default_defaultStyles_ImgHolder = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-18b5cb0f-6"
})`
  width: 50%;
  img {
    width: 100%;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;
// export const Button = styled.button`
//   border-radius: 22px;
//   padding: 10px 30px;
//   border: 1px solid;
//   margin-top: 18px;
//   font-weight:  ${(props) => props.theme.typography.btnText.desktop.fontWeight};
//   line-height:  ${(props) => props.theme.typography.btnText.desktop.lineHeight};
//   font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
//   text-align: center;
//   width: 254px;
//   height: 48px;
//   cursor: pointer;
//   color: ${(props) => props.theme.colors.bgColorQuaternary};
//   // background: ${(props) => props.theme.colors.secondary};
//   background:${(props) => props.theme.colors.textLightPrimary};
//   border-color: ${(props) => props.theme.colors.textLightPrimary};
// `;
// width: 100%;
// height: 100%;
const ImgIco = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-18b5cb0f-7"
})`
  margin-top: 8px;
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    width: 500px;
    border: solid 1px pink;
  }
`;
const ListContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-18b5cb0f-8"
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;

  // border: 1px solid blue;

  // .img{
  //   // width: 100%;
  //   // height: 100%;
  // }

  @media (max-width: ${(props)=>props.theme.breakpoints.xl}) {
    width: 100%;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
  @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ContentContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-18b5cb0f-9"
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const variants_default_defaultStyles_ItemsContainer = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-18b5cb0f-10"
})`
  margin-top: 44px;
  width: 100%;
  padding: 0;

  list-style-type: none;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    justify-content: center;
    margin-bottom: 0px;
  }

  .img {
    margin-right: 18px;
    margin-bottom: 50px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      width: 100px;
      height: 100px;
      margin-bottom: 16px;
    }
  }

  h3 {
    font-weight: ${(props)=>props.theme.typography.h3.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    text-align: left;
    color: ${(props)=>props.theme.colors.textDarkblue};
    margin-bottom: 8px;
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      margin-bottom: 16px;
      font-weight: ${(props)=>props.theme.typography.h3.desktop.fontWeight};
      line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      width: 100%;
      text-align: center;
      line-height: ${(props)=>props.theme.typography.h3.mobile.lineHeight};
    }
  }

  p {
    margin: 0;
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    text-align: justify;
    color: ${(props)=>props.theme.colors.textPrimary};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
      line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
      margin-bottom: 16px;
    }
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      width: 100%;
      text-align: center;
    }
  }

  .item {
    display: flex;
    margin: 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
  }
`;

;// CONCATENATED MODULE: ./components/slices/Services/variants/default/index.js






const Services_variants_default_Base = (props)=>{
    const { description , image , title , buttontext  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Content, {
        style: {
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_Title, {
                children: title[0]?.text && prismic_reactjs.RichText.render(title)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Content, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Services_variants_default_defaultStyles_ImgHolder, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.div */.E.div, {
                            initial: {
                                opacity: 0,
                                x: 100
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("source", {
                                        srcSet: image.url,
                                        media: "(max-width: 630px)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: image.url,
                                        alt: "HeroImg"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Description, {
                        children: [
                            description[0]?.text && prismic_reactjs.RichText.render(description),
                            /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.div */.E.div, {
                                initial: {
                                    opacity: 0,
                                    x: 50
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                whileInView: {
                                    y: [
                                        0,
                                        50
                                    ]
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(variants_default_defaultStyles_ItemsContainer, {
                                    children: Array.isArray(props.items) ? props.items.map((box, index)=>{
                                        return index <= 8 ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListContainer, {
                                                children: [
                                                    box?.imagelist?.url && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: box?.imagelist?.url || "-",
                                                        alt: "",
                                                        className: "img"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentContainer, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                children: box.titlelist
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: box.descriptionlist
                                                            }),
                                                            box.link && /*#__PURE__*/ jsx_runtime.jsx(defaultStyles_Anchor, {
                                                                id: box.link?.uid,
                                                                href: box.link?.uid,
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_Button, {
                                                                    fullwidth: false,
                                                                    children: box?.linktext || "M\xe1s info"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, `box-item-${index}`) : null;
                                    }) : null
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Services_variants_default_Default = (0,Containers/* SliceFactory */.ZD)(Services_variants_default_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "white"
        }
    }
}); // export const Default = SliceFactory(Base);
 //

;// CONCATENATED MODULE: ./components/slices/Services/variants/defaultNoVerMas/index.js






const defaultNoVerMas_Base = (props)=>{
    const { description , image , title , buttontext , buttonlink  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Content, {
        style: {
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_Title, {
                children: title[0]?.text && prismic_reactjs.RichText.render(title)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Content, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Services_variants_default_defaultStyles_ImgHolder, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.div */.E.div, {
                            initial: {
                                opacity: 0,
                                x: 100
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("source", {
                                        srcSet: image.url,
                                        media: "(max-width: 630px)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: image.url,
                                        alt: "HeroImg"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Description, {
                        children: [
                            description[0]?.text && prismic_reactjs.RichText.render(description),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(motion/* motion.div */.E.div, {
                                initial: {
                                    opacity: 0,
                                    x: 50
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                whileInView: {
                                    y: [
                                        0,
                                        50
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(variants_default_defaultStyles_ItemsContainer, {
                                        children: Array.isArray(props.items) ? props.items.map((box, index)=>{
                                            return index <= 8 ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "item",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListContainer, {
                                                    children: [
                                                        box?.imagelist?.url && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: box?.imagelist?.url || "-",
                                                            alt: "",
                                                            className: "img"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentContainer, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                    children: box.titlelist
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: box.descriptionlist
                                                                }),
                                                                console.log("--props?.primary.--", props?.primary)
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, `box-item-${index}`) : null;
                                        }) : null
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: buttonlink?.uid,
                                        passHref: true,
                                        prefetch: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(variants_default_defaultStyles_ButtonContainer, {
                                            fullwidth: false,
                                            children: buttontext ? buttontext : `Cotiza`
                                        })
                                    }, `comparation-contactButton`)
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const DefaultNoVerMas = (0,Containers/* SliceFactory */.ZD)(defaultNoVerMas_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "white"
        }
    }
}); // export const Default = SliceFactory(Base);
 //

;// CONCATENATED MODULE: ./components/slices/Services/variants/noIconsNoButtons/index.js




const noIconsNoButtons_Base = (props)=>{
    const { description , image , title  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Content, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Services_variants_default_defaultStyles_ImgHolder, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: image.url,
                            media: "(max-width: 630px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: image.url,
                            alt: "HeroImg"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Description, {
                children: [
                    title[0]?.text ? prismic_reactjs.RichText.render(title) : /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "We offer a variety of high-end services."
                    }),
                    description[0]?.text ? prismic_reactjs.RichText.render(description) : /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id laboriosam a dignissimos! Quo temporibus quam saepe distinctio culpa quisquam laborum ut repudiandae velit repellat perferendis doloribus odio, et dignissimos.."
                    })
                ]
            })
        ]
    });
};
const NoIconsNoButtons = (0,Containers/* SliceFactory */.ZD)(noIconsNoButtons_Base);

;// CONCATENATED MODULE: ./components/slices/Services/variants/noIcons/index.js




const noIcons_Base = (props)=>{
    const { description , image , title , buttontext  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Content, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Services_variants_default_defaultStyles_ImgHolder, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: image.url,
                            media: "(max-width: 630px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: image.url,
                            alt: "HeroImg"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Description, {
                children: [
                    title[0]?.text ? prismic_reactjs.RichText.render(title) : /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "We offer a variety of high-end services."
                    }),
                    description[0]?.text ? prismic_reactjs.RichText.render(description) : /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id laboriosam a dignissimos! Quo temporibus quam saepe distinctio culpa quisquam laborum ut repudiandae velit repellat perferendis doloribus odio, et dignissimos.."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(default_defaultStyles_Button, {
                        children: buttontext ? buttontext : `Explore our services`
                    })
                ]
            })
        ]
    });
};
const NoIcons = (0,Containers/* SliceFactory */.ZD)(noIcons_Base);

;// CONCATENATED MODULE: ./components/slices/Services/variants/imageText/index.js




const imageText_Base = (props)=>{
    const { image , title  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Services_variants_default_defaultStyles_Content, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Services_variants_default_defaultStyles_ImgHolder, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: image.url,
                            media: "(max-width: 630px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: image.url,
                            alt: "HeroImg"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Services_variants_default_defaultStyles_Description, {
                children: title[0]?.text ? prismic_reactjs.RichText.render(title) : /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    children: "We offer a variety of high-end services."
                })
            })
        ]
    });
};
const ImageText = (0,Containers/* SliceFactory */.ZD)(imageText_Base);

;// CONCATENATED MODULE: ./components/slices/Services/variants/index.js







;// CONCATENATED MODULE: ./components/slices/Services/index.js


const Services = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: Services_variants_default_Default,
        ["defaultNoVerMas"]: DefaultNoVerMas,
        ["noIconsNoButtons"]: NoIconsNoButtons,
        ["noIcons"]: NoIcons,
        ["imageText"]: ImageText
    };
    const TypeOfVariants = typeOfComponents[variation] || Services_variants_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Services/index.js

/* harmony default export */ const slices_Services = (Services);

;// CONCATENATED MODULE: ./components/slices/Staff/variants/default/defaultStyles.js

const Staff_variants_default_defaultStyles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3517d391-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  // @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
  // }
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props)=>props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    color: ${(props)=>props.theme.colors.textDarkblue};
    text-align: center;
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      // width: 70%;
      font-weight: ${(props)=>props.theme.typography.h2.desktop.fontWeight};
      line-height: ${(props)=>props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h2.desktop.fontSize};
    }
  }
`;
const Staff_variants_default_defaultStyles_Description = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3517d391-1"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // margin-right: 50px;
  // margin-left: 50px;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    // width: 100%;
    margin-right: 0;
  }
`;
const defaultStyles_ListContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3517d391-2"
})`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 34px;
  margin-right: 0px;
  @media (max-width: ${(props)=>props.theme.breakpoints.xl}) {
    width: 100%;
    margin-right: 20px;
  }
  img {
    height: 200px;
    // @media (max-width: 460px) {
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
const DataContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3517d391-3"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
  width: 100%;
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  img {
    max-width: 48px;
    height: 48px;
    margin-top: 20px;
    @media (max-width: 460px) {
      padding: 0;
    }
  }
`;
const TextContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-3517d391-4"
})`
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  h3 {
    margin: 0;
    font-weight: ${(props)=>props.theme.typography.h3.desktop.fontWeight};
    line-height: 24px;
    margin-top: 24px;
    font-size: 16px;
    text-align: start;
    color: ${(props)=>props.theme.colors.textDarkblue};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      // width: 70%;
      font-weight: ${(props)=>props.theme.typography.h3.desktop.fontWeight};
      line-height: ${(props)=>props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    }
  }
  p {
    margin-bottom: 0;
    font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
    line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
    font-size: 16px;
    color: ${(props)=>props.theme.colors.textPrimary};
    @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
      width: 70%;
      font-weight: ${(props)=>props.theme.typography.p.desktop.fontWeight};
      line-height: ${(props)=>props.theme.typography.p.desktop.lineHeight};
      font-size: ${(props)=>props.theme.typography.p.desktop.fontSize};
    }
  }
`;
const Staff_variants_default_defaultStyles_ItemsContainer = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
    componentId: "sc-3517d391-5"
})`
  margin: 0;
  padding: 10px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  // justify-content: space-between;
  align-items: center;
  // width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // margin: 10px;
    @media (max-width: 768px) {
      // width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
  }
`;

;// CONCATENATED MODULE: ./components/slices/Staff/variants/default/index.js




const Staff_variants_default_Base = (props)=>{
    const { title  } = props.primary;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Staff_variants_default_defaultStyles_Content, {
        children: [
            title[0]?.text && prismic_reactjs.RichText.render(title),
            /*#__PURE__*/ jsx_runtime.jsx(Staff_variants_default_defaultStyles_Description, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Staff_variants_default_defaultStyles_ItemsContainer, {
                    children: Array.isArray(props.items) ? props.items.map((box, index)=>{
                        return index <= 10 ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "item",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(defaultStyles_ListContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: box?.image?.url || "-",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DataContainer, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: box.profileurl.url,
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: box?.linkedinlogo?.url || "-",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TextContainer, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: box.nametitle
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: box.positiontitle
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, `box-item-${index}`) : null;
                    }) : null
                })
            })
        ]
    });
};
const Staff_variants_default_Default = (0,Containers/* SliceFactory */.ZD)(Staff_variants_default_Base, {
    sectionContainerProps: {
        style: {
            backgroundColor: "white"
        }
    }
});

;// CONCATENATED MODULE: ./components/slices/Staff/variants/index.js



;// CONCATENATED MODULE: ./components/slices/Staff/index.js


const Staff = ({ slice  })=>{
    const { variation  } = slice;
    const typeOfComponents = {
        ["default"]: Staff_variants_default_Default
    };
    const TypeOfVariants = typeOfComponents[variation] || Staff_variants_default_Default;
    return /*#__PURE__*/ jsx_runtime.jsx(TypeOfVariants, {
        ...slice
    });
};

;// CONCATENATED MODULE: ./slices/Staff/index.js

/* harmony default export */ const slices_Staff = (Staff);

;// CONCATENATED MODULE: ./slices/index.js
// Code generated by Slice Machine. DO NOT EDIT.



















const components = {
    card_list: CardList,
    clients: slices_Comparative,
    contact: Contact,
    hero: Hero,
    ideas: Ideas,
    landing_banner: slices_LandingBanner,
    landing_callback: slices_LandingCallbackForm,
    landing_count_up: slices_LandingCountUp,
    landing_customer_review: slices_LandingCustomerReview,
    landing_faq: slices_LandingFaq,
    landing_services: slices_LandingServices,
    landing_standout: slices_LandingStandout,
    landing_timeline: slices_LandingTimeline,
    logo_list: slices_LogoList,
    metrics: slices_Metrics,
    projects: Projects,
    services: slices_Services,
    staff: slices_Staff
};


/***/ })

};
;