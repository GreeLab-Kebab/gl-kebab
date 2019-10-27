(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["npm.whatwg-url"], {
        "1YbNtRQMJ9": function(t, e, r) {
            "use strict";
            e.URL = r("8qd4TcEZlY").interface, e.URLSearchParams = r("xlJW9R8vZK").interface, e.parseURL = r("xVAhskGAtl").parseURL, e.basicURLParse = r("xVAhskGAtl").basicURLParse, e.serializeURL = r("xVAhskGAtl").serializeURL, e.serializeHost = r("xVAhskGAtl").serializeHost, e.serializeInteger = r("xVAhskGAtl").serializeInteger, e.serializeURLOrigin = r("xVAhskGAtl").serializeURLOrigin, e.setTheUsername = r("xVAhskGAtl").setTheUsername, e.setThePassword = r("xVAhskGAtl").setThePassword, e.cannotHaveAUsernamePasswordPort = r("xVAhskGAtl").cannotHaveAUsernamePasswordPort, e.percentDecode = r("Sh8VrWWVXX").percentDecode
        },
        "6aNXQkitw4": function(t, e, r) {
            "use strict";
            const s = r("xVAhskGAtl"),
                i = r("Sh8VrWWVXX"),
                n = r("xlJW9R8vZK");
            e.implementation = class {
                constructor(t) {
                    const e = t[0],
                        r = t[1];
                    let i = null;
                    if (void 0 !== r && null === (i = s.basicURLParse(r))) throw new TypeError(`Invalid base URL: ${r}`);
                    const o = s.basicURLParse(e, {
                        baseURL: i
                    });
                    if (null === o) throw new TypeError(`Invalid URL: ${e}`);
                    const a = null !== o.query ? o.query : "";
                    this._url = o, this._query = n.createImpl([a], {
                        doNotStripQMark: !0
                    }), this._query._url = this
                }
                get href() {
                    return s.serializeURL(this._url)
                }
                set href(t) {
                    const e = s.basicURLParse(t);
                    if (null === e) throw new TypeError(`Invalid URL: ${t}`);
                    this._url = e, this._query._list.splice(0);
                    const {
                        query: r
                    } = e;
                    null !== r && (this._query._list = i.parseUrlencoded(r))
                }
                get origin() {
                    return s.serializeURLOrigin(this._url)
                }
                get protocol() {
                    return this._url.scheme + ":"
                }
                set protocol(t) {
                    s.basicURLParse(t + ":", {
                        url: this._url,
                        stateOverride: "scheme start"
                    })
                }
                get username() {
                    return this._url.username
                }
                set username(t) {
                    s.cannotHaveAUsernamePasswordPort(this._url) || s.setTheUsername(this._url, t)
                }
                get password() {
                    return this._url.password
                }
                set password(t) {
                    s.cannotHaveAUsernamePasswordPort(this._url) || s.setThePassword(this._url, t)
                }
                get host() {
                    const t = this._url;
                    return null === t.host ? "" : null === t.port ? s.serializeHost(t.host) : s.serializeHost(t.host) + ":" + s.serializeInteger(t.port)
                }
                set host(t) {
                    this._url.cannotBeABaseURL || s.basicURLParse(t, {
                        url: this._url,
                        stateOverride: "host"
                    })
                }
                get hostname() {
                    return null === this._url.host ? "" : s.serializeHost(this._url.host)
                }
                set hostname(t) {
                    this._url.cannotBeABaseURL || s.basicURLParse(t, {
                        url: this._url,
                        stateOverride: "hostname"
                    })
                }
                get port() {
                    return null === this._url.port ? "" : s.serializeInteger(this._url.port)
                }
                set port(t) {
                    s.cannotHaveAUsernamePasswordPort(this._url) || ("" === t ? this._url.port = null : s.basicURLParse(t, {
                        url: this._url,
                        stateOverride: "port"
                    }))
                }
                get pathname() {
                    return this._url.cannotBeABaseURL ? this._url.path[0] : 0 === this._url.path.length ? "" : "/" + this._url.path.join("/")
                }
                set pathname(t) {
                    this._url.cannotBeABaseURL || (this._url.path = [], s.basicURLParse(t, {
                        url: this._url,
                        stateOverride: "path start"
                    }))
                }
                get search() {
                    return null === this._url.query || "" === this._url.query ? "" : "?" + this._url.query
                }
                set search(t) {
                    const e = this._url;
                    if ("" === t) return e.query = null, void(this._query._list = []);
                    const r = "?" === t[0] ? t.substring(1) : t;
                    e.query = "", s.basicURLParse(r, {
                        url: e,
                        stateOverride: "query"
                    }), this._query._list = i.parseUrlencoded(r)
                }
                get searchParams() {
                    return this._query
                }
                get hash() {
                    return null === this._url.fragment || "" === this._url.fragment ? "" : "#" + this._url.fragment
                }
                set hash(t) {
                    if ("" === t) return void(this._url.fragment = null);
                    const e = "#" === t[0] ? t.substring(1) : t;
                    this._url.fragment = "", s.basicURLParse(e, {
                        url: this._url,
                        stateOverride: "fragment"
                    })
                }
                toJSON() {
                    return this.href
                }
            }
        },
        "8qd4TcEZlY": function(t, e, r) {
            "use strict";
            const s = r("pGFe0xeDCN"),
                i = r("O4YWqXyAqZ"),
                n = i.implSymbol;
            class o {
                constructor(t) {
                    if (arguments.length < 1) throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
                    const e = []; {
                        let t = arguments[0];
                        t = s.USVString(t, {
                            context: "Failed to construct 'URL': parameter 1"
                        }), e.push(t)
                    } {
                        let t = arguments[1];
                        void 0 !== t && (t = s.USVString(t, {
                            context: "Failed to construct 'URL': parameter 2"
                        })), e.push(t)
                    }
                    return a.setup(Object.create(new.target.prototype), e)
                }
                toJSON() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].toJSON()
                }
                get href() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].href
                }
                set href(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'href' property on 'URL': The provided value"
                    }), this[n].href = e
                }
                toString() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].href
                }
                get origin() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].origin
                }
                get protocol() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].protocol
                }
                set protocol(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'protocol' property on 'URL': The provided value"
                    }), this[n].protocol = e
                }
                get username() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].username
                }
                set username(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'username' property on 'URL': The provided value"
                    }), this[n].username = e
                }
                get password() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].password
                }
                set password(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'password' property on 'URL': The provided value"
                    }), this[n].password = e
                }
                get host() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].host
                }
                set host(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'host' property on 'URL': The provided value"
                    }), this[n].host = e
                }
                get hostname() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].hostname
                }
                set hostname(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'hostname' property on 'URL': The provided value"
                    }), this[n].hostname = e
                }
                get port() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].port
                }
                set port(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'port' property on 'URL': The provided value"
                    }), this[n].port = e
                }
                get pathname() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].pathname
                }
                set pathname(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'pathname' property on 'URL': The provided value"
                    }), this[n].pathname = e
                }
                get search() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].search
                }
                set search(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'search' property on 'URL': The provided value"
                    }), this[n].search = e
                }
                get searchParams() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return i.getSameObject(this, "searchParams", () => i.tryWrapperForImpl(this[n].searchParams))
                }
                get hash() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].hash
                }
                set hash(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    e = s.USVString(e, {
                        context: "Failed to set the 'hash' property on 'URL': The provided value"
                    }), this[n].hash = e
                }
            }
            Object.defineProperties(o.prototype, {
                toJSON: {
                    enumerable: !0
                },
                href: {
                    enumerable: !0
                },
                toString: {
                    enumerable: !0
                },
                origin: {
                    enumerable: !0
                },
                protocol: {
                    enumerable: !0
                },
                username: {
                    enumerable: !0
                },
                password: {
                    enumerable: !0
                },
                host: {
                    enumerable: !0
                },
                hostname: {
                    enumerable: !0
                },
                port: {
                    enumerable: !0
                },
                pathname: {
                    enumerable: !0
                },
                search: {
                    enumerable: !0
                },
                searchParams: {
                    enumerable: !0
                },
                hash: {
                    enumerable: !0
                },
                [Symbol.toStringTag]: {
                    value: "URL",
                    configurable: !0
                }
            });
            const a = {
                _mixedIntoPredicates: [],
                is(e) {
                    if (e) {
                        if (i.hasOwn(e, n) && e[n] instanceof h.implementation) return !0;
                        for (const r of t.exports._mixedIntoPredicates)
                            if (r(e)) return !0
                    }
                    return !1
                },
                isImpl(e) {
                    if (e) {
                        if (e instanceof h.implementation) return !0;
                        const r = i.wrapperForImpl(e);
                        for (const e of t.exports._mixedIntoPredicates)
                            if (e(r)) return !0
                    }
                    return !1
                },
                convert(e, {
                    context: r = "The provided value"
                } = {}) {
                    if (t.exports.is(e)) return i.implForWrapper(e);
                    throw new TypeError(`${r} is not of type 'URL'.`)
                },
                create(t, e) {
                    let r = Object.create(o.prototype);
                    return r = this.setup(r, t, e)
                },
                createImpl(t, e) {
                    let r = Object.create(o.prototype);
                    return r = this.setup(r, t, e), i.implForWrapper(r)
                },
                _internalSetup(t) {},
                setup(t, e, r) {
                    return r || (r = {}), r.wrapper = t, this._internalSetup(t), Object.defineProperty(t, n, {
                        value: new h.implementation(e, r),
                        configurable: !0
                    }), t[n][i.wrapperSymbol] = t, h.init && h.init(t[n], r), t
                },
                interface: o,
                expose: {
                    Window: {
                        URL: o
                    },
                    Worker: {
                        URL: o
                    }
                }
            };
            t.exports = a;
            const h = r("6aNXQkitw4")
        },
        HT720uEMYw: function(t, e, r) {
            "use strict";

            function s(t) {
                return t >= 48 && t <= 57
            }

            function i(t) {
                return t >= 65 && t <= 90 || t >= 97 && t <= 122
            }
            t.exports = {
                isASCIIDigit: s,
                isASCIIAlpha: i,
                isASCIIAlphanumeric: function(t) {
                    return i(t) || s(t)
                },
                isASCIIHex: function(t) {
                    return s(t) || t >= 65 && t <= 70 || t >= 97 && t <= 102
                }
            }
        },
        O4YWqXyAqZ: function(t, e, r) {
            "use strict";
            const s = "function" == typeof Object.getOwnPropertyDescriptors ? Object.getOwnPropertyDescriptors : t => {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    t = Object(t);
                    const e = Reflect.ownKeys(t),
                        r = {};
                    for (const s of e) {
                        const e = Reflect.getOwnPropertyDescriptor(t, s);
                        void 0 !== e && Reflect.defineProperty(r, s, {
                            value: e,
                            writable: !0,
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                    return r
                },
                i = Symbol("wrapper"),
                n = Symbol("impl"),
                o = Symbol("SameObject caches");

            function a(t) {
                return t ? t[i] : null
            }

            function h(t) {
                return t ? t[n] : null
            }
            const l = Symbol("internal"),
                u = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
            const p = Symbol("supports property index"),
                c = Symbol("supported property indices"),
                f = Symbol("supports property name"),
                m = Symbol("supported property names"),
                d = Symbol("indexed property get"),
                g = Symbol("indexed property set new"),
                b = Symbol("indexed property set existing"),
                y = Symbol("named property get"),
                w = Symbol("named property set new"),
                S = Symbol("named property set existing"),
                x = Symbol("named property delete");
            t.exports = {
                isObject: function(t) {
                    return "object" == typeof t && null !== t || "function" == typeof t
                },
                hasOwn: function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                },
                getOwnPropertyDescriptors: s,
                wrapperSymbol: i,
                implSymbol: n,
                getSameObject: function(t, e, r) {
                    return t[o] || (t[o] = Object.create(null)), e in t[o] ? t[o][e] : (t[o][e] = r(), t[o][e])
                },
                wrapperForImpl: a,
                implForWrapper: h,
                tryWrapperForImpl: function(t) {
                    const e = a(t);
                    return e || t
                },
                tryImplForWrapper: function(t) {
                    const e = h(t);
                    return e || t
                },
                iterInternalSymbol: l,
                IteratorPrototype: u,
                isArrayIndexPropName: function(t) {
                    if ("string" != typeof t) return !1;
                    const e = t >>> 0;
                    return e !== Math.pow(2, 32) - 1 && t === `${e}`
                },
                supportsPropertyIndex: p,
                supportedPropertyIndices: c,
                supportsPropertyName: f,
                supportedPropertyNames: m,
                indexedGet: d,
                indexedSetNew: g,
                indexedSetExisting: b,
                namedGet: y,
                namedSetNew: w,
                namedSetExisting: S,
                namedDelete: x
            }
        },
        Sh8VrWWVXX: function(t, e, r) {
            "use strict";
            (function(e) {
                const {
                    isASCIIHex: s
                } = r("HT720uEMYw");

                function i(t, e, r) {
                    let s = t.indexOf(e);
                    for (; s >= 0;) t[s] = r, s = t.indexOf(e, s + 1);
                    return t
                }

                function n(t) {
                    let e = t.toString(16).toUpperCase();
                    return 1 === e.length && (e = "0" + e), "%" + e
                }

                function o(t) {
                    const r = e.alloc(t.byteLength);
                    let i = 0;
                    for (let e = 0; e < t.length; ++e) 37 === t[e] && s(t[e + 1]) && s(t[e + 2]) ? (r[i++] = parseInt(t.slice(e + 1, e + 3).toString(), 16), e += 2) : r[i++] = t[e];
                    return r.slice(0, i)
                }

                function a(t) {
                    let e = "";
                    for (const r of t) e += 32 === r ? "+" : 42 === r || 45 === r || 46 === r || r >= 48 && r <= 57 || r >= 65 && r <= 90 || 95 === r || r >= 97 && r <= 122 ? String.fromCodePoint(r) : n(r);
                    return e
                }
                t.exports = {
                    percentEncode: n,
                    percentDecode: o,
                    parseUrlencoded: t => (function(t) {
                        const r = function(t, e) {
                                const r = [];
                                let s = 0,
                                    i = t.indexOf(e);
                                for (; i >= 0;) r.push(t.slice(s, i)), s = i + 1, i = t.indexOf(e, s);
                                return s !== t.length && r.push(t.slice(s)), r
                            }(t, 38),
                            s = [];
                        for (const n of r) {
                            if (0 === n.length) continue;
                            let t, r;
                            const a = n.indexOf(61);
                            a >= 0 ? (t = n.slice(0, a), r = n.slice(a + 1)) : (t = n, r = e.alloc(0)), t = i(e.from(t), 43, 32), r = i(e.from(r), 43, 32), s.push([o(t).toString(), o(r).toString()])
                        }
                        return s
                    })(e.from(t)),
                    serializeUrlencoded: function(t, r) {
                        let s = "utf-8";
                        void 0 !== r && (s = r);
                        let i = "";
                        for (const [n, o] of t.entries()) {
                            const t = a(e.from(o[0]));
                            let r = o[1];
                            o.length > 2 && void 0 !== o[2] && ("hidden" === o[2] && "_charset_" === t ? r = s : "file" === o[2] && (r = r.name)), 0 !== n && (i += "&"), i += `${t}=${r=a(e.from(r))}`
                        }
                        return i
                    }
                }
            }).call(this, r("TMYfN8OpZt").Buffer)
        },
        nuIZElu4t0: function(t, e, r) {
            "use strict";
            const s = r("je6bnp51NE"),
                i = r("Sh8VrWWVXX");
            e.implementation = class {
                constructor(t, {
                    doNotStripQMark: e = !1
                }) {
                    let r = t[0];
                    if (this._list = [], this._url = null, e || "string" != typeof r || "?" !== r[0] || (r = r.slice(1)), Array.isArray(r))
                        for (const s of r) {
                            if (2 !== s.length) throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.");
                            this._list.push([s[0], s[1]])
                        } else if ("object" == typeof r && null === Object.getPrototypeOf(r))
                            for (const s of Object.keys(r)) {
                                const t = r[s];
                                this._list.push([s, t])
                            } else this._list = i.parseUrlencoded(r)
                }
                _updateSteps() {
                    if (null !== this._url) {
                        let t = i.serializeUrlencoded(this._list);
                        "" === t && (t = null), this._url._url.query = t
                    }
                }
                append(t, e) {
                    this._list.push([t, e]), this._updateSteps()
                }
                delete(t) {
                    let e = 0;
                    for (; e < this._list.length;) this._list[e][0] === t ? this._list.splice(e, 1) : e++;
                    this._updateSteps()
                }
                get(t) {
                    for (const e of this._list)
                        if (e[0] === t) return e[1];
                    return null
                }
                getAll(t) {
                    const e = [];
                    for (const r of this._list) r[0] === t && e.push(r[1]);
                    return e
                }
                has(t) {
                    for (const e of this._list)
                        if (e[0] === t) return !0;
                    return !1
                }
                set(t, e) {
                    let r = !1,
                        s = 0;
                    for (; s < this._list.length;) this._list[s][0] === t ? r ? this._list.splice(s, 1) : (r = !0, this._list[s][1] = e, s++) : s++;
                    r || this._list.push([t, e]), this._updateSteps()
                }
                sort() {
                    this._list = s(this._list, [0]), this._updateSteps()
                }[Symbol.iterator]() {
                    return this._list[Symbol.iterator]()
                }
                toString() {
                    return i.serializeUrlencoded(this._list)
                }
            }
        },
        xVAhskGAtl: function(t, e, r) {
            "use strict";
            (function(e) {
                const s = r("lIG0LnZIkv"),
                    i = r("eGWSwmUNdr"),
                    n = r("HT720uEMYw"),
                    {
                        percentEncode: o,
                        percentDecode: a
                    } = r("Sh8VrWWVXX"),
                    h = {
                        ftp: 21,
                        file: null,
                        gopher: 70,
                        http: 80,
                        https: 443,
                        ws: 80,
                        wss: 443
                    },
                    l = Symbol("failure");

                function u(t) {
                    return s.ucs2.decode(t).length
                }

                function p(t, e) {
                    const r = t[e];
                    return isNaN(r) ? void 0 : String.fromCodePoint(r)
                }

                function c(t) {
                    return "." === t || "%2e" === t.toLowerCase()
                }

                function f(t) {
                    return 2 === t.length && n.isASCIIAlpha(t.codePointAt(0)) && (":" === t[1] || "|" === t[1])
                }

                function m(t) {
                    return void 0 !== h[t]
                }

                function d(t) {
                    return m(t.scheme)
                }

                function g(t) {
                    return !m(t.scheme)
                }

                function b(t) {
                    return h[t]
                }

                function y(t) {
                    return t <= 31 || t > 126
                }
                const w = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);

                function S(t) {
                    return I(t) || w.has(t)
                }
                const x = new Set([32, 34, 60, 62, 96]);

                function v(t) {
                    return y(t) || x.has(t)
                }
                const U = new Set([35, 63, 123, 125]);

                function I(t) {
                    return v(t) || U.has(t)
                }

                function E(t, r) {
                    const s = String.fromCodePoint(t);
                    return r(t) ? function(t) {
                        const r = e.from(t);
                        let s = "";
                        for (let e = 0; e < r.length; ++e) s += o(r[e]);
                        return s
                    }(s) : s
                }

                function R(t) {
                    let e = 10;
                    if (t.length >= 2 && "0" === t.charAt(0) && "x" === t.charAt(1).toLowerCase() ? (t = t.substring(2), e = 16) : t.length >= 2 && "0" === t.charAt(0) && (t = t.substring(1), e = 8), "" === t) return 0;
                    let r = /[^0-7]/;
                    return 10 === e && (r = /[^0-9]/), 16 === e && (r = /[^0-9A-Fa-f]/), r.test(t) ? l : parseInt(t, e)
                }

                function L(t, r = !1) {
                    if ("[" === t[0]) return "]" !== t[t.length - 1] ? l : function(t) {
                        const e = [0, 0, 0, 0, 0, 0, 0, 0];
                        let r = 0,
                            i = null,
                            o = 0;
                        if (58 === (t = s.ucs2.decode(t))[o]) {
                            if (58 !== t[o + 1]) return l;
                            o += 2, i = ++r
                        }
                        for (; o < t.length;) {
                            if (8 === r) return l;
                            if (58 === t[o]) {
                                if (null !== i) return l;
                                ++o, i = ++r;
                                continue
                            }
                            let s = 0,
                                a = 0;
                            for (; a < 4 && n.isASCIIHex(t[o]);) s = 16 * s + parseInt(p(t, o), 16), ++o, ++a;
                            if (46 === t[o]) {
                                if (0 === a) return l;
                                if (o -= a, r > 6) return l;
                                let s = 0;
                                for (; void 0 !== t[o];) {
                                    let i = null;
                                    if (s > 0) {
                                        if (!(46 === t[o] && s < 4)) return l;
                                        ++o
                                    }
                                    if (!n.isASCIIDigit(t[o])) return l;
                                    for (; n.isASCIIDigit(t[o]);) {
                                        const e = parseInt(p(t, o));
                                        if (null === i) i = e;
                                        else {
                                            if (0 === i) return l;
                                            i = 10 * i + e
                                        }
                                        if (i > 255) return l;
                                        ++o
                                    }
                                    e[r] = 256 * e[r] + i, 2 != ++s && 4 !== s || ++r
                                }
                                if (4 !== s) return l;
                                break
                            }
                            if (58 === t[o]) {
                                if (void 0 === t[++o]) return l
                            } else if (void 0 !== t[o]) return l;
                            e[r] = s, ++r
                        }
                        if (null !== i) {
                            let t = r - i;
                            for (r = 7; 0 !== r && t > 0;) {
                                const s = e[i + t - 1];
                                e[i + t - 1] = e[r], e[r] = s, --r, --t
                            }
                        } else if (null === i && 8 !== r) return l;
                        return e
                    }(t.substring(1, t.length - 1));
                    if (r) return function(t) {
                        if (e = t, -1 !== e.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/)) return l;
                        var e;
                        let r = "";
                        const i = s.ucs2.decode(t);
                        for (let s = 0; s < i.length; ++s) r += E(i[s], y);
                        return r
                    }(t);
                    const o = function(t, e = !1) {
                        const r = i.toASCII(t, {
                            checkBidi: !0,
                            checkHyphens: !1,
                            checkJoiners: !0,
                            useSTD3ASCIIRules: e,
                            verifyDNSLength: e
                        });
                        if (null === r) return l;
                        return r
                    }(a(e.from(t)).toString());
                    if (o === l) return l;
                    if (-1 !== o.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/)) return l;
                    const h = function(t) {
                        const e = t.split(".");
                        if ("" === e[e.length - 1] && e.length > 1 && e.pop(), e.length > 4) return t;
                        const r = [];
                        for (const n of e) {
                            if ("" === n) return t;
                            const e = R(n);
                            if (e === l) return t;
                            r.push(e)
                        }
                        for (let n = 0; n < r.length - 1; ++n)
                            if (r[n] > 255) return l;
                        if (r[r.length - 1] >= Math.pow(256, 5 - r.length)) return l;
                        let s = r.pop(),
                            i = 0;
                        for (const n of r) s += n * Math.pow(256, 3 - i), ++i;
                        return s
                    }(o);
                    return "number" == typeof h || h === l ? h : o
                }

                function P(t) {
                    return "number" == typeof t ? function(t) {
                        let e = "",
                            r = t;
                        for (let s = 1; s <= 4; ++s) e = String(r % 256) + e, 4 !== s && (e = "." + e), r = Math.floor(r / 256);
                        return e
                    }(t) : t instanceof Array ? "[" + function(t) {
                        let e = "";
                        const r = function(t) {
                            let e = null,
                                r = 1,
                                s = null,
                                i = 0;
                            for (let n = 0; n < t.length; ++n) 0 !== t[n] ? (i > r && (e = s, r = i), s = null, i = 0) : (null === s && (s = n), ++i);
                            return i > r && (e = s, r = i), {
                                idx: e,
                                len: r
                            }
                        }(t).idx;
                        let s = !1;
                        for (let i = 0; i <= 7; ++i) s && 0 === t[i] || (s && (s = !1), r !== i ? (e += t[i].toString(16), 7 !== i && (e += ":")) : (e += 0 === i ? "::" : ":", s = !0));
                        return e
                    }(t) + "]" : t
                }

                function A(t) {
                    const {
                        path: e
                    } = t;
                    var r;
                    0 !== e.length && ("file" === t.scheme && 1 === e.length && (r = e[0], /^[A-Za-z]:$/.test(r)) || e.pop())
                }

                function _(t) {
                    return "" !== t.username || "" !== t.password
                }

                function O(t, e, r, i, n) {
                    if (this.pointer = 0, this.input = t, this.base = e || null, this.encodingOverride = r || "utf-8", this.stateOverride = n, this.url = i, this.failure = !1, this.parseError = !1, !this.url) {
                        this.url = {
                            scheme: "",
                            username: "",
                            password: "",
                            host: null,
                            port: null,
                            path: [],
                            query: null,
                            fragment: null,
                            cannotBeABaseURL: !1
                        };
                        const t = function(t) {
                            return t.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "")
                        }(this.input);
                        t !== this.input && (this.parseError = !0), this.input = t
                    }
                    const o = function(t) {
                        return t.replace(/\u0009|\u000A|\u000D/g, "")
                    }(this.input);
                    for (o !== this.input && (this.parseError = !0), this.input = o, this.state = n || "scheme start", this.buffer = "", this.atFlag = !1, this.arrFlag = !1, this.passwordTokenSeenFlag = !1, this.input = s.ucs2.decode(this.input); this.pointer <= this.input.length; ++this.pointer) {
                        const t = this.input[this.pointer],
                            e = isNaN(t) ? void 0 : String.fromCodePoint(t),
                            r = this["parse " + this.state](t, e);
                        if (!r) break;
                        if (r === l) {
                            this.failure = !0;
                            break
                        }
                    }
                }
                O.prototype["parse scheme start"] = function(t, e) {
                    if (n.isASCIIAlpha(t)) this.buffer += e.toLowerCase(), this.state = "scheme";
                    else {
                        if (this.stateOverride) return this.parseError = !0, l;
                        this.state = "no scheme", --this.pointer
                    }
                    return !0
                }, O.prototype["parse scheme"] = function(t, e) {
                    if (n.isASCIIAlphanumeric(t) || 43 === t || 45 === t || 46 === t) this.buffer += e.toLowerCase();
                    else if (58 === t) {
                        if (this.stateOverride) {
                            if (d(this.url) && !m(this.buffer)) return !1;
                            if (!d(this.url) && m(this.buffer)) return !1;
                            if ((_(this.url) || null !== this.url.port) && "file" === this.buffer) return !1;
                            if ("file" === this.url.scheme && ("" === this.url.host || null === this.url.host)) return !1
                        }
                        if (this.url.scheme = this.buffer, this.stateOverride) return this.url.port === b(this.url.scheme) && (this.url.port = null), !1;
                        this.buffer = "", "file" === this.url.scheme ? (47 === this.input[this.pointer + 1] && 47 === this.input[this.pointer + 2] || (this.parseError = !0), this.state = "file") : d(this.url) && null !== this.base && this.base.scheme === this.url.scheme ? this.state = "special relative or authority" : d(this.url) ? this.state = "special authority slashes" : 47 === this.input[this.pointer + 1] ? (this.state = "path or authority", ++this.pointer) : (this.url.cannotBeABaseURL = !0, this.url.path.push(""), this.state = "cannot-be-a-base-URL path")
                    } else {
                        if (this.stateOverride) return this.parseError = !0, l;
                        this.buffer = "", this.state = "no scheme", this.pointer = -1
                    }
                    return !0
                }, O.prototype["parse no scheme"] = function(t) {
                    return null === this.base || this.base.cannotBeABaseURL && 35 !== t ? l : (this.base.cannotBeABaseURL && 35 === t ? (this.url.scheme = this.base.scheme, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.url.cannotBeABaseURL = !0, this.state = "fragment") : "file" === this.base.scheme ? (this.state = "file", --this.pointer) : (this.state = "relative", --this.pointer), !0)
                }, O.prototype["parse special relative or authority"] = function(t) {
                    return 47 === t && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = !0, this.state = "relative", --this.pointer), !0
                }, O.prototype["parse path or authority"] = function(t) {
                    return 47 === t ? this.state = "authority" : (this.state = "path", --this.pointer), !0
                }, O.prototype["parse relative"] = function(t) {
                    return this.url.scheme = this.base.scheme, isNaN(t) ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 47 === t ? this.state = "relative slash" : 63 === t ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === t ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : d(this.url) && 92 === t ? (this.parseError = !0, this.state = "relative slash") : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(0, this.base.path.length - 1), this.state = "path", --this.pointer), !0
                }, O.prototype["parse relative slash"] = function(t) {
                    return !d(this.url) || 47 !== t && 92 !== t ? 47 === t ? this.state = "authority" : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.state = "path", --this.pointer) : (92 === t && (this.parseError = !0), this.state = "special authority ignore slashes"), !0
                }, O.prototype["parse special authority slashes"] = function(t) {
                    return 47 === t && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = !0, this.state = "special authority ignore slashes", --this.pointer), !0
                }, O.prototype["parse special authority ignore slashes"] = function(t) {
                    return 47 !== t && 92 !== t ? (this.state = "authority", --this.pointer) : this.parseError = !0, !0
                }, O.prototype["parse authority"] = function(t, e) {
                    if (64 === t) {
                        this.parseError = !0, this.atFlag && (this.buffer = "%40" + this.buffer), this.atFlag = !0;
                        const t = u(this.buffer);
                        for (let e = 0; e < t; ++e) {
                            const t = this.buffer.codePointAt(e);
                            if (58 === t && !this.passwordTokenSeenFlag) {
                                this.passwordTokenSeenFlag = !0;
                                continue
                            }
                            const r = E(t, S);
                            this.passwordTokenSeenFlag ? this.url.password += r : this.url.username += r
                        }
                        this.buffer = ""
                    } else if (isNaN(t) || 47 === t || 63 === t || 35 === t || d(this.url) && 92 === t) {
                        if (this.atFlag && "" === this.buffer) return this.parseError = !0, l;
                        this.pointer -= u(this.buffer) + 1, this.buffer = "", this.state = "host"
                    } else this.buffer += e;
                    return !0
                }, O.prototype["parse hostname"] = O.prototype["parse host"] = function(t, e) {
                    if (this.stateOverride && "file" === this.url.scheme) --this.pointer, this.state = "file host";
                    else if (58 !== t || this.arrFlag)
                        if (isNaN(t) || 47 === t || 63 === t || 35 === t || d(this.url) && 92 === t) {
                            if (--this.pointer, d(this.url) && "" === this.buffer) return this.parseError = !0, l;
                            if (this.stateOverride && "" === this.buffer && (_(this.url) || null !== this.url.port)) return this.parseError = !0, !1;
                            const t = L(this.buffer, g(this.url));
                            if (t === l) return l;
                            if (this.url.host = t, this.buffer = "", this.state = "path start", this.stateOverride) return !1
                        } else 91 === t ? this.arrFlag = !0 : 93 === t && (this.arrFlag = !1), this.buffer += e;
                    else {
                        if ("" === this.buffer) return this.parseError = !0, l;
                        const t = L(this.buffer, g(this.url));
                        if (t === l) return l;
                        if (this.url.host = t, this.buffer = "", this.state = "port", "hostname" === this.stateOverride) return !1
                    }
                    return !0
                }, O.prototype["parse port"] = function(t, e) {
                    if (n.isASCIIDigit(t)) this.buffer += e;
                    else {
                        if (!(isNaN(t) || 47 === t || 63 === t || 35 === t || d(this.url) && 92 === t || this.stateOverride)) return this.parseError = !0, l;
                        if ("" !== this.buffer) {
                            const t = parseInt(this.buffer);
                            if (t > Math.pow(2, 16) - 1) return this.parseError = !0, l;
                            this.url.port = t === b(this.url.scheme) ? null : t, this.buffer = ""
                        }
                        if (this.stateOverride) return !1;
                        this.state = "path start", --this.pointer
                    }
                    return !0
                };
                const T = new Set([47, 92, 63, 35]);

                function F(t, e) {
                    const r = t.length - e;
                    return r >= 2 && (s = t[e], i = t[e + 1], n.isASCIIAlpha(s) && (58 === i || 124 === i)) && (2 === r || T.has(t[e + 2]));
                    var s, i
                }
                O.prototype["parse file"] = function(t) {
                    return this.url.scheme = "file", 47 === t || 92 === t ? (92 === t && (this.parseError = !0), this.state = "file slash") : null !== this.base && "file" === this.base.scheme ? isNaN(t) ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 63 === t ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === t ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : (F(this.input, this.pointer) ? this.parseError = !0 : (this.url.host = this.base.host, this.url.path = this.base.path.slice(), A(this.url)), this.state = "path", --this.pointer) : (this.state = "path", --this.pointer), !0
                }, O.prototype["parse file slash"] = function(t) {
                    var e;
                    return 47 === t || 92 === t ? (92 === t && (this.parseError = !0), this.state = "file host") : (null === this.base || "file" !== this.base.scheme || F(this.input, this.pointer) || (2 === (e = this.base.path[0]).length && n.isASCIIAlpha(e.codePointAt(0)) && ":" === e[1] ? this.url.path.push(this.base.path[0]) : this.url.host = this.base.host), this.state = "path", --this.pointer), !0
                }, O.prototype["parse file host"] = function(t, e) {
                    if (isNaN(t) || 47 === t || 92 === t || 63 === t || 35 === t)
                        if (--this.pointer, !this.stateOverride && f(this.buffer)) this.parseError = !0, this.state = "path";
                        else if ("" === this.buffer) {
                        if (this.url.host = "", this.stateOverride) return !1;
                        this.state = "path start"
                    } else {
                        let t = L(this.buffer, g(this.url));
                        if (t === l) return l;
                        if ("localhost" === t && (t = ""), this.url.host = t, this.stateOverride) return !1;
                        this.buffer = "", this.state = "path start"
                    } else this.buffer += e;
                    return !0
                }, O.prototype["parse path start"] = function(t) {
                    return d(this.url) ? (92 === t && (this.parseError = !0), this.state = "path", 47 !== t && 92 !== t && --this.pointer) : this.stateOverride || 63 !== t ? this.stateOverride || 35 !== t ? void 0 !== t && (this.state = "path", 47 !== t && --this.pointer) : (this.url.fragment = "", this.state = "fragment") : (this.url.query = "", this.state = "query"), !0
                }, O.prototype["parse path"] = function(t) {
                    if (isNaN(t) || 47 === t || d(this.url) && 92 === t || !this.stateOverride && (63 === t || 35 === t)) {
                        if (d(this.url) && 92 === t && (this.parseError = !0), ".." === (e = (e = this.buffer).toLowerCase()) || "%2e." === e || ".%2e" === e || "%2e%2e" === e ? (A(this.url), 47 === t || d(this.url) && 92 === t || this.url.path.push("")) : !c(this.buffer) || 47 === t || d(this.url) && 92 === t ? c(this.buffer) || ("file" === this.url.scheme && 0 === this.url.path.length && f(this.buffer) && ("" !== this.url.host && null !== this.url.host && (this.parseError = !0, this.url.host = ""), this.buffer = this.buffer[0] + ":"), this.url.path.push(this.buffer)) : this.url.path.push(""), this.buffer = "", "file" === this.url.scheme && (void 0 === t || 63 === t || 35 === t))
                            for (; this.url.path.length > 1 && "" === this.url.path[0];) this.parseError = !0, this.url.path.shift();
                        63 === t && (this.url.query = "", this.state = "query"), 35 === t && (this.url.fragment = "", this.state = "fragment")
                    } else 37 !== t || n.isASCIIHex(this.input[this.pointer + 1]) && n.isASCIIHex(this.input[this.pointer + 2]) || (this.parseError = !0), this.buffer += E(t, I);
                    var e;
                    return !0
                }, O.prototype["parse cannot-be-a-base-URL path"] = function(t) {
                    return 63 === t ? (this.url.query = "", this.state = "query") : 35 === t ? (this.url.fragment = "", this.state = "fragment") : (isNaN(t) || 37 === t || (this.parseError = !0), 37 !== t || n.isASCIIHex(this.input[this.pointer + 1]) && n.isASCIIHex(this.input[this.pointer + 2]) || (this.parseError = !0), isNaN(t) || (this.url.path[0] = this.url.path[0] + E(t, y))), !0
                }, O.prototype["parse query"] = function(t, r) {
                    if (isNaN(t) || !this.stateOverride && 35 === t) {
                        d(this.url) && "ws" !== this.url.scheme && "wss" !== this.url.scheme || (this.encodingOverride = "utf-8");
                        const r = e.from(this.buffer);
                        for (let t = 0; t < r.length; ++t) r[t] < 33 || r[t] > 126 || 34 === r[t] || 35 === r[t] || 60 === r[t] || 62 === r[t] || 39 === r[t] && d(this.url) ? this.url.query += o(r[t]) : this.url.query += String.fromCodePoint(r[t]);
                        this.buffer = "", 35 === t && (this.url.fragment = "", this.state = "fragment")
                    } else 37 !== t || n.isASCIIHex(this.input[this.pointer + 1]) && n.isASCIIHex(this.input[this.pointer + 2]) || (this.parseError = !0), this.buffer += r;
                    return !0
                }, O.prototype["parse fragment"] = function(t) {
                    return isNaN(t) || (0 === t ? this.parseError = !0 : (37 !== t || n.isASCIIHex(this.input[this.pointer + 1]) && n.isASCIIHex(this.input[this.pointer + 2]) || (this.parseError = !0), this.url.fragment += E(t, v))), !0
                }, t.exports.serializeURL = function(t, e) {
                    let r = t.scheme + ":";
                    if (null !== t.host ? (r += "//", "" === t.username && "" === t.password || (r += t.username, "" !== t.password && (r += ":" + t.password), r += "@"), r += P(t.host), null !== t.port && (r += ":" + t.port)) : null === t.host && "file" === t.scheme && (r += "//"), t.cannotBeABaseURL) r += t.path[0];
                    else
                        for (const s of t.path) r += "/" + s;
                    return null !== t.query && (r += "?" + t.query), e || null === t.fragment || (r += "#" + t.fragment), r
                }, t.exports.serializeURLOrigin = function(e) {
                    switch (e.scheme) {
                        case "blob":
                            try {
                                return t.exports.serializeURLOrigin(t.exports.parseURL(e.path[0]))
                            } catch (r) {
                                return "null"
                            }
                        case "ftp":
                        case "gopher":
                        case "http":
                        case "https":
                        case "ws":
                        case "wss":
                            return function(t) {
                                let e = t.scheme + "://";
                                return e += P(t.host), null !== t.port && (e += ":" + t.port), e
                            }({
                                scheme: e.scheme,
                                host: e.host,
                                port: e.port
                            });
                        case "file":
                        default:
                            return "null"
                    }
                }, t.exports.basicURLParse = function(t, e) {
                    void 0 === e && (e = {});
                    const r = new O(t, e.baseURL, e.encodingOverride, e.url, e.stateOverride);
                    return r.failure ? null : r.url
                }, t.exports.setTheUsername = function(t, e) {
                    t.username = "";
                    const r = s.ucs2.decode(e);
                    for (let s = 0; s < r.length; ++s) t.username += E(r[s], S)
                }, t.exports.setThePassword = function(t, e) {
                    t.password = "";
                    const r = s.ucs2.decode(e);
                    for (let s = 0; s < r.length; ++s) t.password += E(r[s], S)
                }, t.exports.serializeHost = P, t.exports.cannotHaveAUsernamePasswordPort = function(t) {
                    return null === t.host || "" === t.host || t.cannotBeABaseURL || "file" === t.scheme
                }, t.exports.serializeInteger = function(t) {
                    return String(t)
                }, t.exports.parseURL = function(e, r) {
                    return void 0 === r && (r = {}), t.exports.basicURLParse(e, {
                        baseURL: r.baseURL,
                        encodingOverride: r.encodingOverride
                    })
                }
            }).call(this, r("TMYfN8OpZt").Buffer)
        },
        xlJW9R8vZK: function(t, e, r) {
            "use strict";
            const s = r("pGFe0xeDCN"),
                i = r("O4YWqXyAqZ"),
                n = i.implSymbol,
                o = Object.create(i.IteratorPrototype, {
                    next: {
                        value: function() {
                            const t = this[i.iterInternalSymbol],
                                {
                                    target: e,
                                    kind: r,
                                    index: s
                                } = t,
                                o = Array.from(e[n]);
                            if (s >= o.length) return {
                                value: void 0,
                                done: !0
                            };
                            const a = o[s];
                            t.index = s + 1;
                            const [h, l] = a.map(i.tryWrapperForImpl);
                            let u;
                            switch (r) {
                                case "key":
                                    u = h;
                                    break;
                                case "value":
                                    u = l;
                                    break;
                                case "key+value":
                                    u = [h, l]
                            }
                            return {
                                value: u,
                                done: !1
                            }
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    [Symbol.toStringTag]: {
                        value: "URLSearchParams Iterator",
                        configurable: !0
                    }
                });
            class a {
                constructor() {
                    const t = []; {
                        let e = arguments[0];
                        if (void 0 !== e)
                            if (i.isObject(e))
                                if (void 0 !== e[Symbol.iterator]) {
                                    if (!i.isObject(e)) throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object."); {
                                        const t = [],
                                            r = e;
                                        for (let e of r) {
                                            if (!i.isObject(e)) throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object."); {
                                                const t = [],
                                                    r = e;
                                                for (let e of r) e = s.USVString(e, {
                                                    context: "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element"
                                                }), t.push(e);
                                                e = t
                                            }
                                            t.push(e)
                                        }
                                        e = t
                                    }
                                } else {
                                    if (!i.isObject(e)) throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 record is not an object."); {
                                        const t = Object.create(null);
                                        for (const r of Reflect.ownKeys(e)) {
                                            const i = Object.getOwnPropertyDescriptor(e, r);
                                            if (i && i.enumerable) {
                                                let i = r,
                                                    n = e[r];
                                                i = s.USVString(i, {
                                                    context: "Failed to construct 'URLSearchParams': parameter 1 record's key"
                                                }), n = s.USVString(n, {
                                                    context: "Failed to construct 'URLSearchParams': parameter 1 record's value"
                                                }), t[i] = n
                                            }
                                        }
                                        e = t
                                    }
                                }
                        else e = s.USVString(e, {
                            context: "Failed to construct 'URLSearchParams': parameter 1"
                        });
                        else e = "";
                        t.push(e)
                    }
                    return h.setup(Object.create(new.target.prototype), t)
                }
                append(e, r) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    if (arguments.length < 2) throw new TypeError("Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only " + arguments.length + " present.");
                    const i = []; {
                        let t = arguments[0];
                        t = s.USVString(t, {
                            context: "Failed to execute 'append' on 'URLSearchParams': parameter 1"
                        }), i.push(t)
                    } {
                        let t = arguments[1];
                        t = s.USVString(t, {
                            context: "Failed to execute 'append' on 'URLSearchParams': parameter 2"
                        }), i.push(t)
                    }
                    return this[n].append(...i)
                }
                delete(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    if (arguments.length < 1) throw new TypeError("Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                    const r = []; {
                        let t = arguments[0];
                        t = s.USVString(t, {
                            context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1"
                        }), r.push(t)
                    }
                    return this[n].delete(...r)
                }
                get(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    if (arguments.length < 1) throw new TypeError("Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                    const r = []; {
                        let t = arguments[0];
                        t = s.USVString(t, {
                            context: "Failed to execute 'get' on 'URLSearchParams': parameter 1"
                        }), r.push(t)
                    }
                    return this[n].get(...r)
                }
                getAll(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    if (arguments.length < 1) throw new TypeError("Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                    const r = []; {
                        let t = arguments[0];
                        t = s.USVString(t, {
                            context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1"
                        }), r.push(t)
                    }
                    return i.tryWrapperForImpl(this[n].getAll(...r))
                }
                has(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    if (arguments.length < 1) throw new TypeError("Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                    const r = []; {
                        let t = arguments[0];
                        t = s.USVString(t, {
                            context: "Failed to execute 'has' on 'URLSearchParams': parameter 1"
                        }), r.push(t)
                    }
                    return this[n].has(...r)
                }
                set(e, r) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    if (arguments.length < 2) throw new TypeError("Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only " + arguments.length + " present.");
                    const i = []; {
                        let t = arguments[0];
                        t = s.USVString(t, {
                            context: "Failed to execute 'set' on 'URLSearchParams': parameter 1"
                        }), i.push(t)
                    } {
                        let t = arguments[1];
                        t = s.USVString(t, {
                            context: "Failed to execute 'set' on 'URLSearchParams': parameter 2"
                        }), i.push(t)
                    }
                    return this[n].set(...i)
                }
                sort() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].sort()
                }
                toString() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return this[n].toString()
                }
                keys() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return t.exports.createDefaultIterator(this, "key")
                }
                values() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return t.exports.createDefaultIterator(this, "value")
                }
                entries() {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    return t.exports.createDefaultIterator(this, "key+value")
                }
                forEach(e) {
                    if (!this || !t.exports.is(this)) throw new TypeError("Illegal invocation");
                    if (arguments.length < 1) throw new TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.");
                    if ("function" != typeof e) throw new TypeError("Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1 is not a function.");
                    const r = arguments[1];
                    let s = Array.from(this[n]),
                        o = 0;
                    for (; o < s.length;) {
                        const [t, a] = s[o].map(i.tryWrapperForImpl);
                        e.call(r, a, t, this), s = Array.from(this[n]), o++
                    }
                }
            }
            Object.defineProperties(a.prototype, {
                append: {
                    enumerable: !0
                },
                delete: {
                    enumerable: !0
                },
                get: {
                    enumerable: !0
                },
                getAll: {
                    enumerable: !0
                },
                has: {
                    enumerable: !0
                },
                set: {
                    enumerable: !0
                },
                sort: {
                    enumerable: !0
                },
                toString: {
                    enumerable: !0
                },
                keys: {
                    enumerable: !0
                },
                values: {
                    enumerable: !0
                },
                entries: {
                    enumerable: !0
                },
                forEach: {
                    enumerable: !0
                },
                [Symbol.toStringTag]: {
                    value: "URLSearchParams",
                    configurable: !0
                },
                [Symbol.iterator]: {
                    value: a.prototype.entries,
                    configurable: !0,
                    writable: !0
                }
            });
            const h = {
                _mixedIntoPredicates: [],
                is(e) {
                    if (e) {
                        if (i.hasOwn(e, n) && e[n] instanceof l.implementation) return !0;
                        for (const r of t.exports._mixedIntoPredicates)
                            if (r(e)) return !0
                    }
                    return !1
                },
                isImpl(e) {
                    if (e) {
                        if (e instanceof l.implementation) return !0;
                        const r = i.wrapperForImpl(e);
                        for (const e of t.exports._mixedIntoPredicates)
                            if (e(r)) return !0
                    }
                    return !1
                },
                convert(e, {
                    context: r = "The provided value"
                } = {}) {
                    if (t.exports.is(e)) return i.implForWrapper(e);
                    throw new TypeError(`${r} is not of type 'URLSearchParams'.`)
                },
                createDefaultIterator(t, e) {
                    const r = Object.create(o);
                    return Object.defineProperty(r, i.iterInternalSymbol, {
                        value: {
                            target: t,
                            kind: e,
                            index: 0
                        },
                        configurable: !0
                    }), r
                },
                create(t, e) {
                    let r = Object.create(a.prototype);
                    return r = this.setup(r, t, e)
                },
                createImpl(t, e) {
                    let r = Object.create(a.prototype);
                    return r = this.setup(r, t, e), i.implForWrapper(r)
                },
                _internalSetup(t) {},
                setup(t, e, r) {
                    return r || (r = {}), r.wrapper = t, this._internalSetup(t), Object.defineProperty(t, n, {
                        value: new l.implementation(e, r),
                        configurable: !0
                    }), t[n][i.wrapperSymbol] = t, l.init && l.init(t[n], r), t
                },
                interface: a,
                expose: {
                    Window: {
                        URLSearchParams: a
                    },
                    Worker: {
                        URLSearchParams: a
                    }
                }
            };
            t.exports = h;
            const l = r("nuIZElu4t0")
        }
    }
]);