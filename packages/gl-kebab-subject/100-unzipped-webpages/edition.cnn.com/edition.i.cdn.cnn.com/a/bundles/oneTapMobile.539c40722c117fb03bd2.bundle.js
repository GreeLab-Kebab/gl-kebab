! function(e) {
    var i = {};

    function t(n) {
        if (i[n]) return i[n].exports;
        var a = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    t.m = e, t.c = i, t.d = function(e, i, n) {
        t.o(e, i) || Object.defineProperty(e, i, {
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, i) {
        if (1 & i && (e = t(e)), 8 & i) return e;
        if (4 & i && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & i && "string" != typeof e)
            for (var a in e) t.d(n, a, function(i) {
                return e[i]
            }.bind(null, a));
        return n
    }, t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(i, "a", i), i
    }, t.o = function(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i)
    }, t.p = "", t(t.s = 157)
}({
    157: function(e, i, t) {
        t(8), t(158), t(159)
    },
    158: function(e, i) {
        CNN.OneTapCarousel = CNN.OneTapCarousel || {},
            function() {
                "use strict";
                CNN.OneTapCarousel.CarouselView = function(e) {
                    this.CAROUSEL_SHOW_CLASS = "video__one-tap-carousel-show", this.CAROUSEL_HIDDEN_CLASS = "video__one-tap-carousel-hidden", this.CAROUSEL_LIST_CLASS = "video__one-tap-carousel-list", this._children = [], this._nowPlayingIndex = 0, this._playlist = e.playlist, this._animationTime = CNN.OneTap.carousel.animationTime, this._onVideoSelect = e.onVideoSelect, this._onVideoClick = this._onVideoClick.bind(this), this._currentVideo = this._playlist[0], this.$element = null
                }, CNN.OneTapCarousel.CarouselView.prototype = {
                    _template: function() {
                        return '<div class="video__one-tap-carousel"><div class="video__one-tap-carousel-top-border">RELATED VIDEO</div><ul class="' + this.CAROUSEL_LIST_CLASS + '"></ul></div>'
                    },
                    render: function() {
                        var e, i = this;
                        this.$element = jQuery(this._template()), e = this.getListElement(), this._children = this._playlist.map((function(t) {
                            var n = new CNN.OneTapCarousel.CarouselItemView({
                                video: t,
                                onClick: i._onVideoClick
                            });
                            return n.render(), n._video === i._currentVideo && n.addNowPlayingClass(), e.append(n.$element), n
                        }))
                    },
                    _onVideoClick: function(e) {
                        this.next(e)
                    },
                    next: function(e) {
                        var i, t, n, a, o;
                        for (this._children[this._nowPlayingIndex].removeNowPlayingClass(), a = !1, e || (i = (i = this._playlist.indexOf(this._currentVideo)) === this._playlist.length - 1 ? 0 : i + 1, this._nowPlayingIndex = i, a = !0, e = this._playlist[i]), n = 0; n < this._children.length; n++)
                            if (this._children[n].getVideo() === e) {
                                this._nowPlayingIndex = n, o = this._children[n];
                                break
                            }
                        t = 0 === i ? 0 : this.getListElement().scrollLeft() + o.$element.position().left, this.getListElement().animate({
                            scrollLeft: t
                        }, this._animationTime), o.addNowPlayingClass(), this._currentVideo = e, e && this._onVideoSelect(e, a)
                    },
                    getListElement: function() {
                        return this.$element.find("." + this.CAROUSEL_LIST_CLASS)
                    },
                    show: function() {
                        this.$element.removeClass(this.CAROUSEL_HIDDEN_CLASS).addClass(this.CAROUSEL_SHOW_CLASS)
                    },
                    hide: function() {
                        this.$element.removeClass(this.CAROUSEL_SHOW_CLASS).addClass(this.CAROUSEL_HIDDEN_CLASS)
                    },
                    destroy: function() {
                        this.$element.remove(), this.$element = null
                    }
                }, CNN.OneTapCarousel.CarouselItemView = function(e) {
                    this.CAROUSEL_NOW_PLAYING_CLASS = "video__one-tap-carousel-now-playing", this._onClick = e.onClick, this._video = e.video, this._handleClick = this._handleClick.bind(this)
                }, CNN.OneTapCarousel.CarouselItemView.prototype = {
                    _template: function(e) {
                        return '<li class="video__one-tap-carousel-list-item" id="' + e.videoId + '"><div><img class="video__one-tap-carousel-thumbnail" src="' + e.imageUrl + '"><div class="video__one-tap-carousel-title">' + e.title + "</div></div></li>"
                    },
                    getVideo: function() {
                        return this._video
                    },
                    _bindUIEvents: function() {
                        this.$element.on("click", this._handleClick)
                    },
                    _handleClick: function() {
                        this._onClick(this._video)
                    },
                    removeNowPlayingClass: function() {
                        this.$element.removeClass(this.CAROUSEL_NOW_PLAYING_CLASS)
                    },
                    addNowPlayingClass: function() {
                        this.$element.addClass(this.CAROUSEL_NOW_PLAYING_CLASS)
                    },
                    render: function() {
                        this.$element = jQuery(this._template(this._video)), this._bindUIEvents()
                    }
                }
            }()
    },
    159: function(e, i) {
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        CNN.Features = CNN.Features || {}, CNN.OneTapCarousel = CNN.OneTapCarousel || {}, CNN.OneTapSocial = CNN.OneTapSocial || {}, CNN.contentModel = CNN.contentModel || {}, CNN.VideoConfig = CNN.VideoConfig || {}, CNN.Utils = CNN.Utils || {}, CNN.VideoPlayer = CNN.VideoPlayer || {}, CNN.Videx = CNN.Videx || {},
            function() {
                "use strict";
                var e, i, n, a, o, l, s, r, d, c, u, v, p, N, C, m, _, h, f, y, g, b, V, x = {
                        cache: !1,
                        async: !0,
                        contentType: "application/json;",
                        dataType: "json",
                        method: "GET",
                        timeout: 15e3
                    },
                    T = !1,
                    w = 0,
                    S = !1,
                    O = CNN.OneTap.transition,
                    A = CNN.OneTap.carousel.enabled,
                    j = CNN.OneTap.live.enabled,
                    I = CNN.OneTap.timer.enabled,
                    P = O.enabled,
                    k = CNN.OneTap.shareIcons.enabled,
                    E = CNN.Host.domain,
                    Q = {
                        ext: ":*.json",
                        playlist: "/data/ocs/playlist/videos/"
                    },
                    U = !1,
                    L = !1,
                    F = !1,
                    R = !0,
                    B = new MobileDetect(navigator.userAgent),
                    $ = CNN.SectionConfig.mobile.contexts,
                    M = !1,
                    H = CNN.OneTap.live.enabledLiveStreams,
                    D = $.default.adsection,
                    q = CNN.VideoConfig.network,
                    W = "dismiss",
                    z = O.animationTime,
                    G = null,
                    Y = O.positionFromViewPort,
                    J = "",
                    K = CNN.contentModel.sectionName || "homepage",
                    X = {
                        socialHeadline: "",
                        descriptionPlainText: "",
                        shortUrl: "",
                        twitterAccount: "CNN",
                        metaImage: ""
                    },
                    Z = CNN.OneTap.timer.duration,
                    ee = O.duration,
                    ie = O.theme,
                    te = 0,
                    ne = 0,
                    ae = !0;

                function oe(e) {
                    "open" === e.data.click ? (CNN.Videx.mobile.oneTapPlayer.pause(), o.reload(X), CNN.share && CNN.share.reloadShareBar(), C.addClass("video__one-tap-sharebar--active"), I && L && me()) : C.removeClass("video__one-tap-sharebar--active")
                }

                function le() {
                    return CNN.Videx.mobile.videoId || ""
                }

                function se() {
                    return CNN.Videx.mobile.playlist || []
                }

                function re() {
                    Array.isArray(CNN.Videx.mobile.playlist) && "object" === t(CNN.Videx.mobile.playlist[w]) && (N.children().eq(0).text(CNN.Videx.mobile.playlist[w].title), N.children().eq(0).data("videoId", CNN.Videx.mobile.playlist[w].videoId), b.children().eq(0).text(CNN.Videx.mobile.playlist[w + 1 >= se().length ? 0 : w + 1].title), b.children().eq(0).data("videoId", CNN.Videx.mobile.playlist[w + 1 >= se().length ? 0 : w + 1].videoId), X.socialHeadline = CNN.Videx.mobile.playlist[w].title, X.descriptionPlainText = CNN.Videx.mobile.playlist[w].descriptionPlainText, X.shortUrl = CNN.Videx.mobile.playlist[w].videoLeafUrl, X.metaImage = CNN.Videx.mobile.playlist[w].imageUrl)
                }

                function de() {
                    var e = CNN.Videx.mobile.videoUrl;
                    return "string" == typeof e ? e.replace(/^.*\/video\/playlists\/(.+)\/?$/, "$1") : ""
                }

                function ce(e, i, a) {
                    return {
                        adsection: a || "",
                        thumb: "none",
                        video: e || "",
                        width: "100%",
                        height: "100%",
                        section: CNN.contentModel.edition || "domestic",
                        profile: "expansion",
                        network: q,
                        markupId: "one-tap-video",
                        frameWidth: "100%",
                        frameHeight: "100%",
                        autostart: !1,
                        oneTapPlay: !0,
                        freewheel: {
                            siteSectionIdSelection: function(e, i) {
                                var a = "";
                                return "object" === t(i) && "string" == typeof i.adSection ? a = 0 === i.adSection.indexOf("const-") ? function() {
                                    try {
                                        return $[i.sectionName].adSectionOverrideKeys[i.adSection]
                                    } catch (e) {
                                        return "object" === $[i.sectionName] && "string" === $[i.sectionName].adsection ? $[i.sectionName].adsection : D
                                    }
                                }() : i.adSection : n && (a = window.ssid), a
                            }
                        },
                        context: i || K
                    }
                }

                function ue() {
                    (G = jQuery.Deferred()).promise().done((function() {
                        CNN.Videx.mobile.oneTapPlayer.resume(), G = null
                    })), G.promise().fail((function() {
                        G = null
                    }))
                }

                function ve() {
                    U || -1 === W.indexOf("fullscreen") ? "inline" !== W && _e() : fe()
                }

                function pe() {
                    return "iOS" !== FAVE.Utils.os && CNN.VideoPlayer.isBrowserFullscreenAvailable() && !1 === M
                }

                function Ne() {
                    M = !0, window.addEventListener("touchmove", he, {
                        passive: !1
                    }), jQuery("body").addClass("no-scrolling")
                }

                function Ce() {
                    M = !1, window.removeEventListener("touchmove", he, {
                        passive: !1
                    }), jQuery("body").removeClass("no-scrolling")
                }

                function me() {
                    g.removeClass("active"), u.addClass("active"), N.removeClass("metadata--inactive"), b.addClass("metadata--inactive"), L = !1
                }

                function _e() {
                    CNN.Videx.mobile.oneTapPlayer.stop(), "inline" === W ? P ? (C.css("max-height", "0"), setTimeout((function() {
                        C.removeClass("video__one-tap-sharebar--active").addClass("video__one-tap--hide")
                    }), ee)) : C.removeClass("video__one-tap-sharebar--active").addClass("video__one-tap--hide") : (Te(), C.removeClass("video__one-tap-portrait-fullscreen video__one-tap-landscape-fullscreen video__one-tap-sharebar--active").addClass("video__one-tap--hide")), "block" === jQuery(".video__one-tap-overlay").css("display") && (jQuery(".video__one-tap-overlay").css("display", "none"), ye()), CNN.goActiveUntil = 0, U = !1, W = "dismiss", F = !1, I = CNN.OneTap.timer.enabled, b.addClass("video__one-tap--hide")
                }

                function he(e) {
                    M && e.preventDefault()
                }

                function fe() {
                    var t = CNN.Videx.mobile.videoId;
                    Te(), CNN.Videx.mobile.oneTapPlayer.pause(),
                        function() {
                            a ? C.insertAfter(r.next()) : C.insertAfter(r);
                            m.insertBefore(C), ue(), R = !1
                        }(), b.addClass("video__one-tap--hide"), A && t && t !== i ? e && (e.destroy(), e = null) : "" !== b.children().eq(0)[0].textContent && b.removeClass("video__one-tap--hide"), C.removeClass("video__one-tap-portrait-fullscreen video__one-tap-sharebar--active video__one-tap-landscape-fullscreen video__one-tap--hide"), C.addClass(("dark" === ie ? "dark" : "light") + " video__one-tap--inline"), V.removeClass("fave-custom-fullscreen"), P ? "dismiss" === W && (l = C.prop("scrollHeight") + p.height(), C.css("max-height", l + "px"), function(e) {
                            var i = C.get(0),
                                t = i.getBoundingClientRect().top,
                                n = p.height(),
                                a = C.offset().top,
                                o = t,
                                l = window.innerHeight,
                                s = .5 * (i.scrollHeight + n),
                                r = a - o + s,
                                d = s - o + 38 + Y,
                                c = s + o - l;
                            d > 0 ? r -= d : c > 0 && (r += c);
                            jQuery("html, body").animate({
                                scrollTop: r
                            }, e, "linear")
                        }(z), m.addClass(("dark" === ie ? "dark" : "light") + " visible"), C.offsetParent().css("zIndex", "4"), jQuery(window).on("touchstart", (function() {
                            m.removeClass("visible"), C.offsetParent().css("zIndex", ""), null !== G && "pending" === G.state() && G.reject(), ye()
                        })), jQuery(window).on("touchmove", (function() {
                            jQuery(".video__one-tap-overlay").css("display", "none"), ye()
                        }))) : C.css("max-height", "100%"), W = "inline", ae = !0, CNN.Videx.mobile.oneTapPlayer.setMaxBitrate(Number(FAVE.settings.player.maxBitrate))
                }

                function ye() {
                    jQuery(window).off("touchstart"), jQuery(window).off("touchmove")
                }

                function ge(t) {
                    var n = CNN.Videx.mobile.videoId,
                        a = Se();
                    S = !0, jQuery("body").css("backgroundColor", "#000000"), !n || n !== i || U && J !== i || a || be(n), C.css("max-height", "100%"), m.removeClass("visible"), C.offsetParent().css("zIndex", ""), R || (CNN.Videx.mobile.oneTapPlayer.pause(), jQuery(document.body).prepend(C), R = !0, ue(), jQuery(window).on("touchstart", (function() {
                        null !== G && "pending" === G.state() && G.reject(), ye()
                    }))), Se() ? (C.removeClass("video__one-tap-portrait-fullscreen video__one-tap--inline video__one-tap--hide video__one-tap-sharebar--active").addClass("video__one-tap-landscape-fullscreen"), !M && ("iOS" === FAVE.Utils.os || t && "inline" === W) && Ne(), W = "fullscreen-landscape") : (A && (b.addClass("video__one-tap--hide"), e ? e.show() : U || (s = jQuery('<div class="video__one-tap-carousel"><div class="video__one-tap-carousel-top-border">RELATED VIDEO</div><ul class="video__one-tap-carousel-list"><li class="video__one-tap-carousel-list-item video__one-tap-carousel-placeholder"></li></ul></div>'), p.append(s))), C.removeClass("video__one-tap-landscape-fullscreen video__one-tap--inline video__one-tap--hide video__one-tap-sharebar--active").addClass("video__one-tap-portrait-fullscreen"), W = "fullscreen-portarit", ae = !1), pe() ? CNN.VideoPlayer.enterBrowserFullscreen(C[0]) : "iOS" !== FAVE.Utils.os && (!CNN.VideoPlayer.isBrowserFullscreenAvailable() || CNN.VideoPlayer.isBrowserFullscreen() || !1 !== M) || e || Ne(), V.addClass("fave-custom-fullscreen"), CNN.Videx.mobile.oneTapPlayer.setMaxBitrate(FAVE.settings.player.fullscreenMaxBitrate)
                }

                function be(n) {
                    var a, o;
                    (a = n, o = jQuery.Deferred(), CNN.Videx.mobile.playlist = null, x.url = E + Q.playlist + a + Q.ext, jQuery.ajax(x).done((function(e, i) {
                        o.resolveWith(e)
                    })).fail((function(e, i) {
                        o.reject()
                    })), o.promise().fail((function() {
                        console.log("Failed to retrieve playlist")
                    }))).then((function() {
                        var n;
                        CNN.Videx.mobile.playlist = this.currentVideoCollection, re(), e || b.removeClass("video__one-tap--hide"), A && null !== CNN.Videx.mobile.playlist && (n = CNN.Videx.mobile.playlist, e || (xe(), (e = new CNN.OneTapCarousel.CarouselView({
                            playlist: n,
                            onVideoSelect: Ve
                        })).render(), p.append(e.$element), i = e._currentVideo.videoId, Ce(), S ? (e.show(), b.addClass("video__one-tap--hide")) : e.hide())), "" === de() && Array.isArray(CNN.Videx.mobile.playlist) && "object" === t(CNN.Videx.mobile.playlist[0]) && "string" == typeof CNN.Videx.mobile.playlist[0].videoUrl && (CNN.Videx.mobile.videoUrl = CNN.Videx.mobile.playlist[0].videoUrl)
                    }))
                }

                function Ve(t) {
                    var n = e._playlist;
                    n.forEach((function(e, i) {
                        e.videoId === t.videoId ? w = i : n.length === i + 1 && (w = 0)
                    })), i = t.videoId, J = CNN.Videx.mobile.videoId, CNN.Videx.mobile.oneTapPlayer.play(t.videoId, {
                        autostart: !1,
                        videoCollection: de()
                    })
                }

                function xe() {
                    jQuery(".video__one-tap-carousel-placeholder") && jQuery(".video__one-tap-carousel-placeholder").closest("div.video__one-tap-carousel").remove()
                }

                function Te() {
                    M ? Ce() : pe() && CNN.VideoPlayer.exitBrowserFullscreen(), S = !1
                }

                function we(t) {
                    C.hasClass("video__one-tap-sharebar--active") ? (C.removeClass("video__one-tap-sharebar--active"), CNN.Videx.mobile.oneTapPlayer.resume()) : (jQuery("body").css("backgroundColor", ""), -1 !== W.indexOf("fullscreen") ? (U ? _e() : fe(), A && (e ? (i = e._currentVideo.videoId, e.destroy(), e = null) : xe()), S = !1) : "exitOutIcon" === t.data.clickType && "inline" === W ? _e() : ge(!1))
                }

                function Se() {
                    return !("iOS" === FAVE.Utils.os && 90 !== window.orientation && -90 !== window.orientation || "iOS" !== FAVE.Utils.os && -1 === window.screen.orientation.type.indexOf("landscape"))
                }

                function Oe() {
                    var e = b.children().eq(0).data().videoId;
                    i = e, J = CNN.Videx.mobile.videoId, CNN.Videx.mobile.oneTapPlayer.play(e, {
                        autostart: !1,
                        videoCollection: de()
                    }), w = w + 1 < se().length ? w + 1 : 0, C.removeClass("video__one-tap-sharebar--active")
                }

                function Ae(o, l) {
                    var d, u;
                    if (J = CNN.Videx.mobile.videoId, 0 === o.find(".media__video--responsive").length)
                        if (a = l, d = o[0].dataset.videoId, CNN.Videx.mobile.videoId = d, u = o[0], A = CNN.OneTap.carousel.enabled && !n, n = -1 !== d.indexOf("cvplive/cvpstream"), void 0 === V && (V = _.find(".theoplayer, .theoplayer-container")), void 0 === h && (h = V.find(".vjs-fullscreen-control"), (c = 0 !== V.find("button.vjs-fullscreen-control").length ? jQuery('<button class="vjs-button video__one-tap--hide" type="button" aria-live="polite" title="Fullscreen" aria-disabled="false"><span class="vjs-control-text">Fullscreen</span></button>') : jQuery('<div class="video__one-tap--hide"></div>')).on("click", {
                                clickType: "fullScreenIcon"
                            }, we), h.addClass("video__one-tap__fullscreenicon--hide").removeClass("vjs-fullscreen-control vjs-control"), c.removeClass("video__one-tap--hide").addClass("vjs-fullscreen-control vjs-control"), c.insertAfter(h), _.append(y, v)), w = 0, v.removeClass("video__end-slate--active").addClass("video__end-slate--inactive"), CNN.Videx.mobile.videoUrl = u.dataset.vrContentbox || u.dataset.videoPlaylistUrl || null, CNN.VideoConfig.liveStream.pageRefreshTime > 0 && (CNN.goActiveUntil = 6e4 * CNN.VideoConfig.liveStream.pageRefreshTime + Date.now()), void 0 !== r && u.className === r[0].className && "inline" === W) _e();
                        else if (N.children().eq(0).text(u.innerText), N.children().eq(0).data("videoId", u.dataset.videoId), r = o, (I = I && !n) && L && me(), CNN.Features.enableOneTapCustomFullscreen || -1 !== u.parentElement.className.indexOf("cn__column ") || -1 !== u.className.indexOf("cd--has-media") || n ? (U = !0, A && (e && (i = e._currentVideo.videoId, e.destroy(), e = null), s = jQuery('<div class="video__one-tap-carousel"><div class="video__one-tap-carousel-top-border">RELATED VIDEO</div><ul class="video__one-tap-carousel-list"><li class="video__one-tap-carousel-list-item video__one-tap-carousel-placeholder"></li></ul></div>'), p.append(s)), ge(!1)) : "inline" === W && P ? (C.css("max-height", "0"), setTimeout((function() {
                            C.removeClass("video__one-tap--inline").addClass("video__one-tap--hide"), W = "dismiss", fe()
                        }), ee)) : fe(), CNN.GeoCheck.inTarget(CNN.VideoConfig.liveStream.geoCheckTargets) || !n ? (CNN.Videx.mobile.oneTapPlayer.play(d, {
                            autostart: !1,
                            isLive: n,
                            videoCollection: de()
                        }), n && f.hasClass("active") ? f.removeClass("active") : n || f.hasClass("active") || f.addClass("active")) : (void 0 !== CNN.VideoConfig.liveStream.blockSlate.imageUrl ? v.html('<div class="block-slate"><img class="media-image" src="' + CNN.VideoConfig.liveStream.blockSlate.imageUrl + '"/></div>') : (v.find(".cd__headline-title").html(CNN.VideoConfig.liveStream.blockSlate.titleText), v.find(".cd__headline-text").html(CNN.VideoConfig.liveStream.blockSlate.messageText)), v.removeClass("video__end-slate--inactive").addClass("video__end-slate--active")), l && "object" === ("undefined" == typeof OBR ? "undefined" : t(OBR)) && "object" === t(OBR.extern) && "function" == typeof OBR.extern.callClick) try {
                        OBR.extern.callClick({
                            link: u.href
                        })
                    } catch (e) {
                        console.log("Outbrain callClick failed")
                    }
                }
                CNN.Features.enableOneTapToPlay && FAVE.settings.enabled && FAVE.settings.oneTapEnabledPage && (CNN.Videx.mobile = {}, CNN.Videx.mobile.playlist = null, Boolean(B.mobile()) && (jQuery(document).on("corePlayerReady", (function() {
                    T || (T = !0, jQuery(document).on("click", "article[data-video-id], li.icon-video > a[data-video-id]", (function(e) {
                        CNN.Utils.existsObject(e.currentTarget.dataset) && "string" == typeof e.currentTarget.dataset.videoId && (n = -1 !== e.currentTarget.dataset.videoId.indexOf("cvplive/")), (!n || n && j && -1 !== H.indexOf(e.currentTarget.dataset.videoId)) && (e.preventDefault(), e.stopPropagation(), Ae(jQuery(this), !1))
                    })), CNN.Features.enableOutbrainOneTapToPlay && (jQuery(document).on("click", ".OUTBRAIN a[data-video-id]", (function(e) {
                        e.preventDefault(), e.stopPropagation()
                    })), jQuery(document).on("mouseup", ".OUTBRAIN a[data-video-id]", (function(e) {
                        Ae(jQuery(this), !0)
                    }))))
                })), CNN.INJECTOR.executeFeature("video").then((function() {
                    C = jQuery('<div class="video__one-tap--backdrop-wrapper video__one-tap--hide"></div>').appendTo("body"), d = jQuery('<div class="video__one-tap--cta"></div>'), (u = jQuery('<span class="one-tap-close active"></span>')).on("click", {
                        clickType: "exitOutIcon"
                    }, we), g = jQuery('<div class = "video__one-tap-timer"></div>'), (f = jQuery('<span class="share-icon-cta fave-banner-share"></span>').addClass(k ? "active" : "")).on("click", {
                        click: "open"
                    }, oe), d.append(f, u, g), y = jQuery('<div class="video__one-tap-player-end-slate"></div>'), v = jQuery('<div class="one-tap__geo-restrict__end-slate"><div class="end-slate-top-container"><h3 class="cd__headline-title"></h3><span class="cd__headline-text"></span></div></div>'), _ = jQuery('<div class="one-tap__video--responsive" id="' + (ce().markupId || "") + '"></div>'), p = jQuery('<div class="cd__headline-text video__one-tap__metadata"></div>'), N = jQuery('<div class="video__one-tap--now-playing">NOW PLAYING <div class="now-playing--content"></div></div>'), (b = jQuery('<div class="video__one-tap--up-next metadata--inactive video__one-tap--hide">UP NEXT <div class="up-next--content"></div></div>')).children().eq(0).on("click", Oe), p.append(N, b), m = jQuery('<div class="video__one-tap-overlay"></div>'), C.append(d, y, v, _, p, c, m), !0 === k && ((o = new CNN.OneTapSocial.SocialShareView(X)).render(), y.append(o.$element), void 0 !== CNN.Analytics && void 0 !== CNN.Analytics.utils && "function" == typeof CNN.Analytics.utils.addSocialMediaInteractionMetrics && CNN.Analytics.utils.addSocialMediaInteractionMetrics()), CNN.VideoPlayer.injectFave(ce(), {
                        onPlayerReady: function(e, i) {
                            jQuery(document).triggerCorePlayerReady(), CNN.Videx.mobile.oneTapPlayer = FAVE.player.getInstance(e), CNN.Analytics && CNN.Analytics.segment && CNN.Analytics.segment.markFromResponseEnd && CNN.Analytics.segment.markFromResponseEnd("faveReady")
                        },
                        onContentEntryLoad: function(e, i, t, a) {
                            0 !== w || "" === t || n ? re() : (CNN.Videx.mobile.videoId = t, I && L && me(), be(t))
                        },
                        onAdPlay: function(e, i, t, n, a, o, l, s) {
                            CNN.Features.enableVisualRevenueVideo && Array.isArray(window._vrq) && window._vrq.push(["video", "adroll", le()]), 0 === l && "function" == typeof window.obApi && window.obApi("track", "Video View")
                        },
                        onAdPause: function(e, i, t, n, a, o, l, s, r, d) {
                            null !== G && d && G.resolve()
                        },
                        onAdEnd: function(e, i, t, n, a, o, l) {
                            CNN.Features.enableVisualRevenueVideo && Array.isArray(window._vrq) && window._vrq.push(["video", "adstop", le()])
                        },
                        onContentBuffering: function(e, i, t, n) {
                            I && L && (n ? g.pauseTimer(te) : g.resumeTimer(te))
                        },
                        onContentPlay: function(e, i, t) {
                            ! function(e, i) {
                                var t, a, o;
                                CNN.Features.enableAspen && (t = n ? "" : se(), a = n ? "" : t[e].videoId, o = n ? r[0].dataset.videoId : t[i].videoId, CNN.Videx.mobile.oneTapPlayer.reportAnalytics("videoPageData", {
                                    videoCollection: de(),
                                    videoBranding: CNN.omniture.branding_content_page,
                                    templateType: CNN.omniture.template_type,
                                    nextVideo: a,
                                    previousVideo: o,
                                    referrerType: "",
                                    referrerUrl: document.referrer
                                }))
                            }(w + 1 >= se().length ? 0 : w + 1, 0 === w ? 0 : w - 1), CNN.Features.enableVisualRevenueVideo && Array.isArray(window._vrq) && window._vrq.push(["video", "play", e])
                        },
                        onContentEnd: function(e, i, t) {
                            CNN.Features.enableVisualRevenueVideo && Array.isArray(window._vrq) && window._vrq.push(["video", "stop", e])
                        },
                        onContentComplete: function(i, t, n) {
                            w = w + 1 < se().length ? w + 1 : 0, n = se()[w].videoId, I && L && me(), A && e && e.next(), J = CNN.Videx.mobile.videoId, CNN.Videx.mobile.oneTapPlayer.play(n, {
                                autostart: !0,
                                videoCollection: de()
                            })
                        },
                        onContentPlayhead: function(e, i, t, n, a) {
                            void 0 !== a && ne !== a && (ne = a), I && te < Z && g.find("#count-down").text(te),
                                function(e) {
                                    var i, t;
                                    I && void 0 !== ne && void 0 !== e && ((i = Math.round(ne - e)) > Z && L ? me() : i > 0 && i < Z && function(e) {
                                        var i = C.hasClass("video__one-tap-sharebar--active");
                                        return (!L || e !== te && e !== te - 1 && e !== te + 1) && !i
                                    }(i) && (t = i, u.removeClass("active"), g.addClass("active"), L = !0, g.loadTimer(t), b.removeClass("metadata--inactive"), N.addClass("metadata--inactive"), F && g.pauseTimer(t)), te = i)
                                }(n)
                        },
                        onContentPause: function(e, i, t, n) {
                            F = n, null !== G && n && G.resolve(), I && L && (F ? g.pauseTimer(te) : g.resumeTimer(te))
                        },
                        onPlayerVisibilityChange: function(e, i, t) {
                            !1 === t && _e()
                        },
                        onTrackingFullscreen: function(e, i, n) {
                            var a = jQuery(CNN.Videx.mobile.oneTapPlayer.getVideoPlayer().element).find("> video[src]")[0].webkitPresentationMode;
                            "object" !== t(n) || !1 !== n.fullscreen || "iOS" === FAVE.Utils.os && "inline" !== a || _e()
                        }
                    }), !1 === CNN.contentModel.hasVideo && jQuery('<link rel="stylesheet" type="text/css" href="' + FAVE.settings.cssUrl + '" >').appendTo("head"), CNN.VideoPlayer.isBrowserFullscreenAvailable() && CNN.VideoPlayer.handleBrowserFullscreenChange(ve)
                }))), jQuery(window).on("orientationchange", (function() {
                    var i = void 0 !== r && "" !== r[0].dataset.videoId,
                        t = !C.hasClass("video__one-tap--hide");
                    i && t && (Se() || !ae || U ? ge(!0) : (e && e.hide(), "inline" !== W && fe(), fe()))
                })))
            }()
    },
    8: function(e, i) {
        CNN.OneTapSocial = CNN.OneTapSocial || {},
            function() {
                "use strict";
                CNN.OneTapSocial.SocialShareView = function(e) {
                    this.$element = null, this._data = e
                }, CNN.OneTapSocial.SocialShareView.prototype = {
                    _template: function() {
                        var e = "",
                            i = "";
                        return !0 === CNN.OneTap.shareIcons.enableWhatsappButton && (i = this._createWhatsAppElement()), !0 === CNN.Features.enableFacebookMessengerButton && (e = this._createFacebookMessengerElement()), '<div class="m-share m-share__rail-bottom js-share-rail-bottom">' + e + '<div data-social-media-name="email" class="share-bar-email-container gigya-sharebar-element gig-bar-container gig-share-bar-container"><div class="gig-button-container gig-button-container-count-none gig-button-container-email gig-share-button-container gig-button-container-horizontal"><div class="gig-button gig-share-button gig-button-up gig-button-count-none cnn-icon"></div></div></div>' + i + '<div class="js-gigya-sharebar gigya-sharebar" data-subtitle="' + this._data.descriptionPlainText + '" data-isshorturl="true" data-title="' + this._data.socialHeadline + '" data-link="' + CNN.Host.domain + this._data.shortUrl + '" data-twitter-account="' + this._data.twitterAccount + '" data-image-src="' + this._data.metaImage + '" data-description="' + this._data.descriptionPlainText + '" ></div></div>'
                    },
                    _createWhatsAppElement: function() {
                        return '<div data-social-media-name="whatsapp" class="share-bar-whatsapp-container gigya-sharebar-element gig-bar-container gig-share-bar-container" data-url="' + CNN.SocialConfig.whatsapp.baseUrl + '" data-title="' + this._data.socialHeadline + '" data-storyurl="' + CNN.Host.domain + this._data.shortUrl + '"><div class="gig-button-container gig-button-container-count-none gig-button-container-whatsapp gig-share-button-container gig-button-container-horizontal"><div class="gig-button gig-share-button gig-button-up gig-button-count-none cnn-icon"></div></div></div>'
                    },
                    _createFacebookMessengerElement: function() {
                        return '<div data-bundle="facebook" data-social-media-name="messenger" class="share-bar-messenger-container gigya-sharebar-element gig-bar-container gig-share-bar-container"><div class="gig-button-container gig-button-container-count-none gig-button-container-messenger gig-share-button-container gig-button-container-horizontal"><div class="gig-button gig-share-button gig-button-up gig-button-count-none cnn-icon"></div></div></div>'
                    },
                    render: function() {
                        this.$element = jQuery(this._template())
                    },
                    destroy: function() {
                        this.$element.remove(), this.$element = null
                    },
                    reload: function(e) {
                        var i = this.$element.find(".js-gigya-sharebar"),
                            t = this.$element.find(".share-bar-whatsapp-container");
                        void 0 !== i && jQuery(i).attr("data-title", e.socialHeadline || "").attr("data-description", e.descriptionPlainText || "").attr("data-link", CNN.Host.domain + e.shortUrl || "").attr("data-image-src", e.metaImage || ""), void 0 !== t && jQuery(t).attr("data-title", e.socialHeadline || "").attr("data-storyurl", CNN.Host.domain + e.shortUrl || "")
                    }
                }
            }()
    }
});