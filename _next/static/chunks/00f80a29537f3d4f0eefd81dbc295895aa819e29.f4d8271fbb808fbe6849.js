(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],f=r[l]||new Set;f.has(s)?o=!1:(f.add(s),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}y.rewind=function(){};var g=y;t.default=g},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FowU:function(e,t,n){"use strict";var r={};function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(r),n.d(r,"addTrackers",(function(){return X})),n.d(r,"initialize",(function(){return Q})),n.d(r,"ga",(function(){return ee})),n.d(r,"set",(function(){return te})),n.d(r,"send",(function(){return ne})),n.d(r,"pageview",(function(){return re})),n.d(r,"modalview",(function(){return ae})),n.d(r,"timing",(function(){return oe})),n.d(r,"event",(function(){return ie})),n.d(r,"exception",(function(){return ce})),n.d(r,"plugin",(function(){return ue})),n.d(r,"outboundLink",(function(){return le})),n.d(r,"testModeAPI",(function(){return se})),n.d(r,"default",(function(){return fe}));var o=n("q1tI"),i=n.n(o),c=n("8Kt/"),u=n.n(c),l=n("YFqc"),s=n.n(l),f=n("17x9"),p=n.n(f);function d(e){console.warn("[react-ga]",e)}function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var a=j(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A="_blank",P=1,x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,e);var t,n,r,a=w(o);function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return S(k(e=a.call.apply(a,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,a=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:a},s=r!==A,f=!(t.ctrlKey||t.shiftKey||t.metaKey||t.button===P);s&&f?(t.preventDefault(),o.trackLink(l,(function(){window.location.href=i}),u)):o.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=o,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=m(m({},b(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===A&&(r.rel="noopener noreferrer"),delete r.eventLabel,delete r.trackerNames,i.a.createElement("a",r)}}])&&v(t.prototype,n),r&&v(t,r),o}(o.Component);S(x,"trackLink",(function(){d("ga tracking not enabled")})),x.propTypes={eventLabel:p.a.string.isRequired,target:p.a.string,to:p.a.string,onClick:p.a.func,trackerNames:p.a.arrayOf(p.a.string)},x.defaultProps={target:null,to:null,onClick:null,trackerNames:null};var C="REDACTED (Potential Email Address)";function E(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var T=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e||"";return t&&(r=E(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(T)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))),n&&(r=function(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(d("This arg looks like an email address, redacting."),C):e;var t}(r)),r}var N=function(e){var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,a,o,i,c,u,l=e&&e.onerror;n=window,r=document,a="script",o=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(a),u=r.getElementsByTagName(a)[0],c.async=1,c.src=o,c.onerror=l,u.parentNode.insertBefore(c,u)};function _(e){console.info("[react-ga]",e)}var I=[],D={calls:I,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];I.push([].concat(t))},resetCalls:function(){I.length=0}};function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K="undefined"===typeof window||"undefined"===typeof document,F=!1,G=!0,U=!1,z=!0,W=!0,$=function(){var e;return U?D.ga.apply(D,arguments):!K&&(window.ga?(e=window).ga.apply(e,arguments):d("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function Y(e){return M(e,G,W)}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0];if("function"===typeof $){if("string"!==typeof a)return void d("ga command must be a string");!z&&Array.isArray(e)||$.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){$.apply(void 0,J(["".concat(e,".").concat(a)].concat(n.slice(1))))}))}}function V(e,t){e?t&&(t.debug&&!0===t.debug&&(F=!0),!1===t.titleCase&&(G=!1),!1===t.redactEmail&&(W=!1),t.useExistingGa)||(t&&t.gaOptions?$("create",e,t.gaOptions):$("create",e,"auto")):d("gaTrackingID is required in initialize()")}function X(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===H(e)?V(e.trackingId,e):d("All configs must be an object")})):V(e,t),!0}function Q(e,t){if(t&&!0===t.testMode)U=!0;else{if(K)return;t&&!0===t.standardImplementation||N(t)}z=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,X(e,t)}function ee(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&($.apply(void 0,t),F&&(_("called ga('arguments');"),_("with arguments: ".concat(JSON.stringify(t))))),window.ga}function te(e,t){e?"object"===H(e)?(0===Object.keys(e).length&&d("empty `fieldsObject` given to .set()"),Z(t,"set",e),F&&(_("called ga('set', fieldsObject);"),_("with fieldsObject: ".concat(JSON.stringify(e))))):d("Expected `fieldsObject` arg to be an Object"):d("`fieldsObject` is required in .set()")}function ne(e,t){Z(t,"send",e),F&&(_("called ga('send', fieldObject);"),_("with fieldObject: ".concat(JSON.stringify(e))),_("with trackers: ".concat(JSON.stringify(t))))}function re(e,t,n){if(e){var r=E(e);if(""!==r){var a={};if(n&&(a.title=n),Z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},a)),F){_("called ga('send', 'pageview', path);");var o="";n&&(o=" and title: ".concat(n)),_("with path: ".concat(r).concat(o))}}else d("path cannot be an empty string in .pageview()")}else d("path is required in .pageview()")}function ae(e,t){if(e){var n,r="/"===(n=E(e)).substring(0,1)?n.substring(1):n;if(""!==r){var a="/modal/".concat(r);Z(t,"send","pageview",a),F&&(_("called ga('send', 'pageview', path);"),_("with path: ".concat(a)))}else d("modalName cannot be an empty string or a single / in .modalview()")}else d("modalName is required in .modalview(modalName)")}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,a=e.label,o=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:Y(t),timingVar:Y(n),timingValue:r};a&&(i.timingLabel=Y(a)),ne(i,o)}else d("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,a=e.value,o=e.nonInteraction,i=e.transport,c=q(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:Y(t),eventAction:Y(n)};r&&(l.eventLabel=Y(r)),"undefined"!==typeof a&&("number"!==typeof a?d("Expected `args.value` arg to be a Number."):l.eventValue=a),"undefined"!==typeof o&&("boolean"!==typeof o?d("`args.nonInteraction` must be a boolean."):l.nonInteraction=o),"undefined"!==typeof i&&("string"!==typeof i?d("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&d("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=c[e]})),ne(l,u)}else d("args.category AND args.action are required in event()")}function ce(e,t){var n=e.description,r=e.fatal,a={hitType:"exception"};n&&(a.exDescription=Y(n)),"undefined"!==typeof r&&("boolean"!==typeof r?d("`args.fatal` must be a boolean."):a.exFatal=r),ne(a,t)}var ue={require:function(e,t,n){if(e){var r=E(e);if(""!==r){var a=n?"".concat(n,".require"):"require";if(t){if("object"!==H(t))return void d("Expected `options` arg to be an Object");0===Object.keys(t).length&&d("Empty `options` given to .require()"),ee(a,r,t),F&&_("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else ee(a,r),F&&_("called ga('require', '".concat(r,"');"))}else d("`name` cannot be an empty string in .require()")}else d("`name` is required in .require()")},execute:function(e,t){for(var n,r,a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];if(1===o.length?n=o[0]:(r=o[0],n=o[1]),"string"!==typeof e)d("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)d("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(ee(c,r,n),F&&(_("called ga('".concat(c,"');")),_('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(ee(c,n),F&&(_("called ga('".concat(c,"');")),_("with payload: ".concat(JSON.stringify(n))))):(ee(c),F&&_("called ga('".concat(c,"');")))}}};function le(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:Y(e.label)},a=!1,o=setTimeout((function(){a=!0,t()}),250);r.hitCallback=function(){clearTimeout(o),a||t()},ne(r,n)}else d("args.label is required in outboundLink()");else d("hitCallback function is required")}var se=D,fe={initialize:Q,ga:ee,set:te,send:ne,pageview:re,modalview:ae,timing:oe,event:ie,exception:ce,plugin:ue,outboundLink:le,testModeAPI:D};function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){ye(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}x.origTrackLink=x.trackLink,x.trackLink=le;var ge=x,me=de(de({},r),{},{OutboundLink:ge}),be={basePath:"",mainRemoteHost:"https://baconbao.github.io"},ve=i.a.createElement,he={target:"_blank",rel:"noreferrer noopener"},we=function(){return window.location.hostname.indexOf("baconbao")>=0},Oe=function(e,t){switch(e){case"link":we()&&me.event({category:"link",action:t})}},ke=function(e){var t=e.data;return ve("div",null,ve("h2",null,t.title),ve("ul",null,"items"in t&&t.items.map((function(e,n){return ve("li",{key:n},t.formatter.itemText(e))}))))},je=function(e){var t=e.data;return ve("div",null,ve("h2",null,t.title),ve("ul",null,"items"in t&&t.items.map((function(e,n){return ve("li",{key:n},t.formatter.itemText(e))}))))},Se=function(e){var t=e.data,n=e.symbol;return ve("div",null,ve("h2",null,t.title),ve("ul",null,"items"in t&&t.items.map((function(e,r){return ve("li",{key:r},t.formatter.itemText(e)," ","links"in e&&e.links.length>0&&ve("span",{className:"item-link"},"links"in e&&e.links.map((function(r,o){return ve("span",{key:o},ve("i",null,r.status&&"".concat(r.status))," ",ve("a",a({href:r.url,onClick:function(){return Oe("link",t.formatter.linkGa(r))}},he),t.formatter.linkText(r)),o<e.links.length-1&&"".concat(n.and))}))))}))))},Ae=function(e){var t=e.data;return ve("div",null,ve("h2",null,t.title),ve("ul",null,"items"in t&&t.items.map((function(e,n){return ve("li",{key:n},t.formatter.itemText(e))}))))},Pe=function(e){var t=e.data,n=e.symbol;return ve("div",null,ve("h2",null,t.title),ve("ul",null,"items"in t&&t.items.map((function(e,r){return ve("li",{key:r},t.formatter.itemText(e)," ","links"in e&&e.links.length>0&&ve("span",{className:"item-link"},"links"in e&&e.links.map((function(r,o){return ve("span",{key:o},ve("a",a({href:r.url,onClick:function(){return Oe("link",t.formatter.linkGa(r))}},he),t.formatter.linkText(r)),o<e.links.length-1&&"".concat(n.and))}))))}))))},xe=function(e){var t=e.data;return ve("div",null,ve("h2",null,t.title),ve("ul",null,"items"in t&&t.items.map((function(e,n){var r=e.links.length>0?e.links[0]:{};return ve("li",{key:n},Object.keys(r).length>0?ve("a",a({href:r.url,onClick:function(){return Oe("link",t.formatter.linkGa(r))}},he),t.formatter.itemTextName(e)):ve("span",null,t.formatter.itemTextName(e))," - ",t.formatter.itemTextDescription(e))}))))},Ce=function(e){var t=e.data,n=e.symbol;return ve("div",null,ve("h2",null,t.title),ve("div",{className:"normalBlock"},t.description),ve("div",{style:{paddingTop:5}},t.promotion,"links"in t&&t.links.map((function(e,r){return ve("span",{key:r},ve("a",a({href:e.url,onClick:function(){return Oe("link",t.formatter.linkGa(e))}},he),t.formatter.linkText(e)),r<t.links.length-1&&"".concat(n.and))}))))},Ee=function(e){var t=e.data;return ve("div",null,ve("h2",null,t.title),ve("div",{id:"em",style:{whiteSpace:"nowrap"}},ve("span",{onClick:function(){return Oe("link","contact_email")},role:"presentation"},ve("span",{id:"em1"}),ve("span",{id:"em2"}),ve("span",{id:"em3"}))))},Te=function(e){var t=e.data,n=e.symbol;return ve("div",{id:"follow"},t.text,"links"in t&&t.links.map((function(e,r){return ve("span",{key:r},ve("a",a({href:e.url,onClick:function(){return Oe("link",t.formatter.linkGa(e))}},he),t.formatter.linkText(e)),r<t.links.length-1&&"".concat(n.and))})))},Me=function(e){var t=e.lang,n=be.basePath,r=""===n?"/":"/".concat(n,"/"),a=function(e){return t===e?"focus":""};return ve("nav",{id:"languageCard"},ve("div",{className:"switch"},ve("div",{className:"".concat(a("zh-tw")," item")},"zh-tw"===t?ve("span",null,"\u4e2d\u6587"):ve(s.a,{href:"".concat(r)},ve("a",null,"\u4e2d\u6587"))),ve("div",{className:"".concat(a("en-us")," item bordered-left")},"en-us"===t?ve("span",null,"English"):ve(s.a,{href:"".concat(r,"en-us")},ve("a",null,"English")))))},Ne=function(e){var t=e.data;return ve("div",{id:"mainCard"},ve("div",{className:"inner"},ve("h1",{id:"mainTitle"},t.hello," ",ve("span",{id:"name"},t.name," ",ve("small",{id:"akaName"},t.akaName))),ve("br",null),ve("div",{id:"mainIntro"},t.intro)))},_e=function(e){var t=e.Sub;return ve("div",{id:"activityCard"},ve("div",{className:"inner"},ve(t,null)))},Ie=function(e){var t=e.Sub;return ve("div",{id:"footerCard"},ve("div",{className:"inner"},ve(t,null)))},De=function(){return ve("div",{id:"copyright"},ve("span",null,"Copyright \xa9 BaconBao (Geng-Bao Lin)."),ve("span",null,"Web design by BaconBao (Geng-Bao Lin)."))},qe=function(e){var t=e.data,n=be.mainRemoteHost;return ve(u.a,null,ve("title",null,t.pageTitle),ve("meta",{name:"description",content:t.pageDescription}),ve("meta",{content:"initial-scale=1, minimum-scale=1, width=device-width, user-scalable=0",name:"viewport"}),ve("meta",{language:t.lang}),ve("meta",{property:"og:image",content:"".concat(n,"/").concat(t.pageOgImage)}),ve("link",{rel:"alternate",href:n,hrefLang:"x-default"}),ve("link",{rel:"alternate",href:"".concat(n,"/en-us/"),hrefLang:"en"}))};t.a=function(e){we()&&(me.initialize("UA-11047041-24"),me.ga("send","pageview"));var t=e.symbol;return ve("div",null,ve(qe,{data:e}),ve(Me,{lang:e.lang}),ve(Ne,{data:e.main,symbol:t}),ve(_e,{Sub:function(){return ve(i.a.Fragment,null,ve(je,{data:e.exp,symbol:t}),ve(ke,{data:e.edu,symbol:t}),ve(Se,{data:e.invent,symbol:t}),ve(Pe,{data:e.publication,symbol:t}),ve(Ae,{data:e.award,symbol:t}),ve(xe,{data:e.nonprofit,symbol:t}),ve(Ce,{data:e.esport,symbol:t}))}}),ve(Ie,{Sub:function(){return ve(i.a.Fragment,null,ve(Ee,{data:e.contact,symbol:t}),ve("br",null),ve(Te,{data:e.social,symbol:t}),ve("br",null),ve(De,null))}}))}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),c=n("7W2i"),u=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1,d=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,p&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),l=new Map,s=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var y=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],y=(0,u.useRouter)(),g=y&&y.pathname||"/",m=i.default.useMemo((function(){var t=(0,c.resolveHref)(g,e.href);return{href:t,as:e.as?(0,c.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),b=m.href,v=m.as;i.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,c.isLocalURL)(b)&&!f[b+"%"+v])return p(o,(function(){d(y,b,v)}))}),[t,o,b,v,y]);var h=e.children,w=e.replace,O=e.shallow,k=e.scroll;"string"===typeof h&&(h=i.default.createElement("a",null,h));var j=i.Children.only(h),S={ref:function(e){e&&l(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,y,b,v,w,O,k)}};return t&&(S.onMouseEnter=function(e){(0,c.isLocalURL)(b)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(y,b,v,{priority:!0}))}),!e.passHref&&("a"!==j.type||"href"in j.props)||(S.href=(0,c.addBasePath)(v)),i.default.cloneElement(j,S)};t.default=y},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}}]);