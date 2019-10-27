! function(e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var a = r[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
  }
  var r = {};
  return t.m = e, t.c = r, t.p = "", t(0)
}([function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = r(9),
    o = n(a),
    i = r(10),
    u = n(i),
    c = r(8),
    l = n(c),
    d = r(11),
    s = n(d),
    f = window,
    p = (0, o["default"])(f.navigator.userAgent),
    v = void 0;
  f.Tracker || (v = /(AP|AF|BK)/.test(p.name) ? new u["default"] : /(TB|TM|JU)/.test(p.name) ? new s["default"] : new l["default"], f.Tracker = v), t["default"] = v, e.exports = t["default"]
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = window,
    n = r.document;
  t["default"] = {
    dealExtra: null,
    extend: function(e, t) {
      for (var r in t) void 0 !== t[r] && (e[r] = t[r])
    },
    onload: function(e) {
      "complete" === n.readyState ? e() : r.addEventListener("load", e)
    }
  }, e.exports = t["default"]
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var o = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    i = r(1),
    u = n(i),
    c = r(5),
    l = n(c),
    d = r(4),
    s = n(d),
    f = window,
    p = f.document,
    v = function() {
      return Date.now()
    },
    y = l["default"].query,
    m = null,
    _ = function() {
      function e(t) {
        a(this, e);
        var r = this;
        r._initListener(), u["default"].extend(r, {
          win: f,
          doc: p,
          Router: l["default"],
          expoObj: {},
          cfg: {
            pageSeedId: "H5_MTRACKER_AP_PAGE",
            clkSeedId: "H5_MTRACKER_AP_CLK",
            calcSeedId: "H5_MTRACKER_AP_CALC",
            expoSeedId: "H5_MTRACKER_AP_EXPO",
            syslogSeedId: "H5_MTRACKER_AP_SYSLOG"
          },
          mPageState: y.mPageState,
          platformType: "",
          bizScenario: y.bizScenario,
          autoStart: !0,
          autoError: !0,
          autoClick: !0,
          eventType: "touchstart",
          autoExpo: !1,
          bizType: "H5behavior",
          expotTimeout: 300,
          expoType: null,
          expoSection: [-.3, .3],
          appId: "",
          url: p.URL,
          fullURL: p.URL,
          _ready: !1,
          _fnCacheList: []
        }), r._initBridgeReady(), u["default"].extend(r, t), f._to && u["default"].extend(r, f._to), r.autoStart && r.start()
      }
      return o(e, [{
        key: "config",
        value: null
      }, {
        key: "start",
        value: function() {
          var e = this;
          e.url = e.url.split(/\?|#|;jsessionid=/)[0], e._ready ? (e._beforeApiReady(), e._apiDeclare(), e._afterApiReady()) : (e._apiPreDeclare(), e._trackerReady(null)), e.autoError && e._startAutoError(), e.autoClick && e._startAutoClick(), e.autoExpo && e._startAutoExpo()
        }
      }, {
        key: "_initListener",
        value: function() {
          var e = this;
          e.st = v(), p.addEventListener("DOMContentLoaded", function() {
            e.dr = v()
          }), f.addEventListener("load", null)
        }
      }, {
        key: "_initBridgeReady",
        value: function() {}
      }, {
        key: "_startAutoExpo",
        value: null
      }, {
        key: "_startAutoClick",
        value: function() {
          var e = this;
          p.addEventListener(e.eventType, null)
        }
      }, {
        key: "_startAutoError",
        value: function() {
          var e = this;
          f.addEventListener("error", null)
        }
      }, {
        key: "_trackerReady",
        value: function(e) {
          u["default"].onload(e)
        }
      }, {
        key: "_formatRemoteParam",
        value: null
      }, {
        key: "_apiCache",
        value: null
      }, {
        key: "_apiPreDeclare",
        value: function() {
          for (var e = this, t = ["click", "calc", "log", "logPv", "err", "pushWindow", "expo", "step"], r = function(r) {
              var n = t[r];
              e[n] = null
            }, n = 0; n < t.length; n++) r(n)
        }
      }, {
        key: "_mergeSeedId",
        value: null
      }, {
        key: "_apiDeclare",
        value: null
      }, {
        key: "_afterApiReady",
        value: null
      }, {
        key: "_resume",
        value: null
      }, {
        key: "_pushWindow",
        value: null
      }, {
        key: "_beforeApiReady",
        value: null
      }, {
        key: "_apiReady",
        value: null
      }, {
        key: "setPageState",
        value: null
      }, {
        key: "initURL",
        value: null
      }]), e
    }();
  t["default"] = _, e.exports = t["default"]
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = null, e.exports = t["default"]
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = r(3),
    o = n(a),
    i = window,
    u = i.document,
    c = u.documentElement;
  t["default"] = null, e.exports = t["default"]
}, function(e, t, r) {
  var n = window,
    a = n.location,
    o = (n.encodeURIComponent, n.decodeURIComponent, r(7)),
    i = function(e, t) {
      for (var r in t) e[r] = t[r];
      return e
    },
    u = {
      parse: o.parse,
      stringify: o.stringify,
      refresh: null,
      reload: null,
      query: {},
      setSearch: null,
      setHash: null,
      init: function() {
        return u.search = o.parse(a.search), u.hash = o.parse(a.hash), i(u.query, u.search), i(u.query, u.hash), u.query
      }
    };
  u.init(), e.exports = u
}, function(e, t) {
  "use strict";
  e.exports = null
}, function(e, t, r) {
  "use strict";
  var n = r(6);
  t.extract = null, t.parse = function(e) {
    return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(null, {}) : {})
  }, t.stringify = null
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var u = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    c = r(2),
    l = n(c),
    d = r(1),
    s = n(d),
    f = window,
    p = f.document,
    v = function(e) {
      function t(e) {
        a(this, t);
        var r = e || {},
          n = new Image,
          i = {
            server: "https://kcart.alipay.com/web/bi.do",
            cnaServer: "https://log.mmstat.com/5.gif?url=https://kcart.alipay.com/web/1.do?",
            image: n,
            _ing: !1,
            _list: [],
            cfg: {
              pageSeedId: "page",
              clkSeedId: "clk",
              calcSeedId: "calc",
              expoSeedId: "expo",
              syslogSeedId: "syslog"
            },
            ref: p.referrer || "-"
          };
        s["default"].extend(i, r);
        var u = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i)),
          c = u;
        return n.onload = null, /\bcna=/.test(p.cookie) || (c._ing = !0, n.src = c.cnaServer), u
      }
      return i(t, e), u(t, [{
        key: "_sendAll",
        value: null
      }, {
        key: "_send",
        value: null
      }, {
        key: "_remoteLog",
        value: null
      }]), t
    }(l["default"]);
  t["default"] = v, e.exports = t["default"]
}, function(e, t) {
  var r = function(e) {
    var t = {},
      r = e.match(/AliApp\S+\b\)/gi);
    return t.is = !!/(T-UA)|(TBIOS)|(WindVane)|(AliApp)/i.test(e), t.name = r ? r[0].match(/\(\w+\-*\w*/)[0].split("(")[1] : "", t.version = r ? r[0].match(/(\d+\.*)+/gi)[0] : "", t
  };
  e.exports = r
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  

  

  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? null : null,
    c = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    l = r(2),
    d = n(l),
    s = r(1),
    f = n(s),
    p = window,
    v = p.document,
    y = function(e) {
      
      return i(t, e), c(t, [{
        key: "_initBridgeReady",
        value: null
      }, {
        key: "_remoteLog",
        value: null
      }, {
        key: "_trackerReady",
        value: null
      }, {
        key: "_mergeSeedId",
        value: null
      }, {
        key: "_pushWindow",
        value: null
      }]), t
    }(d["default"]);
  t["default"] = y, e.exports = t["default"]
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  

  

  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var u = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    c = r(2),
    l = n(c),
    d = window,
    s = function(e) {
      
      return i(t, e), u(t, [{
        key: "_remoteLog",
        value: null
      }, {
        key: "_pushWindow",
        value: null
      }]), t
    }(l["default"]);
  t["default"] = s, e.exports = t["default"]
}]);