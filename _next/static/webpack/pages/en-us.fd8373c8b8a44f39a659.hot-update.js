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
  pageTitle: 'I am BaconBao, I love wandering in the ocean of knowledge!',
  pageDescription: 'Hi, I am BaconBao, I love to explore IT application and IT-related consumer behavior! I enjoy wandering in the ocean of knowledge. (●\'◡\'●)',
  pageOgImage: 'images/ogimage_en.jpg',
  symbol: {
    and: ', '
  },
  main: {
    hello: 'Hi! I am',
    name: 'BaconBao',
    akaName: 'Geng-Bao Lin',
    intro: 'I enjoy wandering in the ocean of knowledge, and love to explore IT application and IT-related consumer behavior, currently as a PhD student at National Taiwan University.',
    // intro: 'I love to explore IT application and IT-related consumer behavior, currently as a PhD student at National Taiwan University. I enjoy wandering in the ocean of knowledge, sometimes rolling, acting cute, and slapping belly in this ocean. (●\'◡\'●)',
    emoji: '(●\'◡\'●)'
  },
  researchInterest: {
    title: 'Research interests',
    items: [{
      text: 'Web Application'
    }, {
      text: 'Consumer Behavior'
    }, {
      text: 'Perception'
    }],
    describe: 'Althrough I have some experiences in IT development, I am more interested in understanding IT consumers’ subjective feelings and thoughts when they interact with IT. Therefore, I am passionate about exploring the reasons (the ‘why’) and causal relationships (the ‘how’) of phenomena related to the behavior and perception of IT consumers, particularly phenomena that involve paradox.',
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
        return "".concat(item.degree, " | ").concat(item.dept, ", ").concat(item.school);
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
      by: 'Acer Inc.',
      labels: ['Technology', 'Research'],
      "with": []
    }, {
      name: 'The Best Paper of Master Thesis Presentation',
      originalInfo: '(Chinese: 碩士論文計畫發表會最佳論文獎)',
      years: ['2016'],
      by: 'Department of information management of NCU',
      labels: ['Research'],
      "with": []
    }, {
      name: 'First place of Qianlima Taohuayuan entrepreneurial competition Ecommerce Group',
      originalInfo: '(Chinese: 桃園縣千里馬尋桃花源創業競賽電子商務組冠軍)',
      years: ['2015'],
      by: 'National Central University',
      labels: ['Business', 'Marketing'],
      role: 'team leader',
      "with": ['鍾佳琳', '黃冠菱', '陳毅寰', '陳亭安']
    }, {
      name: 'Second prize of Google AdWords Challenge',
      originalInfo: false,
      years: ['2013'],
      by: 'Google Inc.',
      labels: ['Marketing'],
      role: 'team leader',
      "with": ['曹志龍', '黃梃展']
    }, {
      name: 'First place of NPIC Annual Researching Results Competition Web Group',
      originalInfo: '(Chinese: 資訊學群專題成果競賽網路應用組冠軍)',
      years: ['2013'],
      by: 'National Pingtung Institute of Commerce',
      labels: ['Technology', 'Business'],
      role: 'team leader',
      "with": ['曹志龍', '黃梃展']
    }, {
      name: 'First place of Class Webpage Development Competition',
      originalInfo: '(Chinese: 班級網頁製作比賽冠軍)',
      years: ['2005', '2007'],
      by: 'The Ming Cheng JHS of Pingtung County',
      labels: ['Technology'],
      role: 'team leader',
      "with": ['my classmates']
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.name, " ").concat(item.originalInfo || '', ", ").concat(item.by, ", (").concat(item.years.join(symbol.and), ")");
      },
      getItemLabels: function getItemLabels(item) {
        return item.labels;
      },
      withMembers: function withMembers(item) {
        var str = '';
        if (item["with"].length > 0) str = "Serve as ".concat(item.role, " and work together with ").concat(item["with"].join(symbol.and), ".");
        return str;
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
      note: 'doi:10.6160/SYSMR.202009_28(3).0001',
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
        }).join(symbol.and), ", (").concat(item.year, "), \"").concat(item.name, ",\" ").concat(item.on, ".");
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
    title: 'Featured certifications',
    items: [{
      maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program (1/3) - Google Ads',
      subtitle: 'Earned through passing certifications such as Google Ads Search Certification and Video Certification.'
    }, {
      maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program (2/3) - Google Cloud',
      subtitle: 'Earned through proof of understanding that includes Infrastructure, Networking, Security, Data, ML, and AI in Google Cloud, etc.'
    }, {
      maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program (3/3) - Google Analytics',
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
    description: 'I was a CSer, "LernHerN" is my nickname in game. I like making video for the e-sports promotion, most of my videos are non-profit, hope you enjoy them.',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJlbW9qaSIsInJlc2VhcmNoSW50ZXJlc3QiLCJ0aXRsZSIsIml0ZW1zIiwidGV4dCIsImRlc2NyaWJlIiwiZm9ybWF0dGVyIiwiaXRlbVRleHQiLCJpdGVtIiwibW9yZURlc2NyaWJlIiwiZWR1IiwiZGVncmVlIiwic2Nob29sIiwiZGVwdCIsImV4cCIsImZyb21UaW1lIiwidG9UaW1lIiwiY29tIiwicG9zIiwiaW52ZW50IiwieWVhciIsImludmVudG9ycyIsImFwcGxpY2FudCIsImxpbmtzIiwidXJsIiwic3RhdHVzIiwibWFwIiwiaSIsImpvaW4iLCJsaW5rVGV4dCIsImxpbmsiLCJnZW5lcmF0ZUFic3RyYWN0IiwibGlua0dhIiwicm1TcGFjZSIsInQiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiYXdhcmQiLCJvcmlnaW5hbEluZm8iLCJ5ZWFycyIsImJ5IiwibGFiZWxzIiwicm9sZSIsImdldEl0ZW1MYWJlbHMiLCJ3aXRoTWVtYmVycyIsInN0ciIsImxlbmd0aCIsInB1YmxpY2F0aW9uIiwiYXV0aG9ycyIsIm9uIiwibm90ZSIsImdhIiwiaXRlbU5vdGUiLCJjZXJ0aWZpY2F0aW9uIiwibWFpbnRpdGxlIiwic3VidGl0bGUiLCJpdGVtTWFpbnRpdGxlIiwiaXRlbVN1YnRpdGxlIiwibm9ucHJvZml0IiwiZGVzY3JpcHRpb24iLCJsaXZlIiwiaXRlbVRleHROYW1lIiwiaXRlbVRleHREZXNjcmlwdGlvbiIsInNlcnZpY2VTdGF0ZSIsInJlcyIsImVzcG9ydCIsInByb21vdGlv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a2JlNUQsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW4tdXMuZmQ4MzczYzhiOGE0NGYzOWE2NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIERhdGEgRU4tVVNcclxuICpcclxuICogQGF1dGhvciBCYWNvbkJhb1xyXG4gKiBAbGluayBodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pb1xyXG4gKi9cclxuXHJcbmNvbnN0IHN5bWJvbCA9IHtcclxuICAgIGFuZDogJywgJyxcclxufTtcclxuY29uc3QgcGF0ZW50U3RhdHVzID0ge1xyXG4gICAgZ3JhbnRlZDogJ0dyYW50ZWQnLFxyXG59O1xyXG5jb25zdCBwYXRlbnRTZWxmID0ge1xyXG4gICAgbmFtZTogJ0dlbmctQmFvIExpbicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5jb25zdCBwdWJTZWxmID0ge1xyXG4gICAgbmFtZTogJ0dlbmctQmFvIExpbicsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICAgIGxhbmc6ICdlbi11cycsXHJcbiAgICBwYWdlVGl0bGU6ICdJIGFtIEJhY29uQmFvLCBJIGxvdmUgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UhJyxcclxuICAgIHBhZ2VEZXNjcmlwdGlvbjogJ0hpLCBJIGFtIEJhY29uQmFvLCBJIGxvdmUgdG8gZXhwbG9yZSBJVCBhcHBsaWNhdGlvbiBhbmQgSVQtcmVsYXRlZCBjb25zdW1lciBiZWhhdmlvciEgSSBlbmpveSB3YW5kZXJpbmcgaW4gdGhlIG9jZWFuIG9mIGtub3dsZWRnZS4gKOKXj1xcJ+KXoVxcJ+KXjyknLFxyXG4gICAgcGFnZU9nSW1hZ2U6ICdpbWFnZXMvb2dpbWFnZV9lbi5qcGcnLFxyXG4gICAgc3ltYm9sOiB7XHJcbiAgICAgICAgYW5kOiAnLCAnLFxyXG4gICAgfSxcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWxsbzogJ0hpISBJIGFtJyxcclxuICAgICAgICBuYW1lOiAnQmFjb25CYW8nLFxyXG4gICAgICAgIGFrYU5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgICAgIGludHJvOiAnSSBlbmpveSB3YW5kZXJpbmcgaW4gdGhlIG9jZWFuIG9mIGtub3dsZWRnZSwgYW5kIGxvdmUgdG8gZXhwbG9yZSBJVCBhcHBsaWNhdGlvbiBhbmQgSVQtcmVsYXRlZCBjb25zdW1lciBiZWhhdmlvciwgY3VycmVudGx5IGFzIGEgUGhEIHN0dWRlbnQgYXQgTmF0aW9uYWwgVGFpd2FuIFVuaXZlcnNpdHkuJyxcclxuICAgICAgICAvLyBpbnRybzogJ0kgbG92ZSB0byBleHBsb3JlIElUIGFwcGxpY2F0aW9uIGFuZCBJVC1yZWxhdGVkIGNvbnN1bWVyIGJlaGF2aW9yLCBjdXJyZW50bHkgYXMgYSBQaEQgc3R1ZGVudCBhdCBOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eS4gSSBlbmpveSB3YW5kZXJpbmcgaW4gdGhlIG9jZWFuIG9mIGtub3dsZWRnZSwgc29tZXRpbWVzIHJvbGxpbmcsIGFjdGluZyBjdXRlLCBhbmQgc2xhcHBpbmcgYmVsbHkgaW4gdGhpcyBvY2Vhbi4gKOKXj1xcJ+KXoVxcJ+KXjyknLFxyXG4gICAgICAgIGVtb2ppOiAnKOKXj1xcJ+KXoVxcJ+KXjyknLFxyXG4gICAgfSxcclxuICAgIHJlc2VhcmNoSW50ZXJlc3Q6IHtcclxuICAgICAgICB0aXRsZTogJ1Jlc2VhcmNoIGludGVyZXN0cycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlYiBBcHBsaWNhdGlvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdDb25zdW1lciBCZWhhdmlvcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdQZXJjZXB0aW9uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlc2NyaWJlOiAnQWx0aHJvdWdoIEkgaGF2ZSBzb21lIGV4cGVyaWVuY2VzIGluIElUIGRldmVsb3BtZW50LCBJIGFtIG1vcmUgaW50ZXJlc3RlZCBpbiB1bmRlcnN0YW5kaW5nIElUIGNvbnN1bWVyc+KAmSBzdWJqZWN0aXZlIGZlZWxpbmdzIGFuZCB0aG91Z2h0cyB3aGVuIHRoZXkgaW50ZXJhY3Qgd2l0aCBJVC4gVGhlcmVmb3JlLCBJIGFtIHBhc3Npb25hdGUgYWJvdXQgZXhwbG9yaW5nIHRoZSByZWFzb25zICh0aGUg4oCYd2h54oCZKSBhbmQgY2F1c2FsIHJlbGF0aW9uc2hpcHMgKHRoZSDigJhob3figJkpIG9mIHBoZW5vbWVuYSByZWxhdGVkIHRvIHRoZSBiZWhhdmlvciBhbmQgcGVyY2VwdGlvbiBvZiBJVCBjb25zdW1lcnMsIHBhcnRpY3VsYXJseSBwaGVub21lbmEgdGhhdCBpbnZvbHZlIHBhcmFkb3guJyxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLnRleHR9YCxcclxuICAgICAgICAgICAgbW9yZURlc2NyaWJlOiAoZGVzY3JpYmUpID0+IGRlc2NyaWJlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWR1OiB7XHJcbiAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ1BoLkQgc3R1ZGVudCcsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnTS5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnQi5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIFBpbmd0dW5nIEluc3RpdHV0ZSBvZiBDb21tZXJjZScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZGVncmVlfSB8ICR7aXRlbS5kZXB0fSwgJHtpdGVtLnNjaG9vbH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwOiB7XHJcbiAgICAgICAgdGl0bGU6ICdFeHBlcmllbmNlcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE2LzknLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAyMC8xMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ1ZhbHVlIExhYicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdQcm9qZWN0IGVuZ2luZWVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE0LzEnLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAxNC8yJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ0UuU1VOIFNlY3VyaXRpZXMnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0Vjb21tZXJjZSBEZXB0LicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdJbnRlcm4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5mcm9tVGltZX0gfiAke2l0ZW0udG9UaW1lfSB8ICR7aXRlbS5jb219LCAke2l0ZW0uZGVwdH0sICR7aXRlbS5wb3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGludmVudDoge1xyXG4gICAgICAgIHRpdGxlOiAnUGF0ZW50cy9JbnZlbnRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgSWRlbnRpdHkgQXV0aGVudGljYXRpb24gZm9yIFZvaWNlIG92ZXIgSW50ZXJuZXQgUHJvdG9jb2wgQ2FsbCBhbmQgUmVsYXRlZCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcxMTI5MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzExMjkzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTgzNTY3NScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTgzNTY3NUEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAzMTM5MDEnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDMxMzkwMUExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VQIEVQMzcxNjUyNicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9FUDM3MTY1MjZBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgYmxvY2tjaGFpbi1iYXNlZCBtZXRob2QgZm9yIHZlcmlmaWNhdGlvbiBvZiBjYWxsaW5nIGlkZW50aXR5LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBSZXNvdXJjZSBIZWFsdGggTWFuYWdlbWVudCBNZXRob2QnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcwNDc4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzA0NzgzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIGRldGVjdGluZyBoZWFsdGh5IG9mIHJlc291cmNlcyBhY3Jvc3MgZG9tYWlucyBhbmQgcHJvdG9jb2xzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgRGV2aWNlIGZvciBMb2FkaW5nIFdlYiBQYWdlIGJhc2VkIG9uIElmcmFtZScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjkyMjMyJywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2OTIyMzInLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgcHJlc2VudGluZyBIVFRQL0hUVFBTIG1peGVkIGNvbnRlbnRzIG9uIGEgd2VicGFnZS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEaXNwbGF5IERldmljZSBhbmQgRGlzcGxheSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5NDczODMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTQ3MzgzJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBsYXllci1iYXNlZCBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBvZiBBdWRpbyBSZWNvcmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY3MjYzMCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjcyNjMwJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2Qgb2YgcHJlc3MtdG8tcmVjb3JkIGNhbGxzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1dlYnBhZ2UgQ29udGVudCBTZWxmLVByb3RlY3Rpb24gTWV0aG9kIGFuZCBBc3NvY2lhdGVkIFNlcnZlcicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjY5NjI0JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2Njk2MjQnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExMDc5MTkyJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExMDc5MTkyQScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDA4OTkwNCcsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMDg5OTA0QTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIHdlYnBhZ2Ugc2VsZi1wcm90ZWN0aW9uIG1ldGhvZCBiYXNlZCBvbiBvbmUtdGltZSBwYXNzd29yZHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE1ldGhvZCBmb3IgT2ZmbGluZSBVcGRhdGluZyBBcHBsaWNhdGlvbiBQcm9ncmFtIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYxNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjE0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMDM2MjMyMicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMDM2MjMyMkEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgdXBkYXRpbmcgYXBwbGljYXRpb25zIHRocm91Z2ggYW4gZW1iZWRkZWQgYnJvd3NlciBpbiBvZmZsaW5lIGNvbnRleHQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIFdlYiBQYWdlIE1hbmFnZW1lbnQgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTI2MDE3JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkyNjAxNycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3Rpbmcgd2luZG93L3RhYnMgZGVwZW5kZW5jaWVzIG9mIGJyb3dzZXIuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9mZmxpbmUgT3BlcmF0aW9uIG9mIFdlYiBBcHBsaWNhdGlvbiBQcm9ncmFtIEludGVyZmFjZSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MTc1NjgnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTE3NTY4Jywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBXZWIgQVBJcyBpbiBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBUaGVyZW9mIGJhc2VkIG9uIERyYWctYW5kLURyb3AgT3BlcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkwNTY3MCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MDU2NzAnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIGJyb3dzZXItYmFzZWQgZGlhbGluZyBtZXRob2QgdXNpbmcgZHJhZyBhbmQgZHJvcC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgT3BlcmF0aW9uIE1ldGhvZCBUaGVyZW9mIGFuZCBTZXJ2ZXIgSG9zdCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY0MTk2OScsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjQxOTY5Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDEwOTQyODkyNScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjEwOTQyODkyNUEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAxOTAwMDc1MjAnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDE5MDAwNzUyMEExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBmbGV4aWJsZSB3ZWItYmFzZWQgdm9pY2Ugc29sdXRpb24gaW4gYm90aCBvbmxpbmUgYW5kIG9mZmxpbmUgY29udGV4dHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uaW52ZW50b3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiIEFwcGxpY2FudCBpcyAke2l0ZW0uYXBwbGljYW50fWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBnZW5lcmF0ZUFic3RyYWN0OiAoaXRlbSkgPT4gYCR7aXRlbS5pbnRyb31gLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybVNwYWNlID0gKHQpID0+IHQuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBybVNwYWNlKGxpbmsudGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHBhdGVudC0ke3RleHQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXdhcmQ6IHtcclxuICAgICAgICB0aXRsZTogJ0F3YXJkcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0F3YXJkIGZvciBBY2N1bXVsYXRpb24gb2YgSW5kaXZpZHVhbGx5IEFwcGxpZWQgUGF0ZW50cycsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNycsICcyMDE4J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnVGVjaG5vbG9neScsICdSZXNlYXJjaCddLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgQmVzdCBQYXBlciBvZiBNYXN0ZXIgVGhlc2lzIFByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog56Kp5aOr6KuW5paH6KiI55Wr55m86KGo5pyD5pyA5L2z6KuW5paH542OKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE2J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0RlcGFydG1lbnQgb2YgaW5mb3JtYXRpb24gbWFuYWdlbWVudCBvZiBOQ1UnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ1Jlc2VhcmNoJ10sXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIFFpYW5saW1hIFRhb2h1YXl1YW4gZW50cmVwcmVuZXVyaWFsIGNvbXBldGl0aW9uIEVjb21tZXJjZSBHcm91cCcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog5qGD5ZyS57ij5Y2D6YeM6aas5bCL5qGD6Iqx5rqQ5Ym15qWt56u26LO96Zu75a2Q5ZWG5YuZ57WE5Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE1J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnQnVzaW5lc3MnLCAnTWFya2V0aW5nJ10sXHJcbiAgICAgICAgICAgICAgICByb2xlOiAndGVhbSBsZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogWyfpjb7kvbPnkLMnLCAn6buD5Yag6I+xJywgJ+mZs+avheWvsCcsICfpmbPkuq3lroknXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NlY29uZCBwcml6ZSBvZiBHb29nbGUgQWRXb3JkcyBDaGFsbGVuZ2UnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnR29vZ2xlIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ01hcmtldGluZyddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ3RlYW0gbGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsn5pu55b+X6b6NJywgJ+m7g+aig+WxlSddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgTlBJQyBBbm51YWwgUmVzZWFyY2hpbmcgUmVzdWx0cyBDb21wZXRpdGlvbiBXZWIgR3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOizh+ioiuWtuOe+pOWwiOmhjOaIkOaenOertuizvee2sui3r+aHieeUqOe1hOWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxMyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdOYXRpb25hbCBQaW5ndHVuZyBJbnN0aXR1dGUgb2YgQ29tbWVyY2UnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ1RlY2hub2xvZ3knLCAnQnVzaW5lc3MnXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICd0ZWFtIGxlYWRlcicsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ+abueW/l+m+jScsICfpu4PmooPlsZUnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIENsYXNzIFdlYnBhZ2UgRGV2ZWxvcG1lbnQgQ29tcGV0aXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOePree0mue2sumggeijveS9nOavlOizveWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAwNScsICcyMDA3J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ1RoZSBNaW5nIENoZW5nIEpIUyBvZiBQaW5ndHVuZyBDb3VudHknLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ1RlY2hub2xvZ3knXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICd0ZWFtIGxlYWRlcicsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ215IGNsYXNzbWF0ZXMnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0ubmFtZX0gJHtpdGVtLm9yaWdpbmFsSW5mbyB8fCAnJ30sICR7aXRlbS5ieX0sICgke2l0ZW0ueWVhcnMuam9pbihzeW1ib2wuYW5kKX0pYCxcclxuICAgICAgICAgICAgZ2V0SXRlbUxhYmVsczogKGl0ZW0pID0+IGl0ZW0ubGFiZWxzLFxyXG4gICAgICAgICAgICB3aXRoTWVtYmVyczogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLndpdGgubGVuZ3RoID4gMCkgc3RyID0gYFNlcnZlIGFzICR7aXRlbS5yb2xlfSBhbmQgd29yayB0b2dldGhlciB3aXRoICR7aXRlbS53aXRoLmpvaW4oc3ltYm9sLmFuZCl9LmA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHVibGljYXRpb246IHtcclxuICAgICAgICB0aXRsZTogJ1B1YmxpY2F0aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NoZW4tSGFvIExpdScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdZdW4tQ2hpYSBUYW5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHB1YlNlbGYsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnWWktQ2hpbmcgSHNpZWgnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0luIG1vYmlsZSBzZWFyY2gsIHRoZSBtb3JlIHlvdSBzZWUsIHRoZSBtb3JlIHlvdSBsb3ZlID8gSG93IGNvbnN1bWVyIGtub3dsZWRnZSBhbmQgc2NyZWVuIHNpemVzIGFmZmVjdCBicmFuZGluZyBlZmZlY3QnLFxyXG4gICAgICAgICAgICAgICAgb246ICdTdW4gWWF0LVNlbiBNYW5hZ2VtZW50IFJldmlldycsXHJcbiAgICAgICAgICAgICAgICBub3RlOiAnZG9pOjEwLjYxNjAvU1lTTVIuMjAyMDA5XzI4KDMpLjAwMDEnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cDovL21ndHIuY20ubnN5c3UuZWR1LnR3L2Z1bGxqb3VybmFsX3Byb2Nlc3MucGhwP2lkPTE0OCZwbm89TTVmNjk5OGZkYjZhZTAmcD0zNzknLCBnYTogJ3BhcGVyXzIwMjAtMScgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE2JyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwdWJTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgRWZmZWN0IG9mIFJlcGV0aXRpb24gb2YgS2V5d29yZCBBZHZlcnRpc2luZyBvbiBCcmFuZCBSZWNvZ25pdGlvbiBhbmQgQXR0aXR1ZGUgd2l0aCBQZXJzdWFzaW9uIEtub3dsZWRnZSBNb2RlbCBhbmQgU2NyZWVuIFNpemUnLFxyXG4gICAgICAgICAgICAgICAgb246ICdOYXRpb25hbCBDZW50cmFsIFVuaXZlcnNpdHksIE1hc3RlciBUaGVzaXMnLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xJTksnLCB1cmw6ICdodHRwczovL2hkbC5oYW5kbGUubmV0LzExMjk2L3gyNnB2bicsIGdhOiAnbWFzdGVyX3RoZXNpcycgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLmF1dGhvcnMubWFwKChpKSA9PiBpLm5hbWUpLmpvaW4oc3ltYm9sLmFuZCl9LCAoJHtpdGVtLnllYXJ9KSwgXCIke2l0ZW0ubmFtZX0sXCIgJHtpdGVtLm9ufS5gLFxyXG4gICAgICAgICAgICBpdGVtTm90ZTogKGl0ZW0pID0+IGl0ZW0ubm90ZSxcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLm5hbWUsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6ICdGZWF0dXJlZCBjZXJ0aWZpY2F0aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnQ2VydGlmaWNhdGlvbiBvZiBHb29nbGUgVGFpd2Fu4oCZcyAyMDIzIEtlcGxlciBQcm9ncmFtICgxLzMpIC0gR29vZ2xlIEFkcycsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ0Vhcm5lZCB0aHJvdWdoIHBhc3NpbmcgY2VydGlmaWNhdGlvbnMgc3VjaCBhcyBHb29nbGUgQWRzIFNlYXJjaCBDZXJ0aWZpY2F0aW9uIGFuZCBWaWRlbyBDZXJ0aWZpY2F0aW9uLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1haW50aXRsZTogJ0NlcnRpZmljYXRpb24gb2YgR29vZ2xlIFRhaXdhbuKAmXMgMjAyMyBLZXBsZXIgUHJvZ3JhbSAoMi8zKSAtIEdvb2dsZSBDbG91ZCcsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ0Vhcm5lZCB0aHJvdWdoIHByb29mIG9mIHVuZGVyc3RhbmRpbmcgdGhhdCBpbmNsdWRlcyBJbmZyYXN0cnVjdHVyZSwgTmV0d29ya2luZywgU2VjdXJpdHksIERhdGEsIE1MLCBhbmQgQUkgaW4gR29vZ2xlIENsb3VkLCBldGMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnQ2VydGlmaWNhdGlvbiBvZiBHb29nbGUgVGFpd2Fu4oCZcyAyMDIzIEtlcGxlciBQcm9ncmFtICgzLzMpIC0gR29vZ2xlIEFuYWx5dGljcycsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ0Vhcm5lZCB0aHJvdWdoIHBhc3NpbmcgY2VydGlmaWNhdGlvbnMgc3VjaCBhcyBHb29nbGUgQW5hbHl0aWNzIENlcnRpZmljYXRpb24uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtTWFpbnRpdGxlOiAoaXRlbSkgPT4gaXRlbS5tYWludGl0bGUsXHJcbiAgICAgICAgICAgIGl0ZW1TdWJ0aXRsZTogKGl0ZW0pID0+IGl0ZW0uc3VidGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBub25wcm9maXQ6IHtcclxuICAgICAgICB0aXRsZTogJ05vbi1wcm9maXQgcHJvamVjdHMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUYWl3YW5lc2VXaXphcmQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGcmVlIGFwcGxpY2F0aW9uIGFuZCBzZXJ2aWNlLCBoZWxwaW5nIHVzZXJzIHRvIHF1aWNrbHkgYW5kIGVhc2lseSBmaW5kIHRoZSBwcm9udW5jaWF0aW9uIHRvIGNvbW11bmljYXRlIGluIFRhaXdhbmVzZS4gU2luY2UgMjAxMy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvL1RhaXdhbmVzZVdpemFyZC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYTogJ3R3d193ZWJzaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTHVja3lCYWNvbicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ09wZW4gc291cmNlIHJhZmZsaW5nIGFwcCwgaGVscGluZyBtYXJrZXRlcnMgb3Igc3R1ZGVudHMgdG8gcmFmZmxlIHF1aWNrbHkuIFNpbmNlIDIwMTYuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9MdWNreUJhY29uLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAnbHVja3liYWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0TmFtZTogKGl0ZW0pID0+IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgaXRlbVRleHREZXNjcmlwdGlvbjogKGl0ZW0pID0+IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgICAgIHNlcnZpY2VTdGF0ZTogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IChpdGVtLmxpdmUpID8gJycgOiAnVGhlIHNlcnZpY2UgaGFzIGJlZW4gZGlzY29udGludWVkLic7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXNwb3J0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdHYW1lL0VzcG9ydCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdJIHdhcyBhIENTZXIsIFwiTGVybkhlck5cIiBpcyBteSBuaWNrbmFtZSBpbiBnYW1lLiBJIGxpa2UgbWFraW5nIHZpZGVvIGZvciB0aGUgZS1zcG9ydHMgcHJvbW90aW9uLCBtb3N0IG9mIG15IHZpZGVvcyBhcmUgbm9uLXByb2ZpdCwgaG9wZSB5b3UgZW5qb3kgdGhlbS4nLFxyXG4gICAgICAgIHByb21vdGlvbjogJ0ZlYXR1cmVkIHZpZGVvOiAnLFxyXG4gICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1JlbWVtYnJhbmNlIG9mIENvdW50ZXItU3RyaWtlIDEuNicsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bnJVTVpaaWhlTFUnLCBnYTogJ2NzX21vdmllXzEnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJzEgWWVhciBvZiBcIlNLLkRlbHBhblwiJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1nbTkzeUdQdk1BTScsIGdhOiAnY3NfbW92aWVfMicgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3Q6IHtcclxuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxyXG4gICAgfSxcclxuICAgIHNvY2lhbDoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR2l0SHViJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYWNvbmJhbycsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19naXRodWInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR29vZ2xlIFNjaG9sYXInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vY2l0YXRpb25zP3VzZXI9T0tkSHgyWUFBQUFKJyxcclxuICAgICAgICAgICAgICAgIGdhOiAnZm9sbG93X2dzY2hvbGFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBsaW5rVGV4dDogKGxpbmspID0+IGxpbmsudGV4dCxcclxuICAgICAgICAgICAgbGlua0dhOiAobGluaykgPT4gbGluay5nYSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=