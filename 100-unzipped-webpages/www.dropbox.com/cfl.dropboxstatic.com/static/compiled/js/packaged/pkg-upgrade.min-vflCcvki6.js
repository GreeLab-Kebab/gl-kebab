define("modules/clean/react/growth_pages/upgrade/components/bottom", ["require", "exports", "tslib", "react", "modules/clean/stormcrow/experiment", "modules/clean/react/growth_pages/upgrade/components/upgrade_button"], function(e, t, r, a, n, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var o = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), Object.defineProperty(t.prototype, "expSubgrowthBizUpgradeFooterCta", {
            get: function() {
                return n.Experiment(this.props.experiments.subgrowthBizUpgradeFooterCta)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.renderUpgradeCTA = function() {
            return this.expSubgrowthBizUpgradeFooterCta.variantIs("V1") ? a.default.createElement("a", {
                href: "/business",
                className: "upgrade-bottom__cta__link"
            }, this.props.content.cta) : null
        }, t.prototype.render = function() {
            var e = this.props.content,
                t = this.props.paths.buyPath;
            return a.default.createElement("section", {
                className: "upgrade-bottom"
            }, a.default.createElement("div", {
                className: "upgrade-page__container upgrade-bottom__container"
            }, a.default.createElement("div", {
                className: "grid__container"
            }, a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--1-2 upgrade-bottom__headline upgrade-page--headline upgrade-mobile-full"
            }, e.headline), a.default.createElement("div", {
                className: "grid__item grid__item--1-4 upgrade-spacer"
            }, " "), a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--1-4 upgrade-bottom__cta upgrade-mobile-full"
            }, a.default.createElement(s.UpgradeButton, {
                inSetupFlow: this.props.inSetupFlow,
                buyPath: t,
                children: e.button,
                tk: e.cta_tk
            }), a.default.createElement("p", {
                className: "upgrade-bottom__cta__notice upgrade-page--notice"
            }, e.notice), this.renderUpgradeCTA()))))
        }, t
    })(a.default.Component);
    t.Bottom = o
}), define("modules/clean/react/growth_pages/upgrade/components/features", ["require", "exports", "tslib", "react", "classnames", "spectrum-arbor/atoms/arbor_button", "modules/clean/react_format", "spectrum-arbor/atoms/arbor_link"], function(e, t, r, a, n, s, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), n = r.__importDefault(n);
    var l = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), t.prototype.plus = function() {
            var e = this.props.content,
                t = this.renderFeatures(!1);
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--1-4 upgrade-features__plus"
            }, a.default.createElement("div", {
                className: "upgrade-features__headline-container"
            }, a.default.createElement("p", {
                className: "upgrade-features__headline upgrade-features__headline--plus upgrade-page--headline"
            }, e.plus.title)), t)
        }, t.prototype.professional = function() {
            var e = this.props.content,
                t = this.renderFeatures(!0),
                r = a.default.createElement("p", {
                    className: "upgrade-features__headline upgrade-features__headline--professional upgrade-page--headline"
                }, e.professional.title);
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--5-8 upgrade-features__professional upgrade-mobile-full"
            }, a.default.createElement("div", {
                className: "upgrade-features__headline-container"
            }, r, a.default.createElement("p", {
                className: "upgrade-features__subheadline upgrade-features__subheadline--professional upgrade-page--subheadline"
            }, e.professional.subtitle)), t)
        }, t.prototype.renderFeatures = function(e) {
            for (var t = this.props, r = t.isMontana, n = t.content, l = e ? n.professional.features : n.plus.features, d = e ? n.professional.cta : n.plus.cta, c = e ? n.professional.cta_href : n.plus.cta_href, u = e ? "professional" : "plus", p = [], m = 0; m < l.length; m++) {
                var _ = l[m],
                    g = r ? o.reactFormat(_.body, {
                        i: a.default.createElement("i", null),
                        a: a.default.createElement("a", {
                            href: "/transfer"
                        }),
                        u: a.default.createElement(i.ArborLink, {
                            size: "micro",
                            href: "/features/share/file-transfer"
                        })
                    }) : _.body,
                    f = a.default.createElement("div", {
                        key: m,
                        className: "upgrade-features__feature upgrade-features__feature--" + u
                    }, a.default.createElement("p", {
                        className: "\n            upgrade-features__feature__headline\n            upgrade-features__feature__headline--" + u + "\n            upgrade-page--subheadline\n          "
                    }, _.headline), a.default.createElement("p", {
                        className: "upgrade-features__feature__body upgrade-features__feature__body--" + u
                    }, g));
                p.push(f)
            }
            return d && c && p.push(a.default.createElement(s.ArborButton, {
                href: c,
                theme: "dbx-blue"
            }, d)), a.default.createElement("div", {
                className: "upgrade-features__list--" + u
            }, p)
        }, t.prototype.render = function() {
            var e = n.default("upgrade-page__container", "upgrade-features__container", {
                "upgrade-features__container--montana": this.props.isMontana
            });
            return a.default.createElement("section", {
                className: "upgrade-features"
            }, a.default.createElement("div", {
                className: e
            }, a.default.createElement("div", {
                className: "grid__container"
            }, this.plus(), a.default.createElement("div", {
                className: "grid__item grid__item--large--1-8 upgrade-features__spacer upgrade-spacer"
            }, a.default.createElement("div", {
                className: "upgrade-features__spacer__inner"
            }, " ")), this.professional())))
        }, t
    })(a.default.Component);
    t.Features = l
}), define("modules/clean/react/growth_pages/upgrade/components/header", ["require", "exports", "tslib", "react", "external/react-dom", "modules/clean/react_format", "modules/clean/react/growth_pages/upgrade/components/upgrade_button"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), n = r.__importStar(n);
    var i = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), t.prototype.componentDidMount = function() {
            var e = n.findDOMNode(this).getBoundingClientRect();
            this.props.setScrollThreshold(e.height)
        }, t.prototype.headline = function() {
            return a.default.createElement("h1", {
                className: "grid__item grid__item--1-1 grid__item--large--11-24 upgrade-header__headline upgrade-mobile-full"
            }, this.props.content.headline)
        }, t.prototype.body = function() {
            var e = this.props.content,
                t = this.props.paths.buyPath,
                r = this.props.experiments;
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--1-4 upgrade-header__body upgrade-mobile-full"
            }, a.default.createElement("p", {
                className: "upgrade-header__body__main"
            }, r.expMontanaMasterSwitch ? s.reactFormat(e.body, {
                a: a.default.createElement("a", {
                    href: "/smart-sync",
                    className: "upgrade-header__link"
                })
            }) : e.body), a.default.createElement(o.UpgradeButton, {
                inSetupFlow: this.props.inSetupFlow,
                buyPath: t,
                children: e.button,
                tk: e.cta_tk
            }), a.default.createElement("p", {
                className: "upgrade-header__body__notice upgrade-page--notice"
            }, e.notice), this.renderUpgradeCTA())
        }, t.prototype.renderUpgradeCTA = function() {
            var e = this.props.content;
            return this.props.isBusinessDomainUser ? a.default.createElement("a", {
                href: "/business",
                className: "upgrade-header__body__cta"
            }, e.cta) : null
        }, t.prototype.render = function() {
            return a.default.createElement("section", {
                className: "upgrade-header"
            }, a.default.createElement("div", {
                className: "upgrade-header__container upgrade-page__container"
            }, a.default.createElement("div", {
                className: "grid__container"
            }, this.headline(), a.default.createElement("div", {
                className: "grid__item grid__item--5-24 upgrade-header__headline__spacer upgrade-spacer"
            }, " "), a.default.createElement("div", {
                className: "grid__item grid__item--1-12 upgrade-header__body__spacer upgrade-spacer"
            }, " "), this.body())))
        }, t
    })(a.default.Component);
    t.Header = i
}), define("modules/clean/react/growth_pages/upgrade/components/media_text", ["require", "exports", "tslib", "react", "modules/clean/react_format", "spectrum-arbor/atoms/arbor_copy", "spectrum-arbor/atoms/arbor_grid_element", "spectrum-arbor/atoms/arbor_headline", "spectrum-arbor/atoms/arbor_link", "spectrum-arbor/planks/arbor_media_text", "modules/clean/react/image"], function(e, t, r, a, n, s, o, i, l, d, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.backgroundColor,
                r = e.content,
                u = e.layout,
                p = e.titleColor,
                m = e.textColor;
            return a.default.createElement(d.ArborMediaText, {
                backgroundColor: t,
                layout: u ? u : "",
                media: a.default.createElement(c.Image, {
                    src: r.image.src,
                    srcHiRes: r.image.srcHiRes
                }),
                text: a.default.createElement(o.ArborGridElement, null, a.default.createElement(i.ArborHeadline, {
                    color: p,
                    tag: "h2",
                    marginBottomSize: "medium"
                }, r.headline), a.default.createElement(s.ArborCopy, {
                    color: m,
                    marginBottomSize: "medium"
                }, n.reactFormat(r.body, {
                    span: a.default.createElement("span", {
                        className: "nowrap"
                    })
                })), a.default.createElement(l.ArborLink, {
                    href: r.href,
                    theme: m
                }, r.link))
            })
        }, t
    })(a.default.Component);
    t.UpgradeMediaText = u
}), define("modules/clean/react/growth_pages/upgrade/components/sec", ["require", "exports", "tslib", "react", "modules/clean/react/rebrand/elements/inline_video"], function(e, t, r, a, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var s = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), t.prototype.body = function() {
            var e = this.props.content;
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--3-8 upgrade-security__body upgrade-mobile-full"
            }, a.default.createElement("p", {
                className: "upgrade-security__body__headline upgrade-page--headline"
            }, e.headline), a.default.createElement("p", {
                className: "upgrade-security__body__main upgrade-page--body"
            }, e.body))
        }, t.prototype.animation = function() {
            var e = this.props.locale,
                t = this.props.content.image,
                r = this.props.content.video,
                s = ["en_GB", "id", "ko", "ms", "pl", "ru", "th_TH", "uk_UA", "zh_CN", "zh_TW"];
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--7-24 upgrade-security__animation__container__outer upgrade-mobile-full"
            }, this.props.isPostTTI && a.default.createElement(n.InlineVideo, {
                play: !0,
                loop: !0,
                desktopSrc: r.src,
                desktopHiResSrc: r.srcHiRes,
                poster: t.srcHiRes,
                staticContentHost: "rebrand.dropboxstatic.com",
                locale: e,
                localeDefaultToEn: s,
                description: r.description
            }))
        }, t.prototype.render = function() {
            return a.default.createElement("section", {
                className: "upgrade-security"
            }, a.default.createElement("div", {
                className: "upgrade-page__container upgrade-security__container"
            }, a.default.createElement("div", {
                className: "grid__container grid__container--reverse"
            }, this.body(), a.default.createElement("div", {
                className: "grid__item grid__item--1-6 upgrade-security__body__spacer upgrade-spacer"
            }, " "), a.default.createElement("div", {
                className: "grid__item grid__item--1-6 upgrade-security__animation__spacer upgrade-spacer"
            }, " "), this.animation())))
        }, t
    })(a.default.Component);
    t.Security = s
}), define("modules/clean/react/growth_pages/upgrade/components/sharing", ["require", "exports", "tslib", "react", "modules/clean/react_format", "modules/clean/react/rebrand/elements/inline_video"], function(e, t, r, a, n, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var o = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), t.prototype.body = function() {
            var e = this.props.content;
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--5-12 upgrade-sharing__body upgrade-mobile-full"
            }, a.default.createElement("p", {
                className: "upgrade-sharing__body__headline upgrade-page--headline"
            }, e.headline), a.default.createElement("p", {
                className: "upgrade-sharing__body__main upgrade-page--body"
            }, e.body), a.default.createElement("a", {
                href: "/showcase",
                className: "upgrade-link upgrade-sharing__body__link upgrade-page--body"
            }, n.reactFormat(e.link, {
                span: a.default.createElement("span", {
                    className: "ax-visually-hidden"
                })
            })))
        }, t.prototype.animation = function() {
            var e = this.props.locale,
                t = this.props.content.image,
                r = this.props.content.video,
                n = ["en_GB", "id", "ko", "ms", "pl", "ru", "th_TH", "uk_UA", "zh_CN", "zh_TW"];
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--11-24 upgrade-sharing__animation__container__outer upgrade-mobile-full"
            }, this.props.isPostTTI && a.default.createElement(s.InlineVideo, {
                play: !0,
                loop: !0,
                desktopSrc: r.src,
                desktopHiResSrc: r.srcHiRes,
                poster: t.srcHiRes,
                staticContentHost: "rebrand.dropboxstatic.com",
                locale: e,
                localeDefaultToEn: n,
                description: r.description
            }))
        }, t.prototype.render = function() {
            return a.default.createElement("section", {
                className: "upgrade-sharing"
            }, a.default.createElement("div", {
                className: "upgrade-page__container upgrade-sharing__container"
            }, a.default.createElement("div", {
                className: "grid__container grid__container--reverse"
            }, this.animation(), a.default.createElement("div", {
                className: "grid__item grid__item--1-8 upgrade-sharing__body__spacer upgrade-spacer"
            }), this.body())))
        }, t
    })(a.default.Component);
    t.Sharing = o
}), define("modules/clean/react/growth_pages/upgrade/components/storage", ["require", "exports", "tslib", "react", "modules/clean/react/rebrand/elements/triangle"], function(e, t, r, a, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var s = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), t.prototype.body = function() {
            var e = this.props.content;
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--3-8 upgrade-storage__body upgrade-mobile-full"
            }, a.default.createElement("p", {
                className: "upgrade-storage__body__headline upgrade-page--headline"
            }, e.headline), a.default.createElement("p", {
                className: "upgrade-storage__body__main upgrade-page--body"
            }, e.body), a.default.createElement("div", {
                className: "upgrade-storage__body__link__container upgrade-page--body"
            }, a.default.createElement("span", {
                className: "upgrade-storage__body__link__preface"
            }, e.link_preface, " ", a.default.createElement("a", {
                href: "/plus",
                className: "upgrade-link upgrade-storage__body__link__main"
            }, e.link))))
        }, t.prototype.triangle = function() {
            var e = this.props,
                t = e.trademarks,
                r = e.displayStrings,
                s = e.loggedIn;
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--1-2 upgrade-storage__triangle__container upgrade-mobile-full"
            }, a.default.createElement(n.Triangle, {
                trademarks: t,
                displayStrings: r,
                className: "plus-storage__triangle",
                textColor: "panda-black",
                chartColor: "pink-library",
                showTalkBubble: s
            }))
        }, t.prototype.render = function() {
            return a.default.createElement("section", {
                className: "upgrade-storage"
            }, a.default.createElement("div", {
                className: "upgrade-page__container upgrade-storage__container"
            }, a.default.createElement("div", {
                className: "grid__container grid__container--reverse"
            }, this.triangle(), a.default.createElement("div", {
                className: "grid__item grid__item--1-8 upgrade-storage__body__spacer upgrade-spacer"
            }, " "), this.body())))
        }, t
    })(a.default.Component);
    t.Storage = s
}), define("modules/clean/react/growth_pages/upgrade/components/sync", ["require", "exports", "tslib", "react", "modules/clean/react_format", "modules/clean/react/rebrand/elements/inline_video"], function(e, t, r, a, n, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var o = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return r.__extends(t, e), t.prototype.body = function() {
            var e = this.props.content;
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--5-12 upgrade-sync__body upgrade-mobile-full"
            }, a.default.createElement("p", {
                className: "upgrade-sync__body__headline upgrade-page--headline"
            }, e.headline), a.default.createElement("p", {
                className: "upgrade-sync__body__main upgrade-page--body"
            }, e.body), a.default.createElement("a", {
                href: "/smart-sync",
                className: "upgrade-link upgrade-sync__body__link upgrade-page--body"
            }, n.reactFormat(e.link, {
                span: a.default.createElement("span", {
                    className: "ax-visually-hidden"
                })
            })))
        }, t.prototype.animation = function() {
            var e = this.props.locale,
                t = this.props.content.image,
                r = this.props.content.video,
                n = ["en_GB", "id", "ko", "ms", "pl", "ru", "th_TH", "uk_UA", "zh_CN", "zh_TW"];
            return a.default.createElement("div", {
                className: "grid__item grid__item--1-1 grid__item--large--11-24 upgrade-sync__animation__container__outer upgrade-mobile-full"
            }, this.props.isPostTTI && a.default.createElement(s.InlineVideo, {
                play: !0,
                loop: !0,
                desktopSrc: r.src,
                desktopHiResSrc: r.srcHiRes,
                poster: t.srcHiRes,
                staticContentHost: "rebrand.dropboxstatic.com",
                locale: e,
                localeDefaultToEn: n,
                description: r.description
            }))
        }, t.prototype.render = function() {
            return a.default.createElement("section", {
                className: "upgrade-sync"
            }, a.default.createElement("div", {
                className: "upgrade-page__container upgrade-sync__container"
            }, a.default.createElement("div", {
                className: "grid__container grid__container--reverse"
            }, this.animation(), a.default.createElement("div", {
                className: "grid__item grid__item--1-8 upgrade-spacer"
            }), this.body())))
        }, t
    })(a.default.Component);
    t.Sync = o
}), define("modules/clean/react/growth_pages/upgrade/components/upgrade_button", ["require", "exports", "tslib", "react", "modules/core/uri", "modules/core/i18n", "modules/clean/react/rebrand/elements/rebrand_buttons"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var i = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props.children || this.upgradeButtonText(),
                t = this.upgradeButtonLink();
            return a.default.createElement(o.RebrandButtonAnchor, {
                href: t,
                size: this.props.size || "medium",
                className: "upgrade-button",
                importance: "secondary"
            }, e)
        }, t.prototype.upgradeButtonLink = function() {
            var e = this.props.ctaPath || this.props.buyPath,
                t = this.props.tk,
                r = this.props.inSetupFlow || !1,
                a = {
                    path: e
                };
            return t && (a.query = {
                _tk: t
            }), r && (a.query = a.query || {}, a.query.in_setup_flow = r.toString()), new n.URI(a).toString()
        }, t.prototype.upgradeButtonText = function() {
            return s._("Choose your plan")
        }, t
    })(a.default.Component);
    t.UpgradeButton = i
}), define("modules/clean/react/growth_pages/upgrade/upgrade_page", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/async/loadable", "modules/clean/react/css", "modules/clean/web_timing_logger", "modules/clean/react/payments/common/components/taurus_nav", "modules/clean/react/growth_pages/upgrade/components/bottom", "modules/clean/react/growth_pages/upgrade/components/features", "modules/clean/react/growth_pages/upgrade/components/header", "modules/clean/react/growth_pages/upgrade/components/sec", "modules/clean/react/growth_pages/upgrade/components/sharing", "modules/clean/react/growth_pages/upgrade/components/storage", "modules/clean/react/growth_pages/upgrade/components/sync", "modules/clean/react/growth_pages/upgrade/components/media_text"], function(e, t, r, a, n, s, o, i, l, d, c, u, p, m, _, g, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), n = r.__importDefault(n), i = r.__importStar(i);
    var h = s.Loadable({
            loader: function() {
                return i.waitForTTI().then(function() {
                    return new Promise(function(t, r) {
                        e(["modules/clean/react/rebrand/elements/rebrand_arbor_footer_component"], t, r)
                    }).then(r.__importStar).then(function(e) {
                        return e.RebrandArborFooter
                    })
                })
            }
        }),
        b = (function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.setScrollThreshold = function(e) {
                    r.setState({
                        scrollThreshold: e
                    })
                }, r.state = {
                    scrollThreshold: void 0,
                    isPostTTI: !1
                }, r
            }
            return r.__extends(t, e), t.prototype.componentWillMount = function() {
                i.log_js_modules_application_code_start()
            }, t.prototype.componentDidMount = function() {
                var e = this;
                i.waitForTTI().then(function() {
                    e.setState({
                        isPostTTI: !0
                    })
                })
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.inSetupFlow,
                    s = e.isBusinessDomainUser,
                    o = e.content,
                    i = e.paths,
                    b = e.experiments,
                    v = e.trademarks,
                    y = e.displayStrings,
                    C = e.locale,
                    E = e.loggedIn,
                    S = e.navProps,
                    k = e.footerProps,
                    N = this.state.isPostTTI,
                    x = a.default({
                        "upgrade-page": !0,
                        "type--arbor": !0
                    });
                return n.default.createElement("div", {
                    className: x
                }, n.default.createElement(l.TaurusNav, r.__assign({}, S, {
                    trademarkBusiness: v.trademarkBusiness,
                    scrollThreshold: this.state.scrollThreshold,
                    content: o.nav
                })), n.default.createElement(u.Header, {
                    content: o.header,
                    experiments: b,
                    inSetupFlow: t,
                    isBusinessDomainUser: s,
                    paths: i,
                    setScrollThreshold: this.setScrollThreshold
                }), b.expMontanaMasterSwitch ? [n.default.createElement(f.UpgradeMediaText, {
                    content: o.professional
                }), n.default.createElement(f.UpgradeMediaText, {
                    content: o.plus,
                    backgroundColor: "ink",
                    layout: "textRight",
                    textColor: "panda-white",
                    titleColor: "wheat"
                })] : [n.default.createElement(m.Sharing, {
                    content: o.sharing,
                    locale: C,
                    isPostTTI: N
                }), n.default.createElement(g.Sync, {
                    content: o.sync,
                    locale: C,
                    isPostTTI: N
                }), n.default.createElement(p.Security, {
                    content: o.security,
                    locale: C,
                    isPostTTI: N
                }), n.default.createElement(_.Storage, {
                    content: o.storage,
                    trademarks: v,
                    displayStrings: y,
                    loggedIn: E
                })], n.default.createElement(c.Features, {
                    content: o.features,
                    isMontana: b.expMontanaMasterSwitch
                }), n.default.createElement(d.Bottom, {
                    content: o.bottom,
                    experiments: b,
                    inSetupFlow: t,
                    paths: i
                }), n.default.createElement(h, {
                    backgroundColor: k.backgroundColor,
                    textColor: k.textColor,
                    content: k.content
                }))
            }, t
        })(n.default.Component);
    t.UpgradePage = o.requireCssWithComponent(b, ["/static/css/accessibility-vfliGZNRm.css", "/static/css/font_sharp_grotesk-vfle4tE4q.css", "/static/css/growth_pages/upgrade/upgrade_page-vflZZ4i1b.css", "/static/js/spectrum-arbor/index.web-vflaoDP_Q.css"])
}), define("modules/clean/react/payments/common/components/taurus_nav", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/core/i18n", "modules/clean/react/rebrand/elements/rebrand_nav", "modules/clean/react/rebrand/elements/rebrand_buttons"], function(e, t, r, a, n, s, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var l = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.renderNavContentRight = function() {
                var e = {
                        trademark_business: t.props.trademarkBusiness
                    },
                    r = t.props,
                    n = r.content,
                    o = r.trackingIds,
                    i = n && n.ctaPreface ? n.ctaPreface : s._("Interested in Dropbox for your team?"),
                    l = n && n.cta ? n.cta : s._("Try %(trademark_business)s").format(e);
                return a.default.createElement("div", {
                    className: "taurus-nav__content"
                }, a.default.createElement("div", {
                    className: "taurus-nav__compare"
                }, a.default.createElement("a", {
                    href: "/plans?trigger=nr",
                    "data-trackingid": o && o.navLeft
                }, s._("Compare Plans"))), a.default.createElement("div", {
                    className: "taurus-nav__business"
                }, a.default.createElement("p", {
                    className: "taurus-nav__business-copy type--copy-mini"
                }, i), a.default.createElement("a", {
                    href: "/business",
                    "data-trackingid": o && o.navRight
                }, l)))
            }, t.renderScrolledNavContentRight = function() {
                var e = t.props,
                    r = e.content,
                    n = e.trackingIds,
                    o = e.zeusWideButton,
                    l = r && r.ctaScrolled ? r.ctaScrolled : s._("Choose your plan"),
                    d = r && r.ctaScrolledHref ? r.ctaScrolledHref : "/buy",
                    c = o ? "wide" : "standard";
                return r && (r.ctaScrolledPreface || r.ctaScrolledPrefaceLink && r.ctaScrolledPrefaceLinkHref) ? a.default.createElement("div", {
                    className: "taurus-nav__content"
                }, a.default.createElement("div", {
                    className: "taurus-nav__alt-product"
                }, r.ctaScrolledPreface && a.default.createElement("p", {
                    className: "taurus-nav__alt-product-copy type--copy-mini"
                }, r.ctaScrolledPreface), r.ctaScrolledPrefaceLink && r.ctaScrolledPrefaceLinkHref && a.default.createElement("a", {
                    href: r.ctaScrolledPrefaceLinkHref
                }, r.ctaScrolledPrefaceLink)), a.default.createElement("div", {
                    className: "taurus-nav__button"
                }, a.default.createElement(i.RebrandButtonAnchor, {
                    href: d,
                    size: "small"
                }, l))) : a.default.createElement(i.RebrandButtonAnchor, {
                    href: d,
                    size: "small",
                    width: c,
                    trackingId: n && n.navScrolledRight
                }, l)
            }, t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return a.default.createElement(o.RebrandNav, {
                glyph: this.props.glyph,
                wordmark: this.props.wordmark,
                navContentRight: this.renderNavContentRight(),
                scrolledNavContentRight: this.renderScrolledNavContentRight(),
                className: "taurus-nav",
                scrollThreshold: this.props.scrollThreshold
            })
        }, t
    })(a.default.Component);
    t.TaurusNavElement = l, t.TaurusNav = n.requireCssWithComponent(l, ["/static/css/payments/taurus_nav-vflixQY_v.css"])
}), define("modules/clean/react/rebrand/elements/rebrand_nav", ["require", "exports", "tslib", "react", "modules/clean/react/css", "external/classnames", "modules/clean/react/arbor/aspen/elements/arbor_logo", "modules/clean/raf_throttle"], function(e, t, r, a, n, s, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), s = r.__importDefault(s);
    var l = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.scrollThrottle = new i.RafThrottle(r.handleScroll.bind(r)), r.state = {
                isScrolled: !1
            }, r
        }
        return r.__extends(t, e), t.prototype.handleScroll = function() {
            var e = window.pageYOffset;
            this.setState({
                isScrolled: e >= this.props.scrollThreshold
            })
        }, t.prototype.componentDidMount = function() {
            window.addEventListener("scroll", this.scrollThrottle.request)
        }, t.prototype.componentWillUnmount = function() {
            window.removeEventListener("scroll", this.scrollThrottle.request)
        }, t.prototype.render = function() {
            var e = this.props.logoCollapseOnScroll ? this.state.isScrolled : !!this.props.logoExpandOnScroll && !this.state.isScrolled,
                t = this.props.scrolledGlyph && this.state.isScrolled ? this.props.scrolledGlyph : this.props.glyph;
            return a.default.createElement("div", null, a.default.createElement("nav", {
                className: s.default("rebrand-nav__nav", {
                    "rebrand-nav__nav-is-showing-border-bottom": this.state.isScrolled
                }, this.props.className)
            }, a.default.createElement(o.ArborLogo, {
                presetPlatform: this.props.logoPlatform,
                glyphOnly: e || this.props.logoGlyphOnly,
                noLogoLink: this.props.noLogoLink,
                glyph: t,
                wordmark: this.props.wordmark
            }), a.default.createElement("div", null, this.state.isScrolled ? this.props.scrolledNavContentRight : this.props.navContentRight)), this.props.showPlaceholder && a.default.createElement("div", {
                className: "rebrand-nav__placeholder"
            }))
        }, t.defaultProps = {
            scrollThreshold: 350,
            showPlaceholder: !0
        }, t
    })(a.default.Component);
    t.RebrandNav = n.requireCssWithComponent(l, ["/static/css/rebrand/elements/nav-vfl7LKOsG.css"])
}), define("modules/clean/react/rebrand/elements/triangle", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/css", "modules/core/i18n", "spectrum-arbor/util/breakpoint_class_generator", "spectrum-arbor/atoms/arbor_copy", "spectrum-arbor/atoms/arbor_grid_element"], function(e, t, r, a, n, s, o, i, l, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a), n = r.__importDefault(n);
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.classGenerator = new i.BreakpointClassGenerator, t.showMultipleQuotas = function() {
                var e = t.props,
                    r = e.showProfessional,
                    a = e.displayStrings;
                return r === !0 && a.proSpaceShortFormGBRounded !== a.plusSpaceShortFormGBRounded
            }, t.renderTalkBubble = function() {
                var e, r = t.props,
                    s = r.talkBubbleAlignment,
                    i = r.trademarks,
                    d = r.displayStrings,
                    c = t.classGenerator.getClassesFromBreakpoints(s || "right", "space-bar-triangle__talk-bubble"),
                    u = o._("Your current plan is %(label)s %(size)s").format({
                        label: i.dropboxBasic,
                        size: d.basicSpaceShortFormGB
                    });
                return a.default.createElement(l.ArborCopy, {
                    size: "micro",
                    className: n.default((e = {
                        "space-bar-triangle__talk-bubble": !0,
                        "space-bar-triangle__talk-bubble--multi": t.showMultipleQuotas()
                    }, e[c] = !0, e))
                }, a.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "space-bar-triangle__talk-bubble__copy"
                }, o._("Your current plan")), a.default.createElement("span", {
                    className: "ax-visually-hidden"
                }, u))
            }, t
        }
        return r.__extends(t, e), t.prototype.renderTriangleSVG = function(e, t) {
            void 0 === t && (t = !1);
            var r, n = a.default.createElement("polygon", {
                points: "0, 286 129, 211.5 129, 286",
                className: "space-bar-triangle__chart__fg"
            });
            t && (n = a.default.createElement("polygon", {
                points: "0, 286 50, 211.5 50, 286",
                className: "space-bar-triangle__chart__fg",
                clipPath: "url(#triangle)"
            }), r = a.default.createElement("line", {
                x1: "275",
                y1: "286",
                x2: "275",
                y2: "0",
                strokeDasharray: "10, 6",
                strokeWidth: "2",
                className: "space-bar-triangle__chart__line",
                clipPath: "url(#triangle)"
            }));
            var s = "white" === this.props.chartColor ? a.default.createElement("path", {
                d: "m 0 286 l 494 0 l 0 -286 z ",
                className: "space-bar-triangle__chart__bg"
            }) : a.default.createElement("polygon", {
                points: "0, 286 495, 0 495, 286",
                className: "space-bar-triangle__chart__bg"
            });
            return a.default.createElement("svg", {
                viewBox: "0 0 495 286",
                "aria-labelledby": "triangle_svg_title",
                role: "img"
            }, a.default.createElement("title", {
                id: "triangle_svg_title"
            }, e), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                id: "triangle"
            }, a.default.createElement("polygon", {
                points: "0, 286 495, 0 495, 286"
            }))), s, n, r)
        }, t.prototype.getPlusLabel = function(e) {
            void 0 === e && (e = !1);
            var t = this.props,
                r = t.trademarks,
                a = t.showProfessional,
                n = r.dropboxPlus;
            return a && !e ? n = o._("%(dropbox_plus)s or %(trademark_professional)s").format({
                dropbox_plus: r.dropboxPlus,
                trademark_professional: r.trademarkProfessional
            }) : a && (n = r.trademarkPlus), n
        }, t.prototype.renderXAxis = function(e) {
            void 0 === e && (e = !1);
            var t = this.props,
                r = t.textColor,
                n = t.displayStrings,
                s = t.trademarks,
                o = [{
                    label: s.dropboxBasic,
                    size: n.basicSpaceShortFormGB
                }, {
                    label: this.getPlusLabel(e),
                    size: e ? n.plusSpaceShortFormGBRounded : n.plusSpaceLongFormRounded
                }];
            e && o.push({
                label: s.trademarkProfessional,
                size: n.proSpaceShortFormGBRounded
            });
            var i = 3 === o.length ? [3, 3, 5] : [6, 6],
                c = 3 === o.length ? [6, 7, 11] : [12, 12];
            return a.default.createElement(d.ArborGridElement, {
                direction: "row",
                marginTopSize: "micro",
                childSpacing: {
                    base: "space-between",
                    medium: "flex-start"
                }
            }, o.map(function(e, t) {
                var n = i[t],
                    s = c[t];
                return a.default.createElement(d.ArborGridElement, {
                    key: "render-x-axis-" + e.label,
                    columnWidth: {
                        base: n,
                        medium: s
                    },
                    alignment: 0 === t ? "flex-start" : "flex-end"
                }, a.default.createElement(l.ArborCopy, {
                    tag: "p",
                    size: "micro",
                    color: r
                }, e.label), a.default.createElement(l.ArborCopy, {
                    tag: "p",
                    size: "micro",
                    bolded: !0,
                    color: r
                }, e.size))
            }))
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.showTalkBubble,
                r = e.className,
                n = e.chartColor,
                s = e.trademarks,
                i = this.showMultipleQuotas(),
                l = o._("Out of Space, Visualization"),
                d = o._("An abstract illustration of your current storage plan, compared to %(dropbox_plus)s and %(trademark_professional)s, in the shape of a triangle.").format({
                    dropbox_plus: s.dropboxPlus,
                    trademark_professional: s.trademarkProfessional
                });
            return a.default.createElement("figure", {
                className: "space-bar-triangle " + r
            }, a.default.createElement("div", {
                className: "space-bar-triangle__container"
            }, a.default.createElement("div", {
                className: "space-bar-triangle__chart space-bar-triangle__chart--" + n
            }, a.default.createElement("div", {
                className: "space-bar-triangle__chart__inside"
            }, this.renderTriangleSVG(l, i), t && this.renderTalkBubble())), this.renderXAxis(i)), a.default.createElement("figcaption", {
                className: "ax-visually-hidden"
            }, d))
        }, t.defaultProps = {
            className: "",
            chartColor: "orchid",
            showTalkBubble: !0,
            talkBubbleAlignment: "right",
            textColor: "white",
            showProfessional: !0
        }, t
    })(a.default.PureComponent);
    t.Triangle = s.requireCssWithComponent(c, ["/static/css/rebrand/elements/triangle-vflPXbtWY.css"])
}), define("spectrum-arbor/atoms/arbor_button", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum-arbor/util/breakpoint_class_generator", "spectrum-arbor/util/devices"], function(e, t, r, a, n, s, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), n = r.__importDefault(n), s = r.__importStar(s);
    var l = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elementClass = "arbor-button", t.classGenerator = new o.BreakpointClassGenerator, t.renderLoadingCircles = function() {
                for (var e = t.elementClass + "__loading-circle", r = [], a = 0; a < 3; a++) r.push(s.createElement("span", {
                    className: n.default(e, e + "--" + t.props.theme),
                    key: a
                }));
                return s.createElement("div", {
                    className: t.elementClass + "__loading-circles"
                }, r)
            }, t
        }
        return a.__extends(t, e), Object.defineProperty(t.prototype, "verticalSpacingClasses", {
            get: function() {
                var e = this.props,
                    t = e.marginTopSize,
                    r = e.marginBottomSize;
                return n.default(t ? this.classGenerator.getClassesFromBreakpoints(t, "arbor-top-margin") : void 0, r ? this.classGenerator.getClassesFromBreakpoints(r, "arbor-bottom-margin") : void 0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "paddingClass", {
            get: function() {
                var e = this.props,
                    t = e.size,
                    r = e.padding;
                return "standard" === r ? this.elementClass + "--" + r + "-padding" : this.elementClass + "--" + t + "-" + r + "-padding"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "buttonClasses", {
            get: function() {
                var e, t = this.props,
                    r = t.className,
                    a = t.disabled,
                    s = t.fullWidth,
                    o = t.href,
                    l = t.loading,
                    d = t.outlined,
                    c = t.size,
                    u = t.theme;
                t.trackingId;
                return n.default(this.elementClass, this.paddingClass, this.verticalSpacingClasses, this.elementClass + "--" + c + "-size", this.elementClass + "--" + u, (e = {}, e[this.elementClass + "--disabled"] = !!a && !o, e[this.elementClass + "--full-width"] = !!s, e[this.elementClass + "--loading"] = !!l && !o, e[this.elementClass + "--outlined"] = !!d && "panda-white" === u, e[this.elementClass + "--touch-device"] = !!i.isTouchDevice(), e), r)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "linkAttributes", {
            get: function() {
                var e = this.props,
                    t = e.href,
                    r = e.target,
                    a = e.rel,
                    n = {
                        target: void 0,
                        rel: void 0
                    };
                return t && (n.target = r ? r : void 0, "_blank" == r && (n.rel = a ? a : "noreferrer")), n
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            var e, t = this.props,
                r = t.disabled,
                n = t.href,
                o = t.loading,
                i = (t.outlined, t.size, t.theme, t.padding, t.trackingId),
                l = this.linkAttributes,
                d = n ? "a" : "button",
                c = n ? {
                    "data-trackingid": i
                } : {
                    "data-uxa-log": i
                };
            return !n && o && (e = this.renderLoadingCircles()), s.createElement(d, a.__assign({
                className: this.buttonClasses,
                disabled: !n && (r || o),
                href: n,
                onClick: this.props.onClick,
                target: l.target,
                rel: l.rel
            }, c), e, this.props.children)
        }, t.defaultProps = {
            size: "standard",
            padding: "wide",
            theme: "dbx-blue"
        }, t
    })(s.Component);
    t.ArborButton = l
}), define("spectrum-arbor/atoms/arbor_copy", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum-arbor/util/breakpoint_class_generator"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), n = r.__importDefault(n), s = r.__importStar(s);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elementClass = "arbor-copy", t.classGenerator = new o.BreakpointClassGenerator, t
        }
        return a.__extends(t, e), Object.defineProperty(t.prototype, "verticalSpacingClasses", {
            get: function() {
                var e = this.props,
                    t = e.marginTopSize,
                    r = e.marginBottomSize;
                return n.default(t ? this.classGenerator.getClassesFromBreakpoints(t, "arbor-top-margin") : void 0, r ? this.classGenerator.getClassesFromBreakpoints(r, "arbor-bottom-margin") : void 0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "copyClasses", {
            get: function() {
                var e, t = this.props,
                    r = t.bolded,
                    a = t.className,
                    s = t.color,
                    o = t.size;
                return n.default(this.elementClass, this.elementClass + "--" + o, this.verticalSpacingClasses, "arbor-foreground-color--" + s, (e = {}, e[this.elementClass + "--bold"] = !!r, e), a)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            var e = this.props,
                t = e.children,
                r = e.tag,
                a = e.htmlFor,
                n = r;
            return "label" === r ? s.createElement("label", {
                className: this.copyClasses,
                htmlFor: a
            }, t) : s.createElement(n, {
                className: this.copyClasses
            }, t)
        }, t.defaultProps = {
            color: "panda-black",
            size: "standard",
            tag: "p"
        }, t
    })(s.Component);
    t.ArborCopy = i
}), define("spectrum-arbor/atoms/arbor_grid_container", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum-arbor/util/breakpoint_class_generator"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), n = r.__importDefault(n), s = r.__importStar(s);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elementClass = "arbor-grid-container", t.elementUsableAreaClass = t.elementClass + "__usable-area", t.classGenerator = new o.BreakpointClassGenerator, t.getClassesForPaddingSize = function(e, r) {
                var a = r ? r : t.props.verticalPaddingSize,
                    n = "bottom" === e ? "arbor-bottom-padding" : "arbor-top-padding";
                return t.classGenerator.getClassesFromBreakpoints(a, n)
            }, t.setContainerRef = function(e) {
                t.setRef(e, 0)
            }, t.setRef = function(e, r) {
                var a = t.props,
                    n = a.setContainerRef,
                    s = a.setUsableAreaRef,
                    o = 0 === r ? n : s;
                e && o && o(e)
            }, t.setUsableAreaRef = function(e) {
                t.setRef(e, 1)
            }, t
        }
        return a.__extends(t, e), Object.defineProperty(t.prototype, "paddingClasses", {
            get: function() {
                var e = this.props,
                    t = e.bottomPaddingSize,
                    r = e.topPaddingSize,
                    a = e.verticalPaddingSize;
                return r || t ? n.default(this.getClassesForPaddingSize("top", r), this.getClassesForPaddingSize("bottom", t)) : this.classGenerator.getClassesFromBreakpoints(a, "arbor-padding")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "containerClasses", {
            get: function() {
                var e, t = this.props,
                    r = t.backgroundColor,
                    a = t.className,
                    s = t.containerRelative;
                return n.default(this.elementClass, this.paddingClasses, (e = {}, e["arbor-background-color--" + r] = !!r, e[this.elementClass + "--relative"] = !!s, e), a)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "usableAreaClasses", {
            get: function() {
                var e, t = this.props,
                    r = t.alignment,
                    a = t.childSpacing,
                    s = t.direction,
                    o = t.usableAreaClassName,
                    i = t.usableAreaRelative,
                    l = t.widthType;
                return n.default(this.elementUsableAreaClass, this.elementUsableAreaClass + "--" + l + "-width", this.classGenerator.getClassesFromBreakpoints(s, "arbor-direction"), this.classGenerator.getClassesFromBreakpoints(r, "arbor-align"), (e = {}, e[this.classGenerator.getClassesFromBreakpoints(a, "arbor-spacing")] = !!a, e[this.elementUsableAreaClass + "--relative"] = !!i, e), o)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            var e = this.props,
                t = e.children,
                r = e.tag,
                a = e.onTransitionEnd,
                n = e.onAnimationEnd,
                o = r;
            return s.createElement(o, {
                className: this.containerClasses,
                onAnimationEnd: n,
                onTransitionEnd: a,
                ref: this.setContainerRef
            }, s.createElement("div", {
                className: this.usableAreaClasses,
                ref: this.setUsableAreaRef
            }, t))
        }, t.defaultProps = {
            alignment: {
                base: "flex-start",
                medium: "center"
            },
            childSpacing: {
                base: "flex-start",
                medium: "space-between"
            },
            containerRelative: !1,
            direction: {
                base: "column",
                medium: "row"
            },
            tag: "section",
            usableAreaRelative: !1,
            verticalPaddingSize: {
                base: "xl",
                medium: "jumbo"
            },
            widthType: "standard"
        }, t
    })(s.Component);
    t.ArborGridContainer = i
}), define("spectrum-arbor/atoms/arbor_grid_element", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum-arbor/util/breakpoint_class_generator"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), n = r.__importDefault(n), s = r.__importStar(s);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elementClass = "arbor-grid-element", t.classGenerator = new o.BreakpointClassGenerator, t.baseColumnCount = 12, t.mediumPlusColumnCount = 24, t.getColumnFraction = function(e) {
                if ("number" == typeof e) return t.reduceFraction(e, t.baseColumnCount);
                var r = function(e) {
                        return "number" == typeof e
                    },
                    a = e.base,
                    n = e.medium,
                    s = e.large;
                return {
                    base: r(a) ? t.reduceFraction(a, t.baseColumnCount) : void 0,
                    medium: r(n) ? t.reduceFraction(n, t.mediumPlusColumnCount) : t.undefinedOrZero(a),
                    large: r(s) ? t.reduceFraction(s, t.mediumPlusColumnCount) : t.undefinedOrZero(n)
                }
            }, t.reduceFraction = function(e, t) {
                var r = function(e, t) {
                        return t ? r(t, e % t) : e
                    },
                    a = r(e, t);
                return e / a + "-" + t / a
            }, t.setRef = function(e) {
                var r = t.props.setRef;
                e && r && r(e)
            }, t.undefinedOrZero = function(e) {
                if (0 === e) return t.reduceFraction(0, t.mediumPlusColumnCount)
            }, t
        }
        return a.__extends(t, e), Object.defineProperty(t.prototype, "elementClasses", {
            get: function() {
                var e, t = this.props,
                    r = t.alignment,
                    a = t.childSpacing,
                    s = t.className,
                    o = t.columnWidth,
                    i = t.direction,
                    l = t.marginBottomSize,
                    d = t.marginLeftColumns,
                    c = t.marginRightColumns,
                    u = t.marginTopSize;
                return n.default(this.elementClass, s, this.classGenerator.getClassesFromBreakpoints(r, "arbor-align"), this.classGenerator.getClassesFromBreakpoints(this.getColumnFraction(o), this.elementClass + "--width"), this.classGenerator.getClassesFromBreakpoints(i, "arbor-direction"), (e = {}, e[this.classGenerator.getClassesFromBreakpoints(this.getColumnFraction(d), "arbor-left-margin")] = !!d, e[this.classGenerator.getClassesFromBreakpoints(this.getColumnFraction(c), "arbor-right-margin")] = !!c, e[this.classGenerator.getClassesFromBreakpoints(u, "arbor-top-margin")] = !!u, e[this.classGenerator.getClassesFromBreakpoints(l, "arbor-bottom-margin")] = !!l, e[this.classGenerator.getClassesFromBreakpoints(a, "arbor-spacing")] = !!a, e))
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            var e = this.props,
                t = e.children,
                r = e.tag,
                a = e.onTransitionEnd,
                n = e.onAnimationEnd,
                o = r;
            return s.createElement(o, {
                className: this.elementClasses,
                onAnimationEnd: n,
                onTransitionEnd: a,
                ref: this.setRef
            }, t)
        }, t.defaultProps = {
            alignment: "flex-start",
            direction: "column",
            childSpacing: "flex-start",
            columnWidth: 12,
            marginLeftColumns: 0,
            marginRightColumns: 0,
            marginTopSize: 0,
            marginBottomSize: 0,
            tag: "div"
        }, t
    })(s.Component);
    t.ArborGridElement = i
}), define("spectrum-arbor/atoms/arbor_headline", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum-arbor/util/breakpoint_class_generator"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), n = r.__importDefault(n), s = r.__importStar(s);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elementClass = "arbor-headline", t.classGenerator = new o.BreakpointClassGenerator, t
        }
        return a.__extends(t, e), Object.defineProperty(t.prototype, "titleStyleFromTag", {
            get: function() {
                switch (this.props.tag) {
                    case "h1":
                        return "title-1";
                    case "h2":
                        return "title-2";
                    case "h3":
                        return "title-3";
                    case "h4":
                        return "title-4";
                    case "h5":
                        return "title-5";
                    default:
                        return "title-6"
                }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "verticalSpacingClasses", {
            get: function() {
                var e = this.props,
                    t = e.marginTopSize,
                    r = e.marginBottomSize;
                return n.default(t ? this.classGenerator.getClassesFromBreakpoints(t, "arbor-top-margin") : void 0, r ? this.classGenerator.getClassesFromBreakpoints(r, "arbor-bottom-margin") : void 0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "headlineClasses", {
            get: function() {
                var e, t = this.props,
                    r = t.className,
                    a = t.color,
                    s = t.styleOverride,
                    o = t.weight,
                    i = t.width,
                    l = s ? s : this.titleStyleFromTag;
                return n.default(this.elementClass, this.verticalSpacingClasses, this.elementClass + "--" + i, this.elementClass + "--" + l, "arbor-foreground-color--" + a, r, (e = {}, e[this.elementClass + "--" + o] = !!o, e))
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            var e = this.props.tag;
            return s.createElement(e, {
                className: this.headlineClasses
            }, this.props.children)
        }, t.defaultProps = {
            color: "panda-black",
            width: "22"
        }, t
    })(s.Component);
    t.ArborHeadline = i
}), define("spectrum-arbor/atoms/arbor_link", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum-arbor/util/devices"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), n = r.__importDefault(n), s = r.__importStar(s);
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elementClass = "arbor-link", t
        }
        return a.__extends(t, e), Object.defineProperty(t.prototype, "linkClasses", {
            get: function() {
                var e;
                return n.default(this.elementClass, "arbor-foreground-color--" + this.props.theme, this.elementClass + "--" + this.props.size, this.elementClass + "--" + this.props.hoverStyle + "-style", this.props.className, (e = {}, e[this.elementClass + "--touch-device"] = !!o.isTouchDevice(), e))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "linkRel", {
            get: function() {
                var e = this.props,
                    t = e.rel;
                if ("_blank" == e.target) return t ? t : "noreferrer"
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.render = function() {
            var e = this.props,
                t = e.ariaLabel,
                r = e.children,
                a = e.href,
                n = e.onClick,
                o = e.onTransitionEnd,
                i = e.tag,
                l = e.target,
                d = e.trackingId,
                c = i;
            return s.createElement(c, {
                className: this.linkClasses,
                href: a,
                onClick: n ? n : void 0,
                rel: "a" === i ? this.linkRel : void 0,
                target: "a" === i ? l : void 0,
                "aria-label": t,
                onTransitionEnd: o ? o : void 0,
                "data-trackingid": d ? d : void 0
            }, r)
        }, t.defaultProps = {
            hoverStyle: "text",
            size: "standard",
            tag: "a",
            theme: "panda-black"
        }, t
    })(s.Component);
    t.ArborLink = i
}), define("spectrum-arbor/planks/arbor_media_text", ["require", "exports", "tslib", "tslib", "react", "spectrum-arbor/atoms/arbor_grid_container", "spectrum-arbor/atoms/arbor_grid_element"], function(e, t, r, a, n, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importStar(a), n = r.__importStar(n), t.ArborMediaText = function(e) {
        return "fullWidth" === e.layout ? n.createElement(l, a.__assign({}, e)) : n.createElement(t.ArborSideBySideMediaText, a.__assign({}, e))
    }, t.ArborMediaText.displayName = "ArborMediaText";
    var i = function(e) {
        return "number" == typeof e ? 12 - e - 1 > 0 ? 12 - e - 1 : e : {
            base: e.base,
            medium: e.medium ? 24 - e.medium - 2 : 24,
            large: e.large ? 24 - e.large - 2 : void 0
        }
    };
    t.ArborSideBySideMediaText = function(e) {
        var t = e.backgroundColor,
            r = e.className,
            a = e.layout,
            l = e.media,
            d = e.tag,
            c = e.text,
            u = e.bottomPaddingSize,
            p = e.topPaddingSize,
            m = e.verticalPaddingSize,
            _ = e.mediaColumnWidth,
            g = e.textColumnWidth,
            f = e.mediaMarginBottom,
            h = "textRight" === a,
            b = {
                medium: "row" + (h ? "" : "-reverse")
            };
        return _ || g ? !g && _ ? g = i(_) : !_ && g && (_ = i(g)) : (_ = {
            base: 12,
            medium: 11
        }, g = {
            base: 12,
            medium: 11
        }), n.createElement(s.ArborGridContainer, {
            backgroundColor: t,
            className: r,
            childSpacing: "space-between",
            direction: b,
            bottomPaddingSize: u,
            topPaddingSize: p,
            verticalPaddingSize: m,
            tag: d
        }, n.createElement(o.ArborGridElement, {
            columnWidth: _,
            direction: "row",
            marginTopSize: "none",
            marginBottomSize: f,
            className: "arbor-media-text__media"
        }, l), n.createElement(o.ArborGridElement, {
            columnWidth: g,
            direction: "row"
        }, c))
    }, t.ArborSideBySideMediaText.defaultProps = {
        verticalPaddingSize: {
            base: "large",
            medium: "xl"
        },
        mediaMarginBottom: {
            base: "large",
            medium: "none"
        }
    }, t.ArborSideBySideMediaText.displayName = "ArborSideBySideMediaText";
    var l = function(e) {
        var t = e.backgroundColor,
            r = e.className,
            a = e.media,
            i = e.tag,
            l = e.text,
            d = e.bottomPaddingSize,
            c = e.topPaddingSize,
            u = e.verticalPaddingSize,
            p = e.mediaMarginBottom,
            m = {
                medium: "column-reverse"
            },
            _ = {
                base: "center",
                medium: "flex-start"
            },
            g = {
                base: "none",
                medium: "xl"
            };
        return n.createElement(s.ArborGridContainer, {
            alignment: _,
            backgroundColor: t,
            className: r,
            direction: m,
            tag: i,
            bottomPaddingSize: d,
            topPaddingSize: c,
            verticalPaddingSize: u
        }, n.createElement(o.ArborGridElement, {
            columnWidth: {
                base: 12,
                medium: 18
            },
            direction: "row",
            marginLeftColumns: {
                medium: 3
            },
            marginRightColumns: {
                medium: 3
            },
            marginTopSize: g,
            marginBottomSize: p,
            className: "arbor-media-text__media"
        }, a), n.createElement(o.ArborGridElement, {
            columnWidth: {
                base: 12,
                medium: 18
            },
            direction: "row",
            marginLeftColumns: {
                medium: 3
            },
            marginRightColumns: {
                medium: 3
            }
        }, l))
    };
    l.defaultProps = {
        verticalPaddingSize: {
            base: "large",
            medium: "xl"
        },
        mediaMarginBottom: {
            base: "large",
            medium: "none"
        }
    }, l.displayName = "ArborFullWidthMediaText"
}), define("spectrum-arbor/util/breakpoint_class_generator", ["require", "exports", "tslib", "classnames"], function(e, t, r, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = r.__importDefault(a);
    var n = (function() {
        function e() {
            this.getClassesFromBreakpoints = function(e, t) {
                var r;
                if ("string" == typeof e || "number" == typeof e) return t + "--" + e.toString();
                var n = e,
                    s = n.base,
                    o = n.medium,
                    i = n.large;
                return a.default((r = {}, r[t + "--" + s] = !!s, r[t + "--" + o + "--medium"] = !!o, r[t + "--" + i + "--large"] = !!i, r))
            }
        }
        return e
    })();
    t.BreakpointClassGenerator = n
}), define("spectrum-arbor/util/devices", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isTouchDevice = function() {
        if ("undefined" != typeof window) return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    }
});
//# sourceMappingURL=pkg-upgrade.min.js-vflIsziNR.map