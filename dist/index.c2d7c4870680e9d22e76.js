"use strict";
(self["webpackChunkformvalidate"] = self["webpackChunkformvalidate"] || []).push([["index"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   docContent: () => (/* binding */ docContent)
/* harmony export */ });
function docContent() {
  const imageHolder = document.createElement('div');
  imageHolder.classList.add('imageHolder');
  const label = document.createElement('label');
  const searchInput = document.createElement('input');
  searchInput.setAttribute('id', 'search');
  searchInput.setAttribute('placeHolder', 'search...');
  searchInput.setAttribute('style', 'cursor:pointer;');
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("height", "21");
  svg.setAttribute("viewBox", "0 -960 960 960");
  svg.setAttribute("width", "21");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z");
  const img = document.createElement('div');
  img.classList.add('image');
  img.setAttribute('style', 'display:flex;flex-wrap:wrap;gap:0.2vw;margin-top:1rem;');
  svg.appendChild(path);
  label.appendChild(searchInput);
  label.appendChild(svg);
  label.appendChild(img);
  imageHolder.appendChild(label);
  document.body.appendChild(imageHolder);
  return {
    img,
    searchInput,
    svg
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



const body = document.querySelector('body');
const intro = document.querySelector('.welcome');
intro.innerHTML = "Welcome To Our Form Validation Project";
intro.style.fontSize = "2rem";
intro.style.color = "green";
body.appendChild(intro);
const form = document.querySelector('form');
body.appendChild(form);
const button = document.querySelector('button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const demo2 = document.querySelector('.demo2');
const emailError = document.querySelector('.emailError');
function formValid(element, message) {
  if (!element.checkValidity()) {
    message.innerHTML = element.validationMessage;
    message.setAttribute('style', 'color:red; display:block; font-size:0.8rem; margin:0 0 0 23%;');
    button.setAttribute('style', 'margin:2rem auto;');
  } else {
    message.innerHTML = "great!";
    message.setAttribute('style', 'color:green; display:block; font-size:0.8rem; margin:0 0 0 23%;');
    button.setAttribute('style', 'margin:2rem auto;');
  }
}
let svg, img, searchInp;
button.addEventListener('click', function (event) {
  event.preventDefault();
  email.addEventListener('input', () => {
    formValid(email, emailError);
  });
  password.addEventListener('input', () => {
    formValid(password, demo2);
  });
  if (password.checkValidity() && email.checkValidity()) {
    const alertNow = alert('Login Success!');
    alertNow;
    const {
      img: generatedImg,
      searchInput: generatedInput,
      svg: generatedSvg
    } = (0,_home__WEBPACK_IMPORTED_MODULE_1__.docContent)();
    svg = generatedSvg;
    img = generatedImg;
    searchInp = generatedInput;
    intro.innerHTML = "Search for your Favorite Gifs";
    form.remove();
    click();
  } else {
    alert('Incorrect password or email');
  }
});

//form Validate Functions
function click() {
  const svgClick = svg.addEventListener('click', () => {
    img.innerHTML = ' ';
    async function getGifs() {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=MVyTaUBIpcZn7pon7F7ZDUgZDNS6XHxW&q=${searchInp.value}&limit=20&offset=0&rating=g&lang=en`, {
          mode: 'cors'
        });
        const getData = await response.json();
        getData.data.forEach(data => {
          const gifImg = document.createElement('img');
          gifImg.setAttribute('style', 'width:19vw;height:auto;object-fit:cover;');
          gifImg.src = data.images.original.url;
          img.appendChild(gifImg);
          return gifImg;
        });
      } catch {
        err => {
          console.error(err + " " + ":here's the error");
        };
      }
    }
    getGifs();
    if (!svgClick) {
      svg.setAttribute('style', 'position:relative;top:0.3rem;');
    } else {
      svg.setAttribute('style', 'position:relative;top:0.3rem;transform:scale(1.2);');
    }
  });
  return svgClick;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    margin-inline: 10vw;
    text-align: center;
}

label{
    margin-inline: 10vw;
    font-size: 1.5rem;
    display: block;
    width: 100%;

}
input {
    width: 30ch;
}
#password {
    margin-top:0;
}
p{
    display: none;
    margin:0 0 0 2rem;
}

button {
    width: 30ch;
    margin:0;
}
form {
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;IACd,WAAW;;AAEf;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,QAAQ;AACZ;AACA;IACI,kBAAkB;AACtB","sourcesContent":["body{\n    margin-inline: 10vw;\n    text-align: center;\n}\n\nlabel{\n    margin-inline: 10vw;\n    font-size: 1.5rem;\n    display: block;\n    width: 100%;\n\n}\ninput {\n    width: 30ch;\n}\n#password {\n    margin-top:0;\n}\np{\n    display: none;\n    margin:0 0 0 2rem;\n}\n\nbutton {\n    width: 30ch;\n    margin:0;\n}\nform {\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zvcm12YWxpZGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkb2NDb250ZW50KCkge1xuICAgIGNvbnN0IGltYWdlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VIb2xkZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VIb2xkZXInKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdzZWFyY2gnKTtcbiAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlSG9sZGVyJywnc2VhcmNoLi4uJylcbiAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2N1cnNvcjpwb2ludGVyOycpO1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMVwiKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgLTk2MCA5NjAgOTYwXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIxXCIpO1xuXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNNzg0LTEyMCA1MzItMzcycS0zMCAyNC02OSAzOHQtODMgMTRxLTEwOSAwLTE4NC41LTc1LjVUMTIwLTU4MHEwLTEwOSA3NS41LTE4NC41VDM4MC04NDBxMTA5IDAgMTg0LjUgNzUuNVQ2NDAtNTgwcTAgNDQtMTQgODN0LTM4IDY5bDI1MiAyNTItNTYgNTZaTTM4MC00MDBxNzUgMCAxMjcuNS01Mi41VDU2MC01ODBxMC03NS01Mi41LTEyNy41VDM4MC03NjBxLTc1IDAtMTI3LjUgNTIuNVQyMDAtNTgwcTAgNzUgNTIuNSAxMjcuNVQzODAtNDAwWlwiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1hZ2UnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjAuMnZ3O21hcmdpbi10b3A6MXJlbTsnKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZUhvbGRlcik7XG4gICAgcmV0dXJuIHtpbWcsc2VhcmNoSW5wdXQsc3ZnfTtcbiAgICB9XG5cbiAgICAiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBkb2NDb250ZW50IH0gZnJvbSAnLi9ob21lJztcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZScpO1xuICAgIGludHJvLmlubmVySFRNTCA9IFwiV2VsY29tZSBUbyBPdXIgRm9ybSBWYWxpZGF0aW9uIFByb2plY3RcIjtcbiAgICBpbnRyby5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiO1xuICAgIGludHJvLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKVxuICAgIGNvbnN0IGRlbW8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbW8yJylcblxuICAgIGNvbnN0IGVtYWlsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWxFcnJvcicpXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gZm9ybVZhbGlkKGVsZW1lbnQsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYoIWVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IGVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgICAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6cmVkOyBkaXNwbGF5OmJsb2NrOyBmb250LXNpemU6MC44cmVtOyBtYXJnaW46MCAwIDAgMjMlOycpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWFyZ2luOjJyZW0gYXV0bzsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJncmVhdCFcIjtcbiAgICAgICAgICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjpncmVlbjsgZGlzcGxheTpibG9jazsgZm9udC1zaXplOjAuOHJlbTsgbWFyZ2luOjAgMCAwIDIzJTsnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbjoycmVtIGF1dG87Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiBsZXQgc3ZnLCBpbWcsIHNlYXJjaElucDtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlbWFpbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGZvcm1WYWxpZChlbWFpbCxlbWFpbEVycm9yKVxuICAgICAgICB9KVxuICAgICAgICBwYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgZm9ybVZhbGlkKHBhc3N3b3JkLGRlbW8yKTtcbiAgICAgICAgfSlcblxuICAgIGlmIChwYXNzd29yZC5jaGVja1ZhbGlkaXR5KCkgICYmIGVtYWlsLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICBjb25zdCBhbGVydE5vdyA9IGFsZXJ0KCdMb2dpbiBTdWNjZXNzIScpXG4gICAgICAgICAgIGFsZXJ0Tm93O1xuICAgICAgICAgICAgY29uc3Qge2ltZzogZ2VuZXJhdGVkSW1nICxzZWFyY2hJbnB1dDogZ2VuZXJhdGVkSW5wdXQsc3ZnIDogZ2VuZXJhdGVkU3ZnfSA9IGRvY0NvbnRlbnQoKTtcbiAgICAgICAgICAgIHN2ZyA9IGdlbmVyYXRlZFN2ZztcbiAgICAgICAgICAgIGltZyA9IGdlbmVyYXRlZEltZztcbiAgICAgICAgICAgIHNlYXJjaElucCA9IGdlbmVyYXRlZElucHV0O1xuICAgICAgICAgICAgaW50cm8uaW5uZXJIVE1MID0gXCJTZWFyY2ggZm9yIHlvdXIgRmF2b3JpdGUgR2lmc1wiO1xuXG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIGNsaWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnSW5jb3JyZWN0IHBhc3N3b3JkIG9yIGVtYWlsJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSkgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgLy9mb3JtIFZhbGlkYXRlIEZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIGNsaWNrKCkge1xuXG4gICAgICBjb25zdCBzdmdDbGljayA9IHN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaW1nLmlubmVySFRNTCA9ICcgJztcbiAgICAgIFxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRHaWZzKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoP2FwaV9rZXk9TVZ5VGFVQklwY1puN3BvbjdGN1pEVWdaRE5TNlhIeFcmcT0ke3NlYXJjaElucC52YWx1ZX0mbGltaXQ9MjAmb2Zmc2V0PTAmcmF0aW5nPWcmbGFuZz1lbmAsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZ2V0RGF0YS5kYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGdpZkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICBnaWZJbWcuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDoxOXZ3O2hlaWdodDphdXRvO29iamVjdC1maXQ6Y292ZXI7JylcbiAgICAgICAgICAgICAgZ2lmSW1nLnNyYyA9IGRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICAgICAgICAgICAgaW1nLmFwcGVuZENoaWxkKGdpZkltZyk7XG4gICAgICAgICAgICAgIHJldHVybiBnaWZJbWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIgKyBcIiBcIiArIFwiOmhlcmUncyB0aGUgZXJyb3JcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0R2lmcygpXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIGlmICghc3ZnQ2xpY2spIHtcbiAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MC4zcmVtOycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowLjNyZW07dHJhbnNmb3JtOnNjYWxlKDEuMik7J1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gc3ZnQ2xpY2s7XG4gICAgfSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIG1hcmdpbi1pbmxpbmU6IDEwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbHtcbiAgICBtYXJnaW4taW5saW5lOiAxMHZ3O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG5pbnB1dCB7XG4gICAgd2lkdGg6IDMwY2g7XG59XG4jcGFzc3dvcmQge1xuICAgIG1hcmdpbi10b3A6MDtcbn1cbnB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW46MCAwIDAgMnJlbTtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMzBjaDtcbiAgICBtYXJnaW46MDtcbn1cbmZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0FBQ1o7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBtYXJnaW4taW5saW5lOiAxMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmxhYmVse1xcbiAgICBtYXJnaW4taW5saW5lOiAxMHZ3O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiAzMGNoO1xcbn1cXG4jcGFzc3dvcmQge1xcbiAgICBtYXJnaW4tdG9wOjA7XFxufVxcbnB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbjowIDAgMCAycmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMzBjaDtcXG4gICAgbWFyZ2luOjA7XFxufVxcbmZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJkb2NDb250ZW50IiwiaW1hZ2VIb2xkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsYWJlbCIsInNlYXJjaElucHV0Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsImltZyIsImFwcGVuZENoaWxkIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnRybyIsImlubmVySFRNTCIsInN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsImZvcm0iLCJidXR0b24iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGVtbzIiLCJlbWFpbEVycm9yIiwiZm9ybVZhbGlkIiwiZWxlbWVudCIsIm1lc3NhZ2UiLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJzZWFyY2hJbnAiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0Tm93IiwiYWxlcnQiLCJnZW5lcmF0ZWRJbWciLCJnZW5lcmF0ZWRJbnB1dCIsImdlbmVyYXRlZFN2ZyIsInJlbW92ZSIsImNsaWNrIiwic3ZnQ2xpY2siLCJnZXRHaWZzIiwicmVzcG9uc2UiLCJmZXRjaCIsInZhbHVlIiwibW9kZSIsImdldERhdGEiLCJqc29uIiwiZGF0YSIsImZvckVhY2giLCJnaWZJbWciLCJzcmMiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=