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
  }), __jsx("div", {
    "class": "notes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, data.formatter.notes())));
};

_c5 = AwardBlock;

var PublicationBlock = function PublicationBlock(_ref6) {
  var data = _ref6.data,
      symbol = _ref6.symbol;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }, data.formatter.itemText(item), ' ', __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    }, data.formatter.itemNote(item)), ' ', 'links' in item && item.links.length > 0 && __jsx("span", {
      className: "item-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, 'links' in item && item.links.map(function (link, index) {
      return __jsx("span", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
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
          lineNumber: 156,
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
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    }, data.formatter.itemMaintitle(item), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }
    }), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
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
      lineNumber: 190,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, data.title), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, 'items' in data && data.items.map(function (item, i) {
    var targetLink = item.links.length > 0 ? item.links[0] : {};
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
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
        lineNumber: 198,
        columnNumber: 29
      }
    }), data.formatter.itemTextName(item)) : __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 29
      }
    }, data.formatter.itemTextName(item)), ' - ', data.formatter.itemTextDescription(item), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, __jsx("i", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
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
      lineNumber: 220,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, data.title), __jsx("div", {
    className: "normalBlock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, data.description), __jsx("div", {
    style: {
      paddingTop: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, data.promotion, 'links' in data && data.links.map(function (link, index) {
    return __jsx("span", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
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
        lineNumber: 229,
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
      lineNumber: 243,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
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
      lineNumber: 245,
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
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "em1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }), __jsx("span", {
    id: "em2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 39
    }
  }), __jsx("span", {
    id: "em3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 258,
      columnNumber: 5
    }
  }, data.text, 'links' in data && data.links.map(function (link, index) {
    return __jsx("span", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
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
        lineNumber: 262,
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
      lineNumber: 287,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "".concat(focusClassName('zh-tw'), " item"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }, lang === 'zh-tw' ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 25
    }
  }, "\u4E2D\u6587") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(modifiedBasePath),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 29
    }
  }, "\u4E2D\u6587"))), __jsx("div", {
    className: "".concat(focusClassName('en-us'), " item bordered-left"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 17
    }
  }, lang === 'en-us' ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 25
    }
  }, "English") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(modifiedBasePath, "en-us"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 320,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }
  }, __jsx("h1", {
    id: "mainTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, data.hello, ' ', __jsx("span", {
    id: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 17
    }
  }, data.name, ' ', __jsx("small", {
    id: "akaName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 21
    }
  }, data.akaName))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 13
    }
  }), __jsx("div", {
    id: "mainIntro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 13
    }
  }, data.intro, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 17
    }
  }), data.introEmoji)));
};

_c13 = MainCard;

var ActivityCard = function ActivityCard(_ref14) {
  var Sub = _ref14.Sub;
  return __jsx("div", {
    id: "activityCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 9
    }
  }, __jsx(Sub, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
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
      lineNumber: 350,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 9
    }
  }, __jsx(Sub, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
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
      lineNumber: 357,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 9
    }
  }, "Copyright \xA9 BaconBao (Geng-Bao Lin)."), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
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
      lineNumber: 370,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 13
    }
  }, data.pageTitle), __jsx("meta", {
    name: "description",
    content: data.pageDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  }), __jsx("meta", {
    content: "initial-scale=1, minimum-scale=1, width=device-width, user-scalable=0",
    name: "viewport",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }
  }), __jsx("meta", {
    language: data.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(mainRemoteHost, "/").concat(data.pageOgImage),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: mainRemoteHost,
    hrefLang: "x-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: "".concat(mainRemoteHost, "/en-us/"),
    hrefLang: "en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
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
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx(PageHead, {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }), __jsx(LanguageCard, {
    lang: data.lang,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }), __jsx(MainCard, {
    data: data.main,
    symbol: symbol,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
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
          lineNumber: 406,
          columnNumber: 25
        }
      }), __jsx(EduBlock, {
        data: data.edu,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 25
        }
      }), __jsx(ExpBlock, {
        data: data.exp,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 25
        }
      }), __jsx(PublicationBlock, {
        data: data.publication,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 25
        }
      }), __jsx(InventBlock, {
        data: data.invent,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 25
        }
      }), __jsx(AwardBlock, {
        data: data.award,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 25
        }
      }), __jsx(CertificationBlock, {
        data: data.certification,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 25
        }
      }), __jsx(NonprofitBlock, {
        data: data.nonprofit,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 25
        }
      }), __jsx(EsportBlock, {
        data: data.esport,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
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
          lineNumber: 421,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
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
          lineNumber: 423,
          columnNumber: 25
        }
      }, __jsx(SocialBlock, {
        data: data.social,
        symbol: symbol,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 29
        }
      }), __jsx(LanguageCard, {
        lang: data.lang,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 29
        }
      })), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 25
        }
      }), __jsx(CopyrightCard, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBNYWluLmpzIl0sIm5hbWVzIjpbImFFbGVtZW50QmxpbmtPcGVuIiwidGFyZ2V0IiwicmVsIiwiY29uZGl0aW9uT2ZHYVRyYWNrZXIiLCJtYXRjaGVkIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImluZGV4T2YiLCJoYW5kbGVHYUV2ZW50IiwidHlwZSIsInRhZyIsIlJlYWN0R0EiLCJldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwiRWR1QmxvY2siLCJkYXRhIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiZm9ybWF0dGVyIiwiaXRlbVRleHQiLCJSZXNJbnRCbG9jayIsIm1vcmVEZXNjcmliZSIsImRlc2NyaWJlIiwiRXhwQmxvY2siLCJJbnZlbnRCbG9jayIsInN5bWJvbCIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rcyIsImxlbmd0aCIsImxpbmsiLCJpbmRleCIsInN0YXR1cyIsInVybCIsImxpbmtHYSIsImxpbmtUZXh0IiwiYW5kIiwiQXdhcmRCbG9jayIsImdldEl0ZW1MYWJlbHMiLCJsYWJlbCIsIndpdGhNZW1iZXJzIiwibm90ZXMiLCJQdWJsaWNhdGlvbkJsb2NrIiwiaXRlbU5vdGUiLCJDZXJ0aWZpY2F0aW9uQmxvY2siLCJpdGVtTWFpbnRpdGxlIiwiaXRlbVN1YnRpdGxlIiwiTm9ucHJvZml0QmxvY2siLCJ0YXJnZXRMaW5rIiwiT2JqZWN0Iiwia2V5cyIsIml0ZW1UZXh0TmFtZSIsIml0ZW1UZXh0RGVzY3JpcHRpb24iLCJzZXJ2aWNlU3RhdGUiLCJFc3BvcnRCbG9jayIsImRlc2NyaXB0aW9uIiwicGFkZGluZ1RvcCIsInByb21vdGlvbiIsIkNvbnRhY3RCbG9jayIsIndoaXRlU3BhY2UiLCJTb2NpYWxCbG9jayIsInRleHQiLCJMYW5ndWFnZUNhcmQiLCJsYW5nIiwiYmFzZVBhdGgiLCJzaXRlRGF0YSIsIm1vZGlmaWVkQmFzZVBhdGgiLCJmb2N1c0NsYXNzTmFtZSIsIm5hbWUiLCJNYWluQ2FyZCIsImhlbGxvIiwiYWthTmFtZSIsImludHJvIiwiaW50cm9FbW9qaSIsIkFjdGl2aXR5Q2FyZCIsIlN1YiIsIkZvb3RlckNhcmQiLCJDb3B5cmlnaHRDYXJkIiwiUGFnZUhlYWQiLCJtYWluUmVtb3RlSG9zdCIsInBhZ2VUaXRsZSIsInBhZ2VEZXNjcmlwdGlvbiIsInBhZ2VPZ0ltYWdlIiwiQXBwTWFpbiIsImluaXRpYWxpemUiLCJnYSIsIm1haW4iLCJyZXNlYXJjaEludGVyZXN0IiwiZWR1IiwiZXhwIiwicHVibGljYXRpb24iLCJpbnZlbnQiLCJhd2FyZCIsImNlcnRpZmljYXRpb24iLCJub25wcm9maXQiLCJlc3BvcnQiLCJjb250YWN0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3RCQyxRQUFNLEVBQUUsUUFEYztBQUV0QkMsS0FBRyxFQUFFO0FBRmlCLENBQTFCOztBQUlBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUMvQixNQUFNQyxPQUFPLEdBQUksU0FBaUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE9BQXpCLENBQWlDLFVBQWpDLEtBQWdELENBQWxHO0FBQ0EsU0FBT0osT0FBUDtBQUNILENBSEQ7QUFLQTs7Ozs7O0FBSUEsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqQyxVQUFRRCxJQUFSO0FBQ0EsU0FBSyxNQUFMO0FBQWE7QUFDVCxZQUFJUCxvQkFBb0IsRUFBeEIsRUFBNEI7QUFDeEJTLDBEQUFPLENBQUNDLEtBQVIsQ0FBYztBQUNWQyxvQkFBUSxFQUFFLE1BREE7QUFFVkMsa0JBQU0sRUFBRUo7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QTtBQUFBLFFBRkosRUFHSTtBQUFLLGFBQUssRUFBRTtBQUFFdUUsaUJBQU8sRUFBRSxNQUFYO0FBQW1CQyx3QkFBYyxFQUFFLGVBQW5DO0FBQW9EQyxrQkFBUSxFQUFFO0FBQTlELFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsV0FBRDtBQUFhLFlBQUksRUFBRXRGLElBQUksQ0FBQ3VGLE1BQXhCO0FBQWdDLGNBQU0sRUFBRTFFLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJLE1BQUMsWUFBRDtBQUFjLFlBQUksRUFBRWIsSUFBSSxDQUFDa0QsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBSEosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEosRUFRSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLENBREM7QUFBQSxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosQ0FESjtBQW9DSCxDQWxERDs7T0FBTW9CLE87QUFvRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlMWRkZjM2MGU5M2Q4ZGM1Mjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XHJcbmltcG9ydCBzaXRlRGF0YSBmcm9tICcuLi9kYXRhL3NpdGVEYXRhJztcclxuXHJcbi8qXHJcbiAqIEZ1bmN0aW9ucyBhbmQgVmFyc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgYUVsZW1lbnRCbGlua09wZW4gPSB7XHJcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgcmVsOiAnbm9yZWZlcnJlciBub29wZW5lcicsXHJcbn07XHJcbmNvbnN0IGNvbmRpdGlvbk9mR2FUcmFja2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlZCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignYmFjb25iYW8nKSA+PSAwKTtcclxuICAgIHJldHVybiBtYXRjaGVkO1xyXG59O1xyXG5cclxuLypcclxuICogRXZlbnQgaGFuZGxlcnNcclxuICpcclxuICovXHJcbmNvbnN0IGhhbmRsZUdhRXZlbnQgPSAodHlwZSwgdGFnKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2xpbmsnOiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbk9mR2FUcmFja2VyKCkpIHtcclxuICAgICAgICAgICAgUmVhY3RHQS5ldmVudCh7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0YWcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogQmxvY2tzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBFZHVCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBSZXNJbnRCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIubW9yZURlc2NyaWJlKGRhdGEuZGVzY3JpYmUpfVxyXG4gICAgICAgIDwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEV4cEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEludmVudEJsb2NrID0gKHsgZGF0YSwgc3ltYm9sIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpPntkYXRhLmZvcm1hdHRlci5nZW5lcmF0ZUFic3RyYWN0KGl0ZW0pfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSAmJiBpdGVtLmxpbmtzLmxlbmd0aCA+IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSkgJiYgaXRlbS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPnsobGluay5zdGF0dXMpICYmIGAke2xpbmsuc3RhdHVzfWB9PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoaXRlbS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKGAke3N5bWJvbC5hbmR9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBBd2FyZEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgfCAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5nZXRJdGVtTGFiZWxzKGl0ZW0pLm1hcCgobGFiZWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyhkYXRhLmZvcm1hdHRlci53aXRoTWVtYmVycyhpdGVtKSAhPT0gJycpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntkYXRhLmZvcm1hdHRlci53aXRoTWVtYmVycyhpdGVtKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLm5vdGVzKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgUHVibGljYXRpb25CbG9jayA9ICh7IGRhdGEsIHN5bWJvbCB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2RhdGEuZm9ybWF0dGVyLml0ZW1Ob3RlKGl0ZW0pfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSAmJiBpdGVtLmxpbmtzLmxlbmd0aCA+IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSkgJiYgaXRlbS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdhRXZlbnQoJ2xpbmsnLCBkYXRhLmZvcm1hdHRlci5saW5rR2EobGluaykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIubGlua1RleHQobGluayl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhpbmRleCA8IChpdGVtLmxpbmtzLmxlbmd0aCAtIDEpKSAmJiAoYCR7c3ltYm9sLmFuZH1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IENlcnRpZmljYXRpb25CbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1NYWludGl0bGUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVN1YnRpdGxlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IE5vbnByb2ZpdEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRMaW5rID0gKGl0ZW0ubGlua3MubGVuZ3RoID4gMCkgPyBpdGVtLmxpbmtzWzBdIDoge307XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KE9iamVjdC5rZXlzKHRhcmdldExpbmspLmxlbmd0aCA+IDApID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt0YXJnZXRMaW5rLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKHRhcmdldExpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uYUVsZW1lbnRCbGlua09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0TmFtZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dE5hbWUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnIC0gJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0RGVzY3JpcHRpb24oaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD48aT57ZGF0YS5mb3JtYXR0ZXIuc2VydmljZVN0YXRlKGl0ZW0pfTwvaT48L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEVzcG9ydEJsb2NrID0gKHsgZGF0YSwgc3ltYm9sIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3JtYWxCbG9ja1wiPlxyXG4gICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDUgfX0+XHJcbiAgICAgICAgICAgIHtkYXRhLnByb21vdGlvbn1cclxuICAgICAgICAgICAgeygnbGlua3MnIGluIGRhdGEpICYmIGRhdGEubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdhRXZlbnQoJ2xpbmsnLCBkYXRhLmZvcm1hdHRlci5saW5rR2EobGluaykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uYUVsZW1lbnRCbGlua09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIubGlua1RleHQobGluayl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoZGF0YS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKGAke3N5bWJvbC5hbmR9YCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IENvbnRhY3RCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8ZGl2IGlkPVwiZW1cIiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdhRXZlbnQoJ2xpbmsnLCAnY29udGFjdF9lbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZW0xXCI+PC9zcGFuPjxzcGFuIGlkPVwiZW0yXCI+PC9zcGFuPjxzcGFuIGlkPVwiZW0zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgey8qIGVzbGludC1lbmFibGUgKi99XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBTb2NpYWxCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImZvbGxvd1wiPlxyXG4gICAgICAgIHtkYXRhLnRleHR9XHJcbiAgICAgICAgeygnbGlua3MnIGluIGRhdGEpICYmIGRhdGEubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYShsaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmFFbGVtZW50QmxpbmtPcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5saW5rVGV4dChsaW5rKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoZGF0YS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKCcgLCAnKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG4vKlxyXG4gKiBDYXJkc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgTGFuZ3VhZ2VDYXJkID0gKHsgbGFuZyB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGJhc2VQYXRoIH0gPSBzaXRlRGF0YTtcclxuICAgIGNvbnN0IG1vZGlmaWVkQmFzZVBhdGggPSAoYmFzZVBhdGggPT09ICcnKSA/ICcvJyA6IGAvJHtiYXNlUGF0aH0vYDtcclxuICAgIGNvbnN0IGZvY3VzQ2xhc3NOYW1lID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAobGFuZyA9PT0gdGFyZ2V0KSA/ICdmb2N1cycgOiAnJztcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgaWQ9XCJsYW5ndWFnZUNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ZvY3VzQ2xhc3NOYW1lKCd6aC10dycpfSBpdGVtYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7KGxhbmcgPT09ICd6aC10dycpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7kuK3mloc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bW9kaWZpZWRCYXNlUGF0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4reaWh1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Zm9jdXNDbGFzc05hbWUoJ2VuLXVzJyl9IGl0ZW0gYm9yZGVyZWQtbGVmdGB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhsYW5nID09PSAnZW4tdXMnKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHttb2RpZmllZEJhc2VQYXRofWVuLXVzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmdsaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuY29uc3QgTWFpbkNhcmQgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXYgaWQ9XCJtYWluQ2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPGgxIGlkPVwibWFpblRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5oZWxsb31cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGlkPVwiYWthTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ha2FOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbkludHJvXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5pbnRyb31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuaW50cm9FbW9qaX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgQWN0aXZpdHlDYXJkID0gKHsgU3ViIH0pID0+IChcclxuICAgIDxkaXYgaWQ9XCJhY3Rpdml0eUNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgIDxTdWIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBGb290ZXJDYXJkID0gKHsgU3ViIH0pID0+IChcclxuICAgIDxkaXYgaWQ9XCJmb290ZXJDYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8U3ViIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgQ29weXJpZ2h0Q2FyZCA9ICgpID0+IChcclxuICAgIDxkaXYgaWQ9XCJjb3B5cmlnaHRcIj5cclxuICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgQmFjb25CYW8gKEdlbmctQmFvIExpbikuPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPldlYiBkZXNpZ24gYnkgQmFjb25CYW8gKEdlbmctQmFvIExpbikuPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG4vKlxyXG4gKiBIVE1MIEhlYWRzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBQYWdlSGVhZCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBtYWluUmVtb3RlSG9zdCB9ID0gc2l0ZURhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5wYWdlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEucGFnZURlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT0wXCIgbmFtZT1cInZpZXdwb3J0XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbGFuZ3VhZ2U9e2RhdGEubGFuZ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake21haW5SZW1vdGVIb3N0fS8ke2RhdGEucGFnZU9nSW1hZ2V9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZj17bWFpblJlbW90ZUhvc3R9IGhyZWZMYW5nPVwieC1kZWZhdWx0XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZj17YCR7bWFpblJlbW90ZUhvc3R9L2VuLXVzL2B9IGhyZWZMYW5nPVwiZW5cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBBcHBNYWluID0gKGRhdGEpID0+IHtcclxuICAgIC8qXHJcbiAgICAgKiBMYXVuY2ggR0EgdHJhY2tpbmdcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGlmIChjb25kaXRpb25PZkdhVHJhY2tlcigpKSB7XHJcbiAgICAgICAgUmVhY3RHQS5pbml0aWFsaXplKCdVQS0xMTA0NzA0MS0yNCcpO1xyXG4gICAgICAgIFJlYWN0R0EuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAgKiBNYWluXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdCB7IHN5bWJvbCB9ID0gZGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkIGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgIDxMYW5ndWFnZUNhcmQgbGFuZz17ZGF0YS5sYW5nfSAvPlxyXG4gICAgICAgICAgICA8TWFpbkNhcmQgZGF0YT17ZGF0YS5tYWlufSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgPEFjdGl2aXR5Q2FyZFxyXG4gICAgICAgICAgICAgICAgU3ViPXsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc0ludEJsb2NrIGRhdGE9e2RhdGEucmVzZWFyY2hJbnRlcmVzdH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZHVCbG9jayBkYXRhPXtkYXRhLmVkdX0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBCbG9jayBkYXRhPXtkYXRhLmV4cH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdWJsaWNhdGlvbkJsb2NrIGRhdGE9e2RhdGEucHVibGljYXRpb259IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50QmxvY2sgZGF0YT17ZGF0YS5pbnZlbnR9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXdhcmRCbG9jayBkYXRhPXtkYXRhLmF3YXJkfSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENlcnRpZmljYXRpb25CbG9jayBkYXRhPXtkYXRhLmNlcnRpZmljYXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb25wcm9maXRCbG9jayBkYXRhPXtkYXRhLm5vbnByb2ZpdH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFc3BvcnRCbG9jayBkYXRhPXtkYXRhLmVzcG9ydH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyQ2FyZFxyXG4gICAgICAgICAgICAgICAgU3ViPXsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RCbG9jayBkYXRhPXtkYXRhLmNvbnRhY3R9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsQmxvY2sgZGF0YT17ZGF0YS5zb2NpYWx9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmd1YWdlQ2FyZCBsYW5nPXtkYXRhLmxhbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlyaWdodENhcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==