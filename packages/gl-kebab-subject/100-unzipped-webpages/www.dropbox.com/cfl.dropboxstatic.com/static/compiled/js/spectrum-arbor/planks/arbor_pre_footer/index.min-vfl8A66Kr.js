define(["require", "exports", "tslib", "react", "spectrum-arbor/atoms/arbor_grid_element", "spectrum-arbor/atoms/arbor_grid_container"], function(e, r, i, t, o, a) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), t = i.__importStar(t), r.ArborPreFooter = function(e) {
        var r = e.className,
            i = e.alignment,
            m = e.leftSection,
            n = e.rightSection,
            d = e.backgroundColor,
            l = void 0 === d ? "black-cherry" : d,
            u = e.leftSectionColumnWidth,
            b = e.rightSectionColumnWidth,
            c = e.topPaddingSize,
            g = e.bottomPaddingSize,
            s = e.verticalPaddingSize;
        return u || b || (u = {
            base: 12,
            medium: 14
        }), !b && u && (b = "number" == typeof u ? 12 - u - 1 > 0 ? 12 - u - 1 : u : {
            base: u.base,
            medium: u.medium ? 24 - u.medium - 2 : 24,
            large: u.large ? 24 - u.large - 2 : void 0
        }), !u && b && (u = "number" == typeof b ? 12 - b - 2 : {
            base: b.base,
            medium: b.medium ? 24 - b.medium - 2 : 24,
            large: b.large ? 24 - b.large - 2 : void 0
        }), t.createElement(a.ArborGridContainer, {
            backgroundColor: l,
            className: r,
            alignment: i,
            topPaddingSize: c,
            bottomPaddingSize: g,
            verticalPaddingSize: s
        }, t.createElement(o.ArborGridElement, {
            columnWidth: u
        }, m), t.createElement(o.ArborGridElement, {
            columnWidth: b,
            alignment: {
                base: "flex-start",
                medium: "flex-end"
            },
            marginTopSize: {
                base: "medium",
                medium: "none"
            }
        }, n))
    }, r.ArborPreFooter.displayName = "ArborPreFooter"
});
//# sourceMappingURL=index.min.js-vflxX4zD0.map