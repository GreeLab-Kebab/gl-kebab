! function(e) {
  function t(n) {
    if (a[n]) return a[n].exports;
    var r = a[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function(c, o) {
    for (var i, p, s = 0, f = []; s < c.length; s++) p = c[s], r[p] && f.push.apply(f, r[p]), r[p] = 0;
    for (i in o)
      if (Object.prototype.hasOwnProperty.call(o, i)) {
        var l = o[i];
        switch (typeof l) {
          case "object":
            e[i] = function(t) {}(l);
            break;
          case "function":
            e[i] = l;
            break;
          default:
            e[i] = e[l]
        }
      } for (n && n(c, o); f.length;) f.shift().call(null, t);
    if (o[0]) return a[0] = 0, t(0)
  };
  var a = {},
    r = {
      0: 0
    };
  t.e = function(e, n) {}, t.m = e, t.c = a, t.p = ""
}(function(e) {
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
      case "function":
        break;
      case "object":
        e[t] = function(t) {}(e[t]);
        break;
      default:
        e[t] = e[e[t]]
    }
  return e
}([]));
webpackJsonp([1, 0], [function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var a = Object.assign || function(e) {},
    r = o(1),
    i = n(r),
    l = o(2),
    u = n(l),
    d = o(17),
    s = n(d),
    c = o(10),
    f = n(c);
  o(19);
  var p = o(3),
    g = window.Zepto,
    m = !1;
  console.log(p);
  var h = function() {
      window.Tracker && (window.Tracker.mPageState = s.default.getHash("from")), window.Tracker && window.Tracker.start(), window.onerror = function(e) {}
    },
    w = function() {},
    v = function() {
      var e = {
        "^zh-(hk|tw)$": {
          open: "\u6253\u958b\u652f\u4ed8\u5bf6",
          download: "\u4e0b\u8f09\u652f\u4ed8\u5bf6"
        },
        "^en-": {
          open: "Open Alipay",
          download: "Download Alipay"
        }
      };
      i.default.log("navigator.language", navigator.language);
      for (var t = 0; t < Object.keys(e).length; t++)
        if (new RegExp(Object.keys(e)[t], "i").test(navigator.language)) {
          var o = e[Object.keys(e)[t]];
          g(".open")[0].innerText = o.open, g(".download")[0].innerText = o.download;
          break
        } document.body.className = x ? "inside" : "outside"
    },
    b = function() {
      return i.default.log("ua", y), i.default.log("scheme", k), v(), (0, f.default)() ? void w() : void i.default.log("flow hang up")
    },
    y = window.navigator.userAgent,
    x = /AlipayClient/.test(y) && !/KoubeiClient/.test(y),
    _ = "com.eg.android.AlipayGphone",
    S = s.default.getScheme(location.href),
    k = S.scheme;
  h(), b()
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(16);
  n(i);
  o(18);
  var l = {},
    u = (Zepto, "true" === r.default.getHash("alidebug"));
  l.log = function() {
    var e;
    u && (e = console).log.apply(e, arguments)
  }, window.debug = l, t.default = l, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {} : function(e) {},
    r = o(1),
    i = n(r),
    l = {};
  l.getHash = function(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
      o = window.location.search.substr(1).match(t);
    return null !== o ? decodeURIComponent(o[2]) : null
  }, l.dateFormat = function(e, t) {}, l.browser = function() {
    var e = navigator.userAgent,
      t = /^CtClient;[^;]+;[^;]+;[^;]+;[^;]+$/.test(e),
      o = /^jym_mobile/.test(e);
    return {
      mobile: !!e.match(/AppleWebKit.*Mobile.*/) || !!e.match(/AppleWebKit/) || t || o,
      ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || t && /iOS/i.test(e),
      android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1
    }
  }(), l.clone = function(e) {}, l.scroll = function(e) {}, l.imgLoader = function(e) {}, l.outUrl = function(e) {}, l.log = function(e, t) {}, l.onJSBridgeReady = function(e) {}, l.isNewVersion = function(e, t) {}, l.loadJS = function(e, t) {}, t.default = l, e.exports = t.default
}, function(e, t, o) {
  ! function(t, o) {
    e.exports = o()
  }(this, function() {
    return function(e) {
      function t(n) {
        if (o[n]) return o[n].exports;
        var a = o[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
      }
      var o = {};
      return t.m = e, t.c = o, t.p = "", t(0)
    }([function(e, t, o) {
      "use strict";

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function a(e, t) {}

      function r(e) {}

      function i(e) {}

      function l(e) {}
      var u = o(1),
        d = n(u),
        s = o(2),
        c = n(s),
        f = {},
        p = "";
      p = d.default.getHash("alidebug") && d.default.getHash("ua") ? d.default.getHash("ua") : window.navigator.userAgent;
      var g = !1,
        m = !1,
        h = "",
        w = p.match(/Android[\s\/]([\d\.]+)/);
      w ? (g = !0, h = w[1]) : p.match(/(iPhone|iPad|iPod)/) && (m = !0, w = p.match(/OS ([\d_\.]+) like Mac OS X/), w && (h = w[1].split("_").join(".")));
      var v = !1,
        b = !1,
        y = !1;
      p.match(/(?:Chrome|CriOS)\/([\d\.]+)/) ? (v = !0, p.match(/Version\/[\d+\.]+\s*Chrome/) && (y = !0)) : p.match(/iPhone|iPad|iPod/) && (p.match(/Safari/) && p.match(/Version\/([\d\.]+)/) ? b = !0 : p.match(/OS ([\d_\.]+) like Mac OS X/) && (y = !0));
      var x = window.document,
        _ = void 0;
      f.gotoPage = function(e, t, o) {}, e.exports = f
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {} : function(e) {},
        n = {};
      n.getHash = function(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
          o = window.location.search.substr(1).match(t);
        return null !== o ? unescape(o[2]) : null
      }, n.dateFormat = function(e, t) {}, n.browser = function() {
        var e = navigator.userAgent;
        return navigator.appVersion, {
          mobile: !!e.match(/AppleWebKit.*Mobile.*/) || !!e.match(/AppleWebKit/),
          ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1
        }
      }(), n.clone = function(e) {}, t.default = n, e.exports = t.default
    }, function(e, t, o) {
      "use strict";

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = o(1),
        r = n(a),
        i = o(3);
      n(i), o(4);
      var l = {};
      l.log = function() {}, window.debug = l, t.default = l, e.exports = t.default
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = {
        pop: function() {},
        popItem: function(e) {}
      };
      t.default = o, e.exports = t.default
    }, function(e, t, o) {
      var n = o(5);
      "string" == typeof n && (n = [
        [e.id, n, ""]
      ]);
      var a, r = {};
      r.transform = a, o(7)(n, r), n.locals && (e.exports = n.locals)
    }, function(e, t, o) {
      t = e.exports = o(6)(void 0), t.push([e.id, "#aliDebugPop{position:fixed;right:0;bottom:0;width:4.5rem;height:7rem}#aliDebugPop #aliDebugPopbox{position:relative;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;border-radius:.1rem;background:rgba(0,0,0,.5);color:#fff}#aliDebugPop #aliDebugPopbox ul{width:100%;height:100%}#aliDebugPop #aliDebugPopbox ul li{line-height:.3rem;border-bottom:1px dotted hsla(0,0%,100%,.6);background:rgba(0,0,0,.5);color:hsla(0,0%,100%,.9);text-align:left;padding:.1rem .05rem;word-break:break-all}#aliDebugPop #aliDebugPopbox ul li:last-child{border-bottom:none}#aliDebugPop .ali-debug-button{position:absolute;z-index:1000;right:0;height:.4rem;line-height:.4rem;width:.8rem;top:-.43rem;color:hsla(0,0%,100%,.8);border-radius:.1rem;background:transparent;border:1px solid rgba(0,0,0,.5);background:rgba(0,0,0,.4);cursor:pointer}#aliDebugPop .ali-debug-button:active{color:hsla(0,0%,100%,.6);background:rgba(0,0,0,.6)}#aliDebugPop #aliDebugPopboxClear{right:.9rem}", ""])
    }, function(e, t) {
      function o(e, t) {}

      function n(e) {}
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {}, t.i = function(e, o) {}, t
      }
    }, function(e, t, o) {
      function n(e, t) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o],
            a = g[n.id];
          if (a) {
            a.refs++;
            for (var r = 0; r < a.parts.length; r++) a.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) a.parts.push(s(n.parts[r], t))
          } else {
            for (var i = [], r = 0; r < n.parts.length; r++) i.push(s(n.parts[r], t));
            g[n.id] = {
              id: n.id,
              refs: 1,
              parts: i
            }
          }
        }
      }

      function a(e, t) {
        for (var o = [], n = {}, a = 0; a < e.length; a++) {
          var r = e[a],
            i = t.base ? r[0] + t.base : r[0],
            l = r[1],
            u = r[2],
            d = r[3],
            s = {
              css: l,
              media: u,
              sourceMap: d
            };
          n[i] ? n[i].parts.push(s) : o.push(n[i] = {
            id: i,
            parts: [s]
          })
        }
        return o
      }

      function r(e, t) {
        var o = w(e.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = y[y.length - 1];
        if ("top" === e.insertAt) n ? n.nextSibling ? o.insertBefore(t, n.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), y.push(t);
        else {
          if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          o.appendChild(t)
        }
      }

      function i(e) {}

      function l(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", d(t, e.attrs), r(e, t), t
      }

      function u(e) {}

      function d(e, t) {
        Object.keys(t).forEach(function(o) {
          e.setAttribute(o, t[o])
        })
      }

      function s(e, t) {
        var o, n, a, r;
        if (t.transform && e.css) {
          if (r = t.transform(e.css), !r) return function() {};
          e.css = r
        }
        if (t.singleton) {
          var d = b++;
          o = v || (v = l(t)), n = c.bind(null, o, d, !1), a = c.bind(null, o, d, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = u(t), n = p.bind(null, o, t), a = function() {}) : (o = l(t), n = f.bind(null, o), a = function() {});
        return n(e),
          function(t) {}
      }

      function c(e, t, o, n) {}

      function f(e, t) {
        var o = t.css,
          n = t.media;
        if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = o;
        else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(o))
        }
      }

      function p(e, t, o) {}
      var g = {},
        m = function(e) {
          var t;
          return function() {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t
          }
        },
        h = m(function() {
          return window && document && document.all && !window.atob
        }),
        w = function(e) {
          var t = {};
          return function(o) {
            return "undefined" == typeof t[o] && (t[o] = e.call(this, o)), t[o]
          }
        }(function(e) {
          return document.querySelector(e)
        }),
        v = null,
        b = 0,
        y = [],
        x = o(8);
      e.exports = function(e, t) {
        t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, "undefined" == typeof t.singleton && (t.singleton = h()), "undefined" == typeof t.insertInto && (t.insertInto = "head"), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var o = a(e, t);
        return n(o, t),
          function(e) {}
      };
      var _ = function() {
        var e = [];
        return function(t, o) {}
      }()
    }, function(e, t) {
      e.exports = function(e) {}
    }])
  })
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = n(r),
    l = window.Zepto,
    u = !1,
    d = function() {};
  t.default = d, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = (n(r), o(4)),
    l = n(i),
    u = o(7),
    d = n(u),
    s = o(6),
    c = n(s),
    f = {
      "skin-h5cashier": l.default,
      zxd: d.default,
      kstq: c.default
    };
  t.default = f, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = (window.Zepto, !1),
    d = function() {};
  t.default = d, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = (window.Zepto, !1),
    d = function() {};
  t.default = d, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = window.Zepto,
    d = navigator.userAgent.toLocaleLowerCase(),
    s = r.default.getHash("cid") || "wap_dc",
    c = "com.eg.android.AlipayGphone",
    f = function() {},
    p = function() {
      return u(".download").on("click", function() {}), !0
    };
  t.default = p, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = (n(r), function() {
      return !0
    });
  t.default = i, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(14),
    r = n(a),
    i = o(8),
    l = n(i),
    u = o(13),
    d = n(u),
    s = o(9),
    c = n(s),
    f = o(11),
    p = n(f),
    g = o(12),
    m = n(g),
    h = o(1),
    w = n(h),
    v = function() {
      var e = (0, r.default)(),
        t = (0, d.default)(),
        o = (0, p.default)(),
        n = (0, l.default)(),
        a = (0, c.default)(),
        i = (0, m.default)();
      return w.default.log("middleware", e, t, o, n, a, i), e && t && o && n && a && i
    };
  t.default = v, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = (n(a), o(1)),
    i = n(r),
    l = window.Zepto,
    u = function() {
      return window.urlParams.nojump && "true" === String(window.urlParams.nojump) ? (i.default.log("noJump", !0), l(".open").remove(), !1) : "publicmessage" !== window.urlParams.comeFrom || (i.default.log("comeFrom publicmessage", !0), !1)
    };
  t.default = u, e.exports = t.default
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = window.Zepto,
    n = function() {
      return window.urlParams.hideOpen && "true" === String(window.urlParams.hideOpen) && o(".open").hide(), !0
    };
  t.default = n, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = navigator.userAgent.toLocaleLowerCase(),
    d = window.Zepto,
    s = function() {
      var e = !0;
      /^.*(windows phone|android|adr|iphone|ipod|ipad|symbianos).*$/.test(u) || (window.location.href = "https://mobile.alipay.com/index.htm?cid=" + window.urlParams.cid, e = !1), /.*(micromessenger|wechat).*$/.test(u) && (e = !1);
      var t = u.indexOf("alipay") > 0,
        o = window.urlParams.minVersion,
        n = o && r.default.isNewVersion(!1, window.urlParams.minVersion),
        a = "lowVersionMessage" === window.urlParams.froms;
      return l.default.log("minVersion", t, o, n, a), (t && o && !n || a) && (d(".open").hide(), d(".download").addClass("update").text("\u66f4\u65b0\u652f\u4ed8\u5b9d"), d("body").attr("class", "outside"), e = !1), /qq|mqqbrowser/.test(u) && (d(".open").hide(), d(".tip").show()), e
    };
  t.default = s, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(2),
    r = n(a),
    i = o(1),
    l = n(i),
    u = o(5),
    d = n(u),
    s = window.Zepto,
    c = {
      isDebug: r.default.getHash("alidebug"),
      froms: r.default.getHash("from"),
      scheme: r.default.getHash("scheme"),
      rc: r.default.getHash("rc"),
      iframeSrc: r.default.getHash("iframeSrc"),
      cid: r.default.getHash("cid") || "wap_dc",
      nojump: r.default.getHash("nojump"),
      appId: r.default.getHash("appId"),
      pageSkin: r.default.getHash("pageSkin"),
      backTarget: r.default.getHash("backTarget"),
      minVersion: r.default.getHash("minVersion"),
      downloadPageTitle: r.default.getHash("downloadPageTitle") || "\u652f\u4ed8\u5b9d",
      url: r.default.getHash("url"),
      comeFrom: r.default.getHash("comeFrom"),
      hideOpen: r.default.getHash("hideOpen"),
      mk: r.default.getHash("mk")
    };
  window.urlParams = c;
  var f = function() {
    l.default.log("urlParams", c);
    var e = !0;
    if (c.froms && r.default.log(c.froms), c.pageSkin) {
      var t = d.default[c.pageSkin];
      !t && l.default.log("pageSkin is undefined"), e = !t || t()
    }
    return s("title").text(c.downloadPageTitle), e
  };
  t.default = f, e.exports = t.default
}, function(e, t) {
  "use strict";
  var o = {};
  o.getHost = function(e) {}, o.getHostByUrl = function(e) {}, o.getHostByRegx = function(e) {}, e.exports = o
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = {
    pop: function() {},
    popItem: function(e) {}
  };
  t.default = o, e.exports = t.default
}, function(e, t, o) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = o(1),
    r = n(a),
    i = o(2),
    l = n(i),
    u = o(15),
    d = n(u),
    s = {},
    c = window.Zepto,
    f = function(e) {
      return c(e).val() && c(e).val().split("|") || []
    },
    p = f("#domainList"),
    g = f("#urlList");
  p.pop(), g.pop(), p.length || l.default.log("domainListError:\u51e4\u8776\u533a\u5757\u540c\u6b65\u83b7\u53d6\u5931\u8d25"), s.getAllParams = function(e) {
    for (var t = /[(?|&)]([^=]+)=([^&#]+)/g, o = {}, n = t.exec(e); n;) {
      var a = decodeURIComponent(n[1]),
        r = decodeURIComponent(n[2]);
      o[a] = r, n = t.exec(e)
    }
    return o
  }, s.isValidUrl = function(e) {}, s.isValidScheme = function(e) {
    if (!e || !/^alipay(s|src|qr)?\:\/\/platformapi\/startapp\?/i.test(e)) return r.default.log("isValidScheme null"), !1;
    var t = s.getAllParams(e).url;
    return r.default.log("url", t), !(t && "/" !== t[0] && !s.isValidUrl(t)) || (r.default.log("isValidScheme isValidUrl"), !1)
  }, s.getScheme = function(e) {
    var t = s.getAllParams(e);
    r.default.log("getScheme params", t);
    var o = t.cid || "wap_dc",
      n = !!t.nojump,
      a = t.iframeSrc || t.scheme;
    if (!a) {
      var i = t.appId,
        l = t.url;
      if (!i && l && (i = "20000067"), i) {
        for (var u = "alipays://platformapi/startapp?appId=" + encodeURIComponent(i), d = Object.keys(t), c = 0; c < d.length; c++) {
          var f = d[c];
          "appId" !== f && (r.default.log("getScheme key", f, t[f]), u += "&" + encodeURIComponent(f) + "=" + encodeURIComponent(t[f]))
        }
        a = u
      }
    }
    return r.default.log("isValid", a, s.isValidScheme(a)), a && s.isValidScheme(a) || (a = "alipays://platformapi/startapp?appId=20000001"), {
      scheme: a,
      nojump: n,
      cid: o
    }
  }, s.getHash = function(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
      o = window.location.search.substr(1).match(t);
    return null !== o ? decodeURIComponent(o[2]) : null
  }, s.canRunNewCode = function() {}, s.getSceneStackInfo = function(e) {}, t.default = s, e.exports = t.default
}, function(e, t) {}, 18]);