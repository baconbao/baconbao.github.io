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
  })), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, data.formatter.moreDescribe(data.describe)));
};

_c2 = ResIntBlock;

var ExpBlock = function ExpBlock(_ref3) {
  var data = _ref3.data;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
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
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx("i", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, data.formatter.generateAbstract(item)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }), data.formatter.itemText(item), ' ', 'links' in item && item.links.length > 0 && __jsx("span", {
      className: "item-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, 'links' in item && item.links.map(function (link, index) {
      return __jsx("span", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 33
        }
      }, __jsx("i", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
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
          lineNumber: 98,
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
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, data.formatter.itemText(item), ' | ', data.formatter.getItemLabels(item).map(function (label) {
      return __jsx("span", {
        className: "item-label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }
      }, label);
    }), data.formatter.withMembers(item) !== '' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }, data.formatter.withMembers(item))));
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
      lineNumber: 140,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, data.formatter.itemText(item), ' ', __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, data.formatter.itemNote(item)), ' ', 'links' in item && item.links.length > 0 && __jsx("span", {
      className: "item-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 25
      }
    }, 'links' in item && item.links.map(function (link, index) {
      return __jsx("span", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
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
          lineNumber: 153,
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
      lineNumber: 171,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }, data.formatter.itemMaintitle(item), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    }), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
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
      lineNumber: 187,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    var targetLink = item.links.length > 0 ? item.links[0] : {};
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
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
        lineNumber: 195,
        columnNumber: 29
      }
    }), data.formatter.itemTextName(item)) : __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 29
      }
    }, data.formatter.itemTextName(item)), ' - ', data.formatter.itemTextDescription(item), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }, __jsx("i", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
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
      lineNumber: 217,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, data.title), __jsx("div", {
    className: "normalBlock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, data.description), __jsx("div", {
    style: {
      paddingTop: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, data.promotion, 'links' in data && data.links.map(function (link, index) {
    return __jsx("span", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
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
        lineNumber: 226,
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
      lineNumber: 240,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
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
      lineNumber: 242,
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
      lineNumber: 243,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "em1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }), __jsx("span", {
    id: "em2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 39
    }
  }), __jsx("span", {
    id: "em3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
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
      lineNumber: 255,
      columnNumber: 5
    }
  }, data.text, 'links' in data && data.links.map(function (link, index) {
    return __jsx("span", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
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
        lineNumber: 259,
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
      lineNumber: 284,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "".concat(focusClassName('zh-tw'), " item"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  }, lang === 'zh-tw' ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, "\u4E2D\u6587") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(modifiedBasePath),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 29
    }
  }, "\u4E2D\u6587"))), __jsx("div", {
    className: "".concat(focusClassName('en-us'), " item bordered-left"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  }, lang === 'en-us' ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 25
    }
  }, "English") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(modifiedBasePath, "en-us"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
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
      lineNumber: 317,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 9
    }
  }, __jsx("h1", {
    id: "mainTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }, data.hello, ' ', __jsx("span", {
    id: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, data.name, ' ', __jsx("small", {
    id: "akaName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  }, data.akaName))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }), __jsx("div", {
    id: "mainIntro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, data.intro), data.introEmoji));
};

_c13 = MainCard;

var ActivityCard = function ActivityCard(_ref14) {
  var Sub = _ref14.Sub;
  return __jsx("div", {
    id: "activityCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 9
    }
  }, __jsx(Sub, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
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
      lineNumber: 346,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 9
    }
  }, __jsx(Sub, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
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
      lineNumber: 353,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 9
    }
  }, "Copyright \xA9 BaconBao (Geng-Bao Lin)."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
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
      lineNumber: 366,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 13
    }
  }, data.pageTitle), __jsx("meta", {
    name: "description",
    content: data.pageDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }), __jsx("meta", {
    content: "initial-scale=1, minimum-scale=1, width=device-width, user-scalable=0",
    name: "viewport",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 13
    }
  }), __jsx("meta", {
    language: data.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(mainRemoteHost, "/").concat(data.pageOgImage),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: mainRemoteHost,
    hrefLang: "x-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: "".concat(mainRemoteHost, "/en-us/"),
    hrefLang: "en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
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
      lineNumber: 395,
      columnNumber: 9
    }
  }, __jsx(PageHead, {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 13
    }
  }), __jsx(LanguageCard, {
    lang: data.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }
  }), __jsx(MainCard, {
    data: data.main,
    symbol: symbol,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
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
          lineNumber: 402,
          columnNumber: 25
        }
      }), __jsx(EduBlock, {
        data: data.edu,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 25
        }
      }), __jsx(ExpBlock, {
        data: data.exp,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 25
        }
      }), __jsx(PublicationBlock, {
        data: data.publication,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 25
        }
      }), __jsx(InventBlock, {
        data: data.invent,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 25
        }
      }), __jsx(AwardBlock, {
        data: data.award,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 25
        }
      }), __jsx(CertificationBlock, {
        data: data.certification,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 25
        }
      }), __jsx(NonprofitBlock, {
        data: data.nonprofit,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 25
        }
      }), __jsx(EsportBlock, {
        data: data.esport,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
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
          lineNumber: 417,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
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
          lineNumber: 419,
          columnNumber: 25
        }
      }, __jsx(SocialBlock, {
        data: data.social,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 29
        }
      }), __jsx(LanguageCard, {
        lang: data.lang,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 29
        }
      })), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 25
        }
      }), __jsx(CopyrightCard, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBNYWluLmpzIl0sIm5hbWVzIjpbImFFbGVtZW50QmxpbmtPcGVuIiwidGFyZ2V0IiwicmVsIiwiY29uZGl0aW9uT2ZHYVRyYWNrZXIiLCJtYXRjaGVkIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImluZGV4T2YiLCJoYW5kbGVHYUV2ZW50IiwidHlwZSIsInRhZyIsIlJlYWN0R0EiLCJldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwiRWR1QmxvY2siLCJkYXRhIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiZm9ybWF0dGVyIiwiaXRlbVRleHQiLCJSZXNJbnRCbG9jayIsIm1vcmVEZXNjcmliZSIsImRlc2NyaWJlIiwiRXhwQmxvY2siLCJJbnZlbnRCbG9jayIsInN5bWJvbCIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rcyIsImxlbmd0aCIsImxpbmsiLCJpbmRleCIsInN0YXR1cyIsInVybCIsImxpbmtHYSIsImxpbmtUZXh0IiwiYW5kIiwiQXdhcmRCbG9jayIsImdldEl0ZW1MYWJlbHMiLCJsYWJlbCIsIndpdGhNZW1iZXJzIiwiUHVibGljYXRpb25CbG9jayIsIml0ZW1Ob3RlIiwiQ2VydGlmaWNhdGlvbkJsb2NrIiwiaXRlbU1haW50aXRsZSIsIml0ZW1TdWJ0aXRsZSIsIk5vbnByb2ZpdEJsb2NrIiwidGFyZ2V0TGluayIsIk9iamVjdCIsImtleXMiLCJpdGVtVGV4dE5hbWUiLCJpdGVtVGV4dERlc2NyaXB0aW9uIiwic2VydmljZVN0YXRlIiwiRXNwb3J0QmxvY2siLCJkZXNjcmlwdGlvbiIsInBhZGRpbmdUb3AiLCJwcm9tb3Rpb24iLCJDb250YWN0QmxvY2siLCJ3aGl0ZVNwYWNlIiwiU29jaWFsQmxvY2siLCJ0ZXh0IiwiTGFuZ3VhZ2VDYXJkIiwibGFuZyIsImJhc2VQYXRoIiwic2l0ZURhdGEiLCJtb2RpZmllZEJhc2VQYXRoIiwiZm9jdXNDbGFzc05hbWUiLCJuYW1lIiwiTWFpbkNhcmQiLCJoZWxsbyIsImFrYU5hbWUiLCJpbnRybyIsImludHJvRW1vamkiLCJBY3Rpdml0eUNhcmQiLCJTdWIiLCJGb290ZXJDYXJkIiwiQ29weXJpZ2h0Q2FyZCIsIlBhZ2VIZWFkIiwibWFpblJlbW90ZUhvc3QiLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlT2dJbWFnZSIsIkFwcE1haW4iLCJpbml0aWFsaXplIiwiZ2EiLCJtYWluIiwicmVzZWFyY2hJbnRlcmVzdCIsImVkdSIsImV4cCIsInB1YmxpY2F0aW9uIiwiaW52ZW50IiwiYXdhcmQiLCJjZXJ0aWZpY2F0aW9uIiwibm9ucHJvZml0IiwiZXNwb3J0IiwiY29udGFjdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwic29jaWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN0QkMsUUFBTSxFQUFFLFFBRGM7QUFFdEJDLEtBQUcsRUFBRTtBQUZpQixDQUExQjs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDL0IsTUFBTUMsT0FBTyxHQUFJLFNBQWlDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxPQUF6QixDQUFpQyxVQUFqQyxLQUFnRCxDQUFsRztBQUNBLFNBQU9KLE9BQVA7QUFDSCxDQUhEO0FBS0E7Ozs7OztBQUlBLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDakMsVUFBUUQsSUFBUjtBQUNBLFNBQUssTUFBTDtBQUFhO0FBQ1QsWUFBSVAsb0JBQW9CLEVBQXhCLEVBQTRCO0FBQ3hCUywwREFBTyxDQUFDQyxLQUFSLENBQWM7QUFDVkMsb0JBQVEsRUFBRSxNQURBO0FBRVZDLGtCQUFNLEVBQUVKO0FBRkUsV0FB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QyxXQUFEO0FBQWEsWUFBSSxFQUFFckYsSUFBSSxDQUFDc0YsTUFBeEI7QUFBZ0MsY0FBTSxFQUFFekUsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyxZQUFEO0FBQWMsWUFBSSxFQUFFYixJQUFJLENBQUNpRCxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FISixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQSixFQVFJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkosQ0FEQztBQUFBLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQURKO0FBb0NILENBbEREOztPQUFNb0IsTztBQW9EU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY1OTdjNDVmYWU2MGQ1ODY5OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcclxuaW1wb3J0IHNpdGVEYXRhIGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xyXG5cclxuLypcclxuICogRnVuY3Rpb25zIGFuZCBWYXJzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBhRWxlbWVudEJsaW5rT3BlbiA9IHtcclxuICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICByZWw6ICdub3JlZmVycmVyIG5vb3BlbmVyJyxcclxufTtcclxuY29uc3QgY29uZGl0aW9uT2ZHYVRyYWNrZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGVkID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCdiYWNvbmJhbycpID49IDApO1xyXG4gICAgcmV0dXJuIG1hdGNoZWQ7XHJcbn07XHJcblxyXG4vKlxyXG4gKiBFdmVudCBoYW5kbGVyc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgaGFuZGxlR2FFdmVudCA9ICh0eXBlLCB0YWcpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnbGluayc6IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uT2ZHYVRyYWNrZXIoKSkge1xyXG4gICAgICAgICAgICBSZWFjdEdBLmV2ZW50KHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnbGluaycsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRhZyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBCbG9ja3NcclxuICpcclxuICovXHJcbmNvbnN0IEVkdUJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IFJlc0ludEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5tb3JlRGVzY3JpYmUoZGF0YS5kZXNjcmliZSl9XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgRXhwQmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dChpdGVtKX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgSW52ZW50QmxvY2sgPSAoeyBkYXRhLCBzeW1ib2wgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGk+e2RhdGEuZm9ybWF0dGVyLmdlbmVyYXRlQWJzdHJhY3QoaXRlbSl9PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBpdGVtICYmIGl0ZW0ubGlua3MubGVuZ3RoID4gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBpdGVtKSAmJiBpdGVtLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+eyhsaW5rLnN0YXR1cykgJiYgYCR7bGluay5zdGF0dXN9YH08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdhRXZlbnQoJ2xpbmsnLCBkYXRhLmZvcm1hdHRlci5saW5rR2EobGluaykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIubGlua1RleHQobGluayl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhpbmRleCA8IChpdGVtLmxpbmtzLmxlbmd0aCAtIDEpKSAmJiAoYCR7c3ltYm9sLmFuZH1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEF3YXJkQmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICB7JyB8ICd9XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmdldEl0ZW1MYWJlbHMoaXRlbSkubWFwKChsYWJlbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7KGRhdGEuZm9ybWF0dGVyLndpdGhNZW1iZXJzKGl0ZW0pICE9PSAnJykgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2RhdGEuZm9ybWF0dGVyLndpdGhNZW1iZXJzKGl0ZW0pfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IFB1YmxpY2F0aW9uQmxvY2sgPSAoeyBkYXRhLCBzeW1ib2wgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntkYXRhLmZvcm1hdHRlci5pdGVtTm90ZShpdGVtKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgeygnbGlua3MnIGluIGl0ZW0gJiYgaXRlbS5saW5rcy5sZW5ndGggPiAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeygnbGlua3MnIGluIGl0ZW0pICYmIGl0ZW0ubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoaXRlbS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKGAke3N5bWJvbC5hbmR9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBDZXJ0aWZpY2F0aW9uQmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtTWFpbnRpdGxlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1TdWJ0aXRsZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBOb25wcm9maXRCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0TGluayA9IChpdGVtLmxpbmtzLmxlbmd0aCA+IDApID8gaXRlbS5saW5rc1swXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhPYmplY3Qua2V5cyh0YXJnZXRMaW5rKS5sZW5ndGggPiAwKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dGFyZ2V0TGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYSh0YXJnZXRMaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dE5hbWUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHROYW1lKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAtICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dERlc2NyaXB0aW9uKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+PGk+e2RhdGEuZm9ybWF0dGVyLnNlcnZpY2VTdGF0ZShpdGVtKX08L2k+PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBFc3BvcnRCbG9jayA9ICh7IGRhdGEsIHN5bWJvbCB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9ybWFsQmxvY2tcIj5cclxuICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiA1IH19PlxyXG4gICAgICAgICAgICB7ZGF0YS5wcm9tb3Rpb259XHJcbiAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBkYXRhKSAmJiBkYXRhLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICB7KGluZGV4IDwgKGRhdGEubGlua3MubGVuZ3RoIC0gMSkpICYmIChgJHtzeW1ib2wuYW5kfWApfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBDb250YWN0QmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPGRpdiBpZD1cImVtXCIgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgJ2NvbnRhY3RfZW1haWwnKX1cclxuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUgKi99XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtMVwiPjwvc3Bhbj48c3BhbiBpZD1cImVtMlwiPjwvc3Bhbj48c3BhbiBpZD1cImVtM1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZW5hYmxlICovfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgU29jaWFsQmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXYgaWQ9XCJmb2xsb3dcIj5cclxuICAgICAgICB7ZGF0YS50ZXh0fVxyXG4gICAgICAgIHsoJ2xpbmtzJyBpbiBkYXRhKSAmJiBkYXRhLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdhRXZlbnQoJ2xpbmsnLCBkYXRhLmZvcm1hdHRlci5saW5rR2EobGluaykpfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIubGlua1RleHQobGluayl9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB7KGluZGV4IDwgKGRhdGEubGlua3MubGVuZ3RoIC0gMSkpICYmICgnICwgJyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuLypcclxuICogQ2FyZHNcclxuICpcclxuICovXHJcbmNvbnN0IExhbmd1YWdlQ2FyZCA9ICh7IGxhbmcgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBiYXNlUGF0aCB9ID0gc2l0ZURhdGE7XHJcbiAgICBjb25zdCBtb2RpZmllZEJhc2VQYXRoID0gKGJhc2VQYXRoID09PSAnJykgPyAnLycgOiBgLyR7YmFzZVBhdGh9L2A7XHJcbiAgICBjb25zdCBmb2N1c0NsYXNzTmFtZSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gKGxhbmcgPT09IHRhcmdldCkgPyAnZm9jdXMnIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGlkPVwibGFuZ3VhZ2VDYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmb2N1c0NsYXNzTmFtZSgnemgtdHcnKX0gaXRlbWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhsYW5nID09PSAnemgtdHcnKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Lit5paHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake21vZGlmaWVkQmFzZVBhdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuK3mlodcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ZvY3VzQ2xhc3NOYW1lKCdlbi11cycpfSBpdGVtIGJvcmRlcmVkLWxlZnRgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGFuZyA9PT0gJ2VuLXVzJykgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVuZ2xpc2g8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bW9kaWZpZWRCYXNlUGF0aH1lbi11c2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcbmNvbnN0IE1haW5DYXJkID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbkNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cIm1haW5UaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuaGVsbG99XHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBpZD1cImFrYU5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYWthTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5JbnRyb1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuaW50cm99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZGF0YS5pbnRyb0Vtb2ppfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEFjdGl2aXR5Q2FyZCA9ICh7IFN1YiB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiYWN0aXZpdHlDYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8U3ViIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgRm9vdGVyQ2FyZCA9ICh7IFN1YiB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiZm9vdGVyQ2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPFN1YiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IENvcHlyaWdodENhcmQgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiY29weXJpZ2h0XCI+XHJcbiAgICAgICAgPHNwYW4+Q29weXJpZ2h0IMKpIEJhY29uQmFvIChHZW5nLUJhbyBMaW4pLjwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5XZWIgZGVzaWduIGJ5IEJhY29uQmFvIChHZW5nLUJhbyBMaW4pLjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuLypcclxuICogSFRNTCBIZWFkc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgUGFnZUhlYWQgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWFpblJlbW90ZUhvc3QgfSA9IHNpdGVEYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAge2RhdGEucGFnZVRpdGxlfVxyXG4gICAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLnBhZ2VEZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPG1ldGEgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9MFwiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGxhbmd1YWdlPXtkYXRhLmxhbmd9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHttYWluUmVtb3RlSG9zdH0vJHtkYXRhLnBhZ2VPZ0ltYWdlfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWY9e21haW5SZW1vdGVIb3N0fSBocmVmTGFuZz1cIngtZGVmYXVsdFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWY9e2Ake21haW5SZW1vdGVIb3N0fS9lbi11cy9gfSBocmVmTGFuZz1cImVuXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwTWFpbiA9IChkYXRhKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICogTGF1bmNoIEdBIHRyYWNraW5nXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpZiAoY29uZGl0aW9uT2ZHYVRyYWNrZXIoKSkge1xyXG4gICAgICAgIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEtMTEwNDcwNDEtMjQnKTtcclxuICAgICAgICBSZWFjdEdBLmdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgICogTWFpblxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3QgeyBzeW1ib2wgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICA8TGFuZ3VhZ2VDYXJkIGxhbmc9e2RhdGEubGFuZ30gLz5cclxuICAgICAgICAgICAgPE1haW5DYXJkIGRhdGE9e2RhdGEubWFpbn0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgIDxBY3Rpdml0eUNhcmRcclxuICAgICAgICAgICAgICAgIFN1Yj17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNJbnRCbG9jayBkYXRhPXtkYXRhLnJlc2VhcmNoSW50ZXJlc3R9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWR1QmxvY2sgZGF0YT17ZGF0YS5lZHV9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXhwQmxvY2sgZGF0YT17ZGF0YS5leHB9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHVibGljYXRpb25CbG9jayBkYXRhPXtkYXRhLnB1YmxpY2F0aW9ufSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudEJsb2NrIGRhdGE9e2RhdGEuaW52ZW50fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF3YXJkQmxvY2sgZGF0YT17ZGF0YS5hd2FyZH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDZXJ0aWZpY2F0aW9uQmxvY2sgZGF0YT17ZGF0YS5jZXJ0aWZpY2F0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9ucHJvZml0QmxvY2sgZGF0YT17ZGF0YS5ub25wcm9maXR9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXNwb3J0QmxvY2sgZGF0YT17ZGF0YS5lc3BvcnR9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvb3RlckNhcmRcclxuICAgICAgICAgICAgICAgIFN1Yj17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0QmxvY2sgZGF0YT17ZGF0YS5jb250YWN0fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEJsb2NrIGRhdGE9e2RhdGEuc29jaWFsfSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZUNhcmQgbGFuZz17ZGF0YS5sYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5cmlnaHRDYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=