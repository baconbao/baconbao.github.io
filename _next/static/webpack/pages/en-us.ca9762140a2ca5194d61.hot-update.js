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
      text: 'Consumer Behavior'
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
      note: 'DOI: 10.6160/SYSMR.202009_28(3).0001',
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
        }).join(symbol.and), ", (").concat(item.year, "), \"").concat(item.name, ",\" ").concat(item.on, ". ").concat(item.note);
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
    title: 'Certification',
    items: [{
      maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program - Google Ads',
      subtitle: 'Earned through passing certifications such as Google Ads Search Certification and Video Certification.'
    }, {
      maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program - Google Cloud',
      subtitle: 'Earned through proof of understanding that includes Infrastructure, Networking, Security, Data, ML, and AI in Google Cloud, etc.'
    }, {
      maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program - Google Analytics',
      subtitle: 'Earned through passing certifications such as Google Analytics Certification.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJyZXNlYXJjaEludGVyZXN0IiwidGl0bGUiLCJpdGVtcyIsInRleHQiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsImNlcnRpZmljYXRpb24iLCJtYWludGl0bGUiLCJzdWJ0aXRsZSIsIml0ZW1NYWludGl0bGUiLCJpdGVtU3VidGl0bGUiLCJub25wcm9maXQiLCJkZXNjcmlwdGlvbiIsImxpdmUiLCJpdGVtVGV4dE5hbWUiLCJpdGVtVGV4dERlc2NyaXB0aW9uIiwic2VydmljZVN0YXRlIiwicmVzIiwiZXNwb3J0IiwicHJvbW90aW9uIiwiY29udGFjdCIsInNvY2lhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7Ozs7OztBQU9BLElBQU1BLE1BQU0sR0FBRztBQUNYQyxLQUFHLEVBQUU7QUFETSxDQUFm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LEVBQUUsNkNBQWxEO0FBQWlHcUIsUUFBRSxFQUFFO0FBQXJHLEtBREcsRUFFSDtBQUFFdkMsVUFBSSxFQUFFLHVCQUFSO0FBQWlDa0IsU0FBRyxFQUFFLDZDQUF0QztBQUFxRnFCLFFBQUUsRUFBRTtBQUF6RixLQUZHLENBSkg7QUFRSnRDLGFBQVMsRUFBRTtBQUNQc0IsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDeEIsSUFBZjtBQUFBLE9BREg7QUFFUDBCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2UsRUFBZjtBQUFBO0FBRkQ7QUFSUCxHQWpYQztBQThYVGUsU0FBTyxFQUFFO0FBQ0x4RCxTQUFLLEVBQUU7QUFERixHQTlYQTtBQWlZVHlELFFBQU0sRUFBRTtBQUNKekQsU0FBSyxFQUFFLEVBREg7QUFFSkUsUUFBSSxFQUFFLEVBRkY7QUFHSmlCLFNBQUssRUFBRSxDQUNIO0FBQ0lqQixVQUFJLEVBQUUsUUFEVjtBQUVJa0IsU0FBRyxFQUFFLDZCQUZUO0FBR0lxQixRQUFFLEVBQUU7QUFIUixLQURHLEVBTUg7QUFDSXZDLFVBQUksRUFBRSxnQkFEVjtBQUVJa0IsU0FBRyxFQUFFLHdEQUZUO0FBR0lxQixRQUFFLEVBQUU7QUFIUixLQU5HLENBSEg7QUFlSnRDLGFBQVMsRUFBRTtBQUNQc0IsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDeEIsSUFBZjtBQUFBLE9BREg7QUFFUDBCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ2UsRUFBZjtBQUFBO0FBRkQ7QUFmUDtBQWpZQyxDQUFiO0FBdVplbkQsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW4tdXMuY2E5NzYyMTQwYTJjYTUxOTRkNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIERhdGEgRU4tVVNcclxuICpcclxuICogQGF1dGhvciBCYWNvbkJhb1xyXG4gKiBAbGluayBodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pb1xyXG4gKi9cclxuXHJcbmNvbnN0IHN5bWJvbCA9IHtcclxuICAgIGFuZDogJywgJyxcclxufTtcclxuY29uc3QgcGF0ZW50U3RhdHVzID0ge1xyXG4gICAgZ3JhbnRlZDogJ0dyYW50ZWQnLFxyXG59O1xyXG5jb25zdCBwYXRlbnRTZWxmID0ge1xyXG4gICAgbmFtZTogJ0dlbmctQmFvIExpbicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5jb25zdCBwdWJTZWxmID0ge1xyXG4gICAgbmFtZTogJ0dlbmctQmFvIExpbicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICAgIGxhbmc6ICdlbi11cycsXHJcbiAgICBwYWdlVGl0bGU6ICdJIGFtIEJhY29uQmFvLCBJIGxvdmUgdGVjaG5vbG9neSBhbmQgaXRzIGFwcGxpY2F0aW9uIScsXHJcbiAgICBwYWdlRGVzY3JpcHRpb246ICdIaSwgSSBhbSBCYWNvbkJhbywgSSBsb3ZlIHRlY2hub2xvZ3kgYW5kIGl0cyBhcHBsaWNhdGlvbiEnLFxyXG4gICAgcGFnZU9nSW1hZ2U6ICdpbWFnZXMvb2dpbWFnZV9lbi5qcGcnLFxyXG4gICAgc3ltYm9sOiB7XHJcbiAgICAgICAgYW5kOiAnLCAnLFxyXG4gICAgfSxcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWxsbzogJ0hpISBJIGFtJyxcclxuICAgICAgICBuYW1lOiAnQmFjb25CYW8nLFxyXG4gICAgICAgIGFrYU5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgICAgIGludHJvOiAnSSBsb3ZlIHRvIGV4cGxvcmUgSVQgYXBwbGljYXRpb24gYW5kIElULXJlbGF0ZWQgY29uc3VtZXIgYmVoYXZpb3IsIGN1cnJlbnRseSBhcyBhIFBoRCBzdHVkZW50IGF0IE5hdGlvbmFsIFRhaXdhbiBVbml2ZXJzaXR5LiBJIGVuam95IHdhbmRlcmluZyBpbiB0aGUgb2NlYW4gb2Yga25vd2xlZGdlLCBzb21ldGltZXMgcm9sbGluZywgYWN0aW5nIGN1dGUsIGFuZCBzbGFwcGluZyBiZWxseSBpbiB0aGlzIG9jZWFuICjil49cXCfil6FcXCfil48pLicsXHJcbiAgICB9LFxyXG4gICAgcmVzZWFyY2hJbnRlcmVzdDoge1xyXG4gICAgICAgIHRpdGxlOiAnUmVzZWFyY2ggaW50ZXJlc3RzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnV2ViIEFwcGxpY2F0aW9uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0NvbnN1bWVyIEJlaGF2aW9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0RpZ2l0YWwgTWFya2V0aW5nJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0udGV4dH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWR1OiB7XHJcbiAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ1BoLkQgc3R1ZGVudCcsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnTS5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnQi5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIFBpbmd0dW5nIEluc3RpdHV0ZSBvZiBDb21tZXJjZScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZGVncmVlfSB8ICR7aXRlbS5zY2hvb2x9LCAke2l0ZW0uZGVwdH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwOiB7XHJcbiAgICAgICAgdGl0bGU6ICdFeHBlcmllbmNlcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE2LzknLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAyMC8xMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ1ZhbHVlIExhYicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdQcm9qZWN0IGVuZ2luZWVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE0LzEnLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAxNC8yJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ0UuU1VOIFNlY3VyaXRpZXMnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0Vjb21tZXJjZSBEZXB0LicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdJbnRlcm4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5mcm9tVGltZX0gfiAke2l0ZW0udG9UaW1lfSB8ICR7aXRlbS5jb219LCAke2l0ZW0uZGVwdH0sICR7aXRlbS5wb3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGludmVudDoge1xyXG4gICAgICAgIHRpdGxlOiAnUGF0ZW50cy9JbnZlbnRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgSWRlbnRpdHkgQXV0aGVudGljYXRpb24gZm9yIFZvaWNlIG92ZXIgSW50ZXJuZXQgUHJvdG9jb2wgQ2FsbCBhbmQgUmVsYXRlZCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcxMTI5MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzExMjkzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTgzNTY3NScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTgzNTY3NUEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAzMTM5MDEnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDMxMzkwMUExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VQIEVQMzcxNjUyNicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9FUDM3MTY1MjZBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgYmxvY2tjaGFpbi1iYXNlZCBtZXRob2QgZm9yIHZlcmlmaWNhdGlvbiBvZiBjYWxsaW5nIGlkZW50aXR5LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBSZXNvdXJjZSBIZWFsdGggTWFuYWdlbWVudCBNZXRob2QnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcwNDc4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzA0NzgzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIGRldGVjdGluZyBoZWFsdGh5IG9mIHJlc291cmNlcyBhY3Jvc3MgZG9tYWlucyBhbmQgcHJvdG9jb2xzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgRGV2aWNlIGZvciBMb2FkaW5nIFdlYiBQYWdlIGJhc2VkIG9uIElmcmFtZScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjkyMjMyJywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2OTIyMzInLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgcHJlc2VudGluZyBIVFRQL0hUVFBTIG1peGVkIGNvbnRlbnRzIG9uIGEgd2VicGFnZS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEaXNwbGF5IERldmljZSBhbmQgRGlzcGxheSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5NDczODMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTQ3MzgzJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBsYXllci1iYXNlZCBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBvZiBBdWRpbyBSZWNvcmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY3MjYzMCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjcyNjMwJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2Qgb2YgcHJlc3MtdG8tcmVjb3JkIGNhbGxzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1dlYnBhZ2UgQ29udGVudCBTZWxmLVByb3RlY3Rpb24gTWV0aG9kIGFuZCBBc3NvY2lhdGVkIFNlcnZlcicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjY5NjI0JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2Njk2MjQnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExMDc5MTkyJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExMDc5MTkyQScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDA4OTkwNCcsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMDg5OTA0QTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIHdlYnBhZ2Ugc2VsZi1wcm90ZWN0aW9uIG1ldGhvZCBiYXNlZCBvbiBvbmUtdGltZSBwYXNzd29yZHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE1ldGhvZCBmb3IgT2ZmbGluZSBVcGRhdGluZyBBcHBsaWNhdGlvbiBQcm9ncmFtIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYxNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjE0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMDM2MjMyMicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMDM2MjMyMkEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgdXBkYXRpbmcgYXBwbGljYXRpb25zIHRocm91Z2ggYW4gZW1iZWRkZWQgYnJvd3NlciBpbiBvZmZsaW5lIGNvbnRleHQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIFdlYiBQYWdlIE1hbmFnZW1lbnQgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTI2MDE3JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkyNjAxNycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3Rpbmcgd2luZG93L3RhYnMgZGVwZW5kZW5jaWVzIG9mIGJyb3dzZXIuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9mZmxpbmUgT3BlcmF0aW9uIG9mIFdlYiBBcHBsaWNhdGlvbiBQcm9ncmFtIEludGVyZmFjZSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MTc1NjgnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTE3NTY4Jywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBXZWIgQVBJcyBpbiBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBUaGVyZW9mIGJhc2VkIG9uIERyYWctYW5kLURyb3AgT3BlcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkwNTY3MCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MDU2NzAnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIGJyb3dzZXItYmFzZWQgZGlhbGluZyBtZXRob2QgdXNpbmcgZHJhZyBhbmQgZHJvcC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgT3BlcmF0aW9uIE1ldGhvZCBUaGVyZW9mIGFuZCBTZXJ2ZXIgSG9zdCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY0MTk2OScsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjQxOTY5Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDEwOTQyODkyNScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjEwOTQyODkyNUEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAxOTAwMDc1MjAnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDE5MDAwNzUyMEExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBmbGV4aWJsZSB3ZWItYmFzZWQgdm9pY2Ugc29sdXRpb24gaW4gYm90aCBvbmxpbmUgYW5kIG9mZmxpbmUgY29udGV4dHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uaW52ZW50b3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiIEFwcGxpY2FudCBpcyAke2l0ZW0uYXBwbGljYW50fWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBnZW5lcmF0ZUFic3RyYWN0OiAoaXRlbSkgPT4gYCR7aXRlbS5pbnRyb31gLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybVNwYWNlID0gKHQpID0+IHQuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBybVNwYWNlKGxpbmsudGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHBhdGVudC0ke3RleHQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXdhcmQ6IHtcclxuICAgICAgICB0aXRsZTogJ0F3YXJkcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0F3YXJkIGZvciBBY2N1bXVsYXRpb24gb2YgSW5kaXZpZHVhbGx5IEFwcGxpZWQgUGF0ZW50cycsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNycsICcyMDE4J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgQmVzdCBQYXBlciBvZiBNYXN0ZXIgVGhlc2lzIFByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog56Kp5aOr6KuW5paH6KiI55Wr55m86KGo5pyD5pyA5L2z6KuW5paH542OKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE2J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0RlcGFydG1lbnQgb2YgaW5mb3JtYXRpb24gbWFuYWdlbWVudCBvZiBOQ1UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgUWlhbmxpbWEgVGFvaHVheXVhbiBlbnRyZXByZW5ldXJpYWwgY29tcGV0aXRpb24gRWNvbW1lcmNlIEdyb3VwJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogJyhDaGluZXNlOiDmoYPlnJLnuKPljYPph4zppqzlsIvmoYPoirHmupDlibXmpa3nq7bos73pm7vlrZDllYbli5nntYTlhqDou40pJyxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTUnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NlY29uZCBwcml6ZSBvZiBHb29nbGUgQWRXb3JkcyBDaGFsbGVuZ2UnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnR29vZ2xlIEluYy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgTlBJQyBBbm51YWwgUmVzZWFyY2hpbmcgUmVzdWx0cyBDb21wZXRpdGlvbiBXZWIgR3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOizh+ioiuWtuOe+pOWwiOmhjOaIkOaenOertuizvee2sui3r+aHieeUqOe1hOWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxMyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdOYXRpb25hbCBQaW5ndHVuZyBJbnN0aXR1dGUgb2YgQ29tbWVyY2UnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgQ2xhc3MgV2VicGFnZSBEZXZlbG9wbWVudCBDb21wZXRpdGlvbicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog54+t57Sa57ay6aCB6KO95L2c5q+U6LO95Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDA1JywgJzIwMDcnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnVGhlIE1pbmcgQ2hlbmcgSkhTIG9mIFBpbmd0dW5nIENvdW50eScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLm5hbWV9ICR7aXRlbS5vcmlnaW5hbEluZm8gfHwgJyd9IHwgQXdhcmRlZCBieSAke2l0ZW0uYnl9LCAoJHtpdGVtLnllYXJzLmpvaW4oc3ltYm9sLmFuZCl9KWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwdWJsaWNhdGlvbjoge1xyXG4gICAgICAgIHRpdGxlOiAnUHVibGljYXRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQ2hlbi1IYW8gTGl1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1l1bi1DaGlhIFRhbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdZaS1DaGluZyBIc2llaCcgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSW4gbW9iaWxlIHNlYXJjaCwgdGhlIG1vcmUgeW91IHNlZSwgdGhlIG1vcmUgeW91IGxvdmUgPyBIb3cgY29uc3VtZXIga25vd2xlZGdlIGFuZCBzY3JlZW4gc2l6ZXMgYWZmZWN0IGJyYW5kaW5nIGVmZmVjdCcsXHJcbiAgICAgICAgICAgICAgICBvbjogJ1N1biBZYXQtU2VuIE1hbmFnZW1lbnQgUmV2aWV3JyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICdET0k6IDEwLjYxNjAvU1lTTVIuMjAyMDA5XzI4KDMpLjAwMDEnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cDovL21ndHIuY20ubnN5c3UuZWR1LnR3L2Z1bGxqb3VybmFsX3Byb2Nlc3MucGhwP2lkPTE0OCZwbm89TTVmNjk5OGZkYjZhZTAmcD0zNzknLCBnYTogJ3BhcGVyXzIwMjAtMScgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE2JyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwdWJTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgRWZmZWN0IG9mIFJlcGV0aXRpb24gb2YgS2V5d29yZCBBZHZlcnRpc2luZyBvbiBCcmFuZCBSZWNvZ25pdGlvbiBhbmQgQXR0aXR1ZGUgd2l0aCBQZXJzdWFzaW9uIEtub3dsZWRnZSBNb2RlbCBhbmQgU2NyZWVuIFNpemUnLFxyXG4gICAgICAgICAgICAgICAgb246ICdOYXRpb25hbCBDZW50cmFsIFVuaXZlcnNpdHksIE1hc3RlciBUaGVzaXMnLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xJTksnLCB1cmw6ICdodHRwczovL2hkbC5oYW5kbGUubmV0LzExMjk2L3gyNnB2bicsIGdhOiAnbWFzdGVyX3RoZXNpcycgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmF1dGhvcnMubWFwKChpKSA9PiBpLm5hbWUpLmpvaW4oc3ltYm9sLmFuZCl9LCAoJHtpdGVtLnllYXJ9KSwgXCIke2l0ZW0ubmFtZX0sXCIgJHtpdGVtLm9ufS4gJHtpdGVtLm5vdGV9YCxcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLm5hbWUsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6ICdDZXJ0aWZpY2F0aW9uJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYWludGl0bGU6ICdDZXJ0aWZpY2F0aW9uIG9mIEdvb2dsZSBUYWl3YW7igJlzIDIwMjMgS2VwbGVyIFByb2dyYW0gLSBHb29nbGUgQWRzJyxcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnRWFybmVkIHRocm91Z2ggcGFzc2luZyBjZXJ0aWZpY2F0aW9ucyBzdWNoIGFzIEdvb2dsZSBBZHMgU2VhcmNoIENlcnRpZmljYXRpb24gYW5kIFZpZGVvIENlcnRpZmljYXRpb24uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnQ2VydGlmaWNhdGlvbiBvZiBHb29nbGUgVGFpd2Fu4oCZcyAyMDIzIEtlcGxlciBQcm9ncmFtIC0gR29vZ2xlIENsb3VkJyxcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnRWFybmVkIHRocm91Z2ggcHJvb2Ygb2YgdW5kZXJzdGFuZGluZyB0aGF0IGluY2x1ZGVzIEluZnJhc3RydWN0dXJlLCBOZXR3b3JraW5nLCBTZWN1cml0eSwgRGF0YSwgTUwsIGFuZCBBSSBpbiBHb29nbGUgQ2xvdWQsIGV0Yy4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYWludGl0bGU6ICdDZXJ0aWZpY2F0aW9uIG9mIEdvb2dsZSBUYWl3YW7igJlzIDIwMjMgS2VwbGVyIFByb2dyYW0gLSBHb29nbGUgQW5hbHl0aWNzJyxcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnRWFybmVkIHRocm91Z2ggcGFzc2luZyBjZXJ0aWZpY2F0aW9ucyBzdWNoIGFzIEdvb2dsZSBBbmFseXRpY3MgQ2VydGlmaWNhdGlvbi4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1NYWludGl0bGU6IChpdGVtKSA9PiBpdGVtLm1haW50aXRsZSxcclxuICAgICAgICAgICAgaXRlbVN1YnRpdGxlOiAoaXRlbSkgPT4gaXRlbS5zdWJ0aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5vbnByb2ZpdDoge1xyXG4gICAgICAgIHRpdGxlOiAnTm9uLXByb2ZpdCBwcm9qZWN0cycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RhaXdhbmVzZVdpemFyZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZyZWUgYXBwbGljYXRpb24gYW5kIHNlcnZpY2UsIGhlbHBpbmcgdXNlcnMgdG8gcXVpY2tseSBhbmQgZWFzaWx5IGZpbmQgdGhlIHByb251bmNpYXRpb24gdG8gY29tbXVuaWNhdGUgaW4gVGFpd2FuZXNlLiBTaW5jZSAyMDEzLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vVGFpd2FuZXNlV2l6YXJkLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAndHd3X3dlYnNpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdMdWNreUJhY29uJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT3BlbiBzb3VyY2UgcmFmZmxpbmcgYXBwLCBoZWxwaW5nIG1hcmtldGVycyBvciBzdHVkZW50cyB0byByYWZmbGUgcXVpY2tseS4gU2luY2UgMjAxNi4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvL0x1Y2t5QmFjb24vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICdsdWNreWJhY29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHROYW1lOiAoaXRlbSkgPT4gaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBpdGVtVGV4dERlc2NyaXB0aW9uOiAoaXRlbSkgPT4gaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICAgICAgc2VydmljZVN0YXRlOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gKGl0ZW0ubGl2ZSkgPyAnJyA6ICdUaGUgc2VydmljZSBoYXMgYmVlbiBkaXNjb250aW51ZWQuJztcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlc3BvcnQ6IHtcclxuICAgICAgICB0aXRsZTogJ0dhbWUvRXNwb3J0JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0kgYW0gYSBDU2VyLCBcIkxlcm5IZXJOXCIgaXMgbXkgbmlja25hbWUgaW4gZ2FtZS4gSSBsaWtlIG1ha2luZyB2aWRlbyBmb3IgdGhlIGUtc3BvcnRzIHByb21vdGlvbiwgbW9zdCBvZiBteSB2aWRlb3MgYXJlIG5vbi1wcm9maXQsIGhvcGUgeW91IGVuam95LiBJZiB5b3UgbWVldCBtZSBpbiBnYW1lLCBqdXN0IHNheSBIaSEnLFxyXG4gICAgICAgIHByb21vdGlvbjogJ0ZlYXR1cmVkIHZpZGVvOiAnLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1JlbWVtYnJhbmNlIG9mIENvdW50ZXItU3RyaWtlIDEuNicsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bnJVTVpaaWhlTFUnLCBnYTogJ2NzX21vdmllXzEnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJzEgWWVhciBvZiBcIlNLLkRlbHBhblwiJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1nbTkzeUdQdk1BTScsIGdhOiAnY3NfbW92aWVfMicgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3Q6IHtcclxuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxyXG4gICAgfSxcclxuICAgIHNvY2lhbDoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR2l0SHViJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYWNvbmJhbycsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19naXRodWInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR29vZ2xlIFNjaG9sYXInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vY2l0YXRpb25zP3VzZXI9T0tkSHgyWUFBQUFKJyxcclxuICAgICAgICAgICAgICAgIGdhOiAnZm9sbG93X2dzY2hvbGFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=