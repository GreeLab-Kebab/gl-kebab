"use strict";
! function() {
    var n = null,
        t = document.querySelector('[data-applet-type="userintentmgmt"]');
    t && (t.addEventListener("touchstart", function(t) {
        t.targetTouches && 1 === t.targetTouches.length && (n = t.targetTouches[0].clientY)
    }, !1), t.addEventListener("touchmove", function(t) {
        t.targetTouches && 1 === t.targetTouches.length && function(t) {
            if (!t.target || !t.targetTouches) return;
            var e = document.querySelector(".userintentmgmt-panel > ul");
            if (e && ! function(t, e) {
                    if (!t) return !1;
                    var r = e.parentNode;
                    for (; null !== r;) {
                        if (r === t) return !0;
                        r = r.parentNode
                    }
                    return !1
                }(e, t.target)) return t.preventDefault();
            var r = t.targetTouches[0].clientY - n;
            0 === e.scrollTop && 0 < r && t.preventDefault();
            (function(t) {
                return t && void 0 !== t.scrollHeight ? t.scrollHeight - t.scrollTop <= t.clientHeight : void 0
            })(e) && r < 0 && t.preventDefault()
        }(t)
    }, !1))
}();