(self.webpackChunkkyg_angular_templates=self.webpackChunkkyg_angular_templates||[]).push([[592],{39980:function(t){t.exports=function(){"use strict";function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var e=window.Element.prototype.matches,n=function(t,e){return t.closest(e)},r=function(t,e){return new window.Event(t,e)},s=function(t,e){return new window.CustomEvent(t,e)};!function(){if(window.Element.prototype.matches||(e=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(n=function(t,n){if(!document.documentElement.contains(t))return null;do{if(e.call(t,n))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),window.Event&&"function"==typeof window.Event||(r=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n}),"function"!=typeof window.CustomEvent){var t=window.Event.prototype.preventDefault;s=function(e,n){var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,(n=n||{bubbles:!1,cancelable:!1,detail:null}).bubbles,n.cancelable,n.detail),r.preventDefault=function(){this.cancelable&&(t.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},r}}}();var o="active",i="linear",a="dstepper-block",c="dstepper-none",l="fade",u="transitionend",p=function(t,e,n,r){var i=t.bsStepper;if(!i._steps[e].classList.contains(o)&&!i._stepsContents[e].classList.contains(o)){var c=s("show.bs-stepper",{cancelable:!0,detail:{from:i._currentIndex,to:e,indexStep:e}});t.dispatchEvent(c);var l=i._steps.filter(function(t){return t.classList.contains(o)}),u=i._stepsContents.filter(function(t){return t.classList.contains(o)});c.defaultPrevented||(l.length&&l[0].classList.remove(o),u.length&&(u[0].classList.remove(o),t.classList.contains("vertical")||i.options.animation||u[0].classList.remove(a)),d(t,i._steps[e],i._steps,n),f(t,i._stepsContents[e],i._stepsContents,u,r))}},d=function(t,e,n,r){n.forEach(function(e){var n=e.querySelector(r.selectors.trigger);n.setAttribute("aria-selected","false"),t.classList.contains(i)&&n.setAttribute("disabled","disabled")}),e.classList.add(o);var s=e.querySelector(r.selectors.trigger);s.setAttribute("aria-selected","true"),t.classList.contains(i)&&s.removeAttribute("disabled")},f=function(t,e,n,r,i){var p=t.bsStepper,d=n.indexOf(e),f=s("shown.bs-stepper",{cancelable:!0,detail:{from:p._currentIndex,to:d,indexStep:d}});if(e.classList.contains(l)){e.classList.remove(c);var _=h(e);e.addEventListener(u,function n(){e.classList.add(a),e.removeEventListener(u,n),t.dispatchEvent(f),i()}),r.length&&r[0].classList.add(c),e.classList.add(o),v(e,_)}else e.classList.add(o),e.classList.add(a),t.dispatchEvent(f),i()},h=function(t){if(!t)return 0;var e=window.getComputedStyle(t).transitionDuration;return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},v=function(t,e){var n=!1,s=e+5;function o(){n=!0,t.removeEventListener(u,o)}t.addEventListener(u,o),window.setTimeout(function(){n||t.dispatchEvent(r(u)),t.removeEventListener(u,o)},s)},_={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function e(e,n){var r=this;void 0===n&&(n={}),this._element=e,this._currentIndex=0,this._stepsContents=[],this.options=t({},_,{},n),this.options.selectors=t({},_.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(i),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(t){return t.hasAttribute("data-target")}).forEach(function(t){r._stepsContents.push(r._element.querySelector(t.getAttribute("data-target")))}),this.options.animation&&this._stepsContents.forEach(function(t){t.classList.add(l),t.classList.add(c)}),this._setLinkListeners(),Object.defineProperty(this._element,"bsStepper",{value:this,writable:!0}),this._steps.length&&p(this._element,this._currentIndex,this.options,function(){})}var r=e.prototype;return r._setLinkListeners=function(){var t=this;this._steps.forEach(function(e){var r,s=e.querySelector(t.options.selectors.trigger);t.options.linear?(t._clickStepLinearListener=function(t){t.preventDefault()},s.addEventListener("click",t._clickStepLinearListener)):(t._clickStepNonLinearListener=(r=t.options,function(t){t.preventDefault();var e=n(t.target,r.selectors.steps),s=n(e,r.selectors.stepper),o=s.bsStepper,i=o._steps.indexOf(e);p(s,i,r,function(){o._currentIndex=i})}),s.addEventListener("click",t._clickStepNonLinearListener))})},r.next=function(){var t=this,e=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;p(this._element,e,this.options,function(){t._currentIndex=e})},r.previous=function(){var t=this,e=this._currentIndex-1>=0?this._currentIndex-1:0;p(this._element,e,this.options,function(){t._currentIndex=e})},r.to=function(t){var e=this,n=t-1,r=n>=0&&n<this._steps.length?n:0;p(this._element,r,this.options,function(){e._currentIndex=r})},r.reset=function(){var t=this;p(this._element,0,this.options,function(){t._currentIndex=0})},r.destroy=function(){var t=this;this._steps.forEach(function(e){e.querySelector(t.options.selectors.trigger).removeEventListener("click",t.options.linear?t._clickStepLinearListener:t._clickStepNonLinearListener)}),this._element.bsStepper=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},e}()}()},80795:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},11761:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},64141:function(t,e,n){var r=n(80795);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.default=t.exports,t.exports.__esModule=!0},75725:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},73560:function(t){function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t},t.exports.default=t.exports,t.exports.__esModule=!0},45351:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},12591:function(t){t.exports=function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,s,o=[],i=!0,a=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(c){a=!0,s=c}finally{try{i||null==n.return||n.return()}finally{if(a)throw s}}return o}},t.exports.default=t.exports,t.exports.__esModule=!0},80832:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},87265:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},82539:function(t,e,n){var r=n(11761),s=n(12591),o=n(34466),i=n(80832);t.exports=function(t,e){return r(t)||s(t,e)||o(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},59545:function(t,e,n){var r=n(64141),s=n(45351),o=n(34466),i=n(87265);t.exports=function(t){return r(t)||s(t)||o(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},34466:function(t,e,n){var r=n(80795);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0}}]);