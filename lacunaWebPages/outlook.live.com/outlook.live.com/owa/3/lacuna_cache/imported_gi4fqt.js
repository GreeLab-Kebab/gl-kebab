var mscc;
! function(e) {
  function t(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    x[e] && x[e].forEach(function(e) {
      e.apply(null, t)
    })
  }

  function n(e, t) {
    x[e] ? x[e].push(t) : x[e] = [t]
  }

  function o(e) {
    if (e)
      for (var t = 0, n = document.cookie.split("; "); t < n.length; t++) {
        var o = n[t],
          a = o.indexOf("="),
          i = o.substring(0, a);
        if (i === e) return o.substring(i.length + 1)
      }
    return null
  }

  

  function i(e, t) {
    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
  }

  function c(e, t) {
    e.classList ? e.classList.add(t) : e.className += " " + t
  }

  

  function r(e, t) {
    e.hasAttribute(t) && e.removeAttribute(t)
  }

  

  function m() {
    return void 0 != A && i(A, _)
  }

  

  function l(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, null)
  }

  function f(e) {
    if (T && !O) {
      var t = new Image,
        n = A.getAttribute("data-site-name"),
        o = A.getAttribute("data-nver"),
        a = A.getAttribute("data-sver"),
        i = n ? "&s=" + n : "",
        c = o ? "&nv=" + o : "",
        s = a ? "&sv=" + a : "",
        r = e ? "&m=" + e : "";
      t.src = D + "?o=mscc" + i + r + c + s, O = !0
    }
  }

  function v() {
    r(A, M), c(A, _), t("show"), f("show")
  }

  

  function h(e) {
    return Math.floor(e / 1e3)
  }

  

  

  function k() {
    return !!o(e.cookieName)
  }

  

  

  function N() {
    A = document.getElementById("msccBanner"), S = document.getElementById("msccLearnMore");
    var t = k();
    !A || t || m() || v(), A && t && m() && g(), t || (l(document.body, "mouseup", E), l(document.body, "keyup", E), l(document.body, "submit", p));
    var n = o(e.cookieName);
    n && parseInt(n) < L && l(window, "beforeunload", null)
  }

  function w() {
    var t = o(e.cookieName);
    t && parseInt(t) < 0 && (document.cookie = e.cookieName + "=0;expires=" + new Date(0).toUTCString() + ";path=/;", a(e.cookieName, "0", -1))
  }

  function y() {
    o(e.cookieName);
    w(), null != document.getElementById("msccBanner") || "complete" === document.readyState ? N() : document.addEventListener ? document.addEventListener("DOMContentLoaded", N) : document.attachEvent("onreadystatechange", null)
  }
  e.cookieName = "MSCC", e.version = "0.4.1";
  var D = "https://uhf.microsoft.com/_log",
    L = h(new Date("Sun, 01 Jan 2016 08:00:00 GMT").getTime());
  e.interactiveConsentEnabled = !0;
  var A, S, x = {},
    I = window.location.hostname,
    _ = "active",
    B = "data-mscc-ic",
    M = "style",
    T = !0,
    O = !1;
  e._emit = t, e.on = n, e._getCookie = o, e._setCookieOnRootDomain = a, e.isVisible = m, e.setConsent = p, e.getConsentData = b, e.hasConsent = k, e._clearNegativeCookie = w, e._init = y, y()
}(mscc || (mscc = {}));