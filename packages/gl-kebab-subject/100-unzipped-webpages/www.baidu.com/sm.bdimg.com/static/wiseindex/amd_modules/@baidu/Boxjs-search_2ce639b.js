define("@baidu/Boxjs-search/dist/components/data/eventListener", ["require"], function() {
    function a(a, c) {
        return void 0 === a ? !1 : (c = $.extend({
            name: a,
            key: "default",
            callback: "function" == typeof c ? c : null,
            promise: !1
        }, "object" == typeof c ? c : {}), g[a] = g[a] || {}, g[a][c.key] = {
            callback: c.callback,
            promise: c.promise
        }, c)
    }

    function c(a) {
        return "object" == typeof a && a.name && a.key ? (delete g[a.name][a.key], !0) : !1
    }
    var g = {};
    return window.addEventListener("baiduboxapp_callback", function(e) {
        var a = e.callback,
            c = e.data;
        if ("string" == typeof c && 0 === c.indexOf("{") && window.JSON && JSON.parse) try {
            c = JSON.parse(c)
        } catch (e) {
            console.log(e)
        }
        for (var v in g[a]) {
            var h = g[a][v];
            try {
                h.callback.call(h, c, e)
            } catch (e) {
                console.log(e)
            }
        }
    }), {
        regist: a,
        unregist: c
    }
}), define("@baidu/Boxjs-search/dist/components/data/index", ["require", "@baidu/Boxjs-amd", "@baidu/Boxjs-search/dist/components/data/eventListener"], function(require) {
    function a(a, c) {
        var g = "",
            module = "";
        "toggle" === c ? (g = a.name, module = a.type) : (g = a.name.split("-")[1], module = a.name.split("-")[0]);
        var v = g.substring(0, 1).toUpperCase(),
            h = g.substring(1),
            R = c + v + h,
            b = [module, R].join("/");
        return b
    }
    var c = require("@baidu/Boxjs-amd").invoke,
        g = require("@baidu/Boxjs-search/dist/components/data/eventListener");
    return function(v) {
        var h = a(v, "set");
        return "browser-tcStatisticData" === v.name ? new Promise(function(a, R) {
            g.regist("onLogSuccess", function(c) {
                !c || c.status && "0" !== c.status ? R({
                    errCode: c.status || "1000",
                    errMsg: ""
                }) : a({})
            }), c(h, v.data)
        }) : c(h, v.data, v.abtest)
    }
}), define("@baidu/Boxjs-search/dist/components/media/index", ["require", "@baidu/Boxjs-amd"], function(require) {
    function a(a, g) {
        var v = [g, a.type].join("/");
        return c(v, a.data, a.abtest)
    }
    var c = require("@baidu/Boxjs-amd").invoke;
    return {
        audio: function(c) {
            return a(c, "audio")
        },
        voice: function(c) {
            return a(c, "voice")
        },
        live: function(c) {
            return a(c, "live")
        }
    }
}), define("@baidu/Boxjs-search/dist/core/filter", ["require", "@baidu/Boxjs-amd"], function(require) {
    function a(a, c) {
        if (!a) return "";
        var g = "";
        return $.each(a, function(a, v) {
            "object" === $.type(v) && (v = JSON.stringify(v)), g += c ? "&" + a + "=" + v : "&" + encodeURIComponent(a) + "=" + encodeURIComponent(v)
        }), g.slice(1)
    }
    var c = require("@baidu/Boxjs-amd"),
        g = c.$,
        v = c.platform,
        h = v.versionCompare,
        R = v.boxVersion;
    return {
        "utils/openShareBox": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                hasCB: !1,
                versionRange: ["5.3.5"],
                filter: function() {
                    return {
                        module: "callShare",
                        action: "",
                        paramName: "options",
                        extData: {
                            minver: "5.3.5.0"
                        }
                    }
                }
            },
            android: {
                versionRange: ["5.3.5"],
                hasCB: !1,
                filter: function(module, a, c) {
                    var d = {
                        imageUrl: c.iconUrl,
                        title: c.title,
                        content: c.content,
                        linkUrl: c.linkUrl,
                        mediaType: c.mediaType,
                        channel: c.pannel,
                        shareSuccessCB: c.shareSuccessCB || "console.log",
                        shareErrorCB: c.shareErrorCB || "console.log"
                    };
                    return "audio" === c.type ? d.type = "2" : "image" === c.type ? (d.type = "3", d.linkUrl = c.linkUrl || c.imageUrl) : d.type = "video" === c.type ? "4" : "1", {
                        module: "Bdbox_android_utils",
                        action: "callShare",
                        data: d
                    }
                }
            }
        },
        "utils/getDeviceInfo": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                versionRange: ["7.3"],
                filter: function() {
                    return {
                        module: "utils",
                        action: "getDeviceInfo"
                    }
                },
                thunk: function(a) {
                    return {
                        status: "1" === a.errno ? 0 : parseInt(a.errno, 10),
                        data: a.data,
                        message: a.errmsg
                    }
                }
            },
            android: {
                versionRange: ["7.3"],
                filter: function() {
                    return {
                        module: "Bdbox_android_utils",
                        action: "getDeviceInfo"
                    }
                },
                thunk: function(a) {
                    return {
                        status: "1" === a.errno ? 0 : parseInt(a.errno, 10),
                        data: a.data,
                        message: a.errmsg
                    }
                }
            }
        },
        "voice/play": {
            android: {
                versionRange: ["8.0"],
                filter: function(module, a, c) {
                    return c.source_app = c.source_app || "6|8.6", {
                        module: "Bdbox_android_utils",
                        action: "startVoice",
                        data: c,
                        callbackKey: "func"
                    }
                },
                thunk: function(a) {
                    return a && 0 === a.status_code || a && 0 === a.status ? {
                        status: 0,
                        data: {
                            data: a.data
                        },
                        message: ""
                    } : {
                        message: "voice fail from jssdk message",
                        status: a.status_code || 1
                    }
                }
            }
        },
        "currentWindow/close": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                supportFrame: ["search"],
                versionRange: ["8.2"],
                filter: function() {
                    return {
                        module: "apppage",
                        action: "closeSimpleBrowseView",
                        extData: {
                            minver: "8.2.0.0"
                        }
                    }
                }
            },
            android: {
                hasCB: !1,
                versionRange: ["8.2"],
                filter: function() {
                    return {
                        module: "Bdbox_android_utils",
                        action: "closeWindow"
                    }
                }
            }
        },
        "toast/open": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                versionRange: ["6.0"],
                hasCB: !1,
                filter: function(module, a, c) {
                    return {
                        module: "utils",
                        action: "toast",
                        extData: {
                            minver: "6.0.0.0"
                        },
                        data: c.message,
                        paramName: "string"
                    }
                }
            },
            android: {
                versionRange: ["4.0"],
                hasCB: !1,
                filter: function(module, a, c) {
                    return {
                        module: "Bdbox_android_utils",
                        action: "toast",
                        data: c.message,
                        paramName: "string"
                    }
                }
            }
        },
        "utils/openImage": {
            androidlite: {
                versionRange: ["2.2.2"],
                filter: function(module, a, c) {
                    return c.type = "0", {
                        module: "Bdbox_android_utils",
                        action: "lightImage",
                        data: c
                    }
                }
            },
            androidinfo: {
                versionRange: ["1.0"],
                filter: function(module, a, c) {
                    return c.type = "0", {
                        module: "Bdbox_android_utils",
                        action: "lightImage",
                        data: c
                    }
                }
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                versionRange: ["6.2"],
                filter: function(module, a, c) {
                    return c.type = "0", c.index = c.index || 0, {
                        module: "utils",
                        action: "image",
                        data: c
                    }
                },
                thunk: function() {
                    return {
                        status: 0,
                        message: "",
                        data: ""
                    }
                }
            },
            android: {
                versionRange: ["6.1"],
                filter: function(module, a, c) {
                    return c.type = "0", h(R, "7.4") >= 0 ? {
                        module: "Bdbox_android_utils",
                        action: "lightImage",
                        data: c
                    } : {
                        module: "Bdbox_android_utils",
                        action: "image",
                        data: c
                    }
                },
                thunk: function() {
                    return {
                        status: 0,
                        message: ""
                    }
                }
            }
        },
        "account/openLoginDialog": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                versionRange: ["5.5"],
                filter: function() {
                    return {
                        module: "account",
                        action: "logindialog",
                        extData: {
                            minver: "5.5.0.0"
                        }
                    }
                },
                thunk: function(a) {
                    return {
                        status: a,
                        message: ""
                    }
                }
            },
            android: {
                versionRange: ["5.5"],
                filter: function() {
                    return {
                        module: "Bdbox_android_account",
                        action: "loginDialog"
                    }
                },
                thunk: function(a) {
                    return {
                        status: a,
                        message: ""
                    }
                }
            }
        },
        "search/openAR": {
            ios: {
                hasCB: !1,
                versionRange: ["3.8"],
                filter: function(module, a, c) {
                    return c.arValue.arKey = c.arValue.arKey.replace(" ", ""), {
                        module: "imagesearch",
                        action: "",
                        extData: {
                            minver: "3.8.0.0"
                        },
                        data: c
                    }
                }
            },
            android: {
                versionRange: ["3.8"],
                hasCB: !1,
                filter: function(module, a, c) {
                    c.arValue.arKey = c.arValue.arKey.replace(" ", "");
                    var g = ["intent:widgetid://com.baidu.searchbox/-1#Intent;", "action=com.baidu.searchbox.action.ar_invoke;", "category=android.intent.category.LAUNCHER;", "component=com.baidu.searchbox/.CodeScannerActivity;", "launchFlags=0x10000000;", "S.arValue=" + encodeURIComponent(JSON.stringify(c.arValue)), "S.jsup=" + JSON.stringify(c.logParams), ";end"];
                    return {
                        module: "Bdbox_android_send_intent",
                        action: "send",
                        data: g.join("")
                    }
                }
            }
        },
        "search/openCamera": {
            ios: {
                hasCB: !1,
                versionRange: ["3.8"],
                filter: function(module, c, g) {
                    return {
                        module: "imagesearch",
                        action: "imagesearch",
                        extData: {
                            minver: "3.8.0.0"
                        },
                        data: encodeURIComponent(JSON.stringify(g.params)),
                        args: encodeURIComponent(a(g.args, !0)),
                        paramName: "params"
                    }
                }
            },
            android: {
                versionRange: ["3.8"],
                hasCB: !1,
                filter: function(module, a, c) {
                    var g = ["intent:widgetid://com.baidu.searchbox/-1#Intent;", "action=com.baidu.searchbox.action.MAIN;", "category=android.intent.category.LAUNCHER;", "component=com.baidu.searchbox/.CodeScannerActivity;", "launchFlags=0x10000000;", "S.from=7;", "S.source_app=" + c.args.source_app + ";", "S.referer=" + c.args.referer + ";", "S.imageSearch_type=" + c.args.imageSearch_type + ";", "S.cameraPosition=" + c.args.cameraPosition + ";", "S.jsup=" + c.args.jsup, ";end"];
                    return {
                        module: "Bdbox_android_send_intent",
                        action: "send",
                        data: g.join("")
                    }
                }
            }
        },
        "video/play": {
            androidlite: {
                versionRange: ["2.3"]
            },
            androidinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                hasCB: !1,
                versionRange: ["7.3"],
                filter: function() {
                    return {
                        module: "video",
                        action: "invokePlayer",
                        extData: {
                            minver: "7.3.0.0"
                        }
                    }
                }
            },
            android: {
                versionRange: ["7.3"],
                supportFrame: ["video"],
                hasCB: !1,
                filter: function() {
                    return {
                        module: "Bdbox_android_capi_video",
                        action: "invokePlayer"
                    }
                }
            }
        },
        "search/getSpeedLogData": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                versionRange: ["4.7"],
                filter: function() {
                    return {
                        module: "getSpeedLogData",
                        action: "",
                        extData: {
                            minver: "4.7.0.0"
                        }
                    }
                },
                thunk: function(a) {
                    return {
                        status: 0 === a.error ? 0 : 1,
                        message: "",
                        data: a.result
                    }
                }
            },
            android: {
                versionRange: ["4.8"],
                hasCB: !1,
                filter: function() {
                    return {
                        module: "bd_searchbox_interface",
                        action: "getSpeedLogData",
                        async: !1
                    }
                },
                thunk: function(a) {
                    return {
                        status: 0 === a.error ? 0 : 1,
                        message: "",
                        data: a.result
                    }
                }
            }
        },
        "browser/setTcStatisticData": {
            android: {
                versionRange: ["8.6"],
                filter: function(module, a, c) {
                    return {
                        module: "Bdbox_android_tc",
                        action: "setTcStatisticData",
                        data: c.url,
                        tchasOwncallback: !0
                    }
                }
            }
        },
        "searchFrame/setConfig": {
            ios: {
                hasCB: !1,
                versionRange: ["7.5"],
                filter: function() {
                    return {
                        module: "searchFrame",
                        action: "config",
                        extData: {
                            minver: "7.5.0.0"
                        }
                    }
                }
            },
            android: {
                hasCB: !1,
                versionRange: ["7.5"],
                filter: function() {
                    return {
                        module: "Bdbox_android_searchFrame",
                        action: "config"
                    }
                }
            }
        },
        "interface/setQuery": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                hasCB: !1,
                versionRange: ["5.5"],
                filter: function(module, a, c) {
                    return {
                        module: "setQuery",
                        action: "",
                        extData: {
                            minver: "5.5.0.0"
                        },
                        data: c
                    }
                }
            },
            android: {
                hasCB: !1,
                versionRange: ["4.0"],
                supportFrame: ["search"],
                filter: function(module, a, c) {
                    var d = [JSON.stringify(c)];
                    return {
                        module: "Bdbox_android_common",
                        action: "setQuery",
                        data: d
                    }
                }
            }
        },
        "searchFrame/getAsyncPageState": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                hasCB: !1,
                versionRange: ["7.5"],
                filter: function(module, a, c) {
                    return c.url && (c.url = encodeURIComponent(c.url)), {
                        module: "searchFrame",
                        action: "asyncPageState",
                        extData: {
                            minver: "7.5.0.0"
                        },
                        data: c
                    }
                }
            },
            android: {
                hasCB: !1,
                versionRange: ["7.5"],
                filter: function(module, a, c) {
                    return c.url && (c.url = encodeURIComponent(c.url)), {
                        module: "Bdbox_android_searchFrame",
                        action: "asyncPageState",
                        data: c
                    }
                }
            }
        },
        "baiduwallet/open": {
            ios: {
                noParams: !0,
                hasCB: !1,
                versionRange: ["8.0"],
                filter: function() {
                    var a = {
                            type: "3",
                            link_addr: "104"
                        },
                        c = {
                            url: "baiduwallet?param=" + encodeURIComponent(JSON.stringify(a)),
                            plugin_id: "box.plugin.walletsdk"
                        };
                    return {
                        module: "invokePlug",
                        action: "open",
                        data: c,
                        extData: {
                            minver: "8.0.0.0"
                        }
                    }
                }
            },
            android: {
                hasCB: !1,
                versionRange: ["5.3"],
                filter: function() {
                    var a = {
                        intent: "intent:#Intent;action=com.baidu.searchbox.wallet.action.WALLET_VIEW;l.service_id=64;end",
                        min_v: "16788229",
                        mode: "0"
                    };
                    return {
                        module: "Bdbox_android_utils",
                        action: "command",
                        data: JSON.stringify(a)
                    }
                }
            }
        },
        "easybrowse/open": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                noParams: !0,
                hasCB: !1,
                versionRange: ["5.3"],
                filter: function(module, a, c) {
                    var v = {
                            openurl: encodeURIComponent(c.url),
                            minver: "5.3.0.0",
                            isla: 0,
                            opentype: 1,
                            append: 0,
                            rbtnstyle: 2
                        },
                        h = {};
                    if ("h5" === c.type && delete c.type, $.each(c, function(a, c) {
                            "url" !== c && "style" !== c && (c = h[c] || c, v[c] = a)
                        }), g.isObject(c.style)) {
                        if (h.color = "barcolor", c.style.toolbaricons && c.style.toolbaricons.tids) var R = JSON.stringify({
                            toolids: c.style.toolbaricons.tids
                        });
                        c.toolbar = R, delete c.style, delete c.url, $.each(c.style, function(a, c) {
                            c = h[c] || c, v[c] = a
                        })
                    }
                    return v.appid && (v.isla = 1), {
                        module: "easybrowse",
                        action: "",
                        data: v,
                        noParams: !0,
                        extData: {
                            minver: "5.3.0.0"
                        }
                    }
                }
            },
            android: {
                hasCB: !1,
                versionRange: ["5.3"],
                filter: function(module, a, c) {
                    var g = ["S.bdsb_light_start_url=" + encodeURIComponent(c.url)];
                    "comments" === c.type ? g.push("component=com.baidu.searchbox/.home.feed.FeedCommentActivity") : "video" === c.type ? g.push("component=com.baidu.searchbox/.home.feed.ShortVideoDetailActivity") : "tags" === c.type ? g.push("component=com.baidu.searchbox/.xsearch.UserSubscribeCenterActivity") : "h5" === c.type ? g.push("component=com.baidu.searchbox/.lightbrowser.LightBrowserActivity") : "lockscreen" === c.type && g.push("component=com.baidu.searchbox/.lockscreen.LockScreenContentDetail");
                    var v = c.min_v;
                    delete c.min_v;
                    var h = encodeURIComponent(JSON.stringify({
                        toolids: c.style.toolbaricons.tids
                    }));
                    g.push("S.toolbaricons=" + h), c.menumode && g.push("S.menumode=" + c.menumode), c.context && g.push("S.context=" + c.context), c.slog && g.push("S.slog=" + c.slog), g = g.join(";");
                    var R = {
                        intent: "intent:#Intent;" + g + ";end",
                        min_v: v && "" !== v ? v : "16783629",
                        mode: "0"
                    };
                    return {
                        module: "Bdbox_android_utils",
                        action: "command",
                        data: JSON.stringify(R)
                    }
                }
            }
        },
        "utils/ubcReport": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                hasCB: !1,
                versionRange: ["7.3"],
                filter: function() {
                    return {
                        module: "utils",
                        action: "ubcReport",
                        extData: {
                            minver: "7.3.0.0"
                        }
                    }
                }
            },
            android: {
                hasCB: !1,
                versionRange: ["7.3"],
                filter: function() {
                    return {
                        module: "Bdbox_android_utils",
                        action: "ubcEvent",
                        extData: {
                            min_v: "16789504"
                        }
                    }
                }
            }
        },
        "utils/location": {
            androidlite: {
                versionRange: ["2.2.2"]
            },
            androidinfo: {
                versionRange: ["1.0"]
            },
            iosinfo: {
                versionRange: ["1.1"]
            },
            ios: {
                versionRange: ["6.0"],
                filter: function() {
                    return {
                        module: "utils",
                        action: "getCurrentLocation",
                        extData: {
                            minver: "6.0.0.0"
                        }
                    }
                },
                thunk: function(a) {
                    if ("401" === a.status) return {
                        status: a.status,
                        message: a.message
                    };
                    var c = a.coords;
                    return {
                        status: a.result,
                        data: c || ""
                    }
                }
            },
            android: {
                versionRange: ["6.3"],
                filter: function() {
                    return {
                        module: "Bdbox_android_utils",
                        action: "location"
                    }
                },
                thunk: function(a) {
                    return {
                        status: 0 === a.st ? 0 : a.st,
                        data: a,
                        message: 0 === a.st ? "" : "调用失败"
                    }
                }
            }
        }
    }
}), define("@baidu/Boxjs-search/dist/core/versionMap", ["require", "@baidu/Boxjs-amd"], function(require) {
    function a(a) {
        var c = a.split("?"),
            g = c[1] ? c[1] : c[0],
            v = g.split("&"),
            h = {};
        return v.forEach(function(a) {
            if (a = a.split("="), a[0].length > 0) {
                var c = "";
                try {
                    c = decodeURIComponent(a[1]) || ""
                } catch (e) {
                    c = a[1]
                }
                h[a[0]] = c
            }
        }), h
    }
    var c = require("@baidu/Boxjs-amd"),
        g = c.$,
        v = c.extend;
    return {
        "utils/getWifiVideoAutoplay": {
            v: 24,
            versionRange: ["10.6"]
        },
        "utils/getDeviceInfo": {
            v: 19,
            versionRange: ["10.3"],
            filter: function() {
                return {
                    module: "utils",
                    action: "getNetworkType",
                    data: {}
                }
            }
        },
        "browser/open": {
            v: 1,
            hasCB: !0,
            versionRange: ["8.2"],
            iosinfoVersionRange: ["1.1"],
            androidliteVersionRange: ["2.2.2"],
            androidinfoVersionRange: ["1.0"],
            filter: function(a) {
                for (var c in a) a[c] = encodeURIComponent(g.isObject(a[c]) ? JSON.stringify(a[c]) : a[c]);
                return {
                    data: a
                }
            }
        },
        "voice/play": {
            v: 6,
            versionRange: ["8.5"],
            notSupport: ["android"],
            filter: function(a) {
                a.source_app = a.source_app || "6|8.6";
                var c = [];
                for (var i in a) c.push(i + "=" + a[i]);
                c = c.join("&");
                var g = {
                    plugin_id: "box.plugin.voicesearch",
                    url: "args=" + encodeURIComponent(c)
                };
                return {
                    module: "vendor/speech",
                    action: "open",
                    data: {
                        params: encodeURIComponent(JSON.stringify(g))
                    },
                    callbackKey: "func"
                }
            }
        },
        "currentWindow/close": {
            v: 11,
            hasCB: !0,
            versionRange: ["9.1"],
            iosinfoVersionRange: ["1.1"],
            filter: function() {
                return {
                    module: "browser",
                    action: "closeWindow"
                }
            }
        },
        "toast/open": {
            v: 11,
            hasCB: !0,
            versionRange: ["9.1"],
            iosinfoVersionRange: ["1.1"],
            filter: function(a) {
                if (a.style) {
                    var c = a.style;
                    for (var g in c) "style" !== g && (a[g] = c[g]);
                    c.style && (a.style = c.style)
                }
                return {
                    action: "showToast",
                    module: "utils",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "account/openLoginDialog": {
            v: 26,
            versionRange: ["10.9"],
            filter: function(a) {
                return a.third_login && (a.showThirdLogin = a.third_login, delete a.third_login), a.login_type && (a.loginType = a.login_type, delete a.login_type), a.func && (a.loginCallback = a.func, delete a.func), a.tpl && (a.loginSource = a.tpl, delete a.tpl), {
                    module: "account",
                    action: "login",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "shortcut/openCreate": {
            v: 30,
            versionRange: ["10.9"],
            filter: function() {
                return {
                    module: "shortcut",
                    action: "createShortcut"
                }
            }
        },
        "app/open": {
            v: 7,
            versionRange: ["8.6"],
            iosinfoVersionRange: ["3.7.5"],
            androidliteVersionRange: ["3.6"],
            filter: function() {
                return {
                    module: "vendor/ad",
                    action: "deeplink"
                }
            }
        },
        "utils/getAppInfo": {
            v: 16,
            versionRange: ["10.0"],
            iosinfoVersionRange: ["3.5"],
            androidliteVersionRange: ["3.6"],
            filter: function() {
                return {
                    module: "utils",
                    action: "queryScheme"
                }
            }
        },
        "searchFrame/setChangeTab": {
            v: 12,
            hasCB: !0,
            versionRange: ["9.1"],
            iosinfoVersionRange: ["1.1"],
            filter: function(a) {
                for (var i in a) a[i] = encodeURIComponent(a[i]);
                return {
                    module: "searchframe",
                    action: "changetab",
                    data: a
                }
            }
        },
        "swan/open": {
            v: 22,
            versionRange: ["10.5"],
            schemeNoV: !0,
            filter: function(c) {
                if ("{}" === JSON.stringify(c)) return {
                    module: "swan",
                    action: "open",
                    data: {}
                };
                var g = "",
                    h = c.url.match(/^http(s)?:\/\/(.*?)\//);
                g = h ? c.url.match("smartapps.cn/webmapp/") ? c.url.split("smartapps.cn/webmapp/")[1] : c.url.split(h[0])[1] : "/" === c.url.substring(0, 1) ? c.url.substring(1) : c.url;
                var R = g.split("?")[0],
                    b = {};
                b = g.indexOf("?") > -1 ? a(c.url) : c.params || {};
                var y = {
                        from: c.from || b.from || "",
                        ext: c.ext || b.ext || {}
                    },
                    C = {
                        _baiduboxapp: encodeURIComponent(JSON.stringify(y))
                    },
                    B = c.appId || c.appKey;
                if (B && (B = B.indexOf("--0") > -1 ? B.substring(0, B.length - 2) : B, B = B.replace(/\w-/g, function(a) {
                        return a.substring(0, 1).toUpperCase()
                    })), R && R.length > 0) {
                    for (var S in b) b[S] = encodeURIComponent(b[S]);
                    v(C, b)
                }
                return {
                    module: "swan/" + B,
                    action: R,
                    data: C
                }
            }
        },
        "swangame/open": {
            v: 22,
            versionRange: ["10.13.5"],
            schemeNoV: !0,
            filter: function(c) {
                if ("{}" === JSON.stringify(c)) return {
                    module: "swangame",
                    action: "open",
                    data: {}
                };
                var g = "",
                    h = c.url.match(/^http(s)?:\/\/(.*?)\//);
                g = h ? c.url.match("smartapps.cn/webmapp/") ? c.url.split("smartapps.cn/webmapp/")[1] : c.url.split(h[0])[1] : "/" === c.url.substring(0, 1) ? c.url.substring(1) : c.url;
                var R = g.split("?")[0],
                    b = {};
                b = g.indexOf("?") > -1 ? a(c.url) : c.params || {};
                var y = {
                        from: b.from || c.from || "",
                        ext: b.ext || c.ext || {}
                    },
                    C = {
                        _baiduboxapp: encodeURIComponent(JSON.stringify(y))
                    },
                    B = c.appId || c.appKey;
                if (B && (B = B.indexOf("--0") > -1 ? B.substring(0, B.length - 2) : B, B = B.replace(/\w-/g, function(a) {
                        return a.substring(0, 1).toUpperCase()
                    })), R && R.length > 0) {
                    for (var S in b) b[S] = encodeURIComponent(b[S]);
                    v(C, b)
                }
                return {
                    module: "swangame/" + B,
                    action: R,
                    data: C
                }
            }
        },
        "browser/setTcStatisticData": {
            v: 7,
            versionRange: ["8.6"],
            iosinfoVersionRange: ["1.1"],
            liteVersionRange: ["2.3"],
            androidinfoVersionRange: ["1.1"],
            notSupport: ["android"],
            filter: function(a) {
                return {
                    data: {
                        url: encodeURIComponent(a.url)
                    },
                    tchasOwncallback: !0
                }
            }
        },
        "audio/play": {
            v: 20,
            versionRange: ["10.3.6"],
            filter: function() {
                return {
                    module: "audio",
                    action: "invokeGlobalAudioPlayer"
                }
            }
        },
        "toast/close": {
            v: 11,
            hasCB: !1,
            versionRange: ["9.1"],
            iosinfoVersionRange: ["1.1"],
            filter: function() {
                return {
                    action: "dismissToast",
                    module: "utils"
                }
            }
        },
        "download/getStatus": {
            v: 14,
            hasCB: !0,
            versionRange: ["9.3"],
            notSupport: ["ios"],
            filter: function(a) {
                return a.type = "batchgetdownloadstatus", {
                    action: "app",
                    module: "download",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "apk/start": {
            v: 14,
            hasCB: !0,
            versionRange: ["9.3"],
            notSupport: ["ios"],
            filter: function(a) {
                return a.type = "startdownload", {
                    action: "app",
                    module: "download",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "apk/cancel": {
            v: 14,
            hasCB: !0,
            versionRange: ["9.3"],
            notSupport: ["ios"],
            filter: function(a) {
                return a.type = "canceldownload", {
                    action: "app",
                    module: "download",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "install/apk": {
            v: 14,
            hasCB: !0,
            versionRange: ["9.3"],
            notSupport: ["ios"],
            filter: function(a) {
                return a.type = "installapk", {
                    action: "app",
                    module: "download",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "apk/open": {
            v: 14,
            hasCB: !0,
            versionRange: ["9.3"],
            notSupport: ["ios"],
            filter: function(a) {
                return a.type = "openapk", {
                    action: "app",
                    module: "download",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "datachannel/register": {
            v: 5,
            versionRange: ["8.4"],
            hasCB: !1,
            filter: function(a) {
                a.action = "tts" === a.name ? "com.baidu.channel.tts.statuschange" : "com.baidu.channel." + a.name, delete a.name;
                for (var c in a) g.isObject(a[c]) && (a[c] = JSON.stringify(a[c]));
                return {
                    data: a
                }
            }
        },
        "datachannel/unregister": {
            v: 5,
            versionRange: ["8.4"],
            hasCB: !1,
            filter: function(a) {
                a.action = "com.baidu.channel." + a.name, delete a.name;
                for (var c in a) g.isObject(a[c]) && (a[c] = JSON.stringify(a[c]));
                return {
                    data: a
                }
            }
        },
        "browser/getParams": {
            v: 34,
            iosVersionRange: ["10.13.7"],
            androidVersionRange: ["11.0"]
        },
        "browser/setWiseFeedbackStatus": {
            v: 34,
            versionRange: ["10.13"],
            filter: function() {
                return {
                    module: "browser",
                    action: "wiseFeedbackStatus"
                }
            }
        },
        "swan/setPreloadSwanCore": {
            v: 34,
            versionRange: ["10.13"],
            filter: function() {
                return {
                    module: "swan",
                    action: "preloadSwanCore"
                }
            }
        },
        "browser/setNotifiyAsyncLoadFinish": {
            v: 35,
            versionRange: ["10.13"],
            notSupport: ["android"],
            filter: function(a) {
                return {
                    module: "browser",
                    action: "notifiyAsyncLoadFinish",
                    data: a
                }
            }
        },
        "browser/getCheckBackgroundWindow": {
            v: 37,
            hasCB: !0,
            versionRange: ["11.2"],
            notSupport: ["android"],
            filter: function() {
                return {
                    module: "browser",
                    action: "checkBackgroundWindow"
                }
            }
        },
        "invokeVideoLandingPage/open": {
            v: 43,
            hasCB: !0,
            versionRange: ["11.5"],
            filter: function() {
                return {
                    module: "browserVideo",
                    action: "invokeVideoLandingPage"
                }
            }
        },
        "invokePoiLandingPage/open": {
            v: 44,
            hasCB: !0,
            versionRange: ["11.6"],
            filter: function(a) {
                return {
                    module: "browser",
                    action: "invokePoiLandingPage",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "speech/getFinishVoiceStreamingTransport": {
            v: 41,
            versionRange: ["11.3"],
            notSupport: ["ios"],
            filter: function(a) {
                return {
                    module: "speech",
                    action: "finishVoiceStreamingTransport",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "swan/downloadPackages": {
            v: 42,
            versionRange: ["11.3.5"],
            filter: function(a) {
                return {
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "searchframe/setConfig": {
            v: 43,
            iosVersionRange: ["11.6"],
            androidVersionRange: ["11.5"],
            filter: function(a) {
                return {
                    module: "searchframe",
                    action: "config",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "imageBrowser/setAppend": {
            v: 44,
            versionRange: ["11.6"],
            filter: function(a) {
                return {
                    module: "imageBrowser",
                    action: "append",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "imageBrowser/setPosition": {
            v: 44,
            versionRange: ["11.6"],
            filter: function(a) {
                return {
                    module: "imageBrowser",
                    action: "position",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "searchframe/setUpdateImagePosition": {
            v: 44,
            versionRange: ["11.6"],
            filter: function(a) {
                return {
                    module: "searchframe",
                    action: "updateImagePosition",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "searchframe/openImageLandingPage": {
            v: 44,
            versionRange: ["11.6"],
            filter: function(a) {
                return {
                    module: "searchframe",
                    action: "invokeImageLandingPage",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "live/openTieba": {
            v: 33,
            versionRange: ["10.12.0"],
            filter: function(a) {
                return {
                    module: "live",
                    action: "enterTiebaRoom",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        },
        "video/prefetch": {
            v: 45,
            versionRange: ["11.7"],
            filter: function(a) {
                return {
                    module: "search",
                    action: "videoPrefetch",
                    data: {
                        params: encodeURIComponent(JSON.stringify(a))
                    }
                }
            }
        }
    }
}), define("@baidu/Boxjs-search/index", ["require", "@baidu/Boxjs-amd", "@baidu/Boxjs-search/dist/core/filter", "@baidu/Boxjs-search/dist/core/versionMap", "@baidu/Boxjs-search/dist/components/data/index", "@baidu/Boxjs-search/dist/components/media/index"], function(require) {
    var a = require("@baidu/Boxjs-amd"),
        c = a.filter,
        g = a.versionMap,
        v = a.extend,
        h = require("@baidu/Boxjs-search/dist/core/filter"),
        R = require("@baidu/Boxjs-search/dist/core/versionMap");
    return a.data.set = require("@baidu/Boxjs-search/dist/components/data/index"), v(a.media, require("@baidu/Boxjs-search/dist/components/media/index")), v(c, h), v(g, R), window.searchboxBoxjsId = "search", a
}), define("@baidu/Boxjs-search", ["@baidu/Boxjs-search/index"], function(mod) {
    return mod
});