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
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, data.formatter.notes()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBNYWluLmpzIl0sIm5hbWVzIjpbImFFbGVtZW50QmxpbmtPcGVuIiwidGFyZ2V0IiwicmVsIiwiY29uZGl0aW9uT2ZHYVRyYWNrZXIiLCJtYXRjaGVkIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImluZGV4T2YiLCJoYW5kbGVHYUV2ZW50IiwidHlwZSIsInRhZyIsIlJlYWN0R0EiLCJldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwiRWR1QmxvY2siLCJkYXRhIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiZm9ybWF0dGVyIiwiaXRlbVRleHQiLCJSZXNJbnRCbG9jayIsIm1vcmVEZXNjcmliZSIsImRlc2NyaWJlIiwiRXhwQmxvY2siLCJJbnZlbnRCbG9jayIsInN5bWJvbCIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rcyIsImxlbmd0aCIsImxpbmsiLCJpbmRleCIsInN0YXR1cyIsInVybCIsImxpbmtHYSIsImxpbmtUZXh0IiwiYW5kIiwiQXdhcmRCbG9jayIsImdldEl0ZW1MYWJlbHMiLCJsYWJlbCIsIndpdGhNZW1iZXJzIiwibm90ZXMiLCJQdWJsaWNhdGlvbkJsb2NrIiwiaXRlbU5vdGUiLCJDZXJ0aWZpY2F0aW9uQmxvY2siLCJpdGVtTWFpbnRpdGxlIiwiaXRlbVN1YnRpdGxlIiwiTm9ucHJvZml0QmxvY2siLCJ0YXJnZXRMaW5rIiwiT2JqZWN0Iiwia2V5cyIsIml0ZW1UZXh0TmFtZSIsIml0ZW1UZXh0RGVzY3JpcHRpb24iLCJzZXJ2aWNlU3RhdGUiLCJFc3BvcnRCbG9jayIsImRlc2NyaXB0aW9uIiwicGFkZGluZ1RvcCIsInByb21vdGlvbiIsIkNvbnRhY3RCbG9jayIsIndoaXRlU3BhY2UiLCJTb2NpYWxCbG9jayIsInRleHQiLCJMYW5ndWFnZUNhcmQiLCJsYW5nIiwiYmFzZVBhdGgiLCJzaXRlRGF0YSIsIm1vZGlmaWVkQmFzZVBhdGgiLCJmb2N1c0NsYXNzTmFtZSIsIm5hbWUiLCJNYWluQ2FyZCIsImhlbGxvIiwiYWthTmFtZSIsImludHJvIiwiaW50cm9FbW9qaSIsIkFjdGl2aXR5Q2FyZCIsIlN1YiIsIkZvb3RlckNhcmQiLCJDb3B5cmlnaHRDYXJkIiwiUGFnZUhlYWQiLCJtYWluUmVtb3RlSG9zdCIsInBhZ2VUaXRsZSIsInBhZ2VEZXNjcmlwdGlvbiIsInBhZ2VPZ0ltYWdlIiwiQXBwTWFpbiIsImluaXRpYWxpemUiLCJnYSIsIm1haW4iLCJyZXNlYXJjaEludGVyZXN0IiwiZWR1IiwiZXhwIiwicHVibGljYXRpb24iLCJpbnZlbnQiLCJhd2FyZCIsImNlcnRpZmljYXRpb24iLCJub25wcm9maXQiLCJlc3BvcnQiLCJjb250YWN0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3RCQyxRQUFNLEVBQUUsUUFEYztBQUV0QkMsS0FBRyxFQUFFO0FBRmlCLENBQTFCOztBQUlBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUMvQixNQUFNQyxPQUFPLEdBQUksU0FBaUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE9BQXpCLENBQWlDLFVBQWpDLEtBQWdELENBQWxHO0FBQ0EsU0FBT0osT0FBUDtBQUNILENBSEQ7QUFLQTs7Ozs7O0FBSUEsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqQyxVQUFRRCxJQUFSO0FBQ0EsU0FBSyxNQUFMO0FBQWE7QUFDVCxZQUFJUCxvQkFBb0IsRUFBeEIsRUFBNEI7QUFDeEJTLDBEQUFPLENBQUNDLEtBQVIsQ0FBYztBQUNWQyxvQkFBUSxFQUFFLE1BREE7QUFFVkMsa0JBQU0sRUFBRUo7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STtBQUFLLGFBQUssRUFBRTtBQUFFdUUsaUJBQU8sRUFBRSxNQUFYO0FBQW1CQyx3QkFBYyxFQUFFLGVBQW5DO0FBQW9EQyxrQkFBUSxFQUFFO0FBQTlELFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsV0FBRDtBQUFhLFlBQUksRUFBRXRGLElBQUksQ0FBQ3VGLE1BQXhCO0FBQWdDLGNBQU0sRUFBRTFFLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJLE1BQUMsWUFBRDtBQUFjLFlBQUksRUFBRWIsSUFBSSxDQUFDa0QsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBSEosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEosRUFRSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLENBREM7QUFBQSxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosQ0FESjtBQW9DSCxDQWxERDs7T0FBTW9CLE87QUFvRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQzMTlmMWViMzk4NTRiYmQyOWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XHJcbmltcG9ydCBzaXRlRGF0YSBmcm9tICcuLi9kYXRhL3NpdGVEYXRhJztcclxuXHJcbi8qXHJcbiAqIEZ1bmN0aW9ucyBhbmQgVmFyc1xyXG4gKlxyXG4gKi9cclxuY29uc3QgYUVsZW1lbnRCbGlua09wZW4gPSB7XHJcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgcmVsOiAnbm9yZWZlcnJlciBub29wZW5lcicsXHJcbn07XHJcbmNvbnN0IGNvbmRpdGlvbk9mR2FUcmFja2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlZCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignYmFjb25iYW8nKSA+PSAwKTtcclxuICAgIHJldHVybiBtYXRjaGVkO1xyXG59O1xyXG5cclxuLypcclxuICogRXZlbnQgaGFuZGxlcnNcclxuICpcclxuICovXHJcbmNvbnN0IGhhbmRsZUdhRXZlbnQgPSAodHlwZSwgdGFnKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2xpbmsnOiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbk9mR2FUcmFja2VyKCkpIHtcclxuICAgICAgICAgICAgUmVhY3RHQS5ldmVudCh7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0YWcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogQmxvY2tzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBFZHVCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBSZXNJbnRCbG9jayA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsoJ2l0ZW1zJyBpbiBkYXRhKSAmJiBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIubW9yZURlc2NyaWJlKGRhdGEuZGVzY3JpYmUpfVxyXG4gICAgICAgIDwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEV4cEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEludmVudEJsb2NrID0gKHsgZGF0YSwgc3ltYm9sIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpPntkYXRhLmZvcm1hdHRlci5nZW5lcmF0ZUFic3RyYWN0KGl0ZW0pfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSAmJiBpdGVtLmxpbmtzLmxlbmd0aCA+IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCdsaW5rcycgaW4gaXRlbSkgJiYgaXRlbS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPnsobGluay5zdGF0dXMpICYmIGAke2xpbmsuc3RhdHVzfWB9PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggPCAoaXRlbS5saW5rcy5sZW5ndGggLSAxKSkgJiYgKGAke3N5bWJvbC5hbmR9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBBd2FyZEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgfCAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5nZXRJdGVtTGFiZWxzKGl0ZW0pLm1hcCgobGFiZWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyhkYXRhLmZvcm1hdHRlci53aXRoTWVtYmVycyhpdGVtKSAhPT0gJycpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntkYXRhLmZvcm1hdHRlci53aXRoTWVtYmVycyhpdGVtKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIubm90ZXMoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBQdWJsaWNhdGlvbkJsb2NrID0gKHsgZGF0YSwgc3ltYm9sIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtVGV4dChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD57ZGF0YS5mb3JtYXR0ZXIuaXRlbU5vdGUoaXRlbSl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBpdGVtICYmIGl0ZW0ubGlua3MubGVuZ3RoID4gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoJ2xpbmtzJyBpbiBpdGVtKSAmJiBpdGVtLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYShsaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uYUVsZW1lbnRCbGlua09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5saW5rVGV4dChsaW5rKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGluZGV4IDwgKGl0ZW0ubGlua3MubGVuZ3RoIC0gMSkpICYmIChgJHtzeW1ib2wuYW5kfWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgQ2VydGlmaWNhdGlvbkJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgeygnaXRlbXMnIGluIGRhdGEpICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbU1haW50aXRsZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5pdGVtU3VidGl0bGUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgTm9ucHJvZml0QmxvY2sgPSAoeyBkYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7KCdpdGVtcycgaW4gZGF0YSkgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldExpbmsgPSAoaXRlbS5saW5rcy5sZW5ndGggPiAwKSA/IGl0ZW0ubGlua3NbMF0gOiB7fTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoT2JqZWN0LmtleXModGFyZ2V0TGluaykubGVuZ3RoID4gMCkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3RhcmdldExpbmsudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdhRXZlbnQoJ2xpbmsnLCBkYXRhLmZvcm1hdHRlci5saW5rR2EodGFyZ2V0TGluaykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHROYW1lKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLml0ZW1UZXh0TmFtZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgLSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mb3JtYXR0ZXIuaXRlbVRleHREZXNjcmlwdGlvbihpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjxpPntkYXRhLmZvcm1hdHRlci5zZXJ2aWNlU3RhdGUoaXRlbSl9PC9pPjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgRXNwb3J0QmxvY2sgPSAoeyBkYXRhLCBzeW1ib2wgfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vcm1hbEJsb2NrXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogNSB9fT5cclxuICAgICAgICAgICAge2RhdGEucHJvbW90aW9ufVxyXG4gICAgICAgICAgICB7KCdsaW5rcycgaW4gZGF0YSkgJiYgZGF0YS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsIGRhdGEuZm9ybWF0dGVyLmxpbmtHYShsaW5rKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5hRWxlbWVudEJsaW5rT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZvcm1hdHRlci5saW5rVGV4dChsaW5rKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhpbmRleCA8IChkYXRhLmxpbmtzLmxlbmd0aCAtIDEpKSAmJiAoYCR7c3ltYm9sLmFuZH1gKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuY29uc3QgQ29udGFjdEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJlbVwiIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2FFdmVudCgnbGluaycsICdjb250YWN0X2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlICovfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbTFcIj48L3NwYW4+PHNwYW4gaWQ9XCJlbTJcIj48L3NwYW4+PHNwYW4gaWQ9XCJlbTNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7LyogZXNsaW50LWVuYWJsZSAqL31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IFNvY2lhbEJsb2NrID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiZm9sbG93XCI+XHJcbiAgICAgICAge2RhdGEudGV4dH1cclxuICAgICAgICB7KCdsaW5rcycgaW4gZGF0YSkgJiYgZGF0YS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnVybH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHYUV2ZW50KCdsaW5rJywgZGF0YS5mb3JtYXR0ZXIubGlua0dhKGxpbmspKX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4uYUVsZW1lbnRCbGlua09wZW59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZm9ybWF0dGVyLmxpbmtUZXh0KGxpbmspfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgeyhpbmRleCA8IChkYXRhLmxpbmtzLmxlbmd0aCAtIDEpKSAmJiAoJyAsICcpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbi8qXHJcbiAqIENhcmRzXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBMYW5ndWFnZUNhcmQgPSAoeyBsYW5nIH0pID0+IHtcclxuICAgIGNvbnN0IHsgYmFzZVBhdGggfSA9IHNpdGVEYXRhO1xyXG4gICAgY29uc3QgbW9kaWZpZWRCYXNlUGF0aCA9IChiYXNlUGF0aCA9PT0gJycpID8gJy8nIDogYC8ke2Jhc2VQYXRofS9gO1xyXG4gICAgY29uc3QgZm9jdXNDbGFzc05hbWUgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IChsYW5nID09PSB0YXJnZXQpID8gJ2ZvY3VzJyA6ICcnO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBpZD1cImxhbmd1YWdlQ2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Zm9jdXNDbGFzc05hbWUoJ3poLXR3Jyl9IGl0ZW1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGFuZyA9PT0gJ3poLXR3JykgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuS4reaWhzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHttb2RpZmllZEJhc2VQYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lit5paHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmb2N1c0NsYXNzTmFtZSgnZW4tdXMnKX0gaXRlbSBib3JkZXJlZC1sZWZ0YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7KGxhbmcgPT09ICdlbi11cycpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbmdsaXNoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake21vZGlmaWVkQmFzZVBhdGh9ZW4tdXNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2xpc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59O1xyXG5jb25zdCBNYWluQ2FyZCA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW5DYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJtYWluVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmhlbGxvfVxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgaWQ9XCJha2FOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmFrYU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluSW50cm9cIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmludHJvfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5pbnRyb0Vtb2ppfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBBY3Rpdml0eUNhcmQgPSAoeyBTdWIgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImFjdGl2aXR5Q2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPFN1YiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IEZvb3RlckNhcmQgPSAoeyBTdWIgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImZvb3RlckNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgIDxTdWIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBDb3B5cmlnaHRDYXJkID0gKCkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSBCYWNvbkJhbyAoR2VuZy1CYW8gTGluKS48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+V2ViIGRlc2lnbiBieSBCYWNvbkJhbyAoR2VuZy1CYW8gTGluKS48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbi8qXHJcbiAqIEhUTUwgSGVhZHNcclxuICpcclxuICovXHJcbmNvbnN0IFBhZ2VIZWFkID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1haW5SZW1vdGVIb3N0IH0gPSBzaXRlRGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnBhZ2VUaXRsZX1cclxuICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5wYWdlRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCB1c2VyLXNjYWxhYmxlPTBcIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBsYW5ndWFnZT17ZGF0YS5sYW5nfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7bWFpblJlbW90ZUhvc3R9LyR7ZGF0YS5wYWdlT2dJbWFnZX1gfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmPXttYWluUmVtb3RlSG9zdH0gaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmPXtgJHttYWluUmVtb3RlSG9zdH0vZW4tdXMvYH0gaHJlZkxhbmc9XCJlblwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFwcE1haW4gPSAoZGF0YSkgPT4ge1xyXG4gICAgLypcclxuICAgICAqIExhdW5jaCBHQSB0cmFja2luZ1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaWYgKGNvbmRpdGlvbk9mR2FUcmFja2VyKCkpIHtcclxuICAgICAgICBSZWFjdEdBLmluaXRpYWxpemUoJ1VBLTExMDQ3MDQxLTI0Jyk7XHJcbiAgICAgICAgUmVhY3RHQS5nYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAqIE1haW5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHsgc3ltYm9sIH0gPSBkYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UGFnZUhlYWQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgICAgPExhbmd1YWdlQ2FyZCBsYW5nPXtkYXRhLmxhbmd9IC8+XHJcbiAgICAgICAgICAgIDxNYWluQ2FyZCBkYXRhPXtkYXRhLm1haW59IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICA8QWN0aXZpdHlDYXJkXHJcbiAgICAgICAgICAgICAgICBTdWI9eygpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzSW50QmxvY2sgZGF0YT17ZGF0YS5yZXNlYXJjaEludGVyZXN0fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkdUJsb2NrIGRhdGE9e2RhdGEuZWR1fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4cEJsb2NrIGRhdGE9e2RhdGEuZXhwfSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1YmxpY2F0aW9uQmxvY2sgZGF0YT17ZGF0YS5wdWJsaWNhdGlvbn0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRCbG9jayBkYXRhPXtkYXRhLmludmVudH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBd2FyZEJsb2NrIGRhdGE9e2RhdGEuYXdhcmR9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2VydGlmaWNhdGlvbkJsb2NrIGRhdGE9e2RhdGEuY2VydGlmaWNhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vbnByb2ZpdEJsb2NrIGRhdGE9e2RhdGEubm9ucHJvZml0fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVzcG9ydEJsb2NrIGRhdGE9e2RhdGEuZXNwb3J0fSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXJDYXJkXHJcbiAgICAgICAgICAgICAgICBTdWI9eygpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEJsb2NrIGRhdGE9e2RhdGEuY29udGFjdH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZmxleFdyYXA6ICd3cmFwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWxCbG9jayBkYXRhPXtkYXRhLnNvY2lhbH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VDYXJkIGxhbmc9e2RhdGEubGFuZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29weXJpZ2h0Q2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9