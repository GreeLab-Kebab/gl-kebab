
        ! function() {
            var e = window.requestAnimationFrame,
                t = function() {
                    var e = document.getElementById("deferred-styles"),
                        t = document.createElement("div");
                    t.innerHTML = e.textContent, document.body.appendChild(t), e.parentElement.removeChild(e)
                };
            e ? e(t) : setTimeout(t)
        }();
    