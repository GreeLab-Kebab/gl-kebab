YAHOO = (typeof YAHOO === "undefined") ? {} : YAHOO;
YAHOO.JP = (typeof YAHOO.JP === "undefined") ? {} : YAHOO.JP;
YAHOO.JP.idpf = (typeof YAHOO.JP.idpf === "undefined") ? {} : YAHOO.JP.idpf;
YAHOO.JP.idpf.loginPromo = (function() {
    var k, f, j = (window.location.protocol.match(/https:/) ? "https://s" : "http://i") + ".yimg.jp/images/login/sp/js/login_promo/1.0.5/login_promo_core-min.js",
        e = (window.location.protocol.match(/https:/) ? "https://s" : "http://i") + ".yimg.jp/images/login/sp/js/login_promo/1.0.3/login_promo_param-min.js",
        n = (window.location.protocol.match(/https:/) ? "https://s" : "http://i") + ".yimg.jp/images/login/sp/js/login_promo/1.1.1/login_promo_core-min.js",
        l = (window.location.protocol.match(/https:/) ? "https://s" : "http://i") + ".yimg.jp/images/login/sp/js/login_promo/1.1.2/login_promo_param-min.js",
        h = document,
        g = (new Date()).getTime(),
        i = parseInt(g / (3600 * 1000)),
        c = null,
        b, d, a = 0,
        m;
    return {
        init: function(q) {
            b = q;
            m = this;
            if (b.cauth_params) {
                var o = this.rc("prn", "cauth_issued_type"),
                    p = this.rc("prn", "cauth_issued");
                if (this.rc("prn", "cauth_exception") === "1" || ((o === "system") && p + 1000 * 60 * 60 * 24 > g) || ((o === "view") && p + 1000 * 60 * 60 * 24 * 3 > g) || (o === "click" && p + 1000 * 60 * 60 * 24 * 7 > g)) {
                    this.fireEvt(document.body, "idpfCAUserConditionJudged", {
                        status: "error",
                        type: "skipped",
                        code: "400000",
                        url: ""
                    });
                    this.initLPModule()
                } else {
                    this.cIfr(b.cauth_params.bcrumb);
                    window.addEventListener("message", YAHOO.JP.idpf.loginPromo.onMessage, false)
                }
            } else {
                if (b.login_promo_params) {
                    this.initLPModule()
                } else {
                    return this
                }
            }
            return this
        },
        initCAModule: function() {
            if (b.cauth_params && b.cauth_params.judge_only === true) {
                this.sc("prn", "cauth_issued_type", "judge");
                this.sc("prn", "cauth_issued", g);
                return
            }
            k = n;
            f = l;
            b.mode = "pop";
            b.color_btn_a = b.cauth_params.color_btn_a || undefined;
            b.color_btn_b = b.cauth_params.color_btn_b || undefined;
            b.color_btn_txt = b.cauth_params.color_btn_txt || undefined;
            b.btn_padding = b.cauth_params.btn_padding || undefined;
            b.btn_margin = b.cauth_params.btn_margin || undefined;
            b.title_padding = b.cauth_params.title_padding || undefined;
            m.loadScript(h, "script", "idpfCAInvoke", f + "?t=" + i);
            h.body.addEventListener("idpfCAInvokeLoaded", function() {
                d = YAHOO.JP.idpf.loginPromo.Invoke.is();
                if (d === false) {
                    return m
                }
                m.loadScript(h, "script", "idpfCAScript", k + "?t=" + i);
                h.body.addEventListener("idpfCALoaded", function() {
                    YAHOO.JP.idpf.loginPromo.Core.loadDom();
                    h.body.addEventListener("idpfCADomLoaded", function() {
                        YAHOO.JP.idpf.loginPromo.Core.init(b)
                    }, false)
                }, false)
            }, false)
        },
        initLPModule: function() {
            if (!b.login_promo_params) {
                return
            }
            var o = b.login_promo_params;
            k = j;
            f = e;
            b.mode = o.mode;
            b.title = o.title;
            b.desc = o.desc || undefined;
            b.img = o.img || undefined;
            b.logo = o.logo || undefined;
            b.login_flg = o.login_flg || undefined;
            b.color_btn_a = o.color_btn_a || undefined;
            b.color_btn_b = o.color_btn_b || undefined;
            b.color_btn_txt = o.color_btn_txt || undefined;
            b.img_height = o.img_height || undefined;
            b.btn_txt = o.btn_txt || undefined;
            b.btn_url = o.btn_url || undefined;
            if (o.login_flg) {
                if (o.clear_prn && o.timestamp && Math.abs(o.timestamp * 1000 - g) < 5 * 60 * 1000 && o.clear_prn_from) {
                    YAHOO.JP.idpf.loginPromo.clear_prn = true;
                    YAHOO.JP.idpf.loginPromo.clear_prn_from = o.clear_prn_from;
                    YAHOO.JP.idpf.loginPromo.timestamp = o.timestamp
                }
                if (this.rc("Y")) {
                    YAHOO.JP.idpf.loginPromo.login_flg = true
                }
            }
            if (o.prn_params) {
                YAHOO.JP.idpf.loginPromo.prn_params = o.prn_params
            }
            if (typeof o.logging_off !== "undefined") {
                b.logging_off = o.logging_off
            }
            m.loadScript(h, "script", "idpfLPInvoke", f + "?t=" + i);
            h.body.addEventListener("idpfLPInvokeLoaded", function() {
                d = YAHOO.JP.idpf.loginPromo.Invoke.is();
                if (d === false) {
                    return m
                }
                m.loadScript(h, "script", "idpfLPScript", k + "?t=" + i);
                h.body.addEventListener("idpfLPLoaded", function() {
                    YAHOO.JP.idpf.loginPromo.Core.loadDom();
                    h.body.addEventListener("idpfLPDomLoaded", function() {
                        YAHOO.JP.idpf.loginPromo.Core.init(b)
                    }, false)
                }, false)
            }, false)
        },
        show: function(o) {
            if (d === false && !YAHOO.JP.idpf.loginPromo.loggedin) {
                return
            }
            if (YAHOO.JP.idpf.loginPromo.ready) {
                YAHOO.JP.idpf.loginPromo.Core.show(o)
            } else {
                h.addEventListener("idpfCAModuleLoaded", function() {
                    YAHOO.JP.idpf.loginPromo.Core.show(o)
                });
                h.addEventListener("idpfLPModuleLoaded", function() {
                    YAHOO.JP.idpf.loginPromo.Core.show(o)
                })
            }
        },
        hide: function() {
            if (d === false && !YAHOO.JP.idpf.loginPromo.loggedin) {
                return
            }
            if (YAHOO.JP.idpf.loginPromo.ready) {
                YAHOO.JP.idpf.loginPromo.Core.hide()
            }
        },
        fireEvt: function(s, q, r) {
            if (!s || !q || typeof s != "object" || typeof q != "string" || s.nodeType == 3 || s.nodeType == 8) {
                return
            }
            var p = document,
                o;
            if (p.createEvent) {
                o = p.createEvent("HTMLEvents");
                o.initEvent(q, true, true)
            } else {
                o = p.createEventObject();
                o.eventType = q
            }
            o.eventName = q;
            if (r) {
                o.u_data = r
            }
            if (p.createEvent) {
                s.dispatchEvent(o)
            } else {
                s.fireEvent("on" + o.eventType, o)
            }
        },
        loadScript: function(v, q, p, u, o) {
            var r = v.getElementsByTagName(q)[0],
                w = v.createElement(q);
            w.id = p;
            w.src = u;
            if (o && typeof o === "function") {
                w.onload = o
            }
            r.parentNode.insertBefore(w, r)
        },
        rc: function(p, u) {
            var r, q, v, t, s, o = h.cookie.split(";");
            for (r = 0; r < o.length; r++) {
                v = o[r];
                while (v.charAt(0) == " ") {
                    v = v.substring(1, v.length)
                }
                if (v.indexOf(p + "=") === 0) {
                    if (!u) {
                        return v
                    }
                    s = v.substring((p + "=").length, v.length).split("&");
                    for (q = 0; q < s.length; q++) {
                        t = s[q];
                        if (t.indexOf(u + "=") === 0) {
                            return t.substring((u + "=").length, t.length)
                        }
                    }
                }
            }
            return ""
        },
        gc: function(r) {
            var p = document,
                t = p.cookie.split(";");
            for (var s = 0, o = t.length; s < o; s++) {
                var q = t[s].replace(/\s/g, "");
                if (new RegExp(r + "=").test(q)) {
                    return q.replace(r + "=", "")
                }
            }
        },
        sc: function(p, s, w, x) {
            var t = document,
                r, o, q, u = this.gc(p);
            if (u) {
                q = u.split("&");
                for (r = 0, o = q.length; r < o; r++) {
                    if (q[r].indexOf(s + "=") === 0) {
                        q.splice(r, 1);
                        u = q.join("&");
                        break
                    }
                }
            }
            t.cookie = p + (u ? "=" + u + "&" : "=") + s + "=" + w + "; domain=.yahoo.co.jp; path=/; expires=" + (new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * 365)).toGMTString()
        },
        cIfr: function(o) {
            if (!this.isInvokable() && b.cauth_params.judge_only !== true) {
                return
            }
            var p = h.createElement("IFRAME");
            p.src = "https://" + (b.cauth_params.staging ? "beta." : "") + "carrier.login.yahoo.co.jp/softbank/start/authorization?bcrumb=" + encodeURIComponent(b.cauth_params.bcrumb) + "&auto_login=" + (typeof b.cauth_params.auto_login !== "undefined" ? (b.cauth_params.auto_login === true ? "1" : "0") : "1") + "&from_id=promo&src=" + b.src + (b.cauth_params.doneurl || b.doneurl ? "&done=" + encodeURIComponent(b.cauth_params.doneurl || b.doneurl) : "");
            p.setAttribute("style", "display:none;border:none;visibility:hidden;overflow:hidden");
            h.body.appendChild(p);
            if (typeof b.cauth_params.timeout_msec !== "undefined") {
                a = parseInt(b.cauth_params.timeout_msec)
            }
            if (a > 0) {
                c = window.setTimeout(function() {
                    window.removeEventListener("message", YAHOO.JP.idpf.loginPromo.onMessage, false);
                    YAHOO.JP.idpf.loginPromo.fireEvt(document.body, "idpfCAUserConditionJudged", {
                        status: "error",
                        type: "timeout",
                        code: "400000",
                        url: ""
                    })
                }, a)
            }
            return p
        },
        isInvokable: function() {
            var p = this.getAndroidVersion(),
                o = this.getIosVersion();
            if (this.rc("Y")) {
                return false
            } else {
                if (window.innerHeight < window.innerWidth) {
                    return false
                } else {
                    if ((p !== 0 && p < 4) || (o !== 0 && o < 600)) {
                        return false
                    }
                }
            }
            return true
        },
        onMessage: function(p) {
            if (p.origin !== "https://" + (b.cauth_params.staging ? "beta." : "") + "carrier.login.yahoo.co.jp") {
                return
            }
            var o = JSON.parse(p.data);
            if (c) {
                window.clearTimeout(c)
            }
            if (o.status === "success") {
                switch (o.type) {
                    case "done":
                        m.fireEvt(document.body, "idpfCAAutoLoggedIn", o);
                        break;
                    case "start":
                        m.fireEvt(document.body, "idpfCAUserConditionJudged", o);
                        b.title = b.cauth_params.title_start;
                        b.desc = b.cauth_params.desc_start || undefined;
                        b.btntxt = b.cauth_params.btn_start || undefined;
                        b.type = o.type;
                        b.btnurl = o.url;
                        m.initCAModule();
                        break;
                    case "confirm":
                        m.fireEvt(document.body, "idpfCAUserConditionJudged", o);
                        b.title = b.cauth_params.title_confirm;
                        b.desc = b.cauth_params.desc_confirm || undefined;
                        b.btntxt = b.cauth_params.btn_confirm || undefined;
                        b.type = o.type;
                        b.btnurl = o.url;
                        m.initCAModule();
                        break;
                    default:
                        break
                }
            } else {
                if (o.status === "error") {
                    m.fireEvt(document.body, "idpfCAUserConditionJudged", o);
                    switch (o.code) {
                        case "400101":
                            m.sc("prn", "cauth_exception", "1");
                            break;
                        case "400102":
                            m.sc("prn", "cauth_exception", "1");
                            break;
                        case "400201":
                            m.sc("prn", "cauth_issued_type", "system");
                            m.sc("prn", "cauth_issued", g);
                            break;
                        case "400202":
                            m.sc("prn", "cauth_issued_type", "system");
                            m.sc("prn", "cauth_issued", g);
                            break;
                        default:
                            break
                    }
                    if (b.login_promo_params) {
                        m.initLPModule()
                    }
                }
            }
        },
        getAndroidVersion: function() {
            var o = navigator.userAgent.match(/Android\ (\d.\d)/);
            return (o) ? o[1] : 0
        },
        getIosVersion: function() {
            var o = navigator.userAgent,
                q;
            if (/iPhone/.test(o)) {
                var p = 3;
                o.match(/iPhone OS (\w+)/);
                if (parseInt(RegExp.$1.split("_")[0]) >= 10) {
                    p = 4
                }
                q = (RegExp.$1.replace(/_/g, "") + "00").slice(0, p);
                return parseInt(q)
            } else {
                return 0
            }
        }
    }
}());
YAHOO.JP.idpf.Toast = function() {
    var f = document,
        i, d, a, e, g, b, c;
    var h = {
        addEvent: function(n, m, l) {
            if (n) {
                var k = m.split(" ");
                for (var j = 0; j < k.length; j++) {
                    if (n.attachEvent) {
                        n.attachEvent("on" + k[j], l)
                    } else {
                        if (n.addEventListener) {
                            n.addEventListener(k[j], l, false)
                        } else {
                            n["on" + k[j]] = l
                        }
                    }
                }
            }
        },
        addClass: function(k, j) {
            if (k) {
                if (!k.className.match(j)) {
                    k.className += " " + j
                }
            }
        },
        removeClass: function(k, j) {
            if (k) {
                k.className = k.className.replace(j, "").replace(/^\s+|\s+$/g, "")
            }
        }
    };
    return {
        show: function(j) {
            i = this;
            a = j.msg || "";
            c = j.duration || "";
            e = j.array || null;
            b = j.callback || null;
            g = e.length;
            if (!a || !c || !e) {
                return false
            }
            this.createToast();
            setTimeout(function() {
                h.addClass(d, "show");
                setTimeout(function() {
                    e.pop();
                    h.addEvent(d, "webkitTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd", i.hide);
                    h.removeClass(d, "show");
                    h.addClass(d, "hide")
                }, c)
            }, 10)
        },
        createToast: function() {
            var j = "<style>.mdlToast{width:100%;height:auto;padding:5px;position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);color:#fff;font-size:13px;line-height:18px;text-align:center;z-index:9000000;opacity:1;-moz-transition:-moz-transform .4s ease,opacity .2s ease;-moz-transform:translate(0,-30px);-o-transition:-o-transform .4s ease,opacity .2s linear;-o-transform:translate(0,-30px);-webkit-transition:-webkit-transform .4s ease,opacity .2s linear;-webkit-transform:translate(0,-30px);transition:transform .4s ease,opacity .2s linear;transform:translate(0,-30px)}.mdlToast.show{-moz-transform:translate(0,0);-o-transform:translate(0,0);-webkit-transform:translate(0,0);transform:translate(0,0)}.mdlToast.hide{opacity:0}</style>";
            d = f.createElement("DIV");
            h.addClass(d, "mdlToast");
            d.style.top = (g - 1) * 40 + "px";
            d.innerHTML = j + a;
            f.body.appendChild(d)
        },
        hide: function(j) {
            if (b && j !== false) {
                b.call()
            }
            f.body.removeChild(d)
        }
    }
};