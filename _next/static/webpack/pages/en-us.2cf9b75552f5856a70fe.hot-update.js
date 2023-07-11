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
    introEmoji: '(●\'◡\'●)'
  },
  researchInterest: {
    title: 'Research interests',
    items: [{
      text: 'Web Application'
    }, {
      text: 'Consumer Behavior'
    }, {
      text: 'Consumer Perception'
    }],
    describe: 'Althrough I have some experiences in IT development, I am more interested in understanding IT consumers’ subjective feelings and thoughts when they interact with IT, particularly phenomena that involve paradox. Therefore, I am passionate about exploring the reasons (the ‘why’) and causal relationships (the ‘how’) of phenomena related to the behavior and perception of IT consumers.',
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
        if (item["with"].length > 0) str = "Serve as ".concat(item.role, " and work together with ").concat(item["with"].join(symbol.and), ". *");
        return str;
      },
      notes: function notes() {
        return '* Descending sort by last name';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwicHViU2VsZiIsImRhdGEiLCJsYW5nIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwicGFnZU9nSW1hZ2UiLCJtYWluIiwiaGVsbG8iLCJha2FOYW1lIiwiaW50cm8iLCJpbnRyb0Vtb2ppIiwicmVzZWFyY2hJbnRlcmVzdCIsInRpdGxlIiwiaXRlbXMiLCJ0ZXh0IiwiZGVzY3JpYmUiLCJmb3JtYXR0ZXIiLCJpdGVtVGV4dCIsIml0ZW0iLCJtb3JlRGVzY3JpYmUiLCJlZHUiLCJkZWdyZWUiLCJzY2hvb2wiLCJkZXB0IiwiZXhwIiwiZnJvbVRpbWUiLCJ0b1RpbWUiLCJjb20iLCJwb3MiLCJpbnZlbnQiLCJ5ZWFyIiwiaW52ZW50b3JzIiwiYXBwbGljYW50IiwibGlua3MiLCJ1cmwiLCJzdGF0dXMiLCJtYXAiLCJpIiwiam9pbiIsImxpbmtUZXh0IiwibGluayIsImdlbmVyYXRlQWJzdHJhY3QiLCJsaW5rR2EiLCJybVNwYWNlIiwidCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJhd2FyZCIsIm9yaWdpbmFsSW5mbyIsInllYXJzIiwiYnkiLCJsYWJlbHMiLCJyb2xlIiwiZ2V0SXRlbUxhYmVscyIsIndpdGhNZW1iZXJzIiwic3RyIiwibGVuZ3RoIiwibm90ZXMiLCJwdWJsaWNhdGlvbiIsImF1dGhvcnMiLCJvbiIsIm5vdGUiLCJnYSIsIml0ZW1Ob3RlIiwiY2VydGlmaWNhdGlvbiIsIm1haW50aXRsZSIsInN1YnRpdGxlIiwiaXRlbU1haW50aXRsZSIsIml0ZW1TdWJ0aXRsZSIsIm5vbnByb2ZpdCIsImRlc2NyaXB0aW9uIiwibGl2ZSIsIml0ZW1UZXh0TmFtZSIsIml0ZW1UZXh0RGVzY3JpcHRpb24iLCJzZXJ2aWNlU3RhdGUiLCJyZXMiLCJlc3Bv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QUFBLGVBQVVBLElBQUksQ0FBQ3NCLEVBQWY7QUFBQTtBQUZEO0FBZlA7QUE3WkMsQ0FBYjtBQW1iZTdELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLXVzLjJjZjliNzU1NTJmNTg1NmE3MGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBEYXRhIEVOLVVTXHJcbiAqXHJcbiAqIEBhdXRob3IgQmFjb25CYW9cclxuICogQGxpbmsgaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW9cclxuICovXHJcblxyXG5jb25zdCBzeW1ib2wgPSB7XHJcbiAgICBhbmQ6ICcsICcsXHJcbn07XHJcbmNvbnN0IHBhdGVudFN0YXR1cyA9IHtcclxuICAgIGdyYW50ZWQ6ICdHcmFudGVkJyxcclxufTtcclxuY29uc3QgcGF0ZW50U2VsZiA9IHtcclxuICAgIG5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuY29uc3QgcHViU2VsZiA9IHtcclxuICAgIG5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYW5nOiAnZW4tdXMnLFxyXG4gICAgcGFnZVRpdGxlOiAnSSBhbSBCYWNvbkJhbywgSSBsb3ZlIHdhbmRlcmluZyBpbiB0aGUgb2NlYW4gb2Yga25vd2xlZGdlIScsXHJcbiAgICBwYWdlRGVzY3JpcHRpb246ICdIaSwgSSBhbSBCYWNvbkJhbywgSSBsb3ZlIHRvIGV4cGxvcmUgSVQgYXBwbGljYXRpb24gYW5kIElULXJlbGF0ZWQgY29uc3VtZXIgYmVoYXZpb3IhIEkgZW5qb3kgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UuICjil49cXCfil6FcXCfil48pJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2VfZW4uanBnJyxcclxuICAgIHN5bWJvbDoge1xyXG4gICAgICAgIGFuZDogJywgJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVsbG86ICdIaSEgSSBhbScsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAnR2VuZy1CYW8gTGluJyxcclxuICAgICAgICBpbnRybzogJ0kgZW5qb3kgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UsIGFuZCBsb3ZlIHRvIGV4cGxvcmUgSVQgYXBwbGljYXRpb24gYW5kIElULXJlbGF0ZWQgY29uc3VtZXIgYmVoYXZpb3IsIGN1cnJlbnRseSBhcyBhIFBoRCBzdHVkZW50IGF0IE5hdGlvbmFsIFRhaXdhbiBVbml2ZXJzaXR5LicsXHJcbiAgICAgICAgLy8gaW50cm86ICdJIGxvdmUgdG8gZXhwbG9yZSBJVCBhcHBsaWNhdGlvbiBhbmQgSVQtcmVsYXRlZCBjb25zdW1lciBiZWhhdmlvciwgY3VycmVudGx5IGFzIGEgUGhEIHN0dWRlbnQgYXQgTmF0aW9uYWwgVGFpd2FuIFVuaXZlcnNpdHkuIEkgZW5qb3kgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UsIHNvbWV0aW1lcyByb2xsaW5nLCBhY3RpbmcgY3V0ZSwgYW5kIHNsYXBwaW5nIGJlbGx5IGluIHRoaXMgb2NlYW4uICjil49cXCfil6FcXCfil48pJyxcclxuICAgICAgICBpbnRyb0Vtb2ppOiAnKOKXj1xcJ+KXoVxcJ+KXjyknLFxyXG4gICAgfSxcclxuICAgIHJlc2VhcmNoSW50ZXJlc3Q6IHtcclxuICAgICAgICB0aXRsZTogJ1Jlc2VhcmNoIGludGVyZXN0cycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlYiBBcHBsaWNhdGlvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdDb25zdW1lciBCZWhhdmlvcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdDb25zdW1lciBQZXJjZXB0aW9uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlc2NyaWJlOiAnQWx0aHJvdWdoIEkgaGF2ZSBzb21lIGV4cGVyaWVuY2VzIGluIElUIGRldmVsb3BtZW50LCBJIGFtIG1vcmUgaW50ZXJlc3RlZCBpbiB1bmRlcnN0YW5kaW5nIElUIGNvbnN1bWVyc+KAmSBzdWJqZWN0aXZlIGZlZWxpbmdzIGFuZCB0aG91Z2h0cyB3aGVuIHRoZXkgaW50ZXJhY3Qgd2l0aCBJVCwgcGFydGljdWxhcmx5IHBoZW5vbWVuYSB0aGF0IGludm9sdmUgcGFyYWRveC4gVGhlcmVmb3JlLCBJIGFtIHBhc3Npb25hdGUgYWJvdXQgZXhwbG9yaW5nIHRoZSByZWFzb25zICh0aGUg4oCYd2h54oCZKSBhbmQgY2F1c2FsIHJlbGF0aW9uc2hpcHMgKHRoZSDigJhob3figJkpIG9mIHBoZW5vbWVuYSByZWxhdGVkIHRvIHRoZSBiZWhhdmlvciBhbmQgcGVyY2VwdGlvbiBvZiBJVCBjb25zdW1lcnMuJyxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLnRleHR9YCxcclxuICAgICAgICAgICAgbW9yZURlc2NyaWJlOiAoZGVzY3JpYmUpID0+IGRlc2NyaWJlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWR1OiB7XHJcbiAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ1BoLkQgc3R1ZGVudCcsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnTS5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnQi5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIFBpbmd0dW5nIEluc3RpdHV0ZSBvZiBDb21tZXJjZScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZGVncmVlfSB8ICR7aXRlbS5kZXB0fSwgJHtpdGVtLnNjaG9vbH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwOiB7XHJcbiAgICAgICAgdGl0bGU6ICdFeHBlcmllbmNlcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE2LzknLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAyMC8xMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ1ZhbHVlIExhYicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdQcm9qZWN0IGVuZ2luZWVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE0LzEnLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAxNC8yJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ0UuU1VOIFNlY3VyaXRpZXMnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0Vjb21tZXJjZSBEZXB0LicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdJbnRlcm4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5mcm9tVGltZX0gfiAke2l0ZW0udG9UaW1lfSB8ICR7aXRlbS5jb219LCAke2l0ZW0uZGVwdH0sICR7aXRlbS5wb3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGludmVudDoge1xyXG4gICAgICAgIHRpdGxlOiAnUGF0ZW50cy9JbnZlbnRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgSWRlbnRpdHkgQXV0aGVudGljYXRpb24gZm9yIFZvaWNlIG92ZXIgSW50ZXJuZXQgUHJvdG9jb2wgQ2FsbCBhbmQgUmVsYXRlZCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcxMTI5MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzExMjkzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTgzNTY3NScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTgzNTY3NUEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAzMTM5MDEnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDMxMzkwMUExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VQIEVQMzcxNjUyNicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9FUDM3MTY1MjZBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgYmxvY2tjaGFpbi1iYXNlZCBtZXRob2QgZm9yIHZlcmlmaWNhdGlvbiBvZiBjYWxsaW5nIGlkZW50aXR5LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBSZXNvdXJjZSBIZWFsdGggTWFuYWdlbWVudCBNZXRob2QnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcwNDc4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzA0NzgzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIGRldGVjdGluZyBoZWFsdGh5IG9mIHJlc291cmNlcyBhY3Jvc3MgZG9tYWlucyBhbmQgcHJvdG9jb2xzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgRGV2aWNlIGZvciBMb2FkaW5nIFdlYiBQYWdlIGJhc2VkIG9uIElmcmFtZScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjkyMjMyJywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2OTIyMzInLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgcHJlc2VudGluZyBIVFRQL0hUVFBTIG1peGVkIGNvbnRlbnRzIG9uIGEgd2VicGFnZS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEaXNwbGF5IERldmljZSBhbmQgRGlzcGxheSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5NDczODMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTQ3MzgzJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBsYXllci1iYXNlZCBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBvZiBBdWRpbyBSZWNvcmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY3MjYzMCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjcyNjMwJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2Qgb2YgcHJlc3MtdG8tcmVjb3JkIGNhbGxzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1dlYnBhZ2UgQ29udGVudCBTZWxmLVByb3RlY3Rpb24gTWV0aG9kIGFuZCBBc3NvY2lhdGVkIFNlcnZlcicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjY5NjI0JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2Njk2MjQnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExMDc5MTkyJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExMDc5MTkyQScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDA4OTkwNCcsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMDg5OTA0QTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIHdlYnBhZ2Ugc2VsZi1wcm90ZWN0aW9uIG1ldGhvZCBiYXNlZCBvbiBvbmUtdGltZSBwYXNzd29yZHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE1ldGhvZCBmb3IgT2ZmbGluZSBVcGRhdGluZyBBcHBsaWNhdGlvbiBQcm9ncmFtIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYxNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjE0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMDM2MjMyMicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMDM2MjMyMkEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgdXBkYXRpbmcgYXBwbGljYXRpb25zIHRocm91Z2ggYW4gZW1iZWRkZWQgYnJvd3NlciBpbiBvZmZsaW5lIGNvbnRleHQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIFdlYiBQYWdlIE1hbmFnZW1lbnQgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTI2MDE3JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkyNjAxNycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3Rpbmcgd2luZG93L3RhYnMgZGVwZW5kZW5jaWVzIG9mIGJyb3dzZXIuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9mZmxpbmUgT3BlcmF0aW9uIG9mIFdlYiBBcHBsaWNhdGlvbiBQcm9ncmFtIEludGVyZmFjZSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MTc1NjgnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTE3NTY4Jywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBXZWIgQVBJcyBpbiBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBUaGVyZW9mIGJhc2VkIG9uIERyYWctYW5kLURyb3AgT3BlcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkwNTY3MCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MDU2NzAnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIGJyb3dzZXItYmFzZWQgZGlhbGluZyBtZXRob2QgdXNpbmcgZHJhZyBhbmQgZHJvcC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgT3BlcmF0aW9uIE1ldGhvZCBUaGVyZW9mIGFuZCBTZXJ2ZXIgSG9zdCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY0MTk2OScsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjQxOTY5Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDEwOTQyODkyNScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjEwOTQyODkyNUEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAxOTAwMDc1MjAnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDE5MDAwNzUyMEExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBmbGV4aWJsZSB3ZWItYmFzZWQgdm9pY2Ugc29sdXRpb24gaW4gYm90aCBvbmxpbmUgYW5kIG9mZmxpbmUgY29udGV4dHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uaW52ZW50b3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiIEFwcGxpY2FudCBpcyAke2l0ZW0uYXBwbGljYW50fWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBnZW5lcmF0ZUFic3RyYWN0OiAoaXRlbSkgPT4gYCR7aXRlbS5pbnRyb31gLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybVNwYWNlID0gKHQpID0+IHQuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBybVNwYWNlKGxpbmsudGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHBhdGVudC0ke3RleHQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXdhcmQ6IHtcclxuICAgICAgICB0aXRsZTogJ0F3YXJkcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0F3YXJkIGZvciBBY2N1bXVsYXRpb24gb2YgSW5kaXZpZHVhbGx5IEFwcGxpZWQgUGF0ZW50cycsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNycsICcyMDE4J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnVGVjaG5vbG9neScsICdSZXNlYXJjaCddLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgQmVzdCBQYXBlciBvZiBNYXN0ZXIgVGhlc2lzIFByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog56Kp5aOr6KuW5paH6KiI55Wr55m86KGo5pyD5pyA5L2z6KuW5paH542OKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE2J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0RlcGFydG1lbnQgb2YgaW5mb3JtYXRpb24gbWFuYWdlbWVudCBvZiBOQ1UnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ1Jlc2VhcmNoJ10sXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIFFpYW5saW1hIFRhb2h1YXl1YW4gZW50cmVwcmVuZXVyaWFsIGNvbXBldGl0aW9uIEVjb21tZXJjZSBHcm91cCcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog5qGD5ZyS57ij5Y2D6YeM6aas5bCL5qGD6Iqx5rqQ5Ym15qWt56u26LO96Zu75a2Q5ZWG5YuZ57WE5Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDE1J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnQnVzaW5lc3MnLCAnTWFya2V0aW5nJ10sXHJcbiAgICAgICAgICAgICAgICByb2xlOiAndGVhbSBsZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogWyfpjb7kvbPnkLMnLCAn6buD5Yag6I+xJywgJ+mZs+avheWvsCcsICfpmbPkuq3lroknXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NlY29uZCBwcml6ZSBvZiBHb29nbGUgQWRXb3JkcyBDaGFsbGVuZ2UnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTMnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnR29vZ2xlIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ01hcmtldGluZyddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ3RlYW0gbGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsn5pu55b+X6b6NJywgJ+m7g+aig+WxlSddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgTlBJQyBBbm51YWwgUmVzZWFyY2hpbmcgUmVzdWx0cyBDb21wZXRpdGlvbiBXZWIgR3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOizh+ioiuWtuOe+pOWwiOmhjOaIkOaenOertuizvee2sui3r+aHieeUqOe1hOWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxMyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdOYXRpb25hbCBQaW5ndHVuZyBJbnN0aXR1dGUgb2YgQ29tbWVyY2UnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ1RlY2hub2xvZ3knLCAnQnVzaW5lc3MnXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICd0ZWFtIGxlYWRlcicsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ+abueW/l+m+jScsICfpu4PmooPlsZUnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IHBsYWNlIG9mIENsYXNzIFdlYnBhZ2UgRGV2ZWxvcG1lbnQgQ29tcGV0aXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOePree0mue2sumggeijveS9nOavlOizveWGoOi7jSknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAwNScsICcyMDA3J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ1RoZSBNaW5nIENoZW5nIEpIUyBvZiBQaW5ndHVuZyBDb3VudHknLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ1RlY2hub2xvZ3knXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICd0ZWFtIGxlYWRlcicsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ215IGNsYXNzbWF0ZXMnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0ubmFtZX0gJHtpdGVtLm9yaWdpbmFsSW5mbyB8fCAnJ30sICR7aXRlbS5ieX0sICgke2l0ZW0ueWVhcnMuam9pbihzeW1ib2wuYW5kKX0pYCxcclxuICAgICAgICAgICAgZ2V0SXRlbUxhYmVsczogKGl0ZW0pID0+IGl0ZW0ubGFiZWxzLFxyXG4gICAgICAgICAgICB3aXRoTWVtYmVyczogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLndpdGgubGVuZ3RoID4gMCkgc3RyID0gYFNlcnZlIGFzICR7aXRlbS5yb2xlfSBhbmQgd29yayB0b2dldGhlciB3aXRoICR7aXRlbS53aXRoLmpvaW4oc3ltYm9sLmFuZCl9LiAqYDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vdGVzOiAoKSA9PiAnKiBEZXNjZW5kaW5nIHNvcnQgYnkgbGFzdCBuYW1lJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHB1YmxpY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6ICdQdWJsaWNhdGlvbnMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdDaGVuLUhhbyBMaXUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnWXVuLUNoaWEgVGFuZycgfSxcclxuICAgICAgICAgICAgICAgICAgICBwdWJTZWxmLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1lpLUNoaW5nIEhzaWVoJyB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJbiBtb2JpbGUgc2VhcmNoLCB0aGUgbW9yZSB5b3Ugc2VlLCB0aGUgbW9yZSB5b3UgbG92ZSA/IEhvdyBjb25zdW1lciBrbm93bGVkZ2UgYW5kIHNjcmVlbiBzaXplcyBhZmZlY3QgYnJhbmRpbmcgZWZmZWN0JyxcclxuICAgICAgICAgICAgICAgIG9uOiAnU3VuIFlhdC1TZW4gTWFuYWdlbWVudCBSZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogJ2RvaToxMC42MTYwL1NZU01SLjIwMjAwOV8yOCgzKS4wMDAxJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTElOSycsIHVybDogJ2h0dHA6Ly9tZ3RyLmNtLm5zeXN1LmVkdS50dy9mdWxsam91cm5hbF9wcm9jZXNzLnBocD9pZD0xNDgmcG5vPU01ZjY5OThmZGI2YWUwJnA9Mzc5JywgZ2E6ICdwYXBlcl8yMDIwLTEnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxNicsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHViU2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIEVmZmVjdCBvZiBSZXBldGl0aW9uIG9mIEtleXdvcmQgQWR2ZXJ0aXNpbmcgb24gQnJhbmQgUmVjb2duaXRpb24gYW5kIEF0dGl0dWRlIHdpdGggUGVyc3Vhc2lvbiBLbm93bGVkZ2UgTW9kZWwgYW5kIFNjcmVlbiBTaXplJyxcclxuICAgICAgICAgICAgICAgIG9uOiAnTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5LCBNYXN0ZXIgVGhlc2lzJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8xMTI5Ni94MjZwdm4nLCBnYTogJ21hc3Rlcl90aGVzaXMnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5hdXRob3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiICR7aXRlbS5vbn0uYCxcclxuICAgICAgICAgICAgaXRlbU5vdGU6IChpdGVtKSA9PiBpdGVtLm5vdGUsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay5uYW1lLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2VydGlmaWNhdGlvbjoge1xyXG4gICAgICAgIHRpdGxlOiAnRmVhdHVyZWQgY2VydGlmaWNhdGlvbnMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1haW50aXRsZTogJ0NlcnRpZmljYXRpb24gb2YgR29vZ2xlIFRhaXdhbuKAmXMgMjAyMyBLZXBsZXIgUHJvZ3JhbSAoMS8zKSAtIEdvb2dsZSBBZHMnLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICdFYXJuZWQgdGhyb3VnaCBwYXNzaW5nIGNlcnRpZmljYXRpb25zIHN1Y2ggYXMgR29vZ2xlIEFkcyBTZWFyY2ggQ2VydGlmaWNhdGlvbiBhbmQgVmlkZW8gQ2VydGlmaWNhdGlvbi4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYWludGl0bGU6ICdDZXJ0aWZpY2F0aW9uIG9mIEdvb2dsZSBUYWl3YW7igJlzIDIwMjMgS2VwbGVyIFByb2dyYW0gKDIvMykgLSBHb29nbGUgQ2xvdWQnLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICdFYXJuZWQgdGhyb3VnaCBwcm9vZiBvZiB1bmRlcnN0YW5kaW5nIHRoYXQgaW5jbHVkZXMgSW5mcmFzdHJ1Y3R1cmUsIE5ldHdvcmtpbmcsIFNlY3VyaXR5LCBEYXRhLCBNTCwgYW5kIEFJIGluIEdvb2dsZSBDbG91ZCwgZXRjLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1haW50aXRsZTogJ0NlcnRpZmljYXRpb24gb2YgR29vZ2xlIFRhaXdhbuKAmXMgMjAyMyBLZXBsZXIgUHJvZ3JhbSAoMy8zKSAtIEdvb2dsZSBBbmFseXRpY3MnLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6ICdFYXJuZWQgdGhyb3VnaCBwYXNzaW5nIGNlcnRpZmljYXRpb25zIHN1Y2ggYXMgR29vZ2xlIEFuYWx5dGljcyBDZXJ0aWZpY2F0aW9uLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbU1haW50aXRsZTogKGl0ZW0pID0+IGl0ZW0ubWFpbnRpdGxlLFxyXG4gICAgICAgICAgICBpdGVtU3VidGl0bGU6IChpdGVtKSA9PiBpdGVtLnN1YnRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbm9ucHJvZml0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdOb24tcHJvZml0IHByb2plY3RzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGFpd2FuZXNlV2l6YXJkJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRnJlZSBhcHBsaWNhdGlvbiBhbmQgc2VydmljZSwgaGVscGluZyB1c2VycyB0byBxdWlja2x5IGFuZCBlYXNpbHkgZmluZCB0aGUgcHJvbnVuY2lhdGlvbiB0byBjb21tdW5pY2F0ZSBpbiBUYWl3YW5lc2UuIFNpbmNlIDIwMTMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9UYWl3YW5lc2VXaXphcmQvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2E6ICd0d3dfd2Vic2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0x1Y2t5QmFjb24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdPcGVuIHNvdXJjZSByYWZmbGluZyBhcHAsIGhlbHBpbmcgbWFya2V0ZXJzIG9yIHN0dWRlbnRzIHRvIHJhZmZsZSBxdWlja2x5LiBTaW5jZSAyMDE2LicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW8vTHVja3lCYWNvbi8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYTogJ2x1Y2t5YmFjb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dE5hbWU6IChpdGVtKSA9PiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGl0ZW1UZXh0RGVzY3JpcHRpb246IChpdGVtKSA9PiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiBsaW5rLmdhLFxyXG4gICAgICAgICAgICBzZXJ2aWNlU3RhdGU6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSAoaXRlbS5saXZlKSA/ICcnIDogJ1RoZSBzZXJ2aWNlIGhhcyBiZWVuIGRpc2NvbnRpbnVlZC4nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVzcG9ydDoge1xyXG4gICAgICAgIHRpdGxlOiAnR2FtZS9Fc3BvcnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSSB3YXMgYSBDU2VyLCBcIkxlcm5IZXJOXCIgaXMgbXkgbmlja25hbWUgaW4gZ2FtZS4gSSBsaWtlIG1ha2luZyB2aWRlbyBmb3IgdGhlIGUtc3BvcnRzIHByb21vdGlvbiwgbW9zdCBvZiBteSB2aWRlb3MgYXJlIG5vbi1wcm9maXQsIGhvcGUgeW91IGVuam95IHRoZW0uJyxcclxuICAgICAgICBwcm9tb3Rpb246ICdGZWF0dXJlZCB2aWRlbzogJyxcclxuICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdSZW1lbWJyYW5jZSBvZiBDb3VudGVyLVN0cmlrZSAxLjYnLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW5yVU1aWmloZUxVJywgZ2E6ICdjc19tb3ZpZV8xJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICcxIFllYXIgb2YgXCJTSy5EZWxwYW5cIicsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Z205M3lHUHZNQU0nLCBnYTogJ2NzX21vdmllXzInIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdDb250YWN0JyxcclxuICAgIH0sXHJcbiAgICBzb2NpYWw6IHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dpdEh1YicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYmFjb25iYW8nLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZ2l0aHViJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dvb2dsZSBTY2hvbGFyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL2NpdGF0aW9ucz91c2VyPU9LZEh4MllBQUFBSicsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19nc2Nob2xhcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9