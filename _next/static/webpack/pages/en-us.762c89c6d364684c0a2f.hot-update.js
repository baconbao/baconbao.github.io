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
      note: ', DOI: 10.6160/SYSMR.202009_28(3).0001',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJyZXNlYXJjaEludGVyZXN0IiwidGl0bGUiLCJpdGVtcyIsInRleHQiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsIm5vbnByb2ZpdCIsImRlc2NyaXB0aW9uIiwibGl2ZSIsIml0ZW1UZXh0TmFtZSIsIml0ZW1UZXh0RGVzY3JpcHRpb24iLCJzZXJ2aWNlU3RhdGUiLCJyZXMiLCJlc3BvcnQiLCJwcm9tb3Rpb24iLCJjb250YWN0Iiwic29jaWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTs7Ozs7O0FBT0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLEtBQUcsRUFBRTtBQURNLENBQWY7QUFHQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQURRLENBQXJCO0FBR0EsSUFBTUMsVUFBVSxHQUFH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LEtBREcsRUFNSDtBQUNJdkMsVUFBSSxFQUFFLGdCQURWO0FBRUlrQixTQUFHLEVBQUUsd0RBRlQ7QUFHSXFCLFFBQUUsRUFBRTtBQUhSLEtBTkcsQ0FISDtBQWVKdEMsYUFBUyxFQUFFO0FBQ1BzQixjQUFRLEVBQUUsa0JBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUN4QixJQUFmO0FBQUEsT0FESDtBQUVQMEIsWUFBTSxFQUFFLGdCQUFDRixJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDZSxFQUFmO0FBQUE7QUFGRDtBQWZQO0FBNVdDLENBQWI7QUFrWWVuRCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbi11cy43NjJjODljNmQzNjQ2ODRjMGEyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogRGF0YSBFTi1VU1xyXG4gKlxyXG4gKiBAYXV0aG9yIEJhY29uQmFvXHJcbiAqIEBsaW5rIGh0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvXHJcbiAqL1xyXG5cclxuY29uc3Qgc3ltYm9sID0ge1xyXG4gICAgYW5kOiAnLCAnLFxyXG59O1xyXG5jb25zdCBwYXRlbnRTdGF0dXMgPSB7XHJcbiAgICBncmFudGVkOiAnR3JhbnRlZCcsXHJcbn07XHJcbmNvbnN0IHBhdGVudFNlbGYgPSB7XHJcbiAgICBuYW1lOiAnR2VuZy1CYW8gTGluJyxcclxuICAgIHNlbGY6IHRydWUsXHJcbn07XHJcbmNvbnN0IHB1YlNlbGYgPSB7XHJcbiAgICBuYW1lOiAnR2VuZy1CYW8gTGluJyxcclxuICAgIHNlbGY6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFuZzogJ2VuLXVzJyxcclxuICAgIHBhZ2VUaXRsZTogJ0kgYW0gQmFjb25CYW8sIEkgbG92ZSB0ZWNobm9sb2d5IGFuZCBpdHMgYXBwbGljYXRpb24hJyxcclxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJ0hpLCBJIGFtIEJhY29uQmFvLCBJIGxvdmUgdGVjaG5vbG9neSBhbmQgaXRzIGFwcGxpY2F0aW9uIScsXHJcbiAgICBwYWdlT2dJbWFnZTogJ2ltYWdlcy9vZ2ltYWdlX2VuLmpwZycsXHJcbiAgICBzeW1ib2w6IHtcclxuICAgICAgICBhbmQ6ICcsICcsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIGhlbGxvOiAnSGkhIEkgYW0nLFxyXG4gICAgICAgIG5hbWU6ICdCYWNvbkJhbycsXHJcbiAgICAgICAgYWthTmFtZTogJ0dlbmctQmFvIExpbicsXHJcbiAgICAgICAgaW50cm86ICdJIGxvdmUgdG8gZXhwbG9yZSBJVCBhcHBsaWNhdGlvbiBhbmQgSVQtcmVsYXRlZCBjb25zdW1lciBiZWhhdmlvciwgY3VycmVudGx5IGFzIGEgUGhEIHN0dWRlbnQgYXQgTmF0aW9uYWwgVGFpd2FuIFVuaXZlcnNpdHkuIEkgZW5qb3kgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UsIHNvbWV0aW1lcyByb2xsaW5nLCBhY3RpbmcgY3V0ZSwgYW5kIHNsYXBwaW5nIGJlbGx5IGluIHRoaXMgb2NlYW4gKOKXj1xcJ+KXoVxcJ+KXjykuJyxcclxuICAgIH0sXHJcbiAgICByZXNlYXJjaEludGVyZXN0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdSZXNlYXJjaCBpbnRlcmVzdHMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWIgQXBwbGljYXRpb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVXNlciBCZWhhdmlvcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdEaWdpdGFsIE1hcmtldGluZycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLnRleHR9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVkdToge1xyXG4gICAgICAgIHRpdGxlOiAnRWR1Y2F0aW9uJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZWdyZWU6ICdQaC5EIHN0dWRlbnQnLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAnTmF0aW9uYWwgVGFpd2FuIFVuaXZlcnNpdHknLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0RlcGFydG1lbnQgb2YgSW5mb3JtYXRpb24gTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ00uQi5BLicsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBDZW50cmFsIFVuaXZlcnNpdHknLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0RlcGFydG1lbnQgb2YgSW5mb3JtYXRpb24gTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ0IuQi5BLicsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBQaW5ndHVuZyBJbnN0aXR1dGUgb2YgQ29tbWVyY2UnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0RlcGFydG1lbnQgb2YgSW5mb3JtYXRpb24gTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmRlZ3JlZX0gfCAke2l0ZW0uc2Nob29sfSwgJHtpdGVtLmRlcHR9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4cDoge1xyXG4gICAgICAgIHRpdGxlOiAnRXhwZXJpZW5jZXMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiAnMjAxNi85JyxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogJzIwMjAvMTInLFxyXG4gICAgICAgICAgICAgICAgY29tOiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICdWYWx1ZSBMYWInLFxyXG4gICAgICAgICAgICAgICAgcG9zOiAnUHJvamVjdCBlbmdpbmVlcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiAnMjAxNC8xJyxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogJzIwMTQvMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICdFLlNVTiBTZWN1cml0aWVzJyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICdFY29tbWVyY2UgRGVwdC4nLFxyXG4gICAgICAgICAgICAgICAgcG9zOiAnSW50ZXJuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZnJvbVRpbWV9IH4gJHtpdGVtLnRvVGltZX0gfCAke2l0ZW0uY29tfSwgJHtpdGVtLmRlcHR9LCAke2l0ZW0ucG9zfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbnZlbnQ6IHtcclxuICAgICAgICB0aXRsZTogJ1BhdGVudHMvSW52ZW50aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWV0aG9kIG9mIElkZW50aXR5IEF1dGhlbnRpY2F0aW9uIGZvciBWb2ljZSBvdmVyIEludGVybmV0IFByb3RvY29sIENhbGwgYW5kIFJlbGF0ZWQgRGV2aWNlJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk3MTEyOTMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTcxMTI5MycsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTE4MzU2NzUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTE4MzU2NzVBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMjAwMzEzOTAxJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAyMDAzMTM5MDFBMScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdFUCBFUDM3MTY1MjYnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvRVAzNzE2NTI2QTEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIGJsb2NrY2hhaW4tYmFzZWQgbWV0aG9kIGZvciB2ZXJpZmljYXRpb24gb2YgY2FsbGluZyBpZGVudGl0eS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgUmVzb3VyY2UgSGVhbHRoIE1hbmFnZW1lbnQgTWV0aG9kJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk3MDQ3ODMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTcwNDc4MycsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3RpbmcgaGVhbHRoeSBvZiByZXNvdXJjZXMgYWNyb3NzIGRvbWFpbnMgYW5kIHByb3RvY29scy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2QgYW5kIERldmljZSBmb3IgTG9hZGluZyBXZWIgUGFnZSBiYXNlZCBvbiBJZnJhbWUnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY5MjIzMicsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjkyMjMyJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIHByZXNlbnRpbmcgSFRUUC9IVFRQUyBtaXhlZCBjb250ZW50cyBvbiBhIHdlYnBhZ2UuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGlzcGxheSBEZXZpY2UgYW5kIERpc3BsYXkgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTQ3MzgzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTk0NzM4MycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbGF5ZXItYmFzZWQgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgQ29udHJvbCBNZXRob2Qgb2YgQXVkaW8gUmVjb3JkaW5nJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NzI2MzAnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY3MjYzMCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIG9mIHByZXNzLXRvLXJlY29yZCBjYWxscy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXZWJwYWdlIENvbnRlbnQgU2VsZi1Qcm90ZWN0aW9uIE1ldGhvZCBhbmQgQXNzb2NpYXRlZCBTZXJ2ZXInLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYyNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjI0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTA3OTE5MicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTA3OTE5MkEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAwODk5MDQnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDA4OTkwNEExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSB3ZWJwYWdlIHNlbGYtcHJvdGVjdGlvbiBtZXRob2QgYmFzZWQgb24gb25lLXRpbWUgcGFzc3dvcmRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBNZXRob2QgZm9yIE9mZmxpbmUgVXBkYXRpbmcgQXBwbGljYXRpb24gUHJvZ3JhbSBUaGVyZW9mJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2Njk2MTQnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY2OTYxNCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTAzNjIzMjInLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTAzNjIzMjJBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIHVwZGF0aW5nIGFwcGxpY2F0aW9ucyB0aHJvdWdoIGFuIGVtYmVkZGVkIGJyb3dzZXIgaW4gb2ZmbGluZSBjb250ZXh0LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBXZWIgUGFnZSBNYW5hZ2VtZW50IE1ldGhvZCBUaGVyZW9mJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkyNjAxNycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MjYwMTcnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgZGV0ZWN0aW5nIHdpbmRvdy90YWJzIGRlcGVuZGVuY2llcyBvZiBicm93c2VyLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBPZmZsaW5lIE9wZXJhdGlvbiBvZiBXZWIgQXBwbGljYXRpb24gUHJvZ3JhbSBJbnRlcmZhY2UgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTE3NTY4JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkxNzU2OCcsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgV2ViIEFQSXMgaW4gb2ZmbGluZSBjb250ZXh0cy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgQ29udHJvbCBNZXRob2QgVGhlcmVvZiBiYXNlZCBvbiBEcmFnLWFuZC1Ecm9wIE9wZXJhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MDU2NzAnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTA1NjcwJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBicm93c2VyLWJhc2VkIGRpYWxpbmcgbWV0aG9kIHVzaW5nIGRyYWcgYW5kIGRyb3AuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9wZXJhdGlvbiBNZXRob2QgVGhlcmVvZiBhbmQgU2VydmVyIEhvc3QgRGV2aWNlJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NDE5NjknLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY0MTk2OScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMDk0Mjg5MjUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMDk0Mjg5MjVBJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMTkwMDA3NTIwJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAxOTAwMDc1MjBBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgZmxleGlibGUgd2ViLWJhc2VkIHZvaWNlIHNvbHV0aW9uIGluIGJvdGggb25saW5lIGFuZCBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmludmVudG9ycy5tYXAoKGkpID0+IGkubmFtZSkuam9pbihzeW1ib2wuYW5kKX0sICgke2l0ZW0ueWVhcn0pLCBcIiR7aXRlbS5uYW1lfSxcIiBBcHBsaWNhbnQgaXMgJHtpdGVtLmFwcGxpY2FudH1gLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgZ2VuZXJhdGVBYnN0cmFjdDogKGl0ZW0pID0+IGAke2l0ZW0uaW50cm99YCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm1TcGFjZSA9ICh0KSA9PiB0LnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gcm1TcGFjZShsaW5rLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwYXRlbnQtJHt0ZXh0LnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGF3YXJkOiB7XHJcbiAgICAgICAgdGl0bGU6ICdBd2FyZHMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdBd2FyZCBmb3IgQWNjdW11bGF0aW9uIG9mIEluZGl2aWR1YWxseSBBcHBsaWVkIFBhdGVudHMnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTcnLCAnMjAxOCddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIEJlc3QgUGFwZXIgb2YgTWFzdGVyIFRoZXNpcyBQcmVzZW50YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOeiqeWjq+irluaWh+ioiOeVq+eZvOihqOacg+acgOS9s+irluaWh+eNjiknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNiddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdEZXBhcnRtZW50IG9mIGluZm9ybWF0aW9uIG1hbmFnZW1lbnQgb2YgTkNVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIFFpYW5saW1hIFRhb2h1YXl1YW4gZW50cmVwcmVuZXVyaWFsIGNvbXBldGl0aW9uIEVjb21tZXJjZSBHcm91cCcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog5qGD5ZyS57ij5Y2D6YeM6aas5bCL5qGD6Iqx5rqQ5Ym15qWt56u26LO96Zu75a2Q5ZWG5YuZ57WE5Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE1J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTZWNvbmQgcHJpemUgb2YgR29vZ2xlIEFkV29yZHMgQ2hhbGxlbmdlJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDEzJ10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0dvb2dsZSBJbmMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIE5QSUMgQW5udWFsIFJlc2VhcmNoaW5nIFJlc3VsdHMgQ29tcGV0aXRpb24gV2ViIEdyb3VwJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogJyhDaGluZXNlOiDos4foqIrlrbjnvqTlsIjpoYzmiJDmnpznq7bos73ntrLot6/mh4nnlKjntYTlhqDou40pJyxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnTmF0aW9uYWwgUGluZ3R1bmcgSW5zdGl0dXRlIG9mIENvbW1lcmNlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIENsYXNzIFdlYnBhZ2UgRGV2ZWxvcG1lbnQgQ29tcGV0aXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOePree0mue2sumggeijveS9nOavlOizveWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAwNScsICcyMDA3J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ1RoZSBNaW5nIENoZW5nIEpIUyBvZiBQaW5ndHVuZyBDb3VudHknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5uYW1lfSAke2l0ZW0ub3JpZ2luYWxJbmZvIHx8ICcnfSB8IEF3YXJkZWQgYnkgJHtpdGVtLmJ5fSwgKCR7aXRlbS55ZWFycy5qb2luKHN5bWJvbC5hbmQpfSlgLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHVibGljYXRpb246IHtcclxuICAgICAgICB0aXRsZTogJ1B1YmxpY2F0aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NoZW4tSGFvIExpdScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdZdW4tQ2hpYSBUYW5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHB1YlNlbGYsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnWWktQ2hpbmcgSHNpZWgnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0luIG1vYmlsZSBzZWFyY2gsIHRoZSBtb3JlIHlvdSBzZWUsIHRoZSBtb3JlIHlvdSBsb3ZlID8gSG93IGNvbnN1bWVyIGtub3dsZWRnZSBhbmQgc2NyZWVuIHNpemVzIGFmZmVjdCBicmFuZGluZyBlZmZlY3QnLFxyXG4gICAgICAgICAgICAgICAgb246ICdTdW4gWWF0LVNlbiBNYW5hZ2VtZW50IFJldmlldycsXHJcbiAgICAgICAgICAgICAgICBub3RlOiAnLCBET0k6IDEwLjYxNjAvU1lTTVIuMjAyMDA5XzI4KDMpLjAwMDEnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cDovL21ndHIuY20ubnN5c3UuZWR1LnR3L2Z1bGxqb3VybmFsX3Byb2Nlc3MucGhwP2lkPTE0OCZwbm89TTVmNjk5OGZkYjZhZTAmcD0zNzknLCBnYTogJ3BhcGVyXzIwMjAtMScgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE2JyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwdWJTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgRWZmZWN0IG9mIFJlcGV0aXRpb24gb2YgS2V5d29yZCBBZHZlcnRpc2luZyBvbiBCcmFuZCBSZWNvZ25pdGlvbiBhbmQgQXR0aXR1ZGUgd2l0aCBQZXJzdWFzaW9uIEtub3dsZWRnZSBNb2RlbCBhbmQgU2NyZWVuIFNpemUnLFxyXG4gICAgICAgICAgICAgICAgb246ICdOYXRpb25hbCBDZW50cmFsIFVuaXZlcnNpdHksIE1hc3RlciBUaGVzaXMnLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xJTksnLCB1cmw6ICdodHRwczovL2hkbC5oYW5kbGUubmV0LzExMjk2L3gyNnB2bicsIGdhOiAnbWFzdGVyX3RoZXNpcycgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmF1dGhvcnMubWFwKChpKSA9PiBpLm5hbWUpLmpvaW4oc3ltYm9sLmFuZCl9LCAoJHtpdGVtLnllYXJ9KSwgXCIke2l0ZW0ubmFtZX0sXCIgJHtpdGVtLm9ufWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay5uYW1lLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbm9ucHJvZml0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdOb24tcHJvZml0IHByb2plY3RzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGFpd2FuZXNlV2l6YXJkJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRnJlZSBhcHBsaWNhdGlvbiBhbmQgc2VydmljZSwgaGVscGluZyB1c2VycyB0byBxdWlja2x5IGFuZCBlYXNpbHkgZmluZCB0aGUgcHJvbnVuY2lhdGlvbiB0byBjb21tdW5pY2F0ZSBpbiBUYWl3YW5lc2UuIFNpbmNlIDIwMTMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9UYWl3YW5lc2VXaXphcmQvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICd0d3dfd2Vic2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0x1Y2t5QmFjb24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdPcGVuIHNvdXJjZSByYWZmbGluZyBhcHAsIGhlbHBpbmcgbWFya2V0ZXJzIG9yIHN0dWRlbnRzIHRvIHJhZmZsZSBxdWlja2x5LiBTaW5jZSAyMDE2LicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vTHVja3lCYWNvbi8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYTogJ2x1Y2t5YmFjb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dE5hbWU6IChpdGVtKSA9PiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGl0ZW1UZXh0RGVzY3JpcHRpb246IChpdGVtKSA9PiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgICAgICBzZXJ2aWNlU3RhdGU6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSAoaXRlbS5saXZlKSA/ICcnIDogJ1RoZSBzZXJ2aWNlIGhhcyBiZWVuIGRpc2NvbnRpbnVlZC4nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVzcG9ydDoge1xyXG4gICAgICAgIHRpdGxlOiAnR2FtZS9Fc3BvcnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSSBhbSBhIENTZXIsIFwiTGVybkhlck5cIiBpcyBteSBuaWNrbmFtZSBpbiBnYW1lLiBJIGxpa2UgbWFraW5nIHZpZGVvIGZvciB0aGUgZS1zcG9ydHMgcHJvbW90aW9uLCBtb3N0IG9mIG15IHZpZGVvcyBhcmUgbm9uLXByb2ZpdCwgaG9wZSB5b3UgZW5qb3kuIElmIHlvdSBtZWV0IG1lIGluIGdhbWUsIGp1c3Qgc2F5IEhpIScsXHJcbiAgICAgICAgcHJvbW90aW9uOiAnRmVhdHVyZWQgdmlkZW86ICcsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVtZW1icmFuY2Ugb2YgQ291bnRlci1TdHJpa2UgMS42JywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1uclVNWlppaGVMVScsIGdhOiAnY3NfbW92aWVfMScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnMSBZZWFyIG9mIFwiU0suRGVscGFuXCInLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWdtOTN5R1B2TUFNJywgZ2E6ICdjc19tb3ZpZV8yJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCcsXHJcbiAgICB9LFxyXG4gICAgc29jaWFsOiB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHaXRIdWInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2JhY29uYmFvJyxcclxuICAgICAgICAgICAgICAgIGdhOiAnZm9sbG93X2dpdGh1YicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHb29nbGUgU2Nob2xhcicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NjaG9sYXIuZ29vZ2xlLmNvbS9jaXRhdGlvbnM/dXNlcj1PS2RIeDJZQUFBQUonLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZ3NjaG9sYXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==