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
    intro: 'I enjoy wandering in the ocean of knowledge, and love to explore IT application and IT-related consumer behavior, currently as a PhD student at National Taiwan University, main research interest is IT-related empirical aesthetics.',
    // intro: 'I love to explore IT application and IT-related consumer behavior, currently as a PhD student at National Taiwan University. I enjoy wandering in the ocean of knowledge, sometimes rolling, acting cute, and slapping belly in this ocean. (●\'◡\'●)',
    introEmoji: '(●\'◡\'●)'
  },
  researchInterest: {
    title: 'Research interests',
    items: [{
      text: 'IT-related Empirical Aesthetics'
    }, {
      text: 'IT-related Consumer Behavior and Perception'
    }, {
      text: 'Web Application'
    }],
    describe: 'Although I have some experiences in IT development, I am more interested in understanding IT consumers’ subjective feelings and thoughts when they interact with IT, such as feelings and thoughts about aesthetics. Therefore, I am passionate about exploring the reasons (the ‘why’) and causal relationships (the ‘how’) of phenomena related to the behavior and perception of IT consumers.',
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
        status: patentStatus.granted
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
      "with": [],
      showWithNote: false
    }, {
      name: 'The Best Paper of Master Thesis Presentation',
      originalInfo: '(Chinese: 碩士論文計畫發表會最佳論文獎)',
      years: ['2016'],
      by: 'Department of information management at National Central University',
      labels: ['Research'],
      "with": [],
      showWithNote: false
    }, {
      name: 'First place of Qianlima Taohuayuan entrepreneurial competition Ecommerce Group',
      originalInfo: '(Chinese: 桃園縣千里馬尋桃花源創業競賽電子商務組冠軍)',
      years: ['2015'],
      by: 'National Central University',
      labels: ['Business', 'Marketing'],
      role: 'team leader',
      "with": ['鍾佳琳', '黃冠菱', '陳毅寰', '陳亭安'],
      showWithNote: true
    }, {
      name: 'Second place of Google AdWords Challenge',
      originalInfo: false,
      years: ['2013'],
      by: 'Google Inc.',
      labels: ['Marketing'],
      role: 'team leader',
      "with": ['曹志龍', '黃梃展'],
      showWithNote: true
    }, {
      name: 'First place of NPIC Annual Researching Results Competition Web Group',
      originalInfo: '(Chinese: 資訊學群專題成果競賽網路應用組冠軍)',
      years: ['2013'],
      by: 'National Pingtung Institute of Commerce',
      labels: ['Technology', 'Business'],
      role: 'team leader',
      "with": ['曹志龍', '黃梃展'],
      showWithNote: true
    }, {
      name: 'First place of Class Webpage Development Competition',
      originalInfo: '(Chinese: 班級網頁製作比賽冠軍)',
      years: ['2005', '2007'],
      by: 'The Ming Cheng JHS of Pingtung County',
      labels: ['Technology'],
      role: 'team leader',
      "with": ['my classmates'],
      showWithNote: false
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
        if (item["with"].length > 0) str = "Serve as ".concat(item.role, " and work together with ").concat(item["with"].join(symbol.and), ".").concat(item.showWithNote ? '*' : '');
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
      puretext: 'Geng-Bao Lin, Fiona Fui-Hoon Nah, Choon Ling Sia. (2024). Effects of mindfulness and emotion regulation on aesthetics: A theoretical model from hedonic perspective of processing fluency. In Proceedings of the 57th Hawaii International Conference on System Sciences (pp. 4683-4692). Hawaii International Conference on System Sciences (HICSS).',
      note: 'ISBN:10.6160/SYSMR.202009_28(3).0001',
      links: [{
        name: 'LINK',
        url: 'https://hdl.handle.net/10125/106947',
        ga: 'paper_2024-1'
      }]
    }, {
      puretext: 'Chen-Hao Liu, Yun-Chia Tang, Geng-Bao Lin, Yi-Ching Hsieh. (2020). In mobile search, the more you see, the more you love? How consumer knowledge and screen sizes affect branding effect. Sun Yat-Sen Management Review.',
      note: 'doi:10.6160/SYSMR.202009_28(3).0001',
      links: [{
        name: 'LINK',
        url: 'http://mgtr.cm.nsysu.edu.tw/fulljournal_process.php?id=148&pno=M5f6998fdb6ae0&p=379',
        ga: 'paper_2020-1'
      }]
    }, {
      puretext: 'Geng-Bao Lin. (2016). The Effect of Repetition of Keyword Advertising on Brand Recognition and Attitude with Persuasion Knowledge Model and Screen Size. National Central University. Master Thesis.',
      note: '',
      links: [{
        name: 'LINK',
        url: 'https://hdl.handle.net/11296/x26pvn',
        ga: 'master_thesis'
      }]
    }],
    formatter: {
      itemText: function itemText(item) {
        return "".concat(item.puretext);
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
    description: 'I was a CSer, "LernHerN" is my nickname. I have made some non-profit videos for the esport promotion in an era when esport was not yet popular. Hope you enjoy them.',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9lbi11cy5qcyJdLCJuYW1lcyI6WyJzeW1ib2wiLCJhbmQiLCJwYXRlbnRTdGF0dXMiLCJncmFudGVkIiwicGF0ZW50U2VsZiIsIm5hbWUiLCJzZWxmIiwiZGF0YSIsImxhbmciLCJwYWdlVGl0bGUiLCJwYWdlRGVzY3JpcHRpb24iLCJwYWdlT2dJbWFnZSIsIm1haW4iLCJoZWxsbyIsImFrYU5hbWUiLCJpbnRybyIsImludHJvRW1vamkiLCJyZXNlYXJjaEludGVyZXN0IiwidGl0bGUiLCJpdGVtcyIsInRleHQiLCJkZXNjcmliZSIsImZvcm1hdHRlciIsIml0ZW1UZXh0IiwiaXRlbSIsIm1vcmVEZXNjcmliZSIsImVkdSIsImRlZ3JlZSIsInNjaG9vbCIsImRlcHQiLCJleHAiLCJmcm9tVGltZSIsInRvVGltZSIsImNvbSIsInBvcyIsImludmVudCIsInllYXIiLCJpbnZlbnRvcnMiLCJhcHBsaWNhbnQiLCJsaW5rcyIsInVybCIsInN0YXR1cyIsIm1hcCIsImkiLCJqb2luIiwibGlua1RleHQiLCJsaW5rIiwiZ2VuZXJhdGVBYnN0cmFjdCIsImxpbmtHYSIsInJtU3BhY2UiLCJ0Iiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImF3YXJkIiwib3JpZ2luYWxJbmZvIiwieWVhcnMiLCJieSIsImxhYmVscyIsInNob3dXaXRoTm90ZSIsInJvbGUiLCJnZXRJdGVtTGFiZWxzIiwid2l0aE1lbWJlcnMiLCJzdHIiLCJsZW5ndGgiLCJub3RlcyIsInB1YmxpY2F0aW9uIiwicHVyZXRleHQiLCJub3RlIiwiZ2EiLCJpdGVtTm90ZSIsImNlcnRpZmljYXRpb24iLCJtYWludGl0bGUiLCJzdWJ0aXRsZSIsIml0ZW1NYWludGl0bGUiLCJpdGVtU3VidGl0bGUiLCJub25wcm9maXQiLCJkZXNjcmlwdGlvbiIsImxpdmUiLCJpdGVtVGV4dE5hbWUiLCJpdGVtVGV4dERlc2NyaXB0aW9uIiwic2VydmljZVN0YXRlIiwicmVzIiwiZXNw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SUo1QyxTQUFLLEVBQUUsQ0FDSDtBQUFFbkIsVUFBSSxFQUFFLG1DQUFSO0FBQTZDb0IsU0FBRyxFQUFFLDZDQUFsRDtBQUFpRzRCLFFBQUUsRUFBRTtBQUFyRyxLQURHLEVBRUg7QUFBRWhELFVBQUksRUFBRSx1QkFBUjtBQUFpQ29CLFNBQUcsRUFBRSw2Q0FBdEM7QUFBcUY0QixRQUFFLEVBQUU7QUFBekYsS0FGRyxDQUpIO0FBUUo5QyxhQUFTLEVBQUU7QUFDUHVCLGNBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQzFCLElBQWY7QUFBQSxPQURIO0FBRVA0QixZQUFNLEVBQUUsZ0JBQUNGLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNzQixFQUFmO0FBQUE7QUFGRDtBQVJQLEdBN1lDO0FBMFpUZ0IsU0FBTyxFQUFFO0FBQ0xsRSxTQUFLLEVBQUU7QUFERixHQTFaQTtBQTZaVG1FLFFBQU0sRUFBRTtBQUNKbkUsU0FBSyxFQUFFLEVBREg7QUFFSkUsUUFBSSxFQUFFLEVBRkY7QUFHSm1CLFNBQUssRUFBRSxDQUNIO0FBQ0luQixVQUFJLEVBQUUsUUFEVjtBQUVJb0IsU0FBRyxFQUFFLDZCQUZUO0FBR0k0QixRQUFFLEVBQUU7QUFIUixLQURHLEVBTUg7QUFDSWhELFVBQUksRUFBRSxnQkFEVjtBQUVJb0IsU0FBRyxFQUFFLHdEQUZUO0FBR0k0QixRQUFFLEVBQUU7QUFIUixLQU5HLENBSEg7QUFlSjlDLGFBQVMsRUFBRTtBQUNQdUIsY0FBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDMUIsSUFBZjtBQUFBLE9BREg7QUFFUDRCLFlBQU0sRUFBRSxnQkFBQ0YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3NCLEVBQWY7QUFBQTtBQUZEO0FBZlA7QUE3WkMsQ0FBYjtBQW1iZTdELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLXVzLjM5YzcyYzg0NjQxM2NiZTY2MWFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBEYXRhIEVOLVVTXHJcbiAqXHJcbiAqIEBhdXRob3IgQmFjb25CYW9cclxuICogQGxpbmsgaHR0cHM6Ly9iYWNvbmJhby5naXRodWIuaW9cclxuICovXHJcblxyXG5jb25zdCBzeW1ib2wgPSB7XHJcbiAgICBhbmQ6ICcsICcsXHJcbn07XHJcbmNvbnN0IHBhdGVudFN0YXR1cyA9IHtcclxuICAgIGdyYW50ZWQ6ICdHcmFudGVkJyxcclxufTtcclxuY29uc3QgcGF0ZW50U2VsZiA9IHtcclxuICAgIG5hbWU6ICdHZW5nLUJhbyBMaW4nLFxyXG4gICAgc2VsZjogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYW5nOiAnZW4tdXMnLFxyXG4gICAgcGFnZVRpdGxlOiAnSSBhbSBCYWNvbkJhbywgSSBsb3ZlIHdhbmRlcmluZyBpbiB0aGUgb2NlYW4gb2Yga25vd2xlZGdlIScsXHJcbiAgICBwYWdlRGVzY3JpcHRpb246ICdIaSwgSSBhbSBCYWNvbkJhbywgSSBsb3ZlIHRvIGV4cGxvcmUgSVQgYXBwbGljYXRpb24gYW5kIElULXJlbGF0ZWQgY29uc3VtZXIgYmVoYXZpb3IhIEkgZW5qb3kgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UuICjil49cXCfil6FcXCfil48pJyxcclxuICAgIHBhZ2VPZ0ltYWdlOiAnaW1hZ2VzL29naW1hZ2VfZW4uanBnJyxcclxuICAgIHN5bWJvbDoge1xyXG4gICAgICAgIGFuZDogJywgJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVsbG86ICdIaSEgSSBhbScsXHJcbiAgICAgICAgbmFtZTogJ0JhY29uQmFvJyxcclxuICAgICAgICBha2FOYW1lOiAnR2VuZy1CYW8gTGluJyxcclxuICAgICAgICBpbnRybzogJ0kgZW5qb3kgd2FuZGVyaW5nIGluIHRoZSBvY2VhbiBvZiBrbm93bGVkZ2UsIGFuZCBsb3ZlIHRvIGV4cGxvcmUgSVQgYXBwbGljYXRpb24gYW5kIElULXJlbGF0ZWQgY29uc3VtZXIgYmVoYXZpb3IsIGN1cnJlbnRseSBhcyBhIFBoRCBzdHVkZW50IGF0IE5hdGlvbmFsIFRhaXdhbiBVbml2ZXJzaXR5LCBtYWluIHJlc2VhcmNoIGludGVyZXN0IGlzIElULXJlbGF0ZWQgZW1waXJpY2FsIGFlc3RoZXRpY3MuJyxcclxuICAgICAgICAvLyBpbnRybzogJ0kgbG92ZSB0byBleHBsb3JlIElUIGFwcGxpY2F0aW9uIGFuZCBJVC1yZWxhdGVkIGNvbnN1bWVyIGJlaGF2aW9yLCBjdXJyZW50bHkgYXMgYSBQaEQgc3R1ZGVudCBhdCBOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eS4gSSBlbmpveSB3YW5kZXJpbmcgaW4gdGhlIG9jZWFuIG9mIGtub3dsZWRnZSwgc29tZXRpbWVzIHJvbGxpbmcsIGFjdGluZyBjdXRlLCBhbmQgc2xhcHBpbmcgYmVsbHkgaW4gdGhpcyBvY2Vhbi4gKOKXj1xcJ+KXoVxcJ+KXjyknLFxyXG4gICAgICAgIGludHJvRW1vamk6ICco4pePXFwn4pehXFwn4pePKScsXHJcbiAgICB9LFxyXG4gICAgcmVzZWFyY2hJbnRlcmVzdDoge1xyXG4gICAgICAgIHRpdGxlOiAnUmVzZWFyY2ggaW50ZXJlc3RzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSVQtcmVsYXRlZCBFbXBpcmljYWwgQWVzdGhldGljcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdJVC1yZWxhdGVkIENvbnN1bWVyIEJlaGF2aW9yIGFuZCBQZXJjZXB0aW9uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlYiBBcHBsaWNhdGlvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZXNjcmliZTogJ0FsdGhvdWdoIEkgaGF2ZSBzb21lIGV4cGVyaWVuY2VzIGluIElUIGRldmVsb3BtZW50LCBJIGFtIG1vcmUgaW50ZXJlc3RlZCBpbiB1bmRlcnN0YW5kaW5nIElUIGNvbnN1bWVyc+KAmSBzdWJqZWN0aXZlIGZlZWxpbmdzIGFuZCB0aG91Z2h0cyB3aGVuIHRoZXkgaW50ZXJhY3Qgd2l0aCBJVCwgc3VjaCBhcyBmZWVsaW5ncyBhbmQgdGhvdWdodHMgYWJvdXQgYWVzdGhldGljcy4gVGhlcmVmb3JlLCBJIGFtIHBhc3Npb25hdGUgYWJvdXQgZXhwbG9yaW5nIHRoZSByZWFzb25zICh0aGUg4oCYd2h54oCZKSBhbmQgY2F1c2FsIHJlbGF0aW9uc2hpcHMgKHRoZSDigJhob3figJkpIG9mIHBoZW5vbWVuYSByZWxhdGVkIHRvIHRoZSBiZWhhdmlvciBhbmQgcGVyY2VwdGlvbiBvZiBJVCBjb25zdW1lcnMuJyxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgaXRlbVRleHQ6IChpdGVtKSA9PiBgJHtpdGVtLnRleHR9YCxcclxuICAgICAgICAgICAgbW9yZURlc2NyaWJlOiAoZGVzY3JpYmUpID0+IGRlc2NyaWJlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWR1OiB7XHJcbiAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZTogJ1BoLkQgc3R1ZGVudCcsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdOYXRpb25hbCBUYWl3YW4gVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnTS5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIENlbnRyYWwgVW5pdmVyc2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlOiAnQi5CLkEuJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ05hdGlvbmFsIFBpbmd0dW5nIEluc3RpdHV0ZSBvZiBDb21tZXJjZScsXHJcbiAgICAgICAgICAgICAgICBkZXB0OiAnRGVwYXJ0bWVudCBvZiBJbmZvcm1hdGlvbiBNYW5hZ2VtZW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uZGVncmVlfSB8ICR7aXRlbS5kZXB0fSwgJHtpdGVtLnNjaG9vbH1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwOiB7XHJcbiAgICAgICAgdGl0bGU6ICdFeHBlcmllbmNlcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE2LzknLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAyMC8xMicsXHJcbiAgICAgICAgICAgICAgICBjb206ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ1ZhbHVlIExhYicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdQcm9qZWN0IGVuZ2luZWVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6ICcyMDE0LzEnLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiAnMjAxNC8yJyxcclxuICAgICAgICAgICAgICAgIGNvbTogJ0UuU1VOIFNlY3VyaXRpZXMnLFxyXG4gICAgICAgICAgICAgICAgZGVwdDogJ0Vjb21tZXJjZSBEZXB0LicsXHJcbiAgICAgICAgICAgICAgICBwb3M6ICdJbnRlcm4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5mcm9tVGltZX0gfiAke2l0ZW0udG9UaW1lfSB8ICR7aXRlbS5jb219LCAke2l0ZW0uZGVwdH0sICR7aXRlbS5wb3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGludmVudDoge1xyXG4gICAgICAgIHRpdGxlOiAnUGF0ZW50cy9JbnZlbnRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2Qgb2YgSWRlbnRpdHkgQXV0aGVudGljYXRpb24gZm9yIFZvaWNlIG92ZXIgSW50ZXJuZXQgUHJvdG9jb2wgQ2FsbCBhbmQgUmVsYXRlZCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcxMTI5MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzExMjkzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMTgzNTY3NScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMTgzNTY3NUEnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAyMDAzMTM5MDEnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDIwMDMxMzkwMUExJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VQIEVQMzcxNjUyNicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9FUDM3MTY1MjZBMScsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgYmxvY2tjaGFpbi1iYXNlZCBtZXRob2QgZm9yIHZlcmlmaWNhdGlvbiBvZiBjYWxsaW5nIGlkZW50aXR5LicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBSZXNvdXJjZSBIZWFsdGggTWFuYWdlbWVudCBNZXRob2QnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTcwNDc4MycsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNzA0NzgzJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2QgZm9yIGRldGVjdGluZyBoZWFsdGh5IG9mIHJlc291cmNlcyBhY3Jvc3MgZG9tYWlucyBhbmQgcHJvdG9jb2xzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGhvZCBhbmQgRGV2aWNlIGZvciBMb2FkaW5nIFdlYiBQYWdlIGJhc2VkIG9uIElmcmFtZScsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjkyMjMyJywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2OTIyMzInLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgcHJlc2VudGluZyBIVFRQL0hUVFBTIG1peGVkIGNvbnRlbnRzIG9uIGEgd2VicGFnZS4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEaXNwbGF5IERldmljZSBhbmQgRGlzcGxheSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5NDczODMnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTQ3MzgzJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBsYXllci1iYXNlZCBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBvZiBBdWRpbyBSZWNvcmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY3MjYzMCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjcyNjMwJywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBtZXRob2Qgb2YgcHJlc3MtdG8tcmVjb3JkIGNhbGxzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1dlYnBhZ2UgQ29udGVudCBTZWxmLVByb3RlY3Rpb24gTWV0aG9kIGFuZCBBc3NvY2lhdGVkIFNlcnZlcicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyBJNjY5NjI0JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTEk2Njk2MjQnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ04gMTExMDc5MTkyJywgdXJsOiAnaHR0cHM6Ly9wYXRlbnRzLmdvb2dsZS5jb20vcGF0ZW50L0NOMTExMDc5MTkyQScsIHN0YXR1czogcGF0ZW50U3RhdHVzLmdyYW50ZWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVUyAyMDIwMDA4OTkwNCcsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9VUzIwMjAwMDg5OTA0QTEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIHdlYnBhZ2Ugc2VsZi1wcm90ZWN0aW9uIG1ldGhvZCBiYXNlZCBvbiBvbmUtdGltZSBwYXNzd29yZHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE1ldGhvZCBmb3IgT2ZmbGluZSBVcGRhdGluZyBBcHBsaWNhdGlvbiBQcm9ncmFtIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY2OTYxNCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjY5NjE0Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDExMDM2MjMyMicsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjExMDM2MjMyMkEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIG1ldGhvZCBmb3IgdXBkYXRpbmcgYXBwbGljYXRpb25zIHRocm91Z2ggYW4gZW1iZWRkZWQgYnJvd3NlciBpbiBvZmZsaW5lIGNvbnRleHQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIFdlYiBQYWdlIE1hbmFnZW1lbnQgTWV0aG9kIFRoZXJlb2YnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgMjAxOTI2MDE3JywgdXJsOiAnaHR0cHM6Ly90d3BhdDEudGlwby5nb3YudHcvdHdwYXRjL3R3cGF0a20/ISFGUlVSTDIwMTkyNjAxNycsIHN0YXR1czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBpbnRybzogJ0EgbWV0aG9kIGZvciBkZXRlY3Rpbmcgd2luZG93L3RhYnMgZGVwZW5kZW5jaWVzIG9mIGJyb3dzZXIuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3JzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0ZW50U2VsZixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3Ryb25pYyBEZXZpY2UgYW5kIE9mZmxpbmUgT3BlcmF0aW9uIG9mIFdlYiBBcHBsaWNhdGlvbiBQcm9ncmFtIEludGVyZmFjZSBNZXRob2QgVGhlcmVvZicsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICdBY2VyIEluYy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUVyAyMDE5MTc1NjgnLCB1cmw6ICdodHRwczovL3R3cGF0MS50aXBvLmdvdi50dy90d3BhdGMvdHdwYXRrbT8hIUZSVVJMMjAxOTE3NTY4Jywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBXZWIgQVBJcyBpbiBvZmZsaW5lIGNvbnRleHRzLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGVudFNlbGYsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cm9uaWMgRGV2aWNlIGFuZCBDb250cm9sIE1ldGhvZCBUaGVyZW9mIGJhc2VkIG9uIERyYWctYW5kLURyb3AgT3BlcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RXIDIwMTkwNTY3MCcsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkwyMDE5MDU2NzAnLCBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaW50cm86ICdBIGJyb3dzZXItYmFzZWQgZGlhbGluZyBtZXRob2QgdXNpbmcgZHJhZyBhbmQgZHJvcC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRlbnRTZWxmLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbGVjdHJvbmljIERldmljZSBhbmQgT3BlcmF0aW9uIE1ldGhvZCBUaGVyZW9mIGFuZCBTZXJ2ZXIgSG9zdCBEZXZpY2UnLFxyXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAnQWNlciBJbmMuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVFcgSTY0MTk2OScsIHVybDogJ2h0dHBzOi8vdHdwYXQxLnRpcG8uZ292LnR3L3R3cGF0Yy90d3BhdGttPyEhRlJVUkxJNjQxOTY5Jywgc3RhdHVzOiBwYXRlbnRTdGF0dXMuZ3JhbnRlZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NOIDEwOTQyODkyNScsIHVybDogJ2h0dHBzOi8vcGF0ZW50cy5nb29nbGUuY29tL3BhdGVudC9DTjEwOTQyODkyNUEnLCBzdGF0dXM6IHBhdGVudFN0YXR1cy5ncmFudGVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVVMgMjAxOTAwMDc1MjAnLCB1cmw6ICdodHRwczovL3BhdGVudHMuZ29vZ2xlLmNvbS9wYXRlbnQvVVMyMDE5MDAwNzUyMEExJywgc3RhdHVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGludHJvOiAnQSBmbGV4aWJsZSB3ZWItYmFzZWQgdm9pY2Ugc29sdXRpb24gaW4gYm90aCBvbmxpbmUgYW5kIG9mZmxpbmUgY29udGV4dHMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0uaW52ZW50b3JzLm1hcCgoaSkgPT4gaS5uYW1lKS5qb2luKHN5bWJvbC5hbmQpfSwgKCR7aXRlbS55ZWFyfSksIFwiJHtpdGVtLm5hbWV9LFwiIEFwcGxpY2FudCBpcyAke2l0ZW0uYXBwbGljYW50fWAsXHJcbiAgICAgICAgICAgIGxpbmtUZXh0OiAobGluaykgPT4gbGluay50ZXh0LFxyXG4gICAgICAgICAgICBnZW5lcmF0ZUFic3RyYWN0OiAoaXRlbSkgPT4gYCR7aXRlbS5pbnRyb31gLFxyXG4gICAgICAgICAgICBsaW5rR2E6IChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybVNwYWNlID0gKHQpID0+IHQuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBybVNwYWNlKGxpbmsudGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHBhdGVudC0ke3RleHQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXdhcmQ6IHtcclxuICAgICAgICB0aXRsZTogJ0F3YXJkcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0F3YXJkIGZvciBBY2N1bXVsYXRpb24gb2YgSW5kaXZpZHVhbGx5IEFwcGxpZWQgUGF0ZW50cycsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNycsICcyMDE4J10sXHJcbiAgICAgICAgICAgICAgICBieTogJ0FjZXIgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnVGVjaG5vbG9neScsICdSZXNlYXJjaCddLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogW10sXHJcbiAgICAgICAgICAgICAgICBzaG93V2l0aE5vdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIEJlc3QgUGFwZXIgb2YgTWFzdGVyIFRoZXNpcyBQcmVzZW50YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmZvOiAnKENoaW5lc2U6IOeiqeWjq+irluaWh+ioiOeVq+eZvOihqOacg+acgOS9s+irluaWh+eNjiknLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxNiddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdEZXBhcnRtZW50IG9mIGluZm9ybWF0aW9uIG1hbmFnZW1lbnQgYXQgTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5JyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWydSZXNlYXJjaCddLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogW10sXHJcbiAgICAgICAgICAgICAgICBzaG93V2l0aE5vdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgUWlhbmxpbWEgVGFvaHVheXVhbiBlbnRyZXByZW5ldXJpYWwgY29tcGV0aXRpb24gRWNvbW1lcmNlIEdyb3VwJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5mbzogJyhDaGluZXNlOiDmoYPlnJLnuKPljYPph4zppqzlsIvmoYPoirHmupDlibXmpa3nq7bos73pm7vlrZDllYbli5nntYTlhqDou40pJyxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBbJzIwMTUnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnTmF0aW9uYWwgQ2VudHJhbCBVbml2ZXJzaXR5JyxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWydCdXNpbmVzcycsICdNYXJrZXRpbmcnXSxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICd0ZWFtIGxlYWRlcicsXHJcbiAgICAgICAgICAgICAgICB3aXRoOiBbJ+mNvuS9s+eQsycsICfpu4PlhqDoj7EnLCAn6Zmz5q+F5a+wJywgJ+mZs+S6reWuiSddLFxyXG4gICAgICAgICAgICAgICAgc2hvd1dpdGhOb3RlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2Vjb25kIHBsYWNlIG9mIEdvb2dsZSBBZFdvcmRzIENoYWxsZW5nZScsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgeWVhcnM6IFsnMjAxMyddLFxyXG4gICAgICAgICAgICAgICAgYnk6ICdHb29nbGUgSW5jLicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnTWFya2V0aW5nJ10sXHJcbiAgICAgICAgICAgICAgICByb2xlOiAndGVhbSBsZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgd2l0aDogWyfmm7nlv5fpvo0nLCAn6buD5qKD5bGVJ10sXHJcbiAgICAgICAgICAgICAgICBzaG93V2l0aE5vdGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdGaXJzdCBwbGFjZSBvZiBOUElDIEFubnVhbCBSZXNlYXJjaGluZyBSZXN1bHRzIENvbXBldGl0aW9uIFdlYiBHcm91cCcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog6LOH6KiK5a24576k5bCI6aGM5oiQ5p6c56u26LO957ay6Lev5oeJ55So57WE5Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDEzJ10sXHJcbiAgICAgICAgICAgICAgICBieTogJ05hdGlvbmFsIFBpbmd0dW5nIEluc3RpdHV0ZSBvZiBDb21tZXJjZScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnVGVjaG5vbG9neScsICdCdXNpbmVzcyddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ3RlYW0gbGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsn5pu55b+X6b6NJywgJ+m7g+aig+WxlSddLFxyXG4gICAgICAgICAgICAgICAgc2hvd1dpdGhOb3RlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyc3QgcGxhY2Ugb2YgQ2xhc3MgV2VicGFnZSBEZXZlbG9wbWVudCBDb21wZXRpdGlvbicsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZm86ICcoQ2hpbmVzZTog54+t57Sa57ay6aCB6KO95L2c5q+U6LO95Yag6LuNKScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogWycyMDA1JywgJzIwMDcnXSxcclxuICAgICAgICAgICAgICAgIGJ5OiAnVGhlIE1pbmcgQ2hlbmcgSkhTIG9mIFBpbmd0dW5nIENvdW50eScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnVGVjaG5vbG9neSddLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ3RlYW0gbGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIHdpdGg6IFsnbXkgY2xhc3NtYXRlcyddLFxyXG4gICAgICAgICAgICAgICAgc2hvd1dpdGhOb3RlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtVGV4dDogKGl0ZW0pID0+IGAke2l0ZW0ubmFtZX0gJHtpdGVtLm9yaWdpbmFsSW5mbyB8fCAnJ30sICR7aXRlbS5ieX0sICgke2l0ZW0ueWVhcnMuam9pbihzeW1ib2wuYW5kKX0pYCxcclxuICAgICAgICAgICAgZ2V0SXRlbUxhYmVsczogKGl0ZW0pID0+IGl0ZW0ubGFiZWxzLFxyXG4gICAgICAgICAgICB3aXRoTWVtYmVyczogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLndpdGgubGVuZ3RoID4gMCkgc3RyID0gYFNlcnZlIGFzICR7aXRlbS5yb2xlfSBhbmQgd29yayB0b2dldGhlciB3aXRoICR7aXRlbS53aXRoLmpvaW4oc3ltYm9sLmFuZCl9LiR7KGl0ZW0uc2hvd1dpdGhOb3RlKSA/ICcqJyA6ICcnfWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RlczogKCkgPT4gJyogRGVzY2VuZGluZyBzb3J0IGJ5IGxhc3QgbmFtZScsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwdWJsaWNhdGlvbjoge1xyXG4gICAgICAgIHRpdGxlOiAnUHVibGljYXRpb25zJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwdXJldGV4dDogJ0dlbmctQmFvIExpbiwgRmlvbmEgRnVpLUhvb24gTmFoLCBDaG9vbiBMaW5nIFNpYS4gKDIwMjQpLiBFZmZlY3RzIG9mIG1pbmRmdWxuZXNzIGFuZCBlbW90aW9uIHJlZ3VsYXRpb24gb24gYWVzdGhldGljczogQSB0aGVvcmV0aWNhbCBtb2RlbCBmcm9tIGhlZG9uaWMgcGVyc3BlY3RpdmUgb2YgcHJvY2Vzc2luZyBmbHVlbmN5LiBJbiBQcm9jZWVkaW5ncyBvZiB0aGUgNTd0aCBIYXdhaWkgSW50ZXJuYXRpb25hbCBDb25mZXJlbmNlIG9uIFN5c3RlbSBTY2llbmNlcyAocHAuIDQ2ODMtNDY5MikuIEhhd2FpaSBJbnRlcm5hdGlvbmFsIENvbmZlcmVuY2Ugb24gU3lzdGVtIFNjaWVuY2VzIChISUNTUykuJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICdJU0JOOjEwLjYxNjAvU1lTTVIuMjAyMDA5XzI4KDMpLjAwMDEnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8xMDEyNS8xMDY5NDcnLCBnYTogJ3BhcGVyXzIwMjQtMScgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHB1cmV0ZXh0OiAnQ2hlbi1IYW8gTGl1LCBZdW4tQ2hpYSBUYW5nLCBHZW5nLUJhbyBMaW4sIFlpLUNoaW5nIEhzaWVoLiAoMjAyMCkuIEluIG1vYmlsZSBzZWFyY2gsIHRoZSBtb3JlIHlvdSBzZWUsIHRoZSBtb3JlIHlvdSBsb3ZlPyBIb3cgY29uc3VtZXIga25vd2xlZGdlIGFuZCBzY3JlZW4gc2l6ZXMgYWZmZWN0IGJyYW5kaW5nIGVmZmVjdC4gU3VuIFlhdC1TZW4gTWFuYWdlbWVudCBSZXZpZXcuJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICdkb2k6MTAuNjE2MC9TWVNNUi4yMDIwMDlfMjgoMykuMDAwMScsXHJcbiAgICAgICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xJTksnLCB1cmw6ICdodHRwOi8vbWd0ci5jbS5uc3lzdS5lZHUudHcvZnVsbGpvdXJuYWxfcHJvY2Vzcy5waHA/aWQ9MTQ4JnBubz1NNWY2OTk4ZmRiNmFlMCZwPTM3OScsIGdhOiAncGFwZXJfMjAyMC0xJyB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHVyZXRleHQ6ICdHZW5nLUJhbyBMaW4uICgyMDE2KS4gVGhlIEVmZmVjdCBvZiBSZXBldGl0aW9uIG9mIEtleXdvcmQgQWR2ZXJ0aXNpbmcgb24gQnJhbmQgUmVjb2duaXRpb24gYW5kIEF0dGl0dWRlIHdpdGggUGVyc3Vhc2lvbiBLbm93bGVkZ2UgTW9kZWwgYW5kIFNjcmVlbiBTaXplLiBOYXRpb25hbCBDZW50cmFsIFVuaXZlcnNpdHkuIE1hc3RlciBUaGVzaXMuJyxcclxuICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMSU5LJywgdXJsOiAnaHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8xMTI5Ni94MjZwdm4nLCBnYTogJ21hc3Rlcl90aGVzaXMnIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0OiAoaXRlbSkgPT4gYCR7aXRlbS5wdXJldGV4dH1gLFxyXG4gICAgICAgICAgICBpdGVtTm90ZTogKGl0ZW0pID0+IGl0ZW0ubm90ZSxcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLm5hbWUsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6ICdGZWF0dXJlZCBjZXJ0aWZpY2F0aW9ucycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnQ2VydGlmaWNhdGlvbiBvZiBHb29nbGUgVGFpd2Fu4oCZcyAyMDIzIEtlcGxlciBQcm9ncmFtICgxLzMpIC0gR29vZ2xlIEFkcycsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ0Vhcm5lZCB0aHJvdWdoIHBhc3NpbmcgY2VydGlmaWNhdGlvbnMgc3VjaCBhcyBHb29nbGUgQWRzIFNlYXJjaCBDZXJ0aWZpY2F0aW9uIGFuZCBWaWRlbyBDZXJ0aWZpY2F0aW9uLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1haW50aXRsZTogJ0NlcnRpZmljYXRpb24gb2YgR29vZ2xlIFRhaXdhbuKAmXMgMjAyMyBLZXBsZXIgUHJvZ3JhbSAoMi8zKSAtIEdvb2dsZSBDbG91ZCcsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ0Vhcm5lZCB0aHJvdWdoIHByb29mIG9mIHVuZGVyc3RhbmRpbmcgdGhhdCBpbmNsdWRlcyBJbmZyYXN0cnVjdHVyZSwgTmV0d29ya2luZywgU2VjdXJpdHksIERhdGEsIE1MLCBhbmQgQUkgaW4gR29vZ2xlIENsb3VkLCBldGMuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFpbnRpdGxlOiAnQ2VydGlmaWNhdGlvbiBvZiBHb29nbGUgVGFpd2Fu4oCZcyAyMDIzIEtlcGxlciBQcm9ncmFtICgzLzMpIC0gR29vZ2xlIEFuYWx5dGljcycsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ0Vhcm5lZCB0aHJvdWdoIHBhc3NpbmcgY2VydGlmaWNhdGlvbnMgc3VjaCBhcyBHb29nbGUgQW5hbHl0aWNzIENlcnRpZmljYXRpb24uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZvcm1hdHRlcjoge1xyXG4gICAgICAgICAgICBpdGVtTWFpbnRpdGxlOiAoaXRlbSkgPT4gaXRlbS5tYWludGl0bGUsXHJcbiAgICAgICAgICAgIGl0ZW1TdWJ0aXRsZTogKGl0ZW0pID0+IGl0ZW0uc3VidGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBub25wcm9maXQ6IHtcclxuICAgICAgICB0aXRsZTogJ05vbi1wcm9maXQgcHJvamVjdHMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUYWl3YW5lc2VXaXphcmQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGcmVlIGFwcGxpY2F0aW9uIGFuZCBzZXJ2aWNlLCBoZWxwaW5nIHVzZXJzIHRvIHF1aWNrbHkgYW5kIGVhc2lseSBmaW5kIHRoZSBwcm9udW5jaWF0aW9uIHRvIGNvbW11bmljYXRlIGluIFRhaXdhbmVzZS4gU2luY2UgMjAxMy4nLFxyXG4gICAgICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYmFjb25iYW8uZ2l0aHViLmlvL1RhaXdhbmVzZVdpemFyZC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYTogJ3R3d193ZWJzaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTHVja3lCYWNvbicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ09wZW4gc291cmNlIHJhZmZsaW5nIGFwcCwgaGVscGluZyBtYXJrZXRlcnMgb3Igc3R1ZGVudHMgdG8gcmFmZmxlIHF1aWNrbHkuIFNpbmNlIDIwMTYuJyxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2JhY29uYmFvLmdpdGh1Yi5pby9MdWNreUJhY29uLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhOiAnbHVja3liYWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0TmFtZTogKGl0ZW0pID0+IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgaXRlbVRleHREZXNjcmlwdGlvbjogKGl0ZW0pID0+IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgICAgIHNlcnZpY2VTdGF0ZTogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IChpdGVtLmxpdmUpID8gJycgOiAnVGhlIHNlcnZpY2UgaGFzIGJlZW4gZGlzY29udGludWVkLic7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXNwb3J0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdHYW1lL0VzcG9ydCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdJIHdhcyBhIENTZXIsIFwiTGVybkhlck5cIiBpcyBteSBuaWNrbmFtZS4gSSBoYXZlIG1hZGUgc29tZSBub24tcHJvZml0IHZpZGVvcyBmb3IgdGhlIGVzcG9ydCBwcm9tb3Rpb24gaW4gYW4gZXJhIHdoZW4gZXNwb3J0IHdhcyBub3QgeWV0IHBvcHVsYXIuIEhvcGUgeW91IGVuam95IHRoZW0uJyxcclxuICAgICAgICBwcm9tb3Rpb246ICdGZWF0dXJlZCB2aWRlbzogJyxcclxuICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdSZW1lbWJyYW5jZSBvZiBDb3VudGVyLVN0cmlrZSAxLjYnLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW5yVU1aWmloZUxVJywgZ2E6ICdjc19tb3ZpZV8xJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICcxIFllYXIgb2YgXCJTSy5EZWxwYW5cIicsIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Z205M3lHUHZNQU0nLCBnYTogJ2NzX21vdmllXzInIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgICAgdGl0bGU6ICdDb250YWN0JyxcclxuICAgIH0sXHJcbiAgICBzb2NpYWw6IHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dpdEh1YicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYmFjb25iYW8nLFxyXG4gICAgICAgICAgICAgICAgZ2E6ICdmb2xsb3dfZ2l0aHViJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dvb2dsZSBTY2hvbGFyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL2NpdGF0aW9ucz91c2VyPU9LZEh4MllBQUFBSicsXHJcbiAgICAgICAgICAgICAgICBnYTogJ2ZvbGxvd19nc2Nob2xhcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgbGlua1RleHQ6IChsaW5rKSA9PiBsaW5rLnRleHQsXHJcbiAgICAgICAgICAgIGxpbmtHYTogKGxpbmspID0+IGxpbmsuZ2EsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9