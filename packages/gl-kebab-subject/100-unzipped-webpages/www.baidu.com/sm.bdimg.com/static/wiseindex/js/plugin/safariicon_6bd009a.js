~ function(a) {
    "function" == typeof define && define.amd ? define(function() {
        return {
            init: function(c) {
                a().init(c)
            }
        }
    }) : window.BaiduGhSafMain = a()
}(function() {
    "use strict";

    function a(t, s) {
        for (var p in s) t[p] = s[p];
        return t
    }

    function c() {
        var a = location.search,
            c = {};
        if (-1 !== a.indexOf("?"))
            for (var h = a.substr(1), g = h.split("&"), i = 0; i < g.length; i++) c[g[i].split("=")[0]] = g[i].split("=")[1];
        return c
    }

    function h(c) {
        var h = a({
                r_sp: "safariicon_index",
                r_pssid: $("#commonBase").attr("data-sids") || "",
                logtype: "vgif",
                t: +new Date
            }, c),
            g = [],
            w = new Image;
        for (var p in h) g.push(p + "=" + encodeURIComponent(h[p]));
        w.src = location.protocol + "//entry.baidu.com/rp/v.gif?" + g.join("&")
    }

    function g() {
        return M.scrollnum < 2 ? void M.scrollnum++ : (clearTimeout(M.scrollTimer), void(U || (M.scrollTimer = setTimeout(function() {
            var a = $(window).scrollTop();
            a >= 10 && z && v(!0)
        }, 50))))
    }

    function w() {
        $(".gh-safari-btnadd,.gh-safari-btninfo").on("click", function(e) {
            e.stopPropagation(), e.preventDefault(), window.tc ? tc.log.send({
                ct: 69,
                cst: 2,
                clk_extra: {
                    type: "wiseindexfloat_click"
                }
            }) : h({
                fm: "click",
                r_type: "wiseindexfloat_click"
            }), v(), y()
        }), window.addEventListener("orientationchange", function() {
            90 === window.orientation || -90 === window.orientation ? (v(!0), _()) : b()
        }, !1), $(".gh-safari-closefloat").on("click", function(e) {
            e.stopPropagation(), e.preventDefault();
            var exp = new Date;
            exp = new Date(parseInt(exp.getTime(), 10) + 2592e5), window.B.cookie("safariicon", "3", {
                domain: ".baidu.com",
                path: "/",
                expires: 2592e5
            }), window.B ? B.log.send({
                ct: 69,
                cst: 3,
                clk_extra: {
                    type: "wiseindexfloat_close"
                }
            }) : h({
                fm: "click",
                r_type: "wiseindexfloat_close"
            }), T = 1, v()
        })
    }

    function b() {
        if ("3" !== window.B.cookie("safariicon") && 1 !== T && 90 !== window.orientation && -90 !== window.orientation && !z) {
            var a = $(".gh-safari-btn");
            a.css("display", "inline-block"), setTimeout(function() {
                a.css("opacity", 1), a.addClass("gh-bounceInUp")
            }, 50), z = !0
        }
    }

    function v(a) {
        if ($(window).off("scroll", g), M.timer && (clearTimeout(M.timer), M.timer = null), z) {
            z = !1;
            var c = $(".gh-safari-btn");
            a ? (c.removeClass("gh-bounceInUp"), c.addClass("gh-bounceOutDown"), setTimeout(function() {
                $(".gh-safari-btn").removeClass("gh-bounceOutDown"), c.hide(), c.css("opacity", 0)
            }, 150)) : (c.removeClass("gh-bounceInUp"), c.removeClass("gh-bounceOutDown"), c.hide(), c.css("opacity", 0))
        }
    }

    function k(e) {
        -1 !== e.target.className.indexOf("gh-safari-help") && _()
    }

    function y() {
        if (!U) {
            $(".gh-safariicon-container").addClass("gh-safariicon-container-help");
            var a = $(".gh-safari-help");
            a.show(), setTimeout(function() {
                a.css("opacity", 1), a.addClass("gh-fadeInUp"), U = !0, $(".gh-safariicon-container-help").on("click", k)
            }, 50), $("body").addClass("gh-safariicon-stopscroll")
        }
    }

    function _() {
        if (U) {
            U = !1;
            var a = $(".gh-safari-help");
            a.removeClass("gh-fadeInUp"), a.addClass("gh-fadeOutDown"), setTimeout(function() {
                a.removeClass("gh-fadeOutDown"), a.hide(), a.css("opacity", 0)
            }, 250), $(".gh-safariicon-container").removeClass("gh-safariicon-container-help"), $("body").removeClass("gh-safariicon-stopscroll")
        }
    }

    function D() {
        b(), _()
    }

    function C(a) {
        var h = location.pathname + location.search;
        if (/\.baidu\.com/.test(location.href)) {
            h = location.search ? c().ghbid ? h.replace(/([&|?]ghbid=)[^&.]+/, function(c, h) {
                return h + a
            }) : h.replace(/(\?[^&.]+)/, function(c) {
                return c + "&ghbid=" + a
            }) : h + "?ghbid=" + a;
            try {
                require("sfr").action.reset(h, null, {
                    silent: !0
                })
            } catch (e) {
                window.history.replaceState(null, document.title, location.protocol + "//" + location.host + h)
            }
        }
    }

    function I() {
        function a(a) {
            var c = location.protocol + "//" + location.host + $("#se-form").attr("action") + "?word=" + a + "&",
                g = [];
            for (var i in h) g.push(i + "=" + h[i]);
            return c + g.join("&")
        }
        var c = $('<a href="//m.baidu.com/" class="gh-mark-searchbtn" target="_blank"></a>');
        c.css({
            position: "absolute",
            top: 0,
            right: 0,
            width: "60px",
            height: "44px",
            display: "inline-block",
            "z-index": "99",
            padding: "0 10px"
        }), c.on("click", function(e) {
            e.preventDefault(), e.stopPropagation()
        }), $(".se-inner").append(c);
        var h = function() {
            for (var a = new Date, c = parseInt(a.getMonth() + 1, 10) >= 10 ? parseInt(a.getMonth() + 1, 10) : "0" + parseInt(a.getMonth() + 1, 10), h = parseInt(a.getDate(), 10) >= 10 ? parseInt(a.getDate(), 10) : "0" + parseInt(a.getDate(), 10), g = a.getFullYear() + "" + c + h, w = {
                    sasub: "wiseindex" + g
                }, b = $("#index-form input[type='hidden']"), i = 0; i < b.length; i++) w[b[i].name] = b[i].value;
            return w
        }();
        $("#index-kw").on("change", function() {
            $(".gh-mark-searchbtn").attr("href", a($(this).attr("value")))
        }), $(".suggest-content").on("DOMNodeInserted", function(e) {
            if (!($(e.target).find("button").length <= 0 || $(e.target).find("a").length > 0)) {
                var c = $('<a href="//m.baidu.com/" target="_blank"></a>');
                c.css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    "z-index": "99",
                    "padding-right": "40px"
                }), c.attr("href", a($(e.target).find("button").html().replace(/[<em>|<\/em>]/gi, ""))), c.on("click", function(e) {
                    e.stopPropagation()
                }), $(e.target).append(c)
            }
        })
    }

    function O() {
        $("head").append('<meta name="apple-mobile-web-app-capable" content="yes">')
    }
    var T = 0,
        U = !1,
        z = !1,
        M = {
            scrollnum: 0
        };
    return {
        init: function(a) {
            if (a = a || {}, a.staticDomain = a.staticDomain || "//gh.bdstatic.com", window.navigator.standalone) return B.comm.tanet = B.comm.spa = 0, I(), void(window.B ? B.log.send({
                ct: 69,
                cst: 1,
                clk_extra: {
                    bid: c().ghbid,
                    type: "fromscreenweb"
                }
            }) : h({
                fm: "load",
                bid: c().ghbid,
                r_type: "fromscreenweb"
            }));
            if (-1 !== a.sid.indexOf("121283")) {
                var g = navigator.userAgent,
                    b = /Safari\/([0-9]|\.)+$/gi;
                $.os.iphone && b.test(g) && -1 === g.indexOf("CriOS") && "3" !== window.B.cookie("safariicon") && !window.navigator.standalone && (this.render(), this.renderCss(a.staticDomain), w(), D(), C(window.B.cookie("BAIDUID")), O(), window.B ? B.log.send({
                    ct: 69,
                    cst: 1,
                    clk_extra: {
                        type: "wiseindexfloat_show"
                    }
                }) : h({
                    fm: "load",
                    r_type: "wiseindexfloat_show"
                }))
            }
        },
        renderCss: function(a) {
            var c = $('<link rel="stylesheet" type="text/css" href="' + a + '/static/gh/css/search/safariicon.css">');
            $(".gh-safariicon-container").append(c)
        },
        render: function() {
            var a = $('<div class="gh-safariicon-container">');
            a.css({
                position: "fixed",
                width: "100%",
                "text-align": "center",
                bottom: "0",
                "z-index": "20",
                "word-wrap": "break-word",
                "word-break": "break-word",
                "white-space": "normal",
                fontSize: 0
            });
            var c = this.renderBtn(),
                h = this.renderHelp();
            a.append(c).append(h), $("#index-card").append(a)
        },
        renderBtn: function() {
            var a = $('<div class="gh-animated gh-safari-btn">'),
                c = $("<div>"),
                h = $('<img class="gh-safari-btnadd" src="//gh.bdstatic.com/static/gh/img/wise/safari_add.png">'),
                g = $('<div class="gh-safari-btninfo">添加至桌面，快速访问结果 | </div>'),
                w = $('<div class="gh-safari-closefloat">关闭</div>'),
                b = $('<img src="//gh.bdstatic.com/static/gh/img/wise/arrow.png">');
            return c.append(h).append(g).append(w), a.append(c).append(b), a.css({
                position: "relative",
                bottom: ".1rem",
                display: "inline-block",
                margin: "0 auto",
                opacity: 0
            }), c.css({
                position: "relative",
                padding: "0 .41rem 0 .31rem",
                "font-size": ".14rem",
                background: "rgba(0, 0, 0, 0.8)",
                color: "#fff",
                "line-height": ".14rem",
                "border-radius": ".04rem",
                "white-space": "nowrap"
            }), h.css({
                width: ".16rem",
                height: ".16rem",
                position: "absolute",
                top: "0.07rem",
                left: ".1rem"
            }), g.css({
                position: "relative",
                height: ".3rem",
                "line-height": ".3rem"
            }), w.css({
                position: "absolute",
                height: ".3rem",
                "line-height": ".3rem",
                display: "inline-block",
                top: 0,
                right: ".06rem"
            }), b.css({
                position: "relative",
                display: "inline-block",
                width: ".1rem",
                height: ".06rem"
            }), a
        },
        renderHelp: function() {
            var a = $('<div class="gh-animated gh-safari-help">'),
                c = $("<div>"),
                g = $('<div><span style="color:#000">第一步：</span>点击底部功能栏按钮</div>'),
                w = $('<div><img style="display:block;width:100%" src="//gh.bdstatic.com/static/gh/img/wise/safari_help_1.png"></div>'),
                b = $('<div><span style="color:#000">第二步：</span>选择“添加到主屏幕”按钮，确认添加后，一个图标将添加到您的手机桌面，以便快速访问结果。</div>'),
                v = $('<div><img style="display:block;width:100%" src="//gh.bdstatic.com/static/gh/img/wise/safari_help_2.png"></div>'),
                k = $("<div>取消</div>");
            return c.append(g).append(w).append(b).append(v).append(k), a.css({
                width: "100%",
                height: "100%",
                display: "none",
                opacity: 0
            }), c.css({
                position: "absolute",
                bottom: "0",
                "font-size": ".16rem",
                "line-height": ".26rem",
                padding: "0 .17rem",
                color: "#555",
                background: "#f1f1f1",
                "text-align": "left"
            }), g.css({
                padding: ".15rem 0 .09rem"
            }), w.css({
                "padding-bottom": ".2rem",
                "border-bottom": ".01rem solid #dadada"
            }), b.css({
                padding: ".15rem 0 .09rem"
            }), v.css({
                "padding-bottom": ".2rem"
            }), k.css({
                "text-align": "center",
                height: ".49rem",
                "line-height": ".49rem",
                background: "#fff",
                "border-top": ".01rem solid #dadada",
                margin: "0 -.2rem",
                color: "#000"
            }), k.on("click", function() {
                _(), window.B ? B.log.send({
                    ct: 69,
                    cst: 5,
                    clk_extra: {
                        type: "wiseindexcancel_click"
                    }
                }) : h({
                    fm: "click",
                    r_type: "wiseindexcancel_click"
                })
            }), a.append(c), a
        }
    }
});