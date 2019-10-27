(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["npm.webidl-conversions"], {
        pGFe0xeDCN: function(n, r, t) {
            "use strict";

            function e(n, r) {
                return `${r&&r.context?r.context:"Value"} ${n}.`
            }

            function o(n) {
                return u(Math.trunc(n))
            }

            function i(n) {
                return n < 0 ? -1 : 1
            }

            function u(n) {
                return 0 === n ? 0 : n
            }

            function a(n, r) {
                const t = !r.unsigned;
                let a, s;
                64 === n ? (s = Math.pow(2, 53) - 1, a = t ? 1 - Math.pow(2, 53) : 0) : t ? (a = -Math.pow(2, n - 1), s = Math.pow(2, n - 1) - 1) : (a = 0, s = Math.pow(2, n) - 1);
                const f = Math.pow(2, n),
                    c = Math.pow(2, n - 1);
                return (n, r) => {
                    void 0 === r && (r = {});
                    let l = +n;
                    if (l = u(l), r.enforceRange) {
                        if (!Number.isFinite(l)) throw new TypeError(e("is not a finite number", r));
                        if ((l = o(l)) < a || l > s) throw new TypeError(e(`is outside the accepted range of ${a} to ${s}, inclusive`, r));
                        return l
                    }
                    return !Number.isNaN(l) && r.clamp ? l = function(n) {
                        return u(n > 0 && n % 1 == .5 && 0 == (1 & n) || n < 0 && n % 1 == -.5 && 1 == (1 & n) ? Math.floor(n) : Math.round(n))
                    }(l = Math.min(Math.max(l, a), s)) : Number.isFinite(l) && 0 !== l ? (l = o(l)) >= a && l <= s ? l : (l = function(n, r) {
                        const t = n % r;
                        return i(r) !== i(t) ? t + r : t
                    }(l, f), t && l >= c ? l - f : l) : 0
                }
            }

            function s(n, r) {
                if ("function" != typeof n) throw new TypeError(e("is not a function", r));
                return n
            }
            r.any = n => n, r.void = function() {}, r.boolean = function(n) {
                return !!n
            }, r.byte = a(8, {
                unsigned: !1
            }), r.octet = a(8, {
                unsigned: !0
            }), r.short = a(16, {
                unsigned: !1
            }), r["unsigned short"] = a(16, {
                unsigned: !0
            }), r.long = a(32, {
                unsigned: !1
            }), r["unsigned long"] = a(32, {
                unsigned: !0
            }), r["long long"] = a(64, {
                unsigned: !1
            }), r["unsigned long long"] = a(64, {
                unsigned: !0
            }), r.double = (n, r) => {
                const t = +n;
                if (!Number.isFinite(t)) throw new TypeError(e("is not a finite floating-point value", r));
                return t
            }, r["unrestricted double"] = n => {
                return +n
            }, r.float = (n, r) => {
                const t = +n;
                if (!Number.isFinite(t)) throw new TypeError(e("is not a finite floating-point value", r));
                if (Object.is(t, -0)) return t;
                const o = Math.fround(t);
                if (!Number.isFinite(o)) throw new TypeError(e("is outside the range of a single-precision floating-point value", r));
                return o
            }, r["unrestricted float"] = n => {
                const r = +n;
                return isNaN(r) ? r : Object.is(r, -0) ? r : Math.fround(r)
            }, r.DOMString = function(n, r) {
                if (void 0 === r && (r = {}), r.treatNullAsEmptyString && null === n) return "";
                if ("symbol" == typeof n) throw new TypeError(e("is a symbol, which cannot be converted to a string", r));
                return String(n)
            }, r.ByteString = (n, t) => {
                const o = r.DOMString(n, t);
                let i;
                for (let r = 0; void 0 !== (i = o.codePointAt(r)); ++r)
                    if (i > 255) throw new TypeError(e("is not a valid ByteString", t));
                return o
            }, r.USVString = (n, t) => {
                const e = r.DOMString(n, t),
                    o = e.length,
                    i = [];
                for (let r = 0; r < o; ++r) {
                    const n = e.charCodeAt(r);
                    if (n < 55296 || n > 57343) i.push(String.fromCodePoint(n));
                    else if (56320 <= n && n <= 57343) i.push(String.fromCodePoint(65533));
                    else if (r === o - 1) i.push(String.fromCodePoint(65533));
                    else {
                        const t = e.charCodeAt(r + 1);
                        if (56320 <= t && t <= 57343) {
                            const e = 1023 & n,
                                o = 1023 & t;
                            i.push(String.fromCodePoint(65536 + 1024 * e + o)), ++r
                        } else i.push(String.fromCodePoint(65533))
                    }
                }
                return i.join("")
            }, r.object = (n, r) => {
                if ("Object" !== function(n) {
                        if (null === n) return "Null";
                        switch (typeof n) {
                            case "undefined":
                                return "Undefined";
                            case "boolean":
                                return "Boolean";
                            case "number":
                                return "Number";
                            case "string":
                                return "String";
                            case "symbol":
                                return "Symbol";
                            case "object":
                            case "function":
                            default:
                                return "Object"
                        }
                    }(n)) throw new TypeError(e("is not an object", r));
                return n
            }, [Error, ArrayBuffer, DataView, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array].forEach(n => {
                const t = n.name,
                    o = /^[AEIOU]/.test(t) ? "an" : "a";
                r[t] = (r, i) => {
                    if (!(r instanceof n)) throw new TypeError(e(`is not ${o} ${t} object`, i));
                    return r
                }
            }), r.ArrayBufferView = (n, r) => {
                if (!ArrayBuffer.isView(n)) throw new TypeError(e("is not a view on an ArrayBuffer object", r));
                return n
            }, r.BufferSource = (n, r) => {
                if (!(ArrayBuffer.isView(n) || n instanceof ArrayBuffer)) throw new TypeError(e("is not an ArrayBuffer object or a view on one", r));
                return n
            }, r.DOMTimeStamp = r["unsigned long long"], r.Function = s, r.VoidFunction = s
        }
    }
]);