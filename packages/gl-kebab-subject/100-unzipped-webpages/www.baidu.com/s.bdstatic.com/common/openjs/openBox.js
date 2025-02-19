! function(e, o, n) {
    function t(e, o) {
        return m.cleanObj.toString.call(e).slice(8, -1) === o
    }

    function i(e) {
        var o = b[e];
        if (o) return o.exports;
        throw "module " + e + " is undefined"
    }

    function r(e, o) {
        for (var n, t, r = e.split(":"), a = r.pop().split("/"), s = m; n = a.shift();) "bdbox" !== n && (t = n, a.length && (s = s[n] = s[n] || {}));
        var c = b[e] = {
                exports: {}
            },
            d = m.isFunction(o) ? o.apply(c, [i, c.exports, c, m]) : o;
        d && (c.exports = d), s[t] = c.exports
    }

    function a() {
        var e, o, n = "__OPENBOX_CHECK_LOCALSTORE__",
            t = {
                name: "openbox",
                content: "check_localStorage"
            };
        try {
            localStorage.setItem(n, JSON.stringify(t)), o = localStorage.getItem(n), o = JSON.parse(o), o.name && o.content ? (e = !0, localStorage.removeItem(n)) : e = !1
        } catch (i) {
            e = !1
        }
        return e
    }

    function s() {
        function e(e) {
            return "100" === e || "200" === e ? "main" : "101" === e || "202" === e ? "lite" : "102" === e ? "info" : "203" === e ? "pro" : "main"
        }
        var o = "__OPENBOX_IDM_DATA__";
        try {
            if (v = JSON.parse(localStorage.getItem(o)), v.timeout > Date.now()) return
        } catch (t) {}
        if (a()) {
            var r = i("common:bdbox/io/loadJS");
            r({
                url: "https://ext.baidu.com/rest/id-mapping/cuid?callback=?",
                success: function(t) {
                    if ("0" === t.errno) {
                        var i, r, a, s, c, d = t.data || {},
                            p = d.status,
                            l = d.list || [];
                        if ("0" === p) s = "lite", c = "main";
                        else {
                            for (l = l.sort(function(e, o) {
                                    return parseInt(o.lasttime) - parseInt(e.lasttime)
                                }), l = l.filter(function(e) {
                                    return "0" !== e.lasttime && e.lasttime
                                }), a = l.length, i = 0; a > i && (r = l[i], !s || !c); i++) s ? c || (c = e(r.app_id), c === s && (c = n)) : s = e(r.app_id);
                            s || (s = "main"), c || (c = "main" === s ? "lite" : "main"), "main" !== c && "main" !== s && (c = "main")
                        }
                        v = {
                            firstOpen: s,
                            secondOpen: c,
                            status: p,
                            timeout: Date.now() + 864e5
                        };
                        try {
                            localStorage.setItem(o, JSON.stringify(v))
                        } catch (u) {}
                    }
                },
                error: function(e) {
                    console.log("error:" + e)
                }
            })
        }
    }
    var c = 15489504e5,
        d = 1549555199e3,
        p = +new Date,
        l = (p + "").slice(-3),
        u = navigator.userAgent,
        m = {
            isBoxApp: function(e) {
                return e = e || "", / baiduboxapp\//i.test(u) === !1 ? !1 : u.indexOf(e + " baiduboxapp") < 0 ? !1 : !0
            },
            isBox: / baiduboxapp\//i.test(u) && !/ (lite|info|mission) baiduboxapp/.test(u),
            $isBox: function() {
                var o = e.navigator || {},
                    n = o.userAgent;
                return / baiduboxapp\//i.test(n) && !/ (lite|info|mission) baiduboxapp/.test(n)
            },
            isLiteBox: / (lite|info) baiduboxapp\//i.test(u),
            $isLiteBox: function() {
                var o = e.navigator || {},
                    n = o.userAgent;
                return / (lite|info) baiduboxapp\//i.test(n)
            },
            isMissionBox: / mission baiduboxapp\//i.test(u),
            $isMissionBox: function() {
                var o = e.navigator || {},
                    n = o.userAgent;
                return / mission baiduboxapp\//i.test(n)
            },
            isInfoBox: / info baiduboxapp\//i.test(u),
            $isInfoBox: function() {
                var o = e.navigator || {},
                    n = o.userAgent;
                return / info baiduboxapp\//i.test(n)
            },
            isProBox: / pro baiduboxapp\//i.test(u),
            $isProBox: function() {
                var o = e.navigator || {},
                    n = o.userAgent;
                return / pro baiduboxapp\//i.test(n)
            },
            isIOS: /(iPhone|iPod|iPad)/.test(u),
            $isIOS: function() {
                var o = e.navigator || {};
                return /(iPhone|iPod|iPad)/.test(o.userAgent)
            },
            isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(u),
            $isAndroid: function() {
                var o = e.navigator || {};
                return /(Android);?[\s\/]+([\d.]+)?/.test(o.userAgent)
            },
            getId: function() {
                return l++
            },
            emptyArr: [],
            emptyFn: function() {},
            cleanObj: {},
            byId: function(e) {
                return m.isString(e) ? o.getElementById(e) : e
            },
            toArray: function(e) {
                return m.emptyArr.slice.call(e)
            },
            $: function(e, n) {
                return n = n && 1 === n.nodeType ? n : o, m.toArray(n.querySelectorAll(e))
            }
        };
    "Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function(e) {
        m["is" + e] = function(o) {
            return t(o, e)
        }
    }), m.isBoolean = function(e) {
        return e === !0 || e === !1
    }, m.isObject = function(e) {
        return "object" == typeof e
    }, m.isUndefined = function(e) {
        return void 0 === e
    }, m.isWindow = function(e) {
        return null != e && e == e.window
    }, m.isPlainObject = function(e) {
        return m.isObject(e) && !m.isWindow(e) && Object.getPrototypeOf(e) == Object.prototype
    };
    var b = {};
    m.define = r;
    var f = m;
    r("common:bdbox/utils/version_compare", function(e, o, n) {
        var t = function(e, o) {
            o += "", e += "";
            for (var n = e.split("."), t = o.split("."), i = 0, r = Math.max(n.length, t.length); r > i; i++) {
                if (n[i] && !t[i] && parseInt(n[i]) > 0 || parseInt(n[i]) > parseInt(t[i])) return 1;
                if (t[i] && !n[i] && parseInt(t[i]) > 0 || parseInt(n[i]) < parseInt(t[i])) return -1
            }
            return 0
        };
        n.exports = t
    }), r("common:bdbox/utils/queryToJson", function(e, o, n) {
        n.exports = function(e) {
            var o = e.split("?"),
                n = o[1] ? o[1] : o[0],
                t = n.split("&"),
                i = {};
            return t.forEach(function(e) {
                if (e = e.split("="), e[0].length > 0) {
                    var o = "";
                    try {
                        o = decodeURIComponent(e[1]) || ""
                    } catch (n) {}
                    i[e[0]] = o
                }
            }), i
        }
    }), r("common:bdbox/utils/jsonToQuery", function(e, o, n, t) {
        n.exports = function(e) {
            if (t.isString(e)) return e;
            var o = [];
            for (var n in e) o.push(n + "=" + e[n]);
            return o.join("&")
        }
    }), r("common:bdbox/utils/ready", function(e, n, t) {
        function i() {
            a.forEach(function(e) {
                e()
            }), a.length = 0, s = !0
        }

        function r(e) {
            "function" == typeof e && (s ? e() : a.push(e))
        }
        var a = [],
            s = !1;
        "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? i() : o.addEventListener("DOMContentLoaded", i, !1), t.exports = r
    }), r("common:bdbox/io/loadJS", function(n, t, i, r) {
        function a(n, t, i) {
            var a, p, l, u = o.createElement("script");
            r.isString(n) ? (a = n, r.isFunction(t) && (i = t, t = null)) : (a = n.url, t = n.data, i = n.success, p = n.error || r.emptyFn, l = n.timeout), r.isObject(t) && (t = c(t)), t && (a += (-1 === a.indexOf("?") ? "?" : "&") + t), a = a.replace(/[&?]{1,2}/, "?");
            var m;
            /=\?/.test(a) && (m = "_box_jsonp" + r.getId(), a = a.replace(/=\?/, "=" + m));
            var b = s();
            l = l || 2e4, u.type = "text/javascript", u.src = a;
            var f, x = !0,
                h = function(o) {
                    m && (o ? e[m] = d : delete e[m]), f && clearTimeout(f), u.onload = u.onreadystatechange = u.onerror = null, u = null
                },
                v = function() {
                    !u || u.readyState && !/loaded|complete/.test(u.readyState) || (h(), x && r.isFunction(i) && i.apply(null, r.toArray(arguments)), x = !1)
                },
                g = function(e) {
                    h(), x && p(e), x = !1
                };
            m && (e[m] = v), f = setTimeout(function() {
                h(!0), x && p("timeout"), x = !1
            }, l), u.onload = u.onreadystatechange = u.onerror = v, u.onerror = g, b.appendChild(u)
        }

        function s() {
            return o.head || o.getElementsByTagName("head")[0] || o.documentElement
        }
        var c = n("common:bdbox/utils/jsonToQuery"),
            d = r.emptyFn;
        i.exports = a
    }), r("common:bdbox/utils/addStyle", function(e, n, t) {
        t.exports = function(e) {
            if (/.+\.css$/.test(e)) {
                var n = o.createElement("link");
                n.type = "text/css", n.rel = "stylesheet", n.href = e, (o.getElementsByTagName("head")[0] || o.getElementsByTagName("body")[0]).appendChild(n)
            } else {
                var n = o.createElement("style");
                n.type = "text/css", (o.getElementsByTagName("head")[0] || o.getElementsByTagName("body")[0]).appendChild(n), n.innerHTML = e
            }
        }
    }), r("common:bdbox/utils/detect", function(o, n, t, i) {
        function r(o) {
            var n = {
                name: "unknown",
                version: 0
            };
            this === e || this.os || (this.os = n), o = o || navigator.userAgent;
            var t = {
                Weibo: /weibo/i,
                Wechat: /micromessenger\//i,
                QQ: /QQ\//
            };
            for (var i in t) t.hasOwnProperty(i) && (n["is" + i] = t[i].test(o));
            n.isUC = o.match(/UC/) || e.ucweb || e.ucbrowser;
            var r = o.match(/Windows Phone ([\d.]+)/);
            if (r) return n.win10 = !0, n.version = r[1], n.name = "win10", n;
            var a = o.match(/(Android);?\s+([\d.]+)?/);
            if (a) return n.android = !0, n.version = a[2], n.name = "android", n;
            var s = o.match(/(iPad).*OS\s([\d_]+)/),
                c = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                d = !s && o.match(/(iPhone\sOS)\s([\d_]+)/);
            return d && !c ? (n.ios = n.iphone = !0, n.version = d[2].replace(/_/g, "."), n.name = "ios", n) : s ? (n.ios = n.ipad = !0, n.name = "ios", n.version = s[2].replace(/_/g, "."), n) : c ? (n.name = "ios", n.ios = n.ipod = !0, n.version = c[3] ? c[3].replace(/_/g, ".") : null, n) : n
        }
        r.apply(i), t.exports = r
    }), r("common:bdbox/extend", function(e, o, n, t) {
        function i(e, o, n) {
            for (var t in o) n && (r(o[t]) || a(o[t])) ? (r(o[t]) && !r(e[t]) && (e[t] = {}), a(o[t]) && !a(e[t]) && (e[t] = []), i(e[t], o[t], n)) : c(o[t]) || (e[t] = o[t])
        }
        var r = t.isPlainObject,
            a = t.isArray,
            s = t.isBoolean,
            c = t.isUndefined;
        n.exports = function(e) {
            var o, n = t.emptyArr.slice.call(arguments, 1);
            return s(e) && (o = e, e = n.shift()), n.forEach(function(n) {
                i(e, n, o)
            }), e
        }
    }), r("common:bdbox/clone", function(e, o, n) {
        var t = Object.prototype.toString,
            i = function(e, o, n) {
                var t = 0;
                for (var i in e)
                    if (e.hasOwnProperty(i))
                        if (n) o[i] = e[i];
                        else if (o(i, e[i], t++)) break
            },
            r = function(e) {
                var o;
                switch (t.call(e)) {
                    case "[object Object]":
                        o = {}, i(e, function(e, n) {
                            o[e] = r(n)
                        });
                        break;
                    case "[object Array]":
                        o = [], e.forEach(function(e) {
                            o.push(r(e))
                        });
                        break;
                    default:
                        o = e
                }
                return o
            };
        n.exports = r
    }), r("common:bdbox/utils/queryToJson", function(e, o, n) {
        n.exports = function(e) {
            var o = e.split("?"),
                n = o[1] ? o[1] : o[0],
                t = n.split("&"),
                i = {};
            return t.forEach(function(e) {
                if (e = e.split("="), e[0].length > 0) {
                    var o = "";
                    try {
                        o = decodeURIComponent(e[1]) || ""
                    } catch (n) {}
                    i[e[0]] = o
                }
            }), i
        }
    }), r("common:bdbox/utils/getVersion", function(o, n, t, i) {
        var r = function() {
            var o = 0;
            if (e.baiduboxapp_version) o = e.baiduboxapp_version;
            else if (i.$isBox()) {
                var n, t = navigator.userAgent;
                (n = /([\d+.]+)_(?:diordna|enohpi)_/.exec(t)) ? (n = n[1].split("."), o = n.reverse().join(".")) : (n = /baiduboxapp\/([\d+.]+)/.exec(t)) && (o = n[1])
            }
            return r = function() {
                return o
            }, o
        };
        t.exports = r
    }), r("common:bdbox/monitor", function(o, n, t, i) {
        var r = encodeURIComponent,
            a = function(e, o) {
                e += e.indexOf("?") < 0 ? "?" : "&", this.url = e, this.options = o
            };
        a.prototype.report = function(o, n) {
            var t = !1;
            o = o || "";
            var a = new Image(1, 1),
                s = [];
            if (i.isObject(o)) {
                for (var c in o) s.push(c + "=" + r(String(o[c])));
                o = s.join("&")
            }
            var d = "_box_mt" + i.getId();
            e[d] = a, a.onload = a.onerror = a.onabort = function() {
                n && "function" == typeof n && !t && (t = !0, n()), a.onload = a.onerror = a.onabort = null, e[d] = a = null
            };
            var p = this.url + o;
            return i.isFunction(this.options.customHandler) && (p = this.options.customHandler(p)), a.src = p + "&_rnd=" + Math.floor(2147483648 * Math.random()), setTimeout(function() {
                n && "function" == typeof n && !t && (t = !0, n())
            }, 100), this
        }, a.prototype.main = function(e, o) {
            return e && i.isFunction(this[e]) && this[e].apply(this, i.toArray(o || [])), this
        }, t.exports = function(e, o) {
            return new a(e, o)
        }
    }), r("common:bdbox/monitor/pblog", function(o, n, t, i) {
        var r = o("common:bdbox/monitor"),
            a = o("common:bdbox/extend"),
            s = o("common:bdbox/utils/queryToJson"),
            c = o("common:bdbox/utils/getVersion"),
            d = o("common:bdbox/clone"),
            p = s(location.search),
            l = navigator.userAgent,
            u = e.location.protocol;
        "http:" !== u && (u = "https:");
        var m = u + "//m.baidu.com/tcbox",
            b = {
                service: "bdbox",
                action: "pblog",
                ctv: 2,
                cen: "uid_ua_ut",
                data: {
                    appid: "1",
                    dataid: "2",
                    actiontype: "1",
                    actionid: "2",
                    actiondata: {
                        ref: p.ref || "",
                        gmv: p.vmgdb || "",
                        source: p.from || p.ref || "",
                        boxVersion: c(),
                        boxPlatform: l.match(/(iPad|iPhone|iPod)/gim) ? "ios" : "android"
                    }
                }
            },
            f = encodeURIComponent;
        p.uid && p.osname && ["osname", "ua", "ut", "from", "cfrom", "uid", "pkgname"].forEach(function(e) {
            p[e] && (b[e] = p[e])
        });
        var x, h = r(m, {
            customHandler: function(e) {
                var o = [];
                if (x)
                    for (var n in x)
                        if (x.hasOwnProperty(n)) {
                            var t = x[n];
                            i.isPlainObject(t) && (t = JSON.stringify(t)), o.push(n + "=" + f(t))
                        }
                return o.length && (e += o.join("&")), e
            }
        });
        h.init = function(e, o) {
            i.isPlainObject(o) && (b = a(b, o)), b.data.cateid = e
        }, h.pv = function(e, o) {
            x = d(b);
            var n = x.data;
            n.actionid = "1";
            var t = {};
            return t.url = e || location.href, o && (t.u = o), n.actiondata = a(n.actiondata, t), h.report()
        }, h.event = function(e, o, n, t, r) {
            if (!e) throw "monitor.tc.event need a evtName";
            if (i.isPlainObject(o) && !n) {
                var s = {
                    evtName: e
                };
                for (var c in o) s[c] = o[c]
            } else var s = {
                evtName: e,
                evtType: o || "",
                evtTag: n || ""
            };
            x = d(b);
            var p = x.data;
            return p.actionid = "2", t && (x.data.cateid = t), p.actiondata = a(p.actiondata, s), h.report(null, r)
        }, h.newEvent = function(e, o, n) {
            x = d(b);
            var t = x.data;
            return t.actionid = "2", o && (x.data.cateid = o), t.actiondata = a(t.actiondata, e), h.report(null, n)
        }, t.exports = function() {
            h.main.apply(h, arguments)
        }
    }), r("common:bdbox/invoke/openBox", function(n, t, i, r) {
        function a(n, t, i, r, a) {
            if (k.ios && B(k.version, "9.0") >= 0) e.location.href = n;
            else if (k.android && "chrome" === O && d() > 55 && navigator.userAgent.indexOf("haokan") < 0 && navigator.userAgent.indexOf("bdminivideo") < 0) e.location.href = n;
            else {
                var s = o.createElement("iframe");
                s.style.display = "none", s.src = n;
                var c = o.body || o.getElementsByTagName("body")[0];
                c.appendChild(s), setTimeout(function() {
                    c.removeChild(s), s = null
                }, 0)
            }
            var p = +Date.now();
            setTimeout(function() {
                Date.now() - p < i + 200 && (w.isFunction(t) ? t(n) : (t.indexOf(h) >= 0 && (t = t.indexOf("?from") > 0 ? t + "&scheme=" + encodeURIComponent(n) : t + "?scheme=" + encodeURIComponent(n), t = l(t, "source", r), t = l(t, "tokenData", encodeURIComponent(JSON.stringify(a)))), e.location.href = t))
            }, i)
        }

        function s() {
            m || (u = o.getElementsByTagName("html")[0], n("common:bdbox/utils/addStyle")(b), m = o.createElement("div")), m.setAttribute("class", "openBox-weixinTip"), m.innerHTML = '<section class="main"><div class="tips"></div><dl class="options"><dt><span class="num">1</span> <span class="case">若您已安装百度App</span></dt><dd class="bb"><div class="wizard"><div class="arr"></div><div class="img"></div><p>第1步 点击该页右上角的“更多”</p><p>第2步 选择在浏览器中打开</p></div></dd><dt><span class="num">2</span><span class="case">若您尚未安装百度App</span></dt><dd><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox" class="btn">去Appstore下载</a></dd></dl></section><footer><div class="logo"><strong>百度App</strong><p>百度一下 你就得到</p></div><div class="copy">Copyright © 2016 BAIDU Corporation. All rights reserved.</div></footer>', o.body.appendChild(m);
            var e = u && u.style.overflow;
            u && (u.style.overflow = "hidden"), m.addEventListener("click", function(n) {
                "A" !== n.target.tagName && (u && (u.style.overflow = e), o.body.removeChild(m))
            })
        }

        function c(e) {
            var o = {};
            k.ios ? o = g : k.android && (o = y);
            var n;
            for (n in v) o[n] = v[n];
            for (var t in o)
                if (o.hasOwnProperty(t) && o[t].test(e) && (k.ios || "safari" != t)) return t;
            if (k.ios) {
                if (/\bsafari\/\d{3}\.\d$/i.test(e) && /\bAppleWebKit\/\d{3}\.\d\.\d/i.test(e)) return "safari";
                if (/\bsafari\/\d{4}\.\d{2}$/i.test(e)) return "liebaobrowser"
            } else if (k.android && /\bChrome\//i.test(e)) return "chrome";
            return "other"
        }

        function d() {
            var e = navigator.userAgent.split("Chrome/")[1];
            if (!e) return 0;
            var o = e.split(".")[0],
                n = parseInt(o, 10);
            return n
        }

        function p(e) {
            var o;
            for (o in e) return !1;
            return !0
        }

        function l(e, o, n) {
            var t = e.split("#"),
                i = t[0],
                r = t[1] || "";
            return i = i.indexOf("?") > 0 ? i + "&" + o + "=" + n : i + "?" + o + "=" + n, r && (i = i + "#" + r), i
        }
        var u, m, b = ".openBox-weixinTip .options .link {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.openBox-weixinTip *,.openBox-weixinTip *:before,.openBox-weixinTip *:after {-webkit-box-sizing: inherit;box-sizing: inherit;}.openBox-weixinTip {-webkit-box-sizing: border-box;box-sizing: border-box;position: fixed;top: 0;width: 100%;z-index: 999999;display: -webkit-box;-webkit-box-orient: vertical;box-orient: vertical;min-height: 100%;background-color: #FFFFFF;}.openBox-weixinTip .main {-webkit-box-flex: 1;box-flex: 1;padding: 0 35px;}.openBox-weixinTip .tips {padding-top: 38px;font-size: 15px;color: #aaa;}.openBox-weixinTip .options dt {padding: 13px 0px 9px;}.openBox-weixinTip .options dt .num {float: left;-webkit-border-radius: 100%;border-radius: 100%;width: 16px;height: 16px;line-height: 16px;font-size: 13px;text-align: center;color: #fff;background-color: #5d646f;}.openBox-weixinTip .options dt .case {font-size: 17px;padding-left: 6px;}.openBox-weixinTip .options dd {padding-bottom: 24px;margin-bottom: 8px;line-height: 22.5px;}.openBox-weixinTip .options dd.bb {border-bottom: 1px solid #efefef;}.openBox-weixinTip .options .wizard {position: relative;}.openBox-weixinTip .options .wizard .arr {position: absolute;right: -10px;top: -50px;width: 40px;height: 40px;background: url(//s.bdstatic.com/common/openjs/openBox/wechatPop-arrow.png) no-repeat;-webkit-background-size: cover;background-size: cover;}.openBox-weixinTip .options .wizard .img {padding-top: 18.033%;width: 100%;background: url(//s.bdstatic.com/common/openjs/openBox/wechatPop-wizard.png) no-repeat;-webkit-background-size: cover;background-size: cover;}.openBox-weixinTip .options .wizard p {display: none;}.openBox-weixinTip .options .text {font-size: 17px;color: #777;}.openBox-weixinTip .options .link {display: block;text-decoration: underline;font-size: 17px;width: 100%;color: #3c76ff;}.openBox-weixinTip .options .btn {display: block;border: 1px solid #ccc;-webkit-border-radius: 6px;border-radius: 6px;height: 40px;line-height: 40px;font-size: 16px;text-align: center;color: #000;background-color: #fff;}.openBox-weixinTip .options .btn:active {background-color: rgba(0, 0, 0, 0.1);}.openBox-weixinTip footer {height: 115px;}.openBox-weixinTip footer .logo {overflow: hidden;margin: 0 auto;width: 216px;height: 63px;text-indent: -9999px;background: url(//s.bdstatic.com/common/openjs/openBox/wechatPop-logo.png) no-repeat;-webkit-background-size: cover;background-size: cover;}.openBox-weixinTip footer .copy {margin-top: 15px;text-align: center;font-size: 10px;color: #999;};",
            f = "http://a.app.qq.com/o/simple.jsp",
            x = "https://boxer.baidu.com/scheme?scheme=",
            h = "https://mo.baidu.com/boxandroid",
            v = {
                sinaweibo: /\bweibo\b/i,
                weixin: /micromessenger\//i,
                qq: /\bQQ\//,
                qzone: /Qzone\//,
                qqbrowser: /MQQBrowser\//i,
                uc: /UCBrowser\//i,
                baidubrowser: /baidubrowser\//,
                sougoubrowser: /\bSogouMobileBrowser\//i,
                search360: /\bmso_app\b/i,
                sougousearch: /\bSogousearch\//i,
                quark: /\bQuark\//i,
                b2345: /\bMb2345Browser\//i
            },
            g = {
                chrome: /\bCriOS\/([\d.]+)/,
                firefox: /\bFxiOS\//i,
                maxthon: /\bMXiOS\//i
            },
            y = {
                firefox: /\bFirefox\//i,
                opera: /\bOPR\//i,
                dolphinbrowser: /\bDolphinBrowserCN\//i,
                liebaobrowser: /\bliebao/i,
                ebrowser: /\bebrowser\//i,
                lebrowser: /\blebrowser\//i,
                huohoubrowser: /\bHuohouBrowser\//i,
                vivobrowser: /\bVivoBrowser\//i,
                oppobrowser: /\bOppoBrowser\//i,
                miuibrowser: /MiuiBrowser\//i,
                samsungbrowser: /\bSamsungBrowser\//i,
                jinlibrowser: /\bGNBR\//i,
                letvbrowser: /\bEUI\sBrowser/i,
                meizubrowser: /\bMZBrowser/i
            },
            w = r,
            k = n("common:bdbox/utils/detect")(),
            B = n("common:bdbox/utils/version_compare"),
            C = n("common:bdbox/utils/queryToJson"),
            E = C(e.location.href),
            O = c(e.navigator.userAgent),
            S = n("common:bdbox/monitor/pblog");
        S("init", [14]), i.exports = function(n, t) {
            function i() {
                r || !k.isWechat && !k.isQQ ? a(R, M, d, c, I) : (f = l(f, "pkgname", P), U && (f = l(f, "ckey", U)), ("com.baidu.searchbox" === P || "com.baidu.searchbox.lite" === P) && (f = l(f, "android_scheme", encodeURIComponent(R))), e.location.href = f)
            }
            if (!w.$isBox() && w.isObject(n)) {
                var r = 1 == n.overwrite ? 1 : 0,
                    c = n.from || n.sfrom || "other",
                    d = n.waitTime || 100,
                    u = n.failUrl || "",
                    m = n.failUrlWidthScheme || "",
                    b = n.failUrlParams || "",
                    v = n.token || "",
                    g = n.ts || "",
                    y = n.appid || "",
                    C = n.idmData || {},
                    A = n.matrix || "",
                    T = {
                        source: c,
                        from: "openbox",
                        page: O,
                        type: E && 1 == E.isBdboxShare ? "share" : "",
                        value: "",
                        channel: n.channel || "",
                        extlog: n.extLog || ""
                    },
                    I = n.copyTokenData || {},
                    _ = n.yybData || {},
                    N = parseInt(_.pkg, 10),
                    P = _.pkgName;
                if (!P) switch (N) {
                    case 1:
                        P = "com.baidu.searchbox";
                        break;
                    case 2:
                        P = "com.baidu.searchbox.lite";
                        break;
                    default:
                        P = "com.baidu.searchbox"
                }
                var U = _.ckey,
                    j = o.cookie || "",
                    z = /baiduid=(.+?);/i,
                    F = j.match(z);
                F && F.length && (T.baiduId = F[1] || "");
                var M;
                if (M = w.isFunction(n.failCallback) ? n.failCallback : n.channel ? h + "?from=" + n.channel : h, k.android && n.androidCommand) {
                    var R;
                    if (w.isObject(n.androidCommand)) {
                        var D = "7.4";
                        (n.androidCommand.minver || "lite" === n.matrix) && (D = n.androidCommand.minver || "3.3", delete n.androidCommand.minver);
                        var H = "";
                        H = n.backQuery ? '{"intent":"intent:#Intent;action=com.baidu.searchbox.action.SEARCH;S.key_value=' + n.backQuery : '{"intent":"intent:#Intent;action=com.baidu.searchbox.action.HOME', n.packageName && (H += ";package=" + n.packageName), p(n.androidCommand) ? H += ';end"}' : ("lite" === n.matrix && n.androidCommand.min_v && (n.androidCommand.min_v = "20120832"), H = H + ";S.targetCommand=" + encodeURIComponent(JSON.stringify(n.androidCommand)) + ';end"}'), R = (n.protocolHeader || "baiduboxapp") + "://utils?action=sendIntent&minver=" + D + "&params=" + encodeURIComponent(H)
                    } else R = n.androidCommand;
                    T.app_now = O + "_" + Date.now() + "_" + (Math.random() + "").slice(-10), T.yyb_pkg = P, T.idmData = C, T.matrix = A, R = R + "&needlog=1&logargs=" + encodeURIComponent(JSON.stringify(T)), t ? i() : S("event", ["openBox", c, T, null, i])
                } else if (k.ios && n.iosScheme) {
                    if (T.app_now = O + "_" + Date.now() + "_" + (Math.random() + "").slice(-10), n.noAddLog) var Q = n.iosScheme;
                    else var Q = n.iosScheme + "&needlog=1&logargs=" + encodeURIComponent(JSON.stringify(T));
                    if (T.isUL = B(k.version, "9.0") >= 0 && !r ? 1 : 0, S("event", ["openBox", c, T]), B(k.version, "9.0") < 0 || r || n.iosForceScheme) !r && k.isWechat ? s() : a(Q, M, d, c, I);
                    else {
                        var $ = x + encodeURIComponent(Q);
                        $ = l($, "source", c), $ = l($, "channel", n.channel), b && ($ = l($, "failurlparams", encodeURIComponent(b))), "" !== u && (m && (u = l(u, "scheme", encodeURIComponent(Q))), $ += "&target=" + encodeURIComponent(u), $ += "&token=" + encodeURIComponent(v), $ += "&ts=" + encodeURIComponent(g), $ += "&appid=" + encodeURIComponent(y)), $ = l($, "tokenData", encodeURIComponent(JSON.stringify(I))), e.location.href = k.isWechat && "main" === n.matrix && n.iosWechatToAppstore ? "https://itunes.apple.com/cn/app/id382201985?mt=8" : $
                    }
                } else w.isFunction(M) ? M() : e.location.href = M
            }
        }
    });
    var x = i("common:bdbox/utils/detect")();
    r("common:bdbox/clone", function(e, o, n) {
        var t = Object.prototype.toString,
            i = function(e, o, n) {
                var t = 0;
                for (var i in e)
                    if (e.hasOwnProperty(i))
                        if (n) o[i] = e[i];
                        else if (o(i, e[i], t++)) break
            },
            r = function(e) {
                var o;
                switch (t.call(e)) {
                    case "[object Object]":
                        o = {}, i(e, function(e, n) {
                            o[e] = r(n)
                        });
                        break;
                    case "[object Array]":
                        o = [], e.forEach(function(e) {
                            o.push(r(e))
                        });
                        break;
                    default:
                        o = e
                }
                return o
            };
        n.exports = r
    }), r("common:bdbox/utils/each", function(e, o, n, t) {
        n.exports = function(e, o, n) {
            if (t.isArray(e)) {
                for (var i = 0; i < e.length; i++)
                    if (o.call(n || e[i], e[i], i) === !1) return e
            } else
                for (var r in e)
                    if (o.call(n || e[r], e[r], r) === !1) return e;
            return e
        }
    }), r("common:bdbox/event/delegate", function(e, o, n, t) {
        function i(e) {
            return e._bid || (e._bid = t.getId())
        }

        function r(e) {
            var o, n = {
                originalEvent: e
            };
            for (o in e) O.test(o) || void 0 === e[o] || (n[o] = e[o]);
            return v(S, function(o, t) {
                n[t] = function() {
                    return this[o] = C, e[t].apply(e, arguments)
                }, n[o] = E
            }), n
        }

        function a(e) {
            var o = ("" + e).split(".");
            return {
                e: o[0],
                ns: o.slice(1).sort().join(" ")
            }
        }

        function s(e, o, n, t, r, s) {
            var l = i(e),
                u = B[l] || (B[l] = []);
            p(o, n, function(o, n) {
                var i = a(o);
                i.fn = n, i.sel = t, i.e in k && (n = function(e) {
                    var o = e.relatedTarget;
                    return !o || o !== this && !h(this, o) ? i.fn.apply(this, arguments) : void 0
                }), i.del = r && r(n, o);
                var p = i.del || n;
                i.proxy = function(o) {
                    var n = p.apply(e, [o].concat(o.data));
                    return n === !1 && (o.preventDefault(), o.stopPropagation()), n
                }, i.i = u.length, u.push(i), "addEventListener" in e && e.addEventListener(c(i.e), i.proxy, d(i, s))
            })
        }

        function c(e) {
            return k[e] || e
        }

        function d(e, o) {
            return e.del && ("focus" == e.e || "blur" == e.e) || !!o
        }

        function p(e, o, n) {
            e.split(/\s/).forEach(function(e) {
                n(e, o)
            })
        }

        function l(e, o, n, t, r) {
            var a = i(e);
            p(o || "", n, function(o, n) {
                u(e, o, n, t).forEach(function(o) {
                    delete B[a][o.i], "removeEventListener" in e && e.removeEventListener(c(o.e), o.proxy, d(o, r))
                })
            })
        }

        function u(e, o, n, t) {
            if (o = a(o), o.ns) var r = f(o.ns);
            return (B[i(e)] || []).filter(function(e) {
                return !(!e || o.e && e.e != o.e || o.ns && !r.test(e.ns) || n && i(e.fn) !== i(n) || t && e.sel != t)
            })
        }

        function m(e, o, n) {
            for (var t = !1; e && !(t ? t.indexOf(e) >= 0 : x(e, o));) e = e !== n && !b(e) && e.parentNode;
            return e
        }

        function b(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE
        }

        function f(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function x(e, o) {
            if (!e || 1 !== e.nodeType) return !1;
            var n = e.webkitMatchesSelector || e.matchesSelector;
            if (n) return n.call(e, o);
            var t, i = e.parentNode,
                r = !i;
            return r && (i = tempParent).appendChild(e), t = ~T(i, o).indexOf(e), r && tempParent.removeChild(e), t
        }

        function h(e, o) {
            return e !== o && e.contains(o)
        }
        var v = e("common:bdbox/utils/each"),
            g = /^\.([\w-]+)$/,
            y = /^#([\w-]*)$/,
            w = /^[\w-]+$/,
            k = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            B = {},
            C = function() {
                return !0
            },
            E = function() {
                return !1
            },
            O = /^([A-Z]|layer[XY]$)/,
            S = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            },
            A = {
                on: function(e, o, n, t) {
                    return s(e, n, t, o, function(n) {
                        return function(t) {
                            var i, a = m(t.target, o, e);
                            return a ? (i = r(t), i.currentTarget = a, i.liveFired = e, n.apply(a, [i].concat([].slice.call(arguments, 1)))) : void 0
                        }
                    })
                },
                off: function(e, o, n, t) {
                    return l(e, n, t, o)
                }
            };
        n.exports = A;
        var T = function(e, o) {
            var n;
            return b(e) && y.test(o) ? (n = e.getElementById(RegExp.$1)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : slice.call(g.test(o) ? e.getElementsByClassName(RegExp.$1) : w.test(o) ? e.getElementsByTagName(o) : e.querySelectorAll(o))
        }
    });
    var h = ".openBox-shareEntry *,.openBox-shareEntry *:before,.openBox-shareEntry *:after{    margin: 0;    padding: 0;}.openBox-shareEntry {    margin: 0;    padding: 0;    position: relative;    width: 100%;    height: 60px;}.openBox-shareEntry div {  /* UC下被屏蔽 */    display: block !important;}.openBox-shareEntry .shareEntry-blank {    box-sizing: border-box;    width: 100%;    height: 60px;    padding: 0px 18px;    position: fixed;    left: 0;    bottom: 0;    z-index: 9999;    display: -webkit-box !important;    display: box !important;    -webkit-box-align: center;    box-align: center;    background-color: rgba(0, 0, 0, 0.7);}.openBox-shareEntry .shareEntry-box {    -webkit-box-flex: 1;    box-flex: 1;    display: -webkit-box !important;    display: box !important;    box-sizing: border-box;    -webkit-box-align: center;    box-align: center;}.openBox-shareEntry .shareEntry-box .shareEntry-icon {    height: 40px;    width: 40px;    background: url(//s.bdstatic.com/common/openjs/openBox/shareEntry-logo.png) no-repeat;    background-size: 40px 40px;    border-radius: 4px;    overflow: hidden;    margin-right: 12px;}.openBox-shareEntry .shareEntry-box .shareEntry-text {    -webkit-box-flex: 1;    box-flex: 1;}.openBox-shareEntry .shareEntry-box .shareEntry-title {    text-align: left;    line-height: 1;    font-weight: bold;    color: #FFFFFF;    font-size: 17px;}@media only screen and (max-width: 320px) {    .openBox-shareEntry .shareEntry-box .shareEntry-title {        font-size: 15px;    }}.openBox-shareEntry .shareEntry-box .shareEntry-cont {    text-align: left;    white-space: nowrap;    overflow: hidden;    color: #999999;    margin-top: 4px;    line-height: 1.2;    -webkit-text-size-adjust: none;    font-size: 13px;}@media only screen and (max-width: 320px) {    .openBox-shareEntry .shareEntry-box .shareEntry-cont {        font-size: 10px;    }}.openBox-shareEntry .shareEntry-app {    width: 75px;    box-sizing: border-box;    margin-left: 12px;}.openBox-shareEntry .shareEntry-app .shareEntry-btn {    display: block;    width: 75px;    height: 30px;    line-height: 30px;    text-align: center;    color: #ffffff;    font-size: 15px;    border-radius: 4px;    background-color: #3c76ff;}",
        v = {
            firstOpen: "main",
            secondOpen: "lite",
            status: "-1"
        },
        g = Date.now();
    x.android && (c > g || g > d) && s(), e.OpenBox = function(t) {
        function r(e) {
            k ? e() : w.push(e)
        }

        function a() {
            k || (k = !0, w.forEach(function(e) {
                e()
            }), w.length = 0)
        }

        function s(e, o) {
            function t(e) {
                if (!e) return i.main;
                var o = i[e];
                return o ? o : (o = {}, "string" == typeof e ? (o.protocolHeader = "baidubox" + e, o.packageName = "com.baidu.searchbox." + e, o) : i.main)
            }
            e = e || {}, o === n && (o = !0), e.matrix || B.matrix || (e.matrix = "main"), !e.matrix && B.matrix && (e.matrix = B.matrix);
            var i = {
                    main: {
                        protocolHeader: "baiduboxapp",
                        packageName: "com.baidu.searchbox"
                    },
                    lite: {
                        protocolHeader: "baiduboxlite",
                        packageName: "com.baidu.searchbox.lite"
                    },
                    info: {
                        protocolHeader: "baiduinfoapp",
                        packageName: "com.baidu.searchbox.info"
                    },
                    pro: {
                        protocolHeader: "baiduboxpro",
                        packageName: "com.baidu.BaiduMobilePlus"
                    },
                    mission: {
                        protocolHeader: "baiduboxmission",
                        packageName: "com.baidu.searchbox.mission"
                    }
                },
                r = t(e.matrix);
            return e.protocolHeader = r.protocolHeader, e.packageName = r.packageName, o ? (g(!0, B, e), !0) : e
        }

        function c() {
            i("common:bdbox/utils/addStyle")(h);
            var e = o.createElement("div");
            e.setAttribute("class", "openBox-shareEntry"), e.innerHTML = '<div class="shareEntry-blank"><div class="shareEntry-box"><div class="shareEntry-icon"></div><div class="shareEntry-text"><p class="shareEntry-title">' + B.tipTexts.title + '</p><p class="shareEntry-cont">' + B.tipTexts.subtitle + '</p></div></div><div class="shareEntry-app"><a class="shareEntry-btn">' + B.tipTexts.button + "</a></div></div>", o.body.appendChild(e);
            var n = e.querySelectorAll(".shareEntry-btn")[0];
            n.addEventListener("click", function() {
                l()
            })
        }

        function d(e) {
            return e.protocolMap && "object" == typeof e.protocolMap && e.protocolMap[e.matrix] ? e.protocolMap[e.matrix] : e.protocolHeader
        }

        function p(e, o) {
            if (e) {
                var n = A(B);
                return g(!0, n, s(e, !1)), n.protocolHeader = d(n), void E(u(n), o)
            }
            return k ? void E(u(B), o) : void console.log("_openBoxInfo not ready!")
        }

        function l(e) {
            e = e || {}, t = t || {}, e.matrix || t.matrix || (e.matrix = "main");
            var o = e.copyTokenData || t.copyTokenData || {};
            if (null == e.failCallback && null == t.failCallback && x.android && (e.failCallback = function() {
                    var n = e.channel || t.channel || "757b",
                        i = e.from || t.from || "";
                    b(n, i, o)
                }, /\bliebao/i.test(navigator.userAgent) && (e.failCallback = n), /\(.*Android.*(SAMSUNG|SM-).*\)/.test(navigator.userAgent) && (/MQQBrowser\//i.test(navigator.userAgent) || /UCBrowser\//i.test(navigator.userAgent)) && (e.failCallback = n)), !v || !x.android || /micromessenger\//i.test(navigator.userAgent) || /\bQQ\//.test(navigator.userAgent)) return void p(e);
            if (e.notUseIdm || t.notUseIdm) return void p(e);
            var i = e.from || t.from || "";
            if (["neibu_shouye_yuyinsousuo", "neibu_sousuojieguoye_yuyinsousuo", "1019696a"].indexOf(i) >= 0) return void p(e);
            var r = v.firstOpen,
                a = e;
            a.idmData = v;
            var s = A(a),
                c = v.secondOpen;
            a.failCallback = function() {
                s.matrix = c, p(s, !0)
            }, a.matrix = r, p(a)
        }

        function u(o) {
            var n = A(o);
            return x.ios ? n.iosScheme ? "function" == typeof n.iosScheme && (n.iosScheme = n.iosScheme(n)) : n.iosScheme = n.url ? m(n.url).iosScheme : m(e.location.href).iosScheme : x.android && (n.androidCommand ? "function" == typeof n.androidCommand && (n.androidCommand = n.androidCommand(n)) : n.androidCommand = n.url ? m(n.url).androidCommand : m(e.location.href).androidCommand), 1 == n.overwrite && (n.failCallback = f.isFunction(n.failCallback) ? n.failCallback : function() {}), n
        }

        function m(e) {
            var o = {},
                n = encodeURIComponent(e);
            return o.iosScheme = B.protocolHeader + "://easybrowse?opentype=1&openurl=" + n + "&isla=0&newbrowser=1", o.androidCommand = {
                mode: "0",
                intent: "intent:#Intent;B.bdsb_append_param=true;S.bdsb_light_start_url=" + n + ";package=" + B.packageName + ";end",
                "class": "com.baidu.searchbox.xsearch.UserSubscribeCenterActivity",
                min_v: "16787968"
            }, o
        }

        function b(n, t, i) {
            function r(n) {
                var t = o.createElement("iframe");
                t.src = n, t.style.display = "none", o.body.appendChild(t), e.setTimeout(function() {
                    o.body.removeChild(t)
                }, 300)
            }
            var a, s, c = {
                xiaomi: {
                    reg: /\(.*Android.*(MI|Mi|Redmi).*\)/,
                    scheme: "mimarket://details?id=com.baidu.searchbox&back=true"
                },
                samsung: {
                    reg: /\(.*Android.*(SAMSUNG|SM-).*\)/,
                    scheme: "samsungapps://ProductDetail/com.baidu.searchbox"
                },
                huawei: {
                    reg: /\(.*Android.*(HUAWEI|HONOR).*\)/i,
                    scheme: "appmarket://details?id=com.baidu.searchbox"
                },
                oppo: {
                    reg: /\(.*Android.*OPPO.*\)/,
                    scheme: "oppomarket://details?packagename=com.baidu.searchbox",
                    downloadFirst: !0
                },
                vivo: {
                    reg: /\(.*Android.*(vivo|VIVO).*\)/,
                    scheme: "vivomarket://details?id=com.baidu.searchbox"
                }
            };
            for (a in c) {
                if (!c.hasOwnProperty(a)) return;
                s = c[a], s.reg.test(navigator.userAgent) && r(s.scheme)
            }
            setTimeout(function() {
                var e = "https://mo.baidu.com/boxandroid?from=" + n + "&source=" + t;
                e += "&tokenData=" + encodeURIComponent(JSON.stringify(i)), location.href = e
            }, 300)
        }
        var g = i("common:bdbox/extend");
        if (f.isBox) {
            var y = function() {
                console.log("OpenBox只支持在手百外使用")
            };
            return {
                ready: y,
                open: y
            }
        }
        var w = [],
            k = !1,
            B = {
                tipTexts: {
                    title: "百度",
                    subtitle: "打开百度App，遇见更多精彩。",
                    button: "立刻打开"
                }
            };
        if (s(t), t && x.ios && t.iosScheme) B.iosScheme = t.iosScheme, a();
        else if (t && x.android && t.androidCommand) B.androidCommand = t.androidCommand, a();
        else if (t && t.serverSchemeInfo) {
            var C = i("common:bdbox/io/loadJS");
            C({
                url: "//m.baidu.com/searchbox?action=cmd&nomust=searchbox&service=bdbox&cb=?",
                data: t.serverSchemeInfo,
                success: function(e) {
                    try {
                        0 == e.errno && e.data && (x.ios ? (B.iosScheme = e.data.cmd.url, a()) : x.android && (B.androidCommand = e.data.cmd, a()))
                    } catch (o) {}
                },
                error: function(e) {
                    console.log("error:" + e)
                }
            })
        } else a();
        t && t.showTip && r(c);
        var E = i("common:bdbox/invoke/openBox"),
            O = "openBox",
            S = i("common:bdbox/event/delegate"),
            A = i("common:bdbox/clone");
        return S.on(o.body || o.documentElement, "[data-box]", "click", function() {
            if (~this.dataset.box.indexOf(O)) {
                var e = A(B);
                if (1 == this.dataset.boxCustom ? (e.androidCommand = this.dataset.boxAndroidcommand, e.iosScheme = this.dataset.boxIosscheme) : (e.androidCommand = null, e.iosScheme = null, e.url = this.dataset.boxUrl || this.href), this.dataset.boxFailurl && (e.failUrl = this.dataset.boxFailurl), this.dataset.boxFrom && (e.from = this.dataset.boxFrom), this.dataset.boxChannel && (e.channel = this.dataset.boxChannel), this.dataset.boxOverwrite && (e.overwrite = this.dataset.boxOverwrite), B.failCallback && f.isFunction(B.failCallback)) {
                    var o = this;
                    e.failCallback = function() {
                        B.failCallback(o)
                    }
                } else 1 == e.overwrite && (e.failCallback = function() {});
                if (l(e), 1 != e.overwrite) return !1
            }
        }), {
            ready: r,
            open: l,
            version: 20170811
        }
    }, e.OpenBox.getIdmData = function() {
        return v || {}
    }
}(window, document);