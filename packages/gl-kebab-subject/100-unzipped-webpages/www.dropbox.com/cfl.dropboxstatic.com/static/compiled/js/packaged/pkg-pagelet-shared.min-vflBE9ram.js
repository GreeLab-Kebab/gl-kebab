define("modules/clean/components/loading_indicator", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom-factories", "external/prop-types", "external/lodash", "modules/core/accessible_announce", "modules/core/i18n"], function(e, t, n, r, i, a, o, s, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), a = n.__importStar(a), o = n.__importStar(o), s = n.__importStar(s), t.LoadingIndicatorStyle = {
        DOTS: "dots",
        SPINNER: "spinner",
        BLUE_SPINNER: "blue_spinner"
    };
    var h = (function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(i, e), i.prototype.componentDidMount = function() {
            this.props.shouldAnnounceMessage && l.AccessibleAnnounce.polite(this.props.startMessage)
        }, i.prototype.componentWillUnmount = function() {
            this.props.finishMessage && this.props.shouldAnnounceMessage && l.AccessibleAnnounce.polite(this.props.finishMessage)
        }, i.prototype.render = function() {
            var e = {};
            if (this.props.className) {
                var i = this.props.className.split(" ");
                e = s.zipObject(i, i.map(function(e) {
                    return !0
                }))
            }
            return e = n.__assign({}, e, {
                "c-loader": !0,
                "c-loader--spinner": this.props.style === t.LoadingIndicatorStyle.SPINNER,
                "c-loader--spinner--blue": this.props.style === t.LoadingIndicatorStyle.BLUE_SPINNER
            }), a.div({
                className: r.default(e)
            }, this.props.startMessage)
        }, i.displayName = "LoadingIndicator", i.LoadingIndicatorStyle = t.LoadingIndicatorStyle, i.propTypes = {
            style: o.oneOf(s.values(t.LoadingIndicatorStyle)),
            className: o.string,
            startMessage: o.string,
            finishMessage: o.string,
            shouldAnnounceMessage: o.bool
        }, i.defaultProps = {
            style: t.LoadingIndicatorStyle.DOTS,
            className: "",
            startMessage: u._("Loading…"),
            finishMessage: null,
            shouldAnnounceMessage: !0
        }, i
    })(i.default.Component);
    t.LoadingIndicator = h
}), define("modules/clean/photos/thumbnail_url_util", ["require", "exports", "tslib", "external/lodash", "modules/constants/python", "modules/core/exception", "modules/core/uri"], function(e, t, n, r, i, a, o) {
    "use strict";

    function s(e, n, i, s) {
        a.assert(null != n == (null != i), "Width and height must both be specified or neither");
        var l = {};
        if (null == n) a.assert(s === t.ThumbnailSizeMode.ORIGINAL || null === s, "You must supply width and height");
        else {
            var h = n + "x" + i;
            a.assert(u.indexOf(h) > -1, "Invalid thumbnail size (" + h + ")"), l.size = h
        }
        return null != s && (a.assert(r.values(t.ThumbnailSizeMode).indexOf(s) > -1, "Invalid thumbnail size mode (" + s + ")"), l.size_mode = s.toString()), o.URI.parse(e).updateQuery(l).toString()
    }

    function l(e) {
        return o.URI.parse(e).updateQuery({
            size_mode: t.ThumbnailSizeMode.ORIGINAL.toString(),
            fv_content: "true"
        }).toString()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), i = n.__importStar(i), a = n.__importStar(a), t.ThumbnailSizeMode = i.THUMBNAIL_SIZE_MODE;
    var u = i.THUMBNAIL_SIZES;
    t.thumbnailUrlForSize = s, t.fullSizeUrl = l
}), define("modules/clean/react/file_path_breadcrumb", ["require", "exports", "tslib", "external/classnames", "react", "external/lodash", "modules/clean/react/title_bubble", "modules/clean/em_string"], function(e, t, n, r, i, a, o, s) {
    "use strict";

    function l(e) {
        var t = new s.Emstring(e.name).length;
        return {
            name: e.name,
            href: e.url,
            width: t,
            workingWidth: u(t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), a = n.__importStar(a);
    var u = function(e) {
            return Math.floor(1e3 * e)
        },
        h = function(e) {
            return e / 1e3
        },
        d = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handlePathClick = function(e) {
                    t.props.handlePathClick(e)
                }, t
            }
            return n.__extends(t, e), t.prototype.getTotalPathWidth = function(e) {
                for (var t = 0, n = u(this.props.pathDividerWidth), r = 0; r < e.length; r++) {
                    t += e[r].workingWidth, r < e.length - 1 && (t += n)
                }
                return t
            }, t.prototype.getPathsAvailable = function() {
                var e = this.props.paths;
                return e.length > 1 ? e.slice(1) : e
            }, t.prototype.getPathsToShow = function() {
                function e() {
                    var e = a.last(o);
                    return e.width = h(r), e.workingWidth = r, [e]
                }
                for (var t = u(this.props.minPathWidth), n = u(this.props.pathDividerWidth), r = u(this.props.maxWidth), i = this.getPathsAvailable(), o = i.map(l), s = 0, d = 0; this.getTotalPathWidth(o) > r;) {
                    if (d++ > 100) return e();
                    if (s + 3 <= i.length) {
                        var c = o[0],
                            p = l({
                                name: this.props.morePathsString
                            }),
                            m = [c, p],
                            f = 0 === s ? 2 : 3,
                            _ = o.slice(f, o.length);
                        o = m.concat(_), s++
                    } else {
                        if (1 === o.length) return e();
                        for (var g = r, S = 0; S < o.length - 1; S++) {
                            g -= o[S].workingWidth + n
                        }
                        if (g < t) return e();
                        var v = a.last(o);
                        v.width = h(g), v.workingWidth = g
                    }
                }
                return o
            }, t.prototype.render = function() {
                var e = this,
                    t = this.props.pathClassname,
                    n = this.props,
                    a = n.morePathsString,
                    l = n.useLinks,
                    u = !1,
                    h = this.getPathsToShow().map(function(n) {
                        var o = n.name,
                            h = n.width,
                            d = n.href;
                        u = u || o === a;
                        var c = s.Emstring.em_snippet(o, h),
                            p = [t];
                        return d && l ? (p.push(t + "--level"), i.default.createElement("a", {
                            href: d,
                            className: r.default(p),
                            onClick: e.handlePathClick
                        }, c)) : (p.push(t + "--more"), i.default.createElement("span", {
                            className: r.default(p)
                        }, c))
                    }),
                    d = i.default.createElement("span", {
                        className: t + "--wrapper"
                    }, h);
                return u && this.props.showTooltipOnTruncated ? i.default.createElement(o.TitleBubble, {
                    content: this.getPathsAvailable().map(function(e) {
                        return e.name
                    }).join(" > "),
                    position: o.TitleBubble.POSITIONS.TOP,
                    isTargetPositionFixed: !0
                }, d) : d
            }, t.defaultProps = {
                pathClassname: "file-path-breadcrumb-component",
                maxWidth: 46,
                minPathWidth: 3,
                morePathsString: "…",
                pathDividerWidth: 1.077,
                handlePathClick: a.noop,
                useLinks: !0,
                showTooltipOnTruncated: !1
            }, t
        })(i.default.Component);
    t.FilePathBreadcrumb = d
});
var __importStar = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
};
define("modules/clean/sharing/async_share_modal_util", ["require", "exports"], function(e, t) {
    "use strict";

    function n(t, n, r, i, a, o, s, l, u, h, d) {
        void 0 === n && (n = null), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === a && (a = !1), void 0 === o && (o = !1), void 0 === s && (s = null), new Promise(function(t, n) {
            e(["modules/clean/sharing/share_modal_util"], t, n)
        }).then(__importStar).then(function(e) {
            return e.showNewFolderShareModal(t, n, r, i, a, o, s, l, u, h, d)
        })
    }

    function r(t, n, r, i, a, o) {
        return void 0 === r && (r = {}), new Promise(function(s) {
            new Promise(function(t, n) {
                e(["modules/clean/sharing/share_modal_util"], t, n)
            }).then(__importStar).then(function(e) {
                s(e.showShareModal(t, n, r, i, a, o))
            })
        })
    }

    function i(t) {
        var n = t.user,
            r = t.sharePrefillEmails,
            i = t.content,
            a = t.setPath,
            o = t.setUrl,
            s = t.contentManagerValidateFolderPath,
            l = t.extras;
        new Promise(function(t, n) {
            e(["modules/clean/sharing/share_modal_util"], t, n)
        }).then(__importStar).then(function(e) {
            e.showPrefilledShareModal({
                user: n,
                sharePrefillEmails: r,
                content: i,
                setPath: a,
                setUrl: o,
                contentManagerValidateFolderPath: s,
                extras: l
            })
        })
    }

    function a(t, n, r, i, a, o, s, l) {
        return void 0 === o && (o = {}), new Promise(function(u) {
            new Promise(function(t, n) {
                e(["modules/clean/sharing/share_modal_util"], t, n)
            }).then(__importStar).then(function(e) {
                u(e.expShowShareInterstitialModal(t, n, r, i, a, o, s, l))
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.asyncShowNewFolderShareModal = n, t.asyncShowShareModal = r, t.asyncShowPrefilledShareModal = i, t.expAsyncShowShareInterstitialModal = a
});
//# sourceMappingURL=pkg-pagelet-shared.min.js-vflExVg4O.map