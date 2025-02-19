define("modules/clean/clipboard_v2", ["require", "exports", "tslib", "external/flash_detect", "jquery", "modules/clean/clipboard", "modules/core/browser_detection"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importStar(i), a = n.__importStar(a);
    var o = (function() {
        function e(e, t, n, r) {
            this.do_copy = this.do_copy.bind(this), this.copyText = e, this.onSuccess = t, this.onError = n, this.clickHandler = r
        }
        return e.prototype.setupCopy = function(t, n) {
            var r = this,
                a = s.default(n),
                o = s.default(t);
            if (!e.is_flashless_clipboard_supported()) {
                var l = function() {
                    return "function" == typeof r.onSuccess && r.onSuccess(), "function" == typeof r.clickHandler ? r.clickHandler() : void 0
                };
                return i.clipboard_overlay(this.copyText, o, l, a)
            }
        }, e.prototype.do_copy = function() {
            if (e.is_supported() && e.is_flashless_clipboard_supported()) {
                return document.execCommand("copy", !1) ? "function" == typeof this.onSuccess ? this.onSuccess() : void 0 : "function" == typeof this.onError ? this.onError() : void 0
            }
        }, e.is_supported = function() {
            return e.is_flashless_clipboard_supported() || r.default.installed
        }, e.is_flashless_clipboard_supported = function() {
            var e = parseInt(a.version, 10);
            return a.chrome ? e >= 42 : a.mozilla ? e >= 41 : a.opera ? e >= 29 : a.msie ? e >= 9 : !!a.edge || !!a.safari && e >= 10
        }, e
    })();
    t.ClipboardV2 = o
}), define("modules/clean/previews/data/store", ["require", "exports", "modules/clean/react/file_viewer/data/store", "modules/clean/previews/data/actions"], function(e, t, n, r) {
    "use strict";

    function s(e, t, r) {
        n.hydrateFileStore(e, t), i(e, t, r)
    }

    function i(e, t, n) {
        e.dispatch(r.fetchPreviewData(t, n))
    }

    function a(e, t, n, s) {
        e.dispatch(r.fetchPreviewData(t, n, s))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hydrateFileStoreAndPreviewStore = s, t.hydratePreviewStore = i, t.fetchPreviewDataUpdateStore = a
}), define("modules/clean/react/file_viewer/collection_viewer", ["require", "exports", "tslib", "external/lodash", "react", "external/react-redux", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/utils", "modules/clean/react/file_viewer/file_viewer", "modules/clean/previews/data/selectors", "modules/clean/react/file_viewer/data/actions", "modules/clean/react/file_viewer/data/store", "modules/clean/react/file_viewer/data/selectors", "modules/clean/react/keyboard_binding/keyboard_binding_provider", "modules/clean/react/keyboard_binding/keyboard_binding_connector", "modules/clean/keycode", "modules/clean/react/keyboard_binding/keyboard_binding", "modules/clean/react/file_viewer/logging", "modules/clean/react/file_viewer/constants", "modules/clean/integrations/zoom_share_dialog/async_modal", "modules/core/uri", "modules/clean/history"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E, v, I) {
    "use strict";

    function b(e, t, n, r, s) {
        var i = t.filter(function(e) {
            return !e.is_dir
        });
        return i.indexOf(e) === -1 ? {
            files: [e]
        } : {
            files: i,
            sharedLinkInfos: n,
            sharePermissions: r,
            shareTokens: s
        }
    }

    function y(e, t) {
        var n = e.file,
            r = e.files,
            s = e.sharedLinkInfos,
            i = e.sharePermissions,
            a = e.shareTokens;
        return n !== t.file || r !== t.files || s !== t.sharedLinkInfos || i !== t.sharePermissions || a !== t.shareTokens
    }

    function C(e) {
        var t = e.file,
            n = e.files,
            r = e.sharedLinkInfos,
            s = e.sharePermissions,
            i = e.shareTokens,
            a = b(t, n, r, s, i);
        return {
            collection: a,
            currentIndex: a.files.indexOf(t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importDefault(s), I = n.__importDefault(I);
    var M = u.getStoreForFileViewer(),
        T = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.updateFileViewer = function() {
                    var e = n.props,
                        t = e.files,
                        r = e.file,
                        s = t.indexOf(r);
                    s = s === -1 ? 0 : s, n.openFile(r)
                }, n.handleFlipNext = r.throttle(function() {
                    var e = n.props.isFlippingEnabled,
                        t = n.state,
                        r = t.collection,
                        s = t.currentIndex;
                    if (e) {
                        n.props.onFlipNext && n.props.onFlipNext();
                        var i = s + 1 === r.files.length ? 0 : s + 1;
                        n.switchFile(i)
                    }
                }, 100), n.handleFlipPrevious = r.throttle(function() {
                    var e = n.props.isFlippingEnabled,
                        t = n.state,
                        r = t.collection,
                        s = t.currentIndex;
                    if (e) {
                        n.props.onFlipPrevious && n.props.onFlipPrevious();
                        var i = 0 === s ? r.files.length - 1 : s - 1;
                        n.switchFile(i)
                    }
                }, 100), n.switchFile = function(e) {
                    var t = n.state.collection;
                    n.setState({
                        currentIndex: e
                    });
                    var r = t.files[e];
                    n.updatePreviewUrl(r), n.openFile(r)
                }, n.flipKeybindings = [f.hydrateKeyboardBinding({
                    keyboardEventCriteria: {
                        which: _.KeyCode.RIGHT
                    },
                    callback: function() {
                        n.handleFlipNext(), g.logUserAction(S.UserAction.FlipNext, S.UserActionContext.Keyboard)
                    }
                }), f.hydrateKeyboardBinding({
                    keyboardEventCriteria: {
                        which: _.KeyCode.LEFT
                    },
                    callback: function() {
                        n.handleFlipPrevious(), g.logUserAction(S.UserAction.FlipPrevious, S.UserActionContext.Keyboard)
                    }
                })], n.state = C(t), n
            }
            return n.__extends(t, e), t.prototype.componentWillMount = function() {
                this.updateFileViewer()
            }, t.prototype.componentDidMount = function() {
                var e = this.state,
                    t = e.collection,
                    n = e.currentIndex,
                    r = this.props,
                    s = r.previewApiDataMap,
                    i = r.shouldPresentInZoom,
                    l = r.user,
                    c = r.file,
                    d = t.files.map(function(e) {
                        var t = a.getFileRevisionId(e);
                        return s[t] && s[t].data
                    });
                o.preloadImages(d, n), this.setupPreviewUrl(c), l && i && E.asyncShowModal(l.id, c.file_id, "file-viewer-modal-overlay")
            }, t.prototype.componentWillReceiveProps = function(e) {
                y(this.props, e) && this.setState(C(e))
            }, t.prototype.componentWillUnmount = function() {
                var e = this.props,
                    t = e.closeFile,
                    n = e.onClose;
                t(), n && n(), this.teardownPreviewUrl()
            }, t.prototype.openFile = function(e) {
                this.props.openFile(e)
            }, t.prototype.setupPreviewUrl = function(e) {
                this.props.skipOuterRouting || this.setPreviewUrl(e)
            }, t.prototype.updatePreviewUrl = function(e) {
                this.setPreviewUrl(e, !1)
            }, t.prototype.teardownPreviewUrl = function() {
                this.props.skipOuterRouting || this.setPreviewUrl(null)
            }, t.prototype.setPreviewUrl = function(e, t) {
                if (void 0 === t && (t = !0), !this.props.disableRouting) {
                    var n = v.URI.parse(I.default.get_url()),
                        r = v.URI.encode_parts(n.getPath()),
                        s = n.removeQuery("select").removeQuery("page");
                    if (null == e) s = s.removeQuery("preview");
                    else {
                        var i = a.getFilename(e);
                        s = s.updateQuery({
                            preview: i
                        })
                    }
                    var o = s.getQuery();
                    t ? I.default.push_state(r, o, {
                        immediatelyRestoreState: !1
                    }) : I.default.replace_state(r, o)
                }
            }, t.prototype.render = function() {
                var e = this.props,
                    t = (e.files, e.isOverflowZoomMode),
                    i = (e.onFlipNext, e.onFlipPrevious, e.sharedLinkInfos, e.shareTokens, e.sharePermissions, e.skipOuterRouting, n.__rest(e, ["files", "isOverflowZoomMode", "onFlipNext", "onFlipPrevious", "sharedLinkInfos", "shareTokens", "sharePermissions", "skipOuterRouting"])),
                    a = this.state,
                    o = a.currentIndex,
                    c = a.collection;
                return s.default.createElement(m.KeyboardBindingProvider, null, s.default.createElement("div", null, t ? null : s.default.createElement(h.KeyboardBindingConnector, {
                    keyboardBindings: this.flipKeybindings
                }), s.default.createElement(l.FileViewer, n.__assign({}, i, {
                    fileIndex: o,
                    fileCount: c.files.length,
                    onFlipNext: this.handleFlipNext,
                    onFlipPrevious: this.handleFlipPrevious,
                    sharedLinkInfo: r.get(c.sharedLinkInfos, o),
                    shareToken: r.get(c.shareTokens, o),
                    sharePermission: r.get(c.sharePermissions, o)
                }))))
            }, t.defaultProps = {
                isFlippingEnabled: !0
            }, t
        })(s.default.Component);
    t._FileCollectionViewer = T;
    var N = i.connect(function(e, t) {
            return {
                isFlippingEnabled: p.getIsFlippingEnabled(e),
                previewApiDataMap: c.getApiDataForFiles(e, t.files),
                isOverflowZoomMode: p.isOverflowZoomMode(e)
            }
        }, {
            closeFile: d.closeFile,
            openFile: d.openFile
        })(T),
        A = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return s.default.createElement(i.Provider, {
                    store: M
                }, s.default.createElement(N, n.__assign({}, this.props)))
            }, t
        })(s.default.Component);
    t.FileCollectionViewer = A
}), define("modules/clean/react/file_viewer/controller", ["require", "exports", "tslib", "react", "external/react-dom", "external/lodash", "modules/clean/loggers/file_viewer_logger", "modules/clean/react/file_viewer/data/store", "modules/clean/previews/data/store", "modules/clean/react/file_viewer/utils", "modules/core/browser_detection", "modules/clean/react/file_viewer/collection_viewer", "modules/clean/file_store/utils", "modules/clean/react/file_viewer/url_utils", "modules/clean/react/previews/constants", "modules/clean/react/extensions/data/store"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _) {
    "use strict";

    function f(e, t, n) {
        var r = o.getStoreForFileViewer();
        o.hydrateFileViewerNamespace(r, {}, t), l.hydrateFileStoreAndPreviewStore(r, e, t), _.initializeStore(t, e)
    }

    function g(e) {
        var t = o.getStoreForFileViewer();
        o.updateFileStore(t, e)
    }

    function S(e, t) {
        var n = o.getStoreForFileViewer();
        l.fetchPreviewDataUpdateStore(n, e, t)
    }

    function E(e, t) {
        S(e, t)
    }

    function v(e, t, r, s, i) {
        A = s, a.start();
        var o = T(i);
        f(e, r, t), C(n.__assign({}, o, {
            titleBarCloseUrl: m.getCurrentFolderHref(),
            files: e,
            file: e[t],
            disableFlipping: !!i.disableFlipping,
            sharedLinkInfos: i.sharedLinkInfos,
            shareTokens: i.shareTokens,
            sharePermissions: i.sharePermissions,
            user: r,
            shouldPresentInZoom: i.shouldPresentInZoom
        }))
    }

    function I(e) {
        if (N) {
            g(e);
            var t = N.props;
            S(e, t.user);
            var r = p.getFileRevisionId(t.file),
                s = i.find(e, function(e) {
                    return p.getFileRevisionId(e) === r
                }) || t.file;
            C(n.__assign({}, t, {
                file: s,
                files: e
            }))
        }
    }

    function b() {
        M()
    }

    function y() {
        return null != N
    }

    function C(e) {
        var t = document.getElementById(A);
        N = s.default.render(r.default.createElement(u.FileCollectionViewer, n.__assign({}, e)), t)
    }

    function M() {
        var e = document.getElementById(A);
        s.default.unmountComponentAtNode(e), N = null
    }

    function T(e) {
        var t = (e.disableFlipping, e.initialPreviewSourceAction),
            r = e.initialPreviewSourceContext,
            s = (e.sharedLinkInfos, e.sharePermissions, e.shareTokens, n.__rest(e, ["disableFlipping", "initialPreviewSourceAction", "initialPreviewSourceContext", "sharedLinkInfos", "sharePermissions", "shareTokens"]));
        s.canClose = !0, null == r && (r = c.getSourceContext() || h.PreviewSourceContext.Browse), null == t && (t = c.getSourceAction());
        var i = d.is_supported_mobile_browser();
        s.isMobileUserAgent = i, i && (s.hideComments = !0);
        var a = s.onCloseViewer;
        return s.onCloseViewer = function() {
            return b(), "function" == typeof a ? a() : void 0
        }, n.__assign({
            initialPreviewSourceAction: t,
            initialPreviewSourceContext: r
        }, s)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importStar(i), a = n.__importStar(a);
    var N = null,
        A = "";
    t.prewarmPreviewData = E, t.open = v, t.updateFiles = I, t.close = b, t.isShown = y, t.render = C
}), define("modules/clean/react/pass/action_timestamps", ["require", "exports", "tslib", "modules/clean/react/pass/constants", "modules/core/exception"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s = n.__importStar(s);
    var i = [r.LoggingActions.PRESENCE_RECEIVE, r.LoggingActions.TRANSMITTER_TOKEN_BEGIN, r.LoggingActions.TRANSMITTER_TOKEN_RECEIVE, r.LoggingActions.RECEIVER_TOKEN_BEGIN, r.LoggingActions.RECEIVER_TOKEN_RECEIVE, r.LoggingActions.SEEN_STATE_USERS_BEGIN, r.LoggingActions.SEEN_STATE_USERS_RECEIVE],
        a = (function() {
            function e() {
                this.allTimestamps = {}
            }
            return e.prototype.record = function(e, t) {
                if (t) {
                    var n = (new Date).getTime() / 1e3;
                    this.allTimestamps[t] = this.allTimestamps[t] || {};
                    var r = this.allTimestamps[t];
                    r.hasOwnProperty(e) ? this.reportStackForRepeatedAction(r, e, t, n) : r[e] = n
                }
            }, e.prototype.get = function(e) {
                return e ? this.allTimestamps[e] || {} : {}
            }, e.prototype.reportStackForRepeatedAction = function(e, t, n, r) {
                if (!(i.indexOf(t) >= 0)) {
                    var a = e[t];
                    s.reportStack("Attempted to record action for which there existed a previous record", {
                        severity: s.SEVERITY.NONCRITICAL,
                        tags: ["pass:actionTimestampsTracker"],
                        exc_extra: {
                            preview_session_id: n,
                            action: t,
                            oldTimestamp: a,
                            newTimestamp: r
                        }
                    })
                }
            }, e
        })();
    t.ActionTimestampsTracker = new a
}), define("modules/clean/react/pass/actions", ["require", "exports", "modules/clean/flux/dispatcher", "modules/clean/react/pass/constants"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (function() {
        function e() {}
        return e.passPermissionRequest = function(e) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.PASS_PERMISSION_REQUEST,
                data: {
                    fileId: e
                }
            })
        }, e.updatePermissions = function(e, t) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.UPDATE_PERMISSIONS,
                data: {
                    fileId: e,
                    partialPermission: t
                }
            })
        }, e.fetchPassError = function(e) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.FETCH_PASS_ERROR,
                data: {
                    fileId: e
                }
            })
        }, e.fetchPassConcluded = function(e) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.FETCH_PASS_CONCLUDED,
                data: {
                    fileId: e
                }
            })
        }, e.receivePresenceDelta = function(e, t, s, i) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.RECEIVE_PRESENCE_DELTA,
                data: {
                    userId: e,
                    fileId: t,
                    onlineUniqueUsers: s,
                    offlineUniqueUsers: i
                }
            })
        }, e.receivePresenceSnapshot = function(e, t, s) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.RECEIVE_PRESENCE_SNAPSHOT,
                data: {
                    userId: e,
                    fileId: t,
                    onlineUniqueUsers: s
                }
            })
        }, e.resetPassInfo = function(e) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.RESET_PASS_INFO,
                data: {
                    fileId: e
                }
            })
        }, e.updateSeenStateInfo = function(e, t, s) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.UPDATE_SEEN_STATE_INFO,
                data: {
                    fileId: e,
                    seenStateInfo: t,
                    seenStateCursor: s
                }
            })
        }, e.updateSeenStateInfoContinue = function(e, t, s) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.UPDATE_SEEN_STATE_INFO_CONTINUE,
                data: {
                    fileId: e,
                    seenStateInfo: t,
                    seenStateCursor: s
                }
            })
        }, e.discontinueSeenStateInfo = function(e) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.DISCONTINUE_SEEN_STATE_INFO,
                data: {
                    fileId: e
                }
            })
        }, e.updateSeenStateUnavailable = function(e, t) {
            n.Dispatcher.dispatch({
                type: r.ActionTypes.UPDATE_SEEN_STATE_UNAVAILABLE,
                data: {
                    userId: e,
                    fileId: t
                }
            })
        }, e
    })();
    t.PassActions = s
}), define("modules/clean/react/pass/beacon_presence_helpers", ["require", "exports", "tslib", "external/lodash", "modules/clean/api_v2/user_client", "modules/clean/api_v2/noauth_client", "modules/clean/api_v2/error", "modules/clean/beacon", "modules/clean/react/pass/action_timestamps", "modules/clean/react/pass/seen_state_helpers", "modules/clean/react/pass/actions", "modules/clean/react/pass/constants", "modules/clean/uuid", "modules/clean/viewer", "modules/constants/python"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h) {
    "use strict";

    function _(e) {
        d.PassActions.resetPassInfo(e), d.PassActions.fetchPassError(e)
    }

    function f(e, t) {
        return t ? {
            ".tag": "shared_link_details",
            url: t
        } : {
            ".tag": "file_identifier",
            file_identifier: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importStar(o);
    var g = (function() {
        function e() {}
        return e.shutdown = function(e) {
            var t = e.beaconFileData,
                n = e.user,
                r = e.async,
                s = e.shouldWritePresence,
                i = void 0 === s || s;
            if (this.transmitterData) {
                var a = this.transmitterData,
                    o = a.beaconUserId,
                    l = a.context,
                    d = a.identifier;
                this.transmitterData.transmitter.stop(), delete this.transmitterData, !m.Viewer.get_viewer().is_assume_user_session && i && c.SeenStateHelpers.updateSeenStateOnResign(n, t, r, o, d, l)
            }
            this.receiverData && this.receiverData.receiver && (this.receiverData.receiver.stop(), delete this.receiverData)
        }, e.receiveBeaconData = function(e) {
            var t = e.beaconFileData,
                n = e.user,
                r = e.previewSessionId;
            this.fetchReceiverToken(t, n, r)
        }, e.fetchReceiverToken = function(e, t, r) {
            return n.__awaiter(this, void 0, void 0, function() {
                var i, c, p, m, h, g, S = this;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return i = e.fileId, c = e.url, l.ActionTimestampsTracker.record(u.LoggingActions.RECEIVER_TOKEN_BEGIN, r), p = {
                                file_info: f(i, c)
                            }, [4, (new s.UserApiV2Client).ns("file_presence").rpc("get_pass_receiver_token", p, {
                                subjectUserId: t.id
                            }).catch(a.catchApiError(function() {
                                return _(i), Promise.reject(void 0)
                            }))];
                        case 1:
                            if (m = n.sent(), h = !m.beacon_presence_error, d.PassActions.updatePermissions(i, {
                                    canReadPresence: h
                                }), m.beacon_presence_error) {
                                if ("no_permission" === m.beacon_presence_error[".tag"]) return [2];
                                _(i)
                            } else l.ActionTimestampsTracker.record(u.LoggingActions.RECEIVER_TOKEN_RECEIVE, r), g = [new o.PresenceParams(o.PresenceType.Context, t.account_id, this.APP, m.beacon_presence_info.context, m.beacon_presence_info.token)], this.receiverData && this.receiverData.receiver && this.receiverData.receiver.stop(), this.receiverData = {
                                authKey: m.beacon_presence_info.auth_key,
                                receiver: new o.Receiver(g, function(n) {
                                    l.ActionTimestampsTracker.record(u.LoggingActions.PRESENCE_RECEIVE, r), S.onUpdate(n, t.id, e)
                                }, function() {
                                    return S.fetchReceiverToken(e, t, r)
                                }),
                                context: m.beacon_presence_info.context
                            }, this.receiverData.receiver.start();
                            return [2]
                    }
                })
            })
        }, e.onUpdate = function(e, t, n) {
            var r = e[0],
                s = n.fileId;
            if (r.delta) {
                var i = this.parseBeaconUpdates(r.delta);
                d.PassActions.receivePresenceDelta(t, s, i.onlineUniqueUsers, i.offlineUniqueUsers)
            } else if (r.snapshot) {
                var i = this.parseBeaconUpdates(r.snapshot);
                d.PassActions.receivePresenceSnapshot(t, s, i.onlineUniqueUsers)
            }
        }, e.parseBeaconUpdates = function(e) {
            for (var t = {}, n = {}, r = 0, s = e; r < s.length; r++) {
                var i = s[r],
                    a = i.agent,
                    o = a.user_id,
                    l = a.source.identifier;
                i.status === h.BEACON_ONLINE_STATUS ? (o in t || (t[o] = {}), t[o][l] = !0) : i.status === h.BEACON_OFFLINE_STATUS && (o in n || (n[o] = {}), n[o][l] = !0)
            }
            return {
                onlineUniqueUsers: t,
                offlineUniqueUsers: n
            }
        }, e.transmitBeaconData = function(e) {
            var t = e.user,
                r = e.beaconFileData,
                s = e.prevBeaconFileData,
                i = e.previewSessionId;
            return n.__awaiter(this, void 0, void 0, function() {
                var e = this;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return this.transmitterData && s && (this.transmitterData.transmitter.add_or_update_agents([this.getAgentStatusForFile(this.transmitterData.beaconUserId, this.transmitterData.identifier, this.transmitterData.authKey, this.transmitterData.context, h.BEACON_OFFLINE_STATUS)]), setTimeout(function() {
                                e.transmitterData.transmitter.stop()
                            }, 1)), [4, this.fetchTransmitterToken(t, r, i)];
                        case 1:
                            return n.sent(), [2]
                    }
                })
            })
        }, e.getAgentStatusForFile = function(e, t, n, r, s) {
            var i = new o.Source(this.PLATFORM, this.SURFACE, t),
                a = new o.Agent(e, this.APP, r, i);
            return new o.AgentStatus(a, s, n)
        }, e.fetchTransmitterToken = function(e, t, c) {
            return n.__awaiter(this, void 0, void 0, function() {
                var m, g, S, E, v, I, b = this;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return m = t.fileId, g = t.url, l.ActionTimestampsTracker.record(u.LoggingActions.TRANSMITTER_TOKEN_BEGIN, c), S = null, E = {
                                file_info: f(m, g)
                            }, S = e ? (new s.UserApiV2Client).ns("file_presence").rpc("get_pass_transmitter_token", E, {
                                subjectUserId: e.id
                            }) : (new i.NoAuthApiV2Client).ns("file_presence").rpc("logged_out/get_pass_transmitter_token", E, {}), [4, S.catch(a.catchApiError(function() {
                                return _(m), Promise.reject(void 0)
                            }))];
                        case 1:
                            if (v = n.sent(), I = !0, I = !v.beacon_presence_error, d.PassActions.updatePermissions(m, {
                                    canWritePresence: I
                                }), I && l.ActionTimestampsTracker.record(u.LoggingActions.TRANSMITTER_TOKEN_RECEIVE, c), v.beacon_presence_error) {
                                if ("no_permission" === v.beacon_presence_error[".tag"]) return [2];
                                _(m)
                            } else this.transmitterData = {
                                identifier: p.UUID.v4({
                                    allowInsecure: !0
                                }),
                                beaconUserId: v.beacon_presence_info.beacon_user_id,
                                authKey: v.beacon_presence_info.auth_key,
                                transmitter: new o.Transmitter(v.beacon_presence_info.token, function() {
                                    return b.fetchTransmitterToken(e, t, c)
                                }, r.noop),
                                context: v.beacon_presence_info.context
                            }, this.transmitterData.transmitter.add_or_update_agents([this.getAgentStatusForFile(this.transmitterData.beaconUserId, this.transmitterData.identifier, this.transmitterData.authKey, this.transmitterData.context, h.BEACON_ONLINE_STATUS)]), this.transmitterData.transmitter.start();
                            return [2]
                    }
                })
            })
        }, e.APP = "harmony", e.PLATFORM = o.Platforms.WEB, e.SURFACE = "file_viewer", e.receiverData = null, e.transmitterData = null, e
    })();
    t.BeaconPresenceHelpers = g
}), define("modules/clean/react/pass/pass_helpers", ["require", "exports", "tslib", "jquery", "modules/clean/react/file_viewer/utils", "modules/clean/react/previews/constants", "modules/clean/react/file_viewer/models", "modules/clean/react/pass/actions", "modules/clean/react/pass/beacon_presence_helpers", "modules/clean/react/pass/seen_state_helpers", "modules/clean/react/pass/types", "modules/clean/react/pass/constants", "modules/clean/sharing/actions/sharing_actions", "modules/clean/viewer"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var h = u.MAX_FACES_NORMAL + u.MAX_OVERFLOW_BUTTON_INDICATOR + 1,
        _ = (function() {
            function e() {}
            return e.setup = function(t) {
                var n = t.user,
                    r = t.fileData,
                    s = t.prevFileData,
                    i = t.shouldWritePresence,
                    a = void 0 === i || i,
                    l = t.skipSharingEndpoints,
                    c = void 0 !== l && l,
                    d = t.limit,
                    u = void 0 === d ? 150 : d,
                    p = r.file.file_id;
                this.shouldInitializePass(n, p, a) && setTimeout(function() {
                    o.PassActions.passPermissionRequest(p), e.makeAllRequests({
                        user: n,
                        fileData: r,
                        prevFileData: s,
                        shouldWritePresence: a,
                        skipSharingEndpoints: c,
                        limit: u
                    })
                }, 0)
            }, e.teardown = function(e) {
                var t = e.user,
                    n = e.fileData,
                    s = e.async,
                    i = e.shouldWritePresence,
                    a = void 0 === i || i,
                    o = n.file,
                    c = n.url,
                    u = o.file_id;
                if (this.shouldInitializePass(t, u, a)) {
                    r.default(window).off("beforeunload.passpresence");
                    var p = new d.BeaconFileData(o, c);
                    l.BeaconPresenceHelpers.shutdown({
                        beaconFileData: p,
                        user: t,
                        async: s,
                        shouldWritePresence: a
                    })
                }
            }, e.shouldInitializePass = function(e, t, n) {
                return s.getSourceContext() !== i.PreviewSourceContext.SharedLinkCollection && (null !== e || n) && t
            }, e.makeAllRequests = function(e) {
                var t = this,
                    n = e.user,
                    s = e.fileData,
                    i = e.prevFileData,
                    u = e.limit,
                    _ = void 0 === u ? 150 : u,
                    f = e.shouldWritePresence,
                    g = void 0 === f || f,
                    S = e.skipSharingEndpoints,
                    E = void 0 !== S && S,
                    v = a.FilePreviewSession.currentSession && a.FilePreviewSession.currentSession.id,
                    I = s.file,
                    b = s.url,
                    y = I.file_id,
                    C = I.fq_path,
                    M = y || C,
                    T = new d.BeaconFileData(I, b);
                n ? (M && !E && (p.SharingActions.fetchFileMemberCount({
                    user: n,
                    contentId: M,
                    limit: h,
                    countGroupsAsMembers: !1,
                    url: b,
                    previewSessionId: v,
                    runViewerInfoChecks: !0
                }), p.SharingActions.listMembers({
                    user: n,
                    contentId: M,
                    isFolder: !1,
                    limit: 6,
                    url: b,
                    previewSessionId: v,
                    includeSeenState: !1
                })), c.SeenStateHelpers.fetchSeenStateInfo(n, y, _, b, v), l.BeaconPresenceHelpers.receiveBeaconData({
                    beaconFileData: T,
                    user: n,
                    previewSessionId: v
                })) : o.PassActions.updatePermissions(y, {
                    canReadPresence: !1,
                    canReadSeenState: !1
                });
                var N = m.Viewer.get_viewer().is_assume_user_session;
                if (!g || N) o.PassActions.updatePermissions(y, {
                    canWritePresence: !1
                });
                else {
                    var A = i && new d.BeaconFileData(i.file, i.url);
                    l.BeaconPresenceHelpers.transmitBeaconData({
                        user: n,
                        beaconFileData: T,
                        prevBeaconFileData: A,
                        previewSessionId: v
                    }), r.default(window).off("beforeunload.passpresence"), r.default(window).on("beforeunload.passpresence", function(e) {
                        t.teardown({
                            user: n,
                            fileData: s,
                            async: !1,
                            shouldWritePresence: !0
                        }), e.returnValue = void 0
                    })
                }
            }, e
        })();
    t.PassHelpers = _
}), define("modules/clean/react/pass/seen_state_helpers", ["require", "exports", "tslib", "modules/clean/api_v2/transport/jquery", "modules/clean/api_v2/user_client", "modules/clean/api_v2/noauth_client", "modules/clean/api_v2/error", "modules/clean/api_v2/types", "modules/clean/react/file_viewer/models", "modules/clean/react/pass/action_timestamps", "modules/clean/react/pass/actions", "modules/clean/react/pass/constants", "modules/constants/file_viewer"], function(e, t, n, r, s, i, a, o, l, c, d, u, p) {
    "use strict";

    function m(e) {
        d.PassActions.resetPassInfo(e), d.PassActions.fetchPassError(e)
    }

    function h(e, t, n, r, a) {
        return e ? t(new s.UserApiV2Client(a).ns("seen_state"), r, {
            subjectUserId: e.id
        }) : n(new i.NoAuthApiV2Client(a).ns("seen_state"), r, {})
    }

    function _(e, t) {
        return {
            file_identifier: e,
            shared_link_details: t ? {
                url: t
            } : void 0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), p = n.__importStar(p), t.DEFAULT_SYNCHRONOUS_MODE_TIMEOUT = 9e3;
    var f = (function() {
        function e() {}
        return e.constructFakeSeenStateInfo = function(e, t, n) {
            for (var r = n.seen_states, s = [], i = 0, a = r; i < a.length; i++) {
                var o = a[i];
                s.push(o.seen_state_user.user_id)
            }
            for (var l = 0, c = e; l < c.length; l++) {
                var d = c[l];
                if (!s.includes(d.user_id)) {
                    d.sharing_access_type && (d.sharing_access_type = this.convertToUnion(d.sharing_access_type));
                    var u = [],
                        p = {
                            seen_state_user: d,
                            when_last_seen: t,
                            seen_events: u
                        };
                    r.unshift(p)
                }
            }
            return n.seen_states = r, n
        }, e.convertToUnion = function(e) {
            return e ? o.Union.parse(e) : null
        }, e.parseSeenStatePassPlatform = function(e) {
            if (e) {
                switch (o.Union.parse(e).type) {
                    case "web":
                        return u.PassPlatform.WEB;
                    case "mobile":
                        return u.PassPlatform.MOBILE;
                    case "desktop":
                        return u.PassPlatform.DESKTOP
                }
            }
            return u.PassPlatform.UNKNOWN
        }, e.fetchSeenStateUsers = function(e, t, r, i, o) {
            return n.__awaiter(this, void 0, void 0, function() {
                var p, h, f, g;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return p = Date.now() / 1e3, h = l.FilePreviewSession.currentSession && l.FilePreviewSession.currentSession.id, c.ActionTimestampsTracker.record(u.LoggingActions.SEEN_STATE_USERS_BEGIN, h), [4, (new s.UserApiV2Client).ns("seen_state").rpc("get_seen_state_users", {
                                user_ids: r,
                                file_info: _(i, o)
                            }, {
                                subjectUserId: e
                            }).catch(a.catchApiError(function() {
                                return m(i), Promise.reject(void 0)
                            }))];
                        case 1:
                            return f = n.sent(), c.ActionTimestampsTracker.record(u.LoggingActions.SEEN_STATE_USERS_RECEIVE, h), g = this.constructFakeSeenStateInfo(f, p, t), d.PassActions.updateSeenStateInfo(i, g), [2]
                    }
                })
            })
        }, e.processAndUpdateSeenStateInfo = function(e, t, n, r) {
            var s = n[0],
                i = s.seen_state_info,
                a = s.seen_state_error,
                l = s.seen_state_cursor;
            if (a)
                if (r) d.PassActions.discontinueSeenStateInfo(t);
                else {
                    if ("no_permission" === o.Union.parse(a).type) return;
                    m(t)
                }
            else {
                for (var c = 0, u = i.seen_states; c < u.length; c++) {
                    var p = u[c];
                    p.seen_state_user.sharing_access_type = this.convertToUnion(p.seen_state_user.sharing_access_type), p.platform_type = this.parseSeenStatePassPlatform(p.platform_type)
                }
                r ? d.PassActions.updateSeenStateInfoContinue(t, i, l) : d.PassActions.updateSeenStateInfo(t, i, l)
            }
        }, e.fetchSeenStateInfo = function(e, t, r, i, o) {
            return n.__awaiter(this, void 0, void 0, function() {
                var l, p, h, f, g;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return c.ActionTimestampsTracker.record(u.LoggingActions.SEEN_STATE_BEGIN, o), [4, (new s.UserApiV2Client).ns("seen_state").rpc("get_seen_state_info", {
                                file_infos: [_(t, i)],
                                limit: r
                            }, {
                                subjectUserId: e.id
                            }).catch(a.catchApiError(function() {
                                return m(t), Promise.reject(void 0)
                            }))];
                        case 1:
                            return l = n.sent(), p = !0, h = l[0], f = h.seen_state_info, g = h.seen_state_error, p = !(!f || g), d.PassActions.updatePermissions(t, {
                                canReadSeenState: p
                            }), p || d.PassActions.updateSeenStateUnavailable(e.id, t), p && c.ActionTimestampsTracker.record(u.LoggingActions.SEEN_STATE_RECEIVE, o), this.processAndUpdateSeenStateInfo(e, t, l, !1), p && this.fetchRemainingSeenStateInfo(e, t, l, i), [2]
                    }
                })
            })
        }, e.fetchRemainingSeenStateInfo = function(e, t, n, r) {
            var s = n[0],
                i = s.seen_state_cursor;
            if (i && i.has_next) {
                var a = i.cursor_state;
                a && this.fetchSeenStateInfoContinue(e, t, a, 1e5, r)
            }
        }, e.fetchSeenStateInfoContinue = function(e, t, r, i, o) {
            return n.__awaiter(this, void 0, void 0, function() {
                var l;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, (new s.UserApiV2Client).ns("seen_state").rpc("get_seen_state_info/continue", {
                                file_infos: [_(t, o)],
                                cursor: r,
                                limit: i
                            }, {
                                subjectUserId: e.id
                            }).catch(a.catchApiError(function() {
                                return d.PassActions.discontinueSeenStateInfo(t), Promise.reject(void 0)
                            }))];
                        case 1:
                            return l = n.sent(), this.processAndUpdateSeenStateInfo(e, t, l, !0), [2]
                    }
                })
            })
        }, e.updateSeenStateOnResign = function(e, n, s, i, a, o) {
            var l;
            if (s) l = new r.JQueryAsyncTransport;
            else {
                var c = p.PASS_RESIGN_ONBEFOREUNLOAD_TIMEOUT || t.DEFAULT_SYNCHRONOUS_MODE_TIMEOUT;
                l = new r.JQuerySyncTransport(c)
            }
            var d = {
                beacon_user_id: i,
                context: o,
                shared_link_url: n.url,
                identifier: a
            };
            return h(e, function(e, t, n) {
                return e.rpc("update_timestamps_and_mark_offline", t, n)
            }, function(e, t, n) {
                return e.rpc("logged_out/mark_offline", t, n)
            }, {
                beacon_infos: [d]
            }, l)
        }, e
    })();
    t.SeenStateHelpers = f
}), define("modules/clean/react/pass/store", ["require", "exports", "tslib", "external/lodash", "modules/clean/flux/base_store", "modules/clean/react/pass/constants", "modules/clean/react/pass/utils", "modules/core/exception"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importStar(o);
    var l = (function() {
            function e() {
                this.userIdToUniqueIds = {}
            }
            return e.prototype.addUniqueUser = function(e, t) {
                e in this.userIdToUniqueIds || (this.userIdToUniqueIds[e] = {}), this.userIdToUniqueIds[e][t] = !0
            }, e.prototype.removeUniqueUser = function(e, t) {
                e in this.userIdToUniqueIds && t in this.userIdToUniqueIds[e] && (delete this.userIdToUniqueIds[e][t], Object.keys(this.userIdToUniqueIds[e]).length || delete this.userIdToUniqueIds[e])
            }, e.prototype.getOnlineUserIds = function() {
                return Object.keys(this.userIdToUniqueIds)
            }, e
        })(),
        c = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.seenStateInfos = {}, n.seenStateCursors = {}, n.presenceInfos = {}, n.passFetchingStatusMap = {}, n.userIdsWithoutSeenStateInfoMap = {}, n.passPermissions = {}, n
            }
            return n.__extends(t, e), t.prototype.presence = function(e) {
                return e in this.presenceInfos ? this.presenceInfos[e].getOnlineUserIds() : null
            }, t.prototype.seenStateInfo = function(e) {
                return this.seenStateInfos[e] || null
            }, t.prototype.identifiedSeenStateInfo = function(e) {
                if (e in this.seenStateInfos) {
                    return {
                        seen_states: r.reject(this.seenStateInfos[e].seen_states, a.AnonymousViewerUtils.isAnonymousSeenState)
                    }
                }
                return null
            }, t.prototype.seenStateCursorHasNext = function(e) {
                return e in this.seenStateCursors ? this.seenStateCursors[e].has_next : null
            }, t.prototype.seenStateCursorState = function(e) {
                return e in this.seenStateCursors ? this.seenStateCursors[e].cursor_state : null
            }, t.prototype.passFetchingStatus = function(e) {
                return this.passFetchingStatusMap[e] || i.PassFetchingStatus.NOT_YET_KNOWN
            }, t.prototype.getLinkAndGroupSeenStateInfo = function(e) {
                var t = null,
                    n = null;
                if (!this.seenStateInfos[e]) return {
                    linkSeenStateInfo: t,
                    groupSeenStateInfo: n
                };
                t = [], n = {};
                for (var r = 0, s = this.seenStateInfos[e].seen_states; r < s.length; r++) {
                    var i = s[r];
                    if (!a.AnonymousViewerUtils.isAnonymousSeenState(i)) {
                        var o = i.seen_state_user.sharing_access_type;
                        if (o) switch (o.type) {
                            case "link_only":
                                t.push(i);
                                break;
                            case "view_member_access":
                            case "edit_member_access":
                                for (var l = o.value.group_ids, c = 0, d = l; c < d.length; c++) {
                                    var u = d[c];
                                    u in n || (n[u] = []), n[u].push(i)
                                }
                        }
                    }
                }
                return {
                    linkSeenStateInfo: t,
                    groupSeenStateInfo: n
                }
            }, t.prototype.anonymousPresence = function(e) {
                return e in this.presenceInfos ? a.AnonymousViewerUtils.getAnonymousUserIds(this.presenceInfos[e].getOnlineUserIds()) : null
            }, t.prototype.userIdsWithoutSeenStateInfo = function(e) {
                return this.userIdsWithoutSeenStateInfoMap[e] || []
            }, t.prototype.isPassPermissionsPending = function(e) {
                var t = this.passPermissions[e];
                return null != t && !(t.hasOwnProperty("canReadPresence") && t.hasOwnProperty("canReadSeenState") && t.hasOwnProperty("canWritePresence"))
            }, t.prototype.getPassPermissions = function(e) {
                if (!e) return null;
                var t = this.passPermissions[e];
                return null == t || this.isPassPermissionsPending(e) ? null : t
            }, t.prototype.resetPassInfo = function(e) {
                delete this.seenStateInfos[e], delete this.seenStateCursors[e], delete this.presenceInfos[e], delete this.passFetchingStatusMap[e], delete this.passPermissions[e], delete this.userIdsWithoutSeenStateInfoMap[e], this.emit_change()
            }, t.prototype.setPassPermissionRequest = function(e) {
                this.passPermissions[e] = {}, this.setPassFetchingStatus(e, i.PassFetchingStatus.FETCHING)
            }, t.prototype.updatePermissions = function(e, t) {
                this.passPermissions.hasOwnProperty(e) && (this.passPermissions[e] = n.__assign({}, this.passPermissions[e], t), this.emit_change())
            }, t.prototype.markPassConcludedIfNecessary = function(e) {
                var t = this.passPermissions[e];
                !(t && t.hasOwnProperty("canReadPresence") && t.hasOwnProperty("canReadSeenState")) || t.canReadPresence || t.canReadSeenState || (this.resetPassInfo(e), this.setPassFetchingStatus(e, i.PassFetchingStatus.CONCLUDED), this.updateSeenStateInfoWithEmptyData(e))
            }, t.prototype.receivePresenceDelta = function(e, t, n, r) {
                o.assert([i.PassFetchingStatus.FETCHING, i.PassFetchingStatus.NOT_YET_KNOWN].indexOf(this.passFetchingStatus(t)) === -1, "Before handling a presence delta, you must call assurePresenceSuccessRegistered");
                var s = this.getOnlineUsersForFileId(t);
                this.updatePresenceInfos(t, n, r), this.updateUserIdsWithoutSeenStateInfo(e, t, s), this.emit_change()
            }, t.prototype.receivePresenceSnapshot = function(e, t, n) {
                o.assert([i.PassFetchingStatus.FETCHING, i.PassFetchingStatus.NOT_YET_KNOWN].indexOf(this.passFetchingStatus(t)) === -1, "Before handling a presence delta, you must call assurePresenceSuccessRegistered");
                var r = this.getOnlineUsersForFileId(t);
                this.presenceInfos[t] = new l, this.updatePresenceInfos(t, n, {}), this.updateUserIdsWithoutSeenStateInfo(e, t, r), this.emit_change()
            }, t.prototype.getOnlineUsersForFileId = function(e) {
                return e in this.presenceInfos || (this.presenceInfos[e] = new l), this.presenceInfos[e].getOnlineUserIds()
            }, t.prototype.updatePresenceInfos = function(e, t, n) {
                for (var r = 0, s = Object.keys(n); r < s.length; r++)
                    for (var i = s[r], a = 0, o = Object.keys(n[i]); a < o.length; a++) {
                        var l = o[a];
                        this.presenceInfos[e].removeUniqueUser(i, l)
                    }
                for (var c = 0, d = Object.keys(t); c < d.length; c++)
                    for (var u = d[c], p = 0, m = Object.keys(t[u]); p < m.length; p++) {
                        var l = m[p];
                        this.presenceInfos[e].addUniqueUser(u, l)
                    }
            }, t.prototype.updateUserIdsWithoutSeenStateInfo = function(e, t, n) {
                var s, o, l = a.AnonymousViewerUtils.filterAnonymousUserIds(this.getOnlineUsersForFileId(t)),
                    c = a.AnonymousViewerUtils.filterAnonymousUserIds(n),
                    d = r.difference(c, l),
                    u = r.difference(l, c);
                if (t in this.seenStateInfos) {
                    var p = void 0,
                        m = this.passFetchingStatus(t);
                    if ([i.PassFetchingStatus.SEEN_STATE_DISALLOWED, i.PassFetchingStatus.PASS_MIXED_SUCCESS].indexOf(m) !== -1) s = this.createMinimalBaseSeenStateInfo(t, l), o = s.userIdsWithoutSeenStateInfo, p = s.baseSeenStateInfo, this.updateSeenStateInfo(t, p);
                    else {
                        var h = this.makeSeenStateAgreeWithUpdatedPresence(t, l, d, u);
                        o = h.userIdsWithoutSeenStateInfo, p = h.baseSeenStateInfo
                    }
                } else o = [];
                this.userIdsWithoutSeenStateInfoMap[t] = o
            }, t.prototype.makeSeenStateAgreeWithUpdatedPresence = function(e, t, n, r) {
                for (var s = [], i = this.seenStateInfos[e], a = i.seen_states, o = [], l = [], c = [], d = Date.now() / 1e3, u = 0, p = a; u < p.length; u++) {
                    var m = p[u],
                        h = m.seen_state_user.user_id;
                    h && (s.push(h), r.includes(h) ? (m.when_last_seen = d, m.seen_events = m.seen_events || [], l.push(m)) : n.includes(h) ? (m.when_last_seen = d, m.seen_events = m.seen_events || [], m.seen_events.push({
                        ts: d
                    }), c.push(m)) : o.push(m))
                }
                return i.seen_states = l.concat(c, o), {
                    userIdsWithoutSeenStateInfo: t.filter(function(e) {
                        return !s.includes(e)
                    }),
                    baseSeenStateInfo: i
                }
            }, t.prototype.createMinimalBaseSeenStateInfo = function(e, t) {
                for (var n = [], s = [], i = 0, a = this.seenStateInfos[e].seen_states; i < a.length; i++) {
                    var o = a[i],
                        l = o.seen_state_user.user_id;
                    l && t.includes(l) && (n.push(o), s.push(l))
                }
                return {
                    userIdsWithoutSeenStateInfo: r.difference(t, s),
                    baseSeenStateInfo: {
                        seen_states: n
                    }
                }
            }, t.prototype.updateSeenStateInfo = function(e, t, n) {
                void 0 === n && (n = !1), o.assert([null, i.PassFetchingStatus.FETCHING].indexOf(this.passFetchingStatus(e)) === -1, "Before updating seen state info, you must call assureSeenStateSuccessRegistered or onFetchSeenStateDisabled"), n && e in this.seenStateInfos ? this.seenStateInfos[e].seen_states = this.seenStateInfos[e].seen_states.concat(t.seen_states) : this.seenStateInfos[e] = t, this.userIdsWithoutSeenStateInfoMap[e] = [], this.emit_change()
            }, t.prototype.updateSeenStateInfoWithEmptyData = function(e) {
                var t = {
                    seen_states: []
                };
                this.updateSeenStateInfo(e, t)
            }, t.prototype.setPassFetchingStatus = function(e, t) {
                this.passFetchingStatusMap[e] = t, this.emit_change()
            }, t.prototype.updateSeenStateCursor = function(e, t) {
                t && (this.seenStateCursors[e] = t, this.emit_change())
            }, t.prototype.assureSeenStateSuccessRegistered = function(e) {
                switch (this.passFetchingStatus(e)) {
                    case i.PassFetchingStatus.FETCHING:
                        this.setPassFetchingStatus(e, i.PassFetchingStatus.SEEN_STATE_SUCCESS);
                        break;
                    case i.PassFetchingStatus.PRESENCE_SUCCESS:
                        this.setPassFetchingStatus(e, i.PassFetchingStatus.PASS_SUCCESS);
                        break;
                    case i.PassFetchingStatus.SEEN_STATE_DISALLOWED:
                        o.reportStack("Debugging FETCHING_STATUS: pass fetching status is seen state disallowed", {
                            severity: o.SEVERITY.NONCRITICAL,
                            tags: ["pass:fetch_seen_state_disallowed"],
                            exc_extra: {
                                storeHasPresence: e in this.presenceInfos,
                                storeHasSeenState: e in this.seenStateInfos,
                                passPermissions: JSON.stringify(this.passPermissions[e]),
                                fetchingStatus: this.passFetchingStatusMap[e]
                            }
                        });
                        break;
                    case i.PassFetchingStatus.NOT_YET_KNOWN:
                        o.reportStack("Debugging FETCHING_STATUS: pass fetching status is not yet known", {
                            severity: o.SEVERITY.CRITICAL,
                            tags: ["pass:fetch_seen_state_success"],
                            exc_extra: {
                                fetchingStatus: this.passFetchingStatusMap[e]
                            }
                        })
                }
            }, t.prototype.onFetchSeenStateDisabled = function(e) {
                switch (this.passFetchingStatus(e)) {
                    case i.PassFetchingStatus.PRESENCE_SUCCESS:
                        this.setPassFetchingStatus(e, i.PassFetchingStatus.PASS_MIXED_SUCCESS);
                        break;
                    case i.PassFetchingStatus.FETCHING:
                        this.setPassFetchingStatus(e, i.PassFetchingStatus.SEEN_STATE_DISALLOWED);
                        break;
                    case i.PassFetchingStatus.NOT_YET_KNOWN:
                        o.reportStack("Debugging FETCHING_STATUS: pass fetching status is not yet known", {
                            severity: o.SEVERITY.CRITICAL,
                            tags: ["pass:fetch_seen_state_success"],
                            exc_extra: {
                                fetchingStatus: this.passFetchingStatusMap[e]
                            }
                        })
                }
            }, t.prototype.assurePresenceSuccessRegistered = function(e) {
                switch (this.passFetchingStatus(e)) {
                    case i.PassFetchingStatus.SEEN_STATE_SUCCESS:
                        this.setPassFetchingStatus(e, i.PassFetchingStatus.PASS_SUCCESS);
                        break;
                    case i.PassFetchingStatus.SEEN_STATE_DISALLOWED:
                        this.setPassFetchingStatus(e, i.PassFetchingStatus.PASS_MIXED_SUCCESS);
                        break;
                    case i.PassFetchingStatus.FETCHING:
                        this.setPassFetchingStatus(e, i.PassFetchingStatus.PRESENCE_SUCCESS);
                        break;
                    case i.PassFetchingStatus.NOT_YET_KNOWN:
                        o.reportStack("Debugging FETCHING_STATUS: pass fetching status is not yet known", {
                            severity: o.SEVERITY.CRITICAL,
                            tags: ["pass:fetch_presence_success"],
                            exc_extra: {
                                fetchingStatus: this.passFetchingStatusMap[e]
                            }
                        })
                }
            }, t.prototype._new_payload = function(e) {
                var t = e.action,
                    n = t.type,
                    r = t.data;
                if (r) {
                    var s = r.userId,
                        a = r.fileId,
                        o = r.seenStateInfo,
                        l = r.seenStateCursor,
                        c = r.onlineUniqueUsers,
                        d = r.offlineUniqueUsers,
                        u = r.partialPermission;
                    switch (s = s, a = a, o = o, l = l, c = c, d = d, u = u, n) {
                        case i.ActionTypes.FETCH_PASS_ERROR:
                            this.setPassFetchingStatus(a, i.PassFetchingStatus.ERROR);
                            break;
                        case i.ActionTypes.FETCH_PASS_CONCLUDED:
                            this.setPassFetchingStatus(a, i.PassFetchingStatus.CONCLUDED), this.updateSeenStateInfoWithEmptyData(a);
                            break;
                        case i.ActionTypes.PASS_PERMISSION_REQUEST:
                            this.setPassPermissionRequest(a);
                            break;
                        case i.ActionTypes.RECEIVE_PRESENCE_DELTA:
                            this.assurePresenceSuccessRegistered(a), this.receivePresenceDelta(s, a, c, d);
                            break;
                        case i.ActionTypes.RECEIVE_PRESENCE_SNAPSHOT:
                            this.assurePresenceSuccessRegistered(a), this.receivePresenceSnapshot(s, a, c);
                            break;
                        case i.ActionTypes.RESET_PASS_INFO:
                            this.resetPassInfo(a);
                            break;
                        case i.ActionTypes.UPDATE_PERMISSIONS:
                            this.updatePermissions(a, u), this.markPassConcludedIfNecessary(a);
                            break;
                        case i.ActionTypes.DISCONTINUE_SEEN_STATE_INFO:
                            l = {
                                cursor_state: "",
                                has_next: !1
                            }, this.updateSeenStateCursor(a, l);
                            break;
                        case i.ActionTypes.UPDATE_SEEN_STATE_INFO:
                            this.assureSeenStateSuccessRegistered(a), this.updateSeenStateInfo(a, o), this.updateSeenStateCursor(a, l);
                            break;
                        case i.ActionTypes.UPDATE_SEEN_STATE_INFO_CONTINUE:
                            this.assureSeenStateSuccessRegistered(a), this.updateSeenStateInfo(a, o, !0), this.updateSeenStateCursor(a, l);
                            break;
                        case i.ActionTypes.UPDATE_SEEN_STATE_UNAVAILABLE:
                            this.onFetchSeenStateDisabled(a), this.updateSeenStateInfoWithEmptyData(a), this.updateUserIdsWithoutSeenStateInfo(s, a, [])
                    }
                }
            }, t
        })(s.Store);
    t.PassStore = c, t.passStore = new c
}), define("modules/clean/react/pass/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e(e, t, n, r, s, i, a, o, l, c, d) {
            this.key = e, this.displayName = t, this.isActive = n, this.isViewer = r, this.incrementOverflowBasis = s, this.email = i, this.accessLevel = a, this.whenLastSeen = o, this.photoUrl = l, this.userId = c, this.platformType = d
        }
        return e
    })();
    t.UserInfo = n;
    var r = (function() {
        function e(e, t) {
            this.isLoaded = e, this.data = t
        }
        return e.create = function(t) {
            return new e(!0, t)
        }, e.createNotLoaded = function() {
            return new e(!1, null)
        }, e
    })();
    t.FacepileInfo = r;
    var s = (function() {
        function e(e, t) {
            this.fileId = e.file_id, this.url = t
        }
        return e
    })();
    t.BeaconFileData = s
}), define("modules/clean/react/teams/modals/limited_team_share_folder_modal", ["require", "exports", "tslib", "external/create-react-class", "react", "external/react-dom-factories", "external/prop-types", "external/react-addons-pure-render-mixin", "modules/clean/analytics", "modules/clean/filepath", "modules/clean/react/modal", "modules/core/browser", "modules/core/i18n", "modules/core/uri"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m) {
    "use strict";

    function h(e) {
        var t = d.Modal.showInstance(_(g, e));
        return f("team_folder_share"), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importStar(i), a = n.__importStar(a), o = n.__importStar(o), c = n.__importStar(c), u = n.__importStar(u);
    var _ = s.default.createElement,
        f = function(e) {
            return l.TeamsWebActionsLogger.log(e, null, null, null, !1, l.TeamsWebActionsLogger.LOG_CATEGORY.TEAM_INFO)
        },
        g = r.default({
            mixins: [o],
            displayName: "LimitedTeamShareFolderModal",
            propTypes: {
                fqPath: a.string.isRequired
            },
            _navigateToTeam: function() {
                return f("team_folder_share_invite"), u.redirect(new m.URI({
                    path: "/team",
                    query: {
                        invite_members: "",
                        tk: "team_folder_share_invite",
                        _camp: "modal"
                    }
                }))
            },
            render: function() {
                var e = c.filename(this.props.fqPath);
                return _(d.Modal, {
                    title: p._("Share %(folder_name)s").format({
                        folder_name: e
                    }),
                    acceptButtonText: p._("Invite"),
                    onAccept: this._navigateToTeam,
                    showButtonDivider: !0
                }, i.div({}, p._("To share the %(folder_name)s with someone, invite them to join your team!").format({
                    folder_name: e
                })))
            }
        });
    t.showModalInstance = h
}), define("modules/clean/sharing/action_types", ["require", "exports", "modules/clean/flux/action_type"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ShareModalActionTypes = n.withActionNamespace("share-modal-actions", {
        SHARE_MODAL_OPEN: "share-modal-open",
        SHARE_MODAL_CLOSE: "share-modal-close",
        RESET_MODAL_STATE: "reset-modal-state",
        OPEN_LINK_SETTINGS_MODAL: "open-link-settings-modal",
        OPEN_FOLDER_SETTINGS_MODAL: "open-folder-settings-modal",
        OPEN_SHARED_LINK_MODAL: "open-shared-link-modal",
        CLOSE_LINK_SETTINGS_MODAL: "close-link-settings-modal",
        CLOSE_FOLDER_SETTINGS_MODAL: "close-folder-settings-modal",
        CLOSE_SHARED_LINK_MODAL: "close-shared-link-modal",
        CLEAR_METADATA: "clear-metadata",
        FETCH_METADATA_REQUEST: "metadata-request",
        FETCH_METADATA_SUCCESS: "metadata-success",
        FETCH_METADATA_FAILURE: "metadata-failure",
        CLEAR_LINK_METADATA: "clear-link-metadata",
        FETCH_LINK_METADATA_REQUEST: "link-metadata-request",
        FETCH_LINK_METADATA_SUCCESS: "link-metadata-success",
        FETCH_LINK_METADATA_FAILURE: "link-metadata-failure",
        CLEAR_SHARING_PREFS: "clear-sharing-prefs",
        FETCH_SHARING_PREFS_REQUEST: "sharing-prefs-request",
        FETCH_SHARING_PREFS_SUCCESS: "sharing-prefs-success",
        FETCH_SHARING_PREFS_FAILURE: "sharing-prefs-failure",
        FETCH_MAGNET2018_REQUEST: "fetch-magnet2018-experiment",
        FETCH_MAGNET2018_SUCCESS: "fetch-magnet2018-success",
        FETCH_MAGNET2018_FAILURE: "fetch-magnet2018-failure",
        FETCH_LINK_SETTINGS_VARIANT: "fetch-link-settings-embed-experiment",
        FETCH_TWO_LINK_REDESIGN: "fetch-two-link-redesign",
        FETCH_PLUS_TO_PRO_TRIALS: "fetch-plus-to-pro-trials",
        FETCH_SHARE_MODAL_LINK_SETTINGS_VARIANT: "fetch-share-modal-link-settings-variant",
        FETCH_SHARE_MODAL_RACL_ON_GG_VARIANT: "fetch-share-modal-racl-on-gg-variant",
        ERROR_MESSAGE: "error-message",
        ERROR_MESSAGE_CLEAR: "error-message-clear",
        CLEAR_FILE_MEMBERSHIP: "clear-file-membership",
        FETCH_FILE_MEMBERSHIP_REQUEST: "fetch-file-membership-request",
        FETCH_FILE_MEMBERSHIP_SUCCESS: "fetch-file-membership-success",
        FETCH_FILE_MEMBERSHIP_FAILURE: "fetch-file-membership-failure",
        CLEAR_FOLDER_MEMBERSHIP: "clear-folder-membership",
        FETCH_FOLDER_MEMBERSHIP_REQUEST: "fetch-folder-membership-request",
        FETCH_FOLDER_MEMBERSHIP_SUCCESS: "fetch-folder-membership-success",
        FETCH_FOLDER_MEMBERSHIP_FAILURE: "fetch-folder-membership-failure",
        FETCH_USER_ACCOUNTS_REQUEST: "fetch-user-accounts-request",
        FETCH_USER_ACCOUNTS_SUCCESS: "fetch-user-accounts-success",
        FETCH_USER_ACCOUNTS_FAILURE: "fetch-user-accounts-failure",
        FETCH_USER_ACCOUNTS_CONTINUED_REQUEST: "fetch-user-accounts-continued-request",
        FETCH_USER_ACCOUNTS_CONTINUED_SUCCESS: "fetch-user-accounts-continued-success",
        CLEAR_FILE_MEMBERSHIP_LAST_SEEN_INFO: "clear-file-membership-last-seen-info",
        FETCH_FILE_MEMBER_COUNT_REQUEST: "fetch-file-member-count-request",
        FETCH_FILE_MEMBER_COUNT_SUCCESS: "fetch-file-member-count-success",
        CHANGE_RECIPIENTS: "change-recipients",
        CHANGE_RECIPIENT_MESSAGE: "change-recipient-message",
        CHANGE_RECIPIENT_ACCESS: "change-recipient-access",
        CREATE_LINK_REQUEST: "create-link-request",
        CREATE_LINK_SUCCESS: "create-link-success",
        CREATE_LINK_FAILURE: "create-link-failure",
        DISPLAY_CONTENT_NAME_INFO: "display-content-name-info",
        SEND_SHARE_REQUEST: "send-share-request",
        SEND_SHARE_SUCCESS: "send-share-success",
        SEND_SHARE_FAILURE: "send-share-failure",
        SHARE_FOLDER_REQUEST: "share-folder-request",
        SHARE_FOLDER_SUCCESS: "share-folder-success",
        SHARE_FOLDER_FAILURE: "share-folder-failure",
        SEND_FOLDER_SHARE_REQUEST: "send-folder-share-request",
        SEND_FOLDER_SHARE_SUCCESS: "send-folder-share-success",
        SEND_FOLDER_SHARE_FAILURE: "send-folder-share-failure",
        CHANGE_MEMBER_ACCESS_REQUEST: "change-member-access-request",
        CHANGE_MEMBER_ACCESS_SUCCESS: "change-member-access-success",
        CHANGE_MEMBER_ACCESS_FAILURE: "change-member-access-failure",
        MEMBER_ACTION_PENDING: "member-action-pending",
        MEMBER_ACTION_COMPLETE: "member-action-complete",
        REMOVE_MEMBER_SUCCESS: "remove-member-success",
        REMOVE_MEMBER_KEEP_ACCESS: "remove-member-keep-access",
        TRANSFER_OWNER_SUCCESS: "transfer-owner-success",
        FETCH_TEAM_POLICY_REQUEST: "fetch-team-policy-request",
        FETCH_TEAM_POLICY_SUCCESS: "fetch-team-policy-success",
        FETCH_MEMBER_COUNTS_REQUEST: "fetch-member-counts-request",
        FETCH_MEMBER_COUNTS_SUCCESS: "fetch-member-counts-success",
        HANDLE_CONTENT_NAME_CHANGE: "handle-content-name-change",
        HANDLE_CONTENT_NAME_FOCUS_CHANGE: "handle-content-name-focus-change",
        VALIDATE_CONTENT_NAME_SUCCESS: "validate-content-name-success",
        VALIDATE_CONTENT_NAME_ERROR: "validate-content-name-error",
        CHANGE_LINK_AUDIENCE_REQUEST: "change-link-audience-request",
        CHANGE_LINK_AUDIENCE_SUCCESS: "change-link-audience-success",
        CHANGE_LINK_AUDIENCE_FAILURE: "change-link-audience-failure",
        UNBLOCK_MEMBER_LIST_ON_PASS_LOAD: "unblock-member-list-on-pass-load",
        UPDATE_SHARING_SETTINGS_SUCCESS: "update-sharing-settings-success",
        DELETE_LINK_METADATA_SUCCESS: "delete-link-metadata-success",
        CHANGE_CREATE_COMMENT_CHECKBOX: "change-create-comment-checkbox"
    }), t.SharingActionTypes = n.withActionNamespace("sharing-actions", {
        CLEAR_EVERYTHING: "clear-everything",
        FETCH_METADATA_BATCH_ATTEMPT: "fetch-metadata-batch-attempt",
        FETCH_METADATA_BATCH_SUCCESS: "fetch-metadata-batch-success",
        FETCH_METADATA_BATCH_FAIL: "fetch-metadata-batch-fail"
    })
}), define("modules/clean/sharing/actions/share_modal", ["require", "exports", "tslib", "react", "modules/clean/analytics", "modules/clean/api_v2/error", "modules/clean/browse_interface", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/flux/dispatcher", "modules/clean/react/browse/constants", "modules/clean/react/modal", "modules/clean/react/pass/actions", "modules/clean/sharing/constants", "modules/clean/react/pass/constants", "modules/clean/react/pass/pass_helpers", "modules/clean/react/pass/store", "modules/clean/react_format", "modules/clean/sharing/action_types", "modules/clean/sharing/actions/sharing_actions", "modules/clean/sharing/api", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/api/util/types", "modules/clean/sharing/confirmation_modals/member_access_change_confirmation_modal", "modules/clean/sharing/confirmation_modals/relinquish_membership_confirmation_modal", "modules/clean/sharing/sharing_settings_modal", "modules/clean/sharing/access_level", "modules/clean/sharing/constants", "modules/clean/sharing/parent_folder_access_modal", "modules/clean/sharing/share_page/action_types", "modules/clean/sharing/stores/sharing_info", "modules/clean/sharing/stores/sharing_info_util", "modules/clean/sharing/sharing_settings_constants", "modules/clean/sharing/ui_util", "modules/clean/sharing/ui_notifications_util", "modules/clean/sharing/views/inherited_members", "modules/clean/teams/membership_discovery_util", "modules/clean/teams/modals/create_team_prompt_modal", "modules/clean/web_user_action_logger", "modules/clean/web_user_action_events", "modules/clean/legacy_pyxl_controllers/ajax_form", "modules/constants/teams", "modules/core/browser", "modules/core/i18n", "modules/clean/react/snackbar", "modules/clean/sharing/share_modal_util", "modules/clean/dbmodal_stack", "modules/clean/growth/gating"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E, v, I, b, y, C, M, T, N, A, k, w, L, P, F, R, O, D, x, U, B, H, G, V, q, j, W, K, Y) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), a = n.__importStar(a), H = n.__importDefault(H), G = n.__importStar(G), V = n.__importStar(V), q = n.__importStar(q);
    var z = r.default.createElement,
        Q = q.i18n_default_project("sharing")._,
        Z = (function() {
            function t(t, o, l, p, h, _) {
                var f = this;
                this.groupSeenStateInfo = null, this.linkSeenStateInfo = null, this.presentAccountIds = null, this.hasLoggedSet = {}, this.setPath = null, this.setUrl = null, this.changeAccess = function(e, t, n) {
                    void 0 === n && (n = !1);
                    var r = Promise.resolve({}),
                        s = e.memberId(),
                        i = f.getContentInfo(),
                        a = i.id,
                        o = f.sharingInfo.isNonUserRelativeContext();
                    if (t === N.MEMBER_ACTION.REMOVE) s !== f.user.account_id || o ? (r = (i.isFileFolder() ? f.client.getParentFolderAccess({
                        contentId: f.sharingInfo.parentSharedFolderId(),
                        memberId: s
                    }) : f.removeMember(a, e, n, i.isFolder())).then(function(t) {
                        f.showParentFolderAccessModalIfQualified("remove", e, t)
                    }), f.openShareModal()) : f.relinquishMembership(a, n);
                    else if (t === T.ACCESS_LEVEL.OWNER) r = f.client.transferContent({
                        contentId: a,
                        memberId: s
                    }).then(function() {
                        f.dispatch(S.ShareModalActionTypes.TRANSFER_OWNER_SUCCESS), R.sharingNotificationSuccess(Q("Made %(name)s the owner").format({
                            name: e.displayName()
                        })), f.fetchDataAndShowShareModal()
                    });
                    else {
                        var l = void 0;
                        if (i.isFileFolder() && t === T.ACCESS_LEVEL.READER) l = f.client.getParentFolderAccess({
                            contentId: f.sharingInfo.parentSharedFolderId(),
                            memberId: s,
                            accessLevel: t
                        });
                        else {
                            var c = f.getContentInfo().isFileFolder();
                            c && f.dispatch(S.ShareModalActionTypes.MEMBER_ACTION_PENDING, {
                                member: e
                            }), l = f.shareIfFileFolder(Q("Updating member access...")).then(function() {
                                return c && f.dispatch(S.ShareModalActionTypes.MEMBER_ACTION_COMPLETE, {
                                    member: e
                                }), f.changeMemberAccess(f.getContentInfo().id, e, t)
                            }).catch(function(t) {
                                f.reportShareFailure(t), c && f.dispatch(S.ShareModalActionTypes.MEMBER_ACTION_COMPLETE, {
                                    member: e
                                })
                            })
                        }
                        r = l.then(function(t) {
                            f.fetchInitialData(), j.Snackbar.complete(Q("Member access updated."), "sharing-notification"), f.showParentFolderAccessModalIfQualified("update", e, t)
                        })
                    }
                    return r.then(f.refreshSharedWithColumnContentData)
                }, this.changeRecipientAccess = function(e) {
                    f.dispatch(S.ShareModalActionTypes.CHANGE_RECIPIENT_ACCESS, {
                        newAccess: e
                    })
                }, this.changeRecipientMessage = function(e) {
                    f.dispatch(S.ShareModalActionTypes.CHANGE_RECIPIENT_MESSAGE, {
                        message: e
                    })
                }, this.changeCreateCommentCheckbox = function(e) {
                    f.dispatch(S.ShareModalActionTypes.CHANGE_CREATE_COMMENT_CHECKBOX, {
                        checked: e
                    })
                }, this.createSharedLink = function(e) {
                    f.log("CLICK_TIB_CREATE_LINK"), f.dispatch(S.ShareModalActionTypes.CREATE_LINK_REQUEST), f.sharingInfo.isMultipleLinkInterfaceEnabled() ? "editor" === e ? j.Snackbar.sync(Q("Creating edit link..."), !1, "sharing-notification") : j.Snackbar.sync(Q("Creating view link..."), !1, "sharing-notification") : j.Snackbar.sync(Q("Creating link..."), !1, "sharing-notification");
                    var t;
                    e && (t = {
                        access: b.linkAccessLevelToApi(e)
                    });
                    var n = f.getContentInfo(),
                        r = n.fileId() || n.displayPath();
                    return f.client.createSharedLink({
                        fileIdOrPath: r,
                        settings: t
                    }).then(function(t) {
                        f.dispatch(S.ShareModalActionTypes.CREATE_LINK_SUCCESS, {
                            linkMetadata: t
                        }), f.refreshSharedWithColumnLinkData(), f.sharingInfo.isMultipleLinkInterfaceEnabled() ? "editor" === e ? j.Snackbar.complete(Q("Edit link created."), "sharing-notification") : j.Snackbar.complete(Q("View link created."), "sharing-notification") : j.Snackbar.complete(Q("Link created."), "sharing-notification")
                    }).catch(i.catchApiError(function(e) {
                        return e instanceof i.AppError && e.error && "access_denied" === e.error[".tag"] ? f.getContentInfo().isFolder() ? R.sharingNotificationError(Q("You don’t have permission to create a link to this folder")) : R.sharingNotificationError(Q("You don’t have permission to create a link to this file")) : f.showStandardError(e), f.dispatch(S.ShareModalActionTypes.CREATE_LINK_FAILURE), Promise.reject(e)
                    }))
                }, this.fetchMetadataForFile = function(e) {
                    return E.SharingActions.loadFileMetadata({
                        user: f.user,
                        contentId: e.id,
                        sourceUrl: e.url(),
                        client: f.client
                    }).catch(i.catchApiError(f.handleLoadingError))
                }, this.fetchMetadataForFileFolder = function(e) {
                    var t, r, s = N.MEMBER_ACTION.ALL,
                        a = N.VALIDATE_PATH_PERMISSIONS_CONFIDENTIAL_AWARE,
                        o = {
                            actions: Object.keys(a),
                            listMembersArg: {
                                actions: s
                            },
                            shouldParseMetadataFromError: !0
                        },
                        l = !!f.sharingInfo.isNonUserRelativeContext();
                    return l && !f.user.is_cdm_member ? (t = function(e) {
                        return n.__awaiter(f, void 0, void 0, function() {
                            var t;
                            return n.__generator(this, function(n) {
                                return t = this.contentManagerValidateFolderPath(e), [2, this.client.validatePathContinue(t, !1)]
                            })
                        })
                    }, r = {
                        nsId: e.nsId(),
                        nsPath: e.nsPath()
                    }) : (t = f.client.validateFqPath, r = {
                        fqPath: e.displayPath(),
                        shareAsConfidential: f.sharingInfo.shareAsConfidential()
                    }), t(n.__assign({}, r, o)).then(function(e) {
                        var t = e.metadata,
                            n = e.inheritedMembers;
                        f.handleGetMetadataSuccess(t);
                        var r = f.getContentInfo();
                        f.listMembers({
                            contentId: r.id,
                            url: r.url(),
                            members: r.isFileFolder() && n || void 0,
                            isNonUserRelativeContext: l
                        })
                    }).catch(i.catchApiError(f.handleLoadingError))
                }, this.fetchMetadataForSharedFolder = function(e) {
                    return f.client.getMetadata({
                        contentId: e.id,
                        actions: Object.keys(N.ALPHA_FOLDER_METADATA_PERMISSIONS)
                    }).then(f.handleGetMetadataSuccess).catch(i.catchApiError(f.handleLoadingError))
                }, this.handleShowMembershipSuggestionModal = function(t, r, s, i, a) {
                    new Promise(function(t, n) {
                        e(["modules/clean/teams/membership_suggestion_modal"], t, n)
                    }).then(n.__importStar).then(function(e) {
                        return e.MembershipSuggestionModal.show({
                            isAdmin: t,
                            isFile: f.sharingInfo.contentInfo().isFile(),
                            contacts: r,
                            nsId: f.sharingInfo.contentInfo().id,
                            accessLevel: f.sharingInfo.recipientAccess(),
                            redirectUri: a,
                            teamSize: s,
                            experiments: i
                        })
                    })
                }, this.handleSetConfidentialClick = function(e, t) {
                    u.Modal.showInstance(r.default.createElement(O.SetInheritedMembersUIConfidentialModal, {
                        actionHandler: f,
                        initialIsConfidentialFolder: e,
                        contentInfo: f.getContentInfo(),
                        teamName: t,
                        onCancel: f.openShareModal,
                        userId: f.user.id
                    }))
                }, this.handleInheritedMemberAccessChange = function(e, t, n, s) {
                    var i = f.getContentInfo(),
                        a = f.getSharingInfo();
                    u.Modal.showInstance(r.default.createElement(O.SingleInheritedUserAccessChangeModal, {
                        actionHandler: f,
                        member: e,
                        teamName: t,
                        userId: f.user.id,
                        isSharedFolder: i.isSharedFolder(),
                        parentFolderName: a.parentFolderName(),
                        currentFolderName: a.name(),
                        isUserSelf: e.memberId() === f.user.account_id,
                        isDowngrading: n,
                        newAccessLevel: s
                    }))
                }, this.handleMemberAccessChange = function(e, t) {
                    var n = e.displayName();
                    if (t === N.MEMBER_ACTION.REMOVE || t === T.ACCESS_LEVEL.OWNER) {
                        var r = t === N.MEMBER_ACTION.REMOVE && e.memberId() === f.user.account_id,
                            s = f.getContentInfo().isFolder(),
                            i = f.getContentInfo().isNestedSharedFolder(),
                            a = e.permissions.leave_a_copy && e.permissions.leave_a_copy.allow,
                            o = function(n) {
                                f.changeAccess(e, t, n === !0)
                            },
                            l = f.openShareModal,
                            c = f.getSharingInfo().parentFolderName(),
                            d = f.getSharingInfo().isConfidentialFolder(),
                            u = e.type() === I.MembershipType.GROUPS;
                        r ? C.showRelinquishMembershipConfirmationModal(s, i, o, l, a, d) : y.showMemberAccessChangeConfirmationModal(n, t, s, i, a, o, l, d, c, u)
                    } else f.changeAccess(e, t)
                }, this.handleGetMetadataSuccess = function(e) {
                    f.dispatch(S.ShareModalActionTypes.FETCH_METADATA_SUCCESS, {
                        metadata: e
                    }), c.Dispatcher.dispatch({
                        type: k.SharePageActionTypes.FETCH_METADATA_SUCCESS,
                        metadata: e,
                        user: f.user
                    })
                }, this.handleLinkSettingsClick = function() {
                    s.TeamsWebActionsLogger.log("open_link_settings_modal"), f.log("OPEN_LINK_SETTINGS_MODAL"), u.Modal.showInstance(r.default.createElement(M.SharingSettingsModal, {
                        actionHandler: f,
                        sharingInfo: f.sharingInfo,
                        sharingPrefs: f.sharingInfo.sharingPrefs(),
                        client: f.client,
                        currentTab: P.LINK_SETTINGS,
                        folderName: f.sharingInfo.name(),
                        isFolder: f.sharingInfo.isFolder(),
                        linkMetadata: f.sharingInfo.linkMetadata(),
                        onDismiss: function() {
                            return u.Modal.close()
                        },
                        permissions: f.sharingInfo.permissions(),
                        ownerTeam: f.sharingInfo.ownerTeam(),
                        user: f.user
                    }))
                }, this.handleLoadingError = function(e) {
                    e instanceof i.AppError ? ("not_a_member" === e.error[".tag"] || "no_access" === e.error[".tag"] ? (R.sharingNotificationError(Q("You don’t have permission to share this folder")), u.Modal.close()) : "invalid_id" === e.error[".tag"] && (R.sharingNotificationError(Q("This folder can’t be shared")), u.Modal.close()), f.dispatch(S.ShareModalActionTypes.FETCH_METADATA_FAILURE, {
                        reason: e.error && e.error.bad_path && e.error.bad_path[".tag"]
                    })) : (f.showStandardError(e), u.Modal.close())
                }, this.handleSetConfidential = function(e, t) {
                    void 0 === t && (t = !1);
                    var n = f.getContentInfo(),
                        r = n.isSharedFolder() ? n.sharedFolderId().toString() : void 0,
                        s = function(e) {
                            return f.handleGetMetadataSuccess(e), e
                        },
                        a = function(e, t, n) {
                            return f.client.setConfidentiality({
                                contentId: e,
                                confidential: t,
                                keepInheritedMembers: n
                            }).then(s)
                        };
                    return r ? a(r, e, t) : f.client.share({
                        fqPath: f.getFqPath(),
                        confidential: e
                    }).then(s).catch(function(n) {
                        if (n instanceof i.AppError && n.error && n.error.bad_path && "already_shared" === n.error.bad_path[".tag"]) {
                            var r = b.folderMetadataApiToRecord(n.error.bad_path);
                            f.handleGetMetadataSuccess(r);
                            return a(f.getContentInfo().sharedFolderId().toString(), e, t)
                        }
                        return Promise.reject(n)
                    })
                }, this.openShareModal = function() {
                    D.shouldShowMembershipSuggestionBanner() && (K.DBModalStack.unregister(D.MembershipDiscoveryEvents.INVITE_MODAL_CLOSED, W.showShareModalCallback), K.DBModalStack.register(D.MembershipDiscoveryEvents.INVITE_MODAL_CLOSED, W.showShareModalCallback)), u.Modal.showInstance(z(f.shareModalClass, {
                        actionHandler: f
                    }))
                }, this.recipientsChange = function(e, t) {
                    return void 0 === t && (t = ""), Promise.resolve({}).then(function() {
                        if (D.isOnExpUjMagnet2018(f.sharingInfo.ownerTeam()) || f.sharingInfo.expUjMagnet2018ShouldLogExposure() && D.isLoggedExpUjMagnet2018(f.sharingInfo.ownerTeam())) {
                            var n = D.filterSuggestableUsers(f.user, e, f.sharingInfo.expUjMagnet2018LastEmails()),
                                r = n.promise,
                                s = n.emails,
                                i = n.ts;
                            r && s && i && f.handleExpUjMagnet2018FetchRequest(r, s, i)
                        }
                        f.dispatch(S.ShareModalActionTypes.CHANGE_RECIPIENTS, {
                            recipientTokens: e,
                            recipientRawInput: t
                        })
                    })
                }, this.redirectToPath = function(t, r) {
                    if (null != f.setUrl && null != f.setPath && f.getSharingInfo().getInitialProps().content && f.getSharingInfo().fqPath()) {
                        var s = function(t) {
                            r && new Promise(function(t, n) {
                                e(["modules/clean/sharing/share_modal_util"], t, n)
                            }).then(n.__importStar).then(function(e) {
                                return (0, e.showShareModal)(f.user, t, {
                                    origin: m.SHARE_ACTION_ORIGIN_TYPE.PARENT_FOLDER_MODAL
                                }, f.setPath, f.setUrl)
                            })
                        };
                        t !== f.getSharingInfo().fqPath() ? (f.setUrl({
                            path: t,
                            qargs: {
                                share: "1"
                            }
                        }), f.setPath({
                            path: t
                        })) : s(f.getSharingInfo().getInitialProps().content)
                    } else {
                        var i = a.browse_uri_for_fq_path(f.user, t);
                        r && i.updateQuery({
                            shareoptions: "1"
                        }), V.redirect(i.toString())
                    }
                }, this.refreshSharedWithColumnContentData = function() {
                    f.getContentInfo().isFolder() ? c.Dispatcher.dispatch({
                        type: d.SharedWithActionType.SIGNAL_SHARED_FOLDER_DATA_OUT_OF_DATE,
                        data: {}
                    }) : c.Dispatcher.dispatch({
                        type: d.SharedWithActionType.SIGNAL_SHARED_FILE_DATA_OUT_OF_DATE,
                        data: {
                            fileIds: [f.getContentInfo().id]
                        }
                    })
                }, this.handleShareClick = function(e) {
                    return f.sharingInfo.contentInfo().pathExists() ? f.sendShare(e) : f.setContentNameAndSendShare(e)
                }, this.failSnackbarWithHelpCenter = function(e, t) {
                    var n = function() {
                        V.open_tab(t)
                    };
                    j.Snackbar.show(r.default.createElement(j.Snackbar, {
                        actionButtonText: Q("Learn more"),
                        closeButtonText: Q("Close"),
                        onActionClick: n,
                        title: e,
                        variant: "fail",
                        id: "sharing-notification"
                    }))
                }, this.shareIfFileFolder = function(e, t) {
                    if (j.Snackbar.sync(e, !0, "sharing-notification"), !f.getContentInfo().isFileFolder()) return Promise.resolve({});
                    if (f.sharingInfo.shareFolderPromise()) return f.sharingInfo.shareFolderPromise();
                    var n = void 0;
                    return null != f.sharingInfo.shouldSyncThisFolder() && (n = f.sharingInfo.shouldSyncThisFolder() ? "default" : "not_synced"), f.shareFolderSimple(f.getFqPath(), f.sharingInfo.shareAsConfidential(), n, t)
                }, this.reportShareFailure = function(e) {
                    e instanceof i.RateLimitError ? f.failSnackbarWithHelpCenter(Q("Couldn’t share. Folder updates in progress."), "/help/9259") : e instanceof i.AppError && "internal_error" === e.error[".tag"] ? f.failSnackbarWithHelpCenter(Q("Sharing unsuccessful. This folder has too many files."), "/help/files-folders/share-with-others#foldersize") : j.Snackbar.fail(F.convertIfHTML(F.genAddMemberErrorMessage(e)), "sharing-notification")
                }, this.showParentFolderAccessModalIfQualified = function(e, t, n) {
                    null != n && u.Modal.showInstance(r.default.createElement(A.ParentFolderAccessModal, {
                        contentInfo: f.getContentInfo(),
                        memberAccessLevelResult: n,
                        memberDisplayName: t.displayName() || "",
                        originalAction: e,
                        isInContentManager: f.sharingInfo.isNonUserRelativeContext(),
                        onClose: f.openShareModal,
                        onParentFolderClicked: f.redirectToPath
                    }))
                }, this.parseParentFolderAccessError = function(e) {
                    var t = e.error;
                    if ("member_error" === e.error[".tag"] && (t = e.error.member_error), "no_explicit_access" === t[".tag"]) return b.memberAccessLevelApiToRecord(f.user.id, t);
                    f.showStandardError(e)
                }, this.updateLinkSettings = function() {}, this.waitForAllMembersLoaded = function() {
                    if (f.sharingInfo.areMembersFullyLoaded()) return Promise.resolve({});
                    var e = f.sharingInfo.fetchingMembersRequest();
                    return e && e.promise || Promise.resolve({})
                }, this.client = t, this.user = o, this.shareModalClass = l, this.setPath = p || null, this.setUrl = h || null, this.contentManagerValidateFolderPath = _
            }
            return t.prototype.initializeShareModal = function(e, t) {
                void 0 === t && (t = {});
                var n = e.contentInfo;
                return c.Dispatcher.dispatch({
                    type: S.ShareModalActionTypes.SHARE_MODAL_OPEN,
                    data: {
                        initialProps: t,
                        shareModalInfoAttrs: e
                    },
                    contentIds: L.getContentIdsForContentInfo(n),
                    user: this.user
                }), this.sharingInfo = w.sharingInfoStore.getSharingInfo(this.user.id, n.id), this.fetchInitialData()
            }, t.prototype.fetchDataAndShowShareModal = function() {
                this.fetchInitialData(), this.openShareModal()
            }, t.prototype.fetchInitialData = function() {
                var t = this.sharingInfo.contentInfo(),
                    r = this.sharingInfo.isNonUserRelativeContext();
                this.beginTime = Date.now(), this.fetchPassInfo(), D.shouldShowMembershipSuggestionBanner() && new Promise(function(t, n) {
                    e(["modules/clean/teams/membership_suggestion_banner"], t, n)
                }).then(n.__importStar);
                var s = [];
                return t.isFileFolder() ? s.push(this.fetchMetadataForFileFolder(t)) : (s.push(this.listMembers({
                    contentId: t.id,
                    url: t.url(),
                    isNonUserRelativeContext: r
                })), t.isFile() ? s.push(this.fetchMetadataForFile(t)) : t.isSharedFolder() && s.push(this.fetchMetadataForSharedFolder(t))), s.push(this.fetchMemberCounts()), s.push(this.fetchTeamPolicy()), s.push(this.fetchSharingPrefs()), this.sharingInfo.canShareLink() && !r && t.isMounted() && s.push(this.fetchLinkMetadata()), s.push(this.fetchTwoLinkRedesignVariant()), s.push(this.fetchLinkSettingsEmbedStatus()), s.push(this.fetchShareModalLinkSettingsVariant()), s.push(this.fetchPlusToProTrialsVariant()), s.push(this.fetchShareModalRaclOnGgVariant()), Promise.all(s)
            }, t.prototype.fetchTwoLinkRedesignVariant = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Y.growthCheckGating(this.user, "sharing_modal_two_link_redesign")];
                            case 1:
                                return e = t.sent(), this.dispatch(S.ShareModalActionTypes.FETCH_TWO_LINK_REDESIGN, e), [2]
                        }
                    })
                })
            }, t.prototype.fetchLinkSettingsEmbedStatus = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Y.growthCheckGating(this.user, "sharegrowth_link_settings_embed")];
                            case 1:
                                return e = t.sent(), this.dispatch(S.ShareModalActionTypes.FETCH_LINK_SETTINGS_VARIANT, e), [2]
                        }
                    })
                })
            }, t.prototype.fetchShareModalLinkSettingsVariant = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Y.growthCheckGating(this.user, "share_modal_link_settings")];
                            case 1:
                                return e = t.sent(), this.dispatch(S.ShareModalActionTypes.FETCH_SHARE_MODAL_LINK_SETTINGS_VARIANT, e), [2]
                        }
                    })
                })
            }, t.prototype.fetchPlusToProTrialsVariant = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Y.growthCheckGating(this.user, "expand_in_plus_to_pro_trials")];
                            case 1:
                                return e = t.sent(), this.dispatch(S.ShareModalActionTypes.FETCH_PLUS_TO_PRO_TRIALS, e), [2]
                        }
                    })
                })
            }, t.prototype.fetchShareModalRaclOnGgVariant = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Y.growthCheckGating(this.user, "share_modal_racl_on_gg")];
                            case 1:
                                return e = t.sent(), this.dispatch(S.ShareModalActionTypes.FETCH_SHARE_MODAL_RACL_ON_GG_VARIANT, e), [2]
                        }
                    })
                })
            }, t.prototype.fetchPassInfo = function() {
                var e = this;
                this.sharingInfo.shouldBlockMemberListOnPassLoad() && setTimeout(function() {
                    return e.dispatch(S.ShareModalActionTypes.UNBLOCK_MEMBER_LIST_ON_PASS_LOAD)
                }, 4e3);
                var t = this.getPassFetchingInfo(),
                    n = t.shouldFetchPass,
                    r = t.fileId;
                if (n && r) {
                    this.clearCachedPassInfo();
                    var s = f.passStore.passFetchingStatus(r);
                    if (h.fetchingStatusIsSuccessful(s)) {
                        var i = f.passStore.getLinkAndGroupSeenStateInfo(r),
                            a = i.groupSeenStateInfo,
                            o = i.linkSeenStateInfo;
                        this.groupSeenStateInfo = a, this.linkSeenStateInfo = o, this.presentAccountIds = f.passStore.presence(r)
                    } else s === h.PassFetchingStatus.NOT_YET_KNOWN && _.PassHelpers.setup({
                        user: this.user,
                        fileData: this.getFileData(),
                        prevFileData: null,
                        shouldWritePresence: !1,
                        skipSharingEndpoints: !0
                    })
                }
            }, t.prototype.getClient = function() {
                return this.client
            }, t.prototype.getSharingInfo = function() {
                return this.sharingInfo
            }, t.prototype.clearCachedPassInfo = function() {
                var e;
                e = [null, null, null], this.groupSeenStateInfo = e[0], this.linkSeenStateInfo = e[1], this.presentAccountIds = e[2]
            }, t.prototype.getPassInfo = function() {
                var e, t = this.getContentInfo();
                if (t.isFolder()) return {
                    groupSeenStateInfo: {},
                    linkSeenStateInfo: [],
                    presentAccountIds: [],
                    passFetchingStatus: h.PassFetchingStatus.ERROR
                };
                if (this.groupSeenStateInfo && this.linkSeenStateInfo && this.presentAccountIds) return {
                    groupSeenStateInfo: this.groupSeenStateInfo,
                    linkSeenStateInfo: this.linkSeenStateInfo,
                    presentAccountIds: this.presentAccountIds,
                    passFetchingStatus: h.PassFetchingStatus.PASS_SUCCESS
                };
                var n = this.getPassFetchingInfo().fileId;
                if (!n) return e = [{},
                    [],
                    []
                ], this.groupSeenStateInfo = e[0], this.presentAccountIds = e[1], {
                    groupSeenStateInfo: {},
                    linkSeenStateInfo: [],
                    presentAccountIds: [],
                    passFetchingStatus: h.PassFetchingStatus.ERROR
                };
                var r = f.passStore.getPassPermissions(n),
                    s = f.passStore.passFetchingStatus(n);
                if (!h.fetchingStatusIsComplete(s)) return {
                    groupSeenStateInfo: {},
                    linkSeenStateInfo: [],
                    presentAccountIds: [],
                    passFetchingStatus: h.PassFetchingStatus.FETCHING
                };
                if (null == r || !r.canReadPresence) return {
                    groupSeenStateInfo: {},
                    linkSeenStateInfo: [],
                    presentAccountIds: [],
                    passFetchingStatus: h.PassFetchingStatus.ERROR
                };
                var i = f.passStore.getLinkAndGroupSeenStateInfo(n),
                    a = i.linkSeenStateInfo,
                    o = i.groupSeenStateInfo;
                return this.linkSeenStateInfo = a, this.groupSeenStateInfo = o, this.presentAccountIds = (f.passStore.presence(n) || []).slice(), this.isContentInfoForFilePreview(t) && this.presentAccountIds.indexOf(this.user.account_id) < 0 && this.presentAccountIds.push(this.user.account_id), {
                    groupSeenStateInfo: this.groupSeenStateInfo,
                    linkSeenStateInfo: this.linkSeenStateInfo,
                    presentAccountIds: this.presentAccountIds,
                    passFetchingStatus: s
                }
            }, t.prototype.getPassFetchingInfo = function() {
                var e = this.getContentInfo();
                if (e.extras.origin && ["BROWSE_FILE_ACTIONS", "BROWSE_FILE_FACEPILE", "BROWSE_FILE_ROW", "PREVIEW_PAGE", "PREVIEW_PAGE_FACEPILE", "PAPER_INTEGRATION", "GOOGLE_DSS"].indexOf(e.extras.origin) >= 0 && e.isFile()) {
                    var t = e.extras.fileId,
                        n = this.isContentInfoForFilePreview(e);
                    return {
                        shouldFetchPass: !!t && !n && e.isFile(),
                        fileId: t
                    }
                }
                return {
                    shouldFetchPass: !1
                }
            }, t.prototype.getUrl = function() {
                var e = this.sharingInfo.linkMetadata();
                return e ? e.url : void 0
            }, t.prototype.getFileData = function(e) {
                var t = this.getPassFetchingInfo().fileId;
                return {
                    file: {
                        file_id: void 0 === t ? null : t
                    },
                    url: e
                }
            }, t.prototype.getContentInfo = function() {
                return this.sharingInfo.contentInfo()
            }, t.prototype.dispatch = function(e, t) {
                void 0 === t && (t = {}), c.Dispatcher.dispatch({
                    type: e,
                    data: t,
                    contentIds: [this.getContentInfo().id],
                    user: this.user
                })
            }, t.prototype.changeMemberAccessSimple = function(e, t, n) {
                return this.client.updateMember({
                    contentId: e,
                    memberId: t,
                    accessLevel: n
                })
            }, t.prototype.changeMemberAccess = function(e, t, n) {
                var r = this,
                    s = t.access_type;
                return this.dispatch(S.ShareModalActionTypes.CHANGE_MEMBER_ACCESS_REQUEST, {
                    member: t,
                    newAccess: n
                }), this.changeMemberAccessSimple(e, t.memberId(), n).then(function(e) {
                    if (e.access_level && e.warning) return r.dispatch(S.ShareModalActionTypes.CHANGE_MEMBER_ACCESS_FAILURE, {
                        member: t,
                        prevAccess: e.access_level
                    }), e
                }).catch(i.catchApiError(function(e) {
                    return r.dispatch(S.ShareModalActionTypes.CHANGE_MEMBER_ACCESS_FAILURE, {
                        member: t,
                        prevAccess: s
                    }), r.parseParentFolderAccessError(e)
                }))
            }, t.prototype.fetchLinkMetadata = function() {
                var e = this;
                return "/" !== this.getContentInfo().displayPath() ? (this.dispatch(S.ShareModalActionTypes.FETCH_LINK_METADATA_REQUEST), this.client.sharedLinkInfo({
                    fileIdOrPath: this.getContentInfo().idForLink()
                }).then(function(t) {
                    e.dispatch(S.ShareModalActionTypes.FETCH_LINK_METADATA_SUCCESS, {
                        sharedLinks: t
                    })
                }).catch(function() {
                    e.dispatch(S.ShareModalActionTypes.FETCH_LINK_METADATA_FAILURE), e.isContentInfoForPaper(e.getContentInfo()) || e.sharingInfo.isNonUserRelativeContext() || (e.showStandardError(), u.Modal.close())
                })) : Promise.resolve({})
            }, t.prototype.fetchMemberCounts = function() {
                var e = this.getContentInfo();
                return e.isFile() ? E.SharingActions.fetchFileMemberCount({
                    user: this.user,
                    contentId: e.id,
                    limit: N.FETCH_FILE_MEMBER_COUNT_LIMIT
                }) : e.isSharedFolder() || e.isFolder() && e.isInSharedFolder() ? E.SharingActions.fetchFolderMemberCount({
                    user: this.user,
                    contentId: e.isSharedFolder() ? e.sharedFolderId() : e.nsId(),
                    client: this.client
                }) : Promise.resolve({})
            }, t.prototype.fetchSharingPrefs = function() {
                var e = this;
                return this.dispatch(S.ShareModalActionTypes.FETCH_SHARING_PREFS_REQUEST), this.client.getSharingPrefs().then(function(t) {
                    e.dispatch(S.ShareModalActionTypes.FETCH_SHARING_PREFS_SUCCESS, {
                        sharingPrefs: t
                    })
                })
            }, t.prototype.onShareModalUnmount = function(e) {
                this.teardownPass();
                var t = e && e.serializeInputData() || {};
                this.dispatch(S.ShareModalActionTypes.SHARE_MODAL_CLOSE, t)
            }, t.prototype.fetchTeamPolicy = function() {
                var e = this;
                return this.dispatch(S.ShareModalActionTypes.FETCH_TEAM_POLICY_REQUEST), this.client.getCurrentAccountCached().then(function(t) {
                    e.dispatch(S.ShareModalActionTypes.FETCH_TEAM_POLICY_SUCCESS, {
                        teamPolicy: t.team && t.team.sharing_policies
                    })
                })
            }, t.prototype.handleExpUjMagnet2018FetchRequest = function(e, t, n) {
                var r = this;
                this.dispatch(S.ShareModalActionTypes.FETCH_MAGNET2018_REQUEST, {
                    promise: e,
                    emails: t,
                    ts: n
                }), e.then(function(t) {
                    var s = D.maybeLogExpUjMagnet2018Exposure(r.sharingInfo.expUjMagnet2018ShouldLogExposure(), t, r.user);
                    r.dispatch(S.ShareModalActionTypes.FETCH_MAGNET2018_SUCCESS, {
                        promise: e,
                        ts: n,
                        suggestableUserData: t,
                        loggedExposure: s
                    })
                }).catch(function() {
                    r.dispatch(S.ShareModalActionTypes.FETCH_MAGNET2018_FAILURE, {
                        ts: n
                    })
                })
            }, t.prototype.handleContentNameChange = function(e) {
                var t = "SIMPLIFIED_WIZARD_UI::CONTENT_NAME_CHANGE";
                this.hasLoggedSet[t] || (this.sharingExperimentsLog(t), this.hasLoggedSet[t] = !0), this.dispatch(S.ShareModalActionTypes.HANDLE_CONTENT_NAME_CHANGE, {
                    name: e
                })
            }, t.prototype.handleContentNameFocusChange = function(e) {
                this.dispatch(S.ShareModalActionTypes.HANDLE_CONTENT_NAME_FOCUS_CHANGE, {
                    focus: e
                })
            }, t.prototype.handleUpdateFilePolicy = function(e, t) {
                this.handleUpdateSharingSettings(e);
                var n = this.getSharingInfo().filePolicy(),
                    r = this.getPassFetchingInfo().fileId;
                if (r)
                    if (n.viewer_info_policy === I.ViewerInfoPolicy.disabled && t.viewer_info_policy === I.ViewerInfoPolicy.enabled) this.clearCachedPassInfo(), p.PassActions.resetPassInfo(r), p.PassActions.fetchPassError(r), this.dispatch(S.ShareModalActionTypes.CLEAR_FILE_MEMBERSHIP_LAST_SEEN_INFO);
                    else {
                        var s = n.audience === I.LinkAudience.members != (t.audience === I.LinkAudience.members),
                            i = n.viewer_info_policy === I.ViewerInfoPolicy.enabled && t.viewer_info_policy === I.ViewerInfoPolicy.disabled;
                        if (s || i) {
                            this.clearCachedPassInfo();
                            var a = this.getUrl();
                            i && this.listMembers({
                                contentId: r,
                                url: a,
                                isNonUserRelativeContext: this.sharingInfo.isNonUserRelativeContext()
                            });
                            var o = this.isContentInfoForFilePreview(this.getContentInfo());
                            _.PassHelpers.setup({
                                user: this.user,
                                fileData: this.getFileData(a),
                                prevFileData: null,
                                shouldWritePresence: o,
                                skipSharingEndpoints: !0
                            })
                        }
                    }
            }, t.prototype.handleUpdateSharingSettings = function(e) {
                this.dispatch(S.ShareModalActionTypes.UPDATE_SHARING_SETTINGS_SUCCESS, {
                    metadata: e
                })
            }, t.prototype.listMembers = function(e) {
                var t = e.contentId,
                    n = e.url,
                    r = e.members,
                    s = e.isNonUserRelativeContext,
                    i = void 0 !== s && s;
                return E.SharingActions.listMembers({
                    user: this.user,
                    contentId: t,
                    isFolder: this.sharingInfo.isFolder(),
                    url: n,
                    members: r,
                    client: this.client,
                    isNonUserRelativeContext: i
                })
            }, t.prototype.addMembers = function(e, t, n, r) {
                void 0 === n && (n = !1);
                var s = e.map(function(e) {
                    return {
                        member: b.createUnionScalar(e.contactType(), e.contactId()),
                        access_level: b.accessLevelConstToApi(e.access_type)
                    }
                });
                return this.client.addMembersWithAccessLevel({
                    contentId: t,
                    members: s,
                    customMessage: r,
                    quiet: n
                })
            }, t.prototype.isContentInfoForFilePreview = function(e) {
                return ("PREVIEW_PAGE" === e.extras.origin || "PREVIEW_PAGE_FACEPILE" === e.extras.origin) && !e.isFolder()
            }, t.prototype.isContentInfoForPaper = function(e) {
                return e.extras && "PAPER_INTEGRATION" === e.extras.origin
            }, t.prototype.log = function(e, t) {
                void 0 === t && (t = {}), F.logTiburonEvent(this.getContentInfo(), this.user.id, e, t)
            }, t.prototype.logIfHaventBefore = function(e, t, n) {
                void 0 === t && (t = {}), void 0 === n && (n = !0), this.hasLoggedSet[e] || (this.hasLoggedSet[e] = !0, n && (t.timing = Date.now() - this.beginTime), this.log(e, t))
            }, t.prototype.onClickX = function(e) {
                e && e.finishLogging(!0), u.Modal.close()
            }, t.prototype.redirectToBrowseUrl = function(e) {
                if (null != this.setUrl) this.setUrl({
                    path: e
                });
                else {
                    var t = a.browse_uri_for_fq_path(this.user, e);
                    V.redirect(t.toString())
                }
            }, t.prototype.redirectToUpgrade = function() {
                V.redirect("/upgrade?oqa=spw")
            }, t.prototype.refreshSharedWithColumnLinkData = function() {
                c.Dispatcher.dispatch({
                    type: d.SharedWithActionType.SIGNAL_SHARED_LINK_DATA_OUT_OF_DATE,
                    data: {
                        fileFqPaths: [this.getContentInfo().displayPath()]
                    }
                })
            }, t.prototype.relinquishMembershipSimple = function(e, t) {
                var n = this;
                return this.client.relinquishMembership({
                    contentId: e,
                    leaveACopy: t
                }).then(function() {
                    u.Modal.close(), n.redirectToBrowseUrl("/")
                })
            }, t.prototype.relinquishMembership = function(e, t) {
                var n = this.getContentInfo();
                return this.relinquishMembershipSimple(e, t).then(function() {
                    n.isFolder() ? R.sharingNotificationSuccess(Q("Folder access removed.")) : R.sharingNotificationSuccess(Q("File access removed."))
                })
            }, t.prototype.removeMemberSimple = function(e, t, n) {
                return this.client.removeMember({
                    contentId: e,
                    memberId: t,
                    leaveACopy: n
                })
            }, t.prototype.removeMember = function(e, t, n, r) {
                var s = this;
                return this.dispatch(S.ShareModalActionTypes.MEMBER_ACTION_PENDING, {
                    member: t
                }), this.removeMemberSimple(e, t.memberId(), n).then(function(e) {
                    return s.fetchInitialData().then(function() {
                        if (e && null != e.access_level && null != e.warning) return s.dispatch(S.ShareModalActionTypes.REMOVE_MEMBER_KEEP_ACCESS, {
                            member: t,
                            access: e.access_level
                        }), e;
                        r ? R.sharingNotificationSuccess(Q("Folder access removed.")) : R.sharingNotificationSuccess(Q("File access removed.")), s.dispatch(S.ShareModalActionTypes.REMOVE_MEMBER_SUCCESS, {
                            member: t
                        }), s.fetchMemberCounts()
                    })
                }).catch(i.catchApiError(function(e) {
                    return s.dispatch(S.ShareModalActionTypes.MEMBER_ACTION_COMPLETE, {
                        member: t
                    }), s.parseParentFolderAccessError(e)
                }))
            }, t.prototype.setContentNameAndSendShare = function(e) {
                var t = this,
                    n = this.sharingInfo.contentNameInputValue(),
                    r = l.parent_dir(this.sharingInfo.fqPath()),
                    s = F.getNewFolderPathFromContentName(n, r),
                    i = !this.sharingInfo.isNonUserRelativeContext(),
                    o = a.browse_uri_for_fq_path(this.user, s);
                o.updateQuery("show_share_success_snackbar", "1");
                var c, d;
                return D.isLoggedExpUjMagnet2018(this.sharingInfo.ownerTeam()) ? (c = !1, i && (d = a.browse_uri_for_fq_path(this.user, s))) : c = i, new Promise(function(r, a) {
                    new v.SharingApi(t.user).validate_new_sf_path(n, s, function() {
                        t.dispatch(S.ShareModalActionTypes.VALIDATE_CONTENT_NAME_SUCCESS, {
                            newFolderPath: s
                        }), t.sendShare(e, {
                            keepModalOpen: i,
                            suppressSuccessSnackbar: c,
                            redirectUri: d
                        }).then(function() {
                            t.sharingInfo.shareAsConfidential() && U.WebUserActionLog.log(t.user.id, B.WebUserActionLogEvent.CONF_BY_CREATE_CONFIDENTIAL_FOLDER, {
                                ns_id: t.sharingInfo.contentId(),
                                who_has_access: B.WebUserActionLogExtraValue.SPECIFIC_PEOPLE,
                                location: t.sharingInfo.isNonUserRelativeContext() ? B.WebUserActionLogExtraValue.CONTENT_MANAGER : B.WebUserActionLogExtraValue.BROWSE
                            }), i && !D.isLoggedExpUjMagnet2018(t.sharingInfo.ownerTeam()) && V.redirect(o.toString()), r()
                        })
                    }, function(e) {
                        t.sharingExperimentsLog("SIMPLIFIED_WIZARD_UI::INVALID_CONTENT_NAME");
                        var n = H.default.extract_errors(e.responseText);
                        t.dispatch(S.ShareModalActionTypes.VALIDATE_CONTENT_NAME_ERROR, {
                            errorMsg: n.folder_name && n.folder_name.message_text
                        }), a()
                    })
                })
            }, t.prototype.setSharedLinks = function(e) {
                this.dispatch(S.ShareModalActionTypes.FETCH_LINK_METADATA_SUCCESS, {
                    sharedLinks: e
                })
            }, t.prototype.deleteLinkMetadata = function(e) {
                this.dispatch(S.ShareModalActionTypes.DELETE_LINK_METADATA_SUCCESS, {
                    deletedLink: e
                })
            }, t.prototype.sendShare = function(e, t) {
                var n = this;
                void 0 === t && (t = {
                    keepModalOpen: !1,
                    suppressSuccessSnackbar: !1,
                    redirectUri: void 0
                }), this.log("CLICK_TIB_SEND_BUTTON");
                var s, a = Date.now(),
                    l = this.isNewlySharedContent();
                return this.recipientsChange(e.getContacts()).then(function() {
                    return n.sharingInfo.contactsError().level === F.ContactsErrorLevel.Error ? Promise.reject({}) : (n.dispatch(S.ShareModalActionTypes.SEND_SHARE_REQUEST), s = b.contactsToMembers(n.sharingInfo.recipientTokens()), n.shareIfFileFolder(g.reactFormat(Q("Sharing <st>%(folder_name)s</st>..."), {
                        st: r.default.createElement("strong", null),
                        folder_name: o.Emstring.em_snippet(n.sharingInfo.name(), N.SNIPPET_SIZES.FILENAME)
                    })))
                }).then(function() {
                    return n.client.addMembers({
                        accessLevel: n.sharingInfo.recipientAccess(),
                        contentId: n.sharingInfo.contentInfo().id,
                        customMessage: n.sharingInfo.recipientMessage(),
                        members: s,
                        addMessageAsComment: !!n.sharingInfo.recipientMessage() && n.sharingInfo.isShareMessageAsCommentChecked() && n.sharingInfo.permissionsObj().canShareMessageAsComment()
                    })
                }).catch(i.catchApiError(function(e) {
                    return n.dispatch(S.ShareModalActionTypes.SEND_SHARE_FAILURE), n.reportShareFailure(e), n.log("SHARE_MODAL_SEND_FAIL", {
                        timing: Date.now() - a,
                        num_recipients: s.length
                    }), Promise.reject({})
                })).then(function() {
                    n.dispatch(S.ShareModalActionTypes.SEND_SHARE_SUCCESS), n.fetchMemberCounts(), t.suppressSuccessSnackbar || R.showInBandShareSuccessSnackbar(n.sharingInfo.name()), n.log("SHARE_MODAL_SEND_SUCCESS", {
                        timing: Date.now() - a,
                        num_recipients: s.length
                    });
                    var i = n.sharingInfo.getInitialProps();
                    i.onSuccessSharing && i.onSuccessSharing(), e && e.finishLogging(!1), n.refreshSharedWithColumnContentData(), G.SHOW_CREATE_TEAM_MODAL_AFTER_SHARING && l && s.length >= 2 ? u.Modal.showInstance(r.default.createElement(x.CreateTeamPromptModal, {
                        invitedMembers: n.sharingInfo.recipientTokens().filter(function(e) {
                            return e.email !== n.user.email
                        })
                    })) : (D.showExpUjMagnet2018PostShareIfQualified(n.sharingInfo.ownerTeam(), n.handleShowMembershipSuggestionModal, n.sharingInfo.expUjMagnet2018SuggestableUserDataPromise(), n.sharingInfo.expUjMagnet2018SuggestableUserData(), t.redirectUri), t.keepModalOpen || u.Modal.close())
                })
            }, t.prototype.isNewlySharedContent = function() {
                var e = this.getContentInfo();
                return e.isFileFolder() || e.isFile() && !this.sharingInfo.hasNonOwnerMembers()
            }, t.prototype.shareFolderSimple = function(e, t, n, r) {
                var s = this;
                void 0 === t && (t = !1);
                var a = function(e) {
                        s.dispatch(S.ShareModalActionTypes.SHARE_FOLDER_SUCCESS, {
                            metadata: e
                        }), c.Dispatcher.dispatch({
                            type: k.SharePageActionTypes.FETCH_METADATA_SUCCESS,
                            metadata: e,
                            user: s.user
                        })
                    },
                    o = {
                        fqPath: e,
                        confidential: t,
                        syncSetting: n,
                        folderPolicy: r
                    },
                    l = this.client.share(o);
                return this.dispatch(S.ShareModalActionTypes.SHARE_FOLDER_REQUEST, {
                    promise: l
                }), l.then(a).catch(function(e) {
                    if (e instanceof i.AppError && e.error && e.error.bad_path && "already_shared" === e.error.bad_path[".tag"]) {
                        return a(b.folderMetadataApiToRecord(e.error.bad_path))
                    }
                    return s.dispatch(S.ShareModalActionTypes.SHARE_FOLDER_FAILURE), Promise.reject(e)
                })
            }, t.prototype.getFqPath = function() {
                return this.sharingInfo.isNonUserRelativeContext() && !this.user.is_cdm_member ? "ns:" + this.getContentInfo().nsId() + this.getContentInfo().nsPath() : this.getContentInfo().displayPath()
            }, t.prototype.sharingExperimentsLog = function(e, t) {
                void 0 === t && (t = {});
                var n = this.getContentInfo().extras.modalSessionId;
                t.modalSessionId = t.modalSessionId || n, s.SharingExperimentsLogger.log(this.user.id, e, t)
            }, t.prototype.teardownPass = function() {
                this.clearCachedPassInfo(), this.getPassFetchingInfo().shouldFetchPass && _.PassHelpers.teardown({
                    user: this.user,
                    fileData: this.getFileData(),
                    async: !0,
                    shouldWritePresence: !1
                })
            }, t.prototype.showStandardError = function(e) {
                var t = e && e.message;
                R.sharingNotificationError(t || Q("There was a problem completing this request."))
            }, t
        })();
    t.ShareModalActionHandler = Z
}), define("modules/clean/sharing/actions/sharing_actions", ["require", "exports", "modules/clean/flux/dispatcher", "modules/clean/react/pass/action_timestamps", "modules/clean/react/pass/constants", "modules/clean/sharing/action_types", "modules/clean/sharing/api/client", "modules/clean/sharing/constants", "modules/clean/sharing/share_page/action_types", "modules/clean/sharing/stores/sharing_info", "modules/core/exception"], function(e, t, n, r, s, i, a, o, l, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SharingActions = {
        loadFileMetadataBatch: function(e, t) {
            return new a.FileShareApiClient({
                userId: e.id
            }).getMetadataBatchAlpha({
                contentIds: t,
                actions: Object.keys(o.ALPHA_FILE_METADATA_PERMISSIONS)
            }).then(function(t) {
                return n.Dispatcher.dispatch({
                    type: i.SharingActionTypes.FETCH_METADATA_BATCH_SUCCESS,
                    user: e,
                    data: t
                })
            })
        },
        loadFileMetadata: function(e) {
            var t = e.user,
                r = e.contentId,
                s = e.sourceUrl,
                d = e.client,
                u = c.sharingInfoStore.getSharingInfo(t.id, r);
            if (u && u.fetchingMetadataPromise()) return u.fetchingMetadataPromise();
            d = d || new a.FileShareApiClient({
                userId: t.id
            });
            var p = d.getMetadataAlpha({
                contentId: r,
                actions: Object.keys(o.ALPHA_FILE_METADATA_PERMISSIONS),
                sourceURL: s
            }).then(function(e) {
                n.Dispatcher.dispatch({
                    type: i.SharingActionTypes.FETCH_METADATA_BATCH_SUCCESS,
                    user: t,
                    data: [e]
                }), n.Dispatcher.dispatch({
                    type: l.SharePageActionTypes.FETCH_METADATA_SUCCESS,
                    metadata: e,
                    user: t
                })
            });
            return n.Dispatcher.dispatch({
                type: i.ShareModalActionTypes.FETCH_METADATA_REQUEST,
                contentIds: [r],
                data: {
                    promise: p
                },
                user: t
            }), p
        },
        listMembers: function(e) {
            var t = e.user,
                o = e.contentId,
                l = e.isFolder,
                u = e.limit,
                p = e.url,
                m = e.members,
                h = e.client,
                _ = e.previewSessionId,
                f = void 0 === _ ? null : _,
                g = e.includeSeenState,
                S = void 0 === g || g,
                E = e.isNonUserRelativeContext,
                v = void 0 !== E && E;
            d.assert(!u || u <= 100, "listMembers not implemented for limit > 100");
            var I = u || 9999999,
                b = c.sharingInfoStore.getSharingInfo(t.id, o);
            if (b) {
                var y = b.fetchingMembersRequest();
                if (y && I <= y.limitNonNull) return y.promise;
                if (b.hasDisplayableMembers() && I < b.members().getMemberCount()) return Promise.resolve({})
            }
            var C = Math.random().toString(),
                M = !l;
            h || (h = l ? new a.FolderShareApiClient({
                userId: t.id,
                isNonUserRelativeContext: v
            }) : new a.FileShareApiClient({
                userId: t.id,
                isNonUserRelativeContext: v
            }));
            var T, N = function(e) {
                return e ? (n.Dispatcher.dispatch({
                    type: i.ShareModalActionTypes.FETCH_USER_ACCOUNTS_CONTINUED_REQUEST,
                    contentIds: [o],
                    user: t
                }), h.listMembersContinue({
                    cursor: e,
                    url: p,
                    isAlpha: M
                }).then(function(e) {
                    n.Dispatcher.dispatch({
                        type: i.ShareModalActionTypes.FETCH_USER_ACCOUNTS_CONTINUED_SUCCESS,
                        contentIds: [o],
                        data: {
                            members: e,
                            requestId: C
                        },
                        user: t
                    }), N(e.cursor)
                })) : Promise.resolve({})
            };
            return r.ActionTimestampsTracker.record(s.LoggingActions.LIST_MEMBERS_BEGIN, f), T = m ? Promise.resolve(m) : h.listMembers({
                contentId: o,
                url: p,
                limit: u,
                isAlpha: M,
                includeSeenState: S
            }), T = T.then(function(e) {
                r.ActionTimestampsTracker.record(s.LoggingActions.LIST_MEMBERS_RECEIVE, f), n.Dispatcher.dispatch({
                    type: i.ShareModalActionTypes.FETCH_USER_ACCOUNTS_SUCCESS,
                    contentIds: [o],
                    data: {
                        members: e,
                        requestId: C
                    },
                    user: t
                }), u || N(e.cursor)
            }), n.Dispatcher.dispatch({
                type: i.ShareModalActionTypes.FETCH_USER_ACCOUNTS_REQUEST,
                contentIds: [o],
                data: {
                    limitNonNull: I,
                    requestId: C,
                    promise: T
                },
                user: t
            }), T
        },
        fetchFileMemberCount: function(e) {
            var t = e.user,
                o = e.contentId,
                l = e.limit,
                c = e.url,
                d = e.client,
                u = e.countGroupsAsMembers,
                p = void 0 !== u && u,
                m = e.previewSessionId,
                h = void 0 === m ? null : m,
                _ = e.runViewerInfoChecks,
                f = void 0 !== _ && _;
            d = d || new a.FileShareApiClient({
                userId: t.id
            }), r.ActionTimestampsTracker.record(s.LoggingActions.MEMBER_COUNTS_BEGIN, h);
            var g = d.getMemberCounts({
                contentId: o,
                limit: l,
                url: c,
                countGroupsAsMembers: p,
                runViewerInfoChecks: f
            });
            return n.Dispatcher.dispatch({
                type: i.ShareModalActionTypes.FETCH_FILE_MEMBER_COUNT_REQUEST,
                contentIds: [o],
                user: t
            }), g.then(function(e) {
                r.ActionTimestampsTracker.record(s.LoggingActions.MEMBER_COUNTS_RECEIVE, h), n.Dispatcher.dispatch({
                    type: i.ShareModalActionTypes.FETCH_FILE_MEMBER_COUNT_SUCCESS,
                    contentIds: [o],
                    data: e,
                    user: t
                })
            })
        },
        fetchFolderMemberCount: function(e) {
            var t = e.user,
                r = e.contentId,
                s = e.client;
            return n.Dispatcher.dispatch({
                type: i.ShareModalActionTypes.FETCH_MEMBER_COUNTS_REQUEST,
                data: {},
                contentIds: [r],
                user: t
            }), s.getMemberCounts({
                contentId: r
            }).then(function(e) {
                n.Dispatcher.dispatch({
                    type: i.ShareModalActionTypes.FETCH_MEMBER_COUNTS_SUCCESS,
                    data: {
                        memberCounts: e
                    },
                    contentIds: [r],
                    user: t
                })
            })
        }
    }
}), define("modules/clean/sharing/api", ["require", "exports", "tslib", "jquery", "modules/clean/ajax"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var i = (function() {
        function e(e) {
            this.user = e
        }
        return e.prototype.get_sync_vars_for_ns_id = function(e, t, n) {
            var r = {
                ns_id: e,
                sub_path: t
            };
            this._make_request("/sharing/get_sync_vars_for_ns_id", r, n, null, !0)
        }, e.prototype.validate_new_sf_path = function(e, t, n, r) {
            var s = {
                share_type: "new",
                folder_name: e,
                path: t
            };
            this._make_request("/share_ajax/validate_folder", s, n, r, !0)
        }, e.prototype.validate_shareable_existing_sf_path = function(e, t, n) {
            var r = {
                share_type: "shareable_existing",
                path: e
            };
            this._make_request("/share_ajax/validate_folder", r, t, n, !0)
        }, e.prototype._make_request = function(t, n, i, a, o, l) {
            void 0 === o && (o = !1), void 0 === l && (l = !0);
            var c = {
                url: t,
                data: n,
                success: function(s, a, o) {
                    i(o), r.default(document).trigger(e.REQUEST_SUCCEEDED_EVENT, {
                        request_url: t,
                        ns_id: n.ns_id || null
                    })
                },
                error: function(e) {
                    a && a(e)
                }
            };
            l && (c.subject_user = this.user.id), o ? s.FormWebRequest(c) : s.WebRequest(c)
        }, e.REQUEST_SUCCEEDED_EVENT = "db:sharing_api:request_succeeded", e
    })();
    t.SharingApi = i
}), define("modules/clean/sharing/confirmation_modals/confirm_recursive_policy_change_modal", ["require", "exports", "tslib", "external/react", "external/purify", "modules/clean/react/modal", "modules/core/i18n", "spectrum/modal"], function(e, t, n, r, s, i, a, o) {
    "use strict";

    function l(e) {
        var t = e.isTeamSharedFolder ? s.sanitize(c("Your changes will be applied to this team folder and any folders inside it.")) : s.sanitize(c("Your changes will be applied to this folder and any folders inside it."));
        i.Modal.showInstance(r.createElement(o.UtilityModal, {
            ariaLabel: c("Save settings?"),
            title: c("Save settings?"),
            overlayClickClose: !0,
            primaryAction: c("Save settings"),
            secondaryAction: c("Cancel"),
            onPrimaryAction: e.onConfirm,
            onSecondaryAction: e.onCancel,
            open: !0,
            onRequestClose: e.onCancel
        }, t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importStar(s), a = n.__importStar(a);
    var c = a.i18n_default_project("sharing")._;
    t.confirmRecursivePolicyChange = l
}), define("modules/clean/sharing/confirmation_modals/member_access_change_confirmation_modal", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/react_format", "modules/clean/sharing/confirmation_modals/confirm_with_option_modal", "modules/clean/sharing/constants", "modules/clean/react/modal", "modules/core/browser", "modules/core/i18n"], function(e, t, n, r, s, i, a, o, l, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), c = n.__importStar(c), d = n.__importStar(d);
    var u = d.i18n_default_project("sharing")._,
        p = function(e, t, n, d, p, m, h, _, f, g) {
            void 0 === e && (e = ""), void 0 === p && (p = !1), void 0 === _ && (_ = !1), void 0 === g && (g = !1);
            var S, E, v, I, b, y = s.Emstring.em_snippet(e, 40),
                C = null;
            if (t === o.MEMBER_ACTION.REMOVE) {
                if (v = u("Remove %(name)s?").format({
                        name: y
                    }), n) {
                    S = d && !_ ? f ? i.reactFormat(u("If you remove <strong>%(name)s</strong>, they won’t be able to see future changes to this shared folder. Keep in mind that anyone who can access <strong>%(parentname)s</strong> will still be able to access this folder."), {
                        strong: r.default.createElement("strong", null),
                        name: y,
                        parentname: f
                    }) : i.reactFormat(u("If you remove <strong>%(name)s</strong>, they won’t be able to see future changes to this shared folder. Keep in mind that anyone who can access the parent folder will still be able to access this folder."), {
                        strong: r.default.createElement("strong", null),
                        name: y
                    }) : i.reactFormat(u("If you remove <strong>%(name)s</strong>, they won’t be able to see future changes to this shared folder."), {
                        strong: r.default.createElement("strong", null),
                        name: y
                    }), p && (C = u("Let %(name)s keep a copy of this shared folder").format({
                        name: y
                    }))
                } else S = g ? i.reactFormat(u("Keep in mind, if group members have a shared link to this file, they might still be able to view or edit it.")) : i.reactFormat(u("Keep in mind, if they have a shared link to this file, they might still be able to view or edit it.")), I = u("More about links"), b = function() {
                    return c.open_tab("https://help.dropbox.com/files-folders/share/remove-link")
                };
                E = u("Remove")
            } else v = u("Make %(name)s the owner of this folder?").format({
                name: y
            }), S = i.reactFormat(u("Only <strong>%(name)s</strong> will be able to unshare this folder or change folder settings."), {
                strong: r.default.createElement("strong", null),
                name: y
            }), E = u("Make owner");
            return l.Modal.showInstance(r.default.createElement(a.ConfirmWithOptionModal, {
                autoClose: !1,
                confirmText: E,
                cancelText: u("Cancel"),
                link: I,
                onConfirm: m,
                onCancel: h,
                onClickLink: b,
                optionLabel: C,
                showOption: null != C,
                title: v
            }, S))
        };
    t.showMemberAccessChangeConfirmationModal = p
}), define("modules/clean/sharing/content_info", ["require", "exports", "tslib", "external/immutable"], function(e, t, n, r) {
    "use strict";

    function s(e) {
        var t = (e.isFolder ? e.targetNsId : e.fileId) || e.fqPath;
        if (null === t) throw new Error("Not enough fields provided for extras");
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var i = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.createFromParams = function(e) {
            var n = new a(e);
            return new t({
                extras: n,
                id: s(n)
            })
        }, t.prototype.setNsId = function(e) {
            var t = this.setIn(["extras", "targetNsId"], e);
            return t.set("id", s(t.extras))
        }, t.prototype.setFQPath = function(e) {
            var t = this.setIn(["extras", "fqPath"], e);
            return t.set("id", s(t.extras))
        }, t.prototype.isFolder = function() {
            return this.extras.isFolder
        }, t.prototype.isFile = function() {
            return !this.isFolder()
        }, t.prototype.isFileFolder = function() {
            return this.isFolder() && !this.isSharedFolder()
        }, t.prototype.isSharedFolder = function() {
            return Boolean(this.extras.targetNsId)
        }, t.prototype.isTeamSharedFolder = function() {
            return this.extras.isTeamSharedFolder
        }, t.prototype.isInSharedFolder = function() {
            return Boolean(this.extras.nsId && this.extras.nsId !== this.extras.userHomeNs)
        }, t.prototype.isNestedSharedFolder = function() {
            return this.isInSharedFolder() && this.isSharedFolder()
        }, t.prototype.isMounted = function() {
            return !this.extras.url
        }, t.prototype.url = function() {
            return this.extras.url
        }, t.prototype.pathExists = function() {
            return Boolean(this.extras.exists)
        }, t.prototype.name = function() {
            return this.displayPath() ? this.displayPath().split("/").pop() : this.filename()
        }, t.prototype.idForLink = function() {
            var e = this.extras.fileId || this.extras.fqPath;
            if (!e) throw new Error("No identifiers for getting links");
            return e
        }, t.prototype.sharedFolderId = function() {
            var e = this.extras.targetNsId;
            if (!e) throw new Error("No shared folder ID");
            return e
        }, t.prototype.displayPath = function() {
            return this.extras.fqPath
        }, t.prototype.fileId = function() {
            return this.extras.fileId
        }, t.prototype.filename = function() {
            return this.extras.filename
        }, t.prototype.nsId = function() {
            if (!this.extras.nsId) throw new Error("Can't determine nsId");
            return this.extras.nsId
        }, t.prototype.nsPath = function() {
            if (null === this.extras.nsPath) throw new Error("Can't determine nsPath");
            return this.extras.nsPath
        }, t.prototype.sjid = function() {
            return this.extras.sjid
        }, t.prototype.teamGroupInfo = function() {
            return this.extras && this.extras.teamGroupInfo
        }, t
    })(r.Record({
        extras: null,
        id: null
    }, "ContentInfo"));
    t.ContentInfo = i;
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        exists: !0,
        fileId: null,
        filename: null,
        fqPath: null,
        isFolder: null,
        isTeamSharedFolder: !1,
        modalSessionId: null,
        nsId: null,
        nsPath: null,
        origin: null,
        sjid: null,
        targetNsId: null,
        url: null,
        userHomeNs: null,
        teamGroupInfo: null
    }, "ContentInfoExtras"));
    t.ContentInfoExtras = a
}), define("modules/clean/sharing/delete_link_modal", ["require", "exports", "tslib", "modules/clean/ajax", "react", "modules/clean/em_string", "modules/clean/react/modal", "modules/clean/sharing/constants", "modules/clean/sharing/ui_notifications_util", "spectrum/modal", "modules/core/i18n"], function(e, t, n, r, s, i, a, o, l, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importDefault(s), o = n.__importStar(o), d = n.__importStar(d);
    var u = d.i18n_default_project("sharing")._,
        p = function(e) {
            var t = e.client,
                n = e.url,
                r = e.contentName,
                d = e.onDeleteLink,
                p = e.onCancel;
            r = i.Emstring.em_snippet(r, o.SNIPPET_SIZES.FILENAME);
            var m = function() {
                    return t.revokeSharedLink({
                        url: n
                    }).then(function() {
                        var e = u("Deleted link to “%(name)s”").format({
                            name: r
                        });
                        l.sharingNotificationSuccess(e), a.Modal.close(), d && d()
                    })
                },
                h = u("Delete link to “%(name)s”?").format({
                    name: r
                }),
                _ = function() {
                    a.Modal.close(), p && p()
                };
            a.Modal.showInstance(s.default.createElement(c.UtilityModal, {
                ariaLabel: h,
                title: h,
                overlayClickClose: !0,
                primaryAction: u("Delete"),
                secondaryAction: u("Cancel"),
                onPrimaryAction: m,
                onSecondaryAction: _,
                open: !0,
                onRequestClose: _,
                overlayClassName: "file-viewer-modal-overlay"
            }, u("This link will no longer work for anyone who has it.")))
        };
    t.deleteLinkWithConfirm = p;
    var m = function(e) {
        var t = e.client,
            n = e.tkey,
            s = e.contentName,
            c = e.onDeleteLink,
            d = e.onCancel;
        if (s = i.Emstring.em_snippet(s, o.SNIPPET_SIZES.FILENAME), null === n) return void a.Modal.close();
        var p = function() {
            return r.WebRequest({
                url: "/sm/disable/" + n,
                type: "POST",
                data: {
                    tkey: n
                },
                subject_user: t.userId,
                success: function() {
                    var e = u("Deleted link to “%(name)s”").format({
                        name: s
                    });
                    l.sharingNotificationSuccess(e), a.Modal.close(), c && c()
                }
            })
        };
        return a.SimpleModal.show({
            autoclose: !1,
            body_html: u("This link will no longer work for anyone who has it."),
            cancel_completed_callback: d,
            cancel_text: u("Cancel"),
            confirm_callback: p,
            confirm_text: u("Delete"),
            title_text: u("Delete link to “%(name)s”?").format({
                name: s
            }),
            style: "default-maestro"
        })
    };
    t.deleteLinkWithConfirmLegacy = m
}), define("modules/clean/sharing/member_constructors", ["require", "exports", "modules/clean/sharing/api/types/metadata", "modules/clean/react/pass/utils", "modules/core/i18n", "modules/core/user_i18n"], function(e, t, n, r, s, i) {
    "use strict";

    function a() {
        var e = new n.PermissionSetting({
            allow: !1
        });
        return new n.MemberPermissions({
            make_editor: e,
            make_viewer: e,
            make_owner: e,
            remove: e
        })
    }

    function o(e) {
        var t = r.AnonymousViewerUtils.getAnonymousUserIds(e),
            s = c("Guest");
        return t.map(function(e) {
            return new n.UserMembershipInfo({
                access_type: "reader",
                account: new n.BasicAccount({
                    account_id: e,
                    display_name: s,
                    familiar_name: s,
                    given_name: s,
                    surname: ""
                }),
                account_id: e,
                initials: r.AnonymousViewerUtils.getAnonymousViewerInitials(s),
                is_inherited: !1,
                permissions: a(),
                same_team: !1,
                time_last_seen: null
            })
        })
    }

    function l(e) {
        return e ? e.map(function(e) {
            var t = e.seen_state_user,
                r = t.user_id,
                s = t.display_name,
                o = t.email,
                l = t.photo_circle_url,
                c = e.when_last_seen;
            return new n.UserMembershipInfo({
                access_type: "reader",
                account: new n.BasicAccount({
                    account_id: r,
                    display_name: s,
                    email: o,
                    email_verified: !0,
                    familiar_name: "",
                    given_name: "",
                    profile_photo_url: l,
                    surname: ""
                }),
                account_id: r,
                initials: i.getInitials(s),
                is_inherited: !1,
                permissions: a(),
                same_team: !0,
                time_last_seen: c ? new Date(1e3 * c) : null
            })
        }) : []
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = s.i18n_default_project("sharing")._;
    t.constructGuests = o, t.constructLinkMembers = l
}), define("modules/clean/sharing/parent_folder_access_modal", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/react/flag", "modules/clean/react/modal", "modules/clean/react/sprite", "modules/clean/sharing/access_level", "modules/clean/sharing/constants", "modules/core/i18n"], function(e, t, n, r, s, i, a, o, l, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importStar(i), d = n.__importStar(d);
    var u = d.i18n_default_project("sharing"),
        p = u._,
        m = u.ungettext,
        h = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dismissModal = function() {
                    a.Modal.close(), t.handleDismissed()
                }, t.handleDismissed = function() {
                    t.props.onClose && t.props.onClose()
                }, t.handleNavigateToParentFolder = function(e) {
                    return function() {
                        a.Modal.close(), t.props.onParentFolderClicked && t.props.onParentFolderClicked(e.path, t.arePermissionsAllowed(e.permissions))
                    }
                }, t.arePermissionsAllowed = function(e) {
                    return e.some(function(e) {
                        return e && e.allow
                    })
                }, t.memberCanEdit = function() {
                    return [l.ACCESS_LEVEL.OWNER, l.ACCESS_LEVEL.WRITER].indexOf(t.props.memberAccessLevelResult.access_level) > -1
                }, t.getInfoStr = function() {
                    return "remove" === t.props.originalAction ? t.props.contentInfo.isFolder() ? m("As a member of the parent folder listed below, %(member_name)s can still access the contents of “%(content_name)s”.", "As a member of the parent folders listed below, %(member_name)s can still access the contents of “%(content_name)s”.", t.props.memberAccessLevelResult.parentFolders.length) : m("As a member of the parent folder listed below, %(member_name)s can still access “%(content_name)s”.", "As a member of the parent folders listed below, %(member_name)s can still access “%(content_name)s”.", t.props.memberAccessLevelResult.parentFolders.length) : t.props.contentInfo.isFolder() ? t.memberCanEdit() ? m("As a member of the parent folder listed below, %(member_name)s can still edit the contents of “%(content_name)s”.", "As a member of the parent folders listed below, %(member_name)s can still edit the contents of “%(content_name)s”.", t.props.memberAccessLevelResult.parentFolders.length) : m("As a member of the parent folder listed below, %(member_name)s can still view the contents of “%(content_name)s”.", "As a member of the parent folders listed below, %(member_name)s can still view the contents of “%(content_name)s”.", t.props.memberAccessLevelResult.parentFolders.length) : t.memberCanEdit() ? m("As a member of the parent folder listed below, %(member_name)s can still edit “%(content_name)s”.", "As a member of the parent folders listed below, %(member_name)s can still edit “%(content_name)s”.", t.props.memberAccessLevelResult.parentFolders.length) : m("As a member of the parent folder listed below, %(member_name)s can still view “%(content_name)s”.", "As a member of the parent folders listed below, %(member_name)s can still view “%(content_name)s”.", t.props.memberAccessLevelResult.parentFolders.length)
                }, t.renderParentFolderContent = function() {
                    var e = t.getInfoStr();
                    return r.default.createElement("div", null, e.format({
                        member_name: s.Emstring.em_snippet(t.props.memberDisplayName, c.SNIPPET_SIZES.DISPLAY_NAME),
                        content_name: s.Emstring.em_snippet(t.props.contentInfo.name() || "", c.SNIPPET_SIZES.FILENAME)
                    }), r.default.createElement("div", {
                        className: "parent-folder-access-modal__folder-list u-mar-top-s"
                    }, r.default.createElement("ul", {
                        className: "o-list-ui o-list-ui--dividers"
                    }, t.props.memberAccessLevelResult.parentFolders.map(t.renderParentFolder))))
                }, t.renderParentFolder = function(e) {
                    var n = r.default.createElement(o.Sprite, {
                        group: "web",
                        name: "folder_user_32",
                        className: "u-pad-right-xs",
                        alt: ""
                    });
                    return r.default.createElement("li", null, r.default.createElement("div", {
                        className: "parent-folder-access-modal__parent-folder u-pad-vertical-xs u-pad-horizontal-s",
                        onClick: t.handleNavigateToParentFolder(e)
                    }, r.default.createElement(i.Flag, {
                        leftAttachment: n,
                        rightAttachment: t.renderFolderLink(e)
                    }, r.default.createElement("span", {
                        className: "parent-folder-access-modal__folder-name"
                    }, s.Emstring.em_snippet(e.name, c.SNIPPET_SIZES.FILENAME)))))
                }, t.renderFolderLink = function(e) {
                    return r.default.createElement("button", {
                        className: "button-as-link",
                        onClick: t.handleNavigateToParentFolder(e),
                        type: "button"
                    }, p(t.arePermissionsAllowed(e.permissions) ? "Manage membership" : "View folder"))
                }, t.renderSimpleContent = function() {
                    return r.default.createElement("div", null, r.default.createElement("span", {
                        className: "parent-folder-access-modal__warning"
                    }, t.props.memberAccessLevelResult.warning), r.default.createElement("div", {
                        className: "u-mar-top-m clearfix"
                    }, r.default.createElement("div", {
                        className: "u-l-fr"
                    }, r.default.createElement("button", {
                        className: "c-btn c-btn--primary confirm-button",
                        onClick: t.dismissModal
                    }, p("OK")))))
                }, t.getTitleStr = function() {
                    return p("remove" === t.props.originalAction ? t.props.contentInfo.isFolder() ? "%(member_name)s can still access this folder" : "%(member_name)s can still access this file" : t.props.contentInfo.isFolder() ? t.memberCanEdit() ? "%(member_name)s can still edit this folder" : "%(member_name)s can still view this folder" : t.memberCanEdit() ? "%(member_name)s can still edit this file" : "%(member_name)s can still view this file")
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.getTitleStr();
                return r.default.createElement(a.Modal, {
                    autoClose: !1,
                    className: "parent-folder-access-modal",
                    buttonComponent: r.default.createElement("span", null),
                    onDismissCompleted: this.handleDismissed,
                    title: e.format({
                        member_name: s.Emstring.em_snippet(this.props.memberDisplayName, c.SNIPPET_SIZES.DISPLAY_NAME)
                    })
                }, r.default.createElement("div", {
                    className: "parent-folder-access-modal__contents"
                }, this.props.memberAccessLevelResult.parentFolders && !this.props.isInContentManager ? this.renderParentFolderContent() : this.renderSimpleContent()))
            }, t.displayName = "ParentFolderAccessModal", t
        })(r.default.Component);
    t.ParentFolderAccessModal = h
}), define("modules/clean/sharing/share_modal", ["require", "exports", "tslib", "external/immutable", "react", "modules/clean/react/growth/education_module_event_bridge", "modules/clean/flux/store_listener", "modules/clean/sharing/sharing_settings_constants", "modules/clean/react/pass/store", "modules/clean/keycode", "modules/clean/sharing/member_constructors", "modules/clean/sharing/stores/sharing_info", "modules/clean/sharing/ui_util", "modules/clean/sharing/sharing_settings_modal", "modules/clean/sharing/views/modal_content_spectrum", "modules/clean/viewer", "spectrum/modal", "modules/core/i18n", "modules/clean/ux_analytics_utils", "modules/clean/sharing/api/client"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importDefault(s), g = n.__importStar(g);
    var v = g.i18n_default_project("sharing")._,
        I = function(e) {
            var t = e.actionHandler.getSharingInfo(),
                n = t.getInitialProps(),
                s = e.actionHandler.getPassInfo(),
                i = s.groupSeenStateInfo,
                a = s.linkSeenStateInfo,
                o = s.presentAccountIds,
                l = s.passFetchingStatus;
            return {
                sharingInfo: t,
                actionHandler: e.actionHandler,
                areMembersFullyLoaded: t.areMembersFullyLoaded(),
                areSharingPrefsLoaded: t.areSharingPrefsLoaded(),
                canChangeOptions: t.permissionsObj().canChangeOptions(),
                canEdit: t.permissionsObj().canEdit(),
                canRelinquishMembership: t.permissionsObj().canRelinquishMembership(),
                canShareLink: t.canShareLink(),
                canUnshareFile: t.permissionsObj().canUnshare(),
                canUnshareFolder: t.permissionsObj().canUnshare(),
                canUpdateConfidentiality: t.permissionsObj().canUpdateConfidentiality(),
                contactsError: t.contactsError(),
                contentInfo: t.contentInfo(),
                contentNameMessage: t.contentNameMessage(),
                contentNameMessageLevel: t.contentNameMessageLevel(),
                filePolicy: t.filePolicy(),
                folderPolicy: t.folderPolicy(),
                guestMembers: d.constructGuests(o),
                groupSeenStateInfo: i,
                hasDisplayableMembers: t.hasDisplayableMembers(),
                hasParentSharedFolder: t.hasParentSharedFolder(),
                initialContentName: n.initialContentName,
                initialRecipientRawInput: t.initialRecipientRawInput(),
                initialRecipientTokens: t.initialRecipientTokens(),
                sharingPrefs: t.sharingPrefs(),
                isConfidentialFolder: t.isConfidentialFolder(),
                isContentNameFocused: t.isContentNameFocused(),
                isFolderInsideTeamFolderTree: t.isFolderInsideTeamFolderTree(),
                isInContentManager: n.isInContentManager,
                isLinkMetadataLoaded: t.isLinkMetadataLoaded(),
                isMetadataLoaded: t.isMetadataLoaded(),
                isOwner: t.isOwner(),
                isTeamPolicyLoaded: t.isTeamPolicyLoaded(),
                isTeamSharedFolder: t.isTeamSharedFolder(),
                isTokenizerEmpty: t.isTokenizerEmpty(),
                isUserOnOwnerTeam: t.isUserOnOwnerTeam(),
                linkMembers: d.constructLinkMembers(a),
                linkMetadata: t.linkMetadata(),
                linkOnlyReason: t.linkOnlyReason(),
                memberCounts: t.memberCounts(),
                memberCountWithRecipients: t.memberCountWithRecipients(),
                members: t.members(),
                metadata: t.metadata(),
                ownerTeam: t.ownerTeam(),
                passFetchingStatus: l,
                pendingMemberAction: t.pendingMemberAction(),
                permissions: t.permissions(),
                sharingPermissions: t.permissionsObj(),
                presentAccountIds: r.Set(o),
                recipientMessage: t.recipientMessage(),
                recipientTokens: t.recipientTokens(),
                shareFolderPromise: t.shareFolderPromise(),
                shouldBlockMemberListOnPassLoad: t.shouldBlockMemberListOnPassLoad(),
                teamPolicy: t.teamPolicy(),
                uiMode: t.uiMode(),
                user: t.user(),
                onCreateGroupCallback: t.onCreateGroupCallback(),
                onDeleteLink: n.onDeleteLink,
                onSuccessSharing: n.onSuccessSharing,
                teamGroupInfo: n.teamGroupInfo,
                viewer: _.Viewer.get_viewer(),
                expLinkSettingsEmbed: t.expLinkSettingsEmbed()
            }
        },
        b = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.spectrumModalClassName = "scl-share-modal", n.handleKeyDown = function(e) {
                    e.keyCode === c.KeyCode.ESC && n.onModalCloseClick()
                }, n.preventEventBubbling = function(e) {
                    return e.stopPropagation()
                }, n.onModalCloseClick = function() {
                    i.educationEventBridge.requestSharingCallout();
                    var e = n.getTokenizer();
                    e && e.finishLogging(!1), n.setState({
                        open: !1
                    }), S.dispatchModalClosed()
                }, n.getSpectrumModalElement = function() {
                    return document.getElementsByClassName(n.spectrumModalClassName)[0]
                }, n.onModalReady = function() {
                    S.dispatchModalOpened();
                    var e = n.getSpectrumModalElement();
                    e && e.addEventListener("keypress", n.preventEventBubbling, !1)
                }, n.handleDismiss = function() {
                    n.setState({
                        showSettings: !1
                    })
                }, n.onSettingsClick = function() {
                    p.logTiburonEvent(n.props.contentInfo, n.props.user.id, n.props.sharingInfo.isFolder() ? "OPEN_FOLDER_SETTINGS_MODAL" : "OPEN_FILE_SETTINGS_MODAL"), n.setState({
                        currentTab: n.props.sharingInfo.isFolder() ? o.FOLDER_SETTINGS : o.FILE_SETTINGS,
                        showSettings: !0
                    })
                }, n.onLinkSettingsClick = function() {
                    p.logTiburonEvent(n.props.contentInfo, n.props.user.id, "OPEN_LINK_SETTINGS_MODAL"), n.setState({
                        currentTab: o.LINK_SETTINGS,
                        showSettings: !0
                    })
                }, n.state = {
                    open: !0,
                    showSettings: !1
                }, n
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                document.addEventListener("keydown", this.handleKeyDown, !1)
            }, t.prototype.componentWillUnmount = function() {
                document.removeEventListener("keydown", this.handleKeyDown, !1);
                var e = this.getTokenizer();
                this.props.actionHandler.onShareModalUnmount(e);
                var t = this.getSpectrumModalElement();
                t && t.removeEventListener("keypress", this.preventEventBubbling, !1)
            }, t.prototype.getTokenizer = function() {
                return this.refs.content && this.refs.content.getWrappedComponent() && this.refs.content.getWrappedComponent().refs.tokenizer
            }, t.prototype.getClient = function() {
                return this.props.sharingInfo.isFolder() ? new E.FolderShareApiClient({
                    userId: this.props.user.id,
                    isNonUserRelativeContext: this.props.isInContentManager
                }) : new E.FileShareApiClient({
                    userId: this.props.user.id
                })
            }, t.prototype.render = function() {
                var e;
                return e = this.props.sharingInfo.isFolder() ? this.props.sharingInfo.folderPolicy() : this.props.sharingInfo.filePolicy(), this.state.showSettings && e ? s.default.createElement(m.SharingSettingsModal, {
                    actionHandler: this.props.actionHandler,
                    sharingInfo: this.props.sharingInfo,
                    sharingPrefs: this.props.sharingPrefs,
                    client: this.getClient(),
                    currentTab: this.state.currentTab,
                    currentPolicy: e,
                    folderName: this.props.sharingInfo.name(),
                    isFolder: this.props.sharingInfo.isFolder(),
                    isSharedFolder: this.props.contentInfo.isSharedFolder(),
                    isFolderInsideTeamFolderTree: this.props.isFolderInsideTeamFolderTree,
                    isInContentManager: this.props.isInContentManager,
                    isTeamSharedFolder: this.props.isTeamSharedFolder,
                    isUserOnOwnerTeam: this.props.isUserOnOwnerTeam,
                    linkMetadata: this.props.linkMetadata,
                    ownerTeam: this.props.ownerTeam,
                    permissions: this.props.permissions,
                    user: this.props.user,
                    onDismiss: this.handleDismiss,
                    onSuccessSharing: this.props.onSuccessSharing
                }) : s.default.createElement(f.Modal, {
                    appElement: document.getElementById("embedded-app") || document.body,
                    ariaLabel: v("Sharing Modal"),
                    className: this.spectrumModalClassName,
                    bodyClassName: "scl-share-modal-content uxa-modal",
                    bodyId: "unified-share-modal",
                    displayCloseButton: !1,
                    open: this.state.open,
                    width: 540,
                    overlayClassName: "file-viewer-modal-overlay",
                    overlayClickClose: !0,
                    onReady: this.onModalReady,
                    onRequestClose: this.onModalCloseClick
                }, this.renderModalContent())
            }, t.prototype.renderModalContent = function() {
                var e = l.passStore.getPassPermissions(this.props.contentInfo.extras.fileId),
                    t = e && e.canReadPresence,
                    r = !!(this.props.contentInfo.isFile() ? this.props.filePolicy && this.props.filePolicy.viewer_info_policy : this.props.folderPolicy && this.props.folderPolicy.viewer_info_policy),
                    i = {
                        headerId: "unified-share-modal-title",
                        areCheckboxSettingsLoaded: this.props.areSharingPrefsLoaded,
                        isLimitedTeam: this.props.viewer.team_is_limited,
                        isPassEnabled: t,
                        isInContentManager: this.props.isInContentManager,
                        mode: this.props.uiMode,
                        ref: "content",
                        showContentManagerBridge: this.shouldRenderContentManagerBridge(),
                        showPassFileSettings: r,
                        onLinkSettingsClick: this.onLinkSettingsClick,
                        onModalCloseClick: this.onModalCloseClick,
                        onSettingsClick: this.onSettingsClick
                    };
                return i = n.__assign({}, this.props, i), s.default.createElement(h.ShareModalContentSpectrum, n.__assign({}, i))
            }, t.prototype.shouldRenderContentManagerBridge = function(e) {
                return void 0 === e && (e = !1), !this.props.isInContentManager && (!!p.GoldenGate.hasContentManagerAndSuperAdmin(this.props.user.id) && (!!this.props.isTeamSharedFolder || !(!this.props.isFolderInsideTeamFolderTree || !this.props.isUserOnOwnerTeam) && (e || !this.props.sharingPermissions.canInviteEditor())))
            }, t.displayName = "ShareModal", t
        })(s.default.Component);
    t.ShareModal = a.listenToStores(b, {
        sharingInfoStore: u.sharingInfoStore,
        passStore: l.passStore
    }, I)
}), define("modules/clean/sharing/share_modal/store/experiments/reducer", ["require", "exports", "tslib", "modules/constants/teams", "modules/clean/loggers/growth_features_events_logger", "modules/clean/sharing/action_types"], function(e, t, n, r, s, i) {
    "use strict";

    function a() {
        return {
            ujMagnet2018LastEmails: [],
            ujMagnet2018SuggestableUserDataTimestamp: 0,
            ujMagnet2018ShouldLogExposure: s.EXP_UJ_MAGNET2018_LOGGED_VARIANTS.includes(r.UJ_MAGNET2018_ADMIN) || s.EXP_UJ_MAGNET2018_LOGGED_VARIANTS.includes(r.UJ_MAGNET2018_MEMBER)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), t.getInitialExperimentsState = a, t.experimentsReducer = function(e, t) {
        var r = t.payload;
        switch (t.type) {
            case i.ShareModalActionTypes.FETCH_LINK_SETTINGS_VARIANT:
                return n.__assign({}, e, {
                    linkSettingsEmbed: r
                });
            case i.ShareModalActionTypes.FETCH_SHARE_MODAL_LINK_SETTINGS_VARIANT:
                return n.__assign({}, e, {
                    linkSettingsShareModal: r
                });
            case i.ShareModalActionTypes.FETCH_SHARE_MODAL_RACL_ON_GG_VARIANT:
                return n.__assign({}, e, {
                    raclOnGg: r
                });
            case i.ShareModalActionTypes.FETCH_TWO_LINK_REDESIGN:
                return n.__assign({}, e, {
                    twoLinkRedesign: r
                });
            case i.ShareModalActionTypes.FETCH_PLUS_TO_PRO_TRIALS:
                return n.__assign({}, e, {
                    plusToPro: r
                });
            case i.ShareModalActionTypes.FETCH_MAGNET2018_REQUEST:
                return n.__assign({}, e, {
                    ujMagnet2018LastEmails: r.emails,
                    ujMagnet2018SuggestableUserDataPromise: r.promise,
                    ujMagnet2018SuggestableUserDataTimestamp: r.ts
                });
            case i.ShareModalActionTypes.FETCH_MAGNET2018_SUCCESS:
                var s = e.ujMagnet2018ShouldLogExposure && !r.loggedExposure;
                return r.ts >= e.ujMagnet2018SuggestableUserDataTimestamp ? n.__assign({}, e, {
                    ujMagnet2018ShouldLogExposure: s,
                    ujMagnet2018SuggestableUserDataPromise: void 0,
                    ujMagnet2018SuggestableUserData: r.suggestableUserData
                }) : n.__assign({}, e, {
                    ujMagnet2018ShouldLogExposure: s
                });
            case i.ShareModalActionTypes.FETCH_MAGNET2018_FAILURE:
                return r.ts < e.ujMagnet2018SuggestableUserDataTimestamp ? e : n.__assign({}, e, {
                    ujMagnet2018SuggestableUserDataPromise: void 0,
                    ujMagnet2018SuggestableUserData: void 0
                });
            case i.ShareModalActionTypes.SHARE_MODAL_CLOSE:
                return n.__assign({}, e, {
                    ujMagnet2018SuggestableUserData: void 0,
                    ujMagnet2018SuggestableUserDataPromise: void 0,
                    ujMagnet2018LastEmails: []
                });
            default:
                return e
        }
    }
}), define("modules/clean/sharing/share_modal/store/modal_info/reducer", ["require", "exports", "tslib", "external/immutable", "modules/clean/sharing/content_info", "modules/clean/cloud_docs/constants", "modules/clean/sharing/action_types", "modules/clean/sharing/views/constants"], function(e, t, n, r, s, i, a, o) {
    "use strict";

    function l(e, t) {
        return t.shared_folder_id ? e.setNsId(t.shared_folder_id) : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), t.initialModalInfoState = {
        canRelinquishMembership: !1,
        contentInfo: s.ContentInfo.createFromParams({
            fqPath: "",
            isFolder: !1
        }),
        contentNameInputValue: "",
        contentNameMessageLevel: o.CONTENT_NAME_MESSAGE_LEVELS.INFO,
        hasChangedSharingSettings: !1,
        initialProps: {},
        initialRecipientRawInput: "",
        initialRecipientTokens: [],
        isContentNameFocused: !1,
        isCloudDoc: !1,
        pendingMemberAction: r.Set(),
        recipientMessage: "",
        recipientRawInput: "",
        recipientTokens: [],
        shareAsConfidential: !1,
        uiMode: o.MODES.MEMBERSHIP
    }, t.modalInfoReducer = function(e, r) {
        var s = r.payload;
        switch (r.type) {
            case a.ShareModalActionTypes.CHANGE_CREATE_COMMENT_CHECKBOX:
                return n.__assign({}, e, {
                    isShareMessageAsCommentExplicitlyChecked: s.checked
                });
            case a.ShareModalActionTypes.CHANGE_RECIPIENTS:
                var c = s.recipientTokens,
                    d = s.recipientRawInput,
                    u = e.uiMode;
                return c.length > 0 || d.length > 0 ? u === o.MODES.MEMBERSHIP && (u = o.MODES.SHARE) : u === o.MODES.SHARE && (u = o.MODES.MEMBERSHIP), n.__assign({}, e, {
                    recipientTokens: c,
                    recipientRawInput: d,
                    uiMode: u
                });
            case a.ShareModalActionTypes.CHANGE_RECIPIENT_ACCESS:
                return n.__assign({}, e, {
                    recipientAccess: s.newAccess
                });
            case a.ShareModalActionTypes.CHANGE_RECIPIENT_MESSAGE:
                return n.__assign({}, e, {
                    recipientMessage: s.message
                });
            case a.ShareModalActionTypes.FETCH_METADATA_FAILURE:
                return n.__assign({}, e, {
                    uiMode: o.MODES.LINK_ONLY,
                    linkOnlyReason: e.linkOnlyReason !== o.LINK_ONLY_REASON.LINKS_PAGE ? s.reason : e.linkOnlyReason
                });
            case a.ShareModalActionTypes.FETCH_METADATA_SUCCESS:
                var p = s.metadata,
                    u = p.path_lower && i.isPointerByExtension(p.path_lower) ? o.MODES.POINTER : e.uiMode;
                return n.__assign({}, e, {
                    uiMode: u,
                    contentInfo: l(e.contentInfo, p)
                });
            case a.ShareModalActionTypes.HANDLE_CONTENT_NAME_CHANGE:
                return n.__assign({}, e, {
                    contentNameInputValue: s.name,
                    contentNameMessageLevel: o.CONTENT_NAME_MESSAGE_LEVELS.INFO,
                    contentNameMessage: "" === s.name ? o.CONTENT_NAME_EMPTY_TOOLTIP : void 0
                });
            case a.ShareModalActionTypes.HANDLE_CONTENT_NAME_FOCUS_CHANGE:
                return n.__assign({}, e, {
                    isContentNameFocused: s.focus
                });
            case a.ShareModalActionTypes.MEMBER_ACTION_COMPLETE:
                return n.__assign({}, e, {
                    pendingMemberAction: e.pendingMemberAction.delete(s.member.memberKey())
                });
            case a.ShareModalActionTypes.MEMBER_ACTION_PENDING:
                return n.__assign({}, e, {
                    pendingMemberAction: e.pendingMemberAction.add(s.member.memberKey())
                });
            case a.ShareModalActionTypes.REMOVE_MEMBER_KEEP_ACCESS:
                return n.__assign({}, e, {
                    pendingMemberAction: e.pendingMemberAction.delete(s.member.memberKey())
                });
            case a.ShareModalActionTypes.REMOVE_MEMBER_SUCCESS:
                return n.__assign({}, e, {
                    pendingMemberAction: e.pendingMemberAction.delete(s.member.memberKey())
                });
            case a.ShareModalActionTypes.SEND_SHARE_FAILURE:
                return n.__assign({}, e, {
                    uiMode: o.MODES.SHARE
                });
            case a.ShareModalActionTypes.SEND_SHARE_REQUEST:
                return n.__assign({}, e, {
                    uiMode: o.MODES.SHARE_SENDING
                });
            case a.ShareModalActionTypes.SEND_SHARE_SUCCESS:
                return n.__assign({}, e, {
                    uiMode: o.MODES.SHARE
                });
            case a.ShareModalActionTypes.SHARE_FOLDER_SUCCESS:
                return n.__assign({}, e, {
                    contentInfo: l(e.contentInfo, s.metadata)
                });
            case a.ShareModalActionTypes.SHARE_MODAL_OPEN:
                var m = s.shareModalInfoAttrs.contentInfo,
                    h = s.shareModalInfoAttrs.inLinksPage,
                    _ = m.isFolder() && !m.pathExists(),
                    f = _ && !s.initialProps.initialContentName,
                    u = t.initialModalInfoState.uiMode,
                    g = void 0;
                return i.isPointerByExtension(m.displayPath() || "") ? u = o.MODES.POINTER : _ ? u = o.MODES.SHARE : h && (u = o.MODES.LINK_ONLY, g = o.LINK_ONLY_REASON.LINKS_PAGE), n.__assign({}, e, {
                    contentInfo: m,
                    linkOnlyReason: g,
                    uiMode: u,
                    contentNameInputValue: s.initialProps.initialContentName,
                    contentNameMessage: f ? o.CONTENT_NAME_EMPTY_TOOLTIP : "",
                    initialProps: s.initialProps,
                    initialRecipientTokens: s.shareModalInfoAttrs.initialRecipientTokens || [],
                    isContentNameFocused: f,
                    onCreateGroupCallback: s.initialProps.onCreateGroupCallback,
                    recipientAccess: void 0,
                    recipientMessage: s.initialProps.recipientMessage || "",
                    recipientTokens: []
                });
            case a.ShareModalActionTypes.SHARE_MODAL_CLOSE:
                return n.__assign({}, e, {
                    initialRecipientTokens: s.tokens || e.initialRecipientTokens || [],
                    initialRecipientRawInput: s.value || e.initialRecipientRawInput || ""
                });
            case a.ShareModalActionTypes.UPDATE_SHARING_SETTINGS_SUCCESS:
                return n.__assign({}, e, {
                    hasChangedSharingSettings: !0
                });
            case a.ShareModalActionTypes.VALIDATE_CONTENT_NAME_ERROR:
                return n.__assign({}, e, {
                    contentNameMessage: s.errorMsg,
                    contentNameMessageLevel: o.CONTENT_NAME_MESSAGE_LEVELS.ERROR
                });
            case a.ShareModalActionTypes.VALIDATE_CONTENT_NAME_SUCCESS:
                return n.__assign({}, e, {
                    contentInfo: e.contentInfo.setFQPath(s.newFolderPath)
                });
            default:
                return e
        }
    }
}), define("modules/clean/sharing/share_modal/store/sharing_info/reducer", ["require", "exports", "tslib", "modules/clean/sharing/action_types", "modules/clean/sharing/api/types/metadata"], function(e, t, n, r, s) {
    "use strict";

    function i(e, t) {
        var n = e.metadata,
            r = t.permissions || n && n.permissions;
        return t.set("permissions", r)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initialSharingInfoState = {
        areMembersFullyLoaded: !1,
        areSharingPrefsLoaded: !1,
        hasDisplayableMembers: !1,
        isLinkMetadataLoaded: !1,
        isTeamPolicyLoaded: !1,
        shouldBlockMemberListOnPassLoad: !0,
        memberCounts: new s.MemberCounts,
        members: new s.SharingMembership,
        sharingPrefs: new s.SharingPrefs,
        sharedLinks: []
    }, t.sharingInfoReducer = function(e, a) {
        void 0 === e && (e = t.initialSharingInfoState);
        var o = a.payload;
        switch (a.type) {
            case r.ShareModalActionTypes.CHANGE_MEMBER_ACCESS_FAILURE:
                return n.__assign({}, e, {
                    members: e.members.setIn([o.member.type(), o.member.memberKey(), "access_type"], o.prevAccess)
                });
            case r.ShareModalActionTypes.CHANGE_MEMBER_ACCESS_REQUEST:
                return n.__assign({}, e, {
                    members: e.members.setIn([o.member.type(), o.member.memberKey(), "access_type"], o.newAccess)
                });
            case r.ShareModalActionTypes.CLEAR_FILE_MEMBERSHIP_LAST_SEEN_INFO:
                return n.__assign({}, e, {
                    members: e.members.update("users", function(e) {
                        return e.map(function(e) {
                            return e.set("time_last_seen", null)
                        })
                    })
                });
            case r.ShareModalActionTypes.CREATE_LINK_SUCCESS:
                return n.__assign({}, e, {
                    linkMetadata: o.linkMetadata,
                    sharedLinks: e.sharedLinks.concat(o.linkMetadata)
                });
            case r.ShareModalActionTypes.FETCH_MEMBER_COUNTS_SUCCESS:
                return n.__assign({}, e, {
                    memberCounts: o.memberCounts
                });
            case r.ShareModalActionTypes.FETCH_METADATA_FAILURE:
                return n.__assign({}, e, {
                    fetchingMetadataPromise: void 0
                });
            case r.ShareModalActionTypes.FETCH_METADATA_REQUEST:
                return n.__assign({}, e, {
                    fetchingMetadataPromise: o.promise
                });
            case r.ShareModalActionTypes.FETCH_METADATA_SUCCESS:
                return n.__assign({}, e, {
                    metadata: i(e, o.metadata),
                    fetchingMetadataPromise: void 0
                });
            case r.ShareModalActionTypes.FETCH_SHARING_PREFS_REQUEST:
                return n.__assign({}, e, {
                    areSharingPrefsLoaded: !1
                });
            case r.ShareModalActionTypes.FETCH_SHARING_PREFS_SUCCESS:
                return n.__assign({}, e, {
                    areSharingPrefsLoaded: !0,
                    sharingPrefs: o.sharingPrefs
                });
            case r.ShareModalActionTypes.FETCH_LINK_METADATA_FAILURE:
                return n.__assign({}, e, {
                    isLinkMetadataLoaded: !0,
                    linkMetadata: void 0,
                    sharedLinks: []
                });
            case r.ShareModalActionTypes.FETCH_LINK_METADATA_SUCCESS:
                return n.__assign({}, e, {
                    isLinkMetadataLoaded: !0,
                    linkMetadata: o.sharedLinks.length > 0 ? o.sharedLinks[0] : null,
                    sharedLinks: o.sharedLinks
                });
            case r.ShareModalActionTypes.DELETE_LINK_METADATA_SUCCESS:
                for (var l = [], c = 0, d = e.sharedLinks; c < d.length; c++) {
                    var u = d[c];
                    u.url !== o.deletedLink.url && l.push(u)
                }
                return n.__assign({}, e, {
                    linkMetadata: l[0] ? l[0] : null,
                    sharedLinks: l
                });
            case r.ShareModalActionTypes.FETCH_USER_ACCOUNTS_REQUEST:
                return n.__assign({}, e, {
                    fetchingMembersRequest: {
                        limitNonNull: o.limitNonNull,
                        promise: o.promise,
                        requestId: o.requestId
                    }
                });
            case r.ShareModalActionTypes.FETCH_USER_ACCOUNTS_SUCCESS:
                return e.fetchingMembersRequest && e.fetchingMembersRequest.requestId !== o.requestId ? e : e.hasDisplayableMembers && e.fetchingMembersRequest && e.fetchingMembersRequest.limitNonNull < e.members.getMemberCount() ? e : n.__assign({}, e, {
                    hasDisplayableMembers: !0,
                    areMembersFullyLoaded: !o.members.cursor,
                    fetchingMembersRequest: o.members.cursor ? e.fetchingMembersRequest : void 0,
                    members: o.members
                });
            case r.ShareModalActionTypes.FETCH_USER_ACCOUNTS_CONTINUED_SUCCESS:
                return e.fetchingMembersRequest && e.fetchingMembersRequest.requestId !== o.requestId ? e : n.__assign({}, e, {
                    areMembersFullyLoaded: !o.members.cursor,
                    fetchingMembersRequest: o.members.cursor ? e.fetchingMembersRequest : void 0,
                    members: e.members.mergeDeep(o.members)
                });
            case r.ShareModalActionTypes.FETCH_TEAM_POLICY_REQUEST:
                return n.__assign({}, e, {
                    isTeamPolicyLoaded: !1
                });
            case r.ShareModalActionTypes.FETCH_TEAM_POLICY_SUCCESS:
                return n.__assign({}, e, {
                    isTeamPolicyLoaded: !0,
                    teamPolicy: o.teamPolicy
                });
            case r.ShareModalActionTypes.FETCH_FILE_MEMBER_COUNT_SUCCESS:
                return n.__assign({}, e, {
                    memberCounts: new s.MemberCounts({
                        total_unique_users: o.count,
                        users_outside_team: 0,
                        exceeds_count: o.exceeds_limit
                    })
                });
            case r.ShareModalActionTypes.REMOVE_MEMBER_KEEP_ACCESS:
                return n.__assign({}, e, {
                    members: e.members.setIn([o.member.type(), o.member.memberKey(), "access_type"], o.access)
                });
            case r.ShareModalActionTypes.REMOVE_MEMBER_SUCCESS:
                return n.__assign({}, e, {
                    members: e.members.deleteIn([o.member.type(), o.member.memberKey()])
                });
            case r.ShareModalActionTypes.SHARE_FOLDER_FAILURE:
                return n.__assign({}, e, {
                    shareFolderPromise: void 0
                });
            case r.ShareModalActionTypes.SHARE_FOLDER_REQUEST:
                return n.__assign({}, e, {
                    shareFolderPromise: o.promise
                });
            case r.ShareModalActionTypes.SHARE_FOLDER_SUCCESS:
                return n.__assign({}, e, {
                    metadata: i(e, o.metadata),
                    shareFolderPromise: o.promise
                });
            case r.ShareModalActionTypes.TRANSFER_OWNER_SUCCESS:
                return n.__assign({}, e, {
                    metadata: void 0,
                    isLinkMetadataLoaded: !1,
                    hasDisplayableMembers: !1
                });
            case r.ShareModalActionTypes.UNBLOCK_MEMBER_LIST_ON_PASS_LOAD:
                return n.__assign({}, e, {
                    shouldBlockMemberListOnPassLoad: !1
                });
            case r.ShareModalActionTypes.UPDATE_SHARING_SETTINGS_SUCCESS:
                return n.__assign({}, e, {
                    metadata: i(e, o.metadata)
                });
            default:
                return e
        }
    }
}), define("modules/clean/sharing/share_modal_dropdown_util", ["require", "exports", "tslib", "modules/clean/sharing/access_level", "modules/clean/sharing/constants", "modules/clean/sharing/strings", "modules/core/i18n"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importStar(a);
    var o = a.i18n_default_project("sharing")._;
    t.shouldShowMemberAction = function(e, t, n, r, i) {
        return t === n || r && r.get(e) && r.get(e).allow || t === s.MEMBER_ACTION.REMOVE && i
    }, t.getMemberActionInfo = function(e) {
        return [
            [s.MEMBER_ACTION.MAKE_EDITOR, {
                value: r.ACCESS_LEVEL.WRITER,
                title: i.ACCESS_NAME[r.ACCESS_LEVEL.WRITER],
                folder_description: i.MEMBER_ACTION_FOLDER[s.MEMBER_ACTION.MAKE_EDITOR],
                file_description: i.MEMBER_ACTION_FILE[s.MEMBER_ACTION.MAKE_EDITOR]
            }],
            [s.MEMBER_ACTION.MAKE_VIEWER, {
                value: r.ACCESS_LEVEL.READER,
                title: i.ACCESS_NAME[r.ACCESS_LEVEL.READER],
                folder_description: i.MEMBER_ACTION_FOLDER[s.MEMBER_ACTION.MAKE_VIEWER],
                file_description: i.MEMBER_ACTION_FILE[s.MEMBER_ACTION.MAKE_VIEWER]
            }],
            [s.MEMBER_ACTION.MAKE_VIEWER_NO_COMMENT, {
                value: r.ACCESS_LEVEL.READER_NO_COMMENT,
                title: i.ACCESS_NAME[r.ACCESS_LEVEL.READER_NO_COMMENT],
                folder_description: i.MEMBER_ACTION_FOLDER[s.MEMBER_ACTION.MAKE_VIEWER_NO_COMMENT],
                file_description: i.MEMBER_ACTION_FILE[s.MEMBER_ACTION.MAKE_VIEWER_NO_COMMENT]
            }],
            [s.MEMBER_ACTION.MAKE_OWNER, {
                value: r.ACCESS_LEVEL.OWNER,
                title: o("Make owner")
            }],
            [s.MEMBER_ACTION.REMOVE, {
                value: "remove",
                title: o(e ? "Remove my access" : "Remove")
            }]
        ]
    }
}), define("modules/clean/sharing/share_modal_icon", ["require", "exports", "tslib", "react", "spectrum/icon_content", "modules/clean/filetypes", "modules/clean/react/icon/file_icon", "modules/clean/react/icon/icon_helper"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            return this.props.isFolder ? this.renderFolder() : this.renderFile()
        }, t.prototype.renderFile = function() {
            var e = {
                file: {
                    type: i.FileTypes.FILE,
                    fq_path: this.props.filename
                },
                className: this.props.className,
                variant: "small"
            };
            return r.default.createElement(a.FileIcon, n.__assign({}, e))
        }, t.prototype.renderFolder = function() {
            var e = i.FileTypes.FOLDER;
            this.props.pathExists && (this.props.isTeamSharedFolder ? e = i.FileTypes.TEAM_SHARED_FOLDER : this.props.isSharedFolder && (e = i.FileTypes.SHARED_FOLDER));
            var t = o.spectrumFolderIcon({
                fileType: e,
                isViewOnly: this.props.isViewOnly,
                isInTeamFolderTree: this.props.isFolderInsideTeamFolderTree,
                size: o.SpectrumIconSize.Small,
                isConfidential: this.props.isConfidentialFolder || !1,
                iconPostfix: this.props.isConfidentialFolder ? "_admin_view" : ""
            });
            return r.default.createElement(s.IconContent, {
                name: t,
                "aria-label": this.props.alt,
                role: "img",
                className: this.props.className
            })
        }, t
    })(r.default.Component);
    t.ShareModalIcon = l
}), define("modules/clean/sharing/share_modal_util", ["require", "exports", "tslib", "modules/clean/account/email", "modules/clean/account/email_verify_reasons", "modules/clean/contacts/contact", "modules/clean/contacts/types", "modules/clean/filetypes", "modules/clean/react/browse/action_logger", "modules/clean/react/browse/models", "modules/clean/react/teams/modals/limited_team_share_folder_modal", "modules/clean/sharing/actions/share_modal", "modules/clean/sharing/api/client", "modules/clean/sharing/constants", "modules/clean/sharing/content_info", "modules/clean/sharing/public_folder/public_folder", "modules/clean/sharing/share_modal", "modules/clean/sharing/ui_util", "modules/clean/viewer", "modules/clean/react/browse/logger_util", "external/immutable", "modules/clean/sharing/views/exp_showcase_share_interstitial"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E, v, I) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s = n.__importStar(s), a = n.__importDefault(a), l = n.__importStar(l), d = n.__importStar(d), E = n.__importStar(E), v = n.__importStar(v), t.generateModalSessionId = function() {
        return Math.random().toString()
    }, t.getSharingInfo = function(e, r, s) {
        void 0 === s && (s = {});
        var i = null;
        "number" == typeof e && (e = S.Viewer.get_viewer().get_user_by_id(e)), null == s.userHomeNs && (s.userHomeNs = e.home_ns_id);
        var a = t.getShareModalInfo(r),
            o = null;
        if (null != a) {
            a = n.__assign({}, a, s), a.modalSessionId && (a.modalSessionId = t.generateModalSessionId());
            var d = a.nsId,
                u = a.sjid,
                p = a.fileId,
                m = a.filename,
                _ = a.fqPath;
            l.logViewShareModal({
                uid: e.id,
                modal_session_id: a.modalSessionId || "",
                file_nsid: d,
                file_sjid: u,
                file_id: p,
                file_name: m,
                file_path: _
            });
            try {
                i = h.ContentInfo.createFromParams(a)
            } catch (e) {
                i = null
            }
            o = r instanceof c.BrowseContext ? r : a.browseContext
        }
        return {
            browseContext: o,
            contentInfo: i,
            shareModalInfo: a,
            user: e
        }
    }, t.showShareModal = function(e, n, i, a, o, l) {
        var c;
        void 0 === i && (i = {});
        var d, h, S;
        if (c = t.getSharingInfo(e, n, i), d = c.browseContext, h = c.contentInfo, S = c.shareModalInfo, e = c.user, null == h || null == S) return !1;
        if (g.logTiburonEvent(h, e.id, "BEGIN_SHARE_FLOW"), S && t.showFastrakShareModalIfAllowed(e, S, d)) return !0;
        if (!S.skipPublicFolderCheck && h && d) {
            var E = _.makePublicFolderLink(e.id, d.config, h.displayPath(), h.isFolder());
            if (E) return _.showPublicFolderLinkModal(E), !0
        }
        var v = (null != d ? d.isNonUserRelativeContext : void 0) || S.isNonUserRelativeContext,
            I = s.SHMODAL;
        if (S.origin === m.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE && (I = s.SHARE_FILEVIEWER), v || r.EmailVerification.get_for_user(e).verified_or_show(I)) {
            var b = h.isFolder() ? p.FolderShareApiClient : p.FileShareApiClient,
                y = new b({
                    userId: e.id,
                    isNonUserRelativeContext: v
                }),
                C = new u.ShareModalActionHandler(y, e, f.ShareModal, a, o, l),
                M = S.inLinksPage,
                T = S.prefillContacts,
                N = C.initializeShareModal({
                    contentInfo: h,
                    initialRecipientTokens: T,
                    inLinksPage: M
                }, {
                    client: y,
                    content: n,
                    user: e,
                    onDeleteLink: S.onDeleteLink,
                    teamGroupInfo: h.teamGroupInfo(),
                    isInContentManager: !!v,
                    onSuccessSharing: S.onSuccessSharing,
                    shareAsConfidential: !!S.shareAsConfidential,
                    initialContentName: S.initialContentName,
                    shouldSyncThisFolder: S.shouldSyncThisFolder,
                    recipientMessage: S.recipientMessage,
                    onCreateGroupCallback: S.onCreateGroupCallback
                });
            i.openLinkSettings ? N.then(function() {
                return C.handleLinkSettingsClick()
            }) : C.openShareModal()
        } else g.logTiburonEvent(h, e.id, "SHARE_MODAL_EMAIL_UNVERIFIED");
        return !0
    }, t.showFastrakShareModalIfAllowed = function(e, t, n) {
        return !(!t.isTeamSharedFolder || !S.Viewer.get_viewer().team_is_limited) && (d.showModalInstance({
            fqPath: t.fqPath
        }), !0)
    }, t.getShareModalInfo = function(e) {
        if (e instanceof c.File) {
            var t = [o.FileTypes.FILE, o.FileTypes.PACKAGE].indexOf(e.type) > -1;
            return {
                exists: !e.isDeleted,
                fileId: e.file_id,
                fqPath: e.fq_path,
                isFolder: !t,
                isTeamSharedFolder: e.type === o.FileTypes.TEAM_SHARED_FOLDER,
                sjid: e.sjid,
                nsId: e.ns_id,
                nsPath: e.ns_path,
                targetNsId: e.target_ns
            }
        }
        return e instanceof c.BrowseContext ? b(e) : e
    };
    var b = function(e) {
        return e.isInsideDeletedFolder || e.isInsideDeletedSharedFolder ? null : e.isInFolderMode ? e.isInsideSharedFolder ? e.currentNSPath ? {
            fqPath: e.currentFQPath,
            isFolder: !0,
            nsId: e.currentNSID,
            nsPath: e.currentNSPath,
            targetNsId: null
        } : {
            fqPath: e.currentMountPoint,
            isFolder: !0,
            nsId: null,
            nsPath: e.currentMountPoint,
            targetNsId: e.currentNSID
        } : {
            fqPath: e.currentFQPath,
            isFolder: !0,
            nsId: e.currentNSID,
            nsPath: e.currentNSPath,
            targetNsId: null
        } : {
            fqPath: e.currentFQPath,
            isFolder: !1,
            nsId: e.currentNSID,
            nsPath: e.currentNSPath,
            targetNsId: null
        }
    };
    t.showNewFolderShareModal = function(e, n, r, s, i, a, o, l, c, d, u) {
        void 0 === n && (n = null), void 0 === r && (r = null), void 0 === s && (s = null), void 0 === i && (i = !1), void 0 === a && (a = !1), void 0 === o && (o = null), n || (n = t.generateModalSessionId());
        var p = function() {
                for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 1; n <= 100; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                return g.getNewFolderPathFromContentName(e, r || "")
            },
            h = {
                fqPath: p(),
                isFolder: !0,
                exists: !1,
                origin: m.SHARE_ACTION_ORIGIN_TYPE.WIZARD,
                modalSessionId: n,
                isNonUserRelativeContext: a,
                isTeamSharedFolder: !1,
                initialContentName: s,
                shareAsConfidential: i,
                shouldSyncThisFolder: o
            },
            _ = {};
        return u && (_.onSuccessSharing = u), t.showShareModal(e, h, _, l, c, d)
    }, t.showPrefilledShareModal = function(e) {
        var r, s, o = e.user,
            l = e.sharePrefillEmails,
            c = e.content,
            d = e.setPath,
            u = e.setUrl,
            p = e.contentManagerValidateFolderPath,
            h = e.extras;
        return l && l.length > 0 ? (r = m.SHARE_ACTION_ORIGIN_TYPE.GRANT_ACCESS, s = l.map(function(e) {
            return new i.Contact({
                type: a.default.EMAIL,
                email: e,
                name: "",
                query: e,
                pending: !0
            })
        })) : (r = m.SHARE_ACTION_ORIGIN_TYPE.DESKTOP_CLIENT, s = []), t.showShareModal(o, c, n.__assign({
            origin: r,
            prefillContacts: s
        }, h), d, u, p)
    }, t.expShowShareInterstitialModal = function(r, s, i, a, o, c, d, u) {
        void 0 === c && (c = {});
        var p = function() {
                t.showShareModal(r, s, c, d, u)
            },
            m = function() {
                var t = E.countFilesAndFolders(v.Set([s])),
                    c = t.num_files_selected,
                    d = t.num_folders_selected;
                l.logOpenAddToCollectionModal({
                    uid: r.id,
                    source: "FILE_VIEW_ROW",
                    view_type: o,
                    result: s,
                    num_files_selected: c,
                    num_folders_selected: d
                });
                var u = s.ns_id,
                    p = s.ns_path,
                    m = s.fq_path;
                new Promise(function(t, n) {
                    e(["modules/clean/react/professional_collection/add_to_collection_modal_controller"], t, n)
                }).then(n.__importStar).then(function(e) {
                    (0, e.showAddToCollectionModal)([{
                        ns_id: u,
                        ns_path: p,
                        fq_path: m
                    }], r, i, a)
                })
            };
        return I.showShowcaseInterstitial({
            user: r,
            onClickShare: p,
            onClickShowcase: m
        }), !0
    }, t.showShareModalCallback = function(e, n) {
        var r = n.user,
            s = n.content,
            i = n.prefillContacts,
            a = n.recipientMessage;
        t.showShareModal(r, s, {
            prefillContacts: i,
            recipientMessage: a
        })
    }
}), define("modules/clean/sharing/sharing_settings_constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MEMBER_POLICY = "member_policy", t.VIEWER_INFO_POLICY = "viewer_info_policy", t.ACCESS_LEVEL_POLICY = "access_level", t.FOLDER_LINK_AUDIENCE_POLICY = "shared_link_policy", t.EXPIRES = "expires", t.ALLOW_DOWNLOAD = "allow_download", t.COMMENTS = "comments", t.REQUESTED_VISIBILITY = "requested_visibility", t.AUDIENCE = "audience", t.ACL_UPDATE_POLICY = "acl_update_policy", t.DROPDOWN = "dropdown", t.TOGGLE = "toggle", t.TEXT = "text", t.FILE_SETTINGS = "file_settings", t.FOLDER_SETTINGS = "folder_settings", t.LINK_SETTINGS = "link_settings"
}), define("modules/clean/sharing/sharing_settings_dropdown", ["require", "exports", "tslib", "react", "spectrum/dropdown_menu", "spectrum/dropdown_menu", "spectrum-sharing/components/sharing_dropdown_menu"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var o = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleSelection = function(e) {
                t.props.onValueSelected(e)
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            return r.default.createElement(a.SharingDropdownMenu, {
                disabled: this.props.disabled,
                onSelection: this.handleSelection,
                position: "right"
            }, this.renderButton(), r.default.createElement(i.Menu, null, this.renderMenuItems()))
        }, t.prototype.renderButton = function() {
            return r.default.createElement(s.DropdownMenuButton, {
                className: "sharing-settings-dropdown__button",
                disabled: this.props.disabled
            }, this.props.optionsDict[this.props.currentValue].label)
        }, t.prototype.renderMenuItems = function() {
            var e = this;
            return this.props.valuesList.map(function(t) {
                return r.default.createElement(a.SharingDropdownMenuItem, {
                    key: t,
                    value: t,
                    label: e.props.optionsDict[t].label,
                    description: e.props.optionsDict[t].description,
                    selected: t === e.props.currentValue
                })
            })
        }, t
    })(r.default.Component);
    t.SettingDropdown = o
}), define("modules/clean/sharing/sharing_settings_modal", ["require", "exports", "tslib", "react", "modules/core/browser", "modules/clean/sharing/share_page/action_types", "modules/clean/flux/dispatcher", "modules/clean/react/browse/constants", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/react/css", "spectrum-sharing/components/fixed_tabbed_container", "spectrum/modal", "spectrum/button", "modules/clean/react/modal", "spectrum-sharing/components/sharing_modal_banner", "modules/clean/sharing/constants", "modules/clean/sharing/sharing_settings_util", "modules/clean/react/util", "modules/clean/sharing/ui_notifications_util", "modules/clean/sharing/ui_util", "modules/clean/api_v2/error", "modules/constants/trademark", "modules/clean/sharing/delete_link_modal", "modules/clean/sharing/ui_util", "modules/clean/react/snackbar", "modules/clean/react_format", "modules/core/i18n", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/views/sharing_settings_file_folder_policy_view", "modules/clean/sharing/views/sharing_settings_link_policy_view", "modules/clean/sharing/views/sharing_settings_righteous_link_policy_view", "modules/clean/sharing/views/sharing_settings_links_section", "modules/clean/sharing/views/sharing_settings_link_policies", "modules/clean/sharing/confirmation_modals/confirm_recursive_policy_change_modal", "modules/clean/sharing/confirmation_modals/reset_access_modal", "modules/clean/sharing/sharing_settings_constants", "modules/clean/sharing/views/exp_pro_bundle_upsell", "modules/clean/sharing/views/exp_pro_bundle_tracker"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E, v, I, b, y, C, M, T, N, A, k, w, L, P, F, R, O, D, x, U) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s), c = n.__importStar(c), N = n.__importStar(N);
    var B = N.i18n_default_project("sharing")._,
        H = r.default.createElement,
        G = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.saveLinkSettings = function() {
                    var e = n.getLinkSettingsToUpdate();
                    e.errors || n.setState({
                        isSubmitting: !0
                    }, function() {
                        Promise.all(e.requests.map(function(e) {
                            return n.props.client.modifySharedLinkSettings(e)
                        })).then(function(e) {
                            E.sharingNotificationSuccess(B("Settings saved."));
                            for (var t = [], r = function(n) {
                                    var r = e.filter(function(e) {
                                        return n.url === e.url
                                    })[0];
                                    t.push(r || n)
                                }, s = 0, i = n.props.sharingInfo.sharedLinks(); s < i.length; s++) {
                                r(i[s])
                            }
                            n.props.actionHandler.setSharedLinks(t), n.props.actionHandler.refreshSharedWithColumnLinkData(), n.setState({
                                isSubmitting: !1
                            }), n.props.onDismiss && n.props.onDismiss()
                        }).catch(function() {
                            n.setState({
                                isSubmitting: !1
                            }), E.sharingNotificationError(B("There was a problem completing this request."))
                        })
                    })
                }, n.saveFileSettings = function() {
                    var e = g.getPolicyDiff(n.state.desiredPolicy, n.props.currentPolicy);
                    e && S.setStatePromise(n, {
                        isSubmitting: !0
                    }).then(function() {
                        return n.props.client.updatePolicy({
                            contentId: n.props.sharingInfo.contentId(),
                            newPolicy: e,
                            actions: Object.keys(f.ALPHA_FILE_METADATA_PERMISSIONS)
                        })
                    }).catch(I.catchApiError(function() {
                        n.setState({
                            isSubmitting: !1
                        }), Promise.reject({})
                    })).then(function(e) {
                        E.sharingNotificationSuccess(B("File settings updated")), n.setState({
                            isSubmitting: !1
                        }), n.props.currentPolicy && n.props.actionHandler.handleUpdateFilePolicy(e, n.props.currentPolicy), n.props.onDismiss && n.props.onDismiss()
                    })
                }, n.handleSetFolderPolicy = function() {
                    var e = g.getPolicyDiff(n.state.desiredPolicy, n.props.currentPolicy),
                        t = function(t) {
                            M.Snackbar.complete(B("Folder settings updated."), "set-folder-policy"), null != t && (n.props.actionHandler.handleUpdateSharingSettings(t), a.Dispatcher.dispatch({
                                type: i.SharePageActionTypes.FETCH_FOLDER_POLICY_SUCCESS,
                                user: n.props.user,
                                sharedFolderMetadata: t,
                                policyUpdate: e
                            }), n.props.onSuccessSharing && n.props.onSuccessSharing(), t.policy.shared_link_policy !== n.props.currentPolicy.shared_link_policy && (n.props.actionHandler.fetchLinkMetadata(), a.Dispatcher.dispatch({
                                type: o.SharedWithActionType.SIGNAL_SHARED_LINK_DATA_OUT_OF_DATE,
                                data: {
                                    fileFqPaths: [n.props.sharingInfo.displayPath()]
                                }
                            }))), n.props.onDismiss && n.props.onDismiss()
                        },
                        r = n.props.sharingInfo.metadata() && n.props.sharingInfo.metadata().shared_folder_id;
                    if (r) return n.props.client.updatePolicyAlpha({
                        contentId: r,
                        newPolicy: e,
                        url: null != n.props.linkMetadata ? n.props.linkMetadata.url : void 0
                    }).then(t);
                    var s = function(e) {
                        return n.props.actionHandler.reportShareFailure(e)
                    };
                    return n.props.actionHandler.shareIfFileFolder(B("Updating folder settings..."), e).then(t).catch(s)
                }, n.saveFolderSettings = function() {
                    n.props.isTeamSharedFolder || n.props.hasParentSharedFolder ? R.confirmRecursivePolicyChange({
                        isTeamSharedFolder: n.props.isTeamSharedFolder,
                        onConfirm: n.handleSetFolderPolicy,
                        onCancel: h.Modal.close
                    }) : S.setStatePromise(n, {
                        isSubmitting: !0
                    }).then(function() {
                        n.handleSetFolderPolicy().then(function() {
                            n.setState({
                                isSubmitting: !1
                            })
                        }).catch(I.catchApiError(function(e) {
                            return n.setState({
                                isSubmitting: !1
                            })
                        }))
                    })
                }, n.handleUnshareFolder = function() {
                    if (n.props.sharingInfo.metadata() && null != n.props.sharingInfo.metadata().shared_folder_id && n.props.sharingInfo.permissionsObj().canUnshare()) {
                        var e = function(e) {
                            return M.Snackbar.sync(T.reactFormat(B("Unsharing <st>%(folder_name)s</st>..."), {
                                st: r.default.createElement("strong", null),
                                folder_name: l.Emstring.em_snippet(n.props.folderName, f.SNIPPET_SIZES.FILENAME)
                            }), !0, "unshare-folder-notification"), n.props.client.unshare({
                                contentId: n.props.sharingInfo.metadata() && n.props.sharingInfo.metadata().shared_folder_id,
                                leaveACopy: e
                            }).then(function() {
                                return M.Snackbar.complete(T.reactFormat(B("Unshared <st>%(folder_name)s</st>."), {
                                    st: r.default.createElement("strong", null),
                                    folder_name: l.Emstring.em_snippet(n.props.folderName, f.SNIPPET_SIZES.FILENAME)
                                }), "unshare-folder-notification"), n.props.actionHandler.refreshSharedWithColumnContentData(), h.Modal.close(), a.Dispatcher.dispatch({
                                    type: i.SharePageActionTypes.UNSHARE_FOLDER_SUCCESS,
                                    metadata: n.props.sharingInfo.metadata(),
                                    user: n.props.user
                                })
                            }).catch(function(e) {
                                return "too_many_files" === e.error[".tag"] ? n.tooManyFilesSnackbar() : E.sharingNotificationError(e.message), a.Dispatcher.dispatch({
                                    type: i.SharePageActionTypes.UNSHARE_FOLDER_ERROR,
                                    metadata: n.props.sharingInfo.metadata(),
                                    user: n.props.user
                                })
                            })
                        };
                        return O.confirmResetAccess({
                            allowLeaveACopy: n.props.sharingInfo.permissionsObj().canLeaveACopy(),
                            contentName: n.props.folderName,
                            isFolder: !0,
                            isNestedSharedFolder: !!n.props.hasParentSharedFolder,
                            onCancel: function() {
                                return h.Modal.close()
                            },
                            onConfirm: e
                        })
                    }
                }, n.onSaveSettings = function() {
                    switch (n.getCurrentTab()) {
                        case D.FILE_SETTINGS:
                            return n.saveFileSettings();
                        case D.FOLDER_SETTINGS:
                            return n.saveFolderSettings();
                        case D.LINK_SETTINGS:
                            return n.saveLinkSettings();
                        default:
                            throw new Error("Unknown tab")
                    }
                }, n.onDeleteLink = function(e) {
                    n.props.actionHandler.refreshSharedWithColumnLinkData(), n.props.actionHandler.deleteLinkMetadata(e), n.props.onDismiss && n.props.onDismiss()
                }, n.handleUnshareLink = function() {
                    var e = n.props.linkMetadata;
                    if (e) {
                        var t = n.props.sharingInfo.getInitialProps().onDeleteLink || n.onDeleteLink;
                        y.deleteLinkWithConfirm({
                            client: n.props.client,
                            url: e.url,
                            contentName: e.name,
                            onDeleteLink: function() {
                                t(e)
                            }
                        })
                    }
                }, n.onUnshare = function() {
                    switch (n.getCurrentTab()) {
                        case D.FILE_SETTINGS:
                            n.handleUnshareFile();
                            break;
                        case D.FOLDER_SETTINGS:
                            n.handleUnshareFolder();
                            break;
                        case D.LINK_SETTINGS:
                            n.handleUnshareLink();
                            break;
                        default:
                            throw new Error("Unknown tab")
                    }
                }, n.renderPrimaryAction = function() {
                    return r.default.createElement(m.Button, {
                        className: "confirm-button u-mar-left-s",
                        variant: "primary",
                        disabled: !n.allowSaveSettings() || n.state.isSubmitting,
                        onClick: n.onSaveSettings
                    }, B(n.state.isSubmitting ? "Saving..." : "Save"))
                }, n.handlePolicyUpdate = function(e, t) {
                    n.setState({
                        desiredPolicy: n.state.desiredPolicy.set(e, t)
                    })
                }, n.onTabSelected = function(e) {
                    n.setState({
                        currentTab: e
                    })
                }, n.getCurrentTab = function() {
                    return n.state.currentTab || n.getTabs()[0].id
                }, n.handleLinkPolicyUpdate = function(e, t) {
                    var r = n.state.updatedLinkPolicies;
                    r[e.url] = t, n.setState({
                        updatedLinkPolicies: r
                    })
                }, n.state = {
                    currentTab: t.currentTab,
                    isSubmitting: !1,
                    updatedLinkPolicies: {},
                    desiredPolicy: t.currentPolicy
                }, n
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    return n.__generator(this, function(e) {
                        return this.setState({
                            isSubmitting: !1
                        }), [2]
                    })
                })
            }, t.prototype.getLinkSettingsToUpdate = function() {
                for (var e = {
                        errors: !1,
                        requests: []
                    }, t = 0, n = this.props.sharingInfo.sharedLinks(); t < n.length; t++) {
                    var r = n[t],
                        s = g.getLinkPolicy(r),
                        i = this.state.updatedLinkPolicies[r.url],
                        a = i || s,
                        o = r.isRighteousLink() ? g.getModifiedSettingsForRighteousLink(r, a, s) : g.getModifiedSettings(r, a, s);
                    if (o && o.settings) e.requests.push(o);
                    else if (null === o) {
                        e.errors = !0;
                        break
                    }
                }
                return e
            }, t.prototype.tooManyFilesSnackbar = function() {
                var e = function() {
                    return s.open_tab("/help/files-folders/unshare-folder#foldersize")
                };
                return M.Snackbar.show(H(M.Snackbar, {
                    actionButtonText: B("Learn more"),
                    closeButtonText: B("Close"),
                    onActionClick: e,
                    title: B("Unsharing unsuccessful. This folder has too many files."),
                    variant: "fail"
                }))
            }, t.prototype.render = function() {
                var e = this.getTabInfo(this.getCurrentTab());
                return r.default.createElement(p.UtilityModal, {
                    ariaLabel: this.renderTitle(),
                    title: this.renderTitle(),
                    overlayClickClose: !0,
                    primaryAction: this.renderPrimaryAction,
                    secondaryAction: B("Cancel"),
                    onPrimaryAction: this.onSaveSettings,
                    onSecondaryAction: this.props.onDismiss,
                    onLink: this.onUnshare,
                    link: this.renderUnshareButton(),
                    open: !0,
                    width: 580,
                    height: 662,
                    onRequestClose: this.props.onDismiss,
                    bodyClassName: "sharing-settings-utility-modal",
                    overlayClassName: "file-viewer-modal-overlay"
                }, r.default.createElement(u.FixedTabbedContainer, {
                    className: "sharing-settings-modal",
                    tabs: this.getTabs(),
                    activeTabId: this.getCurrentTab(),
                    onTabSelected: this.onTabSelected
                }, r.default.createElement("div", {
                    className: "sharing-settings-modal__banners"
                }, e.banner, e.description), r.default.createElement("div", {
                    className: "sharing-settings-modal__tab-content"
                }, e.content)))
            }, t.prototype.renderTitle = function() {
                var e = {
                    file_or_folder_name: l.Emstring.em_snippet(this.props.folderName, f.SNIPPET_SIZES.FILENAME)
                };
                return B("Settings for “%(file_or_folder_name)s”").format(e)
            }, t.prototype.handleUnshareFile = function() {
                var e = this,
                    t = function() {
                        return M.Snackbar.sync(T.reactFormat(B("Unsharing <st>%(file_name)s</st>..."), {
                            st: r.default.createElement("strong", null),
                            file_name: e.props.folderName
                        }), !0, "unshare-file-notification"), e.props.client.unshare({
                            contentId: e.props.sharingInfo.contentId()
                        }).then(function() {
                            a.Dispatcher.dispatch({
                                type: o.SharedWithActionType.SIGNAL_SHARED_FILE_DATA_OUT_OF_DATE,
                                data: {
                                    fileIds: [e.props.sharingInfo.contentId()]
                                }
                            }), M.Snackbar.complete(T.reactFormat(B("Unshared <st>%(file_name)s</st>."), {
                                st: r.default.createElement("strong", null),
                                file_name: e.props.folderName
                            }), "unshare-file-notification"), h.Modal.close()
                        })
                    };
                O.confirmResetAccess({
                    allowLeaveACopy: !1,
                    contentName: this.props.folderName,
                    isFolder: !1,
                    isNestedSharedFolder: !1,
                    onConfirm: t,
                    onCancel: function() {
                        return h.Modal.close()
                    }
                })
            }, t.prototype.renderUnshareButton = function() {
                var e;
                return this.getCurrentTab() === D.LINK_SETTINGS ? !this.showMultipleLinkInterface() && this.props.sharingInfo.canDeleteLink() && (e = B("Delete link")) : !this.props.sharingInfo.permissionsObj().canUnshare() || !this.props.isSharedFolder && this.props.isFolder || (e = B(this.props.isFolder ? this.props.isFolderInsideTeamFolderTree ? "Reset membership" : "Unshare folder" : "Unshare file")), e
            }, t.prototype.getTabs = function() {
                var e = [],
                    t = {
                        id: D.FILE_SETTINGS,
                        label: B("File settings")
                    },
                    n = {
                        id: D.FOLDER_SETTINGS,
                        label: B("Folder settings")
                    };
                this.props.currentPolicy && (e = this.props.isFolder ? [n] : [t]);
                var r = {
                    id: D.LINK_SETTINGS,
                    label: B("Link settings")
                };
                return this.showLinkSettingsTab() && e.push(r), e
            }, t.prototype.showLinkSettingsTab = function() {
                return !this.props.isTeamSharedFolder && !this.props.isInContentManager
            }, t.prototype.isTeamFolderTree = function() {
                return this.props.isTeamSharedFolder || this.props.isFolderInsideTeamFolderTree
            }, t.prototype.getFolderSettingsDescription = function() {
                var e;
                if (this.props.sharingInfo.permissionsObj().canChangeOptions() && !this.props.user.is_team_admin) return e = B(this.isTeamFolderTree() ? "Only team admins can change these settings" : g.getEffectivePolicyValue(D.ACL_UPDATE_POLICY, g.getPolicyDiff(this.state.desiredPolicy, this.props.currentPolicy), this.props.currentPolicy, this.shouldRenderContentManagerBridge(), this.props.teamPolicy, this.props.permissions)[1] ? "Only you (the owner) can change these settings." : "Only the owner can change these settings."), r.default.createElement(_.SharingModalBanner, {
                    className: "sharing-settings-modal__banner",
                    type: "default",
                    message: e
                })
            }, t.prototype.getFileSettingsDescription = function() {
                if (this.props.sharingInfo.permissionsObj().canChangeOptions()) return r.default.createElement(_.SharingModalBanner, {
                    className: "sharing-settings-modal__banner",
                    type: "default",
                    message: B("Anyone with edit access can change these settings.")
                })
            }, t.prototype.getFileSettingsBanner = function() {
                if (!this.props.sharingInfo.permissionsObj().canChangeOptions()) {
                    var e;
                    return this.props.currentPolicy && this.props.permissions && (e = g.getPassDenyReason(this.props.currentPolicy, this.props.permissions)), e || (e = B("You don’t have permission to change the settings on this file.")), r.default.createElement(_.SharingModalBanner, {
                        className: "sharing-settings-modal__banner",
                        type: "error",
                        message: e
                    })
                }
            }, t.prototype.shouldRenderContentManagerBridge = function() {
                return !this.props.isInContentManager && (!!C.GoldenGate.hasContentManagerAndSuperAdmin(this.props.user.id) && (!!this.props.isTeamSharedFolder || !(!this.props.isFolderInsideTeamFolderTree || !this.props.isUserOnOwnerTeam) && (this.props.currentTab === D.FOLDER_SETTINGS || !this.props.sharingInfo.permissionsObj().canInviteEditor())))
            }, t.prototype.getFolderSettingsBanner = function() {
                var e, t = B("These settings will apply to all folders inside “%(folder_name)s”.").format({
                    folder_name: this.props.folderName
                });
                if (this.props.isInContentManager) e = t;
                else if (this.shouldRenderContentManagerBridge()) {
                    var n = c.parent_dir(this.props.sharingInfo.fqPath()),
                        s = v.genContentManagerBridgeUri({
                            containingFolder: n,
                            filenameToSelect: this.props.folderName
                        }),
                        i = B("These settings will apply to all folders inside “%(folder_name)s”. You can change these settings in the Admin Console.").format({
                            folder_name: this.props.folderName
                        });
                    e = r.default.createElement("div", null, i + " ", r.default.createElement("div", null, r.default.createElement("a", {
                        href: s.toString(),
                        target: "_blank"
                    }, B("Go to Admin Console."))))
                } else if (this.isTeamFolderTree()) e = r.default.createElement("div", null, t + " ", r.default.createElement("div", null, r.default.createElement("a", {
                    href: "/team",
                    target: "_blank"
                }, B("To edit, ask your admin."))));
                else {
                    if (this.props.sharingInfo.permissionsObj().canChangeOptions()) return;
                    e = B("You don’t have permission to change the settings on this folder.")
                }
                return r.default.createElement(_.SharingModalBanner, {
                    className: "sharing-settings-modal__banner",
                    type: "error",
                    message: e
                })
            }, t.prototype.getLinkSettingsBanner = function() {
                if (this.props.linkMetadata && (!this.props.sharingInfo || !this.props.sharingInfo.isCloudDoc())) {
                    var e = this.props.linkMetadata.link_permissions.visibility_policies.filter(function(e) {
                            return e.disallowed_reason === A.VisibilityDisallowedReason.user_account_type
                        }),
                        t = this.props.linkMetadata.link_permissions.can_disallow_download;
                    if (e.length > 0 || t === !1) {
                        var n, s, i = null;
                        1 === this.props.user.is_team ? (n = "/team/upgrade", s = B("Upgrade to %(trademark_business)s to enable all link settings.").format({
                            trademark_business: b.TRADEMARK_BUSINESS
                        })) : (n = "/upgrade?oqa=sfp&_tk=sg_pro_bundle_header", s = B("Upgrade to Dropbox %(trademark_professional)s to enable all link settings.").format({
                            trademark_professional: b.TRADEMARK_PROFESSIONAL
                        }), 1 === this.props.user.paid && (i = r.default.createElement("div", {
                            className: "sharing-settings-modal__pro-bundle-upsell-header"
                        }, r.default.createElement(x.ProBundleUpsellHeader, {
                            user: this.props.user
                        }))));
                        var a = r.default.createElement("div", null, r.default.createElement("a", {
                            href: n,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, s), i);
                        return r.default.createElement(_.SharingModalBanner, {
                            className: "sharing-settings-modal__banner",
                            type: "default",
                            message: a
                        })
                    }
                }
            }, t.prototype.getFolderSettingPolicies = function() {
                var e = [];
                return Boolean(this.props.ownerTeam) && e.push(D.MEMBER_POLICY), e.push(D.ACL_UPDATE_POLICY), Boolean(this.props.ownerTeam) && e.push(D.FOLDER_LINK_AUDIENCE_POLICY), this.props.currentPolicy && (this.props.currentPolicy instanceof A.FilePolicy || this.props.currentPolicy instanceof A.FolderPolicy) && null != this.props.currentPolicy.viewer_info_policy && !this.shouldRenderContentManagerBridge() && e.push(D.VIEWER_INFO_POLICY), e
            }, t.prototype.getFileSettingPolicies = function() {
                var e = [];
                return this.props.currentPolicy && (this.props.currentPolicy instanceof A.FilePolicy || this.props.currentPolicy instanceof A.FolderPolicy) && null != this.props.currentPolicy.viewer_info_policy && e.push(D.VIEWER_INFO_POLICY), e
            }, t.prototype.getTabInfo = function(e) {
                switch (e) {
                    case D.FILE_SETTINGS:
                        return {
                            title: B("File settings"),
                            banner: this.getFileSettingsBanner(),
                            description: this.getFileSettingsDescription(),
                            content: this.getFileFolderSettingsContent(this.getFileSettingPolicies())
                        };
                    case D.FOLDER_SETTINGS:
                        return {
                            title: B("Folder settings"),
                            banner: this.getFolderSettingsBanner(),
                            description: this.getFolderSettingsDescription(),
                            content: this.getFileFolderSettingsContent(this.getFolderSettingPolicies())
                        };
                    case D.LINK_SETTINGS:
                        return {
                            title: B("Link settings"),
                            banner: this.getLinkSettingsBanner(),
                            description: null,
                            content: this.getLinkSettingsContent()
                        };
                    default:
                        throw new Error("tabName not found")
                }
            }, t.prototype.getFileFolderSettingsContent = function(e) {
                var t = g.getPolicyDiff(this.state.desiredPolicy, this.props.currentPolicy);
                return r.default.createElement(k.SharingSettingsFileFolderPolicyView, {
                    policies: e,
                    policyUpdate: t,
                    isFolder: this.props.isFolder,
                    isTeamSharedFolder: this.props.isTeamSharedFolder,
                    isFolderInsideTeamFolderTree: this.props.isFolderInsideTeamFolderTree,
                    teamPolicy: this.props.teamPolicy,
                    ownerTeam: this.props.ownerTeam,
                    inPlusToProTrial: this.isPlusToProTrialEnabled(),
                    onPolicyUpdate: this.handlePolicyUpdate,
                    currentPolicy: this.props.currentPolicy,
                    showContentManagerBridge: this.shouldRenderContentManagerBridge(),
                    permissions: this.props.permissions
                })
            }, t.prototype.showMultipleLinkInterface = function() {
                return this.props.sharingInfo && this.props.sharingInfo.isMultipleLinkInterfaceEnabled()
            }, t.prototype.isPlusToProTrialEnabled = function() {
                return this.props.sharingInfo && this.props.sharingInfo.isPlusToProTrialEnabled()
            }, t.prototype.getLinkSettingsContent = function() {
                return this.showMultipleLinkInterface() ? this.renderMultipleLinkPolicies() : this.renderSingleLinkPolicy()
            }, t.prototype.renderMultipleLinkPolicies = function() {
                if (this.props.sharingInfo) return r.default.createElement(P.SharingSettingsLinksSection, {
                    client: this.props.client,
                    sharingInfo: this.props.sharingInfo,
                    sharingPrefs: this.props.sharingPrefs,
                    updatedLinkPolicies: this.state.updatedLinkPolicies,
                    onDeleteLink: this.onDeleteLink,
                    onPolicyUpdate: this.handleLinkPolicyUpdate,
                    inPlusToProTrials: this.isPlusToProTrialEnabled()
                })
            }, t.prototype.renderSingleLinkPolicy = function() {
                if (this.props.linkMetadata) {
                    var e = g.getLinkPolicy(this.props.linkMetadata),
                        t = this.state.updatedLinkPolicies[this.props.linkMetadata.url];
                    return this.props.linkMetadata.isRighteousLink() ? r.default.createElement(L.SharingSettingsRighteousLinkPolicyView, {
                        isInRighteousLinkSettings: this.props.sharingPrefs.in_righteous_link_settings,
                        linkMetadata: this.props.linkMetadata,
                        linkPolicy: t || e,
                        onPolicyUpdate: this.handleLinkPolicyUpdate
                    }) : r.default.createElement(w.SharingSettingsLinkPolicyView, {
                        isFolder: this.props.isFolder,
                        linkPolicy: t || e,
                        linkMetadata: this.props.linkMetadata,
                        onPolicyUpdate: this.handleLinkPolicyUpdate,
                        inPlusToProTrials: this.isPlusToProTrialEnabled(),
                        getPolicyDict: F.getShmodelPolicyDict
                    })
                }
                return r.default.createElement("div", {
                    className: "sharing-settings-modal__link-policy--full"
                }, r.default.createElement("div", {
                    className: "sharing-settings-modal__link-policy-text"
                }, B("No link created yet.")))
            }, t.prototype.allowSaveSettings = function() {
                return this.getCurrentTab() === D.LINK_SETTINGS ? Object.keys(this.state.updatedLinkPolicies).length > 0 : !this.state.desiredPolicy.equals(this.props.currentPolicy)
            }, t.displayName = "SharingSettingsModal", t
        })(r.default.Component);
    t.SharingSettingsModalUnstyled = G;
    var V = d.requireCssWithComponent(G, ["/static/css/sharing/share_modal-vflQ4lIdH.css", "/static/css/modal-vflKK1XSJ.css", "/static/js/spectrum-sharing/index.web-vflUpo_2f.css"]);
    t.SharingSettingsModal = V;
    var q = function(e) {
            return r.default.createElement(G, n.__assign({}, e))
        },
        j = d.requireCssWithComponent(U.withProBundleTracking(q), ["/static/css/modal-vflKK1XSJ.css", "/static/css/sharing/share_modal-vflQ4lIdH.css"]);
    t.ShareLinkSettingsModalContentsWithProBundleTracking = j
}), define("modules/clean/sharing/sharing_settings_util", ["require", "exports", "tslib", "modules/clean/previews/util", "external/lodash", "modules/clean/sharing/api/types/metadata", "modules/clean/api_v2/datetime", "modules/clean/sharing/sharing_settings_constants", "modules/clean/sharing/ui_notifications_util", "modules/core/i18n"], function(e, t, n, r, s, i, a, o, l, c) {
    "use strict";

    function d(e, t, n, r) {
        switch (e) {
            case o.VIEWER_INFO_POLICY:
                return !r && (!!n && (t && "enabled" === t.get(o.VIEWER_INFO_POLICY) ? !!n.disable_viewer_info && n.disable_viewer_info.allow : !!n.enable_viewer_info && n.enable_viewer_info.allow));
            default:
                return !1
        }
    }

    function u(e) {
        switch (e) {
            case "restricted_by_parent_folder":
                return v("This setting is turned off for all files in this folder.");
            case "restricted_by_team":
                return v("Your admin has disabled this setting.");
            default:
                return
        }
    }

    function p(e, t) {
        return "enabled" === e.get(o.VIEWER_INFO_POLICY) ? t.disable_viewer_info ? u(t.disable_viewer_info.reason) : void 0 : t.enable_viewer_info ? u(t.enable_viewer_info.reason) : void 0
    }

    function m(e) {
        return [o.VIEWER_INFO_POLICY].indexOf(e) !== -1
    }

    function h(e, t) {
        var n;
        return n = t instanceof i.FilePolicy ? new i.FilePolicy : t instanceof i.FolderPolicy ? new i.FolderPolicy : new i.LinkPolicy, e.keySeq().toArray().map(function(r) {
            var i = e.get(r),
                a = t.get(r);
            ("object" == typeof i ? s.isEqual(i, a) : i === a) || (n = n.set(r, i))
        }), n
    }

    function _(e, t, n, r, s, i) {
        var a, o = y[e];
        null != o && null != s && (a = s.get(o));
        var l = null != (null != t ? t.get(e) : void 0) ? null != t ? t.get(e) : void 0 : n.get(e),
            c = null != i.change_options && i.change_options.allow;
        return null != a && I[o] === a && (c = !1, l = b[o]), m(e) && (c = d(e, n, i, r)), r && (c = !1), [l, c]
    }

    function f(e) {
        var t = e.link_permissions.requested_visibility,
            n = e.link_permissions.resolved_visibility;
        return t === i.RequestedVisibilityPolicy.public && n === i.ResolvedVisibilityPolicy.team_only && (t = i.RequestedVisibilityPolicy.team_only), new i.LinkPolicy({
            requested_visibility: t,
            link_password: t === i.RequestedVisibilityPolicy.password ? null : "",
            expires: e.expires,
            allow_download: e.link_permissions.allow_download,
            audience: e.link_permissions.effective_audience
        })
    }

    function g(e, t, n) {
        var r = t;
        if (r.requested_visibility === i.RequestedVisibilityPolicy.password) {
            if (null == r.link_password) r = r.set("requested_visibility", null);
            else if ("" === r.link_password) return l.sharingNotificationError(v("Password can’t be empty")), null
        } else r = r.set("link_password", null);
        return e.link_permissions.resolved_visibility === i.ResolvedVisibilityPolicy.shared_folder_only && (r = r.set("requested_visibility", null)), null != r.expires && (r = e.link_permissions.can_set_expiry ? r.set("expires", a.formatTimestamp(r.expires)) : r.set("expires", null)), r.allow_download === n.allow_download && (r = r.set("allow_download", void 0)), {
            url: e.url,
            settings: r,
            remove_expiration: null != e.expires && null == t.expires
        }
    }

    function S(e, t, n) {
        if (t != n) return g(e, t, n)
    }

    function E(e, t) {
        if (!e) return !1;
        if (null != (null != t ? t.preview_type : void 0)) {
            var n = t.preview_type;
            if (Array.from(r.VALID_PREVIEW_TYPES).includes(n)) return !1
        }
        return !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importStar(s), c = n.__importStar(c);
    var v = c.i18n_default_project("sharing")._,
        I = {
            shared_folder_member_policy: "team"
        },
        b = {
            shared_folder_member_policy: "team"
        },
        y = {
            member_policy: "shared_folder_member_policy"
        };
    t.canChangePolicy = d, t.denyReasonToDenyString = u, t.getPassDenyReason = p, t.isCommonSharingSettingsPolicy = m, t.getPolicyDiff = h, t.getEffectivePolicyValue = _, t.getLinkPolicy = f, t.getModifiedSettings = g, t.getModifiedSettingsForRighteousLink = S, t.shouldRenderNoPreviewFileWarning = E
}), define("modules/clean/sharing/stores/sharing_info", ["require", "exports", "tslib", "modules/constants/python", "modules/clean/flux/base_store", "modules/clean/sharing/action_types", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/share_modal/store/experiments/reducer", "modules/clean/sharing/share_modal/store/modal_info/reducer", "modules/clean/sharing/share_modal/store/sharing_info/reducer", "modules/clean/sharing/access_level", "modules/clean/sharing/stores/sharing_info_util", "modules/clean/sharing/ui_util", "modules/constants/sharing", "modules/core/exception", "external/lodash", "modules/constants/sharing"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), _ = n.__importStar(_);
    var g = function(e, t) {
            return t = String(t), t.startsWith("id:") || (t = t.toLowerCase()), e + "::" + t
        },
        S = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.sharingInfoMap = {}, t
            }
            return n.__extends(t, e), t.prototype.getSharingInfo = function(e, t) {
                return t ? this.sharingInfoMap[g(e, t)] : null
            }, t.prototype.mapContentIdsToSharingInfo = function(e, t, n) {
                for (var r = 0, s = t; r < s.length; r++) {
                    var i = s[r];
                    i && (this.sharingInfoMap[g(e, i)] = n)
                }
            }, t.prototype._new_payload = function(e) {
                var t = this;
                if (e && e.action && e.action.type) switch (e.action.type) {
                    case i.SharingActionTypes.CLEAR_EVERYTHING:
                        this.sharingInfoMap = {};
                        break;
                    case i.SharingActionTypes.FETCH_METADATA_BATCH_SUCCESS:
                        var n = e.action.user;
                        e.action.data.forEach(function(e) {
                            t._new_payload_for_single_content(i.ShareModalActionTypes.FETCH_METADATA_SUCCESS, n, u.getContentIdsForMetadata(e), {
                                metadata: e
                            })
                        }), this.emit_change();
                        break;
                    default:
                        if (!e.action.contentIds) return;
                        this._new_payload_for_single_content(e.action.type, e.action.user, e.action.contentIds, e.action.data), this.emit_change()
                }
            }, t.prototype._new_payload_for_single_content = function(e, t, n, r) {
                h.assert(Boolean(t.id), "valid user needed"), h.assert(n.length > 0, "contentIds cannot be empty");
                for (var s, i = 0, a = n; i < a.length; i++) {
                    var d = a[i],
                        u = g(t.id, d);
                    if (u in this.sharingInfoMap) {
                        s = this.sharingInfoMap[u];
                        break
                    }
                }
                s || (s = new v(t));
                var p = {
                    type: e,
                    payload: r,
                    user: t
                };
                return s.setState(o.experimentsReducer(s.experimentsState(), p), l.modalInfoReducer(s.modalInfoState(), p), c.sharingInfoReducer(s.sharingInfoState(), p)), n.push(s.fqPath()), this.mapContentIdsToSharingInfo(t.id, n, s), s
            }, t
        })(s.Store);
    t.sharingInfoStore = new S;
    var E = (function() {
        function e(e) {
            this.change_options = _.get(e, "change_options.allow", !1), this.edit_contents = _.get(e, "edit_contents.allow", !1), this.invite_editor = _.get(e, "invite_editor.allow", !1), this.invite_viewer = _.get(e, "invite_viewer.allow", !1), this.relinquish_membership = _.get(e, "relinquish_membership.allow", !1), this.leave_a_copy = _.get(e, "leave_a_copy.allow", !1), this.create_edit_link = _.get(e, "create_edit_link.allow"), this.create_view_link = _.get(e, "create_view_link.allow", !1), this.unshare = _.get(e, "unshare.allow", !1), this.update_confidentiality = _.get(e, "update_confidentiality.allow", !1), this.is_file_permissions = e instanceof a.FilePermissions, this.share_message_as_comment = _.get(e, "share_message_as_comment.allow", !1)
        }
        return e.prototype.canChangeOptions = function() {
            return this.change_options
        }, e.prototype.canEdit = function() {
            return this.edit_contents
        }, e.prototype.canInviteEditor = function() {
            return this.invite_editor
        }, e.prototype.canInviteViewer = function() {
            return this.invite_viewer
        }, e.prototype.canInvite = function() {
            return this.canInviteViewer() || this.canInviteEditor()
        }, e.prototype.canRelinquishMembership = function() {
            return this.relinquish_membership
        }, e.prototype.canCreateEditLink = function() {
            return this.is_file_permissions && this.create_edit_link
        }, e.prototype.canCreateViewLink = function() {
            return this.is_file_permissions && this.create_view_link
        }, e.prototype.canUnshare = function() {
            return this.unshare
        }, e.prototype.canUpdateConfidentiality = function() {
            return this.update_confidentiality
        }, e.prototype.canLeaveACopy = function() {
            return this.leave_a_copy
        }, e.prototype.canShareMessageAsComment = function() {
            return this.share_message_as_comment
        }, e
    })();
    t.Permissions = E;
    var v = (function() {
        function e(e) {
            this._user = e, this.setState(o.getInitialExperimentsState(), l.initialModalInfoState, c.initialSharingInfoState)
        }
        return e.prototype.setState = function(e, n, r) {
            this._experiments = e, this._modalInfo = n, this._sharingInfoState = r, r.metadata && t.sharingInfoStore.mapContentIdsToSharingInfo(this._user.id, u.getContentIdsForMetadata(r.metadata), this)
        }, e.prototype.sharingInfoState = function() {
            return this._sharingInfoState
        }, e.prototype.experimentsState = function() {
            return this._experiments
        }, e.prototype.modalInfoState = function() {
            return this._modalInfo
        }, e.prototype.user = function() {
            return this._user
        }, e.prototype.hasNonSelfMembers = function() {
            var e = this.members(),
                t = e && e.getMemberCount();
            if (!t) return !1;
            if (1 === t && 1 === e.users.count()) {
                return e.users.first().account_id !== this._user.account_id
            }
            return !0
        }, e.prototype.hasNonOwnerMembers = function() {
            return this.hasNonSelfMembers() && this.isOwner()
        }, e.prototype.hasOutsideTeamMembers = function() {
            var e = this.memberCounts();
            return (e ? e.users_outside_team : 0) > 0
        }, e.prototype.memberNum = function() {
            var e = this.memberCounts(),
                t = this.members();
            return e && e.total_unique_users ? e.total_unique_users : t ? t.getMemberCount() : void 0
        }, e.prototype.memberCountWithRecipients = function() {
            return (this.memberNum() || 0) + p.getMemberCountForTokens(this.recipientTokens())
        }, e.prototype.getInitialProps = function() {
            return this.modalInfoState().initialProps
        }, e.prototype.areMembersFullyLoaded = function() {
            return this.sharingInfoState().areMembersFullyLoaded
        }, e.prototype.areSharingPrefsLoaded = function() {
            return this.sharingInfoState().areSharingPrefsLoaded
        }, e.prototype.sharingPrefs = function() {
            return this.sharingInfoState().sharingPrefs
        }, e.prototype.canShareLink = function() {
            return !this.isConfidentialFolder() && !this.isTeamSharedFolder() && this.contentInfo().pathExists() && this.contentInfo().isMounted()
        }, e.prototype.canDeleteLink = function() {
            var e = this.linkMetadata();
            return Boolean(e && e.link_permissions.can_revoke)
        }, e.prototype.contactsError = function() {
            return this.experimentsState().ujMagnet2018SuggestableUserDataPromise ? {
                message: p.loadingIndicator(),
                level: p.ContactsErrorLevel.Warn
            } : p.validateContacts(this.recipientTokens(), this._user, this.ownerTeam(), this.folderPolicy(), this.isTeamSharedFolder(), this.isFolderInsideTeamFolderTree(), this.memberCountWithRecipients(), this.expUjMagnet2018SuggestableUserData(), this.contentInfo(), this.recipientMessage())
        }, e.prototype.contentId = function() {
            return this.contentInfo().id
        }, e.prototype.contentInfo = function() {
            return this.modalInfoState().contentInfo
        }, e.prototype.contentNameInputValue = function() {
            return this.modalInfoState().contentNameInputValue
        }, e.prototype.contentNameMessage = function() {
            return this.modalInfoState().contentNameMessage
        }, e.prototype.contentNameMessageLevel = function() {
            return this.modalInfoState().contentNameMessageLevel
        }, e.prototype.displayPath = function() {
            var e = this.metadata();
            return this.contentInfo().displayPath() || e && e.path_display || ""
        }, e.prototype.parentFolderName = function() {
            if (this.isRaclOnGgEnabled()) {
                var e = this.metadata();
                if (e && e instanceof a.SharedFileMetadata) {
                    var t = e.path_display;
                    if (t) {
                        var n = t.split("/");
                        if (n.length > 1) return n[n.length - 2]
                    }
                }
                return e && e instanceof a.SharedFolderMetadata ? e.parent_folder_name || "" : ""
            }
            var t = this.displayPath();
            if (t) {
                var n = t.split("/");
                if (n.length > 1) return n[n.length - 2]
            }
            return ""
        }, e.prototype.expTwoLinkRedesign = function() {
            return this.experimentsState().twoLinkRedesign
        }, e.prototype.expPlusToPro = function() {
            return this.experimentsState().plusToPro
        }, e.prototype.expUjMagnet2018SuggestableUserData = function() {
            return this.experimentsState().ujMagnet2018SuggestableUserData
        }, e.prototype.expUjMagnet2018SuggestableUserDataPromise = function() {
            return this.experimentsState().ujMagnet2018SuggestableUserDataPromise
        }, e.prototype.expUjMagnet2018ShouldLogExposure = function() {
            return this.experimentsState().ujMagnet2018ShouldLogExposure
        }, e.prototype.expUjMagnet2018LastEmails = function() {
            return this.experimentsState().ujMagnet2018LastEmails
        }, e.prototype.expLinkSettingsEmbed = function() {
            return this.experimentsState().linkSettingsEmbed
        }, e.prototype.expLinkSettingsShareModal = function() {
            return this.experimentsState().linkSettingsShareModal
        }, e.prototype.expRaclOnGg = function() {
            return this.experimentsState().raclOnGg
        }, e.prototype.fetchingMembersRequest = function() {
            return this.sharingInfoState().fetchingMembersRequest
        }, e.prototype.fetchingMetadataPromise = function() {
            return this.sharingInfoState().fetchingMetadataPromise
        }, e.prototype.filePolicy = function() {
            var e = this.metadata();
            return e && e.file_policy
        }, e.prototype.folderPolicy = function() {
            var e = this.metadata();
            return e && e.policy
        }, e.prototype.fqPath = function() {
            return this.contentInfo().displayPath()
        }, e.prototype.hasChangedSharingSettings = function() {
            return this.modalInfoState().hasChangedSharingSettings
        }, e.prototype.hasDisplayableMembers = function() {
            return this.sharingInfoState().hasDisplayableMembers
        }, e.prototype.hasParentSharedFolder = function() {
            var e = this.metadata();
            return !!e && e.is_inside_team_folder
        }, e.prototype.initialRecipientRawInput = function() {
            return this.modalInfoState().initialRecipientRawInput
        }, e.prototype.initialRecipientTokens = function() {
            return this.modalInfoState().initialRecipientTokens
        }, e.prototype.isNonUserRelativeContext = function() {
            return this.getInitialProps().isInContentManager
        }, e.prototype.isFolder = function() {
            return this.contentInfo().isFolder()
        }, e.prototype.isConfidentialFolder = function() {
            var e = this.metadata();
            return Boolean(e && e.is_confidential)
        }, e.prototype.isContentNameFocused = function() {
            return this.modalInfoState().isContentNameFocused
        }, e.prototype.isFolderInsideTeamFolderTree = function() {
            var e = this.metadata();
            return !!e && e.is_inside_team_folder
        }, e.prototype.isInsideSharedFolder = function() {
            var e = this.metadata();
            return Boolean(e && e.parent_shared_folder_id || this.contentInfo().isInSharedFolder())
        }, e.prototype.isLinkMetadataLoaded = function() {
            return this.sharingInfoState().isLinkMetadataLoaded
        }, e.prototype.isMetadataLoaded = function() {
            return Boolean(this.metadata())
        }, e.prototype.isOwner = function() {
            var e = this.metadata();
            return Boolean(e && e.access_type === d.ACCESS_LEVEL.OWNER)
        }, e.prototype.isOSXPackage = function() {
            var e = this.displayPath(),
                t = e.substr(e.lastIndexOf("."));
            return r.PACKAGE_EXTS.indexOf(t) >= 0
        }, e.prototype.isUserOnOwnerTeam = function() {
            var e = this.metadata();
            return Boolean(e && e.owner_team && e.owner_team.id === this._user.team_dbtid)
        }, e.prototype.isTeamPolicyLoaded = function() {
            return this.sharingInfoState().isTeamPolicyLoaded
        }, e.prototype.isTeamSharedFolder = function() {
            var e = this.metadata();
            return Boolean(e && e.is_team_folder || this.contentInfo().isTeamSharedFolder())
        }, e.prototype.isTokenizerEmpty = function() {
            return 0 === this.recipientRawInput().length && 0 === this.recipientTokens().length
        }, e.prototype.linkMetadata = function() {
            return this.sharingInfoState().linkMetadata
        }, e.prototype.sharedLinks = function() {
            return this.sharingInfoState().sharedLinks || []
        }, e.prototype.editRighteousLink = function() {
            return this.sharedLinks().filter(function(e) {
                return "editor" === e.link_permissions.link_access_level
            })[0]
        }, e.prototype.viewRighteousLink = function() {
            return this.sharedLinks().filter(function(e) {
                return "viewer" === e.link_permissions.link_access_level
            })[0]
        }, e.prototype.linkOnlyReason = function() {
            return this.modalInfoState().linkOnlyReason
        }, e.prototype.memberCounts = function() {
            return this.sharingInfoState().memberCounts
        }, e.prototype.members = function() {
            return this.sharingInfoState().members
        }, e.prototype.metadata = function() {
            return this.sharingInfoState().metadata
        }, e.prototype.name = function() {
            var e = this.contentInfo(),
                t = this.metadata();
            return e && e.name() || t && t.name || ""
        }, e.prototype.ownerTeam = function() {
            var e = this.metadata();
            return e && e.owner_team
        }, e.prototype.parentSharedFolderId = function() {
            var e = this.metadata();
            return e && e.parent_shared_folder_id
        }, e.prototype.pendingMemberAction = function() {
            return this.modalInfoState().pendingMemberAction
        }, e.prototype.permissionsObj = function() {
            return new E(this.permissions())
        }, e.prototype.permissions = function() {
            var e = this.metadata();
            return e && e.permissions
        }, e.prototype.recipientAccess = function() {
            var e = this.modalInfoState();
            return e.recipientAccess ? e.recipientAccess : this.permissionsObj().canInviteEditor() ? d.ACCESS_LEVEL.WRITER : d.ACCESS_LEVEL.READER
        }, e.prototype.recipientMessage = function() {
            return this.modalInfoState().recipientMessage
        }, e.prototype.onCreateGroupCallback = function() {
            return this.modalInfoState().onCreateGroupCallback
        }, e.prototype.recipientRawInput = function() {
            return this.modalInfoState().recipientRawInput
        }, e.prototype.recipientTokens = function() {
            return this.modalInfoState().recipientTokens
        }, e.prototype.shareAsConfidential = function() {
            return Boolean(this.getInitialProps().shareAsConfidential)
        }, e.prototype.shareFolderPromise = function() {
            return this.sharingInfoState().shareFolderPromise
        }, e.prototype.shouldBlockMemberListOnPassLoad = function() {
            return this.sharingInfoState().shouldBlockMemberListOnPassLoad
        }, e.prototype.shouldSyncThisFolder = function() {
            return this.getInitialProps() ? this.getInitialProps().shouldSyncThisFolder : null
        }, e.prototype.teamPolicy = function() {
            return this.sharingInfoState().teamPolicy
        }, e.prototype.uiMode = function() {
            return this.modalInfoState().uiMode
        }, e.prototype.isCloudDoc = function() {
            var e = this.metadata();
            return !(!e || !e.is_cloud_doc)
        }, e.prototype.comments2IntegrationIsOn = function() {
            var e = f.SHARING_EXPERIMENTS.SPECTRUM_COMMENTS2_INTEGRATION[this.user().role];
            return this.contentInfo().isFile() && e
        }, e.prototype.isShareMessageAsCommentChecked = function() {
            var e = this.modalInfoState().isShareMessageAsCommentExplicitlyChecked;
            return void 0 === e ? this.permissionsObj().canShareMessageAsComment() : e
        }, e.prototype.isTwoLinkRedesignEnabled = function() {
            var e = this.expTwoLinkRedesign();
            return !!e && e.is_active && "ON" === e.variant
        }, e.prototype.isMultipleLinkInterfaceEnabled = function() {
            return this.isCloudDoc() || this.isTwoLinkRedesignEnabled()
        }, e.prototype.isPlusToProTrialEnabled = function() {
            var e = this.expPlusToPro();
            return !!e && e.is_active && "ON" === e.variant
        }, e.prototype.isRaclOnGgEnabled = function() {
            var e = this.expRaclOnGg();
            return !!e && e.is_active && "ON" === e.variant
        }, e.prototype.hasShowcaseFreemium = function() {
            return m.SHOWCASE.HAS_SHOWCASE_FREEMIUM
        }, e.prototype.hasCreatedShowcase = function() {
            return m.SHOWCASE.HAS_CREATED_SHOWCASE
        }, e
    })();
    t.SharingInfo = v
}), define("modules/clean/sharing/stores/sharing_info_util", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getContentIdsForMetadata = function(e) {
        return [e.shared_folder_id, e.id, e.path_lower].filter(function(e) {
            return !!e
        })
    }, t.getContentIdsForContentInfo = function(e) {
        var t = [];
        return e.isSharedFolder() ? t.push(e.sharedFolderId()) : (e.extras.fileId && t.push(e.extras.fileId), e.extras.nsId && e.extras.nsPath && t.push("ns:" + e.nsId() + e.nsPath())), e.displayPath() && t.push(e.displayPath()), t
    }
}), define("modules/clean/sharing/strings", ["require", "exports", "tslib", "modules/clean/sharing/access_level", "modules/clean/sharing/constants", "modules/core/i18n"], function(e, t, n, r, s, i) {
    "use strict";
    var a, o, l, c, d, u, p;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importStar(i);
    var m = i.i18n_default_project("sharing")._,
        h = (a = {}, a[r.ACCESS_LEVEL.OWNER] = m("Owner"), a[r.ACCESS_LEVEL.WRITER] = m("Can edit"), a[r.ACCESS_LEVEL.READER] = m("Can view"), a[r.ACCESS_LEVEL.READER_NO_COMMENT] = m("View-only"), a);
    t.ACCESS_NAME = h;
    var _ = (o = {}, o[r.ACCESS_LEVEL.OWNER] = m("Owner"), o[r.ACCESS_LEVEL.WRITER] = m("Can edit"), o[r.ACCESS_LEVEL.READER] = m("Can comment"), o[r.ACCESS_LEVEL.READER_NO_COMMENT] = m("Can view"), o);
    t.ACCESS_NAME_NO_COMMENT = _;
    var f = (l = {}, l[s.MEMBER_ACTION.MAKE_EDITOR] = m("People can edit, delete, comment, and add the files to their Dropbox"), l[s.MEMBER_ACTION.MAKE_VIEWER] = m("People can view, download, and comment"), l[s.MEMBER_ACTION.MAKE_VIEWER_NO_COMMENT] = m("People can only view and download the files"), l);
    t.MEMBER_ACTION_FOLDER = f;
    var g = (c = {}, c[s.MEMBER_ACTION.MAKE_EDITOR] = m("People can edit, delete, comment, and add the file to their Dropbox"), c[s.MEMBER_ACTION.MAKE_VIEWER] = m("People can view, download, and comment"), c[s.MEMBER_ACTION.MAKE_VIEWER_NO_COMMENT] = m("People can only view and download the file"), c);
    t.MEMBER_ACTION_FILE = g;
    var S = (d = {}, d[s.MEMBER_ACTION.MAKE_EDITOR] = m("People can edit and comment"), d[s.MEMBER_ACTION.MAKE_VIEWER] = m("People can view and comment"), d);
    t.MEMBER_ACTION_CLOUD_DOC = S;
    var E = (u = {}, u[s.MEMBER_ACTION.MAKE_EDITOR] = m("Lets them view, comment, and edit."), u[s.MEMBER_ACTION.MAKE_VIEWER] = m("Lets them view and comment, but not edit."), u[s.MEMBER_ACTION.MAKE_VIEWER_NO_COMMENT] = m("Lets them view only. They can’t see comments."), u);
    t.MEMBER_ACTION_FOLDER_NO_COMMENT = E;
    var v = (p = {}, p[s.MEMBER_ACTION.MAKE_EDITOR] = m("Lets them view, comment, and edit."), p[s.MEMBER_ACTION.MAKE_VIEWER] = m("Lets them view and comment, but not edit."), p[s.MEMBER_ACTION.MAKE_VIEWER_NO_COMMENT] = m("Lets them view only. They can’t see comments."), p);
    t.MEMBER_ACTION_FILE_NO_COMMENT = v
}), define("modules/clean/sharing/views/constants", ["require", "exports", "tslib", "external/lodash", "modules/core/i18n"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importStar(s);
    var i, a = s.i18n_default_project("sharing")._;
    (function(e) {
        e[e.NO_MEMBERS = 0] = "NO_MEMBERS", e[e.INPUT_CONTENT_NAME = 1] = "INPUT_CONTENT_NAME"
    })(i = t.BANNERS || (t.BANNERS = {}));
    var o;
    (function(e) {
        e[e.INFO = 0] = "INFO", e[e.ERROR = 1] = "ERROR"
    })(o = t.CONTENT_NAME_MESSAGE_LEVELS || (t.CONTENT_NAME_MESSAGE_LEVELS = {}));
    var l;
    (function(e) {
        e.LINK_ONLY = "link-only", e.LOADING = "loading", e.MEMBERSHIP = "membership", e.POINTER = "pointer", e.SHARE = "share", e.SHARE_SENDING = "share-sending"
    })(l = t.MODES || (t.MODES = {}));
    (function(e) {
        e.INSIDE_SHARED_FOLDER = "inside_shared_folder", e.CONTAINS_SHARED_FOLDER = "contains_shared_folder", e.LINKS_PAGE = "links_page"
    })(t.LINK_ONLY_REASON || (t.LINK_ONLY_REASON = {})), t.CONTENT_NAME_EMPTY_TOOLTIP = a("Name your shared folder"), t.MODE_VALUES = r.values(l), t.BANNER_VALUES = r.values(i), t.CONTENT_NAME_MESSAGE_LEVEL_VALUES = r.values(o)
}), define("modules/clean/sharing/views/exp_pro_bundle_tracker", ["require", "exports", "modules/clean/growth/user_action/tracker"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TrackerProps = n.TrackerProps, t.trackerProject = "uj_showcase_upsell", t.proBundleFeatureName = "sharegrowth_pro_bundle", t.withProBundleTracking = n.withGrowthTracking(t.trackerProject);
    (function(e) {
        e.VIEW = "sharegrowth_pro_bundle__view", e.CLICK_CTA = "sharegrowth_pro_bundle__click_cta"
    })(t.ProBundleTrackerActions || (t.ProBundleTrackerActions = {}))
}), define("modules/clean/sharing/views/exp_pro_bundle_upsell", ["require", "exports", "tslib", "modules/clean/react/tooltip", "modules/core/browser", "modules/clean/react/image", "modules/clean/react/button", "react", "modules/clean/react/css", "modules/core/i18n", "modules/constants/trademark", "modules/clean/static_urls", "modules/clean/sharing/views/exp_pro_bundle_tracker"], function(e, t, n, r, s, i, a, o, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s = n.__importStar(s), o = n.__importStar(o), t.ProBundleUpsellHeader = function(e) {
        var s = o.createElement("div", {
                className: "pro-bundle-upsell-header"
            }, o.createElement("div", null, c._("What’s included in %(trademark_dbx_professional)s?").format({
                trademark_dbx_professional: d.DROPBOX_PROFESSIONAL
            })), o.createElement("div", {
                className: "pro-bundle-upsell-header__icon"
            }, o.createElement("svg", {
                width: "24",
                height: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, o.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, o.createElement("path", {
                d: "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",
                fill: "#B4BBC2"
            }), o.createElement("path", {
                stroke: "#B4BBC2",
                d: "M11.5 12h1v3.5h-1zM11.5 8.5h1v1h-1z"
            }))))),
            i = n.__assign({
                showHeader: !1,
                element: s,
                position: r.TooltipPosition.BOTTOM
            }, e);
        return o.createElement(t.ProBundleUpsellTooltip, n.__assign({}, i))
    };
    var m = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.logProBundleTooltipShow = function() {
                t.expProBundleTrack(p.ProBundleTrackerActions.VIEW)
            }, t.onButtonClickHandler = function() {
                t.expProBundleTrack(p.ProBundleTrackerActions.CLICK_CTA), s.redirect("/buy/professional?_tk=sg_pro_bundle_tooltip")
            }, t
        }
        return n.__extends(t, e), t.prototype.expProBundleTrack = function(e) {
            this.props.track(e)
        }, t.prototype.renderProBundleTooltipContent = function() {
            var e = o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__header"
            }, o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__header-title"
            }, c._("Professional Only Feature")), o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__header-subtitle"
            }, c._("What’s included in %(trademark_dbx_professional)s:").format({
                trademark_dbx_professional: d.DROPBOX_PROFESSIONAL
            })));
            return o.createElement("div", {
                className: "pro-bundle-upsell-tooltip"
            }, this.props.showHeader ? e : null, o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__item"
            }, o.createElement(i.Image, {
                src: u.static_url("/static/images/sharing/share_growth/folder-vfl-ZpgoZ.png"),
                alt: c._("Folder icon"),
                width: 12,
                className: "pro-bundle-upsell-tooltip__item-icon pro-bundle-upsell-tooltip__item-icon-space"
            }), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text-container"
            }, o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text"
            }, c._("More space.")), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-subtext"
            }, c._("Get plenty of storage for all of your work."), " "))), o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__item"
            }, o.createElement(i.Image, {
                src: u.static_url("/static/images/sharing/share_growth/download-vfl4Xd3kD.png"),
                alt: c._("Download icon"),
                width: 12,
                className: "pro-bundle-upsell-tooltip__item-icon pro-bundle-upsell-tooltip__item-icon-sync"
            }), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text-container"
            }, o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text"
            }, c._("Smart sync.")), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-subtext"
            }, c._("Access all of your files from your desktop, without taking up all your hard drive space.")))), o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__item"
            }, o.createElement(i.Image, {
                src: u.static_url("/static/images/sharing/magnet/lock_icon-vflACHeZZ.svg"),
                alt: c._("Lock icon"),
                width: 12,
                className: "pro-bundle-upsell-tooltip__item-icon pro-bundle-upsell-tooltip__item-icon-share"
            }), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text-container"
            }, o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text"
            }, c._("Sharing Controls.")), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-subtext"
            }, c._("Manage the visibility, access, and download permissions of everything you share.")))), o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__item"
            }, o.createElement(i.Image, {
                src: u.static_url("/static/images/sharing/share_growth/showcase-vflnrZJ2i.png"),
                alt: c._("Showcase icon"),
                width: 12,
                className: "pro-bundle-upsell-tooltip__item-icon pro-bundle-upsell-tooltip__item-icon-showcase"
            }), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text-container"
            }, o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-text"
            }, c._("Showcase.")), o.createElement("span", {
                className: "pro-bundle-upsell-tooltip__item-subtext"
            }, c._("Share your work with customized branding and track who engages with your files.")))), o.createElement("div", {
                className: "pro-bundle-upsell-tooltip__upgrade-button-container"
            }, o.createElement(a.Button, {
                className: "pro-bundle-upsell-tooltip__upgrade-button",
                onClick: this.onButtonClickHandler
            }, c._("Upgrade to Professional"))))
        }, t.prototype.render = function() {
            return o.createElement(r.Tooltip, {
                position: this.props.position,
                tooltip_classname: "pro-bundle-upsell-tooltip",
                tooltip_contents: this.renderProBundleTooltipContent(),
                on_show: this.logProBundleTooltipShow,
                interaction_enabled: !0,
                hide_delay: 100
            }, this.props.element)
        }, t
    })(o.Component);
    t.ProBundleUpsellTooltipComponent = m, t.ProBundleUpsellTooltip = l.requireCssWithComponent(p.withProBundleTracking(m), ["/static/css/growth/showcase_upsell/pro_bundle-vfllmT3Lt.css", "/static/css/legacy_packages/components-vflWpppwv.css"])
}), define("modules/clean/sharing/views/exp_showcase_share_interstitial", ["require", "exports", "tslib", "react", "spectrum/modal", "modules/clean/bem", "modules/clean/growth/user_action/tracker", "modules/clean/react/css", "modules/clean/react/modal", "modules/clean/static_urls", "modules/clean/account/email", "modules/core/i18n", "modules/clean/account/email_verify_reasons"], function(e, t, n, r, s, i, a, o, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), p = n.__importStar(p);
    (function(e) {
        e.CONTROL = "CONTROL", e.V1 = "V1"
    })(t.ShowcaseInterstitialVariants || (t.ShowcaseInterstitialVariants = {}));
    var m;
    (function(e) {
        e.CLOSE = "uj_showcase_share_interstitial__close", e.VIEW = "uj_showcase_share_interstitial__view", e.CLICK_SHARE = "uj_showcase_share_interstitial__click_share", e.CLICK_SHOWCASE = "uj_showcase_share_interstitial__click_showcase"
    })(m = t.ShowcaseInterstitialEvents || (t.ShowcaseInterstitialEvents = {}));
    var h = i.bem("showcase-share-interstitial");
    t.showShowcaseInterstitial = function(e) {
        if (!e.user.is_email_verified) {
            return d.EmailVerification.getForRole(e.user.role).show_verify_modal(null, p.SHARE_FOLDER)
        }
        l.Modal.showInstance(r.createElement(t.ShowcaseShareInterstitial, n.__assign({}, e)))
    };
    var _ = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.onRequestClose = function() {
                n.props.track(m.CLOSE), n.setState({
                    open: !1
                })
            }, n.onClickShare = function(e) {
                e.preventDefault(), n.props.track(m.CLICK_SHARE), n.props.onClickShare()
            }, n.onClickShowcase = function(e) {
                e.preventDefault(), n.props.track(m.CLICK_SHOWCASE), n.props.onClickShowcase()
            }, n.state = {
                open: !0
            }, n
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.state.open;
            return r.createElement(s.Modal, {
                open: e,
                className: h(),
                ariaLabel: u._("Choose a way to share"),
                onRequestClose: this.onRequestClose,
                displayCloseButton: !0
            }, r.createElement("div", {
                className: h("content")
            }, r.createElement("span", {
                className: h("title")
            }, r.createElement("div", null, u._("Find the best way to share.")), r.createElement("div", null, u._("What’s the main reason you’re sharing this file?"))), r.createElement("div", {
                className: h("options")
            }, r.createElement("button", {
                className: h("option", "sharing"),
                onClick: this.onClickShare
            }, r.createElement("div", {
                className: h("option-img-wrapper")
            }, r.createElement("img", {
                className: h("option-img"),
                src: c.static_url("/static/images/growth/showcase_upsell/create_and_collaborate@2x-vfljEt8Rt.png"),
                alt: ""
            })), r.createElement("span", {
                className: h("option-name")
            }, u._("To collaborate")), r.createElement("span", {
                className: h("option-desc")
            }, u._("Work on this file with other people. Swap ideas,\n                get feedback, and keep everyone in sync."))), r.createElement("button", {
                className: h("option", "showcase"),
                onClick: this.onClickShowcase
            }, r.createElement("div", {
                className: h("option-img-wrapper")
            }, r.createElement("img", {
                className: h("option-img"),
                src: c.static_url("/static/images/growth/showcase_upsell/try_showcase@2x-vfle_w-WK.png"),
                alt: ""
            })), r.createElement("span", {
                className: h("option-name")
            }, u._("To display or present work")), r.createElement("span", {
                className: h("option-desc")
            }, u._("Share in a visual layout. Present work with your logo\n                and branding, and let people comment on it."))))))
        }, t
    })(r.Component);
    t.ShowcaseShareInterstitialComponent = _, t.ShowcaseShareInterstitial = a.withGrowthTracking("uj_showcase_upsell", {
        mount: m.VIEW
    })(o.requireCssWithComponent(_, ["/static/css/growth/showcase_upsell/showcase_share_interstitial-vflwDvY4x.css"]))
}), define("modules/clean/sharing/views/inherited_members", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/em_string", "modules/clean/react/snackbar", "modules/clean/react/sprite", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/constants", "modules/clean/sharing/views/inherited_members_helpers", "modules/clean/web_user_action_logger", "modules/clean/web_user_action_events", "modules/core/i18n", "spectrum/icon_content", "spectrum/button", "spectrum/modal", "modules/clean/sharing/ui_notifications_util"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), g = n.__importStar(g);
    var S = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.onToggleShowMemberList = function() {
                0 !== n.props.members.length && n.setState({
                    areMembersExpanded: !n.state.areMembersExpanded
                })
            }, n.handleToggleInheritanceClick = function(e) {
                n.props.actionHandler.handleSetConfidentialClick(!1, n.props.ownerTeamName)
            }, n.state = {
                areMembersExpanded: !1
            }, n
        }
        return n.__extends(t, e), t.prototype.renderMembersList = function() {
            return this.state.areMembersExpanded ? s.default.createElement("div", null, s.default.createElement("div", {
                className: "u-mar-top-xs u-mar-horizontal-xs u-pad-top-xs inherited-member-list__divider"
            }), s.default.createElement("div", null, s.default.createElement("ul", {
                className: "u-pad-horizontal-s u-pad-vertical-xs inherited-member-list__member"
            }, this.props.children))) : void 0
        }, t.prototype.renderRemoveButton = function() {
            return this.props.canUpdateConfidentiality ? s.default.createElement(_.Button, {
                className: "inherited-member-list__remove-button button-as-link",
                onClick: this.handleToggleInheritanceClick,
                variant: "styleless"
            }, m._("Remove", {
                comment: "Shown on button that can be clicked to remove access to subfolder"
            })) : void 0
        }, t.prototype.renderTriangle = function() {
            return 0 === this.props.members.length ? s.default.createElement("div", {
                className: "u-pad-horizontal-xs"
            }) : s.default.createElement(_.Button, {
                className: "u-pad-horizontal-xxs o-flag__fix inherited-member-list__triangle button-as-link",
                onClick: this.onToggleShowMemberList,
                variant: "styleless"
            }, s.default.createElement(o.Sprite, {
                alt: m._("Toggle whether inherited members are displayed or hidden"),
                group: "web",
                name: this.state.areMembersExpanded ? "triangle_open_1x" : "triangle_closed_1x"
            }))
        }, t.prototype.render = function() {
            var e, t = this.props.actionHandler.getSharingInfo().parentFolderName();
            e = "" === t ? m._("Members of %(team_name)s shared workspace").format({
                team_name: i.Emstring.em_snippet(this.props.ownerTeamName, c.SNIPPET_SIZES.DISPLAY_NAME)
            }) : m._("Members of “%(folder_name)s” folder").format({
                folder_name: i.Emstring.em_snippet(t, c.SNIPPET_SIZES.FILENAME)
            });
            var n = 0,
                a = null;
            this.props.memberCounts && (a = this.props.contentInfo.isSharedFolder() ? this.props.memberCounts.total_unique_inherited_members : this.props.memberCounts.total_unique_users), null != a ? n = a : this.props.members.forEach(function(e) {
                e instanceof l.GroupMembershipInfo ? n += e.member_count : n++
            });
            var o = m.ungettext("%(members_count)s member", "%(members_count)s members", n).format({
                    members_count: n
                }),
                d = r.default([{
                    "u-mar-bottom-xs": !0,
                    "inherited-member-list__outer-expanded": this.state.areMembersExpanded,
                    "inherited-member-list__outer-closed": !this.state.areMembersExpanded,
                    "inherited-member-list__outer-spectrum": !0
                }]),
                u = r.default([{
                    "inherited-member-list__inner": !this.state.areMembersExpanded
                }]);
            return s.default.createElement("div", {
                className: d
            }, s.default.createElement("div", {
                className: u
            }, s.default.createElement("div", {
                className: "o-flag inherited-member-list__toggle-show-member",
                onClick: this.onToggleShowMemberList
            }, this.renderTriangle(), s.default.createElement("div", {
                className: "o-flag__flex u-pad-vertical-xs u-pad-right-s"
            }, s.default.createElement("div", {
                className: "o-flag"
            }, s.default.createElement("div", {
                className: "o-flag__fix"
            }, s.default.createElement(h.IconContent, {
                name: "folder_shared-small"
            })), s.default.createElement("div", {
                className: "o-flag__flex u-pad-left-s"
            }, s.default.createElement("div", {
                className: "inherited-member-list__member-str u-font-strong"
            }, e), s.default.createElement("div", {
                className: "inherited-member-list__member-count-str u-font-meta"
            }, o)), s.default.createElement("div", {
                className: "o-flag__fix u-pad-right-xxs"
            }, this.renderRemoveButton())))), s.default.createElement("div", null, this.renderMembersList())))
        }, t
    })(s.default.Component);
    t.InheritedMembers = S;
    var E = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n._onToggleConfidentialFolderFalse = function() {
                n._onToggleConfidentialFolder(!1)
            }, n.state = {
                isAccepting: !1
            };
            var r = t.actionHandler.getSharingInfo().displayPath(),
                s = t.actionHandler.getSharingInfo().parentFolderName();
            return n.contentGenerator = new d.SetInheritedMembersUIConfidentialModalContentGenerator(t.initialIsConfidentialFolder, r, t.teamName, s), n
        }
        return n.__extends(t, e), t.prototype._onToggleConfidentialFolder = function(e) {
            var t = this,
                n = !e,
                r = e === this.props.initialIsConfidentialFolder;
            e || this.setState({
                isAccepting: !0
            });
            var i = this.props,
                o = i.actionHandler,
                l = i.contentInfo;
            a.Snackbar.sync(this.contentGenerator.syncSnackMessage(r), !0, "share-folder-notification");
            var c = l.isSharedFolder();
            return o.handleSetConfidential(r).then(function(e) {
                o.fetchDataAndShowShareModal(), r && u.WebUserActionLog.log(t.props.userId, n ? p.WebUserActionLogEvent.CONF_BY_MANAGE_ACCESS : p.WebUserActionLogEvent.CONF_BY_UNDO_AFTER_RESTORE_ACCESS, {
                    ns_id: e.shared_folder_id,
                    original_folder_type: c ? p.WebUserActionLogExtraValue.SHARED_FOLDER : p.WebUserActionLogExtraValue.FILE_FOLDER
                })
            }).then(function() {
                var e = t.contentGenerator.completeSnackMessage(r);
                if (!n) return void a.Snackbar.complete(e, "share-folder-notification");
                a.Snackbar.show(s.default.createElement(a.Snackbar, {
                    title: e,
                    timeoutDelayMs: 1e4,
                    actionButtonText: m._("Undo"),
                    onActionClick: function() {
                        return t._onToggleConfidentialFolder(!0)
                    },
                    closeButtonText: m._("Close"),
                    variant: "complete",
                    id: "share-folder-notification"
                }))
            }).catch(function(e) {
                return d.handleApiError(e, t.contentGenerator.failSnackMessage(r), function() {
                    return t.setState({
                        isAccepting: !1
                    })
                }, "share-folder-notification")
            })
        }, t.prototype.render = function() {
            return s.default.createElement(f.UtilityModal, {
                ariaLabel: this.contentGenerator.getTitleContent(),
                title: this.contentGenerator.getTitleContent(),
                overlayClickClose: !0,
                primaryAction: this.contentGenerator.getActionString(),
                secondaryAction: m._("Cancel"),
                onPrimaryAction: this._onToggleConfidentialFolderFalse,
                onSecondaryAction: this.props.onCancel,
                open: !0,
                onRequestClose: this.props.onCancel,
                overlayClassName: "file-viewer-modal-overlay"
            }, this.contentGenerator.getBodyContent())
        }, t
    })(s.default.Component);
    t.SetInheritedMembersUIConfidentialModal = E;
    var v = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.actionCompleteCallback = function() {
                var e = n.props.actionHandler;
                g.sharingNotificationSuccess(n.contentGenerator.getSnackBarCompleteString()), n.setState({
                    removing: !1
                }), e.fetchDataAndShowShareModal()
            }, n.removeTheSelectedMember = function() {
                var e = n.props,
                    t = e.member,
                    r = e.actionHandler,
                    s = e.isUserSelf,
                    i = r.getContentInfo().id;
                return s ? r.relinquishMembershipSimple(i, !1) : r.removeMemberSimple(i, t.memberId(), !1)
            }, n.changeAccessOfSelectedMember = function() {
                var e = n.props,
                    t = e.newAccessLevel,
                    r = e.actionHandler,
                    s = e.member,
                    i = t;
                return r.changeMemberAccessSimple(r.getContentInfo().id, s.memberId(), i)
            }, n.changeConfidentialAccess = function() {
                var e = n.props,
                    t = e.actionHandler,
                    r = e.userId,
                    s = e.isSharedFolder,
                    i = e.isDowngrading;
                n.setState({
                    removing: !0
                });
                var a = function() {
                    return i ? n.changeAccessOfSelectedMember() : n.removeTheSelectedMember()
                };
                return t.shareIfFileFolder(n.contentGenerator.getSnackBarRemovingString()).then(function() {
                    return t.handleSetConfidential(!0, !0).then(function() {
                        return n.logWebUserAction(r, i, t.getContentInfo().id, s)
                    })
                }).then(a).then(n.actionCompleteCallback).catch(function(e) {
                    return d.handleApiError(e, n.contentGenerator.getSnackBarFailString(), function() {
                        return n.setState({
                            removing: !1
                        })
                    })
                })
            }, n.state = {
                removing: !1
            };
            var r = n.props,
                s = r.member,
                i = r.teamName,
                a = r.parentFolderName,
                o = r.currentFolderName,
                c = r.isDowngrading,
                u = r.isUserSelf;
            return n.contentGenerator = new d.SingleInheritedUserAccessChangeModalContentGenerator(c, i, a, o, s.displayName() || "", s instanceof l.GroupMembershipInfo, u), n
        }
        return n.__extends(t, e),
            t.prototype.render = function() {
                return s.default.createElement(f.UtilityModal, {
                    ariaLabel: this.contentGenerator.getConfirmModalTitleString(),
                    title: this.contentGenerator.getConfirmModalTitleString(),
                    overlayClickClose: !0,
                    primaryAction: this.contentGenerator.getButtonText(),
                    secondaryAction: m._("Cancel"),
                    onPrimaryAction: this.changeConfidentialAccess,
                    onSecondaryAction: this.props.actionHandler.openShareModal,
                    open: !0,
                    onRequestClose: this.props.actionHandler.openShareModal,
                    overlayClassName: "file-viewer-modal-overlay"
                }, this.renderBody())
            }, t.prototype.renderBody = function() {
                return s.default.createElement("div", null, s.default.createElement("div", {
                    className: "confirmation-modal__content"
                }, this.contentGenerator.getConfirmModalContent()), s.default.createElement("br", null))
            }, t.prototype.logWebUserAction = function(e, t, n, r) {
                u.WebUserActionLog.log(e, t ? p.WebUserActionLogEvent.CONF_BY_DOWNGRADE_MEMBER : p.WebUserActionLogEvent.CONF_BY_REMOVE_MEMBER, {
                    ns_id: n,
                    original_folder_type: r ? p.WebUserActionLogExtraValue.SHARED_FOLDER : p.WebUserActionLogExtraValue.FILE_FOLDER
                })
            }, t
    })(s.default.Component);
    t.SingleInheritedUserAccessChangeModal = v
}), define("modules/clean/sharing/views/inherited_members_helpers", ["require", "exports", "tslib", "react", "modules/clean/api_v2/error", "modules/clean/em_string", "modules/clean/filepath", "modules/clean/react_format", "modules/clean/react/modal", "modules/clean/react/snackbar", "modules/clean/sharing/constants", "modules/core/i18n", "modules/core/notify"], function(e, t, n, r, s, i, a, o, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), a = n.__importStar(a);
    t.handleApiError = function(e, t, n, r) {
        s.catchApiError(function() {
            return n && n(), c.Snackbar.close(r), e instanceof s.ServerError ? c.Snackbar.fail(t) : l.Modal.close(), p.Notify.error(e.message || u._("We were unable to complete your request.")), e
        })(e)
    };
    var m = (function() {
        function e(e, t, n, r) {
            this.initialIsConfidentialFolder = e, this.teamName = n, this.folderName = a.filename(t), this.parentFolderName = r, this.topMostLevelFolder = "" === r, this.folderSnippet = i.Emstring.em_snippet(this.folderName, 15), this.parentFolderSnippet = i.Emstring.em_snippet(this.parentFolderName, 15), this.teamSnippet = i.Emstring.em_snippet(this.teamName, d.SNIPPET_SIZES.DISPLAY_NAME)
        }
        return e.prototype.getActionString = function() {
            var e = i.Emstring.em_snippet(this.teamName, d.SNIPPET_SIZES.DISPLAY_NAME),
                t = this.topMostLevelFolder ? u._("Share with %(team_name)s").format({
                    team_name: e
                }) : u._("Share");
            return this.initialIsConfidentialFolder ? t : u._("Remove")
        }, e.prototype.getTitleContent = function() {
            return this.initialIsConfidentialFolder ? this.topMostLevelFolder ? u._("Share “%(folder_name)s” with everyone at %(team_name)s?").format({
                folder_name: this.folderSnippet,
                team_name: this.teamSnippet
            }) : u._("Share “%(folder_name)s” with everyone who can access “%(parent_folder_name)s”?").format({
                folder_name: this.folderSnippet,
                parent_folder_name: this.parentFolderSnippet
            }) : this.topMostLevelFolder ? u._("Remove members of %(team_name)s?").format({
                team_name: this.teamSnippet
            }) : u._("Remove members of “%(folder_name)s” folder?").format({
                folder_name: this.parentFolderSnippet
            })
        }, e.prototype.getBodyContent = function() {
            var e;
            return e = this.initialIsConfidentialFolder ? this.topMostLevelFolder ? o.reactFormat(u._("<strong>%(folder_name)s</strong> won’t be shared privately any more.\n             Everyone at %(team_name)s will have access to this folder.").format({
                team_name: this.teamSnippet,
                folder_name: this.folderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }) : o.reactFormat(u._("Everyone who can access <strong>%(parent_folder_name)s</strong> will be able to access this folder.").format({
                parent_folder_name: this.parentFolderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }) : this.topMostLevelFolder ? o.reactFormat(u._("Members of %(team_name)s won’t be able to access <strong>%(folder_name)s</strong>.").format({
                team_name: this.teamSnippet,
                folder_name: this.folderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }) : o.reactFormat(u._("Members of <strong>%(parent_folder_name)s</strong> folder won’t be able to access\n             <strong>%(folder_name)s</strong>.").format({
                parent_folder_name: this.parentFolderSnippet,
                folder_name: this.folderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }), r.default.createElement("div", null, r.default.createElement("div", {
                className: "confirmation-modal__content"
            }, e), r.default.createElement("br", null))
        }, e.prototype.syncSnackMessage = function(e) {
            return e ? o.reactFormat(u._("Removing members from <strong>%(folder_name)s</strong>…").format({
                folder_name: this.folderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }) : this.topMostLevelFolder ? o.reactFormat(u._("Sharing <strong>%(folder_name)s</strong> with everyone…").format({
                folder_name: this.folderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }) : o.reactFormat(u._("Sharing <strong>%(folder_name)s</strong> with members of <strong>%(parent_folder_name)s</strong>…").format({
                folder_name: this.folderSnippet,
                parent_folder_name: this.parentFolderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            })
        }, e.prototype.completeSnackMessage = function(e) {
            return e ? o.reactFormat(u._("Members removed from <strong>%(folder_name)s</strong>.").format({
                folder_name: this.folderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }) : this.topMostLevelFolder ? o.reactFormat(u._("<strong>%(folder_name)s</strong> shared with everyone.").format({
                folder_name: this.folderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            }) : o.reactFormat(u._("<strong>%(folder_name)s</strong> shared with members of <strong>%(parent_folder_name)s</strong>.").format({
                folder_name: this.folderSnippet,
                parent_folder_name: this.parentFolderSnippet
            }), {
                strong: r.default.createElement("strong", {
                    style: {
                        fontWeight: 500
                    }
                })
            })
        }, e.prototype.failSnackMessage = function(e) {
            return e ? u._("Couldn’t remove members. Try removing them again.") : u._("Couldn’t share folder. Try sharing again.")
        }, e
    })();
    t.SetInheritedMembersUIConfidentialModalContentGenerator = m;
    var h = (function() {
        function e(e, t, n, s, i, a, l) {
            var c = this;
            this.getButtonText = function() {
                return c.isDowngrading ? u._("Change access") : c.isTsdPlusOne ? u._("Remove everyone") : u._("Remove")
            }, this.getConfirmModalTitleString = function() {
                return c.isRelinquishment ? u._("Remove yourself from “%(parent_folder)s”?").format({
                    parent_folder: c.parentFolderName
                }) : c.isDowngrading ? u._("Change how members can access “%(current_folder)s”?").format({
                    current_folder: c.currentFolderName
                }) : c.isTsdPlusOne ? u._("Remove everyone at %(team_name)s?").format({
                    team_name: c.teamName
                }) : u._("Remove a member of “%(parent_folder)s”?").format({
                    parent_folder: c.parentFolderName
                })
            }, this.getConfirmModalTitle = function() {
                var e = {
                        current_folder: c.currentFolderName,
                        parent_folder: c.parentFolderName,
                        team_name: c.teamName,
                        b: r.default.createElement("b", {
                            style: {
                                fontWeight: 500
                            }
                        })
                    },
                    t = "";
                return t = c.isRelinquishment ? u._("<b>Remove yourself from “%(parent_folder)s”?</b>") : c.isDowngrading ? u._("<b>Change how members can access “%(current_folder)s”?</b>") : c.isTsdPlusOne ? u._("<b>Remove everyone at %(team_name)s?</b>") : u._("<b>Remove a member of “%(parent_folder)s”?</b>"), o.reactFormat(t, e)
            }, this.getConfirmModalContent = function() {
                var e = {
                        member_name: c.memberName,
                        parent_folder: c.parentFolderName,
                        current_folder: c.currentFolderName,
                        team_name: c.teamName,
                        b: r.default.createElement("b", {
                            style: {
                                fontWeight: 500
                            }
                        }),
                        br: r.default.createElement("br", null)
                    },
                    t = "";
                return t = c.isRelinquishment ? u._("You won’t be able to see future changes to this shared folder, and new members of <b>%(parent_folder)s</b> won’t have access to this folder automatically.") : c.isTsdPlusOne ? c.isDowngrading ? u._("%(member_name)s will only be able to view this folder, and new %(team_name)s members won’t be able to access it automatically.<br/>To add more people to this folder in the future, you’ll need to invite them directly.") : u._("%(team_name)s members won’t be able to see future changes to <b>%(current_folder)s</b> automatically.<br/>To give people access to this folder in the future, you’ll need to invite them directly.") : c.isDowngrading ? u._("%(member_name)s will only be able to view this folder, and new members of <b>%(parent_folder)s</b> won’t be able to access it automatically.<br/>To add more people to this folder in the future, you’ll need to invite them directly.") : u._("%(member_name)s and new members of the <b>%(parent_folder)s</b> folder, won’t be able to see future changes to this shared folder.<br/>To add more people to this folder in the future, you’ll need to invite them directly."), o.reactFormat(t, e)
            }, this.getSnackBarRemovingString = function() {
                var e = {
                        b: r.default.createElement("b", {
                            style: {
                                fontWeight: 500
                            }
                        }),
                        current_folder: c.currentFolderName
                    },
                    t = c.isDowngrading ? u._("Changing access for <b>%(current_folder)s</b>…") : c.memberIsGroup ? u._("Removing members from <b>%(current_folder)s</b>…") : u._("Removing member from <b>%(current_folder)s</b>…");
                return o.reactFormat(t, e)
            }, this.getSnackBarCompleteString = function() {
                var e = {
                        b: r.default.createElement("b", {
                            style: {
                                fontWeight: 500
                            }
                        }),
                        current_folder: c.currentFolderName
                    },
                    t = c.isDowngrading ? u._("Access changed for <b>%(current_folder)s</b>.") : c.memberIsGroup ? u._("Members removed from <b>%(current_folder)s</b>.") : u._("Member removed from <b>%(current_folder)s</b>.");
                return o.reactFormat(t, e)
            }, this.getSnackBarFailString = function() {
                return c.isDowngrading ? u._("Couldn’t change access. Try changing access again.") : c.memberIsGroup ? u._("Couldn’t remove members. Try removing them again.") : u._("Couldn’t remove member. Try removing them again.")
            }, this.isDowngrading = e, this.teamName = t, this.parentFolderName = n, this.currentFolderName = s, this.memberName = i, this.isTsdPlusOne = "" === n, this.memberIsGroup = a, this.isRelinquishment = l
        }
        return e
    })();
    t.SingleInheritedUserAccessChangeModalContentGenerator = h
}), define("modules/clean/sharing/views/member_list", ["require", "exports", "tslib", "external/immutable", "external/classnames", "react", "modules/clean/filepath", "modules/clean/sharing/access_level", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/constants", "modules/clean/sharing/views/inherited_members", "modules/clean/sharing/views/member_list_item", "modules/clean/sharing/views/viewer_info", "modules/clean/sharing/ui_util", "modules/clean/viewer", "modules/core/i18n", "modules/clean/sharing/views/wrapped_group_viewers_maker", "modules/clean/react/pass/store", "modules/clean/integrations/data/store", "external/react-redux"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s = n.__importDefault(s), i = n.__importDefault(i), a = n.__importStar(a), _ = n.__importStar(_);
    var v = _.i18n_default_project("sharing")._,
        I = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.renderMembersListItem = function(e, n, r) {
                    var s = e.memberKey(),
                        a = t.props.groupSeenStateInfo[e.memberId()] ? t.renderWrappedGroupViewersElement(e) : void 0,
                        l = t.props.canUpdateConfidentiality && e.is_inherited,
                        d = !!l || t.props.canRelinquishMembership,
                        p = function(n) {
                            var r = n === c.MEMBER_ACTION.REMOVE,
                                s = !r && o.isLowerAccess(e.access_type, n),
                                i = t.props.contentInfo.isSharedFolder() ? e.inherited_access_type : e.access_type,
                                a = r || s && i && o.isLowerAccess(i, n);
                            if (l && a) {
                                var d = t.props.ownerTeamName;
                                return t.props.actionHandler.handleInheritedMemberAccessChange(e, d, s, s ? n : void 0)
                            }
                            return t.props.actionHandler.handleMemberAccessChange(e, n)
                        };
                    return i.default.createElement(u.SharingMemberListItem, {
                        hasLinkMetadata: t.props.hasLinkMetadata,
                        canInviteMembers: t.props.canInviteMembers,
                        canRelinquishMembership: d,
                        contentInfo: t.props.contentInfo,
                        wrappedGroupViewersElement: a,
                        isInheritedMember: r,
                        isMemberActionPending: t.props.pendingMemberAction.has(s),
                        isPresent: t.props.shouldShowPassUI && t.isMemberCurrentlyViewing(e),
                        key: s,
                        member: e,
                        user: t.props.user,
                        onAccessChangeInBubbleMenu: p,
                        showLinkViewerDisclosure: t.isLinkMember(e, n)
                    })
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = m.makeMemberSortCmp(this.props.user, this.props.presentAccountIds || r.Set(), this.shouldSortUsingPassRules()),
                    t = this.membersByInheritance(),
                    n = t.get(!1);
                n && (n = n.sort(e));
                var s = t.get(!0);
                s && (s = s.sort(e));
                var a = null;
                return this.props.areMembersFullyLoaded || (a = i.default.createElement("div", {
                    className: "sharing-member-list__loading c-loader u-mar-horizontal-auto u-l-b"
                }, v("Loading more members..."))), i.default.createElement(E.Provider, {
                    store: S.initStoreForIntegration(this.props.user.id)
                }, i.default.createElement("div", {
                    className: "sharing-member-list"
                }, this.renderInheritedUI(n, s), a))
            }, t.prototype.shouldSortUsingPassRules = function() {
                var e = g.passStore.getPassPermissions(this.props.contentInfo.extras.fileId);
                return null != e && (e.canReadPresence || e.canReadSeenState)
            }, t.prototype.renderInheritedUI = function(e, t) {
                var n = this,
                    a = r.Set(this.props.linkMembers),
                    o = this.renderInheritedMembers(a, t),
                    l = null;
                e && e.count() > 0 && (l = i.default.createElement("div", null, e.map(function(e) {
                    return n.renderMembersListItem(e, a)
                }).toArray()));
                var c = s.default({
                    "o-list-ui": !0
                });
                return i.default.createElement("ul", {
                    className: c
                }, o, l)
            }, t.prototype.renderInheritedMembers = function(e, t) {
                var n = this,
                    r = this.props,
                    s = r.isConfidentialFolder,
                    a = r.ownerTeamName;
                if (this.shouldShowInherited() && a && !s) return i.default.createElement(d.InheritedMembers, {
                    actionHandler: this.props.actionHandler,
                    canUpdateConfidentiality: this.props.canUpdateConfidentiality,
                    contentInfo: this.props.contentInfo,
                    memberCounts: this.props.memberCounts,
                    members: t ? t.toArray() : [],
                    ownerTeamName: a
                }, t && t.map(function(t) {
                    return n.renderMembersListItem(t, e, !0)
                }))
            }, t.prototype.isLinkMember = function(e, t) {
                return e instanceof l.UserMembershipInfo && t.contains(e)
            }, t.prototype.isMemberCurrentlyViewing = function(e) {
                return !this.memberIsAssumed(e) && (e instanceof l.UserMembershipInfo && this.props.presentAccountIds && this.props.presentAccountIds.has(e.account_id))
            }, t.prototype.memberIsAssumed = function(e) {
                return e instanceof l.UserMembershipInfo && e.account_id === this.props.user.account_id && h.Viewer.get_viewer().is_assume_user_session
            }, t.prototype.membersByInheritance = function() {
                var e = this,
                    t = function(t) {
                        return e.shouldShowInherited() && t.is_inherited
                    },
                    n = this.props,
                    s = n.membership,
                    i = n.linkMembers,
                    a = n.guestMembers;
                if (!s) return i.length > 0 || a.length > 0 ? r.List(i).concat(a).groupBy(t) : r.Map();
                var o = s.groups,
                    l = s.invitees,
                    c = s.users;
                return o.valueSeq().concat(l.valueSeq(), c.valueSeq(), i, a).groupBy(t)
            }, t.prototype.shouldShowInherited = function() {
                var e = this.props.actionHandler.getSharingInfo();
                if (e.isRaclOnGgEnabled()) {
                    var t = !!e.parentSharedFolderId();
                    return e.isUserOnOwnerTeam() && t
                }
                return !!this.props.ownerTeamName && this.props.user.is_cdm_member && !a.inSubDirectory(this.props.user.cdm_tmf_path, e.displayPath())
            }, t.prototype.extractGroupSeenStateAndViewers = function(e) {
                var t = this,
                    n = this.props.groupSeenStateInfo[e.memberId()],
                    r = [];
                return this.props.presentAccountIds && (r = n.map(function(e) {
                    return new p.ViewerInfo(e)
                }).filter(function(e) {
                    return null != e.time_last_seen || t.props.presentAccountIds.has(e.account_id)
                })), {
                    singleGroupSeenStateInfo: n,
                    viewers: r
                }
            }, t.prototype.renderWrappedGroupViewersElement = function(e) {
                var t = this.extractGroupSeenStateAndViewers(e).viewers;
                return t.length ? f.WrappedGroupViewersMaker.make(t, this.props.presentAccountIds) : {
                    element: null,
                    elementText: ""
                }
            }, t.displayName = "SharingMemberList", t.defaultProps = {
                disabled: !1,
                groupSeenStateInfo: {},
                guestMembers: [],
                linkMembers: []
            }, t
        })(i.default.Component);
    t.SharingMemberList = I
}), define("modules/clean/sharing/views/member_list_item", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/avatar/avatar_with_default", "modules/clean/em_string", "modules/clean/avatar/initials_avatar", "modules/clean/avatar/size", "modules/clean/sharing/constants", "modules/clean/datetime", "modules/clean/previews/util", "modules/clean/react/pass/utils", "modules/clean/react/title_bubble", "modules/clean/sharing/share_modal_dropdown_util", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/views/viewer_info", "modules/clean/static_urls", "modules/core/i18n", "modules/core/user_i18n", "spectrum-sharing/components/member_row", "modules/clean/sharing/access_level", "modules/clean/sharing/strings", "modules/clean/sharing/constants", "modules/clean/integrations/profile_card_popover", "modules/clean/integrations/integration_popover", "modules/clean/integrations/data/store", "external/react-redux", "deep-integrations/async", "spectrum/button", "modules/clean/integrations/data/selectors"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E, v, I, b, y, C, M, T, N, A, k, w) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importDefault(i), S = n.__importStar(S), E = n.__importStar(E);
    var L = S.i18n_default_project("sharing"),
        P = L._,
        F = L.ungettext,
        R = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.popoverGroup = new M.IntegrationPopoverGroup, t.onMemberRowChange = function(e, n) {
                    t.props.onAccessChangeInBubbleMenu(n)
                }, t.openProfileCard = function() {
                    t.popoverRef && t.popoverRef.openProfileCard()
                }, t
            }
            return n.__extends(t, e), t.prototype.shouldLinkToGroup = function() {
                return this.props.member instanceof _.GroupMembershipInfo && (!!this.props.member.same_team && (!!this.props.user.is_team_admin || !!this.props.member.is_member && this.props.member.group_management_type !== _.GroupManagementType.system_managed))
            }, t.prototype.linkToGroup = function(e, t, n) {
                var i = "/team#groups/%(id)s".format({
                        id: e.group_id
                    }),
                    a = r.default({
                        "u-font-meta": !n,
                        "sharing-member-info__group-name-link": !0,
                        "sharing-member-info__display-name-title": n
                    });
                return s.default.createElement("a", {
                    href: i,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: a,
                    title: e.group_name
                }, t)
            }, t.prototype.renderAvatar = function(e, t) {
                var n = this,
                    r = this.props.member.displayName() || "",
                    a = this.getAvatarInitials(),
                    c = t ? "SQUARE" : "CIRCLE",
                    d = this.props,
                    u = d.member,
                    m = d.user,
                    h = d.contentInfo,
                    g = d.isPresent,
                    S = d.isProfileCardEnabled,
                    E = p.AnonymousViewerUtils.isAnonymousUserId(u.memberId()) ? u.memberId() : r,
                    v = s.default.createElement("div", {
                        className: "o-flag__fix"
                    }, s.default.createElement(i.default, {
                        dimension: l.AVATAR_DIMENSION_BY_SIZE.MEDIUM,
                        photoUrl: e,
                        shape: c,
                        defaultAvatar: s.default.createElement(o.InitialsAvatarWithColorDerivedFromName, {
                            dimension: l.AVATAR_DIMENSION_BY_SIZE.MEDIUM,
                            shape: c,
                            initials: a,
                            name: E,
                            alt: ""
                        })
                    }));
                if (S) {
                    var I = T.initStoreForIntegration(this.props.user.id),
                        y = void 0,
                        M = void 0;
                    if (u instanceof _.GroupMembershipInfo) {
                        var N = u,
                            w = "";
                        this.shouldRenderGroupCount() && (w = F("%(member_num)s member", "%(member_num)s members", u.member_count).format({
                            member_num: u.member_count
                        })), y = {
                            avatarType: "group",
                            targetGroup: {
                                gid: N.group_id,
                                groupName: N.displayName(),
                                message: w
                            }
                        }
                    } else if (u instanceof _.InviteeMembershipInfo) {
                        var L = u;
                        y = {
                            avatarType: "invited_person",
                            targetUser: {
                                accountId: L.contact,
                                displayName: L.displayName(),
                                familiarName: L.displayName(),
                                accessType: b.ACCESS_NAME[L.access_type],
                                email: L.contact,
                                photoUrl: e || void 0
                            }
                        }
                    } else if (u instanceof _.UserMembershipInfo) {
                        var P = u;
                        y = {
                            avatarType: "joined_member",
                            targetUser: {
                                accountId: P.account_id,
                                displayName: P.displayName() || P.email() || "",
                                familiarName: P.displayName(),
                                accessType: b.ACCESS_NAME[P.access_type],
                                isViewer: P.account_id === this.props.user.account_id,
                                email: P.email(),
                                photoUrl: e || void 0
                            }
                        }, M = P.time_last_seen
                    } else if (u instanceof f.ViewerInfo) {
                        var R = u;
                        y = {
                            avatarType: "joined_member",
                            targetUser: {
                                accountId: R.account_id,
                                displayName: R.displayName(),
                                familiarName: R.displayName(),
                                accessType: "",
                                isViewer: !0,
                                email: R.email,
                                photoUrl: e || void 0
                            }
                        }, M = R.time_last_seen
                    }
                    var O = {
                        ".tag": h.isFolder() ? "folder" : "file",
                        id: A.fulfilled(h.idForLink()),
                        name: h.name()
                    };
                    if (y) return s.default.createElement(C.ProfileCardPopover, {
                        popoverRef: function(e) {
                            return n.popoverRef = e
                        },
                        popoverGroup: this.popoverGroup,
                        integrationStore: I,
                        avatarInfo: y,
                        entryPoint: "share_sheet",
                        file: this.props.hasLinkMetadata ? O : void 0,
                        seenState: g ? this.getPresentText() : this.getLastSeenText(M),
                        viewerId: m.id,
                        positioning: "right",
                        upsellPositioning: "right",
                        portalParentElement: document.querySelector("body") || void 0,
                        maxCalendarEventsToRender: 1,
                        autoRePosition: !0
                    }, s.default.createElement(k.Button, {
                        variant: "circular"
                    }, v))
                }
                return v
            }, t.prototype.getDisplayName = function(e, t) {
                var n;
                this.props.member.displayName() && (n = this.props.member.displayName()), n = void 0 !== n ? n : "";
                var r = this.getLastSeenText(e);
                this.props.isPresent ? r = this.getPresentText() : e && (r = this.getLastSeenText(e));
                var s = this.getDisabledMessage(t),
                    i = 0,
                    o = 0;
                r && (i = new a.Emstring("  ·  %s".format(r)).length), s && (o = new a.Emstring("  ·  %s".format(s)).length);
                var l = c.SNIPPET_SIZES.DISPLAY_NAME - i - o,
                    d = a.Emstring.em_snippet(n, l);
                return this.shouldLinkToGroup() && !this.shouldRenderGroupCount() ? this.linkToGroup(this.props.member, d, !0) : d
            }, t.prototype.getAvatarInitials = function() {
                var e, t = this.props.member.displayName() || "";
                return this.props.member instanceof f.ViewerInfo || (e = this.props.member.initials), e = e || E.getInitials(t)
            }, t.prototype.getPresentText = function() {
                return P("Viewing now")
            }, t.prototype.getLastSeenText = function(e) {
                var t = "";
                return e && (t = P("Viewed %(time_str)s").format({
                    time_str: d.ago(e, !1, !0, !0)
                })), t
            }, t.prototype.getDisabledMessage = function(e) {
                var t = "";
                return e && e.disabled && (t = P("Deleted")), t
            }, t.prototype.getOffTeamMessage = function(e) {
                var t = "",
                    n = e && !e.email;
                return !this.props.user.is_team || this.props.member.same_team || n || (t = P("Outside your Dropbox team")), t
            }, t.prototype.getMemberDetails = function(e, t) {
                var n;
                return e ? n = this.shouldLinkToGroup() ? this.linkToGroup(this.props.member, e, !1) : e : t && t.email && t.email_verified && (n = t.email), n
            }, t.prototype.isAllowedToRelinquishMembership = function() {
                return this.props.member.memberId() === this.props.user.account_id && this.props.canRelinquishMembership
            }, t.prototype.getOptionGroup = function() {
                if (!(this.props.member instanceof f.ViewerInfo)) {
                    for (var e = [], t = "", n = b.ACCESS_NAME[this.props.member.access_type], r = h.getMemberActionInfo(this.isAllowedToRelinquishMembership()), s = 0, i = r; s < i.length; s++) {
                        var a = i[s],
                            o = a[0],
                            l = a[1];
                        this.props.member.access_type === l.value && (t = l.value);
                        var c = this.getOptionGroupOption(o, l);
                        c && e.push(c)
                    }
                    return {
                        id: "optionGroup%s".format(this.props.member.memberId()),
                        label: n,
                        options: e,
                        selectedApiId: t,
                        enabled: !this.props.isMemberActionPending
                    }
                }
            }, t.prototype.getOptionGroupOption = function(e, t) {
                if (!(this.props.member instanceof f.ViewerInfo) && h.shouldShowMemberAction(e, t.value, this.props.member.access_type, this.props.member.permissions, this.isAllowedToRelinquishMembership())) {
                    var n = "";
                    return n = this.props.contentInfo && this.props.contentInfo.isFolder() ? t.folder_description ? t.folder_description : "" : t.file_description ? t.file_description : "", t.value === y.MEMBER_ACTION.REMOVE ? {
                        apiId: t.value,
                        label: t.title,
                        tooltip: n,
                        variant: "red"
                    } : {
                        apiId: t.value,
                        label: t.title,
                        tooltip: n,
                        variant: t.value === I.ACCESS_LEVEL.READER ? "border" : "default"
                    }
                }
            }, t.prototype.renderSeenStateInfo = function(e, t, n) {
                var r, i;
                return u.shouldShowPlatformInfo() ? (r = t.toLocaleString(void 0, {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric"
                }), i = p.getOnPlatformText(n)) : (r = t.toLocaleDateString(void 0, {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                }), i = t.toLocaleTimeString(void 0, {
                    hour: "numeric",
                    minute: "numeric"
                })), s.default.createElement(m.TitleBubble, {
                    content: s.default.createElement("div", null, r, i && s.default.createElement("br", null), i),
                    className: "timestamp-tooltip",
                    children: s.default.createElement("span", null, e),
                    position: m.TitleBubble.POSITIONS.BOTTOM,
                    isTargetPositionFixed: !0
                })
            }, t.prototype.shouldRenderGroupCount = function() {
                return this.props.member instanceof _.GroupMembershipInfo && this.props.member.member_count
            }, t.prototype.render = function() {
                var e, t, n = void 0,
                    r = !1,
                    i = null,
                    a = void 0,
                    o = "",
                    l = this.props.member;
                if (l instanceof _.UserMembershipInfo) {
                    if (o = l.account_id, n = l.account, !n) return null;
                    i = n.profile_photo_url || null, t = l.platform_type, e = l.time_last_seen
                } else l instanceof _.GroupMembershipInfo ? (o = l.group_id, r = !0, "team" === l.group_type && (i = g.static_url("/static/images/icons/team_24@2x-vflR8kGKs.png")), this.shouldRenderGroupCount() && (a = F("%(member_num)s member", "%(member_num)s members", l.member_count).format({
                    member_num: l.member_count
                }))) : l instanceof f.ViewerInfo && (o = l.account_id, n = {
                    email: l.email,
                    email_verified: !!l.email
                }, i = l.photo_circle_url, e = l.time_last_seen);
                var c;
                return this.props.wrappedGroupViewersElement && this.props.wrappedGroupViewersElement.element ? c = this.props.wrappedGroupViewersElement.element : this.props.isPresent ? c = this.getPresentText() : e && (c = this.renderSeenStateInfo(this.getLastSeenText(e), e, t)), s.default.createElement(v.MemberRow, {
                    id: o,
                    avatarUrl: null != i ? i : "",
                    avatarElement: this.renderAvatar(i, r),
                    initialAvatarShape: r ? "square" : "circle",
                    displayName: this.getDisplayName(e, n),
                    disabledMessage: this.getDisabledMessage(n),
                    description: this.getMemberDetails(a, n),
                    passString: c,
                    offTeamMessage: this.getOffTeamMessage(n),
                    present: this.props.isPresent,
                    initials: this.getAvatarInitials(),
                    loadingSpinnerVisible: this.props.isMemberActionPending,
                    optionGroup: this.getOptionGroup(),
                    onChange: this.onMemberRowChange,
                    variant: this.props.isInheritedMember ? "borderless" : "default",
                    onClickDetails: this.props.isProfileCardEnabled ? this.openProfileCard : void 0,
                    onClickDisplayName: this.props.isProfileCardEnabled ? this.openProfileCard : void 0
                })
            }, t.displayName = "SharingMemberListItemElement", t.defaultProps = {
                canInviteMembers: !1,
                canRelinquishMembership: !1,
                disabled: !1,
                isPresent: !1,
                isViewOnly: !1
            }, t
        })(s.default.Component);
    t.SharingMemberListItemElement = R, t.SharingMemberListItem = N.connect(function(e) {
        return {
            isProfileCardEnabled: w.isProfileCardInShareSheetEnabled(e)
        }
    })(R)
}), define("modules/clean/sharing/views/modal_content_spectrum", ["require", "exports", "tslib", "modules/core/browser", "external/classnames", "react", "external/react-dom-factories", "modules/clean/react_format", "modules/clean/contacts/util", "modules/clean/filepath", "modules/clean/react/bubble_dropdown_v2", "modules/clean/react/css", "modules/clean/keycode", "modules/clean/react/async/loadable", "modules/clean/react/pass/constants", "modules/clean/react/snackbar", "modules/clean/sharing/ui_util", "modules/clean/sharing/views/constants", "modules/clean/sharing/views/share_modal_header_section", "modules/clean/sharing/views/member_list", "modules/clean/sharing/views/modal_link_info", "modules/clean/sharing/views/share_modal_contacts_section", "modules/clean/sharing/views/share_modal_footer_link_section", "modules/clean/sharing/views/share_modal_pointer_mode", "modules/clean/web_timing_logger", "modules/clean/sharing/views/share_modal/contacts_error_banner", "modules/clean/sharing/views/share_modal/sharing_modal_no_permissions_section", "modules/core/i18n", "modules/clean/sharing/views/share_modal/confidential_folder_section", "spectrum-sharing/components/sharing_modal_banner", "spectrum-sharing/components/sharing_modal_message_field", "spectrum-sharing/components/scooter_loader"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E, v, I, b, y, C, M, T, N, A, k, w, L) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importDefault(s), i = n.__importDefault(i), a = n.__importStar(a), l = n.__importDefault(l), c = n.__importStar(c), C = n.__importStar(C), N = n.__importStar(N), t.MODES = g.MODES;
    var P = N.i18n_default_project("sharing")._,
        F = m.Loadable({
            loader: function() {
                return new Promise(function(t, n) {
                    e(["modules/clean/sharing/views/comments_integrated_footer_section"], t, n)
                }).then(n.__importStar).then(function(e) {
                    return e.CommentsIntegratedFooterSection
                })
            }
        }),
        R = (function(t) {
            function d() {
                var r = null !== t && t.apply(this, arguments) || this;
                return r.isGoldenGateTeamOverLimit = function() {
                    return f.shouldEnforceMemberLimits(r.props.user, r.props.isTeamSharedFolder, r.props.isFolderInsideTeamFolderTree) && (null != r.props.memberCounts ? r.props.memberCounts.total_unique_users : 0) >= f.GoldenGate.SHARING_TOTAL_LIMIT
                }, r.handleCheckChanged = function(e) {
                    r.props.actionHandler.changeCreateCommentCheckbox(e)
                }, r.handleMessageChanged = function(e) {
                    r.props.actionHandler.changeRecipientMessage(e.target.value)
                }, r.modalLinkInfoProps = function() {
                    return {
                        actionHandler: r.props.actionHandler,
                        contentInfo: r.props.contentInfo,
                        linkMetadata: r.props.linkMetadata,
                        mode: r.props.mode,
                        user: r.props.user,
                        onLinkSettingsClick: r.props.onLinkSettingsClick,
                        isLinkMetadataLoaded: r.props.isLinkMetadataLoaded,
                        isTeamSharedFolder: r.props.isTeamSharedFolder,
                        canShareLink: r.props.canShareLink,
                        permissions: r.props.sharingPermissions
                    }
                }, r.linkSectionProps = function() {
                    return {
                        actionHandler: r.props.actionHandler,
                        contentInfo: r.props.contentInfo,
                        mode: r.props.mode,
                        user: r.props.user,
                        onLinkSettingsClick: r.props.onLinkSettingsClick,
                        isLinkMetadataLoaded: r.props.isLinkMetadataLoaded,
                        isTeamSharedFolder: r.props.isTeamSharedFolder,
                        canShareLink: r.props.canShareLink,
                        permissions: r.props.sharingPermissions
                    }
                }, r._addEveryoneGroup = function() {
                    return r.contactsSection.addExternalContacts([l.default.teamGroupInfoToContact(r.props.teamGroupInfo)])
                }, r.headerSectionProps = function() {
                    return {
                        ref: r.setHeaderSectionRef,
                        actionHandler: r.props.actionHandler,
                        contentInfo: r.props.contentInfo,
                        contentNameMessage: r.props.contentNameMessage,
                        contentNameMessageLevel: r.props.contentNameMessageLevel,
                        canEdit: r.props.canEdit,
                        isTeamSharedFolder: r.props.isTeamSharedFolder,
                        isFolderInsideTeamFolderTree: r.props.isFolderInsideTeamFolderTree,
                        isInContentManager: r.props.isInContentManager,
                        isConfidentialFolder: r.props.isConfidentialFolder,
                        isContentNameFocused: r.props.isContentNameFocused,
                        isCreatingNewFolder: r.isCreatingNewFolder(),
                        isMetadataLoaded: r.props.isMetadataLoaded,
                        initialContentName: r.props.initialContentName,
                        onModalCloseClick: r.props.onModalCloseClick,
                        onSettingsButtonClick: r.props.onSettingsClick,
                        onContentNameInputChange: r.handleContentNameInputChange,
                        onContentNameInputKeyUp: r.handleContentNameInputKeyUp,
                        ownerTeam: r.props.ownerTeam,
                        sharingInfo: r.props.actionHandler.getSharingInfo(),
                        showPassFileSettings: r.props.showPassFileSettings,
                        user: r.props.user
                    }
                }, r.contactsSectionProps = function() {
                    return {
                        ref: r.setContactsSectionRef,
                        actionHandler: r.props.actionHandler,
                        contentInfo: r.props.contentInfo,
                        canInviteEditor: r.props.sharingPermissions.canInviteEditor(),
                        canInviteViewer: r.props.sharingPermissions.canInviteViewer(),
                        context: "spectrum",
                        focusOnMount: r.props.contentInfo.pathExists(),
                        initialTypeaheadTokens: r.getInitialTypeaheadTokens(),
                        isFolderInsideTeamFolderTree: r.props.isFolderInsideTeamFolderTree,
                        isInContentManager: r.props.isInContentManager,
                        isTeamSharedFolder: r.props.isTeamSharedFolder,
                        memberCountWithRecipients: r.props.memberCountWithRecipients,
                        ownerTeam: r.props.ownerTeam,
                        shouldLogContactSearch: !0,
                        typeaheadPlaceholder: r.getTypeaheadPlaceholder(),
                        user: r.props.user,
                        showContactImport: !r.props.isTeamSharedFolder,
                        teamGroupInfo: r.props.isTeamSharedFolder ? r.props.teamGroupInfo : void 0
                    }
                }, r.handleContentNameInputChange = function(e) {
                    r.props.actionHandler.handleContentNameChange(e.currentTarget.value)
                }, r.handleContentNameInputKeyUp = function(e) {
                    e.keyCode === p.KeyCode.ENTER && r.contactsSection && r.contactsSection.focusTypeaheadInput()
                }, r.handleShareButtonClick = function(t) {
                    return n.__awaiter(r, void 0, void 0, function() {
                        var r, s, i, a, o, l, c;
                        return n.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (r = this.props, s = r.actionHandler, i = r.recipientMessage, a = r.user, !this.isCreatingNewFolder()) return [3, 1];
                                    try {
                                        return [2, s.setContentNameAndSendShare(this.contactsSection)]
                                    } catch (e) {
                                        this.headerSection.selectContentNameInput()
                                    }
                                    return [3, 6];
                                case 1:
                                    return o = s.getSharingInfo().comments2IntegrationIsOn() && i && s.getSharingInfo().isShareMessageAsCommentChecked() && !s.getSharingInfo().permissionsObj().canShareMessageAsComment(), o ? [4, this.extractUserContacts()] : [3, 3];
                                case 2:
                                    return c = d.sent(), [3, 4];
                                case 3:
                                    c = [], d.label = 4;
                                case 4:
                                    return l = c, [4, s.sendShare(this.contactsSection)];
                                case 5:
                                    if (d.sent(), o) return [2, new Promise(function(t, n) {
                                        e(["modules/clean/sharing/actions/comments2_integration"], t, n)
                                    }).then(n.__importStar).then(function(e) {
                                        (0, e.processAndDispatchAddCommentAction)(t, a, i, l)
                                    })];
                                    d.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, r.setContactsSectionRef = function(e) {
                    r.contactsSection = e
                }, r.setHeaderSectionRef = function(e) {
                    r.headerSection = e
                }, r
            }
            return n.__extends(d, t), d.prototype.componentDidMount = function() {
                    this.logTTI()
                },
                d.prototype.componentDidUpdate = function(e, t) {
                    return this.logTTI()
                }, d.prototype.logTTI = function() {
                    return "GRANT_ACCESS" === this.props.contentInfo.extras.origin && this.props.isMetadataLoaded && C.mark_time_to_interactive(), this.props.mode === g.MODES.LINK_ONLY && this.props.isLinkMetadataLoaded ? this.props.actionHandler.logIfHaventBefore("VIEW_LINK_ONLY_MODAL") : this.props.isMetadataLoaded && (this.props.actionHandler.logIfHaventBefore("VIEW_SHARE_MODAL"), !this._shouldRenderMainLoading()) ? this.props.actionHandler.logIfHaventBefore("MEMBER_LIST_LOADED", {
                        member_count: this.props.actionHandler.getSharingInfo().memberNum()
                    }) : void 0
                }, d.prototype.render = function() {
                    var e = this.props.actionHandler.getSharingInfo(),
                        t = "" + this.props.mode;
                    this.props.mode === g.MODES.MEMBERSHIP && (this._shouldRenderMainMembershipMode() || (t = "no-main-membership"));
                    var r = s.default("unified-share-modal", {
                        "unified-share-modal--loading": this._shouldRenderMainLoading() && t !== g.MODES.LINK_ONLY && t !== g.MODES.POINTER
                    }, "unified-share-modal--" + t, {
                        "unified-share-modal--two-link": e.isMultipleLinkInterfaceEnabled()
                    });
                    switch (this.props.mode) {
                        case g.MODES.LINK_ONLY:
                            return i.default.createElement("div", {
                                className: r
                            }, i.default.createElement(S.ShareModalHeaderSection, n.__assign({}, this.headerSectionProps())), this.props.linkOnlyReason !== g.LINK_ONLY_REASON.LINKS_PAGE && this.renderLinkOnlyNoPermissionSection(), this.renderLinkOnlyFooter());
                        case g.MODES.POINTER:
                            return i.default.createElement(y.ShareModalPointerMode, {
                                className: r,
                                sharingInfo: this.props.sharingInfo,
                                onClickCloseButton: this.props.onModalCloseClick
                            });
                        default:
                            return i.default.createElement("div", {
                                className: r
                            }, i.default.createElement(S.ShareModalHeaderSection, n.__assign({}, this.headerSectionProps())), this._renderToSection(), i.default.createElement(M.ContactsErrorBanner, n.__assign({}, this.props.contactsError)), this.shouldRenderConfidentialFolderSection() && i.default.createElement(A.ConfidentialFolderSection, n.__assign({}, this.confidentialFolderSectionProps())), this._renderMainSection(), this.shouldRenderFooterSection() && this.renderFooterSection())
                    }
                }, d.prototype._renderToSection = function() {
                    return this.props.isMetadataLoaded ? this.props.showContentManagerBridge ? this._renderContentManagerBridge() : this.props.sharingPermissions.canInvite() ? this.isGoldenGateTeamOverLimit() ? this._renderOverLimitSection() : i.default.createElement(I.ShareModalContactsSection, n.__assign({}, this.contactsSectionProps())) : i.default.createElement(T.SharingModalNoPermissionsSection, n.__assign({}, this.noPermissionsSectionProps())) : a.div({
                        className: "unified-share-modal__section unified-share-modal__section--to"
                    }, a.div({
                        className: "unified-share-modal__to-placeholder"
                    }, " "))
                }, d.prototype.noPermissionsSectionProps = function() {
                    return {
                        isFolder: this.props.contentInfo.isFolder(),
                        isTeamSharedFolder: this.props.isTeamSharedFolder,
                        members: this.props.members,
                        teamName: this.props.ownerTeam && this.props.ownerTeam.name
                    }
                }, d.prototype.shouldRenderContentSettingsShareButton = function() {
                    return this.props.isMetadataLoaded && (this.props.contentInfo.isFolder() && this.props.contentInfo.pathExists() || this.props.contentInfo.isFile() && this.props.showPassFileSettings || this.inShareMode() || this.props.isInContentManager)
                }, d.prototype.inShareMode = function() {
                    return [g.MODES.SHARE, g.MODES.SHARE_SENDING].includes(this.props.mode)
                }, d.prototype.shouldRenderFooterSection = function() {
                    return !!this.props.isMetadataLoaded && (this.shouldRenderLinkRowInFooter() || this.shouldRenderContentSettingsShareButton())
                }, d.prototype.renderFooterSection = function() {
                    var e = s.default(["unified-share-modal__section", "unified-share-modal__section--footer"]);
                    return i.default.createElement("div", {
                        className: e
                    }, this.shouldRenderLinkRowInFooter() ? this.renderLinkRowContent() : this.renderRegularFooterContent())
                }, d.prototype.shareButtonProps = function() {
                    return {
                        mode: this.props.mode,
                        contentInfo: this.props.contentInfo,
                        contactsError: this.props.contactsError,
                        contentNameMessage: this.props.contentNameMessage,
                        isInContentManager: this.props.isInContentManager,
                        isTeamSharedFolder: this.props.isTeamSharedFolder,
                        isTokenizerEmpty: this.props.isTokenizerEmpty,
                        onShareButtonClick: this.handleShareButtonClick
                    }
                }, d.prototype.renderRegularFooterContent = function() {
                    return i.default.createElement(F, n.__assign({
                        sharingInfo: this.props.sharingInfo,
                        onCheckChanged: this.handleCheckChanged,
                        hasRecipientMessage: this.props.recipientMessage.length > 0
                    }, this.shareButtonProps()))
                }, d.prototype._shouldRenderMainMembershipMode = function() {
                    return this.props.sharingPermissions.canInvite() || this._showSharingMemberList()
                }, d.prototype._shouldRenderMainLoading = function() {
                    var e = this.props.isMetadataLoaded,
                        t = this.props.sharingInfo.hasNonSelfMembers() || this.props.areMembersFullyLoaded,
                        n = !this.props.isPassEnabled || this._isPassInfoLoaded(),
                        r = this.props.shouldBlockMemberListOnPassLoad && !n;
                    return !e || !t || r
                }, d.prototype._renderMainSection = function() {
                    if (this._shouldRenderMainLoading()) return this._renderMainLoading();
                    switch (this.props.mode) {
                        case g.MODES.MEMBERSHIP:
                            return this._shouldRenderMainMembershipMode() ? this._renderMainMembership() : null;
                        case g.MODES.SHARE:
                        case g.MODES.SHARE_SENDING:
                            return this._renderMainShare();
                        default:
                            return null
                    }
                }, d.prototype.confidentialFolderSectionProps = function() {
                    return {
                        contentInfo: this.props.contentInfo,
                        ownerTeam: this.props.ownerTeam,
                        actionHandler: this.props.actionHandler
                    }
                }, d.prototype.shouldRenderConfidentialFolderSection = function() {
                    return this.props.isConfidentialFolder && this.props.canUpdateConfidentiality
                }, d.prototype._renderContentManagerBridge = function() {
                    var e = this.props.actionHandler.getSharingInfo(),
                        t = c.parent_dir(e.displayPath()),
                        n = e.name(),
                        r = f.genContentManagerBridgeUri({
                            containingFolder: t,
                            filenameToSelect: n
                        }),
                        s = i.default.createElement("span", null, P("You can manage folder membership in the Admin Console."), " ", i.default.createElement("a", {
                            href: r.toString(),
                            target: "_blank",
                            rel: "noopener"
                        }, P("Open in a new tab.")));
                    return e.isRaclOnGgEnabled() && (s = i.default.createElement("span", null, o.reactFormat(P("You can manage access in the <link>admin console</link>."), {
                        link: i.default.createElement("a", {
                            href: r.toString(),
                            target: "_blank",
                            rel: "noreferrer"
                        })
                    }))), i.default.createElement(k.SharingModalBanner, {
                        message: s
                    })
                }, d.prototype._renderOverLimitSection = function() {
                    var e = P("This folder is over its %(member_limit)s-member limit.", {
                            comment: "member limit is a number greater than 200"
                        }).format({
                            member_limit: f.GoldenGate.SHARING_TOTAL_LIMIT
                        }),
                        t = i.default.createElement("div", null, i.default.createElement("div", null, e), i.default.createElement("div", null, P("Please remove some members."), " ", i.default.createElement("a", {
                            href: "/help/9292",
                            target: "_blank",
                            rel: "noopener"
                        }, P("Learn more."))));
                    return i.default.createElement(k.SharingModalBanner, {
                        message: t
                    })
                }, d.prototype._renderMainLoading = function() {
                    return a.div({
                        className: s.default(["unified-share-modal__main", "unified-share-modal__section", "unified-share-modal__section--no-border", this.shouldRenderFooterSection() ? void 0 : "unified-share-modal__main--no-footer-spectrum"])
                    }, a.div({
                        className: "unified-share-modal__loader-wrapper"
                    }, a.div({
                        className: "c-loader"
                    }, P("Loading..."))))
                }, d.prototype.renderLinkOnlyFooter = function() {
                    return a.div({
                        className: s.default(["unified-share-modal__section", "unified-share-modal__section--footer"])
                    }, this.props.isLinkMetadataLoaded ? this.renderLinkRowContent() : this.renderLinkOnlyLoading())
                }, d.prototype.renderLinkRowContent = function() {
                    if (!this.props.isInContentManager) {
                        return this.props.actionHandler.getSharingInfo().isMultipleLinkInterfaceEnabled() ? i.default.createElement(b.ShareModalFooterLinkSection, n.__assign({}, this.linkSectionProps())) : this.props.isLinkMetadataLoaded ? i.default.createElement("div", {
                            className: "unified-share-modal__link-info"
                        }, i.default.createElement(v.ModalLinkInfo, n.__assign({}, this.modalLinkInfoProps()))) : a.div({
                            className: "unified-share-modal__link-info--filler-spectrum"
                        })
                    }
                }, d.prototype.getLinkOnlyReasonMessage = function() {
                    switch (this.props.linkOnlyReason) {
                        case g.LINK_ONLY_REASON.INSIDE_SHARED_FOLDER:
                            return i.default.createElement("span", null, P("This folder can only be shared as a link because it’s in a shared folder."), " ", i.default.createElement("a", {
                                href: "/help/1931",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, P("Learn more")));
                        case g.LINK_ONLY_REASON.CONTAINS_SHARED_FOLDER:
                            return i.default.createElement("span", null, P("This folder can only be shared as a link because it contains a shared folder."), " ", i.default.createElement("a", {
                                href: "/help/1931",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, P("Learn more")));
                        default:
                            return P("This folder can only be shared as a link.")
                    }
                }, d.prototype.renderLinkOnlyNoPermissionSection = function() {
                    var e;
                    return e = this.props.actionHandler.getSharingInfo().isOSXPackage() ? P("This package file can only be shared as a link.") : this.getLinkOnlyReasonMessage(), i.default.createElement(k.SharingModalBanner, {
                        message: e
                    })
                }, d.prototype.renderLinkOnlyLoading = function() {
                    return i.default.createElement("div", {
                        className: "unified-share-modal__link-info--loading"
                    }, i.default.createElement(L.ScooterLoader, {
                        "aria-label": P("Loading...")
                    }))
                }, d.prototype._showSharingMemberList = function() {
                    if (this.props.sharingInfo.hasNonSelfMembers()) return !0;
                    if (this.props.actionHandler.getSharingInfo().isRaclOnGgEnabled()) {
                        if (this.props.isFolderInsideTeamFolderTree) return 1 === this.props.members.users.size || !this.props.isConfidentialFolder
                    } else if (this.props.isFolderInsideTeamFolderTree) return 1 === this.props.members.users.size || !this.props.isConfidentialFolder && this.props.user.is_cdm_member;
                    return this.props.guestMembers.length > 0 || this.props.linkMembers.length > 0
                }, d.prototype._renderMemberList = function() {
                    return i.default.createElement("div", {
                        className: s.default(["unified-share-modal__section", "unified-share-modal__section--no-padding", "unified-share-modal__section--no-border"])
                    }, i.default.createElement(E.SharingMemberList, n.__assign({}, this.memberListProps())))
                }, d.prototype.memberListProps = function() {
                    return {
                        actionHandler: this.props.actionHandler,
                        areMembersFullyLoaded: this.props.areMembersFullyLoaded,
                        canInviteMembers: this.props.sharingPermissions.canInvite(),
                        hasLinkMetadata: this.props.isLinkMetadataLoaded,
                        canRelinquishMembership: this.props.canRelinquishMembership,
                        canUpdateConfidentiality: this.props.canUpdateConfidentiality,
                        contentInfo: this.props.contentInfo,
                        disabled: this.props.showContentManagerBridge,
                        groupSeenStateInfo: this.props.groupSeenStateInfo,
                        guestMembers: this.props.guestMembers,
                        isConfidentialFolder: this.props.isConfidentialFolder,
                        linkMembers: this.props.linkMembers,
                        memberCounts: this.props.memberCounts,
                        membership: this.props.members,
                        ownerTeamName: this.props.ownerTeam ? this.props.ownerTeam.name : void 0,
                        pendingMemberAction: this.props.pendingMemberAction,
                        presentAccountIds: this.props.presentAccountIds,
                        shouldShowPassUI: this.props.isPassEnabled && h.fetchingStatusIsSuccessful(this.props.passFetchingStatus),
                        user: this.props.user
                    }
                }, d.prototype._renderTeamSharedFolderBanner = function() {
                    var e;
                    return e = null != this.props.teamGroupInfo ? [a.p({
                        className: "u-mar-top-xxl"
                    }, a.a({
                        onClick: this._addEveryoneGroup
                    }, P("Add everyone at %(team_name)s").format({
                        team_name: this.props.ownerTeam.name
                    }))), a.p({}, P("Or, add groups to this team folder.") + " ", a.a({
                        onClick: this.props.onCreateGroupCallback
                    }, P("Create a group")))] : a.p({
                        className: "u-mar-top-xxl"
                    }, P("Add groups to this team folder.") + " ", a.a({
                        onClick: this.props.onCreateGroupCallback
                    }, P("Create a group"))), a.div({
                        className: s.default(["unified-share-modal__section", "unified-share-modal__section--no-border"])
                    }, a.div({
                        className: s.default(["unified-share-modal__no-members-banner", "u-font-center", "u-font-meta", "u-font-center", "u-font-meta"])
                    }, e))
                }, d.prototype._renderMainMembership = function() {
                    var e = s.default(["unified-share-modal__main", this._isPassInfoLoaded() ? "unified-share-modal__main--pass-loaded" : void 0]);
                    return this._showSharingMemberList() ? i.default.createElement("div", {
                        className: e
                    }, this._renderMemberList()) : this.props.isTeamSharedFolder ? i.default.createElement("div", {
                        className: e
                    }, this._renderTeamSharedFolderBanner()) : i.default.createElement("div", {
                        className: e
                    }, i.default.createElement(w.SharingModalMessageField, n.__assign({}, this.messageFieldProps())))
                }, d.prototype.messageFieldProps = function() {
                    return {
                        placeholder: P("Add a message (optional)"),
                        onChange: this.handleMessageChanged,
                        value: this.props.recipientMessage
                    }
                }, d.prototype._renderMainShare = function() {
                    return i.default.createElement("div", {
                        className: "unified-share-modal__main"
                    }, !this.props.isTeamSharedFolder && i.default.createElement(w.SharingModalMessageField, n.__assign({}, this.messageFieldProps())))
                }, d.prototype._isPassInfoLoaded = function() {
                    return h.fetchingStatusIsComplete(this.props.passFetchingStatus)
                }, d.prototype.shouldRenderLinkRowInFooter = function() {
                    return this.props.mode !== g.MODES.SHARE && this.props.mode !== g.MODES.SHARE_SENDING && !this.props.isInContentManager
                }, d.prototype.getInitialTypeaheadTokens = function() {
                    var e = this.props,
                        t = e.recipientTokens,
                        n = e.initialRecipientTokens;
                    return t ? n.concat(t) : n
                }, d.prototype.getTypeaheadPlaceholder = function() {
                    return P(this.props.isTeamSharedFolder ? "Group names" : this.props.user.is_team ? "Email, name, or group" : "Email or name")
                }, d.prototype.isCreatingNewFolder = function() {
                    var e = this.props.contentInfo;
                    return e.isFolder() && !e.extras.exists
                }, d.prototype.extractUserContacts = function() {
                    return n.__awaiter(this, void 0, Promise, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.props.actionHandler.recipientsChange(this.contactsSection.getContacts())];
                                case 1:
                                    return e.sent(), [2, this.contactsSection.getContacts().filter(function(e) {
                                        var t = e.dbx_account_id,
                                            n = e.email;
                                        return void 0 !== t || void 0 !== n
                                    }).map(function(e) {
                                        var t = e.dbx_account_id,
                                            n = e.email,
                                            r = e.name;
                                        return t ? {
                                            accountId: t,
                                            displayName: r
                                        } : {
                                            email: n,
                                            displayName: r
                                        }
                                    })]
                            }
                        })
                    })
                }, d.displayName = "ShareModalContentSpectrum", d.defaultProps = {
                    headerId: "unified-share-modal-title",
                    initialRecipientRawInput: "",
                    initialRecipientTokens: [],
                    isTeamSharedFolder: !1,
                    mode: g.MODES.MEMBERSHIP,
                    onFolderSettingsClick: null,
                    guestMembers: [],
                    linkMembers: [],
                    onCreateGroupCallback: function() {
                        r.redirect("/team#groups/newgroup")
                    }
                }, d
        })(i.default.Component),
        O = u.requireCssWithComponent(R, ["/static/css/spectrum/index.web-vflagwTbb.css", "/static/js/spectrum-sharing/index.web-vflUpo_2f.css", "/static/css/react/contacts_tokenizer-vflILZWoO.css", "/static/css/scooter/scooter-scoped-vflFpCY2P.css", "/static/css/sharing/share_modal-vflQ4lIdH.css", "/static/css/modal-vflKK1XSJ.css"], [d.BubbleDropdown, _.Snackbar]);
    t.ShareModalContentSpectrum = O
}), define("modules/clean/sharing/views/modal_link_info", ["require", "exports", "tslib", "jquery", "external/classnames", "react", "modules/clean/clipboard_v2", "modules/clean/react/util", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/link_description", "modules/clean/sharing/ui_util", "modules/clean/sharing/ui_notifications_util", "modules/clean/sharing/views/constants", "modules/core/i18n", "spectrum-sharing/components/sharing_modal_footer_link"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importDefault(i), m = n.__importStar(m);
    var _, f = m.i18n_default_project("sharing")._;
    (function(e) {
        e.CAN_LINK = "CAN_LINK", e.INVITE_NO_LINK = "INVITE_NO_LINK", e.NO_INVITE_NO_LINK = "NO_INVITE_NO_LINK", e.CANT_LINK_TEAM_FOLDER = "CANT_LINK_TEAM_FOLDER", e.ERROR_FETCHING_LINK_INFO = "ERROR_FETCHING_LINK_INFO"
    })(_ = t.LinkabilityStates || (t.LinkabilityStates = {}));
    var g = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.onClickButtonLinkSettings = function() {
                n.props.mode === p.MODES.LINK_ONLY ? n.props.actionHandler && n.props.actionHandler.handleLinkSettingsClick() : n.props.onLinkSettingsClick()
            }, n.setTextInputRef = function(e) {
                return n.urlField = e, e
            }, n.onClickButtonCreateLink = function() {
                n.setState({
                    creatingLink: !0
                }, function() {
                    return n.handleCreateLinkClicked()
                })
            }, n.handleCreateLinkClicked = function() {
                if (n.props.actionHandler) return n.props.actionHandler.createSharedLink()
            }, n.handleCopyLinkClicked = function() {
                if (!n.state.showingUrl) {
                    var e = {};
                    n.props.linkMetadata && (e.type = "shmodel", e.visibility = n.props.linkMetadata.link_permissions.resolved_visibility, e.expiration = n.props.linkMetadata.expires), n.props.contentInfo && (d.logTiburonEvent(n.props.contentInfo, n.props.user.id, "CLICK_TIB_COPY_LINK", e), d.logTiburonEvent(n.props.contentInfo, n.props.user.id, "COPY_SHARED_LINK", e))
                }
                return o.setStatePromise(n, {
                    showingUrl: !n.state.showingUrl,
                    creatingLink: !1
                }).then(function() {
                    if (n.urlField) {
                        var e = n.urlField;
                        e.focus(), e.select(), n.clipboard.do_copy()
                    }
                })
            }, n.state = {
                showingUrl: !1,
                creatingLink: !1
            }, n.clipboard = null, n
        }
        return n.__extends(t, e), t.prototype.componentWillMount = function() {
            this.clipboard = new a.ClipboardV2(this.props.linkMetadata && this.props.linkMetadata.url, function() {
                return u.sharingNotificationSuccess(f("Link copied to clipboard"))
            }, function() {
                u.sharingNotificationError(f("Unable to copy the link, please copy manually"))
            }, this.handleCopyLinkClicked)
        }, t.prototype.componentDidMount = function() {
            this.setupCopy()
        }, t.prototype.componentDidUpdate = function() {
            this.setupCopy()
        }, t.prototype.setupCopy = function() {
            var e = r.default(".copy-link-button");
            e.length && this.clipboard.setupCopy(e, r.default(".copy-link-container"))
        }, t.prototype.getLinkabilityState = function() {
            var e = this.props.actionHandler && this.props.actionHandler.getSharingInfo();
            return e && e.isCloudDoc() ? this.getLinkabilityStateForCloudDoc() : this.props.isTeamSharedFolder ? _.CANT_LINK_TEAM_FOLDER : this.props.canShareLink || this.props.mode === p.MODES.LINK_ONLY ? _.CAN_LINK : this.props.permissions.canInvite() ? _.INVITE_NO_LINK : _.NO_INVITE_NO_LINK
        }, t.prototype.getLinkabilityStateForCloudDoc = function() {
            var e = this.props.actionHandler && this.props.actionHandler.getSharingInfo(),
                t = this.props.permissions,
                n = this.props.isLinkMetadataLoaded && void 0 === this.props.linkMetadata;
            return !e.isTwoLinkRedesignEnabled() && n ? _.ERROR_FETCHING_LINK_INFO : this.props.linkMetadata || t.canCreateViewLink() ? _.CAN_LINK : _.NO_INVITE_NO_LINK
        }, t.prototype.render = function() {
            var e = this.getLinkabilityState();
            return e === _.NO_INVITE_NO_LINK ? this.renderSpectrumCantLinkOrShare() : e === _.INVITE_NO_LINK ? this.renderSpectrumCantLinkCDM() : e === _.CANT_LINK_TEAM_FOLDER ? this.renderSpectrumCantLinkTeamFolder() : e === _.ERROR_FETCHING_LINK_INFO ? this.renderSpectrumErrorFetchingLinkInfo() : this.props.linkMetadata ? this.state.showingUrl ? this.renderSpectrumCopyLink() : this.renderSpectrumLink() : this.state.creatingLink ? this.renderSpectrumLoading() : e === _.CAN_LINK ? this.renderSpectrumNoLink() : null
        }, t.prototype.spectrumClassNames = function() {
            return s.default({
                "scl-sharing-modal-footer-link--no-border": this.props.mode === p.MODES.LINK_ONLY,
                "scl-sharing-modal-footer-link--no-spacing": this.props.mode === p.MODES.LINK_ONLY
            })
        }, t.prototype.renderSpectrumCantLinkOrShare = function() {
            return i.default.createElement(h.SharingModalFooterLink, {
                body: f("Link not available")
            })
        }, t.prototype.renderSpectrumCantLinkCDM = function() {
            var e = i.default.createElement("a", {
                href: "/help/business/team-folders",
                target: "_blank",
                rel: "noopener noreferrer"
            }, f("Learn more"));
            return i.default.createElement(h.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                body: f("Link not available. To share, invite specific people."),
                actions: e
            })
        }, t.prototype.renderSpectrumCantLinkTeamFolder = function() {
            var e = i.default.createElement("a", {
                href: "/help/business/team-folders",
                target: "_blank",
                rel: "noopener noreferrer"
            }, f("Learn more"));
            return i.default.createElement(h.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                body: f("Link not available"),
                actions: e
            })
        }, t.prototype.renderSpectrumErrorFetchingLinkInfo = function() {
            return i.default.createElement(h.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                body: f("We were unable to retrieve information about shared links")
            })
        }, t.prototype.renderSpectrumLink = function() {
            var e;
            e = a.ClipboardV2.is_supported() ? i.default.createElement("span", {
                className: "copy-link-button"
            }, f("Copy link")) : f("Show link");
            var t = s.default(this.spectrumClassNames(), "scl-sharing-modal-footer-link--link-options");
            return i.default.createElement(h.SharingModalFooterLinkOptions, {
                className: t,
                statusLinkCreated: this.renderLinkDescription(),
                textButtonLinkSettings: f("Link settings"),
                textButtonCopyLink: e,
                buttonCopyClassName: "button-as-link copy-link-container",
                onClickButtonLinkSettings: this.onClickButtonLinkSettings,
                onClickButtonCopyLink: this.handleCopyLinkClicked
            })
        }, t.prototype.renderSpectrumCopyLink = function() {
            var e = null != this.props.linkMetadata ? this.props.linkMetadata.url : "";
            return i.default.createElement(h.SharingModalFooterLinkCopy, {
                className: this.spectrumClassNames(),
                sharedLinkUrl: e,
                labelSharedLinkUrl: f("Shared link URL"),
                textButton: f("Hide link"),
                textInputRef: this.setTextInputRef,
                onClickButton: this.handleCopyLinkClicked
            })
        }, t.prototype.renderSpectrumNoLink = function() {
            return i.default.createElement(h.SharingModalFooterLinkCreate, {
                className: this.spectrumClassNames(),
                statusNoLinkCreated: f("No link created yet"),
                textButtonCreateLink: f("Create link"),
                onClickButtonCreateLink: this.onClickButtonCreateLink
            })
        }, t.prototype.renderSpectrumLoading = function() {
            return i.default.createElement(h.SharingModalFooterLinkLoading, {
                className: this.spectrumClassNames(),
                statusCreatingLink: f("Creating link")
            })
        }, t.prototype.renderLinkDescription = function() {
            var e = null;
            this.props.linkMetadata instanceof l.LinkMetadata && (e = c.formatLinkDescription(this.props.linkMetadata));
            var t = null;
            return null !== e && (t = i.default.createElement("span", {
                className: "unified-share-modal-link-info__description"
            }, e)), i.default.createElement("span", null, t)
        }, t.displayName = "ModalLinkInfo", t
    })(i.default.Component);
    t.ModalLinkInfo = g
}), define("modules/clean/sharing/views/righteous_modal_link_info", ["require", "exports", "tslib", "jquery", "modules/core/i18n", "external/classnames", "react", "modules/clean/clipboard_v2", "modules/clean/sharing/views/constants", "modules/clean/react/util", "modules/clean/sharing/views/modal_link_info", "spectrum-sharing/components/sharing_modal_footer_link", "spectrum-sharing/components/scooter_loader", "spectrum/button", "spectrum/icon_acl", "spectrum/colorized_icon", "modules/clean/sharing/ui_notifications_util", "modules/clean/sharing/link_description", "modules/clean/sharing/ui_util", "modules/clean/sharing/constants"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E) {
    "use strict";

    function v(e) {
        var t = E.COLORS.COLOR_INK_60;
        switch (e) {
            case "editor":
                return a.default.createElement(_.ColorizedIcon, {
                    color: t
                }, a.default.createElement(h.IconAcl, {
                    name: "link-edit"
                }));
            default:
                return a.default.createElement(_.ColorizedIcon, {
                    color: t
                }, a.default.createElement(h.IconAcl, {
                    name: "link-view"
                }))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s), i = n.__importDefault(i), a = n.__importDefault(a);
    var I = s.i18n_default_project("sharing")._;
    t.getSpectrumLinkIcon = v;
    var b = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.getSpectrumLinkText = function(e) {
                switch (e) {
                    case "editor":
                        return a.default.createElement("span", null, a.default.createElement("b", null, I("Can edit")), a.default.createElement("br", null), n.renderLinkDescription());
                    case "viewer":
                        return a.default.createElement("span", null, a.default.createElement("b", null, I("Can view")), a.default.createElement("br", null), n.renderLinkDescription());
                    default:
                        return n.renderLinkDescription()
                }
            }, n.setTextInputRef = function(e) {
                return n.urlField = e, e
            }, n.getSpectrumNoLinkText = function(e) {
                switch (e) {
                    case "editor":
                        return a.default.createElement("span", null, a.default.createElement("b", null, I("Can edit")), a.default.createElement("br", null), I("No link created yet."));
                    case "viewer":
                        return a.default.createElement("span", null, a.default.createElement("b", null, I("Can view")), a.default.createElement("br", null), I("No link created yet."));
                    default:
                        return I("No link created yet")
                }
            }, n.onClickButtonCreateLink = function() {
                n.setState({
                    creatingLink: !0
                }, function() {
                    return n.handleCreateLinkClicked()
                })
            }, n.handleCreateLinkClicked = function() {
                if (n.props.actionHandler) return n.props.actionHandler.createSharedLink(n.props.linkAccessLevel)
            }, n.getSpectrumLoadingText = function(e) {
                switch (e) {
                    case "editor":
                        return a.default.createElement("span", null, a.default.createElement("b", null, I("Can edit")), a.default.createElement("br", null), I("Creating edit link..."), a.default.createElement(p.ScooterLoader, null));
                    case "viewer":
                        return a.default.createElement("span", null, a.default.createElement("b", null, I("Can view")), a.default.createElement("br", null), I("Creating view link..."), a.default.createElement(p.ScooterLoader, null));
                    default:
                        return
                }
            }, n.handleCopyLinkClicked = function() {
                if (!n.state.showingUrl) {
                    var e = {};
                    n.props.linkMetadata && (e.type = "shmodel", e.visibility = n.props.linkMetadata.link_permissions.resolved_visibility, e.expiration = n.props.linkMetadata.expires), n.props.contentInfo && (S.logTiburonEvent(n.props.contentInfo, n.props.user.id, "CLICK_TIB_COPY_LINK", e), S.logTiburonEvent(n.props.contentInfo, n.props.user.id, "COPY_SHARED_LINK", e))
                }
                return c.setStatePromise(n, {
                    showingUrl: !n.state.showingUrl,
                    creatingLink: !1
                }).then(function() {
                    if (n.urlField) {
                        var e = n.urlField;
                        e.focus(), e.select(), n.clipboard.do_copy()
                    }
                })
            }, n.state = {
                showingUrl: !1,
                creatingLink: !1
            }, n.clipboard = null, n
        }
        return n.__extends(t, e), t.prototype.getLinkabilityState = function() {
            var e = this.props.actionHandler && this.props.actionHandler.getSharingInfo(),
                t = this.props.permissions;
            return e && e.isCloudDoc() ? this.getLinkabilityStateForCloudDoc() : this.props.isTeamSharedFolder ? d.LinkabilityStates.CANT_LINK_TEAM_FOLDER : (e.isFolder() || !e.isMetadataLoaded() || t.canCreateViewLink()) && (this.props.canShareLink || this.props.mode === l.MODES.LINK_ONLY) ? d.LinkabilityStates.CAN_LINK : t.canInvite() ? d.LinkabilityStates.INVITE_NO_LINK : d.LinkabilityStates.NO_INVITE_NO_LINK
        }, t.prototype.getLinkabilityStateForCloudDoc = function() {
            var e = this.props.actionHandler && this.props.actionHandler.getSharingInfo();
            return this.props.linkMetadata ? d.LinkabilityStates.CAN_LINK : "editor" === this.props.linkAccessLevel && e.permissionsObj().canCreateEditLink() ? d.LinkabilityStates.CAN_LINK : "viewer" === this.props.linkAccessLevel && e.permissionsObj().canCreateViewLink() ? d.LinkabilityStates.CAN_LINK : d.LinkabilityStates.NO_INVITE_NO_LINK
        }, t.prototype.componentWillMount = function() {
            var e = this;
            this.clipboard = new o.ClipboardV2(this.props.linkMetadata && this.props.linkMetadata.url, function() {
                return "editor" === e.props.linkAccessLevel ? f.sharingNotificationSuccess(I("Edit link copied and ready to share. Sign-in required to edit file.")) : f.sharingNotificationSuccess(I("View link copied and ready to share."))
            }, function() {
                f.sharingNotificationError(I("Unable to copy the link, please copy manually"))
            }, this.handleCopyLinkClicked)
        }, t.prototype.componentDidMount = function() {
            this.setupCopy()
        }, t.prototype.componentDidUpdate = function() {
            this.setupCopy()
        }, t.prototype.setupCopy = function() {
            var e = r.default(".copy-link-button");
            e.length && this.clipboard.setupCopy(e, r.default(".copy-link-container"))
        }, t.prototype.spectrumClassNames = function() {
            return i.default("scl-sharing-modal-footer-link--no-border")
        }, t.prototype.render = function() {
            var e = this.getLinkabilityState();
            return e === d.LinkabilityStates.NO_INVITE_NO_LINK ? this.renderSpectrumCantLinkOrShare() : e === d.LinkabilityStates.INVITE_NO_LINK ? this.renderSpectrumCantLinkCDM() : e === d.LinkabilityStates.CANT_LINK_TEAM_FOLDER ? this.renderSpectrumCantLinkTeamFolder() : this.props.linkMetadata ? this.state.showingUrl ? this.renderSpectrumCopyLink() : this.renderSpectrumLink() : this.state.creatingLink ? this.renderSpectrumLoading() : e === d.LinkabilityStates.CAN_LINK ? this.renderSpectrumNoLink() : null
        }, t.prototype.getSpectrumLinkNoAvailableCloudDocText = function(e) {
            switch (e) {
                case "editor":
                    return a.default.createElement("span", null, a.default.createElement("b", null, I("Can edit")), a.default.createElement("br", null), I("Link not available"));
                case "viewer":
                    return a.default.createElement("span", null, a.default.createElement("b", null, I("Can view")), a.default.createElement("br", null), I("Link not available"));
                default:
                    return I("Link not available")
            }
        }, t.prototype.renderSpectrumCantLinkOrShare = function() {
            return a.default.createElement(u.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                icon: v(this.props.linkAccessLevel),
                body: this.getSpectrumLinkNoAvailableCloudDocText(this.props.linkAccessLevel)
            })
        }, t.prototype.getSpectrumCantLinkCDMCloudDocText = function(e) {
            switch (e) {
                case "editor":
                    return a.default.createElement("span", null, a.default.createElement("b", null, I("Can edit")), a.default.createElement("br", null), I("Link not available. To share, invite specific people."));
                case "viewer":
                    return a.default.createElement("span", null, a.default.createElement("b", null, I("Can view")), a.default.createElement("br", null), I("Link not available. To share, invite specific people."));
                default:
                    return I("Link not available. To share, invite specific people.")
            }
        }, t.prototype.renderSpectrumCantLinkCDM = function() {
            var e = a.default.createElement("a", {
                href: "/help/business/team-folders",
                target: "_blank",
                rel: "noopener noreferrer"
            }, I("Learn more"));
            return a.default.createElement(u.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                icon: v(this.props.linkAccessLevel),
                body: this.getSpectrumCantLinkCDMCloudDocText(this.props.linkAccessLevel),
                actions: e
            })
        }, t.prototype.renderSpectrumCantLinkTeamFolder = function() {
            var e = a.default.createElement("a", {
                href: "/help/business/team-folders",
                target: "_blank",
                rel: "noopener noreferrer"
            }, I("Learn more"));
            return a.default.createElement(u.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                icon: v(this.props.linkAccessLevel),
                body: this.getSpectrumLinkNoAvailableCloudDocText(this.props.linkAccessLevel),
                actions: e
            })
        }, t.prototype.renderLinkDescription = function() {
            var e;
            if (this.props.linkMetadata) {
                var t = this.props.actionHandler && this.props.actionHandler.getSharingInfo();
                e = g.formatLinkDescriptionPlainText(this.props.linkMetadata, t.isUserOnOwnerTeam())
            }
            return e
        }, t.prototype.renderSpectrumLink = function() {
            var e;
            return e = o.ClipboardV2.is_supported() ? a.default.createElement("span", {
                className: "copy-link-button"
            }, I("Copy link")) : I("Show link"), a.default.createElement(u.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                icon: v(this.props.linkAccessLevel),
                body: this.getSpectrumLinkText(this.props.linkAccessLevel),
                actions: a.default.createElement(m.Button, {
                    className: "button-as-link copy-link-container",
                    key: "copy",
                    variant: "borderless",
                    onClick: this.handleCopyLinkClicked
                }, e)
            })
        }, t.prototype.renderSpectrumCopyLink = function() {
            var e = null != this.props.linkMetadata ? this.props.linkMetadata.url : "";
            return a.default.createElement(u.SharingModalFooterLinkCopy, {
                className: this.spectrumClassNames(),
                icon: v(this.props.linkAccessLevel),
                sharedLinkUrl: e,
                labelSharedLinkUrl: I("Shared link URL"),
                textButton: I("Hide link"),
                textInputRef: this.setTextInputRef,
                onClickButton: this.handleCopyLinkClicked
            })
        }, t.prototype.renderSpectrumNoLink = function() {
            return a.default.createElement(u.SharingModalFooterLinkCreate, {
                className: this.spectrumClassNames(),
                icon: v(this.props.linkAccessLevel),
                statusNoLinkCreated: this.getSpectrumNoLinkText(this.props.linkAccessLevel),
                textButtonCreateLink: I("Create link"),
                onClickButtonCreateLink: this.onClickButtonCreateLink
            })
        }, t.prototype.renderSpectrumLoading = function() {
            return a.default.createElement(u.SharingModalFooterLink, {
                className: this.spectrumClassNames(),
                icon: v(this.props.linkAccessLevel),
                body: this.getSpectrumLoadingText(this.props.linkAccessLevel)
            })
        }, t.displayName = "RighteousModalLinkInfo", t
    })(a.default.Component);
    t.RighteousModalLinkInfo = b
}), define("modules/clean/sharing/views/share_modal/confidential_folder_section", ["require", "exports", "tslib", "react", "modules/clean/react_format", "spectrum-sharing/components/sharing_modal_banner", "modules/core/i18n", "spectrum/button", "modules/clean/sharing/constants", "modules/clean/em_string"], function(e, t, n, r, s, i, a, o, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), a = n.__importStar(a);
    var d = a.i18n_default_project("sharing")._,
        u = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.restoreAccessToConfidentialFolder = function() {
                    var e = t.props,
                        n = e.ownerTeam,
                        r = e.actionHandler,
                        s = n ? n.name : "";
                    r.handleSetConfidentialClick(!0, s)
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.actionHandler,
                    n = e.contentInfo,
                    a = e.ownerTeam,
                    u = d("<b>Invite only.</b> Members of parent folders can’t access."),
                    p = d("Restore access");
                if (t.getSharingInfo().isRaclOnGgEnabled()) {
                    var m = t.getSharingInfo().parentFolderName(),
                        h = "" !== m,
                        _ = a ? a.name : "";
                    h ? (u = d("Access restricted. Not shared with all members of <b>%(parent)s</b>.").format({
                        parent: c.Emstring.em_snippet(m, l.SNIPPET_SIZES.FILENAME)
                    }), p = d("Share with members")) : (u = d("Access restricted. Not shared with everyone at %(team_name)s.").format({
                        team_name: c.Emstring.em_snippet(_, l.SNIPPET_SIZES.DISPLAY_NAME)
                    }), p = d("Share with everyone"))
                }
                var f = r.default.createElement("div", {
                    className: "confidential-folder-section"
                }, s.reactFormat(u, {
                    b: r.default.createElement("b", null)
                }), " ", n.pathExists() && r.default.createElement(o.Button, {
                    onClick: this.restoreAccessToConfidentialFolder,
                    className: "button-as-link",
                    key: "restore access",
                    variant: "styleless",
                    "aria-label": p
                }, p));
                return r.default.createElement(i.SharingModalBanner, {
                    type: "dark",
                    message: f
                })
            }, t
        })(r.default.Component);
    t.ConfidentialFolderSection = u
}), define("modules/clean/sharing/views/share_modal/contacts_error_banner", ["require", "exports", "tslib", "react", "modules/clean/sharing/ui_util", "spectrum-sharing/components/sharing_modal_banner"], function(e, t, n, r, s, i) {
    "use strict";

    function a(e) {
        var t, n = e.level,
            a = void 0 === n ? "defaultLevel" : n,
            o = e.message;
        if (!o) return null;
        var l = (t = {}, t[s.ContactsErrorLevel.Error] = "error", t[s.ContactsErrorLevel.Warn] = "warn", t.defaultLevel = "default", t)[a];
        return r.default.createElement(i.SharingModalBanner, {
            className: "contacts-error-banner",
            type: l,
            message: o
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), t.ContactsErrorBanner = a
}), define("modules/clean/sharing/views/share_modal/sharing_modal_no_permissions_section", ["require", "exports", "tslib", "react", "modules/clean/react_format", "spectrum-sharing/components/sharing_modal_banner", "modules/core/i18n", "external/lodash"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), a = n.__importStar(a), o = n.__importStar(o);
    var l = a.i18n_default_project("sharing")._,
        c = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getNoPermissionMessage = function() {
                    return t.props.isTeamSharedFolder ? t.getTeamSharedFolderMessage() : l(t.props.isFolder ? "You don’t have permission to manage membership of this folder" : "You don’t have permission to manage membership of this file")
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return r.default.createElement(i.SharingModalBanner, {
                    message: this.getNoPermissionMessage()
                })
            }, t.prototype.getTeamSharedFolderMessage = function() {
                return this.renderTeamFolderNoPermissionMessage() ? l("This folder is automatically shared with all members of %(team_name)s").format({
                    team_name: this.props.teamName
                }) : s.reactFormat(l("Only <admin_link>admins</admin_link> and <group_link>group managers</group_link> can change team folder membership."), {
                    admin_link: r.default.createElement("a", {
                        href: "/team?_tk=left_nav_team",
                        target: "_blank",
                        rel: "noreferrer"
                    }),
                    group_link: r.default.createElement("a", {
                        href: "/help/7232#transfer",
                        target: "_blank",
                        rel: "noreferrer"
                    })
                })
            }, t.prototype.renderTeamFolderNoPermissionMessage = function() {
                return o.get(this.props, "members.groups", {}).some(function(e) {
                    return "team" === e.group_type && o.get(e, "permissions.make_editor.allow") && o.get(e, "permissions.make_viewer.allow")
                })
            }, t
        })(r.default.Component);
    t.SharingModalNoPermissionsSection = c
}), define("modules/clean/sharing/views/share_modal_contacts_section", ["require", "exports", "tslib", "react", "modules/core/browser", "modules/clean/contacts/config", "spectrum/typeahead", "modules/clean/analytics", "spectrum-sharing/components/sharing_contact_token", "spectrum-sharing/components/sharing_modal_contacts_field", "spectrum-sharing/components/member_row", "modules/clean/sharing/access_level", "modules/clean/contacts/contact", "modules/clean/contacts/util", "modules/clean/contacts/data_v2", "modules/clean/contacts/types", "modules/clean/react/flag", "modules/clean/react/image", "modules/clean/sharing/constants", "modules/clean/sharing/strings", "modules/clean/sharing/ui_util", "modules/clean/static_urls", "modules/clean/profile_services/profile_services_link", "modules/clean/profile_services/popup_handler", "modules/core/exception", "modules/clean/profile_services/profile_services_constants", "modules/core/notify", "modules/core/i18n", "external/react-dom", "modules/core/user_i18n", "spectrum-sharing/utils"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f, g, S, E, v, I, b, y, C, M, T, N, A, k, w) {
    "use strict";

    function L(e, t, n) {
        return void 0 !== e && null !== e && "function" == typeof e[t] ? n(e, t) : void 0
    }

    function P(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s), i = n.__importStar(i), m = n.__importDefault(m), _ = n.__importDefault(_), M = n.__importDefault(M), N = n.__importStar(N), A = n.__importStar(A), k = n.__importStar(k);
    var F = N.i18n_default_project("sharing")._,
        R = w.ContactsTokenizer(p.Contact),
        O = (function() {
            function e() {}
            return e.prototype.getKey = function() {
                return "expand-importer"
            }, e
        })();
    t.ExpandImport = O;
    var D = (function() {
        function e(e) {
            var t = e.provider,
                n = e.connected;
            this.provider = t, this.connected = n
        }
        return e.prototype.getKey = function() {
            return "third-party-import" + this.provider
        }, e
    })();
    t.ThirdPartyImport = D;
    var x = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.updateRecipientData = function() {
                n.props.actionHandler.recipientsChange(n.state.typeaheadTokens, n.typeaheadInput.value)
            }, n.filterContacts = function(e) {
                return n.props.isTeamSharedFolder ? e.type !== _.default.FB && !!e.group_id : n.props.isInContentManager ? e.type !== _.default.FB : e.type !== _.default.FB && e.email !== n.props.user.email
            }, n.handleAccessTypeChange = function(e) {
                n.props.actionHandler.changeRecipientAccess(e)
            }, n.handleTypeaheadOnChange = function(e) {
                var t = R.tokenizeDelimitedInputs(e);
                if (t.length > 0) return n.validateAndAddTokens(t), void n.typeahead.setState({
                    inputValue: ""
                });
                n._logSearchBegin(e), n.showSuggestions(e), n.updateRecipientData()
            }, n.handleExpandImport = function() {
                var e = [];
                Array.from(M.default.importable_contact_services()).map(function(t) {
                    if (n.profile_services) {
                        var r = new D({
                            provider: t,
                            connected: n.profile_services.service_is_connected(t)
                        });
                        e.push(r)
                    }
                }), n.setState({
                    typeaheadSuggestions: e
                })
            }, n.handleThirdPartyImport = function(e) {
                var t;
                if (C.assert((t = e.provider, Array.from(M.default.importable_contact_services()).includes(t)), "invalid party contact provider " + e.provider), n.profile_services && n.profile_services.service_is_connected(e.provider)) {
                    var r = F("You’re already connected to %(service_name)s").format({
                        service_name: M.default.to_name(e.provider)
                    });
                    return void T.Notify.success(r)
                }
                return n.link_handler.auth_service_with_user(e.provider, n.props.user.id, function(e) {
                    return b.ProfileServicesLinkingHandler.show_import_notifications(e)
                })
            }, n.handleTypeaheadSelect = function(e, t, r) {
                if (e || r)
                    if (e instanceof O) n.handleExpandImport();
                    else if (e instanceof D) n.handleThirdPartyImport(e);
                else {
                    n._logTokenSelect(e, t, r);
                    var s = e ? [e] : R.tokenizeAllRawInputs(r);
                    n.validateAndAddTokens(s), n.setState({
                        typeaheadSuggestions: []
                    })
                }
            }, n.handleTypeaheadRemoveToken = function(e) {
                var t = n.state.typeaheadTokens.filter(function(t) {
                    return t !== e
                });
                n._logTokenChangeEvent(e, !0), n.setState({
                    typeaheadTokens: t
                })
            }, n.renderExpandImport = function() {
                return r.default.createElement("div", {
                    className: "typeahead-option"
                }, r.default.createElement(f.Flag, {
                    leftAttachment: (function() {
                        return r.default.createElement(g.Image, {
                            className: "u-pad-right-s",
                            src: I.static_url("/static/images/icons/icon-import-vflOL9sCs.png"),
                            srcHiRes: I.static_url("/static/images/icons/icon-import@2x-vfluE8TBO.png")
                        })
                    })()
                }, r.default.createElement("div", {
                    className: "option-primary option-only"
                }, F("Import contacts"))))
            }, n.renderThirdPartyImport = function(e) {
                return r.default.createElement(U, {
                    import: e
                })
            }, n.renderMemberRow = function(e) {
                var t = e.name || e.email,
                    n = k.getInitials(t);
                return r.default.createElement(d.MemberRow, {
                    id: e.getKey(),
                    initials: n,
                    avatarUrl: e.photo_url,
                    description: e.email,
                    displayName: t,
                    tag: "div",
                    variant: "narrow"
                })
            }, n.renderTypeaheadSuggestion = function(e) {
                return e instanceof O ? n.renderExpandImport() : e instanceof D ? n.renderThirdPartyImport(e) : n.renderMemberRow(e)
            }, n.renderTypeaheadTokenContent = function(e) {
                var t = e.name || e.email,
                    s = {
                        did_select_suggestion: !1
                    };
                n._logTokenChangeEvent(e, !1, s);
                var i = v.validateContact(e, n.props.user, n.props.ownerTeam, n.props.actionHandler.getSharingInfo().folderPolicy(), n.props.isTeamSharedFolder, n.props.isFolderInsideTeamFolderTree, n.props.memberCountWithRecipients),
                    a = {
                        state: i.state,
                        msg: i.msg
                    };
                return r.default.createElement(l.SharingContactToken, {
                    avatarUrl: e.photo_url,
                    displayName: t,
                    validation: a
                })
            }, n.setTypeaheadRef = function(e) {
                n.typeahead = e
            }, n.setTypeaheadInputRef = function(e) {
                n.typeaheadInput = e
            }, n.finishLogging = function(e) {
                var t = n.contactsDataSource.getStats().numLocalContacts;
                if (n._flush_unfinished_queries_cache(), n.props.shouldLogContactSearch) return n.contact_search_logger.log_records(n.props.user.id, e, t)
            }, n._logTokenSelect = function(e, t, r) {
                var s = {
                    search_expr: r,
                    selected_pos: t || 0,
                    num_query_results: n.state.typeaheadSuggestions.length,
                    did_select_suggestion: !0
                };
                n._logTokenChangeEvent(e, !1, s)
            }, n._logTokenChangeEvent = function(e, t, r) {
                if (void 0 === t && (t = !1), void 0 === r && (r = {}), n.contact_search_logger && e) {
                    if (!t) {
                        var i = {
                            context: n._getLoggingContext(),
                            contact_type: e.type,
                            contact_id: e.getContactID(),
                            contact_name: e.name,
                            sort_variant: null,
                            event_ts: L(s.performance(), "now", function(e) {
                                return e.now()
                            })
                        };
                        for (var a in r) r[a] && (i[a] = r[a]);
                        return n.contact_search_logger.add_record(i)
                    }
                    var o = e.getContactID();
                    return o ? n.contact_search_logger.flag_record_as_removed(o) : void 0
                }
            }, n._logSearchComplete = function(e, t, r) {
                if (void 0 === r && (r = !0), n._shouldLogSearch() && e) {
                    var i = s.performance().now(),
                        a = n.unfinished_contact_search_queries[e];
                    if (a) {
                        var o = a.begin_time;
                        !("ttfr" in a) && t > 0 && (a.ttfr = Math.floor(i - o)), r ? (a.local_duration = Math.floor(i - o), a.num_local_results = t) : (a.remote_duration = Math.floor(i - o), a.num_additional_remote_results = t), a.num_results += t;
                        return (function() {
                            return n.contactsDataSource.isSearchLocalOnly() && r || !r
                        })() ? (a = n._prepareSearchStatsForLogging(a, e, i, !0), n.contact_search_logger.add_timing_record(a), n.contact_search_logger.count_search(a.is_slow), delete n.unfinished_contact_search_queries[e]) : void 0
                    }
                }
            }, n._logSearchBegin = function(e) {
                if (n._shouldLogSearch() && e) {
                    var t = s.performance().now();
                    return n._flush_unfinished_queries_cache(t), n.unfinished_contact_search_queries[e] = {
                        begin_time: t,
                        num_results: 0
                    }
                }
            }, n._shouldLogSearch = function() {
                return n.props.shouldLogContactSearch && null != n.contact_search_logger && null != P(s.performance(), function(e) {
                    return e.now
                })
            }, n._flush_unfinished_queries_cache = function(e) {
                if (n._shouldLogSearch()) {
                    null == e && (e = s.performance().now());
                    for (var t in n.unfinished_contact_search_queries)
                        if (n.unfinished_contact_search_queries[t]) {
                            var r = n.unfinished_contact_search_queries[t];
                            e && e - r.begin_time < i.CONTACTS_SEARCH_PREEMPTED_THRESHOLD && (r.is_preempted = !0), r = n._prepareSearchStatsForLogging(r, t, e, !1), n.contact_search_logger.add_timing_record(r), n.contact_search_logger.count_search(r.is_slow)
                        }
                    return n.unfinished_contact_search_queries = {}
                }
            }, n._prepareSearchStatsForLogging = function(e, t, r, s) {
                var i = e.begin_time;
                e.duration = Math.floor(r - i), "ttfr" in e ? e.is_slow = e.ttfr > 100 : s && 0 === e.num_results ? e.is_slow = !1 : e.is_slow = e.duration > 100;
                var a = n.contactsDataSource.getStats().localContactsDownloadedTime;
                return e.started_before_download = null == a || i < a, "is_preempted" in e || (e.is_preempted = !1), e.context = n._getLoggingContext(), e.query_length = t.length, e.is_finished = s, e
            }, n._getLoggingContext = function() {
                var e = "spectrum_tokenizer";
                return null != n.props.context && (e += "_" + n.props.context), e
            }, n.state = {
                typeaheadTokens: [],
                typeaheadSuggestions: []
            }, n.link_handler = new b.ProfileServicesLinkingHandler, n.profile_services = null, n.props.teamGroupInfo || n.props.showContactImport && n.props.user && (n.profile_services = b.LinkedProfileServices.get_linked_profile_services_for_user(n.props.user.id)), n
        }
        return n.__extends(t, e), t.prototype.getContacts = function() {
            var e = this.typeaheadInput.value;
            if ("" !== e) {
                var t = R.tokenizeAllRawInputs(e);
                this.validateAndAddTokens(t)
            }
            return this.state.typeaheadTokens
        }, t.prototype.focusTypeaheadInput = function() {
            A.findDOMNode(this.typeaheadInput).focus()
        }, t.prototype.addExternalContacts = function(e) {
            this.validateAndAddTokens(e)
        }, t.prototype.componentDidMount = function() {
            this.contactsDataSource = this.initContactsDataSource(this.props.user, this.filterContacts), this.props.shouldLogContactSearch && (this.contact_search_logger = new o.ContactSearchLogger(this._getLoggingContext(), this.contactsDataSource.searchModeName), this.unfinished_contact_search_queries = {}), this.props.initialTypeaheadTokens && this.props.initialTypeaheadTokens.length > 0 && this.validateAndAddTokens(this.props.initialTypeaheadTokens), this.props.focusOnMount && this.focusTypeaheadInput()
        }, t.prototype.componentDidUpdate = function(e, t) {
            this.contactsDataSource = this.initContactsDataSource(this.props.user, this.filterContacts), this.state.typeaheadSuggestions.length > 0 && this.state.typeaheadSuggestions[0] instanceof O && this.typeahead.setState({
                suggestionsListSelectedIndex: -1
            }), t.typeaheadTokens !== this.state.typeaheadTokens && this.updateRecipientData()
        }, t.prototype.render = function() {
            var e = this.props.isTeamSharedFolder ? F("Add groups:", {
                    comment: "Label for with whom to share"
                }) : F("To:", {
                    comment: "Label for with whom to share"
                }),
                t = F("This file type can only be shared with view access");
            return r.default.createElement(c.SharingModalContactsField, {
                contactsField: this.renderContactsField(),
                labelledAccessTypes: this.getAccessTypes(),
                onAccessTypeChange: this.handleAccessTypeChange,
                selectedAccessType: this.getSelectedAccessType(),
                toLabel: e,
                showNoEditTooltip: this.props.contentInfo.isFile() && !this.props.canInviteEditor,
                noEditText: t
            })
        }, t.prototype.initContactsDataSource = function(e, t) {
            return new h.ContactsDataSourceV2(e, t, !1)
        }, t.prototype.getAccessTypes = function() {
            var e = [],
                t = function(e) {
                    return F("change permission for users to %(label)s").format({
                        label: e
                    })
                },
                n = E.ACCESS_NAME,
                r = this.props.contentInfo && this.props.contentInfo.isFolder() ? E.MEMBER_ACTION_FOLDER : this.props.actionHandler.getSharingInfo().isCloudDoc() ? E.MEMBER_ACTION_CLOUD_DOC : E.MEMBER_ACTION_FILE;
            return this.props.canInviteEditor && e.push({
                apiId: u.ACCESS_LEVEL.WRITER,
                ariaLabel: t(u.ACCESS_LEVEL.WRITER),
                label: n[u.ACCESS_LEVEL.WRITER],
                details: r[S.MEMBER_ACTION.MAKE_EDITOR]
            }), this.props.canInviteViewer && e.push({
                apiId: u.ACCESS_LEVEL.READER,
                ariaLabel: t(u.ACCESS_LEVEL.READER),
                label: n[u.ACCESS_LEVEL.READER],
                details: r[S.MEMBER_ACTION.MAKE_VIEWER]
            }), e
        }, t.prototype.getSelectedAccessType = function() {
            for (var e, t = this.props.actionHandler.getSharingInfo(), n = this.getAccessTypes(), r = 0, s = n; r < s.length; r++) {
                var i = s[r];
                i.apiId === t.recipientAccess() && (e = i)
            }
            return e
        }, t.prototype.renderContactsField = function() {
            return r.default.createElement(a.Typeahead, {
                ref: this.setTypeaheadRef,
                height: 160,
                inputProps: {
                    ref: this.setTypeaheadInputRef,
                    placeholder: this.props.typeaheadPlaceholder
                },
                listItemHeight: 48,
                onChange: this.handleTypeaheadOnChange,
                onRemoveToken: this.handleTypeaheadRemoveToken,
                onSelect: this.handleTypeaheadSelect,
                renderSuggestion: this.renderTypeaheadSuggestion,
                renderTokenContent: this.renderTypeaheadTokenContent,
                suggestions: this.state.typeaheadSuggestions,
                suggestionsBuffer: 0,
                tokens: this.createTypeaheadTokenObjects()
            })
        }, t.prototype.getVariantForTypeaheadToken = function(e) {
            var t = v.validateContact(e, this.props.user, this.props.ownerTeam, this.props.actionHandler.getSharingInfo().folderPolicy(), this.props.isTeamSharedFolder, this.props.isFolderInsideTeamFolderTree, this.props.memberCountWithRecipients);
            return "invalid" === t.state ? "error" : "warn" === t.state ? "warning" : "default"
        }, t.prototype.createTypeaheadTokenObjects = function() {
            var e = this;
            return this.state.typeaheadTokens.map(function(t) {
                return {
                    key: t.getKey(),
                    variant: e.getVariantForTypeaheadToken(t),
                    content: t
                }
            })
        }, t.prototype.showSuggestions = function(e) {
            var t = this,
                n = function(e) {
                    if (!e) return [];
                    var n = t.state.typeaheadTokens.map(function(e) {
                        return e.getKey()
                    });
                    return e.filter(function(e) {
                        return !n.includes(e.getKey())
                    })
                },
                r = [],
                s = function(s) {
                    r.push.apply(r, n(s)), t.setSuggestions(r), t._logSearchComplete(e, (null != s ? s.length : void 0) || 0, !0)
                },
                i = function(s) {
                    var i = n(s);
                    e === t.typeaheadInput.value && i.length > 0 && (r[r.length - 1] instanceof O ? r.push.apply(r, i.concat(r.pop())) : r.push.apply(r, i), t.setState({
                        typeaheadSuggestions: r
                    })), t._logSearchComplete(e, s.length, !1)
                };
            this.contactsDataSource.search(e, s, i)
        }, t.prototype.setSuggestions = function(e) {
            var t = e;
            this.props.teamGroupInfo ? t.push(m.default.teamGroupInfoToContact(this.props.teamGroupInfo)) : this.props.showContactImport && t.push(new O), this.setState({
                typeaheadSuggestions: t
            })
        }, t.prototype.validateAndAddTokens = function(e) {
            var t = this,
                n = e.reduce(function(e, t) {
                    return t.pending && t.query && e.push(t.query), e
                }, []),
                r = function(n) {
                    for (var r = [], s = t.state.typeaheadTokens.map(function(e) {
                            return e.getKey()
                        }), i = 0, a = e; i < a.length; i++) {
                        var o = a[i],
                            l = o;
                        if (l.pending && l.query) {
                            var c = t.contactsDataSource.normalizeQuery(l.query),
                                d = t.determineQueryMatch(c, n[c]);
                            d && (l = d)
                        }
                        var u = l.getKey();
                        s.includes(u) || (s.push(u), r.push(l))
                    }
                    t.setState({
                        typeaheadTokens: t.state.typeaheadTokens.concat(r)
                    })
                };
            return this.contactsDataSource.searchBatch(n, r, r)
        }, t.prototype.determineQueryMatch = function(e, t) {
            if (!t || !e) return null;
            for (var n = {
                    email: [],
                    name: []
                }, r = 0, s = t; r < s.length; r++) {
                var i = s[r],
                    a = i.email ? this.contactsDataSource.normalizeQuery(i.email) : null,
                    o = i.name ? this.contactsDataSource.normalizeQuery(i.name) : null;
                e === a ? n.email.push(i) : e === o && n.name.push(i)
            }
            for (var l = 0, c = ["email", "name"]; l < c.length; l++) {
                var d = c[l];
                if (1 === n[d].length) return n[d][0]
            }
            return null
        }, t.defaultProps = {
            shouldLogContactSearch: !1
        }, t
    })(r.default.Component);
    t.ShareModalContactsSection = x;
    var U = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.show_contact_import_spinner = function(e) {
                if (n.props.import.provider === e.provider) return n.setState({
                    showLoading: !0
                })
            }, n.state = {
                showLoading: !1
            }, n
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            return this.authCompleteListenerToken = y.addAuthCompleteListener(this.show_contact_import_spinner)
        }, t.prototype.componentWillUnmount = function() {
            return y.removeAuthCompleteListener(this.authCompleteListenerToken)
        }, t.prototype.render = function() {
            var e = this.props.import,
                t = e.provider,
                n = e.connected,
                s = M.default.to_img_legacy(t),
                i = M.default.to_name(t);
            !n && this.state.showLoading && (i = F("Importing %(service_name)s Contacts").format({
                service_name: i
            }));
            var a = n ? F("Connected") : "";
            return r.default.createElement("div", {
                className: "typeahead-option"
            }, r.default.createElement(f.Flag, {
                leftAttachment: (function() {
                    return r.default.createElement(g.Image, {
                        className: "u-pad-right-s",
                        src: I.static_url(s[0]),
                        srcHiRes: I.static_url(s[1])
                    })
                })()
            }, r.default.createElement("div", {
                className: "option-primary"
            }, i), r.default.createElement("div", {
                className: "option-secondary u-font-meta"
            }, a)))
        }, t.displayName = "ThirdPartyImportOption", t
    })(r.default.PureComponent)
}), define("modules/clean/sharing/views/share_modal_footer_link_section", ["require", "exports", "tslib", "react", "modules/core/i18n", "external/classnames", "spectrum/button", "modules/clean/sharing/views/righteous_modal_link_info", "spectrum-sharing/components/sharing_modal_footer_link_list", "modules/clean/sharing/views/constants"], function(e, t, n, r, s, i, a, o, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s), i = n.__importDefault(i);
    var d = s.i18n_default_project("sharing")._,
        u = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onClickButtonLinkSettings = function() {
                    t.props.mode === c.MODES.LINK_ONLY ? t.props.actionHandler.handleLinkSettingsClick() : t.props.onLinkSettingsClick()
                }, t
            }
            return n.__extends(t, e), t.prototype.renderSharedLinks = function() {
                var e = this.props.actionHandler && this.props.actionHandler.getSharingInfo();
                if (e.isCloudDoc()) {
                    var t = void 0,
                        n = void 0;
                    return e && e.sharedLinks() && (t = e.editRighteousLink(), n = e.viewRighteousLink()), [this.renderModalLinkInfo(t, "editor"), this.renderModalLinkInfo(n, "viewer")]
                }
                var r = e.sharedLinks()[0];
                return this.renderModalLinkInfo(r, "viewer")
            }, t.prototype.renderModalLinkInfo = function(e, t) {
                return r.default.createElement(o.RighteousModalLinkInfo, {
                    key: t,
                    actionHandler: this.props.actionHandler,
                    contentInfo: this.props.contentInfo,
                    linkMetadata: e,
                    linkAccessLevel: t,
                    mode: this.props.mode,
                    user: this.props.user,
                    onLinkSettingsClick: this.props.onLinkSettingsClick,
                    isLinkMetadataLoaded: this.props.isLinkMetadataLoaded,
                    isTeamSharedFolder: this.props.isTeamSharedFolder,
                    canShareLink: this.props.canShareLink,
                    permissions: this.props.permissions
                })
            }, t.prototype.renderActions = function() {
                var e = this.props.actionHandler && this.props.actionHandler.getSharingInfo();
                if (e.sharedLinks() && e.sharedLinks().length > 0 && (!e.isCloudDoc() || e.permissionsObj().canCreateEditLink() || e.permissionsObj().canCreateViewLink())) return r.default.createElement(a.Button, {
                    variant: "borderless",
                    onClick: this.onClickButtonLinkSettings
                }, d("Link settings"))
            }, t.prototype.render = function() {
                var e = this;
                return r.default.createElement("div", {
                    className: "unified-share-modal-two-link-model"
                }, (function() {
                    return e.props.isLinkMetadataLoaded ? r.default.createElement(l.SharingModalFooterLinkList, {
                        className: i.default({
                            "scl-sharing-modal-footer-link-list--no-border": e.props.mode === c.MODES.LINK_ONLY
                        }),
                        title: d("Share a link instead"),
                        actions: e.renderActions()
                    }, e.renderSharedLinks()) : void 0
                })())
            }, t
        })(r.default.Component);
    t.ShareModalFooterLinkSection = u
}), define("modules/clean/sharing/views/share_modal_footer_section", ["require", "exports", "tslib", "react", "external/lodash", "modules/clean/sharing/ui_util", "modules/clean/sharing/views/constants", "spectrum-sharing/components/sharing_modal_footer_inband", "modules/core/i18n"], function(e, t, n, r, s, i, a, o, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s), l = n.__importStar(l);
    var c = l.i18n_default_project("sharing")._,
        d = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.isInbandFooterDisabled = function() {
                return this.props.isTokenizerEmpty || this.props.contactsError && this.props.contactsError.level === i.ContactsErrorLevel.Error || !!this.props.contentNameMessage
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.mode,
                    n = e.children;
                switch (t) {
                    case a.MODES.SHARE:
                        return r.default.createElement(o.SharingModalFooterInband, {
                            isButtonShareDisabled: this.isInbandFooterDisabled(),
                            textButtonShare: c(this.props.isTeamSharedFolder ? "Add" : "Share"),
                            onClickButtonShare: this.props.onShareButtonClick
                        }, n);
                    case a.MODES.SHARE_SENDING:
                        return r.default.createElement(o.SharingModalFooterInband, {
                            isButtonShareDisabled: !0,
                            textButtonShare: c(this.props.isTeamSharedFolder ? "Adding..." : "Sharing..."),
                            onClickButtonShare: s.noop
                        }, n);
                    case a.MODES.MEMBERSHIP:
                        return this.props.isInContentManager && !this.props.contentInfo.pathExists() ? r.default.createElement(o.SharingModalFooterInband, {
                            isButtonShareDisabled: !1,
                            textButtonShare: c(this.props.isTeamSharedFolder ? "Add" : "Share"),
                            onClickButtonShare: this.props.onShareButtonClick
                        }) : null;
                    default:
                        return null
                }
            }, t
        })(r.default.PureComponent);
    t.ShareModalFooterSection = d
}), define("modules/clean/sharing/views/share_modal_header_section", ["require", "exports", "tslib", "external/classnames", "react", "react-dom", "spectrum-sharing/components/sharing_modal_header", "modules/clean/react/bubble", "modules/clean/sharing/views/constants", "modules/clean/em_string", "modules/core/i18n", "modules/clean/react/icon/folder_icon", "modules/clean/sharing/share_modal_icon", "modules/clean/sharing/constants"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importStar(i), o = n.__importDefault(o), d = n.__importStar(d);
    var h = d.i18n_default_project("sharing"),
        _ = h._,
        f = h.ungettext,
        g = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleContentNameFocus = function() {
                    t.props.actionHandler.handleContentNameFocusChange(!0)
                }, t.handleContentNameBlur = function() {
                    t.props.actionHandler.handleContentNameFocusChange(!1)
                }, t.setHeaderInputRef = function(e) {
                    t.headerInput = e
                }, t
            }
            return n.__extends(t, e), t.prototype.selectContentNameInput = function() {
                this.headerInput && i.findDOMNode(this.headerInput.input).select()
            }, t.prototype.render = function() {
                return this.props.isCreatingNewFolder && !this.props.initialContentName ? s.default.createElement(a.SharingModalHeaderInput, {
                    inputAutoFocus: !0,
                    ref: this.setHeaderInputRef,
                    icon: s.default.createElement(u.SharedFolderIcon, null),
                    inputAriaLabel: this.props.contentNameMessage,
                    inputPlaceholder: this.props.isContentNameFocused ? void 0 : _("Folder name"),
                    onClickCloseButton: this.props.onModalCloseClick,
                    onInputChange: this.props.onContentNameInputChange,
                    onInputFocus: this.handleContentNameFocus,
                    onInputBlur: this.handleContentNameBlur,
                    onInputKeyUp: this.props.onContentNameInputKeyUp
                }, this.shouldShowContentNameBubble() && this.renderContentNameBubble()) : s.default.createElement(a.SharingModalHeaderTitle, {
                    closeButtonVisible: !0,
                    icon: this.getIcon(),
                    subTitle: this.props.subTitle || this.getMemberCountsString(),
                    onClickCloseButton: this.props.onModalCloseClick,
                    onClickSettingsButton: this.props.onSettingsButtonClick,
                    settingsButtonVisible: this.props.isMetadataLoaded && this.isContentSettingsEnabled(),
                    title: this.getHeaderTitle()
                })
            }, t.prototype.getHeaderTitle = function() {
                return this.props.initialContentName ? this.props.initialContentName : c.Emstring.em_snippet(this.props.sharingInfo.name(), m.SNIPPET_SIZES.FILENAME)
            }, t.prototype.isContentNameInputError = function() {
                return this.props.contentNameMessageLevel === l.CONTENT_NAME_MESSAGE_LEVELS.ERROR
            }, t.prototype.shouldShowContentNameBubble = function() {
                return this.props.contentNameMessage && (this.props.isContentNameFocused || this.isContentNameInputError())
            }, t.prototype.renderContentNameBubble = function() {
                return s.default.createElement(o.default, {
                    arrow: o.default.ARROW.TOP,
                    className: r.default("unified-share-modal__content-name__tooltip", "u-pad-xs", "u-font-strong", {
                        "unified-share-modal__content-name__tooltip-error": this.isContentNameInputError()
                    })
                }, this.props.contentNameMessage)
            }, t.prototype.getIcon = function() {
                var e = this.props.contentInfo;
                if (e.isFolder()) {
                    if (!e.extras.exists) return s.default.createElement(u.SharedFolderIcon, null);
                    if (!this.props.isMetadataLoaded) return s.default.createElement(u.SimpleFolderIcon, null)
                }
                return s.default.createElement(p.ShareModalIcon, {
                    alt: "",
                    className: "unified-share-modal__title-icon",
                    filename: this.props.sharingInfo.name(),
                    isSharedFolder: e.isSharedFolder(),
                    isFolder: e.isFolder(),
                    isTeamSharedFolder: this.props.isTeamSharedFolder,
                    isFolderInsideTeamFolderTree: this.props.isFolderInsideTeamFolderTree === !0,
                    isViewOnly: !this.props.canEdit,
                    isConfidentialFolder: this.props.isInContentManager && this.props.isConfidentialFolder,
                    pathExists: e.pathExists()
                })
            }, t.prototype.getOutsideTeamString = function() {
                var e = this.props.sharingInfo,
                    t = e.memberCounts();
                if (e.hasOutsideTeamMembers()) return f("%(outside_team_count)s outside your Dropbox team", "%(outside_team_count)s outside your Dropbox team", t.users_outside_team).format({
                    outside_team_count: t.users_outside_team
                })
            }, t.prototype.getMemberCountsString = function() {
                var e = this.props.sharingInfo.memberNum();
                if (e && !this.props.isSendingForSignature) {
                    var t = this.props.sharingInfo.memberCounts(),
                        n = this.getOutsideTeamString(),
                        r = t && t.exceeds_count;
                    return (n ? f("%(member_num)s member (%(outside_team_string)s)", "%(member_num)s members (%(outside_team_string)s)", e, {
                        comment: 'Description of the count of total folder members and count of outside-of-team folder members, like "10 members (3 outside of your Dropbox team)"'
                    }) : f("%(member_num)s member", "%(member_num)s members", e)).format({
                        member_num: e + (r ? "+" : ""),
                        outside_team_string: n
                    })
                }
            }, t.prototype.isContentSettingsEnabled = function() {
                return this.props.contentInfo.isFolder() && this.props.contentInfo.pathExists() || this.props.contentInfo.isFile() && this.props.showPassFileSettings
            }, t
        })(s.default.Component);
    t.ShareModalHeaderSection = g
}), define("modules/clean/sharing/views/share_modal_pointer_mode", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/clipboard_v2", "modules/clean/sharing/ui_util", "modules/clean/sharing/ui_notifications_util", "spectrum/icon_content", "spectrum-sharing/components/sharing_modal_header", "spectrum-sharing/components/sharing_modal_footer_link"], function(e, t, n, r, s, i, a, o, l, c, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s);
    var u = s.i18n_default_project("sharing")._,
        p = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleCopyLinkClicked = function() {
                    t.urlInput.focus(), t.urlInput.select(), t.clipboard.do_copy(), t.logCopyEvent()
                }, t.setTextInputRef = function(e) {
                    return t.urlInput = e, e
                }, t
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                this.setupCopy()
            }, t.prototype.componentDidUpdate = function() {
                this.setupCopy()
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    n = e.sharingInfo,
                    s = e.onClickCloseButton;
                return r.default.createElement("div", {
                    className: t
                }, r.default.createElement(c.SharingModalHeaderTitle, {
                    closeButtonVisible: !0,
                    icon: r.default.createElement(l.IconContent, {
                        name: "dlink-small"
                    }),
                    onClickCloseButton: s,
                    title: n.name()
                }), r.default.createElement(d.SharingModalFooterLinkCopy, {
                    labelSharedLinkUrl: u("Shared link URL"),
                    isIconHidden: !0,
                    inputProps: {
                        autoFocus: !1
                    },
                    onClickButton: this.handleCopyLinkClicked,
                    sharedLinkUrl: this.getLinkUrl(),
                    textButton: u("Copy link"),
                    textInputRef: this.setTextInputRef
                }))
            }, t.prototype.getLinkUrl = function() {
                return this.props.sharingInfo.isLinkMetadataLoaded() ? this.props.sharingInfo.sharedLinks()[0].url : ""
            }, t.prototype.setupCopy = function() {
                if (this.props.sharingInfo.isLinkMetadataLoaded()) {
                    this.clipboard = new i.ClipboardV2(this.getLinkUrl(), function() {
                        return o.sharingNotificationSuccess(u("Link copied to clipboard"))
                    }, function() {
                        return o.sharingNotificationError(u("Unable to copy the link, please copy manually"))
                    }, this.handleCopyLinkClicked);
                    var e = document.querySelector(".scl-sharing-modal-footer-link__actions .mc-button"),
                        t = document.querySelector(".scl-sharing-modal-footer-link__actions");
                    this.clipboard.setupCopy(e, t)
                }
            }, t.prototype.logCopyEvent = function() {
                var e = this.props.sharingInfo.user(),
                    t = this.props.sharingInfo.contentInfo(),
                    n = {
                        type: "pointer"
                    };
                a.logTiburonEvent(t, e.id, "COPY_SHARED_LINK", n)
            }, t
        })(r.default.Component);
    t.ShareModalPointerMode = p
}), define("modules/clean/sharing/views/sharing_settings_file_folder_policy_view", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/sharing/sharing_settings_util", "modules/clean/sharing/views/sharing_settings_policy_view", "modules/clean/sharing/sharing_settings_constants"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s);
    var l = s.i18n_default_project("sharing")._,
        c = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return this.renderPolicies()
            }, t.prototype.renderPolicies = function() {
                var e = this,
                    t = this.props.policies.map(function(t) {
                        var n = e.getPolicyDict(t);
                        return e.renderPolicy(t, n)
                    });
                return r.default.createElement("div", null, t)
            }, t.prototype.renderPolicy = function(e, t) {
                var n, r, s, a = this;
                n = i.getEffectivePolicyValue(e, this.props.policyUpdate, this.props.currentPolicy, this.props.showContentManagerBridge, this.props.teamPolicy, this.props.permissions), r = n[0], s = n[1];
                var l;
                if (t.type === o.DROPDOWN) {
                    var c = function(t) {
                            a.props.onPolicyUpdate(e, t)
                        },
                        d = Object.keys(t.optionsDict);
                    l = this.renderDropdown(e, r, t.optionsDict, d, c, !s)
                } else if (t.type === o.TOGGLE) {
                    var u = function(n, r) {
                        for (var s = 0, i = Object.keys(t.optionsDict); s < i.length; s++) {
                            var o = i[s];
                            t.optionsDict[o].value === n && a.props.onPolicyUpdate(e, o)
                        }
                    };
                    l = this.renderToggle(e, r, t.optionsDict, u, !s)
                }
                return this.renderPolicyRow(e, t, s, l)
            }, t.prototype.isTeamMemberFolder = function() {
                return !this.isTeamFolderTree() && this.props.ownerTeam
            }, t.prototype.isTeamFolderTree = function() {
                return this.props.isTeamSharedFolder || this.props.isFolderInsideTeamFolderTree
            }, t.prototype.getMemberPolicyQuestion = function() {
                return l(this.isTeamFolderTree() ? "Limit who can be added as a member of folders." : "Limit who can be added as a member of this folder.")
            }, t.prototype.getAclUpdatePolicyQuestion = function() {
                return l(this.isTeamFolderTree() ? "Choose who can add people to folders." : "Choose who can add people to this folder.")
            }, t.prototype.getViewerInfoPolicyDescription = function() {
                return l(this.props.ownerTeam ? this.props.isFolder ? "Show who viewed files in this folder to team members and people who can edit." : "Show who viewed this file to team members and people who can edit." : this.props.isFolder ? "Show who’s viewing files in this folder to people who can edit." : "Show who’s viewing this file to people who can edit.")
            }, t.prototype.getPolicyDict = function(e) {
                switch (e) {
                    case o.MEMBER_POLICY:
                        return {
                            title: l("Folder membership"),
                            description: this.getMemberPolicyQuestion(),
                            optionsDict: {
                                anyone: {
                                    label: l("Anyone")
                                },
                                team: {
                                    label: l("Only team members")
                                }
                            },
                            type: o.DROPDOWN
                        };
                    case o.ACL_UPDATE_POLICY:
                        return {
                            title: l("Manage access"),
                            description: this.getAclUpdatePolicyQuestion(),
                            optionsDict: {
                                editors: {
                                    label: l(this.isTeamFolderTree() || this.isTeamMemberFolder() ? "Team members who can edit" : "Folder members"),
                                    description: l(this.isTeamFolderTree() || this.isTeamMemberFolder() ? "Team members with edit access can add people." : "Members with edit access can add people.")
                                },
                                owner: {
                                    label: l(this.isTeamFolderTree() ? "Only Team Admins" : "Only you"),
                                    description: l(this.isTeamFolderTree() ? "Only Team Admins." : "Only you (the owner) can add people.")
                                }
                            },
                            type: o.DROPDOWN
                        };
                    case o.VIEWER_INFO_POLICY:
                        return {
                            title: l("Viewer info"),
                            description: this.getViewerInfoPolicyDescription(),
                            optionsDict: {
                                enabled: {
                                    label: l("On"),
                                    value: !0
                                },
                                disabled: {
                                    label: l("Off"),
                                    value: !1
                                }
                            },
                            type: o.TOGGLE
                        };
                    case o.FOLDER_LINK_AUDIENCE_POLICY:
                        if (!this.props.ownerTeam) throw new Error("Policy only valid for teams");
                        return {
                            title: l("Link restrictions"),
                            description: l("Prevent non-members from accessing this folder via link."),
                            optionsDict: {
                                members: {
                                    label: l("On"),
                                    value: !0
                                },
                                anyone: {
                                    label: l("Off"),
                                    value: !1
                                }
                            },
                            type: o.TOGGLE
                        };
                    default:
                        throw new Error("Policy name not found")
                }
            }, t
        })(a.SharingSettingsPolicyView);
    t.SharingSettingsFileFolderPolicyView = c
}), define("modules/clean/sharing/views/sharing_settings_link_policies", ["require", "exports", "tslib", "modules/core/i18n", "modules/clean/react/badge", "modules/clean/sharing/sharing_settings_constants"], function(e, t, n, r, s, i) {
    "use strict";

    function a(e, t, n) {
        var r = n ? s.BadgeVariant.PRO : void 0;
        switch (e) {
            case i.REQUESTED_VISIBILITY:
                return {
                    title: l("Who has access"),
                    badge: r,
                    description: (function() {
                        return l(t ? "Control who can view the folder with this link." : "Control who can view the file with this link.")
                    })(),
                    optionsDict: {
                        public: {
                            label: l("Anyone with link"),
                            description: (function() {
                                return l(t ? "Anyone with this link can view the folder." : "Anyone with this link can view the file.")
                            })()
                        },
                        team_only: {
                            label: l("Team members"),
                            description: (function() {
                                return l(t ? "Team members with this link can view the folder." : "Team members with this link can view the file.")
                            })()
                        },
                        password: {
                            label: l("People with password"),
                            description: (function() {
                                return l(t ? "Password protect this link for viewing the folder." : "Password protect this link for viewing the file.")
                            })()
                        }
                    },
                    type: i.DROPDOWN
                };
            case i.EXPIRES:
                return {
                    title: l("Expiration"),
                    badge: r,
                    description: l("Disable this link on a specific date."),
                    optionsDict: {
                        enabled: {
                            label: l("On"),
                            value: !0
                        },
                        disabled: {
                            label: l("Off"),
                            value: !1
                        }
                    },
                    type: i.TOGGLE
                };
            case i.ALLOW_DOWNLOAD:
                return {
                    title: l("Disable downloads"),
                    badge: r,
                    description: l("Prevent people with this link from downloading."),
                    descriptionLinkUrl: "/help/files-folders/set-link-permissions",
                    descriptionLinkText: l("Learn more"),
                    optionsDict: {
                        enabled: {
                            label: l("On"),
                            value: !0
                        },
                        disabled: {
                            label: l("Off"),
                            value: !1
                        }
                    },
                    type: i.TOGGLE
                };
            case i.COMMENTS:
                return {
                    title: l("Comments"),
                    description: (function() {
                        return l(t ? "Anyone with this link viewing the folder can comment." : "Anyone with this link viewing the file can comment.")
                    })(),
                    descriptionLinkUrl: "/help/desktop-web/commenting#comments",
                    descriptionLinkText: l("Learn more"),
                    optionsDict: {},
                    type: i.TEXT
                };
            default:
                throw new Error("Policy name not found")
        }
    }

    function o(e, t, n) {
        var r = n ? s.BadgeVariant.PRO : void 0;
        switch (e) {
            case i.REQUESTED_VISIBILITY:
                return {
                    title: l("Link access"),
                    badge: r,
                    description: (function() {
                        return l(t ? "Control who can access the folder via this link." : "Control who can access the file via this link.")
                    })(),
                    optionsDict: {
                        public: {
                            label: l("Anyone"),
                            description: (function() {
                                return l(t ? "Anyone with the link can access the folder." : "Anyone with the link can access the file.")
                            })()
                        },
                        team_only: {
                            label: l("Team members"),
                            description: (function() {
                                return l(t ? "Team members with the link can access the folder." : "Team members with the link can access the file.")
                            })()
                        },
                        password: {
                            label: l("Only people with the password"),
                            description: (function() {
                                return l(t ? "Set a password to limit access to the folder via link." : "Set a password to limit access to the file via link.")
                            })()
                        }
                    },
                    type: i.DROPDOWN
                };
            case i.EXPIRES:
                return {
                    title: l("Expiration"),
                    badge: r,
                    description: l("Disable the shared link on a specific date."),
                    optionsDict: {
                        enabled: {
                            label: l("On"),
                            value: !0
                        },
                        disabled: {
                            label: l("Off"),
                            value: !1
                        }
                    },
                    type: i.TOGGLE
                };
            case i.ALLOW_DOWNLOAD:
                return {
                    title: l("Disable downloads"),
                    badge: r,
                    description: l("Prevent people from downloading via link."),
                    descriptionLinkUrl: "/help/files-folders/set-link-permissions",
                    descriptionLinkText: l("Learn more"),
                    optionsDict: {
                        enabled: {
                            label: l("On"),
                            value: !0
                        },
                        disabled: {
                            label: l("Off"),
                            value: !1
                        }
                    },
                    type: i.TOGGLE
                };
            case i.COMMENTS:
                return {
                    title: l("Add comments"),
                    description: (function() {
                        return l(t ? "Anyone viewing the files in this folder via link can comment." : "Anyone viewing the file via link can comment.")
                    })(),
                    descriptionLinkUrl: "/help/desktop-web/commenting#comments",
                    descriptionLinkText: l("Learn more"),
                    optionsDict: {},
                    type: i.TEXT
                };
            default:
                throw new Error("Policy name not found")
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var l = r.i18n_default_project("sharing")._;
    t.getShmodelInMultipleLinksPolicyDict = a, t.getShmodelPolicyDict = o
}), define("modules/clean/sharing/views/sharing_settings_link_policy_view", ["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/sharing/constants", "spectrum/datepicker", "spectrum/input", "modules/clean/filepath", "modules/clean/datetime", "modules/clean/em_string", "modules/clean/sharing/sharing_settings_util", "modules/clean/sharing/views/sharing_settings_policy_view", "spectrum-sharing/components/sharing_modal_banner", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/sharing_settings_constants"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importStar(i), a = n.__importStar(a);
    var g = i.i18n_default_project("sharing")._,
        S = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.renderLinkVisibility = function() {
                    if (t.props.linkPolicy) {
                        var e, n = t.props.linkPolicy.requested_visibility,
                            r = t.props.linkMetadata.link_permissions,
                            i = r.visibility_policies.filter(function(e) {
                                return e.allowed
                            }),
                            a = r.visibility_policies[0].disallowed_reason;
                        i.length < 2 && (a === _.VisibilityDisallowedReason.restricted_by_shared_folder || a === _.VisibilityDisallowedReason.delete_and_recreate) && (e = s.default.createElement(h.SharingModalBanner, {
                            className: "sharing-settings-modal__banner",
                            type: "default",
                            message: t.renderRestrictedBySharedFolderVisibility()
                        }));
                        var o, l, c = n === _.RequestedVisibilityPolicy.password,
                            d = i.length > 1,
                            u = t.getPolicyDict(f.REQUESTED_VISIBILITY),
                            p = i.map(function(e) {
                                return e.policy
                            }),
                            m = function(e) {
                                t.handlePolicyUpdate(f.REQUESTED_VISIBILITY, e)
                            };
                        if (l = t.renderDropdown(f.REQUESTED_VISIBILITY, n || "", u.optionsDict, p, m, !d), o = l, c) {
                            var g = r.visibility_policies.filter(function(e) {
                                return e.allowed && e.policy === _.RequestedVisibilityPolicy.password
                            }).length > 0;
                            o = s.default.createElement("div", null, l, s.default.createElement("div", {
                                className: "u-pad-top-s"
                            }, t.renderPasswordInput(!g)))
                        }
                        return t.renderPolicyRow(f.REQUESTED_VISIBILITY, u, d, o, e)
                    }
                }, t.renderRestrictedBySharedFolderVisibility = function() {
                    var e = t.props.linkMetadata.link_permissions.resolved_visibility,
                        n = t.props.linkMetadata.link_permissions.visibility_policies[0].disallowed_reason;
                    return s.default.createElement("span", null, s.default.createElement("span", {
                        className: "shared-link-settings-modal__visibility-text"
                    }, (function() {
                        if (e === _.ResolvedVisibilityPolicy.shared_folder_only) {
                            var n = t.props.linkMetadata.link_permissions.restricting_shared_folder_path;
                            return n = u.Emstring.em_snippet(n, a.SNIPPET_SIZES.FILENAME), g("Only members of the shared folder “%(shared_folder_name)s” can view this link.").format({
                                shared_folder_name: n
                            })
                        }
                        return e === _.ResolvedVisibilityPolicy.only_you ? g("Only you can view this link.") : void 0
                    })()), " ", s.default.createElement("span", {
                        className: "shared-link-settings-modal__visibility-advice u-font-meta"
                    }, (function() {
                        return n === _.VisibilityDisallowedReason.restricted_by_shared_folder ? g("To change who can access the link, go to the shared folder options.") : n === _.VisibilityDisallowedReason.delete_and_recreate ? g("To change who can access the link, delete this link and create a new one.") : void 0
                    })()))
                }, t.renderExpire = function() {
                    if (t.props.linkPolicy) {
                        var e, n = t.props.linkMetadata.link_permissions.can_remove_expiry,
                            r = t.props.linkMetadata.link_permissions.can_set_expiry,
                            i = n && r,
                            a = t.getPolicyDict(f.EXPIRES),
                            o = null != t.props.linkPolicy.expires,
                            l = null != t.props.linkPolicy.expires ? "enabled" : "disabled",
                            c = t.renderToggle(f.EXPIRES, l, a.optionsDict, t.onExpireToggleChange, !i);
                        return e = c, o && (e = s.default.createElement("div", {
                            className: "policy-expire"
                        }, c, t.renderDatepickerInput())), t.renderPolicyRow(f.EXPIRES, a, i, e)
                    }
                }, t.onExpireToggleChange = function(e, n) {
                    if (t.props.linkPolicy)
                        if (e) {
                            var r = t.props.linkPolicy.expires;
                            t.props.linkPolicy.expires || (r = d.daysAfterToday(30)), t.handlePolicyUpdate("expires", r)
                        } else t.handlePolicyUpdate("expires", null)
                }, t.renderDownload = function() {
                    if (t.props.linkPolicy) {
                        var e = t.props.linkMetadata.link_permissions;
                        if (!e.canChangeDownload()) return s.default.createElement("div", null);
                        var n, r = p.shouldRenderNoPreviewFileWarning(!t.props.isFolder, t.props.linkMetadata),
                            i = e.can_disallow_download,
                            a = i && !r,
                            o = t.props.linkPolicy.allow_download ? "disabled" : "enabled",
                            l = t.getPolicyDict(f.ALLOW_DOWNLOAD),
                            d = function(e, n) {
                                t.handlePolicyUpdate("allow_download", !e)
                            },
                            u = t.renderToggle(f.ALLOW_DOWNLOAD, o, l.optionsDict, d, !a);
                        if (r) {
                            var m = c.file_extension(t.props.linkMetadata.name),
                                _ = m.toUpperCase();
                            n = s.default.createElement(h.SharingModalBanner, {
                                className: "sharing-settings-modal__banner",
                                type: "default",
                                message: g("%(file_extension)s files can’t be previewed. Downloads must be enabled to share.", {
                                    comment: 'as in "People can’t view this .PDF file'
                                }).format({
                                    file_extension: "." + _
                                })
                            })
                        }
                        return t.renderPolicyRow(f.ALLOW_DOWNLOAD, l, a, u, n)
                    }
                }, t.renderComments = function() {
                    var e = t.props.linkMetadata.link_permissions.team_restricts_comments,
                        n = t.getPolicyDict(f.COMMENTS),
                        r = t.renderPolicyRow(f.COMMENTS, n, !e);
                    return e && (r = s.default.createElement("div", null)), r
                }, t.onDatepickerInputChange = function(e) {
                    t.handlePolicyUpdate("expires", e)
                }, t.renderDatepickerInput = function() {
                    return s.default.createElement(o.DatepickerInput, {
                        disabledDays: t.getDisabledDays(),
                        selectedDay: t.props.linkPolicy.expires,
                        onDayClick: t.onDatepickerInputChange,
                        placeholder: g("mm/dd/yyyy")
                    })
                }, t.onPasswordInputChange = function(e) {
                    t.handlePolicyUpdate(e.target.name, e.target.value)
                }, t.handlePolicyUpdate = function(e, n) {
                    "expires" === e && n instanceof Date && null != n && (n.setHours(23), n.setMinutes(59), n.setSeconds(59));
                    var r = t.props.linkPolicy.set(e, n);
                    t.props.onPolicyUpdate(t.props.linkMetadata, r)
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return s.default.createElement("div", null, this.renderLinkVisibility(), this.renderExpire(), this.renderDownload(), this.renderComments())
            }, t.prototype.getPolicyDict = function(e) {
                return this.props.getPolicyDict(e, this.props.isFolder, this.props.inPlusToProTrials)
            }, t.prototype.getDisabledDays = function() {
                var e = Date.now();
                return {
                    before: new Date(e)
                }
            }, t.prototype.renderPasswordInput = function(e) {
                return s.default.createElement("label", {
                    className: r.default({
                        "u-font-meta": e
                    }),
                    key: "visibility-label"
                }, s.default.createElement(l.Input, {
                    autoFocus: !0,
                    className: "password-input__input",
                    disabled: e,
                    name: "link_password",
                    onChange: this.onPasswordInputChange,
                    placeholder: g("Set password"),
                    type: "password",
                    variant: this.props.linkPolicy.link_password ? "default" : "invalid",
                    value: null != this.props.linkPolicy.link_password ? this.props.linkPolicy.link_password : "123456"
                }))
            }, t
        })(m.SharingSettingsPolicyView);
    t.SharingSettingsLinkPolicyView = S
}), define("modules/clean/sharing/views/sharing_settings_links_section", ["require", "exports", "tslib", "react", "spectrum/button", "spectrum-sharing/components/card", "modules/clean/sharing/views/sharing_settings_link_policy_view", "modules/clean/sharing/views/sharing_settings_righteous_link_policy_view", "modules/clean/sharing/sharing_settings_util", "modules/clean/sharing/delete_link_modal", "modules/clean/sharing/views/righteous_modal_link_info", "modules/clean/sharing/views/sharing_settings_link_policies", "modules/core/i18n"], function(e, t, n, r, s, i, a, o, l, c, d, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), p = n.__importStar(p);
    var m = p.i18n_default_project("sharing")._,
        h = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleClickDeleteLink = function(e) {
                    c.deleteLinkWithConfirm({
                        client: t.props.client,
                        url: e.url,
                        contentName: e.name,
                        onDeleteLink: function() {
                            t.props.onDeleteLink(e)
                        }
                    })
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = [];
                if (this.props.sharingInfo.isCloudDoc()) {
                    var t = this.props.sharingInfo.editRighteousLink(),
                        n = this.props.sharingInfo.viewRighteousLink();
                    e.push(this.renderLinkPolicy("editor", t)), e.push(this.renderLinkPolicy("viewer", n))
                } else {
                    var s = this.props.sharingInfo.sharedLinks()[0];
                    e.push(this.renderLinkPolicy("viewer", s))
                }
                return r.default.createElement("div", {
                    className: "scl-sharing-settings-links-section"
                }, e)
            }, t.prototype.renderLinkPolicy = function(e, t) {
                if (!t) return this.renderEmptyLinkPolicy(e);
                var n, s = this.props.updatedLinkPolicies[t.url],
                    c = l.getLinkPolicy(t);
                return n = t.isRighteousLink() ? r.default.createElement(o.SharingSettingsRighteousLinkPolicyView, {
                    isInRighteousLinkSettings: this.props.sharingPrefs.in_righteous_link_settings,
                    linkPolicy: s || c,
                    linkMetadata: t,
                    onPolicyUpdate: this.props.onPolicyUpdate
                }) : r.default.createElement(a.SharingSettingsLinkPolicyView, {
                    linkPolicy: s || c,
                    linkMetadata: t,
                    isFolder: t.isFolder(),
                    inPlusToProTrials: this.props.inPlusToProTrials,
                    onPolicyUpdate: this.props.onPolicyUpdate,
                    getPolicyDict: u.getShmodelInMultipleLinksPolicyDict
                }), r.default.createElement(i.Card, {
                    key: t.url || e,
                    icon: d.getSpectrumLinkIcon(e),
                    title: this.renderTitle(e),
                    actions: this.renderLinkActions(t)
                }, n)
            }, t.prototype.renderLinkActions = function(e) {
                return r.default.createElement(_, {
                    linkMetadata: e,
                    onClickDeleteLink: this.handleClickDeleteLink
                })
            }, t.prototype.canCreateLink = function(e) {
                return this.props.sharingInfo.isCloudDoc() && "editor" === e ? this.props.sharingInfo.permissionsObj().canCreateEditLink() : this.props.sharingInfo.permissionsObj().canCreateViewLink()
            }, t.prototype.renderEmptyLinkPolicy = function(e) {
                return r.default.createElement(i.Card, {
                    key: e,
                    icon: d.getSpectrumLinkIcon(e),
                    title: this.renderTitle(e)
                }, r.default.createElement("div", {
                    className: "sharing-settings-modal__link-policy"
                }, r.default.createElement("div", {
                    className: "sharing-settings-modal__link-policy-text"
                }, m(this.canCreateLink(e) ? "No link created yet." : "Link not available."))))
            }, t.prototype.renderTitle = function(e) {
                return m("editor" === e ? "Link for editing" : "Link for viewing")
            }, t
        })(r.default.Component);
    t.SharingSettingsLinksSection = h;
    var _ = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleClickDelete = function(e) {
                e.preventDefault(), t.props.onClickDeleteLink(t.props.linkMetadata)
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            return this.canDeleteLink() ? r.default.createElement(s.Button, {
                variant: "borderless",
                onClick: this.handleClickDelete
            }, m("Delete link")) : null
        }, t.prototype.canDeleteLink = function() {
            return this.props.linkMetadata.link_permissions.can_revoke
        }, t
    })(r.default.Component);
    t.SharingSettingsLinkActions = _
}), define("modules/clean/sharing/views/sharing_settings_policy_view", ["require", "exports", "tslib", "react", "spectrum/toggle", "spectrum-sharing/components/sharing_modal_settings_row", "modules/clean/sharing/sharing_settings_dropdown", "modules/clean/react/badge"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var l = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.sharingModalSettingsRowLinkClicked = function(e) {
                window.open(e, "_blank")
            }, n.renderPolicyRow = function(e, t, s, a, l) {
                var c = r.default.createElement("span", null, t.title, t.badge ? r.default.createElement(o.Badge, {
                    variant: t.badge,
                    color: o.BadgeColor.PINK
                }) : void 0);
                return r.default.createElement(i.SharingModalSettingsRow, {
                    policyFieldName: e,
                    key: t.title,
                    displayName: c,
                    displayNameTitle: t.title,
                    description: t.description,
                    descriptionLinkUrl: t.descriptionLinkUrl,
                    descriptionLinkText: t.descriptionLinkText,
                    descriptionLinkOnClicked: n.sharingModalSettingsRowLinkClicked,
                    rightSideElement: a,
                    bottomElement: l
                })
            }, n
        }
        return n.__extends(t, e), t.prototype.renderDropdown = function(e, t, n, s, i, o) {
            return r.default.createElement(a.SettingDropdown, {
                currentValue: t,
                valuesList: s,
                optionsDict: n,
                onValueSelected: i,
                disabled: o
            })
        }, t.prototype.renderToggle = function(e, t, n, i, a) {
            var o = a ? function(e, t) {} : i;
            return r.default.createElement(s.Toggle, {
                ariaLabel: "toggle",
                className: "sharing-settings-modal__toggle",
                labelContent: n[t].label,
                checked: n[t].value,
                interactive: !a,
                disabled: a,
                onCheckedChange: o
            })
        }, t
    })(r.default.Component);
    t.SharingSettingsPolicyView = l
}), define("modules/clean/sharing/views/sharing_settings_righteous_link_policy_view", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/sharing/views/sharing_settings_policy_view", "modules/clean/sharing/sharing_settings_constants"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s);
    var o = s.i18n_default_project("sharing")._,
        l = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.renderAudience = function() {
                    var e = t.props.linkMetadata.link_permissions,
                        n = t.props.linkPolicy.audience,
                        r = t.getPolicyDict(a.AUDIENCE),
                        s = e.audience_options.filter(function(e) {
                            return e.allowed
                        }).map(function(e) {
                            return e.audience
                        }),
                        i = s.length > 1,
                        o = function(e) {
                            t.handlePolicyUpdate(a.AUDIENCE, e)
                        },
                        l = t.renderDropdown(a.AUDIENCE, n || "", r.optionsDict, s, o, !i);
                    return t.renderPolicyRow(a.AUDIENCE, r, i, l)
                }, t.renderDownload = function() {
                    var e = t.props.linkMetadata.link_permissions;
                    if (!e.canChangeDownload()) return r.default.createElement("div", null);
                    var n = t.props.linkPolicy.allow_download ? "disabled" : "enabled",
                        s = t.getPolicyDict(a.ALLOW_DOWNLOAD),
                        i = function(e, n) {
                            t.handlePolicyUpdate(a.ALLOW_DOWNLOAD, !e)
                        },
                        o = t.renderToggle(a.ALLOW_DOWNLOAD, n, s.optionsDict, i, !e.can_disallow_download);
                    return t.renderPolicyRow(a.ALLOW_DOWNLOAD, s, !0, o)
                }, t.handlePolicyUpdate = function(e, n) {
                    var r = t.props.linkPolicy.set(e, n);
                    t.props.onPolicyUpdate(t.props.linkMetadata, r)
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return r.default.createElement("div", null, this.renderAudience(), this.props.isInRighteousLinkSettings && this.renderDownload())
            }, t.prototype.getPolicyDict = function(e) {
                var t = this.props.linkMetadata.link_permissions,
                    n = "editor" === t.link_access_level;
                switch (e) {
                    case a.AUDIENCE:
                        return {
                            title: o("Who has access"),
                            description: (function() {
                                return o(n ? "Control who can edit the file with this link." : "Control who can view the file with this link.")
                            })(),
                            optionsDict: {
                                public: {
                                    label: o("Anyone with link"),
                                    description: (function() {
                                        return o(n ? "Anyone with this link can edit the file." : "Anyone with this link can view the file.")
                                    })()
                                },
                                team: {
                                    label: o("Team members"),
                                    description: (function() {
                                        return o(n ? "Team members with this link can edit the file." : "Team members with this link can view the file.")
                                    })()
                                },
                                no_one: {
                                    label: o("No one"),
                                    description: o("The link is off and does not grant additional access to anyone.")
                                }
                            },
                            type: a.DROPDOWN
                        };
                    case a.ALLOW_DOWNLOAD:
                        return {
                            title: o("Disable downloads"),
                            description: o("Prevent people with this link from downloading."),
                            descriptionLinkUrl: "/help/files-folders/set-link-permissions",
                            descriptionLinkText: o("Learn more"),
                            optionsDict: {
                                enabled: {
                                    label: o("On"),
                                    value: !0
                                },
                                disabled: {
                                    label: o("Off"),
                                    value: !1
                                }
                            },
                            type: a.TOGGLE
                        };
                    default:
                        throw new Error("Policy name not found")
                }
            }, t
        })(i.SharingSettingsPolicyView);
    t.SharingSettingsRighteousLinkPolicyView = l
}), define("modules/clean/sharing/views/viewer_info", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e(e) {
            e.when_last_seen && (this.time_last_seen = new Date(1e3 * e.when_last_seen));
            var t = e.seen_state_user;
            this.account_id = t.user_id, this.display_name = t.display_name, this.email = t.email, this.photo_circle_url = t.photo_circle_url, this.same_team = !0
        }
        return e.prototype.displayName = function() {
            return this.display_name
        }, e.prototype.memberId = function() {
            return this.account_id
        }, e
    })();
    t.ViewerInfo = n
}), define("modules/clean/sharing/views/wrapped_group_viewers_maker", ["require", "exports", "tslib", "react", "modules/clean/datetime", "modules/clean/em_string", "modules/clean/react/title_bubble", "modules/clean/sharing/constants", "modules/core/i18n"], function(e, t, n, r, s, i, a, o, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), l = n.__importStar(l);
    var c = l.i18n_default_project("sharing"),
        d = c._,
        u = c.ungettext;
    (function(e) {
        function t(e, t) {
            for (var s = u("%(num_viewers)d viewer", "%(num_viewers)d viewers", e.length).format({
                    num_viewers: e.length
                }), i = e.length <= 10, o = i ? e.length : 9, l = n(e[0], t), c = 1; c < o; c++) l = l.concat(n(e[c], t));
            if (!i) {
                var d = e.length - o,
                    p = u("and %(num_others)d other", "and %(num_others)d others", d).format({
                        num_others: d
                    });
                l = l.concat(r.default.createElement("tr", null, r.default.createElement("td", {
                    className: "group-tooltip__viewers-table-cell group-tooltip__member-name"
                }, p)))
            }
            return {
                element: r.default.createElement(a.TitleBubble, {
                    content: r.default.createElement("table", {
                        className: "group-tooltip__viewers-table"
                    }, r.default.createElement("tbody", null, l)),
                    className: "group-tooltip",
                    children: r.default.createElement("span", {
                        className: "u-font-meta sharing-member-info__viewer-count-text"
                    }, s),
                    position: a.TitleBubble.POSITIONS.BOTTOM,
                    isTargetPositionFixed: !0
                }),
                elementText: s
            }
        }

        function n(e, t) {
            var n = t.has(e.account_id) ? d("Viewing now") : s.ago(e.time_last_seen, !1, !0);
            return [r.default.createElement("tr", null, r.default.createElement("td", {
                className: "group-tooltip__viewers-table-cell group-tooltip__member-name"
            }, i.Emstring.em_snippet(e.displayName(), o.SNIPPET_SIZES.DISPLAY_NAME)), r.default.createElement("td", {
                className: "group-tooltip__viewers-table-cell dot"
            }, "·"), r.default.createElement("td", {
                className: "group-tooltip__viewers-table-cell group-tooltip__seen-string"
            }, n))]
        }
        e.make = t
    })(t.WrappedGroupViewersMaker || (t.WrappedGroupViewersMaker = {}))
}), define("modules/clean/sharing/views/wrapped_sharing_modal_checkbox_row", ["require", "exports", "tslib", "react", "modules/clean/sharing/views/hover_close_button", "modules/core/i18n", "spectrum-sharing/components/sharing_modal_checkbox_row/index"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importDefault(s), i = n.__importStar(i);
    var o = i.i18n_default_project("sharing")._,
        l = function(e) {
            var t;
            if (e.showShareAsCommentOnboarding) {
                t = {
                    className: "checkbox-row-tooltip",
                    content: r.default.createElement("div", {
                        className: "content"
                    }, r.default.createElement("div", {
                        className: "text-content"
                    }, r.default.createElement("div", {
                        className: "header"
                    }, o("Let everyone know")), o("Check this box so others can see your message when viewing this file.")), r.default.createElement("div", null, r.default.createElement(s.default, {
                        className: "c-coach-mark__x",
                        onClick: e.onCloseShareAsCommentOnboarding
                    }))),
                    alwaysShow: !0
                }
            }
            return r.default.createElement(a.SharingModalCheckboxRow, n.__assign({}, e, {
                tooltipData: t
            }))
        };
    t.WrappedSharingModalCheckboxRow = r.default.memo(l)
}), define("modules/clean/teams/membership_discovery_util", ["require", "exports", "tslib", "external/lodash", "modules/clean/ajax", "modules/clean/growth/gating", "modules/clean/loggers/growth_features_events_logger", "modules/clean/react/modal", "modules/clean/stormcrow/experiment", "modules/constants/teams", "modules/constants/trademark", "modules/core/browser", "modules/core/i18n", "modules/core/notify", "modules/core/uri"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importStar(s), a = n.__importStar(a), o = n.__importStar(o), c = n.__importStar(c), u = n.__importStar(u);
    (function(e) {
        e.INVITE_MODAL_CLOSED = "magnet-invite-modal-closed"
    })(t.MembershipDiscoveryEvents || (t.MembershipDiscoveryEvents = {})), t.getDiscoverableTeamForFolder = function(e, t) {
        return s.WebRequest({
            url: "/team/discover/get_discoverable_team_for_folder",
            type: "POST",
            data: {
                ns_id: e
            },
            success: function(e) {
                return e = JSON.parse(e), t(null != e ? e.team : void 0)
            },
            error: function() {
                return t()
            }
        })
    }, t.sendTeamRequest = function(e, t) {
        return s.WebRequest({
            url: "/team/discover/join_ajax",
            data: {
                team_id: e,
                cont: "#"
            },
            success: function(e) {
                switch (e = JSON.parse(e), null != e ? e.result : void 0) {
                    case "request_sent":
                        m.Notify.success(p._("Request to join sent."));
                        break;
                    case "can_join":
                        u.redirect(e.url);
                        break;
                    case "max_team_size_achieved":
                        m.Notify.error(p._("This team has reached the maximum size. Please ask the admins of this team to upgrade to %(trademark_business)s, which allows teams to add as many members as possible.").format({
                            trademark_business: d.TRADEMARK_BUSINESS
                        }));
                        break;
                    case "pending_approval":
                        m.Notify.success(p._("Your request to join is pending."));
                        break;
                    default:
                        m.Notify.error(p._("Invalid request"))
                }
                return "function" == typeof t ? t(e) : void 0
            },
            error: function() {
                return m.Notify.error(p._("Error sending request.")), "function" == typeof t ? t() : void 0
            }
        })
    }, t.sendLimitedTeamInvitations = function(e, t, n, r) {
        return s.WebRequest({
            url: "/account/team/add_users",
            subject_user: t,
            data: {
                emails: e,
                team_id: n
            },
            success: function(e) {
                if (e = JSON.parse(e), e.num_invited) {
                    var t = p.ungettext("Invitation sent.", "Invitations sent.", e.num_invited);
                    m.Notify.success(t)
                }
                r()
            },
            error: function() {
                var t = p.ungettext("Error sending invitation.", "Error sending invitations.", e.length);
                m.Notify.error(t), r()
            }
        })
    }, t.sendAdminTeamInvitations = function(e, n, r, i, l) {
        return s.WebRequest({
            url: "/account/team/add_users",
            subject_user: n,
            data: {
                emails: e,
                team_id: r
            },
            success: function(t) {
                var s = {
                    subject_user_id: n.id,
                    team_id: r,
                    num_suggested_users: e.length
                };
                if (a.logMagnetEvent("send_admin_invite_ajax_success", s), t = JSON.parse(t), t.num_invited) {
                    var i = p.ungettext("Invitation sent.", "Invitations sent.", t.num_invited);
                    m.Notify.success(i)
                }
                l()
            },
            error: function(s) {
                var c = {
                    subject_user_id: n.id,
                    team_id: r,
                    num_suggested_users: e.length,
                    response_text: s.responseText
                };
                return a.logMagnetEvent("send_admin_invite_ajax_fail", c), s.responseText.includes("You need an additional license to invite this user.") || s.responseText.includes("You need more licenses to invite these users.") ? o.SimpleModal.show({
                    title_text: p._("No available licenses"),
                    body_html: p._("You don’t have enough available licenses to invite additional members. Please visit the admin console to purchase more licenses."),
                    confirm_text: p._("Go to admin console"),
                    confirm_callback: function() {
                        return c = {
                            team_id: r,
                            ui_object: "not_enough_licenses_modal"
                        }, a.logMagnetEvent("go_to_admin_console_clicked", c), u.redirect(new h.URI({
                            path: "/team/admin/members",
                            query: {
                                invite_emails: btoa(e.join(","))
                            }
                        }))
                    },
                    cancel_text: p._("Not now"),
                    cancel_callback: function() {
                        c = {
                            team_id: r,
                            ui_object: "not_enough_licenses_modal"
                        }, a.logMagnetEvent("not_now_clicked", c), l()
                    }
                }) : t.sendTeamSuggestions(e, i, function() {
                    return u.redirect(new h.URI({
                        path: "/team/admin/requests",
                        query: {
                            invite_emails: e
                        }
                    }))
                })
            }
        })
    }, t.sendTeamSuggestions = function(e, t, n, r) {
        return s.WebRequest({
            url: "/team/discover/suggest_ajax",
            data: {
                emails: JSON.stringify(e),
                ns_id: JSON.stringify(t)
            },
            success: function(t) {
                var r = p.ungettext("Suggestion sent.", "Suggestions sent.", e.length);
                return m.Notify.success(r), "function" == typeof n ? n(t) : void 0
            },
            error: function() {
                var t = p.ungettext("Error sending suggestion.", "Error sending suggestions.", e.length);
                return m.Notify.error(t), "function" == typeof r ? r() : void 0
            }
        })
    }, t.isLoggedExpUjMagnet2018 = function(e) {
        return e && (a.EXP_UJ_MAGNET2018_LOGGED_VARIANTS.includes(c.UJ_MAGNET2018_ADMIN) || a.EXP_UJ_MAGNET2018_LOGGED_VARIANTS.includes(c.UJ_MAGNET2018_MEMBER))
    }, t.isOnExpUjMagnet2018 = function(e) {
        return e && (a.EXP_UJ_MAGNET2018_ON_VARIANTS.includes(c.UJ_MAGNET2018_ADMIN) || a.EXP_UJ_MAGNET2018_ON_VARIANTS.includes(c.UJ_MAGNET2018_MEMBER))
    }, t.shouldShowMembershipSuggestionModal = function(e) {
        return e && (l.Experiment(c.UJ_MAGNET2018_ADMIN).variantIn("V1", "V2") || l.Experiment(c.UJ_MAGNET2018_MEMBER).variantIn("V1", "V2"))
    }, t.shouldShowMembershipSuggestionBanner = function() {
        return l.Experiment(c.UJ_MAGNET2018_ADMIN).variantIs("V3")
    }, t.filterSuggestableUsers = function(e, t, n) {
        var i = t.reduce(function(t, n) {
            return n.invalid || !n.email || n.dbx_team_id === e.team_dbtid || n.group_id || t.push(n.email), t
        }, []);
        if (i.length > 0 && !r.isEqual(i, n)) {
            return {
                emails: i,
                promise: new Promise(function(e, t) {
                    s.WebRequest({
                        url: "/team/discover/filter_suggestable_ajax",
                        type: "POST",
                        data: {
                            emails: JSON.stringify(i)
                        },
                        success: function(t) {
                            var n = JSON.parse(t);
                            n.contacts && n.contacts.length > 0 && a.logMagnetEvent("share_modal_entered_out_of_team", {
                                recipients: n.contacts.map(function(e) {
                                    return e.id
                                })
                            }), e(n)
                        },
                        error: function() {
                            t()
                        }
                    })
                }),
                ts: (new Date).getTime()
            }
        }
        return {}
    }, t.showExpUjMagnet2018PostShare = function(e, t, n) {
        if (t && t.contacts && t.contacts.length > 0) {
            var r = t.contacts,
                s = t.experiments;
            e(t.is_admin, r, t.team_size, s, n)
        } else n && u.redirect(n.toString())
    }, t.showExpUjMagnet2018PostShareIfQualified = function(e, n, r, s, i) {
        t.shouldShowMembershipSuggestionModal(e) && (r ? r.then(function(e) {
            t.showExpUjMagnet2018PostShare(n, e, i)
        }) : s ? t.showExpUjMagnet2018PostShare(n, s, i) : i && u.redirect(i.toString()))
    }, t.maybeLogExpUjMagnet2018Exposure = function(e, t, n) {
        if (e && t && t.contacts && t.contacts.length > 0) {
            var r = t.is_admin ? "uj_magnet2018_admin" : "uj_magnet2018_member";
            return i.growthCheckGating(n, r), !0
        }
        return !1
    }
}), define("modules/clean/teams/modals/create_team_prompt_modal", ["require", "exports", "tslib", "react", "modules/clean/ajax", "modules/clean/analytics", "modules/clean/react/button", "modules/clean/react/image", "modules/clean/react/modal", "modules/clean/static_urls", "modules/clean/stormcrow/experiment", "modules/clean/stormcrow/stormcrow_exposure_logger", "modules/constants/teams", "modules/constants/trademark", "modules/core/browser", "modules/core/i18n", "modules/core/uri"], function(e, t, n, r, s, i, a, o, l, c, d, u, p, m, h, _, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), s = n.__importStar(s), h = n.__importStar(h);
    var g;
    (function(e) {
        e[e.CLICK_CREATE = 0] = "CLICK_CREATE", e[e.DISMISS = 1] = "DISMISS", e[e.CLICK_NEXT_TIME = 2] = "CLICK_NEXT_TIME"
    })(g || (g = {}));
    var S = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onClickCreate = function() {
                var e;
                if (t.isNbgWebClientFolderShareModal.variantIs("V1")) e = new f.URI({
                    path: "/business/try"
                });
                else {
                    var n = t.props.invitedMembers.map(function(e) {
                        return e.email
                    }).filter(function(e) {
                        return "string" == typeof e && "" !== e
                    });
                    e = new f.URI({
                        path: "/team",
                        query: {
                            tk: "tib_upsell",
                            invite_members: n.join(",")
                        }
                    })
                }
                h.redirect(e.toString()), t.logClick(g.CLICK_CREATE)
            }, t.onClickNextTime = function() {
                l.Modal.close(), t.logClick(g.CLICK_NEXT_TIME)
            }, t.onDismiss = function() {
                s.WebRequest({
                    url: "/team/stop_show_create_team_modal"
                }), t.logClick(g.DISMISS)
            }, t
        }
        return n.__extends(t, e), Object.defineProperty(t.prototype, "isNbgWebClientFolderShareModal", {
                get: function() {
                    return d.Experiment(p.NBG_WEB_CLIENT_FOLDER_SHARE_MODAL)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.componentDidMount = function() {
                u.logVariantExposure("nbg_web_client_folder_share_modal", p.NBG_WEB_CLIENT_FOLDER_SHARE_MODAL)
            }, t.prototype.logClick = function(e) {
                i.TeamsWebActionsLogger.log("share_crt_team_modal", {
                    num_shared: this.props.invitedMembers.length,
                    clicked_create: e === g.CLICK_CREATE,
                    clicked_nxt_time: e === g.CLICK_NEXT_TIME,
                    dismissed: e === g.DISMISS
                })
            }, t.prototype.renderButtons = function() {
                return r.default.createElement("div", {
                    className: "db-modal-buttons"
                }, r.default.createElement(a.Button, {
                    className: "dbmodal-button",
                    importance: "primary",
                    onClick: this.onClickCreate
                }, this.isNbgWebClientFolderShareModal.variantIs("V1") ? _._("Try %(trademark_business)s free").format({
                    trademark_business: m.TRADEMARK_BUSINESS
                }) : _._("Create free work Dropbox")), r.default.createElement(a.Button, {
                    className: "dbmodal-button",
                    importance: "tertiary",
                    onClick: this.onClickNextTime
                }, _._("Ask me next time")))
            }, t.prototype.render = function() {
                for (var e = [], t = 0, n = this.props.invitedMembers; t < n.length; t++) {
                    var s = n[t];
                    s.name && s.name !== s.email && e.push(s.name)
                }
                var i = _._("Work with these people often?");
                return 2 === e.length && 2 === this.props.invitedMembers.length ? i = _._("Work with %(firstname_1)s and %(firstname_2)s often?").format({
                    firstname_1: e[0],
                    firstname_2: e[1]
                }) : 3 === e.length && 3 === this.props.invitedMembers.length && (i = _._("Work with %(firstname_1)s, %(firstname_2)s, and %(firstname_3)s often?").format({
                    firstname_1: e[0],
                    firstname_2: e[1],
                    firstname_3: e[2]
                })), r.default.createElement(l.Modal, {
                    style: "clean",
                    className: "create-team-modal-after-sharing",
                    buttonComponent: this.renderButtons(),
                    onDismiss: this.onDismiss,
                    clickOutToClose: !1,
                    showX: !0,
                    width: 500
                }, r.default.createElement("div", null, this.isNbgWebClientFolderShareModal.variantIs("V1") ? r.default.createElement(o.Image, {
                    className: "create-team-modal__team-illo u-mar-top-l",
                    alt: _._("Try %(trademark_business)s").format({
                        trademark_business: m.TRADEMARK_BUSINESS
                    }),
                    src: c.static_url("/static/images/teams/modals/illo_create_team-vfloYU16I.png"),
                    srcHiRes: c.static_url("/static/images/teams/modals/illo_create_team-vfloYU16I.png")
                }) : r.default.createElement(o.Image, {
                    className: "create-team-modal__team-illo u-mar-top-l",
                    alt: _._("Work together"),
                    src: c.static_url("/static/images/teams/modals/illo_how-create-vflQTQkfN.png"),
                    srcHiRes: c.static_url("/static/images/teams/modals/illo_how-create@2x-vfld7opTv.png")
                }), r.default.createElement("h1", {
                    className: "create-team-modal__header u-mar-top-m u-mar-bottom-s"
                }, i), this.isNbgWebClientFolderShareModal.variantIs("V1") ? r.default.createElement("div", {
                    className: "create-team-modal__subheader create-team-modal__subheader--nbg-web-client-folder-share-modal"
                }, _._("Join %(trademark_business)s to make collaborating easier, with more space to share files,                 more control, and dedicated support to help your team thrive.").format({
                    trademark_business: m.TRADEMARK_BUSINESS
                })) : r.default.createElement("div", {
                    className: "create-team-modal__subheader"
                }, _._("Get a free 2 GB work Dropbox to organize projects in one place,                 collaborate from anywhere, and stay in sync."))))
            }, t
    })(r.default.Component);
    t.CreateTeamPromptModal = S
}), define("spectrum-sharing/components/card/card", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.baseClassName = "scl-card";
    var i = (function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(i, e), i.prototype.render = function() {
            var e = this.props.className,
                n = r(t.baseClassName, e);
            return s.createElement("div", {
                className: n
            }, this.renderHeader(), this.renderBody())
        }, i.prototype.renderHeader = function() {
            if (this.props.icon || this.props.title || this.props.actions) return s.createElement("div", {
                className: t.baseClassName + "__header"
            }, this.props.icon && s.createElement("div", {
                className: t.baseClassName + "__icon"
            }, this.props.icon), this.props.title && s.createElement("div", {
                className: t.baseClassName + "__title"
            }, this.props.title), this.props.actions && s.createElement("div", {
                className: t.baseClassName + "__actions"
            }, this.props.actions))
        }, i.prototype.renderBody = function() {
            return s.createElement("div", {
                className: t.baseClassName + "__body"
            }, this.props.children)
        }, i.displayName = "Card", i
    })(s.PureComponent);
    t.Card = i
}), define("spectrum-sharing/components/card", ["require", "exports", "tslib", "spectrum-sharing/components/card/card"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/fixed_tabbed_container/fixed_tabbed_container", ["require", "exports", "tslib", "classnames", "react", "spectrum/tabbed_header"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.activeTabId,
                n = e.className,
                a = e.onTabSelected,
                o = e.tabs,
                l = r("scl-fixed-tabbed-container", n);
            return s.createElement("div", {
                className: l
            }, s.createElement("div", {
                className: "scl-fixed-tabbed-container__tabbed-header"
            }, s.createElement(i.TabbedHeader, {
                onSelection: a,
                activeTabId: t
            }, o.map(function(e) {
                return s.createElement(i.Tab, {
                    active: t === e.id,
                    className: "sharing-settings-modal__tab-header",
                    id: e.id,
                    key: e.id
                }, e.label)
            }))), s.createElement("div", {
                className: "scl-fixed-tabbed-container__content"
            }, this.props.children))
        }, t.displayName = "FixedTabbedContainer", t
    })(s.PureComponent);
    t.FixedTabbedContainer = a
}), define("spectrum-sharing/components/fixed_tabbed_container", ["require", "exports", "tslib", "spectrum-sharing/components/fixed_tabbed_container/fixed_tabbed_container"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/icons/icon_dropdown_caret", ["require", "exports", "react"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IconDropdownCaretOsx = function(e) {
        var t = e.className,
            r = e.variant,
            s = void 0 === r ? "default" : r;
        return n.createElement("svg", {
            className: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: "9",
            height: "5",
            viewBox: "0 0 9 5"
        }, n.createElement("path", {
            fill: "none",
            fillRule: "evenodd",
            stroke: "highlighted" === s ? "#0269D9" : "#3E3E3E",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            d: "M8 1L4.5 4 1 1"
        }))
    }, t.IconDropdownCaretWin = function(e) {
        var t = e.className,
            r = e.variant,
            s = void 0 === r ? "default" : r;
        return n.createElement("svg", {
            className: t,
            width: "12px",
            height: "6px",
            viewBox: "0 0 12 6",
            xmlns: "http://www.w3.org/2000/svg"
        }, n.createElement("g", {
            stroke: "highlighted" === s ? "#0269D9" : "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            fillOpacity: "0.8"
        }, n.createElement("g", {
            fill: "#000000"
        }, n.createElement("polygon", {
            points: "6 5.01369863 11.4626866 0 12 0.493150685 6 6 0 0.493150685 0.537313433 0"
        }))))
    }, t.IconDropdownCaretWeb = function(e) {
        var t = e.className;
        return n.createElement("svg", {
            className: t,
            width: "7px",
            height: "4px",
            viewBox: "0 0 7 4",
            xmlns: "http://www.w3.org/2000/svg"
        }, n.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, n.createElement("g", {
            transform: "translate(-509.000000, -24.000000)",
            fill: "#637282"
        }, n.createElement("g", {
            transform: "translate(444.000000, 16.000000)"
        }, n.createElement("polygon", {
            points: "65 8 72 8 68.5 12"
        })))))
    }, t.IconDropdownCaretBlueWeb = function(e) {
        var t = e.className;
        return n.createElement("svg", {
            className: t,
            width: "7px",
            height: "4px",
            viewBox: "0 0 7 4",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, n.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, n.createElement("g", {
            transform: "translate(-509.000000, -128.000000)",
            fill: "#007AF5"
        }, n.createElement("polygon", {
            id: "Arrow",
            points: "509 128 516 128 512.5 132"
        }))))
    }, t.IconDropdownCaretOsx.displayName = "IconDropdownCaretOsx", t.IconDropdownCaretWin.displayName = "IconDropdownCaretWin", t.IconDropdownCaretWeb.displayName = "IconDropdownCaretWeb", t.IconDropdownCaretBlueWeb.displayName = "IconDropdownCaretBlueWeb"
}), define("spectrum-sharing/components/icons/icon_dropdown_selected", ["require", "exports", "react"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IconDropdownSelected = function(e) {
        var t = e.className;
        return n.createElement("svg", {
            className: t,
            width: "12px",
            height: "12px",
            viewBox: "0 0 12 12",
            xmlns: "http://www.w3.org/2000/svg"
        }, n.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, n.createElement("g", {
            fill: "#3E3E3E",
            fillRule: "nonzero"
        }, n.createElement("path", {
            d: "M2.25927473,6.3493149 C1.89985258,5.92998906 1.2685526,5.88142752 0.849226756,6.24084967\n                  C0.429900914,6.60027182 0.381339377,7.2315718 0.740761528,7.65089765 L3.65485393,11.0506721\n                  C3.75823486,11.1606625 3.75823486,11.1606625 3.87986598,11.2500569 C4.38534754,11.5870446\n                  5.06830382,11.4504534 5.40529152,10.9449718 L11.3320684,2.05480647 C11.6384209,1.59527778\n                  11.514247,0.974408438 11.0547183,0.668055979 C10.5951896,0.36170352 9.97432029,0.485877389\n                  9.66796784,0.945406077 L4.40019879,8.84705964 L2.25927473,6.3493149 Z"
        }))))
    }, t.IconDropdownSelected.displayName = "IconDropdownSelected", t.IconDropdownSelectedBlue = function(e) {
        var t = e.className;
        return n.createElement("svg", {
            className: t,
            width: "14px",
            height: "11px",
            viewBox: "0 0 14 11",
            xmlns: "http://www.w3.org/2000/svg"
        }, n.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, n.createElement("g", {
            transform: "translate(-3.000000, -5.000000)",
            fill: "#0070E0"
        }, n.createElement("path", {
            d: "M11,13 L11,3 L13,3 L13,13 L13,15 L7,15 L7,13 L11,13 Z",
            id: "Icon",
            transform: "translate(10.000000, 9.000000) rotate(-315.000000) translate(-10.000000, -9.000000) "
        }))))
    }, t.IconDropdownSelectedBlue.displayName = "IconDropdownSelectedBlue"
}), define("spectrum-sharing/components/icons/icon_link", ["require", "exports", "react"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
            default: "transparent",
            active: "#D0D4D9",
            edit: "transparent",
            view: "transparent"
        },
        s = function(e) {
            switch (e) {
                case "edit":
                    return i();
                case "view":
                    return a();
                default:
                    return o()
            }
        },
        i = function() {
            return n.createElement("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd"
            }, n.createElement("g", {
                transform: "translate(-24.000000, -8.000000)"
            }, n.createElement("g", null, n.createElement("g", {
                transform: "translate(24.000000, 8.000000)"
            }, n.createElement("circle", {
                stroke: "#D0D4D9",
                strokeWidth: "1.32",
                cx: "16",
                cy: "16",
                r: "15.34"
            }), n.createElement("path", {
                d: "M21.0859375,13.1015625 L20.0195312,14.1679688 L17.8320312,11.9804688\n                L18.8984375,10.9140625 C19.007813,10.804687 19.1445304,10.75 19.3085938,10.75\n                C19.4726571,10.75 19.6093745,10.804687 19.71875,10.9140625 L21.0859375,12.28125\n                C21.195313,12.3906255 21.25,12.5273429 21.25,12.6914062 C21.25,12.8554696\n                21.195313,12.992187 21.0859375,13.1015625 Z M10.75,19.0625 L17.203125,12.609375\n                L19.390625,14.796875 L12.9375,21.25 L10.75,21.25 L10.75,19.0625 Z",
                fill: "#6A7C8F"
            })))))
        },
        a = function() {
            return n.createElement("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd"
            }, n.createElement("g", {
                transform: "translate(-24.000000, -8.000000)"
            }, n.createElement("g", null, n.createElement("g", {
                transform: "translate(24.000000, 8.000000)"
            }, n.createElement("circle", {
                stroke: "#D0D4D9",
                strokeWidth: "1.32",
                cx: "16",
                cy: "16",
                r: "15.34"
            }), n.createElement("path", {
                d: "M14.7695312,14.7695312 C15.1158871,14.4231754 15.5260393,14.25 16,14.25\n                  C16.4739607,14.25 16.8841129,14.4231754 17.2304688,14.7695312 C17.5768246,\n                  15.1158871 17.75,15.5260393 17.75,16 C17.75,16.4739607 17.5768246,16.8841129\n                  17.2304688,17.2304688 C16.8841129,17.5768246 16.4739607,17.75 16,17.75 C15.5260393,\n                  17.75 15.1158871,17.5768246 14.7695312,17.2304688 C14.4231754,16.8841129 14.25,\n                  16.4739607 14.25,16 C14.25,15.5260393 14.4231754,15.1158871 14.7695312,14.7695312\n                  Z M13.921875,18.078125 C14.5052113,18.643232 15.1979127,18.9257812 16,18.9257812\n                  C16.8020873,18.9257812 17.4902315,18.6386747 18.0644531,18.0644531 C18.6386747,\n                  17.4902315 18.9257812,16.8020873 18.9257812,16 C18.9257812,15.1979127 18.6386747,\n                  14.5097685 18.0644531,13.9355469 C17.4902315,13.3613253 16.8020873,13.0742188 16,\n                  13.0742188 C15.1979127,13.0742188 14.5097685,13.3613253 13.9355469,13.9355469\n                  C13.3613253,14.5097685 13.0742188,15.1979127 13.0742188,16 C13.0742188,16.8020873\n                  13.356768,17.4947887 13.921875,18.078125 Z M12.0898438,12.828125 C13.2565163,\n                  12.0260377 14.5598886,11.625 16,11.625 C17.4401114,11.625 18.7434837,12.0260377\n                  19.9101562,12.828125 C21.0768288,13.6302123 21.915362,14.6874934 22.4257812,16\n                  C21.915362,17.3125066 21.0768288,18.3697877 19.9101562,19.171875 C18.7434837,\n                  19.9739623 17.4401114,20.375 16,20.375 C14.5598886,20.375 13.2565163,19.9739623\n                  12.0898438,19.171875 C10.9231712,18.3697877 10.084638,17.3125066 9.57421875,\n                  16 C10.084638,14.6874934 10.9231712,13.6302123 12.0898438,12.828125 Z",
                fill: "#667C91"
            })))))
        },
        o = function() {
            return n.createElement("g", {
                fill: "#6A7C8F",
                transform: "translate(16.071068, 16.071068) rotate(-315.000000)\n                  translate(-16.071068, -16.071068) translate(13.071068, 9.071068)"
            }, n.createElement("path", {
                d: "M5.98487348,4.76239943 L4.58487348,4.76239943 L4.58487348,3.36107038\n                      C4.58487348,2.58309388 3.95807213,1.96239943 3.18487348,1.96239943\n                      C2.40628423,1.96239943 1.78487348,2.58860575 1.78487348,3.36107038\n                      L1.78487348,6.16372849 C1.78487348,6.94170499 2.41167483,7.56239943\n                      3.18487348,7.56239943 L3.18487348,8.96239943 C1.63847618,8.96239943\n                      0.384873479,7.70483456 0.384873479,6.16532106 L0.384873479,3.3594778\n                      C0.384873479,1.81469408 1.64162279,0.562399434 3.18487348,0.562399434\n                      C4.73127078,0.562399434 5.98487348,1.81996431 5.98487348,3.3594778\n                      L5.98487348,4.76239943 Z"
            }), n.createElement("path", {
                d: "M0.384873479,9.66239943 L1.78487348,9.66239943 L1.78487348,11.0637285\n                      C1.78487348,11.841705 2.41167483,12.4623994 3.18487348,12.4623994\n                      C3.96346273,12.4623994 4.58487348,11.8361931 4.58487348,11.0637285\n                      L4.58487348,8.26107038 C4.58487348,7.48309388 3.95807213,6.86239943\n                      3.18487348,6.86239943 L3.18487348,5.46239943 C4.73127078,5.46239943\n                      5.98487348,6.71996431 5.98487348,8.2594778 L5.98487348,11.0653211\n                      C5.98487348,12.6101048 4.72812417,13.8623994 3.18487348,13.8623994\n                      C1.63847618,13.8623994 0.384873479,12.6048346 0.384873479,11.0653211\n                      L0.384873479,9.66239943 Z"
            }))
        },
        l = function(e) {
            var t = e.className,
                i = e.variant;
            return n.createElement("svg", {
                className: t,
                width: "32px",
                height: "32px",
                viewBox: "0 0 32 32",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
            }, n.createElement("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd"
            }, n.createElement("circle", {
                stroke: "#D0D4D9",
                strokeWidth: "1.32",
                cx: "16",
                cy: "16",
                r: "15.34",
                fill: r[i || "default"]
            }), s(i || "default")))
        };
    t.IconLink = l
}), define("spectrum-sharing/components/icons/icon_settings_gear", ["require", "exports", "react"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        return n.createElement("svg", {
            width: "24",
            height: "24",
            viewBox: "-4 -4 24 24"
        }, n.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd"
        }, n.createElement("g", {
            transform: "translate(-8.000000, -8.000000)",
            fill: "#6A7C8F"
        }, n.createElement("path", {
            d: "M24,15.2 L24,17.1428571 L21.4857143,17.1428571 C21.2888229,17.8170566 21.0206419,\n            18.4683533 20.6857143,19.0857143 L22.0571429,21.0285714 L20.6857143,22.4 L18.8571429,\n            21.0285714 C18.2754139,21.325336 17.6619932,21.5553687 17.0285714,21.7142857 L16.8,24\n            L14.8571429,24 L14.5142857,21.8285714 C13.8530915,21.7734369 13.2201272,21.5360752\n            12.6857143,21.1428571 L10.8571429,22.5142857 L9.6,21.1428571 L10.9714286,19.0857143\n            C10.6251458,18.4858566 10.3926725,17.8271824 10.2857143,17.1428571 L8,17.0285714\n            L8,14.9714286 L10.2857143,14.7428571 C10.4547526,14.0951222 10.7247251,13.4780422\n            11.0857143,12.9142857 L9.6,11.0857143 L10.9714286,9.6 L12.8,10.9714286 C13.3973396,\n            10.711597 14.0076729,10.4827221 14.6285714,10.2857143 L14.9714286,8 L16.9142857,8\n            17.2571429,10.2857143 C17.9212591,10.4043389 18.5478652,10.678479 19.0857143,11.0857143\n            L20.9142857,9.6 L22.2857143,10.9714286 L20.9142857,12.9142857 C21.3270172,13.533851\n            21.5999981,14.2358018 21.7142857,14.9714286 L24,15.2 Z M16,19.4285714 C17.8935477,\n            19.4285714 19.4285714,17.8935477 19.4285714,16 C19.4285714,14.1064523 17.8935477,\n            12.5714286 16,12.5714286 C14.1064523,12.5714286 12.5714286,14.1064523 12.5714286,16\n            C12.5714286,17.8935477 14.1064523,19.4285714 16,19.4285714 Z"
        }))))
    };
    t.IconSettingsGear = r
}), define("spectrum-sharing/components/input", ["require", "exports", "tslib", "spectrum-sharing/components/input/input"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/input/input", ["require", "exports", "tslib", "classnames", "react", "spectrum/input"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                a = e.variant,
                o = n.__rest(e, ["className", "variant"]),
                l = r("scl-input", t, "scl-input--" + a),
                c = "borderless" === a ? "default" : a;
            return s.createElement(i.Input, n.__assign({
                className: l,
                variant: c
            }, o))
        }, t.displayName = "Input", t
    })(s.PureComponent);
    t.Input = a
}), define("spectrum-sharing/components/member_row", ["require", "exports", "tslib", "spectrum-sharing/components/member_row/member_row"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/member_row/member_row", ["require", "exports", "tslib", "classnames", "react", "spectrum/avatar", "spectrum-sharing/components/scooter_loader", "spectrum-sharing/components/sharing_avatar_initials", "spectrum-sharing/components/sharing_portal_dropdown"], function(e, t, n, r, s, i, a, o, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleDropdownChange = function(e) {
                var n = t.props,
                    r = n.id,
                    s = n.onChange;
                s && s(r, e)
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = e.variant,
                i = void 0 === n ? "default" : n,
                a = e.position,
                o = void 0 === a ? "default" : a,
                l = e.tag,
                c = l || "li",
                d = r(t, {
                    "scl-member-row": !0,
                    "scl-member-row-borderless": "borderless" === i,
                    "scl-member-row-default": "default" === i,
                    "scl-member-row-narrow": "narrow" === i
                }, {
                    "scl-member-row-positioned": "bottom" === o || "middle" === o,
                    "scl-member-row-bottom": "bottom" === o
                });
            return s.createElement(c, {
                className: d
            }, s.createElement("div", {
                className: "scl-member-row-outer"
            }, this.renderAvatar(), s.createElement("div", {
                className: "scl-member-row-info"
            }, this.renderDisplayName(), this.renderMemberDetails())), this.renderRightSideElement())
        }, t.prototype.renderAvatar = function() {
            var e = this.props,
                t = e.avatarHidden,
                n = e.avatarUrl,
                r = e.avatarElement,
                a = e.displayName,
                l = e.id,
                c = e.initials,
                d = e.initialAvatarShape;
            return t ? s.createElement("div", {
                className: "scl-member-row-avatar-empty"
            }) : r ? r : n ? s.createElement(i.Avatar, {
                src: n,
                className: "scl-member-row-avatar"
            }) : s.createElement(o.SharingAvatarInitials, {
                avatarSize: 32,
                backgroundColor: i.avatarColorForUserIdentifier(a || l),
                className: "scl-member-row-avatar",
                shape: d
            }, c)
        }, t.prototype.renderRightSideElement = function() {
            var e = this.props,
                t = e.id,
                n = e.loadingSpinnerVisible,
                r = e.optionGroup;
            return n ? s.createElement(a.ScooterLoader, null) : r && 1 === r.options.length ? s.createElement("div", null, " ", r.label, " ") : r ? s.createElement(l.SharingPortalDropdown, {
                id: t,
                optionGroup: r,
                onSelection: this.handleDropdownChange
            }) : null
        }, t.prototype.renderDisabledMessage = function() {
            return this.props.disabledMessage ? [s.createElement("span", {
                className: "u-font-meta dot"
            }, " · "), s.createElement("span", {
                className: "u-font-danger"
            }, " ", this.props.disabledMessage)] : null
        }, t.prototype.renderNameTitleAndText = function() {
            return s.createElement("span", {
                className: "scl-member-row-info-display-name-title",
                title: this.props.displayName
            }, this.props.truncatedDisplayName || this.props.displayName)
        }, t.prototype.renderPASSDot = function() {
            return this.props.passString ? s.createElement("span", {
                className: "scl-member-row-dot"
            }, " · ") : null
        }, t.prototype.renderOffTeamDot = function() {
            return this.props.offTeamMessage && this.props.description ? s.createElement("span", {
                className: "u-font-meta"
            }, " · ") : null
        }, t.prototype.renderPASS = function() {
            var e = this.props,
                t = e.present,
                n = e.passString;
            if (n) {
                var i = r({
                    "scl-member-row-last-seen": !0,
                    "scl-member-row-last-seen-not-present": !t
                });
                return s.createElement("span", {
                    className: i
                }, n)
            }
            return null
        }, t.prototype.renderDisplayName = function() {
            return s.createElement("div", {
                className: "scl-member-row-display-name"
            }, s.createElement("span", {
                className: this.props.onClickDisplayName ? "scl-member-row-pointer" : "",
                onClick: this.props.onClickDisplayName
            }, this.renderNameTitleAndText(), this.renderDisabledMessage(), this.renderPASSDot(), this.renderPASS()))
        }, t.prototype.renderOffTeamMessage = function(e) {
            return e ? s.createElement("span", {
                className: "u-font-meta"
            }, e) : null
        }, t.prototype.renderMemberDetails = function() {
            var e = this.props,
                t = e.description,
                n = e.offTeamMessage,
                r = e.truncatedDescription;
            return s.createElement("div", {
                className: "scl-member-row-details"
            }, s.createElement("span", {
                className: this.props.onClickDetails ? "scl-member-row-pointer" : "",
                onClick: this.props.onClickDetails
            }, s.createElement("span", {
                className: "scl-member-row-details-span",
                title: t
            }, r || t), this.renderOffTeamDot(), this.renderOffTeamMessage(n)))
        }, t.displayName = "MemberRow", t
    })(s.PureComponent);
    t.MemberRow = c
}), define("spectrum-sharing/components/scooter_loader", ["require", "exports", "tslib", "spectrum-sharing/components/scooter_loader/scooter_loader"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/scooter_loader/scooter_loader", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ScooterLoader = function(e) {
        var t = e.className,
            i = n.__rest(e, ["className"]);
        return s.createElement("div", n.__assign({
            className: r("scl-scooter-loader", t)
        }, i), s.createElement("div", {
            className: "scl-scooter-loader-animation"
        }))
    }, t.ScooterLoader.displayName = "ScooterLoader"
}), define("spectrum-sharing/components/sharing_avatar_initials", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_avatar_initials/sharing_avatar_initials"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_avatar_initials/sharing_avatar_initials", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SharingAvatarInitials = function(e) {
        var t = e.children,
            i = e.className,
            a = e.backgroundColor,
            o = e.avatarSize,
            l = void 0 === o ? 32 : o,
            c = e.variant,
            d = e.shape,
            u = n.__rest(e, ["children", "className", "backgroundColor", "avatarSize", "variant", "shape"]),
            p = r("scl-sharing-avatar-initials-" + l + "-" + d, {
                "scl-avatar-text-inactive": "inactive" === c,
                "scl-sharing-avatar-text": !0
            }, i),
            m = {
                background: "" + a,
                border: "1px solid " + a,
                borderRadius: "square" === d ? "12%" : "50%",
                height: l + "px",
                width: l + "px"
            };
        return s.createElement("div", n.__assign({
            className: p,
            style: m
        }, u), t)
    }, t.SharingAvatarInitials.displayName = "SharingAvatarInitials"
}), define("spectrum-sharing/components/sharing_contact_token", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_contact_token/sharing_contact_token"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_contact_token/sharing_contact_token", ["require", "exports", "tslib", "react", "spectrum/avatar", "spectrum/tooltip"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.avatarUrl,
                n = e.displayName,
                a = e.validation,
                o = r.createElement("div", {
                    style: {
                        display: "flex",
                        maxWidth: "200px"
                    }
                }, t && r.createElement(s.Avatar, {
                    size: 16,
                    src: t
                }), r.createElement("div", {
                    style: {
                        flex: "auto",
                        marginLeft: "5px",
                        minWidth: "0",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                }, n));
            return a && "invalid" == a.state ? r.createElement(i.Tooltip, {
                tooltipContent: a.msg ? a.msg : ""
            }, o) : o
        }, t.displayName = "SharingContactToken", t
    })(r.PureComponent);
    t.SharingContactToken = a
}), define("spectrum-sharing/components/sharing_dropdown_menu", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_dropdown_menu/sharing_dropdown_menu", "spectrum-sharing/components/sharing_dropdown_menu/sharing_dropdown_menu_button", "spectrum-sharing/components/sharing_dropdown_menu/sharing_dropdown_menu_item"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t), n.__exportStar(s, t), n.__exportStar(i, t)
}), define("spectrum-sharing/components/sharing_dropdown_menu/sharing_dropdown_menu", ["require", "exports", "tslib", "classnames", "react", "spectrum/dropdown_menu"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.baseClassName = "scl-sharing-dropdown-menu", t.SharingDropdownMenu = function(e) {
        var a, o = e.position,
            l = e.className,
            c = n.__rest(e, ["position", "className"]),
            d = r(t.baseClassName, l, (a = {}, a[t.baseClassName + "--right"] = "right" === o, a));
        return s.createElement(i.DropdownMenu, n.__assign({
            className: d
        }, c))
    }, t.SharingDropdownMenu.displayName = "SharingDropdownMenu"
}), define("spectrum-sharing/components/sharing_dropdown_menu/sharing_dropdown_menu_button", ["require", "exports", "tslib", "classnames", "react", "spectrum/dropdown_menu", "spectrum-sharing/components/icons/icon_dropdown_caret"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "scl-sharing-dropdown-menu-button",
        l = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.children,
                    l = e.className,
                    c = n.__rest(e, ["children", "className"]),
                    d = r(o, l);
                return s.createElement(i.DropdownMenuButton, n.__assign({
                    className: d
                }, c), t, s.createElement(a.IconDropdownCaretOsx, {
                    className: o + "__icon " + o + "__icon--osx"
                }), s.createElement(a.IconDropdownCaretWin, {
                    className: o + "__icon " + o + "__icon--win"
                }))
            }, t.displayName = "SharingDropdownMenuButton", t
        })(s.PureComponent);
    t.SharingDropdownMenuButton = l
}), define("spectrum-sharing/components/sharing_dropdown_menu/sharing_dropdown_menu_item", ["require", "exports", "tslib", "classnames", "react", "spectrum/dropdown_menu", "spectrum-sharing/components/icons/icon_dropdown_selected"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "scl-sharing-dropdown-menu-item";
    t.SharingDropdownMenuItem = function(e) {
        var t, l = e.description,
            c = e.label,
            d = e.selected,
            u = e.value,
            p = n.__rest(e, ["description", "label", "selected", "value"]);
        return s.createElement(i.MenuItem, n.__assign({
            className: o,
            key: u,
            value: u,
            text: c,
            selected: d
        }, p), d && s.createElement(a.IconDropdownSelected, {
            className: o + "__selected-icon"
        }), s.createElement("div", {
            className: r(o + "__wrapper", (t = {}, t[o + "__wrapper-selected"] = d, t))
        }, s.createElement("div", {
            className: o + "__label"
        }, c), l && s.createElement("div", {
            className: o + "__description"
        }, l)))
    }, t.SharingDropdownMenuItem.displayName = "SharingDropdownMenuItem"
}), define("spectrum-sharing/components/sharing_menu", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_menu/sharing_menu", "spectrum-sharing/components/sharing_menu/sharing_menu_item"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t), n.__exportStar(s, t)
}), define("spectrum-sharing/components/sharing_menu/sharing_menu", ["require", "exports", "tslib", "react", "classnames", "spectrum/dropdown_menu"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SharingMenu = function(e) {
        var t = e.className,
            a = n.__rest(e, ["className"]),
            o = s(t, "scl-sharing-menu");
        return r.createElement(i.Menu, n.__assign({
            className: o
        }, a))
    }, t.SharingMenu.displayName = "SharingMenu"
}), define("spectrum-sharing/components/sharing_menu/sharing_menu_item", ["require", "exports", "tslib", "classnames", "react", "spectrum/dropdown_menu", "spectrum-sharing/components/icons/icon_dropdown_selected"], function(e, t, n, r, s, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        var t = e.value,
            o = e.label,
            l = e.description,
            c = e.selected,
            d = e.variant,
            u = void 0 === d ? "default" : d;
        n.__rest(e, ["value", "label", "description", "selected", "variant"]);
        return s.createElement(i.MenuItem, {
            className: r({
                "scl-sharing-menu-item-border": "border" === u
            }),
            key: t,
            value: t,
            text: o,
            selected: c
        }, c && s.createElement(a.IconDropdownSelectedBlue, {
            className: "scl-sharing-menu-item-selected-icon"
        }), s.createElement("div", {
            className: r("scl-sharing-menu-item-wrapper", {
                "scl-sharing-menu-item-wrapper-selected": c
            })
        }, s.createElement("div", {
            className: r("scl-sharing-menu-item-label", {
                "scl-sharing-menu-item-label-default": "default" === u,
                "scl-sharing-menu-item-label-red": "red" === u
            })
        }, o), s.createElement("div", {
            className: "scl-sharing-menu-item-description"
        }, l)))
    };
    t.SharingMenuItem = o
}), define("spectrum-sharing/components/sharing_modal_checkbox_row/index", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_checkbox_row/sharing_modal_checkbox_row"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_modal_checkbox_row/sharing_modal_checkbox_row", ["require", "exports", "tslib", "classnames", "react", "spectrum/checkbox", "spectrum/tooltip", "spectrum/util/uuid_generator"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.onCheckChanged = function(e) {
                n.props.onCheckChanged("checked" === e)
            }, n.checkboxId = o.generateUUID("scl-sharing-modal-checkbox-row"), n
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.checked,
                n = e.className,
                o = e.disabled,
                l = e.labelText,
                c = e.tooltipData,
                d = r("scl-sharing-modal-checkbox-row", n, {
                    "scl-sharing-modal-checkbox-row--disabled": o
                }),
                u = s.createElement(i.Checkbox, {
                    id: this.checkboxId,
                    checked: t ? "checked" : "unchecked",
                    disabled: o,
                    onChange: this.onCheckChanged
                }),
                p = !(!c || !c.alwaysShow),
                m = c ? s.createElement(a.Tooltip, {
                    className: c.className,
                    tooltipContent: c.content,
                    isShowInitially: p,
                    showOnMouseMove: !p,
                    closeOnBlur: !p,
                    positioning: c.positioning
                }, u) : u;
            return s.createElement("div", {
                className: d
            }, m, s.createElement("label", {
                className: "scl-sharing-modal-checkbox-row__label",
                htmlFor: this.checkboxId
            }, l))
        }, t
    })(s.PureComponent);
    t.SharingModalCheckboxRow = l
}), define("spectrum-sharing/components/sharing_modal_contacts_field", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_contacts_field/sharing_modal_contacts_field"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_modal_contacts_field/sharing_modal_contacts_field", ["require", "exports", "tslib", "classnames", "react", "spectrum/dropdown_menu", "spectrum/tooltip", "spectrum-sharing/components/sharing_dropdown_menu"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.baseClassName = "scl-sharing-modal-contacts-field";
    var l = (function(e) {
        function l(t) {
            var n = e.call(this, t) || this;
            return n.renderDropdown = function() {
                var e = n.props,
                    t = (e.className, e.labelledAccessTypes),
                    r = e.selectedAccessType,
                    l = e.showNoEditTooltip,
                    c = e.noEditText,
                    d = r ? r.label : void 0,
                    u = s.createElement(o.SharingDropdownMenu, {
                        position: "right",
                        onSelection: n.handleChange
                    }, s.createElement(o.SharingDropdownMenuButton, {
                        disabled: l
                    }, d), s.createElement(i.Menu, null, t.map(function(e) {
                        return s.createElement(o.SharingDropdownMenuItem, {
                            "aria-label": e.ariaLabel,
                            description: e.details,
                            key: e.apiId,
                            label: e.label,
                            selected: r && r.apiId === e.apiId,
                            value: e.apiId
                        })
                    })));
                return l ? s.createElement(a.Tooltip, {
                    positioning: "below",
                    tooltipContent: c
                }, u) : u
            }, n.handleChange = function(e) {
                n.props.onAccessTypeChange && n.props.onAccessTypeChange(e)
            }, n
        }
        return n.__extends(l, e), l.prototype.render = function() {
            var e = this.props,
                n = e.className,
                i = e.toLabel,
                a = r(t.baseClassName, n);
            return s.createElement("div", {
                className: a
            }, s.createElement("div", {
                className: t.baseClassName + "__left"
            }, s.createElement("div", {
                className: t.baseClassName + "__to-label"
            }, i), s.createElement("div", {
                className: t.baseClassName + "__input"
            }, this.props.contactsField)), s.createElement("div", {
                className: t.baseClassName + "__right"
            }, this.renderDropdown()))
        }, l
    })(s.Component);
    t.SharingModalContactsField = l
}), define("spectrum-sharing/components/sharing_modal_footer_inband", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_footer_inband/sharing_modal_footer_inband"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_modal_footer_inband/sharing_modal_footer_inband", ["require", "exports", "tslib", "classnames", "react", "spectrum/button"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = e.children,
                a = e.textButtonShare,
                o = e.isButtonShareDisabled,
                l = e.onClickButtonShare,
                c = r("scl-sharing-modal-footer-inband", t);
            return s.createElement("div", {
                className: c
            }, n, s.createElement("div", {
                className: "scl-sharing-modal-footer-inband__spacer"
            }), s.createElement(i.Button, {
                variant: "primary",
                className: "scl-sharing-modal-footer-inband__button",
                "aria-label": a,
                onClick: l,
                disabled: o
            }, a))
        }, t.defaultProps = {
            isButtonShareDisabled: !1
        }, t
    })(s.PureComponent);
    t.SharingModalFooterInband = a
}), define("spectrum-sharing/components/sharing_modal_footer_link", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_create", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_disabled", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_loading", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_options", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_copy"], function(e, t, n, r, s, i, a, o, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t), n.__exportStar(s, t), n.__exportStar(i, t), n.__exportStar(a, t), n.__exportStar(o, t), n.__exportStar(l, t)
}), define("spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link", ["require", "exports", "tslib", "classnames", "react", "spectrum-sharing/components/icons/icon_link"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.baseClassName = "scl-sharing-modal-footer-link";
    var a = (function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(a, e), a.prototype.render = function() {
            var e = r(t.baseClassName, this.props.className);
            return s.createElement("div", {
                className: e
            }, this.props.isIconHidden !== !0 && s.createElement("div", {
                className: t.baseClassName + "__icon"
            }, this.props.icon ? this.props.icon : s.createElement(i.IconLink, null)), s.createElement("div", {
                className: t.baseClassName + "__body"
            }, this.props.body), s.createElement("div", {
                className: t.baseClassName + "__actions"
            }, this.props.actions))
        }, a
    })(s.PureComponent);
    t.SharingModalFooterLink = a
}), define("spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_copy", ["require", "exports", "tslib", "react", "classnames", "spectrum/button", "spectrum-sharing/components/icons/icon_link", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function(e) {
        var t = s(o.baseClassName, o.baseClassName + "--copy", e.className);
        return r.createElement(o.SharingModalFooterLink, {
            className: t,
            icon: e.icon ? e.icon : r.createElement(a.IconLink, {
                variant: "active"
            }),
            isIconHidden: e.isIconHidden,
            body: r.createElement("input", n.__assign({
                readOnly: !0,
                autoFocus: !0,
                value: e.sharedLinkUrl,
                onClick: c,
                onFocus: c,
                "aria-label": e.labelSharedLinkUrl,
                ref: e.textInputRef
            }, e.inputProps)),
            actions: r.createElement(i.Button, {
                variant: "borderless",
                onClick: e.onClickButton
            }, e.textButton)
        })
    };
    t.SharingModalFooterLinkCopy = l;
    var c = function(e) {
        e.currentTarget.select()
    }
}), define("spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_create", ["require", "exports", "react", "spectrum/button", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return n.createElement(s.SharingModalFooterLink, {
            className: e.className,
            icon: e.icon,
            body: e.statusNoLinkCreated,
            actions: n.createElement(r.Button, {
                variant: "borderless",
                onClick: e.onClickButtonCreateLink
            }, e.textButtonCreateLink)
        })
    };
    t.SharingModalFooterLinkCreate = i
}), define("spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_disabled", ["require", "exports", "react", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e) {
        return n.createElement(r.SharingModalFooterLink, {
            className: e.className,
            icon: e.icon,
            body: n.createElement("div", null, e.statusDisabledLink)
        })
    };
    t.SharingModalFooterLinkDisabled = s
}), define("spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_loading", ["require", "exports", "classnames", "react", "spectrum-sharing/components/scooter_loader", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function(e) {
        var t = n(i.baseClassName, i.baseClassName + "--loading", e.className);
        return r.createElement(i.SharingModalFooterLink, {
            className: t,
            icon: e.icon,
            body: r.createElement("div", {
                className: i.baseClassName + "--loading-body"
            }, r.createElement("span", null, e.statusCreatingLink), r.createElement(s.ScooterLoader, null))
        })
    };
    t.SharingModalFooterLinkLoading = a
}), define("spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link_options", ["require", "exports", "react", "spectrum/button", "spectrum-sharing/components/sharing_modal_footer_link/sharing_modal_footer_link", "spectrum-sharing/components/icons/icon_link"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function(e) {
        return n.createElement(s.SharingModalFooterLink, {
            className: e.className,
            icon: e.icon ? e.icon : n.createElement(i.IconLink, {
                variant: "active"
            }),
            body: e.statusLinkCreated,
            actions: n.createElement("div", null, n.createElement(r.Button, {
                key: "settings",
                variant: "borderless",
                onClick: e.onClickButtonLinkSettings
            }, e.textButtonLinkSettings), n.createElement("span", {
                key: "separator",
                className: "scl-sharing-modal-footer-link__sep"
            }, "•"), n.createElement(r.Button, {
                className: e.buttonCopyClassName,
                key: "copy",
                variant: "borderless",
                onClick: e.onClickButtonCopyLink
            }, e.textButtonCopyLink))
        })
    };
    t.SharingModalFooterLinkOptions = a
}), define("spectrum-sharing/components/sharing_modal_footer_link_list", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_footer_link_list/sharing_modal_footer_link_list"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_modal_footer_link_list/sharing_modal_footer_link_list", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.baseClassName = "scl-sharing-modal-footer-link-list";
    var i = (function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(i, e), i.prototype.render = function() {
            var e = r(t.baseClassName, this.props.className);
            return s.createElement("div", {
                className: e
            }, s.createElement("div", {
                className: t.baseClassName + "__header"
            }, s.createElement("div", {
                className: t.baseClassName + "__title"
            }, this.props.title), s.createElement("div", {
                className: t.baseClassName + "__actions"
            }, this.props.actions)), s.createElement("div", {
                className: t.baseClassName + "__items"
            }, this.props.children))
        }, i
    })(s.PureComponent);
    t.SharingModalFooterLinkList = i
}), define("spectrum-sharing/components/sharing_modal_header", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_header/sharing_modal_header", "spectrum-sharing/components/sharing_modal_header/sharing_modal_header_title", "spectrum-sharing/components/sharing_modal_header/sharing_modal_header_input"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t), n.__exportStar(s, t), n.__exportStar(i, t)
}), define("spectrum-sharing/components/sharing_modal_header/sharing_modal_header", ["require", "exports", "tslib", "classnames", "react", "spectrum/button", "spectrum/icon_form", "spectrum-sharing/components/icons/icon_settings_gear"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.baseClassName = "scl-sharing-modal-header";
    var l = (function(e) {
        function l() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(l, e), l.prototype.render = function() {
            var e = this.props,
                n = e.children,
                i = e.className,
                a = e.closeButtonVisible,
                o = e.icon,
                l = e.settingsButtonVisible,
                c = r(t.baseClassName, i);
            return s.createElement("div", {
                className: c
            }, s.createElement("div", {
                className: t.baseClassName + "__icon"
            }, o), s.createElement("div", {
                className: t.baseClassName + "__children"
            }, n), l && this.renderSettingsButton(), a && this.renderCloseButton())
        }, l.prototype.renderSettingsButton = function() {
            return s.createElement(i.Button, {
                "aria-label": "settings",
                className: t.baseClassName + "__settings",
                onClick: this.props.onClickSettingsButton,
                variant: "styleless"
            }, s.createElement(o.IconSettingsGear, null))
        }, l.prototype.renderCloseButton = function() {
            return s.createElement(i.Button, {
                "aria-label": "close",
                className: t.baseClassName + "__close",
                onClick: this.props.onClickCloseButton,
                variant: "styleless"
            }, s.createElement(a.IconForm, {
                name: "cancel"
            }))
        }, l.defaultProps = {
            closeButtonVisible: !1,
            settingsButtonVisible: !1
        }, l
    })(s.PureComponent);
    t.SharingModalHeader = l
}), define("spectrum-sharing/components/sharing_modal_header/sharing_modal_header_input", ["require", "exports", "tslib", "react", "spectrum-sharing/components/input", "spectrum-sharing/components/sharing_modal_header/sharing_modal_header"], function(e, t, n, r, s, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.setInputRef = function(e) {
                t.input = e
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.inputAriaLabel,
                a = e.inputAutoFocus,
                o = e.inputPlaceholder,
                l = e.onInputBlur,
                c = e.onInputChange,
                d = e.onInputFocus,
                u = e.onInputKeyUp,
                p = n.__rest(e, ["inputAriaLabel", "inputAutoFocus", "inputPlaceholder", "onInputBlur", "onInputChange", "onInputFocus", "onInputKeyUp"]);
            return r.createElement(i.SharingModalHeader, n.__assign({
                closeButtonVisible: !0
            }, p), r.createElement(s.Input, {
                ref: this.setInputRef,
                className: i.baseClassName + "__input",
                variant: "borderless",
                "aria-label": t,
                autoFocus: a,
                onChange: c,
                onFocus: d,
                onBlur: l,
                onKeyUp: u,
                placeholder: o
            }), this.props.children)
        }, t.displayName = "SharingModalHeaderInput", t
    })(r.PureComponent);
    t.SharingModalHeaderInput = a
}), define("spectrum-sharing/components/sharing_modal_header/sharing_modal_header_title", ["require", "exports", "tslib", "react", "spectrum-sharing/components/sharing_modal_header/sharing_modal_header"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.title,
                i = e.subTitle,
                a = n.__rest(e, ["title", "subTitle"]);
            return r.createElement(s.SharingModalHeader, n.__assign({}, a), r.createElement("div", {
                className: s.baseClassName + "__title"
            }, t), i && r.createElement("div", {
                className: s.baseClassName + "__sub-title"
            }, i))
        }, t.displayName = "SharingModalHeaderTitle", t
    })(r.PureComponent);
    t.SharingModalHeaderTitle = i
}), define("spectrum-sharing/components/sharing_modal_message_field", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_message_field/sharing_modal_message_field"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_modal_message_field/sharing_modal_message_field", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = e.children,
                i = e.onChange,
                a = e.value,
                o = e.placeholder,
                l = r("scl-sharing-modal-message-field", t);
            return s.createElement("div", {
                className: l
            }, s.createElement("textarea", {
                "aria-label": o,
                className: "scl-textarea",
                placeholder: o,
                onChange: i,
                value: a
            }), n)
        }, t.displayName = "SharingModalMessageField", t
    })(s.PureComponent);
    t.SharingModalMessageField = i
}), define("spectrum-sharing/components/sharing_modal_settings_row", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_settings_row/sharing_modal_settings_row"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_modal_settings_row/sharing_modal_settings_row", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleLinkClicked = function(e) {
                e.preventDefault(), t.props.descriptionLinkOnClicked && t.props.descriptionLinkUrl && t.props.descriptionLinkOnClicked(t.props.descriptionLinkUrl)
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = e.rightSideElement,
                i = e.bottomElement,
                a = r("scl-sharing-modal-settings-row", t);
            return s.createElement("div", {
                className: a
            }, s.createElement("div", {
                className: "scl-sharing-modal-settings-row-outer"
            }, s.createElement("div", {
                className: "scl-sharing-modal-settings-row-info"
            }, s.createElement("div", {
                className: "scl-sharing-modal-settings-row-display-name"
            }, s.createElement("span", {
                className: "scl-sharing-modal-settings-row-info-display-name-title",
                title: this.props.displayNameTitle
            }, this.props.displayName)), s.createElement("div", {
                className: "scl-sharing-modal-settings-row-details"
            }, s.createElement("span", {
                className: "scl-sharing-modal-settings-row-details-span",
                title: this.props.description
            }, this.props.description, this.props.descriptionLinkUrl && this.props.descriptionLinkText && s.createElement("span", null, " ", s.createElement("a", {
                className: "scl-sharing-modal-settings-row-description-link",
                href: "#",
                onClick: this.handleLinkClicked
            }, this.props.descriptionLinkText))))), n && s.createElement("div", {
                className: "scl-sharing-modal-settings-right-element"
            }, n)), i && s.createElement("div", {
                className: "scl-sharing-modal-settings-bottom-element"
            }, i))
        }, t.displayName = "SharingModalSettingsRow", t
    })(s.PureComponent);
    t.SharingModalSettingsRow = i
}), define("spectrum-sharing/components/sharing_portal_dropdown", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_portal_dropdown/sharing_portal_dropdown"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_portal_dropdown/sharing_portal_dropdown", ["require", "exports", "tslib", "classnames", "react", "react-dom", "react-aria-menubutton", "spectrum/util/uuid_generator", "spectrum/positioned_portal", "spectrum/button", "spectrum-sharing/components/icons/icon_dropdown_caret", "spectrum-sharing/components/sharing_menu"], function(e, t, n, r, s, i, a, o, l, c, d, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.dropdownId = o.generateUUID("portalDropdown"), n.handleResizeEvent = function() {
                n.state.isOpen && n.resolvePortalPosition()
            }, n.handleScrollEvent = function() {
                n.state.isOpen && n.resolvePortalPosition()
            }, n.onMenuToggle = function(e) {
                var t = e.isOpen;
                t || n.positionedPortalEl.hidePortal(), n.setState({
                    isOpen: t
                })
            }, n.handlePortalDidShow = function() {
                a.openMenu(n.dropdownId, {
                    focusMenu: !0
                })
            }, n.state = {
                isOpen: !1
            }, n
        }
        return n.__extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
            this.state.isOpen && this.positionedPortalEl ? (this.mountListeners(), this.resolvePortalPosition()) : this.positionedPortalEl && this.unMountListeners()
        }, t.prototype.componentWillUnmount = function() {
            this.unMountListeners()
        }, t.prototype.mountListeners = function() {
            document.addEventListener("scroll", this.handleScrollEvent, !1), window.addEventListener("resize", this.handleResizeEvent, !1)
        }, t.prototype.unMountListeners = function() {
            document.removeEventListener("scroll", this.handleScrollEvent, !1), window.removeEventListener("resize", this.handleResizeEvent, !1)
        }, t.prototype.resolvePortalPosition = function() {
            if (this.positionedPortalEl && this.positionedPortalEl.portalInstance.portalContentElementRef) {
                var e = i.findDOMNode(this.positionedPortalEl);
                if (!(e instanceof Element)) throw new Error("Unable to find PositionedPortal DOM node - check if this SharingPortalDropdown is still mounted");
                var t = e.getElementsByClassName("scl-sharing-portal-dropdown-button");
                if (!t.length) throw new Error("Unable to find SharingPortalDropdownButton - check if this SharingPortalDropdown is still mounted");
                var n = t[0],
                    r = this.positionedPortalEl.portalInstance.portalContentElementRef,
                    s = n.getBoundingClientRect(),
                    a = r.getBoundingClientRect(),
                    o = {
                        top: 0,
                        left: 0
                    };
                o = s.bottom + a.height > window.innerHeight ? {
                    top: s.top - a.height - 10,
                    left: s.left + s.width - a.width
                } : {
                    top: s.top + s.height + 10,
                    left: s.left + s.width - a.width
                }, r.style.top = o.top + "px", r.style.left = o.left + "px"
            }
        }, t.prototype.render = function() {
            var e = this,
                t = this.props,
                n = t.optionGroup,
                i = t.onSelection,
                o = (t.id, n.options.filter(function(e) {
                    return n.selectedApiId === e.apiId
                })[0]),
                p = function() {
                    return s.createElement(a.Wrapper, {
                        id: e.dropdownId,
                        onSelection: i,
                        onMenuToggle: e.onMenuToggle
                    }, s.createElement(a.Button, {
                        className: "scl-sharing-portal-dropdown-button-invisible"
                    }, o.label), s.createElement(u.SharingMenu, {
                        className: "scl-sharing-portal-menu"
                    }, n.options.map(function(e) {
                        return s.createElement(u.SharingMenuItem, {
                            description: e.tooltip,
                            key: e.apiId,
                            label: e.label,
                            selected: n.selectedApiId === e.apiId,
                            value: e.apiId,
                            variant: e.variant
                        })
                    })))
                },
                m = function() {
                    return e.state.isOpen ? s.createElement(d.IconDropdownCaretBlueWeb, {
                        className: "scl-sharing-portal-dropdown-icon scl-sharing-portal-dropdown-icon-web"
                    }) : s.createElement(d.IconDropdownCaretWeb, {
                        className: "scl-sharing-portal-dropdown-icon scl-sharing-portal-dropdown-icon-web"
                    })
                };
            return s.createElement(l.PositionedPortal, {
                closeOnBlur: !1,
                ref: function(t) {
                    return e.positionedPortalEl = t
                },
                renderContent: p,
                role: "sharing-dropdown",
                showOnMouseMove: !1,
                showOnClick: !0,
                onDidShow: this.handlePortalDidShow
            }, s.createElement(c.Button, {
                className: r("scl-sharing-portal-dropdown-button", {
                    "scl-sharing-portal-dropdown-button-expanded": this.state.isOpen
                }),
                variant: "styleless"
            }, o.label, m()))
        }, t
    })(s.PureComponent);
    t.SharingPortalDropdown = p
}), define("spectrum-sharing/utils/contacts_tokenizer/contacts_tokenizer_util", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = /[,|;>]+/;
    t.ContactsTokenizer = function(e) {
        return {
            tokenizeAllRawInputs: function(t) {
                var n = this.tokenizeValidRawInputs(t);
                return n.length > 0 ? n : [e.buildFromRawEmail(t)]
            },
            tokenizeValidRawInputs: function(t) {
                return (t.match(/['&A-Za-z0-9\._%+-]+@[A-Za-z0-9-][A-Za-z0-9\.-]*\.[A-Za-z]{2,15}/gi) || []).map(e.buildFromRawEmail)
            },
            tokenizeDelimitedInputs: function(e) {
                return n.test(e) ? this.tokenizeValidRawInputs(e) : []
            }
        }
    }
}), define("spectrum-sharing/utils/contacts_tokenizer", ["require", "exports", "tslib", "spectrum-sharing/utils/contacts_tokenizer/contacts_tokenizer_util"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/utils", ["require", "exports", "tslib", "spectrum-sharing/utils/contacts_tokenizer"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum/icon_acl/bundle", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ICONS = {
        "link-edit": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9 9.17l1.377-1.377a1 1 0 0 1 1.415 0l1.364 1.364a1 1 0 0 1 0 1.414l-1.377 1.377L19.9 9.17zM9.653 19.415l9.193-9.192 2.779 2.779-9.193 9.192-2.779-2.779zM8.6 20.441l2.778 2.779-3.219 1.073a.5.5 0 0 1-.632-.633L8.6 20.441z" fill="#000"></path>'
        },
        "link-small": {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M5 12c0-1.657 1.347-3 2.997-3h3.006A3 3 0 0 1 14 12v3H7.997A3 3 0 0 1 5 12zm1.5 0c0 .834.672 1.5 1.5 1.5h1.5V15H14v-2.5h-1.5v-.505c0-.818-.67-1.495-1.499-1.495H8c-.834 0-1.499.672-1.499 1.5z" fill="#637282"></path><path d="M19 12c0 1.657-1.347 3-2.997 3h-3.006A3 3 0 0 1 10 12V9h6.003A3 3 0 0 1 19 12zm-1.5 0c0-.834-.672-1.5-1.5-1.5h-1.5V9H10v2.5h1.5v.505c0 .818.67 1.495 1.499 1.495H16c.834 0 1.499-.672 1.499-1.5z" fill="#637282"></path></g>'
        },
        "link-view": {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 22c3.524 0 6.612-2.572 8.324-4.348a2.354 2.354 0 0 0 0-3.304C22.612 12.572 19.524 10 16 10s-6.612 2.572-8.324 4.348a2.354 2.354 0 0 0 0 3.304C9.388 19.428 12.476 22 16 22zm0-2c2.153 0 3.899-1.79 3.899-4S18.153 12 16 12s-3.899 1.79-3.899 4 1.746 4 3.899 4z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 18.5c1.346 0 2.437-1.12 2.437-2.5S17.346 13.5 16 13.5c-1.346 0-2.437 1.12-2.437 2.5s1.091 2.5 2.437 2.5z" fill="#000"></path>'
        },
        link: {
            attrs: {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill="#637282"><path d="M6 16c0-2.21 1.794-4 4.007-4h4.986A4.006 4.006 0 0 1 19 16v4h-8.993A4.006 4.006 0 0 1 6 16zm2 0c0 1.112.898 2 2.005 2H13v2h6v-3h-2v-.999c0-1.1-.894-2.001-1.997-2.001H9.997A2 2 0 0 0 8 16z"></path><path d="M26 16c0 2.21-1.794 4-4.007 4h-4.986A4.006 4.006 0 0 1 13 16v-4h8.993A4.006 4.006 0 0 1 26 16zm-2 0c0-1.112-.898-2-2.005-2H19v-2h-6v3h2v.999c0 1.1.894 2.001 1.997 2.001h5.006A2 2 0 0 0 24 16z"></path></g></g>'
        }
    }
}), define("spectrum/icon_acl", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_acl/bundle"], function(e, t, n, r, s, i, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importStar(s), t.ICONS = o.ICONS, t.IconAcl = function(e) {
        var t = e.name,
            n = s.createElement(a.SvgIconBundle, {
                focusable: "false",
                icon: o.ICONS[t]
            });
        return s.createElement(i.Component, r.__assign({
            icon: n
        }, e))
    }, t.IconAcl.displayName = "IconAcl"
});
//# sourceMappingURL=pkg-sharing.min.js-vfliO1wDn.map