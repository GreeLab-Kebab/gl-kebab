"use strict";
window.wafer && window.wafer.ready(function() {
    var r = window.encodeURIComponent(document.location.href);
    window.wafer.on("fetch:success", function(e) {
        var t = e.elem;
        if (t.classList && t.classList.contains("stream-batch-fetch")) {
            var a = "https://sb.scorecardresearch.com/p2?c1=2&c2=7241469&c14=-1&ns_c=UTF-8",
                i = window.rapidPageConfig && window.rapidPageConfig.rapidConfig && window.rapidPageConfig.rapidConfig.spaceid;
            if (a && i) {
                a = a + "&c5=" + i + "&c7=" + r + "&ns__t=" + Date.now().toString();
                var n = window.__cmp;
                n ? n("getVendorConsents", null, function(e, t) {
                    t && e && e.gdprApplies && e.vendorConsents && (a += "&cs_ucfr=" + (e.vendorConsents[77] ? 1 : 0)), window.wafer.utils.fireBeacon(a, {
                        useNavigator: !1,
                        useTimestamp: !1
                    })
                }) : window.wafer.utils.fireBeacon(a, {
                    useNavigator: !1,
                    useTimestamp: !1
                })
            }
        }
    });
    var l = "show-drawer",
        u = null,
        t = null,
        f = null,
        m = "stream-uuid-list",
        s = "userintent-disliked-anim",
        o = "data-uuid",
        a = "youmaylike",
        w = [],
        g = [],
        d = document.querySelector(".stream-items"),
        c = window.innerWidth || document.documentElement.clientWidth,
        p = {};
    if (d) {
        d.addEventListener("animationend", function(e) {
            e && e.target && ("hideStreamItem" === e.animationName || "fadeOutAdConfirm" === e.animationName) && e.target.remove && e.target.remove()
        }), d.addEventListener("click", function(e) {
            var t = e.target;
            if (t.classList.contains("userintent-undo")) {
                var a = t.getAttribute("data-wf-toggle-target"),
                    i = d.querySelector(a);
                if (i) {
                    var n = i.getAttribute(o);
                    n && p[n] && clearTimeout(p[n])
                }
            }
        });
        var e = d.querySelectorAll(".js-sponsored-moments-dwell-time");
        if (e.length) {
            e.forEach(function(e) {
                e.classList && e.classList.contains("js-reserve-moments") && (window.DARLA ? function e(t) {
                    var a = Math.floor(16 * c / 9),
                        i = t.querySelector("#defaultRESERVEMOMENTS"),
                        n = i && i.getAttribute("data-html");
                    if (n)
                        if (window.DARLA.inProgress()) setTimeout(function() {
                            e(t)
                        }, 500);
                        else {
                            var r = {
                                dest: "defaultRESERVEMOMENTS",
                                flex: {
                                    h: {
                                        min: a
                                    },
                                    w: {
                                        min: c
                                    }
                                },
                                h: a,
                                id: "RESERVEMOMENTS",
                                supports: {
                                    "exp-ovr": 1,
                                    "exp-push": 1,
                                    "resize-to": 1
                                },
                                w: c
                            };
                            window.DARLA.addPos(r);
                            var s = new window.DARLA.Response("RESERVEMOMENTS", {});
                            n = unescape(n), s.add("RESERVEMOMENTS", n), window.DARLA.render(s)
                        }
                }(e) : e.style.display = "none")
            });
            var i = e[0].querySelector(".js-panorama-scroll-view");
            i && 0 === i.scrollLeft && (i.scrollLeft = (i.scrollWidth - c) / 2)
        }
    }
    window.addEventListener("viewerOpened", function(e) {
        var t = e && e.detail && e.detail.uuid;
        if (t) {
            var a = document.querySelector('li[data-uuid="' + t + '"]'),
                i = a && a.getAttribute("data-parent-uuid");
            if (u = i && document.querySelector('li[data-uuid="' + i + '"]') || a, f = u && u.getElementsByClassName("stream-related-drawer")[0]) {
                if (u.classList.contains(l)) return;
                var n = function() {
                        for (var e = Array.prototype.slice.call(document.getElementsByClassName(m)), t = 0; t < e.length; t++) {
                            var a = e[t],
                                i = a.text;
                            a.classList.remove(m);
                            try {
                                var n = JSON.parse(i);
                                n && (Array.isArray(n.uuidList) && w.length + n.uuidList.length <= 250 && (w = w.concat(n.uuidList)), Array.isArray(n.adidList) && g.length + n.adidList.length <= 50 && (g = g.concat(n.adidList)))
                            } catch (e) {}
                        }
                        return {
                            dedupeADIDs: g,
                            dedupeUUIDs: w
                        }
                    }(),
                    r = {
                        config: {
                            dedupeADIDs: n.dedupeADIDs.join(","),
                            relatedUuid: t
                        },
                        ctrl: "StreamRelated",
                        m_id: "tdv2-wafer-stream",
                        m_mode: "json"
                    },
                    s = {
                        dedupeUUIDs: n.dedupeUUIDs.join(","),
                        uuid: t
                    },
                    o = f.getAttribute("data-cfg");
                if (o) try {
                    var d = JSON.parse(o);
                    r.config = Object.assign(r.config, d)
                } catch (e) {}
                r.config.tachyonParams = r.config.tachyonParams || {}, r.config.tachyonParams.query = r.config.tachyonParams.query || {}, r.config.tachyonParams.query.where = Object.assign(s, r.config.tachyonParams.query.where);
                var c = f.getElementsByClassName("fetch-body")[0];
                c && (c.text = JSON.stringify(r), f.classList.remove("wafer-fetch-error", "wafer-fetch-complete"), f.classList.add("wafer-fetch"), window.wafer.base.sync(f.parentNode))
            }
        }
    }), window.addEventListener("viewerClosed", function() {
        if (u && !u.classList.contains(l)) {
            var e = f && !!f.getElementsByClassName("stream-realted-list")[0];
            e && u.classList.add(l), e && t && window.rapidInstance && window.rapidInstance.beaconClick("strm", a, 0, Object.assign(t, {
                _p: 0,
                cnt_tpc: t.categoryLabel,
                g: u.getAttribute(o),
                grpt: "storyCluster",
                itc: 1,
                pkgt: a
            })), t = "", u = f = null
        }
    });
    window.wafer.on("toggle:change", function(e) {
        if (e && e.meta && e.elem) {
            var t = e.elem.getAttribute("data-wf-toggle-target");
            if ("userintent-hidestrmitem" === e.meta.className && "add" === e.meta.action) {
                if (t && d) {
                    var a = d.querySelector(t),
                        i = a && a.getAttribute(o);
                    i && (p[i] = setTimeout(function(e) {
                        return function() {
                            e.classList.contains(s) || e.classList.add(s)
                        }
                    }(a), 8e3))
                }
            } else if ("show-drawer" === e.meta.className) {
                var n = d.querySelector(t),
                    r = n && n.getElementsByClassName("drawer-fetch-target")[0];
                setTimeout(function() {
                    r && (r.innerHTML = "")
                }, 300)
            }
        }
    })
});