(function() {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 9804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BlogId; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./libs/client.js
var client = __webpack_require__(9462);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(3445);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/date.js
var date = __webpack_require__(1297);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(8137);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
;// CONCATENATED MODULE: external "cheerio"
var external_cheerio_namespaceObject = require("cheerio");;
var external_cheerio_default = /*#__PURE__*/__webpack_require__.n(external_cheerio_namespaceObject);
;// CONCATENATED MODULE: external "highlight.js"
var external_highlight_js_namespaceObject = require("highlight.js");;
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_namespaceObject);
;// CONCATENATED MODULE: ./pages/[id].js










function BlogId({
  blog
}) {
  const $ = external_cheerio_default().load(blog.body);
  $("pre code").each((_, elm) => {
    const result = external_highlight_js_default().highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  const html = $.html();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: blog.title
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (utils_module_default()).headingXl,
        children: blog.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (utils_module_default()).lightText,
        children: ["\u516C\u958B: ", /*#__PURE__*/jsx_runtime_.jsx(date/* default */.Z, {
          dateString: blog.createdAt
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        dangerouslySetInnerHTML: {
          __html: html // __html: `${blog.body}`,

        }
      })]
    })]
  });
}
const getStaticPaths = async () => {
  const data = await client/* client.get */.L.get({
    endpoint: "blog"
  });
  const paths = data.contents.map(content => `/${content.id}`);
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const id = context.params.id;
  const data = await client/* client.get */.L.get({
    endpoint: "blog",
    contentId: id
  });
  return {
    props: {
      blog: data
    }
  };
};

/***/ }),

/***/ 3879:
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ 9145:
/***/ (function(module) {

"use strict";
module.exports = require("microcms-js-sdk");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,676,775], function() { return __webpack_exec__(9804); });
module.exports = __webpack_exports__;

})();