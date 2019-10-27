(window.webpackJsonp = window.webpackJsonp || []).push([
    [31], {
        "./node_modules/lodash/_baseEach.js": function(e, t, n) {
            var r = n("./node_modules/lodash/_baseForOwn.js"),
                a = n("./node_modules/lodash/_createBaseEach.js")(r);
            e.exports = a
        },
        "./node_modules/lodash/_baseFilter.js": function(e, t, n) {
            var r = n("./node_modules/lodash/_baseEach.js");
            e.exports = function(e, t) {
                var n = [];
                return r(e, function(e, r, a) {
                    t(e, r, a) && n.push(e)
                }), n
            }
        },
        "./node_modules/lodash/_createBaseEach.js": function(e, t, n) {
            var r = n("./node_modules/lodash/isArrayLike.js");
            e.exports = function(e, t) {
                return function(n, a) {
                    if (null == n) return n;
                    if (!r(n)) return e(n, a);
                    for (var o = n.length, l = t ? o : -1, c = Object(n);
                        (t ? l-- : ++l < o) && !1 !== a(c[l], l, c););
                    return n
                }
            }
        },
        "./node_modules/lodash/negate.js": function(e, t) {
            var n = "Expected a function";
            e.exports = function(e) {
                if ("function" != typeof e) throw new TypeError(n);
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            }
        },
        "./node_modules/lodash/reject.js": function(e, t, n) {
            var r = n("./node_modules/lodash/_arrayFilter.js"),
                a = n("./node_modules/lodash/_baseFilter.js"),
                o = n("./node_modules/lodash/_baseIteratee.js"),
                l = n("./node_modules/lodash/isArray.js"),
                c = n("./node_modules/lodash/negate.js");
            e.exports = function(e, t) {
                return (l(e) ? r : a)(e, c(o(t, 3)))
            }
        },
        "./src/framework/design-system/index.ts": function(e, t, n) {
            "use strict";
            var r = n("./src/framework/design-system/components/grid-system/index.ts");
            n.d(t, "a", function() {
                return r.c
            })
        },
        "./src/handlers/LOHomepageHandler.tsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/react/index.js"),
                a = n.n(r),
                o = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                l = n.n(o),
                c = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                i = n.n(c),
                s = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                m = n.n(s),
                p = n("./node_modules/react-redux/es/index.js"),
                d = n("./src/framework/design-system/components/index.ts"),
                u = n("./src/framework/design-system/index.ts"),
                g = n("./src/framework/reporter/index.ts"),
                h = n("./src/components/optimizely/OptimizelyWrapper.tsx"),
                f = n("./src/framework/design-system/type/index.ts"),
                b = n("./src/framework/style/index.ts");

            function x() {
                return (x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var E = a.a.createElement("circle", {
                    cx: 14,
                    cy: 14,
                    r: 14
                }),
                y = a.a.createElement("path", {
                    d: "M8 14.5l4.73 3.66 7.76-9.87",
                    stroke: "#fff",
                    strokeWidth: 3
                }),
                v = function(e) {
                    return a.a.createElement("svg", x({
                        width: 28,
                        height: 28,
                        viewBox: "0 0 28 28",
                        fill: "transparent"
                    }, e), E, y)
                };

            function w() {
                var e = Object(b.useCx)();
                return r.createElement(v, {
                    className: e(function(e) {
                        return {
                            fill: e.accentColor.fill.normal,
                            marginLeft: "10px",
                            marginRight: "10px",
                            boxShadow: "3px 3px 16px rgba(0, 0, 0, 0.2)",
                            borderRadius: "100px"
                        }
                    })
                })
            }
            var O = function(e) {
                    var t = e.children;
                    return r.createElement(r.Fragment, null, r.createElement(d.b, {
                        display: "flex",
                        marginTop: "18px",
                        whiteSpace: "nowrap"
                    }, r.createElement(w, null), r.createElement(d.b, {
                        display: "inline",
                        xs: {
                            display: "none"
                        }
                    }, r.createElement(f.f, {
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "L",
                            lg: "L",
                            xl: "L"
                        }
                    }, t)), r.createElement(d.b, {
                        display: "none",
                        xs: {
                            display: "inline"
                        }
                    }, r.createElement(f.a, {
                        color: "DARKER",
                        scale: "L"
                    }, t))))
                },
                j = function() {
                    return r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "all-on-medium-section"
                    }, r.createElement(d.b, {
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginTop: "85px",
                        xs: {
                            flexDirection: "column",
                            marginTop: "40px"
                        }
                    }, r.createElement(O, null, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "checkbox-1"
                    }, "World-class publications.")), r.createElement(O, null, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "checkbox-2"
                    }, "Undiscovered voices.")), r.createElement(O, null, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "checkbox-3"
                    }, "Topics you love.")), r.createElement(d.b, {
                        marginTop: "22px",
                        paddingLeft: "34px",
                        whiteSpace: "nowrap",
                        flexGrow: "1",
                        md: {
                            paddingLeft: "0"
                        },
                        sm: {
                            flexBasis: "100%"
                        },
                        xs: {
                            textAlign: "left",
                            paddingLeft: "10px"
                        }
                    }, r.createElement(f.b, {
                        scale: {
                            xs: "XS",
                            sm: "XS",
                            md: "S",
                            lg: "S",
                            xl: "S"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "checkbox-after-text"
                    }, "All on Medium, all for you.")))))
                },
                S = n("./node_modules/@babel/runtime/helpers/extends.js"),
                C = n.n(S),
                _ = n("./src/components/susi/SusiClickable.tsx"),
                k = n("./src/framework/design-system/util/type/toRule.ts");

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var L = function(e) {
                return function(t) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? z(n, !0).forEach(function(t) {
                                m()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        borderRadius: "3px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        boxSizing: "border-box",
                        color: t.backgroundColor,
                        display: "inline-block",
                        fill: t.backgroundColor,
                        background: t.accentColor.fill.normal,
                        borderColor: t.accentColor.fill.normal,
                        ":focus": {
                            outline: "none"
                        },
                        ":hover": {
                            background: t.accentColor.fill.dark,
                            borderColor: t.accentColor.fill.dark,
                            cursor: "pointer"
                        }
                    }, Object(k.a)(function(t) {
                        return {
                            font: t.font.uiRegular,
                            fontSize: "S" === e ? 16 : 24,
                            lineHeight: "S" === e ? 20 : 40
                        }
                    })(t), {
                        height: "S" === e ? "36px" : "62px",
                        padding: "8px 16px",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "S" === e ? "100%" : "339.88px"
                    })
                }
            };

            function T(e) {
                var t = e.entryPoint,
                    n = e.scale,
                    a = void 0 === n ? "L" : n,
                    o = r.useContext(Je),
                    l = (0, o.getFormattedBulkFollowUrl)(o.selectedItems);
                return r.createElement(d.L, null, function(e) {
                    return r.createElement(_.a, C()({
                        operation: "register",
                        susiEntry: t
                    }, !!l && {
                        actionUrl: l
                    }), r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "get-started-button"
                    }, r.createElement("div", {
                        className: e(L(a))
                    }, "Get started")))
                })
            }
            var M = n("./src/framework/reporter/ReporterContext.tsx"),
                D = n("./src/framework/track/PresentationTracker.tsx"),
                R = function() {
                    var e = Object(M.b)(),
                        t = Object(D.a)({
                            onPresentedFn: function() {
                                return e.event("loHomepage.presented", {
                                    source: "landing_home_kicker"
                                })
                            }
                        });
                    return r.createElement("div", {
                        ref: t
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "expand-your-x-section"
                    }, r.createElement(d.b, {
                        marginTop: "65px",
                        maxWidth: "700px",
                        xs: {
                            marginTop: "35px"
                        }
                    }, r.createElement(f.c, {
                        scale: {
                            xs: "L",
                            sm: "L",
                            md: "XXL",
                            lg: "XXL",
                            xl: "XXL"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "expand-your-reading"
                    }, "Expand your reading. ", r.createElement("br", null), " Expand your mind.")), r.createElement(d.b, {
                        marginTop: "50px",
                        xs: {
                            marginTop: "35px"
                        }
                    }, r.createElement(T, {
                        entryPoint: "landing_home_kicker"
                    })))))
                },
                I = n("./src/components/metabar/Logo.tsx"),
                P = n("./src/framework/design-system/util/style/responsiveStyles.ts"),
                A = n("./src/framework/source/index.ts");

            function H() {
                return (H = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var F = a.a.createElement("path", {
                    d: "M125.69.75H9.63L8.58.76c-.76 0-1.53.07-2.28.18-.76.11-1.49.32-2.17.62-.69.31-1.3.7-1.85 1.18A6.37 6.37 0 0 0 .22 6.27c-.13.66-.2 1.33-.2 2L0 9.19V32.3c0 .32 0 .62.02.93 0 .67.07 1.34.2 2a6.04 6.04 0 0 0 2.06 3.52 7.2 7.2 0 0 0 1.85 1.18c.68.3 1.41.51 2.17.63.75.1 1.52.16 2.28.17a54.2 54.2 0 0 0 2.3.02H126.92l1.06-.02c.76 0 1.52-.06 2.28-.17.76-.12 1.49-.33 2.18-.63a7.22 7.22 0 0 0 3.19-2.8c.34-.6.58-1.24.7-1.9.13-.66.2-1.33.22-2v-.93l.01-1.09V10.28 9.2l-.01-.92c-.02-.67-.09-1.34-.21-2a6.07 6.07 0 0 0-.71-1.9 6.99 6.99 0 0 0-3.2-2.8 8.5 8.5 0 0 0-2.17-.63c-.76-.11-1.52-.17-2.28-.18l-1.06-.01h-1.23z",
                    fill: "#A6A6A6"
                }),
                B = a.a.createElement("path", {
                    d: "M9.64 39.74H8.61c-.71-.01-1.43-.07-2.13-.17-.66-.1-1.3-.28-1.9-.54a6.21 6.21 0 0 1-2.75-2.4 5.19 5.19 0 0 1-.62-1.65c-.12-.61-.18-1.23-.19-1.86l-.02-.9V9.26l.02-.9c.01-.62.07-1.24.19-1.85a5.22 5.22 0 0 1 1.78-3.04c.47-.41 1-.75 1.6-1.02.6-.26 1.23-.44 1.89-.54.7-.1 1.42-.15 2.14-.16l1.02-.01h117.27l1.04.01c.71 0 1.42.06 2.12.16.67.1 1.31.28 1.91.55a6.03 6.03 0 0 1 2.76 2.4c.3.52.5 1.07.6 1.64a11.27 11.27 0 0 1 .2 2.76c.02.37.02.72.02 1.08v20.8l-.01 1.06v.92c-.02.62-.08 1.24-.2 1.84a5.18 5.18 0 0 1-1.78 3.04c-.46.41-1 .75-1.6 1.02a7.4 7.4 0 0 1-1.9.54c-.7.1-1.41.16-2.13.16l-1.02.01H9.64z",
                    fill: "#000"
                }),
                V = a.a.createElement("path", {
                    d: "M32.9 21.05a4.93 4.93 0 0 1 2.37-4.16 5.08 5.08 0 0 0-4-2.15c-1.7-.18-3.33 1-4.19 1-.87 0-2.2-.99-3.62-.96a5.35 5.35 0 0 0-4.5 2.73c-1.93 3.35-.49 8.27 1.37 10.98.94 1.32 2.02 2.8 3.45 2.75 1.39-.06 1.91-.88 3.6-.88 1.66 0 2.14.88 3.6.85 1.5-.03 2.43-1.33 3.33-2.67.67-.95 1.18-1.99 1.53-3.1a4.8 4.8 0 0 1-2.94-4.4zM30.16 12.96a4.86 4.86 0 0 0 1.12-3.5c-1.24.14-2.4.73-3.22 1.67a4.63 4.63 0 0 0-1.15 3.36 4.13 4.13 0 0 0 3.25-1.53zM50.51 27.89h-4.75l-1.14 3.35H42.6l4.5-12.42h2.1l4.5 12.42h-2.05l-1.14-3.35zm-4.26-1.55h3.77l-1.86-5.45h-.05l-1.86 5.45zM63.42 26.72c0 2.81-1.51 4.62-3.8 4.62a3.1 3.1 0 0 1-2.85-1.59h-.05v4.49h-1.86V22.19h1.8v1.5h.04a3.22 3.22 0 0 1 2.9-1.6c2.3 0 3.82 1.82 3.82 4.63zm-1.92 0c0-1.84-.95-3.04-2.4-3.04-1.43 0-2.38 1.23-2.38 3.04 0 1.82.95 3.04 2.38 3.04 1.45 0 2.4-1.2 2.4-3.04zM73.43 26.72c0 2.81-1.52 4.62-3.8 4.62a3.1 3.1 0 0 1-2.86-1.59h-.04v4.49h-1.87V22.19h1.8v1.5h.04a3.22 3.22 0 0 1 2.9-1.6c2.3 0 3.83 1.82 3.83 4.63zm-1.92 0c0-1.84-.95-3.04-2.4-3.04-1.43 0-2.39 1.23-2.39 3.04 0 1.82.96 3.04 2.39 3.04 1.45 0 2.4-1.2 2.4-3.04zM80.04 27.78c.14 1.23 1.34 2.04 2.98 2.04 1.57 0 2.7-.8 2.7-1.92 0-.96-.68-1.54-2.3-1.93l-1.6-.4c-2.3-.54-3.36-1.6-3.36-3.34 0-2.14 1.87-3.61 4.54-3.61 2.63 0 4.44 1.47 4.5 3.61H85.6c-.1-1.24-1.14-1.99-2.64-1.99-1.5 0-2.53.76-2.53 1.86 0 .88.65 1.4 2.26 1.8l1.37.33c2.56.6 3.63 1.62 3.63 3.44 0 2.32-1.86 3.78-4.82 3.78-2.76 0-4.63-1.42-4.75-3.67h1.91zM91.72 20.05v2.14h1.73v1.47h-1.73v5c0 .77.35 1.13 1.11 1.13.2 0 .41-.02.61-.04v1.46c-.34.06-.69.1-1.03.08-1.84 0-2.56-.68-2.56-2.44v-5.19h-1.32v-1.47h1.32v-2.14h1.87zM94.45 26.71c0-2.84 1.69-4.63 4.32-4.63 2.63 0 4.3 1.79 4.3 4.63 0 2.86-1.66 4.64-4.3 4.64-2.65 0-4.32-1.78-4.32-4.64zm6.73 0c0-1.95-.9-3.1-2.41-3.1-1.52 0-2.42 1.16-2.42 3.1 0 1.97.9 3.11 2.42 3.11 1.5 0 2.4-1.14 2.4-3.1zM104.62 22.19h1.78v1.54h.04a2.16 2.16 0 0 1 2.19-1.64c.21 0 .43.03.64.07v1.74a2.61 2.61 0 0 0-.84-.11 1.89 1.89 0 0 0-1.95 2.08v5.37h-1.86V22.2zM117.87 28.58c-.25 1.65-1.86 2.77-3.92 2.77-2.64 0-4.28-1.76-4.28-4.6 0-2.83 1.65-4.67 4.2-4.67 2.52 0 4.1 1.72 4.1 4.46v.64h-6.42v.11a2.35 2.35 0 0 0 2.45 2.57 2.07 2.07 0 0 0 2.1-1.28h1.77zm-6.3-2.7h4.54a2.17 2.17 0 0 0-2.23-2.3 2.3 2.3 0 0 0-2.32 2.3zM46.02 9.48a2.66 2.66 0 0 1 2.81 2.96c0 1.9-1.03 3-2.81 3h-2.17V9.48h2.17zm-1.24 5.12h1.13a1.89 1.89 0 0 0 1.98-2.15 1.87 1.87 0 0 0-1.98-2.13h-1.13v4.28zM49.89 13.2a2.13 2.13 0 0 1 2.13-2.35 2.15 2.15 0 0 1 2.13 2.34 2.12 2.12 0 0 1-2.13 2.34 2.15 2.15 0 0 1-2.13-2.34zm3.34 0c0-.98-.44-1.56-1.21-1.56-.78 0-1.21.58-1.21 1.55 0 .99.43 1.55 1.21 1.55.77 0 1.21-.57 1.21-1.55zM59.82 15.44h-.93l-.93-3.31h-.07l-.93 3.31h-.92l-1.25-4.5h.91l.81 3.44h.07l.93-3.44h.85l.93 3.44h.07l.8-3.44h.9l-1.24 4.5zM62.1 10.94h.87v.72h.06a1.35 1.35 0 0 1 1.35-.8 1.48 1.48 0 0 1 1.57 1.67v2.91h-.9v-2.69c0-.72-.3-1.08-.97-1.08a1.04 1.04 0 0 0-1.03.7c-.05.14-.06.3-.05.44v2.63h-.9v-4.5zM67.37 9.18h.9v6.26h-.9V9.18zM69.5 13.2a2.12 2.12 0 0 1 2.14-2.35 2.15 2.15 0 0 1 2.13 2.34 2.13 2.13 0 0 1-2.13 2.34 2.15 2.15 0 0 1-2.14-2.34zm3.35 0c0-.98-.44-1.56-1.21-1.56-.78 0-1.21.57-1.21 1.55 0 .99.43 1.55 1.2 1.55.78 0 1.22-.57 1.22-1.55zM74.7 14.17c0-.8.61-1.28 1.69-1.34l1.22-.07v-.4c0-.47-.31-.74-.92-.74-.5 0-.84.19-.94.5h-.87c.1-.77.82-1.27 1.85-1.27 1.13 0 1.77.57 1.77 1.52v3.07h-.86v-.63h-.07a1.52 1.52 0 0 1-1.35.7 1.37 1.37 0 0 1-1.51-1.34zm2.91-.38v-.38l-1.1.07c-.62.04-.9.25-.9.65s.35.64.83.64a1.07 1.07 0 0 0 1.17-.98zM79.68 13.19c0-1.42.73-2.32 1.87-2.32a1.5 1.5 0 0 1 1.39.79H83V9.18h.89v6.26h-.86v-.7h-.07a1.57 1.57 0 0 1-1.42.78c-1.15 0-1.87-.9-1.87-2.33zm.92 0c0 .96.45 1.53 1.2 1.53.76 0 1.22-.58 1.22-1.53 0-.93-.47-1.53-1.21-1.53-.76 0-1.21.58-1.21 1.53zM87.59 13.2a2.13 2.13 0 0 1 2.13-2.35 2.15 2.15 0 0 1 2.14 2.34 2.13 2.13 0 0 1-2.14 2.34 2.15 2.15 0 0 1-2.13-2.34zm3.35 0c0-.98-.44-1.56-1.22-1.56-.77 0-1.2.58-1.2 1.55 0 .99.43 1.55 1.2 1.55.78 0 1.22-.57 1.22-1.55zM93.05 10.94h.86v.72h.07a1.35 1.35 0 0 1 1.35-.8 1.48 1.48 0 0 1 1.56 1.67v2.91H96v-2.69c0-.72-.32-1.08-.98-1.08a1.04 1.04 0 0 0-1.03.7c-.04.14-.06.3-.05.44v2.63h-.89v-4.5zM101.93 9.82v1.14h.98v.75h-.98v2.31c0 .48.2.68.64.68.12 0 .23 0 .34-.02v.74c-.16.03-.32.05-.48.05-1 0-1.39-.35-1.39-1.22v-2.54h-.72v-.75h.72V9.82h.9zM104.13 9.18h.89v2.48h.07a1.4 1.4 0 0 1 1.38-.8 1.5 1.5 0 0 1 1.55 1.68v2.9h-.89v-2.68c0-.72-.34-1.09-.97-1.09a1.06 1.06 0 0 0-1.13 1.14v2.63h-.9V9.18zM113.23 14.23a1.83 1.83 0 0 1-1.96 1.3 2.06 2.06 0 0 1-2.02-1.45 2.03 2.03 0 0 1-.07-.87 2.08 2.08 0 0 1 2.08-2.36c1.26 0 2.02.86 2.02 2.27v.31h-3.2v.05a1.2 1.2 0 0 0 1.21 1.3 1.09 1.09 0 0 0 1.08-.55h.86zm-3.14-1.45h2.28a1.07 1.07 0 0 0-.3-.83 1.1 1.1 0 0 0-.81-.34 1.16 1.16 0 0 0-1.17 1.17z",
                    fill: "#fff"
                }),
                X = function(e) {
                    return a.a.createElement("svg", H({
                        width: 137,
                        height: 41,
                        viewBox: "0 0 137 41",
                        fill: "none"
                    }, e), F, B, V)
                };

            function W() {
                return (W = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var U = a.a.createElement("path", {
                    d: "M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z",
                    fill: "#000"
                }),
                N = a.a.createElement("path", {
                    d: "M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125zm0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z",
                    fill: "#A6A6A6"
                }),
                G = a.a.createElement("path", {
                    d: "M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2a2.94 2.94 0 0 1 3.4-.6c.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zM55.3 13h-.8V7.7h-1.7V7H57v.7h-1.7V13zM59.9 13V7h.8v6h-.8zM64.1 13h-.8V7.7h-1.7V7h4.1v.7H64V13h.1zM73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zM75.6 13V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z",
                    fill: "#fff",
                    stroke: "#fff",
                    strokeWidth: .2,
                    strokeMiterlimit: 10
                }),
                K = a.a.createElement("path", {
                    d: "M68.1 21.8a4.2 4.2 0 0 0-4.3 4.3c0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8a4.2 4.2 0 0 0-4.3 4.3c0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8a4.72 4.72 0 0 1 8-3.5l1.3-1.3a6.4 6.4 0 0 0-4.5-1.8c-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1a4.3 4.3 0 0 0-4.1 4.3c0 2.4 1.9 4.2 4.1 4.2 1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z",
                    fill: "#fff"
                }),
                Z = a.a.createElement("path", {
                    d: "M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z",
                    fill: "url(#app-google-playstore-button_svg__paint0_linear)"
                }),
                J = a.a.createElement("path", {
                    d: "M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z",
                    fill: "url(#app-google-playstore-button_svg__paint1_linear)"
                }),
                Q = a.a.createElement("path", {
                    d: "M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4z",
                    fill: "url(#app-google-playstore-button_svg__paint2_linear)"
                }),
                q = a.a.createElement("path", {
                    d: "M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z",
                    fill: "url(#app-google-playstore-button_svg__paint3_linear)"
                }),
                Y = a.a.createElement("path", {
                    opacity: .2,
                    d: "M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z",
                    fill: "#000"
                }),
                $ = a.a.createElement("path", {
                    opacity: .12,
                    d: "M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zM32 21.3l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z",
                    fill: "#000"
                }),
                ee = a.a.createElement("path", {
                    opacity: .25,
                    d: "M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5c-1.4-.8-2.5-.2-2.5 1.4V9c0-1.5 1.1-2.2 2.5-1.4z",
                    fill: "#fff"
                }),
                te = a.a.createElement("defs", null, a.a.createElement("linearGradient", {
                    id: "app-google-playstore-button_svg__paint0_linear",
                    x1: 21.8,
                    y1: 8.71,
                    x2: 5.02,
                    y2: 25.49,
                    gradientUnits: "userSpaceOnUse"
                }, a.a.createElement("stop", {
                    stopColor: "#00A0FF"
                }), a.a.createElement("stop", {
                    offset: .01,
                    stopColor: "#00A1FF"
                }), a.a.createElement("stop", {
                    offset: .26,
                    stopColor: "#00BEFF"
                }), a.a.createElement("stop", {
                    offset: .51,
                    stopColor: "#00D2FF"
                }), a.a.createElement("stop", {
                    offset: .76,
                    stopColor: "#00DFFF"
                }), a.a.createElement("stop", {
                    offset: 1,
                    stopColor: "#00E3FF"
                })), a.a.createElement("linearGradient", {
                    id: "app-google-playstore-button_svg__paint1_linear",
                    x1: 33.83,
                    y1: 20,
                    x2: 9.64,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse"
                }, a.a.createElement("stop", {
                    stopColor: "#FFE000"
                }), a.a.createElement("stop", {
                    offset: .41,
                    stopColor: "#FFBD00"
                }), a.a.createElement("stop", {
                    offset: .78,
                    stopColor: "orange"
                }), a.a.createElement("stop", {
                    offset: 1,
                    stopColor: "#FF9C00"
                })), a.a.createElement("linearGradient", {
                    id: "app-google-playstore-button_svg__paint2_linear",
                    x1: 24.83,
                    y1: 22.3,
                    x2: 2.07,
                    y2: 45.05,
                    gradientUnits: "userSpaceOnUse"
                }, a.a.createElement("stop", {
                    stopColor: "#FF3A44"
                }), a.a.createElement("stop", {
                    offset: 1,
                    stopColor: "#C31162"
                })), a.a.createElement("linearGradient", {
                    id: "app-google-playstore-button_svg__paint3_linear",
                    x1: 7.3,
                    y1: .18,
                    x2: 17.46,
                    y2: 10.34,
                    gradientUnits: "userSpaceOnUse"
                }, a.a.createElement("stop", {
                    stopColor: "#32A071"
                }), a.a.createElement("stop", {
                    offset: .07,
                    stopColor: "#2DA771"
                }), a.a.createElement("stop", {
                    offset: .48,
                    stopColor: "#15CF74"
                }), a.a.createElement("stop", {
                    offset: .8,
                    stopColor: "#06E775"
                }), a.a.createElement("stop", {
                    offset: 1,
                    stopColor: "#00F076"
                }))),
                ne = function(e) {
                    return a.a.createElement("svg", W({
                        width: 135,
                        height: 40,
                        viewBox: "0 0 135 40",
                        fill: "none"
                    }, e), U, N, G, K, Z, J, Q, q, Y, $, ee, te)
                },
                re = n("./src/util/routes.ts"),
                ae = n("./src/util/theme.ts"),
                oe = Object(p.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = Object(M.b)(),
                        a = function(e) {
                            return Object(P.a)(e, {
                                backgroundColor: e.backgroundColor,
                                marginTop: {
                                    xs: "60px",
                                    sm: "85px",
                                    md: "85px",
                                    lg: "85px",
                                    xl: "85px"
                                },
                                width: "100%"
                            })
                        },
                        o = r.useContext(Je),
                        l = (0, o.getFormattedBulkFollowUrl)(o.selectedItems),
                        c = Object(D.a)({
                            onPresentedFn: function() {
                                return n.event("loHomepage.presented", {
                                    source: "landing_home_footer"
                                })
                            }
                        }),
                        i = function() {
                            return n.event("loHomepage.appleStoreClicked", {})
                        },
                        s = function() {
                            return n.event("loHomepage.googleStoreClicked", {})
                        };
                    return r.createElement(b.WithTheme, null, function(e) {
                        return r.createElement(b.ThemeProvider, {
                            theme: Object(ae.e)(e)
                        }, r.createElement(b.WithCx, null, function(e) {
                            return r.createElement(A.b, {
                                source: {
                                    name: "landing_home"
                                }
                            }, r.createElement("div", {
                                className: e(a),
                                ref: c
                            }, r.createElement(u.a, {
                                size: "outset"
                            }, r.createElement(d.b, {
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between"
                            }, r.createElement(d.b, {
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "50px",
                                marginBottom: "19px",
                                sm: {
                                    marginTop: "40px"
                                }
                            }, r.createElement(d.b, {
                                marginBottom: "20px"
                            }, r.createElement(I.a, {
                                dark: !0
                            })), r.createElement(d.b, {
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginBottom: "13px"
                            }, r.createElement(d.b, {
                                marginRight: "30px"
                            }, r.createElement(_.a, C()({
                                linkStyle: "OBVIOUS",
                                operation: "register",
                                susiEntry: "landing_home_footer"
                            }, !!l && {
                                actionUrl: l
                            }), r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, "Get started"))), r.createElement(d.b, {
                                marginRight: "30px"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, r.createElement(d.u, {
                                href: Object(re.V)(t)
                            }, "Subscribe"))), r.createElement(d.b, {
                                display: "flex",
                                marginRight: "30px",
                                whiteSpace: "nowrap"
                            }, r.createElement(f.a, {
                                color: "LIGHTER",
                                scale: "L"
                            }, "Have an account?"), r.createElement(_.a, C()({
                                linkStyle: "OBVIOUS",
                                operation: "login",
                                susiEntry: "landing_home_footer"
                            }, !!l && {
                                actionUrl: l
                            }), r.createElement(d.b, {
                                marginLeft: "8px"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, "Sign in"))))), r.createElement(d.b, {
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }, r.createElement(d.b, {
                                marginRight: "30px",
                                whiteSpace: "nowrap"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, r.createElement(d.u, {
                                href: Object(re.a)({
                                    authDomain: t,
                                    autoplay: !1
                                })
                            }, "About Medium"))), r.createElement(d.b, {
                                marginRight: "30px"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, r.createElement(d.u, {
                                href: Object(re.Y)(t)
                            }, "Write"))), r.createElement(d.b, {
                                marginRight: "30px"
                            }, r.createElement(f.a, {
                                scale: "L",
                                color: "DARKER"
                            }, r.createElement(d.u, {
                                href: Object(re.K)(t)
                            }, "Gift"))), r.createElement(d.b, {
                                marginRight: "30px"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, r.createElement(d.u, {
                                href: Object(re.M)()
                            }, "Help"))), r.createElement(d.b, {
                                marginRight: "30px",
                                whiteSpace: "nowrap"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, r.createElement(d.u, {
                                href: "mailto:press@medium.com"
                            }, "Press Contacts"))), r.createElement(d.b, {
                                marginRight: "30px"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, r.createElement(d.u, {
                                href: Object(re.Q)()
                            }, "Careers"))), r.createElement(d.b, {
                                marginRight: "30px"
                            }, r.createElement(f.a, {
                                color: "DARKER",
                                scale: "L"
                            }, r.createElement(d.u, {
                                href: Object(re.yb)()
                            }, "Legal"))))), r.createElement(d.b, {
                                flexDirection: "column",
                                minWidth: "150px"
                            }, r.createElement(d.b, {
                                flexBasis: "100%",
                                marginBottom: "16px"
                            }, r.createElement(f.a, {
                                color: "LIGHTER",
                                scale: "L"
                            }, "Get the Medium app")), r.createElement(d.b, {
                                alignItems: "flex-end",
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                sm: {
                                    flexDirection: "row",
                                    width: "100%"
                                }
                            }, r.createElement(d.b, {
                                marginBottom: "16px",
                                sm: {
                                    marginRight: "16px"
                                }
                            }, r.createElement(d.u, {
                                href: Object(re.P)() + "ct=lo_homepage",
                                onClick: i
                            }, r.createElement(X, null))), r.createElement(d.b, {
                                marginBottom: "16px"
                            }, r.createElement(d.u, {
                                href: Object(re.g)(),
                                onClick: s
                            }, r.createElement(ne, null))))), r.createElement(d.b, {
                                marginBottom: "60px",
                                width: "100%"
                            }, r.createElement(f.a, {
                                color: "LIGHTER",
                                scale: "S"
                            }, "© 2019, A Medium Corporation"))))))
                        }))
                    })
                }),
                le = function() {
                    return r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "hero-title"
                    }, r.createElement(d.b, {
                        maxWidth: "931px",
                        marginTop: "55px",
                        md: {
                            marginTop: "85px"
                        },
                        sm: {
                            marginTop: "18px"
                        }
                    }, r.createElement(f.c, {
                        scale: {
                            xs: "L",
                            sm: "L",
                            md: "XXL",
                            lg: "XXXL",
                            xl: "XXXL"
                        }
                    }, "Get smarter about what matters to you.")))
                },
                ce = function(e) {
                    return Object(P.a)(e, {
                        borderWidth: "1px 0 0",
                        borderColor: e.baseColor.border.light,
                        margin: {
                            xs: "45px 3px 0",
                            sm: "85px auto 0",
                            md: "85px auto 0",
                            lg: "85px auto 0",
                            xl: "85px auto 0"
                        },
                        width: {
                            xs: "100%",
                            sm: "418px",
                            md: "418px",
                            lg: "418px",
                            xl: "418px"
                        }
                    })
                },
                ie = function() {
                    return r.createElement("hr", {
                        className: Object(b.useCx)()(ce)
                    })
                },
                se = function() {
                    var e = Object(b.useCx)(),
                        t = Object(M.b)(),
                        n = Object(D.a)({
                            onPresentedFn: function() {
                                return t.event("loHomepage.presented", {
                                    source: "landing_home_mission"
                                })
                            }
                        });
                    return r.createElement("div", {
                        ref: n
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "no-ads-section"
                    }, r.createElement(d.b, {
                        textAlign: "left",
                        width: "100%"
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "no-ads"
                    }, r.createElement(d.b, {
                        marginBottom: "44px",
                        marginTop: "85px"
                    }, r.createElement(d.b, {
                        marginBottom: "13px"
                    }, r.createElement(f.c, {
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "L",
                            lg: "XXL",
                            xl: "XXL"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "no-ads-title"
                    }, "No ads.", r.createElement(d.b, {
                        display: "none",
                        xs: {
                            display: "inline"
                        }
                    }, r.createElement("br", null)), " ", "No problems."))), r.createElement(f.f, {
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "L",
                            lg: "L",
                            xl: "L"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "no-ads-sub-title"
                    }, "Your privacy stays yours. We don’t sell your data or target you with ads. Ever."))), r.createElement(d.b, {
                        alignItems: "flex-end",
                        display: "flex",
                        flexDirection: "row-reverse",
                        flexWrap: "wrap",
                        md: {
                            alignItems: "center"
                        }
                    }, r.createElement(d.b, {
                        flexBasis: "50%",
                        md: {
                            flexBasis: "85%"
                        },
                        sm: {
                            flexBasis: "100%"
                        }
                    }, r.createElement(d.b, {
                        marginBottom: "37px",
                        xs: {
                            marginBottom: "18px"
                        }
                    }, r.createElement(f.b, {
                        scale: {
                            xs: "XS",
                            sm: "XS",
                            md: "S",
                            lg: "S",
                            xl: "S"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "no-ads-body-title"
                    }, "We do things differently."))), r.createElement(f.f, {
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "L",
                            lg: "L",
                            xl: "L"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "no-ads-body-text"
                    }, "Medium is not like any other platform on the internet.", " ", r.createElement("span", {
                        className: e(function(e) {
                            return {
                                backgroundColor: e.highlightColor.light,
                                display: "inline"
                            }
                        })
                    }, "Our sole purpose is to help you find compelling ideas, knowledge, and perspectives."), " ", "We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest."))), r.createElement(d.b, {
                        flexBasis: "50%",
                        md: {
                            flexBasis: "100%",
                            marginTop: "60px",
                            textAlign: "center"
                        },
                        sm: {
                            marginTop: "36px"
                        }
                    }, r.createElement(T, {
                        entryPoint: "landing_home_mission"
                    }))), r.createElement(ie, null)))))
                },
                me = function() {
                    return r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "one-subscription-section"
                    }, r.createElement(d.b, {
                        marginTop: "85px",
                        xs: {
                            marginTop: "45px"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "one-subscription-header"
                    }, r.createElement(f.b, {
                        scale: {
                            xs: "XS",
                            sm: "XS",
                            md: "S",
                            lg: "S",
                            xl: "S"
                        }
                    }, "One Subscription. Unlimited Ideas.")), r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "one-subscription-body"
                    }, r.createElement(d.b, {
                        marginTop: "27px",
                        xs: {
                            marginTop: "17px"
                        }
                    }, r.createElement(f.f, {
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "L",
                            lg: "L",
                            xl: "L"
                        }
                    }, "Read unlimited stories with an optional subscription of ", r.createElement("b", null, "$5/month."), r.createElement(d.b, {
                        height: "0px",
                        xs: {
                            display: "none"
                        }
                    }, r.createElement("br", null)), r.createElement(d.b, {
                        display: "none",
                        xs: {
                            display: "inline"
                        }
                    }, " "), "If it's not for you, cancel anytime."))), r.createElement(ie, null)))
                },
                pe = function() {
                    var e = r.useContext(Je),
                        t = e.getFormattedBulkFollowUrl,
                        n = e.selectedItems,
                        a = Object(M.b)(),
                        o = t(n),
                        l = Object(D.a)({
                            onPresentedFn: function() {
                                return a.event("loHomepage.presented", {
                                    source: "landing_home_hero"
                                })
                            }
                        });
                    return r.createElement("div", {
                        ref: l
                    }, r.createElement(d.b, {
                        marginTop: "38px",
                        maxWidth: "608px"
                    }, r.createElement(f.b, {
                        scale: {
                            xs: "XS",
                            sm: "XS",
                            md: "S",
                            lg: "S",
                            xl: "S"
                        }
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "select-pubtopics-cta"
                    }, "Select what you're into. We'll help you find great things to read.")), r.createElement(d.b, {
                        marginTop: "34px"
                    }, r.createElement(T, {
                        entryPoint: "landing_home_hero"
                    })), r.createElement(d.b, {
                        marginTop: "15px"
                    }, r.createElement(f.a, {
                        scale: "L",
                        color: "DARKER"
                    }, "Already have an account?", " ", r.createElement(_.a, C()({
                        linkStyle: "OBVIOUS",
                        operation: "login",
                        susiEntry: "landing_home_hero"
                    }, !!o && {
                        actionUrl: o
                    }), "Sign in.")))))
                },
                de = n("./src/framework/design-system/type/Detail.tsx"),
                ue = n("./src/styles/breakpoints.ts"),
                ge = n("./src/styles/zIndex.ts"),
                he = function(e) {
                    var t;
                    return t = {
                        backgroundColor: e.baseColor.overlay.dark,
                        left: 0,
                        padding: "20px 30px",
                        position: "fixed"
                    }, m()(t, Object(ue.sm)(e), {
                        padding: "14px 0"
                    }), m()(t, "top", 0), m()(t, "width", "100%"), m()(t, "zIndex", ge.a.metabar), t
                },
                fe = Object(p.c)(function(e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = Object(b.useCx)(),
                        a = r.useContext(Je),
                        o = (0, a.getFormattedBulkFollowUrl)(a.selectedItems);
                    return r.createElement(r.Fragment, null, r.createElement(d.b, {
                        display: "block",
                        height: "80px",
                        width: "100%"
                    }), r.createElement("div", {
                        className: n(he)
                    }, r.createElement(u.a, {
                        size: "outset"
                    }, r.createElement(d.b, {
                        width: "100%",
                        display: "flex",
                        sm: {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }, r.createElement(d.b, {
                        sm: {
                            display: "none"
                        }
                    }, r.createElement(I.c, null)), r.createElement(d.b, {
                        display: "none",
                        sm: {
                            display: "block"
                        }
                    }, r.createElement(I.a, null)), r.createElement(d.b, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "auto",
                        sm: {
                            display: "none"
                        }
                    }, r.createElement(d.b, {
                        marginRight: "30px"
                    }, r.createElement(de.a, {
                        scale: "L",
                        color: "DARKER"
                    }, r.createElement(d.u, {
                        href: Object(re.V)(t)
                    }, "Subscribe"))), r.createElement(d.b, {
                        marginRight: "30px"
                    }, r.createElement(de.a, {
                        scale: "L",
                        color: "DARKER"
                    }, r.createElement(d.u, {
                        href: Object(re.Y)(t)
                    }, "Write"))), r.createElement(d.b, {
                        marginRight: "30px"
                    }, r.createElement(de.a, {
                        scale: "L",
                        color: "DARKER"
                    }, r.createElement(_.a, C()({
                        linkStyle: "SUBTLE",
                        operation: "login",
                        susiEntry: "landing_home_nav"
                    }, !!o && {
                        actionUrl: o
                    }), "Sign in")))), r.createElement(d.b, {
                        width: "150px",
                        sm: {
                            width: "120px"
                        }
                    }, r.createElement(T, {
                        entryPoint: "landing_home_nav",
                        scale: "S"
                    }))))))
                }),
                be = n("./src/styles/colors.ts"),
                xe = function(e) {
                    return m()({
                        backgroundColor: e.highlightColor.light,
                        height: "100%",
                        padding: "0px 45px 0px 24%",
                        width: "100%"
                    }, ue.md(e), {
                        paddingLeft: "17%"
                    })
                },
                Ee = function(e) {
                    var t = e.children,
                        n = Object(b.useCx)(),
                        a = r.useState(0),
                        o = l()(a, 2),
                        c = o[0],
                        i = o[1],
                        s = r.useState(0),
                        m = l()(s, 2),
                        p = m[0],
                        u = m[1];
                    r.useEffect(function() {
                        if (t) {
                            var e = window.setTimeout(function() {
                                var e = (c + 1) % t.length;
                                i(e)
                            }, 6e3);
                            u(e)
                        }
                    }, [c]);
                    return r.createElement("div", {
                        className: n(xe)
                    }, r.createElement(d.b, {
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        paddingBottom: "40px",
                        paddingTop: "65px"
                    }, r.createElement(d.b, {
                        flexGrow: "1"
                    }, t[c]), r.createElement(d.b, {
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "24px"
                    }, t ? t.map(function(e, t) {
                        return r.createElement("div", {
                            className: n((o = t === c, function(e) {
                                return {
                                    backgroundColor: o ? e.accentColor.fill.normal : "none",
                                    borderRadius: "50%",
                                    border: "1px solid ".concat(o ? e.accentColor.fill.normal : e.baseColor.border.dark),
                                    cursor: "pointer",
                                    height: "11px",
                                    marginRight: "11px",
                                    width: "11px",
                                    ":last-child": {
                                        marginRight: "0px"
                                    },
                                    ":hover": {
                                        backgroundColor: o ? e.accentColor.fill.normal : be.y,
                                        borderColor: o ? e.accentColor.fill.normal : be.y
                                    }
                                }
                            })),
                            key: t,
                            onClick: (a = t, function() {
                                p && (clearTimeout(p), i(a))
                            })
                        });
                        var a, o
                    }) : null)))
                },
                ye = n("./src/components/ui/image/index.ts");

            function ve() {
                return (ve = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var we = a.a.createElement("path", {
                    d: "M61.8 0C45.63 4.36 35.4 20.33 35.4 34.65 35.4 44.19 41.33 50 49.3 50 56.68 50 62 44.2 62 37.14c0-6.85-4.5-12.04-10.44-12.87-1.63-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L61.8 0zM26.6 0C10.44 4.36 0 20.33 0 34.65 0 44.19 6.14 50 13.91 50c7.37 0 12.9-5.8 12.9-12.86 0-6.85-4.5-12.04-10.44-12.87-1.84-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L26.6 0z",
                    fill: "#03A87C"
                }),
                Oe = function(e) {
                    return a.a.createElement("svg", ve({
                        width: 62,
                        height: 50,
                        viewBox: "0 0 62 50",
                        fill: "none"
                    }, e), we)
                },
                je = {
                    position: "absolute",
                    top: "-96px"
                },
                Se = function() {
                    return {
                        borderRadius: "99em",
                        marginRight: "6px"
                    }
                },
                Ce = function(e) {
                    var t = e.text,
                        n = e.avatar,
                        a = e.name,
                        o = Object(b.useCx)();
                    return r.createElement(d.b, {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        md: {
                            height: "398px"
                        },
                        xs: {
                            height: "428px"
                        }
                    }, r.createElement(Oe, {
                        className: o(je)
                    }), r.createElement(d.b, {
                        textAlign: "left"
                    }, r.createElement(f.b, {
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "L",
                            lg: "L",
                            xl: "L"
                        }
                    }, t)), r.createElement(d.b, {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }, r.createElement(ye.a, {
                        alt: "author portrait",
                        diameter: 36,
                        miroId: n,
                        rules: Se
                    }), r.createElement(f.b, {
                        scale: {
                            xs: "XS",
                            sm: "XS",
                            md: "S",
                            lg: "S",
                            xl: "S"
                        }
                    }, a)))
                },
                _e = [{
                    id: "bd856b86de98",
                    label: "Future",
                    type: "Topic"
                }, {
                    id: "444d13b52878",
                    coverImageId: "1*88Z0O0wD4KOrk6Y5EceZog.png",
                    label: "OneZero",
                    type: "Collection"
                }, {
                    id: "f862bfc84e38",
                    label: "Technology",
                    type: "Topic"
                }, {
                    id: "8d6b8a439e32",
                    coverImageId: "1*GhG8ZeoE0TGfCHwL9SCrfw.png",
                    label: "Elemental",
                    type: "Collection"
                }, {
                    id: "d61cf867d93f",
                    label: "Health",
                    type: "Topic"
                }, {
                    id: "9ff4c9770e22",
                    label: "Science",
                    type: "Topic"
                }, {
                    id: "ae2a65f35510",
                    coverImageId: "1*AQbRi7322aPUWTzp_zOhTg.png",
                    label: "GEN",
                    type: "Collection"
                }, {
                    id: "7b2438b07d33",
                    label: "Business",
                    type: "Topic"
                }, {
                    id: "7b6769f2748b",
                    coverImageId: "1*vmNmnbAOxsvAZ5BLilfFJQ.png",
                    label: "Marker",
                    type: "Collection"
                }, {
                    id: "af49579e220a",
                    label: "Work",
                    type: "Topic"
                }, {
                    id: "1f79d9387f85",
                    label: "Culture",
                    type: "Topic"
                }, {
                    id: "8ccfed20cbb2",
                    coverImageId: "1*VJ4zcLDMISZjqlnuj55WXA.png",
                    label: "ZORA",
                    type: "Collection"
                }, {
                    id: "ef8e90590e66",
                    coverImageId: "1*T-4t9N3IlJd-aNzk_thAWA.png",
                    label: "Tenderly",
                    type: "Collection"
                }, {
                    id: "935e48590732",
                    label: "Food",
                    type: "Topic"
                }, {
                    id: "1285ba81cada",
                    coverImageId: "1*E_tHdfYfWGRpusAcOtDX7A.png",
                    label: "Heated",
                    type: "Collection"
                }, {
                    id: "decb52b64abf",
                    label: "Programming",
                    type: "Topic"
                }, {
                    id: "55321ac40456",
                    label: "Design",
                    type: "Topic"
                }, {
                    id: "a9d61c7561c2",
                    label: "LGBTQIA",
                    type: "Topic"
                }, {
                    id: "b315287d189e",
                    label: "Neuroscience",
                    type: "Topic"
                }, {
                    id: "cb8577c9149e",
                    coverImageId: "1*m1LdV5fylqvlNMG0qhPK-Q.png",
                    label: "Modus",
                    type: "Collection"
                }, {
                    id: "4d562ee63426",
                    label: "Politics",
                    type: "Topic"
                }, {
                    id: "830cded25262",
                    label: "Relationships",
                    type: "Topic"
                }, {
                    id: "544c7006046e",
                    coverImageId: "1*pfjoZOu08t9b-HHXv68ETg.png",
                    label: "Human Parts",
                    type: "Collection"
                }, {
                    id: "aef1078a3ef5",
                    label: "Self",
                    type: "Topic"
                }, {
                    id: "ba2d3ab15ed6",
                    label: "Startups",
                    type: "Topic"
                }, {
                    id: "9213b0063bcc",
                    label: "Cryptocurrency",
                    type: "Topic"
                }, {
                    id: "8c44fd843e59",
                    coverImageId: "1*y3pfOGWJhLH7z4Thm97MkQ.png",
                    label: "Forge",
                    type: "Collection"
                }, {
                    id: "ae5d4995e225",
                    label: "Data Science",
                    type: "Topic"
                }, {
                    id: "8a146bc21b28",
                    label: "Productivity",
                    type: "Topic"
                }, {
                    id: "1af65db9c2f8",
                    label: "Artificial Intelligence",
                    type: "Topic"
                }, {
                    id: "aa123d2fee23",
                    label: "Election 2020",
                    type: "Topic"
                }],
                ke = [{
                    text: "Medium is truly where ideas are born, shared, and spread.",
                    avatar: "1*SsVe0TBfrDBn-gEj29itVw.jpeg",
                    name: "Jasmine Bina"
                }, {
                    text: "Medium is a great place to read and learn from a wide range of authors. It’s not muddied up by ads. It’s not fake news. It feels like one of the few pure places to go online.",
                    avatar: "1*FCZFpZZhbimWBESDQSJkpw.jpeg",
                    name: "Jackie Colburn"
                }, {
                    text: "Do yourself a favor and start browsing Medium for high quality articles on just about ANY topic. Get those mental gears turning!",
                    avatar: "1*h__9R1kbQWgowK0qjAPXnQ@2x.jpeg",
                    name: "Rosemichelle Marzan"
                }, {
                    text: "I love Medium’s new publications: OneZero, GEN, Heated. And, I’m especially excited about Tenderly.",
                    avatar: "1*fDPy6E4JSM4eyXbFEbstTw.jpeg",
                    name: "Raquel Ledezma-Haight"
                }, {
                    text: "In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.",
                    avatar: "1*Vh7cnF2dqfC8Uy5HgXkOHw.jpeg",
                    name: "Paul Fabretti"
                }, {
                    text: "Medium is trying to shift the paradigm. They’re catering to those looking for fresh, new, authentic voices. I believe wholeheartedly in their mission.",
                    avatar: "1*2IHpLkUvhEpDLBewUDHnoQ.jpeg",
                    name: "Joel Leon"
                }],
                ze = function() {
                    return r.createElement(d.b, {
                        width: "100%"
                    }, r.createElement(h.a, {
                        featureString: "lo-homepage",
                        target: "testimonials-section"
                    }, r.createElement(d.b, {
                        position: "relative",
                        width: "100%",
                        height: "470px",
                        marginTop: "117px",
                        md: {
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            marginTop: "85px"
                        },
                        xs: {
                            marginTop: "45px"
                        }
                    }, r.createElement(d.b, {
                        position: "absolute",
                        width: "50%",
                        left: "0",
                        marginTop: "65px",
                        textAlign: "left",
                        zIndex: 1,
                        md: {
                            marginTop: "0px",
                            maxWidth: "700px",
                            position: "static",
                            width: "100%"
                        },
                        xs: {
                            maxWidth: "350px"
                        }
                    }, r.createElement(f.c, {
                        scale: {
                            xs: "L",
                            sm: "XXL",
                            md: "XXL",
                            lg: "XXL",
                            xl: "XXL"
                        }
                    }, "120 million curious readers and growing.")), r.createElement(d.b, {
                        right: "0px",
                        position: "absolute",
                        height: "470px",
                        width: "62%",
                        md: {
                            height: "100%",
                            marginTop: "85px",
                            position: "static",
                            width: "100%"
                        },
                        xs: {
                            marginTop: "50px"
                        }
                    }, r.createElement(Ee, null, ke.map(function(e, t) {
                        return r.createElement(Ce, C()({}, e, {
                            key: t
                        }))
                    }))))))
                },
                Le = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                Te = n.n(Le),
                Me = n("./node_modules/lodash/reject.js"),
                De = n.n(Me);

            function Re() {
                return (Re = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Ie = a.a.createElement("circle", {
                    cx: 15,
                    cy: 15,
                    r: 15,
                    fill: "#1E1B1D"
                }),
                Pe = a.a.createElement("path", {
                    d: "M10.78 21h1.73l.73-3.2h2.24l-.74 3.2h1.76l.72-3.2h3.3v-1.6H17.6l.54-2.4H21v-1.6h-2.5l.72-3.2h-1.73l-.73 3.2h-2.24l.74-3.2H13.5l-.73 3.2H9.5v1.6h2.93l-.56 2.4H9v1.6h2.52l-.74 3.2zm2.83-4.8l.54-2.4h2.24l-.54 2.4H13.6z",
                    fill: "#fff"
                }),
                Ae = function(e) {
                    return a.a.createElement("svg", Re({
                        width: 30,
                        height: 30,
                        viewBox: "0 0 30 30",
                        fill: "none"
                    }, e), Ie, Pe)
                };

            function He(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var Fe = function(e) {
                    return function(t) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? He(n, !0).forEach(function(t) {
                                    m()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : He(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            alignItems: "center",
                            backgroundColor: e ? t.highlightColor.light : t.baseColor.background.normal,
                            borderRadius: "99em",
                            color: t.baseColor.text.lighter,
                            display: "inline-flex",
                            height: "42px",
                            margin: "5px",
                            padding: "6px",
                            paddingRight: "12px"
                        }, Object(k.a)(function(e) {
                            return {
                                font: e.font.uiRegular,
                                fontSize: 24,
                                lineHeight: 32
                            }
                        })(t), {
                            ":hover": {
                                backgroundColor: e ? t.highlightColor.light : Object(be.t)(.1),
                                cursor: "pointer"
                            }
                        })
                    }
                },
                Be = function(e) {
                    return {
                        borderRadius: "99em",
                        boxShadow: "3px 3px 16px ".concat(e.baseColor.border.light),
                        display: "flex",
                        marginRight: "6px"
                    }
                },
                Ve = function(e) {
                    var t = e.coverImageId,
                        n = e.label,
                        a = e.onToggle,
                        o = r.useState(!1),
                        c = l()(o, 2),
                        i = c[0],
                        s = c[1];
                    return r.createElement(d.L, null, function(e) {
                        return r.createElement("div", {
                            className: e(Fe(i)),
                            onClick: function() {
                                var e = !i;
                                s(e), a(e)
                            }
                        }, t ? r.createElement(ye.a, {
                            alt: "".concat(n, " logo"),
                            diameter: 30,
                            miroId: t,
                            rules: Be
                        }) : r.createElement("div", {
                            className: e(Be)
                        }, r.createElement(Ae, null)), n)
                    })
                };

            function Xe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var We = function() {
                    var e = Object(g.c)(),
                        t = r.useContext(Je),
                        n = t.selectedItems,
                        a = t.setSelectedItems,
                        o = function(t, r) {
                            var o = r ? [].concat(i()(n), [t]) : De()(n, t);
                            a(o), e.event("loHomepage.pickerItemClicked", function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Xe(n, !0).forEach(function(t) {
                                        m()(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xe(n).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({}, t, {
                                isSelected: r
                            }))
                        };
                    return r.createElement(d.b, {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        maxHeight: "260px",
                        marginTop: "45px",
                        overflow: "hidden",
                        xs: {
                            marginTop: "22px",
                            maxHeight: "310px"
                        }
                    }, _e.map(function(e) {
                        var t = e.id,
                            n = e.type,
                            a = Te()(e, ["id", "type"]);
                        return r.createElement(Ve, C()({}, a, {
                            key: "".concat(n, ":").concat(t),
                            onToggle: function(e) {
                                return o({
                                    id: t,
                                    type: n
                                }, e)
                            }
                        }))
                    }))
                },
                Ue = n("./src/landing-pages/shared/LandingPageMetadata.tsx"),
                Ne = n("./src/util/navigation.ts");

            function Ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ge(n, !0).forEach(function(t) {
                        m()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ge(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Ze = {
                    getFormattedBulkFollowUrl: function(e) {
                        if (0 !== e.length) {
                            var t = e.reduce(function(e, t) {
                                var n = "".concat(t.type.toLowerCase(), "Ids");
                                return Ke({}, e, m()({}, n, [].concat(i()(e[n] || []), [t.id])))
                            }, {});
                            return Object(Ne.a)(Object(re.n)(), t)
                        }
                    },
                    selectedItems: [],
                    setSelectedItems: function() {}
                },
                Je = r.createContext(Ze),
                Qe = function(e) {
                    return "".concat(e, " is not like any other platform on the internet. ") + "Our sole purpose is to help you find compelling ideas, knowledge, and perspectives. We don’t serve ads—we serve you, the curious reader who loves to learn new things. " + "".concat(e, " is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest.")
                },
                qe = Object(p.c)(function(e) {
                    var t = e.config;
                    return {
                        authDomain: t.authDomain,
                        productName: t.productName
                    }
                })(function(e) {
                    var t = e.authDomain,
                        n = e.productName,
                        a = r.useState([]),
                        o = l()(a, 2),
                        c = o[0],
                        i = o[1],
                        s = Object(g.c)();
                    return r.useEffect(function() {
                        s.event("homepage.viewed", {}), s.event("loHomepage.viewed", {})
                    }, []), r.createElement(Je.Provider, {
                        value: Ke({}, Ze, {
                            selectedItems: c,
                            setSelectedItems: i
                        })
                    }, r.createElement(Ue.a, {
                        card: "summary_large_image",
                        title: "".concat(n, " – Get smarter about what matters to you."),
                        description: Qe(n),
                        imageUrl: "https://cdn-images-1.medium.com/max/1200/1*29XAq2WrtejUCxRzSgDLXA.png",
                        pageUrl: "https://".concat(t, "/"),
                        pageType: "website",
                        publicationName: n,
                        publicationTwitterHandle: "@Medium"
                    }), r.createElement(fe, null), r.createElement(u.a, {
                        size: "outset"
                    }, r.createElement(d.b, {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center"
                    }, r.createElement(le, null), r.createElement(We, null), r.createElement(pe, null), r.createElement(j, null), r.createElement(se, null), r.createElement(ze, null), r.createElement(me, null), r.createElement(R, null))), r.createElement(oe, null))
                });
            t.default = function() {
                return r.createElement(qe, null)
            }
        },
        "./src/landing-pages/shared/LandingPageMetadata.tsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-helmet-async/lib/index.module.js"),
                o = function(e) {
                    var t = e.card,
                        n = e.title,
                        o = e.description,
                        l = e.imageUrl,
                        c = e.pageUrl,
                        i = e.publicationName,
                        s = e.publicationTwitterHandle,
                        m = e.pageType;
                    return r.createElement(a.a, null, r.createElement("title", null, n), r.createElement("meta", {
                        name: "title",
                        content: n
                    }), r.createElement("meta", {
                        name: "description",
                        content: o
                    }), r.createElement("meta", {
                        name: "twitter:app:name:iphone",
                        content: "Medium"
                    }), r.createElement("meta", {
                        name: "twitter:app:id:iphone",
                        content: "828256236"
                    }), r.createElement("meta", {
                        name: "twitter:card",
                        content: t
                    }), r.createElement("meta", {
                        name: "twitter:creator",
                        content: "@medium"
                    }), r.createElement("meta", {
                        name: "twitter:description",
                        content: o
                    }), r.createElement("meta", {
                        name: "twitter:image:src",
                        content: l
                    }), r.createElement("meta", {
                        name: "twitter:site",
                        content: s
                    }), r.createElement("meta", {
                        name: "twitter:title",
                        content: n
                    }), r.createElement("meta", {
                        property: "og:description",
                        content: o
                    }), r.createElement("meta", {
                        property: "og:image",
                        content: l
                    }), r.createElement("meta", {
                        property: "og:site_name",
                        content: i
                    }), r.createElement("meta", {
                        property: "og:title",
                        content: n
                    }), r.createElement("meta", {
                        property: "og:type",
                        content: m
                    }), r.createElement("meta", {
                        property: "og:url",
                        content: c
                    }))
                }
        }
    }
]);
//# sourceMappingURL=31.07ab1cca.chunk.js.map