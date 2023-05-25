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
  pageTitle: 'BaconBao - I love exploring the possiblities of technology!',
  pageDescription: 'Hi, I am BaconBao, I love exploring the possiblities of technology!',
  pageOgImage: 'images/ogimage_en.jpg',
  symbol: {
    and: ', '
  },
  main: {
    hello: 'Hi! I am',
    name: 'BaconBao',
    akaName: 'Geng-Bao Lin',
    intro: 'I majored in Information Management, currently as a PhD student at National Taiwan University. I enjoy rolling, acting cute, and slapping belly in the ocean of knowledges.'
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
      intro: 'A blockchain-based method for verification of calling identity.'
    }, {
      year: '2020',
      inventors: [patentSelf],
      name: 'Electronic Device and Resource Health Management Method',
      applicant: 'Acer Inc.',
      links: [{
        text: 'TW I704783',
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI704783',
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
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI692232',
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
        url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201947383',
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
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI672630',
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
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669624',
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
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669614',
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
        url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201926017',
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
        url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201917568',
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
        url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201905670',
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
        url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI641969',
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
      generateAbstract: function generateAbstract(text) {
        return "".concat(text);
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
      }]
    }, {
      name: 'LuckyBacon',
      description: 'Open source raffling app, helping marketers or students to raffle quickly. Since 2016.',
      links: [{
        url: 'https://baconbao.github.io/LuckyBacon/',
        ga: 'luckybacon'
      }]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJyZXNlYXJjaEludGVyZXN0IiwidGl0bGUiLCJpdGVtcyIsInRleHQiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsIm5vbnByb2ZpdCIsImRlc2NyaXB0aW9uIiwiaXRlbVRleHROYW1lIiwiaXRlbVRleHREZXNjcmlwdGlvbiIsImVzcG9ydCIsInByb21vdGlvbiIsImNvbnRhY3QiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBOzs7Ozs7QUFPQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsS0FBRyxFQUFFO0FBRE0sQ0FBZjtBQUdBLElBQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBRFEsQ0FBckI7QUFHQSxJQUFNQyxVQUFVLEdBQUc7QUFDZkMsTUFBSSxFQUFFLGNBRFM7QUFFZkMsTUFBSSxFQUFFO0FBRlMsQ0FBbkI7QUFJQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkYsTUFBSSxFQUFFLGNBRE07QUFFWkMsTUFBSSxFQUFFO0FBRk0sQ0FBaEI7QUFLQSxJQUFNRSxJQUFJLEdBQUc7QUFDVEMsTUFBSSxFQUFFLE9BREc7QUFFVEMsV0FBUyxFQUFFLDZEQUZGO0FBR1RDLGlCQUFlLEVBQUUscUVBSFI7QUFJVEMsYUFBVyxFQUFFLHVCQUpKO0FBS1RaLFFBQU0sRUFBRTtBQUNKQyxPQUFHLEVBQUU7QUFERCxHQUxDO0FBUVRZLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUUsVUFETDtBQUVGVCxRQUFJLEVBQUUsVUFGSjtBQUdGVSxXQUFPLEVBQUUsY0FIUDtBQUlGQyxTQUFLLEVBQUU7QUFKTCxHQVJHO0FBY1RDLGtCQUFnQixFQUFFO0FBQ2RDLFNBQUssRUFBRSxvQkFETztBQUVkQyxTQUFLLEVBQUUsQ0FDSDtBQUNJQyxVQUFJLEVBQUU7QUFEVixLQURHLEVBSUg7QUFDSUEsVUFBSSxFQUFFO0FBRFYsS0FKRyxFQU9IO0FBQ0lBLFVBQUksRUFBRTtBQURWLEtBUEcsQ0FGTztBQWFkQyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ0gsSUFBbEI7QUFBQTtBQURIO0FBYkcsR0FkVDtBQStCVEksS0FBRyxFQUFFO0FBQ0ROLFNBQUssRUFBRSxXQUROO0FBRURDLFNBQUssRUFBRSxDQUNIO0FBQ0lNLFlBQU0sRUFBRSxjQURaO0FBRUlDLFlBQU0sRUFBRSw0QkFGWjtBQUdJQyxVQUFJLEVBQUU7QUFIVixLQURHLEVBTUg7QUFDSUYsWUFBTSxFQUFFLFFBRFo7QUFFSUMsWUFBTSxFQUFFLDZCQUZaO0FBR0lDLFVBQUksRUFBRTtBQUhWLEtBTkcsRUFXSDtBQUNJRixZQUFNLEVBQUUsUUFEWjtBQUVJQyxZQUFNLEVBQUUseUNBRlo7QUFHSUMsVUFBSSxFQUFFO0FBSFYsS0FYRyxDQUZOO0FBbUJETixhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ0UsTUFBbEIsZ0JBQThCRixJQUFJLENBQUNHLE1BQW5DLGVBQThDSCxJQUFJLENBQUNJLElBQW5EO0FBQUE7QUFESDtBQW5CVixHQS9CSTtBQXNEVEMsS0FBRyxFQUFFO0FBQ0RWLFNBQUssRUFBRSxhQUROO0FBRURDLFNBQUssRUFBRSxDQUNIO0FBQ0lVLGNBQVEsRUFBRSxRQURkO0FBRUlDLFlBQU0sRUFBRSxTQUZaO0FBR0lDLFNBQUcsRUFBRSxXQUhUO0FBSUlKLFVBQUksRUFBRSxXQUpWO0FBS0lLLFNBQUcsRUFBRTtBQUxULEtBREcsRUFRSDtBQUNJSCxjQUFRLEVBQUUsUUFEZDtBQUVJQyxZQUFNLEVBQUUsUUFGWjtBQUdJQyxTQUFHLEVBQUUsa0JBSFQ7QUFJSUosVUFBSSxFQUFFLGlCQUpWO0FBS0lLLFNBQUcsRUFBRTtBQUxULEtBUkcsQ0FGTjtBQWtCRFgsYUFBUyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLHlCQUFhQSxJQUFJLENBQUNNLFFBQWxCLGdCQUFnQ04sSUFBSSxDQUFDTyxNQUFyQyxnQkFBaURQLElBQUksQ0FBQ1EsR0FBdEQsZUFBOERSLElBQUksQ0FBQ0ksSUFBbkUsZUFBNEVKLElBQUksQ0FBQ1MsR0FBakY7QUFBQTtBQURIO0FBbEJWLEdBdERJO0FBNEVUQyxRQUFNLEVBQUU7QUFDSmYsU0FBSyxFQUFFLG9CQURIO0FBRUpDLFNBQUssRUFBRSxDQUNIO0FBQ0llLFVBQUksRUFBRSxNQURWO0FBRUlDLGVBQVMsRUFBRSxDQUNQL0IsVUFETyxDQUZmO0FBS0lDLFVBQUksRUFBRSw0RkFMVjtBQU1JK0IsZUFBUyxFQUFFLFdBTmY7QUFPSUMsV0FBSyxFQUFFLENBQ0g7QUFBRWpCLFlBQUksRUFBRSxZQUFSO0FBQXNCa0IsV0FBRyxFQUFFLDBEQUEzQjtBQUF1RkMsY0FBTSxFQUFFckMsWUFBWSxDQUFDQztBQUE1RyxPQURHLEVBRUg7QUFBRWlCLFlBQUksRUFBRSxjQUFSO0FBQXdCa0IsV0FBRyxFQUFFLGdEQUE3QjtBQUErRUMsY0FBTSxFQUFFO0FBQXZGLE9BRkcsRUFHSDtBQUFFbkIsWUFBSSxFQUFFLGdCQUFSO0FBQTBCa0IsV0FBRyxFQUFFLG1EQUEvQjtBQUFvRkMsY0FBTSxFQUFFckMsWUFBWSxDQUFDQztBQUF6RyxPQUhHLEVBSUg7QUFBRWlCLFlBQUksRUFBRSxjQUFSO0FBQXdCa0IsV0FBRyxFQUFFLCtDQUE3QjtBQUE4RUMsY0FBTSxFQUFFO0FBQXRGLE9BSkcsQ0FQWDtBQWFJdkIsV0FBSyxFQUFFO0FBYlgsS0FERyxFQWdCSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLHlEQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsQ0FQWDtBQVVJYSxXQUFLLEVBQUU7QUFWWCxLQWhCRyxFQTRCSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLHdEQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsQ0FQWDtBQVVJYSxXQUFLLEVBQUU7QUFWWCxLQTVCRyxFQXdDSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLDJDQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsb0VBQTdCO0FBQW1HQyxjQUFNLEVBQUU7QUFBM0csT0FERyxDQVBYO0FBVUl2QixXQUFLLEVBQUU7QUFWWCxLQXhDRyxFQW9ESDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLHlEQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsQ0FQWDtBQVVJYSxXQUFLLEVBQUU7QUFWWCxLQXBERyxFQWdFSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLDhEQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsRUFFSDtBQUFFaUIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsZ0RBQTdCO0FBQStFQyxjQUFNLEVBQUU7QUFBdkYsT0FGRyxFQUdIO0FBQUVuQixZQUFJLEVBQUUsZ0JBQVI7QUFBMEJrQixXQUFHLEVBQUUsbURBQS9CO0FBQW9GQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQXpHLE9BSEcsQ0FQWDtBQVlJYSxXQUFLLEVBQUU7QUFaWCxLQWhFRyxFQThFSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLCtFQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsRUFFSDtBQUFFaUIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsZ0RBQTdCO0FBQStFQyxjQUFNLEVBQUU7QUFBdkYsT0FGRyxDQVBYO0FBV0l2QixXQUFLLEVBQUU7QUFYWCxLQTlFRyxFQTJGSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLDBEQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsb0VBQTdCO0FBQW1HQyxjQUFNLEVBQUU7QUFBM0csT0FERyxDQVBYO0FBVUl2QixXQUFLLEVBQUU7QUFWWCxLQTNGRyxFQXVHSDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLDZGQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsb0VBQTdCO0FBQW1HQyxjQUFNLEVBQUU7QUFBM0csT0FERyxDQVBYO0FBVUl2QixXQUFLLEVBQUU7QUFWWCxLQXZHRyxFQW1ISDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLCtFQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsb0VBQTdCO0FBQW1HQyxjQUFNLEVBQUU7QUFBM0csT0FERyxDQVBYO0FBVUl2QixXQUFLLEVBQUU7QUFWWCxLQW5IRyxFQStISDtBQUNJa0IsVUFBSSxFQUFFLE1BRFY7QUFFSUMsZUFBUyxFQUFFLENBQ1AvQixVQURPLENBRmY7QUFLSUMsVUFBSSxFQUFFLHVFQUxWO0FBTUkrQixlQUFTLEVBQUUsV0FOZjtBQU9JQyxXQUFLLEVBQUUsQ0FDSDtBQUFFakIsWUFBSSxFQUFFLFlBQVI7QUFBc0JrQixXQUFHLEVBQUUsMERBQTNCO0FBQXVGQyxjQUFNLEVBQUVyQyxZQUFZLENBQUNDO0FBQTVHLE9BREcsRUFFSDtBQUFFaUIsWUFBSSxFQUFFLGNBQVI7QUFBd0JrQixXQUFHLEVBQUUsZ0RBQTdCO0FBQStFQyxjQUFNLEVBQUU7QUFBdkYsT0FGRyxFQUdIO0FBQUVuQixZQUFJLEVBQUUsZ0JBQVI7QUFBMEJrQixXQUFHLEVBQUUsbURBQS9CO0FBQW9GQyxjQUFNLEVBQUU7QUFBNUYsT0FIRyxDQVBYO0FBWUl2QixXQUFLLEVBQUU7QUFaWCxLQS9IRyxDQUZIO0FBZ0pKSyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ1ksU0FBTCxDQUFlSyxHQUFmLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDcEMsSUFBVDtBQUFBLFNBQW5CLEVBQWtDcUMsSUFBbEMsQ0FBdUMxQyxNQUFNLENBQUNDLEdBQTlDLENBQWIsZ0JBQXFFc0IsSUFBSSxDQUFDVyxJQUExRSxrQkFBcUZYLElBQUksQ0FBQ2xCLElBQTFGLDJCQUE4R2tCLElBQUksQ0FBQ2EsU0FBbkg7QUFBQSxPQURIO0FBRVBPLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3hCLElBQWY7QUFBQSxPQUZIO0FBR1B5QixzQkFBZ0IsRUFBRSwwQkFBQ3pCLElBQUQ7QUFBQSx5QkFBYUEsSUFBYjtBQUFBLE9BSFg7QUFJUDBCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRCxFQUFVO0FBQ2QsWUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUSxHQUFSLEVBQWFQLElBQWIsQ0FBa0IsRUFBbEIsQ0FBUDtBQUFBLFNBQWhCOztBQUNBLFlBQU10QixJQUFJLEdBQUcyQixPQUFPLENBQUNILElBQUksQ0FBQ3hCLElBQU4sQ0FBcEI7QUFDQSxnQ0FBaUJBLElBQUksQ0FBQzhCLFdBQUwsRUFBakI7QUFDSDtBQVJNO0FBaEpQLEdBNUVDO0FBdU9UQyxPQUFLLEVBQUU7QUFDSGpDLFNBQUssRUFBRSxRQURKO0FBRUhDLFNBQUssRUFBRSxDQUNIO0FBQ0lkLFVBQUksRUFBRSx3REFEVjtBQUVJK0Msa0JBQVksRUFBRSxLQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUhYO0FBSUlDLFFBQUUsRUFBRTtBQUpSLEtBREcsRUFPSDtBQUNJakQsVUFBSSxFQUFFLDhDQURWO0FBRUkrQyxrQkFBWSxFQUFFLDJCQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELENBSFg7QUFJSUMsUUFBRSxFQUFFO0FBSlIsS0FQRyxFQWFIO0FBQ0lqRCxVQUFJLEVBQUUsZ0ZBRFY7QUFFSStDLGtCQUFZLEVBQUUsa0NBRmxCO0FBR0lDLFdBQUssRUFBRSxDQUFDLE1BQUQsQ0FIWDtBQUlJQyxRQUFFLEVBQUU7QUFKUixLQWJHLEVBbUJIO0FBQ0lqRCxVQUFJLEVBQUUsMENBRFY7QUFFSStDLGtCQUFZLEVBQUUsS0FGbEI7QUFHSUMsV0FBSyxFQUFFLENBQUMsTUFBRCxDQUhYO0FBSUlDLFFBQUUsRUFBRTtBQUpSLEtBbkJHLEVBeUJIO0FBQ0lqRCxVQUFJLEVBQUUsc0VBRFY7QUFFSStDLGtCQUFZLEVBQUUsOEJBRmxCO0FBR0lDLFdBQUssRUFBRSxDQUFDLE1BQUQsQ0FIWDtBQUlJQyxRQUFFLEVBQUU7QUFKUixLQXpCRyxFQStCSDtBQUNJakQsVUFBSSxFQUFFLHNEQURWO0FBRUkrQyxrQkFBWSxFQUFFLHVCQUZsQjtBQUdJQyxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUhYO0FBSUlDLFFBQUUsRUFBRTtBQUpSLEtBL0JHLENBRko7QUF3Q0hqQyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ2xCLElBQWxCLGNBQTBCa0IsSUFBSSxDQUFDNkIsWUFBTCxJQUFxQixFQUEvQywyQkFBa0U3QixJQUFJLENBQUMrQixFQUF2RSxnQkFBK0UvQixJQUFJLENBQUM4QixLQUFMLENBQVdYLElBQVgsQ0FBZ0IxQyxNQUFNLENBQUNDLEdBQXZCLENBQS9FO0FBQUE7QUFESDtBQXhDUixHQXZPRTtBQW1SVHNELGFBQVcsRUFBRTtBQUNUckMsU0FBSyxFQUFFLGNBREU7QUFFVEMsU0FBSyxFQUFFLENBQ0g7QUFDSWUsVUFBSSxFQUFFLE1BRFY7QUFFSXNCLGFBQU8sRUFBRSxDQUNMO0FBQUVuRCxZQUFJLEVBQUU7QUFBUixPQURLLEVBRUw7QUFBRUEsWUFBSSxFQUFFO0FBQVIsT0FGSyxFQUdMRSxPQUhLLEVBSUw7QUFBRUYsWUFBSSxFQUFFO0FBQVIsT0FKSyxDQUZiO0FBUUlBLFVBQUksRUFBRSx3SEFSVjtBQVNJb0QsUUFBRSxFQUFFLCtCQVRSO0FBVUlDLFVBQUksRUFBRSxFQVZWO0FBV0lyQixXQUFLLEVBQUUsQ0FDSDtBQUFFaEMsWUFBSSxFQUFFLE1BQVI7QUFBZ0JpQyxXQUFHLEVBQUUscUZBQXJCO0FBQTRHcUIsVUFBRSxFQUFFO0FBQWhILE9BREc7QUFYWCxLQURHLEVBZ0JIO0FBQ0l6QixVQUFJLEVBQUUsTUFEVjtBQUVJc0IsYUFBTyxFQUFFLENBQ0xqRCxPQURLLENBRmI7QUFLSUYsVUFBSSxFQUFFLG1JQUxWO0FBTUlvRCxRQUFFLEVBQUUsNENBTlI7QUFPSUMsVUFBSSxFQUFFLEVBUFY7QUFRSXJCLFdBQUssRUFBRSxDQUNIO0FBQUVoQyxZQUFJLEVBQUUsTUFBUjtBQUFnQmlDLFdBQUcsRUFBRSxxQ0FBckI7QUFBNERxQixVQUFFLEVBQUU7QUFBaEUsT0FERztBQVJYLEtBaEJHLENBRkU7QUErQlR0QyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQWFBLElBQUksQ0FBQ2lDLE9BQUwsQ0FBYWhCLEdBQWIsQ0FBaUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNwQyxJQUFUO0FBQUEsU0FBakIsRUFBZ0NxQyxJQUFoQyxDQUFxQzFDLE1BQU0sQ0FBQ0MsR0FBNUMsQ0FBYixnQkFBbUVzQixJQUFJLENBQUNXLElBQXhFLGtCQUFtRlgsSUFBSSxDQUFDbEIsSUFBeEYsaUJBQWtHa0IsSUFBSSxDQUFDa0MsRUFBdkc7QUFBQSxPQURIO0FBRVBkLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3ZDLElBQWY7QUFBQSxPQUZIO0FBR1B5QyxZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNlLEVBQWY7QUFBQTtBQUhEO0FBL0JGLEdBblJKO0FBd1RUQyxXQUFTLEVBQUU7QUFDUDFDLFNBQUssRUFBRSxxQkFEQTtBQUVQQyxTQUFLLEVBQUUsQ0FDSDtBQUNJZCxVQUFJLEVBQUUsaUJBRFY7QUFFSXdELGlCQUFXLEVBQUUsbUlBRmpCO0FBR0l4QixXQUFLLEVBQUUsQ0FDSDtBQUNJQyxXQUFHLEVBQUUsNkNBRFQ7QUFFSXFCLFVBQUUsRUFBRTtBQUZSLE9BREc7QUFIWCxLQURHLEVBV0g7QUFDSXRELFVBQUksRUFBRSxZQURWO0FBRUl3RCxpQkFBVyxFQUFFLHdGQUZqQjtBQUdJeEIsV0FBSyxFQUFFLENBQ0g7QUFDSUMsV0FBRyxFQUFFLHdDQURUO0FBRUlxQixVQUFFLEVBQUU7QUFGUixPQURHO0FBSFgsS0FYRyxDQUZBO0FBd0JQdEMsYUFBUyxFQUFFO0FBQ1B5QyxrQkFBWSxFQUFFLHNCQUFDdkMsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2xCLElBQWY7QUFBQSxPQURQO0FBRVAwRCx5QkFBbUIsRUFBRSw2QkFBQ3hDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNzQyxXQUFmO0FBQUEsT0FGZDtBQUdQZixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNlLEVBQWY7QUFBQTtBQUhEO0FBeEJKLEdBeFRGO0FBc1ZUSyxRQUFNLEVBQUU7QUFDSjlDLFNBQUssRUFBRSxhQURIO0FBRUoyQyxlQUFXLEVBQUUsd0xBRlQ7QUFHSkksYUFBUyxFQUFFLGtCQUhQO0FBSUo1QixTQUFLLEVBQUUsQ0FDSDtBQUFFakIsVUFBSSxFQUFFLG1DQUFSO0FBQTZDa0IsU0FBRyxFQUFFLDZDQUFsRDtBQUFpR3FCLFFBQUUsRUFBRTtBQUFyRyxLQURHLEVBRUg7QUFBRXZDLFVBQUksRUFBRSx1QkFBUjtBQUFpQ2tCLFNBQUcsRUFBRSw2Q0FBdEM7QUFBcUZxQixRQUFFLEVBQUU7QUFBekYsS0FGRyxDQUpIO0FBUUp0QyxhQUFTLEVBQUU7QUFDUHNCLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3hCLElBQWY7QUFBQSxPQURIO0FBRVAwQixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNlLEVBQWY7QUFBQTtBQUZEO0FBUlAsR0F0VkM7QUFtV1RPLFNBQU8sRUFBRTtBQUNMaEQsU0FBSyxFQUFFO0FBREYsR0FuV0E7QUFzV1RpRCxRQUFNLEVBQUU7QUFDSmpELFNBQUssRUFBRSxFQURIO0FBRUpFLFFBQUksRUFBRSxhQUZGO0FBR0ppQixTQUFLLEVBQUUsQ0FDSDtBQUNJakIsVUFBSSxFQUFFLFVBRFY7QUFFSWtCLFNBQUcsRUFBRSxtQ0FGVDtBQUdJcUIsUUFBRSxFQUFFO0FBSFIsS0FERyxFQU1IO0FBQ0l2QyxVQUFJLEVBQUUsUUFEVjtBQUVJa0IsU0FBRyxFQUFFLDZCQUZUO0FBR0lxQixRQUFFLEVBQUU7QUFIUixLQU5HLENBSEg7QUFlSnRDLGFBQVMsRUFBRTtBQUNQc0IsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDeEIsSUFBZjtBQUFBLE9BREg7QUFFUDBCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2UsRUFBZjtBQUFBO0FBRkQ7QUFmUDtBQXRXQyxDQUFiO0FBNFhlbkQsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW4tdXMuYmZmNjM5MTM0ZjU5MjdlMGE4ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIERhdGEgRU4tVVNcclxuICpcclxuICogQGF1dGhvciBCYWNvbkJhb1xyXG4gKiBAbGluayBodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pb1xyXG4gKi9cclxuXHJcbmNvbnN0IHN5bWJvbCA9IHtcclxuICAgIGFuZDogJywgJyxcclxufTtcclxuY29uc3QgcGF0ZW50U3RhdHVzID0ge1xyXG4gICAgZ3JhbnRlZDogJ0dyYW50ZWQnLFxyXG59O1xyXG5jb25zdCBwYXRlbnRTZWxmID0ge1xyXG4gICAgbmFtZTogJ0dlbmctQmFvIExpbicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5jb25zdCBwdWJTZWxmID0ge1xyXG4gICAgbmFtZTogJ0dlbmctQmFvIExpbicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICAgIGxhbmc6ICdlbi11cycsXHJcbiAgICBwYWdlVGl0bGU6ICdCYWNvbkJhbyAtIEkgbG92ZSBleHBsb3JpbmcgdGhlIHBvc3NpYmxpdGllcyBvZiB0ZWNobm9sb2d5IScsXHJcbiAgICBwYWdlRGVzY3JpcHRpb246ICdIaSwgSSBhbSBCYWNvbkJhbywgSSBsb3ZlIGV4cGxvcmluZyB0aGUgcG9zc2libGl0aWVzIG9mIHRlY2hub2xvZ3khJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2VfZW4uanBnJyxcclxuICAgIHN5bWJvbDoge1xyXG4gICAgICAgIGFuZDogJywgJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVsbG86ICdIaSEgSSBhbScsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAnR2VuZy1CYW8gTGluJyxcclxuICAgICAgICBpbnRybzogJ0kgbWFqb3JlZCBpbiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50LCBjdXJyZW50bHkgYXMgYSBQaEQgc3R1ZGVudCBhdCBOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eS4gSSBlbmpveSByb2xsaW5nLCBhY3RpbmcgY3V0ZSwgYW5kIHNsYXBwaW5nIGJlbGx5IGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2VzLicsXHJcbiAgICB9LFxyXG4gICAgcmVzZWFyY2hJbnRlcmVzdDoge1xyXG4gICAgICAgIHRpdGxlOiAnUmVzZWFyY2ggaW50ZXJlc3RzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnV2ViIEFwcGxpY2F0aW9uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1VzZXIgQmVoYXZpb3InLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRGlnaXRhbCBNYXJrZXRpbmcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS50ZXh0fWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlZHU6IHtcclxuICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbicsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnUGguRCBzdHVkZW50JyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIFRhaXdhbiBVbml2ZXJzaXR5JyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICdEZXBhcnRtZW50IG9mIEluZm9ybWF0aW9uIE1hbmFnZW1lbnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZWdyZWU6ICdNLkIuQS4nLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAnTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5JyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICdEZXBhcnRtZW50IG9mIEluZm9ybWF0aW9uIE1hbmFnZW1lbnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZWdyZWU6ICdCLkIuQS4nLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAnTmF0aW9uYWwgUGluZ3R1bmcgSW5zdGl0dXRlIG9mIENvbW1lcmNlJyxcclxuICAgICAgICAgICAgICAgIGRlcHQ6ICdEZXBhcnRtZW50IG9mIEluZm9ybWF0aW9uIE1hbmFnZW1lbnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5kZWdyZWV9IHwgJHtpdGVtLnNjaG9vbH0sICR7aXRlbS5kZXB0fWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHA6IHtcclxuICAgICAgICB0aXRsZTogJ0V4cGVyaWVuY2VzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVGltZTogJzIwMTYvOScsXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6ICcyMDIwLzEyJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnVmFsdWUgTGFiJyxcclxuICAgICAgICAgICAgICAgIHBvczogJ1Byb2plY3QgZW5naW5lZXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVGltZTogJzIwMTQvMScsXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6ICcyMDE0LzInLFxyXG4gICAgICAgICAgICAgICAgY29tOiAnRS5TVU4gU2VjdXJpdGllcycsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRWNvbW1lcmNlIERlcHQuJyxcclxuICAgICAgICAgICAgICAgIHBvczogJ0ludGVybicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmZyb21UaW1lfSB+ICR7aXRlbS50b1RpbWV9IHwgJHtpdGVtLmNvbX0sICR7aXRlbS5kZXB0fSwgJHtpdGVtLnBvc31gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW52ZW50OiB7XHJcbiAgICAgICAgdGl0bGU6ICdQYXRlbnRzL0ludmVudGlvbnMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBvZiBJZGVudGl0eSBBdXRoZW50aWNhdGlvbiBmb3IgVm9pY2Ugb3ZlciBJbnRlcm5ldCBQcm90b2NvbCBDYWxsIGFuZCBSZWxhdGVkIERldmljZScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNzExMjkzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk3MTEyOTMnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExODM1Njc1JywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExODM1Njc1QScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDMxMzkwMScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMzEzOTAxQTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRVAgRVAzNzE2NTI2JywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0VQMzcxNjUyNkExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBibG9ja2NoYWluLWJhc2VkIG1ldGhvZCBmb3IgdmVyaWZpY2F0aW9uIG9mIGNhbGxpbmcgaWRlbnRpdHkuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIFJlc291cmNlIEhlYWx0aCBNYW5hZ2VtZW50IE1ldGhvZCcsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNzA0NzgzJywgdXJsOiAnaHR0cHM6Ly90d3BhdDIudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk3MDQ3ODMnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgZGV0ZWN0aW5nIGhlYWx0aHkgb2YgcmVzb3VyY2VzIGFjcm9zcyBkb21haW5zIGFuZCBwcm90b2NvbHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWV0aG9kIGFuZCBEZXZpY2UgZm9yIExvYWRpbmcgV2ViIFBhZ2UgYmFzZWQgb24gSWZyYW1lJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2OTIyMzInLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY5MjIzMicsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBwcmVzZW50aW5nIEhUVFAvSFRUUFMgbWl4ZWQgY29udGVudHMgb24gYSB3ZWJwYWdlLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Rpc3BsYXkgRGV2aWNlIGFuZCBEaXNwbGF5IE1ldGhvZCBUaGVyZW9mJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTk0NzM4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQtc2ltcGxlLnRpcG8uZ292LnR3L3RpcG90d29jL3RpcG90d2VrbT8hIUZSXzIwMTk0NzM4MycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbGF5ZXItYmFzZWQgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgQ29udHJvbCBNZXRob2Qgb2YgQXVkaW8gUmVjb3JkaW5nJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NzI2MzAnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY3MjYzMCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIG9mIHByZXNzLXRvLXJlY29yZCBjYWxscy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXZWJwYWdlIENvbnRlbnQgU2VsZi1Qcm90ZWN0aW9uIE1ldGhvZCBhbmQgQXNzb2NpYXRlZCBTZXJ2ZXInLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYyNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQyLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjI0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTA3OTE5MicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTA3OTE5MkEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAwODk5MDQnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDA4OTkwNEExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSB3ZWJwYWdlIHNlbGYtcHJvdGVjdGlvbiBtZXRob2QgYmFzZWQgb24gb25lLXRpbWUgcGFzc3dvcmRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBNZXRob2QgZm9yIE9mZmxpbmUgVXBkYXRpbmcgQXBwbGljYXRpb24gUHJvZ3JhbSBUaGVyZW9mJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2Njk2MTQnLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY2OTYxNCcsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMTAzNjIzMjInLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMTAzNjIzMjJBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIHVwZGF0aW5nIGFwcGxpY2F0aW9ucyB0aHJvdWdoIGFuIGVtYmVkZGVkIGJyb3dzZXIgaW4gb2ZmbGluZSBjb250ZXh0LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBXZWIgUGFnZSBNYW5hZ2VtZW50IE1ldGhvZCBUaGVyZW9mJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkyNjAxNycsIHVybDogJ2h0dHBzOi8vdHdwYXQtc2ltcGxlLnRpcG8uZ292LnR3L3RpcG90d29jL3RpcG90d2VrbT8hIUZSXzIwMTkyNjAxNycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3Rpbmcgd2luZG93L3RhYnMgZGVwZW5kZW5jaWVzIG9mIGJyb3dzZXIuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9mZmxpbmUgT3BlcmF0aW9uIG9mIFdlYiBBcHBsaWNhdGlvbiBQcm9ncmFtIEludGVyZmFjZSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MTc1NjgnLCB1cmw6ICdodHRwczovL3R3cGF0LXNpbXBsZS50aXBvLmdvdi50dy90aXBvdHdvYy90aXBvdHdla20/ISFGUl8yMDE5MTc1NjgnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIFdlYiBBUElzIGluIG9mZmxpbmUgY29udGV4dHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIENvbnRyb2wgTWV0aG9kIFRoZXJlb2YgYmFzZWQgb24gRHJhZy1hbmQtRHJvcCBPcGVyYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTA1NjcwJywgdXJsOiAnaHR0cHM6Ly90d3BhdC1zaW1wbGUudGlwby5nb3YudHcvdGlwb3R3b2MvdGlwb3R3ZWttPyEhRlJfMjAxOTA1NjcwJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBicm93c2VyLWJhc2VkIGRpYWxpbmcgbWV0aG9kIHVzaW5nIGRyYWcgYW5kIGRyb3AuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9wZXJhdGlvbiBNZXRob2QgVGhlcmVvZiBhbmQgU2VydmVyIEhvc3QgRGV2aWNlJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIEk2NDE5NjknLCB1cmw6ICdodHRwczovL3R3cGF0Mi50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMSTY0MTk2OScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDTiAxMDk0Mjg5MjUnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvQ04xMDk0Mjg5MjVBJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VTIDIwMTkwMDA3NTIwJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L1VTMjAxOTAwMDc1MjBBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgZmxleGlibGUgd2ViLWJhc2VkIHZvaWNlIHNvbHV0aW9uIGluIGJvdGggb25saW5lIGFuZCBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmludmVudG9ycy5tYXAoKGkpID0+IGkubmFtZSkuam9pbihzeW1ib2wuYW5kKX0sICgke2l0ZW0ueWVhcn0pLCBcIiR7aXRlbS5uYW1lfSxcIiBBcHBsaWNhbnQgJHtpdGVtLmFwcGxpY2FudH1gLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgZ2VuZXJhdGVBYnN0cmFjdDogKHRleHQpID0+IGAke3RleHR9YCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm1TcGFjZSA9ICh0KSA9PiB0LnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gcm1TcGFjZShsaW5rLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBwYXRlbnQtJHt0ZXh0LnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGF3YXJkOiB7XHJcbiAgICAgICAgdGl0bGU6ICdBd2FyZHMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdBd2FyZCBmb3IgQWNjdW11bGF0aW9uIG9mIEluZGl2aWR1YWxseSBBcHBsaWVkIFBhdGVudHMnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTcnLCAnMjAxOCddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIEJlc3QgUGFwZXIgb2YgTWFzdGVyIFRoZXNpcyBQcmVzZW50YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOeiqeWjq+irluaWh+ioiOeVq+eZvOihqOacg+acgOS9s+irluaWh+eNjiknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNiddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdEZXBhcnRtZW50IG9mIGluZm9ybWF0aW9uIG1hbmFnZW1lbnQgb2YgTkNVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIFFpYW5saW1hIFRhb2h1YXl1YW4gZW50cmVwcmVuZXVyaWFsIGNvbXBldGl0aW9uIEVjb21tZXJjZSBHcm91cCcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog5qGD5ZyS57ij5Y2D6YeM6aas5bCL5qGD6Iqx5rqQ5Ym15qWt56u26LO96Zu75a2Q5ZWG5YuZ57WE5Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE1J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTZWNvbmQgcHJpemUgb2YgR29vZ2xlIEFkV29yZHMgQ2hhbGxlbmdlJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDEzJ10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0dvb2dsZSBJbmMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIE5QSUMgQW5udWFsIFJlc2VhcmNoaW5nIFJlc3VsdHMgQ29tcGV0aXRpb24gV2ViIEdyb3VwJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogJyhDaGluZXNlOiDos4foqIrlrbjnvqTlsIjpoYzmiJDmnpznq7bos73ntrLot6/mh4nnlKjntYTlhqDou40pJyxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnTmF0aW9uYWwgUGluZ3R1bmcgSW5zdGl0dXRlIG9mIENvbW1lcmNlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIENsYXNzIFdlYnBhZ2UgRGV2ZWxvcG1lbnQgQ29tcGV0aXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOePree0mue2sumggeijveS9nOavlOizveWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAwNScsICcyMDA3J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ1RoZSBNaW5nIENoZW5nIEpIUyBvZiBQaW5ndHVuZyBDb3VudHknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5uYW1lfSAke2l0ZW0ub3JpZ2luYWxJbmZvIHx8ICcnfSB8IEF3YXJkZWQgYnkgJHtpdGVtLmJ5fSwgKCR7aXRlbS55ZWFycy5qb2luKHN5bWJvbC5hbmQpfSlgLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHVibGljYXRpb246IHtcclxuICAgICAgICB0aXRsZTogJ1B1YmxpY2F0aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NoZW4tSGFvIExpdScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdZdW4tQ2hpYSBUYW5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHB1YlNlbGYsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnWWktQ2hpbmcgSHNpZWgnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0luIG1vYmlsZSBzZWFyY2gsIHRoZSBtb3JlIHlvdSBzZWUsIHRoZSBtb3JlIHlvdSBsb3ZlID8gSG93IGNvbnN1bWVyIGtub3dsZWRnZSBhbmQgc2NyZWVuIHNpemVzIGFmZmVjdCBicmFuZGluZyBlZmZlY3QnLFxyXG4gICAgICAgICAgICAgICAgb246ICdTdW4gWWF0LVNlbiBNYW5hZ2VtZW50IFJldmlldycsXHJcbiAgICAgICAgICAgICAgICBub3RlOiAnJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTElOSycsIHVybDogJ2h0dHA6Ly9tZ3RyLmNtLm5zeXN1LmVkdS50dy9mdWxsam91cm5hbF9wcm9jZXNzLnBocD9pZD0xNDgmcG5vPU01ZjY5OThmZGI2YWUwJnA9Mzc5JywgZ2E6ICdwYXBlcl8yMDIwLTEnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxNicsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIEVmZmVjdCBvZiBSZXBldGl0aW9uIG9mIEtleXdvcmQgQWR2ZXJ0aXNpbmcgb24gQnJhbmQgUmVjb2duaXRpb24gYW5kIEF0dGl0dWRlIHdpdGggUGVyc3Vhc2lvbiBLbm93bGVkZ2UgTW9kZWwgYW5kIFNjcmVlbiBTaXplJyxcclxuICAgICAgICAgICAgICAgIG9uOiAnTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5LCBNYXN0ZXIgVGhlc2lzJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8xMTI5Ni94MjZwdm4nLCBnYTogJ21hc3Rlcl90aGVzaXMnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5hdXRob3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiICR7aXRlbS5vbn1gLFxyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsubmFtZSxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5vbnByb2ZpdDoge1xyXG4gICAgICAgIHRpdGxlOiAnTm9uLXByb2ZpdCBwcm9qZWN0cycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RhaXdhbmVzZVdpemFyZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZyZWUgYXBwbGljYXRpb24gYW5kIHNlcnZpY2UsIGhlbHBpbmcgdXNlcnMgdG8gcXVpY2tseSBhbmQgZWFzaWx5IGZpbmQgdGhlIHByb251bmNpYXRpb24gdG8gY29tbXVuaWNhdGUgaW4gVGFpd2FuZXNlLiBTaW5jZSAyMDEzLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vVGFpd2FuZXNlV2l6YXJkLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAndHd3X3dlYnNpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTHVja3lCYWNvbicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ09wZW4gc291cmNlIHJhZmZsaW5nIGFwcCwgaGVscGluZyBtYXJrZXRlcnMgb3Igc3R1ZGVudHMgdG8gcmFmZmxlIHF1aWNrbHkuIFNpbmNlIDIwMTYuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9MdWNreUJhY29uLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAnbHVja3liYWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHROYW1lOiAoaXRlbSkgPT4gaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBpdGVtVGV4dERlc2NyaXB0aW9uOiAoaXRlbSkgPT4gaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVzcG9ydDoge1xyXG4gICAgICAgIHRpdGxlOiAnR2FtZS9Fc3BvcnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSSBhbSBhIENTZXIsIFwiTGVybkhlck5cIiBpcyBteSBuaWNrbmFtZSBpbiBnYW1lLiBJIGxpa2UgbWFraW5nIHZpZGVvIGZvciB0aGUgZS1zcG9ydHMgcHJvbW90aW9uLCBtb3N0IG9mIG15IHZpZGVvcyBhcmUgbm9uLXByb2ZpdCwgaG9wZSB5b3UgZW5qb3kuIElmIHlvdSBtZWV0IG1lIGluIGdhbWUsIGp1c3Qgc2F5IEhpIScsXHJcbiAgICAgICAgcHJvbW90aW9uOiAnRmVhdHVyZWQgdmlkZW86ICcsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVtZW1icmFuY2Ugb2YgQ291bnRlci1TdHJpa2UgMS42JywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1uclVNWlppaGVMVScsIGdhOiAnY3NfbW92aWVfMScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnMSBZZWFyIG9mIFwiU0suRGVscGFuXCInLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWdtOTN5R1B2TUFNJywgZ2E6ICdjc19tb3ZpZV8yJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCcsXHJcbiAgICB9LFxyXG4gICAgc29jaWFsOiB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHRleHQ6ICdGb2xsb3cgbWU6ICcsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0ZhY2Vib29rJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9iYWNvbmJhbycsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19mYicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHaXRIdWInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2JhY29uYmFvJyxcclxuICAgICAgICAgICAgICAgIGdhOiAnZm9sbG93X2dpdGh1YicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9