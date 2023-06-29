webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppMain.js":
/*!*******************************!*\
  !*** ./components/AppMain.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _data_siteData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/siteData */ "./data/siteData.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\GengBao\\Documents\\GitHub\\baconbao.github.io\\components\\AppMain.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/*
 * Functions and Vars
 *
 */

var aElementBlinkOpen = {
  target: '_blank',
  rel: 'noreferrer noopener'
};

var conditionOfGaTracker = function conditionOfGaTracker() {
  var matched =  true && window.location.hostname.indexOf('baconbao') >= 0;
  return matched;
};
/*
 * Event handlers
 *
 */


var handleGaEvent = function handleGaEvent(type, tag) {
  switch (type) {
    case 'link':
      {
        if (conditionOfGaTracker()) {
          react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].event({
            category: 'link',
            action: tag
          });
        }

        break;
      }

    default:
      break;
  }
};
/*
 * Blocks
 *
 */


var EduBlock = function EduBlock(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, data.formatter.itemText(item));
  })));
};

_c = EduBlock;

var ResIntBlock = function ResIntBlock(_ref2) {
  var data = _ref2.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, data.formatter.itemText(item));
  })));
};

_c2 = ResIntBlock;

var ExpBlock = function ExpBlock(_ref3) {
  var data = _ref3.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, data.formatter.itemText(item));
  })));
};

_c3 = ExpBlock;

var InventBlock = function InventBlock(_ref4) {
  var data = _ref4.data,
      symbol = _ref4.symbol;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("i", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, data.formatter.generateAbstract(item)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }), data.formatter.itemText(item), ' ', 'links' in item && item.links.length > 0 && __jsx("span", {
      className: "item-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }, 'links' in item && item.links.map(function (link, index) {
      return __jsx("span", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 33
        }
      }, __jsx("i", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 37
        }
      }, link.status && "".concat(link.status)), ' ', __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        href: link.url,
        onClick: function onClick() {
          return handleGaEvent('link', data.formatter.linkGa(link));
        }
      }, aElementBlinkOpen, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 37
        }
      }), data.formatter.linkText(link)), index < item.links.length - 1 && "".concat(symbol.and));
    })));
  })));
};

_c4 = InventBlock;

var AwardBlock = function AwardBlock(_ref5) {
  var data = _ref5.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, data.formatter.itemText(item));
  })));
};

_c5 = AwardBlock;

var PublicationBlock = function PublicationBlock(_ref6) {
  var data = _ref6.data,
      symbol = _ref6.symbol;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, data.formatter.itemText(item), ' ', 'links' in item && item.links.length > 0 && __jsx("span", {
      className: "item-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, 'links' in item && item.links.map(function (link, index) {
      return __jsx("span", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 33
        }
      }, __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        href: link.url,
        onClick: function onClick() {
          return handleGaEvent('link', data.formatter.linkGa(link));
        }
      }, aElementBlinkOpen, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 37
        }
      }), data.formatter.linkText(link)), index < item.links.length - 1 && "".concat(symbol.and));
    })));
  })));
};

_c6 = PublicationBlock;

var CertificationBlock = function CertificationBlock(_ref7) {
  var data = _ref7.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, data.formatter.itemMaintitle(item), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 21
      }
    }), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, data.formatter.itemSubtitle(item)));
  })));
};

_c7 = CertificationBlock;

var NonprofitBlock = function NonprofitBlock(_ref8) {
  var data = _ref8.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    var targetLink = item.links.length > 0 ? item.links[0] : {};
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, Object.keys(targetLink).length > 0 ? __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: targetLink.url,
      onClick: function onClick() {
        return handleGaEvent('link', data.formatter.linkGa(targetLink));
      }
    }, aElementBlinkOpen, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 29
      }
    }), data.formatter.itemTextName(item)) : __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 29
      }
    }, data.formatter.itemTextName(item)), ' - ', data.formatter.itemTextDescription(item), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 25
      }
    }, __jsx("i", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 32
      }
    }, data.formatter.serviceState(item))));
  })));
};

_c8 = NonprofitBlock;

var EsportBlock = function EsportBlock(_ref9) {
  var data = _ref9.data,
      symbol = _ref9.symbol;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, data.title), __jsx("div", {
    className: "normalBlock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, data.description), __jsx("div", {
    style: {
      paddingTop: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, data.promotion, 'links' in data && data.links.map(function (link, index) {
    return __jsx("span", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: link.url,
      onClick: function onClick() {
        return handleGaEvent('link', data.formatter.linkGa(link));
      }
    }, aElementBlinkOpen, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 21
      }
    }), data.formatter.linkText(link)), index < data.links.length - 1 && "".concat(symbol.and));
  })));
};

_c9 = EsportBlock;

var ContactBlock = function ContactBlock(_ref10) {
  var data = _ref10.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }
  }, data.title), __jsx("div", {
    id: "em",
    style: {
      whiteSpace: 'nowrap'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, __jsx("span", {
    onClick: function onClick() {
      return handleGaEvent('link', 'contact_email');
    },
    role: "presentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "em1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }), __jsx("span", {
    id: "em2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 39
    }
  }), __jsx("span", {
    id: "em3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 61
    }
  }))));
};

_c10 = ContactBlock;

var SocialBlock = function SocialBlock(_ref11) {
  var data = _ref11.data,
      symbol = _ref11.symbol;
  return __jsx("div", {
    id: "follow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 5
    }
  }, data.text, 'links' in data && data.links.map(function (link, index) {
    return __jsx("span", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }, __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: link.url,
      onClick: function onClick() {
        return handleGaEvent('link', data.formatter.linkGa(link));
      }
    }, aElementBlinkOpen, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }), data.formatter.linkText(link)), index < data.links.length - 1 && "".concat(symbol.and));
  }));
};
/*
 * Cards
 *
 */


_c11 = SocialBlock;

var LanguageCard = function LanguageCard(_ref12) {
  var lang = _ref12.lang;
  var basePath = _data_siteData__WEBPACK_IMPORTED_MODULE_5__["default"].basePath;
  var modifiedBasePath = basePath === '' ? '/' : "/".concat(basePath, "/");

  var focusClassName = function focusClassName(target) {
    var name = lang === target ? 'focus' : '';
    return name;
  };

  return __jsx("nav", {
    id: "languageCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "".concat(focusClassName('zh-tw'), " item"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  }, lang === 'zh-tw' ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, "\u4E2D\u6587") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(modifiedBasePath),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 29
    }
  }, "\u4E2D\u6587"))), __jsx("div", {
    className: "".concat(focusClassName('en-us'), " item bordered-left"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, lang === 'en-us' ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, "English") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(modifiedBasePath, "en-us"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 29
    }
  }, "English")))));
};

_c12 = LanguageCard;

var MainCard = function MainCard(_ref13) {
  var data = _ref13.data;
  return __jsx("div", {
    id: "mainCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, __jsx("h1", {
    id: "mainTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, data.hello, ' ', __jsx("span", {
    id: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 17
    }
  }, data.name, ' ', __jsx("small", {
    id: "akaName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 21
    }
  }, data.akaName))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  }), __jsx("div", {
    id: "mainIntro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 13
    }
  }, data.intro)));
};

_c13 = MainCard;

var ActivityCard = function ActivityCard(_ref14) {
  var Sub = _ref14.Sub;
  return __jsx("div", {
    id: "activityCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 9
    }
  }, __jsx(Sub, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  })));
};

_c14 = ActivityCard;

var FooterCard = function FooterCard(_ref15) {
  var Sub = _ref15.Sub;
  return __jsx("div", {
    id: "footerCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  }, __jsx(Sub, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  })));
};

_c15 = FooterCard;

var CopyrightCard = function CopyrightCard() {
  return __jsx("div", {
    id: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, "Copyright \xA9 BaconBao (Geng-Bao Lin)."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }, "Web design by BaconBao (Geng-Bao Lin)."));
};
/*
 * HTML Heads
 *
 */


_c16 = CopyrightCard;

var PageHead = function PageHead(_ref16) {
  var data = _ref16.data;
  var mainRemoteHost = _data_siteData__WEBPACK_IMPORTED_MODULE_5__["default"].mainRemoteHost;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }, data.pageTitle), __jsx("meta", {
    name: "description",
    content: data.pageDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 13
    }
  }), __jsx("meta", {
    content: "initial-scale=1, minimum-scale=1, width=device-width, user-scalable=0",
    name: "viewport",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }
  }), __jsx("meta", {
    language: data.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(mainRemoteHost, "/").concat(data.pageOgImage),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: mainRemoteHost,
    hrefLang: "x-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: "".concat(mainRemoteHost, "/en-us/"),
    hrefLang: "en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }));
};

_c17 = PageHead;

var AppMain = function AppMain(data) {
  /*
   * Launch GA tracking
   *
   */
  if (conditionOfGaTracker()) {
    react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].initialize('UA-11047041-24');
    react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].ga('send', 'pageview');
  }
  /*
   * Main
   *
   */


  var symbol = data.symbol;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, __jsx(PageHead, {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }), __jsx(LanguageCard, {
    lang: data.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }), __jsx(MainCard, {
    data: data.main,
    symbol: symbol,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 13
    }
  }), __jsx(ActivityCard, {
    Sub: function Sub() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(ResIntBlock, {
        data: data.researchInterest,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 25
        }
      }), __jsx(EduBlock, {
        data: data.edu,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 25
        }
      }), __jsx(ExpBlock, {
        data: data.exp,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 25
        }
      }), __jsx(PublicationBlock, {
        data: data.publication,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 25
        }
      }), __jsx(InventBlock, {
        data: data.invent,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 25
        }
      }), __jsx(AwardBlock, {
        data: data.award,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 25
        }
      }), __jsx(NonprofitBlock, {
        data: data.nonprofit,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 25
        }
      }), __jsx(EsportBlock, {
        data: data.esport,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }), __jsx(FooterCard, {
    Sub: function Sub() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(ContactBlock, {
        data: data.contact,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 25
        }
      }), __jsx(SocialBlock, {
        data: data.social,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 25
        }
      }), __jsx(CopyrightCard, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 13
    }
  }));
};

_c18 = AppMain;
/* harmony default export */ __webpack_exports__["default"] = (AppMain);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;

$RefreshReg$(_c, "EduBlock");
$RefreshReg$(_c2, "ResIntBlock");
$RefreshReg$(_c3, "ExpBlock");
$RefreshReg$(_c4, "InventBlock");
$RefreshReg$(_c5, "AwardBlock");
$RefreshReg$(_c6, "PublicationBlock");
$RefreshReg$(_c7, "CertificationBlock");
$RefreshReg$(_c8, "NonprofitBlock");
$RefreshReg$(_c9, "EsportBlock");
$RefreshReg$(_c10, "ContactBlock");
$RefreshReg$(_c11, "SocialBlock");
$RefreshReg$(_c12, "LanguageCard");
$RefreshReg$(_c13, "MainCard");
$RefreshReg$(_c14, "ActivityCard");
$RefreshReg$(_c15, "FooterCard");
$RefreshReg$(_c16, "CopyrightCard");
$RefreshReg$(_c17, "PageHead");
$RefreshReg$(_c18, "AppMain");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBNYWluLmpzIl0sIm5hbWVzIjpbImFFbGVtZW50QmxpbmtPcGVuIiwidGFyZ2V0IiwicmVsIiwiY29uZGl0aW9uT2ZHYVRyYWNrZXIiLCJtYXRjaGVkIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImluZGV4T2YiLCJoYW5kbGVHYUV2ZW50IiwidHlwZSIsInRhZyIsIlJlYWN0R0EiLCJldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwiRWR1QmxvY2siLCJkYXRhIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiZm9ybWF0dGVyIiwiaXRlbVRleHQiLCJSZXNJbnRCbG9jayIsIkV4cEJsb2NrIiwiSW52ZW50QmxvY2siLCJzeW1ib2wiLCJnZW5lcmF0ZUFic3RyYWN0IiwibGlua3MiLCJsZW5ndGgiLCJsaW5rIiwiaW5kZXgiLCJzdGF0dXMiLCJ1cmwiLCJsaW5rR2EiLCJsaW5rVGV4dCIsImFuZCIsIkF3YXJkQmxvY2siLCJQdWJsaWNhdGlvbkJsb2NrIiwiQ2VydGlmaWNhdGlvbkJsb2NrIiwiaXRlbU1haW50aXRsZSIsIml0ZW1TdWJ0aXRsZSIsIk5vbnByb2ZpdEJsb2NrIiwidGFyZ2V0TGluayIsIk9iamVjdCIsImtleXMiLCJpdGVtVGV4dE5hbWUiLCJpdGVtVGV4dERlc2NyaXB0aW9uIiwic2VydmljZVN0YXRlIiwiRXNwb3J0QmxvY2siLCJkZXNjcmlwdGlvbiIsInBhZGRpbmdUb3AiLCJwcm9tb3Rpb24iLCJDb250YWN0QmxvY2siLCJ3aGl0ZVNwYWNlIiwiU29jaWFsQmxvY2siLCJ0ZXh0IiwiTGFuZ3VhZ2VDYXJkIiwibGFuZyIsImJhc2VQYXRoIiwic2l0ZURhdGEiLCJtb2RpZmllZEJhc2VQYXRoIiwiZm9jdXNDbGFzc05hbWUiLCJuYW1lIiwiTWFpbkNhcmQiLCJoZWxsbyIsImFrYU5hbWUiLCJpbnRybyIsIkFjdGl2aXR5Q2FyZCIsIlN1YiIsIkZvb3RlckNhcmQiLCJDb3B5cmlnaHRDYXJkIiwiUGFnZUhlYWQiLCJtYWluUmVtb3RlSG9zdCIsInBhZ2VUaXRsZSIsInBhZ2VEZXNjcmlwdGlvbiIsInBhZ2VPZ0ltYWdlIiwiQXBwTWFpbiIsImluaXRpYWxpemUiLCJnYSIsIm1haW4iLCJyZXNlYXJjaEludGVyZXN0IiwiZWR1IiwiZXhwIiwicHVibGljYXRpb24iLCJpbnZlbnQiLCJhd2FyZCIsIm5vbnByb2ZpdCIsImVzcG9ydCIsImNvbnRhY3QiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3RCQyxRQUFNLEVBQUUsUUFEYztBQUV0QkMsS0FBRyxFQUFFO0FBRmlCLENBQTFCOztBQUlBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUMvQixNQUFNQyxPQUFPLEdBQUksU0FBaUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE9BQXpCLENBQWlDLFVBQWpDLEtBQWdELENBQWxHO0FBQ0EsU0FBT0osT0FBUDtBQUNILENBSEQ7QUFLQTs7Ozs7O0FBSUEsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqQyxVQUFRRCxJQUFSO0FBQ0EsU0FBSyxNQUFMO0FBQWE7QUFDVCxZQUFJUCxvQkFBb0IsRUFBeEIsRUFBNEI7QUFDeEJTLDBEQUFPLENBQUNDLEtBQVIsQ0FBYztBQUNWQyxvQkFBUSxFQUFFLE1BREE7QUFFVkMsa0JBQU0sRUFBRUo7QUFGRSxXQUFkO0FBSUg7O0FBQ0Q7QUFDSDs7QUFDRDtBQUFTO0FBVlQ7QUFZSCxDQWJEO0FBZUE7Ozs7OztBQUlBLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKSixFQUtJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEosQ0FEQztBQUFBLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCSixDQURKO0FBZ0NILENBOUNEOztPQUFNbUQsTztBQWdEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjc2ZGM4OTc5ODVlOTE0YWU4MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcclxuaW1wb3J0IHNpdGVEYXRhIGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xyXG5cclxuLypcclxuICogRnVuY3Rpb25zIGFuZCBWYXJzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBhRWxlbWVudEJsaW5rT3BlbiA9IHtcclxuICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICByZWw6ICdub3JlZmVycmVyIG5vb3BlbmVyJyxcclxufTtcclxuY29uc3QgY29uZGl0aW9uT2ZHYVRyYWNrZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGVkID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCdiYWNvbmJhbycpID49IDApO1xyXG4gICAgcmV0dXJuIG1hdGNoZWQ7XHJcbn07XHJcblxyXG4vKlxyXG4gKiBFdmVudCBoYW5kbGVyc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgaGFuZGxlR2FFdmVudCA9ICh0eXBlLCB0YWcpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnbGluayc6IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uT2ZHYVRyYWNrZXIoKSkge1xyXG4gICAgICAgICAgICBSZWFjdEdBLmV2ZW50KHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRhZyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBCbG9ja3NcclxuICpcclxuICovXHJcbmNvbnN0IEVkdUJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IFJlc0ludEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEV4cEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEludmVudEJsb2NrID0gKHsgZGF0YSwgc3ltYm9sIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpPntkYXRhLmZvcm1hdHRlci5nZW5lcmF0ZUFic3RyYWN0KGl0ZW0pfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSAmJiBpdGVtLmxpbmtzLmxlbmd0aCA+IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSkgJiYgaXRlbS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPnsobGluay5zdGF0dXMpICYmIGAke2xpbmsuc3RhdHVzfWB9PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoaXRlbS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKGAke3N5bWJvbC5hbmR9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBBd2FyZEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IFB1YmxpY2F0aW9uQmxvY2sgPSAoeyBkYXRhLCBzeW1ib2wgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgeygnbGlua3MnIGluIGl0ZW0gJiYgaXRlbS5saW5rcy5sZW5ndGggPiAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeygnbGlua3MnIGluIGl0ZW0pICYmIGl0ZW0ubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoaXRlbS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKGAke3N5bWJvbC5hbmR9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBDZXJ0aWZpY2F0aW9uQmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtTWFpbnRpdGxlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1TdWJ0aXRsZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBOb25wcm9maXRCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0TGluayA9IChpdGVtLmxpbmtzLmxlbmd0aCA+IDApID8gaXRlbS5saW5rc1swXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhPYmplY3Qua2V5cyh0YXJnZXRMaW5rKS5sZW5ndGggPiAwKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dGFyZ2V0TGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYSh0YXJnZXRMaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dE5hbWUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHROYW1lKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAtICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dERlc2NyaXB0aW9uKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+PGk+e2RhdGEuZm9ybWF0dGVyLnNlcnZpY2VTdGF0ZShpdGVtKX08L2k+PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBFc3BvcnRCbG9jayA9ICh7IGRhdGEsIHN5bWJvbCB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9ybWFsQmxvY2tcIj5cclxuICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiA1IH19PlxyXG4gICAgICAgICAgICB7ZGF0YS5wcm9tb3Rpb259XHJcbiAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBkYXRhKSAmJiBkYXRhLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICB7KGluZGV4IDwgKGRhdGEubGlua3MubGVuZ3RoIC0gMSkpICYmIChgJHtzeW1ib2wuYW5kfWApfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBDb250YWN0QmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPGRpdiBpZD1cImVtXCIgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgJ2NvbnRhY3RfZW1haWwnKX1cclxuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUgKi99XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtMVwiPjwvc3Bhbj48c3BhbiBpZD1cImVtMlwiPjwvc3Bhbj48c3BhbiBpZD1cImVtM1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZW5hYmxlICovfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgU29jaWFsQmxvY2sgPSAoeyBkYXRhLCBzeW1ib2wgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImZvbGxvd1wiPlxyXG4gICAgICAgIHtkYXRhLnRleHR9XHJcbiAgICAgICAgeygnbGlua3MnIGluIGRhdGEpICYmIGRhdGEubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYShsaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5saW5rVGV4dChsaW5rKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoZGF0YS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKGAke3N5bWJvbC5hbmR9YCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuLypcclxuICogQ2FyZHNcclxuICpcclxuICovXHJcbmNvbnN0IExhbmd1YWdlQ2FyZCA9ICh7IGxhbmcgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBiYXNlUGF0aCB9ID0gc2l0ZURhdGE7XHJcbiAgICBjb25zdCBtb2RpZmllZEJhc2VQYXRoID0gKGJhc2VQYXRoID09PSAnJykgPyAnLycgOiBgLyR7YmFzZVBhdGh9L2A7XHJcbiAgICBjb25zdCBmb2N1c0NsYXNzTmFtZSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gKGxhbmcgPT09IHRhcmdldCkgPyAnZm9jdXMnIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGlkPVwibGFuZ3VhZ2VDYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmb2N1c0NsYXNzTmFtZSgnemgtdHcnKX0gaXRlbWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhsYW5nID09PSAnemgtdHcnKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Lit5paHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake21vZGlmaWVkQmFzZVBhdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuK3mlodcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ZvY3VzQ2xhc3NOYW1lKCdlbi11cycpfSBpdGVtIGJvcmRlcmVkLWxlZnRgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGFuZyA9PT0gJ2VuLXVzJykgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVuZ2xpc2g8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bW9kaWZpZWRCYXNlUGF0aH1lbi11c2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcbmNvbnN0IE1haW5DYXJkID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbkNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cIm1haW5UaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuaGVsbG99XHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBpZD1cImFrYU5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYWthTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5JbnRyb1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuaW50cm99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEFjdGl2aXR5Q2FyZCA9ICh7IFN1YiB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiYWN0aXZpdHlDYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8U3ViIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgRm9vdGVyQ2FyZCA9ICh7IFN1YiB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiZm9vdGVyQ2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPFN1YiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IENvcHlyaWdodENhcmQgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiY29weXJpZ2h0XCI+XHJcbiAgICAgICAgPHNwYW4+Q29weXJpZ2h0IMKpIEJhY29uQmFvIChHZW5nLUJhbyBMaW4pLjwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5XZWIgZGVzaWduIGJ5IEJhY29uQmFvIChHZW5nLUJhbyBMaW4pLjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuLypcclxuICogSFRNTCBIZWFkc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgUGFnZUhlYWQgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWFpblJlbW90ZUhvc3QgfSA9IHNpdGVEYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAge2RhdGEucGFnZVRpdGxlfVxyXG4gICAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLnBhZ2VEZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9MFwiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGxhbmd1YWdlPXtkYXRhLmxhbmd9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHttYWluUmVtb3RlSG9zdH0vJHtkYXRhLnBhZ2VPZ0ltYWdlfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWY9e21haW5SZW1vdGVIb3N0fSBocmVmTGFuZz1cIngtZGVmYXVsdFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWY9e2Ake21haW5SZW1vdGVIb3N0fS9lbi11cy9gfSBocmVmTGFuZz1cImVuXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwTWFpbiA9IChkYXRhKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICogTGF1bmNoIEdBIHRyYWNraW5nXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpZiAoY29uZGl0aW9uT2ZHYVRyYWNrZXIoKSkge1xyXG4gICAgICAgIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEtMTEwNDcwNDEtMjQnKTtcclxuICAgICAgICBSZWFjdEdBLmdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgICogTWFpblxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3QgeyBzeW1ib2wgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICA8TGFuZ3VhZ2VDYXJkIGxhbmc9e2RhdGEubGFuZ30gLz5cclxuICAgICAgICAgICAgPE1haW5DYXJkIGRhdGE9e2RhdGEubWFpbn0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgIDxBY3Rpdml0eUNhcmRcclxuICAgICAgICAgICAgICAgIFN1Yj17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNJbnRCbG9jayBkYXRhPXtkYXRhLnJlc2VhcmNoSW50ZXJlc3R9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWR1QmxvY2sgZGF0YT17ZGF0YS5lZHV9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwQmxvY2sgZGF0YT17ZGF0YS5leHB9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHVibGljYXRpb25CbG9jayBkYXRhPXtkYXRhLnB1YmxpY2F0aW9ufSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudEJsb2NrIGRhdGE9e2RhdGEuaW52ZW50fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF3YXJkQmxvY2sgZGF0YT17ZGF0YS5hd2FyZH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb25wcm9maXRCbG9jayBkYXRhPXtkYXRhLm5vbnByb2ZpdH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFc3BvcnRCbG9jayBkYXRhPXtkYXRhLmVzcG9ydH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyQ2FyZFxyXG4gICAgICAgICAgICAgICAgU3ViPXsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RCbG9jayBkYXRhPXtkYXRhLmNvbnRhY3R9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEJsb2NrIGRhdGE9e2RhdGEuc29jaWFsfSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5cmlnaHRDYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=