// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
"use strict";
! function() {
  function e(e) {
    for (var t = 0, n = e.length; t < n; t++) {
      var i = e[t].toLowerCase();
      this[i] = new Number(t), this[i].string = i
    }
  }
  var t = {
      index: 0,
      check: function(e) {
        e[$.expando] || (e[$.expando] = ++t.index)
      },
      make: function(e, n) {
        return t.check(e), n.guid + "-" + e[$.expando]
      }
    },
    n = {
      TYPE: new e(["onscreen", "inview"]),
      INVIEW_STATES: new e(["none", "top", "bottom", "left", "right", "both"]),
      registered: [],
      shouldReProcess: !0,
      register: function(e, i, o) {
        var s = r.isLocked(),
          u = $(e);
        n.registered.push({
          id: t.make(e, i),
          data: i,
          $element: u,
          type: o,
          _onscreen: s ? null : a.get(u).uniqueMeasurementId,
          _hasTriggered: !1
        }), n.shouldReProcess = !0
      },
      unregister: function(e, i, r) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[958:1173]", functionData => eval(functionData))},
      process: function() {
        var e, t = n.registered;
        for (n.shouldReProcess = !0; n.shouldReProcess;) {
          if (n.shouldReProcess = !1, 0 == (e = t.length)) return;
          for (var i = 0; i < e; i++) {
            var r = t[i],
              o = a.get(r.$element);
            if (r._onscreen !== undefined && r._hasTriggered) {
              if (!(r._onscreen != o.uniqueMeasurementId)) continue
            }
            switch (r._onscreen = o.uniqueMeasurementId, r._hasTriggered = !0, r.type) {
              case n.TYPE.onscreen:
                n.processOnScreen(r, o);
                break;
              case n.TYPE.inview:
                n.processInView(r, o)
            }
            if (n.shouldReProcess) break
          }
        }
      },
      processOnScreen: function(e, t) {
        e.$element.trigger("onscreen", t)
      },
      processInView: function(e, t) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[2085:3196]", functionData => eval(functionData))}
    },
    i = {
      lastStartEvent: 0,
      timeoutHandle: null,
      intervalDuration: 100,
      hasRaf: !1,
      start: function() {
        i.lastStartEvent = (new Date).getTime(), i.repeat()
      },
      repeat: function() {
        i.stop(), i.hasRaf ? i.timeoutHandle = requestAnimationFrame(i.main) : i.timeoutHandle = setTimeout(i.main, i.intervalDuration)
      },
      hasExpired: function() {
        if (!((new Date).getTime() - i.lastStartEvent < 1500)) return i.stop(), !0
      },
      isThrottled: function() {
        return !((new Date).getTime() - i.lastMain > i.intervalDuration)
      },
      lastMain: (new Date).getTime(),
      main: function() {
        if (i.isThrottled()) return void i.repeat();
        i.lastMain = (new Date).getTime(), i.hasExpired() || (0 == n.registered.length ? (i.stop(), i.intervalDuration = 200, i.repeat()) : (i.stop(), i.intervalDuration = 100, i.repeat()), r.isLocked() || n.process())
      },
      stop: function() {
        null !== i.timeoutHandle && (i.hasRaf ? (cancelAnimationFrame(i.timeoutHandle), i.timeoutHandle = null) : (clearTimeout(i.timeoutHandle), i.timeoutHandle = null))
      }
    };
  $.extend($.event.special, {
    onscreen: {
      noBubble: !0,
      add: function(e) {
        n.register(this, e, n.TYPE.onscreen)
      },
      remove: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[4543:4599]", functionData => eval(functionData))}
    },
    inview: {
      noBubble: !0,
      add: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[4664:4716]", functionData => eval(functionData))},
      remove: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[4744:4798]", functionData => eval(functionData))}
    }
  }), $.extend($.fn, {
    onscreen: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[4854:4923]", functionData => eval(functionData))},
    inview: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[4949:5016]", functionData => eval(functionData))}
  });
  var r = {
      locks: [],
      lock: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[5076:5126]", functionData => eval(functionData))},
      unlock: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[5154:5399]", functionData => eval(functionData))},
      isLocked: function(e) {
        if (!e) return r.locks.length > 0;
        for (var t = 0, n = r.locks.length; t < n; t++) {
          if (r.locks[t] == e) return !0
        }
        return !1
      }
    },
    o = {
      options: {
        allowScrollOver: !0
      },
      config: function(e) {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[5706:5770]", functionData => eval(functionData))}
    };
  $.inview = $.onscreen = function() {lacuna_lazy_load("lacuna_cache/imported_cqomx8.js[5815:5834]", functionData => eval(functionData))}, $.extend($.inview, r, o);
  var s = {
      $el: $(window),
      height: null,
      width: null,
      heightRatio: null,
      widthRatio: null,
      resize: function() {
        s.height = window.innerHeight || s.$el.height(), s.width = window.innerWidth || s.$el.width(), s.heightRatio = 100 / s.height, s.widthRatio = 100 / s.width, i.start()
      }
    },
    a = {
      featureDetect: function() {
        i.hasRaf = window.requestAnimationFrame && window.cancelAnimationFrame
      },
      get: function(e) {
        if (0 != e.length) {
          var t, n = e[0];
          try {
            t = n.getBoundingClientRect()
          } catch (e) {
            t = {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 0,
              height: 0
            }
          }
          var i = t.height,
            r = t.width,
            o = t.top,
            u = t.left,
            c = s.height - (o + i),
            l = s.width - (u + r),
            h = Math.round(s.heightRatio * o),
            d = Math.round(s.widthRatio * u),
            f = Math.round(s.heightRatio * c),
            g = Math.round(s.widthRatio * l),
            m = null;
          m = u + r > 0 && l < 0 && u < 0 ? r : u < 0 ? r + u : u + r > s.width ? s.width - u : r;
          var v = null;
          v = o + i > 0 && c < 0 && o < 0 ? i : o < 0 ? i + o : o + i > s.height ? s.height - o : i, v < 0 && (v = 0), m < 0 && (m = 0);
          var p = Math.round(100 / i * v),
            w = Math.round(100 / r * m),
            T = i * r,
            E = v * m,
            S = Math.round(100 / T * E),
            I = !0;
          (g > 100 || d > 100 || f > 100 || h > 100) && (I = !1);
          i <= 0 && r <= 0 && (I = !1);
          var k = a.isElementHidden(n);
          if (k && (I = !1), I)
            for (var $ = a.getParents(n), b = 0, P = $.length - 1; b < P; b++) {
              var R = $[b];
              if (k = a.isElementHidden(R)) {
                I = !1;
                break
              }
              var _ = a.isOutOfBounds(n, R);
              if (_) {
                I = !1;
                break
              }
            }
          return {
            top: o,
            left: u,
            bottom: c,
            right: l,
            percentFromTop: h,
            percentFromLeft: d,
            percentFromBottom: f,
            percentFromRight: g,
            percentInview: S,
            percentInviewHorizontal: w,
            percentInviewVertical: p,
            onscreen: I,
            uniqueMeasurementId: "" + o + u + c + l + i + r + s.height + s.width + I,
            timestamp: (new Date).getTime()
          }
        }
      },
      getParents: function(e) {
        for (var t, n = []; t = e.parentElement;) n.push(t), e = t;
        return n
      },
      isElementHidden: function(e) {
        var t = "none" == e.style.display || "hidden" == e.style.visibility;
        if (t) return !0;
        var n = window.getComputedStyle(e, null);
        return t = "none" == n.display || "hidden" == n.visibility
      },
      isOutOfBounds: function(e, t) {
        var n = t.clientWidth < t.scrollWidth,
          i = t.clientHeight < t.scrollHeight,
          r = n || i,
          o = $(t);
        if (!r || "visible" === o.css("overflow")) return !1;
        var s = $(e),
          a = s.offset(),
          u = o.offset(),
          c = a.top - u.top,
          l = a.left - u.left,
          h = c + e.clientHeight,
          d = l + e.clientWidth;
        return c >= t.clientHeight || l >= t.clientWidth || h <= 0 || d <= 0
      }
    };
  $(window).on({
    "touchmove scroll mousedown keydown": i.start,
    resize: s.resize
  }), $(a.featureDetect), s.resize()
}();