if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
  }("undefined" != typeof window ? window : this, function(e, t) {
    var i = [],
      n = i.slice,
      s = i.concat,
      o = i.push,
      a = i.indexOf,
      r = {},
      l = r.toString,
      d = r.hasOwnProperty,
      c = {},
      u = "1.11.3",
      p = function(e, t) {
        return new p.fn.init(e, t)
      },
      h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      f = /^-ms-/,
      v = /-([\da-z])/gi,
      m = function(e, t) {
        return t.toUpperCase()
      };

    function g(e) {
      var t = "length" in e && e.length,
        i = p.type(e);
      return "function" !== i && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    p.fn = p.prototype = {
      jquery: u,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function() {
        return n.call(this)
      },
      get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : n.call(this)
      },
      pushStack: function(e) {
        var t = p.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e, t) {
        return p.each(this, e, t)
      },
      map: function(e) {
        return this.pushStack(p.map(this, function(t, i) {
          return e.call(t, i, t)
        }))
      },
      slice: function() {
        return this.pushStack(n.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          i = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= i && i < t ? [this[i]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: o,
      sort: i.sort,
      splice: i.splice
    }, p.extend = p.fn.extend = function() {
      var e, t, i, n, s, o, a = arguments[0] || {},
        r = 1,
        l = arguments.length,
        d = !1;
      for ("boolean" == typeof a && (d = a, a = arguments[r] || {}, r++), "object" == typeof a || p.isFunction(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
        if (null != (s = arguments[r]))
          for (n in s) e = a[n], a !== (i = s[n]) && (d && i && (p.isPlainObject(i) || (t = p.isArray(i))) ? (t ? (t = !1, o = e && p.isArray(e) ? e : []) : o = e && p.isPlainObject(e) ? e : {}, a[n] = p.extend(d, o, i)) : void 0 !== i && (a[n] = i));
      return a
    }, p.extend({
      expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === p.type(e)
      },
      isArray: Array.isArray || function(e) {
        return "array" === p.type(e)
      },
      isWindow: function(e) {
        return null != e && e == e.window
      },
      isNumeric: function(e) {
        return !p.isArray(e) && 0 <= e - parseFloat(e) + 1
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      isPlainObject: function(e) {
        var t;
        if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
        try {
          if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
          return !1
        }
        if (c.ownLast)
          for (t in e) return d.call(e, t);
        for (t in e);
        return void 0 === t || d.call(e, t)
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[l.call(e)] || "object" : typeof e
      },
      globalEval: function(t) {
        t && p.trim(t) && (e.execScript || function(t) {
          e.eval.call(e, t)
        })(t)
      },
      camelCase: function(e) {
        return e.replace(f, "ms-").replace(v, m)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, i) {
        var n = 0,
          s = e.length,
          o = g(e);
        if (i) {
          if (o)
            for (; n < s && !1 !== t.apply(e[n], i); n++);
          else
            for (n in e)
              if (!1 === t.apply(e[n], i)) break
        } else if (o)
          for (; n < s && !1 !== t.call(e[n], n, e[n]); n++);
        else
          for (n in e)
            if (!1 === t.call(e[n], n, e[n])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(h, "")
      },
      makeArray: function(e, t) {
        var i = t || [];
        return null != e && (g(Object(e)) ? p.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)), i
      },
      inArray: function(e, t, i) {
        var n;
        if (t) {
          if (a) return a.call(t, e, i);
          for (n = t.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
            if (i in t && t[i] === e) return i
        }
        return -1
      },
      merge: function(e, t) {
        for (var i = +t.length, n = 0, s = e.length; n < i;) e[s++] = t[n++];
        if (i != i)
          for (; void 0 !== t[n];) e[s++] = t[n++];
        return e.length = s, e
      },
      grep: function(e, t, i) {
        for (var n = [], s = 0, o = e.length, a = !i; s < o; s++) !t(e[s], s) !== a && n.push(e[s]);
        return n
      },
      map: function(e, t, i) {
        var n, o = 0,
          a = e.length,
          r = [];
        if (g(e))
          for (; o < a; o++) null != (n = t(e[o], o, i)) && r.push(n);
        else
          for (o in e) null != (n = t(e[o], o, i)) && r.push(n);
        return s.apply([], r)
      },
      guid: 1,
      proxy: function(e, t) {
        var i, s, o;
        return "string" == typeof t && (o = e[t], t = e, e = o), p.isFunction(e) ? (i = n.call(arguments, 2), (s = function() {
          return e.apply(t || this, i.concat(n.call(arguments)))
        }).guid = e.guid = e.guid || p.guid++, s) : void 0
      },
      now: function() {
        return +new Date
      },
      support: c
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      r["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
      var t, i, n, s, o, a, r, l, d, c, u, p, h, f, v, m, g, y, b, w = "sizzle" + 1 * new Date,
        T = e.document,
        x = 0,
        S = 0,
        C = oe(),
        k = oe(),
        E = oe(),
        $ = function(e, t) {
          return e === t && (u = !0), 0
        },
        _ = {}.hasOwnProperty,
        M = [],
        N = M.pop,
        A = M.push,
        L = M.push,
        D = M.slice,
        z = function(e, t) {
          for (var i = 0, n = e.length; i < n; i++)
            if (e[i] === t) return i;
          return -1
        },
        I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        j = O.replace("w", "w#"),
        H = "\\[" + P + "*(" + O + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + P + "*\\]",
        B = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
        R = new RegExp(P + "+", "g"),
        F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        W = new RegExp("^" + P + "*," + P + "*"),
        q = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
        G = new RegExp(B),
        Y = new RegExp("^" + j + "$"),
        U = {
          ID: new RegExp("^#(" + O + ")"),
          CLASS: new RegExp("^\\.(" + O + ")"),
          TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + H),
          PSEUDO: new RegExp("^" + B),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + I + ")$", "i"),
          needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        },
        V = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        ee = /'|\\/g,
        te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        ie = function(e, t, i) {
          var n = "0x" + t - 65536;
          return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        ne = function() {
          p()
        };
      try {
        L.apply(M = D.call(T.childNodes), T.childNodes), M[T.childNodes.length].nodeType
      } catch (t) {
        L = {
          apply: M.length ? function(e, t) {
            A.apply(e, D.call(t))
          } : function(e, t) {
            for (var i = e.length, n = 0; e[i++] = t[n++];);
            e.length = i - 1
          }
        }
      }

      function se(e, t, n, s) {
        var o, r, d, c, u, f, g, y, x, S;
        if ((t ? t.ownerDocument || t : T) !== h && p(t), n = n || [], c = (t = t || h).nodeType, "string" != typeof e || !e || 1 !== c && 9 !== c && 11 !== c) return n;
        if (!s && v) {
          if (11 !== c && (o = Z.exec(e)))
            if (d = o[1]) {
              if (9 === c) {
                if (!(r = t.getElementById(d)) || !r.parentNode) return n;
                if (r.id === d) return n.push(r), n
              } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(d)) && b(t, r) && r.id === d) return n.push(r), n
            } else {
              if (o[2]) return L.apply(n, t.getElementsByTagName(e)), n;
              if ((d = o[3]) && i.getElementsByClassName) return L.apply(n, t.getElementsByClassName(d)), n
            } if (i.qsa && (!m || !m.test(e))) {
            if (y = g = w, x = t, S = 1 !== c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
              for (f = a(e), (g = t.getAttribute("id")) ? y = g.replace(ee, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", u = f.length; u--;) f[u] = y + ve(f[u]);
              x = K.test(e) && he(t.parentNode) || t, S = f.join(",")
            }
            if (S) try {
              return L.apply(n, x.querySelectorAll(S)), n
            } catch (e) {} finally {
              g || t.removeAttribute("id")
            }
          }
        }
        return l(e.replace(F, "$1"), t, n, s)
      }

      function oe() {
        var e = [];
        return function t(i, s) {
          return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s
        }
      }

      function ae(e) {
        return e[w] = !0, e
      }

      function re(e) {
        var t = h.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function le(e, t) {
        for (var i = e.split("|"), s = e.length; s--;) n.attrHandle[i[s]] = t
      }

      function de(e, t) {
        var i = t && e,
          n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (n) return n;
        if (i)
          for (; i = i.nextSibling;)
            if (i === t) return -1;
        return e ? 1 : -1
      }

      function ce(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }

      function ue(e) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e
        }
      }

      function pe(e) {
        return ae(function(t) {
          return t = +t, ae(function(i, n) {
            for (var s, o = e([], i.length, t), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
          })
        })
      }

      function he(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (t in i = se.support = {}, o = se.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, p = se.setDocument = function(e) {
          var t, s, a = e ? e.ownerDocument || e : T;
          return a !== h && 9 === a.nodeType && a.documentElement ? (f = (h = a).documentElement, (s = a.defaultView) && s !== s.top && (s.addEventListener ? s.addEventListener("unload", ne, !1) : s.attachEvent && s.attachEvent("onunload", ne)), v = !o(a), i.attributes = re(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), i.getElementsByTagName = re(function(e) {
            return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
          }), i.getElementsByClassName = J.test(a.getElementsByClassName), i.getById = re(function(e) {
            return f.appendChild(e).id = w, !a.getElementsByName || !a.getElementsByName(w).length
          }), i.getById ? (n.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && v) {
              var i = t.getElementById(e);
              return i && i.parentNode ? [i] : []
            }
          }, n.filter.ID = function(e) {
            var t = e.replace(te, ie);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }) : (delete n.find.ID, n.filter.ID = function(e) {
            var t = e.replace(te, ie);
            return function(e) {
              var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return i && i.value === t
            }
          }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var i, n = [],
              s = 0,
              o = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; i = o[s++];) 1 === i.nodeType && n.push(i);
              return n
            }
            return o
          }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
            return v ? t.getElementsByClassName(e) : void 0
          }, g = [], m = [], (i.qsa = J.test(a.querySelectorAll)) && (re(function(e) {
            f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
          }), re(function(e) {
            var t = a.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
          })), (i.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && re(function(e) {
            i.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", B)
          }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(f.compareDocumentPosition), b = t || J.test(f.contains) ? function(e, t) {
            var i = 9 === e.nodeType ? e.documentElement : e,
              n = t && t.parentNode;
            return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, $ = t ? function(e, t) {
            if (e === t) return u = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === a || e.ownerDocument === T && b(T, e) ? -1 : t === a || t.ownerDocument === T && b(T, t) ? 1 : c ? z(c, e) - z(c, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return u = !0, 0;
            var i, n = 0,
              s = e.parentNode,
              o = t.parentNode,
              r = [e],
              l = [t];
            if (!s || !o) return e === a ? -1 : t === a ? 1 : s ? -1 : o ? 1 : c ? z(c, e) - z(c, t) : 0;
            if (s === o) return de(e, t);
            for (i = e; i = i.parentNode;) r.unshift(i);
            for (i = t; i = i.parentNode;) l.unshift(i);
            for (; r[n] === l[n];) n++;
            return n ? de(r[n], l[n]) : r[n] === T ? -1 : l[n] === T ? 1 : 0
          }, a) : h
        }, se.matches = function(e, t) {
          return se(e, null, null, t)
        }, se.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== h && p(e), t = t.replace(X, "='$1']"), !(!i.matchesSelector || !v || g && g.test(t) || m && m.test(t))) try {
            var n = y.call(e, t);
            if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
          } catch (e) {}
          return 0 < se(t, h, null, [e]).length
        }, se.contains = function(e, t) {
          return (e.ownerDocument || e) !== h && p(e), b(e, t)
        }, se.attr = function(e, t) {
          (e.ownerDocument || e) !== h && p(e);
          var s = n.attrHandle[t.toLowerCase()],
            o = s && _.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !v) : void 0;
          return void 0 !== o ? o : i.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, se.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function(e) {
          var t, n = [],
            s = 0,
            o = 0;
          if (u = !i.detectDuplicates, c = !i.sortStable && e.slice(0), e.sort($), u) {
            for (; t = e[o++];) t === e[o] && (s = n.push(o));
            for (; s--;) e.splice(n[s], 1)
          }
          return c = null, e
        }, s = se.getText = function(e) {
          var t, i = "",
            n = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) i += s(e)
            } else if (3 === o || 4 === o) return e.nodeValue
          } else
            for (; t = e[n++];) i += s(t);
          return i
        }, (n = se.selectors = {
          cacheLength: 50,
          createPseudo: ae,
          match: U,
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
            ATTR: function(e) {
              return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, i = !e[6] && e[2];
              return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && G.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(te, ie).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = C[e + " "];
              return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && C(e, function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(e, t, i) {
              return function(n) {
                var s = se.attr(n, e);
                return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && -1 < s.indexOf(i) : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? -1 < (" " + s.replace(R, " ") + " ").indexOf(i) : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
              }
            },
            CHILD: function(e, t, i, n, s) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                r = "of-type" === t;
              return 1 === n && 0 === s ? function(e) {
                return !!e.parentNode
              } : function(t, i, l) {
                var d, c, u, p, h, f, v = o !== a ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  g = r && t.nodeName.toLowerCase(),
                  y = !l && !r;
                if (m) {
                  if (o) {
                    for (; v;) {
                      for (u = t; u = u[v];)
                        if (r ? u.nodeName.toLowerCase() === g : 1 === u.nodeType) return !1;
                      f = v = "only" === e && !f && "nextSibling"
                    }
                    return !0
                  }
                  if (f = [a ? m.firstChild : m.lastChild], a && y) {
                    for (h = (d = (c = m[w] || (m[w] = {}))[e] || [])[0] === x && d[1], p = d[0] === x && d[2], u = h && m.childNodes[h]; u = ++h && u && u[v] || (p = h = 0) || f.pop();)
                      if (1 === u.nodeType && ++p && u === t) {
                        c[e] = [x, h, p];
                        break
                      }
                  } else if (y && (d = (t[w] || (t[w] = {}))[e]) && d[0] === x) p = d[1];
                  else
                    for (;
                      (u = ++h && u && u[v] || (p = h = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== g : 1 !== u.nodeType) || !++p || (y && ((u[w] || (u[w] = {}))[e] = [x, p]), u !== t)););
                  return (p -= s) === n || p % n == 0 && 0 <= p / n
                }
              }
            },
            PSEUDO: function(e, t) {
              var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return s[w] ? s(t) : 1 < s.length ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, i) {
                for (var n, o = s(e, t), a = o.length; a--;) e[n = z(e, o[a])] = !(i[n] = o[a])
              }) : function(e) {
                return s(e, 0, i)
              }) : s
            }
          },
          pseudos: {
            not: ae(function(e) {
              var t = [],
                i = [],
                n = r(e.replace(F, "$1"));
              return n[w] ? ae(function(e, t, i, s) {
                for (var o, a = n(e, null, s, []), r = e.length; r--;)(o = a[r]) && (e[r] = !(t[r] = o))
              }) : function(e, s, o) {
                return t[0] = e, n(t, null, o, i), t[0] = null, !i.pop()
              }
            }),
            has: ae(function(e) {
              return function(t) {
                return 0 < se(e, t).length
              }
            }),
            contains: ae(function(e) {
              return e = e.replace(te, ie),
                function(t) {
                  return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
                }
            }),
            lang: ae(function(e) {
              return Y.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(),
                function(t) {
                  var i;
                  do {
                    if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function(t) {
              var i = e.location && e.location.hash;
              return i && i.slice(1) === t.id
            },
            root: function(e) {
              return e === f
            },
            focus: function(e) {
              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
              return !1 === e.disabled
            },
            disabled: function(e) {
              return !0 === e.disabled
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !n.pseudos.empty(e)
            },
            header: function(e) {
              return Q.test(e.nodeName)
            },
            input: function(e) {
              return V.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: pe(function() {
              return [0]
            }),
            last: pe(function(e, t) {
              return [t - 1]
            }),
            eq: pe(function(e, t, i) {
              return [i < 0 ? i + t : i]
            }),
            even: pe(function(e, t) {
              for (var i = 0; i < t; i += 2) e.push(i);
              return e
            }),
            odd: pe(function(e, t) {
              for (var i = 1; i < t; i += 2) e.push(i);
              return e
            }),
            lt: pe(function(e, t, i) {
              for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
              return e
            }),
            gt: pe(function(e, t, i) {
              for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
              return e
            })
          }
        }).pseudos.nth = n.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) n.pseudos[t] = ce(t);
      for (t in {
          submit: !0,
          reset: !0
        }) n.pseudos[t] = ue(t);

      function fe() {}

      function ve(e) {
        for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
        return n
      }

      function me(e, t, i) {
        var n = t.dir,
          s = i && "parentNode" === n,
          o = S++;
        return t.first ? function(t, i, o) {
          for (; t = t[n];)
            if (1 === t.nodeType || s) return e(t, i, o)
        } : function(t, i, a) {
          var r, l, d = [x, o];
          if (a) {
            for (; t = t[n];)
              if ((1 === t.nodeType || s) && e(t, i, a)) return !0
          } else
            for (; t = t[n];)
              if (1 === t.nodeType || s) {
                if ((r = (l = t[w] || (t[w] = {}))[n]) && r[0] === x && r[1] === o) return d[2] = r[2];
                if ((l[n] = d)[2] = e(t, i, a)) return !0
              }
        }
      }

      function ge(e) {
        return 1 < e.length ? function(t, i, n) {
          for (var s = e.length; s--;)
            if (!e[s](t, i, n)) return !1;
          return !0
        } : e[0]
      }

      function ye(e, t, i, n, s) {
        for (var o, a = [], r = 0, l = e.length, d = null != t; r < l; r++)(o = e[r]) && (!i || i(o, n, s)) && (a.push(o), d && t.push(r));
        return a
      }

      function be(e, t, i, n, s, o) {
        return n && !n[w] && (n = be(n)), s && !s[w] && (s = be(s, o)), ae(function(o, a, r, l) {
          var d, c, u, p = [],
            h = [],
            f = a.length,
            v = o || function(e, t, i) {
              for (var n = 0, s = t.length; n < s; n++) se(e, t[n], i);
              return i
            }(t || "*", r.nodeType ? [r] : r, []),
            m = !e || !o && t ? v : ye(v, p, e, r, l),
            g = i ? s || (o ? e : f || n) ? [] : a : m;
          if (i && i(m, g, r, l), n)
            for (d = ye(g, h), n(d, [], r, l), c = d.length; c--;)(u = d[c]) && (g[h[c]] = !(m[h[c]] = u));
          if (o) {
            if (s || e) {
              if (s) {
                for (d = [], c = g.length; c--;)(u = g[c]) && d.push(m[c] = u);
                s(null, g = [], d, l)
              }
              for (c = g.length; c--;)(u = g[c]) && -1 < (d = s ? z(o, u) : p[c]) && (o[d] = !(a[d] = u))
            }
          } else g = ye(g === a ? g.splice(f, g.length) : g), s ? s(null, a, g, l) : L.apply(a, g)
        })
      }

      function we(e) {
        for (var t, i, s, o = e.length, a = n.relative[e[0].type], r = a || n.relative[" "], l = a ? 1 : 0, c = me(function(e) {
            return e === t
          }, r, !0), u = me(function(e) {
            return -1 < z(t, e)
          }, r, !0), p = [function(e, i, n) {
            var s = !a && (n || i !== d) || ((t = i).nodeType ? c(e, i, n) : u(e, i, n));
            return t = null, s
          }]; l < o; l++)
          if (i = n.relative[e[l].type]) p = [me(ge(p), i)];
          else {
            if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (s = ++l; s < o && !n.relative[e[s].type]; s++);
              return be(1 < l && ge(p), 1 < l && ve(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(F, "$1"), i, l < s && we(e.slice(l, s)), s < o && we(e = e.slice(s)), s < o && ve(e))
            }
            p.push(i)
          } return ge(p)
      }
      return fe.prototype = n.filters = n.pseudos, n.setFilters = new fe, a = se.tokenize = function(e, t) {
        var i, s, o, a, r, l, d, c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (r = e, l = [], d = n.preFilter; r;) {
          for (a in (!i || (s = W.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), i = !1, (s = q.exec(r)) && (i = s.shift(), o.push({
              value: i,
              type: s[0].replace(F, " ")
            }), r = r.slice(i.length)), n.filter) !(s = U[a].exec(r)) || d[a] && !(s = d[a](s)) || (i = s.shift(), o.push({
            value: i,
            type: a,
            matches: s
          }), r = r.slice(i.length));
          if (!i) break
        }
        return t ? r.length : r ? se.error(e) : k(e, l).slice(0)
      }, r = se.compile = function(e, t) {
        var i, s, o, r, l, c, u = [],
          p = [],
          f = E[e + " "];
        if (!f) {
          for (t || (t = a(e)), i = t.length; i--;)(f = we(t[i]))[w] ? u.push(f) : p.push(f);
          (f = E(e, (s = p, r = 0 < (o = u).length, l = 0 < s.length, c = function(e, t, i, a, c) {
            var u, p, f, v = 0,
              m = "0",
              g = e && [],
              y = [],
              b = d,
              w = e || l && n.find.TAG("*", c),
              T = x += null == b ? 1 : Math.random() || .1,
              S = w.length;
            for (c && (d = t !== h && t); m !== S && null != (u = w[m]); m++) {
              if (l && u) {
                for (p = 0; f = s[p++];)
                  if (f(u, t, i)) {
                    a.push(u);
                    break
                  } c && (x = T)
              }
              r && ((u = !f && u) && v--, e && g.push(u))
            }
            if (v += m, r && m !== v) {
              for (p = 0; f = o[p++];) f(g, y, t, i);
              if (e) {
                if (0 < v)
                  for (; m--;) g[m] || y[m] || (y[m] = N.call(a));
                y = ye(y)
              }
              L.apply(a, y), c && !e && 0 < y.length && 1 < v + o.length && se.uniqueSort(a)
            }
            return c && (x = T, d = b), g
          }, r ? ae(c) : c))).selector = e
        }
        return f
      }, l = se.select = function(e, t, s, o) {
        var l, d, c, u, p, h = "function" == typeof e && e,
          f = !o && a(e = h.selector || e);
        if (s = s || [], 1 === f.length) {
          if (2 < (d = f[0] = f[0].slice(0)).length && "ID" === (c = d[0]).type && i.getById && 9 === t.nodeType && v && n.relative[d[1].type]) {
            if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return s;
            h && (t = t.parentNode), e = e.slice(d.shift().value.length)
          }
          for (l = U.needsContext.test(e) ? 0 : d.length; l-- && (c = d[l], !n.relative[u = c.type]);)
            if ((p = n.find[u]) && (o = p(c.matches[0].replace(te, ie), K.test(d[0].type) && he(t.parentNode) || t))) {
              if (d.splice(l, 1), !(e = o.length && ve(d))) return L.apply(s, o), s;
              break
            }
        }
        return (h || r(e, f))(o, t, !v, s, K.test(e) && he(t.parentNode) || t), s
      }, i.sortStable = w.split("").sort($).join("") === w, i.detectDuplicates = !!u, p(), i.sortDetached = re(function(e) {
        return 1 & e.compareDocumentPosition(h.createElement("div"))
      }), re(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || le("type|href|height|width", function(e, t, i) {
        return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), i.attributes && re(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || le("value", function(e, t, i) {
        return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }), re(function(e) {
        return null == e.getAttribute("disabled")
      }) || le(I, function(e, t, i) {
        var n;
        return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
      }), se
    }(e);
    p.find = y, p.expr = y.selectors, p.expr[":"] = p.expr.pseudos, p.unique = y.uniqueSort, p.text = y.getText, p.isXMLDoc = y.isXML, p.contains = y.contains;
    var b = p.expr.match.needsContext,
      w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      T = /^.[^:#\[\.,]*$/;

    function x(e, t, i) {
      if (p.isFunction(t)) return p.grep(e, function(e, n) {
        return !!t.call(e, n, e) !== i
      });
      if (t.nodeType) return p.grep(e, function(e) {
        return e === t !== i
      });
      if ("string" == typeof t) {
        if (T.test(t)) return p.filter(t, e, i);
        t = p.filter(t, e)
      }
      return p.grep(e, function(e) {
        return 0 <= p.inArray(e, t) !== i
      })
    }
    p.filter = function(e, t, i) {
      var n = t[0];
      return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? p.find.matchesSelector(n, e) ? [n] : [] : p.find.matches(e, p.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, p.fn.extend({
      find: function(e) {
        var t, i = [],
          n = this,
          s = n.length;
        if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
          for (t = 0; t < s; t++)
            if (p.contains(n[t], this)) return !0
        }));
        for (t = 0; t < s; t++) p.find(e, n[t], i);
        return (i = this.pushStack(1 < s ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
      },
      filter: function(e) {
        return this.pushStack(x(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(x(this, e || [], !0))
      },
      is: function(e) {
        return !!x(this, "string" == typeof e && b.test(e) ? p(e) : e || [], !1).length
      }
    });
    var S, C = e.document,
      k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(e, t) {
      var i, n;
      if (!e) return this;
      if ("string" == typeof e) {
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : k.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || S).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(i[1]) && p.isPlainObject(t))
            for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        if ((n = C.getElementById(i[2])) && n.parentNode) {
          if (n.id !== i[2]) return S.find(e);
          this.length = 1, this[0] = n
        }
        return this.context = C, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== S.ready ? S.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    }).prototype = p.fn, S = p(C);
    var E = /^(?:parents|prev(?:Until|All))/,
      $ = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function _(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    p.extend({
      dir: function(e, t, i) {
        for (var n = [], s = e[t]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !p(s).is(i));) 1 === s.nodeType && n.push(s), s = s[t];
        return n
      },
      sibling: function(e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
      }
    }), p.fn.extend({
      has: function(e) {
        var t, i = p(e, this),
          n = i.length;
        return this.filter(function() {
          for (t = 0; t < n; t++)
            if (p.contains(this, i[t])) return !0
        })
      },
      closest: function(e, t) {
        for (var i, n = 0, s = this.length, o = [], a = b.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; n < s; n++)
          for (i = this[n]; i && i !== t; i = i.parentNode)
            if (i.nodeType < 11 && (a ? -1 < a.index(i) : 1 === i.nodeType && p.find.matchesSelector(i, e))) {
              o.push(i);
              break
            } return this.pushStack(1 < o.length ? p.unique(o) : o)
      },
      index: function(e) {
        return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), p.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return p.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, i) {
        return p.dir(e, "parentNode", i)
      },
      next: function(e) {
        return _(e, "nextSibling")
      },
      prev: function(e) {
        return _(e, "previousSibling")
      },
      nextAll: function(e) {
        return p.dir(e, "nextSibling")
      },
      prevAll: function(e) {
        return p.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, i) {
        return p.dir(e, "nextSibling", i)
      },
      prevUntil: function(e, t, i) {
        return p.dir(e, "previousSibling", i)
      },
      siblings: function(e) {
        return p.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return p.sibling(e.firstChild)
      },
      contents: function(e) {
        return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
      }
    }, function(e, t) {
      p.fn[e] = function(i, n) {
        var s = p.map(this, t, i);
        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = p.filter(n, s)), 1 < this.length && ($[e] || (s = p.unique(s)), E.test(e) && (s = s.reverse())), this.pushStack(s)
      }
    });
    var M, N = /\S+/g,
      A = {};

    function L() {
      C.addEventListener ? (C.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (C.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
    }

    function D() {
      (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (L(), p.ready())
    }
    p.Callbacks = function(e) {
      var t, i;
      e = "string" == typeof e ? A[e] || (i = A[t = e] = {}, p.each(t.match(N) || [], function(e, t) {
        i[t] = !0
      }), i) : p.extend({}, e);
      var n, s, o, a, r, l, d = [],
        c = !e.once && [],
        u = function(t) {
          for (s = e.memory && t, o = !0, r = l || 0, l = 0, a = d.length, n = !0; d && r < a; r++)
            if (!1 === d[r].apply(t[0], t[1]) && e.stopOnFalse) {
              s = !1;
              break
            } n = !1, d && (c ? c.length && u(c.shift()) : s ? d = [] : h.disable())
        },
        h = {
          add: function() {
            if (d) {
              var t = d.length;
              ! function t(i) {
                p.each(i, function(i, n) {
                  var s = p.type(n);
                  "function" === s ? e.unique && h.has(n) || d.push(n) : n && n.length && "string" !== s && t(n)
                })
              }(arguments), n ? a = d.length : s && (l = t, u(s))
            }
            return this
          },
          remove: function() {
            return d && p.each(arguments, function(e, t) {
              for (var i; - 1 < (i = p.inArray(t, d, i));) d.splice(i, 1), n && (i <= a && a--, i <= r && r--)
            }), this
          },
          has: function(e) {
            return e ? -1 < p.inArray(e, d) : !(!d || !d.length)
          },
          empty: function() {
            return d = [], a = 0, this
          },
          disable: function() {
            return d = c = s = void 0, this
          },
          disabled: function() {
            return !d
          },
          lock: function() {
            return c = void 0, s || h.disable(), this
          },
          locked: function() {
            return !c
          },
          fireWith: function(e, t) {
            return !d || o && !c || (t = [e, (t = t || []).slice ? t.slice() : t], n ? c.push(t) : u(t)), this
          },
          fire: function() {
            return h.fireWith(this, arguments), this
          },
          fired: function() {
            return !!o
          }
        };
      return h
    }, p.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")]
          ],
          i = "pending",
          n = {
            state: function() {
              return i
            },
            always: function() {
              return s.done(arguments).fail(arguments), this
            },
            then: function() {
              var e = arguments;
              return p.Deferred(function(i) {
                p.each(t, function(t, o) {
                  var a = p.isFunction(e[t]) && e[t];
                  s[o[1]](function() {
                    var e = a && a.apply(this, arguments);
                    e && p.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? p.extend(e, n) : n
            }
          },
          s = {};
        return n.pipe = n.then, p.each(t, function(e, o) {
          var a = o[2],
            r = o[3];
          n[o[1]] = a.add, r && a.add(function() {
            i = r
          }, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = function() {
            return s[o[0] + "With"](this === s ? n : this, arguments), this
          }, s[o[0] + "With"] = a.fireWith
        }), n.promise(s), e && e.call(s, s), s
      },
      when: function(e) {
        var t, i, s, o = 0,
          a = n.call(arguments),
          r = a.length,
          l = 1 !== r || e && p.isFunction(e.promise) ? r : 0,
          d = 1 === l ? e : p.Deferred(),
          c = function(e, i, s) {
            return function(o) {
              i[e] = this, s[e] = 1 < arguments.length ? n.call(arguments) : o, s === t ? d.notifyWith(i, s) : --l || d.resolveWith(i, s)
            }
          };
        if (1 < r)
          for (t = new Array(r), i = new Array(r), s = new Array(r); o < r; o++) a[o] && p.isFunction(a[o].promise) ? a[o].promise().done(c(o, s, a)).fail(d.reject).progress(c(o, i, t)) : --l;
        return l || d.resolveWith(s, a), d.promise()
      }
    }), p.fn.ready = function(e) {
      return p.ready.promise().done(e), this
    }, p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? p.readyWait++ : p.ready(!0)
      },
      ready: function(e) {
        if (!0 === e ? !--p.readyWait : !p.isReady) {
          if (!C.body) return setTimeout(p.ready);
          (p.isReady = !0) !== e && 0 < --p.readyWait || (M.resolveWith(C, [p]), p.fn.triggerHandler && (p(C).triggerHandler("ready"), p(C).off("ready")))
        }
      }
    }), p.ready.promise = function(t) {
      if (!M)
        if (M = p.Deferred(), "complete" === C.readyState) setTimeout(p.ready);
        else if (C.addEventListener) C.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
      else {
        C.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
        var i = !1;
        try {
          i = null == e.frameElement && C.documentElement
        } catch (t) {}
        i && i.doScroll && function e() {
          if (!p.isReady) {
            try {
              i.doScroll("left")
            } catch (t) {
              return setTimeout(e, 50)
            }
            L(), p.ready()
          }
        }()
      }
      return M.promise(t)
    };
    var z, I = "undefined";
    for (z in p(c)) break;
    c.ownLast = "0" !== z, c.inlineBlockNeedsLayout = !1, p(function() {
        var e, t, i, n;
        (i = C.getElementsByTagName("body")[0]) && i.style && (t = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== I && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
      }),
      function() {
        var e = C.createElement("div");
        if (null == c.deleteExpando) {
          c.deleteExpando = !0;
          try {
            delete e.test
          } catch (e) {
            c.deleteExpando = !1
          }
        }
        e = null
      }(), p.acceptData = function(e) {
        var t = p.noData[(e.nodeName + " ").toLowerCase()],
          i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
      };
    var P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

    function j(e, t, i) {
      if (void 0 === i && 1 === e.nodeType) {
        var n = "data-" + t.replace(O, "-$1").toLowerCase();
        if ("string" == typeof(i = e.getAttribute(n))) {
          try {
            i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : P.test(i) ? p.parseJSON(i) : i)
          } catch (e) {}
          p.data(e, t, i)
        } else i = void 0
      }
      return i
    }

    function H(e) {
      var t;
      for (t in e)
        if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
      return !0
    }

    function B(e, t, n, s) {
      if (p.acceptData(e)) {
        var o, a, r = p.expando,
          l = e.nodeType,
          d = l ? p.cache : e,
          c = l ? e[r] : e[r] && r;
        if (c && d[c] && (s || d[c].data) || void 0 !== n || "string" != typeof t) return c || (c = l ? e[r] = i.pop() || p.guid++ : r), d[c] || (d[c] = l ? {} : {
          toJSON: p.noop
        }), ("object" == typeof t || "function" == typeof t) && (s ? d[c] = p.extend(d[c], t) : d[c].data = p.extend(d[c].data, t)), a = d[c], s || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[p.camelCase(t)] = n), "string" == typeof t ? null == (o = a[t]) && (o = a[p.camelCase(t)]) : o = a, o
      }
    }

    function R(e, t, i) {
      if (p.acceptData(e)) {
        var n, s, o = e.nodeType,
          a = o ? p.cache : e,
          r = o ? e[p.expando] : p.expando;
        if (a[r]) {
          if (t && (n = i ? a[r] : a[r].data)) {
            s = (t = p.isArray(t) ? t.concat(p.map(t, p.camelCase)) : t in n ? [t] : (t = p.camelCase(t)) in n ? [t] : t.split(" ")).length;
            for (; s--;) delete n[t[s]];
            if (i ? !H(n) : !p.isEmptyObject(n)) return
          }(i || (delete a[r].data, H(a[r]))) && (o ? p.cleanData([e], !0) : c.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
        }
      }
    }
    p.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(e) {
        return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !H(e)
      },
      data: function(e, t, i) {
        return B(e, t, i)
      },
      removeData: function(e, t) {
        return R(e, t)
      },
      _data: function(e, t, i) {
        return B(e, t, i, !0)
      },
      _removeData: function(e, t) {
        return R(e, t, !0)
      }
    }), p.fn.extend({
      data: function(e, t) {
        var i, n, s, o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && (s = p.data(o), 1 === o.nodeType && !p._data(o, "parsedAttrs"))) {
            for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && j(o, n = p.camelCase(n.slice(5)), s[n]);
            p._data(o, "parsedAttrs", !0)
          }
          return s
        }
        return "object" == typeof e ? this.each(function() {
          p.data(this, e)
        }) : 1 < arguments.length ? this.each(function() {
          p.data(this, e, t)
        }) : o ? j(o, e, p.data(o, e)) : void 0
      },
      removeData: function(e) {
        return this.each(function() {
          p.removeData(this, e)
        })
      }
    }), p.extend({
      queue: function(e, t, i) {
        var n;
        return e ? (t = (t || "fx") + "queue", n = p._data(e, t), i && (!n || p.isArray(i) ? n = p._data(e, t, p.makeArray(i)) : n.push(i)), n || []) : void 0
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var i = p.queue(e, t),
          n = i.length,
          s = i.shift(),
          o = p._queueHooks(e, t);
        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete o.stop, s.call(e, function() {
          p.dequeue(e, t)
        }, o)), !n && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
        var i = t + "queueHooks";
        return p._data(e, i) || p._data(e, i, {
          empty: p.Callbacks("once memory").add(function() {
            p._removeData(e, t + "queue"), p._removeData(e, i)
          })
        })
      }
    }), p.fn.extend({
      queue: function(e, t) {
        var i = 2;
        return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var i = p.queue(this, e, t);
          p._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && p.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          p.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var i, n = 1,
          s = p.Deferred(),
          o = this,
          a = this.length,
          r = function() {
            --n || s.resolveWith(o, [o])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = p._data(o[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(r));
        return r(), s.promise(t)
      }
    });
    var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      W = ["Top", "Right", "Bottom", "Left"],
      q = function(e, t) {
        return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
      },
      X = p.access = function(e, t, i, n, s, o, a) {
        var r = 0,
          l = e.length,
          d = null == i;
        if ("object" === p.type(i))
          for (r in s = !0, i) p.access(e, t, r, i[r], !0, o, a);
        else if (void 0 !== n && (s = !0, p.isFunction(n) || (a = !0), d && (a ? (t.call(e, n), t = null) : (d = t, t = function(e, t, i) {
            return d.call(p(e), i)
          })), t))
          for (; r < l; r++) t(e[r], i, a ? n : n.call(e[r], r, t(e[r], i)));
        return s ? e : d ? t.call(e) : l ? t(e[0], i) : o
      },
      G = /^(?:checkbox|radio)$/i;
    ! function() {
      var e = C.createElement("input"),
        t = C.createElement("div"),
        i = C.createDocumentFragment();
      if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), c.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
          c.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == c.deleteExpando) {
        c.deleteExpando = !0;
        try {
          delete t.test
        } catch (e) {
          c.deleteExpando = !1
        }
      }
    }(),
    function() {
      var t, i, n = C.createElement("div");
      for (t in {
          submit: !0,
          change: !0,
          focusin: !0
        }) i = "on" + t, (c[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), c[t + "Bubbles"] = !1 === n.attributes[i].expando);
      n = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
      U = /^key/,
      V = /^(?:mouse|pointer|contextmenu)|click/,
      Q = /^(?:focusinfocus|focusoutblur)$/,
      J = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
      return !0
    }

    function K() {
      return !1
    }

    function ee() {
      try {
        return C.activeElement
      } catch (e) {}
    }

    function te(e) {
      var t = ie.split("|"),
        i = e.createDocumentFragment();
      if (i.createElement)
        for (; t.length;) i.createElement(t.pop());
      return i
    }
    p.event = {
      global: {},
      add: function(e, t, i, n, s) {
        var o, a, r, l, d, c, u, h, f, v, m, g = p._data(e);
        if (g) {
          for (i.handler && (i = (l = i).handler, s = l.selector), i.guid || (i.guid = p.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
              return typeof p === I || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(c.elem, arguments)
            }).elem = e), r = (t = (t || "").match(N) || [""]).length; r--;) f = m = (o = J.exec(t[r]) || [])[1], v = (o[2] || "").split(".").sort(), f && (d = p.event.special[f] || {}, f = (s ? d.delegateType : d.bindType) || f, d = p.event.special[f] || {}, u = p.extend({
            type: f,
            origType: m,
            data: n,
            handler: i,
            guid: i.guid,
            selector: s,
            needsContext: s && p.expr.match.needsContext.test(s),
            namespace: v.join(".")
          }, l), (h = a[f]) || ((h = a[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, v, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), p.event.global[f] = !0);
          e = null
        }
      },
      remove: function(e, t, i, n, s) {
        var o, a, r, l, d, c, u, h, f, v, m, g = p.hasData(e) && p._data(e);
        if (g && (c = g.events)) {
          for (d = (t = (t || "").match(N) || [""]).length; d--;)
            if (f = m = (r = J.exec(t[d]) || [])[1], v = (r[2] || "").split(".").sort(), f) {
              for (u = p.event.special[f] || {}, h = c[f = (n ? u.delegateType : u.bindType) || f] || [], r = r[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !s && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, u.remove && u.remove.call(e, a));
              l && !h.length && (u.teardown && !1 !== u.teardown.call(e, v, g.handle) || p.removeEvent(e, f, g.handle), delete c[f])
            } else
              for (f in c) p.event.remove(e, f + t[d], i, n, !0);
          p.isEmptyObject(c) && (delete g.handle, p._removeData(e, "events"))
        }
      },
      trigger: function(t, i, n, s) {
        var o, a, r, l, c, u, h, f = [n || C],
          v = d.call(t, "type") ? t.type : t,
          m = d.call(t, "namespace") ? t.namespace.split(".") : [];
        if (r = u = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Q.test(v + p.event.triggered) && (0 <= v.indexOf(".") && (v = (m = v.split(".")).shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, (t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : p.makeArray(i, [t]), c = p.event.special[v] || {}, s || !c.trigger || !1 !== c.trigger.apply(n, i))) {
          if (!s && !c.noBubble && !p.isWindow(n)) {
            for (l = c.delegateType || v, Q.test(l + v) || (r = r.parentNode); r; r = r.parentNode) f.push(r), u = r;
            u === (n.ownerDocument || C) && f.push(u.defaultView || u.parentWindow || e)
          }
          for (h = 0;
            (r = f[h++]) && !t.isPropagationStopped();) t.type = 1 < h ? l : c.bindType || v, (o = (p._data(r, "events") || {})[t.type] && p._data(r, "handle")) && o.apply(r, i), (o = a && r[a]) && o.apply && p.acceptData(r) && (t.result = o.apply(r, i), !1 === t.result && t.preventDefault());
          if (t.type = v, !s && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(f.pop(), i)) && p.acceptData(n) && a && n[v] && !p.isWindow(n)) {
            (u = n[a]) && (n[a] = null), p.event.triggered = v;
            try {
              n[v]()
            } catch (t) {}
            p.event.triggered = void 0, u && (n[a] = u)
          }
          return t.result
        }
      },
      dispatch: function(e) {
        e = p.event.fix(e);
        var t, i, s, o, a, r = [],
          l = n.call(arguments),
          d = (p._data(this, "events") || {})[e.type] || [],
          c = p.event.special[e.type] || {};
        if ((l[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (r = p.event.handlers.call(this, e, d), t = 0;
            (o = r[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = o.elem, a = 0;
              (s = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, void 0 !== (i = ((p.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var i, n, s, o, a = [],
          r = t.delegateCount,
          l = e.target;
        if (r && l.nodeType && (!e.button || "click" !== e.type))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (s = [], o = 0; o < r; o++) void 0 === s[i = (n = t[o]).selector + " "] && (s[i] = n.needsContext ? 0 <= p(i, this).index(l) : p.find(i, this, null, [l]).length), s[i] && s.push(n);
              s.length && a.push({
                elem: l,
                handlers: s
              })
            } return r < t.length && a.push({
          elem: this,
          handlers: t.slice(r)
        }), a
      },
      fix: function(e) {
        if (e[p.expando]) return e;
        var t, i, n, s = e.type,
          o = e,
          a = this.fixHooks[s];
        for (a || (this.fixHooks[s] = a = V.test(s) ? this.mouseHooks : U.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(o), t = n.length; t--;) e[i = n[t]] = o[i];
        return e.target || (e.target = o.srcElement || C), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var i, n, s, o = t.button,
            a = t.fromElement;
          return null == e.pageX && null != t.clientX && (s = (n = e.target.ownerDocument || C).documentElement, i = n.body, e.pageX = t.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== ee() && this.focus) try {
              return this.focus(), !1
            } catch (e) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === ee() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
          },
          _default: function(e) {
            return p.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function(e, t, i, n) {
        var s = p.extend(new p.Event, i, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
        n ? p.event.trigger(s, null, t) : p.event.dispatch.call(t, s), s.isDefaultPrevented() && i.preventDefault()
      }
    }, p.removeEvent = C.removeEventListener ? function(e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function(e, t, i) {
      var n = "on" + t;
      e.detachEvent && (typeof e[n] === I && (e[n] = null), e.detachEvent(n, i))
    }, p.Event = function(e, t) {
      return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Z : K) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
      isDefaultPrevented: K,
      isPropagationStopped: K,
      isImmediatePropagationStopped: K,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Z, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = Z, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Z, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, p.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      p.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var i, n = e.relatedTarget,
            s = e.handleObj;
          return (!n || n !== this && !p.contains(this, n)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
        }
      }
    }), c.submitBubbles || (p.event.special.submit = {
      setup: function() {
        return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", function(e) {
          var t = e.target,
            i = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
          i && !p._data(i, "submitBubbles") && (p.event.add(i, "submit._submit", function(e) {
            e._submit_bubble = !0
          }), p._data(i, "submitBubbles", !0))
        })
      },
      postDispatch: function(e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
      },
      teardown: function() {
        return !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
      }
    }), c.changeBubbles || (p.event.special.change = {
      setup: function() {
        return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(e) {
          "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), p.event.add(this, "click._change", function(e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
        })), !1) : void p.event.add(this, "beforeactivate._change", function(e) {
          var t = e.target;
          Y.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
            !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
          }), p._data(t, "changeBubbles", !0))
        })
      },
      handle: function(e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
        return p.event.remove(this, "._change"), !Y.test(this.nodeName)
      }
    }), c.focusinBubbles || p.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var i = function(e) {
        p.event.simulate(t, e.target, p.event.fix(e), !0)
      };
      p.event.special[t] = {
        setup: function() {
          var n = this.ownerDocument || this,
            s = p._data(n, t);
          s || n.addEventListener(e, i, !0), p._data(n, t, (s || 0) + 1)
        },
        teardown: function() {
          var n = this.ownerDocument || this,
            s = p._data(n, t) - 1;
          s ? p._data(n, t, s) : (n.removeEventListener(e, i, !0), p._removeData(n, t))
        }
      }
    }), p.fn.extend({
      on: function(e, t, i, n, s) {
        var o, a;
        if ("object" == typeof e) {
          for (o in "string" != typeof t && (i = i || t, t = void 0), e) this.on(o, t, i, e[o], s);
          return this
        }
        if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), !1 === n) n = K;
        else if (!n) return this;
        return 1 === s && (a = n, (n = function(e) {
          return p().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = p.guid++)), this.each(function() {
          p.event.add(this, e, n, i, t)
        })
      },
      one: function(e, t, i, n) {
        return this.on(e, t, i, n, 1)
      },
      off: function(e, t, i) {
        var n, s;
        if (e && e.preventDefault && e.handleObj) return n = e.handleObj, p(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof e) {
          for (s in e) this.off(s, t, e[s]);
          return this
        }
        return (!1 === t || "function" == typeof t) && (i = t, t = void 0), !1 === i && (i = K), this.each(function() {
          p.event.remove(this, e, i, t)
        })
      },
      trigger: function(e, t) {
        return this.each(function() {
          p.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var i = this[0];
        return i ? p.event.trigger(e, t, i, !0) : void 0
      }
    });
    var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      ne = / jQuery\d+="(?:null|\d+)"/g,
      se = new RegExp("<(?:" + ie + ")[\\s/>]", "i"),
      oe = /^\s+/,
      ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      re = /<([\w:]+)/,
      le = /<tbody/i,
      de = /<|&#?\w+;/,
      ce = /<(?:script|style|link)/i,
      ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pe = /^$|\/(?:java|ecma)script/i,
      he = /^true\/(.*)/,
      fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      me = te(C).appendChild(C.createElement("div"));

    function ge(e, t) {
      var i, n, s = 0,
        o = typeof e.getElementsByTagName !== I ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== I ? e.querySelectorAll(t || "*") : void 0;
      if (!o)
        for (o = [], i = e.childNodes || e; null != (n = i[s]); s++) !t || p.nodeName(n, t) ? o.push(n) : p.merge(o, ge(n, t));
      return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], o) : o
    }

    function ye(e) {
      G.test(e.type) && (e.defaultChecked = e.checked)
    }

    function be(e, t) {
      return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function we(e) {
      return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function Te(e) {
      var t = he.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function xe(e, t) {
      for (var i, n = 0; null != (i = e[n]); n++) p._data(i, "globalEval", !t || p._data(t[n], "globalEval"))
    }

    function Se(e, t) {
      if (1 === t.nodeType && p.hasData(e)) {
        var i, n, s, o = p._data(e),
          a = p._data(t, o),
          r = o.events;
        if (r)
          for (i in delete a.handle, a.events = {}, r)
            for (n = 0, s = r[i].length; n < s; n++) p.event.add(t, i, r[i][n]);
        a.data && (a.data = p.extend({}, a.data))
      }
    }

    function Ce(e, t) {
      var i, n, s;
      if (1 === t.nodeType) {
        if (i = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
          for (n in (s = p._data(t)).events) p.removeEvent(t, n, s.handle);
          t.removeAttribute(p.expando)
        }
        "script" === i && t.text !== e.text ? (we(t).text = e.text, Te(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && G.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
      }
    }
    ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, p.extend({
      clone: function(e, t, i) {
        var n, s, o, a, r, l = p.contains(e.ownerDocument, e);
        if (c.html5Clone || p.isXMLDoc(e) || !se.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (me.innerHTML = e.outerHTML, me.removeChild(o = me.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
          for (n = ge(o), r = ge(e), a = 0; null != (s = r[a]); ++a) n[a] && Ce(s, n[a]);
        if (t)
          if (i)
            for (r = r || ge(e), n = n || ge(o), a = 0; null != (s = r[a]); a++) Se(s, n[a]);
          else Se(e, o);
        return 0 < (n = ge(o, "script")).length && xe(n, !l && ge(e, "script")), n = r = s = null, o
      },
      buildFragment: function(e, t, i, n) {
        for (var s, o, a, r, l, d, u, h = e.length, f = te(t), v = [], m = 0; m < h; m++)
          if ((o = e[m]) || 0 === o)
            if ("object" === p.type(o)) p.merge(v, o.nodeType ? [o] : o);
            else if (de.test(o)) {
          for (r = r || f.appendChild(t.createElement("div")), l = (re.exec(o) || ["", ""])[1].toLowerCase(), u = ve[l] || ve._default, r.innerHTML = u[1] + o.replace(ae, "<$1></$2>") + u[2], s = u[0]; s--;) r = r.lastChild;
          if (!c.leadingWhitespace && oe.test(o) && v.push(t.createTextNode(oe.exec(o)[0])), !c.tbody)
            for (s = (o = "table" !== l || le.test(o) ? "<table>" !== u[1] || le.test(o) ? 0 : r : r.firstChild) && o.childNodes.length; s--;) p.nodeName(d = o.childNodes[s], "tbody") && !d.childNodes.length && o.removeChild(d);
          for (p.merge(v, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
          r = f.lastChild
        } else v.push(t.createTextNode(o));
        for (r && f.removeChild(r), c.appendChecked || p.grep(ge(v, "input"), ye), m = 0; o = v[m++];)
          if ((!n || -1 === p.inArray(o, n)) && (a = p.contains(o.ownerDocument, o), r = ge(f.appendChild(o), "script"), a && xe(r), i))
            for (s = 0; o = r[s++];) pe.test(o.type || "") && i.push(o);
        return r = null, f
      },
      cleanData: function(e, t) {
        for (var n, s, o, a, r = 0, l = p.expando, d = p.cache, u = c.deleteExpando, h = p.event.special; null != (n = e[r]); r++)
          if ((t || p.acceptData(n)) && (a = (o = n[l]) && d[o])) {
            if (a.events)
              for (s in a.events) h[s] ? p.event.remove(n, s) : p.removeEvent(n, s, a.handle);
            d[o] && (delete d[o], u ? delete n[l] : typeof n.removeAttribute !== I ? n.removeAttribute(l) : n[l] = null, i.push(o))
          }
      }
    }), p.fn.extend({
      text: function(e) {
        return X(this, function(e) {
          return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e))
        }, null, e, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || be(this, e).appendChild(e)
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = be(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      remove: function(e, t) {
        for (var i, n = e ? p.filter(e, this) : this, s = 0; null != (i = n[s]); s++) t || 1 !== i.nodeType || p.cleanData(ge(i)), i.parentNode && (t && p.contains(i.ownerDocument, i) && xe(ge(i, "script")), i.parentNode.removeChild(i));
        return this
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && p.cleanData(ge(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
          e.options && p.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return p.clone(this, e, t)
        })
      },
      html: function(e) {
        return X(this, function(e) {
          var t = this[0] || {},
            i = 0,
            n = this.length;
          if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ne, "") : void 0;
          if (!("string" != typeof e || ce.test(e) || !c.htmlSerialize && se.test(e) || !c.leadingWhitespace && oe.test(e) || ve[(re.exec(e) || ["", ""])[1].toLowerCase()])) {
            e = e.replace(ae, "<$1></$2>");
            try {
              for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (p.cleanData(ge(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = arguments[0];
        return this.domManip(arguments, function(t) {
          e = this.parentNode, p.cleanData(ge(this)), e && e.replaceChild(t, this)
        }), e && (e.length || e.nodeType) ? this : this.remove()
      },
      detach: function(e) {
        return this.remove(e, !0)
      },
      domManip: function(e, t) {
        e = s.apply([], e);
        var i, n, o, a, r, l, d = 0,
          u = this.length,
          h = this,
          f = u - 1,
          v = e[0],
          m = p.isFunction(v);
        if (m || 1 < u && "string" == typeof v && !c.checkClone && ue.test(v)) return this.each(function(i) {
          var n = h.eq(i);
          m && (e[0] = v.call(this, i, n.html())), n.domManip(e, t)
        });
        if (u && (i = (l = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = i), i)) {
          for (o = (a = p.map(ge(l, "script"), we)).length; d < u; d++) n = l, d !== f && (n = p.clone(n, !0, !0), o && p.merge(a, ge(n, "script"))), t.call(this[d], n, d);
          if (o)
            for (r = a[a.length - 1].ownerDocument, p.map(a, Te), d = 0; d < o; d++) n = a[d], pe.test(n.type || "") && !p._data(n, "globalEval") && p.contains(r, n) && (n.src ? p._evalUrl && p._evalUrl(n.src) : p.globalEval((n.text || n.textContent || n.innerHTML || "").replace(fe, "")));
          l = i = null
        }
        return this
      }
    }), p.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      p.fn[e] = function(e) {
        for (var i, n = 0, s = [], a = p(e), r = a.length - 1; n <= r; n++) i = n === r ? this : this.clone(!0), p(a[n])[t](i), o.apply(s, i.get());
        return this.pushStack(s)
      }
    });
    var ke, Ee, $e = {};

    function _e(t, i) {
      var n, s = p(i.createElement(t)).appendTo(i.body),
        o = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(s[0])) ? n.display : p.css(s[0], "display");
      return s.detach(), o
    }

    function Me(e) {
      var t = C,
        i = $e[e];
      return i || ("none" !== (i = _e(e, t)) && i || ((t = ((ke = (ke || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ke[0].contentDocument).document).write(), t.close(), i = _e(e, t), ke.detach()), $e[e] = i), i
    }
    c.shrinkWrapBlocks = function() {
      return null != Ee ? Ee : (Ee = !1, (t = C.getElementsByTagName("body")[0]) && t.style ? (e = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(i).appendChild(e), typeof e.style.zoom !== I && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(C.createElement("div")).style.width = "5px", Ee = 3 !== e.offsetWidth), t.removeChild(i), Ee) : void 0);
      var e, t, i
    };
    var Ne, Ae, Le = /^margin/,
      De = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
      ze = /^(top|right|bottom|left)$/;

    function Ie(e, t) {
      return {
        get: function() {
          var i = e();
          if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }
    e.getComputedStyle ? (Ne = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
      }, Ae = function(e, t, i) {
        var n, s, o, a, r = e.style;
        return a = (i = i || Ne(e)) ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)), De.test(a) && Le.test(t) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
      }) : C.documentElement.currentStyle && (Ne = function(e) {
        return e.currentStyle
      }, Ae = function(e, t, i) {
        var n, s, o, a, r = e.style;
        return null == (a = (i = i || Ne(e)) ? i[t] : void 0) && r && r[t] && (a = r[t]), De.test(a) && !ze.test(t) && (n = r.left, (o = (s = e.runtimeStyle) && s.left) && (s.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
      }),
      function() {
        var t, i, n, s, o, a, r;
        if ((t = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = (n = t.getElementsByTagName("a")[0]) && n.style) {
          function l() {
            var t, i, n, l;
            (i = C.getElementsByTagName("body")[0]) && i.style && (t = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, r = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
              width: "4px"
            }).width, (l = t.appendChild(C.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", r = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight), t.removeChild(l)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", a = 0 === l[0].offsetHeight), i.removeChild(n))
          }
          i.cssText = "float:left;opacity:.5", c.opacity = "0.5" === i.opacity, c.cssFloat = !!i.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === t.style.backgroundClip, c.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, p.extend(c, {
            reliableHiddenOffsets: function() {
              return null == a && l(), a
            },
            boxSizingReliable: function() {
              return null == o && l(), o
            },
            pixelPosition: function() {
              return null == s && l(), s
            },
            reliableMarginRight: function() {
              return null == r && l(), r
            }
          })
        }
      }(), p.swap = function(e, t, i, n) {
        var s, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in s = i.apply(e, n || []), t) e.style[o] = a[o];
        return s
      };
    var Pe = /alpha\([^)]*\)/i,
      Oe = /opacity\s*=\s*([^)]*)/,
      je = /^(none|table(?!-c[ea]).+)/,
      He = new RegExp("^(" + F + ")(.*)$", "i"),
      Be = new RegExp("^([+-])=(" + F + ")", "i"),
      Re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Fe = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      We = ["Webkit", "O", "Moz", "ms"];

    function qe(e, t) {
      if (t in e) return t;
      for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = We.length; s--;)
        if ((t = We[s] + i) in e) return t;
      return n
    }

    function Xe(e, t) {
      for (var i, n, s, o = [], a = 0, r = e.length; a < r; a++)(n = e[a]).style && (o[a] = p._data(n, "olddisplay"), i = n.style.display, t ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && q(n) && (o[a] = p._data(n, "olddisplay", Me(n.nodeName)))) : (s = q(n), (i && "none" !== i || !s) && p._data(n, "olddisplay", s ? i : p.css(n, "display"))));
      for (a = 0; a < r; a++)(n = e[a]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[a] || "" : "none"));
      return e
    }

    function Ge(e, t, i) {
      var n = He.exec(t);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function Ye(e, t, i, n, s) {
      for (var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === i && (a += p.css(e, i + W[o], !0, s)), n ? ("content" === i && (a -= p.css(e, "padding" + W[o], !0, s)), "margin" !== i && (a -= p.css(e, "border" + W[o] + "Width", !0, s))) : (a += p.css(e, "padding" + W[o], !0, s), "padding" !== i && (a += p.css(e, "border" + W[o] + "Width", !0, s)));
      return a
    }

    function Ue(e, t, i) {
      var n = !0,
        s = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Ne(e),
        a = c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
      if (s <= 0 || null == s) {
        if (((s = Ae(e, t, o)) < 0 || null == s) && (s = e.style[t]), De.test(s)) return s;
        n = a && (c.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
      }
      return s + Ye(e, t, i || (a ? "border" : "content"), n, o) + "px"
    }

    function Ve(e, t, i, n, s) {
      return new Ve.prototype.init(e, t, i, n, s)
    }
    p.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var i = Ae(e, "opacity");
              return "" === i ? "1" : i
            }
          }
        }
      },
      cssNumber: {
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
        float: c.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(e, t, i, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var s, o, a, r = p.camelCase(t),
            l = e.style;
          if (t = p.cssProps[r] || (p.cssProps[r] = qe(l, r)), a = p.cssHooks[t] || p.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(e, !1, n)) ? s : l[t];
          if ("string" == (o = typeof i) && (s = Be.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(p.css(e, t)), o = "number"), null != i && i == i && ("number" !== o || p.cssNumber[r] || (i += "px"), c.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(e, i, n))))) try {
            l[t] = i
          } catch (e) {}
        }
      },
      css: function(e, t, i, n) {
        var s, o, a, r = p.camelCase(t);
        return t = p.cssProps[r] || (p.cssProps[r] = qe(e.style, r)), (a = p.cssHooks[t] || p.cssHooks[r]) && "get" in a && (o = a.get(e, !0, i)), void 0 === o && (o = Ae(e, t, n)), "normal" === o && t in Fe && (o = Fe[t]), "" === i || i ? (s = parseFloat(o), !0 === i || p.isNumeric(s) ? s || 0 : o) : o
      }
    }), p.each(["height", "width"], function(e, t) {
      p.cssHooks[t] = {
        get: function(e, i, n) {
          return i ? je.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, Re, function() {
            return Ue(e, t, n)
          }) : Ue(e, t, n) : void 0
        },
        set: function(e, i, n) {
          var s = n && Ne(e);
          return Ge(0, i, n ? Ye(e, t, n, c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, s), s) : 0)
        }
      }
    }), c.opacity || (p.cssHooks.opacity = {
      get: function(e, t) {
        return Oe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(e, t) {
        var i = e.style,
          n = e.currentStyle,
          s = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = n && n.filter || i.filter || "";
        ((i.zoom = 1) <= t || "" === t) && "" === p.trim(o.replace(Pe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = Pe.test(o) ? o.replace(Pe, s) : o + " " + s)
      }
    }), p.cssHooks.marginRight = Ie(c.reliableMarginRight, function(e, t) {
      return t ? p.swap(e, {
        display: "inline-block"
      }, Ae, [e, "marginRight"]) : void 0
    }), p.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      p.cssHooks[e + t] = {
        expand: function(i) {
          for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[e + W[n] + t] = o[n] || o[n - 2] || o[0];
          return s
        }
      }, Le.test(e) || (p.cssHooks[e + t].set = Ge)
    }), p.fn.extend({
      css: function(e, t) {
        return X(this, function(e, t, i) {
          var n, s, o = {},
            a = 0;
          if (p.isArray(t)) {
            for (n = Ne(e), s = t.length; a < s; a++) o[t[a]] = p.css(e, t[a], !1, n);
            return o
          }
          return void 0 !== i ? p.style(e, t, i) : p.css(e, t)
        }, e, t, 1 < arguments.length)
      },
      show: function() {
        return Xe(this, !0)
      },
      hide: function() {
        return Xe(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          q(this) ? p(this).show() : p(this).hide()
        })
      }
    }), ((p.Tween = Ve).prototype = {
      constructor: Ve,
      init: function(e, t, i, n, s, o) {
        this.elem = e, this.prop = i, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (p.cssNumber[i] ? "" : "px")
      },
      cur: function() {
        var e = Ve.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ve.propHooks._default.get(this)
      },
      run: function(e) {
        var t, i = Ve.propHooks[this.prop];
        return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ve.propHooks._default.set(this), this
      }
    }).init.prototype = Ve.prototype, (Ve.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
        },
        set: function(e) {
          p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    }).scrollTop = Ve.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, p.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }
    }, p.fx = Ve.prototype.init, p.fx.step = {};
    var Qe, Je, Ze, Ke, et, tt, it, nt = /^(?:toggle|show|hide)$/,
      st = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
      ot = /queueHooks$/,
      at = [function(e, t, i) {
        var n, s, o, a, r, l, d, u = this,
          h = {},
          f = e.style,
          v = e.nodeType && q(e),
          m = p._data(e, "fxshow");
        for (n in i.queue || (null == (r = p._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
            r.unqueued || l()
          }), r.unqueued++, u.always(function() {
            u.always(function() {
              r.unqueued--, p.queue(e, "fx").length || r.empty.fire()
            })
          })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (d = p.css(e, "display")) ? p._data(e, "olddisplay") || Me(e.nodeName) : d) && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== Me(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), i.overflow && (f.overflow = "hidden", c.shrinkWrapBlocks() || u.always(function() {
            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
          })), t)
          if (s = t[n], nt.exec(s)) {
            if (delete t[n], o = o || "toggle" === s, s === (v ? "hide" : "show")) {
              if ("show" !== s || !m || void 0 === m[n]) continue;
              v = !0
            }
            h[n] = m && m[n] || p.style(e, n)
          } else d = void 0;
        if (p.isEmptyObject(h)) "inline" === ("none" === d ? Me(e.nodeName) : d) && (f.display = d);
        else
          for (n in m ? "hidden" in m && (v = m.hidden) : m = p._data(e, "fxshow", {}), o && (m.hidden = !v), v ? p(e).show() : u.done(function() {
              p(e).hide()
            }), u.done(function() {
              var t;
              for (t in p._removeData(e, "fxshow"), h) p.style(e, t, h[t])
            }), h) a = ct(v ? m[n] : 0, n, u), n in m || (m[n] = a.start, v && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
      }],
      rt = {
        "*": [function(e, t) {
          var i = this.createTween(e, t),
            n = i.cur(),
            s = st.exec(t),
            o = s && s[3] || (p.cssNumber[e] ? "" : "px"),
            a = (p.cssNumber[e] || "px" !== o && +n) && st.exec(p.css(i.elem, e)),
            r = 1,
            l = 20;
          if (a && a[3] !== o)
            for (o = o || a[3], s = s || [], a = +n || 1; a /= r = r || ".5", p.style(i.elem, e, a + o), r !== (r = i.cur() / n) && 1 !== r && --l;);
          return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
        }]
      };

    function lt() {
      return setTimeout(function() {
        Qe = void 0
      }), Qe = p.now()
    }

    function dt(e, t) {
      var i, n = {
          height: e
        },
        s = 0;
      for (t = t ? 1 : 0; s < 4; s += 2 - t) n["margin" + (i = W[s])] = n["padding" + i] = e;
      return t && (n.opacity = n.width = e), n
    }

    function ct(e, t, i) {
      for (var n, s = (rt[t] || []).concat(rt["*"]), o = 0, a = s.length; o < a; o++)
        if (n = s[o].call(i, t, e)) return n
    }

    function ut(e, t, i) {
      var n, s, o = 0,
        a = at.length,
        r = p.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (s) return !1;
          for (var t = Qe || lt(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), o = 0, a = d.tweens.length; o < a; o++) d.tweens[o].run(n);
          return r.notifyWith(e, [d, n, i]), n < 1 && a ? i : (r.resolveWith(e, [d]), !1)
        },
        d = r.promise({
          elem: e,
          props: p.extend({}, t),
          opts: p.extend(!0, {
            specialEasing: {}
          }, i),
          originalProperties: t,
          originalOptions: i,
          startTime: Qe || lt(),
          duration: i.duration,
          tweens: [],
          createTween: function(t, i) {
            var n = p.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
            return d.tweens.push(n), n
          },
          stop: function(t) {
            var i = 0,
              n = t ? d.tweens.length : 0;
            if (s) return this;
            for (s = !0; i < n; i++) d.tweens[i].run(1);
            return t ? r.resolveWith(e, [d, t]) : r.rejectWith(e, [d, t]), this
          }
        }),
        c = d.props;
      for (function(e, t) {
          var i, n, s, o, a;
          for (i in e)
            if (s = t[n = p.camelCase(i)], o = e[i], p.isArray(o) && (s = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), (a = p.cssHooks[n]) && "expand" in a)
              for (i in o = a.expand(o), delete e[n], o) i in e || (e[i] = o[i], t[i] = s);
            else t[n] = s
        }(c, d.opts.specialEasing); o < a; o++)
        if (n = at[o].call(d, e, c, d.opts)) return n;
      return p.map(c, ct, d), p.isFunction(d.opts.start) && d.opts.start.call(e, d), p.fx.timer(p.extend(l, {
        elem: e,
        anim: d,
        queue: d.opts.queue
      })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }
    p.Animation = p.extend(ut, {
      tweener: function(e, t) {
        p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var i, n = 0, s = e.length; n < s; n++) i = e[n], rt[i] = rt[i] || [], rt[i].unshift(t)
      },
      prefilter: function(e, t) {
        t ? at.unshift(e) : at.push(e)
      }
    }), p.speed = function(e, t, i) {
      var n = e && "object" == typeof e ? p.extend({}, e) : {
        complete: i || !i && t || p.isFunction(e) && e,
        duration: e,
        easing: i && t || t && !p.isFunction(t) && t
      };
      return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
        p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
      }, n
    }, p.fn.extend({
      fadeTo: function(e, t, i, n) {
        return this.filter(q).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, i, n)
      },
      animate: function(e, t, i, n) {
        var s = p.isEmptyObject(e),
          o = p.speed(t, i, n),
          a = function() {
            var t = ut(this, p.extend({}, e), o);
            (s || p._data(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, t, i) {
        var n = function(e) {
          var t = e.stop;
          delete e.stop, t(i)
        };
        return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            s = null != e && e + "queueHooks",
            o = p.timers,
            a = p._data(this);
          if (s) a[s] && a[s].stop && n(a[s]);
          else
            for (s in a) a[s] && a[s].stop && ot.test(s) && n(a[s]);
          for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(i), t = !1, o.splice(s, 1));
          (t || !i) && p.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t, i = p._data(this),
            n = i[e + "queue"],
            s = i[e + "queueHooks"],
            o = p.timers,
            a = n ? n.length : 0;
          for (i.finish = !0, p.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < a; t++) n[t] && n[t].finish && n[t].finish.call(this);
          delete i.finish
        })
      }
    }), p.each(["toggle", "show", "hide"], function(e, t) {
      var i = p.fn[t];
      p.fn[t] = function(e, n, s) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(t, !0), e, n, s)
      }
    }), p.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      p.fn[e] = function(e, i, n) {
        return this.animate(t, e, i, n)
      }
    }), p.timers = [], p.fx.tick = function() {
      var e, t = p.timers,
        i = 0;
      for (Qe = p.now(); i < t.length; i++)(e = t[i])() || t[i] !== e || t.splice(i--, 1);
      t.length || p.fx.stop(), Qe = void 0
    }, p.fx.timer = function(e) {
      p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
    }, p.fx.interval = 13, p.fx.start = function() {
      Je || (Je = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.stop = function() {
      clearInterval(Je), Je = null
    }, p.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, p.fn.delay = function(e, t) {
      return e = p.fx && p.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, i) {
        var n = setTimeout(t, e);
        i.stop = function() {
          clearTimeout(n)
        }
      })
    }, (Ke = C.createElement("div")).setAttribute("className", "t"), Ke.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", tt = Ke.getElementsByTagName("a")[0], it = (et = C.createElement("select")).appendChild(C.createElement("option")), Ze = Ke.getElementsByTagName("input")[0], tt.style.cssText = "top:1px", c.getSetAttribute = "t" !== Ke.className, c.style = /top/.test(tt.getAttribute("style")), c.hrefNormalized = "/a" === tt.getAttribute("href"), c.checkOn = !!Ze.value, c.optSelected = it.selected, c.enctype = !!C.createElement("form").enctype, et.disabled = !0, c.optDisabled = !it.disabled, (Ze = C.createElement("input")).setAttribute("value", ""), c.input = "" === Ze.getAttribute("value"), Ze.value = "t", Ze.setAttribute("type", "radio"), c.radioValue = "t" === Ze.value;
    var pt = /\r/g;
    p.fn.extend({
      val: function(e) {
        var t, i, n, s = this[0];
        return arguments.length ? (n = p.isFunction(e), this.each(function(i) {
          var s;
          1 === this.nodeType && (null == (s = n ? e.call(this, i, p(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : p.isArray(s) && (s = p.map(s, function(e) {
            return null == e ? "" : e + ""
          })), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
        })) : s ? (t = p.valHooks[s.type] || p.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(pt, "") : null == i ? "" : i : void 0
      }
    }), p.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = p.find.attr(e, "value");
            return null != t ? t : p.trim(p.text(e))
          }
        },
        select: {
          get: function(e) {
            for (var t, i, n = e.options, s = e.selectedIndex, o = "select-one" === e.type || s < 0, a = o ? null : [], r = o ? s + 1 : n.length, l = s < 0 ? r : o ? s : 0; l < r; l++)
              if (!(!(i = n[l]).selected && l !== s || (c.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && p.nodeName(i.parentNode, "optgroup"))) {
                if (t = p(i).val(), o) return t;
                a.push(t)
              } return a
          },
          set: function(e, t) {
            for (var i, n, s = e.options, o = p.makeArray(t), a = s.length; a--;)
              if (n = s[a], 0 <= p.inArray(p.valHooks.option.get(n), o)) try {
                n.selected = i = !0
              } catch (e) {
                n.scrollHeight
              } else n.selected = !1;
            return i || (e.selectedIndex = -1), s
          }
        }
      }
    }), p.each(["radio", "checkbox"], function() {
      p.valHooks[this] = {
        set: function(e, t) {
          return p.isArray(t) ? e.checked = 0 <= p.inArray(p(e).val(), t) : void 0
        }
      }, c.checkOn || (p.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var ht, ft, vt = p.expr.attrHandle,
      mt = /^(?:checked|selected)$/i,
      gt = c.getSetAttribute,
      yt = c.input;
    p.fn.extend({
      attr: function(e, t) {
        return X(this, p.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
        return this.each(function() {
          p.removeAttr(this, e)
        })
      }
    }), p.extend({
      attr: function(e, t, i) {
        var n, s, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === I ? p.prop(e, t, i) : (1 === o && p.isXMLDoc(e) || (t = t.toLowerCase(), n = p.attrHooks[t] || (p.expr.match.bool.test(t) ? ft : ht)), void 0 === i ? n && "get" in n && null !== (s = n.get(e, t)) ? s : null == (s = p.find.attr(e, t)) ? void 0 : s : null !== i ? n && "set" in n && void 0 !== (s = n.set(e, i, t)) ? s : (e.setAttribute(t, i + ""), i) : void p.removeAttr(e, t))
      },
      removeAttr: function(e, t) {
        var i, n, s = 0,
          o = t && t.match(N);
        if (o && 1 === e.nodeType)
          for (; i = o[s++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) ? yt && gt || !mt.test(i) ? e[n] = !1 : e[p.camelCase("default-" + i)] = e[n] = !1 : p.attr(e, i, ""), e.removeAttribute(gt ? i : n)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t
            }
          }
        }
      }
    }), ft = {
      set: function(e, t, i) {
        return !1 === t ? p.removeAttr(e, i) : yt && gt || !mt.test(i) ? e.setAttribute(!gt && p.propFix[i] || i, i) : e[p.camelCase("default-" + i)] = e[i] = !0, i
      }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var i = vt[t] || p.find.attr;
      vt[t] = yt && gt || !mt.test(t) ? function(e, t, n) {
        var s, o;
        return n || (o = vt[t], vt[t] = s, s = null != i(e, t, n) ? t.toLowerCase() : null, vt[t] = o), s
      } : function(e, t, i) {
        return i ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
    }), yt && gt || (p.attrHooks.value = {
      set: function(e, t, i) {
        return p.nodeName(e, "input") ? void(e.defaultValue = t) : ht && ht.set(e, t, i)
      }
    }), gt || (ht = {
      set: function(e, t, i) {
        var n = e.getAttributeNode(i);
        return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
      }
    }, vt.id = vt.name = vt.coords = function(e, t, i) {
      var n;
      return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, p.valHooks.button = {
      get: function(e, t) {
        var i = e.getAttributeNode(t);
        return i && i.specified ? i.value : void 0
      },
      set: ht.set
    }, p.attrHooks.contenteditable = {
      set: function(e, t, i) {
        ht.set(e, "" !== t && t, i)
      }
    }, p.each(["width", "height"], function(e, t) {
      p.attrHooks[t] = {
        set: function(e, i) {
          return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
        }
      }
    })), c.style || (p.attrHooks.style = {
      get: function(e) {
        return e.style.cssText || void 0
      },
      set: function(e, t) {
        return e.style.cssText = t + ""
      }
    });
    var bt = /^(?:input|select|textarea|button|object)$/i,
      wt = /^(?:a|area)$/i;
    p.fn.extend({
      prop: function(e, t) {
        return X(this, p.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
        return e = p.propFix[e] || e, this.each(function() {
          try {
            this[e] = void 0, delete this[e]
          } catch (e) {}
        })
      }
    }), p.extend({
      propFix: {
        for: "htmlFor",
        class: "className"
      },
      prop: function(e, t, i) {
        var n, s, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !p.isXMLDoc(e)) && (t = p.propFix[t] || t, s = p.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = p.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      }
    }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
      p.propHooks[t] = {
        get: function(e) {
          return e.getAttribute(t, 4)
        }
      }
    }), c.optSelected || (p.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Tt = /[\t\r\n\f]/g;
    p.fn.extend({
      addClass: function(e) {
        var t, i, n, s, o, a, r = 0,
          l = this.length,
          d = "string" == typeof e && e;
        if (p.isFunction(e)) return this.each(function(t) {
          p(this).addClass(e.call(this, t, this.className))
        });
        if (d)
          for (t = (e || "").match(N) || []; r < l; r++)
            if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(Tt, " ") : " ")) {
              for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
              a = p.trim(n), i.className !== a && (i.className = a)
            } return this
      },
      removeClass: function(e) {
        var t, i, n, s, o, a, r = 0,
          l = this.length,
          d = 0 === arguments.length || "string" == typeof e && e;
        if (p.isFunction(e)) return this.each(function(t) {
          p(this).removeClass(e.call(this, t, this.className))
        });
        if (d)
          for (t = (e || "").match(N) || []; r < l; r++)
            if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(Tt, " ") : "")) {
              for (o = 0; s = t[o++];)
                for (; 0 <= n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
              a = e ? p.trim(n) : "", i.className !== a && (i.className = a)
            } return this
      },
      toggleClass: function(e, t) {
        var i = typeof e;
        return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(i) {
          p(this).toggleClass(e.call(this, i, this.className, t), t)
        } : function() {
          if ("string" === i)
            for (var t, n = 0, s = p(this), o = e.match(N) || []; t = o[n++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
          else(i === I || "boolean" === i) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : p._data(this, "__className__") || "")
        })
      },
      hasClass: function(e) {
        for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)
          if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(Tt, " ").indexOf(t)) return !0;
        return !1
      }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      p.fn[t] = function(e, i) {
        return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
      }
    }), p.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function(e, t, i) {
        return this.on(e, null, t, i)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, i, n) {
        return this.on(t, e, i, n)
      },
      undelegate: function(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
      }
    });
    var xt = p.now(),
      St = /\?/,
      Ct = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
      var i, n = null,
        s = p.trim(t + "");
      return s && !p.trim(s.replace(Ct, function(e, t, s, o) {
        return i && t && (n = 0), 0 === n ? e : (i = s || t, n += !o - !s, "")
      })) ? Function("return " + s)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
      var i;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser ? i = (new DOMParser).parseFromString(t, "text/xml") : ((i = new ActiveXObject("Microsoft.XMLDOM")).async = "false", i.loadXML(t))
      } catch (t) {
        i = void 0
      }
      return i && i.documentElement && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), i
    };
    var kt, Et, $t = /#.*$/,
      _t = /([?&])_=[^&]*/,
      Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Nt = /^(?:GET|HEAD)$/,
      At = /^\/\//,
      Lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Dt = {},
      zt = {},
      It = "*/".concat("*");
    try {
      Et = location.href
    } catch (t) {
      (Et = C.createElement("a")).href = "", Et = Et.href
    }

    function Pt(e) {
      return function(t, i) {
        "string" != typeof t && (i = t, t = "*");
        var n, s = 0,
          o = t.toLowerCase().match(N) || [];
        if (p.isFunction(i))
          for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
      }
    }

    function Ot(e, t, i, n) {
      var s = {},
        o = e === zt;

      function a(r) {
        var l;
        return s[r] = !0, p.each(e[r] || [], function(e, r) {
          var d = r(t, i, n);
          return "string" != typeof d || o || s[d] ? o ? !(l = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1)
        }), l
      }
      return a(t.dataTypes[0]) || !s["*"] && a("*")
    }

    function jt(e, t) {
      var i, n, s = p.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
      return i && p.extend(!0, e, i), e
    }
    kt = Lt.exec(Et.toLowerCase()) || [], p.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": p.parseJSON,
          "text xml": p.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? jt(jt(e, p.ajaxSettings), t) : jt(p.ajaxSettings, e)
      },
      ajaxPrefilter: Pt(Dt),
      ajaxTransport: Pt(zt),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, n, s, o, a, r, l, d, c = p.ajaxSetup({}, t),
          u = c.context || c,
          h = c.context && (u.nodeType || u.jquery) ? p(u) : p.event,
          f = p.Deferred(),
          v = p.Callbacks("once memory"),
          m = c.statusCode || {},
          g = {},
          y = {},
          b = 0,
          w = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === b) {
                if (!d)
                  for (d = {}; t = Mt.exec(o);) d[t[1].toLowerCase()] = t[2];
                t = d[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === b ? o : null
            },
            setRequestHeader: function(e, t) {
              var i = e.toLowerCase();
              return b || (e = y[i] = y[i] || e, g[e] = t), this
            },
            overrideMimeType: function(e) {
              return b || (c.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (b < 2)
                  for (t in e) m[t] = [m[t], e[t]];
                else T.always(e[T.status]);
              return this
            },
            abort: function(e) {
              var t = e || w;
              return l && l.abort(t), x(0, t), this
            }
          };
        if (f.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Et) + "").replace($t, "").replace(At, kt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = p.trim(c.dataType || "*").toLowerCase().match(N) || [""], null == c.crossDomain && (i = Lt.exec(c.url.toLowerCase()), c.crossDomain = !(!i || i[1] === kt[1] && i[2] === kt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (kt[3] || ("http:" === kt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = p.param(c.data, c.traditional)), Ot(Dt, c, t, T), 2 === b) return T;
        for (n in (r = p.event && c.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Nt.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (St.test(s) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = _t.test(s) ? s.replace(_t, "$1_=" + xt++) : s + (St.test(s) ? "&" : "?") + "_=" + xt++)), c.ifModified && (p.lastModified[s] && T.setRequestHeader("If-Modified-Since", p.lastModified[s]), p.etag[s] && T.setRequestHeader("If-None-Match", p.etag[s])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + It + "; q=0.01" : "") : c.accepts["*"]), c.headers) T.setRequestHeader(n, c.headers[n]);
        if (c.beforeSend && (!1 === c.beforeSend.call(u, T, c) || 2 === b)) return T.abort();
        for (n in w = "abort", {
            success: 1,
            error: 1,
            complete: 1
          }) T[n](c[n]);
        if (l = Ot(zt, c, t, T)) {
          T.readyState = 1, r && h.trigger("ajaxSend", [T, c]), c.async && 0 < c.timeout && (a = setTimeout(function() {
            T.abort("timeout")
          }, c.timeout));
          try {
            b = 1, l.send(g, x)
          } catch (e) {
            if (!(b < 2)) throw e;
            x(-1, e)
          }
        } else x(-1, "No Transport");

        function x(e, t, i, n) {
          var d, g, y, w, x, S = t;
          2 !== b && (b = 2, a && clearTimeout(a), l = void 0, o = n || "", T.readyState = 0 < e ? 4 : 0, d = 200 <= e && e < 300 || 304 === e, i && (w = function(e, t, i) {
            for (var n, s, o, a, r = e.contents, l = e.dataTypes;
              "*" === l[0];) l.shift(), void 0 === s && (s = e.mimeType || t.getResponseHeader("Content-Type"));
            if (s)
              for (a in r)
                if (r[a] && r[a].test(s)) {
                  l.unshift(a);
                  break
                } if (l[0] in i) o = l[0];
            else {
              for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                  o = a;
                  break
                }
                n || (n = a)
              }
              o = o || n
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
          }(c, T, i)), w = function(e, t, i, n) {
            var s, o, a, r, l, d = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
              if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
              if (!(a = d[l + " " + o] || d["* " + o]))
                for (s in d)
                  if ((r = s.split(" "))[1] === o && (a = d[l + " " + r[0]] || d["* " + r[0]])) {
                    !0 === a ? a = d[s] : !0 !== d[s] && (o = r[0], c.unshift(r[1]));
                    break
                  } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                  t = a(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(c, w, T, d), d ? (c.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (p.lastModified[s] = x), (x = T.getResponseHeader("etag")) && (p.etag[s] = x)), 204 === e || "HEAD" === c.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state, g = w.data, d = !(y = w.error))) : (y = S, (e || !S) && (S = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || S) + "", d ? f.resolveWith(u, [g, S, T]) : f.rejectWith(u, [T, S, y]), T.statusCode(m), m = void 0, r && h.trigger(d ? "ajaxSuccess" : "ajaxError", [T, c, d ? g : y]), v.fireWith(u, [T, S]), r && (h.trigger("ajaxComplete", [T, c]), --p.active || p.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function(e, t, i) {
        return p.get(e, t, i, "json")
      },
      getScript: function(e, t) {
        return p.get(e, void 0, t, "script")
      }
    }), p.each(["get", "post"], function(e, t) {
      p[t] = function(e, i, n, s) {
        return p.isFunction(i) && (s = s || n, n = i, i = void 0), p.ajax({
          url: e,
          type: t,
          dataType: s,
          data: i,
          success: n
        })
      }
    }), p._evalUrl = function(e) {
      return p.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      })
    }, p.fn.extend({
      wrapAll: function(e) {
        if (p.isFunction(e)) return this.each(function(t) {
          p(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
          var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      },
      wrapInner: function(e) {
        return this.each(p.isFunction(e) ? function(t) {
          p(this).wrapInner(e.call(this, t))
        } : function() {
          var t = p(this),
            i = t.contents();
          i.length ? i.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = p.isFunction(e);
        return this.each(function(i) {
          p(this).wrapAll(t ? e.call(this, i) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
        }).end()
      }
    }), p.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    }, p.expr.filters.visible = function(e) {
      return !p.expr.filters.hidden(e)
    };
    var Ht = /%20/g,
      Bt = /\[\]$/,
      Rt = /\r?\n/g,
      Ft = /^(?:submit|button|image|reset|file)$/i,
      Wt = /^(?:input|select|textarea|keygen)/i;

    function qt(e, t, i, n) {
      var s;
      if (p.isArray(t)) p.each(t, function(t, s) {
        i || Bt.test(e) ? n(e, s) : qt(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
      });
      else if (i || "object" !== p.type(t)) n(e, t);
      else
        for (s in t) qt(e + "[" + s + "]", t[s], i, n)
    }
    p.param = function(e, t) {
      var i, n = [],
        s = function(e, t) {
          t = p.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
        s(this.name, this.value)
      });
      else
        for (i in e) qt(i, e[i], t, s);
      return n.join("&").replace(Ht, "+")
    }, p.fn.extend({
      serialize: function() {
        return p.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = p.prop(this, "elements");
          return e ? p.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !p(this).is(":disabled") && Wt.test(this.nodeName) && !Ft.test(e) && (this.checked || !G.test(e))
        }).map(function(e, t) {
          var i = p(this).val();
          return null == i ? null : p.isArray(i) ? p.map(i, function(e) {
            return {
              name: t.name,
              value: e.replace(Rt, "\r\n")
            }
          }) : {
            name: t.name,
            value: i.replace(Rt, "\r\n")
          }
        }).get()
      }
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Ut() || function() {
        try {
          return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
      }()
    } : Ut;
    var Xt = 0,
      Gt = {},
      Yt = p.ajaxSettings.xhr();

    function Ut() {
      try {
        return new e.XMLHttpRequest
      } catch (e) {}
    }
    e.attachEvent && e.attachEvent("onunload", function() {
      for (var e in Gt) Gt[e](void 0, !0)
    }), c.cors = !!Yt && "withCredentials" in Yt, (Yt = c.ajax = !!Yt) && p.ajaxTransport(function(e) {
      var t;
      if (!e.crossDomain || c.cors) return {
        send: function(i, n) {
          var s, o = e.xhr(),
            a = ++Xt;
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) o[s] = e.xhrFields[s];
          for (s in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
          o.send(e.hasContent && e.data || null), t = function(i, s) {
            var r, l, d;
            if (t && (s || 4 === o.readyState))
              if (delete Gt[a], t = void 0, o.onreadystatechange = p.noop, s) 4 !== o.readyState && o.abort();
              else {
                d = {}, r = o.status, "string" == typeof o.responseText && (d.text = o.responseText);
                try {
                  l = o.statusText
                } catch (i) {
                  l = ""
                }
                r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = d.text ? 200 : 404
              } d && n(r, l, d, o.getAllResponseHeaders())
          }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Gt[a] = t : t()
        },
        abort: function() {
          t && t(void 0, !0)
        }
      }
    }), p.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(e) {
          return p.globalEval(e), e
        }
      }
    }), p.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, i = C.head || p("head")[0] || C.documentElement;
        return {
          send: function(n, s) {
            (t = C.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
              (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || s(200, "success"))
            }, i.insertBefore(t, i.firstChild)
          },
          abort: function() {
            t && t.onload(void 0, !0)
          }
        }
      }
    });
    var Vt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Vt.pop() || p.expando + "_" + xt++;
        return this[e] = !0, e
      }
    }), p.ajaxPrefilter("json jsonp", function(t, i, n) {
      var s, o, a, r = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
      return r || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Qt, "$1" + s) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
        return a || p.error(s + " was not called"), a[0]
      }, t.dataTypes[0] = "json", o = e[s], e[s] = function() {
        a = arguments
      }, n.always(function() {
        e[s] = o, t[s] && (t.jsonpCallback = i.jsonpCallback, Vt.push(s)), a && p.isFunction(o) && o(a[0]), a = o = void 0
      }), "script") : void 0
    }), p.parseHTML = function(e, t, i) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (i = t, t = !1), t = t || C;
      var n = w.exec(e),
        s = !i && [];
      return n ? [t.createElement(n[1])] : (n = p.buildFragment([e], t, s), s && s.length && p(s).remove(), p.merge([], n.childNodes))
    };
    var Jt = p.fn.load;
    p.fn.load = function(e, t, i) {
      if ("string" != typeof e && Jt) return Jt.apply(this, arguments);
      var n, s, o, a = this,
        r = e.indexOf(" ");
      return 0 <= r && (n = p.trim(e.slice(r, e.length)), e = e.slice(0, r)), p.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && p.ajax({
        url: e,
        type: o,
        dataType: "html",
        data: t
      }).done(function(e) {
        s = arguments, a.html(n ? p("<div>").append(p.parseHTML(e)).find(n) : e)
      }).complete(i && function(e, t) {
        a.each(i, s || [e.responseText, t, e])
      }), this
    }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      p.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), p.expr.filters.animated = function(e) {
      return p.grep(p.timers, function(t) {
        return e === t.elem
      }).length
    };
    var Zt = e.document.documentElement;

    function Kt(e) {
      return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    p.offset = {
      setOffset: function(e, t, i) {
        var n, s, o, a, r, l, d = p.css(e, "position"),
          c = p(e),
          u = {};
        "static" === d && (e.style.position = "relative"), r = c.offset(), o = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === d || "fixed" === d) && -1 < p.inArray("auto", [o, l]) ? (a = (n = c.position()).top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, i, r)), null != t.top && (u.top = t.top - r.top + a), null != t.left && (u.left = t.left - r.left + s), "using" in t ? t.using.call(e, u) : c.css(u)
      }
    }, p.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          p.offset.setOffset(this, e, t)
        });
        var t, i, n = {
            top: 0,
            left: 0
          },
          s = this[0],
          o = s && s.ownerDocument;
        return o ? (t = o.documentElement, p.contains(t, s) ? (typeof s.getBoundingClientRect !== I && (n = s.getBoundingClientRect()), i = Kt(o), {
          top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
          left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
        }) : n) : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, i = {
              top: 0,
              left: 0
            },
            n = this[0];
          return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (i = e.offset()), i.top += p.css(e[0], "borderTopWidth", !0), i.left += p.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - p.css(n, "marginTop", !0),
            left: t.left - i.left - p.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent || Zt; e && !p.nodeName(e, "html") && "static" === p.css(e, "position");) e = e.offsetParent;
          return e || Zt
        })
      }
    }), p.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var i = /Y/.test(t);
      p.fn[e] = function(n) {
        return X(this, function(e, n, s) {
          var o = Kt(e);
          return void 0 === s ? o ? t in o ? o[t] : o.document.documentElement[n] : e[n] : void(o ? o.scrollTo(i ? p(o).scrollLeft() : s, i ? s : p(o).scrollTop()) : e[n] = s)
        }, e, n, arguments.length, null)
      }
    }), p.each(["top", "left"], function(e, t) {
      p.cssHooks[t] = Ie(c.pixelPosition, function(e, i) {
        return i ? (i = Ae(e, t), De.test(i) ? p(e).position()[t] + "px" : i) : void 0
      })
    }), p.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      p.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(i, n) {
        p.fn[n] = function(n, s) {
          var o = arguments.length && (i || "boolean" != typeof n),
            a = i || (!0 === n || !0 === s ? "margin" : "border");
          return X(this, function(t, i, n) {
            var s;
            return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === n ? p.css(t, i, a) : p.style(t, i, n, a)
          }, t, o ? n : void 0, o, null)
        }
      })
    }), p.fn.size = function() {
      return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return p
    });
    var ei = e.jQuery,
      ti = e.$;
    return p.noConflict = function(t) {
      return e.$ === p && (e.$ = ti), t && e.jQuery === p && (e.jQuery = ei), p
    }, typeof t === I && (e.jQuery = e.$ = p), p
  }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(e) {
  "use strict";
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(e) {
  "use strict";
  e.fn.emulateTransitionEnd = function(t) {
    var i = !1,
      n = this;
    return e(this).one("bsTransitionEnd", function() {
      i = !0
    }), setTimeout(function() {
      i || e(n).trigger(e.support.transition.end)
    }, t), this
  }, e(function() {
    e.support.transition = function() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var i in t)
        if (void 0 !== e.style[i]) return {
          end: t[i]
        };
      return !1
    }(), e.support.transition && (e.event.special.bsTransitionEnd = {
      bindType: e.support.transition.end,
      delegateType: e.support.transition.end,
      handle: function(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery),
function(e) {
  "use strict";
  var t = '[data-dismiss="alert"]',
    i = function(i) {
      e(i).on("click", t, this.close)
    };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
    function n() {
      a.detach().trigger("closed.bs.alert").remove()
    }
    var s = e(this),
      o = s.attr("data-target");
    o || (o = (o = s.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
    var a = e("#" === o ? [] : o);
    t && t.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
  };
  var n = e.fn.alert;
  e.fn.alert = function(t) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.alert");
      s || n.data("bs.alert", s = new i(this)), "string" == typeof t && s[t].call(n)
    })
  }, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
    return e.fn.alert = n, this
  }, e(document).on("click.bs.alert.data-api", t, i.prototype.close)
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.button"),
        o = "object" == typeof t && t;
      s || n.data("bs.button", s = new i(this, o)), "toggle" == t ? s.toggle() : t && s.setState(t)
    })
  }
  var i = function(t, n) {
    this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.isLoading = !1
  };
  i.VERSION = "3.3.7", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function(t) {
    var i = "disabled",
      n = this.$element,
      s = n.is("input") ? "val" : "html",
      o = n.data();
    t += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(e.proxy(function() {
      n[s](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
    }, this), 0)
  }, i.prototype.toggle = function() {
    var e = !0,
      t = this.$element.closest('[data-toggle="buttons"]');
    if (t.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") ? (i.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), e && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var n = e.fn.button;
  e.fn.button = t, e.fn.button.Constructor = i, e.fn.button.noConflict = function() {
    return e.fn.button = n, this
  }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var n = e(i.target).closest(".btn");
    t.call(n, "toggle"), e(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.carousel"),
        o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t),
        a = "string" == typeof t ? t : o.slide;
      s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof t ? s.to(t) : a ? s[a]() : o.interval && s.pause().cycle()
    })
  }
  var i = function(t, i) {
    this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function(e) {
    if (!/input|textarea/i.test(e.target.tagName)) {
      switch (e.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      e.preventDefault()
    }
  }, i.prototype.cycle = function(t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function(e) {
    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
  }, i.prototype.getItemForDirection = function(e, t) {
    var i = this.getItemIndex(t);
    if (("prev" == e && 0 === i || "next" == e && i == this.$items.length - 1) && !this.options.wrap) return t;
    var n = (i + ("prev" == e ? -1 : 1)) % this.$items.length;
    return this.$items.eq(n)
  }, i.prototype.to = function(e) {
    var t = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      t.to(e)
    }) : i == e ? this.pause().cycle() : this.slide(i < e ? "next" : "prev", this.$items.eq(e))
  }, i.prototype.pause = function(t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  }, i.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  }, i.prototype.slide = function(t, n) {
    var s = this.$element.find(".item.active"),
      o = n || this.getItemForDirection(t, s),
      a = this.interval,
      r = "next" == t ? "left" : "right",
      l = this;
    if (o.hasClass("active")) return this.sliding = !1;
    var d = o[0],
      c = e.Event("slide.bs.carousel", {
        relatedTarget: d,
        direction: r
      });
    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
      if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var u = e(this.$indicators.children()[this.getItemIndex(o)]);
        u && u.addClass("active")
      }
      var p = e.Event("slid.bs.carousel", {
        relatedTarget: d,
        direction: r
      });
      return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd", function() {
        o.removeClass([t, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(p)
        }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
    }
  };
  var n = e.fn.carousel;
  e.fn.carousel = t, e.fn.carousel.Constructor = i, e.fn.carousel.noConflict = function() {
    return e.fn.carousel = n, this
  };
  var s = function(i) {
    var n, s = e(this),
      o = e(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
    if (o.hasClass("carousel")) {
      var a = e.extend({}, o.data(), s.data()),
        r = s.attr("data-slide-to");
      r && (a.interval = !1), t.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
    }
  };
  e(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), e(window).on("load", function() {
    e('[data-ride="carousel"]').each(function() {
      var i = e(this);
      t.call(i, i.data())
    })
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    var i, n = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return e(n)
  }

  function i(t) {
    return this.each(function() {
      var i = e(this),
        s = i.data("bs.collapse"),
        o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
      !s && o.toggle && /show|hide/.test(t) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), "string" == typeof t && s[t]()
    })
  }
  var n = function(t, i) {
    this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
    toggle: !0
  }, n.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
  }, n.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(s && s.length && (t = s.data("bs.collapse")) && t.transitioning)) {
        var o = e.Event("show.bs.collapse");
        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
          s && s.length && (i.call(s, "hide"), t || s.data("bs.collapse", null));
          var a = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var r = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!e.support.transition) return r.call(this);
          var l = e.camelCase(["scroll", a].join("-"));
          this.$element.one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])
        }
      }
    }
  }, n.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = e.Event("hide.bs.collapse");
      if (this.$element.trigger(t), !t.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var s = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return e.support.transition ? void this.$element[i](0).one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
      }
    }
  }, n.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, n.prototype.getParent = function() {
    return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(i, n) {
      var s = e(n);
      this.addAriaAndCollapsedClass(t(s), s)
    }, this)).end()
  }, n.prototype.addAriaAndCollapsedClass = function(e, t) {
    var i = e.hasClass("in");
    e.attr("aria-expanded", i), t.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  var s = e.fn.collapse;
  e.fn.collapse = i, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function() {
    return e.fn.collapse = s, this
  }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
    var s = e(this);
    s.attr("data-target") || n.preventDefault();
    var o = t(s),
      a = o.data("bs.collapse") ? "toggle" : s.data();
    i.call(o, a)
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    var i = t.attr("data-target");
    i || (i = (i = t.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var n = i && e(i);
    return n && n.length ? n : t.parent()
  }

  function i(i) {
    i && 3 === i.which || (e(".dropdown-backdrop").remove(), e(n).each(function() {
      var n = e(this),
        s = t(n),
        o = {
          relatedTarget: this
        };
      s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && e.contains(s[0], i.target) || (s.trigger(i = e.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
    }))
  }
  var n = '[data-toggle="dropdown"]',
    s = function(t) {
      e(t).on("click.bs.dropdown", this.toggle)
    };
  s.VERSION = "3.3.7", s.prototype.toggle = function(n) {
    var s = e(this);
    if (!s.is(".disabled, :disabled")) {
      var o = t(s),
        a = o.hasClass("open");
      if (i(), !a) {
        "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", i);
        var r = {
          relatedTarget: this
        };
        if (o.trigger(n = e.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
        s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", r))
      }
      return !1
    }
  }, s.prototype.keydown = function(i) {
    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
      var s = e(this);
      if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
        var o = t(s),
          a = o.hasClass("open");
        if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && o.find(n).trigger("focus"), s.trigger("click");
        var r = o.find(".dropdown-menu li:not(.disabled):visible a");
        if (r.length) {
          var l = r.index(i.target);
          38 == i.which && 0 < l && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
        }
      }
    }
  };
  var o = e.fn.dropdown;
  e.fn.dropdown = function(t) {
    return this.each(function() {
      var i = e(this),
        n = i.data("bs.dropdown");
      n || i.data("bs.dropdown", n = new s(this)), "string" == typeof t && n[t].call(i)
    })
  }, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
    return e.fn.dropdown = o, this
  }, e(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
  }).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(e) {
  "use strict";

  function t(t, n) {
    return this.each(function() {
      var s = e(this),
        o = s.data("bs.modal"),
        a = e.extend({}, i.DEFAULTS, s.data(), "object" == typeof t && t);
      o || s.data("bs.modal", o = new i(this, a)), "string" == typeof t ? o[t](n) : a.show && o.show(n)
    })
  }
  var i = function(t, i) {
    this.options = i, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e)
  }, i.prototype.show = function(t) {
    var n = this,
      s = e.Event("show.bs.modal", {
        relatedTarget: t
      });
    this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      n.$element.one("mouseup.dismiss.bs.modal", function(t) {
        e(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var s = e.support.transition && n.$element.hasClass("fade");
      n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
      var o = e.Event("shown.bs.modal", {
        relatedTarget: t
      });
      s ? n.$dialog.one("bsTransitionEnd", function() {
        n.$element.trigger("focus").trigger(o)
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
    }))
  }, i.prototype.hide = function(t) {
    t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
  }, i.prototype.enforceFocus = function() {
    e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
      document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
      27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, i.prototype.resize = function() {
    this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
  }, i.prototype.hideModal = function() {
    var e = this;
    this.$element.hide(), this.backdrop(function() {
      e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
    })
  }, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, i.prototype.backdrop = function(t) {
    var n = this,
      s = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var o = e.support.transition && s;
      if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : t()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var a = function() {
        n.removeBackdrop(), t && t()
      };
      e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
    } else t && t()
  }, i.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, i.prototype.adjustDialog = function() {
    var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
    })
  }, i.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, i.prototype.checkScrollbar = function() {
    var e = window.innerWidth;
    if (!e) {
      var t = document.documentElement.getBoundingClientRect();
      e = t.right - Math.abs(t.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
  }, i.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, i.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), t
  };
  var n = e.fn.modal;
  e.fn.modal = t, e.fn.modal.Constructor = i, e.fn.modal.noConflict = function() {
    return e.fn.modal = n, this
  }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var n = e(this),
      s = n.attr("href"),
      o = e(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
      a = o.data("bs.modal") ? "toggle" : e.extend({
        remote: !/#/.test(s) && s
      }, o.data(), n.data());
    n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(e) {
      e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
        n.is(":visible") && n.trigger("focus")
      })
    }), t.call(o, a, this)
  })
}(jQuery),
function(e) {
  "use strict";
  var t = function(e, t) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
  };
  t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, t.prototype.init = function(t, i, n) {
    if (this.enabled = !0, this.type = t, this.$element = e(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
      var a = s[o];
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
      else if ("manual" != a) {
        var r = "hover" == a ? "mouseenter" : "focusin",
          l = "hover" == a ? "mouseleave" : "focusout";
        this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = e.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, t.prototype.getDefaults = function() {
    return t.DEFAULTS
  }, t.prototype.getOptions = function(t) {
    return (t = e.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t
  }, t.prototype.getDelegateOptions = function() {
    var t = {},
      i = this.getDefaults();
    return this._options && e.each(this._options, function(e, n) {
      i[e] != n && (t[e] = n)
    }), t
  }, t.prototype.enter = function(t) {
    var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), t instanceof e.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
  }, t.prototype.isInStateTrue = function() {
    for (var e in this.inState)
      if (this.inState[e]) return !0;
    return !1
  }, t.prototype.leave = function(t) {
    var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), t instanceof e.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
  }, t.prototype.show = function() {
    var i = e.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(i);
      var n = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (i.isDefaultPrevented() || !n) return;
      var s = this,
        o = this.tip(),
        a = this.getUID(this.type);
      this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        d = l.test(r);
      d && (r = r.replace(l, "") || "top"), o.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var c = this.getPosition(),
        u = o[0].offsetWidth,
        p = o[0].offsetHeight;
      if (d) {
        var h = r,
          f = this.getPosition(this.$viewport);
        r = "bottom" == r && c.bottom + p > f.bottom ? "top" : "top" == r && c.top - p < f.top ? "bottom" : "right" == r && c.right + u > f.width ? "left" : "left" == r && c.left - u < f.left ? "right" : r, o.removeClass(h).addClass(r)
      }
      var v = this.getCalculatedOffset(r, c, u, p);
      this.applyPlacement(v, r);
      var m = function() {
        var e = s.hoverState;
        s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == e && s.leave(s)
      };
      e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(t.TRANSITION_DURATION) : m()
    }
  }, t.prototype.applyPlacement = function(t, i) {
    var n = this.tip(),
      s = n[0].offsetWidth,
      o = n[0].offsetHeight,
      a = parseInt(n.css("margin-top"), 10),
      r = parseInt(n.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(r) && (r = 0), t.top += a, t.left += r, e.offset.setOffset(n[0], e.extend({
      using: function(e) {
        n.css({
          top: Math.round(e.top),
          left: Math.round(e.left)
        })
      }
    }, t), 0), n.addClass("in");
    var l = n[0].offsetWidth,
      d = n[0].offsetHeight;
    "top" == i && d != o && (t.top = t.top + o - d);
    var c = this.getViewportAdjustedDelta(i, t, l, d);
    c.left ? t.left += c.left : t.top += c.top;
    var u = /top|bottom/.test(i),
      p = u ? 2 * c.left - s + l : 2 * c.top - o + d,
      h = u ? "offsetWidth" : "offsetHeight";
    n.offset(t), this.replaceArrow(p, n[0][h], u)
  }, t.prototype.replaceArrow = function(e, t, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - e / t) + "%").css(i ? "top" : "left", "")
  }, t.prototype.setContent = function() {
    var e = this.tip(),
      t = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
  }, t.prototype.hide = function(i) {
    function n() {
      "in" != s.hoverState && o.detach(), s.$element && s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
    }
    var s = this,
      o = e(this.$tip),
      a = e.Event("hide.bs." + this.type);
    if (this.$element.trigger(a), !a.isDefaultPrevented()) return o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(t.TRANSITION_DURATION) : n(), this.hoverState = null, this
  }, t.prototype.fixTitle = function() {
    var e = this.$element;
    (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
  }, t.prototype.hasContent = function() {
    return this.getTitle()
  }, t.prototype.getPosition = function(t) {
    var i = (t = t || this.$element)[0],
      n = "BODY" == i.tagName,
      s = i.getBoundingClientRect();
    null == s.width && (s = e.extend({}, s, {
      width: s.right - s.left,
      height: s.bottom - s.top
    }));
    var o = window.SVGElement && i instanceof window.SVGElement,
      a = n ? {
        top: 0,
        left: 0
      } : o ? null : t.offset(),
      r = {
        scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
      },
      l = n ? {
        width: e(window).width(),
        height: e(window).height()
      } : null;
    return e.extend({}, s, r, l, a)
  }, t.prototype.getCalculatedOffset = function(e, t, i, n) {
    return "bottom" == e ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - i / 2
    } : "top" == e ? {
      top: t.top - n,
      left: t.left + t.width / 2 - i / 2
    } : "left" == e ? {
      top: t.top + t.height / 2 - n / 2,
      left: t.left - i
    } : {
      top: t.top + t.height / 2 - n / 2,
      left: t.left + t.width
    }
  }, t.prototype.getViewportAdjustedDelta = function(e, t, i, n) {
    var s = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return s;
    var o = this.options.viewport && this.options.viewport.padding || 0,
      a = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
      var r = t.top - o - a.scroll,
        l = t.top + o - a.scroll + n;
      r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
    } else {
      var d = t.left - o,
        c = t.left + o + i;
      d < a.left ? s.left = a.left - d : c > a.right && (s.left = a.left + a.width - c)
    }
    return s
  }, t.prototype.getTitle = function() {
    var e = this.$element,
      t = this.options;
    return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
  }, t.prototype.getUID = function(e) {
    for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
    return e
  }, t.prototype.tip = function() {
    if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, t.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, t.prototype.enable = function() {
    this.enabled = !0
  }, t.prototype.disable = function() {
    this.enabled = !1
  }, t.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, t.prototype.toggle = function(t) {
    var i = this;
    t && ((i = e(t.currentTarget).data("bs." + this.type)) || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i))), t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, t.prototype.destroy = function() {
    var e = this;
    clearTimeout(this.timeout), this.hide(function() {
      e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
    })
  };
  var i = e.fn.tooltip;
  e.fn.tooltip = function(i) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.tooltip"),
        o = "object" == typeof i && i;
      !s && /destroy|hide/.test(i) || (s || n.data("bs.tooltip", s = new t(this, o)), "string" == typeof i && s[i]())
    })
  }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
    return e.fn.tooltip = i, this
  }
}(jQuery),
function(e) {
  "use strict";
  var t = function(e, t) {
    this.init("popover", e, t)
  };
  if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
  t.VERSION = "3.3.7", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), ((t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)).constructor = t).prototype.getDefaults = function() {
    return t.DEFAULTS
  }, t.prototype.setContent = function() {
    var e = this.tip(),
      t = this.getTitle(),
      i = this.getContent();
    e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
  }, t.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, t.prototype.getContent = function() {
    var e = this.$element,
      t = this.options;
    return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
  }, t.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var i = e.fn.popover;
  e.fn.popover = function(i) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.popover"),
        o = "object" == typeof i && i;
      !s && /destroy|hide/.test(i) || (s || n.data("bs.popover", s = new t(this, o)), "string" == typeof i && s[i]())
    })
  }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
    return e.fn.popover = i, this
  }
}(jQuery),
function(e) {
  "use strict";

  function t(i, n) {
    this.$body = e(document.body), this.$scrollElement = e(e(i).is(document.body) ? window : i), this.options = e.extend({}, t.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
  }

  function i(i) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.scrollspy"),
        o = "object" == typeof i && i;
      s || n.data("bs.scrollspy", s = new t(this, o)), "string" == typeof i && s[i]()
    })
  }
  t.VERSION = "3.3.7", t.DEFAULTS = {
    offset: 10
  }, t.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, t.prototype.refresh = function() {
    var t = this,
      i = "offset",
      n = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var t = e(this),
        s = t.data("target") || t.attr("href"),
        o = /^#./.test(s) && e(s);
      return o && o.length && o.is(":visible") && [
        [o[i]().top + n, s]
      ] || null
    }).sort(function(e, t) {
      return e[0] - t[0]
    }).each(function() {
      t.offsets.push(this[0]), t.targets.push(this[1])
    })
  }, t.prototype.process = function() {
    var e, t = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      n = this.options.offset + i - this.$scrollElement.height(),
      s = this.offsets,
      o = this.targets,
      a = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), n <= t) return a != (e = o[o.length - 1]) && this.activate(e);
    if (a && t < s[0]) return this.activeTarget = null, this.clear();
    for (e = s.length; e--;) a != o[e] && t >= s[e] && (void 0 === s[e + 1] || t < s[e + 1]) && this.activate(o[e])
  }, t.prototype.activate = function(t) {
    this.activeTarget = t, this.clear();
    var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      n = e(i).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
  }, t.prototype.clear = function() {
    e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var n = e.fn.scrollspy;
  e.fn.scrollspy = i, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
    return e.fn.scrollspy = n, this
  }, e(window).on("load.bs.scrollspy.data-api", function() {
    e('[data-spy="scroll"]').each(function() {
      var t = e(this);
      i.call(t, t.data())
    })
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.tab");
      s || n.data("bs.tab", s = new i(this)), "string" == typeof t && s[t]()
    })
  }
  var i = function(t) {
    this.element = e(t)
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var t = this.element,
      i = t.closest("ul:not(.dropdown-menu)"),
      n = t.data("target");
    if (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var s = i.find(".active:last a"),
        o = e.Event("hide.bs.tab", {
          relatedTarget: t[0]
        }),
        a = e.Event("show.bs.tab", {
          relatedTarget: s[0]
        });
      if (s.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
        var r = e(n);
        this.activate(t.closest("li"), i), this.activate(r, r.parent(), function() {
          s.trigger({
            type: "hidden.bs.tab",
            relatedTarget: t[0]
          }), t.trigger({
            type: "shown.bs.tab",
            relatedTarget: s[0]
          })
        })
      }
    }
  }, i.prototype.activate = function(t, n, s) {
    function o() {
      a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
    }
    var a = n.find("> .active"),
      r = s && e.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
    a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
  };
  var n = e.fn.tab;
  e.fn.tab = t, e.fn.tab.Constructor = i, e.fn.tab.noConflict = function() {
    return e.fn.tab = n, this
  };
  var s = function(i) {
    i.preventDefault(), t.call(e(this), "show")
  };
  e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        s = n.data("bs.affix"),
        o = "object" == typeof t && t;
      s || n.data("bs.affix", s = new i(this, o)), "string" == typeof t && s[t]()
    })
  }
  var i = function(t, n) {
    this.options = e.extend({}, i.DEFAULTS, n), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function(e, t, i, n) {
    var s = this.$target.scrollTop(),
      o = this.$element.offset(),
      a = this.$target.height();
    if (null != i && "top" == this.affixed) return s < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + a <= e - n) && "bottom";
    var r = null == this.affixed,
      l = r ? s : o.top;
    return null != i && s <= i ? "top" : null != n && e - n <= l + (r ? a : t) && "bottom"
  }, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var e = this.$target.scrollTop(),
      t = this.$element.offset();
    return this.pinnedOffset = t.top - e
  }, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(e.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var t = this.$element.height(),
        n = this.options.offset,
        s = n.top,
        o = n.bottom,
        a = Math.max(e(document).height(), e(document.body).height());
      "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
      var r = this.getState(a, t, s, o);
      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (r ? "-" + r : ""),
          d = e.Event(l + ".bs.affix");
        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
        this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == r && this.$element.offset({
        top: a - t - o
      })
    }
  };
  var n = e.fn.affix;
  e.fn.affix = t, e.fn.affix.Constructor = i, e.fn.affix.noConflict = function() {
    return e.fn.affix = n, this
  }, e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
      var i = e(this),
        n = i.data();
      n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), t.call(i, n)
    })
  })
}(jQuery),
function() {
  var e, t;
  e = this.jQuery || window.jQuery, t = e(window), e.fn.stick_in_parent = function(i) {
    var n, s, o, a, r, l, d, c, u, p, h;
    for (null == i && (i = {}), h = i.sticky_class, r = i.inner_scrolling, p = i.recalc_every, u = i.parent, c = i.offset_top, d = i.spacer, s = i.bottoming, null == c && (c = 0), null == u && (u = void 0), null == r && (r = !0), null == h && (h = "is_stuck"), n = e(document), null == s && (s = !0), o = function(i, o, a, l, f, v, m, g) {
        var y, b, w, T, x, S, C, k, E, $, _, M;
        if (!i.data("sticky_kit")) {
          if (i.data("sticky_kit", !0), x = n.height(), C = i.parent(), null != u && (C = C.closest(u)), !C.length) throw "failed to find stick parent";
          if (y = w = !1, (_ = null != d ? d && i.closest(d) : e("<div />")) && _.css("position", i.css("position")), (k = function() {
              var e, t, s;
              if (!g && (x = n.height(), e = parseInt(C.css("border-top-width"), 10), t = parseInt(C.css("padding-top"), 10), o = parseInt(C.css("padding-bottom"), 10), a = C.offset().top + e + t, l = C.height(), w && (y = w = !1, null == d && (i.insertAfter(_), _.detach()), i.css({
                  position: "",
                  top: "",
                  width: "",
                  bottom: ""
                }).removeClass(h), s = !0), f = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - c, v = i.outerHeight(!0), m = i.css("float"), _ && _.css({
                  width: i.outerWidth(!0),
                  height: v,
                  display: i.css("display"),
                  "vertical-align": i.css("vertical-align"),
                  float: m
                }), s)) return M()
            })(), v !== l) return T = void 0, S = c, $ = p, M = function() {
            var e, u, b, E;
            if (!g && (b = !1, null != $ && --$ <= 0 && ($ = p, k(), b = !0), b || n.height() === x || k(), b = t.scrollTop(), null != T && (u = b - T), T = b, w ? (s && (E = l + a < b + v + S, y && !E && (y = !1, i.css({
                position: "fixed",
                bottom: "",
                top: S
              }).trigger("sticky_kit:unbottom"))), b < f && (w = !1, S = c, null == d && ("left" !== m && "right" !== m || i.insertAfter(_), _.detach()), e = {
                position: "",
                width: "",
                top: ""
              }, i.css(e).removeClass(h).trigger("sticky_kit:unstick")), r && (e = t.height()) < v + c && !y && (S -= u, S = Math.max(e - v, S), S = Math.min(c, S), w && i.css({
                top: S + "px"
              }))) : f < b && (w = !0, (e = {
                position: "fixed",
                top: S
              }).width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(e).addClass(h), null == d && (i.after(_), "left" !== m && "right" !== m || _.append(i)), i.trigger("sticky_kit:stick")), w && s && (null == E && (E = l + a < b + v + S), !y && E))) return y = !0, "static" === C.css("position") && C.css({
              position: "relative"
            }), i.css({
              position: "absolute",
              bottom: o,
              top: "auto"
            }).trigger("sticky_kit:bottom")
          }, E = function() {
            return k(), M()
          }, b = function() {
            if (g = !0, t.off("touchmove", M), t.off("scroll", M), t.off("resize", E), e(document.body).off("sticky_kit:recalc", E), i.off("sticky_kit:detach", b), i.removeData("sticky_kit"), i.css({
                position: "",
                bottom: "",
                top: "",
                width: ""
              }), C.position("position", ""), w) return null == d && ("left" !== m && "right" !== m || i.insertAfter(_), _.remove()), i.removeClass(h)
          }, t.on("touchmove", M), t.on("scroll", M), t.on("resize", E), e(document.body).on("sticky_kit:recalc", E), i.on("sticky_kit:detach", b), setTimeout(M, 0)
        }
      }, a = 0, l = this.length; a < l; a++) i = this[a], o(e(i));
    return this
  }
}.call(this),
  function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
  }(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
          blur: function() {},
          nodeName: ""
        },
        querySelector: function() {
          return null
        },
        querySelectorAll: function() {
          return []
        },
        getElementById: function() {
          return null
        },
        createEvent: function() {
          return {
            initEvent: function() {}
          }
        },
        createElement: function() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function() {},
            getElementsByTagName: function() {
              return []
            }
          }
        },
        location: {
          hash: ""
        }
      } : document,
      t = "undefined" == typeof window ? {
        document: e,
        navigator: {
          userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
          return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
          return {
            getPropertyValue: function() {
              return ""
            }
          }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
      } : window,
      i = function(e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
      };

    function n(n, s) {
      var o = [],
        a = 0;
      if (n && !s && n instanceof i) return n;
      if (n)
        if ("string" == typeof n) {
          var r, l, d = n.trim();
          if (0 <= d.indexOf("<") && 0 <= d.indexOf(">")) {
            var c = "div";
            for (0 === d.indexOf("<li") && (c = "ul"), 0 === d.indexOf("<tr") && (c = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (c = "tr"), 0 === d.indexOf("<tbody") && (c = "table"), 0 === d.indexOf("<option") && (c = "select"), (l = e.createElement(c)).innerHTML = d, a = 0; a < l.childNodes.length; a += 1) o.push(l.childNodes[a])
          } else
            for (r = s || "#" !== n[0] || n.match(/[ .<>:~]/) ? (s || e).querySelectorAll(n.trim()) : [e.getElementById(n.trim().split("#")[1])], a = 0; a < r.length; a += 1) r[a] && o.push(r[a])
        } else if (n.nodeType || n === t || n === e) o.push(n);
      else if (0 < n.length && n[0].nodeType)
        for (a = 0; a < n.length; a += 1) o.push(n[a]);
      return new i(o)
    }

    function s(e) {
      for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
      return t
    }
    n.fn = i.prototype, n.Class = i, n.Dom7 = i;
    var o = {
      addClass: function(e) {
        if (void 0 === e) return this;
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(t[i]);
        return this
      },
      removeClass: function(e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(t[i]);
        return this
      },
      hasClass: function(e) {
        return !!this[0] && this[0].classList.contains(e)
      },
      toggleClass: function(e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
        return this
      },
      attr: function(e, t) {
        var i = arguments;
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === i.length) this[n].setAttribute(e, t);
          else
            for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
        return this
      },
      removeAttr: function(e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this
      },
      data: function(e, t) {
        var i;
        if (void 0 !== t) {
          for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
          return this
        }
        if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
      },
      transform: function(e) {
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransform = e, i.transform = e
        }
        return this
      },
      transition: function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransitionDuration = e, i.transitionDuration = e
        }
        return this
      },
      on: function() {
        for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
        var s = t[0],
          o = t[1],
          a = t[2],
          r = t[3];

        function l(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if (i.indexOf(e) < 0 && i.unshift(e), n(t).is(o)) a.apply(t, i);
            else
              for (var s = n(t).parents(), r = 0; r < s.length; r += 1) n(s[r]).is(o) && a.apply(s[r], i)
          }
        }

        function d(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
        }
        "function" == typeof t[1] && (s = (e = t)[0], a = e[1], r = e[2], o = void 0), r || (r = !1);
        for (var c, u = s.split(" "), p = 0; p < this.length; p += 1) {
          var h = this[p];
          if (o)
            for (c = 0; c < u.length; c += 1) {
              var f = u[c];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
                listener: a,
                proxyListener: l
              }), h.addEventListener(f, l, r)
            } else
              for (c = 0; c < u.length; c += 1) {
                var v = u[c];
                h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[v] || (h.dom7Listeners[v] = []), h.dom7Listeners[v].push({
                  listener: a,
                  proxyListener: d
                }), h.addEventListener(v, d, r)
              }
        }
        return this
      },
      off: function() {
        for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
        var n = t[0],
          s = t[1],
          o = t[2],
          a = t[3];
        "function" == typeof t[1] && (n = (e = t)[0], o = e[1], a = e[2], s = void 0), a || (a = !1);
        for (var r = n.split(" "), l = 0; l < r.length; l += 1)
          for (var d = r[l], c = 0; c < this.length; c += 1) {
            var u = this[c],
              p = void 0;
            if (!s && u.dom7Listeners ? p = u.dom7Listeners[d] : s && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length)
              for (var h = p.length - 1; 0 <= h; h -= 1) {
                var f = p[h];
                o && f.listener === o ? (u.removeEventListener(d, f.proxyListener, a), p.splice(h, 1)) : o || (u.removeEventListener(d, f.proxyListener, a), p.splice(h, 1))
              }
          }
        return this
      },
      trigger: function() {
        for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
        for (var s = i[0].split(" "), o = i[1], a = 0; a < s.length; a += 1)
          for (var r = s[a], l = 0; l < this.length; l += 1) {
            var d = this[l],
              c = void 0;
            try {
              c = new t.CustomEvent(r, {
                detail: o,
                bubbles: !0,
                cancelable: !0
              })
            } catch (i) {
              (c = e.createEvent("Event")).initEvent(r, !0, !0), c.detail = o
            }
            d.dom7EventData = i.filter(function(e, t) {
              return 0 < t
            }), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
          }
        return this
      },
      transitionEnd: function(e) {
        var t, i = ["webkitTransitionEnd", "transitionend"],
          n = this;

        function s(o) {
          if (o.target === this)
            for (e.call(this, o), t = 0; t < i.length; t += 1) n.off(i[t], s)
        }
        if (e)
          for (t = 0; t < i.length; t += 1) n.on(i[t], s);
        return this
      },
      outerWidth: function(e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      },
      outerHeight: function(e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      },
      offset: function() {
        if (0 < this.length) {
          var i = this[0],
            n = i.getBoundingClientRect(),
            s = e.body,
            o = i.clientTop || s.clientTop || 0,
            a = i.clientLeft || s.clientLeft || 0,
            r = i === t ? t.scrollY : i.scrollTop,
            l = i === t ? t.scrollX : i.scrollLeft;
          return {
            top: n.top + r - o,
            left: n.left + l - a
          }
        }
        return null
      },
      css: function(e, i) {
        var n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (var s in e) this[n].style[s] = e[s];
            return this
          }
          if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
          return this
        }
        return this
      },
      each: function(e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this
      },
      html: function(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this
      },
      text: function(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this
      },
      is: function(s) {
        var o, a, r = this[0];
        if (!r || void 0 === s) return !1;
        if ("string" == typeof s) {
          if (r.matches) return r.matches(s);
          if (r.webkitMatchesSelector) return r.webkitMatchesSelector(s);
          if (r.msMatchesSelector) return r.msMatchesSelector(s);
          for (o = n(s), a = 0; a < o.length; a += 1)
            if (o[a] === r) return !0;
          return !1
        }
        if (s === e) return r === e;
        if (s === t) return r === t;
        if (s.nodeType || s instanceof i) {
          for (o = s.nodeType ? [s] : s, a = 0; a < o.length; a += 1)
            if (o[a] === r) return !0;
          return !1
        }
        return !1
      },
      index: function() {
        var e, t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
          return e
        }
      },
      eq: function(e) {
        if (void 0 === e) return this;
        var t, n = this.length;
        return new i(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
      },
      append: function() {
        for (var t, n = [], s = arguments.length; s--;) n[s] = arguments[s];
        for (var o = 0; o < n.length; o += 1) {
          t = n[o];
          for (var a = 0; a < this.length; a += 1)
            if ("string" == typeof t) {
              var r = e.createElement("div");
              for (r.innerHTML = t; r.firstChild;) this[a].appendChild(r.firstChild)
            } else if (t instanceof i)
            for (var l = 0; l < t.length; l += 1) this[a].appendChild(t[l]);
          else this[a].appendChild(t)
        }
        return this
      },
      prepend: function(t) {
        var n, s;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            var o = e.createElement("div");
            for (o.innerHTML = t, s = o.childNodes.length - 1; 0 <= s; s -= 1) this[n].insertBefore(o.childNodes[s], this[n].childNodes[0])
          } else if (t instanceof i)
          for (s = 0; s < t.length; s += 1) this[n].insertBefore(t[s], this[n].childNodes[0]);
        else this[n].insertBefore(t, this[n].childNodes[0]);
        return this
      },
      next: function(e) {
        return 0 < this.length ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
      },
      nextAll: function(e) {
        var t = [],
          s = this[0];
        if (!s) return new i([]);
        for (; s.nextElementSibling;) {
          var o = s.nextElementSibling;
          e ? n(o).is(e) && t.push(o) : t.push(o), s = o
        }
        return new i(t)
      },
      prev: function(e) {
        if (0 < this.length) {
          var t = this[0];
          return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
        }
        return new i([])
      },
      prevAll: function(e) {
        var t = [],
          s = this[0];
        if (!s) return new i([]);
        for (; s.previousElementSibling;) {
          var o = s.previousElementSibling;
          e ? n(o).is(e) && t.push(o) : t.push(o), s = o
        }
        return new i(t)
      },
      parent: function(e) {
        for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
        return n(s(t))
      },
      parents: function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var o = this[i].parentNode; o;) e ? n(o).is(e) && t.push(o) : t.push(o), o = o.parentNode;
        return n(s(t))
      },
      closest: function(e) {
        var t = this;
        return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
      },
      find: function(e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var s = this[n].querySelectorAll(e), o = 0; o < s.length; o += 1) t.push(s[o]);
        return new i(t)
      },
      children: function(e) {
        for (var t = [], o = 0; o < this.length; o += 1)
          for (var a = this[o].childNodes, r = 0; r < a.length; r += 1) e ? 1 === a[r].nodeType && n(a[r]).is(e) && t.push(a[r]) : 1 === a[r].nodeType && t.push(a[r]);
        return new i(s(t))
      },
      remove: function() {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this
      },
      add: function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s;
        for (i = 0; i < e.length; i += 1) {
          var o = n(e[i]);
          for (s = 0; s < o.length; s += 1) this[this.length] = o[s], this.length += 1
        }
        return this
      },
      styles: function() {
        return this[0] ? t.getComputedStyle(this[0], null) : {}
      }
    };
    Object.keys(o).forEach(function(e) {
      n.fn[e] = o[e]
    });
    var a, r, l, d = {
        deleteProps: function(e) {
          var t = e;
          Object.keys(t).forEach(function(e) {
            try {
              t[e] = null
            } catch (e) {}
            try {
              delete t[e]
            } catch (e) {}
          })
        },
        nextTick: function(e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t)
        },
        now: function() {
          return Date.now()
        },
        getTranslate: function(e, i) {
          var n, s, o;
          void 0 === i && (i = "x");
          var a = t.getComputedStyle(e, null);
          return t.WebKitCSSMatrix ? (6 < (s = a.transform || a.webkitTransform).split(",").length && (s = s.split(", ").map(function(e) {
            return e.replace(",", ".")
          }).join(", ")), o = new t.WebKitCSSMatrix("none" === s ? "" : s)) : n = (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (s = t.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (s = t.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
        },
        parseUrlQuery: function(e) {
          var i, n, s, o, a = {},
            r = e || t.location.href;
          if ("string" == typeof r && r.length)
            for (o = (n = (r = -1 < r.indexOf("?") ? r.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                return "" !== e
              })).length, i = 0; i < o; i += 1) s = n[i].replace(/#\S+/g, "").split("="), a[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
          return a
        },
        isObject: function(e) {
          return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
            var s = e[n];
            if (null != s)
              for (var o = Object.keys(Object(s)), a = 0, r = o.length; a < r; a += 1) {
                var l = o[a],
                  c = Object.getOwnPropertyDescriptor(s, l);
                void 0 !== c && c.enumerable && (d.isObject(i[l]) && d.isObject(s[l]) ? d.extend(i[l], s[l]) : !d.isObject(i[l]) && d.isObject(s[l]) ? (i[l] = {}, d.extend(i[l], s[l])) : i[l] = s[l])
              }
          }
          return i
        }
      },
      c = (l = e.createElement("div"), {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: (r = l.style, "transition" in r || "webkitTransition" in r || "MozTransition" in r),
        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (a = l.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
        flexbox: function() {
          for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
            if (t[i] in e) return !0;
          return !1
        }(),
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function() {
          var e = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function() {
                e = !0
              }
            });
            t.addEventListener("testPassiveListener", null, i)
          } catch (e) {}
          return e
        }(),
        gestures: "ongesturestart" in t
      }),
      u = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
          t.on(e, t.params.on[e])
        })
      },
      p = {
        components: {
          configurable: !0
        }
      };
    u.prototype.on = function(e, t, i) {
      var n = this;
      if ("function" != typeof t) return n;
      var s = i ? "unshift" : "push";
      return e.split(" ").forEach(function(e) {
        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
      }), n
    }, u.prototype.once = function(e, t, i) {
      var n = this;
      return "function" != typeof t ? n : n.on(e, function i() {
        for (var s = [], o = arguments.length; o--;) s[o] = arguments[o];
        t.apply(n, s), n.off(e, i)
      }, i)
    }, u.prototype.off = function(e, t) {
      var i = this;
      return i.eventsListeners && e.split(" ").forEach(function(e) {
        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(n, s) {
          n === t && i.eventsListeners[e].splice(s, 1)
        })
      }), i
    }, u.prototype.emit = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var i, n, s, o = this;
      return o.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = o) : (i = e[0].events, n = e[0].data, s = e[0].context || o), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
        if (o.eventsListeners && o.eventsListeners[e]) {
          var t = [];
          o.eventsListeners[e].forEach(function(e) {
            t.push(e)
          }), t.forEach(function(e) {
            e.apply(s, n)
          })
        }
      })), o
    }, u.prototype.useModulesParams = function(e) {
      var t = this;
      t.modules && Object.keys(t.modules).forEach(function(i) {
        var n = t.modules[i];
        n.params && d.extend(e, n.params)
      })
    }, u.prototype.useModules = function(e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules && Object.keys(t.modules).forEach(function(i) {
        var n = t.modules[i],
          s = e[i] || {};
        n.instance && Object.keys(n.instance).forEach(function(e) {
          var i = n.instance[e];
          t[e] = "function" == typeof i ? i.bind(t) : i
        }), n.on && t.on && Object.keys(n.on).forEach(function(e) {
          t.on(e, n.on[e])
        }), n.create && n.create.bind(t)(s)
      })
    }, p.components.set = function(e) {
      this.use && this.use(e)
    }, u.installModule = function(e) {
      for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
      var n = this;
      n.prototype.modules || (n.prototype.modules = {});
      var s = e.name || Object.keys(n.prototype.modules).length + "_" + d.now();
      return (n.prototype.modules[s] = e).proto && Object.keys(e.proto).forEach(function(t) {
        n.prototype[t] = e.proto[t]
      }), e.static && Object.keys(e.static).forEach(function(t) {
        n[t] = e.static[t]
      }), e.install && e.install.apply(n, t), n
    }, u.use = function(e) {
      for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
      var n = this;
      return Array.isArray(e) ? (e.forEach(function(e) {
        return n.installModule(e)
      }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(u, p);
    var h = {
        updateSize: function() {
          var e, t, i = this.$el;
          e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t
          }))
        },
        updateSlides: function() {
          var e = this.params,
            i = this.$wrapperEl,
            n = this.size,
            s = this.rtlTranslate,
            o = this.wrongRTL,
            a = this.virtual && e.virtual.enabled,
            r = a ? this.virtual.slides.length : this.slides.length,
            l = i.children("." + this.params.slideClass),
            u = a ? this.virtual.slides.length : l.length,
            p = [],
            h = [],
            f = [],
            v = e.slidesOffsetBefore;
          "function" == typeof v && (v = e.slidesOffsetBefore.call(this));
          var m = e.slidesOffsetAfter;
          "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
          var g = this.snapGrid.length,
            y = this.snapGrid.length,
            b = e.spaceBetween,
            w = -v,
            T = 0,
            x = 0;
          if (void 0 !== n) {
            var S, C;
            "string" == typeof b && 0 <= b.indexOf("%") && (b = parseFloat(b.replace("%", "")) / 100 * n), this.virtualSize = -b, s ? l.css({
              marginLeft: "",
              marginTop: ""
            }) : l.css({
              marginRight: "",
              marginBottom: ""
            }), 1 < e.slidesPerColumn && (S = Math.floor(u / e.slidesPerColumn) === u / this.params.slidesPerColumn ? u : Math.ceil(u / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)));
            for (var k, E = e.slidesPerColumn, $ = S / E, _ = $ - (e.slidesPerColumn * $ - u), M = 0; M < u; M += 1) {
              C = 0;
              var N = l.eq(M);
              if (1 < e.slidesPerColumn) {
                var A = void 0,
                  L = void 0,
                  D = void 0;
                "column" === e.slidesPerColumnFill ? (D = M - (L = Math.floor(M / E)) * E, (_ < L || L === _ && D === E - 1) && (D += 1) >= E && (D = 0, L += 1), A = L + D * S / E, N.css({
                  "-webkit-box-ordinal-group": A,
                  "-moz-box-ordinal-group": A,
                  "-ms-flex-order": A,
                  "-webkit-order": A,
                  order: A
                })) : L = M - (D = Math.floor(M / $)) * $, N.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", D)
              }
              if ("none" !== N.css("display")) {
                if ("auto" === e.slidesPerView) {
                  var z = t.getComputedStyle(N[0], null),
                    I = N[0].style.transform,
                    P = N[0].style.webkitTransform;
                  I && (N[0].style.transform = "none"), P && (N[0].style.webkitTransform = "none"), C = this.isHorizontal() ? N[0].getBoundingClientRect().width + parseFloat(z.getPropertyValue("margin-left")) + parseFloat(z.getPropertyValue("margin-right")) : N[0].getBoundingClientRect().height + parseFloat(z.getPropertyValue("margin-top")) + parseFloat(z.getPropertyValue("margin-bottom")), I && (N[0].style.transform = I), P && (N[0].style.webkitTransform = P), e.roundLengths && (C = Math.floor(C))
                } else C = (n - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (C = Math.floor(C)), l[M] && (this.isHorizontal() ? l[M].style.width = C + "px" : l[M].style.height = C + "px");
                l[M] && (l[M].swiperSlideSize = C), f.push(C), e.centeredSlides ? (w = w + C / 2 + T / 2 + b, 0 === T && 0 !== M && (w = w - n / 2 - b), 0 === M && (w = w - n / 2 - b), Math.abs(w) < .001 && (w = 0), e.roundLengths && (w = Math.floor(w)), x % e.slidesPerGroup == 0 && p.push(w), h.push(w)) : (e.roundLengths && (w = Math.floor(w)), x % e.slidesPerGroup == 0 && p.push(w), h.push(w), w = w + C + b), this.virtualSize += C + b, T = C, x += 1
              }
            }
            if (this.virtualSize = Math.max(this.virtualSize, n) + m, s && o && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }), c.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }) : i.css({
                height: this.virtualSize + e.spaceBetween + "px"
              })), 1 < e.slidesPerColumn && (this.virtualSize = (C + e.spaceBetween) * S, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }) : i.css({
                height: this.virtualSize + e.spaceBetween + "px"
              }), e.centeredSlides)) {
              k = [];
              for (var O = 0; O < p.length; O += 1) {
                var j = p[O];
                e.roundLengths && (j = Math.floor(j)), p[O] < this.virtualSize + p[0] && k.push(j)
              }
              p = k
            }
            if (!e.centeredSlides) {
              k = [];
              for (var H = 0; H < p.length; H += 1) {
                var B = p[H];
                e.roundLengths && (B = Math.floor(B)), p[H] <= this.virtualSize - n && k.push(B)
              }
              p = k, 1 < Math.floor(this.virtualSize - n) - Math.floor(p[p.length - 1]) && p.push(this.virtualSize - n)
            }
            0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.css({
              marginLeft: b + "px"
            }) : l.css({
              marginRight: b + "px"
            }) : l.css({
              marginBottom: b + "px"
            })), d.extend(this, {
              slides: l,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f
            }), u !== r && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), h.length !== y && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
          }
        },
        updateAutoHeight: function(e) {
          var t, i = [],
            n = 0;
          if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView)
            for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var s = this.activeIndex + t;
              if (s > this.slides.length) break;
              i.push(this.slides.eq(s)[0])
            } else i.push(this.slides.eq(this.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var o = i[t].offsetHeight;
              n = n < o ? o : n
            } n && this.$wrapperEl.css("height", n + "px")
        },
        updateSlidesOffset: function() {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this.params,
            i = this.slides,
            n = this.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var s = -e;
            n && (s = e), i.removeClass(t.slideVisibleClass);
            for (var o = 0; o < i.length; o += 1) {
              var a = i[o],
                r = (s + (t.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + t.spaceBetween);
              if (t.watchSlidesVisibility) {
                var l = -(s - a.swiperSlideOffset),
                  d = l + this.slidesSizesGrid[o];
                (0 <= l && l < this.size || 0 < d && d <= this.size || l <= 0 && d >= this.size) && i.eq(o).addClass(t.slideVisibleClass)
              }
              a.progress = n ? -r : r
            }
          }
        },
        updateProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this.params,
            i = this.maxTranslate() - this.minTranslate(),
            n = this.progress,
            s = this.isBeginning,
            o = this.isEnd,
            a = s,
            r = o;
          0 === i ? o = s = !(n = 0) : (s = (n = (e - this.minTranslate()) / i) <= 0, o = 1 <= n), d.extend(this, {
            progress: n,
            isBeginning: s,
            isEnd: o
          }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), s && !a && this.emit("reachBeginning toEdge"), o && !r && this.emit("reachEnd toEdge"), (a && !s || r && !o) && this.emit("fromEdge"), this.emit("progress", n)
        },
        updateSlidesClasses: function() {
          var e, t = this.slides,
            i = this.params,
            n = this.$wrapperEl,
            s = this.activeIndex,
            o = this.realIndex,
            a = this.virtual && i.virtual.enabled;
          t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass));
          var r = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
          i.loop && 0 === r.length && (r = t.eq(0)).addClass(i.slideNextClass);
          var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
          i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (r.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
          var t, i = this.rtlTranslate ? this.translate : -this.translate,
            n = this.slidesGrid,
            s = this.snapGrid,
            o = this.params,
            a = this.activeIndex,
            r = this.realIndex,
            l = this.snapIndex,
            c = e;
          if (void 0 === c) {
            for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? c = u : i >= n[u] && i < n[u + 1] && (c = u + 1) : i >= n[u] && (c = u);
            o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
          }
          if ((t = 0 <= s.indexOf(i) ? s.indexOf(i) : Math.floor(c / o.slidesPerGroup)) >= s.length && (t = s.length - 1), c !== a) {
            var p = parseInt(this.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            d.extend(this, {
              snapIndex: t,
              realIndex: p,
              previousIndex: a,
              activeIndex: c
            }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), r !== p && this.emit("realIndexChange"), this.emit("slideChange")
          } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
          var t = this.params,
            i = n(e.target).closest("." + t.slideClass)[0],
            s = !1;
          if (i)
            for (var o = 0; o < this.slides.length; o += 1) this.slides[o] === i && (s = !0);
          if (!i || !s) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
          this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
      },
      f = {
        getTranslate: function(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
            i = this.rtlTranslate,
            n = this.translate,
            s = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -n : n;
          var o = d.getTranslate(s[0], e);
          return i && (o = -o), o || 0
        },
        setTranslate: function(e, t) {
          var i = this.rtlTranslate,
            n = this.params,
            s = this.$wrapperEl,
            o = this.progress,
            a = 0,
            r = 0;
          this.isHorizontal() ? a = i ? -e : e : r = e, n.roundLengths && (a = Math.floor(a), r = Math.floor(r)), n.virtualTranslate || (c.transforms3d ? s.transform("translate3d(" + a + "px, " + r + "px, 0px)") : s.transform("translate(" + a + "px, " + r + "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : r;
          var l = this.maxTranslate() - this.minTranslate();
          (0 === l ? 0 : (e - this.minTranslate()) / l) !== o && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
          return -this.snapGrid[0]
        },
        maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1]
        }
      },
      v = {
        slideTo: function(e, t, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var s = this,
            o = e;
          o < 0 && (o = 0);
          var a = s.params,
            r = s.snapGrid,
            l = s.slidesGrid,
            d = s.previousIndex,
            u = s.activeIndex,
            p = s.rtlTranslate;
          if (s.animating && a.preventIntercationOnTransition) return !1;
          var h = Math.floor(o / a.slidesPerGroup);
          h >= r.length && (h = r.length - 1), (u || a.initialSlide || 0) === (d || 0) && i && s.emit("beforeSlideChangeStart");
          var f, v = -r[h];
          if (s.updateProgress(v), a.normalizeSlideIndex)
            for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (o = m);
          if (s.initialized && o !== u) {
            if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
            if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (u || 0) !== o) return !1
          }
          return f = u < o ? "next" : o < u ? "prev" : "reset", p && -v === s.translate || !p && v === s.translate ? (s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(v), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== t && c.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
            s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.transitionEnd(i, f))
          }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
        },
        slideToLoop: function(e, t, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var s = e;
          return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, i, n)
        },
        slideNext: function(e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this.params,
            s = this.animating;
          return n.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this.params,
            s = this.animating,
            o = this.snapGrid,
            a = this.slidesGrid,
            r = this.rtlTranslate;
          if (n.loop) {
            if (s) return !1;
            this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
          }

          function l(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          var d, c = l(r ? this.translate : -this.translate),
            u = o.map(function(e) {
              return l(e)
            }),
            p = (a.map(function(e) {
              return l(e)
            }), o[u.indexOf(c)], o[u.indexOf(c) - 1]);
          return void 0 !== p && (d = a.indexOf(p)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this.activeIndex,
            s = Math.floor(n / this.params.slidesPerGroup);
          if (s < this.snapGrid.length - 1) {
            var o = this.rtlTranslate ? this.translate : -this.translate,
              a = this.snapGrid[s];
            o - a > (this.snapGrid[s + 1] - a) / 2 && (n = this.params.slidesPerGroup)
          }
          return this.slideTo(n, e, t, i)
        },
        slideToClickedSlide: function() {
          var e, t = this,
            i = t.params,
            s = t.$wrapperEl,
            o = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            a = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - o / 2 || a > t.slides.length - t.loopedSlides + o / 2 ? (t.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
              t.slideTo(a)
            })) : t.slideTo(a) : a > t.slides.length - o ? (t.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
              t.slideTo(a)
            })) : t.slideTo(a)
          } else t.slideTo(a)
        }
      },
      m = {
        loopCreate: function() {
          var t = this,
            i = t.params,
            s = t.$wrapperEl;
          s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
          var o = s.children("." + i.slideClass);
          if (i.loopFillGroupWithBlank) {
            var a = i.slidesPerGroup - o.length % i.slidesPerGroup;
            if (a !== i.slidesPerGroup) {
              for (var r = 0; r < a; r += 1) {
                var l = n(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                s.append(l)
              }
              o = s.children("." + i.slideClass)
            }
          }
          "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = o.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > o.length && (t.loopedSlides = o.length);
          var d = [],
            c = [];
          o.each(function(e, i) {
            var s = n(i);
            e < t.loopedSlides && c.push(i), e < o.length && e >= o.length - t.loopedSlides && d.push(i), s.attr("data-swiper-slide-index", e)
          });
          for (var u = 0; u < c.length; u += 1) s.append(n(c[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (var p = d.length - 1; 0 <= p; p -= 1) s.prepend(n(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
          var e, t = this.params,
            i = this.activeIndex,
            n = this.slides,
            s = this.loopedSlides,
            o = this.allowSlidePrev,
            a = this.allowSlideNext,
            r = this.snapGrid,
            l = this.rtlTranslate;
          this.allowSlidePrev = !0, this.allowSlideNext = !0;
          var d = -r[i] - this.getTranslate();
          i < s ? (e = n.length - 3 * s + i, e += s, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && 2 * s <= i || i >= n.length - s) && (e = -n.length + i + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)), this.allowSlidePrev = o, this.allowSlideNext = a
        },
        loopDestroy: function() {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
          e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
      },
      g = {
        setGrabCursor: function(e) {
          if (!(c.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
            var t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
          }
        },
        unsetGrabCursor: function() {
          c.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
      },
      y = {
        appendSlide: function(e) {
          var t = this.$wrapperEl,
            i = this.params;
          if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
            for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
          else t.append(e);
          i.loop && this.loopCreate(), i.observer && c.observer || this.update()
        },
        prependSlide: function(e) {
          var t = this.params,
            i = this.$wrapperEl,
            n = this.activeIndex;
          t.loop && this.loopDestroy();
          var s = n + 1;
          if ("object" == typeof e && "length" in e) {
            for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
            s = n + e.length
          } else i.prepend(e);
          t.loop && this.loopCreate(), t.observer && c.observer || this.update(), this.slideTo(s, 0, !1)
        },
        addSlide: function(e, t) {
          var i = this.$wrapperEl,
            n = this.params,
            s = this.activeIndex;
          n.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
          var o = this.slides.length;
          if (e <= 0) this.prependSlide(t);
          else if (o <= e) this.appendSlide(t);
          else {
            for (var a = e < s ? s + 1 : s, r = [], l = o - 1; e <= l; l -= 1) {
              var d = this.slides.eq(l);
              d.remove(), r.unshift(d)
            }
            if ("object" == typeof t && "length" in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
              a = e < s ? s + t.length : s
            } else i.append(t);
            for (var p = 0; p < r.length; p += 1) i.append(r[p]);
            n.loop && this.loopCreate(), n.observer && c.observer || this.update(), n.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
          }
        },
        removeSlide: function(e) {
          var t = this.params,
            i = this.$wrapperEl,
            n = this.activeIndex;
          t.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
          var s, o = n;
          if ("object" == typeof e && "length" in e) {
            for (var a = 0; a < e.length; a += 1) s = e[a], this.slides[s] && this.slides.eq(s).remove(), s < o && (o -= 1);
            o = Math.max(o, 0)
          } else s = e, this.slides[s] && this.slides.eq(s).remove(), s < o && (o -= 1), o = Math.max(o, 0);
          t.loop && this.loopCreate(), t.observer && c.observer || this.update(), t.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1)
        },
        removeAllSlides: function() {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e)
        }
      },
      b = function() {
        var i = t.navigator.userAgent,
          n = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: t.cordova || t.phonegap,
            phonegap: t.cordova || t.phonegap
          },
          s = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          o = i.match(/(Android);?[\s\/]+([\d.]+)?/),
          a = i.match(/(iPad).*OS\s([\d_]+)/),
          r = i.match(/(iPod)(.*OS\s([\d_]+))?/),
          l = !a && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (s && (n.os = "windows", n.osVersion = s[2], n.windows = !0), o && !s && (n.os = "android", n.osVersion = o[2], n.android = !0, n.androidChrome = 0 <= i.toLowerCase().indexOf("chrome")), (a || l || r) && (n.os = "ios", n.ios = !0), l && !r && (n.osVersion = l[2].replace(/_/g, "."), n.iphone = !0), a && (n.osVersion = a[2].replace(/_/g, "."), n.ipad = !0), r && (n.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= i.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (l || a || r) && i.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) {
          var d = n.osVersion.split("."),
            c = e.querySelector('meta[name="viewport"]');
          n.minimalUi = !n.webView && (r || l) && (1 * d[0] == 7 ? 1 <= 1 * d[1] : 7 < 1 * d[0]) && c && 0 <= c.getAttribute("content").indexOf("minimal-ui")
        }
        return n.pixelRatio = t.devicePixelRatio || 1, n
      }();

    function w() {
      var e = this.params,
        t = this.el;
      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
          n = this.allowSlidePrev,
          s = this.snapGrid;
        if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
          var o = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
          this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
        } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || 1 < e.slidesPerView) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
        this.allowSlidePrev = n, this.allowSlideNext = i, this.params.watchOverflow && s !== this.snapGrid && this.checkOverflow()
      }
    }
    var T, x = {
        attachEvents: function() {
          var i = this.params,
            s = this.touchEvents,
            o = this.el,
            a = this.wrapperEl;
          this.onTouchStart = function(i) {
            var s = this.touchEventsData,
              o = this.params,
              a = this.touches;
            if (!this.animating || !o.preventIntercationOnTransition) {
              var r = i;
              if (r.originalEvent && (r = r.originalEvent), s.isTouchEvent = "touchstart" === r.type, (s.isTouchEvent || !("which" in r) || 3 !== r.which) && (!s.isTouched || !s.isMoved))
                if (o.noSwiping && n(r.target).closest(o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass)[0]) this.allowClick = !0;
                else if (!o.swipeHandler || n(r).closest(o.swipeHandler)[0]) {
                a.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, a.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                var l = a.currentX,
                  c = a.currentY;
                if (!b.ios || b.cordova || !o.iOSEdgeSwipeDetection || !(l <= o.iOSEdgeSwipeThreshold || l >= t.screen.width - o.iOSEdgeSwipeThreshold)) {
                  if (d.extend(s, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0
                    }), a.startX = l, a.startY = c, s.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, 0 < o.threshold && (s.allowThresholdMove = !1), "touchstart" !== r.type) {
                    var u = !0;
                    n(r.target).is(s.formElements) && (u = !1), e.activeElement && n(e.activeElement).is(s.formElements) && e.activeElement !== r.target && e.activeElement.blur(), u && this.allowTouchMove && r.preventDefault()
                  }
                  this.emit("touchStart", r)
                }
              }
            }
          }.bind(this), this.onTouchMove = function(t) {
            var i = this.touchEventsData,
              s = this.params,
              o = this.touches,
              a = this.rtlTranslate,
              r = t;
            if (r.originalEvent && (r = r.originalEvent), i.isTouched) {
              if (!i.isTouchEvent || "mousemove" !== r.type) {
                var l = "touchmove" === r.type ? r.targetTouches[0].pageX : r.pageX,
                  c = "touchmove" === r.type ? r.targetTouches[0].pageY : r.pageY;
                if (r.preventedByNestedSwiper) return o.startX = l, void(o.startY = c);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (d.extend(o, {
                  startX: l,
                  startY: c,
                  currentX: l,
                  currentY: c
                }), i.touchStartTime = d.now()));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                  if (this.isVertical()) {
                    if (c < o.startY && this.translate <= this.maxTranslate() || c > o.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                  } else if (l < o.startX && this.translate <= this.maxTranslate() || l > o.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && r.target === e.activeElement && n(r.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", r), !(r.targetTouches && 1 < r.targetTouches.length)) {
                  o.currentX = l, o.currentY = c;
                  var u, p = o.currentX - o.startX,
                    h = o.currentY - o.startY;
                  if (void 0 === i.isScrolling && (this.isHorizontal() && o.currentY === o.startY || this.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : 25 <= p * p + h * h && (u = 180 * Math.atan2(Math.abs(h), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", r), "undefined" == typeof startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                  else if (i.startMoving) {
                    this.allowClick = !1, r.preventDefault(), s.touchMoveStopPropagation && !s.nested && r.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", r)), this.emit("sliderMove", r), i.isMoved = !0;
                    var f = this.isHorizontal() ? p : h;
                    o.diff = f, f *= s.touchRatio, a && (f = -f), this.swipeDirection = 0 < f ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                    var v = !0,
                      m = s.resistanceRatio;
                    if (s.touchReleaseOnEdges && (m = 0), 0 < f && i.currentTranslate > this.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, m))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, m))), v && (r.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), 0 < s.threshold) {
                      if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void(o.diff = this.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
                    }
                    s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                      position: o[this.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime
                    }), i.velocities.push({
                      position: o[this.isHorizontal() ? "currentX" : "currentY"],
                      time: d.now()
                    })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                  }
                }
              }
            } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", r)
          }.bind(this), this.onTouchEnd = function(e) {
            var t = this,
              i = t.touchEventsData,
              n = t.params,
              s = t.touches,
              o = t.rtlTranslate,
              a = t.$wrapperEl,
              r = t.slidesGrid,
              l = t.snapGrid,
              c = e;
            if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
            n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var u, p = d.now(),
              h = p - i.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), h < 300 && 300 < p - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() {
                t && !t.destroyed && t.emit("click", c)
              }, 300)), h < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = d.now(), d.nextTick(function() {
                t.destroyed || (t.allowClick = !0)
              }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? o ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
              if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
              if (n.freeModeMomentum) {
                if (1 < i.velocities.length) {
                  var f = i.velocities.pop(),
                    v = i.velocities.pop(),
                    m = f.position - v.position,
                    g = f.time - v.time;
                  t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < g || 300 < d.now() - f.time) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var y = 1e3 * n.freeModeMomentumRatio,
                  b = t.velocity * y,
                  w = t.translate + b;
                o && (w = -w);
                var T, x, S = !1,
                  C = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                if (w < t.maxTranslate()) n.freeModeMomentumBounce ? (w + t.maxTranslate() < -C && (w = t.maxTranslate() - C), T = t.maxTranslate(), S = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), n.loop && n.centeredSlides && (x = !0);
                else if (w > t.minTranslate()) n.freeModeMomentumBounce ? (w - t.minTranslate() > C && (w = t.minTranslate() + C), T = t.minTranslate(), S = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), n.loop && n.centeredSlides && (x = !0);
                else if (n.freeModeSticky) {
                  for (var k, E = 0; E < l.length; E += 1)
                    if (l[E] > -w) {
                      k = E;
                      break
                    } w = -(w = Math.abs(l[k] - w) < Math.abs(l[k - 1] - w) || "next" === t.swipeDirection ? l[k] : l[k - 1])
                }
                if (x && t.once("transitionEnd", function() {
                    t.loopFix()
                  }), 0 !== t.velocity) y = o ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                else if (n.freeModeSticky) return void t.slideToClosest();
                n.freeModeMomentumBounce && S ? (t.updateProgress(T), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function() {
                  t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(T), a.transitionEnd(function() {
                    t && !t.destroyed && t.transitionEnd()
                  }))
                })) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function() {
                  t && !t.destroyed && t.transitionEnd()
                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
              } else if (n.freeModeSticky) return void t.slideToClosest();
              (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
              for (var $ = 0, _ = t.slidesSizesGrid[0], M = 0; M < r.length; M += n.slidesPerGroup) void 0 !== r[M + n.slidesPerGroup] ? u >= r[M] && u < r[M + n.slidesPerGroup] && (_ = r[($ = M) + n.slidesPerGroup] - r[M]) : u >= r[M] && ($ = M, _ = r[r.length - 1] - r[r.length - 2]);
              var N = (u - r[$]) / _;
              if (h > n.longSwipesMs) {
                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (N >= n.longSwipesRatio ? t.slideTo($ + n.slidesPerGroup) : t.slideTo($)), "prev" === t.swipeDirection && (N > 1 - n.longSwipesRatio ? t.slideTo($ + n.slidesPerGroup) : t.slideTo($))
              } else {
                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo($ + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo($)
              }
            }
          }.bind(this), this.onClick = function(e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
          }.bind(this);
          var r = "container" === i.touchEventsTarget ? o : a,
            l = !!i.nested;
          if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
            if (c.touch) {
              var u = !("touchstart" !== s.start || !c.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.addEventListener(s.start, this.onTouchStart, u), r.addEventListener(s.move, this.onTouchMove, c.passiveListener ? {
                passive: !1,
                capture: l
              } : l), r.addEventListener(s.end, this.onTouchEnd, u)
            }(i.simulateTouch && !b.ios && !b.android || i.simulateTouch && !c.touch && b.ios) && (r.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1))
          } else r.addEventListener(s.start, this.onTouchStart, !1), e.addEventListener(s.move, this.onTouchMove, l), e.addEventListener(s.end, this.onTouchEnd, !1);
          (i.preventClicks || i.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), this.on(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w, !0)
        },
        detachEvents: function() {
          var t = this.params,
            i = this.touchEvents,
            n = this.el,
            s = this.wrapperEl,
            o = "container" === t.touchEventsTarget ? n : s,
            a = !!t.nested;
          if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
            if (c.touch) {
              var r = !("onTouchStart" !== i.start || !c.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              o.removeEventListener(i.start, this.onTouchStart, r), o.removeEventListener(i.move, this.onTouchMove, a), o.removeEventListener(i.end, this.onTouchEnd, r)
            }(t.simulateTouch && !b.ios && !b.android || t.simulateTouch && !c.touch && b.ios) && (o.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, a), e.removeEventListener("mouseup", this.onTouchEnd, !1))
          } else o.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, a), e.removeEventListener(i.end, this.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) && o.removeEventListener("click", this.onClick, !0), this.off(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w)
        }
      },
      S = {
        setBreakpoint: function() {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;
          void 0 === i && (i = 0);
          var n = this.params,
            s = n.breakpoints;
          if (s && (!s || 0 !== Object.keys(s).length)) {
            var o = this.getBreakpoint(s);
            if (o && this.currentBreakpoint !== o) {
              var a = o in s ? s[o] : this.originalParams,
                r = n.loop && a.slidesPerView !== n.slidesPerView;
              d.extend(this.params, a), d.extend(this, {
                allowTouchMove: this.params.allowTouchMove,
                allowSlideNext: this.params.allowSlideNext,
                allowSlidePrev: this.params.allowSlidePrev
              }), this.currentBreakpoint = o, r && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", a)
            }
          }
        },
        getBreakpoint: function(e) {
          if (e) {
            var i = !1,
              n = [];
            Object.keys(e).forEach(function(e) {
              n.push(e)
            }), n.sort(function(e, t) {
              return parseInt(e, 10) - parseInt(t, 10)
            });
            for (var s = 0; s < n.length; s += 1) {
              var o = n[s];
              o >= t.innerWidth && !i && (i = o)
            }
            return i || "max"
          }
        }
      },
      C = {
        isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
        isSafari: (T = t.navigator.userAgent.toLowerCase(), 0 <= T.indexOf("safari") && T.indexOf("chrome") < 0 && T.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      },
      k = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
      },
      E = {
        update: h,
        translate: f,
        transition: {
          setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
          },
          transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              n = this.params,
              s = this.previousIndex;
            n.autoHeight && this.updateAutoHeight();
            var o = t;
            if (o || (o = s < i ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), e && i !== s) {
              if ("reset" === o) return void this.emit("slideResetTransitionStart");
              this.emit("slideChangeTransitionStart"), "next" === o ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
          },
          transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              n = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var s = t;
            if (s || (s = n < i ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n) {
              if ("reset" === s) return void this.emit("slideResetTransitionEnd");
              this.emit("slideChangeTransitionEnd"), "next" === s ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
          }
        },
        slide: v,
        loop: m,
        grabCursor: g,
        manipulation: y,
        events: x,
        breakpoints: S,
        checkOverflow: {
          checkOverflow: function() {
            var e = this.isLocked;
            this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
          }
        },
        classes: {
          addClasses: function() {
            var e = this.classNames,
              t = this.params,
              i = this.rtl,
              n = this.$el,
              s = [];
            s.push(t.direction), t.freeMode && s.push("free-mode"), c.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), 1 < t.slidesPerColumn && s.push("multirow"), b.android && s.push("android"), b.ios && s.push("ios"), C.isIE && (c.pointerEvents || c.prefixedPointerEvents) && s.push("wp8-" + t.direction), s.forEach(function(i) {
              e.push(t.containerModifierClass + i)
            }), n.addClass(e.join(" "))
          },
          removeClasses: function() {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" "))
          }
        },
        images: {
          loadImage: function(e, i, n, s, o, a) {
            var r;

            function l() {
              a && a()
            }
            e.complete && o ? l() : i ? ((r = new t.Image).onload = l, r.onerror = l, s && (r.sizes = s), n && (r.srcset = n), i && (r.src = i)) : l()
          },
          preloadImages: function() {
            var e = this;

            function t() {
              null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
            }
            e.imagesToLoad = e.$el.find("img");
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var n = e.imagesToLoad[i];
              e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
            }
          }
        }
      },
      $ = {},
      _ = function(e) {
        function t() {
          for (var i, s, o, a = [], r = arguments.length; r--;) a[r] = arguments[r];
          1 === a.length && a[0].constructor && a[0].constructor === Object ? o = a[0] : (s = (i = a)[0], o = i[1]), o || (o = {}), o = d.extend({}, o), s && !o.el && (o.el = s), e.call(this, o), Object.keys(E).forEach(function(e) {
            Object.keys(E[e]).forEach(function(i) {
              t.prototype[i] || (t.prototype[i] = E[e][i])
            })
          });
          var l = this;
          void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
            var t = l.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                n = t.params[i];
              if ("object" != typeof n) return;
              if (!(i in o && "enabled" in n)) return;
              !0 === o[i] && (o[i] = {
                enabled: !0
              }), "object" != typeof o[i] || "enabled" in o[i] || (o[i].enabled = !0), o[i] || (o[i] = {
                enabled: !1
              })
            }
          });
          var u = d.extend({}, k);
          l.useModulesParams(u), l.params = d.extend({}, u, $, o), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, o);
          var p = (l.$ = n)(l.params.el);
          if (s = p[0]) {
            if (1 < p.length) {
              var h = [];
              return p.each(function(e, i) {
                var n = d.extend({}, o, {
                  el: i
                });
                h.push(new t(n))
              }), h
            }
            s.swiper = l, p.data("swiper", l);
            var f, v, m = p.children("." + l.params.wrapperClass);
            return d.extend(l, {
              $el: p,
              el: s,
              $wrapperEl: m,
              wrapperEl: m[0],
              classNames: [],
              slides: n(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function() {
                return "horizontal" === l.params.direction
              },
              isVertical: function() {
                return "vertical" === l.params.direction
              },
              rtl: "rtl" === s.dir.toLowerCase() || "rtl" === p.css("direction"),
              rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === p.css("direction")),
              wrongRTL: "-webkit-box" === m.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents: (f = ["touchstart", "touchmove", "touchend"], v = ["mousedown", "mousemove", "mouseup"], c.pointerEvents ? v = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                start: f[0],
                move: f[1],
                end: f[2]
              }, l.touchEventsDesktop = {
                start: v[0],
                move: v[1],
                end: v[2]
              }, c.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: d.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
            }), l.useModules(), l.params.init && l.init(), l
          }
        }
        e && (t.__proto__ = e);
        var i = {
          extendedDefaults: {
            configurable: !0
          },
          defaults: {
            configurable: !0
          },
          Class: {
            configurable: !0
          },
          $: {
            configurable: !0
          }
        };
        return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function() {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            n = this.size,
            s = this.activeIndex,
            o = 1;
          if (e.centeredSlides) {
            for (var a, r = t[s].swiperSlideSize, l = s + 1; l < t.length; l += 1) t[l] && !a && (o += 1, (r += t[l].swiperSlideSize) > n && (a = !0));
            for (var d = s - 1; 0 <= d; d -= 1) t[d] && !a && (o += 1, (r += t[d].swiperSlideSize) > n && (a = !0))
          } else
            for (var c = s + 1; c < t.length; c += 1) i[c] - i[s] < n && (o += 1);
          return o
        }, t.prototype.update = function() {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
          }

          function n() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
          }
        }, t.prototype.init = function() {
          this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
        }, t.prototype.destroy = function(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var i = this,
            n = i.params,
            s = i.$el,
            o = i.$wrapperEl,
            a = i.slides;
          return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
            i.off(e)
          }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null
        }, t.extendDefaults = function(e) {
          d.extend($, e)
        }, i.extendedDefaults.get = function() {
          return $
        }, i.defaults.get = function() {
          return k
        }, i.Class.get = function() {
          return e
        }, i.$.get = function() {
          return n
        }, Object.defineProperties(t, i), t
      }(u),
      M = {
        name: "device",
        proto: {
          device: b
        },
        static: {
          device: b
        }
      },
      N = {
        name: "support",
        proto: {
          support: c
        },
        static: {
          support: c
        }
      },
      A = {
        name: "browser",
        proto: {
          browser: C
        },
        static: {
          browser: C
        }
      },
      L = {
        name: "resize",
        create: function() {
          var e = this;
          d.extend(e, {
            resize: {
              resizeHandler: function() {
                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
              },
              orientationChangeHandler: function() {
                e && !e.destroyed && e.initialized && e.emit("orientationchange")
              }
            }
          })
        },
        on: {
          init: function() {
            t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
          },
          destroy: function() {
            t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
          }
        }
      },
      D = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, t) {
          void 0 === t && (t = {});
          var i = this,
            n = new D.func(function(e) {
              e.forEach(function(e) {
                i.emit("observerUpdate", e)
              })
            });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData
          }), i.observer.observers.push(n)
        },
        init: function() {
          if (c.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: !1
            }), this.observer.attach(this.$wrapperEl[0], {
              attributes: !1
            })
          }
        },
        destroy: function() {
          this.observer.observers.forEach(function(e) {
            e.disconnect()
          }), this.observer.observers = []
        }
      },
      z = {
        name: "observer",
        params: {
          observer: !1,
          observeParents: !1
        },
        create: function() {
          d.extend(this, {
            observer: {
              init: D.init.bind(this),
              attach: D.attach.bind(this),
              destroy: D.destroy.bind(this),
              observers: []
            }
          })
        },
        on: {
          init: function() {
            this.observer.init()
          },
          destroy: function() {
            this.observer.destroy()
          }
        }
      },
      I = {
        update: function(e) {
          var t = this,
            i = t.params,
            n = i.slidesPerView,
            s = i.slidesPerGroup,
            o = i.centeredSlides,
            a = t.virtual,
            r = a.from,
            l = a.to,
            c = a.slides,
            u = a.slidesGrid,
            p = a.renderSlide,
            h = a.offset;
          t.updateActiveIndex();
          var f, v, m, g = t.activeIndex || 0;
          f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", o ? (v = Math.floor(n / 2) + s, m = Math.floor(n / 2) + s) : (v = n + (s - 1), m = s);
          var y = Math.max((g || 0) - m, 0),
            b = Math.min((g || 0) + v, c.length - 1),
            w = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

          function T() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
          }
          if (d.extend(t.virtual, {
              from: y,
              to: b,
              offset: w,
              slidesGrid: t.slidesGrid
            }), r === y && l === b && !e) return t.slidesGrid !== u && w !== h && t.slides.css(f, w + "px"), void t.updateProgress();
          if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
            offset: w,
            from: y,
            to: b,
            slides: function() {
              for (var e = [], t = y; t <= b; t += 1) e.push(c[t]);
              return e
            }()
          }), void T();
          var x = [],
            S = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var C = r; C <= l; C += 1)(C < y || b < C) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
          for (var k = 0; k < c.length; k += 1) y <= k && k <= b && (void 0 === l || e ? S.push(k) : (l < k && S.push(k), k < r && x.push(k)));
          S.forEach(function(e) {
            t.$wrapperEl.append(p(c[e], e))
          }), x.sort(function(e, t) {
            return e < t
          }).forEach(function(e) {
            t.$wrapperEl.prepend(p(c[e], e))
          }), t.$wrapperEl.children(".swiper-slide").css(f, w + "px"), T()
        },
        renderSlide: function(e, t) {
          var i = this.params.virtual;
          if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
          var s = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
          return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
        },
        appendSlide: function(e) {
          this.virtual.slides.push(e), this.virtual.update(!0)
        },
        prependSlide: function(e) {
          if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
            var t = this.virtual.cache,
              i = {};
            Object.keys(t).forEach(function(e) {
              i[e + 1] = t[e]
            }), this.virtual.cache = i
          }
          this.virtual.update(!0), this.slideNext(0)
        }
      },
      P = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null
          }
        },
        create: function() {
          d.extend(this, {
            virtual: {
              update: I.update.bind(this),
              appendSlide: I.appendSlide.bind(this),
              prependSlide: I.prependSlide.bind(this),
              renderSlide: I.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {}
            }
          })
        },
        on: {
          beforeInit: function() {
            if (this.params.virtual.enabled) {
              this.classNames.push(this.params.containerModifierClass + "virtual");
              var e = {
                watchSlidesProgress: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update()
            }
          },
          setTranslate: function() {
            this.params.virtual.enabled && this.virtual.update()
          }
        }
      },
      O = {
        handle: function(i) {
          var n = this.rtlTranslate,
            s = i;
          s.originalEvent && (s = s.originalEvent);
          var o = s.keyCode || s.charCode;
          if (!this.allowSlideNext && (this.isHorizontal() && 39 === o || this.isVertical() && 40 === o)) return !1;
          if (!this.allowSlidePrev && (this.isHorizontal() && 37 === o || this.isVertical() && 38 === o)) return !1;
          if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
            if (this.params.keyboard.onlyInViewport && (37 === o || 39 === o || 38 === o || 40 === o)) {
              var a = !1;
              if (0 < this.$el.parents("." + this.params.slideClass).length && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
              var r = t.innerWidth,
                l = t.innerHeight,
                d = this.$el.offset();
              n && (d.left -= this.$el[0].scrollLeft);
              for (var c = [
                  [d.left, d.top],
                  [d.left + this.width, d.top],
                  [d.left, d.top + this.height],
                  [d.left + this.width, d.top + this.height]
                ], u = 0; u < c.length; u += 1) {
                var p = c[u];
                0 <= p[0] && p[0] <= r && 0 <= p[1] && p[1] <= l && (a = !0)
              }
              if (!a) return
            }
            this.isHorizontal() ? (37 !== o && 39 !== o || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (39 === o && !n || 37 === o && n) && this.slideNext(), (37 === o && !n || 39 === o && n) && this.slidePrev()) : (38 !== o && 40 !== o || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), 40 === o && this.slideNext(), 38 === o && this.slidePrev()), this.emit("keyPress", o)
          }
        },
        enable: function() {
          this.keyboard.enabled || (n(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        },
        disable: function() {
          this.keyboard.enabled && (n(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
      },
      j = {
        name: "keyboard",
        params: {
          keyboard: {
            enabled: !1,
            onlyInViewport: !0
          }
        },
        create: function() {
          d.extend(this, {
            keyboard: {
              enabled: !1,
              enable: O.enable.bind(this),
              disable: O.disable.bind(this),
              handle: O.handle.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.keyboard.enabled && this.keyboard.enable()
          },
          destroy: function() {
            this.keyboard.enabled && this.keyboard.disable()
          }
        }
      },
      H = {
        lastScrollTime: d.now(),
        event: -1 < t.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
          var t = "onwheel" in e;
          if (!t) {
            var i = e.createElement("div");
            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
          }
          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
          var t = 0,
            i = 0,
            n = 0,
            s = 0;
          return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
            spinX: t,
            spinY: i,
            pixelX: n,
            pixelY: s
          }
        },
        handleMouseEnter: function() {
          this.mouseEntered = !0
        },
        handleMouseLeave: function() {
          this.mouseEntered = !1
        },
        handle: function(e) {
          var i = e,
            n = this,
            s = n.params.mousewheel;
          if (!n.mouseEntered && !s.releaseOnEdges) return !0;
          i.originalEvent && (i = i.originalEvent);
          var o = 0,
            a = n.rtlTranslate ? -1 : 1,
            r = H.normalize(i);
          if (s.forceToAxis)
            if (n.isHorizontal()) {
              if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
              o = r.pixelX * a
            } else {
              if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
              o = r.pixelY
            }
          else o = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * a : -r.pixelY;
          if (0 === o) return !0;
          if (s.invert && (o = -o), n.params.freeMode) {
            n.params.loop && n.loopFix();
            var l = n.getTranslate() + o * s.sensitivity,
              c = n.isBeginning,
              u = n.isEnd;
            if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!c && n.isBeginning || !u && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = d.nextTick(function() {
                n.slideToClosest()
              }, 300)), n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
          } else {
            if (60 < d.now() - n.mousewheel.lastScrollTime)
              if (o < 0)
                if (n.isEnd && !n.params.loop || n.animating) {
                  if (s.releaseOnEdges) return !0
                } else n.slideNext(), n.emit("scroll", i);
            else if (n.isBeginning && !n.params.loop || n.animating) {
              if (s.releaseOnEdges) return !0
            } else n.slidePrev(), n.emit("scroll", i);
            n.mousewheel.lastScrollTime = (new t.Date).getTime()
          }
          return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
        },
        enable: function() {
          if (!H.event) return !1;
          if (this.mousewheel.enabled) return !1;
          var e = this.$el;
          return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(H.event, this.mousewheel.handle), this.mousewheel.enabled = !0
        },
        disable: function() {
          if (!H.event) return !1;
          if (!this.mousewheel.enabled) return !1;
          var e = this.$el;
          return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.off(H.event, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
        }
      },
      B = {
        update: function() {
          var e = this.params.navigation;
          if (!this.params.loop) {
            var t = this.navigation,
              i = t.$nextEl,
              n = t.$prevEl;
            n && 0 < n.length && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && 0 < i.length && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
          }
        },
        init: function() {
          var e, t, i = this,
            s = i.params.navigation;
          (s.nextEl || s.prevEl) && (s.nextEl && (e = n(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && 1 < e.length && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))), s.prevEl && (t = n(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && 1 < t.length && 1 === i.$el.find(s.prevEl).length && (t = i.$el.find(s.prevEl))), e && 0 < e.length && e.on("click", function(e) {
            e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
          }), t && 0 < t.length && t.on("click", function(e) {
            e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
          }), d.extend(i.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0]
          }))
        },
        destroy: function() {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
        }
      },
      R = {
        update: function() {
          var e = this.rtl,
            t = this.params.pagination;
          if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              o = this.pagination.$el,
              a = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
            if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), a - 1 < i && (i -= a), i < 0 && "bullets" !== this.params.paginationType && (i = a + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && 0 < this.pagination.bullets.length) {
              var r, l, d, c = this.pagination.bullets;
              if (t.dynamicBullets && (this.pagination.bulletSize = c.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), 1 < t.dynamicMainBullets && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), r = i - this.pagination.dynamicBulletIndex, d = ((l = r + (Math.min(c.length, t.dynamicMainBullets) - 1)) + r) / 2), c.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), 1 < o.length) c.each(function(e, s) {
                var o = n(s),
                  a = o.index();
                a === i && o.addClass(t.bulletActiveClass), t.dynamicBullets && (r <= a && a <= l && o.addClass(t.bulletActiveClass + "-main"), a === r && o.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && o.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
              });
              else if (c.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var u = c.eq(r), p = c.eq(l), h = r; h <= l; h += 1) c.eq(h).addClass(t.bulletActiveClass + "-main");
                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), p.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
              }
              if (t.dynamicBullets) {
                var f = Math.min(c.length, t.dynamicMainBullets + 4),
                  v = (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                  m = e ? "right" : "left";
                c.css(this.isHorizontal() ? m : "top", v + "px")
              }
            }
            if ("fraction" === t.type && (o.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), o.find("." + t.totalClass).text(t.formatFractionTotal(a))), "progressbar" === t.type) {
              var g;
              g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
              var y = (i + 1) / a,
                b = 1,
                w = 1;
              "horizontal" === g ? b = y : w = y, o.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(this.params.speed)
            }
            "custom" === t.type && t.renderCustom ? (o.html(t.renderCustom(this, i + 1, a)), this.emit("paginationRender", this, o[0])) : this.emit("paginationUpdate", this, o[0]), o[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
          }
        },
        render: function() {
          var e = this.params.pagination;
          if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              i = this.pagination.$el,
              n = "";
            if ("bullets" === e.type) {
              for (var s = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, o = 0; o < s; o += 1) e.renderBullet ? n += e.renderBullet.call(this, o, e.bulletClass) : n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
              i.html(n), this.pagination.bullets = i.find("." + e.bulletClass)
            }
            "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(n)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
          }
        },
        init: function() {
          var e = this,
            t = e.params.pagination;
          if (t.el) {
            var i = n(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
              t.preventDefault();
              var i = n(this).index() * e.params.slidesPerGroup;
              e.params.loop && (i += e.loopedSlides), e.slideTo(i)
            }), d.extend(e.pagination, {
              $el: i,
              el: i[0]
            }))
          }
        },
        destroy: function() {
          var e = this.params.pagination;
          if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var t = this.pagination.$el;
            t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
          }
        }
      },
      F = {
        setTranslate: function() {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = this.rtlTranslate,
              i = this.progress,
              n = e.dragSize,
              s = e.trackSize,
              o = e.$dragEl,
              a = e.$el,
              r = this.params.scrollbar,
              l = n,
              d = (s - n) * i;
            t ? 0 < (d = -d) ? (l = n - d, d = 0) : s < -d + n && (l = s + d) : d < 0 ? (l = n + d, d = 0) : s < d + n && (l = s - d), this.isHorizontal() ? (c.transforms3d ? o.transform("translate3d(" + d + "px, 0, 0)") : o.transform("translateX(" + d + "px)"), o[0].style.width = l + "px") : (c.transforms3d ? o.transform("translate3d(0px, " + d + "px, 0)") : o.transform("translateY(" + d + "px)"), o[0].style.height = l + "px"), r.hide && (clearTimeout(this.scrollbar.timeout), a[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
              a[0].style.opacity = 0, a.transition(400)
            }, 1e3))
          }
        },
        setTransition: function(e) {
          this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = e.$dragEl,
              i = e.$el;
            t[0].style.width = "", t[0].style.height = "";
            var n, s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              o = this.size / this.virtualSize,
              a = o * (s / this.size);
            n = "auto" === this.params.scrollbar.dragSize ? s * o : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = n + "px" : t[0].style.height = n + "px", i[0].style.display = 1 <= o ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
              trackSize: s,
              divider: o,
              moveDivider: a,
              dragSize: n
            }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
          }
        },
        setDragPosition: function(e) {
          var t, i = this.scrollbar,
            n = this.rtlTranslate,
            s = i.$el,
            o = i.dragSize,
            a = i.trackSize;
          t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[this.isHorizontal() ? "left" : "top"] - o / 2) / (a - o), t = Math.max(Math.min(t, 1), 0), n && (t = 1 - t);
          var r = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
          this.updateProgress(r), this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses()
        },
        onDragStart: function(e) {
          var t = this.params.scrollbar,
            i = this.scrollbar,
            n = this.$wrapperEl,
            s = i.$el,
            o = i.$dragEl;
          this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), o.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
          var t = this.scrollbar,
            i = this.$wrapperEl,
            n = t.$el,
            s = t.$dragEl;
          this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
          var t = this.params.scrollbar,
            i = this.scrollbar.$el;
          this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function() {
            i.css("opacity", 0), i.transition(400)
          }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
          if (this.params.scrollbar.el) {
            var t = this.scrollbar,
              i = this.touchEvents,
              n = this.touchEventsDesktop,
              s = this.params,
              o = t.$el[0],
              a = !(!c.passiveListener || !s.passiveListener) && {
                passive: !1,
                capture: !1
              },
              r = !(!c.passiveListener || !s.passiveListener) && {
                passive: !0,
                capture: !1
              };
            c.touch || !c.pointerEvents && !c.prefixedPointerEvents ? (c.touch && (o.addEventListener(i.start, this.scrollbar.onDragStart, a), o.addEventListener(i.move, this.scrollbar.onDragMove, a), o.addEventListener(i.end, this.scrollbar.onDragEnd, r)), (s.simulateTouch && !b.ios && !b.android || s.simulateTouch && !c.touch && b.ios) && (o.addEventListener("mousedown", this.scrollbar.onDragStart, a), e.addEventListener("mousemove", this.scrollbar.onDragMove, a), e.addEventListener("mouseup", this.scrollbar.onDragEnd, r))) : (o.addEventListener(n.start, this.scrollbar.onDragStart, a), e.addEventListener(n.move, this.scrollbar.onDragMove, a), e.addEventListener(n.end, this.scrollbar.onDragEnd, r))
          }
        },
        disableDraggable: function() {
          if (this.params.scrollbar.el) {
            var t = this.scrollbar,
              i = this.touchEvents,
              n = this.touchEventsDesktop,
              s = this.params,
              o = t.$el[0],
              a = !(!c.passiveListener || !s.passiveListener) && {
                passive: !1,
                capture: !1
              },
              r = !(!c.passiveListener || !s.passiveListener) && {
                passive: !0,
                capture: !1
              };
            c.touch || !c.pointerEvents && !c.prefixedPointerEvents ? (c.touch && (o.removeEventListener(i.start, this.scrollbar.onDragStart, a), o.removeEventListener(i.move, this.scrollbar.onDragMove, a), o.removeEventListener(i.end, this.scrollbar.onDragEnd, r)), (s.simulateTouch && !b.ios && !b.android || s.simulateTouch && !c.touch && b.ios) && (o.removeEventListener("mousedown", this.scrollbar.onDragStart, a), e.removeEventListener("mousemove", this.scrollbar.onDragMove, a), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, r))) : (o.removeEventListener(n.start, this.scrollbar.onDragStart, a), e.removeEventListener(n.move, this.scrollbar.onDragMove, a), e.removeEventListener(n.end, this.scrollbar.onDragEnd, r))
          }
        },
        init: function() {
          if (this.params.scrollbar.el) {
            var e = this.scrollbar,
              t = this.$el,
              i = this.params.scrollbar,
              s = n(i.el);
            this.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === t.find(i.el).length && (s = t.find(i.el));
            var o = s.find("." + this.params.scrollbar.dragClass);
            0 === o.length && (o = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(o)), d.extend(e, {
              $el: s,
              el: s[0],
              $dragEl: o,
              dragEl: o[0]
            }), i.draggable && e.enableDraggable()
          }
        },
        destroy: function() {
          this.scrollbar.disableDraggable()
        }
      },
      W = {
        setTransform: function(e, t) {
          var i = this.rtl,
            s = n(e),
            o = i ? -1 : 1,
            a = s.attr("data-swiper-parallax") || "0",
            r = s.attr("data-swiper-parallax-x"),
            l = s.attr("data-swiper-parallax-y"),
            d = s.attr("data-swiper-parallax-scale"),
            c = s.attr("data-swiper-parallax-opacity");
          if (r || l ? (r = r || "0", l = l || "0") : this.isHorizontal() ? (r = a, l = "0") : (l = a, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * o + "%" : r * t * o + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px", null != c) {
            var u = c - (c - 1) * (1 - Math.abs(t));
            s[0].style.opacity = u
          }
          if (null == d) s.transform("translate3d(" + r + ", " + l + ", 0px)");
          else {
            var p = d - (d - 1) * (1 - Math.abs(t));
            s.transform("translate3d(" + r + ", " + l + ", 0px) scale(" + p + ")")
          }
        },
        setTranslate: function() {
          var e = this,
            t = e.$el,
            i = e.slides,
            s = e.progress,
            o = e.snapGrid;
          t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
            e.parallax.setTransform(i, s)
          }), i.each(function(t, i) {
            var a = i.progress;
            1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (a += Math.ceil(t / 2) - s * (o.length - 1)), a = Math.min(Math.max(a, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
              e.parallax.setTransform(i, a)
            })
          })
        },
        setTransition: function(e) {
          void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
            var s = n(i),
              o = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (o = 0), s.transition(o)
          })
        }
      },
      q = {
        getDistanceBetweenTouches: function(e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            i = e.targetTouches[0].pageY,
            n = e.targetTouches[1].pageX,
            s = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
        },
        onGestureStart: function(e) {
          var t = this.params.zoom,
            i = this.zoom,
            s = i.gesture;
          if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !c.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
            i.fakeGestureTouched = !0, s.scaleStart = q.getDistanceBetweenTouches(e)
          }
          s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange: function(e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!c.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
            i.fakeGestureMoved = !0, n.scaleMove = q.getDistanceBetweenTouches(e)
          }
          n.$imageEl && 0 !== n.$imageEl.length && (c.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!c.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !b.android) return;
            i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
          }
          n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
        },
        onTouchStart: function(e) {
          var t = this.zoom,
            i = t.gesture,
            n = t.image;
          i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (b.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
          var t = this.zoom,
            i = t.gesture,
            n = t.image,
            s = t.velocity;
          if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
            n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
            var o = n.width * t.scale,
              a = n.height * t.scale;
            if (!(o < i.slideWidth && a < i.slideHeight)) {
              if (n.minX = Math.min(i.slideWidth / 2 - o / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - a / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) {
                if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
              }
              e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
            }
          }
        },
        onTouchEnd: function() {
          var e = this.zoom,
            t = e.gesture,
            i = e.image,
            n = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
            i.isTouched = !1, i.isMoved = !1;
            var s = 300,
              o = 300,
              a = n.x * s,
              r = i.currentX + a,
              l = n.y * o,
              d = i.currentY + l;
            0 !== n.x && (s = Math.abs((r - i.currentX) / n.x)), 0 !== n.y && (o = Math.abs((d - i.currentY) / n.y));
            var c = Math.max(s, o);
            i.currentX = r, i.currentY = d;
            var u = i.width * e.scale,
              p = i.height * e.scale;
            i.minX = Math.min(t.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - p / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
          }
        },
        onTransitionEnd: function() {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
        },
        toggle: function(e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
          var t, i, s, o, a, r, l, d, c, u, p, h, f, v, m, g, y = this.zoom,
            b = this.params.zoom,
            w = y.gesture,
            T = y.image;
          w.$slideEl || (w.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === T.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = T.touchesStart.x, i = T.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (m = w.$slideEl[0].offsetWidth, g = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + m / 2 - t, o = w.$slideEl.offset().top + g / 2 - i, l = w.$imageEl[0].offsetWidth, d = w.$imageEl[0].offsetHeight, c = l * y.scale, u = d * y.scale, f = -(p = Math.min(m / 2 - c / 2, 0)), v = -(h = Math.min(g / 2 - u / 2, 0)), (a = s * y.scale) < p && (a = p), f < a && (a = f), (r = o * y.scale) < h && (r = h), v < r && (r = v)) : r = a = 0, w.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + r + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
        },
        out: function() {
          var e = this.zoom,
            t = this.params.zoom,
            i = e.gesture;
          i.$slideEl || (i.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        },
        enable: function() {
          var e = this.zoom;
          if (!e.enabled) {
            e.enabled = !0;
            var t = !("touchstart" !== this.touchEvents.start || !c.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            c.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
          }
        },
        disable: function() {
          var e = this.zoom;
          if (e.enabled) {
            this.zoom.enabled = !1;
            var t = !("touchstart" !== this.touchEvents.start || !c.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            c.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
          }
        }
      },
      X = {
        loadInSlide: function(e, t) {
          void 0 === t && (t = !0);
          var i = this,
            s = i.params.lazy;
          if (void 0 !== e && 0 !== i.slides.length) {
            var o = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
              a = o.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
            !o.hasClass(s.elementClass) || o.hasClass(s.loadedClass) || o.hasClass(s.loadingClass) || (a = a.add(o[0])), 0 !== a.length && a.each(function(e, a) {
              var r = n(a);
              r.addClass(s.loadingClass);
              var l = r.attr("data-background"),
                d = r.attr("data-src"),
                c = r.attr("data-srcset"),
                u = r.attr("data-sizes");
              i.loadImage(r[0], d || l, c, u, !1, function() {
                if (null != i && i && (!i || i.params) && !i.destroyed) {
                  if (l ? (r.css("background-image", 'url("' + l + '")'), r.removeAttr("data-background")) : (c && (r.attr("srcset", c), r.removeAttr("data-srcset")), u && (r.attr("sizes", u), r.removeAttr("data-sizes")), d && (r.attr("src", d), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), o.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                    var e = o.attr("data-swiper-slide-index");
                    if (o.hasClass(i.params.slideDuplicateClass)) {
                      var n = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                      i.lazy.loadInSlide(n.index(), !1)
                    } else {
                      var a = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                      i.lazy.loadInSlide(a.index(), !1)
                    }
                  }
                  i.emit("lazyImageReady", o[0], r[0])
                }
              }), i.emit("lazyImageLoad", o[0], r[0])
            })
          }
        },
        load: function() {
          var e = this,
            t = e.$wrapperEl,
            i = e.params,
            s = e.slides,
            o = e.activeIndex,
            a = e.virtual && i.virtual.enabled,
            r = i.lazy,
            l = i.slidesPerView;

          function d(e) {
            if (a) {
              if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
            } else if (s[e]) return !0;
            return !1
          }

          function c(e) {
            return a ? n(e).attr("data-swiper-slide-index") : n(e).index()
          }
          if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
            var s = a ? n(i).attr("data-swiper-slide-index") : n(i).index();
            e.lazy.loadInSlide(s)
          });
          else if (1 < l)
            for (var u = o; u < o + l; u += 1) d(u) && e.lazy.loadInSlide(u);
          else e.lazy.loadInSlide(o);
          if (r.loadPrevNext)
            if (1 < l || r.loadPrevNextAmount && 1 < r.loadPrevNextAmount) {
              for (var p = r.loadPrevNextAmount, h = l, f = Math.min(o + h + Math.max(p, h), s.length), v = Math.max(o - Math.max(h, p), 0), m = o + l; m < f; m += 1) d(m) && e.lazy.loadInSlide(m);
              for (var g = v; g < o; g += 1) d(g) && e.lazy.loadInSlide(g)
            } else {
              var y = t.children("." + i.slideNextClass);
              0 < y.length && e.lazy.loadInSlide(c(y));
              var b = t.children("." + i.slidePrevClass);
              0 < b.length && e.lazy.loadInSlide(c(b))
            }
        }
      },
      G = {
        LinearSpline: function(e, t) {
          var i, n, s, o, a;
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
            return e ? (a = function(e, t) {
              for (n = -1, i = e.length; 1 < i - n;) e[s = i + n >> 1] <= t ? n = s : i = s;
              return i
            }(this.x, e), o = a - 1, (e - this.x[o]) * (this.y[a] - this.y[o]) / (this.x[a] - this.x[o]) + this.y[o]) : 0
          }, this
        },
        getInterpolateFunction: function(e) {
          this.controller.spline || (this.controller.spline = this.params.loop ? new G.LinearSpline(this.slidesGrid, e.slidesGrid) : new G.LinearSpline(this.snapGrid, e.snapGrid))
        },
        setTranslate: function(e, t) {
          var i, n, s = this,
            o = s.controller.control;

          function a(e) {
            var t = s.rtlTranslate ? -s.translate : s.translate;
            "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * i + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          if (Array.isArray(o))
            for (var r = 0; r < o.length; r += 1) o[r] !== t && o[r] instanceof _ && a(o[r]);
          else o instanceof _ && t !== o && a(o)
        },
        setTransition: function(e, t) {
          var i, n = this,
            s = n.controller.control;

          function o(t) {
            t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
              s && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
            }))
          }
          if (Array.isArray(s))
            for (i = 0; i < s.length; i += 1) s[i] !== t && s[i] instanceof _ && o(s[i]);
          else s instanceof _ && t !== s && o(s)
        }
      },
      Y = {
        makeElFocusable: function(e) {
          return e.attr("tabIndex", "0"), e
        },
        addElRole: function(e, t) {
          return e.attr("role", t), e
        },
        addElLabel: function(e, t) {
          return e.attr("aria-label", t), e
        },
        disableEl: function(e) {
          return e.attr("aria-disabled", !0), e
        },
        enableEl: function(e) {
          return e.attr("aria-disabled", !1), e
        },
        onEnterKey: function(e) {
          var t = this.params.a11y;
          if (13 === e.keyCode) {
            var i = n(e.target);
            this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
          }
        },
        notify: function(e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e))
        },
        updateNavigation: function() {
          if (!this.params.loop) {
            var e = this.navigation,
              t = e.$nextEl,
              i = e.$prevEl;
            i && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
          }
        },
        updatePagination: function() {
          var e = this,
            t = e.params.a11y;
          e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, s) {
            var o = n(s);
            e.a11y.makeElFocusable(o), e.a11y.addElRole(o, "button"), e.a11y.addElLabel(o, t.paginationBulletMessage.replace(/{{index}}/, o.index() + 1))
          })
        },
        init: function() {
          this.$el.append(this.a11y.liveRegion);
          var e, t, i = this.params.a11y;
          this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
          var e, t;
          this.a11y.liveRegion && 0 < this.a11y.liveRegion.length && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
      },
      U = {
        init: function() {
          if (this.params.history) {
            if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
            var e = this.history;
            e.initialized = !0, e.paths = U.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
          }
        },
        destroy: function() {
          this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
          this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
          var e = t.location.pathname.slice(1).split("/").filter(function(e) {
              return "" !== e
            }),
            i = e.length;
          return {
            key: e[i - 2],
            value: e[i - 1]
          }
        },
        setHistory: function(e, i) {
          if (this.history.initialized && this.params.history.enabled) {
            var n = this.slides.eq(i),
              s = U.slugify(n.attr("data-history"));
            t.location.pathname.includes(e) || (s = e + "/" + s);
            var o = t.history.state;
            o && o.value === s || (this.params.history.replaceState ? t.history.replaceState({
              value: s
            }, null, s) : t.history.pushState({
              value: s
            }, null, s))
          }
        },
        slugify: function(e) {
          return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
          if (t)
            for (var n = 0, s = this.slides.length; n < s; n += 1) {
              var o = this.slides.eq(n);
              if (U.slugify(o.attr("data-history")) === t && !o.hasClass(this.params.slideDuplicateClass)) {
                var a = o.index();
                this.slideTo(a, e, i)
              }
            } else this.slideTo(0, e, i)
        }
      },
      V = {
        onHashCange: function() {
          var t = e.location.hash.replace("#", "");
          t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
        },
        setHash: function() {
          if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
            if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
            else {
              var i = this.slides.eq(this.activeIndex),
                n = i.attr("data-hash") || i.attr("data-history");
              e.location.hash = n || ""
            }
        },
        init: function() {
          if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
            this.hashNavigation.initialized = !0;
            var i = e.location.hash.replace("#", "");
            if (i)
              for (var s = 0, o = this.slides.length; s < o; s += 1) {
                var a = this.slides.eq(s);
                if ((a.attr("data-hash") || a.attr("data-history")) === i && !a.hasClass(this.params.slideDuplicateClass)) {
                  var r = a.index();
                  this.slideTo(r, 0, this.params.runCallbacksOnInit, !0)
                }
              }
            this.params.hashNavigation.watchState && n(t).on("hashchange", this.hashNavigation.onHashCange)
          }
        },
        destroy: function() {
          this.params.hashNavigation.watchState && n(t).off("hashchange", this.hashNavigation.onHashCange)
        }
      },
      Q = {
        run: function() {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() {
            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
          }, i)
        },
        start: function() {
          return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
        },
        stop: function() {
          return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
        },
        pause: function(e) {
          this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
        }
      },
      J = {
        setTranslate: function() {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            var i = this.slides.eq(t),
              n = -i[0].swiperSlideOffset;
            this.params.virtualTranslate || (n -= this.translate);
            var s = 0;
            this.isHorizontal() || (s = n, n = 0);
            var o = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({
              opacity: o
            }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
          }
        },
        setTransition: function(e) {
          var t = this,
            i = t.slides,
            n = t.$wrapperEl;
          if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
            var s = !1;
            i.transitionEnd(function() {
              if (!s && t && !t.destroyed) {
                s = !0, t.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
              }
            })
          }
        }
      },
      Z = {
        setTranslate: function() {
          var e, t = this.$el,
            i = this.$wrapperEl,
            s = this.slides,
            o = this.width,
            a = this.height,
            r = this.rtlTranslate,
            l = this.size,
            d = this.params.cubeEffect,
            c = this.isHorizontal(),
            u = this.virtual && this.params.virtual.enabled,
            p = 0;
          d.shadow && (c ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
            height: o + "px"
          })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), t.append(e)));
          for (var h = 0; h < s.length; h += 1) {
            var f = s.eq(h),
              v = h;
            u && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
            var m = 90 * v,
              g = Math.floor(m / 360);
            r && (m = -m, g = Math.floor(-m / 360));
            var y = Math.max(Math.min(f[0].progress, 1), -1),
              b = 0,
              w = 0,
              T = 0;
            v % 4 == 0 ? (b = 4 * -g * l, T = 0) : (v - 1) % 4 == 0 ? (b = 0, T = 4 * -g * l) : (v - 2) % 4 == 0 ? (b = l + 4 * g * l, T = l) : (v - 3) % 4 == 0 && (b = -l, T = 3 * l + 4 * l * g), r && (b = -b), c || (w = b, b = 0);
            var x = "rotateX(" + (c ? 0 : -m) + "deg) rotateY(" + (c ? m : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + T + "px)";
            if (y <= 1 && -1 < y && (p = 90 * v + 90 * y, r && (p = 90 * -v - 90 * y)), f.transform(x), d.slideShadows) {
              var S = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                k = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
              0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(S)), 0 === k.length && (k = n('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(k)), S.length && (S[0].style.opacity = Math.max(-y, 0)), k.length && (k[0].style.opacity = Math.max(y, 0))
            }
          }
          if (i.css({
              "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
              "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow)
            if (c) e.transform("translate3d(0px, " + (o / 2 + d.shadowOffset) + "px, " + -o / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
            else {
              var E = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                $ = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2),
                _ = d.shadowScale,
                M = d.shadowScale / $,
                N = d.shadowOffset;
              e.transform("scale3d(" + _ + ", 1, " + M + ") translate3d(0px, " + (a / 2 + N) + "px, " + -a / 2 / M + "px) rotateX(-90deg)")
            } var A = C.isSafari || C.isUiWebView ? -l / 2 : 0;
          i.transform("translate3d(0px,0," + A + "px) rotateX(" + (this.isHorizontal() ? 0 : p) + "deg) rotateY(" + (this.isHorizontal() ? -p : 0) + "deg)")
        },
        setTransition: function(e) {
          var t = this.$el;
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
      },
      K = {
        setTranslate: function() {
          for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
            var s = e.eq(i),
              o = s[0].progress;
            this.params.flipEffect.limitRotation && (o = Math.max(Math.min(s[0].progress, 1), -1));
            var a = -180 * o,
              r = 0,
              l = -s[0].swiperSlideOffset,
              d = 0;
            if (this.isHorizontal() ? t && (a = -a) : (d = l, r = -a, a = l = 0), s[0].style.zIndex = -Math.abs(Math.round(o)) + e.length, this.params.flipEffect.slideShadows) {
              var c = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                u = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
              0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(c)), 0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), c.length && (c[0].style.opacity = Math.max(-o, 0)), u.length && (u[0].style.opacity = Math.max(o, 0))
            }
            s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + r + "deg) rotateY(" + a + "deg)")
          }
        },
        setTransition: function(e) {
          var t = this,
            i = t.slides,
            n = t.activeIndex,
            s = t.$wrapperEl;
          if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
            var o = !1;
            i.eq(n).transitionEnd(function() {
              if (!o && t && !t.destroyed) {
                o = !0, t.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
              }
            })
          }
        }
      },
      ee = {
        setTranslate: function() {
          for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, o = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), l = this.translate, d = r ? e / 2 - l : t / 2 - l, u = r ? a.rotate : -a.rotate, p = a.depth, h = 0, f = i.length; h < f; h += 1) {
            var v = i.eq(h),
              m = o[h],
              g = (d - v[0].swiperSlideOffset - m / 2) / m * a.modifier,
              y = r ? u * g : 0,
              b = r ? 0 : u * g,
              w = -p * Math.abs(g),
              T = r ? 0 : a.stretch * g,
              x = r ? a.stretch * g : 0;
            Math.abs(x) < .001 && (x = 0), Math.abs(T) < .001 && (T = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
            var S = "translate3d(" + x + "px," + T + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
            if (v.transform(S), v[0].style.zIndex = 1 - Math.abs(Math.round(g)), a.slideShadows) {
              var C = r ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                k = r ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
              0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), v.append(C)), 0 === k.length && (k = n('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), v.append(k)), C.length && (C[0].style.opacity = 0 < g ? g : 0), k.length && (k[0].style.opacity = 0 < -g ? -g : 0)
            }
          }(c.pointerEvents || c.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
      },
      te = [M, N, A, L, z, P, j, {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create: function() {
          d.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: H.enable.bind(this),
              disable: H.disable.bind(this),
              handle: H.handle.bind(this),
              handleMouseEnter: H.handleMouseEnter.bind(this),
              handleMouseLeave: H.handleMouseLeave.bind(this),
              lastScrollTime: d.now()
            }
          })
        },
        on: {
          init: function() {
            this.params.mousewheel.enabled && this.mousewheel.enable()
          },
          destroy: function() {
            this.mousewheel.enabled && this.mousewheel.disable()
          }
        }
      }, {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function() {
          d.extend(this, {
            navigation: {
              init: B.init.bind(this),
              update: B.update.bind(this),
              destroy: B.destroy.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.navigation.init(), this.navigation.update()
          },
          toEdge: function() {
            this.navigation.update()
          },
          fromEdge: function() {
            this.navigation.update()
          },
          destroy: function() {
            this.navigation.destroy()
          },
          click: function(e) {
            var t = this.navigation,
              i = t.$nextEl,
              s = t.$prevEl;
            !this.params.navigation.hideOnClick || n(e.target).is(s) || n(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
          }
        }
      }, {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function(e) {
              return e
            },
            formatFractionTotal: function(e) {
              return e
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function() {
          d.extend(this, {
            pagination: {
              init: R.init.bind(this),
              render: R.render.bind(this),
              update: R.update.bind(this),
              destroy: R.destroy.bind(this),
              dynamicBulletIndex: 0
            }
          })
        },
        on: {
          init: function() {
            this.pagination.init(), this.pagination.render(), this.pagination.update()
          },
          activeIndexChange: function() {
            this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
          },
          snapIndexChange: function() {
            this.params.loop || this.pagination.update()
          },
          slidesLengthChange: function() {
            this.params.loop && (this.pagination.render(), this.pagination.update())
          },
          snapGridLengthChange: function() {
            this.params.loop || (this.pagination.render(), this.pagination.update())
          },
          destroy: function() {
            this.pagination.destroy()
          },
          click: function(e) {
            this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !n(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
          }
        }
      }, {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function() {
          d.extend(this, {
            scrollbar: {
              init: F.init.bind(this),
              destroy: F.destroy.bind(this),
              updateSize: F.updateSize.bind(this),
              setTranslate: F.setTranslate.bind(this),
              setTransition: F.setTransition.bind(this),
              enableDraggable: F.enableDraggable.bind(this),
              disableDraggable: F.disableDraggable.bind(this),
              setDragPosition: F.setDragPosition.bind(this),
              onDragStart: F.onDragStart.bind(this),
              onDragMove: F.onDragMove.bind(this),
              onDragEnd: F.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          })
        },
        on: {
          init: function() {
            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
          },
          update: function() {
            this.scrollbar.updateSize()
          },
          resize: function() {
            this.scrollbar.updateSize()
          },
          observerUpdate: function() {
            this.scrollbar.updateSize()
          },
          setTranslate: function() {
            this.scrollbar.setTranslate()
          },
          setTransition: function(e) {
            this.scrollbar.setTransition(e)
          },
          destroy: function() {
            this.scrollbar.destroy()
          }
        }
      }, {
        name: "parallax",
        params: {
          parallax: {
            enabled: !1
          }
        },
        create: function() {
          d.extend(this, {
            parallax: {
              setTransform: W.setTransform.bind(this),
              setTranslate: W.setTranslate.bind(this),
              setTransition: W.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
          },
          init: function() {
            this.params.parallax && this.parallax.setTranslate()
          },
          setTranslate: function() {
            this.params.parallax && this.parallax.setTranslate()
          },
          setTransition: function(e) {
            this.params.parallax && this.parallax.setTransition(e)
          }
        }
      }, {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function() {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
            t[i] = q[i].bind(e)
          }), d.extend(e, {
            zoom: t
          })
        },
        on: {
          init: function() {
            this.params.zoom.enabled && this.zoom.enable()
          },
          destroy: function() {
            this.zoom.disable()
          },
          touchStart: function(e) {
            this.zoom.enabled && this.zoom.onTouchStart(e)
          },
          touchEnd: function(e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e)
          },
          doubleTap: function(e) {
            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
          },
          transitionEnd: function() {
            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
          }
        }
      }, {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function() {
          d.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: X.load.bind(this),
              loadInSlide: X.loadInSlide.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
          },
          init: function() {
            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
          },
          scroll: function() {
            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
          },
          resize: function() {
            this.params.lazy.enabled && this.lazy.load()
          },
          scrollbarDragMove: function() {
            this.params.lazy.enabled && this.lazy.load()
          },
          transitionStart: function() {
            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
          },
          transitionEnd: function() {
            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
          }
        }
      }, {
        name: "controller",
        params: {
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        },
        create: function() {
          d.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: G.getInterpolateFunction.bind(this),
              setTranslate: G.setTranslate.bind(this),
              setTransition: G.setTransition.bind(this)
            }
          })
        },
        on: {
          update: function() {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          resize: function() {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          observerUpdate: function() {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          setTranslate: function(e, t) {
            this.controller.control && this.controller.setTranslate(e, t)
          },
          setTransition: function(e, t) {
            this.controller.control && this.controller.setTransition(e, t)
          }
        }
      }, {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create: function() {
          var e = this;
          d.extend(e, {
            a11y: {
              liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
            }
          }), Object.keys(Y).forEach(function(t) {
            e.a11y[t] = Y[t].bind(e)
          })
        },
        on: {
          init: function() {
            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
          },
          toEdge: function() {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          fromEdge: function() {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          paginationUpdate: function() {
            this.params.a11y.enabled && this.a11y.updatePagination()
          },
          destroy: function() {
            this.params.a11y.enabled && this.a11y.destroy()
          }
        }
      }, {
        name: "history",
        params: {
          history: {
            enabled: !1,
            replaceState: !1,
            key: "slides"
          }
        },
        create: function() {
          d.extend(this, {
            history: {
              init: U.init.bind(this),
              setHistory: U.setHistory.bind(this),
              setHistoryPopState: U.setHistoryPopState.bind(this),
              scrollToSlide: U.scrollToSlide.bind(this),
              destroy: U.destroy.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.history.enabled && this.history.init()
          },
          destroy: function() {
            this.params.history.enabled && this.history.destroy()
          },
          transitionEnd: function() {
            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
          }
        }
      }, {
        name: "hash-navigation",
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
          }
        },
        create: function() {
          d.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: V.init.bind(this),
              destroy: V.destroy.bind(this),
              setHash: V.setHash.bind(this),
              onHashCange: V.onHashCange.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.hashNavigation.enabled && this.hashNavigation.init()
          },
          destroy: function() {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
          },
          transitionEnd: function() {
            this.hashNavigation.initialized && this.hashNavigation.setHash()
          }
        }
      }, {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create: function() {
          var e = this;
          d.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: Q.run.bind(e),
              start: Q.start.bind(e),
              stop: Q.stop.bind(e),
              pause: Q.pause.bind(e),
              onTransitionEnd: function(t) {
                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
              }
            }
          })
        },
        on: {
          init: function() {
            this.params.autoplay.enabled && this.autoplay.start()
          },
          beforeTransitionStart: function(e, t) {
            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
          },
          sliderFirstMove: function() {
            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
          },
          destroy: function() {
            this.autoplay.running && this.autoplay.stop()
          }
        }
      }, {
        name: "effect-fade",
        params: {
          fadeEffect: {
            crossFade: !1
          }
        },
        create: function() {
          d.extend(this, {
            fadeEffect: {
              setTranslate: J.setTranslate.bind(this),
              setTransition: J.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "fade" === this.params.effect && this.fadeEffect.setTranslate()
          },
          setTransition: function(e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        },
        create: function() {
          d.extend(this, {
            cubeEffect: {
              setTranslate: Z.setTranslate.bind(this),
              setTransition: Z.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "cube" === this.params.effect && this.cubeEffect.setTranslate()
          },
          setTransition: function(e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-flip",
        params: {
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0
          }
        },
        create: function() {
          d.extend(this, {
            flipEffect: {
              setTranslate: K.setTranslate.bind(this),
              setTransition: K.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "flip" === this.params.effect && this.flipEffect.setTranslate()
          },
          setTransition: function(e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e)
          }
        }
      }, {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function() {
          d.extend(this, {
            coverflowEffect: {
              setTranslate: ee.setTranslate.bind(this),
              setTransition: ee.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
          },
          setTranslate: function() {
            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
          },
          setTransition: function(e) {
            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
          }
        }
      }];
    return void 0 === _.use && (_.use = _.Class.use, _.installModule = _.Class.installModule), _.use(te), _
  }),
  function(e) {
    "use strict";
    e.jscroll = {
      defaults: {
        debug: !1,
        autoTrigger: !0,
        autoTriggerUntil: !1,
        loadingHtml: "<small>Loading...</small>",
        padding: 0,
        nextSelector: "a:last",
        contentSelector: "",
        pagingSelector: "",
        callback: !1
      }
    };
    var t = function(t, i) {
      var n, s = t.data("jscroll"),
        o = "function" == typeof i ? {
          callback: i
        } : i,
        a = e.extend({}, e.jscroll.defaults, o, s || {}),
        r = "visible" === t.css("overflow-y"),
        l = t.find(a.nextSelector).first(),
        d = e(window),
        c = e("body"),
        u = r ? d : t,
        p = e.trim(l.attr("href") + " " + a.contentSelector),
        h = function() {
          t.find(".jscroll-inner").length || t.contents().wrapAll('<div class="jscroll-inner" />')
        },
        f = function(e) {
          a.pagingSelector ? e.closest(a.pagingSelector).hide() : e.parent().not(".jscroll-inner,.jscroll-added").addClass("jscroll-next-parent").hide().length || e.wrap('<div class="jscroll-next-parent" />').parent().hide()
        },
        v = function() {
          return u.unbind(".jscroll").removeData("jscroll").find(".jscroll-inner").children().unwrap().filter(".jscroll-added").children().unwrap()
        },
        m = function() {
          h();
          var e = t.find("div.jscroll-inner").first(),
            i = t.data("jscroll"),
            n = parseInt(t.css("borderTopWidth"), 10),
            s = isNaN(n) ? 0 : n,
            o = parseInt(t.css("paddingTop"), 10) + s,
            l = r ? u.scrollTop() : t.offset().top,
            d = e.length ? e.offset().top : 0,
            c = Math.ceil(l - d + u.height() + o);
          return !i.waiting && c + a.padding >= e.outerHeight() ? (b("info", "jScroll:", e.outerHeight() - c, "from bottom. Loading next request..."), y()) : void 0
        },
        g = function() {
          var e = t.find(a.nextSelector).first();
          a.autoTrigger && (!1 === a.autoTriggerUntil || 0 < a.autoTriggerUntil) ? (f(e), c.height() <= d.height() && m(), u.unbind(".jscroll").bind("scroll.jscroll", function() {
            return m()
          }), 0 < a.autoTriggerUntil && a.autoTriggerUntil--) : (u.unbind(".jscroll"), e.bind("click.jscroll", function() {
            return f(e), y(), !1
          }))
        },
        y = function() {
          var i = t.find("div.jscroll-inner").first(),
            n = t.data("jscroll");
          return n.waiting = !0, i.append('<div class="jscroll-added" />').children(".jscroll-added").last().html('<div class="jscroll-loading">' + a.loadingHtml + "</div>"), t.animate({
            scrollTop: i.outerHeight()
          }, 0, function() {
            i.find("div.jscroll-added").last().load(n.nextHref, function(i, s) {
              if ("error" === s) return v();
              var o, r = e(this).find(a.nextSelector).first();
              n.waiting = !1, n.nextHref = !!r.attr("href") && e.trim(r.attr("href") + " " + a.contentSelector), e(".jscroll-next-parent", t).remove(), (o = o || t.data("jscroll")) && o.nextHref ? g() : (b("warn", "jScroll: nextSelector not found - destroying"), v()), a.callback && a.callback.call(this), b("dir", n)
            })
          })
        },
        b = function(e) {
          if (a.debug && "object" == typeof console && ("object" == typeof e || "function" == typeof console[e]))
            if ("object" == typeof e) {
              var t = [];
              for (var i in e) "function" == typeof console[i] ? (t = e[i].length ? e[i] : [e[i]], console[i].apply(console, t)) : console.log.apply(console, t)
            } else console[e].apply(console, Array.prototype.slice.call(arguments, 1))
        };
      return t.data("jscroll", e.extend({}, s, {
        initialized: !0,
        waiting: !1,
        nextHref: p
      })), h(), (n = e(a.loadingHtml).filter("img").attr("src")) && ((new Image).src = n), g(), e.extend(t.jscroll, {
        destroy: v
      }), t
    };
    e.fn.jscroll = function(i) {
      return this.each(function() {
        var n = e(this),
          s = n.data("jscroll");
        s && s.initialized || new t(n, i)
      })
    }
  }(jQuery),
  function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
  }(function(e) {
    e.timeago = function(t) {
      return t instanceof Date ? s(t) : s("string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
    };
    var t = e.timeago;
    e.extend(e.timeago, {
      settings: {
        refreshMillis: 6e4,
        allowPast: !0,
        allowFuture: !1,
        localeTitle: !1,
        cutoff: 0,
        strings: {
          prefixAgo: null,
          prefixFromNow: null,
          suffixAgo: "ago",
          suffixFromNow: "from now",
          inPast: "any moment now",
          seconds: "less than a minute",
          minute: "about a minute",
          minutes: "%d minutes",
          hour: "about an hour",
          hours: "about %d hours",
          day: "a day",
          days: "%d days",
          month: "about a month",
          months: "%d months",
          year: "about a year",
          years: "%d years",
          wordSeparator: " ",
          numbers: []
        }
      },
      inWords: function(t) {
        if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
        var i = this.settings.strings,
          n = i.prefixAgo,
          s = i.suffixAgo;
        if (this.settings.allowFuture && t < 0 && (n = i.prefixFromNow, s = i.suffixFromNow), !this.settings.allowPast && 0 <= t) return this.settings.strings.inPast;
        var o = Math.abs(t) / 1e3,
          a = o / 60,
          r = a / 60,
          l = r / 24,
          d = l / 365;

        function c(n, s) {
          var o = e.isFunction(n) ? n(s, t) : n,
            a = i.numbers && i.numbers[s] || s;
          return o.replace(/%d/i, a)
        }
        var u = o < 45 && c(i.seconds, Math.round(o)) || o < 90 && c(i.minute, 1) || a < 45 && c(i.minutes, Math.round(a)) || a < 90 && c(i.hour, 1) || r < 24 && c(i.hours, Math.round(r)) || r < 42 && c(i.day, 1) || l < 30 && c(i.days, Math.round(l)) || l < 45 && c(i.month, 1) || l < 365 && c(i.months, Math.round(l / 30)) || d < 1.5 && c(i.year, 1) || c(i.years, Math.round(d)),
          p = i.wordSeparator || "";
        return void 0 === i.wordSeparator && (p = " "), e.trim([n, u, s].join(p))
      },
      parse: function(t) {
        var i = e.trim(t);
        return i = (i = (i = (i = (i = i.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100"), new Date(i)
      },
      datetime: function(i) {
        var n = t.isTime(i) ? e(i).attr("datetime") : e(i).attr("title");
        return t.parse(n)
      },
      isTime: function(t) {
        return "time" === e(t).get(0).tagName.toLowerCase()
      }
    });
    var i = {
      init: function() {
        var i = e.proxy(n, this);
        i();
        var s = t.settings;
        0 < s.refreshMillis && (this._timeagoInterval = setInterval(i, s.refreshMillis))
      },
      update: function(i) {
        var s = t.parse(i);
        e(this).data("timeago", {
          datetime: s
        }), t.settings.localeTitle && e(this).attr("title", s.toLocaleString()), n.apply(this)
      },
      updateFromDOM: function() {
        e(this).data("timeago", {
          datetime: t.parse(t.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
        }), n.apply(this)
      },
      dispose: function() {
        this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
      }
    };

    function n() {
      var i = function(i) {
          if (!(i = e(i)).data("timeago")) {
            i.data("timeago", {
              datetime: t.datetime(i)
            });
            var n = e.trim(i.text());
            t.settings.localeTitle ? i.attr("title", i.data("timeago").datetime.toLocaleString()) : !(0 < n.length) || t.isTime(i) && i.attr("title") || i.attr("title", n)
          }
          return i.data("timeago")
        }(this),
        n = t.settings;
      return isNaN(i.datetime) || (0 == n.cutoff || Math.abs(o(i.datetime)) < n.cutoff) && e(this).text(s(i.datetime)), this
    }

    function s(e) {
      return t.inWords(o(e))
    }

    function o(e) {
      return (new Date).getTime() - e.getTime()
    }
    e.fn.timeago = function(e, t) {
      var n = e ? i[e] : i.init;
      if (!n) throw new Error("Unknown function name '" + e + "' for timeago");
      return this.each(function() {
        n.call(this, t)
      }), this
    }, document.createElement("abbr"), document.createElement("time")
  }), jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "",
    suffixFromNow: "dari sekarang",
    seconds: "baru saja",
    minute: "satu menit lalu",
    minutes: "%d menit",
    hour: "1 jam lalu",
    hours: "%d jam lalu",
    day: "kemarin",
    days: "%d hari lalu",
    month: "sebulan lalu",
    months: "%d bulan lalu",
    year: "setahun lalu",
    years: "%d tahun lalu"
  },
  function(e) {
    e.fn.ratingWidget = function(t) {
      function i() {
        e(".control-group").removeClass("unable"), e(".control-group").addClass("able")
      }

      function n() {
        var t, n = JSON.parse(localStorage.getItem("okezone_rate_article"));
        if (null != n)
          for (var s in n) {
            if (parseInt(n[s].article_id) == parseInt(l.article_id)) {
              e(u).find(".respond").addClass("thanks"), e(u).find(".respond").html("menurut anda artikel ini: <span>" + r[n[s].rating_id] + "</span>"), t = n[s].rating_id, e(".radioRating").find("div[rating_id='" + t + "']").addClass("checked"), e("input[name='rating_id']").prop("disabled", !0), e(".control-group").removeClass("able"), e(".control-group").addClass("unable");
              break
            }
            i()
          } else i()
      }

      function s() {
        e.ajax({
          type: "GET",
          url: c.fetch + "/" + l.article_id + "/" + l.content_type,
          success: function(t) {
            for (var i = e(".radioRating").find("input[name='rating_id']"), n = 0; n < i.length; n++) {
              var s = i[n].value;
              if (null == t.result[s].count) o = 0;
              else {
                var o = t.result[s].round;
                t.result[s].count
              }
              e(".radioRating").find("div[rating_id='" + s + "']").find(".info").find(".lbl").html(o + " %")
            }
          },
          error: function(t) {
            e(u).html("")
          }
        })
      }
      var o = "http://emoji.okezone.com";
      "http:" != location.protocol && (o = "https://emoji.okezone.com");
      var a, r = {
          1: "Menarik",
          2: "Inspiratif",
          3: "So - So",
          4: "Menyedihkan",
          5: "Meresahkan"
        },
        l = e.extend({
          self: this,
          main_label: "Apa pendapat anda mengenai artikel ini?",
          url: null,
          browser: null,
          ip_address: null,
          user_id: null,
          unique_id: null,
          server_address: o,
          img_address: "https://cdn.okezone.com/underwood/img/emoji"
        }, t);
      l.content_type = "" == (a = l.url.split(".").shift().split("http://")[1]) ? -1 : "foto" == a ? 2 : "video" == a ? 3 : 1;
      var d = l,
        c = e.extend({
          fetch: l.server_address + "/rating/fetch",
          insert: l.server_address + "/rating/insert"
        }),
        u = e(this).selector,
        p = '<label class="main-label">' + l.main_label + "</label>";
      p += "<div class='row radioRating'>";
      var h, f = (h = (h = l.url.split(".")[0]).split("//"), -1 == ["news", "economy", "lifestyle", "celebrity", "bola", "sports", "techno"].indexOf(h[1]) ? "default" : h[1]);
      for (var v in r) {
        var m = '<div class="rad ratingicon"  title="' + r[v] + '" rating_id="' + v + '">';
        m += '<div class="control-group">', m += "<label>", m += '<div class="radio">', m += '<input type="radio" value="' + v + '" name="rating_id" >', m += '<img src="' + l.img_address + "/" + f + "/" + v + '.png"/>', m += "</div>", m += '<div class="info rid_' + v + '">', m += '<div class="row">', m += '<div class="lbl"></div>', m += '<div class="round"></div>', m += "</div>", m += "</div>", m += "</label>", m += '<div class="clear"></div>', m += "</div>", p += m += "</div>"
      }
      p += "</div>", p += "<div class='respond'></div>", e(u = "#rating-container").html(p), e(".radioRating input[name='rating_id']").change(function(t) {
        e.ajax({
          type: "POST",
          url: c.insert,
          data: {
            url: d.url,
            ip_address: d.ip_address,
            browser: d.browser,
            article_id: d.article_id,
            channel_id: d.channel_id,
            cookie: d.unique_id,
            content_type: d.content_type,
            rating_id: e("input[name=rating_id]:checked").val()
          },
          success: function(e) {
            var t = JSON.parse(localStorage.getItem("okezone_rate_article"));
            if (null != t) var i = Object.assign(t, e.obj);
            else i = e.obj;
            localStorage.setItem("okezone_rate_article", JSON.stringify(i)), s(), n()
          },
          error: function(t) {
            e(u).html("")
          }
        })
      }).ready(function() {
        s(), n()
      })
    }
  }(jQuery),
  function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
  }(function(e) {
    var t = /\+/g;

    function i(e) {
      return s.raw ? e : encodeURIComponent(e)
    }

    function n(i, n) {
      var o = s.raw ? i : function(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
          return e = decodeURIComponent(e.replace(t, " ")), s.json ? JSON.parse(e) : e
        } catch (e) {}
      }(i);
      return e.isFunction(n) ? n(o) : o
    }
    var s = e.cookie = function(t, o, a) {
      if (void 0 !== o && !e.isFunction(o)) {
        if ("number" == typeof(a = e.extend({}, s.defaults, a)).expires) {
          var r = a.expires,
            l = a.expires = new Date;
          l.setTime(+l + 864e5 * r)
        }
        return document.cookie = [i(t), "=", (d = o, i(s.json ? JSON.stringify(d) : String(d))), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
      }
      for (var d, c, u = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], h = 0, f = p.length; h < f; h++) {
        var v = p[h].split("="),
          m = (c = v.shift(), s.raw ? c : decodeURIComponent(c)),
          g = v.join("=");
        if (t && t === m) {
          u = n(g, o);
          break
        }
        t || void 0 === (g = n(g)) || (u[m] = g)
      }
      return u
    };
    s.defaults = {}, e.removeCookie = function(t, i) {
      return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, i, {
        expires: -1
      })), !e.cookie(t))
    }
  }), waShBtn = function() {
    !0 === this.isIos && this.cntLdd(window, this.crBtn)
  }, waShBtn.prototype.isIos = !(!navigator.userAgent.match(/Android|iPhone/i) || navigator.userAgent.match(/iPod|iPad/i)), waShBtn.prototype.cntLdd = function(e, t) {
    var i = !1,
      n = !0,
      s = e.document,
      o = s.documentElement,
      a = s.addEventListener ? "addEventListener" : "attachEvent",
      r = s.addEventListener ? "removeEventListener" : "detachEvent",
      l = s.addEventListener ? "" : "on",
      d = function(n) {
        ("readystatechange" != n.type || "complete" == s.readyState) && (("load" == n.type ? e : s)[r](l + n.type, d, !1), !i && (i = !0) && t.call(e, n.type || n))
      },
      c = function() {
        try {
          o.doScroll("left")
        } catch (e) {
          return void setTimeout(c, 50)
        }
        d("poll")
      };
    if ("complete" == s.readyState) t.call(e, "lazy");
    else {
      if (s.createEventObject && o.doScroll) {
        try {
          n = !e.frameElement
        } catch (n) {}
        n && c()
      }
      s[a](l + "DOMContentLoaded", d, !1), s[a](l + "readystatechange", d, !1), e[a](l + "load", d, !1)
    }
  }, waShBtn.prototype.addStyling = function() {
    var e = document.createElement("style"),
      t = "body,html{padding:0;margin:0;height:100%;width:100%}.wa_btn{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjVweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiIgZD0iTTguMTI5LDAuOTQ1Yy0zLjc5NSwwLTYuODcyLDMuMDc3LTYuODcyLDYuODczDQoJCQljMCwxLjI5OCwwLjM2LDIuNTEyLDAuOTg2LDMuNTQ5bC0xLjI0LDMuNjg4bDMuODA1LTEuMjE5YzAuOTg0LDAuNTQ0LDIuMTE2LDAuODU0LDMuMzIxLDAuODU0YzMuNzk1LDAsNi44NzEtMy4wNzUsNi44NzEtNi44NzENCgkJCVMxMS45MjQsMC45NDUsOC4xMjksMC45NDV6IE04LjEyOSwxMy41MzhjLTEuMTYyLDAtMi4yNDQtMC4zNDgtMy4xNDctMC45NDZsLTIuMTk4LDAuNzA1bDAuNzE1LTIuMTI0DQoJCQljLTAuNjg2LTAuOTQ0LTEuMDktMi4xMDMtMS4wOS0zLjM1NGMwLTMuMTU1LDIuNTY2LTUuNzIyLDUuNzIxLTUuNzIyczUuNzIxLDIuNTY2LDUuNzIxLDUuNzIyUzExLjI4MywxMy41MzgsOC4xMjksMTMuNTM4eg0KCQkJIE0xMS4zNTIsOS4zNzljLTAuMTc0LTAuMDk0LTEuMDItMC41NS0xLjE3OC0wLjYxNUMxMC4wMTQsOC43LDkuODk4LDguNjY2LDkuNzc1LDguODM3QzkuNjUyLDkuMDA3LDkuMzAxLDkuMzksOS4xOTMsOS41MDUNCgkJCUM5LjA4OCw5LjYxNyw4Ljk4NCw5LjYyOSw4LjgxMiw5LjUzM2MtMC4xNzEtMC4wOTYtMC43My0wLjMtMS4zNzgtMC45MjNjLTAuNTA0LTAuNDg0LTAuODM0LTEuMDcyLTAuOTMtMS4yNTINCgkJCWMtMC4wOTUtMC4xOCwwLTAuMjcxLDAuMDkxLTAuMzU0QzYuNjc3LDYuOTI4LDYuNzc4LDYuODA1LDYuODcsNi43MDZjMC4wOTEtMC4xLDAuMTI0LTAuMTcxLDAuMTg3LTAuMjg2DQoJCQljMC4wNjItMC4xMTUsMC4wMzgtMC4yMTgtMC4wMDMtMC4zMDhDNy4wMTIsNi4wMjMsNi42OTQsNS4xNDYsNi41NjEsNC43OUM2LjQyOCw0LjQzNCw2LjI4LDQuNDg2LDYuMTc3LDQuNDgyDQoJCQlDNi4wNzUsNC40NzksNS45NTgsNC40NTksNS44NDEsNC40NTZDNS43MjQsNC40NTEsNS41MzMsNC40ODcsNS4zNjYsNC42NTdjLTAuMTY3LDAuMTctMC42MzcsMC41NzYtMC42NjksMS40MzkNCgkJCXMwLjU2NSwxLjcyMiwwLjY0OCwxLjg0MWMwLjA4NCwwLjEyMSwxLjE0LDEuOTkxLDIuODk3LDIuNzYyYzEuNzU2LDAuNzcsMS43NjYsMC41MzQsMi4wODgsMC41MTgNCgkJCWMwLjMyMi0wLjAxOCwxLjA1NS0wLjM4NiwxLjIxNS0wLjc4OWMwLjE2Mi0wLjQwNSwwLjE3Ni0wLjc1NSwwLjEzNS0wLjgzMUMxMS42MzksOS41MjEsMTEuNTIzLDkuNDc1LDExLjM1Miw5LjM3OXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==);display:inline-block!important;position:relative;font-family:Arial,sans-serif;letter-spacing:.4px;cursor:pointer;font-weight:400;text-transform:none;color:#fff;background-color:#5cbe4a;background-repeat:no-repeat;line-height:1.2;text-decoration:none;text-align:left;width:100%; height:52px; overflow:hidden; text-indent:-99999px;}.wa_btn_s{font-size:12px;background-position:center; width:40px; height:40px; background-size:28px; background-position:center; padding:0; width:100%; height:100%;}.wa_btn_m{font-size:16px;background-size:20px;background-position:4px 2px;padding:4px 6px 4px 30px}.wa_btn_l{font-size:16px;background-size:20px;background-position:5px 5px;padding:8px 6px 8px 30px}";
    return e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), e
  }, waShBtn.prototype.crBtn = function() {
    var e = [].slice.call(document.querySelectorAll(".wa_btn"));
    iframe = new Array;
    for (var t = 0; t < e.length; t++) {
      var i = e[t].parentNode,
        n = e[t].getAttribute("data-text"),
        s = e[t].getAttribute("data-href"),
        o = e[t].getAttribute("href"),
        a = "?text=" + encodeURIComponent(n);
      n && (a += "%20"), a += encodeURIComponent(s || document.URL), e[t].setAttribute("href", o + a), e[t].setAttribute("target", "_top"), iframe[t] = document.createElement("iframe"), iframe[t].width = 1, iframe[t].height = 1, iframe[t].button = e[t], iframe[t].style.border = 0, iframe[t].style.overflow = "hidden", iframe[t].border = 0, iframe[t].setAttribute("scrolling", "no"), iframe[t].addEventListener("load", function() {
        this.contentDocument.body.appendChild(this.button), this.contentDocument.getElementsByTagName("head")[0].appendChild(theWaShBtn.addStyling());
        var e = document.createElement("meta");
        e.setAttribute("charset", "utf-8"), this.contentDocument.getElementsByTagName("head")[0].appendChild(e), this.width = "100%", this.height = "60"
      }, !1), i.insertBefore(iframe[t], e[t])
    }
  };
var theWaShBtn = new waShBtn;
! function(e) {
  var t = {
    height: 500,
    width: 500,
    toolbar: !1,
    scrollbars: !1,
    status: !1,
    resizable: !1,
    left: 0,
    top: 0,
    center: !0,
    createNew: !0,
    name: null,
    location: !1,
    menubar: !1,
    onUnload: null
  };
  e.popupWindow = function(i, n) {
    var s = e.extend({}, t, n);
    s.center && (s.top = (screen.height - s.height) / 2 - 50, s.left = (screen.width - s.width) / 2);
    var o = [];
    o.push("location=" + (s.location ? "yes" : "no")), o.push("menubar=" + (s.menubar ? "yes" : "no")), o.push("toolbar=" + (s.toolbar ? "yes" : "no")), o.push("scrollbars=" + (s.scrollbars ? "yes" : "no")), o.push("status=" + (s.status ? "yes" : "no")), o.push("resizable=" + (s.resizable ? "yes" : "no")), o.push("height=" + s.height), o.push("width=" + s.width), o.push("left=" + s.left), o.push("top=" + s.top);
    var a = (new Date).getTime(),
      r = s.name || (s.createNew ? "popup_window_" + a : "popup_window"),
      l = window.open(i, r, o.join(","));
    if (s.onUnload && "function" == typeof s.onUnload) var d = setInterval(function() {
      l && !l.closed || (clearInterval(d), s.onUnload())
    }, 50);
    return l && l.focus && l.focus(), l
  }
}(jQuery),
function(e) {
  e.fn.JPathner = function(t) {
    e(this).on("click", function() {
      var i = e.extend({
        self: this,
        clientId: "ef324293d27a32ee769cd0fb40bcee5c660c0bb3",
        url: null,
        description: null,
        title: null,
        image: null,
        okezone_id: 1,
        dialog: "http://share.okezone.com/path",
        domain: ".okezone.com"
      }, t);
      e.cookie("sharetopath.token"), e.cookie("sharetopath.image", t.image, {
        domain: i.domain,
        expires: 1,
        path: "/"
      }), e.cookie("sharetopath.url", i.url, {
        domain: i.domain,
        expires: 1,
        path: "/"
      }), e.cookie("sharetopath.title", i.title, {
        domain: i.domain,
        expires: 1,
        path: "/"
      }), e.cookie("sharetopath.okezone_id", i.okezone_id, {
        domain: i.domain,
        expires: 1,
        path: "/"
      });
      var n = "https://partner.path.com/oauth2/authenticate?response_type=code&client_id=";
      n += i.clientId, e.popupWindow(n, {
        width: 500,
        height: 550,
        scrollbars: !0
      })
    })
  }
}(jQuery);
var adzan_schedule = [],
  pop_duration = 900,
  sound_duration = 300;
adzan_schedule[0] = [], adzan_schedule[1] = ["2017-06-01T04:36+07:00", "2017-06-01T11:54+07:00", "2017-06-01T15:14+07:00", "2017-06-01T17:46+07:00", "2017-06-01T19:00+07:00"], adzan_schedule[2] = ["2017-06-02T04:36+07:00", "2017-06-02T11:54+07:00", "2017-06-02T15:14+07:00", "2017-06-02T17:46+07:00", "2017-06-02T19:00+07:00"], adzan_schedule[3] = ["2017-06-03T04:36+07:00", "2017-06-03T11:54+07:00", "2017-06-03T15:14+07:00", "2017-06-03T17:46+07:00", "2017-06-03T19:00+07:00"], adzan_schedule[4] = ["2017-06-04T04:36+07:00", "2017-06-04T11:54+07:00", "2017-06-04T15:15+07:00", "2017-06-04T17:46+07:00", "2017-06-04T19:00+07:00"], adzan_schedule[5] = ["2017-06-05T04:36+07:00", "2017-06-05T11:55+07:00", "2017-06-05T15:15+07:00", "2017-06-05T17:46+07:00", "2017-06-05T19:00+07:00"], adzan_schedule[6] = ["2017-06-06T04:36+07:00", "2017-06-06T11:55+07:00", "2017-06-06T15:15+07:00", "2017-06-06T17:46+07:00", "2017-06-06T19:01+07:00"], adzan_schedule[7] = ["2017-06-07T04:36+07:00", "2017-06-07T11:55+07:00", "2017-06-07T15:15+07:00", "2017-06-07T17:46+07:00", "2017-06-07T19:01+07:00"], adzan_schedule[8] = ["2017-06-08T04:37+07:00", "2017-06-08T11:55+07:00", "2017-06-08T15:15+07:00", "2017-06-08T17:47+07:00", "2017-06-08T19:01+07:00"], adzan_schedule[9] = ["2017-06-09T04:37+07:00", "2017-06-09T11:55+07:00", "2017-06-09T15:15+07:00", "2017-06-09T17:47+07:00", "2017-06-09T19:01+07:00"], adzan_schedule[10] = ["2017-06-10T04:37+07:00", "2017-06-10T11:56+07:00", "2017-06-10T15:16+07:00", "2017-06-10T17:47+07:00", "2017-06-10T19:01+07:00"], adzan_schedule[11] = ["2017-06-11T04:37+07:00", "2017-06-11T11:56+07:00", "2017-06-11T15:16+07:00", "2017-06-11T17:47+07:00", "2017-06-11T19:02+07:00"], adzan_schedule[12] = ["2017-06-12T04:37+07:00", "2017-06-12T11:56+07:00", "2017-06-12T15:16+07:00", "2017-06-12T17:47+07:00", "2017-06-12T19:02+07:00"], adzan_schedule[13] = ["2017-06-13T04:38+07:00", "2017-06-13T11:56+07:00", "2017-06-13T15:16+07:00", "2017-06-13T17:47+07:00", "2017-06-13T19:02+07:00"], adzan_schedule[14] = ["2017-06-14T04:38+07:00", "2017-06-14T11:56+07:00", "2017-06-14T15:16+07:00", "2017-06-14T17:48+07:00", "2017-06-14T19:02+07:00"], adzan_schedule[15] = ["2017-06-15T04:38+07:00", "2017-06-15T11:57+07:00", "2017-06-15T15:17+07:00", "2017-06-15T17:48+07:00", "2017-06-15T19:02+07:00"], adzan_schedule[16] = ["2017-06-16T04:38+07:00", "2017-06-16T11:57+07:00", "2017-06-16T15:17+07:00", "2017-06-16T17:48+07:00", "2017-06-16T19:03+07:00"], adzan_schedule[17] = ["2017-06-17T04:38+07:00", "2017-06-17T11:57+07:00", "2017-06-17T15:17+07:00", "2017-06-17T17:48+07:00", "2017-06-17T19:03+07:00"], adzan_schedule[18] = ["2017-06-18T04:39+07:00", "2017-06-18T11:57+07:00", "2017-06-18T15:17+07:00", "2017-06-18T17:48+07:00", "2017-06-18T19:03+07:00"], adzan_schedule[19] = ["2017-06-19T04:39+07:00", "2017-06-19T11:57+07:00", "2017-06-19T15:17+07:00", "2017-06-19T17:49+07:00", "2017-06-19T19:03+07:00"], adzan_schedule[20] = ["2017-06-20T04:39+07:00", "2017-06-20T11:58+07:00", "2017-06-20T15:18+07:00", "2017-06-20T17:49+07:00", "2017-06-20T19:04+07:00"], adzan_schedule[21] = ["2017-06-21T04:39+07:00", "2017-06-21T11:58+07:00", "2017-06-21T15:18+07:00", "2017-06-21T17:49+07:00", "2017-06-21T19:04+07:00"], adzan_schedule[22] = ["2017-06-22T04:40+07:00", "2017-06-22T11:58+07:00", "2017-06-22T15:18+07:00", "2017-06-22T17:49+07:00", "2017-06-22T19:04+07:00"], adzan_schedule[23] = ["2017-06-23T04:40+07:00", "2017-06-23T11:58+07:00", "2017-06-23T15:18+07:00", "2017-06-23T17:49+07:00", "2017-06-23T19:04+07:00"], adzan_schedule[24] = ["2017-06-24T04:40+07:00", "2017-06-24T11:59+07:00", "2017-06-24T15:19+07:00", "2017-06-24T17:50+07:00", "2017-06-24T19:04+07:00"], adzan_schedule[25] = [], adzan_schedule[26] = [], adzan_schedule[27] = ["2017-05-27T04:35+07:00", "2017-05-27T11:53+07:00", "2017-05-27T15:13+07:00", "2017-05-27T17:45+07:00", "2017-05-27T18:59+07:00"], adzan_schedule[28] = ["2017-05-28T04:35+07:00", "2017-05-28T11:53+07:00", "2017-05-28T15:14+07:00", "2017-05-28T17:45+07:00", "2017-05-28T18:59+07:00"], adzan_schedule[29] = ["2017-05-29T04:35+07:00", "2017-05-29T11:54+07:00", "2017-05-29T15:14+07:00", "2017-05-29T17:46+07:00", "2017-05-29T18:59+07:00"], adzan_schedule[30] = ["2017-05-30T04:35+07:00", "2017-05-30T11:54+07:00", "2017-05-30T15:14+07:00", "2017-05-30T17:46+07:00", "2017-05-30T18:59+07:00"], adzan_schedule[31] = ["2017-05-31T04:35+07:00", "2017-05-31T11:54+07:00", "2017-05-31T15:14+07:00", "2017-05-31T17:46+07:00", "2017-05-31T19:00+07:00"];
var adzan_image = [];
adzan_image[0] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/subuh.png", adzan_image[1] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/dzuhur.png", adzan_image[2] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/ashar.png", adzan_image[3] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/maghrib.png", adzan_image[4] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/isya.png";
var adzan_mobile_image = [];

function togglelog() {
  var e = document.getElementById("userss");
  "none" === e.style.display ? e.style.display = "block" : e.style.display = "none"
}
adzan_mobile_image[0] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-subuh.png", adzan_mobile_image[1] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-dzuhur.png", adzan_mobile_image[2] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-ashar.png", adzan_mobile_image[3] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-maghrib.png", adzan_mobile_image[4] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-isya.png",
  function() {
    "use strict";
    var e = function() {
      this.init()
    };
    e.prototype = {
      init: function() {
        var e = this || t;
        return e._counter = 0, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
      },
      volume: function(e) {
        var i = this || t;
        if (e = parseFloat(e), i.ctx || d(), void 0 !== e && 0 <= e && e <= 1) {
          if (i._volume = e, i._muted) return i;
          i.usingWebAudio && (i.masterGain.gain.value = e);
          for (var n = 0; n < i._howls.length; n++)
            if (!i._howls[n]._webAudio)
              for (var s = i._howls[n]._getSoundIds(), o = 0; o < s.length; o++) {
                var a = i._howls[n]._soundById(s[o]);
                a && a._node && (a._node.volume = a._volume * e)
              }
          return i
        }
        return i._volume
      },
      mute: function(e) {
        var i = this || t;
        i.ctx || d(), i._muted = e, i.usingWebAudio && (i.masterGain.gain.value = e ? 0 : i._volume);
        for (var n = 0; n < i._howls.length; n++)
          if (!i._howls[n]._webAudio)
            for (var s = i._howls[n]._getSoundIds(), o = 0; o < s.length; o++) {
              var a = i._howls[n]._soundById(s[o]);
              a && a._node && (a._node.muted = !!e || a._muted)
            }
        return i
      },
      unload: function() {
        for (var e = this || t, i = e._howls.length - 1; 0 <= i; i--) e._howls[i].unload();
        return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, d()), e
      },
      codecs: function(e) {
        return (this || t)._codecs[e.replace(/^x-/, "")]
      },
      _setup: function() {
        var e = this || t;
        if (e.state = e.ctx && e.ctx.state || "running", e._autoSuspend(), !e.usingWebAudio)
          if ("undefined" != typeof Audio) try {
            void 0 === (i = new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
          } catch (i) {
            e.noAudio = !0
          } else e.noAudio = !0;
        try {
          var i = new Audio;
          i.muted && (e.noAudio = !0)
        } catch (e) {}
        return e.noAudio || e._setupCodecs(), e
      },
      _setupCodecs: function() {
        var e = this || t,
          i = null;
        try {
          i = "undefined" != typeof Audio ? new Audio : null
        } catch (i) {
          return e
        }
        if (!i || "function" != typeof i.canPlayType) return e;
        var n = i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          s = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
          o = s && parseInt(s[0].split("/")[1], 10) < 33;
        return e._codecs = {
          mp3: !(o || !n && !i.canPlayType("audio/mp3;").replace(/^no$/, "")),
          mpeg: !!n,
          opus: !!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          oga: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
          aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!i.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(i.canPlayType("audio/x-mp4;") || i.canPlayType("audio/mp4;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
          webm: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
          dolby: !!i.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
          flac: !!(i.canPlayType("audio/x-flac;") || i.canPlayType("audio/flac;")).replace(/^no$/, "")
        }, e
      },
      _enableMobileAudio: function() {
        var e = this || t,
          i = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
          n = !!("ontouchend" in window || e._navigator && 0 < e._navigator.maxTouchPoints || e._navigator && 0 < e._navigator.msMaxTouchPoints);
        if (!e._mobileEnabled && e.ctx && (i || n)) {
          e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
          var s = function() {
            var t = e.ctx.createBufferSource();
            t.buffer = e._scratchBuffer, t.connect(e.ctx.destination), void 0 === t.start ? t.noteOn(0) : t.start(0), t.onended = function() {
              t.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchend", s, !0)
            }
          };
          return document.addEventListener("touchend", s, !0), e
        }
      },
      _autoSuspend: function() {
        var e = this;
        if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && t.usingWebAudio) {
          for (var i = 0; i < e._howls.length; i++)
            if (e._howls[i]._webAudio)
              for (var n = 0; n < e._howls[i]._sounds.length; n++)
                if (!e._howls[i]._sounds[n]._paused) return e;
          return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
            e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function() {
              e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
            }))
          }, 3e4), e
        }
      },
      _autoResume: function() {
        var e = this;
        if (e.ctx && void 0 !== e.ctx.resume && t.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.state = "resuming", e.ctx.resume().then(function() {
          e.state = "running";
          for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
        }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
      }
    };
    var t = new e,
      i = function(e) {
        e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
      };
    i.prototype = {
      init: function(e) {
        var i = this;
        return t.ctx || d(), i._autoplay = e.autoplay || !1, i._format = "string" != typeof e.format ? e.format : [e.format], i._html5 = e.html5 || !1, i._muted = e.mute || !1, i._loop = e.loop || !1, i._pool = e.pool || 5, i._preload = "boolean" != typeof e.preload || e.preload, i._rate = e.rate || 1, i._sprite = e.sprite || {}, i._src = "string" != typeof e.src ? e.src : [e.src], i._volume = void 0 !== e.volume ? e.volume : 1, i._duration = 0, i._state = "unloaded", i._sounds = [], i._endTimers = {}, i._queue = [], i._onend = e.onend ? [{
          fn: e.onend
        }] : [], i._onfade = e.onfade ? [{
          fn: e.onfade
        }] : [], i._onload = e.onload ? [{
          fn: e.onload
        }] : [], i._onloaderror = e.onloaderror ? [{
          fn: e.onloaderror
        }] : [], i._onpause = e.onpause ? [{
          fn: e.onpause
        }] : [], i._onplay = e.onplay ? [{
          fn: e.onplay
        }] : [], i._onstop = e.onstop ? [{
          fn: e.onstop
        }] : [], i._onmute = e.onmute ? [{
          fn: e.onmute
        }] : [], i._onvolume = e.onvolume ? [{
          fn: e.onvolume
        }] : [], i._onrate = e.onrate ? [{
          fn: e.onrate
        }] : [], i._onseek = e.onseek ? [{
          fn: e.onseek
        }] : [], i._onresume = [], i._webAudio = t.usingWebAudio && !i._html5, void 0 !== t.ctx && t.ctx && t.mobileAutoEnable && t._enableMobileAudio(), t._howls.push(i), i._autoplay && i._queue.push({
          event: "play",
          action: function() {
            i.play()
          }
        }), i._preload && i.load(), i
      },
      load: function() {
        var e = this,
          i = null;
        if (t.noAudio) e._emit("loaderror", null, "No audio support.");
        else {
          "string" == typeof e._src && (e._src = [e._src]);
          for (var s = 0; s < e._src.length; s++) {
            var a, r;
            if (e._format && e._format[s]) a = e._format[s];
            else {
              if ("string" != typeof(r = e._src[s])) {
                e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue
              }(a = /^data:audio\/([^;,]+);/i.exec(r)) || (a = /\.([^.]+)$/.exec(r.split("?", 1)[0])), a && (a = a[1].toLowerCase())
            }
            if (a || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), a && t.codecs(a)) {
              i = e._src[s];
              break
            }
          }
          if (i) return e._src = i, e._state = "loading", "https:" === window.location.protocol && "http:" === i.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new n(e), e._webAudio && o(e), e;
          e._emit("loaderror", null, "No codec support for selected audio sources.")
        }
      },
      play: function(e, i) {
        var n = this,
          s = null;
        if ("number" == typeof e) s = e, e = null;
        else {
          if ("string" == typeof e && "loaded" === n._state && !n._sprite[e]) return null;
          if (void 0 === e) {
            e = "__default";
            for (var o = 0, a = 0; a < n._sounds.length; a++) n._sounds[a]._paused && !n._sounds[a]._ended && (o++, s = n._sounds[a]._id);
            1 === o ? e = null : s = null
          }
        }
        var r = s ? n._soundById(s) : n._inactiveSound();
        if (!r) return null;
        if (s && !e && (e = r._sprite || "__default"), "loaded" !== n._state && !n._sprite[e]) return n._queue.push({
          event: "play",
          action: function() {
            n.play(n._soundById(r._id) ? r._id : void 0)
          }
        }), r._id;
        if (s && !r._paused) return i || setTimeout(function() {
          n._emit("play", r._id)
        }, 0), r._id;
        n._webAudio && t._autoResume();
        var l = Math.max(0, 0 < r._seek ? r._seek : n._sprite[e][0] / 1e3),
          d = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - l),
          c = 1e3 * d / Math.abs(r._rate);
        r._paused = !1, r._ended = !1, r._sprite = e, r._seek = l, r._start = n._sprite[e][0] / 1e3, r._stop = (n._sprite[e][0] + n._sprite[e][1]) / 1e3, r._loop = !(!r._loop && !n._sprite[e][2]);
        var u = r._node;
        if (n._webAudio) {
          var p = function() {
              n._refreshBuffer(r);
              var e = r._muted || n._muted ? 0 : r._volume;
              u.gain.setValueAtTime(e, t.ctx.currentTime), r._playStart = t.ctx.currentTime, void 0 === u.bufferSource.start ? r._loop ? u.bufferSource.noteGrainOn(0, l, 86400) : u.bufferSource.noteGrainOn(0, l, d) : r._loop ? u.bufferSource.start(0, l, 86400) : u.bufferSource.start(0, l, d), c !== 1 / 0 && (n._endTimers[r._id] = setTimeout(n._ended.bind(n, r), c)), i || setTimeout(function() {
                n._emit("play", r._id)
              }, 0)
            },
            h = "running" === t.state;
          if ("loaded" === n._state && h) p();
          else {
            var f = h || "loaded" !== n._state ? "load" : "resume";
            n.once(f, p, h ? r._id : null), n._clearTimer(r._id)
          }
        } else {
          var v = function() {
              u.currentTime = l, u.muted = r._muted || n._muted || t._muted || u.muted, u.volume = r._volume * t.volume(), u.playbackRate = r._rate, u.play(), c !== 1 / 0 && (n._endTimers[r._id] = setTimeout(n._ended.bind(n, r), c)), i || n._emit("play", r._id)
            },
            m = "loaded" === n._state && (window && window.ejecta || !u.readyState && t._navigator.isCocoonJS);
          if (4 === u.readyState || m) v();
          else {
            var g = function() {
              v(), u.removeEventListener(t._canPlayEvent, g, !1)
            };
            u.addEventListener(t._canPlayEvent, g, !1), n._clearTimer(r._id)
          }
        }
        return r._id
      },
      pause: function(e) {
        var t = this;
        if ("loaded" !== t._state) return t._queue.push({
          event: "pause",
          action: function() {
            t.pause(e)
          }
        }), t;
        for (var i = t._getSoundIds(e), n = 0; n < i.length; n++) {
          t._clearTimer(i[n]);
          var s = t._soundById(i[n]);
          if (s && !s._paused && (s._seek = t.seek(i[n]), s._rateSeek = 0, s._paused = !0, t._stopFade(i[n]), s._node))
            if (t._webAudio) {
              if (!s._node.bufferSource) return t;
              void 0 === s._node.bufferSource.stop ? s._node.bufferSource.noteOff(0) : s._node.bufferSource.stop(0), t._cleanBuffer(s._node)
            } else isNaN(s._node.duration) && s._node.duration !== 1 / 0 || s._node.pause();
          arguments[1] || t._emit("pause", s ? s._id : null)
        }
        return t
      },
      stop: function(e, t) {
        var i = this;
        if ("loaded" !== i._state) return i._queue.push({
          event: "stop",
          action: function() {
            i.stop(e)
          }
        }), i;
        for (var n = i._getSoundIds(e), s = 0; s < n.length; s++) {
          i._clearTimer(n[s]);
          var o = i._soundById(n[s]);
          if (o && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, i._stopFade(n[s]), o._node))
            if (i._webAudio) {
              if (!o._node.bufferSource) return t || i._emit("stop", o._id), i;
              void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), i._cleanBuffer(o._node)
            } else isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause());
          o && !t && i._emit("stop", o._id)
        }
        return i
      },
      mute: function(e, i) {
        var n = this;
        if ("loaded" !== n._state) return n._queue.push({
          event: "mute",
          action: function() {
            n.mute(e, i)
          }
        }), n;
        if (void 0 === i) {
          if ("boolean" != typeof e) return n._muted;
          n._muted = e
        }
        for (var s = n._getSoundIds(i), o = 0; o < s.length; o++) {
          var a = n._soundById(s[o]);
          a && (a._muted = e, n._webAudio && a._node ? a._node.gain.setValueAtTime(e ? 0 : a._volume, t.ctx.currentTime) : a._node && (a._node.muted = !!t._muted || e), n._emit("mute", a._id))
        }
        return n
      },
      volume: function() {
        var e, i, n, s = this,
          o = arguments;
        if (0 === o.length) return s._volume;
        if (1 === o.length || 2 === o.length && void 0 === o[1] ? 0 <= s._getSoundIds().indexOf(o[0]) ? i = parseInt(o[0], 10) : e = parseFloat(o[0]) : 2 <= o.length && (e = parseFloat(o[0]), i = parseInt(o[1], 10)), !(void 0 !== e && 0 <= e && e <= 1)) return (n = i ? s._soundById(i) : s._sounds[0]) ? n._volume : 0;
        if ("loaded" !== s._state) return s._queue.push({
          event: "volume",
          action: function() {
            s.volume.apply(s, o)
          }
        }), s;
        void 0 === i && (s._volume = e), i = s._getSoundIds(i);
        for (var a = 0; a < i.length; a++)(n = s._soundById(i[a])) && (n._volume = e, o[2] || s._stopFade(i[a]), s._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, t.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * t.volume()), s._emit("volume", n._id));
        return s
      },
      fade: function(e, i, n, s) {
        var o = this,
          a = Math.abs(e - i),
          r = i < e ? "out" : "in",
          l = a / .01,
          d = 0 < l ? n / l : n;
        if (d < 4 && (l = Math.ceil(l / (4 / d)), d = 4), "loaded" !== o._state) return o._queue.push({
          event: "fade",
          action: function() {
            o.fade(e, i, n, s)
          }
        }), o;
        o.volume(e, s);
        for (var c = o._getSoundIds(s), u = 0; u < c.length; u++) {
          var p = o._soundById(c[u]);
          if (p) {
            if (s || o._stopFade(c[u]), o._webAudio && !p._muted) {
              var h = t.ctx.currentTime,
                f = h + n / 1e3;
              p._volume = e, p._node.gain.setValueAtTime(e, h), p._node.gain.linearRampToValueAtTime(i, f)
            }
            var v = e;
            p._interval = setInterval(function(t, n) {
              0 < l && (v += "in" === r ? .01 : -.01), v = Math.max(0, v), v = Math.min(1, v), v = Math.round(100 * v) / 100, o._webAudio ? (void 0 === s && (o._volume = v), n._volume = v) : o.volume(v, t, !0), (i < e && v <= i || e < i && i <= v) && (clearInterval(n._interval), n._interval = null, o.volume(i, t), o._emit("fade", t))
            }.bind(o, c[u], p), d)
          }
        }
        return o
      },
      _stopFade: function(e) {
        var i = this._soundById(e);
        return i && i._interval && (this._webAudio && i._node.gain.cancelScheduledValues(t.ctx.currentTime), clearInterval(i._interval), i._interval = null, this._emit("fade", e)), this
      },
      loop: function() {
        var e, t, i, n = arguments;
        if (0 === n.length) return this._loop;
        if (1 === n.length) {
          if ("boolean" != typeof n[0]) return !!(i = this._soundById(parseInt(n[0], 10))) && i._loop;
          e = n[0], this._loop = e
        } else 2 === n.length && (e = n[0], t = parseInt(n[1], 10));
        for (var s = this._getSoundIds(t), o = 0; o < s.length; o++)(i = this._soundById(s[o])) && (i._loop = e, this._webAudio && i._node && i._node.bufferSource && (i._node.bufferSource.loop = e) && (i._node.bufferSource.loopStart = i._start || 0, i._node.bufferSource.loopEnd = i._stop));
        return this
      },
      rate: function() {
        var e, i, n, s = this,
          o = arguments;
        if (0 === o.length ? i = s._sounds[0]._id : 1 === o.length ? 0 <= s._getSoundIds().indexOf(o[0]) ? i = parseInt(o[0], 10) : e = parseFloat(o[0]) : 2 === o.length && (e = parseFloat(o[0]), i = parseInt(o[1], 10)), "number" != typeof e) return (n = s._soundById(i)) ? n._rate : s._rate;
        if ("loaded" !== s._state) return s._queue.push({
          event: "rate",
          action: function() {
            s.rate.apply(s, o)
          }
        }), s;
        void 0 === i && (s._rate = e), i = s._getSoundIds(i);
        for (var a = 0; a < i.length; a++)
          if (n = s._soundById(i[a])) {
            n._rateSeek = s.seek(i[a]), n._playStart = s._webAudio ? t.ctx.currentTime : n._playStart, n._rate = e, s._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.value = e : n._node && (n._node.playbackRate = e);
            var r = s.seek(i[a]),
              l = 1e3 * ((s._sprite[n._sprite][0] + s._sprite[n._sprite][1]) / 1e3 - r) / Math.abs(n._rate);
            !s._endTimers[i[a]] && n._paused || (s._clearTimer(i[a]), s._endTimers[i[a]] = setTimeout(s._ended.bind(s, n), l)), s._emit("rate", n._id)
          } return s
      },
      seek: function() {
        var e, i, n = this,
          s = arguments;
        if (0 === s.length ? i = n._sounds[0]._id : 1 === s.length ? 0 <= n._getSoundIds().indexOf(s[0]) ? i = parseInt(s[0], 10) : (i = n._sounds[0]._id, e = parseFloat(s[0])) : 2 === s.length && (e = parseFloat(s[0]), i = parseInt(s[1], 10)), void 0 === i) return n;
        if ("loaded" !== n._state) return n._queue.push({
          event: "seek",
          action: function() {
            n.seek.apply(n, s)
          }
        }), n;
        var o = n._soundById(i);
        if (o) {
          if (!("number" == typeof e && 0 <= e)) {
            if (n._webAudio) {
              var a = n.playing(i) ? t.ctx.currentTime - o._playStart : 0,
                r = o._rateSeek ? o._rateSeek - o._seek : 0;
              return o._seek + (r + a * Math.abs(o._rate))
            }
            return o._node.currentTime
          }
          var l = n.playing(i);
          l && n.pause(i, !0), o._seek = e, o._ended = !1, n._clearTimer(i), l && n.play(i, !0), !n._webAudio && o._node && (o._node.currentTime = e), n._emit("seek", i)
        }
        return n
      },
      playing: function(e) {
        if ("number" == typeof e) {
          var t = this._soundById(e);
          return !!t && !t._paused
        }
        for (var i = 0; i < this._sounds.length; i++)
          if (!this._sounds[i]._paused) return !0;
        return !1
      },
      duration: function(e) {
        var t = this._duration,
          i = this._soundById(e);
        return i && (t = this._sprite[i._sprite][1] / 1e3), t
      },
      state: function() {
        return this._state
      },
      unload: function() {
        for (var e = this, i = e._sounds, n = 0; n < i.length; n++) {
          i[n]._paused || e.stop(i[n]._id), e._webAudio || (i[n]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA", i[n]._node.removeEventListener("error", i[n]._errorFn, !1), i[n]._node.removeEventListener(t._canPlayEvent, i[n]._loadFn, !1)), delete i[n]._node, e._clearTimer(i[n]._id);
          var o = t._howls.indexOf(e);
          0 <= o && t._howls.splice(o, 1)
        }
        var a = !0;
        for (n = 0; n < t._howls.length; n++)
          if (t._howls[n]._src === e._src) {
            a = !1;
            break
          } return s && a && delete s[e._src], t.noAudio = !1, e._state = "unloaded", e._sounds = [], null
      },
      on: function(e, t, i, n) {
        var s = this["_on" + e];
        return "function" == typeof t && s.push(n ? {
          id: i,
          fn: t,
          once: n
        } : {
          id: i,
          fn: t
        }), this
      },
      off: function(e, t, i) {
        var n = this["_on" + e],
          s = 0;
        if (t) {
          for (s = 0; s < n.length; s++)
            if (t === n[s].fn && i === n[s].id) {
              n.splice(s, 1);
              break
            }
        } else if (e) this["_on" + e] = [];
        else {
          var o = Object.keys(this);
          for (s = 0; s < o.length; s++) 0 === o[s].indexOf("_on") && Array.isArray(this[o[s]]) && (this[o[s]] = [])
        }
        return this
      },
      once: function(e, t, i) {
        return this.on(e, t, i, 1), this
      },
      _emit: function(e, t, i) {
        for (var n = this["_on" + e], s = n.length - 1; 0 <= s; s--) n[s].id && n[s].id !== t && "load" !== e || (setTimeout(function(e) {
          e.call(this, t, i)
        }.bind(this, n[s].fn), 0), n[s].once && this.off(e, n[s].fn, n[s].id));
        return this
      },
      _loadQueue: function() {
        var e = this;
        if (0 < e._queue.length) {
          var t = e._queue[0];
          e.once(t.event, function() {
            e._queue.shift(), e._loadQueue()
          }), t.action()
        }
        return e
      },
      _ended: function(e) {
        var i = this,
          n = e._sprite,
          s = !(!e._loop && !i._sprite[n][2]);
        if (i._emit("end", e._id), !i._webAudio && s && i.stop(e._id, !0).play(e._id), i._webAudio && s) {
          i._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = t.ctx.currentTime;
          var o = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
          i._endTimers[e._id] = setTimeout(i._ended.bind(i, e), o)
        }
        return i._webAudio && !s && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, i._clearTimer(e._id), i._cleanBuffer(e._node), t._autoSuspend()), i._webAudio || s || i.stop(e._id), i
      },
      _clearTimer: function(e) {
        return this._endTimers[e] && (clearTimeout(this._endTimers[e]), delete this._endTimers[e]), this
      },
      _soundById: function(e) {
        for (var t = 0; t < this._sounds.length; t++)
          if (e === this._sounds[t]._id) return this._sounds[t];
        return null
      },
      _inactiveSound: function() {
        this._drain();
        for (var e = 0; e < this._sounds.length; e++)
          if (this._sounds[e]._ended) return this._sounds[e].reset();
        return new n(this)
      },
      _drain: function() {
        var e = this,
          t = e._pool,
          i = 0,
          n = 0;
        if (!(e._sounds.length < t)) {
          for (n = 0; n < e._sounds.length; n++) e._sounds[n]._ended && i++;
          for (n = e._sounds.length - 1; 0 <= n; n--) {
            if (i <= t) return;
            e._sounds[n]._ended && (e._webAudio && e._sounds[n]._node && e._sounds[n]._node.disconnect(0), e._sounds.splice(n, 1), i--)
          }
        }
      },
      _getSoundIds: function(e) {
        if (void 0 === e) {
          for (var t = [], i = 0; i < this._sounds.length; i++) t.push(this._sounds[i]._id);
          return t
        }
        return [e]
      },
      _refreshBuffer: function(e) {
        return e._node.bufferSource = t.ctx.createBufferSource(), e._node.bufferSource.buffer = s[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop), e._node.bufferSource.playbackRate.value = e._rate, this
      },
      _cleanBuffer: function(e) {
        if (this._scratchBuffer) {
          e.bufferSource.onended = null, e.bufferSource.disconnect(0);
          try {
            e.bufferSource.buffer = this._scratchBuffer
          } catch (e) {}
        }
        return e.bufferSource = null, this
      }
    };
    var n = function(e) {
      this._parent = e, this.init()
    };
    n.prototype = {
      init: function() {
        var e = this,
          i = e._parent;
        return e._muted = i._muted, e._loop = i._loop, e._volume = i._volume, e._muted = i._muted, e._rate = i._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++t._counter, i._sounds.push(e), e.create(), e
      },
      create: function() {
        var e = this,
          i = e._parent,
          n = t._muted || e._muted || e._parent._muted ? 0 : e._volume;
        return i._webAudio ? (e._node = void 0 === t.ctx.createGain ? t.ctx.createGainNode() : t.ctx.createGain(), e._node.gain.setValueAtTime(n, t.ctx.currentTime), e._node.paused = !0, e._node.connect(t.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(t._canPlayEvent, e._loadFn, !1), e._node.src = i._src, e._node.preload = "auto", e._node.volume = n * t.volume(), e._node.load()), e
      },
      reset: function() {
        var e = this,
          i = e._parent;
        return e._muted = i._muted, e._loop = i._loop, e._volume = i._volume, e._muted = i._muted, e._rate = i._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++t._counter, e
      },
      _errorListener: function() {
        this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorListener, !1)
      },
      _loadListener: function() {
        var e = this._parent;
        e._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
          __default: [0, 1e3 * e._duration]
        }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), this._node.removeEventListener(t._canPlayEvent, this._loadFn, !1)
      }
    };
    var s = {},
      o = function(e) {
        var t = e._src;
        if (s[t]) return e._duration = s[t].duration, void l(e);
        if (/^data:[^;]+;base64,/.test(t)) {
          for (var i = atob(t.split(",")[1]), n = new Uint8Array(i.length), o = 0; o < i.length; ++o) n[o] = i.charCodeAt(o);
          r(n.buffer, e)
        } else {
          var d = new XMLHttpRequest;
          d.open("GET", t, !0), d.responseType = "arraybuffer", d.onload = function() {
            var t = (d.status + "")[0];
            "0" === t || "2" === t || "3" === t ? r(d.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + d.status + ".")
          }, d.onerror = function() {
            e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete s[t], e.load())
          }, a(d)
        }
      },
      a = function(e) {
        try {
          e.send()
        } catch (t) {
          e.onerror()
        }
      },
      r = function(e, i) {
        t.ctx.decodeAudioData(e, function(e) {
          e && 0 < i._sounds.length && (s[i._src] = e, l(i, e))
        }, function() {
          i._emit("loaderror", null, "Decoding audio data failed.")
        })
      },
      l = function(e, t) {
        t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
          __default: [0, 1e3 * e._duration]
        }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
      },
      d = function() {
        try {
          "undefined" != typeof AudioContext ? t.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? t.ctx = new webkitAudioContext : t.usingWebAudio = !1
        } catch (e) {
          t.usingWebAudio = !1
        }
        var e = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform),
          i = t._navigator && t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          n = i ? parseInt(i[1], 10) : null;
        if (e && n && n < 9) {
          var s = /safari/.test(t._navigator && t._navigator.userAgent.toLowerCase());
          (t._navigator && t._navigator.standalone && !s || t._navigator && !t._navigator.standalone && !s) && (t.usingWebAudio = !1)
        }
        t.usingWebAudio && (t.masterGain = void 0 === t.ctx.createGain ? t.ctx.createGainNode() : t.ctx.createGain(), t.masterGain.gain.value = 1, t.masterGain.connect(t.ctx.destination)), t._setup()
      };
    "function" == typeof define && define.amd && define([], function() {
      return {
        Howler: t,
        Howl: i
      }
    }), "undefined" != typeof exports && (exports.Howler = t, exports.Howl = i), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = t, window.Howl = i, window.Sound = n) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = t, global.Howl = i, global.Sound = n)
  }(), $(".opennavbarbtn").click(function(e) {
    $(".overlay").show(), $("body").css({
      overflow: "hidden",
      height: "100%"
    }), $(".navbarmenu").hasClass("isDown") ? ($(".navbarmenu").animate({
      left: "-100%"
    }, 500), $(".navbarmenu").removeClass("isDown"), $(".hopopmenu").fadeOut("fast"), $(".searchbar").animate({
      right: "-100%"
    }, 500), $(".searchbar2").animate({
      "margin-left": "100%"
    }, 500), $(".hopop").animate({
      right: "-100%"
    }, 500), $("body").css({
      overflow: "visible",
      height: "auto"
    })) : ($(".navbarmenu").animate({
      left: "0"
    }, 500), $(".hopopmenu").fadeIn("fast"), $(".navbarmenu").addClass("isDown"), $(".searchbar").animate({
      right: "-100%"
    }, 500), $(".searchbar2").animate({
      "margin-left": "100%"
    }, 500), $(".hopop").animate({
      right: "-100%"
    }, 500), $(".searchbar").removeClass("show")), e.preventDefault()
  }), $(".searchbtn").click(function(e) {
    $("body").css({
      overflow: "visible",
      height: "100%"
    }), $(".searchbar").hasClass("show") ? ($(".searchbar").animate({
      right: "-100%"
    }, 500), $(".searchbar2").animate({
      "margin-left": "100%"
    }, 500), $(".hopop").animate({
      right: "-100%"
    }, 500), $(".searchbar").removeClass("show"), $("body").css({
      overflow: "visible",
      height: "auto"
    }), $(".adssearch").css({
      position: "absolute"
    }, 5e3)) : ($(".searchbar").animate({
      right: "0"
    }, 500), $(".searchbar2").animate({
      "margin-left": "0"
    }, 500), $(".hopop").animate({
      right: "0"
    }, 500), $(".searchbar").addClass("show"), $("body").css({
      overflow: "hidden",
      height: "100%"
    }), $(".navbarmenu").animate({
      left: "-100%"
    }, 500), $(".navbarmenu").removeClass("isDown"), $(".hopopmenu").fadeOut("fast"), $(".adssearch").css({
      position: "fixed"
    }, 5e4)), e.preventDefault()
  }), $(".hopopmenu, .navbarmenu__close").click(function() {
    $(".navbarmenu").animate({
      left: "-100%"
    }, 500), $(".navbarmenu").removeClass("isDown"), $(".hopopmenu").fadeOut("fast"), $(".searchbar").animate({
      right: "-100%"
    }, 500), $(".searchbar2").animate({
      "margin-left": "100%"
    }, 500), $(".hopop").animate({
      right: "-100%"
    }, 500), $("body, html").css({
      overflow: "",
      height: ""
    })
  }), $(".adsheader .close").click(function() {
    $(".adsheader").slideToggle("fast")
  }), $(".adsheader2 .close").click(function() {
    $(".adsheader2").slideToggle("fast")
  }), $(".adssearch .close").click(function() {
    $(".adssearch").slideToggle("fast")
  }), $(".notif .close").click(function() {
    $(".notif").slideToggle("fast")
  });
var allPanels = $("#menu ul li ul").hide(),
  wh = $(window).outerHeight() - 89,
  h = $("#head").outerHeight(),
  s = $(".search").outerHeight();
if ($(".heddermenu").data("size", "big"), $("a.kerat").click(function(e) {
    $(this).siblings("ul").slideToggle(), $(this).hasClass("fa-angle-down") ? ($(this).removeClass("fa-angle-down"), $(this).addClass("fa-angle-up")) : ($(this).removeClass("fa-angle-up"), $(this).addClass("fa-angle-down")), e.preventDefault()
  }), $(".exp-ads").click(function() {
    $(this).siblings(".exist-ads").slideToggle()
  }), $("span.caption").click(function() {
    $(".detailcaption").slideToggle()
  }), $(".listto").jscroll({
    autoTrigger: !1,
    loadingHtml: '<div class="loader" style="text-align: center;"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>'
  }), $(".morecomment").jscroll({
    autoTrigger: !1,
    loadingHtml: '<div class="loader" style="text-align: center;"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>'
  }), $("#area").jscroll({
    autoTrigger: !1,
    loadingHtml: '<div class="loader"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>',
    nextSelector: "a.btn-lmorex:last"
  }), $(document).on("click", ".minus", function() {
    $(this).removeClass("inactive"), $(".normal").removeClass("active"), $(".plusx").removeClass("active"), $(".normal").addClass("inactive"), $(".plusx").addClass("inactive"), $(this).addClass("active"), $(".description").css({
      "font-size": "15px",
      "line-height": "23px"
    })
  }), $(document).on("click", ".normal", function() {
    $(this).removeClass("inactive"), $(".minus").removeClass("active"), $(".plusx").removeClass("active"), $(".minus").addClass("inactive"), $(".plusx").addClass("inactive"), $(this).addClass("active"), $(".description").css({
      "font-size": "16px",
      "line-height": "26px"
    })
  }), $(document).on("click", ".plusx", function() {
    $(this).removeClass("inactive"), $(".minus").removeClass("active"), $(".normal").removeClass("active"), $(".minus").addClass("inactive"), $(".normal").addClass("inactive"), $(this).addClass("active"), $(".description").css({
      "font-size": "20px",
      "line-height": "29px"
    })
  }), $(".he .min").click(function() {
    $(".he .downsosm").slideToggle(), $(".he .plus").show(0), $(".he .min").hide(0)
  }), $(".he .plus").click(function() {
    $(".he .downsosm").slideToggle(), $(".he .min").show(0), $(".he .plus").hide(0)
  }), $(".fo .min").click(function() {
    $(".fo .downsosm").slideToggle(), $(".fo .plus").show(0), $(".fo .min").hide(0)
  }), $(".fo .plus").click(function() {
    $(".fo .downsosm").slideToggle(), $(".fo .min").show(0), $(".fo .plus").hide(0)
  }), $(".top").length) {
  var offsetTop = 300;

  function scroll_top() {
    scrollClass(".top", "show", offsetTop)
  }

  function scrollClass(e, t, i) {
    i <= $(window).scrollTop() ? $(e).addClass(t) : $(e).removeClass(t)
  }
  $(window).on("scroll", scroll_top), $(".top").on("click", function(e) {
    e.preventDefault(), $("html,body").animate({
      scrollTop: 0
    }, 700)
  })
}
$(".sisa").html(250), $(".isikomen").keyup(function() {
  var e = 250 - $(".isikomen").val().length;
  $(".sisa").html(e)
}), $(".more").each(function() {
  var e = $(this).html();
  if (72 < e.length) {
    var t = e.substr(0, 72) + '<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>' + e.substr(72, e.length - 72) + '</span>&nbsp;&nbsp;<a href="" class="morelink">More</a></span>';
    $(this).html(t)
  }
}), $(".morelink").click(function() {
  return $(this).hasClass("less") ? ($(this).removeClass("less"), $(this).html("More")) : ($(this).addClass("less"), $(this).html("Close")), $(this).parent().prev().toggle(), $(this).prev().toggle(), !1
}), $(".btntuliskomentar").click(function() {
  $(".comm").slideToggle(), $("textarea").focus()
}), $("a.linkname").click(function() {
  return $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, 1e3), $(".comm").slideDown(), $("textarea").focus(), !1
}), $("#submitt").click(function() {
  $(".bgpop").addClass("muncul"), $(".popup").addClass("muncul")
}), $(".closepop").click(function() {
  $(".bgpop").removeClass("muncul"), $(".popup").removeClass("muncul")
}), $(".bgpop.muncul").click(function() {
  $(".bgpop").removeClass("muncul"), $(".popup").removeClass("muncul")
});
var e = 15;
if (s = setInterval(function() {
    if (--e <= 0) return clearInterval(s), $(".bgpop").removeClass("muncul"), void $(".popup").removeClass("muncul");
    $(".timer").html(e)
  }, 1e3), $(".btn-cls").click(function(e) {
    $(".ads-bottom-fixed").animate({
      bottom: -90
    }, 700), $(".ads-bottom-fixed2").animate({
      bottom: 0
    }, 700), e.preventDefault()
  }), $(".ads-bottom-fixed2 .btn-cls").click(function(e) {
    $(".ads-bottom-fixed2").animate({
      bottom: -90
    }, 700), e.preventDefault()
  }), $(".popupfullscreen .close").click(function(e) {
    $(".popupfullscreen").addClass("hide"), e.preventDefault()
  }), $(".klakson").on("click", ".plus", function(e) {
    $(".klakson").hasClass("click") ? ($(".klakson").removeClass("click"), $(".tombl").animate({
      height: 0
    }, 500)) : ($(".klakson").addClass("click", 6e3), $(".tombl").animate({
      height: "240px"
    }, 500)), e.preventDefault()
  }), $(window).scroll(function(e) {
    var t = "fixed" == $(".fixedsosmed").css("position"),
      i = "none" == $(".adsheader").css("display");
    390 < $(this).scrollTop() && !t && !i && $(".fixedsosmed").css({
      position: "fixed",
      top: "83px",
      "background-color": "#FFFFFF",
      "padding-top": "6px",
      "z-index": "9999"
    }), 390 < $(this).scrollTop() && !t && i && $(".fixedsosmed").css({
      position: "fixed",
      top: "33px",
      "background-color": "#FFFFFF",
      "padding-top": "6px",
      "z-index": "9999"
    }), $(this).scrollTop() < 390 && t && $(".fixedsosmed").css({
      position: "static",
      top: "0px"
    })
  }), $(".opennavbarbtn-sticky").click(function(e) {
    $(".navbarmenu").hasClass("isDown") ? ($("html, body").css({
      overflow: ""
    }), $(".navbarmenu").animate({
      left: "-100%"
    }, 500), $(".navbarmenu").removeClass("isDown"), $(".hopopmenu").fadeOut("fast"), $(".hopopmenu").css({
      display: "none"
    })) : ($("html, body").css({
      overflow: "hidden"
    }), $(".navbarmenu").animate({
      left: "0"
    }, 500), $(".navbarmenu").addClass("isDown"), $(".hopopmenu").css({
      display: "block"
    })), e.preventDefault()
  }), $(".overlaysticky").click(function(e) {
    $(".navbarsticky").animate({
      left: "-100%"
    }, 500), $("html, body").css({
      overflow: ""
    }), $(".overlaysticky").css({
      display: "none"
    }), e.preventDefault()
  }), $(".wraptops-menu").length) {
  var navTop = $(".cnt-menu").offset().top + 40;

  function scroll_header() {
    scrollClass(".wraptops-menu", "sticky", navTop)
  }

  function scrollClass(e, t, i) {
    i <= $(window).scrollTop() ? $(e).addClass(t) : $(e).removeClass(t)
  }
  $(window).on("scroll", scroll_header)
}
$(".btn-cls").click(function() {
  $(".ads-bottom-fixed").hide()
}), $(".searchbtn").click(function() {
  $.get("http://client.okezone.com/mobile_searchlog/log.php", function(e) {})
});
var swiper = new Swiper(".swiper-container--page", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination",
      clickable: !0
    }
  }),
  swiperNo = new Swiper(".swiper-container--nopage", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination2",
      clickable: !0
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  }),
  swiperTrending = new Swiper(".swiper-container--trending", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination3",
      clickable: !0
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  }),
  swiperEditor = new Swiper(".swiper-container--editor", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination4",
      clickable: !0
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  });

function swiperRecommendation() {
  new Swiper(".swiper-container--rekomendasi", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination__counter",
      type: "fraction"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  })
}
swiperRecommendation(),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["exports"], t) : "undefined" != typeof exports ? t(exports) : t(e.dragscroll = {})
  }(this, function(e) {
    var t, i, n = window,
      s = document,
      o = "EventListener",
      a = "add" + o,
      r = "remove" + o,
      l = [],
      d = function(e, o) {
        for (e = 0; e < l.length;)(o = (o = l[e++]).container || o)[r]("mousedown", o.md, 0), n[r]("mouseup", o.mu, 0), n[r]("mousemove", o.mm, 0);
        for (l = [].slice.call(s.getElementsByClassName("dragscroll")), e = 0; e < l.length;) ! function(e, o, r, l, d, c) {
          (c = e.container || e)[a]("mousedown", c.md = function(t) {
            e.hasAttribute("nochilddrag") && s.elementFromPoint(t.pageX, t.pageY) != c || (l = 1, o = t.clientX, r = t.clientY, t.preventDefault())
          }, 0), n[a]("mouseup", c.mu = function() {
            l = 0
          }, 0), n[a]("mousemove", c.mm = function(n) {
            l && ((d = e.scroller || e).scrollLeft -= t = -o + (o = n.clientX), d.scrollTop -= i = -r + (r = n.clientY), e == s.body && ((d = s.documentElement).scrollLeft -= t, d.scrollTop -= i))
          }, 0)
        }(l[e++])
      };
    "complete" == s.readyState ? d() : n[a]("load", d, 0), e.reset = d
  });
var SETTINGS = {
  navBarTravelling: !1,
  navBarTravelDirection: "",
  navBarTravelDistance: 150
};
document.documentElement.classList.remove("no-js"), document.documentElement.classList.add("js");
var pnAdvancerLeft = document.getElementById("arr-left"),
  pnAdvancerRight = document.getElementById("arr-right"),
  pnIndicator = document.getElementById("OkzIndicator"),
  pnProductNav = document.getElementById("OkzNav"),
  pnProductNavContents = document.getElementById("OkzNavContents");
pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
var last_known_scroll_position = 0,
  ticking = !1;

function doSomething(e) {
  pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav))
}

function moveIndicator(e, t) {
  var i = e.getBoundingClientRect(),
    n = pnProductNavContents.getBoundingClientRect().left,
    s = i.left - n,
    o = pnProductNavContents.scrollLeft;
  pnIndicator.style.transform = "translateX(" + (s + o) + "px) scaleX(" + .01 * i.width + ")", t && (pnIndicator.style.backgroundColor = t)
}

function determineOverflow(e, t) {
  var i = t.getBoundingClientRect(),
    n = Math.floor(i.right),
    s = Math.floor(i.left),
    o = e.getBoundingClientRect(),
    a = Math.floor(o.right),
    r = Math.floor(o.left);
  return r < s && n < a ? "both" : r < s ? "left" : n < a ? "right" : "none"
}
if (pnProductNav.addEventListener("scroll", function() {
    last_known_scroll_position = window.scrollY, ticking || window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position), ticking = !1
    }), ticking = !0
  }), pnAdvancerLeft && pnAdvancerLeft.addEventListener("click", function() {
    if (!0 !== SETTINGS.navBarTravelling) {
      if ("left" === determineOverflow(pnProductNavContents, pnProductNav) || "both" === determineOverflow(pnProductNavContents, pnProductNav)) {
        var e = pnProductNav.scrollLeft;
        e < 2 * SETTINGS.navBarTravelDistance ? pnProductNavContents.style.transform = "translateX(" + e + "px)" : pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)", pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition"), SETTINGS.navBarTravelDirection = "left", SETTINGS.navBarTravelling = !0
      }
      pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav))
    }
  }), pnAdvancerRight && pnAdvancerRight.addEventListener("click", function() {
    if (!0 !== SETTINGS.navBarTravelling) {
      if ("right" === determineOverflow(pnProductNavContents, pnProductNav) || "both" === determineOverflow(pnProductNavContents, pnProductNav)) {
        var e = pnProductNavContents.getBoundingClientRect().right,
          t = pnProductNav.getBoundingClientRect().right,
          i = Math.floor(e - t);
        i < 2 * SETTINGS.navBarTravelDistance ? pnProductNavContents.style.transform = "translateX(-" + i + "px)" : pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)", pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition"), SETTINGS.navBarTravelDirection = "right", SETTINGS.navBarTravelling = !0
      }
      pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav))
    }
  }), pnProductNavContents.addEventListener("transitionend", function() {
    var e = window.getComputedStyle(pnProductNavContents, null),
      t = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("transform"),
      i = Math.abs(parseInt(t.split(",")[4]) || 0);
    pnProductNavContents.style.transform = "none", pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition"), "left" === SETTINGS.navBarTravelDirection ? pnProductNav.scrollLeft = pnProductNav.scrollLeft - i : pnProductNav.scrollLeft = pnProductNav.scrollLeft + i, SETTINGS.navBarTravelling = !1
  }, !1), $(".mheadlinemore").on("click", function() {
    $(this).prev(), "More" == $(this).text() ? $(this).text("Less") : $(this).text("More")
  }), $(".btn--hide").on("click", function() {
    $(this).parent().hide()
  }), $(".title-onstick").length && $(".title-onstick").stick_in_parent({
    parent: "[data-sticky_parent]",
    offset_top: 50,
    recalc_every: 10,
    inner_scrolling: !1
  }), $(document).click(function() {
    $(".prayer-link").removeClass("prayer-link--active")
  }), $(document).on("click", ".prayer-link", function(e) {
    e.preventDefault(), $(this).toggleClass("prayer-link--active"), e.stopPropagation()
  }), $(".prayer-head__slider").length) var swiperPrayer = new Swiper(".prayer-head__slider", {
  autoplay: {
    delay: 3e3
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".prayer-head__next"
  }
});
if ($(".swiper-pilkada").length) var pilkadaSwiper = new Swiper(".swiper-pilkada", {
  slidesPerView: "auto",
  autoHeight: !0,
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: !0
  }
});
$(document).ready(function() {
  $(".newfloating").fadeIn(), $(".popup iframe").fadeIn(), $(".bgpopup").fadeIn(), $(".closepop").fadeIn(), $(".closepop").bind("click", function() {
    $(parent.document).find(".floating-popup").remove(), $(parent.document).find(".floating-popup1").remove(), $(parent.document).find(".newfloating").remove()
  }), $(".bgpopup.kelos").bind("click", function() {
    $(parent.document).find(".floating-popup").remove(), $(parent.document).find(".floating-popup1").remove(), $(parent.document).find(".newfloating").remove()
  });
  var e = 20,
    t = setInterval(function() {
      if (--e <= 0) return clearInterval(t), void $(parent.document).find(".floating-popup").remove()
    }, 1e3)
}), "undefined" != typeof utm_pushtrack ? null !== utm_pushtrack && $.ajax({
  url: "https://webpush.okezone.com/administrator/auth_push/auth_utm",
  type: "POST",
  data: {
    tracking: utm_pushtrack
  },
  success: function(e) {
    console.log(e)
  }
}) : console.log("No UTM");
var TabBlock = {
  s: {
    animLen: 200
  },
  initY: function() {
    TabBlock.bindUIActions(), TabBlock.hideInactive()
  },
  bindUIActions: function() {
    $(".tabBlock-tabs").on("click", ".tabBlock-tab", function() {
      TabBlock.switchTab($(this))
    })
  },
  hideInactive: function() {
    var e = $(".tabBlock");
    e.each(function(t) {
      var i = $(e[t]),
        n = i.find(".tabBlock-pane"),
        s = i.find(".tabBlock-tab.is-active");
      n.hide(), $(n[s.index()]).show()
    })
  },
  switchTab: function(e) {
    var t = e.closest(".tabBlock");
    e.hasClass("is-active") || (e.siblings().removeClass("is-active"), e.addClass("is-active"), TabBlock.showPane(e.index(), t))
  },
  showPane: function(e, t) {
    var i = t.find(".tabBlock-pane");
    i.slideUp(TabBlock.s.animLen), $(i[e]).slideDown(TabBlock.s.animLen)
  }
};
$(function() {
    TabBlock.initY()
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
  }(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
      var t = 0;
      return function(i, n) {
        var s, o = this;
        o.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(i),
          appendDots: e(i),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(t, i) {
            return e('<button type="button" />').text(i + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, o.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, s = e(i).data("slick") || {}, o.options = e.extend({}, o.defaults, n, s), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
      }
    }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
      var s = this;
      if ("boolean" == typeof i) n = i, i = null;
      else if (i < 0 || i >= s.slideCount) return !1;
      s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? e(t).appendTo(s.$slideTrack) : n ? e(t).insertBefore(s.$slides.eq(i)) : e(t).insertAfter(s.$slides.eq(i)) : !0 === n ? e(t).prependTo(s.$slideTrack) : e(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(t, i) {
        e(i).attr("data-slick-index", t)
      }), s.$slidesCache = s.$slides, s.reinit()
    }, t.prototype.animateHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
          height: t
        }, e.options.speed)
      }
    }, t.prototype.animateSlide = function(t, i) {
      var n = {},
        s = this;
      s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (t = -t), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
        left: t
      }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
        top: t
      }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), e({
        animStart: s.currentLeft
      }).animate({
        animStart: t
      }, {
        duration: s.options.speed,
        easing: s.options.easing,
        step: function(e) {
          e = Math.ceil(e), !1 === s.options.vertical ? (n[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(n))
        },
        complete: function() {
          i && i.call()
        }
      })) : (s.applyTransition(), t = Math.ceil(t), !1 === s.options.vertical ? n[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() {
        s.disableTransition(), i.call()
      }, s.options.speed))
    }, t.prototype.getNavTarget = function() {
      var t = this.options.asNavFor;
      return t && null !== t && (t = e(t).not(this.$slider)), t
    }, t.prototype.asNavFor = function(t) {
      var i = this.getNavTarget();
      null !== i && "object" == typeof i && i.each(function() {
        var i = e(this).slick("getSlick");
        i.unslicked || i.slideHandler(t, !0)
      })
    }, t.prototype.applyTransition = function(e) {
      var t = this,
        i = {};
      !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
      var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
      var t = this;
      !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, t.prototype.buildDots = function() {
      var t, i, n = this;
      if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
        for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
        n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
      }
    }, t.prototype.buildOut = function() {
      var t = this;
      t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
        e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
      }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
      var e, t, i, n, s, o, a, r = this;
      if (n = document.createDocumentFragment(), o = r.$slider.children(), r.options.rows > 0) {
        for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(o.length / a), e = 0; e < s; e++) {
          var l = document.createElement("div");
          for (t = 0; t < r.options.rows; t++) {
            var d = document.createElement("div");
            for (i = 0; i < r.options.slidesPerRow; i++) {
              var c = e * a + (t * r.options.slidesPerRow + i);
              o.get(c) && d.appendChild(o.get(c))
            }
            l.appendChild(d)
          }
          n.appendChild(l)
        }
        r.$slider.empty().append(n), r.$slider.children().children().children().css({
          width: 100 / r.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, t.prototype.checkResponsive = function(t, i) {
      var n, s, o, a = this,
        r = !1,
        l = a.$slider.width(),
        d = window.innerWidth || e(window).width();
      if ("window" === a.respondTo ? o = d : "slider" === a.respondTo ? o = l : "min" === a.respondTo && (o = Math.min(d, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
        for (n in s = null, a.breakpoints) a.breakpoints.hasOwnProperty(n) && (!1 === a.originalSettings.mobileFirst ? o < a.breakpoints[n] && (s = a.breakpoints[n]) : o > a.breakpoints[n] && (s = a.breakpoints[n]));
        null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || i) && (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), r = s) : (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t), r = s), t || !1 === r || a.$slider.trigger("breakpoint", [a, r])
      }
    }, t.prototype.changeSlide = function(t, i) {
      var n, s, o = this,
        a = e(t.currentTarget);
      switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
        case "previous":
          s = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
          break;
        case "next":
          s = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
          break;
        case "index":
          var r = 0 === t.data.index ? 0 : t.data.index || a.index() * o.options.slidesToScroll;
          o.slideHandler(o.checkNavigable(r), !1, i), a.children().trigger("focus");
          break;
        default:
          return
      }
    }, t.prototype.checkNavigable = function(e) {
      var t, i;
      if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
      else
        for (var n in t) {
          if (e < t[n]) {
            e = i;
            break
          }
          i = t[n]
        }
      return e
    }, t.prototype.cleanUpEvents = function() {
      var t = this;
      t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
      var t = this;
      t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
      var e, t = this;
      t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
      !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
      var i = this;
      i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        e(this).attr("style", e(this).data("originalStyling"))
      }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
      var t = this,
        i = {};
      i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(e).css({
        zIndex: i.options.zIndex
      }), i.$slides.eq(e).animate({
        opacity: 1
      }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
        opacity: 1,
        zIndex: i.options.zIndex
      }), t && setTimeout(function() {
        i.disableTransition(e), t.call()
      }, i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
      var t = this;
      !1 === t.cssTransitions ? t.$slides.eq(e).animate({
        opacity: 0,
        zIndex: t.options.zIndex - 2
      }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
        opacity: 0,
        zIndex: t.options.zIndex - 2
      }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
      var t = this;
      null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
      var t = this;
      t.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(i) {
        var n = e(this);
        setTimeout(function() {
          t.options.pauseOnFocus && n.is(":focus") && (t.focussed = !0, t.autoPlay())
        }, 0)
      }).on("blur.slick", "*", function(i) {
        e(this);
        t.options.pauseOnFocus && (t.focussed = !1, t.autoPlay())
      })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
      return this.currentSlide
    }, t.prototype.getDotCount = function() {
      var e = this,
        t = 0,
        i = 0,
        n = 0;
      if (!0 === e.options.infinite)
        if (e.slideCount <= e.options.slidesToShow) ++n;
        else
          for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (!0 === e.options.centerMode) n = e.slideCount;
      else if (e.options.asNavFor)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return n - 1
    }, t.prototype.getLeft = function(e) {
      var t, i, n, s, o = this,
        a = 0;
      return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? s = -1.5 : 1 === o.options.slidesToShow && (s = -2)), a = i * o.options.slidesToShow * s), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, a = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, a = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, a = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, a = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + a, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
      return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
      var e, t = this,
        i = 0,
        n = 0,
        s = [];
      for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) s.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      return s
    }, t.prototype.getSlick = function() {
      return this
    }, t.prototype.getSlideCount = function() {
      var t, i, n, s = this;
      return n = !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0, i = -1 * s.swipeLeft + n, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(n, o) {
        var a, r;
        if (a = e(o).outerWidth(), r = o.offsetLeft, !0 !== s.options.centerMode && (r += a / 2), i < r + a) return t = o, !1
      }), Math.abs(e(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(e)
        }
      }, t)
    }, t.prototype.init = function(t) {
      var i = this;
      e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
      var t = this,
        i = Math.ceil(t.slideCount / t.options.slidesToShow),
        n = t.getNavigableIndexes().filter(function(e) {
          return e >= 0 && e < t.slideCount
        });
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
        var s = n.indexOf(i);
        if (e(this).attr({
            role: "tabpanel",
            id: "slick-slide" + t.instanceUid + i,
            tabindex: -1
          }), -1 !== s) {
          var o = "slick-slide-control" + t.instanceUid + s;
          e("#" + o).length && e(this).attr({
            "aria-describedby": o
          })
        }
      }), t.$dots.attr("role", "tablist").find("li").each(function(s) {
        var o = n[s];
        e(this).attr({
          role: "presentation"
        }), e(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + t.instanceUid + s,
          "aria-controls": "slick-slide" + t.instanceUid + o,
          "aria-label": s + 1 + " of " + i,
          "aria-selected": null,
          tabindex: "-1"
        })
      }).eq(t.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end());
      for (var s = t.currentSlide, o = s + t.options.slidesToShow; s < o; s++) t.options.focusOnChange ? t.$slides.eq(s).attr({
        tabindex: "0"
      }) : t.$slides.eq(s).removeAttr("tabindex");
      t.activateADA()
    }, t.prototype.initArrowEvents = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
      var t = this;
      !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
        message: "index"
      }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
      var t = this;
      t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
      var t = this;
      t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
      var t = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
        data: {
          message: !0 === t.options.rtl ? "next" : "previous"
        }
      }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
        data: {
          message: !0 === t.options.rtl ? "previous" : "next"
        }
      }))
    }, t.prototype.lazyLoad = function() {
      var t, i, n, s = this;

      function o(t) {
        e("img[data-lazy]", t).each(function() {
          var t = e(this),
            i = e(this).attr("data-lazy"),
            n = e(this).attr("data-srcset"),
            o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
            a = document.createElement("img");
          a.onload = function() {
            t.animate({
              opacity: 0
            }, 100, function() {
              n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).animate({
                opacity: 1
              }, 200, function() {
                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
              }), s.$slider.trigger("lazyLoaded", [s, t, i])
            })
          }, a.onerror = function() {
            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
          }, a.src = i
        })
      }
      if (!0 === s.options.centerMode ? !0 === s.options.infinite ? n = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, n = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, n <= s.slideCount && n++)), t = s.$slider.find(".slick-slide").slice(i, n), "anticipated" === s.options.lazyLoad)
        for (var a = i - 1, r = n, l = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) a < 0 && (a = s.slideCount - 1), t = (t = t.add(l.eq(a))).add(l.eq(r)), a--, r++;
      o(t), s.slideCount <= s.options.slidesToShow ? o(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? o(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && o(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(), e.$slideTrack.css({
        opacity: 1
      }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, t.prototype.orientationChange = function() {
      this.checkResponsive(), this.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
      this.autoPlayClear(), this.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
      var e = this;
      e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
      var i = this;
      i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, t.prototype.preventDefault = function(e) {
      e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
      t = t || 1;
      var i, n, s, o, a, r = this,
        l = e("img[data-lazy]", r.$slider);
      l.length ? (i = l.first(), n = i.attr("data-lazy"), s = i.attr("data-srcset"), o = i.attr("data-sizes") || r.$slider.attr("data-sizes"), (a = document.createElement("img")).onload = function() {
        s && (i.attr("srcset", s), o && i.attr("sizes", o)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
      }, a.onerror = function() {
        t < 3 ? setTimeout(function() {
          r.progressiveLazyLoad(t + 1)
        }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
      }, a.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }, t.prototype.refresh = function(t) {
      var i, n, s = this;
      n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), e.extend(s, s.initials, {
        currentSlide: i
      }), s.init(), t || s.changeSlide({
        data: {
          message: "index",
          index: i
        }
      }, !1)
    }, t.prototype.registerBreakpoints = function() {
      var t, i, n, s = this,
        o = s.options.responsive || null;
      if ("array" === e.type(o) && o.length) {
        for (t in s.respondTo = s.options.respondTo || "window", o)
          if (n = s.breakpoints.length - 1, o.hasOwnProperty(t)) {
            for (i = o[t].breakpoint; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
            s.breakpoints.push(i), s.breakpointSettings[i] = o[t].settings
          } s.breakpoints.sort(function(e, t) {
          return s.options.mobileFirst ? e - t : t - e
        })
      }
    }, t.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
      var t = this;
      e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
        t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
      }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
      var n = this;
      if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
      n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.setCSS = function(e) {
      var t, i, n = this,
        s = {};
      !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", s[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {}, !1 === n.cssTransitions ? (s[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(s)))
    }, t.prototype.setDimensions = function() {
      var e = this;
      !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
        padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
        padding: e.options.centerPadding + " 0px"
      })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
      var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
      var t, i = this;
      i.$slides.each(function(n, s) {
        t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(s).css({
          position: "relative",
          right: t,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        }) : e(s).css({
          position: "relative",
          left: t,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        })
      }), i.$slides.eq(i.currentSlide).css({
        zIndex: i.options.zIndex - 1,
        opacity: 1
      })
    }, t.prototype.setHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", t)
      }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
      var t, i, n, s, o, a = this,
        r = !1;
      if ("object" === e.type(arguments[0]) ? (n = arguments[0], r = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], s = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) a.options[n] = s;
      else if ("multiple" === o) e.each(n, function(e, t) {
        a.options[e] = t
      });
      else if ("responsive" === o)
        for (i in s)
          if ("array" !== e.type(a.options.responsive)) a.options.responsive = [s[i]];
          else {
            for (t = a.options.responsive.length - 1; t >= 0;) a.options.responsive[t].breakpoint === s[i].breakpoint && a.options.responsive.splice(t, 1), t--;
            a.options.responsive.push(s[i])
          } r && (a.unload(), a.reinit())
    }, t.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
      var e = this,
        t = document.body.style;
      e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
      var t, i, n, s, o = this;
      if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode) {
        var a = o.options.slidesToShow % 2 == 0 ? 1 : 0;
        t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + a, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, i.slice(n - t + 1 + a, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")
      } else e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, t.prototype.setupInfinite = function() {
      var t, i, n, s = this;
      if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
        for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - n; t -= 1) i = t - 1, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
        for (t = 0; t < n + s.slideCount; t += 1) i = t, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
        s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          e(this).attr("id", "")
        })
      }
    }, t.prototype.interrupt = function(e) {
      e || this.autoPlay(), this.interrupted = e
    }, t.prototype.selectHandler = function(t) {
      var i = this,
        n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
        s = parseInt(n.attr("data-slick-index"));
      s || (s = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
    }, t.prototype.slideHandler = function(e, t, i) {
      var n, s, o, a, r, l, d = this;
      if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
        if (!1 === t && d.asNavFor(e), n = e, r = d.getLeft(n), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(a, function() {
          d.postSlide(n)
        }) : d.postSlide(n));
        else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(a, function() {
        d.postSlide(n)
      }) : d.postSlide(n));
      else {
        if (d.options.autoplay && clearInterval(d.autoPlayTimer), s = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), o = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(o), d.fadeSlide(s, function() {
          d.postSlide(s)
        })) : d.postSlide(s), void d.animateHeight();
        !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function() {
          d.postSlide(s)
        }) : d.postSlide(s)
      }
    }, t.prototype.startLoad = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
      var e, t, i, n, s = this;
      return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
      var t, i, n = this;
      if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
      if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
      if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
        switch (i = n.swipeDirection()) {
          case "left":
          case "down":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
            break;
          case "right":
          case "up":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
        }
        "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
      } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
        case "start":
          t.swipeStart(e);
          break;
        case "move":
          t.swipeMove(e);
          break;
        case "end":
          t.swipeEnd(e)
      }
    }, t.prototype.swipeMove = function(e) {
      var t, i, n, s, o, a, r = this;
      return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || r.scrolling || o && 1 !== o.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && a > 4 ? (r.scrolling = !0, !1) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = a), i = r.swipeDirection(), void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && (r.swiping = !0, e.preventDefault()), s = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + n * s : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * s, !0 === r.options.verticalSwiping && (r.swipeLeft = t + n * s), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
      var t, i = this;
      if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
      void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
      var t = this;
      e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
      var t = this;
      t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
      var e = this;
      Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
      var e = this;
      e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
      var e, i, n = this,
        s = arguments[0],
        o = Array.prototype.slice.call(arguments, 1),
        a = n.length;
      for (e = 0; e < a; e++)
        if ("object" == typeof s || void 0 === s ? n[e].slick = new t(n[e], s) : i = n[e].slick[s].apply(n[e].slick, o), void 0 !== i) return i;
      return n
    }
  });
var swiperPilpres = new Swiper(".swiper-container--pilpres", {
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: !0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination-pilpres",
    clickable: !0
  }
});