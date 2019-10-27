/*
 * Copyright 2019 Disney
 * All Rights Reserved
 *
 * Underscore.js 1.9.1
 * Copyright (c) 2009-2018 Jeremy Ashkenas, DocumentCloud Inc.
 * MIT License
 *
 * Backbone.js 1.3.3
 * Copyright (c) 2010-2016 Jeremy Ashkenas, DocumentCloud Inc.
 * MIT License
 *
 * Hogan.js 2.0.0
 * Copyright 2012 Twitter Inc.
 * Apache License, Version 2.0
 */
! function(e) {
    "use strict";
    var t = e.$;
    t.ajaxPrefilter(function(e, t, n) {
        n.error = n.fail, n.success = n.done
    })
}(this),
function(e, t) {
    "use strict";
    t.support.css3 = function() {
        function t(t, n) {
            var i = e.document.body || e.document.documentElement,
                r = i.style,
                o = ["Webkit", "Moz", "ms", "O"];
            if (void 0 !== r[t]) return !n || t;
            t = t.charAt(0).toUpperCase() + t.substr(1);
            for (var s = 0; s < o.length; s++)
                if (void 0 !== r[o[s] + t]) return !n || o[s] + t
        }
        return t
    }(), t.fn.selectTransitionEnd = function() {
        var t, n = e.document.createElement("fakeelement"),
            i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            };
        for (t in i)
            if (void 0 !== n.style[t]) return i[t]
    }, jQuery.extend(jQuery.expr.pseudos, {
        focusable: function(e) {
            var n = ['a[href]:not([tabindex="-1"])', ':input:not([disabled]):not([tabindex="-1"])', 'button:not([disabled]):not([tabindex="-1"])', 'iframe:not([tabindex="-1"])', '[tabindex]:not([tabindex="-1"])'];
            return t(e).is(n.join(", "))
        }
    })
}(this, jQuery),
function(e) {
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var t = e(window);
    e.fn.visible = function(e, n, i) {
        if (!(this.length < 1)) {
            var r = this.length > 1 ? this.eq(0) : this,
                o = r.get(0),
                s = t.width(),
                a = t.height(),
                i = i ? i : "both",
                c = n !== !0 || o.offsetWidth * o.offsetHeight;
            if ("function" == typeof o.getBoundingClientRect) {
                var l = o.getBoundingClientRect(),
                    u = l.top >= 0 && l.top < a,
                    d = l.bottom > 0 && l.bottom <= a,
                    f = l.left >= 0 && l.left < s,
                    h = l.right > 0 && l.right <= s,
                    p = e ? u || d : u && d,
                    v = e ? f || h : f && h;
                if ("both" === i) return c && p && v;
                if ("vertical" === i) return c && p;
                if ("horizontal" === i) return c && v
            } else {
                var b = t.scrollTop(),
                    g = b + a,
                    m = t.scrollLeft(),
                    y = m + s,
                    _ = r.offset(),
                    k = _.top,
                    w = k + r.height(),
                    x = _.left,
                    E = x + r.width(),
                    T = e === !0 ? w : k,
                    S = e === !0 ? k : w,
                    C = e === !0 ? E : x,
                    A = e === !0 ? x : E;
                if ("both" === i) return !!c && S <= g && T >= b && A <= y && C >= m;
                if ("vertical" === i) return !!c && S <= g && T >= b;
                if ("horizontal" === i) return !!c && A <= y && C >= m
            }
        }
    }
}(jQuery),
function(e) {
    var t = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, i, r) {
        t.Backbone = e(t, r, n, i)
    });
    else if ("undefined" != typeof exports) {
        var n, i = require("underscore");
        try {
            n = require("jquery")
        } catch (e) {}
        e(t, exports, i, n)
    } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(function(e, t, n, i) {
    var r = e.Backbone,
        o = Array.prototype.slice;
    t.VERSION = "1.3.3", t.$ = i, t.noConflict = function() {
        return e.Backbone = r, this
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var s = function(e, t, i) {
            switch (e) {
                case 1:
                    return function() {
                        return n[t](this[i])
                    };
                case 2:
                    return function(e) {
                        return n[t](this[i], e)
                    };
                case 3:
                    return function(e, r) {
                        return n[t](this[i], c(e, this), r)
                    };
                case 4:
                    return function(e, r, o) {
                        return n[t](this[i], c(e, this), r, o)
                    };
                default:
                    return function() {
                        var e = o.call(arguments);
                        return e.unshift(this[i]), n[t].apply(n, e)
                    }
            }
        },
        a = function(e, t, i) {
            n.each(t, function(t, r) {
                n[r] && (e.prototype[r] = s(t, r, i))
            })
        },
        c = function(e, t) {
            return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? l(e) : n.isString(e) ? function(t) {
                return t.get(e)
            } : e
        },
        l = function(e) {
            var t = n.matches(e);
            return function(e) {
                return t(e.attributes)
            }
        },
        u = t.Events = {},
        d = /\s+/,
        f = function(e, t, i, r, o) {
            var s, a = 0;
            if (i && "object" == typeof i) {
                void 0 !== r && "context" in o && void 0 === o.context && (o.context = r);
                for (s = n.keys(i); a < s.length; a++) t = f(e, t, s[a], i[s[a]], o)
            } else if (i && d.test(i))
                for (s = i.split(d); a < s.length; a++) t = e(t, s[a], r, o);
            else t = e(t, i, r, o);
            return t
        };
    u.on = function(e, t, n) {
        return h(this, e, t, n)
    };
    var h = function(e, t, n, i, r) {
        if (e._events = f(p, e._events || {}, t, n, {
                context: i,
                ctx: e,
                listening: r
            }), r) {
            var o = e._listeners || (e._listeners = {});
            o[r.id] = r
        }
        return e
    };
    u.listenTo = function(e, t, i) {
        if (!e) return this;
        var r = e._listenId || (e._listenId = n.uniqueId("l")),
            o = this._listeningTo || (this._listeningTo = {}),
            s = o[r];
        if (!s) {
            var a = this._listenId || (this._listenId = n.uniqueId("l"));
            s = o[r] = {
                obj: e,
                objId: r,
                id: a,
                listeningTo: o,
                count: 0
            }
        }
        return h(e, t, i, this, s), this
    };
    var p = function(e, t, n, i) {
        if (n) {
            var r = e[t] || (e[t] = []),
                o = i.context,
                s = i.ctx,
                a = i.listening;
            a && a.count++, r.push({
                callback: n,
                context: o,
                ctx: o || s,
                listening: a
            })
        }
        return e
    };
    u.off = function(e, t, n) {
        return this._events ? (this._events = f(v, this._events, e, t, {
            context: n,
            listeners: this._listeners
        }), this) : this
    }, u.stopListening = function(e, t, i) {
        var r = this._listeningTo;
        if (!r) return this;
        for (var o = e ? [e._listenId] : n.keys(r), s = 0; s < o.length; s++) {
            var a = r[o[s]];
            if (!a) break;
            a.obj.off(t, i, this)
        }
        return this
    };
    var v = function(e, t, i, r) {
        if (e) {
            var o, s = 0,
                a = r.context,
                c = r.listeners;
            if (t || i || a) {
                for (var l = t ? [t] : n.keys(e); s < l.length; s++) {
                    t = l[s];
                    var u = e[t];
                    if (!u) break;
                    for (var d = [], f = 0; f < u.length; f++) {
                        var h = u[f];
                        i && i !== h.callback && i !== h.callback._callback || a && a !== h.context ? d.push(h) : (o = h.listening, o && 0 === --o.count && (delete c[o.id], delete o.listeningTo[o.objId]))
                    }
                    d.length ? e[t] = d : delete e[t]
                }
                return e
            }
            for (var p = n.keys(c); s < p.length; s++) o = c[p[s]], delete c[o.id], delete o.listeningTo[o.objId]
        }
    };
    u.once = function(e, t, i) {
        var r = f(b, {}, e, t, n.bind(this.off, this));
        return "string" == typeof e && null == i && (t = void 0), this.on(r, t, i)
    }, u.listenToOnce = function(e, t, i) {
        var r = f(b, {}, t, i, n.bind(this.stopListening, this, e));
        return this.listenTo(e, r)
    };
    var b = function(e, t, i, r) {
        if (i) {
            var o = e[t] = n.once(function() {
                r(t, o), i.apply(this, arguments)
            });
            o._callback = i
        }
        return e
    };
    u.trigger = function(e) {
        if (!this._events) return this;
        for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++) n[i] = arguments[i + 1];
        return f(g, this._events, e, void 0, n), this
    };
    var g = function(e, t, n, i) {
            if (e) {
                var r = e[t],
                    o = e.all;
                r && o && (o = o.slice()), r && m(r, i), o && m(o, [t].concat(i))
            }
            return e
        },
        m = function(e, t) {
            var n, i = -1,
                r = e.length,
                o = t[0],
                s = t[1],
                a = t[2];
            switch (t.length) {
                case 0:
                    for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                    return;
                case 1:
                    for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
                    return;
                case 2:
                    for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s);
                    return;
                case 3:
                    for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s, a);
                    return;
                default:
                    for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
                    return
            }
        };
    u.bind = u.on, u.unbind = u.off, n.extend(t, u);
    var y = t.Model = function(e, t) {
        var i = e || {};
        t || (t = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {});
        var r = n.result(this, "defaults");
        i = n.defaults(n.extend({}, r, i), r), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    n.extend(y.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function() {
            return n.clone(this.attributes)
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return n.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        matches: function(e) {
            return !!n.iteratee(e, this)(this.attributes)
        },
        set: function(e, t, i) {
            if (null == e) return this;
            var r;
            if ("object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i || (i = {}), !this._validate(r, i)) return !1;
            var o = i.unset,
                s = i.silent,
                a = [],
                c = this._changing;
            this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
            var l = this.attributes,
                u = this.changed,
                d = this._previousAttributes;
            for (var f in r) t = r[f], n.isEqual(l[f], t) || a.push(f), n.isEqual(d[f], t) ? delete u[f] : u[f] = t, o ? delete l[f] : l[f] = t;
            if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !s) {
                a.length && (this._pending = i);
                for (var h = 0; h < a.length; h++) this.trigger("change:" + a[h], this, l[a[h]], i)
            }
            if (c) return this;
            if (!s)
                for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function(e, t) {
            return this.set(e, void 0, n.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var i in this.attributes) t[i] = void 0;
            return this.set(t, n.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e) return !!this.hasChanged() && n.clone(this.changed);
            var t = this._changing ? this._previousAttributes : this.attributes,
                i = {};
            for (var r in e) {
                var o = e[r];
                n.isEqual(t[r], o) || (i[r] = o)
            }
            return !!n.size(i) && i
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = n.extend({
                parse: !0
            }, e);
            var t = this,
                i = e.success;
            return e.success = function(n) {
                var r = e.parse ? t.parse(n, e) : n;
                return !!t.set(r, e) && (i && i.call(e.context, t, n, e), void t.trigger("sync", t, n, e))
            }, B(this, e), this.sync("read", this, e)
        },
        save: function(e, t, i) {
            var r;
            null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
                validate: !0,
                parse: !0
            }, i);
            var o = i.wait;
            if (r && !o) {
                if (!this.set(r, i)) return !1
            } else if (!this._validate(r, i)) return !1;
            var s = this,
                a = i.success,
                c = this.attributes;
            i.success = function(e) {
                s.attributes = c;
                var t = i.parse ? s.parse(e, i) : e;
                return o && (t = n.extend({}, r, t)), !(t && !s.set(t, i)) && (a && a.call(i.context, s, e, i), void s.trigger("sync", s, e, i))
            }, B(this, i), r && o && (this.attributes = n.extend({}, c, r));
            var l = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== l || i.attrs || (i.attrs = r);
            var u = this.sync(l, this, i);
            return this.attributes = c, u
        },
        destroy: function(e) {
            e = e ? n.clone(e) : {};
            var t = this,
                i = e.success,
                r = e.wait,
                o = function() {
                    t.stopListening(), t.trigger("destroy", t, t.collection, e)
                };
            e.success = function(n) {
                r && o(), i && i.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e)
            };
            var s = !1;
            return this.isNew() ? n.defer(e.success) : (B(this, e), s = this.sync("delete", this, e)), r || o(), s
        },
        url: function() {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || U();
            if (this.isNew()) return e;
            var t = this.get(this.idAttribute);
            return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, n.extend({}, e, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return !0;
            e = n.extend({}, this.attributes, e);
            var i = this.validationError = this.validate(e, t) || null;
            return !i || (this.trigger("invalid", this, i, n.extend(t, {
                validationError: i
            })), !1)
        }
    });
    var _ = {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    };
    a(y, _, "attributes");
    var k = t.Collection = function(e, t) {
            t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                silent: !0
            }, t))
        },
        w = {
            add: !0,
            remove: !0,
            merge: !0
        },
        x = {
            add: !0,
            remove: !1
        },
        E = function(e, t, n) {
            n = Math.min(Math.max(n, 0), e.length);
            var i, r = Array(e.length - n),
                o = t.length;
            for (i = 0; i < r.length; i++) r[i] = e[i + n];
            for (i = 0; i < o; i++) e[i + n] = t[i];
            for (i = 0; i < r.length; i++) e[i + o + n] = r[i]
        };
    n.extend(k.prototype, u, {
        model: y,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, n.extend({
                merge: !1
            }, t, x))
        },
        remove: function(e, t) {
            t = n.extend({}, t);
            var i = !n.isArray(e);
            e = i ? [e] : e.slice();
            var r = this._removeModels(e, t);
            return !t.silent && r.length && (t.changes = {
                added: [],
                merged: [],
                removed: r
            }, this.trigger("update", this, t)), i ? r[0] : r
        },
        set: function(e, t) {
            if (null != e) {
                t = n.extend({}, w, t), t.parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                var i = !n.isArray(e);
                e = i ? [e] : e.slice();
                var r = t.at;
                null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                var o, s, a = [],
                    c = [],
                    l = [],
                    u = [],
                    d = {},
                    f = t.add,
                    h = t.merge,
                    p = t.remove,
                    v = !1,
                    b = this.comparator && null == r && t.sort !== !1,
                    g = n.isString(this.comparator) ? this.comparator : null;
                for (s = 0; s < e.length; s++) {
                    o = e[s];
                    var m = this.get(o);
                    if (m) {
                        if (h && o !== m) {
                            var y = this._isModel(o) ? o.attributes : o;
                            t.parse && (y = m.parse(y, t)), m.set(y, t), l.push(m), b && !v && (v = m.hasChanged(g))
                        }
                        d[m.cid] || (d[m.cid] = !0, a.push(m)), e[s] = m
                    } else f && (o = e[s] = this._prepareModel(o, t), o && (c.push(o), this._addReference(o, t), d[o.cid] = !0, a.push(o)))
                }
                if (p) {
                    for (s = 0; s < this.length; s++) o = this.models[s], d[o.cid] || u.push(o);
                    u.length && this._removeModels(u, t)
                }
                var _ = !1,
                    k = !b && f && p;
                if (a.length && k ? (_ = this.length !== a.length || n.some(this.models, function(e, t) {
                        return e !== a[t]
                    }), this.models.length = 0, E(this.models, a, 0), this.length = this.models.length) : c.length && (b && (v = !0), E(this.models, c, null == r ? this.length : r), this.length = this.models.length), v && this.sort({
                        silent: !0
                    }), !t.silent) {
                    for (s = 0; s < c.length; s++) null != r && (t.index = r + s), o = c[s], o.trigger("add", o, this, t);
                    (v || _) && this.trigger("sort", this, t), (c.length || u.length || l.length) && (t.changes = {
                        added: c,
                        removed: u,
                        merged: l
                    }, this.trigger("update", this, t))
                }
                return i ? e[0] : e
            }
        },
        reset: function(e, t) {
            t = t ? n.clone(t) : {};
            for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], t);
            return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), e
        },
        push: function(e, t) {
            return this.add(e, n.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e)
        },
        unshift: function(e, t) {
            return this.add(e, n.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e)
        },
        slice: function() {
            return o.apply(this.models, arguments)
        },
        get: function(e) {
            if (null != e) return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
        },
        has: function(e) {
            return null != this.get(e)
        },
        at: function(e) {
            return e < 0 && (e += this.length), this.models[e]
        },
        where: function(e, t) {
            return this[t ? "find" : "filter"](e)
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            var t = this.comparator;
            if (!t) throw new Error("Cannot sort a set without a comparator");
            e || (e = {});
            var i = t.length;
            return n.isFunction(t) && (t = n.bind(t, this)), 1 === i || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this
        },
        pluck: function(e) {
            return this.map(e + "")
        },
        fetch: function(e) {
            e = n.extend({
                parse: !0
            }, e);
            var t = e.success,
                i = this;
            return e.success = function(n) {
                var r = e.reset ? "reset" : "set";
                i[r](n, e), t && t.call(e.context, i, n, e), i.trigger("sync", i, n, e)
            }, B(this, e), this.sync("read", this, e)
        },
        create: function(e, t) {
            t = t ? n.clone(t) : {};
            var i = t.wait;
            if (e = this._prepareModel(e, t), !e) return !1;
            i || this.add(e, t);
            var r = this,
                o = t.success;
            return t.success = function(e, t, n) {
                i && r.add(e, n), o && o.call(n.context, e, t, n)
            }, e.save(null, t), e
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(e) {
            return e[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (this._isModel(e)) return e.collection || (e.collection = this), e;
            t = t ? n.clone(t) : {}, t.collection = this;
            var i = new this.model(e, t);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
        },
        _removeModels: function(e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
                var r = this.get(e[i]);
                if (r) {
                    var o = this.indexOf(r);
                    this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                    var s = this.modelId(r.attributes);
                    null != s && delete this._byId[s], t.silent || (t.index = o, r.trigger("remove", r, this, t)), n.push(r), this._removeReference(r, t)
                }
            }
            return n
        },
        _isModel: function(e) {
            return e instanceof y
        },
        _addReference: function(e) {
            this._byId[e.cid] = e;
            var t = this.modelId(e.attributes);
            null != t && (this._byId[t] = e), e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e) {
            delete this._byId[e.cid];
            var t = this.modelId(e.attributes);
            null != t && delete this._byId[t], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, i) {
            if (t) {
                if (("add" === e || "remove" === e) && n !== this) return;
                if ("destroy" === e && this.remove(t, i), "change" === e) {
                    var r = this.modelId(t.previousAttributes()),
                        o = this.modelId(t.attributes);
                    r !== o && (null != r && delete this._byId[r], null != o && (this._byId[o] = t))
                }
            }
            this.trigger.apply(this, arguments)
        }
    });
    var T = {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    };
    a(k, T, "models");
    var S = t.View = function(e) {
            this.cid = n.uniqueId("view"), n.extend(this, n.pick(e, A)), this._ensureElement(), this.initialize.apply(this, arguments)
        },
        C = /^(\S+)\s*(.*)$/,
        A = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(S.prototype, u, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this._removeElement(), this.stopListening(), this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(e) {
            return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this
        },
        _setElement: function(e) {
            this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0]
        },
        delegateEvents: function(e) {
            if (e || (e = n.result(this, "events")), !e) return this;
            this.undelegateEvents();
            for (var t in e) {
                var i = e[t];
                if (n.isFunction(i) || (i = this[i]), i) {
                    var r = t.match(C);
                    this.delegate(r[1], r[2], n.bind(i, this))
                }
            }
            return this
        },
        delegate: function(e, t, n) {
            return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this
        },
        undelegate: function(e, t, n) {
            return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this
        },
        _createElement: function(e) {
            return document.createElement(e)
        },
        _ensureElement: function() {
            if (this.el) this.setElement(n.result(this, "el"));
            else {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e)
            }
        },
        _setAttributes: function(e) {
            this.$el.attr(e)
        }
    }), t.sync = function(e, i, r) {
        var o = M[e];
        n.defaults(r || (r = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (r.url || (s.url = n.result(i, "url") || U()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                model: s.data
            } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST", r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(e) {
                if (e.setRequestHeader("X-HTTP-Method-Override", o), a) return a.apply(this, arguments)
            }
        }
        "GET" === s.type || r.emulateJSON || (s.processData = !1);
        var c = r.error;
        r.error = function(e, t, n) {
            r.textStatus = t, r.errorThrown = n, c && c.call(r.context, e, t, n)
        };
        var l = r.xhr = t.ajax(n.extend(s, r));
        return i.trigger("request", i, l, r), l
    };
    var M = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
    };
    var D = t.Router = function(e) {
            e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
        },
        L = /\((.*?)\)/g,
        z = /(\(\?)?:\w+/g,
        j = /\*\w+/g,
        I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(D.prototype, u, {
        initialize: function() {},
        route: function(e, i, r) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
            var o = this;
            return t.history.route(e, function(n) {
                var s = o._extractParameters(e, n);
                o.execute(r, s, i) !== !1 && (o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), t.history.trigger("route", o, i, s))
            }), this
        },
        execute: function(e, t) {
            e && e.apply(this, t)
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n), this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(I, "\\$&").replace(L, "(?:$1)?").replace(z, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(j, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var i = e.exec(t).slice(1);
            return n.map(i, function(e, t) {
                return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var P = t.History = function() {
            this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        },
        R = /^[#\/]|\s+$/g,
        O = /^\/+|\/+$/g,
        $ = /#.*$/;
    P.started = !1, n.extend(P.prototype, u, {
        interval: 50,
        atRoot: function() {
            var e = this.location.pathname.replace(/[^\/]$/, "$&/");
            return e === this.root && !this.getSearch()
        },
        matchRoot: function() {
            var e = this.decodeFragment(this.location.pathname),
                t = e.slice(0, this.root.length - 1) + "/";
            return t === this.root
        },
        decodeFragment: function(e) {
            return decodeURI(e.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return e ? e[0] : ""
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getPath: function() {
            var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === e.charAt(0) ? e.slice(1) : e
        },
        getFragment: function(e) {
            return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(R, "")
        },
        start: function(e) {
            if (P.started) throw new Error("Backbone.history has already been started");
            if (P.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(O, "/"), this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var t = this.root.slice(0, -1) || "/";
                    return this.location.replace(t + "#" + this.getPath()), !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                })
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                var i = document.body,
                    r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment
            }
            var o = window.addEventListener || function(e, t) {
                return attachEvent("on" + e, t)
            };
            if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
        },
        stop: function() {
            var e = window.removeEventListener || function(e, t) {
                return detachEvent("on" + e, t)
            };
            this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), P.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function() {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e !== this.fragment && (this.iframe && this.navigate(e), void this.loadUrl())
        },
        loadUrl: function(e) {
            return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), n.some(this.handlers, function(t) {
                if (t.route.test(e)) return t.callback(e), !0
            }))
        },
        navigate: function(e, t) {
            if (!P.started) return !1;
            t && t !== !0 || (t = {
                trigger: !!t
            }), e = this.getFragment(e || "");
            var n = this.root;
            "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
            var i = n + e;
            if (e = this.decodeFragment(e.replace($, "")), this.fragment !== e) {
                if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                else {
                    if (!this._wantsHashChange) return this.location.assign(i);
                    if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                        var r = this.iframe.contentWindow;
                        t.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, e, t.replace)
                    }
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var i = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(i + "#" + t)
            } else e.hash = "#" + t
        }
    }), t.history = new P;
    var N = function(e, t) {
        var i, r = this;
        return i = e && n.has(e, "constructor") ? e.constructor : function() {
            return r.apply(this, arguments)
        }, n.extend(i, r, t), i.prototype = n.create(r.prototype, e), i.prototype.constructor = i, i.__super__ = r.prototype, i
    };
    y.extend = k.extend = D.extend = S.extend = P.extend = N;
    var U = function() {
            throw new Error('A "url" property or function must be specified')
        },
        B = function(e, t) {
            var n = t.error;
            t.error = function(i) {
                n && n.call(t.context, e, i, t), e.trigger("error", e, i, t)
            }
        };
    return t
}),
function(e) {
    "use strict";
    var t = e.Disney,
        n = t.Style.breakpoints,
        i = e.Backbone,
        r = e.jQuery,
        o = e.Math,
        s = o.min(e.devicePixelRatio, 2);
    t.LumiereHelpers = {
        sizes: [160, 320, 480, 600, 768, 960, 1200, 1536, 1920],
        imgSrc: function(e, t) {
            var n, i, o, a;
            if (e instanceof Object ? (n = e.src, i = e.width) : (n = e, a = this.getDimensionsFromSrc(n), i = a && a.width), t.exact_size) {
                var c = e.half_width || a && a.half_width || i && parseInt(i / 2, 10);
                o = !(s > 1.5) && c
            } else o = this.optimizedWidth(i, t);
            var l;
            if (o) {
                var u = this.getQueryParams(n);
                u.width = o, l = [n.split("?")[0], decodeURIComponent(r.param(u))].join("?")
            }
            return l || n
        },
        processImgData: function(e, t) {
            var n = this.imgSrc(e, t),
                i = r.extend({
                    src: n
                }, this.getDimensionsFromSrc(n));
            return i
        },
        optimizedWidth: function(e, t) {
            var r, s = t.rel_width || 1,
                a = t.targetMaxWidth || n.contentMax,
                c = t.target_width;
            if (!c) {
                var l = a ? o.min(i.Resize.width(), a) : i.Resize.width();
                c = s * l * .94
            }
            return r = this.getClosestSize(c), r < e && r
        },
        getClosestSize: function(e) {
            var t, n = e * s;
            return r(this.sizes).each(function(e, i) {
                if (t = i, n < i) return !1
            }), t
        },
        getDimensionsFromSrc: function(e) {
            var t = e && e.split("?")[1],
                n = t && decodeURIComponent(t).split("region=")[1];
            if (n) {
                var i = n.split("&")[0].split(","),
                    r = parseInt(i[2], 10),
                    s = parseInt(i[3], 10),
                    a = {
                        width: r,
                        height: s,
                        ratio: s / r,
                        half_width: r && o.round(r / 2)
                    };
                return a
            }
        },
        getQueryParams: function(e) {
            return e ? (e.indexOf("?") > -1 && (e = e.substr(e.indexOf("?") + 1)), e.split("&").reduce(function(e, t) {
                var n = t.split("=");
                return e[n[0]] = n[1], e
            }, {})) : {}
        }
    }
}(this);
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
var Hogan = {};
! function(e) {
    "use strict";

    function t(e, t, n) {
        var i;
        return t && "object" == typeof t && (void 0 !== t[e] ? i = t[e] : n && t.get && "function" == typeof t.get && (i = t.get(e))), i
    }

    function n(e, t, n, i, r, o) {
        function s() {}

        function a() {}
        s.prototype = e, a.prototype = e.subs;
        var c, l = new s;
        l.subs = new a, l.subsText = {}, l.buf = "", i = i || {}, l.stackSubs = i, l.subsText = o;
        for (c in t) i[c] || (i[c] = t[c]);
        for (c in i) i.hasOwnProperty(c) && (l.subs[c] = i[c]);
        r = r || {}, l.stackPartials = r;
        for (c in n) n.hasOwnProperty(c) && !r[c] && (r[c] = n[c]);
        for (c in r) r.hasOwnProperty(c) && (l.partials[c] = r[c]);
        return l
    }

    function i(e) {
        return String(null === e || void 0 === e ? "" : e)
    }

    function r(e) {
        return e = i(e), u.test(e) ? e.replace(o, "&amp;").replace(s, "&lt;").replace(a, "&gt;").replace(c, "&#39;").replace(l, "&quot;") : e
    }
    e.Template = function(e, t, n, i) {
        e = e || {}, this.r = e.code || this.r, this.c = n, this.options = i || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.buf = ""
    }, e.Template.prototype = {
        r: function() {
            return ""
        },
        v: r,
        t: i,
        render: function(e, t, n) {
            return this.ri([e], t || {}, n)
        },
        ri: function(e, t, n) {
            return this.r(e, t, n)
        },
        ep: function(e, t) {
            var i = this.partials[e],
                r = t[i.name];
            if (i.instance && i.base === r) return i.instance;
            if ("string" == typeof r) {
                if (!this.c) throw new Error("No compiler available.");
                r = this.c.compile(r, this.options)
            }
            if (!r) return null;
            if (this.partials[e].base = r, i.subs) {
                t.stackText || (t.stackText = {});
                for (var o in i.subs) i.subs.hasOwnProperty(o) && !t.stackText[o] && (t.stackText[o] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                r = n(r, i.subs, i.partials, this.stackSubs, this.stackPartials, t.stackText)
            }
            return this.partials[e].instance = r, r
        },
        rp: function(e, t, n, i) {
            var r = this.ep(e, n);
            return r ? r.ri(t, n, i) : ""
        },
        rs: function(e, t, n) {
            var i = e[e.length - 1];
            if (!d(i)) {
                if (!this.options.modelGet || "object" != typeof i || "number" != typeof i.length || "function" != typeof i.slice) return void n(e, t, this);
                i = i.slice(0, i.length)
            }
            for (var r = 0; r < i.length; r++) e.push(i[r]), n(e, t, this), e.pop()
        },
        s: function(e, t, n, i, r, o, s) {
            var a;
            return (!d(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, n, i, r, o, s)), a = !!e, !i && a && t && t.push("object" == typeof e ? e : t[t.length - 1]), a)
        },
        d: function(e, n, i, r) {
            var o, s = e.split("."),
                a = this.f(s[0], n, i, r),
                c = this.options.modelGet,
                l = null;
            if ("." === e && d(n[n.length - 2])) a = n[n.length - 1];
            else
                for (var u = 1; u < s.length; u++) o = t(s[u], a, c), void 0 !== o ? (l = a, a = o) : a = "";
            return !(r && !a) && (r || "function" != typeof a || (n.push(l), a = this.mv(a, n, i), n.pop()), a)
        },
        f: function(e, n, i, r) {
            for (var o = !1, s = null, a = !1, c = this.options.modelGet, l = n.length - 1; l >= 0; l--)
                if (s = n[l], o = t(e, s, c), void 0 !== o) {
                    a = !0;
                    break
                }
            return a ? (r || "function" != typeof o || (o = this.mv(o, n, i)), o) : !r && ""
        },
        ls: function(e, t, n, r, o) {
            var s = this.options.delimiters;
            return this.options.delimiters = o, this.b(this.ct(i(e.call(t, r)), t, n)), this.options.delimiters = s, !1
        },
        ct: function(e, t, n) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(e, this.options).render(t, n)
        },
        b: function(e) {
            this.buf += e
        },
        fl: function() {
            var e = this.buf;
            return this.buf = "", e
        },
        ms: function(e, t, n, i, r, o, s) {
            var a, c = t[t.length - 1],
                l = e.call(c);
            return "function" == typeof l ? !!i || (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(l, c, n, a.substring(r, o), s)) : l
        },
        mv: function(e, t, n) {
            var r = t[t.length - 1],
                o = e.call(r);
            return "function" == typeof o ? this.ct(i(o.call(r)), r, n) : o
        },
        sub: function(e, t, n, i) {
            var r = this.subs[e];
            r && (this.activeSub = e, r(t, n, this, i), this.activeSub = !1)
        }
    };
    var o = /&/g,
        s = /</g,
        a = />/g,
        c = /\'/g,
        l = /\"/g,
        u = /[&<>\"\']/,
        d = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
}("undefined" != typeof exports ? exports : Hogan), this.Whiskers || ! function(e) {
        "use strict";
        var t = e.Hogan,
            n = function(e, t) {
                var n, i = this;
                for (e = e.split("."); e.length > 1;) n = e.shift(), i = i.hasOwnProperty(n) ? i[n] : i[n] = {};
                i[e[0]] = t
            },
            i = e.Whiskers = function(e, r) {
                var o = "function" == typeof t.compile ? t : null;
                n.call(i, e, new t.Template(r, "", o, {
                    modelGet: !0
                }))
            }
    }(this), Whiskers("partials.style_elements.module_styles", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.s(i.f("style_options", e, t, 1), e, t, 0, 18, 6113, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" <!-- /* "), n.b(n.v(n.f("view", e, t, 0))), n.b(" module "), n.b(n.v(n.f("ref", e, t, 0))), n.b(" */ --> "), n.s(n.f("background_options", e, t, 1), e, t, 0, 81, 942, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ "), n.s(n.f("background_color", e, t, 1), e, t, 0, 149, 214, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" background-image: none; background-color: "), n.b(n.v(n.f("background_color", e, t, 0))), n.b("; ")
                    }), e.pop()), n.b(" "), n.s(n.f("gradient_fade", e, t, 1), e, t, 0, 254, 331, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" background-image: linear-gradient("), n.b(n.v(n.f("background_color", e, t, 0))), n.b(", "), n.b(n.v(n.f("gradient_fade", e, t, 0))), n.b("); ")
                    }), e.pop()), n.b(" "), n.s(n.f("background_image", e, t, 1), e, t, 0, 371, 447, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" background-size: 100% auto; background-position: "), n.b(n.v(n.f("background_alignment", e, t, 0))), n.b("; ")
                    }), e.pop()), n.b(" } "), n.s(n.d("background_image.mobile", e, t, 1), e, t, 0, 499, 763, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" @media screen and (max-width: 420px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-image: url('"), n.b(n.v(n.f("src", e, t, 0))), n.s(n.f("width", e, t, 1), e, t, 0, 592, 602, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("&width=420")
                        }), e.pop()), n.b("'); } } @media screen and (min-width: 421px) and (max-width: 679px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-image: url('"), n.b(n.v(n.f("src", e, t, 0))), n.s(n.f("width", e, t, 1), e, t, 0, 735, 745, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("&width=680")
                        }), e.pop()), n.b("'); } } ")
                    }), e.pop()), n.b(" "), n.s(n.d("background_image.desktop", e, t, 1), e, t, 0, 821, 912, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" @media screen and (min-width: 680px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-image: url('"), n.b(n.v(n.f("src", e, t, 0))), n.b("'); } } ")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" "), n.s(n.f("bg_color", e, t, 1), e, t, 0, 979, 1082, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-color: "), n.b(n.v(n.f("bg_color", e, t, 0))), n.b("; background-image: none; } ")
                }), e.pop()), n.b(" "), n.s(n.f("images", e, t, 1), e, t, 0, 1107, 1664, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.s(n.f("background_image", e, t, 1), e, t, 0, 1129, 1642, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" "), n.b(" @media screen and (min-width: 680px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-size: 100% auto; "), n.s(n.d("background_image.url", e, t, 1), e, t, 0, 1266, 1314, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("background-image: url("), n.b(n.v(n.d("background_image.url", e, t, 0))), n.b(");")
                        }), e.pop()), n.b(" "), n.s(n.f("alignment", e, t, 1), e, t, 0, 1354, 1394, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("background-position: "), n.b(n.v(n.f("alignment", e, t, 0))), n.b(" left;")
                        }), e.pop()), n.b(" } } "), n.s(n.f("retina_url", e, t, 1), e, t, 0, 1428, 1626, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(" @media screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 680px), screen and (min-resolution: 144dpi) and (min-width: 680px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-image: url("), n.b(n.v(n.f("retina_url", e, t, 0))), n.b("); } } ")
                        }), e.pop()), n.b(" ")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" "), n.s(n.f("bg_image_styles", e, t, 1), e, t, 0, 1696, 1956, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" @media screen and (min-width: 680px){ "), n.s(n.f("image_repeat", e, t, 1), e, t, 0, 1819, 1873, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-repeat: "), n.b(n.v(n.f("image_repeat", e, t, 0))), n.b("; } ")
                    }), e.pop()), n.b(" "), n.s(n.f("size", e, t, 1), e, t, 0, 1900, 1944, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ background-size: "), n.b(n.v(n.f("size", e, t, 0))), n.b("; } ")
                    }), e.pop()), n.b(" } ")
                }), e.pop()), n.b(" "), n.s(n.f("overlay_styles", e, t, 1), e, t, 0, 1996, 2443, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" @media screen and (min-width: 680px){ "), n.s(n.f("opacity", e, t, 1), e, t, 0, 2075, 2128, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("#ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(" .module_overlay{ opacity: "), n.b(n.v(n.f("opacity", e, t, 0))), n.b("; }")
                    }), e.pop()), n.b(" "), n.s(n.f("color", e, t, 1), e, t, 0, 2151, 2211, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("#ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(" .module_overlay{ background-color: "), n.b(n.v(n.f("color", e, t, 0))), n.b("; }")
                    }), e.pop()), n.b(" "), n.s(n.f("overlay_image", e, t, 1), e, t, 0, 2240, 2422, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(' .module_overlay{ background-image: url("'), n.b(n.v(n.f("image", e, t, 0))), n.b('"); background-position: '), n.b(n.v(n.f("vertical_position", e, t, 0))), n.b(" left; background-repeat: "), n.b(n.v(n.f("image_repeat", e, t, 0))), n.b("; background-size: "), n.b(n.v(n.f("size", e, t, 0))), n.b("; } ")
                    }), e.pop()), n.b(" } ")
                }), e.pop()), n.b(" "), n.b(" "), n.s(n.f("border_image_options", e, t, 1), e, t, 0, 2516, 5529, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" "), n.s(n.f("repeat_border_images", e, t, 1), e, t, 0, 2569, 2642, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":before, #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":after{ background-repeat: repeat-x; } ")
                    }), e.pop()), n.b(" "), n.s(n.f("top_border_images", e, t, 1), e, t, 0, 2690, 3955, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" "), n.s(n.f("desktop_image", e, t, 1), e, t, 0, 2709, 3506, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(" @media screen and (min-width: 680px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":before{ background-image: url("), n.b(n.v(n.d("desktop_image.src", e, t, 0))), n.b("); padding-top: "), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b("; "), n.s(n.f("repeat_border_images", e, t, 1), e, t, 0, 2874, 2938, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.s(n.f("half_width", e, t, 1), e, t, 0, 2889, 2923, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                    n.b("background-size: "), n.b(n.v(n.f("half_width", e, t, 0))), n.b("px;")
                                }), e.pop())
                            }), e.pop()), n.b(" } #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ padding-top: calc("), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" + 1.6rem);} "), n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(" .bound{ margin-top: calc(-"), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" - 1.6rem) ;} } "), n.b(" "), n.s(n.f("preserved_space_1024_override", e, t, 1), e, t, 0, 3296, 3471, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(" @media screen and (min-width: 1024px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ padding-top: calc("), n.b(n.v(n.f("preserved_space_1024_override", e, t, 0))), n.b(" + 1.6rem);} "), n.b(" } ")
                            }), e.pop()), n.b(" ")
                        }), e.pop()), n.b(" "), n.s(n.f("mobile_image", e, t, 1), e, t, 0, 3542, 3937, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(" @media screen and (max-width: 679px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ padding-top: calc("), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" + 1.6rem) ;} #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(" .bound{ margin-top: calc(-"), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" - 1.6rem) ;} #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":before{ background-image: url("), n.b(n.v(n.d("mobile_image.src", e, t, 0))), n.b("); padding-top: "), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b("; "), n.s(n.f("repeat_border_images", e, t, 1), e, t, 0, 3843, 3907, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.s(n.f("half_width", e, t, 1), e, t, 0, 3858, 3892, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                    n.b("background-size: "), n.b(n.v(n.f("half_width", e, t, 0))), n.b("px;")
                                }), e.pop())
                            }), e.pop()), n.b(" } } ")
                        }), e.pop()), n.b(" ")
                    }), e.pop()), n.b(" "), n.s(n.f("bottom_border_images", e, t, 1), e, t, 0, 4003, 5503, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" "), n.s(n.f("desktop_image", e, t, 1), e, t, 0, 4022, 4938, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(" @media screen and (min-width: 680px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":after{ background-image: url("), n.b(n.v(n.d("desktop_image.src", e, t, 0))), n.b("); "), n.s(n.f("repeat_border_images", e, t, 1), e, t, 0, 4152, 4216, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.s(n.f("half_width", e, t, 1), e, t, 0, 4167, 4201, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                    n.b("background-size: "), n.b(n.v(n.f("half_width", e, t, 0))), n.b("px;")
                                }), e.pop())
                            }), e.pop()), n.b(" } #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(", #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":after{ padding-bottom: "), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" ;} #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(" .bound{ margin-bottom: -"), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" ;} "), n.b(" html.no-touch #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(".peekaboo:not(.expanded):not(.transitioning):hover{ padding-bottom: "), n.b(n.v(n.f("preserved_space_hover", e, t, 0))), n.b(" ;} } "), n.b(" "), n.s(n.f("preserved_space_1024_override", e, t, 1), e, t, 0, 4671, 4903, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(" @media screen and (min-width: 1024px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b("{ padding-bottom: "), n.b(n.v(n.f("preserved_space_1024_override", e, t, 0))), n.b("; } #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(".peekaboo:not(.expanded):not(.transitioning):hover{ padding-bottom: "), n.b(n.v(n.f("preserved_space_1024_hover_override", e, t, 0))), n.b(" ;} } ")
                            }), e.pop()), n.b(" ")
                        }), e.pop()), n.b(" "), n.s(n.f("mobile_image", e, t, 1), e, t, 0, 4974, 5485, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(" @media screen and (max-width: 679px){ #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":after{ background-image: url("), n.b(n.v(n.d("mobile_image.src", e, t, 0))), n.b("); "), n.s(n.f("repeat_border_images", e, t, 1), e, t, 0, 5103, 5167, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.s(n.f("half_width", e, t, 1), e, t, 0, 5118, 5152, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                    n.b("background-size: "), n.b(n.v(n.f("half_width", e, t, 0))), n.b("px;")
                                }), e.pop())
                            }), e.pop()), n.b(" } #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(", #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":after{ padding-bottom: "), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" ;} #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(" .bound{ margin-bottom: -"), n.b(n.v(n.f("preserved_space", e, t, 0))), n.b(" ;} "), n.b(" html.no-touch #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(".peekaboo:not(.expanded):not(.transitioning):hover{ padding-bottom: "), n.b(n.v(n.f("preserved_space_hover", e, t, 0))), n.b(" ;} } ")
                        }), e.pop()), n.b(" ")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" "), n.b(" "), n.s(n.f("peekaboo_options", e, t, 1), e, t, 0, 5619, 6091, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" "), n.s(n.f("open_text", e, t, 1), e, t, 0, 5663, 5809, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" html:not(.no-js)"), n.s(n.f("hide_open_text_on_desktop", e, t, 1), e, t, 0, 5710, 5716, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(".touch")
                        }), e.pop()), n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(':not(.expanded):before{ content: "'), n.b(n.v(n.f("open_text", e, t, 0))), n.b('"} ')
                    }), e.pop()), n.b(" "), n.s(n.f("close_text", e, t, 1), e, t, 0, 5839, 5982, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" html:not(.no-js)"), n.s(n.f("hide_close_text_on_desktop", e, t, 1), e, t, 0, 5887, 5893, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(".touch")
                        }), e.pop()), n.b(" #ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b('.expanded:before{ content: "'), n.b(n.v(n.f("close_text", e, t, 0))), n.b('"} ')
                    }), e.pop()), n.b(" "), n.s(n.f("text_alignment", e, t, 1), e, t, 0, 6017, 6071, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("#ref-"), n.b(n.v(n.f("ref", e, t, 0))), n.b(":before{ text-align: "), n.b(n.v(n.f("text_alignment", e, t, 0))), n.b("; }")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.Whiskers,
            i = e._;
        i.extend(t.Style, {
            applyStyleClasses: function(e) {
                var t = e.$el,
                    n = e.model,
                    i = n.get("style_options") || {};
                i.geo_hidden && !t.hasClass("geo-accepted") && t.addClass("geo-hidden")
            },
            getModuleStyles: function(e) {
                var t = e.model,
                    i = n.partials.style_elements.module_styles,
                    r = i.render(t);
                return r
            }
        })
    }(this),
    function(e) {
        "use strict";

        function t() {
            var e = {
                threshold: .01,
                rootMargin: "0px 0px " + h.LazyLoad.visibilityThreshold + "px 0px"
            };
            h.LazyLoad.ModuleObserver = new p(i, e)
        }

        function n(e) {
            f.each(e, function(e) {
                h.LazyLoad.ModuleObserver.observe(e.el)
            })
        }

        function i(e) {
            e.forEach(function(e) {
                if (e.intersectionRatio > 0) {
                    var t = d(e.target),
                        n = t.data("lazy-index"),
                        i = h.LazyLoad.moduleViews[n];
                    t.loadLazyImages(), o(i), i.loaded = !0, h.LazyLoad.ModuleObserver.unobserve(e.target)
                }
            })
        }

        function r(e) {
            return e.forEach(function(e, t) {
                e.$el.data("lazy-index", t)
            }), e
        }

        function o(e) {
            if (!e.model.get("styles_rendered")) {
                var t = h.Style.getModuleStyles(e);
                e.$el.siblings(".module_styles").append(t), e.model.set("styles_rendered", !0)
            }
        }

        function s() {
            var t = f.filter(h.LazyLoad.moduleViews, function(e) {
                return !e.loaded
            });
            if (t.length > 0) {
                var n = e.innerHeight,
                    i = d(e).scrollTop(),
                    r = n + i + h.LazyLoad.visibilityThreshold;
                t.forEach(function(e) {
                    var t = e.$el;
                    !e.loaded && r > t.offset().top && (t.loadLazyImages(), o(e), e.loaded = !0)
                })
            } else l(h.LazyLoad.burgerView), u(h.LazyLoad.burgerView)
        }

        function a(t) {
            d(e).on("scroll." + t.cid, f.throttle(s, 1e3)), t.boundToScroll = !0
        }

        function c(t) {
            d(e).on("resize." + t.cid, f.throttle(s, 1e3)), t.boundToResize = !0
        }

        function l(t) {
            t.boundToScroll && (d(e).off("scroll." + t.cid), t.boundToScroll = !1)
        }

        function u(t) {
            t.boundToResize && (d(e).off("resize." + t.cid), t.boundToResize = !1)
        }
        var d = e.jQuery,
            f = e._,
            h = e.Disney,
            p = e.IntersectionObserver;
        h.LazyLoad = h.LazyLoad || {}, f.extend(h.LazyLoad, {
            initialize: function(e) {
                this.burgerView = e, this.moduleViews = e.views, this.visibilityThreshold = 300, p ? (this.moduleViews = r(this.moduleViews), t(), n(this.moduleViews)) : (s(), a(this.burgerView), c(this.burgerView))
            },
            resetModule: function(e) {
                this.ModuleObserver ? this.ModuleObserver.observe(e.el) : e.loaded && (e.loaded = !1, s(), a(this.burgerView), c(this.burgerView))
            },
            remove: function(e) {
                this.ModuleObserver ? this.ModuleObserver.disconnect() : (l(e), u(e))
            }
        }), d.fn.extend({
            loadLazyImages: function() {
                d("img[data-src]", this).each(function() {
                    var e = d(this);
                    e.closest(".module").hasClass("geo-hidden") || e.parentsUntil(".module", ".lazy-deferred").length < 1 && e.swapSrc()
                })
            },
            enableLazyLoad: function() {
                return this.removeClass("lazy-deferred"), this
            },
            incrementLazyDoneCount: function() {
                var e = d(this).closest(".module");
                e.data("lazy-done", e.lazyDoneCount() + 1)
            },
            lazyDoneCount: function() {
                return d(this).data("lazy-done") || 0
            },
            incrementLazyTotalCount: function() {
                var e = d(this).closest(".module");
                e.data("lazy-total", e.lazyTotalCount() + 1)
            },
            lazyTotalCount: function() {
                return d(this).data("lazy-total") || 0
            },
            swapSrc: function() {
                var e = this[0],
                    t = this.attr("data-src"),
                    n = this.attr("data-width"),
                    i = this.closest(".aspect");
                if (i.length > 0 && n) {
                    var r = i.width(),
                        o = {
                            src: t,
                            width: n
                        },
                        s = {
                            target_width: r
                        };
                    t = h.LumiereHelpers.imgSrc(o, s)
                }
                if (e.src !== t) {
                    var a = d(this);
                    a.incrementLazyTotalCount(), this.on("load", function() {
                        a.removeClass("no-src").prop("data-src", !1), a.closest(".aspect").removeClass("placeholder"), a.incrementLazyDoneCount()
                    }), this.on("error", function() {
                        a.incrementLazyDoneCount(), a.hideBrokenImage()
                    }), e.src = t
                } else this.prop("data-src", !1), e.complete && 0 === e.naturalWidth && this.hideBrokenImage()
            },
            hideBrokenImage: function() {
                this.addClass("no-src").closest(".aspect").removeClass("placeholder").addClass("load-failed")
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t, n = e.jQuery,
            i = e._,
            r = e.Backbone,
            o = e.Disney.LazyLoad,
            s = i.sortedIndex,
            a = r.Events,
            c = r.View,
            l = c.prototype.remove,
            u = "breakpoints",
            d = function(e, t, n) {
                var i = s(n, e + 1),
                    r = s(n, t + 1);
                return i !== r ? n.slice(Math.min(i, r), Math.max(i, r)) : []
            },
            f = r.Resize = {
                trigger: a.trigger,
                width: function() {
                    return t || e.innerWidth
                }
            };
        f[u] = [], i.each(["on", "off", "bind", "unbind"], function(t) {
            f[t] = function(n, r, o) {
                a[t].call(this, n, r, o), this[u] = i.compact(i.map(i.keys(this._events || {}), function(t) {
                    return e.parseInt(t)
                })).sort(function(e, t) {
                    return e - t
                })
            }
        }), r.View = c.extend({
            constructor: function(e) {
                c.call(this, e), this[u] && f.on(this[u], this.resize, this)
            },
            resize: function() {
                this.render(), o.resetModule(this)
            },
            remove: function() {
                return this[u] && f.off(this[u], this.resize, this), l.call(this)
            }
        }), n(function() {
            var i;
            t = i = f.width(), n(e).on("resize", function() {
                t = null;
                var e, n = f.width();
                n !== i && (e = d(i, n, f[u]), e.length && f.trigger(e.join(" "), n, i < n ? "up" : "down"), i = n)
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Spatula = {},
            n = e.jQuery,
            i = e._,
            r = e.Backbone,
            o = i.isFunction,
            s = i.map,
            a = t.whenAll = function(e) {
                return n.when.apply(n, e || [])
            },
            c = t.tryCall = function(e, t) {
                var n = e && e[t];
                if (o(n)) return n.apply(e, i.rest(arguments, 2))
            },
            l = {},
            u = {},
            d = {
                model: !0,
                collection: !0
            },
            f = [],
            h = function(e, t, n) {
                l[e] = t, u[e] = n
            };
        t.ContainerView = r.View.extend({
            mod: 0,
            transition: function(e) {
                if (e === this.current) return e.render();
                var t = this,
                    i = ++t.mod,
                    r = t.current,
                    o = e.el.parentNode === t.el,
                    l = a();
                return t.current = e, t.$el.css("minHeight", t.$el.height()), r || o || t.$el.empty(), t.trigger("begin", e), r && (r.hide && (l = n.when(r.hide()).then(l)), l.done(function() {
                    r.remove()
                })), l = a(s(this._cb, function(t) {
                    return t.call(this, e)
                }).concat([c(e, "load"), l])), l.fail(function() {
                    var n = Array.prototype.slice.call(arguments);
                    t.mod === i && (t.current = null, t.$el.empty(), t.trigger.apply(t, ["error", e].concat(n)))
                }), l = l.then(function() {
                    if (t.mod === i) return e.render(), !r && o || t.$el.empty().prepend(e.el), c(e, "ready"), t.trigger("ready", e), c(e, "show")
                }), l.then(function() {
                    return t.mod !== i ? n.Deferred().reject() : (t.$el.css("minHeight", ""), void t.trigger("end", e))
                })
            },
            loader: function(e) {
                (this._cb || (this._cb = [])).push(e)
            },
            render: function() {
                return c(this.current, "render"), this
            },
            ready: function() {
                return c(this.current, "ready"), this
            }
        }), t.RichView = r.View.extend({
            assets: d,
            load: function(e, t) {
                var n = this;
                return n._load || (n._load = a(s(n.assets, function(e, t) {
                    return l[t].call(n, e).done(function() {
                        n.trigger("load:" + t)
                    })
                })).done(function() {
                    n.trigger("load")
                })), n._load.then(e, t)
            },
            render: function() {
                var e = this,
                    t = e.load();
                return "resolved" === t.state() ? e.safeRender() : e._render || (e._render = !0, t.then(function() {
                    e.safeRender()
                })), e
            },
            safeRender: function() {},
            remove: function() {
                var e = this;
                return e.destroy(), e.trigger("destroy"), e.off(), i.each(e.assets, function(e, t) {
                    c(u, t, e)
                }), r.View.prototype.remove.apply(e, arguments), e
            },
            destroy: function() {}
        }, {
            assetLoader: h
        }), h("scripts", function(e) {
            return e = i.difference(e, f), a(s(e, function(e) {
                return f.push(e), n.ajax(e, {
                    dataType: "script",
                    cache: !0,
                    error: function() {
                        f = i.without(f, e)
                    }
                })
            }))
        }), n(function() {
            f = i.union(f, n("script[src]").not("[async]").map(function() {
                return n(this).attr("src")
            }).get())
        }), h("styles", function(e) {
            return a(s(e, function(e) {
                n("<link/>", {
                    "class": "css-" + this.cid,
                    rel: "stylesheet",
                    type: "text/css",
                    href: e
                }).appendTo("head")
            }))
        }, function() {
            n("link.css-" + this.cid).remove()
        }), h("templates", function(e, t) {
            return t || (t = this.templates = {}), a(s(e, function(e, i) {
                return n.ajax(e, {
                    cache: !0,
                    success: function(e) {
                        t[i] = e
                    }
                })
            }))
        }), h("data", function(e) {
            var t = this;
            return n.ajax(e, {
                dataType: "json",
                success: function(e) {
                    t.data = e
                }
            })
        }), i.each(d, function(e, t) {
            h(t, function(e) {
                return e = o(e.fetch) ? e : this[t], c(e, "fetch") || a()
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.Spatula,
            i = e.GOC,
            r = e.jQuery;
        r(function() {
            var e = t.redirect,
                i = t.top = new n.ContainerView({
                    el: "#main"
                });
            e && i.loader(e.loader)
        }), i && i.queue.push(["go", e.document.body]), r.ajaxSetup({
            timeout: 2e4
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.$;
        t.DisplayName = {
            swidEncrypt: function(e) {
                var t = n.Deferred();
                return n.post("/_displayname/encode", {
                    swid: e
                }, function(e) {
                    e.swid ? t.resolve(e.swid) : t.reject()
                }), t
            },
            decrypt: function(e) {
                var t = n.Deferred();
                return n.post("/_displayname/decode", {
                    swid: e
                }, function(e) {
                    e.displayName ? t.resolve(e.displayName) : t.reject()
                }), t
            }
        }
    }(this), Whiskers("entities.item", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<span class="col item'), i.s(i.f("lastRow", e, t, 1), e, t, 0, 33, 42, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" last-row")
            }), e.pop()), i.s(i.f("hidden", e, t, 1), e, t, 0, 65, 79, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" lazy-deferred")
            }), e.pop()), i.s(i.f("widthClass", e, t, 1), e, t, 0, 105, 120, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.f("widthClass", e, t, 0)))
            }), e.pop()), i.b('"> '), i.s(i.f("show_background_thumb", e, t, 1), e, t, 0, 164, 255, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="thumbnail-background" style="background-image:url('), n.b(n.v(n.d("thumb_data.src", e, t, 0))), n.b(')"></div> ')
            }), e.pop()), i.b(" "), i.b(" "), i.s(i.f("href", e, t, 1), e, t, 0, 341, 656, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" '), n.s(n.f("event_value", e, t, 1), e, t, 0, 377, 434, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' data-core-id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" data-event-link="'), n.b(n.v(n.f("event_value", e, t, 0))), n.b('" ')
                }), e.pop()), n.b(" "), n.s(n.f("target", e, t, 1), e, t, 0, 462, 481, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('target="'), n.b(n.v(n.f("target", e, t, 0))), n.b('"')
                }), e.pop()), n.b(' class="arrow entity-link'), n.s(n.f("age_gate", e, t, 1), e, t, 0, 530, 540, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" age-gated")
                }), e.pop()), n.b('" '), n.s(n.f("age_gate", e, t, 1), e, t, 0, 568, 591, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('data-age="'), n.b(n.v(n.f("age_gate", e, t, 0))), n.b('"')
                }), e.pop()), n.s(n.f("ping", e, t, 1), e, t, 0, 613, 641, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' data-ping="'), n.b(n.v(n.d("ping.static", e, t, 0))), n.b('"')
                }), e.pop()), n.b("></a> ")
            }), e.pop()), i.b(" "), i.s(i.f("is_ad", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.rp("<entity_container0", e, t, "")), i.b(" "), i.s(i.f("is_ad", e, t, 1), e, t, 0, 718, 732, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(n.t(n.f("adMarkup", e, t, 0)))
            }), e.pop()), i.b(" </span>"), i.fl()
        },
        partials: {
            "<entity_container0": {
                name: "entity_container",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("entities.entity_container", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<div class="entity-container entity-type-'), i.b(i.v(i.f("entity_type", e, t, 0))), i.b(" "), i.s(i.f("entity_config", e, t, 1), e, t, 0, 75, 473, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" ratio-"), n.b(n.v(n.f("aspect_ratio", e, t, 0))), n.b(" "), n.s(n.f("href", e, t, 1), e, t, 0, 108, 117, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("links-out")
                }), e.pop()), n.b(" "), n.s(n.f("rounded_corners", e, t, 1), e, t, 0, 147, 174, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("corners-"), n.b(n.v(n.f("rounded_corners", e, t, 0)))
                }), e.pop()), n.b(" "), n.s(n.f("title_overlay", e, t, 1), e, t, 0, 213, 226, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("title-overlay")
                }), e.pop()), n.b(" "), n.s(n.f("stack_box", e, t, 1), e, t, 0, 259, 275, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("stack-box-entity")
                }), e.pop()), n.b(" "), n.s(n.f("details_visibility", e, t, 1), e, t, 0, 313, 343, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("details_visibility", e, t, 0))), n.b("-details")
                }), e.pop()), n.b(" "), n.s(n.f("skip_hover", e, t, 1), e, t, 0, 382, 392, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("skip-hover")
                }), e.pop()), n.b(" "), n.s(n.f("show_ptitle", e, t, 1), e, t, 0, 424, 456, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.s(n.f("ptitle", e, t, 1), e, t, 0, 435, 445, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("has-ptitle")
                    }), e.pop())
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("item_aspect_ratio_override", e, t, 1), e, t, 0, 523, 544, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b("aspect-ratio-override")
            }), e.pop()), i.b('"> <div class="entity-mask"> '), i.b(" "), i.s(i.f("href", e, t, 1), e, t, 0, 642, 927, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <a href="'), n.s(n.f("first_episode_url", e, t, 1), e, t, 0, 674, 695, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("first_episode_url", e, t, 0)))
                }), e.pop()), n.b(" "), n.s(n.f("first_episode_url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("href", e, t, 0))), n.b('" '), n.s(n.f("id", e, t, 1), e, t, 0, 779, 800, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('data-core-id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('"')
                }), e.pop()), n.b(" "), n.s(n.f("event_value", e, t, 1), e, t, 0, 824, 857, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('data-event-link="'), n.b(n.v(n.f("event_value", e, t, 0))), n.b('"')
                }), e.pop()), n.b(' class="entity-link outer-link" '), n.b(n.rp("<href_attributes0", e, t, "")), n.b("> ")
            }), e.pop()), i.b(" "), i.b(' <div class="'), i.b(i.v(i.f("entity_type", e, t, 0))), i.b("-box entity-box "), i.s(i.f("entity_config", e, t, 1), e, t, 0, 1024, 1121, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("thumb_outline", e, t, 1), e, t, 0, 1043, 1055, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("thumb-border")
                }), e.pop()), n.b(" "), n.s(n.f("subtle_hover", e, t, 1), e, t, 0, 1091, 1103, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("subtle-hover")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b('"> '), i.b(" "), i.s(i.d("entity_config.stack_box", e, t, 1), e, t, 0, 1198, 1254, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="stack-box"> <div class="top-photo-border"> ')
            }), e.pop()), i.b(' <div class="aspect '), i.s(i.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (i.b(" "), i.s(i.d("thumb_data.src", e, t, 1), e, t, 0, 1335, 1374, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.s(n.f("preloaded", e, t, 1), e, t, 1, 0, 0, "") || n.b("placeholder")
            }), e.pop()), i.b(" ")), i.b('"> '), i.b(" "), i.s(i.f("show_entity_play_icon", e, t, 1), e, t, 0, 1484, 1516, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.rp("<entities/entity_play_icon1", e, t, "")), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("nowPlaying", e, t, 1), e, t, 0, 1558, 1627, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="active"><span>'), n.b(n.v(n.d("translations.now_playing", e, t, 0))), n.b("</span></div> ")
            }), e.pop()), i.b(" "), i.s(i.f("video_thumbnail_badge", e, t, 1), e, t, 0, 1669, 1737, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <span class="video_thumbnail_badge badge_'), n.b(n.v(n.f("type", e, t, 0))), n.b('">'), n.b(n.v(n.f("text", e, t, 0))), n.b("</span> ")
            }), e.pop()), i.b(" "), i.s(i.f("thumb_data", e, t, 1), e, t, 0, 1779, 2273, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.s(n.d("thumb_data.src", e, t, 1), e, t, 0, 1798, 2254, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 0, 1857, 1967, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' <noscript> <img src="'), n.b(n.v(n.d("thumb_data.src", e, t, 0))), n.b('" class="thumb" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('" '), n.b(n.rp("<image_attributes2", e, t, "")), n.b("> </noscript> ")
                    }), e.pop()), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (n.b(' <img class="thumb'), n.s(n.f("preloaded", e, t, 1), e, t, 1, 0, 0, "") || n.b(" no-src"), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('" data-src="'), n.b(n.v(n.d("thumb_data.src", e, t, 0))), n.b('" '), n.s(n.f("preloaded", e, t, 1), e, t, 0, 2112, 2135, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b('src="'), n.b(n.v(n.f("preloaded_src", e, t, 0))), n.b('"')
                    }), e.pop()), n.b(" "), n.b(n.rp("<image_attributes3", e, t, "")), n.b('> <div class="thumb-button-overlay">'), n.b(n.v(n.d("translations.take_quiz", e, t, 0))), n.b("</div> ")), n.b(" ")
                }), e.pop())
            }), e.pop()), i.b(" "), i.s(i.f("profile_gallery", e, t, 1), e, t, 0, 2309, 2493, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <img class="thumb'), n.s(n.f("preloaded", e, t, 1), e, t, 1, 0, 0, "") || n.b(" no-src"), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('" data-src="'), n.b(n.v(n.f("gallery_image_thumb", e, t, 0))), n.b('" '), n.s(n.f("preloaded", e, t, 1), e, t, 0, 2432, 2455, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('src="'), n.b(n.v(n.f("preloaded_src", e, t, 0))), n.b('"')
                }), e.pop()), n.b(" "), n.b(n.rp("<image_attributes4", e, t, "")), n.b("> ")
            }), e.pop()), i.b(" "), i.s(i.f("sponsored_content_type", e, t, 1), e, t, 0, 2541, 2611, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <span class="badge sponsor-badge-'), n.b(n.v(n.f("sponsored_content_type", e, t, 0))), n.b('"></span> ')
            }), e.pop()), i.b(" "), i.s(i.f("duration", e, t, 1), e, t, 0, 2652, 2698, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <time aria-hidden="true">'), n.b(n.v(n.f("duration", e, t, 0))), n.b("</time> ")
            }), e.pop()), i.b(" "), i.s(i.f("show_image_stamp", e, t, 1), e, t, 0, 2733, 2766, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.rp("<entities/entity_item_count5", e, t, "")), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("profile_gallery", e, t, 1), e, t, 0, 2808, 3080, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="'), n.b(n.v(n.f("entity_type", e, t, 0))), n.b('-title-overlay"> <span> '), n.s(n.d("translations.added", e, t, 1), e, t, 0, 2883, 2905, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.d("translations.added", e, t, 0)))
                }), e.pop()), n.b(" "), n.b(n.v(n.f("post_date_diff", e, t, 0))), n.b(' </span> <span class="stickerbook-name"> '), n.s(n.d("translations.via", e, t, 1), e, t, 0, 3009, 3029, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.d("translations.via", e, t, 0)))
                }), e.pop()), n.b(" "), n.b(n.v(n.f("ugc_title", e, t, 0))), n.b(" </span> </div> ")
            }), e.pop()), i.b(" </div> "), i.b(" "), i.s(i.d("entity_config.stack_box", e, t, 1), e, t, 0, 3165, 3179, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" </div></div> ")
            }), e.pop()), i.b(" "), i.b(" </div> "), i.b(" "), i.s(i.f("href", e, t, 1), e, t, 0, 3281, 3285, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b("</a>")
            }), e.pop()), i.b(" "), i.b(' <div class="entity-details '), i.s(i.f("price", e, t, 1), e, t, 0, 3394, 3403, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b("has-price")
            }), e.pop()), i.b(" "), i.s(i.f("duration", e, t, 1), e, t, 0, 3427, 3440, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b("has-timestamp")
            }), e.pop()), i.b(" "), i.s(i.f("entity_config", e, t, 1), e, t, 0, 3472, 3588, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("text_alignment", e, t, 1), e, t, 0, 3492, 3515, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("text-"), n.b(n.v(n.f("text_alignment", e, t, 0)))
                }), e.pop()), n.b(" "), n.s(n.f("truncate_title", e, t, 1), e, t, 0, 3554, 3568, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("truncate-title")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b('"> '), i.s(i.f("show_details_header", e, t, 1), e, t, 0, 3633, 3976, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <h4 class="entity-details-header"> '), n.s(n.f("is_video_collection", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.s(n.f("header_data", e, t, 1), e, t, 0, 3710, 3719, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("title", e, t, 0)));
                }), e.pop()), n.b(" "), n.s(n.f("header_data", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.s(n.f("allow_header_translation", e, t, 1), e, t, 0, 3782, 3815, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.f("featured_entity_translation", e, t, 0))), n.b(" ")
                }), e.pop()), n.b(" ")), n.b(" ")), n.b(" "), n.s(n.f("is_video_collection", e, t, 1), e, t, 0, 3911, 3945, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.f("video_collection_translation", e, t, 0))), n.b(" ")
                }), e.pop()), n.b(" </h4> ")
            }), e.pop()), i.b(" "), i.b(" "), i.s(i.f("isUgcImage", e, t, 1), e, t, 1, 0, 0, "") || (i.b(" "), i.s(i.f("title", e, t, 1), e, t, 0, 4052, 4458, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(" "), n.s(n.f("href", e, t, 1), e, t, 0, 4091, 4164, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" class="entity-link title-link" '), n.b(n.rp("<href_attributes6", e, t, "")), n.b("> ")
                }), e.pop()), n.b(' <h3 class="title"> '), n.s(n.f("truncated_title", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.s(n.f("display_title", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("title", e, t, 0))), n.b(" "), n.s(n.f("display_title", e, t, 1), e, t, 0, 4278, 4297, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.t(n.f("display_title", e, t, 0)))
                }), e.pop()), n.b(" ")), n.b(" "), n.s(n.f("truncated_title", e, t, 1), e, t, 0, 4357, 4378, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.t(n.f("truncated_title", e, t, 0)))
                }), e.pop()), n.b(" </h3> "), n.b(" "), n.s(n.f("href", e, t, 1), e, t, 0, 4444, 4448, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("</a>")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" ")), i.b(" "), i.s(i.f("isUgcImage", e, t, 1), e, t, 0, 4500, 4927, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("ugc_title", e, t, 1), e, t, 0, 4515, 4912, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" "), n.s(n.f("href", e, t, 1), e, t, 0, 4554, 4627, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" class="entity-link title-link" '), n.b(n.rp("<href_attributes7", e, t, "")), n.b("> ")
                    }), e.pop()), n.b(' <h3 class="title"> '), n.s(n.d("translations.via", e, t, 1), e, t, 0, 4677, 4697, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.v(n.d("translations.via", e, t, 0)))
                    }), e.pop()), n.b(" "), n.b(n.v(n.f("ugc_title", e, t, 0))), n.b(' </h3> <span class="subtitle"> '), n.s(n.d("translations.added", e, t, 1), e, t, 0, 4786, 4808, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.v(n.d("translations.added", e, t, 0)))
                    }), e.pop()), n.b(" "), n.b(n.v(n.f("post_date_diff", e, t, 0))), n.b(" </span> "), n.b(" "), n.s(n.f("href", e, t, 1), e, t, 0, 4898, 4902, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("</a>")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.b(" "), i.s(i.d("entity_config.show_ptitle", e, t, 1), e, t, 0, 4998, 5056, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("ptitle", e, t, 1), e, t, 0, 5010, 5044, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<h4 class="ptitle">'), n.b(n.v(n.f("ptitle", e, t, 0))), n.b("</h4>")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("short_desc", e, t, 1), e, t, 0, 5102, 5138, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <p class="desc">'), n.b(n.v(n.f("short_desc", e, t, 0))), n.b("</p> ")
            }), e.pop()), i.b(" "), i.s(i.f("price", e, t, 1), e, t, 0, 5164, 5324, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <p class="price skip-text-styles"> '), n.s(n.f("on_sale", e, t, 1), e, t, 0, 5212, 5296, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.s(n.f("regular_price", e, t, 1), e, t, 0, 5230, 5278, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' <span class="regular">'), n.b(n.v(n.f("regular_price", e, t, 0))), n.b("</span> ")
                    }), e.pop())
                }), e.pop()), n.b(" "), n.b(n.v(n.f("price", e, t, 0))), n.b(" </p> ")
            }), e.pop()), i.b(" "), i.s(i.f("show_image_stamp", e, t, 1), e, t, 1, 0, 0, "") || (i.b(" "), i.b(i.rp("<entities/entity_item_count8", e, t, "")), i.b(" ")), i.b(" "), i.b(" "), i.s(i.f("show_cta_link", e, t, 1), e, t, 0, 5469, 5820, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("href", e, t, 1), e, t, 0, 5479, 5810, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" class="entity-link cta-link '), n.s(n.f("cta_button_title", e, t, 1), e, t, 0, 5548, 5576, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("cta-button blue button large")
                    }), e.pop()), n.b(' ada-el-focus" '), n.b(n.rp("<href_attributes9", e, t, "")), n.b(" "), n.s(n.f("cta_button_title", e, t, 1), e, t, 0, 5654, 5667, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b('role="button"')
                    }), e.pop()), n.b("> "), n.s(n.f("cta_button_title", e, t, 1), e, t, 0, 5711, 5742, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" <h4>"), n.b(n.v(n.f("cta_button_title", e, t, 0))), n.b("</h4> ")
                    }), e.pop()), n.b(" </a> "), n.b(" ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.b(" </div> "), i.b(" "), i.s(i.d("translations.show_episode_info", e, t, 1), e, t, 0, 5954, 6157, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("episode_number", e, t, 1), e, t, 0, 5974, 6137, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <div class="episode-number"> '), n.s(n.f("season_number", e, t, 1), e, t, 0, 6022, 6067, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" "), n.b(n.v(n.d("translations.season", e, t, 0))), n.b(" "), n.b(n.v(n.f("season_number", e, t, 0))), n.b(" - ")
                    }), e.pop()), n.b(" "), n.b(n.v(n.d("translations.episode", e, t, 0))), n.b(" "), n.b(n.v(n.f("episode_number", e, t, 0))), n.b(" </div> ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("is_video_collection", e, t, 1), e, t, 0, 6217, 6332, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="overlay-container"> '), n.s(n.f("overlay_videos", e, t, 1), e, t, 0, 6269, 6305, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.rp("<entities/entity_overlay_video10", e, t, "")), n.b(" ")
                }), e.pop()), n.b(" </div> ")
            }), e.pop()), i.b(" "), i.b(" </div> "), i.s(i.f("content_flag", e, t, 1), e, t, 0, 6401, 6464, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <p class="content-flag skip-text-styles">'), n.b(n.v(n.f("content_flag", e, t, 0))), n.b("</p> ")
            }), e.pop()), i.b(" "), i.b(" </div>"), i.fl()
        },
        partials: {
            "<href_attributes0": {
                name: "href_attributes",
                partials: {},
                subs: {}
            },
            "<entities/entity_play_icon1": {
                name: "entities/entity_play_icon",
                partials: {},
                subs: {}
            },
            "<image_attributes2": {
                name: "image_attributes",
                partials: {},
                subs: {}
            },
            "<image_attributes3": {
                name: "image_attributes",
                partials: {},
                subs: {}
            },
            "<image_attributes4": {
                name: "image_attributes",
                partials: {},
                subs: {}
            },
            "<entities/entity_item_count5": {
                name: "entities/entity_item_count",
                partials: {},
                subs: {}
            },
            "<href_attributes6": {
                name: "href_attributes",
                partials: {},
                subs: {}
            },
            "<href_attributes7": {
                name: "href_attributes",
                partials: {},
                subs: {}
            },
            "<entities/entity_item_count8": {
                name: "entities/entity_item_count",
                partials: {},
                subs: {}
            },
            "<href_attributes9": {
                name: "href_attributes",
                partials: {},
                subs: {}
            },
            "<entities/entity_overlay_video10": {
                name: "entities/entity_overlay_video",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("entities.entity_play_icon", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<div class="entity-play-icon" tabindex="-1"> <div class="inactive-play"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516 516"> <circle cx="258" cy="258" r="250"/> <path d="M182.63,183.22V347.16a9.29,9.29,0,0,0,13.44,8.31L360,273.5a9.29,9.29,0,0,0,0-16.62l-163.94-82A9.29,9.29,0,0,0,182.63,183.22Z"/> </svg> </div> <div class="active-play"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516 516"> <path d="M440.4,75.6C391.7,26.8,326.9,0,258,0C189.1,0,124.3,26.8,75.6,75.6S0,189.1,0,258 c0,68.9,26.8,133.7,75.6,182.4S189.1,516,258,516c68.9,0,133.7-26.8,182.4-75.6S516,326.9,516,258C516,189.1,489.2,124.3,440.4,75.6 z M359,273.5l-163.9,82c-1.3,0.6-2.7,1-4.1,1c-5.1,0-9.3-4.2-9.3-9.3V183.2c0-1.4,0.3-2.9,1-4.2c2.3-4.6,7.9-6.5,12.5-4.2l163.9,82 c1.8,0.9,3.3,2.4,4.2,4.2C365.5,265.6,363.6,271.2,359,273.5z"/> </svg> </div> </div>'), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("entities.entity_item_count", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.s(i.f("item_count_translation", e, t, 1), e, t, 0, 27, 176, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("item_count", e, t, 1), e, t, 0, 43, 160, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <p class="item-count'), n.s(n.f("show_image_stamp", e, t, 1), e, t, 0, 85, 91, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("-stamp")
                    }), e.pop()), n.b('">'), n.b(n.v(n.f("item_count", e, t, 0))), n.b(" "), n.b(n.v(n.f("item_count_translation", e, t, 0))), n.b("</p> ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("entities.entity_overlay_video", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<a class="overlay-link '), i.s(i.f("is_playlist", e, t, 1), e, t, 0, 39, 57, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" overlay-link-mask")
            }), e.pop()), i.b('" href="'), i.s(i.f("is_playlist", e, t, 1), e, t, 0, 97, 113, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(n.v(n.f("content_path", e, t, 0)))
            }), e.pop()), i.b(" "), i.s(i.f("is_playlist", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.v(i.d("video.href", e, t, 0))), i.b('"> <div class="overlay-video '), i.s(i.f("is_playlist", e, t, 1), e, t, 0, 221, 238, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" overlay-playlist")
            }), e.pop()), i.b('"> '), i.s(i.d("video.thumb_data", e, t, 1), e, t, 0, 278, 412, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.d("video.thumb_data.src", e, t, 1), e, t, 0, 304, 386, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <img src="'), n.b(n.v(n.d("video.thumb_data.src", e, t, 0))), n.b('" class="overlay-bg" alt="'), n.b(n.v(n.d("video.alt_text", e, t, 0))), n.b('"> ')
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("is_playlist", e, t, 1), e, t, 0, 450, 524, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="video-collection-count"> <span>'), n.b(n.v(n.f("video_count", e, t, 0))), n.b("</span> </div> ")
            }), e.pop()), i.b(" </div> </a>"), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.image_attributes", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.s(i.f("width", e, t, 1), e, t, 0, 10, 34, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' data-width="'), n.b(n.v(n.f("width", e, t, 0))), n.b('" ')
            }), e.pop()), i.b(" "), i.s(i.f("height", e, t, 1), e, t, 0, 56, 81, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b('data-height="'), n.b(n.v(n.f("height", e, t, 0))), n.b('" ')
            }), e.pop()), i.b(" "), i.s(i.f("aspect_ratio", e, t, 1), e, t, 0, 110, 147, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b('data-aspect_ratio="'), n.b(n.v(n.f("aspect_ratio", e, t, 0))), n.b('" ')
            }), e.pop()), i.b(" "), i.s(i.f("orientation", e, t, 1), e, t, 0, 181, 216, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b('data-orientation="'), n.b(n.v(n.f("orientation", e, t, 0))), n.b('" ')
            }), e.pop()), i.b(" "), i.s(i.f("optimal_w", e, t, 1), e, t, 0, 247, 278, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b('data-optimal_w="'), n.b(n.v(n.f("optimal_w", e, t, 0))), n.b('" ')
            }), e.pop()), i.b(" "), i.s(i.f("lumiere_enabled", e, t, 1), e, t, 1, 0, 0, "") || i.b('data-legacy="true"'), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.href_attributes", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('data-title="'), i.s(i.f("title", e, t, 1), e, t, 0, 22, 31, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(n.v(n.f("title", e, t, 0)))
            }), e.pop()), i.s(i.f("title", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.v(i.f("ref_title_slug", e, t, 0))), i.b('"'), i.s(i.f("target", e, t, 1), e, t, 0, 91, 111, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' target="'), n.b(n.v(n.f("target", e, t, 0))), n.b('"')
            }), e.pop()), i.s(i.f("age_gate", e, t, 1), e, t, 0, 135, 159, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' data-age="'), n.b(n.v(n.f("age_gate", e, t, 0))), n.b('"')
            }), e.pop()), i.s(i.f("ping", e, t, 1), e, t, 0, 181, 209, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' data-ping="'), n.b(n.v(n.d("ping.static", e, t, 0))), n.b('"')
            }), e.pop()), i.s(i.f("anchor_link", e, t, 1), e, t, 0, 234, 264, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' data-anchor="'), n.b(n.v(n.f("anchor_link", e, t, 0))), n.b('"')
            }), e.pop()), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.icon_header", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.s(i.f("icon_type", e, t, 1), e, t, 0, 14, 96, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="header_icon"> <div class="icon_'), n.b(n.v(n.f("icon_type", e, t, 0))), n.b(' icon_img"></div> </div> ')
            }), e.pop()), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.module_elements.module_header", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.s(i.f("is_ad", e, t, 1), e, t, 0, 10, 65, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b('<div class="ad-module-notice">'), n.b(n.v(n.d("translations.ad", e, t, 0))), n.b("</div>")
            }), e.pop()), i.b(' <div class="module_header_container'), i.s(i.f("has_filters", e, t, 1), e, t, 0, 127, 139, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" has-filters")
            }), e.pop()), i.b('"> '), i.s(i.f("has_title_content", e, t, 1), e, t, 0, 180, 1125, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="module_header'), n.s(n.f("icon_type", e, t, 1), e, t, 0, 220, 225, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" icon")
                }), e.pop()), n.s(n.f("desc", e, t, 1), e, t, 1, 0, 0, "") || n.b(" no-desc"), n.s(n.f("is_ad", e, t, 1), e, t, 0, 275, 285, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" ad-module")
                }), e.pop()), n.b('"> '), n.b(n.rp("<iconHeader0", e, t, "")), n.b(' <div class="title"> <h'), n.b(n.v(n.f("heading_level", e, t, 0))), n.s(n.f("module_title_logo", e, t, 1), e, t, 0, 375, 401, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' class="module-title-logo"')
                }), e.pop()), n.b("> "), n.s(n.f("title", e, t, 1), e, t, 0, 435, 459, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" <span>"), n.b(n.v(n.f("title", e, t, 0))), n.b("</span> ")
                }), e.pop()), n.b(" "), n.s(n.d("module_title_logo.image_assets.logo", e, t, 1), e, t, 0, 510, 930, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <span class="title-logo"> '), n.s(n.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (n.b('<img class="no-src" data-src="'), n.b(n.v(n.f("src", e, t, 0))), n.b('" alt="'), n.b(n.v(n.d("module_title_logo.image_alt_text", e, t, 0))), n.b('" '), n.s(n.f("half_width", e, t, 1), e, t, 0, 647, 677, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b('style="width:'), n.b(n.v(n.f("half_width", e, t, 0))), n.b('px"')
                    }), e.pop()), n.b(" "), n.b(n.rp("<image_attributes1", e, t, "")), n.b(">")), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 0, 742, 908, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b('<noscript><img src="'), n.b(n.v(n.f("src", e, t, 0))), n.b('" alt="'), n.b(n.v(n.d("module_title_logo.image_alt_text", e, t, 0))), n.b('" '), n.s(n.f("half_width", e, t, 1), e, t, 0, 829, 859, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('style="width:'), n.b(n.v(n.f("half_width", e, t, 0))), n.b('px"')
                        }), e.pop()), n.b(" "), n.b(n.rp("<image_attributes2", e, t, "")), n.b("></noscript>")
                    }), e.pop()), n.b(" </span> ")
                }), e.pop()), n.b(" </h"), n.b(n.v(n.f("heading_level", e, t, 0))), n.b("> "), n.s(n.f("seeAll", e, t, 1), e, t, 0, 1004, 1065, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<a class="all" href="'), n.b(n.v(n.f("seeAll", e, t, 0))), n.b('">'), n.b(n.v(n.d("translations.see_all", e, t, 0))), n.b("</a>")
                }), e.pop()), n.b(" </div> "), n.s(n.f("desc", e, t, 1), e, t, 0, 1093, 1108, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("<p>"), n.b(n.v(n.f("desc", e, t, 0))), n.b("</p>")
                }), e.pop()), n.b(" </div> ")
            }), e.pop()), i.b(" "), i.s(i.f("has_filters", e, t, 1), e, t, 0, 1164, 1461, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="filters"> <a href="" class="filter"> <span>'), n.b(n.v(n.d("translations.all", e, t, 0))), n.b('</span> </a> <div class="filter_mobile"> <span>'), n.b(n.v(n.d("translations.all", e, t, 0))), n.b('</span> <select class="mobile_filter_list"> <option value="0" data-filter="All" selected="selected">'), n.b(n.v(n.d("translations.all", e, t, 0))), n.b("</option> </select> </div> </div> ")
            }), e.pop()), i.b(" </div> "), i.s(i.f("has_filters", e, t, 1), e, t, 0, 1501, 1569, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="filter_drawer"> <div class="filter_list"></div> </div> ')
            }), e.pop()), i.fl()
        },
        partials: {
            "<iconHeader0": {
                name: "iconHeader",
                partials: {},
                subs: {}
            },
            "<image_attributes1": {
                name: "image_attributes",
                partials: {},
                subs: {}
            },
            "<image_attributes2": {
                name: "image_attributes",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.console,
            n = e.Grill = {},
            i = e.Spatula,
            r = e.jQuery,
            o = e._,
            s = e.Backbone,
            a = e.Whiskers,
            c = e.Disney,
            l = c.LazyLoad,
            u = i.whenAll,
            d = s.Model,
            f = s.Collection,
            h = s.View,
            p = i.tryCall,
            v = function(n) {
                var i = e.onerror;
                t && t.error && t.error(n.stack || n.toString()), i && i(n.toString())
            },
            b = function(e, t) {
                try {
                    return p(e, t)
                } catch (e) {
                    v(e)
                }
            },
            g = function(e) {
                return o.map(this.views, function(t) {
                    return b(t, e)
                })
            },
            m = r.support.css3("transition") ? function(t) {
                var n = r.Deferred(),
                    i = r(e).selectTransitionEnd() + ".grill";
                return r(".overlay", t).on(i, function(e) {
                    this === e.target && (n.resolve(), t.off(i))
                }), n
            } : function() {
                return !0
            },
            y = n.Module = d.extend({
                initialize: function(e) {
                    this.options = e || {}, this.data = this.data(this.get("data")), this.on("change:data", function(e, t) {
                        e.data.reset(t)
                    })
                },
                data: function(e) {
                    return new f(e)
                }
            }),
            _ = n.Burger = f.extend({
                model: y,
                reset: function(e, t) {
                    if (this.options = t || {}, e.stack) {
                        for (var n in e) n in _.prototype || (this[n] = e[n]);
                        e = e.stack
                    }
                    return f.prototype.reset.call(this, e, t)
                }
            }),
            k = h.extend({
                initialize: function(e) {
                    this.template = e.template, this.options = e || {}, this.render(), this.model.on("change", this.render, this)
                },
                render: function() {
                    var e = this.$el;
                    this.setElement(r(this.template.render(this.model))), e.replaceWith(this.$el)
                }
            }),
            w = n.ListView = h.extend({
                tagName: "ul",
                initialize: function(e) {
                    this.options = e || {};
                    var t = this,
                        n = t.collection;
                    t.template = this.options.template, t.reset(), n.on("add", function(e, n) {
                        var i = n.indexOf(e),
                            r = t.spawn(e);
                        t.views.splice(i, 0, r), 0 === i ? t.$el.prepend(r.el) : t.views[i - 1].$el.after(r.el)
                    }), n.on("remove", function(e, n, i) {
                        t.views.splice(i.index, 1)[0].remove()
                    }), n.on("reset", t.reset, t)
                },
                reset: function() {
                    var e = this;
                    return e.views && o.invoke(e.views, "remove"), e.views = e.collection.map(function(t) {
                        var n = e.spawn(t);
                        return e.$el.append(n.el), n
                    }), e
                },
                spawn: function(e) {
                    return new k({
                        model: e,
                        template: this.template
                    })
                }
            }),
            x = {},
            E = n.ModuleView = i.RichView.extend({
                assets: {},
                tagName: "section",
                className: "module",
                global_components: {
                    images: {
                        image_attributes: a.partials.image_attributes
                    },
                    links: {
                        href_attributes: a.partials.href_attributes
                    },
                    entities: {
                        item: a.entities.item,
                        entity_container: a.entities.entity_container,
                        "entities/entity_play_icon": a.entities.entity_play_icon,
                        "entities/entity_item_count": a.entities.entity_item_count,
                        "entities/entity_overlay_video": a.entities.entity_overlay_video,
                        image_attributes: a.partials.image_attributes,
                        href_attributes: a.partials.href_attributes
                    },
                    module_header: {
                        module_header: a.partials.module_elements.module_header,
                        iconHeader: a.partials.icon_header
                    }
                },
                initialize: function(e) {
                    this.options = e || {}
                },
                GUEST_EVENT_VALUES: ["profile", "interests", "register", "newsletter"],
                needsGuestContext: function() {
                    var e = this;
                    return o.any(e.model.data.models, function(t) {
                        return t.get("has_guest_event") || o.contains(e.GUEST_EVENT_VALUES, t.get("event_value"))
                    })
                },
                ctx_additions: function() {
                    var e = {};
                    if (this.required_template_sets) {
                        var t = o.pick(this.global_components, this.required_template_sets);
                        o.each(t, function(t) {
                            o.extend(e, t)
                        })
                    }
                    return o.extend(e, this.included_components, this.additional_components)
                },
                safeRender: function() {
                    var e = this.template;
                    e && e.render && this.$el.html(e.render(this.model.toJSON()))
                },
                applyStyleClasses: function() {
                    c.Style.applyStyleClasses(this)
                },
                storeModelThumb: function(e, t) {
                    t && !e.get("hidden") && e.set({
                        preloaded: !0,
                        preloaded_src: t
                    })
                }
            }, {
                register: function(e, t, n) {
                    return x[e] = this.extend(t, n)
                },
                create: function(e, t) {
                    var n = x[e] || this,
                        i = new n(t),
                        r = i.style_classes || [],
                        s = i.model && i.model.get("title"),
                        a = i.model && i.model.get("style_options"),
                        c = i.model && i.model.get("config_options"),
                        l = i.model && i.model.get("tracking_options") || {},
                        u = a && a.additional_style_classes || [],
                        d = [e].concat(r, u),
                        f = i.model && i.model.get("ref"),
                        h = f && "ref-" + f,
                        p = c && c.anchor_name,
                        v = {
                            id: h,
                            "data-module": e,
                            "data-anchor-name": p,
                            "data-title": s
                        };
                    if (l.link_tracking_config) {
                        var b = ["link_module_name", "link_promo"],
                            g = o.pick(l.link_tracking_config, b);
                        o.isEmpty(g) || (o.forEach(g, function(e, t) {
                            v["data-" + t] = e
                        }), i.$el.data("link-tracking-config-keys", Object.keys(g)))
                    }
                    return i.$el.attr(v).addClass(d.join(" ")), i
                }
            }),
            T = w.prototype;
        n.BurgerView = w.extend({
            id: "burger",
            tagName: "article",
            className: "hidden",
            subview: E,
            initialize: function(e) {
                this.options = e || {}, T.initialize.call(this, e), r("<div/>", {
                    "class": "overlay"
                }).appendTo(this.el), r("<style/>", {
                    "class": "module_styles",
                    type: "text/css"
                }).appendTo(this.el)
            },
            load: function() {
                function e() {
                    return u(g.call(t, "load"))
                }
                var t = this;
                return this.collection.url ? this.collection.fetch().then(e) : e()
            },
            spawn: function(e) {
                return E.create(e.get("view"), {
                    model: e
                })
            },
            itemOptions: function() {
                return {}
            },
            title: function() {
                return this.collection.title
            },
            url: function() {
                return this.collection.url
            },
            render: function() {
                g.call(this, "render"), g.call(this, "applyStyleClasses")
            },
            ready: function() {
                u(g.call(this, "ready")), this.views.length && l.initialize(this)
            },
            show: function() {
                return !this.$el.hasClass("hidden") || (this.$el.removeClass("hidden"), u([m(this.$el)].concat(g.call(this, "show"))))
            },
            hide: function() {
                return !!this.$el.hasClass("hidden") || (this.$el.addClass("hidden"), u([m(this.$el)].concat(g.call(this, "hide"))))
            },
            remove: function() {
                g.call(this, "remove"), T.remove.call(this), l.remove(this)
            }
        }), n.BunView = E.extend({
            className: "module bun skip-bottom-border skip-top-border",
            tagName: "div"
        })
    }(this),
    function(e) {
        "use strict";
        var t, n = [],
            i = "unknown",
            r = e.Disney.age = function(e) {
                n ? n.push(e) : e(i)
            },
            o = function() {
                if (n) {
                    for (var r = 0; r < n.length; ++r) n[r](i);
                    e.clearTimeout(t), n = t = null
                }
            };
        r.known = function(e) {
            i = "string" == typeof e && e || "unknown", o()
        }, t = e.setTimeout(o, 5e3)
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney;
        t.language = t.language || function(e) {
            var t = e && e[0],
                n = t && t.replace(/-.*$/, "");
            return n || "en"
        }(t.locales)
    }(this),
    function(e) {
        "use strict";
        var t = e.console,
            n = e.Disney,
            i = n.Ads = n.Ads || {},
            r = e._;
        i.MessageBus = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i) try {
                        i.callback(e)
                    } catch (e) {
                        u(e)
                    }
                }
            }

            function o(e, t) {
                var n = {
                        name: e,
                        body: t
                    },
                    r = (a[e] || []).slice(0);
                i(n, r), r = (a["*"] || []).slice(0), i(n, r)
            }

            function s(e, t, n) {
                r.each(l, function(i) {
                    if (i !== n) try {
                        i.bus[i.functionName](e, t)
                    } catch (e) {}
                })
            }
            var a = {},
                c = this,
                l = {},
                u = function(n) {
                    var i = e.onerror;
                    t && t.error && t.error("MessageBus:: " + n.stack || "MessageBus:: " + n.toString()), i && i("MessageBus:: " + n.toString())
                };
            "undefined" == typeof n.Ads.MessageBus.Connections && (n.Ads.MessageBus.Connections = {}), this.addConnection = function(e, t, i) {
                if (!i) {
                    var r = e + "_" + Math.round(1e6 * Math.random()),
                        a = "Disney.Ads.MessageBus.Connections." + r,
                        u = r + "_primarySendMessage",
                        d = r + "_secondarySendMessage",
                        f = function(e, t) {
                            o(e, t), s(e, t, p)
                        },
                        h = {
                            id: e,
                            bus: c,
                            "function": f,
                            functionName: u,
                            uniqueId: r,
                            globalId: a
                        };
                    n.Ads.MessageBus.Connections[r] = {}, n.Ads.MessageBus.Connections[r][u] = f, c[u] = f;
                    var p = {
                        id: e,
                        bus: {
                            sendMessage: t.sendMessage,
                            addMessageListener: t.addMessageListener,
                            removeMessageListener: t.removeMessageListener,
                            addConnection: t.addConnection,
                            removeConnection: t.removeConnection
                        },
                        functionName: d,
                        uniqueId: r,
                        globalId: a
                    };
                    i = {
                        primary: h,
                        secondary: p
                    }, n.Ads.MessageBus.Connections[r].connection = i, l[e] = p;
                    try {
                        t.addConnection(e, c, i)
                    } catch (e) {}
                    p.bus = t
                }
            }, this.removeConnection = function(e) {
                var t = l[e];
                if (t) {
                    var i = n.Ads.MessageBus.Connections[t.uniqueId].connection;
                    c[i.primary.functionName] = null, n.Ads.MessageBus.Connections[t.uniqueId] = null, l[e] = null, t && t.bus && t.bus.removeConnection && t.bus.removeConnection(e)
                }
            }, this.sendMessage = function(e, t) {
                o(e, t), s(e, t)
            }, this.addMessageListener = function(e, t) {
                var n = {
                    name: e,
                    callback: t
                };
                a[e] || (a[e] = []), a[e].push(n)
            }, this.removeMessageListener = function(e, t) {
                for (var n = a[e] || [], i = 0; i < n.length; i++) {
                    var r = n[i];
                    r && r.name === e && r.callback === t && (n[i] = null)
                }
            }, this.destroy = function() {
                r.each(l, function(e) {
                    c.removeConnection(e)
                }), l = null, r.each(a, function(e) {
                    c.removeMessageListener(e.name, e.callback)
                }), a = null, c = null
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = "https://pubads.g.doubleclick.net/gampad/ads?sz=768x432&iu=&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&cmsid=604",
            n = e.Disney,
            i = n.Ads = n.Ads || {},
            r = e.jQuery,
            o = e._,
            s = o.extend,
            a = function() {},
            c = function(e) {
                var t = this,
                    n = function() {
                        t.apply(this, arguments)
                    };
                return a.prototype = this.prototype, n.prototype = new a, s(n.prototype, e), n.sub = this.sub, n
            },
            l = i.AbstractAdPlayer = function(e, n) {
                this.config = {
                    adTagUrl: t + i.isMobile ? "&m_ast=vast" : ""
                }, e || this.init(e, n)
            };
        l.sub = c, l.prototype = {
            id: null,
            config: null,
            messageBus: null,
            analytics: null,
            init: function(e, t) {
                this.id = e, r.extend(this.config, t)
            },
            destroy: function() {
                this.messageBus && (this.messageBus.destroy(), this.messageBus = null), this.analytics && (this.analytics.destroy(), this.analytics = null)
            }
        }
    }(this),
    function(e) {
        "use strict";

        function t() {
            ze.ajax(Ce, {
                dataType: "script",
                cache: !0,
                success: n,
                error: i
            })
        }

        function n() {
            fe = e.google.ima, fe.settings.setLocale(Le.language), r()
        }

        function i() {
            Ee.messageBus.sendMessage("adOpportunityEnd")
        }

        function r() {
            o(), s(), Ie.mobile || le()
        }

        function o() {
            var e = ze("#" + Ee.id);
            e.html('<div class="adPlayer"><div class="overlay adStartButton"><img width="100%" src="//img.lum.dolimg.com/v1/game_container/img/playButton.png" /></div><div class="overlay adControls" style="display:none;z-index:6"><div class="adCountdown"><h3>' + Ee.config.translations.advertisement + '</h3></div><div class="rightControls"><div class="adSkipButton"><h3>' + Ee.config.translations.skip_ad + '</h3></div><a href title="ad mute button" class="adMuteButton muted"></a></div></div><div class="overlay playControls" style="z-index:3;"><div class="playButton"></div></div><div class="overlay adClickTarget" style="z-index:4;"></div><video style="display:none" class="playerElement" poster="' + Ee.config.poster + '" autoplay="true" width="100%" oncontextmenu="return false;"></video><div class="adsContainer"></div></div>')
        }

        function s() {
            a(), l(), T(), x(), d(), h(), v(), A(), D(), w()
        }

        function a() {
            be = ze("#" + Ee.id + " .adControls")[0], ye = ze("#" + Ee.id + " .adStartButton")[0]
        }

        function c() {
            be = null
        }

        function l() {
            xe = ze("#" + Ee.id + " .playControls"), xe.on("click", P)
        }

        function u() {
            xe && (xe.off("click", P), xe = null)
        }

        function d() {
            pe = ze("#" + Ee.id + " .adClickTarget")[0]
        }

        function f() {
            pe && (pe = null)
        }

        function h() {
            ze("#" + Ee.id + " .adSkipButton").on("click", g)
        }

        function p() {
            ze("#" + Ee.id + " .adSkipButton").off("click", g)
        }

        function v() {
            ze("#" + Ee.id + " .adMuteButton").on("click", m)
        }

        function b() {
            ze("#" + Ee.id + " .adMuteButton").off("click", m)
        }

        function g() {
            ke && ke.skip()
        }

        function m(e) {
            e.preventDefault(), ke && (y(), ze(e.currentTarget).toggleClass("muted", Be))
        }

        function y() {
            var e = ke.getVolume();
            ke.setVolume(0 === e ? 1 : 0), Be = !!e
        }

        function _() {
            _e = new fe.AdsLoader(me), _e.addEventListener(fe.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, ae, !1), _e.addEventListener(fe.AdErrorEvent.Type.AD_ERROR, ce, !1)
        }

        function k() {
            _e && (_e.removeEventListener(fe.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, ae, !1), _e.removeEventListener(fe.AdErrorEvent.Type.AD_ERROR, ce, !1), _e = null)
        }

        function w() {
            Ie.mobile && ze(".adPlayer").addClass("hide-controls")
        }

        function x() {
            Ie.mobile && (ze(ye).addClass("fulloverlay"), ze(ye).on("click", C))
        }

        function E() {
            ze(ye).off("click", C)
        }

        function T() {
            Se = ze("#" + Ee.id + " .playerElement")[0], Ie.mobile && (Se.style.display = "inline"), Se && Se instanceof je && ze(Se).on("click", C)
        }

        function S() {
            Se && Se instanceof je && (ze(Se).off("click", C), Se.hasOwnProperty("pause") && Se.pause(), Se = null)
        }

        function C() {
            le()
        }

        function A() {
            ge = ze("#" + Ee.id + " .adsContainer")[0], me = new fe.AdDisplayContainer(ge, Se, pe)
        }

        function M() {
            ge = null, me = null
        }

        function D() {
            Le.Utilities.onFullScreenChange(z)
        }

        function L() {
            Le.Utilities.offFullScreenChange(z)
        }

        function z() {
            var e = j(),
                t = e.width,
                n = e.height,
                i = e.viewMode;
            I(t, n), ke.resize(t, n, i)
        }

        function j() {
            var e = Me,
                t = De,
                n = fe.ViewMode.NORMAL;
            return Le.Utilities.isFullScreen() && (e = Re.innerWidth, t = Re.innerHeight, n = fe.ViewMode.FULLSCREEN), {
                width: e,
                height: t,
                viewMode: n
            }
        }

        function I(e, t) {
            ze("#" + Ee.id).parent().width(e).height(t)
        }

        function P() {
            return ve ? void(ve = !1) : Ne && (Ne = !1, Ie.kindle) ? void le() : (O(), U(), void(ke.isCustomPlaybackUsed() ? Se.play() : ke.resume()))
        }

        function R() {
            k(), oe(), c(), u(), f(), p(), b(), M(), L(), S(), E()
        }

        function O() {
            ke.isCustomClickTrackingUsed() && ze(pe).addClass("fulloverlay")
        }

        function $() {
            ze(pe).removeClass("fulloverlay")
        }

        function N() {
            ze(xe[0]).addClass("fulloverlay")
        }

        function U() {
            ze(xe[0]).removeClass("fulloverlay")
        }

        function B() {
            be.style.display = "inline"
        }

        function q() {
            be.style.display = "none"
        }

        function F() {
            O()
        }

        function H() {
            we && Ee.messageBus.sendMessage("adEnd"), Ee.messageBus.sendMessage("adOpportunityEnd"), $(), U(), q()
        }

        function V() {
            ve = !0, he = !0, Ie.mobile && ($(), N()), Pe(Y, 0)
        }

        function Q() {
            Ee.messageBus.sendMessage("paused")
        }

        function G(t) {
            var n = t.getAd().getAdPodInfo().getIsBumper(),
                i = Math.round(t.getAd().getDuration());
            Ue = !1, J(), !n && i > Ae && (B(), W(), we = !0, Ee.messageBus.sendMessage("adStart"), Te = e.setInterval(W, 1e3), Ee.messageBus.sendMessage("played"))
        }

        function W() {
            var e = Math.round(ke.getRemainingTime());
            ze("#" + Ee.id + " .adCountdown h3").html(Ee.config.translations.advertisement + ": " + e)
        }

        function J() {
            ze("#" + Ee.id + " .adSkipButton").toggle(Ue)
        }

        function Y() {
            ve = !1
        }

        function K() {
            F()
        }

        function X() {
            Te && e.clearInterval(Te), Pe(H, 0)
        }

        function Z() {
            if (Ie.mobile && !ke.isCustomPlaybackUsed()) {
                Se && (Se.style.visibility = "hidden");
                var e = ge && ge.firstChild;
                e && (e.style.top = 0, e.style.width = "100%", e.style.height = "100%")
            }
        }

        function ee() {
            Ee.messageBus.sendMessage("adProgress")
        }

        function te() {}

        function ne() {
            ke && (Ue = ke.getAdSkippableState(), J())
        }

        function ie(t) {
            e.console.error(t.getError().getInnerError().getMessage())
        }

        function re(e) {
            var t = {
                currentTime: 0
            };
            try {
                ke = e.getAdsManager(t)
            } catch (e) {}
            ke && (ke.addEventListener(fe.AdEvent.Type.CLICK, te), ke.addEventListener(fe.AdEvent.Type.LOADED, Z), ke.addEventListener(fe.AdEvent.Type.CONTENT_PAUSE_REQUESTED, te), ke.addEventListener(fe.AdEvent.Type.CONTENT_RESUME_REQUESTED, te), ke.addEventListener(fe.AdErrorEvent.Type.AD_ERROR, ie), ke.addEventListener(fe.AdEvent.Type.FIRST_QUARTILE, ee), ke.addEventListener(fe.AdEvent.Type.MIDPOINT, ee), ke.addEventListener(fe.AdEvent.Type.THIRD_QUARTILE, ee), ke.addEventListener(fe.AdEvent.Type.COMPLETE, ee), ke.addEventListener(fe.AdEvent.Type.ALL_ADS_COMPLETED, te), ke.addEventListener(fe.AdEvent.Type.STARTED, G), ke.addEventListener(fe.AdEvent.Type.PAUSED, Q), ke.addEventListener(fe.AdEvent.Type.CLICK, V), ke.addEventListener(fe.AdEvent.Type.CONTENT_PAUSE_REQUESTED, K), ke.addEventListener(fe.AdEvent.Type.CONTENT_RESUME_REQUESTED, X), ke.addEventListener(fe.AdEvent.Type.SKIPPABLE_STATE_CHANGED, ne), ke.addEventListener(fe.AdEvent.Type.SKIPPED, te))
        }

        function oe() {
            if (ke) {
                ke.removeEventListener(fe.AdEvent.Type.CLICK, te), ke.removeEventListener(fe.AdEvent.Type.LOADED, Z), ke.removeEventListener(fe.AdEvent.Type.CONTENT_PAUSE_REQUESTED, te), ke.removeEventListener(fe.AdEvent.Type.CONTENT_RESUME_REQUESTED, te), ke.removeEventListener(fe.AdErrorEvent.Type.AD_ERROR, ie), ke.removeEventListener(fe.AdEvent.Type.FIRST_QUARTILE, ee), ke.removeEventListener(fe.AdEvent.Type.MIDPOINT, ee), ke.removeEventListener(fe.AdEvent.Type.THIRD_QUARTILE, ee), ke.removeEventListener(fe.AdEvent.Type.COMPLETE, ee), ke.removeEventListener(fe.AdEvent.Type.ALL_ADS_COMPLETED, te), ke.removeEventListener(fe.AdEvent.Type.STARTED, G), ke.removeEventListener(fe.AdEvent.Type.PAUSED, Q), ke.removeEventListener(fe.AdEvent.Type.CLICK, V), ke.removeEventListener(fe.AdEvent.Type.CONTENT_PAUSE_REQUESTED, K), ke.removeEventListener(fe.AdEvent.Type.CONTENT_RESUME_REQUESTED, X), ke.removeEventListener(fe.AdEvent.Type.SKIPPABLE_STATE_CHANGED, ne), ke.removeEventListener(fe.AdEvent.Type.SKIPPED, te);
                try {
                    ke.destroy()
                } catch (e) {}
                ke = null
            }
        }

        function se() {
            var e = j(),
                t = e.width,
                n = e.height,
                i = e.viewMode;
            I(t, n), ke.init(t, n, i), 1 === ke.getVolume() && y()
        }

        function ae(e) {
            if (re(e), ke) try {
                se(), ke.start()
            } catch (e) {}
        }

        function ce() {
            H()
        }

        function le() {
            ze(ye).removeClass("fulloverlay"), ue()
        }

        function ue() {
            if (!_e && (_(), Ee.messageBus.sendMessage("adOpportunityStart"), _e.requestAds(de()), me.initialize(), !Ie.kindle)) {
                var e = Se.play();
                "undefined" != typeof e && e.then(function() {
                    Se.pause()
                })
            }
        }

        function de() {
            var e = new fe.AdsRequest;
            return e.adTagUrl = Ee.config.adTagUrl, e.adType = "video", e.linearAdSlotWidth = Me, e.linearAdSlotHeight = De, e.nonLinearAdSlotWidth = Me, e.nonLinearAdSlotHeight = De, e
        }
        var fe, he, pe, ve, be, ge, me, ye, _e, ke, we, xe, Ee, Te, Se, Ce = "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
            Ae = 6,
            Me = 750,
            De = 500,
            Le = e.Disney,
            ze = e.jQuery,
            je = e.HTMLVideoElement,
            Ie = e.Modernizr,
            Pe = e.setTimeout,
            Re = e.window,
            Oe = Le.Ads = Le.Ads || {},
            $e = Oe.AbstractAdPlayer,
            Ne = !0,
            Ue = !1,
            Be = !1;
        Oe.HTMLAdPlayer = $e.sub({
            init: function(e, n) {
                e && (Ee = this, $e.prototype.init.call(this, e, n), Ee.messageBus.sendMessage("adOpportunityStart"), t())
            },
            destroy: function() {
                R(), oe(), k();
                var e = ze("#" + Ee.id);
                e.empty(), Ee = null, $e.prototype.destroy.call(this)
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = t.Ads = t.Ads || {},
            i = n.HTMLAdPlayer;
        t.Ads.AdPlayer = function(e, n) {
            var r;
            return r = new i, r.messageBus = new t.Ads.MessageBus, n && !n.poster && (n.poster = ""), r.init(e, n), r
        }
    }(this),
    function(e) {
        "use strict";

        function t(e) {
            return c.Deferred(function(t) {
                r.age(function(n) {
                    "unknown" !== n && e.setTargeting("age", n), t.resolve()
                })
            }).promise()
        }

        function n() {
            return e.ActiveXObject && "undefined" != typeof d.documentElement.style.opacity
        }
        var i, r = e.Disney,
            o = r.Ads = r.Ads || {},
            s = e.Modernizr,
            a = e.Backbone,
            c = e.jQuery,
            l = e._,
            u = e.location.host,
            d = e.document,
            f = l.each,
            h = l.extend,
            p = e.location.href.indexOf("gameVideoAd=true") > -1;
        e.googletag = {
            cmd: []
        };
        var v = function(t) {
                e.googletag.cmd.push(function() {
                    t(e.googletag)
                })
            },
            b = function() {
                return "production" !== r.env ? u = u.match(/\.local\.diznee\.net/) ? u.split(".").slice(0, -3).join(".") : u.replace(/-.+\.fe\.mh\.disney\.io/, "").replace(/_/g, ".") : u.match(/\.pre\.matterhorn\.disney\.io/) && (u = u.replace(/\.pre\.matterhorn\.disney\.io/, "").replace(/_/g, ".")), u.replace("www.", "")
            },
            g = function() {
                var e = /^(?:[a-z0-9-]+\.)*?([a-z0-9-]+(?:\.com?)?(?:\.[a-z]{2})?)$/;
                return b().match(e)[1]
            },
            m = function() {},
            y = function(e) {
                var t = this,
                    n = function() {
                        t.apply(this, arguments)
                    };
                return m.prototype = this.prototype, n.prototype = new m, h(n.prototype, e), n.sub = this.sub,
                    n
            },
            _ = function(e, t, n, i) {
                var r = this;
                this.id || (this.id = l.uniqueId("gpt-")), l.isArray(n[0]) || (n = [n]), r._w = n[0][0], r._h = n[0][1], r.name || (r.name = e), r._d = n, r.events = l.extend({}, a.Events), v(function(e) {
                    r.define(e, t, i)
                })
            };
        _.sub = y, _.prototype = {
            define: function(e, t, n) {
                var i = this._s = e.defineSlot(t, this._d, this.id);
                f(n, function(e, t) {
                    i.setTargeting(t, e)
                }), i.addService(e.pubads())
            },
            tag: function() {
                return '<aside class="gpt ' + this.name + '" id="' + this.id + '" style="' + this.style() + '"></aside>'
            },
            style: function() {
                return "width:" + this._w + "px;height:" + this._h + "px"
            },
            ready: function() {
                var e = this;
                e._$ = c("#" + this.id), v(function() {
                    i(), t(e._s).then(function() {
                        q(e.id)
                    })
                })
            },
            restore: function() {
                this._$ && !this._$.closest("html").length && c("#" + this.id).remove()
            },
            remove: function() {
                this._$.remove()
            },
            refresh: function() {
                var e = this._s;
                e && v(function(t) {
                    t.pubads().refresh([e])
                })
            },
            sizes: function() {
                return l.map(this._d, function(e) {
                    return e[0] + "x" + e[1]
                })
            }
        };
        var k, w, x = _.sub({
                ready: function() {
                    _.prototype.ready.call(this);
                    var t = this._$,
                        n = function() {
                            c.contains(d.body, t[0]) ? t.children().length ? ("inline-block" === t.css("display") && t.css("width", ""), t.css("height", "")) : e.setTimeout(n, 100) : t = null
                        };
                    n()
                }
            }),
            E = "gpt-companion",
            T = "companion",
            S = _.sub({
                id: E,
                name: T,
                define: function() {},
                ready: function() {
                    var e = this;
                    v(function() {
                        i(), e._s = k
                    }), _.prototype.ready.call(this)
                }
            }),
            C = _.sub({
                name: T
            }),
            A = _.sub({
                adPlayed: !1,
                style: function() {
                    return s.mobile ? "" : "width:" + this._w + "px;height:" + this._h + "px"
                },
                tag: function() {
                    return '<aside class="gpt" id="' + this.id + '-container" style="margin:0px auto;' + this.style() + '"><div class="' + this.name + '" id="' + this.id + '" style="' + this.style() + '"></div><div class="' + this.name + '" id="' + this.id + '-video" style="' + this.style() + ';display:none"></div></aside>'
                },
                ready: function() {
                    var n = this;
                    n._$ = c("#" + this.id + "-container"), v(function() {
                        i(), t(n._s).then(function() {
                            q(n.id), p && e.setTimeout(function() {
                                e.disableAutoUnload(), n.videoMode()
                            }, 0)
                        })
                    })
                },
                remove: function() {
                    r.Ads.setPlayer(null), this.adPlayer && (this.adPlayer.messageBus && this.adPlayer.messageBus.removeMessageListener("adStart", this.onAdStart), this.adPlayer.destroy(), this.adPlayer = null), _.prototype.remove.call(this)
                },
                getId: function() {
                    return this.id
                },
                videoMode: function() {
                    c("#" + this.id).hide(), c("#" + this.id + "-video").show();
                    var e = {
                        poster: this.poster,
                        adTagUrl: this.context.getVideoAdTagUrl(),
                        translations: this.context.translations
                    };
                    this.onAdStart = l.bind(function() {
                        this.adPlayed = !0
                    }, this), this.adPlayer = new r.Ads.AdPlayer(this.id + "-video", e), this.adPlayer.messageBus.addMessageListener("adStart", this.onAdStart), r.Ads.setPlayer(this.adPlayer)
                }
            }),
            M = _.sub({
                tag: function() {
                    return '<div class="gpt ' + this.name + '" id="' + this.id + '"></div>'
                }
            }),
            D = _.sub({
                define: function(e, t, n) {
                    var i = this._s = e.defineOutOfPageSlot(t, this.id);
                    f(n, function(e, t) {
                        i.setTargeting(t, e)
                    }), i.addService(e.pubads())
                },
                tag: function() {
                    return '<div class="gpt ' + this.name + '" id="' + this.id + '"></div>'
                }
            }),
            L = [300, 60];
        s.mobile ? (w = {
            banner: [_, [320, 50]],
            rectAll: [_, [320, 50]],
            gameCompanion: [_, [300, 250]],
            activitykit2Companion: [_, [300, 250]],
            searchResults: [_, [300, 250]],
            gameLoader: [A, [750, 500]],
            modalInterstitial: [_, [300, 254]],
            pushdown: [x, [320, 50]],
            mobile: [_, [320, 50]],
            votingLeaderboard: [_, [320, 50]],
            votingMrec: [_, [300, 250]],
            votingSponsor: [_, [120, 60]],
            "native": [M, [2, 2]],
            overlay: [D, [320, 356]]
        }, a.Resize.width() >= 728 && (c("html").addClass("tablet-ads"), w.videoCompanion = [S, L], w.pushdown = [_, [728, 90]], w.rectAll = [_, [300, 250]], w.overlay = [D, [728, 425]])) : w = {
            videoCompanion: [S, L],
            activitykitCompanion: [C, L],
            activitykit2Companion: [_, [300, 250]],
            gameLoader: [A, [750, 500]],
            pushdown: [x, [
                [970, 90],
                [970, 66],
                [728, 90],
                [970, 250]
            ]],
            rectangle: [_, [300, 250]],
            rectAll: [_, [300, 250]],
            gameCompanion: [_, [300, 250]],
            searchResults: [_, [300, 250]],
            banner: [_, [320, 50]],
            modalInterstitial: [_, [300, 254]],
            votingLeaderboard: [_, [728, 90]],
            votingMrec: [_, [300, 250]],
            votingSponsor: [_, [160, 80]],
            "native": [M, [2, 2]],
            overlay: [D, [924, 545]]
        };
        var z, j, I, P = o.DoubleClickAdContext = function(e) {
                var t = this;
                t.adData = e, t.slots = I = {}, t.adCounts = {}, t.translations = {
                    advertisement: "Advertisement",
                    skip_ad: "Skip Ad"
                }, t.unit = z = s.mobile && t.adData.config.mobile || t.adData.config.web, t._t = j = t.adData.config.targeting, t.adSystem = "dfp", t.companion = "gpt-companion:300:60", t.ageReady = c.Deferred(function(e) {
                    r.age(e.resolve)
                }).promise(), t.status = function() {
                    return t.ageReady
                }, t.useAdPattern = function() {
                    return !0
                }, t.iterateRegistryName = function(e) {
                    var n = t.adCounts[e] || 0,
                        i = e;
                    return n > 0 && (i = e + "-" + n), t.adCounts[e] = n + 1, i
                }, this.bindGptEventListeners()
            },
            R = function(e) {
                var t = e.externals || [],
                    n = t.length > 0 ? t[0] : {};
                return n
            },
            O = function(e, t) {
                return (l.find(t, function(t) {
                    return t.kaltura_act_id === e.account && (!t.kaltura_group || t.kaltura_group === e.group)
                }) || {
                    cms_id: 2044
                }).cms_id
            };
        P.prototype = {
            noAds: function() {
                return !this.unit
            },
            tag: function(e, t, n) {
                var i, r = w[e];
                return r ? (i = r[0], r = new i(e, n || this.unit, r[1], h({}, this._t, t)), r.context = this, this.slots[this.iterateRegistryName(e)] = r, r.tag()) : ""
            },
            showCDSAds: function() {
                return !1
            },
            cds: function() {
                return !!this.adData.cds
            },
            refresh: function() {
                var t = this;
                v(function(n) {
                    r.age(function() {
                        e.setTimeout(function() {
                            n.pubads().refresh(l.pluck(t.slots, "_s"))
                        }, 0)
                    })
                })
            },
            ready: function() {
                f(this.slots, function(e) {
                    e.ready()
                }), this.refresh()
            },
            helpers: function(e, t, n) {
                var i = this,
                    r = {};
                return f(w, function(e, o) {
                    r[o + "Ad"] = function() {
                        return i.tagWithTargeting(o, t, n)
                    }
                }, this), r
            },
            tagWithTargeting: function(e, t, n) {
                return this.tag(e, h({}, t, this.adTargeting), n)
            },
            setAdPosition: function(e, t) {
                var n, i, r, o, s, a = this.getPageTemplate(),
                    c = e.attributes;
                return r = "ref-" + c.ref, o = this.getAbbrModuleMap()[c.view] || c.view, s = t ? t : this.getPositionInSection(c.view) || "", i = (a + "/" + r + "/" + o + "/" + s).replace(/\/$/, ""), n = {
                    pos: i
                }
            },
            getPageTemplate: function() {
                var e, t = this.adData.config.web,
                    n = t.match("dcom(?:-mobile)?/([^/]*)"),
                    i = null !== n && n.length > 1,
                    r = this.adData.adTargeting.siteSection && this.adData.adTargeting.siteSection.toLowerCase() || null,
                    o = this.adData.adTargeting.contentType,
                    s = this.getAdUnitTemplateMap();
                if (n = !!i && n[1], n && s[n]) {
                    var a = s[n];
                    e = "section" === o && a.siteSectionMap && a.siteSectionMap[r] ? a.siteSectionMap[r] : a.contentTypeMap[o] ? a.contentTypeMap[o] : a.key + "-" + o
                }
                return e ? e : r
            },
            getAdUnitTemplateMap: function() {
                return this.adUnitTemplateMap || (this.adUnitTemplateMap = {
                    video: {
                        key: "vid",
                        siteSectionMap: {
                            movies: "vid-movs-home"
                        },
                        contentTypeMap: {
                            homepage: "vid-home",
                            video: "vid-watch",
                            collection: "vid-coll"
                        }
                    },
                    movies: {
                        key: "movs",
                        contentTypeMap: {
                            homepage: "movs-home"
                        }
                    },
                    lol: {
                        key: "lol",
                        siteSectionMap: {
                            games: "lol-games",
                            video: "lol-vid",
                            characters: "lol-chars"
                        },
                        contentTypeMap: {
                            homepage: "lol-home"
                        }
                    },
                    shows: {
                        key: "shows",
                        contentTypeMap: {
                            homepage: "shows-home"
                        }
                    },
                    search: {
                        key: "search",
                        contentTypeMap: {
                            homepage: "search-home"
                        }
                    }
                }), this.adUnitTemplateMap
            },
            getAbbrModuleMap: function() {
                return this.abbrModuleMap || (this.abbrModuleMap = {
                    video_playlist_inline: "vid_play_in",
                    sidekick_one_up: "sidek_1_up",
                    sidekick_two_up: "sidek_2_up",
                    sidekick_featured: "sidek_feat",
                    sidekick_product: "sidek_prod"
                }), this.abbrModuleMap
            },
            getPositionInSection: function(e) {
                var t, n = ["video_playlist_inline", "stream", "sidekick_one_up", "sidekick_featured", "sidekick_video"],
                    i = "sidekick_two_up" === e;
                return n.indexOf(e) > -1 ? t = "pos-2" : i && (t = "pos-3"), t
            },
            setTranslation: function(e, t) {
                this.translations[e] = t
            },
            setTargeting: function(e, t) {
                this._t[e] = t
            },
            sizes: function() {
                return l.union.apply(l, l.invoke(this.slots, "sizes"))
            },
            getVideoAdTagUrl: function(e) {
                e = e || {};
                var t = e.adId ? e.adId : "",
                    n = this.adData.cmsIdKalturaMap || [{}],
                    i = O(R(e), n),
                    o = encodeURIComponent(r.Ads.getAdUnit()),
                    a = encodeURIComponent(r.Ads.getCompanionSizesString()),
                    c = encodeURIComponent(r.Ads.getTargetingString(e)),
                    l = encodeURIComponent(r.Ads.getAdRule()),
                    u = encodeURIComponent(r.Ads.getDescriptionUrl()),
                    d = "https://pubads.g.doubleclick.net/gampad/ads?sz=768x432|1920x480&adRule=" + l + "&iu=" + o + "&ciu_szs=" + a + "&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&cmsid=" + i + "&cust_params=" + c + "&description_url=" + u;
                return t && t.length > 0 && (d += "&vid=" + t), s.mobile && (d += "&m_ast=vast"), d
            },
            gptSlotLookupAndTrigger: function(e, t) {
                var n = l.find(this.slots, function(e) {
                    return e._s === t.slot
                });
                n && n.events.trigger(e, t)
            },
            bindGptEventListeners: function() {
                var e = this;
                v(function(t) {
                    ["slotRenderEnded"].forEach(function(n) {
                        t.pubads().addEventListener(n, function(t) {
                            e.gptSlotLookupAndTrigger.call(e, n, t)
                        })
                    })
                })
            },
            findSlotById: function(e) {
                return l.find(this.slots, function(t) {
                    return t.id === e
                })
            }
        }, f(["restore", "remove"], function(e) {
            P.prototype[e] = function() {
                f(this.slots, function(t) {
                    t[e]()
                })
            }
        });
        var $ = function(e) {
                return e.replace(/[^\w\|]/gi, "")
            },
            N = function() {
                return e.location.hostname
            },
            U = function() {
                var e = r.abn && r.abn.testcase();
                return e ? $(e.id + "|" + e.group) : ""
            },
            B = function() {
                var t = U(),
                    n = function(t, n) {
                        e.googletag.pubads().setTargeting(t, n)
                    };
                n("tstHostname", N()), t && n("abTest", encodeURIComponent(t)), n("url", e.window.location.href), e.document.referrer && n("refUrl", e.document.referrer)
            };
        i = l.once(function() {
            var t = e.googletag,
                n = t.pubads();
            B(), k = t.defineSlot(z, L, E), k.addService(t.companionAds()).addService(n), t.companionAds().setRefreshUnfilledSlots(!0), n.enableAsyncRendering(), n.collapseEmptyDivs(), n.disableInitialLoad(), t.enableServices()
        });
        var q = function(t) {
            e.googletag.display(t);
            var n = new e.MutationObserver(function(e) {
                    e.forEach(function(e) {
                        for (var t = e.target.querySelectorAll("iframe"), n = 0; n < t.length; n++) t[n].setAttribute("tabindex", "-1")
                    })
                }),
                i = {
                    childList: !0,
                    subtree: !0
                },
                r = d.getElementById(t);
            r && n.observe(r, i)
        };
        e.sendJSEvent = function(e) {
            try {
                "pauseVideo" === e ? r.Ads.getPlayer().messageBus.sendMessage("pause") : "playVideo" === e && r.Ads.getPlayer().messageBus.sendMessage("resume")
            } catch (e) {}
        };
        var F, H = function(e) {
                if (d.createEvent) {
                    var t = d.createEvent("Event");
                    t.initEvent(e, !0, !0), d.dispatchEvent(t)
                }
            },
            V = function() {
                d.attachEvent && !n() ? d.documentElement.fakePlayEvent++ : H("DisneyMediaPlayerPlay")
            },
            Q = function() {
                d.attachEvent && !n() ? d.documentElement.fakePauseEvent++ : H("DisneyMediaPlayerStop")
            };
        c("document").ready(function() {
            d.attachEvent && !n() && (d.documentElement.fakePlayEvent = 0, d.documentElement.fakePauseEvent = 0)
        }), l.extend(o, {
            isMobile: s.mobile,
            setPlayer: function(e) {
                F && F.messageBus && (F.messageBus.removeMessageListener("played", V), F.messageBus.removeMessageListener("paused", Q)), F = e, F && F.messageBus && (F.messageBus.addMessageListener("played", V), F.messageBus.addMessageListener("paused", Q))
            },
            getPlayer: function() {
                return F
            },
            getAdUnit: function() {
                return z
            },
            getTargeting: function() {
                return j
            },
            getTargetingString: function(e) {
                var t = "",
                    n = U(),
                    i = e.duration_sec ? e.duration_sec : null;
                j && !j.tstHostname && (j.tstHostname = N()), n && (j.abTest = n), i && i < 60 && (j.duration = "under60");
                var r = e.ads ? e.ads.targeting : null,
                    o = l.extend({}, j, r);
                return l.each(o, function(e, n) {
                    n && e && (t += encodeURIComponent(n) + "=" + encodeURIComponent(e) + "&")
                }), t.slice(0, t.length - 1)
            },
            getCompanionSizes: function() {
                return [L]
            },
            getCompanionSizesString: function() {
                var e = r.Ads.getCompanionSizes(),
                    t = "";
                return l.each(e, function(e) {
                    e && (t += e[0] + "x" + e[1] + ",")
                }), t.slice(0, t.length - 1)
            },
            getAdRule: function() {
                var e = r.Ads.getAdContext(),
                    t = e.adData || {},
                    n = 0 === t.dfpAdRule ? 0 : 1;
                return n
            },
            getDescriptionUrl: function() {
                return "https://" + g()
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.Modernizr,
            i = t.Ads = t.Ads || {},
            r = e.jQuery,
            o = e._,
            s = o.extend,
            a = e.location.href.indexOf("gameVideoAd=true") > -1,
            c = e.location,
            l = !0,
            u = function(t) {
                e.googletag.cmd.push(function() {
                    t(e.googletag)
                })
            },
            d = function() {
                var e = c.hostname;
                return "production" !== t.env ? e = e.match(/\.local\.diznee\.net/) ? e.split(".").slice(0, -3).join(".") : e.replace(/-.+\.fe\.mh\.disney\.io/, "").replace(/_/g, ".") : e.match(/\.pre\.matterhorn\.disney\.io/) && (e = e.replace(/\.pre\.matterhorn\.disney\.io/, "").replace(/_/g, ".")), e.replace("www.", "")
            },
            f = function() {
                var e = o.map(t.locales, function(e) {
                        return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                    }).join("|"),
                    n = new RegExp("^(?:[a-z0-9-]+.)*?((?:(?:" + e + ").)?[a-z0-9-]+(?:.com?)?(?:.[a-z]{2})?)$", "i");
                return d().match(n)[1]
            },
            h = function() {
                return d() === f()
            },
            p = function() {
                return d().replace("." + f(), "")
            },
            v = function() {
                return c.pathname.split("/")
            },
            b = function() {
                var e = v();
                return h() ? "" === e[1] ? "homepage" : e[1] : p()
            },
            g = function(e) {
                return o.find(e, function(e) {
                    return ["watch", "watch_2", "watch_3", "sidekick_video", "trailer"].indexOf(e.get("view")) > -1
                })
            },
            m = function(e) {
                return "kaltura" === e.source ? "27176231" : "matterhorn-player"
            },
            y = function(e, t) {
                return (o.find(t, function(t) {
                    return t.kaltura_act_id === e.account && (!t.kaltura_group || t.kaltura_group === e.group)
                }) || {
                    cms_id: A.cmsid
                }).cms_id
            },
            _ = function(e) {
                var t = g(e),
                    n = t ? t.get("data") : null;
                return n && n[0] ? n[0] : null
            },
            k = function(e) {
                var t = v();
                return t[h() ? e : e + 1]
            },
            w = function() {
                return k(0)
            },
            x = function() {
                return k(1)
            },
            E = function() {
                return k(2)
            },
            T = function() {
                var e = new RegExp("(/" + w() + "/|/$)", "g");
                return c.pathname.replace(e, "")
            },
            S = function() {
                var t = e.window;
                return t.location !== t.parent.location
            },
            C = function(e, t) {
                var n = e.adTargeting || {};
                return {
                    actor: n.actor,
                    bucode: t.buCode,
                    buid: t.buId,
                    character: n.character,
                    characterId: n.characterId,
                    country: t.country,
                    disneycms: t.cmsId,
                    pagename: S() ? T() : n.pgn,
                    property: t.property,
                    propertyId: t.propertyId,
                    product: n.product,
                    contenttype: t.contentType || n.contentType,
                    contentid: n.contentId,
                    hub: f(),
                    gamegenre: n.gameGenre,
                    gamename: n.gameTitle,
                    gametype: n.gameType,
                    keywords: n.tag,
                    moviegenre: n.movieGenre,
                    movierating: n.movieRating,
                    movietitle: n.movieTitle,
                    site: b(),
                    section: w(),
                    slug1: x(),
                    slug2: E(),
                    sitesection: b()
                }
            },
            A = {
                cmsid: 2044,
                disneycms: "MH"
            },
            M = {
                manual: !0,
                position: ["oop", "overlay", "top-mpu", "top-head", "inline-head", "lower-head", "rich-head", "logo", "video-mpu", "lower-head", "lower-mpu", "games-video"].join(",")
            },
            D = {
                sdk: 1,
                vid: "vid",
                output: "vast"
            },
            L = "https://analytics.disneyinternational.com/ads/tagsv2/",
            z = function(e) {
                var t = L + "video/";
                return [t, r.param(o.defaults(e || {}, A, D))].join("?")
            },
            j = function(e) {
                var t = L + "json/";
                return [t, r.param(o.defaults(e || {}, A, M))].join("?")
            },
            I = function(e, t) {
                var n = e.advertisement_placement_id;
                if (t = t || e.advertisement_type, "leaderboard" === t) switch (n) {
                    case "top":
                        return "top-head";
                    case "mid1":
                        return "inline-head";
                    case "rich":
                        return "rich-head";
                    default:
                        return "lower-head"
                } else {
                    if ("mpu" !== t) return "inline-head";
                    switch (n) {
                        case "top":
                            return "top-mpu";
                        case "lower":
                            return "lower-mpu";
                        case "video":
                            return "video-mpu";
                        default:
                            return "top-mpu"
                    }
                }
            },
            P = function() {},
            R = function(e) {
                var t = this,
                    n = function() {
                        t.apply(this, arguments)
                    };
                return P.prototype = this.prototype, n.prototype = new P, s(n.prototype, e), n.sub = this.sub, n
            },
            O = function(e, t) {
                this.id = e, this.element_id = o.uniqueId("am-"), this.type = t
            };
        O.sub = R, O.prototype = {
            tag: function() {
                return '<div class="admaster ' + this.id + '-container"><div class="' + this.id + ' aside" id="' + this.element_id + '"></div></div>'
            },
            ready: function() {
                this._$ = r("#" + this.element_id), this.setAdTabindex()
            },
            setAdTabindex: function() {
                var t = new e.MutationObserver(function(e) {
                        e.forEach(function(e) {
                            for (var t = e.target.querySelectorAll("iframe"), n = 0; n < t.length; n++) t[n].setAttribute("tabindex", "-1")
                        })
                    }),
                    n = {
                        childList: !0,
                        subtree: !0
                    },
                    i = e.document.getElementById(this.element_id);
                i && t.observe(i, n)
            },
            define: function(e) {
                var t = this;
                u(function(n) {
                    var i, o = e.mappingSizes[t.id] || {},
                        s = o.slotSizes || null,
                        a = o.defaults || [],
                        c = o.targeting || {},
                        l = e.viewports || {},
                        u = e.adUnitPath || "",
                        d = ["pubads"];
                    if (o.service && d.push(o.service), i = "oop" === t.id ? n.defineOutOfPageSlot(u, t.element_id) : n.defineSlot(u, a, t.element_id)) {
                        var f, h, p, v, b = n.sizeMapping();
                        if (s) {
                            for (v in l) null !== (f = l[v]) && (b = b.addSize(f, s[v]));
                            i.defineSizeMapping(b.build())
                        }
                        for (v in c) null !== (h = c[v]) && i.setTargeting(v, [h]);
                        for (v in d) null !== (p = d[v]) && r.isFunction(n[p]) && i.addService(n[p]());
                        t.gptslot = i
                    }
                })
            },
            display: function() {
                var e = this;
                u(function(t) {
                    t.display(e.element_id)
                })
            },
            restore: function() {
                this._$ && this._$.length && !this._$.closest("html").length && this._$.remove()
            },
            remove: function() {
                this._$.appendTo("body").empty().remove()
            },
            refresh: function() {
                var e = this;
                u(function(t) {
                    t.pubads().refresh([e.gptslot])
                })
            }
        };
        var $, N = O.sub({
                ready: function() {
                    var e = this;
                    e._$ = r("#" + e.element_id), u(function(t) {
                        r.getJSON(j(o.extend({}, e.context.baseParams, {
                            position: e.id
                        })) + "&callback=?", function(n) {
                            var i, r, o = n.targetings || {},
                                s = t.pubads();
                            e.define(n);
                            for (i in o) null !== (r = o[i]) && s.setTargeting(i, r);
                            e.display(), t.pubads().refresh([e.gptslot])
                        })
                    })
                }
            }),
            U = O.sub({
                adPlayed: !1,
                tag: function() {
                    return '<aside class="admaster" id="' + this.element_id + '-container" style="margin:0px auto;' + this.style() + '"><div class="' + this.id + '" id="' + this.element_id + '" style="' + this.style() + '"></div><div class="' + this.id + '" id="' + this.element_id + '-video" style="' + this.style() + ';display:none"></div></aside>'
                },
                style: function() {
                    return n.mobile ? "" : "width:750px;height:500px"
                },
                ready: function() {
                    var t = this;
                    t._$ = r("#" + this.element_id + "-container"), u(function() {
                        a && e.setTimeout(function() {
                            e.disableAutoUnload(), t.videoMode()
                        }, 0)
                    })
                },
                remove: function() {
                    t.Ads.setPlayer(null), this.adPlayer && (this.adPlayer.messageBus && this.adPlayer.messageBus.removeMessageListener("adStart", this.onAdStart), this.adPlayer.destroy(), this.adPlayer = null), O.prototype.remove.call(this)
                },
                getId: function() {
                    return this.element_id
                },
                videoMode: function() {
                    var e = this.context || {},
                        n = e.adTagPreUrl || "",
                        i = o.isEmpty(n) ? e.adTagUrl : n,
                        s = {
                            adTagUrl: i,
                            translations: e.translations,
                            poster: this.poster
                        },
                        a = this.element_id,
                        c = a + "-video";
                    r("#" + a).hide(), r("#" + c).show(), this.onAdStart = o.bind(function() {
                        this.adPlayed = !0
                    }, this), this.adPlayer = new t.Ads.AdPlayer(c, s), this.adPlayer.messageBus.addMessageListener("adStart", this.onAdStart), t.Ads.setPlayer(this.adPlayer)
                }
            }),
            B = r("body"),
            q = i.AdMasterAdContext = function(t, n) {
                var i = this;
                if (i.adData = t, i.slots = $ || {}, i.translations = {
                        advertisement: "Advertisement",
                        skip_ad: "Skip Ad"
                    }, i.adCounts = {}, i.adSystem = "admaster", i.companion = "div-video-mpu:300:250", i.adTagUrl = "", i.adTagPreUrl = "", i.adTagPostUrl = "", i.adTagReady = r.Deferred(), i.status = function() {
                        return i.adTagReady
                    }, S()) {
                    var o = e.document,
                        s = o.createElement("a");
                    s.href = o.referrer, c = {
                        href: s.href,
                        hostname: s.hostname,
                        pathname: s.pathname
                    }
                }
                n.cto && n.video && this.getVideoAdTagUrl(t, n.cto, n.video).done(function(e) {
                    i.adTagUrl = e, i.adTagReady.resolve({
                        adTagUrl: e
                    })
                }), i.iterateRegistryName = function(e) {
                    var t = this.adCounts[e] || 0,
                        n = e;
                    return t > 0 && (n = e + "-" + t), this.adCounts[e] = t + 1, n
                }, u(function(e) {
                    var t = e.pubads(),
                        n = e.companionAds();
                    t.collapseEmptyDivs(!0), t.enableVideoAds(!0), t.enableSingleRequest(), n.setRefreshUnfilledSlots(!0), t.disableInitialLoad(), t.enableAsyncRendering(), e.enableServices()
                })
            };
        q.prototype = {
            tag: function(e, t) {
                var n;
                return "games-video" === e ? (e = "games-video", t = "gameLoader", n = new U(e, t)) : "modalInterstitial" === e ? (e = "top-mpu", t = "modalInterstitial", n = new N(e, t)) : (t = t || e, n = new O(e, t)), n.context = this, this.slots[this.iterateRegistryName(t)] = n, n.tag()
            },
            getVideoAdTagUrl: function(e, t, n, i) {
                var s = C(e, t),
                    a = e.cmsIdKalturaMap || [{}],
                    l = 0 === e.dfpAdRule ? 0 : 1,
                    u = n.externals && n.externals[0] || {},
                    d = o.extend(s, {
                        vid: n.adId,
                        sdk: l,
                        cmsid: y(u, a),
                        player: m(u),
                        url: c.href,
                        description_url: "https://" + f()
                    }, i),
                    h = z(d);
                return r.get(h).fail(this.adTagReady.resolve)
            },
            ready: function(t, n) {
                var i = t ? t.collection : {},
                    s = n ? n.collection : {},
                    a = s.cto || i.cto || {},
                    c = s.adData || i.adData || this.adData || {},
                    d = 0 === c.dfpAdRule ? 0 : 1,
                    f = this,
                    h = _(i.models) || this.video || {};
                f.view = t, f.dfpAdRule = d, f.baseParams = C(c, a), "undefined" != typeof t && "burger" === r(f.view.el).attr("id") && (c.showOop && B.append(f.tag("oop")), c.showOverlay && B.append(f.tag("overlay")));
                var p;
                p = 0 === d ? r.when(f.getVideoAdTagUrl(c, a, h, {
                    vpos: "preroll"
                }), f.getVideoAdTagUrl(c, a, h, {
                    vpos: "postroll"
                })).then(function(e, t) {
                    return f.adTagPreUrl = e[0], f.adTagPostUrl = t[0], {
                        adTagPreUrl: f.adTagPreUrl,
                        adTagPostUrl: f.adTagPreUrl
                    }
                }) : f.getVideoAdTagUrl(c, a, h).then(function(e) {
                    return f.adTagUrl = e, {
                        adTagUrl: e
                    }
                }), p.done(function(e) {
                    f.adTagReady.resolve(e)
                }), u(function(t) {
                    r.ajax({
                        url: j(o.extend({}, f.baseParams, {
                            position: o.map(f.slots, function(e) {
                                return e.id
                            }).join(",")
                        })),
                        dataType: "jsonp",
                        cache: !0,
                        jsonpCallback: "adMasterCallback",
                        success: function(n) {
                            var i, s, a = n.targetings || {},
                                c = t.pubads();
                            o.each(f.slots, function(e) {
                                e.ready(), e.define(n)
                            });
                            for (i in a) null !== (s = a[i]) && c.setTargeting(i, s);
                            o.each(f.slots, function(e) {
                                e.display()
                            });
                            var u = o.map(f.slots, function(e) {
                                return e.gptslot
                            });
                            l ? r(e.window).on("load", function() {
                                l = !1, t.pubads().refresh(u)
                            }) : t.pubads().refresh(u)
                        }
                    })
                })
            },
            cds: function() {
                return !1
            },
            noAds: function() {
                return !1
            },
            useAdPattern: function() {
                return !1
            },
            setTranslation: function(e, t) {
                this.translations[e] = t
            },
            helpers: function(e) {
                var t = this,
                    n = e,
                    i = n ? I(n, "mpu") : "top-mpu";
                return {
                    pushdownAd: function() {
                        return t.tag("top-head", "pushdown")
                    },
                    rectangleAd: function() {
                        return t.tag(i, "rectangle")
                    },
                    rectAllAd: function() {
                        return t.tag(i, "rectAll")
                    },
                    companionAd: function() {
                        var e = n && n.view;
                        return "watch" === e || "play" === e ? t.tag("video-mpu", "companionAd") : "watch_2" === e ? t.tag("video-comp-2", "companionAd") : t.tag(i, "companionAd")
                    },
                    gameLoaderAd: function() {
                        return t.tag("games-video", "gameLoader")
                    },
                    bannerAd: function() {
                        return n && "ad_banner" === n.view ? t.tag(I(n), "bannerAd-" + I(n)) : t.tag("inline-head", "bannerAd")
                    }
                }
            },
            remove: function() {
                o.each(this.slots, function(e) {
                    e.remove()
                })
            }
        }, o.each(["restore"], function(e) {
            q.prototype[e] = function() {
                o.each(this.slots, function(t) {
                    t[e]()
                })
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = t.Ads || {},
            i = e.Backbone,
            r = e.document,
            o = e.window,
            s = e._,
            a = null,
            c = n.ShareThroughAds = function() {
                return a ? a : (this.init(), a = this, this)
            };
        c.prototype = {
            init: function() {
                var e = r.createElement("script");
                e.src = "//native.sharethrough.com/assets/sfp.js", e.type = "text/javascript", e.charset = "utf-8", e.dataset.strDisableTracking = "true", e.onerror = this.onScriptError.bind(this), this.scriptElem = e, o.top.document.getElementsByTagName("body")[0].appendChild(e)
            },
            onScriptError: function() {
                c.prototype.loadScriptError = !0;
                var t = e.document.createEvent("Event");
                t.initEvent("scriptLoadError", !0, !0), this.scriptElem.dispatchEvent(t)
            },
            newModel: function() {
                return new i.Model({
                    is_ad: !0
                })
            },
            insertModel: function(e, t) {
                return e.length ? (t = t > e.length ? e.length : t, void e.add(this.newModel(), {
                    at: t
                })) : e
            },
            shouldRenderSlot: function(e, t) {
                var n = t.get("config_options");
                return !!s.isObject(n) && (n.native_ads && e.get("is_ad"))
            },
            getPlacementKey: function(e) {
                var t = e.get("config_options");
                return s.isObject(t) ? t.native_ad_placement_key : ""
            },
            removeModel: function(e) {
                var t = e.find(function(e) {
                    return e.get("is_ad") === !0
                });
                t && e.remove(t)
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = t.Ads = t.Ads || {},
            i = function() {
                return {}
            },
            r = e.jQuery,
            o = n.NoAdContext = function(e) {
                var t = r.Deferred().resolve().promise();
                this.cds = function() {
                    return e.cds
                }, this.noAds = function() {
                    return !0
                }, this.status = function() {
                    return t
                }
            };
        o.prototype = {
            adSystem: "noads",
            showCDSAds: function() {
                return !1
            },
            helpers: i,
            ready: i,
            refresh: i,
            restore: i,
            remove: i,
            setTargeting: i,
            setTranslation: i,
            tag: function() {
                return ""
            },
            sizes: function() {
                return []
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t, n = e.Disney,
            i = n.consentPolicy || {},
            r = n.Ads,
            o = e._,
            s = e.jQuery;
        s(function() {
            var e = "true" === i.use_tealium_for_gpt_loading;
            !e && o.contains(["dfp", "admaster"], n.adSystem) && s.ajax("//www.googletagservices.com/tag/js/gpt.js", {
                dataType: "script",
                cache: !0
            })
        }), n.Ads.AdContext = function(e) {
            var n = e.adData;
            switch (n.adSystem) {
                case "dfp":
                    t = new r.DoubleClickAdContext(n);
                    break;
                case "admaster":
                    t = new r.AdMasterAdContext(n, {
                        cto: e.cto,
                        video: e.video
                    });
                    break;
                default:
                    t = new r.NoAdContext(n)
            }
            return t
        }, o.extend(r, {
            getAdSlots: function() {
                return n.top ? n.top.current.ads.slots : t
            },
            getAdContext: function() {
                return n.top ? n.top.current.ads : t
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = t.Cookie,
            i = e.Backbone,
            r = e._,
            o = /^([0-9a-f]+):([^:]+)/,
            s = "dolMttAbn",
            a = 7,
            c = function() {
                var e = o.exec(n.get(s) || "");
                return e && {
                    id: e[1],
                    group: e[2]
                }
            },
            l = function(e) {
                n.set(s, e.id + ":" + e.group, {
                    domain: n.domain(),
                    path: "/",
                    expires: a
                })
            },
            u = t.abn = r.extend({
                testcase: function() {
                    return c()
                },
                parse: function(e) {
                    var i, o, s = e.abn,
                        a = s && s.cases,
                        l = c(),
                        u = -1;
                    return a && (o = r.pluck(a, "weight"), i = r.keys(a), !n.enabled() || l && l.id !== s.id || (l ? u = r.indexOf(i, l.group) : (u = t.randi(o), u >= 0 && (l = {
                        id: s.id,
                        group: i[u]
                    }))), e = a[i[u < 0 ? 0 : u]].data, u >= 0 && this.trigger("view", l, e)), e
                }
            }, i.Events);
        u.on("view", l), t.randi = function(t) {
            var n, i, r = 0,
                o = t.length;
            for (n = o - 1; n > -1; --n) r += +t[n] || 0;
            for (i = e.Math.random() * r, n = o - 1; i >= 0 && n > -2; --n) i -= +t[n] || 0;
            return n + 1
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e._,
            i = e.Backbone,
            r = e.location,
            o = e.Math,
            s = i.Collection,
            a = function(e, t) {
                var n, i = new Array(e);
                if (t !== i[0])
                    for (n = 0; n < e; ++n) i[n] = t;
                return i
            },
            c = function(e) {
                return {
                    models: e
                }
            };
        i.LazyCollection = s.extend({
            params: {
                limit: "limit",
                offset: "offset",
                draft_id: "draft_id"
            },
            constructor: function(e, t) {
                t || (t = {}), this.count = t.count, this.min = t.min || e && e.length || 1, t.params && (this.params = n.defaults(t.params, this.params)), s.call(this, e, t)
            },
            ensure: function(e) {
                var n, i, s = this,
                    a = s.count,
                    c = s.length,
                    l = s._ensure,
                    u = s.params,
                    d = o.min(e - c, s.min),
                    f = /[&?]draft_id=([^&]+)/.exec(r.search);
                return a && (e = o.min(e, a)), e <= c ? i = t.when() : l ? (i = t.Deferred(), l.always(function() {
                    s.ensure(e).then(function() {
                        i.resolveWith(arguments)
                    }, function() {
                        i.rejectWith(arguments)
                    })
                })) : (n = {}, n[u.limit] = d, n[u.offset] = c, f && (n[u.draft_id] = f[1]), s.trigger("loading", s, !0), i = s._ensure = s.fetch({
                    add: !0,
                    remove: !1,
                    data: n
                }).then(function() {
                    s.length < c + d && (s.count = s.length)
                }).always(function() {
                    s._ensure = null, s.trigger("loading", s, !1)
                })), i
            },
            remaining: function() {
                var e = this.count;
                return e ? e - this.length : null
            },
            loading: function() {
                return !!this._ensure
            },
            pages: function(e, t) {
                var i, r, s = [],
                    l = t && t.whole,
                    u = t && t.pad,
                    d = t && t.nest,
                    f = t && t.fill;
                for (e = +e || 1, r = 0; r < this.length; r += e) s.push(this.models.slice(r, r + e));
                if (r = s.length - 1, l && r > 0 && s[r].length < e && (--r, s.pop()), u && (r >= 0 && (s[r] = s[r].concat(a(e - s[r].length, f))), i = a(e, f)), d && (s = n.map(s, c), i = c(i)), u) {
                    for (r = o.floor(this.count / e); s.length < r;) s.push(i);
                    r = this.count - r * e, r > 0 && !l && (i = a(r, f), s.push(d ? c(i) : i))
                }
                return s
            },
            peeking: function() {
                return !0
            },
            page: function(e, t) {
                return this.pages(t, {
                    nest: !0
                })
            },
            lastIndex: function(e) {
                return this.pages(e, {
                    nest: !0
                }).length - 1
            }
        }), i.LazySliderCollection = i.LazyCollection.extend({
            constructor: function(e, t) {
                this.loadedPageCounter = [], this.pageOptions = {
                    nest: !0
                }, n.each(e, function(e) {
                    e.set("hidden", !0)
                }), i.LazyCollection.call(this, e, t)
            },
            startingIndex: 0,
            lastIndex: function(e) {
                return this.pages(e, this.pageOptions).length - 1
            },
            page: function(e, t, i, r) {
                var o = this.pages(t, this.pageOptions);
                if (n.each(o[e].models, function(e) {
                        e && e.set("hidden", !1)
                    }), this.nextPeek(e, o)) {
                    var s = o[e + 1];
                    n(i).times(function(e) {
                        var t = s.models[e * r];
                        t && t.set("hidden", !1)
                    })
                }
                return n.contains(this.loadedPageCounter, e) || this.loadedPageCounter.push(e), o
            },
            loadedPages: function() {
                return this.loadedPageCounter.length
            },
            peeking: function(e) {
                return this.length > e
            },
            nextPeek: function(e, t) {
                return e < t.length - 1
            }
        }), i.LazyFilterCollection = i.LazyCollection.extend({
            parse: function(e) {
                return this.count = e.count, e.next ? this.nextFilter = e.next : this.nextFilter = null, e.data
            },
            next: function() {
                this.nextFilter && (this.url = this.baseUrl + this.nextFilter)
            }
        })
    }(this),
    function(e) {
        "use strict";

        function t(e, t) {
            var n = r.guest;
            n.current ? "CHILD" !== n.current.profile.ageBand && e(t) : e(t)
        }

        function n(t) {
            var n = new e.Image;
            n.src = t
        }

        function i(t) {
            var n = e.document.createElement("iframe");
            n.src = t, n.frameborder = "0", n.height = "1", n.width = "1", n.style.display = "none", o(e.document.body).prepend(n)
        }
        var r = e.Disney,
            o = e.jQuery,
            s = e.Math,
            a = /%%([a-z0-9]+)%%/g,
            c = function(e, t) {
                return "rng" === t ? "" + s.floor(1e18 * s.random()) : ""
            },
            l = r.ping = function(e) {
                var r = e.toString().replace(a, c);
                r.match(/\/activityi;/) ? t(i, r) : t(n, r)
            };
        o("body").on("click", "a[data-ping]", function() {
            l(this.getAttribute("data-ping"))
        })
    }(this);
var CryptoJS = CryptoJS || function(e, t) {
    var n = {},
        i = n.lib = {},
        r = function() {},
        o = i.Base = {
            extend: function(e) {
                r.prototype = this;
                var t = new r;
                return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                    t.$super.init.apply(this, arguments)
                }), t.init.prototype = t, t.$super = this, t
            },
            create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments), e
            },
            init: function() {},
            mixIn: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        s = i.WordArray = o.extend({
            init: function(e, n) {
                e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length
            },
            toString: function(e) {
                return (e || c).stringify(this)
            },
            concat: function(e) {
                var t = this.words,
                    n = e.words,
                    i = this.sigBytes;
                if (e = e.sigBytes, this.clamp(), i % 4)
                    for (var r = 0; r < e; r++) t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 24 - 8 * ((i + r) % 4);
                else if (65535 < n.length)
                    for (r = 0; r < e; r += 4) t[i + r >>> 2] = n[r >>> 2];
                else t.push.apply(t, n);
                return this.sigBytes += e, this
            },
            clamp: function() {
                var t = this.words,
                    n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4), t.length = e.ceil(n / 4)
            },
            clone: function() {
                var e = o.clone.call(this);
                return e.words = this.words.slice(0), e
            },
            random: function(t) {
                for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
                return new s.init(n, t)
            }
        }),
        a = n.enc = {},
        c = a.Hex = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], i = 0; i < e; i++) {
                    var r = t[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                    n.push((r >>> 4).toString(16)), n.push((15 & r).toString(16))
                }
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - 4 * (i % 8);
                return new s.init(n, t / 2)
            }
        },
        l = a.Latin1 = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - 8 * (i % 4);
                return new s.init(n, t)
            }
        },
        u = a.Utf8 = {
            stringify: function(e) {
                try {
                    return decodeURIComponent(escape(l.stringify(e)))
                } catch (e) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(e) {
                return l.parse(unescape(encodeURIComponent(e)))
            }
        },
        d = i.BufferedBlockAlgorithm = o.extend({
            reset: function() {
                this._data = new s.init, this._nDataBytes = 0
            },
            _append: function(e) {
                "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
            },
            _process: function(t) {
                var n = this._data,
                    i = n.words,
                    r = n.sigBytes,
                    o = this.blockSize,
                    a = r / (4 * o),
                    a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0);
                if (t = a * o, r = e.min(4 * t, r), t) {
                    for (var c = 0; c < t; c += o) this._doProcessBlock(i, c);
                    c = i.splice(0, t), n.sigBytes -= r
                }
                return new s.init(c, r)
            },
            clone: function() {
                var e = o.clone.call(this);
                return e._data = this._data.clone(), e
            },
            _minBufferSize: 0
        });
    i.Hasher = d.extend({
        cfg: o.extend(),
        init: function(e) {
            this.cfg = this.cfg.extend(e), this.reset()
        },
        reset: function() {
            d.reset.call(this), this._doReset()
        },
        update: function(e) {
            return this._append(e), this._process(), this
        },
        finalize: function(e) {
            return e && this._append(e), this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(e) {
            return function(t, n) {
                return new e.init(n).finalize(t)
            }
        },
        _createHmacHelper: function(e) {
            return function(t, n) {
                return new f.HMAC.init(e, n).finalize(t)
            }
        }
    });
    var f = n.algo = {};
    return n
}(Math);
! function() {
    var e = CryptoJS,
        t = e.lib,
        n = t.WordArray,
        i = t.Hasher,
        r = [],
        t = e.algo.SHA1 = i.extend({
            _doReset: function() {
                this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(e, t) {
                for (var n = this._hash.words, i = n[0], o = n[1], s = n[2], a = n[3], c = n[4], l = 0; 80 > l; l++) {
                    if (16 > l) r[l] = 0 | e[t + l];
                    else {
                        var u = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16];
                        r[l] = u << 1 | u >>> 31
                    }
                    u = (i << 5 | i >>> 27) + c + r[l], u = 20 > l ? u + ((o & s | ~o & a) + 1518500249) : 40 > l ? u + ((o ^ s ^ a) + 1859775393) : 60 > l ? u + ((o & s | o & a | s & a) - 1894007588) : u + ((o ^ s ^ a) - 899497514), c = a, a = s, s = o << 30 | o >>> 2, o = i, i = u
                }
                n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + s | 0, n[3] = n[3] + a | 0, n[4] = n[4] + c | 0
            },
            _doFinalize: function() {
                var e = this._data,
                    t = e.words,
                    n = 8 * this._nDataBytes,
                    i = 8 * e.sigBytes;
                return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
            },
            clone: function() {
                var e = i.clone.call(this);
                return e._hash = this._hash.clone(), e
            }
        });
    e.SHA1 = i._createHelper(t), e.HmacSHA1 = i._createHmacHelper(t)
}(),
function(e) {
    "use strict";

    function t() {
        var t = o.Deferred(),
            i = n.didOptions || {},
            r = function() {
                var n = e.DisneyID.get(i);
                n.init().then(function() {
                    t.resolve(n)
                })
            };
        if (i.clientId)
            if (e.DisneyID) r();
            else {
                var s = e.document.getElementById("disneyid-script");
                s ? s.onload = r : t.reject()
            }
        else t.reject();
        return t
    }
    var n = e.Disney,
        i = e.Backbone,
        r = e._,
        o = e.$,
        s = e.CryptoJS,
        a = "change:watched",
        c = n.GuestContext = function(e) {
            var t = this,
                i = function(e) {
                    var n = e && e.profile ? e.profile.swid : void 0;
                    t.current = e || {}, t.current.userId = n ? s.SHA1(n).toString().substr(0, 12) : ""
                },
                o = function() {
                    t.current = void 0
                };
            r.extend(n.GuestContext.prototype, e), this._h = e || {}, this.on("login", i), this.on("update", i), this.on("logout", o)
        };
    r.extend(c.prototype, i.Events, {
        _r: 0,
        updateProfile: function() {
            var e = this;
            return n.OneID.then(function(t) {
                var n = function(n) {
                    e.trigger("update", n), t.off("update")
                };
                t.launchProfile().then(function(e) {
                    e.on("update", n)
                })
            })
        },
        login: function(e, t) {
            var i = o.Deferred(),
                r = this;
            return n.OneID.then(function(n) {
                var o = function(e) {
                        r.trigger("login", e), i.resolve(e), n.off("login", o)
                    },
                    s = function() {
                        n.getGuest().then(o), n.off("login", o)
                    };
                n.getLoggedInStatus().then(function(i) {
                    if (i) s();
                    else switch (n.on("login", o), e) {
                        case "register":
                            n.launchRegistration().fail(s);
                            break;
                        case "newsletter":
                            t && n.launchNewsletters(t).fail(s);
                            break;
                        default:
                            n.launchLogin().fail(s)
                    }
                })
            }).fail(i.reject), i
        },
        logout: function() {
            var e = o.Deferred(),
                t = this;
            return n.OneID.then(function(n) {
                n.logout().then(e.resolve).then(function() {
                    t.trigger("logout")
                })
            }).fail(e.reject), e
        },
        refresh: function() {
            var e = o.Deferred(),
                t = this;
            return n.OneID.then(function(n) {
                n.getLoggedInStatus().then(function(i) {
                    i ? n.forceTokenRefresh().then(function() {
                        n.getGuest().then(function(n) {
                            t.trigger("login", n), e.resolve(n)
                        })
                    }) : e.reject()
                })
            }).fail(e.reject), e
        },
        retain: function() {
            0 === this._r++ && this.trigger(a, this, !0)
        },
        release: function() {
            this._r > 0 && 0 === --this._r && this.trigger(a, this, !1)
        },
        watched: function() {
            return this._r > 0
        }
    }), n.guest = new n.GuestContext, n.OneID = t()
}(this),
function(e) {
    "use strict";
    var t = e.Disney;
    t.gocGuest = function(t, n) {
        function i(e) {
            t.queue.push(e)
        }

        function r() {
            i(n.watched() || n.current ? ["user", !!n.current] : ["user", void 0])
        }
        r(), n.on("change:watched", r), n.on("login", r), n.on("logout", r), i(["on", "click:login", function() {
            n.login()
        }]), i(["on", "click:logout", function() {
            n.logout()
        }]), i(["on", "click:profile", function() {
            n.updateProfile()
        }]), i(["on", "click:create", function(t) {
            var i = t.target.parentNode.href || t.target.href,
                r = n.current.userId;
            e.location = i + "/" + r
        }])
    }
}(this),
function(e) {
    "use strict";

    function t(e) {
        i.age.known((e.profile.ageBand || "unknown").toLowerCase())
    }

    function n() {
        i.age.known(null)
    }
    var i = e.Disney;
    i.ageGuest = function(e) {
        e.refresh().fail(n), e.on("login", t), e.on("update", t), e.on("logout", n)
    }
}(this),
function(e) {
    "use strict";
    var t = e.Disney,
        n = e.$;
    n(function() {
        t.top.on("ready", function() {
            t.didOptions.enableTop && t.guest.retain()
        })
    })
}(this),
function(e) {
    "use strict";

    function t() {
        return r.mobile ? "mobile" : "desktop"
    }

    function n(e, t, n) {
        return t && !o.include(e.disallowed_regions, t) && !o.include(e.disallowed_regions, n) && (o.isEmpty(e.allowed_regions) || o.include(e.allowed_regions, t) || o.include(e.allowed_regions, n))
    }
    var i = e.Disney,
        r = e.Modernizr,
        o = e._,
        s = e.$;
    i.vis = function(e) {
        return o.reduce(e, function(e, n) {
            var i = n.visibility || {};
            return o.contains(i.invisible_device_types, t()) || (o.isEmpty(i.allowed_regions) && o.isEmpty(i.disallowed_regions) || (n.style_options.geo_hidden = !0), e.push(n)), e
        }, [])
    }, s(function() {
        i.top.on("ready", function(e) {
            o.each(e.views, function(e) {
                var t = e.model.get("visibility");
                t && e.$el.hasClass("geo-hidden") ? i.geo(function(i, r, o) {
                    n(t, i, i + "-" + o) && (e.$el.removeClass("geo-hidden").addClass("geo-accepted"), e.loaded && e.$el.loadLazyImages(), e.geoReady && e.geoReady())
                }) : e.$el.hasClass("geo-hidden") || e.geoReady && e.geoReady()
            })
        })
    })
}(this),
function(e) {
    "use strict";
    var t = e.Grill,
        n = e.jQuery,
        i = e._,
        r = e.Backbone,
        o = e.Disney,
        s = t.BurgerView,
        a = t.Burger,
        c = e.location,
        l = /[&?]draft_id=([^&]+)/.exec(c.search);
    o.Cellophane = {};
    var u = t.ValueAdedBurgerView = s.extend({
            initialize: function(e) {
                this.options = e || {}, s.prototype.initialize.apply(this, e)
            },
            getAdContext: function(e) {
                return new o.Ads.AdContext({
                    adData: e
                })
            },
            spawn: function(e) {
                var n = this.collection,
                    i = this.ads;
                i || (this.ads = i = this.getAdContext(n.adData));
                var r = {
                    model: e,
                    ads: i,
                    cds: i.cds(),
                    noAds: i.noAds()
                };
                return t.ModuleView.create(e.get("view"), r)
            },
            cto: function() {
                var t = this.collection.cto,
                    i = this.ads;
                i && i.unit && (t = n.extend({
                    adPageName: i.unit,
                    adSizeList: i.sizes().join(",")
                }, t));
                var r = e.activeAbTest || o.abn.testcase();
                return r && (t = n.extend({
                    abTest: r.id + "|" + r.group
                }, t)), o.ctoOptions && (t = n.extend({}, t, o.ctoOptions)), t = n.extend({
                    slug: d()
                }, t)
            },
            url: function() {
                return this.collection.href
            },
            branding: function() {
                return this.collection.branding
            }
        }),
        d = function() {
            var t = e.location.pathname,
                n = "/" === t ? "/homepage" : t,
                i = n + e.location.hash;
            return i = i.replace(/^\//g, ""), i = i.replace(/(\/)|(#)/g, ":")
        },
        f = t.Module.extend({
            data: function(e) {
                var t = new r.LazyCollection(e, {
                        model: o.Entity,
                        params: {
                            offset: "o",
                            limit: "l"
                        },
                        count: this.get("count")
                    }),
                    i = this.collection.url || c.pathname + c.search,
                    s = i.indexOf("?") >= 0 ? "&" : "?";
                return i = "/_grill/more" + i + s + n.param({
                    r: this.get("ref")
                }), l && (i += "&draft_id=" + l[1]), t.url = i, t
            },
            subject: function() {
                return this.data.first()
            }
        }),
        h = t.MysteryMeat = a.extend({
            model: f,
            reset: function(e, t) {
                return e = o.abn.parse(e), e.stack ? e.stack = o.vis(e.stack) : e = o.vis(e), a.prototype.reset.call(this, e, t)
            }
        });
    e.GOC && o.gocGuest(e.GOC, o.guest), o.ageGuest(o.guest), n(function() {
        var e = o.top;
        if (e.on("ready", function(e) {
                var t = e.ads,
                    r = e.collection,
                    s = n("#nav-pushdown").css("min-height", ""),
                    a = t && t.helpers && t.helpers();
                a && (a.pushdownAd && r && r.adData.pda && s.is(":visible") && s.html(a.pushdownAd()), a.overlayAd && n("body").prepend(a.overlayAd()), o.guest && r && r.ping && o.guest.refresh().always(function() {
                    i.defer(o.ping, r.ping.dynamic)
                }), t.ready(e))
            }), t.burger) {
            var r = new h(t.burger);
            o.Cellophane = {
                base_uri: r.cellophane_base_uri,
                auth_key: r.cellophane_auth_key
            }, o.DIAuth = {
                flattener: {
                    uri: r.flattener_base_uri,
                    client_id: r.flattener_client_id
                },
                UGC: {
                    api_url: r.ugc_api_url,
                    client_id: r.ugc_client_id
                },
                interactions: {
                    uri: r.interaction_base_uri,
                    client_id: r.interaction_client_id
                }
            }, o.globalStack = r.stack, o.ctoPageName = r.cto.pageName, o.RecommendationService = o.RecommendationService || {
                enabled: r.use_recommendation_service || !1,
                personalized: !1
            }, i.defer(function() {
                e.transition(new u({
                    el: n("#burger").empty().removeClass("frozen"),
                    collection: r
                }))
            })
        }
    })
}(this),
function(e) {
    "use strict";
    var t = e.Disney;
    t.Style.AssetPaths = {
        theme_stylesheets: {
            junior: "https://static-mh.content.disney.io/matterhorn/assets/themes/junior/application-929000723044.css",
            junior_emea: "https://static-mh.content.disney.io/matterhorn/assets/themes/junior/emea/application-b12707599c57.css",
            marvelkids: "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/application-453fa0512efd.css",
            marvelkids_home: "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/home/application-a5e720def892.css",
            marvelkids_avengers: "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/avengers/application-b9795568b3fc.css",
            "marvelkids_spider-man": "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/spider-man/application-4ace12274aca.css"
        },
        supported_videoplayer_skins: {
            junior: "https://static-mh.content.disney.io/matterhorn/assets/videoplayer/skins/junior_videoplayer-e475ad2b9f39.swf"
        },
        nav_logos: {
            light: {
                non_retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo-89193ebe6563.png",
                retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo@2x-25d10ad375dd.png"
            },
            dark: {
                non_retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo_dark-cdc4f0768098.png",
                retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo_dark@2x-8096506f0cde.png"
            }
        }
    }
}(this), Whiskers("partials.style_elements.takeover_styles", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<style type="text/css"> /* style-pack-configured takeover styles */ '), i.s(i.f("module_override", e, t, 1), e, t, 0, 88, 191, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" .takeover-area .overlay.default{ opacity: 0; } .takeover-area .overlay.module-override{ opacity: 1; } ")
            }), e.pop()), i.b(" "), i.b(" "), i.s(i.f("topper_takeovers", e, t, 1), e, t, 0, 336, 753, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" @media screen and (max-width: "), n.b(n.v(n.f("max_bp", e, t, 0))), n.b("px){ .module.junior_topper{ background-image: url("), n.b(n.v(n.d("src.non_retina", e, t, 0))), n.b(") !important; background-size: "), n.b(n.v(n.f("display_width", e, t, 0))), n.b("px "), n.b(n.v(n.f("display_height", e, t, 0))), n.b("px; } } @media screen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: "), n.b(n.v(n.f("max_bp", e, t, 0))), n.b("px), screen and (min-resolution: 144dpi) and (max-width: "), n.b(n.v(n.f("max_bp", e, t, 0))), n.b("px){ .module.junior_topper{ background-image: url("), n.b(n.v(n.d("src.retina", e, t, 0))), n.b(") !important; } } ")
            }), e.pop()), i.b(" @media screen and (min-width: 1025px){ "), i.s(i.f("fullscreen_module", e, t, 1), e, t, 1, 0, 0, "") || (i.b(" "), i.s(i.f("main_background_color", e, t, 1), e, t, 0, 863, 965, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .main-color{ background-color: "), n.b(n.v(n.f("main_background_color", e, t, 0))), n.b("; } ")
            }), e.pop()), i.b(" "), i.s(i.f("pushdown_safety_color", e, t, 1), e, t, 0, 1018, 1134, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .safety-color .color-block{ background-color: "), n.b(n.v(n.f("pushdown_safety_color", e, t, 0))), n.b(";} ")
            }), e.pop()), i.b(" "), i.s(i.f("main_image", e, t, 1), e, t, 0, 1176, 1517, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" .site-default-gradient{ display: none; } .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .main-image{ background-image: url("), n.b(n.v(n.d("main_image.src", e, t, 0))), n.b("); } "), n.s(n.f("main_background_color", e, t, 1), e, t, 0, 1343, 1490, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.s(n.f("repeating_image", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .repeating-image{ background-color: "), n.b(n.v(n.f("main_background_color", e, t, 0))), n.b("; } "))
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("top_gradient", e, t, 1), e, t, 0, 1550, 2289, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .repeating-color "), n.s(n.f("main_image", e, t, 1), e, t, 0, 1624, 1683, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(", .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .repeating-image")
                }), e.pop()), n.b("{ background-image: -webkit-gradient(linear, left top, left bottom, from("), n.b(n.v(n.f("color", e, t, 0))), n.b(" "), n.b(n.v(n.f("color_stop", e, t, 0))), n.b("), to("), n.b(n.v(n.f("main_background_color", e, t, 0))), n.b(")); background-image: -webkit-linear-gradient(top, "), n.b(n.v(n.f("color", e, t, 0))), n.b(" "), n.b(n.v(n.f("color_stop", e, t, 0))), n.b(", "), n.b(n.v(n.f("main_background_color", e, t, 0))), n.b("); background-image: linear-gradient(to bottom, "), n.b(n.v(n.f("color", e, t, 0))), n.b(" "), n.b(n.v(n.f("color_stop", e, t, 0))), n.b(", "), n.b(n.v(n.f("main_background_color", e, t, 0))), n.b("); "), n.b("-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr='"), n.b(n.v(n.f("color", e, t, 0))), n.b("', endColorstr='"), n.b(n.v(n.f("main_background_color", e, t, 0))), n.b("', GradientType=0)\"; } .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .safety-color .color-block{ background-color: "), n.b(n.v(n.f("color", e, t, 0))), n.b(";} ")
            }), e.pop()), i.b(" "), i.s(i.f("repeating_image", e, t, 1), e, t, 0, 2327, 2437, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" .takeover-area .overlay."), n.b(n.v(n.f("overlay_type", e, t, 0))), n.b(" .repeating-image{ background-image: url("), n.b(n.v(n.d("repeating_image.src", e, t, 0))), n.b("); } ")
            }), e.pop()), i.b(" ")), i.b(" "), i.s(i.f("fullscreen_module", e, t, 1), e, t, 0, 2503, 2652, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" #nav-local{ height: 0; overflow: visible; } .module.local_chrome #nav-local{ height: auto; } #nav-pushdown{ max-height: 126px; overflow: visible; } ")
            }), e.pop()), i.b(" "), i.s(i.f("local_chrome_dark", e, t, 1), e, t, 1, 0, 0, "") || i.b(" #nav-logo, #nav-local li a, aside.gpt.pushdown, #chrome-controls{ color: #fff; } #chrome-controls .chrome-controls-icon{ border-color: transparent #fff #fff transparent; } #nav-local li a.active{ color: #b2dfff; } "), i.b(" "), i.s(i.f("local_chrome_dark", e, t, 1), e, t, 0, 2957, 3243, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" #nav-logo, #nav-local li a, aside.gpt.pushdown, #chrome-controls{ color: #000; } #chrome-controls .chrome-controls-icon{ border-color: transparent #000 #000 transparent; } #nav-local li a.active{ color: #1786eb; } "), n.b(" ")
            }), e.pop()), i.b(" } "), i.s(i.f("nav_logos", e, t, 1), e, t, 0, 3282, 3621, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(" @media screen and (min-width: 1025px){ #nav-logo{ background-image: url("), n.b(n.v(n.f("non_retina", e, t, 0))), n.b(");} } @media screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1025px), screen and (min-resolution: 144dpi) and (min-width: 1025px){ #nav-logo{ background-image: url("), n.b(n.v(n.f("retina", e, t, 0))), n.b(");} } ")
            }), e.pop()), i.b(" </style>"), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.style_elements.page_styles", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<style type="text/css"> '), i.s(i.f("page_background_styles", e, t, 1), e, t, 0, 51, 2112, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" /* base-level page background styles */ .body-bg{ opacity: 1; } "), n.s(n.f("bg_color", e, t, 1), e, t, 0, 129, 204, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .body-bg .main, .body-bg .safety-color{ background-color: "), n.b(n.v(n.f("bg_color", e, t, 0))), n.b("; } ")
                }), e.pop()), n.b(" "), n.s(n.f("gradient", e, t, 1), e, t, 0, 231, 1027, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .body-bg .color-fade{ background-image: "), n.b(n.v(n.d("gradient.type", e, t, 0))), n.b("-gradient("), n.s(n.f("direction", e, t, 1), e, t, 0, 313, 328, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.v(n.f("direction", e, t, 0))), n.b(", ")
                    }), e.pop()), n.b(n.v(n.f("bg_color", e, t, 0))), n.b(" "), n.b(n.v(n.f("stop1", e, t, 0))), n.b(", "), n.b(n.v(n.f("bg_color", e, t, 0))), n.b(" "), n.b(n.v(n.f("stop2", e, t, 0))), n.b(", "), n.b(n.v(n.f("color", e, t, 0))), n.b(" "), n.b(n.v(n.f("stop3", e, t, 0))), n.b(", "), n.b(n.v(n.f("color", e, t, 0))), n.b(" "), n.b(n.v(n.f("stop4", e, t, 0))), n.b("); "), n.s(n.f("animation_duration", e, t, 1), e, t, 0, 456, 688, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" background-size: 200%; background-repeat: no-repeat; animation: gradient-fade 18s ease-in-out infinite; /* denotes keyframe animation in main.css.scss */ animation-duration: "), n.b(n.v(n.f("animation_duration", e, t, 0))), n.b("; transform: translate3d(0, 0, 0); ")
                    }), e.pop()), n.b(" "), n.s(n.f("fixed", e, t, 1), e, t, 0, 722, 759, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" position: fixed; min-height: 100vh; ")
                    }), e.pop()), n.b(" } "), n.s(n.f("animation_duration", e, t, 1), e, t, 0, 795, 1003, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" .body-bg .color-fade, .body-bg .main, .body-bg .safety-color{ background-color: "), n.b(n.v(n.f("color", e, t, 0))), n.b("; /* needed to avoid hard edges when animating past the edges of the main gradient or when render lags on scroll */ } ")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" "), n.s(n.f("background_image", e, t, 1), e, t, 0, 1062, 1587, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" @media screen and (min-width: 481px) { #base-bg{ background-image: url("), n.b(n.v(n.f("image", e, t, 0))), n.b("); background-position: "), n.b(n.v(n.f("position", e, t, 0))), n.b("; background-repeat: "), n.b(n.v(n.f("repeat", e, t, 0))), n.b("; "), n.s(n.f("fixed", e, t, 1), e, t, 0, 1222, 1417, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" position: "), n.b(n.v(n.f("fixed", e, t, 0))), n.b("; top: 0 !important; /* override positioning below chrome for relative */ min-height: 100vh; left: auto !important; /* needed to resolve fixed background indexing for IE11 */ ")
                    }), e.pop()), n.b(" "), n.s(n.f("full_page", e, t, 1), e, t, 0, 1442, 1467, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" background-size: cover; ")
                    }), e.pop()), n.b(" } /* body bg covering base-bg in safari*/ "), n.s(n.f("fixed", e, t, 1), e, t, 0, 1534, 1574, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" body{ background-color: transparent; } ")
                    }), e.pop()), n.b(" } ")
                }), e.pop()), n.b(" "), n.s(n.f("footer_inverted", e, t, 1), e, t, 0, 1629, 2091, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(" @media screen and (min-width: 1025px){ "), n.b(" footer #bottomnav a, footer #bottomnav p, footer #help p, footer #utility p{ color: #fff; } footer #bottomnav .col, footer #utility .divider { border-color: rgba(255, 255, 255, 0.07); } } ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("primary_theme", e, t, 1), e, t, 0, 2158, 3926, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" /* primary module-level color theme */ "), n.s(n.f("header_color", e, t, 1), e, t, 0, 2215, 2748, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.primary-theme:not(.skip-styles) h1:not(.skip-text-styles), .module.primary-theme:not(.skip-styles) h1:not(.skip-text-styles) a, .module.primary-theme:not(.skip-styles) h2:not(.skip-text-styles), .module.primary-theme:not(.skip-styles) h2:not(.skip-text-styles) a, .module.primary-theme.list_module_featured:not(.skip-styles) h3:not(.skip-text-styles), .module.primary-theme.list_module_featured:not(.skip-styles) h3:not(.skip-text-styles) a, .module.primary-theme:not(.skip-styles) .accent-color{ color: "), n.b(n.v(n.f("header_color", e, t, 0))), n.b("; } ")
                }), e.pop()), n.b(" "), n.s(n.f("text_color", e, t, 1), e, t, 0, 2781, 3465, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.primary-theme:not(.skip-styles) p:not(.skip-text-styles), .module:not(.skip-text-styles) ul:not(.skip-text-styles), .module.primary-theme:not(.skip-styles) li:not(.skip-text-styles), .module:not(.skip-text-styles) ol:not(.skip-text-styles), .module.primary-theme:not(.skip-styles) .base-color, .module.primary-theme:not(.skip-styles) .entity-container:not(.title-overlay) .entity-details .title, html.no-touch .module.primary-theme:not(.skip-styles) .entity-container.links-out:not(.skip-hover):not(.title-overlay) .entity-details a:hover .title, .module.primary-theme:not(.skip-styles) .entity-container:not(.title-overlay) .entity-details .ptitle{ color: "), n.b(n.v(n.f("text_color", e, t, 0))), n.b("; } ")
                }), e.pop()), n.b(" "), n.s(n.f("link_color", e, t, 1), e, t, 0, 3496, 3759, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.primary-theme:not(.skip-styles) a:not(.skip-text-styles), .module.primary-theme:not(.skip-styles) a.entity-link:hover h3:not(.skip-text-styles), .module.primary-theme:not(.skip-styles) .button.transparent:not(.skip-text-styles){ color: "), n.b(n.v(n.f("link_color", e, t, 0))), n.b("; } ")
                }), e.pop()), n.b(" "), n.s(n.f("background_color", e, t, 1), e, t, 0, 3796, 3904, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.primary-theme:not(.skip-styles){ background-color: "), n.b(n.v(n.f("background_color", e, t, 0))), n.b("; background-image: none; } ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("secondary_theme", e, t, 1), e, t, 0, 3965, 5876, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" /* secondary module-level color theme */ "), n.s(n.f("header_color", e, t, 1), e, t, 0, 4024, 4571, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.secondary-theme:not(.skip-styles) h1:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) h1:not(.skip-text-styles) a, .module.secondary-theme:not(.skip-styles) h2:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) h2:not(.skip-text-styles) a, .module.secondary-theme.list_module_featured:not(.skip-styles) h3:not(.skip-text-styles), .module.secondary-theme.list_module_featured:not(.skip-styles) h3:not(.skip-text-styles) a, .module.secondary-theme:not(.skip-styles) .accent-color{ color: "), n.b(n.v(n.f("header_color", e, t, 0))), n.b("; } ")
                }), e.pop()), n.b(" "), n.s(n.f("text_color", e, t, 1), e, t, 0, 4604, 5407, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.secondary-theme:not(.skip-styles) p:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) ul:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) li:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) ol:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) .base-color, .module.secondary-theme:not(.skip-styles) .entity-details h3:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) .entity-container:not(.title-overlay) .entity-details .title, html.no-touch .module.secondary-theme:not(.skip-styles) .entity-container.links-out:not(.skip-hover):not(.title-overlay) .entity-details a:hover .title, .module.secondary-theme:not(.skip-styles) .entity-container:not(.title-overlay) .entity-details .ptitle{ color: "), n.b(n.v(n.f("text_color", e, t, 0))), n.b("; } ")
                }), e.pop()), n.b(" "), n.s(n.f("link_color", e, t, 1), e, t, 0, 5438, 5707, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.secondary-theme:not(.skip-styles) a:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) a.entity-link:hover h3:not(.skip-text-styles), .module.secondary-theme:not(.skip-styles) .button.transparent:not(.skip-text-styles){ color: "), n.b(n.v(n.f("link_color", e, t, 0))), n.b("; } ")
                }), e.pop()), n.b(" "), n.s(n.f("background_color", e, t, 1), e, t, 0, 5744, 5854, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .module.secondary-theme:not(.skip-styles){ background-color: "), n.b(n.v(n.f("background_color", e, t, 0))), n.b("; background-image: none; } ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" "), i.s(i.f("icon_styles", e, t, 1), e, t, 0, 5913, 6253, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" /* module-level icon colors */ .module .module_header.icon .header_icon{ background-color: "), n.b(n.v(n.f("bottom", e, t, 0))), n.b("; background-image: -webkit-gradient(linear, left top, left bottom, from("), n.b(n.v(n.f("top", e, t, 0))), n.b("), to("), n.b(n.v(n.f("bottom", e, t, 0))), n.b(")); background-image: -webkit-linear-gradient(top, "), n.b(n.v(n.f("top", e, t, 0))), n.b(", "), n.b(n.v(n.f("bottom", e, t, 0))), n.b("); background-image: linear-gradient(to bottom, "), n.b(n.v(n.f("top", e, t, 0))), n.b(", "), n.b(n.v(n.f("bottom", e, t, 0))), n.b("); } ")
            }), e.pop()), i.b(" /* page-level entity styles */ "), i.s(i.f("entity_style_options", e, t, 1), e, t, 0, 6326, 6525, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("placeholder_image_override", e, t, 1), e, t, 0, 6358, 6493, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" /* lazy image placeholder override */ .entity-container .aspect.placeholder{ background-image: url("), n.b(n.v(n.f("placeholder_image_override", e, t, 0))), n.b("); } ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" </style>"), i.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.Whiskers,
            i = e._,
            r = e.jQuery;
        i.extend(t.Style, {
            verifyModuleTakeoverStyles: function() {
                var e = r("#takeover-styles-module-override");
                e.hasClass("transitioning") && e.html("").removeClass("transitioning")
            },
            transitionModuleTakeoverStyles: function() {
                r("#takeover-styles-module-override").addClass("transitioning")
            },
            applyTakeoverStyles: function(e, o) {
                var s = o ? "module-override" : "default",
                    a = r("#takeover-styles-" + s),
                    c = e && e.local_chrome_color || "light",
                    l = t.Style.AssetPaths.nav_logos[c],
                    u = e && i.extend(e, {
                        overlay_type: s,
                        module_override: o,
                        nav_logos: l
                    }),
                    d = u && n.partials.style_elements.takeover_styles.render(u) || "";
                a.length && a.html(d), o && a.removeClass("transitioning")
            },
            removeModuleTakoverStyles: function() {
                r("#takeover-styles-module-override").empty()
            },
            applyPageStyles: function(e) {
                var t = !!(e && e.page_background_styles && e.page_background_styles.footer_inverted),
                    i = e && n.partials.style_elements.page_styles.render(e) || "";
                r("#style-pack-theming").html(i), r("footer, #goc-ft").toggleClass("inverted", t)
            },
            applyStylePackStyles: function(e) {
                e = e || {}, this.applyPageStyles(e), this.applyTakeoverStyles(e.takeover_styles), this.verifyModuleTakeoverStyles()
            },
            attachCustomThemeStyles: function(e) {
                var n = e && e.custom_theme_components || {},
                    o = {
                        name: n.base,
                        $target: r("#base-theme-styles")
                    },
                    s = {
                        name: n.child && n.name,
                        $target: r("#child-theme-styles")
                    };
                i.each([o, s], function(e) {
                    if (!e.$target.hasClass(e.name)) {
                        var n = e.name && t.Style.AssetPaths.theme_stylesheets[e.name] || "";
                        e.$target.attr("href", n).attr("class", e.name)
                    }
                })
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.jQuery;
        n(function() {
            var e = t.top;
            e.on("begin", function() {
                t.Style.transitionModuleTakeoverStyles()
            }), e.on("ready", function(e) {
                var n;
                if (e.options.hasOwnProperty("collection") ? n = e.options.collection : e.hasOwnProperty("collection") && (n = e.collection), n) {
                    var i = n.style;
                    t.Style.attachCustomThemeStyles(i), t.Style.applyStylePackStyles(i)
                } else t.Style.applyStylePackStyles(null)
            })
        })
    }(this),
    function(e) {
        "use strict";

        function t(t, n) {
            var i = r(e),
                o = i.scrollTop(),
                s = i.scrollTop() + i.height(),
                a = t.offset().top + (n || 0),
                c = a + t.height(),
                l = a >= o && a <= s,
                u = c >= o && c <= s,
                d = l || u;
            d ? t.data("visibility", "visible") : d || t.removeData("visibility")
        }
        var n = e.Disney,
            i = e.document,
            r = e.jQuery,
            o = e._;
        n.Utilities = n.Utilities || {}, o.extend(n.Utilities, {
            loadedStylesheets: [],
            loadedScripts: [],
            loadStylesheet: function(e) {
                o.contains(this.loadedStylesheets, e) || (this.loadedStylesheets.push(e), r("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: e
                }).appendTo("head"))
            },
            loadScript: function(e, t) {
                o.contains(this.loadedScripts, e) || (this.loadedScripts.push(e), r.ajax({
                    url: e,
                    dataType: "script",
                    cache: !0
                }).done(t))
            },
            fetchContentCollection: function(e) {
                var t = r.Deferred();
                return r.getJSON("/collection/" + e).done(function(e) {
                    e.content_collection && e.content_collection.length > 0 ? t.resolve(e) : t.reject()
                }).fail(function() {
                    t.reject()
                }), t.promise()
            },
            toggleFullScreen: function(e, t) {
                var n = this.isFullScreen();
                e && t && !n ? e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen() : !t && n && (i.exitFullscreen ? i.exitFullscreen() : i.mozCancelFullScreen ? i.mozCancelFullScreen() : i.webkitCancelFullScreen ? i.webkitCancelFullScreen() : i.msExitFullscreen && i.msExitFullscreen())
            },
            onFullScreenChange: function(e) {
                r(i).on("fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", e)
            },
            offFullScreenChange: function(e) {
                e || (e = !1), r(i).off("fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", e)
            },
            isFullScreen: function() {
                return !!(i.fullScreen || i.webkitIsFullScreen || i.mozFullScreen || i.msFullscreenElement || i.fullscreenElement)
            },
            selectAnimationEnd: function() {
                var e, t = i.createElement("fakeelement"),
                    n = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "animationend",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                for (e in n)
                    if (void 0 !== t.style[e]) return n[e]
            },
            extractHostname: function(e) {
                return !!e && e.match(/[^https?:\/?\/?][a-zA-Z0-9\._-]+/)[0]
            },
            setElementVisibility: function(e, n) {
                if (e.length > 1) {
                    var i = e;
                    o.each(i, function(e) {
                        var i = r(e);
                        t(i, n)
                    })
                } else t(e, n)
            },
            updateQueryStringParameter: function(e, t, n) {
                if (!e) return e;
                var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                    r = e.indexOf("?") !== -1 ? "&" : "?";
                return e.indexOf(".gif") >= 0 && "optimize" === t ? e : e.match(i) ? e.replace(i, "$1" + t + "=" + n + "$2") : e + r + t + "=" + n
            },
            ajaxRequest: function(t, n) {
                if (!t) return null;
                var i = new e.XMLHttpRequest;
                i.addEventListener("load", n), i.open("GET", t), i.send(null)
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.GOC || {
                queue: []
            },
            i = e.Disney;
        t("#nav-e").on("click", function(e) {
            e.preventDefault(), n.queue.push(["openMenu"]), n.incredibles_search && t("#nav-local #search-e").toggle()
        }), t(function() {
            t("#nav-local li a[href]").each(function() {
                t(this).toggleClass("active", this.href === e.location.href)
            }), t("#nav-logo span").addClass(function() {
                return this.innerHTML.length > 10 ? "long-logo-name" : null
            }), i.top.on("ready", function() {
                var e = i.top.current.collection || {},
                    n = e.local_chrome_and_footer || {},
                    r = n.exclude_local_chrome === !0;
                t("#nav-local").toggleClass("exclude-local-chrome", r)
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.GOC || {
                queue: []
            };
        t("#nav-e").on("click", function(e) {
            e.preventDefault(), n.queue.push(["openMenu"])
        }), t(function() {
            if (t("#nav-local-channels a[href]").each(function() {
                    t(this).toggleClass("active", this.href === e.location.href)
                }), t(e).width() >= 1024) {
                var n = t("#nav-local-channels .channel-slider"),
                    i = n.hasClass("channel") ? .09 : .045;
                n.swipeasaurus({
                    arrows: !0,
                    loop: !0,
                    right: i
                })
            }
            t(".channel-bg > .pages > li > a").each(function() {
                var e = t(this),
                    n = e.html(),
                    i = n.split(" "),
                    r = '<span class="firstWord">' + i[0] + "</span><br />";
                i.shift(), t.each(i, function(e, t) {
                    r += " " + t
                }), e.html(r)
            }), t(".xd-bg > .pages > li > a").each(function() {
                var e = t(this),
                    n = e.html(),
                    i = n.split(" "),
                    r = '<span class="firstWord">' + i[0] + "</span><br />";
                i.shift(), t.each(i, function(e, t) {
                    r += " " + t
                }), e.html(r)
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.Tracker,
            i = t("#goc-bar"),
            r = t("#chrome-controls");
        t(function() {
            r.on("click", function() {
                var t = r.hasClass("open");
                i.toggleClass("open"), r.toggleClass("open"), n && n.event({
                    eventCategory: "navigation",
                    action: "disney-chrome-" + (t ? "hide" : "show"),
                    label: e.location.href
                })
            })
        })
    }(this), Whiskers("errors.e404", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<article id="error_page" class="e404 e404_static module error_page side-by-side-desktop span-full-screen"> <div class="bound"> <video class="e404_img" autoplay muted playsinline src="'), i.b(i.v(i.f("video", e, t, 0))), i.b('" type="video/mp4"></video> <h2 class="e404_message">You didn&rsquo;t break the internet, but we can&rsquo;t find what you are looking for.</h2> <div class="e404_search"> <h3>What can KnowsMore help you find today?</h3> <form id="search_404" action="'), i.b(i.v(i.f("search_error", e, t, 0))), i.b('" method="GET"> <img src="'), i.b(i.v(i.f("image_search", e, t, 0))), i.b('"> <div class="search-field"> <input id="search_404_input" name="q" type="text" placeholder="Search..."> <input type="submit" class="search-icon" value=""> </div> </form> </div> </div> </article>'), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("errors.e500", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<article id="error_page" class="e500 module error_page side-by-side-desktop"> <div class="bound"> <div class="inner"> <img src="'), i.b(i.v(i.f("image", e, t, 0))), i.b('"> <div class="message"> <h1>Gawrsh!</h1> <h2>Something is not working right.<br> Please try again soon.</h2> </div> </div> </div> </article>'), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("errors.enet", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<article id="error_page" class="enet module error_page side-by-side-desktop"> <div class="bound"> <div class="inner"> <img src="'), i.b(i.v(i.f("image", e, t, 0))), i.b('"> <div class="message"> <h1>Aw Phooey!</h1> <h2>The connection was lost. Please try again.</h2> </div> </div> </div> </article>'), i.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.Backbone,
            i = e.jQuery,
            r = e.Whiskers,
            o = {
                e404_search: "https://static-mh.content.disney.io/matterhorn/assets/errors/e404_search-a3ee4300507c.png",
                e500: "https://static-mh.content.disney.io/matterhorn/assets/errors/e500_matte-bbd8940de449.png",
                enet: "https://static-mh.content.disney.io/matterhorn/assets/errors/enet_matte-78b9221b6b94.png"
            },
            s = "https://static-mh.content.disney.io/matterhorn/assets/errors/e404_main_video-eac5362f8f95.mp4",
            a = i("#goc-bar .goc-search").attr("action"),
            c = n.View.extend({
                initialize: function(t) {
                    this.options = t || {}, this.guest = e.Disney.guest
                },
                render: function() {
                    this.el.innerHTML = this.template.render({
                        image: this.image,
                        search_error: a
                    })
                },
                cto: function() {
                    return {
                        cmsId: "MH",
                        account: "wdgdsec",
                        categoryCode: "dcom",
                        pageName: this.error,
                        breadcrumbs: "error",
                        pageType: "errorpage",
                        ctoSrcPath: "/stat/dolWebAnalytics.js"
                    }
                }
            }),
            l = c.extend({
                video: s,
                image_search: o.e404_search,
                search_error: a,
                template: r.errors.e404,
                error: "404"
            }),
            u = c.extend({
                image: o.e500,
                template: r.errors.e500,
                error: "500"
            }),
            d = c.extend({
                image: o.enet,
                template: r.errors.enet,
                error: "network"
            });
        i(function() {
            t.top.on("error", function(e, n, i, r) {
                "timeout" === i ? t.top.transition(new d) : "Not Found" === r ? t.top.transition(new l) : "abort" !== i && t.top.transition(new u)
            })
        })
    }(this),
    function(e) {
        "use strict";
        e.jQuery(function(t) {
            var n = "title",
                i = t("body");
            e.Modernizr.touch || i.on("mouseenter", "[title]", function() {
                var e = t(this),
                    i = e.data(n) || e.attr(n);
                e.data(n, i).attr(n, "")
            }).on("mouseleave", "[title]", function() {
                var e = t(this),
                    i = e.data(n);
                i && e.attr(n, i)
            })
        })
    }(this),
    function(e) {
        var t = e.document,
            n = e.jQuery,
            i = [84, 69, 65, 77, 32, 77, 65, 84, 84, 69, 82, 72, 79, 82, 78],
            r = 0,
            o = function(s) {
                s.keyCode === i[r++] ? r === i.length && (n(t).off("keydown", o), n("body").fadeOut(function() {
                    e.location.href = "/its/a/secret/to/everybody/index.html"
                })) : r = 0
            };
        n(t).on("keydown", o)
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.jQuery,
            i = e.window,
            r = e.Tracker;
        n(function() {
            var e = n("footer"),
                o = e.find(".language-picker");
            t.top.on("ready", function(t) {
                o.length && (o.find("option").each(function() {
                    n(this).data("url") === i.location.origin && o.val(this.value)
                }), o.change(function() {
                    var e = o.find("option:selected"),
                        t = e.data("url");
                    r.link({
                        linkPosition: "globalfooter/lanuage-picker",
                        linkName: "globalfooter/lanuage-picker/" + e.text(),
                        href: t
                    }), t && (i.location = t)
                }));
                var s = t.branding;
                n.isFunction(s) && (s = s.call(t)), e.find(".branding").first().text(s)
            }), e.find("form.search").on("submit", function() {
                r.link({
                    linkName: "globalfooter/searchbox/search_enter",
                    linkPosition: "globalfooter/searchbox"
                }), r.event({
                    engagementType: "unified_search",
                    engagementMeta: "footer",
                    leadType: n("#searchField_Footer").val().trim()
                })
            }), e.find("form.search input").one("input", function() {
                r.event({
                    searchAttempt: "y",
                    engagementType: "globalfooter",
                    searchFlow: "searchField_Footer"
                }), r.event({
                    engagementType: "unified_search_initiated",
                    engagementMeta: "footer"
                })
            })
        })
    }(this),
    function(e) {
        "use strict";

        function t() {
            return i() || n("ctoVisitor", "visitorId") || n("ctoLocalVisitor", "localVisitorId")
        }

        function n(e, t) {
            var n = o.get(e),
                i = JSON.parse(s(n || "{}"));
            return i[t]
        }

        function i() {
            var t = e.location.search,
                n = new RegExp(a + "=([^&]*)"),
                i = n.exec(t);
            return i ? i[1] : null
        }
        var r = e.Disney,
            o = r.Cookie,
            s = e.decodeURIComponent,
            a = "visitor_id";
        r.visitorId = t
    }(this),
    function(e) {
        "use strict";
        var t, n, i = e.jQuery,
            r = e.navigator,
            o = e.Disney,
            s = "https:" === e.location.protocol,
            a = Array.prototype.slice,
            c = [],
            l = [],
            u = o.ctoDo = function(e, n) {
                null === l && null === c ? e(t) : n ? c.push(e) : l.push(e)
            },
            d = e.cto = {
                trackPagination: function(e) {
                    for (e += ""; e.length < 2;) e = "0" + e;
                    u(function(t) {
                        var n = t.pageName;
                        n && (t.pageName = n.replace(/\|page_\d+$/, "") + "|page_" + e, t.track())
                    })
                }
            };
        i.each(["resetObj", "track", "trackApp", "trackEvent", "trackLink", "trackVideo", "trackGame", "addCTOListener"], function(e, t) {
            d[t] = function() {
                var e = a.call(arguments),
                    i = e[0],
                    r = !1;
                i && i.ctoSrcPath && f(i.ctoSrcPath), ["track", "resetObj"].forEach(function(e) {
                    t === e && (r = !0)
                }), u(function(r) {
                    i && n && !e[0].country && (e[0].country = n),
                        r[t].apply(r, e)
                }, r)
            }
        });
        var f = function(o) {
            function a() {
                t = new e.CTO;
                for (var n = (c || []).concat(l || []), i = 0; i < n.length; i++) {
                    var r = n[i];
                    r(t), e.setTimeout(200)
                }
                c = l = null
            }

            function u() {
                var t = i.Deferred();
                return e.getScript("https://tredir.go.com/capmon/GetDE/?set=j&param=country", function() {
                    var i = {
                        argentina: "AR",
                        bolivia: "BO",
                        brazil: "BR",
                        chile: "CL",
                        colombia: "CO",
                        "costa rica": "CR",
                        cuba: "CU",
                        dominica: "DO",
                        "dominican republic": "DO",
                        ecuador: "EC",
                        guatemala: "GT",
                        honduras: "HN",
                        mexico: "MX",
                        nicaragua: "NI",
                        panama: "PA",
                        peru: "PE",
                        "puerto rico": "PR",
                        paraguay: "PY",
                        "el salvador": "SV",
                        uruguay: "UY",
                        venezuela: "VE"
                    };
                    n = i[e.country], t.resolve()
                }), t.promise()
            }
            r && "preview" === r.loadPurpose || e.cto.account || (i(e).one("CTOReady", function() {
                u().then(a)
            }), i.ajax((s ? "https://global" : "http://aglobal") + ".go.com" + o, {
                dataType: "script",
                cache: !0
            }))
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.Disney,
            i = e.Grill,
            r = e.activeAbTest || {},
            o = {},
            s = !1;
        n.ctoDo(function(t) {
            var n = e.CTO;
            o.visitorId = t.getCTOValue("visitorId", n), o.subdomain = t.getCTOValue("url", n).split("/")[2], o.pageTitle = t.getCTOValue("pgTtl", n), o.firstUrlSubdomain = t.getCTOValue("visitorFirstUrl", n).split("/")[2], t.addCTOListener("cto-ddn-video", function(e) {
                o.videoSessionId = e.videoSessionId, o.videoSequenceNum = e.videoSequenceNum
            })
        });
        var a = function() {
                return {
                    visitorId: o.visitorId || n.visitorId() || "",
                    subdomain: o.subdomain || "",
                    videoSessionId: o.videoSessionId || "",
                    videoSequenceNum: o.videoSequenceNum || "",
                    pageTitle: o.pageTitle || "",
                    firstUrlSubdomain: o.firstUrlSubdomain || ""
                }
            },
            c = function(e, n, i) {
                return "popular" !== i && (n.cto = a()), t.ajax({
                    url: e,
                    type: "GET",
                    data: n,
                    dataType: "json"
                })
            },
            l = function(e, i, r) {
                var o = t.Deferred();
                return n.ctoDo(function() {
                    s = !0, c(e, i, r).done(o.resolve).fail(o.reject)
                }), o.promise()
            },
            u = n.Recommender = n.Recommender || {};
        u.getRecommendations = function(e) {
            var a = n.RecommendationService && n.RecommendationService.enabled && e && e.type && "recommendation" === e.type.toLowerCase(),
                u = i.burger && !!i.burger.cds;
            if (!u && a) {
                var d = "/_recommendations/",
                    f = {},
                    h = e.parameters.limit;
                return d += e.core_id && "popular" !== e.recommendation_type ? e.core_id : "", h && (f.limit = h), r.id && r.group && (f.ab_id = r.id, f.ab_group = r.group), n.RecommendationService.personalized && (s ? f.guest_id = o.visitorId : n.ctoDo(function() {
                    f.guest_id = o.visitorId || n.visitorId() || ""
                })), s ? c(d, f, e.recommendation_type) : l(d, f, e.recommendation_type)
            }
            return t.Deferred().reject()
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.jQuery,
            i = t.Cookie;
        n(function() {
            t.top.on("ready", function() {
                "true" !== i.get("cookies-accepted") && (n(".regional-cookie-warning").show(), n("#regional-cookie-accept").on("click", function() {
                    i.set("cookies-accepted", "true", {
                        domain: i.domain(),
                        expires: 365
                    }), n(".regional-cookie-warning").hide()
                }));
                var t = n('#goc-ft nav a[href="#show-cookie-manager"]');
                t.attr("role", "button"), t.on("click", function() {
                    var t = e.DisneyGDPR && e.DisneyGDPR.Core;
                    t && t.openPreferencesDialog()
                })
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e._,
            i = e.window,
            r = e.document,
            o = e.jQuery,
            s = 13,
            a = 32;
        o(function() {
            t.top.on("ready", function() {
                var e = o("#scroll-to-top"),
                    c = o(r),
                    l = o(i),
                    u = n.throttle(function() {
                        var n = c.height(),
                            i = l.height(),
                            r = 3e3;
                        if (t.top.current && t.top.current.collection && t.top.current.collection.scroll_to_top) {
                            var o = t.top.current.collection.scroll_to_top.screen_length_to_trigger;
                            n > o ? r = Math.floor(n / 2) : n - i < r && n / i > 1.5 && (r = Math.floor(i / 1.5))
                        }
                        e.toggleClass("active", l.scrollTop() >= r)
                    }, 300),
                    d = function() {
                        return e.removeClass("active"), l.off("scroll", u), o("html, body").animate({
                            scrollTop: 0
                        }, 1e3, "swing", function() {
                            l.on("scroll", u)
                        }), !1
                    };
                e.click(d), e.keydown(function(e) {
                    [s, a].includes(e.keyCode) && (e.preventDefault(), d(), o(":focusable:visible").first().focus())
                }), l.on("scroll", u)
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Backbone,
            n = e.$,
            i = e.Grill,
            r = e._,
            o = t.View.extend({}, {
                getInstance: function() {
                    if (void 0 === this._instance) {
                        var e = this;
                        this._instance = new e
                    }
                    return this._instance
                }
            }),
            s = o.extend({
                el: "#modal-window",
                views: [],
                add: function(e) {
                    this.el.appendChild(e.el), this.views.push(e)
                },
                contains: function(e) {
                    return this.views.indexOf(e) >= 0
                },
                scrollStart: function() {
                    e.document.documentElement.classList.remove("modal-no-scroll")
                },
                scrollStop: function() {
                    e.document.documentElement.classList.add("modal-no-scroll")
                },
                show: function(t, n) {
                    this.hide();
                    var i = n && n.render,
                        r = t.options && t.options.name;
                    !i && this.contains(t) || (t.el.innerHTML = t.render(), t.close = new a({
                        closeElement: t.el.querySelector(t.options.closeElement)
                    }), this.add(t), this._bindEvents()), t.close.show();
                    var o = t.options.linkEl && t.options.linkEl[0],
                        s = e.event && e.event.target,
                        c = o && o.id || s && s.getAttribute("id");
                    c && t.close.el.setAttribute("data-return-target", c), t.el.classList.add("show"), t.el.scrollTop = 0, t.ready(), this.scrollStop(), e.setTimeout(function() {
                        t.close.$el.trigger("focus")
                    }, 400), r && (this.el.className = this.el.className + " " + r), this.el.classList.add("show")
                },
                hide: function() {
                    var t = this,
                        n = e.document.createEvent("Event"),
                        i = this.el.querySelector("#modal-close").getAttribute("data-return-target");
                    this.el.className = this.el.className.replace(" show", ""), this.scrollStart(), r.each(t.views, function(e) {
                        var i = e.options && e.options.name;
                        i && (t.el.className = t.el.className.replace(" " + i, "")), e.el.className = e.el.className.replace(" show", ""), e.close.hide(), n.initEvent("hide", !0, !0), e.el.dispatchEvent(n)
                    }), e.document.getElementById(i) && e.document.getElementById(i).focus()
                },
                _bindEvents: function() {
                    var e = this;
                    r.each(this.views, function(t) {
                        t.close.el.addEventListener("click", function() {
                            e.hide()
                        })
                    })
                }
            }),
            a = o.extend({
                el: "#modal-close",
                initialize: function(e) {
                    this.options = e || {};
                    var t = e && e.closeElement;
                    r.extend(e, {
                        windowView: s.getInstance()
                    }), t && (this.el = t)
                },
                show: function() {
                    this.el.classList.remove("hidden")
                },
                hide: function() {
                    this.el.classList.add("hidden")
                }
            });
        i.ModalView = t.View.extend({
            className: "modal",
            constructor: function(e) {
                t.View.apply(this, arguments);
                var n = this,
                    i = e && e.name;
                r.extend(e, {
                    windowView: s.getInstance(),
                    keyEvents: []
                }), n.options = e, n.el.id = r.uniqueId(i), n.el.className += " " + i, n._bindEvents()
            },
            ready: function() {},
            show: function(e) {
                this.options.windowView.show(this, e)
            },
            hide: function(e) {
                this.options.windowView.hide(e)
            },
            _bindEvents: function() {
                var t = this;
                t.options.windowView.el.addEventListener("click", function(e) {
                    this === e.target && t.hide()
                }), n("#modal-overlay").on("click", function(e) {
                    "modal-overlay" === e.target.id && t.hide()
                }), r.each(t.options.keyEvents, function(n) {
                    var i = t._handleKeyEvent.bind(n);
                    e.document.addEventListener(n.name, i)
                }), e.document.addEventListener("keydown", function(e) {
                    27 === e.keyCode && t.hide(t.options)
                })
            },
            _handleKeyEvent: function(e) {
                var t = this;
                t.keyCode === e.keyCode && t.callback()
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e._;
        t.Browser = {
            showWarning: function() {
                return this.matchList(t.browser_warning_versions)
            },
            matchList: function(e, t) {
                if (!e) return !1;
                var i = this;
                return n.any(e, function(e) {
                    return i.matches(e.name, e.version, t)
                })
            },
            matches: function(e, t, n) {
                var i = this.getVersion(n);
                return i.name === e && i.version === t
            },
            getVersion: function(t) {
                var n, i = t || e.navigator.userAgent;
                if (/Trident.*rv:(\d+\.\d+)/i.test(i)) n = "i";
                else if (/Trident.(\d+\.\d+)/i.test(i)) n = "io";
                else {
                    if (!/MSIE.(\d+\.\d+)/i.test(i)) return {
                        name: "Unknown",
                        version: 0
                    };
                    n = "i"
                }
                var r = parseFloat(RegExp.$1);
                return "i" === n && 7 === r && e.XDomainRequest && (r = 8), "io" === n && (r = r > 6 ? 11 : r > 5 ? 10 : r > 4 ? 9 : r > 3.1 ? 8 : r > 3 ? 7 : 9), {
                    name: "Internet Explorer",
                    version: r
                }
            }
        }
    }(this), Whiskers("modals.browser_warning", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<div class="modal-info"> <ul id="modal_message"> <h3 class="modal-title" style="text-align:left">'), i.b(i.v(i.f("header", e, t, 0))), i.b('</h3> <p class="modal-content">'), i.b(i.v(i.f("body", e, t, 0))), i.b('</p> <div class="modal-accept"> <a id="modal_accept" class="button large blue">'), i.b(i.v(i.f("continue_button", e, t, 0))), i.b("</a> </div> </ul> </div>"), i.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = t.Cookie,
            i = e.Grill,
            r = e.Whiskers,
            o = e.jQuery;
        i.BrowserWarningModalView = i.ModalView.extend({
            events: {
                "click #modal_accept": function() {
                    this.accept(), this.hide()
                }
            },
            render: function() {
                return this.options.template.render(this.options.browser_warning)
            },
            hasAccepted: function() {
                return "true" === n.get("accept-browser-warning")
            },
            accept: function() {
                n.set("accept-browser-warning", "true", {
                    domain: n.domain(),
                    expires: 1
                })
            }
        }), o(function() {
            t.top.on("ready", function() {
                if (t.top.current && t.top.current.collection && t.Browser.showWarning()) {
                    var e = t.top.current.collection.browser_warning || {},
                        n = new i.BrowserWarningModalView({
                            name: "browser-warning",
                            template: r.modals.browser_warning,
                            closeElement: ".modal-close",
                            browser_warning: e
                        });
                    n.hasAccepted() || n.show()
                }
            })
        })
    }(this),
    function(e) {
        "use strict";
        e.Disney.FormElements = e.Disney.FormElements || {};
        var t = e.Disney.FormElements,
            n = e.Whiskers,
            i = e._,
            r = e.jQuery;
        r(function() {
            t.dateDropdown = {
                renderTemplate: function(t) {
                    for (var o = t || {}, s = i.extend({
                            month: "Month",
                            day: "Day",
                            year: "Year",
                            january: "January",
                            february: "February",
                            march: "March",
                            april: "April",
                            may: "May",
                            june: "June",
                            july: "July",
                            august: "August",
                            september: "September",
                            october: "October",
                            november: "November",
                            december: "December"
                        }, o.translations), a = [], c = [], l = [], u = new e.Date, d = u.getFullYear(), f = 1; f <= 31; f++) a.push(f);
                    for (var h = d; h >= d - 100; h--) l.push(h);
                    var p = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
                    r.each(p, function(e, t) {
                        c.push({
                            value: e,
                            month: s[t]
                        })
                    });
                    var v = {
                        days: a,
                        months: c,
                        years: l,
                        translations: s
                    };
                    return n.partials.date_dropdown.render(v)
                }
            }, t.characterCountdown = {
                renderTemplate: function(e) {
                    var t = {
                        rows: e.rows,
                        maxLength: e.maxLength || 140,
                        tag: e.tag,
                        label: e.label,
                        required: e.required
                    };
                    return n.partials.character_countdown.render(t)
                },
                onReady: function(e, t, n) {
                    e.on("keyup", function() {
                        var e = r(this).val(),
                            i = t - e.length;
                        n.html(i)
                    })
                }
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.cto,
            i = e.Tracker = {
                safe_cto: function(t, i) {
                    n && n[t] ? n[t].apply(this, i) : e.console.log("Undefined method: " + t + " on cto")
                },
                page: function(e) {
                    var n = {
                        pageName: ""
                    };
                    t.extend(n, e), i.track({
                        pageName: n.pageName
                    })
                },
                event: function(e) {
                    var n = e.eventCategory + ":" + e.action,
                        r = {
                            eventCategory: null,
                            action: null,
                            label: null,
                            value: null,
                            engagementMeta: null,
                            engagementType: n
                        };
                    t.extend(r, e), i.trackEvent(r)
                },
                game: function(e) {
                    var n = {};
                    t.extend(n, e), i.trackGame(n)
                },
                link: function(e) {
                    var n = {
                        linkName: null,
                        linkPosition: null,
                        isChrome: !1,
                        href: null
                    };
                    t.extend(n, e, {
                        linkUrl: e.href
                    }), n.isChrome && (n.linkPosition = "Chrome: " + n.linkPosition), i.trackLink(n)
                },
                video: function(e) {
                    var n = {
                        analyticsData: null
                    };
                    t.extend(n, e), i.trackVideo(n.analyticsData)
                },
                setCto: function(e) {
                    n = e
                }
            },
            r = ["resetObj", "track", "trackPagination", "trackApp", "trackGame", "trackLink", "trackEvent", "trackVideo"];
        t.map(r, function(e) {
            i[e] = function() {
                i.safe_cto(e, arguments)
            }
        }), t(function() {
            t("#nav-local ul").on("click", "a", null, function(n) {
                var i = t(n.currentTarget),
                    r = t.trim(i.find("img").attr("alt") || i.text()),
                    o = i.attr("href"),
                    s = t("#nav-local a").index(i),
                    a = ["sitenav", s, "none", "link"].join("/"),
                    c = [a, r].join("/");
                e.Tracker.link({
                    linkName: c,
                    linkPosition: a,
                    href: o
                })
            }), t("#nav-local-channels .pages").on("click", "a", null, function(n) {
                var i = t(n.currentTarget),
                    r = t.trim(i.find("a").attr("alt") || i.text()),
                    o = r.replace(/[^a-z0-9 ]/gi, "").replace(/\s+/g, "-"),
                    s = i.attr("href"),
                    a = ["Topnav", "mainlinks"].join("/"),
                    c = [a, "image", o].join("/");
                e.Tracker.link({
                    linkName: c,
                    linkPosition: a,
                    href: s
                })
            }), t("#nav-local-channels .channel-slider-container").on("click", "a", null, function(n) {
                var i = t(n.currentTarget),
                    r = t.trim(i.find("img").attr("alt") || i.text()),
                    o = r.replace(/[^a-z0-9 ]/gi, "").replace(/\s+/g, "-"),
                    s = i.attr("href"),
                    a = ["CharacterNav", "char"].join("/"),
                    c = [a, "image", o].join("/");
                e.Tracker.link({
                    linkName: c,
                    linkPosition: a,
                    href: s
                })
            }), t("footer a, #goc-ft a").on("click", null, null, function(n) {
                var i = t.trim(t(n.currentTarget).text()),
                    r = t(n.currentTarget).attr("href"),
                    o = t(n.currentTarget).data("module-title");
                o && (i = o + "/" + i), e.Tracker.link({
                    linkName: "globalfooter/link/" + i,
                    linkPosition: "globalfooter",
                    href: r
                })
            }), t.each(["#searchField_SRP", "#searchField_BlogChrome"], function(n, i) {
                t(i).one("input", function() {
                    e.cto.trackEvent({
                        searchFlow: i.replace("#", ""),
                        searchEvent: "attempt"
                    })
                })
            })
        })
    }(this), Whiskers("shared.search_navigation", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<button id="search-e" role="button" title="Search"></button> <div id="nav-search" class="goc-nav-search"> <div class="overlay"></div> <div class="search-form"> <form class="goc-search" method="GET" action="'), i.b(i.v(i.f("search_action", e, t, 0))), i.b('"> <span id="search-clear" role="button" title="Clear"></span> <span class="search-icon"></span> <input type="text" name="q" class="instant-search-input" placeholder="'), i.b(i.v(i.f("search", e, t, 0))), i.b('" autocomplete="off"/> <input type="submit" class="search-icon" value=""> </form> <span id="search-close" role="button" title="Cancel"></span> </div> </div>'), i.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Grill,
            n = e.Whiskers,
            i = e.jQuery,
            r = e.GOC,
            o = e.Tracker;
        t.ModuleView.register("search_navigation", {
            template: n.shared.search_navigation,
            $navSearch: null,
            $searchClear: null,
            $searchInput: null,
            $searchClose: null,
            $navLocal: null,
            open: function() {
                if (r.incredibles_search) {
                    if (i("#nav-local #nav-e").hide(), this.$navLocal.hasClass("search-open")) return this.close()
                } else i("html, body").addClass("search-is-open");
                var e = ["sitenav", i("#nav-local a").length, "none", "link"].join("/");
                o.link({
                    linkName: "searchOpen",
                    linkPosition: e
                }), this.$navLocal.addClass("search-open")
            },
            close: function() {
                return r.incredibles_search && i("#nav-local #nav-e").show(), i("html, body").removeClass("search-is-open"), this.$navLocal.removeClass("search-open"), this.clearForm(!0), !0
            },
            clearForm: function(e) {
                var t = this.$searchInput;
                return this.$searchClear.removeClass("show"), i("#search-is").remove(), r.incredibles_search ? void t.val("").trigger(e ? "blur" : "focus") : (t.val("").trigger("focus"), void(e && t.trigger("blur")))
            },
            initCTO: function() {
                var e = "instant_search";
                i("#goc-bar, #nav-search").one("input", "form.goc-search", function() {
                    o.event({
                        engagementType: "unified_search_initiated",
                        engagementMeta: e
                    })
                }), i("#goc-bar, #nav-search").on("click", "form.goc-search a", function() {
                    var t = i(this).data("linkname"),
                        n = "unified_search_conversion";
                    (i(this).hasClass("all") || i(this).hasClass("search-more-btn")) && (n = "unified_search"), o.event({
                        engagementType: n,
                        engagementMeta: e,
                        leadType: i(this).data("linkinput"),
                        dealType: t
                    })
                })
            },
            initialize: function(t) {
                this.options = t || {};
                var n = this,
                    s = i("#goc-bar .goc-search"),
                    a = s.attr("action"),
                    c = s.find("input[type=text]").attr("placeholder"),
                    l = this.template.render({
                        search_action: a,
                        search: c
                    });
                i("#search_cancel_text").after(l), i("form.goc-search input[type='text']").on("keyup", function(e) {
                    "" === i(e.target).val() && n.clearForm(!1)
                }), n.$navSearch = i("#nav-search"), n.$navLocal = i(".nav-local"), n.$searchClose = i("#search-close"), n.$searchClose.html(i("#search_cancel_text").html()), n.$navSearch.on("click", "a[href]", function() {
                    n.close()
                });
                var u = e.setInterval(function() {
                    "function" == typeof r.ac && (r.ac(n.$navSearch, "mtt_chrome"), e.clearInterval(u))
                }, 1500);
                i("#search-e").on("click touchstart", function() {
                    return i("html.ios").addClass("modal-no-scroll"), n.open(), !1
                }), n.$searchClear = i("#search-clear"), n.$searchInput = i("#nav-search .search-form form input[type=text]"), n.$searchClose.on("click touchstart", function() {
                    i("html.ios").removeClass("modal-no-scroll"), o.link({
                        linkName: "searchClose",
                        searchPhraseInput: n.$searchInput.val()
                    })
                }), n.$searchClear.on("click touchstart", function() {
                    o.link({
                        linkName: "searchClear",
                        searchPhraseInput: n.$searchInput.val()
                    })
                }), n.$navSearch.find(".overlay, #search-close").on("click touchstart", function() {
                    return n.close(), i("html.ios").removeClass("modal-no-scroll"), !1
                }), n.$searchInput.attr("autocomplete", "off").attr("autocorrect", "off"), n.$navSearch.find(".search-form").on(i.fn.selectTransitionEnd(), function() {
                    return n.$searchInput.trigger("focus"), !1
                }), n.$searchClear.on("click touchstart", function() {
                    n.clearForm(!1)
                }), n.$searchInput.on("keyup", function() {
                    n.$searchClear.addClass("show")
                }), i(e.window).on("keydown", function(e) {
                    if (27 === e.keyCode) {
                        var t = n.$navLocal.hasClass("search-open");
                        return n.close(), i("html.ios").removeClass("modal-no-scroll"), t && i("#search-e").trigger("focus"), !1
                    }
                }), this.initCTO()
            }
        }), i(function() {
            t.ModuleView.create("search_navigation")
        })
    }(this), Whiskers("partials.age_gate_modal", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.s(i.f("isSocial", e, t, 1), e, t, 0, 13, 782, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div id="social-buttons"> <p>'), n.b(n.v(n.d("translations.share_this_with_your_friends", e, t, 0))), n.b('</p> <div id="social-logos"> '), n.s(n.f("socialSharing", e, t, 1), e, t, 0, 135, 749, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.s(n.f("facebook", e, t, 1), e, t, 0, 149, 311, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' <a class="fb-logo" title="Facebook" target="_blank" href="https://www.facebook.com/dialog/share?app_id='), n.b(n.v(n.f("fbappid", e, t, 0))), n.b("&display=popup&href="), n.b(n.v(n.f("fbsource", e, t, 0))), n.b('">Facebook</a> ')
                    }), e.pop()), n.b(" "), n.s(n.f("twitter", e, t, 1), e, t, 0, 337, 481, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' <a class="tw-logo" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url='), n.b(n.v(n.f("twtsource", e, t, 0))), n.b("&text="), n.b(n.v(n.f("titleEncoded", e, t, 0))), n.b('">Twitter</a> ')
                    }), e.pop()), n.b(" "), n.s(n.f("pinterest", e, t, 1), e, t, 0, 508, 734, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" "), n.s(n.f("thumbEncoded", e, t, 1), e, t, 0, 526, 716, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(' <a class="pin-logo" title="Pinterest" target="_blank" href="http://www.pinterest.com/pin/create/button/?url='), n.b(n.v(n.f("pinsource", e, t, 0))), n.b("&media="), n.b(n.v(n.f("thumbEncoded", e, t, 0))), n.b("&description="), n.b(n.v(n.f("titleEncoded", e, t, 0))), n.b('">Pinterest</a> ')
                        }), e.pop()), n.b(" ")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" </div> </div> ")
            }), e.pop()), i.b(' <div class="modal-info'), i.s(i.f("isSocial", e, t, 1), e, t, 0, 831, 838, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" hidden")
            }), e.pop()), i.b('"> <div class="enter-birthday"> <p class="modal-title">'), i.b(i.v(i.d("translations.enter", e, t, 0))), i.b("</p> <form>"), i.b(i.t(i.f("date_dropdown", e, t, 0))), i.b('</form> <p class="error alert hidden">'), i.b(i.v(i.d("translations.error", e, t, 0))), i.b('</p> <button class="submit-button button blue large">'), i.b(i.v(i.d("translations.submit", e, t, 0))), i.b('</button> <a class="modal-close button" data-title="close">'), i.b(i.v(i.d("translations.nevermind", e, t, 0))), i.b('</a> </div> <div class="too-young"> <p class="modal-title">'), i.b(i.v(i.d("translations.sorry", e, t, 0))), i.b("</p> <p>"), i.b(i.v(i.d("translations.too_young", e, t, 0))), i.b('</p> <a class="button-close button blue small">'), i.b(i.v(i.d("translations.close", e, t, 0))), i.b("</a> </div> </div> "), i.s(i.f("isSocial", e, t, 1), e, t, 0, 1395, 1596, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div id="share-links"> <p>'), n.b(n.v(n.d("translations.link", e, t, 0))), n.b('</p> <input type="text" value="'), n.b(n.v(n.f("source", e, t, 0))), n.b('"> '), n.s(n.f("embedCode", e, t, 1), e, t, 0, 1501, 1574, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" <p>"), n.b(n.v(n.d("translations.embed", e, t, 0))), n.b('</p> <input type="text" value="'), n.b(n.v(n.f("embedCode", e, t, 0))), n.b('"> ')
                }), e.pop()), n.b(" </div> ")
            }), e.pop()), i.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.date_dropdown", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<div class="date_dropdown"> <div class="input-group month"> <select name="month" required> <option value="" selected disabled>'), i.b(i.v(i.d("translations.month", e, t, 0))), i.b("</option> "), i.s(i.f("months", e, t, 1), e, t, 0, 169, 215, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <option value="'), n.b(n.v(n.f("value", e, t, 0))), n.b('">'), n.b(n.v(n.f("month", e, t, 0))), n.b("</option> ")
            }), e.pop()), i.b(' </select> </div> <div class="input-group day"> <select name="day" required> <option value="" selected disabled>'), i.b(i.v(i.d("translations.day", e, t, 0))), i.b("</option> "), i.s(i.f("days", e, t, 1), e, t, 0, 377, 415, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <option value="'), n.b(n.v(n.d(".", e, t, 0))), n.b('">'), n.b(n.v(n.d(".", e, t, 0))), n.b("</option> ")
            }), e.pop()), i.b(' </select> </div> <div class="input-group year"> <select name="year" required> <option value="" selected disabled>'), i.b(i.v(i.d("translations.year", e, t, 0))), i.b("</option> "), i.s(i.f("years", e, t, 1), e, t, 0, 579, 617, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <option value="'), n.b(n.v(n.d(".", e, t, 0))), n.b('">'), n.b(n.v(n.d(".", e, t, 0))), n.b("</option> ")
            }), e.pop()), i.b(" </select> </div> </div>"), i.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";

        function t(e) {
            var t = e.data("collection") ? e.data("source") + "?collection=" + e.data("collection") : e.data("source"),
                n = {
                    href: e.attr("href"),
                    source: t,
                    target: e.data("target"),
                    thumb: e.data("thumb"),
                    title: e.data("title"),
                    embedURL: e.data("embed-url"),
                    age: parseInt(e.data("age"), 10),
                    isSocial: e.hasClass("social-link-btn"),
                    moduleTitle: e.data("moduleTitle") || ""
                };
            u.AgeGate.triggerAgeGateProcess(n)
        }

        function n() {
            var e = u.guest.current,
                t = new Date(e ? e.profile.dateOfBirth : decodeURI(h.get(g)));
            return t.getFullYear() ? t : NaN
        }

        function i(t) {
            var n = new e.Date;
            return n.setFullYear(n.getFullYear() - t)
        }

        function r(e) {
            h.set(g, encodeURI(e), {
                domain: h.domain(),
                expires: 1
            })
        }

        function o(t, n) {
            n ? e.open(t, n) : e.location = t
        }

        function s(t) {
            var n = t.source || e.location.href,
                i = n.match(/\?.+/) ? "&" : "?",
                r = u.top.current,
                o = r.collection.social_share_networks,
                s = v.filter(v.keys(o), function(e) {
                    return o[e] === !0
                }),
                a = {
                    source: n,
                    fbsource: encodeURIComponent(n + i + "cmp=GSL|none|natural|fb||social-share-buttons"),
                    fbappid: b("meta[property='fb:app_id']").attr("content"),
                    twtsource: encodeURIComponent(n + i + "cmp=" + encodeURIComponent("GSL|none|natural|twt||social-share-buttons")),
                    pinsource: encodeURIComponent(n + i + "cmp=" + encodeURIComponent("GSL|none|natural|pin||social-share-buttons")),
                    socialSharing: v.pick(o, s)
                };
            return t.thumb && (a.thumbEncoded = encodeURIComponent(t.thumb)), t.text && (a.titleEncoded = encodeURIComponent(t.text)), t.embedURL && n && t.text && (a.embedCode = '<iframe width="560" height="315" src="' + t.embedURL + '"  frameborder="0" allowfullscreen scrolling="no"></iframe><br/><a href="' + n + '">' + t.text + "</a>"), a
        }

        function a(t) {
            e.open(t, "facebook", "height=440,width=750,resizable=1")
        }

        function c(t) {
            e.open(t, "pinterest", "height=440,width=750,resizable=1")
        }

        function l(t) {
            e.open(t, "twitter", "height=440,width=550,resizable=1")
        }
        e.Disney.AgeGate = e.Disney.AgeGate || {};
        var u = e.Disney,
            d = e.Grill,
            f = e.Whiskers,
            h = u.Cookie,
            p = e.Tracker,
            v = e._,
            b = e.jQuery,
            g = "age-gate-user";
        d.AgeGateModalView = d.ModalView.extend({
            events: {
                "click .submit-button": "checkAge",
                "click .button-close": "hide",
                "age-pass": function() {
                    o(this.options.href, this.options.target), this.options.target.length && this.hide()
                },
                hide: "onHide"
            },
            initialize: function(e) {
                this.options = e || {};
                var t = {
                        loading: "Loading",
                        enter: "Enter your birthday to continue:",
                        submit: "Submit",
                        close: "Close",
                        error: "Please fill out all fields",
                        sorry: "Sorry",
                        too_young: "You are not eligible.",
                        link: "Link",
                        share_this_with_your_friends: "Share this with your friends",
                        month: "Month",
                        day: "Day",
                        year: "Year",
                        embed: "Embed"
                    },
                    n = v.defaults(this.options.translations, t);
                v.extend(this.options, {
                    date_dropdown: u.FormElements.dateDropdown.renderTemplate({
                        translations: n
                    }),
                    translations: n
                })
            },
            render: function() {
                return this.options.template.render(this.options)
            },
            ready: function() {
                this.options.confirmedTooYoung && this.tooYoungText()
            },
            onHide: function() {
                this.remove()
            },
            checkAge: function() {
                var t = this.$(".date_dropdown"),
                    n = t.find(".month option:selected").val(),
                    o = t.find(".day option:selected").val(),
                    s = t.find(".year option:selected").val(),
                    a = new e.Date(s, n, o);
                "" === n || "" === o || "" === s ? this.showError() : a < i(this.options.gatedAge) ? (r(a), this.$el.trigger("age-pass")) : (r(a), this.tooYoungText())
            },
            showError: function() {
                this.$(".error").removeClass("hidden")
            },
            tooYoungText: function() {
                this.$(".modal-info").show().find(".enter-birthday").hide(), this.$(".too-young").delay(100).fadeIn()
            }
        }), d.SocialAgeGate = d.AgeGateModalView.extend({
            events: function() {
                return v.extend({}, d.AgeGateModalView.prototype.events, {
                    "age-pass": "doShare",
                    "click #social-logos > a": function(e) {
                        e.preventDefault(), this.$clickedEl = b(e.currentTarget), this.options.confirmedOldEnough ? this.doShare() : this.options.confirmedTooYoung ? (this.$("#social-buttons").hide(), this.tooYoungText()) : this.revealForm()
                    },
                    "click input[type=text], textarea": function(e) {
                        b(e.currentTarget).trigger("select")
                    }
                })
            },
            ready: function() {
                p && p.event({
                    eventCategory: "socialelement",
                    action: "share",
                    label: e.location.href
                })
            },
            revealForm: function() {
                this.$("#social-buttons").addClass("hidden"), this.$(".modal-info").removeClass("hidden copy-link")
            },
            doShare: function() {
                var e, t = this.options.moduleTitle;
                this.$clickedEl.hasClass("fb-logo") ? (e = "facebook", a(this.$clickedEl.attr("href"))) : this.$clickedEl.hasClass("pin-logo") ? (e = "pinterest", c(this.$clickedEl.attr("href"))) : this.$clickedEl.hasClass("tw-logo") && (e = "twitter", l(this.$clickedEl.attr("href"))), t && e && p && p.event({
                    engagementType: "socialelement_share_complete",
                    engagementMeta: t,
                    leadType: e
                }), this.hide()
            }
        }), d.PortalAgeGate = d.AgeGateModalView.extend({
            events: function() {
                return v.extend({}, d.AgeGateModalView.prototype.events, {
                    "age-pass": function() {
                        this.hide()
                    }
                })
            }
        }), e.Disney.AgeGate.triggerAgeGateProcess = function(e) {
            var t, r = u.top.current,
                a = r.collection && r.collection.age_gate_text || {},
                c = n(),
                l = r.collection && r.collection.social_share_min_age,
                h = e.age || l || 13,
                p = {
                    name: "age-gate",
                    template: f.partials.age_gate_modal,
                    gatedAge: h,
                    translations: a,
                    confirmedTooYoung: c > i(h),
                    confirmedOldEnough: c < i(h)
                };
            if (v.extend(p, e), p.isSocial) {
                var b, g = {
                    source: p.source,
                    thumb: p.thumb,
                    text: p.title,
                    embedURL: p.embedURL
                };
                if (b = s(g), v.extend(p, b), t = new d.SocialAgeGate(p), t.show({
                        linkEl: p.linkEl
                    }), p.socialDirectLink)
                    if ("copy_link" === p.socialDirectLink) t.$el.addClass("copy-link");
                    else {
                        var m = t.$el.find('a[title="' + p.socialDirectLink + '"]');
                        m.length > 0 && m.trigger("click")
                    }
            } else p.confirmedOldEnough ? o(p.href, p.target) : (t = new d.AgeGateModalView(p), t.show())
        }, e.Disney.AgeGate.triggerSocialAgeGate = function(e) {
            var t = e || {};
            t.isSocial = !0, this.triggerAgeGateProcess(t)
        }, b(function() {
            b("body").on("click", "a[data-age], .social-link-btn", function(e) {
                e.preventDefault(), t(b(this))
            })
        })
    }(this),
    function(e) {
        "use strict";

        function t(n, i, o) {
            var s = 5,
                a = n.filter(function() {
                    return r(this).data("lazy-done") !== r(this).data("lazy-total")
                }).length,
                c = 0 === a;
            o = o || 0, o >= s || c ? i() : e.setTimeout(t, 1e3, n, i, o + 1)
        }

        function n(e) {
            0 === e.indexOf("#") && (e = e.substring(1));
            var n = r('section[data-anchor-name="' + e + '"]'),
                i = n.prevAll("section");
            t(i, function() {
                n.length && (r("#goc-body").scrollTop(0), r("html, body").animate({
                    scrollTop: n.offset().top
                }, 800))
            })
        }
        var i = e.Disney,
            r = e.jQuery,
            o = e.location.hash;
        r(function() {
            i.top.on("ready", function() {
                "" !== o && n(o), r("#burger").on("click", "a[data-anchor]", function(e) {
                    var t = r(e.currentTarget),
                        i = t.data("anchor");
                    i && n(i)
                })
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t, n = e.Disney,
            i = e.window,
            r = e.GOC,
            o = e.$,
            s = e.DossierProxy = {
                start: function() {
                    o("html").addClass("wait-cursor");
                    var e = n.guest;
                    e.refresh().then(function(e) {
                        e && e.token && e.token.access_token && (t = e.token.access_token, i.addEventListener("message", s.messageReceived, !1), s.loadDossier())
                    }, function() {
                        o("html").removeClass("wait-cursor"), e.login()
                    })
                },
                loadDossier: function() {
                    o.getScript(n.dossierBase + "/js/dossier.js")
                },
                messageReceived: function(e) {
                    o("html").removeClass("wait-cursor"), "dossier-ready" === e.data && (s.launchDossier(), this.removeEventListener("message", s.messageReceived, !1))
                },
                launchDossier: function() {
                    Dossier.open(t, "", n.dossierBase)
                }
            };
        r.queue.push(["on", "click:my_interests", function() {
            e.DossierProxy.start()
        }])
    }(this), Whiskers("modals.quiz", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<div class="modal-content '), i.b(i.v(i.f("quiz_type", e, t, 0))), i.b("-type "), i.s(i.f("finished", e, t, 1), e, t, 0, 58, 66, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b("finished")
            }), e.pop()), i.b(" "), i.s(i.f("hide_end_card", e, t, 1), e, t, 0, 98, 111, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b("hide-end-card")
            }), e.pop()), i.b(" "), i.s(i.f("is_last_question", e, t, 1), e, t, 0, 151, 164, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b("last-question")
            }), e.pop()), i.b('" > <div class="modal-image" ></div> '), i.s(i.f("current_question", e, t, 1), e, t, 0, 243, 1224, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" <div class='question-container'> <div class='current-count'> <span class=\"counter\">"), n.b(n.v(n.f("current_count", e, t, 0))), n.b("</span> &nbsp; <span>"), n.b(n.v(n.d("translations.of", e, t, 0))), n.b("</span> &nbsp; <span>"), n.b(n.v(n.f("total_questions", e, t, 0))), n.b("</span> </div> <div class='question-text'>"), n.b(n.v(n.f("question", e, t, 0))), n.b("</div> "), n.s(n.f("rich_text_description", e, t, 1), e, t, 0, 511, 581, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <div class="rich-text-description">'), n.b(n.t(n.f("rich_text_description", e, t, 0))), n.b("</div> ")
                }), e.pop()), n.b(' </div> <div class="answer-container cols-2"> '), n.s(n.f("answers", e, t, 1), e, t, 0, 665, 1204, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <div class="answer col ada-el-focus '), n.s(n.f("correct", e, t, 1), e, t, 0, 714, 721, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("correct")
                    }), e.pop()), n.b('" tabindex="0"> '), n.s(n.f("id", e, t, 1), e, t, 0, 756, 1189, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" <input id='"), n.b(n.v(n.f("id", e, t, 0))), n.b("' name='"), n.b(n.v(n.f("name", e, t, 0))), n.b("' type='radio' class='vis-hidden toggle "), n.s(n.f("correct", e, t, 1), e, t, 0, 842, 849, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("correct")
                        }), e.pop()), n.b(" "), n.s(n.f("unselectable", e, t, 1), e, t, 0, 879, 891, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("unselectable")
                        }), e.pop()), n.b("' data-answer-tag='"), n.b(n.v(n.f("answer_tag", e, t, 0))), n.b("' data-personality-code='"), n.b(n.v(n.f("personality_code", e, t, 0))), n.b("' data-question-tag='"), n.b(n.v(n.f("question_tag", e, t, 0))), n.b("' tabindex=\"-1\"></input> <label for='"), n.b(n.v(n.f("id", e, t, 0))), n.b("' class= 'answer-label "), n.s(n.d("image.base", e, t, 1), e, t, 0, 1104, 1113, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("has_image")
                        }), e.pop()), n.b("'><span>"), n.b(n.v(n.f("text", e, t, 0))), n.b("</span></label> <div class=check-mark></div> ")
                    }), e.pop()), n.b(" </div> ")
                }), e.pop()), n.b(" </div> ")
            }), e.pop()), i.b(" "), i.s(i.f("personality_type", e, t, 1), e, t, 0, 1267, 1392, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(' <div class="final-message"> <div class="title">'), n.b(n.v(n.f("title", e, t, 0))), n.b('</div> <div class="final-message-text">'), n.b(n.v(n.f("description", e, t, 0))), n.b("</div> </div> ")
            }), e.pop()), i.b(" "), i.s(i.f("personality_type", e, t, 1), e, t, 1, 0, 0, "") || (i.b(' <div class="final-message"> <div class="title">'), i.b(i.v(i.d("translations.quiz_result_title", e, t, 0))), i.b('</div> <div class="count-result"> <div class="count correct"> <div class="heading">'), i.b(i.v(i.d("translations.correct", e, t, 0))), i.b('</div> <div class="number">'), i.b(i.v(i.f("correct_count", e, t, 0))), i.b('</div> </div> <div class="count incorrect"> <div class="heading">'), i.b(i.v(i.d("translations.incorrect", e, t, 0))), i.b('</div> <div class="number">'), i.b(i.v(i.f("incorrect_count", e, t, 0))), i.b('</div> </div> </div> <div class="final-message-text">'), i.b(i.v(i.f("final_message", e, t, 0))), i.b("</div> </div> ")), i.b(' <div class="modal-buttons"> <button class="button blue large ada-el-focus continue-button">'), i.b(i.v(i.d("translations.continue", e, t, 0))), i.b('</button> <button class="button blue large ada-el-focus hide-end-card-continue-button" disabled>'), i.b(i.v(i.d("translations.hide_end_card_continue", e, t, 0))), i.b('</button> <button class="button blue large ada-el-focus next-question-button" disabled>'), i.b(i.v(i.d("translations.next_question", e, t, 0))), i.b("</button> "), i.s(i.f("cds", e, t, 1), e, t, 1, 0, 0, "") || i.s(i.f("allow_social_sharing", e, t, 1), e, t, 0, 2322, 2346, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.rp("<socialLinkPartial0", e, t, "")), n.b(" ")
            }), e.pop()), i.b(' </div> </div> <style type="text/css"> .modal-image { background-image: url('), i.b(i.v(i.d("default_image.base", e, t, 0))), i.b("); } "), i.s(i.f("personality_type", e, t, 1), e, t, 0, 2503, 2570, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" .finished .modal-image { background-image: url("), n.b(n.v(n.d("image.base", e, t, 0))), n.b("); } ")
            }), e.pop()), i.b(" "), i.s(i.f("current_question", e, t, 1), e, t, 0, 2613, 2831, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.d("question_image.base", e, t, 1), e, t, 0, 2638, 2704, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" .modal-image { background-image: url("), n.b(n.v(n.d("question_image.base", e, t, 0))), n.b("); } ")
                }), e.pop()), n.b(" "), n.s(n.f("answers", e, t, 1), e, t, 0, 2741, 2818, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.s(n.f("image", e, t, 1), e, t, 0, 2752, 2807, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" label[for="), n.b(n.v(n.f("id", e, t, 0))), n.b("] { background-image: url("), n.b(n.v(n.f("base", e, t, 0))), n.b(") } ")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" ")
            }), e.pop()), i.b(" </style>"), i.fl()
        },
        partials: {
            "<socialLinkPartial0": {
                name: "socialLinkPartial",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.social_btn", {
        code: function(e, t, n) {
            "use strict";
            var i = this;
            return i.b(n = n || ""), i.b('<button type="button" class="social-link-btn ada-el-focus'),
                i.s(i.f("social_btn_text_lightness", e, t, 1), e, t, 0, 87, 122, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" text-"), n.b(n.v(n.f("social_btn_text_lightness", e, t, 0)))
                }), e.pop()), i.b('" data-source="'), i.s(i.f("shareOverrides", e, t, 1), e, t, 0, 186, 209, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.d("shareOverrides.href", e, t, 0)))
                }), e.pop()), i.s(i.f("shareOverrides", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.v(i.f("href", e, t, 0))), i.b('" '), i.s(i.f("content_collection_id", e, t, 1), e, t, 0, 302, 345, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('data-collection="'), n.b(n.v(n.f("content_collection_id", e, t, 0))), n.b('"')
                }), e.pop()), i.b(' data-thumb="'), i.b(i.v(i.f("thumb", e, t, 0))), i.b('" data-title="'), i.s(i.f("shareOverrides", e, t, 1), e, t, 0, 426, 450, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.d("shareOverrides.title", e, t, 0)))
                }), e.pop()), i.s(i.f("shareOverrides", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.v(i.f("title", e, t, 0))), i.b('" '), i.s(i.f("embedURL", e, t, 1), e, t, 0, 531, 562, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' data-embed-url="'), n.b(n.v(n.f("embedURL", e, t, 0))), n.b('" ')
                }), e.pop()), i.b(" "), i.b(' id="share-btn-'), i.b(i.v(i.f("uid", e, t, 0))), i.b('" aria-label="'), i.b(i.v(i.d("translations.share", e, t, 0))), i.b('"> <span class="icon-social"></span> <span class="social-share-title">'), i.b(i.v(i.d("translations.share", e, t, 0))), i.b("</span> </button> "), i.s(i.f("showMoreLess", e, t, 1), e, t, 0, 836, 909, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('<a class="show-more-mobile visible"></a> <a class="show-less-mobile"></a>')
                }), e.pop()), i.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.document,
            i = e.Tracker;
        t(function() {
            var r = e.location;
            t(n).on("click", ".social-dropdown-btn .label", function() {
                var n = t(this).closest(".social-dropdown-btn"),
                    o = function(e) {
                        t(e).removeClass("active"), t("body").off("click.watch"), t(e).hasClass("active") && (t(e).removeClass("active"), s(e))
                    },
                    s = function(n) {
                        i && i.event({
                            eventCategory: "socialelement",
                            action: "embed",
                            label: e.location.href
                        }), t(n).addClass("active"), t("body").on("click.watch", function(e) {
                            var i = t(e.target);
                            0 === i.closest(".dropdown-panel").length && 0 === i.closest(".social-dropdown-btn").length && o(n)
                        })
                    };
                n.hasClass("active") ? o(n) : (t.each(t(".social-dropdown-btn.active"), function(e, t) {
                    o(t)
                }), r = e.location, s(n))
            });
            var o = t(".dropdown-panel");
            t(n).on("click", o, function() {
                t(this).find(".text-output").trigger("select")
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Grill,
            n = e.Tracker,
            i = e.$,
            r = e.Whiskers,
            o = e._;
        t.QuizModalView = t.ModalView.extend({
            current_question: 0,
            correct_count: 0,
            personality_count: {},
            guest_answers: [],
            initialize: function(e) {
                this.options = e || {}, this.trackQuizStart();
                var t = this.options.translations,
                    n = { of: "of",
                        next_question: "Next Question",
                        "continue": "Continue",
                        hide_end_card_continue: "Continue",
                        correct: "CORRECT",
                        incorrect: "WRONG",
                        quiz_result_title: "Your Quiz Results"
                    };
                o.defaults(t, n), o.extend(this, {
                    questions: this.options.questions,
                    quiz_type: this.options.quiz_type || "regular",
                    personality_types: this.options.personality_types || {},
                    translations: t
                })
            },
            reset: function() {
                this.current_question = 0, this.correct_count = 0, this.personality_count = {}, this.guest_answers = []
            },
            render: function() {
                var e = {
                    current_question: this.questions[this.current_question],
                    correct_count: this.correct_count,
                    current_count: this.current_question + 1,
                    total_questions: this.questions.length,
                    incorrect_count: this.questions.length - this.correct_count,
                    title: this.options.title,
                    default_image: this.options.default_image,
                    final_message: this.options.final_message,
                    translations: this.translations,
                    allow_social_sharing: this.options.allow_social_sharing,
                    hide_end_card: this.options.hide_end_card,
                    is_last_question: this.isLastQuestion(),
                    quiz_type: this.quiz_type,
                    personality_type: this.personalityWinner(),
                    finished: this.isQuizFinished()
                };
                return this.options.template.render(e, {
                    socialLinkPartial: r.partials.social_btn
                })
            },
            events: {
                hide: "onHide",
                "change .toggle": function() {
                    this.answerToggled()
                },
                "click .continue-button": function() {
                    this.hide()
                },
                "click .hide-end-card-continue-button": function() {
                    this.hideWithNoEndCard()
                },
                "click .next-question-button": function() {
                    this.nextStep()
                },
                "keydown div.answer": function(e) {
                    this.answerToggledAccessibility(e)
                }
            },
            onHide: function() {
                this.trackQuizEnd(), this.remove()
            },
            nextStep: function() {
                if (this.options.quiz_show_feedback) {
                    var t = this;
                    this.$("input.toggle").addClass("answer-mode"), i(".next-question-button").attr("disabled", !0), e.setTimeout(function() {
                        t.nextQuestion()
                    }, 500)
                } else this.nextQuestion()
            },
            hideWithNoEndCard: function() {
                if (this.trackAnswer(), this.checkCurrentQuestion(), this.options.quiz_show_feedback) {
                    var t = this;
                    this.$("input.toggle").addClass("answer-mode"), e.setTimeout(function() {
                        t.hide()
                    }, 500)
                } else this.hide()
            },
            answerToggled: function() {
                this.setNextButtonEnable()
            },
            answerToggledAccessibility: function(e) {
                13 === e.keyCode && i(e.target).find("label").click()
            },
            setNextButtonEnable: function() {
                var e = i("input.toggle"),
                    t = !e.is(":checked");
                i(".next-question-button").attr("disabled", t), i(".hide-end-card-continue-button").attr("disabled", t)
            },
            showQuiz: function() {
                this.reset(), this.show()
            },
            nextQuestion: function() {
                this.trackAnswer(), this.current_question++, this.checkCurrentQuestion(), this.renderInnerHtml(), this.setNextQuestionFocus()
            },
            setNextQuestionFocus: function() {
                i(".answer").first() ? i(".answer").first().trigger("focus") : i(".continue-button") && i(".continue-button").trigger("focus")
            },
            isLastQuestion: function() {
                return this.current_question > this.questions.length - 2
            },
            isQuizFinished: function() {
                return this.current_question > this.questions.length - 1
            },
            trackQuizStart: function() {
                n && n.event({
                    engagementType: "quiz_start",
                    engagementMeta: this.options.group,
                    leadType: this.options.quiz_id
                })
            },
            trackAnswer: function() {
                var e = this.$("input.toggle:checked"),
                    t = "quiz_" + e.data("question-tag") + "_" + (this.current_question + 1) + "-" + e.data("answer-tag") + "_select-answer";
                n && n.event({
                    engagementType: t
                })
            },
            trackQuizEnd: function() {
                n && n.event({
                    engagementType: "quiz_complete",
                    engagementMeta: this.options.group,
                    leadType: this.options.quiz_id
                })
            },
            renderInnerHtml: function() {
                this.el.innerHTML = this.render()
            },
            score: function() {
                return 0 === this.questions.length ? 0 : Math.round(this.correct_count / this.questions.length * 100)
            },
            personalityWinner: function() {
                var e, t = 0,
                    n = this.personality_count;
                return o.each(Object.keys(n), function(i) {
                    n[i] > t && (e = i, t = n[i])
                }), this.personality_types[e]
            },
            checkCurrentQuestion: function() {
                var e = this.$("input.toggle:not(:checked):not(.correct), input.toggle.correct:checked").length,
                    t = 4 === e;
                t && this.correct_count++;
                var n = this.$("input.toggle:checked"),
                    i = n.data("personality-code");
                i && (this.personality_count[i] = (this.personality_count[i] || 0) + 1)
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.jQuery,
            i = e._,
            r = e.Whiskers,
            o = e.Grill,
            s = e.DossierProxy,
            a = {
                launchDossier: function() {
                    s && s.start()
                },
                launchDisid: function(e, n) {
                    t.top && (t.guest.current ? t.guest.updateProfile() : t.guest.login(e, n))
                },
                launchQuiz: function(e, t) {
                    var n = e.config_options || {},
                        i = new o.QuizModalView({
                            template: r.modals.quiz,
                            group: e.group,
                            default_image: n.quiz_default_image,
                            quiz_show_feedback: n.quiz_show_feedback,
                            final_message: n.quiz_endcard_message,
                            hide_end_card: n.quiz_hide_end_card,
                            allow_social_sharing: n.quiz_allow_social_sharing,
                            quiz_type: n.quiz_type,
                            questions: e.quiz_questions,
                            personality_types: e.personality_types,
                            title: e.title,
                            translations: t,
                            quiz_id: e.id,
                            name: "quiz",
                            linkEl: [{
                                id: "quiz-" + e.id
                            }]
                        });
                    i.showQuiz()
                },
                handleEvent: function(e) {
                    var r = n(e.currentTarget),
                        o = r.closest("section.module").attr("id").substring(4),
                        s = i.find(t.globalStack, function(e) {
                            return e.ref === o
                        }),
                        c = s.data,
                        l = s.translations,
                        u = r.data("event-link").toLowerCase(),
                        d = r.data("core-id"),
                        f = r.data("nrt-promotion-id"),
                        h = i.find(c, function(e) {
                            return e.id === d
                        });
                    a.chooseEvent(u, h, l, e, f)
                },
                chooseEvent: function(e, t, i, r, o) {
                    switch (e) {
                        case "profile":
                            this.launchDisid();
                            break;
                        case "register":
                            this.launchDisid("register");
                            break;
                        case "newsletter":
                            o && this.launchDisid("newsletter", o);
                            break;
                        case "interests":
                            this.launchDossier();
                            break;
                        case "quiz":
                            var s = n(r.target),
                                a = s.data("core-id");
                            s.attr("id", "quiz-" + a), this.launchQuiz(t, i)
                    }
                }
            };
        n(function() {
            n("body").on("click", "[data-event-link]", function(e) {
                e.preventDefault(), a.handleEvent(e)
            }), n("body").on("keydown", "[data-event-link]", function(e) {
                13 === e.keyCode && (e.preventDefault(), a.handleEvent(e))
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.document,
            i = "ada-keyboard-focus",
            r = t("html");
        t(n).on("mousedown.keyboardFocus", function() {
            r.removeClass(i)
        }).on("keydown.keyboardFocus", function(e) {
            9 === e.keyCode && r.addClass(i)
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = t.Style.breakpoints,
            i = e.Backbone,
            r = e._,
            o = t.ForegroundHelper = t.ForegroundHelper || {};
        r.extend(o, {
            image: function(t) {
                var r = i.Resize.width() >= n.midHigh,
                    o = e.devicePixelRatio > 1.5,
                    s = (t || {}).foreground_image || {},
                    a = s.retina_url || s.url,
                    c = o ? a : s.url,
                    l = s.mobile_retina_url || s.mobile_url,
                    u = o ? l : s.mobile_url;
                return r ? c : u
            },
            processRichImageData: function(e) {
                var t = e.model.get("style_options"),
                    n = t && t.images && t.images.foreground_image,
                    i = n && n.alt_text,
                    r = t && t.image_assets,
                    o = r && r.foreground_image,
                    s = r && r.foreground_image_mobile,
                    a = {
                        mobile: s || o,
                        desktop: o
                    },
                    c = {
                        image_config: a,
                        alt_text: i
                    };
                return c
            },
            getRichImageData: function(e) {
                var t = i.Resize.width() >= n.midHigh,
                    r = e.model.get("image_config"),
                    o = t ? r.desktop : r.mobile;
                return o
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e._,
            i = e.jQuery;
        t.initEmptyGuestConsumer = function() {
            var e = {};
            return n.each(t.GuestContext.actions, function(t) {
                e[t] = function() {
                    return i.Deferred()
                }
            }), new t.GuestContext(e)
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = t.placeSwap = function(e, t) {
                return t ? (t.render(), void e.$("#" + t.cid).replaceWith(t.el)) : function(t) {
                    t && n(e, t)
                }
            };
        t.placeHtml = function(e) {
            return e ? '<div id="' + e.cid + '"></div>' : null
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            n = e.jQuery,
            i = n.isFunction,
            r = function(t) {
                var n = e.onerror,
                    i = e.console;
                i && i.error && i.error(t.stack || t.toString()), n && n(t.toString())
            };
        n(function() {
            t.top.on("ready", function(t) {
                var n = e.Tracker,
                    o = {};
                if (i(t.cto) && (o = t.cto()), o && o.account) try {
                    n.resetObj(), n.track(o)
                } catch (e) {
                    r(e)
                }
            })
        })
    }(this),
    function(e) {
        "use strict";

        function t(e) {
            var t = e.closest(".module"),
                n = t.data("title"),
                i = t.find(".module-title-logo img"),
                o = i.length > 0 && u(i.attr("alt")),
                s = e.closest("[data-cto-title]", t).data("cto-title"),
                a = e.closest("[data-cto-category]", t).data("cto-category"),
                c = t.data("link-tracking-config-keys"),
                d = {};
            return n ? (d.link_module_title = u(n), o && (d.link_module_title += " " + o)) : o && (d.link_module_title = o), s && (d.link_internal_title = u(s)), a && (d.link_category = u(a)), c && c.length && c.forEach(function(e) {
                var n = u(t.data(e));
                n && (d[e] = n)
            }), r.extend(d, l), d
        }
        var n = e.Tracker,
            i = e.jQuery,
            r = e._,
            o = "#burger > [data-module]",
            s = ".slides li",
            a = ".entity,.item,.product:not(.bound)",
            c = a + "," + s,
            l = {},
            u = function(e) {
                return null != e && (e = i.trim(e).replace(/[^a-z0-9_:, \-]/gi, "").replace(/\s+/g, " ")), e
            },
            d = function(e) {
                return e.split("?")[0]
            },
            f = function(e, t, n) {
                var r = e.closest(t);
                return r.length ? i(t, n).index(r) : -1
            },
            h = function(e, t, n, c) {
                var d = [],
                    h = i(o).index(t),
                    p = f(e, a, t),
                    v = f(e, s, t),
                    b = f(e, ".button", e.closest(s + "," + o)),
                    g = f(e, ".all", t),
                    m = f(e, ".playlist-link", t),
                    y = t.find("h1,h2,h3,h4,h5,h6").eq(0),
                    _ = !y.closest(".item").length && y.text(),
                    k = u(_ && i.trim(_) || e.attr("title") || e.data("title") || e.attr("alt"));
                0 === h && k && k.indexOf("hero") > -1 && (k = e.closest(s).find(".background img[alt]").attr("alt") || k), d.push(k, "mod" + (h + 1)), l.link_module_position = r.last(d), p >= 0 ? d.push("item" + (p + 1)) : v >= 0 && (d.push("slide" + (v + 1)), n = "full");
                var w = p >= 0 ? p : v;
                return w >= 0 && (l.link_position = "item" + (w + 1)), c && (d.push(c), l.link_conversion_type = c), b >= 0 ? n = "button" + (b + 1) : m >= 0 ? n = "link" + (m + 1) : f(e, ".poster", t) >= 0 ? n = "poster" : f(e, ".gallery-item", t) >= 0 && (n = null), n && d.push(n), g >= 0 && d.push("viewall"), d.join("/")
            },
            p = function(e, t, n) {
                var i = f(e, ".suggested", t),
                    r = f(e, ".card .next", t);
                return i >= 0 ? "card/suggested/p" + i + "/" + n : r >= 0 ? "card/next/p" + r + "/" + n : f(e, "#next_container", t) >= 0 ? ("link" === n && (n = "details"), "upnext/" + n) : h(e, t, n)
            },
            v = function(e, t, n) {
                var r = u(i.trim(t.find("h1,h2,h3,h4,h5,h6").eq(0).text())),
                    s = i(o).index(t),
                    a = f(e, ".modal-window .arrow-next", t),
                    c = f(e, ".modal-window .arrow-prev", t),
                    d = f(e, ".modal-window .modal-close", t);
                if (a >= 0 || c >= 0 || d >= 0) {
                    var p = e.data("viewtype"),
                        v = parseInt(e.data("currentitem"), 10) + 1,
                        b = "ad" === p ? "ad" : "item" + v,
                        g = r + "/mod" + (s + 1) + "/" + b + "/modal";
                    return l.link_module_position = "mod" + (s + 1), g
                }
                return h(e, t, n)
            },
            b = "#burger a[href], #burger .button, #burger .clicon, #burger .launches-modal, #burger .preview-item";
        i("body").on("click", b, function(e) {
            g(e, this)
        }), i("body").on("keydown", b, function(e) {
            13 !== e.keyCode && 32 !== e.keyCode || g(e, this)
        });
        var g = function(s, a) {
            var b = i(a),
                g = i(s.target),
                m = g.is("img"),
                y = b.closest(o),
                _ = u(y.data("module")),
                k = {};
            l = {}, l.link_module_type = _;
            var w, x = u(b.closest("[data-title]").data("title") || m && g.attr("alt") || b.text()),
                E = m ? "thumb" : "link",
                T = u(b.closest("[data-convert]").data("convert")),
                S = u(b.closest("[data-retailer]").data("retailer")),
                C = "link",
                A = u(g.data("title") || m && g.attr("alt") || g.text()),
                M = u(b.closest("[data-title]").data("title")),
                D = b.closest("[data-action_name]").data("action_name");
            if (m) C = g.hasClass("logo-title") || f(g, ".foreground-image", y) >= 0 ? "foreground-image" : f(g, ".background-image", y) >= 0 ? "background-image" : "thumb", g.attr("src") && (l.thumbnailPath = d(g.attr("src")));
            else {
                var L = f(g, ".link, .cta-link", g.closest(c + "," + o)),
                    z = f(g, ".button", g.closest(c + "," + o)),
                    j = -1;
                z >= 0 ? (C = "button", j = z) : L >= 0 && (C = "cta-link", j = L), j >= 0 && (l.link_cta_position = "cta" + (j + 1))
            }
            var I = b.parentsUntil(".module", "[data-link_cta_position]").attr("data-link_cta_position");
            void 0 !== I && (l.link_cta_position = I);
            var P = b.parentsUntil(".module", "[data-link_cta_index]").attr("data-link_cta_index");
            if (void 0 !== P && (l.link_cta_index = P), l.link_target_type = C, M && (l.link_item_title = M), T && (l.link_conversion_type = T), S && (l.link_retailer = S), A && (l.link_text = A), D && (l.action_name = D), "buy" === T && (x = T + "_" + x, S && (x = S + "/" + x, l.link_retailer = S)), "search" !== _ && "voting_multi" !== _ && "radio_player" !== _ && y.length) {
                var R = "";
                if (w = ("watch" === _ ? p : "image_gallery" === _ ? v : h)(b, y, E, T), "songs" === _) {
                    if ("like-icon clicon ada-el-focus clicked" === a.className) R = "/like-song", x = "like-song/" + b.data("likeinfo").replace(/\s+/g, "_");
                    else if ("like-icon clicon ada-el-focus" === a.className) return;
                    if ("buy_song" === T) {
                        var O = i(s.currentTarget),
                            $ = O.closest(".icon-container").data("buyaylitics").replace(/\s+/g, "_");
                        w = w.replace(/buy_song/, "cart"), x = $, O.data("purchase") && (x = O.data("retailer") + "/" + $)
                    }
                }
                var N = function(t) {
                    var r = e.cto.pageName,
                        s = i(o).index(y),
                        a = r + "_" + _ + "_mod" + s + "_" + t;
                    n.event({
                        engagementType: a
                    })
                };
                if (b.hasClass("show_more")) N("showmore");
                else if (b.data("track-event")) {
                    var U = b.data("track-event");
                    N(U)
                } else {
                    var B = {
                        linkName: _ + "/" + w + "/" + x,
                        linkPosition: _ + "/" + w + R,
                        href: b.attr("href")
                    };
                    if ("tabbed_content" === _) {
                        var q = b.closest("[data-cid]").data("cid"),
                            F = b.closest(".tabs-container"),
                            H = F.find(".tab").get(),
                            V = F.find('.tab[data-cid="' + q + '"]').get()[0],
                            Q = H.indexOf(V),
                            G = b.closest("[data-cto-title]").data("cto-title");
                        B.action_parent_item_title = G, B.action_parent_position = String(Q)
                    }
                    k = t(b), r.extend(B, k), n.link(B)
                }
            }
        }
    }(this),
    function(e, t, n) {
        "use strict";
        var i = "swipeasaurus",
            r = "." + i,
            o = e._,
            s = {
                effect: "slide",
                loop: !0,
                index: 0,
                speed: 300,
                delay: 0,
                rtl: !1,
                prevLabel: "Previous",
                nextLabel: "Next"
            },
            a = Math.abs,
            c = Math.min,
            l = e.setTimeout,
            u = e.clearTimeout,
            d = ["Webkit", "Moz", "ms", "O"],
            f = e.document.documentElement,
            h = function(e) {
                var t, i = 0;
                if (f.style[e] !== n) return e;
                for (t = e.charAt(0).toUpperCase() + e.substr(1); i < d.length; i++)
                    if (f.style[d[i] + t] !== n) return d[i] + t
            },
            p = !!h("perspective"),
            v = !!h("transition"),
            b = !!h("transform"),
            g = (h("transform") || "transform").replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-"),
            m = function() {
                return (new Date).getTime()
            },
            y = function(e, n) {
                return t("<button/>", {
                    "class": e + " ada-el-focus",
                    title: n,
                    role: "button",
                    onclick: ""
                })
            },
            _ = function(e, n) {
                return t("<span/>", {
                    "class": e,
                    title: n,
                    role: "button",
                    onclick: ""
                })
            },
            k = {
                slide: {
                    c: {
                        overflow: "hidden"
                    },
                    s: {
                        opacity: 1,
                        transitionProperty: g + ", visibility"
                    },
                    a: v && b ? function(e, t, n) {
                        n = n ? n + "ms" : "0ms";
                        var i = a(t) < (this.visibility_offset || 2),
                            r = this.rtl ? -100 : 100;
                        e.css({
                            transitionDuration: n + ", 0ms",
                            transitionDelay: "0ms, " + (i ? "0ms" : n),
                            visibility: i ? "visible" : "hidden",
                            transform: p ? "translate3d(" + t * r + "%,0,0)" : "translateX(" + t * r + "%)"
                        })
                    } : function(e, t, n) {
                        var i = this,
                            r = i.rtl ? "right" : "left",
                            o = function() {
                                e.css(r, 100 * (t * (1 - i._r - i._l) + i._l) + "%")
                            },
                            s = e.width();
                        if (n && s) {
                            var a = {};
                            a[r] = t * s + "px", e.stop().css(r, e.position()[r]).animate(a, n, o)
                        } else o()
                    }
                },
                fade: {
                    c: {
                        overflow: ""
                    },
                    s: {
                        transform: "translate3d(0,0,0)",
                        transitionProperty: "opacity, visibility"
                    },
                    a: v ? function(e, t, n) {
                        n = n ? n + "ms" : "0";
                        var i = a(t),
                            r = i < 1,
                            o = i < .5;
                        e.css({
                            transitionDuration: n + ", 0ms",
                            transitionDelay: "0ms, " + (r ? "0ms" : n),
                            visibility: r ? "visible" : "hidden",
                            opacity: 1 - c(1, i),
                            zIndex: o ? 1 : 0
                        })
                    } : function(e, t, n) {
                        var i = a(t),
                            r = i < 1;
                        r && e.css({
                            visibility: "visible"
                        }), e.stop().animate({
                            opacity: 1 - c(1, i)
                        }, n, function() {
                            r || e.css({
                                visibility: "hidden"
                            })
                        })
                    }
                }
            },
            w = {
                scroll: function() {
                    t(this.$el).scrollLeft(this.rtl ? this.length * this.$el.width() : 0)
                }
            },
            x = function(e, t) {
                var n = e[t] || e.peek;
                return n > 0 && n < .5 ? n : 0
            },
            E = function(e, n) {
                var i, s = this,
                    a = s.rtl = !!n.rtl || "rtl" === e.css("direction"),
                    c = s.$slides = e.children(),
                    l = s.length = c.length,
                    u = s._w = !!n.loop,
                    d = s._l = x(n, "left"),
                    f = s._r = x(n, "right"),
                    h = 1 - d - f,
                    p = function(e, t) {
                        c[t] && c.removeAttr("data-slide-state"), c[e].setAttribute("data-slide-state", "active"), d && c[e - 1] && c[e - 1].setAttribute("data-slide-state", "peeking"), f && c[e + 1] && c[e + 1].setAttribute("data-slide-state", "peeking")
                    };
                s.visibility_offset = n.visibility_offset, s._s = +n.speed, s.index = n.index, s.$el = e, t.each(w, function(t, i) {
                    var o = e;
                    "mouse" === t.substr(0, 5) && n.arrows && (o = e.parent()), o.off(t + r), o.on(t + r, function(e) {
                        i.call(s, e)
                    })
                }), c.off("focusin"), c.on("focusin", function() {
                    s.slide(t(this).index())
                }), e.off("slide.activeSlide"), e.on("slide.activeSlide", function(e, t, n) {
                    t !== n && p(t, n)
                }), c.find("a").off("focus").on("focus", function() {
                    s.pause()
                }).off("blur").on("blur", function() {
                    s.resume()
                }), n.dots && l > 1 && (i = c.map(function(e) {
                    return _("dot", e)[0]
                }), i.off("click"), i.on("click", function(e) {
                    var n = t(e.currentTarget).index();
                    s.slide(n)
                }), e.off("slide.activeDots"), e.on("slide.activeDots", function(e, t) {
                    i.removeClass("active").eq(t).addClass("active")
                }), e.after(t("<div/>", {
                    "class": "dots",
                    "aria-hidden": "true"
                }).append(i))), t.each({
                    prev: [n.prevLabel, 0],
                    next: [n.nextLabel, l - 1]
                }, function(i, r) {
                    var o;
                    n[i] ? o = t(n[i]) : n.arrows && (o = e.siblings("." + i), !o.length && l > 1 && e.before(o = y(i, r[0]))), o && (o.off("click"), o.on("click", t.proxy(s[i], s)), u || e.on("slide", function(e, t) {
                        o.toggleClass("disabled", t === r[1])
                    }), o.off("focus"), o.on("focus", function() {
                        s.pause()
                    }), o.off("blur"), o.on("blur", function() {
                        s.resume()
                    }))
                }), e.css({
                    zIndex: 1,
                    position: "relative"
                });
                var v, b, g = o.chain(c).map(function(e) {
                    return t(e).height()
                }).every(function(e, t, n) {
                    return n[0] === e
                }).value();
                g || (v = o.max(c, function(e) {
                    return t(e).height()
                }), b = t(v).index()), c.each(function(e) {
                    var i, r = s.index,
                        o = e === r;
                    i = g || "activeSlide" === n.sliderHeight ? o : e === b, t(this).css({
                        display: "block",
                        position: i ? "relative" : "absolute",
                        width: 100 * h + "%",
                        left: a ? "auto" : 100 * d + "%",
                        right: a ? 100 * d + "%" : "auto",
                        top: 0
                    }), o && p(e)
                }), s.effect(n.effect), s.start(n.delay)
            };
        E.prototype = {
            _c: 0,
            effect: function(e) {
                var n = k[e] || s.effect;
                this._a = function(e, i) {
                    for (var r = 0, o = this.length, s = this.$slides; r < o; ++r) n.a.call(this, t(s[r]), r - e, i)
                }, this.$el.css(n.c), this.$slides.css(n.s), this.slide(this.index, !0)
            },
            slide: function(e, t) {
                var n = this,
                    i = t ? 0 : n._s;
                if (e < 0 && (e = 0), e >= n.length && (e = n.length - 1), !n._c++ || n.index !== e) {
                    var r = n.index;
                    n.$el.trigger("slide", [n.index = e, r]), u(n._t), n._t = l(function() {
                        n.$el.trigger("slideEnd", e)
                    }, i)
                }
                n._a(n.index, i), n.resume()
            },
            prev: function() {
                var e = this.index;
                0 === e ? this._w && this.slide(this.length - 1) : this.slide(e - 1)
            },
            next: function() {
                var e = this.index;
                e === this.length - 1 ? this._w && this.slide(0) : this.slide(e + 1)
            },
            resume: function() {
                var e = this;
                e.pause(), e._d > 0 && (e._i = l(function() {
                    t(e.$el).data(i) === e && e.next()
                }, e._d + e._s))
            },
            pause: function() {
                u(this._i)
            },
            start: function(e) {
                this._d = e || this._d, this.resume()
            },
            stop: function() {
                this._d = 0, this.pause()
            },
            disableTouch: function() {
                w.touchcancel.call(this)
            }
        }, t.extend(w, e.Modernizr.touch ? {
            touchstart: function(e) {
                var t = e.originalEvent.touches;
                return t.length > 1 ? w.touchcancel.call(this, e) : void(this.touch = {
                    x: t[0].pageX,
                    y: t[0].pageY,
                    delta: 0,
                    dist: 0,
                    test: !0,
                    time: m(),
                    width: this.$el.width()
                })
            },
            touchmove: function(e) {
                var t, n, i = this.touch,
                    r = e.originalEvent.touches,
                    o = this.index,
                    s = this.length;
                if (i) {
                    if (t = r[0].pageX - i.x, i.dist += a(t - i.delta), i.delta = t, i.test && (n = r[0].pageY - i.y, i.test = !1, a(t) < a(n))) return w.touchcancel.call(this, e);
                    e.preventDefault(), this.pause();
                    var c = this.rtl ? t < 0 : t > 0,
                        l = this.rtl ? t < 0 : t > 0;
                    (0 === o && c || o === s - 1 && l) && (t /= a(t) / i.width + 1), this._a(o + (this.rtl ? t : -t) / i.width)
                }
            },
            touchcancel: function() {
                this.touch = null, this.slide(this.index)
            },
            touchend: function(e) {
                var t = this.touch,
                    n = 0;
                t && ((2 * a(t.delta) > t.width || m() - t.time < 250 && t.dist > 20) && (n = (this.rtl ? -1 : 1) * (t.delta < 0 ? 1 : -1)), t.dist > 20 && (e.preventDefault(), this.bust = m()), this.touch = null, this.slide(this.index + n))
            },
            click: function(e) {
                this.bust && m() - this.bust < 250 && e.preventDefault()
            }
        } : {
            mouseenter: function() {
                this.pause()
            },
            mouseleave: function() {
                this.resume()
            }
        }), t.fn[i] = function(e) {
            var n = arguments;
            return this.each(function() {
                var r, o = t(this);
                "string" == typeof e ? (r = o.data(i), r[e].apply(r, Array.prototype.slice.call(n, 1))) : (e = t.extend({}, s, e), o.data(i, new E(o, e)))
            })
        }
    }(this, jQuery);