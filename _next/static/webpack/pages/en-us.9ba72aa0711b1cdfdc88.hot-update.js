webpackHotUpdate_N_E("pages/en-us",{

/***/ "./data/en-us.js":
/*!***********************!*\
  !*** ./data/en-us.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/*
 * Data EN-US
 *
 * @author BaconBao
 * @link https://baconbao.github.io
 */
var symbol = {
  and: ', '
};
var patentStatus = {
  granted: 'Granted'
};
var patentSelf = {
  name: 'Geng-Bao Lin',
  self: true
};
var pubSelf = {
  name: 'Geng-Bao Lin',
  self: true
};
var data = {
  lang: 'en-us',
  pageTitle: 'I am BaconBao, I love technology and its application!',
  pageDescription: 'Hi, I am BaconBao, I love technology and its application!',
  pageOgImage: 'images/ogimage_en.jpg',
  symbol: {
    and: ', '
  },
  main: {
    hello: 'Hi! I am',
    name: 'BaconBao',
    akaName: 'Geng-Bao Lin',
    intro: 'I love to explore IT application and IT-related consumer behavior, currently as a PhD student at National Taiwan University. I enjoy wandering in the ocean of knowledge, sometimes rolling, acting cute, and slapping belly in this ocean (●\'◡\'●).'
  },
  researchInterest: {
    title: 'Research interests',
    items: [{
      text: 'Web Application'
    }, {
      text: 'User Behavior'
    }, {
      text: 'Digital Marketing'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.text);
      }
    }
  },
  edu: {
    title: 'Education',
    items: [{
      degree: 'Ph.D student',
      school: 'National Taiwan University',
      dept: 'Department of Information Management'
    }, {
      degree: 'M.B.A.',
      school: 'National Central University',
      dept: 'Department of Information Management'
    }, {
      degree: 'B.B.A.',
      school: 'National Pingtung Institute of Commerce',
      dept: 'Department of Information Management'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.degree, " | ").concat(item.school, ", ").concat(item.dept);
      }
    }
  },
  exp: {
    title: 'Experiences',
    items: [{
      fromTime: '2016/9',
      toTime: '2020/12',
      com: 'Acer Inc.',
      dept: 'Value Lab',
      pos: 'Project engineer'
    }, {
      fromTime: '2014/1',
      toTime: '2014/2',
      com: 'E.SUN Securities',
      dept: 'Ecommerce Dept.',
      pos: 'Intern'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.fromTime, " ~ ").concat(item.toTime, " | ").concat(item.com, ", ").concat(item.dept, ", ").concat(item.pos);
      }
    }
  },
  invent: {
    title: 'Patents/Inventions',
    items: [{
      year: '2020',
      inventors: [patentSelf],
      name: 'Method of Identity Authentication for Voice over Internet Protocol Call and Related Device',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I711293',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI711293',
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
      intro: 'A blockchain-based method for verification of calling identity.'
    }, {
      year: '2020',
      inventors: [patentSelf],
      name: 'Electronic Device and Resource Health Management Method',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I704783',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI704783',
        status: patentStatus.granted
      }],
      intro: 'A method for detecting healthy of resources across domains and protocols.'
    }, {
      year: '2020',
      inventors: [patentSelf],
      name: 'Method and Device for Loading Web Page based on Iframe',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I692232',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI692232',
        status: patentStatus.granted
      }],
      intro: 'A method for presenting HTTP/HTTPS mixed contents on a webpage.'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: 'Display Device and Display Method Thereof',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201947383',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201947383',
        status: false
      }],
      intro: 'A layer-based content management system.'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: 'Electronic Device and Control Method of Audio Recording',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I672630',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI672630',
        status: patentStatus.granted
      }],
      intro: 'A method of press-to-record calls.'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: 'Webpage Content Self-Protection Method and Associated Server',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I669624',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669624',
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
      intro: 'A webpage self-protection method based on one-time passwords.'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: 'Electronic Device and Method for Offline Updating Application Program Thereof',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I669614',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669614',
        status: patentStatus.granted
      }, {
        text: 'CN 110362322',
        url: 'https://patents.google.com/patent/CN110362322A',
        status: false
      }],
      intro: 'A method for updating applications through an embedded browser in offline context.'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: 'Electronic Device and Web Page Management Method Thereof',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201926017',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201926017',
        status: false
      }],
      intro: 'A method for detecting window/tabs dependencies of browser.'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: 'Electronic Device and Offline Operation of Web Application Program Interface Method Thereof',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201917568',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201917568',
        status: false
      }],
      intro: 'A Web APIs in offline contexts.'
    }, {
      year: '2019',
      inventors: [patentSelf],
      name: 'Electronic Device and Control Method Thereof based on Drag-and-Drop Operation',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW 201905670',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201905670',
        status: false
      }],
      intro: 'A browser-based dialing method using drag and drop.'
    }, {
      year: '2018',
      inventors: [patentSelf],
      name: 'Electronic Device and Operation Method Thereof and Server Host Device',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I641969',
        url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI641969',
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
      intro: 'A flexible web-based voice solution in both online and offline contexts.'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.inventors.map(function (i) {
          return i.name;
        }).join(symbol.and), ", (").concat(item.year, "), \"").concat(item.name, ",\" Applicant is ").concat(item.applicant);
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
    title: 'Awards',
    items: [{
      name: 'Award for Accumulation of Individually Applied Patents',
      originalInfo: false,
      years: ['2017', '2018'],
      by: 'Acer Inc.'
    }, {
      name: 'The Best Paper of Master Thesis Presentation',
      originalInfo: '(Chinese: 碩士論文計畫發表會最佳論文獎)',
      years: ['2016'],
      by: 'Department of information management of NCU'
    }, {
      name: 'First place of Qianlima Taohuayuan entrepreneurial competition Ecommerce Group',
      originalInfo: '(Chinese: 桃園縣千里馬尋桃花源創業競賽電子商務組冠軍)',
      years: ['2015'],
      by: 'National Central University'
    }, {
      name: 'Second prize of Google AdWords Challenge',
      originalInfo: false,
      years: ['2013'],
      by: 'Google Inc.'
    }, {
      name: 'First place of NPIC Annual Researching Results Competition Web Group',
      originalInfo: '(Chinese: 資訊學群專題成果競賽網路應用組冠軍)',
      years: ['2013'],
      by: 'National Pingtung Institute of Commerce'
    }, {
      name: 'First place of Class Webpage Development Competition',
      originalInfo: '(Chinese: 班級網頁製作比賽冠軍)',
      years: ['2005', '2007'],
      by: 'The Ming Cheng JHS of Pingtung County'
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.name, " ").concat(item.originalInfo || '', " | Awarded by ").concat(item.by, ", (").concat(item.years.join(symbol.and), ")");
      }
    }
  },
  publication: {
    title: 'Publications',
    items: [{
      year: '2020',
      authors: [{
        name: 'Chen-Hao Liu'
      }, {
        name: 'Yun-Chia Tang'
      }, pubSelf, {
        name: 'Yi-Ching Hsieh'
      }],
      name: 'In mobile search, the more you see, the more you love ? How consumer knowledge and screen sizes affect branding effect',
      on: 'Sun Yat-Sen Management Review',
      note: '',
      links: [{
        name: 'LINK',
        url: 'http://mgtr.cm.nsysu.edu.tw/fulljournal_process.php?id=148&pno=M5f6998fdb6ae0&p=379',
        ga: 'paper_2020-1'
      }]
    }, {
      year: '2016',
      authors: [pubSelf],
      name: 'The Effect of Repetition of Keyword Advertising on Brand Recognition and Attitude with Persuasion Knowledge Model and Screen Size',
      on: 'National Central University, Master Thesis',
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
        }).join(symbol.and), ", (").concat(item.year, "), \"").concat(item.name, ",\" ").concat(item.on);
      },
      linkText: function linkText(link) {
        return link.name;
      },
      linkGa: function linkGa(link) {
        return link.ga;
      }
    }
  },
  nonprofit: {
    title: 'Non-profit projects',
    items: [{
      name: 'TaiwaneseWizard',
      description: 'Free application and service, helping users to quickly and easily find the pronunciation to communicate in Taiwanese. Since 2013.',
      links: [{
        url: 'https://baconbao.github.io/TaiwaneseWizard/',
        ga: 'tww_website'
      }],
      live: false
    }, {
      name: 'LuckyBacon',
      description: 'Open source raffling app, helping marketers or students to raffle quickly. Since 2016.',
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
        var res = item.live ? '' : 'The service has been discontinued.';
        return res;
      }
    }
  },
  esport: {
    title: 'Game/Esport',
    description: 'I am a CSer, "LernHerN" is my nickname in game. I like making video for the e-sports promotion, most of my videos are non-profit, hope you enjoy. If you meet me in game, just say Hi!',
    promotion: 'Featured video: ',
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
    title: 'Contact'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJyZXNlYXJjaEludGVyZXN0IiwidGl0bGUiLCJpdGVtcyIsInRleHQiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsIm5vbnByb2ZpdCIsImRlc2NyaXB0aW9uIiwibGl2ZSIsIml0ZW1UZXh0TmFtZSIsIml0ZW1UZXh0RGVzY3JpcHRpb24iLCJzZXJ2aWNlU3RhdGUiLCJyZXMiLCJlc3BvcnQiLCJwcm9tb3Rpb24iLCJjb250YWN0Iiwic29jaWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTs7Ozs7O0FBT0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLEtBQUcsRUFBRTtBQURNLENBQWY7QUFHQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQURRLENBQXJCO0FBR0EsSUFBTUMsVUFBVSxHQUFH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S0FERyxFQU1IO0FBQ0l2QyxVQUFJLEVBQUUsZ0JBRFY7QUFFSWtCLFNBQUcsRUFBRSx3REFGVDtBQUdJcUIsUUFBRSxFQUFFO0FBSFIsS0FORyxDQUhIO0FBZUp0QyxhQUFTLEVBQUU7QUFDUHNCLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3hCLElBQWY7QUFBQSxPQURIO0FBRVAwQixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNlLEVBQWY7QUFBQTtBQUZEO0FBZlA7QUE1V0MsQ0FBYjtBQWtZZW5ELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLXVzLjliYTcyYWEwNzExYjFjZGZkYzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBEYXRhIEVOLVVTXHJcbiAqXHJcbiAqIEBhdXRob3IgQmFjb25CYW9cclxuICogQGxpbmsgaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW9cclxuICovXHJcblxyXG5jb25zdCBzeW1ib2wgPSB7XHJcbiAgICBhbmQ6ICcsICcsXHJcbn07XHJcbmNvbnN0IHBhdGVudFN0YXR1cyA9IHtcclxuICAgIGdyYW50ZWQ6ICdHcmFudGVkJyxcclxufTtcclxuY29uc3QgcGF0ZW50U2VsZiA9IHtcclxuICAgIG5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuY29uc3QgcHViU2VsZiA9IHtcclxuICAgIG5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYW5nOiAnZW4tdXMnLFxyXG4gICAgcGFnZVRpdGxlOiAnSSBhbSBCYWNvbkJhbywgSSBsb3ZlIHRlY2hub2xvZ3kgYW5kIGl0cyBhcHBsaWNhdGlvbiEnLFxyXG4gICAgcGFnZURlc2NyaXB0aW9uOiAnSGksIEkgYW0gQmFjb25CYW8sIEkgbG92ZSB0ZWNobm9sb2d5IGFuZCBpdHMgYXBwbGljYXRpb24hJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2VfZW4uanBnJyxcclxuICAgIHN5bWJvbDoge1xyXG4gICAgICAgIGFuZDogJywgJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVsbG86ICdIaSEgSSBhbScsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAnR2VuZy1CYW8gTGluJyxcclxuICAgICAgICBpbnRybzogJ0kgbG92ZSB0byBleHBsb3JlIElUIGFwcGxpY2F0aW9uIGFuZCBJVC1yZWxhdGVkIGNvbnN1bWVyIGJlaGF2aW9yLCBjdXJyZW50bHkgYXMgYSBQaEQgc3R1ZGVudCBhdCBOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eS4gSSBlbmpveSB3YW5kZXJpbmcgaW4gdGhlIG9jZWFuIG9mIGtub3dsZWRnZSwgc29tZXRpbWVzIHJvbGxpbmcsIGFjdGluZyBjdXRlLCBhbmQgc2xhcHBpbmcgYmVsbHkgaW4gdGhpcyBvY2VhbiAo4pePXFwn4pehXFwn4pePKS4nLFxyXG4gICAgfSxcclxuICAgIHJlc2VhcmNoSW50ZXJlc3Q6IHtcclxuICAgICAgICB0aXRsZTogJ1Jlc2VhcmNoIGludGVyZXN0cycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlYiBBcHBsaWNhdGlvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdVc2VyIEJlaGF2aW9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0RpZ2l0YWwgTWFya2V0aW5nJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0udGV4dH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWR1OiB7XHJcbiAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ1BoLkQgc3R1ZGVudCcsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnTS5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnQi5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIFBpbmd0dW5nIEluc3RpdHV0ZSBvZiBDb21tZXJjZScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZGVncmVlfSB8ICR7aXRlbS5zY2hvb2x9LCAke2l0ZW0uZGVwdH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwOiB7XHJcbiAgICAgICAgdGl0bGU6ICdFeHBlcmllbmNlcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE2LzknLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAyMC8xMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ1ZhbHVlIExhYicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdQcm9qZWN0IGVuZ2luZWVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE0LzEnLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAxNC8yJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ0UuU1VOIFNlY3VyaXRpZXMnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0Vjb21tZXJjZSBEZXB0LicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdJbnRlcm4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5mcm9tVGltZX0gfiAke2l0ZW0udG9UaW1lfSB8ICR7aXRlbS5jb219LCAke2l0ZW0uZGVwdH0sICR7aXRlbS5wb3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGludmVudDoge1xyXG4gICAgICAgIHRpdGxlOiAnUGF0ZW50cy9JbnZlbnRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgSWRlbnRpdHkgQXV0aGVudGljYXRpb24gZm9yIFZvaWNlIG92ZXIgSW50ZXJuZXQgUHJvdG9jb2wgQ2FsbCBhbmQgUmVsYXRlZCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcxMTI5MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzExMjkzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTgzNTY3NScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTgzNTY3NUEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAzMTM5MDEnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDMxMzkwMUExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VQIEVQMzcxNjUyNicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9FUDM3MTY1MjZBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgYmxvY2tjaGFpbi1iYXNlZCBtZXRob2QgZm9yIHZlcmlmaWNhdGlvbiBvZiBjYWxsaW5nIGlkZW50aXR5LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBSZXNvdXJjZSBIZWFsdGggTWFuYWdlbWVudCBNZXRob2QnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcwNDc4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzA0NzgzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIGRldGVjdGluZyBoZWFsdGh5IG9mIHJlc291cmNlcyBhY3Jvc3MgZG9tYWlucyBhbmQgcHJvdG9jb2xzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgRGV2aWNlIGZvciBMb2FkaW5nIFdlYiBQYWdlIGJhc2VkIG9uIElmcmFtZScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjkyMjMyJywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2OTIyMzInLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgcHJlc2VudGluZyBIVFRQL0hUVFBTIG1peGVkIGNvbnRlbnRzIG9uIGEgd2VicGFnZS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEaXNwbGF5IERldmljZSBhbmQgRGlzcGxheSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5NDczODMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTQ3MzgzJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBsYXllci1iYXNlZCBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBvZiBBdWRpbyBSZWNvcmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY3MjYzMCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjcyNjMwJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2Qgb2YgcHJlc3MtdG8tcmVjb3JkIGNhbGxzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1dlYnBhZ2UgQ29udGVudCBTZWxmLVByb3RlY3Rpb24gTWV0aG9kIGFuZCBBc3NvY2lhdGVkIFNlcnZlcicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjY5NjI0JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2Njk2MjQnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExMDc5MTkyJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExMDc5MTkyQScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDA4OTkwNCcsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMDg5OTA0QTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIHdlYnBhZ2Ugc2VsZi1wcm90ZWN0aW9uIG1ldGhvZCBiYXNlZCBvbiBvbmUtdGltZSBwYXNzd29yZHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE1ldGhvZCBmb3IgT2ZmbGluZSBVcGRhdGluZyBBcHBsaWNhdGlvbiBQcm9ncmFtIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYxNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjE0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMDM2MjMyMicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMDM2MjMyMkEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgdXBkYXRpbmcgYXBwbGljYXRpb25zIHRocm91Z2ggYW4gZW1iZWRkZWQgYnJvd3NlciBpbiBvZmZsaW5lIGNvbnRleHQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIFdlYiBQYWdlIE1hbmFnZW1lbnQgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTI2MDE3JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkyNjAxNycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3Rpbmcgd2luZG93L3RhYnMgZGVwZW5kZW5jaWVzIG9mIGJyb3dzZXIuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9mZmxpbmUgT3BlcmF0aW9uIG9mIFdlYiBBcHBsaWNhdGlvbiBQcm9ncmFtIEludGVyZmFjZSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MTc1NjgnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTE3NTY4Jywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBXZWIgQVBJcyBpbiBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBUaGVyZW9mIGJhc2VkIG9uIERyYWctYW5kLURyb3AgT3BlcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkwNTY3MCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MDU2NzAnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIGJyb3dzZXItYmFzZWQgZGlhbGluZyBtZXRob2QgdXNpbmcgZHJhZyBhbmQgZHJvcC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgT3BlcmF0aW9uIE1ldGhvZCBUaGVyZW9mIGFuZCBTZXJ2ZXIgSG9zdCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY0MTk2OScsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjQxOTY5Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDEwOTQyODkyNScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjEwOTQyODkyNUEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAxOTAwMDc1MjAnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDE5MDAwNzUyMEExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBmbGV4aWJsZSB3ZWItYmFzZWQgdm9pY2Ugc29sdXRpb24gaW4gYm90aCBvbmxpbmUgYW5kIG9mZmxpbmUgY29udGV4dHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uaW52ZW50b3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiIEFwcGxpY2FudCBpcyAke2l0ZW0uYXBwbGljYW50fWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBnZW5lcmF0ZUFic3RyYWN0OiAoaXRlbSkgPT4gYCR7aXRlbS5pbnRyb31gLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybVNwYWNlID0gKHQpID0+IHQuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBybVNwYWNlKGxpbmsudGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHBhdGVudC0ke3RleHQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXdhcmQ6IHtcclxuICAgICAgICB0aXRsZTogJ0F3YXJkcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0F3YXJkIGZvciBBY2N1bXVsYXRpb24gb2YgSW5kaXZpZHVhbGx5IEFwcGxpZWQgUGF0ZW50cycsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNycsICcyMDE4J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgQmVzdCBQYXBlciBvZiBNYXN0ZXIgVGhlc2lzIFByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog56Kp5aOr6KuW5paH6KiI55Wr55m86KGo5pyD5pyA5L2z6KuW5paH542OKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE2J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0RlcGFydG1lbnQgb2YgaW5mb3JtYXRpb24gbWFuYWdlbWVudCBvZiBOQ1UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgUWlhbmxpbWEgVGFvaHVheXVhbiBlbnRyZXByZW5ldXJpYWwgY29tcGV0aXRpb24gRWNvbW1lcmNlIEdyb3VwJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogJyhDaGluZXNlOiDmoYPlnJLnuKPljYPph4zppqzlsIvmoYPoirHmupDlibXmpa3nq7bos73pm7vlrZDllYbli5nntYTlhqDou40pJyxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTUnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NlY29uZCBwcml6ZSBvZiBHb29nbGUgQWRXb3JkcyBDaGFsbGVuZ2UnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnR29vZ2xlIEluYy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgTlBJQyBBbm51YWwgUmVzZWFyY2hpbmcgUmVzdWx0cyBDb21wZXRpdGlvbiBXZWIgR3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOizh+ioiuWtuOe+pOWwiOmhjOaIkOaenOertuizvee2sui3r+aHieeUqOe1hOWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxMyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdOYXRpb25hbCBQaW5ndHVuZyBJbnN0aXR1dGUgb2YgQ29tbWVyY2UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgQ2xhc3MgV2VicGFnZSBEZXZlbG9wbWVudCBDb21wZXRpdGlvbicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog54+t57Sa57ay6aCB6KO95L2c5q+U6LO95Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDA1JywgJzIwMDcnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnVGhlIE1pbmcgQ2hlbmcgSkhTIG9mIFBpbmd0dW5nIENvdW50eScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLm5hbWV9ICR7aXRlbS5vcmlnaW5hbEluZm8gfHwgJyd9IHwgQXdhcmRlZCBieSAke2l0ZW0uYnl9LCAoJHtpdGVtLnllYXJzLmpvaW4oc3ltYm9sLmFuZCl9KWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwdWJsaWNhdGlvbjoge1xyXG4gICAgICAgIHRpdGxlOiAnUHVibGljYXRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQ2hlbi1IYW8gTGl1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1l1bi1DaGlhIFRhbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdZaS1DaGluZyBIc2llaCcgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSW4gbW9iaWxlIHNlYXJjaCwgdGhlIG1vcmUgeW91IHNlZSwgdGhlIG1vcmUgeW91IGxvdmUgPyBIb3cgY29uc3VtZXIga25vd2xlZGdlIGFuZCBzY3JlZW4gc2l6ZXMgYWZmZWN0IGJyYW5kaW5nIGVmZmVjdCcsXHJcbiAgICAgICAgICAgICAgICBvbjogJ1N1biBZYXQtU2VuIE1hbmFnZW1lbnQgUmV2aWV3JyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cDovL21ndHIuY20ubnN5c3UuZWR1LnR3L2Z1bGxqb3VybmFsX3Byb2Nlc3MucGhwP2lkPTE0OCZwbm89TTVmNjk5OGZkYjZhZTAmcD0zNzknLCBnYTogJ3BhcGVyXzIwMjAtMScgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE2JyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwdWJTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgRWZmZWN0IG9mIFJlcGV0aXRpb24gb2YgS2V5d29yZCBBZHZlcnRpc2luZyBvbiBCcmFuZCBSZWNvZ25pdGlvbiBhbmQgQXR0aXR1ZGUgd2l0aCBQZXJzdWFzaW9uIEtub3dsZWRnZSBNb2RlbCBhbmQgU2NyZWVuIFNpemUnLFxyXG4gICAgICAgICAgICAgICAgb246ICdOYXRpb25hbCBDZW50cmFsIFVuaXZlcnNpdHksIE1hc3RlciBUaGVzaXMnLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xJTksnLCB1cmw6ICdodHRwczovL2hkbC5oYW5kbGUubmV0LzExMjk2L3gyNnB2bicsIGdhOiAnbWFzdGVyX3RoZXNpcycgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmF1dGhvcnMubWFwKChpKSA9PiBpLm5hbWUpLmpvaW4oc3ltYm9sLmFuZCl9LCAoJHtpdGVtLnllYXJ9KSwgXCIke2l0ZW0ubmFtZX0sXCIgJHtpdGVtLm9ufWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay5uYW1lLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbm9ucHJvZml0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdOb24tcHJvZml0IHByb2plY3RzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGFpd2FuZXNlV2l6YXJkJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRnJlZSBhcHBsaWNhdGlvbiBhbmQgc2VydmljZSwgaGVscGluZyB1c2VycyB0byBxdWlja2x5IGFuZCBlYXNpbHkgZmluZCB0aGUgcHJvbnVuY2lhdGlvbiB0byBjb21tdW5pY2F0ZSBpbiBUYWl3YW5lc2UuIFNpbmNlIDIwMTMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9UYWl3YW5lc2VXaXphcmQvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICd0d3dfd2Vic2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0x1Y2t5QmFjb24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdPcGVuIHNvdXJjZSByYWZmbGluZyBhcHAsIGhlbHBpbmcgbWFya2V0ZXJzIG9yIHN0dWRlbnRzIHRvIHJhZmZsZSBxdWlja2x5LiBTaW5jZSAyMDE2LicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vTHVja3lCYWNvbi8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYTogJ2x1Y2t5YmFjb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dE5hbWU6IChpdGVtKSA9PiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGl0ZW1UZXh0RGVzY3JpcHRpb246IChpdGVtKSA9PiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgICAgICBzZXJ2aWNlU3RhdGU6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSAoaXRlbS5saXZlKSA/ICcnIDogJ1RoZSBzZXJ2aWNlIGhhcyBiZWVuIGRpc2NvbnRpbnVlZC4nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVzcG9ydDoge1xyXG4gICAgICAgIHRpdGxlOiAnR2FtZS9Fc3BvcnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSSBhbSBhIENTZXIsIFwiTGVybkhlck5cIiBpcyBteSBuaWNrbmFtZSBpbiBnYW1lLiBJIGxpa2UgbWFraW5nIHZpZGVvIGZvciB0aGUgZS1zcG9ydHMgcHJvbW90aW9uLCBtb3N0IG9mIG15IHZpZGVvcyBhcmUgbm9uLXByb2ZpdCwgaG9wZSB5b3UgZW5qb3kuIElmIHlvdSBtZWV0IG1lIGluIGdhbWUsIGp1c3Qgc2F5IEhpIScsXHJcbiAgICAgICAgcHJvbW90aW9uOiAnRmVhdHVyZWQgdmlkZW86ICcsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVtZW1icmFuY2Ugb2YgQ291bnRlci1TdHJpa2UgMS42JywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1uclVNWlppaGVMVScsIGdhOiAnY3NfbW92aWVfMScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnMSBZZWFyIG9mIFwiU0suRGVscGFuXCInLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWdtOTN5R1B2TUFNJywgZ2E6ICdjc19tb3ZpZV8yJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCcsXHJcbiAgICB9LFxyXG4gICAgc29jaWFsOiB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHaXRIdWInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2JhY29uYmFvJyxcclxuICAgICAgICAgICAgICAgIGdhOiAnZm9sbG93X2dpdGh1YicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHb29nbGUgU2Nob2xhcicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NjaG9sYXIuZ29vZ2xlLmNvbS9jaXRhdGlvbnM/dXNlcj1PS2RIeDJZQUFBQUonLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZ3NjaG9sYXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==