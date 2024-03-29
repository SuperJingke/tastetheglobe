/* 

 * FadeShow jQuery Plugin

 * Made by Erik Terwan

 * This plugin is provided as-is and released under the terms of the MIT license.

 */

function shuffleArray(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e}!function(e){e.fn.fadeShow=function(t){function n(){return s.append("<div class='fadeShow-container'></div>"),e.each(o.images,function(t){e(".fadeShow-container",s).append(i(this,t));var n=e("#fadeShow-slide"+t);f.push(n)}),setInterval(a,o.speed),o.correctRatio&&e(window).resize("function"==typeof _&&"undefined"!=typeof _.debounce?_.debounce(function(){var e=c-1;0>e&&(e=f.length-1),r(f[e])},50):function(){var e=c-1;0>e&&(e=f.length-1),r(f[e])}),o.shuffle&&(f=shuffleArray(f)),a(),setTimeout(function(){r(e(".fadeShow-container .active")),setTimeout(function(){r(e(".fadeShow-container .active"))},300)},10),s}function i(e,t){return"<div class='image' id='fadeShow-slide"+t+"' style='background-image: url("+e+");'><img src='"+e+"' alt='' /></div>"}function a(){e.each(f,function(t){c==t?(r(this),e(this).addClass("active").removeClass("inactive")):e(this).removeClass("active").addClass("inactive")}),c++,c>=f.length&&(c=0)}function r(t){var n=parseInt(s.width())/parseInt(s.height()),i=100/parseInt(e("img",t).height());i>n?t.addClass("fillHeight"):t.removeClass("fillHeight")}var o=e.extend({images:null,speed:8e3,startAtSlide:0,correctRatio:!1,shuffle:!1},t),s=this,f=new Array,c=o.startAtSlide;return n()}}(jQuery);


// for album2

function shuffleArray(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e}!function(e){e.fn.fadeShow2=function(t){function n(){return s.append("<div class='fadeShow-container'></div>"),e.each(o.images,function(t){e(".fadeShow-container",s).append(i(this,t));var n=e("#fadeShow-slide"+t);f.push(n)}),setInterval(a,o.speed),o.correctRatio&&e(window).resize("function"==typeof _&&"undefined"!=typeof _.debounce?_.debounce(function(){var e=c-1;0>e&&(e=f.length-1),r(f[e])},50):function(){var e=c-1;0>e&&(e=f.length-1),r(f[e])}),o.shuffle&&(f=shuffleArray(f)),a(),setTimeout(function(){r(e(".fadeShow-container .active")),setTimeout(function(){r(e(".fadeShow-container .active"))},300)},10),s}function i(e,t){return"<div class='image' id='fadeShow-slide"+t+"' style='background-image: url("+e+");'><img src='"+e+"' alt='' /></div>"}function a(){e.each(f,function(t){c==t?(r(this),e(this).addClass("active").removeClass("inactive")):e(this).removeClass("active").addClass("inactive")}),c++,c>=f.length&&(c=0)}function r(t){var n=parseInt(s.width())/parseInt(s.height()),i=100/parseInt(e("img",t).height());i>n?t.addClass("fillHeight"):t.removeClass("fillHeight")}var o=e.extend({images:null,speed:8e3,startAtSlide:0,correctRatio:!1,shuffle:!1},t),s=this,f=new Array,c=o.startAtSlide;return n()}}(jQuery);