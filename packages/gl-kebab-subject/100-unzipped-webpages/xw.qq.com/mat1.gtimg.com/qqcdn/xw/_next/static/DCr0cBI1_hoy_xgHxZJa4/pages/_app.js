(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        "1TCz": function(t, e, n) {
            "use strict";
            n.r(e);
            var o, a = n("ln6h"),
                i = n.n(a),
                r = n("O40h"),
                s = n("kOwS"),
                c = n("doui"),
                l = n("UXZV"),
                u = n.n(l),
                d = n("zrwo"),
                p = n("0iUn"),
                f = n("sLSF"),
                m = n("MI3g"),
                h = n("a7VT"),
                g = n("Tit0"),
                v = n("MX0m"),
                w = n.n(v),
                b = n("q1tI"),
                x = n.n(b),
                y = n("8Bbg"),
                k = n.n(y),
                j = n("8Kt/"),
                O = n.n(j),
                q = n("Qyje"),
                N = n.n(q),
                _ = n("pvup"),
                C = n("5/ui"),
                E = n("4l11"),
                A = n("8hdO"),
                P = n("tR3F"),
                I = n("EFnQ"),
                T = n("dV6L"),
                S = n("Cs1F"),
                U = n("qUMa"),
                Y = !1,
                B = n("uoA0"),
                M = n("RpdU"),
                z = n("70DZ");

            function L(t) {
                if (!t || !t.options) return {
                    enabled: !1
                };
                var e = u()({
                        is_gray: "0",
                        pagetype: "",
                        page: "",
                        channel: ""
                    }, t.options),
                    n = [z.a.switches.get("noimage") ? "noimage" : null],
                    o = (new Date).getTime(),
                    a = (z.a.json.get("lastvisit") || {}).ts,
                    i = !a || o - a > 18e5;
                z.a.json.set("lastvisit", {
                    ts: o
                });
                var r = "network={UANETTYPE}&url={URL}&refer={REFER}&qq={QQ}&openid={COOKIE.wx_openid}&pac_uid={COOKIE.pac_uid}&domain={LOCATION.hostname}&webview=".concat(e.ua, "&qudao=").concat(e.qudao, "&usersettings=").concat(n.filter((function(t) {
                        return null !== t
                    })).join(" "), "&os=").concat(T.a.getOS() || "", "&version=").concat("1"),
                    s = Object(q.stringify)(e, {
                        encode: !1
                    });
                return {
                    enabled: !0,
                    autoStart: !0,
                    auto4787: "boolean" != typeof t.auto4787 || t.auto4787,
                    options: e,
                    templates: {
                        pv: "BossId=8091&Pwd=1914956704&".concat(r, "&").concat(s, "&operate=").concat(i ? "enter" : "", "&_dc={RANDOM}"),
                        click: "BossId=4919&Pwd=187500179&".concat(r, "&").concat(s, "&fun={%v}&_dc={RANDOM}"),
                        expo: "BossId=5142&Pwd=1217935149&".concat(r, "&").concat(s, "&fun={%v}&_dc={RANDOM}")
                    }
                }
            }

            function R(t) {
                try {
                    M.a.create({
                        value: "pv",
                        template: t
                    })
                } catch (t) {}
            }
            var W = {
                parseConfig: L,
                init: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.enabled && M.a.ready((function(e) {
                        (o = e({
                            template: {
                                click: t.templates.click,
                                expo: t.templates.expo
                            },
                            expoAutoUpdate: !0
                        })) && (o.start(), t.auto4787 && R(t.templates.pv))
                    }))
                },
                updateOptions: function(t) {
                    var e = L({
                        options: t
                    });
                    return o && o.updateOption && o.updateOption({
                        template: e.templates
                    }), e
                },
                sendPV: R
            };
            n.d(e, "default", (function() {
                return Q
            }));
            var D = x.a.createElement,
                Q = function(t) {
                    function e(t) {
                        var n;
                        return Object(p.a)(this, e), (n = Object(m.a)(this, Object(h.a)(e).call(this, t))).state = {
                            isPageReady: !1
                        }, n.pageConfig = n.props.pageConfig || {}, n.extraProps = {}, n.boss = {}, n.bossUserOpt = null, n.pgv = {}, n.pgvUserOpt = null, n.title = "\u817e\u8baf\u7f51", n.notificationRef = x.a.createRef(), n
                    }
                    var n;
                    return Object(g.a)(e, t), Object(f.a)(e, [{
                        key: "UNSAFE_componentWillMount",
                        value: function() {
                            var t = this,
                                e = {};
                            e.userAgent = navigator.userAgent, e.query = N.a.parse(window.location.search.substring(1)), e.qudao = Object(S.a)(), e.simpleUA = T.a.getUserAgentForWebview();
                            var n = {
                                ua: e.simpleUA,
                                qudao: e.qudao
                            };
                            if (e.pageMounted = function() {
                                    return t.setState({
                                        isPageReady: !0
                                    })
                                }, e.startPGV = function(e) {
                                    t.pgvUserOpt = e, I.a.call(null, e)
                                }, e.startBOSS = function(e) {
                                    t.bossUserOpt = e.options, t.boss = W.parseConfig(Object(d.a)({}, e, {
                                        options: u()({}, n, e.options)
                                    })), t.boss.manualStarted = !0, W.init(t.boss)
                                }, e.updateBOSSOptions = function(e) {
                                    t.bossUserOpt = e, t.boss = W.updateOptions(u()({}, n, e))
                                }, e.sendBOSSPV = function() {
                                    W.sendPV(((t.boss || {}).templates || {}).pv || "")
                                }, e.getBOSSOpt = function() {
                                    return t.bossUserOpt
                                }, e.getPGVOpt = function() {
                                    return t.pgvUserOpt
                                }, e.showNotification = function(e, n) {
                                    try {
                                        t.notificationRef.current.show(e, n)
                                    } catch (t) {}
                                }, this.pageConfig.fullTitle ? this.title = this.pageConfig.fullTitle : this.pageConfig.title ? this.title = "".concat(this.pageConfig.title, " - \u817e\u8baf\u7f51-QQ.COM") : this.title = "\u817e\u8baf\u7f51-QQ.COM", this.pageConfig.boss && (this.bossUserOpt = this.pageConfig.boss.options, this.boss = W.parseConfig(u()({}, this.pageConfig.boss, {
                                    options: u()({}, n, this.pageConfig.boss.options)
                                }))), this.pageConfig.pgv) {
                                this.pgvUserOpt = this.pageConfig.pgv.options;
                                var o = u()({}, this.pageConfig.pgv.options);
                                this.pgv = {
                                    enabled: !0,
                                    options: o
                                }
                            }
                            A.a.update(), P.a.init((function() {})), this.extraProps = e
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var t = this.pageConfig,
                                e = t.includePGVHack,
                                n = void 0 === e || e,
                                o = t.registerServiceWorker,
                                a = void 0 === o || o,
                                i = t.disableMta,
                                r = void 0 !== i && i,
                                s = t.includeBeacon,
                                c = void 0 === s || s,
                                l = t.includePecker,
                                u = void 0 === l || l;
                            n && function() {
                                if (!Y) {
                                    var t = (window.location.search.match(/[?&]pgv_ref=([\w-.,]+)/) || []).pop() || "",
                                        e = (window.location.search.match(/[?&]ADTAG=([\w-.,]+)/) || []).pop() || "";
                                    (t || e) && (document.addEventListener("click", (function(n) {
                                        for (var o = n.target || n.srcElement; o && ("A" !== o.tagName || 0 !== (o.getAttribute("href") || "").indexOf("/"));) o = o.parentNode;
                                        o && (o.search += (o.search ? "&" : "") + "pgv_ref=" + t + "&ADTAG=" + e)
                                    }), !1), Y = !0)
                                }
                            }(), a && function() {
                                try {
                                    "https:" === location.protocol && window.navigator && navigator.serviceWorker && (navigator.serviceWorker.getRegistrations().then((function(t) {
                                        for (var e = 0, n = t.length; e < n; e++) t[e].unregister()
                                    })).catch((function() {})), "undefined" != typeof caches && caches.keys().then((function(t) {
                                        t.forEach((function(t) {
                                            caches.delete(t)
                                        }))
                                    })))
                                } catch (t) {}
                            }(), window.addEventListener("beforeinstallprompt", (function(t) {
                                return t.preventDefault(), !1
                            })), window.addEventListener("load", (function() {
                                r || function() {
                                    if (window._mtac = {
                                            performanceMonitor: 0
                                        }, !document.getElementById("mtascript") && !window.MtaH5) {
                                        var t = document.createElement("script");
                                        t.src = "//pingjs.qq.com/h5/stats.js", t.setAttribute("id", "mtascript"), t.setAttribute("name", "MTAH5"), t.setAttribute("sid", "500092411"), t.setAttribute("cid", "500421382");
                                        var e = document.getElementsByTagName("script")[0];
                                        e.parentNode.insertBefore(t, e)
                                    }
                                }(), c && function() {
                                    if (!document.getElementById("beaconscript") && !window.BeaconAction) {
                                        var t = document.createElement("script");
                                        t.src = "https://3gimg.qq.com/mig_op/beacon/js/beacon_release_s.js?appkey=JS0KXZS83CYCK6&vc=1.0.1", t.setAttribute("id", "beaconscript");
                                        var e = document.getElementsByTagName("script")[0];
                                        e.parentNode.insertBefore(t, e)
                                    }
                                }(), u && function() {
                                    if (!window.location.port) {
                                        var t = document.createElement("script"),
                                            e = document.getElementsByTagName("script")[0];
                                        t.async = 1, t.src = "https://mat1.gtimg.com/www/js/emonitor/index_20190505.js", window._zmnBossInfo = {
                                            page: "//btrace.video.qq.com/kvcollect?BossId=6529&Pwd=1714580587",
                                            error: "//btrace.video.qq.com/kvcollect?BossId=6527&Pwd=1102151080",
                                            slowlog: "//btrace.video.qq.com/kvcollect?BossId=6523&Pwd=1202531240",
                                            cgi: "//btrace.video.qq.com/kvcollect?BossId=6528&Pwd=96045012"
                                        }, t.onload = function() {
                                            try {
                                                document.domain = "qq.com"
                                            } catch (t) {}
                                            window._emonitorIns = window.emonitor.create({
                                                name: "xw",
                                                baseUrl: window._zmnBossInfo.error,
                                                ptag: window.emonitor.getUrlParam({
                                                    name: "ptag"
                                                }) || window.emonitor.getUrlParam({
                                                    name: "ADTAG"
                                                })
                                            }), window._emonitorIns.config({
                                                baseUrl: window._zmnBossInfo.page
                                            }).send(window.emonitor.getPfTiming())
                                        }, e.parentNode.insertBefore(t, e)
                                    }
                                }()
                            })), this.boss.enabled && !this.boss.manualStarted && W.init(this.boss), this.pgv.enabled && Object(I.a)(this.pgv.options), Object(B.c)(), window._app = this.extraProps
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.Component,
                                n = t.pageProps,
                                o = this.state.isPageReady,
                                a = u()({
                                    _app: u()({}, this.extraProps, n._app || {})
                                }, n),
                                i = this.pageConfig,
                                r = i.viewportScale,
                                l = void 0 === r ? 1 : r,
                                d = i.includeManifest,
                                p = void 0 === d || d,
                                f = i.homeScreenIcon,
                                m = i.includeGSV,
                                h = void 0 !== m && m,
                                g = i.includeMQQAPI,
                                v = void 0 !== g && g,
                                x = null;
                            !0 === this.pageConfig.launchScreen ? x = D(C.a, null) : "skeleton" === this.pageConfig.launchScreen ? x = D(C.c, null) : "newslist" === this.pageConfig.launchScreen && (x = D(C.b, null));
                            var y = this.pageConfig.remLayout && this.pageConfig.remLayout.enabled,
                                k = [];
                            if (y) {
                                var j = this.pageConfig.remLayout || {},
                                    q = j.base,
                                    N = void 0 === q ? 375 : q,
                                    _ = j.range,
                                    A = void 0 === _ ? [] : _,
                                    P = j.scaling,
                                    I = void 0 === P ? 100 : P,
                                    T = Object(c.a)(A, 2),
                                    S = T[0],
                                    Y = void 0 === S ? 300 : S,
                                    B = T[1];
                                k = [N, Y, void 0 === B ? 768 : B, I]
                            }
                            return D(b.Fragment, null, D(O.a, null, D("meta", {
                                charSet: "utf-8",
                                className: "jsx-1104843720"
                            }), D("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=".concat(l, ", maximum-scale=").concat(l, ", minimum-scale=").concat(l, ", user-scalable=no, viewport-fit=cover"),
                                className: "jsx-1104843720"
                            }), D("meta", {
                                name: "format-detection",
                                content: "telephone=no",
                                className: "jsx-1104843720"
                            }), D("meta", {
                                httpEquiv: "X-UA-Compatible",
                                content: "IE=Edge,chrome=1",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "dns-prefetch",
                                href: "//mat1.gtimg.com",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "dns-prefetch",
                                href: "//pacaio.match.qq.com",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "dns-prefetch",
                                href: "//inews.gtimg.com",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "dns-prefetch",
                                href: "//h5.ssp.qq.com",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "dns-prefetch",
                                href: "//news.ssp.qq.com",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "dns-prefetch",
                                href: "//pgdt.gtimg.cn",
                                className: "jsx-1104843720"
                            }), D("meta", {
                                name: "theme-color",
                                content: "#ffffff",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "apple-touch-icon",
                                href: f || "//mat1.gtimg.com/www/mobi/2017/image/apple-touch-icon.png",
                                className: "jsx-1104843720"
                            }), D("link", {
                                rel: "icon",
                                sizes: "192x192",
                                href: f || "//mat1.gtimg.com/www/mobi/2017/image/logo/v0/192.png",
                                className: "jsx-1104843720"
                            }), p && D("link", {
                                rel: "manifest",
                                href: "/manifest.json",
                                className: "jsx-1104843720"
                            }), h && D("meta", {
                                name: "google-site-verification",
                                content: "oDqtSx_LCMXqEq2k089rP1KLjjblhg8pOzFVRktQi8M",
                                className: "jsx-1104843720"
                            }), D("title", {
                                className: "jsx-1104843720"
                            }, this.title), D("style", null, "/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}"), D("style", null, 'html, body {font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Microsoft Yahei", sans-serif;}'), y && D("style", null, "html {font-size: 100px;} body {font-size: 16px;}"), y && D("script", {
                                dangerouslySetInnerHTML: {
                                    __html: "\n            (function(base, min, max, scaling){\n              var cacheWidth = 0;\n              var timer;\n              var docEl = document.documentElement;\n              var resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize';\n              var recalc = function () {\n                var clientWidth = docEl.clientWidth;\n                if (!clientWidth) return;\n                clientWidth = Math.min(clientWidth, max);\n                clientWidth = Math.max(clientWidth, min);\n                if(cacheWidth !== clientWidth) {\n                  clearInterval(timer);\n                  cacheWidth = clientWidth;\n                  docEl.style.fontSize = scaling * (clientWidth / base) + 'px';\n                }\n              }\n              if (!document.addEventListener) return;\n              window.addEventListener(resizeEvt, function() {\n                timer = setInterval(recalc, 10);\n              });\n              recalc();\n            })(".concat(k.join(", "), ");\n          ")
                                },
                                className: "jsx-1104843720"
                            }), v && D("script", {
                                src: "//open.mobile.qq.com/sdk/qqapi.js?_bid=152",
                                charSet: "utf-8",
                                className: "jsx-1104843720"
                            }), D("script", {
                                src: "//pacaio.match.qq.com/stat/only?callback=isNaN",
                                async: !0,
                                defer: !0,
                                className: "jsx-1104843720"
                            })), D("div", {
                                style: {
                                    position: "relative"
                                },
                                className: "jsx-1104843720"
                            }, D(U.b, null), D("div", {
                                id: "__xw_float_view_root",
                                className: "jsx-1104843720"
                            }), D("div", {
                                id: "__xw_next_view_root",
                                className: "jsx-1104843720"
                            }, D(e, Object(s.a)({}, a, {
                                className: "jsx-1104843720 " + (a && null != a.className && a.className || "")
                            })), this.pageConfig.launchScreen && !o && x, D(E.a, {
                                ref: this.notificationRef
                            }))), D(w.a, {
                                id: "1104843720"
                            }, [".noscroll,.noscroll body{overflow:hidden;}", ".noscroll body{position:relative;}"]))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: (n = Object(r.a)(i.a.mark((function t(e) {
                            var n, o, a, r;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.Component, o = e.ctx, a = {}, !n.getInitialProps) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 5, n.getInitialProps(o);
                                    case 5:
                                        a = t.sent;
                                    case 6:
                                        return r = Object(_.pick)(o.req, ["headers", "url"]), t.abrupt("return", {
                                            pageProps: a,
                                            pageConfig: n._pageConfig,
                                            _req: r
                                        });
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function(t) {
                            return n.apply(this, arguments)
                        })
                    }]), e
                }(k.a)
        },
        "4l11": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            }));
            var o = n("0iUn"),
                a = n("sLSF"),
                i = n("MI3g"),
                r = n("a7VT"),
                s = n("AT/M"),
                c = n("Tit0"),
                l = n("vYYK"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = n.n(p).a.createElement,
                m = function(t) {
                    function e(t) {
                        var n;
                        return Object(o.a)(this, e), n = Object(i.a)(this, Object(r.a)(e).call(this, t)), Object(l.a)(Object(s.a)(n), "show", (function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tips";
                            n.setState({
                                message: t,
                                show: !0
                            })
                        })), n.state = {
                            message: "",
                            show: !1
                        }, n.mounted = !1, n.handleAnimationEnd = n.handleAnimationEnd.bind(Object(s.a)(n)), n
                    }
                    return Object(c.a)(e, t), Object(a.a)(e, [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "handleAnimationEnd",
                        value: function() {
                            this.mounted && this.setState({
                                show: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return f("div", {
                                onAnimationEnd: this.handleAnimationEnd,
                                className: "jsx-3538576898 " + "tips ".concat(this.state.show ? "show" : "")
                            }, f("span", {
                                className: "jsx-3538576898"
                            }, this.state.message), f(d.a, {
                                id: "3538576898"
                            }, ["@-webkit-keyframes showTips-jsx-3538576898{0%{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}10%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}90%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}}", "@keyframes showTips-jsx-3538576898{0%{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}10%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}90%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}}", ".tips.jsx-3538576898{display:none;position:fixed;top:0;left:0;z-index:8;overflow:hidden;width:100%;min-height:0.3rem;line-height:0.2rem;padding:0.05rem;box-sizing:border-box;text-align:center;word-break:break-all;color:#fff;font-size:0.14rem;background-color:rgba(68,138,255,.9);-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);will-change:transform;}", ".tips.show.jsx-3538576898{display:block;-webkit-animation-name:showTips-jsx-3538576898;animation-name:showTips-jsx-3538576898;-webkit-animation-duration:2800ms;animation-duration:2800ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;}"]))
                        }
                    }]), e
                }(p.Component)
        },
        "4mXO": function(t, e, n) {
            t.exports = n("Vphk")
        },
        "8Bbg": function(t, e, n) {
            t.exports = n("B5Ud")
        },
        "8hdO": function(t, e, n) {
            "use strict";
            var o, a = n("p46w"),
                i = n("vu09"),
                r = n.n(i),
                s = ["s", "n", "l", "xl"],
                c = function(t) {
                    var e = o || (Object(a.get)("fontsize") || "size_n").replace("size_", "");
                    return o = e, t && 4 === t.length ? t[s.indexOf(e)] : e
                };
            e.a = {
                get: c,
                update: function(t) {
                    if (t || (t = c()), -1 === s.indexOf(t)) return !1;
                    Object(a.set)("fontsize", "size_".concat(t), {
                        expires: 60
                    });
                    var e = document.documentElement;
                    s.forEach((function(t) {
                        return r()(e).remove("font-" + t)
                    })), r()(e).add("font-" + t), o = t
                }
            }
        },
        B5Ud: function(t, e, n) {
            "use strict";
            var o = n("/HRN"),
                a = n("WaGi"),
                i = n("ZDA2"),
                r = n("/+P4"),
                s = n("N9n2"),
                c = n("ln6h"),
                l = n("KI45");
            e.__esModule = !0, e.Container = function(t) {
                0;
                return t.children
            }, e.createUrl = b, e.default = void 0;
            var u = l(n("htGi")),
                d = l(n("+oT+")),
                p = l(n("q1tI")),
                f = l(n("17x9")),
                m = n("g/15");
            e.AppInitialProps = m.AppInitialProps;
            var h = n("nOHt");

            function g(t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, d.default)(c.mark((function t(e) {
                    var n, o, a;
                    return c.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.Component, o = e.ctx, t.next = 3, (0, m.loadGetInitialProps)(n, o);
                            case 3:
                                return a = t.sent, t.abrupt("return", {
                                    pageProps: a
                                });
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var w = function(t) {
                function e() {
                    return o(this, e), i(this, r(e).apply(this, arguments))
                }
                return s(e, t), a(e, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            router: (0, h.makePublicRouterInstance)(this.props.router)
                        }
                    }
                }, {
                    key: "componentDidCatch",
                    value: function(t, e) {
                        throw t
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.router,
                            n = t.Component,
                            o = t.pageProps,
                            a = b(e);
                        return p.default.createElement(n, (0, u.default)({}, o, {
                            url: a
                        }))
                    }
                }]), e
            }(p.default.Component);

            function b(t) {
                var e = t.pathname,
                    n = t.asPath,
                    o = t.query;
                return {
                    get query() {
                        return o
                    },
                    get pathname() {
                        return e
                    },
                    get asPath() {
                        return n
                    },
                    back: function() {
                        t.back()
                    },
                    push: function(e, n) {
                        return t.push(e, n)
                    },
                    pushTo: function(e, n) {
                        var o = n ? e : "",
                            a = n || e;
                        return t.push(o, a)
                    },
                    replace: function(e, n) {
                        return t.replace(e, n)
                    },
                    replaceTo: function(e, n) {
                        var o = n ? e : "",
                            a = n || e;
                        return t.replace(o, a)
                    }
                }
            }
            e.default = w, w.childContextTypes = {
                router: f.default.object
            }, w.origGetInitialProps = g, w.getInitialProps = g
        },
        GcxT: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("1TCz")
            }])
        },
        RpdU: function(t, e, n) {
            "use strict";
            var o = n("GQBn");
            e.a = {
                ready: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    Object(o.a)("finalboss").then((function(e) {
                        t(e)
                    })).catch((function() {}))
                },
                create: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.value,
                        n = void 0 === e ? "" : e,
                        o = t.template,
                        a = void 0 === o ? "" : o,
                        i = "_boss_helper",
                        r = document.getElementById(i),
                        s = !!r;
                    s || (r = document.createElement("a")), r.setAttribute("id", i), r.setAttribute("href", "javascript:;"), r.setAttribute("target", "_self"), r.setAttribute("data-boss", n), r.setAttribute("data-boss-template", a), s || document.body.appendChild(r);
                    try {
                        r.click()
                    } catch (t) {}
                }
            }
        },
        Vphk: function(t, e, n) {
            n("0lY0"), t.exports = n("p9MR").Object.getOwnPropertySymbols
        },
        tR3F: function(t, e, n) {
            "use strict";
            var o = n("GQBn"),
                a = "___mqq_openurl_hijack";

            function i(t, e) {
                for (; e;) {
                    if ((e.nodeName || e.tagName).toLowerCase() === t.toLowerCase()) return e;
                    e = e.parentNode
                }
                return null
            }

            function r(t, e) {
                for (; e;) {
                    for (; e;) {
                        if (e.classList && e.classList.contains && e.classList.contains(t)) return e;
                        e = e.parentNode
                    }
                    return null
                }
            }

            function s(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (t && e) {
                    var o = document.createElement("a");
                    return o.href = t, o.search += (o.search ? "&" : "") + "".concat(e, "=").concat(n), o.getAttribute("href")
                }
            }
            e.a = {
                init: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    if (window) {
                        var e = / QQ\/\d/i.test(window.navigator.userAgent);
                        e ? Object(o.a)("qqapi").then((function(e) {
                            return t(null, e)
                        })).catch((function(e) {
                            return t(e)
                        })) : t(new Error("not in Mqq"))
                    } else t(new Error("mqq sdk cannot run in node"))
                },
                openUrlHijack: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.urlTester,
                        n = void 0 === e ? null : e,
                        o = t.timeout,
                        c = void 0 === o ? 30 : o,
                        l = t.debug,
                        u = void 0 === l || l,
                        d = t.onBeforeOpen,
                        p = void 0 === d ? function() {} : d,
                        f = t.onAfterOpen,
                        m = void 0 === f ? function() {} : f;
                    if (!window || !window.document) return !1;
                    var h = window.document.body;
                    h[a] || (h[a] = !0, h.addEventListener("click", (function(t) {
                        var e = t || window.event;
                        if (!e.target || "button" !== e.target.getAttribute("role"))
                            if (r("feedback", e.target || e.srcElement)) console.log("in feedback");
                            else {
                                var o = i("a", e.target || e.srcElement);
                                if (o) {
                                    var a = o.getAttribute("href"),
                                        l = o.getAttribute("data-no-openurl");
                                    if (a && 0 !== a.indexOf("javascript") && !l && window.mqq && window.mqq.invoke && "0" !== window.mqq.QQVersion) {
                                        var d = !0;
                                        if ("function" == typeof n && (d = !!n(a)), !d) return;
                                        t.preventDefault();
                                        var f = function() {
                                            a = o.getAttribute("href");
                                            var t = !/^http/.test(a) ? "".concat(window.location.protocol, "//").concat(window.location.host, "/").concat(a.replace(/^\//, "")) : a;
                                            t = s(t, "_wv", "1"), p(), window.mqq.invoke("ui", "openUrl", {
                                                url: t,
                                                target: 1,
                                                style: 2
                                            }), m(), u && console.log("opened link ".concat(t, " with mqq new webview."))
                                        };
                                        "number" == typeof c && c > 0 ? setTimeout(f, c) : f()
                                    }
                                }
                            }
                    }), !1))
                },
                fixDocTitle: function() {
                    window && window.document && window.mqq && window.mqq.ui && window.mqq.ui.refreshTitle && (document.title = document.title.replace(/ - .+/, ""), window.mqq.ui.refreshTitle())
                }
            }
        },
        vu09: function(t, e) {
            function n(t, e) {
                if (t.indexOf) return t.indexOf(e);
                for (var n = 0, o = t.length; n < o; n++)
                    if (t[n] === e) return n;
                return -1
            }

            function o(t) {
                if (!(this instanceof o)) return new o(t);
                t || (t = {}), t.nodeType && (t = {
                    el: t
                }), this.opts = t, this.el = t.el || document.body, "object" != typeof this.el && (this.el = document.querySelector(this.el))
            }
            t.exports = function(t) {
                return new o(t)
            }, o.prototype.add = function(t) {
                var e = this.el;
                if (e) {
                    if ("" === e.className) return e.className = t;
                    var o = e.className.split(" ");
                    return n(o, t) > -1 ? o : (o.push(t), e.className = o.join(" "), o)
                }
            }, o.prototype.remove = function(t) {
                var e = this.el;
                if (e && "" !== e.className) {
                    var o = e.className.split(" "),
                        a = n(o, t);
                    return a > -1 && o.splice(a, 1), e.className = o.join(" "), o
                }
            }, o.prototype.has = function(t) {
                var e = this.el;
                if (e) return n(e.className.split(" "), t) > -1
            }, o.prototype.toggle = function(t) {
                this.el && (this.has(t) ? this.remove(t) : this.add(t))
            }
        },
        zrwo: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var o = n("Jo+v"),
                a = n.n(o),
                i = n("4mXO"),
                r = n.n(i),
                s = n("pLtp"),
                c = n.n(s),
                l = n("vYYK");

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        o = c()(n);
                    "function" == typeof r.a && (o = o.concat(r()(n).filter((function(t) {
                        return a()(n, t).enumerable
                    })))), o.forEach((function(e) {
                        Object(l.a)(t, e, n[e])
                    }))
                }
                return t
            }
        }
    },
    [
        ["GcxT", 1, 0]
    ]
]);