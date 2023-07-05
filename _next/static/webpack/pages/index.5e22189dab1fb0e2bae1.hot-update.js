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
  pageTitle: '我是 BaconBao, 我喜歡徜徉在知識的海洋裡！',
  pageDescription: '我是 BaconBao ，喜歡徜徉在知識的海洋裡，熱愛探索IT應用與IT相關的消費者行為。',
  pageOgImage: 'images/ogimage.jpg',
  symbol: symbol,
  main: {
    hello: '嗨！我是',
    name: 'BaconBao',
    akaName: '林耕葆',
    intro: '我喜歡徜徉在知識的海洋裡，熱愛探索IT應用與IT相關的消費者行為，目前在臺灣大學攻讀博士學位。',
    // intro: '熱愛探索IT應用與IT相關的消費者行為，目前在臺灣大學攻讀博士學位。我喜歡徜徉在知識的海洋裡，有時在這片海洋裡翻滾、賣萌、拍肚皮。 (●\'◡\'●)',
    introEmoji: '(●\'◡\'●)'
  },
  researchInterest: {
    title: '研究興趣',
    items: [{
      text: 'Web應用'
    }, {
      text: '消費者行為'
    }, {
      text: '消費者感知'
    }],
    describe: '雖然我有不少IT開發的經驗，但我更想了解IT消費者與IT互動時的主觀感受與想法。\n因此，我熱愛探索有關IT消費者感知與行為的現象，包含成因(‘why’)與其因果關係(‘how’)，特別是涉及矛盾的現象。',
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.text);
      },
      moreDescribe: function moreDescribe(describe) {
        return describe;
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
        return "".concat(item.degree, " | ").concat(item.dept, ", ").concat(item.school);
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
      by: 'Acer Inc.',
      labels: ['科技', '研究'],
      "with": []
    }, {
      name: '碩士論文計畫發表會最佳論文獎',
      originalInfo: false,
      years: ['2016'],
      by: '國立中央大學資訊管理學系',
      labels: ['研究'],
      "with": []
    }, {
      name: '桃園縣千里馬尋桃花源創業競賽電子商務組冠軍',
      originalInfo: false,
      years: ['2015'],
      by: '國立中央大學',
      labels: ['商業', '行銷'],
      role: '隊長',
      "with": ['鍾佳琳', '黃冠菱', '陳毅寰', '陳亭安']
    }, {
      name: 'Google AdWords Challenge 亞軍',
      originalInfo: false,
      years: ['2013'],
      by: 'Google Inc.',
      labels: ['行銷'],
      role: '隊長',
      "with": ['曹志龍', '黃梃展']
    }, {
      name: '資訊學群專題成果競賽網路應用組冠軍',
      originalInfo: false,
      years: ['2013'],
      by: '國立屏東商業技術學院',
      labels: ['科技', '商業'],
      role: '隊長',
      "with": ['曹志龍', '黃梃展']
    }, {
      name: '班級網頁製作比賽冠軍',
      originalInfo: false,
      years: ['2005', '2007'],
      by: '屏東縣明正國中',
      labels: ['科技'],
      role: '隊長',
      "with": ['國中同學們']
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.name, ", ").concat(item.by, ", (").concat(item.years.join(symbol.and), ")");
      },
      getItemLabels: function getItemLabels(item) {
        return item.labels;
      },
      withMembers: function withMembers(item) {
        var str = '';
        if (item["with"].length > 0) str = "\u64D4\u4EFB".concat(item.role, "\uFF0C\u8207 ").concat(item["with"].join(symbol.and), " \u5408\u529B\u9054\u6210.");
        return str;
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
      note: 'doi:10.6160/SYSMR.202009_28(3).0001',
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
        }).join(symbol.and), "\uFF0C\uFF08").concat(item.year, "\uFF09\uFF0C\u201C").concat(item.name, "\u201D\uFF0C").concat(item.on, ".");
      },
      itemNote: function itemNote(item) {
        return item.note;
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
    title: '具有特色的認證',
    items: [{
      maintitle: '2023年Google數位人才認證 (1/3) - Google Ads 領域',
      subtitle: '經由通過Google Ads搜尋廣告認證、影片廣告認證等'
    }, {
      maintitle: '2023年Google數位人才認證 (2/3) - Google Cloud 領域',
      subtitle: '經由證明具備 Google Cloud 的 Infrastructure, Networking, Security, Data, ML, and AI 等知識'
    }, {
      maintitle: '2023年Google數位人才認證 (3/3) - Google Analytics 領域',
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
    description: '我過去是個CSer， LernHerN 是我在遊戲中使用的名稱，我擅長用影音去推廣電競，我創作的影片幾乎都沒有個人營利，希望你會喜歡。如果在遊戲中遇到我，就跟我打個招呼吧！',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS96aC10dy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJpbnRyb0Vtb2ppIiwicmVzZWFyY2hJbnRlcmVzdCIsInRpdGxlIiwiaXRlbXMiLCJ0ZXh0IiwiZGVzY3JpYmUiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJtb3JlRGVzY3JpYmUiLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJsYWJlbHMiLCJyb2xlIiwiZ2V0SXRlbUxhYmVscyIsIndpdGhNZW1iZXJzIiwic3RyIiwibGVuZ3RoIiwicHVibGljYXRpb24iLCJhdXRob3JzIiwib24iLCJub3RlIiwiZ2EiLCJpdGVtTm90ZSIsImNlcnRpZmljYXRpb24iLCJtYWludGl0bGUiLCJzdWJ0aXRsZSIsIml0ZW1NYWludGl0bGUiLCJpdGVtU3VidGl0bGUiLCJub25wcm9maXQiLCJkZXNjcmlwdGlvbiIsImxpdmUiLCJpdGVtVGV4dE5hbWUiLCJpdGVtVGV4dERlc2NyaXB0aW9uIiwic2VydmljZVN0YXRlIiwicmVzIiwiZXNwb3J0IiwicHJv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R0pPLGFBQVMsRUFBRSxTQUhQO0FBSUozQyxTQUFLLEVBQUUsQ0FDSDtBQUFFbkIsVUFBSSxFQUFFLG1DQUFSO0FBQTZDb0IsU0FBRyxFQUFFLDZDQUFsRDtBQUFpRzJCLFFBQUUsRUFBRTtBQUFyRyxLQURHLEVBRUg7QUFBRS9DLFVBQUksRUFBRSx1QkFBUjtBQUFpQ29CLFNBQUcsRUFBRSw2Q0FBdEM7QUFBcUYyQixRQUFFLEVBQUU7QUFBekYsS0FGRyxDQUpIO0FBUUo3QyxhQUFTLEVBQUU7QUFDUHVCLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQzFCLElBQWY7QUFBQSxPQURIO0FBRVA0QixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNxQixFQUFmO0FBQUE7QUFGRDtBQVJQLEdBMVlDO0FBdVpUZ0IsU0FBTyxFQUFFO0FBQ0xqRSxTQUFLLEVBQUU7QUFERixHQXZaQTtBQTBaVGtFLFFBQU0sRUFBRTtBQUNKbEUsU0FBSyxFQUFFLEVBREg7QUFFSkUsUUFBSSxFQUFFLEVBRkY7QUFHSm1CLFNBQUssRUFBRSxDQUNIO0FBQ0luQixVQUFJLEVBQUUsUUFEVjtBQUVJb0IsU0FBRyxFQUFFLDZCQUZUO0FBR0kyQixRQUFFLEVBQUU7QUFIUixLQURHLEVBTUg7QUFDSS9DLFVBQUksRUFBRSxnQkFEVjtBQUVJb0IsU0FBRyxFQUFFLHdEQUZUO0FBR0kyQixRQUFFLEVBQUU7QUFIUixLQU5HLENBSEg7QUFlSjdDLGFBQVMsRUFBRTtBQUNQdUIsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDMUIsSUFBZjtBQUFBLE9BREg7QUFFUDRCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3FCLEVBQWY7QUFBQTtBQUZEO0FBZlA7QUExWkMsQ0FBYjtBQWdiZTVELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlMjIxODlkYWIxZmIwZTJiYWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBEYXRhIFpILVRXXHJcbiAqXHJcbiAqIEBhdXRob3IgQmFjb25CYW9cclxuICogQGxpbmsgaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW9cclxuICovXHJcblxyXG5jb25zdCBzeW1ib2wgPSB7XHJcbiAgICBhbmQ6ICfjgIEnLFxyXG59O1xyXG5jb25zdCBwYXRlbnRTdGF0dXMgPSB7XHJcbiAgICBncmFudGVkOiAn5qC45YeGJyxcclxufTtcclxuY29uc3QgcGF0ZW50U2VsZiA9IHtcclxuICAgIG5hbWU6ICfmnpfogJXokYYnLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuY29uc3QgcHViU2VsZiA9IHtcclxuICAgIG5hbWU6ICfmnpfogJXokYYnLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYW5nOiAnemgtdHcnLFxyXG4gICAgcGFnZVRpdGxlOiAn5oiR5pivIEJhY29uQmFvLCDmiJHllpzmraHlvpzlvonlnKjnn6XorZjnmoTmtbfmtIvoo6HvvIEnLFxyXG4gICAgcGFnZURlc2NyaXB0aW9uOiAn5oiR5pivIEJhY29uQmFvIO+8jOWWnOatoeW+nOW+ieWcqOefpeitmOeahOa1t+a0i+ijoe+8jOeGseaEm+aOoue0oklU5oeJ55So6IiHSVTnm7jpl5znmoTmtojosrvogIXooYzngrrjgIInLFxyXG4gICAgcGFnZU9nSW1hZ2U6ICdpbWFnZXMvb2dpbWFnZS5qcGcnLFxyXG4gICAgc3ltYm9sLFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIGhlbGxvOiAn5Zeo77yB5oiR5pivJyxcclxuICAgICAgICBuYW1lOiAnQmFjb25CYW8nLFxyXG4gICAgICAgIGFrYU5hbWU6ICfmnpfogJXokYYnLFxyXG4gICAgICAgIGludHJvOiAn5oiR5Zac5q2h5b6c5b6J5Zyo55+l6K2Y55qE5rW35rSL6KOh77yM54ax5oSb5o6i57SiSVTmh4nnlKjoiIdJVOebuOmXnOeahOa2iOiyu+iAheihjOeCuu+8jOebruWJjeWcqOiHuueBo+Wkp+WtuOaUu+iugOWNmuWjq+WtuOS9jeOAgicsXHJcbiAgICAgICAgLy8gaW50cm86ICfnhrHmhJvmjqLntKJJVOaHieeUqOiIh0lU55u46Zec55qE5raI6LK76ICF6KGM54K677yM55uu5YmN5Zyo6Ie654Gj5aSn5a245pS76K6A5Y2a5aOr5a245L2N44CC5oiR5Zac5q2h5b6c5b6J5Zyo55+l6K2Y55qE5rW35rSL6KOh77yM5pyJ5pmC5Zyo6YCZ54mH5rW35rSL6KOh57+75ru+44CB6LOj6JCM44CB5ouN6IKa55qu44CCICjil49cXCfil6FcXCfil48pJyxcclxuICAgICAgICBpbnRyb0Vtb2ppOiAnKOKXj1xcJ+KXoVxcJ+KXjyknLFxyXG4gICAgfSxcclxuICAgIHJlc2VhcmNoSW50ZXJlc3Q6IHtcclxuICAgICAgICB0aXRsZTogJ+eglOeptuiIiOi2oycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlYuaHieeUqCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfmtojosrvogIXooYzngronLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5raI6LK76ICF5oSf55+lJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlc2NyaWJlOiAn6ZuW54S25oiR5pyJ5LiN5bCRSVTplovnmbznmoTntpPpqZfvvIzkvYbmiJHmm7Tmg7Pkuobop6NJVOa2iOiyu+iAheiIh0lU5LqS5YuV5pmC55qE5Li76KeA5oSf5Y+X6IiH5oOz5rOV44CCXFxu5Zug5q2k77yM5oiR54ax5oSb5o6i57Si5pyJ6ZecSVTmtojosrvogIXmhJ/nn6XoiIfooYzngrrnmoTnj77osaHvvIzljIXlkKvmiJDlm6Ao4oCYd2h54oCZKeiIh+WFtuWboOaenOmXnOS/gijigJhob3figJkp77yM54m55Yil5piv5raJ5Y+K55+b55u+55qE54++6LGh44CCJyxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLnRleHR9YCxcclxuICAgICAgICAgICAgbW9yZURlc2NyaWJlOiAoZGVzY3JpYmUpID0+IGRlc2NyaWJlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWR1OiB7XHJcbiAgICAgICAgdGl0bGU6ICflrbjmrbcnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ+WNmuWjq+eUnycsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICflnIvnq4voh7rngaPlpKflrbgnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+izh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ+eiqeWjqycsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICflnIvnq4vkuK3lpK7lpKflrbgnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+izh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ+WtuOWjqycsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICflnIvnq4vlsY/mnbHllYbmpa3mioDooZPlrbjpmaInLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+izh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmRlZ3JlZX0gfCAke2l0ZW0uZGVwdH0sICR7aXRlbS5zY2hvb2x9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4cDoge1xyXG4gICAgICAgIHRpdGxlOiAn57aT5q23JyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVGltZTogJzIwMTYvOScsXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6ICcyMDIwLzEyJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ+Wuj+eigeiCoeS7veaciemZkOWFrOWPuCcsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAn5YO55YC85Ym15paw5Lit5b+DJyxcclxuICAgICAgICAgICAgICAgIHBvczogJ+WwiOahiOW3peeoi+W4qycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiAnMjAxNC8xJyxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogJzIwMTQvMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICfnjonlsbHorYnliLgnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+mbu+WtkOWVhuWLmemDqCcsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICflr6bnv5LnlJ8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5mcm9tVGltZX0gfiAke2l0ZW0udG9UaW1lfSB8ICR7aXRlbS5jb21977yMJHtpdGVtLmRlcHR977yMJHtpdGVtLnBvc31gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW52ZW50OiB7XHJcbiAgICAgICAgdGl0bGU6ICflsIjliKkv55m85piOJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpqZforYnntrLot6/pgJroqbHouqvku73nmoTmlrnms5Xlj4rnm7jpl5zoo53nva4nLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcxMTI5MycsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzExMjkzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTgzNTY3NScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTgzNTY3NUEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAzMTM5MDEnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDMxMzkwMUExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VQIEVQMzcxNjUyNicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9FUDM3MTY1MjZBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruWfuuaWvOWNgOWhiumPiOeahOe2sui3r+mAmuipsei6q+S7vempl+itieaWueazlScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruiIh+izh+a6kOWBpeW6t+euoeeQhuaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNzA0NzgzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk3MDQ3ODMnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7os4fmupDlgaXlurfmgKfnmoTmqqLmuKzmlrnms5XvvIzpgannlKjmlrzot6jntrLln5/oiIfot6jpgJroqIrljZTlrponLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfln7rmlrzltYzlhaXlvI/oppbnqpfnmoTntrLpoIHliqDovInmlrnms5Xlj4rlhbboo53nva4nLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY5MjIzMicsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjkyMjMyJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu57ay6aCB55qESFRUUC9IVFRQU+a3t+WQiOWFp+WuueWRiOePvuaWueW8jycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mhr+ekuuijnee9ruWPiuWFtumhr+ekuuaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5NDczODMnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTQ3MzgzJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu5ZyW5bGk5byP5YWn5a65566h55CG57O757WxJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u5Y+K6Z+z6KiK6YyE6Z+z5o6n5Yi25pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NzI2MzAnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY3MjYzMCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruWPr+aMieWjk+mMhOmfs+eahOmAmuipsScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+e2sumggeWFp+WuueiHquaIkeS/neitt+aWueazleWPiuS8uuacjeWZqCcsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjY5NjI0JywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2Njk2MjQnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExMDc5MTkyJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExMDc5MTkyQScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDA4OTkwNCcsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMDg5OTA0QTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7ln7rmlrzkuIDmrKHmgKflr4bnorznmoTntrLpoIHoh6rmiJHkv53orbfmlrnms5UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIflhbbpm6Lnt5rmm7TmlrDnqIvlvI/nmoTmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYxNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjE0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMDM2MjMyMicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMDM2MjMyMkEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7ol4nnlLHlhafltYzlvI/ngI/opr3lmajlr6bouJDmm7TmlrDpm6Lnt5rnqIvlvI/nmoTmlrnms5UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIflhbboppbnqpfnrqHnkIbmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTI2MDE3JywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkyNjAxNycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruWBtea4rOeAj+imveWZqOimlueql+eahOS+neiztOeahOaWueazlScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruiIh+WFtue2sumggeaHieeUqOeoi+W8j+S7i+mdoueahOmboue3mumBi+ihjOaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MTc1NjgnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTE3NTY4Jywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu55So5pa86Zui57ea5oOF5aKD55qEV2ViIEFQSXMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7lj4rlhbbln7rmlrzmi5bmlL7mk43kvZznmoTmjqfliLbmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTA1NjcwJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkwNTY3MCcsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruWPr+WcqOeAj+imveWZqOS4iuaLluaUvueahOaSpeiZn+aWueW8jycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE4JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruiIh+WFtuaTjeS9nOaWueazleS7peWPiuS8uuacjeWZqCcsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjQxOTY5JywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2NDE5NjknLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTA5NDI4OTI1JywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTA5NDI4OTI1QScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDE5MDAwNzUyMCcsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMTkwMDA3NTIwQTEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7pgannlKjlnKjnt5roiIfpm6Lnt5rmg4XlooPnmoTln7rmlrzngI/opr3lmajnmoTpnYjmtLvoqp7pn7Pmlrnms5UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5pbnZlbnRvcnMubWFwKChpKSA9PiBpLm5hbWUpLmpvaW4oc3ltYm9sLmFuZCl9LCAoJHtpdGVtLnllYXJ9KSwg4oCcJHtpdGVtLm5hbWV94oCdLCDnlLPoq4vkuroke2l0ZW0uYXBwbGljYW50fWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBnZW5lcmF0ZUFic3RyYWN0OiAoaXRlbSkgPT4gYCR7aXRlbS5pbnRyb31gLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybVNwYWNlID0gKHQpID0+IHQuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBybVNwYWNlKGxpbmsudGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHBhdGVudC0ke3RleHQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXdhcmQ6IHtcclxuICAgICAgICB0aXRsZTogJ+eNjumghScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W5tOW6puWAi+S6uue0r+epjeeUs+iri+WwiOWIqeeNjicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNycsICcyMDE4J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsn56eR5oqAJywgJ+eglOeptiddLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnoqnlo6voq5bmlofoqIjnlavnmbzooajmnIPmnIDkvbPoq5bmlofnjY4nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTYnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAn5ZyL56uL5Lit5aSu5aSn5a246LOH6KiK566h55CG5a2457O7JyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWyfnoJTnqbYnXSxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5qGD5ZyS57ij5Y2D6YeM6aas5bCL5qGD6Iqx5rqQ5Ym15qWt56u26LO96Zu75a2Q5ZWG5YuZ57WE5Yag6LuNJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE1J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ+Wci+eri+S4reWkruWkp+WtuCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsn5ZWG5qWtJywgJ+ihjOmKtyddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ+maiumVtycsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ+mNvuS9s+eQsycsICfpu4PlhqDoj7EnLCAn6Zmz5q+F5a+wJywgJ+mZs+S6reWuiSddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR29vZ2xlIEFkV29yZHMgQ2hhbGxlbmdlIOS6nui7jScsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxMyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdHb29nbGUgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsn6KGM6Yq3J10sXHJcbiAgICAgICAgICAgICAgICByb2xlOiAn6ZqK6ZW3JyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsn5pu55b+X6b6NJywgJ+m7g+aig+WxlSddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6LOH6KiK5a24576k5bCI6aGM5oiQ5p6c56u26LO957ay6Lev5oeJ55So57WE5Yag6LuNJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDEzJ10sXHJcbiAgICAgICAgICAgICAgICBieTogJ+Wci+eri+Wxj+adseWVhualreaKgOihk+WtuOmZoicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsn56eR5oqAJywgJ+WVhualrSddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ+maiumVtycsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ+abueW/l+m+jScsICfpu4PmooPlsZUnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+ePree0mue2sumggeijveS9nOavlOizveWGoOi7jScsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAwNScsICcyMDA3J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ+Wxj+adsee4o+aYjuato+Wci+S4rScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsn56eR5oqAJ10sXHJcbiAgICAgICAgICAgICAgICByb2xlOiAn6ZqK6ZW3JyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsn5ZyL5Lit5ZCM5a245YCRJ10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLm5hbWV9LCAke2l0ZW0uYnl9LCAoJHtpdGVtLnllYXJzLmpvaW4oc3ltYm9sLmFuZCl9KWAsXHJcbiAgICAgICAgICAgIGdldEl0ZW1MYWJlbHM6IChpdGVtKSA9PiBpdGVtLmxhYmVscyxcclxuICAgICAgICAgICAgd2l0aE1lbWJlcnM6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS53aXRoLmxlbmd0aCA+IDApIHN0ciA9IGDmk5Tku7ske2l0ZW0ucm9sZX3vvIzoiIcgJHtpdGVtLndpdGguam9pbihzeW1ib2wuYW5kKX0g5ZCI5Yqb6YGU5oiQLmA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHVibGljYXRpb246IHtcclxuICAgICAgICB0aXRsZTogJ+iRl+S9nCcsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ+WKieaIkOixqicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICfllJDpgYvkvbMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICforJ3kvp3pnZwnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+ihjOWLleaQnOWwi+S4i++8jOS9oOacg+i2iueci+i2iuaEm+Wug+WXju+8n+S9v+eUqOiAheefpeitmOiIh+ieouW5leWwuuWvuOWmguS9leW9semfv+WTgeeJjOaViOaenCcsXHJcbiAgICAgICAgICAgICAgICBvbjogJ+S4reWxseeuoeeQhuipleirlicsXHJcbiAgICAgICAgICAgICAgICBub3RlOiAnZG9pOjEwLjYxNjAvU1lTTVIuMjAyMDA5XzI4KDMpLjAwMDEnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cDovL21ndHIuY20ubnN5c3UuZWR1LnR3L2Z1bGxqb3VybmFsX3Byb2Nlc3MucGhwP2lkPTE0OCZwbm89TTVmNjk5OGZkYjZhZTAmcD0zNzknLCBnYTogJ3BhcGVyXzIwMjAtMScgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE2JyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwdWJTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfku6XoqqrmnI3nn6XorZjmqKHlvI/oiIfonqLluZXlsLrlr7jmjqLoqI7pl5zpjbXlrZflu6PlkYrnmoTph43opIfmm53lhYnlsI3lk4HniYzoqJjmhrboiIflk4HniYzmhYvluqbkuYvlvbHpn78nLFxyXG4gICAgICAgICAgICAgICAgb246ICflnIvnq4vkuK3lpK7lpKflrbjvvIznoqnlo6voq5bmlocnLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xJTksnLCB1cmw6ICdodHRwczovL2hkbC5oYW5kbGUubmV0LzExMjk2L3gyNnB2bicsIGdhOiAnbWFzdGVyX3RoZXNpcycgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmF1dGhvcnMubWFwKChpKSA9PiBpLm5hbWUpLmpvaW4oc3ltYm9sLmFuZCl977yM77yIJHtpdGVtLnllYXJ977yJ77yM4oCcJHtpdGVtLm5hbWV94oCd77yMJHtpdGVtLm9ufS5gLFxyXG4gICAgICAgICAgICBpdGVtTm90ZTogKGl0ZW0pID0+IGl0ZW0ubm90ZSxcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLm5hbWUsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6ICflhbfmnInnibnoibLnmoToqo3orYknLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1haW50aXRsZTogJzIwMjPlubRHb29nbGXmlbjkvY3kurrmiY3oqo3orYkgKDEvMykgLSBHb29nbGUgQWRzIOmgmOWfnycsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ+e2k+eUsemAmumBjkdvb2dsZSBBZHPmkJzlsIvlu6PlkYroqo3orYnjgIHlvbHniYflu6PlkYroqo3orYnnrYknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYWludGl0bGU6ICcyMDIz5bm0R29vZ2xl5pW45L2N5Lq65omN6KqN6K2JICgyLzMpIC0gR29vZ2xlIENsb3VkIOmgmOWfnycsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ+e2k+eUseitieaYjuWFt+WCmSBHb29nbGUgQ2xvdWQg55qEIEluZnJhc3RydWN0dXJlLCBOZXR3b3JraW5nLCBTZWN1cml0eSwgRGF0YSwgTUwsIGFuZCBBSSDnrYnnn6XorZgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYWludGl0bGU6ICcyMDIz5bm0R29vZ2xl5pW45L2N5Lq65omN6KqN6K2JICgzLzMpIC0gR29vZ2xlIEFuYWx5dGljcyDpoJjln58nLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICfntpPnlLHpgJrpgY5Hb29nbGUgQW5hbHl0aWNz6KqN6K2JJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtTWFpbnRpdGxlOiAoaXRlbSkgPT4gaXRlbS5tYWludGl0bGUsXHJcbiAgICAgICAgICAgIGl0ZW1TdWJ0aXRsZTogKGl0ZW0pID0+IGl0ZW0uc3VidGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBub25wcm9maXQ6IHtcclxuICAgICAgICB0aXRsZTogJ+WFrOebiuWwj+WwiOahiCcsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WPsOiqnuWFkicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+WFjeiyu+aHieeUqOeoi+W8j+iIh+acjeWLme+8jOWNlOWKqeS6uuWAkeWcqOmBh+WIsOmcgOimgeWPsOiqnua6nemAmueahOaZguWAme+8jOWPr+S7peW/q+mAn+aWueS+v+eahOafpeipouWIsOaJgOmcgOeahOWPsOiqnuiqnumfs+OAguiHqjIwMTPlubTplovlp4vmnI3li5njgIInLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvL1RhaXdhbmVzZVdpemFyZC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYTogJ3R3d193ZWJzaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTHVja3lCYWNvbicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+mWi+aUvuWOn+Wni+eivOeahOWFjeiyu+Wwj+Wei+aKveeNjueoi+W8j++8jOWNlOWKqeihjOmKt+S6uuWToeaIluaYr+eglOeptueUn+etieWcqOmcgOimgeaKveeNjuaZguWPr+S7peW/q+mAn+aTuuaUvueNjumgheiIh+WujOaIkOaKveeNjuOAguiHqjIwMTblubTplovlp4vmnI3li5njgIInLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvL0x1Y2t5QmFjb24vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICdsdWNreWJhY29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHROYW1lOiAoaXRlbSkgPT4gaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBpdGVtVGV4dERlc2NyaXB0aW9uOiAoaXRlbSkgPT4gaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICAgICAgc2VydmljZVN0YXRlOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gKGl0ZW0ubGl2ZSkgPyAnJyA6ICfmnI3li5nlt7LlgZzmraInO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVzcG9ydDoge1xyXG4gICAgICAgIHRpdGxlOiAn6YGK5oiyL+mbu+erticsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfmiJHpgY7ljrvmmK/lgItDU2Vy77yMIExlcm5IZXJOIOaYr+aIkeWcqOmBiuaIsuS4reS9v+eUqOeahOWQjeeose+8jOaIkeaThemVt+eUqOW9semfs+WOu+aOqOW7o+mbu+ertu+8jOaIkeWJteS9nOeahOW9seeJh+W5vuS5jumDveaykuacieWAi+S6uueHn+WIqe+8jOW4jOacm+S9oOacg+WWnOatoeOAguWmguaenOWcqOmBiuaIsuS4remBh+WIsOaIke+8jOWwsei3n+aIkeaJk+WAi+aLm+WRvOWQp++8gScsXHJcbiAgICAgICAgcHJvbW90aW9uOiAn57K+6YG45YWp6YOo5b2x54mH77yaJyxcclxuICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdSZW1lbWJyYW5jZSBvZiBDb3VudGVyLVN0cmlrZSAxLjYnLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW5yVU1aWmloZUxVJywgZ2E6ICdjc19tb3ZpZV8xJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICcxIFllYXIgb2YgXCJTSy5EZWxwYW5cIicsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Z205M3lHUHZNQU0nLCBnYTogJ2NzX21vdmllXzInIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgICAgdGl0bGU6ICfoga/ntaEnLFxyXG4gICAgfSxcclxuICAgIHNvY2lhbDoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR2l0SHViJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYWNvbmJhbycsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19naXRodWInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR29vZ2xlIFNjaG9sYXInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vY2l0YXRpb25zP3VzZXI9T0tkSHgyWUFBQUFKJyxcclxuICAgICAgICAgICAgICAgIGdhOiAnZm9sbG93X2dzY2hvbGFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=