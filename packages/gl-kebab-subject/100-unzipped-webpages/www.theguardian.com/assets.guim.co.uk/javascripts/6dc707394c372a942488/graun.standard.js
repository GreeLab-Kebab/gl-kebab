! function(t) {
    function e(e) {
        for (var n, o, i = e[0], a = e[1], s = 0, u = []; s < i.length; s++) o = i[s], r[o] && u.push(r[o][0]), r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (c && c(e); u.length;) u.shift()()
    }
    var n = {},
        r = {
            28: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function(t) {
        var e = [],
            n = r[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var i = new Promise(function(e, o) {
                    n = r[t] = [e, o]
                });
                e.push(n[2] = i);
                var a, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = function(t) {
                    return o.p + "" + {
                        0: "ef0dba5b24cc6eb5bc6a",
                        1: "1b562b1debf1bd928d93",
                        2: "99f399560be2d8806953",
                        3: "4d3131361d808f9fee1c",
                        4: "f55ec14e59b05fac1b38",
                        5: "bb2fc2c462a34a0aac1f",
                        6: "2a8e470d3d2006c81137",
                        7: "da2fb6ddbea88bc657dd",
                        8: "beb810cb38a7e388ea56",
                        10: "aeaf92619fb905f793b7",
                        11: "40fade2cab950f927d99",
                        12: "269806ba6d3624418000",
                        13: "2809be780feca0880f25",
                        15: "e1d1ecdc3d3a018eaf41",
                        16: "a07dd730037db6881f4c",
                        17: "d7ad0615c04060941b65",
                        18: "183e617959956c35a2c4",
                        19: "56bdea9f80041ac2760b",
                        20: "afc0ad484dcaf0f83b67",
                        21: "c106db7cb004a3626867",
                        22: "2b5f7e636ba763889b98",
                        23: "fc3aff59d16aba39796b",
                        24: "f376a4e5758f30e0401c",
                        25: "7929116580cab8eedd12",
                        26: "6307917d27d010e1de0f",
                        27: "71c05c7a8143ade53e01",
                        29: "b57333e0be27ee693bca",
                        30: "284dd6afdd028fab2c9c",
                        31: "7fca3087397f5ab01a05",
                        32: "d511bd47ef95366017e2",
                        33: "86598c6e571f324d3ace",
                        34: "f1ad968f14e75de7833e",
                        35: "aad0b4f76afc5797f19e",
                        36: "56fcce0d4f554ddda6da",
                        38: "89901b2132fc35cedcb1",
                        40: "37877483f93fdfb04cfd",
                        42: "ef725474fd25d7bd1c29"
                    }[t] + "/graun." + ({
                        0: "article~facia~trail~youtube",
                        1: "article~crosswords~trail",
                        2: "article",
                        3: "vendors~article",
                        4: "vendors~crosswords~preferences~profile",
                        5: "commercial~enhanced",
                        6: "preferences",
                        7: "vendors~commercial~enhanced",
                        8: "vendors~commercial~facia",
                        10: "audio",
                        11: "commercial",
                        12: "commercial-hosted",
                        13: "crosswords",
                        15: "enhanced",
                        16: "experiments",
                        17: "explainer-atom",
                        18: "facia",
                        19: "football",
                        20: "guide-atom",
                        21: "media-player",
                        22: "membership",
                        23: "newsletters",
                        24: "ophan-embed",
                        25: "profile",
                        26: "profile-atom",
                        27: "qanda-atom",
                        29: "trail",
                        30: "vendors~Prebid.js",
                        31: "vendors~audio",
                        32: "vendors~audio-atom",
                        33: "vendors~commonsdivision-atom",
                        34: "vendors~media-player",
                        35: "vendors~storyquestions-atom",
                        36: "vendors~timeline-atom",
                        38: "video-player",
                        40: "youtube"
                    }[t] || t) + ".js"
                }(t), a = function(e) {
                    s.onerror = s.onload = null, clearTimeout(c);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src,
                                a = new Error("Loading chunk " + t + " failed.\n(" + o + ": " + i + ")");
                            a.type = o, a.request = i, n[1](a)
                        }
                        r[t] = void 0
                    }
                };
                var c = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }, 12e4);
                s.onerror = s.onload = a, document.head.appendChild(s)
            }
        return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function(t) {
        throw console.error(t), t
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        a = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var s = 0; s < i.length; s++) e(i[s]);
    var c = a;
    o(o.s = 480)
}([function(t, e, n) {
    "use strict";
    var r = n(56),
        o = n.n(r),
        i = window.guardian.config,
        a = function(t) {
            return (i.page.references || []).filter(function(e) {
                return void 0 !== e[t]
            }).map(function(e) {
                return e[t]
            })
        };
    e.a = Object.assign({}, {
        get: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = arguments.length > 1 ? arguments[1] : void 0,
                n = t.replace(/\[(.+?)\]/g, ".$1").split(".").reduce(function(t, e) {
                    return t && t[e]
                }, i);
            return void 0 !== n ? n : e
        },
        set: function(t, e) {
            var n = t.split("."),
                r = n.pop();
            n.reduce(function(t, e) {
                return "object" === o()(t[e]) ? t[e] : (t[e] = {}, t[e])
            }, i)[r] = e
        },
        hasTone: function(t) {
            return (i.page.tones || "").includes(t)
        },
        hasSeries: function(t) {
            return (i.page.series || "").includes(t)
        },
        referencesOfType: a,
        referenceOfType: function(t) {
            return a(t)[0]
        },
        webPublicationDateAsUrlPart: function() {
            var t = i.page.webPublicationDate;
            if (t) {
                var e = new Date(t);
                return "".concat(e.getFullYear(), "/").concat((e.getMonth() + 1).toString().padStart(2, "0"), "/").concat(e.getDate().toString().padStart(2, "0"))
            }
            return null
        },
        dateFromSlug: function() {
            var t = i.page.pageId.match(/\d{4}\/\w{3}\/\d{2}/);
            return t ? t[0] : null
        }
    }, i)
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return p
    }), n.d(e, "a", function() {
        return d
    }), n.d(e, "b", function() {
        return h
    }), n.d(e, "e", function() {
        return f
    }), n.d(e, "d", function() {
        return m
    });
    var r = n(13),
        o = n.n(r),
        i = n(14),
        a = n(0),
        s = "Cookie must not contain invalid characters (space, tab and the following characters: '()<>@,;\"/[]?={}')",
        c = function(t) {
            return !/[()<>@,;"\\\/[\]?={} \t]/g.test(t)
        },
        u = function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).isCrossSubdomain,
                e = void 0 !== t && t,
                n = document.domain || "";
            return "localhost" === n || a.a.get("page.isPreview") ? n : e ? [""].concat(o()(n.split(".").slice(-2))).join(".") : n.replace(/^(www|m\.code|dev|m)\./, ".")
        },
        l = function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).isCrossSubdomain,
                e = u({
                    isCrossSubdomain: void 0 !== t && t
                });
            return "localhost" === e ? "" : " domain=".concat(e, ";")
        },
        f = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = "expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            document.cookie = "".concat(t, "=;").concat("path=/;").concat(n), e || (document.cookie = "".concat(t, "=;").concat("path=/;").concat(n, " domain=").concat(u(), ";"))
        },
        d = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                o = new Date;
            c(t) && c(e) || Object(i.a)(new Error("".concat(s, " .").concat(t, "=").concat(e)), {}, !1), n ? o.setDate(o.getDate() + n) : (o.setMonth(o.getMonth() + 5), o.setDate(1)), document.cookie = "".concat(t, "=").concat(e, "; path=/; expires=").concat(o.toUTCString(), ";").concat(l({
                isCrossSubdomain: r
            }))
        },
        p = function(t) {
            t.forEach(function(t) {
                f(t)
            })
        },
        h = function(t, e) {
            c(t) && c(e) || Object(i.a)(new Error("".concat(s, " .").concat(t, "=").concat(e)), {}, !1), document.cookie = "".concat(t, "=").concat(e, "; path=/;").concat(l())
        },
        m = function(t) {
            var e = function(t) {
                var e = "".concat(t, "=");
                return document.cookie.split(";").reduce(function(t, n) {
                    var r = n.trim();
                    return 0 === r.indexOf(e) && t.push(r.substring(e.length, r.length)), t
                }, [])
            }(t);
            return e.length > 0 ? e[0] : null
        }
}, function(t, e, n) {
    "use strict";
    var r = n(12),
        o = n.n(r),
        i = function(t) {
            return function(e, n) {
                return new Promise(function(r, o) {
                    return t(function() {
                        try {
                            r(e.call(this))
                        } catch (t) {
                            o(t)
                        }
                    }, n)
                })
            }
        };
    e.a = {
        read: i(o.a.read.bind(o.a)),
        write: i(o.a.write.bind(o.a)),
        defer: i(o.a.defer.bind(o.a))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return l
    }), n.d(e, "b", function() {
        return f
    });
    var r = n(16),
        o = n.n(r),
        i = n(21),
        a = n.n(i),
        s = n(1),
        c = n.n(s),
        u = function() {
            function t(e) {
                o()(this, t), c()(this, "storage", void 0), c()(this, "available", void 0), this.storage = window[e], this.available = this.isAvailable()
            }
            return a()(t, [{
                key: "isAvailable",
                value: function() {
                    var t = "local-storage-module-test";
                    if (void 0 !== this.available) return this.available;
                    try {
                        this.storage.setItem(t, "graun"), this.storage.removeItem(t), this.available = !0
                    } catch (t) {
                        this.available = !1
                    }
                    return this.available
                }
            }, {
                key: "get",
                value: function(t) {
                    if (this.available) {
                        var e;
                        try {
                            var n = this.getRaw(t);
                            if (null == n) return null;
                            if (null === (e = JSON.parse(n))) return null
                        } catch (e) {
                            return this.remove(t), null
                        }
                        return e.expires && new Date > new Date(e.expires) ? (this.remove(t), null) : e.value
                    }
                }
            }, {
                key: "set",
                value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (this.available) return this.storage.setItem(t, JSON.stringify({
                        value: e,
                        expires: n.expires
                    }))
                }
            }, {
                key: "setIfNotExists",
                value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (this.available && null === this.storage.getItem(t)) return this.storage.setItem(t, JSON.stringify({
                        value: e,
                        expires: n.expires
                    }))
                }
            }, {
                key: "getRaw",
                value: function(t) {
                    if (this.available) return this.storage.getItem(t)
                }
            }, {
                key: "remove",
                value: function(t) {
                    if (this.available) return this.storage.removeItem(t)
                }
            }]), t
        }(),
        l = new u("localStorage"),
        f = new u("sessionStorage")
}, , function(t, e, n) {
    "use strict";
    var r = n(74),
        o = n.n(r);
    e.a = new o.a
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() {
        return v
    }), n.d(e, "j", function() {
        return w
    }), n.d(e, "i", function() {
        return _
    }), n.d(e, "d", function() {
        return h
    }), n.d(e, "f", function() {
        return j
    }), n.d(e, "g", function() {
        return p
    }), n.d(e, "o", function() {
        return y
    }), n.d(e, "b", function() {
        return g
    }), n.d(e, "l", function() {
        return b
    }), n.d(e, "m", function() {
        return m
    }), n.d(e, "k", function() {
        return x
    }), n.d(e, "p", function() {
        return E
    }), n.d(e, "c", function() {
        return c
    }), n.d(e, "n", function() {
        return O
    }), n.d(e, "a", function() {
        return S
    }), n.d(e, "e", function() {
        return k
    });
    var r, o, i, a = n(0),
        s = n(6),
        c = [{
            name: "mobile",
            isTweakpoint: !1,
            width: 0
        }, {
            name: "mobileMedium",
            isTweakpoint: !0,
            width: 375
        }, {
            name: "mobileLandscape",
            isTweakpoint: !0,
            width: 480
        }, {
            name: "phablet",
            isTweakpoint: !0,
            width: 660
        }, {
            name: "tablet",
            isTweakpoint: !1,
            width: 740
        }, {
            name: "desktop",
            isTweakpoint: !1,
            width: 980
        }, {
            name: "leftCol",
            isTweakpoint: !0,
            width: 1140
        }, {
            name: "wide",
            isTweakpoint: !1,
            width: 1300
        }],
        u = document.visibilityState || document.webkitVisibilityState || document.mozVisibilityState || document.msVisibilityState || "visible",
        l = c.map(function(t) {
            return t.name
        }),
        f = function(t) {
            o = t.name, r = t.isTweakpoint ? function(t) {
                for (var e = l.indexOf(t), n = c[e]; e >= 0 && n.isTweakpoint;) n = c[e -= 1];
                return n.name
            }(o) : o
        },
        d = function() {
            var t = window.getComputedStyle(document.body, "::after"),
                e = t.content.substring(1, t.content.length - 1),
                n = l.indexOf(e);
            f(c[n])
        },
        p = function() {
            return window.innerWidth && document && document.body && document.body.clientWidth ? {
                width: window.innerWidth || document.body.clientWidth,
                height: window.innerHeight || document.body.clientHeight
            } : {
                height: 0,
                width: 0
            }
        },
        h = function(t) {
            return t ? o : r
        },
        m = function(t) {
            var e = t.min ? l.indexOf(t.min) : 0,
                n = t.max ? l.indexOf(t.max) : l.length - 1,
                i = l.indexOf(o || r);
            return e <= i && i <= n
        },
        v = function(t) {
            var e = h(t);
            return function(n) {
                var r = h(t);
                r !== e && (n(r, e), e = r)
            }
        },
        g = !!window.ApplePaySession,
        y = function() {
            return /(iPad|iPhone|iPod touch)/i.test(navigator.userAgent)
        },
        b = function() {
            return /Android/i.test(navigator.userAgent)
        },
        w = function() {
            return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch
        },
        _ = function() {
            return void 0 !== i ? i : (window.history && window.history.pushState && (i = !0, window.navigator.userAgent.match(/Android/i) && (i = !!window.navigator.userAgent.match(/(Chrome|Firefox)/i))), i)
        },
        x = function() {
            var t = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.event,
                    e = "visible",
                    n = {
                        focus: e,
                        focusin: e,
                        pageshow: e,
                        blur: "hidden",
                        focusout: "hidden",
                        pagehide: "hidden"
                    };
                u = t.type in n ? n[t.type] : window && window.hidden ? "hidden" : "visible"
            };
            "hidden" in document ? document.addEventListener("visibilitychange", t) : "msHidden" in document ? document.addEventListener("msvisibilitychange", t) : "onfocusin" in document ? (window.onfocusout = t, window.onfocusin = t) : (window.onpageshow = t, window.onpagehide = t, window.onfocus = t, window.onblur = t)
        },
        E = function() {
            return "visible" === u
        },
        O = function() {
            return window.guardian.isEnhanced
        },
        S = a.a.get("isDotcomRendering", !1) ? Promise.resolve(!1) : new Promise(function(t) {
            window.guardian.adBlockers.hasOwnProperty("active") ? t(window.guardian.adBlockers.active) : window.guardian.adBlockers.onDetect.push(t)
        }),
        k = function() {
            return document.referrer || ""
        },
        j = function() {
            if (!navigator && !navigator.userAgent) return "";
            var t, e = navigator.userAgent,
                n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return n && n[1] && /trident/i.test(n[1]) && (t = /\brv[ :]+(\d+)/g.exec(e)) && t[1] ? "IE ".concat(t[1]) : n && "Chrome" === n[1] && (t = e.match(/\bOPR\/(\d+)/)) && t[1] ? "Opera ".concat(t[1]) : (n = n && n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], (t = e.match(/version\/(\d+)/i)) && t[1] && n.splice(1, 1, t[1]), {
                browser: n[0],
                version: n[1]
            })
        }();
    "matchMedia" in window ? c.forEach(function(t, e, n) {
        var r = "(min-width: ".concat(t.width, "px)");
        t.mql = e < n.length - 1 ? window.matchMedia("".concat(r, " and (max-width: ").concat(n[e + 1].width - 1, "px)")) : window.matchMedia(r), t.listener = function(t) {
            t && t.matches && f(this)
        }.bind(t), t.mql && t.mql.addListener(t.listener), t.mql && t.listener && t.listener(t.mql)
    }) : (d(), s.a.on("window:throttledResize", d))
}, , , , function(t, e, n) {
    var r, o, i;
    /*!
     * Bonzo: DOM Utility (c) Dustin Diaz 2012
     * https://github.com/ded/bonzo
     * License MIT
     */
    /*!
     * Bonzo: DOM Utility (c) Dustin Diaz 2012
     * https://github.com/ded/bonzo
     * License MIT
     */
    i = function() {
        var t, e, n, r, o = window,
            i = o.document,
            a = i.documentElement,
            s = /^(checked|value|selected|disabled)$/i,
            c = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,
            u = /\s*<script +src=['"]([^'"]+)['"]>/,
            l = ["<table>", "</table>", 1],
            f = ["<table><tbody><tr>", "</tr></tbody></table>", 3],
            d = ["<select>", "</select>", 1],
            p = ["_", "", 0, 1],
            h = {
                thead: l,
                tbody: l,
                tfoot: l,
                colgroup: l,
                caption: l,
                tr: ["<table><tbody>", "</tbody></table>", 2],
                th: f,
                td: f,
                col: ["<table><colgroup>", "</colgroup></table>", 2],
                fieldset: ["<form>", "</form>", 1],
                legend: ["<form><fieldset>", "</fieldset></form>", 2],
                option: d,
                optgroup: d,
                script: p,
                style: p,
                link: p,
                param: p,
                base: p
            },
            m = /^(checked|selected|disabled)$/,
            v = {},
            g = 0,
            y = /^-?[\d\.]+$/,
            b = /^data-(.+)$/,
            w = "px",
            _ = "setAttribute",
            x = "getAttribute",
            E = (r = i.createElement("p"), {
                transform: function() {
                    var t, e = ["transform", "webkitTransform", "MozTransform", "OTransform", "msTransform"];
                    for (t = 0; t < e.length; t++)
                        if (e[t] in r.style) return e[t]
                }(),
                classList: "classList" in r
            }),
            O = /\s+/,
            S = String.prototype.toString,
            k = {
                lineHeight: 1,
                zoom: 1,
                zIndex: 1,
                opacity: 1,
                boxFlex: 1,
                WebkitBoxFlex: 1,
                MozBoxFlex: 1
            },
            j = i.querySelectorAll && function(t) {
                return i.querySelectorAll(t)
            };

        function C(t) {
            return t && t.nodeName && (1 == t.nodeType || 11 == t.nodeType)
        }

        function A(t, e, n) {
            var r, o, i;
            if ("string" == typeof t) return J.create(t);
            if (C(t) && (t = [t]), n) {
                for (i = [], r = 0, o = t.length; r < o; r++) i[r] = W(e, t[r]);
                return i
            }
            return t
        }

        function T(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function L(t, e, n, r) {
            for (var o, i = 0, a = t.length; i < a; i++) o = r ? t.length - i - 1 : i, e.call(n || t[o], t[o], o, t);
            return t
        }

        function P(t, e, n) {
            for (var r = 0, o = t.length; r < o; r++) C(t[r]) && (P(t[r].childNodes, e, n), e.call(n || t[r], t[r], r, t));
            return t
        }

        function R(t) {
            return t.replace(/-(.)/g, function(t, e) {
                return e.toUpperCase()
            })
        }

        function I(t) {
            t[x]("data-node-uid") || t[_]("data-node-uid", ++g);
            var e = t[x]("data-node-uid");
            return v[e] || (v[e] = {})
        }

        function q(t) {
            var e = t[x]("data-node-uid");
            e && delete v[e]
        }

        function N(t) {
            var e;
            try {
                return null == t ? void 0 : "true" === t || "false" !== t && ("null" === t ? null : (e = parseFloat(t)) == t ? e : t)
            } catch (t) {}
        }

        function M(t, e, n) {
            for (var r = 0, o = t.length; r < o; ++r)
                if (e.call(n || null, t[r], r, t)) return !0;
            return !1
        }

        function D(t) {
            return "transform" == t && (t = E.transform) || /^transform-?[Oo]rigin$/.test(t) && (t = E.transform + "Origin"), t ? R(t) : null
        }

        function H(t, e, n, r) {
            var o = 0,
                i = e || this,
                a = [];
            return L(A(j && "string" == typeof t && "<" != t.charAt(0) ? j(t) : t), function(t, e) {
                L(i, function(r) {
                    n(t, a[o++] = e > 0 ? W(i, r) : r)
                }, null, r)
            }, this, r), i.length = o, L(a, function(t) {
                i[--o] = t
            }, null, !r), i
        }

        function B(t, e, n) {
            var r = J(t),
                o = r.css("position"),
                i = r.offset(),
                a = "relative",
                s = o == a,
                c = [parseInt(r.css("left"), 10), parseInt(r.css("top"), 10)];
            "static" == o && (r.css("position", a), o = a), isNaN(c[0]) && (c[0] = s ? 0 : t.offsetLeft), isNaN(c[1]) && (c[1] = s ? 0 : t.offsetTop), null != e && (t.style.left = e - i.left + c[0] + w), null != n && (t.style.top = n - i.top + c[1] + w)
        }

        function F(t, e) {
            return "function" == typeof e ? e.call(t, t) : e
        }

        function U(t, e, n) {
            var r = this[0];
            return r ? null == t && null == e ? (V(r) ? $() : {
                x: r.scrollLeft,
                y: r.scrollTop
            })[n] : (V(r) ? o.scrollTo(t, e) : (null != t && (r.scrollLeft = t), null != e && (r.scrollTop = e)), this) : this
        }

        function z(t) {
            if (this.length = 0, t) {
                t = "string" == typeof t || t.nodeType || void 0 === t.length ? [t] : t, this.length = t.length;
                for (var e = 0; e < t.length; e++) this[e] = t[e]
            }
        }

        function W(t, e) {
            var n, r, o, i = e.cloneNode(!0);
            if (t.$ && "function" == typeof t.cloneEvents)
                for (t.$(i).cloneEvents(e), n = t.$(i).find("*"), r = t.$(e).find("*"), o = 0; o < r.length; o++) t.$(n[o]).cloneEvents(r[o]);
            return i
        }

        function V(t) {
            return t === o || /^(?:body|html)$/i.test(t.tagName)
        }

        function $() {
            return {
                x: o.pageXOffset || a.scrollLeft,
                y: o.pageYOffset || a.scrollTop
            }
        }

        function J(t) {
            return new z(t)
        }
        return E.classList ? (t = function(t, e) {
            return t.classList.contains(e)
        }, e = function(t, e) {
            t.classList.add(e)
        }, n = function(t, e) {
            t.classList.remove(e)
        }) : (t = function(t, e) {
            return T(e).test(t.className)
        }, e = function(t, e) {
            t.className = (t.className + " " + e).trim()
        }, n = function(t, e) {
            t.className = t.className.replace(T(e), " ").trim()
        }), z.prototype = {
            get: function(t) {
                return this[t] || null
            },
            each: function(t, e) {
                return L(this, t, e)
            },
            deepEach: function(t, e) {
                return P(this, t, e)
            },
            map: function(t, e) {
                var n, r, o = [];
                for (r = 0; r < this.length; r++) n = t.call(this, this[r], r), e ? e(n) && o.push(n) : o.push(n);
                return o
            },
            html: function(t, e) {
                var n = e ? "textContent" : "innerHTML",
                    r = this;
                return void 0 !== t ? this.empty().each(function(o, i) {
                    try {
                        if (e || "string" == typeof t && !c.test(o.tagName)) return o[n] = t
                    } catch (t) {}! function(e, n) {
                        L(A(t, r, i), function(t) {
                            e.appendChild(t)
                        })
                    }(o)
                }) : this[0] ? this[0][n] : ""
            },
            text: function(t) {
                return this.html(t, !0)
            },
            append: function(t) {
                var e = this;
                return this.each(function(n, r) {
                    L(A(t, e, r), function(t) {
                        n.appendChild(t)
                    })
                })
            },
            prepend: function(t) {
                var e = this;
                return this.each(function(n, r) {
                    var o = n.firstChild;
                    L(A(t, e, r), function(t) {
                        n.insertBefore(t, o)
                    })
                })
            },
            appendTo: function(t, e) {
                return H.call(this, t, e, function(t, e) {
                    t.appendChild(e)
                })
            },
            prependTo: function(t, e) {
                return H.call(this, t, e, function(t, e) {
                    t.insertBefore(e, t.firstChild)
                }, 1)
            },
            before: function(t) {
                var e = this;
                return this.each(function(n, r) {
                    L(A(t, e, r), function(t) {
                        n.parentNode.insertBefore(t, n)
                    })
                })
            },
            after: function(t) {
                var e = this;
                return this.each(function(n, r) {
                    L(A(t, e, r), function(t) {
                        n.parentNode.insertBefore(t, n.nextSibling)
                    }, null, 1)
                })
            },
            insertBefore: function(t, e) {
                return H.call(this, t, e, function(t, e) {
                    t.parentNode.insertBefore(e, t)
                })
            },
            insertAfter: function(t, e) {
                return H.call(this, t, e, function(t, e) {
                    var n = t.nextSibling;
                    n ? t.parentNode.insertBefore(e, n) : t.parentNode.appendChild(e)
                }, 1)
            },
            replaceWith: function(t) {
                var e = this;
                return this.each(function(n, r) {
                    L(A(t, e, r), function(t) {
                        n.parentNode && n.parentNode.replaceChild(t, n)
                    })
                })
            },
            clone: function(t) {
                var e, n, r = [];
                for (n = 0, e = this.length; n < e; n++) r[n] = W(t || this, this[n]);
                return J(r)
            },
            addClass: function(n) {
                return n = S.call(n).split(O), this.each(function(r) {
                    L(n, function(n) {
                        n && !t(r, F(r, n)) && e(r, F(r, n))
                    })
                })
            },
            removeClass: function(e) {
                return e = S.call(e).split(O), this.each(function(r) {
                    L(e, function(e) {
                        e && t(r, F(r, e)) && n(r, F(r, e))
                    })
                })
            },
            hasClass: function(e) {
                return e = S.call(e).split(O), M(this, function(n) {
                    return M(e, function(e) {
                        return e && t(n, e)
                    })
                })
            },
            toggleClass: function(r, o) {
                return r = S.call(r).split(O), this.each(function(i) {
                    L(r, function(r) {
                        r && (void 0 !== o ? o ? !t(i, r) && e(i, r) : n(i, r) : t(i, r) ? n(i, r) : e(i, r))
                    })
                })
            },
            show: function(t) {
                return t = "string" == typeof t ? t : "", this.each(function(e) {
                    e.style.display = t
                })
            },
            hide: function() {
                return this.each(function(t) {
                    t.style.display = "none"
                })
            },
            toggle: function(t, e) {
                return e = "string" == typeof e ? e : "", "function" != typeof t && (t = null), this.each(function(n) {
                    n.style.display = n.offsetWidth || n.offsetHeight ? "none" : e, t && t.call(n)
                })
            },
            first: function() {
                return J(this.length ? this[0] : [])
            },
            last: function() {
                return J(this.length ? this[this.length - 1] : [])
            },
            next: function() {
                return this.related("nextSibling")
            },
            previous: function() {
                return this.related("previousSibling")
            },
            parent: function() {
                return this.related("parentNode")
            },
            related: function(t) {
                return J(this.map(function(e) {
                    for (e = e[t]; e && 1 !== e.nodeType;) e = e[t];
                    return e || 0
                }, function(t) {
                    return t
                }))
            },
            focus: function() {
                return this.length && this[0].focus(), this
            },
            blur: function() {
                return this.length && this[0].blur(), this
            },
            css: function(t, e) {
                var n, r, a, s, c, u = t;
                return void 0 === e && "string" == typeof t ? (e = this[0]) ? e === i || e === o ? (n = e === i ? J.doc() : J.viewport(), "width" == t ? n.width : "height" == t ? n.height : "") : (t = D(t)) ? (r = e, a = t, s = null, (c = i.defaultView.getComputedStyle(r, "")) && (s = c[a]), r.style[a] || s) : null : null : ("string" == typeof t && ((u = {})[t] = e), this.each(function(t, e, n) {
                    for (var r in u)
                        if (u.hasOwnProperty(r)) {
                            n = u[r], (e = D(r)) && y.test(n) && !(e in k) && (n += w);
                            try {
                                t.style[e] = F(t, n)
                            } catch (t) {}
                        }
                }))
            },
            offset: function(t, e) {
                if (t && "object" == typeof t && ("number" == typeof t.top || "number" == typeof t.left)) return this.each(function(e) {
                    B(e, t.left, t.top)
                });
                if ("number" == typeof t || "number" == typeof e) return this.each(function(n) {
                    B(n, t, e)
                });
                if (!this[0]) return {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                };
                var n = this[0],
                    r = n.ownerDocument.documentElement,
                    o = n.getBoundingClientRect(),
                    a = $(),
                    s = n.offsetWidth,
                    c = n.offsetHeight;
                return {
                    top: o.top + a.y - Math.max(0, r && r.clientTop, i.body.clientTop),
                    left: o.left + a.x - Math.max(0, r && r.clientLeft, i.body.clientLeft),
                    height: c,
                    width: s
                }
            },
            dim: function() {
                if (!this.length) return {
                    height: 0,
                    width: 0
                };
                var t, e = this[0],
                    n = 9 == e.nodeType && e.documentElement,
                    r = n || !e.style || e.offsetWidth || e.offsetHeight ? null : (this, t = {
                        position: e.style.position || "",
                        visibility: e.style.visibility || "",
                        display: e.style.display || ""
                    }, this.first().css({
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }), t),
                    o = n ? Math.max(e.body.scrollWidth, e.body.offsetWidth, n.scrollWidth, n.offsetWidth, n.clientWidth) : e.offsetWidth,
                    i = n ? Math.max(e.body.scrollHeight, e.body.offsetHeight, n.scrollHeight, n.offsetHeight, n.clientHeight) : e.offsetHeight;
                return r && this.first().css(r), {
                    height: i,
                    width: o
                }
            },
            attr: function(t, e) {
                var n, r = this[0];
                if ("string" != typeof t && !(t instanceof String)) {
                    for (n in t) t.hasOwnProperty(n) && this.attr(n, t[n]);
                    return this
                }
                return void 0 === e ? r ? s.test(t) ? !(!m.test(t) || "string" != typeof r[t]) || r[t] : r[x](t) : null : this.each(function(n) {
                    s.test(t) ? n[t] = F(n, e) : n[_](t, F(n, e))
                })
            },
            removeAttr: function(t) {
                return this.each(function(e) {
                    m.test(t) ? e[t] = !1 : e.removeAttribute(t)
                })
            },
            val: function(t) {
                return "string" == typeof t || "number" == typeof t ? this.attr("value", t) : this.length ? this[0].value : null
            },
            data: function(t, e) {
                var n, r, o, i = this[0];
                return void 0 === e ? i ? (n = I(i), void 0 === t ? (L(i.attributes, function(t) {
                    (r = ("" + t.name).match(b)) && (n[R(r[1])] = N(t.value))
                }), n) : (void 0 === n[t] && (n[t] = N(this.attr("data-" + ((o = t) ? o.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : o)))), n[t])) : null : this.each(function(n) {
                    I(n)[t] = e
                })
            },
            remove: function() {
                return this.deepEach(q), this.detach()
            },
            empty: function() {
                return this.each(function(t) {
                    for (P(t.childNodes, q); t.firstChild;) t.removeChild(t.firstChild)
                })
            },
            detach: function() {
                return this.each(function(t) {
                    t.parentNode && t.parentNode.removeChild(t)
                })
            },
            scrollTop: function(t) {
                return U.call(this, null, t, "y")
            },
            scrollLeft: function(t) {
                return U.call(this, t, null, "x")
            }
        }, J.setQueryEngine = function(t) {
            j = t, delete J.setQueryEngine
        }, J.aug = function(t, e) {
            for (var n in t) t.hasOwnProperty(n) && ((e || z.prototype)[n] = t[n])
        }, J.create = function(t) {
            return "string" == typeof t && "" !== t ? function() {
                if (u.test(t)) return [(e = t, n = document.createElement("script"), r = e.match(u), n.src = r[1], n)];
                var e, n, r, o = t.match(/^\s*<([^\s>]+)/),
                    a = i.createElement("div"),
                    s = [],
                    c = o ? h[o[1].toLowerCase()] : null,
                    l = c ? c[2] + 1 : 1,
                    f = c && c[3],
                    d = "parentNode";
                for (a.innerHTML = c ? c[0] + t + c[1] : t; l--;) a = a.firstChild;
                f && a && 1 !== a.nodeType && (a = a.nextSibling);
                do {
                    o && 1 != a.nodeType || s.push(a)
                } while (a = a.nextSibling);
                return L(s, function(t) {
                    t[d] && t[d].removeChild(t)
                }), s
            }() : C(t) ? [t.cloneNode(!0)] : []
        }, J.doc = function() {
            var t = J.viewport();
            return {
                width: Math.max(i.body.scrollWidth, a.scrollWidth, t.width),
                height: Math.max(i.body.scrollHeight, a.scrollHeight, t.height)
            }
        }, J.firstChild = function(t) {
            for (var e, n = t.childNodes, r = 0, o = n && n.length || 0; r < o; r++) 1 === n[r].nodeType && (e = n[o = r]);
            return e
        }, J.viewport = function() {
            return {
                width: o.innerWidth,
                height: o.innerHeight
            }
        }, J.isAncestor = "compareDocumentPosition" in a ? function(t, e) {
            return 16 == (16 & t.compareDocumentPosition(e))
        } : function(t, e) {
            return t !== e && t.contains(e)
        }, J
    }, t.exports ? t.exports = i() : void 0 === (o = "function" == typeof(r = i) ? r.call(e, n, e, t) : r) || (t.exports = o)
}, function(t, e, n) {
    var r;
    ! function(o) {
        "use strict";
        var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        };

        function a() {
            this.frames = [], this.lastId = 0, this.raf = i, this.batch = {
                hash: {},
                read: [],
                write: [],
                mode: null
            }
        }
        a.prototype.read = function(t, e) {
            var n = this.add("read", t, e),
                r = n.id;
            return this.batch.read.push(n.id), "reading" === this.batch.mode || this.batch.scheduled ? r : (this.scheduleBatch(), r)
        }, a.prototype.write = function(t, e) {
            var n = this.add("write", t, e),
                r = this.batch.mode,
                o = n.id;
            return this.batch.write.push(n.id), "writing" === r || "reading" === r || this.batch.scheduled ? o : (this.scheduleBatch(), o)
        }, a.prototype.defer = function(t, e, n) {
            "function" == typeof t && (n = e, e = t, t = 1);
            var r = this,
                o = t - 1;
            return this.schedule(o, function() {
                r.run({
                    fn: e,
                    ctx: n
                })
            })
        }, a.prototype.clear = function(t) {
            if ("function" == typeof t) return this.clearFrame(t);
            var e = this.batch.hash[t];
            if (e) {
                var n = this.batch[e.type],
                    r = n.indexOf(t);
                delete this.batch.hash[t], ~r && n.splice(r, 1)
            }
        }, a.prototype.clearFrame = function(t) {
            var e = this.frames.indexOf(t);
            ~e && this.frames.splice(e, 1)
        }, a.prototype.scheduleBatch = function() {
            var t = this;
            this.schedule(0, function() {
                t.batch.scheduled = !1, t.runBatch()
            }), this.batch.scheduled = !0
        }, a.prototype.uniqueId = function() {
            return ++this.lastId
        }, a.prototype.flush = function(t) {
            for (var e; e = t.shift();) this.run(this.batch.hash[e])
        }, a.prototype.runBatch = function() {
            try {
                this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null
            } catch (t) {
                throw this.runBatch(), t
            }
        }, a.prototype.add = function(t, e, n) {
            var r = this.uniqueId();
            return this.batch.hash[r] = {
                id: r,
                fn: e,
                ctx: n,
                type: t
            }
        }, a.prototype.run = function(t) {
            var e = t.ctx || this,
                n = t.fn;
            if (delete this.batch.hash[t.id], !this.onError) return n.call(e);
            try {
                n.call(e)
            } catch (t) {
                this.onError(t)
            }
        }, a.prototype.loop = function() {
            var t = this,
                e = this.raf;
            this.looping || (e(function n() {
                var r = t.frames.shift();
                t.frames.length ? e(n) : t.looping = !1, r && r()
            }), this.looping = !0)
        }, a.prototype.schedule = function(t, e) {
            return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e)
        }, o = o || new a, t.exports ? t.exports = o : void 0 === (r = function() {
            return o
        }.call(e, n, e, t)) || (t.exports = r)
    }(window.fastdom)
}, function(t, e, n) {
    var r = n(181),
        o = n(179),
        i = n(182);
    t.exports = function(t) {
        return r(t) || o(t) || i()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(35);
    e.a = function(t, e) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (r.a.captureException(t, {
                tags: e
            }), n) {
            var o = t;
            throw o.reported = !0, o
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        o = n(82);
    e.a = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = "string" == typeof t ? t : t.url;
        return n.match("^(https?:)?//") || (n = r.a.get("page.ajaxUrl", "") + n, e.mode = "cors"), Object(o.a)(n, e).then(function(t) {
            if (t.ok) switch (t.status) {
                case 204:
                    return {};
                default:
                    return t.json()
            }
            if (!t.status) return t.text().then(function(t) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    throw new Error("Fetch error while requesting ".concat(n, ": Invalid JSON response"))
                }
            });
            throw new Error("Fetch error while requesting ".concat(n, ": ").concat(t.statusText))
        })
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, , , , function(t, e, n) {
    "use strict";
    n.d(e, "d", function() {
        return f
    }), n.d(e, "c", function() {
        return v
    }), n.d(e, "g", function() {
        return g
    }), n.d(e, "b", function() {
        return m
    }), n.d(e, "a", function() {
        return y
    }), n.d(e, "i", function() {
        return c
    }), n.d(e, "f", function() {
        return p
    }), n.d(e, "h", function() {
        return h
    }), n.d(e, "e", function() {
        return u
    });
    var r = n(28),
        o = n.n(r),
        i = n(7),
        a = n(31),
        s = n.n(a),
        c = Object(i.i)(),
        u = s()(function() {
            return new URLSearchParams(window.location.search).getAll("pbtest").reduce(function(t, e) {
                return t[e] = !0, t
            }, {})
        }, function() {
            return window.location.search
        }),
        l = s()(function(t) {
            return Array.from(new URLSearchParams(t).entries()).reduce(function(t, e) {
                var n = o()(e, 2),
                    r = n[0],
                    i = n[1];
                return t[r] = "" === i || i, t
            }, {})
        }),
        f = function(t) {
            return l(t || window.location.search)
        },
        d = function(t, e) {
            var n = window.location.search.replace(/^\?/, "") !== t.querystring;
            t.querystring && n && c && e(t.state || {}, t.title || window.title, t.querystring + window.location.hash)
        },
        p = function(t) {
            return d(t, window.history.pushState.bind(window.history))
        },
        h = function(t) {
            return d(t, window.history.replaceState.bind(window.history))
        },
        m = function(t) {
            return Object.keys(t).map(function(e) {
                var n = t[e],
                    r = Array.isArray(n) ? n.map(function(t) {
                        return encodeURIComponent(t)
                    }).join(",") : encodeURIComponent(n);
                return "".concat(e, "=").concat(r)
            }).join("&")
        },
        v = function(t) {
            var e = document.createElement("a");
            return e.href = t, e.pathname
        },
        g = function(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            c && window.history[r ? "replaceState" : "pushState"](t, e, n)
        },
        y = function() {
            c && window.history.back()
        }
}, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }
}, , , , function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(41),
        o = n(0),
        i = n(2),
        a = n(6),
        s = (n(4), n(13)),
        c = n.n(s),
        u = n(20),
        l = n(15),
        f = n(115),
        d = n.n(f),
        p = n(36),
        h = n.n(p);
    n.d(e, "k", function() {
        return S
    }), n.d(e, "i", function() {
        return k
    }), n.d(e, "p", function() {
        return j
    }), n.d(e, "b", function() {
        return C
    }), n.d(e, "l", function() {
        return A
    }), n.d(e, "g", function() {
        return T
    }), n.d(e, "m", function() {
        return L
    }), n.d(e, "h", function() {
        return P
    }), n.d(e, "j", function() {
        return R
    }), n.d(e, "n", function() {
        return I
    }), n.d(e, "q", function() {
        return q
    }), n.d(e, "c", function() {
        return N
    }), n.d(e, "d", function() {
        return M
    }), n.d(e, "e", function() {
        return D
    }), n.d(e, "o", function() {
        return H
    }), n.d(e, "a", function() {
        return B
    }), n.d(e, "f", function() {
        return F
    });
    var m, v, g, y, b, w, _, x = null,
        E = null,
        O = null,
        S = function() {
            E = o.a.get("page.idApiUrl"), a.a.emit("module:identity:api:loaded"), O = o.a.get("page.idUrl")
        },
        k = function() {
            if (null === x) {
                var t = Object(i.d)("GU_U"),
                    e = null;
                if (t && (e = JSON.parse((r = t.split(".")[0], decodeURIComponent(escape(window.atob(r.replace(/-/g, "+").replace(/_/g, "/").replace(/,/g, "="))))))), e) {
                    var n = decodeURIComponent(e[2]);
                    x = {
                        id: e[0],
                        primaryEmailAddress: e[1],
                        displayName: n,
                        accountCreatedDate: e[6],
                        emailVerified: e[7],
                        rawResponse: t
                    }
                }
            }
            var r;
            return x
        },
        j = function(t) {
            return h()({
                url: "".concat(o.a.get("page.idApiUrl"), "/users/me/newsletters"),
                method: "PATCH",
                type: "json",
                contentType: "application/json",
                withCredentials: !0,
                crossOrigin: !0,
                data: JSON.stringify(t)
            })
        },
        C = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "none",
                e = arguments.length > 1 ? arguments[1] : void 0,
                n = {};
            switch (t) {
                case "add":
                    n.id = e, n.subscribed = !0;
                    break;
                case "remove":
                    n.id = e, n.subscribed = !1;
                    break;
                default:
                    throw new Error("Undefined newsletter action type (".concat(t, ")"))
            }
            return n
        },
        A = function() {
            return null !== k()
        },
        T = (m = function(t) {
            var e = E || "";
            A() ? Object(r.a)({
                url: "".concat(e, "/user/me"),
                type: "jsonp",
                crossOrigin: !0
            }).then(function(e) {
                "ok" === e.status ? t(e.user) : t(null)
            }) : t(null)
        }, w = function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            g = e, y = "complete", v.forEach(function(t) {
                t.apply(void 0, c()(g))
            })
        }, _ = function(t) {
            "init" === y ? (y = "waiting", v.push(t), m(w)) : "waiting" === y ? v.push(t) : t.apply(void 0, c()(g))
        }, (b = function() {
            v = [], y = "init", g = []
        })(), _.reset = b, _),
        L = function() {
            T.reset(), x = null
        },
        P = function() {
            return Object(r.a)({
                url: (E || "") + "/user/me",
                type: "jsonp",
                data: {
                    refreshCookie: !0
                }
            })
        },
        R = function(t) {
            var e = t;
            if (A()) return k();
            e = encodeURIComponent(e || document.location.href),
                function(t) {
                    window.location.assign(t)
                }("".concat(o.a.get("page.idUrl") || "", "/signin?returnUrl=").concat(e))
        },
        I = function() {
            var t = Object(u.d)().returnUrl ? decodeURIComponent(Object(u.d)().returnUrl) : (O || "") + "/email-prefs";
            return Object(r.a)({
                url: (E || "") + "/user/send-validation-email",
                type: "jsonp",
                crossOrigin: !0,
                data: {
                    method: "post",
                    returnUrl: t
                }
            })
        },
        q = function(t) {
            var e = {
                publicFields: {
                    username: t,
                    displayName: t
                }
            };
            return Object(r.a)({
                url: (E || "") + "/user/me",
                type: "json",
                crossOrigin: !0,
                method: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(e),
                withCredentials: !0
            })
        },
        N = function() {
            var t = (E || "") + "/consents";
            return Object(l.a)(t, {
                mode: "cors",
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            })
        },
        M = function() {
            var t = (E || "") + "/newsletters";
            return Object(l.a)(t, {
                mode: "cors",
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            })
        },
        D = function() {
            var t = (E || "") + "/users/me/newsletters";
            return Object(l.a)(t, {
                mode: "cors",
                method: "GET",
                headers: {
                    Accept: "application/json"
                },
                credentials: "include"
            }).then(function(t) {
                return t.result.subscriptions ? t.result.subscriptions.map(function(t) {
                    return t.listId
                }) : []
            }).catch(function() {
                return []
            })
        },
        H = function(t) {
            return new Promise(function(e, n) {
                h()({
                    url: "".concat(E || "", "/users/me/consents"),
                    method: "PATCH",
                    type: "json",
                    contentType: "application/json",
                    withCredentials: !0,
                    crossOrigin: !0,
                    data: JSON.stringify(t),
                    error: n,
                    success: e
                })
            })
        },
        B = function(t) {
            var e = "".concat(O || "", "/actions/auth/ajax");
            return Object(l.a)(e, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: d.a.stringify({
                    email: t.id,
                    password: t.password
                }),
                credentials: "include"
            })
        },
        F = function() {
            return Object(l.a)("".concat(E || "", "/user/me"), {
                method: "GET",
                mode: "cors",
                credentials: "include"
            })
        }
}, function(t, e, n) {
    var r = n(93),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    t.exports = i
}, function(t, e, n) {
    var r = n(129),
        o = n(131),
        i = n(130);
    t.exports = function(t, e) {
        return r(t) || o(t, e) || i()
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    var r, o, i, a, s, c, u, l, f, d, p, h, m;
    (function() {
        var t = {}.hasOwnProperty;
        r = function() {
            var e, n, r, o, i, a, s, c, u, l, f, d;
            return r = function() {
                return (new Date).getTime().toString(36) + "xxxxxxxxxxxx".replace(/x/g, function() {
                    return Math.floor(36 * Math.random()).toString(36)
                })
            }, u = null != (l = "undefined" != typeof guardian && null !== guardian && null != (f = guardian.config) && null != (d = f.ophan) ? d.pageViewId : void 0) ? l : r(), n = function() {
                return u = r()
            }, a = function(t) {
                return i("//ophan.theguardian.com/img/1?" + e(t))
            }, c = function(t) {
                return "string" == typeof t || "number" == typeof t ? encodeURIComponent(t) : encodeURIComponent(JSON.stringify(t))
            }, s = function(e, n) {
                var r, a, s;
                return JSON && (s = function() {
                    var n;
                    for (r in n = [], e) t.call(e, r) && (a = e[r], o(a) && n.push(encodeURIComponent(r) + "=" + c(a)));
                    return n
                }()).length ? i("//ophan.theguardian.com/img/2?viewId=" + u + "&" + s.join("&"), n) : void 0
            }, o = function(t) {
                return Array.isArray(t) ? t.length : null != t
            }, e = function(e) {
                var n, r;
                return e.viewId = u,
                    function() {
                        var o;
                        for (n in o = [], e) t.call(e, n) && null != (r = e[n]) && o.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
                        return o
                    }().join("&")
            }, i = function(t, e) {
                var n, r;
                return r = new Image, n = setInterval(function() {
                    return r.complete ? ("function" == typeof e && e(), clearInterval(n)) : void 0
                }, 10), r.src = t
            }, {
                sendInitial: a,
                sendMore: s,
                viewId: u,
                bumpViewId: n
            }
        }.apply(e, [])
    }).call(this),
        function() {
            o = function() {
                return {
                    state: function() {
                        return document.visibilityState || document.webkitVisibilityState || document.mozVisibilityState || document.msVisibilityState
                    },
                    changeEvent: document.visibilityState ? "visibilitychange" : document.webkitVisibilityState ? "webkitvisibilitychange" : document.mozVisibilityState ? "mozvisibilitychange" : document.msVisibilityState ? "msvisibilitychange" : void 0
                }
            }.apply(e, [])
        }.call(this),
        function() {
            i = function() {
                return {
                    init: function() {
                        function t(t) {
                            return "function" == typeof t
                        }

                        function e(t, e) {
                            (f.debug || e) && window.console && window.console.log && (e ? console.error("[ABD] " + t) : console.log("[ABD] " + t))
                        }

                        function n(t) {
                            e("start beginTest"), 1 != g && (r(t), v.quick = "testing", y.test = setTimeout(function() {
                                ! function t(n, a) {
                                    var s, c = document.body,
                                        u = !1;
                                    if (null == p && (e("recast bait"), r(n || h)), "string" == typeof n) return e("invalid bait used", !0), void(o() && setTimeout(function() {}, 5));
                                    for (y.test > 0 && (clearTimeout(y.test), y.test = 0), null !== c.getAttribute("abp") && (e("found adblock body attribute"), u = !0), s = 0; s < m.nullProps.length; s++) {
                                        if (null == p[m.nullProps[s]]) {
                                            a > 4 && (u = !0), e("found adblock null attr: " + m.nullProps[s]);
                                            break
                                        }
                                        if (1 == u) break
                                    }
                                    for (s = 0; s < m.zeroProps.length && 1 != u; s++) 0 == p[m.zeroProps[s]] && (a > 4 && (u = !0), e("found adblock zero attr: " + m.zeroProps[s]));
                                    if (void 0 !== window.getComputedStyle) {
                                        var l = window.getComputedStyle(p, null);
                                        ("none" == l.getPropertyValue("display") || "hidden" == l.getPropertyValue("visibility")) && (a > 4 && (u = !0), e("found adblock computedStyle indicator"))
                                    }
                                    u || a++ >= f.maxLoop ? (e("exiting test loop - value: " + (g = u)), i(), o() && setTimeout(function() {}, 5)) : y.test = setTimeout(function() {
                                        t(n, a)
                                    }, f.loopDelay)
                                }(t, 1)
                            }, 5))
                        }

                        function r(t) {
                            var n, r = document.body,
                                o = "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;";
                            if (null != t && "string" != typeof t) {
                                for (null != t.style && (o += t.style), p = function(t, e) {
                                        var n, r, o = e;
                                        if (r = document.createElement("div"), o)
                                            for (n in o) o.hasOwnProperty(n) && r.setAttribute(n, o[n]);
                                        return r
                                    }(0, {
                                        class: t.cssClass,
                                        style: o
                                    }), e("adding bait node to DOM"), r.appendChild(p), n = 0; n < m.nullProps.length; n++) p[m.nullProps[n]];
                                for (n = 0; n < m.zeroProps.length; n++) p[m.zeroProps[n]]
                            } else e("invalid bait being cast")
                        }

                        function o() {
                            if (null === p) return !0;
                            try {
                                t(p.remove) && p.remove(), document.body.removeChild(p)
                            } catch (t) {}
                            return p = null, !0
                        }

                        function i() {
                            var n, r;
                            if (null !== g)
                                for (n = 0; n < d.length; n++) {
                                    r = d[n];
                                    try {
                                        null != r && (t(r.complete) && r.complete(g), g && t(r.found) ? r.found() : !1 === g && t(r.notfound) && r.notfound())
                                    } catch (t) {
                                        e("Failure in notify listeners " + t.Message, !0)
                                    }
                                }
                        }

                        function a() {
                            var t, e = !1;
                            document.readyState && "complete" == document.readyState && (e = !0), t = function() {
                                n(h)
                            }, e ? t() : function(t, e, n) {
                                l ? t.attachEvent("on" + e, n) : t.addEventListener(e, n, !1)
                            }(window, "load", t)
                        }
                        var s = "offset",
                            c = "client",
                            u = function() {},
                            l = void 0 === window.addEventListener,
                            f = {
                                loopDelay: 50,
                                maxLoop: 5,
                                debug: !1,
                                found: u,
                                notfound: u,
                                complete: u
                            },
                            d = [],
                            p = null,
                            h = {
                                cssClass: "ad-slot pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"
                            },
                            m = {
                                nullProps: [s + "Parent"],
                                zeroProps: []
                            };
                        m.zeroProps = [s + "Height", s + "Left", s + "Top", s + "Width", s + "Height", c + "Height", c + "Width"];
                        var v = {
                                quick: null,
                                remote: null
                            },
                            g = null,
                            y = {
                                test: 0,
                                download: 0
                            };
                        return function(t) {
                            var e, n;
                            if (t) {
                                for (e in n = {
                                        complete: u,
                                        found: u,
                                        notfound: u
                                    }, t) t.hasOwnProperty(e) && ("complete" == e || "found" == e || "notFound" == e ? n[e.toLowerCase()] = t[e] : f[e] = t[e]);
                                d.push(n), a()
                            }
                        }
                    }()
                }
            }.apply(e, [])
        }.call(this),
        function() {
            a = function(t) {
                return {
                    run: function() {
                        return new Promise(function(e, n) {
                            if (!t.init) return n(new Error("Failed to initialise adblock detection"));
                            try {
                                return t.init({
                                    complete: function(t) {
                                        return e(t)
                                    }
                                })
                            } catch (t) {
                                return n(t)
                            }
                        })
                    }
                }
            }.apply(e, [i])
        }.call(this),
        function() {
            var t = {}.hasOwnProperty;
            s = function(e, n, r) {
                var o, i, a, s, c, u, l, f, d, p;
                return c = window.document, s = null != window.localStorage && "undefined" != typeof JSON && null !== JSON, d = null, u = function(t, e) {
                    return d = t, "prerender" !== n.state() ? p(e) : n.changeEvent ? c.addEventListener(n.changeEvent, function() {
                        return "visible" === n.state() ? p(e) : void 0
                    }, !1) : void 0
                }, p = function(t, s, c) {
                    var u, l;
                    return null == s && (s = location.href), null == c && (c = window.document.referrer), u = {
                        v: 15,
                        platform: d,
                        url: s,
                        ref: c,
                        visibilityState: n.state(),
                        isModernBrowser: "undefined" != typeof guardian && null !== guardian ? guardian.isModernBrowser : void 0,
                        httpStatus: t,
                        tz: (new Date).getTimezoneOffset(),
                        kxkuid: null != (l = window.localStorage) && "function" == typeof l.getItem ? l.getItem("kxkuid") : void 0
                    }, i(u), a(u), "next-gen" === d && o(u), e.sendInitial(u), r.run().then(function(t) {
                        return e.sendMore({
                            adUnitWasHidden: t
                        })
                    })
                }, f = [], l = function(t) {
                    var n, r, o, i;
                    if ("complete" === document.readyState) {
                        for (r in o = {}, n = t()) i = n[r], o[r] = i;
                        return e.sendMore(o)
                    }
                    return f.push(t)
                }, "function" == typeof window.addEventListener && window.addEventListener("load", function() {
                    var t, n, r, o, i, a;
                    for (r = {}, i = 0, a = f.length; a > i; i++)
                        for (n in t = (0, f[i])()) o = t[n], r[n] = o;
                    return e.sendMore(r)
                }, !1), a = function(e) {
                    var n, r, o;
                    if (s) {
                        if (null != (r = JSON.parse(window.localStorage.getItem("ophan_follow"))))
                            for (n in r) t.call(r, n) && (o = r[n], e[n] = o);
                        return window.localStorage.removeItem("ophan_follow")
                    }
                }, o = function(t) {
                    var e, n, r, o, i, a;
                    if ((e = function() {
                            var t, e, r, o;
                            for (o = [], t = 0, e = (r = document.querySelectorAll("[data-component]")).length; e > t; t++) n = r[t], o.push(n.getAttribute("data-component"));
                            return o
                        }()).length > 0) {
                        for (o = {}, i = 0, a = e.length; a > i; i++) n = e[i], o[n] = 1;
                        return t.renderedComponents = function() {
                            var t;
                            for (r in t = [], o) o[r], t.push(r);
                            return t
                        }()
                    }
                }, i = function(t) {
                    var e, n, r;
                    return null != (e = "undefined" != typeof guardian && null !== guardian && null != (n = guardian.config) && null != (r = n.page) ? r.contentType : void 0) && "" !== e ? t.contentType = e.toLowerCase() : void 0
                }, {
                    init: u,
                    storeDataToSendOnNextEvent: function(e) {
                        var n, r, o;
                        if (s) {
                            for (r in n = JSON.parse(window.localStorage.getItem("ophan_follow")) || {}, e) t.call(e, r) && (o = e[r], n[r] = o);
                            return window.localStorage.setItem("ophan_follow", JSON.stringify(n))
                        }
                    },
                    onLoadCapture: l,
                    servingPlatform: function() {
                        return d
                    },
                    viewId: e.viewId,
                    sendInitialEvent: p
                }
            }.apply(e, [r, o, a])
        }.call(this),
        function() {
            c = function() {
                var t, e, n;
                return e = [], n = null, t = function() {
                    function t(t, e, r, o) {
                        this.name = t, this.element = e, this.visibilityThreshold = r, this.reportingInterval = o, this.visible = !1, this.totalAttentionMs = 0, this.unrecordedAttentionStarted = null, this.reportedTotalAttentionMs = 0, this.usingEmitter = !1, this.visCheck = this.checkVisibility.bind(this), null != n ? (this.usingEmitter = !0, n.on("window:throttledScroll", this.visCheck)) : window.addEventListener("scroll", this.visCheck), window.addEventListener("resize", this.visCheck)
                    }
                    return t.prototype.isVisible = function(t) {
                        var e, n, r, o, i;
                        return null == t && (t = 1), !!this.element.offsetParent && (r = (e = this.element.getBoundingClientRect()).right - e.left, n = e.bottom - e.top, o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth, e.left >= -r * (1 - t) && e.top >= -n * (1 - t) && e.right <= i + r * (1 - t) && e.bottom <= o + n * (1 - t))
                    }, t.prototype.visibilityHasChanged = function() {
                        var t;
                        return t = this.visible, this.visible = this.isVisible(this.visibilityThreshold), t !== this.visible
                    }, t.prototype.rebindToEventEmitter = function() {
                        return this.usingEmitter || null == n ? void 0 : (window.removeEventListener("scroll", this.visCheck), this.usingEmitter = !0, n.on("window:throttledScroll", this.visCheck))
                    }, t.prototype.checkVisibility = function() {
                        return this.rebindToEventEmitter(), this.visibilityHasChanged() ? this.visible ? this.makeActive() : this.makeInactive() : void 0
                    }, t.prototype.makeActive = function() {
                        return null != this.unrecordedAttentionStarted ? this.unrecordedAttentionStarted : this.unrecordedAttentionStarted = new Date
                    }, t.prototype.makeInactive = function() {
                        return this.incrementTotalAttentionTimeByUnrecordedAmount(), this.unrecordedAttentionStarted = null
                    }, t.prototype.hadAttentionSinceLastGet = function() {
                        return this.incrementTotalAttentionTimeByUnrecordedAmount(), this.totalAttentionMs !== this.reportedTotalAttentionMs
                    }, t.prototype.getAttentionTime = function() {
                        return this.incrementTotalAttentionTimeByUnrecordedAmount(), this.reportedTotalAttentionMs = this.totalAttentionMs, this.totalAttentionMs
                    }, t.prototype.incrementTotalAttentionTimeByUnrecordedAmount = function() {
                        var t, e;
                        return null != this.unrecordedAttentionStarted ? (t = new Date, e = Math.min(t.getTime() - this.unrecordedAttentionStarted.getTime(), this.reportingInterval), this.totalAttentionMs += e, this.unrecordedAttentionStarted = t) : void 0
                    }, t
                }(), {
                    setEventEmitter: function(t) {
                        return n = t
                    },
                    startMonitoring: function() {
                        var t, n, r, o;
                        for (o = [], n = 0, r = e.length; r > n; n++)(t = e[n]).isVisible() && o.push(t.makeActive());
                        return o
                    },
                    stopMonitoring: function() {
                        var t, n, r, o;
                        for (o = [], n = 0, r = e.length; r > n; n++) t = e[n], o.push(t.makeInactive());
                        return o
                    },
                    getAttentionTimes: function() {
                        var t, n, r, o;
                        for (n = {}, r = 0, o = e.length; o > r; r++)(t = e[r]).hadAttentionSinceLastGet() && (n[t.name] = t.getAttentionTime());
                        return n
                    },
                    registerComponent: function(n, r, o, i) {
                        return e.push(new t(n, r, o, i))
                    }
                }
            }.apply(e, [])
        }.call(this),
        function() {
            u = function(t, e) {
                var n, r, o, i, a, s, c, u, l, f, d;
                return n = ["focus", "click", "scroll", "mousemove", "touchstart", "touchend", "touchcancel", "touchleave", "touchmove", "keyup", "keydown"], 1e4, l = 0, f = null, c = 0, o = null, d = !1, r = function() {
                    return null != o && window.clearTimeout(o), o = null
                }, a = function() {
                    return null == f && (f = new Date), e.startMonitoring(), r(), o = window.setTimeout(function() {
                        return d ? void 0 : s()
                    }, 5e3)
                }, i = function() {
                    var t, e;
                    return null != f ? (t = new Date, e = Math.min(t.getTime() - f.getTime(), 1e4), l += e, f = t) : void 0
                }, s = function() {
                    return r(), e.stopMonitoring(), i(), f = null
                }, u = function() {
                    var n, r;
                    return i(), l !== c ? (r = {
                        attentionMs: l
                    }, n = e.getAttentionTimes(), Object.keys(n).length && (r.componentAttentionMs = n), t.sendMore(r), c = l) : void 0
                }, {
                    init: function(t) {
                        var e, r, o;
                        for (r = 0, o = n.length; o > r; r++) e = n[r], window.addEventListener(e, a);
                        return document.addEventListener(t.changeEvent, function() {
                            return "visible" === t.state() ? a() : s()
                        }, !1), document.body.addEventListener("videoPlaying", function() {
                            return d = !0, a()
                        }), document.body.addEventListener("videoEnded", function() {
                            return d = !1, s()
                        }), document.body.addEventListener("videoPause", function() {
                            return d = !1, s()
                        }), window.setInterval(u, 1e4)
                    },
                    initComponent: function(t, n, r) {
                        return null == r && (r = .5), e.registerComponent(t, n, r, 1e4)
                    },
                    setEventEmitter: function(t) {
                        return e.setEventEmitter(t)
                    }
                }
            }.apply(e, [r, c])
        }.call(this),
        function() {
            l = function(t) {
                var e;
                return {
                    init: function() {
                        return e(function(e) {
                            var n;
                            return n = {
                                inPrivateBrowsingMode: e
                            }, t.sendMore(n)
                        })
                    },
                    privateBrowsingMode: e = function(t) {
                        var e, n, r, o;
                        return e = function() {
                            return t(!1)
                        }, n = function() {
                            return t(!0)
                        }, o = function() {
                            try {
                                return localStorage.length ? e() : (localStorage.x = 1, localStorage.removeItem("x"), e())
                            } catch (t) {
                                return n()
                            }
                        }, r = function() {
                            var t;
                            try {
                                return (t = indexedDB.open("test")).onsuccess = e, t.onerror = n
                            } catch (t) {
                                return n()
                            }
                        }, window.webkitRequestFileSystem ? window.webkitRequestFileSystem(window.TEMPORARY, 1, e, n) : "MozAppearance" in document.documentElement.style ? r() : /constructor/i.test(window.HTMLElement) ? o() : window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? e() : n()
                    }
                }
            }.apply(e, [r])
        }.call(this),
        function() {
            f = function() {
                var t;
                return t = !1, {
                    init: function() {
                        var e;
                        return e = function() {
                            var e;
                            return "undefined" == typeof localStorage || null === localStorage || t || (t = !0, ("true" === (e = window.location.search.replace(/^(?:.*[&\?]heatmap(?:\=([^&]*))?)?.*$/, "$1")) || "false" === e) && (localStorage.ophan_heatmap = e), "true" !== localStorage.ophan_heatmap && "show" !== e) ? void 0 : document.body.appendChild(document.createElement("script")).src = "//dashboard.ophan.co.uk/assets/js/heatmap-bookmarklet.js"
                        }, "complete" === document.readyState ? e() : "function" == typeof window.addEventListener ? window.addEventListener("load", function() {
                            return e()
                        }, !1) : void 0
                    }
                }
            }.apply(e, [])
        }.call(this),
        function() {
            d = function(t, e) {
                var n, r, o;
                return o = function(t) {
                    var e, n;
                    return "a" === (e = null != t && null != (n = t.nodeName) ? n.toLowerCase() : void 0) ? t : null == e || "body" === e ? null : o(t.parentNode)
                }, n = function(t) {
                    var e, r;
                    return null == (e = null != t && null != (r = t.nodeName) ? r.toLowerCase() : void 0) || "body" === e ? null : ("function" == typeof t.getAttribute ? t.getAttribute("data-component") : void 0) || n(t.parentNode)
                }, r = function(t) {
                    var e, n, r;
                    return e = function(t) {
                        var e;
                        return (null != t && null != (e = t.nodeName) ? e.toLowerCase() : void 0) === document.body.nodeName.toLowerCase()
                    }, n = function(t) {
                        return t === document
                    }, (r = function(t, o) {
                        var i;
                        return null == t || e(t) || n(t) ? o : (null != (i = t.getAttribute("data-link-name")) && o.push(i), r(t.parentNode, o))
                    })(t, [])
                }, "function" == typeof document.addEventListener ? document.addEventListener("click", function(i) {
                    var a, s;
                    return a = o(i.target), null != (s = {
                        from: [location.protocol, "//", location.host, location.pathname].join(""),
                        to: a ? a.href : void 0,
                        referringComponent: n(i.target),
                        referringDataLinkNames: r(i.target),
                        refPlatform: t.servingPlatform(),
                        refViewId: t.viewId
                    }).referringDataLinkNames && e.sendMore({
                        clickComponent: s.referringComponent,
                        clickLinkNames: s.referringDataLinkNames
                    }), null != a ? t.storeDataToSendOnNextEvent(s) : void 0
                }, !1) : void 0
            }.apply(e, [s, r])
        }.call(this),
        function() {
            p = function(t) {
                var e, n;
                return e = window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance, n = function() {
                    var t;
                    return null != (t = null != e ? e.timing : void 0) ? {
                        performance: {
                            dns: t.domainLookupEnd - t.domainLookupStart,
                            connection: t.connectEnd - t.connectStart,
                            firstByte: t.responseStart - t.connectEnd,
                            lastByte: t.responseEnd - t.responseStart,
                            domContentLoadedEvent: t.domContentLoadedEventStart - t.responseEnd,
                            loadEvent: t.loadEventStart - t.domContentLoadedEventStart,
                            navType: e.navigation.type,
                            redirectCount: e.navigation.redirectCount
                        }
                    } : {}
                }, t.onLoadCapture(n), e
            }.apply(e, [s])
        }.call(this),
        function() {
            var t = {}.hasOwnProperty;
            h = function(e, n) {
                var r, o, i, a, s, c, u, l, f;
                return s = {}, f = [], c = function() {
                    var t;
                    return (t = f.shift()) ? window.setTimeout(t, 300) : void 0
                }, l = function(e, r) {
                    var o;
                    return s[e] = r, 3 === function() {
                        var e;
                        for (o in e = [], s) t.call(s, o) && e.push(o);
                        return e
                    }().length ? n.sendMore({
                        ipConnectivity: s
                    }) : void 0
                }, u = function(t, e) {
                    var n;
                    return (n = new XMLHttpRequest).timeout = 5e3, n.open("GET", t, !0), n.ontimeout = function() {
                        return e("timeout")
                    }, n.onerror = function() {
                        return e("neterror")
                    }, n.onload = function() {
                        var t;
                        return 200 === n.status ? (t = n.responseText, e("success" + t)) : e("loaderror")
                    }, n.send()
                }, o = function(t) {
                    return 0 === t.lastIndexOf("success", 0)
                }, r = function(t, e) {
                    return l(t, e), c()
                }, i = function(t, e) {
                    return function(n) {
                        var i;
                        return o(n) ? r(t, n) : (i = function(e) {
                            return o(e) || n === e ? r(t, e) : void 0
                        }, f.push(function() {
                            return u(e, i)
                        }), c())
                    }
                }, (a = function(t, e) {
                    return f.push(function() {
                        return u(e, i(t, e))
                    })
                })("ipv4", "https://ipv4.guim.co.uk/"), a("dual", "https://dual.guim.co.uk/"), a("ipv6", "https://ipv6.guim.co.uk/"), Math.floor(20 * Math.random()) % 20 == 0 ? c() : void 0
            }.apply(e, [s, r])
        }.call(this),
        function() {
            void 0 === (m = function(t, e, n, r, o, i) {
                var a;
                return null != (null != (a = window.guardian) ? a.ophan : void 0) ? window.guardian.ophan : (t.init("next-gen"), o.init(), i.init(), null != window.addEventListener && n.init(r), null == window.guardian && (window.guardian = {}), window.guardian.ophan = {
                    setEventEmitter: n.setEventEmitter,
                    trackComponentAttention: n.initComponent,
                    record: e.sendMore,
                    viewId: e.viewId,
                    pageViewId: e.viewId
                })
            }.apply(e, [s, r, u, o, l, f, d, p, h])) || (t.exports = m)
        }.call(this)
}, function(t, e, n) {
    var r = n(86),
        o = "Expected a function";

    function i(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
        var n = function() {
            var r = arguments,
                o = e ? e.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return n.cache = i.set(o, a) || i, a
        };
        return n.cache = new(i.Cache || r), n
    }
    i.Cache = r, t.exports = i
}, , , , function(t, e, n) {
    "use strict";
    var r = n(73),
        o = n.n(r),
        i = n(0),
        a = n(7),
        s = i.a.get("page", {}),
        c = s.sentryPublicApiKey,
        u = s.sentryHost,
        l = "https://".concat(c, "@").concat(u),
        f = !1,
        d = {
            whitelistUrls: [/localhost/, /assets\.guim\.co\.uk/, /ophan\.co\.uk/],
            tags: {
                edition: i.a.get("page.edition"),
                contentType: i.a.get("page.contentType"),
                revisionNumber: i.a.get("page.revisionNumber")
            },
            ignoreErrors: ["Can't execute code from a freed script", /There is no space left matching rules from/gi, "Top comments failed to load:", "Comments failed to load:", /InvalidStateError/gi, /Fetch error:/gi, "Network request failed", "This video is no longer available.", "UnknownError", "Fetch error while requesting https://api.nextgen.guardianapps.co.uk/weatherapi/city.json:"],
            dataCallback: function(t) {
                var e = t.culprit,
                    n = void 0 !== e && e,
                    r = t,
                    o = /j.ophan.co.uk/.test(t.culprit);
                return n && (r.culprit = n.replace(/\/[a-z\d]{32}(\/[^\/]+)$/, "$1")), r.tags.origin = o ? "ophan" : "app", r
            },
            shouldSendCallback: function(t) {
                var e = i.a.get("page").isDev,
                    n = void 0 !== t.tags.ignored && t.tags.ignored,
                    r = i.a.get("switches").enableSentryReporting,
                    o = Math.random() < .025;
                return e && !n && window.console && window.console.warn && window.console.warn("Raven captured error.", t), r && o && !n && !f && !e
            }
        };
    a.a.then(function(t) {
        f = t
    }), e.a = o.a.config(l, d).install()
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__, definition;
    /*!
     * Reqwest! A general purpose XHR connection manager
     * license MIT (c) Dustin Diaz 2015
     * https://github.com/ded/reqwest
     */
    definition = function() {
        var context = this,
            XHR2;
        if ("window" in context) var doc = document,
            byTag = "getElementsByTagName",
            head = doc[byTag]("head")[0];
        else try {
            XHR2 = __webpack_require__(180)
        } catch (t) {
            throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
        }
        var httpsRe = /^http/,
            protocolRe = /(^\w+):\/\//,
            twoHundo = /^(20\d|1223)$/,
            readyState = "readyState",
            contentType = "Content-Type",
            requestedWith = "X-Requested-With",
            uniqid = 0,
            callbackPrefix = "reqwest_" + +new Date,
            lastValue, xmlHttpRequest = "XMLHttpRequest",
            xDomainRequest = "XDomainRequest",
            noop = function() {},
            isArray = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                return t instanceof Array
            },
            defaultHeaders = {
                contentType: "application/x-www-form-urlencoded",
                requestedWith: xmlHttpRequest,
                accept: {
                    "*": "text/javascript, text/html, application/xml, text/xml, */*",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    js: "application/javascript, text/javascript"
                }
            },
            xhr = function(t) {
                if (!0 === t.crossOrigin) {
                    var e = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                    if (e && "withCredentials" in e) return e;
                    if (context[xDomainRequest]) return new XDomainRequest;
                    throw new Error("Browser does not support cross-origin requests")
                }
                return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
            },
            globalSetupOptions = {
                dataFilter: function(t) {
                    return t
                }
            };

        function succeed(t) {
            var e = protocolRe.exec(t.url);
            return e = e && e[1] || context.location.protocol, httpsRe.test(e) ? twoHundo.test(t.request.status) : !!t.request.response
        }

        function handleReadyState(t, e, n) {
            return function() {
                return t._aborted ? n(t.request) : t._timedOut ? n(t.request, "Request is aborted: timeout") : void(t.request && 4 == t.request[readyState] && (t.request.onreadystatechange = noop, succeed(t) ? e(t.request) : n(t.request)))
            }
        }

        function setHeaders(t, e) {
            var n, r = e.headers || {};
            r.Accept = r.Accept || defaultHeaders.accept[e.type] || defaultHeaders.accept["*"];
            var o = "undefined" != typeof FormData && e.data instanceof FormData;
            for (n in e.crossOrigin || r[requestedWith] || (r[requestedWith] = defaultHeaders.requestedWith), r[contentType] || o || (r[contentType] = e.contentType || defaultHeaders.contentType), r) r.hasOwnProperty(n) && "setRequestHeader" in t && t.setRequestHeader(n, r[n])
        }

        function setCredentials(t, e) {
            void 0 !== e.withCredentials && void 0 !== t.withCredentials && (t.withCredentials = !!e.withCredentials)
        }

        function generalCallback(t) {
            lastValue = t
        }

        function urlappend(t, e) {
            return t + (/\?/.test(t) ? "&" : "?") + e
        }

        function handleJsonp(t, e, n, r) {
            var o = uniqid++,
                i = t.jsonpCallback || "callback",
                a = t.jsonpCallbackName || reqwest.getcallbackPrefix(o),
                s = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
                c = r.match(s),
                u = doc.createElement("script"),
                l = 0,
                f = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
            return c ? "?" === c[3] ? r = r.replace(s, "$1=" + a) : a = c[3] : r = urlappend(r, i + "=" + a), context[a] = generalCallback, u.type = "text/javascript", u.src = r, u.async = !0, void 0 === u.onreadystatechange || f || (u.htmlFor = u.id = "_reqwest_" + o), u.onload = u.onreadystatechange = function() {
                if (u[readyState] && "complete" !== u[readyState] && "loaded" !== u[readyState] || l) return !1;
                u.onload = u.onreadystatechange = null, u.onclick && u.onclick(), e(lastValue), lastValue = void 0, head.removeChild(u), l = 1
            }, head.appendChild(u), {
                abort: function() {
                    u.onload = u.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(u), l = 1
                }
            }
        }

        function getRequest(t, e) {
            var n, r = this.o,
                o = (r.method || "GET").toUpperCase(),
                i = "string" == typeof r ? r : r.url,
                a = !1 !== r.processData && r.data && "string" != typeof r.data ? reqwest.toQueryString(r.data) : r.data || null,
                s = !1;
            return "jsonp" != r.type && "GET" != o || !a || (i = urlappend(i, a), a = null), "jsonp" == r.type ? handleJsonp(r, t, e, i) : ((n = r.xhr && r.xhr(r) || xhr(r)).open(o, i, !1 !== r.async), setHeaders(n, r), setCredentials(n, r), context[xDomainRequest] && n instanceof context[xDomainRequest] ? (n.onload = t, n.onerror = e, n.onprogress = function() {}, s = !0) : n.onreadystatechange = handleReadyState(this, t, e), r.before && r.before(n), s ? setTimeout(function() {
                n.send(a)
            }, 200) : n.send(a), n)
        }

        function Reqwest(t, e) {
            this.o = t, this.fn = e, init.apply(this, arguments)
        }

        function setType(t) {
            if (null !== t) return t.match("json") ? "json" : t.match("javascript") ? "js" : t.match("text") ? "html" : t.match("xml") ? "xml" : void 0
        }

        function init(o, fn) {
            this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
            var self = this;

            function complete(t) {
                for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(t)
            }

            function success(resp) {
                var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                resp = "jsonp" !== type ? self.request : resp;
                var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                    r = filteredResponse;
                try {
                    resp.responseText = r
                } catch (t) {}
                if (r) switch (type) {
                    case "json":
                        try {
                            resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                        } catch (t) {
                            return error(resp, "Could not parse JSON in response", t)
                        }
                        break;
                    case "js":
                        resp = eval(r);
                        break;
                    case "html":
                        resp = r;
                        break;
                    case "xml":
                        resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                }
                for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                complete(resp)
            }

            function timedOut() {
                self._timedOut = !0, self.request.abort()
            }

            function error(t, e, n) {
                for (t = self.request, self._responseArgs.resp = t, self._responseArgs.msg = e, self._responseArgs.t = n, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(t, e, n);
                complete(t)
            }
            fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
                timedOut()
            }, o.timeout)), o.success && (this._successHandler = function() {
                o.success.apply(o, arguments)
            }), o.error && this._errorHandlers.push(function() {
                o.error.apply(o, arguments)
            }), o.complete && this._completeHandlers.push(function() {
                o.complete.apply(o, arguments)
            }), this.request = getRequest.call(this, success, error)
        }

        function reqwest(t, e) {
            return new Reqwest(t, e)
        }

        function normalize(t) {
            return t ? t.replace(/\r?\n/g, "\r\n") : ""
        }

        function serial(t, e) {
            var n, r, o, i, a = t.name,
                s = t.tagName.toLowerCase(),
                c = function(t) {
                    t && !t.disabled && e(a, normalize(t.attributes.value && t.attributes.value.specified ? t.value : t.text))
                };
            if (!t.disabled && a) switch (s) {
                case "input":
                    /reset|button|image|file/i.test(t.type) || (n = /checkbox/i.test(t.type), r = /radio/i.test(t.type), o = t.value, (!n && !r || t.checked) && e(a, normalize(n && "" === o ? "on" : o)));
                    break;
                case "textarea":
                    e(a, normalize(t.value));
                    break;
                case "select":
                    if ("select-one" === t.type.toLowerCase()) c(t.selectedIndex >= 0 ? t.options[t.selectedIndex] : null);
                    else
                        for (i = 0; t.length && i < t.length; i++) t.options[i].selected && c(t.options[i])
            }
        }

        function eachFormElement() {
            var t, e, n = this,
                r = function(t, e) {
                    var r, o, i;
                    for (r = 0; r < e.length; r++)
                        for (i = t[byTag](e[r]), o = 0; o < i.length; o++) serial(i[o], n)
                };
            for (e = 0; e < arguments.length; e++) t = arguments[e], /input|select|textarea/i.test(t.tagName) && serial(t, n), r(t, ["input", "select", "textarea"])
        }

        function serializeQueryString() {
            return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
        }

        function serializeHash() {
            var t = {};
            return eachFormElement.apply(function(e, n) {
                e in t ? (t[e] && !isArray(t[e]) && (t[e] = [t[e]]), t[e].push(n)) : t[e] = n
            }, arguments), t
        }

        function buildParams(t, e, n, r) {
            var o, i, a, s = /\[\]$/;
            if (isArray(e))
                for (i = 0; e && i < e.length; i++) a = e[i], n || s.test(t) ? r(t, a) : buildParams(t + "[" + ("object" == typeof a ? i : "") + "]", a, n, r);
            else if (e && "[object Object]" === e.toString())
                for (o in e) buildParams(t + "[" + o + "]", e[o], n, r);
            else r(t, e)
        }
        return Reqwest.prototype = {
            abort: function() {
                this._aborted = !0, this.request.abort()
            },
            retry: function() {
                init.call(this, this.o, this.fn)
            },
            then: function(t, e) {
                return t = t || function() {}, e = e || function() {}, this._fulfilled ? this._responseArgs.resp = t(this._responseArgs.resp) : this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(t), this._errorHandlers.push(e)), this
            },
            always: function(t) {
                return this._fulfilled || this._erred ? t(this._responseArgs.resp) : this._completeHandlers.push(t), this
            },
            fail: function(t) {
                return this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(t), this
            },
            catch: function(t) {
                return this.fail(t)
            }
        }, reqwest.serializeArray = function() {
            var t = [];
            return eachFormElement.apply(function(e, n) {
                t.push({
                    name: e,
                    value: n
                })
            }, arguments), t
        }, reqwest.serialize = function() {
            if (0 === arguments.length) return "";
            var t, e = Array.prototype.slice.call(arguments, 0);
            return (t = e.pop()) && t.nodeType && e.push(t) && (t = null), t && (t = t.type), ("map" == t ? serializeHash : "array" == t ? reqwest.serializeArray : serializeQueryString).apply(null, e)
        }, reqwest.toQueryString = function(t, e) {
            var n, r, o = e || !1,
                i = [],
                a = encodeURIComponent,
                s = function(t, e) {
                    e = "function" == typeof e ? e() : null == e ? "" : e, i[i.length] = a(t) + "=" + a(e)
                };
            if (isArray(t))
                for (r = 0; t && r < t.length; r++) s(t[r].name, t[r].value);
            else
                for (n in t) t.hasOwnProperty(n) && buildParams(n, t[n], o, s);
            return i.join("&").replace(/%20/g, "+")
        }, reqwest.getcallbackPrefix = function() {
            return callbackPrefix
        }, reqwest.compat = function(t, e) {
            return t && (t.type && (t.method = t.type) && delete t.type, t.dataType && (t.type = t.dataType), t.jsonpCallback && (t.jsonpCallbackName = t.jsonpCallback) && delete t.jsonpCallback, t.jsonp && (t.jsonpCallback = t.jsonp)), new Reqwest(t, e)
        }, reqwest.ajaxSetup = function(t) {
            for (var e in t = t || {}) globalSetupOptions[e] = t[e]
        }, reqwest
    }, module.exports ? module.exports = definition() : void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = definition) ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
}, function(t, e, n) {
    "use strict";
    var r = window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance;
    e.a = r
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    var r = n(53),
        o = n(136),
        i = n(137),
        a = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t)
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return c
    });
    var r = n(36),
        o = n.n(r),
        i = n(0),
        a = n(35),
        s = i.a.get("page.ajaxUrl", ""),
        c = function(t) {
            var e = t;
            e.url.match("^(https?:)?//") || (e.url = s + e.url, e.crossOrigin = !0);
            var n = o()(e);
            return a.a.wrap({
                deep: !0
            }, n.then), n
        };
    c.setHost = function(t) {
        s = t
    }
}, , , , , function(t, e, n) {
    var r = n(135),
        o = n(140);
    t.exports = function(t, e) {
        var n = o(t, e);
        return r(n) ? n : void 0
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return s
    }), n.d(e, "b", function() {
        return c
    }), n.d(e, "a", function() {
        return a
    });
    var r = n(37),
        o = {},
        i = (new Date).getTime(),
        a = function() {
            return r.a && "now" in r.a ? r.a.now() : (new Date).getTime() - i
        },
        s = function(t) {
            r.a && "mark" in r.a ? r.a.mark(t) : o[t] = a()
        },
        c = function(t) {
            if (r.a && "getEntriesByName" in r.a) {
                var e = r.a.getEntriesByName(t, "mark");
                if (e && e[0] && "startTime" in e[0]) return e[0].startTime
            } else if (t in o) return o[t]
        }
}, function(t, e, n) {
    var r = n(46)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(65);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(151);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, , , function(t, e, n) {
    var r = n(27).Symbol;
    t.exports = r
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return d
    }), n.d(e, "b", function() {
        return l
    }), n.d(e, "c", function() {
        return f
    });
    var r = n(16),
        o = n.n(r),
        i = n(1),
        a = n.n(i),
        s = n(186),
        c = {},
        u = function(t) {
            return c[t] || (c[t] = new function t() {
                var e = this;
                o()(this, t), a()(this, "complete", void 0), a()(this, "resolve", void 0), a()(this, "reject", void 0), this.complete = new Promise(function(t, n) {
                    e.resolve = t, e.reject = n
                })
            }), c[t]
        },
        l = function(t, e) {
            var n = c[t];
            n && n.resolve(e)
        },
        f = function(t) {
            var e = c[t];
            return e ? e.complete : Promise.reject(new Error("No deferred check with id ".concat(t)))
        },
        d = function() {
            c = {}, s.a.forEach(u)
        }
}, function(t, e, n) {
    var r = n(25),
        o = n(155),
        i = n(94),
        a = Math.max,
        s = Math.min;
    t.exports = function(t, e, n) {
        var c, u, l, f, d, p, h = 0,
            m = !1,
            v = !1,
            g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
            var n = c,
                r = u;
            return c = u = void 0, h = e, f = t.apply(r, n)
        }

        function b(t) {
            var n = t - p;
            return void 0 === p || n >= e || n < 0 || v && t - h >= l
        }

        function w() {
            var t = o();
            if (b(t)) return _(t);
            d = setTimeout(w, function(t) {
                var n = e - (t - p);
                return v ? s(n, l - (t - h)) : n
            }(t))
        }

        function _(t) {
            return d = void 0, g && c ? y(t) : (c = u = void 0, f)
        }

        function x() {
            var t = o(),
                n = b(t);
            if (c = arguments, u = this, p = t, n) {
                if (void 0 === d) return function(t) {
                    return h = t, d = setTimeout(w, e), m ? y(t) : f
                }(p);
                if (v) return d = setTimeout(w, e), y(p)
            }
            return void 0 === d && (d = setTimeout(w, e)), f
        }
        return e = i(e) || 0, r(n) && (m = !!n.leading, l = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : l, g = "trailing" in n ? !!n.trailing : g), x.cancel = function() {
            void 0 !== d && clearTimeout(d), h = 0, c = p = u = d = void 0
        }, x.flush = function() {
            return void 0 === d ? f : _(o())
        }, x
    }
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
            return n(t)
        } : t.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }
    t.exports = r
}, , , , , , , , , function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, , , , function(t, e, n) {
    (function(e) {
        var n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

        function r(t) {
            return void 0 === t
        }

        function o(t) {
            return "[object String]" === Object.prototype.toString.call(t)
        }

        function i() {
            try {
                return new ErrorEvent(""), !0
            } catch (t) {
                return !1
            }
        }

        function a(t, e) {
            var n, o;
            if (r(t.length))
                for (n in t) s(t, n) && e.call(null, n, t[n]);
            else if (o = t.length)
                for (n = 0; n < o; n++) e.call(null, n, t[n])
        }

        function s(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function c(t) {
            var e, n, r, i, a, s = [];
            if (!t || !t.tagName) return "";
            if (s.push(t.tagName.toLowerCase()), t.id && s.push("#" + t.id), (e = t.className) && o(e))
                for (n = e.split(/\s+/), a = 0; a < n.length; a++) s.push("." + n[a]);
            var c = ["type", "name", "title", "alt"];
            for (a = 0; a < c.length; a++) r = c[a], (i = t.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
            return s.join("")
        }

        function u(t, e) {
            return !!(!!t ^ !!e)
        }

        function l(t, e) {
            if (u(t, e)) return !1;
            var n, r, o = t.frames,
                i = e.frames;
            if (o.length !== i.length) return !1;
            for (var a = 0; a < o.length; a++)
                if (n = o[a], r = i[a], n.filename !== r.filename || n.lineno !== r.lineno || n.colno !== r.colno || n.function !== r.function) return !1;
            return !0
        }
        t.exports = {
            isObject: function(t) {
                return "object" == typeof t && null !== t
            },
            isError: function(t) {
                switch ({}.toString.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return t instanceof Error
                }
            },
            isErrorEvent: function(t) {
                return i() && "[object ErrorEvent]" === {}.toString.call(t)
            },
            isUndefined: r,
            isFunction: function(t) {
                return "function" == typeof t
            },
            isString: o,
            isEmptyObject: function(t) {
                for (var e in t) return !1;
                return !0
            },
            supportsErrorEvent: i,
            wrappedCallback: function(t) {
                return function(e, n) {
                    var r = t(e) || e;
                    return n && n(r) || r
                }
            },
            each: a,
            objectMerge: function(t, e) {
                return e ? (a(e, function(e, n) {
                    t[e] = n
                }), t) : t
            },
            truncate: function(t, e) {
                return !e || t.length <= e ? t : t.substr(0, e) + "…"
            },
            objectFrozen: function(t) {
                return !!Object.isFrozen && Object.isFrozen(t)
            },
            hasKey: s,
            joinRegExp: function(t) {
                for (var e, n = [], r = 0, i = t.length; r < i; r++) o(e = t[r]) ? n.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && n.push(e.source);
                return new RegExp(n.join("|"), "i")
            },
            urlencode: function(t) {
                var e = [];
                return a(t, function(t, n) {
                    e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
                }), e.join("&")
            },
            uuid4: function() {
                var t = n.crypto || n.msCrypto;
                if (!r(t) && t.getRandomValues) {
                    var e = new Uint16Array(8);
                    t.getRandomValues(e), e[3] = 4095 & e[3] | 16384, e[4] = 16383 & e[4] | 32768;
                    var o = function(t) {
                        for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                        return e
                    };
                    return o(e[0]) + o(e[1]) + o(e[2]) + o(e[3]) + o(e[4]) + o(e[5]) + o(e[6]) + o(e[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                })
            },
            htmlTreeAsString: function(t) {
                for (var e, n = [], r = 0, o = 0, i = " > ".length; t && r++ < 5 && !("html" === (e = c(t)) || r > 1 && o + n.length * i + e.length >= 80);) n.push(e), o += e.length, t = t.parentNode;
                return n.reverse().join(" > ")
            },
            htmlElementAsString: c,
            isSameException: function(t, e) {
                return !u(t, e) && (t = t.values[0], e = e.values[0], t.type === e.type && t.value === e.value && l(t.stacktrace, e.stacktrace))
            },
            isSameStacktrace: l,
            parseUrl: function(t) {
                var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                var n = e[6] || "",
                    r = e[8] || "";
                return {
                    protocol: e[2],
                    host: e[4],
                    path: e[5],
                    relative: e[5] + n + r
                }
            },
            fill: function(t, e, n, r) {
                var o = t[e];
                t[e] = n(o), r && r.push([t, e, o])
            }
        }
    }).call(this, n(29))
}, , , , function(t, e, n) {
    (function(e) {
        var r = n(107),
            o = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
            i = o.Raven,
            a = new r;
        a.noConflict = function() {
            return o.Raven = i, a
        }, a.afterLoad(), t.exports = a
    }).call(this, n(29))
}, function(t, e, n) {
    var r;
    /*!
     * EventEmitter v5.2.4 - git.io/ee
     * Unlicense - http://unlicense.org/
     * Oliver Caldwell - http://oli.me.uk/
     * @preserve
     */
    ! function(e) {
        "use strict";

        function o() {}
        var i = o.prototype,
            a = e.EventEmitter;

        function s(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }

        function c(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        i.getListeners = function(t) {
            var e, n, r = this._getEvents();
            if (t instanceof RegExp)
                for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
            else e = r[t] || (r[t] = []);
            return e
        }, i.flattenListeners = function(t) {
            var e, n = [];
            for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
            return n
        }, i.getListenersAsObject = function(t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && ((e = {})[t] = n), e || n
        }, i.addListener = function(t, e) {
            if (! function t(e) {
                    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
                }(e)) throw new TypeError("listener must be a function");
            var n, r = this.getListenersAsObject(t),
                o = "object" == typeof e;
            for (n in r) r.hasOwnProperty(n) && -1 === s(r[n], e) && r[n].push(o ? e : {
                listener: e,
                once: !1
            });
            return this
        }, i.on = c("addListener"), i.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, i.once = c("addOnceListener"), i.defineEvent = function(t) {
            return this.getListeners(t), this
        }, i.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, i.removeListener = function(t, e) {
            var n, r, o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && -1 !== (n = s(o[r], e)) && o[r].splice(n, 1);
            return this
        }, i.off = c("removeListener"), i.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, i.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, i.manipulateListeners = function(t, e, n) {
            var r, o, i = t ? this.removeListener : this.addListener,
                a = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (r = n.length; r--;) i.call(this, e, n[r]);
            else
                for (r in e) e.hasOwnProperty(r) && (o = e[r]) && ("function" == typeof o ? i.call(this, r, o) : a.call(this, r, o));
            return this
        }, i.removeEvent = function(t) {
            var e, n = typeof t,
                r = this._getEvents();
            if ("string" === n) delete r[t];
            else if (t instanceof RegExp)
                for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
            else delete this._events;
            return this
        }, i.removeAllListeners = c("removeEvent"), i.emitEvent = function(t, e) {
            var n, r, o, i, a = this.getListenersAsObject(t);
            for (i in a)
                if (a.hasOwnProperty(i))
                    for (n = a[i].slice(0), o = 0; o < n.length; o++) !0 === (r = n[o]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
            return this
        }, i.trigger = c("emitEvent"), i.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, i.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, i._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, o.noConflict = function() {
            return e.EventEmitter = a, o
        }, void 0 === (r = function() {
            return o
        }.call(e, n, e, t)) || (t.exports = r)
    }(this || {})
}, , , function(t, e, n) {
    var r = n(39),
        o = n(38);
    t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == r(t)
    }
}, , , function(t, e, n) {
    "use strict";
    var r = n(4),
        o = {
            local: r.a,
            session: r.b
        },
        i = {
            type: "local"
        },
        a = function(t, e) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i).type;
            o[n].set("gu.prefs." + t, e)
        },
        s = function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i).type;
            o[e].set("".concat("gu.prefs.", "switch.").concat(t), !0)
        },
        c = function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i).type;
            o[e].set("".concat("gu.prefs.", "switch.").concat(t), !1)
        },
        u = function(t) {
            return "true" === t || "false" === t
        },
        l = function(t) {
            var e, n, r, o = t.hash.substr(1).split("&");
            for (e = 0, n = o.length; e < n; e += 1) {
                var i = o[e].match(/^gu\.prefs\.(.*)=(.*)$/);
                if (i) {
                    var l = i[1],
                        f = i[2],
                        d = void 0;
                    switch (l) {
                        case "switchOn":
                            s(f);
                            break;
                        case "switchOff":
                            c(f);
                            break;
                        default:
                            r = f, d = Number.isNaN(Number(r)) ? u(f) ? "true" === String(f).toLowerCase() : f : +f, a(l, d)
                    }
                }
            }
        };
    l(window.location), e.a = {
        set: a,
        get: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i).type;
            return o[e].get("gu.prefs." + t)
        },
        remove: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i).type;
            o[e].remove("gu.prefs." + t)
        },
        switchOn: s,
        switchOff: c,
        removeSwitch: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i).type;
            o[e].remove("".concat("gu.prefs.", "switch.").concat(t))
        },
        isOn: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i).type;
            return !0 === o[e].get("".concat("gu.prefs.", "switch.").concat(t))
        },
        isOff: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i).type;
            return !1 === o[e].get("".concat("gu.prefs.", "switch.").concat(t))
        },
        setPrefs: l
    }
}, function(t, e, n) {
    var r = n(145),
        o = n(146),
        i = n(147),
        a = n(148),
        s = n(149);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, t.exports = c
}, function(t, e, n) {
    "use strict";
    var r = n(36),
        o = n.n(r),
        i = function(t) {
            var e = !1,
                n = t.responseText,
                r = function() {
                    var t = e ? Promise.reject(new TypeError("Already read")) : Promise.resolve(n);
                    return e = !0, t
                };
            return {
                status: t.status,
                ok: t.status >= 200 && t.status < 300,
                statusText: t.statusText,
                url: t.responseURL || "",
                text: r,
                json: function() {
                    return r().then(JSON.parse)
                }
            }
        };
    e.a = function(t, e) {
        return new Promise(function(n, r) {
            var a, s, c, u, l = (a = t, u = (c = "cors" === (s = e || {}).mode) && "include" === s.credentials || !c && "same-origin" === s.credentials, {
                url: a,
                type: "text",
                method: s.method || "GET",
                crossOrigin: c,
                headers: s.headers,
                data: s.body,
                withCredentials: u
            });
            o()(l).then(function(t) {
                n(i(t))
            }).catch(function(t) {
                0 === t.status ? r(new Error("Fetch error: ".concat(t.statusText))) : n(i(t))
            })
        })
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = !1;
    try {
        var o = Object.defineProperty({}, "passive", {
            get: function() {
                r = !0
            }
        });
        window.addEventListener("test", null, o)
    } catch (t) {}
    var i = function(t, e, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = o.passive,
            a = void 0 !== i && i,
            s = o.capture,
            c = void 0 !== s && s,
            u = o.once,
            l = void 0 !== u && u;
        r ? t.addEventListener(e, n, {
            passive: a,
            capture: c,
            once: l
        }) : l ? t.addEventListener(e, function r(o) {
            n.call(this, o), t.removeEventListener(e, r)
        }, c) : t.addEventListener(e, n, c)
    }
}, , , function(t, e, n) {
    var r = n(132),
        o = n(150),
        i = n(152),
        a = n(153),
        s = n(154);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, t.exports = c
}, function(t, e, n) {
    var r = n(46)(n(27), "Map");
    t.exports = r
}, , , , , function(t, e, n) {
    var r = n(39),
        o = n(25);
    t.exports = function(t) {
        if (!o(t)) return !1;
        var e = r(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
    }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(29))
}, function(t, e, n) {
    var r = n(25),
        o = n(77),
        i = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (o(t)) return NaN;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(i, "");
        var n = s.test(t);
        return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
    }
}, , , , , , , , , , function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return c
    }), n.d(e, "e", function() {
        return u
    }), n.d(e, "a", function() {
        return l
    }), n.d(e, "f", function() {
        return f
    }), n.d(e, "b", function() {
        return d
    }), n.d(e, "d", function() {
        return h
    });
    var r = n(0),
        o = n(6),
        i = r.a.get("googleAnalytics.trackers.editorial"),
        a = "".concat(i, ".send"),
        s = function(t) {
            return (t.textContent || "").trim()
        },
        c = function(t) {
            window.ga(a, "event", "Interaction", t, {
                nonInteraction: !0
            })
        },
        u = function(t, e) {
            window.ga(a, "event", "click", "in page", e, {
                nonInteraction: !0,
                dimension13: s(t)
            })
        },
        l = function(t, e) {
            var n = {
                    dimension13: s(t)
                },
                r = t.getAttribute("href");
            r && (n.dimension48 = r), window.ga(a, "event", "click", "external", e, n)
        },
        f = function(t) {
            var e = t.dataset.sponsor;
            window.ga(a, "event", "click", "sponsor logo", e, {
                nonInteraction: !0
            })
        },
        d = function(t, e) {
            window.ga(a, "event", "click", "native ad", e, {
                nonInteraction: !0,
                dimension25: t
            })
        },
        p = function(t) {
            if (window.ga(a, "timing", t.timingCategory, t.timingVar, t.timeSincePageLoad, t.timingLabel), r.a.get("switches.boostGaUserTimingFidelity")) {
                var e = {
                        standardStart: "metric18",
                        standardEnd: "metric19",
                        commercialStart: "metric20",
                        commercialEnd: "metric21",
                        enhancedStart: "metric22",
                        enhancedEnd: "metric23"
                    }[t.timingVar],
                    n = {
                        nonInteraction: !0,
                        dimension44: e
                    };
                n[e] = t.timeSincePageLoad, window.ga(a, "event", t.timingCategory, t.timingVar, t.timingLabel, t.timeSincePageLoad, n)
            }
        },
        h = function(t, e, n) {
            if (window.performance && window.performance.now && window.ga) {
                var i = r.a.get("googleAnalytics.timingEvents", []),
                    a = {
                        timingCategory: t,
                        timingVar: e,
                        timeSincePageLoad: Math.round(window.performance.now()),
                        timingLabel: n
                    };
                window.ga ? p(a) : (o.a.on("modules:ga:ready", function t() {
                    i.map(p), o.a.off("modules:ga:ready", t)
                }), i.push(a))
            }
        }
}, , function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, n) {
    (function(e) {
        var r = n(108),
            o = n(109),
            i = n(110),
            a = n(69),
            s = a.isError,
            c = a.isObject,
            u = (c = a.isObject, a.isErrorEvent),
            l = a.isUndefined,
            f = a.isFunction,
            d = a.isString,
            p = a.isEmptyObject,
            h = a.each,
            m = a.objectMerge,
            v = a.truncate,
            g = a.objectFrozen,
            y = a.hasKey,
            b = a.joinRegExp,
            w = a.urlencode,
            _ = a.uuid4,
            x = a.htmlTreeAsString,
            E = a.isSameException,
            O = a.isSameStacktrace,
            S = a.parseUrl,
            k = a.fill,
            j = n(111).wrapMethod,
            C = "source protocol user pass host port path".split(" "),
            A = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

        function T() {
            return +new Date
        }
        var L = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
            P = L.document,
            R = L.navigator;

        function I(t, e) {
            return f(e) ? function(n) {
                return e(n, t)
            } : e
        }

        function q() {
            for (var t in this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = !l(P), this._hasNavigator = !l(R), this._lastCapturedException = null, this._lastData = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {}, this._globalOptions = {
                    logger: "javascript",
                    ignoreErrors: [],
                    ignoreUrls: [],
                    whitelistUrls: [],
                    includePaths: [],
                    collectWindowErrors: !0,
                    maxMessageLength: 0,
                    maxUrlLength: 250,
                    stackTraceLimit: 50,
                    autoBreadcrumbs: !0,
                    instrument: !0,
                    sampleRate: 1
                }, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = L.console || {}, this._originalConsoleMethods = {}, this._plugins = [], this._startTime = T(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, this._keypressTimeout, this._location = L.location, this._lastHref = this._location && this._location.href, this._resetBackoff(), this._originalConsole) this._originalConsoleMethods[t] = this._originalConsole[t]
        }
        q.prototype = {
            VERSION: "3.19.1",
            debug: !1,
            TraceKit: r,
            config: function(t, e) {
                var n = this;
                if (n._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), n;
                if (!t) return n;
                var o = n._globalOptions;
                e && h(e, function(t, e) {
                    "tags" === t || "extra" === t || "user" === t ? n._globalContext[t] = e : o[t] = e
                }), n.setDSN(t), o.ignoreErrors.push(/^Script error\.?$/), o.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), o.ignoreErrors = b(o.ignoreErrors), o.ignoreUrls = !!o.ignoreUrls.length && b(o.ignoreUrls), o.whitelistUrls = !!o.whitelistUrls.length && b(o.whitelistUrls), o.includePaths = b(o.includePaths), o.maxBreadcrumbs = Math.max(0, Math.min(o.maxBreadcrumbs || 100, 100));
                var i = {
                        xhr: !0,
                        console: !0,
                        dom: !0,
                        location: !0
                    },
                    a = o.autoBreadcrumbs;
                "[object Object]" === {}.toString.call(a) ? a = m(i, a) : !1 !== a && (a = i), o.autoBreadcrumbs = a;
                var s = {
                        tryCatch: !0
                    },
                    c = o.instrument;
                return "[object Object]" === {}.toString.call(c) ? c = m(s, c) : !1 !== c && (c = s), o.instrument = c, r.collectWindowErrors = !!o.collectWindowErrors, n
            },
            install: function() {
                var t = this;
                return t.isSetup() && !t._isRavenInstalled && (r.report.subscribe(function() {
                    t._handleOnErrorStackInfo.apply(t, arguments)
                }), t._globalOptions.instrument && t._globalOptions.instrument.tryCatch && t._instrumentTryCatch(), t._globalOptions.autoBreadcrumbs && t._instrumentBreadcrumbs(), t._drainPlugins(), t._isRavenInstalled = !0), Error.stackTraceLimit = t._globalOptions.stackTraceLimit, this
            },
            setDSN: function(t) {
                var e = this._parseDSN(t),
                    n = e.path.lastIndexOf("/"),
                    r = e.path.substr(1, n);
                this._dsn = t, this._globalKey = e.user, this._globalSecret = e.pass && e.pass.substr(1), this._globalProject = e.path.substr(n + 1), this._globalServer = this._getGlobalServer(e), this._globalEndpoint = this._globalServer + "/" + r + "api/" + this._globalProject + "/store/", this._resetBackoff()
            },
            context: function(t, e, n) {
                return f(t) && (n = e || [], e = t, t = void 0), this.wrap(t, e).apply(this, n)
            },
            wrap: function(t, e, n) {
                var r = this;
                if (l(e) && !f(t)) return t;
                if (f(t) && (e = t, t = void 0), !f(e)) return e;
                try {
                    if (e.__raven__) return e;
                    if (e.__raven_wrapper__) return e.__raven_wrapper__
                } catch (t) {
                    return e
                }

                function o() {
                    var o = [],
                        i = arguments.length,
                        a = !t || t && !1 !== t.deep;
                    for (n && f(n) && n.apply(this, arguments); i--;) o[i] = a ? r.wrap(t, arguments[i]) : arguments[i];
                    try {
                        return e.apply(this, o)
                    } catch (e) {
                        throw r._ignoreNextOnError(), r.captureException(e, t), e
                    }
                }
                for (var i in e) y(e, i) && (o[i] = e[i]);
                return o.prototype = e.prototype, e.__raven_wrapper__ = o, o.__raven__ = !0, o.__inner__ = e, o
            },
            uninstall: function() {
                return r.report.uninstall(), this._restoreBuiltIns(), Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, this
            },
            captureException: function(t, e) {
                var n = !s(t),
                    o = !u(t),
                    i = u(t) && !t.error;
                if (n && o || i) return this.captureMessage(t, m({
                    trimHeadFrames: 1,
                    stacktrace: !0
                }, e));
                u(t) && (t = t.error), this._lastCapturedException = t;
                try {
                    var a = r.computeStackTrace(t);
                    this._handleStackInfo(a, e)
                } catch (e) {
                    if (t !== e) throw e
                }
                return this
            },
            captureMessage: function(t, e) {
                if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) {
                    var n, o = m({
                        message: t + ""
                    }, e = e || {});
                    try {
                        throw new Error(t)
                    } catch (t) {
                        n = t
                    }
                    n.name = null;
                    var i = r.computeStackTrace(n),
                        a = i.stack[1],
                        s = a && a.url || "";
                    if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(s)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(s))) {
                        if (this._globalOptions.stacktrace || e && e.stacktrace) {
                            e = m({
                                fingerprint: t,
                                trimHeadFrames: (e.trimHeadFrames || 0) + 1
                            }, e);
                            var c = this._prepareFrames(i, e);
                            o.stacktrace = {
                                frames: c.reverse()
                            }
                        }
                        return this._send(o), this
                    }
                }
            },
            captureBreadcrumb: function(t) {
                var e = m({
                    timestamp: T() / 1e3
                }, t);
                if (f(this._globalOptions.breadcrumbCallback)) {
                    var n = this._globalOptions.breadcrumbCallback(e);
                    if (c(n) && !p(n)) e = n;
                    else if (!1 === n) return this
                }
                return this._breadcrumbs.push(e), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), this
            },
            addPlugin: function(t) {
                var e = [].slice.call(arguments, 1);
                return this._plugins.push([t, e]), this._isRavenInstalled && this._drainPlugins(), this
            },
            setUserContext: function(t) {
                return this._globalContext.user = t, this
            },
            setExtraContext: function(t) {
                return this._mergeContext("extra", t), this
            },
            setTagsContext: function(t) {
                return this._mergeContext("tags", t), this
            },
            clearContext: function() {
                return this._globalContext = {}, this
            },
            getContext: function() {
                return JSON.parse(o(this._globalContext))
            },
            setEnvironment: function(t) {
                return this._globalOptions.environment = t, this
            },
            setRelease: function(t) {
                return this._globalOptions.release = t, this
            },
            setDataCallback: function(t) {
                var e = this._globalOptions.dataCallback;
                return this._globalOptions.dataCallback = I(e, t), this
            },
            setBreadcrumbCallback: function(t) {
                var e = this._globalOptions.breadcrumbCallback;
                return this._globalOptions.breadcrumbCallback = I(e, t), this
            },
            setShouldSendCallback: function(t) {
                var e = this._globalOptions.shouldSendCallback;
                return this._globalOptions.shouldSendCallback = I(e, t), this
            },
            setTransport: function(t) {
                return this._globalOptions.transport = t, this
            },
            lastException: function() {
                return this._lastCapturedException
            },
            lastEventId: function() {
                return this._lastEventId
            },
            isSetup: function() {
                return !(!this._hasJSON || !this._globalServer && (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), 1))
            },
            afterLoad: function() {
                var t = L.RavenConfig;
                t && this.config(t.dsn, t.config).install()
            },
            showReportDialog: function(t) {
                if (P) {
                    var e = (t = t || {}).eventId || this.lastEventId();
                    if (!e) throw new i("Missing eventId");
                    var n = t.dsn || this._dsn;
                    if (!n) throw new i("Missing DSN");
                    var r = encodeURIComponent,
                        o = "";
                    o += "?eventId=" + r(e), o += "&dsn=" + r(n);
                    var a = t.user || this._globalContext.user;
                    a && (a.name && (o += "&name=" + r(a.name)), a.email && (o += "&email=" + r(a.email)));
                    var s = this._getGlobalServer(this._parseDSN(n)),
                        c = P.createElement("script");
                    c.async = !0, c.src = s + "/api/embed/error-page/" + o, (P.head || P.body).appendChild(c)
                }
            },
            _ignoreNextOnError: function() {
                var t = this;
                this._ignoreOnError += 1, setTimeout(function() {
                    t._ignoreOnError -= 1
                })
            },
            _triggerEvent: function(t, e) {
                var n, r;
                if (this._hasDocument) {
                    for (r in e = e || {}, t = "raven" + t.substr(0, 1).toUpperCase() + t.substr(1), P.createEvent ? (n = P.createEvent("HTMLEvents")).initEvent(t, !0, !0) : (n = P.createEventObject()).eventType = t, e) y(e, r) && (n[r] = e[r]);
                    if (P.createEvent) P.dispatchEvent(n);
                    else try {
                        P.fireEvent("on" + n.eventType.toLowerCase(), n)
                    } catch (t) {}
                }
            },
            _breadcrumbEventHandler: function(t) {
                var e = this;
                return function(n) {
                    if (e._keypressTimeout = null, e._lastCapturedEvent !== n) {
                        var r;
                        e._lastCapturedEvent = n;
                        try {
                            r = x(n.target)
                        } catch (t) {
                            r = "<unknown>"
                        }
                        e.captureBreadcrumb({
                            category: "ui." + t,
                            message: r
                        })
                    }
                }
            },
            _keypressEventHandler: function() {
                var t = this;
                return function(e) {
                    var n;
                    try {
                        n = e.target
                    } catch (t) {
                        return
                    }
                    var r = n && n.tagName;
                    if (r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable)) {
                        var o = t._keypressTimeout;
                        o || t._breadcrumbEventHandler("input")(e), clearTimeout(o), t._keypressTimeout = setTimeout(function() {
                            t._keypressTimeout = null
                        }, 1e3)
                    }
                }
            },
            _captureUrlChange: function(t, e) {
                var n = S(this._location.href),
                    r = S(e),
                    o = S(t);
                this._lastHref = e, n.protocol === r.protocol && n.host === r.host && (e = r.relative), n.protocol === o.protocol && n.host === o.host && (t = o.relative), this.captureBreadcrumb({
                    category: "navigation",
                    data: {
                        to: e,
                        from: t
                    }
                })
            },
            _instrumentTryCatch: function() {
                var t = this,
                    e = t._wrappedBuiltIns;

                function n(e) {
                    return function(n, r) {
                        for (var o = new Array(arguments.length), i = 0; i < o.length; ++i) o[i] = arguments[i];
                        var a = o[0];
                        return f(a) && (o[0] = t.wrap(a)), e.apply ? e.apply(this, o) : e(o[0], o[1])
                    }
                }
                var r = this._globalOptions.autoBreadcrumbs;

                function o(n) {
                    var o = L[n] && L[n].prototype;
                    o && o.hasOwnProperty && o.hasOwnProperty("addEventListener") && (k(o, "addEventListener", function(e) {
                        return function(o, i, a, s) {
                            try {
                                i && i.handleEvent && (i.handleEvent = t.wrap(i.handleEvent))
                            } catch (t) {}
                            var c, u, l;
                            return r && r.dom && ("EventTarget" === n || "Node" === n) && (u = t._breadcrumbEventHandler("click"), l = t._keypressEventHandler(), c = function(t) {
                                if (t) {
                                    var e;
                                    try {
                                        e = t.type
                                    } catch (t) {
                                        return
                                    }
                                    return "click" === e ? u(t) : "keypress" === e ? l(t) : void 0
                                }
                            }), e.call(this, o, t.wrap(i, void 0, c), a, s)
                        }
                    }, e), k(o, "removeEventListener", function(t) {
                        return function(e, n, r, o) {
                            try {
                                n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n)
                            } catch (t) {}
                            return t.call(this, e, n, r, o)
                        }
                    }, e))
                }
                k(L, "setTimeout", n, e), k(L, "setInterval", n, e), L.requestAnimationFrame && k(L, "requestAnimationFrame", function(e) {
                    return function(n) {
                        return e(t.wrap(n))
                    }
                }, e);
                for (var i = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < i.length; a++) o(i[a])
            },
            _instrumentBreadcrumbs: function() {
                var t = this,
                    e = this._globalOptions.autoBreadcrumbs,
                    n = t._wrappedBuiltIns;

                function r(e, n) {
                    e in n && f(n[e]) && k(n, e, function(e) {
                        return t.wrap(e)
                    })
                }
                if (e.xhr && "XMLHttpRequest" in L) {
                    var o = XMLHttpRequest.prototype;
                    k(o, "open", function(e) {
                        return function(n, r) {
                            return d(r) && -1 === r.indexOf(t._globalKey) && (this.__raven_xhr = {
                                method: n,
                                url: r,
                                status_code: null
                            }), e.apply(this, arguments)
                        }
                    }, n), k(o, "send", function(e) {
                        return function(n) {
                            var o = this;

                            function i() {
                                if (o.__raven_xhr && 4 === o.readyState) {
                                    try {
                                        o.__raven_xhr.status_code = o.status
                                    } catch (t) {}
                                    t.captureBreadcrumb({
                                        type: "http",
                                        category: "xhr",
                                        data: o.__raven_xhr
                                    })
                                }
                            }
                            for (var a = ["onload", "onerror", "onprogress"], s = 0; s < a.length; s++) r(a[s], o);
                            return "onreadystatechange" in o && f(o.onreadystatechange) ? k(o, "onreadystatechange", function(e) {
                                return t.wrap(e, void 0, i)
                            }) : o.onreadystatechange = i, e.apply(this, arguments)
                        }
                    }, n)
                }
                e.xhr && "fetch" in L && k(L, "fetch", function(e) {
                    return function(n, r) {
                        for (var o = new Array(arguments.length), i = 0; i < o.length; ++i) o[i] = arguments[i];
                        var a, s = o[0],
                            c = "GET";
                        "string" == typeof s ? a = s : "Request" in L && s instanceof L.Request ? (a = s.url, s.method && (c = s.method)) : a = "" + s, o[1] && o[1].method && (c = o[1].method);
                        var u = {
                            method: c,
                            url: a,
                            status_code: null
                        };
                        return t.captureBreadcrumb({
                            type: "http",
                            category: "fetch",
                            data: u
                        }), e.apply(this, o).then(function(t) {
                            return u.status_code = t.status, t
                        })
                    }
                }, n), e.dom && this._hasDocument && (P.addEventListener ? (P.addEventListener("click", t._breadcrumbEventHandler("click"), !1), P.addEventListener("keypress", t._keypressEventHandler(), !1)) : (P.attachEvent("onclick", t._breadcrumbEventHandler("click")), P.attachEvent("onkeypress", t._keypressEventHandler())));
                var i = L.chrome,
                    a = !(i && i.app && i.app.runtime) && L.history && history.pushState && history.replaceState;
                if (e.location && a) {
                    var s = L.onpopstate;
                    L.onpopstate = function() {
                        var e = t._location.href;
                        if (t._captureUrlChange(t._lastHref, e), s) return s.apply(this, arguments)
                    };
                    var c = function(e) {
                        return function() {
                            var n = arguments.length > 2 ? arguments[2] : void 0;
                            return n && t._captureUrlChange(t._lastHref, n + ""), e.apply(this, arguments)
                        }
                    };
                    k(history, "pushState", c, n), k(history, "replaceState", c, n)
                }
                if (e.console && "console" in L && console.log) {
                    var u = function(e, n) {
                        t.captureBreadcrumb({
                            message: e,
                            level: n.level,
                            category: "console"
                        })
                    };
                    h(["debug", "info", "warn", "error", "log"], function(t, e) {
                        j(console, e, u)
                    })
                }
            },
            _restoreBuiltIns: function() {
                for (var t; this._wrappedBuiltIns.length;) {
                    var e = (t = this._wrappedBuiltIns.shift())[0],
                        n = t[1],
                        r = t[2];
                    e[n] = r
                }
            },
            _drainPlugins: function() {
                var t = this;
                h(this._plugins, function(e, n) {
                    var r = n[0],
                        o = n[1];
                    r.apply(t, [t].concat(o))
                })
            },
            _parseDSN: function(t) {
                var e = A.exec(t),
                    n = {},
                    r = 7;
                try {
                    for (; r--;) n[C[r]] = e[r] || ""
                } catch (e) {
                    throw new i("Invalid DSN: " + t)
                }
                if (n.pass && !this._globalOptions.allowSecretKey) throw new i("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                return n
            },
            _getGlobalServer: function(t) {
                var e = "//" + t.host + (t.port ? ":" + t.port : "");
                return t.protocol && (e = t.protocol + ":" + e), e
            },
            _handleOnErrorStackInfo: function() {
                this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
            },
            _handleStackInfo: function(t, e) {
                var n = this._prepareFrames(t, e);
                this._triggerEvent("handle", {
                    stackInfo: t,
                    options: e
                }), this._processException(t.name, t.message, t.url, t.lineno, n, e)
            },
            _prepareFrames: function(t, e) {
                var n = this,
                    r = [];
                if (t.stack && t.stack.length && (h(t.stack, function(e, o) {
                        var i = n._normalizeFrame(o, t.url);
                        i && r.push(i)
                    }), e && e.trimHeadFrames))
                    for (var o = 0; o < e.trimHeadFrames && o < r.length; o++) r[o].in_app = !1;
                return r = r.slice(0, this._globalOptions.stackTraceLimit)
            },
            _normalizeFrame: function(t, e) {
                var n = {
                    filename: t.url,
                    lineno: t.line,
                    colno: t.column,
                    function: t.func || "?"
                };
                return t.url || (n.filename = e), n.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n.function) || /raven\.(min\.)?js$/.test(n.filename)), n
            },
            _processException: function(t, e, n, r, o, i) {
                var a, s = (t ? t + ": " : "") + (e || "");
                if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e) && !this._globalOptions.ignoreErrors.test(s)) && (o && o.length ? (n = o[0].filename || n, o.reverse(), a = {
                        frames: o
                    }) : n && (a = {
                        frames: [{
                            filename: n,
                            lineno: r,
                            in_app: !0
                        }]
                    }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
                    var c = m({
                        exception: {
                            values: [{
                                type: t,
                                value: e,
                                stacktrace: a
                            }]
                        },
                        culprit: n
                    }, i);
                    this._send(c)
                }
            },
            _trimPacket: function(t) {
                var e = this._globalOptions.maxMessageLength;
                if (t.message && (t.message = v(t.message, e)), t.exception) {
                    var n = t.exception.values[0];
                    n.value = v(n.value, e)
                }
                var r = t.request;
                return r && (r.url && (r.url = v(r.url, this._globalOptions.maxUrlLength)), r.Referer && (r.Referer = v(r.Referer, this._globalOptions.maxUrlLength))), t.breadcrumbs && t.breadcrumbs.values && this._trimBreadcrumbs(t.breadcrumbs), t
            },
            _trimBreadcrumbs: function(t) {
                for (var e, n, r, o = ["to", "from", "url"], i = 0; i < t.values.length; ++i)
                    if ((n = t.values[i]).hasOwnProperty("data") && c(n.data) && !g(n.data)) {
                        r = m({}, n.data);
                        for (var a = 0; a < o.length; ++a) e = o[a], r.hasOwnProperty(e) && r[e] && (r[e] = v(r[e], this._globalOptions.maxUrlLength));
                        t.values[i].data = r
                    }
            },
            _getHttpData: function() {
                if (this._hasNavigator || this._hasDocument) {
                    var t = {};
                    return this._hasNavigator && R.userAgent && (t.headers = {
                        "User-Agent": navigator.userAgent
                    }), this._hasDocument && (P.location && P.location.href && (t.url = P.location.href), P.referrer && (t.headers || (t.headers = {}), t.headers.Referer = P.referrer)), t
                }
            },
            _resetBackoff: function() {
                this._backoffDuration = 0, this._backoffStart = null
            },
            _shouldBackoff: function() {
                return this._backoffDuration && T() - this._backoffStart < this._backoffDuration
            },
            _isRepeatData: function(t) {
                var e = this._lastData;
                return !(!e || t.message !== e.message || t.culprit !== e.culprit) && (t.stacktrace || e.stacktrace ? O(t.stacktrace, e.stacktrace) : !t.exception && !e.exception || E(t.exception, e.exception))
            },
            _setBackoffState: function(t) {
                if (!this._shouldBackoff()) {
                    var e = t.status;
                    if (400 === e || 401 === e || 429 === e) {
                        var n;
                        try {
                            n = t.getResponseHeader("Retry-After"), n = 1e3 * parseInt(n, 10)
                        } catch (t) {}
                        this._backoffDuration = n || 2 * this._backoffDuration || 1e3, this._backoffStart = T()
                    }
                }
            },
            _send: function(t) {
                var e = this._globalOptions,
                    n = {
                        project: this._globalProject,
                        logger: e.logger,
                        platform: "javascript"
                    },
                    r = this._getHttpData();
                r && (n.request = r), t.trimHeadFrames && delete t.trimHeadFrames, (t = m(n, t)).tags = m(m({}, this._globalContext.tags), t.tags), t.extra = m(m({}, this._globalContext.extra), t.extra), t.extra["session:duration"] = T() - this._startTime, this._breadcrumbs && this._breadcrumbs.length > 0 && (t.breadcrumbs = {
                    values: [].slice.call(this._breadcrumbs, 0)
                }), p(t.tags) && delete t.tags, this._globalContext.user && (t.user = this._globalContext.user), e.environment && (t.environment = e.environment), e.release && (t.release = e.release), e.serverName && (t.server_name = e.serverName), f(e.dataCallback) && (t = e.dataCallback(t) || t), t && !p(t) && (f(e.shouldSendCallback) && !e.shouldSendCallback(t) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", t) : "number" == typeof e.sampleRate ? Math.random() < e.sampleRate && this._sendProcessedPayload(t) : this._sendProcessedPayload(t)))
            },
            _getUuid: function() {
                return _()
            },
            _sendProcessedPayload: function(t, e) {
                var n = this,
                    r = this._globalOptions;
                if (this.isSetup())
                    if (t = this._trimPacket(t), this._globalOptions.allowDuplicates || !this._isRepeatData(t)) {
                        this._lastEventId = t.event_id || (t.event_id = this._getUuid()), this._lastData = t, this._logDebug("debug", "Raven about to send:", t);
                        var o = {
                            sentry_version: "7",
                            sentry_client: "raven-js/" + this.VERSION,
                            sentry_key: this._globalKey
                        };
                        this._globalSecret && (o.sentry_secret = this._globalSecret);
                        var i = t.exception && t.exception.values[0];
                        this.captureBreadcrumb({
                            category: "sentry",
                            message: i ? (i.type ? i.type + ": " : "") + i.value : t.message,
                            event_id: t.event_id,
                            level: t.level || "error"
                        });
                        var a = this._globalEndpoint;
                        (r.transport || this._makeRequest).call(this, {
                            url: a,
                            auth: o,
                            data: t,
                            options: r,
                            onSuccess: function() {
                                n._resetBackoff(), n._triggerEvent("success", {
                                    data: t,
                                    src: a
                                }), e && e()
                            },
                            onError: function(r) {
                                n._logDebug("error", "Raven transport failed to send: ", r), r.request && n._setBackoffState(r.request), n._triggerEvent("failure", {
                                    data: t,
                                    src: a
                                }), r = r || new Error("Raven send failed (no additional details provided)"), e && e(r)
                            }
                        })
                    } else this._logDebug("warn", "Raven dropped repeat event: ", t)
            },
            _makeRequest: function(t) {
                var e = L.XMLHttpRequest && new L.XMLHttpRequest;
                if (e && ("withCredentials" in e || "undefined" != typeof XDomainRequest)) {
                    var n = t.url;
                    "withCredentials" in e ? e.onreadystatechange = function() {
                        if (4 === e.readyState)
                            if (200 === e.status) t.onSuccess && t.onSuccess();
                            else if (t.onError) {
                            var n = new Error("Sentry error code: " + e.status);
                            n.request = e, t.onError(n)
                        }
                    } : (e = new XDomainRequest, n = n.replace(/^https?:/, ""), t.onSuccess && (e.onload = t.onSuccess), t.onError && (e.onerror = function() {
                        var n = new Error("Sentry error code: XDomainRequest");
                        n.request = e, t.onError(n)
                    })), e.open("POST", n + "?" + w(t.auth)), e.send(o(t.data))
                }
            },
            _logDebug: function(t) {
                this._originalConsoleMethods[t] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[t], this._originalConsole, [].slice.call(arguments, 1))
            },
            _mergeContext: function(t, e) {
                l(e) ? delete this._globalContext[t] : this._globalContext[t] = m(this._globalContext[t] || {}, e)
            }
        }, q.prototype.setUser = q.prototype.setUserContext, q.prototype.setReleaseContext = q.prototype.setRelease, t.exports = q
    }).call(this, n(29))
}, function(t, e, n) {
    (function(e) {
        var r = n(69),
            o = {
                collectWindowErrors: !0,
                debug: !1
            },
            i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
            a = [].slice,
            s = "?",
            c = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

        function u() {
            return "undefined" == typeof document || null == document.location ? "" : document.location.href
        }
        o.report = function() {
            var t, e, n = [],
                l = null,
                f = null,
                d = null;

            function p(t, e) {
                var r = null;
                if (!e || o.collectWindowErrors) {
                    for (var i in n)
                        if (n.hasOwnProperty(i)) try {
                            n[i].apply(null, [t].concat(a.call(arguments, 2)))
                        } catch (t) {
                            r = t
                        }
                    if (r) throw r
                }
            }

            function h(e, n, i, a, l) {
                if (d) o.computeStackTrace.augmentStackTraceWithInitialElement(d, n, i, e), m();
                else if (l && r.isError(l)) p(o.computeStackTrace(l), !0);
                else {
                    var f, h = {
                            url: n,
                            line: i,
                            column: a
                        },
                        v = void 0,
                        g = e;
                    "[object String]" === {}.toString.call(e) && (f = e.match(c)) && (v = f[1], g = f[2]), h.func = s, p({
                        name: v,
                        message: g,
                        url: u(),
                        stack: [h]
                    }, !0)
                }
                return !!t && t.apply(this, arguments)
            }

            function m() {
                var t = d,
                    e = l;
                l = null, d = null, f = null, p.apply(null, [t, !1].concat(e))
            }

            function v(t, e) {
                var n = a.call(arguments, 1);
                if (d) {
                    if (f === t) return;
                    m()
                }
                var r = o.computeStackTrace(t);
                if (d = r, f = t, l = n, setTimeout(function() {
                        f === t && m()
                    }, r.incomplete ? 2e3 : 0), !1 !== e) throw t
            }
            return v.subscribe = function(r) {
                e || (t = i.onerror, i.onerror = h, e = !0), n.push(r)
            }, v.unsubscribe = function(t) {
                for (var e = n.length - 1; e >= 0; --e) n[e] === t && n.splice(e, 1)
            }, v.uninstall = function() {
                e && (i.onerror = t, e = !1, t = void 0), n = []
            }, v
        }(), o.computeStackTrace = function() {
            function t(t) {
                if (void 0 !== t.stack && t.stack) {
                    for (var e, n, r, o = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, i = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, l = /\((\S*)(?::(\d+))(?::(\d+))\)/, f = t.stack.split("\n"), d = [], p = (/^(.*) is undefined$/.exec(t.message), 0), h = f.length; p < h; ++p) {
                        if (n = o.exec(f[p])) {
                            var m = n[2] && 0 === n[2].indexOf("native");
                            n[2] && 0 === n[2].indexOf("eval") && (e = l.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]), r = {
                                url: m ? null : n[2],
                                func: n[1] || s,
                                args: m ? [n[2]] : [],
                                line: n[3] ? +n[3] : null,
                                column: n[4] ? +n[4] : null
                            }
                        } else if (n = a.exec(f[p])) r = {
                            url: n[2],
                            func: n[1] || s,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                        else {
                            if (!(n = i.exec(f[p]))) continue;
                            n[3] && n[3].indexOf(" > eval") > -1 && (e = c.exec(n[3])) ? (n[3] = e[1], n[4] = e[2], n[5] = null) : 0 !== p || n[5] || void 0 === t.columnNumber || (d[0].column = t.columnNumber + 1), r = {
                                url: n[3],
                                func: n[1] || s,
                                args: n[2] ? n[2].split(",") : [],
                                line: n[4] ? +n[4] : null,
                                column: n[5] ? +n[5] : null
                            }
                        }!r.func && r.line && (r.func = s), d.push(r)
                    }
                    return d.length ? {
                        name: t.name,
                        message: t.message,
                        url: u(),
                        stack: d
                    } : null
                }
            }

            function e(t, e, n, r) {
                var o = {
                    url: e,
                    line: n
                };
                if (o.url && o.line) {
                    if (t.incomplete = !1, o.func || (o.func = s), t.stack.length > 0 && t.stack[0].url === o.url) {
                        if (t.stack[0].line === o.line) return !1;
                        if (!t.stack[0].line && t.stack[0].func === o.func) return t.stack[0].line = o.line, !1
                    }
                    return t.stack.unshift(o), t.partial = !0, !0
                }
                return t.incomplete = !0, !1
            }

            function n(t, i) {
                for (var a, c, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, f = [], d = {}, p = !1, h = n.caller; h && !p; h = h.caller)
                    if (h !== r && h !== o.report) {
                        if (c = {
                                url: null,
                                func: s,
                                line: null,
                                column: null
                            }, h.name ? c.func = h.name : (a = l.exec(h.toString())) && (c.func = a[1]), void 0 === c.func) try {
                            c.func = a.input.substring(0, a.input.indexOf("{"))
                        } catch (t) {}
                        d["" + h] ? p = !0 : d["" + h] = !0, f.push(c)
                    }
                i && f.splice(0, i);
                var m = {
                    name: t.name,
                    message: t.message,
                    url: u(),
                    stack: f
                };
                return e(m, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description), m
            }

            function r(e, r) {
                var i = null;
                r = null == r ? 0 : +r;
                try {
                    if (i = t(e)) return i
                } catch (t) {
                    if (o.debug) throw t
                }
                try {
                    if (i = n(e, r + 1)) return i
                } catch (t) {
                    if (o.debug) throw t
                }
                return {
                    name: e.name,
                    message: e.message,
                    url: u()
                }
            }
            return r.augmentStackTraceWithInitialElement = e, r.computeStackTraceFromStackProp = t, r
        }(), t.exports = o
    }).call(this, n(29))
}, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < t.length; ++n)
            if (t[n] === e) return n;
        return -1
    }

    function r(t, e) {
        var r = [],
            o = [];
        return null == e && (e = function(t, e) {
                return r[0] === e ? "[Circular ~]" : "[Circular ~." + o.slice(0, n(r, e)).join(".") + "]"
            }),
            function(i, a) {
                if (r.length > 0) {
                    var s = n(r, this);
                    ~s ? r.splice(s + 1) : r.push(this), ~s ? o.splice(s, 1 / 0, i) : o.push(i), ~n(r, a) && (a = e.call(this, i, a))
                } else r.push(a);
                return null == t ? a instanceof Error ? function(t) {
                    var e = {
                        stack: t.stack,
                        message: t.message,
                        name: t.name
                    };
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }(a) : a : t.call(this, i, a)
            }
    }(t.exports = function(t, e, n, o) {
        return JSON.stringify(t, r(e, o), n)
    }).getSerialize = r
}, function(t, e) {
    function n(t) {
        this.name = "RavenConfigError", this.message = t
    }
    n.prototype = new Error, n.prototype.constructor = n, t.exports = n
}, function(t, e) {
    t.exports = {
        wrapMethod: function(t, e, n) {
            var r = t[e],
                o = t;
            if (e in t) {
                var i = "warn" === e ? "warning" : e;
                t[e] = function() {
                    var t = [].slice.call(arguments),
                        a = "" + t.join(" "),
                        s = {
                            level: i,
                            logger: "console",
                            extra: {
                                arguments: t
                            }
                        };
                    "assert" === e ? !1 === t[0] && (a = "Assertion failed: " + (t.slice(1).join(" ") || "console.assert"), s.extra.arguments = t.slice(1), n && n(a, s)) : n && n(a, s), r && Function.prototype.apply.call(r, o, t)
                }
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
        o = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        i = function(t, e) {
            for (var n = e && e.plainObjects ? Object.create(null) : {}, r = 0; r < t.length; ++r) void 0 !== t[r] && (n[r] = t[r]);
            return n
        };
    t.exports = {
        arrayToObject: i,
        assign: function(t, e) {
            return Object.keys(e).reduce(function(t, n) {
                return t[n] = e[n], t
            }, t)
        },
        compact: function(t) {
            for (var e = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], n = [], r = 0; r < e.length; ++r)
                for (var o = e[r], i = o.obj[o.prop], a = Object.keys(i), s = 0; s < a.length; ++s) {
                    var c = a[s],
                        u = i[c];
                    "object" == typeof u && null !== u && -1 === n.indexOf(u) && (e.push({
                        obj: i,
                        prop: c
                    }), n.push(u))
                }
            return function(t) {
                for (var e; t.length;) {
                    var n = t.pop();
                    if (e = n.obj[n.prop], Array.isArray(e)) {
                        for (var r = [], o = 0; o < e.length; ++o) void 0 !== e[o] && r.push(e[o]);
                        n.obj[n.prop] = r
                    }
                }
                return e
            }(e)
        },
        decode: function(t) {
            try {
                return decodeURIComponent(t.replace(/\+/g, " "))
            } catch (e) {
                return t
            }
        },
        encode: function(t) {
            if (0 === t.length) return t;
            for (var e = "string" == typeof t ? t : String(t), n = "", r = 0; r < e.length; ++r) {
                var i = e.charCodeAt(r);
                45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? n += e.charAt(r) : i < 128 ? n += o[i] : i < 2048 ? n += o[192 | i >> 6] + o[128 | 63 & i] : i < 55296 || i >= 57344 ? n += o[224 | i >> 12] + o[128 | i >> 6 & 63] + o[128 | 63 & i] : (r += 1, i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(r)), n += o[240 | i >> 18] + o[128 | i >> 12 & 63] + o[128 | i >> 6 & 63] + o[128 | 63 & i])
            }
            return n
        },
        isBuffer: function(t) {
            return null != t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        isRegExp: function(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t)
        },
        merge: function t(e, n, o) {
            if (!n) return e;
            if ("object" != typeof n) {
                if (Array.isArray(e)) e.push(n);
                else {
                    if ("object" != typeof e) return [e, n];
                    (o.plainObjects || o.allowPrototypes || !r.call(Object.prototype, n)) && (e[n] = !0)
                }
                return e
            }
            if ("object" != typeof e) return [e].concat(n);
            var a = e;
            return Array.isArray(e) && !Array.isArray(n) && (a = i(e, o)), Array.isArray(e) && Array.isArray(n) ? (n.forEach(function(n, i) {
                r.call(e, i) ? e[i] && "object" == typeof e[i] ? e[i] = t(e[i], n, o) : e.push(n) : e[i] = n
            }), e) : Object.keys(n).reduce(function(e, i) {
                var a = n[i];
                return r.call(e, i) ? e[i] = t(e[i], a, o) : e[i] = a, e
            }, a)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = String.prototype.replace,
        o = /%20/g;
    t.exports = {
        default: "RFC3986",
        formatters: {
            RFC1738: function(t) {
                return r.call(t, o, "+")
            },
            RFC3986: function(t) {
                return t
            }
        },
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    }
}, , function(t, e, n) {
    "use strict";
    var r = n(183),
        o = n(184),
        i = n(113);
    t.exports = {
        formats: i,
        parse: o,
        stringify: r
    }
}, , , , , , , , , , , , , , function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) return t
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
            o = !0, i = t
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (o) throw i
            }
        }
        return n
    }
}, function(t, e, n) {
    var r = n(133),
        o = n(81),
        i = n(87);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(i || o),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(134),
        o = n(141),
        i = n(142),
        a = n(143),
        s = n(144);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, t.exports = c
}, function(t, e, n) {
    var r = n(48);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e, n) {
    var r = n(92),
        o = n(138),
        i = n(25),
        a = n(106),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        u = Object.prototype,
        l = c.toString,
        f = u.hasOwnProperty,
        d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!i(t) || o(t)) && (r(t) ? d : s).test(a(t))
    }
}, function(t, e, n) {
    var r = n(53),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = i.call(t, s),
            n = t[s];
        try {
            t[s] = void 0;
            var r = !0
        } catch (t) {}
        var o = a.call(t);
        return r && (e ? t[s] = n : delete t[s]), o
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r, o = n(139),
        i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!i && i in t
    }
}, function(t, e, n) {
    var r = n(27)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(48),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function(t, e, n) {
    var r = n(48),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : o.call(e, t)
    }
}, function(t, e, n) {
    var r = n(48);
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(49),
        o = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(49);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(49);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(49);
    t.exports = function(t, e) {
        var n = this.__data__,
            o = r(n, t);
        return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
    }
}, function(t, e, n) {
    var r = n(50);
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(50);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(50);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(50);
    t.exports = function(t, e) {
        var n = r(this, t),
            o = n.size;
        return n.set(t, e), this.size += n.size == o ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(27);
    t.exports = function() {
        return r.Date.now()
    }
}, , , , function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return c
    }), n.d(e, "c", function() {
        return a
    }), n.d(e, "a", function() {
        return u
    });
    var r = n(28),
        o = n.n(r),
        i = n(14),
        a = function(t, e, n) {
            window.console && window.console.warn && window.console.warn("Caught error.", e.stack), n ? Object(i.a)(e, Object.assign({
                module: t
            }, n), !1) : Object(i.a)(e, {
                module: t
            }, !1)
        },
        s = function(t, e, n) {
            var r = function(t) {
                var e;
                try {
                    t()
                } catch (t) {
                    e = t
                }
                return e
            }(e);
            r && a(t, r, n)
        },
        c = function(t, e) {
            t.forEach(function(t) {
                var n = o()(t, 2),
                    r = n[0],
                    i = n[1];
                return s(r, i, e)
            })
        },
        u = {
            catchAndLogError: s
        }
}, , , , , , , , , , , , , , , , , , , , function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    var n = new Error("Cannot find module ''");
    throw n.code = "MODULE_NOT_FOUND", n
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(112),
        o = n(113),
        i = {
            brackets: function(t) {
                return t + "[]"
            },
            indices: function(t, e) {
                return t + "[" + e + "]"
            },
            repeat: function(t) {
                return t
            }
        },
        a = Date.prototype.toISOString,
        s = {
            delimiter: "&",
            encode: !0,
            encoder: r.encode,
            encodeValuesOnly: !1,
            serializeDate: function(t) {
                return a.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        c = function t(e, n, o, i, a, c, u, l, f, d, p, h) {
            var m = e;
            if ("function" == typeof u) m = u(n, m);
            else if (m instanceof Date) m = d(m);
            else if (null === m) {
                if (i) return c && !h ? c(n, s.encoder) : n;
                m = ""
            }
            if ("string" == typeof m || "number" == typeof m || "boolean" == typeof m || r.isBuffer(m)) return c ? [p(h ? n : c(n, s.encoder)) + "=" + p(c(m, s.encoder))] : [p(n) + "=" + p(String(m))];
            var v, g = [];
            if (void 0 === m) return g;
            if (Array.isArray(u)) v = u;
            else {
                var y = Object.keys(m);
                v = l ? y.sort(l) : y
            }
            for (var b = 0; b < v.length; ++b) {
                var w = v[b];
                a && null === m[w] || (g = Array.isArray(m) ? g.concat(t(m[w], o(n, w), o, i, a, c, u, l, f, d, p, h)) : g.concat(t(m[w], n + (f ? "." + w : "[" + w + "]"), o, i, a, c, u, l, f, d, p, h)))
            }
            return g
        };
    t.exports = function(t, e) {
        var n = t,
            a = e ? r.assign({}, e) : {};
        if (null !== a.encoder && void 0 !== a.encoder && "function" != typeof a.encoder) throw new TypeError("Encoder has to be a function.");
        var u = void 0 === a.delimiter ? s.delimiter : a.delimiter,
            l = "boolean" == typeof a.strictNullHandling ? a.strictNullHandling : s.strictNullHandling,
            f = "boolean" == typeof a.skipNulls ? a.skipNulls : s.skipNulls,
            d = "boolean" == typeof a.encode ? a.encode : s.encode,
            p = "function" == typeof a.encoder ? a.encoder : s.encoder,
            h = "function" == typeof a.sort ? a.sort : null,
            m = void 0 !== a.allowDots && a.allowDots,
            v = "function" == typeof a.serializeDate ? a.serializeDate : s.serializeDate,
            g = "boolean" == typeof a.encodeValuesOnly ? a.encodeValuesOnly : s.encodeValuesOnly;
        if (void 0 === a.format) a.format = o.default;
        else if (!Object.prototype.hasOwnProperty.call(o.formatters, a.format)) throw new TypeError("Unknown format option provided.");
        var y, b, w = o.formatters[a.format];
        "function" == typeof a.filter ? n = (b = a.filter)("", n) : Array.isArray(a.filter) && (y = b = a.filter);
        var _, x = [];
        if ("object" != typeof n || null === n) return "";
        _ = a.arrayFormat in i ? a.arrayFormat : "indices" in a ? a.indices ? "indices" : "repeat" : "indices";
        var E = i[_];
        y || (y = Object.keys(n)), h && y.sort(h);
        for (var O = 0; O < y.length; ++O) {
            var S = y[O];
            f && null === n[S] || (x = x.concat(c(n[S], S, E, l, f, d ? p : null, b, h, m, v, w, g)))
        }
        var k = x.join(u),
            j = !0 === a.addQueryPrefix ? "?" : "";
        return k.length > 0 ? j + k : ""
    }
}, function(t, e, n) {
    "use strict";
    var r = n(112),
        o = Object.prototype.hasOwnProperty,
        i = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            decoder: r.decode,
            delimiter: "&",
            depth: 5,
            parameterLimit: 1e3,
            plainObjects: !1,
            strictNullHandling: !1
        },
        a = function(t, e, n) {
            if (t) {
                var r = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    i = /(\[[^[\]]*])/g,
                    a = /(\[[^[\]]*])/.exec(r),
                    s = a ? r.slice(0, a.index) : r,
                    c = [];
                if (s) {
                    if (!n.plainObjects && o.call(Object.prototype, s) && !n.allowPrototypes) return;
                    c.push(s)
                }
                for (var u = 0; null !== (a = i.exec(r)) && u < n.depth;) {
                    if (u += 1, !n.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes) return;
                    c.push(a[1])
                }
                return a && c.push("[" + r.slice(a.index) + "]"),
                    function(t, e, n) {
                        for (var r = e, o = t.length - 1; o >= 0; --o) {
                            var i, a = t[o];
                            if ("[]" === a) i = (i = []).concat(r);
                            else {
                                i = n.plainObjects ? Object.create(null) : {};
                                var s = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                    c = parseInt(s, 10);
                                !isNaN(c) && a !== s && String(c) === s && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (i = [])[c] = r : i[s] = r
                            }
                            r = i
                        }
                        return r
                    }(c, e, n)
            }
        };
    t.exports = function(t, e) {
        var n = e ? r.assign({}, e) : {};
        if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
        if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : i.delimiter, n.depth = "number" == typeof n.depth ? n.depth : i.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : i.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder : i.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : i.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : i.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : i.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : i.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : i.strictNullHandling, "" === t || null == t) return n.plainObjects ? Object.create(null) : {};
        for (var s = "string" == typeof t ? function(t, e) {
                for (var n = {}, r = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit, s = r.split(e.delimiter, a), c = 0; c < s.length; ++c) {
                    var u, l, f = s[c],
                        d = f.indexOf("]="),
                        p = -1 === d ? f.indexOf("=") : d + 1; - 1 === p ? (u = e.decoder(f, i.decoder), l = e.strictNullHandling ? null : "") : (u = e.decoder(f.slice(0, p), i.decoder), l = e.decoder(f.slice(p + 1), i.decoder)), o.call(n, u) ? n[u] = [].concat(n[u]).concat(l) : n[u] = l
                }
                return n
            }(t, n) : t, c = n.plainObjects ? Object.create(null) : {}, u = Object.keys(s), l = 0; l < u.length; ++l) {
            var f = u[l],
                d = a(f, s[f], n);
            c = r.merge(c, d, n)
        }
        return r.compact(c)
    }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = ["isOutbrainDisabled", "isUserInContributionsAbTest", "isUserNotInContributionsAbTest", "hasHighPriorityAdLoaded", "hasLowPriorityAdLoaded", "hasLowPriorityAdNotLoaded", "isStoryQuestionsOnPage", "isOutbrainBlockedByAds", "isOutbrainMerchandiseCompliant", "isOutbrainMerchandiseCompliantOrBlockedByAds"]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, , , , function(t, e, n) {
    var r, o, i, a;
    t.exports = (o = [], i = document, (a = (i.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState)) || i.addEventListener("DOMContentLoaded", r = function() {
        for (i.removeEventListener("DOMContentLoaded", r), a = 1; r = o.shift();) r()
    }), function(t) {
        a ? setTimeout(t, 0) : o.push(t)
    })
}, , , , , , , , , , , , , , , , , , function(t, e, n) {
    t.exports = !n(417)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var r = n(464),
        o = n(466);
    t.exports = function(t) {
        return r(o(t))
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, , , , , , function(t, e, n) {
    "use strict";
    var r = function(t) {
            return function(e) {
                return Math.pow(e, t)
            }
        },
        o = function(t) {
            return function(e) {
                return 1 - Math.abs(Math.pow(e - 1, t))
            }
        },
        i = function(t) {
            return function(e) {
                return e < .5 ? r(t)(2 * e) / 2 : o(t)(2 * e - 1) / 2 + .5
            }
        },
        a = {
            linear: i(1),
            easeInQuad: r(2),
            easeOutQuad: o(2),
            easeInOutQuad: i(2),
            easeInCubic: r(3),
            easeOutCubic: o(3),
            easeInOutCubic: i(3),
            easeInQuart: r(4),
            easeOutQuart: o(4),
            easeInOutQuart: i(4),
            easeInQuint: r(5),
            easeOutQuint: o(5),
            easeInOutQuint: i(5)
        },
        s = n(11),
        c = n.n(s),
        u = n(12),
        l = n.n(u);
    n.d(e, "a", function() {
        return f
    }), n.d(e, "b", function() {
        return d
    });
    var f = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "easeOutQuad",
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document.body,
                o = c()(r),
                i = o.scrollTop(),
                s = t - i,
                u = function(t, e) {
                    var n = new Date,
                        r = a[t];
                    return function() {
                        var t = new Date - n;
                        return r(Math.min(1, t / e))
                    }
                }(n, e),
                f = setInterval(function() {
                    l.a.write(function() {
                        return o.scrollTop(i + u() * s)
                    })
                }, 15);
            setTimeout(function() {
                clearInterval(f), l.a.write(function() {
                    return o.scrollTop(t)
                })
            }, e)
        },
        d = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                o = c()(t).offset().top;
            f(o, e, n, r)
        }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
    var n = t.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var r = n(414),
        o = n(325);
    t.exports = n(264) ? function(t, e, n) {
        return r.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(415),
        o = n(416),
        i = n(418),
        a = Object.defineProperty;
    e.f = n(264) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(324);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    t.exports = !n(264) && !n(417)(function() {
        return 7 != Object.defineProperty(n(457)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(324);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    var r = n(456),
        o = n(461),
        i = n(265),
        a = n(474),
        s = n(476);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n, r = i(t), c = a.f, u = o(r), l = {}, f = 0; u.length > f;) void 0 !== (n = c(r, e = u[f++])) && s(l, e, n);
            return l
        }
    })
}, function(t, e, n) {
    var r = n(242),
        o = n(412),
        i = n(413),
        a = n(458),
        s = n(459),
        c = function(t, e, n) {
            var u, l, f, d, p = t & c.F,
                h = t & c.G,
                m = t & c.S,
                v = t & c.P,
                g = t & c.B,
                y = h ? r : m ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                b = h ? o : o[e] || (o[e] = {}),
                w = b.prototype || (b.prototype = {});
            for (u in h && (n = e), n) f = ((l = !p && y && void 0 !== y[u]) ? y : n)[u], d = g && l ? s(f, r) : v && "function" == typeof f ? s(Function.call, f) : f, y && a(y, u, f, t & c.U), b[u] != f && i(b, u, d), v && w[u] != f && (w[u] = f)
        };
    r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e, n) {
    var r = n(324),
        o = n(242).document,
        i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(242),
        o = n(413),
        i = n(326),
        a = n(419)("src"),
        s = Function.toString,
        c = ("" + s).split("toString");
    n(412).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, n, s) {
        var u = "function" == typeof n;
        u && (i(n, "name") || o(n, "name", e)), t[e] !== n && (u && (i(n, a) || o(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[a] || s.call(this)
    })
}, function(t, e, n) {
    var r = n(460);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return t.call(e, n, r, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var r = n(462),
        o = n(473),
        i = n(415),
        a = n(242).Reflect;
    t.exports = a && a.ownKeys || function(t) {
        var e = r.f(i(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r = n(463),
        o = n(472).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, o)
    }
}, function(t, e, n) {
    var r = n(326),
        o = n(265),
        i = n(467)(!1),
        a = n(470)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = o(t),
            c = 0,
            u = [];
        for (n in s) n != a && r(s, n) && u.push(n);
        for (; e.length > c;) r(s, n = e[c++]) && (~i(u, n) || u.push(n));
        return u
    }
}, function(t, e, n) {
    var r = n(465);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(265),
        o = n(468),
        i = n(469);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, c = r(e),
                u = o(c.length),
                l = i(a, u);
            if (t && n != n) {
                for (; u > l;)
                    if ((s = c[l++]) != s) return !0
            } else
                for (; u > l; l++)
                    if ((t || l in c) && c[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var r = n(420),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var r = n(420),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}, function(t, e, n) {
    var r = n(471)("keys"),
        o = n(419);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}, function(t, e, n) {
    var r = n(242),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) {
        return o[t] || (o[t] = {})
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(475),
        o = n(325),
        i = n(265),
        a = n(418),
        s = n(326),
        c = n(416),
        u = Object.getOwnPropertyDescriptor;
    e.f = n(264) ? u : function(t, e) {
        if (t = i(t), e = a(e, !0), c) try {
            return u(t, e)
        } catch (t) {}
        if (s(t, e)) return o(!r.f.call(t, e), t[e])
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    "use strict";
    var r = n(414),
        o = n(325);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, o(0, n)) : t[e] = n
    }
}, , , , function(t, e, n) {
    "use strict";
    n.r(e), n(455);
    var r, o, i = n(246),
        a = n.n(i),
        s = n(12),
        c = n.n(s),
        u = n(35),
        l = n(80),
        f = n(4),
        d = n(15),
        p = n(6),
        h = n(54),
        m = n(83),
        v = n(26),
        g = n(2),
        y = n(20),
        b = n(159),
        w = n(47),
        _ = n(7),
        x = n(0),
        E = n(1),
        O = n.n(E),
        S = n(55),
        k = n.n(S),
        j = n(30),
        C = n.n(j),
        A = n(3),
        T = n(332),
        L = n(16),
        P = n.n(L),
        R = new function t() {
            P()(this, t), O()(this, "promptForSignIn", void 0), this.promptForSignIn = navigator.credentials && window.PasswordCredential
        },
        I = function(t) {
            C.a.record({
                component: "pwmanager-api",
                value: t
            })
        },
        q = function() {
            Object(v.l)() && A.a.read(function() {
                return {
                    signIns: Array.from(document.querySelectorAll(".js-navigation-sign-in")),
                    accountActionsLists: Array.from(document.querySelectorAll(".js-navigation-account-actions")),
                    commentItems: Array.from(document.querySelectorAll(".js-show-comment-activity"))
                }
            }).then(function(t) {
                var e = t.signIns,
                    n = t.accountActionsLists,
                    r = t.commentItems;
                return A.a.write(function() {
                    e.forEach(function(t) {
                        t.remove()
                    }), n.forEach(function(t) {
                        t.classList.remove("is-hidden")
                    }), Array.from(document.querySelectorAll(".js-user-account-trigger")).forEach(function(t) {
                        t.classList.remove("is-hidden")
                    })
                }).then(function() {
                    var t, e;
                    t = r, (e = Object(v.i)()) && t.forEach(function(t) {
                        A.a.read(function() {
                            return t.querySelector(".js-add-comment-activity-link")
                        }).then(function(n) {
                            return A.a.write(function() {
                                t.classList.remove("u-h"), n.setAttribute("href", "https://profile.theguardian.com/user/id/".concat(e.id))
                            })
                        })
                    })
                })
            })
        },
        N = {},
        M = {},
        D = function() {
            return document.getElementsByClassName("js-main-menu")[0]
        },
        H = function(t) {
            return Array.from(t.children).find(function(t) {
                return t.classList.contains("menu-item__title")
            })
        },
        B = function(t) {
            var e = H(t);
            e && e.setAttribute("aria-expanded", "false")
        },
        F = function(t) {
            Array.from(document.querySelectorAll(".js-navigation-item")).forEach(function(e) {
                e !== t && B(e)
            })
        },
        U = function(t) {
            var e = M[t];
            p.a.off("module:clickstream:click", e), delete M[t]
        },
        z = function(t, e) {
            U(t), p.a.on("module:clickstream:click", e), M[t] = e
        },
        W = function t() {
            var e = document.documentElement,
                n = document.querySelector(".veggie-burger"),
                r = document.querySelector(".new-header"),
                o = r && r.querySelector(".js-change-link"),
                i = n && "true" === n.getAttribute("aria-expanded"),
                a = D();
            r && a && o && A.a.write(function() {
                var s, c = i ? "false" : "true",
                    u = i ? "true" : "false",
                    l = function() {
                        var t = document.body;
                        return t && Object(_.m)({
                            min: "tablet",
                            max: "desktop"
                        }) ? A.a.read(function() {
                            var e = t.getBoundingClientRect(),
                                n = o.getBoundingClientRect();
                            return e.right - n.right + n.width / 2
                        }).then(function(t) {
                            return A.a.write(function() {
                                a.style.marginRight = "".concat(t, "px")
                            })
                        }) : Promise.resolve()
                    },
                    f = k()(l, 200);
                if (i) A.a.write(function() {
                    a.style.marginRight = ""
                }).then(function() {
                    window.removeEventListener("resize", f)
                });
                else if (l().then(function() {
                        Object(m.a)(window, "resize", f, {
                            passive: !0
                        })
                    }), Object(_.m)({
                        min: "desktop"
                    })) {
                    var d = a.getAttribute("id");
                    d && z(d, function(e) {
                        (e ? e.target : null) !== a && (t(), d && U(d))
                    })
                }
                o.setAttribute("data-link-name", "nav2 : veggie-burger : ".concat(i ? "show" : "hide")), n && n.setAttribute("aria-expanded", c), a.setAttribute("aria-hidden", u), r.classList.toggle("new-header--open", !i), e && e.classList.toggle("nav-is-open", !i), i ? (Array.from(document.querySelectorAll(".js-navigation-item")).forEach(function(t) {
                    t.style.order = ""
                }), F()) : (s = document.querySelector(".js-navigation-button")) && s.focus()
            })
        },
        V = function(t) {
            A.a.read(function() {
                return document.getElementById(t)
            }).then(function(t) {
                if (t) {
                    t.focus();
                    var e = t.getAttribute("aria-controls");
                    e && U(e)
                }
            })
        },
        $ = function(t, e) {
            var n = document.querySelector(t),
                r = document.querySelector(e);
            n && r && function t(e) {
                var n = document.documentElement;
                A.a.read(function() {
                    return e
                }).then(function(r) {
                    var o = r.menu,
                        i = r.trigger;
                    if (o) {
                        var a = o.classList.contains("dropdown-menu--open"),
                            s = a ? "false" : "true",
                            c = a ? "true" : "false";
                        return A.a.write(function() {
                            if (i && i.setAttribute("aria-expanded", s), o.setAttribute("aria-hidden", c), o.classList.toggle("dropdown-menu--open", !a), n && n.classList.toggle("dropdown--open", !a), !a && document.body) {
                                (document.documentElement || document.body).scrollTop = 0;
                                var r = o.getAttribute("id");
                                z(r, function(n) {
                                    (n ? n.target : null) !== o && (t(e), r && U(r))
                                })
                            }
                        })
                    }
                })
            }({
                menu: n,
                trigger: r
            })
        },
        J = function() {
            return $(".js-edition-dropdown-menu", ".js-edition-picker-trigger")
        },
        X = function() {
            return $(".js-user-account-dropdown-menu", ".js-user-account-trigger")
        },
        G = (r = {}, O()(r, "main-menu-toggle", W), O()(r, "edition-picker-toggle", J), O()(r, "my-account-toggle", X), r),
        Q = (o = {}, O()(o, "main-menu-toggle", function(t) {
            "Escape" === t.key && (W(), V("main-menu-toggle"))
        }), O()(o, "edition-picker-toggle", function(t) {
            "Escape" === t.key && (J(), V("edition-picker-toggle"))
        }), O()(o, "my-account-toggle", function(t) {
            "Escape" === t.key && (X(), V("my-account-toggle"))
        }), o),
        K = function(t) {
            A.a.read(function() {
                var e = document.createElement("button"),
                    n = t.id,
                    r = t.getAttribute("aria-controls"),
                    o = t.getAttribute("data-link-name"),
                    i = document.querySelector("label[for='".concat(n, "']"));
                A.a.write(function() {
                    e.setAttribute("id", n);
                    var a = G[n];
                    if (a && e.addEventListener("click", a), e.setAttribute("aria-expanded", "false"), o && e.setAttribute("data-link-name", o), r) {
                        e.setAttribute("aria-controls", r);
                        var s = document.getElementById(r),
                            c = Q[n];
                        s && c && s.addEventListener("keyup", c)
                    }
                    if (i) {
                        i.classList.forEach(function(t) {
                            e.classList.add(t)
                        }), e.classList.add("".concat(n, "-button"));
                        var u = i.getAttribute("tabindex");
                        u && e.setAttribute("tabindex", u), e.innerHTML = i.innerHTML, i.remove()
                    }
                    t.parentNode && t.parentNode.replaceChild(e, t), N[e.id] = !0
                })
            })
        },
        Y = function() {
            var t = D(),
                e = t && t.querySelector(".js-menu-search"),
                n = document.querySelector(".js-toggle-more-sections");
            t && t.addEventListener("click", function(t) {
                var e = t.target;
                if (e.matches(".js-navigation-toggle")) {
                    var n = e.parentNode;
                    n && (t.preventDefault(), t.stopPropagation(), function(t) {
                        ! function(t) {
                            var e = H(t);
                            return !e || "false" === e.getAttribute("aria-expanded")
                        }(t) ? B(t): function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = H(t);
                            n && n.setAttribute("aria-expanded", "true"), !0 === e.scrollIntoView && Object(T.b)(t, 0, "easeInQuad", D()), F(t)
                        }(t)
                    }(n))
                }
            }), e && e.addEventListener("submit", function(t) {
                var e = t.target.querySelector(".js-menu-search-term");
                e && function(t) {
                    f.a.set("gu.recent.search", t)
                }(e.value)
            }), n && n.addEventListener("click", function() {
                var t;
                t = n, A.a.read(function() {
                    return document.querySelector(".js-expand-subnav")
                }).then(function(e) {
                    e && A.a.write(function() {
                        var n = e.classList.contains("subnav--expanded");
                        e.classList.toggle("subnav--expanded"), t.innerText = n ? "More" : "Less"
                    })
                })
            })
        },
        Z = function() {
            var t;
            Array.from(document.getElementsByClassName("js-enhance-checkbox")).forEach(function(t) {
                N[t.id] || t.checked ? t.addEventListener("click", function e() {
                    K(t), t.removeEventListener("click", e)
                }) : K(t)
            }), A.a.read(function() {
                var t = document.querySelector(".js-show-more-button"),
                    e = document.querySelector(".js-expand-subnav"),
                    n = document.querySelector(".js-get-last-child-subnav");
                if (e && n) {
                    var r = n.querySelectorAll("li");
                    return {
                        moreButton: t,
                        lastChildRect: r[r.length - 1].getBoundingClientRect(),
                        subnavRect: e.getBoundingClientRect()
                    }
                }
            }).then(function(t) {
                if (t) {
                    var e = t.moreButton,
                        n = t.lastChildRect;
                    t.subnavRect.top + 1 === n.top && A.a.write(function() {
                        e && e.classList.add("is-hidden")
                    })
                }
            }), Y(), q(), A.a.read(function() {
                return {
                    signInLinks: Array.from(document.querySelectorAll(".js-navigation-sign-in"))
                }
            }).then(function(t) {
                t.signInLinks.forEach(function(t) {
                    t.addEventListener("click", function(e) {
                        e.preventDefault(), (R.promptForSignIn ? navigator.credentials.get({
                            password: !0,
                            mediation: "required"
                        }).then(function(t) {
                            return t ? Object(v.a)(t).then(function() {
                                return function(t) {
                                    return navigator.credentials.store(t), I("conversion"), Promise.resolve(!0)
                                }(t)
                            }).catch(function() {
                                return Promise.resolve(!1)
                            }) : (I("impression"), Promise.resolve(!1))
                        }) : Promise.resolve(!1)).then(function(e) {
                            return e || (window.location = t.getAttribute("href") || "/signin"), q()
                        })
                    }, !1)
                })
            }), F(), (t = f.a.get("gu.recent.search")) && (C.a.record({
                component: "new-header-search",
                value: t
            }), f.a.remove("gu.recent.search"))
        },
        tt = n(104),
        et = n(13),
        nt = n.n(et),
        rt = new Map,
        ot = {
            observe: function(t, e, n) {
                var r = rt.get(e);
                r ? r.registry.push({
                    callback: n,
                    element: t
                }) : r = {
                    registry: [{
                        callback: n,
                        element: t
                    }],
                    observer: new window.IntersectionObserver(function(t) {
                        var n = rt.get(e);
                        n && t.forEach(function(t) {
                            if (t.isIntersecting) {
                                var e = n.registry.find(function(e) {
                                    return e.element === t.target
                                });
                                e && e.callback(t.intersectionRatio)
                            }
                        })
                    }, {
                        threshold: e
                    })
                }, rt.set(e, r), r.observer.observe(t)
            },
            unobserve: function(t, e, n) {
                var r = rt.get(e);
                if (r) {
                    var o = r.registry.findIndex(function(e) {
                        var r = e.element,
                            o = e.callback;
                        return r === t && o === n
                    }); - 1 !== o && (r.registry.splice(o, 1), 0 === r.registry.length ? rt.delete(e) : rt.set(e, r))
                }
            }
        },
        it = function(t) {
            return function(e) {
                return new Promise(function(n) {
                    t.call(c.a, function() {
                        n(e())
                    })
                })
            }
        },
        at = {
            ophan: C.a,
            dom: {
                write: it(c.a.write),
                read: it(c.a.read)
            },
            viewport: ot
        },
        st = function(t, e) {
            var n = t[e].default(at);
            Array.from(document.querySelectorAll("[data-atom-type='".concat(e, "']"))).forEach(function(t) {
                var r = n(t).runTry();
                "string" == typeof r ? console.log("Failed to initialise atom [".concat(e, "/").concat(t.getAttribute("data-atom-id") || "", "]: ").concat(r)) : "requestIdleCallback" in window ? requestIdleCallback(function() {
                    r.start()
                }) : r.start()
            })
        },
        ct = function() {
            var t;
            x.a.get("page.atomTypes.guide") && n.e(20).then(function(t) {
                n(653);
                var e = n(654);
                st(e, "guide")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.profile") && n.e(26).then(function(t) {
                n(655);
                var e = n(656);
                st(e, "profile")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.qanda") && n.e(27).then(function(t) {
                n(657);
                var e = n(658);
                st(e, "qanda")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.timeline") && n.e(36).then(function(t) {
                n(659);
                var e = n(660);
                st(e, "timeline")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.storyquestions") && n.e(35).then(function(t) {
                n(661);
                var e = n(662);
                st(e, "storyquestions")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.explainer") && n.e(17).then(function(t) {
                n(663);
                var e = n(664);
                st(e, "explainer")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.commonsdivision") && n.e(33).then(function(t) {
                n(665);
                var e = n(666);
                st(e, "commonsdivision")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.audio") && n.e(32).then(function(t) {
                n(667);
                var e = n(668);
                st(e, "audio")
            }.bind(null, n)).catch(n.oe), x.a.get("page.atomTypes.chart") && (t = nt()(document.querySelectorAll(".atom--chart > .atom__iframe")), window.addEventListener("message", function(e) {
                var n = t.find(function(t) {
                    try {
                        return t.name === e.source.name
                    } catch (t) {
                        return !1
                    }
                });
                if (n) try {
                    var r = JSON.parse(e.data);
                    switch (r.type) {
                        case "set-height":
                            n.height = r.value
                    }
                } catch (t) {}
            }), t.forEach(function(t) {
                var e = (t.getAttribute("srcdoc") || "").replace(/<gu-script>/g, "<script>").replace(/<\/gu-script>/g, "<\/script>");
                t.setAttribute("srcdoc", e)
            }))
        },
        ut = arguments,
        lt = n(37),
        ft = function() {
            if (lt.a && "navigation" in lt.a && "timing" in lt.a) {
                var t = lt.a.timing,
                    e = {
                        dns: t.domainLookupEnd - t.domainLookupStart,
                        connection: t.connectEnd - t.connectStart,
                        firstByte: t.responseStart - t.connectEnd,
                        lastByte: t.responseEnd - t.responseStart,
                        domContentLoadedEvent: t.domContentLoadedEventStart - t.responseEnd,
                        loadEvent: t.loadEventStart - t.domContentLoadedEventStart,
                        navType: lt.a.navigation.type,
                        redirectCount: lt.a.navigation.redirectCount,
                        assetsPerformance: ["standard boot", "commercial request", "commercial boot", "enhanced request", "enhanced boot"].map(function(t) {
                            return {
                                name: t,
                                timing: parseInt(Object(w.b)(t) || 0, 10)
                            }
                        })
                    };
                C.a.record({
                    performance: e
                })
            }
        },
        dt = n(14);
    n.p = "".concat(x.a.get("page.assetsPath"), "javascripts/");
    var pt = function() {
        a()(function() {
            Object(w.c)("standard boot"),
                function() {
                    var t, e, n, r, o, i, a, s, E;
                    if (Object(w.c)("standard start"), Object(b.b)([
                            ["ga-user-timing-standard-start", function() {
                                Object(tt.d)("Javascript Load", "standardStart", "Standard start parse time")
                            }]
                        ]), t = window.onerror, window.onerror = function(e, n, r, o, i) {
                            i && i.reported || t.apply(window, ut)
                        }, window.addEventListener("unhandledRejection", function(t) {
                            var e = t.detail.reason;
                            e && !e.reported && u.a.captureException(e)
                        }), e = !1, n = function() {
                            e || (e = !0, c.a.read(function() {
                                p.a.emitEvent("window:throttledScroll"), e = !1
                            }))
                        }, Object(m.a)(window, "scroll", l.a.get("use-idle-callback") && "requestIdleCallback" in window ? function() {
                            window.requestIdleCallback(n)
                        } : n, {
                            passive: !0
                        }), Object(m.a)(window, "resize", k()(function(t) {
                            p.a.emitEvent("window:throttledResize", [t])
                        }, 200), {
                            passive: !0
                        }), "clear" === (r = Object(y.d)()).adtest ? Object(g.e)("adtest") : r.adtest && Object(g.a)("adtest", encodeURIComponent(r.adtest), 10), window.location.hash.match(/[#&]noadsaf(&.*)?$/)) {
                        var O = new Date;
                        O.setTime(O.getTime() + 3e4), Object(g.a)("GU_AF1", O.getTime().toString(), 1, !0)
                    }
                    if (window.guardian.isEnhanced) {
                        var S = "gu.alreadyVisited",
                            j = f.a.get(S) || 0;
                        f.a.set(S, j + 1)
                    }
                    x.a.get("switches.blockIas") && x.a.get("switches.serviceWorkerEnabled") && navigator.serviceWorker && navigator.serviceWorker.ready.then(function(t) {
                        var e = t.active,
                            n = window.location.hash.includes("noias");
                        e.postMessage({
                            ias: n
                        })
                    }), Object(h.a)(), C.a.setEventEmitter(p.a), x.a.get("page.requiresMembershipAccess") && (o = x.a.get("page"), i = o.membershipUrl, a = o.membershipAccess, s = o.contentId, E = function() {
                        window.location.assign("".concat(i, "/membership-content?referringContent=").concat(s, "&membershipAccess=").concat(a))
                    }, Object(v.l)() ? Object(d.a)("".concat(i, "/user/me"), {
                        mode: "cors",
                        credentials: "include"
                    }).then(function(t) {
                        if (a.includes("paid-members-only") ? t.tier && t.isPaidTier : t.tier) {
                            var e = document.body;
                            e && c.a.write(function() {
                                return e.classList.remove("has-membership-access-requirement")
                            })
                        } else E()
                    }).catch(E) : E()), Object(v.k)(), Z();
                    var T, L, P, R = Object(_.m)({
                        min: "leftCol"
                    });
                    x.a.get("page.hasShowcaseMainElement") && R && (T = document.querySelector(".js-secondary-column"), L = document.querySelector(".js-content-main-column"), P = document.querySelector(".media-primary--showcase"), L && T && P && A.a.read(function() {
                            var t = L.getBoundingClientRect();
                            return function(t, e) {
                                return t.top - e.top + t.height
                            }(P.getBoundingClientRect(), t)
                        }).then(function(t) {
                            return A.a.write(function() {
                                T.style.paddingTop = "".concat(t, "px")
                            })
                        })), ct(),
                        function() {
                            try {
                                !x.a.get("page.isDev") && x.a.get("switches.weAreHiring") && window.console.log("\n%cHello.\n\n%cWe are hiring – ever thought about joining us? \n%chttps://workforus.theguardian.com/careers/digital-development%c \n\n", "font-family: Georgia, serif; font-size: 32px; color: #052962", "font-family: Georgia, serif; font-size: 16px; color: #767676", "font-family: Helvetica Neue, sans-serif; font-size: 11px; text-decoration: underline; line-height: 1.2rem; color: #767676", "")
                            } catch (t) {}
                        }(), Object(w.c)("standard end"), Object(b.b)([
                            ["ga-user-timing-standard-end", function() {
                                Object(tt.d)("Javascript Load", "standardEnd", "Standard end parse time")
                            }]
                        ])
                }();
            var t = x.a.get("switches.commercial") ? (Object(w.c)("commercial request"), Promise.all([n.e(7), n.e(8), n.e(5), n.e(11)]).then(n.bind(null, 652))) : Promise.resolve({
                    bootCommercial: function() {}
                }),
                e = window.guardian.isEnhanced ? (Object(w.c)("enhanced request"), Promise.all([n.e(7), n.e(5), n.e(15)]).then(n.bind(null, 682))) : Promise.resolve({
                    bootEnhanced: function() {}
                });
            Promise.all([t.then(function(t) {
                var e = t.bootCommercial;
                Object(w.c)("commercial boot");
                try {
                    return e()
                } catch (t) {
                    Object(dt.a)(t, {
                        feature: "commercial"
                    }, !1)
                }
            }), e.then(function(t) {
                var e = t.bootEnhanced;
                Object(w.c)("enhanced boot");
                try {
                    return e()
                } catch (t) {
                    Object(dt.a)(t, {
                        feature: "enhanced"
                    }, !1)
                }
            })]).then(function() {
                "complete" === document.readyState ? ft() : window.addEventListener("load", ft)
            })
        })
    };
    window.guardian.polyfilled ? pt() : window.guardian.onPolyfilled = pt
}]);
//# sourceMappingURL=graun.standard.js.map