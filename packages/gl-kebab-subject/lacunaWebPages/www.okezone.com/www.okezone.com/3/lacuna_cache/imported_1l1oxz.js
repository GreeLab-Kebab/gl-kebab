! function(i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
  "use strict";
  var e = window.Slick || {};
  (e = function() {
    var e = 0;
    return null
  }()).prototype.activateADA = null, e.prototype.addSlide = e.prototype.slickAdd = null, e.prototype.animateHeight = null, e.prototype.animateSlide = null, e.prototype.getNavTarget = null, e.prototype.asNavFor = null, e.prototype.applyTransition = null, e.prototype.autoPlay = null, e.prototype.autoPlayClear = null, e.prototype.autoPlayIterator = null, e.prototype.buildArrows = null, e.prototype.buildDots = null, e.prototype.buildOut = null, e.prototype.buildRows = null, e.prototype.checkResponsive = null, e.prototype.changeSlide = null, e.prototype.checkNavigable = null, e.prototype.cleanUpEvents = null, e.prototype.cleanUpSlideEvents = null, e.prototype.cleanUpRows = null, e.prototype.clickHandler = null, e.prototype.destroy = null, e.prototype.disableTransition = null, e.prototype.fadeSlide = null, e.prototype.fadeSlideOut = null, e.prototype.filterSlides = e.prototype.slickFilter = null, e.prototype.focusHandler = null, e.prototype.getCurrent = e.prototype.slickCurrentSlide = null, e.prototype.getDotCount = null, e.prototype.getLeft = null, e.prototype.getOption = e.prototype.slickGetOption = null, e.prototype.getNavigableIndexes = null, e.prototype.getSlick = null, e.prototype.getSlideCount = null, e.prototype.goTo = e.prototype.slickGoTo = null, e.prototype.init = null, e.prototype.initADA = null, e.prototype.initArrowEvents = null, e.prototype.initDotEvents = null, e.prototype.initSlideEvents = null, e.prototype.initializeEvents = null, e.prototype.initUI = null, e.prototype.keyHandler = null, e.prototype.lazyLoad = null, e.prototype.loadSlider = null, e.prototype.next = e.prototype.slickNext = null, e.prototype.orientationChange = null, e.prototype.pause = e.prototype.slickPause = null, e.prototype.play = e.prototype.slickPlay = null, e.prototype.postSlide = null, e.prototype.prev = e.prototype.slickPrev = null, e.prototype.preventDefault = null, e.prototype.progressiveLazyLoad = null, e.prototype.refresh = null, e.prototype.registerBreakpoints = null, e.prototype.reinit = null, e.prototype.resize = null, e.prototype.removeSlide = e.prototype.slickRemove = null, e.prototype.setCSS = null, e.prototype.setDimensions = null, e.prototype.setFade = null, e.prototype.setHeight = null, e.prototype.setOption = e.prototype.slickSetOption = null, e.prototype.setPosition = null, e.prototype.setProps = null, e.prototype.setSlideClasses = null, e.prototype.setupInfinite = null, e.prototype.interrupt = null, e.prototype.selectHandler = null, e.prototype.slideHandler = null, e.prototype.startLoad = null, e.prototype.swipeDirection = null, e.prototype.swipeEnd = null, e.prototype.swipeHandler = null, e.prototype.swipeMove = null, e.prototype.swipeStart = null, e.prototype.unfilterSlides = e.prototype.slickUnfilter = null, e.prototype.unload = null, e.prototype.unslick = null, e.prototype.updateArrows = null, e.prototype.updateDots = null, e.prototype.visibility = null, i.fn.slick = function() {
    var i, t, o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++)
      if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o
  }
});