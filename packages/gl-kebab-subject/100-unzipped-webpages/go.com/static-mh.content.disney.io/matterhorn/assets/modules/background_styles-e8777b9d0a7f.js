Whiskers("modules.background_styles", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<div class="background-styles"'), r.s(r.f("exclude_footer", e, t, 1), e, t, 0, 49, 79, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' class="exclude-global-footer"')
            }), e.pop()), r.b('> <div id="takeover-images" class="takeover-area"> <div class="overlay default"> <div class="repeating repeating-image"></div> <div class="main-image"></div> </div> <div class="overlay module-override"> <div class="repeating repeating-image"></div> <div class="main-image"></div> </div> </div> </div>'), r.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Grill,
            n = e.Whiskers;
        t.ModuleView.register("background_styles", {
            template: n.modules.background_styles,
            style_classes: ["transparent"],
            render: function() {
                this.$el.html(this.template.render())
            }
        })
    }(this);