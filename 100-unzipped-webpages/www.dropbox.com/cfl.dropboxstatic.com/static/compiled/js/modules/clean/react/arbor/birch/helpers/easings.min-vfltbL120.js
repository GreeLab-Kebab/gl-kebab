define(["require", "exports"], function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.easeInOutQuart = function(e) {
        var n = e.currentTime,
            r = e.beginningVal,
            t = e.changeVal,
            u = e.duration,
            i = n,
            a = r,
            c = t;
        return (i /= u / 2) < 1 ? c / 2 * i * i * i * i + a : -c / 2 * ((i -= 2) * i * i * i - 2) + a
    }
});
//# sourceMappingURL=easings.min.js-vfl_-NacL.map