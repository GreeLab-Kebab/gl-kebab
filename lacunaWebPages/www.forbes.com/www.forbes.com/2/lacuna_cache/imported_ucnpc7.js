! function(t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var r = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function(i, o, s) {
    for (var a, c, u, l = 0, f = []; l < i.length; l++) c = i[l], r[c] && f.push(r[c][0]), r[c] = 0;
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    for (n && n(i, o, s); f.length;) f.shift()();
    if (s)
      for (l = 0; l < s.length; l++) u = e(e.s = s[l]);
    return u
  };
  var i = {},
    r = {
      16: 0
    };
  e.m = t, e.c = i, e.d = function(t, n, i) {
    e.o(t, n) || Object.defineProperty(t, n, {
      configurable: !1,
      enumerable: !0,
      get: i
    })
  }, e.n = function(t) {
    var n = t && t.__esModule ? function() {
      return t.default
    } : function() {};
    return e.d(n, "a", n), n
  }, e.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e.oe = function(t) {}, e(e.s = 129)
}([function(t, e, n) {
  "use strict";

  function i() {
    var t = ((window.forbes || {})["simple-site"] || {}).tracking;
    return "404" === (t || {}).pageType && (t.fastSu = "https://www.forbes.com" + window.location.pathname), t
  }
  n.d(e, "y", function() {
    return o
  }), n.d(e, "a", function() {}), n.d(e, "b", function() {
    return a
  }), n.d(e, "c", function() {
    return u
  }), n.d(e, "d", function() {}), n.d(e, "e", function() {}), n.d(e, "f", function() {}), n.d(e, "g", function() {}), n.d(e, "h", function() {
    return p
  }), n.d(e, "i", function() {}), n.d(e, "j", function() {
    return g
  }), n.d(e, "m", function() {}), n.d(e, "n", function() {}), n.d(e, "o", function() {
    return b
  }), n.d(e, "q", function() {
    return w
  }), n.d(e, "r", function() {
    return E
  }), n.d(e, "u", function() {
    return S
  }), n.d(e, "s", function() {}), n.d(e, "t", function() {
    return P
  }), n.d(e, "v", function() {
    return x
  }), n.d(e, "w", function() {}), n.d(e, "x", function() {
    return C
  }), n.d(e, "z", function() {}), n.d(e, "A", function() {}), n.d(e, "B", function() {}), n.d(e, "C", function() {
    return I
  }), n.d(e, "p", function() {
    return L
  }), e.l = i, n.d(e, "k", function() {
    return R
  });
  var r = n(1),
    o = (n.n(r), (window.forbes || {})["simple-site"] || {}),
    s = o.adBlockClasses,
    a = o.adId,
    c = o.adZone,
    u = o.advoiceBrand,
    l = (o.authorSlug, o.barChartYears),
    f = (o.blogSlug, o.bucket),
    d = o.categoryCookieName,
    h = o.channelColor,
    p = (o.channelId, o.channelName),
    v = o.cookieName,
    g = o.currentTabName,
    y = (o.division, o.hasWriters),
    m = (o.is404, o.isBlog),
    b = o.isE2E,
    w = o.isLocal,
    E = o.isPreview,
    S = (o.lazyLoadData, o.name, o.naturalId, o.pageLocation, o.premiumProfile),
    _ = o.playerId,
    P = o.premiumPage,
    x = o.region,
    A = o.relativeVideo,
    C = o.retracted,
    O = (o.sectionId, o.specialSlot),
    T = o.streamSourceType,
    j = o.streamSourceValue,
    I = (o.subBlog, o.swimLane),
    k = window.forbes || {},
    L = k.isEurope,
    B = r.isMobile ? "fdcmobile" : "fdc.forbes",
    R = "/7175/" + B + "/" + c
}, function(t, e) {
  var n = function() {
      var t = navigator,
        e = t.userAgent;
      return !!(e.match(/iP(hone|od)/i) || e.match(/iPod/i) || e.match(/BlackBerry/i) || e.match(/Android/i) && e.match(/Mobile/i) || e.match(/Nokia|NOKIA/i) && e.match(/Symbian|Windows Phone/i))
    }(),
    i = function() {
      return !!navigator.userAgent.match(/Tablet|iPad/i)
    }(),
    r = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  t.exports = {
    isMobile: n,
    isTablet: i,
    isIOS: r
  }
}, , function(t, e, n) {
  var i = n(12),
    r = n(16),
    o = n(31),
    s = n(32),
    a = n(33),
    c = function(t, e, n) {
      var u, l, f, d, h = t & c.F,
        p = t & c.G,
        v = t & c.S,
        g = t & c.P,
        y = t & c.B,
        m = p ? i : v ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
        b = p ? r : r[e] || (r[e] = {}),
        w = b.prototype || (b.prototype = {});
      p && (n = e);
      for (u in n) l = !h && m && void 0 !== m[u], f = (l ? m : n)[u], d = y && l ? a(f, i) : g && "function" == typeof f ? a(Function.call, f) : f, m && s(m, u, f, t & c.U), b[u] != f && o(b, u, d), g && w[u] != f && (w[u] = f)
    };
  i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, , , , , function(t, e, n) {
  var i = n(9);
  t.exports = function(t) {}
}, function(t, e) {
  t.exports = function(t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }
}, , function(t, e, n) {
  var i = n(72)("wks"),
    r = n(47),
    o = n(12).Symbol,
    s = "function" == typeof o;
  (t.exports = function(t) {
    return i[t] || (i[t] = s && o[t] || (s ? o : r)("Symbol." + t))
  }).store = i
}, function(t, e) {
  var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(t, e) {
  t.exports = function(t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function(t, e, n) {
  "use strict";

  function i() {}
  var r = n(245);
  n(91).a.mark("Loaded"), window.fbsads && window.fbsads.apiReady ? i() : document.addEventListener("FbsAdsBootstrapped", i)
}, function(t, e, n) {
  var i = n(45),
    r = Math.min;
  t.exports = function(t) {}
}, function(t, e) {
  var n = t.exports = {
    version: "2.6.3"
  };
  "number" == typeof __e && (__e = n)
}, function(t, e, n) {
  var i = n(3),
    r = n(13),
    o = n(34),
    s = /"/g,
    a = function(t, e, n, i) {};
  t.exports = function(t, e) {
    var n = {};
    n[t] = e(a), i(i.P + i.F * r(function() {
      var e = "" [t]('"');
      return e !== e.toLowerCase() || e.split('"').length > 3
    }), "String", n)
  }
}, , , function(t, e, n) {
  var i = n(8),
    r = n(96),
    o = n(62),
    s = Object.defineProperty;
  e.f = n(24) ? Object.defineProperty : function(t, e, n) {}
}, function(t, e, n) {
  var i = n(34);
  t.exports = function(t) {}
}, function(t, e, n) {
  "use strict";
  var i = n(13);
  t.exports = function(t, e) {
    return !!t && i(function() {
      e ? t.call(null, function() {}, 1) : t.call(null)
    })
  }
}, , function(t, e, n) {
  t.exports = !n(13)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(t, e, n) {
  var i = n(49),
    r = n(34);
  t.exports = function(t) {}
}, function(t, e, n) {
  var i = n(3),
    r = n(16),
    o = n(13);
  t.exports = function(t, e) {
    var n = (r.Object || {})[t] || Object[t],
      s = {};
    s[t] = e(n), i(i.S + i.F * o(function() {
      n(1)
    }), "Object", s)
  }
}, function(t, e) {
  var n = {}.hasOwnProperty;
  t.exports = function(t, e) {
    return n.call(t, e)
  }
}, function(t, e) {
  t.exports = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t
  }
}, , , function(t, e, n) {
  var i = n(20),
    r = n(43);
  t.exports = n(24) ? function(t, e, n) {
    return i.f(t, e, r(1, n))
  } : function(t, e, n) {}
}, function(t, e, n) {
  var i = n(12),
    r = n(31),
    o = n(27),
    s = n(47)("src"),
    a = Function.toString,
    c = ("" + a).split("toString");
  n(16).inspectSource = function(t) {}, (t.exports = function(t, e, n, a) {
    var u = "function" == typeof n;
    u && (o(n, "name") || r(n, "name", e)), t[e] !== n && (u && (o(n, s) || r(n, s, t[e] ? "" + t[e] : c.join(String(e)))), t === i ? t[e] = n : a ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
  })(Function.prototype, "toString", function() {
    return "function" == typeof this && this[s] || a.call(this)
  })
}, function(t, e, n) {
  var i = n(28);
  t.exports = function(t, e, n) {
    if (i(t), void 0 === e) return t;
    switch (n) {
      case 1:
        return function(n) {};
      case 2:
        return function(n, i) {};
      case 3:
        return function(n, i, r) {}
    }
    return function() {}
  }
}, function(t, e) {
  t.exports = function(t) {}
}, function(t, e, n) {
  "use strict";

  function i(t, e) {}

  function r(t, e) {}
  e.a = i, e.b = r;
  var o = new Map
}, , function(t, e) {
  var n = {}.toString;
  t.exports = function(t) {
    return n.call(t).slice(8, -1)
  }
}, function(t, e, n) {
  var i = n(63),
    r = n(43),
    o = n(25),
    s = n(62),
    a = n(27),
    c = n(96),
    u = Object.getOwnPropertyDescriptor;
  e.f = n(24) ? u : function(t, e) {}
}, function(t, e, n) {
  var i = n(33),
    r = n(49),
    o = n(21),
    s = n(15),
    a = n(208);
  t.exports = function(t, e) {
    var n = 1 == t,
      c = 2 == t,
      u = 3 == t,
      l = 4 == t,
      f = 6 == t,
      d = 5 == t || f,
      h = e || a;
    return function(e, a, p) {}
  }
}, , , , function(t, e) {
  t.exports = function(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
}, function(t, e, n) {
  var i = n(98),
    r = n(73);
  t.exports = Object.keys || function(t) {}
}, function(t, e) {
  var n = Math.ceil,
    i = Math.floor;
  t.exports = function(t) {}
}, function(t, e, n) {
  var i = n(47)("meta"),
    r = n(9),
    o = n(27),
    s = n(20).f,
    a = 0,
    c = Object.isExtensible || function() {},
    u = !n(13)(function() {
      return c(Object.preventExtensions({}))
    }),
    l = function(t) {},
    f = function(t, e) {},
    d = function(t, e) {},
    h = function(t) {},
    p = t.exports = {
      KEY: i,
      NEED: !1,
      fastKey: f,
      getWeak: d,
      onFreeze: h
    }
}, function(t, e) {
  var n = 0,
    i = Math.random();
  t.exports = function(t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
  }
}, function(t, e, n) {
  var i = n(8),
    r = n(97),
    o = n(73),
    s = n(71)("IE_PROTO"),
    a = function() {},
    c = function() {};
  t.exports = Object.create || function(t, e) {}
}, function(t, e, n) {
  var i = n(37);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {}
}, function(t, e, n) {
  var i = n(45),
    r = Math.max,
    o = Math.min;
  t.exports = function(t, e) {}
}, function(t, e) {
  t.exports = !1
}, function(t, e, n) {
  var i = n(20).f,
    r = n(27),
    o = n(11)("toStringTag");
  t.exports = function(t, e, n) {
    t && !r(t = n ? t : t.prototype, o) && i(t, o, {
      configurable: !0,
      value: e
    })
  }
}, function(t, e, n) {
  var i = n(27),
    r = n(21),
    o = n(71)("IE_PROTO"),
    s = Object.prototype;
  t.exports = Object.getPrototypeOf || function(t) {}
}, function(t, e, n) {
  "use strict";
  var i = n(78)(!0);
  n(79)(String, "String", function(t) {}, function() {})
}, function(t, e) {
  t.exports = {}
}, function(t, e, n) {
  var i = n(11)("unscopables"),
    r = Array.prototype;
  void 0 == r[i] && n(31)(r, i, {}), t.exports = function(t) {
    r[i][t] = !0
  }
}, function(t, e, n) {
  "use strict";

  function i() {
    var t = window.location.search.replace("?", "").split("&"),
      e = t.map(function(t) {
        return t.split("=")
      }).find(function(t) {
        return "ss" === t[0] && t[1]
      });
    return e && e[1]
  }

  function r(t) {
    return "none" === t ? [] : t
  }

  function o(t) {
    return "string" == typeof t ? (t || "").replace(/\s*/gi, "").toLowerCase() : t
  }

  function s() {
    var t = p.r && window.location.pathname.includes("/preview/mobile");
    return f.isMobile || t ? b : m
  }

  function a(t) {
    t.params = t.params || {};
    var e = (t.ad_unit_path || "").split("/") || [];
    window.external_services = g(window.external_services || {}, {
      site: e[2],
      zone: (e.slice(3) || []).join("/"),
      author: t.additionalMoatParams.author || "",
      brandvoice: "ad" === t.params.type,
      channel: t.params.channel,
      editorialSlot: t.params.editSlot,
      hashtags: t.params.ht,
      section: t.params.section,
      specialSlot: t.params.specialslot
    })
  }

  function c() {
    var t = Object(p.l)(),
      e = p.c ? "" : i(),
      n = p.C || e,
      s = p.j || "",
      a = {
        ab: Object(v.a)(),
        author: o(r(t.author)),
        bbgterm: Object(d.getBbgTerm)(),
        channel: [o(r(t.channelNames || t.channel)) || ""],
        editSlot: t.edit || "",
        fvid: Object(d.getFvid)(),
        ht: r(t.hashtags),
        id: p.b || t.naturalID || "",
        login: !1,
        section: [o(r(t.sectionNames || t.section)) || ""],
        specialslot: n ? "" : t.slot || "",
        swimlane: n,
        tab: s,
        templatetype: t.templateType,
        type: o(r(t.contribType || t.type)),
        badges: t.badges
      };
    p.u && (a.premiumProfile = p.u);
    var c = {
      author: r(t.author)
    };
    t.editorsPick && (a.ep = t.editorsPick), t.coverStory && (a.coverstory = t.coverStory), t.bertieBadgeSlugs && (a.badges = t.bertieBadgeSlugs), t.negativeSentimentCompanies && (a.ns = t.negativeSentimentCompanies), (t.entitySegments || []).length > 0 && (a.es = t.entitySegments.join(","), a.essrc = t.entitySegments.map(function(t) {}).join(",")), t.sentimentCompanies && (a.co = t.sentimentCompanies), (a.specialslot || a.swimlane) && (a.channel = "", a.section = "", a.displaychannel = "", a.displaysection = "", a.swimlane && (a.specialslot = "")), t.brandVoice && (a.advoice = t.brandVoice), m = g({}, h.desktopAdConfig, {
      bypass_validate_moat_yield: p.o,
      params: a,
      additionalMoatParams: c,
      ad_unit_path: p.k,
      isEurope: p.p
    }), b = g({}, h.mobileAdConfig, {
      bypass_validate_moat_yield: p.o,
      params: a,
      additionalMoatParams: c,
      ad_unit_path: p.k,
      isEurope: p.p
    })
  }

  function u(t) {}
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getSwimlane = i, e.updateAdParams = c, e.applyConfig = u;
  var l = (n(14), n(247)),
    f = n(1),
    d = (n.n(f), n(69)),
    h = n(269),
    p = (n.n(h), n(0)),
    v = n(270),
    g = Object.assign || function(t) {};
  p.o && localStorage.setItem("apstagDebug", "true"), window.fbsads = window.fbsads || new l.a;
  var y = window.fbsads,
    m = void 0,
    b = void 0;
  c(), a(s()), y.bootstrap(s())
}, , , , , function(t, e, n) {
  var i = n(9);
  t.exports = function(t, e) {}
}, function(t, e) {
  e.f = {}.propertyIsEnumerable
}, function(t, e) {
  e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
  "use strict";
  var i = n(66),
    r = {};
  r[n(11)("toStringTag")] = "z", r + "" != "[object z]" && n(32)(Object.prototype, "toString", function() {}, !0)
}, function(t, e, n) {
  var i = n(37),
    r = n(11)("toStringTag"),
    o = "Arguments" == i(function() {
      return arguments
    }()),
    s = function(t, e) {};
  t.exports = function(t) {
    var e, n, a;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
  }
}, function(t, e, n) {
  "use strict";
  var i = n(66),
    r = RegExp.prototype.exec;
  t.exports = function(t, e) {}
}, function(t, e, n) {
  "use strict";
  n(195);
  var i = n(32),
    r = n(31),
    o = n(13),
    s = n(34),
    a = n(11),
    c = n(83),
    u = a("species"),
    l = !o(function() {
      var t = /./;
      return t.exec = function() {
        var t = [];
        return t.groups = {
          a: "7"
        }, t
      }, "7" !== "".replace(t, "$<a>")
    }),
    f = function() {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function() {};
      var n = "ab".split(t);
      return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
  t.exports = function(t, e, n) {
    var d = a(t),
      h = !o(function() {
        var e = {};
        return e[d] = function() {
          return 7
        }, 7 != "" [t](e)
      }),
      p = h ? !o(function() {
        var e = !1,
          n = /a/;
        return n.exec = function() {
          return e = !0, null
        }, "split" === t && (n.constructor = {}, n.constructor[u] = function() {
          return n
        }), n[d](""), !e
      }) : void 0;
    if (!h || !p || "replace" === t && !l || "split" === t && !f) {
      var v = /./ [d],
        g = n(s, d, "" [t], function(t, e, n, i, r) {}),
        y = g[0],
        m = g[1];
      i(String.prototype, t, y), r(RegExp.prototype, d, 2 == e ? function(t, e) {} : function(t) {})
    }
  }
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "getFvid", function() {
    return c
  }), n.d(e, "getBbgTerm", function() {
    return u
  }), n.d(e, "getBvLeftRailHeadlineMobile", function() {}), n.d(e, "virtualTrack", function() {});
  var i = n(260),
    r = n(1),
    o = (n.n(r), n(0));
  window.trackingService = window.trackingService || new i.a;
  var s = window,
    a = s.trackingService;
  a.setEnvironment(o.q ? "staging" : "prod"), a.isEurope = o.p;
  var c = function() {
      return a.getOrCreateClientId()
    },
    u = function() {
      return window.location.search.substr(1).split("&").find(function(t) {
        return t.match(/(^|&)source=bloomberg($|&)/)
      }) ? "true" : "false"
    },
    l = function(t) {
      return t.index ? t.startFromBrandvoice || 1 !== t.index ? t.startFromBrandvoice && t.index < 4 ? "mobilerecommend" : "mobileother" : t.fromNtvAd ? "mobilead" : "mobile scheduler" : "none"
    },
    f = function(t) {
      var e = Object(o.l)(),
        n = {
          author: e.author || "none",
          site: e.siteSlug || "none",
          contribType: e.contribType || "none",
          blogType: e.blogType || "none",
          brandVoice: e.brandVoice || "none",
          channel: e.channel || "none",
          slot: e.slot || "none",
          bertie: e.bertie || "false",
          pageType: e.pageType || "none",
          DFPSite: r.isMobile ? "fdcmobile" : "fdc.forbes",
          DFPZone: e.dfpZone || "none",
          published: e.publishDate || "none",
          paragraphs: "" + (e.paragraphs || "none"),
          categories: e.categories || "none",
          edit: e.edit || "none",
          hashtags: e.hashtags || "none",
          naturalID: e.naturalID || "none",
          wordCount: e.wordCount || "none",
          pageNumber: "" + (e.pageNumber || "none"),
          pageTotal: "" + (e.pageTotal || "none"),
          publishHour: e.publishHour || "none",
          updateDate: e.updateDate || "none",
          updateHour: e.updateHour || "none",
          section: e.section || "none",
          videoPlacement: e.videoLocation || "none",
          login: "false",
          trendingHashtags: e.hashtagsTrending || "none",
          heroImage: e.heroImage || "none",
          imageCount: "number" == typeof e.imageCount ? e.imageCount.toString() : "none",
          customPage: e.customPage || "none",
          weekdayPublish: e.weekdayPublish || "none",
          contribActive: e.contribActive || "none",
          primaryChannel: e.primaryChannel || "none",
          primarySection: e.primarySection || "none",
          bvContentSource: e.brandVoice && e.bvContentSource || "none",
          bvLeftRailHeadline: l(e),
          streamPosition: "number" == typeof e.streamPosition ? e.streamPosition : "none",
          DFPLineItemID: e.ntvContentmLineItemId || "none",
          bvProgramType: e.bvProgramType || "none",
          coreBrands: e.coreBrands || "none",
          contribDivision: e.contribDivision || "none",
          insights: e.insights || "none",
          coAuthorControl: e.coAuthorControl,
          newsKeywords: e.newsKeywords || "none",
          coAuthor: e.coAuthor || "none",
          channelNames: e.channelNames || "none",
          sectionNames: e.sectionNames || "none",
          cbSections: e.sections || "",
          cbPath: document.location.pathname,
          fastCh: e.fastCh || "",
          fastSe: e.fastSe || "",
          fastSu: e.fastSu || "",
          fastPt: e.fastPt || "",
          fastI: e.naturalID || "",
          fastAu: e.fastAu || "",
          fastAt: e.fastAt || "",
          fastN: "",
          version: e.version || "",
          description: e.description || "",
          seniorContributor: e.seniorContributor || "none",
          paidContentType: e.paidContentType || "none",
          paidContentBrand: e.paidContentBrand || "none",
          premiumProfiles: e.premiumProfiles || "none",
          templateType: e.templateType || "none"
        };
      return t && (n.event = "analyticsVPV", n.path = window.location.pathname, n.virtualPage = "true", n.cbTitle = e.title || ""), n
    },
    d = function(t) {};
  window.forbes["simple-site"].isPreview || a.track(f(), !0)
}, function(t, e, n) {
  var i = n(9),
    r = n(12).document,
    o = i(r) && i(r.createElement);
  t.exports = function(t) {}
}, function(t, e, n) {
  var i = n(72)("keys"),
    r = n(47);
  t.exports = function(t) {
    return i[t] || (i[t] = r(t))
  }
}, function(t, e, n) {
  var i = n(16),
    r = n(12),
    o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
  (t.exports = function(t, e) {
    return o[t] || (o[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: i.version,
    mode: n(51) ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function(t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
  var i = n(12).document;
  t.exports = i && i.documentElement
}, function(t, e, n) {
  var i = n(98),
    r = n(73).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function(t) {}
}, function(t, e, n) {
  var i = n(9),
    r = n(8),
    o = function(t, e) {};
  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {}({}, !1) : void 0),
    check: o
  }
}, function(t, e, n) {
  var i = n(37);
  t.exports = Array.isArray || function(t) {}
}, function(t, e, n) {
  var i = n(45),
    r = n(34);
  t.exports = function(t) {
    return function(e, n) {}
  }
}, function(t, e, n) {
  "use strict";
  var i = n(51),
    r = n(3),
    o = n(32),
    s = n(31),
    a = n(55),
    c = n(101),
    u = n(52),
    l = n(53),
    f = n(11)("iterator"),
    d = !([].keys && "next" in [].keys()),
    h = function() {};
  t.exports = function(t, e, n, p, v, g, y) {
    c(n, e, p);
    var m, b, w, E = function(t) {
        if (!d && t in x) return x[t];
        switch (t) {
          case "keys":
          case "values":
            return function() {}
        }
        return function() {}
      },
      S = e + " Iterator",
      _ = "values" == v,
      P = !1,
      x = t.prototype,
      A = x[f] || x["@@iterator"] || v && x[v],
      C = A || E(v),
      O = v ? _ ? E("entries") : C : void 0,
      T = "Array" == e ? x.entries || A : A;
    if (T && (w = l(T.call(new t))) !== Object.prototype && w.next && (u(w, S, !0), i || "function" == typeof w[f] || s(w, f, h)), _ && A && "values" !== A.name && (P = !0, C = function() {}), i && !y || !d && !P && x[f] || s(x, f, C), a[e] = C, a[S] = h, v)
      if (m = {
          values: _ ? C : E("values"),
          keys: g ? C : E("keys"),
          entries: O
        }, y)
        for (b in m) b in x || o(x, b, m[b]);
      else r(r.P + r.F * (d || P), e, m);
    return m
  }
}, function(t, e, n) {
  var i = n(105),
    r = n(34);
  t.exports = function(t, e, n) {}
}, function(t, e, n) {
  var i = n(11)("match");
  t.exports = function(t) {
    var e = /./;
    try {
      "/./" [t](e)
    } catch (n) {
      try {
        return e[i] = !1, !"/./" [t](e)
      } catch (t) {}
    }
    return !0
  }
}, function(t, e, n) {
  "use strict";
  var i = n(78)(!0);
  t.exports = function(t, e, n) {}
}, function(t, e, n) {
  "use strict";
  var i = n(196),
    r = RegExp.prototype.exec,
    o = String.prototype.replace,
    s = r,
    a = function() {
      var t = /a/,
        e = /b*/g;
      return r.call(t, "a"), r.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
    }(),
    c = void 0 !== /()??/.exec("")[1];
  (a || c) && (s = function(t) {}), t.exports = s
}, function(t, e, n) {
  var i = n(11)("iterator"),
    r = !1;
  try {
    var o = [7][i]();
    o.return = function() {
      r = !0
    }, Array.from(o, function() {
      throw 2
    })
  } catch (t) {}
  t.exports = function(t, e) {
    if (!e && !r) return !1;
    var n = !1;
    try {
      var o = [7],
        s = o[i]();
      s.next = function() {
        return {
          done: n = !0
        }
      }, o[i] = function() {
        return s
      }, t(o)
    } catch (t) {}
    return n
  }
}, function(t, e, n) {
  "use strict";
  var i = n(12),
    r = n(20),
    o = n(24),
    s = n(11)("species");
  t.exports = function(t) {
    var e = i[t];
    o && e && !e[s] && r.f(e, s, {
      configurable: !0,
      get: function() {}
    })
  }
}, function(t, e, n) {
  for (var i = n(112), r = n(44), o = n(32), s = n(12), a = n(31), c = n(55), u = n(11), l = u("iterator"), f = u("toStringTag"), d = c.Array, h = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, p = r(h), v = 0; v < p.length; v++) {
    var g, y = p[v],
      m = h[y],
      b = s[y],
      w = b && b.prototype;
    if (w && (w[l] || a(w, l, d), w[f] || a(w, f, y), c[y] = d, m))
      for (g in i) w[g] || o(w, g, i[g], !0)
  }
}, function(t, e) {
  t.exports = function(t, e, n, i) {}
}, function(t, e, n) {
  var i = n(33),
    r = n(107),
    o = n(108),
    s = n(8),
    a = n(15),
    c = n(110),
    u = {},
    l = {},
    e = t.exports = function(t, e, n, f, d) {};
  e.BREAK = u, e.RETURN = l
}, function(t, e, n) {
  var i = n(32);
  t.exports = function(t, e, n) {}
}, function(t, e, n) {
  var i = n(9);
  t.exports = function(t, e) {}
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {}
    return t.mark = function(t) {
      window.performance && performance.mark && performance.mark("FbsAds_" + t.replace(" ", "_"))
    }, t
  }()
}, , , , , function(t, e, n) {
  t.exports = !n(24) && !n(13)(function() {})
}, function(t, e, n) {
  var i = n(20),
    r = n(8),
    o = n(44);
  t.exports = n(24) ? Object.defineProperties : function(t, e) {}
}, function(t, e, n) {
  var i = n(27),
    r = n(25),
    o = n(99)(!1),
    s = n(71)("IE_PROTO");
  t.exports = function(t, e) {}
}, function(t, e, n) {
  var i = n(25),
    r = n(15),
    o = n(50);
  t.exports = function(t) {
    return function(e, n, s) {}
  }
}, function(t, e) {
  t.exports = function(t, e, n) {}
}, function(t, e, n) {
  "use strict";
  var i = n(48),
    r = n(43),
    o = n(52),
    s = {};
  n(31)(s, n(11)("iterator"), function() {}), t.exports = function(t, e, n) {
    t.prototype = i(s, {
      next: r(1, n)
    }), o(t, e + " Iterator")
  }
}, function(t, e, n) {
  e.f = n(11)
}, function(t, e, n) {
  var i = n(25),
    r = n(75).f,
    o = {}.toString,
    s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    a = function(t) {};
  t.exports.f = function(t) {}
}, function(t, e) {
  t.exports = Object.is || function(t, e) {}
}, function(t, e, n) {
  var i = n(9),
    r = n(37),
    o = n(11)("match");
  t.exports = function(t) {}
}, function(t, e, n) {
  var i = n(8),
    r = n(28),
    o = n(11)("species");
  t.exports = function(t, e) {}
}, function(t, e, n) {
  var i = n(8);
  t.exports = function(t, e, n, r) {}
}, function(t, e, n) {
  var i = n(55),
    r = n(11)("iterator"),
    o = Array.prototype;
  t.exports = function(t) {}
}, function(t, e, n) {
  "use strict";
  var i = n(20),
    r = n(43);
  t.exports = function(t, e, n) {}
}, function(t, e, n) {
  var i = n(66),
    r = n(11)("iterator"),
    o = n(55);
  t.exports = n(16).getIteratorMethod = function(t) {}
}, function(t, e, n) {
  var i = n(28),
    r = n(21),
    o = n(49),
    s = n(15);
  t.exports = function(t, e, n, a, c) {}
}, function(t, e, n) {
  "use strict";
  var i = n(56),
    r = n(113),
    o = n(55),
    s = n(25);
  t.exports = n(79)(Array, "Array", function(t, e) {}, function() {}, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e) {
  t.exports = function(t, e) {}
}, function(t, e, n) {
  var i, r, o, s = n(33),
    a = n(100),
    c = n(74),
    u = n(70),
    l = n(12),
    f = l.process,
    d = l.setImmediate,
    h = l.clearImmediate,
    p = l.MessageChannel,
    v = l.Dispatch,
    g = 0,
    y = {},
    m = function() {},
    b = function(t) {};
  d && h || (d = function(t) {}, h = function(t) {}, "process" == n(37)(f) ? i = function(t) {} : v && v.now ? i = function(t) {} : p ? (r = new p, o = r.port2, r.port1.onmessage = b, i = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function(t) {}, l.addEventListener("message", b, !1)) : i = "onreadystatechange" in u("script") ? function(t) {} : function(t) {}), t.exports = {
    set: d,
    clear: h
  }
}, function(t, e, n) {
  "use strict";

  function i(t) {}
  var r = n(28);
  t.exports.f = function(t) {}
}, function(t, e, n) {
  "use strict";
  var i = n(20).f,
    r = n(48),
    o = n(89),
    s = n(33),
    a = n(87),
    c = n(88),
    u = n(79),
    l = n(113),
    f = n(85),
    d = n(24),
    h = n(46).fastKey,
    p = n(90),
    v = d ? "_s" : "size",
    g = function(t, e) {};
  t.exports = {
    getConstructor: function(t, e, n, u) {},
    def: function(t, e, n) {},
    getEntry: g,
    setStrong: function(t, e, n) {
      u(t, e, function(t, n) {}, function() {}, n ? "entries" : "values", !n, !0), f(e)
    }
  }
}, function(t, e, n) {
  "use strict";
  var i = n(12),
    r = n(3),
    o = n(32),
    s = n(89),
    a = n(46),
    c = n(88),
    u = n(87),
    l = n(9),
    f = n(13),
    d = n(84),
    h = n(52),
    p = n(233);
  t.exports = function(t, e, n, v, g, y) {
    var m = i[t],
      b = m,
      w = g ? "set" : "add",
      E = b && b.prototype,
      S = {},
      _ = function(t) {};
    if ("function" == typeof b && (y || E.forEach && !f(function() {
        (new b).entries().next()
      }))) {
      var P = new b,
        x = P[w](y ? {} : -0, 1) != P,
        A = f(function() {
          P.has(1)
        }),
        C = d(function(t) {
          new b(t)
        }),
        O = !y && f(function() {
          for (var t = new b, e = 5; e--;) t[w](e, e);
          return !t.has(-0)
        });
      C || (b = e(function(e, n) {}), b.prototype = E, E.constructor = b), (A || O) && (_("delete"), _("has"), g && _("get")), (O || x) && _(w), y && E.clear && delete E.clear
    } else b = v.getConstructor(e, t, g, w), s(b.prototype, n), a.NEED = !0;
    return h(b, t), S[t] = b, r(r.G + r.W + r.F * (b != m), S), y || v.setStrong(b, t, g), b
  }
}, function(t, e, n) {
  "use strict";

  function i(t) {
    window.performance && performance.mark && performance.mark("Fbs Video: " + t)
  }
  e.a = i
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {
      this.apiReady = !1
    }
    return t
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return r
  });
  var i = n(35),
    r = function() {
      function t() {}
      return Object.defineProperty(t.prototype, "apstag", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), t.prototype.init = function(t) {}, t.prototype.fetchBids = function(t) {}, t.prototype.resetAmazonSlots = function() {}, t.prototype.initAmazon = function(t) {}, t.prototype.amazonSetup = function() {}, t.prototype.setAmazonTargeting = function(t, e) {}, t.prototype.subscribeToRemoveTargeting = function() {}, t
    }()
}, function(t, e, n) {
  "use strict";
  var i = n(249);
  n.d(e, "a", function() {
    return i.a
  }), n.d(e, "b", function() {})
}, function(t, e, n) {
  "use strict";
  var i = (n(252), n(253));
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = {
    mobile: !1,
    ad_unit_path: "7175/fdc.forbes/article-d",
    positions: {
      top: {
        slot_id: "top",
        sizes: [
          [728, 90],
          [970, 250],
          [970, 90],
          [970, 66],
          [1, 1], "fluid"
        ],
        criteoZoneId: 1168047
      },
      rec: {
        slot_id: "rec",
        sizes: [
          [300, 250],
          [336, 280],
          [300, 600],
          [1, 1], "fluid"
        ],
        criteoZoneId: 1168043
      },
      mobile: {
        slot_id: "mobile",
        sizes: [
          [300, 50],
          [320, 50],
          [1, 1]
        ]
      },
      mobilerec: {
        slot_id: "mobilerec",
        sizes: [
          [300, 250],
          [300, 50],
          [320, 180],
          [320, 50],
          [1, 1]
        ]
      }
    },
    params: {},
    isEurope: !1
  }
}, function(t, e, n) {
  "use strict";
  var i = n(267);
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {}
    return t.generateClientId = function() {
      for (var t = this, e = this.hash31(window.location.pathname + window.location.hash), n = 2147483647 & (new Date).getTime(), i = [], r = "", o = 0; o < 5; o++) i[o] = 268435456 * Math.random() & 2147483647;
      return i[0] = i[0] ^ 268435455 & e, i[1] = i[1] ^ 268435455 & n, i[2] = i[2] ^ (n >> 28 << 3 | e >> 28), i.forEach(function(e) {
        r += t.pad(e.toString(16), 7, "0", !1)
      }), r
    }, t.hash31 = function(t) {
      for (var e = 2147483647, n = t.length; n--;) e = (e << 5) - e + t.charCodeAt(n) & 2147483647;
      return e
    }, t.pad = function(t, e, n, i) {
      for (t = "" + t; t.length < e;) t = i ? t + n : n + t;
      return t
    }, t
  }()
}, , , , function(t, e, n) {
  n(130), n(131), n(148), n(169), n(200), n(225), n(231), n(234), n(236), n(237), n(238), n(239), n(240), n(57), n(69), n(271), n(272), t.exports = n(273)
}, function(t, e) {
  ! function() {
    if ("undefined" != typeof window) try {
      var t = new window.CustomEvent("test", {
        cancelable: !0
      });
      if (t.preventDefault(), !0 !== t.defaultPrevented) throw new Error("Could not prevent default")
    } catch (t) {
      var e = function(t, e) {};
      e.prototype = window.Event.prototype, window.CustomEvent = e
    }
  }()
}, function(t, e, n) {
  n(132), n(133), n(135), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(145), n(146), n(147), t.exports = n(16).Reflect
}, function(t, e, n) {
  var i = n(3),
    r = n(28),
    o = n(8),
    s = (n(12).Reflect || {}).apply,
    a = Function.apply;
  i(i.S + i.F * !n(13)(function() {
    s(function() {})
  }), "Reflect", {
    apply: function(t, e, n) {}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(48),
    o = n(28),
    s = n(8),
    a = n(9),
    c = n(13),
    u = n(134),
    l = (n(12).Reflect || {}).construct,
    f = c(function() {
      function t() {}
      return !(l(function() {}, [], t) instanceof t)
    }),
    d = !c(function() {
      l(function() {})
    });
  i(i.S + i.F * (f || d), "Reflect", {
    construct: function(t, e) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(28),
    r = n(9),
    o = n(100),
    s = [].slice,
    a = {},
    c = function(t, e, n) {};
  t.exports = Function.bind || function(t) {}
}, function(t, e, n) {
  var i = n(20),
    r = n(3),
    o = n(8),
    s = n(62);
  r(r.S + r.F * n(13)(function() {
    Reflect.defineProperty(i.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    })
  }), "Reflect", {
    defineProperty: function(t, e, n) {}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(38).f,
    o = n(8);
  i(i.S, "Reflect", {
    deleteProperty: function(t, e) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(8),
    o = function(t) {};
  n(101)(o, "Object", function() {}), i(i.S, "Reflect", {
    enumerate: function(t) {}
  })
}, function(t, e, n) {
  function i(t, e) {}
  var r = n(38),
    o = n(53),
    s = n(27),
    a = n(3),
    c = n(9),
    u = n(8);
  a(a.S, "Reflect", {
    get: i
  })
}, function(t, e, n) {
  var i = n(38),
    r = n(3),
    o = n(8);
  r(r.S, "Reflect", {
    getOwnPropertyDescriptor: function(t, e) {}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(53),
    o = n(8);
  i(i.S, "Reflect", {
    getPrototypeOf: function(t) {}
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Reflect", {
    has: function(t, e) {}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(8),
    o = Object.isExtensible;
  i(i.S, "Reflect", {
    isExtensible: function(t) {}
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Reflect", {
    ownKeys: n(144)
  })
}, function(t, e, n) {
  var i = n(75),
    r = n(64),
    o = n(8),
    s = n(12).Reflect;
  t.exports = s && s.ownKeys || function(t) {}
}, function(t, e, n) {
  var i = n(3),
    r = n(8),
    o = Object.preventExtensions;
  i(i.S, "Reflect", {
    preventExtensions: function(t) {}
  })
}, function(t, e, n) {
  function i(t, e, n) {}
  var r = n(20),
    o = n(38),
    s = n(53),
    a = n(27),
    c = n(3),
    u = n(43),
    l = n(8),
    f = n(9);
  c(c.S, "Reflect", {
    set: i
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(76);
  r && i(i.S, "Reflect", {
    setPrototypeOf: function(t, e) {}
  })
}, function(t, e, n) {
  n(149), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(167), n(168), n(65), t.exports = n(16).Object
}, function(t, e, n) {
  "use strict";
  var i = n(12),
    r = n(27),
    o = n(24),
    s = n(3),
    a = n(32),
    c = n(46).KEY,
    u = n(13),
    l = n(72),
    f = n(52),
    d = n(47),
    h = n(11),
    p = n(102),
    v = n(150),
    g = n(151),
    y = n(77),
    m = n(8),
    b = n(9),
    w = n(25),
    E = n(62),
    S = n(43),
    _ = n(48),
    P = n(103),
    x = n(38),
    A = n(20),
    C = n(44),
    O = x.f,
    T = A.f,
    j = P.f,
    I = i.Symbol,
    k = i.JSON,
    L = k && k.stringify,
    B = h("_hidden"),
    R = h("toPrimitive"),
    M = {}.propertyIsEnumerable,
    D = l("symbol-registry"),
    F = l("symbols"),
    N = l("op-symbols"),
    z = Object.prototype,
    U = "function" == typeof I,
    V = i.QObject,
    H = !V || !V.prototype || !V.prototype.findChild,
    q = o && u(function() {
      return 7 != _(T({}, "a", {
        get: function() {
          return T(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function(t, e, n) {} : T,
    W = function(t) {},
    G = U && "symbol" == typeof I.iterator ? function(t) {} : function(t) {},
    $ = function(t, e, n) {},
    J = function(t, e) {},
    K = function(t, e) {},
    X = function(t) {},
    Y = function(t, e) {},
    Z = function(t) {},
    Q = function(t) {};
  U || (I = function() {}, a(I.prototype, "toString", function() {}), x.f = Y, A.f = $, n(75).f = P.f = Z, n(63).f = X, n(64).f = Q, o && !n(51) && a(z, "propertyIsEnumerable", X, !0), p.f = function(t) {}), s(s.G + s.W + s.F * !U, {
    Symbol: I
  });
  for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) h(tt[et++]);
  for (var nt = C(h.store), it = 0; nt.length > it;) v(nt[it++]);
  s(s.S + s.F * !U, "Symbol", {
    for: function(t) {},
    keyFor: function(t) {},
    useSetter: function() {},
    useSimple: function() {}
  }), s(s.S + s.F * !U, "Object", {
    create: K,
    defineProperty: $,
    defineProperties: J,
    getOwnPropertyDescriptor: Y,
    getOwnPropertyNames: Z,
    getOwnPropertySymbols: Q
  }), k && s(s.S + s.F * (!U || u(function() {
    var t = I();
    return "[null]" != L([t]) || "{}" != L({
      a: t
    }) || "{}" != L(Object(t))
  })), "JSON", {
    stringify: function(t) {}
  }), I.prototype[R] || n(31)(I.prototype, R, I.prototype.valueOf), f(I, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0)
}, function(t, e, n) {
  var i = n(12),
    r = n(16),
    o = n(51),
    s = n(102),
    a = n(20).f;
  t.exports = function(t) {
    var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
    "_" == t.charAt(0) || t in e || a(e, t, {
      value: s.f(t)
    })
  }
}, function(t, e, n) {
  var i = n(44),
    r = n(64),
    o = n(63);
  t.exports = function(t) {}
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Object", {
    create: n(48)
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S + i.F * !n(24), "Object", {
    defineProperty: n(20).f
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S + i.F * !n(24), "Object", {
    defineProperties: n(97)
  })
}, function(t, e, n) {
  var i = n(25),
    r = n(38).f;
  n(26)("getOwnPropertyDescriptor", function() {
    return function(t, e) {}
  })
}, function(t, e, n) {
  var i = n(21),
    r = n(53);
  n(26)("getPrototypeOf", function() {
    return function(t) {}
  })
}, function(t, e, n) {
  var i = n(21),
    r = n(44);
  n(26)("keys", function() {
    return function(t) {}
  })
}, function(t, e, n) {
  n(26)("getOwnPropertyNames", function() {
    return n(103).f
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("freeze", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("seal", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("preventExtensions", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isFrozen", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isSealed", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isExtensible", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S + i.F, "Object", {
    assign: n(166)
  })
}, function(t, e, n) {
  "use strict";
  var i = n(44),
    r = n(64),
    o = n(63),
    s = n(21),
    a = n(49),
    c = Object.assign;
  t.exports = !c || n(13)(function() {
    var t = {},
      e = {},
      n = Symbol(),
      i = "abcdefghijklmnopqrst";
    return t[n] = 7, i.split("").forEach(function(t) {
      e[t] = t
    }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
  }) ? function(t, e) {} : c
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Object", {
    is: n(104)
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Object", {
    setPrototypeOf: n(76).set
  })
}, function(t, e, n) {
  n(170), n(171), n(172), n(54), n(175), n(176), n(177), n(178), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(197), n(198), n(199), t.exports = n(16).String
}, function(t, e, n) {
  var i = n(3),
    r = n(50),
    o = String.fromCharCode,
    s = String.fromCodePoint;
  i(i.S + i.F * (!!s && 1 != s.length), "String", {
    fromCodePoint: function(t) {}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(25),
    o = n(15);
  i(i.S, "String", {
    raw: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  n(173)("trim", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(34),
    o = n(13),
    s = n(174),
    a = "[" + s + "]",
    c = "​",
    u = RegExp("^" + a + a + "*"),
    l = RegExp(a + a + "*$"),
    f = function(t, e, n) {
      var r = {},
        a = o(function() {
          return !!s[t]() || c[t]() != c
        }),
        u = r[t] = a ? e(d) : s[t];
      n && (r[n] = u), i(i.P + i.F * a, "String", r)
    },
    d = f.trim = function(t, e) {};
  t.exports = f
}, function(t, e) {
  t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(78)(!1);
  i(i.P, "String", {
    codePointAt: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(15),
    o = n(80),
    s = "".endsWith;
  i(i.P + i.F * n(81)("endsWith"), "String", {
    endsWith: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(80);
  i(i.P + i.F * n(81)("includes"), "String", {
    includes: function(t) {}
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.P, "String", {
    repeat: n(179)
  })
}, function(t, e, n) {
  "use strict";
  var i = n(45),
    r = n(34);
  t.exports = function(t) {}
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(15),
    o = n(80),
    s = "".startsWith;
  i(i.P + i.F * n(81)("startsWith"), "String", {
    startsWith: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("anchor", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("big", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("blink", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("bold", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fixed", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fontcolor", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fontsize", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("italics", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("link", function(t) {
    return function(e) {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("small", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("strike", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("sub", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("sup", function(t) {
    return function() {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(15),
    o = n(82),
    s = n(67);
  n(68)("match", 1, function(t, e, n, a) {})
}, function(t, e, n) {
  "use strict";
  var i = n(83);
  n(3)({
    target: "RegExp",
    proto: !0,
    forced: i !== /./.exec
  }, {
    exec: i
  })
}, function(t, e, n) {
  "use strict";
  var i = n(8);
  t.exports = function() {}
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(21),
    o = n(15),
    s = n(45),
    a = n(82),
    c = n(67),
    u = Math.max,
    l = Math.min,
    f = Math.floor,
    d = /\$([$&`']|\d\d?|<[^>]*>)/g,
    h = /\$([$&`']|\d\d?)/g,
    p = function(t) {};
  n(68)("replace", 2, function(t, e, n, v) {})
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(104),
    o = n(67);
  n(68)("search", 1, function(t, e, n, s) {})
}, function(t, e, n) {
  "use strict";
  var i = n(105),
    r = n(8),
    o = n(106),
    s = n(82),
    a = n(15),
    c = n(67),
    u = n(83),
    l = n(13),
    f = Math.min,
    d = [].push,
    h = "length",
    p = !l(function() {
      RegExp(4294967295, "y")
    });
  n(68)("split", 2, function(t, e, n, l) {})
}, function(t, e, n) {
  n(54), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(220), n(222), n(223), n(224), n(112), t.exports = n(16).Array
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Array", {
    isArray: n(77)
  })
}, function(t, e, n) {
  "use strict";
  var i = n(33),
    r = n(3),
    o = n(21),
    s = n(107),
    a = n(108),
    c = n(15),
    u = n(109),
    l = n(110);
  r(r.S + r.F * !n(84)(function(t) {
    Array.from(t)
  }), "Array", {
    from: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(109);
  i(i.S + i.F * n(13)(function() {
    function t() {}
    return !(Array.of.call(t) instanceof t)
  }), "Array", {
    of: function() {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(25),
    o = [].join;
  i(i.P + i.F * (n(49) != Object || !n(22)(o)), "Array", {
    join: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(74),
    o = n(37),
    s = n(50),
    a = n(15),
    c = [].slice;
  i(i.P + i.F * n(13)(function() {
    r && c.call(r)
  }), "Array", {
    slice: function(t, e) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(28),
    o = n(21),
    s = n(13),
    a = [].sort,
    c = [1, 2, 3];
  i(i.P + i.F * (s(function() {
    c.sort(void 0)
  }) || !s(function() {
    c.sort(null)
  }) || !n(22)(a)), "Array", {
    sort: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(0),
    o = n(22)([].forEach, !0);
  i(i.P + i.F * !o, "Array", {
    forEach: function(t) {}
  })
}, function(t, e, n) {
  var i = n(209);
  t.exports = function(t, e) {}
}, function(t, e, n) {
  var i = n(9),
    r = n(77),
    o = n(11)("species");
  t.exports = function(t) {}
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(1);
  i(i.P + i.F * !n(22)([].map, !0), "Array", {
    map: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(2);
  i(i.P + i.F * !n(22)([].filter, !0), "Array", {
    filter: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(3);
  i(i.P + i.F * !n(22)([].some, !0), "Array", {
    some: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(4);
  i(i.P + i.F * !n(22)([].every, !0), "Array", {
    every: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(111);
  i(i.P + i.F * !n(22)([].reduce, !0), "Array", {
    reduce: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(111);
  i(i.P + i.F * !n(22)([].reduceRight, !0), "Array", {
    reduceRight: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(99)(!1),
    o = [].indexOf,
    s = !!o && 1 / [1].indexOf(1, -0) < 0;
  i(i.P + i.F * (s || !n(22)(o)), "Array", {
    indexOf: function(t) {}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(25),
    o = n(45),
    s = n(15),
    a = [].lastIndexOf,
    c = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
  i(i.P + i.F * (c || !n(22)(a)), "Array", {
    lastIndexOf: function(t) {}
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.P, "Array", {
    copyWithin: n(219)
  }), n(56)("copyWithin")
}, function(t, e, n) {
  "use strict";
  var i = n(21),
    r = n(50),
    o = n(15);
  t.exports = [].copyWithin || function(t, e) {}
}, function(t, e, n) {
  var i = n(3);
  i(i.P, "Array", {
    fill: n(221)
  }), n(56)("fill")
}, function(t, e, n) {
  "use strict";
  var i = n(21),
    r = n(50),
    o = n(15);
  t.exports = function(t) {}
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(5),
    o = !0;
  "find" in [] && Array(1).find(function() {
    o = !1
  }), i(i.P + i.F * o, "Array", {
    find: function(t) {}
  }), n(56)("find")
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(6),
    o = "findIndex",
    s = !0;
  o in [] && Array(1)[o](function() {
    s = !1
  }), i(i.P + i.F * s, "Array", {
    findIndex: function(t) {}
  }), n(56)(o)
}, function(t, e, n) {
  n(85)("Array")
}, function(t, e, n) {
  n(65), n(54), n(86), n(226), t.exports = n(16).Promise
}, function(t, e, n) {
  "use strict";
  var i, r, o, s, a = n(51),
    c = n(12),
    u = n(33),
    l = n(66),
    f = n(3),
    d = n(9),
    h = n(28),
    p = n(87),
    v = n(88),
    g = n(106),
    y = n(114).set,
    m = n(227)(),
    b = n(115),
    w = n(228),
    E = n(229),
    S = n(230),
    _ = c.TypeError,
    P = c.process,
    x = P && P.versions,
    A = x && x.v8 || "",
    C = c.Promise,
    O = "process" == l(P),
    T = function() {},
    j = r = b.f,
    I = !! function() {
      try {
        var t = C.resolve(1),
          e = (t.constructor = {})[n(11)("species")] = function(t) {
            t(T, T)
          };
        return (O || "function" == typeof PromiseRejectionEvent) && t.then(T) instanceof e && 0 !== A.indexOf("6.6") && -1 === E.indexOf("Chrome/66")
      } catch (t) {}
    }(),
    k = function(t) {},
    L = function(t, e) {},
    B = function(t) {},
    R = function(t) {},
    M = function(t) {},
    D = function(t) {},
    F = function(t) {};
  I || (C = function(t) {}, i = function(t) {}, i.prototype = n(89)(C.prototype, {
    then: function(t, e) {},
    catch: function(t) {}
  }), o = function() {}, b.f = j = function(t) {}), f(f.G + f.W + f.F * !I, {
    Promise: C
  }), n(52)(C, "Promise"), n(85)("Promise"), s = n(16).Promise, f(f.S + f.F * !I, "Promise", {
    reject: function(t) {}
  }), f(f.S + f.F * (a || !I), "Promise", {
    resolve: function(t) {}
  }), f(f.S + f.F * !(I && n(84)(function(t) {
    C.all(t).catch(T)
  })), "Promise", {
    all: function(t) {},
    race: function(t) {}
  })
}, function(t, e, n) {
  var i = n(12),
    r = n(114).set,
    o = i.MutationObserver || i.WebKitMutationObserver,
    s = i.process,
    a = i.Promise,
    c = "process" == n(37)(s);
  t.exports = function() {
    var t, e, n, u = function() {};
    if (c) n = function() {};
    else if (!o || i.navigator && i.navigator.standalone)
      if (a && a.resolve) {
        var l = a.resolve(void 0);
        n = function() {}
      } else n = function() {};
    else {
      var f = !0,
        d = document.createTextNode("");
      new o(u).observe(d, {
        characterData: !0
      }), n = function() {}
    }
    return function(i) {}
  }
}, function(t, e) {
  t.exports = function(t) {}
}, function(t, e, n) {
  var i = n(12),
    r = i.navigator;
  t.exports = r && r.userAgent || ""
}, function(t, e, n) {
  var i = n(8),
    r = n(9),
    o = n(115);
  t.exports = function(t, e) {}
}, function(t, e, n) {
  n(65), n(54), n(86), n(232), t.exports = n(16).Map
}, function(t, e, n) {
  "use strict";
  var i = n(116),
    r = n(90);
  t.exports = n(117)("Map", function(t) {}, {
    get: function(t) {},
    set: function(t, e) {}
  }, i, !0)
}, function(t, e, n) {
  var i = n(9),
    r = n(76).set;
  t.exports = function(t, e, n) {}
}, function(t, e, n) {
  n(65), n(54), n(86), n(235), t.exports = n(16).Set
}, function(t, e, n) {
  "use strict";
  var i = n(116),
    r = n(90);
  t.exports = n(117)("Set", function(t) {}, {
    add: function(t) {}
  }, i)
}, function(t, e, n) {
  "use strict";
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {};
  ! function() {
    function t() {
      function t() {
        e.C = !0, e.b(a.childNodes)
      }
      var e = this;
      this.a = new Map, this.j = new Map, this.h = new Map, this.m = new Set, this.v = new MutationObserver(this.A.bind(this)), this.f = null, this.B = new Set, this.enableFlush = !0, this.C = !1, this.G = this.c(a), window.HTMLImports ? window.HTMLImports.whenReady(t) : t(), s = this
    }

    function e() {
      return s
    }

    function n(t) {
      if (!/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t) || -1 !== u.indexOf(t)) return Error("The element name '" + t + "' is not valid.")
    }

    function r(t, n, i, r) {
      var o = e();
      return t = f.call(t, n, i), (n = o.a.get(n.toLowerCase())) && o.D(t, n, r), o.c(t), t
    }

    function o(t, n, i, r) {
      n = n.toLowerCase();
      var o = t.getAttribute(n);
      r.call(t, n, i), 1 == t.__$CE_upgraded && (r = e().a.get(t.localName), i = r.w, (r = r.i) && 0 <= i.indexOf(n) && (i = t.getAttribute(n)) !== o && r.call(t, n, o, i, null))
    }
    var s, a = document,
      c = window;
    if (!e() || (e().g = function() {}, e().forcePolyfill)) {
      var u = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ");
      t.prototype.K = function(t, e) {
        function r(t) {
          var e = c[t];
          if (void 0 !== e && "function" != typeof e) throw Error(s + " '" + t + "' is not a Function");
          return e
        }
        if ("function" != typeof e) throw new TypeError("constructor must be a Constructor");
        var o = n(t);
        if (o) throw o;
        if (this.a.has(t)) throw Error("An element with name '" + t + "' is already defined");
        if (this.j.has(e)) throw Error("Definition failed for '" + t + "': The constructor is already used.");
        var s = t,
          c = e.prototype;
        if ("object" !== (void 0 === c ? "undefined" : i(c))) throw new TypeError("Definition failed for '" + t + "': constructor.prototype must be an object");
        var o = r("connectedCallback"),
          u = r("disconnectedCallback"),
          l = r("attributeChangedCallback");
        this.a.set(s, {
          name: t,
          localName: s,
          constructor: e,
          o: o,
          s: u,
          i: l,
          w: l && e.observedAttributes || []
        }), this.j.set(e, s), this.C && this.b(a.childNodes), (t = this.h.get(s)) && (t.resolve(void 0), this.h.delete(s))
      }, t.prototype.get = function(t) {}, t.prototype.L = function(t) {}, t.prototype.g = function() {}, t.prototype.I = function(t) {
        this.f = t
      }, t.prototype.c = function(t) {
        return null != t.__$CE_observer ? t.__$CE_observer : (t.__$CE_observer = new MutationObserver(this.l.bind(this)), t.__$CE_observer.observe(t, {
          childList: !0,
          subtree: !0
        }), this.enableFlush && this.m.add(t.__$CE_observer), t.__$CE_observer)
      }, t.prototype.J = function(t) {
        null != t.__$CE_observer && (t.__$CE_observer.disconnect(), this.enableFlush && this.m.delete(t.__$CE_observer), t.__$CE_observer = null)
      }, t.prototype.l = function(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if ("childList" === n.type) {
            var i = n.removedNodes;
            this.b(n.addedNodes), this.H(i)
          }
        }
      }, t.prototype.b = function(t, e) {
        e = e || new Set;
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          if (i.nodeType === Node.ELEMENT_NODE) {
            this.J(i), i = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, null, !1);
            do {
              this.F(i.currentNode, e)
            } while (i.nextNode())
          }
        }
      }, t.prototype.F = function(t, e) {
        if (!e.has(t)) {
          e.add(t);
          var n = this.a.get(t.localName);
          if (n) {
            t.__$CE_upgraded || this.D(t, n, !0);
            var i;
            if (i = t.__$CE_upgraded && !t.__$CE_attached) t: {
              i = t;do {
                if (i.__$CE_attached || i.nodeType === Node.DOCUMENT_NODE) {
                  i = !0;
                  break t
                }
                i = i.parentNode || i.nodeType === Node.DOCUMENT_FRAGMENT_NODE && i.host
              } while (i);i = !1
            }
            i && (t.__$CE_attached = !0, n.o && n.o.call(t))
          }
          t.shadowRoot && this.b(t.shadowRoot.childNodes, e), "LINK" === t.tagName && t.rel && -1 !== t.rel.toLowerCase().split(" ").indexOf("import") && this.u(t, e)
        }
      }, t.prototype.u = function(t, e) {}, t.prototype.H = function(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if (n.nodeType === Node.ELEMENT_NODE) {
            this.c(n), n = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, null, !1);
            do {
              var i = n.currentNode;
              if (i.__$CE_upgraded && i.__$CE_attached) {
                i.__$CE_attached = !1;
                var r = this.a.get(i.localName);
                r && r.s && r.s.call(i)
              }
            } while (n.nextNode())
          }
        }
      }, t.prototype.D = function(t, e, n) {
        if (t.__proto__ = e.constructor.prototype, n && (this.I(t), new e.constructor, t.__$CE_upgraded = !0, console.assert(!this.f)), n = e.w, (e = e.i) && 0 < n.length) {
          this.v.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            attributeFilter: n
          });
          for (var i = 0; i < n.length; i++) {
            var r = n[i];
            if (t.hasAttribute(r)) {
              var o = t.getAttribute(r);
              e.call(t, r, null, o, null)
            }
          }
        }
      }, t.prototype.A = function(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if ("attributes" === n.type) {
            var i = n.target,
              r = this.a.get(i.localName),
              o = n.attributeName,
              s = n.oldValue,
              a = i.getAttribute(o);
            a !== s && r.i.call(i, o, s, a, n.attributeNamespace)
          }
        }
      }, !1 !== (Object.getOwnPropertyDescriptor(window, "CustomElementRegistry") || {}).writable && (window.CustomElementRegistry = t), t.prototype.define = t.prototype.K, t.prototype.get = t.prototype.get, t.prototype.whenDefined = t.prototype.L, t.prototype.flush = t.prototype.g, t.prototype.polyfilled = !0, t.prototype._observeRoot = t.prototype.c, t.prototype._addImport = t.prototype.u;
      var l = c.HTMLElement;
      c.HTMLElement = function() {
        var t = e();
        if (t.f) {
          var n = t.f;
          return t.f = null, n
        }
        if (this.constructor) return t = t.j.get(this.constructor), r(a, t, void 0, !1);
        throw Error("Unknown constructor. Did you call customElements.define()?")
      }, c.HTMLElement.prototype = Object.create(l.prototype, {
        constructor: {
          value: c.HTMLElement,
          configurable: !0,
          writable: !0
        }
      });
      var f = a.createElement;
      a.createElement = function(t, e) {
        return r(a, t, e, !0)
      };
      var d = a.createElementNS;
      a.createElementNS = function(t, e) {};
      var h = Element.prototype.attachShadow;
      h && Object.defineProperty(Element.prototype, "attachShadow", {
        value: function(t) {}
      });
      var p = a.importNode;
      a.importNode = function(t, n) {};
      var v = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(t, e) {
        o(this, t, e, v)
      };
      var g = Element.prototype.removeAttribute;
      Element.prototype.removeAttribute = function(t) {}, Object.defineProperty(window, "customElements", {
        value: new t,
        configurable: !0,
        enumerable: !0
      }), window.CustomElements = {
        takeRecords: function() {}
      }
    }
  }()
}, function(t, e) {
  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  ! function() {
    var t = HTMLElement;
    window.HTMLElement = function e() {
      var n = (this instanceof e ? this.constructor : void 0) || this.constructor;
      return Reflect.construct(t, [], n)
    }, HTMLElement.prototype = Object.create(t.prototype, {
      constructor: {
        value: HTMLElement,
        configurable: !0,
        writable: !0
      }
    })
  }()
}, function(t, e) {
  window.performance = window.performance || !1,
    function(t) {
      t.forEach(function(t) {
        Object.prototype.hasOwnProperty.call(t, "remove") || Object.defineProperty(t, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function() {}
        })
      })
    }([Element.prototype, CharacterData.prototype, DocumentType.prototype]),
    function(t) {
      t.forEach(function(t) {
        if (!Object.prototype.hasOwnProperty.call(t, "addEventListener")) {
          var e = t.addEventListener;
          Object.defineProperty(t, "addEventListener", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
              e.apply(this, n)
            }
          })
        }
      })
    }([HTMLElement.prototype]),
    function(t) {
      t.forEach(function(t) {
        Object.prototype.hasOwnProperty.call(t, "append") || Object.defineProperty(t, "append", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function() {}
        })
      })
    }([Element.prototype, Document.prototype, DocumentFragment.prototype])
}, function(t, e) {
  ! function(t) {
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
      return t
    }, e.d = function(t, n, i) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, e.n = function(t) {
      var n = t && t.__esModule ? function() {} : function() {};
      return e.d(n, "a", n), n
    }, e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 2)
  }([function(t, e, n) {
    "use strict";
    var i = n(4),
      r = n(3),
      o = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {} || function(t, e) {};
        return function(e, n) {
          function i() {
            this.constructor = e
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
      }(),
      s = function(t) {
        function e() {
          var e = t.call(this) || this;
          return e.imageEnhancedEventListener = e.imageEnhanced.bind(e), e.handleImageErrorEventListener = e.handleImageError.bind(e), e.imgTag = document.createElement("img"), e.imgTag.style.display = "none", e
        }
        return o(e, t), Object.defineProperty(e, "observedAttributes", {
          get: function() {
            return ["src", "background-image", "width", "enhanced", "alt"]
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "src", {
          get: function() {},
          set: function(t) {},
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "backgroundImage", {
          get: function() {
            return this.getAttribute("background-image")
          },
          set: function(t) {},
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "width", {
          get: function() {
            return parseInt(this.getAttribute("width")) || 960
          },
          set: function(t) {},
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "alt", {
          get: function() {
            return this.getAttribute("alt")
          },
          set: function(t) {},
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "enhanced", {
          get: function() {
            return this.hasAttribute("enhanced") && "false" !== this.getAttribute("enhanced")
          },
          set: function(t) {
            t ? this.setAttribute("enhanced", "") : this.removeAttribute("enhanced")
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.connectedCallback = function() {
          this.init()
        }, e.prototype.attributeChangedCallback = function(t, e, n) {
          if (n !== e) switch (t) {
            case "src":
            case "background-image":
              if (n.indexOf(".gif") > -1) return this.isGif = !0, this.highResSrc = n, void this.enhanceImage();
              this.highResSrc = r.a.prependThumbor(n, this.width, 1), this.shouldEnhanceImage() && this.enhanceImage();
              break;
            case "alt":
              this.imgTag.alt = n || ""
          }
        }, e.prototype.registerScrollHandler = function() {
          var t = this;
          document.addEventListener("scroll", n.i(i.a)(function() {}))
        }, e.prototype.shouldEnhanceImage = function() {
          return !this.enhanced && this.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop <= 2 * window.innerHeight + window.pageYOffset
        }, e.prototype.enhanceImage = function() {
          this.imgTag.src = this.highResSrc, this.imgTag.addEventListener("load", this.imageEnhancedEventListener), this.isGif && this.classList.add("initial-width")
        }, e.prototype.imageEnhanced = function() {
          this.backgroundImage ? this.style.backgroundImage = "url(" + this.highResSrc + ")" : this.imgTag.style.display = "block", this.classList.add("show-img"), this.enhanced = !0, this.imgTag.removeEventListener("load", this.imageEnhancedEventListener)
        }, e.prototype.handleImageError = function() {}, e.prototype.init = function() {
          this.imgTag.alt = this.alt || "", this.imgTag.addEventListener("load", this.imageEnhancedEventListener), this.imgTag.addEventListener("error", this.handleImageErrorEventListener), this.backgroundImage || this.appendChild(this.imgTag), this.enhanced || this.registerScrollHandler()
        }, e
      }(HTMLElement);
    customElements.define("progressive-image", s)
  }, function(t, e, n) {
    var i = n(5);
    "string" == typeof i && (i = [
      [t.i, i, ""]
    ]);
    n(7)(i, {});
    i.locals && (t.exports = i.locals)
  }, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = (n(0), n(1));
    n.n(i)
  }, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return i
    });
    var i = function() {
      function t() {}
      return t.httpsUrl = function(t) {}, t.normalizeImageDomain = function(e) {}, t.adjustExistingThumborUrl = function(t, e) {
        var n = t.match(/[0-9]+x[0-9]+/)[0],
          i = parseInt(n.split("x")[0]) || 0,
          r = parseInt(n.split("x")[1]) || 0;
        return i *= e, r *= e, t.replace(n, i + "x" + r)
      }, t.prependThumbor = function(t, e, n) {
        if (void 0 === t && (t = ""), (t || "").indexOf("thumbor") > -1) return this.adjustExistingThumborUrl(t, n);
        if ((t || "").indexOf("gravatar") > -1) return t;
        var i = this.normalizeImageDomain(t);
        return this.isOnThumborWhitelist(i) ? "https://thumbor.forbes.com/thumbor/" + e * n + "x0/" + encodeURIComponent(i) : i
      }, t.isOnThumborWhitelist = function(t) {}, t.thumborWhitelist = ["specials-images.forbes.com", "specials-images.forbesimg.com", "i.forbesimg.com", "b-i.forbesimg.com", "images.forbes.com", "blogs-images.forbes.com"], t
    }()
  }, function(t, e, n) {
    "use strict";

    function i(t) {
      var e, n, i = this;
      return function() {}
    }
    e.a = i
  }, function(t, e, n) {
    e = t.exports = n(6)(!1), e.push([t.i, "progressive-image {\n  position: relative;\n  display: block; }\n  progressive-image:before {\n    content: '';\n    display: block;\n    padding-bottom: 56.25%; }\n  progressive-image.show-img::before {\n    content: none; }\n  progressive-image.initial-width {\n    display: inline-block; }\n    progressive-image.initial-width img {\n      padding-right: 0.5rem;\n      width: initial; }\n  progressive-image img {\n    display: none;\n    width: 100%; }\n", ""])
  }, function(t, e) {
    function n(t, e) {}

    function i(t) {}
    t.exports = function(t) {
      var e = [];
      return e.toString = function() {}, e.i = function(t, n) {}, e
    }
  }, function(t, e, n) {
    function i(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = p[i.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
          for (; o < i.parts.length; o++) r.parts.push(l(i.parts[o], e))
        } else {
          for (var s = [], o = 0; o < i.parts.length; o++) s.push(l(i.parts[o], e));
          p[i.id] = {
            id: i.id,
            refs: 1,
            parts: s
          }
        }
      }
    }

    function r(t) {
      for (var e = [], n = {}, i = 0; i < t.length; i++) {
        var r = t[i],
          o = r[0],
          s = r[1],
          a = r[2],
          c = r[3],
          u = {
            css: s,
            media: a,
            sourceMap: c
          };
        n[o] ? n[o].parts.push(u) : e.push(n[o] = {
          id: o,
          parts: [u]
        })
      }
      return e
    }

    function o(t, e) {
      var n = g(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var i = b[b.length - 1];
      if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), b.push(e);
      else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e)
      }
    }

    function s(t) {}

    function a(t) {
      var e = document.createElement("style");
      return t.attrs.type = "text/css", u(e, t.attrs), o(t, e), e
    }

    function c(t) {}

    function u(t, e) {
      Object.keys(e).forEach(function(n) {
        t.setAttribute(n, e[n])
      })
    }

    function l(t, e) {
      var n, i, r;
      if (e.singleton) {
        var o = m++;
        n = y || (y = a(e)), i = f.bind(null, n, o, !1), r = f.bind(null, n, o, !0)
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), i = h.bind(null, n, e), r = function() {}) : (n = a(e), i = d.bind(null, n), r = function() {});
      return i(t),
        function(e) {}
    }

    function f(t, e, n, i) {}

    function d(t, e) {
      var n = e.css,
        i = e.media;
      if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }

    function h(t, e, n) {}
    var p = {},
      v = function(t) {
        var e;
        return function() {
          return void 0 === e && (e = t.apply(this, arguments)), e
        }
      }(function() {
        return window && document && document.all && !window.atob
      }),
      g = function(t) {
        var e = {};
        return function(n) {
          return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
        }
      }(function(t) {
        return document.querySelector(t)
      }),
      y = null,
      m = 0,
      b = [],
      w = n(8);
    t.exports = function(t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, void 0 === e.singleton && (e.singleton = v()), void 0 === e.insertInto && (e.insertInto = "head"), void 0 === e.insertAt && (e.insertAt = "bottom");
      var n = r(t);
      return i(n, e),
        function(t) {}
    };
    var E = function() {
      var t = [];
      return function(e, n) {}
    }()
  }, function(t, e) {
    t.exports = function(t) {}
  }])
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(241),
    r = n(243),
    o = n(118);
  Object(o.a)("Loaded"), window["fbs-video"] = new r.a, customElements.define("fbs-video", i.a)
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return c
  });
  var i = n(118),
    r = n(242),
    o = this && this.__extends || function() {
      var t = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {} || function(t, e) {};
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    s = this && this.__awaiter || function(t, e, n, i) {},
    a = this && this.__generator || function(t, e) {},
    c = function(t) {
      function e() {}
      return o(e, t), Object.defineProperty(e, "observedAttributes", {
        get: function() {
          return ["video-id", "player-id", "autoplay", "report-autoplay", "rendition-selection", "key-value-string", "muted", "ad-unit-path", "ads-disabled"]
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "playing", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adPlaying", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "duration", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "pauseAd", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "videoId", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adsDisabled", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adUnitPath", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "playerId", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "autoplay", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "muted", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "secretAutoplay", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "renditionSelection", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "keyValueString", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "attrsSnapshot", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adPlayer", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), e.prototype.attributeChangedCallback = function(t, e, n) {}, e.prototype.connectedCallback = function() {}, e.prototype.disconnectedCallback = function() {}, e.prototype.changeVideo = function(t) {}, e.prototype.mute = function() {}, e.prototype.play = function() {}, e.prototype.pause = function() {}, e.prototype.togglePlay = function() {}, e.prototype.requestFullscreen = function() {}, e.prototype.attachCustomSocialOptions = function() {}, e.prototype.insertCloseButton = function() {}, e.prototype.showCloseButton = function() {}, e.prototype.hideAdCloseButton = function() {}, e.prototype.insertVideoElement = function() {}, e.prototype.getAdUnitPath = function() {}, e.prototype.attachPlayEventListeners = function() {}, e.prototype.attachAdsTiming = function() {}, e.prototype.attachPlayEndedEventListener = function() {}, e.prototype.attachAdsStartedEventListener = function() {}, e.prototype.attachAdsEndedEventListener = function() {}, e.prototype.attachPlayEventHandler = function() {}, e.prototype.attachPauseEventHandler = function() {}, e.prototype.attachAdLoadedHandler = function() {}, e.prototype.attachAdsErrorEventHandler = function() {}, e.prototype.subscribeForPause = function() {}, e.prototype.handleVideoPlaying = function(t) {}, e.prototype.handleWindowBlur = function() {}, e.prototype.handleWindowFocus = function() {}, e.prototype.handleWindowScroll = function() {}, e.prototype.pauseToggleCheck = function() {}, e.prototype.removeWindowFocusEvents = function() {}, e.prototype.subscribeForHiddenPause = function() {}, e.prototype.checkIsVideoInView = function() {}, e.prototype.muteAd = function() {}, e
    }(HTMLElement)
}, function(t, e, n) {
  "use strict";

  function i(t, e, n) {}
  e.a = i
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return u
  });
  var i = n(35),
    r = n(244),
    o = this && this.__assign || Object.assign || function(t) {},
    s = this && this.__awaiter || function(t, e, n, i) {},
    a = this && this.__generator || function(t, e) {},
    c = [384, 768, 1024, 1280, 1600, 1920],
    u = function() {
      function t() {
        this.ima3Config = {
          serverUrl: "",
          requestMode: "onplay",
          adTechOrder: ["html5", "flash"],
          vpaidMode: "ENABLED",
          timeout: 8e3,
          showVpaidControls: !0
        }, this.bc = window.bc, this.videojs = window.videojs, this.srVideoInit = window.srVideoInit, this.playerData = new Map, this.idCount = 0, this.playerCount = 0, this.PID = "50e4a8434240cf5c4b000009", this.amazonBids = {}, this.hiddenPauseEnabled = !0
      }
      return t.prototype.generateId = function() {}, t.prototype.init = function(t) {}, t.prototype.waitforGdpr = function() {}, t.prototype.requestMnetBids = function() {}, t.prototype.loadMnet = function() {}, t.prototype.notifyPlaying = function(t) {}, t.prototype.simpleReachCall = function() {}, t.prototype.loadVideojs = function(t) {}, t.prototype.callSimpleReach = function(t, e) {}, t.prototype.setSimpleReachEvents = function(t) {}, t.prototype.loadScript = function(t) {}, t.prototype.loadStyle = function(t) {}, t.prototype.loadIma3 = function() {}, t.prototype.setAdTargeting = function(t) {}, t.prototype.getAdServerUrl = function(t) {}, t.prototype.getPageTargeting = function() {}, t.prototype.getVideoAdTargeting = function(t) {}, t.prototype.parseChannelSection = function(t) {}, t.prototype.initPlayer = function(t) {}, t.prototype.getAmazonHeaderBidding = function(t) {}, t.prototype.getMediaInformation = function(t) {}, t.prototype.prepareVideo = function(t) {}, t.prototype.handleVideoJsReady = function(t) {}, t.prototype.processVideoThumbnail = function(t, e) {}, t.prototype.handleCatalogVideo = function(t, e) {}, t.prototype.selectRendition = function(t, e, n) {}, t.prototype.dispose = function(t) {}, t.prototype.setMediaSessionDetails = function(t) {}, t.prototype.trackPlay = function(t) {}, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {});
  var i = function() {
    function t(t) {}
    return t
  }()
}, function(t, e, n) {
  "use strict";
  var i = n(246);
  n.d(e, "a", function() {})
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {});
  var i = n(91),
    r = this && this.__extends || function() {
      var t = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {} || function(t, e) {};
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    o = function(t) {
      function e() {}
      return r(e, t), Object.defineProperty(e, "observedAttributes", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adId", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "position", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "customTargeting", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "progressive", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "batched", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "hideEmpty", {
        get: function() {},
        set: function(t) {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "empty", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "attrsSnapshot", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), e.prototype.display = function() {}, e.prototype.refresh = function() {}, e.prototype.create = function() {}, e.prototype.getTargeting = function(t) {}, e.prototype.getSlotTargeting = function() {}, e.prototype.handleRender = function(t) {}, e.prototype.listenToRender = function() {}, e.prototype.handleViewable = function(t) {}, e.prototype.listenToViewable = function() {}, e.prototype.insert = function() {}, e.prototype.getDivId = function() {}, e.prototype.hideHero = function() {}, e.prototype.addAccessibilityAttributes = function() {}, e.prototype.destroyAd = function() {}, e.prototype.initializeAd = function() {}, e.prototype.connectedCallback = function() {}, e.prototype.disconnectedCallback = function() {}, e
    }(HTMLElement)
}, function(t, e, n) {
  "use strict";
  var i = (n(119), n(248), n(121), n(250));
  n.d(e, "a", function() {
    return i.a
  });
  n(122), n(258)
}, function(t, e, n) {
  "use strict";
  n(120)
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", function() {}), n.d(e, "a", function() {
    return o
  });
  var i = n(35),
    r = [{
      min: 0,
      max: 15,
      increment: "0.04"
    }, {
      min: 15,
      max: 40,
      increment: "0.20"
    }, {
      min: 40,
      max: 100,
      increment: "1.00"
    }],
    o = function() {
      function t() {}
      return t.prototype.init = function() {}, t.prototype.setTargeting = function() {}, t.prototype.fetchBids = function(t, e) {}, t.prototype.stringifyLineItemRanges = function(t) {}, t.prototype.loadCriteo = function() {}, t
    }()
}, function(t, e, n) {
  "use strict";
  var i = n(251);
  n.d(e, "a", function() {
    return i.a
  });
  n(123)
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return g
  });
  var i = n(35),
    r = n(119),
    o = n(91),
    s = n(122),
    a = n(120),
    c = n(123),
    u = n(254),
    l = n(255),
    f = n(256),
    d = n(121),
    h = n(257),
    p = this && this.__extends || function() {
      var t = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {} || function(t, e) {};
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    v = {
      google: "goog-o",
      "news.google": "goog-news",
      "news.url.google": "goog-news",
      bing: "bing-o",
      "search.yahoo": "yaho-o",
      yahoo: "yaho-ref",
      facebook: "fb",
      "m.facebook": "fb",
      linkedin: "li",
      twitter: "twtr",
      "mobile.twitter": "twtr"
    },
    g = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.googletag = window.googletag = window.googletag || {
          cmd: []
        }, e.googleTagProxy = new s.a(e.googletag), e._config = c.a, e.initialized = !1, e.adSlots = new Map, e.adCounts = {}, e.bids = [], e.medianetService = new u.a, e.medianetVideoService = new l.a, e.amazonBiddingService = new a.a, e.criteoBiddingService = new d.a, e
      }
      return p(e, t), Object.defineProperty(e.prototype, "adUnitPath", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), e.prototype.metConsentRequirement = function(t) {
        return !t || document.cookie.match(/notice_gdpr_prefs=/)
      }, e.prototype.bootstrap = function(t) {
        var e = this;
        if (t) {
          var n = function(i) {
            try {
              var r = JSON.parse(i.data);
              r && "preference_manager" === r.source && "submit_preferences" === r.message && setTimeout(function() {})
            } catch (t) {}
          };
          if (!this.metConsentRequirement(t.isEurope)) return void window.addEventListener("message", n);
          this.apiReady = !0, t && (this.medianetService.init(t), t.mobile || this.criteoBiddingService.init());
          var i = t && this.getShoppingInsightsGroup(t.params || {});
          this.amazonBiddingService.init(i), Object(h.a)(), t && this.applyConfig(t), this.loadGoogletag(), this.setup(), o.a.mark("Service Bootstrap")
        }
      }, e.prototype.setup = function() {}, e.prototype.applyConfig = function(t) {}, e.prototype.initMediaNetVideoBidding = function() {}, e.prototype.fetchMediaNetVideoBids = function() {}, e.prototype.fetchAmazonBids = function(t) {}, e.prototype.fetchCriteoBids = function(t, e) {}, e.prototype.setCriteoTargeting = function() {}, e.prototype.enableAds = function() {}, e.prototype.createSlot = function(t, e, n) {}, e.prototype.checkPerformance = function() {}, e.prototype.display = function(t) {}, e.prototype.displayBatch = function(t) {}, e.prototype.refresh = function(t) {}, e.prototype.destroySlots = function(t) {}, e.prototype.resetIncrements = function(t) {}, e.prototype.getPosition = function(t) {}, e.prototype.getSite = function() {}, e.prototype.getZone = function() {}, e.prototype.isIncremental = function(t) {}, e.prototype.getDivId = function(t, e) {}, e.prototype.getSlotId = function(t) {}, e.prototype.getSizes = function(t) {}, e.prototype.getMaxWidth = function(t) {}, e.prototype.getMaxHeight = function(t) {}, e.prototype.getMaxSize = function(t) {}, e.prototype.getTargeting = function(t) {}, e.prototype.getPageTargeting = function() {}, e.prototype.resetAmazonSlots = function() {}, e.prototype.incrementAd = function(t) {}, e.prototype.setEventListeners = function() {}, e.prototype.listenToRender = function() {}, e.prototype.listenToViewable = function() {}, e.prototype.loadGoogletag = function() {}, e.prototype.applyTargeting = function(t, e) {}, e.prototype.getTargetingSource = function() {}, e.prototype.getChannelSection = function(t) {}, e.prototype.getShoppingInsightsGroup = function(t) {}, e.prototype.setCustomParams = function(t, e) {}, e.prototype.setRequestNonPersonalizedAds = function() {}, e
    }(r.a)
}, function(t, e, n) {
  "use strict";
  var i = function() {
    function t() {}
    return t.prototype.collapseEmptyDivs = function() {}, t.prototype.enableAsyncRendering = function() {}, t.prototype.enableSingleRequest = function() {}, t.prototype.disableInitialLoad = function() {}, t.prototype.clearTargeting = function(t) {}, t.prototype.refresh = function(t, e) {}, t.prototype.addEventListener = function(t, e) {}, t.prototype.setSafeFrameConfig = function(t) {}, t.prototype.setTargeting = function(t, e) {}, t.prototype.getTargeting = function(t) {}, t.prototype.getTargetingKeys = function() {}, t.prototype.setRequestNonPersonalizedAds = function(t) {}, t
  }();
  ! function() {
    function t() {}
    t.prototype.pubads = function() {}, t.prototype.enableServices = function() {}, t.prototype.disableInitialLoad = function() {}, t.prototype.defineSlot = function(t, e, n) {}, t.prototype.display = function(t) {}, t.prototype.destroySlots = function(t) {}
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t(t) {
      this.enabled = !1, this.queue = [], this.googletag = t
    }
    return t.prototype.push = function(t) {}, t.prototype.pushFirst = function(t) {}, t.prototype.flush = function() {}, t.prototype.enable = function() {}, t.prototype.disable = function() {}, t
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(35),
    r = this && this.__assign || Object.assign || function(t) {},
    o = function() {
      function t() {
        this.advBidxc = {
          setTargetingForAdUnitsGPTAsync: function() {},
          next: function() {}
        }, this.channel = "", this.section = ""
      }
      return Object.defineProperty(t.prototype, "isLoaded", {
        get: function() {},
        enumerable: !0,
        configurable: !0
      }), t.prototype.init = function(t) {}, t.prototype.applyConfig = function(t) {}, t.prototype.prefetchBids = function() {}, t.prototype.loadMedianet = function(t) {}, t.prototype.setChannelSection = function(t) {}, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return s
  });
  var i = n(35),
    r = this && this.__awaiter || function(t, e, n, i) {},
    o = this && this.__generator || function(t, e) {},
    s = function() {
      function t() {}
      return t.prototype.init = function() {}, t.prototype.fetchMediaNetBids = function() {}, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {});
  var i = function() {
    function t() {}
    return t.getDomain = function(t) {}, t
  }()
}, function(t, e, n) {
  "use strict";

  function i() {}

  function r(t) {}
  e.a = i, e.b = r;
  var o = n(35)
}, function(t, e, n) {
  "use strict";
  n(259)
}, function(t, e, n) {
  "use strict";
  ! function() {
    function t() {}
    t.prototype.setTargetingForAdUnitsGPTAsync = function() {}, t.prototype.next = function() {}
  }()
}, function(t, e, n) {
  "use strict";
  var i = n(261);
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  var i = (n(262), n(263));
  n.d(e, "a", function() {
    return i.a
  });
  n(125), n(124)
}, function(t, e, n) {
  "use strict";
  ! function() {
    function t() {}
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return c
  });
  var i = n(264),
    r = n(124),
    o = n(125),
    s = n(268),
    a = this && this.__assign || Object.assign || function(t) {},
    c = function() {
      function t() {
        this.gaPreviousUrl = null, this.previousUrl = null, this.previousPath = null, this.cookiesService = new i.a, this.googleAnalyticsService = new r.a, this.sharingHashService = new s.a, this.trackingCalls = [], this.isEurope = !1
      }
      return t.prototype.metConsentRequirement = function() {
        return !this.isEurope || document.cookie.match(/notice_gdpr_prefs=/)
      }, t.prototype.track = function(t, e) {
        var n = this;
        if (!this.metConsentRequirement()) {
          var i = function(r) {
            try {
              var o = JSON.parse(r.data);
              o && "preference_manager" === o.source && "submit_preferences" === o.message && setTimeout(function() {})
            } catch (t) {}
          };
          return void window.addEventListener("message", i)
        }
        if (t) {
          e && (this.updatePreviousUrl(), this.sharingHashService.setHash());
          var r = this.sharingHashService.getParentHash() || "none",
            o = this.sharingHashService.getChildHash() || "none";
          t = a({}, t, {
            shareParent: r,
            shareChild: o,
            referrer: this.gaPreviousUrl,
            fastSu: t.fastSu ? t.fastSu + "#" + this.sharingHashService.getHash() : "",
            fastCi: this.getOrCreateClientId(),
            fastRe: t.fastRe || this.previousUrl,
            isEurope: this.isEurope.toString()
          }), this.googleAnalyticsService.track(t), this.trackingCalls.push(t)
        }
      }, t.prototype.getOrCreateClientId = function() {
        var t = this.cookiesService.get("client_id") || o.a.generateClientId(),
          e = new Date;
        return e.setFullYear(e.getFullYear() + 2), this.cookiesService.set("client_id", t, {
          expires: e
        }), t
      }, t.prototype.setEnvironment = function(t) {
        this.googleAnalyticsService.setEnvironment(t)
      }, t.prototype.getPreviousUrl = function() {}, t.prototype.getGAPreviousUrl = function() {}, t.prototype.updatePreviousUrl = function() {}, t
    }()
}, function(t, e, n) {
  "use strict";
  var i = n(265);
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(266),
    r = (n.n(i), {
      path: "/",
      domain: ".forbes.com"
    }),
    o = function() {
      function t() {}
      return t.prototype.get = function(t) {
        return i.get(t)
      }, t.prototype.set = function(t, e, n) {
        n = this.getOptions(n), i.set(t, e, n)
      }, t.prototype.remove = function(t, e) {}, t.prototype.getOptions = function(t) {
        return Object.assign({}, r, t)
      }, t
    }()
}, function(t, e, n) {
  var i, r;
  ! function(o) {
    var s;
    if (i = o, void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = r), s = !0, t.exports = o(), s = !0, !s) {
      var a = window.Cookies,
        c = window.Cookies = o();
      c.noConflict = function() {}
    }
  }(function() {
    function t() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) e[i] = n[i]
      }
      return e
    }

    function e(t) {}

    function n(i) {
      function r() {}

      function o(e, n, o) {
        if ("undefined" != typeof document) {
          o = t({
            path: "/"
          }, r.defaults, o), "number" == typeof o.expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
          try {
            var s = JSON.stringify(n);
            /^[\{\[]/.test(s) && (n = s)
          } catch (t) {}
          n = i.write ? i.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var a = "";
          for (var c in o) o[c] && (a += "; " + c, !0 !== o[c] && (a += "=" + o[c].split(";")[0]));
          return document.cookie = e + "=" + n + a
        }
      }

      function s(t, n) {
        if ("undefined" != typeof document) {
          for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
            var a = o[s].split("="),
              c = a.slice(1).join("=");
            n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
            try {
              var u = e(a[0]);
              if (c = (i.read || i)(c, u) || e(c), n) try {
                c = JSON.parse(c)
              } catch (t) {}
              if (r[u] = c, t === u) break
            } catch (t) {}
          }
          return t ? r[t] : r
        }
      }
      return r.set = o, r.get = function(t) {
        return s(t, !1)
      }, r.getJSON = function(t) {}, r.remove = function(e, n) {}, r.defaults = {}, r.withConverter = n, r
    }
    return n(function() {})
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(35),
    r = {
      prod: "GTM-NMQJM4",
      staging: "GTM-KRRS9R"
    },
    o = function() {
      function t() {
        this.initialized = !1, this.dataLayer = window.dataLayer = window.dataLayer || [], this.containerId = r.staging
      }
      return t.convertData = function(t) {}, t.prototype.track = function(e) {}, t.prototype.setEnvironment = function(t) {
        this.containerId = r[t]
      }, t.prototype.init = function() {}, t.prototype.dataLayerPush = function(t) {}, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {
      this.hash = ""
    }
    return t.prototype.getParentHash = function() {}, t.prototype.getChildHash = function() {}, t.prototype.getHash = function() {}, t.prototype.setHash = function() {}, t.prototype.harvestSharingHashTree = function(t) {}, t.prototype.hash31 = function(t) {}, t.prototype.pad = function(t, e, n, i) {}, t
  }()
}, function(t, e) {
  var n = {
      single_request: !0,
      positions: {
        top: {
          slot_id: "top",
          sizes: [
            [728, 90],
            [970, 66],
            [970, 250],
            [970, 90],
            [7, 1],
            [1, 1], "fluid"
          ],
          params: {
            hero: "true"
          }
        },
        topx: {
          slot_id: "topx",
          sizes: [
            [728, 90],
            [970, 66],
            [970, 250],
            [970, 90],
            [1, 1], "fluid"
          ],
          incremental: !0
        },
        rec: {
          slot_id: "rec",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ]
        },
        recx: {
          slot_id: "recx",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ],
          incremental: !0
        },
        moreon: {
          slot_id: "moreon",
          sizes: [
            [820, 236],
            [620, 529],
            [300, 250],
            [620, 236], "fluid"
          ],
          incremental: !0
        },
        "spon-logo": {
          slot_id: "spon-logo",
          sizes: [
            [120, 40],
            [300, 170],
            [300, 100],
            [1, 1]
          ]
        },
        bottom: {
          slot_id: "bottom",
          sizes: [
            [728, 90],
            [970, 250],
            [1, 1], "fluid"
          ]
        },
        "ntv-home": {
          slot_id: "ntv-home",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "QLWstPVbbpcwuyqK5ijhxZvL"
          }
        },
        "ntv-deskchannel": {
          slot_id: "ntv-deskchannel",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "e5tSBXbDmvyVwXbVB7dymzCc"
          },
          incremental: !0
        }
      },
      amazonSlots: [{
        slotID: "rec",
        sizes: [
          [300, 250]
        ]
      }, {
        slotID: "recx",
        sizes: [
          [300, 250]
        ]
      }, {
        slotID: "top",
        sizes: [
          [728, 90],
          [970, 250]
        ]
      }, {
        slotID: "topx",
        sizes: [
          [728, 90],
          [970, 250]
        ]
      }, {
        slotID: "bottom",
        sizes: [
          [728, 90],
          [970, 250]
        ]
      }]
    },
    i = {
      mobile: !0,
      safe_frame: !0,
      single_request: !0,
      positions: {
        artbottom: {
          slot_id: "artbottom",
          sizes: [
            [1, 1], "fluid"
          ]
        },
        inread: {
          slot_id: "inread",
          sizes: [
            [600, 575],
            [1, 1], "fluid"
          ]
        },
        "mob-logo": {
          slot_id: "mob-logo",
          sizes: [
            [300, 50],
            [300, 75],
            [1, 1], "fluid"
          ]
        },
        mobile: {
          slot_id: "mobile",
          sizes: [
            [300, 50],
            [320, 50],
            [7, 1],
            [1, 1], "fluid"
          ],
          params: {
            hero: "true"
          }
        },
        mobilerec: {
          slot_id: "mobilerec",
          sizes: [
            [300, 250],
            [300, 251],
            [300, 50],
            [320, 50],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "13b84c32"
          }
        },
        mobileint: {
          slot_id: "mobileint",
          sizes: [
            [320, 480],
            [300, 600],
            [300, 250],
            [300, 50],
            [320, 50],
            [1, 1], "fluid"
          ],
          incremental: !0
        },
        mobilex: {
          slot_id: "mobilex",
          sizes: [
            [300, 250],
            [300, 50],
            [320, 50],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "13b84c32"
          },
          incremental: !0
        },
        "ntv-article": {
          slot_id: "ntv-article",
          sizes: [
            [300, 250],
            [300, 50],
            [320, 50],
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "twzGG8q5aVPXGmiCccciYeT7"
          }
        },
        "ntv-contentm": {
          slot_id: "ntv-contentm",
          sizes: [
            [1, 1]
          ],
          params: {
            strnativekey: "6kez5JUH4RdqUg4xdkwSNADy"
          }
        },
        "ntv-mobhome": {
          slot_id: "ntv-mobhome",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "QLWstPVbbpcwuyqK5ijhxZvL"
          }
        },
        "ntv-mobchannel": {
          slot_id: "ntv-mobchannel",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "e5tSBXbDmvyVwXbVB7dymzCc"
          },
          incremental: !0
        },
        rec: {
          slot_id: "rec",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ]
        },
        recx: {
          slot_id: "recx",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ]
        },
        "spon-logo": {
          slot_id: "spon-logo",
          sizes: [
            [120, 40],
            [300, 170],
            [300, 100],
            [1, 1]
          ]
        },
        mobsearch: {
          slot_id: "mobsearch",
          sizes: [
            [300, 250],
            [1, 1], "fluid"
          ],
          incremental: !0
        }
      },
      amazonSlots: [{
        slotID: "mobileint",
        sizes: [
          [320, 50],
          [300, 50]
        ]
      }, {
        slotID: "mobile",
        sizes: [
          [320, 50]
        ]
      }, {
        slotID: "mobilerec",
        sizes: [
          [300, 250],
          [320, 50]
        ]
      }, {
        slotID: "mobilex",
        sizes: [
          [300, 250],
          [320, 50]
        ]
      }]
    };
  t.exports = {
    desktopAdConfig: n,
    mobileAdConfig: i
  }
}, function(t, e, n) {
  "use strict";

  function i() {
    return -1 !== document.cookie.indexOf("forbes_ab")
  }

  function r() {}

  function o() {
    var t = void 0;
    return i() && (t = r() ? "on" : "off"), t
  }
  n.d(e, "a", function() {
    return o
  });
  var s = n(0)
}, function(t, e, n) {
  "use strict";

  function i() {
    var t = document.createElement("a");
    t.id = "borderTab";
    var e = document.createElement("div");
    e.id = "teconsent";
    var n = document.createElement("script");
    n.src = "//consent.truste.com/notice?domain=forbes.com&c=teconsent&behavior=expressed", e.appendChild(n), t.appendChild(e), document.body.appendChild(t)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(0);
  document.addEventListener("DOMContentLoaded", function() {
    if (r.p && -1 === document.cookie.indexOf("notice_gdpr_prefs=")) {
      i();
      var t = (window.forbes["simple-site"].tracking || {}).fastSu || "",
        e = document.createElement("img");
      e.width = 1, e.height = 1, e.alt = "", e.src = "https://www.google-analytics.com/collect?v=1&tid=UA-5883199-3&cid=0&t=event&ec=gdpr&ea=consent&aip=&dl=" + encodeURIComponent(t), document.body.appendChild(e)
    }
  })
}, function(t, e, n) {
  "use strict";

  function i(t) {}

  function r(t) {}

  function o(t) {}

  function s(t) {}

  function a(t) {}

  function c(t) {}

  function u(t) {}

  function l(t) {}

  function f(t) {}

  function d(t) {}

  function h(t) {}

  function p() {
    return this.bodyUsed = !1, this._initBody = function(t) {}, E.blob && (this.blob = function() {}, this.arrayBuffer = function() {}), this.text = function() {}, E.formData && (this.formData = function() {}), this.json = function() {}, this
  }

  function v(t) {}

  function g(t, e) {}

  function y(t) {}

  function m(t) {}

  function b(t, e) {}

  function w(t, e) {}
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Headers = a, e.Request = g, e.Response = b, n.d(e, "DOMException", function() {}), e.fetch = w;
  var E = {
    searchParams: "URLSearchParams" in self,
    iterable: "Symbol" in self && "iterator" in Symbol,
    blob: "FileReader" in self && "Blob" in self && function() {
      try {
        return new Blob, !0
      } catch (t) {
        return !1
      }
    }(),
    formData: "FormData" in self,
    arrayBuffer: "ArrayBuffer" in self
  };
  if (E.arrayBuffer) var S = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
    _ = ArrayBuffer.isView || function(t) {};
  a.prototype.append = function(t, e) {}, a.prototype.delete = function(t) {}, a.prototype.get = function(t) {}, a.prototype.has = function(t) {}, a.prototype.set = function(t, e) {}, a.prototype.forEach = function(t, e) {}, a.prototype.keys = function() {}, a.prototype.values = function() {}, a.prototype.entries = function() {}, E.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
  var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  g.prototype.clone = function() {}, p.call(g.prototype), p.call(b.prototype), b.prototype.clone = function() {}, b.error = function() {};
  var x = [301, 302, 303, 307, 308];
  b.redirect = function(t, e) {};
  var A = self.DOMException;
  try {
    new A
  } catch (t) {
    A = function(t, e) {}, A.prototype = Object.create(Error.prototype), A.prototype.constructor = A
  }
  w.polyfill = !0, self.fetch || (self.fetch = w, self.Headers = a, self.Request = g, self.Response = b)
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(0);
  document.addEventListener("DOMContentLoaded", function() {
    i.y.isE2E && (window.isE2EBootstrapped = !0)
  })
}]);
//# sourceMappingURL=common-6168c99b3728dab8d339.js.map