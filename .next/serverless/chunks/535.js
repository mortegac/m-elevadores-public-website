"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 3535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// UNUSED EXPORTS: Body

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./components/common/Containers/index.js + 7 modules
var Containers = __webpack_require__(7351);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.js + 165 modules
var motion = __webpack_require__(6028);
// EXTERNAL MODULE: ./prismicio.js + 1 modules
var prismicio = __webpack_require__(1322);
;// CONCATENATED MODULE: ./components/common/Header/utils.js




const LinkPage = (data, pagename)=>{
    const dataMenu = {
        _meta: {
            type: data.type,
            lang: data.lang,
            uid: data.uid,
            url: data.uid
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: data.url === "" ? `/${(0,prismicio/* linkResolver */.kG)(dataMenu)}` : data.uid,
            passHref: true,
            prefetch: true,
            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                id: data.id,
                className: data.uid === pagename ? "selected" : "",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(motion/* motion.li */.E.li, {
                    className: "nav-item",
                    animate: true,
                    children: [
                        data.text,
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "underline"
                        })
                    ]
                })
            })
        }, `top-nav-${data.id}`)
    });
};
const LinkLogo = ()=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        style: {
            paddingTop: 48
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: `/`,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: "logo.png",
                            media: "(max-width: 500px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("source", {
                            srcSet: "logo.png",
                            media: "(max-width: 960px)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "logo.png",
                            alt: "m-elevadores"
                        })
                    ]
                })
            })
        })
    });
const validNavbarLink = (menuLink)=>{
    const { label , link  } = menuLink;
    if (link.link_type === "Document" && link.uid !== "" && label[0].text !== "") {
        return true;
    } else if ((link.link_type === "Web" || link.type === "Media") && link.url !== "" && label[0].text !== "") {
        return true;
    } else {
        return false;
    }
};
const renderedMenuLinks = (menuLinks, pageName)=>Array.isArray(menuLinks) ? menuLinks.map((menuLink, index)=>{
        const { label , link  } = menuLink;
        if (validNavbarLink(menuLink)) {
            return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx(LinkPage, {
                    pageName: pageName,
                    uid: link?.uid || "",
                    lang: link?.lang || "",
                    type: link?.type || "",
                    text: label || "-",
                    id: link?.id || "#",
                    slug: link?.slug || "#",
                    url: link?.url || ""
                }, index + "_menu_links")
            });
        }
    }) : "";

;// CONCATENATED MODULE: ./components/common/Header/HeaderStyles.js

const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const navMenuItems = {
    hidden: {
        opacity: 0,
        x: 50
    },
    show: {
        opacity: 1,
        x: 0
    }
};
const Anchor = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
    componentId: "sc-38afbaf0-0"
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
const ButtonContainer = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-38afbaf0-1"
})`
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
  
  background:${(props)=>props.theme.colors.bgColorTertiary};
  
  color:${(props)=>props.theme.colors.white};
  
  :hover {
    background: #e4e1e1;
    color:${(props)=>props.theme.colors.grey};
  }
  padding:${(props)=>props.theme.button.padding};
  
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
const NavContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-38afbaf0-2"
})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  
  background:${(props)=>props.theme.colors.secondary};
  color: ${(props)=>props.theme.colors.secondary};
  border-bottom: 1px solid rgba(0, 17, 51, 0.05);
  z-index: 9999;
  height: 65px;

  @media (max-width: 1000px) {
    height: 57px;
  }

  .navButton {
    height: 24px;
  }
`;
const SectionContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-38afbaf0-3"
})`
  max-width: ${(props)=>props.theme.sliceContainer.maxWidth};
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  // flex-direction: row;
  align-items: center;
  
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999;
    display: none;
    margin-right: -12px;
    @media (max-width: 1000px) {
      display: flex;
      max-width: 44px;
    }
  }
  .hamRotate.active {
    transform: rotate(45deg);
    .line {
      stroke: #001133c1;
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #013;
    stroke-width: 5.5;
    stroke-linecap: round;
    transition: all 0.4s ease;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
`;
// export const SectionContainer = styled.div`
//   max-width: ${(props) => props.theme.sliceContainer.maxWidth};
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 24px;
//   a {
//     display: flex;
//     height: 39px;
//     letter-spacing: 0px;
//   }
// `;
const LeftWrap = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-38afbaf0-4"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    list-style: none;
    height: 100%;
    padding: 0;
    a {
      letter-spacing: 0px;
      height: 100%;
      li {
        position: relative;
        height: 100%;
        padding: 0 20px 0 20px;
        margin: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        color: #FFFFFF;
        transition: color 0.4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        letter-spacing: 0px;
        &:hover {
          color: #bbb9b9;
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -1px;
          transition: all 0.5s ease;
          height: 2px;
          // background: ${(props)=>props.theme.colors.primary};
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        letter-spacing: 0px;
        color: ${(props)=>props.theme.colors.primary};
        .underline {
          opacity: 1;
        }
      }
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
const MobileNavContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-38afbaf0-5"
})`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background:  ${(props)=>props.theme.colors.secondary};
  // background: rgb(250, 250, 251);
  // background: ${(props)=>props.theme.colors.secondary};
  transform: translateX(100%);
  transition: transform 0.3s ease;

  #NavMobile {
    padding: 9px 0px 0px 24px;
  }

  #NavMenuMobile {
    margin-top: 38px;
    padding-left: 24px;
  }

  .button-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 8px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      flex-direction: column;
      gap: 24px;
    }
    a {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    letter-spacing: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin-bottom: 0;
    padding: 9px 0px 0px 24px;
    &:first-child {
      margin-top: 81px;
    }
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 42px;
      letter-spacing: 0px;
      color: #ffffff;
      display: flex;
      &.lang {
        text-transform: uppercase;
        svg {
          margin-right: 8px;
        }
      }
      &.selected {
        a {
          color: ${(props)=>props.theme.colors.primary};
        }
      }
      a {
        align-items: center;
        height: auto;
        letter-spacing: 0px;
        font-weight: normal;
        text-decoration: none;
        color: #00113399;
        &.selected {
          color: ${(props)=>props.theme.colors.primary};
        }
      }
    }
  }
  @media (max-width: 1000px) {
    display: flex;
  }
  &.on {
    transform: translateX(0%);
  }
`;

;// CONCATENATED MODULE: ./components/common/Header/Header.js




const Header = ({ header , pagename , activeDocMeta ,  })=>{
    const { 0: open , 1: setOpen  } = (0,react.useState)(false);
    const HamburgerBehavior = ()=>{
        setOpen(!open);
    };
    activeDocMeta.lang = header.lang;
    const menuLinks = header?.data?.menulinks || [];
    const calltoactiontext = header?.data?.calltoactiontext || [];
    const calltoactionUri = header?.data?.calltoactionurl.uid || {};
    return /*#__PURE__*/ jsx_runtime.jsx(NavContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SectionContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(LinkLogo, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(LeftWrap, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: renderedMenuLinks(menuLinks, pagename)
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Anchor, {
                            id: calltoactionUri,
                            href: calltoactionUri,
                            children: /*#__PURE__*/ jsx_runtime.jsx(ButtonContainer, {
                                fullwidth: true,
                                children: calltoactiontext[0]?.text || "Contact"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                    className: `ham hamRotate ham8 ${open && "active"}`,
                    viewBox: "0 0 100 100",
                    width: "50",
                    onClick: HamburgerBehavior,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            className: "line top",
                            d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            className: "line middle",
                            d: "m 30,50 h 40"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            className: "line bottom",
                            d: "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(MobileNavContainer, {
                    className: open && "on",
                    children: open && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                style: {
                                    padding: "10px 10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(LinkLogo, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                children: renderedMenuLinks(menuLinks, pagename)
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Anchor, {
                                id: calltoactionUri,
                                href: calltoactionUri,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx(ButtonContainer, {
                                    fullwidth: true,
                                    children: calltoactiontext[0]?.text || "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/common/Header/index.js


// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1581);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterList/FooterListStyles.jsx

const FooterListContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-af92e4c9-0"
})`
	// width: 100%;
	margin-left: 200px;
	
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	@media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
		margin-left: 0px;
	}
	
	font-family: ${(props)=>props.theme.typography.fontFamily};
		h3 {
			line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
			font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
			font-weight:${(props)=>props.theme.typography.h3.desktop.fontWeight};
			color: ${(props)=>props.theme.colors.white};
			letter-spacing: .4px;
			text-transform: uppercase;
			margin: 0;
			margin-bottom: 24px;
			@media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
				width: 200%;
				margin-top: 24px;
				margin-bottom: 16px;
				line-height:  ${(props)=>props.theme.typography.h3.mobile.lineHeight};
				font-size: ${(props)=>props.theme.typography.h3.mobile.fontSize};
				font-weight:${(props)=>props.theme.typography.h3.mobile.fontWeight};
			}
		}
		ul {
			margin: 0;
			padding: 0;
			li {
				list-style: none;
					&:hover {
						transform: scale(1.1);
						}
					&:not(:last-child){
						margin-bottom: 8px;
						margin-right: 20px;
					}
				a {
					text-decoration: none;
					font-size: 16px;
					font-weight: 400;
					line-height: 24px;
					color: white;
					transition: color .3s ease;
					&:hover {
						color: white;
					}
				}
			}
	}
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterList/FooterList.jsx





// eslint-disable-next-line no-unused-vars
const FooterList = ({ title ="" , items =[] , socialLinks  })=>{
    const { data: { linkgroup  }  } = items;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FooterListContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                children: linkgroup.map((item, id)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: item?.link?.slug && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: (0,prismicio/* hrefResolver */.Ew)(item.link),
                            scroll: false,
                            passHref: true,
                            children: item.label
                        })
                    }, id))
            })
        ]
    });
};
FooterList.propTypes = {
    title: (prop_types_default()).string,
    items: (prop_types_default()).array
};
FooterList.defaultProps = {
    title: "Company",
    items: [
        {
            name: "item-1",
            url: "/url-1"
        },
        {
            name: "item-2",
            url: "/url-2"
        },
        {
            name: "item-3",
            url: "/url-3"
        },
        {
            name: "item-4",
            url: "/url-4"
        }
    ]
};
/* harmony default export */ const FooterList_FooterList = (FooterList);

;// CONCATENATED MODULE: ./components/common/footer/subComponents/SocialLinks/SocialLinksStyles.jsx

const SocialLinksStyles_SocialLinksContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-d708d07f-0"
})`
// width: 25%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-family: ${(props)=>props.theme.typography.fontFamily};
h3 {
    
    line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    font-weight:${(props)=>props.theme.typography.h3.desktop.fontWeight};
    color: ${(props)=>props.theme.colors.white};
    letter-spacing: .4px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 24px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
        width: 200%;
        margin-top: 24px;
        margin-bottom: 16px;
        line-height:  ${(props)=>props.theme.typography.h3.mobile.lineHeight};
        font-size: ${(props)=>props.theme.typography.h3.mobile.fontSize};
        font-weight:${(props)=>props.theme.typography.h3.mobile.fontWeight};
    }
}
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        li {
            list-style: none;
            width: 50px;
            display: flex;
            flex-direction: row;
            align-items; center;
            justify-content: flex-start;
            transition: all .3s ease;
            transform: scale(1);
    
            &:hover {
                transform: scale(1.1);
                }
            &:not(:last-child){
                margin-right: 20px;
            }
            a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }
}
`;

;// CONCATENATED MODULE: ./components/Logos/LogoInstagram.js

const LogoInstagram = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "40",
        height: "41",
        viewBox: "0 0 40 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.9234 14.7321C33.8578 13.2443 33.6172 12.2215 33.2726 11.3352C32.917 10.3945 32.3701 9.5522 31.6534 8.85202C30.9533 8.14095 30.1054 7.58841 29.1756 7.23843C28.2842 6.89378 27.2667 6.6532 25.7789 6.5876C24.2801 6.51645 23.8043 6.5 20.0027 6.5C16.2012 6.5 15.7254 6.51645 14.2321 6.58205C12.7443 6.64764 11.7215 6.88844 10.8354 7.23287C9.89447 7.58841 9.0522 8.13539 8.35202 8.85202C7.64094 9.5522 7.08862 10.4 6.73843 11.3299C6.39378 12.2215 6.1532 13.2388 6.0876 14.7265C6.01645 16.2254 6 16.7012 6 20.5027C6 24.3043 6.01645 24.7801 6.08205 26.2734C6.14764 27.7611 6.38844 28.784 6.73308 29.6702C7.08862 30.611 7.64094 31.4533 8.35202 32.1534C9.0522 32.8645 9.90002 33.4171 10.8299 33.767C11.7215 34.1117 12.7388 34.3523 14.2267 34.4179C15.7198 34.4837 16.1959 34.4999 19.9974 34.4999C23.7989 34.4999 24.2747 34.4837 25.768 34.4179C27.2558 34.3523 28.2786 34.1117 29.1647 33.767C31.0464 33.0395 32.5342 31.5518 33.2617 29.6702C33.6061 28.7786 33.8469 27.7611 33.9125 26.2734C33.9781 24.7801 33.9946 24.3043 33.9946 20.5027C33.9946 16.7012 33.989 16.2254 33.9234 14.7321ZM31.402 26.164C31.3417 27.5315 31.112 28.2699 30.9206 28.7622C30.4501 29.982 29.482 30.9501 28.2621 31.4206C27.7699 31.612 27.0261 31.8417 25.664 31.9018C24.1871 31.9676 23.7442 31.9838 20.0083 31.9838C16.2724 31.9838 15.8239 31.9676 14.3524 31.9018C12.9849 31.8417 12.2465 31.612 11.7542 31.4206C11.1472 31.1962 10.5946 30.8407 10.1462 30.3758C9.68123 29.9217 9.32569 29.3747 9.10134 28.7677C8.9099 28.2754 8.68021 27.5315 8.62017 26.1696C8.55436 24.6927 8.53812 24.2496 8.53812 20.5136C8.53812 16.7777 8.55436 16.3292 8.62017 14.8579C8.68021 13.4905 8.9099 12.752 9.10134 12.2598C9.32569 11.6525 9.68123 11.1002 10.1517 10.6515C10.6055 10.1866 11.1525 9.83103 11.7598 9.6069C12.252 9.41546 12.996 9.18577 14.3579 9.12551C15.8348 9.05992 16.2779 9.04347 20.0136 9.04347C23.7551 9.04347 24.198 9.05992 25.6695 9.12551C27.037 9.18577 27.7754 9.41546 28.2677 9.6069C28.8747 9.83103 29.4273 10.1866 29.8757 10.6515C30.3407 11.1055 30.6962 11.6525 30.9206 12.2598C31.112 12.752 31.3417 13.4958 31.402 14.8579C31.4675 16.3348 31.484 16.7777 31.484 20.5136C31.484 24.2496 31.4675 24.6871 31.402 26.164ZM20.0027 13.3099C16.0318 13.3099 12.8099 16.5316 12.8099 20.5027C12.8099 24.4739 16.0318 27.6955 20.0027 27.6955C23.9739 27.6955 27.1956 24.4739 27.1956 20.5027C27.1956 16.5316 23.9739 13.3099 20.0027 13.3099ZM20.0027 25.1685C17.4266 25.1685 15.337 23.0791 15.337 20.5027C15.337 17.9264 17.4266 15.8369 20.0027 15.8369C22.5791 15.8369 24.6685 17.9264 24.6685 20.5027C24.6685 23.0791 22.5791 25.1685 20.0027 25.1685ZM27.4799 14.7047C28.4075 14.7047 29.1594 13.9528 29.1594 13.0255C29.1594 12.098 28.4075 11.3463 27.4799 11.3463C26.5526 11.3463 25.8008 12.098 25.8008 13.0255C25.8008 13.9528 26.5526 14.7047 27.4799 14.7047Z",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/LogoFacebook.js

const LogoFacebook = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "40",
        height: "41",
        viewBox: "0 0 40 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M27.0137 22.25L27.7913 17.1827H22.9291V13.8943C22.9291 12.508 23.6083 11.1566 25.786 11.1566H27.9964V6.84234C27.9964 6.84234 25.9905 6.5 24.0726 6.5C20.0684 6.5 17.451 8.92703 17.451 13.3206V17.1827H13V22.25H17.451V34.5H22.9291V22.25H27.0137Z",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/LogoTwitter.js

const LogoTwitter = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "40",
        height: "41",
        viewBox: "0 0 40 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M31.1219 15.1675C31.1397 15.4162 31.1397 15.665 31.1397 15.9137C31.1397 23.5 25.3656 32.2412 14.8122 32.2412C11.5609 32.2412 8.54063 31.2995 6 29.6651C6.46195 29.7183 6.90607 29.7361 7.38579 29.7361C10.0685 29.7361 12.5381 28.83 14.5102 27.2843C11.9873 27.231 9.87309 25.5787 9.14465 23.3046C9.50001 23.3579 9.85532 23.3934 10.2285 23.3934C10.7437 23.3934 11.2589 23.3223 11.7386 23.198C9.10916 22.665 7.13701 20.3553 7.13701 17.566V17.495C7.90095 17.9214 8.78935 18.1879 9.73091 18.2233C8.18521 17.1929 7.17256 15.434 7.17256 13.4441C7.17256 12.3782 7.45677 11.401 7.95427 10.5482C10.7792 14.0304 15.0254 16.3045 19.7868 16.5533C19.698 16.1269 19.6446 15.6828 19.6446 15.2386C19.6446 12.0761 22.203 9.5 25.3832 9.5C27.0355 9.5 28.5279 10.1929 29.5761 11.3122C30.8731 11.0635 32.1167 10.5837 33.2183 9.9264C32.7918 11.2589 31.8858 12.3782 30.6954 13.0888C31.8503 12.9645 32.9696 12.6447 34 12.2005C33.2184 13.3375 32.2412 14.3502 31.1219 15.1675Z",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/LogoSpotify.js

const LogoSpotify = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "36",
        height: "37",
        viewBox: "0 0 91.36 91.36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M512,466.32A45.68,45.68,0,1,0,557.68,512,45.68,45.68,0,0,0,512,466.32Zm20.95,65.89a2.85,2.85,0,0,1-3.91.95c-10.73-6.56-24.23-8-40.13-4.4a2.85,2.85,0,1,1-1.27-5.55c17.4-4,32.33-2.27,44.37,5.09A2.85,2.85,0,0,1,532.95,532.21Zm5.59-12.44a3.56,3.56,0,0,1-4.9,1.17c-12.28-7.55-31-9.73-45.52-5.32a3.56,3.56,0,1,1-2.07-6.81c16.59-5,37.22-2.6,51.31,6.07A3.56,3.56,0,0,1,538.54,519.77Zm.48-13c-14.72-8.74-39-9.55-53.07-5.28a4.27,4.27,0,1,1-2.48-8.18c16.14-4.9,43-4,59.91,6.11a4.27,4.27,0,0,1-4.36,7.35Z",
            transform: "translate(-466.32 -466.32)",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/index.js





;// CONCATENATED MODULE: ./components/common/footer/subComponents/SocialLinks/SocialLinks.jsx




const SocialLinks = ({ socialTitle ="" , socialUrl =[]  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SocialLinksStyles_SocialLinksContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                children: socialTitle
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                children: /*#__PURE__*/ jsx_runtime.jsx("li", {})
            })
        ]
    });
};
SocialLinks.propTypes = {
    socialTitle: (prop_types_default()).string,
    socialUrl: (prop_types_default()).array
};
SocialLinks.defaultProps = {
    socialTitle: "Follow us",
    socialUrl: [
        {
            url: "#"
        },
        {
            url: "#"
        },
        {
            url: "#"
        }, 
    ]
};
/* harmony default export */ const SocialLinks_SocialLinks = (SocialLinks);

;// CONCATENATED MODULE: ./components/common/footer/subComponents/TrustPilot/TrustPilot.jsx

const TrustPilot_SocialLinksContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-d69c08d0-0"
})`
width: 25%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-family: ${(props)=>props.theme.typography.fontFamily};
h3 {
    
    line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    font-weight:${(props)=>props.theme.typography.h3.desktop.fontWeight};
    color: ${(props)=>props.theme.colors.white};
    letter-spacing: .4px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 24px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
        width: 200%;
        margin-top: 24px;
        margin-bottom: 16px;
        line-height:  ${(props)=>props.theme.typography.h3.mobile.lineHeight};
        font-size: ${(props)=>props.theme.typography.h3.mobile.fontSize};
        font-weight:${(props)=>props.theme.typography.h3.mobile.fontWeight};
    }
}
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        li {
            list-style: none;
            width: 50px;
            display: flex;
            flex-direction: row;
            align-items; center;
            justify-content: flex-start;
            transition: all .3s ease;
            transform: scale(1);
    
            &:hover {
                transform: scale(1.1);
                }
            &:not(:last-child){
                margin-right: 20px;
            }
            a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }
}
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/TrustPilot/index.jsx


const TrustPilot = ()=>{
    return /*#__PURE__*/ _jsx(SocialLinksContainer, {});
};
/* harmony default export */ const subComponents_TrustPilot = ((/* unused pure expression or super */ null && (TrustPilot)));

;// CONCATENATED MODULE: ./components/common/footer/subComponents/Logo/LogoStyles.jsx

const LogoContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-5b45dfdc-0"
})`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  svg {
    width: 50px;
  }
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/Logo/Logo.jsx


// import { LogoRia, LogoRiaGray } from "../../../Logos/index"

const Logo = ({ brand ="Ria"  })=>{
    ;
    return /*#__PURE__*/ jsx_runtime.jsx(LogoContainer, {});
};
Logo.propTypes = {
    brand: prop_types_default().oneOf([
        "Ria",
        "Ria-Gray"
    ])
};
Logo.defaultProps = {
    brand: "Ria-Gray"
};
/* harmony default export */ const Logo_Logo = ((/* unused pure expression or super */ null && (Logo)));

;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterCopyright/FooterCopyrightStyles.jsx

const FooterCopyrightContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-d7f78b6c-0"
})`
	// width: 100%;
	display: flex;
    flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
    font-family: ${(props)=>props.theme.typography.fontFamily};
    p {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        margin: 48px 0 0;
        color: white;
    }
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterCopyright/FooterCopyright.jsx




const FooterCopyright = ({ copyrightText  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FooterCopyrightContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(LinkLogo, {}),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: copyrightText
                })
            ]
        })
    });
};
FooterCopyright.propTypes = {
    copyrightText: (prop_types_default()).string
};
FooterCopyright.defaultProps = {
    copyrightText: "Lorem Ipsum \xa9 2022 Lorem Ipsum. All rights reserved."
};
/* harmony default export */ const FooterCopyright_FooterCopyright = (FooterCopyright);

;// CONCATENATED MODULE: ./components/common/footer/index.js








const FooterWrapper = styled_components_cjs/* default.footer.withConfig */.ZP.footer.withConfig({
    componentId: "sc-27187bb7-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 24px;
  // padding: 48px 24px;
  background-color: ${(props)=>props.backgroundColor ? props.backgroundColor : "white"};
  
  @media (max-width: 760px) {
    padding:0px;
    padding-top:48px;
  }
`;
const FooterItemsContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-27187bb7-1"
})`
  width: 45%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 760px) {
    flex-direction: column;
    margin:0px;
    padding:0px;
  }
`;
const Footer = ({ items ,  })=>{
    const { data: { data  } , data: { textrights  }  } = items;
    return /*#__PURE__*/ jsx_runtime.jsx(FooterWrapper, {
        backgroundColor: "#222222",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FooterItemsContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(FooterCopyright_FooterCopyright, {
                    copyrightText: "M-Elevadores \xa9 2023 , Inc. Todos los derechos reservados."
                }),
                /*#__PURE__*/ jsx_runtime.jsx(FooterList_FooterList, {
                    title: "",
                    items: items
                }),
                /*#__PURE__*/ jsx_runtime.jsx(SocialLinks_SocialLinks, {
                    socialTitle: " "
                })
            ]
        })
    });
};
Footer.propTypes = {
};
Footer.defaultProps = {
};
/* harmony default export */ const common_footer = (Footer);

;// CONCATENATED MODULE: ./utils/seo.js


const getAlternates = ({ alternate_languages , sitename  })=>{
    return alternate_languages.map((page, i)=>/*#__PURE__*/ _jsx("link", {
            hrefLang: page.lang,
            rel: "alternate",
            href: `${sitename}${linkResolver(page)}/`
        }, i));
};
// Open Graph tags
const getMetaTags = ({ description , author , title  })=>[
        {
            name: `description`,
            content: description || dummy("")
        },
        {
            name: `twitter:card`,
            content: `summary`
        },
        {
            name: `twitter:creator`,
            content: "@m-elevadores"
        },
        {
            name: `twitter:title`,
            content: title || dummy("")
        },
        {
            name: `twitter:description`,
            content: description || dummy("")
        },
        {
            property: `og:title`,
            content: title || dummy("")
        },
        {
            property: `og:description`,
            content: description || dummy("")
        },
        {
            property: `og:url`,
            content: "https://m-elevadores.cl"
        },
        {
            property: `og:type`,
            content: `website`
        },
        {
            name: `og:image`,
            content: "https://images.prismic.io/m-elevadores/ac375b05-4a63-492c-87ad-b65f2bb080f4_SOCIAL-MEDIA.png"
        },
        {
            name: `og:image:alt`,
            content: "m-elevadores.cl"
        },
        {
            name: `og:image:width`,
            content: "1200"
        },
        {
            name: `og:image:height`,
            content: "630"
        },
        {
            name: `og:site_name`,
            content: "m-elevadores-city"
        },
        {
            name: `viewport`,
            content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        },
        {
            name: `keywords`,
            content: "Transforma tu flota hacia un futuro sostenible con nuestras asesor\xedas en proyectos de electromovilidad. Descubre c\xf3mo recambiar tus veh\xedculos de gasolina o bencina por opciones el\xe9ctricas eficientes y amigables con el medio ambiente. Nuestro equipo de expertos te guiar\xe1 en cada paso del proceso, desde la evaluaci\xf3n inicial hasta la implementaci\xf3n exitosa. \xa1Convi\xe9rtete en l\xedder de la revoluci\xf3n el\xe9ctrica y optimiza tus recursos hoy mismo!"
        }, 
    ].map((items, i)=>/*#__PURE__*/ jsx_runtime.jsx("meta", {
            ...items
        }, `meta-${i}`));
const dummy = (content = "")=>[
        {
            text: content,
            type: "heading 1",
            spans: []
        }, 
    ];
const getTitle = ({ type , title  })=>title.replace(/['"]+/g, "");

;// CONCATENATED MODULE: ./components/common/Layout.js








/**
 * The default layout for all pages.
 */ const Body = styled_components_cjs/* default.body.withConfig */.ZP.body.withConfig({
    componentId: "sc-7b915d7-0"
})`
  background-color:${(props)=>props.theme.colors.secondary};
  background:${(props)=>props.theme.colors.secondary};
`;
const Layout = (props)=>{
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
                        href: `${activeDocMeta.sitename}${(0,prismicio/* linkResolver */.kG)(page)}`
                    }),
                    getMetaTags({
                        description,
                        title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Body, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containers/* PageContainer */._z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(Header, {
                            header: header,
                            pagename: page ? page.uid ? page.uid : page.slugs[0] : "Home",
                            lang: page.lang || "es-cl",
                            activeDocMeta: activeDocMeta
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime.jsx(common_footer, {
                            items: footer
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;