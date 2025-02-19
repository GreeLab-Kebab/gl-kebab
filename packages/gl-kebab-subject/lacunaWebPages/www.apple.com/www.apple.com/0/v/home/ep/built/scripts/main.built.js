! function() {
    function e(t, i, n) {
        function r(o, a) {
            if (!i[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (s) return s(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = i[o] = {
                    exports: {}
                };
                t[o][0].call(u.exports, function(e) {
                    var i = t[o][1][e];
                    return r(i ? i : e)
                }, u, u.exports, e, t, i, n)
            }
            return i[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
        return r
    }
    return e
}()({
    1: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? window.navigator.userAgent : arguments[0];
                    n(this, e);
                    var i = t.toLowerCase(),
                        r = /intel mac os x (\d+)[_.](\d+)[_.]?(\d+)?/;
                    if (this.isEdge = /\sedge\//.test(i), this.isChrome = !this.isEdge && /chrome/.test(i), this.isSafari = !this.isEdge && !this.isChrome && /safari/.test(i), this.isFirefox = !this.isEdge && !this.isChrome && !this.isSafari && /firefox/.test(i), this.isOpera = !this.isEdge && !this.isChrome && !this.isSafari && /opera|opr/.test(i), this.isOperaMini = !this.isEdge && !this.isChrome && !this.isSafari && /opera\s*mini/.test(i), this.isIE = !this.isEdge && !this.isChrome && !this.isSafari && !this.isFirefox && /trident|msie/.test(i), this.isMobile = /mobile/.test(i) || this.isOperaMini, this.isAndroid = /android/.test(i), this.isiOS = this.isMobile && /iphone|ipad|ipod/.test(i), this.isEdgeHTML = this.isEdge, this.isWebKit = !this.isEdgeHTML && /applewebkit/.test(i) && !/edge/.test(i), this.isTrident = !this.isEdgeHTML && !this.isWebKit && /trident/.test(i), this.isGecko = !this.isEdgeHTML && !this.isWebKit && !this.isTrident && /gecko/.test(i), this.isEdge ? this.engineVersion = i.match(/(?:edge).(\d+)/) : (this.version = i.match(/(?:chrome|version|firefox|msie|rv).(\d+)\.(\d+)/), this.engineVersion = i.match(/(?:applewebkit|gecko|trident).(\d+)/)), this.version && (this.majorVersion = parseInt(this.version[1], 10), this.minorVersion = parseInt(this.version[2], 10)), this.engineVersion && (this.engineMajorVersion = parseInt(this.engineVersion[1], 10)), this.isChromeOS = !this.isMobile && /CrOS/.test(i), this.ismacOS = !this.isMobile && /macintosh/.test(i), this.ismacOS) {
                        var s = i.match(r);
                        s[1] && (this.macOSMajorVersion = parseInt(s[1], 10)), s[2] && (this.macOSMinorVersion = parseInt(s[2], 10))
                    }
                    this.isAtLeastMojave = this.ismacOS && this.macOSMajorVersion >= 10 && this.macOSMinorVersion >= 14, this.isAtLeastMojavePlusOne = this.ismacOS && this.macOSMajorVersion >= 10 && this.macOSMinorVersion >= 15, this.isLinux = !this.isMobile && /linux/.test(i), this.isTizen = /tizen/.test(i), this.isWebOS = /web0s|webos/.test(i), this.isWindows = !this.isMobile && /windows/.test(i)
                }
                return r(e, [{
                    key: "couldSupportScheme",
                    value: function(e) {
                        var t = !1;
                        switch (e) {
                            case "apple-music":
                                t = this.isAndroid;
                                break;
                            case "itms":
                                t = this.ismacOS || this.isWindows;
                                break;
                            case "itms-books":
                                t = this.ismacOS || this.isiOS;
                                break;
                            case "itms-itunesu":
                                t = this.isiOS;
                                break;
                            case "itms-apps":
                            case "itms-podcast":
                            case "itms-messages":
                            case "itms-watch":
                            case "music":
                                t = this.isiOS;
                                break;
                            case "macappstore":
                                t = this.ismacOS;
                                break;
                            case "video":
                                t = this.isAtLeastMojavePlusOne
                        }
                        return t
                    }
                }]), e
            }();
        i["default"] = s
    }, {}],
    2: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("../helpers/url"),
            o = {
                app: ["8"],
                audiobook: ["11", "13"],
                book: ["11", "13"],
                "mac-app": ["12"],
                podcast: ["2"]
            },
            a = {
                audiobook: /\/audiobook\//,
                book: /\/book\//,
                course: /\/course\//,
                "mac-app": /\/mac-app\//,
                story: /\/story\//,
                music: /\/(album|artist|music-video|show|episode)\//,
                podcast: /\/podcast\//,
                tv: /\/(episode|movie)\//
            },
            l = function() {
                function e(t) {
                    n(this, e);
                    var i = (0, s.parseURL)(t),
                        r = i.pathname,
                        o = i.protocol,
                        a = i.search;
                    this.pathname = r, this.protocol = o, this.query = (0, s.parseSearch)(a), this.url = t
                }
                return r(e, null, [{
                    key: "forURL",
                    value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            i = t.isAndroid || !1,
                            n = t.isMobile || !1,
                            r = t.isAtLeastMojave || !1,
                            s = t.isAtLeastMojavePlusOne || !1,
                            o = new this(e);
                        if (!/https?:/.test(o.protocol)) return o.protocol;
                        if (n) {
                            if (o.isApps) return "itms-apps";
                            if (o.isWatch) return "itms-watch";
                            if (o.isPodcast) return "itms-podcast";
                            if (o.isMessage) return "itms-messages";
                            if (o.isMusic) return i ? "apple-music" : "music"
                        }
                        if (s) {
                            if (o.isPodcast) return "podcast";
                            if (o.isAudiobook) return "itms-books";
                            if (o.isTV) return "video"
                        }
                        return o.isBook ? "itms-books" : o.isCobalt ? "itms-itunesu" : o.isMacApp ? "macappstore" : o.isStory && r ? "macappstore" : "itms"
                    }
                }, {
                    key: "isApple",
                    value: function(e) {
                        return e && null !== e.match(/^(?:itms(?:-.*)?|macappstore|(?:apple-)?music)s?(:|$)/im)
                    }
                }]), r(e, [{
                    key: "_is",
                    value: function(e) {
                        var t = this.query.app && this.query.app === e,
                            i = !1,
                            n = !1;
                        return o[e] && (i = o[e].indexOf(this.query.mt) !== -1), a[e] && (n = a[e].test(this.pathname)), t || i || n
                    }
                }, {
                    key: "isApps",
                    get: function() {
                        return o.app.indexOf(this.query.mt) !== -1 && !this.isMessages && !this.isWatch
                    }
                }, {
                    key: "isAudiobook",
                    get: function() {
                        return this._is("audiobook")
                    }
                }, {
                    key: "isBook",
                    get: function() {
                        return this._is("book")
                    }
                }, {
                    key: "isCobalt",
                    get: function() {
                        return this._is("course")
                    }
                }, {
                    key: "isMacApp",
                    get: function() {
                        return this._is("mac-app")
                    }
                }, {
                    key: "isStory",
                    get: function() {
                        return this._is("story")
                    }
                }, {
                    key: "isMessages",
                    get: function() {
                        return this._is("messages")
                    }
                }, {
                    key: "isMusic",
                    get: function() {
                        return this._is("music")
                    }
                }, {
                    key: "isPodcast",
                    get: function() {
                        return this._is("podcast")
                    }
                }, {
                    key: "isTV",
                    get: function() {
                        return this._is("tv")
                    }
                }, {
                    key: "isWatch",
                    get: function() {
                        return this._is("watch")
                    }
                }]), e
            }();
        i["default"] = l
    }, {
        "../helpers/url": 4
    }],
    3: [function(e, t, i) {
        "use strict";

        function n() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? s : arguments[0],
                t = arguments.length <= 1 || void 0 === arguments[1] ? document.body : arguments[1],
                i = e;
            return "string" == typeof e && (i = document.createElement("iframe"), i.id = e, i.style.display = "none"), t.appendChild(i), i
        }

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? s : arguments[0],
                t = arguments.length <= 1 || void 0 === arguments[1] ? document.body : arguments[1],
                i = e;
            "string" == typeof e && (i = document.getElementById(e)), i && t.removeChild(i)
        }
        i.appendFrame = n, i.removeFrame = r;
        var s = "client-detect-frame";
        i.FRAME_ID = s
    }, {}],
    4: [function(e, t, i) {
        "use strict";

        function n() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                t = {},
                i = e.match(o) || [];
            return i.forEach(function(e) {
                var i = e.split("="),
                    n = s(i, 2),
                    r = n[0],
                    o = n[1];
                t[r] = o
            }), t
        }

        function r(e) {
            var t = document.createElement("a");
            return t.href = e, {
                hash: t.hash,
                hostname: t.hostname,
                pathname: t.pathname,
                protocol: t.protocol,
                search: t.search
            }
        }
        var s = function() {
            function e(e, t) {
                var i = [],
                    n = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0);
                } catch (l) {
                    r = !0, s = l
                } finally {
                    try {
                        !n && a["return"] && a["return"]()
                    } finally {
                        if (r) throw s
                    }
                }
                return i
            }
            return function(t, i) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        i.parseSearch = n, i.parseURL = r;
        var o = /([^?&=]+)=?([^&]*)/g
    }, {}],
    5: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            e.ClientDetect = m
        }
        var s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }();
        i.registerGlobal = r;
        var o = e("./detect/browser"),
            a = e("./detect/scheme"),
            l = e("./launch"),
            c = 1,
            u = 0,
            h = -1,
            m = function() {
                function e() {
                    n(this, e)
                }
                return s(e, null, [{
                    key: "browser",
                    value: function(e) {
                        return new o["default"](e)
                    }
                }, {
                    key: "couldHaveAppStore",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("itms-apps")
                    }
                }, {
                    key: "couldHaveBookStore",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("itms-books")
                    }
                }, {
                    key: "couldHaveiTunes",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("itms")
                    }
                }, {
                    key: "couldHaveiTunesU",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("itms-itunesu")
                    }
                }, {
                    key: "couldHaveMacAppStore",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("macappstore")
                    }
                }, {
                    key: "couldHaveMessages",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("itms-messages")
                    }
                }, {
                    key: "couldHaveMusic",
                    value: function() {
                        var e = new o["default"];
                        return e.couldSupportScheme("music") || e.couldSupportScheme("apple-music")
                    }
                }, {
                    key: "couldHavePodcasts",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("itms-podcast")
                    }
                }, {
                    key: "couldHaveTV",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("video")
                    }
                }, {
                    key: "couldHaveWatch",
                    value: function() {
                        return (new o["default"]).couldSupportScheme("itms-watch")
                    }
                }, {
                    key: "schemeForURL",
                    value: function(e, t) {
                        var i = a["default"].forURL(e, t),
                            n = t.isAndroid ? /^https?/ : /^http/;
                        return {
                            scheme: i,
                            href: e.replace(n, i)
                        }
                    }
                }, {
                    key: "launchClient",
                    value: function(t, i) {
                        function n() {
                            i(c, s, a)
                        }

                        function r() {
                            i(u, s, a)
                        }
                        var s = new o["default"],
                            a = t,
                            m = void 0;
                        if (/^https?:\/\//.test(t)) {
                            var d = e.schemeForURL(t, s);
                            m = d.scheme, a = d.href
                        }
                        return "function" != typeof i ? window.location.href = a : (navigator.msLaunchUri ? navigator.msLaunchUri(a, n, r) : s.isChrome ? l["default"].chrome(a, n, r) : s.isFirefox ? l["default"].firefox(a, n, r) : s.isIE ? l["default"].ie(a, n, r) : s.isiOS ? l["default"].ios(a, n, r) : s.ismacOS && s.isSafari ? l["default"].mac(a, n, r) : l["default"]["default"](a, function() {
                            i(h, s, a)
                        }), {
                            scheme: m,
                            href: a
                        })
                    }
                }]), e
            }();
        i.ClientDetect = m, i["default"] = m
    }, {
        "./detect/browser": 1,
        "./detect/scheme": 2,
        "./launch": 10
    }],
    6: [function(e, t, i) {
        "use strict";
        i["default"] = function(e) {
            function t() {
                window.clearTimeout(r), window.removeEventListener("blur", t), i()
            }
            var i = arguments.length <= 1 || void 0 === arguments[1] ? Function() : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? Function() : arguments[2];
            window.addEventListener("blur", t);
            var r = window.setTimeout(function() {
                window.removeEventListener("blur", t), n()
            }, 250);
            try {
                window.location.href = e
            } catch (s) {
                n()
            }
        }
    }, {}],
    7: [function(e, t, i) {
        "use strict";
        var n = e("../helpers/dom");
        i["default"] = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? Function() : arguments[1],
                i = (0, n.appendFrame)();
            i.contentWindow.location.href = e, window.setTimeout(function() {
                (0, n.removeFrame)(i), t()
            }, 250)
        }
    }, {
        "../helpers/dom": 3
    }],
    8: [function(e, t, i) {
        "use strict";
        var n = e("../helpers/dom");
        i["default"] = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? Function() : arguments[1],
                i = arguments.length <= 2 || void 0 === arguments[2] ? Function() : arguments[2],
                r = (0, n.appendFrame)();
            try {
                r.contentWindow.location.href = e, t()
            } catch (s) {
                i()
            } finally {
                (0, n.removeFrame)()
            }
        }
    }, {
        "../helpers/dom": 3
    }],
    9: [function(e, t, i) {
        "use strict";
        var n = "client-detect-popup";
        i.POPUP_ID = n, i["default"] = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? Function() : arguments[1],
                i = arguments.length <= 2 || void 0 === arguments[2] ? Function() : arguments[2],
                r = "about:blank",
                s = window.open("", n, "height=0,width=0");
            s.location.href = e;
            try {
                ! function() {
                    s.location.href = r, t();
                    var e = window.setInterval(function() {
                        s.close(), s.closed && window.clearInterval(e)
                    }, 250)
                }()
            } catch (o) {
                s = window.open(r, n), s.close(), i()
            }
        }
    }, {}],
    10: [function(e, t, i) {
        "use strict";
        var n = e("./default"),
            r = e("./chrome"),
            s = e("./firefox"),
            o = e("./ie"),
            a = e("./ios"),
            l = e("./mac");
        i["default"] = {
            chrome: r["default"],
            firefox: s["default"],
            ie: o["default"],
            ios: a["default"],
            mac: l["default"],
            "default": n["default"]
        }
    }, {
        "./chrome": 6,
        "./default": 7,
        "./firefox": 8,
        "./ie": 9,
        "./ios": 11,
        "./mac": 12
    }],
    11: [function(e, t, i) {
        "use strict";
        i["default"] = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? Function() : arguments[1],
                i = arguments.length <= 2 || void 0 === arguments[2] ? Function() : arguments[2];
            try {
                top.window.location.href = e, t()
            } catch (n) {
                i()
            }
        }
    }, {}],
    12: [function(e, t, i) {
        "use strict";
        var n = e("../detect/scheme"),
            r = e("../helpers/dom");
        i["default"] = function(e) {
            function t(e) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? i : arguments[1];
                window.clearTimeout(a), window.removeEventListener("blur", t), (0, r.removeFrame)(o), n()
            }
            var i = arguments.length <= 1 || void 0 === arguments[1] ? Function() : arguments[1],
                s = arguments.length <= 2 || void 0 === arguments[2] ? Function() : arguments[2],
                o = (0, r.appendFrame)();
            if (o.contentWindow.location.href = e, n["default"].isApple(e)) return i();
            window.addEventListener("blur", t);
            var a = window.setTimeout(function() {
                t(null, s)
            }, 50)
        }
    }, {
        "../detect/scheme": 2,
        "../helpers/dom": 3
    }],
    13: [function(e, t, i) {
        "use strict";
        var n = e("./helpers/TabManager"),
            r = e("./helpers/hideSiblingElements"),
            s = e("./helpers/showSiblingElements"),
            o = function(e, t) {
                t = t || {}, this._tabbables = null, this._excludeHidden = t.excludeHidden, this._firstTabbableElement = t.firstFocusElement, this._lastTabbableElement = null, this._relatedTarget = null, this.el = e, this._handleOnFocus = this._handleOnFocus.bind(this)
            },
            a = o.prototype;
        a.start = function() {
            this.updateTabbables(), r(this.el, null, this._excludeHidden), this._firstTabbableElement ? this.el.contains(document.activeElement) || this._firstTabbableElement.focus() : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."), this._relatedTarget = document.activeElement, document.addEventListener("focus", this._handleOnFocus, !0)
        }, a.stop = function() {
            s(this.el), document.removeEventListener("focus", this._handleOnFocus, !0)
        }, a.updateTabbables = function() {
            this._tabbables = n.getTabbableElements(this.el, this._excludeHidden), this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0], this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
        }, a._handleOnFocus = function(e) {
            if (this.el.contains(e.target)) this._relatedTarget = e.target;
            else {
                if (e.preventDefault(), this.updateTabbables(), this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget) return this._firstTabbableElement.focus(), void(this._relatedTarget = this._firstTabbableElement);
                if (this._relatedTarget === this._firstTabbableElement) return this._lastTabbableElement.focus(), void(this._relatedTarget = this._lastTabbableElement)
            }
        }, a.destroy = function() {
            this.stop(), this.el = null, this._tabbables = null, this._firstTabbableElement = null, this._lastTabbableElement = null, this._relatedTarget = null, this._handleOnFocus = null
        }, t.exports = o
    }, {
        "./helpers/TabManager": 15,
        "./helpers/hideSiblingElements": 17,
        "./helpers/showSiblingElements": 21
    }],
    14: [function(e, t, i) {
        "use strict";

        function n() {
            this._createElemnts(), this._bindEvents()
        }
        var r = n.prototype;
        r._bindEvents = function() {
            this._onResize = this._resize.bind(this)
        }, r._createElemnts = function() {
            this.span = document.createElement("span");
            var e = this.span.style;
            e.visibility = "hidden", e.position = "absolute", e.top = "0", e.bottom = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", this.iframe = document.createElement("iframe");
            var t = this.iframe.style;
            t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe), document.body.appendChild(this.span)
        }, r.detect = function(e) {
            this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
        }, r._resize = function(e) {
            this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize"))
        }, r.remove = function() {
            this.isDetecting && (this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
        }, r.destroy = function() {
            this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null
        }, t.exports = new n
    }, {}],
    15: [function(e, t, i) {
        "use strict";
        var n = e("./../maps/focusableElement"),
            r = function() {
                this.focusableSelectors = n.join(",")
            },
            s = r.prototype;
        s.isFocusableElement = function(e, t, i) {
            if (t && !this._isDisplayed(e)) return !1;
            var r = e.nodeName.toLowerCase(),
                s = n.indexOf(r) > -1;
            return "a" === r || (s ? !e.disabled : !e.contentEditable || (i = i || parseFloat(e.getAttribute("tabindex")), !isNaN(i)))
        }, s.isTabbableElement = function(e, t) {
            if (t && !this._isDisplayed(e)) return !1;
            var i = e.getAttribute("tabindex");
            return i = parseFloat(i), isNaN(i) ? this.isFocusableElement(e, t, i) : i >= 0
        }, s._isDisplayed = function(e) {
            var t = e.getBoundingClientRect();
            return (0 !== t.top || 0 !== t.left || 0 !== t.width || 0 !== t.height) && "hidden" !== window.getComputedStyle(e).visibility
        }, s.getTabbableElements = function(e, t) {
            for (var i = e.querySelectorAll(this.focusableSelectors), n = i.length, r = [], s = 0; s < n; s++) this.isTabbableElement(i[s], t) && r.push(i[s]);
            return r
        }, s.getFocusableElements = function(e, t) {
            for (var i = e.querySelectorAll(this.focusableSelectors), n = i.length, r = [], s = 0; s < n; s++) this.isFocusableElement(i[s], t) && r.push(i[s]);
            return r
        }, t.exports = new r
    }, {
        "./../maps/focusableElement": 23
    }],
    16: [function(e, t, i) {
        "use strict";
        var n = e("./setAttributes"),
            r = e("./../maps/ariaMap"),
            s = e("./TabManager"),
            o = "data-original-",
            a = "tabindex",
            l = function(e, t) {
                var i = e.getAttribute(o + t);
                i || (i = e.getAttribute(t) || "", n(e, o + t, i))
            };
        t.exports = function(e, t) {
            if (s.isFocusableElement(e, t)) l(e, a), n(e, a, -1);
            else
                for (var i = s.getTabbableElements(e, t), o = i.length; o--;) l(i[o], a), n(i[o], a, -1);
            l(e, r.HIDDEN), n(e, r.HIDDEN, !0)
        }
    }, {
        "./../maps/ariaMap": 22,
        "./TabManager": 15,
        "./setAttributes": 19
    }],
    17: [function(e, t, i) {
        "use strict";
        var n = e("./hide");
        t.exports = function r(e, t, i) {
            t = t || document.body;
            for (var s = e, o = e; s = s.previousElementSibling;) n(s, i);
            for (; o = o.nextElementSibling;) n(o, i);
            e.parentElement && e.parentElement !== t && r(e.parentElement)
        }
    }, {
        "./hide": 16
    }],
    18: [function(e, t, i) {
        "use strict";
        var n = function(e, t) {
                if ("string" == typeof t)
                    for (var i = t.split(/\s+/), n = 0; n < i.length; n++) e.getAttribute(i[n]) && e.removeAttribute(i[n])
            },
            r = function(e, t) {
                if (e.length)
                    for (var i = 0; i < e.length; i++) n(e[i], t);
                else n(e, t)
            };
        t.exports = r
    }, {}],
    19: [function(e, t, i) {
        "use strict";
        var n = function(e, t, i) {
                e && 1 === e.nodeType && e.setAttribute(t, i)
            },
            r = function(e, t, i) {
                if ("string" != typeof i && (i = i.toString()), e)
                    if (e.length)
                        for (var r = 0; r < e.length; r++) n(e[r], t, i);
                    else n(e, t, i)
            };
        t.exports = r
    }, {}],
    20: [function(e, t, i) {
        "use strict";
        var n = e("./removeAttributes"),
            r = e("./setAttributes"),
            s = e("./../maps/ariaMap"),
            o = "data-original-",
            a = "tabindex",
            l = function(e, t) {
                var i = e.getAttribute(o + t);
                "string" == typeof i && (i.length ? r(e, t, i) : n(e, t), n(e, o + t))
            };
        t.exports = function(e) {
            n(e, a + " " + s.HIDDEN), l(e, a), l(e, s.HIDDEN);
            for (var t = e.querySelectorAll("[" + o + a + "]"), i = t.length; i--;) l(t[i], a)
        }
    }, {
        "./../maps/ariaMap": 22,
        "./removeAttributes": 18,
        "./setAttributes": 19
    }],
    21: [function(e, t, i) {
        "use strict";
        var n = e("./show");
        t.exports = function r(e, t) {
            t = t || document.body;
            for (var i = e, s = e; i = i.previousElementSibling;) n(i);
            for (; s = s.nextElementSibling;) n(s);
            e.parentElement && e.parentElement !== t && r(e.parentElement)
        }
    }, {
        "./show": 20
    }],
    22: [function(e, t, i) {
        "use strict";
        t.exports = {
            AUTOCOMPLETE: "aria-autocomplete",
            CHECKED: "aria-checked",
            DISABLED: "aria-disabled",
            EXPANDED: "aria-expanded",
            HASPOPUP: "aria-haspopup",
            HIDDEN: "aria-hidden",
            INVALID: "aria-invalid",
            LABEL: "aria-label",
            LEVEL: "aria-level",
            MULTILINE: "aria-multiline",
            MULTISELECTABLE: "aria-multiselectable",
            ORIENTATION: "aria-orientation",
            PRESSED: "aria-pressed",
            READONLY: "aria-readonly",
            REQUIRED: "aria-required",
            SELECTED: "aria-selected",
            SORT: "aria-sort",
            VALUEMAX: "aria-valuemax",
            VALUEMIN: "aria-valuemin",
            VALUENOW: "aria-valuenow",
            VALUETEXT: "aria-valuetext",
            ATOMIC: "aria-atomic",
            BUSY: "aria-busy",
            LIVE: "aria-live",
            RELEVANT: "aria-relevant",
            DROPEFFECT: "aria-dropeffect",
            GRABBED: "aria-grabbed",
            ACTIVEDESCENDANT: "aria-activedescendant",
            CONTROLS: "aria-controls",
            DESCRIBEDBY: "aria-describedby",
            FLOWTO: "aria-flowto",
            LABELLEDBY: "aria-labelledby",
            OWNS: "aria-owns",
            POSINSET: "aria-posinset",
            SETSIZE: "aria-setsize"
        }
    }, {}],
    23: [function(e, t, i) {
        "use strict";
        t.exports = ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "*[tabindex]", "*[contenteditable]"]
    }, {}],
    24: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.slice"), e("@marcom/ac-polyfills/Element/prototype.classList");
        var n = e("./className/add");
        t.exports = function() {
            var e, t = Array.prototype.slice.call(arguments),
                i = t.shift(t);
            if (i.classList && i.classList.add) return void i.classList.add.apply(i.classList, t);
            for (e = 0; e < t.length; e++) n(i, t[e])
        }
    }, {
        "./className/add": 25,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    25: [function(e, t, i) {
        "use strict";
        var n = e("./contains");
        t.exports = function(e, t) {
            n(e, t) || (e.className += " " + t)
        }
    }, {
        "./contains": 26
    }],
    26: [function(e, t, i) {
        "use strict";
        var n = e("./getTokenRegExp");
        t.exports = function(e, t) {
            return n(t).test(e.className)
        }
    }, {
        "./getTokenRegExp": 27
    }],
    27: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            return new RegExp("(\\s|^)" + e + "(\\s|$)")
        }
    }, {}],
    28: [function(e, t, i) {
        "use strict";
        var n = e("./contains"),
            r = e("./getTokenRegExp");
        t.exports = function(e, t) {
            n(e, t) && (e.className = e.className.replace(r(t), "$1").trim())
        }
    }, {
        "./contains": 26,
        "./getTokenRegExp": 27
    }],
    29: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.slice"), e("@marcom/ac-polyfills/Element/prototype.classList");
        var n = e("./className/remove");
        t.exports = function() {
            var e, t = Array.prototype.slice.call(arguments),
                i = t.shift(t);
            if (i.classList && i.classList.remove) return void i.classList.remove.apply(i.classList, t);
            for (e = 0; e < t.length; e++) n(i, t[e])
        }
    }, {
        "./className/remove": 28,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    30: [function(e, t, i) {
        "use strict";
        t.exports = {
            addEventListener: e("./addEventListener"),
            dispatchEvent: e("./dispatchEvent"),
            removeEventListener: e("./removeEventListener")
        }
    }, {
        "./addEventListener": 31,
        "./dispatchEvent": 32,
        "./removeEventListener": 33
    }],
    31: [function(e, t, i) {
        "use strict";
        var n = e("./shared/getEventType");
        t.exports = function(e, t, i, r) {
            t = n(e, t), r = r || !1, e.addEventListener(t, i, r)
        }
    }, {
        "./shared/getEventType": 34
    }],
    32: [function(e, t, i) {
        "use strict";
        var n = e("./shared/getEventType");
        t.exports = function(e, t, i) {
            var r;
            t = n(e, t), r = i ? new CustomEvent(t, i) : new CustomEvent(t), e.dispatchEvent(r)
        }
    }, {
        "./shared/getEventType": 34
    }],
    33: [function(e, t, i) {
        "use strict";
        var n = e("./shared/getEventType");
        t.exports = function(e, t, i, r) {
            t = n(e, t), r = r || !1, e.removeEventListener(t, i, r)
        }
    }, {
        "./shared/getEventType": 34
    }],
    34: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-prefixer/getEventType");
        t.exports = function(e, t) {
            var i, r;
            return i = "tagName" in e ? e.tagName : e === window ? "window" : "document", r = n(t, i), r || t
        }
    }, {
        "@marcom/ac-prefixer/getEventType": 94
    }],
    35: [function(e, t, i) {
        "use strict";
        t.exports = function(e, t) {
            var i;
            return t ? (i = e.getBoundingClientRect(), {
                width: i.width,
                height: i.height
            }) : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
    }, {}],
    36: [function(e, t, i) {
        "use strict";
        var n = e("./getDimensions"),
            r = e("./getScrollX"),
            s = e("./getScrollY");
        t.exports = function(e, t) {
            var i, o, a, l;
            if (t) return i = e.getBoundingClientRect(), o = r(), a = s(), {
                top: i.top + a,
                right: i.right + o,
                bottom: i.bottom + a,
                left: i.left + o
            };
            for (l = n(e, t), i = {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: l.width,
                    height: l.height
                }; e = e.offsetParent;) i.top += e.offsetTop, i.left += e.offsetLeft;
            return {
                top: i.top,
                right: i.left + i.width,
                bottom: i.top + i.height,
                left: i.left
            }
        }
    }, {
        "./getDimensions": 35,
        "./getScrollX": 37,
        "./getScrollY": 38
    }],
    37: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            return e = e || window, e === window ? window.scrollX || window.pageXOffset : e.scrollLeft
        }
    }, {}],
    38: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            return e = e || window, e === window ? window.scrollY || window.pageYOffset : e.scrollTop
        }
    }, {}],
    39: [function(e, t, i) {
        "use strict";
        t.exports = 8
    }, {}],
    40: [function(e, t, i) {
        "use strict";
        t.exports = 11
    }, {}],
    41: [function(e, t, i) {
        "use strict";
        t.exports = 1
    }, {}],
    42: [function(e, t, i) {
        "use strict";
        t.exports = 3
    }, {}],
    43: [function(e, t, i) {
        "use strict";
        var n = e("../isNode");
        t.exports = function(e, t) {
            return !!n(e) && ("number" == typeof t ? e.nodeType === t : t.indexOf(e.nodeType) !== -1)
        }
    }, {
        "../isNode": 46
    }],
    44: [function(e, t, i) {
        "use strict";
        var n = e("./isNodeType"),
            r = e("../COMMENT_NODE"),
            s = e("../DOCUMENT_FRAGMENT_NODE"),
            o = e("../ELEMENT_NODE"),
            a = e("../TEXT_NODE"),
            l = [o, a, r, s],
            c = " must be an Element, TextNode, Comment, or Document Fragment",
            u = [o, a, r],
            h = " must be an Element, TextNode, or Comment",
            m = [o, s],
            d = " must be an Element, or Document Fragment",
            f = " must have a parentNode";
        t.exports = {
            parentNode: function(e, t, i, r) {
                if (r = r || "target", (e || t) && !n(e, m)) throw new TypeError(i + ": " + r + d)
            },
            childNode: function(e, t, i, r) {
                if (r = r || "target", (e || t) && !n(e, u)) throw new TypeError(i + ": " + r + h)
            },
            insertNode: function(e, t, i, r) {
                if (r = r || "node", (e || t) && !n(e, l)) throw new TypeError(i + ": " + r + c)
            },
            hasParentNode: function(e, t, i) {
                if (i = i || "target", !e.parentNode) throw new TypeError(t + ": " + i + f)
            }
        }
    }, {
        "../COMMENT_NODE": 39,
        "../DOCUMENT_FRAGMENT_NODE": 40,
        "../ELEMENT_NODE": 41,
        "../TEXT_NODE": 42,
        "./isNodeType": 43
    }],
    45: [function(e, t, i) {
        "use strict";
        var n = e("./internal/isNodeType"),
            r = e("./ELEMENT_NODE");
        t.exports = function(e) {
            return n(e, r)
        }
    }, {
        "./ELEMENT_NODE": 41,
        "./internal/isNodeType": 43
    }],
    46: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }, {}],
    47: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        t.exports = function(e) {
            return !!e && ("number" == typeof e.length && (!!("object" !== n(e[0]) || e[0] && e[0].nodeType) && r.test(Object.prototype.toString.call(e))))
        }
    }, {}],
    48: [function(e, t, i) {
        "use strict";
        var n = e("./internal/validate");
        t.exports = function(e) {
            return n.childNode(e, !0, "remove"), e.parentNode ? e.parentNode.removeChild(e) : e
        }
    }, {
        "./internal/validate": 44
    }],
    49: [function(e, t, i) {
        "use strict";
        var n = e("./ac-element-engagement/ElementEngagement");
        t.exports = new n, t.exports.ElementEngagement = n
    }, {
        "./ac-element-engagement/ElementEngagement": 50
    }],
    50: [function(e, t, i) {
        "use strict";
        var n, r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = {
                defaults: e("@marcom/ac-object/defaults"),
                extend: e("@marcom/ac-object/extend")
            },
            o = e("@marcom/ac-element-tracker").ElementTracker,
            a = {
                timeToEngage: 500,
                inViewThreshold: .75,
                stopOnEngaged: !0
            },
            l = {
                thresholdEnterTime: 0,
                thresholdExitTime: 0,
                inThreshold: !1,
                engaged: !1,
                tracking: !0
            },
            c = function(e) {
                o.call(this, null, e), r.call(this), this._thresholdEnter = this._thresholdEnter.bind(this), this._thresholdExit = this._thresholdExit.bind(this), this._enterView = this._enterView.bind(this), this._exitView = this._exitView.bind(this)
            };
        n = c.prototype = Object.create(o.prototype), n = s.extend(n, r.prototype), n._decorateTrackedElement = function(e, t) {
            var i;
            i = s.defaults(a, t || {}), s.extend(e, i), s.extend(e, l)
        }, n._attachElementListeners = function(e) {
            e.on("thresholdenter", this._thresholdEnter, this), e.on("thresholdexit", this._thresholdExit, this), e.on("enterview", this._enterView, this), e.on("exitview", this._exitView, this)
        }, n._removeElementListeners = function(e) {
            e.off("thresholdenter", this._thresholdEnter), e.off("thresholdexit", this._thresholdExit), e.off("enterview", this._enterView), e.off("exitview", this._exitView)
        }, n._attachAllElementListeners = function() {
            this.elements.forEach(function(e) {
                e.stopOnEngaged ? e.engaged || this._attachElementListeners(e) : this._attachElementListeners(e)
            }, this)
        }, n._removeAllElementListeners = function() {
            this.elements.forEach(function(e) {
                this._removeElementListeners(e)
            }, this)
        }, n._elementInViewPastThreshold = function(e) {
            var t = !1;
            return t = e.pixelsInView === this._windowHeight || e.percentInView > e.inViewThreshold
        }, n._ifInView = function(e, t) {
            var i = e.inThreshold;
            o.prototype._ifInView.apply(this, arguments), !i && this._elementInViewPastThreshold(e) && (e.inThreshold = !0, e.trigger("thresholdenter", e), "number" == typeof e.timeToEngage && e.timeToEngage >= 0 && (e.engagedTimeout = window.setTimeout(this._engaged.bind(this, e), e.timeToEngage)))
        }, n._ifAlreadyInView = function(e) {
            var t = e.inThreshold;
            o.prototype._ifAlreadyInView.apply(this, arguments), t && !this._elementInViewPastThreshold(e) && (e.inThreshold = !1, e.trigger("thresholdexit", e), e.engagedTimeout && (window.clearTimeout(e.engagedTimeout), e.engagedTimeout = null))
        }, n._engaged = function(e) {
            e.engagedTimeout = null, this._elementEngaged(e), e.trigger("engaged", e), this.trigger("engaged", e)
        }, n._thresholdEnter = function(e) {
            e.thresholdEnterTime = Date.now(), e.thresholdExitTime = 0, this.trigger("thresholdenter", e)
        }, n._thresholdExit = function(e) {
            e.thresholdExitTime = Date.now(), this.trigger("thresholdexit", e)
        }, n._enterView = function(e) {
            this.trigger("enterview", e)
        }, n._exitView = function(e) {
            this.trigger("exitview", e)
        }, n._elementEngaged = function(e) {
            e.engaged = !0, e.stopOnEngaged && this.stop(e)
        }, n.stop = function(e) {
            this.tracking && !e && (this._removeAllElementListeners(), o.prototype.stop.call(this)), e && e.tracking && (e.tracking = !1, this._removeElementListeners(e), this.removeElement(e))
        }, n.start = function(e) {
            e || this._attachAllElementListeners(), e && !e.tracking && (e.stopOnEngaged ? e.engaged || (e.tracking = !0, this._attachElementListeners(e)) : (e.tracking = !0, this._attachElementListeners(e))), this.tracking ? (this.refreshAllElementMetrics(), this.refreshAllElementStates()) : o.prototype.start.call(this)
        }, n.addElement = function(e, t) {
            t = t || {};
            var i = o.prototype.addElement.call(this, e, t.useRenderedPosition);
            return this._decorateTrackedElement(i, t), i
        }, n.addElements = function(e, t) {
            [].forEach.call(e, function(e) {
                this.addElement(e, t)
            }, this)
        }, t.exports = c
    }, {
        "@marcom/ac-element-tracker": 51,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/defaults": 92,
        "@marcom/ac-object/extend": 93
    }],
    51: [function(e, t, i) {
        "use strict";
        var n = e("./ac-element-tracker/ElementTracker"),
            r = e("./ac-element-tracker/TrackedElement");
        t.exports = new n, t.exports.ElementTracker = n, t.exports.TrackedElement = r
    }, {
        "./ac-element-tracker/ElementTracker": 52,
        "./ac-element-tracker/TrackedElement": 53
    }],
    52: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            this.options = a.clone(c), this.options = "object" === ("undefined" == typeof t ? "undefined" : r(t)) ? a.extend(this.options, t) : this.options, this._scrollY = this._getScrollY(), this._windowHeight = this._getWindowHeight(), this.tracking = !1, this.elements = [], e && (Array.isArray(e) || s.isNodeList(e) || s.isElement(e)) && this.addElements(e), this.refreshAllElementStates = this.refreshAllElementStates.bind(this), this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this), this.options.autoStart && this.start()
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = {
                isNodeList: e("@marcom/ac-dom-nodes/isNodeList"),
                isElement: e("@marcom/ac-dom-nodes/isElement")
            },
            o = {
                getDimensions: e("@marcom/ac-dom-metrics/getDimensions"),
                getPagePosition: e("@marcom/ac-dom-metrics/getPagePosition"),
                getScrollY: e("@marcom/ac-dom-metrics/getScrollY")
            },
            a = {
                clone: e("@marcom/ac-object/clone"),
                extend: e("@marcom/ac-object/extend")
            },
            l = e("./TrackedElement"),
            c = {
                autoStart: !1,
                useRenderedPosition: !1
            },
            u = n.prototype;
        u.destroy = function() {
            var e, t;
            for (this.stop(), e = 0, t = this.elements.length; e < t; e++) this.elements[e].destroy();
            this.elements = null, this.options = null
        }, u._registerTrackedElements = function(e) {
            var t = [].concat(e);
            t.forEach(function(e) {
                this._elementInDOM(e.element) && (e.offsetTop = e.element.offsetTop, this.elements.push(e))
            }, this)
        }, u._elementInDOM = function(e) {
            var t = !1,
                i = document.getElementsByTagName("body")[0];
            return s.isElement(e) && i.contains(e) && (t = !0), t
        }, u._elementPercentInView = function(e) {
            return e.pixelsInView / e.height
        }, u._elementPixelsInView = function(e) {
            var t = e.top - this._scrollY,
                i = e.bottom - this._scrollY;
            return t > this._windowHeight || i < 0 ? 0 : Math.min(i, this._windowHeight) - Math.max(t, 0)
        }, u._ifInView = function(e, t) {
            t || e.trigger("enterview", e)
        }, u._ifAlreadyInView = function(e) {
            e.inView || e.trigger("exitview", e)
        }, u.addElements = function(e, t) {
            "undefined" == typeof t && (t = this.options.useRenderedPosition), e = s.isNodeList(e) ? Array.prototype.slice.call(e) : [].concat(e);
            for (var i = 0, n = e.length; i < n; i++) this.addElement(e[i], t)
        }, u.addElement = function(e, t) {
            var i = null;
            if ("undefined" == typeof t && (t = this.options.useRenderedPosition), !s.isElement(e)) throw new TypeError("ElementTracker: " + e + " is not a valid DOM element");
            return i = new l(e, t), this._registerTrackedElements(i), this.refreshElementMetrics(i), this.refreshElementState(i), i
        }, u.removeElement = function(e) {
            var t, i = [];
            this.elements.forEach(function(t, n) {
                t !== e && t.element !== e || i.push(n)
            }), t = this.elements.filter(function(e, t) {
                return i.indexOf(t) < 0
            }), this.elements = t
        }, u.start = function() {
            this.tracking === !1 && (this.tracking = !0, window.addEventListener("resize", this.refreshAllElementMetrics), window.addEventListener("orientationchange", this.refreshAllElementMetrics), window.addEventListener("scroll", this.refreshAllElementStates), this.refreshAllElementMetrics())
        }, u.stop = function() {
            this.tracking === !0 && (this.tracking = !1, window.removeEventListener("resize", this.refreshAllElementMetrics), window.removeEventListener("orientationchange", this.refreshAllElementMetrics), window.removeEventListener("scroll", this.refreshAllElementStates))
        }, u.refreshAllElementMetrics = function(e, t) {
            "number" != typeof e && (e = this._getScrollY()), "number" != typeof t && (t = this._getWindowHeight()), this._scrollY = e, this._windowHeight = t, this.elements.forEach(this.refreshElementMetrics, this)
        }, u.refreshElementMetrics = function(e) {
            if (!e.isActive) return e;
            var t = o.getDimensions(e.element, e.useRenderedPosition),
                i = o.getPagePosition(e.element, e.useRenderedPosition);
            return e = a.extend(e, t, i), this.refreshElementState(e)
        }, u.refreshAllElementStates = function(e) {
            "number" != typeof e && (e = this._getScrollY()), this._scrollY = e, this.elements.forEach(this.refreshElementState, this)
        }, u.refreshElementState = function(e) {
            if (!e.isActive) return e;
            var t = e.inView;
            return e.pixelsInView = this._elementPixelsInView(e), e.percentInView = this._elementPercentInView(e), e.inView = e.pixelsInView > 0, e.inView && this._ifInView(e, t), t && this._ifAlreadyInView(e), e
        }, u.pauseElementTracking = function(e) {
            e && (e.isActive = !1)
        }, u.resumeElementTracking = function(e) {
            e && (e.isActive = !0)
        }, u._getWindowHeight = function() {
            return window.innerHeight
        }, u._getScrollY = function() {
            return o.getScrollY()
        }, t.exports = n
    }, {
        "./TrackedElement": 53,
        "@marcom/ac-dom-metrics/getDimensions": 35,
        "@marcom/ac-dom-metrics/getPagePosition": 36,
        "@marcom/ac-dom-metrics/getScrollY": 38,
        "@marcom/ac-dom-nodes/isElement": 45,
        "@marcom/ac-dom-nodes/isNodeList": 47,
        "@marcom/ac-object/clone": 90,
        "@marcom/ac-object/extend": 93
    }],
    53: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!r.isElement(e)) throw new TypeError("TrackedElement: " + e + " is not a valid DOM element");
            s.call(this), this.element = e, this.inView = !1, this.isActive = !0, this.percentInView = 0, this.pixelsInView = 0, this.offsetTop = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.useRenderedPosition = t || !1
        }
        var r = {
                isElement: e("@marcom/ac-dom-nodes/isElement")
            },
            s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = s.prototype,
            a = n.prototype = Object.create(o);
        a.destroy = function() {
            this.element = null, o.destroy.call(this)
        }, t.exports = n
    }, {
        "@marcom/ac-dom-nodes/isElement": 45,
        "@marcom/ac-event-emitter-micro": 54
    }],
    54: [function(e, t, i) {
        "use strict";
        t.exports = {
            EventEmitterMicro: e("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }, {
        "./ac-event-emitter-micro/EventEmitterMicro": 55
    }],
    55: [function(e, t, i) {
        "use strict";

        function n() {
            this._events = {}
        }
        var r = n.prototype;
        r.on = function(e, t) {
            this._events[e] = this._events[e] || [], this._events[e].unshift(t)
        }, r.once = function(e, t) {
            function i(r) {
                n.off(e, i), void 0 !== r ? t(r) : t()
            }
            var n = this;
            this.on(e, i)
        }, r.off = function(e, t) {
            if (this.has(e)) {
                if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
                var i = this._events[e].indexOf(t);
                i !== -1 && this._events[e].splice(i, 1)
            }
        }, r.trigger = function(e, t) {
            if (this.has(e))
                for (var i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
        }, r.has = function(e) {
            return e in this._events != !1 && 0 !== this._events[e].length
        }, r.destroy = function() {
            for (var e in this._events) this._events[e] = null;
            this._events = null
        }, t.exports = n
    }, {}],
    56: [function(e, t, i) {
        "use strict";
        t.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }, {}],
    57: [function(e, t, i) {
        "use strict";

        function n() {
            var e = o.getWindow();
            return !s() && !e.orientation || r.windows
        }
        var r = e("@marcom/useragent-detect").os,
            s = e("./touchAvailable").original,
            o = e("./helpers/globals"),
            a = e("@marcom/ac-function/once");
        t.exports = a(n), t.exports.original = n
    }, {
        "./helpers/globals": 56,
        "./touchAvailable": 59,
        "@marcom/ac-function/once": 60,
        "@marcom/useragent-detect": 160
    }],
    58: [function(e, t, i) {
        "use strict";

        function n() {
            var e = s.getWindow(),
                t = e.screen.width;
            return e.orientation && e.screen.height < t && (t = e.screen.height), !r() && t >= a
        }
        var r = e("./isDesktop").original,
            s = e("./helpers/globals"),
            o = e("@marcom/ac-function/once"),
            a = 600;
        t.exports = o(n), t.exports.original = n
    }, {
        "./helpers/globals": 56,
        "./isDesktop": 57,
        "@marcom/ac-function/once": 60
    }],
    59: [function(e, t, i) {
        "use strict";

        function n() {
            var e = r.getWindow(),
                t = r.getDocument(),
                i = r.getNavigator();
            return !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
        }
        var r = e("./helpers/globals"),
            s = e("@marcom/ac-function/once");
        t.exports = s(n), t.exports.original = n
    }, {
        "./helpers/globals": 56,
        "@marcom/ac-function/once": 60
    }],
    60: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t
            }
        }
    }, {}],
    61: [function(e, t, i) {
        "use strict";

        function n() {
            var e = document.createElement("div");
            e.setAttribute("windowDimensionsTracker", "true"), e.style.position = "absolute", e.style.top = "0", e.style.width = "100%", e.style.height = "100vh", e.style.pointerEvents = "none", e.style.visibility = "hidden", e.style.zIndex = "-1", document.documentElement.appendChild(e);
            var t = e.clientWidth,
                i = e.clientHeight;
            o.on("ON_DOM_GROUPS_CREATED", function() {
                return a.pageMetrics.windowHeight = i
            }), o.on("ON_RESIZE_IMMEDIATE", function() {
                return a.pageMetrics.windowHeight = i
            }), window.removeEventListener("resize", o.onResizeImmediate), window.addEventListener("resize", function(n) {
                var r = e.clientWidth,
                    s = e.clientHeight;
                r === t && s === i || (t = r, i = s, o.onResizeImmediate(n))
            })
        }

        function r() {
            var e = 0;
            Array.from(document.querySelectorAll(u)).forEach(function(t, i) {
                var n = parseInt(window.getComputedStyle(t).getPropertyValue("--columns-for-analytics-only"));
                if (!isNaN(n)) {
                    var r = Array.from(t.querySelectorAll(m));
                    if (r && r.length > 0) {
                        var o = 0;
                        r.forEach(function(t, i) {
                            var r = i + 1;
                            o = Math.ceil(r / n);
                            var a = e + o,
                                l = r - (o - 1) * n;
                            s(t, a, o, l, n)
                        }), e += o
                    } else {
                        e++;
                        var a = e + 0,
                            l = n,
                            l = 1;
                        s(t, a, o, l, n)
                    }
                }
            })
        }

        function s(e, t, i, n, r) {
            Array.from(e.querySelectorAll("a")).forEach(function(i, s) {
                var o = 1 === r ? 0 : n,
                    a = i.getAttribute("data-analytics-title") || i.getAttribute("aria-label") || i.innerText;
                if (!/\w/.test(a)) {
                    var l = e.getAttribute("data-module-template"),
                        c = e.getAttribute("data-unit-id");
                    if (c) {
                        for (var u = e.parentNode; !l;) l = u.getAttribute("data-module-template"), u = u.parentNode;
                        a = l + " " + c
                    } else a = l;
                    /\w/.test(i.className) && (a += " " + i.className)
                }
                a = a.split("’").join("").split(/[^\w]+/).join(" ").toLowerCase();
                var h = {
                    eVar102: t + "." + o + ":" + a,
                    eVar103: "abcdefghijklmnopqrstuvwxyz".charAt(n - 1)
                };
                i.addEventListener("click", function() {
                    d.passiveTracker(h)
                })
            })
        }
        var o = (e("@marcom/ac-dom-events").addEventListener, e("@marcom/ac-feature/isTablet"), e("@marcom/ac-feature/touchAvailable"), e("@marcom/viewport-emitter"), e("@marcom/anim-system")),
            a = e("@marcom/anim-system/Model/AnimSystemModel"),
            l = e("./js/TextZoomManager.js"),
            c = (new l, "data-module-template"),
            u = "[" + c + "]",
            h = "data-unit-id",
            m = "[" + h + "]",
            d = null;
        try {
            d = e("@marcom/ac-analytics")
        } catch (f) {}
        var p = e("./js/extendedHomepageSectionsLib.built.js");
        t.exports = function() {
            function e() {
                var e, t, i, n = document.querySelector("meta[property=analytics-track]");
                if (n && n.content && (i = document.querySelector("[data-module-template]"), i && (e = i.querySelector("[data-analytics-section-engagement]"), e && e.hasAttribute("data-analytics-section-engagement") && (t = e.getAttribute("data-analytics-section-engagement").split(":")[1])))) return "0. " + n.content.toLowerCase() + " - " + t + " - section engaged .0"
            }

            function t() {
                r();
                var t = {
                        page: {
                            data: {}
                        }
                    },
                    i = e();
                i && (t.page.data.prop34 = i), d.createBasicObserverSuite(t)
            }
            var i = [];
            n(), o.initialize(), o.on("ON_DOM_KEYFRAMES_CREATED", function() {
                [].forEach.call(document.querySelectorAll(u), function(e, t) {
                    var n = e.getAttribute(c),
                        r = p[n].SectionClass,
                        s = p[n].collectionUnits;
                    i.push(new r(e, t, s, o))
                })
            }), d && t()
        }
    }, {
        "./js/TextZoomManager.js": 65,
        "./js/extendedHomepageSectionsLib.built.js": 66,
        "@marcom/ac-analytics": void 0,
        "@marcom/ac-dom-events": 30,
        "@marcom/ac-feature/isTablet": 58,
        "@marcom/ac-feature/touchAvailable": 59,
        "@marcom/anim-system": 137,
        "@marcom/anim-system/Model/AnimSystemModel": 142,
        "@marcom/viewport-emitter": 171
    }],
    62: [function(e, t, i) {
        "use strict";

        function n(e, t, i) {
            r.apply(this, arguments)
        }
        var r = e("../../js/BaseHomepageSection.js"),
            s = r.prototype,
            o = n.prototype = Object.create(s);
        o.destroy = function() {
            s.destroy.call(this)
        }, t.exports = n
    }, {
        "../../js/BaseHomepageSection.js": 63
    }],
    63: [function(e, t, i) {
        "use strict";

        function n(t, i, n, s) {
            r.apply(this), this.sectionElement = t, this.sectionIndex = i, this.moduleTemplateName = t.getAttribute("data-module-template"), this.viewportEmitter = e("@marcom/viewport-emitter"), this.AnimSystem = s, this.sectionAnalyticsRegion = t.getAttribute("data-analytics-region"), this.collectionUnits = this.sectionElement.querySelectorAll("[data-unit-id]"), this.elementEngagement = new o, this.setProgressiveImageLoading(), this.elementEngagement.start(), this.collectionUnitObjs = {}, this._setDebouncedResizeEvents(500), this.initContentUnitClasses(n)
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = r.prototype,
            o = e("@marcom/ac-element-engagement").ElementEngagement,
            a = e("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"),
            l = e("./BaseHomepageUnit"),
            c = n.prototype = Object.create(s);
        c.initContentUnitClasses = function(e) {
            Array.from(this.collectionUnits).forEach(function(t) {
                var i = t.getAttribute("data-unit-id"),
                    n = e[i] ? e[i] : l;
                this.collectionUnitObjs[i] = new n(t, i, this)
            }.bind(this))
        }, c.destroy = function() {
            s.destroy.call(this)
        }, c.addWrapperClass = function(e) {
            this.sectionElement.classList.add(e)
        }, c.removeWrapperClass = function(e) {
            this.sectionElement.classList.remove(e)
        }, c.setProgressiveImageLoading = function() {
            this.sectionImageLoaderEngagement = this.elementEngagement.addElement(this.sectionElement, {
                timeToEngage: 0,
                inViewThreshold: .001
            }), this.sectionImageLoaderEngagement.once("engaged", function() {
                this.sectionImageLoader = new a({
                    container: this.sectionElement,
                    includeContainer: !0
                }), this.sectionImageLoader.load({
                    imageAnimate: !1
                })
            }.bind(this))
        }, c._setDebouncedResizeEvents = function(e) {
            var t = !1;
            window.addEventListener("resize", function() {
                clearTimeout(this._checkResizeEndTimer), t || (this.trigger("resize:start"), t = !0), this._checkResizeEndTimer = setTimeout(function() {
                    t && (t = !1, this.trigger("resize:end"))
                }.bind(this), e)
            }.bind(this))
        }, t.exports = n
    }, {
        "./BaseHomepageUnit": 64,
        "@marcom/ac-element-engagement": 49,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 99,
        "@marcom/viewport-emitter": 171
    }],
    64: [function(e, t, i) {
        "use strict";

        function n(e, t, i) {
            r.apply(this), this.collectionUnitElement = e, this.unitWrapperElement = this.collectionUnitElement.querySelector(".unit-wrapper"), this.id = t, this.sectionObj = i, this.AnimSystem = i.AnimSystem, this.handleLinkAccessibilityConcerns()
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = r.prototype,
            o = n.prototype = Object.create(s);
        o.setVoiceoverCopy = function() {
            if (this.unitWrapperElement) {
                var e = /^\s*$/,
                    t = this.unitWrapperElement.querySelector("a.unit-link"),
                    i = t.querySelector(".unit-link-vo");
                if (t && i) {
                    var n = i.textContent,
                        r = e.test(n),
                        s = Array.from(this.unitWrapperElement.querySelectorAll(".unit-copy-wrapper>*:not(a)"));
                    s.forEach(function(t) {
                        if (r) {
                            var i = t.innerText && "" != t.innerText ? t.innerText : t.textContent;
                            if (i = i.replace(/[\r\n]/g, " "), e.test(i)) return;
                            /[a-z0-9]\s*$/i.test(i) && (i += "."), n += i.split(/\.$/).join(". ")
                        }
                        t.setAttribute("aria-hidden", !0)
                    }), r && (t.setAttribute("aria-label", n), i.innerHTML = n)
                }
            }
        }, o.handleLinkAccessibilityConcerns = function() {
            if (this.unitWrapperElement) {
                var e = this.unitWrapperElement.querySelector("a.unit-link"),
                    t = e ? e.href : null,
                    i = e ? e.getAttribute("aria-label") : null,
                    n = this.unitWrapperElement.querySelectorAll(".cta-links a"),
                    r = function() {
                        var e = [];
                        return n.forEach(function(t, i) {
                            e.push(t.href)
                        }), e
                    }(),
                    s = t && r.indexOf(t) >= 0,
                    o = !i || !/\w/.test(i);
                if (t)
                    if (s) e.removeAttribute("aria-label"), e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", "-1");
                    else if (o) {
                    var a = this.unitWrapperElement.querySelector(".unit-copy-wrapper>*:not(a)"),
                        l = a.innerText && "" != a.innerText ? a.innerText : a.textContent;
                    e.setAttribute("aria-label", l)
                }
            }
        }, o.destroy = function() {
            s.destroy.call(this)
        }, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54
    }],
    65: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
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
        var a = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            l = e("@marcom/useragent-detect"),
            c = (n(l), e("@marcom/ac-raf-emitter")),
            u = e("@marcom/ac-event-emitter-micro"),
            h = e("@marcom/ac-accessibility/TextZoom"),
            m = "textZoomChange",
            d = "data-text-zoom",
            f = 17,
            p = [1.2, 1.44, 1.72, 2.07, 2.48, 2.98],
            v = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
                    r(this, t);
                    var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.baseFontSize = e, n.fontSizeDeltas = i, h.detect(n.baseFontSize), n._cachedTextZoomDeltaFloat = 1, n._cachedTextZoomFactor = 0, n._rafEmitter = new c.RAFEmitter, n._htmlElement = document.querySelector("html"), n._listenForChanges(), n._checkForTextZoomChange(), n
                }
                return o(t, e), a(t, [{
                    key: "_listenForChanges",
                    value: function() {
                        var e = this;
                        window.addEventListener("resize", function(t) {
                            e._checkForTextZoomChange()
                        })
                    }
                }, {
                    key: "_checkForTextZoomChange",
                    value: function() {
                        var e = this,
                            t = 4;
                        this._rafEmitter.on("update", function() {
                            t--;
                            var i = e.getTextZoomDeltaAsFloat();
                            i != e._cachedTextZoomDeltaFloat ? (e._cachedTextZoomDeltaFloat = i, e._cachedTextZoomDeltaFactor = e.getTextZoomAsFactor(), e._setTextZoomDataAttribute(), e.trigger(m, {
                                zoomAsFloat: e._cachedTextZoomDeltaFloat,
                                zoomAsFactor: e._cachedTextZoomDeltaFactor
                            })) : t > 0 && e._rafEmitter.run()
                        }), this._rafEmitter.run()
                    }
                }, {
                    key: "_setTextZoomDataAttribute",
                    value: function() {
                        var e = this;
                        this._rafEmitter.on("draw", function() {
                            var t = e._cachedTextZoomDeltaFactor > 0 ? "setAttribute" : "removeAttribute";
                            e._htmlElement[t](d, e._cachedTextZoomDeltaFactor)
                        })
                    }
                }, {
                    key: "getTextZoomAsFactor",
                    value: function() {
                        var e = 0,
                            t = this.getTextZoomDeltaAsFloat();
                        return this.fontSizeDeltas.forEach(function(i) {
                            t > i && e++
                        }), e
                    }
                }, {
                    key: "getTextZoomDeltaAsFloat",
                    value: function() {
                        return parseFloat(h.currentSize) / this.baseFontSize
                    }
                }]), t
            }(u.EventEmitterMicro);
        t.exports = v
    }, {
        "@marcom/ac-accessibility/TextZoom": 14,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter": 105,
        "@marcom/useragent-detect": 160
    }],
    66: [function(e, t, i) {
        "use strict";
        t.exports = {
            generic: {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.generic.built.js")
            },
            heroes: {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.heroes.built.js")
            },
            promos: {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.promos.built.js")
            },
            "supports-shared-modals": {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.supports-shared-modals.built.js")
            }
        }
    }, {
        "../../../../../tmp/collection-units.generic.built.js": 192,
        "../../../../../tmp/collection-units.heroes.built.js": 193,
        "../../../../../tmp/collection-units.promos.built.js": 194,
        "../../../../../tmp/collection-units.supports-shared-modals.built.js": 195,
        "../built-in-module-templates/generic/generic.js": 62
    }],
    67: [function(e, t, i) {
        "use strict";
        t.exports = function(e, t, i, n) {
            return e.addEventListener ? e.addEventListener(t, i, !!n) : e.attachEvent("on" + t, i), e
        }
    }, {}],
    68: [function(e, t, i) {
        "use strict";
        t.exports = function(e, t, i, n) {
            return e.removeEventListener ? e.removeEventListener(t, i, !!n) : e.detachEvent("on" + t, i), e
        }
    }, {}],
    69: [function(e, t, i) {
        "use strict";

        function n(e) {
            this._keysDown = {}, this._DOMKeyDown = this._DOMKeyDown.bind(this), this._DOMKeyUp = this._DOMKeyUp.bind(this), this._context = e || document, s(this._context, c, this._DOMKeyDown, !0), s(this._context, u, this._DOMKeyUp, !0), r.call(this)
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = e("@marcom/ac-dom-events/utils/addEventListener"),
            o = e("@marcom/ac-dom-events/utils/removeEventListener"),
            a = e("@marcom/ac-object/create"),
            l = e("./internal/KeyEvent"),
            c = "keydown",
            u = "keyup",
            h = n.prototype = a(r.prototype);
        h.onDown = function(e, t) {
            return this.on(c + ":" + e, t)
        }, h.onceDown = function(e, t) {
            return this.once(c + ":" + e, t)
        }, h.offDown = function(e, t) {
            return this.off(c + ":" + e, t)
        }, h.onUp = function(e, t) {
            return this.on(u + ":" + e, t)
        }, h.onceUp = function(e, t) {
            return this.once(u + ":" + e, t)
        }, h.offUp = function(e, t) {
            return this.off(u + ":" + e, t)
        }, h.isDown = function(e) {
            return e += "", this._keysDown[e] || !1
        }, h.isUp = function(e) {
            return !this.isDown(e)
        }, h.destroy = function() {
            return o(this._context, c, this._DOMKeyDown, !0), o(this._context, u, this._DOMKeyUp, !0), this._keysDown = null, this._context = null, r.prototype.destroy.call(this), this
        }, h._DOMKeyDown = function(e) {
            var t = this._normalizeKeyboardEvent(e),
                i = t.keyCode += "";
            this._trackKeyDown(i), this.trigger(c + ":" + i, t)
        }, h._DOMKeyUp = function(e) {
            var t = this._normalizeKeyboardEvent(e),
                i = t.keyCode += "";
            this._trackKeyUp(i), this.trigger(u + ":" + i, t)
        }, h._normalizeKeyboardEvent = function(e) {
            return new l(e)
        }, h._trackKeyUp = function(e) {
            this._keysDown[e] && (this._keysDown[e] = !1)
        }, h._trackKeyDown = function(e) {
            this._keysDown[e] || (this._keysDown[e] = !0)
        }, t.exports = n
    }, {
        "./internal/KeyEvent": 71,
        "@marcom/ac-dom-events/utils/addEventListener": 67,
        "@marcom/ac-dom-events/utils/removeEventListener": 68,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/create": 91
    }],
    70: [function(e, t, i) {
        "use strict";
        var n = e("./Keyboard");
        t.exports = new n
    }, {
        "./Keyboard": 69
    }],
    71: [function(e, t, i) {
        "use strict";

        function n(e) {
            this.originalEvent = e;
            var t;
            for (t in e) r.indexOf(t) === -1 && "function" != typeof e[t] && (this[t] = e[t]);
            this.location = void 0 !== this.originalEvent.location ? this.originalEvent.location : this.originalEvent.keyLocation
        }
        var r = ["keyLocation"];
        n.prototype = {
            preventDefault: function() {
                return "function" != typeof this.originalEvent.preventDefault ? void(this.originalEvent.returnValue = !1) : this.originalEvent.preventDefault()
            },
            stopPropagation: function() {
                return this.originalEvent.stopPropagation()
            }
        }, t.exports = n
    }, {}],
    72: [function(e, t, i) {
        "use strict";
        t.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTRAPHE: 222,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191
        }
    }, {}],
    73: [function(e, t, i) {
        "use strict";
        var n = e("./utils/addEventListener"),
            r = e("./shared/getEventType");
        t.exports = function(e, t, i, s) {
            return t = r(e, t), n(e, t, i, s)
        }
    }, {
        "./shared/getEventType": 75,
        "./utils/addEventListener": 77
    }],
    74: [function(e, t, i) {
        "use strict";
        var n = e("./utils/removeEventListener"),
            r = e("./shared/getEventType");
        t.exports = function(e, t, i, s) {
            return t = r(e, t), n(e, t, i, s)
        }
    }, {
        "./shared/getEventType": 75,
        "./utils/removeEventListener": 78
    }],
    75: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-prefixer/getEventType");
        t.exports = function(e, t) {
            var i, r;
            return i = "tagName" in e ? e.tagName : e === window ? "window" : "document", r = n(t, i), r ? r : t
        }
    }, {
        "@marcom/ac-prefixer/getEventType": 94
    }],
    76: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            return e = e || window.event, "undefined" != typeof e.target ? e.target : e.srcElement
        }
    }, {}],
    77: [function(e, t, i) {
        arguments[4][67][0].apply(i, arguments)
    }, {
        dup: 67
    }],
    78: [function(e, t, i) {
        arguments[4][68][0].apply(i, arguments)
    }, {
        dup: 68
    }],
    79: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            var t;
            if (e = e || window, e === window) {
                if (t = window.pageXOffset) return t;
                e = document.documentElement || document.body.parentNode || document.body
            }
            return e.scrollLeft
        }
    }, {}],
    80: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            var t;
            if (e = e || window, e === window) {
                if (t = window.pageYOffset) return t;
                e = document.documentElement || document.body.parentNode || document.body
            }
            return e.scrollTop
        }
    }, {}],
    81: [function(e, t, i) {
        "use strict";
        t.exports = {
            Modal: e("./ac-modal-basic/Modal"),
            Renderer: e("./ac-modal-basic/Renderer"),
            classNames: e("./ac-modal-basic/classNames"),
            dataAttributes: e("./ac-modal-basic/dataAttributes")
        }
    }, {
        "./ac-modal-basic/Modal": 82,
        "./ac-modal-basic/Renderer": 83,
        "./ac-modal-basic/classNames": 84,
        "./ac-modal-basic/dataAttributes": 85
    }],
    82: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            c.call(this), this.options = o.defaults(h, e), this.renderer = new u(t), this.opened = !1, this._keysToClose = [l.ESCAPE], this._attachedKeysToClose = [], this.close = this.close.bind(this)
        }
        var r = {
                addEventListener: e("@marcom/ac-dom-events/addEventListener"),
                removeEventListener: e("@marcom/ac-dom-events/removeEventListener"),
                target: e("@marcom/ac-dom-events/target")
            },
            s = {
                getScrollX: e("@marcom/ac-dom-metrics/getScrollX"),
                getScrollY: e("@marcom/ac-dom-metrics/getScrollY")
            },
            o = {
                create: e("@marcom/ac-object/create"),
                defaults: e("@marcom/ac-object/defaults")
            },
            a = e("@marcom/ac-keyboard"),
            l = e("@marcom/ac-keyboard/keyMap"),
            c = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            u = e("./Renderer"),
            h = {
                retainScrollPosition: !1
            },
            m = n.prototype = o.create(c.prototype);
        m.open = function() {
            this.options.retainScrollPosition && this._saveScrollPosition(), this.opened || (this._attachEvents(), this.trigger("willopen"), this.renderer.open(), this.opened = !0, this.trigger("open"))
        }, m.close = function(e) {
            var t, i;
            if (this.opened) {
                if (e && "click" === e.type && (t = r.target(e), i = this.renderer.options.dataAttributes.close, !t.hasAttribute(i))) return;
                this.trigger("willclose"), this._removeEvents(), this.renderer.close(), this.options.retainScrollPosition && this._restoreScrollPosition(), this.opened = !1, this.trigger("close")
            }
        }, m.render = function() {
            this.renderer.render()
        }, m.appendContent = function(e, t) {
            this.renderer.appendContent(e, t)
        }, m.removeContent = function(e) {
            this.renderer.removeContent(e)
        }, m.destroy = function() {
            this._removeEvents(), this.renderer.destroy();
            for (var e in this) this.hasOwnProperty(e) && (this[e] = null)
        }, m.addKeyToClose = function(e) {
            var t = this._keysToClose.indexOf(e);
            t === -1 && (this._keysToClose.push(e), this._bindKeyToClose(e))
        }, m.removeKeyToClose = function(e) {
            var t = this._keysToClose.indexOf(e);
            t !== -1 && this._keysToClose.splice(t, 1), this._releaseKeyToClose(e)
        }, m._bindKeyToClose = function(e) {
            var t = this._attachedKeysToClose.indexOf(e);
            t === -1 && (a.onUp(e, this.close), this._attachedKeysToClose.push(e))
        }, m._releaseKeyToClose = function(e) {
            var t = this._attachedKeysToClose.indexOf(e);
            t !== -1 && (a.offUp(e, this.close), this._attachedKeysToClose.splice(t, 1))
        }, m._removeEvents = function() {
            this.renderer.modalElement && r.removeEventListener(this.renderer.modalElement, "click", this.close), this._keysToClose.forEach(this._releaseKeyToClose, this)
        }, m._attachEvents = function() {
            this.renderer.modalElement && r.addEventListener(this.renderer.modalElement, "click", this.close), this._keysToClose.forEach(this._bindKeyToClose, this)
        }, m._restoreScrollPosition = function() {
            window.scrollTo(this._scrollX || 0, this._scrollY || 0)
        }, m._saveScrollPosition = function() {
            this._scrollX = s.getScrollX(), this._scrollY = s.getScrollY()
        }, t.exports = n
    }, {
        "./Renderer": 83,
        "@marcom/ac-dom-events/addEventListener": 73,
        "@marcom/ac-dom-events/removeEventListener": 74,
        "@marcom/ac-dom-events/target": 76,
        "@marcom/ac-dom-metrics/getScrollX": 79,
        "@marcom/ac-dom-metrics/getScrollY": 80,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-keyboard": 70,
        "@marcom/ac-keyboard/keyMap": 72,
        "@marcom/ac-object/create": 91,
        "@marcom/ac-object/defaults": 92
    }],
    83: [function(e, t, i) {
        "use strict";
        var n = {
                add: e("@marcom/ac-classlist/add"),
                remove: e("@marcom/ac-classlist/remove")
            },
            r = {
                defaults: e("@marcom/ac-object/defaults")
            },
            s = {
                remove: e("@marcom/ac-dom-nodes/remove"),
                isElement: e("@marcom/ac-dom-nodes/isElement")
            },
            o = e("./classNames"),
            a = e("./dataAttributes"),
            l = {
                modalElement: null,
                contentElement: null,
                closeButton: null,
                classNames: o,
                dataAttributes: a
            },
            c = function(e) {
                e = e || {}, this.options = r.defaults(l, e), this.options.classNames = r.defaults(l.classNames, e.classNames), this.options.dataAttributes = r.defaults(l.dataAttributes, e.dataAttributes), this.modalElement = this.options.modalElement, this.contentElement = this.options.contentElement, this.closeButton = this.options.closeButton
            },
            u = c.prototype;
        u.render = function() {
            return s.isElement(this.modalElement) || (this.modalElement = this.renderModalElement(this.options.classNames.modalElement)), s.isElement(this.contentElement) || (this.contentElement = this.renderContentElement(this.options.classNames.contentElement)), this.closeButton !== !1 && (s.isElement(this.closeButton) || (this.closeButton = this.renderCloseButton(this.options.classNames.closeButton)), this.modalElement.appendChild(this.closeButton)), this.modalElement.appendChild(this.contentElement), document.body.appendChild(this.modalElement), this.modalElement
        }, u.renderCloseButton = function(e) {
            var t;
            return e = e || this.options.classNames.closeButton, t = this._renderElement("button", e), t.setAttribute(this.options.dataAttributes.close, ""), t
        }, u.renderModalElement = function(e) {
            return e = e || this.options.classNames.modalElement, this._renderElement("div", e)
        }, u.renderContentElement = function(e) {
            return e = e || this.options.classNames.contentElement, this._renderElement("div", e)
        }, u.appendContent = function(e, t) {
            s.isElement(e) && (void 0 === arguments[1] ? this.contentElement.appendChild(e) : s.isElement(t) && t.appendChild(e))
        }, u.removeContent = function(e) {
            e ? this.modalElement.contains(e) && s.remove(e) : this._emptyContent()
        }, u.open = function() {
            var e = [document.documentElement].concat(this.options.classNames.documentElement),
                t = [this.modalElement].concat(this.options.classNames.modalOpen);
            n.add.apply(null, e), n.add.apply(null, t)
        }, u.close = function() {
            var e = [document.documentElement].concat(this.options.classNames.documentElement),
                t = [this.modalElement].concat(this.options.classNames.modalOpen);
            n.remove.apply(null, e), n.remove.apply(null, t)
        }, u.destroy = function() {
            var e = [document.documentElement].concat(this.options.classNames.documentElement);
            this.modalElement && document.body.contains(this.modalElement) && (this.close(), document.body.removeChild(this.modalElement)), n.remove.apply(null, e);
            for (var t in this) this.hasOwnProperty(t) && (this[t] = null)
        }, u._renderElement = function(e, t) {
            var i = document.createElement(e),
                r = [i];
            return t && (r = r.concat(t)), n.add.apply(null, r), i
        }, u._emptyContent = function() {
            this.contentElement.innerHTML = ""
        }, t.exports = c
    }, {
        "./classNames": 84,
        "./dataAttributes": 85,
        "@marcom/ac-classlist/add": 24,
        "@marcom/ac-classlist/remove": 29,
        "@marcom/ac-dom-nodes/isElement": 45,
        "@marcom/ac-dom-nodes/remove": 48,
        "@marcom/ac-object/defaults": 92
    }],
    84: [function(e, t, i) {
        "use strict";
        t.exports = {
            modalElement: "modal",
            modalOpen: "modal-open",
            documentElement: "has-modal",
            contentElement: "modal-content",
            closeButton: "modal-close"
        }
    }, {}],
    85: [function(e, t, i) {
        "use strict";
        t.exports = {
            close: "data-modal-close"
        }
    }, {}],
    86: [function(e, t, i) {
        "use strict";
        t.exports = {
            Modal: e("./ac-modal/Modal"),
            createStandardModal: e("./ac-modal/factory/createStandardModal"),
            createFullViewportModal: e("./ac-modal/factory/createFullViewportModal")
        }
    }, {
        "./ac-modal/Modal": 87,
        "./ac-modal/factory/createFullViewportModal": 88,
        "./ac-modal/factory/createStandardModal": 89
    }],
    87: [function(e, t, i) {
        "use strict";

        function n(e) {
            s.call(this), this.options = e || {}, this._modal = new r(e, this.options.renderer), this.opened = !1, this._render(), this.closeButton = this._modal.renderer.closeButton, this.modalElement = this._modal.renderer.modalElement, this.contentElement = this._modal.renderer.contentElement, this.modalElement.setAttribute("role", "dialog"), this.closeButton.setAttribute("aria-label", "Close"), this._circularTab = new o(this.modalElement), this._onWillOpen = this._onWillOpen.bind(this), this._onOpen = this._onOpen.bind(this), this._onWillClose = this._onWillClose.bind(this), this._onClose = this._onClose.bind(this), this._bindEvents()
        }
        var r = e("@marcom/ac-modal-basic").Modal,
            s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = e("@marcom/ac-accessibility/CircularTab"),
            a = n.prototype = Object.create(s.prototype);
        a.open = function() {
            this._modal.open(), this.opened = this._modal.opened
        }, a.close = function() {
            this._modal.close()
        }, a.appendContent = function(e) {
            this._modal.appendContent(e)
        }, a.removeContent = function(e) {
            this._modal.removeContent(e)
        }, a.destroy = function() {
            this._releaseEvents(), this._modal.destroy(), this._removeModalFocus(), this._circularTab.destroy(), this._focusObj = null;
            for (var e in this) this.hasOwnProperty(e) && (this[e] = null)
        }, a.addKeyToClose = function(e) {
            this._modal.addKeyToClose(e)
        }, a.removeKeyToClose = function(e) {
            this._modal.removeKeyToClose(e)
        }, a._render = function() {
            this._modal.render(), this._modal.renderer.modalElement.setAttribute("aria-hidden", "true")
        }, a._bindEvents = function() {
            this._modal.on("willopen", this._onWillOpen), this._modal.on("open", this._onOpen), this._modal.on("willclose", this._onWillClose), this._modal.on("close", this._onClose)
        }, a._releaseEvents = function() {
            this._modal.off("willopen", this._onWillOpen), this._modal.off("open", this._onOpen), this._modal.off("willclose", this._onWillClose), this._modal.off("close", this._onClose)
        }, a._onWillOpen = function() {
            this.trigger("willopen")
        }, a._onOpen = function() {
            this.opened = this._modal.opened, this._giveModalFocus(), this.trigger("open")
        }, a._onWillClose = function() {
            this.trigger("willclose"), this._removeModalFocus()
        }, a._onClose = function() {
            this.opened = this._modal.opened, this.trigger("close")
        }, a._giveModalFocus = function() {
            this.modalElement.removeAttribute("aria-hidden"), this._activeElement = document.activeElement, this.closeButton.focus(), this._circularTab.start()
        }, a._removeModalFocus = function() {
            this._circularTab.stop(), this.modalElement.setAttribute("aria-hidden", "true"), this._activeElement && (this._activeElement.focus(), this._activeElement = null)
        }, t.exports = n
    }, {
        "@marcom/ac-accessibility/CircularTab": 13,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-modal-basic": 81
    }],
    88: [function(e, t, i) {
        "use strict";

        function n(e) {
            var t = new r(o);
            return e && t.appendContent(e), t
        }
        var r = e("../Modal"),
            s = e("@marcom/ac-modal-basic").classNames,
            o = {
                retainScrollPosition: !0,
                renderer: {
                    classNames: {
                        documentElement: [s.documentElement].concat("has-modal-full-viewport"),
                        modalElement: [s.modalElement].concat("modal-full-viewport")
                    }
                }
            };
        t.exports = n
    }, {
        "../Modal": 87,
        "@marcom/ac-modal-basic": 81
    }],
    89: [function(e, t, i) {
        "use strict";

        function n(e) {
            var t = new r(l);
            e && t.appendContent(e);
            var i = document.createElement("div"),
                n = document.createElement("div"),
                s = document.createElement("div"),
                c = document.createElement("div");
            return a.add(i, "content-table"), a.add(n, "content-cell"), a.add(s, "content-wrapper"), a.add(c, "content-padding", "large-8", "medium-10"), t.modalElement.setAttribute(o.close, ""), s.setAttribute(o.close, ""), n.setAttribute(o.close, ""), i.appendChild(n), n.appendChild(s),
                s.appendChild(c), t.modalElement.appendChild(i), c.appendChild(t.contentElement), c.appendChild(t.closeButton), t
        }
        var r = e("../Modal"),
            s = e("@marcom/ac-modal-basic").classNames,
            o = e("@marcom/ac-modal-basic").dataAttributes,
            a = {
                add: e("@marcom/ac-classlist/add")
            },
            l = {
                renderer: {
                    classNames: {
                        documentElement: [s.documentElement].concat("has-modal-standard"),
                        modalElement: [s.modalElement].concat("modal-standard")
                    }
                }
            };
        t.exports = n
    }, {
        "../Modal": 87,
        "@marcom/ac-classlist/add": 24,
        "@marcom/ac-modal-basic": 81
    }],
    90: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e("@marcom/ac-polyfills/Array/isArray");
        var r = e("./extend"),
            s = Object.prototype.hasOwnProperty,
            o = function a(e, t) {
                var i;
                for (i in t) s.call(t, i) && (null === t[i] ? e[i] = null : "object" === n(t[i]) ? (e[i] = Array.isArray(t[i]) ? [] : {}, a(e[i], t[i])) : e[i] = t[i]);
                return e
            };
        t.exports = function(e, t) {
            return t ? o({}, e) : r({}, e)
        }
    }, {
        "./extend": 93,
        "@marcom/ac-polyfills/Array/isArray": void 0
    }],
    91: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = function() {};
        t.exports = function(e) {
            if (arguments.length > 1) throw new Error("Second argument not supported");
            if (null === e || "object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw new TypeError("Object prototype may only be an Object.");
            return "function" == typeof Object.create ? Object.create(e) : (r.prototype = e, new r)
        }
    }, {}],
    92: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = e("./extend");
        t.exports = function(e, t) {
            if ("object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw new TypeError("defaults: must provide a defaults object");
            if (t = t || {}, "object" !== ("undefined" == typeof t ? "undefined" : n(t))) throw new TypeError("defaults: options must be a typeof object");
            return r({}, e, t)
        }
    }, {
        "./extend": 93
    }],
    93: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.forEach");
        var n = Object.prototype.hasOwnProperty;
        t.exports = function() {
            var e, t;
            return e = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), t = e.shift(), e.forEach(function(e) {
                if (null != e)
                    for (var i in e) n.call(e, i) && (t[i] = e[i])
            }), t
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.forEach": void 0
    }],
    94: [function(e, t, i) {
        "use strict";
        var n = e("./utils/eventTypeAvailable"),
            r = e("./shared/camelCasedEventTypes"),
            s = e("./shared/windowFallbackEventTypes"),
            o = e("./shared/prefixHelper"),
            a = {};
        t.exports = function l(e, t) {
            var i, c, u;
            if (t = t || "div", e = e.toLowerCase(), t in a || (a[t] = {}), c = a[t], e in c) return c[e];
            if (n(e, t)) return c[e] = e;
            if (e in r)
                for (u = 0; u < r[e].length; u++)
                    if (i = r[e][u], n(i.toLowerCase(), t)) return c[e] = i;
            for (u = 0; u < o.evt.length; u++)
                if (i = o.evt[u] + e, n(i, t)) return o.reduce(u), c[e] = i;
            return "window" !== t && s.indexOf(e) ? c[e] = l(e, "window") : c[e] = !1
        }
    }, {
        "./shared/camelCasedEventTypes": 95,
        "./shared/prefixHelper": 96,
        "./shared/windowFallbackEventTypes": 97,
        "./utils/eventTypeAvailable": 98
    }],
    95: [function(e, t, i) {
        "use strict";
        t.exports = {
            transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
            animationstart: ["webkitAnimationStart", "MSAnimationStart"],
            animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
            animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
            fullscreenchange: ["MSFullscreenChange"],
            fullscreenerror: ["MSFullscreenError"]
        }
    }, {}],
    96: [function(e, t, i) {
        "use strict";
        var n = ["-webkit-", "-moz-", "-ms-"],
            r = ["Webkit", "Moz", "ms"],
            s = ["webkit", "moz", "ms"],
            o = function() {
                this.initialize()
            },
            a = o.prototype;
        a.initialize = function() {
            this.reduced = !1, this.css = n, this.dom = r, this.evt = s
        }, a.reduce = function(e) {
            this.reduced || (this.reduced = !0, this.css = [this.css[e]], this.dom = [this.dom[e]], this.evt = [this.evt[e]])
        }, t.exports = new o
    }, {}],
    97: [function(e, t, i) {
        "use strict";
        t.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
    }, {}],
    98: [function(e, t, i) {
        "use strict";
        var n = {
            window: window,
            document: document
        };
        t.exports = function(e, t) {
            var i;
            return e = "on" + e, t in n || (n[t] = document.createElement(t)), i = n[t], e in i || "setAttribute" in i && (i.setAttribute(e, "return;"), "function" == typeof i[e])
        }
    }, {}],
    99: [function(e, t, i) {
        "use strict";

        function n(e) {
            o.call(this), this.options = r(c, e), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
        }
        var r = e("@marcom/ac-object/defaults"),
            s = e("@marcom/ac-queue").LiveQueue,
            o = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            a = e("@marcom/ac-raf-emitter/update"),
            l = e("@marcom/ac-raf-emitter/draw"),
            c = {
                container: document.body,
                includeContainer: !1
            },
            u = {
                loadingPoolSize: 8,
                timeout: null,
                imageDataAttribute: "data-progressive-image",
                imageAnimate: !0,
                imageAnimateClass: "progressive-image-animated"
            };
        n.Events = {
            ImageLoad: "image-load",
            Complete: "complete"
        };
        var h = n.prototype = Object.create(o.prototype);
        h.load = function(e) {
            this._didCallLoad || (this._didCallLoad = !0, this.loadingOptions = r(u, e), this.loadingQueue = new s(this.loadingOptions.loadingPoolSize), this.els = Array.from(this._getProgressiveImageElements()), this.options.includeContainer && this.options.container.hasAttribute(this._getProgressiveImageDataAttribute()) && this.els.unshift(this.options.container), l(function() {
                var e, t, i = this.els.length;
                for (e = 0; e < i; e++) t = {
                    queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, e), e),
                    el: this.els[e],
                    id: e
                }, this._queueItems.push(t), this._queueItemsObj[e] = t, this.loadingOptions.imageAnimate && this.els[e].classList.add(this.loadingOptions.imageAnimateClass);
                a(function() {
                    this.loadingQueue.start(), "number" == typeof this.loadingOptions.timeout && (this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout))
                }.bind(this))
            }.bind(this)))
        }, h.setVisible = function(e) {
            return new Promise(function(t, i) {
                l(function() {
                    e.removeAttribute(this._getProgressiveImageDataAttribute()), t(), e = null
                }.bind(this))
            }.bind(this))
        }, h.cancel = function() {
            if (this.els) {
                var e, t = this.els.length;
                for (e = 0; e < t; e++) this.setVisible(this.els[e]), this.loadingOptions.imageAnimate && l(function() {
                    this.els[e].setAttribute("data-progressive-image-loaded", "")
                }.bind(this, e))
            }
            this._handleLoadingComplete()
        }, h.destroy = function() {
            this.cancel(), this.off(), o.prototype.destroy.call(this)
        }, h._loadNextItem = function(e) {
            return new Promise(function(e, t, i) {
                var n = this._queueItemsObj[e];
                this._loadAndSetVisible(n.el).then(function() {
                    var e = this._queueItems.indexOf(n);
                    this._queueItems.splice(e, 1), this._queueItemsObj[n.id] = null, t(), this._handleImageLoad(n.el), n = t = null, 1 === this.loadingQueue.count() && this._handleLoadingComplete()
                }.bind(this))
            }.bind(this, e))
        }, h._loadAndSetVisible = function(e) {
            return new Promise(function(t, i) {
                this.setVisible(e).then(function() {
                    this._getBackgroundImageSrc(e).then(function(i) {
                        this._loadImage(i).then(t), e = null
                    }.bind(this))
                }.bind(this))
            }.bind(this))
        }, h._getBackgroundImageSrc = function(e) {
            return new Promise(function(t, i) {
                a(function() {
                    var i = e.currentStyle;
                    return i || (i = window.getComputedStyle(e, !1)), e = null, 0 === i.backgroundImage.indexOf("url(") ? void t(i.backgroundImage.slice(4, -1).replace(/"/g, "")) : void t(null)
                }.bind(this))
            }.bind(this))
        }, h._getProgressiveImageDataAttribute = function() {
            return this.loadingOptions.imageDataAttribute
        }, h._getProgressiveImageCSSQuery = function() {
            return "[" + this._getProgressiveImageDataAttribute() + "]"
        }, h._getProgressiveImageElements = function() {
            return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery()) || []
        }, h._loadImage = function(e) {
            return new Promise(this._loadImagePromiseFunc.bind(this, e))
        }, h._loadImagePromiseFunc = function(e, t, i) {
            function n() {
                this.removeEventListener("load", n), t(this), t = null
            }
            if (!e) return void t(null);
            var r = new Image;
            r.addEventListener("load", n), r.src = e
        }, h._clearTimeout = function() {
            this._timeout && (window.clearTimeout(this._timeout), this._timeout = null)
        }, h._handleImageLoad = function(e) {
            l(function() {
                this.trigger(n.Events.ImageLoad, e), this.loadingOptions.imageAnimate && e.setAttribute("data-progressive-image-loaded", ""), e = null
            }.bind(this))
        }, h._handleLoadingComplete = function() {
            this.loadingQueue.stop(), this._clearTimeout(), this.trigger(n.Events.Complete)
        }, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/defaults": 92,
        "@marcom/ac-queue": 100,
        "@marcom/ac-raf-emitter/draw": 114,
        "@marcom/ac-raf-emitter/update": 116
    }],
    100: [function(e, t, i) {
        "use strict";
        t.exports = {
            Queue: e("./ac-queue/Queue"),
            QueueItem: e("./ac-queue/QueueItem"),
            LiveQueue: e("./ac-queue/LiveQueue")
        }
    }, {
        "./ac-queue/LiveQueue": 101,
        "./ac-queue/Queue": 102,
        "./ac-queue/QueueItem": 103
    }],
    101: [function(e, t, i) {
        "use strict";

        function n(e) {
            this._queue = new r, this._maxProcesses = e || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
                _run: this._run.bind(this),
                _releaseSlot: this._releaseSlot.bind(this)
            }
        }
        e("@marcom/ac-polyfills/Promise"), e("@marcom/ac-polyfills/requestAnimationFrame"), e("@marcom/ac-polyfills/Function/prototype.bind");
        var r = e("./Queue"),
            s = e("./QueueItem"),
            o = n.prototype;
        o.start = function() {
            this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
        }, o.pause = function() {
            this._isRunning && (cancelAnimationFrame(this._rafId), this._rafId = 0), this._isRunning = !1
        }, o.stop = function() {
            this.pause(), this.clear()
        }, o.enqueue = function(e, t) {
            if ("function" != typeof e) throw new Error("LiveQueue can only enqueue functions");
            void 0 === t && (t = r.PRIORITY_DEFAULT);
            var i = new s(e, t);
            return this.enqueueQueueItem(i)
        }, o.enqueueQueueItem = function(e) {
            return this._queue.enqueueQueueItem(e), this._isRunning && 0 === this._rafId && this.start(), e
        }, o.dequeueQueueItem = function(e) {
            return this._queue.dequeueQueueItem(e)
        }, o.clear = function() {
            this._queue = new r
        }, o.destroy = function() {
            this.pause(), this._isRunning = !1, this._queue = null, this._boundFunctions = null
        }, o.count = function() {
            return this._queue.count() + this.pending()
        }, o.pending = function() {
            return this._maxProcesses - this._availableSlots
        }, o.isEmpty = function() {
            return 0 === this.count()
        }, o._run = function() {
            if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 !== this._availableSlots)) {
                var e = this._queue.dequeue(),
                    t = e.data();
                this._isPromise(t) && (this._retainSlot(), t.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)), this._stopRunningIfDone()
            }
        }, o._retainSlot = function() {
            this._availableSlots--
        }, o._releaseSlot = function() {
            this._availableSlots++, this._stopRunningIfDone()
        }, o._stopRunningIfDone = function() {
            0 != this._rafId && 0 === this._queue.count() && this._availableSlots == this._maxProcesses && (cancelAnimationFrame(this._rafId), this._rafId = 0)
        }, o._isPromise = function(e) {
            return !(!e || "function" != typeof e.then)
        }, t.exports = n
    }, {
        "./Queue": 102,
        "./QueueItem": 103,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0,
        "@marcom/ac-polyfills/Promise": void 0,
        "@marcom/ac-polyfills/requestAnimationFrame": void 0
    }],
    102: [function(e, t, i) {
        "use strict";

        function n() {
            this._items = []
        }
        var r = e("./QueueItem"),
            s = n.prototype;
        s.enqueue = function(e, t) {
            void 0 === t && (t = n.PRIORITY_DEFAULT);
            var i = new r(e, t);
            return this.enqueueQueueItem(i)
        }, s.enqueueQueueItem = function(e) {
            return this._items.indexOf(e) === -1 && this._items.push(e), e
        }, s.dequeue = function() {
            this._heapSort();
            var e = this._items.length - 1,
                t = this._items[0];
            return this._items[0] = this._items[e], this._items.pop(), t
        }, s.dequeueQueueItem = function(e) {
            var t = this._items.indexOf(e);
            return t > -1 && this._items.splice(t, 1), e
        }, s.peek = function() {
            return 0 == this.count() ? null : (this._heapSort(), this._items[0])
        }, s.isEmpty = function() {
            return 0 === this._items.length
        }, s.count = function() {
            return this._items.length
        }, s.toString = function() {
            for (var e = ["Queue total items: " + this.count() + "\n"], t = 0; t < this.count(); ++t) e.push(this._items[t].toString() + "\n");
            return e.join("")
        }, s._heapSort = function() {
            for (var e = 0, t = this._items.length - 1; t >= 0; t--)
                for (var i = t; i > 0;) {
                    e++;
                    var n = Math.floor((i - 1) / 2);
                    if (this._items[i].compareTo(this._items[n]) >= 0) break;
                    var r = this._items[i];
                    this._items[i] = this._items[n], this._items[n] = r, i = n
                }
        }, n.PRIORITY_LOW = 10, n.PRIORITY_DEFAULT = 5, n.PRIORITY_HIGH = 1, t.exports = n
    }, {
        "./QueueItem": 103
    }],
    103: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            this.priority = t, this.data = e, this.insertionOrder = r++
        }
        var r = 0,
            s = n.prototype;
        s.compareTo = function(e) {
            return this.priority < e.priority ? -1 : this.priority > e.priority ? 1 : this.insertionOrder < e.insertionOrder ? -1 : 1
        }, s.toString = function() {
            return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
        }, t.exports = n
    }, {}],
    104: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = "ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",
            s = "1.0.3",
            o = function() {
                this._currentID = 0
            };
        o.prototype.getNewID = function() {
            return this._currentID++, "raf:" + this._currentID
        }, t.exports = n.share(r, s, o)
    }, {
        "@marcom/ac-shared-instance": 119
    }],
    105: [function(e, t, i) {
        "use strict";
        t.exports = {
            RAFEmitter: e("./ac-raf-emitter/RAFEmitter"),
            ThrottledRAFEmitter: e("./ac-raf-emitter/ThrottledRAFEmitter"),
            update: e("./ac-raf-emitter/update"),
            external: e("./ac-raf-emitter/external"),
            draw: e("./ac-raf-emitter/draw"),
            cancelUpdate: e("./ac-raf-emitter/cancelUpdate"),
            cancelExternal: e("./ac-raf-emitter/cancelExternal"),
            cancelDraw: e("./ac-raf-emitter/cancelDraw")
        }
    }, {
        "./ac-raf-emitter/RAFEmitter": 106,
        "./ac-raf-emitter/ThrottledRAFEmitter": 110,
        "./ac-raf-emitter/cancelDraw": 111,
        "./ac-raf-emitter/cancelExternal": 112,
        "./ac-raf-emitter/cancelUpdate": 113,
        "./ac-raf-emitter/draw": 114,
        "./ac-raf-emitter/external": 115,
        "./ac-raf-emitter/update": 116
    }],
    106: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, s.call(this), this.id = a.getNewID(), this.executor = e.executor || o, this._reset(), this._willRun = !1, this._didDestroy = !1
        }
        var r, s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = e("@marcom/ac-raf-executor/sharedRAFExecutorInstance"),
            a = e("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
        r = n.prototype = Object.create(s.prototype), r.run = function() {
            return this._willRun || (this._willRun = !0), this._subscribe()
        }, r.cancel = function() {
            this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
        }, r.destroy = function() {
            var e = this.willRun();
            return this.cancel(), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, e
        }, r.willRun = function() {
            return this._willRun
        }, r.isRunning = function() {
            return this._isRunning
        }, r._subscribe = function() {
            return this.executor.subscribe(this)
        }, r._unsubscribe = function() {
            return this.executor.unsubscribe(this)
        }, r._onAnimationFrameStart = function(e) {
            this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
        }, r._onAnimationFrameEnd = function(e) {
            this._willRun || (this.trigger("stop", e), this._reset())
        }, r._reset = function() {
            this._didEmitFrameData = !1, this._isRunning = !1
        }, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 104,
        "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 118
    }],
    107: [function(e, t, i) {
        "use strict";
        var n = e("./SingleCallRAFEmitter"),
            r = function(e) {
                this.rafEmitter = new n, this.rafEmitter.on(e, this._onRAFExecuted.bind(this)), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._frameCallbacks = [], this._nextFrameCallbacks = [], this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e) {
            return this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2, this._currentFrameID
        }, s.cancelAnimationFrame = function(e) {
            this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx !== -1 && (this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel())
        }, s._onRAFExecuted = function(e) {
            for (this._frameCallbacks = this._nextFrameCallbacks, this._frameCallbackLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks = [], this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e)
        }, t.exports = r
    }, {
        "./SingleCallRAFEmitter": 109
    }],
    108: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterface"),
            r = function() {
                this.events = {}
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].requestAnimationFrame
        }, s.cancelAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].cancelAnimationFrame
        }, t.exports = new r
    }, {
        "./RAFInterface": 107
    }],
    109: [function(e, t, i) {
        "use strict";
        var n = e("./RAFEmitter"),
            r = function(e) {
                n.call(this, e)
            },
            s = r.prototype = Object.create(n.prototype);
        s._subscribe = function() {
            return this.executor.subscribe(this, !0)
        }, t.exports = r
    }, {
        "./RAFEmitter": 106
    }],
    110: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            a.call(this), t = t || {}, this._fps = e || 0, this._delta = 0, this._currentFps = 0, this._rafEmitter = t.rafEmitter || new s, this._lastThrottledTime = 0, this._didEmitFrameData = !1, this._rafEmitterEvent = null, this._shouldDraw = !1, this._boundOnRAFEmitterUpdate = this._onRAFEmitterUpdate.bind(this), this._boundOnRAFEmitterDraw = this._onRAFEmitterDraw.bind(this), this._boundOnRAFEmitterStop = this._onRAFEmitterStop.bind(this), this._rafEmitter.on("update", this._boundOnRAFEmitterUpdate), this._rafEmitter.on("draw", this._boundOnRAFEmitterDraw), this._rafEmitter.on("stop", this._boundOnRAFEmitterStop)
        }
        var r, s = e("./RAFEmitter"),
            o = e("@marcom/ac-object/clone"),
            a = e("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        r = n.prototype = Object.create(a.prototype), r.setFps = function(e) {
            return e !== this._fps && (this._fps = e, !0)
        }, r.getFps = function() {
            return this._fps
        }, r.run = function() {
            return this._rafEmitter.run()
        }, r.cancel = function() {
            return this._rafEmitter.cancel()
        }, r.willRun = function() {
            return this._rafEmitter.willRun()
        }, r.isRunning = function() {
            return this._rafEmitter.isRunning()
        }, r.destroy = function() {
            var e = this._rafEmitter.destroy();
            return a.prototype.destroy.call(this), this._rafEmitter = null, this._boundOnRAFEmitterUpdate = null, this._boundOnRAFEmitterDraw = null, this._boundOnRAFEmitterStop = null, this._rafEmitterEvent = null, e
        }, r._onRAFEmitterUpdate = function(e) {
            if (0 === this._lastThrottledTime && (this._lastThrottledTime = this._rafEmitter.executor.lastFrameTime), this._delta = e.time - this._lastThrottledTime, !this._fps) throw new TypeError("FPS is not defined.");
            return this._currentFps = 1e3 / this._delta, this._currentFps > this._fps ? void this._rafEmitter.run() : (this._rafEmitterEvent = o(e), this._rafEmitterEvent.delta = this._delta, this._rafEmitterEvent.fps = this._currentFps, this._lastThrottledTime = this._rafEmitterEvent.time, this._shouldDraw = !0, this._didEmitFrameData || (this.trigger("start", this._rafEmitterEvent), this._didEmitFrameData = !0), void this.trigger("update", this._rafEmitterEvent))
        }, r._onRAFEmitterDraw = function() {
            this._shouldDraw && (this._shouldDraw = !1, this.trigger("draw", this._rafEmitterEvent))
        }, r._onRAFEmitterStop = function() {
            this._lastThrottledTime = 0, this._didEmitFrameData = !1, this.trigger("stop", this._rafEmitterEvent)
        }, t.exports = n
    }, {
        "./RAFEmitter": 106,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/clone": 90
    }],
    111: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("draw")
    }, {
        "./RAFInterfaceController": 108
    }],
    112: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("external")
    }, {
        "./RAFInterfaceController": 108
    }],
    113: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 108
    }],
    114: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("draw")
    }, {
        "./RAFInterfaceController": 108
    }],
    115: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("external")
    }, {
        "./RAFInterfaceController": 108
    }],
    116: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 108
    }],
    117: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, this._reset(), this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }
        e("@marcom/ac-polyfills/performance/now");
        var r;
        r = n.prototype, r.subscribe = function(e, t) {
            return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
        }, r.unsubscribe = function(e) {
            return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
        }, r.trigger = function(e, t) {
            var i;
            for (i = 0; i < this._subscriberArrayLength; i++) null !== this._subscribers[this._subscribersOrder[i]] && this._subscribers[this._subscribersOrder[i]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[i]].trigger(e, t)
        }, r.destroy = function() {
            var e = this._cancel();
            return this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
        }, r.useExternalAnimationFrame = function(e) {
            if ("boolean" == typeof e) {
                var t = this._isUsingExternalAnimationFrame;
                return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
            }
        }, r._run = function() {
            if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), !0
        }, r._cancel = function() {
            var e = !1;
            return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
        }, r._onSubscribersAnimationFrameStart = function(e) {
            var t;
            for (t = 0; t < this._subscriberArrayLength; t++) null !== this._subscribers[this._subscribersOrder[t]] && this._subscribers[this._subscribersOrder[t]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameStart(e)
        }, r._onSubscribersAnimationFrameEnd = function(e) {
            var t;
            for (t = 0; t < this._subscriberArrayLength; t++) null !== this._subscribers[this._subscribersOrder[t]] && this._subscribers[this._subscribersOrder[t]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameEnd(e)
        }, r._onAnimationFrame = function(e) {
            this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this._onSubscribersAnimationFrameStart(this._rafData), this.trigger("update", this._rafData), this.trigger("external", this._rafData), this.trigger("draw", this._rafData), this._onSubscribersAnimationFrameEnd(this._rafData), this._willRun || this._reset()
        }, r._onExternalAnimationFrame = function(e) {
            this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
        }, r._reset = function() {
            this._rafData = {
                time: 0,
                delta: 0,
                fps: 0,
                naturalFps: 0,
                timeNow: 0
            }, this._subscribers = {}, this._subscribersOrder = [], this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0
        }, t.exports = n
    }, {
        "@marcom/ac-polyfills/performance/now": void 0
    }],
    118: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = "ac-raf-executor:sharedRAFExecutorInstance",
            s = "2.0.1",
            o = e("./RAFExecutor");
        t.exports = n.share(r, s, o)
    }, {
        "./RAFExecutor": 117,
        "@marcom/ac-shared-instance": 119
    }],
    119: [function(e, t, i) {
        "use strict";
        t.exports = {
            SharedInstance: e("./ac-shared-instance/SharedInstance")
        }
    }, {
        "./ac-shared-instance/SharedInstance": 120
    }],
    120: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = window,
            s = "AC",
            o = "SharedInstance",
            a = r[s],
            l = function() {
                var e = {};
                return {
                    get: function(t, i) {
                        var n = null;
                        return e[t] && e[t][i] && (n = e[t][i]), n
                    },
                    set: function(t, i, n) {
                        return e[t] || (e[t] = {}), "function" == typeof n ? e[t][i] = new n : e[t][i] = n, e[t][i]
                    },
                    share: function(e, t, i) {
                        var n = this.get(e, t);
                        return n || (n = this.set(e, t, i)), n
                    },
                    remove: function(t, i) {
                        var r = "undefined" == typeof i ? "undefined" : n(i);
                        if ("string" === r || "number" === r) {
                            if (!e[t] || !e[t][i]) return;
                            return void(e[t][i] = null)
                        }
                        e[t] && (e[t] = null)
                    }
                }
            }();
        a || (a = r[s] = {}), a[o] || (a[o] = l), t.exports = a[o]
    }, {}],
    121: [function(e, t, i) {
        arguments[4][54][0].apply(i, arguments)
    }, {
        "./ac-event-emitter-micro/EventEmitterMicro": 122,
        dup: 54
    }],
    122: [function(e, t, i) {
        arguments[4][55][0].apply(i, arguments)
    }, {
        dup: 55
    }],
    123: [function(e, t, i) {
        "use strict";
        t.exports = {
            majorVersionNumber: "3.x"
        }
    }, {}],
    124: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, s.call(this), this.id = a.getNewID(), this.executor = e.executor || o, this._reset(), this._willRun = !1, this._didDestroy = !1
        }
        var r, s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = e("./sharedRAFExecutorInstance"),
            a = e("./sharedRAFEmitterIDGeneratorInstance");
        r = n.prototype = Object.create(s.prototype), r.run = function() {
            return this._willRun || (this._willRun = !0), this._subscribe()
        }, r.cancel = function() {
            this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
        }, r.destroy = function() {
            var e = this.willRun();
            return this.cancel(), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, e
        }, r.willRun = function() {
            return this._willRun
        }, r.isRunning = function() {
            return this._isRunning
        }, r._subscribe = function() {
            return this.executor.subscribe(this)
        }, r._unsubscribe = function() {
            return this.executor.unsubscribe(this)
        }, r._onAnimationFrameStart = function(e) {
            this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
        }, r._onAnimationFrameEnd = function(e) {
            this._willRun || (this.trigger("stop", e), this._reset())
        }, r._reset = function() {
            this._didEmitFrameData = !1, this._isRunning = !1
        }, t.exports = n
    }, {
        "./sharedRAFEmitterIDGeneratorInstance": 132,
        "./sharedRAFExecutorInstance": 133,
        "@marcom/ac-event-emitter-micro": 121
    }],
    125: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }
        var r, s = e("@marcom/ac-event-emitter-micro/EventEmitterMicro");
        r = n.prototype, r.frameRequestedPhase = "requested", r.startPhase = "start", r.runPhases = ["update", "external", "draw"], r.endPhase = "end", r.disabledPhase = "disabled", r.beforePhaseEventPrefix = "before:", r.afterPhaseEventPrefix = "after:", r.subscribe = function(e, t) {
            return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
        }, r.subscribeImmediate = function(e, t) {
            return this._totalSubscribeCount++, this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id), this._subscribers[e.id] = e, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
        }, r.unsubscribe = function(e) {
            return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
        }, r.getSubscribeID = function() {
            return this._totalSubscribeCount += 1
        }, r.destroy = function() {
            var e = this._cancel();
            return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
        }, r.useExternalAnimationFrame = function(e) {
            if ("boolean" == typeof e) {
                var t = this._isUsingExternalAnimationFrame;
                return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
            }
        }, r.updatePhases = function() {
            this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
        }, r._run = function() {
            if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
        }, r._cancel = function() {
            var e = !1;
            return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
        }, r._onAnimationFrame = function(e) {
            for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
            for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
                for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
                this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
            }
            for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
        }, r._onExternalAnimationFrame = function(e) {
            this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
        }, r._reset = function() {
            this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
        }, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 122
    }],
    126: [function(e, t, i) {
        "use strict";
        var n = e("./SingleCallRAFEmitter"),
            r = function(e) {
                this.phase = e, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e, t) {
            return t === !0 && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, e), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, e), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2), this._currentFrameID
        }, s.cancelAnimationFrame = function(e) {
            this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
        }, s._onRAFExecuted = function(e) {
            for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
            this._frameCallbacks.length = 0, this._frameCallbackLength = 0
        }, s._onBeforeRAFExecutorStart = function() {
            Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
        }, s._onBeforeRAFExecutorPhase = function() {
            this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
        }, s._onAfterRAFExecutorPhase = function() {
            this._phaseActive = !1
        }, s._cachePhaseIndex = function() {
            this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
        }, s._cancelRunningAnimationFrame = function() {
            this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
        }, s._cancelCurrentAnimationFrame = function() {
            this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
        }, s._cancelNextAnimationFrame = function() {
            this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
        }, t.exports = r
    }, {
        "./SingleCallRAFEmitter": 128
    }],
    127: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterface"),
            r = function() {
                this.events = {}
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].requestAnimationFrame
        }, s.cancelAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].cancelAnimationFrame
        }, t.exports = new r
    }, {
        "./RAFInterface": 126
    }],
    128: [function(e, t, i) {
        "use strict";
        var n = e("./RAFEmitter"),
            r = function(e) {
                n.call(this, e)
            },
            s = r.prototype = Object.create(n.prototype);
        s._subscribe = function() {
            return this.executor.subscribe(this, !0)
        }, t.exports = r
    }, {
        "./RAFEmitter": 124
    }],
    129: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 127
    }],
    130: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("draw")
    }, {
        "./RAFInterfaceController": 127
    }],
    131: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("external")
    }, {
        "./RAFInterfaceController": 127
    }],
    132: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = e("../.release-info.js").majorVersionNumber,
            s = function() {
                this._currentID = 0
            };
        s.prototype.getNewID = function() {
            return this._currentID++, "raf:" + this._currentID
        }, t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, s)
    }, {
        "../.release-info.js": 123,
        "@marcom/ac-shared-instance": 135
    }],
    133: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = e("../.release-info.js").majorVersionNumber,
            s = e("./RAFExecutor");
        t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, s)
    }, {
        "../.release-info.js": 123,
        "./RAFExecutor": 125,
        "@marcom/ac-shared-instance": 135
    }],
    134: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 127
    }],
    135: [function(e, t, i) {
        arguments[4][119][0].apply(i, arguments)
    }, {
        "./ac-shared-instance/SharedInstance": 136,
        dup: 119
    }],
    136: [function(e, t, i) {
        arguments[4][120][0].apply(i, arguments)
    }, {
        dup: 120
    }],
    137: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            l = e("./Model/AnimSystemModel"),
            c = e("./Keyframes/Keyframe"),
            u = e("./Keyframes/KeyframeCSSClass"),
            h = e("./Keyframes/KeyframeDiscreteEvent"),
            m = e("./ScrollGroup"),
            d = e("./TimeGroup"),
            f = e("./utils/arrayToObject"),
            p = {
                create: e("@marcom/ac-raf-emitter/RAFEmitter"),
                update: e("@marcom/ac-raf-emitter/update"),
                cancelUpdate: e("@marcom/ac-raf-emitter/cancelUpdate"),
                external: e("@marcom/ac-raf-emitter/external"),
                draw: e("@marcom/ac-raf-emitter/draw")
            },
            v = null,
            _ = function(e) {
                function t() {
                    n(this, t);
                    var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    if (v) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
                    return v = e, e.groups = [], e.scrollSystems = [], e.timeSystems = [], e._forceUpdateRAFId = -1, e.setupEvents(), e
                }
                return s(t, e), o(t, [{
                    key: "initialize",
                    value: function() {
                        this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.groups.forEach(function(e) {
                            return e.destroy()
                        }), this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(l.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate)
                    }
                }, {
                    key: "createTimeGroup",
                    value: function(e) {
                        var t = new d(e, this);
                        return this.groups.push(t), this.timeSystems.push(t), this.trigger(l.EVENTS.ON_GROUP_CREATED, t), t
                    }
                }, {
                    key: "createScrollGroup",
                    value: function(e) {
                        if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
                        var t = new m(e, this);
                        return this.groups.push(t), this.scrollSystems.push(t), this.trigger(l.EVENTS.ON_GROUP_CREATED, t), t
                    }
                }, {
                    key: "removeGroup",
                    value: function(e) {
                        var t = this;
                        e.keyframeControllers.forEach(function(t) {
                            return e.removeKeyframeController(t)
                        }), p.update(function() {
                            var i = t.groups.indexOf(e);
                            i !== -1 && t.groups.splice(i, 1), i = t.scrollSystems.indexOf(e), i !== -1 && t.scrollSystems.splice(i, 1), i = t.timeSystems.indexOf(e), i !== -1 && t.timeSystems.splice(i, 1), p.update(function() {
                                return e.destroy()
                            })
                        })
                    }
                }, {
                    key: "createDOMGroups",
                    value: function() {
                        var e = this;
                        document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(function(t) {
                            return e.createScrollGroup(t)
                        }), document.querySelectorAll("[data-anim-time-group]").forEach(function(t) {
                            return e.createTimeGroup(t)
                        }), this.trigger(l.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
                    }
                }, {
                    key: "createDOMKeyframes",
                    value: function() {
                        var e = this,
                            t = [];
                        [c.DATA_ATTRIBUTE, u.DATA_ATTRIBUTE, h.DATA_ATTRIBUTE].forEach(function(e) {
                            for (var i = 0; i < 12; i++) t.push(e + (0 === i ? "" : "-" + (i - 1)))
                        });
                        for (var i = 0; i < t.length; i++)
                            for (var n = t[i], r = document.querySelectorAll("[" + n + "]"), s = 0; s < r.length; s++) {
                                var o = r[s],
                                    a = JSON.parse(o.getAttribute(n));
                                this.addKeyframe(o, a)
                            }
                        p.update(function() {
                            return e.groups.forEach(function(e) {
                                return e.onKeyframesDirty({
                                    preventOnScroll: !0
                                })
                            })
                        }, !0), p.update(function() {
                            e.groups.forEach(function(e) {
                                return e.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, e)
                            }), e.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, e), e.groups.forEach(function(e) {
                                return e.reconcile()
                            }), e.onScroll()
                        }, !0)
                    }
                }, {
                    key: "initializeModel",
                    value: function() {
                        l.pageMetrics.windowHeight = window.innerHeight, l.pageMetrics.windowWidth = window.innerWidth, l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset, l.pageMetrics.breakpoint = l.getBreakpoint();
                        var e = document.documentElement.getBoundingClientRect();
                        l.pageMetrics.documentOffsetX = e.left + l.pageMetrics.scrollX, l.pageMetrics.documentOffsetY = e.top + l.pageMetrics.scrollY
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), window.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onResizeImmediate)
                    }
                }, {
                    key: "determineActiveKeyframes",
                    value: function() {
                        for (var e = f(Array.from(document.documentElement.classList)), t = 0, i = this.groups.length; t < i; t++) this.groups[t].determineActiveKeyframes(e)
                    }
                }, {
                    key: "onScroll",
                    value: function() {
                        l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
                        for (var e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e]._onScroll();
                        this.trigger(l.PageEvents.ON_SCROLL, l.pageMetrics)
                    }
                }, {
                    key: "onResizeImmediate",
                    value: function() {
                        l.pageMetrics.windowHeight = window.innerHeight, l.pageMetrics.windowWidth = window.innerWidth, l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
                        var e = document.documentElement.getBoundingClientRect();
                        l.pageMetrics.documentOffsetX = e.left + l.pageMetrics.scrollX, l.pageMetrics.documentOffsetY = e.top + l.pageMetrics.scrollY, window.clearTimeout(l.RESIZE_TIMEOUT), l.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(l.PageEvents.ON_RESIZE_IMMEDIATE, l.pageMetrics)
                    }
                }, {
                    key: "onResizedDebounced",
                    value: function() {
                        var e = this;
                        p.update(function() {
                            var t = l.pageMetrics.breakpoint,
                                i = l.getBreakpoint(),
                                n = i !== t;
                            if (n) {
                                l.pageMetrics.previousBreakpoint = t, l.pageMetrics.breakpoint = i;
                                for (var r = 0, s = e.groups.length; r < s; r++) e.groups[r]._onBreakpointChange();
                                e.trigger(l.PageEvents.ON_BREAKPOINT_CHANGE, l.pageMetrics)
                            }
                            for (var o = 0, a = e.groups.length; o < a; o++) e.groups[o].forceUpdate({
                                recalculateActiveKeyframes: n,
                                waitForNextUpdate: !1
                            });
                            e.trigger(l.PageEvents.ON_RESIZE_DEBOUNCED, l.pageMetrics)
                        }, !0)
                    }
                }, {
                    key: "forceUpdate",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = t.recalculateActiveKeyframes,
                            n = void 0 !== i && i,
                            r = t.waitForNextUpdate,
                            s = void 0 === r || r;
                        this._forceUpdateRAFId !== -1 && p.cancelUpdate(this._forceUpdateRAFId);
                        var o = function() {
                            for (var t = 0, i = e.groups.length; t < i; t++) {
                                var r = e.groups[t];
                                r.forceUpdate({
                                    recalculateActiveKeyframes: n,
                                    waitForNextUpdate: !1
                                })
                            }
                            return -1
                        };
                        this._forceUpdateRAFId = s ? p.update(o, !0) : o()
                    }
                }, {
                    key: "addKeyframe",
                    value: function(e, t) {
                        var i = this.getGroupForTarget(e);
                        return i = i || this.getGroupForTarget(document.body), i.addKeyframe(e, t)
                    }
                }, {
                    key: "getGroupForTarget",
                    value: function(e) {
                        if (e._animInfo && e._animInfo.group) return e._animInfo.group;
                        for (var t = e; t;) {
                            if (t._animInfo && t._animInfo.isGroup) return t._animInfo.group;
                            t = t.parentElement
                        }
                    }
                }, {
                    key: "getControllerForTarget",
                    value: function(e) {
                        return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
                    }
                }]), t
            }(a);
        t.exports = new _
    }, {
        "./Keyframes/Keyframe": 139,
        "./Keyframes/KeyframeCSSClass": 140,
        "./Keyframes/KeyframeDiscreteEvent": 141,
        "./Model/AnimSystemModel": 142,
        "./ScrollGroup": 151,
        "./TimeGroup": 152,
        "./utils/arrayToObject": 153,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/RAFEmitter": 124,
        "@marcom/ac-raf-emitter/cancelUpdate": 129,
        "@marcom/ac-raf-emitter/draw": 130,
        "@marcom/ac-raf-emitter/external": 131,
        "@marcom/ac-raf-emitter/update": 134
    }],
    138: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function _(e, t, i) {
                null === e && (e = Function.prototype);
                var n = Object.getOwnPropertyDescriptor(e, t);
                if (void 0 === n) {
                    var r = Object.getPrototypeOf(e);
                    return null === r ? void 0 : _(r, t, i)
                }
                if ("value" in n) return n.value;
                var s = n.get;
                if (void 0 !== s) return s.call(i)
            },
            l = e("./Model/AnimSystemModel"),
            c = (e("./Keyframes/Keyframe"), e("./Keyframes/KeyframeCSSClass")),
            u = e("./Model/InferKeyframeFromProps"),
            h = e("./utils/arrayToObject"),
            m = e("./Model/UUID"),
            d = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            f = e("@marcom/decompose-css-transform"),
            p = {
                update: e("@marcom/ac-raf-emitter/update"),
                external: e("@marcom/ac-raf-emitter/external"),
                draw: e("@marcom/ac-raf-emitter/draw")
            },
            v = function(e) {
                function t(e, i) {
                    n(this, t);
                    var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return s.uuid = m(), s.group = e, s.element = i, s._ownerIsElement = s.element instanceof Element, s._ownerIsElement ? s.friendlyName = s.element.tagName + "." + Array.from(s.element.classList).join(".") : s.friendlyName = s.element.friendlyName || s.uuid, s.element._animInfo = s.element._animInfo || new l.AnimInfo(e, s), s.element._animInfo.controller = s, s.element._animInfo.group = s.group, s.element._animInfo.controllers.push(s), s.tweenProps = {}, s.eventObject = new l.EventObject(s), s.needsStyleUpdate = !1, s.needsClassUpdate = !1, s.elementMetrics = s.group.metrics.add(s.element), s._parentElementMetrics = null, s.attributes = [], s.keyframes = {}, s._allKeyframes = [], s._activeKeyframes = [], s.keyframesRequiringDispatch = [], s.updateCachedValuesFromElement(), s.boundsMin = 0, s.boundsMax = 0, s
                }
                return s(t, e), o(t, [{
                    key: "destroy",
                    value: function() {
                        if (this.element._animInfo) {
                            this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
                            var e = this.element._animInfo.controllers.indexOf(this);
                            e !== -1 && this.element._animInfo.controllers.splice(e, 1), 0 === this.element._animInfo.controllers.length ? this.element._animInfo = null : (this.element._animInfo.controller = this.element._animInfo.controllers[this.element._animInfo.controllers.length - 1], this.element._animInfo.group = this.element._animInfo.controller.group)
                        }
                        this._parentElementMetrics = null, this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
                        for (var i = 0; i < this._allKeyframes.length; i++) this._allKeyframes[i].destroy();
                        this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "remove",
                    value: function() {
                        this.group.removeKeyframeController(this)
                    }
                }, {
                    key: "updateCachedValuesFromElement",
                    value: function() {
                        if (this._ownerIsElement) {
                            var e = getComputedStyle(this.element),
                                t = f(this.element, !0),
                                i = l.KeyframeDefaults.epsilon,
                                n = !1;
                            this.tweenProps.x = new l.TargetValue(t.translation[0], i, n), this.tweenProps.y = new l.TargetValue(t.translation[1], i, n), this.tweenProps.z = new l.TargetValue(t.translation[2], i, n), this.tweenProps.rotation = new l.TargetValue(t.eulerRotation[2], i, n), this.tweenProps.rotationX = new l.TargetValue(t.eulerRotation[0], i, n), this.tweenProps.rotationY = new l.TargetValue(t.eulerRotation[1], i, n), this.tweenProps.rotationZ = new l.TargetValue(t.eulerRotation[2], i, n), this.tweenProps.scale = new l.TargetValue(t.scale[0], i, n), this.tweenProps.scaleX = new l.TargetValue(t.scale[0], i, n), this.tweenProps.scaleY = new l.TargetValue(t.scale[1], i, n), this.tweenProps.opacity = new l.TargetValue(parseFloat(e.opacity), i, n)
                        }
                    }
                }, {
                    key: "addKeyframe",
                    value: function(e) {
                        var t = u(e);
                        if (!t) throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
                        var i = new t(this, e);
                        return i.parseOptions(e), i.id = this._allKeyframes.length, this._allKeyframes.push(i), i
                    }
                }, {
                    key: "needsUpdate",
                    value: function() {
                        for (var e = 0, t = this.attributes.length; e < t; e++) {
                            var i = this.attributes[e],
                                n = this.tweenProps[i],
                                r = Math.abs(n.current - n.target);
                            if (r > n.epsilon) return !0
                        }
                        return !1
                    }
                }, {
                    key: "updateLocalProgress",
                    value: function(e) {
                        for (var t = 0, i = this.attributes.length; t < i; t++) {
                            var n = this.attributes[t],
                                r = this.keyframes[this.attributes[t]];
                            if (1 !== r.length) {
                                var s = this.getNearestKeyframeForAttribute(e, n);
                                s && s.updateLocalProgress(e)
                            } else r[0].updateLocalProgress(e)
                        }
                    }
                }, {
                    key: "reconcile",
                    value: function() {
                        for (var e = 0, t = this.attributes.length; e < t; e++) {
                            var i = this.attributes[e],
                                n = this.getNearestKeyframeForAttribute(this.group.timelines.local, i);
                            n.updateLocalProgress(this.group.timelines.local), n.snapAtCreation && n.reconcile(i)
                        }
                    }
                }, {
                    key: "determineActiveKeyframes",
                    value: function(e) {
                        var t = this;
                        e = e || h(Array.from(document.documentElement.classList));
                        var i = this._activeKeyframes,
                            n = this.attributes;
                        this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
                        for (var r = 0; r < this._allKeyframes.length; r++) {
                            var s = this._allKeyframes[r];
                            if (s.setEnabled(e)) {
                                this._activeKeyframes.push(s);
                                for (var o in s.animValues) this.keyframes[o] = this.keyframes[o] || [], this.keyframes[o].push(s), this.attributes.indexOf(o) === -1 && this.attributes.push(o)
                            }
                        }
                        var a = i.filter(function(e) {
                            return t._activeKeyframes.indexOf(e) === -1
                        });
                        if (0 !== a.length) {
                            var l = n.filter(function(e) {
                                return t.attributes.indexOf(e) === -1
                            });
                            0 !== l.length && this._ownerIsElement && p.external(function() {
                                var e = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
                                    i = l.filter(function(t) {
                                        return e.indexOf(t) !== -1
                                    });
                                i.length > 0 && t.element.style.removeProperty("transform");
                                for (var n = 0, r = l.length; n < r; ++n) {
                                    var s = l[n],
                                        o = t.tweenProps[s];
                                    o.current = o.target = o.initialValue, "opacity" === s && t.element.style.removeProperty("opacity")
                                }
                                for (var u = 0, h = a.length; u < h; ++u) {
                                    var m = a[u];
                                    m instanceof c && m._unapply()
                                }
                            }, !0)
                        }
                    }
                }, {
                    key: "onDOMRead",
                    value: function(e) {
                        for (var t = 0, i = this.attributes.length; t < i; t++) {
                            var n = this.attributes[t],
                                r = this.getNearestKeyframeForAttribute(e.local, n);
                            r && r.onDOMRead(n)
                        }
                    }
                }, {
                    key: "onDOMWrite",
                    value: function() {
                        this._ownerIsElement ? this.onDOMWriteForElement() : this.onDOMWriteForObject(), this.handleEventDispatch()
                    }
                }, {
                    key: "onDOMWriteForObject",
                    value: function() {
                        for (var e = 0, t = this.attributes.length; e < t; e++) {
                            var i = this.attributes[e];
                            this.element[i] = this.tweenProps[i].current
                        }
                    }
                }, {
                    key: "onDOMWriteForElement",
                    value: function() {
                        var e = this.tweenProps,
                            t = "";
                        if ("undefined" != typeof this.keyframes.z ? t += "translate3d(" + e.x.current + "px," + e.y.current + "px, " + e.z.current + "px)" : "undefined" == typeof this.keyframes.x && "undefined" == typeof this.keyframes.y || (t += "translate(" + e.x.current + "px," + e.y.current + "px)"), "undefined" != typeof this.keyframes.rotation ? t += "rotate(" + e.rotation.current + "deg) " : ("undefined" != typeof this.keyframes.rotationX && (t += "rotateX(" + e.rotationX.current + "deg) "), "undefined" != typeof this.keyframes.rotationY && (t += "rotateY(" + e.rotationY.current + "deg) "), "undefined" != typeof this.keyframes.rotationZ && (t += "rotateZ(" + e.rotationZ.current + "deg) ")), "undefined" != typeof this.keyframes.scale) t += "scale(" + e.scale.current + "," + e.scale.current + ") ";
                        else {
                            var i = "undefined" != typeof this.keyframes.scaleX,
                                n = "undefined" != typeof this.keyframes.scaleY;
                            (i || n) && (t += "scale(" + e.scaleX.current + "," + e.scaleY.current + ") ")
                        }
                        if ("" !== t && (this.element.style.transform = t), "undefined" != typeof this.keyframes.opacity && (this.element.style.opacity = e.opacity.current), this.needsStyleUpdate) {
                            for (var r in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[r] && (this.element.style[r] = this.tweenProps.targetStyles[r]), this.tweenProps.targetStyles[r] = null;
                            this.needsStyleUpdate = !1
                        }
                        this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
                    }
                }, {
                    key: "handleEventDispatch",
                    value: function() {
                        if (0 !== this.keyframesRequiringDispatch.length) {
                            for (var e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
                                var i = this.keyframesRequiringDispatch[e];
                                i.needsEventDispatch = !1, this.eventObject.keyframe = i, this.eventObject.pageMetrics = l.pageMetrics, this.eventObject.event = i.event, this.trigger(i.event, this.eventObject)
                            }
                            this.keyframesRequiringDispatch.length = 0
                        }
                    }
                }, {
                    key: "updateAnimationConstraints",
                    value: function() {
                        for (var e = this, t = 0, i = this._activeKeyframes.length; t < i; t++) this._activeKeyframes[t].updateAnimationConstraints();
                        this.attributes.forEach(function(t) {
                            1 !== e.keyframes[t].length && e.keyframes[t].sort(l.KeyframeComparison)
                        }), this.updateDeferredPropertyValues()
                    }
                }, {
                    key: "refreshMetrics",
                    value: function() {
                        var e = new Set;
                        e.add(this.element), this._parentElementMetrics && e.add(this.element.parentElement), this._allKeyframes.forEach(function(t) {
                            return e.add(t.relativeTo)
                        }), this.group.metrics.refreshCollection(e), this.group.keyframesDirty = !0
                    }
                }, {
                    key: "updateDeferredPropertyValues",
                    value: function() {
                        for (var e = 0, t = this.attributes.length; e < t; e++) {
                            var i = this.attributes[e],
                                n = this.keyframes[i],
                                r = n[0];
                            if (!(r.keyframeType > l.KeyframeTypes.InterpolationForward))
                                for (var s = 0, o = n.length; s < o; s++) {
                                    var a = n[s];
                                    if (null === a.jsonProps[i][0]) {
                                        if (0 === s) {
                                            a.animValues[i][0] = this.tweenProps[i].initialValue;
                                            continue
                                        }
                                        a.animValues[i][0] = n[s - 1].animValues[i][1]
                                    }
                                    if (null === a.jsonProps[i][1]) {
                                        if (s === o - 1) throw new RangeError("AnimSystem - last keyframe cannot defer it's end value! " + i + ":[" + a.jsonProps[i][0] + ",null]");
                                        a.animValues[i][1] = n[s + 1].animValues[i][0]
                                    }
                                }
                        }
                    }
                }, {
                    key: "getBounds",
                    value: function(e) {
                        this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
                        for (var t = 0, i = this.attributes.length; t < i; t++)
                            for (var n = this.keyframes[this.attributes[t]], r = 0; r < n.length; r++) {
                                var s = n[r];
                                this.boundsMin = Math.min(s.start, this.boundsMin), this.boundsMax = Math.max(s.end, this.boundsMax), e.min = Math.min(s.start, e.min), e.max = Math.max(s.end, e.max)
                            }
                    }
                }, {
                    key: "getNearestKeyframeForAttribute",
                    value: function(e, t) {
                        var i = null,
                            n = Number.POSITIVE_INFINITY,
                            r = this.keyframes[t];
                        if (void 0 === r) return null;
                        var s = r.length;
                        if (0 === s) return null;
                        if (1 === s) return r[0];
                        for (var o = 0; o < s; o++) {
                            var a = r[o];
                            if (a.isInRange(e)) {
                                i = a;
                                break
                            }
                            var l = Math.min(Math.abs(e - a.start), Math.abs(e - a.end));
                            l < n && (n = l, i = a)
                        }
                        return i
                    }
                }, {
                    key: "getAllKeyframesForAttribute",
                    value: function(e) {
                        return this.keyframes[e]
                    }
                }, {
                    key: "updateKeyframe",
                    value: function(e, t) {
                        var i = this;
                        e.parseOptions(t), e.updateAnimationConstraints(), this.group.keyframesDirty = !0, p.update(function() {
                            i.trigger(l.EVENTS.ON_KEYFRAME_UPDATED, e), i.group.trigger(l.EVENTS.ON_KEYFRAME_UPDATED, e)
                        }, !0)
                    }
                }, {
                    key: "removeKeyframe",
                    value: function(e) {
                        var t = this._allKeyframes.indexOf(e);
                        t !== -1 && (this._allKeyframes.splice(t, 1), this.group.keyframesDirty = !0)
                    }
                }, {
                    key: "updateAnimation",
                    value: function(e, t) {
                        return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(e, t)
                    }
                }]), t
            }(d);
        Object.defineProperty(v.prototype, "parentElementMetrics", {
            get: function() {
                return null === this._parentElementMetrics && (this._parentElementMetrics = this.group.metrics.add(this.element.parentElement)), this._parentElementMetrics
            }
        }), t.exports = v
    }, {
        "./Keyframes/Keyframe": 139,
        "./Keyframes/KeyframeCSSClass": 140,
        "./Model/AnimSystemModel": 142,
        "./Model/InferKeyframeFromProps": 145,
        "./Model/UUID": 146,
        "./utils/arrayToObject": 153,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/draw": 130,
        "@marcom/ac-raf-emitter/external": 131,
        "@marcom/ac-raf-emitter/update": 134,
        "@marcom/decompose-css-transform": 155
    }],
    139: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("../Model/AnimSystemModel"),
            o = e("@marcom/sm-math-utils"),
            a = e("../Model/EasingFunctions"),
            l = e("../Model/UnitBezier"),
            c = e("../utils/arrayToObject"),
            u = function() {
                function e(t, i) {
                    n(this, e), this.controller = t, this.relativeTo = t.element, this.jsonProps = i, this.ease = t.group.defaultEase, this.easeFunctionString = s.KeyframeDefaults.easeFunctionString, this.easeFunction = a[this.easeFunctionString], this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = s.KeyframeTypes.Interpolation, this.hold = !1
                }
                return r(e, [{
                    key: "destroy",
                    value: function() {
                        this.controller = null, this.relativeTo = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
                    }
                }, {
                    key: "remove",
                    value: function() {
                        return this.controller.removeKeyframe(this)
                    }
                }, {
                    key: "parseOptions",
                    value: function(e) {
                        if (this.jsonProps = e, "" !== e.relativeTo && e.relativeTo ? e.relativeTo && (this.relativeTo = this.controller.group.element.querySelector(e.relativeTo) || document.querySelector(e.relativeTo), null === this.relativeTo && (console.warn("Keyframe for", this.controller.element.className, " .relativeTo failed to find " + e.relativeTo + "' via querySelector"), this.relativeTo = this.controller.element), this.controller.group.metrics.add(this.relativeTo)) : this.relativeTo = this.controller.element, e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease, e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation, e.easeFunction ? this.easeFunction = e.easeFunction : e.easeFunction = this.easeFunctionString, e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask, e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen, e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold, this.easeFunction = a[e.easeFunction], !a.hasOwnProperty(e.easeFunction)) {
                            var t = l.fromCSSString(e.easeFunction);
                            t ? this.easeFunction = t : console.error("Keyframe parseOptions cannot find EasingFunction named '" + e.easingFunction + "'")
                        }
                        for (var i in e)
                            if (s.KeyframeJSONReservedWords.indexOf(i) === -1) {
                                var n = e[i];
                                if (Array.isArray(n)) {
                                    if (this.animValues[i] = this.controller.group.expressionParser.parse(this, n), void 0 === this.controller.tweenProps[i] || !this.controller._ownerIsElement) {
                                        var r = 0;
                                        this.controller._ownerIsElement || (r = this.controller.element[i]);
                                        var o = new s.TargetValue(r, s.KeyframeDefaults.epsilon, this.snapAtCreation);
                                        this.controller.tweenProps[i] = o
                                    }
                                    var c = this.controller.tweenProps[i];
                                    if (e.epsilon) c.epsilon = e.epsilon;
                                    else {
                                        var u = Math.abs(this.animValues[i][0] - this.animValues[i][1]),
                                            h = Math.min(.001 * u, c.epsilon, s.KeyframeDefaults.epsilon);
                                        c.epsilon = Math.max(h, 1e-4)
                                    }
                                }
                            }
                        this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation, e.event && (this.event = e.event)
                    }
                }, {
                    key: "overwriteProps",
                    value: function(e) {
                        this.animValues = {};
                        var t = Object.assign({}, this.jsonProps, e);
                        this.controller.updateKeyframe(this, t)
                    }
                }, {
                    key: "updateLocalProgress",
                    value: function(e) {
                        if (this.start === this.end || e > this.end) return this.localT = 1, void(this.curvedT = this.easeFunction(this.localT));
                        var t = (e - this.start) / (this.end - this.start),
                            i = this.hold ? this.localT : 0;
                        this.localT = o.clamp(t, i, 1), this.curvedT = this.easeFunction(this.localT)
                    }
                }, {
                    key: "reconcile",
                    value: function(e) {
                        var t = this.animValues[e],
                            i = this.controller.tweenProps[e];
                        i.initialValue = t[0], i.target = t[0] + this.curvedT * (t[1] - t[0]), i.current !== i.target && (i.current = i.target, this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)));
                    }
                }, {
                    key: "reset",
                    value: function(e) {
                        this.localT = e || 0;
                        var t = this.ease;
                        this.ease = 1;
                        for (var i in this.animValues) this.reconcile(i);
                        this.ease = t
                    }
                }, {
                    key: "onDOMRead",
                    value: function(e) {
                        var t = this.animValues[e],
                            i = this.controller.tweenProps[e];
                        i.target = t[0] + this.curvedT * (t[1] - t[0]);
                        var n = i.current;
                        i.current += (i.target - i.current) * this.ease;
                        var r = i.current - i.target;
                        r < i.epsilon && r > -i.epsilon && (i.current = i.target, r = 0), "" === this.event || this.needsEventDispatch || (r > i.epsilon || r < -i.epsilon || 0 === r && n !== i.current) && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this))
                    }
                }, {
                    key: "isInRange",
                    value: function(e) {
                        return e >= this.start && e <= this.end
                    }
                }, {
                    key: "setEnabled",
                    value: function(e) {
                        e = e || c(Array.from(document.documentElement.classList));
                        var t = this.breakpointMask.indexOf(s.pageMetrics.breakpoint) !== -1,
                            i = !1;
                        return this.disabledWhen.length > 0 && (i = this.disabledWhen.some(function(t) {
                            return "undefined" != typeof e[t]
                        })), this.isEnabled = t && !i, this.isEnabled
                    }
                }, {
                    key: "updateAnimationConstraints",
                    value: function() {
                        this.start = this.controller.group.timeParser.parse(this, this.jsonProps.start), this.end = this.controller.group.timeParser.parse(this, this.jsonProps.end), this.updateAnimatedValueConstraints()
                    }
                }, {
                    key: "updateAnimatedValueConstraints",
                    value: function() {
                        for (var e in this.animValues) {
                            var t = this.jsonProps[e];
                            this.animValues[e] = this.controller.group.expressionParser.parse(this, t)
                        }
                    }
                }]), e
            }();
        u.DATA_ATTRIBUTE = "data-anim-tween", t.exports = u
    }, {
        "../Model/AnimSystemModel": 142,
        "../Model/EasingFunctions": 143,
        "../Model/UnitBezier": 147,
        "../utils/arrayToObject": 153,
        "@marcom/sm-math-utils": 156
    }],
    140: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            l = e("./Keyframe"),
            c = e("../Model/AnimSystemModel.js"),
            u = function(e) {
                function t(e, i) {
                    n(this, t);
                    var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return s.keyframeType = c.KeyframeTypes.CSSClass, s._triggerType = t.TRIGGER_TYPE_CSS_CLASS, s.cssClass = "", s.friendlyName = "", s.style = {
                        on: null,
                        off: null
                    }, s.toggle = !1, s.isApplied = !1, s
                }
                return s(t, e), a(t, [{
                    key: "parseOptions",
                    value: function(e) {
                        if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
                        if (e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 !== e.toggle && (this.toggle = e.toggle), void 0 !== e.cssClass) this._triggerType = t.TRIGGER_TYPE_CSS_CLASS, this.cssClass = e.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
                            add: [],
                            remove: []
                        });
                        else {
                            if (void 0 === e.style || !this.isValidStyleProperty(e.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
                            if (this._triggerType = t.TRIGGER_TYPE_STYLE_PROPERTY, this.style = e.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
                                this.style.off = {};
                                for (var i in this.style.on) this.style.off[i] = ""
                            }
                            void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
                        }
                        if (void 0 === e.end && (e.end = e.start), e.toggle = this.toggle, this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
                        else {
                            var n = getComputedStyle(this.controller.element);
                            this.isApplied = !0;
                            for (var r in this.style.on)
                                if (n[r] !== this.style.on[r]) {
                                    this.isApplied = !1;
                                    break
                                }
                        }
                        l.prototype.parseOptions.call(this, e), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new c.TargetValue(0, 1, (!1))), this.keyframeType = c.KeyframeTypes.CSSClass
                    }
                }, {
                    key: "updateLocalProgress",
                    value: function(e) {
                        this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
                    }
                }, {
                    key: "_apply",
                    value: function() {
                        if (this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
                        else {
                            for (var e in this.style.on) this.controller.tweenProps.targetStyles[e] = this.style.on[e];
                            this.controller.needsStyleUpdate = !0
                        }
                        this.isApplied = !0
                    }
                }, {
                    key: "_unapply",
                    value: function() {
                        if (this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
                        else {
                            for (var e in this.style.off) this.controller.tweenProps.targetStyles[e] = this.style.off[e];
                            this.controller.needsStyleUpdate = !0
                        }
                        this.isApplied = !1
                    }
                }, {
                    key: "isValidStyleProperty",
                    value: function(e) {
                        if (!e.hasOwnProperty("on")) return !1;
                        if ("object" !== o(e.on)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
                        if (this.toggle && e.hasOwnProperty("off") && "object" !== o(e.off)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
                        return !0
                    }
                }, {
                    key: "reconcile",
                    value: function(e, t) {}
                }, {
                    key: "onDOMRead",
                    value: function(e, t) {}
                }, {
                    key: "updateAnimatedValueConstraints",
                    value: function() {}
                }]), t
            }(l);
        u.TRIGGER_TYPE_CSS_CLASS = 0, u.TRIGGER_TYPE_STYLE_PROPERTY = 1, u.DATA_ATTRIBUTE = "data-anim-classname", t.exports = u
    }, {
        "../Model/AnimSystemModel.js": 142,
        "./Keyframe": 139
    }],
    141: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function h(e, t, i) {
                null === e && (e = Function.prototype);
                var n = Object.getOwnPropertyDescriptor(e, t);
                if (void 0 === n) {
                    var r = Object.getPrototypeOf(e);
                    return null === r ? void 0 : h(r, t, i)
                }
                if ("value" in n) return n.value;
                var s = n.get;
                if (void 0 !== s) return s.call(i)
            },
            l = e("./Keyframe"),
            c = e("../Model/AnimSystemModel.js"),
            u = function(e) {
                function t(e, i) {
                    n(this, t);
                    var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return s.keyframeType = c.KeyframeTypes.Event, s.isApplied = !1, s.hasDuration = !1, s.isCurrentlyInRange = !1, s
                }
                return s(t, e), o(t, [{
                    key: "parseOptions",
                    value: function(e) {
                        e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.style = void 0, e.cssClass = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 === e.end && (e.end = e.start), this.event = e.event, this.animValues[this.event] = [0, 0], "undefined" == typeof this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new c.TargetValue(0, 1, (!1))), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "parseOptions", this).call(this, e), this.keyframeType = c.KeyframeTypes.Event
                    }
                }, {
                    key: "updateLocalProgress",
                    value: function(e) {
                        if (this.hasDuration) {
                            var t = this.isCurrentlyInRange,
                                i = e >= this.start && e <= this.end;
                            if (t === i) return;
                            return i && !t ? this._trigger(this.event + ":enter") : t && !i && this._trigger(this.event + ":exit"), void(this.isCurrentlyInRange = i)
                        }!this.isApplied && e >= this.start ? (this._trigger(this.event), this.isApplied = !0) : this.isApplied && e < this.start && (this._trigger(this.event + ":reverse"), this.isApplied = !1)
                    }
                }, {
                    key: "_trigger",
                    value: function(e) {
                        this.controller.eventObject.event = e, this.controller.eventObject.keyframe = this, this.controller.trigger(e, this.controller.eventObject)
                    }
                }, {
                    key: "updateAnimationConstraints",
                    value: function() {
                        a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateAnimationConstraints", this).call(this), this.hasDuration = this.start !== this.end
                    }
                }, {
                    key: "reset",
                    value: function(e) {
                        this.isApplied = !1, this.isCurrentlyInRange = !1, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reset", this).call(this, e)
                    }
                }, {
                    key: "onDOMRead",
                    value: function(e, t) {}
                }, {
                    key: "reconcile",
                    value: function(e, t) {}
                }, {
                    key: "updateAnimatedValueConstraints",
                    value: function() {}
                }]), t
            }(l);
        u.DATA_ATTRIBUTE = "data-anim-event", t.exports = u
    }, {
        "../Model/AnimSystemModel.js": 142,
        "./Keyframe": 139
    }],
    142: [function(e, t, i) {
        "use strict";
        var n = {
            GUI_INSTANCE: null,
            ANIM_INSTANCE: null,
            VIEWPORT_EMITTER_ELEMENT: void 0,
            LOCAL_STORAGE_KEYS: {
                GuiPosition: "GuiPosition-0"
            },
            RESIZE_TIMEOUT: -1,
            BREAKPOINTS: [{
                name: "S",
                longName: "small",
                mediaQuery: "only screen and (max-width: 735px)"
            }, {
                name: "M",
                longName: "medium",
                mediaQuery: "only screen and (max-width: 1068px)"
            }, {
                name: "L",
                longName: "xlarge",
                mediaQuery: "only screen and (min-width: 1442px)"
            }, {
                name: "L",
                longName: "large",
                mediaQuery: "only screen and (min-width: 1069px)"
            }],
            getBreakpoint: function() {
                for (var e = 0; e < n.BREAKPOINTS.length; e++) {
                    var t = n.BREAKPOINTS[e],
                        i = window.matchMedia(t.mediaQuery);
                    if (i.matches) return t.name
                }
            },
            KeyframeDefaults: {
                ease: .1,
                epsilon: .05,
                easeFunctionString: "linear",
                easeFunction: "linear",
                hold: !1,
                snapAtCreation: !1,
                toggle: !1,
                breakpointMask: "SMLX",
                event: "",
                disabledWhen: [],
                cssClass: ""
            },
            KeyframeTypes: {
                Interpolation: 0,
                InterpolationForward: 1,
                CSSClass: 2,
                Event: 3
            },
            EVENTS: {
                ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
                ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
                ON_GROUP_CREATED: "ON_GROUP_CREATED",
                ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
                ON_TIMELINE_START: "ON_TIMELINE_START",
                ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
                ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE"
            },
            PageEvents: {
                ON_SCROLL: "ON_SCROLL",
                ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
                ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
                ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
            },
            KeyframeJSONReservedWords: ["event", "cssClass", "style", "relativeTo", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
            TargetValue: function(e, t, i) {
                this.epsilon = parseFloat(t), this.snapAtCreation = i, this.initialValue = e, this.target = e, this.current = e
            },
            Timeline: function() {
                this.local = 0, this.localUnclamped = 0
            },
            ViewableRange: function(e, t) {
                this.a = e.top - t, this.a < 0 && (this.a = e.top), this.b = e.top, this.d = e.bottom, this.c = Math.max(this.d - t, this.b)
            },
            pageMetrics: new function() {
                this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
            },
            EventObject: function(e) {
                this.controller = e, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
            },
            KeyframeComparison: function(e, t) {
                return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
            },
            AnimInfo: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.isGroup = i, this.group = e, this.controller = t, this.controllers = []
            }
        };
        t.exports = n
    }, {}],
    143: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function s() {
            n(this, s), this.linear = function(e) {
                return e
            }, this.easeInQuad = function(e) {
                return e * e
            }, this.easeOutQuad = function(e) {
                return e * (2 - e)
            }, this.easeInOutQuad = function(e) {
                return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
            }, this.easeInSin = function(e) {
                return 1 + Math.sin(Math.PI / 2 * e - Math.PI / 2)
            }, this.easeOutSin = function(e) {
                return Math.sin(Math.PI / 2 * e)
            }, this.easeInOutSin = function(e) {
                return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
            }, this.easeInElastic = function(e) {
                return 0 === e ? e : (.04 - .04 / e) * Math.sin(25 * e) + 1
            }, this.easeOutElastic = function(e) {
                return .04 * e / --e * Math.sin(25 * e)
            }, this.easeInOutElastic = function(e) {
                return (e -= .5) < 0 ? (.02 + .01 / e) * Math.sin(50 * e) : (.02 - .01 / e) * Math.sin(50 * e) + 1
            }, this.easeOutBack = function(e) {
                return e -= 1, e * e * (2.70158 * e + 1.70158) + 1
            }, this.easeInCubic = function(e) {
                return e * e * e
            }, this.easeOutCubic = function(e) {
                return --e * e * e + 1
            }, this.easeInOutCubic = function(e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            }, this.easeInQuart = function(e) {
                return e * e * e * e
            }, this.easeOutQuart = function(e) {
                return 1 - --e * e * e * e
            }, this.easeInOutQuart = function(e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
            }, this.easeInQuint = function(e) {
                return e * e * e * e * e
            }, this.easeOutQuint = function(e) {
                return 1 + --e * e * e * e * e
            }, this.easeInOutQuint = function(e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
            }
        };
        t.exports = new r
    }, {}],
    144: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("./AnimSystemModel"),
            o = function(e, t) {
                return void 0 === e || null === e ? t : e
            },
            a = function() {
                function e() {
                    n(this, e), this._metrics = new WeakMap
                }
                return r(e, [{
                    key: "destroy",
                    value: function() {
                        this._metrics = null
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        var t = this._metrics.get(e);
                        if (t) return t;
                        var i = new l(e);
                        return this._metrics.set(e, i), this._refreshMetrics(e, i)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this._metrics.get(e)
                    }
                }, {
                    key: "refreshCollection",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            return t._refreshMetrics(e, null)
                        })
                    }
                }, {
                    key: "refreshMetrics",
                    value: function(e) {
                        return this._refreshMetrics(e)
                    }
                }, {
                    key: "_refreshMetrics",
                    value: function(e, t) {
                        if (t = t || this._metrics.get(e), !(e instanceof Element)) return t.width = o(e.width, 0), t.height = o(e.height, 0), t.top = o(e.top, 0), t.left = o(e.left, 0), t.right = t.left + t.width, t.bottom = t.top + t.height, t;
                        if (void 0 === e.offsetWidth) {
                            var i = e.getBoundingClientRect();
                            return t.width = i.width, t.height = i.height, t.top = s.pageMetrics.scrollY + i.top, t.left = s.pageMetrics.scrollX + i.left, t.right = t.left + t.width, t.bottom = t.top + t.height, t
                        }
                        t.width = e.offsetWidth, t.height = e.offsetHeight, t.top = s.pageMetrics.documentOffsetY, t.left = s.pageMetrics.documentOffsetX;
                        for (var n = e; n;) t.top += n.offsetTop, t.left += n.offsetLeft, n = n.offsetParent;
                        return t.right = t.left + t.width, t.bottom = t.top + t.height, t
                    }
                }]), e
            }(),
            l = function() {
                function e(t) {
                    n(this, e), this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
                }
                return r(e, [{
                    key: "toString",
                    value: function() {
                        return "top:" + this.top + ", bottom:" + this.bottom + ", left:" + this.left + ", right:" + this.right + ", height:" + this.height + ", width:" + this.width
                    }
                }, {
                    key: "toObject",
                    value: function() {
                        return {
                            top: this.top,
                            bottom: this.bottom,
                            left: this.left,
                            right: this.right,
                            height: this.height,
                            width: this.width
                        }
                    }
                }]), e
            }();
        t.exports = a
    }, {
        "./AnimSystemModel": 142
    }],
    145: [function(e, t, i) {
        "use strict";
        var n = e("./AnimSystemModel"),
            r = e("../Keyframes/Keyframe"),
            s = e("../Keyframes/KeyframeDiscreteEvent"),
            o = e("../Keyframes/KeyframeCSSClass"),
            a = function(e) {
                for (var t in e) {
                    var i = e[t];
                    if (n.KeyframeJSONReservedWords.indexOf(t) === -1 && Array.isArray(i)) return !0
                }
                return !1
            };
        t.exports = function(e) {
            if (void 0 !== e.cssClass || void 0 !== e.style) {
                if (a(e)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
                return o
            }
            if (a(e)) return r;
            if (e.event) return s;
            throw "Could not determine tween type based on " + JSON.stringify(e)
        }
    }, {
        "../Keyframes/Keyframe": 139,
        "../Keyframes/KeyframeCSSClass": 140,
        "../Keyframes/KeyframeDiscreteEvent": 141,
        "./AnimSystemModel": 142
    }],
    146: [function(e, t, i) {
        "use strict";
        t.exports = function() {
            for (var e = "", t = 0; t < 8; t++) {
                var i = 16 * Math.random() | 0;
                8 !== t && 12 !== t && 16 !== t && 20 !== t || (e += "-"), e += (12 === t ? 4 : 16 === t ? 3 & i | 8 : i).toString(16)
            }
            return e
        }
    }, {}],
    147: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = 1e-5,
            o = Math.abs,
            a = 5,
            l = function() {
                function e(t, i, r, s) {
                    n(this, e), this.cp = new Float32Array(6), this.cp[0] = 3 * t, this.cp[1] = 3 * (r - t) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * i, this.cp[4] = 3 * (s - i) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
                }
                return r(e, [{
                    key: "sampleCurveX",
                    value: function(e) {
                        return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e
                    }
                }, {
                    key: "sampleCurveY",
                    value: function(e) {
                        return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e
                    }
                }, {
                    key: "sampleCurveDerivativeX",
                    value: function(e) {
                        return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0]
                    }
                }, {
                    key: "solveCurveX",
                    value: function(e) {
                        var t, i, n, r, l, c;
                        for (n = e, c = 0; c < a; c++) {
                            if (r = this.sampleCurveX(n) - e, o(r) < s) return n;
                            if (l = this.sampleCurveDerivativeX(n), o(l) < s) break;
                            n -= r / l
                        }
                        if (t = 0, i = 1, n = e, n < t) return t;
                        if (n > i) return i;
                        for (; t < i;) {
                            if (r = this.sampleCurveX(n), o(r - e) < s) return n;
                            e > r ? t = n : i = n, n = .5 * (i - t) + t
                        }
                        return n
                    }
                }, {
                    key: "solve",
                    value: function(e) {
                        return this.sampleCurveY(this.solveCurveX(e))
                    }
                }]), e
            }(),
            c = /\d*\.?\d+/g;
        l.fromCSSString = function(e) {
            var t = e.match(c);
            if (4 !== t.length) throw "UnitBezier could not convert " + e + " to cubic-bezier";
            var i = t.map(Number),
                n = new l(i[0], i[1], i[2], i[3]);
            return n.solve.bind(n)
        }, t.exports = l
    }, {}],
    148: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("../Model/AnimSystemModel"),
            o = e("./Operations"),
            a = /([-|+])?(\d+\.?\d*)(px|vh|vw|pw|ph|%w|%h|rw|rh|%)?|([-+*\/])/g,
            l = /^[-+]?(?:[0-9]{0,30}\.)?[0-9]{1,30}(?:[Ee][-+]?[1-2]?[0-9])?$/g,
            c = function() {
                function e(t) {
                    n(this, e), this.group = t
                }
                return r(e, [{
                    key: "parse",
                    value: function(e, t) {
                        if (Array.isArray(t)) return this.parseArray(e, t);
                        throw new Error("Keyframe value `" + t + "` is not supported. Only arrays in the form of [start,end] are currently supported")
                    }
                }, {
                    key: "parseArray",
                    value: function(e, t) {
                        var i = this.parseExpression(e, t[0]),
                            n = this.parseExpression(e, t[1]);
                        return [i, n]
                    }
                }, {
                    key: "parseExpression",
                    value: function(e, t) {
                        if (null === t) return 0;
                        if ("number" == typeof t) return t;
                        for (var i = 5, n = void 0;
                            (n = t.indexOf("(")) !== -1 && --i > 0;) {
                            var r = this.captureParenthesis(t, n),
                                s = this.parseExpression(e, r);
                            t = t.replace("(" + r + ")", s)
                        }
                        for (var l = void 0, c = []; null !== (l = a.exec(t));)
                            if (l.index === a.lastIndex && a.lastIndex++, l[4]) c.push(o.GetOpCode(l[4]));
                            else {
                                var u = l[1],
                                    h = parseFloat(l[2]),
                                    m = l[3];
                                "-" === u && (h *= -1);
                                var d = this.parseSplitUnit(e, h, m);
                                c.push(d)
                            }
                        var f = c.length;
                        if (3 === f && "function" == typeof c[1]) return c[1](c[0], c[2]);
                        for (var p = 0; p < f; p++)
                            if ("function" == typeof c[p] && 1 === c[p].priority) {
                                var v = c[p - 1],
                                    _ = c[p + 1],
                                    y = c[p](v, _);
                                c[p - 1] = null, c[p + 0] = null, c[p + 1] = y, p += 1
                            }
                        for (var g = 0; null == c[g] && g < f;) g += 1;
                        var b = c[g],
                            E = null,
                            w = null;
                        for (g += 1; g < f; g++) null !== c[g] ? c[g] instanceof Function ? E = c[g] : (null === w && (w = c[g]), null !== w && (E = E || o.add, b = E(b, w), E = null, w = null)) : g += 1;
                        return b
                    }
                }, {
                    key: "parseSplitUnit",
                    value: function(e, t, i) {
                        if ("undefined" == typeof i) return parseFloat(t);
                        switch (i) {
                            case "vh":
                                return .01 * t * s.pageMetrics.windowHeight;
                            case "%":
                                return .01 * t * e.controller.elementMetrics.height;
                            case "px":
                                return t;
                            case "rh":
                                return .01 * t * this.group.metrics.get(e.relativeTo).height;
                            case "vw":
                                return .01 * t * s.pageMetrics.windowWidth;
                            case "rw":
                                return .01 * t * this.group.metrics.get(e.relativeTo).width;
                            case "%w":
                                return .01 * t * e.controller.elementMetrics.width;
                            case "%h":
                                return .01 * t * e.controller.elementMetrics.height;
                            case "pw":
                                return .01 * t * e.controller.parentElementMetrics.width;
                            case "ph":
                                return .01 * t * e.controller.parentElementMetrics.height;
                            default:
                                throw new Error("ExpressionParser: no strategy found for unit `" + i + "` only `vh, vw, %, ph, pw` are supported")
                        }
                    }
                }, {
                    key: "captureParenthesis",
                    value: function(e, t) {
                        for (var i = "", n = 0, r = !1, s = e.length, o = t; o < s; o++)
                            if ("(" === e[o] ? (n += 1, r && (i += e[o]), r = !0) : ")" === e[o] ? (n -= 1, 0 !== n && (i += e[o])) : r && (i += e[o]), r && 0 === n) return i
                    }
                }, {
                    key: "isUnitlessNumber",
                    value: function(e) {
                        return String(e).match(l)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.group = null
                    }
                }, {
                    key: "logParts",
                    value: function(e) {
                        console.log(e.reduce(function(e, t) {
                            return "function" == typeof t ? e + t.friendlyName + " " : e + (t + " ")
                        }, ""))
                    }
                }]), e
            }();
        t.exports = c
    }, {
        "../Model/AnimSystemModel": 142,
        "./Operations": 149
    }],
    149: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function s() {
            n(this, s), this.add = function(e, t) {
                return e + t
            }, this.sub = function(e, t) {
                return e - t
            }, this.mul = function(e, t) {
                return e * t
            }, this.div = function(e, t) {
                return e / t
            }, this.add.friendlyName = "add", this.sub.friendlyName = "sub", this.mul.friendlyName = "mul", this.div.friendlyName = "div", this.add.priority = 0, this.sub.priority = 0, this.mul.priority = 1, this.div.priority = 1, this.GetOpCode = function(e) {
                switch (e) {
                    case "-":
                        return this.sub;
                    case "+":
                        return this.add;
                    case "*":
                        return this.mul;
                    case "/":
                        return this.div;
                    default:
                        throw new Error('AnimSystem.parsing.Operations - op code "' + e + "\" was found. Only '+ - * /' are supported. Check expression for typos/spacing issues")
                }
            }
        };
        t.exports = new r
    }, {}],
    150: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = function() {
                function e(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    n(this, e), this.group = t, this.groupIsTimeBased = i
                }
                return r(e, [{
                    key: "parse",
                    value: function(e, t) {
                        if ("number" == typeof t) return t;
                        var i = this.groupIsTimeBased ? 0 : this.group.metrics.get(e.relativeTo).top,
                            n = this.group.expressionParser.parseExpression(e, t),
                            r = n + i;
                        return this.group.convertScrollPositionToTValue(r)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.group = null
                    }
                }]), e
            }();
        t.exports = s
    }, {}],
    151: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function y(e, t, i) {
                null === e && (e = Function.prototype);
                var n = Object.getOwnPropertyDescriptor(e, t);
                if (void 0 === n) {
                    var r = Object.getPrototypeOf(e);
                    return null === r ? void 0 : y(r, t, i)
                }
                if ("value" in n) return n.value;
                var s = n.get;
                if (void 0 !== s) return s.call(i)
            },
            l = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            c = e("@marcom/sm-math-utils"),
            u = e("./utils/arrayToObject"),
            h = e("./Model/AnimSystemModel"),
            m = e("./Model/ElementMetricsLookup"),
            d = e("./Parsing/ExpressionParser"),
            f = e("./Parsing/TimeParser"),
            p = e("./KeyframeController"),
            v = {
                create: e("@marcom/ac-raf-emitter/RAFEmitter"),
                update: e("@marcom/ac-raf-emitter/update"),
                draw: e("@marcom/ac-raf-emitter/draw")
            },
            _ = function(e) {
                function t(e, i) {
                    n(this, t);
                    var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return s.anim = i, s.element = e, s.name = s.name || e.getAttribute("data-anim-scroll-group"), s.isEnabled = !0, s.timelines = new h.Timeline, s.metrics = new m, s.metrics.add(s.element), s.expressionParser = new d(s), s.timeParser = new f(s), s.boundsMin = 0, s.boundsMax = 0, s.lastPosition = 0, s.timelineUpdateRequired = !1, s._keyframesDirty = !1, s.viewableRange = s.createViewableRange(), s.defaultEase = h.KeyframeDefaults.ease, s.keyframeControllers = [], s.updateProgress(s.getPosition()), s.onDOMRead = s.onDOMRead.bind(s), s.onDOMWrite = s.onDOMWrite.bind(s), s.gui = null, s.finalizeInit(), s
                }
                return s(t, e), o(t, [{
                    key: "finalizeInit",
                    value: function() {
                        this.element._animInfo = new h.AnimInfo(this, null, (!0)), this.setupRAFEmitter()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.expressionParser.destroy(), this.expressionParser = null, this.timeParser.destroy(), this.timeParser = null;
                        for (var e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].destroy();
                        this.timelines = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null, this.element._animInfo = null), this.element = null, this.isEnabled = !1, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "removeKeyframeController",
                    value: function(e) {
                        var t = this;
                        if (this.keyframeControllers.includes(e)) {
                            var i = e._allKeyframes;
                            e._allKeyframes = [], this.keyframesDirty = !0, v.draw(function() {
                                var n = t.keyframeControllers.indexOf(e);
                                n !== -1 && (t.keyframeControllers.splice(n, 1), e.onDOMWrite(), i.forEach(function(e) {
                                    return e.destroy()
                                }), e.destroy(), t.gui && t.gui.create())
                            }, !0)
                        }
                    }
                }, {
                    key: "remove",
                    value: function() {
                        this.anim.removeGroup(this)
                    }
                }, {
                    key: "setupRAFEmitter",
                    value: function(e) {
                        var t = this;
                        this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = e || new v.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", function() {
                            return t.reconcile()
                        })
                    }
                }, {
                    key: "requestDOMChange",
                    value: function() {
                        return !!this.isEnabled && this.rafEmitter.run()
                    }
                }, {
                    key: "onDOMRead",
                    value: function() {
                        this.keyframesDirty && this.onKeyframesDirty();
                        for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMRead(this.timelines)
                    }
                }, {
                    key: "onDOMWrite",
                    value: function() {
                        for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMWrite(this.timelines);
                        this.needsUpdate() && this.requestDOMChange()
                    }
                }, {
                    key: "needsUpdate",
                    value: function() {
                        if (this._keyframesDirty) return !0;
                        for (var e = 0, t = this.keyframeControllers.length; e < t; e++)
                            if (this.keyframeControllers[e].needsUpdate()) return !0;
                        return !1
                    }
                }, {
                    key: "addKeyframe",
                    value: function(e, t) {
                        var i = this.getControllerForTarget(e);
                        return null === i && (i = new p(this, e), this.keyframeControllers.push(i)), this.keyframesDirty = !0, i.addKeyframe(t)
                    }
                }, {
                    key: "forceUpdate",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.waitForNextUpdate,
                            i = void 0 === t || t;
                        this.isEnabled && (this.refreshActiveMetrics(), this.viewableRange = this.createViewableRange(), this.timelineUpdateRequired = !0, i ? this.keyframesDirty = !0 : this.onKeyframesDirty())
                    }
                }, {
                    key: "onKeyframesDirty",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.preventOnScroll,
                            i = void 0 !== t && t;
                        this.determineActiveKeyframes(), this.keyframesDirty = !1;
                        for (var n = 0, r = this.keyframeControllers.length; n < r; n++) this.keyframeControllers[n].updateAnimationConstraints();
                        this.updateProgress(this.getPosition()), this.updateBounds(), i || this._onScroll(), this.gui && this.gui.create()
                    }
                }, {
                    key: "refreshActiveMetrics",
                    value: function() {
                        var e = new Set;
                        e.add(this.element), this.keyframeControllers.forEach(function(t) {
                            e.add(t.element), t._parentElementMetrics && e.add(t.element.parentElement), t._allKeyframes.forEach(function(t) {
                                return e.add(t.relativeTo)
                            })
                        }), this.metrics.refreshCollection(e)
                    }
                }, {
                    key: "reconcile",
                    value: function() {
                        for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].reconcile()
                    }
                }, {
                    key: "determineActiveKeyframes",
                    value: function(e) {
                        e = e || u(Array.from(document.documentElement.classList));
                        for (var t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].determineActiveKeyframes(e)
                    }
                }, {
                    key: "updateBounds",
                    value: function() {
                        if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
                        for (var e = {
                                min: Number.POSITIVE_INFINITY,
                                max: Number.NEGATIVE_INFINITY
                            }, t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].getBounds(e);
                        var n = this.convertTValueToScrollPosition(e.min),
                            r = this.convertTValueToScrollPosition(e.max);
                        r - n < h.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(n - .5 * h.pageMetrics.windowHeight), e.max = this.convertScrollPositionToTValue(r + .5 * h.pageMetrics.windowHeight)) : (e.min -= .001, e.max += .001), this.boundsMin = e.min, this.boundsMax = e.max, this.timelineUpdateRequired = !0
                    }
                }, {
                    key: "createViewableRange",
                    value: function() {
                        return new h.ViewableRange(this.metrics.get(this.element), h.pageMetrics.windowHeight)
                    }
                }, {
                    key: "_onBreakpointChange",
                    value: function(e, t) {
                        this.keyframesDirty = !0, this.determineActiveKeyframes()
                    }
                }, {
                    key: "updateProgress",
                    value: function(e) {
                        return this.hasDuration() ? void(this.timelines.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a)) : void(this.timelines.local = this.timelines.localUnclamped = 0)
                    }
                }, {
                    key: "performTimelineDispatch",
                    value: function() {
                        for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateLocalProgress(this.timelines.local);
                        this.trigger(h.EVENTS.ON_TIMELINE_UPDATE, this.timelines.local), this.timelineUpdateRequired = !1, this.lastPosition !== this.timelines.local && (this.lastPosition <= this.boundsMin && this.timelines.localUnclamped > this.boundsMin ? this.trigger(h.EVENTS.ON_TIMELINE_START, this) : this.lastPosition >= this.boundsMin && this.timelines.localUnclamped < this.boundsMin ? this.trigger(h.EVENTS.ON_TIMELINE_START + ":reverse", this) : this.lastPosition <= this.boundsMax && this.timelines.localUnclamped >= this.boundsMax ? this.trigger(h.EVENTS.ON_TIMELINE_COMPLETE, this) : this.lastPosition >= this.boundsMax && this.timelines.localUnclamped < this.boundsMax && this.trigger(h.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this)), null !== this.gui && this.gui.onScrollUpdate(this.timelines)
                    }
                }, {
                    key: "_onScroll",
                    value: function(e) {
                        if (!this.isEnabled) return !1;
                        void 0 === e && (e = this.getPosition()), this.updateProgress(e);
                        var t = this.lastPosition === this.boundsMin || this.lastPosition === this.boundsMax,
                            i = this.timelines.localUnclamped === this.boundsMin || this.timelines.localUnclamped === this.boundsMax;
                        if (!this.timelineUpdateRequired && t && i && this.lastPosition === e) return void(this.timelines.local = this.timelines.localUnclamped);
                        if (this.timelineUpdateRequired || this.timelines.localUnclamped > this.boundsMin && this.timelines.localUnclamped < this.boundsMax) return this.timelines.local = c.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped);
                        var n = this.lastPosition > this.boundsMin && this.lastPosition < this.boundsMax,
                            r = this.timelines.localUnclamped <= this.boundsMin || this.timelines.localUnclamped >= this.boundsMax;
                        return n && r ? (this.timelines.local = c.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped)) : void(null !== this.gui && this.gui.onScrollUpdate(this.timelines))
                    }
                }, {
                    key: "convertScrollPositionToTValue",
                    value: function(e) {
                        return this.hasDuration() ? c.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
                    }
                }, {
                    key: "convertTValueToScrollPosition",
                    value: function(e) {
                        return this.hasDuration() ? c.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
                    }
                }, {
                    key: "hasDuration",
                    value: function() {
                        return this.viewableRange.a !== this.viewableRange.d
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return h.pageMetrics.scrollY
                    }
                }, {
                    key: "getControllerForTarget",
                    value: function(e) {
                        if (!e._animInfo || !e._animInfo.controllers) return null;
                        if (e._animInfo.controller && e._animInfo.controller.group === this) return e._animInfo.controller;
                        for (var t = e._animInfo.controllers, i = 0, n = t.length; i < n; i++)
                            if (t[i].group === this) return t[i];
                        return null
                    }
                }, {
                    key: "trigger",
                    value: function(e, t) {
                        if ("undefined" != typeof this._events[e])
                            for (var i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
                    }
                }, {
                    key: "keyframesDirty",
                    set: function(e) {
                        this._keyframesDirty = e, this._keyframesDirty && this.requestDOMChange()
                    },
                    get: function() {
                        return this._keyframesDirty
                    }
                }, {
                    key: "keyFrames",
                    get: function() {
                        return this.viewableRange
                    }
                }]), t
            }(l);
        t.exports = _
    }, {
        "./KeyframeController": 138,
        "./Model/AnimSystemModel": 142,
        "./Model/ElementMetricsLookup": 144,
        "./Parsing/ExpressionParser": 148,
        "./Parsing/TimeParser": 150,
        "./utils/arrayToObject": 153,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/RAFEmitter": 124,
        "@marcom/ac-raf-emitter/draw": 130,
        "@marcom/ac-raf-emitter/update": 134,
        "@marcom/sm-math-utils": 156
    }],
    152: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function d(e, t, i) {
                null === e && (e = Function.prototype);
                var n = Object.getOwnPropertyDescriptor(e, t);
                if (void 0 === n) {
                    var r = Object.getPrototypeOf(e);
                    return null === r ? void 0 : d(r, t, i)
                }
                if ("value" in n) return n.value;
                var s = n.get;
                if (void 0 !== s) return s.call(i)
            },
            l = e("./ScrollGroup"),
            c = e("@marcom/sm-math-utils"),
            u = 0,
            h = {
                create: e("@marcom/ac-raf-emitter/RAFEmitter")
            },
            m = function(e) {
                function t(e, i) {
                    n(this, t), e || (e = document.createElement("div"), e.className = "TimeGroup-" + u++);
                    var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return s.name = s.name || e.getAttribute("data-anim-time-group"), s.timeParser.groupIsTimeBased = !0, s._isPaused = !0, s._repeats = 0, s._isReversed = !1, s._timeScale = 1, s
                }
                return s(t, e), o(t, [{
                    key: "finalizeInit",
                    value: function() {
                        if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
                        this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "finalizeInit", this).call(this)
                    }
                }, {
                    key: "progress",
                    value: function(e, t) {
                        if (void 0 === e) return 0 === this.boundsMax ? 0 : this.timelines.local / this.boundsMax;
                        var i = e * this.boundsMax;
                        this.timelineUpdateRequired = t || !1, this._onScroll(i)
                    }
                }, {
                    key: "time",
                    value: function(e, t) {
                        return void 0 === e ? this.timelines.local : (e = c.clamp(e, this.boundsMin, this.boundsMax), this.timelineUpdateRequired = t || !1, void this._onScroll(e))
                    }
                }, {
                    key: "play",
                    value: function(e) {
                        this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(e, !0), this._playheadEmitter.run()
                    }
                }, {
                    key: "reverse",
                    value: function(e) {
                        this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(e, !0), this._playheadEmitter.run()
                    }
                }, {
                    key: "reversed",
                    value: function(e) {
                        return void 0 === e ? this._isReversed : (this._isReversed = e, this)
                    }
                }, {
                    key: "restart",
                    value: function() {
                        this._isReversed ? (this.progress(1, !0), this.reverse(this.time())) : (this.progress(0, !0), this.play(this.time()))
                    }
                }, {
                    key: "pause",
                    value: function(e) {
                        this.time(e), this._isPaused = !0
                    }
                }, {
                    key: "paused",
                    value: function(e) {
                        return void 0 === e ? this._isPaused : (this._isPaused = e, this._isPaused || this.play(), this)
                    }
                }, {
                    key: "onPlayTimeUpdate",
                    value: function(e) {
                        if (!this._isPaused) {
                            var i = c.clamp(e.delta / 1e3, 0, .5);
                            this._isReversed && (i = -i);
                            var n = this.time(),
                                r = n + i * this._timeScale;
                            if (this._repeats === t.REPEAT_FOREVER || this._repeats > 0) {
                                var s = !1;
                                !this._isReversed && r > this.boundsMax ? (r -= this.boundsMax, s = !0) : this._isReversed && r < 0 && (r = this.boundsMax + r, s = !0), s && (this._repeats = this._repeats === t.REPEAT_FOREVER ? t.REPEAT_FOREVER : this._repeats - 1)
                            }
                            this.time(r);
                            var o = !this._isReversed && this.timelines.local !== this.duration,
                                a = this._isReversed && 0 !== this.timelines.local;
                            (o || a) && this._playheadEmitter.run()
                        }
                    }
                }, {
                    key: "updateProgress",
                    value: function(e) {
                        return this.hasDuration() ? void(this.timelines.localUnclamped = e) : void(this.timelines.local = this.timelines.localUnclamped = 0)
                    }
                }, {
                    key: "updateBounds",
                    value: function() {
                        if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
                        for (var e = {
                                min: Number.POSITIVE_INFINITY,
                                max: Number.NEGATIVE_INFINITY
                            }, t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].getBounds(e);
                        this.boundsMin = 0, this.boundsMax = e.max, this.viewableRange.a = this.viewableRange.b = 0, this.viewableRange.c = this.viewableRange.d = this.boundsMax, this.timelineUpdateRequired = !0
                    }
                }, {
                    key: "setupRAFEmitter",
                    value: function(e) {
                        this._playheadEmitter = new h.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setupRAFEmitter", this).call(this, e)
                    }
                }, {
                    key: "timeScale",
                    value: function(e) {
                        return void 0 === e ? this._timeScale : (this._timeScale = e, this)
                    }
                }, {
                    key: "repeats",
                    value: function(e) {
                        return void 0 === e ? this._repeats : (this._repeats = e, this)
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return this.timelines.local
                    }
                }, {
                    key: "convertScrollPositionToTValue",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "convertTValueToScrollPosition",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "hasDuration",
                    value: function() {
                        return this.duration > 0
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._playheadEmitter.destroy(), this._playheadEmitter = null, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "duration",
                    get: function() {
                        return this.keyframesDirty && this.onKeyframesDirty({
                            preventOnScroll: !0
                        }), this.boundsMax
                    }
                }]), t
            }(l);
        m.REPEAT_FOREVER = -1, t.exports = m
    }, {
        "./ScrollGroup": 151,
        "@marcom/ac-raf-emitter/RAFEmitter": 124,
        "@marcom/sm-math-utils": 156
    }],
    153: [function(e, t, i) {
        "use strict";
        var n = function(e) {
            return e.reduce(function(e, t) {
                return e[t] = t, e
            }, {})
        };
        t.exports = n
    }, {}],
    154: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("@apple/client-detect").ClientDetect,
            o = s.browser(),
            a = {
                dataAttr: "data-download-button",
                dataAttrDisclaimer: "data-download-disclaimer"
            },
            l = function() {
                function e(t) {
                    n(this, e), t = t || {}, this.options = Object.assign({}, a, t), this.buttons = [].slice.call(document.querySelectorAll("[" + this.options.dataAttr + "]")), this.disclaimers = [].slice.call(document.querySelectorAll("[" + this.options.dataAttrDisclaimer + "]")), this.handleBtnClick = this._handleBtnClick.bind(this), this._handleDisclaimers()
                }
                return r(e, [{
                    key: "initialize",
                    value: function() {
                        for (var e = 0, t = this.buttons.length; e < t; e++) this.buttons[e].addEventListener("click", this.handleBtnClick)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        for (var e = 0, t = this.buttons.length; e < t; e++) this.buttons[e].removeEventListener("click", this.handleBtnClick)
                    }
                }, {
                    key: "addButton",
                    value: function(e) {
                        this.buttons.push(e), this._addEventListener(e)
                    }
                }, {
                    key: "removeButton",
                    value: function(e) {
                        this.buttons = this.buttons.filter(function(t) {
                            return t !== e
                        }), this._removeEventListener(e)
                    }
                }, {
                    key: "_handleBtnClick",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.target,
                            i = t.dataset.url,
                            n = t.dataset.windowsFallback || "/itunes/download/",
                            r = t.dataset.androidFallback || "intent://scan/#Intent;scheme=apple-music;package=com.apple.android.music;end";
                        i && s.launchClient(i, function(e, t) {
                            e !== -1 && 0 !== e || (t.isAndroid !== !0 && t.isLinux !== !0 || (window.location.href = r), t.isWindows === !0 && (window.location.href = n))
                        })
                    }
                }, {
                    key: "_addEventListener",
                    value: function(e) {
                        e.addEventListener("click", this.handleBtnClick)
                    }
                }, {
                    key: "_removeEventListener",
                    value: function(e) {
                        e.removeEventListener("click", this.handleBtnClick)
                    }
                }, {
                    key: "_handleDisclaimers",
                    value: function() {
                        for (var e = 0, t = this.disclaimers.length; e < t; e++) {
                            var i = this.disclaimers[e].getAttribute(this.options.dataAttrDisclaimer);
                            if (i) {
                                i = JSON.parse(i);
                                var n = this._titleCaseStr(i.browser);
                                n && !!o["is" + n] == !0 && (this.disclaimers[e].classList.remove("visuallyhidden"), this.disclaimers[e].setAttribute("aria-hidden", "false"))
                            }
                        }
                    }
                }, {
                    key: "_titleCaseStr",
                    value: function(e) {
                        if (!e) return !1;
                        e = e.toLowerCase().split(" ");
                        for (var t = 0, i = e.length; t < i; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
                        return e.join("")
                    }
                }]), e
            }();
        t.exports = l
    }, {
        "@apple/client-detect": 5
    }],
    155: [function(e, t, i) {
        "use strict";
        var n = {
                create: e("gl-mat4/create"),
                invert: e("gl-mat4/invert"),
                clone: e("gl-mat4/clone"),
                transpose: e("gl-mat4/transpose")
            },
            r = {
                create: e("gl-vec3/create"),
                dot: e("gl-vec3/dot"),
                normalize: e("gl-vec3/normalize"),
                length: e("gl-vec3/length"),
                cross: e("gl-vec3/cross"),
                fromValues: e("gl-vec3/fromValues")
            },
            s = {
                create: e("gl-vec4/create"),
                transformMat4: e("gl-vec4/transformMat4"),
                fromValues: e("gl-vec4/fromValues")
            },
            o = (Math.PI / 180, 180 / Math.PI),
            a = 0,
            l = 1,
            c = 3,
            u = 4,
            h = 5,
            m = 7,
            d = 11,
            f = 12,
            p = 13,
            v = 15,
            _ = function(e, t) {
                t = t || !1;
                for (var i = n.clone(e), a = r.create(), l = r.create(), u = r.create(), h = s.create(), f = s.create(), p = (r.create(), 0); p < 16; p++) i[p] /= i[v];
                var _ = n.clone(i);
                _[c] = 0, _[m] = 0, _[d] = 0, _[v] = 1;
                var E = (i[3], i[7], i[11], i[12]),
                    w = i[13],
                    A = i[14],
                    x = (i[15], s.create());
                if (b(i[c]) && b(i[m]) && b(i[d])) h = s.fromValues(0, 0, 0, 1);
                else {
                    x[0] = i[c], x[1] = i[m], x[2] = i[d], x[3] = i[v];
                    var S = n.invert(n.create(), _),
                        T = n.transpose(n.create(), S);
                    h = s.transformMat4(h, x, T)
                }
                a[0] = E, a[1] = w, a[2] = A;
                var O = [r.create(), r.create(), r.create()];
                O[0][0] = i[0], O[0][1] = i[1], O[0][2] = i[2], O[1][0] = i[4], O[1][1] = i[5], O[1][2] = i[6], O[2][0] = i[8], O[2][1] = i[9], O[2][2] = i[10], l[0] = r.length(O[0]), r.normalize(O[0], O[0]), u[0] = r.dot(O[0], O[1]), O[1] = y(O[1], O[0], 1, -u[0]), l[1] = r.length(O[1]), r.normalize(O[1], O[1]), u[0] /= l[1], u[1] = r.dot(O[0], O[2]), O[2] = y(O[2], O[0], 1, -u[1]), u[2] = r.dot(O[1], O[2]), O[2] = y(O[2], O[1], 1, -u[2]), l[2] = r.length(O[2]), r.normalize(O[2], O[2]), u[1] /= l[2], u[2] /= l[2];
                var F = r.cross(r.create(), O[1], O[2]);
                if (r.dot(O[0], F) < 0)
                    for (p = 0; p < 3; p++) l[p] *= -1, O[p][0] *= -1, O[p][1] *= -1, O[p][2] *= -1;
                f[0] = .5 * Math.sqrt(Math.max(1 + O[0][0] - O[1][1] - O[2][2], 0)), f[1] = .5 * Math.sqrt(Math.max(1 - O[0][0] + O[1][1] - O[2][2], 0)), f[2] = .5 * Math.sqrt(Math.max(1 - O[0][0] - O[1][1] + O[2][2], 0)), f[3] = .5 * Math.sqrt(Math.max(1 + O[0][0] + O[1][1] + O[2][2], 0)), O[2][1] > O[1][2] && (f[0] = -f[0]), O[0][2] > O[2][0] && (f[1] = -f[1]), O[1][0] > O[0][1] && (f[2] = -f[2]);
                var C = s.fromValues(f[0], f[1], f[2], 2 * Math.acos(f[3])),
                    k = g(f);
                return t && (u[0] = Math.round(u[0] * o * 100) / 100, u[1] = Math.round(u[1] * o * 100) / 100, u[2] = Math.round(u[2] * o * 100) / 100, k[0] = Math.round(k[0] * o * 100) / 100, k[1] = Math.round(k[1] * o * 100) / 100, k[2] = Math.round(k[2] * o * 100) / 100, C[3] = Math.round(C[3] * o * 100) / 100), {
                    translation: a,
                    scale: l,
                    skew: u,
                    perspective: h,
                    quaternion: f,
                    eulerRotation: k,
                    axisAngle: C
                }
            },
            y = function(e, t, i, n) {
                var s = r.create();
                return s[0] = i * e[0] + n * t[0], s[1] = i * e[1] + n * t[1], s[2] = i * e[2] + n * t[2], s
            },
            g = function(e) {
                var t, i, n, s = e[3] * e[3],
                    o = e[0] * e[0],
                    a = e[1] * e[1],
                    l = e[2] * e[2],
                    c = o + a + l + s,
                    u = e[0] * e[1] + e[2] * e[3];
                return u > .499 * c ? (i = 2 * Math.atan2(e[0], e[3]), n = Math.PI / 2, t = 0, r.fromValues(t, i, n)) : u < -.499 * c ? (i = -2 * Math.atan2(e[0], e[3]), n = -Math.PI / 2, t = 0, r.fromValues(t, i, n)) : (i = Math.atan2(2 * e[1] * e[3] - 2 * e[0] * e[2], o - a - l + s), n = Math.asin(2 * u / c), t = Math.atan2(2 * e[0] * e[3] - 2 * e[1] * e[2], -o + a - l + s), r.fromValues(t, i, n))
            },
            b = function(e) {
                return Math.abs(e) < 1e-4
            },
            E = function(e) {
                var t = String(getComputedStyle(e).transform).trim(),
                    i = n.create();
                if ("none" === t || "" === t) return i;
                var r, s, o = t.slice(0, t.indexOf("("));
                if ("matrix3d" === o)
                    for (r = t.slice(9, -1).split(","), s = 0; s < r.length; s++) i[s] = parseFloat(r[s]);
                else {
                    if ("matrix" !== o) throw new TypeError("Invalid Matrix Value");
                    for (r = t.slice(7, -1).split(","), s = r.length; s--;) r[s] = parseFloat(r[s]);
                    i[a] = r[0], i[l] = r[1], i[f] = r[4], i[u] = r[2], i[h] = r[3], i[p] = r[5]
                }
                return i
            };
        t.exports = function(e, t) {
            var i = E(e);
            return _(i, t)
        }
    }, {
        "gl-mat4/clone": 172,
        "gl-mat4/create": 173,
        "gl-mat4/invert": 174,
        "gl-mat4/transpose": 175,
        "gl-vec3/create": 176,
        "gl-vec3/cross": 177,
        "gl-vec3/dot": 178,
        "gl-vec3/fromValues": 179,
        "gl-vec3/length": 180,
        "gl-vec3/normalize": 181,
        "gl-vec4/create": 182,
        "gl-vec4/fromValues": 183,
        "gl-vec4/transformMat4": 184
    }],
    156: [function(e, t, i) {
        "use strict";
        t.exports = {
            lerp: function(e, t, i) {
                return t + (i - t) * e
            },
            map: function(e, t, i, n, r) {
                return n + (r - n) * (e - t) / (i - t)
            },
            mapClamp: function(e, t, i, n, r) {
                var s = n + (r - n) * (e - t) / (i - t);
                return Math.max(n, Math.min(r, s))
            },
            norm: function(e, t, i) {
                return (e - t) / (i - t)
            },
            clamp: function(e, t, i) {
                return Math.max(t, Math.min(i, e))
            },
            randFloat: function(e, t) {
                return Math.random() * (t - e) + e
            },
            randInt: function(e, t) {
                return Math.floor(Math.random() * (t - e) + e)
            }
        }
    }, {}],
    157: [function(e, t, i) {
        "use strict";
        t.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }, {}],
    158: [function(e, t, i) {
        "use strict";
        t.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(e) {
                    return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Opera") === -1
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(e) {
                    return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(e) {
                    return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var e = !1;
                    return document.documentMode && (e = parseInt(document.documentMode, 10)), e
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }],
            os: [{
                name: "windows",
                test: function(e) {
                    return e.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(e) {
                    return e.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function(e) {
                    return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(e) {
                    return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && e.ua.indexOf("Android") === -1
                }
            }, {
                name: "fireos",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function(e) {
                    return e.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }, {}],
    159: [function(e, t, i) {
        "use strict";

        function n(e) {
            return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
        }

        function r(e, t) {
            if ("function" == typeof e.parseVersion) return e.parseVersion(t);
            var i = e.version || e.userAgent;
            "string" == typeof i && (i = [i]);
            for (var r, s = i.length, o = 0; o < s; o++)
                if (r = t.match(n(i[o])), r && r.length > 1) return r[1].replace(/_/g, ".");
            return !1
        }

        function s(e, t, i) {
            for (var n, s, o = e.length, a = 0; a < o; a++)
                if ("function" == typeof e[a].test ? e[a].test(i) === !0 && (n = e[a].name) : i.ua.indexOf(e[a].userAgent) > -1 && (n = e[a].name), n) {
                    if (t[n] = !0, s = r(e[a], i.ua), "string" == typeof s) {
                        var l = s.split(".");
                        t.version.string = s, l && l.length > 0 && (t.version.major = parseInt(l[0] || 0), t.version.minor = parseInt(l[1] || 0), t.version.patch = parseInt(l[2] || 0))
                    } else "edge" === n && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
                    return "function" == typeof e[a].parseDocumentMode && (t.version.documentMode = e[a].parseDocumentMode()), t
                }
            return t
        }

        function o(e) {
            var t = {};
            return t.browser = s(l.browser, a.browser, e), t.os = s(l.os, a.os, e), t
        }
        var a = e("./defaults"),
            l = e("./dictionary");
        t.exports = o
    }, {
        "./defaults": 157,
        "./dictionary": 158
    }],
    160: [function(e, t, i) {
        "use strict";
        var n = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        t.exports = e("./parseUserAgent")(n)
    }, {
        "./parseUserAgent": 159
    }],
    161: [function(e, t, i) {
        arguments[4][123][0].apply(i, arguments)
    }, {
        dup: 123
    }],
    162: [function(e, t, i) {
        arguments[4][124][0].apply(i, arguments)
    }, {
        "./sharedRAFEmitterIDGeneratorInstance": 167,
        "./sharedRAFExecutorInstance": 168,
        "@marcom/ac-event-emitter-micro": 54,
        dup: 124
    }],
    163: [function(e, t, i) {
        arguments[4][125][0].apply(i, arguments)
    }, {
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 55,
        dup: 125
    }],
    164: [function(e, t, i) {
        arguments[4][126][0].apply(i, arguments)
    }, {
        "./SingleCallRAFEmitter": 166,
        dup: 126
    }],
    165: [function(e, t, i) {
        arguments[4][127][0].apply(i, arguments)
    }, {
        "./RAFInterface": 164,
        dup: 127
    }],
    166: [function(e, t, i) {
        arguments[4][128][0].apply(i, arguments)
    }, {
        "./RAFEmitter": 162,
        dup: 128
    }],
    167: [function(e, t, i) {
        arguments[4][132][0].apply(i, arguments)
    }, {
        "../.release-info.js": 161,
        "@marcom/ac-shared-instance": 119,
        dup: 132
    }],
    168: [function(e, t, i) {
        arguments[4][133][0].apply(i, arguments)
    }, {
        "../.release-info.js": 161,
        "./RAFExecutor": 163,
        "@marcom/ac-shared-instance": 119,
        dup: 133
    }],
    169: [function(e, t, i) {
        arguments[4][134][0].apply(i, arguments)
    }, {
        "./RAFInterfaceController": 165,
        dup: 134
    }],
    170: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            r.call(this), this._id = e || o.ID, this._options = Object.assign({}, o.OPTIONS, t), this._allowDOMEventDispatch = !1, this._allowElementStateData = !1, this._options.removeNamespace = "boolean" != typeof this._options.removeNamespace || this._options.removeNamespace, this._el = this._initViewportEl(this._id), this._resizing = !1, this._mediaQueryLists = {
                resolution: {
                    retina: window.matchMedia(c.RETINA)
                },
                orientation: {
                    portrait: window.matchMedia(c.PORTRAIT),
                    landscape: window.matchMedia(c.LANDSCAPE)
                }
            }, this._viewport = this._getViewport(this._options.removeNamespace), this._retina = this._getRetina(this._mediaQueryLists.resolution.retina), this._orientation = this._initOrientation(), this._addListeners(), this._updateElementStateData()
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = e("@marcom/ac-raf-emitter/update"),
            o = {
                ID: "viewport-emitter",
                OPTIONS: {
                    removeNamespace: !0
                }
            },
            a = {
                DOM_DISPATCH: "data-viewport-emitter-dispatch",
                STATE: "data-viewport-emitter-state"
            },
            l = "::before",
            c = {
                RETINA: "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
                PORTRAIT: "only screen and (orientation: portrait)",
                LANDSCAPE: "only screen and (orientation: landscape)"
            },
            u = {
                any: "change:any",
                orientation: "change:orientation",
                retina: "change:retina",
                viewport: "change:viewport"
            };
        Object.defineProperty(n, "DOM_DISPATCH_ATTRIBUTE", {
            get: function() {
                return a.DOM_DISPATCH
            }
        }), Object.defineProperty(n, "DOM_STATE_ATTRIBUTE", {
            get: function() {
                return a.STATE
            }
        });
        var h = n.prototype = Object.create(r.prototype);
        Object.defineProperty(h, "id", {
            get: function() {
                return this._id
            }
        }), Object.defineProperty(h, "element", {
            get: function() {
                return this._el
            }
        }), Object.defineProperty(h, "mediaQueryLists", {
            get: function() {
                return this._mediaQueryLists
            }
        }), Object.defineProperty(h, "viewport", {
            get: function() {
                return this._viewport
            }
        }), Object.defineProperty(h, "retina", {
            get: function() {
                return this._retina
            }
        }), Object.defineProperty(h, "orientation", {
            get: function() {
                return this._orientation
            }
        }), Object.defineProperty(h, "hasDomDispatch", {
            get: function() {
                return this._allowDOMEventDispatch
            }
        }), h.destroy = function() {
            this._removeListeners();
            for (var e in this._options) this._options[e] = null;
            for (var t in this._mediaQueryLists) {
                var i = this._mediaQueryLists[t];
                for (var n in i) i[n] = null
            }
            this._id = null, this._el = null, this._viewport = null, this._retina = null, this._orientation = null, r.prototype.destroy.call(this)
        }, h._initViewportEl = function(e) {
            var t = document.getElementById(e);
            return t || (t = document.createElement("div"), t.id = e, t = document.body.appendChild(t)), t.hasAttribute(a.DOM_DISPATCH) || (t.setAttribute(a.DOM_DISPATCH, ""), this._allowDOMEventDispatch = !0), t.hasAttribute(a.STATE) || (this._allowElementStateData = !0), t
        }, h._dispatch = function(e, t) {
            var i = {
                viewport: this._viewport,
                orientation: this._orientation,
                retina: this._retina
            };
            if (this._allowDOMEventDispatch) {
                var n = new CustomEvent(e, {
                        detail: t
                    }),
                    r = new CustomEvent(u.any, {
                        detail: i
                    });
                this._el.dispatchEvent(n), this._el.dispatchEvent(r)
            }
            this.trigger(e, t), this.trigger(u.any, i)
        }, h._addListeners = function() {
            this._onOrientationChange = this._onOrientationChange.bind(this), this._onRetinaChange = this._onRetinaChange.bind(this), this._onViewportChange = this._onViewportChange.bind(this), this._onViewportChangeUpdate = this._onViewportChangeUpdate.bind(this), this._mediaQueryLists.orientation.portrait.addListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.addListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.addListener(this._onRetinaChange), window.addEventListener("resize", this._onViewportChange)
        }, h._removeListeners = function() {
            this._mediaQueryLists.orientation.portrait.removeListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.removeListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.removeListener(this._onRetinaChange), window.removeEventListener("resize", this._onViewportChange)
        }, h._updateElementStateData = function() {
            if (this._allowElementStateData) {
                var e = JSON.stringify({
                    viewport: this._viewport,
                    orientation: this._orientation,
                    retina: this._retina
                });
                this._el.setAttribute(a.STATE, e)
            }
        }, h._getViewport = function(e) {
            var t = window.getComputedStyle(this._el, l).content;
            return t ? (t = t.replace(/["']/g, ""), e ? t.split(":").pop() : t) : null
        }, h._getRetina = function(e) {
            return e.matches
        }, h._getOrientation = function(e) {
            var t = this._orientation;
            if (e.matches) {
                var i = /portrait|landscape/;
                return e.media.match(i)[0]
            }
            return t
        }, h._initOrientation = function() {
            var e = this._getOrientation(this._mediaQueryLists.orientation.portrait);
            return e ? e : this._getOrientation(this._mediaQueryLists.orientation.landscape)
        }, h._onViewportChange = function() {
            this._resizing || (this._resizing = !0, s(this._onViewportChangeUpdate))
        }, h._onViewportChangeUpdate = function() {
            var e = this._viewport;
            if (this._viewport = this._getViewport(this._options.removeNamespace), e !== this._viewport) {
                var t = {
                    from: e,
                    to: this._viewport
                };
                this._updateElementStateData(), this._dispatch(u.viewport, t)
            }
            this._resizing = !1
        }, h._onRetinaChange = function(e) {
            var t = this._retina;
            if (this._retina = this._getRetina(e), t !== this._retina) {
                var i = {
                    from: t,
                    to: this._retina
                };
                this._updateElementStateData(), this._dispatch(u.retina, i)
            }
        }, h._onOrientationChange = function(e) {
            var t = this._orientation;
            if (this._orientation = this._getOrientation(e), t !== this._orientation) {
                var i = {
                    from: t,
                    to: this._orientation
                };
                this._updateElementStateData(), this._dispatch(u.orientation, i)
            }
        }, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/update": 169
    }],
    171: [function(e, t, i) {
        "use strict";
        var n = e("./ViewportEmitter");
        t.exports = new n
    }, {
        "./ViewportEmitter": 170
    }],
    172: [function(e, t, i) {
        function n(e) {
            var t = new Float32Array(16);
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
        }
        t.exports = n
    }, {}],
    173: [function(e, t, i) {
        function n() {
            var e = new Float32Array(16);
            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        }
        t.exports = n
    }, {}],
    174: [function(e, t, i) {
        function n(e, t) {
            var i = t[0],
                n = t[1],
                r = t[2],
                s = t[3],
                o = t[4],
                a = t[5],
                l = t[6],
                c = t[7],
                u = t[8],
                h = t[9],
                m = t[10],
                d = t[11],
                f = t[12],
                p = t[13],
                v = t[14],
                _ = t[15],
                y = i * a - n * o,
                g = i * l - r * o,
                b = i * c - s * o,
                E = n * l - r * a,
                w = n * c - s * a,
                A = r * c - s * l,
                x = u * p - h * f,
                S = u * v - m * f,
                T = u * _ - d * f,
                O = h * v - m * p,
                F = h * _ - d * p,
                C = m * _ - d * v,
                k = y * C - g * F + b * O + E * T - w * S + A * x;
            return k ? (k = 1 / k, e[0] = (a * C - l * F + c * O) * k, e[1] = (r * F - n * C - s * O) * k, e[2] = (p * A - v * w + _ * E) * k, e[3] = (m * w - h * A - d * E) * k, e[4] = (l * T - o * C - c * S) * k, e[5] = (i * C - r * T + s * S) * k, e[6] = (v * b - f * A - _ * g) * k, e[7] = (u * A - m * b + d * g) * k, e[8] = (o * F - a * T + c * x) * k, e[9] = (n * T - i * F - s * x) * k, e[10] = (f * w - p * b + _ * y) * k, e[11] = (h * b - u * w - d * y) * k, e[12] = (a * S - o * O - l * x) * k, e[13] = (i * O - n * S + r * x) * k, e[14] = (p * g - f * E - v * y) * k, e[15] = (u * E - h * g + m * y) * k, e) : null
        }
        t.exports = n
    }, {}],
    175: [function(e, t, i) {
        function n(e, t) {
            if (e === t) {
                var i = t[1],
                    n = t[2],
                    r = t[3],
                    s = t[6],
                    o = t[7],
                    a = t[11];
                e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = i, e[6] = t[9], e[7] = t[13], e[8] = n, e[9] = s, e[11] = t[14], e[12] = r, e[13] = o, e[14] = a
            } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
            return e
        }
        t.exports = n
    }, {}],
    176: [function(e, t, i) {
        function n() {
            var e = new Float32Array(3);
            return e[0] = 0, e[1] = 0, e[2] = 0, e
        }
        t.exports = n
    }, {}],
    177: [function(e, t, i) {
        function n(e, t, i) {
            var n = t[0],
                r = t[1],
                s = t[2],
                o = i[0],
                a = i[1],
                l = i[2];
            return e[0] = r * l - s * a, e[1] = s * o - n * l, e[2] = n * a - r * o, e
        }
        t.exports = n
    }, {}],
    178: [function(e, t, i) {
        function n(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
        }
        t.exports = n
    }, {}],
    179: [function(e, t, i) {
        function n(e, t, i) {
            var n = new Float32Array(3);
            return n[0] = e, n[1] = t, n[2] = i, n
        }
        t.exports = n
    }, {}],
    180: [function(e, t, i) {
        function n(e) {
            var t = e[0],
                i = e[1],
                n = e[2];
            return Math.sqrt(t * t + i * i + n * n)
        }
        t.exports = n
    }, {}],
    181: [function(e, t, i) {
        function n(e, t) {
            var i = t[0],
                n = t[1],
                r = t[2],
                s = i * i + n * n + r * r;
            return s > 0 && (s = 1 / Math.sqrt(s), e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s), e
        }
        t.exports = n
    }, {}],
    182: [function(e, t, i) {
        function n() {
            var e = new Float32Array(4);
            return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
        }
        t.exports = n
    }, {}],
    183: [function(e, t, i) {
        function n(e, t, i, n) {
            var r = new Float32Array(4);
            return r[0] = e, r[1] = t, r[2] = i, r[3] = n, r
        }
        t.exports = n
    }, {}],
    184: [function(e, t, i) {
        function n(e, t, i) {
            var n = t[0],
                r = t[1],
                s = t[2],
                o = t[3];
            return e[0] = i[0] * n + i[4] * r + i[8] * s + i[12] * o, e[1] = i[1] * n + i[5] * r + i[9] * s + i[13] * o, e[2] = i[2] * n + i[6] * r + i[10] * s + i[14] * o, e[3] = i[3] * n + i[7] * r + i[11] * s + i[15] * o, e
        }
        t.exports = n
    }, {}],
    185: [function(e, t, i) {
        function n(e, t, i) {
            this.applyButton(), r.apply(this, arguments)
        }
        var r = e("../../supports-shared-modals/collection-unit-support/collection-unit-support.js"),
            s = r.prototype,
            o = e("@marcom/useragent-detect"),
            a = n.prototype = Object.create(s);
        a.applyButton = function() {
            var e = document.querySelector(".try-button"),
                t = document.documentElement.classList.contains("touch"),
                i = o.os.version.major,
                n = o.os.version.minor,
                r = o.os.ios && i >= 13,
                s = o.os.osx && i >= 10 && n >= 15 && t,
                a = o.os.osx && i >= 10 && n >= 15;
            (r || s || a) && (e.setAttribute("href", e.getAttribute("data-apply-action")), e.setAttribute("data-rid-relay", '{"288":"itsct"}'), e.setAttribute("data-analytics-exit-link", ""), e.removeAttribute("data-analytics-intrapage-link"), e.removeAttribute("data-analytics-click"))
        }, t.exports = n
    }, {
        "../../supports-shared-modals/collection-unit-support/collection-unit-support.js": 189,
        "@marcom/useragent-detect": 160
    }],
    186: [function(e, t, i) {
        function n(e, t, i) {
            r.apply(this, arguments), this.applyButton()
        }
        var r = e("@marcom/ac-homepage/BaseHomepageUnit"),
            s = r.prototype,
            o = n.prototype = Object.create(s);
        o.applyButton = function() {
            var e = 7,
                t = document.documentElement.classList.contains("touch") && window.ApplePaySession && window.ApplePaySession.supportsVersion(e) && window.ApplePaySession.canMakePayments(),
                i = document.querySelector(".apply-now");
            t && (i.setAttribute("href", i.getAttribute("data-apply-action")), i.addEventListener("click", function(e) {
                e.preventDefault(), setTimeout(function() {
                    window.location = i.getAttribute("href")
                }, 600)
            }))
        }, t.exports = n
    }, {
        "@marcom/ac-homepage/BaseHomepageUnit": 64
    }],
    187: [function(e, t, i) {
        function n(e, t, i) {
            r.apply(this, arguments), this.initialize()
        }
        var r = e("@marcom/ac-homepage/BaseHomepageSection"),
            s = r.prototype,
            o = e("@marcom/client-detect"),
            a = n.prototype = Object.create(s);
        a.initialize = function() {
            var e = new o;
            return e.initialize(), this
        }, t.exports = n
    }, {
        "@marcom/ac-homepage/BaseHomepageSection": 63,
        "@marcom/client-detect": 154
    }],
    188: [function(e, t, i) {
        t.exports = e("../../supports-shared-modals/collection-unit-support/collection-unit-support.js")
    }, {
        "../../supports-shared-modals/collection-unit-support/collection-unit-support.js": 189
    }],
    189: [function(e, t, i) {
        function n(e, t, i) {
            r.apply(this, arguments), this._attachModalClickEvents()
        }
        var r = e("@marcom/ac-homepage/BaseHomepageUnit"),
            s = r.prototype;
        const o = e("@marcom/ac-modal").createStandardModal,
            a = (e("@marcom/ac-raf-emitter/update"), e("@marcom/ac-raf-emitter/draw")),
            l = e("@marcom/ac-accessibility/CircularTab");
        var c = n.prototype = Object.create(s);
        c._openModal = function() {
            a(function() {
                this.iframeSrc && this.iframe && (this.iframe.src = this.iframeSrc), this.modal.open()
            }.bind(this))
        }, c._createModal = function() {
            document.domain = "apple.com";
            var e = this.collectionUnitElement.querySelector(".module-modal"),
                e = e.parentNode.appendChild(e.cloneNode(!0)),
                e = this.collectionUnitElement.querySelector(".module-modal");
            this.iframe = this.collectionUnitElement.querySelector("iframe"), this.iframe && (this.iframeSrc = this.iframe.getAttribute("data-lazy-src")), this.modal = o(e), this.modal.modalElement.setAttribute("data-modal-from", [this.sectionObj.moduleTemplateName, this.id].join("-")), this.modal.on("open", function() {
                this._circularTab = new l(this.modal.modalElement), this.modal._giveModalFocus = function() {
                    this.modalElement.removeAttribute("aria-hidden"), this._activeElement = document.activeElement, console.log(element, element), a(this.modal.modalElement), this._circularTab.start()
                }
            }.bind(this)), this.modal.on("close", function() {
                this.modal.destroy(), this.collectionUnitElement.querySelector("a[href$=modal]").focus()
            }.bind(this))
        }, c._attachModalClickEvents = function() {
            this.collectionUnitElement.querySelectorAll("a[href$=modal]").forEach(function(e) {
                e.addEventListener("click", function(e) {
                    e.preventDefault(), this._createModal(), this._openModal()
                }.bind(this))
            }.bind(this))
        }, t.exports = n
    }, {
        "@marcom/ac-accessibility/CircularTab": 13,
        "@marcom/ac-homepage/BaseHomepageUnit": 64,
        "@marcom/ac-modal": 86,
        "@marcom/ac-raf-emitter/draw": 114,
        "@marcom/ac-raf-emitter/update": 116
    }],
    190: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-homepage/src/ac-homepage-main")(), e("./shame.js")()
    }, {
        "./shame.js": 191,
        "@marcom/ac-homepage/src/ac-homepage-main": 61
    }],
    191: [function(e, t, i) {
        "use strict";
        t.exports = function() {}
    }, {}],
    192: [function(e, t, i) {
        var n = {};
        t.exports = n
    }, {}],
    193: [function(e, t, i) {
        arguments[4][192][0].apply(i, arguments)
    }, {
        dup: 192
    }],
    194: [function(e, t, i) {
        var n = {};
        n["apple-tv-plus"] = e("../src/content/modules/promos/apple-tv-plus/apple-tv-plus.js"), n["apple-music"] = e("../src/content/modules/promos/apple-music/apple-music.js"), n["apple-card"] = e("../src/content/modules/promos/apple-card/apple-card.js"), n["apple-arcade"] = e("../src/content/modules/promos/apple-arcade/apple-arcade.js"), t.exports = n
    }, {
        "../src/content/modules/promos/apple-arcade/apple-arcade.js": 185,
        "../src/content/modules/promos/apple-card/apple-card.js": 186,
        "../src/content/modules/promos/apple-music/apple-music.js": 187,
        "../src/content/modules/promos/apple-tv-plus/apple-tv-plus.js": 188
    }],
    195: [function(e, t, i) {
        var n = {};
        n["collection-unit-support"] = e("../src/content/modules/supports-shared-modals/collection-unit-support/collection-unit-support.js"), t.exports = n
    }, {
        "../src/content/modules/supports-shared-modals/collection-unit-support/collection-unit-support.js": 189
    }]
}, {}, [190]);