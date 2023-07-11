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
    describe: '雖然我有不少IT開發的經驗，但我更想了解IT消費者與IT互動時的主觀感受與想法。\n因此，我熱愛探索有關IT消費者感知與行為的現象，特別是涉及矛盾的現象，包含成因(‘why’)與其因果關係(‘how’)。',
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
        if (item["with"].length > 0) str = "\u64D4\u4EFB".concat(item.role, "\uFF0C\u8207 ").concat(item["with"].join(symbol.and), " \u5408\u529B\u9054\u6210. *");
        return str;
      },
      notes: function notes() {
        return '* 依照姓名讀音逆向排序';
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
    description: '我曾是個CS玩家，LernHerN 是我在遊戲中使用的名稱，我擅長用影音去推廣電競，我創作的影片幾乎都沒有個人營利，希望你會喜歡。如果在遊戲中遇到我，歡迎跟我打個招呼！',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS96aC10dy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJpbnRyb0Vtb2ppIiwicmVzZWFyY2hJbnRlcmVzdCIsInRpdGxlIiwiaXRlbXMiLCJ0ZXh0IiwiZGVzY3JpYmUiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJtb3JlRGVzY3JpYmUiLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJsYWJlbHMiLCJyb2xlIiwiZ2V0SXRlbUxhYmVscyIsIndpdGhNZW1iZXJzIiwic3RyIiwibGVuZ3RoIiwibm90ZXMiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsIml0ZW1Ob3RlIiwiY2VydGlmaWNhdGlvbiIsIm1haW50aXRsZSIsInN1YnRpdGxlIiwiaXRlbU1haW50aXRsZSIsIml0ZW1TdWJ0aXRsZSIsIm5vbnByb2ZpdCIsImRlc2NyaXB0aW9uIiwibGl2ZSIsIml0ZW1UZXh0TmFtZSIsIml0ZW1UZXh0RGVzY3JpcHRpb24iLCJzZXJ2aWNlU3RhdGUiLCJyZXMiLCJlc3BvcnQiLCJwcm9tb3Rpb24iLCJjb250YWN0Iiwic29jaWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTs7Ozs7O0FBT0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLEtBQUcsRUFBRTtBQURNLENBQWY7QUFHQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQURRLENBQXJCO0FBR0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLE1BQUksRUFBRSxLQURTO0FBRWZDLE1BQUksRUFBRTtBQUZTLENBQW5CO0FBSUEsSUFBTUMsT0FBTyxHQUFHO0FBQ1pGLE1BQUksRUFBRSxLQURNO0FBRVpDLE1BQUksRUFBRTtBQUZNLENBQWhCO0FBS0EsSUFBTUUsSUFBSSxHQUFHO0FBQ1RDLE1BQUksRUFBRSxPQURHO0FBRVRDLFdBQVMsRUFBRSw0QkFGRjtBQUdUQyxpQkFBZSxFQUFFLCtDQUhSO0FBSVRDLGFBQVcsRUFBRSxvQkFKSjtBQUtUWixRQUFNLEVBQU5BLE1BTFM7QUFNVGEsTUFBSSxFQUFFO0FBQ0ZDLFNBQUssRUFBRSxNQURMO0FBRUZULFFBQUksRUFBRSxVQUZKO0FBR0ZVLFdBQU8sRUFBRSxLQUhQO0FBSUZDLFNBQUssRUFBRSxpREFKTDtBQUtGO0FBQ0FDLGNBQVUsRUFBRTtBQU5WLEdBTkc7QUFjVEMsa0JBQWdCLEVBQUU7QUFDZEMsU0FBSyxFQUFFLE1BRE87QUFFZEMsU0FBSyxFQUFFLENBQ0g7QUFDSUMsVUFBSSxFQUFFO0FBRFYsS0FERyxFQUlIO0FBQ0lBLFVBQUksRUFBRTtBQURWLEtBSkcsRUFPSDtBQUNJQSxVQUFJLEVBQUU7QUFEVixLQVBHLENBRk87QUFhZEMsWUFBUSxFQUFFLHdHQWJJO0FBY2RDLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDSixJQUFsQjtBQUFBLE9BREg7QUFFUEssa0JBQVksRUFBRSxzQkFBQ0osUUFBRDtBQUFBLGVBQWNBLFFBQWQ7QUFBQTtBQUZQO0FBZEcsR0FkVDtBQWlDVEssS0FBRyxFQUFFO0FBQ0RSLFNBQUssRUFBRSxJQUROO0FBRURDLFNBQUssRUFBRSxDQUNIO0FBQ0lRLFlBQU0sRUFBRSxLQURaO0FBRUlDLFlBQU0sRUFBRSxRQUZaO0FBR0lDLFVBQUksRUFBRTtBQUhWLEtBREcsRUFNSDtBQUNJRixZQUFNLEVBQUUsSUFEWjtBQUVJQyxZQUFNLEVBQUUsUUFGWjtBQUdJQyxVQUFJLEVBQUU7QUFIVixLQU5HLEVBV0g7QUFDSUYsWUFBTSxFQUFFLElBRFo7QUFFSUMsWUFBTSxFQUFFLFlBRlo7QUFHSUMsVUFBSSxFQUFFO0FBSFYsS0FYRyxDQUZOO0FBbUJEUCxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ0csTUFBbEIsZ0JBQThCSCxJQUFJLENBQUNLLElBQW5DLGVBQTRDTCxJQUFJLENBQUNJLE1BQWpEO0FBQUE7QUFESDtBQW5CVixHQWpDSTtBQXdEVEUsS0FBRyxFQUFFO0FBQ0RaLFNBQUssRUFBRSxJQUROO0FBRURDLFNBQUssRUFBRSxDQUNIO0FBQ0lZLGNBQVEsRUFBRSxRQURkO0FBRUlDLFlBQU0sRUFBRSxTQUZaO0FBR0lDLFNBQUcsRUFBRSxVQUhUO0FBSUlKLFVBQUksRUFBRSxRQUpWO0FBS0lLLFNBQUcsRUFBRTtBQUxULEtBREcsRUFRSDtBQUNJSCxjQUFRLEVBQUUsUUFEZDtBQUVJQyxZQUFNLEVBQUUsUUFGWjtBQUdJQyxTQUFHLEVBQUUsTUFIVDtBQUlJSixVQUFJLEVBQUUsT0FKVjtBQUtJSyxTQUFHLEVBQUU7QUFMVCxLQVJHLENBRk47QUFrQkRaLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDTyxRQUFsQixnQkFBZ0NQLElBQUksQ0FBQ1EsTUFBckMsZ0JBQWlEUixJQUFJLENBQUNTLEdBQXRELG1CQUE2RFQsSUFBSSxDQUFDSyxJQUFsRSxtQkFBMEVMLElBQUksQ0FBQ1UsR0FBL0U7QUFBQTtBQURIO0FBbEJWLEdBeERJO0FBOEVUQyxRQUFNLEVBQUU7QUFDSmpCLFNBQUssRUFBRSxPQURIO0FBRUpDLFNBQUssRUFBRSxDQUNIO0FBQ0lpQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUGxDLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsa0JBTFY7QUFNSWtDLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVuQixZQUFJLEVBQUUsWUFBUjtBQUFzQm9CLFdBQUcsRUFBRSwwREFBM0I7QUFBdUZDLGNBQU0sRUFBRXhDLFlBQVksQ0FBQ0M7QUFBNUcsT0FERyxFQUVIO0FBQUVrQixZQUFJLEVBQUUsY0FBUjtBQUF3Qm9CLFdBQUcsRUFBRSxnREFBN0I7QUFBK0VDLGNBQU0sRUFBRTtBQUF2RixPQUZHLEVBR0g7QUFBRXJCLFlBQUksRUFBRSxnQkFBUjtBQUEwQm9CLFdBQUcsRUFBRSxtREFBL0I7QUFBb0ZDLGNBQU0sRUFBRXhDLFlBQVksQ0FBQ0M7QUFBekcsT0FIRyxFQUlIO0FBQUVrQixZQUFJLEVBQUUsY0FBUjtBQUF3Qm9CLFdBQUcsRUFBRSwrQ0FBN0I7QUFBOEVDLGNBQU0sRUFBRTtBQUF0RixPQUpHLENBUFg7QUFhSTFCLFdBQUssRUFBRTtBQWJYLEtBREcsRUFnQkg7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxlQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLFlBQVI7QUFBc0JvQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUV4QyxZQUFZLENBQUNDO0FBQTVHLE9BREcsQ0FQWDtBQVVJYSxXQUFLLEVBQUU7QUFWWCxLQWhCRyxFQTRCSDtBQUNJcUIsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1BsQyxVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLG9CQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLFlBQVI7QUFBc0JvQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUV4QyxZQUFZLENBQUNDO0FBQTVHLE9BREcsQ0FQWDtBQVVJYSxXQUFLLEVBQUU7QUFWWCxLQTVCRyxFQXdDSDtBQUNJcUIsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1BsQyxVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLFlBTFY7QUFNSWtDLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVuQixZQUFJLEVBQUUsY0FBUjtBQUF3Qm9CLFdBQUcsRUFBRSw0REFBN0I7QUFBMkZDLGNBQU0sRUFBRTtBQUFuRyxPQURHLENBUFg7QUFVSTFCLFdBQUssRUFBRTtBQVZYLEtBeENHLEVBb0RIO0FBQ0lxQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUGxDLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsZUFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxZQUFSO0FBQXNCb0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUE1RyxPQURHLENBUFg7QUFVSWEsV0FBSyxFQUFFO0FBVlgsS0FwREcsRUFnRUg7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxnQkFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxZQUFSO0FBQXNCb0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUE1RyxPQURHLEVBRUg7QUFBRWtCLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLGdEQUE3QjtBQUErRUMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUFwRyxPQUZHLEVBR0g7QUFBRWtCLFlBQUksRUFBRSxnQkFBUjtBQUEwQm9CLFdBQUcsRUFBRSxtREFBL0I7QUFBb0ZDLGNBQU0sRUFBRXhDLFlBQVksQ0FBQ0M7QUFBekcsT0FIRyxDQVBYO0FBWUlhLFdBQUssRUFBRTtBQVpYLEtBaEVHLEVBOEVIO0FBQ0lxQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUGxDLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsaUJBTFY7QUFNSWtDLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVuQixZQUFJLEVBQUUsWUFBUjtBQUFzQm9CLFdBQUcsRUFBRSwwREFBM0I7QUFBdUZDLGNBQU0sRUFBRXhDLFlBQVksQ0FBQ0M7QUFBNUcsT0FERyxFQUVIO0FBQUVrQixZQUFJLEVBQUUsY0FBUjtBQUF3Qm9CLFdBQUcsRUFBRSxnREFBN0I7QUFBK0VDLGNBQU0sRUFBRTtBQUF2RixPQUZHLENBUFg7QUFXSTFCLFdBQUssRUFBRTtBQVhYLEtBOUVHLEVBMkZIO0FBQ0lxQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUGxDLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsY0FMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLDREQUE3QjtBQUEyRkMsY0FBTSxFQUFFO0FBQW5HLE9BREcsQ0FQWDtBQVVJMUIsV0FBSyxFQUFFO0FBVlgsS0EzRkcsRUF1R0g7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSx1QkFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLDREQUE3QjtBQUEyRkMsY0FBTSxFQUFFO0FBQW5HLE9BREcsQ0FQWDtBQVVJMUIsV0FBSyxFQUFFO0FBVlgsS0F2R0csRUFtSEg7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxtQkFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLDREQUE3QjtBQUEyRkMsY0FBTSxFQUFFO0FBQW5HLE9BREcsQ0FQWDtBQVVJMUIsV0FBSyxFQUFFO0FBVlgsS0FuSEcsRUErSEg7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxpQkFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxZQUFSO0FBQXNCb0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUE1RyxPQURHLEVBRUg7QUFBRWtCLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLGdEQUE3QjtBQUErRUMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUFwRyxPQUZHLEVBR0g7QUFBRWtCLFlBQUksRUFBRSxnQkFBUjtBQUEwQm9CLFdBQUcsRUFBRSxtREFBL0I7QUFBb0ZDLGNBQU0sRUFBRTtBQUE1RixPQUhHLENBUFg7QUFZSTFCLFdBQUssRUFBRTtBQVpYLEtBL0hHLENBRkg7QUFnSkpPLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDYSxTQUFMLENBQWVLLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUN2QyxJQUFUO0FBQUEsU0FBbkIsRUFBa0N3QyxJQUFsQyxDQUF1QzdDLE1BQU0sQ0FBQ0MsR0FBOUMsQ0FBYixnQkFBcUV3QixJQUFJLENBQUNZLElBQTFFLHNCQUFxRlosSUFBSSxDQUFDcEIsSUFBMUYsdUNBQXVHb0IsSUFBSSxDQUFDYyxTQUE1RztBQUFBLE9BREg7QUFFUE8sY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDMUIsSUFBZjtBQUFBLE9BRkg7QUFHUDJCLHNCQUFnQixFQUFFLDBCQUFDdkIsSUFBRDtBQUFBLHlCQUFhQSxJQUFJLENBQUNULEtBQWxCO0FBQUEsT0FIWDtBQUlQaUMsWUFBTSxFQUFFLGdCQUFDRixJQUFELEVBQVU7QUFDZCxZQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRLEdBQVIsRUFBYVAsSUFBYixDQUFrQixFQUFsQixDQUFQO0FBQUEsU0FBaEI7O0FBQ0EsWUFBTXhCLElBQUksR0FBRzZCLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDMUIsSUFBTixDQUFwQjtBQUNBLGdDQUFpQkEsSUFBSSxDQUFDZ0MsV0FBTCxFQUFqQjtBQUNIO0FBUk07QUFoSlAsR0E5RUM7QUF5T1RDLE9BQUssRUFBRTtBQUNIbkMsU0FBSyxFQUFFLElBREo7QUFFSEMsU0FBSyxFQUFFLENBQ0g7QUFDSWYsVUFBSSxFQUFFLGFBRFY7QUFFSWtELGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FIWDtBQUlJQyxRQUFFLEVBQUUsV0FKUjtBQUtJQyxZQUFNLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUxaO0FBTUksY0FBTTtBQU5WLEtBREcsRUFTSDtBQUNJckQsVUFBSSxFQUFFLGdCQURWO0FBRUlrRCxrQkFBWSxFQUFFLEtBRmxCO0FBR0lDLFdBQUssRUFBRSxDQUFDLE1BQUQsQ0FIWDtBQUlJQyxRQUFFLEVBQUUsY0FKUjtBQUtJQyxZQUFNLEVBQUUsQ0FBQyxJQUFELENBTFo7QUFNSSxjQUFNO0FBTlYsS0FURyxFQWlCSDtBQUNJckQsVUFBSSxFQUFFLHVCQURWO0FBRUlrRCxrQkFBWSxFQUFFLEtBRmxCO0FBR0lDLFdBQUssRUFBRSxDQUFDLE1BQUQsQ0FIWDtBQUlJQyxRQUFFLEVBQUUsUUFKUjtBQUtJQyxZQUFNLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUxaO0FBTUlDLFVBQUksRUFBRSxJQU5WO0FBT0ksY0FBTSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QjtBQVBWLEtBakJHLEVBMEJIO0FBQ0l0RCxVQUFJLEVBQUUsNkJBRFY7QUFFSWtELGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRSxhQUpSO0FBS0lDLFlBQU0sRUFBRSxDQUFDLElBQUQsQ0FMWjtBQU1JQyxVQUFJLEVBQUUsSUFOVjtBQU9JLGNBQU0sQ0FBQyxLQUFELEVBQVEsS0FBUjtBQVBWLEtBMUJHLEVBbUNIO0FBQ0l0RCxVQUFJLEVBQUUsbUJBRFY7QUFFSWtELGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRSxZQUpSO0FBS0lDLFlBQU0sRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLENBTFo7QUFNSUMsVUFBSSxFQUFFLElBTlY7QUFPSSxjQUFNLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFQVixLQW5DRyxFQTRDSDtBQUNJdEQsVUFBSSxFQUFFLFlBRFY7QUFFSWtELGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FIWDtBQUlJQyxRQUFFLEVBQUUsU0FKUjtBQUtJQyxZQUFNLEVBQUUsQ0FBQyxJQUFELENBTFo7QUFNSUMsVUFBSSxFQUFFLElBTlY7QUFPSSxjQUFNLENBQUMsT0FBRDtBQVBWLEtBNUNHLENBRko7QUF3REhwQyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ3BCLElBQWxCLGVBQTJCb0IsSUFBSSxDQUFDZ0MsRUFBaEMsZ0JBQXdDaEMsSUFBSSxDQUFDK0IsS0FBTCxDQUFXWCxJQUFYLENBQWdCN0MsTUFBTSxDQUFDQyxHQUF2QixDQUF4QztBQUFBLE9BREg7QUFFUDJELG1CQUFhLEVBQUUsdUJBQUNuQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDaUMsTUFBZjtBQUFBLE9BRlI7QUFHUEcsaUJBQVcsRUFBRSxxQkFBQ3BDLElBQUQsRUFBVTtBQUNuQixZQUFJcUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxZQUFJckMsSUFBSSxRQUFKLENBQVVzQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCRCxHQUFHLHlCQUFRckMsSUFBSSxDQUFDa0MsSUFBYiwwQkFBdUJsQyxJQUFJLFFBQUosQ0FBVW9CLElBQVYsQ0FBZTdDLE1BQU0sQ0FBQ0MsR0FBdEIsQ0FBdkIsaUNBQUg7QUFDMUIsZUFBTzZELEdBQVA7QUFDSCxPQVBNO0FBUVBFLFdBQUssRUFBRTtBQUFBLGVBQU0sY0FBTjtBQUFBO0FBUkE7QUF4RFIsR0F6T0U7QUE0U1RDLGFBQVcsRUFBRTtBQUNUOUMsU0FBSyxFQUFFLElBREU7QUFFVEMsU0FBSyxFQUFFLENBQ0g7QUFDSWlCLFVBQUksRUFBRSxNQURWO0FBRUk2QixhQUFPLEVBQUUsQ0FDTDtBQUFFN0QsWUFBSSxFQUFFO0FBQVIsT0FESyxFQUVMO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BRkssRUFHTEUsT0FISyxFQUlMO0FBQUVGLFlBQUksRUFBRTtBQUFSLE9BSkssQ0FGYjtBQVFJQSxVQUFJLEVBQUUsbUNBUlY7QUFTSThELFFBQUUsRUFBRSxRQVRSO0FBVUlDLFVBQUksRUFBRSxxQ0FWVjtBQVdJNUIsV0FBSyxFQUFFLENBQ0g7QUFBRW5DLFlBQUksRUFBRSxNQUFSO0FBQWdCb0MsV0FBRyxFQUFFLHFGQUFyQjtBQUE0RzRCLFVBQUUsRUFBRTtBQUFoSCxPQURHO0FBWFgsS0FERyxFQWdCSDtBQUNJaEMsVUFBSSxFQUFFLE1BRFY7QUFFSTZCLGFBQU8sRUFBRSxDQUNMM0QsT0FESyxDQUZiO0FBS0lGLFVBQUksRUFBRSx1Q0FMVjtBQU1JOEQsUUFBRSxFQUFFLGFBTlI7QUFPSUMsVUFBSSxFQUFFLEVBUFY7QUFRSTVCLFdBQUssRUFBRSxDQUNIO0FBQUVuQyxZQUFJLEVBQUUsTUFBUjtBQUFnQm9DLFdBQUcsRUFBRSxxQ0FBckI7QUFBNEQ0QixVQUFFLEVBQUU7QUFBaEUsT0FERztBQVJYLEtBaEJHLENBRkU7QUErQlQ5QyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ3lDLE9BQUwsQ0FBYXZCLEdBQWIsQ0FBaUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUN2QyxJQUFUO0FBQUEsU0FBakIsRUFBZ0N3QyxJQUFoQyxDQUFxQzdDLE1BQU0sQ0FBQ0MsR0FBNUMsQ0FBYix5QkFBa0V3QixJQUFJLENBQUNZLElBQXZFLCtCQUFpRlosSUFBSSxDQUFDcEIsSUFBdEYseUJBQStGb0IsSUFBSSxDQUFDMEMsRUFBcEc7QUFBQSxPQURIO0FBRVBHLGNBQVEsRUFBRSxrQkFBQzdDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUMyQyxJQUFmO0FBQUEsT0FGSDtBQUdQdEIsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDMUMsSUFBZjtBQUFBLE9BSEg7QUFJUDRDLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3NCLEVBQWY7QUFBQTtBQUpEO0FBL0JGLEdBNVNKO0FBa1ZURSxlQUFhLEVBQUU7QUFDWHBELFNBQUssRUFBRSxTQURJO0FBRVhDLFNBQUssRUFBRSxDQUNIO0FBQ0lvRCxlQUFTLEVBQUUseUNBRGY7QUFFSUMsY0FBUSxFQUFFO0FBRmQsS0FERyxFQUtIO0FBQ0lELGVBQVMsRUFBRSwyQ0FEZjtBQUVJQyxjQUFRLEVBQUU7QUFGZCxLQUxHLEVBU0g7QUFDSUQsZUFBUyxFQUFFLCtDQURmO0FBRUlDLGNBQVEsRUFBRTtBQUZkLEtBVEcsQ0FGSTtBQWdCWGxELGFBQVMsRUFBRTtBQUNQbUQsbUJBQWEsRUFBRSx1QkFBQ2pELElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUMrQyxTQUFmO0FBQUEsT0FEUjtBQUVQRyxrQkFBWSxFQUFFLHNCQUFDbEQsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2dELFFBQWY7QUFBQTtBQUZQO0FBaEJBLEdBbFZOO0FBdVdURyxXQUFTLEVBQUU7QUFDUHpELFNBQUssRUFBRSxPQURBO0FBRVBDLFNBQUssRUFBRSxDQUNIO0FBQ0lmLFVBQUksRUFBRSxLQURWO0FBRUl3RSxpQkFBVyxFQUFFLDBEQUZqQjtBQUdJckMsV0FBSyxFQUFFLENBQ0g7QUFDSUMsV0FBRyxFQUFFLDZDQURUO0FBRUk0QixVQUFFLEVBQUU7QUFGUixPQURHLENBSFg7QUFTSVMsVUFBSSxFQUFFO0FBVFYsS0FERyxFQVlIO0FBQ0l6RSxVQUFJLEVBQUUsWUFEVjtBQUVJd0UsaUJBQVcsRUFBRSw0REFGakI7QUFHSXJDLFdBQUssRUFBRSxDQUNIO0FBQ0lDLFdBQUcsRUFBRSx3Q0FEVDtBQUVJNEIsVUFBRSxFQUFFO0FBRlIsT0FERyxDQUhYO0FBU0lTLFVBQUksRUFBRTtBQVRWLEtBWkcsQ0FGQTtBQTBCUHZELGFBQVMsRUFBRTtBQUNQd0Qsa0JBQVksRUFBRSxzQkFBQ3RELElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNwQixJQUFmO0FBQUEsT0FEUDtBQUVQMkUseUJBQW1CLEVBQUUsNkJBQUN2RCxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDb0QsV0FBZjtBQUFBLE9BRmQ7QUFHUDVCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3NCLEVBQWY7QUFBQSxPQUhEO0FBSVBZLGtCQUFZLEVBQUUsc0JBQUN4RCxJQUFELEVBQVU7QUFDcEIsWUFBTXlELEdBQUcsR0FBSXpELElBQUksQ0FBQ3FELElBQU4sR0FBYyxFQUFkLEdBQW1CLE9BQS9CO0FBQ0EsZUFBT0ksR0FBUDtBQUNIO0FBUE07QUExQkosR0F2V0Y7QUEyWVRDLFFBQU0sRUFBRTtBQUNKaEUsU0FBSyxFQUFFLE9BREg7QUFFSjBELGVBQVcsRUFBRSxzRkFGVDtBQUdKTyxhQUFTLEVBQUUsU0FIUDtBQUlKNUMsU0FBSyxFQUFFLENBQ0g7QUFBRW5CLFVBQUksRUFBRSxtQ0FBUjtBQUE2Q29CLFNBQUcsRUFBRSw2Q0FBbEQ7QUFBaUc0QixRQUFFLEVBQUU7QUFBckcsS0FERyxFQUVIO0FBQUVoRCxVQUFJLEVBQUUsdUJBQVI7QUFBaUNvQixTQUFHLEVBQUUsNkNBQXRDO0FBQXFGNEIsUUFBRSxFQUFFO0FBQXpGLEtBRkcsQ0FKSDtBQVFKOUMsYUFBUyxFQUFFO0FBQ1B1QixjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUMxQixJQUFmO0FBQUEsT0FESDtBQUVQNEIsWUFBTSxFQUFFLGdCQUFDRixJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDc0IsRUFBZjtBQUFBO0FBRkQ7QUFSUCxHQTNZQztBQXdaVGdCLFNBQU8sRUFBRTtBQUNMbEUsU0FBSyxFQUFFO0FBREYsR0F4WkE7QUEyWlRtRSxRQUFNLEVBQUU7QUFDSm5FLFNBQUssRUFBRSxFQURIO0FBRUpFLFFBQUksRUFBRSxFQUZGO0FBR0ptQixTQUFLLEVBQUUsQ0FDSDtBQUNJbkIsVUFBSSxFQUFFLFFBRFY7QUFFSW9CLFNBQUcsRUFBRSw2QkFGVDtBQUdJNEIsUUFBRSxFQUFFO0FBSFIsS0FERyxFQU1IO0FBQ0loRCxVQUFJLEVBQUUsZ0JBRFY7QUFFSW9CLFNBQUcsRUFBRSx3REFGVDtBQUdJNEIsUUFBRSxFQUFFO0FBSFIsS0FORyxDQUhIO0FBZUo5QyxhQUFTLEVBQUU7QUFDUHVCLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQzFCLElBQWY7QUFBQSxPQURIO0FBRVA0QixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNzQixFQUFmO0FBQUE7QUFGRDtBQWZQO0FBM1pDLENBQWI7QUFpYmU3RCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMWVhOWQxYTgyNzhiZjIzOGZiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogRGF0YSBaSC1UV1xyXG4gKlxyXG4gKiBAYXV0aG9yIEJhY29uQmFvXHJcbiAqIEBsaW5rIGh0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvXHJcbiAqL1xyXG5cclxuY29uc3Qgc3ltYm9sID0ge1xyXG4gICAgYW5kOiAn44CBJyxcclxufTtcclxuY29uc3QgcGF0ZW50U3RhdHVzID0ge1xyXG4gICAgZ3JhbnRlZDogJ+aguOWHhicsXHJcbn07XHJcbmNvbnN0IHBhdGVudFNlbGYgPSB7XHJcbiAgICBuYW1lOiAn5p6X6ICV6JGGJyxcclxuICAgIHNlbGY6IHRydWUsXHJcbn07XHJcbmNvbnN0IHB1YlNlbGYgPSB7XHJcbiAgICBuYW1lOiAn5p6X6ICV6JGGJyxcclxuICAgIHNlbGY6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFuZzogJ3poLXR3JyxcclxuICAgIHBhZ2VUaXRsZTogJ+aIkeaYryBCYWNvbkJhbywg5oiR5Zac5q2h5b6c5b6J5Zyo55+l6K2Y55qE5rW35rSL6KOh77yBJyxcclxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJ+aIkeaYryBCYWNvbkJhbyDvvIzllpzmraHlvpzlvonlnKjnn6XorZjnmoTmtbfmtIvoo6HvvIznhrHmhJvmjqLntKJJVOaHieeUqOiIh0lU55u46Zec55qE5raI6LK76ICF6KGM54K644CCJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2UuanBnJyxcclxuICAgIHN5bWJvbCxcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWxsbzogJ+WXqO+8geaIkeaYrycsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAn5p6X6ICV6JGGJyxcclxuICAgICAgICBpbnRybzogJ+aIkeWWnOatoeW+nOW+ieWcqOefpeitmOeahOa1t+a0i+ijoe+8jOeGseaEm+aOoue0oklU5oeJ55So6IiHSVTnm7jpl5znmoTmtojosrvogIXooYzngrrvvIznm67liY3lnKjoh7rngaPlpKflrbjmlLvoroDljZrlo6vlrbjkvY3jgIInLFxyXG4gICAgICAgIC8vIGludHJvOiAn54ax5oSb5o6i57SiSVTmh4nnlKjoiIdJVOebuOmXnOeahOa2iOiyu+iAheihjOeCuu+8jOebruWJjeWcqOiHuueBo+Wkp+WtuOaUu+iugOWNmuWjq+WtuOS9jeOAguaIkeWWnOatoeW+nOW+ieWcqOefpeitmOeahOa1t+a0i+ijoe+8jOacieaZguWcqOmAmeeJh+a1t+a0i+ijoee/u+a7vuOAgeizo+iQjOOAgeaLjeiCmuearuOAgiAo4pePXFwn4pehXFwn4pePKScsXHJcbiAgICAgICAgaW50cm9FbW9qaTogJyjil49cXCfil6FcXCfil48pJyxcclxuICAgIH0sXHJcbiAgICByZXNlYXJjaEludGVyZXN0OiB7XHJcbiAgICAgICAgdGl0bGU6ICfnoJTnqbboiIjotqMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWLmh4nnlKgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5raI6LK76ICF6KGM54K6JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ+a2iOiyu+iAheaEn+efpScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZXNjcmliZTogJ+mblueEtuaIkeacieS4jeWwkUlU6ZaL55m855qE57aT6amX77yM5L2G5oiR5pu05oOz5LqG6KejSVTmtojosrvogIXoiIdJVOS6kuWLleaZgueahOS4u+ingOaEn+WPl+iIh+aDs+azleOAglxcbuWboOatpO+8jOaIkeeGseaEm+aOoue0ouaciemXnElU5raI6LK76ICF5oSf55+l6IiH6KGM54K655qE54++6LGh77yM54m55Yil5piv5raJ5Y+K55+b55u+55qE54++6LGh77yM5YyF5ZCr5oiQ5ZugKOKAmHdoeeKAmSnoiIflhbblm6Dmnpzpl5zkv4Io4oCYaG934oCZKeOAgicsXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS50ZXh0fWAsXHJcbiAgICAgICAgICAgIG1vcmVEZXNjcmliZTogKGRlc2NyaWJlKSA9PiBkZXNjcmliZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVkdToge1xyXG4gICAgICAgIHRpdGxlOiAn5a245q23JyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZWdyZWU6ICfljZrlo6vnlJ8nLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAn5ZyL56uL6Ie654Gj5aSn5a24JyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICfos4foqIrnrqHnkIblrbjns7snLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZWdyZWU6ICfnoqnlo6snLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAn5ZyL56uL5Lit5aSu5aSn5a24JyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICfos4foqIrnrqHnkIblrbjns7snLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZWdyZWU6ICflrbjlo6snLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAn5ZyL56uL5bGP5p2x5ZWG5qWt5oqA6KGT5a246ZmiJyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICfos4foqIrnrqHnkIblrbjns7snLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5kZWdyZWV9IHwgJHtpdGVtLmRlcHR9LCAke2l0ZW0uc2Nob29sfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHA6IHtcclxuICAgICAgICB0aXRsZTogJ+e2k+attycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE2LzknLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAyMC8xMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICflro/nooHogqHku73mnInpmZDlhazlj7gnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ+WDueWAvOWJteaWsOS4reW/gycsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICflsIjmoYjlt6XnqIvluKsnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVGltZTogJzIwMTQvMScsXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6ICcyMDE0LzInLFxyXG4gICAgICAgICAgICAgICAgY29tOiAn546J5bGx6K2J5Yi4JyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICfpm7vlrZDllYbli5npg6gnLFxyXG4gICAgICAgICAgICAgICAgcG9zOiAn5a+m57+S55SfJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZnJvbVRpbWV9IH4gJHtpdGVtLnRvVGltZX0gfCAke2l0ZW0uY29tfe+8jCR7aXRlbS5kZXB0fe+8jCR7aXRlbS5wb3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGludmVudDoge1xyXG4gICAgICAgIHRpdGxlOiAn5bCI5YipL+eZvOaYjicsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6amX6K2J57ay6Lev6YCa6Kmx6Lqr5Lu955qE5pa55rOV5Y+K55u46Zec6KOd572uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk3MTEyOTMnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTcxMTI5MycsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTE4MzU2NzUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTE4MzU2NzVBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMjAwMzEzOTAxJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAyMDAzMTM5MDFBMScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdFUCBFUDM3MTY1MjYnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvRVAzNzE2NTI2QTEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7ln7rmlrzljYDloYrpj4jnmoTntrLot6/pgJroqbHouqvku73pqZforYnmlrnms5UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIfos4fmupDlgaXlurfnrqHnkIbmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcwNDc4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzA0NzgzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu6LOH5rqQ5YGl5bq35oCn55qE5qqi5ris5pa55rOV77yM6YGp55So5pa86Leo57ay5Z+f6IiH6Leo6YCa6KiK5Y2U5a6aJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Z+65pa85bWM5YWl5byP6KaW56qX55qE57ay6aCB5Yqg6LyJ5pa55rOV5Y+K5YW26KOd572uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2OTIyMzInLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY5MjIzMicsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeorue2sumggeeahEhUVFAvSFRUUFPmt7flkIjlhaflrrnlkYjnj77mlrnlvI8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpoa/npLroo53nva7lj4rlhbbpoa/npLrmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTQ3MzgzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTk0NzM4MycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruWcluWxpOW8j+WFp+WuueeuoeeQhuezu+e1sScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruWPiumfs+ioiumMhOmfs+aOp+WItuaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjcyNjMwJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2NzI2MzAnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7lj6/mjInlo5PpjITpn7PnmoTpgJroqbEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfntrLpoIHlhaflrrnoh6rmiJHkv53orbfmlrnms5Xlj4rkvLrmnI3lmagnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYyNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjI0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTA3OTE5MicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTA3OTE5MkEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAwODk5MDQnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDA4OTkwNEExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu5Z+65pa85LiA5qyh5oCn5a+G56K855qE57ay6aCB6Ieq5oiR5L+d6K235pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u6IiH5YW26Zui57ea5pu05paw56iL5byP55qE5pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2Njk2MTQnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY2OTYxNCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTAzNjIzMjInLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTAzNjIzMjJBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu6JeJ55Sx5YWn5bWM5byP54CP6Ka95Zmo5a+m6LiQ5pu05paw6Zui57ea56iL5byP55qE5pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u6IiH5YW26KaW56qX566h55CG5pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkyNjAxNycsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MjYwMTcnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7lgbXmuKzngI/opr3lmajoppbnqpfnmoTkvp3os7TnmoTmlrnms5UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIflhbbntrLpoIHmh4nnlKjnqIvlvI/ku4vpnaLnmoTpm6Lnt5rpgYvooYzmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTE3NTY4JywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkxNzU2OCcsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeorueUqOaWvOmboue3muaDheWig+eahFdlYiBBUElzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u5Y+K5YW25Z+65pa85ouW5pS+5pON5L2c55qE5o6n5Yi25pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkwNTY3MCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MDU2NzAnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7lj6/lnKjngI/opr3lmajkuIrmi5bmlL7nmoTmkqXomZ/mlrnlvI8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7oiIflhbbmk43kvZzmlrnms5Xku6Xlj4rkvLrmnI3lmagnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY0MTk2OScsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjQxOTY5Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDEwOTQyODkyNScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjEwOTQyODkyNUEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAxOTAwMDc1MjAnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDE5MDAwNzUyMEExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu6YGp55So5Zyo57ea6IiH6Zui57ea5oOF5aKD55qE5Z+65pa854CP6Ka95Zmo55qE6Z2I5rS76Kqe6Z+z5pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uaW52ZW50b3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIOKAnCR7aXRlbS5uYW1lfeKAnSwg55Sz6KuL5Lq6JHtpdGVtLmFwcGxpY2FudH1gLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgZ2VuZXJhdGVBYnN0cmFjdDogKGl0ZW0pID0+IGAke2l0ZW0uaW50cm99YCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm1TcGFjZSA9ICh0KSA9PiB0LnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gcm1TcGFjZShsaW5rLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwYXRlbnQtJHt0ZXh0LnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGF3YXJkOiB7XHJcbiAgICAgICAgdGl0bGU6ICfnjY7poIUnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflubTluqblgIvkurrntK/nqY3nlLPoq4vlsIjliKnnjY4nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTcnLCAnMjAxOCddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ+enkeaKgCcsICfnoJTnqbYnXSxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn56Kp5aOr6KuW5paH6KiI55Wr55m86KGo5pyD5pyA5L2z6KuW5paH542OJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE2J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ+Wci+eri+S4reWkruWkp+WtuOizh+ioiueuoeeQhuWtuOezuycsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsn56CU56m2J10sXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+ahg+Wckue4o+WNg+mHjOmmrOWwi+ahg+iKsea6kOWJtealreertuizvembu+WtkOWVhuWLmee1hOWGoOi7jScsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNSddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICflnIvnq4vkuK3lpK7lpKflrbgnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ+WVhualrScsICfooYzpircnXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICfpmorplbcnLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogWyfpjb7kvbPnkLMnLCAn6buD5Yag6I+xJywgJ+mZs+avheWvsCcsICfpmbPkuq3lroknXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dvb2dsZSBBZFdvcmRzIENoYWxsZW5nZSDkup7ou40nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnR29vZ2xlIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ+ihjOmKtyddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ+maiumVtycsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ+abueW/l+m+jScsICfpu4PmooPlsZUnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+izh+ioiuWtuOe+pOWwiOmhjOaIkOaenOertuizvee2sui3r+aHieeUqOe1hOWGoOi7jScsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxMyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICflnIvnq4vlsY/mnbHllYbmpa3mioDooZPlrbjpmaInLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ+enkeaKgCcsICfllYbmpa0nXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICfpmorplbcnLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogWyfmm7nlv5fpvo0nLCAn6buD5qKD5bGVJ10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnj63ntJrntrLpoIHoo73kvZzmr5Tos73lhqDou40nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMDUnLCAnMjAwNyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICflsY/mnbHnuKPmmI7mraPlnIvkuK0nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ+enkeaKgCddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ+maiumVtycsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ+Wci+S4reWQjOWtuOWAkSddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5uYW1lfSwgJHtpdGVtLmJ5fSwgKCR7aXRlbS55ZWFycy5qb2luKHN5bWJvbC5hbmQpfSlgLFxyXG4gICAgICAgICAgICBnZXRJdGVtTGFiZWxzOiAoaXRlbSkgPT4gaXRlbS5sYWJlbHMsXHJcbiAgICAgICAgICAgIHdpdGhNZW1iZXJzOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ud2l0aC5sZW5ndGggPiAwKSBzdHIgPSBg5pOU5Lu7JHtpdGVtLnJvbGV977yM6IiHICR7aXRlbS53aXRoLmpvaW4oc3ltYm9sLmFuZCl9IOWQiOWKm+mBlOaIkC4gKmA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RlczogKCkgPT4gJyog5L6d54Wn5aeT5ZCN6K6A6Z+z6YCG5ZCR5o6S5bqPJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHB1YmxpY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6ICfokZfkvZwnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICflionmiJDosaonIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAn5ZSQ6YGL5L2zJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHB1YlNlbGYsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAn6Kyd5L6d6Z2cJyB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfooYzli5XmkJzlsIvkuIvvvIzkvaDmnIPotornnIvotormhJvlroPll47vvJ/kvb/nlKjogIXnn6XorZjoiIfonqLluZXlsLrlr7jlpoLkvZXlvbHpn7/lk4HniYzmlYjmnpwnLFxyXG4gICAgICAgICAgICAgICAgb246ICfkuK3lsbHnrqHnkIboqZXoq5YnLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogJ2RvaToxMC42MTYwL1NZU01SLjIwMjAwOV8yOCgzKS4wMDAxJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTElOSycsIHVybDogJ2h0dHA6Ly9tZ3RyLmNtLm5zeXN1LmVkdS50dy9mdWxsam91cm5hbF9wcm9jZXNzLnBocD9pZD0xNDgmcG5vPU01ZjY5OThmZGI2YWUwJnA9Mzc5JywgZ2E6ICdwYXBlcl8yMDIwLTEnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxNicsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Lul6Kqq5pyN55+l6K2Y5qih5byP6IiH6J6i5bmV5bC65a+45o6i6KiO6Zec6Y215a2X5buj5ZGK55qE6YeN6KSH5pud5YWJ5bCN5ZOB54mM6KiY5oa26IiH5ZOB54mM5oWL5bqm5LmL5b2x6Z+/JyxcclxuICAgICAgICAgICAgICAgIG9uOiAn5ZyL56uL5Lit5aSu5aSn5a2477yM56Kp5aOr6KuW5paHJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8xMTI5Ni94MjZwdm4nLCBnYTogJ21hc3Rlcl90aGVzaXMnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5hdXRob3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfe+8jO+8iCR7aXRlbS55ZWFyfe+8ie+8jOKAnCR7aXRlbS5uYW1lfeKAne+8jCR7aXRlbS5vbn0uYCxcclxuICAgICAgICAgICAgaXRlbU5vdGU6IChpdGVtKSA9PiBpdGVtLm5vdGUsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay5uYW1lLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2VydGlmaWNhdGlvbjoge1xyXG4gICAgICAgIHRpdGxlOiAn5YW35pyJ54m56Imy55qE6KqN6K2JJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYWludGl0bGU6ICcyMDIz5bm0R29vZ2xl5pW45L2N5Lq65omN6KqN6K2JICgxLzMpIC0gR29vZ2xlIEFkcyDpoJjln58nLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICfntpPnlLHpgJrpgY5Hb29nbGUgQWRz5pCc5bCL5buj5ZGK6KqN6K2J44CB5b2x54mH5buj5ZGK6KqN6K2J562JJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnMjAyM+W5tEdvb2dsZeaVuOS9jeS6uuaJjeiqjeitiSAoMi8zKSAtIEdvb2dsZSBDbG91ZCDpoJjln58nLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICfntpPnlLHorYnmmI7lhbflgpkgR29vZ2xlIENsb3VkIOeahCBJbmZyYXN0cnVjdHVyZSwgTmV0d29ya2luZywgU2VjdXJpdHksIERhdGEsIE1MLCBhbmQgQUkg562J55+l6K2YJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnMjAyM+W5tEdvb2dsZeaVuOS9jeS6uuaJjeiqjeitiSAoMy8zKSAtIEdvb2dsZSBBbmFseXRpY3Mg6aCY5Z+fJyxcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAn57aT55Sx6YCa6YGOR29vZ2xlIEFuYWx5dGljc+iqjeitiScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbU1haW50aXRsZTogKGl0ZW0pID0+IGl0ZW0ubWFpbnRpdGxlLFxyXG4gICAgICAgICAgICBpdGVtU3VidGl0bGU6IChpdGVtKSA9PiBpdGVtLnN1YnRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbm9ucHJvZml0OiB7XHJcbiAgICAgICAgdGl0bGU6ICflhaznm4rlsI/lsIjmoYgnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflj7Doqp7lhZInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICflhY3osrvmh4nnlKjnqIvlvI/oiIfmnI3li5nvvIzljZTliqnkurrlgJHlnKjpgYfliLDpnIDopoHlj7Doqp7mup3pgJrnmoTmmYLlgJnvvIzlj6/ku6Xlv6vpgJ/mlrnkvr/nmoTmn6XoqaLliLDmiYDpnIDnmoTlj7Doqp7oqp7pn7PjgILoh6oyMDEz5bm06ZaL5aeL5pyN5YuZ44CCJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9UYWl3YW5lc2VXaXphcmQvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICd0d3dfd2Vic2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0x1Y2t5QmFjb24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfplovmlL7ljp/lp4vnorznmoTlhY3osrvlsI/lnovmir3njY7nqIvlvI/vvIzljZTliqnooYzpirfkurrlk6HmiJbmmK/noJTnqbbnlJ/nrYnlnKjpnIDopoHmir3njY7mmYLlj6/ku6Xlv6vpgJ/mk7rmlL7njY7poIXoiIflrozmiJDmir3njY7jgILoh6oyMDE25bm06ZaL5aeL5pyN5YuZ44CCJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9MdWNreUJhY29uLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAnbHVja3liYWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0TmFtZTogKGl0ZW0pID0+IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgaXRlbVRleHREZXNjcmlwdGlvbjogKGl0ZW0pID0+IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgICAgIHNlcnZpY2VTdGF0ZTogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IChpdGVtLmxpdmUpID8gJycgOiAn5pyN5YuZ5bey5YGc5q2iJztcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlc3BvcnQ6IHtcclxuICAgICAgICB0aXRsZTogJ+mBiuaIsi/pm7vnq7YnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn5oiR5pu+5piv5YCLQ1PnjqnlrrbvvIxMZXJuSGVyTiDmmK/miJHlnKjpgYrmiLLkuK3kvb/nlKjnmoTlkI3nqLHvvIzmiJHmk4XplbfnlKjlvbHpn7Pljrvmjqjlu6Ppm7vnq7bvvIzmiJHlibXkvZznmoTlvbHniYflub7kuY7pg73mspLmnInlgIvkurrnh5/liKnvvIzluIzmnJvkvaDmnIPllpzmraHjgILlpoLmnpzlnKjpgYrmiLLkuK3pgYfliLDmiJHvvIzmraHov47ot5/miJHmiZPlgIvmi5vlkbzvvIEnLFxyXG4gICAgICAgIHByb21vdGlvbjogJ+eyvumBuOWFqemDqOW9seeJh++8micsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVtZW1icmFuY2Ugb2YgQ291bnRlci1TdHJpa2UgMS42JywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1uclVNWlppaGVMVScsIGdhOiAnY3NfbW92aWVfMScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnMSBZZWFyIG9mIFwiU0suRGVscGFuXCInLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWdtOTN5R1B2TUFNJywgZ2E6ICdjc19tb3ZpZV8yJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICAgIHRpdGxlOiAn6IGv57WhJyxcclxuICAgIH0sXHJcbiAgICBzb2NpYWw6IHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dpdEh1YicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYmFjb25iYW8nLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZ2l0aHViJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dvb2dsZSBTY2hvbGFyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL2NpdGF0aW9ucz91c2VyPU9LZEh4MllBQUFBSicsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19nc2Nob2xhcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9