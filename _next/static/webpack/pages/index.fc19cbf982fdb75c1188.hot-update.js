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
    emoji: '(●\'◡\'●)'
  },
  researchInterest: {
    title: '研究興趣',
    items: [{
      text: 'Web應用'
    }, {
      text: '消費者行為'
    }, {
      text: '感知'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS96aC10dy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJlbW9qaSIsInJlc2VhcmNoSW50ZXJlc3QiLCJ0aXRsZSIsIml0ZW1zIiwidGV4dCIsImRlc2NyaWJlIiwiZm9ybWF0dGVyIiwiaXRlbVRleHQiLCJpdGVtIiwibW9yZURlc2NyaWJlIiwiZWR1IiwiZGVncmVlIiwic2Nob29sIiwiZGVwdCIsImV4cCIsImZyb21UaW1lIiwidG9UaW1lIiwiY29tIiwicG9zIiwiaW52ZW50IiwieWVhciIsImludmVudG9ycyIsImFwcGxpY2FudCIsImxpbmtzIiwidXJsIiwic3RhdHVzIiwibWFwIiwiaSIsImpvaW4iLCJsaW5rVGV4dCIsImxpbmsiLCJnZW5lcmF0ZUFic3RyYWN0IiwibGlua0dhIiwicm1TcGFjZSIsInQiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiYXdhcmQiLCJvcmlnaW5hbEluZm8iLCJ5ZWFycyIsImJ5IiwibGFiZWxzIiwicm9sZSIsImdldEl0ZW1MYWJlbHMiLCJ3aXRoTWVtYmVycyIsInN0ciIsImxlbmd0aCIsInB1YmxpY2F0aW9uIiwiYXV0aG9ycyIsIm9uIiwibm90ZSIsImdhIiwiaXRlbU5vdGUiLCJjZXJ0aWZpY2F0aW9uIiwibWFpbnRpdGxlIiwic3VidGl0bGUiLCJpdGVtTWFpbnRpdGxlIiwiaXRlbVN1YnRpdGxlIiwibm9ucHJvZml0IiwiZGVzY3JpcHRpb24iLCJsaXZlIiwiaXRlbVRleHROYW1lIiwiaXRlbVRleHREZXNjcmlwdGlvbiIsInNlcnZpY2VTdGF0ZSIsInJlcyIsImVzcG9ydCIsInByb21vdGlvbiIsImNvbnRhY3QiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBOzs7Ozs7QUFPQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsS0FBRyxFQUFFO0FBRE0sQ0FBZjtBQUdBLElBQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBRFEsQ0FBckI7QUFHQSxJQUFNQyxVQUFVLEdBQUc7QUFDZkMsTUFBSSxFQUFFLEtBRFM7QUFFZkMsTUFBSSxFQUFFO0FBRlMsQ0FBbkI7QUFJQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkYsTUFBSSxFQUFFLEtBRE07QUFFWkMsTUFBSSxFQUFFO0FBRk0sQ0FBaEI7QUFLQSxJQUFNRSxJQUFJLEdBQUc7QUFDVEMsTUFBSSxFQUFFLE9BREc7QUFFVEMsV0FBUyxFQUFFLDRCQUZGO0FBR1RDLGlCQUFlLEVBQUUsK0NBSFI7QUFJVEMsYUFBVyxFQUFFLG9CQUpKO0FBS1RaLFFBQU0sRUFBTkEsTUFMUztBQU1UYSxNQUFJLEVBQUU7QUFDRkMsU0FBSyxFQUFFLE1BREw7QUFFRlQsUUFBSSxFQUFFLFVBRko7QUFHRlUsV0FBTyxFQUFFLEtBSFA7QUFJRkMsU0FBSyxFQUFFLGlEQUpMO0FBS0Y7QUFDQUMsU0FBSyxFQUFFO0FBTkwsR0FORztBQWNUQyxrQkFBZ0IsRUFBRTtBQUNkQyxTQUFLLEVBQUUsTUFETztBQUVkQyxTQUFLLEVBQUUsQ0FDSDtBQUNJQyxVQUFJLEVBQUU7QUFEVixLQURHLEVBSUg7QUFDSUEsVUFBSSxFQUFFO0FBRFYsS0FKRyxFQU9IO0FBQ0lBLFVBQUksRUFBRTtBQURWLEtBUEcsQ0FGTztBQWFkQyxZQUFRLEVBQUUsd0dBYkk7QUFjZEMsYUFBUyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLHlCQUFhQSxJQUFJLENBQUNKLElBQWxCO0FBQUEsT0FESDtBQUVQSyxrQkFBWSxFQUFFLHNCQUFDSixRQUFEO0FBQUEsZUFBY0EsUUFBZDtBQUFBO0FBRlA7QUFkRyxHQWRUO0FBaUNUSyxLQUFHLEVBQUU7QUFDRFIsU0FBSyxFQUFFLElBRE47QUFFREMsU0FBSyxFQUFFLENBQ0g7QUFDSVEsWUFBTSxFQUFFLEtBRFo7QUFFSUMsWUFBTSxFQUFFLFFBRlo7QUFHSUMsVUFBSSxFQUFFO0FBSFYsS0FERyxFQU1IO0FBQ0lGLFlBQU0sRUFBRSxJQURaO0FBRUlDLFlBQU0sRUFBRSxRQUZaO0FBR0lDLFVBQUksRUFBRTtBQUhWLEtBTkcsRUFXSDtBQUNJRixZQUFNLEVBQUUsSUFEWjtBQUVJQyxZQUFNLEVBQUUsWUFGWjtBQUdJQyxVQUFJLEVBQUU7QUFIVixLQVhHLENBRk47QUFtQkRQLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDRyxNQUFsQixnQkFBOEJILElBQUksQ0FBQ0ssSUFBbkMsZUFBNENMLElBQUksQ0FBQ0ksTUFBakQ7QUFBQTtBQURIO0FBbkJWLEdBakNJO0FBd0RURSxLQUFHLEVBQUU7QUFDRFosU0FBSyxFQUFFLElBRE47QUFFREMsU0FBSyxFQUFFLENBQ0g7QUFDSVksY0FBUSxFQUFFLFFBRGQ7QUFFSUMsWUFBTSxFQUFFLFNBRlo7QUFHSUMsU0FBRyxFQUFFLFVBSFQ7QUFJSUosVUFBSSxFQUFFLFFBSlY7QUFLSUssU0FBRyxFQUFFO0FBTFQsS0FERyxFQVFIO0FBQ0lILGNBQVEsRUFBRSxRQURkO0FBRUlDLFlBQU0sRUFBRSxRQUZaO0FBR0lDLFNBQUcsRUFBRSxNQUhUO0FBSUlKLFVBQUksRUFBRSxPQUpWO0FBS0lLLFNBQUcsRUFBRTtBQUxULEtBUkcsQ0FGTjtBQWtCRFosYUFBUyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLHlCQUFhQSxJQUFJLENBQUNPLFFBQWxCLGdCQUFnQ1AsSUFBSSxDQUFDUSxNQUFyQyxnQkFBaURSLElBQUksQ0FBQ1MsR0FBdEQsbUJBQTZEVCxJQUFJLENBQUNLLElBQWxFLG1CQUEwRUwsSUFBSSxDQUFDVSxHQUEvRTtBQUFBO0FBREg7QUFsQlYsR0F4REk7QUE4RVRDLFFBQU0sRUFBRTtBQUNKakIsU0FBSyxFQUFFLE9BREg7QUFFSkMsU0FBSyxFQUFFLENBQ0g7QUFDSWlCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxrQkFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxZQUFSO0FBQXNCb0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUE1RyxPQURHLEVBRUg7QUFBRWtCLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLGdEQUE3QjtBQUErRUMsY0FBTSxFQUFFO0FBQXZGLE9BRkcsRUFHSDtBQUFFckIsWUFBSSxFQUFFLGdCQUFSO0FBQTBCb0IsV0FBRyxFQUFFLG1EQUEvQjtBQUFvRkMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUF6RyxPQUhHLEVBSUg7QUFBRWtCLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLCtDQUE3QjtBQUE4RUMsY0FBTSxFQUFFO0FBQXRGLE9BSkcsQ0FQWDtBQWFJMUIsV0FBSyxFQUFFO0FBYlgsS0FERyxFQWdCSDtBQUNJcUIsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1BsQyxVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLGVBTFY7QUFNSWtDLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVuQixZQUFJLEVBQUUsWUFBUjtBQUFzQm9CLFdBQUcsRUFBRSwwREFBM0I7QUFBdUZDLGNBQU0sRUFBRXhDLFlBQVksQ0FBQ0M7QUFBNUcsT0FERyxDQVBYO0FBVUlhLFdBQUssRUFBRTtBQVZYLEtBaEJHLEVBNEJIO0FBQ0lxQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUGxDLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsb0JBTFY7QUFNSWtDLGVBQVMsRUFBRSxXQU5mO0FBT0lDLFdBQUssRUFBRSxDQUNIO0FBQUVuQixZQUFJLEVBQUUsWUFBUjtBQUFzQm9CLFdBQUcsRUFBRSwwREFBM0I7QUFBdUZDLGNBQU0sRUFBRXhDLFlBQVksQ0FBQ0M7QUFBNUcsT0FERyxDQVBYO0FBVUlhLFdBQUssRUFBRTtBQVZYLEtBNUJHLEVBd0NIO0FBQ0lxQixVQUFJLEVBQUUsTUFEVjtBQUVJQyxlQUFTLEVBQUUsQ0FDUGxDLFVBRE8sQ0FGZjtBQUtJQyxVQUFJLEVBQUUsWUFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLDREQUE3QjtBQUEyRkMsY0FBTSxFQUFFO0FBQW5HLE9BREcsQ0FQWDtBQVVJMUIsV0FBSyxFQUFFO0FBVlgsS0F4Q0csRUFvREg7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxlQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLFlBQVI7QUFBc0JvQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUV4QyxZQUFZLENBQUNDO0FBQTVHLE9BREcsQ0FQWDtBQVVJYSxXQUFLLEVBQUU7QUFWWCxLQXBERyxFQWdFSDtBQUNJcUIsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1BsQyxVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLGdCQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLFlBQVI7QUFBc0JvQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUV4QyxZQUFZLENBQUNDO0FBQTVHLE9BREcsRUFFSDtBQUFFa0IsWUFBSSxFQUFFLGNBQVI7QUFBd0JvQixXQUFHLEVBQUUsZ0RBQTdCO0FBQStFQyxjQUFNLEVBQUV4QyxZQUFZLENBQUNDO0FBQXBHLE9BRkcsRUFHSDtBQUFFa0IsWUFBSSxFQUFFLGdCQUFSO0FBQTBCb0IsV0FBRyxFQUFFLG1EQUEvQjtBQUFvRkMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUF6RyxPQUhHLENBUFg7QUFZSWEsV0FBSyxFQUFFO0FBWlgsS0FoRUcsRUE4RUg7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxpQkFMVjtBQU1Ja0MsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRW5CLFlBQUksRUFBRSxZQUFSO0FBQXNCb0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFeEMsWUFBWSxDQUFDQztBQUE1RyxPQURHLEVBRUg7QUFBRWtCLFlBQUksRUFBRSxjQUFSO0FBQXdCb0IsV0FBRyxFQUFFLGdEQUE3QjtBQUErRUMsY0FBTSxFQUFFO0FBQXZGLE9BRkcsQ0FQWDtBQVdJMUIsV0FBSyxFQUFFO0FBWFgsS0E5RUcsRUEyRkg7QUFDSXFCLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQbEMsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSxjQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLGNBQVI7QUFBd0JvQixXQUFHLEVBQUUsNERBQTdCO0FBQTJGQyxjQUFNLEVBQUU7QUFBbkcsT0FERyxDQVBYO0FBVUkxQixXQUFLLEVBQUU7QUFWWCxLQTNGRyxFQXVHSDtBQUNJcUIsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1BsQyxVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLHVCQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLGNBQVI7QUFBd0JvQixXQUFHLEVBQUUsNERBQTdCO0FBQTJGQyxjQUFNLEVBQUU7QUFBbkcsT0FERyxDQVBYO0FBVUkxQixXQUFLLEVBQUU7QUFWWCxLQXZHRyxFQW1ISDtBQUNJcUIsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1BsQyxVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLG1CQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLGNBQVI7QUFBd0JvQixXQUFHLEVBQUUsNERBQTdCO0FBQTJGQyxjQUFNLEVBQUU7QUFBbkcsT0FERyxDQVBYO0FBVUkxQixXQUFLLEVBQUU7QUFWWCxLQW5IRyxFQStISDtBQUNJcUIsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1BsQyxVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLGlCQUxWO0FBTUlrQyxlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFbkIsWUFBSSxFQUFFLFlBQVI7QUFBc0JvQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUV4QyxZQUFZLENBQUNDO0FBQTVHLE9BREcsRUFFSDtBQUFFa0IsWUFBSSxFQUFFLGNBQVI7QUFBd0JvQixXQUFHLEVBQUUsZ0RBQTdCO0FBQStFQyxjQUFNLEVBQUV4QyxZQUFZLENBQUNDO0FBQXBHLE9BRkcsRUFHSDtBQUFFa0IsWUFBSSxFQUFFLGdCQUFSO0FBQTBCb0IsV0FBRyxFQUFFLG1EQUEvQjtBQUFvRkMsY0FBTSxFQUFFO0FBQTVGLE9BSEcsQ0FQWDtBQVlJMUIsV0FBSyxFQUFFO0FBWlgsS0EvSEcsQ0FGSDtBQWdKSk8sYUFBUyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLHlCQUFhQSxJQUFJLENBQUNhLFNBQUwsQ0FBZUssR0FBZixDQUFtQixVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ3ZDLElBQVQ7QUFBQSxTQUFuQixFQUFrQ3dDLElBQWxDLENBQXVDN0MsTUFBTSxDQUFDQyxHQUE5QyxDQUFiLGdCQUFxRXdCLElBQUksQ0FBQ1ksSUFBMUUsc0JBQXFGWixJQUFJLENBQUNwQixJQUExRix1Q0FBdUdvQixJQUFJLENBQUNjLFNBQTVHO0FBQUEsT0FESDtBQUVQTyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUMxQixJQUFmO0FBQUEsT0FGSDtBQUdQMkIsc0JBQWdCLEVBQUUsMEJBQUN2QixJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ1QsS0FBbEI7QUFBQSxPQUhYO0FBSVBpQyxZQUFNLEVBQUUsZ0JBQUNGLElBQUQsRUFBVTtBQUNkLFlBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVEsR0FBUixFQUFhUCxJQUFiLENBQWtCLEVBQWxCLENBQVA7QUFBQSxTQUFoQjs7QUFDQSxZQUFNeEIsSUFBSSxHQUFHNkIsT0FBTyxDQUFDSCxJQUFJLENBQUMxQixJQUFOLENBQXBCO0FBQ0EsZ0NBQWlCQSxJQUFJLENBQUNnQyxXQUFMLEVBQWpCO0FBQ0g7QUFSTTtBQWhKUCxHQTlFQztBQXlPVEMsT0FBSyxFQUFFO0FBQ0huQyxTQUFLLEVBQUUsSUFESjtBQUVIQyxTQUFLLEVBQUUsQ0FDSDtBQUNJZixVQUFJLEVBQUUsYUFEVjtBQUVJa0Qsa0JBQVksRUFBRSxLQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUhYO0FBSUlDLFFBQUUsRUFBRSxXQUpSO0FBS0lDLFlBQU0sRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLENBTFo7QUFNSSxjQUFNO0FBTlYsS0FERyxFQVNIO0FBQ0lyRCxVQUFJLEVBQUUsZ0JBRFY7QUFFSWtELGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRSxjQUpSO0FBS0lDLFlBQU0sRUFBRSxDQUFDLElBQUQsQ0FMWjtBQU1JLGNBQU07QUFOVixLQVRHLEVBaUJIO0FBQ0lyRCxVQUFJLEVBQUUsdUJBRFY7QUFFSWtELGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRSxRQUpSO0FBS0lDLFlBQU0sRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLENBTFo7QUFNSUMsVUFBSSxFQUFFLElBTlY7QUFPSSxjQUFNLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCO0FBUFYsS0FqQkcsRUEwQkg7QUFDSXRELFVBQUksRUFBRSw2QkFEVjtBQUVJa0Qsa0JBQVksRUFBRSxLQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELENBSFg7QUFJSUMsUUFBRSxFQUFFLGFBSlI7QUFLSUMsWUFBTSxFQUFFLENBQUMsSUFBRCxDQUxaO0FBTUlDLFVBQUksRUFBRSxJQU5WO0FBT0ksY0FBTSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBUFYsS0ExQkcsRUFtQ0g7QUFDSXRELFVBQUksRUFBRSxtQkFEVjtBQUVJa0Qsa0JBQVksRUFBRSxLQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELENBSFg7QUFJSUMsUUFBRSxFQUFFLFlBSlI7QUFLSUMsWUFBTSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FMWjtBQU1JQyxVQUFJLEVBQUUsSUFOVjtBQU9JLGNBQU0sQ0FBQyxLQUFELEVBQVEsS0FBUjtBQVBWLEtBbkNHLEVBNENIO0FBQ0l0RCxVQUFJLEVBQUUsWUFEVjtBQUVJa0Qsa0JBQVksRUFBRSxLQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUhYO0FBSUlDLFFBQUUsRUFBRSxTQUpSO0FBS0lDLFlBQU0sRUFBRSxDQUFDLElBQUQsQ0FMWjtBQU1JQyxVQUFJLEVBQUUsSUFOVjtBQU9JLGNBQU0sQ0FBQyxPQUFEO0FBUFYsS0E1Q0csQ0FGSjtBQXdESHBDLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSx5QkFBYUEsSUFBSSxDQUFDcEIsSUFBbEIsZUFBMkJvQixJQUFJLENBQUNnQyxFQUFoQyxnQkFBd0NoQyxJQUFJLENBQUMrQixLQUFMLENBQVdYLElBQVgsQ0FBZ0I3QyxNQUFNLENBQUNDLEdBQXZCLENBQXhDO0FBQUEsT0FESDtBQUVQMkQsbUJBQWEsRUFBRSx1QkFBQ25DLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNpQyxNQUFmO0FBQUEsT0FGUjtBQUdQRyxpQkFBVyxFQUFFLHFCQUFDcEMsSUFBRCxFQUFVO0FBQ25CLFlBQUlxQyxHQUFHLEdBQUcsRUFBVjtBQUNBLFlBQUlyQyxJQUFJLFFBQUosQ0FBVXNDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEJELEdBQUcseUJBQVFyQyxJQUFJLENBQUNrQyxJQUFiLDBCQUF1QmxDLElBQUksUUFBSixDQUFVb0IsSUFBVixDQUFlN0MsTUFBTSxDQUFDQyxHQUF0QixDQUF2QiwrQkFBSDtBQUMxQixlQUFPNkQsR0FBUDtBQUNIO0FBUE07QUF4RFIsR0F6T0U7QUEyU1RFLGFBQVcsRUFBRTtBQUNUN0MsU0FBSyxFQUFFLElBREU7QUFFVEMsU0FBSyxFQUFFLENBQ0g7QUFDSWlCLFVBQUksRUFBRSxNQURWO0FBRUk0QixhQUFPLEVBQUUsQ0FDTDtBQUFFNUQsWUFBSSxFQUFFO0FBQVIsT0FESyxFQUVMO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BRkssRUFHTEUsT0FISyxFQUlMO0FBQUVGLFlBQUksRUFBRTtBQUFSLE9BSkssQ0FGYjtBQVFJQSxVQUFJLEVBQUUsbUNBUlY7QUFTSTZELFFBQUUsRUFBRSxRQVRSO0FBVUlDLFVBQUksRUFBRSxxQ0FWVjtBQVdJM0IsV0FBSyxFQUFFLENBQ0g7QUFBRW5DLFlBQUksRUFBRSxNQUFSO0FBQWdCb0MsV0FBRyxFQUFFLHFGQUFyQjtBQUE0RzJCLFVBQUUsRUFBRTtBQUFoSCxPQURHO0FBWFgsS0FERyxFQWdCSDtBQUNJL0IsVUFBSSxFQUFFLE1BRFY7QUFFSTRCLGFBQU8sRUFBRSxDQUNMMUQsT0FESyxDQUZiO0FBS0lGLFVBQUksRUFBRSx1Q0FMVjtBQU1JNkQsUUFBRSxFQUFFLGFBTlI7QUFPSUMsVUFBSSxFQUFFLEVBUFY7QUFRSTNCLFdBQUssRUFBRSxDQUNIO0FBQUVuQyxZQUFJLEVBQUUsTUFBUjtBQUFnQm9DLFdBQUcsRUFBRSxxQ0FBckI7QUFBNEQyQixVQUFFLEVBQUU7QUFBaEUsT0FERztBQVJYLEtBaEJHLENBRkU7QUErQlQ3QyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ3dDLE9BQUwsQ0FBYXRCLEdBQWIsQ0FBaUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUN2QyxJQUFUO0FBQUEsU0FBakIsRUFBZ0N3QyxJQUFoQyxDQUFxQzdDLE1BQU0sQ0FBQ0MsR0FBNUMsQ0FBYix5QkFBa0V3QixJQUFJLENBQUNZLElBQXZFLCtCQUFpRlosSUFBSSxDQUFDcEIsSUFBdEYseUJBQStGb0IsSUFBSSxDQUFDeUMsRUFBcEc7QUFBQSxPQURIO0FBRVBHLGNBQVEsRUFBRSxrQkFBQzVDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUMwQyxJQUFmO0FBQUEsT0FGSDtBQUdQckIsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDMUMsSUFBZjtBQUFBLE9BSEg7QUFJUDRDLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3FCLEVBQWY7QUFBQTtBQUpEO0FBL0JGLEdBM1NKO0FBaVZURSxlQUFhLEVBQUU7QUFDWG5ELFNBQUssRUFBRSxTQURJO0FBRVhDLFNBQUssRUFBRSxDQUNIO0FBQ0ltRCxlQUFTLEVBQUUseUNBRGY7QUFFSUMsY0FBUSxFQUFFO0FBRmQsS0FERyxFQUtIO0FBQ0lELGVBQVMsRUFBRSwyQ0FEZjtBQUVJQyxjQUFRLEVBQUU7QUFGZCxLQUxHLEVBU0g7QUFDSUQsZUFBUyxFQUFFLCtDQURmO0FBRUlDLGNBQVEsRUFBRTtBQUZkLEtBVEcsQ0FGSTtBQWdCWGpELGFBQVMsRUFBRTtBQUNQa0QsbUJBQWEsRUFBRSx1QkFBQ2hELElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUM4QyxTQUFmO0FBQUEsT0FEUjtBQUVQRyxrQkFBWSxFQUFFLHNCQUFDakQsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQytDLFFBQWY7QUFBQTtBQUZQO0FBaEJBLEdBalZOO0FBc1dURyxXQUFTLEVBQUU7QUFDUHhELFNBQUssRUFBRSxPQURBO0FBRVBDLFNBQUssRUFBRSxDQUNIO0FBQ0lmLFVBQUksRUFBRSxLQURWO0FBRUl1RSxpQkFBVyxFQUFFLDBEQUZqQjtBQUdJcEMsV0FBSyxFQUFFLENBQ0g7QUFDSUMsV0FBRyxFQUFFLDZDQURUO0FBRUkyQixVQUFFLEVBQUU7QUFGUixPQURHLENBSFg7QUFTSVMsVUFBSSxFQUFFO0FBVFYsS0FERyxFQVlIO0FBQ0l4RSxVQUFJLEVBQUUsWUFEVjtBQUVJdUUsaUJBQVcsRUFBRSw0REFGakI7QUFHSXBDLFdBQUssRUFBRSxDQUNIO0FBQ0lDLFdBQUcsRUFBRSx3Q0FEVDtBQUVJMkIsVUFBRSxFQUFFO0FBRlIsT0FERyxDQUhYO0FBU0lTLFVBQUksRUFBRTtBQVRWLEtBWkcsQ0FGQTtBQTBCUHRELGFBQVMsRUFBRTtBQUNQdUQsa0JBQVksRUFBRSxzQkFBQ3JELElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNwQixJQUFmO0FBQUEsT0FEUDtBQUVQMEUseUJBQW1CLEVBQUUsNkJBQUN0RCxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDbUQsV0FBZjtBQUFBLE9BRmQ7QUFHUDNCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3FCLEVBQWY7QUFBQSxPQUhEO0FBSVBZLGtCQUFZLEVBQUUsc0JBQUN2RCxJQUFELEVBQVU7QUFDcEIsWUFBTXdELEdBQUcsR0FBSXhELElBQUksQ0FBQ29ELElBQU4sR0FBYyxFQUFkLEdBQW1CLE9BQS9CO0FBQ0EsZUFBT0ksR0FBUDtBQUNIO0FBUE07QUExQkosR0F0V0Y7QUEwWVRDLFFBQU0sRUFBRTtBQUNKL0QsU0FBSyxFQUFFLE9BREg7QUFFSnlELGVBQVcsRUFBRSx3RkFGVDtBQUdKTyxhQUFTLEVBQUUsU0FIUDtBQUlKM0MsU0FBSyxFQUFFLENBQ0g7QUFBRW5CLFVBQUksRUFBRSxtQ0FBUjtBQUE2Q29CLFNBQUcsRUFBRSw2Q0FBbEQ7QUFBaUcyQixRQUFFLEVBQUU7QUFBckcsS0FERyxFQUVIO0FBQUUvQyxVQUFJLEVBQUUsdUJBQVI7QUFBaUNvQixTQUFHLEVBQUUsNkNBQXRDO0FBQXFGMkIsUUFBRSxFQUFFO0FBQXpGLEtBRkcsQ0FKSDtBQVFKN0MsYUFBUyxFQUFFO0FBQ1B1QixjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUMxQixJQUFmO0FBQUEsT0FESDtBQUVQNEIsWUFBTSxFQUFFLGdCQUFDRixJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDcUIsRUFBZjtBQUFBO0FBRkQ7QUFSUCxHQTFZQztBQXVaVGdCLFNBQU8sRUFBRTtBQUNMakUsU0FBSyxFQUFFO0FBREYsR0F2WkE7QUEwWlRrRSxRQUFNLEVBQUU7QUFDSmxFLFNBQUssRUFBRSxFQURIO0FBRUpFLFFBQUksRUFBRSxFQUZGO0FBR0ptQixTQUFLLEVBQUUsQ0FDSDtBQUNJbkIsVUFBSSxFQUFFLFFBRFY7QUFFSW9CLFNBQUcsRUFBRSw2QkFGVDtBQUdJMkIsUUFBRSxFQUFFO0FBSFIsS0FERyxFQU1IO0FBQ0kvQyxVQUFJLEVBQUUsZ0JBRFY7QUFFSW9CLFNBQUcsRUFBRSx3REFGVDtBQUdJMkIsUUFBRSxFQUFFO0FBSFIsS0FORyxDQUhIO0FBZUo3QyxhQUFTLEVBQUU7QUFDUHVCLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQzFCLElBQWY7QUFBQSxPQURIO0FBRVA0QixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNxQixFQUFmO0FBQUE7QUFGRDtBQWZQO0FBMVpDLENBQWI7QUFnYmU1RCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYzE5Y2JmOTgyZmRiNzVjMTE4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogRGF0YSBaSC1UV1xyXG4gKlxyXG4gKiBAYXV0aG9yIEJhY29uQmFvXHJcbiAqIEBsaW5rIGh0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvXHJcbiAqL1xyXG5cclxuY29uc3Qgc3ltYm9sID0ge1xyXG4gICAgYW5kOiAn44CBJyxcclxufTtcclxuY29uc3QgcGF0ZW50U3RhdHVzID0ge1xyXG4gICAgZ3JhbnRlZDogJ+aguOWHhicsXHJcbn07XHJcbmNvbnN0IHBhdGVudFNlbGYgPSB7XHJcbiAgICBuYW1lOiAn5p6X6ICV6JGGJyxcclxuICAgIHNlbGY6IHRydWUsXHJcbn07XHJcbmNvbnN0IHB1YlNlbGYgPSB7XHJcbiAgICBuYW1lOiAn5p6X6ICV6JGGJyxcclxuICAgIHNlbGY6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFuZzogJ3poLXR3JyxcclxuICAgIHBhZ2VUaXRsZTogJ+aIkeaYryBCYWNvbkJhbywg5oiR5Zac5q2h5b6c5b6J5Zyo55+l6K2Y55qE5rW35rSL6KOh77yBJyxcclxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJ+aIkeaYryBCYWNvbkJhbyDvvIzllpzmraHlvpzlvonlnKjnn6XorZjnmoTmtbfmtIvoo6HvvIznhrHmhJvmjqLntKJJVOaHieeUqOiIh0lU55u46Zec55qE5raI6LK76ICF6KGM54K644CCJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2UuanBnJyxcclxuICAgIHN5bWJvbCxcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWxsbzogJ+WXqO+8geaIkeaYrycsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAn5p6X6ICV6JGGJyxcclxuICAgICAgICBpbnRybzogJ+aIkeWWnOatoeW+nOW+ieWcqOefpeitmOeahOa1t+a0i+ijoe+8jOeGseaEm+aOoue0oklU5oeJ55So6IiHSVTnm7jpl5znmoTmtojosrvogIXooYzngrrvvIznm67liY3lnKjoh7rngaPlpKflrbjmlLvoroDljZrlo6vlrbjkvY3jgIInLFxyXG4gICAgICAgIC8vIGludHJvOiAn54ax5oSb5o6i57SiSVTmh4nnlKjoiIdJVOebuOmXnOeahOa2iOiyu+iAheihjOeCuu+8jOebruWJjeWcqOiHuueBo+Wkp+WtuOaUu+iugOWNmuWjq+WtuOS9jeOAguaIkeWWnOatoeW+nOW+ieWcqOefpeitmOeahOa1t+a0i+ijoe+8jOacieaZguWcqOmAmeeJh+a1t+a0i+ijoee/u+a7vuOAgeizo+iQjOOAgeaLjeiCmuearuOAgiAo4pePXFwn4pehXFwn4pePKScsXHJcbiAgICAgICAgZW1vamk6ICco4pePXFwn4pehXFwn4pePKScsXHJcbiAgICB9LFxyXG4gICAgcmVzZWFyY2hJbnRlcmVzdDoge1xyXG4gICAgICAgIHRpdGxlOiAn56CU56m26IiI6LajJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnV2Vi5oeJ55SoJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ+a2iOiyu+iAheihjOeCuicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfmhJ/nn6UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVzY3JpYmU6ICfpm5bnhLbmiJHmnInkuI3lsJFJVOmWi+eZvOeahOe2k+mpl++8jOS9huaIkeabtOaDs+S6huino0lU5raI6LK76ICF6IiHSVTkupLli5XmmYLnmoTkuLvop4DmhJ/lj5foiIfmg7Pms5XjgIJcXG7lm6DmraTvvIzmiJHnhrHmhJvmjqLntKLmnInpl5xJVOa2iOiyu+iAheaEn+efpeiIh+ihjOeCuueahOePvuixoe+8jOWMheWQq+aIkOWboCjigJh3aHnigJkp6IiH5YW25Zug5p6c6Zec5L+CKOKAmGhvd+KAmSnvvIznibnliKXmmK/mtonlj4rnn5vnm77nmoTnj77osaHjgIInLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0udGV4dH1gLFxyXG4gICAgICAgICAgICBtb3JlRGVzY3JpYmU6IChkZXNjcmliZSkgPT4gZGVzY3JpYmUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlZHU6IHtcclxuICAgICAgICB0aXRsZTogJ+WtuOattycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAn5Y2a5aOr55SfJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ+Wci+eri+iHuueBo+Wkp+WtuCcsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAn6LOH6KiK566h55CG5a2457O7JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAn56Kp5aOrJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ+Wci+eri+S4reWkruWkp+WtuCcsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAn6LOH6KiK566h55CG5a2457O7JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAn5a245aOrJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ+Wci+eri+Wxj+adseWVhualreaKgOihk+WtuOmZoicsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAn6LOH6KiK566h55CG5a2457O7JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZGVncmVlfSB8ICR7aXRlbS5kZXB0fSwgJHtpdGVtLnNjaG9vbH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwOiB7XHJcbiAgICAgICAgdGl0bGU6ICfntpPmrbcnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiAnMjAxNi85JyxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogJzIwMjAvMTInLFxyXG4gICAgICAgICAgICAgICAgY29tOiAn5a6P56KB6IKh5Lu95pyJ6ZmQ5YWs5Y+4JyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICflg7nlgLzlibXmlrDkuK3lv4MnLFxyXG4gICAgICAgICAgICAgICAgcG9zOiAn5bCI5qGI5bel56iL5birJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE0LzEnLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAxNC8yJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ+eOieWxseitieWIuCcsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAn6Zu75a2Q5ZWG5YuZ6YOoJyxcclxuICAgICAgICAgICAgICAgIHBvczogJ+Wvpue/kueUnycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmZyb21UaW1lfSB+ICR7aXRlbS50b1RpbWV9IHwgJHtpdGVtLmNvbX3vvIwke2l0ZW0uZGVwdH3vvIwke2l0ZW0ucG9zfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbnZlbnQ6IHtcclxuICAgICAgICB0aXRsZTogJ+WwiOWIqS/nmbzmmI4nLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mpl+itiee2sui3r+mAmuipsei6q+S7veeahOaWueazleWPiuebuOmXnOijnee9ricsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNzExMjkzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk3MTEyOTMnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExODM1Njc1JywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExODM1Njc1QScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDMxMzkwMScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMzEzOTAxQTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRVAgRVAzNzE2NTI2JywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0VQMzcxNjUyNkExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu5Z+65pa85Y2A5aGK6Y+I55qE57ay6Lev6YCa6Kmx6Lqr5Lu96amX6K2J5pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u6IiH6LOH5rqQ5YGl5bq3566h55CG5pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk3MDQ3ODMnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTcwNDc4MycsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruizh+a6kOWBpeW6t+aAp+eahOaqoua4rOaWueazle+8jOmBqeeUqOaWvOi3qOe2suWfn+iIh+i3qOmAmuioiuWNlOWumicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WfuuaWvOW1jOWFpeW8j+imlueql+eahOe2sumggeWKoOi8ieaWueazleWPiuWFtuijnee9ricsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjkyMjMyJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2OTIyMzInLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7ntrLpoIHnmoRIVFRQL0hUVFBT5re35ZCI5YWn5a655ZGI54++5pa55byPJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6aGv56S66KOd572u5Y+K5YW26aGv56S65pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTk0NzM4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5NDczODMnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7lnJblsaTlvI/lhaflrrnnrqHnkIbns7vntbEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfpm7vlrZDoo53nva7lj4rpn7PoqIrpjITpn7PmjqfliLbmlrnms5UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY3MjYzMCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjcyNjMwJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu5Y+v5oyJ5aOT6YyE6Z+z55qE6YCa6KmxJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn57ay6aCB5YWn5a656Ieq5oiR5L+d6K235pa55rOV5Y+K5Ly65pyN5ZmoJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2Njk2MjQnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY2OTYyNCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTEwNzkxOTInLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTEwNzkxOTJBJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMjAwMDg5OTA0JywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAyMDAwODk5MDRBMScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruWfuuaWvOS4gOasoeaAp+WvhueivOeahOe2sumggeiHquaIkeS/neitt+aWueazlScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruiIh+WFtumboue3muabtOaWsOeoi+W8j+eahOaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjY5NjE0JywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2Njk2MTQnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTEwMzYyMzIyJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTEwMzYyMzIyQScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeoruiXieeUseWFp+W1jOW8j+eAj+imveWZqOWvpui4kOabtOaWsOmboue3mueoi+W8j+eahOaWueazlScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruiIh+WFtuimlueql+euoeeQhuaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MjYwMTcnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTI2MDE3Jywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu5YG15ris54CP6Ka95Zmo6KaW56qX55qE5L6d6LO055qE5pa55rOVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u6IiH5YW257ay6aCB5oeJ55So56iL5byP5LuL6Z2i55qE6Zui57ea6YGL6KGM5pa55rOVJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkxNzU2OCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MTc1NjgnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICfkuIDnqK7nlKjmlrzpm6Lnt5rmg4XlooPnmoRXZWIgQVBJcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mbu+WtkOijnee9ruWPiuWFtuWfuuaWvOaLluaUvuaTjeS9nOeahOaOp+WItuaWueazlScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MDU2NzAnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTA1NjcwJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAn5LiA56iu5Y+v5Zyo54CP6Ka95Zmo5LiK5ouW5pS+55qE5pKl6Jmf5pa55byPJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Zu75a2Q6KOd572u6IiH5YW25pON5L2c5pa55rOV5Lul5Y+K5Ly65pyN5ZmoJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NDE5NjknLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY0MTk2OScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMDk0Mjg5MjUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMDk0Mjg5MjVBJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMTkwMDA3NTIwJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAxOTAwMDc1MjBBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ+S4gOeorumBqeeUqOWcqOe3muiIh+mboue3muaDheWig+eahOWfuuaWvOeAj+imveWZqOeahOmdiOa0u+iqnumfs+aWueazlScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmludmVudG9ycy5tYXAoKGkpID0+IGkubmFtZSkuam9pbihzeW1ib2wuYW5kKX0sICgke2l0ZW0ueWVhcn0pLCDigJwke2l0ZW0ubmFtZX3igJ0sIOeUs+iri+S6uiR7aXRlbS5hcHBsaWNhbnR9YCxcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGdlbmVyYXRlQWJzdHJhY3Q6IChpdGVtKSA9PiBgJHtpdGVtLmludHJvfWAsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJtU3BhY2UgPSAodCkgPT4gdC5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHJtU3BhY2UobGluay50ZXh0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgcGF0ZW50LSR7dGV4dC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhd2FyZDoge1xyXG4gICAgICAgIHRpdGxlOiAn542O6aCFJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5bm05bqm5YCL5Lq657Sv56mN55Sz6KuL5bCI5Yip542OJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE3JywgJzIwMTgnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWyfnp5HmioAnLCAn56CU56m2J10sXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+eiqeWjq+irluaWh+ioiOeVq+eZvOihqOacg+acgOS9s+irluaWh+eNjicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNiddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICflnIvnq4vkuK3lpK7lpKflrbjos4foqIrnrqHnkIblrbjns7snLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ+eglOeptiddLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmoYPlnJLnuKPljYPph4zppqzlsIvmoYPoirHmupDlibXmpa3nq7bos73pm7vlrZDllYbli5nntYTlhqDou40nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTUnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAn5ZyL56uL5Lit5aSu5aSn5a24JyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWyfllYbmpa0nLCAn6KGM6Yq3J10sXHJcbiAgICAgICAgICAgICAgICByb2xlOiAn6ZqK6ZW3JyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsn6Y2+5L2z55CzJywgJ+m7g+WGoOiPsScsICfpmbPmr4Xlr7AnLCAn6Zmz5Lqt5a6JJ10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHb29nbGUgQWRXb3JkcyBDaGFsbGVuZ2Ug5Lqe6LuNJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDEzJ10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0dvb2dsZSBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWyfooYzpircnXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICfpmorplbcnLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogWyfmm7nlv5fpvo0nLCAn6buD5qKD5bGVJ10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfos4foqIrlrbjnvqTlsIjpoYzmiJDmnpznq7bos73ntrLot6/mh4nnlKjntYTlhqDou40nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAn5ZyL56uL5bGP5p2x5ZWG5qWt5oqA6KGT5a246ZmiJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWyfnp5HmioAnLCAn5ZWG5qWtJ10sXHJcbiAgICAgICAgICAgICAgICByb2xlOiAn6ZqK6ZW3JyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsn5pu55b+X6b6NJywgJ+m7g+aig+WxlSddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn54+t57Sa57ay6aCB6KO95L2c5q+U6LO95Yag6LuNJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDA1JywgJzIwMDcnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAn5bGP5p2x57ij5piO5q2j5ZyL5LitJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWyfnp5HmioAnXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICfpmorplbcnLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogWyflnIvkuK3lkIzlrbjlgJEnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0ubmFtZX0sICR7aXRlbS5ieX0sICgke2l0ZW0ueWVhcnMuam9pbihzeW1ib2wuYW5kKX0pYCxcclxuICAgICAgICAgICAgZ2V0SXRlbUxhYmVsczogKGl0ZW0pID0+IGl0ZW0ubGFiZWxzLFxyXG4gICAgICAgICAgICB3aXRoTWVtYmVyczogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLndpdGgubGVuZ3RoID4gMCkgc3RyID0gYOaTlOS7uyR7aXRlbS5yb2xlfe+8jOiIhyAke2l0ZW0ud2l0aC5qb2luKHN5bWJvbC5hbmQpfSDlkIjlipvpgZTmiJAuYDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwdWJsaWNhdGlvbjoge1xyXG4gICAgICAgIHRpdGxlOiAn6JGX5L2cJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAn5YqJ5oiQ6LGqJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ+WUkOmBi+S9sycgfSxcclxuICAgICAgICAgICAgICAgICAgICBwdWJTZWxmLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ+isneS+nemdnCcgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6KGM5YuV5pCc5bCL5LiL77yM5L2g5pyD6LaK55yL6LaK5oSb5a6D5ZeO77yf5L2/55So6ICF55+l6K2Y6IiH6J6i5bmV5bC65a+45aaC5L2V5b2x6Z+/5ZOB54mM5pWI5p6cJyxcclxuICAgICAgICAgICAgICAgIG9uOiAn5Lit5bGx566h55CG6KmV6KuWJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICdkb2k6MTAuNjE2MC9TWVNNUi4yMDIwMDlfMjgoMykuMDAwMScsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xJTksnLCB1cmw6ICdodHRwOi8vbWd0ci5jbS5uc3lzdS5lZHUudHcvZnVsbGpvdXJuYWxfcHJvY2Vzcy5waHA/aWQ9MTQ4JnBubz1NNWY2OTk4ZmRiNmFlMCZwPTM3OScsIGdhOiAncGFwZXJfMjAyMC0xJyB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTYnLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHB1YlNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+S7peiqquacjeefpeitmOaooeW8j+iIh+ieouW5leWwuuWvuOaOouiojumXnOmNteWtl+W7o+WRiueahOmHjeikh+abneWFieWwjeWTgeeJjOiomOaGtuiIh+WTgeeJjOaFi+W6puS5i+W9semfvycsXHJcbiAgICAgICAgICAgICAgICBvbjogJ+Wci+eri+S4reWkruWkp+WtuO+8jOeiqeWjq+irluaWhycsXHJcbiAgICAgICAgICAgICAgICBub3RlOiAnJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTElOSycsIHVybDogJ2h0dHBzOi8vaGRsLmhhbmRsZS5uZXQvMTEyOTYveDI2cHZuJywgZ2E6ICdtYXN0ZXJfdGhlc2lzJyB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uYXV0aG9ycy5tYXAoKGkpID0+IGkubmFtZSkuam9pbihzeW1ib2wuYW5kKX3vvIzvvIgke2l0ZW0ueWVhcn3vvInvvIzigJwke2l0ZW0ubmFtZX3igJ3vvIwke2l0ZW0ub259LmAsXHJcbiAgICAgICAgICAgIGl0ZW1Ob3RlOiAoaXRlbSkgPT4gaXRlbS5ub3RlLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsubmFtZSxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNlcnRpZmljYXRpb246IHtcclxuICAgICAgICB0aXRsZTogJ+WFt+acieeJueiJsueahOiqjeitiScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnMjAyM+W5tEdvb2dsZeaVuOS9jeS6uuaJjeiqjeitiSAoMS8zKSAtIEdvb2dsZSBBZHMg6aCY5Z+fJyxcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAn57aT55Sx6YCa6YGOR29vZ2xlIEFkc+aQnOWwi+W7o+WRiuiqjeitieOAgeW9seeJh+W7o+WRiuiqjeitieetiScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1haW50aXRsZTogJzIwMjPlubRHb29nbGXmlbjkvY3kurrmiY3oqo3orYkgKDIvMykgLSBHb29nbGUgQ2xvdWQg6aCY5Z+fJyxcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAn57aT55Sx6K2J5piO5YW35YKZIEdvb2dsZSBDbG91ZCDnmoQgSW5mcmFzdHJ1Y3R1cmUsIE5ldHdvcmtpbmcsIFNlY3VyaXR5LCBEYXRhLCBNTCwgYW5kIEFJIOetieefpeitmCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1haW50aXRsZTogJzIwMjPlubRHb29nbGXmlbjkvY3kurrmiY3oqo3orYkgKDMvMykgLSBHb29nbGUgQW5hbHl0aWNzIOmgmOWfnycsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ+e2k+eUsemAmumBjkdvb2dsZSBBbmFseXRpY3Poqo3orYknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1NYWludGl0bGU6IChpdGVtKSA9PiBpdGVtLm1haW50aXRsZSxcclxuICAgICAgICAgICAgaXRlbVN1YnRpdGxlOiAoaXRlbSkgPT4gaXRlbS5zdWJ0aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5vbnByb2ZpdDoge1xyXG4gICAgICAgIHRpdGxlOiAn5YWs55uK5bCP5bCI5qGIJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Y+w6Kqe5YWSJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5YWN6LK75oeJ55So56iL5byP6IiH5pyN5YuZ77yM5Y2U5Yqp5Lq65YCR5Zyo6YGH5Yiw6ZyA6KaB5Y+w6Kqe5rqd6YCa55qE5pmC5YCZ77yM5Y+v5Lul5b+r6YCf5pa55L6/55qE5p+l6Kmi5Yiw5omA6ZyA55qE5Y+w6Kqe6Kqe6Z+z44CC6IeqMjAxM+W5tOmWi+Wni+acjeWLmeOAgicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vVGFpd2FuZXNlV2l6YXJkLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAndHd3X3dlYnNpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdMdWNreUJhY29uJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6ZaL5pS+5Y6f5aeL56K855qE5YWN6LK75bCP5Z6L5oq9542O56iL5byP77yM5Y2U5Yqp6KGM6Yq35Lq65ZOh5oiW5piv56CU56m255Sf562J5Zyo6ZyA6KaB5oq9542O5pmC5Y+v5Lul5b+r6YCf5pO65pS+542O6aCF6IiH5a6M5oiQ5oq9542O44CC6IeqMjAxNuW5tOmWi+Wni+acjeWLmeOAgicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vTHVja3lCYWNvbi8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYTogJ2x1Y2t5YmFjb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dE5hbWU6IChpdGVtKSA9PiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGl0ZW1UZXh0RGVzY3JpcHRpb246IChpdGVtKSA9PiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgICAgICBzZXJ2aWNlU3RhdGU6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSAoaXRlbS5saXZlKSA/ICcnIDogJ+acjeWLmeW3suWBnOatoic7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXNwb3J0OiB7XHJcbiAgICAgICAgdGl0bGU6ICfpgYrmiLIv6Zu756u2JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ+aIkemBjuWOu+aYr+WAi0NTZXLvvIwgTGVybkhlck4g5piv5oiR5Zyo6YGK5oiy5Lit5L2/55So55qE5ZCN56ix77yM5oiR5pOF6ZW355So5b2x6Z+z5Y675o6o5buj6Zu756u277yM5oiR5Ym15L2c55qE5b2x54mH5bm+5LmO6YO95rKS5pyJ5YCL5Lq654ef5Yip77yM5biM5pyb5L2g5pyD5Zac5q2h44CC5aaC5p6c5Zyo6YGK5oiy5Lit6YGH5Yiw5oiR77yM5bCx6Lef5oiR5omT5YCL5oub5ZG85ZCn77yBJyxcclxuICAgICAgICBwcm9tb3Rpb246ICfnsr7pgbjlhanpg6jlvbHniYfvvJonLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1JlbWVtYnJhbmNlIG9mIENvdW50ZXItU3RyaWtlIDEuNicsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bnJVTVpaaWhlTFUnLCBnYTogJ2NzX21vdmllXzEnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJzEgWWVhciBvZiBcIlNLLkRlbHBhblwiJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1nbTkzeUdQdk1BTScsIGdhOiAnY3NfbW92aWVfMicgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3Q6IHtcclxuICAgICAgICB0aXRsZTogJ+iBr+e1oScsXHJcbiAgICB9LFxyXG4gICAgc29jaWFsOiB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHaXRIdWInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2JhY29uYmFvJyxcclxuICAgICAgICAgICAgICAgIGdhOiAnZm9sbG93X2dpdGh1YicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHb29nbGUgU2Nob2xhcicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NjaG9sYXIuZ29vZ2xlLmNvbS9jaXRhdGlvbnM/dXNlcj1PS2RIeDJZQUFBQUonLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZ3NjaG9sYXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==