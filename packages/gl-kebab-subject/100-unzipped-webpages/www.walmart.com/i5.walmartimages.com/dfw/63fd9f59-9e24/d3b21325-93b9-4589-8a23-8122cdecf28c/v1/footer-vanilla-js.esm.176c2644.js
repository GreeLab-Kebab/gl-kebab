import {
    l as e,
    D as t,
    B as a,
    M as o,
    S as d,
    R as l,
    e as c,
    F as s,
    T as n,
    g as i,
    U as r,
    x as u,
    V as b,
    C as m,
    X as f,
    O as v,
    G as h,
    Y as k,
    Q as g
} from "./vanilla.common-chunks.esm.6e0de5cd.js";
var M = "ae_c";
void 0 === window.postal && (window.postal = v);
var p, S = document.querySelector(".js-footer"),
    B = function() {
        S && !p &&
            import ("./vanilla.index.esm.e7332a5e.js").then(function(e) {
                var t = e.default;
                p = t.create().render()
            })
    },
    y = function() {
        var v;
        (v = {
            feedbackText: "",
            feedbackRating: "",
            beacon: e("Feedback"),
            render: function() {
                v.dom = t.create(), v.getElements(), v.bodyScroll = a.getDefaultInstance(), v.screenWidth = v.dom.getWindow().innerWidth, v.isMobile = "small" === o.getBreakpoint(v.screenWidth) || "medium" === o.getBreakpoint(v.screenWidth) || !1
            },
            getElements: function() {
                v.cancelButton = v.dom.getById("vf-feedback-bubble-cancel"), v.closeButton = v.dom.getById("vf-feedback-bubble-close-btn"), v.feedbackBubble = v.dom.getById("vf-feedback-bubble-fixed-link"), v.label = v.dom.getById("vf-feedback-bubble-textarea-lbl"), v.mobileCloseButton = v.dom.getById("vf-feedback-bubble-m-close-btn"), v.modal = v.dom.getById("vf-feedback-bubble-modal"), v.ratingScale = v.dom.getById("vf-feedback-bubble-rating-scale"), v.submitButton = v.dom.getById("vf-feedback-bubble-submit"), v.successModal = v.dom.getById("vf-feedback-success-modal"), v.successModalClose = v.dom.getById("vf-feedback-success-close-btn"), v.successModalMobileClose = v.dom.getById("vf-feedback-success-m-close-btn"), v.successModalOK = v.dom.getById("vf-feedback-success-modal-ok"), v.textArea = v.dom.getById("vf-feedback-bubble-textarea"), v.template = v.dom.querySelector(".js-footer"), v.tabText = v.dom.getById("vf-feedback-tab-text"), v.feedbackModalHelp = v.dom.getById("vf-feedback-modal-help"), v.feedbackBubble && v.feedbackBubble.addEventListener("click", v.showModal), d.get("isFeedbackTabCollapsed") && v.tabText && v.tabText.remove(), v.feedbackModalHelp && v.feedbackModalHelp.addEventListener("click", v.handleFeedbackModalHelpClick)
            },
            handleFeedbackModalHelpClick: function() {
                v.beacon.tagOutboundAction(l())
            },
            showModal: function(e) {
                e.stopPropagation(), v.removeEscHandler = c(v.modal, v.hideModal), v.bodyScroll.lock(), v.setupModalHandlers(), v.modal.removeAttribute("hidden"), v.focusTrap = s.create(v.modal.querySelector("[role=dialog]")), v.removeCloseOnDialogModal = n(v.hideModal)
            },
            setupModalHandlers: function() {
                v.ratingScale && v.ratingScale.hasChildNodes() && v.ratingScale.addEventListener("click", v.handleRatingSelect), v.textArea && "TEXTAREA" === v.textArea.tagName.toUpperCase() && (v.textArea.addEventListener("change", v.handleInput), v.textArea.addEventListener("keyup", v.handleInput)), v.cancelButton && v.cancelButton.addEventListener("click", v.hideModal), v.closeButton && v.closeButton.addEventListener("click", v.hideModal), v.mobileCloseButton && v.mobileCloseButton.addEventListener("click", v.hideModal), v.submitButton && v.submitButton.addEventListener("click", v.handleSubmit)
            },
            hideModal: function() {
                v.focusTrap(), v.removeEscHandler(), v.bodyScroll.unlock(), v.removeModalHandlers(), v.modal.setAttribute("hidden", "hidden"), v.resetForm(), d.get("isFeedbackTabCollapsed") || (d.set("isFeedbackTabCollapsed", !0), v.tabText.remove()), v.removeCloseOnDialogModal()
            },
            removeModalHandlers: function() {
                v.cancelButton.removeEventListener("click", v.hideModal), v.closeButton.removeEventListener("click", v.hideModal), v.ratingScale.removeEventListener("change", v.handleRatingSelect), v.submitButton.removeEventListener("click", v.handleSubmit), v.textArea.removeEventListener("change", v.handleInput), v.textArea.removeEventListener("keyup", v.handleInput)
            },
            resetRatingScale: function() {
                v.ratingScale.querySelectorAll("input").forEach(function(e) {
                    e.checked = !1
                }), v.feedbackRating = ""
            },
            handleRatingSelect: function(e) {
                var t = e.target;
                t && t.value && (v.feedbackRating = t.value, v.disableElements([v.textArea, v.submitButton], !1), v.dom.removeClass(v.label, M))
            },
            resetForm: function() {
                v.disableElements([v.textArea, v.submitButton], !0), v.resetRatingScale(), v.dom.addClass(v.label, M), v.textArea.value = "", v.feedbackText = ""
            },
            handleInput: function() {
                v.feedbackText = v.textArea.value
            },
            disableElements: function(e, t) {
                if (e instanceof Array)
                    for (var a = 0; a < e.length; a++) e[a].disabled = t
            },
            handleSubmit: function(e) {
                e.preventDefault();
                var t = i(r, "ccm.header-footer-app.feedbackApi.fixedFeedbackSubmitUrl", "/customer-survey/submit");
                if (null !== (t = u(v.template, t))) {
                    var a = {
                            payload: {
                                comment: v.feedbackText,
                                context: b("RightRail"),
                                pageType: "globalpage",
                                submitDate: new Date,
                                survey: {
                                    "How was your experience with this page?": v.feedbackRating
                                },
                                surveyId: "3653b924-5a52-4c45-98c7-d7ed5fe2a5af"
                            }
                        },
                        o = m.get("vtc");
                    o && "" !== o && (a.payload.visitorId = o), f.fetch(t, {
                        method: "POST",
                        format: "json",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify(a),
                        onSuccess: v.handleSubmitSuccess,
                        onError: v.handleSubmitError
                    })
                } else v.handleSubmitError()
            },
            handleSubmitSuccess: function() {
                v.hideModal(), v.showSuccessModal()
            },
            handleSubmitError: function() {
                v.hideModal()
            },
            showSuccessModal: function() {
                v.successModal.removeAttribute("hidden"), v.focusTrap = s.create(v.successModal.querySelector("[role=dialog]")), v.successModalClose && v.successModalClose.addEventListener("click", v.hideSuccessModal), v.successModalMobileClose && v.successModalMobileClose.addEventListener("click", v.hideSuccessModal), v.successModalOK && v.successModalOK.addEventListener("click", v.hideSuccessModal), v.removeCloseOnDialogModal = n(v.hideSuccessModal)
            },
            hideSuccessModal: function(e) {
                e.preventDefault(), v.successModal.setAttribute("hidden", "hidden"), v.successModalClose.removeEventListener("click", v.hideSuccessModal), v.successModalMobileClose.removeEventListener("click", v.hideSuccessModal), v.successModalOK.removeEventListener("click", v.hideSuccessModal), v.removeCloseOnDialogModal()
            }
        }, v).render(), h() ? k(S, B) : B()
    };
g({
    onDOMContentLoaded: y
});
export {
    y as onDOMContentLoaded
};
//# sourceMappingURL=http://127.0.0.1:3000/js/footer-vanilla-js.esm.176c2644.js.map