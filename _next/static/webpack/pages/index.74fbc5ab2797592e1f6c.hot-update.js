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
  var data = _ref11.data;
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
    }), data.formatter.linkText(link)), index < data.links.length - 1 && ' , ');
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
      }), __jsx(CertificationBlock, {
        data: data.certification,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 25
        }
      }), __jsx(NonprofitBlock, {
        data: data.nonprofit,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 25
        }
      }), __jsx(EsportBlock, {
        data: data.esport,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
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
          lineNumber: 399,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 25
        }
      }), __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 25
        }
      }, __jsx(SocialBlock, {
        data: data.social,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 29
        }
      }), __jsx(LanguageCard, {
        lang: data.lang,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 29
        }
      })), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 25
        }
      }), __jsx(CopyrightCard, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBNYWluLmpzIl0sIm5hbWVzIjpbImFFbGVtZW50QmxpbmtPcGVuIiwidGFyZ2V0IiwicmVsIiwiY29uZGl0aW9uT2ZHYVRyYWNrZXIiLCJtYXRjaGVkIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImluZGV4T2YiLCJoYW5kbGVHYUV2ZW50IiwidHlwZSIsInRhZyIsIlJlYWN0R0EiLCJldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwiRWR1QmxvY2siLCJkYXRhIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiZm9ybWF0dGVyIiwiaXRlbVRleHQiLCJSZXNJbnRCbG9jayIsIkV4cEJsb2NrIiwiSW52ZW50QmxvY2siLCJzeW1ib2wiLCJnZW5lcmF0ZUFic3RyYWN0IiwibGlua3MiLCJsZW5ndGgiLCJsaW5rIiwiaW5kZXgiLCJzdGF0dXMiLCJ1cmwiLCJsaW5rR2EiLCJsaW5rVGV4dCIsImFuZCIsIkF3YXJkQmxvY2siLCJQdWJsaWNhdGlvbkJsb2NrIiwiQ2VydGlmaWNhdGlvbkJsb2NrIiwiaXRlbU1haW50aXRsZSIsIml0ZW1TdWJ0aXRsZSIsIk5vbnByb2ZpdEJsb2NrIiwidGFyZ2V0TGluayIsIk9iamVjdCIsImtleXMiLCJpdGVtVGV4dE5hbWUiLCJpdGVtVGV4dERlc2NyaXB0aW9uIiwic2VydmljZVN0YXRlIiwiRXNwb3J0QmxvY2siLCJkZXNjcmlwdGlvbiIsInBhZGRpbmdUb3AiLCJwcm9tb3Rpb24iLCJDb250YWN0QmxvY2siLCJ3aGl0ZVNwYWNlIiwiU29jaWFsQmxvY2siLCJ0ZXh0IiwiTGFuZ3VhZ2VDYXJkIiwibGFuZyIsImJhc2VQYXRoIiwic2l0ZURhdGEiLCJtb2RpZmllZEJhc2VQYXRoIiwiZm9jdXNDbGFzc05hbWUiLCJuYW1lIiwiTWFpbkNhcmQiLCJoZWxsbyIsImFrYU5hbWUiLCJpbnRybyIsIkFjdGl2aXR5Q2FyZCIsIlN1YiIsIkZvb3RlckNhcmQiLCJDb3B5cmlnaHRDYXJkIiwiUGFnZUhlYWQiLCJtYWluUmVtb3RlSG9zdCIsInBhZ2VUaXRsZSIsInBhZ2VEZXNjcmlwdGlvbiIsInBhZ2VPZ0ltYWdlIiwiQXBwTWFpbiIsImluaXRpYWxpemUiLCJnYSIsIm1haW4iLCJyZXNlYXJjaEludGVyZXN0IiwiZWR1IiwiZXhwIiwicHVibGljYXRpb24iLCJpbnZlbnQiLCJhd2FyZCIsImNlcnRpZmljYXRpb24iLCJub25wcm9maXQiLCJlc3BvcnQiLCJjb250YWN0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3RCQyxRQUFNLEVBQUUsUUFEYztBQUV0QkMsS0FBRyxFQUFFO0FBRmlCLENBQTFCOztBQUlBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUMvQixNQUFNQyxPQUFPLEdBQUksU0FBaUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE9BQXpCLENBQWlDLFVBQWpDLEtBQWdELENBQWxHO0FBQ0EsU0FBT0osT0FBUDtBQUNILENBSEQ7QUFLQTs7Ozs7O0FBSUEsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqQyxVQUFRRCxJQUFSO0FBQ0EsU0FBSyxNQUFMO0FBQWE7QUFDVCxZQUFJUCxvQkFBb0IsRUFBeEIsRUFBNEI7QUFDeEJTLDBEQUFPLENBQUNDLEtBQVIsQ0FBYztBQUNWQyxvQkFBUSxFQUFFLE1BREE7QUFFVkMsa0JBQU0sRUFBRUo7QUFGRSxXQUFkO0FBSUg7O0FBQ0Q7QUFDSDs7QUFDRDtBQUFTO0FBVlQ7QUFZSCxDQWJEO0FBZUE7Ozs7OztBQUlBLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FB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QUE7QUFBQTtBQUFBLFFBRkosRUFHSTtBQUFLLGFBQUssRUFBRTtBQUFFaUUsaUJBQU8sRUFBRSxNQUFYO0FBQW1CQyx3QkFBYyxFQUFFLGVBQW5DO0FBQW9EQyxrQkFBUSxFQUFFO0FBQTlELFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsV0FBRDtBQUFhLFlBQUksRUFBRTlFLElBQUksQ0FBQytFLE1BQXhCO0FBQWdDLGNBQU0sRUFBRXBFLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJLE1BQUMsWUFBRDtBQUFjLFlBQUksRUFBRVgsSUFBSSxDQUFDMkMsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBSEosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEosRUFRSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLENBREM7QUFBQSxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosQ0FESjtBQW9DSCxDQWxERDs7T0FBTW1CLE87QUFvRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0ZmJjNWFiMjc5NzU5MmUxZjZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XHJcbmltcG9ydCBzaXRlRGF0YSBmcm9tICcuLi9kYXRhL3NpdGVEYXRhJztcclxuXHJcbi8qXHJcbiAqIEZ1bmN0aW9ucyBhbmQgVmFyc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgYUVsZW1lbnRCbGlua09wZW4gPSB7XHJcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgcmVsOiAnbm9yZWZlcnJlciBub29wZW5lcicsXHJcbn07XHJcbmNvbnN0IGNvbmRpdGlvbk9mR2FUcmFja2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlZCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignYmFjb25iYW8nKSA+PSAwKTtcclxuICAgIHJldHVybiBtYXRjaGVkO1xyXG59O1xyXG5cclxuLypcclxuICogRXZlbnQgaGFuZGxlcnNcclxuICpcclxuICovXHJcbmNvbnN0IGhhbmRsZUdhRXZlbnQgPSAodHlwZSwgdGFnKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2xpbmsnOiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbk9mR2FUcmFja2VyKCkpIHtcclxuICAgICAgICAgICAgUmVhY3RHQS5ldmVudCh7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0YWcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogQmxvY2tzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBFZHVCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBSZXNJbnRCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBFeHBCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBJbnZlbnRCbG9jayA9ICh7IGRhdGEsIHN5bWJvbCB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aT57ZGF0YS5mb3JtYXR0ZXIuZ2VuZXJhdGVBYnN0cmFjdChpdGVtKX08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgeygnbGlua3MnIGluIGl0ZW0gJiYgaXRlbS5saW5rcy5sZW5ndGggPiAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeygnbGlua3MnIGluIGl0ZW0pICYmIGl0ZW0ubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT57KGxpbmsuc3RhdHVzKSAmJiBgJHtsaW5rLnN0YXR1c31gfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYShsaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uYUVsZW1lbnRCbGlua09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5saW5rVGV4dChsaW5rKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGluZGV4IDwgKGl0ZW0ubGlua3MubGVuZ3RoIC0gMSkpICYmIChgJHtzeW1ib2wuYW5kfWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgQXdhcmRCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBQdWJsaWNhdGlvbkJsb2NrID0gKHsgZGF0YSwgc3ltYm9sIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBpdGVtICYmIGl0ZW0ubGlua3MubGVuZ3RoID4gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBpdGVtKSAmJiBpdGVtLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYShsaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uYUVsZW1lbnRCbGlua09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5saW5rVGV4dChsaW5rKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGluZGV4IDwgKGl0ZW0ubGlua3MubGVuZ3RoIC0gMSkpICYmIChgJHtzeW1ib2wuYW5kfWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgQ2VydGlmaWNhdGlvbkJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbU1haW50aXRsZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtU3VidGl0bGUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgTm9ucHJvZml0QmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldExpbmsgPSAoaXRlbS5saW5rcy5sZW5ndGggPiAwKSA/IGl0ZW0ubGlua3NbMF0gOiB7fTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoT2JqZWN0LmtleXModGFyZ2V0TGluaykubGVuZ3RoID4gMCkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3RhcmdldExpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdhRXZlbnQoJ2xpbmsnLCBkYXRhLmZvcm1hdHRlci5saW5rR2EodGFyZ2V0TGluaykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHROYW1lKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0TmFtZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgLSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHREZXNjcmlwdGlvbihpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjxpPntkYXRhLmZvcm1hdHRlci5zZXJ2aWNlU3RhdGUoaXRlbSl9PC9pPjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgRXNwb3J0QmxvY2sgPSAoeyBkYXRhLCBzeW1ib2wgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vcm1hbEJsb2NrXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogNSB9fT5cclxuICAgICAgICAgICAge2RhdGEucHJvbW90aW9ufVxyXG4gICAgICAgICAgICB7KCdsaW5rcycgaW4gZGF0YSkgJiYgZGF0YS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYShsaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5saW5rVGV4dChsaW5rKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhpbmRleCA8IChkYXRhLmxpbmtzLmxlbmd0aCAtIDEpKSAmJiAoYCR7c3ltYm9sLmFuZH1gKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgQ29udGFjdEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJlbVwiIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsICdjb250YWN0X2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlICovfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbTFcIj48L3NwYW4+PHNwYW4gaWQ9XCJlbTJcIj48L3NwYW4+PHNwYW4gaWQ9XCJlbTNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7LyogZXNsaW50LWVuYWJsZSAqL31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IFNvY2lhbEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiZm9sbG93XCI+XHJcbiAgICAgICAge2RhdGEudGV4dH1cclxuICAgICAgICB7KCdsaW5rcycgaW4gZGF0YSkgJiYgZGF0YS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnVybH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4uYUVsZW1lbnRCbGlua09wZW59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgeyhpbmRleCA8IChkYXRhLmxpbmtzLmxlbmd0aCAtIDEpKSAmJiAoJyAsICcpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbi8qXHJcbiAqIENhcmRzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBMYW5ndWFnZUNhcmQgPSAoeyBsYW5nIH0pID0+IHtcclxuICAgIGNvbnN0IHsgYmFzZVBhdGggfSA9IHNpdGVEYXRhO1xyXG4gICAgY29uc3QgbW9kaWZpZWRCYXNlUGF0aCA9IChiYXNlUGF0aCA9PT0gJycpID8gJy8nIDogYC8ke2Jhc2VQYXRofS9gO1xyXG4gICAgY29uc3QgZm9jdXNDbGFzc05hbWUgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IChsYW5nID09PSB0YXJnZXQpID8gJ2ZvY3VzJyA6ICcnO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBpZD1cImxhbmd1YWdlQ2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Zm9jdXNDbGFzc05hbWUoJ3poLXR3Jyl9IGl0ZW1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGFuZyA9PT0gJ3poLXR3JykgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuS4reaWhzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHttb2RpZmllZEJhc2VQYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lit5paHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmb2N1c0NsYXNzTmFtZSgnZW4tdXMnKX0gaXRlbSBib3JkZXJlZC1sZWZ0YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7KGxhbmcgPT09ICdlbi11cycpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbmdsaXNoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake21vZGlmaWVkQmFzZVBhdGh9ZW4tdXNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2xpc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59O1xyXG5jb25zdCBNYWluQ2FyZCA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW5DYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJtYWluVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmhlbGxvfVxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgaWQ9XCJha2FOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmFrYU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluSW50cm9cIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmludHJvfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBBY3Rpdml0eUNhcmQgPSAoeyBTdWIgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImFjdGl2aXR5Q2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPFN1YiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEZvb3RlckNhcmQgPSAoeyBTdWIgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImZvb3RlckNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgIDxTdWIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBDb3B5cmlnaHRDYXJkID0gKCkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSBCYWNvbkJhbyAoR2VuZy1CYW8gTGluKS48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+V2ViIGRlc2lnbiBieSBCYWNvbkJhbyAoR2VuZy1CYW8gTGluKS48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbi8qXHJcbiAqIEhUTUwgSGVhZHNcclxuICpcclxuICovXHJcbmNvbnN0IFBhZ2VIZWFkID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1haW5SZW1vdGVIb3N0IH0gPSBzaXRlRGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnBhZ2VUaXRsZX1cclxuICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5wYWdlRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCB1c2VyLXNjYWxhYmxlPTBcIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBsYW5ndWFnZT17ZGF0YS5sYW5nfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7bWFpblJlbW90ZUhvc3R9LyR7ZGF0YS5wYWdlT2dJbWFnZX1gfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmPXttYWluUmVtb3RlSG9zdH0gaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmPXtgJHttYWluUmVtb3RlSG9zdH0vZW4tdXMvYH0gaHJlZkxhbmc9XCJlblwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFwcE1haW4gPSAoZGF0YSkgPT4ge1xyXG4gICAgLypcclxuICAgICAqIExhdW5jaCBHQSB0cmFja2luZ1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaWYgKGNvbmRpdGlvbk9mR2FUcmFja2VyKCkpIHtcclxuICAgICAgICBSZWFjdEdBLmluaXRpYWxpemUoJ1VBLTExMDQ3MDQxLTI0Jyk7XHJcbiAgICAgICAgUmVhY3RHQS5nYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAqIE1haW5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHsgc3ltYm9sIH0gPSBkYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UGFnZUhlYWQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgICAgPExhbmd1YWdlQ2FyZCBsYW5nPXtkYXRhLmxhbmd9IC8+XHJcbiAgICAgICAgICAgIDxNYWluQ2FyZCBkYXRhPXtkYXRhLm1haW59IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICA8QWN0aXZpdHlDYXJkXHJcbiAgICAgICAgICAgICAgICBTdWI9eygpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzSW50QmxvY2sgZGF0YT17ZGF0YS5yZXNlYXJjaEludGVyZXN0fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkdUJsb2NrIGRhdGE9e2RhdGEuZWR1fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4cEJsb2NrIGRhdGE9e2RhdGEuZXhwfSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1YmxpY2F0aW9uQmxvY2sgZGF0YT17ZGF0YS5wdWJsaWNhdGlvbn0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRCbG9jayBkYXRhPXtkYXRhLmludmVudH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBd2FyZEJsb2NrIGRhdGE9e2RhdGEuYXdhcmR9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2VydGlmaWNhdGlvbkJsb2NrIGRhdGE9e2RhdGEuY2VydGlmaWNhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vbnByb2ZpdEJsb2NrIGRhdGE9e2RhdGEubm9ucHJvZml0fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVzcG9ydEJsb2NrIGRhdGE9e2RhdGEuZXNwb3J0fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXJDYXJkXHJcbiAgICAgICAgICAgICAgICBTdWI9eygpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEJsb2NrIGRhdGE9e2RhdGEuY29udGFjdH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZmxleFdyYXA6ICd3cmFwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWxCbG9jayBkYXRhPXtkYXRhLnNvY2lhbH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VDYXJkIGxhbmc9e2RhdGEubGFuZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29weXJpZ2h0Q2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9