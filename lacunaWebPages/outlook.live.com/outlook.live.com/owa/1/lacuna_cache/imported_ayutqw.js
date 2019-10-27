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
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[240:343]", functionData => eval(functionData))} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};

  function p(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[701:825]", functionData => eval(functionData))}
  var q = "3.2.1",
    r = function(a, b) {
      return new r.fn.init(a, b)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1017:1053]", functionData => eval(functionData))};
  r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1154:1187]", functionData => eval(functionData))},
    get: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1210:1297]", functionData => eval(functionData))},
    pushStack: function(a) {
      var b = r.merge(this.constructor(), a);
      return b.prevObject = this, b
    },
    each: function(a) {
      return r.each(this, a)
    },
    map: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1498:1603]", functionData => eval(functionData))},
    slice: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1627:1688]", functionData => eval(functionData))},
    first: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1712:1743]", functionData => eval(functionData))},
    last: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1766:1798]", functionData => eval(functionData))},
    eq: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1820:1950]", functionData => eval(functionData))},
    end: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[1972:2030]", functionData => eval(functionData))},
    push: h,
    sort: c.sort,
    splice: c.splice
  }, r.extend = r.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, r.extend({
    expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[2827:2859]", functionData => eval(functionData))},
    noop: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[2882:2884]", functionData => eval(functionData))},
    isFunction: function(a) {
      return "function" === r.type(a)
    },
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[3064:3173]", functionData => eval(functionData))},
    isPlainObject: function(a) {
      var b, c;
      return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
    },
    isEmptyObject: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[3427:3493]", functionData => eval(functionData))},
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[3673:3691]", functionData => eval(functionData))},
    camelCase: function(a) {
      return a.replace(t, "ms-").replace(u, v)
    },
    each: function(a, b) {
      var c, d = 0;
      if (w(a)) {
        for (c = a.length; d < c; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[4059:4120]", functionData => eval(functionData))},
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
    },
    inArray: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[4319:4372]", functionData => eval(functionData))},
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[4544:4675]", functionData => eval(functionData))},
    map: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[4704:4951]", functionData => eval(functionData))},
    guid: 1,
    proxy: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[4992:5257]", functionData => eval(functionData))},
    now: Date.now,
    support: o
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    j["[object " + b + "]"] = b.toLowerCase()
  });

  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
  }
  var x = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[6176:6289]", functionData => eval(functionData))},
      J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
      N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[8024:8197]", functionData => eval(functionData))},
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[8291:8424]", functionData => eval(functionData))},
      da = function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[8448:8469]", functionData => eval(functionData))},
      ea = ta(function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[8497:8572]", functionData => eval(functionData))}, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
    } catch (fa) {
      G = {
        apply: D.length ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[8805:8848]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[8866:8986]", functionData => eval(functionData))}
      }
    }

    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a)))
          if (f = l[1]) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
          }
          if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d
          } catch (x) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(P, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[10963:11061]", functionData => eval(functionData))}

    function la(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[11085:11330]", functionData => eval(functionData))}

    function ma(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[11378:11474]", functionData => eval(functionData))}
    }

    function na(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[11528:11644]", functionData => eval(functionData))}
    }

    function oa(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[11698:11973]", functionData => eval(functionData))}
    }

    function pa(a) {
      return ia(function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[12030:12221]", functionData => eval(functionData))})
    }

    function qa(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[12249:12324]", functionData => eval(functionData))}
    c = ga.support = {}, f = ga.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName
    }, m = ga.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function(a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.filter.ID = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[13315:13441]", functionData => eval(functionData))}, d.find.ID = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[13470:13617]", functionData => eval(functionData))}) : (d.filter.ID = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[13648:13854]", functionData => eval(functionData))}, d.find.ID = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[13883:14295]", functionData => eval(functionData))}), d.find.TAG = c.getElementsByTagName ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[14351:14489]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[14507:14728]", functionData => eval(functionData))}, d.find.CLASS = c.getElementsByClassName && function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[14788:14897]", functionData => eval(functionData))}, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function(a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[16496:16746]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[16764:16877]", functionData => eval(functionData))}, B = b ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[16902:17347]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[17365:17901]", functionData => eval(functionData))}, n) : n
    }, ga.matches = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[17945:17986]", functionData => eval(functionData))}, ga.matchesSelector = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[18024:18382]", functionData => eval(functionData))}, ga.contains = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[18413:18479]", functionData => eval(functionData))}, ga.attr = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[18506:18814]", functionData => eval(functionData))}, ga.escape = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[18840:18885]", functionData => eval(functionData))}, ga.error = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[18910:18986]", functionData => eval(functionData))}, ga.uniqueSort = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[19016:19287]", functionData => eval(functionData))}, e = ga.getText = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[19318:19705]", functionData => eval(functionData))}, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[20168:20334]", functionData => eval(functionData))},
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
        },
        PSEUDO: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[20650:20927]", functionData => eval(functionData))}
      },
      filter: {
        TAG: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[20978:21207]", functionData => eval(functionData))},
        CLASS: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[21236:21536]", functionData => eval(functionData))},
        ATTR: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[21570:22014]", functionData => eval(functionData))},
        CHILD: function(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[22055:23836]", functionData => eval(functionData))},
        PSEUDO: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[23869:24319]", functionData => eval(functionData))}
      },
      pseudos: {
        not: ia(function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[24374:24760]", functionData => eval(functionData))}),
        has: ia(function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[24791:24884]", functionData => eval(functionData))}),
        contains: ia(function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[24920:25086]", functionData => eval(functionData))}),
        lang: ia(function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[25118:25543]", functionData => eval(functionData))}),
        target: function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[25574:25676]", functionData => eval(functionData))},
        root: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[25704:25740]", functionData => eval(functionData))},
        focus: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[25769:25891]", functionData => eval(functionData))},
        enabled: oa(!1),
        disabled: oa(!0),
        checked: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[25973:26108]", functionData => eval(functionData))},
        selected: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[26140:26230]", functionData => eval(functionData))},
        empty: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[26259:26388]", functionData => eval(functionData))},
        parent: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[26418:26466]", functionData => eval(functionData))},
        header: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[26496:26543]", functionData => eval(functionData))},
        input: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[26572:26619]", functionData => eval(functionData))},
        button: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[26649:26776]", functionData => eval(functionData))},
        text: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[26804:26979]", functionData => eval(functionData))},
        first: pa(function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[27010:27042]", functionData => eval(functionData))}),
        last: pa(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[27077:27113]", functionData => eval(functionData))}),
        eq: pa(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[27149:27197]", functionData => eval(functionData))}),
        even: pa(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[27232:27314]", functionData => eval(functionData))}),
        odd: pa(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[27348:27430]", functionData => eval(functionData))}),
        lt: pa(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[27466:27560]", functionData => eval(functionData))}),
        gt: pa(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[27596:27689]", functionData => eval(functionData))})
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

    function ra() {}
    ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(P, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };

    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d
    }

    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first ? function(b, c, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[29064:29172]", functionData => eval(functionData))} : function(b, c, i) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[29193:29749]", functionData => eval(functionData))}
    }

    function ua(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[29776:29951]", functionData => eval(functionData))}

    function va(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[29978:30064]", functionData => eval(functionData))}

    function wa(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[30097:30257]", functionData => eval(functionData))}

    function xa(a, b, c, d, e, f) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[30293:31236]", functionData => eval(functionData))}

    function ya(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[31257:32200]", functionData => eval(functionData))}

    function za(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[32224:33414]", functionData => eval(functionData))}
    return h = ga.compile = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[33458:33711]", functionData => eval(functionData))}, i = ga.select = function(a, b, c, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[33750:34660]", functionData => eval(functionData))}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
    }), ja(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[35021:35103]", functionData => eval(functionData))}), c.attributes && ja(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[35300:35383]", functionData => eval(functionData))}), ja(function(a) {
      return null == a.getAttribute("disabled")
    }) || ka(J, function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[35485:35618]", functionData => eval(functionData))}), ga
  }(a);
  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
  var y = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[35862:36067]", functionData => eval(functionData))},
    z = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[36092:36201]", functionData => eval(functionData))},
    A = r.expr.match.needsContext;

  function B(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[36258:36333]", functionData => eval(functionData))}
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;

  function E(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[36460:36875]", functionData => eval(functionData))}
  r.filter = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[36907:37130]", functionData => eval(functionData))}, r.fn.extend({
    find: function(a) {
      var b, c, d = this.length,
        e = this;
      if ("string" != typeof a) return this.pushStack(r(a).filter(function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[37298:37387]", functionData => eval(functionData))}));
      for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
      return d > 1 ? r.uniqueSort(c) : c
    },
    filter: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[37537:37594]", functionData => eval(functionData))},
    not: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[37617:37674]", functionData => eval(functionData))},
    is: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[37696:37789]", functionData => eval(functionData))}
  });
  var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = r.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || F, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
            for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
      }
      return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    };
  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/,
    J = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  r.fn.extend({
    has: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[38917:39103]", functionData => eval(functionData))},
    closest: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[39133:39580]", functionData => eval(functionData))},
    index: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[39605:39779]", functionData => eval(functionData))},
    add: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[39805:39884]", functionData => eval(functionData))},
    addBack: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[39911:39997]", functionData => eval(functionData))}
  });

  function K(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40024:40086]", functionData => eval(functionData))}
  r.each({
    parent: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40122:40204]", functionData => eval(functionData))},
    parents: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40231:40270]", functionData => eval(functionData))},
    parentsUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40308:40350]", functionData => eval(functionData))},
    next: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40374:40414]", functionData => eval(functionData))},
    prev: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40438:40482]", functionData => eval(functionData))},
    nextAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40509:40549]", functionData => eval(functionData))},
    prevAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40576:40620]", functionData => eval(functionData))},
    nextUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40655:40698]", functionData => eval(functionData))},
    prevUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40733:40780]", functionData => eval(functionData))},
    siblings: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40808:40866]", functionData => eval(functionData))},
    children: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40894:40930]", functionData => eval(functionData))},
    contents: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[40958:41085]", functionData => eval(functionData))}
  }, function(a, b) {
    r.fn[a] = function(c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[41137:41367]", functionData => eval(functionData))}
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function M(a) {
    var b = {};
    return r.each(a.match(L) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  r.Callbacks = function(a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            r.each(b, function(b, c) {
              r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[42333:42514]", functionData => eval(functionData))},
        has: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[42541:42609]", functionData => eval(functionData))},
        empty: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[42637:42685]", functionData => eval(functionData))},
        disable: function() {
          return e = g = [], f = c = "", this
        },
        disabled: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[42803:42834]", functionData => eval(functionData))},
        lock: function() {
          return e = g = [], c || b || (f = c = ""), this
        },
        locked: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[42959:42991]", functionData => eval(functionData))},
        fireWith: function(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function() {
          return j.fireWith(this, arguments), this
        },
        fired: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[43251:43283]", functionData => eval(functionData))}
      };
    return j
  };

  function N(a) {
    return a
  }

  function O(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[43364:43381]", functionData => eval(functionData))}

  function P(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[43408:43634]", functionData => eval(functionData))}
  r.extend({
    Deferred: function(b) {
      var c = [
          ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
          ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
        ],
        d = "pending",
        e = {
          state: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[44053:44087]", functionData => eval(functionData))},
          always: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[44118:44190]", functionData => eval(functionData))},
          "catch": function(a) {
            return e.then(null, a)
          },
          pipe: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[44300:44809]", functionData => eval(functionData))},
          then: function(b, d, e) {
            var f = 0;

            function g(b, c, d, e) {
              return function() {
                var h = this,
                  i = arguments,
                  j = function() {
                    var a, j;
                    if (!(b < f)) {
                      if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                      j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                    }
                  },
                  k = e ? j : function() {
                    try {
                      j()
                    } catch (a) {
                      r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                    }
                  };
                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
              }
            }
            return r.Deferred(function(a) {
              c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
            }).promise()
          },
          promise: function(a) {
            return null != a ? r.extend(a, e) : e
          }
        },
        f = {};
      return r.each(c, function(a, b) {
        var g = b[2],
          h = b[5];
        e[b[1]] = g.add, h && g.add(function() {
          d = h
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[46639:46729]", functionData => eval(functionData))}, f[b[0] + "With"] = g.fireWith
      }), e.promise(f), b && b.call(f, f), f
    },
    when: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[46835:47362]", functionData => eval(functionData))}
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function(b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[47481:47614]", functionData => eval(functionData))}, r.readyException = function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[47647:47703]", functionData => eval(functionData))};
  var R = r.Deferred();
  r.fn.ready = function(a) {
    return R.then(a)["catch"](function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[47800:47833]", functionData => eval(functionData))}), this
  }, r.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
    }
  }), r.ready.then = R.then;

  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S), r.ready()
  }
  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[48730:48774]", functionData => eval(functionData))})), b))
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    U = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

  function V() {
    this.expando = r.expando + V.uid++
  }
  V.uid = 1, V.prototype = {
    cache: function(a) {
      var b = a[this.expando];
      return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    },
    set: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[49365:49532]", functionData => eval(functionData))},
    get: function(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
    },
    access: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[49692:49831]", functionData => eval(functionData))},
    remove: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[49860:50241]", functionData => eval(functionData))},
    hasData: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[50268:50355]", functionData => eval(functionData))}
  };
  var W = new V,
    X = new V,
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;

  function $(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[50469:50593]", functionData => eval(functionData))}

  function _(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[50617:50898]", functionData => eval(functionData))}
  r.extend({
    hasData: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[50937:50986]", functionData => eval(functionData))},
    data: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[51016:51054]", functionData => eval(functionData))},
    removeData: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[51087:51115]", functionData => eval(functionData))},
    _data: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[51146:51184]", functionData => eval(functionData))},
    _removeData: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[51218:51246]", functionData => eval(functionData))}
  }), r.fn.extend({
    data: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[51292:52094]", functionData => eval(functionData))},
    removeData: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[52124:52202]", functionData => eval(functionData))}
  }), r.extend({
    queue: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[52249:52421]", functionData => eval(functionData))},
    dequeue: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[52451:52802]", functionData => eval(functionData))},
    _queueHooks: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[52836:53039]", functionData => eval(functionData))}
  }), r.fn.extend({
    queue: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[53086:53397]", functionData => eval(functionData))},
    dequeue: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[53424:53503]", functionData => eval(functionData))},
    clearQueue: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[53533:53579]", functionData => eval(functionData))},
    promise: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[53609:53969]", functionData => eval(functionData))}
  });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[54167:54320]", functionData => eval(functionData))},
    ea = function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[54352:54524]", functionData => eval(functionData))};

  function fa(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[54553:55147]", functionData => eval(functionData))}
  var ga = {};

  function ha(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[55181:55420]", functionData => eval(functionData))}

  function ia(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[55442:55838]", functionData => eval(functionData))}
  r.fn.extend({
    show: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[55876:55909]", functionData => eval(functionData))},
    hide: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[55932:55961]", functionData => eval(functionData))},
    toggle: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[55987:56146]", functionData => eval(functionData))}
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

  function na(a, b) {
    var c;
    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
  }

  function oa(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[56982:57092]", functionData => eval(functionData))}
  var pa = /<|&#?\w+;/;

  function qa(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[57147:58023]", functionData => eval(functionData))}! function() {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;

  function va() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[58611:58630]", functionData => eval(functionData))}

  function wa() {
    return !1
  }

  function xa() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[58685:58748]", functionData => eval(functionData))}

  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) ya(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[59189:59246]", functionData => eval(functionData))}, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
      r.event.add(this, b, e, d, c)
    })
  }
  r.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
      if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(L) || [""], j = b.length;
        while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && r.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
      }
    },
    remove: function(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[60695:61703]", functionData => eval(functionData))},
    dispatch: function(a) {
      var b = r.event.fix(a),
        c, d, e, f, g, h, i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g, h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
            f.length && h.push({
              elem: j,
              handlers: f
            })
          } return j = this, i < b.length && h.push({
        elem: j,
        handlers: b.slice(i)
      }), h
    },
    addProp: function(a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b) ? function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[63587:63661]", functionData => eval(functionData))} : function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[63675:63749]", functionData => eval(functionData))},
        set: function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[63776:63948]", functionData => eval(functionData))}
      })
    },
    fix: function(a) {
      return a[r.expando] ? a : new r.Event(a)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[64144:64222]", functionData => eval(functionData))},
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[64307:64383]", functionData => eval(functionData))},
        delegateType: "focusout"
      },
      click: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[64470:64579]", functionData => eval(functionData))},
        _default: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[64611:64656]", functionData => eval(functionData))}
      },
      beforeunload: {
        postDispatch: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[64722:64826]", functionData => eval(functionData))}
      }
    }
  }, r.removeEvent = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[64880:64942]", functionData => eval(functionData))}, r.Event = function(a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
  }, r.Event.prototype = {
    constructor: r.Event,
    isDefaultPrevented: wa,
    isPropagationStopped: wa,
    isImmediatePropagationStopped: wa,
    isSimulated: !1,
    preventDefault: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[65678:65800]", functionData => eval(functionData))},
    stopPropagation: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[65834:65959]", functionData => eval(functionData))},
    stopImmediatePropagation: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[66002:66169]", functionData => eval(functionData))}
  }, r.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[66714:66935]", functionData => eval(functionData))}
  }, r.event.addProp), r.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    r.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[67206:67426]", functionData => eval(functionData))}
    }
  }), r.fn.extend({
    on: function(a, b, c, d) {
      return ya(this, a, b, c, d)
    },
    one: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[67555:67599]", functionData => eval(functionData))},
    off: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[67628:68105]", functionData => eval(functionData))}
  });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ea(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[68396:68504]", functionData => eval(functionData))}

  function Fa(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[68523:68600]", functionData => eval(functionData))}

  function Ga(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[68619:68713]", functionData => eval(functionData))}

  function Ha(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[68735:69105]", functionData => eval(functionData))}

  function Ia(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[69127:69304]", functionData => eval(functionData))}

  function Ja(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[69332:70237]", functionData => eval(functionData))}

  function Ka(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[70262:70508]", functionData => eval(functionData))}
  r.extend({
    htmlPrefilter: function(a) {
      return a.replace(za, "<$1></$2>")
    },
    clone: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[70631:71127]", functionData => eval(functionData))},
    cleanData: function(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events)
              for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0
          }
          c[X.expando] && (c[X.expando] = void 0)
        }
    }
  }), r.fn.extend({
    detach: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[71569:71605]", functionData => eval(functionData))},
    remove: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[71631:71663]", functionData => eval(functionData))},
    text: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[71687:71955]", functionData => eval(functionData))},
    append: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[71980:72193]", functionData => eval(functionData))},
    prepend: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[72219:72447]", functionData => eval(functionData))},
    before: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[72472:72600]", functionData => eval(functionData))},
    after: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[72624:72764]", functionData => eval(functionData))},
    empty: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[72788:72932]", functionData => eval(functionData))},
    clone: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[72960:73089]", functionData => eval(functionData))},
    html: function(a) {
      return T(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);
          try {
            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[73715:73920]", functionData => eval(functionData))}
  }), r.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    r.fn[a] = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[74118:74303]", functionData => eval(functionData))}
  });
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function(b) {
      var c = b.ownerDocument.defaultView;
      return c && c.opener || (c = a), c.getComputedStyle(b)
    };
  ! function() {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
        var b = a.getComputedStyle(i);
        c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
      }
    }
    var c, e, f, g, h = d.createElement("div"),
      i = d.createElement("div");
    i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
      pixelPosition: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[75382:75413]", functionData => eval(functionData))},
      boxSizingReliable: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[75451:75482]", functionData => eval(functionData))},
      pixelMarginRight: function() {
        return b(), f
      },
      reliableMarginLeft: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[75589:75620]", functionData => eval(functionData))}
    }))
  }();

  function Oa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function Pa(a, b) {
    return {
      get: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[76116:76207]", functionData => eval(functionData))}
    }
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ta = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;

  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--)
      if (a = Ua[c] + b, a in Va) return a
  }

  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b
  }

  function Ya(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[76815:76909]", functionData => eval(functionData))}

  function Za(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[76940:77372]", functionData => eval(functionData))}

  function $a(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[77397:77740]", functionData => eval(functionData))}
  r.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[77815:77933]", functionData => eval(functionData))}
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[78327:79021]", functionData => eval(functionData))},
    css: function(a, b, c, d) {
      var e, f, g, h = r.camelCase(b),
        i = Ra.test(b);
      return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), r.each(["height", "width"], function(a, b) {
    r.cssHooks[b] = {
      get: function(a, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[79490:79694]", functionData => eval(functionData))},
      set: function(a, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[79725:79961]", functionData => eval(functionData))}
    }
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[80038:80237]", functionData => eval(functionData))}), r.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    r.cssHooks[a + b] = {
      expand: function(c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[80376:80538]", functionData => eval(functionData))}
    }, La.test(a) || (r.cssHooks[a + b].set = Ya)
  }), r.fn.extend({
    css: function(a, b) {
      return T(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
      }, a, b, arguments.length > 1)
    }
  });

  function _a(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[81005:81058]", functionData => eval(functionData))}
  r.Tween = _a, _a.prototype = {
    constructor: _a,
    init: function(a, b, c, d, e, f) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[81150:81345]", functionData => eval(functionData))},
    cur: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[81367:81485]", functionData => eval(functionData))},
    run: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[81508:81900]", functionData => eval(functionData))}
  }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
    _default: {
      get: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[82006:82203]", functionData => eval(functionData))},
      set: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[82228:82444]", functionData => eval(functionData))}
    }
  }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
    set: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[82530:82608]", functionData => eval(functionData))}
  }, r.easing = {
    linear: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[82651:82673]", functionData => eval(functionData))},
    swing: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[82698:82749]", functionData => eval(functionData))},
    _default: "swing"
  }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab, bb, cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;

  function eb() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[82906:83043]", functionData => eval(functionData))}

  function fb() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[83061:83142]", functionData => eval(functionData))}

  function gb(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function hb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[83390:83540]", functionData => eval(functionData))}

  function ib(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[83565:85441]", functionData => eval(functionData))}

  function jb(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[85463:85799]", functionData => eval(functionData))}

  function kb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[85824:87608]", functionData => eval(functionData))}
  r.Animation = r.extend(kb, {
      tweeners: {
        "*": [function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[87687:87789]", functionData => eval(functionData))}]
      },
      tweener: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[87830:88030]", functionData => eval(functionData))},
      prefilters: [ib],
      prefilter: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[88088:88158]", functionData => eval(functionData))}
    }), r.speed = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[88195:88778]", functionData => eval(functionData))}, r.fn.extend({
      fadeTo: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[88829:88951]", functionData => eval(functionData))},
      animate: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[88989:89300]", functionData => eval(functionData))},
      stop: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[89332:90013]", functionData => eval(functionData))},
      finish: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[90041:90588]", functionData => eval(functionData))}
    }), r.each(["toggle", "show", "hide"], function(a, b) {
      var c = r.fn[b];
      r.fn[b] = function(a, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[90706:90827]", functionData => eval(functionData))}
    }), r.each({
      slideDown: gb("show"),
      slideUp: gb("hide"),
      slideToggle: gb("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      r.fn[a] = function(a, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[91145:91194]", functionData => eval(functionData))}
    }), r.timers = [], r.fx.tick = function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[91241:91426]", functionData => eval(functionData))}, r.fx.timer = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[91453:91497]", functionData => eval(functionData))}, r.fx.interval = 13, r.fx.start = function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[91543:91578]", functionData => eval(functionData))}, r.fx.stop = function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[91603:91626]", functionData => eval(functionData))}, r.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, r.fn.delay = function(b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[91733:91948]", functionData => eval(functionData))},
    function() {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
    }();
  var lb, mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[92455:92537]", functionData => eval(functionData))}
  }), r.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
        null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[93151:93336]", functionData => eval(functionData))}
      }
    },
    removeAttr: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[93383:93520]", functionData => eval(functionData))}
  }), lb = {
    set: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[93561:93637]", functionData => eval(functionData))}
  }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = mb[b] || r.find.attr;
    mb[b] = function(a, b, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[93771:93905]", functionData => eval(functionData))}
  });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[94029:94093]", functionData => eval(functionData))},
    removeProp: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[94123:94214]", functionData => eval(functionData))}
  }), r.extend({
    prop: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[94260:94560]", functionData => eval(functionData))},
    propHooks: {
      tabIndex: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[94622:94780]", functionData => eval(functionData))}
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), o.optSelected || (r.propHooks.selected = {
    get: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[94938:95040]", functionData => eval(functionData))},
    set: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[95063:95171]", functionData => eval(functionData))}
  }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    r.propFix[this.toLowerCase()] = this
  });

  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ")
  }

  function qb(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }
  r.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[95678:95739]", functionData => eval(functionData))});
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[96240:96304]", functionData => eval(functionData))});
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    toggleClass: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[96811:97481]", functionData => eval(functionData))},
    hasClass: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[97509:97692]", functionData => eval(functionData))}
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[97754:98520]", functionData => eval(functionData))}
  }), r.extend({
    valHooks: {
      option: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[98595:98696]", functionData => eval(functionData))}
      },
      select: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[98747:99215]", functionData => eval(functionData))},
        set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[99245:99501]", functionData => eval(functionData))}
      }
    }
  }), r.each(["radio", "checkbox"], function() {
    r.valHooks[this] = {
      set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[99616:99704]", functionData => eval(functionData))}
    }, o.checkOn || (r.valHooks[this].get = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[99761:99831]", functionData => eval(functionData))})
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function(b, c, e, f) {
      var g, h, i, j, k, m, n, o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
          i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
      }
    },
    simulate: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[101588:101721]", functionData => eval(functionData))}
  }), r.fn.extend({
    trigger: function(a, b) {
      return this.each(function() {
        r.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[101895:101974]", functionData => eval(functionData))}
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
    r.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), r.fn.extend({
    hover: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[102361:102419]", functionData => eval(functionData))}
  }), o.focusin = "onfocusin" in a, o.focusin || r.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[102567:102626]", functionData => eval(functionData))};
    r.event.special[b] = {
      setup: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[102679:102834]", functionData => eval(functionData))},
      teardown: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[102863:103032]", functionData => eval(functionData))}
    }
  });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[103128:103400]", functionData => eval(functionData))};
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[103565:103863]", functionData => eval(functionData))}
  r.param = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[103891:104278]", functionData => eval(functionData))}, r.fn.extend({
    serialize: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[104320:104371]", functionData => eval(functionData))},
    serializeArray: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[104404:105050]", functionData => eval(functionData))}
  });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;

  function Mb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Nb(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[105730:106071]", functionData => eval(functionData))}

  function Ob(a, b) {
    var c, d, e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a
  }

  function Pb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[106289:106834]", functionData => eval(functionData))}

  function Qb(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[106862:107849]", functionData => eval(functionData))}
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function(b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[108954:113543]", functionData => eval(functionData))},
    getJSON: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[113576:113619]", functionData => eval(functionData))},
    getScript: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[113651:113701]", functionData => eval(functionData))}
  }), r.each(["get", "post"], function(a, b) {
    r[b] = function(a, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[113781:113996]", functionData => eval(functionData))}
  }), r._evalUrl = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[114028:114190]", functionData => eval(functionData))}, r.fn.extend({
    wrapAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[114231:114562]", functionData => eval(functionData))},
    wrapInner: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[114591:114838]", functionData => eval(functionData))},
    wrap: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[114862:114995]", functionData => eval(functionData))},
    unwrap: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[115021:115146]", functionData => eval(functionData))}
  }), r.expr.pseudos.hidden = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[115189:115232]", functionData => eval(functionData))}, r.expr.pseudos.visible = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[115271:115352]", functionData => eval(functionData))}, r.ajaxSettings.xhr = function() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  };
  var Rb = {
      0: 200,
      1223: 204
    },
    Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[115629:117064]", functionData => eval(functionData))}), r.ajaxPrefilter(function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[117095:117146]", functionData => eval(functionData))}), r.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[117405:117448]", functionData => eval(functionData))}
    }
  }), r.ajaxPrefilter("script", function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[117499:117580]", functionData => eval(functionData))}), r.ajaxTransport("script", function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[117621:118059]", functionData => eval(functionData))});
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[118176:118262]", functionData => eval(functionData))}
  }), r.ajaxPrefilter("json jsonp", function(b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[118317:119161]", functionData => eval(functionData))}), o.createHTMLDocument = function() {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), r.parseHTML = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[119378:119799]", functionData => eval(functionData))}, r.fn.load = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[119831:120375]", functionData => eval(functionData))}, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    r.fn[b] = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[120510:120544]", functionData => eval(functionData))}
  }), r.expr.pseudos.animated = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[120589:120676]", functionData => eval(functionData))}, r.offset = {
    setOffset: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[120724:121306]", functionData => eval(functionData))}
  }, r.fn.extend({
    offset: function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[121350:121822]", functionData => eval(functionData))},
    position: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[121849:122416]", functionData => eval(functionData))},
    offsetParent: function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[122447:122631]", functionData => eval(functionData))}
  }), r.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = "pageYOffset" === b;
    r.fn[a] = function(d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[122788:123075]", functionData => eval(functionData))}
  }), r.each(["top", "left"], function(a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[123178:123262]", functionData => eval(functionData))})
  }), r.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    r.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      r.fn[d] = function(e, f) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[123478:124033]", functionData => eval(functionData))}
    })
  }), r.fn.extend({
    bind: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[124089:124132]", functionData => eval(functionData))},
    unbind: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[124161:124202]", functionData => eval(functionData))},
    delegate: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[124239:124279]", functionData => eval(functionData))},
    undelegate: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[124315:124406]", functionData => eval(functionData))}
  }), r.holdReady = function(a) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[124439:124480]", functionData => eval(functionData))}, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[124628:124646]", functionData => eval(functionData))});
  var Vb = a.jQuery,
    Wb = a.$;
  return r.noConflict = function(b) {lacuna_lazy_load("lacuna_cache/imported_ayutqw.js[124720:124803]", functionData => eval(functionData))}, b || (a.jQuery = a.$ = r), r
});