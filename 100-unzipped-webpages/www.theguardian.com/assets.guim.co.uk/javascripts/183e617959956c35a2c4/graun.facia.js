(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        267: function(t, e, n) {
            var a = n(55),
                i = n(25);
            t.exports = function(t, e, n) {
                var o = !0,
                    r = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return i(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), a(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: r
                })
            }
        },
        424: function(t, e, n) {
            var a = n(425),
                i = n(99);
            t.exports = function(t, e) {
                return t && a(t, e, i)
            }
        },
        425: function(t, e, n) {
            var a = n(426)();
            t.exports = a
        },
        426: function(t, e) {
            t.exports = function(t) {
                return function(e, n, a) {
                    for (var i = -1, o = Object(e), r = a(e), s = r.length; s--;) {
                        var c = r[t ? s : ++i];
                        if (!1 === n(o[c], c, o)) break
                    }
                    return e
                }
            }
        },
        499: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return f
            });
            var a = n(11),
                i = n.n(a),
                o = n(55),
                r = n.n(o),
                s = n(3),
                c = n(6),
                l = [],
                u = {
                    top: 0,
                    bottom: 0
                },
                d = function t() {
                    u.top = window.pageYOffset, u.bottom = u.top + i.a.viewport().height, 0 === (l = l.filter(function(t) {
                        return !t.conditionFn() || (t.loadFn(), !1)
                    })).length && c.a.off("window:throttledScroll", t)
                },
                h = r()(d, 2e3),
                f = function(t, e, n) {
                    s.a.read(function() {
                        var a = i()(t);
                        ! function(t, e) {
                            var n = {
                                conditionFn: t,
                                loadFn: e
                            };
                            l.push(n), 1 === l.length && c.a.on("window:throttledScroll", d), h()
                        }(function() {
                            var t = a.offset(),
                                n = t.top - e,
                                i = t.top + t.height + e;
                            return u.top > n && u.bottom < i
                        }, n)
                    })
                }
        },
        516: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            });
            var a = n(12),
                i = n.n(a),
                o = n(328),
                r = function(t) {
                    Object(o.a)("flashing-elements") ? t && t() : i.a.write(function() {
                        document.body && document.body.classList.add("disable-flashing-elements"), t && t()
                    })
                }
        },
        562: function(t, e) {
            t.exports = '<div class="stocks__stock-value <%=deltaClass%>">\n    <div class="stocks__divider"></div>\n    <div class="stocks__name"><%=name%><%=closedInline%></div>\n    <div class="stocks__value">\n        <div class="stocks__price"><%=price%></div>\n        <%=marketDownIcon%>\n        <%=marketUpIcon%>\n        <%=marketSameIcon%>\n        <div class="stocks__change"><%=change%></div>\n    </div>\n    <%=closed%>\n</div>\n'
        },
        563: function(t, e) {
            t.exports = '<div class="stocks__stocks-container">\n    <%=stocks%>\n</div>\n'
        },
        564: function(t, e, n) {
            var a = n(160),
                i = n(565),
                o = Object.prototype.hasOwnProperty,
                r = i(function(t, e, n) {
                    o.call(t, n) ? t[n].push(e) : a(t, n, [e])
                });
            t.exports = r
        },
        565: function(t, e, n) {
            var a = n(566),
                i = n(567),
                o = n(250),
                r = n(42);
            t.exports = function(t, e) {
                return function(n, s) {
                    var c = r(n) ? a : i,
                        l = e ? e() : {};
                    return c(n, t, o(s, 2), l)
                }
            }
        },
        566: function(t, e) {
            t.exports = function(t, e, n, a) {
                for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                    var r = t[i];
                    e(a, r, n(r), t)
                }
                return a
            }
        },
        567: function(t, e, n) {
            var a = n(568);
            t.exports = function(t, e, n, i) {
                return a(t, function(t, a, o) {
                    e(i, t, n(t), o)
                }), i
            }
        },
        568: function(t, e, n) {
            var a = n(424),
                i = n(569)(a);
            t.exports = i
        },
        569: function(t, e, n) {
            var a = n(101);
            t.exports = function(t, e) {
                return function(n, i) {
                    if (null == n) return n;
                    if (!a(n)) return t(n, i);
                    for (var o = n.length, r = e ? o : -1, s = Object(n);
                        (e ? r-- : ++r < o) && !1 !== i(s[r], r, s););
                    return n
                }
            }
        },
        570: function(t, e) {
            t.exports = function(t) {
                return void 0 === t
            }
        },
        571: function(t, e) {
            t.exports = '<a href="<%=href%>" class="fc-item__liveblog-block" data-link-name="block | <%=index%>" aria-hidden="<%=ariaHidden%>">\n    <div class="fc-item__liveblog-block__text">\n        <div class="fc-item__liveblog-block__time"><%=relativeTime%></div>\n        <%=text%>\n    </div>\n</a>\n'
        },
        572: function(t, e, n) {
            var a = n(188),
                i = n(432),
                o = n(268),
                r = n(249),
                s = a(function(t, e) {
                    var n = r(e, o(s));
                    return i(t, 32, void 0, e, n)
                });
            s.placeholder = {}, t.exports = s
        },
        573: function(t, e) {
            t.exports = '<section class="flagship-audio__contributions-banner fc-container">\n    <div class="fc-container__inner">\n        <div class="fc-container__header"> </div>\n        <div class="fc-container--rolled-up-hide fc-container__body flagship-audio__contributions-banner-holder">\n            <div class="flagship-audio__contributions-banner-text">\n                <h2>Support The Guardian</h2>\n                <p>Help us deliver the independent\n                    <br> journalism the world needs</p>\n                <a class="contributions__contribute contributions__option-button"\n                   data-link-name="audio-series-contributions"\n                   href="<%= supportContributeURL %>?acquisitionData=%7B%22componentType%22%3A%22ACQUISITIONS_OTHER%22%2C%22source%22%3A%22GUARDIAN_WEB%22%2C%22campaignCode%22%3A%22today_in_focus%22%2C%22componentId%22%3A%22audio_series_page%22%7D&INTCMP=today_in_focus">\n                    Support The Guardian\n                </a>\n            </div>\n            <div class="flagship-audio__contributions-banner-image">\n                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="107"><path d="M0 83.118h12.148v23.824H0zm16.901-36h12.148v59.824H16.901zm16.902-21.177h12.148v81H33.803zm16.901 21.177h12.148v59.824H50.704zM67.606 18h12.148v88.941H67.606zm16.901 41.824h12.148v47.118H84.507zm16.901-12.706h12.148v59.824h-12.148zm16.902-8.471h12.148v68.294H118.31zM135.211 0h12.148v106.941h-12.148zm16.902 49.765h12.148v57.176h-12.148zm16.901-28.059h12.148v85.235h-12.148zm16.901 8.47h12.148v76.765h-12.148zM202.817 0h12.148v106.941h-12.148zm16.901 47.118h12.148v59.824h-12.148zm16.902-21.177h12.148v81H236.62zm16.901-17.47h12.148v98.471h-12.148zm16.902 41.294h12.148v57.176h-12.148zm16.901 33.882h12.148v23.294h-12.148z" fill="#FF6A56"/></svg>\n            </div>\n        </div>\n    </div>\n</section>\n'
        },
        679: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n(8),
                i = n(0),
                o = n(7),
                r = n(6),
                s = n(159),
                c = n(516),
                l = n(15),
                u = n(14),
                d = n(59),
                h = n.n(d),
                f = n(327),
                p = n(562),
                v = n.n(p),
                m = n(563),
                g = n.n(m),
                b = function() {
                    var t = Object(a.a)(".js-container--first .js-container__header"); - 1 !== ["uk/business", "us/business", "au/business"].indexOf(i.a.get("page.pageId")) && t && Object(l.a)("/business-data/stocks.json", {
                        mode: "cors"
                    }).catch(function(t) {
                        Object(u.a)(t, {
                            feature: "stocks"
                        })
                    }).then(function(e) {
                        e && e.stocks && e.stocks.length > 0 && t.append(function(t) {
                            var e = t.stocks.map(function(t) {
                                return h()(v.a)({
                                    name: t.name,
                                    deltaClass: "stocks__stock-value--".concat(t.trend),
                                    price: t.price,
                                    change: (e = t.change, e > 0 ? "+".concat(e) : "".concat(e)),
                                    closed: t.closed ? '<div class="stocks__closed">closed</div>' : "",
                                    closedInline: t.closed ? '<div class="stocks__closed--inline">closed</div>' : "",
                                    marketDownIcon: Object(f.a)("marketDownIcon", ["stocks__icon", "stocks__icon--down"]),
                                    marketUpIcon: Object(f.a)("marketUpIcon", ["stocks__icon", "stocks__icon--up"]),
                                    marketSameIcon: Object(f.a)("marketSameIcon", ["stocks__icon", "stocks__icon--same"])
                                });
                                var e
                            }).join("");
                            return h()(g.a)({
                                stocks: e
                            })
                        }(e))
                    })
                },
                y = n(16),
                j = n.n(y),
                _ = n(21),
                w = n.n(_),
                k = n(78),
                O = n.n(k),
                x = n(75),
                C = n.n(x),
                $ = n(79),
                S = n.n($),
                E = n(45),
                A = n.n(E),
                L = n(1),
                T = n.n(L),
                I = n(22),
                D = n.n(I),
                M = n(489),
                N = n(76),
                F = function(t) {
                    Object(a.a)(".js-tabs-content", t).addClass("tabs__content--no-border"), Object(a.a)(".js-tabs", t).addClass("u-h")
                },
                z = function(t) {
                    function e() {
                        var t;
                        return j()(this, e), t = O()(this, C()(e).call(this)), T()(A()(A()(t)), "isNetworkFront", void 0), T()(A()(A()(t)), "isVideoFront", void 0), T()(A()(A()(t)), "isInternational", void 0), T()(A()(A()(t)), "parent", void 0), Object(M.a)("most-popular"), t.endpoint = "/most-read-geo.json", t.isNetworkFront = "Network Front" === i.a.get("page.contentType"), t.isVideoFront = "video" === i.a.get("page.pageId"), t.isInternational = "international" === i.a.get("page.pageId"), t.manipulationType = "html", t
                    }
                    return S()(e, t), w()(e, [{
                        key: "prerender",
                        value: function() {
                            this.elem = D()(".headline-list", this.elem)[0]
                        }
                    }, {
                        key: "go",
                        value: function() {
                            var t = this.isNetworkFront ? ".js-tab-1" : ".js-tab-2";
                            if (this.parent = D()(".js-popular-trails")[0], this.parent)
                                if (this.isInternational && this.isNetworkFront || this.isVideoFront) F(this.parent);
                                else {
                                    var e = this.parent.querySelector(t);
                                    e && this.fetch(e, "html")
                                }
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            this.isNetworkFront && F(this.parent), Object(M.b)("most-popular"), r.a.emit("modules:geomostpopular:ready")
                        }
                    }]), e
                }(N.a),
                U = function(t) {
                    function e() {
                        var t;
                        return j()(this, e), t = O()(this, C()(e).call(this)), T()(A()(A()(t)), "parent", void 0), Object(M.a)("most-popular"), t.endpoint = "/most-read-geo.json", t.manipulationType = "html", t
                    }
                    return S()(e, t), w()(e, [{
                        key: "prerender",
                        value: function() {
                            var t = "international" === i.a.get("page.pageId");
                            if (this.parent) {
                                var e = this.parent.cloneNode(!0),
                                    n = D()(".most-popular", this.elem)[0],
                                    a = D()(".js-tab-2 .most-popular", e)[0];
                                !t && n && a && a.parentNode && a.parentNode.replaceChild(n, a);
                                var o = D()(".most-popular__second-tier", this.elem)[0],
                                    r = D()(".most-popular__second-tier", e)[0];
                                o && r && r.parentNode && r.parentNode.replaceChild(o, r);
                                var s = D()("#popular-trails", e)[0];
                                s && (this.elem = s)
                            }
                        }
                    }, {
                        key: "go",
                        value: function() {
                            this.parent = D()(".js-popular-trails")[0], this.parent && this.fetch(this.parent, this.manipulationType)
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            "Network Front" === i.a.get("page.contentType") && (Object(a.a)(".js-tabs-content", this.parent).addClass("tabs__content--no-border"), Object(a.a)(".js-tabs", this.parent).addClass("u-h")), Object(M.b)("most-popular"), r.a.emit("modules:geomostpopular:ready")
                        }
                    }]), e
                }(N.a),
                q = n(11),
                H = n.n(q),
                P = n(12),
                R = n.n(P),
                W = n(80),
                V = "container-states",
                Q = {
                    hidden: "Show",
                    displayed: "Hide"
                },
                B = function(t) {
                    var e = t.text,
                        n = t.dataLink;
                    return '\n    <button class="fc-container__toggle" data-link-name="'.concat(n, '">\n        <span class="fc-container__toggle__text">').concat(e, "</span>\n    </button>\n")
                },
                G = function() {
                    function t(e) {
                        j()(this, t), T()(this, "$container", void 0), T()(this, "state", void 0), T()(this, "$button", void 0), this.$container = H()(e), this.$button = H()(H.a.create(B({
                            text: "Hide",
                            dataLink: "Show"
                        }))), this.state = "displayed"
                    }
                    return w()(t, [{
                        key: "buttonText",
                        value: function() {
                            return Object(a.a)(".fc-container__toggle__text", this.$button)
                        }
                    }, {
                        key: "updatePref",
                        value: function(t) {
                            var e = W.a.get(V),
                                n = t;
                            "displayed" === this.state ? delete e[n] : (e || (e = {}), e[n] = "closed"), W.a.set(V, e)
                        }
                    }, {
                        key: "setState",
                        value: function(t) {
                            var e = this;
                            this.state = t, R.a.write(function() {
                                e.$container["displayed" === e.state ? "removeClass" : "addClass"]("fc-container--rolled-up"), e.$button.attr("data-link-name", Q["displayed" === e.state ? "hidden" : "displayed"]), e.buttonText().text(Q[e.state])
                            })
                        }
                    }, {
                        key: "readPrefs",
                        value: function(t) {
                            var e = W.a.get(V);
                            e && e[t] && this.setState("hidden")
                        }
                    }, {
                        key: "addToggle",
                        value: function() {
                            var t = this,
                                e = this.$container.attr("data-id"),
                                n = Object(a.a)(".js-container__header", this.$container[0]);
                            R.a.write(function() {
                                n.append(t.$button), t.$container.removeClass("js-container--toggle").removeClass("fc-container--will-have-toggle").addClass("fc-container--has-toggle"), t.readPrefs(e)
                            }), r.a.on("module:clickstream:click", function(n) {
                                n.target === t.$button[0] && (t.setState("displayed" === t.state ? "hidden" : "displayed"), t.updatePref(e))
                            })
                        }
                    }]), t
                }(),
                J = n(564),
                X = n.n(J),
                K = n(40),
                Y = "js-button-text",
                Z = Object.freeze({
                    displayed: "displayed",
                    loading: "loading",
                    hidden: "hidden"
                }),
                tt = function(t) {
                    var e = W.a.get("section-states", {
                        type: "session"
                    });
                    return e && e[t] ? Z.displayed : Z.hidden
                },
                et = function(t, e) {
                    var n = W.a.get("section-states", {
                        type: "session"
                    }) || {};
                    e !== Z.displayed ? delete n[t] : n[t] = "more", W.a.set("section-states", n, {
                        type: "session"
                    })
                },
                nt = function(t, e) {
                    var n = function(t) {
                            return X()(D()(".js-fc-item", t), function(t) {
                                return H()(t).attr("data-id")
                            })
                        }(t),
                        i = H.a.create(e);
                    return Object(a.a)(".js-fc-item", i).each(function(t) {
                        var e = H()(t),
                            a = e.attr("class");
                        (e.attr("data-id") in n || Object(K.g)() && a && a.includes("paid-content")) && e.remove()
                    }), i
                },
                at = function() {
                    function t(e, n) {
                        j()(this, t), T()(this, "id", void 0), T()(this, "state", void 0), T()(this, "isLoaded", void 0), T()(this, "$el", void 0), T()(this, "$container", void 0), T()(this, "$iconEl", void 0), T()(this, "$placeholder", void 0), T()(this, "$textEl", void 0), T()(this, "$errorMessage", void 0), T()(this, "messages", void 0), this.id = n.attr("data-id"), this.state = tt(this.id), this.$el = e, this.$container = n, this.isLoaded = !1, this.$iconEl = Object(a.a)(".i", this.$el), this.$placeholder = Object(a.a)(".js-show-more-placeholder", this.$container), this.$textEl = Object(a.a)(".".concat(Y), this.$el), this.state === Z.displayed && this.loadShowMoreForContainer(), this.messages = new Map([
                            [Z.hidden, Object(a.a)(".js-button-text", this.$el).text()],
                            [Z.displayed, "Less"],
                            [Z.loading, "Loading&hellip;"]
                        ])
                    }
                    return w()(t, [{
                        key: "setState",
                        value: function(t) {
                            this.$textEl.html(this.messages.get(t)), this.$el.attr("data-link-name", t === Z.displayed ? "less" : "more").toggleClass("button--primary", t !== Z.displayed).toggleClass("button--tertiary", t === Z.displayed).toggleClass("collection__show-more--loading", t === Z.loading), this.$container.toggleClass("fc-show-more--hidden", t !== Z.displayed).toggleClass("fc-show-more--visible", t === Z.displayed), this.state = t
                        }
                    }, {
                        key: "loadShowMoreForContainer",
                        value: function() {
                            var t, e, n, a = this;
                            R.a.write(function() {
                                a.setState(Z.loading)
                            }), (t = i.a.get("page.pageId"), e = this.id, n = "/".concat(t, "/show-more/").concat(e, ".json"), function(t, e) {
                                return Promise.race([e, new Promise(function(e, n) {
                                    setTimeout(function() {
                                        return n(new Error("Timeout"))
                                    }, t)
                                })])
                            }(5e3, Object(l.a)(n, {
                                mode: "cors"
                            }))).then(function(t) {
                                var e, n = t.html.trim();
                                n && (e = nt(a.$container, n)), R.a.write(function() {
                                    e && a.$placeholder.replaceWith(e), a.setState(Z.displayed), et(a.id, a.state), r.a.emit("modules:show-more:loaded")
                                }), a.isLoaded = !0
                            }).catch(function(t) {
                                R.a.write(function() {
                                    a.setState(Z.hidden)
                                }), a.showErrorMessage(), Object(u.a)(t, {
                                    feature: "container-show-more"
                                }, !1)
                            })
                        }
                    }, {
                        key: "hideErrorMessage",
                        value: function() {
                            var t = this;
                            R.a.write(function() {
                                null != t.$errorMessage && t.$errorMessage.addClass("show-more__error-message--invisible")
                            })
                        }
                    }, {
                        key: "showErrorMessage",
                        value: function() {
                            var t = this;
                            this.$errorMessage && this.$errorMessage.remove(), this.$errorMessage = H()(H.a.create('<div class="show-more__error-message">Sorry, failed to load more stories. Please try again.</div>')), R.a.write(function() {
                                null != t.$errorMessage && (t.$errorMessage.insertAfter(t.$el), setTimeout(function() {
                                    t.hideErrorMessage()
                                }, 5e3))
                            })
                        }
                    }]), t
                }(),
                it = function(t) {
                    R.a.write(function() {
                        t.$container.addClass("fc-show-more--hidden").removeClass("js-container--fc-show-more").toggleClass("fc-show-more--hidden", t.state === Z.hidden), t.setState(t.state)
                    })
                },
                ot = function() {
                    R.a.read(function() {
                        var t = D()(".js-container--fc-show-more").map(H.a).map(function(t) {
                            var e = Object(a.a)(".js-show-more-button", t);
                            return e ? new at(e, t) : null
                        }).filter(function(t) {
                            return null != t
                        });
                        t.forEach(it), r.a.on("module:clickstream:click", function(e) {
                            var n, a = t.find(function(t) {
                                return t.$el[0] === e.target
                            });
                            a && a.state !== Z.loading && (a.isLoaded ? (n = a, R.a.write(function() {
                                n.setState(n.state === Z.hidden ? Z.displayed : Z.hidden), et(n.id, n.state)
                            })) : (a.$errorMessage && a.$errorMessage.hide(), a.loadShowMoreForContainer()))
                        })
                    })
                },
                rt = n(267),
                st = n.n(rt),
                ct = Object(o.g)().height,
                lt = function(t) {
                    t.classList.remove("fc-container--lazy-load")
                },
                ut = function() {
                    var t = D()(".js-container--lazy-load"),
                        e = st()(function() {
                            0 === t.length ? r.a.off("window:throttledScroll", e) : R.a.read(function() {
                                var e = t.reduce(function(t, e) {
                                    return t[function(t) {
                                        var e = t.nextElementSibling,
                                            n = e ? e.getBoundingClientRect().top : 0;
                                        return -ct < n && n < 2 * ct
                                    }(e) ? "in" : "out"].push(e), t
                                }, { in: [],
                                    out: []
                                });
                                t = e.out, R.a.write(function() {
                                    e.in.forEach(lt)
                                })
                            })
                        }, 500);
                    r.a.on("window:throttledScroll", e), e()
                },
                dt = n(492),
                ht = n(3),
                ft = n(4),
                pt = n(570),
                vt = n.n(pt),
                mt = n(55),
                gt = n.n(mt),
                bt = n(571),
                yt = n.n(bt),
                jt = 30,
                _t = 5,
                wt = Object(o.g)().height,
                kt = function(t, e) {
                    return ht.a.read(function() {
                        return t.getBoundingClientRect().top
                    }).then(function(n) {
                        return n > 0 && n < wt && (setTimeout(function() {
                            var e = H()(t);
                            ht.a.write(function() {
                                e.removeClass("fc-item__liveblog-blocks__inner--offset")
                            })
                        }, e ? 0 : 2e3), !0)
                    })
                },
                Ot = function(t, e, n, a) {
                    var i = vt()(a);
                    e.forEach(function(e) {
                        var o = !1,
                            s = ["fc-item__liveblog-blocks__inner", "u-faux-block-link__promote"],
                            c = n.slice(0, 2).map(function(e, n) {
                                return !o && (e.publishedDateTime > a || i) && (e.isNew = !0, o = !0, s.push("fc-item__liveblog-blocks__inner--offset")),
                                    function(t, e, n) {
                                        var a = function(t) {
                                            var e = (t || {}).publishedDateTime;
                                            return !!e && Object(dt.c)(new Date(e)) || ""
                                        }(e);
                                        return a = a.match(/yesterday/i) ? a.toLowerCase() : a ? "Latest update ".concat(a, " ago") : "Updated just now", h()(yt.a)({
                                            ariaHidden: !e.isNew,
                                            href: "/".concat(t, "#").concat(e.id),
                                            relativeTime: a,
                                            text: [e.title, e.body.slice(0, 500)].filter(function(t) {
                                                return null != t
                                            }).join(". "),
                                            index: n + 1
                                        })
                                    }(t, e, n)
                            }).slice(0, o ? 2 : 1),
                            l = H.a.create('<div class="'.concat(s.join(" "), '">').concat(c.join(""), "</div>")),
                            u = H()(e);
                        ht.a.write(function() {
                            u.empty().append(l)
                        }).then(function() {
                            var t;
                            o && (t = l[0], kt(t).then(function(e) {
                                var n;
                                e || (n = gt()(function() {
                                    kt(t, !0).then(function(t) {
                                        t && r.a.off("window:throttledScroll", n)
                                    })
                                }, 500), r.a.on("window:throttledScroll", n))
                            }))
                        })
                    })
                },
                xt = n(23),
                Ct = n.n(xt),
                $t = n(82),
                St = n(499),
                Et = n(33),
                At = ["document", "fragment", "json.html"],
                Lt = [],
                Tt = n.n(Et)()(function() {
                    Ct.a.on(window, "message", function(t) {
                        var e, n = Lt.find(function(e) {
                            return e.contentWindow === t.source
                        });
                        n && "set-height" === (e = JSON.parse(t.data)).type && H()(n).parent().css("height", e.value)
                    })
                }),
                It = function(t) {
                    ! function(t, e) {
                        var n, a = H()(t),
                            i = [{
                                width: 0,
                                name: "tiny"
                            }, {
                                width: 180,
                                name: "mini"
                            }, {
                                width: 220,
                                name: "small"
                            }, {
                                width: 300,
                                name: "medium"
                            }, {
                                width: 700,
                                name: "large"
                            }, {
                                width: 940,
                                name: "huge"
                            }];
                        R.a.read(function() {
                            n = t.offsetWidth
                        }), R.a.write(function() {
                            i.map(function(t, a, i) {
                                var o = n >= t.width && (!i[a + 1] || n < i[a + 1].width);
                                return t.action = o ? "addClass" : !!e && "removeClass", t
                            }).filter(function(t) {
                                return t.action
                            }).forEach(function(t) {
                                a[t.action]("facia-snap-point--" + t.name)
                            })
                        })
                    }(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]), Object(a.a)(t).hasClass("facia-snap--football") && function(t) {
                        if (t && "mobile" !== Object(o.d)()) {
                            var e = H()(t);
                            e.css("height", e.parent().css("height"))
                        }
                    }(t)
                },
                Dt = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.getAttribute("data-snap-uri");
                    n && Object($t.a)(n, {
                        mode: "cors"
                    }).then(function(t) {
                        return t.ok ? e ? t.json().then(function(t) {
                            return t.html
                        }) : t.text() : Promise.reject(new Error("Fetch error: ".concat(t.statusText)))
                    }).then(function(e) {
                        a.a.create(e).each(function(e) {
                            R.a.write(function() {
                                H()(t).html(e)
                            })
                        }), Object(dt.a)(t)
                    }).catch(function(t) {
                        Object(u.a)(t, {
                            feature: "snaps"
                        })
                    })
                },
                Mt = function(t) {
                    Object(St.a)(t, 1500, function() {
                        switch (R.a.write(function() {
                            H()(t).addClass("facia-snap-embed")
                        }), It(t), t.getAttribute("data-snap-type")) {
                            case "document":
                                ! function(t) {
                                    var e = H()(t).offset(),
                                        n = Math.ceil((e.width || 0) / 2),
                                        a = t.getAttribute("data-snap-uri") || "",
                                        i = Math.min(Math.max(e.height || 0, n), 400),
                                        o = H.a.create('<div style="width: 100%; height: '.concat(i, 'px; overflow: hidden; -webkit-overflow-scrolling:touch"></div>'))[0],
                                        r = H.a.create('<iframe src="'.concat(a, '" style="width: 100%; height: 100%; border: none;"></iframe>'))[0];
                                    H()(o).append(r), Lt.push(r), Tt(), R.a.write(function() {
                                        H()(t).empty().append(o)
                                    })
                                }(t);
                                break;
                            case "fragment":
                                Dt(t);
                                break;
                            case "json.html":
                                Dt(t, !0)
                        }
                        o.o || r.a.on("window:throttledResize", function() {
                            It(t, !0)
                        })
                    })
                },
                Nt = function(t) {
                    It(t), o.o || r.a.on("window:throttledResize", function() {
                        It(t, !0)
                    })
                },
                Ft = function() {
                    Array.from(document.querySelectorAll(".facia-snap-embed")).forEach(Nt), Array.from(document.querySelectorAll(".js-snappable.js-snap")).filter(function(t) {
                        var e = Object(a.a)(t).hasClass("facia-snap-embed"),
                            n = t.getAttribute("data-snap-type");
                        return !e && n && At.indexOf(n) > -1
                    }).filter(function(t) {
                        return t.getAttribute("data-snap-uri")
                    }).forEach(Mt)
                },
                zt = {
                    13: "enter",
                    38: "up",
                    40: "down",
                    27: "escape"
                },
                Ut = function() {
                    function t(e) {
                        j()(this, t), T()(this, "apiUrl", void 0), T()(this, "$list", void 0), T()(this, "$input", void 0), T()(this, "oldQuery", void 0), T()(this, "newQuery", void 0), T()(this, "inputTmp", void 0);
                        var n = e.container;
                        this.apiUrl = e.apiUrl, this.bindElements(n), this.bindEvents(), this.oldQuery = "", this.newQuery = "", this.inputTmp = ""
                    }
                    return w()(t, [{
                        key: "bindElements",
                        value: function(t) {
                            this.$list = Object(a.a)(".js-search-tool-list", t), this.$input = Object(a.a)(".js-search-tool-input", t)
                        }
                    }, {
                        key: "bindEvents",
                        value: function() {
                            Ct.a.on(document.body, "keyup", this.handleKeyEvents.bind(this)), Ct.a.on(document.body, "click", this.handleClick.bind(this)), r.a.on("autocomplete:toggle", this.toggleControls.bind(this))
                        }
                    }, {
                        key: "hasInputValueChanged",
                        value: function() {
                            return this.oldQuery.length !== this.newQuery.length
                        }
                    }, {
                        key: "handleClick",
                        value: function(e) {
                            var n = Object(a.a)(e.target).hasClass("js-search-tool-input"),
                                i = t.nearestLinkNode(e.target);
                            n ? (e.preventDefault(), r.a.emit("autocomplete:toggle", !0)) : i ? (e.preventDefault(), Object(a.a)(".active", this.$list).removeClass("active"), Object(a.a)(i).addClass("active"), this.pushData()) : r.a.emit("autocomplete:toggle", !1)
                        }
                    }, {
                        key: "toggleControls",
                        value: function(t) {
                            var e = Object(a.a)(".js-search-tool-input")[0],
                                n = Object(a.a)(".js-search-tool"),
                                i = Object(a.a)(".js-close-location");
                            t ? (this.inputTmp = e.value, n.addClass("is-editing"), e.setSelectionRange(0, e.value.length), i.removeClass("u-h")) : (n.removeClass("is-editing"), this.clear(), this.setInputValue(this.inputTmp), i.addClass("u-h"))
                        }
                    }, {
                        key: "pushData",
                        value: function() {
                            var t = Object(a.a)(".active", this.$list),
                                e = "set";
                            if (0 === t.length) {
                                if ("" !== this.$input.val()) return;
                                e = "remove"
                            }
                            var n = {
                                id: t.attr("data-weather-id"),
                                city: t.attr("data-weather-city"),
                                store: e
                            };
                            r.a.emit("autocomplete:fetch", n), this.setInputValue(), this.inputTmp = n.city, this.$input.blur(), setTimeout(this.destroy.bind(this), 50)
                        }
                    }, {
                        key: "getListOfResults",
                        value: function(t) {
                            if (this.newQuery = t.target.value, !t.target.value.match(/\S/)) return this.clear(), void(this.oldQuery = "");
                            this.hasInputValueChanged() && this.fetchData()
                        }
                    }, {
                        key: "fetchData",
                        value: function() {
                            var t = this;
                            return Object(l.a)("".concat(this.apiUrl).concat(this.newQuery), {
                                mode: "cors"
                            }).then(function(e) {
                                t.renderList(e, 5), t.oldQuery = t.newQuery
                            }).catch(function(t) {
                                Object(u.a)(t, {
                                    feature: "search-tool"
                                })
                            })
                        }
                    }, {
                        key: "handleKeyEvents",
                        value: function(t) {
                            var e = zt[t.which || t.keyCode];
                            Object(a.a)(t.target).hasClass("js-search-tool-input") && ("down" === e ? (t.preventDefault(), this.move(1)) : "up" === e ? (t.preventDefault(), this.move(-1)) : "enter" === e ? this.pushData() : "escape" === e ? this.toggleControls() : this.getListOfResults(t))
                        }
                    }, {
                        key: "move",
                        value: function(t) {
                            var e = Object(a.a)(".active", this.$list),
                                n = parseInt(e.attr("id"), 10);
                            Number.isNaN(n) && (n = -1), e.removeClass("active"), this.getNewId(n + t) < 0 ? this.setInputValue(this.oldQuery) : (Object(a.a)("#".concat(this.getNewId(n + t), "sti"), this.$list).addClass("active"), this.setInputValue())
                        }
                    }, {
                        key: "getNewId",
                        value: function(t) {
                            var e = Object(a.a)("li", this.$list).length,
                                n = t % e;
                            return n < -1 ? n = e - 1 : t === e && (n = -1), n
                        }
                    }, {
                        key: "setInputValue",
                        value: function(t) {
                            var e = t || Object(a.a)(".active", this.$list).attr("data-weather-city");
                            this.$input.val(e)
                        }
                    }, {
                        key: "renderList",
                        value: function(t, e) {
                            var n = document.createDocumentFragment();
                            t.slice(0, e).forEach(function(t, e) {
                                var a = document.createElement("li");
                                a.className = "search-tool__item", a.innerHTML = '<a role="button" href="#'.concat(t.id, '"') + ' id="'.concat(e, 'sti" class="js-search-tool-link search-tool__link').concat(0 === e ? ' active"' : '"', ' data-link-name="weather-search-tool" data-weather-id="').concat(t.id, '" data-weather-city="').concat(t.city, '">').concat(t.city, ' <span class="search-tool__meta">').concat(t.country, "</span></a>"), n.appendChild(a)
                            }), this.clear().append(n)
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return this.$list.html("")
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.clear()
                        }
                    }], [{
                        key: "nearestLinkNode",
                        value: function(t) {
                            return Object(a.a)(t).hasClass("js-search-tool-link") ? t : a.a.ancestor(t, "js-search-tool-link")
                        }
                    }]), t
                }(),
                qt = null,
                Ht = null,
                Pt = !1,
                Rt = {
                    init: function() {
                        if (!i.a.get("switches.weather", !1) || !["uk", "us", "au", "international"].includes(i.a.get("page.pageId"))) return !1;
                        this.getDefaultLocation()
                    },
                    getUserLocation: function() {
                        var t = W.a.get("weather-location");
                        if (t && t.id) return t
                    },
                    getWeatherData: function(t) {
                        return Object(l.a)(t, {
                            mode: "cors"
                        })
                    },
                    saveUserLocation: function(t) {
                        W.a.set("weather-location", {
                            id: t.id,
                            city: t.city
                        })
                    },
                    getDefaultLocation: function() {
                        var t = this,
                            e = this.getUserLocation();
                        return e ? this.fetchWeatherData(e) : this.getWeatherData("".concat(i.a.get("page.weatherapiurl"), ".json")).then(function(e) {
                            t.fetchWeatherData(e)
                        }).catch(function(t) {
                            Object(u.a)(t, {
                                feature: "weather"
                            })
                        })
                    },
                    fetchWeatherData: function(t) {
                        var e = this,
                            n = i.a.get("page.weatherapiurl"),
                            a = i.a.get("page.edition");
                        return this.getWeatherData("".concat(n, "/").concat(t.id, ".json?_edition=").concat(a.toLowerCase())).then(function(n) {
                            e.render(n, t.city), e.fetchForecastData(t)
                        }).catch(function(t) {
                            Object(u.a)(t, {
                                feature: "weather"
                            })
                        })
                    },
                    clearLocation: function() {
                        W.a.remove("weather-location"), null !== Ht && Ht.setInputValue()
                    },
                    fetchForecastData: function(t) {
                        var e = this;
                        return this.getWeatherData("".concat(i.a.get("page.forecastsapiurl"), "/").concat(t.id, ".json?_edition=").concat(i.a.get("page.edition").toLowerCase())).then(function(t) {
                            e.renderForecast(t)
                        }).catch(function(t) {
                            Object(u.a)(t, {
                                feature: "weather"
                            })
                        })
                    },
                    saveDeleteLocalStorage: function(t) {
                        var e = this;
                        "set" === t.store ? (this.saveUserLocation(t), this.fetchWeatherData(t).then(function() {
                            return e.toggleForecast()
                        })) : "remove" === t.store && (this.clearLocation(), this.getDefaultLocation())
                    },
                    bindEvents: function() {
                        var t = this;
                        Ct.a.on(document.body, "click", ".js-toggle-forecast", function(e) {
                            e.preventDefault(), t.toggleForecast()
                        }), r.a.on("autocomplete:fetch", this.saveDeleteLocalStorage.bind(this))
                    },
                    toggleForecast: function() {
                        Object(a.a)(".weather").toggleClass("is-expanded")
                    },
                    addSearch: function() {
                        Ht = new Ut({
                            container: Object(a.a)(".js-search-tool"),
                            apiUrl: i.a.get("page.locationapiurl")
                        })
                    },
                    render: function(t, e) {
                        this.attachToDOM(t.html, e), Pt || (this.bindEvents(), Pt = !0), null === Ht ? this.addSearch() : Ht.bindElements(Object(a.a)(".js-search-tool"))
                    },
                    attachToDOM: function(t, e) {
                        qt = Object(a.a)("#headlines .js-container__header"), Object(a.a)(".js-weather", qt).remove(), qt.append(t.replace(new RegExp("<%=city%>", "g"), e))
                    },
                    renderForecast: function(t) {
                        var e = Object(a.a)(".js-weather-forecast"),
                            n = t.html;
                        e.empty().html(n)
                    }
                },
                Wt = n(572),
                Vt = n.n(Wt),
                Qt = n(60),
                Bt = n(329),
                Gt = function(t) {
                    if (null != t) {
                        var e = t.querySelector(".youtube-media-atom");
                        if (e) {
                            var n = e.getAttribute("data-unique-atom-id");
                            if (n) return Object(Bt.b)(n)
                        }
                    }
                },
                Jt = function(t, e) {
                    return {
                        position: t,
                        atStart: 0 === t,
                        atEnd: t >= e
                    }
                },
                Xt = {
                    NEXT: function(t) {
                        var e = t.position >= t.length ? t.position : t.position + 1;
                        return Gt(document.querySelector(".js-video-playlist-item-".concat(e - 1))), Object.assign({}, t, Jt(e, t.length))
                    },
                    PREV: function(t) {
                        var e = t.position <= 0 ? 0 : t.position - 1;
                        return Gt(document.querySelector(".js-video-playlist-item-".concat(e + 1))), Object.assign({}, t, Jt(e, t.length))
                    },
                    INIT: function(t) {
                        var e;
                        return e = t, Object(o.m)({
                            max: "desktop"
                        }) && (Array.from(e.container.querySelectorAll(".youtube-media-atom iframe")).forEach(function(t) {
                            t.remove()
                        }), Array.from(e.container.querySelectorAll(".video-container-overlay-link")).forEach(function(t) {
                            t.classList.add("u-faux-block-link__overlay"), t.removeAttribute("tabindex"), t.removeAttribute("aria-hidden")
                        }), Array.from(e.container.querySelectorAll(".youtube-media-atom")).forEach(function(t) {
                            t.classList.add("no-player")
                        })), ht.a.read(function() {
                            Object(a.a)(".js-video-playlist-image", t.container).each(function(e) {
                                Object(Qt.a)(e, Object(a.a)(".js-video-playlist-inner", t.container).get(0), {
                                    left: 410
                                }).on("firstview", function(t) {
                                    ht.a.write(function() {
                                        var e = t.getAttribute("data-src"),
                                            n = t.getAttribute("src");
                                        e && !n && ht.a.write(function() {
                                            t.setAttribute("src", e)
                                        })
                                    })
                                })
                            })
                        }), t
                    }
                },
                Kt = function(t, e) {
                    return Xt[e.type] ? Xt[e.type](t) : t
                },
                Yt = function(t) {
                    var e = function(t) {
                            return {
                                position: 0,
                                length: Number(t.getAttribute("data-number-of-videos")),
                                videoWidth: 700,
                                container: t
                            }
                        }(t),
                        n = function(t, e) {
                            var n = e,
                                a = [],
                                i = function(e) {
                                    n = t(n, e), a.forEach(function(t) {
                                        t()
                                    })
                                };
                            return i({
                                type: "INIT"
                            }), {
                                dispatch: i,
                                subscribe: function(t) {
                                    a.push(t)
                                },
                                getState: function() {
                                    return n
                                }
                            }
                        }(Kt, e);
                    ! function(t, e) {
                        Ct.a.on(e, "click", ".js-video-playlist-next", function() {
                            t({
                                type: "NEXT"
                            })
                        }), Ct.a.on(e, "keypress", ".js-video-playlist-next", function(e) {
                            " " !== e.key && "Enter" !== e.key || (e.preventDefault(), t({
                                type: "NEXT"
                            }))
                        }), Ct.a.on(e, "click", ".js-video-playlist-prev", function() {
                            t({
                                type: "PREV"
                            })
                        }), Ct.a.on(e, "keypress", ".js-video-playlist-prev", function(e) {
                            " " !== e.key && "Enter" !== e.key || (e.preventDefault(), t({
                                type: "PREV"
                            }))
                        })
                    }(n.dispatch, t), n.subscribe(function() {
                        ! function(t, e) {
                            var n = -t.videoWidth * t.position;
                            ht.a.write(function() {
                                var i = e.querySelector(".video-playlist__item--active");
                                null != i && (i.classList.remove("video-playlist__item--active"), Object(a.a)(".youtube-media-atom__iframe", i).hide(), Object(a.a)(".video-overlay .fc-item__link", i).attr("tabindex", "-1"), Object(a.a)(".video-overlay .fc-item__link", i).attr("aria-hidden", "true"));
                                var o = e.querySelector(".js-video-playlist-item-".concat(t.position));
                                null != o && (o.classList.add("video-playlist__item--active"), Object(a.a)(".youtube-media-atom__iframe", o).show(), Object(a.a)(".video-overlay .fc-item__link", o).removeAttr("tabindex"), Object(a.a)(".video-overlay .fc-item__link", o).removeAttr("aria-hidden")), e.classList.remove("video-playlist--end", "video-playlist--start"), t.atStart ? (e.classList.add("video-playlist--start"), Object(a.a)(".video-title__link", e).removeAttr("tabindex"), Object(a.a)(".video-title__link", e).removeAttr("aria-hidden"), Object(a.a)(".treats__treat", e).removeAttr("tabindex"), Object(a.a)(".treats__treat", e).removeAttr("aria-hidden"), Object(a.a)(".js-video-playlist-prev", e).attr("aria-hidden", "true"), Object(a.a)(".js-video-playlist-prev", e).attr("tabindex", "-1")) : (Object(a.a)(".video-title__link", e).attr("tabindex", "-1"), Object(a.a)(".video-title__link", e).attr("aria-hidden", "true"), Object(a.a)(".treats__treat", e).attr("tabindex", "-1"), Object(a.a)(".treats__treat", e).attr("aria-hidden", "true"), Object(a.a)(".js-video-playlist-prev", e).removeAttr("aria-hidden"), Object(a.a)(".js-video-playlist-prev", e).attr("tabindex", "0")), t.atEnd ? (e.classList.add("video-playlist--end"), Object(a.a)(".js-video-playlist-next", e).attr("aria-hidden", "true"), Object(a.a)(".js-video-playlist-next", e).attr("tabindex", "-1")) : (Object(a.a)(".js-video-playlist-next", e).removeAttr("aria-hidden"), Object(a.a)(".js-video-playlist-next", e).attr("tabindex", "0")),
                                    function(t, e) {
                                        Object(a.a)(".js-video-playlist-image--".concat(e), t).each(function(t) {
                                            ht.a.read(function() {
                                                var e = t.getAttribute("data-src"),
                                                    n = t.getAttribute("src");
                                                return e && !n ? e : null
                                            }).then(function(e) {
                                                e && ht.a.write(function() {
                                                    t.setAttribute("src", e)
                                                })
                                            })
                                        })
                                    }(e, t.position + 1);
                                var r = e.querySelector(".js-video-playlist-item-".concat(t.position));
                                null != r && r.classList.add("video-playlist__item--active");
                                var s = e.querySelector(".js-video-playlist-inner");
                                null != s && s.setAttribute("style", "-webkit-transform: translate(".concat(n, "px);") + "transform: translate(".concat(n, "px);"))
                            })
                        }(n.getState(), t)
                    }), Object(a.a)(".video-playlist__item:not(.video-playlist__item--first)").each(function(t) {
                        Object(a.a)(".youtube-media-atom__iframe", t).hide(), Object(a.a)(".video-overlay .fc-item__link", t).attr("tabindex", "-1"), Object(a.a)(".video-overlay .fc-item__link", t).attr("aria-hidden", "true")
                    })
                },
                Zt = n(573),
                te = n.n(Zt),
                ee = n(43);
            n.d(e, "init", function() {
                return de
            });
            var ne = function() {
                    Ft(), r.a.on("modules:container:rendered", Ft)
                },
                ae = function() {
                    r.a.addListeners({
                        "modules:container:rendered": ot,
                        "page:front:ready": ot
                    })
                },
                ie = function() {
                    var t = function(t) {
                        Object(a.a)(".js-container--toggle", Object(a.a)(t || document)[0]).each(function(t) {
                            new G(t).addToggle()
                        })
                    };
                    r.a.addListeners({
                        "page:front:ready": t,
                        "modules:geomostpopular:ready": Vt()(t, ".js-popular-trails")
                    })
                },
                oe = function() {
                    i.a.get("switches.geoMostPopular") && (i.a.get("switches.extendedMostPopularFronts") ? (new U).go() : (new z).go())
                },
                re = function() {
                    i.a.get("switches.weather") && r.a.on("page:front:ready", function() {
                        Rt.init()
                    })
                },
                se = function() {
                    Object(o.m)({
                        min: "desktop"
                    }) && r.a.on("page:front:ready", function() {
                        ! function t() {
                            return ht.a.read(function() {
                                var t = new Map;
                                return Object(a.a)(".js-liveblog-blocks").each(function(e) {
                                    var n = e.getAttribute("data-article-id");
                                    if (n) {
                                        var a = t.get(n) || [];
                                        a.push(e), t.set(n, a)
                                    }
                                }), t
                            }).then(function(e) {
                                var n;
                                e.size && (n = ft.b.get("gu.liveblog.block-dates") || {}, e.forEach(function(t, e) {
                                    Object(l.a)("/".concat(e, ".json?rendered=false"), {
                                        mode: "cors"
                                    }).then(function(a) {
                                        var i = a && a.blocks.filter(function(t) {
                                            return t.id && t.publishedDateTime && t.body && t.body.length >= 10
                                        });
                                        i && i.length && (Ot(e, t, i, n[e]), n[e] = i[0].publishedDateTime, ft.b.set("gu.liveblog.block-dates", n))
                                    }).catch(function() {})
                                }), _t && (_t -= 1, setTimeout(function() {
                                    t()
                                }, 1e3 * jt), jt *= 1))
                            })
                        }()
                    })
                },
                ce = function() {
                    Object(a.a)(".js-video-playlist").each(function(t) {
                        Yt(t)
                    })
                },
                le = function() {
                    r.a.emit("page:front:ready")
                },
                ue = function() {
                    var t, e, n;
                    Object(a.a)("#flagship-audio").length > 0 && ((n = document.querySelectorAll("section.fc-container--tag")).length >= 5 && (t = n[4], e = h()(te.a)({
                        supportContributeURL: Object(ee.b)()
                    }), ht.a.write(function() {
                        t.insertAdjacentHTML("afterend", e)
                    })))
                },
                de = function() {
                    Object(s.b)([
                        ["f-accessibility", c.a],
                        ["f-snaps", ne],
                        ["f-show-more", ae],
                        ["f-container-toggle", ie],
                        ["f-geo-most-popular", oe],
                        ["f-lazy-load-containers", ut],
                        ["f-stocks", b],
                        ["f-weather", re],
                        ["f-live-blog-updates", se],
                        ["f-video-playlists", ce],
                        ["f-audio-flagship-contributions", ue],
                        ["f-finished", le]
                    ])
                }
        }
    }
]);
//# sourceMappingURL=graun.facia.js.map