webpackHotUpdate_N_E("pages/index",{

/***/ "./data/zh-tw.js":
/*!***********************!*\
  !*** ./data/zh-tw.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/*
 * Data ZH-TW
 *
 * @author BaconBao
 * @link https://baconbao.github.io
 */
var symbol = {
  and: '、'
};
var patentStatus = {
  granted: '核准'
};
var patentSelf = {
  name: '林耕葆',
  self: true
};
var pubSelf = {
  name: '林耕葆',
  self: true
};
var data = {
  lang: 'zh-tw',
  pageTitle: '我是 BaconBao, 我熱愛探索科技與它的應用！',
  pageDescription: '我是 BaconBao ，一個發現熱情就很難停下腳步的人，熱愛探索科技與它的應用。',
  pageOgImage: 'images/ogimage.jpg',
  symbol: symbol,
  main: {
    hello: '嗨！我是',
    name: 'BaconBao',
    akaName: '林耕葆',
    intro: '熱愛探索IT應用與IT相關的消費者行為，目前在臺灣大學攻讀博士學位。我喜歡徜徉在知識的海洋裡，有時在這片海洋裡翻滾、賣萌、拍肚皮。 (●\'◡\'●)'
  },
  researchInterest: {
    title: '研究興趣',
    items: [{
      text: 'Web應用'
    }, {
      text: '消費者行為'
    }, {
      text: '數位行銷 / 網路行銷'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.text);
      }
    }
  },
  edu: {
    title: '學歷',
    items: [{
      degree: '博士生',
      school: '國立臺灣大學',
      dept: '資訊管理學系'
    }, {
      degree: '碩士',
      school: '國立中央大學',
      dept: '資訊管理學系'
    }, {
      degree: '學士',
      school: '國立屏東商業技術學院',
      dept: '資訊管理學系'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.degree, " | ").concat(item.school, "\uFF0C").concat(item.dept);
      }
    }
  },
  exp: {
    title: '經歷',
    items: [{
      fromTime: '2016/9',
      toTime: '2020/12',
      com: '宏碁股份有限公司',
      dept: '價值創新中心',
      pos: '專案工程師'
    }, {
      fromTime: '2014/1',
      toTime: '2014/2',
      com: '玉山證券',
      dept: '電子商務部',
      pos: '實習生'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.fromTime, " ~ ").concat(item.toTime, " | ").concat(item.com, "\uFF0C").concat(item.dept, "\uFF0C").concat(item.pos);
      }
    }
  },
  invent: {
    title: '專利/發明',
    items: [{
      year: '2020',
      inventors: [patentSelf],
      name: '驗證網路通話身份的方法及相關裝置',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I711293',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI711293',
        status: patentStatus.granted
      }, {
        text: 'CN 111835675',
        url: 'https://patents.google.com/patent/CN111835675A',
        status: false
      }, {
        text: 'US 20200313901',
        url: 'https://patents.google.com/patent/US20200313901A1',
        status: patentStatus.granted
      }, {
        text: 'EP EP3716526',
        url: 'https://patents.google.com/patent/EP3716526A1',
        status: false
      }],
      intro: '一種基於區塊鏈的網路通話身份驗證方法'
    }, {
      year: '2020',
      inventors: [patentSelf],
      name: '電子裝置與資源健康管理方法',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I704783',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI704783',
        status: patentStatus.granted
      }],
      intro: '一種資源健康性的檢測方法，適用於跨網域與跨通訊協定'
    }, {
      year: '2020',
      inventors: [patentSelf],
      name: '基於嵌入式視窗的網頁加載方法及其裝置',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I692232',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI692232',
        status: patentStatus.granted
      }],
      intro: '一種網頁的HTTP/HTTPS混合內容呈現方式'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: '顯示裝置及其顯示方法',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201947383',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201947383',
        status: false
      }],
      intro: '一種圖層式內容管理系統'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: '電子裝置及音訊錄音控制方法',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I672630',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI672630',
        status: patentStatus.granted
      }],
      intro: '一種可按壓錄音的通話'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: '網頁內容自我保護方法及伺服器',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I669624',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669624',
        status: patentStatus.granted
      }, {
        text: 'CN 111079192',
        url: 'https://patents.google.com/patent/CN111079192A',
        status: patentStatus.granted
      }, {
        text: 'US 20200089904',
        url: 'https://patents.google.com/patent/US20200089904A1',
        status: patentStatus.granted
      }],
      intro: '一種基於一次性密碼的網頁自我保護方法'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: '電子裝置與其離線更新程式的方法',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I669614',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669614',
        status: patentStatus.granted
      }, {
        text: 'CN 110362322',
        url: 'https://patents.google.com/patent/CN110362322A',
        status: false
      }],
      intro: '一種藉由內嵌式瀏覽器實踐更新離線程式的方法'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: '電子裝置與其視窗管理方法',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201926017',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201926017',
        status: false
      }],
      intro: '一種偵測瀏覽器視窗的依賴的方法'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: '電子裝置與其網頁應用程式介面的離線運行方法',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201917568',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201917568',
        status: false
      }],
      intro: '一種用於離線情境的Web APIs'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: '電子裝置及其基於拖放操作的控制方法',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201905670',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201905670',
        status: false
      }],
      intro: '一種可在瀏覽器上拖放的撥號方式'
    }, {
      year: '2018',
      inventors: [patentSelf],
      name: '電子裝置與其操作方法以及伺服器',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I641969',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI641969',
        status: patentStatus.granted
      }, {
        text: 'CN 109428925',
        url: 'https://patents.google.com/patent/CN109428925A',
        status: patentStatus.granted
      }, {
        text: 'US 20190007520',
        url: 'https://patents.google.com/patent/US20190007520A1',
        status: false
      }],
      intro: '一種適用在線與離線情境的基於瀏覽器的靈活語音方法'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.inventors.map(function (i) {
          return i.name;
        }).join(symbol.and), ", (").concat(item.year, "), \u201C").concat(item.name, "\u201D, \u7533\u8ACB\u4EBA").concat(item.applicant);
      },
      linkText: function linkText(link) {
        return link.text;
      },
      generateAbstract: function generateAbstract(item) {
        return "".concat(item.intro);
      },
      linkGa: function linkGa(link) {
        var rmSpace = function rmSpace(t) {
          return t.split(' ').join('');
        };

        var text = rmSpace(link.text);
        return "patent-".concat(text.toLowerCase());
      }
    }
  },
  award: {
    title: '獎項',
    items: [{
      name: '年度個人累積申請專利獎',
      originalInfo: false,
      years: ['2017', '2018'],
      by: 'Acer Inc.'
    }, {
      name: '碩士論文計畫發表會最佳論文獎',
      originalInfo: false,
      years: ['2016'],
      by: '國立中央大學資訊管理學系'
    }, {
      name: '桃園縣千里馬尋桃花源創業競賽電子商務組冠軍',
      originalInfo: false,
      years: ['2015'],
      by: '國立中央大學'
    }, {
      name: 'Google AdWords Challenge 亞軍',
      originalInfo: false,
      years: ['2013'],
      by: 'Google Inc.'
    }, {
      name: '資訊學群專題成果競賽網路應用組冠軍',
      originalInfo: false,
      years: ['2013'],
      by: '國立屏東商業技術學院'
    }, {
      name: '班級網頁製作比賽冠軍',
      originalInfo: false,
      years: ['2005', '2007'],
      by: '屏東縣明正國中'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.name, " | ").concat(item.years.join(symbol.and), "\u5E74\u7531").concat(item.by, "\u9812\u767C");
      }
    }
  },
  publication: {
    title: '著作',
    items: [{
      year: '2020',
      authors: [{
        name: '劉成豪'
      }, {
        name: '唐運佳'
      }, pubSelf, {
        name: '謝依靜'
      }],
      name: '行動搜尋下，你會越看越愛它嗎？使用者知識與螢幕尺寸如何影響品牌效果',
      on: '中山管理評論',
      note: 'DOI: 10.6160/SYSMR.202009_28(3).0001',
      links: [{
        name: 'LINK',
        url: 'http://mgtr.cm.nsysu.edu.tw/fulljournal_process.php?id=148&pno=M5f6998fdb6ae0&p=379',
        ga: 'paper_2020-1'
      }]
    }, {
      year: '2016',
      authors: [pubSelf],
      name: '以說服知識模式與螢幕尺寸探討關鍵字廣告的重複曝光對品牌記憶與品牌態度之影響',
      on: '國立中央大學，碩士論文',
      note: '',
      links: [{
        name: 'LINK',
        url: 'https://hdl.handle.net/11296/x26pvn',
        ga: 'master_thesis'
      }]
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.authors.map(function (i) {
          return i.name;
        }).join(symbol.and), "\uFF0C\uFF08").concat(item.year, "\uFF09\uFF0C\u201C").concat(item.name, "\u201D\uFF0C").concat(item.on, ". ").concat(item.note);
      },
      linkText: function linkText(link) {
        return link.name;
      },
      linkGa: function linkGa(link) {
        return link.ga;
      }
    }
  },
  certification: {
    title: '認證',
    items: [{
      maintitle: '2023年Google數位人才認證 - Google Ads 領域',
      subtitle: '經由通過Google Ads搜尋廣告認證、影片廣告認證等'
    }, {
      maintitle: '2023年Google數位人才認證 - Google Cloud 領域',
      subtitle: '經由證明具備 Google Cloud 的 Infrastructure, Networking, Security, Data, ML, and AI 等知識'
    }, {
      maintitle: '2023年Google數位人才認證 - Google Analytics 領域',
      subtitle: '經由通過Google Analytics認證'
    }],
    formatter: {
      itemMaintitle: function itemMaintitle(item) {
        return item.maintitle;
      },
      itemSubtitle: function itemSubtitle(item) {
        return item.subtitle;
      }
    }
  },
  nonprofit: {
    title: '公益小專案',
    items: [{
      name: '台語兒',
      description: '免費應用程式與服務，協助人們在遇到需要台語溝通的時候，可以快速方便的查詢到所需的台語語音。自2013年開始服務。',
      links: [{
        url: 'https://baconbao.github.io/TaiwaneseWizard/',
        ga: 'tww_website'
      }],
      live: false
    }, {
      name: 'LuckyBacon',
      description: '開放原始碼的免費小型抽獎程式，協助行銷人員或是研究生等在需要抽獎時可以快速擺放獎項與完成抽獎。自2016年開始服務。',
      links: [{
        url: 'https://baconbao.github.io/LuckyBacon/',
        ga: 'luckybacon'
      }],
      live: true
    }],
    formatter: {
      itemTextName: function itemTextName(item) {
        return item.name;
      },
      itemTextDescription: function itemTextDescription(item) {
        return item.description;
      },
      linkGa: function linkGa(link) {
        return link.ga;
      },
      serviceState: function serviceState(item) {
        var res = item.live ? '' : '服務已停止';
        return res;
      }
    }
  },
  esport: {
    title: '遊戲/電競',
    description: '我是個算老的CSer， LernHerN 是我在遊戲中使用的名稱，我擅長用影音去推廣電競，我創作的影片幾乎都沒有個人營利，希望你會喜歡。如果在遊戲中遇到我，就跟我打個招呼吧！',
    promotion: '精選兩部影片：',
    links: [{
      text: 'Remembrance of Counter-Strike 1.6',
      url: 'https://www.youtube.com/watch?v=nrUMZZiheLU',
      ga: 'cs_movie_1'
    }, {
      text: '1 Year of "SK.Delpan"',
      url: 'https://www.youtube.com/watch?v=gm93yGPvMAM',
      ga: 'cs_movie_2'
    }],
    formatter: {
      linkText: function linkText(link) {
        return link.text;
      },
      linkGa: function linkGa(link) {
        return link.ga;
      }
    }
  },
  contact: {
    title: '聯絡'
  },
  social: {
    title: '',
    text: '',
    links: [{
      text: 'GitHub',
      url: 'https://github.com/baconbao',
      ga: 'follow_github'
    }, {
      text: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=OKdHx2YAAAAJ',
      ga: 'follow_gscholar'
    }],
    formatter: {
      linkText: function linkText(link) {
        return link.text;
      },
      linkGa: function linkGa(link) {
        return link.ga;
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS96aC10dy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJyZXNlYXJjaEludGVyZXN0IiwidGl0bGUiLCJpdGVtcyIsInRleHQiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsImNlcnRpZmljYXRpb24iLCJtYWludGl0bGUiLCJzdWJ0aXRsZSIsIml0ZW1NYWludGl0bGUiLCJpdGVtU3VidGl0bGUiLCJub25wcm9maXQiLCJkZXNjcmlwdGlvbiIsImxpdmUiLCJpdGVtVGV4dE5hbWUiLCJpdGVtVGV4dERlc2NyaXB0aW9uIiwic2VydmljZVN0YXRlIiwicmVzIiwiZXNwb3J0IiwicHJvbW90aW9uIiwiY29udGFjdCIsInNvY2lhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7Ozs7OztBQU9BLElBQU1BLE1BQU0sR0FBRztBQUNYQyxLQUFHLEVBQUU7QUFETSxDQUFmO0FBR0EsSUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUU7QUFEUSxDQUFyQjtBQUdBLElBQU1DLFVBQVUsR0FBRztBQUNmQyxNQUFJLEVBQUUsS0FEUztBQUVmQyxNQUFJLEVBQUU7QUFGUyxDQUFuQjtBQUlBLElBQU1DLE9BQU8sR0FBRztBQUNaRixNQUFJLEVBQUUsS0FETTtBQUVaQyxNQUFJLEVBQUU7QUFGTSxDQUFoQjtBQUtBLElBQU1FLElBQUksR0FBRztBQUNUQyxNQUFJLEVBQUUsT0FERztBQUVUQyxXQUFTLEVBQUUsNEJBRkY7QUFHVEMsaUJBQWUsRUFBRSwyQ0FIUjtBQUlUQyxhQUFXLEVBQUUsb0JBSko7QUFLVFosUUFBTSxFQUFOQSxNQUxTO0FBTVRhLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUUsTUFETDtBQUVGVCxRQUFJLEVBQUUsVUFGSjtBQUdGVSxXQUFPLEVBQUUsS0FIUDtBQUlGQyxTQUFLLEVBQUU7QUFKTCxHQU5HO0FBWVRDLGtCQUFnQixFQUFFO0FBQ2RDLFNBQUssRUFBRSxNQURPO0FBRWRDLFNBQUssRUFBRSxDQUNIO0FBQ0lDLFVBQUksRUFBRTtBQURWLEtBREcsRUFJSDtBQUNJQSxVQUFJLEVBQUU7QUFEVixLQUpHLEVBT0g7QUFDSUEsVUFBSSxFQUFFO0FBRFYsS0FQRyxDQUZPO0FBYWRDLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDSCxJQUFsQjtBQUFBO0FBREg7QUFiRyxHQVpUO0FBNkJUSSxLQUFHLEVBQUU7QUFDRE4sU0FBSyxFQUFFLElBRE47QUFFREMsU0FBSyxFQUFFLENBQ0g7QUFDSU0sWUFBTSxFQUFFLEtBRFo7QUFFSUMsWUFBTSxFQUFFLFFBRlo7QUFHSUMsVUFBSSxFQUFFO0FBSFYsS0FERyxFQU1IO0FBQ0lGLFlBQU0sRUFBRSxJQURaO0FBRUlDLFlBQU0sRUFBRSxRQUZaO0FBR0lDLFVBQUksRUFBRTtBQUhWLEtBTkcsRUFXSDtBQUNJRixZQUFNLEVBQUUsSUFEWjtBQUVJQyxZQUFNLEVBQUUsWUFGWjtBQUdJQyxVQUFJLEVBQUU7QUFIVixLQVhHLENBRk47QUFtQkROLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDRSxNQUFsQixnQkFBOEJGLElBQUksQ0FBQ0csTUFBbkMsbUJBQTZDSCxJQUFJLENBQUNJLElBQWxEO0FBQUE7QUFESDtBQW5CVixHQTdCSTtBQW9EVEMsS0FBRyxFQUFFO0FBQ0RWLFNBQUssRUFBRSxJQUROO0FBRURDLFNBQUssRUFBRSxDQUNIO0FBQ0lVLGNBQVEsRUFBRSxRQURkO0FBRUlDLFlBQU0sRUFBRSxTQUZaO0FBR0lDLFNBQUcsRUFBRSxVQUhUO0FBSUlKLFVBQUksRUFBRSxRQUpWO0FBS0lLLFNBQUcsRUFBRTtBQUxULEtBREcsRUFRSDtBQUNJSCxjQUFRLEVBQUUsUUFEZDtBQUVJQyxZQUFNLEVBQUUsUUFGWjtBQUdJQyxTQUFHLEVBQUUsTUFIVDtBQUlJSixVQUFJLEVBQUUsT0FKVjtBQUtJSyxTQUFHLEVBQUU7QUFMVCxLQVJHLENBRk47QUFrQkRYLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDTSxRQUFsQixnQkFBZ0NOLElBQUksQ0FBQ08sTUFBckMsZ0JBQWlEUCxJQUFJLENBQUNRLEdBQXRELG1CQUE2RFIsSUFBSSxDQUFDSSxJQUFsRSxtQkFBMEVKLElBQUksQ0FBQ1MsR0FBL0U7QUFBQTtBQURIO0FBbEJWLEdBcERJO0FBMEVUQyxRQUFNLEVBQUU7QUFDSmYsU0FBSyxFQUFFLE9BREg7QUFFSkMsU0FBSyxFQUFFLENBQ0g7QUFDSWUsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLGtCQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsRUFFSDtBQUFFaUIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsZ0RBQTdCO0FBQStFQyxjQUFNLEVBQUU7QUFBdkYsT0FGRyxFQUdIO0FBQUVuQixZQUFJLEVBQUUsZ0JBQVI7QUFBMEJrQixXQUFHLEVBQUUsbURBQS9CO0FBQW9GQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQXpHLE9BSEcsRUFJSDtBQUFFaUIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsK0NBQTdCO0FBQThFQyxjQUFNLEVBQUU7QUFBdEYsT0FKRyxDQVBYO0FBYUl2QixXQUFLLEVBQUU7QUFiWCxLQURHLEVBZ0JIO0FBQ0lrQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUC9CLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsZUFMVjtBQU1JK0IsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRWpCLFlBQUksRUFBRSxZQUFSO0FBQXNCa0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFckMsWUFBWSxDQUFDQztBQUE1RyxPQURHLENBUFg7QUFVSWEsV0FBSyxFQUFFO0FBVlgsS0FoQkcsRUE0Qkg7QUFDSWtCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQL0IsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxvQkFMVjtBQU1JK0IsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRWpCLFlBQUksRUFBRSxZQUFSO0FBQXNCa0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFckMsWUFBWSxDQUFDQztBQUE1RyxPQURHLENBUFg7QUFVSWEsV0FBSyxFQUFFO0FBVlgsS0E1QkcsRUF3Q0g7QUFDSWtCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQL0IsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxZQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsNERBQTdCO0FBQTJGQyxjQUFNLEVBQUU7QUFBbkcsT0FERyxDQVBYO0FBVUl2QixXQUFLLEVBQUU7QUFWWCxLQXhDRyxFQW9ESDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLGVBTFY7QUFNSStCLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVqQixZQUFJLEVBQUUsWUFBUjtBQUFzQmtCLFdBQUcsRUFBRSwwREFBM0I7QUFBdUZDLGNBQU0sRUFBRXJDLFlBQVksQ0FBQ0M7QUFBNUcsT0FERyxDQVBYO0FBVUlhLFdBQUssRUFBRTtBQVZYLEtBcERHLEVBZ0VIO0FBQ0lrQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUC9CLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsZ0JBTFY7QUFNSStCLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVqQixZQUFJLEVBQUUsWUFBUjtBQUFzQmtCLFdBQUcsRUFBRSwwREFBM0I7QUFBdUZDLGNBQU0sRUFBRXJDLFlBQVksQ0FBQ0M7QUFBNUcsT0FERyxFQUVIO0FBQUVpQixZQUFJLEVBQUUsY0FBUjtBQUF3QmtCLFdBQUcsRUFBRSxnREFBN0I7QUFBK0VDLGNBQU0sRUFBRXJDLFlBQVksQ0FBQ0M7QUFBcEcsT0FGRyxFQUdIO0FBQUVpQixZQUFJLEVBQUUsZ0JBQVI7QUFBMEJrQixXQUFHLEVBQUUsbURBQS9CO0FBQW9GQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQXpHLE9BSEcsQ0FQWDtBQVlJYSxXQUFLLEVBQUU7QUFaWCxLQWhFRyxFQThFSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLGlCQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsRUFFSDtBQUFFaUIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsZ0RBQTdCO0FBQStFQyxjQUFNLEVBQUU7QUFBdkYsT0FGRyxDQVBYO0FBV0l2QixXQUFLLEVBQUU7QUFYWCxLQTlFRyxFQTJGSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLGNBTFY7QUFNSStCLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVqQixZQUFJLEVBQUUsY0FBUjtBQUF3QmtCLFdBQUcsRUFBRSw0REFBN0I7QUFBMkZDLGNBQU0sRUFBRTtBQUFuRyxPQURHLENBUFg7QUFVSXZCLFdBQUssRUFBRTtBQVZYLEtBM0ZHLEVBdUdIO0FBQ0lrQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUC9CLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsdUJBTFY7QUFNSStCLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVqQixZQUFJLEVBQUUsY0FBUjtBQUF3QmtCLFdBQUcsRUFBRSw0REFBN0I7QUFBMkZDLGNBQU0sRUFBRTtBQUFuRyxPQURHLENBUFg7QUFVSXZCLFdBQUssRUFBRTtBQVZYLEtBdkdHLEVBbUhIO0FBQ0lrQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUC9CLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsbUJBTFY7QUFNSStCLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVqQixZQUFJLEVBQUUsY0FBUjtBQUF3QmtCLFdBQUcsRUFBRSw0REFBN0I7QUFBMkZDLGNBQU0sRUFBRTtBQUFuRyxPQURHLENBUFg7QUFVSXZCLFdBQUssRUFBRTtBQVZYLEtBbkhHLEVBK0hIO0FBQ0lrQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUC9CLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsaUJBTFY7QUFNSStCLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVqQixZQUFJLEVBQUUsWUFBUjtBQUFzQmtCLFdBQUcsRUFBRSwwREFBM0I7QUFBdUZDLGNBQU0sRUFBRXJDLFlBQVksQ0FBQ0M7QUFBNUcsT0FERyxFQUVIO0FBQUVpQixZQUFJLEVBQUUsY0FBUjtBQUF3QmtCLFdBQUcsRUFBRSxnREFBN0I7QUFBK0VDLGNBQU0sRUFBRXJDLFlBQVksQ0FBQ0M7QUFBcEcsT0FGRyxFQUdIO0FBQUVpQixZQUFJLEVBQUUsZ0JBQVI7QUFBMEJrQixXQUFHLEVBQUUsbURBQS9CO0FBQW9GQyxjQUFNLEVBQUU7QUFBNUYsT0FIRyxDQVBYO0FBWUl2QixXQUFLLEVBQUU7QUFaWCxLQS9IRyxDQUZIO0FBZ0pKSyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ1ksU0FBTCxDQUFlSyxHQUFmLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDcEMsSUFBVDtBQUFBLFNBQW5CLEVBQWtDcUMsSUFBbEMsQ0FBdUMxQyxNQUFNLENBQUNDLEdBQTlDLENBQWIsZ0JBQXFFc0IsSUFBSSxDQUFDVyxJQUExRSxzQkFBcUZYLElBQUksQ0FBQ2xCLElBQTFGLHVDQUF1R2tCLElBQUksQ0FBQ2EsU0FBNUc7QUFBQSxPQURIO0FBRVBPLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3hCLElBQWY7QUFBQSxPQUZIO0FBR1B5QixzQkFBZ0IsRUFBRSwwQkFBQ3RCLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDUCxLQUFsQjtBQUFBLE9BSFg7QUFJUDhCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRCxFQUFVO0FBQ2QsWUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUSxHQUFSLEVBQWFQLElBQWIsQ0FBa0IsRUFBbEIsQ0FBUDtBQUFBLFNBQWhCOztBQUNBLFlBQU10QixJQUFJLEdBQUcyQixPQUFPLENBQUNILElBQUksQ0FBQ3hCLElBQU4sQ0FBcEI7QUFDQSxnQ0FBaUJBLElBQUksQ0FBQzhCLFdBQUwsRUFBakI7QUFDSDtBQVJNO0FBaEpQLEdBMUVDO0FBcU9UQyxPQUFLLEVBQUU7QUFDSGpDLFNBQUssRUFBRSxJQURKO0FBRUhDLFNBQUssRUFBRSxDQUNIO0FBQ0lkLFVBQUksRUFBRSxhQURWO0FBRUkrQyxrQkFBWSxFQUFFLEtBRmxCO0FBR0lDLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBSFg7QUFJSUMsUUFBRSxFQUFFO0FBSlIsS0FERyxFQU9IO0FBQ0lqRCxVQUFJLEVBQUUsZ0JBRFY7QUFFSStDLGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRTtBQUpSLEtBUEcsRUFhSDtBQUNJakQsVUFBSSxFQUFFLHVCQURWO0FBRUkrQyxrQkFBWSxFQUFFLEtBRmxCO0FBR0lDLFdBQUssRUFBRSxDQUFDLE1BQUQsQ0FIWDtBQUlJQyxRQUFFLEVBQUU7QUFKUixLQWJHLEVBbUJIO0FBQ0lqRCxVQUFJLEVBQUUsNkJBRFY7QUFFSStDLGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRTtBQUpSLEtBbkJHLEVBeUJIO0FBQ0lqRCxVQUFJLEVBQUUsbUJBRFY7QUFFSStDLGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRTtBQUpSLEtBekJHLEVBK0JIO0FBQ0lqRCxVQUFJLEVBQUUsWUFEVjtBQUVJK0Msa0JBQVksRUFBRSxLQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUhYO0FBSUlDLFFBQUUsRUFBRTtBQUpSLEtBL0JHLENBRko7QUF3Q0hqQyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ2xCLElBQWxCLGdCQUE0QmtCLElBQUksQ0FBQzhCLEtBQUwsQ0FBV1gsSUFBWCxDQUFnQjFDLE1BQU0sQ0FBQ0MsR0FBdkIsQ0FBNUIseUJBQTREc0IsSUFBSSxDQUFDK0IsRUFBakU7QUFBQTtBQURIO0FBeENSLEdBck9FO0FBaVJUQyxhQUFXLEVBQUU7QUFDVHJDLFNBQUssRUFBRSxJQURFO0FBRVRDLFNBQUssRUFBRSxDQUNIO0FBQ0llLFVBQUksRUFBRSxNQURWO0FBRUlzQixhQUFPLEVBQUUsQ0FDTDtBQUFFbkQsWUFBSSxFQUFFO0FBQVIsT0FESyxFQUVMO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BRkssRUFHTEUsT0FISyxFQUlMO0FBQUVGLFlBQUksRUFBRTtBQUFSLE9BSkssQ0FGYjtBQVFJQSxVQUFJLEVBQUUsbUNBUlY7QUFTSW9ELFFBQUUsRUFBRSxRQVRSO0FBVUlDLFVBQUksRUFBRSxzQ0FWVjtBQVdJckIsV0FBSyxFQUFFLENBQ0g7QUFBRWhDLFlBQUksRUFBRSxNQUFSO0FBQWdCaUMsV0FBRyxFQUFFLHFGQUFyQjtBQUE0R3FCLFVBQUUsRUFBRTtBQUFoSCxPQURHO0FBWFgsS0FERyxFQWdCSDtBQUNJekIsVUFBSSxFQUFFLE1BRFY7QUFFSXNCLGFBQU8sRUFBRSxDQUNMakQsT0FESyxDQUZiO0FBS0lGLFVBQUksRUFBRSx1Q0FMVjtBQU1Jb0QsUUFBRSxFQUFFLGFBTlI7QUFPSUMsVUFBSSxFQUFFLEVBUFY7QUFRSXJCLFdBQUssRUFBRSxDQUNIO0FBQUVoQyxZQUFJLEVBQUUsTUFBUjtBQUFnQmlDLFdBQUcsRUFBRSxxQ0FBckI7QUFBNERxQixVQUFFLEVBQUU7QUFBaEUsT0FERztBQVJYLEtBaEJHLENBRkU7QUErQlR0QyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ2lDLE9BQUwsQ0FBYWhCLEdBQWIsQ0FBaUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNwQyxJQUFUO0FBQUEsU0FBakIsRUFBZ0NxQyxJQUFoQyxDQUFxQzFDLE1BQU0sQ0FBQ0MsR0FBNUMsQ0FBYix5QkFBa0VzQixJQUFJLENBQUNXLElBQXZFLCtCQUFpRlgsSUFBSSxDQUFDbEIsSUFBdEYseUJBQStGa0IsSUFBSSxDQUFDa0MsRUFBcEcsZUFBMkdsQyxJQUFJLENBQUNtQyxJQUFoSDtBQUFBLE9BREg7QUFFUGYsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDdkMsSUFBZjtBQUFBLE9BRkg7QUFHUHlDLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2UsRUFBZjtBQUFBO0FBSEQ7QUEvQkYsR0FqUko7QUFzVFRDLGVBQWEsRUFBRTtBQUNYMUMsU0FBSyxFQUFFLElBREk7QUFFWEMsU0FBSyxFQUFFLENBQ0g7QUFDSTBDLGVBQVMsRUFBRSxtQ0FEZjtBQUVJQyxjQUFRLEVBQUU7QUFGZCxLQURHLEVBS0g7QUFDSUQsZUFBUyxFQUFFLHFDQURmO0FBRUlDLGNBQVEsRUFBRTtBQUZkLEtBTEcsRUFTSDtBQUNJRCxlQUFTLEVBQUUseUNBRGY7QUFFSUMsY0FBUSxFQUFFO0FBRmQsS0FURyxDQUZJO0FBZ0JYekMsYUFBUyxFQUFFO0FBQ1AwQyxtQkFBYSxFQUFFLHVCQUFDeEMsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3NDLFNBQWY7QUFBQSxPQURSO0FBRVBHLGtCQUFZLEVBQUUsc0JBQUN6QyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDdUMsUUFBZjtBQUFBO0FBRlA7QUFoQkEsR0F0VE47QUEyVVRHLFdBQVMsRUFBRTtBQUNQL0MsU0FBSyxFQUFFLE9BREE7QUFFUEMsU0FBSyxFQUFFLENBQ0g7QUFDSWQsVUFBSSxFQUFFLEtBRFY7QUFFSTZELGlCQUFXLEVBQUUsMERBRmpCO0FBR0k3QixXQUFLLEVBQUUsQ0FDSDtBQUNJQyxXQUFHLEVBQUUsNkNBRFQ7QUFFSXFCLFVBQUUsRUFBRTtBQUZSLE9BREcsQ0FIWDtBQVNJUSxVQUFJLEVBQUU7QUFUVixLQURHLEVBWUg7QUFDSTlELFVBQUksRUFBRSxZQURWO0FBRUk2RCxpQkFBVyxFQUFFLDREQUZqQjtBQUdJN0IsV0FBSyxFQUFFLENBQ0g7QUFDSUMsV0FBRyxFQUFFLHdDQURUO0FBRUlxQixVQUFFLEVBQUU7QUFGUixPQURHLENBSFg7QUFTSVEsVUFBSSxFQUFFO0FBVFYsS0FaRyxDQUZBO0FBMEJQOUMsYUFBUyxFQUFFO0FBQ1ArQyxrQkFBWSxFQUFFLHNCQUFDN0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2xCLElBQWY7QUFBQSxPQURQO0FBRVBnRSx5QkFBbUIsRUFBRSw2QkFBQzlDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUMyQyxXQUFmO0FBQUEsT0FGZDtBQUdQcEIsWUFBTSxFQUFFLGdCQUFDRixJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDZSxFQUFmO0FBQUEsT0FIRDtBQUlQVyxrQkFBWSxFQUFFLHNCQUFDL0MsSUFBRCxFQUFVO0FBQ3BCLFlBQU1nRCxHQUFHLEdBQUloRCxJQUFJLENBQUM0QyxJQUFOLEdBQWMsRUFBZCxHQUFtQixPQUEvQjtBQUNBLGVBQU9JLEdBQVA7QUFDSDtBQVBNO0FBMUJKLEdBM1VGO0FBK1dUQyxRQUFNLEVBQUU7QUFDSnRELFNBQUssRUFBRSxPQURIO0FBRUpnRCxlQUFXLEVBQUUseUZBRlQ7QUFHSk8sYUFBUyxFQUFFLFNBSFA7QUFJSnBDLFNBQUssRUFBRSxDQUNIO0FBQUVqQixVQUFJLEVBQUUsbUNBQVI7QUFBNkNrQixTQUFHLEVBQUUsNkNBQWxEO0FBQWlHcUIsUUFBRSxFQUFFO0FBQXJHLEtBREcsRUFFSDtBQUFFdkMsVUFBSSxFQUFFLHVCQUFSO0FBQWlDa0IsU0FBRyxFQUFFLDZDQUF0QztBQUFxRnFCLFFBQUUsRUFBRTtBQUF6RixLQUZHLENBSkg7QUFRSnRDLGFBQVMsRUFBRTtBQUNQc0IsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDeEIsSUFBZjtBQUFBLE9BREg7QUFFUDBCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2UsRUFBZjtBQUFBO0FBRkQ7QUFSUCxHQS9XQztBQTRYVGUsU0FBTyxFQUFFO0FBQ0x4RCxTQUFLLEVBQUU7QUFERixHQTVYQTtBQStYVHlELFFBQU0sRUFBRTtBQUNKekQsU0FBSyxFQUFFLEVBREg7QUFFSkUsUUFBSSxFQUFFLEVBRkY7QUFHSmlCLFNBQUssRUFBRSxDQUNIO0FBQ0lqQixVQUFJLEVBQUUsUUFEVjtBQUVJa0IsU0FBRyxFQUFFLDZCQUZUO0FBR0lxQixRQUFFLEVBQUU7QUFIUixLQURHLEVBTUg7QUFDSXZDLFVBQUksRUFBRSxnQkFEVjtBQUVJa0IsU0FBRyxFQUFFLHdEQUZUO0FBR0lxQixRQUFFLEVBQUU7QUFIUixLQU5HLENBSEg7QUFlSnRDLGFBQVMsRUFBRTtBQUNQc0IsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDeEIsSUFBZjtBQUFBLE9BREg7QUFFUDBCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2UsRUFBZjtBQUFBO0FBRkQ7QUFmUDtBQS9YQyxDQUFiO0FBcVplbkQsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDY5YzhjYWQ0NTUxYTFjMDRjNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIERhdGEgWkgtVFdcclxuICpcclxuICogQGF1dGhvciBCYWNvbkJhb1xyXG4gKiBAbGluayBodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pb1xyXG4gKi9cclxuXHJcbmNvbnN0IHN5bWJvbCA9IHtcclxuICAgIGFuZDogJ+OAgScsXHJcbn07XHJcbmNvbnN0IHBhdGVudFN0YXR1cyA9IHtcclxuICAgIGdyYW50ZWQ6ICfmoLjlh4YnLFxyXG59O1xyXG5jb25zdCBwYXRlbnRTZWxmID0ge1xyXG4gICAgbmFtZTogJ+ael+iAleiRhicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5jb25zdCBwdWJTZWxmID0ge1xyXG4gICAgbmFtZTogJ+ael+iAleiRhicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICAgIGxhbmc6ICd6aC10dycsXHJcbiAgICBwYWdlVGl0bGU6ICfmiJHmmK8gQmFjb25CYW8sIOaIkeeGseaEm+aOoue0ouenkeaKgOiIh+Wug+eahOaHieeUqO+8gScsXHJcbiAgICBwYWdlRGVzY3JpcHRpb246ICfmiJHmmK8gQmFjb25CYW8g77yM5LiA5YCL55m854++54ax5oOF5bCx5b6I6Zuj5YGc5LiL6IWz5q2l55qE5Lq677yM54ax5oSb5o6i57Si56eR5oqA6IiH5a6D55qE5oeJ55So44CCJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2UuanBnJyxcclxuICAgIHN5bWJvbCxcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWxsbzogJ+WXqO+8geaIkeaYrycsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAn5p6X6ICV6JGGJyxcclxuICAgICAgICBpbnRybzogJ+eGseaEm+aOoue0oklU5oeJ55So6IiHSVTnm7jpl5znmoTmtojosrvogIXooYzngrrvvIznm67liY3lnKjoh7rngaPlpKflrbjmlLvoroDljZrlo6vlrbjkvY3jgILmiJHllpzmraHlvpzlvonlnKjnn6XorZjnmoTmtbfmtIvoo6HvvIzmnInmmYLlnKjpgJnniYfmtbfmtIvoo6Hnv7vmu77jgIHos6PokIzjgIHmi43ogprnmq7jgIIgKOKXj1xcJ+KXoVxcJ+KXjyknLFxyXG4gICAgfSxcclxuICAgIHJlc2VhcmNoSW50ZXJlc3Q6IHtcclxuICAgICAgICB0aXRsZTogJ+eglOeptuiIiOi2oycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlYuaHieeUqCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfmtojosrvogIXooYzngronLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5pW45L2N6KGM6Yq3IC8g57ay6Lev6KGM6Yq3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0udGV4dH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWR1OiB7XHJcbiAgICAgICAgdGl0bGU6ICflrbjmrbcnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ+WNmuWjq+eUnycsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICflnIvnq4voh7rngaPlpKflrbgnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+izh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ+eiqeWjqycsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICflnIvnq4vkuK3lpK7lpKflrbgnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+izh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ+WtuOWjqycsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICflnIvnq4vlsY/mnbHllYbmpa3mioDooZPlrbjpmaInLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+izh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmRlZ3JlZX0gfCAke2l0ZW0uc2Nob29sfe+8jCR7aXRlbS5kZXB0fWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHA6IHtcclxuICAgICAgICB0aXRsZTogJ+e2k+attycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE2LzknLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAyMC8xMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICflro/nooHogqHku73mnInpmZDlhazlj7gnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+WDueWAvOWJteaWsOS4reW/gycsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICflsIjmoYjlt6XnqIvluKsnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVGltZTogJzIwMTQvMScsXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6ICcyMDE0LzInLFxyXG4gICAgICAgICAgICAgICAgY29tOiAn546J5bGx6K2J5Yi4JyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICfpm7vlrZDllYbli5npg6gnLFxyXG4gICAgICAgICAgICAgICAgcG9zOiAn5a+m57+S55SfJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZnJvbVRpbWV9IH4gJHtpdGVtLnRvVGltZX0gfCAke2l0ZW0uY29tfe+8jCR7aXRlbS5kZXB0fe+8jCR7aXRlbS5wb3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGludmVudDoge1xyXG4gICAgICAgIHRpdGxlOiAn5bCI5YipL+eZvOaYjicsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6amX6K2J57ay6Lev6YCa6Kmx6Lqr5Lu955qE5pa55rOV5Y+K55u46Zec6KOd572uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk3MTEyOTMnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTcxMTI5MycsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTE4MzU2NzUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTE4MzU2NzVBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMjAwMzEzOTAxJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAyMDAzMTM5MDFBMScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdFUCBFUDM3MTY1MjYnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvRVAzNzE2NTI2QTEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7ln7rmlrzljYDloYrpj4jnmoTntrLot6/pgJroqbHouqvku73pqZforYnmlrnms5UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIfos4fmupDlgaXlurfnrqHnkIbmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcwNDc4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzA0NzgzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu6LOH5rqQ5YGl5bq35oCn55qE5qqi5ris5pa55rOV77yM6YGp55So5pa86Leo57ay5Z+f6IiH6Leo6YCa6KiK5Y2U5a6aJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Z+65pa85bWM5YWl5byP6KaW56qX55qE57ay6aCB5Yqg6LyJ5pa55rOV5Y+K5YW26KOd572uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2OTIyMzInLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY5MjIzMicsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeorue2sumggeeahEhUVFAvSFRUUFPmt7flkIjlhaflrrnlkYjnj77mlrnlvI8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpoa/npLroo53nva7lj4rlhbbpoa/npLrmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTQ3MzgzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTk0NzM4MycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruWcluWxpOW8j+WFp+WuueeuoeeQhuezu+e1sScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruWPiumfs+ioiumMhOmfs+aOp+WItuaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjcyNjMwJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2NzI2MzAnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7lj6/mjInlo5PpjITpn7PnmoTpgJroqbEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfntrLpoIHlhaflrrnoh6rmiJHkv53orbfmlrnms5Xlj4rkvLrmnI3lmagnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYyNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjI0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTA3OTE5MicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTA3OTE5MkEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAwODk5MDQnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDA4OTkwNEExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu5Z+65pa85LiA5qyh5oCn5a+G56K855qE57ay6aCB6Ieq5oiR5L+d6K235pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u6IiH5YW26Zui57ea5pu05paw56iL5byP55qE5pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2Njk2MTQnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY2OTYxNCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTAzNjIzMjInLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTAzNjIzMjJBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu6JeJ55Sx5YWn5bWM5byP54CP6Ka95Zmo5a+m6LiQ5pu05paw6Zui57ea56iL5byP55qE5pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u6IiH5YW26KaW56qX566h55CG5pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkyNjAxNycsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MjYwMTcnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7lgbXmuKzngI/opr3lmajoppbnqpfnmoTkvp3os7TnmoTmlrnms5UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIflhbbntrLpoIHmh4nnlKjnqIvlvI/ku4vpnaLnmoTpm6Lnt5rpgYvooYzmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTE3NTY4JywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkxNzU2OCcsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeorueUqOaWvOmboue3muaDheWig+eahFdlYiBBUElzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u5Y+K5YW25Z+65pa85ouW5pS+5pON5L2c55qE5o6n5Yi25pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkwNTY3MCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MDU2NzAnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7lj6/lnKjngI/opr3lmajkuIrmi5bmlL7nmoTmkqXomZ/mlrnlvI8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIflhbbmk43kvZzmlrnms5Xku6Xlj4rkvLrmnI3lmagnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY0MTk2OScsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjQxOTY5Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDEwOTQyODkyNScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjEwOTQyODkyNUEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAxOTAwMDc1MjAnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDE5MDAwNzUyMEExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu6YGp55So5Zyo57ea6IiH6Zui57ea5oOF5aKD55qE5Z+65pa854CP6Ka95Zmo55qE6Z2I5rS76Kqe6Z+z5pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uaW52ZW50b3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIOKAnCR7aXRlbS5uYW1lfeKAnSwg55Sz6KuL5Lq6JHtpdGVtLmFwcGxpY2FudH1gLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgZ2VuZXJhdGVBYnN0cmFjdDogKGl0ZW0pID0+IGAke2l0ZW0uaW50cm99YCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm1TcGFjZSA9ICh0KSA9PiB0LnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gcm1TcGFjZShsaW5rLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwYXRlbnQtJHt0ZXh0LnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGF3YXJkOiB7XHJcbiAgICAgICAgdGl0bGU6ICfnjY7poIUnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflubTluqblgIvkurrntK/nqY3nlLPoq4vlsIjliKnnjY4nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTcnLCAnMjAxOCddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn56Kp5aOr6KuW5paH6KiI55Wr55m86KGo5pyD5pyA5L2z6KuW5paH542OJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE2J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ+Wci+eri+S4reWkruWkp+WtuOizh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmoYPlnJLnuKPljYPph4zppqzlsIvmoYPoirHmupDlibXmpa3nq7bos73pm7vlrZDllYbli5nntYTlhqDou40nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTUnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAn5ZyL56uL5Lit5aSu5aSn5a24JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dvb2dsZSBBZFdvcmRzIENoYWxsZW5nZSDkup7ou40nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnR29vZ2xlIEluYy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6LOH6KiK5a24576k5bCI6aGM5oiQ5p6c56u26LO957ay6Lev5oeJ55So57WE5Yag6LuNJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDEzJ10sXHJcbiAgICAgICAgICAgICAgICBieTogJ+Wci+eri+Wxj+adseWVhualreaKgOihk+WtuOmZoicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnj63ntJrntrLpoIHoo73kvZzmr5Tos73lhqDou40nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMDUnLCAnMjAwNyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICflsY/mnbHnuKPmmI7mraPlnIvkuK0nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5uYW1lfSB8ICR7aXRlbS55ZWFycy5qb2luKHN5bWJvbC5hbmQpfeW5tOeUsSR7aXRlbS5ieX3poJLnmbxgLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHVibGljYXRpb246IHtcclxuICAgICAgICB0aXRsZTogJ+iRl+S9nCcsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ+WKieaIkOixqicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICfllJDpgYvkvbMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICforJ3kvp3pnZwnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+ihjOWLleaQnOWwi+S4i++8jOS9oOacg+i2iueci+i2iuaEm+Wug+WXju+8n+S9v+eUqOiAheefpeitmOiIh+ieouW5leWwuuWvuOWmguS9leW9semfv+WTgeeJjOaViOaenCcsXHJcbiAgICAgICAgICAgICAgICBvbjogJ+S4reWxseeuoeeQhuipleirlicsXHJcbiAgICAgICAgICAgICAgICBub3RlOiAnRE9JOiAxMC42MTYwL1NZU01SLjIwMjAwOV8yOCgzKS4wMDAxJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTElOSycsIHVybDogJ2h0dHA6Ly9tZ3RyLmNtLm5zeXN1LmVkdS50dy9mdWxsam91cm5hbF9wcm9jZXNzLnBocD9pZD0xNDgmcG5vPU01ZjY5OThmZGI2YWUwJnA9Mzc5JywgZ2E6ICdwYXBlcl8yMDIwLTEnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxNicsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Lul6Kqq5pyN55+l6K2Y5qih5byP6IiH6J6i5bmV5bC65a+45o6i6KiO6Zec6Y215a2X5buj5ZGK55qE6YeN6KSH5pud5YWJ5bCN5ZOB54mM6KiY5oa26IiH5ZOB54mM5oWL5bqm5LmL5b2x6Z+/JyxcclxuICAgICAgICAgICAgICAgIG9uOiAn5ZyL56uL5Lit5aSu5aSn5a2477yM56Kp5aOr6KuW5paHJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8xMTI5Ni94MjZwdm4nLCBnYTogJ21hc3Rlcl90aGVzaXMnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5hdXRob3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfe+8jO+8iCR7aXRlbS55ZWFyfe+8ie+8jOKAnCR7aXRlbS5uYW1lfeKAne+8jCR7aXRlbS5vbn0uICR7aXRlbS5ub3RlfWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay5uYW1lLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2VydGlmaWNhdGlvbjoge1xyXG4gICAgICAgIHRpdGxlOiAn6KqN6K2JJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYWludGl0bGU6ICcyMDIz5bm0R29vZ2xl5pW45L2N5Lq65omN6KqN6K2JIC0gR29vZ2xlIEFkcyDpoJjln58nLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICfntpPnlLHpgJrpgY5Hb29nbGUgQWRz5pCc5bCL5buj5ZGK6KqN6K2J44CB5b2x54mH5buj5ZGK6KqN6K2J562JJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnMjAyM+W5tEdvb2dsZeaVuOS9jeS6uuaJjeiqjeitiSAtIEdvb2dsZSBDbG91ZCDpoJjln58nLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICfntpPnlLHorYnmmI7lhbflgpkgR29vZ2xlIENsb3VkIOeahCBJbmZyYXN0cnVjdHVyZSwgTmV0d29ya2luZywgU2VjdXJpdHksIERhdGEsIE1MLCBhbmQgQUkg562J55+l6K2YJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnMjAyM+W5tEdvb2dsZeaVuOS9jeS6uuaJjeiqjeitiSAtIEdvb2dsZSBBbmFseXRpY3Mg6aCY5Z+fJyxcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAn57aT55Sx6YCa6YGOR29vZ2xlIEFuYWx5dGljc+iqjeitiScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbU1haW50aXRsZTogKGl0ZW0pID0+IGl0ZW0ubWFpbnRpdGxlLFxyXG4gICAgICAgICAgICBpdGVtU3VidGl0bGU6IChpdGVtKSA9PiBpdGVtLnN1YnRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbm9ucHJvZml0OiB7XHJcbiAgICAgICAgdGl0bGU6ICflhaznm4rlsI/lsIjmoYgnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflj7Doqp7lhZInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICflhY3osrvmh4nnlKjnqIvlvI/oiIfmnI3li5nvvIzljZTliqnkurrlgJHlnKjpgYfliLDpnIDopoHlj7Doqp7mup3pgJrnmoTmmYLlgJnvvIzlj6/ku6Xlv6vpgJ/mlrnkvr/nmoTmn6XoqaLliLDmiYDpnIDnmoTlj7Doqp7oqp7pn7PjgILoh6oyMDEz5bm06ZaL5aeL5pyN5YuZ44CCJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9UYWl3YW5lc2VXaXphcmQvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICd0d3dfd2Vic2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0x1Y2t5QmFjb24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfplovmlL7ljp/lp4vnorznmoTlhY3osrvlsI/lnovmir3njY7nqIvlvI/vvIzljZTliqnooYzpirfkurrlk6HmiJbmmK/noJTnqbbnlJ/nrYnlnKjpnIDopoHmir3njY7mmYLlj6/ku6Xlv6vpgJ/mk7rmlL7njY7poIXoiIflrozmiJDmir3njY7jgILoh6oyMDE25bm06ZaL5aeL5pyN5YuZ44CCJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9MdWNreUJhY29uLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAnbHVja3liYWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0TmFtZTogKGl0ZW0pID0+IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgaXRlbVRleHREZXNjcmlwdGlvbjogKGl0ZW0pID0+IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgICAgIHNlcnZpY2VTdGF0ZTogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IChpdGVtLmxpdmUpID8gJycgOiAn5pyN5YuZ5bey5YGc5q2iJztcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlc3BvcnQ6IHtcclxuICAgICAgICB0aXRsZTogJ+mBiuaIsi/pm7vnq7YnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn5oiR5piv5YCL566X6ICB55qEQ1Nlcu+8jCBMZXJuSGVyTiDmmK/miJHlnKjpgYrmiLLkuK3kvb/nlKjnmoTlkI3nqLHvvIzmiJHmk4XplbfnlKjlvbHpn7Pljrvmjqjlu6Ppm7vnq7bvvIzmiJHlibXkvZznmoTlvbHniYflub7kuY7pg73mspLmnInlgIvkurrnh5/liKnvvIzluIzmnJvkvaDmnIPllpzmraHjgILlpoLmnpzlnKjpgYrmiLLkuK3pgYfliLDmiJHvvIzlsLHot5/miJHmiZPlgIvmi5vlkbzlkKfvvIEnLFxyXG4gICAgICAgIHByb21vdGlvbjogJ+eyvumBuOWFqemDqOW9seeJh++8micsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVtZW1icmFuY2Ugb2YgQ291bnRlci1TdHJpa2UgMS42JywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1uclVNWlppaGVMVScsIGdhOiAnY3NfbW92aWVfMScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnMSBZZWFyIG9mIFwiU0suRGVscGFuXCInLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWdtOTN5R1B2TUFNJywgZ2E6ICdjc19tb3ZpZV8yJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICAgIHRpdGxlOiAn6IGv57WhJyxcclxuICAgIH0sXHJcbiAgICBzb2NpYWw6IHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dpdEh1YicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYmFjb25iYW8nLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZ2l0aHViJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dvb2dsZSBTY2hvbGFyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL2NpdGF0aW9ucz91c2VyPU9LZEh4MllBQUFBSicsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19nc2Nob2xhcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9