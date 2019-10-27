(window.QJP = window.QJP || []).push([
    [70], {
        "13SJ": function(e, t, n) {
            "use strict";
            t.a = function(e, t) {
                return void 0 === t && (t = 5e3), new Promise(function(n, a) {
                    var r = new Image,
                        o = window.setTimeout(function() {
                            a(new Error("Domain " + e + " timed out"))
                        }, t);
                    r.onabort = function() {
                        clearTimeout(o), a(new Error("Domain " + e + " aborted"))
                    }, r.onerror = function() {
                        clearTimeout(o), a(new Error("Domain " + e + " errored"))
                    }, r.onload = function() {
                        clearTimeout(o), n()
                    }, r.src = e + "/favicon.ico"
                })
            }
        },
        "78K5": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n("q1tI"),
                r = n.n(a),
                o = n("DGXf"),
                i = n("PqcE"),
                s = n("bBvF").default;

            function u(e) {
                var t = e.label,
                    n = e.facebookLoginUrl,
                    a = e.variant,
                    s = e.onClick,
                    u = e.title;
                return r.a.createElement(i.a, {
                    icon: r.a.createElement(o.a, null),
                    label: t,
                    linkTo: n,
                    onClick: s,
                    title: u,
                    variant: a
                })
            }
            u.defaultProps = {
                label: s("en-US", "Log in with Facebook")
            }
        },
        HLqC: function(e, t, n) {
            var a = n("R5Y4"),
                r = n("mv/X"),
                o = n("ZCgT");
            e.exports = function(e) {
                return function(t, n, i) {
                    return i && "number" != typeof i && r(t, n, i) && (n = i = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), i = void 0 === i ? t < n ? 1 : -1 : o(i), a(t, n, i, e)
                }
            }
        },
        J9WF: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("JPcv"),
                o = n("YDJX"),
                i = n("X890"),
                s = n("xhj2"),
                u = n("LkIj"),
                l = ((a = {})[i.a.CHANGE_INPUT] = function(e, t) {
                    var n = t.payload,
                        a = n.name,
                        r = n.value;
                    return "checkbox" === n.type && (r = n.checked), e.setIn(["form", a], r).setIn(["validationErrorsByInputName", a], null)
                }, a[i.a.RESET_SUBMISSION] = function(e) {
                    return e.merge(Object(r.fromJS)({
                        wasSubmitted: !1
                    }))
                }, a[i.a.SUBMIT_FORM] = function(e) {
                    var t;
                    return e.merge(Object(r.fromJS)({
                        wasSubmitted: !0,
                        validationErrorsByInputName: (t = {}, t[i.c] = [], t)
                    }))
                }, a[i.a.SUBMIT_FORM_ASYNC__FAILURE] = function(e, t) {
                    var n = t.payload,
                        a = Object(u.d)(e),
                        o = n.reduce(function(e, t) {
                            return -1 !== t.type.indexOf(i.d.USERNAME) ? e.set(i.d.USERNAME, t.message) : -1 !== t.type.indexOf(i.d.PASSWORD) ? e.set(i.d.PASSWORD, t.message) : e.update(i.c, function(e) {
                                return e.push(t)
                            })
                        }, a);
                    return e.merge(Object(r.fromJS)({
                        numFailedAttempts: e.get("numFailedAttempts") + 1,
                        validationErrorsByInputName: o
                    }))
                }, a);
            n.d(t, "default", function() {
                return p
            });
            var c = function() {
                var e, t;
                return Object(r.fromJS)({
                    form: (e = {}, e[i.d.PASSWORD] = "", e[i.d.USERNAME] = "", e),
                    numFailedAttempts: 0,
                    validationErrorsByInputName: (t = {}, t[i.c] = [], t),
                    wasSubmitted: !1
                })
            };

            function p() {
                var e = Object(o.handleActions)(l, c());
                s.a.register({
                    login: e
                })
            }
        },
        LkIj: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "b", function() {
                return l
            });
            var a = n("peh1"),
                r = n("X890"),
                o = function(e) {
                    return e.get("form")
                },
                i = function(e) {
                    return e.get("validationErrorsByInputName")
                },
                s = function(e) {
                    return e.get("validationErrorsByInputName").map(function(t, n) {
                        return !!t || (!1 !== t || e.get("focusedInputName") !== n) && null
                    })
                },
                u = function(e) {
                    return e.get("wasSubmitted")
                },
                l = Object(a.createSelector)(i, function(e) {
                    return !(!e.get(r.c) || !e.get(r.c).count())
                })
        },
        Nxgj: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n.n(a),
                o = n("TSYQ"),
                i = n.n(o),
                s = n("bvRJ");

            function u(e) {
                var t = e.className;
                return r.a.createElement(s.a, {
                    className: i()("GoogleIcon", t),
                    icon: "google-multicolor"
                })
            }
            var l = n("PqcE");
            n.d(t, "a", function() {
                return p
            });
            var c = n("bBvF").default;

            function p(e) {
                var t = e.label,
                    n = e.googleLoginUrl,
                    a = e.variant,
                    o = e.onClick,
                    i = e.title;
                return r.a.createElement(l.a, {
                    icon: r.a.createElement(u, null),
                    label: t,
                    linkTo: n,
                    onClick: o,
                    title: i,
                    variant: a
                })
            }
            p.defaultProps = {
                label: c("en-US", "Log in with Google")
            }
        },
        R5Y4: function(e, t) {
            var n = Math.ceil,
                a = Math.max;
            e.exports = function(e, t, r, o) {
                for (var i = -1, s = a(n((t - e) / (r || 1)), 0), u = Array(s); s--;) u[o ? s : ++i] = e, e += r;
                return u
            }
        },
        TAwQ: function(e, t, n) {
            "use strict";
            var a = n("pVnL"),
                r = n.n(a),
                o = n("VbXa"),
                i = n.n(o),
                s = n("q1tI"),
                u = n.n(s),
                l = n("KAy6"),
                c = n("og3H"),
                p = n("TtcH"),
                d = n("mEm4"),
                h = Object(d.a)("DATE_ORDERS", {
                    DAY_MONTH_YEAR: null,
                    MONTH_DAY_YEAR: null,
                    YEAR_MONTH_DAY: null
                }),
                m = "en-US";
            var g = function(e) {
                void 0 === e && (e = m);
                var t = new Date(2016, 10, 22).toLocaleDateString(e);
                return 0 === t.indexOf("2016") ? h.YEAR_MONTH_DAY : 0 === t.indexOf("22") ? h.DAY_MONTH_YEAR : h.MONTH_DAY_YEAR
            }();
            var f = n("EFuM"),
                E = n("t1Ez"),
                v = n("Pxp3"),
                I = n("Ahwr"),
                S = n("8DN3"),
                b = n("xqF0"),
                O = n("vzun"),
                y = n("jvKz"),
                U = n("OpqZ"),
                _ = n("S41V"),
                T = n("TSYQ"),
                N = n.n(T),
                C = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handleInputChange = function(e) {
                            n.props.onChange && n.props.onChange(e)
                        }, n.state = {
                            invalid: t.invalid || !1
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentWillReceiveProps = function(e) {
                        this.setState({
                            invalid: e.invalid
                        })
                    }, n.render = function() {
                        var e = N()("SignupDropdown", {
                            "is-selected": this.props.value !== this.props.defaultValue
                        });
                        return u.a.createElement(_.a, {
                            mobileWidth: this.props.width,
                            width: this.props.width
                        }, u.a.createElement("div", {
                            className: e
                        }, u.a.createElement(I.a, {
                            invalid: this.state.invalid,
                            name: this.props.name,
                            onChange: this.handleInputChange,
                            value: this.props.value
                        }, this.props.children)))
                    }, t
                }(s.Component);
            C.defaultProps = {
                defaultValue: "-1",
                width: 1
            };
            var R = n("WjpJ"),
                B = n.n(R),
                A = n("bBvF").default,
                F = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(a)) || this).generateDaysList = function() {
                            var e = B()(1, 32).map(function(e) {
                                return u.a.createElement("option", {
                                    key: e,
                                    value: e
                                }, e)
                            });
                            return e.unshift(u.a.createElement("option", {
                                key: -1,
                                value: -1
                            }, A("en-US", "Day"))), e
                        }, t.generateMonthsList = function() {
                            var e = B()(12).map(function(e) {
                                return u.a.createElement("option", {
                                    key: e + 1,
                                    value: e + 1
                                }, new Date(2016, e, 5).toLocaleDateString("en-US", {
                                    month: "long"
                                }))
                            });
                            return e.unshift(u.a.createElement("option", {
                                key: -1,
                                value: -1
                            }, A("en-US", "Month"))), e
                        }, t.generateYearsList = function() {
                            var e = (new Date).getFullYear(),
                                t = B()(e, e - 130, -1).map(function(e) {
                                    return u.a.createElement("option", {
                                        key: e
                                    }, e)
                                });
                            return t.unshift(u.a.createElement("option", {
                                key: -1,
                                value: -1
                            }, A("en-US", "Year"))), t
                        }, t
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e, t, n, a, r = this.generateMonthsList(),
                            o = this.generateDaysList(),
                            i = this.generateYearsList();
                        switch ("underline" === this.props.variant ? (e = u.a.createElement(C, {
                            defaultValue: "-1",
                            invalid: this.props.yearInputInvalid,
                            key: this.props.yearInputName,
                            name: this.props.yearInputName,
                            onChange: this.props.yearInputOnChange,
                            value: this.props.yearInputValue,
                            width: 1 / 3
                        }, i), t = u.a.createElement(C, {
                            defaultValue: "-1",
                            invalid: this.props.monthInputInvalid,
                            key: this.props.monthInputName,
                            name: this.props.monthInputName,
                            onChange: this.props.monthInputOnChange,
                            value: this.props.monthInputValue,
                            width: 1 / 3
                        }, r), n = u.a.createElement(C, {
                            defaultValue: "-1",
                            invalid: this.props.dayInputInvalid,
                            key: this.props.dayInputName,
                            name: this.props.dayInputName,
                            onChange: this.props.dayInputOnChange,
                            value: this.props.dayInputValue,
                            width: 1 / 3
                        }, o)) : (e = u.a.createElement(I.a, {
                            invalid: this.props.yearInputInvalid,
                            key: this.props.yearInputName,
                            name: this.props.yearInputName,
                            onChange: this.props.yearInputOnChange,
                            value: this.props.yearInputValue,
                            variant: this.props.variant
                        }, i), t = u.a.createElement(I.a, {
                            invalid: this.props.monthInputInvalid,
                            key: this.props.monthInputName,
                            name: this.props.monthInputName,
                            onChange: this.props.monthInputOnChange,
                            value: this.props.monthInputValue,
                            variant: this.props.variant
                        }, r), n = u.a.createElement(I.a, {
                            invalid: this.props.dayInputInvalid,
                            key: this.props.dayInputName,
                            name: this.props.dayInputName,
                            onChange: this.props.dayInputOnChange,
                            value: this.props.dayInputValue,
                            variant: this.props.variant
                        }, o)), g) {
                            case h.DAY_MONTH_YEAR:
                                a = [n, t, e];
                                break;
                            case h.MONTH_DAY_YEAR:
                                a = [t, n, e];
                                break;
                            case h.YEAR_MONTH_DAY:
                            default:
                                a = [e, t, n]
                        }
                        var s = u.a.createElement(O.a, null, u.a.createElement(E.a, {
                                _precomputed: A("en-US", "Quizlet is open to <em>all ages</em> but requires all users to provide their real date of birth to comply with local laws.", {})
                            })),
                            l = "underline" === this.props.variant ? u.a.createElement(U.a, null, a) : a,
                            c = this.shouldRenderLegendAbove() ? this.props.label : null,
                            p = this.shouldRenderLegendBelow() ? this.props.label : null,
                            d = N()("BirthDateDropdownGroup", {
                                "BirthDateDropdownGroup--underline": "underline" === this.props.variant
                            });
                        return u.a.createElement(v.a, {
                            className: d
                        }, u.a.createElement(S.a, {
                            invalid: this.props.dayInputInvalid || this.props.monthInputInvalid || this.props.yearInputInvalid,
                            legend: c,
                            legendBelow: p,
                            turnLegendIntoLabel: !0
                        }, l, "boxed" === this.props.variant ? u.a.createElement("div", {
                            className: "BirthDateDropdownGroup-helpWrap"
                        }, u.a.createElement(y.a, {
                            overlay: s,
                            position: "right",
                            triggerAction: Object(f.j)() ? "click" : "hover"
                        }, u.a.createElement(b.a, {
                            icon: "question",
                            variant: "basic"
                        }))) : null))
                    }, n.shouldRenderLegendAbove = function() {
                        return "boxed" === this.props.variant
                    }, n.shouldRenderLegendBelow = function() {
                        return "underline" === this.props.variant
                    }, t
                }(u.a.PureComponent);
            F.defaultProps = {
                variant: "boxed"
            };
            var k = n("E/Xc"),
                P = n("a08m"),
                D = n("ZlgO"),
                w = n("fkqS"),
                L = n("DLQF"),
                M = n("VSSp"),
                V = n("T3U7"),
                H = n("fdo3"),
                j = n("bBuN"),
                Y = function(e, t, n) {
                    var a = new Date(e, t, n);
                    return e === a.getFullYear() && t === a.getMonth() && n === a.getDate()
                },
                W = n("Ri2w");
            var x = n("9WHe"),
                G = n("zK28");
            var q = n("PqR9"),
                Q = n("QLaP"),
                z = n.n(Q),
                J = n("sEfC"),
                X = n.n(J),
                K = n("vlgG"),
                Z = n("KD7m");
            var $ = n("bvRJ"),
                ee = n("bBvF").default,
                te = 500,
                ne = u.a.createElement($.a, {
                    icon: "check"
                }),
                ae = u.a.createElement($.a, {
                    icon: "person"
                }),
                re = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handleInputChange = function(e) {
                            var t = e.currentTarget.value;
                            t = Object(Z.a)(t), n.setState({
                                suggestions: null,
                                value: t
                            }, function() {
                                n.validateUsernameDebounced()
                            }), n.props.onChange && n.props.onChange(e)
                        }, n.handleInputBlur = function(e) {
                            n.props.onBlur && n.props.onBlur(e)
                        }, n.handleInputFocus = function(e) {
                            n.props.onFocus && n.props.onFocus(e)
                        }, n.handleClickUsernameSuggestion = function(e) {
                            Object(V.a)("signup_form_username_suggestion_clicked"), n.setState({
                                value: e
                            }, function() {
                                n.props.onClickSuggestedUsername && n.props.onClickSuggestedUsername(e), n.validateUsername()
                            })
                        }, n.handleValidationError = function(e) {
                            n.props.onValidationError && n.props.onValidationError(e)
                        }, n.validateUsername = function(e) {
                            void 0 === e && (e = !1);
                            var t = e ? n.props.lookupValue : n.state.value;
                            if (n.setState({
                                    validationError: null,
                                    suggestions: null
                                }), n.isUsernameEmpty(t)) return n.handleValidationError({
                                field: n.props.name,
                                message: null
                            });
                            z()(t, "Missing username after check isUsernameEmpty"),
                                function(e) {
                                    var t = e.username,
                                        n = e.shouldAutoGenerateUsernames;
                                    return Object(W.e)("/webapi/3.2/users/check-username", {
                                        username: t,
                                        shouldAutoGenerateUsernames: n
                                    })
                                }({
                                    username: t,
                                    shouldAutoGenerateUsernames: e
                                }).then(function(t) {
                                    var a = t.data,
                                        r = t.error,
                                        o = null;
                                    a && a.checkUsername ? e ? a.checkUsername.suggestions && a.checkUsername.suggestions.length && n.setState({
                                        suggestions: a.checkUsername.suggestions
                                    }) : a.checkUsername.success ? (o = !1, Object(V.a)("signup_form_success_username")) : a.checkUsername.suggestions.length && (o = ee("en-US", "Username taken - a few suggestions:"), n.setState({
                                        autoGenerateSuggestedUsernames: !1,
                                        suggestions: a.checkUsername.suggestions
                                    })) : r && (o = r.message, Object(V.a)("signup_form_error", {
                                        error: "username_error"
                                    })), n.setState({
                                        validationError: o
                                    }), n.handleValidationError({
                                        field: n.props.name,
                                        message: o
                                    })
                                })
                        }, n.validateUsernameDebounced = X()(n.validateUsername, te), n.state = {
                            autoGenerateSuggestedUsernames: t.autoGenerateSuggestedUsernames || !1,
                            value: t.value || "",
                            validationError: null,
                            suggestions: null
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        !this.props.autoGenerateSuggestedUsernames || this.props.forOauth || this.props.isUnderage || "" !== this.state.value || this.validateUsername(this.props.autoGenerateSuggestedUsernames)
                    }, n.componentWillReceiveProps = function(e) {
                        var t = this;
                        e.value !== this.props.value && e.autoPopulateSuggestedUsername && this.setState({
                            value: e.value
                        }, function() {
                            t.validateUsername()
                        })
                    }, n.renderAddOnContent = function() {
                        return this.props.showDefaultIcon ? ae : !1 === this.state.validationError ? ne : null
                    }, n.renderUsername = function() {
                        var e = N()("UsernameField", {
                            "is-populated": !this.isUsernameEmpty(this.state.value)
                        });
                        return u.a.createElement(v.a, {
                            className: e
                        }, u.a.createElement(K.a, {
                            addOnContent: this.renderAddOnContent(),
                            invalid: this.props.invalid,
                            label: this.props.label,
                            name: this.props.name,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            placeholder: this.props.placeholder,
                            value: this.state.value,
                            variant: this.props.variant
                        }))
                    }, n.renderSuggestions = function() {
                        var e = this;
                        return u.a.createElement("div", {
                            className: "UsernameField-suggestions"
                        }, this.state.autoGenerateSuggestedUsernames && this.state.suggestions ? u.a.createElement("div", {
                            className: "UsernameField-label"
                        }, u.a.createElement(E.a, {
                            _precomputed: ee("en-US", "{numSuggestedUsernames, plural, one {Available:} other {Available:}}", {
                                numSuggestedUsernames: this.state.suggestions.length
                            })
                        })) : null, this.state.suggestions ? this.state.suggestions.map(function(t) {
                            return u.a.createElement("div", {
                                className: "UsernameField-suggestion",
                                key: t
                            }, u.a.createElement(P.a, {
                                onClick: e.handleClickUsernameSuggestion.bind(e, t)
                            }, t))
                        }) : null)
                    }, n.render = function() {
                        return u.a.createElement("div", {
                            className: "UsernameField"
                        }, this.renderUsername(), this.state.suggestions ? this.renderSuggestions() : null)
                    }, n.isUsernameEmpty = function(e) {
                        return !e || "" === e
                    }, t
                }(s.Component);
            re.defaultProps = {
                autoGenerateSuggestedUsernames: !1,
                autoPopulateSuggestedUsername: !1,
                lookupValue: "",
                showDefaultIcon: !1
            };
            var oe = n("W6SY"),
                ie = 500,
                se = u.a.createElement($.a, {
                    icon: "check"
                }),
                ue = u.a.createElement($.a, {
                    icon: "lock"
                }),
                le = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handleInputChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState({
                                value: t
                            }, function() {
                                n.validatePasswordDebounced()
                            }), n.props.onChange && n.props.onChange(e)
                        }, n.handleInputBlur = function(e) {
                            n.props.onBlur && n.props.onBlur(e)
                        }, n.handleInputFocus = function(e) {
                            n.props.onFocus && n.props.onFocus(e)
                        }, n.handleValidationError = function(e) {
                            n.props.onValidationError && n.props.onValidationError(e)
                        }, n.validatePassword = function(e) {
                            void 0 === e && (e = n.props);
                            var t = n.state.value;
                            if (n.setState({
                                    validationError: null
                                }), n.isPasswordEmpty(t) || e.dependency && !1 !== e.dependency.invalid) return n.handleValidationError({
                                field: e.name,
                                message: null
                            });
                            (function(e) {
                                var t = e.username,
                                    n = e.password;
                                return Object(W.f)("/users/check-password", {
                                    username: t,
                                    password: n
                                })
                            })({
                                username: e.dependency && e.dependency.value,
                                password: t
                            }).then(function(t) {
                                var a = null;
                                t.success ? (a = !1, Object(V.a)("signup_form_success_password")) : (a = t.error, Object(V.a)("signup_form_error", {
                                    error: "bad_password"
                                })), n.setState({
                                    validationError: a
                                }), n.handleValidationError({
                                    field: e.name,
                                    message: a
                                })
                            })
                        }, n.validatePasswordDebounced = X()(n.validatePassword, ie), n.state = {
                            value: "",
                            validationError: null
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentWillUpdate = function(e) {
                        e.dependency && this.props.dependency && !this.getIsEqual(e.dependency.invalid, this.props.dependency.invalid) && this.validatePassword(e)
                    }, n.getIsEqual = function(e, t) {
                        return "object" == typeof e && "object" == typeof t ? Object(oe.a)(e, t) : e === t
                    }, n.renderAddOnContent = function() {
                        return this.props.showDefaultIcon ? ue : !1 === this.state.validationError ? se : null
                    }, n.render = function() {
                        var e = N()("PasswordField", {
                            "is-populated": !this.isPasswordEmpty(this.props.value)
                        });
                        return u.a.createElement(v.a, {
                            className: e
                        }, u.a.createElement(K.a, {
                            addOnContent: this.renderAddOnContent(),
                            invalid: this.props.invalid,
                            key: this.props.name,
                            label: this.props.label,
                            name: this.props.name,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            placeholder: this.props.placeholder,
                            type: "password",
                            value: this.props.value,
                            variant: this.props.variant
                        }))
                    }, n.isPasswordEmpty = function(e) {
                        return !e || "" === e
                    }, t
                }(s.Component);
            le.defaultProps = {
                showDefaultIcon: !1
            };
            var ce = n("aniC"),
                pe = n("shtt"),
                de = n("bBvF").default,
                he = u.a.createElement($.a, {
                    icon: "check"
                }),
                me = u.a.createElement($.a, {
                    icon: "mail"
                }),
                ge = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handleInputChange = function(e) {
                            var t = e.currentTarget.value;
                            t = Object(Z.a)(t), n.setState({
                                value: t
                            }), n.props.onChange && n.props.onChange(e)
                        }, n.handleInputBlur = function(e) {
                            n.validateEmail(), n.props.onBlur && n.props.onBlur(e)
                        }, n.handleInputFocus = function(e) {
                            n.props.onFocus && n.props.onFocus(e)
                        }, n.handleValidationError = function(e) {
                            n.props.onValidationError && n.props.onValidationError(e)
                        }, n.validateEmail = function() {
                            var e = n.state.value;
                            if (n.setState({
                                    validationError: null
                                }), n.isEmailEmpty(e)) return n.handleValidationError({
                                field: n.props.name,
                                message: null
                            });
                            ce.a.validate(e).then(function(e) {
                                var t = null;
                                e && (e.didYouMean ? t = de("en-US", 'Did you mean "{emailAddress}"?', {
                                    emailAddress: Object(pe.a)(e.didYouMean)
                                }) : e.isValid ? (t = !1, Object(V.a)("signup_form_success_email")) : (t = de("en-US", "Invalid email address"), Object(V.a)("signup_form_error", {
                                    error: "invalid_email"
                                }))), n.setState({
                                    validationError: t
                                }), n.handleValidationError({
                                    field: n.props.name,
                                    message: t
                                })
                            })
                        }, n.state = {
                            value: "",
                            validationError: null
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.renderAddOnContent = function() {
                        return this.props.showDefaultIcon ? me : !1 === this.state.validationError ? he : null
                    }, n.render = function() {
                        var e = N()("EmailField", {
                            "is-populated": !this.isEmailEmpty(this.props.value)
                        });
                        return u.a.createElement(v.a, {
                            className: e
                        }, u.a.createElement(K.a, {
                            addOnContent: this.renderAddOnContent(),
                            invalid: this.props.invalid,
                            label: this.props.label,
                            name: this.props.name,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            placeholder: this.props.placeholder,
                            ref: this.props.inputRef,
                            type: "email",
                            value: this.props.value,
                            variant: this.props.variant
                        }))
                    }, n.isEmailEmpty = function(e) {
                        return !e || "" === e
                    }, t
                }(s.Component);
            ge.defaultProps = {
                showDefaultIcon: !1
            };
            var fe = n("Vd5f"),
                Ee = n("rfz2"),
                ve = n("ysfV"),
                Ie = n("bBvF").default,
                Se = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(a)) || this).handleInputChange = function(e) {
                            var n = e.currentTarget.checked;
                            t.validateTOS(n), t.props.onChange && t.props.onChange(e)
                        }, t.handleInputFocus = function(e) {
                            t.props.onFocus && t.props.onFocus(e)
                        }, t.handleInputBlur = function(e) {
                            t.props.onBlur && t.props.onBlur(e)
                        }, t.handleValidationError = function(e) {
                            t.props.onValidationError && t.props.onValidationError(e)
                        }, t.validateTOS = function(e) {
                            if (!e) return t.handleValidationError({
                                field: t.props.name,
                                message: Ie("en-US", "PLEASE ACCEPT QUIZLET'S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE.")
                            });
                            Object(V.a)("signup_form_success_tos"), t.handleValidationError({
                                field: t.props.name,
                                message: !1
                            })
                        }, t
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.getTOSLink = function() {
                        var e = Ie("en-US", "Terms of Service");
                        return Object(ve.a)(u.a.createElement(P.a, {
                            newTab: !0,
                            title: Ie("en-US", "Open the Terms of Service in a new window"),
                            to: "/tos"
                        }, u.a.createElement(Ee.a, {
                            component: "span",
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        })))
                    }, n.getPrivacyPolicyLink = function() {
                        return Object(ve.a)(u.a.createElement(P.a, {
                            newTab: !0,
                            title: Ie("en-US", "Open the Privacy Policy in a new window"),
                            to: "/privacy"
                        }, u.a.createElement(E.a, {
                            _precomputed: Ie("en-US", "Privacy Policy", {})
                        })))
                    }, n.renderPrecheckedTOS = function() {
                        return Object(f.j)() ? u.a.createElement(E.a, {
                            _precomputed: Ie("en-US", "By tapping Sign up, you accept Quizlet's {tosLink} and {privacyPolicyLink}", {
                                privacyPolicyLink: this.getPrivacyPolicyLink(),
                                tosLink: this.getTOSLink()
                            })
                        }) : u.a.createElement(E.a, {
                            _precomputed: Ie("en-US", "By clicking Sign up, you accept Quizlet's {tosLink} and {privacyPolicyLink}", {
                                privacyPolicyLink: this.getPrivacyPolicyLink(),
                                tosLink: this.getTOSLink()
                            })
                        })
                    }, n.renderTOSCheckbox = function() {
                        var e = u.a.createElement(E.a, {
                            _precomputed: Ie("en-US", "I accept Quizlet's {tosLink} and {privacyPolicyLink}", {
                                privacyPolicyLink: this.getPrivacyPolicyLink(),
                                tosLink: this.getTOSLink()
                            })
                        });
                        return u.a.createElement(fe.a, {
                            checked: this.props.checked,
                            invalid: this.props.invalid,
                            label: e,
                            name: this.props.name,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus
                        })
                    }, n.render = function() {
                        var e = N()("TosCheckbox", {
                            "is-invalid": this.props.invalid,
                            "is-prechecked": !this.shouldValidateTOS()
                        });
                        return u.a.createElement(v.a, {
                            className: e
                        }, this.shouldValidateTOS() ? this.renderTOSCheckbox() : this.renderPrecheckedTOS())
                    }, n.shouldValidateTOS = function() {
                        return "us" !== G.a.countryCode
                    }, t
                }(s.Component),
                be = n("bBvF").default,
                Oe = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handleInputBlur = function(e) {
                            n.props.onBlur && n.props.onBlur(e)
                        }, n.handleInputChange = function(e) {
                            var t = e.currentTarget.checked ? "" + c.eb.TEACHER : "" + c.eb.UNKNOWN;
                            n.setState({
                                value: t
                            }, function() {
                                n.validateSelfIdentifiedUserType()
                            }), n.props.onChange && n.props.onChange(e)
                        }, n.handleInputFocus = function(e) {
                            n.props.onFocus && n.props.onFocus(e)
                        }, n.handleValidationError = function(e) {
                            n.props.onValidationError && n.props.onValidationError(e)
                        }, n.validateSelfIdentifiedUserType = function() {
                            if (n.state.value !== "" + c.eb.TEACHER && n.state.value !== "" + c.eb.STUDENT) return n.handleValidationError({
                                field: n.props.name,
                                message: null
                            });
                            Object(V.a)("signup_form_success_is_teacher"), n.handleValidationError({
                                field: n.props.name,
                                message: !1
                            })
                        }, n.state = {
                            value: t.value || "" + c.eb.TEACHER
                        }, n
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.validateSelfIdentifiedUserType()
                    }, n.render = function() {
                        return u.a.createElement(v.a, null, u.a.createElement(fe.a, {
                            checked: this.props.checked,
                            label: be("en-US", "I am a teacher"),
                            name: this.props.name,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            value: this.state.value
                        }))
                    }, t
                }(s.Component),
                ye = n("xNal"),
                Ue = ["gb", "ca", "nz", "au", "es", "de", "fr", "in", "jp"],
                _e = n("bBvF").default,
                Te = "generic",
                Ne = "birthDay",
                Ce = "birthMonth",
                Re = "birthYear",
                Be = "-1",
                Ae = {
                    BIRTH_DAY: "birth_day",
                    BIRTH_MONTH: "birth_month",
                    BIRTH_YEAR: "birth_year",
                    EMAIL: "email",
                    PASSWORD: "password1",
                    SELF_IDENTIFIED_USER_TYPE: "is_free_teacher",
                    TERMS_OF_SERVICE: "TOS",
                    USERNAME: "username"
                },
                Fe = {
                    NO_REDIRECT_TO_UPSELL: ["checkout-modal", "partner-login-prompt-banner", "purchasable-content-folder-signup-modal", "purchasable-content-sets-signup-modal"]
                },
                ke = 1 / 24 / 60,
                Pe = function(e) {
                    function t(t) {
                        var n, a, o;
                        return (o = e.call(this, t) || this).handleValidationErrors = function(e, t) {
                            var n = e.reduce(function(e, t) {
                                return t.field ? (t.field === Ae.TERMS_OF_SERVICE && t.message && e[Te].unshift(t), t.field === Ne ? (e[Ae.BIRTH_DAY] = t.message, e[Te].push(t)) : t.field === Ce ? (e[Ae.BIRTH_MONTH] = t.message, e[Te].push(t)) : t.field === Re ? (e[Ae.BIRTH_YEAR] = t.message, e[Te].push(t)) : e[t.field] = t.message) : e[Te].push(t), e
                            }, t);
                            o.setState({
                                validationErrorsByInputName: n
                            })
                        }, o.handleNoFieldError = function(e) {
                            return o.handleValidationError({
                                field: null,
                                message: e
                            })
                        }, o.handleGenericError = function() {
                            return o.handleNoFieldError(u.a.createElement(E.a, {
                                _precomputed: _e("en-US", "Oops, something went wrong {emoji}. Please try again.", {
                                    emoji: "😅"
                                })
                            }))
                        }, o.handleSubmitResponse = function(e) {
                            try {
                                if (e.error) {
                                    switch (e.error.identifier) {
                                        case "invalid_oauth_data":
                                        case "exception_client_cookies_broken":
                                            o.handleNoFieldError(u.a.createElement(E.a, {
                                                _precomputed: _e("en-US", "Your browser cookies are not enabled {emoji}. Please enable your browser to accept cookies and then refresh this page to log in. {link}.", {
                                                    emoji: "🍪",
                                                    link: o.renderLearnMoreAboutCookiesLink()
                                                })
                                            }));
                                            break;
                                        case "another_oauth_id_already_associated":
                                            o.handleNoFieldError(u.a.createElement(E.a, {
                                                _precomputed: _e("en-US", "It looks like that email address is already associated with an account {emoji}. Please use a different email address or {link}.", {
                                                    emoji: "🤔",
                                                    link: o.renderLoginLink()
                                                })
                                            }));
                                            break;
                                        default:
                                            o.handleGenericError()
                                    }
                                    return void o.setState({
                                        isSubmitting: !1
                                    })
                                }
                                var t = e.responses[0];
                                t.error && "validation_errors" === t.error.identifier ? (o.handleValidationErrors(e.responses[0].validationErrors, o.state.validationErrorsByInputName), o.setState({
                                    isSubmitting: !1
                                })) : o.shouldNotRedirectToUpsell() ? (o.props.signupMetadata && ye.c.write(o.props.signupOrigin, JSON.stringify(o.props.signupMetadata), {
                                    duration: ke,
                                    secure: !0
                                }), Object(H.a)(o.props.redir || window.location.href)) : t.data && t.data.authentication.redirect && Object(H.a)(t.data.authentication.redirect)
                            } catch (n) {
                                x.a.info("Failed signup/oauth POST inner", {
                                    error: n,
                                    data: e
                                }), o.setState({
                                    isSubmitting: !1
                                }), o.handleGenericError()
                            }
                        }, o.handleSubmit = function(e) {
                            e.preventDefault();
                            var t = o.state.validationErrorsByInputName;
                            t[Te] = [], o.setState({
                                validationErrorsByInputName: t,
                                isSubmitting: !0
                            });
                            var n, a, r = o.state.form;
                            (o.shouldRenderTOS() && o.shouldValidateTOS() && !r[Ae.TERMS_OF_SERVICE] && o.handleValidationError({
                                field: Ae.TERMS_OF_SERVICE,
                                message: u.a.createElement(E.a, {
                                    _precomputed: _e("en-US", "PLEASE ACCEPT QUIZLET'S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE.", {})
                                })
                            }), o.shouldRenderSelfIdentifiedUserType() && r[Ae.SELF_IDENTIFIED_USER_TYPE] === "" + c.eb.UNKNOWN) && Object.assign(r, ((n = {})[Ae.SELF_IDENTIFIED_USER_TYPE] = "" + c.eb.STUDENT, n));
                            o.getIsFormComplete() && !o.props.forOauth && o.getValidationErrorForInput(Ae.TERMS_OF_SERVICE) || (o.props.forOauth ? (a = r, Object(W.f)("/webapi/3.2/oauth-extra-info", a)) : function(e) {
                                return Object(W.f)("/webapi/3.2/direct-signup", e)
                            }(r)).then(o.handleSubmitResponse).catch(function(e) {
                                x.a.info("Failed signup/oauth POST", {
                                    forOauth: o.props.forOauth,
                                    error: e
                                }), o.setState({
                                    isSubmitting: !1
                                }), o.handleGenericError()
                            })
                        }, o.handleInputFocus = function(e) {
                            o.setState({
                                focusedInputName: e.currentTarget.name
                            })
                        }, o.handleInputBlur = function() {
                            o.setState({
                                focusedInputName: null
                            })
                        }, o.handleSelectChange = function(e) {
                            var t, n, a = e.currentTarget,
                                i = a.name,
                                s = a.value,
                                u = r()({}, o.state.form, ((t = {})[i] = s, t)),
                                l = r()({}, o.state.validationErrorsByInputName, ((n = {})[i] = null, n));
                            o.setState({
                                form: u,
                                validationErrorsByInputName: l
                            }, function() {
                                switch (i) {
                                    case Ae.BIRTH_YEAR:
                                    case Ae.BIRTH_MONTH:
                                    case Ae.BIRTH_DAY:
                                        o.validateBirthDate(), o.resetSelfIdentifiedUserTypeIfAgeIsOutsideOfRange(), s === Be && o.showBirthdateInputsContextualErrorsIfNeeded()
                                }
                            })
                        }, o.handleInputChange = function(e) {
                            var t, n, a = e.currentTarget.name,
                                i = e.currentTarget.value;
                            "checkbox" === e.currentTarget.type && (a === Ae.TERMS_OF_SERVICE ? i = e.currentTarget.checked : a === Ae.SELF_IDENTIFIED_USER_TYPE && (i = e.currentTarget.checked ? "" + c.eb.TEACHER : "" + c.eb.UNKNOWN));
                            var s = r()({}, o.state.form, ((t = {})[a] = i, t)),
                                u = r()({}, o.state.validationErrorsByInputName, ((n = {})[a] = null, n));
                            o.setState({
                                form: s,
                                validationErrorsByInputName: u
                            }, function() {
                                switch (a) {
                                    case Ae.USERNAME:
                                    case Ae.EMAIL:
                                    case Ae.PASSWORD:
                                    case Ae.SELF_IDENTIFIED_USER_TYPE:
                                    case Ae.TERMS_OF_SERVICE:
                                        o.showBirthdateInputsContextualErrorsIfNeeded()
                                }
                            })
                        }, o.handleValidationError = function(e) {
                            o.handleValidationErrors([e], o.state.validationErrorsByInputName)
                        }, o.handleClickUsernameSuggestion = function(e) {
                            var t = r()({}, o.state.form, {
                                username: e
                            });
                            o.setState({
                                form: t
                            }), o.emailInputRef && o.emailInputRef.focus()
                        }, o.renderLearnMoreAboutCookiesLink = function() {
                            return Object(l.renderToStaticMarkup)(u.a.createElement(P.a, {
                                newTab: !0,
                                to: "/cookies"
                            }, u.a.createElement(E.a, {
                                _precomputed: _e("en-US", "Learn more about cookies", {})
                            })))
                        }, o.renderLoginLink = function() {
                            return Object(l.renderToStaticMarkup)(u.a.createElement(P.a, {
                                newTab: !0,
                                to: "/login"
                            }, u.a.createElement(E.a, {
                                _precomputed: _e("en-US", "log in", {})
                            })))
                        }, o.validateBirthDate = function() {
                            var e = o.getAge(),
                                t = o.getIsUnderage(),
                                n = e !== 1 / 0;
                            if (t) {
                                var a, i = r()({}, o.state.form, ((a = {})[Ae.EMAIL] = "", a));
                                o.setState({
                                    form: i
                                })
                            }
                            if (o.props.forOauth && n && !t && "" === o.state.form[Ae.USERNAME]) {
                                var s, u = r()({}, o.state.form, ((s = {})[Ae.USERNAME] = o.props.suggestedUsername, s));
                                o.setState({
                                    form: u
                                })
                            }
                            n && (Object(V.a)("signup_form_success_birthday"), o.handleValidationError({
                                field: Ae.BIRTH_YEAR,
                                message: !1
                            }), o.handleValidationError({
                                field: Ae.BIRTH_MONTH,
                                message: !1
                            }), o.handleValidationError({
                                field: Ae.BIRTH_DAY,
                                message: !1
                            }), o.showBirthdateInputsContextualErrorsIfDateIsInvalid())
                        }, o.showBirthdateInputsContextualErrorsIfNeeded = function() {
                            o.state.form[Ae.BIRTH_DAY] === Be && o.handleValidationError({
                                field: Ae.BIRTH_DAY,
                                message: _e("en-US", "Please enter your birthday")
                            }), o.state.form[Ae.BIRTH_MONTH] === Be && o.handleValidationError({
                                field: Ae.BIRTH_MONTH,
                                message: _e("en-US", "Please enter your birthday")
                            }), o.state.form[Ae.BIRTH_YEAR] === Be && o.handleValidationError({
                                field: Ae.BIRTH_YEAR,
                                message: _e("en-US", "Please enter your birthday")
                            })
                        }, o.showBirthdateInputsContextualErrorsIfDateIsInvalid = function() {
                            var e = parseInt(o.state.form[Ae.BIRTH_DAY], 10),
                                t = parseInt(o.state.form[Ae.BIRTH_MONTH], 10) - 1,
                                n = parseInt(o.state.form[Ae.BIRTH_YEAR], 10);
                            (!Y(n, t, e) || o.getAge() < 0) && o.handleValidationErrors([{
                                field: Ae.BIRTH_DAY,
                                message: _e("en-US", "Please enter a valid date")
                            }, {
                                field: Ae.BIRTH_MONTH,
                                message: _e("en-US", "Please enter a valid date")
                            }, {
                                field: Ae.BIRTH_YEAR,
                                message: _e("en-US", "Please enter a valid date")
                            }], o.state.validationErrorsByInputName)
                        }, o.state = {
                            focusedInputName: "",
                            isSubmitting: !1,
                            form: (n = {
                                couponCode: t.couponCode
                            }, n[Ae.TERMS_OF_SERVICE] = !1, n[Ae.BIRTH_DAY] = t.birthDay || Be, n[Ae.BIRTH_MONTH] = t.birthMonth || Be, n[Ae.BIRTH_YEAR] = t.birthYear || Be, n.data = t.data, n[Ae.EMAIL] = t.email || "", n[Ae.SELF_IDENTIFIED_USER_TYPE] = t.selfIdentifiedTeacherStatus || "" + c.eb.UNKNOWN, n[Ae.PASSWORD] = "", n.redir = t.redir, n.signupOrigin = t.signupOrigin, n.screenName = t.screenName, n[Ae.USERNAME] = "", n),
                            validationErrorsByInputName: (a = {}, a[Te] = [], a)
                        }, o
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.validateBirthDate()
                    }, n.getValidationErrorForInput = function(e) {
                        return this.state.validationErrorsByInputName[e]
                    }, n.getInvalidStateForInput = function(e) {
                        var t = this.state.validationErrorsByInputName[e];
                        return !!t || (!1 !== t || this.state.focusedInputName !== e) && void 0
                    }, n.getAge = function() {
                        return Object(j.a)(parseInt(this.state.form[Ae.BIRTH_YEAR], 10), parseInt(this.state.form[Ae.BIRTH_MONTH], 10), parseInt(this.state.form[Ae.BIRTH_DAY], 10))
                    }, n.getDependentField = function(e) {
                        return {
                            name: e,
                            value: this.state.form[e],
                            invalid: this.getValidationErrorForInput(e)
                        }
                    }, n.getIsUnderage = function() {
                        return this.getAge() < G.a.underAgeCutoff
                    }, n.getRequiredFields = function() {
                        var e = [Ae.BIRTH_DAY, Ae.BIRTH_MONTH, Ae.BIRTH_YEAR, Ae.USERNAME];
                        return this.props.forOauth && this.getIsUnderage() ? e.push(Ae.EMAIL) : this.props.forOauth || (e.push(Ae.EMAIL), e.push(Ae.PASSWORD)), e
                    }, n.getIsFormComplete = function() {
                        var e = this;
                        return this.getRequiredFields().every(function(t) {
                            return !1 === e.state.validationErrorsByInputName[t]
                        })
                    }, n.renderValidationErrors = function() {
                        var e = Object(q.a)(this.state.validationErrorsByInputName[Te].map(function(e) {
                            return e.message
                        }));
                        return u.a.createElement(L.a, {
                            boxed: !0,
                            uppercaseDeprecated: !0,
                            variant: "alert"
                        }, u.a.createElement(D.a, null, e.map(function(e, t) {
                            return u.a.createElement(w.a, {
                                key: t
                            }, e)
                        })))
                    }, n.renderBirthday = function() {
                        var e = u.a.createElement(E.a, {
                                _precomputed: _e("en-US", "Birthday", {})
                            }),
                            t = this.state.validationErrorsByInputName[Ae.BIRTH_DAY] || this.state.validationErrorsByInputName[Ae.BIRTH_MONTH] || this.state.validationErrorsByInputName[Ae.BIRTH_YEAR] || e;
                        return u.a.createElement(F, {
                            dayInputInvalid: this.getInvalidStateForInput(Ae.BIRTH_DAY),
                            dayInputName: Ae.BIRTH_DAY,
                            dayInputOnChange: this.handleSelectChange,
                            dayInputValue: this.state.form[Ae.BIRTH_DAY],
                            label: t,
                            monthInputInvalid: this.getInvalidStateForInput(Ae.BIRTH_MONTH),
                            monthInputName: Ae.BIRTH_MONTH,
                            monthInputOnChange: this.handleSelectChange,
                            monthInputValue: this.state.form[Ae.BIRTH_MONTH],
                            yearInputInvalid: this.getInvalidStateForInput(Ae.BIRTH_YEAR),
                            yearInputName: Ae.BIRTH_YEAR,
                            yearInputOnChange: this.handleSelectChange,
                            yearInputValue: this.state.form[Ae.BIRTH_YEAR]
                        })
                    }, n.renderUsername = function() {
                        var e = this.state.validationErrorsByInputName[Ae.USERNAME] || u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Username", {})
                        });
                        return u.a.createElement(re, {
                            autoPopulateSuggestedUsername: this.props.forOauth,
                            forOauth: this.props.forOauth,
                            invalid: this.getInvalidStateForInput(Ae.USERNAME),
                            label: e,
                            name: Ae.USERNAME,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onClickSuggestedUsername: this.handleClickUsernameSuggestion,
                            onFocus: this.handleInputFocus,
                            onValidationError: this.handleValidationError,
                            placeholder: this.shouldRenderRealNameWarning() ? _e("en-US", "Do not use your real name!") : _e("en-US", "andrew123"),
                            value: this.state.form[Ae.USERNAME],
                            variant: "boxed"
                        })
                    }, n.renderEmail = function() {
                        var e = this,
                            t = this.state.validationErrorsByInputName[Ae.EMAIL];
                        return t || (t = this.getIsUnderage() ? u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Parent's email", {})
                        }) : u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Email", {})
                        })), u.a.createElement(ge, {
                            inputRef: function(t) {
                                e.emailInputRef = t
                            },
                            invalid: this.getInvalidStateForInput(Ae.EMAIL),
                            label: t,
                            name: Ae.EMAIL,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onValidationError: this.handleValidationError,
                            placeholder: _e("en-US", "user@quizlet.com"),
                            value: this.state.form[Ae.EMAIL],
                            variant: "boxed"
                        })
                    }, n.renderPassword = function() {
                        var e = this.state.validationErrorsByInputName[Ae.PASSWORD] || u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Password", {})
                        });
                        return u.a.createElement(le, {
                            dependency: this.getDependentField(Ae.USERNAME),
                            invalid: this.getInvalidStateForInput(Ae.PASSWORD),
                            label: e,
                            name: Ae.PASSWORD,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onValidationError: this.handleValidationError,
                            placeholder: "●●●●●●●●",
                            value: this.state.form[Ae.PASSWORD],
                            variant: "boxed"
                        })
                    }, n.renderSelfIdentifiedUserTypeCheckbox = function() {
                        return u.a.createElement(Oe, {
                            checked: this.state.form[Ae.SELF_IDENTIFIED_USER_TYPE] === "" + c.eb.TEACHER,
                            name: Ae.SELF_IDENTIFIED_USER_TYPE,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onValidationError: this.handleValidationError,
                            value: "" + c.eb.TEACHER
                        })
                    }, n.renderTOS = function() {
                        return u.a.createElement(Se, {
                            checked: this.state.form[Ae.TERMS_OF_SERVICE],
                            invalid: this.getInvalidStateForInput(Ae.TERMS_OF_SERVICE),
                            name: Ae.TERMS_OF_SERVICE,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onValidationError: this.handleValidationError
                        })
                    }, n.renderBelowForm = function() {
                        return u.a.createElement("div", {
                            className: "SignupWithEmailForm-belowForm"
                        }, u.a.createElement(v.a, {
                            className: "SignupWithEmailForm-alreadyHaveAccount"
                        }, u.a.createElement("span", {
                            className: "SignupWithEmailForm-loginMessage"
                        }, u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Already have an account?", {})
                        }), " ", u.a.createElement(P.a, {
                            onClick: this.props.onOpenLogin
                        }, u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Log in", {})
                        })))), u.a.createElement(v.a, null, u.a.createElement("div", {
                            className: "SignupWithEmailForm-privacyDescription"
                        }, u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Quizlet will never sell your email information to <strong>any</strong> third parties.", {})
                        }), " ", u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "We <strong>hate spam</strong> just as much as you do.", {})
                        }))))
                    }, n.render = function() {
                        return u.a.createElement("form", {
                            className: "SignupWithEmailForm",
                            onSubmit: this.handleSubmit
                        }, this.renderBirthday(), this.renderUsername(), this.shouldRenderEmail() ? this.renderEmail() : null, this.shouldRenderPassword() ? this.renderPassword() : null, this.shouldRenderSelfIdentifiedUserType() ? this.renderSelfIdentifiedUserTypeCheckbox() : null, this.shouldRenderTOS() ? this.renderTOS() : null, this.shouldRenderValidationErrors() ? this.renderValidationErrors() : null, u.a.createElement(k.a, {
                            disabled: this.shouldDisableSubmitButton(),
                            loading: this.state.isSubmitting,
                            type: "submit",
                            width: "fill"
                        }, u.a.createElement(E.a, {
                            _precomputed: _e("en-US", "Sign up", {})
                        })), this.shouldRenderBelowForm() ? this.renderBelowForm() : null)
                    }, n.shouldDisableSubmitButton = function() {
                        return this.shouldDisableSignUpButtonUntilValidForm() && !this.getIsFormComplete()
                    }, n.shouldDisableSignUpButtonUntilValidForm = function() {
                        return "us" === G.a.countryCode && "on" === this.props.abTests.DisableSignUpButtonUntilValidFormUs || Ue.includes(G.a.countryCode) && "on" === this.props.abTests.DisableSignUpButtonUntilValidFormInternational
                    }, n.resetSelfIdentifiedUserTypeIfAgeIsOutsideOfRange = function() {
                        if (!this.shouldRenderSelfIdentifiedUserType()) {
                            var e, t = r()({}, this.state.form, ((e = {})[Ae.SELF_IDENTIFIED_USER_TYPE] = "" + c.eb.UNKNOWN, e));
                            this.setState({
                                form: t
                            })
                        }
                    }, n.shouldRenderValidationErrors = function() {
                        return this.state.validationErrorsByInputName[Te] && this.state.validationErrorsByInputName[Te].length
                    }, n.shouldValidateTOS = function() {
                        return "us" !== G.a.countryCode
                    }, n.shouldRenderEmail = function() {
                        return !this.props.forOauth || this.getIsUnderage()
                    }, n.shouldRenderPassword = function() {
                        return !this.props.forOauth
                    }, n.shouldRenderTOS = function() {
                        return !this.props.forOauth
                    }, n.shouldRenderBelowForm = function() {
                        return !this.props.forOauth
                    }, n.shouldRenderRealNameWarning = function() {
                        return this.getIsUnderage()
                    }, n.shouldRenderSelfIdentifiedUserType = function() {
                        var e = this.getAge();
                        return e >= G.a.lowerTeacherAgeBound && e <= G.a.upperTeacherAgeBound
                    }, n.shouldNotRedirectToUpsell = function() {
                        return Object(p.l)() || !!this.props.signupOrigin && Fe.NO_REDIRECT_TO_UPSELL.includes(this.props.signupOrigin)
                    }, t
                }(u.a.Component);
            Pe.defaultProps = {
                forOauth: !1
            };
            t.a = Object(M.a)()(Pe)
        },
        UQ0i: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("pVnL"),
                r = n.n(a),
                o = n("VbXa"),
                i = n.n(o),
                s = n("q1tI"),
                u = n.n(s),
                l = n("TAwQ"),
                c = n("dxfC"),
                p = n("zK28"),
                d = n("T3U7"),
                h = n("xvNY"),
                m = n("13SJ"),
                g = n("xNal"),
                f = n("og3H"),
                E = 1 / 24 / 2,
                v = "facebook.com";

            function I(e) {
                return null === g.c.read(f.m.SIGNUP__HIDE_FB_BUTTON) && g.c.write(f.m.SIGNUP__HIDE_FB_BUTTON, e, {
                    duration: E
                }), "1" === e
            }
            var S = n("Nxgj"),
                b = n("78K5"),
                O = n("dHOp"),
                y = n("Pxp3"),
                U = n("OpqZ"),
                _ = n("S41V"),
                T = n("mGzj"),
                N = n("t1Ez"),
                C = n("bBvF").default,
                R = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    i()(t, e);
                    var n = t.prototype;
                    return n.renderFacebookLoginButton = function() {
                        return u.a.createElement(b.a, {
                            facebookLoginUrl: Object(O.a)(this.props.socialLoginParams),
                            label: C("en-US", "Continue with Facebook"),
                            variant: "small"
                        })
                    }, n.renderGoogleLoginButton = function() {
                        return u.a.createElement(S.a, {
                            googleLoginUrl: Object(O.b)(this.props.socialLoginParams),
                            label: C("en-US", "Continue with Google"),
                            variant: "small"
                        })
                    }, n.renderFacebookButtonColumn = function() {
                        return u.a.createElement(_.a, {
                            width: .5
                        }, this.renderFacebookLoginButton())
                    }, n.render = function() {
                        return u.a.createElement(y.a, {
                            className: "SignupWithCtas"
                        }, u.a.createElement(y.a, {
                            key: "primaryCtas"
                        }, this.props.message ? u.a.createElement(y.a, {
                            className: "SignupWithCtas-message"
                        }, this.props.message) : null, u.a.createElement(U.a, null, u.a.createElement(_.a, {
                            width: this.props.shouldRenderFacebookLoginButton ? .5 : 1
                        }, this.renderGoogleLoginButton()), this.props.shouldRenderFacebookLoginButton ? this.renderFacebookButtonColumn() : null)), u.a.createElement(T.a, {
                            key: "divider"
                        }, u.a.createElement(N.a, {
                            _precomputed: C("en-US", "OR EMAIL", {})
                        })))
                    }, t
                }(u.a.PureComponent),
                B = n("Qyje"),
                A = n.n(B);
            n.d(t, "default", function() {
                return F
            });
            var F = function(e) {
                function t(t) {
                    var n;
                    return (n = e.call(this, t) || this).handleClose = function() {
                        n.props.actions && n.props.actions.onClose && !n.getIsContinuingOauth() && n.props.actions.onClose()
                    }, n.handleOpenLogin = function() {
                        n.props.actions && n.props.actions.onOpenLogin ? n.props.actions.onOpenLogin() : QWait("Quizlet.loginModal", function() {
                            return p.a.openLoginModal()
                        })
                    }, n.state = {
                        hideFbButton: !1
                    }, n
                }
                i()(t, e);
                var n = t.prototype;
                return n.componentDidMount = function() {
                    var e = this;
                    this.props.isOpen && (Object(d.a)("sign_up_modal_opened"), Object(h.n)()),
                        function() {
                            try {
                                var e = g.c.read(f.m.SIGNUP__HIDE_FB_BUTTON);
                                return null !== e ? Promise.resolve("1" === e) : Object(m.a)("https://" + v).then(function() {
                                    return I("0")
                                }).catch(function() {
                                    return I("1")
                                })
                            } catch (t) {
                                return Promise.resolve(!1)
                            }
                        }().then(function(t) {
                            e.setState({
                                hideFbButton: t
                            })
                        })
                }, n.componentDidUpdate = function(e) {
                    !e.isOpen && this.props.isOpen && (Object(d.a)("sign_up_modal_opened"), Object(h.n)())
                }, n.getScreenName = function() {
                    var e = A.a.parse(location.search);
                    return e.screenName ? e.screenName : p.a.actionString
                }, n.getSocialLoginParams = function() {
                    return this.props.signupOrigin ? {
                        customParams: {
                            screenName: this.getScreenName(),
                            signupOrigin: this.props.signupOrigin
                        },
                        redirect: this.props.redir
                    } : {}
                }, n.getIsContinuingOauth = function() {
                    return this.props.signupFormData && this.props.signupFormData.forOauth
                }, n.getIncludeCloseButton = function() {
                    return this.props.includeCloseButton && !this.getIsContinuingOauth()
                }, n.renderCtas = function() {
                    return u.a.createElement(R, {
                        message: this.props.message,
                        shouldRenderFacebookLoginButton: this.shouldRenderFacebookLoginButton(),
                        socialLoginParams: this.getSocialLoginParams()
                    })
                }, n.renderSignupForm = function() {
                    return u.a.createElement(l.a, r()({
                        couponCode: this.props.couponCode,
                        redir: this.props.redir,
                        screenName: this.getScreenName(),
                        signupMetadata: this.props.signupMetadata,
                        signupOrigin: this.props.signupOrigin
                    }, this.props.signupFormData, {
                        onOpenLogin: this.handleOpenLogin
                    }))
                }, n.render = function() {
                    return u.a.createElement("div", {
                        className: "SignupPromptModalNew"
                    }, u.a.createElement(c.a, {
                        headerContent: this.props.header,
                        headerContentSize: this.props.header ? 4 : 3,
                        headerContentVariant: this.props.header ? "thin" : null,
                        includeCloseButton: this.getIncludeCloseButton(),
                        isOpen: this.props.isOpen,
                        onClose: this.handleClose,
                        preventCloseOnOverlayClick: this.props.preventCloseOnOverlayClick
                    }, this.getIsContinuingOauth() ? null : this.renderCtas(), this.renderSignupForm()))
                }, n.shouldRenderFacebookLoginButton = function() {
                    return !this.state.hideFbButton
                }, t
            }(u.a.PureComponent);
            F.defaultProps = {
                includeCloseButton: !0
            }
        },
        VSSp: function(e, t, n) {
            "use strict";
            var a = n("pVnL"),
                r = n.n(a),
                o = n("VbXa"),
                i = n.n(o),
                s = n("q1tI"),
                u = n.n(s),
                l = n("6MTt"),
                c = n("9WHe");

            function p(e) {
                c.a.error(e)
            }
            var d = n("INDh");

            function h() {
                var e = new Set,
                    t = !1,
                    n = {};
                return l.a.getAllTestNames().forEach(function(a) {
                    var r = l.a.peekAtVariation(a);
                    Object.defineProperty(n, a, {
                        get: function() {
                            return e.add(a), t && l.a.enroll(a), r
                        }
                    })
                }), {
                    abTestsMap: n,
                    autoEnroll: function() {
                        t || (e.forEach(function(e) {
                            return l.a.enroll(e)
                        }), t = !0)
                    }
                }
            }
            n.d(t, "a", function() {
                return m
            });

            function m() {
                var e = h();
                return Object(d.a)(function(t) {
                    return function(n) {
                        function a(e, t) {
                            var a;
                            return a = n.call(this, e, t) || this, void 0 !== e.isOpen && p("Auto-enrolled component must not have an `isOpen` property. Use `autoEnrollingModalAbTestsDecorator` if this component is visible only when `isOpen` is true."), a
                        }
                        i()(a, n);
                        var o = a.prototype;
                        return o.componentDidMount = function() {
                            e.autoEnroll()
                        }, o.render = function() {
                            return u.a.createElement(t, r()({}, this.props, {
                                abTests: e.abTestsMap
                            }))
                        }, a
                    }(u.a.Component)
                })
            }
        },
        WjpJ: function(e, t, n) {
            var a = n("HLqC")();
            e.exports = a
        },
        ZCgT: function(e, t, n) {
            var a = n("tLB3"),
                r = 1 / 0,
                o = 1.7976931348623157e308;
            e.exports = function(e) {
                return e ? (e = a(e)) === r || e === -r ? (e < 0 ? -1 : 1) * o : e == e ? e : 0 : 0 === e ? e : 0
            }
        },
        aniC: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n("o0o1"),
                r = n.n(a),
                o = n("yXPU"),
                i = n.n(o),
                s = n("VbXa"),
                u = n.n(s),
                l = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return u()(t, e), t.validate = function() {
                        var e = i()(r.a.mark(function e(n) {
                            var a;
                            return r.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.get({
                                            email: n
                                        });
                                    case 2:
                                        return a = e.sent, e.abrupt("return", a[0].data.validateEmail);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), t
                }(n("SQJ4").a);
            l.URL_BASE = "validate-email", l.API_VERSION = "3.3", l.ALLOW_MULTIPLE_REQUESTS = !1
        },
        bBuN: function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                var a = t - 1;
                if (Number.isNaN(a) || Number.isNaN(e) || Number.isNaN(n) || -1 === t || -1 === e || -1 === n) return 1 / 0;
                var r = new Date,
                    o = new Date(e, a, n),
                    i = r.getFullYear() - o.getFullYear(),
                    s = r.getMonth() - o.getMonth();
                return (s < 0 || 0 === s && r.getDate() < o.getDate()) && i--, i
            }
            n.d(t, "a", function() {
                return a
            })
        },
        dHOp: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return u
            }), n.d(t, "a", function() {
                return l
            });
            var a = n("pVnL"),
                r = n.n(a),
                o = "google-oauth-redirector",
                i = "fb-oauth-redirector";

            function s(e) {
                var t = e.oauthRedirectorUri,
                    n = e.redirect,
                    a = void 0 === n ? null : n,
                    o = e.reauthenticate,
                    i = void 0 !== o && o,
                    s = e.customParams,
                    u = void 0 === s ? {} : s,
                    l = a;
                null === l && (l = window.location.pathname + window.location.search);
                var c, p = {
                    from: l
                };
                return i && (p = r()({}, p, {
                    reauthenticate: "1"
                })), u && (p = r()({}, p, {
                    customParams: JSON.stringify(u)
                })), "/" + t + "?" + (c = p, Object.keys(c).map(function(e) {
                    return [e, c[e]].map(encodeURIComponent).join("=")
                }).join("&"))
            }

            function u(e) {
                var t = e.redirect,
                    n = void 0 === t ? null : t,
                    a = e.reauthenticate,
                    r = void 0 !== a && a,
                    i = e.customParams;
                return s({
                    oauthRedirectorUri: o,
                    redirect: n,
                    reauthenticate: r,
                    customParams: void 0 === i ? {} : i
                })
            }

            function l(e) {
                var t = e.redirect,
                    n = void 0 === t ? null : t,
                    a = e.reauthenticate,
                    r = void 0 !== a && a,
                    o = e.customParams;
                return s({
                    oauthRedirectorUri: i,
                    redirect: n,
                    reauthenticate: r,
                    customParams: void 0 === o ? {} : o
                })
            }
        },
        gTWh: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("pn57"),
                r = n("Vg22"),
                o = n("FdmV"),
                i = n("YDJX"),
                s = n("S40T"),
                u = n("X890"),
                l = n("Ri2w"),
                c = n("LkIj"),
                p = n("9WHe"),
                d = n("fdo3"),
                h = n("bBvF").default,
                m = Object(i.createAction)(u.a.CHANGE_INPUT),
                g = Object(i.createAction)(u.a.RESET_SUBMISSION),
                f = Object(i.createAction)(u.a.SUBMIT_FORM_ASYNC__FAILURE),
                E = Object(i.createAction)(u.a.SUBMIT_FORM),
                v = function(e) {
                    return function(t, n) {
                        var a = n().get("login");
                        t(E()), Object(l.f)(e, Object(c.a)(a)).then(function(e) {
                            e.success ? Object(d.a)(e.path) : (t(f(e.errors || [])), window.setTimeout(function() {
                                return t(g())
                            }, a.get("numFailedAttempts") * u.b))
                        }).catch(function(e) {
                            var n;
                            n = e.name === l.a.name ? h("en-US", "Sorry, something went wrong. Please try again.") : e.message === l.b || e.error && e.error.code === s.Http.TooManyRequests ? h("en-US", "We have detected an unusual number of attempts to log in. Please try again in a few minutes.") : "number" == typeof e.timeout ? h("en-US", "Sorry, the request timed out. Please try again.") : h("en-US", "Sorry, something went wrong. Please try again."), window.setTimeout(function() {
                                t(g())
                            }, a.get("numFailedAttempts") * u.b), t(f([{
                                type: u.c,
                                message: n
                            }])), p.a.error("login_form_generic_error", e)
                        })
                    }
                },
                I = n("VbXa"),
                S = n.n(I),
                b = n("q1tI"),
                O = n.n(b),
                y = n("78K5"),
                U = n("Nxgj"),
                _ = n("t1Ez"),
                T = n("S41V"),
                N = n("Pxp3"),
                C = n("vlgG"),
                R = n("a08m"),
                B = n("ZlgO"),
                A = n("fkqS"),
                F = n("E/Xc"),
                k = n("dxfC"),
                P = n("DLQF"),
                D = n("OpqZ"),
                w = n("rpuy"),
                L = n("dHOp"),
                M = n("zK28"),
                V = n("bBvF").default,
                H = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).handleSubmit = function(e) {
                            e.preventDefault(), n.props.actions.onSubmit(n.getLoginUrl())
                        }, n.handleInputChange = function(e) {
                            n.props.actions.onChange(e.target)
                        }, t.username && t.actions.onChange({
                            name: u.d.USERNAME,
                            value: t.username
                        }), n
                    }
                    S()(t, e);
                    var n = t.prototype;
                    return n.getLoginUrl = function() {
                        return "/login?redir=" + encodeURIComponent(this.props.redir)
                    }, n.renderBelowForm = function() {
                        return O.a.createElement(D.a, null, O.a.createElement(T.a, {
                            width: .5
                        }, O.a.createElement("div", {
                            className: "LoginPromptModal-logoutReminder"
                        }, O.a.createElement(w.a, null, O.a.createElement(_.a, {
                            _precomputed: V("en-US", "Remember to log out on shared devices", {})
                        })))), O.a.createElement(T.a, {
                            width: .5
                        }, this.props.onOpenMagicLink && O.a.createElement("div", {
                            className: "LoginPromptModal-magicLinkWrapper"
                        }, O.a.createElement(D.a, null, O.a.createElement(R.a, {
                            onClick: this.props.onOpenMagicLink
                        }, O.a.createElement(_.a, {
                            _precomputed: V("en-US", "Use magic link instead", {})
                        }))))))
                    }, n.renderLoginForm = function() {
                        var e = this.props.validationErrorsByInputName.get(u.d.USERNAME) || O.a.createElement(_.a, {
                                _precomputed: V("en-US", "USERNAME", {})
                            }),
                            t = this.props.validationErrorsByInputName.get(u.d.PASSWORD) || O.a.createElement(_.a, {
                                _precomputed: V("en-US", "PASSWORD", {})
                            });
                        return O.a.createElement("form", {
                            action: this.getLoginUrl(),
                            className: "LoginPromptModal-form",
                            method: "post",
                            onSubmit: this.handleSubmit
                        }, this.props.hasGenericValidationErrors ? O.a.createElement(D.a, null, this.renderValidationErrors()) : null, O.a.createElement(D.a, null, O.a.createElement(N.a, {
                            className: "LoginPromptModal-loginFieldsWrapper"
                        }, O.a.createElement(C.a, {
                            autoCorrect: "off",
                            autoFocus: !this.props.username,
                            invalid: this.props.invalidStateByInputName.get(u.d.USERNAME),
                            label: e,
                            name: u.d.USERNAME,
                            onChange: this.handleInputChange,
                            placeholder: V("en-US", "Type your username"),
                            spellCheck: !1,
                            type: "text",
                            value: this.props.form.get(u.d.USERNAME)
                        }), O.a.createElement(C.a, {
                            autoFocus: !!this.props.username,
                            invalid: this.props.invalidStateByInputName.get(u.d.PASSWORD),
                            label: t,
                            labelDetail: O.a.createElement("div", {
                                className: "LoginPromptModal-forgotPasswordLinkWrapper"
                            }, O.a.createElement(R.a, {
                                to: "/forgotten"
                            }, O.a.createElement(_.a, {
                                _precomputed: V("en-US", "Forgot?", {})
                            }))),
                            name: u.d.PASSWORD,
                            onChange: this.handleInputChange,
                            placeholder: V("en-US", "Type your password"),
                            type: "password",
                            value: this.props.form.get(u.d.PASSWORD)
                        }))), O.a.createElement(F.a, {
                            hero: !0,
                            loading: this.props.isSubmitting,
                            type: "submit",
                            width: "fill"
                        }, O.a.createElement(_.a, {
                            _precomputed: V("en-US", "Log in", {})
                        })))
                    }, n.renderSignUpCTA = function() {
                        return O.a.createElement("div", {
                            className: "LoginPromptModal-signUpCTAContainer"
                        }, O.a.createElement(N.a, {
                            className: "LoginPromptModal-signUpCTA"
                        }, O.a.createElement("span", {
                            className: "LoginPromptModal-signUpCTAMessage"
                        }, O.a.createElement(_.a, {
                            _precomputed: V("en-US", "New to Quizlet?", {})
                        }), " ", O.a.createElement(R.a, {
                            onClick: this.props.onOpenSignup
                        }, O.a.createElement(_.a, {
                            _precomputed: V("en-US", "Create an account", {})
                        })))))
                    }, n.renderSocialLoginOptions = function() {
                        return O.a.createElement("div", {
                            className: "LoginPromptModal-socialButtons"
                        }, O.a.createElement(D.a, null, O.a.createElement(U.a, {
                            googleLoginUrl: Object(L.b)({
                                customParams: {
                                    signupOrigin: "global-signup-modal-google",
                                    screenName: M.a.actionString
                                }
                            }),
                            label: V("en-US", "Log in with Google")
                        })), O.a.createElement(D.a, null, O.a.createElement(y.a, {
                            facebookLoginUrl: Object(L.a)({
                                customParams: {
                                    signupOrigin: "global-signup-modal-facebook",
                                    screenName: M.a.actionString
                                }
                            }),
                            label: V("en-US", "Log in with Facebook")
                        })))
                    }, n.renderValidationErrors = function() {
                        var e = this.props.validationErrorsByInputName.get(u.c).map(function(e) {
                            return O.a.createElement(A.a, {
                                key: e.message
                            }, e.message)
                        }).toArray();
                        return O.a.createElement(P.a, {
                            boxed: !0,
                            uppercaseDeprecated: !0,
                            variant: "alert"
                        }, O.a.createElement(B.a, null, e))
                    }, n.render = function() {
                        return O.a.createElement("div", {
                            className: "LoginPromptModal"
                        }, O.a.createElement(k.a, {
                            headerContent: this.props.header,
                            includeCloseButton: this.props.includeCloseButton,
                            isOpen: this.props.isOpen,
                            onClose: this.props.onClose,
                            preventCloseOnOverlayClick: this.props.preventCloseOnOverlayClick
                        }, this.renderSocialLoginOptions(), this.renderLoginForm(), this.renderBelowForm(), this.props.onOpenSignup ? this.renderSignUpCTA() : null))
                    }, t
                }(b.PureComponent);
            H.defaultProps = {
                header: O.a.createElement(_.a, {
                    _precomputed: V("en-US", "Log in", {})
                }),
                includeCloseButton: !0,
                redir: window.location.href
            };
            var j = Object(o.a)("login", {
                form: c.a,
                hasGenericValidationErrors: c.b,
                invalidStateByInputName: c.c,
                isSubmitting: c.e,
                validationErrorsByInputName: c.d
            });
            t.default = Object(r.connect)(j, function(e) {
                return {
                    actions: Object(a.bindActionCreators)({
                        onChange: m,
                        onSubmit: v
                    }, e)
                }
            })(H)
        },
        mGzj: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n("VbXa"),
                r = n.n(a),
                o = n("q1tI"),
                i = n.n(o),
                s = n("TSYQ"),
                u = n.n(s),
                l = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return r()(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.children,
                            a = t.variant,
                            r = u()("UIDivider-label", ((e = {})["UIDivider--" + a] = "default" !== a, e));
                        return i.a.createElement("div", {
                            className: "UIDivider"
                        }, i.a.createElement("div", {
                            className: "UIDivider-separator"
                        }, i.a.createElement("hr", {
                            className: "UIDivider-separatorLine"
                        })), i.a.createElement("div", {
                            className: r
                        }, n), i.a.createElement("div", {
                            className: "UIDivider-separator"
                        }, i.a.createElement("hr", {
                            className: "UIDivider-separatorLine"
                        })))
                    }, t
                }(i.a.PureComponent);
            l.defaultProps = {
                variant: "default"
            }
        },
        "mv/X": function(e, t, n) {
            var a = n("ljhN"),
                r = n("MMmD"),
                o = n("wJg7"),
                i = n("GoyQ");
            e.exports = function(e, t, n) {
                if (!i(n)) return !1;
                var s = typeof t;
                return !!("number" == s ? r(n) && o(t, n.length) : "string" == s && t in n) && a(n[t], e)
            }
        }
    }
]);
//# sourceMappingURL=login_signup_lazy.0591dd27e9cd6b9.a.js.map