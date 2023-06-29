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
    intro: 'I majored in Information Management, currently as a PhD student at National Taiwan University. I love technology and explore its impacts. I enjoy wandering in the ocean of knowledge, sometimes rolling, acting cute, and slapping belly in this ocean (●\'◡\'●).'
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
        status: false
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
        status: false
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
        }).join(symbol.and), ", (").concat(item.year, "), \"").concat(item.name, ",\" Applicant ").concat(item.applicant);
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
    text: 'Follow me: ',
    links: [{
      text: 'Facebook',
      url: 'https://www.facebook.com/baconbao',
      ga: 'follow_fb'
    }, {
      text: 'GitHub',
      url: 'https://github.com/baconbao',
      ga: 'follow_github'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJyZXNlYXJjaEludGVyZXN0IiwidGl0bGUiLCJpdGVtcyIsInRleHQiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsIm5vbnByb2ZpdCIsImRlc2NyaXB0aW9uIiwibGl2ZSIsIml0ZW1UZXh0TmFtZSIsIml0ZW1UZXh0RGVzY3JpcHRpb24iLCJzZXJ2aWNlU3RhdGUiLCJyZXMiLCJlc3BvcnQiLCJwcm9tb3Rpb24iLCJjb250YWN0Iiwic29jaWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTs7Ozs7O0FBT0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLEtBQUcsRUFBRTtBQURNLENBQWY7QUFHQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQURRLENBQXJCO0FBR0EsSUFBTUMsVUFBVSxHQUFH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LFFBRFY7QUFFSWtCLFNBQUcsRUFBRSw2QkFGVDtBQUdJcUIsUUFBRSxFQUFFO0FBSFIsS0FORyxDQUhIO0FBZUp0QyxhQUFTLEVBQUU7QUFDUHNCLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3hCLElBQWY7QUFBQSxPQURIO0FBRVAwQixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNlLEVBQWY7QUFBQTtBQUZEO0FBZlA7QUE1V0MsQ0FBYjtBQWtZZW5ELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLXVzLjA0YTIzZjMyMTM0MmU2MmQwYTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBEYXRhIEVOLVVTXHJcbiAqXHJcbiAqIEBhdXRob3IgQmFjb25CYW9cclxuICogQGxpbmsgaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW9cclxuICovXHJcblxyXG5jb25zdCBzeW1ib2wgPSB7XHJcbiAgICBhbmQ6ICcsICcsXHJcbn07XHJcbmNvbnN0IHBhdGVudFN0YXR1cyA9IHtcclxuICAgIGdyYW50ZWQ6ICdHcmFudGVkJyxcclxufTtcclxuY29uc3QgcGF0ZW50U2VsZiA9IHtcclxuICAgIG5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuY29uc3QgcHViU2VsZiA9IHtcclxuICAgIG5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYW5nOiAnZW4tdXMnLFxyXG4gICAgcGFnZVRpdGxlOiAnSSBhbSBCYWNvbkJhbywgSSBsb3ZlIHRlY2hub2xvZ3kgYW5kIGl0cyBhcHBsaWNhdGlvbiEnLFxyXG4gICAgcGFnZURlc2NyaXB0aW9uOiAnSGksIEkgYW0gQmFjb25CYW8sIEkgbG92ZSB0ZWNobm9sb2d5IGFuZCBpdHMgYXBwbGljYXRpb24hJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2VfZW4uanBnJyxcclxuICAgIHN5bWJvbDoge1xyXG4gICAgICAgIGFuZDogJywgJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVsbG86ICdIaSEgSSBhbScsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAnR2VuZy1CYW8gTGluJyxcclxuICAgICAgICBpbnRybzogJ0kgbWFqb3JlZCBpbiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50LCBjdXJyZW50bHkgYXMgYSBQaEQgc3R1ZGVudCBhdCBOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eS4gSSBsb3ZlIHRlY2hub2xvZ3kgYW5kIGV4cGxvcmUgaXRzIGltcGFjdHMuIEkgZW5qb3kgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UsIHNvbWV0aW1lcyByb2xsaW5nLCBhY3RpbmcgY3V0ZSwgYW5kIHNsYXBwaW5nIGJlbGx5IGluIHRoaXMgb2NlYW4gKOKXj1xcJ+KXoVxcJ+KXjykuJyxcclxuICAgIH0sXHJcbiAgICByZXNlYXJjaEludGVyZXN0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdSZXNlYXJjaCBpbnRlcmVzdHMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWIgQXBwbGljYXRpb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVXNlciBCZWhhdmlvcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdEaWdpdGFsIE1hcmtldGluZycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLnRleHR9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVkdToge1xyXG4gICAgICAgIHRpdGxlOiAnRWR1Y2F0aW9uJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZWdyZWU6ICdQaC5EIHN0dWRlbnQnLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAnTmF0aW9uYWwgVGFpd2FuIFVuaXZlcnNpdHknLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0RlcGFydG1lbnQgb2YgSW5mb3JtYXRpb24gTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ00uQi5BLicsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBDZW50cmFsIFVuaXZlcnNpdHknLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0RlcGFydG1lbnQgb2YgSW5mb3JtYXRpb24gTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ0IuQi5BLicsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBQaW5ndHVuZyBJbnN0aXR1dGUgb2YgQ29tbWVyY2UnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0RlcGFydG1lbnQgb2YgSW5mb3JtYXRpb24gTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmRlZ3JlZX0gfCAke2l0ZW0uc2Nob29sfSwgJHtpdGVtLmRlcHR9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4cDoge1xyXG4gICAgICAgIHRpdGxlOiAnRXhwZXJpZW5jZXMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiAnMjAxNi85JyxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogJzIwMjAvMTInLFxyXG4gICAgICAgICAgICAgICAgY29tOiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICdWYWx1ZSBMYWInLFxyXG4gICAgICAgICAgICAgICAgcG9zOiAnUHJvamVjdCBlbmdpbmVlcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiAnMjAxNC8xJyxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogJzIwMTQvMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICdFLlNVTiBTZWN1cml0aWVzJyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICdFY29tbWVyY2UgRGVwdC4nLFxyXG4gICAgICAgICAgICAgICAgcG9zOiAnSW50ZXJuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZnJvbVRpbWV9IH4gJHtpdGVtLnRvVGltZX0gfCAke2l0ZW0uY29tfSwgJHtpdGVtLmRlcHR9LCAke2l0ZW0ucG9zfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbnZlbnQ6IHtcclxuICAgICAgICB0aXRsZTogJ1BhdGVudHMvSW52ZW50aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWV0aG9kIG9mIElkZW50aXR5IEF1dGhlbnRpY2F0aW9uIGZvciBWb2ljZSBvdmVyIEludGVybmV0IFByb3RvY29sIENhbGwgYW5kIFJlbGF0ZWQgRGV2aWNlJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk3MTEyOTMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTcxMTI5MycsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTE4MzU2NzUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTE4MzU2NzVBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMjAwMzEzOTAxJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAyMDAzMTM5MDFBMScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdFUCBFUDM3MTY1MjYnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvRVAzNzE2NTI2QTEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIGJsb2NrY2hhaW4tYmFzZWQgbWV0aG9kIGZvciB2ZXJpZmljYXRpb24gb2YgY2FsbGluZyBpZGVudGl0eS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgUmVzb3VyY2UgSGVhbHRoIE1hbmFnZW1lbnQgTWV0aG9kJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk3MDQ3ODMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTcwNDc4MycsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3RpbmcgaGVhbHRoeSBvZiByZXNvdXJjZXMgYWNyb3NzIGRvbWFpbnMgYW5kIHByb3RvY29scy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIERldmljZSBmb3IgTG9hZGluZyBXZWIgUGFnZSBiYXNlZCBvbiBJZnJhbWUnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY5MjIzMicsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjkyMjMyJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIHByZXNlbnRpbmcgSFRUUC9IVFRQUyBtaXhlZCBjb250ZW50cyBvbiBhIHdlYnBhZ2UuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGlzcGxheSBEZXZpY2UgYW5kIERpc3BsYXkgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTQ3MzgzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTk0NzM4MycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbGF5ZXItYmFzZWQgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgQ29udHJvbCBNZXRob2Qgb2YgQXVkaW8gUmVjb3JkaW5nJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NzI2MzAnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY3MjYzMCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIG9mIHByZXNzLXRvLXJlY29yZCBjYWxscy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXZWJwYWdlIENvbnRlbnQgU2VsZi1Qcm90ZWN0aW9uIE1ldGhvZCBhbmQgQXNzb2NpYXRlZCBTZXJ2ZXInLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYyNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjI0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTA3OTE5MicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTA3OTE5MkEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAwODk5MDQnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDA4OTkwNEExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSB3ZWJwYWdlIHNlbGYtcHJvdGVjdGlvbiBtZXRob2QgYmFzZWQgb24gb25lLXRpbWUgcGFzc3dvcmRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBNZXRob2QgZm9yIE9mZmxpbmUgVXBkYXRpbmcgQXBwbGljYXRpb24gUHJvZ3JhbSBUaGVyZW9mJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2Njk2MTQnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY2OTYxNCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTAzNjIzMjInLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTAzNjIzMjJBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIHVwZGF0aW5nIGFwcGxpY2F0aW9ucyB0aHJvdWdoIGFuIGVtYmVkZGVkIGJyb3dzZXIgaW4gb2ZmbGluZSBjb250ZXh0LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBXZWIgUGFnZSBNYW5hZ2VtZW50IE1ldGhvZCBUaGVyZW9mJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkyNjAxNycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MjYwMTcnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgZGV0ZWN0aW5nIHdpbmRvdy90YWJzIGRlcGVuZGVuY2llcyBvZiBicm93c2VyLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBPZmZsaW5lIE9wZXJhdGlvbiBvZiBXZWIgQXBwbGljYXRpb24gUHJvZ3JhbSBJbnRlcmZhY2UgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTE3NTY4JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkxNzU2OCcsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgV2ViIEFQSXMgaW4gb2ZmbGluZSBjb250ZXh0cy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgQ29udHJvbCBNZXRob2QgVGhlcmVvZiBiYXNlZCBvbiBEcmFnLWFuZC1Ecm9wIE9wZXJhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MDU2NzAnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTA1NjcwJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBicm93c2VyLWJhc2VkIGRpYWxpbmcgbWV0aG9kIHVzaW5nIGRyYWcgYW5kIGRyb3AuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9wZXJhdGlvbiBNZXRob2QgVGhlcmVvZiBhbmQgU2VydmVyIEhvc3QgRGV2aWNlJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NDE5NjknLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY0MTk2OScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMDk0Mjg5MjUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMDk0Mjg5MjVBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMTkwMDA3NTIwJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAxOTAwMDc1MjBBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgZmxleGlibGUgd2ViLWJhc2VkIHZvaWNlIHNvbHV0aW9uIGluIGJvdGggb25saW5lIGFuZCBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmludmVudG9ycy5tYXAoKGkpID0+IGkubmFtZSkuam9pbihzeW1ib2wuYW5kKX0sICgke2l0ZW0ueWVhcn0pLCBcIiR7aXRlbS5uYW1lfSxcIiBBcHBsaWNhbnQgJHtpdGVtLmFwcGxpY2FudH1gLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgZ2VuZXJhdGVBYnN0cmFjdDogKGl0ZW0pID0+IGAke2l0ZW0uaW50cm99YCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm1TcGFjZSA9ICh0KSA9PiB0LnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gcm1TcGFjZShsaW5rLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwYXRlbnQtJHt0ZXh0LnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGF3YXJkOiB7XHJcbiAgICAgICAgdGl0bGU6ICdBd2FyZHMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdBd2FyZCBmb3IgQWNjdW11bGF0aW9uIG9mIEluZGl2aWR1YWxseSBBcHBsaWVkIFBhdGVudHMnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTcnLCAnMjAxOCddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIEJlc3QgUGFwZXIgb2YgTWFzdGVyIFRoZXNpcyBQcmVzZW50YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOeiqeWjq+irluaWh+ioiOeVq+eZvOihqOacg+acgOS9s+irluaWh+eNjiknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNiddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdEZXBhcnRtZW50IG9mIGluZm9ybWF0aW9uIG1hbmFnZW1lbnQgb2YgTkNVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIFFpYW5saW1hIFRhb2h1YXl1YW4gZW50cmVwcmVuZXVyaWFsIGNvbXBldGl0aW9uIEVjb21tZXJjZSBHcm91cCcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog5qGD5ZyS57ij5Y2D6YeM6aas5bCL5qGD6Iqx5rqQ5Ym15qWt56u26LO96Zu75a2Q5ZWG5YuZ57WE5Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE1J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTZWNvbmQgcHJpemUgb2YgR29vZ2xlIEFkV29yZHMgQ2hhbGxlbmdlJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDEzJ10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0dvb2dsZSBJbmMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIE5QSUMgQW5udWFsIFJlc2VhcmNoaW5nIFJlc3VsdHMgQ29tcGV0aXRpb24gV2ViIEdyb3VwJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogJyhDaGluZXNlOiDos4foqIrlrbjnvqTlsIjpoYzmiJDmnpznq7bos73ntrLot6/mh4nnlKjntYTlhqDou40pJyxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnTmF0aW9uYWwgUGluZ3R1bmcgSW5zdGl0dXRlIG9mIENvbW1lcmNlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIENsYXNzIFdlYnBhZ2UgRGV2ZWxvcG1lbnQgQ29tcGV0aXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOePree0mue2sumggeijveS9nOavlOizveWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAwNScsICcyMDA3J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ1RoZSBNaW5nIENoZW5nIEpIUyBvZiBQaW5ndHVuZyBDb3VudHknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5uYW1lfSAke2l0ZW0ub3JpZ2luYWxJbmZvIHx8ICcnfSB8IEF3YXJkZWQgYnkgJHtpdGVtLmJ5fSwgKCR7aXRlbS55ZWFycy5qb2luKHN5bWJvbC5hbmQpfSlgLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHVibGljYXRpb246IHtcclxuICAgICAgICB0aXRsZTogJ1B1YmxpY2F0aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NoZW4tSGFvIExpdScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdZdW4tQ2hpYSBUYW5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHB1YlNlbGYsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnWWktQ2hpbmcgSHNpZWgnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0luIG1vYmlsZSBzZWFyY2gsIHRoZSBtb3JlIHlvdSBzZWUsIHRoZSBtb3JlIHlvdSBsb3ZlID8gSG93IGNvbnN1bWVyIGtub3dsZWRnZSBhbmQgc2NyZWVuIHNpemVzIGFmZmVjdCBicmFuZGluZyBlZmZlY3QnLFxyXG4gICAgICAgICAgICAgICAgb246ICdTdW4gWWF0LVNlbiBNYW5hZ2VtZW50IFJldmlldycsXHJcbiAgICAgICAgICAgICAgICBub3RlOiAnJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTElOSycsIHVybDogJ2h0dHA6Ly9tZ3RyLmNtLm5zeXN1LmVkdS50dy9mdWxsam91cm5hbF9wcm9jZXNzLnBocD9pZD0xNDgmcG5vPU01ZjY5OThmZGI2YWUwJnA9Mzc5JywgZ2E6ICdwYXBlcl8yMDIwLTEnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxNicsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIEVmZmVjdCBvZiBSZXBldGl0aW9uIG9mIEtleXdvcmQgQWR2ZXJ0aXNpbmcgb24gQnJhbmQgUmVjb2duaXRpb24gYW5kIEF0dGl0dWRlIHdpdGggUGVyc3Vhc2lvbiBLbm93bGVkZ2UgTW9kZWwgYW5kIFNjcmVlbiBTaXplJyxcclxuICAgICAgICAgICAgICAgIG9uOiAnTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5LCBNYXN0ZXIgVGhlc2lzJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8xMTI5Ni94MjZwdm4nLCBnYTogJ21hc3Rlcl90aGVzaXMnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5hdXRob3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiICR7aXRlbS5vbn1gLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsubmFtZSxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5vbnByb2ZpdDoge1xyXG4gICAgICAgIHRpdGxlOiAnTm9uLXByb2ZpdCBwcm9qZWN0cycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RhaXdhbmVzZVdpemFyZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZyZWUgYXBwbGljYXRpb24gYW5kIHNlcnZpY2UsIGhlbHBpbmcgdXNlcnMgdG8gcXVpY2tseSBhbmQgZWFzaWx5IGZpbmQgdGhlIHByb251bmNpYXRpb24gdG8gY29tbXVuaWNhdGUgaW4gVGFpd2FuZXNlLiBTaW5jZSAyMDEzLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vVGFpd2FuZXNlV2l6YXJkLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAndHd3X3dlYnNpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdMdWNreUJhY29uJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT3BlbiBzb3VyY2UgcmFmZmxpbmcgYXBwLCBoZWxwaW5nIG1hcmtldGVycyBvciBzdHVkZW50cyB0byByYWZmbGUgcXVpY2tseS4gU2luY2UgMjAxNi4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvL0x1Y2t5QmFjb24vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICdsdWNreWJhY29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHROYW1lOiAoaXRlbSkgPT4gaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBpdGVtVGV4dERlc2NyaXB0aW9uOiAoaXRlbSkgPT4gaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICAgICAgc2VydmljZVN0YXRlOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gKGl0ZW0ubGl2ZSkgPyAnJyA6ICdUaGUgc2VydmljZSBoYXMgYmVlbiBkaXNjb250aW51ZWQuJztcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlc3BvcnQ6IHtcclxuICAgICAgICB0aXRsZTogJ0dhbWUvRXNwb3J0JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0kgYW0gYSBDU2VyLCBcIkxlcm5IZXJOXCIgaXMgbXkgbmlja25hbWUgaW4gZ2FtZS4gSSBsaWtlIG1ha2luZyB2aWRlbyBmb3IgdGhlIGUtc3BvcnRzIHByb21vdGlvbiwgbW9zdCBvZiBteSB2aWRlb3MgYXJlIG5vbi1wcm9maXQsIGhvcGUgeW91IGVuam95LiBJZiB5b3UgbWVldCBtZSBpbiBnYW1lLCBqdXN0IHNheSBIaSEnLFxyXG4gICAgICAgIHByb21vdGlvbjogJ0ZlYXR1cmVkIHZpZGVvOiAnLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1JlbWVtYnJhbmNlIG9mIENvdW50ZXItU3RyaWtlIDEuNicsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bnJVTVpaaWhlTFUnLCBnYTogJ2NzX21vdmllXzEnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJzEgWWVhciBvZiBcIlNLLkRlbHBhblwiJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1nbTkzeUdQdk1BTScsIGdhOiAnY3NfbW92aWVfMicgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3Q6IHtcclxuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxyXG4gICAgfSxcclxuICAgIHNvY2lhbDoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICB0ZXh0OiAnRm9sbG93IG1lOiAnLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdGYWNlYm9vaycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYmFjb25iYW8nLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZmInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR2l0SHViJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYWNvbmJhbycsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19naXRodWInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==