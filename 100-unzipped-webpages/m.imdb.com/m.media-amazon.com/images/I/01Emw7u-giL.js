(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["npm.ieee754"], {
        EPkKMLaBc2: function(o, a) {
            a.read = function(o, a, t, w, p) {
                var r, h, M = 8 * p - w - 1,
                    e = (1 << M) - 1,
                    n = e >> 1,
                    i = -7,
                    f = t ? p - 1 : 0,
                    s = t ? -1 : 1,
                    N = o[a + f];
                for (f += s, r = N & (1 << -i) - 1, N >>= -i, i += M; i > 0; r = 256 * r + o[a + f], f += s, i -= 8);
                for (h = r & (1 << -i) - 1, r >>= -i, i += w; i > 0; h = 256 * h + o[a + f], f += s, i -= 8);
                if (0 === r) r = 1 - n;
                else {
                    if (r === e) return h ? NaN : 1 / 0 * (N ? -1 : 1);
                    h += Math.pow(2, w), r -= n
                }
                return (N ? -1 : 1) * h * Math.pow(2, r - w)
            }, a.write = function(o, a, t, w, p, r) {
                var h, M, e, n = 8 * r - p - 1,
                    i = (1 << n) - 1,
                    f = i >> 1,
                    s = 23 === p ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    N = w ? 0 : r - 1,
                    c = w ? 1 : -1,
                    u = a < 0 || 0 === a && 1 / a < 0 ? 1 : 0;
                for (a = Math.abs(a), isNaN(a) || a === 1 / 0 ? (M = isNaN(a) ? 1 : 0, h = i) : (h = Math.floor(Math.log(a) / Math.LN2), a * (e = Math.pow(2, -h)) < 1 && (h--, e *= 2), (a += h + f >= 1 ? s / e : s * Math.pow(2, 1 - f)) * e >= 2 && (h++, e /= 2), h + f >= i ? (M = 0, h = i) : h + f >= 1 ? (M = (a * e - 1) * Math.pow(2, p), h += f) : (M = a * Math.pow(2, f - 1) * Math.pow(2, p), h = 0)); p >= 8; o[t + N] = 255 & M, N += c, M /= 256, p -= 8);
                for (h = h << p | M, n += p; n > 0; o[t + N] = 255 & h, N += c, h /= 256, n -= 8);
                o[t + N - c] |= 128 * u
            }
        }
    }
]);