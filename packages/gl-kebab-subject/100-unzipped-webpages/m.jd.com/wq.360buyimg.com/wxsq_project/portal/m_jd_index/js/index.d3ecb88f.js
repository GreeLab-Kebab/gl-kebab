! function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(t, r, o) {
        for (var a, s, u = 0, c = []; u < t.length; u++) s = t[u], i[s] && c.push(i[s][0]), i[s] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        for (n && n(t, r, o); c.length;) c.shift()()
    };
    var r = {},
        i = {
            1: 0
        };
    t.e = function(e) {
        function n() {
            s.onerror = s.onload = null, clearTimeout(u);
            var t = i[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), i[e] = void 0)
        }
        var r = i[e];
        if (0 === r) return new Promise(function(e) {
            e()
        });
        if (r) return r[2];
        var o = new Promise(function(t, n) {
            r = i[e] = [t, n]
        });
        r[2] = o;
        var a = document.getElementsByTagName("head")[0],
            s = document.createElement("script");
        s.type = "text/javascript", s.charset = "utf-8", s.async = !0, s.timeout = 12e4, t.nc && s.setAttribute("nonce", t.nc), s.src = t.p + "./_dyn/" + ({}[e] || e) + ".d3ecb88f.js";
        var u = setTimeout(n, 12e4);
        return s.onerror = s.onload = n, a.appendChild(s), o
    }, t.m = e, t.c = r, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "//wq.360buyimg.com/wxsq_project/portal/m_jd_index/", t.oe = function(e) {
        throw console.error(e), e
    }, t(t.s = 43)
}([function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    var n = e.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    var r = n(4),
        i = n(13);
    e.exports = n(5) ? function(e, t, n) {
        return r.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(12),
        i = n(32),
        o = n(18),
        a = Object.defineProperty;
    t.f = n(5) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = o(t, !0), r(n), i) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    e.exports = !n(10)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var r = n(54),
        i = n(16);
    e.exports = function(e) {
        return r(i(e))
    }
}, function(e, t, n) {
    var r = n(22)("wks"),
        i = n(14),
        o = n(0).Symbol,
        a = "function" == typeof o;
    (e.exports = function(e) {
        return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
    }).store = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(46),
        o = r(i),
        a = n(63),
        s = r(a),
        u = "function" == typeof s.default && "symbol" == typeof o.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
        };
    t.default = "function" == typeof s.default && "symbol" === u(o.default) ? function(e) {
        return void 0 === e ? "undefined" : u(e)
    } : function(e) {
        return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : u(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    var r = n(9);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(0),
        i = n(1),
        o = n(50),
        a = n(3),
        s = n(2),
        u = function(e, t, n) {
            var c, l, d, p = e & u.F,
                m = e & u.G,
                f = e & u.S,
                h = e & u.P,
                g = e & u.B,
                v = e & u.W,
                y = m ? i : i[t] || (i[t] = {}),
                P = y.prototype,
                b = m ? r : f ? r[t] : (r[t] || {}).prototype;
            m && (n = t);
            for (c in n)(l = !p && b && void 0 !== b[c]) && s(y, c) || (d = l ? b[c] : n[c], y[c] = m && "function" != typeof b[c] ? n[c] : g && l ? o(d, r) : v && b[c] == d ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(d) : h && "function" == typeof d ? o(Function.call, d) : d, h && ((y.virtual || (y.virtual = {}))[c] = d, e & u.R && P && !P[c] && a(P, c, d)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, t, n) {
    var r = n(9);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
        if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var r = n(36),
        i = n(23);
    e.exports = Object.keys || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    var r = n(22)("keys"),
        i = n(14);
    e.exports = function(e) {
        return r[e] || (r[e] = i(e))
    }
}, function(e, t, n) {
    var r = n(1),
        i = n(0),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(11) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var r = n(4).f,
        i = n(2),
        o = n(7)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, o) && r(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    var r = n(16);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t, n) {
    t.f = n(7)
}, function(e, t, n) {
    var r = n(0),
        i = n(1),
        o = n(11),
        a = n(26),
        s = n(4).f;
    e.exports = function(e) {
        var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: a.f(e)
        })
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(8),
        o = r(i),
        a = n(41),
        s = r(a),
        u = function() {
            function e(e) {
                return null == e ? String(e) : Q[K.call(e)] || "object"
            }

            function t(t) {
                return "function" == e(t)
            }

            function n(e) {
                return null != e && e == e.window
            }

            function r(e) {
                return null != e && e.nodeType == e.DOCUMENT_NODE
            }

            function i(t) {
                return "object" == e(t)
            }

            function a(e) {
                return i(e) && !n(e) && (0, s.default)(e) == Object.prototype
            }

            function u(e) {
                var t = !!e && "length" in e && e.length,
                    r = T.type(e);
                return "function" != r && !n(e) && ("array" == r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function c(e) {
                return B.call(e, function(e) {
                    return null != e
                })
            }

            function l(e) {
                return e.length > 0 ? T.fn.concat.apply([], e) : e
            }

            function d(e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function p(e) {
                return e in N ? N[e] : N[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
            }

            function m(e, t) {
                return "number" != typeof t || F[d(e)] ? t : t + "px"
            }

            function f(e) {
                var t, n;
                return q[e] || (t = O.createElement(e), O.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), q[e] = n), q[e]
            }

            function h(e) {
                return "children" in e ? D.call(e.children) : T.map(e.childNodes, function(e) {
                    if (1 == e.nodeType) return e
                })
            }

            function g(e, t) {
                var n, r = e ? e.length : 0;
                for (n = 0; n < r; n++) this[n] = e[n];
                this.length = r, this.selector = t || ""
            }

            function v(e, t, n) {
                for (I in t) n && (a(t[I]) || te(t[I])) ? (a(t[I]) && !a(e[I]) && (e[I] = {}), te(t[I]) && !te(e[I]) && (e[I] = []), v(e[I], t[I], n)) : t[I] !== k && (e[I] = t[I])
            }

            function y(e, t) {
                return null == t ? T(e) : T(e).filter(t)
            }

            function P(e, n, r, i) {
                return t(n) ? n.call(e, r, i) : n
            }

            function b(e, t, n) {
                null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
            }

            function w(e, t) {
                var n = e.className || "",
                    r = n && n.baseVal !== k;
                if (t === k) return r ? n.baseVal : n;
                r ? n.baseVal = t : e.className = t
            }

            function S(e) {
                try {
                    return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? T.parseJSON(e) : e) : e
                } catch (t) {
                    return e
                }
            }

            function C(e, t) {
                t(e);
                for (var n = 0, r = e.childNodes.length; n < r; n++) C(e.childNodes[n], t)
            }
            var k, I, T, _, A, j, x = [],
                M = x.concat,
                B = x.filter,
                D = x.slice,
                O = window.document,
                q = {},
                N = {},
                F = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                },
                L = /^\s*<(\w+|!)[^>]*>/,
                J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                E = /^(?:body|html)$/i,
                R = /([A-Z])/g,
                V = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                H = ["after", "prepend", "before", "append"],
                W = O.createElement("table"),
                G = O.createElement("tr"),
                z = {
                    tr: O.createElement("tbody"),
                    tbody: W,
                    thead: W,
                    tfoot: W,
                    td: G,
                    th: G,
                    "*": O.createElement("div")
                },
                $ = /complete|loaded|interactive/,
                X = /^[\w-]*$/,
                Q = {},
                K = Q.toString,
                Y = {},
                Z = O.createElement("div"),
                ee = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                te = Array.isArray || function(e) {
                    return e instanceof Array
                };
            return Y.matches = function(e, t) {
                if (!t || !e || 1 !== e.nodeType) return !1;
                var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                if (n) return n.call(e, t);
                var r, i = e.parentNode,
                    o = !i;
                return o && (i = Z).appendChild(e), r = ~Y.qsa(i, t).indexOf(e), o && Z.removeChild(e), r
            }, A = function(e) {
                return e.replace(/-+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }, j = function(e) {
                return B.call(e, function(t, n) {
                    return e.indexOf(t) == n
                })
            }, Y.fragment = function(e, t, n) {
                var r, i, o;
                return J.test(e) && (r = T(O.createElement(RegExp.$1))), r || (e.replace && (e = e.replace(U, "<$1></$2>")), t === k && (t = L.test(e) && RegExp.$1), t in z || (t = "*"), o = z[t], o.innerHTML = "" + e, r = T.each(D.call(o.childNodes), function() {
                    o.removeChild(this)
                })), a(n) && (i = T(r), T.each(n, function(e, t) {
                    V.indexOf(e) > -1 ? i[e](t) : i.attr(e, t)
                })), r
            }, Y.Z = function(e, t) {
                return new g(e, t)
            }, Y.isZ = function(e) {
                return e instanceof Y.Z
            }, Y.init = function(e, n) {
                var r;
                if (!e) return Y.Z();
                if ("string" == typeof e)
                    if (e = e.trim(), "<" == e[0] && L.test(e)) r = Y.fragment(e, RegExp.$1, n), e = null;
                    else {
                        if (n !== k) return T(n).find(e);
                        r = Y.qsa(O, e)
                    }
                else {
                    if (t(e)) return T(O).ready(e);
                    if (Y.isZ(e)) return e;
                    if (te(e)) r = c(e);
                    else if (i(e)) r = [e], e = null;
                    else if (L.test(e)) r = Y.fragment(e.trim(), RegExp.$1, n), e = null;
                    else {
                        if (n !== k) return T(n).find(e);
                        r = Y.qsa(O, e)
                    }
                }
                return Y.Z(r, e)
            }, T = function(e, t) {
                return Y.init(e, t)
            }, T.extend = function(e) {
                var t, n = D.call(arguments, 1);
                return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function(n) {
                    v(e, n, t)
                }), e
            }, Y.qsa = function(e, t) {
                var n, r = "#" == t[0],
                    i = !r && "." == t[0],
                    o = r || i ? t.slice(1) : t,
                    a = X.test(o);
                return e.getElementById && a && r ? (n = e.getElementById(o)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : D.call(a && !r && e.getElementsByClassName ? i ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t))
            }, T.contains = O.documentElement.contains ? function(e, t) {
                return e !== t && e.contains(t)
            } : function(e, t) {
                for (; t && (t = t.parentNode);)
                    if (t === e) return !0;
                return !1
            }, T.type = e, T.isFunction = t, T.isWindow = n, T.isArray = te, T.isPlainObject = a, T.isEmptyObject = function(e) {
                var t;
                for (t in e) return !1;
                return !0
            }, T.isNumeric = function(e) {
                var t = Number(e),
                    n = void 0 === e ? "undefined" : (0, o.default)(e);
                return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1
            }, T.inArray = function(e, t, n) {
                return x.indexOf.call(t, e, n)
            }, T.camelCase = A, T.trim = function(e) {
                return null == e ? "" : String.prototype.trim.call(e)
            }, T.uuid = 0, T.support = {}, T.expr = {}, T.noop = function() {}, T.map = function(e, t) {
                var n, r, i, o = [];
                if (u(e))
                    for (r = 0; r < e.length; r++) null != (n = t(e[r], r)) && o.push(n);
                else
                    for (i in e) null != (n = t(e[i], i)) && o.push(n);
                return l(o)
            }, T.each = function(e, t) {
                var n, r;
                if (u(e)) {
                    for (n = 0; n < e.length; n++)
                        if (!1 === t.call(e[n], n, e[n])) return e
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) return e;
                return e
            }, T.grep = function(e, t) {
                return B.call(e, t)
            }, window.JSON && (T.parseJSON = JSON.parse), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                Q["[object " + t + "]"] = t.toLowerCase()
            }), T.fn = {
                constructor: Y.Z,
                length: 0,
                forEach: x.forEach,
                reduce: x.reduce,
                push: x.push,
                sort: x.sort,
                splice: x.splice,
                indexOf: x.indexOf,
                concat: function() {
                    var e, t, n = [];
                    for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = Y.isZ(t) ? t.toArray() : t;
                    return M.apply(Y.isZ(this) ? this.toArray() : this, n)
                },
                map: function(e) {
                    return T(T.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return T(D.apply(this, arguments))
                },
                ready: function(e) {
                    return $.test(O.readyState) && O.body ? e(T) : O.addEventListener("DOMContentLoaded", function() {
                        e(T)
                    }, !1), this
                },
                get: function(e) {
                    return e === k ? D.call(this) : this[e >= 0 ? e : e + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each(function() {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function(e) {
                    return x.every.call(this, function(t, n) {
                        return !1 !== e.call(t, n, t)
                    }), this
                },
                filter: function(e) {
                    return t(e) ? this.not(this.not(e)) : T(B.call(this, function(t) {
                        return Y.matches(t, e)
                    }))
                },
                add: function(e, t) {
                    return T(j(this.concat(T(e, t))))
                },
                is: function(e) {
                    return this.length > 0 && Y.matches(this[0], e)
                },
                not: function(e) {
                    var n = [];
                    if (t(e) && e.call !== k) this.each(function(t) {
                        e.call(this, t) || n.push(this)
                    });
                    else {
                        var r = "string" == typeof e ? this.filter(e) : u(e) && t(e.item) ? D.call(e) : T(e);
                        this.forEach(function(e) {
                            r.indexOf(e) < 0 && n.push(e)
                        })
                    }
                    return T(n)
                },
                has: function(e) {
                    return this.filter(function() {
                        return i(e) ? T.contains(this, e) : T(this).find(e).size()
                    })
                },
                eq: function(e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                },
                first: function() {
                    var e = this[0];
                    return e && !i(e) ? e : T(e)
                },
                last: function() {
                    var e = this[this.length - 1];
                    return e && !i(e) ? e : T(e)
                },
                find: function(e) {
                    var t = this;
                    return e ? "object" == (void 0 === e ? "undefined" : (0, o.default)(e)) ? T(e).filter(function() {
                        var e = this;
                        return x.some.call(t, function(t) {
                            return T.contains(t, e)
                        })
                    }) : 1 == this.length ? T(Y.qsa(this[0], e)) : this.map(function() {
                        return Y.qsa(this, e)
                    }) : T()
                },
                closest: function(e, t) {
                    var n = [],
                        i = "object" == (void 0 === e ? "undefined" : (0, o.default)(e)) && T(e);
                    return this.each(function(o, a) {
                        for (; a && !(i ? i.indexOf(a) >= 0 : Y.matches(a, e));) a = a !== t && !r(a) && a.parentNode;
                        a && n.indexOf(a) < 0 && n.push(a)
                    }), T(n)
                },
                parents: function(e) {
                    for (var t = [], n = this; n.length > 0;) n = T.map(n, function(e) {
                        if ((e = e.parentNode) && !r(e) && t.indexOf(e) < 0) return t.push(e), e
                    });
                    return y(t, e)
                },
                parent: function(e) {
                    return y(j(this.pluck("parentNode")), e)
                },
                children: function(e) {
                    return y(this.map(function() {
                        return h(this)
                    }), e)
                },
                contents: function() {
                    return this.map(function() {
                        return this.contentDocument || D.call(this.childNodes)
                    })
                },
                siblings: function(e) {
                    return y(this.map(function(e, t) {
                        return B.call(h(t.parentNode), function(e) {
                            return e !== t
                        })
                    }), e)
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                pluck: function(e) {
                    return T.map(this, function(t) {
                        return t[e]
                    })
                },
                show: function() {
                    return this.each(function() {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = f(this.nodeName))
                    })
                },
                replaceWith: function(e) {
                    return this.before(e).remove()
                },
                wrap: function(e) {
                    var n = t(e);
                    if (this[0] && !n) var r = T(e).get(0),
                        i = r.parentNode || this.length > 1;
                    return this.each(function(t) {
                        T(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r)
                    })
                },
                wrapAll: function(e) {
                    if (this[0]) {
                        T(this[0]).before(e = T(e));
                        for (var t;
                            (t = e.children()).length;) e = t.first();
                        T(e).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    var n = t(e);
                    return this.each(function(t) {
                        var r = T(this),
                            i = r.contents(),
                            o = n ? e.call(this, t) : e;
                        i.length ? i.wrapAll(o) : r.append(o)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        T(this).replaceWith(T(this).children())
                    }), this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0)
                    })
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(e) {
                    return this.each(function() {
                        var t = T(this);
                        (e === k ? "none" == t.css("display") : e) ? t.show(): t.hide()
                    })
                },
                prev: function(e) {
                    return T(this.pluck("previousElementSibling")).filter(e || "*")
                },
                next: function(e) {
                    return T(this.pluck("nextElementSibling")).filter(e || "*")
                },
                html: function(e) {
                    return 0 in arguments ? this.each(function(t) {
                        var n = this.innerHTML;
                        T(this).empty().append(P(this, e, t, n))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function(e) {
                    return 0 in arguments ? this.each(function(t) {
                        var n = P(this, e, t, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this.pluck("textContent").join("") : null
                },
                attr: function(e, t) {
                    var n;
                    return "string" != typeof e || 1 in arguments ? this.each(function(n) {
                        if (1 === this.nodeType)
                            if (i(e))
                                for (I in e) b(this, I, e[I]);
                            else b(this, e, P(this, t, n, this.getAttribute(e)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(e)) ? n : k
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        1 === this.nodeType && e.split(" ").forEach(function(e) {
                            b(this, e)
                        }, this)
                    })
                },
                prop: function(e, t) {
                    return e = ee[e] || e, 1 in arguments ? this.each(function(n) {
                        this[e] = P(this, t, n, this[e])
                    }) : this[0] && this[0][e]
                },
                removeProp: function(e) {
                    return e = ee[e] || e, this.each(function() {
                        delete this[e]
                    })
                },
                data: function(e, t) {
                    var n = "data-" + e.replace(R, "-$1").toLowerCase(),
                        r = 1 in arguments ? this.attr(n, t) : this.attr(n);
                    return null !== r ? S(r) : k
                },
                val: function(e) {
                    return 0 in arguments ? (null == e && (e = ""), this.each(function(t) {
                        this.value = P(this, e, t, this.value)
                    })) : this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function() {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function(e) {
                    if (e) return this.each(function(t) {
                        var n = T(this),
                            r = P(this, e, t, n.offset()),
                            i = n.offsetParent().offset(),
                            o = {
                                top: r.top - i.top,
                                left: r.left - i.left
                            };
                        "static" == n.css("position") && (o.position = "relative"), n.css(o)
                    });
                    if (!this.length) return null;
                    if (O.documentElement !== this[0] && !T.contains(O.documentElement, this[0])) return {
                        top: 0,
                        left: 0
                    };
                    var t = this[0].getBoundingClientRect();
                    return {
                        left: t.left + window.pageXOffset,
                        top: t.top + window.pageYOffset,
                        width: Math.round(t.width),
                        height: Math.round(t.height)
                    }
                },
                css: function(t, n) {
                    if (arguments.length < 2) {
                        var r = this[0];
                        if ("string" == typeof t) {
                            if (!r) return;
                            return r.style[A(t)] || getComputedStyle(r, "").getPropertyValue(t)
                        }
                        if (te(t)) {
                            if (!r) return;
                            var i = {},
                                o = getComputedStyle(r, "");
                            return T.each(t, function(e, t) {
                                i[t] = r.style[A(t)] || o.getPropertyValue(t)
                            }), i
                        }
                    }
                    var a = "";
                    if ("string" == e(t)) n || 0 === n ? a = d(t) + ":" + m(t, n) : this.each(function() {
                        this.style.removeProperty(d(t))
                    });
                    else
                        for (I in t) t[I] || 0 === t[I] ? a += d(I) + ":" + m(I, t[I]) + ";" : this.each(function() {
                            this.style.removeProperty(d(I))
                        });
                    return this.each(function() {
                        this.style.cssText += ";" + a
                    })
                },
                index: function(e) {
                    return e ? this.indexOf(T(e)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(e) {
                    return !!e && x.some.call(this, function(e) {
                        return this.test(w(e))
                    }, p(e))
                },
                addClass: function(e) {
                    return e ? this.each(function(t) {
                        if ("className" in this) {
                            _ = [];
                            var n = w(this);
                            P(this, e, t, n).split(/\s+/g).forEach(function(e) {
                                T(this).hasClass(e) || _.push(e)
                            }, this), _.length && w(this, n + (n ? " " : "") + _.join(" "))
                        }
                    }) : this
                },
                removeClass: function(e) {
                    return this.each(function(t) {
                        if ("className" in this) {
                            if (e === k) return w(this, "");
                            _ = w(this), P(this, e, t, _).split(/\s+/g).forEach(function(e) {
                                _ = _.replace(p(e), " ")
                            }), w(this, _.trim())
                        }
                    })
                },
                toggleClass: function(e, t) {
                    return e ? this.each(function(n) {
                        var r = T(this);
                        P(this, e, n, w(this)).split(/\s+/g).forEach(function(e) {
                            (t === k ? !r.hasClass(e) : t) ? r.addClass(e): r.removeClass(e)
                        })
                    }) : this
                },
                scrollTop: function(e) {
                    if (this.length) {
                        var t = "scrollTop" in this[0];
                        return e === k ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                            this.scrollTop = e
                        } : function() {
                            this.scrollTo(this.scrollX, e)
                        })
                    }
                },
                scrollLeft: function(e) {
                    if (this.length) {
                        var t = "scrollLeft" in this[0];
                        return e === k ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                            this.scrollLeft = e
                        } : function() {
                            this.scrollTo(e, this.scrollY)
                        })
                    }
                },
                position: function() {
                    if (this.length) {
                        var e = this[0],
                            t = this.offsetParent(),
                            n = this.offset(),
                            r = E.test(t[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : t.offset();
                        return n.top -= parseFloat(T(e).css("margin-top")) || 0, n.left -= parseFloat(T(e).css("margin-left")) || 0, r.top += parseFloat(T(t[0]).css("border-top-width")) || 0, r.left += parseFloat(T(t[0]).css("border-left-width")) || 0, {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || O.body; e && !E.test(e.nodeName) && "static" == T(e).css("position");) e = e.offsetParent;
                        return e
                    })
                }
            }, T.fn.detach = T.fn.remove, ["width", "height"].forEach(function(e) {
                var t = e.replace(/./, function(e) {
                    return e[0].toUpperCase()
                });
                T.fn[e] = function(i) {
                    var o, a = this[0];
                    return i === k ? n(a) ? a["inner" + t] : r(a) ? a.documentElement["scroll" + t] : (o = this.offset()) && o[e] : this.each(function(t) {
                        a = T(this), a.css(e, P(this, i, t, a[e]()))
                    })
                }
            }), H.forEach(function(t, n) {
                var r = n % 2;
                T.fn[t] = function() {
                    var t, i, o = T.map(arguments, function(n) {
                            var r = [];
                            return t = e(n), "array" == t ? (n.forEach(function(e) {
                                return e.nodeType !== k ? r.push(e) : T.zepto.isZ(e) ? r = r.concat(e.get()) : void(r = r.concat(Y.fragment(e)))
                            }), r) : "object" == t || null == n ? n : Y.fragment(n)
                        }),
                        a = this.length > 1;
                    return o.length < 1 ? this : this.each(function(e, t) {
                        i = r ? t : t.parentNode, t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                        var s = T.contains(O.documentElement, i);
                        o.forEach(function(e) {
                            if (a) e = e.cloneNode(!0);
                            else if (!i) return T(e).remove();
                            i.insertBefore(e, t), s && C(e, function(e) {
                                if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                    var t = e.ownerDocument ? e.ownerDocument.defaultView : window;
                                    t.eval.call(t, e.innerHTML)
                                }
                            })
                        })
                    })
                }, T.fn[r ? t + "To" : "insert" + (n ? "Before" : "After")] = function(e) {
                    return T(e)[t](this), this
                }
            }), Y.Z.prototype = g.prototype = T.fn, Y.uniq = j, Y.deserializeValue = S, T.zepto = Y, T
        }();
    window.Zepto = u, void 0 === window.$ && (window.$ = u),
        function(e) {
            function t(e) {
                return e._zid || (e._zid = p++)
            }

            function n(e, n, o, a) {
                if (n = r(n), n.ns) var s = i(n.ns);
                return (g[t(e)] || []).filter(function(e) {
                    return e && (!n.e || e.e == n.e) && (!n.ns || s.test(e.ns)) && (!o || t(e.fn) === t(o)) && (!a || e.sel == a)
                })
            }

            function r(e) {
                var t = ("" + e).split(".");
                return {
                    e: t[0],
                    ns: t.slice(1).sort().join(" ")
                }
            }

            function i(e) {
                return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
            }

            function o(e, t) {
                return e.del && !y && e.e in P || !!t
            }

            function a(e) {
                return b[e] || y && P[e] || e
            }

            function s(n, i, s, u, l, p, m) {
                var f = t(n),
                    h = g[f] || (g[f] = []);
                i.split(/\s/).forEach(function(t) {
                    if ("ready" == t) return e(document).ready(s);
                    var i = r(t);
                    i.fn = s, i.sel = l, i.e in b && (s = function(t) {
                        var n = t.relatedTarget;
                        if (!n || n !== this && !e.contains(this, n)) return i.fn.apply(this, arguments)
                    }), i.del = p;
                    var f = p || s;
                    i.proxy = function(e) {
                        if (e = c(e), !e.isImmediatePropagationStopped()) {
                            try {
                                e.data = u
                            } catch (e) {}
                            var t = f.apply(n, e._args == d ? [e] : [e].concat(e._args));
                            return !1 === t && (e.preventDefault(), e.stopPropagation()), t
                        }
                    }, i.i = h.length, h.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, m))
                })
            }

            function u(e, r, i, s, u) {
                var c = t(e);
                (r || "").split(/\s/).forEach(function(t) {
                    n(e, t, i, s).forEach(function(t) {
                        delete g[c][t.i], "removeEventListener" in e && e.removeEventListener(a(t.e), t.proxy, o(t, u))
                    })
                })
            }

            function c(t, n) {
                if (n || !t.isDefaultPrevented) {
                    n || (n = t), e.each(k, function(e, r) {
                        var i = n[e];
                        t[e] = function() {
                            return this[r] = w, i && i.apply(n, arguments)
                        }, t[r] = S
                    });
                    try {
                        t.timeStamp || (t.timeStamp = Date.now())
                    } catch (e) {
                        console.log(e)
                    }(n.defaultPrevented !== d ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = w)
                }
                return t
            }

            function l(e) {
                var t, n = {
                    originalEvent: e
                };
                for (t in e) C.test(t) || e[t] === d || (n[t] = e[t]);
                return c(n, e)
            }
            var d, p = 1,
                m = Array.prototype.slice,
                f = e.isFunction,
                h = function(e) {
                    return "string" == typeof e
                },
                g = {},
                v = {},
                y = "onfocusin" in window,
                P = {
                    focus: "focusin",
                    blur: "focusout"
                },
                b = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
            v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", e.event = {
                add: s,
                remove: u
            }, e.proxy = function(n, r) {
                var i = 2 in arguments && m.call(arguments, 2);
                if (f(n)) {
                    var o = function() {
                        return n.apply(r, i ? i.concat(m.call(arguments)) : arguments)
                    };
                    return o._zid = t(n), o
                }
                if (h(r)) return i ? (i.unshift(n[r], n), e.proxy.apply(null, i)) : e.proxy(n[r], n);
                throw new TypeError("expected function")
            }, e.fn.bind = function(e, t, n) {
                return this.on(e, t, n)
            }, e.fn.unbind = function(e, t) {
                return this.off(e, t)
            }, e.fn.one = function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            };
            var w = function() {
                    return !0
                },
                S = function() {
                    return !1
                },
                C = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                k = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
            e.fn.delegate = function(e, t, n) {
                return this.on(t, e, n)
            }, e.fn.undelegate = function(e, t, n) {
                return this.off(t, e, n)
            }, e.fn.live = function(t, n) {
                return e(document.body).delegate(this.selector, t, n), this
            }, e.fn.die = function(t, n) {
                return e(document.body).undelegate(this.selector, t, n), this
            }, e.fn.on = function(t, n, r, i, o) {
                var a, c, p = this;
                return t && !h(t) ? (e.each(t, function(e, t) {
                    p.on(e, n, r, t, o)
                }), p) : (h(n) || f(i) || !1 === i || (i = r, r = n, n = d), i !== d && !1 !== r || (i = r, r = d), !1 === i && (i = S), p.each(function(d, p) {
                    o && (a = function(e) {
                        return u(p, e.type, i), i.apply(this, arguments)
                    }), n && (c = function(t) {
                        var r, o = e(t.target).closest(n, p).get(0);
                        if (o && o !== p) return r = e.extend(l(t), {
                            currentTarget: o,
                            liveFired: p
                        }), (a || i).apply(o, [r].concat(m.call(arguments, 1)))
                    }), s(p, t, i, r, n, c || a)
                }))
            }, e.fn.off = function(t, n, r) {
                var i = this;
                return t && !h(t) ? (e.each(t, function(e, t) {
                    i.off(e, n, t)
                }), i) : (h(n) || f(r) || !1 === r || (r = n, n = d), !1 === r && (r = S), i.each(function() {
                    u(this, t, r, n)
                }))
            }, e.fn.trigger = function(t, n) {
                return t = h(t) || e.isPlainObject(t) ? e.Event(t) : c(t), t._args = n, this.each(function() {
                    t.type in P && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                })
            }, e.fn.triggerHandler = function(t, r) {
                var i, o;
                return this.each(function(a, s) {
                    i = l(h(t) ? e.Event(t) : t), i._args = r, i.target = s, e.each(n(s, t.type || t), function(e, t) {
                        if (o = t.proxy(i), i.isImmediatePropagationStopped()) return !1
                    })
                }), o
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                e.fn[t] = function(e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            }), e.Event = function(e, t) {
                h(e) || (t = e, e = t.type);
                var n = document.createEvent(v[e] || "Events"),
                    r = !0;
                if (t)
                    for (var i in t) "bubbles" == i ? r = !!t[i] : n[i] = t[i];
                return n.initEvent(e, r, !0), c(n)
            }
        }(u),
        function(e) {
            function t(t, n, r) {
                var i = e.Event(n);
                return e(t).trigger(i, r), !i.isDefaultPrevented()
            }

            function n(e, n, r, i) {
                if (e.global) return t(n || P, r, i)
            }

            function r(t) {
                t.global && 0 == e.active++ && n(t, null, "ajaxStart")
            }

            function i(t) {
                t.global && !--e.active && n(t, null, "ajaxStop")
            }

            function o(e, t) {
                var r = t.context;
                if (!1 === t.beforeSend.call(r, e, t) || !1 === n(t, r, "ajaxBeforeSend", [e, t])) return !1;
                n(t, r, "ajaxSend", [e, t])
            }

            function a(e, t, r, i) {
                var o = r.context;
                r.success.call(o, e, "success", t), i && i.resolveWith(o, [e, "success", t]), n(r, o, "ajaxSuccess", [t, r, e]), u("success", t, r)
            }

            function s(e, t, r, i, o) {
                var a = i.context;
                i.error.call(a, r, t, e), o && o.rejectWith(a, [r, t, e]), n(i, a, "ajaxError", [r, i, e || t]), u(t, r, i)
            }

            function u(e, t, r) {
                var o = r.context;
                r.complete.call(o, t, e), n(r, o, "ajaxComplete", [t, r]), i(r)
            }

            function c(e, t, n) {
                if (n.dataFilter == l) return e;
                var r = n.context;
                return n.dataFilter.call(r, e, t)
            }

            function l() {}

            function d(e) {
                return e && (e = e.split(";", 2)[0]), e && (e == k ? "html" : e == C ? "json" : w.test(e) ? "script" : S.test(e) && "xml") || "text"
            }

            function p(e, t) {
                return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
            }

            function m(t) {
                t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = p(t.url, t.data), t.data = void 0)
            }

            function f(t, n, r, i) {
                return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), {
                    url: t,
                    data: n,
                    success: r,
                    dataType: i
                }
            }

            function h(t, n, r, i) {
                var o, a = e.isArray(n),
                    s = e.isPlainObject(n);
                e.each(n, function(n, u) {
                    o = e.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? h(t, u, r, n) : t.add(n, u)
                })
            }
            var g, v, y = +new Date,
                P = window.document,
                b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                w = /^(?:text|application)\/javascript/i,
                S = /^(?:text|application)\/xml/i,
                C = "application/json",
                k = "text/html",
                I = /^\s*$/,
                T = P.createElement("a");
            T.href = window.location.href, e.active = 0, e.ajaxJSONP = function(t, n) {
                if (!("type" in t)) return e.ajax(t);
                var r, i, u = t.jsonpCallback,
                    c = (e.isFunction(u) ? u() : u) || "Zepto" + y++,
                    l = P.createElement("script"),
                    d = window[c],
                    p = function(t) {
                        e(l).triggerHandler("error", t || "abort")
                    },
                    m = {
                        abort: p
                    };
                return n && n.promise(m), e(l).on("load error", function(o, u) {
                    clearTimeout(i), e(l).off().remove(), "error" != o.type && r ? a(r[0], m, t, n) : s(null, u || "error", m, t, n), window[c] = d, r && e.isFunction(d) && d(r[0]), d = r = void 0
                }), !1 === o(m, t) ? (p("abort"), m) : (window[c] = function() {
                    r = arguments
                }, l.src = t.url.replace(/\?(.+)=\?/, "?$1=" + c), P.head.appendChild(l), t.timeout > 0 && (i = setTimeout(function() {
                    p("timeout")
                }, t.timeout)), m)
            }, e.ajaxSettings = {
                type: "GET",
                beforeSend: l,
                success: l,
                error: l,
                complete: l,
                context: null,
                global: !0,
                xhr: function() {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: C,
                    xml: "application/xml, text/xml",
                    html: k,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: l
            }, e.ajax = function(t) {
                var n, i, u = e.extend({}, t || {}),
                    f = e.Deferred && e.Deferred();
                for (g in e.ajaxSettings) void 0 === u[g] && (u[g] = e.ajaxSettings[g]);
                r(u), u.crossDomain || (n = P.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = T.protocol + "//" + T.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), (i = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, i)), m(u);
                var h = u.dataType,
                    y = /\?.+=\?/.test(u.url);
                if (y && (h = "jsonp"), !1 !== u.cache && (t && !0 === t.cache || "script" != h && "jsonp" != h) || (u.url = p(u.url, "_=" + Date.now())), "jsonp" == h) return y || (u.url = p(u.url, u.jsonp ? u.jsonp + "=?" : !1 === u.jsonp ? "" : "callback=?")), e.ajaxJSONP(u, f);
                var b, w = u.accepts[h],
                    S = {},
                    C = function(e, t) {
                        S[e.toLowerCase()] = [e, t]
                    },
                    k = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol,
                    _ = u.xhr(),
                    A = _.setRequestHeader;
                if (f && f.promise(_), u.crossDomain || C("X-Requested-With", "XMLHttpRequest"), C("Accept", w || "*/*"), (w = u.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), _.overrideMimeType && _.overrideMimeType(w)), (u.contentType || !1 !== u.contentType && u.data && "GET" != u.type.toUpperCase()) && C("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)
                    for (v in u.headers) C(v, u.headers[v]);
                if (_.setRequestHeader = C, _.onreadystatechange = function() {
                        if (4 == _.readyState) {
                            _.onreadystatechange = l, clearTimeout(b);
                            var t, n = !1;
                            if (_.status >= 200 && _.status < 300 || 304 == _.status || 0 == _.status && "file:" == k) {
                                if (h = h || d(u.mimeType || _.getResponseHeader("content-type")), "arraybuffer" == _.responseType || "blob" == _.responseType) t = _.response;
                                else {
                                    t = _.responseText;
                                    try {
                                        t = c(t, h, u), "script" == h ? (0, eval)(t) : "xml" == h ? t = _.responseXML : "json" == h && (t = I.test(t) ? null : e.parseJSON(t))
                                    } catch (e) {
                                        n = e
                                    }
                                    if (n) return s(n, "parsererror", _, u, f)
                                }
                                a(t, _, u, f)
                            } else s(_.statusText || null, _.status ? "error" : "abort", _, u, f)
                        }
                    }, !1 === o(_, u)) return _.abort(), s(null, "abort", _, u, f), _;
                var j = !("async" in u) || u.async;
                if (_.open(u.type, u.url, j, u.username, u.password), u.xhrFields)
                    for (v in u.xhrFields) _[v] = u.xhrFields[v];
                for (v in S) A.apply(_, S[v]);
                return u.timeout > 0 && (b = setTimeout(function() {
                    _.onreadystatechange = l, _.abort(), s(null, "timeout", _, u, f)
                }, u.timeout)), _.send(u.data ? u.data : null), _
            }, e.get = function() {
                return e.ajax(f.apply(null, arguments))
            }, e.post = function() {
                var t = f.apply(null, arguments);
                return t.type = "POST", e.ajax(t)
            }, e.getJSON = function() {
                var t = f.apply(null, arguments);
                return t.dataType = "json", e.ajax(t)
            }, e.fn.load = function(t, n, r) {
                if (!this.length) return this;
                var i, o = this,
                    a = t.split(/\s/),
                    s = f(t, n, r),
                    u = s.success;
                return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function(t) {
                    o.html(i ? e("<div>").html(t.replace(b, "")).find(i) : t), u && u.apply(o, arguments)
                }, e.ajax(s), this
            };
            var _ = encodeURIComponent;
            e.param = function(t, n) {
                var r = [];
                return r.add = function(t, n) {
                    e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(_(t) + "=" + _(n))
                }, h(r, t, n), r.join("&").replace(/%20/g, "+")
            }
        }(u),
        function(e) {
            e.fn.serializeArray = function() {
                var t, n, r = [],
                    i = function e(n) {
                        if (n.forEach) return n.forEach(e);
                        r.push({
                            name: t,
                            value: n
                        })
                    };
                return this[0] && e.each(this[0].elements, function(r, o) {
                    n = o.type, t = o.name, t && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(e(o).val())
                }), r
            }, e.fn.serialize = function() {
                var e = [];
                return this.serializeArray().forEach(function(t) {
                    e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
                }), e.join("&")
            }, e.fn.submit = function(t) {
                if (0 in arguments) this.bind("submit", t);
                else if (this.length) {
                    var n = e.Event("submit");
                    this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            }
        }(u),
        function() {
            try {
                getComputedStyle(void 0)
            } catch (t) {
                var e = getComputedStyle;
                window.getComputedStyle = function(t, n) {
                    try {
                        return e(t, n)
                    } catch (e) {
                        return null
                    }
                }
            }
        }(),
        function(e) {
            function t(e, t) {
                var n = this.os = {},
                    r = this.browser = {},
                    i = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                    o = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    a = !!e.match(/\(Macintosh\; Intel /),
                    s = e.match(/(iPad).*OS\s([\d_]+)/),
                    u = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    c = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
                    l = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                    d = /Win\d{2}|Windows/.test(t),
                    p = e.match(/Windows Phone ([\d.]+)/),
                    m = l && e.match(/TouchPad/),
                    f = e.match(/Kindle\/([\d.]+)/),
                    h = e.match(/Silk\/([\d._]+)/),
                    g = e.match(/(BlackBerry).*Version\/([\d.]+)/),
                    v = e.match(/(BB10).*Version\/([\d.]+)/),
                    y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                    P = e.match(/PlayBook/),
                    b = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                    w = e.match(/Firefox\/([\d.]+)/),
                    S = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                    C = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                    k = !b && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                    I = k || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
                (r.webkit = !!i) && (r.version = i[1]), o && (n.android = !0, n.version = o[2]), c && !u && (n.ios = n.iphone = !0, n.version = c[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), u && (n.ios = n.ipod = !0, n.version = u[3] ? u[3].replace(/_/g, ".") : null), p && (n.wp = !0, n.version = p[1]), l && (n.webos = !0, n.version = l[2]), m && (n.touchpad = !0), g && (n.blackberry = !0, n.version = g[2]), v && (n.bb10 = !0, n.version = v[2]), y && (n.rimtabletos = !0, n.version = y[2]), P && (r.playbook = !0), f && (n.kindle = !0, n.version = f[1]), h && (r.silk = !0, r.version = h[1]), !h && n.android && e.match(/Kindle Fire/) && (r.silk = !0), b && (r.chrome = !0, r.version = b[1]), w && (r.firefox = !0, r.version = w[1]), S && (n.firefoxos = !0, n.version = S[1]), C && (r.ie = !0, r.version = C[1]), I && (a || n.ios || d) && (r.safari = !0, n.ios || (r.version = I[1])), k && (r.webview = !0), n.tablet = !!(s || P || o && !e.match(/Mobile/) || w && e.match(/Tablet/) || C && !e.match(/Phone/) && e.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || c || l || g || v || b && e.match(/Android/) || b && e.match(/CriOS\/([\d.]+)/) || w && e.match(/Mobile/) || C && e.match(/Touch/)))
            }
            t.call(e, navigator.userAgent, navigator.platform), e.__detect = t
        }(u),
        function(e) {
            var t, n = [];
            e.fn.remove = function() {
                return this.each(function() {
                    this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", t && clearTimeout(t), t = setTimeout(function() {
                        n = []
                    }, 6e4)), this.parentNode.removeChild(this))
                })
            }
        }(u),
        function(e) {
            function t(t, r) {
                var u = t[s],
                    c = u && i[u];
                if (void 0 === r) return c || n(t);
                if (c) {
                    if (r in c) return c[r];
                    var l = a(r);
                    if (l in c) return c[l]
                }
                return o.call(e(t), r)
            }

            function n(t, n, o) {
                var u = t[s] || (t[s] = ++e.uuid),
                    c = i[u] || (i[u] = r(t));
                return void 0 !== n && (c[a(n)] = o), c
            }

            function r(t) {
                var n = {};
                return e.each(t.attributes || u, function(t, r) {
                    0 == r.name.indexOf("data-") && (n[a(r.name.replace("data-", ""))] = e.zepto.deserializeValue(r.value))
                }), n
            }
            var i = {},
                o = e.fn.data,
                a = e.camelCase,
                s = e.expando = "Zepto" + +new Date,
                u = [];
            e.fn.data = function(r, i) {
                return void 0 === i ? e.isPlainObject(r) ? this.each(function(t, i) {
                    e.each(r, function(e, t) {
                        n(i, e, t)
                    })
                }) : 0 in this ? t(this[0], r) : void 0 : this.each(function() {
                    n(this, r, i)
                })
            }, e.data = function(t, n, r) {
                return e(t).data(n, r)
            }, e.hasData = function(t) {
                var n = t[s],
                    r = n && i[n];
                return !!r && !e.isEmptyObject(r)
            }, e.fn.removeData = function(t) {
                return "string" == typeof t && (t = t.split(/\s+/)), this.each(function() {
                    var n = this[s],
                        r = n && i[n];
                    r && e.each(t || r, function(e) {
                        delete r[t ? a(this) : e]
                    })
                })
            }, ["remove", "empty"].forEach(function(t) {
                var n = e.fn[t];
                e.fn[t] = function() {
                    var e = this.find("*");
                    return "remove" === t && (e = e.add(this)), e.removeData(), n.call(this)
                }
            })
        }(u),
        function(e) {
            function t(n) {
                var r = [
                        ["resolve", "done", e.Callbacks({
                            once: 1,
                            memory: 1
                        }), "resolved"],
                        ["reject", "fail", e.Callbacks({
                            once: 1,
                            memory: 1
                        }), "rejected"],
                        ["notify", "progress", e.Callbacks({
                            memory: 1
                        })]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return t(function(t) {
                                e.each(r, function(r, i) {
                                    var s = e.isFunction(n[r]) && n[r];
                                    a[i[1]](function() {
                                        var n = s && s.apply(this, arguments);
                                        if (n && e.isFunction(n.promise)) n.promise().done(t.resolve).fail(t.reject).progress(t.notify);
                                        else {
                                            var r = this === o ? t.promise() : this,
                                                a = s ? [n] : arguments;
                                            t[i[0] + "With"](r, a)
                                        }
                                    })
                                }), n = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? e.extend(t, o) : o
                        }
                    },
                    a = {};
                return e.each(r, function(e, t) {
                    var n = t[2],
                        s = t[3];
                    o[t[1]] = n.add, s && n.add(function() {
                        i = s
                    }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? o : this, arguments), this
                    }, a[t[0] + "With"] = n.fireWith
                }), o.promise(a), n && n.call(a, a), a
            }
            var n = Array.prototype.slice;
            e.when = function(r) {
                var i, o, a, s = n.call(arguments),
                    u = s.length,
                    c = 0,
                    l = 1 !== u || r && e.isFunction(r.promise) ? u : 0,
                    d = 1 === l ? r : t(),
                    p = function(e, t, r) {
                        return function(o) {
                            t[e] = this, r[e] = arguments.length > 1 ? n.call(arguments) : o, r === i ? d.notifyWith(t, r) : --l || d.resolveWith(t, r)
                        }
                    };
                if (u > 1)
                    for (i = new Array(u), o = new Array(u), a = new Array(u); c < u; ++c) s[c] && e.isFunction(s[c].promise) ? s[c].promise().done(p(c, a, s)).fail(d.reject).progress(p(c, o, i)) : --l;
                return l || d.resolveWith(a, s), d.promise()
            }, e.Deferred = t
        }(u),
        function(e) {
            e.Callbacks = function(t) {
                t = e.extend({}, t);
                var n, r, i, o, a, s, u = [],
                    c = !t.once && [],
                    l = function e(l) {
                        for (n = t.memory && l, r = !0, s = o || 0, o = 0, a = u.length, i = !0; u && s < a; ++s)
                            if (!1 === u[s].apply(l[0], l[1]) && t.stopOnFalse) {
                                n = !1;
                                break
                            }
                        i = !1, u && (c ? c.length && e(c.shift()) : n ? u.length = 0 : d.disable())
                    },
                    d = {
                        add: function() {
                            if (u) {
                                var r = u.length;
                                ! function n(r) {
                                    e.each(r, function(e, r) {
                                        "function" == typeof r ? t.unique && d.has(r) || u.push(r) : r && r.length && "string" != typeof r && n(r)
                                    })
                                }(arguments), i ? a = u.length : n && (o = r, l(n))
                            }
                            return this
                        },
                        remove: function() {
                            return u && e.each(arguments, function(t, n) {
                                for (var r;
                                    (r = e.inArray(n, u, r)) > -1;) u.splice(r, 1), i && (r <= a && --a, r <= s && --s)
                            }), this
                        },
                        has: function(t) {
                            return !(!u || !(t ? e.inArray(t, u) > -1 : u.length))
                        },
                        empty: function() {
                            return a = u.length = 0, this
                        },
                        disable: function() {
                            return u = c = n = void 0, this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return c = void 0, n || d.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(e, t) {
                            return !u || r && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : l(t)), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments)
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return d
            }
        }(u),
        function(e) {
            function t(t) {
                return t = e(t), !(!t.width() && !t.height()) && "none" !== t.css("display")
            }

            function n(e, t) {
                e = e.replace(/=#\]/g, '="#"]');
                var n, r, i = s.exec(e);
                if (i && i[2] in a && (n = a[i[2]], r = i[3], e = i[1], r)) {
                    var o = Number(r);
                    r = isNaN(o) ? r.replace(/^["']|["']$/g, "") : o
                }
                return t(e, n, r)
            }
            var r = e.zepto,
                i = r.qsa,
                o = r.matches,
                a = e.expr[":"] = {
                    visible: function() {
                        if (t(this)) return this
                    },
                    hidden: function() {
                        if (!t(this)) return this
                    },
                    selected: function() {
                        if (this.selected) return this
                    },
                    checked: function() {
                        if (this.checked) return this
                    },
                    parent: function() {
                        return this.parentNode
                    },
                    first: function(e) {
                        if (0 === e) return this
                    },
                    last: function(e, t) {
                        if (e === t.length - 1) return this
                    },
                    eq: function(e, t, n) {
                        if (e === n) return this
                    },
                    contains: function(t, n, r) {
                        if (e(this).text().indexOf(r) > -1) return this
                    },
                    has: function(e, t, n) {
                        if (r.qsa(this, n).length) return this
                    }
                },
                s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
                u = /^\s*>/,
                c = "Zepto" + +new Date;
            r.qsa = function(t, o) {
                return n(o, function(n, a, s) {
                    try {
                        var l;
                        !n && a ? n = "*" : u.test(n) && (l = e(t).addClass(c), n = "." + c + " " + n);
                        var d = i(t, n)
                    } catch (e) {
                        throw console.error("error performing selector: %o", o), e
                    } finally {
                        l && l.removeClass(c)
                    }
                    return a ? r.uniq(e.map(d, function(e, t) {
                        return a.call(e, t, d, s)
                    })) : d
                })
            }, r.matches = function(e, t) {
                return n(t, function(t, n, r) {
                    return (!t || o(e, t)) && (!n || n.call(e, null, r) === e)
                })
            }
        }(u),
        function(e) {
            function t(e, t, n, r) {
                return Math.abs(e - t) >= Math.abs(n - r) ? e - t > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
            }

            function n() {
                l = null, p.last && (p.el.trigger("longTap"), p = {})
            }

            function r() {
                l && clearTimeout(l), l = null
            }

            function i() {
                s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), s = u = c = l = null, p = {}
            }

            function o(e) {
                return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
            }

            function a(e, t) {
                return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
            }
            var s, u, c, l, d, p = {};
            e(document).ready(function() {
                var m, f, h, g, v = 0,
                    y = 0;
                "MSGesture" in window && (d = new MSGesture, d.target = document.body), e(document).bind("MSGestureEnd", function(e) {
                    var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                    t && (p.el.trigger("swipe"), p.el.trigger("swipe" + t))
                }).on("touchstart MSPointerDown pointerdown", function(t) {
                    (g = a(t, "down")) && !o(t) || (h = g ? t : t.touches[0], t.touches && 1 === t.touches.length && p.x2 && (p.x2 = void 0, p.y2 = void 0), m = Date.now(), f = m - (p.last || m), p.el = e("tagName" in h.target ? h.target : h.target.parentNode), s && clearTimeout(s), p.x1 = h.pageX, p.y1 = h.pageY, f > 0 && f <= 250 && (p.isDoubleTap = !0), p.last = m, l = setTimeout(n, 750), d && g && d.addPointer(t.pointerId))
                }).on("touchmove MSPointerMove pointermove", function(e) {
                    (g = a(e, "move")) && !o(e) || (h = g ? e : e.touches[0], r(), p.x2 = h.pageX, p.y2 = h.pageY, v += Math.abs(p.x1 - p.x2), y += Math.abs(p.y1 - p.y2))
                }).on("touchend MSPointerUp pointerup", function(n) {
                    (g = a(n, "up")) && !o(n) || (r(), p.x2 && Math.abs(p.x1 - p.x2) > 30 || p.y2 && Math.abs(p.y1 - p.y2) > 30 ? c = setTimeout(function() {
                        p.el && (p.el.trigger("swipe"), p.el.trigger("swipe" + t(p.x1, p.x2, p.y1, p.y2))), p = {}
                    }, 0) : "last" in p && (v < 30 && y < 30 ? u = setTimeout(function() {
                        var t = e.Event("tap");
                        t.pageX = p.x2 || p.x1 || 0, t.pageY = p.y2 || p.y1 || 0, t.cancelTouch = i, p.el && p.el.trigger(t), p.isDoubleTap ? (p.el && p.el.trigger("doubleTap"), p = {}) : s = setTimeout(function() {
                            s = null, p.el && p.el.trigger("singleTap"), p = {}
                        }, 250)
                    }, 0) : p = {}), v = y = 0)
                }).on("touchcancel MSPointerCancel pointercancel", i), e(window).on("scroll", i)
            }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
                e.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })
        }(u),
        function(e) {
            if (e.os.ios) {
                var t = function(e) {
                        return "tagName" in e ? e : e.parentNode
                    },
                    n = {};
                e(document).bind("gesturestart", function(e) {
                    var r = Date.now();
                    n.last;
                    n.target = t(e.target), n.e1 = e.scale, n.last = r
                }).bind("gesturechange", function(e) {
                    n.e2 = e.scale
                }).bind("gestureend", function(t) {
                    n.e2 > 0 ? (0 != Math.abs(n.e1 - n.e2) && e(n.target).trigger("pinch") && e(n.target).trigger("pinch" + (n.e1 - n.e2 > 0 ? "In" : "Out")), n.e1 = n.e2 = n.last = 0) : "last" in n && (n = {})
                }), ["pinch", "pinchIn", "pinchOut"].forEach(function(t) {
                    e.fn[t] = function(e) {
                        return this.bind(t, e)
                    }
                })
            }
        }(u),
        function(e) {
            e.fn.end = function() {
                return this.prevObject || e()
            }, e.fn.andSelf = function() {
                return this.add(this.prevObject || e())
            }, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(t) {
                var n = e.fn[t];
                e.fn[t] = function() {
                    var e = n.apply(this, arguments);
                    return e.prevObject = this, e
                }
            })
        }(u),
        function(e) {
            void 0 === String.prototype.trim && (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            }), void 0 === Array.prototype.reduce && (Array.prototype.reduce = function(e) {
                if (void 0 === this || null === this) throw new TypeError;
                var t, n = Object(this),
                    r = n.length >>> 0,
                    i = 0;
                if ("function" != typeof e) throw new TypeError;
                if (0 == r && 1 == arguments.length) throw new TypeError;
                if (arguments.length >= 2) t = arguments[1];
                else
                    for (;;) {
                        if (i in n) {
                            t = n[i++];
                            break
                        }
                        if (++i >= r) throw new TypeError
                    }
                for (; i < r;) i in n && (t = e.call(void 0, t, n[i], i, n)), i++;
                return t
            })
        }(), e.exports = u
}, function(e, t, n) {
    e.exports = {
        default: n(45),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        i = n(17),
        o = n(34),
        a = n(3),
        s = n(19),
        u = n(52),
        c = n(24),
        l = n(38),
        d = n(7)("iterator"),
        p = !([].keys && "next" in [].keys()),
        m = function() {
            return this
        };
    e.exports = function(e, t, n, f, h, g, v) {
        u(n, t, f);
        var y, P, b, w = function(e) {
                if (!p && e in I) return I[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            S = t + " Iterator",
            C = "values" == h,
            k = !1,
            I = e.prototype,
            T = I[d] || I["@@iterator"] || h && I[h],
            _ = T || w(h),
            A = h ? C ? w("entries") : _ : void 0,
            j = "Array" == t ? I.entries || T : T;
        if (j && (b = l(j.call(new e))) !== Object.prototype && b.next && (c(b, S, !0), r || "function" == typeof b[d] || a(b, d, m)), C && T && "values" !== T.name && (k = !0, _ = function() {
                return T.call(this)
            }), r && !v || !p && !k && I[d] || a(I, d, _), s[t] = _, s[S] = m, h)
            if (y = {
                    values: C ? _ : w("values"),
                    keys: g ? _ : w("keys"),
                    entries: A
                }, v)
                for (P in y) P in I || o(I, P, y[P]);
            else i(i.P + i.F * (p || k), t, y);
        return y
    }
}, function(e, t, n) {
    e.exports = !n(5) && !n(10)(function() {
        return 7 != Object.defineProperty(n(33)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var r = n(9),
        i = n(0).document,
        o = r(i) && r(i.createElement);
    e.exports = function(e) {
        return o ? i.createElement(e) : {}
    }
}, function(e, t, n) {
    e.exports = n(3)
}, function(e, t, n) {
    var r = n(12),
        i = n(53),
        o = n(23),
        a = n(21)("IE_PROTO"),
        s = function() {},
        u = function() {
            var e, t = n(33)("iframe"),
                r = o.length;
            for (t.style.display = "none", n(58).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
            return u()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
    }
}, function(e, t, n) {
    var r = n(2),
        i = n(6),
        o = n(55)(!1),
        a = n(21)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = i(e),
            u = 0,
            c = [];
        for (n in s) n != a && r(s, n) && c.push(n);
        for (; t.length > u;) r(s, n = t[u++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    var r = n(2),
        i = n(25),
        o = n(21)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    var r = n(36),
        i = n(23).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(74),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)"),
            n = document.cookie.match(t);
        if (!n || !n[2]) return "";
        var r = n[2];
        try {
            return /(%[0-9A-F]{2}){2,}/.test(r) ? decodeURIComponent(r) : unescape(r)
        } catch (e) {
            return unescape(r)
        }
    }

    function i(e, t, n, r, i, o) {
        var a = new Date,
            n = arguments[2] || null,
            r = arguments[3] || "/",
            i = arguments[4] || null,
            o = arguments[5] || !1;
        n && a.setMinutes(a.getMinutes() + parseInt(n)), document.cookie = e + "=" + escape(t) + (n ? ";expires=" + a.toGMTString() : "") + (r ? ";path=" + r : "") + (i ? ";domain=" + i : "") + (o ? ";secure" : "")
    }

    function o(e, t, n, i) {
        if (null != r(e)) {
            var o = new Date;
            o.setMinutes(o.getMinutes() - 1e3), t = t || "/", document.cookie = e + "=;expires=" + o.toGMTString() + (t ? ";path=" + t : "") + (n ? ";domain=" + n : "") + (i ? ";secure" : "")
        }
    }
    e.exports = {
        get: r,
        set: i,
        del: o
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            try {
                if (!Be) return;
                (0, de.default)("title").text("京东商城"), JSSDK.WebView.setTitleText("京东商城")
            } catch (e) {
                console.log("initPingouHeader error", e)
            }
        }

        function o() {
            var e = (0, de.default)("#slideWrapper");
            e.length && (me.default.init({
                tp: "img",
                moveDom: e.find(".j_slide_list"),
                moveChild: e.find(".j_slide_li"),
                tab: e.find(".j_slide_nav span"),
                len: e.find(".j_slide_li").length,
                index: 1,
                loopScroll: !0,
                lockScrY: !0,
                enableTransX: !0,
                tabClass: "active",
                autoTime: parseInt((0, de.default)(".slide_time").data("slide_time")) || 3e3,
                fun: function(t) {
                    !je && G(e) && (0, de.default)(".j_slide_li").each(function(e) {
                        var n = (0, de.default)(this);
                        e == t && !n.hasClass(ke) && n.data("exposal_url") && (n.addClass(ke), q(n.data("exposal_url")), P(4, 0, "首焦轮播广告index=" + t)), e == t + 1 && n.find("img[init_src]").each(function() {
                            (0, de.default)(this).attr("src", (0, de.default)(this).attr("init_src")).removeAttr("init_src")
                        })
                    }), (0, de.default)(".j_slide_li").each(function(e) {
                        var n = (0, de.default)(this);
                        e == t + 1 && n.find("img[init_src]").each(function() {
                            (0, de.default)(this).attr("src", (0, de.default)(this).attr("init_src")).removeAttr("init_src")
                        })
                    })
                }
            }), e.find(".j_slide_li").each(function(e) {
                (0, de.default)(this).css({
                    left: 100 * e + "%"
                })
            }))
        }

        function a() {
            var e = document.querySelectorAll(".catchimg");
            e = Array.prototype.slice.call(e, 0), e.forEach(function(e) {
                var t = e.querySelectorAll(".catchimg-skus");
                t = Array.prototype.slice.call(t, 0);
                var n = e.querySelectorAll(".catchimg-skus-link"),
                    r = e.clientWidth,
                    i = r / 750;
                t.forEach(function(t, r) {
                    var o = 0,
                        a = t.getAttribute("data-server-position"),
                        s = t.getAttribute("data-server-width"),
                        u = t.getAttribute("data-server-ani"),
                        c = s * i,
                        l = t.querySelectorAll(".catchimg-skus-item");
                    l = Array.prototype.slice.call(l, 0);
                    var d = l.length;
                    if (0 != d) {
                        var p = n[r];
                        l.forEach(function(e) {
                            var t = e.getAttribute("jump-href"),
                                n = e.getAttribute("data-sku_index");
                            t += t.indexOf("?") > -1 ? "&innerIndex=" + n : "?innerIndex=" + n, e.setAttribute("jump-href", t)
                        }), p.onclick = function(e) {
                            e.stopPropagation(), l[o].click()
                        }, 0 === r && (e.onclick = function(e) {
                            l[o].click()
                        }), a = a && a.split(","), p.style.left = t.style.left = 1 * a[0] * i + "px", p.style.top = t.style.top = 1 * a[1] * i + "px", p.style.width = t.style.width = c + "px", p.style.height = t.style.height = c + "px", p.style.display = t.style.display = "block", p.style.position = "absolute", 1 != d && 2 != u && (1 != u && 0 != u || setInterval(function() {
                            o++, o >= d && (o = 0), t.scrollTop = o ? o * c : 0
                        }, 2e3))
                    }
                })
            })
        }

        function s() {
            console.log("东家小院灰度");
            var e = document.querySelectorAll('[event_id="MHome_DGardenFloorExpo"]');
            e = Array.prototype.slice.call(e, 0), e.forEach(function(e) {
                var t = e.querySelectorAll("[jump-href]");
                t = Array.prototype.slice.call(t, 0), t.forEach(function(e) {
                    var t = e.getAttribute("jump-href"),
                        n = e.getAttribute("data-jump_innerindex");
                    e.setAttribute("jump-href", JD.url.addUrlParam(t, {
                        innerIndex: n
                    }))
                })
            })
        }

        function u() {
            var e = (0, de.default)(".j_slide_06001");
            e.length && e.each(function() {
                var e = (0, de.default)(this),
                    t = !0,
                    n = e.find(".slide_06001_li");
                if (n.length) {
                    var r = (0, de.default)(".j_slide_06001").offset().width,
                        i = Math.min(e.width(), r) * (358 / 375);
                    n.each(function() {
                        (0, de.default)(this).width(i)
                    }), me.default.init({
                        tp: "img",
                        viewDom: e,
                        moveDom: e.find(".slide_06001"),
                        moveChild: n,
                        len: n.length,
                        index: 1,
                        tab: e.find(".j_nav"),
                        loopScroll: !0,
                        lockScrY: !0,
                        enableTransX: !1,
                        tabClass: "active",
                        step: i,
                        autoTime: 3e3,
                        fun: function(r) {
                            if (t) {
                                t = !1;
                                var o = 0;
                                n = e.find(".slide_06001_li"), n.each(function() {
                                    (0, de.default)(this).width(i), (0, de.default)(this).css({
                                        left: o + "px"
                                    }), o += i
                                })
                            }
                            n.each(function(e) {
                                e == r ? (0, de.default)(this).css({
                                    transform: "scale(1)",
                                    webKitTransform: "scale(1)"
                                }) : (0, de.default)(this).css({
                                    transform: "scale(0.9)",
                                    webKitTransform: "scale(0.9)"
                                })
                            })
                        }
                    })
                }
            })
        }

        function c() {
            function e() {
                i = document.querySelector(".j_scroll_news .news_item");
                var e = i.offsetHeight + 8;
                r.style.transition = "transform 500ms ease-in-out", r.style.webkitTransition = "transform 500ms ease-in-out", r.style.transform = "translate3d(0, -" + e + "px, 0)", r.style.webkitTransform = "translate3d(0, -" + e + "px, 0)"
            }

            function t() {
                var e = setTimeout(function() {
                    clearTimeout(e), r.style.transition = "none", r.style.webkitTransition = "none", r.style.transform = "translate3d(0, 0px, 0)", r.style.webkitTransform = "translate3d(0, 0px, 0)", i && r.removeChild(i), i && r.appendChild(i)
                }, 0)
            }
            try {
                ! function() {
                    var e = document.querySelectorAll(".j_scroll_news .news_item");
                    e = Array.prototype.slice.call(e, 0), e.forEach(function(e) {
                        var t = e.children[0],
                            n = t.dataset.link,
                            r = t.getAttribute("jump-href"),
                            i = window.JD.url.getUrlParam("innerLink", r);
                        i = JSON.parse(decodeURIComponent(i));
                        var o = i.map(function(e) {
                                return e.innerAnchor
                            }).join("-"),
                            a = n + "?ids=" + o;
                        t.setAttribute("jump-href", a)
                    })
                }()
            } catch (e) {
                console.error("设置快报内外联动失败,error:", e)
            }
            var n = "onwebkittransitionend" in window ? "webkitTransitionEnd" : "transitionend",
                r = document.querySelector(".j_scroll_news"),
                i = null;
            r && (r.addEventListener(n, t), document.querySelectorAll(".j_scroll_news .news_item").length > 1 && setInterval(e, 2e3))
        }

        function l() {
            function e() {
                De = !0, j(), t.remove()
            }
            var t = (0, de.default)(".j_curtain_pingou"),
                n = !1,
                r = 1 == Ce.default.local.getItem("m_jd_index_curtain_pingou");
            return Be && !r && (Ce.default.local.setItem("m_jd_index_curtain_pingou", 1, !0, 31536e5), n = !0, t.css({
                display: "block",
                opacity: 1
            }), H({
                eventId: "MHome_CurtainExpo",
                eventParam: "A"
            }), (0, de.default)(".j_close_curtain_pingou").click(function() {
                e()
            }), (0, de.default)(".j_btn_curtain_pingou").click(function(t) {
                t.stopPropagation(), e()
            }), setTimeout(function() {
                t && t.remove()
            }, 5e3)), n
        }

        function d() {
            if (!l()) {
                var e = document.querySelector(".j_curtain");
                if (e) {
                    var t, n = function() {
                            De = !0, j(), e && e.parentNode && e.parentNode.removeChild(e)
                        },
                        r = new Date,
                        i = "" + r.getFullYear() + (r.getMonth() + 1) + r.getDate();
                    if (Ce.default.local.getItem("m_jd_index_curtain") == i) return De = !0, void n();
                    Ce.default.local.setItem("m_jd_index_curtain", i, !0, 86400), window.activeData && window.activeData.length ? (window.activeData.forEach(function(e) {
                        var n = e.starttime ? new Date(e.starttime) : -1 / 0,
                            i = e.endtime ? new Date(e.endtime) : 1 / 0;
                        r <= i && r >= n && (t = e)
                    }), t && t.pic && t.url && 1 == t.aShow && ((0, de.default)(".j_curtain_link").attr("jump-href", t.url), (0, de.default)(".j_curtain_pic").attr("src", window.JD ? JD.img.getImgUrl(t.pic) : t.pic), e.style.display = "block", e.style.opacity = 1, H({
                        eventId: "MHome_CurtainExpo",
                        eventParam: "B"
                    })), (0, de.default)(".j_close_curtain").click(function() {
                        n()
                    }), (0, de.default)(".j_curtain").click(function(e) {
                        var t = (0, de.default)(e.target || e.srcElement);
                        n(), t.hasClass("j_curtain_pic") || t.hasClass("j_curtain_link") || H({
                            eventId: "MHome_CurtainClose",
                            eventParam: "B"
                        })
                    })) : De = !0
                }
            }
        }

        function p() {
            var e = JD.url.getUrlParam("debug_skuids"),
                t = e || he.default.get("sk_history");
            t = t.replace(/"/g, "").split(",").filter(function(e) {
                return /^[0-9]+$/.test(e)
            }).slice(0, 4), t.length < 4 || function() {
                h(t, function(e) {
                    if (e && 4 === e.length) {
                        var n = Pe.default.formatJson("footPrintSkuTpl", {
                            skuList: e
                        });
                        (0, de.default)(".j_foot_print_sku_list").html(n), (0, de.default)("#footPrintFloor").show(), (0, de.default)("#footPrintSeat").hide(), H({
                            eventId: "MHome_FootFloorExpo"
                        }), we.default.autoLoadImage({
                            container: "footPrintFloor",
                            skip_invisible: !0
                        }), g(t, function(e) {
                            if (e)
                                for (var t in e) {
                                    var n = e[t].price,
                                        r = n.split(".")[0],
                                        i = n.split(".")[1],
                                        o = '<span class="int">暂无报价</span>';
                                    parseFloat(n) > 0 && (o = '<span class="symbol">￥</span> <span class="int">' + r + '</span> <span class="float" style="margin-left: 0;">.' + i + "</span>"), (0, de.default)('.j_fp_sku[sku_id="' + t + '"]').find(".j_fp_sku_price").html(o)
                                }
                        }), m(t, function(e) {
                            if (e)
                                for (var t in e)(0, de.default)('.j_fp_sku[sku_id="' + t + '"]').find(".j_fp_sku_tag").html(e[t])
                        })
                    } else(0, de.default)("#footPrintFloor").hide()
                })
            }()
        }

        function m(e, t) {
            var n = y("getSkuPromotionInfo"),
                r = [];
            e && e.length && e.forEach(function(e) {
                r.push("J_" + e)
            }), window[n] = function(e) {
                console.log(e);
                var n = {
                        3: "赠券",
                        4: "赠京豆",
                        5: "赠品",
                        11: "会员特价",
                        22: "京豆优惠购",
                        55: "满减",
                        57: "加价购",
                        58: "满赠",
                        59: "多买优惠",
                        60: "换购",
                        80: "plus赠品"
                    },
                    r = {};
                e && e.length && e.forEach(function(e) {
                    var t = e.pid,
                        i = [];
                    e && e.pf && e.pf.length && e.pf.forEach(function(e) {
                        if (n[e]) {
                            var t = n[e];
                            i.push('<span class="ellipse"> <em>' + t + "</em> <span>" + t + "</span> </span>")
                        }
                    }), i.length && (r[t] = i.slice(0, 2).join(""))
                }), t && t(r)
            }, ve.default.loadScript({
                url: "//pf.3.cn/flags/mgets?skuids=" + r.join(",") + "&origin=1&source=m_index&area=" + v() + "&callback=" + n,
                charset: "utf-8",
                onError: function() {
                    t && t(!1)
                },
                onTimeout: function() {
                    t && t(!1)
                }
            })
        }

        function f(e, t, n) {
            return e.indexOf("360buyimg.com") >= 0 ? JD.img.getImgUrl(e, t, n) : JD.img.getImgUrl("//img1" + ~~(5 * Math.random()) + ".360buyimg.com/n7/" + e, t, n)
        }

        function h(e, t) {
            var n = y("getSkuInfo");
            window[n] = function(n) {
                var r = [];
                for (var i in n) {
                    var o = n[i];
                    r.push({
                        name: o.name,
                        img: f(o.imagePath, 180, 180),
                        link: "//item.m.jd.com/product/" + i + ".html",
                        skuId: i
                    })
                }
                r.sort(function(t, n) {
                    return e.indexOf(t.skuId) - e.indexOf(n.skuId)
                }), t && t(r)
            }, ve.default.loadScript({
                url: "//yx.3.cn/service/info.action?ids=" + e.join(",") + "&callback=" + n,
                charset: "utf-8",
                onError: function() {
                    t && t(!1)
                },
                onTimeout: function() {
                    t && t(!1)
                }
            })
        }

        function g(e, t) {
            for (var n = {}, r = 0, i = [], o = 0, a = 0;;) {
                var s = e.slice(20 * r, 20 * (r + 1));
                if (i.push(s), 20 * (r + 1) > e.length) break;
                r++
            }
            i.forEach(function(e, r) {
                var i = y("realTimePriceCB");
                o++, window[i] = function(e) {
                    a++;
                    for (var r = e.length, i = 0; i < r; i++) n[e[i].id] = {
                        price: e[i].p,
                        plusPrice: e[i].tpp
                    };
                    o == a && t && t(n)
                }, ve.default.loadScript({
                    url: "//pe.3.cn/prices/mgets?skuids=" + e.join(",") + "&area=" + v() + "&origin=4&source=wxsqpage&callback=" + i + "&t=" + Math.random(),
                    charset: "utf-8"
                })
            })
        }

        function v() {
            return (JD.cookie.get("jdAddrId") || JD.cookie.get("jdLOCAddrId") || "1_72_4139_0").split("_").slice(0, 3).join("_")
        }

        function y(e) {
            for (var t = e + Math.ceil(1e6 * Math.random()); window[t];) t = e + Math.ceil(1e6 * Math.random());
            return t
        }

        function P(e, t, n) {
            try {
                JD.report.umpBiz({
                    bizid: 975,
                    operation: e,
                    result: t,
                    source: "0",
                    message: (n || "").replace(/[,，]/g, "").replace(/\s+/g, "")
                }), 0 != t && console.log("%cUMP:" + n, "color:red;")
            } catch (e) {
                console.log(e)
            }
        }

        function b() {
            var e;
            try {
                e = window.m_recommend[0]
            } catch (e) {
                console.error("页面片/sinclude/update/wx/2018/9/m-recommend.html丢失！或者数据格式被修改!" + e)
            }
            return e || {}
        }

        function w(e, t) {
            var n = b(),
                r = n.recommendId || 6163,
                i = 1 * n.pageCount || 22;
            (0, de.default)(".j_scroll_load_rec").show(), 0 == e && H({
                eventId: "Mhome_BRecommendExpo"
            }), de.default.ajax({
                dataType: "jsonp",
                url: "https://wqcoss.jd.com/mcoss/reclike/getrecinfo",
                data: {
                    pi: e,
                    pc: i,
                    recpos: r,
                    hi: "{page:" + e + ",pagesize:" + i + "}"
                },
                success: function(r) {
                    if (P(2, 0, "猜你喜欢接口调用成功"), 1 == r.openbp) return 1 == e && (0, de.default)("#recFloor").hide(), void(t && t(!1));
                    if (1 == e && (0, de.default)("#recFloor").show(), r.data instanceof Array && r.data.length) {
                        var i = (0, de.default)(".j_similar_li").length;
                        r.data.forEach(function(t, o) {
                            if (1 == t.jpnonshow) t._showPrice0 = "待发布";
                            else if (0 == t.jpnonshow && t.jp) {
                                var a = t.jp / 100 + "";
                                if (t._showPrice0 = a.split(".")[0] || "", t._showPrice1 = a.split(".")[1] || "", t.dpicon && t.dpicon.icon > 0) {
                                    var s = "¥ " + t.dpicon.p / 100;
                                    t._dbPrice = 3 == t.dpicon.icon ? "<del>" + s + "</del>" : s
                                }
                                t._priceTag = C(t), t._dbPriceTag = k(t), t._textIcon = S(t.icon)
                            } else console.error("推荐数据缺少jp！！！");
                            if (t.yd && (t.yd._time = T(1e3 * t.yd.start) + "-" + T(1e3 * t.yd.end)), t.t = t.t.trim(), t._sourceValue = _(e, o, t, r.flow, r.impr), t._img = f(t.img, 372, 372), t._showIndex = ++i, n.iconCorner instanceof Array && n.iconCorner[0]) {
                                var u = n.iconCorner[0],
                                    c = 1 * new Date(u.beginTime),
                                    l = 1 * new Date(u.endTime),
                                    d = 1 * new Date;
                                u && 1 == t.prom && d >= c && d <= l && (t._promTag = JD.img.getImgUrl(u.img, "30", "30"))
                            }
                        });
                        var o = Pe.default.formatJson("recSkuTpl", {
                            sourceUrl: "//st.360buyimg.com",
                            skuList: r.data
                        });
                        0 == e ? (0, de.default)(".j_rec_goods_list").html(o) : (0, de.default)(".j_rec_goods_list").append(o), (0, de.default)(".j_scroll_load_rec").hide(), r.impr && L(0, r.impr), we.default.autoLoadImage({
                            container: "recFloor",
                            skip_invisible: !0
                        });
                        var a = setTimeout(function() {
                            clearTimeout(a), I(), U()
                        }, 200);
                        t && t(!0)
                    }
                },
                error: function() {
                    1 == e && (0, de.default)("#recFloor").hide(), P(2, 1, "猜你喜欢接口调用出错"), t && t(!1)
                }
            })
        }

        function S(e) {
            var t = "";
            try {
                t = window.m_recommend[0].iconList.filter(function(t) {
                    return t.key == e
                }), t = t[0] ? t[0].iconImg : ""
            } catch (e) {
                console.error("页面片/sinclude/update/wx/2018/3/ppms_recom.shtml丢失,或者数据格式被篡改！" + e)
            }
            return t
        }

        function C(e) {
            if (e.paicon > 0) {
                var t;
                return window.m_recommend[0].cxList.forEach(function(n) {
                    e.paicon == n.key && (t = n)
                }), t ? t.cxText : ""
            }
            return ""
        }

        function k(e) {
            if (e.dpicon instanceof Object && e.dpicon.icon > 0) {
                var t;
                return window.m_recommend[0].cxList.forEach(function(n) {
                    "db" + e.dpicon.icon == n.key && (t = n)
                }), t ? t.cxText : ""
            }
            return ""
        }

        function I() {
            (0, de.default)(".j_rec_goods_pic").each(function() {
                var e = (0, de.default)(this).parent().width();
                e >= 50 && (0, de.default)(this).css({
                    width: e,
                    height: e
                })
            })
        }

        function T(e) {
            var t = new Date(e);
            return t.getMonth() + 1 + "." + t.getDate()
        }

        function _(e, t, n, r, i) {
            var o = n.sku,
                a = n.source,
                s = n.sid;
            return [e, t, o, A("expid", i), r, s, a, "-100", A("reqsig", i), "-100", n.yd ? 1 : 0].join("_")
        }

        function A(e, t) {
            var n = arguments[1] || window.location.search,
                r = new RegExp(e + "=([^$|&]*)"),
                i = n.substr(n.indexOf("?") + 1).match(r);
            return null != i ? i[1] : ""
        }

        function j() {
            if (De && !Oe) {
                Oe = !0;
                window.getIpLocate = function(e) {
                    if (0 == e.code && e.data && "中国大陆" != e.data.countryName) {
                        var t = function() {
                            (0, de.default)("#locatePop").hide(), H({
                                eventId: "MHome_OverSeaClose"
                            })
                        };
                        H({
                            eventId: "MHome_OverSeaExpo"
                        }), (0, de.default)(".j_location_title").text(e.data.localCountryName), (0, de.default)(".j_location_desc").text(e.data.markedWords), (0, de.default)(".j_location_okay").text(e.data.buttonChange), (0, de.default)(".j_location_cancel").text(e.data.buttonStay), (0, de.default)("#locatePop").show(), (0, de.default)(".j_location_okay").click(function() {
                            H({
                                eventId: "MHome_OverSeaSwitch"
                            });
                            var t = setTimeout(function() {
                                clearTimeout(t), (0, de.default)("#locatePop").hide(), x(e.data.mUrl)
                            }, Ie)
                        }), (0, de.default)(".j_location_cancel").click(function() {
                            H({
                                eventId: "MHome_OverSeaStay"
                            }), (0, de.default)("#locatePop").hide()
                        }), (0, de.default)(".j_location_mask").click(function() {
                            t()
                        }), (0, de.default)(".j_location_close").click(function() {
                            t()
                        })
                    }
                }, ve.default.loadScript({
                    url: "//ip-dict.joybuy.com/countryQuery/get_country_by_ip?callback=getIpLocate",
                    charset: "utf-8"
                })
            }
        }

        function x(e) {
            M(e === Me), location.href = e
        }

        function M(e) {
            var t = window.pageYOffset,
                n = O();
            Te.length && (n.sksLeft = e ? 0 : Te.scrollLeft()), n.st = t, B(n)
        }

        function B(e) {
            var t = [];
            for (var n in e) t.push(n + "=" + e[n]);
            var r = t.length ? "#" + t.join("&") : "";
            history.replaceState("", document.title, location.href.replace(location.hash, "") + r)
        }

        function D(e) {
            var t = O();
            delete t[e], B(t)
        }

        function O() {
            var e = location.hash.substr(1),
                t = {};
            return e.replace(/([^?&]+)=([^?&]+)/g, function(e, n, r) {
                t[n] = r
            }), t
        }

        function q(e) {
            (new Image).src = e
        }

        function N() {
            function e() {
                M(), a.css({
                    position: "absolute"
                }), je = !0, Ae.unbind("scroll", n), i.hide(), (0, de.default)("#commonNav").hide(), (0, de.default)("#mainContent").hide(), (0, de.default)("#mCommonFooter").hide(), a.removeClass("skin_transparent"), a.css({
                    top: "0"
                });
                var e = setTimeout(function() {
                    clearTimeout(e), Ae.unbind("scroll", n)
                }, 100)
            }

            function t() {
                a.css({
                    position: "fixed"
                }), je = !1, (0, de.default)("#commonNav").show(), (0, de.default)("#mainContent").show(), (0, de.default)("#mCommonFooter").show(), a.addClass("skin_transparent"), Ae.unbind("scroll", n).scroll(n), Ae.scroll(), Q(!0)
            }

            function n() {
                u && (setTimeout(function() {
                    if (u = !0, c || window.pageYOffset >= 5 || !i.data("show") || je) a.css({
                        top: 0
                    }), i.hide(), o.hide();
                    else {
                        i.show(), o.show();
                        var e = i.length ? i.offset().height : 0;
                        a.css({
                            top: e
                        })
                    }
                    r(window.pageYOffset > 5 ? "home_normal" : "home_transparent")
                }, 0), u = !1)
            }

            function r(e) {
                window.JD && window.JD.M && window.JD.M.smartbox && window.JD.M.smartbox.changeTheam && JD.M.smartbox.changeTheam(e)
            }
            var i = (0, de.default)("#m_common_tip"),
                o = (0, de.default)("#pannelSeat"),
                a = (0, de.default)(".j_smart_box_wrapper");
            window.JD && window.JD.M && window.JD.M.smartbox && window.JD.M.smartbox.init && (window.JD.M.smartbox.init({
                css: "",
                sf: "home",
                isLogin: _e,
                smartboxBlock: "searchWrapper",
                shortCutShow: !0,
                showCb: function() {
                    e()
                },
                hideCb: function() {
                    t()
                }
            }), JD.M.smartbox.setLogin(_e));
            var s = (0, de.default)("#slideWrapper").length ? (0, de.default)("#slideWrapper").offset().height : 0,
                u = !0,
                c = navigator.userAgent.indexOf("UCBrowser") > -1;
            s ? (Ae.unbind("scroll", n).scroll(n), Ae.scroll()) : r("home_normal")
        }

        function F() {
            try {
                MPing.inputs.Click.attachEvent()
            } catch (e) {}
            var e = (0, de.default)(".j_back_to_top");
            window.addEventListener("load", function() {
                xe = !0, p(), j(), Q(!0)
            }), e.click(function() {
                Ae.scrollTop(0)
            });
            var t = !0;
            Ae.scroll(function() {
                if (t) {
                    t = !1;
                    var n = setTimeout(function() {
                        t = !0, clearTimeout(n), window.pageYOffset > window.innerHeight ? e.show() : e.hide()
                    }, 200)
                }
            }), V(), W()
        }

        function L(e, t) {
            t && (t += "$m=MO_J2011-2$hitType=5$ref=$sid=" + JD.cookie.get("visitkey") + "|" + JD.cookie.get("_wga").split(".").pop(), q(t))
        }

        function J() {
            function e() {
                (o && n || n && G((0, de.default)(".j_rec_load_wrapper"))) && (o = !1, n = !1, w(t, function(i) {
                    n = !0, t >= s ? (n = !1, r.show()) : n = !0, i && t++, Ae.unbind("scroll", e);
                    var o = setTimeout(function() {
                        clearTimeout(o), Ae.unbind("scroll", e).scroll(e)
                    }, 1e3)
                })), i || (i = setTimeout(function() {
                    clearTimeout(i), I(), U()
                }, 100))
            }
            var t = 1,
                n = !0,
                r = (0, de.default)(".j_click_load_rec");
            (0, de.default)("#recFloor").delegate("[data-click_expo_url]", "click", function() {
                var e = (0, de.default)(this),
                    t = e.data("click_expo_url");
                t && (0 == e.data("source") ? L(1, t) : q(t))
            });
            var i, o = !0,
                a = b(),
                s = 1 * a.scrollPage || 2;
            Ae.unbind("scroll", e).scroll(e), e(), r.click(function() {
                r.hide(), w(t, function(n) {
                    n && t++, r.show(), Ae.unbind("scroll", e)
                })
            })
        }

        function U() {
            var e = (0, de.default)(".j_similar_goods:first-child").find(".similar-product").height();
            (0, de.default)(".similar-shop .shop-posre").each(function() {
                (0, de.default)(this).height(e - 1)
            })
        }

        function E() {
            (0, de.default)(".j_linear_color").each(function() {
                var e = (0, de.default)(this).data("color");
                e && -1 == e.indexOf(",") && (0, de.default)(this).css({
                    color: e
                })
            })
        }

        function R(e) {
            var t = (e.data("event_param") || "") + "";
            if (t && ("j_event_param" == t && (t = e.find(".j_event_param").text()), 0 === t.indexOf("j_garden_event_param"))) {
                t = t.replace(/^j_garden_event_param\((.*)\)$/, "$1");
                var n = t.split("|"),
                    r = {
                        biinfo: n[0] || "",
                        floorid: n[1] || "",
                        moduleid: n[2] || "",
                        position: n[3] || "",
                        sku: n[4] || "",
                        theme: n[5] || ""
                    };
                t = (0, se.default)(r)
            }
            if (H({
                    eventId: e.data("event_id"),
                    eventLevel: e.data("event_level"),
                    eventParam: t
                }), e.attr("jump-href")) var i = setTimeout(function() {
                clearTimeout(i), x(e.attr("jump-href"))
            }, Ie)
        }

        function V() {
            (0, de.default)(document).delegate("[data-event_id]", "click", function() {
                R((0, de.default)(this))
            })
        }

        function H(e) {
            if (e.eventId) try {
                var t = location.origin + location.pathname,
                    n = new MPing.inputs.Click(e.eventId);
                n.event_param = e.eventParam || "", n.event_level = e.eventLevel || "", t && (n.page_name = t), n.updateEventSeries(), n.page_param = "B";
                (new MPing).send(n)
            } catch (e) {}
        }

        function W() {
            var e = !0;
            Ae.scroll(function() {
                if (e) {
                    e = !1;
                    var t = setTimeout(function() {
                        clearTimeout(t), e = !0;
                        var n = (0, de.default)(".j_expo");
                        n.length && n.each(function() {
                            var e = (0, de.default)(this);
                            e.hasClass(ke) || !e.is(":hidden") && G(e) && (H({
                                eventId: e.attr("event_id"),
                                eventLevel: e.attr("event_level"),
                                eventParam: e.attr("event_param")
                            }), e.addClass(ke))
                        });
                        var r = (0, de.default)(".j_similar_li");
                        r.length && r.each(function() {
                            var e = (0, de.default)(this);
                            if (!e.is(":hidden")) {
                                var t = G(e),
                                    n = e.hasClass(ke);
                                if (!t && n) return e.removeClass(ke);
                                if (t && !n) {
                                    var r = e.attr("event_param");
                                    if (1 == e.data("source")) {
                                        var i = e.data("watch_expo_url");
                                        i && q(i)
                                    }
                                    H({
                                        eventId: e.attr("event_id"),
                                        eventParam: r
                                    }), e.addClass(ke)
                                }
                            }
                        })
                    }, 0)
                }
            })
        }

        function G(e) {
            var t = e.offset().top,
                n = e.offset().height,
                r = t + n,
                i = Ae.scrollTop(),
                o = Ae.height();
            return t >= i && t < i + o || (r >= i && r < i + o || t <= i && r >= i + o)
        }

        function z() {
            var e = new Date,
                t = e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate(),
                n = e.getHours(),
                r = n <= 5 ? 0 : Math.ceil((n - 5) / 2);
            return [{
                name: "0点场",
                endTime: new Date(t + " 06:00:00").getTime()
            }, {
                name: "6点场",
                endTime: new Date(t + " 08:00:00").getTime()
            }, {
                name: "8点场",
                endTime: new Date(t + " 10:00:00").getTime()
            }, {
                name: "10点场",
                endTime: new Date(t + " 12:00:00").getTime()
            }, {
                name: "12点场",
                endTime: new Date(t + " 14:00:00").getTime()
            }, {
                name: "14点场",
                endTime: new Date(t + " 16:00:00").getTime()
            }, {
                name: "16点场",
                endTime: new Date(t + " 18:00:00").getTime()
            }, {
                name: "18点场",
                endTime: new Date(t + " 20:00:00").getTime()
            }, {
                name: "20点场",
                endTime: new Date(t + " 22:00:00").getTime()
            }, {
                name: "22点场",
                endTime: new Date(t + " 00:00:00").getTime() + 864e5
            }][r]
        }

        function $() {
            function e() {
                var e = setTimeout(function() {
                    clearTimeout(e);
                    var t = (0, de.default)(".j_sk_list li:first-child img").width(),
                        n = (0, de.default)(".j_sk_list li:first-child img").height();
                    (0, de.default)(".j_sk_list").find("img").each(function() {
                        var e = (0, de.default)(this);
                        e.attr("data-src") && e.css({
                            width: t + "px",
                            height: n + "px"
                        })
                    })
                }, 0)
            }

            function t() {
                u && e(), u = !1;
                var t = Te.scrollLeft();
                a || (n.each(function() {
                    var e = (0, de.default)(this),
                        n = e.offset().left,
                        r = n + e.width(),
                        i = n - t,
                        o = r - t;
                    (i <= window.innerWidth && i >= 0 || o <= window.innerWidth && o >= 0) && e.find("img").each(function() {
                        var e = (0, de.default)(this);
                        e.attr("data-src") && e.attr("src", e.attr("data-src")).removeAttr("data-src")
                    })
                }), Te.find("img[data-src]").length || (a = !0)), t + Te.width() + 5 >= (0, de.default)(".j_sk_list").width() ? (s = !0, o && clearTimeout(o), o = setTimeout(function() {
                    clearTimeout(o), s && (0, de.default)(".j_scroll_more_sec_link").click()
                }, 200)) : s = !1
            }
            if (Te.length) {
                var n = (0, de.default)(".j_sk_list li"),
                    r = 0,
                    i = Te.offset().width / 4.65;
                n.each(function() {
                    (0, de.default)(this).hasClass("seckill-all-item") ? r += (0, de.default)(this).width() : ((0, de.default)(this).width(i), r += i)
                }), (0, de.default)(".j_sk_list").css({
                    width: r + 5
                }), Te.unbind("scroll", t).scroll(t);
                var o, a = !1,
                    s = !1,
                    u = !0,
                    c = z();
                (0, de.default)(".j_sec_order").text(c.name), (0, de.default)(".j_more_sec_link").each(function() {
                    (0, de.default)(this).attr("jump-href", Me)
                });
                var l = c.endTime,
                    d = l - (new Date).getTime(),
                    p = setInterval(function() {
                        d <= 0 && clearInterval(p), d -= 1e3;
                        var e = X(d);
                        (0, de.default)(".j_sk_h").text(e.h), (0, de.default)(".j_sk_m").text(e.m), (0, de.default)(".j_sk_s").text(e.s)
                    }, 1e3)
            }
        }

        function X(e) {
            e /= 1e3;
            var t = e / 3600,
                n = e % 3600 / 60,
                r = e % 60;
            return {
                h: Math.floor(t) < 10 ? "0" + Math.floor(t) : Math.floor(t),
                s: Math.floor(r) < 10 ? "0" + Math.floor(r) : Math.floor(r),
                m: Math.floor(n) < 10 ? "0" + Math.floor(n) : Math.floor(n)
            }
        }

        function Q(e) {
            var t = JD.url.getHashParam("st");
            t && parseInt(t) > 0 && Ae.scrollTop(parseInt(t)), ((0, de.default)("body").offset().height >= parseInt(t) || e) && D("st"), K()
        }

        function K() {
            var e = JD.url.getHashParam("sksLeft"),
                t = e ? parseInt(e) / 2 : 0,
                n = 0;
            D("sksLeft");
            var r = setInterval(function() {
                n += t, n >= parseInt(e) && clearInterval(r), e && Te.length && Te.scrollLeft(n)
            }, 50)
        }

        function Y() {
            var e = he.default.get("sk_history");
            e = e.replace(/"/g, "").split(",").filter(function(e) {
                return /^[0-9]+$/.test(e)
            }).slice(0, 4), H({
                eventId: "MHome_PageExpo",
                eventParam: "null_A1_" + (4 === e.length ? "B2" : "A2")
            })
        }

        function Z() {
            var e, t, n, r;
            e = (0, de.default)(".j_slide_li").length > 0, r = (0, de.default)(".j_app_box").length >= 10, t = (0, de.default)(".j_sk_li").length > 0, n = (0, de.default)(".j_scroll_news li").length > 0;
            var i = "";
            e || (i += ";首焦展示异常"), r || (i += ";百宝箱展示异常"), n || (i += ";京东快报展示异常"), t || (i += ";京东秒杀展示异常"), e && r && t && n ? P(3, 0, "m首页首屏展示正常") : P(3, 1, "m首页首屏展示异常," + i)
        }

        function ee() {
            function e(e) {
                console.log("-----------------处理floating数据------------------", r);
                var n = encodeURIComponent(r.floor),
                    i = Ce.default.local.getItem(n),
                    o = (0, de.default)("#ms-floating");
                "1" !== r.isShow && i || (H(e ? t.ppms.expo : t.survey.expo), o.css("display", "block").find("img").attr("src", r.img), o.click(function(i) {
                    "1" !== r.isShow && o.css("display", "none"), H(e ? t.ppms.click : t.survey.click), Ce.default.local.setItem(n, 1, !0, 31536e5);
                    var a = setTimeout(function() {
                        clearTimeout(a), location.href = r.href
                    }, 250)
                }))
            }
            var t = {
                    ppms: {
                        expo: {
                            eventId: "MHome_FloatExpo"
                        },
                        click: {
                            eventId: "MHome_FloatClick"
                        }
                    },
                    survey: {
                        expo: {
                            eventId: "MHome_FloatSurveyExpo",
                            eventParam: "NPS_M_SY_WY"
                        },
                        click: {
                            eventId: "MHome_FloatSurveyClick",
                            eventParam: "NPS_M_SY_WY"
                        }
                    }
                },
                n = window.ms_floating_config || [],
                r = void 0,
                i = JD.GLOBAL_CONFIG.NOW || Date.now();
            if (n.forEach(function(e) {
                    new Date(e.start) <= new Date(i) && new Date(e.end) >= new Date(i) && (r = e)
                }), r)
                if ("1" === r.effective) e(1);
                else {
                    var o = (0, de.default)("#ms-floating .survey");
                    o.length && o.data("url").trim() && (r.href = o.data("url"), e(0))
                }
        }

        function te() {
            if ((0, de.default)(".mall_nav_swiper-pagination").length) {
                var e = (0, de.default)(".box_wrapper .box_list.position-ab"),
                    t = (0, de.default)(".box_wrapper .box_list.position-ab .mall_nav"),
                    n = (0, de.default)(".mall_nav_swiper-pagination b");
                if (t.length < 2) return;
                me.default.init({
                    tp: "img",
                    moveDom: e,
                    moveChild: t,
                    tab: n,
                    len: t.length,
                    index: 1,
                    loopScroll: !1,
                    lockScrY: !0,
                    enableTransX: !0,
                    transition: .6,
                    min: 40,
                    autoTime: 0,
                    fun: function(e) {}
                }), (0, de.default)(".box_wrapper .box_list.position-ab .mall_nav").each(function(e) {
                    (0, de.default)(this).css({
                        left: 100 * e + "%"
                    })
                })
            }
        }

        function ne() {
            try {
                var e = (0, de.default)(window).width(),
                    t = (0, de.default)(".fls06042");
                if (t) {
                    var n = Number(t.data("h06042")) / 2 || 50,
                        r = t.data("src06042") || "";
                    r = JD.img.getImgUrl(r, 750, 2 * n), t.css("height", 375 * n / (20 * e) + "rem"), t.find("[data-event_id]").css({
                        width: "100%",
                        display: "block"
                    }).find("img").attr("init_src", r).css({
                        "max-width": "100%",
                        "max-height": "100%"
                    }), we.default.autoLoadImage({
                        container: "floorContent",
                        skip_invisible: !0
                    })
                }
            } catch (e) {
                console.log("初始化fls06042失败", e), (0, de.default)(".fls06042").parent().hide()
            }
        }

        function re() {
            var e = (0, de.default)(".fls06056");
            if (e.length) try {
                (0, de.default)(".fls06056.style1").parents(".floor").hide(), de.default.each(e, function() {
                    ! function(e) {
                        var t = !0;
                        if (de.default.each((0, de.default)(e).find(".good-img-wrap img"), function(e, n) {
                                (0, de.default)(n).attr("src") || (0, de.default)(n).attr("init_src") || (t = !1)
                            }), !t) return void(0, de.default)(e).parents(".floor").hide();
                        var n = (0, de.default)(e).find(".j-floor-item"),
                            r = (0, de.default)(e).data("animationtype") || void 0;
                        if (r && 8 == (0, de.default)(e).find(".good-img-wrap img").length) {
                            var i = [0, 1, 2, 3];
                            1 == r ? i = [0, 1, 2, 3] : 2 == r && (i = [0, 2, 1, 3]);
                            var o = 0,
                                a = !0;
                            setTimeout(function e() {
                                a ? (0, de.default)(n[i[o]]).removeClass("anim_in").addClass("anim_back") : (0, de.default)(n[i[o]]).removeClass("anim_back").addClass("anim_in"), o += 1, 4 == o && (o = 0, a = !a), setTimeout(e, 1500)
                            }, 0)
                        }
                    }(this)
                })
            } catch (e) {
                console.log("06056 样式动画失败", e)
            }
        }

        function ie() {
            Z(), N(), o(), te(), c(), u(), E(), d(), $(), ne(), re(), J(), Y(), i(), ee();
            try {
                a()
            } catch (e) {
                console.error("【抓图通栏】", e)
            }
            try {
                setTimeout(s, 0)
            } catch (e) {
                console.error("【东家小院灰度跳转】", e)
            }
            we.default.autoLoadImage({
                container: "floorContent",
                skip_invisible: !0
            })
        }
        var oe, ae = n(30),
            se = r(ae),
            ue = n(8),
            ce = r(ue),
            le = n(29),
            de = r(le),
            pe = n(77),
            me = r(pe),
            fe = n(42),
            he = r(fe),
            ge = n(78),
            ve = r(ge),
            ye = n(79),
            Pe = r(ye),
            be = n(80),
            we = r(be),
            Se = n(82),
            Ce = r(Se);
        ! function(r, i, o) {
            "object" == (0, ce.default)(e) && "object" == (0, ce.default)(e.exports) ? e.exports = r.document ? o(r, i) : function(e) {
                return o(e, i)
            }: n(83).cmd || n(84) ? void 0 !== (oe = function() {
                return o(r, i)
            }.call(t, n, t, e)) && (e.exports = oe) : o(r, i)
        }(window, window, function(t, r) {
            var i = function() {
                var e = {
                    alert: !1,
                    debug: !1
                };
                return e.printMsg = function(t, n) {
                    e.debug && console.log("***" + t + "*** " + n), e.alert && alert("***" + t + "*** " + n)
                }, e
            }();
            return t = t || this, t.JSSDK = i,
                function(e) {
                    e.Common = {
                        client: function() {
                            var e = {},
                                t = navigator && navigator.userAgent || "";
                            if (/jdpingou/.test(t)) {
                                e.jdpingou = !0;
                                var n = t.split(";");
                                e.appVersion = n[2], e.OSVersion = n[3], e.udid = n[4], e.network = n[5].replace("network/", ""), e.phone = n[10].replace("model/", "")
                            }
                            if (e.iPhoneX = ["iPhone10,3", "iPhone10,6", "iPhone11,3", "iPhone11,6"].indexOf(e.phone) > -1, e.jailbreak = t.indexOf("channelID/pp601") > -1, e.WKwebview = t.indexOf("supportJDSHWK/1") > -1 || 1 == r._is_jdsh_wkwebview, e.ios = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), e.android = t.indexOf("Android") > -1 || t.indexOf("android") > -1, e.iPhone = t.indexOf("iPhone") > -1 || t.indexOf("iphone") > -1, e.iPad = t.indexOf("iPad") > -1 || t.indexOf("ipad") > -1, e.weixin = (t.indexOf("MicroMessenger") > -1 || t.indexOf("micromessenger") > -1) && "miniprogram" != r.window.__wxjs_environment, e.miniprogram = (t.indexOf("MicroMessenger") > -1 || t.indexOf("micromessenger") > -1) && "miniprogram" === r.window.__wxjs_environment, e.qq = "QQ" == (t.match(/\sQQ/i) || "").toString().toLocaleUpperCase().trim(), e.trident = t.indexOf("Trident") > -1, e.presto = t.indexOf("Presto") > -1, e.webKit = t.indexOf("AppleWebKit") > -1, e.gecko = t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML"), e.chrome = null !== t.match(/Chrome/i) && null === t.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i), e.safari = (e.iPhone || e.iPad) && t.match(/Safari/), e.safariVersion = 0, e.safari) {
                                var i = t.match(/Version\/([\d\.]+)/);
                                e.safariVersion = i;
                                try {
                                    e.safariVersion = parseFloat(i[1], 10)
                                } catch (e) {}
                            }
                            return e.ios10Chrome = !!t.match(/(Mac\sOS)\sX\s([\d_]+)/), e.isSAMSUNGN7508V = -1 != t.toUpperCase().indexOf("SAMSUNG-SM-N7508V"), e
                        }(),
                        printMsg: function(t, n) {
                            e.printMsg(t, n)
                        },
                        mergeJson: function(e, t) {
                            var n = {};
                            for (var r in e) n[r] = e[r];
                            for (r in t) n[r] = t[r];
                            return n
                        },
                        extend: function(e, t) {
                            t = t || {};
                            for (var n in t) e.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        },
                        stringify: function(e) {
                            return e = e || "", (0, se.default)(e)
                        },
                        formatParams: function(e) {
                            var t = [];
                            for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                            return t.join("&")
                        },
                        isNull: function(e) {
                            var t = !1;
                            return void 0 === e ? t = !0 : "object" != (void 0 === e ? "undefined" : (0, ce.default)(e)) || e instanceof Array ? 0 === e.replace(/(^s*)|(s*$)/g, "").length && (t = !0) : t = this.isObjEmpty(e), t
                        },
                        isObjEmpty: function(e) {
                            var t = !0;
                            if ("object" == (void 0 === e ? "undefined" : (0, ce.default)(e)) && !(e instanceof Array))
                                for (var n in e) {
                                    t = !1;
                                    break
                                }
                            return t
                        },
                        isObj: function(e) {
                            return "object" == (void 0 === e ? "undefined" : (0, ce.default)(e)) && !!e
                        },
                        isJSONString: function(e) {
                            try {
                                return !!(this.isString(e) && e.indexOf("{") > -1) && (JSON.parse(e), !0)
                            } catch (e) {
                                return !1
                            }
                        },
                        isString: function(e) {
                            return "[object String]" == Object.prototype.toString.call(e)
                        },
                        getCookie: function(e) {
                            var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                            return t = document.cookie.match(n), t ? t[2] : null
                        },
                        hasIntersectByKey: function(e, t) {
                            e = e || {}, t = t || {};
                            var n = {
                                isExist: !1,
                                paramExist: []
                            };
                            for (var r in e)
                                if (t.hasOwnProperty(r)) {
                                    n.isExist = !0, n.paramExist.push(r);
                                    break
                                }
                            return n
                        },
                        isSubSetByKeys: function(e, t) {
                            e = e || {}, t = t || {};
                            var n = {
                                isSub: !0,
                                lackParam: []
                            };
                            for (var r in e) t.hasOwnProperty(r) || (n.isSub = !1, n.lackParam.push(r));
                            return n
                        },
                        firstUpperCase: function(e) {
                            return e.toLowerCase().replace(/\b[a-z]/g, function(e) {
                                return e.toUpperCase()
                            })
                        },
                        compareVersion: function(e) {
                            var t = -1;
                            if (this.client.jdpingou) {
                                var n = this.client.appVersion,
                                    r = n.split("."),
                                    i = e.split(".");
                                r.length >= 3 && i.length >= 3 && ((parseInt(r[0]) >= 10 || parseInt(i[0]) >= 10) && (r[0] = "0" + r[0], i[0] = "0" + i[0], r[0] = r[0].substr(-1, 2), i[0] = i[0].substr(-1, 2)), (parseInt(r[1]) >= 10 || parseInt(i[1]) >= 10) && (r[1] = "0" + r[1], i[1] = "0" + i[1], r[1] = r[1].substr(-1, 2), i[1] = i[1].substr(-1, 2)), (parseInt(r[2]) >= 10 || parseInt(i[2]) >= 10) && (r[2] = "0" + r[2], i[2] = "0" + i[2], r[2] = r[2].substr(-1, 2), i[2] = i[2].substr(-1, 2)), t = parseInt(r[0].toString() + r[1].toString() + r[2].toString()) - parseInt(i[0].toString() + i[1].toString() + i[2].toString()))
                            }
                            return t
                        },
                        hexCharToStr: function(e) {
                            var t = e.trim(),
                                n = "0x" === t.substr(0, 2).toLowerCase() ? t.substr(2) : t,
                                r = n.length;
                            if (r % 2 != 0) return e;
                            for (var i, o = [], a = 0; a < r; a += 2) i = parseInt(n.substr(a, 2), 16), o.push(String.fromCharCode(i));
                            return o.join("")
                        },
                        deCompileForStr: function(e) {
                            var t = e.split("");
                            return t = t.reverse(), this.hexCharToStr(t.join(""))
                        },
                        deCompileForJson: function(e) {
                            e = e || {};
                            for (var t in e) e[t] = this.deCompileForStr(e[t])
                        }
                    }, e.Common
                }(i),
                function(e) {
                    var t = 0,
                        n = [],
                        r = [],
                        i = {
                            id: "{{BUSINESSID}}",
                            key: "{{BUSINESSKEY}}",
                            domain: "{{BUSINESSDOMAIN}}",
                            url: "//badjs.m.jd.com/report",
                            combo: 1,
                            level: 2,
                            delay: 1e3
                        },
                        o = function(t) {
                            var n = {};
                            return n = e.Common.isObj(t) ? t : {
                                msg: t
                            }, n.from || (n.from = location.href), n
                        },
                        a = function() {
                            var e = parseInt(i.id, 10);
                            if (!e) return !1;
                            /jd\.com$/gi.test(location.hostname) && (i.url || (i.url = "//badjs.m.jd.com/report")), i.report = (i.url || "/report") + "?id=" + e + "&"
                        },
                        s = function(t, n) {
                            var r = [],
                                o = [],
                                a = [];
                            if (e.Common.isObj(t)) {
                                t.key = t.key || i.key, t.domain = t.domain || i.domain, t.level = t.level || i.level;
                                for (var s in t) {
                                    var u = t[s];
                                    if (u = u.toString(), !e.Common.isNull(u)) {
                                        if (e.Common.isObj(u)) try {
                                            u = e.Common.stringify(u)
                                        } catch (e) {
                                            u = "[JSSDK_REPORT detect value stringify error] " + e.toString()
                                        }
                                        a.push(s + ":" + u), r.push(s + "=" + encodeURIComponent(u)), o.push(s + "[" + n + "]=" + encodeURIComponent(u))
                                    }
                                }
                            }
                            return [o.join("&"), a.join(","), r.join("&")]
                        },
                        u = function(e) {
                            (new Image).src = e
                        },
                        c = function() {
                            for (a(); n.length;) {
                                var e = n.shift(),
                                    o = s(e, r.length);
                                r.push(o[0])
                            }
                            if (r.length) {
                                var c = function() {
                                    clearTimeout(t), i.report && u(i.report + r.join("&") + "&count=" + r.length + "&_t=" + new Date), t = 0, r = []
                                };
                                t || (t = setTimeout(c, i.delay))
                            }
                        },
                        l = {
                            push: function(e) {
                                var t = o(e);
                                return n.push(t), c(), l
                            },
                            report: function(e) {
                                var t = o(e);
                                return n.push(t), c(), l
                            }
                        };
                    e.Report = l
                }(i),
                function(e) {
                    e.Validator = {
                        patterns: {
                            email: function(e, t) {
                                return /^(?:[a-z0-9]+[_\-+.]?)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/i.test(e)
                            },
                            mobile: function(e, t) {
                                return /^1[3-9]\d{9}$/.test(e)
                            },
                            tel: function(e, t) {
                                return /^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/.test(e)
                            },
                            url: function(e, t) {
                                return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
                            },
                            digit: function(e, t) {
                                return /^\d+$/.test(e)
                            },
                            minLength: function(e, t) {
                                return e.length >= t
                            },
                            maxLength: function(e, t) {
                                return e.length <= t
                            },
                            min: function(e, t) {
                                return e >= t
                            },
                            max: function(e, t) {
                                return e <= t
                            },
                            range: function(e, t) {
                                return e >= t[0] && e <= t[1]
                            },
                            date: function(e, t) {
                                return !/Invalid|NaN/.test(new Date(e).toString())
                            },
                            dateISO: function(e, t) {
                                return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                            },
                            number: function(e, t) {
                                return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                            },
                            require: function(e, t) {
                                return /\S+/.test(e)
                            }
                        },
                        isValid: function(e, t) {
                            e = e || {};
                            var n = {
                                isMatch: !0,
                                paramType: ""
                            };
                            for (var r in e) {
                                if (!n.isMatch) break;
                                this.patterns.hasOwnProperty(r) && (n.isMatch = this.patterns[r](t, e[r]), n.paramType = r)
                            }
                            return n
                        }
                    }
                }(i.Common),
                function(e, t) {
                    e.Controller = {
                        runFun: function(e, t, n) {
                            var r = this.getBusinessFunType(e, t);
                            this.checkIsJDpingou() ? this.runNativeFun(e, t, r, n) : this.runWebFun(e, t, r, n)
                        },
                        runNativeFun: function(e, n, r, i) {
                            t.printMsg("runNativeFun", "funName:" + n + ";funType:" + r + ";objName:" + e), (0, this.constructNativeObj(r, e)[n])(this.constructParams(i))
                        },
                        runWebFun: function(e, n, r, i) {
                            "jump" == r.toLowerCase() && (e = "Public", n = "toUrl"), t.printMsg("runWebFun", "funName:" + n + ";funType:" + r + ";objName:" + e), (0, this.constructWebObj(r, e)[n])(this.constructParams(i))
                        },
                        constructNativeObj: function(e, t) {
                            return this.constructObj("Native", e, t)
                        },
                        constructWebObj: function(e, t) {
                            return this.constructObj("Web", e, t)
                        },
                        constructServiceObj: function(e, t) {
                            return this.constructObj("Service", e, t)
                        },
                        constructObj: function(n, r, i) {
                            return t.isNull(r) ? e[n][i] : e[n][t.firstUpperCase(r)][i]
                        },
                        constructParams: function(e) {
                            return e
                        },
                        checkIsJDpingou: function() {
                            return !!t.client.jdpingou
                        },
                        getBusinessFunType: function(e, t) {
                            return "Jump"
                        },
                        runServiceFun: function(e, n, r, i, o) {
                            t.printMsg("runServiceFun", "funName:" + n + ";funType:" + o + ";objName:" + e), (0, this.constructServiceObj(o, e)[n])(this.constructParams(r), i)
                        },
                        getCommonClientValue: function(e) {
                            return t.client[e]
                        }
                    }, e.Controller
                }(i, i.Common),
                function(e) {
                    e.Native = {}, e.Native
                }(i),
                function(e) {
                    e.Android = {}
                }(i.Native),
                function(e) {
                    e.IOS = {
                        options: {
                            routerHeader: "router"
                        },
                        callBridgeFun: function(e, t) {
                            var n = this.getOptions("routerHeader"),
                                r = e.toString();
                            this.setupWebViewJavascriptBridgeByIOS(function(e) {
                                e.callHandler(n, r, t)
                            })
                        },
                        setupWebViewJavascriptBridgeByIOS: function(e) {
                            if (r.WebViewJavascriptBridge) return e(r.WebViewJavascriptBridge);
                            if (r.WVJBCallbacks) return r.WVJBCallbacks.push(e);
                            r.WVJBCallbacks = [e];
                            var t = document.createElement("iframe");
                            t.style.display = "none", t.src = "https://__bridge_loaded__", document.documentElement.appendChild(t), setTimeout(function() {
                                document.documentElement.removeChild(t)
                            }, 0)
                        },
                        getOptions: function(e) {
                            return this.options[e]
                        }
                    }
                }(i.Native),
                function(e, t) {
                    e.Web = {}, e.Web
                }(i, i.Common),
                function(e, t) {
                    e.Service = {
                        corsRequest: function(e, n, r) {
                            t.printMsg("corsRequest", "url=" + e + ";params=" + t.stringify(n)), n = n || {}, this.Ajax({
                                url: e,
                                data: n,
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                success: function(e, t) {
                                    r(JSON.parse(e))
                                },
                                fail: function(e) {
                                    r(e)
                                }
                            })
                        },
                        successResponse: function(e, t, n) {
                            return e = e || {}, n = n || {}, t({
                                REQ_FLAG: !0,
                                REQ_CODE: "1",
                                REQ_DATA: e,
                                REQ_MSG: n
                            })
                        },
                        errorResponse: function(e) {
                            return e({
                                REQ_FLAG: !1,
                                REQ_CODE: "3",
                                REQ_DATA: {},
                                REQ_MSG: "connect error"
                            })
                        },
                        failedResponse: function(e, t) {
                            return t = t || {}, e({
                                REQ_FLAG: !1,
                                REQ_CODE: "2",
                                REQ_DATA: {},
                                REQ_MSG: t
                            })
                        },
                        Ajax: function(e) {
                            e = e || {}, e.type = (e.type || "GET").toUpperCase(), e.dataType = e.dataType || "json";
                            var n = t.formatParams(e.data),
                                i = null;
                            if (i = r.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), i.onreadystatechange = function() {
                                    if (4 == i.readyState) {
                                        var t = i.status;
                                        t >= 200 && t < 300 ? e.success && e.success(i.responseText, i.responseXML) : e.fail && e.fail(t)
                                    }
                                }, e.xhrFields)
                                for (var o in e.xhrFields) i[o] = e.xhrFields[o];
                            e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), "GET" == e.type ? (i.open("GET", e.url + "?" + n, !0), i.send(null)) : "POST" == e.type && (i.open("POST", e.url, !0), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(n))
                        }
                    }
                }(i, i.Common),
                function(e) {
                    e.Schema = {
                        options: {
                            openAppVirtualHeader: "d337d616271607f3c6165747279667f2f2a357f676e6960746a6e2070716e65607f6",
                            openAppComHeader: "d337d616271607f3e6f69647163696e657d6d6f636f2f2a356c69626f6d646a6e2070716e65607f6",
                            routerHeader: "f2f2a327564757f627"
                        },
                        getOpenAppVirtualHeader: function() {
                            return this.options.openAppVirtualHeader
                        },
                        getOpenAppComHeader: function() {
                            return this.options.openAppComHeader
                        },
                        getRouterHeader: function(e) {
                            return this.options.routerHeader + e + "?"
                        },
                        ready: function() {
                            e.Common.deCompileForJson(this.options)
                        }
                    }, e.Schema.ready()
                }(i),
                function(e, t) {
                    e.CallApp = {
                        options: {
                            isAppInstalled: !1,
                            downAppUrl: "//h5.m.jd.com/active/download/download.html?channel=jd-m",
                            downAppUrlByWX: "http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",
                            downAppUrlByIos: "https://itunes.apple.com/cn/app/id414245413",
                            downAppUrlByIPad: "https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8"
                        },
                        callApp: function(e) {
                            t.client.jdpingou ? (this.setAppInstalled(), r.location.href = e) : t.client.weixin ? (e = e.replace(/openapp.jdpingou:\/\//g, ""), e = encodeURIComponent(e), e = e.replace(/virtual%3Fparams%3D/g, "virtual?params="), new i.wxOpenApp(e)) : this.callAppFromBrowser(e)
                        },
                        callAppFromBrowser: function(e) {
                            t.client.chrome ? this.callAppFromChrome(e) : this.isSafariOver9() || t.client.isIos10Chrome || t.client.isSAMSUNGN7508V ? this.callAppFromFewBrowser(e) : this.callAppFromCommonBrowser(e)
                        },
                        callAppFromChrome: function(e) {
                            var t = Date.now(),
                                n = this.getAppUrlByChrome(e);
                            r.location.href = n, this.jumpToDownUrl(t)
                        },
                        callAppFromFewBrowser: function(e) {
                            var t = Date.now();
                            this.jumpToDownUrl(t);
                            var n = document.createElement("a");
                            n.setAttribute("href", e), n.style.display = "none", document.body.appendChild(n);
                            var r = document.createEvent("HTMLEvents");
                            r.initEvent("click", !1, !1), n.dispatchEvent(r)
                        },
                        callAppFromCommonBrowser: function(e) {
                            var t = Date.now(),
                                n = document.createElement("frame");
                            n.src = e, n.style.display = "none", document.body.appendChild(n), setTimeout(function() {
                                document.body.removeChild(n)
                            }, 3e3), this.jumpToDownUrl(t)
                        },
                        jumpToDownUrl: function(e) {
                            var t = this;
                            t.options.isAppInstalled || setTimeout(function() {
                                Date.now() - e < 5e3 ? r.location.href = t.getAppDownUrl() : r.close()
                            }, 25)
                        },
                        isSafariOver9: function() {
                            return !!(t.client.safari && t.client.safariVersion > 9)
                        },
                        getAppUrlByChrome: function(e) {
                            return "intent://m.jd.com/#Intent;scheme=" + e + ";package=com.jingdong.app.mall;end"
                        },
                        getAppDownUrl: function() {
                            return t.client.weixin ? this.options.downAppUrlByWX : t.client.iPad ? this.options.downAppUrlByIPad : t.client.iPhone ? this.options.downAppUrlByIos : this.options.downAppUrl
                        },
                        setAppInstalled: function() {
                            this.options.isAppInstalled = !0
                        }
                    }, e.CallApp
                }(i, i.Common),
                function(e) {
                    e.Module = {
                        checkInputParams: function(t, n) {
                            var r = t.requiredParams,
                                i = t.typeParams,
                                o = t.ruleParams || {},
                                a = !0;
                            return e.Common.isNull(r) || (e.Common.isNull(n) ? a = !1 : this.isMatchedRequiredParams(r, n) || (a = !1)), e.Common.isNull(i) || e.Common.isNull(n) || this.isDiffStaticParams(i, n) || (a = !1), e.Common.isNull(o) || e.Common.isNull(n) || this.isMatchedByRuleParams(o, n) || (a = !1), a
                        },
                        isMatchedByRuleParams: function(t, n) {
                            t = t || {}, n = n || {};
                            var r = !0,
                                i = {};
                            for (var o in t)
                                if (n.hasOwnProperty(o) && (i = e.Common.Validator.isValid(t[o], n[o]), !i.isMatch)) {
                                    e.Common.printMsg("invalid parameters", "params:" + e.Common.stringify(n) + "\nthe type of param " + o + " must be " + i.paramType), r = !1;
                                    break
                                }
                            return r
                        },
                        isMatchedRequiredParams: function(t, n) {
                            var r = e.Common.isSubSetByKeys(t, n);
                            return r.isSub || e.Common.printMsg("invalid parameters", "params:" + e.Common.stringify(n) + "\nlack param " + r.lackParam), r.isSub
                        },
                        isDiffStaticParams: function(t, n) {
                            var r = e.Common.hasIntersectByKey(t, n);
                            return r.isExist && e.Common.printMsg("invalid parameters", "params:" + e.Common.stringify(n) + "\nthe param " + r.paramExist + " can't be change"), !r.isExist
                        },
                        getConfigString: function(t, n) {
                            return e.Common.stringify(this.getWholeCurrentParams(t, n))
                        },
                        getStandardConfigStr: function(t, n) {
                            return e.Common.formatParams(this.getWholeCurrentParams(t, n))
                        },
                        getWholeCurrentParams: function(t, n) {
                            return n = this.filterInputParams(t, n), e.Common.extend(this.getWholeDefaultParams(t), n)
                        },
                        getWholeDefaultParams: function(t) {
                            var n = e.Common.mergeJson(t.typeParams, t.edgeParams);
                            return e.Common.mergeJson(n, t.requiredParams)
                        },
                        getOpenAppVirtualHeader: function() {
                            return e.Schema ? e.Schema.getOpenAppVirtualHeader() : ""
                        },
                        getOpenAppComHeader: function() {
                            return e.Schema ? e.Schema.getOpenAppComHeader() : ""
                        },
                        getRouterHeader: function(t) {
                            return e.Schema ? e.Schema.getRouterHeader(t) : ""
                        },
                        getOpenAppVirtualUrl: function(e, t) {
                            return this.getOpenAppVirtualHeader() + this.getConfigString(e, t)
                        },
                        getOpenAppComUrl: function(e, t) {
                            return this.getOpenAppComHeader() + this.getConfigString(e, t)
                        },
                        getRouterUrl: function(e, t, n) {
                            return this.getRouterHeader(e) + this.getStandardConfigStr(t, n)
                        },
                        getDefaultOpenAppUrl: function(e, t) {
                            return this.getOpenAppVirtualUrl(e, t)
                        },
                        toAppUrl: function(t) {
                            e.CallApp ? e.CallApp.callApp(t) : r.location.href = t
                        },
                        isIOS: function() {
                            return e.Common.client.ios || e.Common.client.iPhone || e.Common.client.iPad
                        },
                        isAndroid: function() {
                            return e.Common.client.android
                        },
                        isJDpingou: function() {
                            return e.Common.client.jdpingou || !1
                        },
                        isWKwebview: function() {
                            return !(!e.Common.client.WKwebview && 1 != r._is_jdsh_wkwebview)
                        },
                        filterInputParams: function(e, t) {
                            return t = this.parseInputParams(e, t)
                        },
                        parseInputParams: function(e, t) {
                            if (e) {
                                var n = e.ruleParams;
                                if (n)
                                    for (var r in n) n[r].hasOwnProperty("url") && n[r].url && this.isIOS() && (t[r] = encodeURIComponent(t[r])), n[r].hasOwnProperty("digit") && n[r].digit && (t[r] = t[r].toString())
                            }
                            return t
                        },
                        callServiceFun: function(t, n, r) {
                            if (this.report("callServiceFun"), this.checkInputParams(t, n)) {
                                var i = this.getWholeCurrentParams(t, n);
                                if (i = i || {}, i.hasOwnProperty("requestUrl")) {
                                    var o = i.requestUrl;
                                    delete i.requestUrl, e.Service.corsRequest(o, i, r)
                                } else e.Service.failedResponse(r, "lack of parameter 'requestUrl'")
                            } else e.Service.failedResponse(r, "invalid params")
                        },
                        report: function(t) {
                            e.Report && setTimeout(function() {
                                e.Common.printMsg("module", "funName=report"), e.Report.push(t)
                            }, 0)
                        },
                        doFunForPlatForm: function(e, t, n, r, i) {
                            var o = t,
                                a = null;
                            if (e && e.versionParams && e.versionParams[t] && (a = e.versionParams[t]), a && (o = this.getApiNameByVersion(t, a)), o === t) {
                                this.report(o);
                                var s = null;
                                e && e.optionParams && e.optionParams[t] && (s = e.optionParams[t]), s && !this.checkInputParams(s, n) ? this.errorCallback("param not valid", r) : i()
                            } else e && e[o] ? e[o](n, r) : this.errorCallback("fun not found,funName:" + o, r)
                        },
                        doBridgeFun: function(t, n) {
                            var r = n.apiName = n.apiName || "";
                            if (!n.apiName) return e.Common.printMsg("apiName not found"), !1;
                            n.inputParams = n.inputParams || {}, n.inputCallback = n.inputCallback || function(e) {
                                console.log(e)
                            };
                            var i = "android";
                            this.isIOS() && (i = "ios");
                            var o = null;
                            if (t && t.optionParams && t.optionParams[n.apiName] && (o = t.optionParams[n.apiName]), o && !this.checkInputParams(o, n.inputParams)) return this.errorCallback("param not valid", n.inputCallback), !1;
                            if (t && t.versionParams && t.versionParams[n.apiName]) {
                                var a = null;
                                (a = t.versionParams[n.apiName][i] ? t.versionParams[n.apiName][i] : t.versionParams[n.apiName]) && (r = this.getApiNameByVersion(n.apiName, a))
                            }
                            r === n.apiName ? (this.report(r), n.logic ? n.logic() : this.errorCallback("params.logic not found", n.inputCallback)) : t && t[r] ? t[r](n.inputParams, n.inputCallback) : this.errorCallback("fun not found,funName:" + r, n.inputCallback)
                        },
                        getApiNameByVersion: function(t, n) {
                            if (n && e.Common.client.jdpingou)
                                for (var r in n) {
                                    var i = r.begin || "",
                                        o = r.end || "",
                                        a = 1,
                                        s = -1;
                                    "" !== i && (a = common.compareVersion(i)), "" !== o && (s = common.compareVersion(o)), a >= 0 && s < 0 && (t = r)
                                }
                            return t
                        },
                        callIOSStandardBridge: function(t, n) {
                            if (e.Native.IOS) {
                                var r = this;
                                e.Native.IOS.callBridgeFun(t, function(e) {
                                    r.standardCallback(e, n)
                                })
                            } else this.standardCallback({
                                state: "0",
                                data: "",
                                msg: "JSSDK.IOS module not found!"
                            }, n)
                        },
                        standardCallback: function(t, n) {
                            if (e.Common.isObj(t)) this._standardCallbackByJson(t, n);
                            else if (e.Common.isString(t) && "" !== t)
                                if (e.Common.isJSONString(t)) {
                                    var r = JSON.parse(t);
                                    this._standardCallbackByJson(r, n)
                                } else n({
                                    state: "1",
                                    data: t,
                                    msg: ""
                                });
                            else n({
                                state: "0",
                                data: "",
                                msg: "data type not support"
                            })
                        },
                        _standardCallbackByJson: function(t, n) {
                            n(t.result && e.Common.isObj(t.result) ? {
                                state: t.result.state || "0",
                                data: t.result.data || "",
                                msg: t.result.msg || ""
                            } : {
                                state: t.state || "0",
                                data: t.data || t,
                                msg: t.msg || ""
                            })
                        },
                        errorCallback: function(t, n) {
                            e.Common.isObj(t) ? (t.state = "0", this._standardCallbackByJson(t, n)) : this._standardCallbackByJson({
                                state: "0",
                                data: "",
                                msg: t
                            }, n)
                        },
                        successCallback: function(t, n) {
                            if (e.Common.isObj(t)) t.result ? t.result.state = "1" : t.state = "1", this._standardCallbackByJson(t, n);
                            else if (e.Common.isString(t) && "" !== t)
                                if (e.Common.isJSONString(t)) {
                                    var r = JSON.parse(t);
                                    r.result ? r.result.state = "1" : r.state = "1", this._standardCallbackByJson(r, n)
                                } else n({
                                    state: "1",
                                    data: t,
                                    msg: ""
                                });
                            else this._standardCallbackByJson({
                                state: "1",
                                data: t,
                                msg: ""
                            }, n)
                        }
                    }
                }(i),
                function(e, t, n) {
                    e.Jump = {
                        optionParams: {
                            category: "jump"
                        },
                        readOptParamsByClassName: function(e, t) {
                            return e.optionParams[t + "Params"]
                        },
                        getWholeDefaultParams: function(e, n) {
                            var r = this.readOptParamsByClassName(e, n),
                                i = this.optionParams || {};
                            return r.typeParams = t.mergeJson(r.typeParams, i), r
                        },
                        getJumpToUrl: function(e, r, i) {
                            return e = t.firstUpperCase(e), n.getDefaultOpenAppUrl(this.getWholeDefaultParams(this[e], r), i)
                        },
                        checkInputParams: function(e, r, i) {
                            e = t.firstUpperCase(e);
                            var o = this.readOptParamsByClassName(this[e], r);
                            return n.checkInputParams(o, i)
                        },
                        jumpToPage: function(e, r, i) {
                            if (this.checkInputParams(e, r, i)) {
                                n.report(e + "." + r);
                                var o = this.getJumpToUrl(e, r, i);
                                t.printMsg("JSSDK.Native.Jump." + e + "." + r, "url:" + o), n.toAppUrl(o)
                            }
                        }
                    }, e.Jump
                }(i.Native, i.Common, i.Module),
                function(e, t, n) {
                    e.Jump = {
                        optionParams: {
                            category: "jump"
                        },
                        readOptParamsByClassName: function(e, t) {
                            return e.optionParams[t + "Params"]
                        },
                        getJumpToUrl: function(e, t, n) {
                            return n = n || {}, n.web_url = n.web_url || "", n.web_url
                        },
                        isDiffStaticParams: function(e, t) {
                            return n.isDiffStaticParams(e, t)
                        },
                        isMatchedRequiredParams: function(e, t) {
                            return n.isMatchedRequiredParams(e, t)
                        },
                        checkInputParams: function(e, r, i) {
                            e = t.firstUpperCase(e);
                            var o = this.readOptParamsByClassName(this[e], r);
                            return n.checkInputParams(o, i)
                        },
                        jumpToPage: function(e, n, i) {
                            if (this.checkInputParams(e, n, i)) {
                                var o = this.getJumpToUrl(e, n, i);
                                t.printMsg("JSSDK.Web.Jump." + e + "." + n, "url:" + o), r.location.href = o
                            }
                        }
                    }, e.Jump
                }(i.Web, i.Common, i.Module),
                function(t, i) {
                    var o = function(e) {
                        function t(e) {
                            var t = !1;
                            return function() {
                                t || (t = !0, e(), setTimeout(function() {
                                    t = !1
                                }, 1e3))
                            }
                        }
                        var i = function(e, t) {
                            this.init(e, t)
                        };
                        return i.prototype = {
                            init: function(e, t) {
                                this.isAndroid = !!navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/), this.cb = t, this.param = e, this.scheme = "openapp.jdmobile", this.appId = "wxe75a2e68877315fb", this.packageName = "com.jingdong.app.mall", this.packageUrl = "openApp.jdMobile://", this.configUrl = "//wq.jd.com/bases/jssdk/GetWxJsApiSign?url=" + encodeURIComponent(location.href.split("#")[0]) + "&callback=callback", this.loadWxJsSdk()
                            },
                            loadWxJsSdk: function() {
                                var t = this,
                                    r = "//res.wx.qq.com/open/js/jweixin-1.4.0.js";
                                try {
                                    n.e(0).then(function() {
                                        var n = [! function() {
                                            var e = new Error('Cannot find module "."');
                                            throw e.code = "MODULE_NOT_FOUND", e
                                        }()];
                                        (function(n) {
                                            e.wx = n, t.requestConfig()
                                        }).apply(null, n)
                                    }).catch(n.oe)
                                } catch (e) {
                                    console.error("https://imk2.jd.com/auto/open/app/wechat/jweixin/load", "amd or cmd load -- wxJsSdk( " + r + " ) load fail!!! , e = " + e + " CurrentURL = " + location.href)
                                }
                            },
                            requestConfig: function() {
                                var e = this;
                                e.JSONP(e.configUrl, function(t) {
                                    e.openApp(t)
                                })
                            },
                            openApp: function(n) {
                                var i = this;
                                wx.config({
                                    beta: !0,
                                    debug: !1,
                                    appId: n.appId,
                                    timestamp: n.timestamp,
                                    nonceStr: n.nonceStr,
                                    signature: n.signature,
                                    jsApiList: ["checkJsApi", "getInstallState", "launchApplication"]
                                }), wx.ready(t(function() {
                                    wx.checkJsApi({
                                        jsApiList: ["getInstallState", "launchApplication"],
                                        success: function(t) {
                                            t.checkResult.getInstallState && t.checkResult.launchApplication ? wx.invoke("getInstallState", {
                                                packageName: i.packageName,
                                                packageUrl: i.packageUrl
                                            }, function(t) {
                                                t.err_msg && t.err_msg.indexOf("get_install_state:yes") > -1 ? wx.invoke("launchApplication", {
                                                    appID: i.scheme,
                                                    parameter: i.param
                                                }, function(t) {
                                                    t ? t.err_msg && t.err_msg.indexOf("fail") > -1 && (console.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result", "wechat launchApplication method：falil!  res = " + (0, se.default)(t) + "。 res = " + (0, se.default)(t) + " ,   CurrentURL = " + location.href), setTimeout(function() {
                                                        r.location.href = e.CallApp.getAppDownUrl()
                                                    }, 200)) : console.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result", "wechat launchApplication method ：Exception! res = " + (0, se.default)(t) + " ,   CurrentURL = " + location.href)
                                                }) : t.err_msg && t.err_msg.indexOf("get_install_state:no") > -1 ? setTimeout(function() {
                                                    r.location.href = e.CallApp.getAppDownUrl()
                                                }, 200) : t.err_msg && t.err_msg.indexOf("missing auguments") > -1 ? console.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result", "wechat getInstallState method  res.err_msg ：" + t.err_msg + "  ,   CurrentURL = " + location.href) : console.error("https://imk2.jd.com/auto/open/app/wechat/invoke/result", "wechat getInstallState method res.err_msg ：" + t.err_msg + "  ,   CurrentURL = " + location.href)
                                            }) : "function" == typeof this.cb && this.cb()
                                        }
                                    })
                                })), wx.error(function(e) {
                                    console.error("https://imk2.jd.com/auto/open/app/wechat/config/result", "wechat config method：falil!  res = " + (0, se.default)(e) + " ,   CurrentURL = " + location.href)
                                })
                            },
                            JSONP: function(e, t) {
                                var n = function() {
                                        return (new Date).getTime()
                                    },
                                    i = function() {
                                        return Math.random().toString().substr(2)
                                    },
                                    o = function(e) {
                                        var t = e.parentNode;
                                        t && 11 !== t.nodeType && t.removeChild(e)
                                    };
                                ! function(e, t) {
                                    var a, s = /callback=(\w+)/.exec(e);
                                    s && s[1] ? a = s[1] : (a = "jsonp_" + n() + "_" + i(), e = e.replace("callback=?", "callback=" + a), e = e.replace("callback=%3F", "callback=" + a));
                                    var u = document.createElement("script");
                                    u.type = "text/javascript", u.src = e, u.id = "id_" + a, r[a] = function(e) {
                                        r[a] = void 0;
                                        var n = document.getElementById("id_" + a);
                                        o(n), t(e)
                                    };
                                    var c = document.getElementsByTagName("head");
                                    c && c[0] && c[0].appendChild(u)
                                }(e, t)
                            }
                        }, i
                    }(t);
                    t.wxOpenApp = o, "object" == (0, ce.default)(e) && e.exports && (e.exports = o)
                }(i),
                function(e) {
                    e.Activity = {
                        optionParams: {
                            toInfoParams: {
                                typeParams: {
                                    des: "activity"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    content: "",
                                    title: "",
                                    type: "1"
                                },
                                requiredParams: {
                                    activityId: ""
                                },
                                ruleParams: {
                                    activityId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toInfo: function(t) {
                            e.jumpToPage("Activity", "toInfo", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Album = {
                        optionParams: {
                            toAlbumListParams: {
                                typeParams: {
                                    des: "album_list"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    selectTab: ""
                                },
                                ruleParams: {
                                    selectTab: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toAlbumDetailParams: {
                                typeParams: {
                                    des: "album_detail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toAlbumList: function(t) {
                            e.jumpToPage("Album", "toAlbumList", t)
                        },
                        toAlbumDetail: function(t) {
                            e.jumpToPage("Album", "toAlbumDetail", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Article = {
                        optionParams: {
                            toArticleDetailParams: {
                                typeParams: {
                                    des: "faxian_article"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toArticleAuthorParams: {
                                typeParams: {
                                    des: "faxian_author"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    authorId: ""
                                },
                                ruleParams: {
                                    authorId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toArticleDetail: function(t) {
                            e.jumpToPage("Article", "toArticleDetail", t)
                        },
                        toArticleAuthor: function(t) {
                            e.jumpToPage("Article", "toArticleAuthor", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Cart = {
                        optionParams: {
                            toCartParams: {
                                typeParams: {
                                    des: "cart"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    skuId: 0,
                                    skuNum: 0
                                },
                                ruleParams: {
                                    skuId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    skuNum: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toCartPacksParams: {
                                typeParams: {
                                    des: "cart"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    packsId: 0,
                                    packsNum: 0
                                },
                                ruleParams: {
                                    packsId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    packsNum: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toCartBParams: {
                                typeParams: {
                                    des: "cartB"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    skuId: 0,
                                    skuNum: 0
                                },
                                ruleParams: {
                                    skuId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    skuNum: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toCartBPacksParams: {
                                typeParams: {
                                    des: "cartB"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    packsId: 0,
                                    packsNum: 0
                                },
                                ruleParams: {
                                    packsId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    packsNum: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            listToCartParams: {
                                typeParams: {
                                    des: "cartB"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    skuList: ""
                                },
                                ruleParams: {
                                    skuList: {
                                        require: !0
                                    }
                                }
                            },
                            goCartParams: {
                                typeParams: {
                                    des: "cart"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        goCart: function(t) {
                            e.jumpToPage("cart", "goCart", t)
                        },
                        toCart: function(t) {
                            e.jumpToPage("cart", "toCart", t)
                        },
                        toCartPacks: function(t) {
                            e.jumpToPage("cart", "toCartPacks", t)
                        },
                        toCartB: function(t) {
                            e.jumpToPage("cart", "toCartB", t)
                        },
                        toCartBPacks: function(t) {
                            e.jumpToPage("cart", "toCartBPacks", t)
                        },
                        listToCart: function(t) {
                            e.jumpToPage("cart", "listToCart", t)
                        }
                    }
                }(i.Native.Jump),
                function(e, t) {
                    t.Comment = {
                        optionParams: {
                            toListParams: {
                                typeParams: {
                                    des: "commentCenter",
                                    business: "1"
                                },
                                edgeParams: {
                                    wareId: "",
                                    orderId: "",
                                    commentType: "",
                                    from: "",
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toDetailParams: {
                                typeParams: {
                                    des: "commentDetail"
                                },
                                edgeParams: {
                                    fromActivity: "",
                                    wareId: "",
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    productId: "",
                                    commentId: ""
                                },
                                ruleParams: {
                                    productId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    commentId: {
                                        require: !0
                                    }
                                }
                            },
                            toReportParams: {
                                typeParams: {
                                    des: "wareCommentReportDetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    wareId: "",
                                    reportId: ""
                                },
                                ruleParams: {
                                    wareId: {
                                        require: !0
                                    },
                                    reportId: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toList: function(e) {
                            t.jumpToPage("Comment", "toList", e)
                        },
                        toDetail: function(e) {
                            e.wareId = e.productId || "", t.jumpToPage("Comment", "toDetail", e)
                        },
                        toReport: function(e) {
                            t.jumpToPage("Comment", "toReport", e)
                        }
                    }
                }(0, i.Native.Jump),
                function(e) {
                    e.Commune = {
                        optionParams: {
                            toQuestionDetailParams: {
                                typeParams: {
                                    des: "commune",
                                    subDes: "questiondetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    questionID: "",
                                    productSku: ""
                                },
                                ruleParams: {
                                    questionID: {
                                        digit: !0,
                                        require: !0
                                    },
                                    productSku: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toQuestionListParams: {
                                typeParams: {
                                    des: "commune",
                                    subDes: "questionlist"
                                },
                                edgeParams: {
                                    productSku: "",
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toUserCenterParams: {
                                typeParams: {
                                    des: "commune",
                                    subDes: "usercenter"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toCategoryActivityListParams: {
                                typeParams: {
                                    des: "commune",
                                    subDes: "activitylist"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toCategoryActivityDetailParams: {
                                typeParams: {
                                    des: "commune",
                                    subDes: "activitydetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toCategoryQuestionListParams: {
                                typeParams: {
                                    des: "commune",
                                    subDes: "categorylist"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    cidType: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toCategoryQuestionDetailParams: {
                                typeParams: {
                                    des: "commune",
                                    subDes: "categorydetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    id: "",
                                    categoryID: ""
                                },
                                ruleParams: {
                                    id: {
                                        digit: !0,
                                        require: !0
                                    },
                                    categoryID: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toQuestionDetail: function(t) {
                            e.jumpToPage("Commune", "toQuestionDetail", t)
                        },
                        toQuestionList: function(t) {
                            t.id && (t.productSku = t.id), e.jumpToPage("Commune", "toQuestionList", t)
                        },
                        toUserCenter: function(t) {
                            e.jumpToPage("Commune", "toUserCenter", t)
                        },
                        toCategoryActivityDetail: function(t) {
                            e.jumpToPage("Commune", "toCategoryActivityDetail", t)
                        },
                        toCategoryActivityList: function(t) {
                            e.jumpToPage("Commune", "toCategoryActivityList", t)
                        },
                        toCategoryQuestionList: function(t) {
                            e.jumpToPage("Commune", "toCategoryQuestionList", t)
                        },
                        toCategoryQuestionDetail: function(t) {
                            e.jumpToPage("Commune", "toCategoryQuestionDetail", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Coupon = {
                        optionParams: {
                            toCenterParams: {
                                typeParams: {
                                    des: "couponCenter"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    batchStr: ""
                                },
                                requiredParams: {}
                            },
                            toMCenterParams: {
                                typeParams: {
                                    des: "m"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    url: ""
                                },
                                ruleParams: {
                                    url: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            toMyCouponParams: {
                                typeParams: {
                                    des: "mycoupon"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toCenter: function(t) {
                            e.jumpToPage("Coupon", "toCenter", t)
                        },
                        toMCenter: function(t) {
                            e.jumpToPage("Coupon", "toMCenter", t)
                        },
                        toMyCoupon: function(t) {
                            e.jumpToPage("Coupon", "toMyCoupon", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Discovery = {
                        optionParams: {
                            toDiscoveryParams: {
                                typeParams: {
                                    des: "Discovery"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toDiscovery: function(t) {
                            e.jumpToPage("Discovery", "toDiscovery", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Home = {
                        optionParams: {
                            toHomeParams: {
                                typeParams: {
                                    des: "HomePage"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toHome: function(t) {
                            e.jumpToPage("Home", "toHome", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.IAVoice = {
                        optionParams: {
                            initIAVoice: {
                                typeParams: {},
                                edgeParams: {},
                                requiredParams: {
                                    buissId: ""
                                }
                            }
                        },
                        versionParams: {
                            initIAVoice: {
                                ios: {
                                    initIAVoiceForIos619: {
                                        begin: "",
                                        end: "6.1.9"
                                    },
                                    initIAVoiceForIos620: {
                                        begin: "6.2.0",
                                        end: ""
                                    }
                                },
                                android: {
                                    initIAVoiceForAnd: {
                                        begin: "",
                                        end: ""
                                    }
                                }
                            },
                            startRecord: {
                                ios: {
                                    startRecordForIos619: {
                                        begin: "",
                                        end: "6.1.9"
                                    },
                                    startRecordForIos620: {
                                        begin: "6.2.0",
                                        end: ""
                                    }
                                },
                                android: {
                                    startRecordForAnd: {
                                        begin: "",
                                        end: ""
                                    }
                                }
                            },
                            stopRecord: {
                                ios: {
                                    stopRecordForIos619: {
                                        begin: "",
                                        end: "6.1.9"
                                    },
                                    stopRecordForIos620: {
                                        begin: "6.2.0",
                                        end: ""
                                    }
                                },
                                android: {
                                    stopRecordForAnd: {
                                        begin: "",
                                        end: ""
                                    }
                                }
                            },
                            startSpeechSynthesis: {
                                ios: {
                                    startSpeechSynthesisForIos619: {
                                        begin: "",
                                        end: "6.1.9"
                                    },
                                    startSpeechSynthesisForIos620: {
                                        begin: "6.2.0",
                                        end: ""
                                    }
                                },
                                android: {
                                    startSpeechSynthesisForAnd: {
                                        begin: "",
                                        end: ""
                                    }
                                }
                            },
                            stopSpeechSynthesis: {
                                ios: {
                                    stopSpeechSynthesisForIos619: {
                                        begin: "",
                                        end: "6.1.9"
                                    },
                                    stopSpeechSynthesisForIos620: {
                                        begin: "6.2.0",
                                        end: ""
                                    }
                                },
                                android: {
                                    stopSpeechSynthesisForAnd: {
                                        begin: "",
                                        end: ""
                                    }
                                }
                            }
                        },
                        initIAVoice: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "initIAVoice",
                                    inputParams: t,
                                    inputCallback: n
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        initIAVoiceForIos619: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "initIAVoiceForIos619",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("IAVoiceWebProxyModule/initIAVoice?buissId=" + t.buissId, n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        initIAVoiceForIos620: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "initIAVoiceForIos619",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("JDIAVoiceModule/initIAVoice?buissId=" + t.buissId, n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        initIAVoiceForAnd: function(t, n) {
                            var i = this,
                                o = {
                                    apiName: "initIAVoiceForAnd",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        r.intelligentAssistantSdk && r.intelligentAssistantSdk.initIAVoice ? (t.buissId = t.buissId || "", r.getIAInitRet = function(t) {
                                            e.Module.successCallback(t, n)
                                        }, r.intelligentAssistantSdk.initIAVoice(t.buissId, "getIAInitRet")) : e.Module.errorCallback("environment not support", n)
                                    }
                                };
                            e.Module.doBridgeFun(i, o)
                        },
                        startRecord: function(t) {
                            var n = this,
                                r = {
                                    apiName: "startRecord",
                                    inputCallback: t
                                };
                            e.Module.doBridgeFun(n, r)
                        },
                        startRecordForIos619: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "startRecordForIos619",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("IAVoiceWebProxyModule/startRecord", n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        startRecordForIos620: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "startRecordForIos620",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("JDIAVoiceModule/startRecord", n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        startRecordForAnd: function(t, n) {
                            var i = this,
                                o = {
                                    apiName: "startRecordForAnd",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        r.intelligentAssistantSdk && r.intelligentAssistantSdk.startRecord ? (r.getStartRecordRet = function(t) {
                                            e.Module.successCallback(t, n)
                                        }, r.intelligentAssistantSdk.startRecord("getStartRecordRet")) : e.Module.errorCallback("environment not support", n)
                                    }
                                };
                            e.Module.doBridgeFun(i, o)
                        },
                        stopRecord: function() {
                            var t = this,
                                n = {
                                    apiName: "stopRecord",
                                    inputCallback: function(t) {
                                        e.Common.printMsg("stopRecord", t)
                                    }
                                };
                            e.Module.doBridgeFun(t, n)
                        },
                        stopRecordForIos619: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "stopRecordForIos619",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("IAVoiceWebProxyModule/stopRecord", n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        stopRecordForIos620: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "stopRecordForIos620",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("JDIAVoiceModule/stopRecord", n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        stopRecordForAnd: function(t, n) {
                            var i = this,
                                o = {
                                    apiName: "stopRecordForAnd",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        r.intelligentAssistantSdk && r.intelligentAssistantSdk.stopRecord ? r.intelligentAssistantSdk.stopRecord() : e.Module.errorCallback("environment not support", n)
                                    }
                                };
                            e.Module.doBridgeFun(i, o)
                        },
                        startSpeechSynthesis: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "startSpeechSynthesis",
                                    inputParams: t,
                                    inputCallback: n
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        startSpeechSynthesisForIos619: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "startSpeechSynthesisForIos619",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        t.txt = t.txt || "", e.Module.callIOSStandardBridge("IAVoiceWebProxyModule/startSpeechSynthesis?content=" + t.txt, n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        startSpeechSynthesisForIos620: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "stopRecordForIos620",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("JDIAVoiceModule/startSpeechSynthesis?content=" + t.txt, n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        startSpeechSynthesisForAnd: function(t, n) {
                            var i = this,
                                o = {
                                    apiName: "startSpeechSynthesisForAnd",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        r.intelligentAssistantSdk && r.intelligentAssistantSdk.startSpeechSynthesis ? (t.txt = t.txt || "", r.getSpeechSynthesisRet = function(t) {
                                            e.Module.successCallback(t, n)
                                        }, r.intelligentAssistantSdk.startSpeechSynthesis(t.txt, "getSpeechSynthesisRet")) : e.Module.errorCallback("environment not support", n)
                                    }
                                };
                            e.Module.doBridgeFun(i, o)
                        },
                        stopSpeechSynthesis: function() {
                            var t = this,
                                n = {
                                    apiName: "stopSpeechSynthesis",
                                    inputCallback: function(t) {
                                        e.Common.printMsg("stopSpeechSynthesis", t)
                                    }
                                };
                            e.Module.doBridgeFun(t, n)
                        },
                        stopSpeechSynthesisForIos619: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "stopSpeechSynthesisForIos619",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("IAVoiceWebProxyModule/stopSpeechSynthesis", n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        stopSpeechSynthesisForIos620: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "stopSpeechSynthesisForIos620",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        e.Module.callIOSStandardBridge("JDIAVoiceModule/stopSpeechSynthesis", n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        stopSpeechSynthesisForAnd: function(t, n) {
                            var i = this,
                                o = {
                                    apiName: "stopSpeechSynthesisForAnd",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        r.intelligentAssistantSdk && r.intelligentAssistantSdk.stopSpeechSynthesis ? r.intelligentAssistantSdk.stopSpeechSynthesis() : e.Module.errorCallback("environment not support", n)
                                    }
                                };
                            e.Module.doBridgeFun(i, o)
                        }
                    }
                }(i),
                function(e) {
                    e.Inventory = {
                        optionParams: {
                            toInventoryDetailParams: {
                                typeParams: {
                                    des: "inventoryDetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toInventoryListParams: {
                                typeParams: {
                                    des: "inventory"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toInventoryDetail: function(t) {
                            e.jumpToPage("Inventory", "toInventoryDetail", t)
                        },
                        toInventoryList: function(t) {
                            e.jumpToPage("Inventory", "toInventoryList", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Jimi = {
                        optionParams: {
                            toJimiConsultParams: {
                                typeParams: {
                                    des: "jd_native_jimi"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toXiaoBingParams: {
                                typeParams: {
                                    des: "getXB"
                                },
                                edgeParams: {},
                                requiredParams: {}
                            }
                        },
                        toXiaoBing: function(t) {
                            e.jumpToPage("Jimi", "toXiaoBing", t)
                        },
                        toJimiConsult: function(t) {
                            e.jumpToPage("Jimi", "toJimiConsult", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Mpage = {
                        optionParams: {
                            toUrlParams: {
                                typeParams: {
                                    des: "m"
                                },
                                edgeParams: {},
                                requiredParams: {
                                    url: ""
                                },
                                ruleParams: {
                                    url: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toUrl: function(t) {
                            e.jumpToPage("mpage", "toUrl", t)
                        }
                    }
                }(i.Native.Jump),
                function(e, t) {
                    e.Order = {
                        optionParams: {
                            toInfoParams: {
                                typeParams: {},
                                edgeParams: {
                                    cartParams: "{}",
                                    shopCartSelectedNum: "0",
                                    recommendGoodsWareIds: "{}",
                                    orderType: "0",
                                    is170: "0",
                                    isYYS: "0",
                                    easyBuy: "0",
                                    fromCart: "0",
                                    isSolidCard: "0",
                                    mType: "",
                                    eventID: ""
                                },
                                requiredParams: {}
                            },
                            toListParams: {
                                typeParams: {
                                    des: "orderlist"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    title: "",
                                    tabname: "",
                                    fromPage: ""
                                },
                                requiredParams: {}
                            },
                            toAndroidListParams: {
                                typeParams: {
                                    des: "orderlist"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    functionId: ""
                                },
                                requiredParams: {}
                            },
                            toIOSListParams: {
                                typeParams: {
                                    des: "orderlist"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    listType: "",
                                    fromPage: ""
                                },
                                requiredParams: {}
                            },
                            toDetailParams: {
                                typeParams: {
                                    des: "orderDetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    orderId: ""
                                },
                                ruleParams: {
                                    orderId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toAndroidDetailParams: {
                                typeParams: {
                                    des: "orderDetail",
                                    isNew: !0
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    orderId: ""
                                },
                                ruleParams: {
                                    orderId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toIOSDetailParams: {
                                typeParams: {
                                    des: "orderDetail",
                                    jumpPage: "newPage"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    orderId: ""
                                },
                                ruleParams: {
                                    orderId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toTrackParams: {
                                typeParams: {
                                    des: "orderTrack"
                                },
                                edgeParams: {
                                    fromPage: "",
                                    loginType: "",
                                    token: "",
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    orderId: ""
                                },
                                ruleParams: {
                                    orderId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toShareParams: {
                                typeParams: {
                                    des: "shareOrder"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    wareId: "",
                                    orderId: ""
                                },
                                ruleParams: {
                                    wareId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    orderId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toInfo: function(t) {
                            e.jumpToPage("Order", "toInfo", t)
                        },
                        toList: function(e) {
                            t.Module.isAndroid() ? (e.functionId = e.tabname || "", this.toAndroidList(e)) : t.Module.isIOS() && (e.listType = e.tabname || "", this.toIOSList(e))
                        },
                        toAndroidList: function(t) {
                            e.jumpToPage("Order", "toAndroidList", t)
                        },
                        toIOSList: function(t) {
                            e.jumpToPage("Order", "toIOSList", t)
                        },
                        toDetail: function(e) {
                            t.Module.isAndroid() ? this.toAndroidDetail(e) : t.Module.isIOS() && this.toIOSDetail(e)
                        },
                        toAndroidDetail: function(t) {
                            e.jumpToPage("Order", "toAndroidDetail", t)
                        },
                        toIOSDetail: function(t) {
                            e.jumpToPage("Order", "toIOSDetail", t)
                        },
                        toTrack: function(t) {
                            e.jumpToPage("Order", "toTrack", t)
                        },
                        toShare: function(t) {
                            e.jumpToPage("Order", "toShare", t)
                        }
                    }
                }(i.Native.Jump, i),
                function(e) {
                    e.Pay = {
                        optionParams: {
                            toPaymentCodeParams: {
                                typeParams: {
                                    des: "jdpaymentcode"
                                },
                                edgeParams: {},
                                requiredParams: {}
                            },
                            toPaySuccessParams: {
                                typeParams: {
                                    des: "paySuccess"
                                },
                                edgeParams: {
                                    jdreactparam: ""
                                },
                                requiredParams: {
                                    jdreactmodule: ""
                                },
                                ruleParams: {
                                    jdreactmodule: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toPaymentCode: function(t) {
                            e.jumpToPage("Pay", "toPaymentCode", t)
                        },
                        toPaySuccess: function(t) {
                            e.jumpToPage("Pay", "toPaySuccess", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Product = {
                        optionParams: {
                            toListFromSearchParams: {
                                typeParams: {
                                    from: "search",
                                    des: "productList"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    showWord: "",
                                    realWord: "",
                                    hiddenAudioButton: "0",
                                    channelName: "",
                                    channelTitle: "",
                                    cid: "",
                                    filed: "",
                                    jdsupermaket: "0",
                                    is_allworld_shopping: "0",
                                    searchSource: ""
                                },
                                requiredParams: {
                                    keyWord: ""
                                },
                                ruleParams: {
                                    keyWord: {
                                        require: !0
                                    }
                                }
                            },
                            toListFromCategoryParams: {
                                typeParams: {
                                    from: "category",
                                    des: "productList"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    title: ""
                                },
                                requiredParams: {
                                    cid: "0",
                                    levelFirst: "0",
                                    levelSecond: "0"
                                },
                                ruleParams: {
                                    cid: {
                                        digit: !0,
                                        require: !0
                                    },
                                    levelFirst: {
                                        digit: !0,
                                        require: !0
                                    },
                                    levelSecond: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toListFromCouponBatchParams: {
                                typeParams: {
                                    from: "couponBatch",
                                    des: "productList"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    intel: ""
                                },
                                requiredParams: {
                                    couponId: "0",
                                    tip: ""
                                },
                                ruleParams: {
                                    couponId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    tip: {
                                        require: !0
                                    }
                                }
                            },
                            toListFromPromotionParams: {
                                typeParams: {
                                    from: "promotion",
                                    des: "productList"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    intel: ""
                                },
                                requiredParams: {
                                    activityId: "0",
                                    tip: ""
                                },
                                ruleParams: {
                                    activityId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    tip: {
                                        require: !0
                                    }
                                }
                            },
                            toDetailParams: {
                                typeParams: {
                                    des: "productDetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    skuId: 0
                                },
                                ruleParams: {
                                    skuId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toListFromSearch: function(t) {
                            e.jumpToPage("Product", "toListFromSearch", t)
                        },
                        toListFromCategory: function(t) {
                            e.jumpToPage("Product", "toListFromCategory", t)
                        },
                        toListFromCouponBatch: function(t) {
                            e.jumpToPage("Product", "toListFromCouponBatch", t)
                        },
                        toListFromPromotion: function(t) {
                            e.jumpToPage("Product", "toListFromPromotion", t)
                        },
                        toDetail: function(t) {
                            e.jumpToPage("Product", "toDetail", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Shop = {
                        optionParams: {
                            toShopMainParams: {
                                typeParams: {
                                    des: "jshopMain"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    jumpTab: "",
                                    venderId: ""
                                },
                                requiredParams: {
                                    shopId: "0"
                                },
                                ruleParams: {
                                    shopId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toShopListParams: {
                                typeParams: {
                                    des: "jshopList",
                                    currentTab: 1
                                },
                                edgeParams: {},
                                requiredParams: {}
                            },
                            toShopMemberParams: {
                                typeParams: {
                                    des: "jshopMember"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    followAward: "-1"
                                },
                                requiredParams: {
                                    shopId: "0",
                                    venderId: "0"
                                },
                                ruleParams: {
                                    shopId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    venderId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toShopBrandParams: {
                                typeParams: {
                                    des: "jshopBrand"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: "",
                                    cid: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toShopMain: function(t) {
                            e.jumpToPage("Shop", "toShopMain", t)
                        },
                        toShopList: function(t) {
                            e.jumpToPage("Shop", "toShopList", t)
                        },
                        toShopMember: function(t) {
                            e.jumpToPage("Shop", "toShopMember", t)
                        },
                        toShopBrand: function(t) {
                            e.jumpToPage("Shop", "toShopBrand", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Smartassistant = {
                        optionParams: {
                            toSmartassistantParams: {
                                typeParams: {
                                    des: "IntelligentAssistant"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    from: ""
                                },
                                ruleParams: {
                                    from: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toSmartassistant: function(t) {
                            e.jumpToPage("Smartassistant", "toSmartassistant", t)
                        }
                    }
                }(i.Native.Jump),
                function(e, t) {
                    e.Sys = {
                        versionParams: {
                            openCamera: {
                                ios: {
                                    openCameraForIos: {}
                                },
                                android: {
                                    openCameraForAnd: {}
                                }
                            },
                            openContacts: {
                                ios: {
                                    openContactsForIos: {}
                                },
                                android: {
                                    openContactsForAnd: {}
                                }
                            },
                            showChooseImage: {
                                ios: {
                                    showChooseImageForIos: {}
                                },
                                android: {
                                    showChooseImageForAnd: {}
                                }
                            },
                            showBarcodeScan: {
                                ios: {
                                    showBarcodeScanForIos: {}
                                },
                                android: {
                                    showBarcodeScanForAnd: {}
                                }
                            },
                            startRecord: {
                                ios: {
                                    startRecordForIos: {}
                                },
                                android: {
                                    startRecordForAnd: {}
                                }
                            },
                            getSound: {
                                ios: {
                                    getSoundForIos: {}
                                },
                                android: {
                                    getSoundForAnd: {}
                                }
                            },
                            stopRecord: {
                                ios: {
                                    stopRecordForIos: {}
                                },
                                android: {
                                    stopRecordForAnd: {}
                                }
                            }
                        },
                        openCamera: function(e, n) {
                            if (n = n || function(e) {
                                    console.log(e)
                                }, "object" != (void 0 === e ? "undefined" : (0, ce.default)(e)) && n("params error"), e.videoMaxTime = e.videoMaxTime || 10, e.mediaType = e.mediaType || [], "[object Array]" !== Object.prototype.toString.call(e.mediaType)) return void n("参数错误");
                            0 === e.mediaType.length ? e.mediaType = 0 : 1 === e.mediaType.length ? "image" === e.mediaType[0] ? e.mediaType = 1 : "video" === e.mediaType[0] ? e.mediaType = 2 : e.mediaType = 0 : (-1 !== e.mediaType.indexOf("image") && e.mediaType.indexOf("video"), e.mediaType = 0), t.Module.isIOS() ? this.openCameraForIos(e, n) : this.openCameraForAnd(e, n)
                        },
                        openCameraForIos: function(e, n) {
                            t.Common.printMsg("ios", "openCamera"), r.iosOpenCameraCallBack = function(e) {
                                n(e)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "openCamera",
                                params: e,
                                callBackName: "iosOpenCameraCallBack"
                            })
                        },
                        openCameraForAnd: function(e, n) {
                            t.Common.printMsg("android", "openCamera"), r.androidOpenCameraCallBack = function(e) {
                                n(e)
                            }, r.androidUploadImg && androidUploadImg.openCamera && (e = (0, se.default)(e), androidUploadImg.openCamera(e))
                        },
                        showChooseImage: function(e, n) {
                            if ("function" == typeof e && (n = e, e = {}), e = e || {}, e.multiple ? e.multiple = 1 : e.multiple = 0, e.isShowBeautify ? e.isShowBeautify = 1 : e.isShowBeautify = 0, e.mediaType = e.mediaType || [], "[object Array]" !== Object.prototype.toString.call(e.mediaType)) return void n("参数错误");
                            0 === e.mediaType.length ? e.mediaType = 0 : 1 === e.mediaType.length ? "image" === e.mediaType[0] ? e.mediaType = 1 : "video" === e.mediaType[0] ? e.mediaType = 2 : e.mediaType = 0 : (-1 !== e.mediaType.indexOf("image") && e.mediaType.indexOf("video"), e.mediaType = 0), e.videoMaxTime = e.videoMaxTime || 10, t.Module.isIOS() ? this.showChooseImageForIos(e, n) : this.showChooseImageForAnd(e, n)
                        },
                        showChooseImageForIos: function(e, n) {
                            t.Common.printMsg("ios", "showChooseImage"), r.iosChooseImageCallBack = function(e) {
                                n(e)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "showChooseImage",
                                params: e,
                                callBackName: "iosChooseImageCallBack"
                            })
                        },
                        showChooseImageForAnd: function(e, n) {
                            t.Common.printMsg("android", "showChooseImage"), r.imageSrc = function(e) {
                                n(e)
                            }, e = (0, se.default)(e), r.androidUploadImg && androidUploadImg.imageUpload && androidUploadImg.imageUpload(e)
                        },
                        getImageBase64: function(e, n) {
                            n = n || function(e) {
                                console.log(e)
                            }, e.ratio = e.ratio || "0.1", t.Module.isIOS() ? this.getImageBase64ForIos(e, n) : this.getImageBase64ForAnd(e, n)
                        },
                        getImageBase64ForIos: function(e, n) {
                            t.Common.printMsg("ios", "getImageBase64"), r.iosGetImageBase64CallBack = function(e) {
                                e = e.replace(/[\r|\n]/g, ""), n(e)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "getImageBase64",
                                params: {
                                    filesAddress: e.filesAddress,
                                    ratio: e.ratio
                                },
                                callBackName: "iosGetImageBase64CallBack"
                            })
                        },
                        getImageBase64ForAnd: function(e, n) {
                            t.Common.printMsg("android", "getImageBase64"), r.androidGetImageBase64CallBack = function(e) {
                                n(e)
                            }, r.androidUploadImg && androidUploadImg.getImageBase64 && (e = (0, se.default)(e), androidUploadImg.getImageBase64(e))
                        },
                        uploadFileByLocalAddress: function(e, n, r) {
                            if (n = n || function(e) {
                                    console.log(e)
                                }, r = r || function(e) {
                                    console.log(e)
                                }, e && e.filesAddress)
                                for (var i = 0; i < e.filesAddress.length; i++) e.filesAddress[i].parm && (e.filesAddress[i].parm.codeType = 1);
                            t.Module.isIOS() ? this.uploadFileByLocalAddressForIos(e, n, r) : this.uploadFileByLocalAddressForAnd(e, n, r)
                        },
                        uploadFileByLocalAddressForIos: function(e, n, i) {
                            t.Common.printMsg("ios", "uploadFileByLocalAddress"), r.iosUploadFileByLocalAddressCallBack = function(e) {
                                n(e)
                            }, r.iosUploadFileProcessCallBack = function(e) {
                                i(e)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "uploadFileByLocalAddress",
                                params: {
                                    uploadUrl: e.uploadUrl,
                                    filesAddress: e.filesAddress
                                },
                                uploadCallbackName: "iosUploadFileByLocalAddressCallBack",
                                uploadProcessCallbackName: "iosUploadFileProcessCallBack"
                            })
                        },
                        uploadFileByLocalAddressForAnd: function(e, n, i) {
                            t.Common.printMsg("android", "uploadFileByLocalAddress"), r.androidUploadFileByLocalAddressCallBack = function(e) {
                                n(e)
                            }, r.androidUploadFileProcessCallBack = function(e) {
                                i(e)
                            }, e.uploadCallbackName = "androidUploadFileByLocalAddressCallBack", e.uploadProcessCallbackName = "androidUploadFileProcessCallBack", e = (0, se.default)(e), r.androidUploadImg && androidUploadImg.uploadFileByLocalAddress && androidUploadImg.uploadFileByLocalAddress(e)
                        },
                        startRecord: function(e) {
                            e = e || function(e) {
                                console.log(e)
                            }, t.Module.isIOS() ? this.startRecordForIos(e) : this.startRecordForAnd(e)
                        },
                        startRecordForIos: function(e) {
                            t.Common.printMsg("ios", "startRecord"), r.iosStartRecordCallBack = function(t) {
                                e(t)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "startRecord",
                                params: null,
                                callBackName: "iosStartRecordCallBack"
                            })
                        },
                        startRecordForAnd: function(e) {
                            t.Common.printMsg("android", "startRecord"), r.androidStartRecordCallBack = function(t) {
                                e(t)
                            }, r.androidSound && androidSound.startRecord && androidSound.startRecord()
                        },
                        stopRecord: function(e) {
                            e = e || function(e) {
                                console.log(e)
                            }, t.Module.isIOS() ? this.stopRecordForIos(e) : this.stopRecordForAnd(e)
                        },
                        stopRecordForIos: function(e) {
                            t.Common.printMsg("ios", "stopRecord"), r.iosStopRecordCallBack = function(t) {
                                e(t)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "stopRecord",
                                params: null,
                                callBackName: "iosStopRecordCallBack"
                            })
                        },
                        stopRecordForAnd: function(e) {
                            t.Common.printMsg("android", "stopRecord"), r.androidStopRecordCallBack = function(t) {
                                e(t)
                            }, r.androidSound && androidSound.stopRecord && androidSound.stopRecord()
                        },
                        showBarcodeScan: function(e) {
                            e = e || function(e) {
                                console.log(e)
                            }, t.Module.isIOS() ? this.showBarcodeScanForIos(e) : this.showBarcodeScanForAnd(e)
                        },
                        showBarcodeScanForIos: function(e) {
                            t.Common.printMsg("ios", "showBarcodeScan"), r.showBarcodeScanCallback = function(t) {
                                e(t)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "showNativeBarcodeScan",
                                params: null,
                                callBackName: "showBarcodeScanCallback"
                            })
                        },
                        showBarcodeScanForAnd: function(e) {
                            t.Common.printMsg("android", "showBarcodeScan"), r.MobileNavi && MobileNavi.showNativeBarcodeScan ? (t.Common.printMsg("android", "showBarcodeScan environment support"), r.showBarcodeScanCallback = function(t) {
                                e(t)
                            }, MobileNavi.showNativeBarcodeScan("showBarcodeScanCallback")) : (t.Common.printMsg("android", "showBarcodeScan environment not support"), t.Module.errorCallback("environment not support", e))
                        }
                    }
                }(i.Native, i),
                function(e, t) {
                    e.Timeline = {
                        optionParams: {
                            toIOSSkillGroupParams: {
                                typeParams: {
                                    des: "jd_native_im"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    orgId: ""
                                },
                                ruleParams: {
                                    orgId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toAndroidSkillGroupParams: {
                                typeParams: {
                                    des: "im",
                                    from: "com.jd.start.dd.entryask",
                                    customer_type: "0",
                                    venderId: "1"
                                },
                                edgeParams: {
                                    entry: "",
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    skillId: ""
                                },
                                ruleParams: {
                                    skillId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toIOSSellerParams: {
                                typeParams: {
                                    des: "jd_native_im"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    venderid: ""
                                },
                                ruleParams: {
                                    venderid: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toAndroidSellerParams: {
                                typeParams: {
                                    des: "im",
                                    from: "com.jd.start.dd.entryask",
                                    customer_type: "1"
                                },
                                edgeParams: {
                                    entry: "",
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    venderId: ""
                                },
                                ruleParams: {
                                    venderId: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            },
                            toServiceFeedbackParams: {
                                typeParams: {
                                    des: "jd_native_im"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toProductConsultParams: {
                                typeParams: {
                                    des: "im"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    skuId: "",
                                    name: "",
                                    imgUrl: "",
                                    price: ""
                                },
                                ruleParams: {
                                    skuId: {
                                        digit: !0,
                                        require: !0
                                    },
                                    name: {
                                        require: !0
                                    },
                                    imgUrl: {
                                        url: !0,
                                        require: !0
                                    },
                                    price: {
                                        number: !0,
                                        require: !0
                                    }
                                }
                            },
                            toServiceHomeParams: {
                                typeParams: {
                                    des: "im",
                                    entry: "jd_phone_jddaojia"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toAndroidSkillGroup: function(t) {
                            e.jumpToPage("Timeline", "toAndroidSkillGroup", t)
                        },
                        toIOSSkillGroup: function(t) {
                            e.jumpToPage("Timeline", "toIOSSkillGroup", t)
                        },
                        toSkillGroup: function(e) {
                            t.Module.isAndroid() ? (e.skillId = e.orgId || "", this.toAndroidSkillGroup(e)) : t.Module.isIOS() && this.toIOSSkillGroup(e)
                        },
                        toAndroidSeller: function(t) {
                            e.jumpToPage("Timeline", "toAndroidSeller", t)
                        },
                        toIOSSeller: function(t) {
                            e.jumpToPage("Timeline", "toIOSSeller", t)
                        },
                        toSeller: function(e) {
                            t.Module.isAndroid() ? (e.venderId = e.venderid || "", this.toAndroidSeller(e)) : t.Module.isIOS() && this.toIOSSeller(e)
                        },
                        toServiceFeedback: function(t) {
                            e.jumpToPage("Timeline", "toServiceFeedback", t)
                        },
                        toProductConsult: function(t) {
                            e.jumpToPage("Timeline", "toProductConsult", t)
                        },
                        toServiceHome: function(t) {
                            e.jumpToPage("Timeline", "toServiceHome", t)
                        }
                    }
                }(i.Native.Jump, i),
                function(e) {
                    e.Isv = {
                        optionParams: {
                            requestIsvToken: {
                                typeParams: {},
                                edgeParams: {
                                    id: ""
                                },
                                requiredParams: {
                                    url: ""
                                },
                                ruleParams: {
                                    url: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        versionParams: {
                            requestIsvToken: {}
                        },
                        requestIsvToken: function(t, n) {
                            var i = this;
                            e.Module.doFunForPlatForm(i, "requestIsvToken", t, n, function() {
                                if (r.requestIsvTokenRet = function(e) {
                                        if (e) var t = JSON.parse(e);
                                        n(t)
                                    }, t.url = t.url || "", t.id = t.id || "", t = (0, se.default)(t), r.JDAppUnite && r.JDAppUnite.requestIsvToken) JDAppUnite.requestIsvToken(t, "requestIsvTokenRet");
                                else if (e.Common.client.WKwebview) {
                                    var i = {
                                        method: "requestIsvToken",
                                        params: t,
                                        callBackName: "requestIsvTokenRet",
                                        callBackId: null
                                    };
                                    r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage && r.webkit.messageHandlers.JDPGAppUnite.postMessage(i)
                                } else e.Module.standardCallback({
                                    state: "0",
                                    data: "",
                                    msg: "environment not support"
                                }, n)
                            })
                        },
                        isAppLogin: function(t) {
                            var n = this;
                            e.Module.doFunForPlatForm(n, "isAppLogin", {}, t, function() {
                                if (r.isAppLoginRet = function(n) {
                                        e.Module.standardCallback(n, t)
                                    }, r.JDAppUnite && r.JDAppUnite.isAppLogin) JDAppUnite.isAppLogin("isAppLoginRet");
                                else if (e.Common.client.WKwebview) {
                                    var n = {
                                        method: "isAppLogin",
                                        params: null,
                                        callBackName: "isAppLoginRet"
                                    };
                                    r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage && r.webkit.messageHandlers.JDPGAppUnite.postMessage(n)
                                } else e.Module.standardCallback({
                                    state: "0",
                                    data: "",
                                    msg: "environment not support"
                                }, t)
                            })
                        },
                        requestLogin: function(t) {
                            var n = this;
                            e.Module.doFunForPlatForm(n, "requestLogin", {}, t, function() {
                                if (r.requestLoginRet = function(n) {
                                        e.Module.standardCallback(n, t)
                                    }, r.JDAppUnite && r.JDAppUnite.requestLogin) JDAppUnite.requestLogin("requestLoginRet");
                                else if (e.Common.client.WKwebview) {
                                    var n = {
                                        method: "requestLogin",
                                        params: null,
                                        callBackName: "requestLoginRet"
                                    };
                                    r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage && r.webkit.messageHandlers.JDPGAppUnite.postMessage(n)
                                } else e.Module.standardCallback({
                                    state: "0",
                                    data: "",
                                    msg: "environment not support"
                                }, t)
                            })
                        },
                        callWeiXinPay: function(t, n) {
                            if (r.callWeiXinPayCallback = function(e) {
                                    n(e)
                                }, e.Common.printMsg(e.Module.isIOS() ? "ios" : "android", "callWeiXinPay"), e.Module.isIOS() && r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage) {
                                var i = {
                                    method: "callWeiXinPay",
                                    params: t,
                                    callBackName: "callWeiXinPayCallback"
                                };
                                r.webkit.messageHandlers.JDPGAppUnite.postMessage(i)
                            } else r.JDPaySdk && r.JDPaySdk.callWeiXinPay ? (t = (0, se.default)(t), JDPaySdk.callWeiXinPay(t)) : n({
                                msg: "environment not support"
                            })
                        },
                        callWeiXinSigning: function(t, n) {
                            if (r.callWeiXinSigningCallback = function(e) {
                                    n(e)
                                }, e.Common.printMsg(e.Module.isIOS() ? "ios" : "android", "callWeiXinSigning"), e.Module.isIOS() && r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage) {
                                var i = {
                                    method: "callWeiXinSigning",
                                    params: t,
                                    callBackName: "callWeiXinSigningCallback"
                                };
                                r.webkit.messageHandlers.JDPGAppUnite.postMessage(i)
                            } else r.JDPaySdk && r.JDPaySdk.callWeiXinSigning ? (t = (0, se.default)(t), JDPaySdk.callWeiXinSigning(t)) : n({
                                msg: "environment not support"
                            })
                        },
                        doFunForWKWebview: function(e) {
                            r.webkit && r.webkit.messageHandlers.JDAppUnite.postMessage && r.webkit.messageHandlers.JDAppUnite.postMessage(e)
                        }
                    }
                }(i),
                function(e) {
                    e.Story = {
                        optionParams: {
                            toMainStoryParams: {
                                typeParams: {
                                    des: "story",
                                    subDes: "mainStory"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toActivityListParams: {
                                typeParams: {
                                    des: "story",
                                    subDes: "activityList"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toActivityParams: {
                                typeParams: {
                                    des: "story",
                                    subDes: "activity"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    activityID: ""
                                },
                                ruleParams: {
                                    activityID: {
                                        require: !0
                                    }
                                }
                            },
                            toActivityPKParams: {
                                typeParams: {
                                    des: "story",
                                    subDes: "activity"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    activityID: ""
                                },
                                ruleParams: {
                                    activityID: {
                                        require: !0
                                    }
                                }
                            },
                            toCircleListParams: {
                                typeParams: {
                                    des: "story",
                                    subDes: "circleList"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            },
                            toCircleParams: {
                                typeParams: {
                                    des: "story",
                                    subDes: "circle"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    circleID: ""
                                },
                                ruleParams: {
                                    activityID: {
                                        require: !0
                                    }
                                }
                            },
                            toStoryDetailParams: {
                                typeParams: {
                                    des: "story",
                                    subDes: "storyDetail"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {
                                    storyID: ""
                                },
                                ruleParams: {
                                    storyID: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toMainStory: function(t) {
                            e.jumpToPage("Story", "toMainStory", t)
                        },
                        toActivityList: function(t) {
                            e.jumpToPage("Story", "toActivityList", t)
                        },
                        toActivity: function(t) {
                            e.jumpToPage("Story", "toActivity", t)
                        },
                        toActivityPK: function(t) {
                            e.jumpToPage("Story", "toActivityPK", t)
                        },
                        toCircleList: function(t) {
                            e.jumpToPage("Story", "toCircleList", t)
                        },
                        toCircle: function(t) {
                            e.jumpToPage("Story", "toCircle", t)
                        },
                        toStoryDetail: function(t) {
                            e.jumpToPage("Story", "toStoryDetail", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Rank = {
                        optionParams: {
                            toMainParams: {
                                typeParams: {
                                    des: "RankingMain"
                                },
                                edgeParams: {
                                    from: ""
                                },
                                requiredParams: {}
                            },
                            toSignParams: {
                                typeParams: {
                                    des: "signRank"
                                },
                                edgeParams: {
                                    pageType: ""
                                },
                                requiredParams: {}
                            },
                            toListParams: {
                                typeParams: {
                                    des: "ranklist"
                                },
                                edgeParams: {
                                    from: "",
                                    categoryIds: "",
                                    cateName: "",
                                    rankId: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toMain: function(t) {
                            e.jumpToPage("Rank", "toMain", t)
                        },
                        toSign: function(t) {
                            e.jumpToPage("Rank", "toSign", t)
                        },
                        toList: function(t) {
                            e.jumpToPage("Rank", "toList", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Dna = {
                        optionParams: {
                            toDnaParams: {
                                typeParams: {
                                    des: "myDNA"
                                },
                                edgeParams: {
                                    from: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toDna: function(t) {
                            e.jumpToPage("Dna", "toDna", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Oftenbuy = {
                        optionParams: {
                            toOftenBuyParams: {
                                typeParams: {
                                    des: "oftenBuy"
                                },
                                edgeParams: {},
                                requiredParams: {}
                            }
                        },
                        toOftenBuy: function(t) {
                            e.jumpToPage("Oftenbuy", "toOftenBuy", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Similar = {
                        optionParams: {
                            toSimilarParams: {
                                typeParams: {
                                    des: "lookSimilar"
                                },
                                edgeParams: {
                                    sku_price: "",
                                    sku_name: "",
                                    sku_img_url: "",
                                    sku_status: ""
                                },
                                requiredParams: {
                                    sku_id: ""
                                },
                                ruleParams: {
                                    sku_id: {
                                        digit: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        toSimilar: function(t) {
                            e.jumpToPage("Similar", "toSimilar", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Recharge = {
                        optionParams: {
                            toRechargeParams: {
                                typeParams: {
                                    des: "newrecharge"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {
                                    chargeType: ""
                                },
                                ruleParams: {
                                    chargeType: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toRecharge: function(t) {
                            e.jumpToPage("Recharge", "toRecharge", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Remind = {
                        optionParams: {
                            toRemindParams: {
                                typeParams: {
                                    des: "myRemind"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toRemind: function(t) {
                            e.jumpToPage("Remind", "toRemind", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Babel = {
                        optionParams: {
                            toBabelParams: {
                                typeParams: {
                                    des: "babel"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {
                                    activityId: ""
                                },
                                ruleParams: {
                                    activityId: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toBabel: function(t) {
                            e.jumpToPage("Babel", "toBabel", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Jdreact = {
                        optionParams: {
                            toDebugParams: {
                                typeParams: {
                                    des: "jdreactdebug"
                                },
                                edgeParams: {
                                    mode: "0"
                                },
                                requiredParams: {
                                    url: ""
                                },
                                ruleParams: {
                                    url: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            toCommonParams: {
                                typeParams: {
                                    des: "jdreactcommon"
                                },
                                edgeParams: {
                                    title: "",
                                    ishidden: "true",
                                    param: {}
                                },
                                requiredParams: {
                                    modulename: "",
                                    appname: ""
                                },
                                ruleParams: {
                                    modulename: {
                                        require: !0
                                    },
                                    appname: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toDebug: function(t) {
                            e.jumpToPage("Jdreact", "toDebug", t)
                        },
                        toCommon: function(t) {
                            e.jumpToPage("Jdreact", "toCommon", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Brand = {
                        optionParams: {
                            toDynamicDetailParams: {
                                typeParams: {
                                    des: "jshopDynamicDetail"
                                },
                                edgeParams: {
                                    source: "",
                                    from: "",
                                    activityType: ""
                                },
                                requiredParams: {
                                    activityId: "",
                                    shopId: "",
                                    venderId: ""
                                },
                                ruleParams: {
                                    activityId: {
                                        require: !0
                                    },
                                    shopId: {
                                        require: !0
                                    },
                                    venderId: {
                                        require: !0
                                    }
                                }
                            },
                            toBrandHeadlineParams: {
                                typeParams: {
                                    des: "native_storetrend"
                                },
                                edgeParams: {
                                    from: "",
                                    source: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toDynamicDetail: function(t) {
                            e.jumpToPage("Brand", "toDynamicDetail", t)
                        },
                        toBrandHeadline: function(t) {
                            e.jumpToPage("Brand", "toBrandHeadline", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Live = {
                        optionParams: {
                            toFindLivesParams: {
                                typeParams: {
                                    des: "FindLivePlayList"
                                },
                                edgeParams: {
                                    innerAnchor: "",
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {}
                            },
                            toLiveRoomParams: {
                                typeParams: {
                                    des: "LivePlayerRoom"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: "",
                                    position: "0",
                                    isVR: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        require: !0
                                    }
                                }
                            },
                            toPreviewParams: {
                                typeParams: {
                                    des: "FindLivePreDetail"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        require: !0
                                    }
                                }
                            }
                        },
                        toFindLives: function(t) {
                            e.jumpToPage("Live", "toFindLives", t)
                        },
                        toLiveRoom: function(t) {
                            e.jumpToPage("Live", "toLiveRoom", t)
                        },
                        toPreview: function(t) {
                            e.jumpToPage("Live", "toPreview", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Seckill = {
                        optionParams: {
                            toLiveListParams: {
                                typeParams: {
                                    des: "SecKillLivePlayList"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {}
                            },
                            toPreviewParams: {
                                typeParams: {
                                    des: "SecKillLivePreDetail"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {
                                    id: ""
                                },
                                ruleParams: {
                                    id: {
                                        require: !0
                                    }
                                }
                            },
                            toBrandInnerParams: {
                                typeParams: {
                                    des: "brandinner"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {
                                    brandId: ""
                                },
                                ruleParams: {
                                    brandId: {
                                        require: !0
                                    }
                                }
                            },
                            toMainPageParams: {
                                typeParams: {
                                    des: "seckill"
                                },
                                edgeParams: {
                                    sourceType: "",
                                    sourceValue: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toLiveList: function(t) {
                            e.jumpToPage("Seckill", "toLiveList", t)
                        },
                        toPreview: function(t) {
                            e.jumpToPage("Seckill", "toPreview", t)
                        },
                        toBrandInner: function(t) {
                            e.jumpToPage("Seckill", "toBrandInner", t)
                        },
                        toMainPage: function(t) {
                            e.jumpToPage("Seckill", "toMainPage", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Video = {
                        optionParams: {
                            openVideoPlayer: {
                                typeParams: {},
                                edgeParams: {
                                    exitOnEnd: "",
                                    from: ""
                                },
                                requiredParams: {
                                    videoUrl: "",
                                    imageUrl: ""
                                }
                            }
                        },
                        versionParams: {
                            openVideoPlayer: {
                                ios: {
                                    openVideoPlayerForIos: {}
                                },
                                android: {
                                    openVideoPlayerForAnd: {}
                                }
                            }
                        },
                        openVideoPlayer: function(t, n) {
                            n = n || function(e) {
                                console.log(e)
                            }, console.log("openVideoPlayer===>", t);
                            var r = this,
                                i = {
                                    apiName: "openVideoPlayer",
                                    inputParams: t,
                                    inputCallback: n
                                };
                            e.Module.doBridgeFun(r, i)
                        },
                        openVideoPlayerForIos: function(t, n) {
                            e.Common.printMsg("ios", "openVideoPlayer"), console.log("openVideoPlayer===>", t), r.openVideoPlayerCallback = function(e) {
                                n(e)
                            }, r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "openVideoPlayer",
                                params: t,
                                callBackName: "openVideoPlayerCallback"
                            })
                        },
                        openVideoPlayerForAnd: function(t, n) {
                            var r = this,
                                i = {
                                    apiName: "openVideoPlayerForAnd",
                                    inputParams: t,
                                    inputCallback: n,
                                    logic: function() {
                                        var i = e.Module.getRouterUrl("JDPlayerModule/showPlayer", r.optionParams.openVideoPlayer, t);
                                        e.Module.toAppUrl(i), e.Module.successCallback("open success", n)
                                    }
                                };
                            e.Module.doBridgeFun(r, i)
                        }
                    }
                }(i),
                function(e) {
                    e.WxShare = {
                        optionParams: {
                            customShareParams: {
                                requiredParams: {
                                    iconUrl: "",
                                    shareUrl: r.location.href,
                                    title: "",
                                    content: "",
                                    callfunc: null
                                }
                            }
                        },
                        require: function(e, t) {
                            var n = document,
                                r = n.head || n.getElementsByTagName("head")[0] || n.documentElement,
                                i = n.createElement("script");
                            i.onload = t, i.onerror = function() {}, i.async = !0, i.src = e[0], r.appendChild(i)
                        },
                        isFunction: function(e) {
                            return "function" == typeof e
                        },
                        customShare: function(t) {
                            var n = this,
                                i = n.optionParams.customShareParams.requiredParams;
                            if (e.Common.extend(i, t), e.Common.client.weixin) var o = setInterval(function() {
                                r.WeixinJSBridge && (n.wechatShareInit(), clearInterval(o))
                            }, 100);
                            else e.Common.client.qq && (r.mqq ? n.QQShareConfig() : n.require(["//open.mobile.qq.com/sdk/qqapi.js?_bid=152"], function() {
                                n.QQShareConfig()
                            }))
                        },
                        wechatShareInit: function() {
                            var e = this;
                            "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", e.wechatShareConfig, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e.wechatShareConfig), document.attachEvent("onWeixinJSBridgeReady", e.wechatShareConfig)) : e.wechatShareConfig()
                        },
                        wechatShareConfig: function() {
                            var e = this,
                                t = e.optionParams.customShareParams.requiredParams,
                                n = {
                                    img_url: t.iconUrl,
                                    img_width: "120",
                                    img_height: "120",
                                    link: t.shareUrl,
                                    desc: t.content,
                                    title: t.title
                                };
                            [{
                                event: "menu:share:appmessage",
                                action: "sendAppMessage"
                            }, {
                                event: "menu:share:timeline",
                                action: "shareTimeline"
                            }, {
                                event: "menu:share:qq",
                                action: "shareQQ"
                            }, {
                                event: "menu:share:QZone",
                                action: "shareQZone"
                            }].forEach(function(r, i) {
                                WeixinJSBridge.on(r.event, function(i) {
                                    WeixinJSBridge.invoke(r.action, n, function() {
                                        try {
                                            e.isFunction(t.callfunc) && t.callfunc()
                                        } catch (e) {}
                                    })
                                })
                            })
                        },
                        QQShareConfig: function() {
                            var e = this,
                                t = e.optionParams.customShareParams.requiredParams;
                            mqq.invoke && mqq.invoke("data", "setShareInfo", {
                                share_url: t.shareUrl.indexOf(r.location.href) > -1 ? t.shareUrl : r.location.href,
                                title: t.title,
                                desc: t.content,
                                image_url: t.iconUrl
                            })
                        }
                    }
                }(i),
                function(e) {
                    e.VRView = {
                        optionParams: {
                            vrViewParams: {
                                requiredParams: {
                                    imageUrl: "",
                                    autoPlayerOff: !1
                                }
                            }
                        },
                        VR: null,
                        require: function(e, t) {
                            var n = document,
                                r = n.head || n.getElementsByTagName("head")[0] || n.documentElement,
                                i = n.createElement("script");
                            i.onload = t, i.onerror = function() {}, i.async = !0, i.src = e[0], r.appendChild(i)
                        },
                        vrViewInit: function(t) {
                            var n = this,
                                i = n.optionParams.vrViewParams.requiredParams;
                            e.Common.extend(i, t), n.require(["https://storage.360buyimg.com/babel/00036643/78931/production/dev/three.min.js"], function() {
                                n.require(["https://storage.360buyimg.com/babel/00036643/78931/production/dev/libpanorama-0.1.min.js"], function() {
                                    r.stopRender = 1, n.renderVR(i)
                                })
                            })
                        },
                        renderVR: function(t) {
                            var n = this;
                            r.VRView ? n.VR = new VRView.Player("", {
                                image: t.imageUrl,
                                is_autopan_off: t.autoPlayerOff,
                                is_vr_off: !0
                            }) : e.printMsg("vrViewInit", "vrView Init failed!")
                        }
                    }
                }(i),
                function(e) {
                    e.Scan = {
                        optionParams: {
                            toScanParams: {
                                typeParams: {
                                    des: "native_scan"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {},
                                ruleParams: {}
                            }
                        },
                        toScan: function(t, n) {
                            n = n || function(e) {
                                console.log(e)
                            }, r.jumpToScanCallback = function(e) {
                                n(e)
                            }, e.jumpToPage("Scan", "toScan", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Myjd = {
                        optionParams: {
                            toMyjdParams: {
                                typeParams: {
                                    des: "myJd"
                                },
                                edgeParams: {
                                    sourceValue: "",
                                    sourceType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        toMyjd: function(t) {
                            e.jumpToPage("Myjd", "toMyjd", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    e.Rn = {
                        optionParams: {
                            openParams: {
                                typeParams: {
                                    des: "RNPage"
                                },
                                edgeParams: {},
                                requiredParams: {
                                    modulename: "",
                                    appname: "",
                                    model: ""
                                },
                                ruleParams: {
                                    modulename: {
                                        modulename: !0,
                                        require: !0
                                    },
                                    appname: {
                                        appname: !0,
                                        require: !0
                                    },
                                    model: {
                                        model: !0,
                                        require: !0
                                    }
                                }
                            }
                        },
                        open: function(t) {
                            e.jumpToPage("Rn", "open", t)
                        }
                    }
                }(i.Native.Jump),
                function(e) {
                    var t = {
                        optionParams: {
                            isLoginParams: {
                                typeParams: {
                                    requestUrl: "//avatarsoa.m.jd.com/login/verifyLogin"
                                },
                                edgeParams: {},
                                requiredParams: {}
                            }
                        }
                    };
                    t.isLogin = function(n, r) {
                        var o = t.optionParams.isLoginParams.typeParams.requestUrl;
                        return e.corsRequest(o, n, function(t) {
                            t.hasOwnProperty("isLogin") ? t.isLogin ? e.successResponse(t, r, "hasLogin") : e.failedResponse(r, i.Common.stringify(t)) : e.errorResponse(r)
                        })
                    }, e.Login = t
                }(i.Service),
                function(e) {
                    var t = {
                        optionParams: {
                            hasPaymentCodeParams: {
                                typeParams: {},
                                edgeParams: {
                                    requestUrl: "https://jdpaycert.jd.com/sdk/hasPaymentCode"
                                },
                                requiredParams: {
                                    appId: "jdpingou",
                                    appVersion: "",
                                    appOS: ""
                                },
                                ruleParams: {
                                    requestUrl: {
                                        require: !0,
                                        url: !0
                                    },
                                    appId: {
                                        require: !0
                                    },
                                    appVersion: {
                                        require: !0
                                    },
                                    appOS: {
                                        require: !0
                                    }
                                }
                            }
                        }
                    };
                    t.hasPaymentCode = function(n, r) {
                        return e.Module.isJDpingou() && (t.optionParams.hasPaymentCodeParams.requiredParams.appVersion = e.Common.client.appVersion, e.Module.isIOS() ? t.optionParams.hasPaymentCodeParams.requiredParams.appOS = "ios" : e.Module.isAndroid() && (t.optionParams.hasPaymentCodeParams.requiredParams.appOS = "android")), e.Module.callServiceFun(t.optionParams.hasPaymentCodeParams, n, r)
                    }, e.Service.Pay = t
                }(i),
                function(e) {
                    e.Public = {
                        optionParams: {
                            toUrlParams: {
                                typeParams: {},
                                edgeParams: {},
                                requiredParams: {
                                    web_url: ""
                                }
                            }
                        },
                        toUrl: function(t) {
                            e.jumpToPage("Public", "toUrl", t)
                        }
                    }
                }(i.Web.Jump),
                function(e) {
                    e.Client = {
                        getOSVersion: function() {
                            return this.getCommonClientValue("OSVersion")
                        },
                        getAppVersion: function() {
                            return this.getCommonClientValue("appVersion")
                        },
                        getUdid: function() {
                            return this.getCommonClientValue("udid")
                        },
                        getNetWork: function(e) {
                            r.JDAppUnite && JDAppUnite.getNetWorkType ? (r.getNetWorkCallback = function(t) {
                                e(t)
                            }, JDAppUnite.getNetWorkType("getNetWorkCallback")) : this.isWKWebview() ? (r.getNetWorkCallback = function(t) {
                                e(t)
                            }, r.webkit.messageHandlers.JDAppUnite.postMessage({
                                method: "getNetWorkType",
                                params: "getNetWorkCallback",
                                callBackName: null,
                                callBackId: null
                            })) : e(this.getCommonClientValue("network"))
                        },
                        isWKWebview: function() {
                            return this.getCommonClientValue("WKwebview")
                        },
                        isIOS: function() {
                            return this.getCommonClientValue("ios")
                        },
                        isAndroid: function() {
                            return this.getCommonClientValue("android")
                        },
                        isWeixin: function() {
                            return this.getCommonClientValue("weixin")
                        },
                        isQQ: function() {
                            return this.getCommonClientValue("qq")
                        },
                        isIPhone: function() {
                            return this.getCommonClientValue("iPhone")
                        },
                        isIPad: function() {
                            return this.getCommonClientValue("iPad")
                        },
                        isTrident: function() {
                            return this.getCommonClientValue("trident")
                        },
                        isPresto: function() {
                            return this.getCommonClientValue("presto")
                        },
                        isWebKit: function() {
                            return this.getCommonClientValue("webKit")
                        },
                        isGecko: function() {
                            return this.getCommonClientValue("gecko")
                        },
                        isJDpingou: function() {
                            return this.getCommonClientValue("jdpingou")
                        },
                        isJailbreak: function() {
                            return this.getCommonClientValue("jailbreak")
                        },
                        isIPhoneX: function() {
                            return this.getCommonClientValue("iPhoneX")
                        },
                        isMiniProgram: function() {
                            return this.getCommonClientValue("miniprogram")
                        },
                        getPhoneBasicInfo: function(e) {
                            r.JDAppUnite && JDAppUnite.getPhoneBasicInfo ? (r.getPhoneBasicInfoCallback = function(t) {
                                e(t)
                            }, JDAppUnite.getPhoneBasicInfo("getPhoneBasicInfoCallback")) : this.isWKWebview() && (r.getPhoneBasicInfoCallback = function(t) {
                                e(t)
                            }, r.webkit.messageHandlers.JDAppUnite.postMessage({
                                method: "getPhoneBasicInfo",
                                params: "getPhoneBasicInfoCallback"
                            }))
                        },
                        getCommonClientValue: function(t) {
                            return e.Common.client[t]
                        }
                    }
                }(i),
                function(e, t) {
                    e.WebView = {
                        params: {
                            resetConfigBtnParams: {
                                typeParams: {
                                    clear_js: {
                                        type: "clear_js",
                                        display: "show",
                                        position: "inside",
                                        title: "",
                                        icon: "",
                                        jump: ""
                                    }
                                },
                                edgeParams: {},
                                requiredParams: {}
                            },
                            configAllBtnParams: {
                                typeParams: {},
                                edgeParams: {
                                    homepage: {
                                        type: "homepage",
                                        display: "hide",
                                        position: "inside",
                                        title: "",
                                        icon: "",
                                        jump: ""
                                    },
                                    calendar: {
                                        type: "calendar",
                                        display: "hide",
                                        position: "inside",
                                        title: "",
                                        icon: "",
                                        jump: ""
                                    },
                                    search: {
                                        type: "search",
                                        display: "hide",
                                        position: "inside",
                                        title: "",
                                        icon: "",
                                        jump: ""
                                    },
                                    message: {
                                        type: "message",
                                        display: "hide",
                                        position: "inside",
                                        title: "",
                                        icon: "",
                                        jump: ""
                                    },
                                    cart: {
                                        type: "cart",
                                        display: "hide",
                                        position: "inside",
                                        title: "",
                                        icon: "",
                                        jump: ""
                                    },
                                    feedback: {
                                        type: "feedback",
                                        display: "hide",
                                        position: "inside",
                                        title: "",
                                        icon: "",
                                        jump: ""
                                    },
                                    hidemore: {
                                        type: "hidemore",
                                        display: "hide",
                                        position: "inside",
                                        icon: "",
                                        title: "",
                                        jump: ""
                                    }
                                },
                                requiredParams: {}
                            },
                            configCartBtnParams: {
                                typeParams: {
                                    type: "cart",
                                    icon: "",
                                    title: "",
                                    jump: ""
                                },
                                edgeParams: {
                                    display: "show",
                                    position: "inside"
                                },
                                requiredParams: {}
                            },
                            configSearchBtnParams: {
                                typeParams: {
                                    type: "search",
                                    icon: "",
                                    title: "",
                                    jump: ""
                                },
                                edgeParams: {
                                    display: "show",
                                    position: "inside"
                                },
                                requiredParams: {}
                            },
                            configCustomBtnParams: {
                                typeParams: {
                                    type: "custom"
                                },
                                edgeParams: {
                                    display: "show",
                                    position: "inside",
                                    icon: "",
                                    title: "",
                                    jump: ""
                                },
                                requiredParams: {}
                            },
                            callIosSharePanelParams: {
                                typeParams: {
                                    category: "jump",
                                    des: "share",
                                    type: "111",
                                    shareActionType: "P"
                                },
                                edgeParams: {
                                    imageUrl: "",
                                    iconUrl: "",
                                    channel: "",
                                    isCallBack: "N",
                                    callfunc: null,
                                    timeline_title: "",
                                    qrparam: {
                                        top_pic: "",
                                        mid_pic: "",
                                        slogan: "",
                                        qr_title: "",
                                        qr_content: "",
                                        qr_direct: ""
                                    },
                                    mpId: "",
                                    mpPath: "",
                                    mpIconUrl: "",
                                    incentiveBizType: "",
                                    incentiveBizId: ""
                                },
                                requiredParams: {
                                    title: "",
                                    content: "",
                                    shareUrl: ""
                                },
                                ruleParams: {
                                    title: {
                                        require: !0
                                    },
                                    content: {
                                        require: !0
                                    },
                                    shareUrl: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            callAndroidSharePanelParams: {
                                typeParams: {
                                    shareActionType: "P"
                                },
                                edgeParams: {
                                    imageUrl: "",
                                    iconUrl: "",
                                    channel: "",
                                    callback: "N",
                                    callfunc: null,
                                    eventId: "",
                                    timeline_title: "",
                                    qrparam: {
                                        top_pic: "",
                                        mid_pic: "",
                                        slogan: "",
                                        qr_title: "",
                                        qr_content: "",
                                        qr_direct: ""
                                    },
                                    mpId: "",
                                    mpPath: "",
                                    mpIconUrl: "",
                                    incentiveBizType: "",
                                    incentiveBizId: ""
                                },
                                requiredParams: {
                                    title: "",
                                    content: "",
                                    shareUrl: ""
                                },
                                ruleParams: {
                                    title: {
                                        require: !0
                                    },
                                    content: {
                                        require: !0
                                    },
                                    shareUrl: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            callIosHeaderSharePanelParams: {
                                typeParams: {
                                    category: "jump",
                                    des: "share",
                                    type: "111",
                                    shareActionType: "S"
                                },
                                edgeParams: {
                                    imageUrl: "",
                                    iconUrl: "",
                                    channel: "",
                                    isCallBack: "N",
                                    callfunc: null,
                                    qrparam: {
                                        top_pic: "",
                                        mid_pic: "",
                                        slogan: "",
                                        qr_title: "",
                                        qr_content: "",
                                        qr_direct: ""
                                    },
                                    mpId: "",
                                    mpPath: "",
                                    mpIconUrl: "",
                                    incentiveBizType: "",
                                    incentiveBizId: ""
                                },
                                requiredParams: {
                                    title: "",
                                    content: "",
                                    shareUrl: ""
                                },
                                ruleParams: {
                                    title: {
                                        require: !0
                                    },
                                    content: {
                                        require: !0
                                    },
                                    shareUrl: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            callAndroidHeaderSharePanelParams: {
                                typeParams: {
                                    shareActionType: "S"
                                },
                                edgeParams: {
                                    imageUrl: "",
                                    iconUrl: "",
                                    channel: "",
                                    callback: "N",
                                    callfunc: null,
                                    eventId: "",
                                    timeline_title: "",
                                    qrparam: {
                                        top_pic: "",
                                        mid_pic: "",
                                        slogan: "",
                                        qr_title: "",
                                        qr_content: "",
                                        qr_direct: ""
                                    },
                                    mpId: "",
                                    mpPath: "",
                                    mpIconUrl: "",
                                    incentiveBizType: "",
                                    incentiveBizId: ""
                                },
                                requiredParams: {
                                    title: "",
                                    content: "",
                                    shareUrl: ""
                                },
                                ruleParams: {
                                    title: {
                                        require: !0
                                    },
                                    content: {
                                        require: !0
                                    },
                                    shareUrl: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            callIosDirectlyShareParams: {
                                typeParams: {
                                    category: "jump",
                                    des: "share",
                                    type: "111",
                                    shareActionType: "O"
                                },
                                edgeParams: {
                                    imageUrl: "",
                                    iconUrl: "",
                                    channel: "",
                                    isCallBack: "N",
                                    callfunc: null,
                                    qrparam: {
                                        top_pic: "",
                                        mid_pic: "",
                                        slogan: "",
                                        qr_title: "",
                                        qr_content: "",
                                        qr_direct: ""
                                    },
                                    mpId: "",
                                    mpPath: "",
                                    mpIconUrl: "",
                                    incentiveBizType: "",
                                    incentiveBizId: ""
                                },
                                requiredParams: {
                                    title: "",
                                    content: "",
                                    shareUrl: ""
                                },
                                ruleParams: {
                                    title: {
                                        require: !0
                                    },
                                    content: {
                                        require: !0
                                    },
                                    shareUrl: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            callAndroidDirectlyShareParams: {
                                typeParams: {
                                    shareActionType: "O"
                                },
                                edgeParams: {
                                    imageUrl: "",
                                    iconUrl: "",
                                    channel: "",
                                    callback: "N",
                                    callfunc: null,
                                    eventId: "",
                                    timeline_title: "",
                                    qrparam: {},
                                    mpId: "",
                                    mpPath: "",
                                    mpIconUrl: "",
                                    incentiveBizType: "",
                                    incentiveBizId: ""
                                },
                                requiredParams: {
                                    title: "",
                                    content: "",
                                    shareUrl: ""
                                },
                                ruleParams: {
                                    title: {
                                        require: !0
                                    },
                                    content: {
                                        require: !0
                                    },
                                    shareUrl: {
                                        url: !0,
                                        require: !0
                                    }
                                }
                            },
                            setIosCartParams: {
                                typeParams: {},
                                edgeParams: {
                                    action: "sh_showCart"
                                },
                                requiredParams: {}
                            },
                            setAndroidCartParams: {
                                typeParams: {},
                                edgeParams: {
                                    isShow: "Y"
                                },
                                requiredParams: {}
                            },
                            setNaviBackgroundParams: {
                                typeParams: {},
                                edgeParams: {
                                    backgroundColor: "",
                                    pic: ""
                                },
                                requiredParams: {
                                    naviIcon: ""
                                },
                                ruleParams: {
                                    naviIcon: {
                                        require: !0
                                    }
                                }
                            },
                            saveImageParams: {
                                typeParams: {},
                                edgeParams: {
                                    callBackName: null,
                                    callBackId: ""
                                },
                                requiredParams: {
                                    imgUrl: ""
                                },
                                ruleParams: {
                                    imgUrl: {
                                        require: !0,
                                        url: !0
                                    }
                                }
                            },
                            setNaviTransparentParams: {
                                typeParams: {},
                                edgeParams: {
                                    whiteImg: "",
                                    blackImg: "",
                                    backgroundColor: "",
                                    naviMenuType: ""
                                },
                                requiredParams: {}
                            }
                        },
                        configBtn: function(n, i) {
                            if (t.checkInputParams(n, i)) {
                                var o = t.getConfigString(n, i);
                                if (e.Common.printMsg("webview", "_configStr:" + o), r.MobileNavi && MobileNavi.configBtn) MobileNavi.configBtn(o);
                                else if (e.Common.client.WKwebview) {
                                    var a = {
                                        method: "configBtn",
                                        params: o
                                    };
                                    r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage && r.webkit.messageHandlers.JDPGAppUnite.postMessage(a)
                                }
                            }
                        },
                        configBtn610: function(n, i) {
                            if (t.isJDpingou() && t.checkInputParams(n, i)) {
                                var o = t.getConfigString(n, i);
                                if (e.Common.printMsg("webview", "_configStr610:" + o), r.MobileNavi && MobileNavi.configBtnSince610) MobileNavi.configBtnSince610(o);
                                else if (e.Common.client.WKwebview) {
                                    var a = {
                                        method: "configBtnSince610",
                                        params: o
                                    };
                                    r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage && r.webkit.messageHandlers.JDPGAppUnite.postMessage(a)
                                }
                            }
                        },
                        hideAllBtn: function(e) {
                            this.configBtn610(this.params.resetConfigBtnParams, e), this.configBtn610(this.params.configAllBtnParams, e), t.report("hideAllbtn")
                        },
                        operateGoBackBtn: function(t, n) {
                            n = n || function() {}, e.Module.isIOS() ? this.operateGoBackBtnForIos(t, n) : this.operateGoBackBtnForAnd(t, n)
                        },
                        operateGoBackBtnForIos: function(t, n) {
                            e.Common.printMsg("ios", "operateGoBackBtn", t), r.iosOperateGoBackBtnForIosCallBack = function(e) {
                                n(e)
                            }, r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage && r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "operateGoBackBtn",
                                params: t,
                                callBackName: "iosOperateGoBackBtnForIosCallBack"
                            })
                        },
                        operateGoBackBtnForAnd: function(t, n) {
                            e.Common.printMsg("android", "operateGoBackBtn", t), r.androidOperateGoBackBtnCallBack = function(e) {
                                n(e)
                            }, r.MobileNavi && MobileNavi.operateGoBackBtn && (t = (0, se.default)(t), MobileNavi.operateGoBackBtn(t))
                        },
                        resetConfigBtn: function(e) {
                            this.configBtn610(this.params.resetConfigBtnParams, e), t.report("resetConfigBtn")
                        },
                        configCustomBtn: function(e) {
                            this.configBtn(this.params.configCustomBtnParams, e)
                        },
                        configCartBtn: function(e) {
                            this.configBtn(this.params.configCartBtnParams, e)
                        },
                        configSearchBtn: function(e) {
                            this.configBtn(this.params.configSearchBtnParams, e)
                        },
                        setSearchBtnShowOutside: function() {
                            this.configSearchBtn({
                                display: "show",
                                position: "outside"
                            }), t.report("setSearchBtnShowOutside")
                        },
                        setSearchBtnShowInside: function() {
                            this.configSearchBtn({
                                display: "show",
                                position: "inside"
                            }), t.report("setSearchBtnShowInside")
                        },
                        setCartBtnShowOutside: function() {
                            this.configCartBtn({
                                display: "show",
                                position: "outside"
                            }), t.report("setCartBtnShowOutside")
                        },
                        setCartBtnShowInside: function() {
                            this.configCartBtn({
                                display: "show",
                                position: "inside"
                            }), t.report("setCartBtnShowInside")
                        },
                        setCustomBtnShowOutside: function(e) {
                            e.display = "show", e.position = "outside", this.configCustomBtn(e), t.report("setCustomBtnShowOutside")
                        },
                        setCustomBtnShowInside: function(e) {
                            e.display = "show", e.position = "inside", this.configCustomBtn(e), t.report("setCustomBtnShowInside")
                        },
                        refreshCart: function() {
                            e.Common.client.iPhone ? this.setIosCart({
                                action: "sh_refreshCart"
                            }) : e.Common.client.android && this.refreshAndroidCart(), t.report("refreshCart")
                        },
                        setPicTitleShow: function(e) {
                            this.setPicTitle("show", e)
                        },
                        setPicTitleHide: function() {
                            this.setPicTitle("hide", "")
                        },
                        checkInputParams: function(t, n) {
                            var r = t.requiredParams,
                                i = t.typeParams,
                                o = !0;
                            return e.Common.isNull(r) || (e.Common.isNull(n) ? o = !1 : this.isMatchedRequiredParams(r, n) || (o = !1)), e.Common.isNull(i) || e.Common.isNull(n) || this.isDiffStaticParams(i, n) || (o = !1), o
                        },
                        isMatchedRequiredParams: function(t, n) {
                            return e.Common.isSubSetByKeys(t, n)
                        },
                        isDiffStaticParams: function(t, n) {
                            return !e.Common.hasIntersectByKey(t, n)
                        },
                        getConfigString: function(t, n) {
                            return e.Common.stringify(this.getWholeCurrentParams(t, n))
                        },
                        getWholeCurrentParams: function(t, n) {
                            return e.Common.extend(this.getWholeDefaultParams(t), n)
                        },
                        getWholeDefaultParams: function(t) {
                            var n = e.Common.mergeJson(t.typeParams, t.edgeParams);
                            return e.Common.mergeJson(n, t.requiredParams)
                        },
                        setIosCart: function(n) {
                            var r = this;
                            if (t.checkInputParams(r.params.setIosCartParams, n)) {
                                var i = t.getConfigString(r.params.setIosCartParams, n);
                                e.Common.printMsg("webview", "setIosCart:" + i), location.href = t.getOpenAppComHeader() + i
                            }
                        },
                        setAndroidCart: function(n) {
                            if (t.checkInputParams(this.params.setAndroidCartParams, n)) {
                                var i = t.getConfigString(this.params.setAndroidCartParams, n);
                                e.Common.printMsg("webview", "setAndroidCart:" + i), r.AndroidNavi && AndroidNavi.setCart && AndroidNavi.setCart(i)
                            }
                        },
                        refreshAndroidCart: function() {
                            AndroidNavi && AndroidNavi.refreshCart && AndroidNavi.refreshCart()
                        },
                        setPicTitle: function(n, r) {
                            e.Common.client.iPhone ? this.setIOSPicTitle(n, r) : e.Common.client.android && this.setAndroidPicTitle(n, r), t.report("setPicTitle" + n)
                        },
                        setAndroidPicTitle: function(t, n) {
                            var r = "N";
                            if ("show" == t ? r = "Y" : "hide" == t && (r = "N"), AndroidNavi && AndroidNavi.setTitle) {
                                var i = e.Common.stringify({
                                    isShow: r,
                                    imageUrl: n
                                });
                                e.Common.printMsg("webview", "AndroidNavi: configStr:" + i), AndroidNavi.setTitle(i)
                            }
                        },
                        setIOSPicTitle: function(n, r) {
                            var i = "show" == n ? "sh_showImgTitle" : "sh_hideImgTitle",
                                o = e.Common.stringify({
                                    action: i,
                                    imageUrl: encodeURI(r)
                                });
                            location.href = t.getOpenAppComHeader() + o
                        },
                        shareCallBack: function(t, n) {
                            "function" == typeof n.callfunc && (e.Common.client.iPhone ? t.edgeParams.isCallBack = "Y" : e.Common.client.android && (t.edgeParams.callback = "Y"), r.jdappShareRes = function(e) {
                                n.callfunc(e)
                            })
                        },
                        callSharePanel: function(n) {
                            e.Common.client.iPhone ? this.callIosSharePanel(n) : e.Common.client.android && this.callAndroidSharePanel(n), t.report("callSharePanel")
                        },
                        callIosSharePanel: function(n) {
                            var i = this;
                            if (t.checkInputParams(i.params.callIosSharePanelParams, n)) {
                                i.shareCallBack(i.params.callIosSharePanelParams, n);
                                var o = t.getConfigString(i.params.callIosSharePanelParams, n);
                                e.Common.printMsg("webview", "callIosSharePanel:" + o), r.webkit && r.webkit.messageHandlers.JDPGAppUnite.postMessage && r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                    method: "callIosSharePanel",
                                    params: o,
                                    callBackName: "jdappShareRes"
                                })
                            }
                        },
                        callAndroidSharePanel: function(n) {
                            if (t.checkInputParams(this.params.callAndroidSharePanelParams, n)) {
                                this.shareCallBack(this.params.callAndroidSharePanelParams, n);
                                var i = t.getConfigString(this.params.callAndroidSharePanelParams, n);
                                e.Common.printMsg("webview", "callAndroidSharePanel:" + i), r.shareHelper && shareHelper.initShare ? shareHelper.initShare(i) : shareHelper && shareHelper.sendShare && shareHelper.sendShare(n.title, n.content, n.shareUrl, n.iconUrl, "Wxfriends", "Y")
                            }
                        },
                        callHeaderSharePanel: function(n) {
                            e.Common.client.iPhone ? this.callIosHeaderSharePanel(n) : e.Common.client.android && this.callAndroidHeaderSharePanel(n), t.report("callHeaderSharePanel")
                        },
                        callIosHeaderSharePanel: function(n) {
                            var i = this;
                            if (t.checkInputParams(i.params.callIosHeaderSharePanelParams, n)) {
                                i.shareCallBack(i.params.callIosHeaderSharePanelParams, n);
                                var o = t.getConfigString(i.params.callIosHeaderSharePanelParams, n);
                                e.Common.printMsg("webview", "callIosHeaderSharePanel:" + o), r.webkit.messageHandlers.JDPGAppUnite && r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                    method: "callIosHeaderSharePanel",
                                    params: o,
                                    callBackName: "jdappShareRes"
                                })
                            }
                        },
                        callAndroidHeaderSharePanel: function(n) {
                            if (t.checkInputParams(this.params.callAndroidHeaderSharePanelParams, n)) {
                                this.shareCallBack(this.params.callAndroidHeaderSharePanelParams, n);
                                var i = t.getConfigString(this.params.callAndroidHeaderSharePanelParams, n);
                                e.Common.printMsg("webview", "callAndroidSharePanel:" + i), r.shareHelper && shareHelper.initShare && shareHelper.initShare(i)
                            }
                        },
                        callDirectlyShare: function(n) {
                            e.Common.client.iPhone ? this.callIosDirectlyShare(n) : e.Common.client.android && this.callAndroidDirectlyShare(n), t.report("callDirectlyShare")
                        },
                        callIosDirectlyShare: function(n) {
                            var i = this;
                            if (t.checkInputParams(i.params.callIosDirectlyShareParams, n)) {
                                i.shareCallBack(i.params.callIosDirectlyShareParams, n);
                                var o = t.getConfigString(i.params.callIosDirectlyShareParams, n);
                                e.Common.printMsg("webview", "callIosDirectlyShare:" + o), r.webkit.messageHandlers.JDPGAppUnite && r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                    method: "callIosDirectlyShare",
                                    params: o,
                                    callBackName: "jdappShareRes"
                                })
                            }
                        },
                        callAndroidDirectlyShare: function(n) {
                            if (t.checkInputParams(this.params.callAndroidDirectlyShareParams, n)) {
                                this.shareCallBack(this.params.callAndroidDirectlyShareParams, n);
                                var i = t.getConfigString(this.params.callAndroidDirectlyShareParams, n);
                                e.Common.printMsg("webview", "callAndroidDirectlyShare:" + i), r.shareHelper && shareHelper.initShare && shareHelper.initShare(i)
                            }
                        },
                        showHeaderShareBtn: function(n) {
                            n = n || function(e) {
                                console.log(e)
                            }, r.showHeaderShareBtnCallback = function(e) {
                                n(e)
                            }, e.Common.client.iPhone ? this.showIosHeaderShareBtn() : e.Common.client.android && this.showAndroidHeaderShareBtn(), t.report("callDirectlyShare")
                        },
                        showIosHeaderShareBtn: function() {
                            e.Common.printMsg("ios", "showHeaderShareBtn"), r.webkit.messageHandlers.JDPGAppUnite && r.webkit.messageHandlers.JDPGAppUnite.postMessage({
                                method: "showIosHeaderShareBtn",
                                params: null,
                                callBackName: "showHeaderShareBtnCallback"
                            })
                        },
                        showAndroidHeaderShareBtn: function() {
                            e.Common.printMsg("android", "showHeaderShareBtn"), r.shareHelper && shareHelper.showAndroidHeaderShareBtn && shareHelper.showAndroidHeaderShareBtn("showHeaderShareBtnCallback")
                        },
                        setTitleText: function(n) {
                            t.isJDpingou() && ("[object String]" === Object.prototype.toString.call(n) ? (e.Common.client.WKwebview ? r.webkit.messageHandlers.MobileNavi.postMessage({
                                method: "setTitle",
                                params: n,
                                callBackName: null,
                                callBackId: null
                            }) : r.MobileNavi && MobileNavi.setTitle && MobileNavi.setTitle(n), t.report("setTitleText")) : e.Common.printMsg("webview", "setTitleText environment not support"))
                        },
                        showCloseBtn: function() {
                            t.isJDpingou() && (e.Common.client.WKwebview ? r.webkit.messageHandlers.MobileNavi.postMessage({
                                method: "showCloseBtn"
                            }) : r.MobileNavi && MobileNavi.showCloseBtn && MobileNavi.showCloseBtn(), t.report("showCloseBtn"))
                        },
                        closeActiveWebview: function() {
                            t.isJDpingou() && (e.Common.client.android ? r.JdAndroid && JdAndroid.finishWebActivity ? JdAndroid.finishWebActivity() : e.Common.printMsg("not support!") : e.Common.client.iPhone && (r.location.href = "closePGApp://webview"), t.report("closeActiveWebview"))
                        },
                        setNaviBackground: function(n) {
                            if (t.isJDpingou()) {
                                if (t.checkInputParams(this.params.setNaviBackgroundParams, n)) {
                                    var i = t.getConfigString(this.params.setNaviBackgroundParams, n);
                                    if (e.Common.printMsg("webview", "setNaviBackground:" + i), r.MobileNavi && r.MobileNavi.setNaviBackground) MobileNavi.setNaviBackground(i);
                                    else if (e.Common.client.WKwebview) {
                                        var o = {
                                            method: "setNaviBackground",
                                            params: i
                                        };
                                        r.webkit.messageHandlers.MobileNavi.postMessage(o)
                                    }
                                }
                                t.report("setNaviBackground")
                            }
                        },
                        saveImage: function(n) {
                            if (t.checkInputParams(this.params.saveImageParams, n)) {
                                var i = (0, se.default)(n);
                                if (e.Common.printMsg("webview", "saveImage:" + i), r.JDAppUnite && r.JDAppUnite.saveImageToPhoteAlbum) JDAppUnite.saveImageToPhoteAlbum(i);
                                else if (e.Common.client.WKwebview) {
                                    var o = {
                                        method: "saveImageToPhoteAlbum",
                                        params: i
                                    };
                                    r.webkit.messageHandlers.JDAppUnite.postMessage(o)
                                }
                            }
                            t.report("saveImage")
                        },
                        setNaviTransparent: function(n) {
                            if (t.isJDpingou() && t.checkInputParams(this.params.setNaviTransparentParams, n)) {
                                var i = t.getConfigString(this.params.setNaviTransparentParams, n);
                                e.Common.printMsg("webview", "setNaviTransparent:" + i), r.MobileNavi && r.MobileNavi.enableTransparent ? MobileNavi.enableTransparent(i) : e.Common.client.WKwebview && r.webkit.messageHandlers.MobileNavi.postMessage({
                                    method: "enableTransparent",
                                    params: i
                                })
                            }
                        }
                    }
                }(i, i.Module),
                function(e) {
                    e.JDpay = {
                        hasPaymentCode: function(t, n) {
                            e.Service.Pay.hasPaymentCode(t, n)
                        },
                        toPaymentCode: function(t) {
                            e.Native.Jump.Pay.toPaymentCode(t)
                        }
                    }
                }(i),
                function(e) {
                    e.Login = {
                        toPageFromOtherApp: function(t) {
                            e.Native.Jump.Login.toPageFromOtherApp(t)
                        },
                        toPageFromM: function(t) {
                            e.Native.Jump.Login.toPageFromM(t)
                        },
                        isLogin: function(t, n) {
                            t = t || {}, e.Service.Login.isLogin(t, n)
                        },
                        doLogin: function(t) {
                            e.Native.Jump.Login.doLogin(t)
                        }
                    }
                }(i), i
        });
        var ke = "expo_loaded",
            Ie = 250,
            Te = (0, de.default)(".j_sk_wrapper"),
            _e = !(!_cookiePtKey || !_cookiePtPin),
            Ae = (0, de.default)(window),
            je = !1,
            xe = !1,
            Me = "//wqs.jd.com/portal/wx/seckill_m/index.shtml",
            Be = "jdpingou" == JD.url.getUrlParam("fr", window.location.href),
            De = !1,
            Oe = !1;
        window._PFM_TIMING && (window._PFM_TIMING[3] = new Date),
            function() {
                ie(), F()
            }()
    }).call(t, n(44)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    var r = n(1),
        i = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function(e) {
        return i.stringify.apply(i, arguments)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(47),
        __esModule: !0
    }
}, function(e, t, n) {
    n(48), n(59), e.exports = n(26).f("iterator")
}, function(e, t, n) {
    "use strict";
    var r = n(49)(!0);
    n(31)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var r = n(15),
        i = n(16);
    e.exports = function(e) {
        return function(t, n) {
            var o, a, s = String(i(t)),
                u = r(n),
                c = s.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (o = s.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536)
        }
    }
}, function(e, t, n) {
    var r = n(51);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(35),
        i = n(13),
        o = n(24),
        a = {};
    n(3)(a, n(7)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: i(1, n)
        }), o(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(4),
        i = n(12),
        o = n(20);
    e.exports = n(5) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var n, a = o(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++], t[n]);
        return e
    }
}, function(e, t, n) {
    var r = n(37);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t, n) {
    var r = n(6),
        i = n(56),
        o = n(57);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, u = r(t),
                c = i(u.length),
                l = o(a, c);
            if (e && n != n) {
                for (; c > l;)
                    if ((s = u[l++]) != s) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in u) && u[l] === n) return e || l || 0;
            return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(15),
        i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    var r = n(15),
        i = Math.max,
        o = Math.min;
    e.exports = function(e, t) {
        return e = r(e), e < 0 ? i(e + t, 0) : o(e, t)
    }
}, function(e, t, n) {
    var r = n(0).document;
    e.exports = r && r.documentElement
}, function(e, t, n) {
    n(60);
    for (var r = n(0), i = n(3), o = n(19), a = n(7)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
        var c = s[u],
            l = r[c],
            d = l && l.prototype;
        d && !d[a] && i(d, a, c), o[c] = o.Array
    }
}, function(e, t, n) {
    "use strict";
    var r = n(61),
        i = n(62),
        o = n(19),
        a = n(6);
    e.exports = n(31)(Array, "Array", function(e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    e.exports = {
        default: n(64),
        __esModule: !0
    }
}, function(e, t, n) {
    n(65), n(71), n(72), n(73), e.exports = n(1).Symbol
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = n(2),
        o = n(5),
        a = n(17),
        s = n(34),
        u = n(66).KEY,
        c = n(10),
        l = n(22),
        d = n(24),
        p = n(14),
        m = n(7),
        f = n(26),
        h = n(27),
        g = n(67),
        v = n(68),
        y = n(12),
        P = n(9),
        b = n(25),
        w = n(6),
        S = n(18),
        C = n(13),
        k = n(35),
        I = n(69),
        T = n(70),
        _ = n(39),
        A = n(4),
        j = n(20),
        x = T.f,
        M = A.f,
        B = I.f,
        D = r.Symbol,
        O = r.JSON,
        q = O && O.stringify,
        N = m("_hidden"),
        F = m("toPrimitive"),
        L = {}.propertyIsEnumerable,
        J = l("symbol-registry"),
        U = l("symbols"),
        E = l("op-symbols"),
        R = Object.prototype,
        V = "function" == typeof D && !!_.f,
        H = r.QObject,
        W = !H || !H.prototype || !H.prototype.findChild,
        G = o && c(function() {
            return 7 != k(M({}, "a", {
                get: function() {
                    return M(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = x(R, t);
            r && delete R[t], M(e, t, n), r && e !== R && M(R, t, r)
        } : M,
        z = function(e) {
            var t = U[e] = k(D.prototype);
            return t._k = e, t
        },
        $ = V && "symbol" == typeof D.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof D
        },
        X = function(e, t, n) {
            return e === R && X(E, t, n), y(e), t = S(t, !0), y(n), i(U, t) ? (n.enumerable ? (i(e, N) && e[N][t] && (e[N][t] = !1), n = k(n, {
                enumerable: C(0, !1)
            })) : (i(e, N) || M(e, N, C(1, {})), e[N][t] = !0), G(e, t, n)) : M(e, t, n)
        },
        Q = function(e, t) {
            y(e);
            for (var n, r = g(t = w(t)), i = 0, o = r.length; o > i;) X(e, n = r[i++], t[n]);
            return e
        },
        K = function(e, t) {
            return void 0 === t ? k(e) : Q(k(e), t)
        },
        Y = function(e) {
            var t = L.call(this, e = S(e, !0));
            return !(this === R && i(U, e) && !i(E, e)) && (!(t || !i(this, e) || !i(U, e) || i(this, N) && this[N][e]) || t)
        },
        Z = function(e, t) {
            if (e = w(e), t = S(t, !0), e !== R || !i(U, t) || i(E, t)) {
                var n = x(e, t);
                return !n || !i(U, t) || i(e, N) && e[N][t] || (n.enumerable = !0), n
            }
        },
        ee = function(e) {
            for (var t, n = B(w(e)), r = [], o = 0; n.length > o;) i(U, t = n[o++]) || t == N || t == u || r.push(t);
            return r
        },
        te = function(e) {
            for (var t, n = e === R, r = B(n ? E : w(e)), o = [], a = 0; r.length > a;) !i(U, t = r[a++]) || n && !i(R, t) || o.push(U[t]);
            return o
        };
    V || (D = function() {
        if (this instanceof D) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === R && t.call(E, n), i(this, N) && i(this[N], e) && (this[N][e] = !1), G(this, e, C(1, n))
            };
        return o && W && G(R, e, {
            configurable: !0,
            set: t
        }), z(e)
    }, s(D.prototype, "toString", function() {
        return this._k
    }), T.f = Z, A.f = X, n(40).f = I.f = ee, n(28).f = Y, _.f = te, o && !n(11) && s(R, "propertyIsEnumerable", Y, !0), f.f = function(e) {
        return z(m(e))
    }), a(a.G + a.W + a.F * !V, {
        Symbol: D
    });
    for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ne.length > re;) m(ne[re++]);
    for (var ie = j(m.store), oe = 0; ie.length > oe;) h(ie[oe++]);
    a(a.S + a.F * !V, "Symbol", {
        for: function(e) {
            return i(J, e += "") ? J[e] : J[e] = D(e)
        },
        keyFor: function(e) {
            if (!$(e)) throw TypeError(e + " is not a symbol!");
            for (var t in J)
                if (J[t] === e) return t
        },
        useSetter: function() {
            W = !0
        },
        useSimple: function() {
            W = !1
        }
    }), a(a.S + a.F * !V, "Object", {
        create: K,
        defineProperty: X,
        defineProperties: Q,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: ee,
        getOwnPropertySymbols: te
    });
    var ae = c(function() {
        _.f(1)
    });
    a(a.S + a.F * ae, "Object", {
        getOwnPropertySymbols: function(e) {
            return _.f(b(e))
        }
    }), O && a(a.S + a.F * (!V || c(function() {
        var e = D();
        return "[null]" != q([e]) || "{}" != q({
            a: e
        }) || "{}" != q(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = t = r[1], (P(t) || void 0 !== e) && !$(e)) return v(t) || (t = function(e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !$(t)) return t
            }), r[1] = t, q.apply(O, r)
        }
    }), D.prototype[F] || n(3)(D.prototype, F, D.prototype.valueOf), d(D, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
}, function(e, t, n) {
    var r = n(14)("meta"),
        i = n(9),
        o = n(2),
        a = n(4).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(10)(function() {
            return u(Object.preventExtensions({}))
        }),
        l = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        d = function(e, t) {
            if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!o(e, r)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                l(e)
            }
            return e[r].i
        },
        p = function(e, t) {
            if (!o(e, r)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                l(e)
            }
            return e[r].w
        },
        m = function(e) {
            return c && f.NEED && u(e) && !o(e, r) && l(e), e
        },
        f = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: d,
            getWeak: p,
            onFreeze: m
        }
}, function(e, t, n) {
    var r = n(20),
        i = n(39),
        o = n(28);
    e.exports = function(e) {
        var t = r(e),
            n = i.f;
        if (n)
            for (var a, s = n(e), u = o.f, c = 0; s.length > c;) u.call(e, a = s[c++]) && t.push(a);
        return t
    }
}, function(e, t, n) {
    var r = n(37);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, n) {
    var r = n(6),
        i = n(40).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) {
            try {
                return i(e)
            } catch (e) {
                return a.slice()
            }
        };
    e.exports.f = function(e) {
        return a && "[object Window]" == o.call(e) ? s(e) : i(r(e))
    }
}, function(e, t, n) {
    var r = n(28),
        i = n(13),
        o = n(6),
        a = n(18),
        s = n(2),
        u = n(32),
        c = Object.getOwnPropertyDescriptor;
    t.f = n(5) ? c : function(e, t) {
        if (e = o(e), t = a(t, !0), u) try {
            return c(e, t)
        } catch (e) {}
        if (s(e, t)) return i(!r.f.call(e, t), e[t])
    }
}, function(e, t) {}, function(e, t, n) {
    n(27)("asyncIterator")
}, function(e, t, n) {
    n(27)("observable")
}, function(e, t, n) {
    n(75), e.exports = n(1).Object.getPrototypeOf
}, function(e, t, n) {
    var r = n(25),
        i = n(38);
    n(76)("getPrototypeOf", function() {
        return function(e) {
            return i(r(e))
        }
    })
}, function(e, t, n) {
    var r = n(17),
        i = n(1),
        o = n(10);
    e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e],
            a = {};
        a[e] = t(n), r(r.S + r.F * o(function() {
            n(1)
        }), "Object", a)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(29),
        i = function(e) {
            if (this.opt = {
                    tp: "text",
                    moveDom: null,
                    moveChild: [],
                    tab: [],
                    viewDom: null,
                    touchDom2: [],
                    sp: {
                        x: 0,
                        y: 0
                    },
                    min: 0,
                    minp: 0,
                    step: 0,
                    len: 1,
                    index: 1,
                    offset: 0,
                    loadImg: !1,
                    image: [],
                    loopScroll: !1,
                    lockScrY: !1,
                    stopOnce: !1,
                    autoTime: 0,
                    holdAuto: !1,
                    tabClass: "cur",
                    transition: .3,
                    imgInit: !0,
                    imgInitLazy: 4e3,
                    enableTransX: !1,
                    transXVal: 100,
                    useVue: !1,
                    ignoreAppend: !1,
                    fun: function() {}
                }, r.extend(this, this.opt, e), this.len = this.moveChild.length, this.min = this.min || {
                    text: 100,
                    img: 1
                }[this.tp], this.minp = this.minp || Math.max(this.min, 30), this.viewDom || (this.viewDom = r(window)), this.len > 1 && this.startEvent(), this.loadImg && (this.image = this.moveDom.find("img")), this.resize(this.step || this.moveChild.eq(0).width()), this.autoTime) {
                var t = this;
                setInterval(function() {
                    t.holdAuto || (t.stopOnce || t.stepMove(t.index + 1), t.stopOnce = !1)
                }, this.autoTime)
            }
        };
    r.extend(i.prototype, {
        resize: function(e) {
            this.step = e || this.step;
            var t = (this.viewDom.width() - this.step) / 2;
            this.offset = this.loopScroll ? this.step - t : t, 1 == this.len && (this.offset = -t), this.stepMove(this.index, !0)
        },
        addChild: function(e, t) {
            this.loopScroll && (this.moveChild.eq(0).after(e), this.len += 1, this.tab.eq(this.len - 2).after(t), this.tab = this.tab.parent().children(), 2 == this.len ? (this.moveChild = this.moveDom.children(), this.startEvent()) : this.stepMove(2))
        },
        startEvent: function() {
            var e = this,
                t = this.moveDom.get(0),
                n = function(t) {
                    t.addEventListener("touchstart", e, !1), t.addEventListener("touchmove", e, !1), t.addEventListener("touchend", e, !1), t.addEventListener("touchcancel", e, !1), t.addEventListener("webkitTransitionEnd", e, !1)
                };
            if (n(t), this.tab.each(function(t, n) {
                    r(n).attr("no", t + 1), r(n).click(function() {
                        e.stepMove(Number(r(this).attr("no")), !0)
                    })
                }), this.loopScroll) {
                var i = this.moveChild.eq(0).clone().attr({
                    id: "",
                    onload: ""
                });
                i.find("img").attr({
                    id: "",
                    onload: ""
                }), !this.ignoreAppend && this.moveDom.append(i);
                var o = this.moveChild.eq(this.len - 1).clone().attr({
                    id: "",
                    onload: ""
                });
                o.find("img").attr({
                    id: "",
                    onload: ""
                }), !this.ignoreAppend && this.moveDom.prepend(o)
            }
            for (var a = 0; a < this.touchDom2.length; a++) n(this.touchDom2[a])
        },
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                    this.sp = this.getPosition(e), this.holdAuto = !0, this.stopOnce = !0;
                    break;
                case "touchmove":
                    this.touchmove(e);
                    break;
                case "touchend":
                case "touchcancel":
                    this.move(e), this.holdAuto = !1;
                    break;
                case "webkitTransitionEnd":
                    e.preventDefault()
            }
        },
        getPosition: function(e) {
            var t = e.changedTouches ? e.changedTouches[0] : e;
            return {
                x: t.pageX,
                y: t.pageY
            }
        },
        touchmove: function(e) {
            var t = this.getPosition(e),
                n = t.x - this.sp.x,
                r = t.y - this.sp.y;
            if (Math.abs(n) - Math.abs(r) > this.min) {
                e.preventDefault();
                var i = n - this.step * (this.index - 1) - this.offset;
                !this.useVue && this.moveDom.css({
                    "-webkit-backface-visibility": "hidden",
                    "-webkit-transform": this.enableTransX ? "translateX(" + (this.loopScroll ? this.index : this.index - 1) * -this.transXVal + "%)" : "translate3D(" + i + "px,0,0)",
                    "-webkit-transition": "0"
                })
            } else this.lockScrY || e.preventDefault()
        },
        move: function(e) {
            var t = this.getPosition(e),
                n = t.x - this.sp.x,
                r = t.y - this.sp.y;
            if (Math.abs(n) < Math.abs(r) || Math.abs(n) < this.minp) return void this.stepMove(this.index);
            n > 0 ? (e.preventDefault(), this.stepMove(this.index - 1)) : (e.preventDefault(), this.stepMove(this.index + 1))
        },
        loadImage: function(e) {
            var t = this.image,
                n = function(e) {
                    t[e] && r(t[e]).attr("back_src") && (t[e].src = r(t[e]).attr("back_src"), r(t[e]).removeAttr("back_src"))
                };
            n(e),
                function(e, t, r) {
                    setTimeout(function() {
                        n(e - 1), n(e + 1)
                    }, t ? r : 0)
                }(e, this.imgInit, this.imgInitLazy), this.imgInit = !1
        },
        stepMove: function(e, t) {
            this.index = e > this.len ? this.len : e < 1 ? 1 : e, this.tab.removeClass(this.tabClass), this.tab.eq(this.index - 1).addClass(this.tabClass);
            var n = -this.step * ((this.loopScroll ? e : this.index) - 1) - this.offset;
            if (!this.useVue && this.moveDom.css({
                    "-webkit-transform": this.enableTransX ? "translateX(" + (this.loopScroll ? e : this.index - 1) * -this.transXVal + "%)" : "translate3D(" + n + "px,0,0)",
                    "-webkit-transition": t ? "0ms" : "all " + this.transition + "s ease"
                }), this.loadImg && this.loadImage(this.index), this.fun(this.index), this.loopScroll && !t) {
                var r = this,
                    i = e;
                e <= 0 && (i = this.len), e > this.len && (i = 1), i != e && setTimeout(function() {
                    r.stepMove(i, !0)
                }, 1e3 * this.transition)
            }
        },
        _isOutScreen: function(e) {
            return e.offset().top >= r(window).height() + window.scrollY || e.offset().top + e.height() < window.scrollY
        },
        _isElementHidden: function(e) {
            var t = e.parents().concat();
            return t.unshift(e[0]), t.some(function(e) {
                if ("none" == getComputedStyle(e, "").getPropertyValue("display")) return !0
            })
        }
    }), t.init = function(e) {
        return new i(e)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t = (e + "").split(""), n = [], r = 0; r < t.length; r++) n.push(h[t[r]]);
        return n.join("")
    }

    function i(e) {
        return f[e] ? f[e] += 1 : f[e] = 1, e + r(f[e])
    }

    function o(e) {
        return e.indexOf("wq.360buyimg.com") > -1 || e.indexOf("wqs.jd.com") > -1 || e.indexOf("wqcoss.jd.com/mcoss/") > -1 || e.indexOf("btshow.jd.com/queryBtPlanInfo.do") > -1 || e.indexOf("storage.360buyimg.com") > -1
    }

    function a(e, t) {
        var n, r = {
                onLoad: null,
                onError: null,
                onTimeout: null,
                timeout: 8e3,
                isToken: !0,
                keepProtocol: !1,
                charset: "utf-8",
                setReportUrl: ""
            },
            a = function() {
                f && (n && clearTimeout(n), f.onload = f.onreadystatechange = f.onerror = null, f.parentNode && f.parentNode.removeChild(f), f = null)
            };
        if (1 == arguments.length && ("object" == (0, d.default)(arguments[0]) ? (t = arguments[0], e = t.url) : t = {}), "object" == (0, d.default)(t.data)) {
            var u = [];
            for (var c in t.data) u.push(c + "=" + t.data[c]);
            u.length > 0 && (u = u.join("&"), e += (e.indexOf("?") > 0 ? "&" : "?") + u)
        }
        if (window.traceid) {
            var l = e.split("#");
            e += (l[0].indexOf("?") > 0 ? "&" : "?") + "traceid=" + window.traceid + (l[1] ? "#" + l[1] : "")
        }
        for (var p in t) t.hasOwnProperty(p) && (r[p] = t[p]);
        var f = document.createElement("script");
        f.charset = r.charset || "utf-8";
        var h = !1,
            g = !1,
            v = "";
        t.setReportUrl && "function" == typeof t.setReportUrl ? !(v = t.setReportUrl()) && (v = e) : v = window.CGI302ReportKeepUrl ? e : e.replace(/\?.*/, ""), f.onload = f.onreadystatechange = function() {
            (/loaded|complete/i.test(this.readyState) || -1 == navigator.userAgent.toLowerCase().indexOf("msie")) && (r.onLoad && r.onLoad(), h && !g && (window.JD && m.report.umpBiz({
                bizid: 24,
                operation: 3,
                result: "1",
                source: 0,
                message: v
            }), r.onError && r.onError(), window.onerror("", "", "", "", {
                stack: "servererror:" + v
            }), console.log("loadJs Failed:" + e)), a())
        }, f.onerror = function() {
            window.__reloadResource && window.__reloadResource(f), r.onError && r.onError(), a()
        };
        var y = r.isToken ? s(e, "ls") : e;
        if (!o(y)) {
            var P, b, w, S = y.replace(/callback=([^&]+)/, function(e, t) {
                return P = t, "callback=" + (b = i(P))
            });
            P && window[P] && (h = !0, y = S, w = window[P], window[b] = function(e) {
                g = !0, w(e)
            })
        }
        window.JD && (y = m.url.getCgiUrl(y)), f.src = r.keepProtocol ? y : y.replace(/^http(s?):/, ""), !t.cancleLog && console.log("loadJs request:" + f.src), document.getElementsByTagName("head")[0].appendChild(f), "function" == typeof r.onTimeout && (n = setTimeout(function() {
            r.onTimeout()
        }, r.timeout))
    }

    function s(e, t) {
        if ("" == e || 0 != (e.indexOf("://") < 0 ? location.href : e).indexOf("http")) return e;
        var n = u("wq_skey"),
            r = u("pt_key"),
            i = e.split("#"),
            o = i[0].split("?"),
            a = o[0],
            s = (2 == o.length ? o[1] : "").split("&"),
            c = 2 == i.length ? i[1] : "";
        s = s.filter(function(e) {
            return !(/g_tk=\d+/.test(e) || /g_pt_tk=\d+/.test(e) || /g_ty=\w+/.test(e))
        }), n && s.push("g_tk=" + n), r && s.push("g_pt_tk=" + r), (n || r) && s.push("g_ty=" + t);
        var l = s.join("&");
        return a + (l ? "?" + l : "") + (c ? "#" + c : "")
    }

    function u(e) {
        e = e || "wq_skey";
        var t = p.get(e);
        return t ? c(t) : ""
    }

    function c(e) {
        for (var t = 0, n = e.length, r = 5381; t < n; ++t) r += (r << 5) + e.charAt(t).charCodeAt();
        return 2147483647 & r
    }
    var l = n(8),
        d = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l),
        p = n(42),
        m = window.JD,
        f = {},
        h = ["Z", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
    e.exports = t = {}, t.loadScript = function(e, t) {
        var n = [].slice.call(arguments);
        setTimeout(function() {
            a.apply(null, n)
        }, 0)
    }, t.addToken = s
}, function(e, t, n) {
    "use strict";
    var r = {},
        i = function e(t, n) {
            var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : r[t] = r[t] || e(document.getElementById(t).innerHTML);
            return n ? i(n) : i
        };
    t.formatJson = i
}, function(e, t, n) {
    "use strict";

    function r() {
        var e = ["        <style>", "        .ll_fadeIn{", "            -webkit-transition: opacity .5s ease-in;", "            opacity:0;", "            transition:opacity .5s ease-in;", "        }", "        </style>"].join("");
        i("head").append(e)
    }
    var i = n(29),
        o = n(81).withinviewport,
        a = {};
    a.autoLoadImage = function(e) {
        function t() {
            i("img[" + u.initSrcName + "]").each(function(e, t) {
                var n = i(t),
                    r = !n.is(":hidden") && o(t, {
                        top: u.top,
                        bottom: u.bottom,
                        left: u.left,
                        right: u.right
                    });
                if (u.fadeIn && !n.hasClass("ll_fadeIn") && n.addClass("ll_fadeIn"), r) {
                    n.on("load", function() {
                        u.fadeIn && n.css({
                            opacity: 1
                        }), u.afterImgLoaded && u.afterImgLoaded(n)
                    }), n.attr("onerror", "__reloadResource(this)");
                    var a = n.attr(u.initSrcName);
                    if (window.JD) {
                        var s = n.attr("data-size") || "",
                            c = 0,
                            l = 0;
                        /^(\d+)x(\d+)$/i.test(s) && (c = RegExp.$1, l = RegExp.$2, a = JD.img.getImgUrl(a, c, l)), a = JD.url.getImageUrl(a, c, l)
                    }
                    n.attr("src", a), n.attr(u.initSrcName, null), n.attr("loaded", 1)
                }
            })
        }
        var n = i(window).height(),
            s = i(window).width(),
            u = {
                top: -.5 * n,
                bottom: -1 * n,
                left: -.5 * s,
                right: -.5 * s,
                initSrcName: "init_src",
                fadeIn: !0,
                afterImgLoaded: null
            };
        a.init || (a.init = !0, i.extend(u, e || {}), r(), setInterval(t, 150))
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = n(8),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        o = void 0 !== window.innerHeight,
        a = function e(t, n) {
            var r, a, s, u, c, l, d, p, m, f, h, g = !1,
                v = {},
                y = {},
                P = [0, 0];
            if ("undefined" != typeof jQuery && t instanceof jQuery && (t = t.get(0)), "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) || 1 !== t.nodeType) throw new Error("First argument must be an element");
            for (t.getAttribute("data-withinviewport-settings") && window.JSON && (v = JSON.parse(t.getAttribute("data-withinviewport-settings"))), r = "string" == typeof n ? {
                    sides: n
                } : n || {}, y.container = r.container || v.container || e.defaults.container || window, y.sides = r.sides || v.sides || e.defaults.sides || "all", y.top = r.top || v.top || e.defaults.top || 0, y.right = r.right || v.right || e.defaults.right || 0, y.bottom = r.bottom || v.bottom || e.defaults.bottom || 0, y.left = r.left || v.left || e.defaults.left || 0, "undefined" != typeof jQuery && y.container instanceof jQuery && (y.container = y.container.get(0)), y.container !== document.body && 1 !== !y.container.nodeType || (y.container = window), s = y.container === window, a = {
                    top: function() {
                        return s ? u.top >= y.top : u.top >= l - (l - c.top) + y.top
                    },
                    right: function() {
                        return s ? u.right <= c.right + d - y.right : u.right <= c.right - P[0] - y.right
                    },
                    bottom: function() {
                        var e;
                        return e = s ? o ? y.container.innerHeight : document.documentElement.clientHeight : c.bottom, u.bottom <= e - P[1] - y.bottom
                    },
                    left: function() {
                        return s ? u.left >= y.left : u.left >= d - (d - c.left) + y.left
                    },
                    all: function() {
                        return a.top() && a.bottom() && a.left() && a.right()
                    }
                }, u = t.getBoundingClientRect(), s ? (c = document.documentElement.getBoundingClientRect(), l = document.body.scrollTop, d = document.body.scrollLeft) : (c = y.container.getBoundingClientRect(), l = y.container.scrollTop, d = y.container.scrollLeft), d && (P[0] = 18), l && (P[1] = 16), p = /^top$|^right$|^bottom$|^left$|^all$/, m = y.sides.split(" "), h = m.length; h--;)
                if (f = m[h].toLowerCase(), p.test(f)) {
                    if (!a[f]()) {
                        g = !1;
                        break
                    }
                    g = !0
                }
            return g
        };
    a.prototype.defaults = {
        container: document.body,
        sides: "all",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, a.defaults = a.prototype.defaults, a.prototype.top = function(e) {
        return a(e, "top")
    }, a.prototype.right = function(e) {
        return a(e, "right")
    }, a.prototype.bottom = function(e) {
        return a(e, "bottom")
    }, a.prototype.left = function(e) {
        return a(e, "left")
    }, t.withinviewport = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return null != e && e == e.window
    }

    function o(e) {
        return null != e && "object" == (void 0 === e ? "undefined" : (0, v.default)(e))
    }

    function a(e) {
        return o(e) && !i(e) && (0, h.default)(e) == Object.prototype
    }

    function s(e, t, n) {
        for (var r in t) n && (a(t[r]) || S(t[r])) ? (a(t[r]) && !a(e[r]) && (e[r] = {}), S(t[r]) && !S(e[r]) && (e[r] = []), s(e[r], t[r], n)) : void 0 !== t[r] && (e[r] = t[r]);
        return e
    }

    function u(e) {
        if (!e || "string" != typeof e) return e;
        if (!(e = e.replace(/^\s+|\s+$/g, ""))) return e;
        try {
            e = JSON.parse(e)
        } catch (e) {}
        return e
    }

    function c(e) {
        var t = "";
        try {
            t = C.getItem(e)
        } catch (e) {}
        return t
    }

    function l(e, t, n, r, i, o) {
        if ("function" == typeof i && (o = i, i = !1), "number" == typeof r && (i = r, r = !1), "function" == typeof r && (o = r, r = !1), "function" == typeof n && (o = n, n = !1), "number" == typeof n && (i = n, n = !1), n && (!i || "number" != typeof i)) throw new Error("请设置过期时间");
        C.persistence(!!n), C.setItem(e, t, r, i, o)
    }

    function d(e) {
        C.removeItem(e)
    }
    var p = n(30),
        m = r(p),
        f = n(41),
        h = r(f),
        g = n(8),
        v = r(g),
        y = !0,
        P = !0,
        b = window.JD,
        w = function(e) {
            var t, n = "WXSQ_STOARGE_TEST";
            try {
                return e.setItem(n, 1), t = e.getItem(n), e.removeItem(n), 1 == t
            } catch (e) {
                return !1
            }
        };
    try {
        y = w(window.sessionStorage), P = w(window.localStorage)
    } catch (e) {
        y = !1, P = !1
    }
    y && P || b.report.umpBiz({
        bizid: 45,
        operation: 1,
        result: 2,
        source: 0,
        message: "session " + y + "|local " + P
    });
    var S = Array.isArray || function(e) {
            return e instanceof Array
        },
        C = function() {
            var e = window.sessionStorage,
                t = function(e, t, n, r, o) {
                    var l = u(c("WQ_" + e));
                    l && (n && a(t) && a(l.v) || S(t) && S(l.v)) && (t = s(l.v, t, !0));
                    var d = {
                        v: t,
                        t: (new Date).getTime(),
                        e: "number" != typeof r ? "" : r
                    };
                    i("WQ_" + e, d, o)
                },
                n = function(t) {
                    var n = e.getItem("WQ_" + t);
                    if (!n) return e.getItem(t);
                    n = u(n);
                    var i = n && n.e;
                    return 0 === i || i && new Date - n.t >= 1e3 * i ? (r(t), "") : n.v
                },
                r = function(t) {
                    try {
                        e.removeItem("WQ_" + t)
                    } catch (e) {}
                },
                i = function(t, n, r) {
                    var i = "";
                    try {
                        i = (0, m.default)(n)
                    } catch (e) {
                        throw new Error("JSON数据格式异常：" + e.message)
                    }
                    try {
                        e.setItem(t, i), r && r(0)
                    } catch (n) {
                        r && r(0), setTimeout(function() {
                            l();
                            try {
                                e.setItem(t, i)
                            } catch (e) {
                                return b.report.umpBiz({
                                    bizid: 45,
                                    operation: 1,
                                    result: 1,
                                    source: 0,
                                    message: t + "|" + e.message
                                }), !1
                            }
                        }, 0)
                    }
                    return !0
                },
                o = function(t) {
                    e = t ? window.localStorage : window.sessionStorage
                },
                l = function() {
                    var t = "";
                    if (!e) return !1;
                    for (var r = e.length - 1; r >= 0; r--) t = e.key(r), 0 == t.indexOf("WQ_") && n(t.slice("WQ_".length))
                };
            return {
                setItem: t,
                getItem: n,
                removeItem: r,
                persistence: o,
                clearOut: l
            }
        }();
    e.exports = {
        getItem: function(e, t) {
            return C.persistence(!!t), c(e)
        },
        setItem: function(e, t, n, r, i, o) {
            return l(e, t, n, r, i, o)
        },
        removeItem: function(e, t) {
            return C.persistence(!!t), d(e)
        },
        clearOut: function(e) {
            C.persistence(!!e), C.clearOut()
        },
        session: {
            getItem: function(e) {
                return C.persistence(!1), c(e)
            },
            setItem: function(e, t, n, r, i) {
                return l(e, t, !1, n, r, i)
            },
            removeItem: function(e) {
                return C.persistence(!1), d(e)
            },
            clearOut: function() {
                C.persistence(!1), C.clearOut()
            }
        },
        local: {
            getItem: function(e) {
                return C.persistence(!0), c(e)
            },
            setItem: function(e, t, n, r, i) {
                return l(e, t, !0, n, r, i)
            },
            removeItem: function(e) {
                return C.persistence(!0), d(e)
            },
            clearOut: function() {
                C.persistence(!0), C.clearOut()
            }
        }
    }
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(t, {})
}]);
//# sourceMappingURL=index.d3ecb88f.js.map