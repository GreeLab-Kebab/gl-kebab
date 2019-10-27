define(["require", "exports", "tslib", "react", "modules/clean/react_format", "spectrum-arbor/atoms/arbor_button", "spectrum-arbor/atoms/arbor_copy", "spectrum-arbor/atoms/arbor_grid_element", "spectrum-arbor/atoms/arbor_headline", "spectrum-arbor/atoms/arbor_link", "spectrum-arbor/planks/arbor_pre_footer"], function(e, t, r, n, a, o, l, u, i, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var s = {
            base: 12,
            medium: 14,
            large: 16
        },
        m = {
            base: 12,
            medium: 9,
            large: 7
        },
        p = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.headline,
                    r = e.headlineColor;
                return n.default.createElement(i.ArborHeadline, {
                    tag: "h2",
                    color: r
                }, a.reactFormat(t, {
                    span: n.default.createElement("span", {
                        style: {
                            whiteSpace: "nowrap"
                        }
                    })
                }))
            }, t
        })(n.default.PureComponent);
    t.PreFooterLeftSection = p;
    var b = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.renderCtaSubtext = function(e) {
            var t = this.props.textColor;
            return e.map(function(e, r) {
                var o = e.text,
                    u = e.href,
                    i = e.trackingId;
                return n.default.createElement(l.ArborCopy, {
                    key: "cta-subtext-line-" + r,
                    marginTopSize: 0 === r ? "small" : "nano",
                    size: "small",
                    color: t
                }, a.reactFormat(o, {
                    br: n.default.createElement("br", null),
                    a: n.default.createElement(c.ArborLink, {
                        href: u,
                        trackingId: i,
                        size: "small",
                        theme: t
                    })
                }))
            })
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.cta,
                r = e.ctaSubtext,
                a = e.buttonTheme,
                l = e.buttonPadding;
            return n.default.createElement(u.ArborGridElement, {
                alignment: {
                    base: "flex-start",
                    medium: "flex-end"
                }
            }, n.default.createElement("div", null, n.default.createElement(o.ArborButton, {
                href: t.href,
                trackingId: t.trackingId,
                theme: a,
                padding: l
            }, t.text), r && this.renderCtaSubtext(r)))
        }, t
    })(n.default.PureComponent);
    t.PreFooterRightSection = b;
    var f = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.content,
                a = t.headline,
                o = t.cta,
                l = t.ctaSubtext,
                u = e.backgroundColor,
                i = e.headlineColor,
                c = e.textColor,
                f = e.buttonTheme,
                h = e.buttonPadding;
            return n.default.createElement(d.ArborPreFooter, {
                alignment: "flex-start",
                leftSection: n.default.createElement(p, r.__assign({}, {
                    headline: a,
                    headlineColor: i
                })),
                rightSection: n.default.createElement(b, r.__assign({}, {
                    cta: o,
                    ctaSubtext: l,
                    textColor: c,
                    buttonTheme: f,
                    buttonPadding: h
                })),
                backgroundColor: u,
                leftSectionColumnWidth: s,
                rightSectionColumnWidth: m,
                verticalPaddingSize: {
                    base: "xl",
                    medium: "xxxl"
                }
            })
        }, t
    })(n.default.PureComponent);
    t.PreFooter = f
});
//# sourceMappingURL=pre_footer.min.js-vfllH_3Rd.map