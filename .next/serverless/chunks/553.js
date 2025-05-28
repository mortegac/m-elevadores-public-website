"use strict";
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 3553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LX": () => (/* binding */ getMetaTags)
/* harmony export */ });
/* unused harmony exports getAlternates, dummy, getTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1322);


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
            content: "@melevadores"
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
            content: "https://melevadores.cl"
        },
        {
            property: `og:type`,
            content: `website`
        },
        {
            name: `og:image`,
            content: "https://images.prismic.io/m-elevadores/Ztovabzzk9ZrXEZc_SEO-melevadores.png"
        },
        {
            name: `og:image:alt`,
            content: "melevadores.cl"
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
            content: "melevadores"
        },
        {
            name: `viewport`,
            content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        },
        {
            name: `keywords`,
            content: "Comercializamos plataformas salvaescaleras que son soluciones de accesibilidad ideales para personas con movilidad reducida. Estos dispositivos motorizados permiten subir y bajar escaleras de forma segura y c\xf3moda."
        }, 
    ].map((items, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
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


/***/ })

};
;