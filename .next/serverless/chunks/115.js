"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 4115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LX": () => (/* binding */ getMetaTags)
/* harmony export */ });
/* unused harmony exports getAlternates, dummy, getTitle */
/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5267);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getAlternates = ({
  alternate_languages,
  sitename
}) => {
  return alternate_languages.map((page, i) => /*#__PURE__*/_jsx("link", {
    hrefLang: page.lang,
    rel: "alternate",
    href: `${sitename}${linkResolver(page)}/`
  }, i));
}; // Open Graph tags

const getMetaTags = ({
  description,
  author,
  title
}) => [{
  name: `description`,
  content: description || dummy("")
}, {
  name: `twitter:card`,
  content: `summary`
}, {
  name: `twitter:creator`,
  content: "@melevadores"
}, {
  name: `twitter:title`,
  content: title || dummy("")
}, {
  name: `twitter:description`,
  content: description || dummy("")
}, {
  property: `og:title`,
  content: title || dummy("")
}, {
  property: `og:description`,
  content: description || dummy("")
}, {
  property: `og:url`,
  content: "https://melevadores.cl"
}, {
  property: `og:type`,
  content: `website`
}, {
  name: `og:image`,
  content: "https://images.prismic.io/m-elevadores/Ztovabzzk9ZrXEZc_SEO-melevadores.png"
}, {
  name: `og:image:alt`,
  content: "melevadores.cl"
}, {
  name: `og:image:width`,
  content: "1200"
}, {
  name: `og:image:height`,
  content: "630"
}, {
  name: `og:site_name`,
  content: "melevadores"
}, {
  name: `viewport`,
  content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
}, {
  name: `keywords`,
  content: "Comercializamos plataformas salvaescaleras que son soluciones de accesibilidad ideales para personas con movilidad reducida. Estos dispositivos motorizados permiten subir y bajar escaleras de forma segura y cómoda."
}].map((items, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", _objectSpread({}, items), `meta-${i}`));
const dummy = (content = "") => [{
  text: content,
  type: "heading 1",
  spans: []
}];
const getTitle = ({
  type,
  title
}) => title.replace(/['"]+/g, "");

/***/ })

};
;