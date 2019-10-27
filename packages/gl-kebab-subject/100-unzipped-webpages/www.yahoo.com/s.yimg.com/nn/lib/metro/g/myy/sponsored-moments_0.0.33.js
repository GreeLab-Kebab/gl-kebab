(function() {
    var f = window;
    var s = document;
    var c = "js-sponsored-moments-dwell-time";
    var o = "js-sponsored-moments-dwell-time-mon";
    var h = "#applet_p_50000314";
    var k = f.wafer && f.wafer.utils || null;
    var n = 50;
    var i = f.innerHeight || s.documentElement.clientHeight;
    var e = f.innerWidth || s.documentElement.clientWidth;
    var b = i;
    var g = null;
    var m = 51;

    function l() {
        this.monInstances = [];
        this.scrollPosition = 0;
        this.caasContent = s.getElementById("caas-content");
        var t = s.querySelector(h);
        if (t) {
            this.findDwelltimeNodes(t);
            if (typeof MutationObserver !== "undefined") {
                var u = new MutationObserver(d.bind(this));
                u.observe(t, {
                    childList: true,
                    subtree: true
                });
            }
            this.handleScroll();
        }
    }

    function d(t) {
        var u = this;
        setTimeout(function() {
            t.forEach(function(v) {
                if (v.type === "childList" && v.addedNodes && v.addedNodes.length > 0) {
                    typeof u.findDwelltimeNodes === "function" && u.findDwelltimeNodes(v.target);
                }
            });
        }, 25);
    }

    function r(t) {
        if (t >= 75) {
            return 3;
        } else {
            if (t >= 50) {
                return 2;
            } else {
                if (t >= 25) {
                    return 1;
                } else {
                    if (t > 0) {
                        return 0;
                    }
                }
            }
        }
        return 0;
    }

    function q(t) {
        var w = t.getBoundingClientRect();
        if (w.top > m && w.top < i || w.bottom > m && w.bottom < i) {
            var u = Math.max(w.top, m);
            var v = Math.min(w.bottom, i);
            return {
                min: r(Math.round(u * 100 / w.height)),
                max: r(Math.round(v * 100 / w.height))
            };
        }
        return null;
    }

    function p() {
        if (g) {
            return g;
        }
        g = f.YAHOO && f.YAHOO.i13n && f.YAHOO.i13n.rapidInstance;
        return g;
    }

    function a(w) {
        if (!w) {
            return null;
        }
        var u = {};
        var v = w.split(";");
        v.forEach(function t(x) {
            var y = x.split(":");
            if (y.length >= 2) {
                u[y[0]] = y[1];
            }
        });
        return u;
    }

    function j(t) {
        if (t.preventDefault) {
            t.preventDefault();
        }
        t.returnValue = false;
    }
    l.prototype = {
        findDwelltimeNodes: function(x) {
            if (!x) {
                return;
            }
            var v = this;
            var t = x;
            var u = t.querySelectorAll("." + c);
            if (u.length) {
                u.forEach(function w(y) {
                    v.createMonitorInstance(y);
                    if (y.classList && y.classList.contains("js-playable-moments")) {
                        if (window.DARLA) {
                            v.renderPlayableMomentsIframe(y);
                        } else {
                            y.style.display = "none";
                        }
                    }
                    if (y.classList && y.classList.contains("js-reserve-moments")) {
                        if (window.DARLA) {
                            v.renderReserveMomentsIframe(y);
                        } else {
                            y.style.display = "none";
                        }
                    }
                });
            }
        },
        createMonitorInstance: function(u) {
            if (u) {
                var w = a(u.getAttribute("data-dw-time"));
                this.monInstances.push({
                    beaconData: w,
                    node: u,
                    inview: false,
                    quadrantDwellTime: [0, 0, 0, 0],
                    quadrantInViewStart: [0, 0, 0, 0]
                });
                if (u.hasAttribute("data-playable-fullscreen-dw-time")) {
                    var v = a(u.getAttribute("data-playable-fullscreen-dw-time"));
                    var t = this.monInstances.length - 1;
                    this.monInstances[t].fullScreenBeaconData = v;
                    this.monInstances[t].fullScreenInViewStart = 0;
                    this.monInstances[t].fullScreenDwellTime = [0];
                }
                this.startScrollHandler();
                u.classList && u.classList.replace(c, o);
            }
        },
        startScrollHandler: function() {
            if (!k) {
                k = f.wafer && f.wafer.utils || null;
            }
            if (k && !this.scrollHandler) {
                this.debouncedScroll = k.throttle(this.handleScroll, n, this);
                this.debouncedResize = k.throttle(this.handleResize, n, this);
                f.addEventListener("scroll", this.debouncedScroll);
                f.addEventListener("resize", this.debouncedResize);
                this.scrollHandler = true;
            }
        },
        stopScrollHandler: function() {
            if (!this.scrollHandler) {
                return;
            }
            if (this.debouncedScroll) {
                f.removeEventListener("scroll", this.debouncedScroll);
                this.debouncedScroll = null;
            }
            if (this.debouncedResize) {
                f.removeEventListener("resize", this.debouncedResize);
                this.debouncedResize = null;
            }
            this.scrollHandler = false;
        },
        fireDwelltimeBeacon: function(t, v) {
            var x = p();
            if (x && t.beaconData && t.beaconData.ev) {
                var y = {};
                for (var u in t.beaconData) {
                    if (t.beaconData.hasOwnProperty(u) && u !== "ev") {
                        y[u] = t.beaconData[u];
                    }
                }
                for (var w = 0; w < t.quadrantInViewStart.length; w++) {
                    if (t.quadrantInViewStart[w] > 0) {
                        t.quadrantDwellTime[w] += v - t.quadrantInViewStart[w];
                        y["pl" + (w + 1)] = "" + (t.quadrantDwellTime[w] / 1000);
                    }
                }
                x.beaconEvent(t.beaconData.ev, y);
            }
        },
        firePlayableFullScreenDwelltimeBeacon: function(t) {
            var v = p();
            if (v && t.fullScreenBeaconData && t.fullScreenBeaconData.ev) {
                var w = {};
                for (var u in t.fullScreenBeaconData) {
                    if (t.fullScreenBeaconData.hasOwnProperty(u) && u !== "ev") {
                        w[u] = t.fullScreenBeaconData[u];
                    }
                }
                if (t.hasOwnProperty("fullScreenDwellTime") && t.fullScreenDwellTime.length > 0) {
                    var x = Math.max.apply(null, t.fullScreenDwellTime);
                    w.pl1 = "" + (x / 1000);
                }
                v.beaconEvent(t.fullScreenBeaconData.ev, w);
            }
        },
        handleScroll: function() {
            var t = this;
            var u = +(new Date());
            this.monInstances.forEach(function(v) {
                var w = q(v.node);
                if (v.inview && !w) {
                    t.fireDwelltimeBeacon(v, u);
                    v.inview = false;
                    v.quadrantDwellTime = [0, 0, 0, 0];
                    v.quadrantInViewStart = [0, 0, 0, 0];
                    if (v.node.classList.contains("js-playable-moments") && v.hasOwnProperty("fullScreenBeaconData")) {
                        t.firePlayableFullScreenDwelltimeBeacon(v);
                    }
                } else {
                    if (w) {
                        if (!v.inview) {
                            v.inview = true;
                        }
                        for (var x = 0; x <= v.quadrantInViewStart.length; x++) {
                            if (x >= w.min && x <= w.max) {
                                if (!v.quadrantInViewStart[x]) {
                                    v.quadrantInViewStart[x] = u;
                                }
                            } else {
                                if (v.quadrantInViewStart[x]) {
                                    v.quadrantDwellTime[x] += u - v.quadrantInViewStart[x];
                                }
                            }
                        }
                    }
                }
            });
        },
        handleResize: function() {
            i = f.innerHeight || s.documentElement.clientHeight;
            e = f.innerWidth || s.documentElement.clientWidth;
            b = Math.min(b, i);
            this.handleScroll();
        },
        renderReserveMomentsIframe: function(y) {
            var v = this;
            var w = Math.floor(e * 16 / 9);
            if (!window.DARLA.inProgress()) {
                var z = {
                    dest: "defaultRESERVEMOMENTS",
                    flex: {
                        h: {
                            min: w
                        },
                        w: {
                            min: e
                        }
                    },
                    h: w,
                    id: "RESERVEMOMENTS",
                    w: e,
                    supports: {
                        "exp-ovr": 1,
                        "exp-push": 1,
                        "resize-to": 1
                    }
                };
                window.DARLA.addPos(z);
                var t = new window.DARLA.Response("RESERVEMOMENTS", {});
                var u = y.querySelector("#defaultRESERVEMOMENTS");
                var x = u.getAttribute("data-html");
                if (x) {
                    x = unescape(x);
                }
                t.add("RESERVEMOMENTS", x);
                window.DARLA.render(t);
            } else {
                setTimeout(function() {
                    v.renderReserveMomentsIframe(y);
                }, 500);
            }
        },
        renderPlayableMomentsIframe: function(u, B) {
            var C = this.monInstances[this.monInstances.length - 1];
            if (u.hasAttribute("data-playable-src") && C) {
                var z = null;
                if (u.hasAttribute("data-ylk")) {
                    z = u.getAttribute("data-ylk");
                }
                var v = u.getAttribute("data-playable-src");
                var x = "defaultPLAYMOMENTS";
                var y = "PLAYMOMENTS";
                if (B === true) {
                    x = "defaultPLAYMOMENTSModal";
                    y = "PLAYMOMENTSMODAL";
                }
                this.renderIframeInDarla(v, x, y);
                var t = u.querySelector(".js-tap-to-play");
                var A = u.querySelector(".js-back-to-home");
                var w = this.monInstances;
                if (t && A) {
                    t.addEventListener("click", this.startPlayableMomentsFullScreenDwellTime.bind(this, C, z, B));
                    A.addEventListener("click", this.endPlayableMomentsFullScreenDwellTime.bind(this, C));
                }
            }
        },
        renderIframeInDarla: function(z, w, v) {
            var u = this;
            if (!window.DARLA.inProgress()) {
                var y = {
                    dest: w,
                    flex: {
                        w: {
                            min: e
                        }
                    },
                    h: b,
                    id: v,
                    w: e,
                    supports: {
                        "exp-ovr": 1,
                        "exp-push": 1,
                        "resize-to": 1
                    }
                };
                window.DARLA.addPos(y);
                var t = new window.DARLA.Response(v, {});
                var x = '<iframe src="' + z + '" width="' + e + '" height="' + b + '" scrollable="no" frameborder="no"></iframe>';
                t.add(v, x);
                window.DARLA.render(t);
            } else {
                setTimeout(function() {
                    u.renderIframeInDarla(z, w, v);
                }, 500);
            }
        },
        startPlayableMomentsFullScreenDwellTime: function(t, u, v) {
            window.addEventListener("touchmove", j, {
                passive: false
            });
            if (typeof window.pageYOffset !== "undefined" && window.scrollTo) {
                this.scrollPosition = window.pageYOffset;
                if (v && t && t.node) {
                    var w = t.node.getBoundingClientRect().bottom;
                    window.scrollTo(0, w);
                }
                s.documentElement.style.overflow = "hidden";
                s.body.style.overflow = "hidden";
            }
            if (t && t.hasOwnProperty("fullScreenInViewStart")) {
                t.fullScreenInViewStart = +(new Date());
            }
            if (u && f.rapidInstance && f.rapidInstance.beaconClick) {
                var z = a(u);
                var y = z.slk || "";
                var x = z.cpos || "";
                window.rapidInstance.beaconClick("strm", y, x, z);
            }
            if (v && s.body && s.body.classList) {
                s.body.classList.add("sponsored-moments-in-view");
            }
            if (this.caasContent && this.caasContent.parentElement) {
                this.caasContent.parentElement.style.zIndex = 3;
            }
        },
        endPlayableMomentsFullScreenDwellTime: function(t) {
            window.removeEventListener("touchmove", j);
            if (typeof window.pageYOffset !== "undefined" && window.scrollTo) {
                s.body.style.removeProperty("overflow");
                s.documentElement.style.removeProperty("overflow");
                window.scrollTo(0, this.scrollPosition);
            }
            if (t && t.hasOwnProperty("fullScreenDwellTime")) {
                var u = +(new Date());
                var v = u - t.fullScreenInViewStart;
                t.fullScreenDwellTime.push(v);
            }
            if (this.caasContent && this.caasContent.parentElement) {
                this.caasContent.parentElement.style.removeProperty("z-index");
            }
        }
    };
    setTimeout(function() {
        window.sponsoredMomentsMonitor = new l();
    }, 200);
})(); /* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */