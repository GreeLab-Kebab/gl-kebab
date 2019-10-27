(function() {
    var k = "90069_90001";
    var e = "1116166085";
    var g = document.getElementsByTagName("script");
    for (var c = 0; c < g.length; c++) {
        if (g[c].src.indexOf("wblinks.js") >= 0) {
            var d = j(g[c].src).query;
            d = h(d);
            k = d.wm || "90069_90001";
            e = d.ak || "1116166085"
        }
    }

    function j(o) {
        var n = /^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        var s = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
        var q = n.exec(o);
        var r = {};
        for (var p = 0, m = s.length; p < m; p += 1) {
            r[s[p]] = q[p] || ""
        }
        return r
    }

    function h(q) {
        var t = q.split("&");
        var s = {};
        for (var o = 0, m = t.length; o < m; o++) {
            if (t[o]) {
                var r = t[o].split("=");
                var n = r[0];
                var p = r[1];
                if (r.length < 2) {
                    p = n;
                    n = "$nullName"
                }
                if (!s[n]) {
                    s[n] = p
                } else {
                    s[n].push(p)
                }
            }
        }
        return s
    }
    var f = 600;

    function l(n, i) {
        if (!n) {
            return
        }
        var o = Date.now();
        var p = document.createElement("iframe");
        p.src = n;
        p.style.display = "none";
        document.body.appendChild(p);
        if (i) {
            var m = setTimeout(function() {
                var q = Date.now();
                if (!o || q - o < f + 200) {
                    window.location = i
                }
            }, f);
            window.onblur = function() {
                clearTimeout(m)
            }
        }
    }
    var b = "luicode=10000360&lfid=OP_" + e + "&wm=" + k;
    var a = {
        "userinfo": function(n) {
            var m = "sinaweibo://userinfo?" + b + "&uid=" + n;
            var i = "http://m.weibo.cn/u/" + n + "?" + b;
            l(m, i)
        },
        "myprofile": function() {
            var m = "sinaweibo://myprofile?" + b;
            var i = "http://m.weibo.cn/index/router?cookie=3&" + b;
            l(m, i)
        },
        "detail": function(m, o) {
            var n = "sinaweibo://detail?" + b + "&mblogid=" + m;
            var i = "http://m.weibo.cn/" + o + "/" + m + "?" + b;
            l(n, i)
        },
        "article": function(n) {
            var m = "sinaweibo://article?" + b + "&object_id=1022:" + n;
            var i = "http://media.weibo.cn/article?id=" + n + "&" + b;
            l(m, i)
        },
        "home": function() {
            var m = "sinaweibo://gotohome?" + b;
            var i = "http://m.weibo.cn/index/router?cookie=0_all&" + b;
            l(m, i)
        },
        "search": function(m) {
            var n = "sinaweibo://searchall?" + b + "&q=" + m;
            var i = "http://m.weibo.cn/main/pages/index?containerid=100103type%3D1%26q%3D" + m + "&type=all&" + b;
            l(n, i)
        },
        "sendweibo": function(n) {
            var m = "sinaweibo://sendweibo?" + b + "&content=" + n;
            var i = "http://m.weibo.cn/mblog?content=" + n + "&" + b;
            l(m, i)
        },
        "comment": function(m) {
            var n = "sinaweibo://comment?" + b + "&srcid=" + m;
            var i = "http://m.weibo.cn/comment?id=" + m + "&" + b;
            l(n, i)
        }
    };
    window.WBLink = a
})();