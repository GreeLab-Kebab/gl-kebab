(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["npm.stream-browserify"], {
        TUUg7HzFuw: function(e, r, o) {
            e.exports = t;
            var n = o("f5HTEGlTH7").EventEmitter;

            function t() {
                n.call(this)
            }
            o("F04SI4wmNl")(t, n), t.Readable = o("RHXcwLGesa"), t.Writable = o("QIluZLFP7W"), t.Duplex = o("GYgghIZPv2"), t.Transform = o("CH6h+wGyOJ"), t.PassThrough = o("BDpqu1+r8Q"), t.Stream = t, t.prototype.pipe = function(e, r) {
                var o = this;

                function t(r) {
                    e.writable && !1 === e.write(r) && o.pause && o.pause()
                }

                function i() {
                    o.readable && o.resume && o.resume()
                }
                o.on("data", t), e.on("drain", i), e._isStdio || r && !1 === r.end || (o.on("end", a), o.on("close", u));
                var s = !1;

                function a() {
                    s || (s = !0, e.end())
                }

                function u() {
                    s || (s = !0, "function" == typeof e.destroy && e.destroy())
                }

                function c(e) {
                    if (m(), 0 === n.listenerCount(this, "error")) throw e
                }

                function m() {
                    o.removeListener("data", t), e.removeListener("drain", i), o.removeListener("end", a), o.removeListener("close", u), o.removeListener("error", c), e.removeListener("error", c), o.removeListener("end", m), o.removeListener("close", m), e.removeListener("close", m)
                }
                return o.on("error", c), e.on("error", c), o.on("end", m), o.on("close", m), e.on("close", m), e.emit("pipe", o), e
            }
        }
    }
]);