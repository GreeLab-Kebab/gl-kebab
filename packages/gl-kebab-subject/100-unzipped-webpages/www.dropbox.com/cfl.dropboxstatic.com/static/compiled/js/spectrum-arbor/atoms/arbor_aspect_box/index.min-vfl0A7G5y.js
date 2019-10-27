define(["require", "exports", "tslib", "react", "classnames"], function(e, t, r, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), a = r.__importDefault(a), t.ArborAspectBox = function(e) {
        var t, r = e.aspect,
            c = void 0 === r ? {
                width: 1,
                height: 1
            } : r,
            i = e.content,
            d = void 0 === i ? "" : i,
            s = e.backgroundColor,
            n = e.backgroundImage,
            l = c.height,
            u = c.width,
            b = {
                paddingTop: 100 / (u / l) + "%"
            },
            p = {
                backgroundImage: n ? "url(" + n + ")" : void 0
            },
            g = a.default((t = {
                "arbor-aspect-box__child": !0
            }, t["arbor-background-color--" + s] = void 0 !== s, t));
        return o.createElement("div", {
            className: "arbor-aspect-box",
            style: b
        }, o.createElement("div", {
            className: g,
            style: p
        }, d))
    }
});
//# sourceMappingURL=index.min.js-vflD-NGsr.map