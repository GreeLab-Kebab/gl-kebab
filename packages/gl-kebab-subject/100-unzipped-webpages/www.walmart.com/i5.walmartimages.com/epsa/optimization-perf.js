! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "countOptimizedResources", function() {
        return o
    }), n.d(t, "isOptimizable", function() {
        return a
    }), n.d(t, "isOptimized", function() {
        return s
    }), n.d(t, "parseExtension", function() {
        return c
    }), n.d(t, "isBrotli", function() {
        return u
    }), n.d(t, "readTBVCookie", function() {
        return l
    }), n.d(t, "generateBeaconURL", function() {
        return f
    });
    var i = "none";

    function o(e, t, n) {
        var i = 0,
            o = 0,
            r = 0,
            l = 0,
            f = 0,
            p = 0,
            m = 0,
            d = 0,
            b = 0,
            g = 0,
            _ = 0,
            w = 0,
            T = 0,
            j = 0,
            O = 0,
            v = !0,
            z = !1,
            y = void 0;
        try {
            for (var C, h = e[Symbol.iterator](); !(v = (C = h.next()).done); v = !0) {
                var B = C.value,
                    x = c(B.name);
                if ("ico" !== x) {
                    var P = new URL(B.name);
                    if (x) switch (x) {
                        case "css":
                            o++;
                            break;
                        case "js":
                            i++;
                            break;
                        case "png":
                        case "jpg":
                        case "jpeg":
                        case "gif":
                        case "webp":
                        case "bmp":
                        case "tiff":
                        case "bpg":
                        case "jp2":
                        case "jxr":
                            r++;
                            break;
                        case "woff2":
                        case "eot":
                            l++
                    }
                    if (a(B, t.concat(n), P)) {
                        if (f++, x) switch (x) {
                            case "css":
                                m++;
                                break;
                            case "js":
                                p++;
                                break;
                            case "png":
                            case "jpg":
                            case "jpeg":
                            case "gif":
                            case "webp":
                            case "bmp":
                            case "tiff":
                            case "bpg":
                            case "jp2":
                            case "jxr":
                                d++
                        }
                        if (s(n, B, P) && (b++, x)) switch (x) {
                            case "css":
                                u(B.name) ? w++ : T++;
                                break;
                            case "js":
                                u(B.name) ? g++ : _++;
                                break;
                            case "png":
                            case "jpg":
                            case "jpeg":
                            case "gif":
                            case "jp2":
                            case "jxr":
                                O++;
                                break;
                            case "webp":
                                O++, j++
                        }
                    }
                }
            }
        } catch (e) {
            z = !0, y = e
        } finally {
            try {
                v || null == h.return || h.return()
            } finally {
                if (z) throw y
            }
        }
        return {
            totalResources: e.length,
            optimizedResources: b,
            optimizableResources: f,
            fntTotal: l,
            jsTotal: i,
            jsBrotliCount: g,
            jsGzipCount: _,
            cssTotal: o,
            cssBrotliCount: w,
            cssGzipCount: T,
            imgTotal: r,
            webpCount: j,
            jsOptimizableTotal: p,
            cssOptimizableTotal: m,
            imgOptimizableTotal: d,
            imgCount: O
        }
    }
    var r = new RegExp("vanilla.(chunk|index).esm");

    function a(e, t, n) {
        return "xmlhttprequest" !== e.initiatorType && "fetch" !== e.initiatorType && "other" !== e.initiatorType && "iframe" !== e.initiatorType && (!!t.includes(n.host) && !r.test(n.pathname))
    }

    function s(e, t, n) {
        return !!e.includes(n.host)
    }

    function c(e) {
        return (e = e.substr(1 + e.lastIndexOf("/")).split("?")[0]).split("#")[0].substr(e.lastIndexOf(".") + 1).toLowerCase()
    }

    function u(e) {
        return e.lastIndexOf("-br.") >= 0
    }

    function l() {
        var e = document.cookie.match("(^|;) ?TBV=([^;]*)(;|$)");
        return e ? e[2] : null
    }

    function f(e, t, n, o, r) {
        var a = r || i;
        return "https://" + e + "/rum.gif?v=1&a=PERFORMANCE_METRICS&t_other=" + ("t_mizedres|" + o.optimizedResources + ",t_mizableres|" + o.optimizableResources + ",t_res|" + o.totalResources + ",t_fnt|" + o.fntTotal + ",t_js|" + o.jsTotal + ",t_css|" + o.cssTotal + ",t_js_gzip|" + o.jsGzipCount + ",t_css_gzip|" + o.cssGzipCount + ",t_js_br|" + o.jsBrotliCount + ",t_css_br|" + o.cssBrotliCount + ",t_img|" + o.imgTotal + ",t_webp|" + o.webpCount + ",t_TBV|" + a + ",t_mizablejs|" + o.jsOptimizableTotal + ",t_mizablecss|" + o.cssOptimizableTotal + ",t_mizableimg|" + o.imgOptimizableTotal + ",t_mizedimg|" + o.imgCount) + "&u=" + n + "&r=" + t
    }

    function p() {
        if (window.TB_OPT_Config) {
            var e = ["i5.wal.co"];
            window.TB_OPT_Config.OptimizedHosts && (e = window.TB_OPT_Config.OptimizedHosts);
            var t = ["i5.walmartimages.com"];
            window.TB_OPT_Config.OptimizableHosts && (t = window.TB_OPT_Config.OptimizableHosts);
            var n = "beacon.walmart.com";
            window.TB_OPT_Config.BeaconHost && (n = window.TB_OPT_Config.BeaconHost);
            var i = o(window.performance.getEntriesByType("resource"), t, e),
                r = f(n, document.referrer || "https://example.com/emptyreferrer", document.location.toString() || "https://example.com/emptylocation", i, l());
            document.createElement("img").src = r
        }
    }! function() {
        if (window.TB_OPT_Config) {
            var e = 1e4;
            window.TB_OPT_Config.SampleRate && (e = window.TB_OPT_Config.SampleRate / 10), 0 === Math.floor(Math.random() * e) && ("complete" === document.readyState ? p() : window.addEventListener ? window.addEventListener("load", p, !1) : window.attachEvent && window.attachEvent("onload", p))
        }
    }()
}]);