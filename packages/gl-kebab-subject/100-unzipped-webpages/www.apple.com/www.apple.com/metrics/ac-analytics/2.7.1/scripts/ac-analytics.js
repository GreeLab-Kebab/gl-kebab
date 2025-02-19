require = function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
}()({
    1: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var pipe = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return t.reduce(function(e, t) {
                        return t(e)
                    }, e)
                }
            },
            get = function(e) {
                if (null == e) return null;
                for (var t = (document.cookie || "").split(";"), n = 0; n < t.length; n++) {
                    var r = (t[n] || "").trim();
                    if (r.slice(0, e.length + 1) === "".concat(e, "=")) return decodeURIComponent(r.slice(e.length + 1))
                }
                return null
            },
            expiresToDate = function(e) {
                if ("number" == typeof e) {
                    var t = new Date;
                    return t.setTime(t.getTime() + 24 * (e || 0) * 60 * 60 * 1e3), t
                }
                return e
            },
            set = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = expiresToDate(null == t ? -1 : n.expires),
                    i = r ? "; expires=" + r.toUTCString() : "",
                    o = n.path ? "; path=" + n.path : "",
                    a = n.domain ? "; domain=" + n.domain : "",
                    s = n.secure ? "; secure" : "";
                document.cookie = e + "=" + encodeURIComponent(t || "") + i + o + a + s
            },
            index = Object.freeze({
                get: get,
                set: set
            });

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    _defineProperty(e, t, n[t])
                })
            }
            return e
        }

        function _toConsumableArray(e) {
            return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
        }

        function _arrayWithoutHoles(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }

        function _iterableToArray(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        var getEnvCookieName = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (!e) return "";
                var t = window.cookieMap;
                return t && "object" === _typeof(t) && t[e] || e
            },
            get$1 = pipe(getEnvCookieName, get),
            set$1 = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return set(getEnvCookieName(e), t, n)
            },
            index$1 = Object.freeze({
                get: get$1,
                set: set$1
            }),
            decode = function(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            encode = function(e) {
                if (!e) return null;
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return null
                }
            },
            index$2 = Object.freeze({
                decode: decode,
                encode: encode
            }),
            get$2 = pipe(get$1, decode),
            set$2 = function(e, t, n) {
                return set$1(e, encode(t), n)
            },
            index$3 = Object.freeze({
                get: get$2,
                set: set$2
            }),
            isBeacon = function(e) {
                return !(!e || "object" !== _typeof(e) || Array.isArray(e))
            },
            isNotEmpty = function(e) {
                return !(!isBeacon(e) || !Object.keys(e).length)
            },
            toBeaconSafeVal = function(e) {
                return e && "object" !== _typeof(e) ? String(e) : null
            },
            index$4 = Object.freeze({
                isBeacon: isBeacon,
                isNotEmpty: isNotEmpty,
                toBeaconSafeVal: toBeaconSafeVal
            }),
            get$3 = pipe(get, decode),
            set$3 = function(e, t, n) {
                return set(e, encode(t), n)
            },
            index$5 = Object.freeze({
                get: get$3,
                set: set$3
            }),
            deepClone = function e(t) {
                if (!t || "object" !== _typeof(t)) return t;
                if (Array.isArray(t)) {
                    for (var n = Array(t.length), r = 0; r < t.length; r++) n[r] = e(t[r]);
                    return n
                }
                for (var i = {}, o = 0, a = Object.keys(t); o < a.length; o++) {
                    var s = a[o];
                    i[s] = e(t[s])
                }
                return i
            },
            getOmniture = function() {
                return window.s
            },
            get$4 = function(e) {
                try {
                    return window.localStorage.getItem(e)
                } catch (e) {
                    return ""
                }
            },
            set$4 = function(e, t) {
                try {
                    return window.localStorage.setItem(e, t || ""), !0
                } catch (e) {
                    return !1
                }
            },
            remove = function(e) {
                try {
                    return window.localStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            },
            index$6 = Object.freeze({
                get: get$4,
                set: set$4,
                remove: remove
            }),
            get$5 = pipe(get$4, decode),
            set$5 = function(e, t) {
                return set$4(e, encode(t))
            },
            index$7 = Object.freeze({
                get: get$5,
                set: set$5,
                remove: remove
            }),
            toStr = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e || !1 === e || 0 === e ? String(e) : ""
            },
            config = {
                separator: "."
            },
            formatPath = function e() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n.map(function(t) {
                    return Array.isArray(t) ? e.apply(void 0, _toConsumableArray(t)) : toStr(t).split(config.separator).filter(Boolean)
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, [])
            },
            get$6 = function(e, t) {
                return t && t.length ? t.reduce(function(e, t) {
                    return e && "object" === _typeof(e) ? e[t] : null
                }, e) : e
            },
            getFactory = function(e) {
                return function(t) {
                    return get$6(t, e)
                }
            },
            set$6 = function(e, t, n) {
                return t && t.length ? setReversedPath(e, _toConsumableArray(t).reverse(), n) : e
            },
            setReversedPath = function e(t, n, r) {
                if (!n.length) return r;
                if ("object" === _typeof(t)) {
                    var i = n.pop(),
                        o = Array.isArray(t) ? _toConsumableArray(t) : _objectSpread({}, t);
                    return o[i] = e(o[i], n, r), o
                }
                return e({}, n, r)
            },
            setFactory = function(e) {
                return function(t, n) {
                    return set$6(t, e, n)
                }
            },
            remove$1 = function(e, t) {
                return t && t.length && "object" === _typeof(e) ? removeReversedPath(e, _toConsumableArray(t).reverse()) : e
            },
            removeReversedPath = function e(t, n) {
                var r = n.pop(),
                    i = Array.isArray(t) ? _toConsumableArray(t) : _objectSpread({}, t);
                return n.length ? ("object" === _typeof(i[r]) && (i[r] = e(i[r], n)), i) : (Array.isArray(i) ? i.splice(Number(r) || i.length, 1) : delete i[r], i)
            },
            index$8 = Object.freeze({
                formatPath: formatPath,
                get: get$6,
                getFactory: getFactory,
                set: set$6,
                setFactory: setFactory,
                remove: remove$1
            }),
            getOrigin = function(e) {
                return e ? "origin" in e ? e.origin : "".concat(e.protocol, "//").concat(e.hostname) : ""
            },
            isValidLink = function(e) {
                if (!e) return !1;
                if ("A" !== e.tagName) return !1;
                var t = (e.getAttribute("href") || "").trim();
                return t.length > 0 && 0 !== t.indexOf("#") && 0 !== t.indexOf("about:") && 0 !== t.indexOf("javascript:") && 0 !== t.indexOf("mailto:") && 0 !== t.indexOf("tel:") && !e.dataset.analyticsIntrapageLink
            },
            isCrossOriginLink = function(e) {
                return isValidLink(e) && getOrigin(e) !== getOrigin(window.document.location)
            },
            isExternalLink = function(e) {
                return !(!isValidLink(e) || !e.hostname) && ((getOmniture() || {}).linkInternalFilters || "").split(",").every(function(t) {
                    return e.hostname.indexOf(t.trim()) < 0
                })
            },
            classListContains = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return !!e && n.some(function(t) {
                    return e.classList.contains(t)
                })
            },
            isGlobalNavLink = function(e) {
                return classListContains(e, "ac-gn-link")
            },
            isImmediateLink = function(e) {
                return classListContains(e, "as-analytics-sendimmediately")
            },
            isMarcomUrl = function(e) {
                return !!e && e.indexOf("shop") < 0 && e.indexOf("search") < 0
            },
            isSearchLink = function(e) {
                return classListContains(e, "ac-gn-searchresults-link")
            },
            isSignInLink = function(e) {
                return classListContains(e, "ac-gn-bagview-nav-link-signIn")
            },
            isSignOutLink = function(e) {
                return classListContains(e, "ac-gn-bagview-nav-link-signOut")
            },
            isTargetingOtherWindow = function(e, t) {
                if (!e || !t) return !1;
                var n = (e.target || "").toLowerCase();
                return t.metaKey || t.ctrlKey || t.shiftKey || ["", "_self", "_parent", "_top"].every(function(e) {
                    return e !== n
                }) || window.name.length > 0 && n.length > 0 && n !== window.name
            },
            redirectsToSignInLink = function(e) {
                return classListContains(e, "ac-gn-bagview-nav-item-favorites", "ac-gn-bagview-nav-item-orders", "ac-gn-bagview-nav-item-account", "ac-gn-bagview-nav-item-signIn")
            },
            resolvesToSearchPage = function(e) {
                return !!e && /\/search\//.test(e.getAttribute("href"))
            },
            index$9 = Object.freeze({
                getOrigin: getOrigin,
                isCrossOriginLink: isCrossOriginLink,
                isExternalLink: isExternalLink,
                isGlobalNavLink: isGlobalNavLink,
                isImmediateLink: isImmediateLink,
                isMarcomUrl: isMarcomUrl,
                isSearchLink: isSearchLink,
                isSignInLink: isSignInLink,
                isSignOutLink: isSignOutLink,
                isTargetingOtherWindow: isTargetingOtherWindow,
                isValidLink: isValidLink,
                redirectsToSignInLink: redirectsToSignInLink,
                resolvesToSearchPage: resolvesToSearchPage
            });
        exports.asCookie = index$1, exports.asCookieJson = index$3, exports.beaconHelpers = index$4, exports.cookie = index, exports.cookieJson = index$5, exports.deepClone = deepClone, exports.getOmniture = getOmniture, exports.jsonEncoder = index$2, exports.localStorage = index$6, exports.localStorageJson = index$7, exports.objectPath = index$8, exports.pipe = pipe, exports.toStr = toStr, exports.urlHelpers = index$9
    }, {}],
    2: [function(require, module, exports) {
        "use strict";
        var DEBUG_MESSAGING_KEY = "f7c9180f-5c45-47b4-8de4-428015f096c0",
            enabled = !1,
            _window = window || self;
        try {
            enabled = !!_window.localStorage.getItem(DEBUG_MESSAGING_KEY)
        } catch (e) {}
        module.exports = enabled
    }, {}],
    3: [function(require, module, exports) {
        "use strict";
        var enabled = require("../enabled");
        module.exports = function(e) {
            return function() {
                if (enabled && "object" == typeof window.console && "function" == typeof console[e]) return console[e].apply(console, Array.prototype.slice.call(arguments, 0))
            }
        }
    }, {
        "../enabled": 2
    }],
    4: [function(require, module, exports) {
        "use strict";
        module.exports = require("./internal/expose")("log")
    }, {
        "./internal/expose": 3
    }],
    5: [function(require, module, exports) {
        "use strict";
        module.exports = function(t, e) {
            var i;
            return e ? {
                width: (i = t.getBoundingClientRect()).width,
                height: i.height
            } : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }
    }, {}],
    6: [function(require, module, exports) {
        "use strict";
        var getDimensions = require("./getDimensions"),
            getScrollX = require("./getScrollX"),
            getScrollY = require("./getScrollY");
        module.exports = function(t, e) {
            var o, r, i, f;
            if (e) return o = t.getBoundingClientRect(), r = getScrollX(), i = getScrollY(), {
                top: o.top + i,
                right: o.right + r,
                bottom: o.bottom + i,
                left: o.left + r
            };
            for (f = getDimensions(t, e), o = {
                    top: t.offsetTop,
                    left: t.offsetLeft,
                    width: f.width,
                    height: f.height
                }; t = t.offsetParent;) o.top += t.offsetTop, o.left += t.offsetLeft;
            return {
                top: o.top,
                right: o.left + o.width,
                bottom: o.top + o.height,
                left: o.left
            }
        }
    }, {
        "./getDimensions": 5,
        "./getScrollX": 7,
        "./getScrollY": 8
    }],
    7: [function(require, module, exports) {
        "use strict";
        module.exports = function(o) {
            return (o = o || window) === window ? window.scrollX || window.pageXOffset : o.scrollLeft
        }
    }, {}],
    8: [function(require, module, exports) {
        "use strict";
        module.exports = function(o) {
            return (o = o || window) === window ? window.scrollY || window.pageYOffset : o.scrollTop
        }
    }, {}],
    9: [function(require, module, exports) {
        "use strict";
        module.exports = Object.freeze({
            ELEMENT: 1,
            TEXT: 3,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11
        })
    }, {}],
    10: [function(require, module, exports) {
        "use strict";
        module.exports = {
            createDocumentFragment: require("./createDocumentFragment"),
            filterByNodeType: require("./filterByNodeType"),
            insertAfter: require("./insertAfter"),
            insertBefore: require("./insertBefore"),
            insertFirstChild: require("./insertFirstChild"),
            isNode: require("./isNode"),
            isNodeList: require("./isNodeList"),
            isNodeType: require("./isNodeType"),
            replace: require("./replace"),
            NODE_TYPES: require("./NODE_TYPES")
        }
    }, {
        "./NODE_TYPES": 9,
        "./createDocumentFragment": 11,
        "./filterByNodeType": 12,
        "./insertAfter": 13,
        "./insertBefore": 14,
        "./insertFirstChild": 15,
        "./isNode": 17,
        "./isNodeList": 18,
        "./isNodeType": 19,
        "./replace": 20
    }],
    11: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            var t, r = document.createDocumentFragment();
            if (e)
                for ((t = document.createElement("div")).innerHTML = e; t.firstChild;) r.appendChild(t.firstChild);
            return r
        }
    }, {}],
    12: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./isNodeType"),
            ELEMENT_NODE = require("./NODE_TYPES").ELEMENT;
        module.exports = function(e, r) {
            return r = r || ELEMENT_NODE, (e = Array.prototype.slice.call(e)).filter(function(e) {
                return isNodeType(e, r)
            })
        }
    }, {
        "./NODE_TYPES": 9,
        "./isNodeType": 19
    }],
    13: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, t) {
            return validate.insertNode(e, "insertAfter"), validate.childNode(t, "insertAfter"), validate.hasParentNode(t, "insertAfter"), t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e)
        }
    }, {
        "./internal/validate": 16
    }],
    14: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, r) {
            return validate.insertNode(e, "insertBefore"), validate.childNode(r, "insertBefore"), validate.hasParentNode(r, "insertBefore"), r.parentNode.insertBefore(e, r)
        }
    }, {
        "./internal/validate": 16
    }],
    15: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, i) {
            return validate.insertNode(e, "insertFirstChild"), validate.parentNode(i, "insertFirstChild"), i.firstChild ? i.insertBefore(e, i.firstChild) : i.appendChild(e)
        }
    }, {
        "./internal/validate": 16
    }],
    16: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("../isNodeType"),
            NODE_TYPES = require("../NODE_TYPES"),
            COMMENT_NODE = NODE_TYPES.COMMENT,
            DOCUMENT_FRAGMENT_NODE = NODE_TYPES.DOCUMENT_FRAGMENT,
            ELEMENT_NODE = NODE_TYPES.ELEMENT,
            TEXT_NODE = NODE_TYPES.TEXT,
            VALID_INSERT_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_INSERT_NODE = " must be an Element, TextNode, Comment, or Document Fragment",
            VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE],
            ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment",
            VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_PARENT_NODE = " must be an Element, or Document Fragment",
            ERR_NO_PARENT_NODE = " must have a parentNode";
        module.exports = {
            parentNode: function(E, N, e) {
                if (e = e || "target", E && !isNodeType(E, VALID_PARENT_NODE)) throw new TypeError(N + ": " + e + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(E, N, e) {
                if (e = e || "target", E && !isNodeType(E, VALID_CHILD_NODE)) throw new TypeError(N + ": " + e + ERR_INVALID_CHILD_NODE)
            },
            insertNode: function(E, N, e) {
                if (e = e || "node", E && !isNodeType(E, VALID_INSERT_NODE)) throw new TypeError(N + ": " + e + ERR_INVALID_INSERT_NODE)
            },
            hasParentNode: function(E, N, e) {
                if (e = e || "target", !E.parentNode) throw new TypeError(N + ": " + e + ERR_NO_PARENT_NODE)
            }
        }
    }, {
        "../NODE_TYPES": 9,
        "../isNodeType": 19
    }],
    17: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }, {}],
    18: [function(require, module, exports) {
        "use strict";
        var nodeListToStringPattern = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        module.exports = function(t) {
            return !!t && ("number" == typeof t.length && (!!("object" != typeof t[0] || t[0] && t[0].nodeType) && nodeListToStringPattern.test(Object.prototype.toString.call(t))))
        }
    }, {}],
    19: [function(require, module, exports) {
        "use strict";
        var isNode = require("./isNode");
        module.exports = function(e, r) {
            return !!isNode(e) && ("number" == typeof r ? e.nodeType === r : !!Array.isArray(r) && -1 !== r.indexOf(e.nodeType))
        }
    }, {
        "./isNode": 17
    }],
    20: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, i) {
            return validate.insertNode(e, "insertFirstChild", "newNode"), validate.childNode(i, "insertFirstChild", "oldNode"), validate.hasParentNode(i, "insertFirstChild", "oldNode"), i.parentNode.replaceChild(e, i)
        }
    }, {
        "./internal/validate": 16
    }],
    21: [function(require, module, exports) {
        "use strict";
        module.exports = 8
    }, {}],
    22: [function(require, module, exports) {
        "use strict";
        module.exports = 11
    }, {}],
    23: [function(require, module, exports) {
        "use strict";
        module.exports = 9
    }, {}],
    24: [function(require, module, exports) {
        "use strict";
        module.exports = 1
    }, {}],
    25: [function(require, module, exports) {
        "use strict";
        module.exports = 3
    }, {}],
    26: [function(require, module, exports) {
        "use strict";
        var isNode = require("../isNode");
        module.exports = function(e, o) {
            return !!isNode(e) && ("number" == typeof o ? e.nodeType === o : -1 !== o.indexOf(e.nodeType))
        }
    }, {
        "../isNode": 30
    }],
    27: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./isNodeType"),
            COMMENT_NODE = require("../COMMENT_NODE"),
            DOCUMENT_FRAGMENT_NODE = require("../DOCUMENT_FRAGMENT_NODE"),
            ELEMENT_NODE = require("../ELEMENT_NODE"),
            TEXT_NODE = require("../TEXT_NODE"),
            VALID_INSERT_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_INSERT_NODE = " must be an Element, TextNode, Comment, or Document Fragment",
            VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE],
            ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment",
            VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_PARENT_NODE = " must be an Element, or Document Fragment",
            ERR_NO_PARENT_NODE = " must have a parentNode";
        module.exports = {
            parentNode: function(E, N, e, _) {
                if (_ = _ || "target", (E || N) && !isNodeType(E, VALID_PARENT_NODE)) throw new TypeError(e + ": " + _ + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(E, N, e, _) {
                if (_ = _ || "target", (E || N) && !isNodeType(E, VALID_CHILD_NODE)) throw new TypeError(e + ": " + _ + ERR_INVALID_CHILD_NODE)
            },
            insertNode: function(E, N, e, _) {
                if (_ = _ || "node", (E || N) && !isNodeType(E, VALID_INSERT_NODE)) throw new TypeError(e + ": " + _ + ERR_INVALID_INSERT_NODE)
            },
            hasParentNode: function(E, N, e) {
                if (e = e || "target", !E.parentNode) throw new TypeError(N + ": " + e + ERR_NO_PARENT_NODE)
            }
        }
    }, {
        "../COMMENT_NODE": 21,
        "../DOCUMENT_FRAGMENT_NODE": 22,
        "../ELEMENT_NODE": 24,
        "../TEXT_NODE": 25,
        "./isNodeType": 26
    }],
    28: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./internal/isNodeType"),
            DOCUMENT_FRAGMENT_NODE = require("./DOCUMENT_FRAGMENT_NODE");
        module.exports = function(e) {
            return isNodeType(e, DOCUMENT_FRAGMENT_NODE)
        }
    }, {
        "./DOCUMENT_FRAGMENT_NODE": 22,
        "./internal/isNodeType": 26
    }],
    29: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./internal/isNodeType"),
            ELEMENT_NODE = require("./ELEMENT_NODE");
        module.exports = function(e) {
            return isNodeType(e, ELEMENT_NODE)
        }
    }, {
        "./ELEMENT_NODE": 24,
        "./internal/isNodeType": 26
    }],
    30: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }, {}],
    31: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e) {
            return validate.childNode(e, !0, "remove"), e.parentNode ? e.parentNode.removeChild(e) : e
        }
    }, {
        "./internal/validate": 27
    }],
    32: [function(require, module, exports) {
        "use strict";
        var isElement = require("@marcom/ac-dom-nodes/isElement"),
            matchesSelector = require("./matchesSelector"),
            validate = require("./internal/validate");
        module.exports = function(e, t, r, a) {
            if (validate.childNode(e, !0, "ancestors"), validate.selector(t, !1, "ancestors"), r && isElement(e) && (!t || matchesSelector(e, t))) return e;
            if (e !== (a = a || document.body))
                for (;
                    (e = e.parentNode) && isElement(e);) {
                    if (!t || matchesSelector(e, t)) return e;
                    if (e === a) break
                }
            return null
        }
    }, {
        "./internal/validate": 34,
        "./matchesSelector": 35,
        "@marcom/ac-dom-nodes/isElement": 29
    }],
    33: [function(require, module, exports) {
        "use strict";
        module.exports = window.Element ? function(e) {
            return e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector
        }(Element.prototype) : null
    }, {}],
    34: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.indexOf");
        var isNode = require("@marcom/ac-dom-nodes/isNode"),
            COMMENT_NODE = require("@marcom/ac-dom-nodes/COMMENT_NODE"),
            DOCUMENT_FRAGMENT_NODE = require("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE"),
            DOCUMENT_NODE = require("@marcom/ac-dom-nodes/DOCUMENT_NODE"),
            ELEMENT_NODE = require("@marcom/ac-dom-nodes/ELEMENT_NODE"),
            TEXT_NODE = require("@marcom/ac-dom-nodes/TEXT_NODE"),
            isNodeType = function(e, E) {
                return !!isNode(e) && ("number" == typeof E ? e.nodeType === E : -1 !== E.indexOf(e.nodeType))
            },
            VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_PARENT_NODE = " must be an Element, Document, or Document Fragment",
            VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE],
            ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment",
            ERR_INVALID_SELECTOR = " must be a string";
        module.exports = {
            parentNode: function(e, E, N, o) {
                if (o = o || "node", (e || E) && !isNodeType(e, VALID_PARENT_NODE)) throw new TypeError(N + ": " + o + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(e, E, N, o) {
                if (o = o || "node", (e || E) && !isNodeType(e, VALID_CHILD_NODE)) throw new TypeError(N + ": " + o + ERR_INVALID_CHILD_NODE)
            },
            selector: function(e, E, N, o) {
                if (o = o || "selector", (e || E) && "string" != typeof e) throw new TypeError(N + ": " + o + ERR_INVALID_SELECTOR)
            }
        }
    }, {
        "@marcom/ac-dom-nodes/COMMENT_NODE": 21,
        "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 22,
        "@marcom/ac-dom-nodes/DOCUMENT_NODE": 23,
        "@marcom/ac-dom-nodes/ELEMENT_NODE": 24,
        "@marcom/ac-dom-nodes/TEXT_NODE": 25,
        "@marcom/ac-dom-nodes/isNode": 30,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 56
    }],
    35: [function(require, module, exports) {
        "use strict";
        var isElement = require("@marcom/ac-dom-nodes/isElement"),
            validate = require("./internal/validate"),
            nativeMatches = require("./internal/nativeMatches"),
            matchesSelectorShim = require("./shims/matchesSelector");
        module.exports = function(e, t) {
            return validate.selector(t, !0, "matchesSelector"), !!isElement(e) && (nativeMatches ? nativeMatches.call(e, t) : matchesSelectorShim(e, t))
        }
    }, {
        "./internal/nativeMatches": 33,
        "./internal/validate": 34,
        "./shims/matchesSelector": 37,
        "@marcom/ac-dom-nodes/isElement": 29
    }],
    36: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.slice");
        var validate = require("./internal/validate"),
            querySelectorAllShim = require("./shims/querySelectorAll"),
            querySelectorAllAvailable = "querySelectorAll" in document;
        module.exports = function(e, l) {
            return l = l || document, validate.parentNode(l, !0, "querySelectorAll", "context"), validate.selector(e, !0, "querySelectorAll"), querySelectorAllAvailable ? Array.prototype.slice.call(l.querySelectorAll(e)) : querySelectorAllShim(e, l)
        }
    }, {
        "./internal/validate": 34,
        "./shims/querySelectorAll": 38,
        "@marcom/ac-polyfills/Array/prototype.slice": 57
    }],
    37: [function(require, module, exports) {
        "use strict";
        var querySelectorAll = require("../querySelectorAll");
        module.exports = function(e, r) {
            var t, l = e.parentNode || document,
                u = querySelectorAll(r, l);
            for (t = 0; t < u.length; t++)
                if (u[t] === e) return !0;
            return !1
        }
    }, {
        "../querySelectorAll": 36
    }],
    38: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.indexOf");
        var isElement = require("@marcom/ac-dom-nodes/isElement"),
            isDocumentFragment = require("@marcom/ac-dom-nodes/isDocumentFragment"),
            removeElement = require("@marcom/ac-dom-nodes/remove"),
            COLLECTION_PREFIX = "_ac_qsa_",
            isElementInContext = function(e, t) {
                var n;
                if (t === document) return !0;
                for (n = e;
                    (n = n.parentNode) && isElement(n);)
                    if (n === t) return !0;
                return !1
            },
            recalcStyles = function(e) {
                "recalc" in e ? e.recalc(!1) : document.recalc(!1), window.scrollBy(0, 0)
            };
        module.exports = function(e, t) {
            var n, r = document.createElement("style"),
                c = COLLECTION_PREFIX + (Math.random() + "").slice(-6),
                o = [];
            for (t = t || document, document[c] = [], isDocumentFragment(t) ? t.appendChild(r) : document.documentElement.firstChild.appendChild(r), r.styleSheet.cssText = "*{display:recalc;}" + e + '{ac-qsa:expression(document["' + c + '"] && document["' + c + '"].push(this));}', recalcStyles(t); document[c].length;)(n = document[c].shift()).style.removeAttribute("ac-qsa"), -1 === o.indexOf(n) && isElementInContext(n, t) && o.push(n);
            return document[c] = null, removeElement(r), recalcStyles(t), o
        }
    }, {
        "@marcom/ac-dom-nodes/isDocumentFragment": 28,
        "@marcom/ac-dom-nodes/isElement": 29,
        "@marcom/ac-dom-nodes/remove": 31,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 56
    }],
    39: [function(require, module, exports) {
        var ElementEngagement = require("./ac-element-engagement/ElementEngagement");
        module.exports = new ElementEngagement, module.exports.ElementEngagement = ElementEngagement
    }, {
        "./ac-element-engagement/ElementEngagement": 40
    }],
    40: [function(require, module, exports) {
        "use strict";
        var proto, EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            ac_Object = {
                defaults: require("@marcom/ac-object/defaults"),
                extend: require("@marcom/ac-object/extend")
            },
            Super = require("@marcom/ac-element-tracker").ElementTracker,
            trackedElementDefaults = {
                timeToEngage: 500,
                inViewThreshold: .75,
                stopOnEngaged: !0
            },
            extendedTrackedElementProps = {
                thresholdEnterTime: 0,
                thresholdExitTime: 0,
                inThreshold: !1,
                engaged: !1,
                tracking: !0
            },
            ElementEngagement = function(e) {
                Super.call(this, null, e), EventEmitterMicro.call(this), this._thresholdEnter = this._thresholdEnter.bind(this), this._thresholdExit = this._thresholdExit.bind(this), this._enterView = this._enterView.bind(this), this._exitView = this._exitView.bind(this)
            };
        proto = ElementEngagement.prototype = Object.create(Super.prototype), (proto = ac_Object.extend(proto, EventEmitterMicro.prototype))._decorateTrackedElement = function(e, t) {
            var i;
            i = ac_Object.defaults(trackedElementDefaults, t || {}), ac_Object.extend(e, i), ac_Object.extend(e, extendedTrackedElementProps)
        }, proto._attachElementListeners = function(e) {
            e.on("thresholdenter", this._thresholdEnter, this), e.on("thresholdexit", this._thresholdExit, this), e.on("enterview", this._enterView, this), e.on("exitview", this._exitView, this)
        }, proto._removeElementListeners = function(e) {
            e.off("thresholdenter", this._thresholdEnter), e.off("thresholdexit", this._thresholdExit), e.off("enterview", this._enterView), e.off("exitview", this._exitView)
        }, proto._attachAllElementListeners = function() {
            this.elements.forEach(function(e) {
                e.stopOnEngaged && e.engaged || this._attachElementListeners(e)
            }, this)
        }, proto._removeAllElementListeners = function() {
            this.elements.forEach(function(e) {
                this._removeElementListeners(e)
            }, this)
        }, proto._elementInViewPastThreshold = function(e) {
            return e.pixelsInView === this._windowHeight || e.percentInView > e.inViewThreshold
        }, proto._ifInView = function(e, t) {
            var i = e.inThreshold;
            Super.prototype._ifInView.apply(this, arguments), !i && this._elementInViewPastThreshold(e) && (e.inThreshold = !0, e.trigger("thresholdenter", e), "number" == typeof e.timeToEngage && e.timeToEngage >= 0 && (e.engagedTimeout = window.setTimeout(this._engaged.bind(this, e), e.timeToEngage)))
        }, proto._ifAlreadyInView = function(e) {
            var t = e.inThreshold;
            Super.prototype._ifAlreadyInView.apply(this, arguments), t && !this._elementInViewPastThreshold(e) && (e.inThreshold = !1, e.trigger("thresholdexit", e), e.engagedTimeout && (window.clearTimeout(e.engagedTimeout), e.engagedTimeout = null))
        }, proto._engaged = function(e) {
            e.engagedTimeout = null, this._elementEngaged(e), e.trigger("engaged", e), this.trigger("engaged", e)
        }, proto._thresholdEnter = function(e) {
            e.thresholdEnterTime = Date.now(), e.thresholdExitTime = 0, this.trigger("thresholdenter", e)
        }, proto._thresholdExit = function(e) {
            e.thresholdExitTime = Date.now(), this.trigger("thresholdexit", e)
        }, proto._enterView = function(e) {
            this.trigger("enterview", e)
        }, proto._exitView = function(e) {
            this.trigger("exitview", e)
        }, proto._elementEngaged = function(e) {
            e.engaged = !0, e.stopOnEngaged && this.stop(e)
        }, proto.stop = function(e) {
            this.tracking && !e && (this._removeAllElementListeners(), Super.prototype.stop.call(this)), e && e.tracking && (e.tracking = !1, this._removeElementListeners(e), this.removeElement(e))
        }, proto.start = function(e) {
            e || this._attachAllElementListeners(), e && !e.tracking && (e.stopOnEngaged && e.engaged || (e.tracking = !0, this._attachElementListeners(e))), this.tracking ? (this.refreshAllElementMetrics(), this.refreshAllElementStates()) : Super.prototype.start.call(this)
        }, proto.addElement = function(e, t) {
            t = t || {};
            var i = Super.prototype.addElement.call(this, e, t.useRenderedPosition);
            return this._decorateTrackedElement(i, t), i
        }, proto.addElements = function(e, t) {
            [].forEach.call(e, function(e) {
                this.addElement(e, t)
            }, this)
        }, module.exports = ElementEngagement
    }, {
        "@marcom/ac-element-tracker": 46,
        "@marcom/ac-event-emitter-micro": 49,
        "@marcom/ac-object/defaults": 52,
        "@marcom/ac-object/extend": 53
    }],
    41: [function(require, module, exports) {
        "use strict";
        module.exports = 1
    }, {}],
    42: [function(require, module, exports) {
        "use strict";
        var isNode = require("../isNode");
        module.exports = function(e, o) {
            return !!isNode(e) && ("number" == typeof o ? e.nodeType === o : -1 !== o.indexOf(e.nodeType))
        }
    }, {
        "../isNode": 44
    }],
    43: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./internal/isNodeType"),
            ELEMENT_NODE = require("./ELEMENT_NODE");
        module.exports = function(e) {
            return isNodeType(e, ELEMENT_NODE)
        }
    }, {
        "./ELEMENT_NODE": 41,
        "./internal/isNodeType": 42
    }],
    44: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }, {}],
    45: [function(require, module, exports) {
        "use strict";
        var nodeListToStringPattern = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        module.exports = function(t) {
            return !!t && ("number" == typeof t.length && (!!("object" != typeof t[0] || t[0] && t[0].nodeType) && nodeListToStringPattern.test(Object.prototype.toString.call(t))))
        }
    }, {}],
    46: [function(require, module, exports) {
        var ElementTracker = require("./ac-element-tracker/ElementTracker"),
            TrackedElement = require("./ac-element-tracker/TrackedElement");
        module.exports = new ElementTracker, module.exports.ElementTracker = ElementTracker, module.exports.TrackedElement = TrackedElement
    }, {
        "./ac-element-tracker/ElementTracker": 47,
        "./ac-element-tracker/TrackedElement": 48
    }],
    47: [function(require, module, exports) {
        "use strict";
        var ac_dom_nodes = {
                isNodeList: require("@marcom/ac-dom-nodes/isNodeList"),
                isElement: require("@marcom/ac-dom-nodes/isElement")
            },
            ac_dom_metrics = {
                getDimensions: require("@marcom/ac-dom-metrics/getDimensions"),
                getPagePosition: require("@marcom/ac-dom-metrics/getPagePosition"),
                getScrollY: require("@marcom/ac-dom-metrics/getScrollY")
            },
            ac_Object = {
                clone: require("@marcom/ac-object/clone"),
                extend: require("@marcom/ac-object/extend")
            },
            TrackedElement = require("./TrackedElement"),
            defaultOptions = {
                autoStart: !1,
                useRenderedPosition: !1
            };

        function ElementTracker(e, t) {
            this.options = ac_Object.clone(defaultOptions), this.options = "object" == typeof t ? ac_Object.extend(this.options, t) : this.options, this._scrollY = this._getScrollY(), this._windowHeight = this._getWindowHeight(), this.tracking = !1, this.elements = [], e && (Array.isArray(e) || ac_dom_nodes.isNodeList(e) || ac_dom_nodes.isElement(e)) && this.addElements(e), this.refreshAllElementStates = this.refreshAllElementStates.bind(this), this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this), this.options.autoStart && this.start()
        }
        var proto = ElementTracker.prototype;
        proto.destroy = function() {
            var e, t;
            for (this.stop(), e = 0, t = this.elements.length; e < t; e++) this.elements[e].destroy();
            this.elements = null, this.options = null
        }, proto._registerTrackedElements = function(e) {
            [].concat(e).forEach(function(e) {
                this._elementInDOM(e.element) && (e.offsetTop = e.element.offsetTop, this.elements.push(e))
            }, this)
        }, proto._elementInDOM = function(e) {
            var t = !1,
                i = document.getElementsByTagName("body")[0];
            return ac_dom_nodes.isElement(e) && i.contains(e) && (t = !0), t
        }, proto._elementPercentInView = function(e) {
            return e.pixelsInView / e.height
        }, proto._elementPixelsInView = function(e) {
            var t = e.top - this._scrollY,
                i = e.bottom - this._scrollY;
            return t > this._windowHeight || i < 0 ? 0 : Math.min(i, this._windowHeight) - Math.max(t, 0)
        }, proto._ifInView = function(e, t) {
            t || e.trigger("enterview", e)
        }, proto._ifAlreadyInView = function(e) {
            e.inView || e.trigger("exitview", e)
        }, proto.addElements = function(e, t) {
            void 0 === t && (t = this.options.useRenderedPosition);
            for (var i = 0, n = (e = ac_dom_nodes.isNodeList(e) ? Array.prototype.slice.call(e) : [].concat(e)).length; i < n; i++) this.addElement(e[i], t)
        }, proto.addElement = function(e, t) {
            var i = null;
            if (void 0 === t && (t = this.options.useRenderedPosition), !ac_dom_nodes.isElement(e)) throw new TypeError("ElementTracker: " + e + " is not a valid DOM element");
            return i = new TrackedElement(e, t), this._registerTrackedElements(i), this.refreshElementMetrics(i), this.refreshElementState(i), i
        }, proto.removeElement = function(e) {
            var t, i = [];
            this.elements.forEach(function(t, n) {
                t !== e && t.element !== e || i.push(n)
            }), t = this.elements.filter(function(e, t) {
                return i.indexOf(t) < 0
            }), this.elements = t
        }, proto.start = function() {
            !1 === this.tracking && (this.tracking = !0, window.addEventListener("resize", this.refreshAllElementMetrics), window.addEventListener("orientationchange", this.refreshAllElementMetrics), window.addEventListener("scroll", this.refreshAllElementStates), this.refreshAllElementMetrics())
        }, proto.stop = function() {
            !0 === this.tracking && (this.tracking = !1, window.removeEventListener("resize", this.refreshAllElementMetrics), window.removeEventListener("orientationchange", this.refreshAllElementMetrics), window.removeEventListener("scroll", this.refreshAllElementStates))
        }, proto.refreshAllElementMetrics = function(e, t) {
            "number" != typeof e && (e = this._getScrollY()), "number" != typeof t && (t = this._getWindowHeight()), this._scrollY = e, this._windowHeight = t, this.elements.forEach(this.refreshElementMetrics, this)
        }, proto.refreshElementMetrics = function(e) {
            if (!e.isActive) return e;
            var t = ac_dom_metrics.getDimensions(e.element, e.useRenderedPosition),
                i = ac_dom_metrics.getPagePosition(e.element, e.useRenderedPosition);
            return e = ac_Object.extend(e, t, i), this.refreshElementState(e)
        }, proto.refreshAllElementStates = function(e) {
            "number" != typeof e && (e = this._getScrollY()), this._scrollY = e, this.elements.forEach(this.refreshElementState, this)
        }, proto.refreshElementState = function(e) {
            if (!e.isActive) return e;
            var t = e.inView;
            return e.pixelsInView = this._elementPixelsInView(e), e.percentInView = this._elementPercentInView(e), e.inView = e.pixelsInView > 0, e.inView && this._ifInView(e, t), t && this._ifAlreadyInView(e), e
        }, proto.pauseElementTracking = function(e) {
            e && (e.isActive = !1)
        }, proto.resumeElementTracking = function(e) {
            e && (e.isActive = !0)
        }, proto._getWindowHeight = function() {
            return window.innerHeight
        }, proto._getScrollY = function() {
            return ac_dom_metrics.getScrollY()
        }, module.exports = ElementTracker
    }, {
        "./TrackedElement": 48,
        "@marcom/ac-dom-metrics/getDimensions": 5,
        "@marcom/ac-dom-metrics/getPagePosition": 6,
        "@marcom/ac-dom-metrics/getScrollY": 8,
        "@marcom/ac-dom-nodes/isElement": 43,
        "@marcom/ac-dom-nodes/isNodeList": 45,
        "@marcom/ac-object/clone": 51,
        "@marcom/ac-object/extend": 53
    }],
    48: [function(require, module, exports) {
        "use strict";
        var ac_dom_nodes = {
                isElement: require("@marcom/ac-dom-nodes/isElement")
            },
            EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            superclass = EventEmitterMicro.prototype;

        function TrackedElement(e, t) {
            if (!ac_dom_nodes.isElement(e)) throw new TypeError("TrackedElement: " + e + " is not a valid DOM element");
            EventEmitterMicro.call(this), this.element = e, this.inView = !1, this.isActive = !0, this.percentInView = 0, this.pixelsInView = 0, this.offsetTop = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.useRenderedPosition = t || !1
        }
        var proto = TrackedElement.prototype = Object.create(superclass);
        proto.destroy = function() {
            this.element = null, superclass.destroy.call(this)
        }, module.exports = TrackedElement
    }, {
        "@marcom/ac-dom-nodes/isElement": 43,
        "@marcom/ac-event-emitter-micro": 49
    }],
    49: [function(require, module, exports) {
        "use strict";
        module.exports = {
            EventEmitterMicro: require("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }, {
        "./ac-event-emitter-micro/EventEmitterMicro": 50
    }],
    50: [function(require, module, exports) {
        "use strict";

        function EventEmitterMicro() {
            this._events = {}
        }
        var proto = EventEmitterMicro.prototype;
        proto.on = function(t, e) {
            this._events[t] = this._events[t] || [], this._events[t].unshift(e)
        }, proto.once = function(t, e) {
            var n = this;
            this.on(t, function i(s) {
                n.off(t, i), void 0 !== s ? e(s) : e()
            })
        }, proto.off = function(t, e) {
            if (this.has(t)) {
                if (1 === arguments.length) return this._events[t] = null, void delete this._events[t];
                var n = this._events[t].indexOf(e); - 1 !== n && this._events[t].splice(n, 1)
            }
        }, proto.trigger = function(t, e) {
            if (this.has(t))
                for (var n = this._events[t].length - 1; n >= 0; n--) void 0 !== e ? this._events[t][n](e) : this._events[t][n]()
        }, proto.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }, proto.destroy = function() {
            for (var t in this._events) this._events[t] = null;
            this._events = null
        }, module.exports = EventEmitterMicro
    }, {}],
    51: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/isArray");
        var extend = require("./extend"),
            hasOwnProp = Object.prototype.hasOwnProperty,
            deepClone = function(e, r) {
                var n;
                for (n in r) hasOwnProp.call(r, n) && (null === r[n] ? e[n] = null : "object" == typeof r[n] ? (e[n] = Array.isArray(r[n]) ? [] : {}, deepClone(e[n], r[n])) : e[n] = r[n]);
                return e
            };
        module.exports = function(e, r) {
            return r ? deepClone({}, e) : extend({}, e)
        }
    }, {
        "./extend": 53,
        "@marcom/ac-polyfills/Array/isArray": 54
    }],
    52: [function(require, module, exports) {
        "use strict";
        var extend = require("./extend");
        module.exports = function(e, t) {
            if ("object" != typeof e) throw new TypeError("defaults: must provide a defaults object");
            if ("object" != typeof(t = t || {})) throw new TypeError("defaults: options must be a typeof object");
            return extend({}, e, t)
        }
    }, {
        "./extend": 53
    }],
    53: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.forEach");
        var hasOwnProp = Object.prototype.hasOwnProperty;
        module.exports = function() {
            var r, o;
            return r = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), o = r.shift(), r.forEach(function(r) {
                if (null != r)
                    for (var t in r) hasOwnProp.call(r, t) && (o[t] = r[t])
            }), o
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.forEach": 55
    }],
    54: [function(require, module, exports) {
        Array.isArray || (Array.isArray = function(r) {
            return "[object Array]" === Object.prototype.toString.call(r)
        })
    }, {}],
    55: [function(require, module, exports) {
        Array.prototype.forEach || (Array.prototype.forEach = function(o, r) {
            var t, a, c = Object(this);
            if ("function" != typeof o) throw new TypeError("No function object passed to forEach.");
            var e = this.length;
            for (t = 0; t < e; t += 1) a = c[t], o.call(r, a, t, c)
        })
    }, {}],
    56: [function(require, module, exports) {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(r, t) {
            var e = t || 0,
                i = 0;
            if (e < 0 && (e = this.length + t - 1) < 0) throw "Wrapped past beginning of array while looking up a negative start index.";
            for (i = 0; i < this.length; i++)
                if (this[i] === r) return i;
            return -1
        })
    }, {}],
    57: [function(require, module, exports) {
        ! function() {
            "use strict";
            var t = Array.prototype.slice;
            try {
                t.call(document.documentElement)
            } catch (r) {
                Array.prototype.slice = function(r, e) {
                    if (e = void 0 !== e ? e : this.length, "[object Array]" === Object.prototype.toString.call(this)) return t.call(this, r, e);
                    var i, c, o = [],
                        n = this.length,
                        a = r || 0,
                        h = e || n;
                    if (e < 0 && (h = n + e), (c = h - (a = a >= 0 ? a : n + a)) > 0)
                        if (o = new Array(c), this.charAt)
                            for (i = 0; i < c; i++) o[i] = this.charAt(a + i);
                        else
                            for (i = 0; i < c; i++) o[i] = this[a + i];
                    return o
                }
            }
        }()
    }, {}],
    58: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("@marcom/ac-dom-nodes/isNodeType"),
            validate = require("./internal/validate"),
            ELEMENT = require("@marcom/ac-dom-nodes/NODE_TYPES").ELEMENT;
        module.exports = function(e, r, o, a) {
            if (validate.childNode(e, "ancestors"), validate.selector(r, "ancestors"), o && isNodeType(e, ELEMENT) && (!r || e.matches(r))) return e;
            if (e !== (a = a || document.body))
                for (;
                    (e = e.parentNode) && isNodeType(e, ELEMENT);) {
                    if (!r || e.matches(r)) return e;
                    if (e === a) break
                }
            return null
        }
    }, {
        "./internal/validate": 59,
        "@marcom/ac-dom-nodes/NODE_TYPES": 9,
        "@marcom/ac-dom-nodes/isNodeType": 19
    }],
    59: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("@marcom/ac-dom-nodes/isNodeType"),
            NODE_TYPES = require("@marcom/ac-dom-nodes/NODE_TYPES"),
            COMMENT_NODE = NODE_TYPES.COMMENT,
            DOCUMENT_FRAGMENT_NODE = NODE_TYPES.DOCUMENT_FRAGMENT,
            DOCUMENT_NODE = NODE_TYPES.DOCUMENT,
            ELEMENT_NODE = NODE_TYPES.ELEMENT,
            TEXT_NODE = NODE_TYPES.TEXT,
            VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_PARENT_NODE = " must be an Element, Document, or Document Fragment",
            VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE],
            ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment",
            ERR_INVALID_SELECTOR = " must be a string";
        module.exports = {
            parentNode: function(E, N) {
                if (!E || !isNodeType(E, VALID_PARENT_NODE)) throw new TypeError(N + ": node" + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(E, N) {
                if (!E || !isNodeType(E, VALID_CHILD_NODE)) throw new TypeError(N + ": node" + ERR_INVALID_CHILD_NODE)
            },
            selector: function(E, N, e) {
                if (e = "boolean" == typeof e && e, (E || e) && "string" != typeof E) throw new TypeError(N + ": selector" + ERR_INVALID_SELECTOR)
            }
        }
    }, {
        "@marcom/ac-dom-nodes/NODE_TYPES": 9,
        "@marcom/ac-dom-nodes/isNodeType": 19
    }],
    60: [function(require, module, exports) {
        "use strict";
        module.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }, {}],
    61: [function(require, module, exports) {
        "use strict";
        var os = require("@marcom/useragent-detect").os,
            touchAvailable = require("./touchAvailable").original,
            globalsHelper = require("./helpers/globals"),
            once = require("@marcom/function-utils/once");

        function isDesktop() {
            var e = globalsHelper.getWindow();
            return !touchAvailable() && !e.orientation || os.windows
        }
        module.exports = once(isDesktop), module.exports.original = isDesktop
    }, {
        "./helpers/globals": 60,
        "./touchAvailable": 65,
        "@marcom/function-utils/once": 67,
        "@marcom/useragent-detect": 71
    }],
    62: [function(require, module, exports) {
        "use strict";
        var isDesktop = require("./isDesktop").original,
            isTablet = require("./isTablet").original,
            once = require("@marcom/function-utils/once");

        function isHandheld() {
            return !isDesktop() && !isTablet()
        }
        module.exports = once(isHandheld), module.exports.original = isHandheld
    }, {
        "./isDesktop": 61,
        "./isTablet": 63,
        "@marcom/function-utils/once": 67
    }],
    63: [function(require, module, exports) {
        "use strict";
        var isDesktop = require("./isDesktop").original,
            globalsHelper = require("./helpers/globals"),
            once = require("@marcom/function-utils/once"),
            MIN_TABLET_WIDTH = 600;

        function isTablet() {
            var e = globalsHelper.getWindow(),
                i = e.screen.width;
            return e.orientation && e.screen.height < i && (i = e.screen.height), !isDesktop() && i >= MIN_TABLET_WIDTH
        }
        module.exports = once(isTablet), module.exports.original = isTablet
    }, {
        "./helpers/globals": 60,
        "./isDesktop": 61,
        "@marcom/function-utils/once": 67
    }],
    64: [function(require, module, exports) {
        "use strict";
        var globalsHelper = require("./helpers/globals"),
            once = require("@marcom/function-utils/once");

        function sessionStorageAvailable() {
            var e = globalsHelper.getWindow(),
                s = !1;
            try {
                "sessionStorage" in e && "function" == typeof e.sessionStorage.setItem && (e.sessionStorage.setItem("ac_feature", "test"), s = !0, e.sessionStorage.removeItem("ac_feature", "test"))
            } catch (e) {}
            return s
        }
        module.exports = once(sessionStorageAvailable), module.exports.original = sessionStorageAvailable
    }, {
        "./helpers/globals": 60,
        "@marcom/function-utils/once": 67
    }],
    65: [function(require, module, exports) {
        "use strict";
        var globalsHelper = require("./helpers/globals"),
            once = require("@marcom/function-utils/once");

        function touchAvailable() {
            var e = globalsHelper.getWindow(),
                o = globalsHelper.getDocument(),
                l = globalsHelper.getNavigator();
            return !!("ontouchstart" in e || e.DocumentTouch && o instanceof e.DocumentTouch || l.maxTouchPoints > 0 || l.msMaxTouchPoints > 0)
        }
        module.exports = once(touchAvailable), module.exports.original = touchAvailable
    }, {
        "./helpers/globals": 60,
        "@marcom/function-utils/once": 67
    }],
    66: [function(require, module, exports) {
        "use strict";
        var PARAM_ERROR_TEXT = "Error: Expected parameter is missing or has the wrong type",
            DEFAULT_OPTIONS = {
                trailing: !0,
                leading: !1
            };

        function debounce(e, i, n) {
            if ("number" != typeof i || "function" != typeof e) throw new TypeError(PARAM_ERROR_TEXT);
            if ("boolean" != typeof(n = Object.assign({}, DEFAULT_OPTIONS, n)).trailing || "boolean" != typeof n.leading) throw new TypeError(PARAM_ERROR_TEXT);
            n.trailing || n.leading || (n.trailing = !0);
            var t = null,
                r = 0;

            function a() {
                n.leading && n.trailing && r++;
                var a = arguments;
                null === t && n.leading && e.apply(this, a);
                var l = function() {
                    t = null, n.leading ? r > 1 && n.trailing && (e.apply(this, a), r = 0) : e.apply(this, a)
                }.bind(this);
                clearTimeout(t), t = setTimeout(l, i)
            }
            return a.cancel = function() {
                clearTimeout(t)
            }, a
        }
        module.exports = debounce
    }, {}],
    67: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            var r;
            return function() {
                return void 0 === r && (r = t.apply(this, arguments)), r
            }
        }
    }, {}],
    68: [function(require, module, exports) {
        "use strict";
        module.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }, {}],
    69: [function(require, module, exports) {
        "use strict";
        module.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(e) {
                    return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(e) {
                    return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(e) {
                    return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var e = !1;
                    return document.documentMode && (e = parseInt(document.documentMode, 10)), e
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }],
            os: [{
                name: "windows",
                test: function(e) {
                    return e.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(e) {
                    return e.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function(e) {
                    return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(e) {
                    return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function(e) {
                    return e.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }, {}],
    70: [function(require, module, exports) {
        "use strict";
        var defaults = require("./defaults"),
            dictionary = require("./dictionary");

        function _matchVersionStrRegExp(e) {
            return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
        }

        function _parseVersion(e, r) {
            if ("function" == typeof e.parseVersion) return e.parseVersion(r);
            var n = e.version || e.userAgent;
            "string" == typeof n && (n = [n]);
            for (var t, s = n.length, o = 0; o < s; o++)
                if ((t = r.match(_matchVersionStrRegExp(n[o]))) && t.length > 1) return t[1].replace(/_/g, ".");
            return !1
        }

        function _parseUserAgent(e, r, n) {
            for (var t, s, o = e.length, i = 0; i < o; i++)
                if ("function" == typeof e[i].test ? !0 === e[i].test(n) && (t = e[i].name) : n.ua.indexOf(e[i].userAgent) > -1 && (t = e[i].name), t) {
                    if (r[t] = !0, "string" == typeof(s = _parseVersion(e[i], n.ua))) {
                        var a = s.split(".");
                        r.version.string = s, a && a.length > 0 && (r.version.major = parseInt(a[0] || 0), r.version.minor = parseInt(a[1] || 0), r.version.patch = parseInt(a[2] || 0))
                    } else "edge" === t && (r.version.string = "12.0.0", r.version.major = "12", r.version.minor = "0", r.version.patch = "0");
                    return "function" == typeof e[i].parseDocumentMode && (r.version.documentMode = e[i].parseDocumentMode()), r
                }
            return r
        }

        function parseUserAgent(e) {
            var r = {};
            return r.browser = _parseUserAgent(dictionary.browser, defaults.browser, e), r.os = _parseUserAgent(dictionary.os, defaults.os, e), r
        }
        module.exports = parseUserAgent
    }, {
        "./defaults": 68,
        "./dictionary": 69
    }],
    71: [function(require, module, exports) {
        "use strict";
        var navigatorObj = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        module.exports = require("./parseUserAgent")(navigatorObj)
    }, {
        "./parseUserAgent": 70
    }],
    72: [function(require, module, exports) {
        "use strict";

        function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        function _createClass(e, r, t) {
            return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e
        }
        var localStorage = require("@apple/analytics-utils").localStorage,
            jsonEncoder = require("@apple/analytics-utils").jsonEncoder,
            errorHandler = require("./error-handler/ErrorHandler"),
            STORAGE_KEY = require("./constants").analyticsQueueStorageKey,
            Queue = function() {
                function e() {
                    _classCallCheck(this, e), this._storage = localStorage, this._arr = [], this._length = 0
                }
                return _createClass(e, [{
                    key: "add",
                    value: function(e) {
                        e || errorHandler.log("Queue", "add", e + " is not a valid object"), errorHandler.exception || (this._arr.push(e), this._updateQueueSize())
                    }
                }, {
                    key: "remove",
                    value: function() {
                        this.size() > 0 && (this._arr.shift(), this._updateQueueSize())
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this._arr = [], this._length = 0
                    }
                }, {
                    key: "peek",
                    value: function() {
                        if (this.size() > 0) return this._arr[0]
                    }
                }, {
                    key: "isEmpty",
                    value: function() {
                        return 0 === this.size()
                    }
                }, {
                    key: "size",
                    value: function() {
                        return this._length
                    }
                }, {
                    key: "load",
                    value: function() {
                        var e = this._storage.get(STORAGE_KEY);
                        (e = jsonEncoder.decode(e)) && e && Array.isArray(e) && (this._arr = e, this._storage.remove(STORAGE_KEY), this._updateQueueSize())
                    }
                }, {
                    key: "save",
                    value: function() {
                        this._storage.set(STORAGE_KEY, jsonEncoder.encode(this._arr)), this.reset()
                    }
                }, {
                    key: "collect",
                    value: function() {
                        var e = this._arr,
                            r = jsonEncoder.decode(this._storage.get(STORAGE_KEY));
                        Array.isArray(r) && (e = r.concat(e)), this._storage.set(STORAGE_KEY, jsonEncoder.encode(e)), this.reset()
                    }
                }, {
                    key: "canSave",
                    value: function() {
                        return "" !== localStorage.get("storagetest")
                    }
                }, {
                    key: "_updateQueueSize",
                    value: function() {
                        this._length = this._arr.length
                    }
                }]), e
            }();
        module.exports = Queue
    }, {
        "./constants": 74,
        "./error-handler/ErrorHandler": 76,
        "@apple/analytics-utils": 1
    }],
    73: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _createClass(e, n, t) {
            return n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
        }
        var Queue = require("./Queue"),
            plugins = require("./plugins/plugins"),
            translator = require("./translator/translator"),
            errorHandler = require("./error-handler/ErrorHandler"),
            moduleName = "Tracker",
            Tracker = function() {
                function e(n) {
                    _classCallCheck(this, e), "function" == typeof plugins[n] ? this.plugin = new plugins[n] : errorHandler.log(moduleName, null, 'Could not create a Tracker. "' + n + '" is not a valid plugin'), errorHandler.exception || (this.paused = !1, this._queue = new Queue, this.trackGeneric = this.trackGeneric.bind(this), this.resume())
                }
                return _createClass(e, [{
                    key: "track",
                    value: function(e) {
                        var n;
                        e && "object" === _typeof(e) && e.type || errorHandler.log(moduleName, "track", e + " is not a valid request object"), errorHandler.exception || (n = translator.translate(e), n = this.plugin.translate(n), this._queue.add(n), !0 !== this.paused ? this._run() : this._queue.collect())
                    }
                }, {
                    key: "isPaused",
                    value: function() {
                        return this.paused
                    }
                }, {
                    key: "resume",
                    value: function() {
                        this._queue.load(), 0 !== this._queue.size() && (this.paused = !1, this._run())
                    }
                }, {
                    key: "_run",
                    value: function() {
                        if (0 !== this._queue.size()) {
                            var e = this._queue.peek().options || {};
                            void 0 === e.async && (e.async = !0), (!1 === e.async ? this.sync(this.send.bind(this)) : this.async(this.send.bind(this))).then(function() {
                                !this.paused && this._queue.size() > 0 && this._run()
                            }.bind(this))
                        }
                    }
                }, {
                    key: "send",
                    value: function() {
                        if ("function" != typeof this.plugin.submit && errorHandler.log(moduleName, "send", "provided plugin does not contain a valid submit method"), !errorHandler.exception && 0 !== this._queue.size()) {
                            var e = this._queue.peek();
                            this.plugin.submit(e), this._queue.remove()
                        }
                    }
                }, {
                    key: "pause",
                    value: function() {
                        !0 !== this.paused && this.canPause() && (this._queue.size() > 0 && this._queue.save(), this.paused = !0)
                    }
                }, {
                    key: "canPause",
                    value: function() {
                        return this._queue.canSave()
                    }
                }, {
                    key: "async",
                    value: function(e) {
                        if (e && "function" == typeof e || errorHandler.log(moduleName, "async", 'Provided callback "' + e + '" is not a function'), !errorHandler.exception) return new Promise(function(n) {
                            setTimeout(function() {
                                e(), n()
                            }, 0)
                        })
                    }
                }, {
                    key: "sync",
                    value: function(e) {
                        if (e && "function" == typeof e || errorHandler.log(moduleName, "sync", 'Provided callback "' + e + '" is not a function'), !errorHandler.exception) return new Promise(function(n) {
                            e(), n()
                        })
                    }
                }, {
                    key: "trackGeneric",
                    value: function(e, n) {
                        var t = {
                            data: e,
                            type: "event",
                            options: n || {}
                        };
                        this.track(t)
                    }
                }]), e
            }();
        module.exports = Tracker
    }, {
        "./Queue": 72,
        "./error-handler/ErrorHandler": 76,
        "./plugins/plugins": 108,
        "./translator/translator": 126
    }],
    74: [function(require, module, exports) {
        "use strict";
        var constants = {
            acAnalyticsVersion: "2.7.1",
            sessionStorage: "sessionStorage",
            passiveTrackerStorageKey: "s_aca_ptd",
            appleMetricsStorageKey: "apple_Metrics",
            analyticsQueueStorageKey: "ac-analytics-queue"
        };
        module.exports = Object.freeze(constants)
    }, {}],
    75: [function(require, module, exports) {
        "use strict";
        var utils = require("@apple/analytics-utils"),
            cookieJson = utils.cookieJson,
            beaconHelpers = utils.beaconHelpers,
            toStr = utils.toStr,
            cookieName = "mk_epub",
            cookieOpts = {
                path: "/",
                domain: "apple.com",
                secure: !0
            };

        function getSharedCookie() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e = Object.assign({}, cookieOpts, e);
            var o = cookieJson.get(cookieName);
            return cookieJson.set(cookieName, null, e), o
        }

        function setSharedCookie(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o = Object.assign({}, cookieOpts, o), beaconHelpers.isNotEmpty(e) && cookieJson.set(cookieName, sanitizeBeacon(e), o)
        }

        function sanitizeBeacon(e) {
            return Object.keys(e).forEach(function(o) {
                var t = o.substring(0, 4),
                    i = toStr(e[o]);
                "prop" === t ? e[o] = i.substring(0, 100) : "eVar" === t && (e[o] = i.substring(0, 250))
            }), e
        }
        module.exports = {
            getSharedCookie: getSharedCookie,
            setSharedCookie: setSharedCookie,
            sanitizeBeacon: sanitizeBeacon
        }
    }, {
        "@apple/analytics-utils": 1
    }],
    76: [function(require, module, exports) {
        "use strict";

        function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, r) {
            for (var s = 0; s < r.length; s++) {
                var t = r[s];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        function _createClass(e, r, s) {
            return r && _defineProperties(e.prototype, r), s && _defineProperties(e, s), e
        }
        var _log = require("@marcom/ac-console/log"),
            messagePrefix = "Analytics",
            ErrorHandler = function() {
                function e() {
                    _classCallCheck(this, e), this.exception = !1, this.errors = []
                }
                return _createClass(e, [{
                    key: "log",
                    value: function(e, r, s) {
                        var t = this._formatMessage(e, r, s);
                        this.exception = !0, this.errors.push({
                            instance: e,
                            method: r,
                            message: t
                        }), _log(t)
                    }
                }, {
                    key: "warn",
                    value: function(e, r, s) {
                        var t = this._formatMessage(e, r, s);
                        _log(t)
                    }
                }, {
                    key: "report",
                    value: function(e) {
                        var r = "";
                        return "number" == typeof e && this.errors[e] ? (r = this.errors[e].message, _log(this.errors[e].message)) : (this.errors.forEach(function(e) {
                            r += "".concat(e.message, " '\r\n")
                        }), _log(r)), r
                    }
                }, {
                    key: "_formatMessage",
                    value: function(e, r, s) {
                        var t = "";
                        return (e || r) && (t = (e || "") + (e && r ? "." : "") + (r || "") + " : "), messagePrefix + " : " + t + s
                    }
                }, {
                    key: "bailed",
                    value: function() {
                        return this.errors.length > 0
                    }
                }]), e
            }();
        module.exports = new ErrorHandler
    }, {
        "@marcom/ac-console/log": 4
    }],
    77: [function(require, module, exports) {
        "use strict";

        function ownKeys(e, r) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                r && (t = t.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })), n.push.apply(n, t)
            }
            return n
        }

        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(n, !0).forEach(function(r) {
                    _defineProperty(e, r, n[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                })
            }
            return e
        }

        function _defineProperty(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n, e
        }
        var PageObserver = require("../observer/Page"),
            LinkObserver = require("../observer/Link"),
            ClickObserver = require("../observer/Click"),
            SectionObserver = require("../observer/Section"),
            onDocumentReady = require("../onDocumentReady"),
            defaults = {
                page: {},
                link: {
                    autoEnable: !1
                },
                click: {
                    autoEnable: !1
                },
                section: {
                    autoEnable: !1
                }
            };

        function _enableObservers(e) {
            Object.keys(e).forEach(function(r) {
                "function" == typeof e[r].enable && e[r].enable()
            })
        }

        function create(e) {
            e = e ? _objectSpread({}, defaults, {}, e) : defaults;
            var r = {
                page: new PageObserver(e.page),
                link: new LinkObserver(e.link),
                click: new ClickObserver(e.click),
                section: new SectionObserver(e.section)
            };
            return onDocumentReady(function() {
                _enableObservers(r)
            }), r
        }
        module.exports = {
            create: create
        }
    }, {
        "../observer/Click": 80,
        "../observer/Link": 83,
        "../observer/Page": 84,
        "../observer/Section": 85,
        "../onDocumentReady": 87
    }],
    78: [function(require, module, exports) {
        "use strict";

        function _toConsumableArray(e) {
            return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function _iterableToArray(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function _arrayWithoutHoles(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
                return a
            }
        }
        var metaObject, errorHandler = require("./error-handler/ErrorHandler"),
            head = document.getElementsByTagName("head")[0],
            metaPropertyPrefix = "analytics",
            prefixPattern = "^" + metaPropertyPrefix + "-",
            patternRegex = new RegExp(prefixPattern),
            moduleName = "metadata",
            metaTags = _toConsumableArray(head.getElementsByTagName("meta")),
            initialTimeStamp = Date.now();

        function _getProductName(e) {
            var t = _strToArray(e.track);
            if (Array.isArray(t) && 0 !== t.length || errorHandler.log(moduleName, "_getProductname", '"track" meta tag value is malformed. e.g. "product name - page name"'), !errorHandler.exception) return t[0].trim()
        }

        function _getPageName(e) {
            if (e.track && "" !== e.track ? e.track.match(/[^\S ]/g) && errorHandler.warn(moduleName, "_getPageName", '"track" meta tag value includes an invalid whitespace character, identified by the following regex: "[^\\S ]"') : errorHandler.log(moduleName, "_getPageName", '"track" meta tag value is malformed. e.g. "product name - page name"'), !errorHandler.exception) return e.track.toLowerCase()
        }

        function _getLocale() {
            var e = document.documentElement,
                t = e.getAttribute("data-locale") || e.lang;
            if (t || errorHandler.log(moduleName, "_getLocale", "html lang attribute can not be empty"), !errorHandler.exception) return t
        }

        function _metaTagsToObject(e) {
            e = _filterMetaTags(e);
            var t = {};
            return e.forEach(function(e) {
                var a = _transformPropertyName(e.getAttribute("property")),
                    r = e.getAttribute("content");
                t[a] = r
            }), t
        }

        function _filterMetaTags(e) {
            return e.filter(function(e) {
                var t = e.getAttribute("property");
                return patternRegex.test(t)
            })
        }

        function _transformPropertyName(e) {
            return e.replace(metaPropertyPrefix + "-", "").replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        }

        function _augmentMetaObject(e) {
            return e.pageName = e.pageName || _getPageName(e), e.productName = e.productName || _getProductName(e), e.locale = e.locale || _getLocale(), e.initialTimeStamp = initialTimeStamp, e
        }

        function _strToArray(e, t) {
            if (t = t || "-", "string" != typeof e && errorHandler.log(moduleName, "_strToArray", e + " is not a valid string"), !errorHandler.exception) return e.split(t)
        }

        function bundleMetaObject(e) {
            metaObject = _metaTagsToObject(e)
        }

        function getMetadata() {
            return _augmentMetaObject(metaObject)
        }

        function refreshMetadata() {
            return metaTags = _toConsumableArray(head.getElementsByTagName("meta")), metaObject = null, initialTimeStamp = Date.now(), bundleMetaObject(metaTags), _augmentMetaObject(metaObject)
        }
        bundleMetaObject(metaTags), module.exports = {
            getMetadata: getMetadata,
            refreshMetadata: refreshMetadata
        }
    }, {
        "./error-handler/ErrorHandler": 76
    }],
    79: [function(require, module, exports) {
        "use strict";
        var Tracker = require("./Tracker");
        module.exports = new Tracker("appMeasurement"), module.exports.Tracker = Tracker
    }, {
        "./Tracker": 73
    }],
    80: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(r, !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
        }

        function _possibleConstructorReturn(e, t) {
            return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
        }

        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }

        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ancestor = require("@marcom/dom-traversal/ancestor"),
            acDomNodes = require("@marcom/ac-dom-nodes"),
            metricsTracker = require("../metricsTracker"),
            errorHandler = require("../error-handler/ErrorHandler"),
            EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            defaultOptions = {
                dataAttribute: "analytics-click",
                titleDataAttribute: "analytics-title",
                autoEnable: !0
            },
            moduleName = "ClickAnalyticsObserver",
            exitLinkPattern = /^https?:\/\/|^\/\//i,
            ClickAnalyticsObserver = function(e) {
                function t() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, r))).options = _objectSpread({}, defaultOptions, {}, r), e.tracker = metricsTracker, e.isEnabled = !1, e._boundOnInteraction = e._onInteraction.bind(_assertThisInitialized(e)), e._elements = null, !0 === e.options.autoEnable && e.enable(), e
                }
                return _inherits(t, EventEmitterMicro), _createClass(t, [{
                    key: "enable",
                    value: function() {
                        errorHandler.exception || this.isEnabled || (this.addListener(), this.isEnabled = !0, this.trigger("enabled"))
                    }
                }, {
                    key: "addListener",
                    value: function() {
                        document.body.addEventListener("click", this._boundOnInteraction)
                    }
                }, {
                    key: "removeListener",
                    value: function() {
                        document.body.removeEventListener("click", this._boundOnInteraction)
                    }
                }, {
                    key: "_onInteraction",
                    value: function(e) {
                        var t, r = e.target;
                        r.getAttribute("data-" + this.options.dataAttribute) || (t = ancestor(r, "[data-" + this.options.dataAttribute + "]")) && (r = t), r.classList.contains("ac-gn-link-bag") || r.hasAttribute("href") && "A" === r.tagName && !r.hasAttribute("data-analytics-intrapage-link") && exitLinkPattern.test(r.getAttribute("href")) || r.getAttribute("data-" + this.options.dataAttribute) && this.track(e, r)
                    }
                }, {
                    key: "track",
                    value: function(e, t) {
                        var r = {};
                        acDomNodes.isNodeType(t, acDomNodes.NODE_TYPES.ELEMENT) || errorHandler.log(moduleName, "track", t + " is not a valid DOM element"), errorHandler.exception || (r.targetEl = t, this.tracker.track({
                            type: "click",
                            event: e,
                            data: r,
                            options: this.options
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeListener(), this.options = null, this.tracker = null, this.isEnabled = null, this._boundOnInteraction = null, this._elements = null
                    }
                }]), t
            }();
        module.exports = ClickAnalyticsObserver
    }, {
        "../error-handler/ErrorHandler": 76,
        "../metricsTracker": 79,
        "@marcom/ac-dom-nodes": 10,
        "@marcom/ac-event-emitter-micro": 49,
        "@marcom/dom-traversal/ancestor": 58
    }],
    81: [function(require, module, exports) {
        "use strict";

        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(r, !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
        }
        var errorHandler = require("../error-handler/ErrorHandler"),
            metricsTracker = require("../metricsTracker"),
            defaultOptions = {
                interactionEvents: [],
                interactionEventCallbacks: {}
            },
            moduleName = "EventAnalyticsObserver",
            EventAnalyticsObserver = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, e), t && "object" === _typeof(t) && "function" == typeof t.on && "function" == typeof t.off || errorHandler.log(moduleName, null, t + " does not appear to be a valid EventEmitter"), this.options = _objectSpread({}, defaultOptions, {}, r), Array.isArray(this.options.interactionEvents) || errorHandler.log(moduleName, null, this.options.interactionEvents + " is not an array"), this.tracker = metricsTracker, this.targetObj = t, this._callbacks = {}, this.attachEvents()
                }
                return _createClass(e, [{
                    key: "attachEvents",
                    value: function() {
                        if (!errorHandler.exception) {
                            var e, t = this.options;
                            t.interactionEvents.forEach(function(r) {
                                e = "function" == typeof(e = t.interactionEventCallbacks[r]) ? e : this.track.bind(this), this._callbacks[r] = e, this.addListener(r, e)
                            }, this)
                        }
                    }
                }, {
                    key: "detachEvents",
                    value: function() {
                        Object.keys(this._callbacks).forEach(function(e) {
                            this.removeListener(e, this._callbacks[e])
                        }, this)
                    }
                }, {
                    key: "addListener",
                    value: function(e, t) {
                        this.targetObj.on(e, t)
                    }
                }, {
                    key: "removeListener",
                    value: function(e, t) {
                        this.targetObj.off(e, t)
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        this.tracker.track({
                            type: "event",
                            data: e,
                            options: this.options
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.detachEvents(), this.options = null, this.tracker = null, this.targetObj = null, this._callbacks = null
                    }
                }]), e
            }();
        module.exports = EventAnalyticsObserver
    }, {
        "../error-handler/ErrorHandler": 76,
        "../metricsTracker": 79
    }],
    82: [function(require, module, exports) {
        "use strict";

        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                    _defineProperty(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }
        var metricsTracker = require("../metricsTracker"),
            metadata = require("../metadata").getMetadata(),
            errorHandler = require("../error-handler/ErrorHandler"),
            defaultOptions = {
                trackAutoRotate: !1,
                beforeUpdateEvent: "willShow",
                afterUpdateEvent: "didShow"
            },
            moduleName = "GalleryAnalyticsObserver",
            GalleryAnalyticsObserver = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, e), t && "object" === _typeof(t) || errorHandler.log(moduleName, null, t + " is not an object"), this.options = _objectSpread({}, defaultOptions, {}, n), this.gallery = t, this.tracker = metricsTracker, this.trackedInteractionTypes = [], this.outgoingSlideInteractionType = "auto", this.incomingSlideTimestamp = metadata.initialTimeStamp, this._onUpdate = this._onUpdate.bind(this), this._onComplete = this.track.bind(this), this.addListener()
                }
                return _createClass(e, [{
                    key: "addListener",
                    value: function() {
                        errorHandler.exception || (this.options.beforeUpdateEvent && this.gallery.on(this.options.beforeUpdateEvent, this._onUpdate), this.options.afterUpdateEvent && this.gallery.on(this.options.afterUpdateEvent, this._onComplete))
                    }
                }, {
                    key: "removeListener",
                    value: function() {
                        this.options.beforeUpdateEvent && this.gallery.off(this.options.beforeUpdateEvent, this._onUpdate), this.options.afterUpdateEvent && this.gallery.off(this.options.afterUpdateEvent, this._onComplete)
                    }
                }, {
                    key: "_createInteractionEvent",
                    value: function(e) {
                        var t = e.interactionEvent.originalEvent || e.interactionEvent;
                        return t ? {
                            type: t.type,
                            target: t.target,
                            srcElement: t.srcElement
                        } : null
                    }
                }, {
                    key: "_onUpdate",
                    value: function(e) {
                        this.interactionEvent = null, e.interactionEvent && (this.interactionEvent = this._createInteractionEvent(e))
                    }
                }, {
                    key: "_getSlideId",
                    value: function(e) {
                        var t = "",
                            n = 0;
                        if (e && Array.isArray(e)) {
                            n = e.length;
                            for (var i = 0; i < n; i++)
                                if ("function" == typeof e[i].getElement && "function" == typeof e[i].getElementId) {
                                    var r = e[i].getElement(),
                                        o = r ? r.getAttribute("data-analytics-gallery-item-id") : null;
                                    t += o ? o + "-" : e[i].getElementId() + "-"
                                }
                        }
                        return t.slice(0, t.length - 1)
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        if (!1 !== this.options.trackAutoRotate || e.interactionEvent && (!e.interactionEvent.gallery || e.interactionEvent.gallery !== this.gallery)) {
                            var t = Object.assign({}, e);
                            t.interactionEvent = this.interactionEvent || this._createInteractionEvent(e), this.options.galleryName || errorHandler.log(moduleName, "track", this.options.galleryName + " is not a valid gallery name"), errorHandler.exception || (t.incoming && "string" != typeof t.incoming.id && (t.incoming.id = this._getSlideId(t.incoming)), t.outgoing && "string" != typeof t.outgoing.id && (t.outgoing.id = this._getSlideId(t.outgoing)), this.outgoingSlideTimestamp = this.incomingSlideTimestamp, this.incomingSlideTimestamp = Date.now(), t.incomingSlideTimestamp = this.incomingSlideTimestamp, t.outgoingSlideTimestamp = this.outgoingSlideTimestamp, this.tracker.track({
                                type: "gallery",
                                data: t,
                                observer: this,
                                options: this.options
                            }))
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.gallery || errorHandler.log(moduleName, "destroy", this.gallery + " is not an object"), errorHandler.exception || (this.removeListener(), this.options = null, this.tracker = null, this.gallery = null, this.trackedInteractionTypes = null, this.interactionEvent = null)
                    }
                }]), e
            }();
        module.exports = GalleryAnalyticsObserver
    }, {
        "../error-handler/ErrorHandler": 76,
        "../metadata": 78,
        "../metricsTracker": 79
    }],
    83: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(r, !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
        }

        function _possibleConstructorReturn(e, t) {
            return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
        }

        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }

        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ancestor = require("@marcom/dom-traversal/ancestor"),
            metricsTracker = require("../metricsTracker"),
            errorHandler = require("../error-handler/ErrorHandler"),
            EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            defaultOptions = {
                dataAttribute: "analytics-link",
                titleDataAttribute: "analytics-title",
                silent: !0,
                autoEnable: !0
            },
            LinkAnalyticsObserver = function(e) {
                function t() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, r))).options = _objectSpread({}, defaultOptions, {}, r), e.tracker = metricsTracker, e.isEnabled = !1, e.defaultTracking = e.track.bind(_assertThisInitialized(e)), !0 === e.options.autoEnable && e.enable(), e
                }
                return _inherits(t, EventEmitterMicro), _createClass(t, [{
                    key: "enable",
                    value: function() {
                        errorHandler.exception || this.isEnabled || (this.addListener(), this.isEnabled = !0, this.trigger("enabled"))
                    }
                }, {
                    key: "addListener",
                    value: function() {
                        document.body.addEventListener("mouseup", this.defaultTracking)
                    }
                }, {
                    key: "removeListener",
                    value: function() {
                        document.body.removeEventListener("mouseup", this.defaultTracking)
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        var t, r, n = {},
                            o = e.target;
                        "a" === o.nodeName.toLowerCase() && (t = o), t || (r = ancestor(o, "a")) && (t = r), t && (n.targetEl = t, this.tracker.track({
                            type: "link",
                            event: e,
                            data: n,
                            options: this.options
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeListener(), this.options = null, this.tracker = null, this.isEnabled = null, this.defaultTracking = null
                    }
                }]), t
            }();
        module.exports = LinkAnalyticsObserver
    }, {
        "../error-handler/ErrorHandler": 76,
        "../metricsTracker": 79,
        "@marcom/ac-event-emitter-micro": 49,
        "@marcom/dom-traversal/ancestor": 58
    }],
    84: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(r, !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
        }

        function _possibleConstructorReturn(e, t) {
            return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
        }

        function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }

        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var metricsTracker = require("../metricsTracker"),
            errorHandler = require("../error-handler/ErrorHandler"),
            EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            defaultOptions = {
                autoEnable: !0
            },
            PageAnalyticsObserver = function(e) {
                function t() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, r))).options = _objectSpread({}, defaultOptions, {}, r), e.tracker = metricsTracker, e.data = e.options.data || {}, e.isEnabled = !1, !0 === e.options.autoEnable && e.enable(), e
                }
                return _inherits(t, EventEmitterMicro), _createClass(t, [{
                    key: "enable",
                    value: function() {
                        errorHandler.exception || this.isEnabled || (this.track(), this.isEnabled = !0, this.trigger("enabled"))
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        var t = this.options.data || {};
                        this.tracker.track({
                            type: "page",
                            event: e,
                            data: t,
                            options: this.options
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.options = null, this.tracker = null, this.data = null, this.isEnabled = null
                    }
                }]), t
            }();
        module.exports = PageAnalyticsObserver
    }, {
        "../error-handler/ErrorHandler": 76,
        "../metricsTracker": 79,
        "@marcom/ac-event-emitter-micro": 49
    }],
    85: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _toConsumableArray(e) {
            return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function _iterableToArray(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function _arrayWithoutHoles(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }

        function _possibleConstructorReturn(e, t) {
            return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
        }

        function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }

        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ElementEngagement = require("@marcom/ac-element-engagement"),
            metricsTracker = require("../metricsTracker"),
            errorHandler = require("../error-handler/ErrorHandler"),
            dataStringToObject = require("../translator/helpers/dataStringToObject"),
            EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            debounce = require("@marcom/function-utils/debounce"),
            moduleName = "SectionAnalyticsObserver";
        ElementEngagement._elementInViewPastThreshold = function(e) {
            return (e.engaged ? e.pixelsInView >= Math.min(this._windowHeight / 3, 325) : e.pixelsInView >= Math.min(this._windowHeight / 2.1, 450)) || e.percentInView > e.inViewThreshold
        };
        var defaultOptions = {
                dataAttribute: "analytics-section-engagement",
                autoEnable: !0,
                customInitialization: !1
            },
            trackedElementDefaults = {
                stopOnEngaged: !1,
                timeToEngage: 1e3
            },
            debounceOptions = {
                leading: !0
            },
            SectionAnalyticsObserver = function(e) {
                function t() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return _classCallCheck(this, t), e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, n)), ElementEngagement.elements.length > 0 && errorHandler.warn(moduleName, "constructor", "element engagement was already tracking elements when a new section observer was created. This could lead to errors in tracking. Make sure to destroy section observer before creating a new one."), e.options = Object.assign({}, defaultOptions, n), e.tracker = metricsTracker, e.elementEngagement = ElementEngagement, e.isEnabled = !1, e.sections = [], e._listeners = !1, !0 === e.options.autoEnable && e.enable(), e
                }
                return _inherits(t, EventEmitterMicro), _createClass(t, [{
                    key: "enable",
                    value: function() {
                        errorHandler.exception || this.isEnabled || (this._bindMethods(), this.options.customInitialization || (this._loadSections(), this.initializeTracking()))
                    }
                }, {
                    key: "initializeTracking",
                    value: function() {
                        this.sections && this.sections.length > 0 ? (this._setPosition(), this.options.elements = this.sections, this._addListeners(), this.elementEngagement.start(), this.isEnabled = !0, this.trigger("enabled")) : errorHandler.warn(moduleName, "initializeTracking", "initialization of Section Observer had no effect because no valid sections were queued before initialization.")
                    }
                }, {
                    key: "initializeSection",
                    value: function(e) {
                        if (this.sections && 0 !== this.sections.length) {
                            var t = this._getTrackedElement(e);
                            t && (this._setPosition(), this._listeners || this._addListeners(), this.options.elements && Array.isArray(this.options.elements) ? this.options.elements.push(e) : this.options.elements = [e], t.tracking = !1, this.elementEngagement.start(t))
                        }
                    }
                }, {
                    key: "addSection",
                    value: function(e) {
                        if (e && e instanceof Element && !this._getTrackedElement(e)) {
                            var t;
                            this.sections.push(e);
                            var n = e.getAttribute("data-" + this.options.dataAttribute);
                            t = dataStringToObject(n), t = this._castDataAttributeOptions(t), t = Object.assign({}, trackedElementDefaults, t), this.elementEngagement.addElement(e, t)
                        }
                    }
                }, {
                    key: "removeSection",
                    value: function(e) {
                        var t = this._getTrackedElement(e),
                            n = this.sections.indexOf(e);
                        n > -1 && this.sections.splice(n, 1), this.elementEngagement.stop(t)
                    }
                }, {
                    key: "clearSections",
                    value: function() {
                        this.elementEngagement && this.elementEngagement.elements && this.elementEngagement.elements.forEach(function(e) {
                            this.elementEngagement.stop(e)
                        }.bind(this)), this.sections = []
                    }
                }, {
                    key: "refreshMetrics",
                    value: function() {
                        this.elementEngagement.refreshAllElementMetrics()
                    }
                }, {
                    key: "startSectionEngagement",
                    value: function(e) {
                        var t = this._getTrackedElement(e);
                        t && (t.trigger("thresholdenter", t), t.trigger("engaged", t), this.elementEngagement._engaged.call(this.elementEngagement, t))
                    }
                }, {
                    key: "endSectionEngagement",
                    value: function(e) {
                        var t = this._getTrackedElement(e);
                        t && t.tracking && (t.thresholdExitTime = Date.now(), this.elementEngagement.stop(t), this.track({
                            element: t
                        }))
                    }
                }, {
                    key: "pauseElementTracking",
                    value: function(e) {
                        var t = this._getTrackedElement(e);
                        t && (t.isActive = !1)
                    }
                }, {
                    key: "resumeElementTracking",
                    value: function(e) {
                        var t = this._getTrackedElement(e);
                        t && (t.isActive = !0)
                    }
                }, {
                    key: "_bindMethods",
                    value: function() {
                        this._onThresholdExit = this._onThresholdExit.bind(this), this._onScroll = this._onScroll.bind(this), this._onResize = this._onResize.bind(this), this.endSectionEngagement = this.endSectionEngagement.bind(this), this._getTrackedElement = this._getTrackedElement.bind(this)
                    }
                }, {
                    key: "_loadSections",
                    value: function() {
                        _toConsumableArray(document.querySelectorAll("[data-" + this.options.dataAttribute + "]")).forEach(function(e) {
                            this.addSection(e)
                        }, this)
                    }
                }, {
                    key: "_setPosition",
                    value: function() {
                        var e, t = this.sections.length;
                        for (e = 0; e < t; e += 1) this.sections[e].position = e + 1
                    }
                }, {
                    key: "_castDataAttributeOptions",
                    value: function(e) {
                        return e = Object.assign({}, e), Object.keys(e).forEach(function(t) {
                            var n, i = e[t];
                            n = "false" !== i && ("true" === i || (isNaN(parseFloat(i)) ? i : parseFloat(i))), e[t] = n
                        }), e
                    }
                }, {
                    key: "_addListeners",
                    value: function() {
                        this._listeners = !0, this.elementEngagement.on("thresholdexit", this._onThresholdExit), window.addEventListener("scroll", this._onScroll), window.addEventListener("resize", this._onResize), window.addEventListener("orientationchange", this._onResize)
                    }
                }, {
                    key: "_removeListeners",
                    value: function() {
                        this._listeners = !1, this.elementEngagement && this.elementEngagement.off && "function" == typeof this.elementEngagement.off && this.elementEngagement.off("thresholdexit", this._onThresholdExit), window.removeEventListener("scroll", this._onScroll), window.removeEventListener("resize", this._onResize), window.removeEventListener("orientationchange", this._onResize)
                    }
                }, {
                    key: "_onThresholdExit",
                    value: function(e) {
                        if (e.engaged) {
                            var t = {
                                element: e
                            };
                            this.elementEngagement.stop(e), this.track(t)
                        }
                    }
                }, {
                    key: "_onScroll",
                    value: function() {
                        var e = this;
                        return debounce(function() {
                            e.refreshMetrics(), e._checkForPageEnd()
                        }, 300, debounceOptions)()
                    }
                }, {
                    key: "_onResize",
                    value: function() {
                        var e = this;
                        return debounce(function() {
                            e._checkForPageEnd()
                        }, 300, debounceOptions)()
                    }
                }, {
                    key: "_checkForPageEnd",
                    value: function() {
                        window.pageYOffset >= document.body.scrollHeight - window.innerHeight && this._pageEnd()
                    }
                }, {
                    key: "_pageEnd",
                    value: function() {
                        var e = [];
                        this.elementEngagement.elements.forEach(function(t) {
                            t.inView && t.inThreshold && t.tracking && t.isActive && e.push(t)
                        }), e.forEach(function(e) {
                            e.engaged ? this.endSectionEngagement(e) : !1 === e.has("engaged") && e.once("engaged", this.endSectionEngagement)
                        }, this)
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        this.tracker.track({
                            type: "section",
                            data: e,
                            options: this.options
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.elementEngagement && (this.clearSections(), this.elementEngagement.stop()), this._removeListeners(), this.options = null, this.elementEngagement = null, this.tracker = null, this.sections = null
                    }
                }, {
                    key: "_getTrackedElement",
                    value: function(e) {
                        return e instanceof Element && (e = this.elementEngagement.elements.filter(function(t) {
                            return t.element === e
                        })[0]), e instanceof EventEmitterMicro ? e : null
                    }
                }]), t
            }();
        module.exports = SectionAnalyticsObserver
    }, {
        "../error-handler/ErrorHandler": 76,
        "../metricsTracker": 79,
        "../translator/helpers/dataStringToObject": 124,
        "@marcom/ac-element-engagement": 39,
        "@marcom/ac-event-emitter-micro": 49,
        "@marcom/function-utils/debounce": 66
    }],
    86: [function(require, module, exports) {
        "use strict";

        function ownKeys(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), i.push.apply(i, s)
            }
            return i
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(i, !0).forEach(function(t) {
                    _defineProperty(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }

        function _defineProperty(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }

        function _createClass(e, t, i) {
            return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
        }
        var errorHandler = require("../error-handler/ErrorHandler"),
            metricsTracker = require("../metricsTracker"),
            isNode = require("@marcom/ac-dom-nodes/isNode"),
            debounce = require("@marcom/function-utils/debounce"),
            isHandheld = require("@marcom/feature-detect/isHandheld")(),
            acUserAgent = require("@marcom/useragent-detect"),
            dataAttributeAnalyticsId = "analytics-id",
            moduleName = "VideoAnalyticsObserver",
            videoSegmentBoundries = [0, .1, .25, .5, .75, .9, 1],
            defaultOptions = {
                mediaEvents: [],
                mediaEventCallbacks: {},
                dataAttribute: dataAttributeAnalyticsId,
                trackCaptions: !0,
                trackMilestones: !0,
                trackSeeking: !0,
                trackDuration: !0,
                trackCurrentTime: !0,
                streamingVideo: !1
            },
            AC_VIDEO_SUPPORTS_CUSTOM_PLAY_VERSION = "3.6.1",
            IS_IE = acUserAgent.browser.ie,
            IS_MOBILE = acUserAgent.os.ios || acUserAgent.os.android,
            VideoAnalyticsObserver = function() {
                function e(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, e), t && "object" === _typeof(t) || errorHandler.log(moduleName, null, t + " is not an object"), this.options = _objectSpread({}, defaultOptions, {}, i), !0 === this.options.streamingVideo && (this.options.trackMilestones = !1, this.options.trackSeeking = !1, this.options.trackDuration = !1, this.options.trackCurrentTime = !1), Array.isArray(this.options.mediaEvents) || errorHandler.log(moduleName, null, this.options.mediaEvents + " is not a valid media events array"), this.tracker = metricsTracker, this.video = t, this.playCount = 0, this.ttShowCount = 0, this._callbacks = {}, this._events = {
                        play: "play",
                        playing: "playing",
                        pause: "pause",
                        timeupdate: "timeupdate",
                        seeking: "seeking",
                        seeked: "seeked",
                        ended: "ended",
                        texttrackshow: "texttrackshow",
                        PlayPromiseResolved: "PlayPromiseResolved"
                    }, this._onWebkitEndFullscreen = this._onWebkitEndFullscreen.bind(this), this._onPlayingFromStart = this._onPlayFromStart.bind(this), this._getPlayEventName = this._getPlayEventName.bind(this), this._initializeInDOM()
                }
                return _createClass(e, [{
                    key: "_initializeInDOM",
                    value: function() {
                        errorHandler.exception || (this.options.videoElement ? this.videoElement = this.options.videoElement : this._isAcVideo() && this._setVideoElement(), (this.options.trackMilestones || this.options.trackSeeking) && this._setupMilestoneTracking(), this.attachEvents())
                    }
                }, {
                    key: "_setupMilestoneTracking",
                    value: function() {
                        var e = this;
                        this._milestoneTrackingTimeout = null, this._hadSeeked = !1, this._hadJustEnded = !1, this._milestoneTimeoutDuration = 1e3, this._allVideoMilestone = this._createVideoMilestones(), this._activeVideoMilestones = [], this._milestonesSeeked = debounce(function() {
                            e._hadSeeked || (e._hadJustEnded && e._isAcVideo() ? e._hadJustEnded = !1 : (e._hadSeeked = !0, e._refreshMilestones(), e.videoElement && !e.videoElement.paused && (e._milestoneTimeoutDuration = 2500, e._checkForMilestone())))
                        }, 100), this._milestonesSeekedCancel = this._milestonesSeeked.cancel, this._bindMilestoneHandlers()
                    }
                }, {
                    key: "_createVideoMilestones",
                    value: function() {
                        var e = [];
                        return videoSegmentBoundries.forEach(function(t, i) {
                            i !== videoSegmentBoundries.length - 1 && e.push([t, videoSegmentBoundries[i + 1]])
                        }), e
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        var e, t = this.options;
                        t.mediaEvents.forEach(function(i) {
                            e = "function" == typeof(e = t.mediaEventCallbacks[i]) ? e : this._defaultTracking.bind(this, i), this._callbacks[i] = e, this.addListener(i, this._callbacks[i])
                        }.bind(this)), this._attachDefaultEvents()
                    }
                }, {
                    key: "_attachDefaultEvents",
                    value: function() {
                        this._prepareForPlayFromStart(), this.video.on(this._events.ended, this._onEnded, this), this.video.on(this._events.timeupdate, this._onTimeupdate, this), !0 === this.options.trackCaptions && this.video.on(this._events.texttrackshow, this._onTextTrackShow, this)
                    }
                }, {
                    key: "detachEvents",
                    value: function() {
                        this.options.mediaEvents.forEach(function(e) {
                            this.removeListener(e, this._callbacks[e])
                        }.bind(this)), this._detachPrivateEvents()
                    }
                }, {
                    key: "_detachPrivateEvents",
                    value: function() {
                        this.video.off(this._events.play, this._onPlayFromStart, this), this.video.off(this._events.PlayPromiseResolved, this._onPlayingFromStart, this), this.video.off(this._events.ended, this._onEnded, this), this.video.off(this._events.timeupdate, this._onTimeupdate, this), this.video.off(this._events.texttrackshow, this._onTextTrackShow, this)
                    }
                }, {
                    key: "_prepareForPlayFromStart",
                    value: function() {
                        this._playBound || ((this.options.trackMilestones || this.options.trackSeeking) && this._cleanUpMilestoneTracking(), IS_IE && this._isAcVideo() && this.ended ? this.videoElement.addEventListener(this._events.playing, this._onPlayingFromStart) : IS_IE ? this.video.once(this._events.play, this._onPlayFromStart, this) : this.video.once(this._getPlayEventName(), this._onPlayingFromStart, this), this._playBound = !0)
                    }
                }, {
                    key: "_onPlayFromStart",
                    value: function(e) {
                        if (!this.started) {
                            (this.options.trackMilestones || this.options.trackSeeking) && (this._setVideoElement(), this.videoElement && (IS_IE && this._isAcVideo() && this.ended && this.videoElement.removeEventListener(this._events.playing, this._onPlayingFromStart), isHandheld && !this._isAcVideo() && this.videoElement.addEventListener("webkitendfullscreen", this._onWebkitEndFullscreen)), this._hadSeeked = !1, this._refreshMilestones(), this._startTrackingMilestones()), this._started = !0;
                            var t = this._bundleTrackingData(this._events.play, e);
                            t.playCount = this.playCount, this.track(t), this.playCount += 1, this._playBound = !1
                        }
                    }
                }, {
                    key: "_onWebkitEndFullscreen",
                    value: function() {
                        this._started = !1, this.videoElement && this.videoElement.removeEventListener("webkitendfullscreen", this._prepareForPlayFromStart), this._prepareForPlayFromStart()
                    }
                }, {
                    key: "_onTimeupdate",
                    value: function(e) {
                        if (e.currentTime < .1) {
                            var t = !0;
                            this.videoElement && void 0 !== _typeof(this.videoElement.paused) && (t = this.videoElement.paused), this.playCount > 0 && this._started && t && (this._started = !1, this._prepareForPlayFromStart())
                        }
                    }
                }, {
                    key: "_onEnded",
                    value: function(e) {
                        (this.options.trackMilestones || this.options.trackSeeking) && (this._milestonesSeekedCancel(), this._hadJustEnded = !0), this._started = !1;
                        var t = this._bundleTrackingData("ended", e);
                        this.ended = !0, this.track(t), this._prepareForPlayFromStart()
                    }
                }, {
                    key: "_onTextTrackShow",
                    value: function(e) {
                        var t = this._bundleTrackingData(this._events.texttrackshow, e);
                        t.ttShowCount = this.ttShowCount, this.track(t), this.ttShowCount += 1
                    }
                }, {
                    key: "_setVideoElement",
                    value: function() {
                        this.video && (void 0 !== this.video.getMediaElement && this.video.getMediaElement() ? this.videoElement = this.video.getMediaElement() : this.video.videoId && (this.videoElement = document.querySelector('[data-analytics-video-id="' + this.video.videoId + '"] video')))
                    }
                }, {
                    key: "_startTrackingMilestones",
                    value: function() {
                        this.videoElement && (this._setMilestoneEventListeners(), this._checkForMilestone())
                    }
                }, {
                    key: "_bindMilestoneHandlers",
                    value: function() {
                        this._milestonesSeeking = this._milestonesSeeking.bind(this), this._milestonesSeeked = this._milestonesSeeked.bind(this), this._milestonesPlay = this._milestonesPlay.bind(this), this._milestonesPause = this._milestonesPause.bind(this)
                    }
                }, {
                    key: "_setMilestoneEventListeners",
                    value: function() {
                        this.videoElement.addEventListener(this._events.seeking, this._milestonesSeeking), this.videoElement.addEventListener(this._events.seeked, this._milestonesSeeked), IS_IE || IS_MOBILE ? this.videoElement.addEventListener(this._events.play, this._milestonesPlay) : this.videoElement.addEventListener(this._getPlayEventName(), this._milestonesPlay), this.videoElement.addEventListener(this._events.pause, this._milestonesPause)
                    }
                }, {
                    key: "_milestonesSeeking",
                    value: function() {
                        if (this._hadSeeked && (this._hadSeeked = !1), this._milestoneTrackingTimeout) {
                            if (this._hadJustEnded && this._isAcVideo()) return;
                            clearTimeout(this._milestoneTrackingTimeout), this._milestoneTrackingTimeout = null
                        }
                    }
                }, {
                    key: "_milestonesPlay",
                    value: function() {
                        this._checkForMilestone()
                    }
                }, {
                    key: "_milestonesPause",
                    value: function() {
                        clearTimeout(this._milestoneTrackingTimeout), this._milestoneTrackingTimeout = null
                    }
                }, {
                    key: "_checkForMilestone",
                    value: function() {
                        this._milestoneTrackingTimeout && clearTimeout(this._milestoneTrackingTimeout), this._milestoneTrackingTimeout = setTimeout(function() {
                            var e = this._getElligibleMilestone();
                            e && this._trackMilestone(e), this._milestoneTimeoutDuration = 1e3, this._checkForMilestone()
                        }.bind(this), this._milestoneTimeoutDuration)
                    }
                }, {
                    key: "_getElligibleMilestone",
                    value: function() {
                        var e;
                        if (!(!this.videoElement || this.videoElement.paused || 0 === this.videoElement.currentTime || this.videoElement.readyState < 3 || 0 === this.videoElement.duration || this.videoElement.duration === 1 / 0 || isNaN(this.videoElement.duration)) && (this._activeVideoMilestones[0] && !(e = this.videoElement.currentTime / this.videoElement.duration, isNaN(e) || this._activeVideoMilestones[0][0] > e))) {
                            var t, i = this._activeVideoMilestones.filter(function(i, s) {
                                if (e >= i[0] && e < i[1]) return t = s, !0
                            });
                            return i && i[0] ? {
                                name: i[0][0],
                                index: t
                            } : void 0
                        }
                    }
                }, {
                    key: "_trackMilestone",
                    value: function(e) {
                        var t;
                        this._activeVideoMilestones.splice(e.index, 1), (t = this._bundleTrackingData("milestone")).milestone = e.name, this._hadSeeked && (t.seeked = !0, this._hadSeeked = !1), this.track(t)
                    }
                }, {
                    key: "_cleanUpMilestoneTracking",
                    value: function() {
                        this._hadSeeked = !1, this._refreshMilestones(), clearTimeout(this._milestoneTrackingTimeout), this._milestoneTrackingTimeout = null, this.videoElement && (this.videoElement.removeEventListener(this._events.seeking, this._milestonesSeeking), this.videoElement.removeEventListener(this._events.seeked, this._milestonesSeeked), IS_IE || IS_MOBILE ? this.videoElement.removeEventListener(this._events.play, this._milestonesPlay) : this.videoElement.removeEventListener(this._getPlayEventName(), this._milestonesPlay), this.videoElement.removeEventListener(this._events.pause, this._milestonesPause))
                    }
                }, {
                    key: "_refreshMilestones",
                    value: function() {
                        this._hadSeeked ? this._activeVideoMilestones = this._allVideoMilestone.slice(0) : this._activeVideoMilestones = this._allVideoMilestone.slice(1)
                    }
                }, {
                    key: "addListener",
                    value: function(e, t) {
                        this.video.on(e, t)
                    }
                }, {
                    key: "removeListener",
                    value: function(e, t) {
                        this.video.off(e, t)
                    }
                }, {
                    key: "_getCommonVideoData",
                    value: function(e) {
                        var t, i = {};
                        return i.targetEl = this.video.el || null, t = i.targetEl && isNode(i.targetEl) ? i.targetEl.getAttribute("data-" + dataAttributeAnalyticsId) : "", i.videoId = t || this.video.targetId, i.ended = this.ended, i.eventType = e, "playing" === i.eventType && (i.eventType = "play"), this.videoElement && (i.duration = NaN, i.currentTime = NaN, i.src = null, isNaN(this.videoElement.duration) || (i.duration = this.videoElement.duration), isNaN(this.videoElement.currentTime) || (i.currentTime = this.videoElement.currentTime), void 0 !== this.videoElement.src && (i.src = this._getUniqueVideoId(this.videoElement.src))), this._hadSeeked && i.currentTime && (i.currentTime = i.currentTime - this._milestoneTimeoutDuration / (this._milestoneTimeoutDuration / 2)), i
                    }
                }, {
                    key: "_getUniqueVideoId",
                    value: function(e) {
                        var t;
                        return (t = e.match(/[\w\d]{8}[\w\d-]+[\w\d\/]+\//g)) && t.length ? t[0] : e
                    }
                }, {
                    key: "_bundleTrackingData",
                    value: function(e, t) {
                        var i = this._getCommonVideoData(e);
                        return Object.assign({}, t, i)
                    }
                }, {
                    key: "_defaultTracking",
                    value: function(e) {
                        var t = this._bundleTrackingData(e);
                        this.track(t)
                    }
                }, {
                    key: "_isAcVideo",
                    value: function() {
                        return "function" == typeof this.video.play
                    }
                }, {
                    key: "_getPlayEventName",
                    value: function() {
                        return this.video.VERSION && this._isVersionGreaterOrEqual(this.video.VERSION.toArray(), AC_VIDEO_SUPPORTS_CUSTOM_PLAY_VERSION.split(".")) ? this._events.PlayPromiseResolved : this._events.play
                    }
                }, {
                    key: "_isVersionGreaterOrEqual",
                    value: function(e, t) {
                        return !e.length && !t.length || (e[0] > t[0] || (parseInt(e[0]) === parseInt(t[0]) ? this._isVersionGreaterOrEqual(e.slice(1), t.slice(1)) : !(e[0] < t[0]) && void 0))
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        if ("milestone" === e.eventType) {
                            if (!this.options.trackMilestones && void 0 === e.seeked) return;
                            if (!this.options.trackSeeking && void 0 !== e.seeked) return
                        }
                        this.tracker.track({
                            type: "video",
                            data: e,
                            options: this.options
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.detachEvents(), this.options = null, this.tracker = null, this.video = null, this.playCount = null, this.ttShowCount = null, this._events = null, this._callbacks = null
                    }
                }]), e
            }();
        module.exports = VideoAnalyticsObserver
    }, {
        "../error-handler/ErrorHandler": 76,
        "../metricsTracker": 79,
        "@marcom/ac-dom-nodes/isNode": 17,
        "@marcom/feature-detect/isHandheld": 62,
        "@marcom/function-utils/debounce": 66,
        "@marcom/useragent-detect": 71
    }],
    87: [function(require, module, exports) {
        "use strict";

        function onDocumentReady(e) {
            "complete" === document.readyState ? e() : document.addEventListener("readystatechange", function t() {
                "complete" === document.readyState && (e(), document.removeEventListener("readystatechange", t))
            })
        }
        module.exports = onDocumentReady
    }, {}],
    88: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ownKeys(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), a.push.apply(a, r)
            }
            return a
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(a, !0).forEach(function(t) {
                    _defineProperty(e, t, a[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ownKeys(a).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                })
            }
            return e
        }

        function _defineProperty(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
                var r = t[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _createClass(e, t, a) {
            return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e
        }
        var errorHandler = require("../../error-handler/ErrorHandler"),
            appMeasurementSetup = require("@marcom/appmeasurement-setup"),
            topLevelMetadata = require("../../metadata"),
            formatter = require("./helpers/formatter"),
            metadataHelper = require("./helpers/metadata"),
            translator = require("./translator/translator"),
            submitMethods = require("./submit-methods/submitMethods"),
            templateVarHelper = require("./helpers/templateVar"),
            constants = require("../../constants"),
            countryBucket = ["us", "au|ca|cn|de|es|fr|it|jp|uk", "ap|at|bf|bl|br|ce|cr|dk|fi|hk|ie|in|kr|la|mx|nl|no|nz|pl|pt|ru|se|sg|th|tw|za"],
            moduleName = "AppMeasurementPlugin",
            AppMeasurementPlugin = function() {
                function e() {
                    _classCallCheck(this, e), errorHandler.exception || (this._replaceTemplateVars = this._replaceTemplateVars.bind(this), this._initializePlugin(topLevelMetadata.getMetadata()))
                }
                return _createClass(e, [{
                    key: "reset",
                    value: function() {
                        this.destroyAppMeasurement(), this._initializePlugin(topLevelMetadata.refreshMetadata(), {
                            force: !0
                        })
                    }
                }, {
                    key: "_initializePlugin",
                    value: function(e, t) {
                        this.setPageMetadata(e), this.setFormattedValues(), this.setTemplateVars(), this.formattedValues.channel = this._replaceTemplateVars(this.formattedValues.channel), this.initializeAppMeasurement(e, t)
                    }
                }, {
                    key: "initializeAppMeasurement",
                    value: function(e, t) {
                        (t = t || {}).bucket = this.getBucket(e), t.channel = this.formattedValues.channel, t.pageName = this.formattedValues.pageName, t.linkInternalFilters = this.getLinkInternalFilters(), t.acAnalyticsVersion = constants.acAnalyticsVersion, appMeasurementSetup.init(t)
                    }
                }, {
                    key: "setPageMetadata",
                    value: function(e) {
                        this.pageMetadata = _objectSpread({}, e), this.pageMetadata.platform = metadataHelper.platform(), this.pageMetadata.campaign = metadataHelper.campaign(e), this.pageMetadata.channel = metadataHelper.channel(e), this.pageMetadata.pageName = formatter.lowerCaseString(this.pageMetadata.pageName), this.pageMetadata.locale = formatter.lowerCaseString(this.pageMetadata.locale)
                    }
                }, {
                    key: "setFormattedValues",
                    value: function() {
                        this.formattedValues = {
                            pageName: formatter.pageName(this.pageMetadata.pageName, this.pageMetadata.locale),
                            channel: formatter.channel(this.pageMetadata.channel, this.pageMetadata.locale),
                            productName: formatter.productName(this.pageMetadata.productName),
                            countryCodeFilter: formatter.countryCodeFilter(this.pageMetadata.locale),
                            legacyCountryCode: formatter.legacyCountryCode(this.pageMetadata.locale),
                            campaign: this.pageMetadata.campaign,
                            platform: this.pageMetadata.platform
                        }
                    }
                }, {
                    key: "setTemplateVars",
                    value: function() {
                        this.templateVarArr = templateVarHelper.set(this.formattedValues, this.pageMetadata)
                    }
                }, {
                    key: "destroyAppMeasurement",
                    value: function() {
                        var e = appMeasurementSetup.getInstance();
                        "object" === _typeof(e) && (e.ac_amt.destroy(), e.manageVars("clearVars"), e.tcall = void 0, e.pageURL = e.g_prop6 = e.g_pageURL = e.g_channel = "")
                    }
                }, {
                    key: "translate",
                    value: function(e) {
                        if (e && "object" === _typeof(e) || errorHandler.log(moduleName, "translate", "Request param (".concat(e, ") is not an object")), !errorHandler.exception) return e = translator.translate(e, this.formattedValues, this.pageMetadata)
                    }
                }, {
                    key: "submit",
                    value: function(e) {
                        var t, a = appMeasurementSetup.getInstance();
                        e && "object" === _typeof(e) || errorHandler.log(moduleName, "submit", "Request param (".concat(e, ") is not an object")), errorHandler.exception || (e.type && "string" == typeof e.type || errorHandler.log(moduleName, "submit", 'property "type" ('.concat(e.type, '") must be a string')), window.s && "object" === _typeof(window.s) || errorHandler.log(moduleName, "submit", "appMeasurement (".concat(window.s, ") is not an object")), errorHandler.exception || (t = e.options || {}, this._setAppMeasurementProps(e), !0 !== t.silent && e.submitMethod && submitMethods[e.submitMethod] && submitMethods[e.submitMethod](e, this.formattedValues, a)))
                    }
                }, {
                    key: "getLinkInternalFilters",
                    value: function() {
                        var e;
                        return "us" !== this.formattedValues.countryCodeFilter && (e = this.formattedValues.countryCodeFilter), e
                    }
                }, {
                    key: "_setAppMeasurementProps",
                    value: function(e) {
                        var t = e.properties || {},
                            a = appMeasurementSetup.getInstance();
                        for (var r in a.linkTrackEvents = "", e.data.linkTrackVars = e.data.linkTrackVars || [], t) "events" === r && (a.linkTrackEvents = t[r].replace(/=([^,]+)/g, "")), "title" !== r && (e.data.linkTrackVars.push(r), a[r] = t[r])
                    }
                }, {
                    key: "getBucket",
                    value: function(e) {
                        for (var t = countryBucket.length, a = 2, r = 0; r < t; r++)
                            if (-1 !== countryBucket[r].indexOf(this.formattedValues.legacyCountryCode)) {
                                a = r;
                                break
                            }
                        var n = metadataHelper.bucket(a, e),
                            o = this._replaceTemplateVars(n),
                            s = this._replaceTemplateVars(metadataHelper.bucketProduct(a, e)),
                            i = this._replaceTemplateVars(metadataHelper.bucketStore(e));
                        return o + (s ? "," + s : "") + (i ? "," + i : "")
                    }
                }, {
                    key: "_replaceTemplateVars",
                    value: function(e) {
                        return templateVarHelper.translate(e, this.templateVarArr)
                    }
                }]), e
            }();
        module.exports = AppMeasurementPlugin
    }, {
        "../../constants": 74,
        "../../error-handler/ErrorHandler": 76,
        "../../metadata": 78,
        "./helpers/formatter": 90,
        "./helpers/metadata": 91,
        "./helpers/templateVar": 95,
        "./submit-methods/submitMethods": 97,
        "./translator/translator": 107,
        "@marcom/appmeasurement-setup": 129
    }],
    89: [function(require, module, exports) {
        "use strict";
        var domNodes = require("@marcom/ac-dom-nodes"),
            errorHandler = require("../../../error-handler/ErrorHandler"),
            storeUrlPattern = require("../../../regexp/storeUrlPattern"),
            moduleName = "appMeasurementPluginHelper-DOM";

        function isIntraPageLink(e) {
            var r;
            return !domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT) || (!e.href || ("#" === (r = e.getAttribute("href")).charAt(0) || 0 === r.indexOf("javascript:") || 0 === r.indexOf("mailto:") || 0 === r.indexOf("tel:") || (!(!e.classList.contains("ac-gn-link-search") && !e.classList.contains("ac-gn-link-bag")) || !!(e.hasAttribute("data-analytics-intrapage-link") || e.hasAttribute("data-analytics-id") || e.hasAttribute("data-analytics-video-id")))))
        }

        function isStoreLink(e) {
            if ("string" != typeof e && errorHandler.log(moduleName, "isStoreLink", e + " is not a valid string"), !errorHandler.exception) return storeUrlPattern.test(e)
        }

        function getLinkHref(e) {
            return e.getAttribute("href") || ""
        }
        module.exports = {
            isIntraPageLink: isIntraPageLink,
            isStoreLink: isStoreLink,
            getLinkHref: getLinkHref
        }
    }, {
        "../../../error-handler/ErrorHandler": 76,
        "../../../regexp/storeUrlPattern": 110,
        "@marcom/ac-dom-nodes": 10
    }],
    90: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var errorHandler = require("../../../error-handler/ErrorHandler"),
            moduleName = "appMeasurementPluginFormatter",
            separator = require("./separator");

        function productName(e) {
            return lowerCaseString(e)
        }

        function channel(e, r) {
            var n = "www.",
                o = {
                    "fr-ca": "ca.fr"
                };
            return (n += o[r] ? o[r] : legacyCountryCode(r)) + "." + e
        }

        function pageName(e, r) {
            var n = "",
                o = {
                    "fr-ca": "ca-fr"
                }[r];
            return e = e || "", "string" == typeof r && (r = r.toLowerCase(), n = _decorateCountryCode(n = o || legacyCountryCode(r))), lowerCaseString(e) + n
        }

        function eventString(e, r) {
            return r = r || "", (e = e || "") ? e + "@" + r : r
        }

        function countryCodeFilter(e) {
            var r, n = {
                "fr-ca": "ca/fr",
                "en-419": "lae",
                "es-419": "la",
                "en-ap": "asia",
                "en-gb": "uk"
            };
            if (n[e]) r = n[e];
            else if (["fr-be", "nl-be", "fr-ch", "de-ch"].indexOf(e) >= 0) {
                r = _transformLocale(e).reverse().join("-")
            } else r = _getCountryCodeFromLocale(e);
            return r
        }

        function legacyCountryCode(e) {
            var r = {
                "fr-be": "bf",
                "nl-be": "bl",
                "fr-ch": "cr",
                "de-ch": "ce",
                "en-419": "la",
                "es-419": "la",
                "en-gb": "uk"
            };
            return r[e] ? r[e] : _getCountryCodeFromLocale(e)
        }

        function cleanProps(e) {
            var r = {};
            if ("object" === _typeof(e))
                for (var n in e) r[n] = _sanitize(e[n]);
            return r
        }

        function stringReplacer(e, r, n) {
            var o = e;
            return r = "string" == typeof r ? r : "", n = "string" == typeof n ? n : "", "string" == typeof o && (o = o.replace(new RegExp(r, "gi"), n)), o
        }

        function getRegionAncestry(e) {
            var r = "";
            return Array.isArray(e.regionAncestry) && e.regionAncestry.forEach(function(e) {
                r += e.name + separator.pipe
            }), r
        }

        function lowerCaseString(e) {
            return "string" == typeof e && (e = e.toLowerCase()), e
        }

        function _getCountryCodeFromLocale(e) {
            if (e || errorHandler.log(moduleName, "_getCountryCodeFromLocale", "locale should be a valid string"), !errorHandler.exception) {
                var r, n = _transformLocale(e);
                return n.length > 1 && (r = lowerCaseString(n[1])), r
            }
        }

        function _decorateCountryCode(e) {
            if (e || errorHandler.log(moduleName, "_decorateCountryCode", "countryCode should be a valid string"), !errorHandler.exception) return " (" + lowerCaseString(e) + ")"
        }
        var whitelist = /[ìîëí]/g;

        function _sanitize(e) {
            return "string" == typeof e && (e = e.replace(whitelist, "")), e
        }

        function _transformLocale(e) {
            return e.split(/[-_]/)
        }
        module.exports = {
            productName: productName,
            channel: channel,
            pageName: pageName,
            eventString: eventString,
            countryCodeFilter: countryCodeFilter,
            legacyCountryCode: legacyCountryCode,
            cleanProps: cleanProps,
            stringReplacer: stringReplacer,
            lowerCaseString: lowerCaseString,
            getRegionAncestry: getRegionAncestry
        }
    }, {
        "../../../error-handler/ErrorHandler": 76,
        "./separator": 92
    }],
    91: [function(require, module, exports) {
        "use strict";
        var errorHandler = require("../../../error-handler/ErrorHandler"),
            sProps = {
                channel: "sChannel",
                campaign: "sCampaign",
                bucket: "sBucket",
                bucketProduct: "sBucketProduct",
                bucketStore: "sBucketStore"
            },
            moduleName = "AppMeasurementPluginMetadataHelper";

        function channel(e) {
            var r = e[sProps.channel];
            if (r || errorHandler.log(moduleName, "channel", "analytics-s-channel metadata tag must exist"), !errorHandler.exception) return r = r.toLowerCase().split(" ").join(".")
        }

        function bucket(e, r) {
            var t = sProps.bucket + e;
            if (r[t] || errorHandler.log(moduleName, "bucket", "analytics-s-bucket-" + e + " metadata tag must exist"), !errorHandler.exception) return r[t]
        }

        function bucketProduct(e, r) {
            return r[sProps.bucketProduct + e]
        }

        function bucketStore(e) {
            return e[sProps.bucketStore] || ""
        }

        function campaign(e) {
            return e[sProps.campaign] || ""
        }

        function platform() {
            var e = "other",
                r = navigator.userAgent,
                t = {
                    "mobile other": "/(kindle|silk-accelerated|android|webos|rim tablet os|windows phone)/i",
                    windows: /windows/i,
                    "iphone/ipod touch": /(iphone|ipod)/i,
                    ipad: /(ipad)/i,
                    Mac: /Mac OS X/i
                };
            for (var a in t)
                if (r.match(t[a])) {
                    e = a;
                    break
                }
            return e
        }
        module.exports = {
            channel: channel,
            bucket: bucket,
            bucketProduct: bucketProduct,
            bucketStore: bucketStore,
            platform: platform,
            campaign: campaign
        }
    }, {
        "../../../error-handler/ErrorHandler": 76
    }],
    92: [function(require, module, exports) {
        "use strict";
        module.exports = {
            pipe: " | ",
            hyphen: " - ",
            colon: ": ",
            dot: ".",
            space: " "
        }
    }, {}],
    93: [function(require, module, exports) {
        "use strict";
        var setSharedCookie = require("../../../cookie").setSharedCookie,
            STORAGE_KEY = require("../../../constants").appleMetricsStorageKey,
            localStorage = require("@apple/analytics-utils").localStorage,
            formatter = require("./formatter"),
            separator = require("./separator");

        function setNavigationSrc(e, r) {
            var a, t = {},
                o = {},
                i = formatter.getRegionAncestry(e),
                n = e.targetEl.getAttribute("data-label") || "";
            e.region && (t.prop25 = o.region = e.region), o.pageName = r.pageName || "", o.linkText = e.linkText || "", t.eVar1 = o.pageName + separator.pipe + i + o.linkText, t.prop57 = r.channel || "", "search" === e.region && (o.prop7 = "www" + separator.colon + n, o.eVar2 = n, o.events = "event8"), a = JSON.stringify(o), setSharedCookie(t), localStorage.set(STORAGE_KEY, a)
        }
        module.exports = setNavigationSrc
    }, {
        "../../../constants": 74,
        "../../../cookie": 75,
        "./formatter": 90,
        "./separator": 92,
        "@apple/analytics-utils": 1
    }],
    94: [function(require, module, exports) {
        "use strict";
        var DOMHelper = require("./DOM");

        function async (e) {
            var r = !0;
            return DOMHelper.isIntraPageLink(e.targetEl) || (r = !1), r
        }
        module.exports = {
            async: async
        }
    }, {
        "./DOM": 89
    }],
    95: [function(require, module, exports) {
        "use strict";
        var formatter = require("./formatter");

        function set(e, a) {
            return [{
                name: "{PAGE_NAME}",
                value: e.pageName
            }, {
                name: "{PAGE_NAME_NO_LOCALE}",
                value: a.pageName
            }, {
                name: "{CHANNEL}",
                value: e.channel
            }, {
                name: "{CAMPAIGN}",
                value: e.campaign
            }, {
                name: "{COUNTRY_CODE}",
                value: e.legacyCountryCode
            }, {
                name: "{COUNTRY_CODE_FILTER}",
                value: e.countryCodeFilter
            }, {
                name: "{PRODUCT_NAME}",
                value: e.productName
            }, {
                name: "{PLATFORM}",
                value: e.platform
            }]
        }

        function translate(e, a) {
            return "string" == typeof e && a.forEach(function(a) {
                a.name && "string" == typeof a.name && e.toLowerCase().indexOf(a.name.toLowerCase()) > -1 && (e = formatter.stringReplacer(e, a.name, a.value))
            }), e
        }
        module.exports = {
            set: set,
            translate: translate
        }
    }, {
        "./formatter": 90
    }],
    96: [function(require, module, exports) {
        "use strict";

        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                r && (a = a.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })), t.push.apply(t, a)
            }
            return t
        }

        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(t, !0).forEach(function(r) {
                    _defineProperty(e, r, t[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })
            }
            return e
        }

        function _defineProperty(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var errorHandler = require("../../error-handler/ErrorHandler"),
            moduleName = "PassiveTracker",
            constants = require("../../constants"),
            replaceTemplateVars = require("../../metricsTracker").plugin._replaceTemplateVars,
            sessionStorageAvailable = require("@marcom/feature-detect/sessionStorageAvailable"),
            SESSION_STORAGE = constants.sessionStorage,
            STORAGE_ITEM_KEY = constants.passiveTrackerStorageKey;

        function track(e, r) {
            if (r = r || {}, sessionStorageAvailable())
                if (e && "object" === _typeof(e) && !Array.isArray(e)) {
                    r.overwriteStorageItem = !0 === r.overwriteStorageItem, r.overwriteStorageItemValues = !0 === r.overwriteStorageItemValues, r.overwriteAppMeasurementValues = !0 === r.overwriteAppMeasurementValues, r.overwriteAppMeasurementEvents = !1 !== r.overwriteAppMeasurementEvents, e.options = {}, r.overwriteAppMeasurementValues && (e.options.overwriteAppMeasurementValues = !0), !1 === r.overwriteAppMeasurementEvents && (e.options.overwriteAppMeasurementEvents = !1);
                    var t = JSON.stringify(e);
                    t ? (t = replaceTemplateVars(t), storeTrackingData(STORAGE_ITEM_KEY, t, e, r)) : errorHandler.warn(moduleName, "track", "data was invalid because it could not be stringified")
                } else errorHandler.warn(moduleName, "track", "data must be a valid object");
            else errorHandler.warn(moduleName, "track", "sessionStorage is not available")
        }

        function storeTrackingData(e, r, t, a) {
            var n = getExistingData(e, a);
            if (n) {
                var o = createMergedData(t, n, a);
                o = JSON.stringify(o), (o = replaceTemplateVars(o)) && storeData(o)
            } else storeData(r)
        }

        function getExistingData(e, r) {
            if (r.overwriteStorageItem) return null;
            var t = window[SESSION_STORAGE].getItem(e);
            if (!t) return null;
            try {
                t = JSON.parse(t)
            } catch (e) {
                t = ""
            }
            return t && "object" === _typeof(t) ? t : null
        }

        function createMergedData(e, r, t) {
            var a;
            return (a = t.overwriteStorageItemValues ? mergeData(r, e) : mergeData(e, r)).events = createMergedEventsData(e.events, r.events, t), a
        }

        function createMergedEventsData(e, r, t) {
            var a;
            e = generateEventsDataObj(e);
            var n = generateEventsDataObj(r);
            return n && e && (a = t.overwriteStorageItemValues ? mergeData(n, e) : mergeData(e, n)), generateEventsDataStr(a)
        }

        function generateEventsDataObj(e) {
            if (e && "string" == typeof e) {
                var r = e.split(","),
                    t = {};
                return r.forEach(function(e) {
                    var a = e.split("="),
                        n = r[0],
                        o = !0;
                    2 === a.length && (o = a[1]), t[n] = o
                }), t
            }
        }

        function generateEventsDataStr(e) {
            var r = "",
                t = [];
            if (e && "object" === _typeof(e)) {
                for (var a in e) {
                    var n = void 0;
                    e.hasOwnProperty(a) && (n = parseFloat(e[a]), isNaN(n) ? t.push(a) : t.push(a + "=" + n))
                }
                return t.length && (r = t.join(",")), r
            }
        }

        function mergeData(e, r) {
            return _objectSpread({}, e, {}, r)
        }

        function storeData(e) {
            window[SESSION_STORAGE].setItem(STORAGE_ITEM_KEY, e)
        }
        module.exports = track
    }, {
        "../../constants": 74,
        "../../error-handler/ErrorHandler": 76,
        "../../metricsTracker": 79,
        "@marcom/feature-detect/sessionStorageAvailable": 64
    }],
    97: [function(require, module, exports) {
        "use strict";
        var t = require("./t"),
            tl = require("./tl");
        module.exports = {
            t: t,
            tl: tl
        }
    }, {
        "./t": 98,
        "./tl": 99
    }],
    98: [function(require, module, exports) {
        "use strict";

        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function submit(t, o, e) {
            "object" === _typeof(e) && "function" == typeof e.t && (e.tcall = !0, e.t())
        }
        module.exports = submit
    }, {}],
    99: [function(require, module, exports) {
        "use strict";

        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var errorHandler = require("../../../error-handler/ErrorHandler"),
            moduleName = "appMeasurementPluginSubmitMethodtl",
            DOMHelper = require("../helpers/DOM");

        function submit(t, r, e) {
            var n, a;
            if ("object" === _typeof(e) && "function" == typeof e.tl) {
                if ("object" !== _typeof(t.data) && errorHandler.log(moduleName, "submit", "Request param data (".concat(t.data, ") is not an object")), "string" != typeof t.properties.title && errorHandler.log(moduleName, "submit", "Request param title (".concat(t.properties.title, ") is not a string")), errorHandler.exception) return;
                e.linkTrackVars = "eVar54,eVar49", t.data.linkTrackVars && t.data.linkTrackVars.length > 0 && (e.linkTrackVars += "," + t.data.linkTrackVars.join(",")), n = t.data.linkType || "o", a = _targetEl(t.data.targetEl), e.forcedLinkTrackingTimeout = _forcedLinkTrackingTimeout(t), e.tl(a, n, t.properties.title), _clearTrackingData(e)
            }
        }

        function _clearTrackingData(t) {
            t.linkTrackVars = "", t.linkTrackEvents = ""
        }

        function _forcedLinkTrackingTimeout(t) {
            var r = 0,
                e = t.data.targetEl;
            return (t.type && "link" === t.type || "click" === t.type) && !0 === _isOutgoingLink(e) && (r = 500), r
        }

        function _targetEl(t) {
            return !0 !== _isOutgoingLink(t) || t
        }

        function _isOutgoingLink(t) {
            return !!t && !0 !== DOMHelper.isIntraPageLink(t)
        }
        module.exports = submit
    }, {
        "../../../error-handler/ErrorHandler": 76,
        "../helpers/DOM": 89
    }],
    100: [function(require, module, exports) {
        "use strict";

        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var setOptions = require("../../helpers/setOptions"),
            separator = require("../../helpers/separator"),
            formatter = require("../../helpers/formatter");

        function translate(t, e, r) {
            var a = t;
            return a.properties = {}, _setDefaultTrackingProps(a, e, r), a.options.async = setOptions.async(a.data), a.submitMethod = "tl", a
        }

        function _setDefaultTrackingProps(t, e, r) {
            var a = t.data.linkText.toLowerCase(),
                o = r.pageName + separator.hyphen + (t.data.linkImg || a),
                p = formatter.getRegionAncestry(t.data);
            t.properties.title = o, t.properties.prop3 = o, t.properties.eVar1 = e.pageName + separator.pipe + p + a, _setCustomTrackingProps(t)
        }

        function _setCustomTrackingProps(t) {
            if (t.data.dataAnalyticsClick || "object" === _typeof(t.data.dataAnalyticsClick)) {
                for (var e in t.data.dataAnalyticsClick) t.properties[e] = t.data.dataAnalyticsClick[e];
                _formatDefaultProps(t)
            }
        }

        function _formatDefaultProps(t) {
            t.data.dataAnalyticsClick.prefix && t.properties.prop3 && formatter.eventString(t.data.dataAnalyticsClick.prefix, t.properties.prop3)
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../helpers/formatter": 90,
        "../../helpers/separator": 92,
        "../../helpers/setOptions": 94
    }],
    101: [function(require, module, exports) {
        "use strict";
        var templateVarHelper = require("../../helpers/templateVar");

        function translate(e, t, r) {
            var a = e,
                l = a.data,
                p = templateVarHelper.set(t, r),
                s = {};
            for (var n in l) s[n] = l[n], "string" == typeof s[n] && (s[n] = templateVarHelper.translate(s[n], p));
            return a.properties = s, a.submitMethod = "tl", a
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../helpers/templateVar": 95
    }],
    102: [function(require, module, exports) {
        "use strict";
        var formatter = require("../../helpers/formatter"),
            separator = require("../../helpers/separator");

        function translate(e, t, r) {
            var a, i, o, n = e,
                p = n.data,
                l = {
                    click: "ci",
                    keydown: "ki",
                    swipe: "si",
                    dotnav: "bi",
                    thumbnav: "ci",
                    tabnav: "ci",
                    paddlenav: "pi",
                    auto: "ai"
                },
                s = {};
            return _clearConditionalAppMeasurementCodeProps(s), l[p.incomingInteractionType] && (i = l[p.incomingInteractionType]), void 0 === i && (i = "ci"), l[p.outgoingInteractionType] && (a = l[p.outgoingInteractionType]), void 0 === a && (a = "ci"), o = r.pageName + separator.hyphen + e.options.galleryName + separator.hyphen, s.prop2 = formatter.eventString(a, "") + o + p.outgoing.id, s.prop3 = s.title = formatter.eventString(i, "") + o + p.incoming.id, !0 === p.galleryFirstTimeTrigger && (s.prop16 = "gallery interaction", s.eVar16 = (e.options.galleryName ? e.options.galleryName + " " : "") + "gallery interaction", s.events = "event1"), n.properties = s, n.submitMethod = "tl", n
        }

        function _clearConditionalAppMeasurementCodeProps(e) {
            e.prop16 = e.eVar16 = ""
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../helpers/formatter": 90,
        "../../helpers/separator": 92
    }],
    103: [function(require, module, exports) {
        "use strict";
        var setOptions = require("../../helpers/setOptions"),
            separator = require("../../helpers/separator"),
            formatter = require("../../helpers/formatter"),
            DOMHelper = require("../../helpers/DOM"),
            dataStringToObject = require("../../../../translator/helpers/dataStringToObject"),
            templateVarHelper = require("../../helpers/templateVar"),
            setNavigationSrc = require("../../helpers/setNavigationSrc");

        function translate(e, t, r) {
            var a = e,
                i = DOMHelper.getLinkHref(a.data.targetEl);
            return a.properties = {}, a.options.async = setOptions.async(a.data), _setDefaultTrackingProps(a, r, i), _setCustomProps(a, t, r), setNavigationSrc(a.data, t, i), a.submitMethod = "tl", a
        }

        function _setDefaultTrackingProps(e, t, r) {
            var a = "",
                i = _getDefaultLinkTitle(e.data, t);
            (r.indexOf("http://") > -1 || r.indexOf("https://") > -1) && (a = separator.hyphen + (r.split("/")[2].split(".")[0] + " link")), e.properties.title = i + a
        }

        function _setCustomProps(e, t, r) {
            var a, i = e.data.targetEl.getAttribute("data-" + e.options.dataAttribute),
                s = templateVarHelper.set(t, r);
            if (i)
                for (var p in a = dataStringToObject(i)) a.hasOwnProperty(p) && (e.properties[p] = a[p], "string" == typeof e.properties[p] && (e.properties[p] = templateVarHelper.translate(e.properties[p], s)))
        }

        function _getDefaultLinkTitle(e, t) {
            var r = t.pageName + separator.hyphen + e.linkText,
                a = e.linkImg || e.linkText || e.linkId || "";
            return e.region && (r = formatter.eventString(e.region.charAt(0), a)), r
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../../../translator/helpers/dataStringToObject": 124,
        "../../helpers/DOM": 89,
        "../../helpers/formatter": 90,
        "../../helpers/separator": 92,
        "../../helpers/setNavigationSrc": 93,
        "../../helpers/setOptions": 94,
        "../../helpers/templateVar": 95
    }],
    104: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var getSharedCookie = require("../../../../cookie").getSharedCookie,
            STORAGE_KEY = require("../../../../constants").appleMetricsStorageKey,
            separator = require("../../helpers/separator"),
            localStorage = require("@apple/analytics-utils").localStorage,
            templateVarHelper = require("../../helpers/templateVar"),
            errorHandler = require("../../../../error-handler/ErrorHandler"),
            moduleName = "AppMeasurementPageTranslator",
            PAGE_TRACKING_META_DATA = "sPageTrackingData";

        function translate(e, r, t) {
            var o = e,
                a = templateVarHelper.set(r, t);
            return o.properties = {}, _setDefaultProps(o), _replaceTemplateVars(o, r, t, a), _setPageRequestProps(o, r), _setNavSrcProps(o, r), _setCustomProps(o, t, a), o.submitMethod = "t", o
        }

        function _setDefaultProps(e) {
            e.data.prop20 = e.data.prop20 || "AOS" + separator.colon + "{COUNTRY_CODE}"
        }

        function _setPageRequestProps(e, r) {
            "object" !== _typeof(e.properties) && errorHandler.log(moduleName, "_setPageRequestProps", e.properties + " is not a valid properties object in the analytics request"), errorHandler.exception || (_setProperty(e.properties, "pageName", r.pageName), _setProperty(e.properties, "channel", r.channel), _setProperty(e.properties, "prop19", e.properties.prop20 + separator.colon + e.properties.pageName), _setProperty(e.properties, "eVar3", e.properties.prop20))
        }

        function _setNavSrcProps(e) {
            var r = _getNavPathInfo() || {};
            _setProperty(e.properties, "prop25", _getNavSource(r)), _setProperty(e.properties, "prop57", r.prop57), _setProperty(e.properties, "eVar1", r.eVar1), _setProperty(e.properties, "products", r.products), _setProperty(e.properties, "eVar2", r.eVar2), _setProperty(e.properties, "prop7", r.prop7), r.events && _setProperty(e.properties, "events", r.events)
        }

        function _setCustomProps(e, r, t) {
            if (PAGE_TRACKING_META_DATA in r) {
                var o;
                try {
                    o = JSON.parse(r[PAGE_TRACKING_META_DATA])
                } catch (e) {
                    errorHandler.warn(moduleName, "_setCustomProps", "JSON.parse had an error with the input of: \n\n" + r[PAGE_TRACKING_META_DATA] + "\n\nIs it in proper JSON format? \n\nOriginal error:\n" + e)
                }
                if (o && "object" === _typeof(o) && !Array.isArray(o))
                    for (var a in o) {
                        var p = void 0;
                        o.hasOwnProperty(a) && (p = "string" == typeof o[a] ? templateVarHelper.translate(o[a], t) : o[a], e.properties[a] = p)
                    }
            }
        }

        function _getNavPathInfo() {
            var e, r;
            e = localStorage.get(STORAGE_KEY), r = _transformLocalStorageStrtoObject(localStorage, e);
            var t = getSharedCookie();
            return Object.assign({}, r, t)
        }

        function _setProperty(e, r, t) {
            void 0 === e[r] && (e[r] = t)
        }

        function _transformLocalStorageStrtoObject(e, r) {
            var t;
            return r && (e.remove(STORAGE_KEY), t = JSON.parse(r)), t
        }

        function _replaceTemplateVars(e, r, t, o) {
            if ("object" !== _typeof(e.data) && errorHandler.log(moduleName, "_replaceTemplateVars", e.data + " is not a valid data object in the analytics request"), !errorHandler.exception)
                for (var a in e.data) e.data.hasOwnProperty(a) && (e.properties[a] = e.data[a], "string" == typeof e.properties[a] && (e.properties[a] = templateVarHelper.translate(e.properties[a], o)))
        }

        function _getNavSource(e) {
            var r = _getEntryPointStr();
            return e.prop25 ? e.prop25 : r || "other nav or none"
        }

        function _getEntryPointStr() {
            var e, r = document.referrer,
                t = window.location.host;
            return r || (e = "direct entry"), r && "" !== r && -1 === r.split("?")[0].indexOf(t) && (e = "third party"), e
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../../../constants": 74,
        "../../../../cookie": 75,
        "../../../../error-handler/ErrorHandler": 76,
        "../../helpers/separator": 92,
        "../../helpers/templateVar": 95,
        "@apple/analytics-utils": 1
    }],
    105: [function(require, module, exports) {
        "use strict";
        var separator = require("../../helpers/separator");

        function translate(e, t, r) {
            var a = e,
                o = a.data.element,
                p = {},
                s = o.name || o.id || "",
                n = o.thresholdExitTime - o.thresholdEnterTime,
                i = "",
                l = "";
            if (o.element && o.element.position && (i = o.element.position + separator.dot + separator.space, l = separator.space + separator.dot + o.element.position), p.prop34 = p.title = i + r.pageName + separator.hyphen + s + separator.hyphen + "section engaged" + l, p.prop35 = (n / 1e3).toFixed(2), a.properties = p, p.prop35) {
                var m = "event243=" + p.prop35;
                a.properties.events = m + ",event244"
            }
            return a.submitMethod = "tl", a
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../helpers/separator": 92
    }],
    106: [function(require, module, exports) {
        "use strict";
        var formatter = require("../../helpers/formatter"),
            separator = require("../../helpers/separator");

        function translate(e, t, n) {
            var r = e,
                s = r.data,
                o = {
                    started: "s",
                    ended: "e",
                    texttrackshow: "ce",
                    seeked: "sk",
                    milestone: "m"
                };
            o[s.eventType] ? r.options.silent = !1 : r.options.silent = !0;
            var p = n.pageName + separator.hyphen + s.videoId,
                a = _setTitle(s, p, s.eventType && o[s.eventType] ? o[s.eventType] : s.eventType),
                i = {};
            return _clearConditionalAppMeasurementProps(i), i.title = i.prop13 = a, i.eVar87 = p, void 0 !== s.duration && r.options.trackDuration && (i.eVar91 = s.duration, _setEvents(i, "event233=" + s.duration)), void 0 !== s.currentTime && "ended" !== s.eventType && r.options.trackCurrentTime && (i.eVar92 = s.currentTime, _setEvents(i, "event69=" + s.currentTime)), s.src && (i.eVar95 = s.src), "started" === s.eventType && (i.prop16 = i.eVar16 = "video plays", _setEvents(i, "event2")), "ended" === s.eventType && (i.prop16 = i.eVar16 = "video ends", _setEvents(i, "event72"), void 0 !== s.duration && r.options.trackCurrentTime && (i.eVar92 = s.duration, _setEvents(i, "event69=" + s.duration))), "texttrackshow" === s.eventType && (i.title = i.prop2 = p + separator.hyphen + "cc", i.prop13 = ""), "milestone" !== s.eventType && "seeked" !== s.eventType || (_setMilestoneEventValues({
                0: {
                    play: null,
                    seek: "event214"
                },
                .1: {
                    play: "event73",
                    seek: "event215"
                },
                .25: {
                    play: "event74",
                    seek: "event216"
                },
                .5: {
                    play: "event75",
                    seek: "event217"
                },
                .75: {
                    play: "event76",
                    seek: "event218"
                },
                .9: {
                    play: "event77",
                    seek: "event219"
                }
            }, s, i), i.prop13 = ""), "milestone" === s.eventType && (i.prop16 = i.eVar16 = "video milestone"), "seeked" === s.eventType && (i.eVar96 = "" + 100 * s.milestone, i.prop16 = i.eVar16 = "video seek"), s.videoType && s.playerType && (i.prop18 = s.videoType + " via " + s.playerType), r.properties = i, r.submitMethod = "tl", r
        }

        function _clearConditionalAppMeasurementProps(e) {
            e.prop16 = e.eVar16 = e.prop18 = e.prop2 = ""
        }

        function _setMilestoneEventValues(e, t, n) {
            _setEvents(n, t.seeked ? e[t.milestone].seek : e[t.milestone].play)
        }

        function _setEvents(e, t) {
            e.events ? e.events += "," + t : e.events = t
        }

        function _setTitle(e, t, n) {
            var r = formatter.eventString("v", n),
                s = null;
            return e.hasOwnProperty("milestone") && !isNaN(e.milestone) && (s = 100 * e.milestone), null !== s && (r += s), r += ": " + t
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../helpers/formatter": 90,
        "../../helpers/separator": 92
    }],
    107: [function(require, module, exports) {
        "use strict";
        var components = {
            gallery: require("./component/gallery"),
            link: require("./component/link"),
            click: require("./component/click"),
            page: require("./component/page"),
            section: require("./component/section"),
            video: require("./component/video"),
            event: require("./component/event")
        };

        function translate(e, n, t) {
            var o = e;
            return e.type && components[e.type] && (o = components[e.type].translate(e, n, t)), o
        }
        module.exports = {
            translate: translate,
            components: components
        }
    }, {
        "./component/click": 100,
        "./component/event": 101,
        "./component/gallery": 102,
        "./component/link": 103,
        "./component/page": 104,
        "./component/section": 105,
        "./component/video": 106
    }],
    108: [function(require, module, exports) {
        "use strict";
        module.exports = {
            appMeasurement: require("./appmeasurement/appMeasurement")
        }
    }, {
        "./appmeasurement/appMeasurement": 88
    }],
    109: [function(require, module, exports) {
        "use strict";
        module.exports = new RegExp(/[{|}]/g)
    }, {}],
    110: [function(require, module, exports) {
        "use strict";
        module.exports = new RegExp(/^(https?:\/\/.*\.apple\.com)?(\/[a-z\-_0-9]*)?\/shop(\/.*)?$/i)
    }, {}],
    111: [function(require, module, exports) {
        "use strict";
        module.exports = new RegExp(/(\{[a-zA-Z][\w-]+?\})/g)
    }, {}],
    112: [function(require, module, exports) {
        "use strict";

        function _classCallCheck(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function _createClass(t, e, i) {
            return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
        }
        var dataAttribute = "analytics-region",
            optionsAttribute = "analytics-options",
            validJSONPattern = /(?:\w+:\w+)(?:,(?=(?:\w+:\w+))|$)/,
            singleValuePattern = /[\w\s]+/,
            dataStringToObject = require("../translator/helpers/dataStringToObject"),
            Region = function() {
                function t(e) {
                    _classCallCheck(this, t), this.element = e, this.childRegions = {}, this.parentRegion = "", this.options = this.getDataOptions(), this.name = this.setName()
                }
                return _createClass(t, [{
                    key: "setName",
                    value: function() {
                        var t = "";
                        return this.options.name && (t = this.options.name), !this.options.name && this.element.id && (this.options.name = this.element.id), t
                    }
                }, {
                    key: "getDataOptions",
                    value: function() {
                        var t = {},
                            e = this.element.getAttribute("data-" + dataAttribute),
                            i = this.element.getAttribute("data-" + optionsAttribute);
                        for (var n in e = this._removeTrailingCommas(e), i = this._removeTrailingCommas(i), this._isJSONable(e) ? t = dataStringToObject(e) : this._isSingleValue(e) && (t.name = e), i && this._isJSONable(i) && (t = Object.assign({}, t, dataStringToObject(i))), t) t.hasOwnProperty(n) && ("false" === t[n] ? t[n] = !1 : "true" === t[n] && (t[n] = !0));
                        return t
                    }
                }, {
                    key: "_isJSONable",
                    value: function(t) {
                        return validJSONPattern.test(t)
                    }
                }, {
                    key: "_isSingleValue",
                    value: function(t) {
                        return singleValuePattern.test(t)
                    }
                }, {
                    key: "_removeTrailingCommas",
                    value: function(t) {
                        if (t && "string" == typeof t) return "," === t.charAt(t.length - 1) ? t.substr(0, t.length - 1) : t
                    }
                }]), t
            }();
        module.exports = {
            Region: Region,
            dataAttribute: dataAttribute
        }
    }, {
        "../translator/helpers/dataStringToObject": 124
    }],
    113: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var domNodes = require("@marcom/ac-dom-nodes"),
            Region = require("./Region").Region,
            dataAttribute = require("./Region").dataAttribute,
            allRegions = [],
            tree = {};

        function getAllRegions() {
            if (allRegions.length > 0) return allRegions;
            var e, n = document.querySelectorAll("[data-" + dataAttribute + "]"),
                o = n.length,
                t = 0;

            function i(e) {
                for (var o; domNodes.isNodeType(n[t + 1], domNodes.NODE_TYPES.ELEMENT) && e.element.contains(n[t + 1]);) o = new Region(n[t + 1]), allRegions.push(o), o.parentRegion = e.name, e.childRegions[o.name] = o, t += 1, i(o)
            }
            for (; t < o; t += 1) e = new Region(n[t]), tree[e.name] = e, allRegions.push(e), i(e);
            return allRegions
        }

        function getTree() {
            if (getAllRegions(), Object.keys(tree).length > 0) return tree
        }

        function getRegionByElement(e) {
            if (domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT)) {
                var n = getRegionAncestryByElement(e);
                if (n.length > 0) return n.pop()
            }
        }

        function getRegionAncestryByElement(e) {
            var n = getAllRegions();
            if (domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT)) return n.filter(function(n) {
                if (n.element.contains(e)) return _refreshDynamicRegion(n), !0
            })
        }

        function getRegionByName(e) {
            var n = getAllRegions();
            if ("string" == typeof e) return n.filter(function(n) {
                return _refreshDynamicRegion(n), n.name === e
            })
        }

        function _refreshDynamicRegion(e) {
            e.options && e.options.dynamic && refreshRegion(e)
        }

        function refreshRegion(e) {
            var n = e;
            domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT) && (n = getRegionByElement(e)), "object" === _typeof(n) && allRegions.forEach(function(e) {
                e.element === n.element && (e.options = e.getDataOptions(), e.name = e.setName())
            })
        }

        function clearRegions() {
            allRegions = []
        }
        module.exports = {
            getTree: getTree,
            getAllRegions: getAllRegions,
            getRegionByElement: getRegionByElement,
            getRegionByName: getRegionByName,
            getRegionAncestryByElement: getRegionAncestryByElement,
            refreshRegion: refreshRegion,
            clearRegions: clearRegions
        }
    }, {
        "./Region": 112,
        "@marcom/ac-dom-nodes": 10
    }],
    114: [function(require, module, exports) {
        "use strict";

        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })), t.push.apply(t, n)
            }
            return t
        }

        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(t, !0).forEach(function(r) {
                    _defineProperty(e, r, t[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })
            }
            return e
        }

        function _defineProperty(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }
        var topLevelMetadata = require("./metadata"),
            regions = require("./regions/regions"),
            metricsTracker = require("./metricsTracker"),
            defaultOptions = {
                clearRegions: !0
            };

        function resetACAnalytics() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (e = _objectSpread({}, defaultOptions, {}, e)).clearRegions && regions.clearRegions(), topLevelMetadata.refreshMetadata(), metricsTracker.plugin.reset()
        }
        module.exports = resetACAnalytics
    }, {
        "./metadata": 78,
        "./metricsTracker": 79,
        "./regions/regions": 113
    }],
    115: [function(require, module, exports) {
        "use strict";

        function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, r) {
            for (var n = 0; n < r.length; n++) {
                var t = r[n];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        function _createClass(e, r, n) {
            return r && _defineProperties(e.prototype, r), n && _defineProperties(e, n), e
        }
        var moduleName = "TokenRegistry",
            errorHandler = require("../error-handler/ErrorHandler"),
            TokenRegistry = function() {
                function e() {
                    _classCallCheck(this, e), this.tokens = {}, this._size = 0
                }
                return _createClass(e, [{
                    key: "setToken",
                    value: function(e, r) {
                        "string" != typeof e && errorHandler.log(moduleName, "setToken", "".concat(e, " is not a valid string")), "string" != typeof r && errorHandler.log(moduleName, "setToken", "".concat(r, " is not a valid string")), errorHandler.exception || (this.tokens[e] = r, this._updateSize())
                    }
                }, {
                    key: "removeToken",
                    value: function(e) {
                        "string" != typeof e && errorHandler.log(moduleName, "removeToken", e + " is not a valid string"), this.tokens[e] || errorHandler.log(moduleName, "removeToken", e + " doesnt exist"), errorHandler.exception || (delete this.tokens[e], this._updateSize())
                    }
                }, {
                    key: "getToken",
                    value: function(e) {
                        if ("string" != typeof e && errorHandler.log(moduleName, "getToken", e + " is not a valid string"), !errorHandler.exception) return this.tokens[e]
                    }
                }, {
                    key: "size",
                    value: function() {
                        return this._size
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.tokens = {}, this._size = 0
                    }
                }, {
                    key: "_updateSize",
                    value: function() {
                        this._size = Object.keys(this.tokens).length
                    }
                }]), e
            }();
        module.exports = new TokenRegistry
    }, {
        "../error-handler/ErrorHandler": 76
    }],
    116: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, r) {
            for (var t = 0; t < r.length; t++) {
                var n = r[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function _createClass(e, r, t) {
            return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e
        }
        var moduleName = "TokenReplacer",
            tokenPattern = require("../regexp/tokenPattern"),
            curlysPattern = require("../regexp/curlyBracePattern"),
            tokenRegistry = require("./Registry"),
            errorHandler = require("../error-handler/ErrorHandler"),
            TokenReplacer = function() {
                function e() {
                    _classCallCheck(this, e), this.registry = tokenRegistry
                }
                return _createClass(e, [{
                    key: "replace",
                    value: function(e, r) {
                        if ("string" != typeof e && errorHandler.log(moduleName, "replace", e + " is not a valid string"), !errorHandler.exception) return "object" === _typeof(r) && (e = this._replace(e, r)), this.registry.size() > 0 && (e = this._replace(e, this.registry.tokens)), e
                    }
                }, {
                    key: "parseTokens",
                    value: function(e) {
                        var r, t = this;
                        if ("string" != typeof e && errorHandler.log(moduleName, "parseTokens", e + " is not a valid string"), !errorHandler.exception) return (r = e.match(tokenPattern)) ? r.map(function(e) {
                            return t._removeCurlys(e)
                        }) : void 0
                    }
                }, {
                    key: "_replace",
                    value: function(e, r) {
                        var t = this;
                        return e.replace(tokenPattern, function(e) {
                            return "string" == typeof r[t._removeCurlys(e)] ? r[t._removeCurlys(e)] : e
                        })
                    }
                }, {
                    key: "_removeCurlys",
                    value: function(e) {
                        return (e = e.trim()).replace(curlysPattern, "")
                    }
                }]), e
            }();
        module.exports = new TokenReplacer
    }, {
        "../error-handler/ErrorHandler": 76,
        "../regexp/curlyBracePattern": 109,
        "../regexp/tokenPattern": 111,
        "./Registry": 115
    }],
    117: [function(require, module, exports) {
        "use strict";

        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var regions = require("../../regions/regions"),
            parseFromDataAttribute = require("./../helpers/parseFromDataAttribute");

        function translate(t) {
            var e, a = t,
                r = t.data.targetEl.querySelector("img"),
                n = regions.getRegionByElement(t.data.targetEl),
                o = t.data.targetEl.getAttribute("data-" + t.options.titleDataAttribute),
                i = t.data.targetEl.getAttribute("data-" + t.options.dataAttribute),
                l = i ? parseFromDataAttribute(i, t.data.targetEl) : "";
            return a.data.regionAncestry = regions.getRegionAncestryByElement(t.data.targetEl), r && (e = r.getAttribute("src"), a.data.linkImg = e.substring(e.lastIndexOf("/") + 1, e.length), "string" == typeof a.data.linkImg && (a.data.linkImg = a.data.linkImg.toLowerCase())), o ? a.data.linkText = o : "string" == typeof t.data.targetEl.innerText ? a.data.linkText = t.data.targetEl.innerText.trim() : a.data.linkText = t.data.targetEl.textContent.trim(), "object" === _typeof(n) && (a.data.region = n.name), l && (a.data.dataAnalyticsClick = l), a
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../regions/regions": 113,
        "./../helpers/parseFromDataAttribute": 125
    }],
    118: [function(require, module, exports) {
        "use strict";

        function translate(t) {
            return t
        }
        module.exports = {
            translate: translate
        }
    }, {}],
    119: [function(require, module, exports) {
        "use strict";
        var ancestor = require("@marcom/ac-dom-traversal/ancestor"),
            interactionTypes = {
                click: function(t) {
                    return _triggerNavType(t) || "click"
                },
                auto: function() {
                    return "auto"
                },
                keydown: function() {
                    return "keydown"
                },
                touchend: function() {
                    return "swipe"
                },
                touchstart: function() {
                    return "swipe"
                },
                touchmove: function() {
                    return "swipe"
                }
            };

        function translate(t) {
            var e = _interactionEventType(t),
                n = e,
                a = t.observer,
                r = t;
            return interactionTypes[e] && (n = interactionTypes[e](t)), r.data.targetEl = _getTargetElement(t), r.data.slideInViewTime = _slideInViewTime(t), r.data.outgoingInteractionType = t.observer.outgoingSlideInteractionType, r.data.incomingInteractionType = n, r.data.galleryFirstTimeTrigger = _isFirstTimeGalleryTrigger(r), a.outgoingSlideInteractionType = n, r
        }

        function _triggerNavType(t) {
            var e = !1,
                n = _getTargetElement(t);
            return n && (e = _getNavType(n)), e
        }

        function _getNavType(t) {
            var e, n, a = null,
                r = ["dotnav", "thumbnav", "paddlenav", "tabnav"],
                i = ancestor(t, ".dotnav, .thumbnav, .paddlenav, .tabnav, [data-analytics-gallery-interaction-type]");
            if (i)
                if (i.hasAttribute("data-analytics-gallery-interaction-type")) a = i.getAttribute("data-analytics-gallery-interaction-type");
                else
                    for (e = i.className, n = 0; n < r.length; n++)
                        if (-1 !== e.indexOf(r[n])) {
                            a = r[n];
                            break
                        }
            return a
        }

        function _getTargetElement(t) {
            var e = t.data.interactionEvent,
                n = !1;
            return e && (n = e.target || e.srcElement), n
        }

        function _slideInViewTime(t) {
            return t.data.incomingSlideTimestamp - t.data.outgoingSlideTimestamp
        }

        function _isFirstTimeGalleryTrigger(t) {
            var e = t.data.incomingInteractionType,
                n = t.observer,
                a = !1;
            return "auto" !== e && -1 === n.trackedInteractionTypes.indexOf(e) && (a = !0, n.trackedInteractionTypes.push(e)), a
        }

        function _interactionEventType(t) {
            var e = t.data,
                n = "auto";
            return e.interactionEvent && e.interactionEvent.type && (n = e.interactionEvent.type), n
        }
        module.exports = {
            translate: translate
        }
    }, {
        "@marcom/ac-dom-traversal/ancestor": 32
    }],
    120: [function(require, module, exports) {
        "use strict";

        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var regions = require("../../regions/regions");

        function translate(t) {
            var e, a = t,
                r = t.data.targetEl.querySelector("img"),
                n = regions.getRegionByElement(t.data.targetEl),
                o = t.data.targetEl.getAttribute("data-" + t.options.titleDataAttribute);
            return a.data.linkText = o || ("string" == typeof t.data.targetEl.innerText ? t.data.targetEl.innerText.trim() : t.data.targetEl.textContent.trim()), a.data.regionAncestry = regions.getRegionAncestryByElement(t.data.targetEl), t.data.targetEl.id && (a.data.linkId = t.data.targetEl.id), r && (e = r.getAttribute("src"), a.data.linkImg = e.substring(e.lastIndexOf("/") + 1, e.length), "string" == typeof a.data.linkImg && (a.data.linkImg = a.data.linkImg.toLowerCase())), "object" === _typeof(n) && (a.data.region = n.name), a
        }
        module.exports = {
            translate: translate
        }
    }, {
        "../../regions/regions": 113
    }],
    121: [function(require, module, exports) {
        "use strict";

        function translate(t) {
            return t
        }
        module.exports = {
            translate: translate
        }
    }, {}],
    122: [function(require, module, exports) {
        "use strict";

        function translate(t) {
            return t
        }
        module.exports = {
            translate: translate
        }
    }, {}],
    123: [function(require, module, exports) {
        "use strict";
        var eventTypes = {
                play: function() {
                    return "started"
                },
                ended: function() {
                    return "ended"
                },
                texttrackshow: function(t) {
                    return 0 === t.data.ttShowCount ? "texttrackshow" : "texttrackshown"
                },
                milestone: function(t) {
                    return t.data.seeked ? "seeked" : "milestone"
                }
            },
            interactionTypes = {
                click: function(t) {
                    return t.data.event.type
                }
            };

        function translate(t) {
            var e = t;
            return e.data.eventType = eventTypes[t.data.eventType] ? eventTypes[t.data.eventType](t) : t.data.eventType, t.data.event && interactionTypes[t.data.event.type] && (e.data.interactionType = interactionTypes[t.data.event.type](t)), isNaN(e.data.duration) ? e.data.duration = "unavailable" : e.data.duration = Math.round(e.data.duration).toString(), isNaN(e.data.currentTime) ? e.data.currentTime = "unavailable" : e.data.currentTime = Math.round(e.data.currentTime).toString(), e
        }
        module.exports = {
            translate: translate
        }
    }, {}],
    124: [function(require, module, exports) {
        "use strict";
        var errorHandler = require("../../error-handler/ErrorHandler"),
            moduleName = "dataAttributeHelper",
            methodName = "dataStringToObject";

        function dataStringToObject(r) {
            if (!r) return errorHandler.log(moduleName, methodName, "`str` must not be falsey"), {};
            if ("string" != typeof r || 0 === r.length) return errorHandler.log(moduleName, methodName, "`str` must contain a value and be of type string"), {};
            var e, t, a;
            try {
                e = JSON.parse(r)
            } catch (r) {}
            if (e) return e;
            var o = {};
            t = r.split(",");
            for (var n = 0; n < t.length; n++) o[(a = t[n].split(":"))[0].trim()] = a[1] ? a[1].trim() : a[1];
            return o
        }
        module.exports = dataStringToObject
    }, {
        "../../error-handler/ErrorHandler": 76
    }],
    125: [function(require, module, exports) {
        "use strict";
        var tokenReplacer = require("./../../tokens/Replacer"),
            dataStringToObject = require("./../../translator/helpers/dataStringToObject"),
            isNode = require("@marcom/ac-dom-nodes/isNode");

        function parseFromDataAttribute(e, t) {
            var r, a, o;
            return (r = tokenReplacer.parseTokens(e)) && 0 !== r.length ? (a = _getTokenValues(t, r), o = tokenReplacer.replace(e, a), dataStringToObject(o)) : dataStringToObject(e)
        }

        function _getTokenValues(e, t) {
            var r, a = {},
                o = t.length,
                n = 0;
            if (isNode(e))
                for (n = 0; n < o; n++) e.getAttribute(t[n]) && (r = e.getAttribute(t[n]), a[t[n]] = r);
            return a
        }
        module.exports = parseFromDataAttribute
    }, {
        "./../../tokens/Replacer": 116,
        "./../../translator/helpers/dataStringToObject": 124,
        "@marcom/ac-dom-nodes/isNode": 17
    }],
    126: [function(require, module, exports) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var errorHandler = require("../error-handler/ErrorHandler"),
            components = {
                gallery: require("./component/gallery"),
                link: require("./component/link"),
                click: require("./component/click"),
                page: require("./component/page"),
                section: require("./component/section"),
                video: require("./component/video"),
                event: require("./component/event")
            };

        function translate(e) {
            var o = e;
            if (e.type && components[e.type]) {
                if ("object" !== _typeof(e.data) && errorHandler.log("Translator", "translate", "request.data (" + e.data + ") must be an object"), errorHandler.exception) return;
                o = components[e.type].translate(e)
            }
            return o
        }
        module.exports = {
            translate: translate,
            components: components
        }
    }, {
        "../error-handler/ErrorHandler": 76,
        "./component/click": 117,
        "./component/event": 118,
        "./component/gallery": 119,
        "./component/link": 120,
        "./component/page": 121,
        "./component/section": 122,
        "./component/video": 123
    }],
    127: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var pipe = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return t.reduce(function(e, t) {
                        return t(e)
                    }, e)
                }
            },
            get = function(e) {
                if (null == e) return null;
                for (var t = (document.cookie || "").split(";"), n = 0; n < t.length; n++) {
                    var r = (t[n] || "").trim();
                    if (r.slice(0, e.length + 1) === "".concat(e, "=")) return decodeURIComponent(r.slice(e.length + 1))
                }
                return null
            },
            expiresToDate = function(e) {
                if ("number" == typeof e) {
                    var t = new Date;
                    return t.setTime(t.getTime() + 24 * (e || 0) * 60 * 60 * 1e3), t
                }
                return e
            },
            set = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = expiresToDate(null == t ? -1 : n.expires),
                    i = r ? "; expires=" + r.toUTCString() : "",
                    o = n.path ? "; path=" + n.path : "",
                    a = n.domain ? "; domain=" + n.domain : "",
                    s = n.secure ? "; secure" : "";
                document.cookie = e + "=" + encodeURIComponent(t || "") + i + o + a + s
            },
            index = Object.freeze({
                get: get,
                set: set
            });

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    _defineProperty(e, t, n[t])
                })
            }
            return e
        }

        function _toConsumableArray(e) {
            return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
        }

        function _arrayWithoutHoles(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }

        function _iterableToArray(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        var getEnvCookieName = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (!e) return "";
                var t = window.cookieMap;
                return t && "object" === _typeof(t) && t[e] || e
            },
            get$1 = pipe(getEnvCookieName, get),
            set$1 = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return set(getEnvCookieName(e), t, n)
            },
            index$1 = Object.freeze({
                get: get$1,
                set: set$1
            }),
            decode = function(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            encode = function(e) {
                if (!e) return null;
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return null
                }
            },
            index$2 = Object.freeze({
                decode: decode,
                encode: encode
            }),
            get$2 = pipe(get$1, decode),
            set$2 = function(e, t, n) {
                return set$1(e, encode(t), n)
            },
            index$3 = Object.freeze({
                get: get$2,
                set: set$2
            }),
            isBeacon = function(e) {
                return !(!e || "object" !== _typeof(e) || Array.isArray(e))
            },
            isNotEmpty = function(e) {
                return !(!isBeacon(e) || !Object.keys(e).length)
            },
            toBeaconSafeVal = function(e) {
                return e && "object" !== _typeof(e) ? String(e) : null
            },
            index$4 = Object.freeze({
                isBeacon: isBeacon,
                isNotEmpty: isNotEmpty,
                toBeaconSafeVal: toBeaconSafeVal
            }),
            get$3 = pipe(get, decode),
            set$3 = function(e, t, n) {
                return set(e, encode(t), n)
            },
            index$5 = Object.freeze({
                get: get$3,
                set: set$3
            }),
            deepClone = function e(t) {
                if (!t || "object" !== _typeof(t)) return t;
                if (Array.isArray(t)) {
                    for (var n = Array(t.length), r = 0; r < t.length; r++) n[r] = e(t[r]);
                    return n
                }
                for (var i = {}, o = 0, a = Object.keys(t); o < a.length; o++) {
                    var s = a[o];
                    i[s] = e(t[s])
                }
                return i
            },
            getOmniture = function() {
                return window.s
            },
            get$4 = function(e) {
                try {
                    return window.localStorage.getItem(e)
                } catch (e) {
                    return ""
                }
            },
            set$4 = function(e, t) {
                try {
                    return window.localStorage.setItem(e, t || ""), !0
                } catch (e) {
                    return !1
                }
            },
            remove = function(e) {
                try {
                    return window.localStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            },
            index$6 = Object.freeze({
                get: get$4,
                set: set$4,
                remove: remove
            }),
            get$5 = pipe(get$4, decode),
            set$5 = function(e, t) {
                return set$4(e, encode(t))
            },
            index$7 = Object.freeze({
                get: get$5,
                set: set$5,
                remove: remove
            }),
            toStr = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e || !1 === e || 0 === e ? String(e) : ""
            },
            config = {
                separator: "."
            },
            formatPath = function e() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n.map(function(t) {
                    return Array.isArray(t) ? e.apply(void 0, _toConsumableArray(t)) : toStr(t).split(config.separator).filter(Boolean)
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, [])
            },
            get$6 = function(e, t) {
                return t && t.length ? t.reduce(function(e, t) {
                    return e && "object" === _typeof(e) ? e[t] : null
                }, e) : e
            },
            getFactory = function(e) {
                return function(t) {
                    return get$6(t, e)
                }
            },
            set$6 = function(e, t, n) {
                return t && t.length ? setReversedPath(e, _toConsumableArray(t).reverse(), n) : e
            },
            setReversedPath = function e(t, n, r) {
                if (!n.length) return r;
                if ("object" === _typeof(t)) {
                    var i = n.pop(),
                        o = Array.isArray(t) ? _toConsumableArray(t) : _objectSpread({}, t);
                    return o[i] = e(o[i], n, r), o
                }
                return e({}, n, r)
            },
            setFactory = function(e) {
                return function(t, n) {
                    return set$6(t, e, n)
                }
            },
            remove$1 = function(e, t) {
                return t && t.length && "object" === _typeof(e) ? removeReversedPath(e, _toConsumableArray(t).reverse()) : e
            },
            removeReversedPath = function e(t, n) {
                var r = n.pop(),
                    i = Array.isArray(t) ? _toConsumableArray(t) : _objectSpread({}, t);
                return n.length ? ("object" === _typeof(i[r]) && (i[r] = e(i[r], n)), i) : (Array.isArray(i) ? i.splice(Number(r) || i.length, 1) : delete i[r], i)
            },
            index$8 = Object.freeze({
                formatPath: formatPath,
                get: get$6,
                getFactory: getFactory,
                set: set$6,
                setFactory: setFactory,
                remove: remove$1
            }),
            getOrigin = function(e) {
                return e ? "origin" in e ? e.origin : "".concat(e.protocol, "//").concat(e.hostname) : ""
            },
            isValidLink = function(e) {
                if (!e) return !1;
                if ("A" !== e.tagName) return !1;
                var t = (e.getAttribute("href") || "").trim();
                return t.length > 0 && 0 !== t.indexOf("#") && 0 !== t.indexOf("about:") && 0 !== t.indexOf("javascript:") && 0 !== t.indexOf("mailto:") && 0 !== t.indexOf("tel:") && !e.dataset.analyticsIntrapageLink
            },
            isCrossOriginLink = function(e) {
                return isValidLink(e) && getOrigin(e) !== getOrigin(window.document.location)
            },
            isExternalLink = function(e) {
                return !(!isValidLink(e) || !e.hostname) && ((getOmniture() || {}).linkInternalFilters || "").split(",").every(function(t) {
                    return e.hostname.indexOf(t.trim()) < 0
                })
            },
            classListContains = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return !!e && n.some(function(t) {
                    return e.classList.contains(t)
                })
            },
            isGlobalNavLink = function(e) {
                return classListContains(e, "ac-gn-link")
            },
            isImmediateLink = function(e) {
                return classListContains(e, "as-analytics-sendimmediately")
            },
            isMarcomUrl = function(e) {
                return !!e && e.indexOf("shop") < 0 && e.indexOf("search") < 0
            },
            isSearchLink = function(e) {
                return classListContains(e, "ac-gn-searchresults-link")
            },
            isSignInLink = function(e) {
                return classListContains(e, "ac-gn-bagview-nav-link-signIn")
            },
            isSignOutLink = function(e) {
                return classListContains(e, "ac-gn-bagview-nav-link-signOut")
            },
            isTargetingOtherWindow = function(e, t) {
                if (!e || !t) return !1;
                var n = (e.target || "").toLowerCase();
                return t.metaKey || t.ctrlKey || t.shiftKey || ["", "_self", "_parent", "_top"].every(function(e) {
                    return e !== n
                }) || window.name.length > 0 && n.length > 0 && n !== window.name
            },
            redirectsToSignInLink = function(e) {
                return classListContains(e, "ac-gn-bagview-nav-item-favorites", "ac-gn-bagview-nav-item-orders", "ac-gn-bagview-nav-item-account", "ac-gn-bagview-nav-item-signIn")
            },
            resolvesToSearchPage = function(e) {
                return !!e && /\/search\//.test(e.getAttribute("href"))
            },
            index$9 = Object.freeze({
                getOrigin: getOrigin,
                isCrossOriginLink: isCrossOriginLink,
                isExternalLink: isExternalLink,
                isGlobalNavLink: isGlobalNavLink,
                isImmediateLink: isImmediateLink,
                isMarcomUrl: isMarcomUrl,
                isSearchLink: isSearchLink,
                isSignInLink: isSignInLink,
                isSignOutLink: isSignOutLink,
                isTargetingOtherWindow: isTargetingOtherWindow,
                isValidLink: isValidLink,
                redirectsToSignInLink: redirectsToSignInLink,
                resolvesToSearchPage: resolvesToSearchPage
            });
        exports.asCookie = index$1, exports.asCookieJson = index$3, exports.beaconHelpers = index$4, exports.cookie = index, exports.cookieJson = index$5, exports.deepClone = deepClone, exports.getOmniture = getOmniture, exports.jsonEncoder = index$2, exports.localStorage = index$6, exports.localStorageJson = index$7, exports.objectPath = index$8, exports.pipe = pipe, exports.toStr = toStr, exports.urlHelpers = index$9
    }, {}],
    128: [function(require, module, exports) {
        "function" != typeof Object.assign && (Object.assign = function(n) {
            "use strict";
            if (null == n) throw new TypeError("Cannot convert undefined or null to object");
            n = Object(n);
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (n[e] = r[e])
            }
            return n
        })
    }, {}],
    129: [function(require, module, exports) {
        "use strict";
        var appMeasurement = require("./appmeasurement-setup/AppMeasurement");
        module.exports = {
            init: appMeasurement.init,
            getInstance: appMeasurement.getInstance,
            ActivityMapCollection: appMeasurement.ActivityMapCollection
        }
    }, {
        "./appmeasurement-setup/AppMeasurement": 130
    }],
    130: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Object/assign");
        var app, appMeasurement = require("@marcom/appmeasurement-wrapper"),
            appMeasurementAccount = require("./config/account"),
            setDefaults = require("./config/defaults"),
            initDefaults = {
                force: !1
            };

        function init(e) {
            if (e = Object.assign({}, initDefaults, e), !app || !0 === e.force) {
                var t = e.bucket || "";
                app = window.s = appMeasurement.init(appMeasurementAccount(t)), appMeasurement.plugins.init(app), setDefaults(app, e)
            }
            return app
        }

        function getInstance() {
            return app
        }
        module.exports = {
            init: init,
            getInstance: getInstance,
            ActivityMapCollection: appMeasurement.ActivityMapCollection
        }
    }, {
        "./config/account": 131,
        "./config/defaults": 132,
        "@marcom/ac-polyfills/Object/assign": 128,
        "@marcom/appmeasurement-wrapper": 172
    }],
    131: [function(require, module, exports) {
        "use strict";

        function appMeasurementAccount(e) {
            var t = "";
            if ("string" == typeof e && (t = e), document.location.search && t && -1 === t.indexOf("applestoreww")) {
                var n = document.location.search;
                (n.indexOf("?cid=AOS-") > -1 || n.indexOf("&cid=AOS-") > -1) && (t += ",applestoreww")
            }
            return t
        }
        module.exports = appMeasurementAccount
    }, {}],
    132: [function(require, module, exports) {
        "use strict";
        var appMeasurementPlugins = require("../plugin/appMeasurementPlugins"),
            appMeasurementServers = require("./server"),
            browserHelper = require("./helper/browser");

        function setDefaults(e, r) {
            var a = r.linkInternalFilters ? "/" + r.linkInternalFilters : "";

            function t(r, a) {
                var t = new Date,
                    n = new Date(t.setFullYear(t.getFullYear() + 2)),
                    i = a || n,
                    s = e.c_r(r);
                if (s) try {
                    e.c_w(r, s, i)
                } catch (e) {}
            }
            "object" != typeof e.acAnalytics && (e.acAnalytics = {}), e.acAnalytics.version = r.acAnalyticsVersion, e.pageName = r.pageName || "", e.currencyCode = "USD", e.trackDownloadLinks = !0, e.trackExternalLinks = !0, e.trackInlineStats = !0, e.useForcedLinkTracking = !0, e.forcedLinkTrackingTimeout = 100, e.linkDownloadFileTypes = "zip,wav,mp3,doc,pdf,xls,dmg,sit,pkg,exe,m4a,rss,xml,extz,safariextz,ibooks", e.linkInternalFilters = "tel:,mailto:,javascript:,apple.com" + a + ",apple.com/media,apple.com/105", e.linkLeaveQueryString = !1, e.linkTrackVars = "campaign", e.linkTrackEvents = "None", e._isSafari = browserHelper.isSafari(e), !0 === browserHelper.isSafariTopSitesPreview(e) && (e.t = function() {
                return ""
            }), t("s_vnum_n2_us");
            var n = new Date;
            n.setDate(n.getDate() - 1), t("s_pv", n), e.eVar54 = document.location.href, e.eVar49 = document.referrer, e.usePlugins = !0, e.doPlugins = appMeasurementPlugins, e.trackingServer = appMeasurementServers.getTrackingServer(), e.trackingServerSecure = appMeasurementServers.getSecureTrackingServer(), e.dc = appMeasurementServers.getDataCenterId(), e.pte = "event220,event221,event222,event223,event224,event225,event226,event227,event228,event229,event230,event231,event232", e.ptc = !1
        }
        module.exports = setDefaults
    }, {
        "../plugin/appMeasurementPlugins": 135,
        "./helper/browser": 133,
        "./server": 134
    }],
    133: [function(require, module, exports) {
        "use strict";

        function isSafariTopSitesPreview() {
            return !(!navigator || !navigator.loadPurpose || "preview" !== navigator.loadPurpose)
        }

        function isSafari(i) {
            return !1
        }
        module.exports = {
            isSafariTopSitesPreview: isSafariTopSitesPreview,
            isSafari: isSafari
        }
    }, {}],
    134: [function(require, module, exports) {
        "use strict";
        var production = ["www.apple.com", "images.apple.com", "movies.apple.com", "ssl.apple.com", "search.apple.com", "partner-relay.apple.com"];

        function getTrackingServer() {
            return _isProduction() ? "metrics.apple.com" : location.hostname
        }

        function getSecureTrackingServer() {
            return _isProduction() ? "securemetrics.apple.com" : location.hostname
        }

        function getDataCenterId() {
            return 112
        }

        function _isProduction() {
            var e = window.location.host;
            return production.indexOf(e) > -1
        }
        module.exports = {
            getTrackingServer: getTrackingServer,
            getSecureTrackingServer: getSecureTrackingServer,
            getDataCenterId: getDataCenterId
        }
    }, {}],
    135: [function(require, module, exports) {
        "use strict";
        var pageTitle, plpChannel = require("./helper/plpChannel"),
            cleanPageName = require("./helper/cleanPageName"),
            osDetect = require("./helper/osDetect"),
            percentPageViewed = require("./helper/percentPageViewed"),
            clickTimer = require("./helper/clickTimer"),
            isOutgoingLink = require("./helper/isOutgoingLink"),
            specialExitLinks = require("./helper/specialExitLinks"),
            isUserSignedIn = require("./helper/isUserSignedIn"),
            acAnalyticsVersion = require("./helper/acAnalyticsVersion"),
            passiveTracker = require("./helper/passiveTracker"),
            getUsrExpDataFromAB = require("./helper/getUsrExpDataFromAB"),
            AC_ANALYTICS_PREFIX = "ac";

        function appMeasurementPlugins(e) {
            !e.tcall && e.linkObject && "A" === e.linkObject.tagName && ("e" !== e.linkType || isOutgoingLink(e) || (e.linkURL = "", e.linkType = ""), e.linkObject.classList.contains("ac-gn-link-bag") && (void 0 === pageTitle && (pageTitle = document.querySelector("meta[property=analytics-track]")), pageTitle && pageTitle.content && (e.linkName = e.prop3 = pageTitle.content.toLowerCase() + " - bag", e.linkType = "o", e.l = e.linkObject, e.acAnalytics.ct_li = !0, e.eVar1 = e.pageName + " | global nav | bag", e.linkTrackVars = e.apl(e.linkTrackVars, "eVar1", ",", 1), e.linkTrackVars = e.apl(e.linkTrackVars, "prop3", ",", 1), e.linkTrackVars = e.apl(e.linkTrackVars, "eVar49", ",", 1), e.linkTrackVars = e.apl(e.linkTrackVars, "eVar54", ",", 1), e.A = function(e) {
                e.N = 0, e.linkTrackVars = "", e.eVar1 = "", e.prop3 = ""
            }.bind(null, e))), e.linkHandler(specialExitLinks, "e"), "e" !== e.linkType && e.linkObject.hasAttribute("data-analytics-exit-link") && (e.linkType = "e", e.linkName = e.linkObject.getAttribute("data-analytics-exit-link"), e.linkTrackEvents && (e.linkTrackEvents = ""), e.linkTrackVars && (e.linkTrackVars = "")));
            var r = !!e.linkType;
            "function" == typeof cleanPageName && cleanPageName(e), navigator && navigator.platform && (window.devicePixelRatio >= 1.5 ? e.prop5 = navigator.platform + " 2x" : e.prop5 = navigator.platform);
            var a = e.getQueryParam("ref");
            if (a && e.tcall ? e.referrer = a : a && !e.tcall && (e.referrer = ""), !e.campaign && (e.campaign = e.getQueryParam("cid"), e.campaign.match(/OAS-.+?-DOMAINS-/i))) {
                var n = "http://" + e.campaign.replace(/OAS-.+?-DOMAINS-/i, "");
                e.referrer = e.tcall ? n : ""
            }
            var i = acAnalyticsVersion(e);
            if (i && (e.server = AC_ANALYTICS_PREFIX + "-" + i), e.campaign = e.getValOnce(e.campaign, "s_campaign", 0), e.prop6 = !e.prop6 && e.getQueryParam("cp") && e.pageName ? 'D="' + e.getQueryParam("cp").toLowerCase() + ": " + e.pageName + '"' : e.prop6, e.prop11 = e.getQueryParam("sr"), e.d.URL.match(/\/channel\//) || e.prop11 || !e.c_r("s_3p") || (e.prop11 = e.c_r("s_3p"), e.c_w("s_3p", "", -1)), e.eVar7 = e.eVar7 ? "" : e.getQueryParam("aid"), e.eVar7 = e.getValOnce(e.eVar7, "s_var_7", 0), e.eVar2 && (e.events = e.apl(e.events, "event6", ",", 1)), !e.d.URL.match(/apple.com\/(\w{2}|befr|benl|chfr|chde|asia|lae)\/search\//) && !e.d.URL.match(/apple.com\/search\//) && (e.d.referrer.match(/apple.com\/(\w{2}|befr|benl|chfr|chde|asia|lae)\/search\//) || e.d.referrer.match(/apple.com\/search\//)))
                if (e.eVar2 = e.d.referrer.match(/\/support\//) ? "acs: " : e.d.referrer.match(/\/store\//) ? "aos: " : "www: ", e.d.referrer.match(/apple.com\/(\w{2}|befr|benl|chfr|chde|asia|lae)\/search/)) {
                    e.eVar2 += e.getQueryParam("q", "", e.d.referrer).replace(/\+/g, " ");
                    var l = e.d.referrer.match(/\/(\w{2}|befr|benl|chfr|chde|asia|lae)\//i);
                    e.eVar2 += " (" + l[0].replace(/\//g, "") + ")"
                } else e.eVar2 += e.getQueryParam("q", "", e.d.referrer).replace(/\+/g, " ") + " (us)";
            if ("em" === e.prop11 && e.tcall && (e.referrer = "imap://chatterbox.com"), "app" === e.prop11 && e.tcall && (e.referrer = "file://fromApp"), document.referrer && document.referrer.indexOf("apple.com/startpage/") > -1 && e.tcall && (e.referrer = "news://startpage.com", e._1_referrer = 1), "function" == typeof percentPageViewed && e.tcall && percentPageViewed(e), e.prop32 = e.eVar32 = e.getQueryParam("psid"), e.prop32 || e.c_r("s_sid")) {
                var p = new Date,
                    c = p.getTime();
                p.setTime(c + 63072e4), e.prop32 ? e.c_w("s_psid", e.prop32, p) : e.c_w("s_psid", e.c_r("s_sid"), p), e.c_w("s_sid", "", -1)
            }
            e.prop32 || e.c_r("s_pathLength") || (e.prop32 = e.c_r("s_psid")), e.linkLeaveQueryString = !0;
            var t, s = e.linkURL;
            if ("d" === e.linkType && s && (s.match(/\.rss|\.xml/) ? e.eVar16 = e.prop16 = "sign ups" : (e.eVar11 = e.pageName + " - " + s.substring(s.lastIndexOf("/") + 1, s.length), e.eVar16 = e.prop16 = "downloads", e.events = e.apl(e.events, "event5", ",", 1), e.linkTrackVars = e.apl(e.linkTrackVars, "eVar11", ",", 1), e.linkTrackVars = e.apl(e.linkTrackVars, "events", ",", 1), e.linkTrackEvents = e.apl(e.linkTrackEvents, "event5", ",", 1)), e.linkTrackVars = e.apl(e.linkTrackVars, "eVar16", ",", 1), e.linkTrackVars = e.apl(e.linkTrackVars, "prop16", ",", 1)), e.linkLeaveQueryString = !1, "function" == typeof osDetect && osDetect(e), e.pageName && e.pageName.match(/feedback - thank you/) && (e.prop16 = e.eVar16 = "feedback"), e.linkLeaveQueryString = !0, e.linkHandler("rss~ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/|rss~rss.support.apple.com"), "rss" === e.linkName && (e.eVar16 = e.prop16 = "sign ups", e.apl(e.linkTrackVars, "eVar16,prop16", ",", 1)), e.linkLeaveQueryString = !1, "function" == typeof clickTimer && clickTimer(e), e.tcall && "function" == typeof e.performanceTiming && e.performanceTiming(), "function" == typeof plpChannel && plpChannel(e), t = document && document.documentElement.lang ? document.documentElement.lang : "n/a", e.eVar14 = t, r && (e.linkTrackVars = e.apl(e.linkTrackVars, "eVar14", ", ", 1)), isUserSignedIn(e) && (r && (e.linkTrackEvents = e.apl(e.linkTrackEvents, "event209", ",", 1), e.linkTrackVars = e.apl(e.linkTrackVars, "events", ",", 1)), e.events = e.apl(e.events, "event209", ",", 1)), e.eVar4 = "D=pageName", r && (e.linkTrackVars = e.apl(e.linkTrackVars, "eVar4", ", ", 1)), e.tcall ? e.eVar97 = "s.t-p" : r && (e.eVar97 = "s.tl-" + e.linkType, e.linkTrackVars = e.apl(e.linkTrackVars, "eVar97", ",", 1)), e.tcall ? e.c_r("as_pvi") && (e.prop51 = e.c_r("as_pvi")) : r && -1 === e.linkTrackVars.indexOf("prop51") && void 0 !== e.prop51 && (e.linkTrackVars = e.apl(e.linkTrackVars, "prop51", ",", 1)), e.tcall || r) {
                var k = getUsrExpDataFromAB(e);
                k && (e.eVar57 = k, r && (e.linkTrackVars = e.apl(e.linkTrackVars, "eVar57", ",", 1)))
            }
            e.hier1 = e.channel ? e.channel : "", e.linkTrackVars = e.apl(e.linkTrackVars, "hier1", ", ", 1), e.linkTrackVars = e.linkTrackVars.replace(new RegExp(" ", "g"), "");
            var o = e.getQueryParam("afid");
            o && (e.eVar10 = e.getValOnce(o, "s_afc")), e.prop4 = e.prop4 ? e.prop4 : "D=g", (e.c_r("rtsid") || e.c_r("rtsidInt") || null) && (e.events ? "string" == typeof e.events && -1 === e.events.indexOf("event37") && (e.events += ",event37") : e.events = "event37"), passiveTracker(e), "d" !== e.linkType && "e" !== e.linkType || (e.A = function(e) {
                e.manageVars("clearVars")
            }.bind(null, e)), e.manageVars("lowercaseVars", "purchaseID,pageType,events,products,transactionID", 2), e.tcall = !1
        }
        module.exports = appMeasurementPlugins
    }, {
        "./helper/acAnalyticsVersion": 136,
        "./helper/cleanPageName": 137,
        "./helper/clickTimer": 138,
        "./helper/getUsrExpDataFromAB": 139,
        "./helper/isOutgoingLink": 140,
        "./helper/isUserSignedIn": 141,
        "./helper/osDetect": 142,
        "./helper/passiveTracker": 143,
        "./helper/percentPageViewed": 144,
        "./helper/plpChannel": 145,
        "./helper/specialExitLinks": 146
    }],
    136: [function(require, module, exports) {
        "use strict";

        function acAnalyticsVersion(n) {
            return n.acAnalytics.version
        }
        module.exports = acAnalyticsVersion
    }, {}],
    137: [function(require, module, exports) {
        "use strict";

        function cleanPageName(e) {
            if (e.pageName) {
                var a = escape(e.pageName);
                a = (a = (a = a.replace(/(%u2018|%u2019|%u02BC|%u02BD)/g, "%27")).replace(/(%u201C|%u201D|%E2%80%9C|%E2%80%9D)/g, "%22")).replace(/(%09|%0A|%0D)/g, ""), e.pageName = unescape(a)
            }
        }
        module.exports = cleanPageName
    }, {}],
    138: [function(require, module, exports) {
        "use strict";
        var utils = require("@apple/analytics-utils"),
            cookieJson = utils.cookieJson,
            beaconHelpers = utils.beaconHelpers,
            toStr = utils.toStr,
            isOutgoingLink = require("./isOutgoingLink"),
            COUNT_PROP = "eVar93",
            TIME_PROP = "eVar94",
            TIME_EVENT = "event210",
            TIME_EVENT_COUNTER = "event246",
            INVALID_EVENT = "event242",
            COOKIE_NAME = "s_aca_ct",
            COOKIE_OPTIONS = {
                path: "/",
                domain: "apple.com",
                expires: .021,
                secure: !0
            },
            CLICK_TIME_THRESHOLD = 900,
            TIME_SINCE_LOAD = _setTimeSinceLoad(),
            CLICK_TIMER_LINK_INTERACTION = "ct_li",
            CLICK_TIMER_COUNT = "ct_c";

        function trackClickTime(e) {
            if (!e.linkName || -1 === e.linkName.indexOf("v@e") && -1 === e.linkName.indexOf("v@sk") && -1 === e.linkName.indexOf("v@m"))
                if (e.tcall) _track(e);
                else if (isOutgoingLink(e) && "e" !== e.linkType && "d" !== e.linkType) _storeData(e);
            else if (e.acAnalytics[CLICK_TIMER_LINK_INTERACTION] && e.linkName) _track(e);
            else if (e.linkObject) {
                if ("d" === e.linkType || "e" === e.linkType) return void _track(e);
                e.acAnalytics[CLICK_TIMER_LINK_INTERACTION] = !0
            }
        }

        function _track(e) {
            var n;
            e.tcall ? n = _fetchData() : (_incrementClickTimer(e), n = _createDataObject(e), e.acAnalytics[CLICK_TIMER_LINK_INTERACTION] = !1), n && _applyData(e, n)
        }

        function _storeData(e) {
            _incrementClickTimer(e);
            var n = _createDataObject(e);
            beaconHelpers.isNotEmpty(n) && cookieJson.set(COOKIE_NAME, _sanitizeBeacon(n), COOKIE_OPTIONS)
        }

        function _fetchData() {
            var e = cookieJson.get(COOKIE_NAME),
                n = Object.assign({}, COOKIE_OPTIONS, {
                    expires: ""
                });
            return cookieJson.set(COOKIE_NAME, null, n), e
        }

        function _applyData(e, n) {
            n[COUNT_PROP] && (e[COUNT_PROP] = n[COUNT_PROP]), n[TIME_PROP] && (e[TIME_PROP] = n[TIME_PROP]), n.events && _applyEventsData(e, n.events), e.tcall || (void 0 !== n.linkTrackEvents && n.linkTrackEvents.forEach(function(n) {
                e.linkTrackEvents = e.apl(e.linkTrackEvents, n, ",", 1)
            }), void 0 !== n.linkTrackVars && n.linkTrackVars.forEach(function(n) {
                e.linkTrackVars = e.apl(e.linkTrackVars, n, ",", 1)
            }))
        }

        function _createDataObject(e) {
            var n = _getTimeSinceLoad(),
                t = {
                    linkTrackVars: [],
                    linkTrackEvents: [],
                    events: []
                };
            return null !== n ? (t.events.push(TIME_EVENT_COUNTER), t.events.push(TIME_EVENT + "=" + n), t.linkTrackVars.push(TIME_PROP), t.linkTrackEvents.push(TIME_EVENT, TIME_EVENT_COUNTER), t[TIME_PROP] = n) : (t.events.push(INVALID_EVENT), t.linkTrackEvents.push(INVALID_EVENT)), t[COUNT_PROP] = e.acAnalytics[CLICK_TIMER_COUNT], t.linkTrackVars.push(COUNT_PROP), t.linkTrackVars.push("events"), t
        }

        function _incrementClickTimer(e) {
            e.acAnalytics[CLICK_TIMER_COUNT] ? e.acAnalytics[CLICK_TIMER_COUNT]++ : e.acAnalytics[CLICK_TIMER_COUNT] = 1
        }

        function _applyEventCounter(e, n) {
            n && (e.events = e.apl(e.events, n, ",", 1))
        }

        function _applyEventWithValue(e, n) {
            var t, i, a = {};
            n && (i = n.split("=")[0], (t = e.events.split(",")).forEach(function(e, n) {
                a[e.split("=")[0]] = n
            }), isNaN(a[i]) ? e.events = e.apl(e.events, n, ",", 1) : (t.splice(a[i], 1, n), e.events = t.join(",")))
        }

        function _applyEventsData(e, n) {
            "string" != typeof e.events && void 0 !== e.events || n.forEach(function(n) {
                -1 === n.indexOf("=") ? _applyEventCounter(e, n) : _applyEventWithValue(e, n)
            })
        }

        function _getTimeSinceLoad() {
            return TIME_SINCE_LOAD ? _calculateTimeSinceLoad() : (TIME_SINCE_LOAD = _setTimeSinceLoad(), _getTimeSinceLoadAfterLoad())
        }

        function _getTimeSinceLoadAfterLoad() {
            return TIME_SINCE_LOAD ? _calculateTimeSinceLoad() : null
        }

        function _calculateTimeSinceLoad() {
            if (!TIME_SINCE_LOAD) return null;
            var e = ((Date.now() - TIME_SINCE_LOAD) / 1e3).toFixed(2);
            return isNaN(e) ? null : (e = parseFloat(e)) >= CLICK_TIME_THRESHOLD || e <= 0 ? null : e
        }

        function _setTimeSinceLoad() {
            if (window && window.performance && window.performance.timing && window.performance.timing.domInteractive) return window.performance.timing.domInteractive
        }

        function _sanitizeBeacon(e) {
            return Object.keys(e).forEach(function(n) {
                var t = n.substring(0, 4),
                    i = toStr(e[n]);
                "prop" === t ? e[n] = i.substring(0, 100) : "eVar" === t && (e[n] = i.substring(0, 250))
            }), e
        }
        module.exports = trackClickTime
    }, {
        "./isOutgoingLink": 140,
        "@apple/analytics-utils": 127
    }],
    139: [function(require, module, exports) {
        "use strict";

        function getUsrExpDataFromAB(t) {
            if (window && window.AB && !window.AB.tracked && isAbTestActive()) {
                var e = getDataFromTarget();
                return e ? (window.AB.tracked = !0, e.eVar57 ? e.eVar57 : "no tests found") : void 0
            }
        }

        function getDataFromTarget() {
            if (window.AB) return window.AB.targetData
        }

        function isAbTestActive() {
            return window.AB && window.AB.isAbTestActive
        }
        module.exports = getUsrExpDataFromAB
    }, {}],
    140: [function(require, module, exports) {
        "use strict";

        function isOutgoingLink(t) {
            var i, a;
            return !!t.linkObject && (!(!(a = t.linkObject) || "A" !== a.tagName || !a.href) && ("#" !== (i = a.getAttribute("href").trim()).charAt(0) && 0 !== i.indexOf("javascript:") && 0 !== i.indexOf("mailto:") && 0 !== i.indexOf("tel:") && (!a.hasAttribute("data-analytics-id") && !a.hasAttribute("data-analytics-intrapage-link") && (!a.classList.contains("ac-gn-link-search") && !a.classList.contains("ac-gn-link-bag")))))
        }
        module.exports = isOutgoingLink
    }, {}],
    141: [function(require, module, exports) {
        "use strict";

        function isUserSignedIn(e) {
            return e.Util.cookieRead("as_cn")
        }
        module.exports = isUserSignedIn
    }, {}],
    142: [function(require, module, exports) {
        "use strict";

        function osDetect(i) {
            var e, t = navigator.userAgent;
            if (t.match(/windows/i)) i.prop9 = "windows";
            else if (t.match(/(kindle|silk-accelerated)/i)) t.match(/(kindle fire|silk-accelerated)/i) ? i.prop9 = "kindle fire" : i.prop9 = "kindle";
            else {
                if (t.match(/(iphone|ipod|ipad)/i)) return e = t.match(/OS [0-9_]+/i), void(i.prop9 = "i" + e[0].replace(/_/g, "."));
                if (t.match(/android/i)) i.prop9 = t.match(/android [0-9]\.?[0-9]?\.?[0-9]?/i);
                else {
                    if (t.match(/webos\/[0-9\.]+/i)) return e = t.match(/webos\/[0-9]\.?[0-9]?\.?[0-9]?/i), void(i.prop9 = e[0].replace(/webos\//i, "web os "));
                    if (t.match(/rim tablet os [0-9\.]+/i)) return e = t.match(/rim tablet os [0-9]\.?[0-9]?\.?[0-9]?/i), void(i.prop9 = e[0].replace(/rim tablet os/i, "rim os "));
                    if ((t.match(/firefox\/(\d{2}||[3-9])/i) || t.match(/AppleWebKit\//)) && t.match(/Mac OS X [0-9_\.]+/)) {
                        var r = t.match(/[0-9_\.]+/g);
                        return r = r[1].split(/_|\./), void(i.prop9 = r[0] + "." + r[1] + ".x")
                    }
                    var a = t.match(/AppleWebKit\/\d*/i) && t.match(/AppleWebKit\/\d*/i).toString().replace(/AppleWebKit\//i, "");
                    i.prop9 = a > 522 ? "10.5.x" : a > 400 ? "10.4.x" : a > 99 ? "10.3.x" : a > 80 ? "10.2.x" : "mac unknown or non-safari"
                }
            }
        }
        module.exports = osDetect
    }, {}],
    143: [function(require, module, exports) {
        "use strict";
        var appMeasurement, SESSION_STORAGE_KEY = "s_aca_ptd",
            options = {};

        function track(e) {
            var t;
            appMeasurement = e, isTrackingCall() && isStorageAvailable("sessionStorage") && (t = getData()) && (setOptions(t), prepareAppMeasurement(t))
        }

        function setOptions(e) {
            options.overwriteAppMeasurementValues = !(!e.options || !0 !== e.options.overwriteAppMeasurementValues), options.overwriteAppMeasurementEvents = !e.options || !1 !== e.options.overwriteAppMeasurementEvents, delete e.options
        }

        function isTrackingCall() {
            return "string" == typeof appMeasurement.linkType && appMeasurement.linkType.length > 0 || isPageTrackingCall()
        }

        function isPageTrackingCall() {
            return appMeasurement.tcall
        }

        function getData() {
            var e = sessionStorage.getItem(SESSION_STORAGE_KEY);
            if (e) try {
                return JSON.parse(e)
            } catch (e) {
                return
            }
        }

        function prepareAppMeasurement(e) {
            e.events && "string" == typeof e.events && (setEventsData(e.events), delete e.events), setVarData(e), sessionStorage.removeItem(SESSION_STORAGE_KEY)
        }

        function setEventsData(e) {
            var t = !1,
                a = getCurrentTrackedEvents(),
                n = getCurrentEvents();
            e.split(",").forEach(function(e) {
                var r, s = e.split("="),
                    p = s[0],
                    i = s[1],
                    u = null;
                !isPageTrackingCall() && a && (r = -1 !== a.indexOf(p)), n.forEach(function(e) {
                    e.eventName === p && (u = e, isPageTrackingCall() && (r = !0))
                }), n.push({
                    eventName: p,
                    eventValue: i
                }), (!1 !== options.overwriteAppMeasurementEvents || !r) && (u && removeCurrentlyTrackedDuplicateEvent(u), appMeasurement.events = appMeasurement.apl(appMeasurement.events, e, ",", 1), t || (t = !0), isPageTrackingCall() || (appMeasurement.linkTrackEvents = appMeasurement.apl(appMeasurement.linkTrackEvents, p, ",", 1)))
            }), t && (appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "events", ",", 1))
        }

        function getCurrentTrackedEvents() {
            if (appMeasurement.linkTrackEvents && "string" == typeof appMeasurement.linkTrackEvents) return appMeasurement.linkTrackEvents.split(",")
        }

        function getCurrentEvents() {
            var e = [];
            return appMeasurement.events && (e = appMeasurement.events.split(",").map(function(e) {
                var t = e.split("=");
                return {
                    eventName: t[0],
                    eventValue: t[1]
                }
            })), e
        }

        function removeCurrentlyTrackedDuplicateEvent(e) {
            var t = e.eventName;
            e.eventValue && (t += "=" + e.eventValue), t = "^(" + t + ",+)|(" + t + ",+)|(," + t + "$)", t = new RegExp(t), appMeasurement.events = appMeasurement.events.replace(t, "")
        }

        function setVarData(e) {
            var t, a = getCurrentTrackedVars();
            for (var n in e) e.hasOwnProperty(n) && (isPageTrackingCall() ? t = !!appMeasurement[n] : (t = -1 !== a.indexOf(n)) || (appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, n, ",", 1)), !options.overwriteAppMeasurementValues && t || (appMeasurement[n] = e[n]))
        }

        function getCurrentTrackedVars() {
            if (appMeasurement.linkTrackVars && "string" == typeof appMeasurement.linkTrackVars) return appMeasurement.linkTrackVars.split(",")
        }

        function isStorageAvailable(e) {
            try {
                var t = window[e],
                    a = "acAnalyticsStorageTestItem";
                return t.setItem(a, "a"), t.removeItem(a), !0
            } catch (e) {
                return !1
            }
        }
        module.exports = track
    }, {}],
    144: [function(require, module, exports) {
        "use strict";

        function percentPageViewed(e) {
            var t;
            e.prop17 || ("function" == typeof e.getPercentPageViewed && (t = e.getPercentPageViewed()), t && t.length >= 4 && void 0 !== t[1] && (e.prop14 = t[0], e.prop17 = t[1] + ":" + t[2], e.prop28 = 10 * Math.round(t[3] / 10)))
        }
        module.exports = percentPageViewed
    }, {}],
    145: [function(require, module, exports) {
        "use strict";

        function plpChannel(e) {
            if ((e.pageName && e.prop14 && e.pageName.toLowerCase() !== e.prop14.toLowerCase() || !e.prop14) && e.tcall) {
                var n, t, p = e.c_r("s_pathLength"),
                    a = p.indexOf(",") > -1 ? p.split(",") : [],
                    l = new Date,
                    h = l.getTime();
                if (l.setTime(h + 18e5), n = e.channel ? (n = e.channel.substring(e.channel.indexOf(".") + 1, e.channel.length)).substring(n.indexOf(".") + 1, n.length) : "no channel", 0 !== a.length && a.toString().indexOf(n + "=") > -1) {
                    for (var i = a.length, r = 0; r < i; r++) a[r].toString().indexOf(n + "=") > -1 && (++(t = a[r].split("="))[1], a[r] = t[0] + "=" + t[1], e.prop48 = t[1]);
                    e.c_w("s_pathLength", a, l)
                } else t = p + n + "=1,", e.c_w("s_pathLength", t, l), e.prop48 = "1"
            }
        }
        module.exports = plpChannel
    }, {}],
    146: [function(require, module, exports) {
        "use strict";

        function specialExitLinks() {
            var e = "";
            return [{
                name: "deploy",
                url: "deploy.apple.com"
            }, {
                name: "ade",
                url: "ade.apple.com"
            }, {
                name: "appleteacher",
                url: "appleteacher.apple.com"
            }, {
                name: "ecommerce",
                url: "ecommerce.apple.com"
            }, {
                name: "school",
                url: "school.apple.com"
            }, {
                name: "help",
                url: "help.apple.com"
            }, {
                name: "survey",
                url: "survey.apple.com"
            }, {
                name: "itunespartner",
                url: "itunespartner.apple.com"
            }, {
                name: "investor",
                url: "investor.apple.com"
            }, {
                name: "consultants",
                url: "consultants.apple.com"
            }, {
                name: "itms",
                url: "itms.apple.com"
            }, {
                name: "artists",
                url: "artists.apple.com"
            }, {
                name: "itunes",
                url: "itunes.apple.com"
            }].forEach(function(a, l, p) {
                e += a.name + "~" + a.url + "|"
            }), e = e.slice(0, -1)
        }
        module.exports = specialExitLinks()
    }, {}],
    147: [function(require, module, exports) {
        "use strict";
        module.exports = 8
    }, {}],
    148: [function(require, module, exports) {
        "use strict";
        module.exports = 11
    }, {}],
    149: [function(require, module, exports) {
        "use strict";
        module.exports = 9
    }, {}],
    150: [function(require, module, exports) {
        "use strict";
        module.exports = 1
    }, {}],
    151: [function(require, module, exports) {
        "use strict";
        module.exports = 3
    }, {}],
    152: [function(require, module, exports) {
        "use strict";
        var isNode = require("../isNode");
        module.exports = function(e, o) {
            return !!isNode(e) && ("number" == typeof o ? e.nodeType === o : -1 !== o.indexOf(e.nodeType))
        }
    }, {
        "../isNode": 156
    }],
    153: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./isNodeType"),
            COMMENT_NODE = require("../COMMENT_NODE"),
            DOCUMENT_FRAGMENT_NODE = require("../DOCUMENT_FRAGMENT_NODE"),
            ELEMENT_NODE = require("../ELEMENT_NODE"),
            TEXT_NODE = require("../TEXT_NODE"),
            VALID_INSERT_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_INSERT_NODE = " must be an Element, TextNode, Comment, or Document Fragment",
            VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE],
            ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment",
            VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_PARENT_NODE = " must be an Element, or Document Fragment",
            ERR_NO_PARENT_NODE = " must have a parentNode";
        module.exports = {
            parentNode: function(E, N, e, _) {
                if (_ = _ || "target", (E || N) && !isNodeType(E, VALID_PARENT_NODE)) throw new TypeError(e + ": " + _ + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(E, N, e, _) {
                if (_ = _ || "target", (E || N) && !isNodeType(E, VALID_CHILD_NODE)) throw new TypeError(e + ": " + _ + ERR_INVALID_CHILD_NODE)
            },
            insertNode: function(E, N, e, _) {
                if (_ = _ || "node", (E || N) && !isNodeType(E, VALID_INSERT_NODE)) throw new TypeError(e + ": " + _ + ERR_INVALID_INSERT_NODE)
            },
            hasParentNode: function(E, N, e) {
                if (e = e || "target", !E.parentNode) throw new TypeError(N + ": " + e + ERR_NO_PARENT_NODE)
            }
        }
    }, {
        "../COMMENT_NODE": 147,
        "../DOCUMENT_FRAGMENT_NODE": 148,
        "../ELEMENT_NODE": 150,
        "../TEXT_NODE": 151,
        "./isNodeType": 152
    }],
    154: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./internal/isNodeType"),
            DOCUMENT_FRAGMENT_NODE = require("./DOCUMENT_FRAGMENT_NODE");
        module.exports = function(e) {
            return isNodeType(e, DOCUMENT_FRAGMENT_NODE)
        }
    }, {
        "./DOCUMENT_FRAGMENT_NODE": 148,
        "./internal/isNodeType": 152
    }],
    155: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./internal/isNodeType"),
            ELEMENT_NODE = require("./ELEMENT_NODE");
        module.exports = function(e) {
            return isNodeType(e, ELEMENT_NODE)
        }
    }, {
        "./ELEMENT_NODE": 150,
        "./internal/isNodeType": 152
    }],
    156: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }, {}],
    157: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e) {
            return validate.childNode(e, !0, "remove"), e.parentNode ? e.parentNode.removeChild(e) : e
        }
    }, {
        "./internal/validate": 153
    }],
    158: [function(require, module, exports) {
        "use strict";
        var isElement = require("@marcom/ac-dom-nodes/isElement"),
            matchesSelector = require("./matchesSelector"),
            validate = require("./internal/validate");
        module.exports = function(e, t, r, a) {
            if (validate.childNode(e, !0, "ancestors"), validate.selector(t, !1, "ancestors"), r && isElement(e) && (!t || matchesSelector(e, t))) return e;
            if (e !== (a = a || document.body))
                for (;
                    (e = e.parentNode) && isElement(e);) {
                    if (!t || matchesSelector(e, t)) return e;
                    if (e === a) break
                }
            return null
        }
    }, {
        "./internal/validate": 160,
        "./matchesSelector": 162,
        "@marcom/ac-dom-nodes/isElement": 155
    }],
    159: [function(require, module, exports) {
        "use strict";
        module.exports = window.Element ? function(e) {
            return e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector
        }(Element.prototype) : null
    }, {}],
    160: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.indexOf");
        var isNode = require("@marcom/ac-dom-nodes/isNode"),
            COMMENT_NODE = require("@marcom/ac-dom-nodes/COMMENT_NODE"),
            DOCUMENT_FRAGMENT_NODE = require("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE"),
            DOCUMENT_NODE = require("@marcom/ac-dom-nodes/DOCUMENT_NODE"),
            ELEMENT_NODE = require("@marcom/ac-dom-nodes/ELEMENT_NODE"),
            TEXT_NODE = require("@marcom/ac-dom-nodes/TEXT_NODE"),
            isNodeType = function(e, E) {
                return !!isNode(e) && ("number" == typeof E ? e.nodeType === E : -1 !== E.indexOf(e.nodeType))
            },
            VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE],
            ERR_INVALID_PARENT_NODE = " must be an Element, Document, or Document Fragment",
            VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE],
            ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment",
            ERR_INVALID_SELECTOR = " must be a string";
        module.exports = {
            parentNode: function(e, E, N, o) {
                if (o = o || "node", (e || E) && !isNodeType(e, VALID_PARENT_NODE)) throw new TypeError(N + ": " + o + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(e, E, N, o) {
                if (o = o || "node", (e || E) && !isNodeType(e, VALID_CHILD_NODE)) throw new TypeError(N + ": " + o + ERR_INVALID_CHILD_NODE)
            },
            selector: function(e, E, N, o) {
                if (o = o || "selector", (e || E) && "string" != typeof e) throw new TypeError(N + ": " + o + ERR_INVALID_SELECTOR)
            }
        }
    }, {
        "@marcom/ac-dom-nodes/COMMENT_NODE": 147,
        "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 148,
        "@marcom/ac-dom-nodes/DOCUMENT_NODE": 149,
        "@marcom/ac-dom-nodes/ELEMENT_NODE": 150,
        "@marcom/ac-dom-nodes/TEXT_NODE": 151,
        "@marcom/ac-dom-nodes/isNode": 156,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 166
    }],
    161: [function(require, module, exports) {
        "use strict";
        module.exports = function(n, o) {
            return n !== o && ("contains" in n ? n.contains(o) : !!(n.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY))
        }
    }, {}],
    162: [function(require, module, exports) {
        "use strict";
        var isElement = require("@marcom/ac-dom-nodes/isElement"),
            validate = require("./internal/validate"),
            nativeMatches = require("./internal/nativeMatches"),
            matchesSelectorShim = require("./shims/matchesSelector");
        module.exports = function(e, t) {
            return validate.selector(t, !0, "matchesSelector"), !!isElement(e) && (nativeMatches ? nativeMatches.call(e, t) : matchesSelectorShim(e, t))
        }
    }, {
        "./internal/nativeMatches": 159,
        "./internal/validate": 160,
        "./shims/matchesSelector": 164,
        "@marcom/ac-dom-nodes/isElement": 155
    }],
    163: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.slice");
        var validate = require("./internal/validate"),
            querySelectorAllShim = require("./shims/querySelectorAll"),
            querySelectorAllAvailable = "querySelectorAll" in document;
        module.exports = function(e, l) {
            return l = l || document, validate.parentNode(l, !0, "querySelectorAll", "context"), validate.selector(e, !0, "querySelectorAll"), querySelectorAllAvailable ? Array.prototype.slice.call(l.querySelectorAll(e)) : querySelectorAllShim(e, l)
        }
    }, {
        "./internal/validate": 160,
        "./shims/querySelectorAll": 165,
        "@marcom/ac-polyfills/Array/prototype.slice": 167
    }],
    164: [function(require, module, exports) {
        "use strict";
        var querySelectorAll = require("../querySelectorAll");
        module.exports = function(e, r) {
            var t, l = e.parentNode || document,
                u = querySelectorAll(r, l);
            for (t = 0; t < u.length; t++)
                if (u[t] === e) return !0;
            return !1
        }
    }, {
        "../querySelectorAll": 163
    }],
    165: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.indexOf");
        var isElement = require("@marcom/ac-dom-nodes/isElement"),
            isDocumentFragment = require("@marcom/ac-dom-nodes/isDocumentFragment"),
            removeElement = require("@marcom/ac-dom-nodes/remove"),
            COLLECTION_PREFIX = "_ac_qsa_",
            isElementInContext = function(e, t) {
                var n;
                if (t === document) return !0;
                for (n = e;
                    (n = n.parentNode) && isElement(n);)
                    if (n === t) return !0;
                return !1
            },
            recalcStyles = function(e) {
                "recalc" in e ? e.recalc(!1) : document.recalc(!1), window.scrollBy(0, 0)
            };
        module.exports = function(e, t) {
            var n, r = document.createElement("style"),
                c = COLLECTION_PREFIX + (Math.random() + "").slice(-6),
                o = [];
            for (t = t || document, document[c] = [], isDocumentFragment(t) ? t.appendChild(r) : document.documentElement.firstChild.appendChild(r), r.styleSheet.cssText = "*{display:recalc;}" + e + '{ac-qsa:expression(document["' + c + '"] && document["' + c + '"].push(this));}', recalcStyles(t); document[c].length;)(n = document[c].shift()).style.removeAttribute("ac-qsa"), -1 === o.indexOf(n) && isElementInContext(n, t) && o.push(n);
            return document[c] = null, removeElement(r), recalcStyles(t), o
        }
    }, {
        "@marcom/ac-dom-nodes/isDocumentFragment": 154,
        "@marcom/ac-dom-nodes/isElement": 155,
        "@marcom/ac-dom-nodes/remove": 157,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 166
    }],
    166: [function(require, module, exports) {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(r, t) {
            var e = t || 0,
                i = 0;
            if (e < 0 && (e = this.length + t - 1) < 0) throw "Wrapped past beginning of array while looking up a negative start index.";
            for (i = 0; i < this.length; i++)
                if (this[i] === r) return i;
            return -1
        })
    }, {}],
    167: [function(require, module, exports) {
        ! function() {
            "use strict";
            var t = Array.prototype.slice;
            try {
                t.call(document.documentElement)
            } catch (r) {
                Array.prototype.slice = function(r, e) {
                    if (e = void 0 !== e ? e : this.length, "[object Array]" === Object.prototype.toString.call(this)) return t.call(this, r, e);
                    var i, c, o = [],
                        n = this.length,
                        a = r || 0,
                        h = e || n;
                    if (e < 0 && (h = n + e), (c = h - (a = a >= 0 ? a : n + a)) > 0)
                        if (o = new Array(c), this.charAt)
                            for (i = 0; i < c; i++) o[i] = this.charAt(a + i);
                        else
                            for (i = 0; i < c; i++) o[i] = this[a + i];
                    return o
                }
            }
        }()
    }, {}],
    168: [function(require, module, exports) {
        "use strict";
        var navigatorObj = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        module.exports = require("./parseUserAgent")(navigatorObj)
    }, {
        "./parseUserAgent": 171
    }],
    169: [function(require, module, exports) {
        "use strict";
        module.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                version: {
                    name: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    name: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }, {}],
    170: [function(require, module, exports) {
        "use strict";
        module.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(e) {
                    return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(e) {
                    return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(e) {
                    return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var e = !1;
                    return document.documentMode && (e = parseInt(document.documentMode, 10)), e
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }],
            os: [{
                name: "windows",
                test: function(e) {
                    return e.platform.indexOf("Win") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(e) {
                    return e.platform.indexOf("Mac") > -1
                }
            }, {
                name: "ios",
                test: function(e) {
                    return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(e) {
                    return e.platform.indexOf("Linux") > -1 && -1 === e.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }, {}],
    171: [function(require, module, exports) {
        "use strict";
        var defaults = require("./defaults"),
            dictionary = require("./dictionary");

        function _matchVersionStrRegExp(e) {
            return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
        }

        function _parseVersion(e, r) {
            if ("function" == typeof e.parseVersion) return e.parseVersion(r);
            var n = e.version || e.userAgent;
            "string" == typeof n && (n = [n]);
            for (var t, s = n.length, o = 0; o < s; o++)
                if ((t = r.match(_matchVersionStrRegExp(n[o]))) && t.length > 1) return t[1].replace(/_/g, ".")
        }

        function _parseUserAgent(e, r, n) {
            for (var t, s, o = e.length, i = 0; i < o; i++)
                if ("function" == typeof e[i].test ? !0 === e[i].test(n) && (t = e[i].name) : n.ua.indexOf(e[i].userAgent) > -1 && (t = e[i].name), t) {
                    if (r[t] = !0, "string" == typeof(s = _parseVersion(e[i], n.ua))) {
                        var a = s.split(".");
                        r.version.name = s, a && a.length > 0 && (r.version.major = parseInt(a[0] || 0), r.version.minor = parseInt(a[1] || 0), r.version.patch = parseInt(a[2] || 0))
                    } else "edge" === t && (r.version.name = "12.0.0", r.version.major = "12", r.version.minor = "0", r.version.patch = "0");
                    return "function" == typeof e[i].parseDocumentMode && (r.version.documentMode = e[i].parseDocumentMode()), r
                }
            return r
        }

        function parseUserAgent(e) {
            var r = {};
            return r.browser = _parseUserAgent(dictionary.browser, defaults.browser, e), r.os = _parseUserAgent(dictionary.os, defaults.os, e), r
        }
        module.exports = parseUserAgent
    }, {
        "./defaults": 169,
        "./dictionary": 170
    }],
    172: [function(require, module, exports) {
        "use strict";
        var initialize = require("./appmeasurement-wrapper/initialize"),
            plugins = require("./appmeasurement-wrapper/plugins"),
            ActivityMapCollection = require("./appmeasurement-wrapper/plugins/activitymap/ActivityMapCollection");
        module.exports = {
            init: initialize,
            plugins: plugins,
            ActivityMapCollection: ActivityMapCollection
        }
    }, {
        "./appmeasurement-wrapper/initialize": 176,
        "./appmeasurement-wrapper/plugins": 177,
        "./appmeasurement-wrapper/plugins/activitymap/ActivityMapCollection": 179
    }],
    173: [function(require, module, exports) {
        ! function() {
            function e(e) {
                var t, a, i, n, r, o = window.s_c_il,
                    c = e.split(","),
                    s = 0;
                if (o)
                    for (a = 0; !s && a < o.length;) {
                        if ("s_c" == (t = o[a])._c && (t.account || t.oun))
                            if (t.account && t.account == e) s = 1;
                            else
                                for (i = t.account ? t.account : t.oun, i = t.allAccounts ? t.allAccounts : i.split(","), n = 0; n < c.length; n++)
                                    for (r = 0; r < i.length; r++) c[n] == i[r] && (s = 1);
                        a++
                    }
                return s ? t.setAccount && t.setAccount(e) : t = new AppMeasurement(e), t
            }

            function t() {
                var t, a, i, n = window,
                    r = n.s_giq;
                if (r)
                    for (t = 0; t < r.length; t++)(i = e((a = r[t]).oun)).setAccount(a.un), i.setTagContainer(a.tagContainerName);
                n.s_giq = 0
            }
            window.AppMeasurement_Module_ActivityMap = function(e) {
                function t(e, t) {
                    var a, i, n;
                    if (e && t && (a = r.c[t] || (r.c[t] = t.split(","))))
                        for (n = 0; n < a.length && (i = a[n++]);)
                            if (-1 < e.indexOf(i)) return null;
                    return c = 1, e
                }

                function a(t, a, i, n, r) {
                    var o, c, s, l;
                    if ((t.dataset && (c = t.dataset[a]) ? o = c : t.getAttribute && ((c = t.getAttribute("data-" + i)) ? o = c : (c = t.getAttribute(i)) && (o = c)), !o && e.useForcedLinkTracking && r && (o = "", a = t.onclick ? "" + t.onclick : "")) && 0 <= (i = a.indexOf(n))) {
                        for (i += 10; i < a.length && 0 <= "= \t\r\n".indexOf(a.charAt(i));) i++;
                        if (i < a.length) {
                            for (c = i, s = l = 0; c < a.length && (";" != a.charAt(c) || s);) s ? a.charAt(c) != s || l ? l = "\\" == a.charAt(c) ? !l : 0 : s = 0 : '"' != (s = a.charAt(c)) && "'" != s && (s = 0), c++;
                            (a = a.substring(i, c)) && (t.e = new Function("s", "var e;try{s.w." + n + "=" + a + "}catch(e){}"), t.e(e))
                        }
                    }
                    return o || r && e.w[n]
                }

                function i(e, a, i) {
                    var o;
                    return (o = r[a](e, i)) && (c ? (c = 0, o) : t(n(o), r[a + "Exclusions"]))
                }

                function n(e) {
                    if (null == e || null == e) return e;
                    try {
                        return e.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]{1,}", "mg"), " ").substring(0, 254)
                    } catch (e) {}
                }
                var r = this;
                r.s = e;
                var o = window;
                o.s_c_in || (o.s_c_il = [], o.s_c_in = 0), r._il = o.s_c_il, r._in = o.s_c_in, r._il[r._in] = r, o.s_c_in++, r._c = "s_m", r.c = {};
                var c = 0,
                    s = {
                        SCRIPT: 1,
                        STYLE: 1,
                        LINK: 1,
                        CANVAS: 1
                    };
                r._g = function() {
                    var t, a, n, r = e.contextData,
                        o = e.linkObject;
                    (t = e.pageName || e.pageURL) && (a = i(o, "link", e.linkName)) && (n = i(o, "region")) && (r["a.activitymap.page"] = t.substring(0, 255), r["a.activitymap.link"] = 128 < a.length ? a.substring(0, 128) : a, r["a.activitymap.region"] = 127 < n.length ? n.substring(0, 127) : n, r["a.activitymap.pageIDType"] = e.pageName ? 1 : 0)
                }, r.link = function(e, i) {
                    var o;
                    if (i) o = t(n(i), r.linkExclusions);
                    else if ((o = e) && !(o = a(e, "sObjectId", "s-object-id", "s_objectID", 1))) {
                        var c, l;
                        (l = t(n(e.innerText || e.textContent), r.linkExclusions)) || (function e(t, a, i) {
                            var n;
                            if (t && !(1 === (n = t.nodeType) && (n = t.nodeName) && (n = n.toUpperCase()) && s[n]) && (1 === t.nodeType && (n = t.nodeValue) && (a[a.length] = n), i.a || i.t || i.s || !t.getAttribute || ((n = t.getAttribute("alt")) ? i.a = n : (n = t.getAttribute("title")) ? i.t = n : "IMG" == ("" + t.nodeName).toUpperCase() && (n = t.getAttribute("src") || t.src) && (i.s = n)), (n = t.childNodes) && n.length))
                                for (t = 0; t < n.length; t++) e(n[t], a, i)
                        }(e, c = [], o = {
                            a: void 0,
                            t: void 0,
                            s: void 0
                        }), (l = t(n(c.join("")))) || (l = t(n(o.a ? o.a : o.t ? o.t : o.s ? o.s : void 0))) || !(c = (c = e.tagName) && c.toUpperCase ? c.toUpperCase() : "") || ("INPUT" == c || "SUBMIT" == c && e.value ? l = t(n(e.value)) : "IMAGE" == c && e.src && (l = t(n(e.src))))), o = l
                    }
                    return o
                }, r.region = function(e) {
                    for (var t, i = r.regionIDAttribute || "id"; e && (e = e.parentNode);) {
                        if (t = a(e, i, i, i)) return t;
                        if ("BODY" == e.nodeName) return "BODY"
                    }
                }
            }, window.AppMeasurement = function(e) {
                var t = this;
                t.version = "2.7.0";
                var a = window;
                a.s_c_in || (a.s_c_il = [], a.s_c_in = 0), t._il = a.s_c_il, t._in = a.s_c_in, t._il[t._in] = t, a.s_c_in++, t._c = "s_c";
                var i = a.AppMeasurement.Rb;
                i || (i = null);
                var n, r, o, c = a;
                try {
                    for (n = c.parent, r = c.location; n && n.location && r && "" + n.location != "" + r && c.location && "" + n.location != "" + c.location && n.location.host == r.host;) n = (c = n).parent
                } catch (e) {}
                t.F = function(e) {
                    try {
                        console.log(e)
                    } catch (e) {}
                }, t.Ma = function(e) {
                    return "" + parseInt(e) == "" + e
                }, t.replace = function(e, t, a) {
                    return !e || 0 > e.indexOf(t) ? e : e.split(t).join(a)
                }, t.escape = function(e) {
                    var a, i;
                    if (!e) return e;
                    for (e = encodeURIComponent(e), a = 0; 7 > a; a++) i = "+~!*()'".substring(a, a + 1), 0 <= e.indexOf(i) && (e = t.replace(e, i, "%" + i.charCodeAt(0).toString(16).toUpperCase()));
                    return e
                }, t.unescape = function(e) {
                    if (!e) return e;
                    e = 0 <= e.indexOf("+") ? t.replace(e, "+", " ") : e;
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {}
                    return unescape(e)
                }, t.yb = function() {
                    var e, i = a.location.hostname,
                        n = t.fpCookieDomainPeriods;
                    if (n || (n = t.cookieDomainPeriods), i && !t.Ea && !/^[0-9.]+$/.test(i) && (n = 2 < (n = n ? parseInt(n) : 2) ? n : 2, 0 <= (e = i.lastIndexOf(".")))) {
                        for (; 0 <= e && 1 < n;) e = i.lastIndexOf(".", e - 1), n--;
                        t.Ea = 0 < e ? i.substring(e) : i
                    }
                    return t.Ea
                }, t.c_r = t.cookieRead = function(e) {
                    e = t.escape(e);
                    var a = " " + t.d.cookie,
                        i = a.indexOf(" " + e + "="),
                        n = 0 > i ? i : a.indexOf(";", i);
                    return "[[B]]" != (e = 0 > i ? "" : t.unescape(a.substring(i + 2 + e.length, 0 > n ? a.length : n))) ? e : ""
                }, t.c_w = t.cookieWrite = function(e, a, i) {
                    var n, r = t.yb(),
                        o = t.cookieLifetime;
                    return a = "" + a, o = o ? ("" + o).toUpperCase() : "", i && "SESSION" != o && "NONE" != o && ((n = "" != a ? parseInt(o || 0) : -60) ? (i = new Date).setTime(i.getTime() + 1e3 * n) : 1 == i && (n = (i = new Date).getYear(), i.setYear(n + 5 + (1900 > n ? 1900 : 0)))), e && "NONE" != o ? (t.d.cookie = t.escape(e) + "=" + t.escape("" != a ? a : "[[B]]") + "; path=/;" + (i && "SESSION" != o ? " expires=" + i.toUTCString() + ";" : "") + (r ? " domain=" + r + ";" : ""), t.cookieRead(e) == a) : 0
                }, t.ub = function() {
                    var e = t.Util.getIeVersion();
                    "number" == typeof e && 10 > e && (t.unsupportedBrowser = !0, t.jb(t, function() {}))
                }, t.jb = function(e, t) {
                    for (var a in e) e.hasOwnProperty(a) && "function" == typeof e[a] && (e[a] = t)
                }, t.L = [], t.ia = function(e, a, i) {
                    if (t.Fa) return 0;
                    t.maxDelay || (t.maxDelay = 250);
                    var n = 0,
                        r = (new Date).getTime() + t.maxDelay,
                        o = t.d.visibilityState,
                        c = ["webkitvisibilitychange", "visibilitychange"];
                    if (o || (o = t.d.webkitVisibilityState), o && "prerender" == o) {
                        if (!t.ja)
                            for (t.ja = 1, i = 0; i < c.length; i++) t.d.addEventListener(c[i], function() {
                                var e = t.d.visibilityState;
                                e || (e = t.d.webkitVisibilityState), "visible" == e && (t.ja = 0, t.delayReady())
                            });
                        n = 1, r = 0
                    } else i || t.p("_d") && (n = 1);
                    return n && (t.L.push({
                        m: e,
                        a: a,
                        t: r
                    }), t.ja || setTimeout(t.delayReady, t.maxDelay)), n
                }, t.delayReady = function() {
                    var e, a = (new Date).getTime(),
                        i = 0;
                    for (t.p("_d") ? i = 1 : t.xa(); 0 < t.L.length;) {
                        if (e = t.L.shift(), i && !e.t && e.t > a) {
                            t.L.unshift(e), setTimeout(t.delayReady, parseInt(t.maxDelay / 2));
                            break
                        }
                        t.Fa = 1, t[e.m].apply(t, e.a), t.Fa = 0
                    }
                }, t.setAccount = t.sa = function(e) {
                    var a, i;
                    if (!t.ia("setAccount", arguments))
                        if (t.account = e, t.allAccounts)
                            for (a = t.allAccounts.concat(e.split(",")), t.allAccounts = [], a.sort(), i = 0; i < a.length; i++) 0 != i && a[i - 1] == a[i] || t.allAccounts.push(a[i]);
                        else t.allAccounts = e.split(",")
                }, t.foreachVar = function(e, a) {
                    var i, n, r, o, c = "";
                    for (r = n = "", t.lightProfileID ? (i = t.P, (c = t.lightTrackVars) && (c = "," + c + "," + t.na.join(",") + ",")) : (i = t.g, (t.pe || t.linkType) && (c = t.linkTrackVars, n = t.linkTrackEvents, t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[r] && (c = t[r].Pb, n = t[r].Ob))), c && (c = "," + c + "," + t.H.join(",") + ","), n && c && (c += ",events,")), a && (a = "," + a + ","), n = 0; n < i.length; n++) r = i[n], (o = t[r]) && (!c || 0 <= c.indexOf("," + r + ",")) && (!a || 0 <= a.indexOf("," + r + ",")) && e(r, o)
                }, t.r = function(e, a, i, n, r) {
                    var o, c, s, l, u = "",
                        f = 0;
                    if ("contextData" == e && (e = "c"), a) {
                        for (o in a)
                            if (!(Object.prototype[o] || r && o.substring(0, r.length) != r) && a[o] && (!i || 0 <= i.indexOf("," + (n ? n + "." : "") + o + ","))) {
                                if (s = !1, f)
                                    for (c = 0; c < f.length; c++) o.substring(0, f[c].length) == f[c] && (s = !0);
                                if (!s && ("" == u && (u += "&" + e + "."), c = a[o], r && (o = o.substring(r.length)), 0 < o.length))
                                    if (0 < (s = o.indexOf("."))) s = (r || "") + (c = o.substring(0, s)) + ".", f || (f = []), f.push(s), u += t.r(c, a, i, n, s);
                                    else if ("boolean" == typeof c && (c = c ? "true" : "false"), c) {
                                    if ("retrieveLightData" == n && 0 > r.indexOf(".contextData.")) switch (s = o.substring(0, 4), l = o.substring(4), o) {
                                        case "transactionID":
                                            o = "xact";
                                            break;
                                        case "channel":
                                            o = "ch";
                                            break;
                                        case "campaign":
                                            o = "v0";
                                            break;
                                        default:
                                            t.Ma(l) && ("prop" == s ? o = "c" + l : "eVar" == s ? o = "v" + l : "list" == s ? o = "l" + l : "hier" == s && (o = "h" + l, c = c.substring(0, 255)))
                                    }
                                    u += "&" + t.escape(o) + "=" + t.escape(c)
                                }
                            }
                        "" != u && (u += "&." + e)
                    }
                    return u
                }, t.usePostbacks = 0, t.Bb = function() {
                    var e, a, n, r, o, c, s, l, u = "",
                        f = "",
                        p = "",
                        g = r = "";
                    if (t.lightProfileID ? (e = t.P, (f = t.lightTrackVars) && (f = "," + f + "," + t.na.join(",") + ",")) : (e = t.g, (t.pe || t.linkType) && (f = t.linkTrackVars, p = t.linkTrackEvents, t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[r] && (f = t[r].Pb, p = t[r].Ob))), f && (f = "," + f + "," + t.H.join(",") + ","), p && (p = "," + p + ",", f && (f += ",events,")), t.events2 && (g += ("" != g ? "," : "") + t.events2)), t.visitor && t.visitor.getCustomerIDs) {
                        if (r = i, o = t.visitor.getCustomerIDs())
                            for (a in o) Object.prototype[a] || "object" == typeof(n = o[a]) && (r || (r = {}), n.id && (r[a + ".id"] = n.id), n.authState && (r[a + ".as"] = n.authState));
                        r && (u += t.r("cid", r))
                    }
                    for (t.AudienceManagement && t.AudienceManagement.isReady() && (u += t.r("d", t.AudienceManagement.getEventCallConfigParams())), a = 0; a < e.length; a++) {
                        if (r = e[a], o = t[r], n = r.substring(0, 4), c = r.substring(4), o || ("events" == r && g ? (o = g, g = "") : "marketingCloudOrgID" == r && t.visitor && (o = t.visitor.marketingCloudOrgID)), o && (!f || 0 <= f.indexOf("," + r + ","))) {
                            switch (r) {
                                case "customerPerspective":
                                    r = "cp";
                                    break;
                                case "marketingCloudOrgID":
                                    r = "mcorgid";
                                    break;
                                case "supplementalDataID":
                                    r = "sdid";
                                    break;
                                case "timestamp":
                                    r = "ts";
                                    break;
                                case "dynamicVariablePrefix":
                                    r = "D";
                                    break;
                                case "visitorID":
                                    r = "vid";
                                    break;
                                case "marketingCloudVisitorID":
                                    r = "mid";
                                    break;
                                case "analyticsVisitorID":
                                    r = "aid";
                                    break;
                                case "audienceManagerLocationHint":
                                    r = "aamlh";
                                    break;
                                case "audienceManagerBlob":
                                    r = "aamb";
                                    break;
                                case "authState":
                                    r = "as";
                                    break;
                                case "pageURL":
                                    r = "g", 255 < o.length && (t.pageURLRest = o.substring(255), o = o.substring(0, 255));
                                    break;
                                case "pageURLRest":
                                    r = "-g";
                                    break;
                                case "referrer":
                                    r = "r";
                                    break;
                                case "vmk":
                                case "visitorMigrationKey":
                                    r = "vmt";
                                    break;
                                case "visitorMigrationServer":
                                    r = "vmf", t.ssl && t.visitorMigrationServerSecure && (o = "");
                                    break;
                                case "visitorMigrationServerSecure":
                                    r = "vmf", !t.ssl && t.visitorMigrationServer && (o = "");
                                    break;
                                case "charSet":
                                    r = "ce";
                                    break;
                                case "visitorNamespace":
                                    r = "ns";
                                    break;
                                case "cookieDomainPeriods":
                                    r = "cdp";
                                    break;
                                case "cookieLifetime":
                                    r = "cl";
                                    break;
                                case "variableProvider":
                                    r = "vvp";
                                    break;
                                case "currencyCode":
                                    r = "cc";
                                    break;
                                case "channel":
                                    r = "ch";
                                    break;
                                case "transactionID":
                                    r = "xact";
                                    break;
                                case "campaign":
                                    r = "v0";
                                    break;
                                case "latitude":
                                    r = "lat";
                                    break;
                                case "longitude":
                                    r = "lon";
                                    break;
                                case "resolution":
                                    r = "s";
                                    break;
                                case "colorDepth":
                                    r = "c";
                                    break;
                                case "javascriptVersion":
                                    r = "j";
                                    break;
                                case "javaEnabled":
                                    r = "v";
                                    break;
                                case "cookiesEnabled":
                                    r = "k";
                                    break;
                                case "browserWidth":
                                    r = "bw";
                                    break;
                                case "browserHeight":
                                    r = "bh";
                                    break;
                                case "connectionType":
                                    r = "ct";
                                    break;
                                case "homepage":
                                    r = "hp";
                                    break;
                                case "events":
                                    if (g && (o += ("" != o ? "," : "") + g), p)
                                        for (c = o.split(","), o = "", n = 0; n < c.length; n++) 0 <= (l = (s = c[n]).indexOf("=")) && (s = s.substring(0, l)), 0 <= (l = s.indexOf(":")) && (s = s.substring(0, l)), 0 <= p.indexOf("," + s + ",") && (o += (o ? "," : "") + c[n]);
                                    break;
                                case "events2":
                                    o = "";
                                    break;
                                case "contextData":
                                    u += t.r("c", t[r], f, r), o = "";
                                    break;
                                case "lightProfileID":
                                    r = "mtp";
                                    break;
                                case "lightStoreForSeconds":
                                    r = "mtss", t.lightProfileID || (o = "");
                                    break;
                                case "lightIncrementBy":
                                    r = "mti", t.lightProfileID || (o = "");
                                    break;
                                case "retrieveLightProfiles":
                                    r = "mtsr";
                                    break;
                                case "deleteLightProfiles":
                                    r = "mtsd";
                                    break;
                                case "retrieveLightData":
                                    t.retrieveLightProfiles && (u += t.r("mts", t[r], f, r)), o = "";
                                    break;
                                default:
                                    t.Ma(c) && ("prop" == n ? r = "c" + c : "eVar" == n ? r = "v" + c : "list" == n ? r = "l" + c : "hier" == n && (r = "h" + c, o = o.substring(0, 255)))
                            }
                            o && (u += "&" + r + "=" + ("pev" != r.substring(0, 3) ? t.escape(o) : o))
                        }
                        "pev3" == r && t.e && (u += t.e)
                    }
                    return u
                }, t.D = function(e) {
                    var t = e.tagName;
                    return "undefined" != "" + e.Ub || "undefined" != "" + e.Kb && "HTML" != ("" + e.Kb).toUpperCase() ? "" : ("SHAPE" == (t = t && t.toUpperCase ? t.toUpperCase() : "") && (t = ""), t && (("INPUT" == t || "BUTTON" == t) && e.type && e.type.toUpperCase ? t = e.type.toUpperCase() : !t && e.href && (t = "A")), t)
                }, t.Ia = function(e) {
                    var t, i, n, r = a.location,
                        o = e.href ? e.href : "";
                    return t = o.indexOf(":"), i = o.indexOf("?"), n = o.indexOf("/"), o && (0 > t || 0 <= i && t > i || 0 <= n && t > n) && (i = e.protocol && 1 < e.protocol.length ? e.protocol : r.protocol ? r.protocol : "", t = r.pathname.lastIndexOf("/"), o = (i ? i + "//" : "") + (e.host ? e.host : r.host ? r.host : "") + ("/" != o.substring(0, 1) ? r.pathname.substring(0, 0 > t ? 0 : t) + "/" : "") + o), o
                }, t.M = function(e) {
                    var a, i, n = t.D(e),
                        r = "",
                        o = 0;
                    return n && (a = e.protocol, i = e.onclick, !e.href || "A" != n && "AREA" != n || i && a && !(0 > a.toLowerCase().indexOf("javascript")) ? i ? (r = t.replace(t.replace(t.replace(t.replace("" + i, "\r", ""), "\n", ""), "\t", ""), " ", ""), o = 2) : "INPUT" == n || "SUBMIT" == n ? (e.value ? r = e.value : e.innerText ? r = e.innerText : e.textContent && (r = e.textContent), o = 3) : "IMAGE" == n && e.src && (r = e.src) : r = t.Ia(e), r) ? {
                        id: r.substring(0, 100),
                        type: o
                    } : 0
                }, t.Sb = function(e) {
                    for (var a = t.D(e), i = t.M(e); e && !i && "BODY" != a;)(e = e.parentElement ? e.parentElement : e.parentNode) && (a = t.D(e), i = t.M(e));
                    return i && "BODY" != a || (e = 0), e && (0 <= (a = e.onclick ? "" + e.onclick : "").indexOf(".tl(") || 0 <= a.indexOf(".trackLink(")) && (e = 0), e
                }, t.Jb = function() {
                    var e, i, n, r, o = t.linkObject,
                        c = t.linkType,
                        s = t.linkURL;
                    if (t.oa = 1, o || (t.oa = 0, o = t.clickObject), o) {
                        for (e = t.D(o), i = t.M(o); o && !i && "BODY" != e;)(o = o.parentElement ? o.parentElement : o.parentNode) && (e = t.D(o), i = t.M(o));
                        if (i && "BODY" != e || (o = 0), o && !t.linkObject) {
                            var l = o.onclick ? "" + o.onclick : "";
                            (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) && (o = 0)
                        }
                    } else t.oa = 1;
                    if (!s && o && (s = t.Ia(o)), s && !t.linkLeaveQueryString && (0 <= (n = s.indexOf("?")) && (s = s.substring(0, n))), !c && s) {
                        var u, f = 0,
                            p = 0;
                        if (t.trackDownloadLinks && t.linkDownloadFileTypes)
                            for (n = (l = s.toLowerCase()).indexOf("?"), r = l.indexOf("#"), 0 <= n ? 0 <= r && r < n && (n = r) : n = r, 0 <= n && (l = l.substring(0, n)), n = t.linkDownloadFileTypes.toLowerCase().split(","), r = 0; r < n.length; r++)(u = n[r]) && l.substring(l.length - (u.length + 1)) == "." + u && (c = "d");
                        if (t.trackExternalLinks && !c && (l = s.toLowerCase(), t.La(l) && (t.linkInternalFilters || (t.linkInternalFilters = a.location.hostname), n = 0, t.linkExternalFilters ? (n = t.linkExternalFilters.toLowerCase().split(","), f = 1) : t.linkInternalFilters && (n = t.linkInternalFilters.toLowerCase().split(",")), n))) {
                            for (r = 0; r < n.length; r++) u = n[r], 0 <= l.indexOf(u) && (p = 1);
                            p ? f && (c = "e") : f || (c = "e")
                        }
                    }
                    t.linkObject = o, t.linkURL = s, t.linkType = c, (t.trackClickMap || t.trackInlineStats) && (t.e = "", o && (c = t.pageName, s = 1, o = o.sourceIndex, c || (c = t.pageURL, s = 0), a.s_objectID && (i.id = a.s_objectID, o = i.type = 1), c && i && i.id && e && (t.e = "&pid=" + t.escape(c.substring(0, 255)) + (s ? "&pidt=" + s : "") + "&oid=" + t.escape(i.id.substring(0, 100)) + (i.type ? "&oidt=" + i.type : "") + "&ot=" + e + (o ? "&oi=" + o : ""))))
                }, t.Cb = function() {
                    var e = t.oa,
                        a = t.linkType,
                        i = t.linkURL,
                        n = t.linkName;
                    if (a && (i || n) && ("d" != (a = a.toLowerCase()) && "e" != a && (a = "o"), t.pe = "lnk_" + a, t.pev1 = i ? t.escape(i) : "", t.pev2 = n ? t.escape(n) : "", e = 1), t.abort && (e = 0), t.trackClickMap || t.trackInlineStats || t.ActivityMap) {
                        a = {}, i = 0;
                        var r, o, c, s = (l = t.cookieRead("s_sq")) ? l.split("&") : 0,
                            l = 0;
                        if (s)
                            for (r = 0; r < s.length; r++) o = s[r].split("="), n = t.unescape(o[0]).split(","), a[o = t.unescape(o[1])] = n;
                        for (c in n = t.account.split(","), r = {}, t.contextData) c && !Object.prototype[c] && "a.activitymap." == c.substring(0, 14) && (r[c] = t.contextData[c], t.contextData[c] = "");
                        if (t.e = t.r("c", r) + (t.e ? t.e : ""), e || t.e) {
                            for (o in e && !t.e && (l = 1), a)
                                if (!Object.prototype[o])
                                    for (c = 0; c < n.length; c++)
                                        for (l && ((s = a[o].join(",")) == t.account && (t.e += ("&" != o.charAt(0) ? "&" : "") + o, a[o] = [], i = 1)), r = 0; r < a[o].length; r++)(s = a[o][r]) == n[c] && (l && (t.e += "&u=" + t.escape(s) + ("&" != o.charAt(0) ? "&" : "") + o + "&u=0"), a[o].splice(r, 1), i = 1);
                            if (e || (i = 1), i) {
                                for (o in l = "", r = 2, !e && t.e && (l = t.escape(n.join(",")) + "=" + t.escape(t.e), r = 1), a) !Object.prototype[o] && 0 < r && 0 < a[o].length && (l += (l ? "&" : "") + t.escape(a[o].join(",")) + "=" + t.escape(o), r--);
                                t.cookieWrite("s_sq", l)
                            }
                        }
                    }
                    return e
                }, t.Db = function() {
                    if (!t.Nb) {
                        var e, a, i, n, r = new Date,
                            o = c.location,
                            s = a = e = "",
                            l = "1.2",
                            u = t.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                            f = "",
                            p = "";
                        if (r.setUTCDate && (l = "1.3", (0).toPrecision && (l = "1.5", (r = []).forEach))) {
                            l = "1.6", a = 0, e = {};
                            try {
                                (a = new Iterator(e)).next && (l = "1.7", r.reduce && ((l = "1.8").trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5")))))
                            } catch (e) {}
                        }
                        e = screen.width + "x" + screen.height, s = navigator.javaEnabled() ? "Y" : "N", a = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, i = t.w.innerWidth ? t.w.innerWidth : t.d.documentElement.offsetWidth, n = t.w.innerHeight ? t.w.innerHeight : t.d.documentElement.offsetHeight;
                        try {
                            t.b.addBehavior("#default#homePage"), f = t.b.Tb(o) ? "Y" : "N"
                        } catch (e) {}
                        try {
                            t.b.addBehavior("#default#clientCaps"), p = t.b.connectionType
                        } catch (e) {}
                        t.resolution = e, t.colorDepth = a, t.javascriptVersion = l, t.javaEnabled = s, t.cookiesEnabled = u, t.browserWidth = i, t.browserHeight = n, t.connectionType = p, t.homepage = f, t.Nb = 1
                    }
                }, t.Q = {}, t.loadModule = function(e, i) {
                    var n = t.Q[e];
                    if (!n) {
                        n = a["AppMeasurement_Module_" + e] ? new a["AppMeasurement_Module_" + e](t) : {}, t.Q[e] = t[e] = n, n.eb = function() {
                            return n.ib
                        }, n.kb = function(a) {
                            (n.ib = a) && (t[e + "_onLoad"] = a, t.ia(e + "_onLoad", [t, n], 1) || a(t, n))
                        };
                        try {
                            Object.defineProperty ? Object.defineProperty(n, "onLoad", {
                                get: n.eb,
                                set: n.kb
                            }) : n._olc = 1
                        } catch (e) {
                            n._olc = 1
                        }
                    }
                    i && (t[e + "_onLoad"] = i, t.ia(e + "_onLoad", [t, n], 1) || i(t, n))
                }, t.p = function(e) {
                    var a, i;
                    for (a in t.Q)
                        if (!Object.prototype[a] && (i = t.Q[a]) && (i._olc && i.onLoad && (i._olc = 0, i.onLoad(t, i)), i[e] && i[e]())) return 1;
                    return 0
                }, t.Fb = function() {
                    var e = Math.floor(1e13 * Math.random()),
                        a = t.visitorSampling,
                        i = t.visitorSamplingGroup,
                        n = (i = "s_vsn_" + (t.visitorNamespace ? t.visitorNamespace : t.account) + (i ? "_" + i : ""), t.cookieRead(i));
                    if (a) {
                        if (a *= 100, n && (n = parseInt(n)), !n) {
                            if (!t.cookieWrite(i, e)) return 0;
                            n = e
                        }
                        if (n % 1e4 > a) return 0
                    }
                    return 1
                }, t.R = function(e, a) {
                    var i, n, r, o, c, s;
                    for (i = 0; 2 > i; i++)
                        for (n = 0 < i ? t.Aa : t.g, r = 0; r < n.length; r++)
                            if ((c = e[o = n[r]]) || e["!" + o]) {
                                if (!a && ("contextData" == o || "retrieveLightData" == o) && t[o])
                                    for (s in t[o]) c[s] || (c[s] = t[o][s]);
                                t[o] = c
                            }
                }, t.Va = function(e, a) {
                    var i, n, r, o;
                    for (i = 0; 2 > i; i++)
                        for (n = 0 < i ? t.Aa : t.g, r = 0; r < n.length; r++) e[o = n[r]] = t[o], a || e[o] || (e["!" + o] = 1)
                }, t.xb = function(e) {
                    var t, a, i, n, r, o, c = 0,
                        s = "",
                        l = "";
                    if (e && 255 < e.length && (0 < (a = (t = "" + e).indexOf("?")) && (o = t.substring(a + 1), i = 0, "http://" == (n = (t = t.substring(0, a)).toLowerCase()).substring(0, 7) ? i += 7 : "https://" == n.substring(0, 8) && (i += 8), 0 < (a = n.indexOf("/", i)) && (n = n.substring(i, a), r = t.substring(a), t = t.substring(0, a), 0 <= n.indexOf("google") ? c = ",q,ie,start,search_key,word,kw,cd," : 0 <= n.indexOf("yahoo.co") && (c = ",p,ei,"), c && o)))) {
                        if ((e = o.split("&")) && 1 < e.length) {
                            for (i = 0; i < e.length; i++) 0 < (a = (n = e[i]).indexOf("=")) && 0 <= c.indexOf("," + n.substring(0, a) + ",") ? s += (s ? "&" : "") + n : l += (l ? "&" : "") + n;
                            s && l ? o = s + "&" + l : l = ""
                        }
                        e = t + (0 < (a = 253 - (o.length - l.length) - t.length) ? r.substring(0, a) : "") + "?" + o
                    }
                    return e
                }, t.ab = function(e) {
                    var a = t.d.visibilityState,
                        i = ["webkitvisibilitychange", "visibilitychange"];
                    if (a || (a = t.d.webkitVisibilityState), a && "prerender" == a) {
                        if (e)
                            for (a = 0; a < i.length; a++) t.d.addEventListener(i[a], function() {
                                var a = t.d.visibilityState;
                                a || (a = t.d.webkitVisibilityState), "visible" == a && e()
                            });
                        return !1
                    }
                    return !0
                }, t.ea = !1, t.J = !1, t.mb = function() {
                    t.J = !0, t.j()
                }, t.ca = !1, t.V = !1, t.hb = function(e) {
                    t.marketingCloudVisitorID = e, t.V = !0, t.j()
                }, t.fa = !1, t.W = !1, t.nb = function(e) {
                    t.visitorOptedOut = e, t.W = !0, t.j()
                }, t.Z = !1, t.S = !1, t.Xa = function(e) {
                    t.analyticsVisitorID = e, t.S = !0, t.j()
                }, t.ba = !1, t.U = !1, t.Za = function(e) {
                    t.audienceManagerLocationHint = e, t.U = !0, t.j()
                }, t.aa = !1, t.T = !1, t.Ya = function(e) {
                    t.audienceManagerBlob = e, t.T = !0, t.j()
                }, t.$a = function(e) {
                    return t.maxDelay || (t.maxDelay = 250), !t.p("_d") || (e && setTimeout(function() {
                        e()
                    }, t.maxDelay), !1)
                }, t.da = !1, t.I = !1, t.xa = function() {
                    t.I = !0, t.j()
                }, t.isReadyToTrack = function() {
                    var e, a, n, r = !0,
                        o = t.visitor;
                    return t.ea || t.J || (t.ab(t.mb) ? t.J = !0 : t.ea = !0), !(t.ea && !t.J) && (o && o.isAllowed() && (t.ca || t.marketingCloudVisitorID || !o.getMarketingCloudVisitorID || (t.ca = !0, t.marketingCloudVisitorID = o.getMarketingCloudVisitorID([t, t.hb]), t.marketingCloudVisitorID && (t.V = !0)), t.fa || t.visitorOptedOut || !o.isOptedOut || (t.fa = !0, t.visitorOptedOut = o.isOptedOut([t, t.nb]), t.visitorOptedOut != i && (t.W = !0)), t.Z || t.analyticsVisitorID || !o.getAnalyticsVisitorID || (t.Z = !0, t.analyticsVisitorID = o.getAnalyticsVisitorID([t, t.Xa]), t.analyticsVisitorID && (t.S = !0)), t.ba || t.audienceManagerLocationHint || !o.getAudienceManagerLocationHint || (t.ba = !0, t.audienceManagerLocationHint = o.getAudienceManagerLocationHint([t, t.Za]), t.audienceManagerLocationHint && (t.U = !0)), t.aa || t.audienceManagerBlob || !o.getAudienceManagerBlob || (t.aa = !0, t.audienceManagerBlob = o.getAudienceManagerBlob([t, t.Ya]), t.audienceManagerBlob && (t.T = !0)), r = t.ca && !t.V && !t.marketingCloudVisitorID, o = t.Z && !t.S && !t.analyticsVisitorID, e = t.ba && !t.U && !t.audienceManagerLocationHint, a = t.aa && !t.T && !t.audienceManagerBlob, n = t.fa && !t.W, r = !(r || o || e || a || n)), t.da || t.I || (t.$a(t.xa) ? t.I = !0 : t.da = !0), t.da && !t.I && (r = !1), r)
                }, t.o = i, t.u = 0, t.callbackWhenReadyToTrack = function(e, a, n) {
                    var r;
                    (r = {}).rb = e, r.qb = a, r.ob = n, t.o == i && (t.o = []), t.o.push(r), 0 == t.u && (t.u = setInterval(t.j, 100))
                }, t.j = function() {
                    var e;
                    if (t.isReadyToTrack() && (t.lb(), t.o != i))
                        for (; 0 < t.o.length;)(e = t.o.shift()).qb.apply(e.rb, e.ob)
                }, t.lb = function() {
                    t.u && (clearInterval(t.u), t.u = 0)
                }, t.fb = function(e) {
                    var a, n, r = i,
                        o = i;
                    if (!t.isReadyToTrack()) {
                        if (a = [], e != i)
                            for (n in r = {}, e) r[n] = e[n];
                        return o = {}, t.Va(o, !0), a.push(r), a.push(o), t.callbackWhenReadyToTrack(t, t.track, a), !0
                    }
                    return !1
                }, t.zb = function() {
                    var e, a = t.cookieRead("s_fid"),
                        i = "",
                        n = "";
                    e = 8;
                    var r = 4;
                    if (!a || 0 > a.indexOf("-")) {
                        for (a = 0; 16 > a; a++) e = Math.floor(Math.random() * e), i += "0123456789ABCDEF".substring(e, e + 1), e = Math.floor(Math.random() * r), n += "0123456789ABCDEF".substring(e, e + 1), e = r = 16;
                        a = i + "-" + n
                    }
                    return t.cookieWrite("s_fid", a, 1) || (a = 0), a
                }, t.t = t.track = function(e, i) {
                    var n, r = new Date,
                        o = "s" + Math.floor(r.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
                        s = r.getYear();
                    s = "t=" + t.escape(r.getDate() + "/" + r.getMonth() + "/" + (1900 > s ? s + 1900 : s) + " " + r.getHours() + ":" + r.getMinutes() + ":" + r.getSeconds() + " " + r.getDay() + " " + r.getTimezoneOffset());
                    t.visitor && t.visitor.getAuthState && (t.authState = t.visitor.getAuthState()), t.p("_s"), t.fb(e) || (i && t.R(i), e && (n = {}, t.Va(n, 0), t.R(e)), t.Fb() && !t.visitorOptedOut && (t.analyticsVisitorID || t.marketingCloudVisitorID || (t.fid = t.zb()), t.Jb(), t.usePlugins && t.doPlugins && t.doPlugins(t), t.account && (t.abort || (t.trackOffline && !t.timestamp && (t.timestamp = Math.floor(r.getTime() / 1e3)), r = a.location, t.pageURL || (t.pageURL = r.href ? r.href : r), t.referrer || t.Wa || (r = t.Util.getQueryParam("adobe_mc_ref", null, null, !0), t.referrer = r || void 0 === r ? void 0 === r ? "" : r : c.document.referrer), t.Wa = 1, t.referrer = t.xb(t.referrer), t.p("_g")), t.Cb() && !t.abort && (t.visitor && !t.supplementalDataID && t.visitor.getSupplementalDataID && (t.supplementalDataID = t.visitor.getSupplementalDataID("AppMeasurement:" + t._in, !t.expectSupplementalData)), t.Db(), s += t.Bb(), t.Ib(o, s), t.p("_t"), t.referrer = ""))), e && t.R(n, 1)), t.abort = t.supplementalDataID = t.timestamp = t.pageURLRest = t.linkObject = t.clickObject = t.linkURL = t.linkName = t.linkType = a.s_objectID = t.pe = t.pev1 = t.pev2 = t.pev3 = t.e = t.lightProfileID = 0
                }, t.za = [], t.registerPreTrackCallback = function(e) {
                    for (var a = [], i = 1; i < arguments.length; i++) a.push(arguments[i]);
                    "function" == typeof e ? t.za.push([e, a]) : t.debugTracking && t.F("DEBUG: Non function type passed to registerPreTrackCallback")
                }, t.cb = function(e) {
                    t.wa(t.za, e)
                }, t.ya = [], t.registerPostTrackCallback = function(e) {
                    for (var a = [], i = 1; i < arguments.length; i++) a.push(arguments[i]);
                    "function" == typeof e ? t.ya.push([e, a]) : t.debugTracking && t.F("DEBUG: Non function type passed to registerPostTrackCallback")
                }, t.bb = function(e) {
                    t.wa(t.ya, e)
                }, t.wa = function(e, a) {
                    if ("object" == typeof e)
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i][0],
                                r = e[i][1];
                            if (r.unshift(a), "function" == typeof n) try {
                                n.apply(null, r)
                            } catch (e) {
                                t.debugTracking && t.F(e.message)
                            }
                        }
                }, t.tl = t.trackLink = function(e, a, i, n, r) {
                    return t.linkObject = e, t.linkType = a, t.linkName = i, r && (t.l = e, t.A = r), t.track(n)
                }, t.trackLight = function(e, a, i, n) {
                    return t.lightProfileID = e, t.lightStoreForSeconds = a, t.lightIncrementBy = i, t.track(n)
                }, t.clearVars = function() {
                    var e, a;
                    for (e = 0; e < t.g.length; e++)("prop" == (a = t.g[e]).substring(0, 4) || "eVar" == a.substring(0, 4) || "hier" == a.substring(0, 4) || "list" == a.substring(0, 4) || "channel" == a || "events" == a || "eventList" == a || "products" == a || "productList" == a || "purchaseID" == a || "transactionID" == a || "state" == a || "zip" == a || "campaign" == a) && (t[a] = void 0)
                }, t.tagContainerMarker = "", t.Ib = function(e, a) {
                    var i, n = t.trackingServer;
                    i = "";
                    var r = t.dc,
                        o = "sc.",
                        c = t.visitorNamespace;
                    n ? t.trackingServerSecure && t.ssl && (n = t.trackingServerSecure) : (c || (0 <= (n = (c = t.account).indexOf(",")) && (c = c.substring(0, n)), c = c.replace(/[^A-Za-z0-9]/g, "")), i || (i = "2o7.net"), r = r ? ("" + r).toLowerCase() : "d1", "2o7.net" == i && ("d1" == r ? r = "112" : "d2" == r && (r = "122"), o = ""), n = c + "." + r + "." + o + i), i = t.ssl ? "https://" : "http://", r = t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks, i += n + "/b/ss/" + t.account + "/" + (t.mobile ? "5." : "") + (r ? "10" : "1") + "/JS-" + t.version + (t.Mb ? "T" : "") + (t.tagContainerMarker ? "-" + t.tagContainerMarker : "") + "/" + e + "?AQB=1&ndh=1&pf=1&" + (r ? "callback=s_c_il[" + t._in + "].doPostbacks&et=1&" : "") + a + "&AQE=1", t.cb(i), t.vb(i), t.ka()
                }, t.Ua = /{(%?)(.*?)(%?)}/, t.Qb = RegExp(t.Ua.source, "g"), t.wb = function(e) {
                    if ("object" == typeof e.dests)
                        for (var a = 0; a < e.dests.length; ++a) {
                            var i = e.dests[a];
                            if ("string" == typeof i.c && "aa." == i.id.substr(0, 3))
                                for (var n = i.c.match(t.Qb), r = 0; r < n.length; ++r) {
                                    var o = n[r],
                                        c = o.match(t.Ua),
                                        s = "";
                                    "%" == c[1] && "timezone_offset" == c[2] ? s = (new Date).getTimezoneOffset() : "%" == c[1] && "timestampz" == c[2] && (s = t.Ab()), i.c = i.c.replace(o, t.escape(s))
                                }
                        }
                }, t.Ab = function() {
                    var e = new Date,
                        a = new Date(6e4 * Math.abs(e.getTimezoneOffset()));
                    return t.k(4, e.getFullYear()) + "-" + t.k(2, e.getMonth() + 1) + "-" + t.k(2, e.getDate()) + "T" + t.k(2, e.getHours()) + ":" + t.k(2, e.getMinutes()) + ":" + t.k(2, e.getSeconds()) + (0 < e.getTimezoneOffset() ? "-" : "+") + t.k(2, a.getUTCHours()) + ":" + t.k(2, a.getUTCMinutes())
                }, t.k = function(e, t) {
                    return (Array(e + 1).join(0) + t).slice(-e)
                }, t.ta = {}, t.doPostbacks = function(e) {
                    if ("object" == typeof e)
                        if (t.wb(e), "object" == typeof t.AudienceManagement && "function" == typeof t.AudienceManagement.isReady && t.AudienceManagement.isReady() && "function" == typeof t.AudienceManagement.passData) t.AudienceManagement.passData(e);
                        else if ("object" == typeof e && "object" == typeof e.dests)
                        for (var a = 0; a < e.dests.length; ++a) {
                            var i = e.dests[a];
                            "object" == typeof i && "string" == typeof i.c && "string" == typeof i.id && "aa." == i.id.substr(0, 3) && (t.ta[i.id] = new Image, t.ta[i.id].alt = "", t.ta[i.id].src = i.c)
                        }
                }, t.vb = function(e) {
                    t.i || t.Eb(), t.i.push(e), t.ma = t.C(), t.Sa()
                }, t.Eb = function() {
                    t.i = t.Gb(), t.i || (t.i = [])
                }, t.Gb = function() {
                    var e, i;
                    if (t.ra()) {
                        try {
                            (i = a.localStorage.getItem(t.pa())) && (e = a.JSON.parse(i))
                        } catch (e) {}
                        return e
                    }
                }, t.ra = function() {
                    var e = !0;
                    return t.trackOffline && t.offlineFilename && a.localStorage && a.JSON || (e = !1), e
                }, t.Ja = function() {
                    var e = 0;
                    return t.i && (e = t.i.length), t.q && e++, e
                }, t.ka = function() {
                    if (!t.q || (t.B && t.B.complete && t.B.G && t.B.va(), !t.q))
                        if (t.Ka = i, t.qa) t.ma > t.O && t.Qa(t.i), t.ua(500);
                        else {
                            var e = t.pb();
                            0 < e ? t.ua(e) : (e = t.Ga()) && (t.q = 1, t.Hb(e), t.Lb(e))
                        }
                }, t.ua = function(e) {
                    t.Ka || (e || (e = 0), t.Ka = setTimeout(t.ka, e))
                }, t.pb = function() {
                    var e;
                    return !t.trackOffline || 0 >= t.offlineThrottleDelay ? 0 : (e = t.C() - t.Pa, t.offlineThrottleDelay < e ? 0 : t.offlineThrottleDelay - e)
                }, t.Ga = function() {
                    if (0 < t.i.length) return t.i.shift()
                }, t.Hb = function(e) {
                    if (t.debugTracking) {
                        var a, i = "AppMeasurement Debug: " + e;
                        for (e = e.split("&"), a = 0; a < e.length; a++) i += "\n\t" + t.unescape(e[a]);
                        t.F(i)
                    }
                }, t.gb = function() {
                    return t.marketingCloudVisitorID || t.analyticsVisitorID
                }, t.Y = !1;
                try {
                    o = JSON.parse('{"x":"y"}')
                } catch (e) {
                    o = null
                }
                for (o && "y" == o.x ? (t.Y = !0, t.X = function(e) {
                        return JSON.parse(e)
                    }) : a.$ && a.$.parseJSON ? (t.X = function(e) {
                        return a.$.parseJSON(e)
                    }, t.Y = !0) : t.X = function() {
                        return null
                    }, t.Lb = function(e) {
                        var n, r, o;
                        if (t.gb() && 2047 < e.length && ("undefined" != typeof XMLHttpRequest && ("withCredentials" in (n = new XMLHttpRequest) ? r = 1 : n = 0), n || "undefined" == typeof XDomainRequest || (n = new XDomainRequest, r = 2), n && (t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks) && (t.Y ? n.Ba = !0 : n = 0)), !n && t.Ta && (e = e.substring(0, 2047)), !n && t.d.createElement && (0 != t.usePostbacks || t.AudienceManagement && t.AudienceManagement.isReady()) && (n = t.d.createElement("SCRIPT")) && "async" in n && ((o = (o = t.d.getElementsByTagName("HEAD")) && o[0] ? o[0] : t.d.body) ? (n.type = "text/javascript", n.setAttribute("async", "async"), r = 3) : n = 0), n || ((n = new Image).alt = "", n.abort || void 0 === a.InstallTrigger || (n.abort = function() {
                                n.src = i
                            })), n.Da = function() {
                                try {
                                    n.G && (clearTimeout(n.G), n.G = 0)
                                } catch (e) {}
                            }, n.onload = n.va = function() {
                                if (t.bb(e), n.Da(), t.tb(), t.ga(), t.q = 0, t.ka(), n.Ba) {
                                    n.Ba = !1;
                                    try {
                                        t.doPostbacks(t.X(n.responseText))
                                    } catch (e) {}
                                }
                            }, n.onabort = n.onerror = n.Ha = function() {
                                n.Da(), (t.trackOffline || t.qa) && t.q && t.i.unshift(t.sb), t.q = 0, t.ma > t.O && t.Qa(t.i), t.ga(), t.ua(500)
                            }, n.onreadystatechange = function() {
                                4 == n.readyState && (200 == n.status ? n.va() : n.Ha())
                            }, t.Pa = t.C(), 1 == r || 2 == r) {
                            var c = e.indexOf("?");
                            o = e.substring(0, c), c = (c = e.substring(c + 1)).replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), 1 == r ? (n.open("POST", o, !0), n.send(c)) : 2 == r && (n.open("POST", o), n.send(c))
                        } else if (n.src = e, 3 == r) {
                            if (t.Na) try {
                                o.removeChild(t.Na)
                            } catch (e) {}
                            o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n), t.Na = t.B
                        }
                        n.G = setTimeout(function() {
                            n.G && (n.complete ? n.va() : (t.trackOffline && n.abort && n.abort(), n.Ha()))
                        }, 5e3), t.sb = e, t.B = a["s_i_" + t.replace(t.account, ",", "_")] = n, (t.useForcedLinkTracking && t.K || t.A) && (t.forcedLinkTrackingTimeout || (t.forcedLinkTrackingTimeout = 250), t.ha = setTimeout(t.ga, t.forcedLinkTrackingTimeout))
                    }, t.tb = function() {
                        if (t.ra() && !(t.Oa > t.O)) try {
                            a.localStorage.removeItem(t.pa()), t.Oa = t.C()
                        } catch (e) {}
                    }, t.Qa = function(e) {
                        if (t.ra()) {
                            t.Sa();
                            try {
                                a.localStorage.setItem(t.pa(), a.JSON.stringify(e)), t.O = t.C()
                            } catch (e) {}
                        }
                    }, t.Sa = function() {
                        if (t.trackOffline)
                            for ((!t.offlineLimit || 0 >= t.offlineLimit) && (t.offlineLimit = 10); t.i.length > t.offlineLimit;) t.Ga()
                    }, t.forceOffline = function() {
                        t.qa = !0
                    }, t.forceOnline = function() {
                        t.qa = !1
                    }, t.pa = function() {
                        return t.offlineFilename + "-" + t.visitorNamespace + t.account
                    }, t.C = function() {
                        return (new Date).getTime()
                    }, t.La = function(e) {
                        return 0 != (e = e.toLowerCase()).indexOf("#") && 0 != e.indexOf("about:") && 0 != e.indexOf("opera:") && 0 != e.indexOf("javascript:")
                    }, t.setTagContainer = function(e) {
                        var a, i, n;
                        for (t.Mb = e, a = 0; a < t._il.length; a++)
                            if ((i = t._il[a]) && "s_l" == i._c && i.tagContainerName == e) {
                                if (t.R(i), i.lmq)
                                    for (a = 0; a < i.lmq.length; a++) n = i.lmq[a], t.loadModule(n.n);
                                if (i.ml)
                                    for (n in i.ml)
                                        if (t[n])
                                            for (a in e = t[n], n = i.ml[n]) !Object.prototype[a] && ("function" != typeof n[a] || 0 > ("" + n[a]).indexOf("s_c_il")) && (e[a] = n[a]);
                                if (i.mmq)
                                    for (a = 0; a < i.mmq.length; a++) n = i.mmq[a], t[n.m] && ((e = t[n.m])[n.f] && "function" == typeof e[n.f] && (n.a ? e[n.f].apply(e, n.a) : e[n.f].apply(e)));
                                if (i.tq)
                                    for (a = 0; a < i.tq.length; a++) t.track(i.tq[a]);
                                i.s = t;
                                break
                            }
                    }, t.Util = {
                        urlEncode: t.escape,
                        urlDecode: t.unescape,
                        cookieRead: t.cookieRead,
                        cookieWrite: t.cookieWrite,
                        getQueryParam: function(e, i, n, r) {
                            var o, c = "";
                            return i || (i = t.pageURL ? t.pageURL : a.location), n = n || "&", e && i ? 0 > (o = (i = "" + i).indexOf("?")) ? c : (i = n + i.substring(o + 1) + n, r && (0 <= i.indexOf(n + e + n) || 0 <= i.indexOf(n + e + "=" + n)) ? void 0 : (0 <= (o = i.indexOf("#")) && (i = i.substr(0, o) + n), 0 > (o = i.indexOf(n + e + "=")) ? c : (0 <= (o = (i = i.substring(o + n.length + e.length + 1)).indexOf(n)) && (i = i.substring(0, o)), 0 < i.length && (c = t.unescape(i)), c))) : c
                        },
                        getIeVersion: function() {
                            if (document.documentMode) return document.documentMode;
                            for (var e = 7; 4 < e; e--) {
                                var t = document.createElement("div");
                                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return e
                            }
                            return null
                        }
                    }, t.H = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), t.g = t.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), t.na = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), t.P = t.na.slice(0), t.Aa = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" "), n = 0; 250 >= n; n++) 76 > n && (t.g.push("prop" + n), t.P.push("prop" + n)), t.g.push("eVar" + n), t.P.push("eVar" + n), 6 > n && t.g.push("hier" + n), 4 > n && t.g.push("list" + n);
                n = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" "), t.g = t.g.concat(n), t.H = t.H.concat(n), t.ssl = 0 <= a.location.protocol.toLowerCase().indexOf("https"), t.charSet = "UTF-8", t.contextData = {}, t.offlineThrottleDelay = 0, t.offlineFilename = "AppMeasurement.offline", t.Pa = 0, t.ma = 0, t.O = 0, t.Oa = 0, t.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", t.w = a, t.d = a.document;
                try {
                    if (t.Ta = !1, navigator) {
                        var s = navigator.userAgent;
                        ("Microsoft Internet Explorer" == navigator.appName || 0 <= s.indexOf("MSIE ") || 0 <= s.indexOf("Trident/") && 0 <= s.indexOf("Windows NT 6")) && (t.Ta = !0)
                    }
                } catch (e) {}
                t.ga = function() {
                    t.ha && (a.clearTimeout(t.ha), t.ha = i), t.l && t.K && t.l.dispatchEvent(t.K), t.A && ("function" == typeof t.A ? t.A() : t.l && t.l.href && (t.d.location = t.l.href)), t.l = t.K = t.A = 0
                }, t.Ra = function() {
                    t.b = t.d.body, t.b ? (t.v = function(e) {
                        var i, n, r, o, c;
                        if (!(t.d && t.d.getElementById("cppXYctnr") || e && e["s_fe_" + t._in])) {
                            if (t.Ca) {
                                if (!t.useForcedLinkTracking) return t.b.removeEventListener("click", t.v, !0), void(t.Ca = t.useForcedLinkTracking = 0);
                                t.b.removeEventListener("click", t.v, !1)
                            } else t.useForcedLinkTracking = 0;
                            t.clickObject = e.srcElement ? e.srcElement : e.target;
                            try {
                                if (!t.clickObject || t.N && t.N == t.clickObject || !(t.clickObject.tagName || t.clickObject.parentElement || t.clickObject.parentNode)) t.clickObject = 0;
                                else {
                                    var s = t.N = t.clickObject;
                                    if (t.la && (clearTimeout(t.la), t.la = 0), t.la = setTimeout(function() {
                                            t.N == s && (t.N = 0)
                                        }, 1e4), r = t.Ja(), t.track(), r < t.Ja() && t.useForcedLinkTracking && e.target) {
                                        for (o = e.target; o && o != t.b && "A" != o.tagName.toUpperCase() && "AREA" != o.tagName.toUpperCase();) o = o.parentNode;
                                        if (o && (c = o.href, t.La(c) || (c = 0), n = o.target, e.target.dispatchEvent && c && (!n || "_self" == n || "_top" == n || "_parent" == n || a.name && n == a.name))) {
                                            try {
                                                i = t.d.createEvent("MouseEvents")
                                            } catch (e) {
                                                i = new a.MouseEvent
                                            }
                                            if (i) {
                                                try {
                                                    i.initMouseEvent("click", e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget)
                                                } catch (e) {
                                                    i = 0
                                                }
                                                i && (i["s_fe_" + t._in] = i.s_fe = 1, e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.preventDefault(), t.l = e.target, t.K = i)
                                            }
                                        }
                                    }
                                }
                            } catch (e) {
                                t.clickObject = 0
                            }
                        }
                    }, t.b && t.b.attachEvent ? t.b.attachEvent("onclick", t.v) : t.b && t.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && t.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && a.MouseEvent) && (t.Ca = 1, t.useForcedLinkTracking = 1, t.b.addEventListener("click", t.v, !0)), t.b.addEventListener("click", t.v, !1))) : setTimeout(t.Ra, 30)
                }, t.ub(), t.Vb || (e ? t.setAccount(e) : t.F("Error, missing Report Suite ID in AppMeasurement initialization"), t.Ra(), t.loadModule("ActivityMap"))
            }, AppMeasurement.getInstance = e, window.s_objectID || (window.s_objectID = 0), t(), module.exports = {
                s_gi: e,
                s_pgicq: t
            }
        }()
    }, {}],
    174: [function(require, module, exports) {
        "use strict";
        var constants = {
            sessionStorage: "sessionStorage"
        };
        module.exports = Object.freeze(constants)
    }, {}],
    175: [function(require, module, exports) {
        "use strict";

        function isStorageAvailable(e) {
            try {
                var t = window[e],
                    a = "acAnalyticsStorageTestItem";
                return t.setItem(a, "a"), t.removeItem(a), !0
            } catch (e) {
                return !1
            }
        }
        module.exports = isStorageAvailable
    }, {}],
    176: [function(require, module, exports) {
        "use strict";
        var s_gi = require("./AppMeasurement").s_gi,
            AppMeasurement = require("./AppMeasurement");

        function initialize(e) {
            if ("string" == typeof e) return s_gi(e)
        }
        module.exports = initialize
    }, {
        "./AppMeasurement": 173
    }],
    177: [function(require, module, exports) {
        "use strict";

        function init(i) {
            require("./plugins/AppMeasurementTools")(i), require("./plugins/utilities/utilities")(i), require("./plugins/linkHandler")(i), require("./plugins/getPercentPageViewed")(i), require("./plugins/getQueryParam")(i), require("./plugins/getValOnce")(i), require("./plugins/performanceTiming")(i), require("./plugins/activitymap/link")(i), require("./plugins/activitymap/region")(i), require("./plugins/activitymap/ActivityMapCollection")(i)
        }
        module.exports.init = init
    }, {
        "./plugins/AppMeasurementTools": 178,
        "./plugins/activitymap/ActivityMapCollection": 179,
        "./plugins/activitymap/link": 181,
        "./plugins/activitymap/region": 182,
        "./plugins/getPercentPageViewed": 183,
        "./plugins/getQueryParam": 184,
        "./plugins/getValOnce": 185,
        "./plugins/linkHandler": 186,
        "./plugins/performanceTiming": 187,
        "./plugins/utilities/utilities": 188
    }],
    178: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            e.ac_amt && e.ac_amt._isEmpty && e.ac_amt.eventListeners && !e.ac_amt._isEmpty(e.ac_amt.eventListeners) && e.ac_amt.destroy && e.ac_amt.destroy(), e.ac_amt = {
                addListener: function(e, t, s, n, i) {
                    e && t && s && n && (this.eventListeners[e] && this.removeListener(this.eventListeners[e]), this.eventListeners[e] = {
                        node: t,
                        type: s,
                        listener: n
                    }, t.addEventListener(s, n, i))
                },
                destroy: function() {
                    this.removeListeners()
                },
                removeListeners: function() {
                    if (this.eventListeners) {
                        for (var e in this.eventListeners) this.eventListeners.hasOwnProperty(e) && this.removeListener(e, this.eventListeners[e].node, this.eventListeners[e].type, this.eventListeners[e].listener);
                        this.eventListeners = {}
                    }
                },
                removeListener: function(e, t, s, n) {
                    e && t && s && n && (t.removeEventListener(s, n), delete this.eventListeners[e])
                },
                eventListeners: {},
                options: {
                    reinitializeActivityMapCollection: !0
                },
                _isEmpty: function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }
            }
        }
    }, {}],
    179: [function(require, module, exports) {
        "use strict";
        var _ancestor = require("@marcom/ac-dom-traversal/ancestor"),
            _isAncestorOf = require("@marcom/ac-dom-traversal/isAncestorOf"),
            _helpers = require("./helpers/helpers.js"),
            DELIMITER = " - ";

        function ActivityMapCollection(e) {
            this._regionSelectors = ["[data-analytics-activitymap-region-id]", "[data-analytics-section-engagement]", "[data-card-analytics]"], this._globalRegionSelectors = ['[data-analytics-region="buy strip"]', "#ac-globalnav", "#ac-localnav", "#ac-globalfooter", "#chapternav"], this.createActivityMapCollection = this.createActivityMapCollection.bind(this), this.addElToCollection = this.addElToCollection.bind(this), this.AppMeasurement = e, this.AppMeasurement && this.AppMeasurement.ac_amt && ("complete" !== document.readyState && this.AppMeasurement.ac_amt.addListener ? this.AppMeasurement.ac_amt.addListener("amc_DOMContentLoaded", document, "DOMContentLoaded", this.createActivityMapCollection) : this.AppMeasurement.ac_amt.options && this.AppMeasurement.ac_amt.options.reinitializeActivityMapCollection && this.createActivityMapCollection())
        }
        var proto = ActivityMapCollection.prototype;

        function init(e) {
            return new ActivityMapCollection(e)
        }
        proto.createActivityMapCollection = function() {
            this.AppMeasurement = this.AppMeasurement || window.s, this.AppMeasurement && (this.AppMeasurement.acAnalyticsActivityMapCollection = null, this.AppMeasurement.acAnalyticsActivityMapCollection = this._assembleActivityMapCollection())
        }, proto._createLinkData = function(e) {
            var t = this._determineRegionName(e, this._globalRegionElements, this._regionSelectors);
            return {
                element: e,
                linkId: this._createLinkId(e, t.id),
                regionElement: t.el,
                regionName: t.id
            }
        }, proto.addElToCollection = function(e) {
            var t = this._createLinkData(e);
            return this._addToActivityMapCollection(t)
        }, proto._addToActivityMapCollection = function(e) {
            var t, i, a = !0,
                n = 0;
            if (i = this.AppMeasurement.acAnalyticsActivityMapCollection.filter(function(t) {
                    return t.linkId === e.linkId
                })[0]) i.linkId = i.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(1)), e.linkId = e.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(2));
            else
                for (; a;) n++, t = e.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(n)), (i = this.AppMeasurement.acAnalyticsActivityMapCollection.filter(function(e) {
                    return e.linkId === t
                })[0]) || (a = !1, n > 1 && (e.linkId = t));
            this.AppMeasurement.acAnalyticsActivityMapCollection.push(e)
        }, proto._assembleActivityMapCollection = function() {
            this._globalRegionElements = _helpers.getGlobalElements(this._globalRegionSelectors);
            for (var e = document.querySelectorAll("a, button"), t = [], i = 0; i < e.length; i++) {
                var a = this._createLinkData(e[i]);
                t.push(a)
            }
            return this._renameDuplicateIds(t)
        }, proto._renameDuplicateIds = function(e) {
            for (var t = {}, i = {}, a = 0; a < e.length; a++) {
                var n = e[a].linkId;
                t[n] = t[n] ? t[n] + 1 : 1, t[n] > 1 ? e[a].linkId = e[a].linkId + " - #" + _helpers.prefixCharacters(t[n]) : i[n] = a, 2 === t[n] && (e[i[n]].linkId = e[i[n]].linkId + " - #01")
            }
            return e
        }, proto._determineRegionName = function(e, t, i) {
            for (var a = null, n = null, r = 0; r < t.length; r++) _isAncestorOf(t[r], e) && !a && (n = (a = t[r]).id || a.getAttribute("data-analytics-region"));
            if (!a)
                for (var o = 0; o < i.length; o++)
                    if (a = _ancestor(e, i[o])) {
                        n = a.getAttribute(_helpers.removeArrayBrackets(i[o])).replace("name:", "");
                        break
                    }
            return a || (a = document.body, n = "body"), {
                el: a,
                id: n
            }
        }, proto._createLinkId = function(e, t) {
            var i = _helpers.createLinkText(e),
                a = _helpers.createLinkHref(e),
                n = _helpers.limitStrLength(t, 40);
            return _helpers.createLinkId(i, a, n, DELIMITER)
        }, module.exports = init
    }, {
        "./helpers/helpers.js": 180,
        "@marcom/ac-dom-traversal/ancestor": 158,
        "@marcom/ac-dom-traversal/isAncestorOf": 161
    }],
    180: [function(require, module, exports) {
        "use strict";

        function Helpers() {
            this.createLinkId = this.createLinkId.bind(this)
        }
        var proto = Helpers.prototype;
        proto.prefixCharacters = function(t, e, r) {
            var n = "";
            for (e = e || 2, r = r || 0; e;) n += r, e--;
            return n.substring(0, n.length - t.toString().length) + t
        }, proto.limitStrLength = function(t, e) {
            return t.substring(0, e).trim()
        }, proto.removeArrayBrackets = function(t) {
            return "[" === t[0] && "]" === t[t.length - 1] ? t.substr(1, t.length - 2) : t
        }, proto.getGlobalElements = function(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var n = document.querySelector(t[r]);
                n && e.push(n)
            }
            return e
        }, proto.createLinkText = function(t) {
            var e = t.getAttribute("data-analytics-activitymap-link-id") || t.getAttribute("data-ac-gallery-trigger") || t.getAttribute("data-analytics-title") || this.removeSpecialChars(t.textContent) || t.id || t.tagName || "no text";
            return this.limitStrLength(e, 50)
        }, proto.createLinkHref = function(t) {
            var e;
            return t.hostname !== window.location.hostname && "www.apple.com" !== t.hostname && (e = t.hostname + t.pathname), e || t.hash || t.pathname || "no href"
        }, proto.createLinkId = function(t, e, r, n) {
            var a, o, i = t.concat(n, e, n, r);
            return i.length > 128 && (a = 128 - t.concat(n, n, r).length, o = this.limitStrLength(e, a), i = t.concat(n, o, n, r)), i
        }, proto.removeSpecialChars = function(t) {
            var e;
            if (t) {
                var r = ["&rlm;", "\\u200F", "&#8207;", "&#x200f;"].join("|"),
                    n = new RegExp(r, "gi");
                e = t.replace(n, "").replace(/\s+/g, " ").trim()
            }
            return e
        }, module.exports = new Helpers
    }, {}],
    181: [function(require, module, exports) {
        "use strict";
        var ActivityMapCollection = require("../../plugins/activitymap/ActivityMapCollection"),
            useragent = require("@marcom/ac-useragent"),
            closeStr = " - close",
            openStr = " - open",
            initialBagState = useragent.browser.firefox || useragent.browser.ie ? openStr : closeStr,
            alteredBagState = useragent.browser.firefox || useragent.browser.ie ? closeStr : openStr;
        module.exports = function(e) {
            e.ActivityMap.link = function(t, i) {
                var n;

                function r(i) {
                    return e.acAnalyticsActivityMapCollection.filter(function(e) {
                        return e.element.isSameNode(t)
                    })[0]
                }
                if ((!i || -1 === i.indexOf("v@e") && -1 === i.indexOf("v@sk") && -1 === i.indexOf("v@m")) && t) return (n = r()) ? -1 !== n.linkId.indexOf("/shop/goto/bag") ? "true" === n.element.getAttribute("aria-expanded") ? n.linkId + initialBagState : n.linkId + alteredBagState : n.linkId : (ActivityMapCollection.addElToCollection(t), (n = r()) ? n.linkId : void 0)
            }
        }
    }, {
        "../../plugins/activitymap/ActivityMapCollection": 179,
        "@marcom/ac-useragent": 168
    }],
    182: [function(require, module, exports) {
        "use strict";
        module.exports = function(i) {
            i.ActivityMap.region = function(t) {
                if (t) {
                    var e = i.acAnalyticsActivityMapCollection.filter(function(i) {
                        return i.element.isSameNode(t)
                    })[0];
                    return e ? e.regionName : void 0
                }
            }
        }
    }, {}],
    183: [function(require, module, exports) {
        "use strict";
        var isStorageAvailable = require("../helpers/isStorageAvailable"),
            SESSION_STORAGE = require("../constants").sessionStorage;
        module.exports = function(e) {
            isStorageAvailable(SESSION_STORAGE) && (e.getPercentPageViewed = function() {
                if (void 0 === s.linkType) {
                    try {
                        s.ppv.previous = sessionStorage.getItem(s.ppv.sessionStorageKey) ? sessionStorage.getItem(s.ppv.sessionStorageKey) : ""
                    } catch (e) {}
                    return s.ppv.init(), s.ppv.previous.split(",")
                }
                if (!s.ppv.previous) {
                    try {
                        s.ppv.previous = sessionStorage.getItem(s.ppv.sessionStorageKey) || ""
                    } catch (e) {}
                    return s.ppv.init(), s.ppv.previous.split(",")
                }
            }, e.ppv = {
                initialPercent: 0,
                maxPercent: 0,
                throttleAmount: 500,
                sessionStorageKey: "s_ppv",
                init: function() {
                    s && s.ac_amt && s.ac_amt.addListener && (s.ac_amt.addListener("ppv_scroll", window, "scroll", s.ppv.throttle(s.ppv.scroll, s.ppv.throttleAmount), !1), s.ac_amt.addListener("ppv_resize", window, "resize", s.ppv.throttle(s.ppv.scroll, s.ppv.throttleAmount), !1), s.ac_amt.addListener("ppv_beforeunload", window, "beforeunload", s.ppv.unload, !1), "complete" !== document.readyState ? s.ac_amt.addListener("ppv_load", window, "load", s.ppv.scroll, !1) : s.ppv.scroll())
                },
                scroll: function() {
                    var e = s.ppv;
                    if (100 !== e.maxPercent) {
                        var t = void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement || document.body.parentNode || document.body.scrollTop,
                            o = document.clientHeight || document.documentElement.clientHeight || document.body.clientHeight,
                            n = e.getDocHeight();
                        n = Math.round((t + o) / n * 100);
                        if (e.initialPercent || (e.initialPercent = n), n > e.maxPercent) {
                            e.maxPercent = n;
                            var i = [];
                            i.push(s.pageName), i.push(n), i.push(e.initialPercent), i.push(t + o);
                            try {
                                sessionStorage.setItem(e.sessionStorageKey, i.join(","))
                            } catch (e) {}
                        }
                    }
                },
                getDocHeight: function() {
                    var e = window.document;
                    return Math.max(Math.max(e.body.scrollHeight, e.documentElement.scrollHeight), Math.max(e.body.offsetHeight, e.documentElement.offsetHeight), Math.max(e.body.clientHeight, e.documentElement.clientHeight))
                },
                unload: function() {
                    try {
                        sessionStorage.getItem(s.ppv.sessionStorageKey) && sessionStorage.setItem(s.ppv.sessionStorageKey, sessionStorage.getItem(s.ppv.sessionStorageKey))
                    } catch (e) {}
                },
                throttle: function(e, t) {
                    var s, o, n, i = null,
                        a = 0,
                        r = function() {
                            a = new Date, i = null, n = e.apply(s, o)
                        };
                    return function() {
                        var p = new Date;
                        a || (a = p);
                        var l = t - (p - a);
                        return s = this, o = arguments, 0 >= l ? (clearTimeout(i), i = null, a = p, n = e.apply(s, o)) : i || (i = setTimeout(r, l)), n
                    }
                }
            })
        }
    }, {
        "../constants": 174,
        "../helpers/isStorageAvailable": 175
    }],
    184: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            e.getQueryParam = e.Util.getQueryParam
        }
    }, {}],
    185: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            e.getValOnce = new Function("v", "c", "e", "t", "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v")
        }
    }, {}],
    186: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            t.p_gn = function(t, e) {
                var n, r, i = t ? t.indexOf("~") : -1;
                return t && e && (n = i < 0 ? "" : t.substring(0, i), r = t.substring(i + 1), e.indexOf(r.toLowerCase()) > -1) ? n || "[[" : 0
            }, t.p_gh = function() {
                var t = this;
                if (t.linkObject) return t.linkObject.href;
                if (!t.eo && !t.lnk) return "";
                var e = t.eo ? t.eo : t.lnk,
                    n = t.ot(e),
                    r = t.oid(e);
                e.s_oidt;
                if (t.eo && e == t.eo)
                    for (; e && !r && "BODY" != n;) {
                        if (!(e = e.parentElement ? e.parentElement : e.parentNode)) return "";
                        n = t.ot(e), r = t.oid(e), e.s_oidt
                    }
                return e.href ? e.href : ""
            }, t.pt = new Function("x", "d", "f", "a", "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return'';"), t.linkHandler = function(t, e, n) {
                var r, i, o = this,
                    s = o.p_gh(),
                    u = s;
                return e = e || "o", !u || o.linkType && (u || o.linkName) ? "" : (r = u.indexOf("?"), u = o.linkLeaveQueryString || r < 0 ? u : u.substring(0, r), (i = o.pt(t, "|", "p_gn", u.toLowerCase())) ? (o.linkName = "[[" == i ? "" : i, o.linkType = e, n ? s : u) : "")
            }
        }
    }, {}],
    187: [function(require, module, exports) {
        "use strict";
        var isStorageAvailable = require("../helpers/isStorageAvailable"),
            SESSION_STORAGE = require("../constants").sessionStorage;
        module.exports = function(e) {
            isStorageAvailable(SESSION_STORAGE) && (e.performanceTiming = function(e) {
                var t = this;
                e && (t.ptv = e), "undefined" != typeof performance && (performance.timing.loadEventEnd > 0 && t.performanceWrite(), 0 == performance.timing.loadEventEnd && (t.pi = setInterval(function() {
                    t.performanceWrite()
                }, 250)), t.ptc && "e" != t.linkType ? (t.rfe(), t[t.ptv] = "") : t.performanceRead())
            }, e.performanceWrite = function() {
                var e = this;
                performance.timing.loadEventEnd > 0 && clearInterval(e.pi);
                try {
                    if ("" == e.c_r("s_ptc") && performance.timing.loadEventEnd > 0) try {
                        var t = performance.timing,
                            n = "";
                        if (n = e.performanceCheck(t.fetchStart, t.navigationStart), n += "^^" + e.performanceCheck(t.domainLookupStart, t.fetchStart), n += "^^" + e.performanceCheck(t.domainLookupEnd, t.domainLookupStart), n += "^^" + e.performanceCheck(t.connectEnd, t.connectStart), n += "^^" + e.performanceCheck(t.responseStart, t.connectEnd), n += "^^" + e.performanceCheck(t.responseEnd, t.responseStart), n += "^^" + e.performanceCheck(t.domInteractive, t.domLoading), n += "^^" + e.performanceCheck(t.domContentLoadedEventEnd, t.domInteractive), n += "^^" + e.performanceCheck(t.domComplete, t.domContentLoadedEventEnd), n += "^^" + e.performanceCheck(t.loadEventStart, t.domLoading), n += "^^" + e.performanceCheck(t.loadEventEnd, t.loadEventStart), n += "^^" + e.performanceCheck(t.loadEventEnd, t.navigationStart), e.c_w("s_ptc", n), sessionStorage && navigator.cookieEnabled && "undefined" != e.ptv) {
                            for (var r = performance.getEntries(), a = "", i = 0; i < r.length; i++) a += "!", a += r[i].name.indexOf("?") > -1 ? r[i].name.split("?")[0] : r[i].name, a += "|" + (Math.round(r[i].startTime) / 1e3).toFixed(1) + "|" + (Math.round(r[i].duration) / 1e3).toFixed(1) + "|" + r[i].initiatorType;
                            sessionStorage.setItem("s_pec", a)
                        }
                    } catch (e) {
                        return
                    }
                } catch (e) {
                    return
                }
            }, e.performanceCheck = function(e, t) {
                if (e >= 0 && t >= 0) return e - t < 6e4 && e - t >= 0 ? ((e - t) / 1e3).toFixed(3) : 600
            }, e.performanceRead = function() {
                var e = this;
                performance.timing.loadEventEnd > 0 && clearInterval(e.pi);
                var t = e.c_r("s_ptc");
                if (e.pte) var n = e.pte.split(",");
                if ("" != t) {
                    var r = e.split(t, "^^");
                    if ("" != r[1])
                        for (var a = 0; a < n.length - 1; a++) e.events = e.apl(e.events, n[a] + "=" + r[a], ",", 2);
                    e.events = e.apl(e.events, n[n.length - 1], ",", 2)
                }
                e.linkTrackEvents = e.apl(e.linkTrackEvents, e.pte, ",", 2), e.c_w("s_ptc", "", 0), sessionStorage && navigator.cookieEnabled && "undefined" != e.ptv ? (e[e.ptv] = sessionStorage.getItem("s_pec"), sessionStorage.setItem("s_pec", "", 0)) : e[e.ptv] = "sessionStorage Unavailable", e.ptc = !0
            }, e.rfe = function() {
                var e = this,
                    t = (e.split(e.events, ","), e.split(e.pte, ","));
                try {
                    for (x in t) e.events = e.rfl(e.events, t[x]), e.contextData.events = e.events
                } catch (e) {
                    return
                }
            }, e.rfl = function(e, t, n, r, a) {
                var o = new Array,
                    c = "";
                n = n || ",", r = r || ",", a = a ? 1 : 0;
                if (!e) return "";
                for (L = e.split(n), i = 0; i < L.length; i++) L[i].indexOf(":") > -1 && ((c = L[i].split(":"))[1] = c[0] + ":" + c[1], L[i] = c[0]), L[i].indexOf("=") > -1 && ((c = L[i].split("="))[1] = c[0] + "=" + c[1], L[i] = c[0]), L[i] != t && c ? o.push(c[1]) : L[i] != t ? o.push(L[i]) : L[i] == t && a && (a = 0, c ? o.push(c[1]) : o.push(L[i])), c = "";
                return this.join(o, {
                    delim: r
                })
            })
        }
    }, {
        "../constants": 174,
        "../helpers/isStorageAvailable": 175
    }],
    188: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            t.manageVars = function(t, e, n) {
                var r, a, i, o = this;
                if (e = e || "", n = n || 1, !o[t]) return !1;
                r = "pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID";
                for (var s = 1; s < 76; s++) r += ",prop" + s;
                for (s = 1; s < 251; s++) r += ",eVar" + s;
                for (s = 1; s < 6; s++) r += ",hier" + s;
                for (s = 1; s < 4; s++) r += ",list" + s;
                for (s in o.contextData) r += ",contextData." + s;
                if (!e || 1 != n && 2 != n) return "" == e && 1 == n && (o.pt(r, ",", t, 0), !0);
                if (1 == n && (r = e.replace("['", ".").replace("']", "")), 2 == n) {
                    for (var f in a = e.split(","), i = r.split(","), r = "", a)
                        for (var l in a[f].indexOf("contextData") > -1 && (lax = a[f].split("'"), a[f] = "contextData." + lax[1]), i) a[f] == i[l] && (i[l] = "");
                    for (var l in i) r += i[l] ? "," + i[l] : ""
                }
                return o.pt(r, ",", t, 0), !0
            }, t.clearVars = function(t) {
                if (-1 == t.indexOf("contextData")) this[t] = "";
                else if (t.indexOf("contextData") > -1) {
                    var e = t.substring(t.indexOf(".") + 1);
                    this.contextData[e] = ""
                }
            }, t.lowercaseVars = function(t) {
                var e = this;
                if ("events" != t && -1 == t.indexOf("contextData") && e[t]) e[t] = e[t].toString(), 0 != e[t].indexOf("D=") && (e[t] = e[t].toLowerCase());
                else if (t.indexOf("contextData") > -1) {
                    var n = t.substring(t.indexOf(".") + 1);
                    e.contextData[n] && (e.contextData[n] = e.contextData[n].toString(), e.contextData[n] = e.contextData[n].toLowerCase())
                }
            }, t.pt = function(t, e, n, r) {
                for (var a, i, o = t, s = 0; o;) {
                    if (a = (a = o.indexOf(e)) < 0 ? o.length : a, o = o.substring(0, a), i = this[n](o, r)) return i;
                    s += a + e.length, o = t.substring(s, t.length), o = s < t.length ? o : ""
                }
                return ""
            }, t.join = new Function("v", "p", "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;"), t.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"), t.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a")
        }
    }, {}],
    "@marcom/ac-analytics": [function(require, module, exports) {
        "use strict";
        module.exports = {
            observer: {
                Click: require("./ac-analytics/observer/Click"),
                Event: require("./ac-analytics/observer/Event"),
                Gallery: require("./ac-analytics/observer/Gallery"),
                Link: require("./ac-analytics/observer/Link"),
                Page: require("./ac-analytics/observer/Page"),
                Section: require("./ac-analytics/observer/Section"),
                Video: require("./ac-analytics/observer/Video")
            },
            track: require("./ac-analytics/metricsTracker").trackGeneric,
            passiveTracker: require("./ac-analytics/plugins/appmeasurement/passiveTracker"),
            regions: require("./ac-analytics/regions/regions"),
            createBasicObserverSuite: require("./ac-analytics/factory/basicObserverSuite").create,
            reset: require("./ac-analytics/reset"),
            resetActivityMap: require("@marcom/appmeasurement-setup").ActivityMapCollection.createActivityMapCollection,
            addActivityMapItem: require("@marcom/appmeasurement-setup").ActivityMapCollection.addElToCollection,
            errorHandler: require("./ac-analytics/error-handler/ErrorHandler")
        }
    }, {
        "./ac-analytics/error-handler/ErrorHandler": 76,
        "./ac-analytics/factory/basicObserverSuite": 77,
        "./ac-analytics/metricsTracker": 79,
        "./ac-analytics/observer/Click": 80,
        "./ac-analytics/observer/Event": 81,
        "./ac-analytics/observer/Gallery": 82,
        "./ac-analytics/observer/Link": 83,
        "./ac-analytics/observer/Page": 84,
        "./ac-analytics/observer/Section": 85,
        "./ac-analytics/observer/Video": 86,
        "./ac-analytics/plugins/appmeasurement/passiveTracker": 96,
        "./ac-analytics/regions/regions": 113,
        "./ac-analytics/reset": 114,
        "@marcom/appmeasurement-setup": 129
    }],
    "ac-analytics": [function(require, module, exports) {
        "use strict";
        module.exports = require("../ac-analytics")
    }, {
        "../ac-analytics": "@marcom/ac-analytics"
    }]
}, {}, ["@marcom/ac-analytics"]);