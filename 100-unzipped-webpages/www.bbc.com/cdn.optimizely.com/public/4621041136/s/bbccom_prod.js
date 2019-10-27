!(function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
})([(function(e, t, n) {
    function i() {
        function e(e) {
            var t = n(149),
                i = [t];
            i.push(n(151)), i.push(n(157)), i.push(n(160)), i.push(n(163)), i.push(n(165)), i.push(n(175)), i.push(n(178)), i.push(n(181)), i.push(n(185)), i.push(n(188)), i.push(n(192)), i.push(n(196)), i.push(n(201)), i.push(n(202)), i.push(n(205)), p.initialize({
                clientData: e,
                plugins: i
            })
        }

        function t(e, t, n) {
            return "/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__", e).replace("__PROJECT_ID__", t).replace("__PREVIEW_LAYER_IDS__", n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__", !0)
        }
        window.performance && window.performance.mark && window.performance.mark("optimizely:blockBegin");
        var i = n(1);
        i.initialize();
        var r = n(84),
            a = n(23),
            o = n(16);
        n(130);
        var s = o.get("stores/directive"),
            u = n(91);
        if (!u.isCORSSupported()) throw new Error("CORS is not supported on this browser, aborting.");
        var c, l = n(132),
            d = n(118),
            f = n(133),
            g = {
                "layers": [],
                "listTargetingKeys": [],
                "groups": [],
                "views": [{
                    "category": "other",
                    "staticConditions": ["and", ["or", {
                        "type": "url",
                        "value": "www.bbc.com/",
                        "match": "substring"
                    }]],
                    "activationType": "polling",
                    "name": "[Page] Gallery Pages",
                    "apiName": "8318630511_page_gallery_pages",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "activationCode": function pollingFn() {
                        return digitalData.page.category.pageType === "slideshow-gallery";
                    },
                    "deactivationEnabled": false,
                    "id": "8501037292"
                }, {
                    "category": "other",
                    "staticConditions": null,
                    "activationType": "polling",
                    "name": "[Module] Related Stories",
                    "apiName": "8318630511_module_related_stories",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "activationCode": function pollingFn() {
                        return document.querySelectorAll("headed-section-related-stories").length > 0;
                    },
                    "deactivationEnabled": false,
                    "id": "8501966412"
                }, {
                    "category": "other",
                    "staticConditions": ["and", ["or", {
                            "type": "url",
                            "value": "www.bbc.com/news/",
                            "match": "substring"
                        }],
                        ["not", ["or", {
                            "type": "url",
                            "value": "www.bbc.com/news/",
                            "match": "simple"
                        }]]
                    ],
                    "activationType": "polling",
                    "name": "[Page] Article Pages",
                    "apiName": "8318630511_page_article_pages",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "activationCode": function pollingFn() {
                        return document.querySelectorAll(".story-body").length > 0;
                    },
                    "deactivationEnabled": false,
                    "id": "8515250531"
                }, {
                    "category": "other",
                    "staticConditions": ["and", ["or", {
                        "type": "url",
                        "value": "http://www.bbc.com/",
                        "match": "substring"
                    }]],
                    "activationType": "polling",
                    "name": "[Page] Index Pages",
                    "apiName": "8318630511_page_index_pages",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "activationCode": function pollingFn() {
                        return digitalData.page.category.pageType === "INDEX";
                    },
                    "deactivationEnabled": false,
                    "id": "8516400419"
                }, {
                    "category": "other",
                    "staticConditions": ["and", ["or", {
                        "type": "url",
                        "value": "www.bbc.com",
                        "match": "simple"
                    }]],
                    "name": "UM - BBC Homepage",
                    "apiName": "8319781850_url_targeting_for_mvt_comrw09__basic_optimizely_tes_1_7",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "deactivationEnabled": false,
                    "id": "10676662030"
                }, {
                    "category": "other",
                    "staticConditions": ["and", ["or", {
                        "type": "url",
                        "value": "/story/",
                        "match": "substring"
                    }]],
                    "activationType": "polling",
                    "name": "UM - Infinite article scroll pages",
                    "apiName": "8322162061_url_targeting_for_preview_stories__4_1_1",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "activationCode": function pollingFn() {
                        var isSpark = document.querySelectorAll("#bright-sparks").length > 0;
                        var isSuperSection = document.querySelectorAll(".article-page-super-section-container").length > 0;
                        var isFutureNow = document.querySelectorAll("#future-now").length > 0;
                        var isDesigned = document.querySelectorAll("#designed").length > 0;
                        var isGrandChallenges = document.querySelectorAll("#grand-challenges").length > 0;
                        var isUntoldWorld = document.querySelectorAll("#untold-world").length > 0;

                        if (isSpark) {
                            return true;
                        } else if (isSuperSection && isFutureNow) {
                            return true;
                        } else if (isSuperSection && isDesigned) {
                            return true;
                        } else if (isSuperSection && isGrandChallenges) {
                            return true;
                        } else if (isSuperSection && isUntoldWorld) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    "deactivationEnabled": false,
                    "id": "10717823624"
                }, {
                    "category": "other",
                    "staticConditions": ["or", ["or", {
                        "type": "url",
                        "value": "www.bbc.com",
                        "match": "simple"
                    }]],
                    "name": "BBC Homepage - MVT",
                    "apiName": "8318630511_bbc_homepage__mvt",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "deactivationEnabled": false,
                    "id": "10907343962"
                }, {
                    "category": "other",
                    "staticConditions": ["or", ["or", {
                        "type": "url",
                        "value": "https://www.bbc.com/",
                        "match": "simple"
                    }]],
                    "name": "Headline - BBC.com Homepage",
                    "apiName": "8318630511_headline_bbccom_homepage",
                    "tags": [],
                    "undoOnDeactivation": false,
                    "deactivationEnabled": false,
                    "id": "11387550086"
                }],
                "snippetId": "8322007280",
                "projectJS": function() {
                    window.headlineAB = window.headlineAB || {}, window.headlineAB = function(e, r) {
                        var t = function(n) {
                                if (n) {
                                    var i = r.createElement("textarea");
                                    return i.innerHTML = n, i.value
                                }
                            },
                            a = function(n) {
                                if (n) {
                                    var i = n.toString().replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
                                    return i.substr(i.indexOf("/")).split("#sa")[0]
                                }
                            },
                            c = function(n, i) {
                                return !(!n || !i) && a(n) === a(i)
                            },
                            d = function(n, i) {
                                return !(!n || !i) && -1 !== t(n.innerHTML).indexOf(t(i))
                            },
                            n = function(n, i, e) {
                                for (var t = r.querySelectorAll("a"), a = 0, o = t.length - 1; 0 <= o; o--) c(t[o].href, n) && d(t[o], i) && (e(t[o]), a++);
                                return a
                            },
                            o = function(n, i, e) {
                                if (n && n.innerHTML && void 0 !== i && void 0 !== e) return t(n.innerHTML).replace(i, e)
                            };
                        return {
                            domReady: function(n) {
                                "loading" !== r.readyState ? n() : r.addEventListener ? r.addEventListener("DOMContentLoaded", n) : r.attachEvent("onreadystatechange", function() {
                                    "loading" !== r.readyState && n()
                                })
                            },
                            setActions: function(i) {
                                e.optimizely && i && i.config_id && i.link && i.original && i.variation_name && i.variation_val && 0 === n(i.link, i.original, function(n) {
                                    n.onclick = function() {
                                        e.optimizely.push({
                                            type: "user",
                                            attributes: {
                                                configId: i.config_id,
                                                clickTime: Date.now(),
                                                clickLink: i.link
                                            }
                                        }), e.optimizely.push({
                                            type: "event",
                                            eventName: "clickHeadline___" + i.config_id
                                        })
                                    }, "original" !== i.variation_name && (n.innerHTML = o(n, i.original, i.variation_val))
                                }) && e.optimizely.push({
                                    type: "event",
                                    eventName: "invalidTest___" + i.config_id
                                })
                            },
                            decodeEntities: t,
                            cleanLink: a,
                            matchLinks: c,
                            matchText: d,
                            findMatchLinks: n,
                            patchHeadline: o
                        }
                    }(window, document);
                },
                "namespace": "8318630511",
                "tagGroups": [],
                "integrationSettings": [],
                "interestGroups": [],
                "dimensions": [],
                "audiences": [],
                "anonymizeIP": true,
                "projectId": "8318630511",
                "visitorAttributes": [],
                "enableForceParameters": true,
                "accountId": "4621041136",
                "events": [{
                    "category": "other",
                    "name": "Clicks on 4th Related Story",
                    "eventType": "click",
                    "viewId": "8501966412",
                    "apiName": "8318630511_clicks_on_4th_related_story",
                    "id": "8501735484",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".article-list-related-stories > li:nth-of-type(4)"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on 3rd Related Story",
                    "eventType": "click",
                    "viewId": "8501966412",
                    "apiName": "8318630511_clicks_on_3rd_related_story",
                    "id": "8504844921",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".article-list-related-stories > li:nth-of-type(3)"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on Start The Gallery - Gallery Pages",
                    "eventType": "click",
                    "viewId": "8501037292",
                    "apiName": "8318630511_clicks_on_start_the_gallery",
                    "id": "8505765827",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".sg-splash-start"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on 2nd Related Story",
                    "eventType": "click",
                    "viewId": "8501966412",
                    "apiName": "8318630511_clicks_on_2nd_related_story",
                    "id": "8507737865",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".article-list-related-stories > li:nth-of-type(2)"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on Bottom Share Buttons  - Article Pages",
                    "eventType": "click",
                    "viewId": "8515250531",
                    "apiName": "8318630511_clicks_on_share_buttons___article_pages",
                    "id": "8507833228",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".show"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on More On This Story - Article Pages",
                    "eventType": "click",
                    "viewId": "8515250531",
                    "apiName": "8318630511_clicks_on_more_on_this_story__article_pages",
                    "id": "8509475474",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".group"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on Related Articles - Article Page",
                    "eventType": "click",
                    "viewId": "8515250531",
                    "apiName": "8318630511_clicks_on_related_articles__article_page",
                    "id": "8510235836",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": "#comp-pattern-library"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on Back Arrow - Gallery Pages",
                    "eventType": "click",
                    "viewId": "8501037292",
                    "apiName": "8318630511_clicks_on_back_arrow__gallery_pages",
                    "id": "8510506667",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".sg-slide-nav-button-prev"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on Top Share Buttons - Article Pages",
                    "eventType": "click",
                    "viewId": "8515250531",
                    "apiName": "8318630511_clicks_on_top_share_buttons__article_pages",
                    "id": "8510533856",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".sharetools"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on Next Arrow - Gallery Page",
                    "eventType": "click",
                    "viewId": "8501037292",
                    "apiName": "8318630511_next_arrow__gallery_page",
                    "id": "8511194773",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".sg-slide-nav-button-next"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on 1st Related Story",
                    "eventType": "click",
                    "viewId": "8501966412",
                    "apiName": "8318630511_clicks_on_1st_related_story",
                    "id": "8514422060",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".article-list-related-stories > li:nth-of-type(1)"
                    }
                }, {
                    "category": "other",
                    "name": "Clicks on 5th Related Story",
                    "eventType": "click",
                    "viewId": "8501966412",
                    "apiName": "8318630511_clicks_on_5th_related_story",
                    "id": "8516174252",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".article-list-related-stories > li:nth-of-type(5)"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Clicks on Editor's Picks 5th Story",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_clicks_on_editors_picks_5th_story_7_1",
                    "id": "10671082693",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks .media-list__item--5 .block-link__overlay-link"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Clicks on Editor's Picks 7th Story",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_clicks_on_editors_picks_7th_story_7_1",
                    "id": "10675823100",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks .media-list__item--7 .block-link__overlay-link"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Clicks on Editor's Picks 6th Story",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_clicks_on_editors_picks_6th_story_7_1",
                    "id": "10676662031",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks .media-list__item--6 .block-link__overlay-link"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Clicks on Editor's Picks 1st Story",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_clicks_on_editors_picks_1st_story_1",
                    "id": "10676762914",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks .media-list__item--1 .block-link__overlay-link"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Clicks on Editor's Picks 4th Story",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_clicks_on_editors_picks_4th_story_7_1",
                    "id": "10676862406",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks .media-list__item--4 .block-link__overlay-link"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Clicks on Editor's Picks 3rd Story",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_clicks_on_editors_picks_3rd_story_7_1",
                    "id": "10677423925",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks .media-list__item--3 .block-link__overlay-link"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Clicks on Editor's Picks 2nd Story",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_clicks_on_editors_picks_2nd_story_7_1",
                    "id": "10678080823",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks .media-list__item--2 .block-link__overlay-link"
                    }
                }, {
                    "category": "other",
                    "name": "UM - Combined clicks on Editor's Picks",
                    "eventType": "click",
                    "viewId": "10676662030",
                    "apiName": "8319781850_combined_clicks_on_editors_picks_1",
                    "id": "10682493253",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".editors-picks"
                    }
                }, {
                    "category": "other",
                    "name": "Article has been viewed",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "article_viewed_2",
                    "id": "10698596528",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[ScrollPage] Has seen 5 articles",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeen5Articles_2",
                    "id": "10699007626",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "Advert has been seen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeenAdvert_1",
                    "id": "10700014579",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[ScrollPage] Has seen 4 articles",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeen4Articles_2",
                    "id": "10703005074",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[ScrollPage] Has seen 1 article",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeen1Articles_2",
                    "id": "10704993254",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[ScrollPage] Has seen 3 articles",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeen3Articles_2",
                    "id": "10705083372",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[ScrollPage] Has seen 2 articles",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeen2Articles_2",
                    "id": "10705864605",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[ScrollPage] Has seen 6 articles",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeen6Articles_2",
                    "id": "10727540092",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[ScrollPage] Has seen 7 articles",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "hasSeen7Articles_2",
                    "id": "10728150689",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "Clicked read more",
                    "eventType": "click",
                    "viewId": "10717823624",
                    "apiName": "8322162061_clicked_read_more_1_1",
                    "id": "10731140471",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".bottom-unit .show-story, .bottom-unit .show-story show-story-button"
                    }
                }, {
                    "category": "other",
                    "name": "Promo Item Click",
                    "eventType": "click",
                    "viewId": "10907343962",
                    "apiName": "8318630511_promo_item_click",
                    "id": "10873976484",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".module--promo li"
                    }
                }, {
                    "category": "other",
                    "name": "Sport Item Click",
                    "eventType": "click",
                    "viewId": "10907343962",
                    "apiName": "8318630511_sport_item_click",
                    "id": "10880274223",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".module--sport li"
                    }
                }, {
                    "category": "other",
                    "name": "News Item Click",
                    "eventType": "click",
                    "viewId": "10907343962",
                    "apiName": "8318630511_news_item_click",
                    "id": "10902427117",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".module--news li"
                    }
                }, {
                    "category": "other",
                    "name": "Leaderboard has been seen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "leaderboard_in_view_success",
                    "id": "10923500501",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "Promo module clicks",
                    "eventType": "click",
                    "viewId": "10907343962",
                    "apiName": "8318630511_promo_module_clicks",
                    "id": "10925170392",
                    "eventFilter": {
                        "filterType": "target_selector",
                        "selector": ".module--promo > .module__content"
                    }
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1535539442764 || The last of the good Samaritans",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1535539442764",
                    "id": "11363940685",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1535541800774 || Heat forces five US Open retirements",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1535541800774",
                    "id": "11370923103",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1535541800774 || Heat forces five US Open retirements",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1535541800774",
                    "id": "11375551735",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1535539442764 || The last of the good Samaritans",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1535539442764",
                    "id": "11388173733",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1535539442764 || The last of the good Samaritans",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1535539442764",
                    "id": "11388432934",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1535541800774 || Heat forces five US Open retirements",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1535541800774",
                    "id": "11390182718",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1540466352380 || The places that escaped the Spanish flu",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1540466352380",
                    "id": "11919910910",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541068509901 || 'Stung' Lennon 'furious' over coin attack",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541068509901",
                    "id": "11920034985",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1540549961493 || The land where people drink gold",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1540549961493",
                    "id": "11921741775",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541072163100 || An island that never stops apologising",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541072163100",
                    "id": "11925655482",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541421386102 || Why the French don\u2019t show excitement",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541421386102",
                    "id": "11927355570",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541415773325 || How to cope with your memory's flaws",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541415773325",
                    "id": "11927678508",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1540479488489 || Why was Sergei Skripal attacked?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1540479488489",
                    "id": "11929261188",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541416995736 || Why the French don\u2019t show excitement",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541416995736",
                    "id": "11931147523",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541589540918 || The secrets of endurance athletes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541589540918",
                    "id": "11931206688",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1540546859150 || Khashoggi's eldest son arrives in US",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1540546859150",
                    "id": "11931471984",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541070509321 || The bizarre material made from sweat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541070509321",
                    "id": "11932104860",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1540546859150 || Khashoggi's eldest son arrives in US",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1540546859150",
                    "id": "11933132494",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1540546859150 || Khashoggi's eldest son arrives in US",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1540546859150",
                    "id": "11933311933",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541503247078 || Why this airport is utterly deserted",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541503247078",
                    "id": "11933443751",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541156919170 || Nine TV shows to watch in November",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541156919170",
                    "id": "11934757957",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541156464852 || Should we stop blaming diet for acne?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541156464852",
                    "id": "11934764406",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541421386102 || Why the French don\u2019t show excitement",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541421386102",
                    "id": "11934778671",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541502478709 || The greatest African film ever?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541502478709",
                    "id": "11934907411",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541072163100 || An island that never stops apologising",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541072163100",
                    "id": "11935066099",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541413999440 || Ten ways to act on climate change",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541413999440",
                    "id": "11935137045",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541072163100 || An island that never stops apologising",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541072163100",
                    "id": "11935153056",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1540467585128 || On America's trail of destruction",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1540467585128",
                    "id": "11935160812",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541156464852 || Should we stop blaming diet for acne?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541156464852",
                    "id": "11936944574",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541413999440 || Ten ways to act on climate change",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541413999440",
                    "id": "11938783745",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1540466352380 || The places that escaped the Spanish flu",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1540466352380",
                    "id": "11938911237",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541590119253 || The secrets of endurance athletes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541590119253",
                    "id": "11939087857",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541601903183 || Where grandmas rule the kitchen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541601903183",
                    "id": "11939087922",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541590119253 || The secrets of endurance athletes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541590119253",
                    "id": "11940595177",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541071675316 || An island that never stops apologising",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541071675316",
                    "id": "11942574086",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541508238433 || Why most rape victims never tell",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541508238433",
                    "id": "11942686818",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1540479488489 || Why was Sergei Skripal attacked?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1540479488489",
                    "id": "11942832032",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541503247078 || Why this airport is utterly deserted",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541503247078",
                    "id": "11942919626",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541590119253 || The secrets of endurance athletes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541590119253",
                    "id": "11942988713",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1540466352380 || The places that escaped the Spanish flu",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1540466352380",
                    "id": "11943011464",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541156464852 || Should we stop blaming diet for acne?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541156464852",
                    "id": "11944694938",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541502478709 || The greatest African film ever?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541502478709",
                    "id": "11944866731",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1540467585128 || On America's trail of destruction",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1540467585128",
                    "id": "11944871203",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1540549961493 || The land where people drink gold",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1540549961493",
                    "id": "11948601475",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541416995736 || Why the French don\u2019t show excitement",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541416995736",
                    "id": "11948835702",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541415332234 || The colour of betrayal?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541415332234",
                    "id": "11950475326",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541508666034 || What it takes to be a Newfoundlander",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541508666034",
                    "id": "11951926791",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541071675316 || An island that never stops apologising",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541071675316",
                    "id": "11952455279",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541068509901 || 'Stung' Lennon 'furious' over coin attack",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541068509901",
                    "id": "11954354286",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541508666034 || What it takes to be a Newfoundlander",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541508666034",
                    "id": "11956168613",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541502478709 || The greatest African film ever?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541502478709",
                    "id": "11956347075",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541589540918 || The secrets of endurance athletes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541589540918",
                    "id": "11960927842",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541508238433 || Why most rape victims never tell",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541508238433",
                    "id": "11961213331",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1540549961493 || The land where people drink gold",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1540549961493",
                    "id": "11976120694",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541421386102 || Why the French don\u2019t show excitement",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541421386102",
                    "id": "11979368597",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541588796319 || The art of the m\u00e9nage \u00e0 trois",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541588796319",
                    "id": "11981927558",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541601903183 || Where grandmas rule the kitchen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541601903183",
                    "id": "11985746203",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1540467585128 || On America's trail of destruction",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1540467585128",
                    "id": "11987280601",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1540479488489 || Why was Sergei Skripal attacked?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1540479488489",
                    "id": "11989730086",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541508238433 || Why most rape victims never tell",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541508238433",
                    "id": "12008005004",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541415773325 || How to cope with your memory's flaws",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541415773325",
                    "id": "12020923049",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541588796319 || The art of the m\u00e9nage \u00e0 trois",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541588796319",
                    "id": "12022735965",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541602030918 || Where grandmas rule the kitchen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541602030918",
                    "id": "12027904413",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541070509321 || The bizarre material made from sweat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541070509321",
                    "id": "12030302673",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541156919170 || Nine TV shows to watch in November",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541156919170",
                    "id": "12033491511",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541415332234 || The colour of betrayal?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541415332234",
                    "id": "12035275155",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541416995736 || Why the French don\u2019t show excitement",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541416995736",
                    "id": "12035275189",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541156919170 || Nine TV shows to watch in November",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541156919170",
                    "id": "12037051144",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541071675316 || An island that never stops apologising",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541071675316",
                    "id": "12038381911",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541415773325 || How to cope with your memory's flaws",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541415773325",
                    "id": "12039611999",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541068509901 || 'Stung' Lennon 'furious' over coin attack",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541068509901",
                    "id": "12043150897",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541070509321 || The bizarre material made from sweat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541070509321",
                    "id": "12043320062",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541413999440 || Ten ways to act on climate change",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541413999440",
                    "id": "12043321668",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541503247078 || Why this airport is utterly deserted",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541503247078",
                    "id": "12045014910",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541415332234 || The colour of betrayal?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541415332234",
                    "id": "12048683059",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541508666034 || What it takes to be a Newfoundlander",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541508666034",
                    "id": "12076300987",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541589540918 || The secrets of endurance athletes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541589540918",
                    "id": "12076771677",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541588796319 || The art of the m\u00e9nage \u00e0 trois",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541588796319",
                    "id": "12077481935",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541602030918 || Where grandmas rule the kitchen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541602030918",
                    "id": "12079660754",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541602030918 || Where grandmas rule the kitchen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541602030918",
                    "id": "12086602115",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542280105157 || The puerile joke hidden in a portrait",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542280105157",
                    "id": "12093732012",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542197944325 || The mystery viruses far worse than flu",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542197944325",
                    "id": "12094082144",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542286484806 || The exam that stops a nation",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542286484806",
                    "id": "12095863169",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542727929037 || A nation that doesn\u2019t exist",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542727929037",
                    "id": "12095947961",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542890833318 || The mystery of The Beatles\u2019 best record",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542890833318",
                    "id": "12095986666",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542710737930 || The country where 96% of citizens own homes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542710737930",
                    "id": "12096117366",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541765280111 || The war game that almost ended the world",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541765280111",
                    "id": "12097660898",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541684861513 || \u2018I\u2019ll paint until I can no longer see\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541684861513",
                    "id": "12097780213",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541685061909 || What we fail to understand about the 1%",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541685061909",
                    "id": "12098010135",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541685497550 || Barry Jenkins does it again with Moonlight follow-up \u2605\u2605\u2605\u2605",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541685497550",
                    "id": "12098010138",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542805934250 || Which words make you human?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542805934250",
                    "id": "12098036015",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542805934250 || Which words make you human?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542805934250",
                    "id": "12101675190",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542197944325 || The mystery viruses far worse than flu",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542197944325",
                    "id": "12101704746",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542363534920 || Switzerland\u2019s artfully tedious job",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542363534920",
                    "id": "12101712035",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542369091351 || Why Iran creates some of the world\u2019s best films",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542369091351",
                    "id": "12102010109",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542369091351 || Why Iran creates some of the world\u2019s best films",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542369091351",
                    "id": "12103893907",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542805934250 || Which words make you human?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542805934250",
                    "id": "12103985960",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542721716239 || The bizarre bias that affects how you shop",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542721716239",
                    "id": "12105376858",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542280238574 || What makes this the world's most expensive ham?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542280238574",
                    "id": "12105413526",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542709758859 || A 'samurai' swordsmith is designing a space probe",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542709758859",
                    "id": "12105454448",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541765696534 || The miraculous house in the middle of the desert",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541765696534",
                    "id": "12105500277",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1543232201310 || One of celebrity culture's earliest casualties",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1543232201310",
                    "id": "12105556281",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541601903183 || Where grandmas rule the kitchen",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541601903183",
                    "id": "12106550692",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541764822079 || The master of \u2018Hollywood East\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541764822079",
                    "id": "12107600722",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542361557819 || Is your personality inexpressible?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542361557819",
                    "id": "12107624212",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541764822079 || The master of \u2018Hollywood East\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541764822079",
                    "id": "12107630804",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542280238574 || What makes this the world's most expensive ham?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542280238574",
                    "id": "12109675692",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542363534920 || Switzerland\u2019s artfully tedious job",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542363534920",
                    "id": "12109793473",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541765696534 || The miraculous house in the middle of the desert",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541765696534",
                    "id": "12111390729",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542193867540 || The greatest foreign-language films of the 21st Century",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542193867540",
                    "id": "12111434223",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541765696534 || The miraculous house in the middle of the desert",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541765696534",
                    "id": "12111460968",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542373942168 || The world's most glamorous hangouts",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542373942168",
                    "id": "12111513836",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1543232201310 || One of celebrity culture's earliest casualties",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1543232201310",
                    "id": "12113436295",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542710737930 || The country where 96% of citizens own homes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542710737930",
                    "id": "12113525971",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542890833318 || The mystery of The Beatles\u2019 best record",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542890833318",
                    "id": "12113628830",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542280105157 || The puerile joke hidden in a portrait",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542280105157",
                    "id": "12113644081",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542363534920 || Switzerland\u2019s artfully tedious job",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542363534920",
                    "id": "12113644506",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541764822079 || The master of \u2018Hollywood East\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541764822079",
                    "id": "12115430733",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541685497550 || Barry Jenkins does it again with Moonlight follow-up \u2605\u2605\u2605\u2605",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541685497550",
                    "id": "12115540226",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542361557819 || Is your personality inexpressible?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542361557819",
                    "id": "12117313466",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541684861513 || \u2018I\u2019ll paint until I can no longer see\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541684861513",
                    "id": "12118720309",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542193867540 || The greatest foreign-language films of the 21st Century",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542193867540",
                    "id": "12118791377",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542727929037 || A nation that doesn\u2019t exist",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542727929037",
                    "id": "12118934485",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541685497550 || Barry Jenkins does it again with Moonlight follow-up \u2605\u2605\u2605\u2605",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541685497550",
                    "id": "12120990312",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541685061909 || What we fail to understand about the 1%",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541685061909",
                    "id": "12122870197",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542361557819 || Is your personality inexpressible?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542361557819",
                    "id": "12122924477",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1543232201310 || One of celebrity culture's earliest casualties",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1543232201310",
                    "id": "12123719917",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541765280111 || The war game that almost ended the world",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541765280111",
                    "id": "12124800851",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542801731619 || The apple\u2019s surprising Soviet legacy",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542801731619",
                    "id": "12125005326",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542286484806 || The exam that stops a nation",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542286484806",
                    "id": "12126174336",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542193867540 || The greatest foreign-language films of the 21st Century",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542193867540",
                    "id": "12126392184",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1541685061909 || What we fail to understand about the 1%",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1541685061909",
                    "id": "12128180140",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542373942168 || The world's most glamorous hangouts",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542373942168",
                    "id": "12128203160",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542890833318 || The mystery of The Beatles\u2019 best record",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542890833318",
                    "id": "12130328388",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1541765280111 || The war game that almost ended the world",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1541765280111",
                    "id": "12130420536",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542197944325 || The mystery viruses far worse than flu",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542197944325",
                    "id": "12132152679",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542373942168 || The world's most glamorous hangouts",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542373942168",
                    "id": "12132981984",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1541684861513 || \u2018I\u2019ll paint until I can no longer see\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1541684861513",
                    "id": "12134200227",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542721716239 || The bizarre bias that affects how you shop",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542721716239",
                    "id": "12134275045",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542280238574 || What makes this the world's most expensive ham?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542280238574",
                    "id": "12137743744",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542286484806 || The exam that stops a nation",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542286484806",
                    "id": "12138583612",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542721716239 || The bizarre bias that affects how you shop",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542721716239",
                    "id": "12139714387",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1543926887871 || The truth behind common cold remedies",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1543926887871",
                    "id": "12145698646",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1543237891236 || The cost of a bridge between two nations",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1543237891236",
                    "id": "12149399341",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1543237891236 || The cost of a bridge between two nations",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1543237891236",
                    "id": "12161087458",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542369091351 || Why Iran creates some of the world\u2019s best films",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542369091351",
                    "id": "12166380055",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542709758859 || A 'samurai' swordsmith is designing a space probe",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542709758859",
                    "id": "12169542383",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542709758859 || A 'samurai' swordsmith is designing a space probe",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542709758859",
                    "id": "12171062610",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1543926887871 || The truth behind common cold remedies",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1543926887871",
                    "id": "12175799608",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542280105157 || The puerile joke hidden in a portrait",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542280105157",
                    "id": "12177211035",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1542801731619 || The apple\u2019s surprising Soviet legacy",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1542801731619",
                    "id": "12181712204",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542710737930 || The country where 96% of citizens own homes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542710737930",
                    "id": "12182992582",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1542727929037 || A nation that doesn\u2019t exist",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1542727929037",
                    "id": "12183981680",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1544106121115 || Why women are hooked on grisly true crime",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1544106121115",
                    "id": "12211725109",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1543237891236 || The cost of a bridge between two nations",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1543237891236",
                    "id": "12215911129",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1542801731619 || The apple\u2019s surprising Soviet legacy",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1542801731619",
                    "id": "12216790165",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1544106121115 || Why women are hooked on grisly true crime",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1544106121115",
                    "id": "12258101546",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1543926887871 || The truth behind common cold remedies",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1543926887871",
                    "id": "12312850426",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1544445572241 || Modern art masterpieces you can\u2019t see",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1544445572241",
                    "id": "12330832171",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1544106121115 || Why women are hooked on grisly true crime",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1544106121115",
                    "id": "12336690103",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1544445572241 || Modern art masterpieces you can\u2019t see",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1544445572241",
                    "id": "12343071647",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1544445572241 || Modern art masterpieces you can\u2019t see",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1544445572241",
                    "id": "12360131288",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1545065323232 || The lost Jurassic Park film",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1545065323232",
                    "id": "12373911859",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1545065323232 || The lost Jurassic Park film",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1545065323232",
                    "id": "12389312545",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1545065323232 || The lost Jurassic Park film",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1545065323232",
                    "id": "12393072814",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1546859365206 || The town that changed the way we eat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1546859365206",
                    "id": "12805720138",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1546859365206 || The town that changed the way we eat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1546859365206",
                    "id": "12817050133",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1546859365206 || The town that changed the way we eat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1546859365206",
                    "id": "12820870053",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1546952044255 || Why meeting another\u2019s gaze is so powerful",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1546952044255",
                    "id": "12829340271",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1546952326737 || Five cities to watch in 2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1546952326737",
                    "id": "12829430219",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1546952044255 || Why meeting another\u2019s gaze is so powerful",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1546952044255",
                    "id": "12833500052",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1546952044255 || Why meeting another\u2019s gaze is so powerful",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1546952044255",
                    "id": "12836880397",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1546952326737 || Five cities to watch in 2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1546952326737",
                    "id": "12842610127",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1546952326737 || Five cities to watch in 2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1546952326737",
                    "id": "12850330140",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547115051071 || How The Sopranos reinvented TV",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547115051071",
                    "id": "12864950362",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547114657795 || Is the 'greatest threat to civilisation' getting worse?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547114657795",
                    "id": "12869580040",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547115051071 || How The Sopranos reinvented TV",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547115051071",
                    "id": "12880900028",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547114657795 || Is the 'greatest threat to civilisation' getting worse?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547114657795",
                    "id": "12884780046",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547114657795 || Is the 'greatest threat to civilisation' getting worse?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547114657795",
                    "id": "12888630095",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547115051071 || How The Sopranos reinvented TV",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547115051071",
                    "id": "12894290051",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547549214497 || Why are animals getting fat?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547549214497",
                    "id": "12967900413",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547552278436 || The sci-fi taking on climate change",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547552278436",
                    "id": "12975620467",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547556083063 || Brazil\u2019s cute and complex small talk",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547556083063",
                    "id": "12978110057",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547549214497 || Why are animals getting fat?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547549214497",
                    "id": "12979350667",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547549214497 || Why are animals getting fat?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547549214497",
                    "id": "12981080625",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547552278436 || The sci-fi taking on climate change",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547552278436",
                    "id": "12983600011",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547556083063 || Brazil\u2019s cute and complex small talk",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547556083063",
                    "id": "12991430037",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547552278436 || The sci-fi taking on climate change",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547552278436",
                    "id": "12998720392",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547556083063 || Brazil\u2019s cute and complex small talk",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547556083063",
                    "id": "13010680037",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547820878585 || Could carbs help us live longer?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547820878585",
                    "id": "13034020279",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547820878585 || Could carbs help us live longer?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547820878585",
                    "id": "13034050094",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547821838728 || Could carbs help us live longer?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547821838728",
                    "id": "13047290207",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547824401325 || Cheney biopic Vice has 'sustained volcanic rage' \u2605\u2605\u2605\u2606\u2606",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547824401325",
                    "id": "13056970234",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547820878585 || Could carbs help us live longer?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547820878585",
                    "id": "13057200148",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547821838728 || Could carbs help us live longer?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547821838728",
                    "id": "13058790173",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1547824401325 || Cheney biopic Vice has 'sustained volcanic rage' \u2605\u2605\u2605\u2606\u2606",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1547824401325",
                    "id": "13066230279",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1547821838728 || Could carbs help us live longer?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1547821838728",
                    "id": "13066510409",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1547824401325 || Cheney biopic Vice has 'sustained volcanic rage' \u2605\u2605\u2605\u2606\u2606",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1547824401325",
                    "id": "13070220182",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548158721016 || Startling tales of a medieval superhero",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548158721016",
                    "id": "13102120154",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548158721016 || Startling tales of a medieval superhero",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548158721016",
                    "id": "13103870289",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548159399861 || What we know about gut health",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548159399861",
                    "id": "13111540251",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548158721016 || Startling tales of a medieval superhero",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548158721016",
                    "id": "13115170218",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548159399861 || What we know about gut health",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548159399861",
                    "id": "13119200252",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548300316689 || The Cambodian empire that began with pirated CDs",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548300316689",
                    "id": "13123840454",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548300316689 || The Cambodian empire that began with pirated CDs",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548300316689",
                    "id": "13127490786",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548237751877 || Can blue lights prevent train suicides?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548237751877",
                    "id": "13132970179",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548159399861 || What we know about gut health",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548159399861",
                    "id": "13136470183",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548237751877 || Can blue lights prevent train suicides?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548237751877",
                    "id": "13141140096",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548316143625 || Why Scotland loves haggis",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548316143625",
                    "id": "13143590065",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548382959721 || Explorer Flinders found under London station",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548382959721",
                    "id": "13145870506",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548237751877 || Can blue lights prevent train suicides?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548237751877",
                    "id": "13150310050",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548380296415 || The Thai guesthouse that saved a village",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548380296415",
                    "id": "13151240603",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548382959721 || Explorer Flinders found under London station",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548382959721",
                    "id": "13155960316",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548300316689 || The Cambodian empire that began with pirated CDs",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548300316689",
                    "id": "13156140308",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548380296415 || The Thai guesthouse that saved a village",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548380296415",
                    "id": "13167370144",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548316143625 || Why Scotland loves haggis",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548316143625",
                    "id": "13168930025",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548316143625 || Why Scotland loves haggis",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548316143625",
                    "id": "13174590022",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548382959721 || Explorer Flinders found under London station",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548382959721",
                    "id": "13174650470",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548380296415 || The Thai guesthouse that saved a village",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548380296415",
                    "id": "13176270775",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548643213068 || The new wonder products from nature",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548643213068",
                    "id": "13195710272",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548639267287 || Is this really a \u2018perfect\u2019 food?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548639267287",
                    "id": "13195750155",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548726044770 || Where I learned to love French",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548726044770",
                    "id": "13199990658",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548726044770 || Where I learned to love French",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548726044770",
                    "id": "13200120319",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548726430993 || The cost of free public transport",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548726430993",
                    "id": "13203550219",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548643213068 || The new wonder products from nature",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548643213068",
                    "id": "13205280374",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548726430993 || The cost of free public transport",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548726430993",
                    "id": "13205490135",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548726430993 || The cost of free public transport",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548726430993",
                    "id": "13209410673",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548810365531 || Did wine cause Armenia\u2019s revolution?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548810365531",
                    "id": "13210100638",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548810997777 || The plight of Japan\u2019s modern hermits",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548810997777",
                    "id": "13211980478",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548639267287 || Is this really a \u2018perfect\u2019 food?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548639267287",
                    "id": "13212640262",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548643213068 || The new wonder products from nature",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548643213068",
                    "id": "13212650393",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548661252123 || Can you \u2018robot-proof' your career?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548661252123",
                    "id": "13213510030",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548639267287 || Is this really a \u2018perfect\u2019 food?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548639267287",
                    "id": "13214660409",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548810365531 || Did wine cause Armenia\u2019s revolution?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548810365531",
                    "id": "13221170299",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548661252123 || Can you \u2018robot-proof' your career?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548661252123",
                    "id": "13224450048",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548810997777 || The plight of Japan\u2019s modern hermits",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548810997777",
                    "id": "13225280437",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548661252123 || Can you \u2018robot-proof' your career?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548661252123",
                    "id": "13226520030",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548726044770 || Where I learned to love French",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548726044770",
                    "id": "13228620364",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548899657729 || Japan's mysterious \u2018dancing zombie squid\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548899657729",
                    "id": "13229960429",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548849935438 || A tiny nation that can boost expat careers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548849935438",
                    "id": "13237510093",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548899757717 || What time does your brain work best?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548899757717",
                    "id": "13241030328",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548810365531 || Did wine cause Armenia\u2019s revolution?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548810365531",
                    "id": "13244400303",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548899757717 || What time does your brain work best?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548899757717",
                    "id": "13244910502",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548899657729 || Japan's mysterious \u2018dancing zombie squid\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548899657729",
                    "id": "13245180471",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548899657729 || Japan's mysterious \u2018dancing zombie squid\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548899657729",
                    "id": "13246920288",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548810997777 || The plight of Japan\u2019s modern hermits",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548810997777",
                    "id": "13252380185",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548849935438 || A tiny nation that can boost expat careers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548849935438",
                    "id": "13252790124",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548990438931 || Why it\u2019s so expensive to eat with a food allergy",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548990438931",
                    "id": "13255840463",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548849935438 || A tiny nation that can boost expat careers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548849935438",
                    "id": "13260150070",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548990438931 || Why it\u2019s so expensive to eat with a food allergy",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548990438931",
                    "id": "13266910707",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1548990629871 || How Ibiza\u2019s party really started",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1548990629871",
                    "id": "13268640419",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548990629871 || How Ibiza\u2019s party really started",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548990629871",
                    "id": "13274510455",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548990629871 || How Ibiza\u2019s party really started",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548990629871",
                    "id": "13275120112",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1548899757717 || What time does your brain work best?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1548899757717",
                    "id": "13276180096",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1548990438931 || Why it\u2019s so expensive to eat with a food allergy",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1548990438931",
                    "id": "13276600446",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549248334446 || How to make tough tasks easier",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549248334446",
                    "id": "13297970335",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549248134546 || The birthplace of modern medicine",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549248134546",
                    "id": "13303740189",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549248134546 || The birthplace of modern medicine",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549248134546",
                    "id": "13312980271",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549248334446 || How to make tough tasks easier",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549248334446",
                    "id": "13318890164",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549248134546 || The birthplace of modern medicine",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549248134546",
                    "id": "13322610299",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549332967981 || How to get in \u2018the zone\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549332967981",
                    "id": "13325950071",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549248334446 || How to make tough tasks easier",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549248334446",
                    "id": "13326230479",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549332967981 || How to get in \u2018the zone\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549332967981",
                    "id": "13327680395",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549430719742 || The trees helping to predict the future",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549430719742",
                    "id": "13343390274",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549416392559 || How Office Space changed office culture",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549416392559",
                    "id": "13345350345",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549430719742 || The trees helping to predict the future",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549430719742",
                    "id": "13349900162",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549430719742 || The trees helping to predict the future",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549430719742",
                    "id": "13350850800",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549416392559 || How Office Space changed office culture",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549416392559",
                    "id": "13355230368",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549332967981 || How to get in \u2018the zone\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549332967981",
                    "id": "13364170081",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549416392559 || How Office Space changed office culture",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549416392559",
                    "id": "13380230099",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549520049693 || The moral conundrum of meat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549520049693",
                    "id": "13382460503",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549520049693 || The moral conundrum of meat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549520049693",
                    "id": "13384390425",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549520049693 || The moral conundrum of meat",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549520049693",
                    "id": "13391190025",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549595031112 || Is everything we think we know about technology wrong?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549595031112",
                    "id": "13391270399",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549595031112 || Is everything we think we know about technology wrong?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549595031112",
                    "id": "13413850108",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549595031112 || Is everything we think we know about technology wrong?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549595031112",
                    "id": "13419220011",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549854077365 || Why China is obsessed with numbers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549854077365",
                    "id": "13470970661",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549854077365 || Why China is obsessed with numbers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549854077365",
                    "id": "13479460048",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549945199790 || How cars changed Chennai\u2019s food scene",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549945199790",
                    "id": "13487310341",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549854077365 || Why China is obsessed with numbers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549854077365",
                    "id": "13494190273",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549975468754 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549975468754",
                    "id": "13499710262",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549975455319 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549975455319",
                    "id": "13499790421",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549975455319 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549975455319",
                    "id": "13500020203",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549975444474 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549975444474",
                    "id": "13501720306",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549975444474 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549975444474",
                    "id": "13503980134",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549945199790 || How cars changed Chennai\u2019s food scene",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549945199790",
                    "id": "13504870580",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550039158740 || The link between gut health and weight",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550039158740",
                    "id": "13507930181",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549975455319 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549975455319",
                    "id": "13508010003",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549968232106 || The dark side of believing in true love",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549968232106",
                    "id": "13508680471",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549975468754 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549975468754",
                    "id": "13511210413",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549975657183 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549975657183",
                    "id": "13511460181",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549975468754 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549975468754",
                    "id": "13514840087",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549975657183 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549975657183",
                    "id": "13515030070",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549968232106 || The dark side of believing in true love",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549968232106",
                    "id": "13518860371",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549975657183 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549975657183",
                    "id": "13522840130",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1549968232106 || The dark side of believing in true love",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1549968232106",
                    "id": "13524940036",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550041459370 || How to save money with a \u2018no-buy\u2019 year",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550041459370",
                    "id": "13525690027",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550039158740 || The link between gut health and weight",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550039158740",
                    "id": "13527340283",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550041459370 || How to save money with a \u2018no-buy\u2019 year",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550041459370",
                    "id": "13527340291",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550039158740 || The link between gut health and weight",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550039158740",
                    "id": "13531570011",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1549945199790 || How cars changed Chennai\u2019s food scene",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1549945199790",
                    "id": "13532310139",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550041459370 || How to save money with a \u2018no-buy\u2019 year",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550041459370",
                    "id": "13536350576",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1549975444474 || The Swiss town obsessed with the number 11",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1549975444474",
                    "id": "13536370010",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550228969102 || A murder plot hidden inside a painting?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550228969102",
                    "id": "13553760498",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550228969102 || A murder plot hidden inside a painting?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550228969102",
                    "id": "13559800053",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550228969102 || A murder plot hidden inside a painting?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550228969102",
                    "id": "13569200176",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550457777039 || The secret to Danish happiness?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550457777039",
                    "id": "13599790029",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550457967976 || The secret to Danish happiness?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550457967976",
                    "id": "13601600203",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550457967976 || The secret to Danish happiness?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550457967976",
                    "id": "13601610116",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550462728212 || The hunt to catch the fish pirates",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550462728212",
                    "id": "13603780027",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550543731914 || Singapore\u2019s salad that makes you rich",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550543731914",
                    "id": "13605530572",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550457777039 || The secret to Danish happiness?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550457777039",
                    "id": "13607060295",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550462728212 || The hunt to catch the fish pirates",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550462728212",
                    "id": "13616780221",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550457777039 || The secret to Danish happiness?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550457777039",
                    "id": "13616950075",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550457967976 || The secret to Danish happiness?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550457967976",
                    "id": "13618800019",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550462728212 || The hunt to catch the fish pirates",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550462728212",
                    "id": "13620260424",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550543731914 || Singapore\u2019s salad that makes you rich",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550543731914",
                    "id": "13622970511",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550637629351 || Why do we drink milk?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550637629351",
                    "id": "13627170950",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550543731914 || Singapore\u2019s salad that makes you rich",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550543731914",
                    "id": "13630280623",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550637629351 || Why do we drink milk?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550637629351",
                    "id": "13631560103",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550637629351 || Why do we drink milk?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550637629351",
                    "id": "13644180324",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1550730518228 || How to create 'good jobs'",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1550730518228",
                    "id": "13652940612",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1550730518228 || How to create 'good jobs'",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1550730518228",
                    "id": "13656960311",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1550730518228 || How to create 'good jobs'",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1550730518228",
                    "id": "13672190133",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1551323361513 || How to tell the boss you\u2019re sick",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1551323361513",
                    "id": "13736020388",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1551324325686 || The right way to eat dim sum",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1551324325686",
                    "id": "13743700262",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1551324325686 || The right way to eat dim sum",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1551324325686",
                    "id": "13743770213",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1551323361513 || How to tell the boss you\u2019re sick",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1551323361513",
                    "id": "13751890005",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1551324325686 || The right way to eat dim sum",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1551324325686",
                    "id": "13753060770",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1551409861653 || Should you go vegan for the sake of your gut?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1551409861653",
                    "id": "13761790231",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1551323361513 || How to tell the boss you\u2019re sick",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1551323361513",
                    "id": "13770300684",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1551409861653 || Should you go vegan for the sake of your gut?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1551409861653",
                    "id": "13785030024",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1551409861653 || Should you go vegan for the sake of your gut?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1551409861653",
                    "id": "13790640182",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1551679797846 || The new weapon in crime fighting",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1551679797846",
                    "id": "13795880259",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1551679797846 || The new weapon in crime fighting",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1551679797846",
                    "id": "13805390398",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1551679797846 || The new weapon in crime fighting",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1551679797846",
                    "id": "13805660074",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1551757217374 || What is \u2018superadobe\u2019?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1551757217374",
                    "id": "13815590342",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1551757217374 || What is \u2018superadobe\u2019?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1551757217374",
                    "id": "13821140175",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1551757217374 || What is \u2018superadobe\u2019?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1551757217374",
                    "id": "13840550165",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1552370587474 || Who are the people behind internet celebrities?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1552370587474",
                    "id": "14066320249",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1552388165098 || A symbol planted in a woman\u2019s cleavage",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1552388165098",
                    "id": "14068530095",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1552460204097 || An easy way to make your desk job more bearable",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1552460204097",
                    "id": "14074900208",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1552370587474 || Who are the people behind internet celebrities?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1552370587474",
                    "id": "14079660496",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1552388165098 || A symbol planted in a woman\u2019s cleavage",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1552388165098",
                    "id": "14079810405",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1552388165098 || A symbol planted in a woman\u2019s cleavage",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1552388165098",
                    "id": "14088300256",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1552370587474 || Who are the people behind internet celebrities?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1552370587474",
                    "id": "14096420029",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1552460204097 || An easy way to make your desk job more bearable",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1552460204097",
                    "id": "14122930105",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1552460204097 || An easy way to make your desk job more bearable",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1552460204097",
                    "id": "14124930040",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1552991338905 || The upsides of the apocalypse?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1552991338905",
                    "id": "14146780555",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1552981342925 || Is democracy broken?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1552981342925",
                    "id": "14150850283",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1552981342925 || Is democracy broken?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1552981342925",
                    "id": "14160640132",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1552981342925 || Is democracy broken?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1552981342925",
                    "id": "14162570367",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1552991338905 || The upsides of the apocalypse?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1552991338905",
                    "id": "14170610399",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1552991338905 || The upsides of the apocalypse?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1552991338905",
                    "id": "14180700300",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1557968680992 || Why politics is toxic for Australia\u2019s women",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1557968680992",
                    "id": "14863920683",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1557968680992 || Why politics is toxic for Australia\u2019s women",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1557968680992",
                    "id": "14870040427",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1557968680992 || Why politics is toxic for Australia\u2019s women",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1557968680992",
                    "id": "14885610875",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1557986411214 || The woman who rules the mountains",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1557986411214",
                    "id": "14885670951",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1557986411214 || The woman who rules the mountains",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1557986411214",
                    "id": "14887381009",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1557986411214 || The woman who rules the mountains",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1557986411214",
                    "id": "14895580422",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1558333147974 || Can you trust your childhood memories?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1558333147974",
                    "id": "14908580202",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1558333147974 || Can you trust your childhood memories?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1558333147974",
                    "id": "14922740219",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1558333147974 || Can you trust your childhood memories?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1558333147974",
                    "id": "14926710196",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1558937644536 || Living in the shadow of an ageing nuclear reactor",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1558937644536",
                    "id": "14990620205",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1558937644536 || Living in the shadow of an ageing nuclear reactor",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1558937644536",
                    "id": "14992510089",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1558930901309 || How your life story shapes you",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1558930901309",
                    "id": "14998570514",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1558937644536 || Living in the shadow of an ageing nuclear reactor",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1558937644536",
                    "id": "15000600149",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1558930901309 || How your life story shapes you",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1558930901309",
                    "id": "15010530157",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1558930901309 || How your life story shapes you",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1558930901309",
                    "id": "15016520049",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1559188808789 || The dangers of ambition",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1559188808789",
                    "id": "15028300769",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1559188808789 || The dangers of ambition",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1559188808789",
                    "id": "15054400040",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1559188808789 || The dangers of ambition",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1559188808789",
                    "id": "15058200123",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1559783919524 || The food grown to withstand disaster",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1559783919524",
                    "id": "15106540509",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1559783919524 || The food grown to withstand disaster",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1559783919524",
                    "id": "15106820232",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1559783919524 || The food grown to withstand disaster",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1559783919524",
                    "id": "15114650041",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1559703196103 || The politics of women's workwear",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1559703196103",
                    "id": "15117641342",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1559703196103 || The politics of women's workwear",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1559703196103",
                    "id": "15125501076",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1559703196103 || The politics of women's workwear",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1559703196103",
                    "id": "15141840010",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1560225130379 || The films that defined Generation X",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1560225130379",
                    "id": "15172820607",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1560225130379 || The films that defined Generation X",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1560225130379",
                    "id": "15185650706",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1560320519926 || What makes a good father?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1560320519926",
                    "id": "15199940339",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1560320519926 || What makes a good father?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1560320519926",
                    "id": "15213570279",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1560225130379 || The films that defined Generation X",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1560225130379",
                    "id": "15216970726",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1560320519926 || What makes a good father?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1560320519926",
                    "id": "15217361542",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1567696509140 || Why Polish people hate rules",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1567696509140",
                    "id": "16260900108",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1567696509140 || Why Polish people hate rules",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1567696509140",
                    "id": "16264840210",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1567696509140 || Why Polish people hate rules",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1567696509140",
                    "id": "16267760048",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1569418830680 || The fight to stop the ivory poachers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1569418830680",
                    "id": "16627470708",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1569418830680 || The fight to stop the ivory poachers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1569418830680",
                    "id": "16637180511",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1569418830680 || The fight to stop the ivory poachers",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1569418830680",
                    "id": "16653220228",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570008937062 || How to grow a child's brain",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570008937062",
                    "id": "16708751014",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570007889433 || The quirky reason behind our wrong decisions",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570007889433",
                    "id": "16708900920",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570008937062 || How to grow a child's brain",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570008937062",
                    "id": "16724320856",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570008937062 || How to grow a child's brain",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570008937062",
                    "id": "16728360592",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1569929245048 || The sexist myths that won't die",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1569929245048",
                    "id": "16733360136",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570010412243 || The healing rooms inside future homes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570010412243",
                    "id": "16733960880",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1569929245048 || The sexist myths that won't die",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1569929245048",
                    "id": "16735200436",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570007889433 || The quirky reason behind our wrong decisions",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570007889433",
                    "id": "16736260238",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1569929245048 || The sexist myths that won't die",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1569929245048",
                    "id": "16738940708",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570010412243 || The healing rooms inside future homes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570010412243",
                    "id": "16741960087",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570116372554 || Is meat really that bad for you?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570116372554",
                    "id": "16742890309",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570116372554 || Is meat really that bad for you?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570116372554",
                    "id": "16744620394",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570116372554 || Is meat really that bad for you?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570116372554",
                    "id": "16747720594",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570102257745 || Is paper better than plastic?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570102257745",
                    "id": "16747920195",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570010412243 || The healing rooms inside future homes",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570010412243",
                    "id": "16749190056",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570191339319 || What each Joker tells us about the world he terrorises",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570191339319",
                    "id": "16752580257",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570188586808 || Three things that could kill the pilotless airliner",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570188586808",
                    "id": "16758150598",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570191339319 || What each Joker tells us about the world he terrorises",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570191339319",
                    "id": "16758210356",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570007889433 || The quirky reason behind our wrong decisions",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570007889433",
                    "id": "16759110009",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570102257745 || Is paper better than plastic?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570102257745",
                    "id": "16759320455",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570102257745 || Is paper better than plastic?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570102257745",
                    "id": "16761740068",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570188586808 || Three things that could kill the pilotless airliner",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570188586808",
                    "id": "16763750476",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570191339319 || What each Joker tells us about the world he terrorises",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570191339319",
                    "id": "16771750613",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570188586808 || Three things that could kill the pilotless airliner",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570188586808",
                    "id": "16785040309",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570538871205 || The 25 greatest hip-hop songs of all time",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570538871205",
                    "id": "16816700348",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570547377681 || Why are the French so stylish?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570547377681",
                    "id": "16820260858",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570548320309 || Why are the French so stylish?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570548320309",
                    "id": "16820350596",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570526887277 || Why this ship is spending a year frozen in the Arctic",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570526887277",
                    "id": "16820500189",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570538871205 || The 25 greatest hip-hop songs of all time",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570538871205",
                    "id": "16822140526",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570538871205 || The 25 greatest hip-hop songs of all time",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570538871205",
                    "id": "16822450247",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570526887277 || Why this ship is spending a year frozen in the Arctic",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570526887277",
                    "id": "16826080615",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570548320309 || Why are the French so stylish?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570548320309",
                    "id": "16829640139",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570613220991 || Where wealth is \u2018more taboo than sex\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570613220991",
                    "id": "16830670117",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570700474284 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570700474284",
                    "id": "16832720648",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570547377681 || Why are the French so stylish?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570547377681",
                    "id": "16833350414",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570624904206 || Why 150 is a \u2018magic number\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570624904206",
                    "id": "16834830212",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570632164615 || Why Juicy is the greatest hip-hop song",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570632164615",
                    "id": "16836590337",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570700474284 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570700474284",
                    "id": "16838331351",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570700722114 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570700722114",
                    "id": "16838840841",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570700111892 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570700111892",
                    "id": "16838870776",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570548320309 || Why are the French so stylish?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570548320309",
                    "id": "16839500233",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570613220991 || Where wealth is \u2018more taboo than sex\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570613220991",
                    "id": "16842530112",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570547377681 || Why are the French so stylish?",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570547377681",
                    "id": "16843080708",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570526887277 || Why this ship is spending a year frozen in the Arctic",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570526887277",
                    "id": "16843310033",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570632164615 || Why Juicy is the greatest hip-hop song",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570632164615",
                    "id": "16844250323",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570613220991 || Where wealth is \u2018more taboo than sex\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570613220991",
                    "id": "16844550097",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570700111892 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570700111892",
                    "id": "16845980529",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570700709659 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570700709659",
                    "id": "16846030948",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570620435666 || The British isle that doesn\u2019t belong",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570620435666",
                    "id": "16846290099",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570624904206 || Why 150 is a \u2018magic number\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570624904206",
                    "id": "16848260183",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570700616093 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570700616093",
                    "id": "16848390715",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570700709659 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570700709659",
                    "id": "16850080944",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570620435666 || The British isle that doesn\u2019t belong",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570620435666",
                    "id": "16855930076",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570700616093 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570700616093",
                    "id": "16855970732",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570621451935 || The British isle that doesn\u2019t belong",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570621451935",
                    "id": "16857560205",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570699958308 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570699958308",
                    "id": "16857650470",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570620435666 || The British isle that doesn\u2019t belong",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570620435666",
                    "id": "16857740059",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570700722114 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570700722114",
                    "id": "16857960829",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570699958308 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570699958308",
                    "id": "16858050868",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570621451935 || The British isle that doesn\u2019t belong",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570621451935",
                    "id": "16860100066",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570700474284 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570700474284",
                    "id": "16861450667",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570700616093 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570700616093",
                    "id": "16861980364",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570632164615 || Why Juicy is the greatest hip-hop song",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570632164615",
                    "id": "16863360418",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570700722114 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570700722114",
                    "id": "16865080773",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570700709659 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570700709659",
                    "id": "16865310643",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Headline click] || 1570700111892 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "clickHeadline___1570700111892",
                    "id": "16865450809",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570621451935 || The British isle that doesn\u2019t belong",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570621451935",
                    "id": "16865720085",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Invalid test] || 1570624904206 || Why 150 is a \u2018magic number\u2019",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "invalidTest___1570624904206",
                    "id": "16868990053",
                    "eventFilter": null
                }, {
                    "category": "other",
                    "name": "[Quality click] || 1570699958308 || Why the \u2018normal\u2019 brain is really a myth",
                    "eventType": "custom",
                    "viewId": null,
                    "apiName": "qualityClick___1570699958308",
                    "id": "16871090422",
                    "eventFilter": null
                }],
                "experimental": {
                    "trimPages": false
                },
                "revision": "473"
            },
            p = n(134),
            h = "initializeOptimizelyPreview";
        if (d.populateDirectiveData(), s.clientHasAlreadyInitialized()) return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");
        if (s.shouldBailForDesktopApp()) return void a.log("Main / Disabling because of desktop app.");
        if (s.conflictInObservingChanges()) return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");
        if (s.shouldLoadInnie()) l.registerFunction("getProjectId", (function() {
            return g.projectId
        })), f.addScriptAsync("https://app.optimizely.com/js/innie.js"), a.log("Main / Disabling in favor of the editor client.");
        else if (s.shouldLoadPreview()) {
            var _;
            _ = s.isSlave() ? window.optimizely : window.optimizely = window.optimizely || [], _.push({
                type: "load",
                data: g
            }), a.log("Main / Disabling in favor of the preview client."), n(148).setupPreviewGlobal(), n(148).pushToPreviewGlobal({
                type: "pushPreviewData",
                name: "liveCommitData",
                data: g
            }), s.isSlave() || (l.registerFunction("getProjectId", (function() {
                return g.projectId
            })), f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/4621041136/s/bbccom_prod/preview.js"))
        } else if (s.shouldBootstrapDataForPreview()) {
            l.registerFunction(h, (function(t) {
                e(t), l.unregisterFunction(h)
            }));
            var v = s.isSlave() ? PROJECT_ID_FOR_SLAVE_PREVIEW : l.getFunction("getProjectId")();
            c = t(s.getProjectToken(), v, s.getPreviewLayerIds()), f.addScriptSync(c), n(148).setupPreviewGlobal(), f.addScriptAsync("/dist/js/preview_ui.js")
        } else s.shouldBootstrapDataForEditor() ? (l.registerFunction(h, (function(t) {
            e(t), l.unregisterFunction(h)
        })), f.addScriptAsync(window.optimizely_editor_data_endpoint)) : s.shouldInitialize() && e(g);
        r.timeEnd("block")
    }
    try {
        i()
    } catch (e) {
        try {
            n(121).handleError(e)
        } catch (e) {
            console.log(e)
        }
    }
}), (function(e, t, n) {
    function i() {
        s();
        var e = k.getRumData();
        return e = _.pickBy(e, (function(e) {
            return !_.isUndefined(e)
        })), a(e)
    }

    function r(e) {
        var t = L.getPromise("RUM_FIRST_BEACON");
        return t ? t.then(e) : m.makeAsyncRequest("RUM_FIRST_BEACON", e)
    }

    function a(e) {
        return _.isEmpty(e) ? b.resolve() : r((function() {
            return O.request({
                url: G,
                method: "POST",
                data: e,
                withCredentials: !0
            }).then((function(e) {
                return m.resolveRequest("RUM_FIRST_BEACON", e), e
            }))["catch"]((function(e) {
                throw A.error("POST to client-rum failed:", e), m.rejectRequest("RUM_FIRST_BEACON", e), e
            }))
        }))
    }

    function o() {
        var e = y.getCurrentScript();
        if (e) return e.src
    }

    function s() {
        var e = {
            id: k.getRumId(),
            v: z,
            account: V.getAccountId(),
            project: V.getSnippetId() || V.getProjectId(),
            snippet: V.getSnippetId(),
            revision: V.getRevision(),
            clientVersion: "0.129.0",
            hasSlave: !1,
            wxhr: !0
        };
        try {
            e["numBehaviorEvents"] = E.getEvents().length
        } catch (e) {
            A.debug("Unable to get behavior events for RUM:", e)
        }
        _.assign(e, u(), d()), S.dispatch(N.SET_RUM_DATA, {
            data: e
        })
    }

    function u() {
        var e = R.getGlobal("performance");
        if (e) {
            var t, n = k.getScriptSrc();
            try {
                if (n) {
                    A.debug("Using derived script src: ", n);
                    var i = e.getEntriesByName(n);
                    i.length > 0 && (t = i[0])
                }
                if (!t) {
                    var r = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;
                    A.debug("Scanning resource timing entries with regex");
                    var a = e.getEntriesByType("resource");
                    t = _.find(a, (function(e) {
                        return r.test(e.name)
                    }))
                }
                if (t) return _.mapValues(C.ResourceTimingAttributes, (function(e, n) {
                    var i = t[n];
                    return "number" == typeof i ? Math.round(1e3 * (i || 0)) / 1e3 : "serverTiming" === n ? i || [] : void 0
                }))
            } catch (e) {
                return
            }
        }
    }

    function c() {
        try {
            return !y.querySelector("body")
        } catch (e) {
            return null
        }
    }

    function l() {
        try {
            R.getGlobal("requestAnimationFrame")((function() {
                var e = k.getRumData().timebase;
                S.dispatch(N.SET_RUM_DATA, {
                    data: {
                        render: I.now() - (e || 0)
                    }
                })
            }))
        } catch (e) {
            return
        }
    }

    function d() {
        return x.getDurationsFor(_.values(C.RUMPerformanceTimingAttributes))
    }

    function f() {
        var e = T.keys(),
            t = _.filter(_.map(e, (function(e) {
                var t = D.getStorageKeyFromKey(e);
                return t ? {
                    key: e,
                    isForeign: D.isForeignKey(e),
                    category: t,
                    size: e.length + T.getItem(e).length
                } : null
            }))),
            n = _.reduce(t, (function(e, t) {
                var n = t.key,
                    i = D.getIdFromKey(n);
                if (!i) return e;
                var r = t.isForeign ? e.foreign : e.local;
                return r[i] = !0, e
            }), {
                local: {},
                foreign: {}
            }),
            i = _.chain(t).filter({
                isForeign: !0
            }).reduce((function(e, t) {
                var n = t.key.split("_")[0];
                return e[n] = !0, e
            }), {}).value(),
            r = {
                local: 0,
                foreign: 0
            },
            a = {
                local: {},
                foreign: {}
            };
        _.forEach(t, (function(e) {
            var t = e.isForeign ? "foreign" : "local";
            r[t] += e.size, a[t][e.category] || (a[t][e.category] = 0), a[t][e.category] += e.size
        }));
        var o = {
                numKeys: T.allKeys().length,
                sizeKeys: T.allKeys().toString().length,
                sizeValues: T.allValues().toString().length,
                idCounts: {
                    local: _.keys(n.local).length,
                    foreign: _.keys(n.foreign).length
                },
                foreignOriginCount: _.keys(i).length,
                byteTotals: r,
                byteTotalsByCategory: a
            },
            s = w.estimateStorage();
        return s.then((function(e) {
            return _.assign(o, {
                storageEstimate: e
            })
        }))
    }

    function g() {
        var e = R.getGlobal("performance"),
            t = e ? e.timing : {},
            n = x.getMarks() || {},
            i = k.getApiData(),
            r = k.getDOMObservationData(),
            o = U.get("state").getActiveExperimentIds(),
            s = y.parseUri(k.getScriptSrc()),
            u = k.getRumData() || {},
            c = u.extras || {};
        _.assign(c, {
            apiCalls: i,
            DOMObservationData: r,
            paintTimings: h(),
            activeExperimentIds: o,
            numPages: M.getNumberOfPages(),
            snippet: {
                scheme: s.protocol.slice(0, -1),
                host: s.host,
                path: s.pathname
            },
            networkInfo: p(),
            experimental: V.getExperimental()
        });
        var l = R.getGlobal("Prototype");
        l && !_.isUndefined(l.Version) && (c.prototypeJS = l.Version);
        var d = !1;
        d = !0;
        var g = F.getFrames();
        g.length && (c.xdFramesLoaded = g.length);
        var v = {
            id: k.getRumId(),
            v: z,
            project: V.getSnippetId() || V.getProjectId(),
            navigationTimings: t,
            userTimings: n,
            xd: d,
            apis: _.keys(i),
            extras: c
        };
        f().then((function(e) {
            var t = _.assign(v, {
                lsMetrics: e
            });
            a(t)
        }))
    }

    function p() {
        var e = R.getGlobal("navigator");
        if (e && e.connection) return _.pick(e.connection, ["downlink", "rtt", "effectiveType"])
    }

    function h() {
        var e = R.getGlobal("performance");
        if (e) try {
            var t = e.getEntriesByType("paint");
            if (_.isEmpty(t)) return;
            return _.reduce(t, (function(e, t) {
                return e[t.name] = Math.round(t.startTime), e
            }), {})
        } catch (e) {
            return
        }
    }
    var _ = n(2),
        v = n(5),
        m = n(6),
        E = n(72),
        I = n(24),
        y = n(81),
        S = n(9),
        T = n(82).LocalStorage,
        A = n(23),
        w = n(90),
        b = n(12).Promise,
        D = n(75),
        R = n(41),
        O = n(91),
        N = n(7),
        C = n(25),
        P = n(16),
        L = P.get("stores/async_request"),
        V = P.get("stores/global"),
        k = P.get("stores/rum"),
        x = P.get("stores/performance"),
        F = P.get("stores/xdomain"),
        M = P.get("stores/view_data"),
        U = n(93),
        G = "https://rum.optimizely.com/rum",
        B = 3e3,
        z = "1.0",
        j = .01;
    t.initialize = function() {
        var e, t = v.generate().replace(/-/g, "");
        e = Math.random() < j;
        var n = o();
        e && (S.dispatch(N.SET_RUM_DATA, {
            id: t,
            RumHost: G,
            inRumSample: e,
            src: n,
            data: {
                id: t,
                sync: c(),
                timebase: I.now(),
                sampleRate: j,
                url: n
            }
        }), l())
    }, t.queueBeacons = function() {
        return k.getSampleRum() ? (y.isLoaded() ? R.setTimeout(g, B) : R.addEventListener("load", g), new b(function(e, t) {
            R.setTimeout((function() {
                i().then(e, t)
            }), B)
        }).catch((function(e) {
            A.warn("RUM / Error sending data:", e)
        }))) : b.resolve()
    }
}), (function(e, t, n) {
    e.exports = n(3)._.noConflict()
}), (function(e, t, n) {
    (function(e, n) {
        (function() {
            function i(e, t) {
                return e.set(t[0], t[1]), e
            }

            function r(e, t) {
                return e.add(t), e
            }

            function a(e, t) {
                return u(De(e), gn)
            }

            function o(e, t) {
                return !!e.length && f(e, t, 0) > -1
            }

            function s(e, t, n) {
                for (var i = -1, r = e.length; ++i < r;)
                    if (n(t, e[i])) return !0;
                return !1
            }

            function u(e, t) {
                for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
                return e
            }

            function c(e, t, n) {
                for (var i = -1, r = e.length; ++i < r;) {
                    var a = e[i],
                        o = t(a);
                    if (null != o && (s === An ? o === o : n(o, s))) var s = o,
                        u = a
                }
                return u
            }

            function l(e, t, n, i) {
                var r;
                return n(e, (function(e, n, a) {
                    if (t(e, n, a)) return r = i ? n : e, !1
                })), r
            }

            function d(e, t, n) {
                for (var i = e.length, r = n ? i : -1; n ? r-- : ++r < i;)
                    if (t(e[r], r, e)) return r;
                return -1
            }

            function f(e, t, n) {
                if (t !== t) return I(e, n);
                for (var i = n - 1, r = e.length; ++i < r;)
                    if (e[i] === t) return i;
                return -1
            }

            function g(e, t, n, i, r) {
                return r(e, (function(e, r, a) {
                    n = i ? (i = !1, e) : t(n, e, r, a)
                })), n
            }

            function p(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }

            function h(e) {
                return function(t) {
                    return e(t)
                }
            }

            function _(e, t) {
                return Ee(t, (function(t) {
                    return e[t]
                }))
            }

            function v(e) {
                return e && e.Object === Object ? e : null
            }

            function m(e, t) {
                if (e !== t) {
                    var n = null === e,
                        i = e === An,
                        r = e === e,
                        a = null === t,
                        o = t === An,
                        s = t === t;
                    if (e > t && !a || !r || n && !o && s || i && s) return 1;
                    if (e < t && !n || !s || a && !i && r || o && r) return -1
                }
                return 0
            }

            function E(e) {
                return pi[e]
            }

            function I(e, t, n) {
                for (var i = e.length, r = t + (n ? 0 : -1); n ? r-- : ++r < i;) {
                    var a = e[r];
                    if (a !== a) return r
                }
                return -1
            }

            function y(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (e) {}
                return t
            }

            function S(e, t) {
                return e = "number" == typeof e || di.test(e) ? +e : -1, t = null == t ? Vn : t, e > -1 && e % 1 == 0 && e < t
            }

            function T(e) {
                for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                return n
            }

            function A(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e, i) {
                    n[++t] = [i, e]
                })), n
            }

            function w(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }

            function b(e) {
                if (jt(e) && !dr(e)) {
                    if (e instanceof D) return e;
                    if (Di.call(e, "__wrapped__")) return tt(e)
                }
                return new D(e)
            }

            function D(e, t) {
                this.e = e, this.u = [], this.l = !!t
            }

            function R() {}

            function O(e, t) {
                return C(e, t) && delete e[t]
            }

            function N(e, t) {
                if (Wi) {
                    var n = e[t];
                    return n === Rn ? An : n
                }
                return Di.call(e, t) ? e[t] : An
            }

            function C(e, t) {
                return Wi ? e[t] !== An : Di.call(e, t)
            }

            function P(e, t, n) {
                e[t] = Wi && n === An ? Rn : n
            }

            function L(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function V() {
                this.d = {
                    hash: new R,
                    map: Yi ? new Yi : [],
                    string: new R
                }
            }

            function k(e) {
                var t = this.d;
                return Ze(e) ? O("string" == typeof e ? t.string : t.hash, e) : Yi ? t.map["delete"](e) : X(t.map, e)
            }

            function x(e) {
                var t = this.d;
                return Ze(e) ? N("string" == typeof e ? t.string : t.hash, e) : Yi ? t.map.get(e) : W(t.map, e)
            }

            function F(e) {
                var t = this.d;
                return Ze(e) ? C("string" == typeof e ? t.string : t.hash, e) : Yi ? t.map.has(e) : Q(t.map, e)
            }

            function M(e, t) {
                var n = this.d;
                return Ze(e) ? P("string" == typeof e ? n.string : n.hash, e, t) : Yi ? n.map.set(e, t) : J(n.map, e, t), this
            }

            function U(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.d = new L; ++t < n;) this.push(e[t])
            }

            function G(e, t) {
                var n = e.d;
                if (Ze(t)) {
                    var i = n.d,
                        r = "string" == typeof t ? i.string : i.hash;
                    return r[t] === Rn
                }
                return n.has(t)
            }

            function B(e) {
                var t = this.d;
                if (Ze(e)) {
                    var n = t.d,
                        i = "string" == typeof e ? n.string : n.hash;
                    i[e] = Rn
                } else t.set(e, Rn)
            }

            function z(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function j() {
                this.d = {
                    array: [],
                    map: null
                }
            }

            function H(e) {
                var t = this.d,
                    n = t.array;
                return n ? X(n, e) : t.map["delete"](e)
            }

            function K(e) {
                var t = this.d,
                    n = t.array;
                return n ? W(n, e) : t.map.get(e)
            }

            function Y(e) {
                var t = this.d,
                    n = t.array;
                return n ? Q(n, e) : t.map.has(e)
            }

            function q(e, t) {
                var n = this.d,
                    i = n.array;
                i && (i.length < bn - 1 ? J(i, e, t) : (n.array = null, n.map = new L(i)));
                var r = n.map;
                return r && r.set(e, t), this
            }

            function X(e, t) {
                var n = $(e, t);
                if (n < 0) return !1;
                var i = e.length - 1;
                return n == i ? e.pop() : zi.call(e, n, 1), !0
            }

            function W(e, t) {
                var n = $(e, t);
                return n < 0 ? An : e[n][1]
            }

            function Q(e, t) {
                return $(e, t) > -1
            }

            function $(e, t) {
                for (var n = e.length; n--;)
                    if (Nt(e[n][0], t)) return n;
                return -1
            }

            function J(e, t, n) {
                var i = $(e, t);
                i < 0 ? e.push([t, n]) : e[i][1] = n
            }

            function Z(e, t, n, i) {
                return e === An || Nt(e, wi[n]) && !Di.call(i, n) ? t : e
            }

            function ee(e, t, n) {
                (n === An || Nt(e[t], n)) && ("number" != typeof t || n !== An || t in e) || (e[t] = n)
            }

            function te(e, t, n) {
                var i = e[t];
                Di.call(e, t) && Nt(i, n) && (n !== An || t in e) || (e[t] = n)
            }

            function ne(e, t) {
                return e && ir(t, sn(t), e)
            }

            function ie(e) {
                return "function" == typeof e ? e : _n
            }

            function re(e, t, n, i, r, a, o) {
                var s;
                if (i && (s = a ? i(e, r, a, o) : i(e)), s !== An) return s;
                if (!zt(e)) return e;
                var u = dr(e);
                if (u) {
                    if (s = We(e), !t) return De(e, s)
                } else {
                    var c = Xe(e),
                        l = c == Gn || c == Bn;
                    if (fr(e)) return Ne(e, t);
                    if (c == Hn || c == kn || l && !a) {
                        if (y(e)) return a ? e : {};
                        if (s = Qe(l ? {} : e), !t) return s = ne(s, e), n ? Me(e, s) : s
                    } else {
                        if (!gi[c]) return a ? e : {};
                        s = $e(e, c, t)
                    }
                }
                o || (o = new z);
                var d = o.get(e);
                return d ? d : (o.set(e, s), (u ? tr : fe)(e, (function(r, a) {
                    te(s, a, re(r, t, n, i, a, e, o))
                })), n && !u ? Me(e, s) : s)
            }

            function ae(e) {
                return zt(e) ? Gi(e) : {}
            }

            function oe(e, t, n) {
                if ("function" != typeof e) throw new TypeError(Dn);
                return setTimeout((function() {
                    e.apply(An, n)
                }), t)
            }

            function se(e, t, n, i) {
                var r = -1,
                    a = o,
                    u = !0,
                    c = e.length,
                    l = [],
                    d = t.length;
                if (!c) return l;
                n && (t = Ee(t, h(n))), i ? (a = s, u = !1) : t.length >= bn && (a = G, u = !1, t = new U(t));
                e: for (; ++r < c;) {
                    var f = e[r],
                        g = n ? n(f) : f;
                    if (u && g === g) {
                        for (var p = d; p--;)
                            if (t[p] === g) continue e;
                        l.push(f)
                    } else a(t, g, i) || l.push(f)
                }
                return l
            }

            function ue(e, t) {
                var n = !0;
                return tr(e, (function(e, i, r) {
                    return n = !!t(e, i, r)
                })), n
            }

            function ce(e, t) {
                var n = [];
                return tr(e, (function(e, i, r) {
                    t(e, i, r) && n.push(e)
                })), n
            }

            function le(e, t, n, i) {
                i || (i = []);
                for (var r = -1, a = e.length; ++r < a;) {
                    var o = e[r];
                    t > 0 && Vt(o) && (n || dr(o) || Pt(o)) ? t > 1 ? le(o, t - 1, n, i) : u(i, o) : n || (i[i.length] = o)
                }
                return i
            }

            function de(e, t) {
                return null == e ? e : nr(e, t, un)
            }

            function fe(e, t) {
                return e && nr(e, t, sn)
            }

            function ge(e, t) {
                return ce(t, (function(t) {
                    return Gt(e[t])
                }))
            }

            function pe(e, t, n, i, r) {
                return e === t || (null == e || null == t || !zt(e) && !jt(t) ? e !== e && t !== t : he(e, t, pe, n, i, r))
            }

            function he(e, t, n, i, r, a) {
                var o = dr(e),
                    s = dr(t),
                    u = xn,
                    c = xn;
                o || (u = Ni.call(e), u = u == kn ? Hn : u), s || (c = Ni.call(t), c = c == kn ? Hn : c);
                var l = u == Hn && !y(e),
                    d = c == Hn && !y(t),
                    f = u == c;
                a || (a = []);
                var g = _t(a, (function(t) {
                    return t[0] === e
                }));
                if (g && g[1]) return g[1] == t;
                if (a.push([e, t]), f && !l) {
                    var p = o || $t(e) ? He(e, t, n, i, r, a) : Ke(e, t, u, n, i, r, a);
                    return a.pop(), p
                }
                if (!(r & Pn)) {
                    var h = l && Di.call(e, "__wrapped__"),
                        _ = d && Di.call(t, "__wrapped__");
                    if (h || _) {
                        var p = n(h ? e.value() : e, _ ? t.value() : t, i, r, a);
                        return a.pop(), p
                    }
                }
                if (!f) return !1;
                var p = Ye(e, t, n, i, r, a);
                return a.pop(), p
            }

            function _e(e) {
                var t = typeof e;
                return "function" == t ? e : null == e ? _n : ("object" == t ? Ie : we)(e)
            }

            function ve(e) {
                return Hi(Object(e))
            }

            function me(e) {
                e = null == e ? e : Object(e);
                var t = [];
                for (var n in e) t.push(n);
                return t
            }

            function Ee(e, t) {
                var n = -1,
                    i = Lt(e) ? Array(e.length) : [];
                return tr(e, (function(e, r, a) {
                    i[++n] = t(e, r, a)
                })), i
            }

            function Ie(e) {
                var t = sn(e);
                return function(n) {
                    var i = t.length;
                    if (null == n) return !i;
                    for (n = Object(n); i--;) {
                        var r = t[i];
                        if (!(r in n && pe(e[r], n[r], An, Cn | Pn))) return !1
                    }
                    return !0
                }
            }

            function ye(e, t, n, i, r) {
                if (e !== t) {
                    var a = dr(t) || $t(t) ? An : un(t);
                    tr(a || t, (function(o, s) {
                        if (a && (s = o, o = t[s]), zt(o)) r || (r = new z), Se(e, t, s, n, ye, i, r);
                        else {
                            var u = i ? i(e[s], o, s + "", e, t, r) : An;
                            u === An && (u = o), ee(e, s, u)
                        }
                    }))
                }
            }

            function Se(e, t, n, i, r, a, o) {
                var s = e[n],
                    u = t[n],
                    c = o.get(u);
                if (c) return void ee(e, n, c);
                var l = a ? a(s, u, n + "", e, t, o) : An,
                    d = l === An;
                d && (l = u, dr(u) || $t(u) ? dr(s) ? l = s : Vt(s) ? l = De(s) : (d = !1, l = re(u, !a)) : Xt(u) || Pt(u) ? Pt(s) ? l = tn(s) : !zt(s) || i && Gt(s) ? (d = !1, l = re(u, !a)) : l = s : d = !1), o.set(u, l), d && r(l, u, i, a, o), o["delete"](u), ee(e, n, l)
            }

            function Te(e, t) {
                return e = Object(e), It(t, (function(t, n) {
                    return n in e && (t[n] = e[n]), t
                }), {})
            }

            function Ae(e, t) {
                var n = {};
                return de(e, (function(e, i) {
                    t(e, i) && (n[i] = e)
                })), n
            }

            function we(e) {
                return function(t) {
                    return null == t ? An : t[e]
                }
            }

            function be(e, t, n) {
                var i = -1,
                    r = e.length;
                t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var a = Array(r); ++i < r;) a[i] = e[i + t];
                return a
            }

            function De(e) {
                return be(e, 0, e.length)
            }

            function Re(e, t) {
                var n;
                return tr(e, (function(e, i, r) {
                    return n = t(e, i, r), !n
                })), !!n
            }

            function Oe(e, t) {
                var n = e;
                return It(t, (function(e, t) {
                    return t.func.apply(t.thisArg, u([e], t.args))
                }), n)
            }

            function Ne(e, t) {
                if (t) return e.slice();
                var n = new e.constructor(e.length);
                return e.copy(n), n
            }

            function Ce(e) {
                var t = new e.constructor(e.byteLength);
                return new xi(t).set(new xi(e)), t
            }

            function Pe(e) {
                return It(A(e), i, new e.constructor)
            }

            function Le(e) {
                var t = new e.constructor(e.source, ci.exec(e));
                return t.lastIndex = e.lastIndex, t
            }

            function Ve(e) {
                return It(w(e), r, new e.constructor)
            }

            function ke(e) {
                return er ? Object(er.call(e)) : {}
            }

            function xe(e, t) {
                var n = t ? Ce(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length)
            }

            function Fe(e, t, n, i) {
                n || (n = {});
                for (var r = -1, a = t.length; ++r < a;) {
                    var o = t[r],
                        s = i ? i(n[o], e[o], o, n, e) : e[o];
                    te(n, o, s)
                }
                return n
            }

            function Me(e, t) {
                return ir(e, ar(e), t)
            }

            function Ue(e) {
                return Dt((function(t, n) {
                    var i = -1,
                        r = n.length,
                        a = r > 1 ? n[r - 1] : An;
                    for (a = "function" == typeof a ? (r--, a) : An, t = Object(t); ++i < r;) {
                        var o = n[i];
                        o && e(t, o, i, a)
                    }
                    return t
                }))
            }

            function Ge(e, t) {
                return function(n, i) {
                    if (null == n) return n;
                    if (!Lt(n)) return e(n, i);
                    for (var r = n.length, a = t ? r : -1, o = Object(n);
                        (t ? a-- : ++a < r) && i(o[a], a, o) !== !1;);
                    return n
                }
            }

            function Be(e) {
                return function(t, n, i) {
                    for (var r = -1, a = Object(t), o = i(t), s = o.length; s--;) {
                        var u = o[e ? s : ++r];
                        if (n(a[u], u, a) === !1) break
                    }
                    return t
                }
            }

            function ze(e) {
                return function() {
                    var t = arguments,
                        n = ae(e.prototype),
                        i = e.apply(n, t);
                    return zt(i) ? i : n
                }
            }

            function je(e, t, n, i) {
                function r() {
                    for (var t = -1, s = arguments.length, u = -1, c = i.length, l = Array(c + s), d = this && this !== Ti && this instanceof r ? o : e; ++u < c;) l[u] = i[u];
                    for (; s--;) l[u++] = arguments[++t];
                    return d.apply(a ? n : this, l)
                }
                if ("function" != typeof e) throw new TypeError(Dn);
                var a = t & On,
                    o = ze(e);
                return r
            }

            function He(e, t, n, i, r, a) {
                var o = -1,
                    s = r & Pn,
                    u = r & Cn,
                    c = e.length,
                    l = t.length;
                if (c != l && !(s && l > c)) return !1;
                for (var d = !0; ++o < c;) {
                    var f, g = e[o],
                        p = t[o];
                    if (f !== An) {
                        if (f) continue;
                        d = !1;
                        break
                    }
                    if (u) {
                        if (!Re(t, (function(e) {
                                return g === e || n(g, e, i, r, a)
                            }))) {
                            d = !1;
                            break
                        }
                    } else if (g !== p && !n(g, p, i, r, a)) {
                        d = !1;
                        break
                    }
                }
                return d
            }

            function Ke(e, t, n, i, r, a, o) {
                switch (n) {
                    case Fn:
                    case Mn:
                        return +e == +t;
                    case Un:
                        return e.name == t.name && e.message == t.message;
                    case jn:
                        return e != +e ? t != +t : e == +t;
                    case Kn:
                    case qn:
                        return e == t + ""
                }
                return !1
            }

            function Ye(e, t, n, i, r, a) {
                var o = r & Pn,
                    s = sn(e),
                    u = s.length,
                    c = sn(t),
                    l = c.length;
                if (u != l && !o) return !1;
                for (var d = u; d--;) {
                    var f = s[d];
                    if (!(o ? f in t : Di.call(t, f))) return !1
                }
                for (var g = !0, p = o; ++d < u;) {
                    f = s[d];
                    var h, _ = e[f],
                        v = t[f];
                    if (!(h === An ? _ === v || n(_, v, i, r, a) : h)) {
                        g = !1;
                        break
                    }
                    p || (p = "constructor" == f)
                }
                if (g && !p) {
                    var m = e.constructor,
                        E = t.constructor;
                    m != E && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof E && E instanceof E) && (g = !1)
                }
                return g
            }

            function qe(e, t) {
                var n = e[t];
                return Kt(n) ? n : An
            }

            function Xe(e) {
                return Ni.call(e)
            }

            function We(e) {
                var t = e.length,
                    n = e.constructor(t);
                return t && "string" == typeof e[0] && Di.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }

            function Qe(e) {
                return "function" != typeof e.constructor || et(e) ? {} : ae(Mi(e))
            }

            function $e(e, t, n) {
                var i = e.constructor;
                switch (t) {
                    case Qn:
                        return Ce(e);
                    case Fn:
                    case Mn:
                        return new i(+e);
                    case $n:
                    case Jn:
                    case Zn:
                    case ei:
                    case ti:
                    case ni:
                    case ii:
                    case ri:
                    case ai:
                        return xe(e, n);
                    case zn:
                        return Pe(e);
                    case jn:
                    case qn:
                        return new i(e);
                    case Kn:
                        return Le(e);
                    case Yn:
                        return Ve(e);
                    case Xn:
                        return ke(e)
                }
            }

            function Je(e) {
                var t = e ? e.length : An;
                return Bt(t) && (dr(e) || Qt(e) || Pt(e)) ? p(t, String) : null
            }

            function Ze(e) {
                var t = typeof e;
                return "number" == t || "boolean" == t || "string" == t && "__proto__" != e || null == e
            }

            function et(e) {
                var t = e && e.constructor,
                    n = "function" == typeof t && t.prototype || wi;
                return e === n
            }

            function tt(e) {
                var t = new D(e.e, e.l);
                return t.u = De(e.u), t
            }

            function nt(e) {
                return ce(e, Boolean)
            }

            function it(e, t) {
                return e && e.length ? d(e, _e(t, 3)) : -1
            }

            function rt(e) {
                var t = e ? e.length : 0;
                return t ? le(e, 1) : []
            }

            function at(e) {
                var t = e ? e.length : 0;
                return t ? le(e, Ln) : []
            }

            function ot(e) {
                return e ? e[0] : An
            }

            function st(e, t, n) {
                var i = e ? e.length : 0;
                n = "number" == typeof n ? n < 0 ? Ki(i + n, 0) : n : 0;
                for (var r = (n || 0) - 1, a = t === t; ++r < i;) {
                    var o = e[r];
                    if (a ? o === t : o !== o) return r
                }
                return -1
            }

            function ut(e) {
                var t = e ? e.length : 0;
                return t ? e[t - 1] : An
            }

            function ct(e, t, n) {
                var i = e ? e.length : 0;
                return t = null == t ? 0 : +t, n = n === An ? i : +n, i ? be(e, t, n) : []
            }

            function lt(e) {
                var t = b(e);
                return t.l = !0, t
            }

            function dt(e, t) {
                return t(e), e
            }

            function ft(e, t) {
                return t(e)
            }

            function gt() {
                return Oe(this.e, this.u)
            }

            function pt(e, t, n) {
                return t = n ? An : t, ue(e, _e(t))
            }

            function ht(e, t) {
                return ce(e, _e(t))
            }

            function _t(e, t) {
                return l(e, _e(t), tr)
            }

            function vt(e, t) {
                return tr(e, ie(t))
            }

            function mt(e, t, n, i) {
                e = Lt(e) ? e : gn(e), n = n && !i ? gr(n) : 0;
                var r = e.length;
                return n < 0 && (n = Ki(r + n, 0)), Qt(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && f(e, t, n) > -1
            }

            function Et(e, t) {
                return Ee(e, _e(t))
            }

            function It(e, t, n) {
                return g(e, _e(t), n, arguments.length < 3, tr)
            }

            function yt(e) {
                return null == e ? 0 : (e = Lt(e) ? e : sn(e), e.length)
            }

            function St(e, t, n) {
                return t = n ? An : t, Re(e, _e(t))
            }

            function Tt(e, t) {
                var n = 0;
                return t = _e(t), Ee(Ee(e, (function(e, i, r) {
                    return {
                        value: e,
                        index: n++,
                        criteria: t(e, i, r)
                    }
                })).sort((function(e, t) {
                    return m(e.criteria, t.criteria) || e.index - t.index
                })), we("value"))
            }

            function At(e, t) {
                var n;
                if ("function" != typeof t) throw new TypeError(Dn);
                return e = gr(e),
                    function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = An), n
                    }
            }

            function wt(e) {
                if ("function" != typeof e) throw new TypeError(Dn);
                return function() {
                    return !e.apply(this, arguments)
                }
            }

            function bt(e) {
                return At(2, e)
            }

            function Dt(e, t) {
                if ("function" != typeof e) throw new TypeError(Dn);
                return t = Ki(t === An ? e.length - 1 : gr(t), 0),
                    function() {
                        for (var n = arguments, i = -1, r = Ki(n.length - t, 0), a = Array(r); ++i < r;) a[i] = n[t + i];
                        var o = Array(t + 1);
                        for (i = -1; ++i < t;) o[i] = n[i];
                        return o[t] = a, e.apply(this, o)
                    }
            }

            function Rt(e) {
                return zt(e) ? dr(e) ? De(e) : ir(e, sn(e)) : e
            }

            function Ot(e) {
                return re(e, !0, !0)
            }

            function Nt(e, t) {
                return e === t || e !== e && t !== t
            }

            function Ct(e, t) {
                return e > t
            }

            function Pt(e) {
                return Vt(e) && Di.call(e, "callee") && (!Bi.call(e, "callee") || Ni.call(e) == kn)
            }

            function Lt(e) {
                return null != e && Bt(rr(e)) && !Gt(e)
            }

            function Vt(e) {
                return jt(e) && Lt(e)
            }

            function kt(e) {
                return e === !0 || e === !1 || jt(e) && Ni.call(e) == Fn
            }

            function xt(e) {
                return jt(e) && Ni.call(e) == Mn
            }

            function Ft(e) {
                if (Lt(e) && (dr(e) || Qt(e) || Gt(e.splice) || Pt(e))) return !e.length;
                for (var t in e)
                    if (Di.call(e, t)) return !1;
                return !0
            }

            function Mt(e, t) {
                return pe(e, t)
            }

            function Ut(e) {
                return "number" == typeof e && ji(e)
            }

            function Gt(e) {
                var t = zt(e) ? Ni.call(e) : "";
                return t == Gn || t == Bn
            }

            function Bt(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Vn
            }

            function zt(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function jt(e) {
                return !!e && "object" == typeof e
            }

            function Ht(e) {
                return qt(e) && e != +e
            }

            function Kt(e) {
                return null != e && (Gt(e) ? Pi.test(bi.call(e)) : jt(e) && (y(e) ? Pi : li).test(e))
            }

            function Yt(e) {
                return null === e
            }

            function qt(e) {
                return "number" == typeof e || jt(e) && Ni.call(e) == jn
            }

            function Xt(e) {
                if (!jt(e) || Ni.call(e) != Hn || y(e)) return !1;
                var t = Mi(e);
                if (null === t) return !0;
                var n = t.constructor;
                return "function" == typeof n && n instanceof n && bi.call(n) == Oi
            }

            function Wt(e) {
                return zt(e) && Ni.call(e) == Kn
            }

            function Qt(e) {
                return "string" == typeof e || !dr(e) && jt(e) && Ni.call(e) == qn
            }

            function $t(e) {
                return jt(e) && Bt(e.length) && !!fi[Ni.call(e)]
            }

            function Jt(e) {
                return e === An
            }

            function Zt(e, t) {
                return e < t
            }

            function en(e) {
                return Lt(e) ? e.length ? De(e) : [] : gn(e)
            }

            function tn(e) {
                return ir(e, un(e))
            }

            function nn(e) {
                return "string" == typeof e ? e : null == e ? "" : e + ""
            }

            function rn(e, t) {
                var n = ae(e);
                return t ? hr(n, t) : n
            }

            function an(e, t) {
                return e && fe(e, ie(t))
            }

            function on(e, t) {
                return null != e && Di.call(e, t)
            }

            function sn(e) {
                var t = et(e);
                if (!t && !Lt(e)) return ve(e);
                var n = Je(e),
                    i = !!n,
                    r = n || [],
                    a = r.length;
                for (var o in e) !Di.call(e, o) || i && ("length" == o || S(o, a)) || t && "constructor" == o || r.push(o);
                return r
            }

            function un(e) {
                for (var t = -1, n = et(e), i = me(e), r = i.length, a = Je(e), o = !!a, s = a || [], u = s.length; ++t < r;) {
                    var c = i[t];
                    o && ("length" == c || S(c, u)) || "constructor" == c && (n || !Di.call(e, c)) || s.push(c)
                }
                return s
            }

            function cn(e, t) {
                var n = {};
                return t = _e(t, 3), fe(e, (function(e, i, r) {
                    n[i] = t(e, i, r)
                })), n
            }

            function ln(e, t) {
                return t = _e(t), Ae(e, (function(e, n) {
                    return !t(e, n)
                }))
            }

            function dn(e, t) {
                return null == e ? {} : Ae(e, _e(t))
            }

            function fn(e, t, n) {
                var i = null == e ? An : e[t];
                return i === An && (i = n), Gt(i) ? i.call(e) : i
            }

            function gn(e) {
                return e ? _(e, sn(e)) : []
            }

            function pn(e) {
                return e = nn(e), e && si.test(e) ? e.replace(oi, E) : e
            }

            function hn(e) {
                return function() {
                    return e
                }
            }

            function _n(e) {
                return e
            }

            function vn(e) {
                return Ie(hr({}, e))
            }

            function mn(e, t, n) {
                var i = sn(t),
                    r = ge(t, i);
                null != n || zt(t) && (r.length || !i.length) || (n = t, t = e, e = this, r = ge(t, sn(t)));
                var a = !(zt(n) && "chain" in n) || n.chain,
                    o = Gt(e);
                return tr(r, (function(n) {
                    var i = t[n];
                    e[n] = i, o && (e.prototype[n] = function() {
                        var t = this.l;
                        if (a || t) {
                            var n = e(this.e),
                                r = n.u = De(this.u);
                            return r.push({
                                func: i,
                                args: arguments,
                                thisArg: e
                            }), n.l = t, n
                        }
                        return i.apply(e, u([this.value()], arguments))
                    })
                })), e
            }

            function En() {
                return Ti._ === this && (Ti._ = Ci), this
            }

            function In() {}

            function yn(e) {
                var t = ++Ri;
                return nn(e) + t
            }

            function Sn(e) {
                return e && e.length ? c(e, _n, Ct) : An
            }

            function Tn(e) {
                return e && e.length ? c(e, _n, Zt) : An
            }
            var An, wn = "4.6.1",
                bn = 200,
                Dn = "Expected a function",
                Rn = "__lodash_hash_undefined__",
                On = 1,
                Nn = 32,
                Cn = 1,
                Pn = 2,
                Ln = 1 / 0,
                Vn = 9007199254740991,
                kn = "[object Arguments]",
                xn = "[object Array]",
                Fn = "[object Boolean]",
                Mn = "[object Date]",
                Un = "[object Error]",
                Gn = "[object Function]",
                Bn = "[object GeneratorFunction]",
                zn = "[object Map]",
                jn = "[object Number]",
                Hn = "[object Object]",
                Kn = "[object RegExp]",
                Yn = "[object Set]",
                qn = "[object String]",
                Xn = "[object Symbol]",
                Wn = "[object WeakMap]",
                Qn = "[object ArrayBuffer]",
                $n = "[object Float32Array]",
                Jn = "[object Float64Array]",
                Zn = "[object Int8Array]",
                ei = "[object Int16Array]",
                ti = "[object Int32Array]",
                ni = "[object Uint8Array]",
                ii = "[object Uint8ClampedArray]",
                ri = "[object Uint16Array]",
                ai = "[object Uint32Array]",
                oi = /[&<>"'`]/g,
                si = RegExp(oi.source),
                ui = /[\\^$.*+?()[\]{}|]/g,
                ci = /\w*$/,
                li = /^\[object .+?Constructor\]$/,
                di = /^(?:0|[1-9]\d*)$/,
                fi = {};
            fi[$n] = fi[Jn] = fi[Zn] = fi[ei] = fi[ti] = fi[ni] = fi[ii] = fi[ri] = fi[ai] = !0, fi[kn] = fi[xn] = fi[Qn] = fi[Fn] = fi[Mn] = fi[Un] = fi[Gn] = fi[zn] = fi[jn] = fi[Hn] = fi[Kn] = fi[Yn] = fi[qn] = fi[Wn] = !1;
            var gi = {};
            gi[kn] = gi[xn] = gi[Qn] = gi[Fn] = gi[Mn] = gi[$n] = gi[Jn] = gi[Zn] = gi[ei] = gi[ti] = gi[zn] = gi[jn] = gi[Hn] = gi[Kn] = gi[Yn] = gi[qn] = gi[Xn] = gi[ni] = gi[ii] = gi[ri] = gi[ai] = !0, gi[Un] = gi[Gn] = gi[Wn] = !1;
            var pi = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "`": "&#96;"
                },
                hi = {
                    "function": !0,
                    object: !0
                },
                _i = hi[typeof t] && t && !t.nodeType ? t : An,
                vi = hi[typeof e] && e && !e.nodeType ? e : An,
                mi = vi && vi.exports === _i ? _i : An,
                Ei = v(_i && vi && "object" == typeof n && n),
                Ii = v(hi[typeof self] && self),
                yi = v(hi[typeof window] && window),
                Si = v(hi[typeof this] && this),
                Ti = Ei || yi !== (Si && Si.window) && yi || Ii || Si || Function("return this")(),
                Ai = Array.prototype,
                wi = Object.prototype,
                bi = Function.prototype.toString,
                Di = wi.hasOwnProperty,
                Ri = 0,
                Oi = bi.call(Object),
                Ni = wi.toString,
                Ci = Ti._,
                Pi = RegExp("^" + bi.call(Di).replace(ui, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Li = mi ? Ti.Buffer : An,
                Vi = Ti.Reflect,
                ki = Ti.Symbol,
                xi = Ti.Uint8Array,
                Fi = Vi ? Vi.enumerate : An,
                Mi = Object.getPrototypeOf,
                Ui = Object.getOwnPropertySymbols,
                Gi = Object.create,
                Bi = wi.propertyIsEnumerable,
                zi = Ai.splice,
                ji = Ti.isFinite,
                Hi = Object.keys,
                Ki = Math.max,
                Yi = qe(Ti, "Map"),
                qi = qe(Ti, "Set"),
                Xi = qe(Ti, "WeakMap"),
                Wi = qe(Object, "create"),
                Qi = Yi ? bi.call(Yi) : "",
                $i = qi ? bi.call(qi) : "",
                Ji = Xi ? bi.call(Xi) : "",
                Zi = ki ? ki.prototype : An,
                er = Zi ? Zi.valueOf : An,
                tr = Ge(fe),
                nr = Be();
            Fi && !Bi.call({
                valueOf: 1
            }, "valueOf") && (me = function(e) {
                return T(Fi(e))
            });
            var ir = Fe,
                rr = we("length"),
                ar = Ui || function() {
                    return []
                };
            (Yi && Xe(new Yi) != zn || qi && Xe(new qi) != Yn || Xi && Xe(new Xi) != Wn) && (Xe = function(e) {
                var t = Ni.call(e),
                    n = t == Hn ? e.constructor : null,
                    i = "function" == typeof n ? bi.call(n) : "";
                if (i) switch (i) {
                    case Qi:
                        return zn;
                    case $i:
                        return Yn;
                    case Ji:
                        return Wn
                }
                return t
            });
            var or = Dt((function(e, t) {
                    return dr(e) || (e = null == e ? [] : [Object(e)]), t = le(t, 1), a(e, t)
                })),
                sr = Dt((function(e, t, n) {
                    return je(e, On | Nn, t, n)
                })),
                ur = Dt((function(e, t) {
                    return oe(e, 1, t)
                })),
                cr = Dt((function(e, t, n) {
                    return oe(e, pr(t) || 0, n)
                })),
                lr = Dt((function(e, t) {
                    return je(e, Nn, An, t)
                })),
                dr = Array.isArray,
                fr = Li ? function(e) {
                    return e instanceof Li
                } : hn(!1),
                gr = Number,
                pr = Number,
                hr = Ue((function(e, t) {
                    ir(t, sn(t), e)
                })),
                _r = Ue((function(e, t) {
                    ir(t, un(t), e)
                })),
                vr = Ue((function(e, t, n, i) {
                    Fe(t, un(t), e, i)
                })),
                mr = Dt((function(e) {
                    return e.push(An, Z), vr.apply(An, e)
                })),
                Er = Ue((function(e, t, n) {
                    ye(e, t, n)
                })),
                Ir = Dt((function(e, t) {
                    return null == e ? {} : (t = Ee(le(t, 1), String), Te(e, se(un(e), t)))
                })),
                yr = Dt((function(e, t) {
                    return null == e ? {} : Te(e, le(t, 1))
                })),
                Sr = _e;
            D.prototype = ae(b.prototype), D.prototype.constructor = D, R.prototype = Wi ? Wi(null) : wi, L.prototype.clear = V, L.prototype["delete"] = k, L.prototype.get = x, L.prototype.has = F, L.prototype.set = M, U.prototype.push = B, z.prototype.clear = j, z.prototype["delete"] = H, z.prototype.get = K, z.prototype.has = Y, z.prototype.set = q, b.assign = hr, b.assignIn = _r, b.before = At, b.bind = sr, b.chain = lt, b.compact = nt, b.concat = or, b.create = rn, b.defaults = mr, b.defer = ur, b.delay = cr, b.filter = ht, b.flatten = rt, b.flattenDeep = at, b.iteratee = Sr, b.keys = sn, b.map = Et, b.mapValues = cn, b.matches = vn, b.merge = Er, b.mixin = mn, b.negate = wt, b.omit = Ir, b.omitBy = ln, b.once = bt, b.partial = lr, b.pick = yr, b.pickBy = dn, b.slice = ct, b.sortBy = Tt, b.tap = dt, b.thru = ft, b.toArray = en, b.values = gn, b.extend = _r, mn(b, b), b.clone = Rt, b.cloneDeep = Ot, b.escape = pn, b.every = pt, b.find = _t, b.findIndex = it, b.forEach = vt, b.forOwn = an, b.has = on, b.head = ot, b.identity = _n, b.includes = mt, b.indexOf = st, b.isArguments = Pt, b.isArray = dr, b.isBoolean = kt, b.isDate = xt, b.isEmpty = Ft, b.isEqual = Mt, b.isFinite = Ut, b.isFunction = Gt, b.isNaN = Ht, b.isNull = Yt, b.isNumber = qt, b.isObject = zt, b.isRegExp = Wt, b.isString = Qt, b.isUndefined = Jt, b.last = ut, b.max = Sn, b.min = Tn, b.noConflict = En, b.noop = In, b.reduce = It, b.result = fn, b.size = yt, b.some = St, b.uniqueId = yn, b.each = vt, b.first = ot, mn(b, (function() {
                var e = {};
                return fe(b, (function(t, n) {
                    Di.call(b.prototype, n) || (e[n] = t)
                })), e
            })(), {
                chain: !1
            }), b.VERSION = wn, tr(["pop", "join", "replace", "reverse", "split", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                var t = (/^(?:replace|split)$/.test(e) ? String.prototype : Ai)[e],
                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    i = /^(?:pop|join|replace|shift)$/.test(e);
                b.prototype[e] = function() {
                    var e = arguments;
                    return i && !this.l ? t.apply(this.value(), e) : this[n]((function(n) {
                        return t.apply(n, e)
                    }))
                }
            })), b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = gt, (yi || Ii || {})._ = b, _i && vi && (mi && ((vi.exports = b)._ = b), _i._ = b)
        }).call(this)
    }).call(t, n(4)(e), (function() {
        return this
    })())
}), (function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}), (function(e, t) {
    t.generate = function e(t) {
        return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
    }
}), (function(e, t, n) {
    var i = n(7),
        r = n(9),
        a = n(12).Promise,
        o = n(16),
        s = o.get("stores/async_request");
    t.makeAsyncRequest = function(e, t) {
        var n = s.getPromise(e);
        if (n) return n;
        var o, u, c = new a(function(e, t) {
            o = e, u = t
        });
        return r.dispatch(i.REGISTER_ASYNC_DEFERRED, {
            source: e,
            promise: c,
            resolver: o,
            rejecter: u
        }), t && t(), c
    }, t.resolveRequest = function(e, t) {
        r.dispatch(i.RESOLVE_DEFERRED, {
            source: e,
            resolveWith: t
        })
    }, t.rejectRequest = function(e, t) {
        r.dispatch(i.REJECT_DEFERRED, {
            source: e,
            rejectWith: t
        })
    }
}), (function(e, t, n) {
    var i = n(8);
    e.exports = i({
        LOG: null,
        SET_LOGLEVEL: null,
        INITIALIZE_STATE: null,
        SET_DOMCONTENTLOADED: null,
        ACTIVATE: null,
        UPDATE_BEHAVIOR_STORE: null,
        DATA_LOADED: null,
        SET_CLIENT_NAME: null,
        SET_CLIENT_VERSION: null,
        LOAD_PERSISTED_LAYER_STATES: null,
        RECORD_GLOBAL_DECISION: null,
        RECORD_LAYER_DECISION: null,
        ENSURE_ORIGINAL_PUSHSTATE: null,
        ENSURE_ORIGINAL_REPLACESTATE: null,
        SET_VISITOR_ATTRIBUTES: null,
        SET_VISITOR_ATTRIBUTE_PENDING: null,
        LOAD_EXISTING_VISITOR_PROFILE: null,
        SET_VISITOR_EVENTS: null,
        SET_FOREIGN_VISITOR_EVENTS: null,
        SET_FOREIGN_VISITOR_EVENT_QUEUE: null,
        SET_VISITOR_ID: null,
        SET_VISITOR_ID_VIA_API: null,
        REFRESH_SESSION: null,
        LOAD_SESSION_STATE: null,
        UPDATE_VARIATION_ID_MAP: null,
        MERGE_VARIATION_ID_MAP: null,
        UPDATE_PREFERRED_LAYER_MAP: null,
        MERGE_PREFERRED_LAYER_MAP: null,
        RECORD_LAYER_DECISION_EVENT_ID: null,
        TRACK_VIEW_ACTIVATED_EVENT: null,
        REGISTER_ASYNC_DEFERRED: null,
        RESOLVE_DEFERRED: null,
        REJECT_DEFERRED: null,
        REGISTER_PLUGIN: null,
        ADD_CLEANUP_FN: null,
        CLEAR_CLEANUP_FN: null,
        ACTION_EXECUTED: null,
        REGISTER_ACTION: null,
        SET_VIEW_ACTIVE_STATE: null,
        UPDATE_PARSED_VIEW_METADATA: null,
        UPDATE_USER_SUPPLIED_METADATA: null,
        REGISTER_VIEWS: null,
        SET_GLOBAL_TAGS: null,
        SET_VIEW_BATCHING: null,
        ATTACH_EVENT_STREAM_PUBLISHERS: null,
        DETACH_EVENT_STREAM_PUBLISHERS: null,
        LOAD_DIRECTIVE: null,
        SET_COOKIE_AGE: null,
        SET_COOKIE_DOMAIN: null,
        SET_COOKIE_AUTO_REFRESH: null,
        XDOMAIN_SET_DEFAULT_FRAME: null,
        XDOMAIN_ADD_FRAME: null,
        XDOMAIN_SET_MESSAGE: null,
        XDOMAIN_ADD_SUBSCRIBER: null,
        XDOMAIN_SET_CANONICAL_ORIGINS: null,
        XDOMAIN_SET_DISABLED: null,
        ADD_EMITTER_HANDLER: null,
        REMOVE_EMITTER_HANDLER: null,
        SET_INTEGRATION_SETTINGS: null,
        ADD_CHANGE: null,
        SET_CHANGE_APPLIER: null,
        REMOVE_ACTION_STATE: null,
        ANNOUNCE_PENDING_REDIRECT: null,
        LOAD_REDIRECT_DATA: null,
        REGISTER_TRACKED_REDIRECT_DATA: null,
        SET_PENDING_EVENT: null,
        REMOVE_PENDING_EVENT: null,
        LOAD_PENDING_EVENTS: null,
        SANDBOXED_FUNCTIONS_ADDED: null,
        SET_RUM_DATA: null,
        RECORD_API_USAGE: null,
        INITIALIZE_CHANGE_METRICS: null,
        RECORD_CHANGE_MACROTASK_RATE: null,
        RECORD_CHANGE_OVERHEATED: null,
        RECORD_DOM_OBSERVATION_OCCURENCE: null,
        SET_PERFORMANCE_MARKS_DATA: null,
        FINALIZE_BATCH_SNAPSHOT: null,
        REGISTER_PREVIOUS_BATCH: null,
        REGISTER_TRACKER_VISITOR: null,
        REGISTER_TRACKER_EVENT: null,
        REGISTER_TRACKER_DECISION: null,
        RESET_TRACKER_EVENTS: null,
        RESET_TRACKER_PREVIOUS_BATCHES: null,
        RESET_TRACKER_STORE: null,
        SET_TRACKER_POLLING: null,
        SET_TRACKER_BATCHING: null,
        SET_TRACKER_SEND_EVENTS: null,
        SET_TRACKER_PERSISTABLE_STATE: null,
        SET_TRACKER_DIRTY: null,
        UPDATE_TRACKER_VISITOR_ATTRIBUTES: null,
        SET_UA_DATA: null
    })
}), (function(e, t) {
    "use strict";
    var n = function(e) {
        var t, n = {};
        if (!(e instanceof Object) || Array.isArray(e)) throw new Error("keyMirror(...): Argument must be an object.");
        for (t in e) e.hasOwnProperty(t) && (n[t] = t);
        return n
    };
    e.exports = n
}), (function(e, t, n) {
    var i = n(10);
    e.exports = i.create()
}), (function(e, t, n) {
    function i(e) {
        e = e || {}, this.f = {}, this.g = {}, this.I = 0, this.S = [], this.T = []
    }

    function r(e, t) {
        return function() {
            var n = e.indexOf(t);
            n !== -1 && e.splice(n, 1)
        }
    }
    var a = n(2),
        o = n(11);
    i.prototype.registerStores = function(e) {
        a.forOwn(e, a.bind((function(e, t) {
            this.f[t] = new o(t, this, e)
        }), this))
    }, i.prototype.getStore = function(e) {
        return this.f[e]
    }, i.prototype.dispatch = function(e, t) {
        this.dispatchId++, a.each(this.S, a.bind((function(n) {
            n.call(this, e, t)
        }), this)), a.forOwn(this.f, (function(n) {
            n.A(e, t)
        })), a.each(this.T, a.bind((function(n) {
            n.call(this, e, t)
        }), this)), a.forOwn(this.f, a.bind((function(e, t) {
            e.hasChanges() && this.g[t] && (e.resetChange(), a.each(this.g[t], (function(t) {
                t(e)
            })))
        }), this))
    }, i.prototype.reset = function() {
        this.g = {}, a.forOwn(this.f, (function(e, t) {
            e.w()
        }))
    }, i.prototype.getState = function() {
        var e = {};
        return a.forOwn(this.f, (function(t, n) {
            e[n] = t.b()
        })), e
    }, i.prototype.onPreAction = function(e) {
        var t = this.S;
        return t.push(e), r(t, e)
    }, i.prototype.onPostAction = function(e) {
        var t = this.T;
        return t.push(e), r(t, e)
    }, i.prototype.D = function(e, t) {
        this.g[e] || (this.g[e] = []), this.g[e].push(t);
        var n = this.g[e];
        return r(n, t)
    }, e.exports = {
        create: function(e) {
            return new i(e)
        }
    }
}), (function(e, t, n) {
    function i(e, t, n) {
        this.R = e, this.O = t, this.N = 0, this.C = !1, this.P = {}, r.extend(this, n), this.L = {}, this.initialize && this.initialize()
    }
    var r = n(2);
    i.prototype.A = function(e, t) {
        var n = this.P[e];
        n && "function" == typeof n && n.call(this, t, e)
    }, i.prototype.b = function() {
        return r.cloneDeep(this.L)
    }, i.prototype.on = function(e, t) {
        this.P[e] = r.bind(t, this)
    }, i.prototype.observe = function(e) {
        return this.O.D(this.R, e)
    }, i.prototype.emitChange = function() {
        this.C = !0, this.N++
    }, i.prototype.hasChanges = function() {
        return this.C
    }, i.prototype.resetChange = function() {
        this.C = !1
    }, i.prototype.getStateId = function() {
        return this.N
    }, i.prototype.w = function() {
        this.reset && "function" == typeof this.reset && this.reset(), this.initialize()
    }, e.exports = i
}), (function(e, t, n) {
    e.exports = n(13)
}), (function(e, t, n) {
    (function(t, i) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   4.1.0
         */
        !(function(t, n) {
            e.exports = n()
        })(this, (function() {
            "use strict";

            function e(e) {
                return "function" == typeof e || "object" == typeof e && null !== e
            }

            function r(e) {
                return "function" == typeof e
            }

            function a(e) {
                W = e
            }

            function o(e) {
                Q = e
            }

            function s() {
                return function() {
                    return t.nextTick(f)
                }
            }

            function u() {
                return "undefined" != typeof X ? function() {
                    X(f)
                } : d()
            }

            function c() {
                var e = 0,
                    t = new Z(f),
                    n = document.createTextNode("");
                return t.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = e = ++e % 2
                    }
            }

            function l() {
                var e = new MessageChannel;
                return e.port1.onmessage = f,
                    function() {
                        return e.port2.postMessage(0)
                    }
            }

            function d() {
                var e = setTimeout;
                return function() {
                    return e(f, 1)
                }
            }

            function f() {
                for (var e = 0; e < q; e += 2) {
                    var t = ne[e],
                        n = ne[e + 1];
                    t(n), ne[e] = void 0, ne[e + 1] = void 0
                }
                q = 0
            }

            function g() {
                try {
                    var e = n(15);
                    return X = e.runOnLoop || e.runOnContext, u()
                } catch (e) {
                    return d()
                }
            }

            function p(e, t) {
                var n = arguments,
                    i = this,
                    r = new this.constructor(_);
                void 0 === r[re] && k(r);
                var a = i._state;
                return a ? !(function() {
                    var e = n[a - 1];
                    Q((function() {
                        return P(a, r, e, i._result)
                    }))
                })() : R(i, r, e, t), r
            }

            function h(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(_);
                return A(n, e), n
            }

            function _() {}

            function v() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function m() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function E(e) {
                try {
                    return e.then
                } catch (e) {
                    return ue.error = e, ue
                }
            }

            function I(e, t, n, i) {
                try {
                    e.call(t, n, i)
                } catch (e) {
                    return e
                }
            }

            function y(e, t, n) {
                Q((function(e) {
                    var i = !1,
                        r = I(n, t, (function(n) {
                            i || (i = !0, t !== n ? A(e, n) : b(e, n))
                        }), (function(t) {
                            i || (i = !0, D(e, t))
                        }), "Settle: " + (e._label || " unknown promise"));
                    !i && r && (i = !0, D(e, r))
                }), e)
            }

            function S(e, t) {
                t._state === oe ? b(e, t._result) : t._state === se ? D(e, t._result) : R(t, void 0, (function(t) {
                    return A(e, t)
                }), (function(t) {
                    return D(e, t)
                }))
            }

            function T(e, t, n) {
                t.constructor === e.constructor && n === p && t.constructor.resolve === h ? S(e, t) : n === ue ? (D(e, ue.error), ue.error = null) : void 0 === n ? b(e, t) : r(n) ? y(e, t, n) : b(e, t)
            }

            function A(t, n) {
                t === n ? D(t, v()) : e(n) ? T(t, n, E(n)) : b(t, n)
            }

            function w(e) {
                e._onerror && e._onerror(e._result), O(e)
            }

            function b(e, t) {
                e._state === ae && (e._result = t, e._state = oe, 0 !== e._subscribers.length && Q(O, e))
            }

            function D(e, t) {
                e._state === ae && (e._state = se, e._result = t, Q(w, e))
            }

            function R(e, t, n, i) {
                var r = e._subscribers,
                    a = r.length;
                e._onerror = null, r[a] = t, r[a + oe] = n, r[a + se] = i, 0 === a && e._state && Q(O, e)
            }

            function O(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var i = void 0, r = void 0, a = e._result, o = 0; o < t.length; o += 3) i = t[o], r = t[o + n], i ? P(n, i, r, a) : r(a);
                    e._subscribers.length = 0
                }
            }

            function N() {
                this.error = null
            }

            function C(e, t) {
                try {
                    return e(t)
                } catch (e) {
                    return ce.error = e, ce
                }
            }

            function P(e, t, n, i) {
                var a = r(n),
                    o = void 0,
                    s = void 0,
                    u = void 0,
                    c = void 0;
                if (a) {
                    if (o = C(n, i), o === ce ? (c = !0, s = o.error, o.error = null) : u = !0, t === o) return void D(t, m())
                } else o = i, u = !0;
                t._state !== ae || (a && u ? A(t, o) : c ? D(t, s) : e === oe ? b(t, o) : e === se && D(t, o))
            }

            function L(e, t) {
                try {
                    t((function(t) {
                        A(e, t)
                    }), (function(t) {
                        D(e, t)
                    }))
                } catch (t) {
                    D(e, t)
                }
            }

            function V() {
                return le++
            }

            function k(e) {
                e[re] = le++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function x(e, t) {
                this._instanceConstructor = e, this.promise = new e(_), this.promise[re] || k(this.promise), Y(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? b(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && b(this.promise, this._result))) : D(this.promise, F())
            }

            function F() {
                return new Error("Array Methods must be provided an Array")
            }

            function M(e) {
                return new x(this, e).promise
            }

            function U(e) {
                var t = this;
                return new t(Y(e) ? function(n, i) {
                    for (var r = e.length, a = 0; a < r; a++) t.resolve(e[a]).then(n, i)
                } : function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }

            function G(e) {
                var t = this,
                    n = new t(_);
                return D(n, e), n
            }

            function B() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function z() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function j(e) {
                this[re] = V(), this._result = this._state = void 0, this._subscribers = [], _ !== e && ("function" != typeof e && B(), this instanceof j ? L(this, e) : z())
            }

            function H() {
                var e = void 0;
                if ("undefined" != typeof i) e = i;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === n && !t.cast) return
                }
                e.Promise = j
            }
            var K = void 0;
            K = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var Y = K,
                q = 0,
                X = void 0,
                W = void 0,
                Q = function(e, t) {
                    ne[q] = e, ne[q + 1] = t, q += 2, 2 === q && (W ? W(f) : ie())
                },
                $ = "undefined" != typeof window ? window : void 0,
                J = $ || {},
                Z = J.MutationObserver || J.WebKitMutationObserver,
                ee = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                ne = new Array(1e3),
                ie = void 0;
            ie = ee ? s() : Z ? c() : te ? l() : void 0 === $ ? g() : d();
            var re = Math.random().toString(36).substring(16),
                ae = void 0,
                oe = 1,
                se = 2,
                ue = new N,
                ce = new N,
                le = 0;
            return x.prototype._enumerate = function() {
                for (var e = this.length, t = this._input, n = 0; this._state === ae && n < e; n++) this._eachEntry(t[n], n)
            }, x.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor,
                    i = n.resolve;
                if (i === h) {
                    var r = E(e);
                    if (r === p && e._state !== ae) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof r) this._remaining--, this._result[t] = e;
                    else if (n === j) {
                        var a = new n(_);
                        T(a, e, r), this._willSettleAt(a, t)
                    } else this._willSettleAt(new n(function(t) {
                        return t(e)
                    }), t)
                } else this._willSettleAt(i(e), t)
            }, x.prototype._settledAt = function(e, t, n) {
                var i = this.promise;
                i._state === ae && (this._remaining--, e === se ? D(i, n) : this._result[t] = n), 0 === this._remaining && b(i, this._result)
            }, x.prototype._willSettleAt = function(e, t) {
                var n = this;
                R(e, void 0, (function(e) {
                    return n._settledAt(oe, t, e)
                }), (function(e) {
                    return n._settledAt(se, t, e)
                }))
            }, j.all = M, j.race = U, j.resolve = h, j.reject = G, j._setScheduler = a, j._setAsap = o, j._asap = Q, j.prototype = {
                constructor: j,
                then: p,
                "catch": function(e) {
                    return this.then(null, e)
                }
            }, j.polyfill = H, j.Promise = j, j
        }))
    }).call(t, n(14), (function() {
        return this
    })())
}), (function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function a(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function o() {
        h && g && (h = !1, g.length ? p = g.concat(p) : _ = -1, p.length && s())
    }

    function s() {
        if (!h) {
            var e = r(o);
            h = !0;
            for (var t = p.length; t;) {
                for (g = p, p = []; ++_ < t;) g && g[_].run();
                _ = -1, t = p.length
            }
            g = null, h = !1, a(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function c() {}
    var l, d, f = e.exports = {};
    !(function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            d = i
        }
    })();
    var g, p = [],
        h = !1,
        _ = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new u(e, t)), 1 !== p.length || h || r(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(e) {
        return []
    }, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}), (function(e, t) {}), (function(e, t, n) {
    var i = n(2),
        r = n(17),
        a = n(9),
        o = n(18),
        s = r.create(),
        u = {
            action_data: n(21),
            async_request: n(27),
            audience_data: n(28),
            change_data: n(29),
            cleanup: n(30),
            client_metadata: n(31),
            cookie_options: n(33),
            event_data: n(34),
            event_emitter: n(35),
            dimension_data: n(36),
            directive: n(37),
            global: n(38),
            global_state: n(39),
            history: n(40),
            integration_settings: n(42),
            layer: n(43),
            layer_data: n(44),
            log: n(46),
            observed_redirect: n(47),
            pending_events: n(48),
            performance: n(49),
            plugins: n(50),
            provider_status: n(51),
            pending_redirect: n(52),
            rum: n(53),
            sandbox: n(54),
            session: n(55),
            tracker_optimizely: n(56),
            ua_data: n(57),
            view: n(58),
            view_data: n(59),
            visitor: n(60),
            visitor_attribute_entity: n(61),
            visitor_events: n(62),
            visitor_events_manager: n(67),
            visitor_id: n(68),
            visitor_bucketing: n(69),
            xdomain: n(70)
        };
    u["group_data"] = n(71), a.registerStores(u), i.forOwn(u, (function(e, t) {
        s.register("stores/" + t, a.getStore(t))
    })), s.register("core/plugins/matchers/key_value", o), e.exports = s
}), (function(e, t, n) {
    function i() {
        this.V = {}
    }
    var r = n(2);
    i.prototype.register = function(e, t) {
        if (1 === arguments.length) {
            var n = this;
            return void r.each(e, (function(e, t) {
                n.register(t, e)
            }))
        }
        if (this.V[e]) throw new Error("Module already registered for: " + e);
        this.V[e] = t
    }, i.prototype.get = function(e) {
        return this.V[e]
    }, i.prototype.getModuleKeys = function() {
        var e = this.V;
        return r.keys(e)
    }, i.prototype.evaluate = function(e) {
        var t = e.length,
            n = e.slice(0, t - 1),
            i = e[t - 1];
        if ("function" != typeof i) throw new Error("Evaluate must take a function as last element in array");
        var a = r.map(n, r.bind(this.get, this));
        return i.apply(null, a)
    }, i.prototype.reset = function() {
        this.V = {}
    }, e.exports = {
        create: function() {
            return new i
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(19).getFieldValue,
        a = n(20);
    e.exports = function(e, t) {
        var n = r(e, t.name.split("."));
        return i.isArray(n) ? i.some(n, i.partial(a.hasMatch, t.value, t.match)) : a.hasMatch(t.value, t.match, n)
    }
}), (function(e, t, n) {
    var i = n(2);
    t.getFieldValue = function(e, t) {
        i.isArray(t) || (t = [t]);
        for (var n = e, r = 0; r < t.length; r++) {
            var a = t[r];
            if (!i.isObject(n) || !n.hasOwnProperty(a)) return;
            n = n[a]
        }
        return n
    }, t.setFieldValue = function(e, t, n) {
        if (!i.isArray(t) || i.isEmpty(t)) throw new Error("Attempted to set an invalid key path: " + t);
        for (var r = e, a = 0; a < t.length - 1; a++) {
            var o = t[a];
            i.isObject(r[o]) || (r[o] = {}), r = r[o]
        }
        r[t[t.length - 1]] = n
    }
}), (function(e, t, n) {
    var i = n(2);
    t.hasMatch = function(e, t, n) {
        var r = !i.isUndefined(n) && null !== n,
            a = !i.isUndefined(e) && null !== e,
            o = t || (a ? "exact" : "exists");
        switch (o) {
            case "exists":
                return r;
            case "exact":
                return r && String(n) === e;
            case "substring":
                return r && String(n).indexOf(e) > -1;
            case "regex":
                try {
                    if (a && r) {
                        var s = new RegExp(e);
                        return s.test(String(n))
                    }
                    return !1
                } catch (e) {}
                return !1;
            case "range":
                var u = e.split(":"),
                    c = parseFloat(u[0]),
                    l = parseFloat(u[1]),
                    d = parseFloat(n);
                return d >= c && d <= l;
            default:
                return !1
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22),
        o = n(23);
    e.exports = {
        initialize: function() {
            this.L = {
                actions: {},
                actionState: {}
            }, this.on(r.DATA_LOADED, this.k), this.on(r.ACTION_EXECUTED, this.F), this.on(r.SET_CHANGE_APPLIER, this.M), this.on(r.REMOVE_ACTION_STATE, this.U)
        },
        k: function(e) {
            var t = this;
            i.isEmpty(e.data.layers) || (i.each(e.data.layers, (function(e) {
                var n;
                if (e.changes) {
                    var r = "layerId:" + e.id;
                    n = {
                        id: r,
                        layerId: e.id,
                        changeSet: e.changes,
                        type: "layer"
                    }, a.deepFreeze(n), t.L.actions[r] = n
                }
                i.each(e.experiments, (function(r) {
                    if (r.changes) {
                        var o = "experimentId:" + r.id;
                        n = {
                            id: o,
                            layerId: e.id,
                            experimentId: r.id,
                            changeSet: r.changes,
                            type: "experiment"
                        }, a.deepFreeze(n), t.L.actions[o] = n
                    }
                    i.each(r.variations, (function(o) {
                        i.each(o.actions, (function(i) {
                            var s = i.pageId || i.viewId,
                                u = r.id + ":" + o.id + ":" + s;
                            n = {
                                id: u,
                                layerId: e.id,
                                experimentId: r.id,
                                variationId: o.id,
                                pageId: s,
                                changeSet: i.changes,
                                type: "variation"
                            }, a.deepFreeze(n), t.L.actions[u] = n
                        }))
                    }))
                }))
            })), this.emitChange())
        },
        F: function(e) {
            var t = e.actionId;
            i.isUndefined(t) || this.L.actionState[t] || (this.L.actionState[t] = {})
        },
        M: function(e) {
            var t = e.actionId,
                n = e.changeId;
            return this.L.actionState[t] ? void(this.L.actionState[t][n] = e.changeApplier) : void o.warn("Action Data / Attempted to set changeApplier for inactive action: ", t)
        },
        U: function(e) {
            delete this.L.actionState[e.actionId]
        },
        get: function(e) {
            return a.safeReference(this.L.actions[e])
        },
        getActionState: function(e) {
            return a.safeReference(this.L.actionState[e])
        },
        getByChangeId: function(e) {
            return i.find(this.L.actions, {
                changeSet: [{
                    id: e
                }]
            })
        },
        getAllActionIdsByPageId: function(e) {
            return i.map(i.filter(this.L.actions, {
                pageId: e
            }), "id")
        },
        getChangeApplier: function(e, t) {
            var n = this.L.actionState[t];
            if (n) return n[e]
        },
        getExperimentVariationActions: function(e, t) {
            return a.safeReference(i.filter(this.L.actions, {
                experimentId: e,
                variationId: t
            }))
        },
        getLayerActions: function(e) {
            return a.safeReference(i.filter(this.L.actions, {
                id: "layerId:" + e
            }))
        },
        getExperimentActions: function(e) {
            return a.safeReference(i.filter(this.L.actions, {
                id: "experimentId:" + e
            }))
        },
        getAll: function() {
            return a.safeReference(i.values(this.L.actions))
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = !1;
    t.deepFreeze = function e(t) {
        r && i.isObject(t) && !i.isFunction(t) && (i.forOwn(t, e), Object.freeze(t))
    }, t.safeReference = function e(t) {
        return r ? !i.isObject(t) || i.isFunction(t) || Object.isFrozen(t) ? t : i.isArray(t) ? i.map(t, e) : i.reduce(t, (function(t, n, i) {
            return t[i] = e(n), t
        }), {}) : i.cloneDeep(t)
    }
}), (function(e, t, n) {
    function i() {
        this.logLevel = null, this.logMatch = null, this.logs = [], this.timebase = o.now()
    }
    var r = n(2),
        a = n(7),
        o = n(24),
        s = n(25),
        u = n(9),
        c = n(26);
    i.prototype.G = function() {
        return !r.isNull(this.logLevel)
    }, i.prototype.setLogLevel = function(e) {
        var t = this.B(e);
        null === t ? console.error("Unknown log level: " + e) : this.logLevel !== t && (this.log("Setting log level to " + t), this.logLevel = t, this.flush())
    }, i.prototype.setLogMatcher = function(e) {
        r.isString(e) ? this.logMatcher = e : this.logMatcher = "", this.logGroup = 0
    }, i.prototype.shouldLog = function(e) {
        return this.G() && this.logLevel >= e
    }, i.prototype.matchesLogMessage = function(e, t) {
        var n = this.logMatcher;
        if (!this.logMatcher) return !0;
        if (this.logGroup) return "GROUPSTART" === e ? this.logGroup++ : "GROUPEND" === e && this.logGroup--, !0;
        var i = r.some(t, (function(e) {
            if (!r.isString(e)) try {
                e = c.stringify(e)
            } catch (e) {}
            return r.isString(e) && r.includes(e, n)
        }));
        return i && "GROUPSTART" === e && this.logGroup++, i
    }, i.prototype.storeLog = function(e, t) {
        var n = {
            logLevel: e,
            logMessage: t
        };
        u.dispatch(a.LOG, n)
    }, i.prototype.flush = function() {
        var e = n(16),
            t = e.get("stores/log");
        this.logGroup = 0;
        var i = t.getLogs();
        r.each(i, r.bind((function(e) {
            this.z(e.logLevel, e.logMessage, !0)
        }), this))
    }, i.prototype.z = function(e, t, n) {
        var i, a = e;
        if (console) switch (e) {
            case "GROUPSTART":
                i = console.groupCollapsed, a = s.LogLevel.DEBUG;
                break;
            case "GROUPEND":
                i = console.groupEnd, a = s.LogLevel.DEBUG;
                break;
            case s.LogLevel.ERROR:
                i = console.error;
                break;
            case s.LogLevel.WARN:
                i = console.warn;
                break;
            case s.LogLevel.DEBUG:
                i = console.debug;
                break;
            default:
                i = console.log
        }
        try {
            n || this.G() && !this.shouldLog(a) || (r.isArray(t) && r.isString(t[0]) && (t = this.j(t)), this.storeLog(e, t)), i && this.shouldLog(a) && this.matchesLogMessage(e, t) && i.apply(console, t)
        } catch (e) {
            console && (console.error ? console.error(e) : console.log(e))
        }
    }, i.prototype.debug = function() {
        this.z(s.LogLevel.DEBUG, [].slice.call(arguments))
    }, i.prototype.log = function() {
        this.z(s.LogLevel.INFO, [].slice.call(arguments))
    }, i.prototype.logAlways = function() {
        var e = this.j([].slice.call(arguments));
        console && console.log && console.log.apply && console.log.apply(console, e), this.storeLog(s.LogLevel.INFO, e)
    }, i.prototype.warn = function() {
        this.z(s.LogLevel.WARN, [].slice.call(arguments))
    }, i.prototype.error = function(e) {
        var t = [].slice.call(arguments);
        1 === t.length && e.stack ? (this.z(s.LogLevel.ERROR, [this.H(), e]), this.z(s.LogLevel.INFO, [e.stack])) : this.z(s.LogLevel.ERROR, t)
    }, i.prototype.groupCollapsed = function() {
        this.z("GROUPSTART", [].slice.call(arguments))
    }, i.prototype.groupEnd = function() {
        this.z("GROUPEND", [].slice.call(arguments))
    }, i.prototype.j = function(e) {
        var t = this.H().toString();
        return t.length < 6 && (t = ("     " + t).slice(-6)), [t + "| Optly / " + e[0]].concat(e.slice(1))
    }, i.prototype.H = function() {
        return this.timebase ? o.now() - this.timebase : 0
    }, i.prototype.B = function(e) {
        return e && (e = e.toUpperCase(), "TRUE" === e && (e = "INFO"), "FALSE" === e && (e = "OFF"), "ALL" === e && (e = "DEBUG"), !r.isUndefined(s.LogLevel[e])) ? s.LogLevel[e] : null
    }, e.exports = new i
}), (function(e, t) {
    t.now = function() {
        return +new Date
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(8);
    t.COOKIES = {
        OPT_OUT: "optimizelyOptOut",
        PREVIEW: "optimizelyPreview",
        REDIRECT: "optimizelyRedirectData",
        SESSION_STATE: "optimizelySessionState",
        TOKEN: "optimizelyToken",
        VISITOR_ID: "optimizelyEndUserId",
        VISITOR_UUID: "optimizelyPPID"
    }, t.LayerActivationTypes = {
        CONDITIONAL: "conditional",
        IMMEDIATE: "immediate",
        MANUAL: "manual",
        READY: "ready",
        TIMEOUT: "timeout"
    }, t.LogLevel = {
        OFF: 0,
        ERROR: 1,
        WARN: 2,
        INFO: 3,
        DEBUG: 4
    }, t.Lifecycle = r({
        preActivate: null,
        postVisitorProfileLoad: null,
        postViewsActivated: null,
        postActivate: null
    }), t.ViewActivationTypes = {
        immediate: "immediate",
        manual: "manual",
        callback: "callback",
        polling: "polling",
        URLChanged: "url_changed",
        DOMChanged: "dom_changed"
    }, t.StorageKeys = {
        PENDING_EVENTS: "pending_events"
    }, t.PluginTypes = r({
        visitorProfileProviders: null,
        viewProviders: null,
        audienceMatchers: null,
        viewMatchers: null,
        analyticsTrackers: null,
        viewTagLocators: null,
        userFeatureDefs: null,
        apiModules: null,
        changeAppliers: null,
        deciders: null,
        eventImplementations: null,
        viewTriggers: null
    }), t.ResourceTimingAttributes = r({
        connectStart: null,
        connectEnd: null,
        decodedBodySize: null,
        domainLookupStart: null,
        domainLookupEnd: null,
        duration: null,
        encodedBodySize: null,
        fetchStart: null,
        requestStart: null,
        responseStart: null,
        responseEnd: null,
        secureConnectionStart: null,
        startTime: null,
        transferSize: null,
        serverTiming: null
    }), t.RUMPerformanceTimingAttributes = r({
        blockTime: null
    }), t.AttributionTypes = r({
        FIRST_TOUCH: null,
        LAST_TOUCH: null
    }), t.SandboxedFunctions = r({
        XMLHttpRequest: null
    }), t.PerformanceData = r({
        performance_marks: null,
        resource_timing: null,
        performance_timing: null
    }), t.PerformanceCounters = r({
        mutation_observer_invocation: null,
        polling_invocation: null,
        match_selector_invocation: null
    }), t.VisitorStorageKeys = {
        EVENTS: "events",
        EVENT_QUEUE: "event_queue",
        LAYER_MAP: "layer_map",
        LAYER_STATES: "layer_states",
        SESSION_STATE: "session_state",
        VISITOR_PROFILE: "visitor_profile",
        VARIATION_MAP: "variation_map",
        TRACKER_OPTIMIZELY: "tracker_optimizely"
    }, t.AllStorageKeys = i.assign({}, t.StorageKeys, t.VisitorStorageKeys), t.ListTargetingKeyTypes = {
        COOKIE: "c",
        QUERY: "q",
        JS_VARIABLE: "j"
    }
}), (function(e, t, n) {
    function i(e) {
        var t = [Array.prototype],
            n = [];
        r.each(t, (function(e) {
            r.isUndefined(e.toJSON) || (n.push(e.toJSON), delete e.toJSON)
        }));
        var i, a;
        try {
            i = e()
        } catch (e) {
            a = e
        } finally {
            r.each(n, (function(e, n) {
                t[n].toJSON = e
            }))
        }
        if (a) throw a;
        return i
    }
    var r = n(2);
    t.stringify = function() {
        return i(r.bind((function() {
            return JSON.stringify.apply(null, this)
        }), arguments))
    }, t.parse = JSON.parse
}), (function(e, t, n) {
    var i = n(7);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(i.REGISTER_ASYNC_DEFERRED, this.K), this.on(i.RESOLVE_DEFERRED, this.Y), this.on(i.REJECT_DEFERRED, this.q)
        },
        getRequest: function(e) {
            return this.L[e]
        },
        getPromise: function(e) {
            var t = this.getRequest(e);
            if (t) return t.promise
        },
        K: function(e) {
            this.L[e.source] = {
                promise: e.promise,
                resolver: e.resolver,
                rejecter: e.rejecter
            }
        },
        Y: function(e) {
            var t = this.getRequest(e.source);
            if (!t) throw new Error("No request registered for source: " + e.source);
            t.resolver(e.resolveWith)
        },
        q: function(e) {
            var t = this.getRequest(e.source);
            if (!t) throw new Error("No request registered for source: " + e.source);
            if (!t.rejecter) throw new Error("No rejecter registered for source: " + e.source);
            t.rejecter(e.rejectWith)
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.DATA_LOADED, this.k)
        },
        k: function(e) {
            i.isEmpty(e.data.audiences) || (i.each(e.data.audiences, i.bind((function(e) {
                a.deepFreeze(e), this.L[e.id] = e
            }), this)), this.emitChange())
        },
        getAll: function() {
            return a.safeReference(i.values(this.L))
        },
        getAudiencesMap: function() {
            return a.safeReference(this.L)
        },
        get: function(e) {
            return a.safeReference(this.L[e])
        },
        getAudienceName: function(e) {
            var t = i.find(i.values(this.L), {
                id: e
            });
            return t.name || "Aud " + e
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.ADD_CHANGE, this.X), this.on(r.DATA_LOADED, this.k)
        },
        getChange: function(e) {
            return this.L[e]
        },
        k: function(e) {
            i.isEmpty(e.data.changes) || i.each(e.data.changes, i.bind(this.X, this))
        },
        X: function(e) {
            a.deepFreeze(e), this.L[e.id] = e, this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(25);
    e.exports = {
        initialize: function() {
            this.L = {}, i.each(a.Lifecycle, i.bind((function(e) {
                this.L[e] = []
            }), this)), this.on(r.ADD_CLEANUP_FN, this.W), this.on(r.CLEAR_CLEANUP_FN, this.Q)
        },
        getCleanupFns: function(e) {
            return i.cloneDeep(this.L[e])
        },
        W: function(e) {
            this.L[e.lifecycle].push(e.cleanupFn), this.emitChange()
        },
        Q: function(e) {
            var t = this.L[e.lifecycle];
            if (e.cleanupFn) {
                var n = t.indexOf(e.cleanupFn);
                n > -1 && (t.splice(n, 1), this.emitChange())
            } else this.L[e.lifecycle] = [], this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(7),
        r = n(32);
    e.exports = {
        initialize: function() {
            this.L = {
                name: r.NAME,
                version: r.VERSION
            }, this.on(i.SET_CLIENT_NAME, this.$), this.on(i.SET_CLIENT_VERSION, this.J)
        },
        getClientName: function() {
            return this.L.name
        },
        getClientVersion: function() {
            return this.L.version
        },
        $: function(e) {
            e && (this.L.name = e), this.emitChange()
        },
        J: function(e) {
            e && (this.L.version = e), this.emitChange()
        }
    }
}), (function(e, t, n) {
    t.VERSION = "0.129.0", t.NAME = "js"
}), (function(e, t, n) {
    var i = n(7),
        r = 15552e3,
        a = !0;
    e.exports = {
        initialize: function() {
            this.L = {
                currentDomain: null,
                defaultAgeSeconds: r,
                autoRefresh: a
            }, this.on(i.SET_COOKIE_DOMAIN, this.Z), this.on(i.SET_COOKIE_AGE, this.ee), this.on(i.SET_COOKIE_AUTO_REFRESH, this.te)
        },
        getCurrentDomain: function() {
            return this.L.currentDomain
        },
        getDefaultAgeInSeconds: function() {
            return this.L.defaultAgeSeconds
        },
        getAutoRefresh: function() {
            return this.L.autoRefresh
        },
        Z: function(e) {
            this.L.currentDomain = e, this.emitChange()
        },
        ee: function(e) {
            this.L.defaultAgeSeconds = e, this.emitChange()
        },
        te: function(e) {
            this.L.autoRefresh = e, this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.DATA_LOADED, this.k)
        },
        getAll: function() {
            return a.safeReference(i.values(this.L))
        },
        getEventsMap: function() {
            return a.safeReference(this.L)
        },
        get: function(e) {
            return a.safeReference(this.L[e])
        },
        getByApiName: function(e) {
            return a.safeReference(i.find(i.values(this.L), {
                apiName: e
            }))
        },
        getByPageId: function(e) {
            return a.safeReference(i.filter(this.L, {
                pageId: e
            }))
        },
        k: function(e) {
            i.isEmpty(e.data.events) || (i.each(e.data.events, i.bind((function(e) {
                e.pageId || (e.pageId = e.viewId), a.deepFreeze(e), this.L[e.id] = e
            }), this)), this.emitChange())
        }
    }
}), (function(e, t, n) {
    function i(e) {
        var t = [];
        return e && r.isObject(e) ? (e.type && t.push(e.type), t.push(o), e.type && e.name && t.push(e.name), t.join("")) : o
    }
    var r = n(2),
        a = n(7),
        o = "|";
    e.exports = {
        initialize: function() {
            this.L = {
                handlers: {}
            }, this.on(a.ADD_EMITTER_HANDLER, this.ne), this.on(a.REMOVE_EMITTER_HANDLER, this.re)
        },
        getHandlers: function(e, t) {
            var n = [null, {
                    type: e.type
                }, {
                    type: e.type,
                    name: e.name
                }],
                a = [];
            return r.each(n, r.bind((function(e) {
                var t = i(e),
                    n = this.L.handlers[t];
                n && (a = a.concat(n))
            }), this)), t && (a = r.filter(a, (function(e) {
                return !e.publicOnly
            }))), a
        },
        ne: function(e) {
            var t = i(e.filter);
            this.L.handlers[t] || (this.L.handlers[t] = []), this.L.handlers[t].push({
                handler: e.handler,
                token: e.token,
                publicOnly: !!e.publicOnly,
                emitErrors: !!e.emitErrors
            }), this.emitChange()
        },
        re: function(e) {
            var t = !1,
                n = e.token;
            r.forOwn(this.L.handlers, r.bind((function(e, i) {
                var a = r.filter(e, (function(e) {
                    return e.token !== n
                }));
                a.length !== e.length && (t = !0, this.L.handlers[i] = a)
            }), this)), t && this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.DATA_LOADED, this.k)
        },
        k: function(e) {
            i.isEmpty(e.data.dimensions) || (i.each(e.data.dimensions, i.bind((function(e) {
                a.deepFreeze(e), this.L[e.id] = e
            }), this)), this.emitChange())
        },
        getAll: function() {
            return a.safeReference(i.values(this.L))
        },
        getById: function(e) {
            return a.safeReference(this.L[e])
        },
        getByApiName: function(e) {
            return a.safeReference(i.find(i.values(this.L), {
                apiName: e
            }))
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                disabled: !1,
                forceAudienceIds: [],
                forceVariationIds: [],
                alreadyInitialized: !1,
                mutationObserverAPISupported: !1,
                isEditor: !1,
                isPreview: !1,
                isLegacyPreview: !1,
                isSlave: !1,
                previewLayerIds: [],
                projectToken: null,
                shouldOptOut: !1,
                trackingDisabled: !1,
                isRunningInV2Editor: !1,
                isRunningInDesktopApp: !1,
                forceTracking: !1
            }, this.on(r.LOAD_DIRECTIVE, this.ae)
        },
        getAll: function() {
            return i.cloneDeep(this.L)
        },
        conflictInObservingChanges: function() {
            return !1
        },
        isDisabled: function() {
            return this.L.disabled
        },
        isEditor: function() {
            return this.L.isEditor
        },
        clientHasAlreadyInitialized: function() {
            return this.L.alreadyInitialized
        },
        getForceAudienceIds: function() {
            return this.L.forceAudienceIds
        },
        getForceVariationIds: function() {
            return this.L.forceVariationIds
        },
        getPreviewLayerIds: function() {
            return this.L.previewLayerIds
        },
        getProjectToken: function() {
            return this.L.projectToken
        },
        getForceTracking: function() {
            return this.L.forceTracking
        },
        shouldActivate: function() {
            return !this.L.isEditor && !this.isDisabled()
        },
        shouldBootstrapDataForPreview: function() {
            return this.L.isPreview
        },
        shouldBootstrapDataForEditor: function() {
            return this.L.isEditor
        },
        shouldInitialize: function() {
            return !(this.shouldLoadPreview() || this.isDisabled() || this.getProjectToken())
        },
        shouldLoadPreview: function() {
            return !(this.L.isPreview || this.L.isLegacyPreview || !this.getProjectToken() || this.L.isEditor)
        },
        shouldBailForDesktopApp: function() {
            return !this.L.isEditor && this.L.isRunningInDesktopApp
        },
        shouldLoadInnie: function() {
            return !this.L.isSlave && !this.L.isEditor && this.L.isRunningInV2Editor
        },
        shouldObserveChangesIndefinitely: function() {
            return !1
        },
        shouldObserveChangesUntilTimeout: function() {
            return !this.shouldObserveChangesIndefinitely()
        },
        shouldOptOut: function() {
            return this.L.shouldOptOut
        },
        shouldSendTrackingData: function() {
            return !this.L.trackingDisabled && (!!this.L.forceTracking || !this.L.isPreview && i.isEmpty(this.getForceVariationIds()) && i.isEmpty(this.getForceAudienceIds()))
        },
        isSlave: function() {
            return this.L.isSlave
        },
        isRunningInDesktopApp: function() {
            return this.L.isRunningInDesktopApp
        },
        isRunningInV2Editor: function() {
            return this.L.isRunningInV2Editor
        },
        ae: function(e) {
            i.extend(this.L, e), this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22);
    e.exports = {
        initialize: function() {
            this.L = {
                holdback: 0,
                isGlobalHoldback: null,
                listTargetingKeys: [],
                revision: null,
                projectId: null,
                accountId: null,
                namespace: null,
                activationId: null,
                activationTimestamp: null,
                dcpServiceId: null,
                dcpKeyfieldLocators: [],
                recommenderServices: [],
                anonymizeIP: null,
                projectJS: null,
                snippetId: null,
                plugins: [],
                domContentLoaded: !1,
                experimental: {}
            }, this.on(r.DATA_LOADED, this.oe), this.on(r.ACTIVATE, this.se), this.on(r.RECORD_GLOBAL_DECISION, this.ue), this.on(r.SET_DOMCONTENTLOADED, this.ce)
        },
        getRevision: function() {
            return this.L.revision
        },
        getGlobalHoldbackThreshold: function() {
            return this.L.holdback
        },
        getProjectId: function() {
            return this.L.projectId
        },
        getSnippetId: function() {
            return this.L.snippetId
        },
        getAccountId: function() {
            return this.L.accountId
        },
        getNamespace: function() {
            return this.L.namespace
        },
        getActivationId: function() {
            return this.L.activationId
        },
        getActivationTimestamp: function() {
            return this.L.activationTimestamp
        },
        getAnonymizeIP: function() {
            return this.L.anonymizeIP
        },
        isGlobalHoldback: function() {
            return !!this.L.isGlobalHoldback
        },
        getListTargetingKeys: function() {
            return this.L.listTargetingKeys.slice()
        },
        getDCPServiceId: function() {
            return this.L.dcpServiceId
        },
        getDCPKeyfieldLocators: function() {
            return this.L.dcpKeyfieldLocators
        },
        getRecommenderServices: function() {
            return this.L.recommenderServices
        },
        getProjectJS: function() {
            return this.L.projectJS
        },
        getPlugins: function() {
            return this.L.plugins
        },
        getExperimental: function() {
            return a.safeReference(this.L.experimental)
        },
        domContentLoadedHasFired: function() {
            return this.L.domContentLoaded
        },
        se: function(e) {
            this.L.activationId = e.activationId, this.L.activationTimestamp = e.activationTimestamp, this.L.isGlobalHoldback = null
        },
        ue: function(e) {
            var t = e.isGlobalHoldback;
            if (null !== this.L.isGlobalHoldback && this.L.isGlobalHoldback !== t) throw new Error("Attempted to change already set global holdback!");
            this.L.isGlobalHoldback = t, this.emitChange()
        },
        oe: function(e) {
            var t = i.pick(e.data, ["holdback", "accountId", "projectId", "snippetId", "namespace", "revision", "listTargetingKeys", "dcpServiceId", "dcpKeyfieldLocators", "recommenderServices", "anonymizeIP", "plugins", "projectJS", "experimental"]);
            if (0 !== i.keys(t).length) {
                var n = {
                    listTargetingKeys: [],
                    dcpServiceId: null,
                    dcpKeyfieldLocators: []
                };
                i.extend(this.L, n, t), this.emitChange()
            }
        },
        ce: function() {
            this.L.domContentLoaded = !0, this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                effectiveReferrer: null,
                effectiveVariationId: null
            }, this.on(r.INITIALIZE_STATE, this.le)
        },
        getEffectiveReferrer: function() {
            return this.L.effectiveReferrer
        },
        getEffectiveVariationId: function() {
            return this.L.effectiveVariationId
        },
        le: function(e) {
            i.isUndefined(e.effectiveReferrer) || (this.L.effectiveReferrer = e.effectiveReferrer), i.isUndefined(e.effectiveVariationId) || (this.L.effectiveVariationId = e.effectiveVariationId), this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(41);
    e.exports = {
        initialize: function() {
            this.L = {
                originalPushState: null,
                originalReplaceState: null
            }, this.on(r.ENSURE_ORIGINAL_PUSHSTATE, this.de), this.on(r.ENSURE_ORIGINAL_REPLACESTATE, this.fe)
        },
        getOriginalPushState: function() {
            return this.L.originalPushState
        },
        getOriginalReplaceState: function() {
            return this.L.originalReplaceState
        },
        de: function() {
            this.L.originalPushState || (this.L.originalPushState = i.bind(a.getGlobal("history").pushState, a.getGlobal("history")))
        },
        fe: function() {
            this.L.originalReplaceState || (this.L.originalReplaceState = i.bind(a.getGlobal("history").replaceState, a.getGlobal("history")))
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(23);
    t.getUserAgent = function() {
        return window.navigator.userAgent
    }, t.getLocationSearch = function() {
        return window.location.search
    }, t.getNavigatorLanguage = function() {
        return window.navigator.language || window.navigator.userLanguage
    }, t.getHref = function() {
        return window.location.href
    }, t.getLocation = function() {
        return window.location
    }, t.setLocation = function(e) {
        window.location.replace(e)
    }, t.setGlobal = function(e, t) {
        window[e] = t
    }, t.getGlobal = function(e) {
        return window[e]
    }, t.addEventListener = function() {
        return window.addEventListener.apply(window, arguments)
    }, t.removeEventListener = function() {
        return window.removeEventListener.apply(window, arguments)
    }, t.isMutationObserverAPISupported = function() {
        return !i.isUndefined(window.MutationObserver)
    }, t.alert = function(e) {
        alert(e)
    }, t.setTimeout = function(e, t) {
        return setTimeout((function() {
            try {
                e()
            } catch (e) {
                r.warn("Deferred function threw error:", e)
            }
        }), t)
    }, t.setInterval = function(e, t) {
        return setInterval((function() {
            try {
                e()
            } catch (e) {
                r.warn("Polling function threw error:", e)
            }
        }), t)
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.DATA_LOADED, this.k), this.on(r.SET_INTEGRATION_SETTINGS, this.ge)
        },
        k: function(e) {
            i.isEmpty(e.data.integrationSettings) || (i.each(e.data.integrationSettings, i.bind((function(e) {
                this.L[e.id] = e
            }), this)), this.emitChange())
        },
        ge: function(e) {
            var t = this.L[e.id];
            t ? i.extend(t, e) : this.L[e.id] = e
        },
        getAll: function() {
            return i.cloneDeep(i.values(this.L))
        },
        get: function(e) {
            return i.cloneDeep(this.L[e])
        },
        getReference: function(e) {
            return this.L[e]
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(23),
        o = "*";
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.LOAD_PERSISTED_LAYER_STATES, this.pe), this.on(r.RECORD_LAYER_DECISION, this.he), this.on(r.RECORD_LAYER_DECISION_EVENT_ID, this._e)
        },
        getLayerState: function(e, t) {
            if (this.L[e]) {
                var n = this.L[e];
                if (i.keys(n).length > 1 && !t) throw new Error("View Id must be specified when more than one layerState for layer.");
                return t ? i.cloneDeep(i.find(n, {
                    pageId: t
                })) : i.cloneDeep(n[o])
            }
        },
        getLayerStates: function(e) {
            var t = [];
            for (var n in this.L) i.forEach(this.L[n], (function(n) {
                (i.isUndefined(e) || n.namespace === e) && t.push(i.cloneDeep(n))
            }));
            return t
        },
        getLayerStatesForAnalytics: function() {
            var e = [];
            for (var t in this.L) i.forEach(this.L[t], (function(t) {
                e.push(i.pick(t, ["layerId", "decision", "decisionEventId"]))
            }));
            return e
        },
        pe: function(e) {
            e.merge || (this.L = {}), i.each(e.layerStates, i.bind((function(e) {
                var t = e.layerId;
                e.pageId || (e.pageId = e.viewId);
                var n = e.pageId || o,
                    r = this.L[t];
                if (i.isUndefined(r)) this.L[t] = {}, this.L[t][n] = e;
                else {
                    var a = r[n];
                    (!a || e.decisionTimestamp > (a.decisionTimestamp || 0)) && (this.L[t][n] = e)
                }
            }), this)), this.emitChange()
        },
        he: function(e) {
            var t = {
                    layerId: e.layerId,
                    revision: e.revision,
                    namespace: e.namespace,
                    pageId: e.pageId,
                    decisionTicket: e.decisionTicket,
                    decision: e.decision,
                    decisionActivationId: e.activationId,
                    decisionTimestamp: e.timestamp,
                    decisionEventId: null
                },
                n = this.L[e.layerId] || {};
            e.pageId ? (delete n[o], n[e.pageId] = t) : (n = {}, n[o] = t), this.L[e.layerId] = n, this.emitChange()
        },
        _e: function(e) {
            var t = e.layerId,
                n = e.pageId || o;
            return this.L[t] ? this.L[t][n] ? (this.L[t][n].decisionEventId = e.decisionId, void this.emitChange()) : void a.warn("Not recording decision event: Layer state not found for view", n) : void a.warn("Not recording decision event: Campaign not registered", t)
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22),
        o = n(45);
    e.exports = {
        initialize: function() {
            this.L = {
                layers: {},
                experiments: {},
                variations: {}
            }, this.on(r.DATA_LOADED, this.k)
        },
        k: function(e) {
            if (!i.isEmpty(e.data.layers)) {
                var t = this;
                i.each(e.data.layers, (function(e) {
                    i.each(e.experiments, (function(n) {
                        e.pageIds || (e.pageIds = e.viewIds), n.campaignName || o.isSingleExperimentPolicy(e.policy) ? o.isSingleExperimentPolicy(e.policy) && e.groupId && (n.groupId = e.groupId) : n.campaignName = e.name, i.each(n.variations, (function(e) {
                            i.each(e.actions, (function(e) {
                                e.pageId || (e.pageId = e.viewId)
                            })), t.L.variations[e.id] = e
                        })), t.L.experiments[n.id] = n
                    })), a.deepFreeze(e), t.L.layers[e.id] = e
                })), this.emitChange()
            }
        },
        getAll: function() {
            return a.safeReference(i.values(this.L.layers))
        },
        getCampaignsMap: function() {
            return a.safeReference(this.L.layers)
        },
        getExperimentsMap: function() {
            return a.safeReference(this.L.experiments)
        },
        getVariationsMap: function() {
            return a.safeReference(this.L.variations)
        },
        getCount: function() {
            return i.keys(this.L.layers).length
        },
        getAllByPageIds: function(e) {
            return a.safeReference(i.filter(this.L.layers, (function(t) {
                return i.some(e, i.partial(i.includes, t.pageIds))
            })))
        },
        get: function(e) {
            return a.safeReference(this.L.layers[e])
        },
        getLayerByExperimentId: function(e) {
            var t = i.find(this.L.layers, (function(t) {
                return i.find(t.experiments, {
                    id: e
                })
            }));
            return a.safeReference(t)
        },
        getExperimentByVariationId: function(e) {
            var t;
            return i.some(this.L.layers, (function(n) {
                return i.some(n.experiments, (function(n) {
                    return i.find(n.variations, {
                        id: e
                    }) && (t = n), t
                })), t
            })), a.safeReference(t)
        }
    }
}), (function(e, t) {
    var n = "single_experiment",
        i = "multivariate";
    t.isSingleExperimentPolicy = function(e) {
        return e === n || e === i
    }
}), (function(e, t, n) {
    var i = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                logs: []
            }, this.on(i.LOG, this.ve)
        },
        getLogs: function() {
            return this.L.logs
        },
        ve: function(e) {
            this.L.logs.push(e), this.emitChange()
        },
        b: function() {
            return this.L.logs.slice()
        }
    }
}), (function(e, t, n) {
    var i = n(7),
        r = n(22);
    e.exports = {
        initialize: function() {
            this.L = {
                data: null,
                hasTracked: null
            }, this.on(i.LOAD_REDIRECT_DATA, this.me), this.on(i.REGISTER_TRACKED_REDIRECT_DATA, this.Ee)
        },
        get: function() {
            return r.safeReference(this.L.data)
        },
        hasTracked: function() {
            return this.L.hasTracked
        },
        me: function(e) {
            r.deepFreeze(e), this.L.data = e, this.L.hasTracked = !1, this.emitChange()
        },
        Ee: function() {
            this.L.hasTracked = !0
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(26),
        o = 1e3;
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.SET_PENDING_EVENT, this.Ie), this.on(r.REMOVE_PENDING_EVENT, this.ye), this.on(r.LOAD_PENDING_EVENTS, this.Se)
        },
        getEvents: function() {
            return this.L
        },
        getEventsString: function() {
            return a.stringify(this.L)
        },
        Ie: function(e) {
            i.keys(this.L).length >= o && this.Te();
            var t = e.id,
                n = e.retryCount;
            this.L[t] && this.L[t].retryCount === n || (this.L[t] = {
                id: t,
                timeStamp: e.timeStamp,
                data: e.data,
                retryCount: n
            }, this.emitChange())
        },
        ye: function(e) {
            delete this.L[e.id], this.emitChange()
        },
        Se: function(e) {
            this.L = e.events, this.Te(), this.emitChange()
        },
        Te: function() {
            for (var e = i.sortBy(this.L, "timeStamp"), t = 0; t <= e.length - o; t++) delete this.L[e[t].id];
            this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(25);
    e.exports = {
        initialize: function() {
            this.L = {}, this.L[a.PerformanceData.performance_marks] = {}, this.on(r.SET_PERFORMANCE_MARKS_DATA, this.Ae)
        },
        Ae: function(e) {
            i.isUndefined(this.L[a.PerformanceData.performance_marks][e.name]) && (this.L[a.PerformanceData.performance_marks][e.name] = []), this.L[a.PerformanceData.performance_marks][e.name].push(e.data), this.emitChange()
        },
        getMarks: function() {
            return i.mapValues(this.L[a.PerformanceData.performance_marks], (function(e) {
                return i.map(e, (function(e) {
                    return [e.startTime, e.duration]
                }))
            }))
        },
        getDurationsFor: function(e) {
            return i.reduce(e, i.bind((function(e, t) {
                var n = this.L[a.PerformanceData.performance_marks][t];
                return n && (e[t] = Math.round(i.reduce(n, (function(e, t) {
                    return e + t.duration
                }), 0))), e
            }), this), {})
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(25),
        o = n(23);
    e.exports = {
        initialize: function() {
            this.L = i.mapValues(a.PluginTypes, (function() {
                return {}
            })), this.on(r.REGISTER_PLUGIN, this.we)
        },
        we: function(e) {
            var t = e.type,
                n = e.name,
                i = e.plugin;
            if (!t || !n) throw new Error("Missing information needed to register plugins: " + t + ":" + n);
            if (!this.L[t]) throw new Error("Invalid plugin type specified: " + t);
            this.L[t][n] = i, o.debug("Plugin Store: Registering Plugin :", e)
        },
        getAllPlugins: function(e) {
            if (e) {
                if (this.L[e]) return this.L[e];
                throw new Error("Invalid plugin type: " + e)
            }
            return this.L
        },
        getPlugin: function(e, t) {
            if (!t || !e) throw new Error("Missing plugin parameters");
            var n = this.getAllPlugins(e);
            return n[t] || null
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(19);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.SET_VISITOR_ATTRIBUTE_PENDING, this.be)
        },
        getPendingAttributeValue: function(e) {
            return e = i.isArray(e) ? e.concat("pending") : [e, "pending"], a.getFieldValue(this.L, e)
        },
        be: function(e) {
            a.setFieldValue(this.L, e.key, {
                pending: e.pending
            }), this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                layerId: null
            }, this.on(r.ANNOUNCE_PENDING_REDIRECT, this.me)
        },
        isExpectingRedirect: function() {
            return i.isString(this.L.layerId)
        },
        getLayerId: function() {
            return this.L.layerId
        },
        me: function(e) {
            this.isExpectingRedirect() || (this.L.layerId = e.layerId, this.emitChange())
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                inRumSample: !1,
                id: null,
                src: null,
                RumHost: null,
                data: {
                    extras: {}
                },
                apis: {},
                DOMObservation: {}
            }, this.on(r.SET_RUM_DATA, this.De), this.on(r.RECORD_API_USAGE, this.Re), this.on(r.INITIALIZE_CHANGE_METRICS, this.Oe), this.on(r.RECORD_CHANGE_MACROTASK_RATE, this.Ne), this.on(r.RECORD_CHANGE_OVERHEATED, this.Ce), this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE, this.Pe)
        },
        De: function(e) {
            i.merge(this.L, e), this.emitChange()
        },
        Re: function(e) {
            this.L.apis[e.methodName] || (this.L.apis[e.methodName] = 0), this.L.apis[e.methodName]++, this.emitChange()
        },
        Oe: function() {
            i.isUndefined(this.L.data.extras.changeMacrotaskRate) && (this.L.data.extras.changeMacrotaskRate = 0), i.isUndefined(this.L.data.extras.numOverheatedChanges) && (this.L.data.extras.numOverheatedChanges = 0)
        },
        Ne: function(e) {
            i.isUndefined(this.L.data.extras.changeMacrotaskRate) && (this.L.data.extras.changeMacrotaskRate = 0), e.changeMacrotaskRate > this.L.data.extras.changeMacrotaskRate && (this.L.data.extras.changeMacrotaskRate = e.changeMacrotaskRate), this.emitChange()
        },
        Ce: function() {
            i.isUndefined(this.L.data.extras.numOverheatedChanges) && (this.L.data.extras.numOverheatedChanges = 0), this.L.data.extras.numOverheatedChanges++, this.emitChange()
        },
        Pe: function(e) {
            this.L.DOMObservation[e.counterName] || (this.L.DOMObservation[e.counterName] = 0), this.L.DOMObservation[e.counterName]++, this.emitChange()
        },
        getSampleRum: function() {
            return this.L.inRumSample
        },
        getRumId: function() {
            return this.L.id
        },
        getRumHost: function() {
            return this.L.RumHost
        },
        getApiData: function() {
            return this.L.apis
        },
        getDOMObservationData: function() {
            return this.L.DOMObservation
        },
        getRumData: function() {
            return i.cloneDeep(this.L.data)
        },
        getScriptSrc: function() {
            return this.L.src
        }
    }
}), (function(e, t, n) {
    var i = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                initialized: !1,
                natives: {}
            }, this.on(i.SANDBOXED_FUNCTIONS_ADDED, this.Le)
        },
        Le: function(e) {
            if (!e.sandboxedFunctions) throw new Error("No sandboxedFunctions found in payload");
            this.L.natives = e.sandboxedFunctions, this.L.initialized = !0, this.emitChange()
        },
        getAll: function() {
            return this.L.natives
        },
        get: function(e) {
            if (!e) throw new Error("Missing name parameter");
            return this.L.natives[e] || null
        },
        isInitialized: function() {
            return this.L.initialized
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(24),
        o = n(5),
        s = 18e5;
    e.exports = {
        initialize: function() {
            this.L = {
                lastSessionTimestamp: 0,
                sessionId: null
            }, this.on(r.REFRESH_SESSION, this.Ve), this.on(r.LOAD_SESSION_STATE, this.ke)
        },
        getState: function() {
            return i.cloneDeep(this.L)
        },
        getSessionId: function() {
            return this.L.sessionId
        },
        ke: function(e) {
            this.L.sessionId = e.sessionId, this.L.lastSessionTimestamp = e.lastSessionTimestamp, this.emitChange()
        },
        Ve: function() {
            var e = a.now(),
                t = this.L.lastSessionTimestamp;
            (!this.L.sessionId || e - t > s) && (this.L.sessionId = o.generate()), this.L.lastSessionTimestamp = e, this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.xe(), this.on(r.FINALIZE_BATCH_SNAPSHOT, this.Fe), this.on(r.REGISTER_PREVIOUS_BATCH, this.Me), this.on(r.REGISTER_TRACKER_VISITOR, this.Ue), this.on(r.REGISTER_TRACKER_EVENT, this.Ge), this.on(r.REGISTER_TRACKER_DECISION, this.Be), this.on(r.RESET_TRACKER_EVENTS, this.ze), this.on(r.RESET_TRACKER_STORE, this.xe), this.on(r.RESET_TRACKER_PREVIOUS_BATCHES, this.je), this.on(r.SET_TRACKER_POLLING, this.He), this.on(r.SET_TRACKER_BATCHING, this.Ke), this.on(r.SET_TRACKER_SEND_EVENTS, this.Ye), this.on(r.SET_TRACKER_PERSISTABLE_STATE, this.qe), this.on(r.SET_TRACKER_DIRTY, this.Xe), this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES, this.We)
        },
        getPersistableState: function() {
            return this.L.isDirty ? this.hasEventsToSend() || this.hasPreviousBatchesToSend() ? {
                data: this.L.data,
                decisions: this.L.decisions,
                decisionEvents: this.L.decisionEvents,
                previousBatches: this.L.previousBatches
            } : {} : null
        },
        qe: function(e) {
            i.isEmpty(this.L.data) || i.isEmpty(e.data) || (this.Fe(), this.L.previousBatches.push(this.getEventBatch())), this.L.data = e.data || {}, this.L.decisions = e.decisions || [], this.L.decisionEvents = e.decisionEvents || [], i.isEmpty(this.L.previousBatches) || i.isEmpty(e.previousBatches) ? this.L.previousBatches = e.previousBatches || [] : this.L.previousBatches = this.L.previousBatches.concat(e.previousBatches), this.emitChange()
        },
        Xe: function(e) {
            this.L.isDirty = e, this.emitChange()
        },
        Ge: function(e) {
            var t = this.Qe();
            !i.isEmpty(t.snapshots) && i.isEmpty(this.L.decisionEvents) || this.$e(), this.Je().events.push(e.event), this.L.decisions = e.decisions, this.Xe(!0)
        },
        Be: function(e) {
            this.L.decisionEvents.push(e.decisionEvent), this.L.decisions = e.decisions, this.Xe(!0)
        },
        Ue: function(e) {
            i.isEmpty(this.L.data) ? this.L.data = e.data : this.Fe(), this.L.data.visitors.push(e.visitor), this.L.decisions = e.decisions, this.L.decisionEvents = [], this.Xe(!0)
        },
        Me: function(e) {
            this.L.previousBatches.push(e), this.Xe(!0)
        },
        xe: function() {
            this.L = {
                polling: !1,
                shouldBatch: !0,
                data: {},
                decisions: [],
                decisionEvents: [],
                canSend: !1,
                isDirty: !1,
                previousBatches: []
            }, this.emitChange()
        },
        ze: function() {
            var e = this.Qe();
            this.L.data.visitors = [e], e.snapshots = [], this.Xe(!0)
        },
        je: function() {
            this.L.previousBatches = [], this.Xe(!0)
        },
        He: function(e) {
            this.L.polling = e, this.emitChange()
        },
        Ke: function(e) {
            this.L.shouldBatch = e, this.emitChange()
        },
        Ye: function(e) {
            this.L.canSend = e, this.emitChange()
        },
        getEventBatch: function() {
            return i.cloneDeep(this.L.data)
        },
        getPreviousBatches: function() {
            return i.cloneDeep(this.L.previousBatches)
        },
        Ze: function() {
            return this.L.decisionEvents.slice()
        },
        et: function() {
            this.L.decisionEvents = []
        },
        tt: function() {
            return this.L.decisions.slice()
        },
        isPolling: function() {
            return this.L.polling
        },
        shouldBatch: function() {
            return this.L.shouldBatch
        },
        Je: function() {
            return i.last(this.Qe().snapshots)
        },
        Qe: function() {
            return i.last(this.L.data.visitors)
        },
        $e: function() {
            var e = this.Ze(),
                t = this.Qe();
            t.snapshots.push({
                decisions: this.tt(),
                events: e
            }), this.et(), this.Xe(!0)
        },
        Fe: function() {
            this.L.decisionEvents.length > 0 && this.$e()
        },
        hasEventsToSend: function() {
            if (!i.isEmpty(this.L.decisionEvents)) return !0;
            if (!i.isEmpty(this.L.data)) {
                var e = i.some(this.L.data.visitors || [], (function(e) {
                    return e.snapshots.length > 0
                }));
                if (e) return !0
            }
            return !1
        },
        hasPreviousBatchesToSend: function() {
            return !i.isEmpty(this.L.previousBatches)
        },
        canSend: function() {
            return this.L.canSend
        },
        We: function(e) {
            var t = this.Qe();
            t && (t.attributes = e.attributes)
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.SET_UA_DATA, this.k)
        },
        k: function(e) {
            i.isEmpty(this.L) && (this.L = e.data)
        },
        get: function() {
            return i.cloneDeep(this.L)
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(23),
        o = {
            globalTags: {},
            viewStates: {},
            shouldBatch: !1
        };
    e.exports = {
        initialize: function() {
            this.L = i.cloneDeep(o), this.on(r.REGISTER_VIEWS, this.nt), this.on(r.SET_VIEW_ACTIVE_STATE, this.it), this.on(r.UPDATE_PARSED_VIEW_METADATA, this.rt), this.on(r.UPDATE_USER_SUPPLIED_METADATA, this.at), this.on(r.TRACK_VIEW_ACTIVATED_EVENT, this.ot), this.on(r.SET_GLOBAL_TAGS, this.st), this.on(r.ACTIVATE, this.ut), this.on(r.SET_VIEW_BATCHING, this.Ke)
        },
        getAll: function() {
            var e = {};
            for (var t in this.L.viewStates) e[t] = this.getViewState(t);
            return e
        },
        shouldBatch: function() {
            return this.L.shouldBatch
        },
        getViewState: function(e) {
            var t = i.cloneDeep(this.L.viewStates[e]),
                n = this.L.globalTags;
            return t.metadata = i.extend({}, t.parsedMetadata, n, t.userSuppliedMetadata), t
        },
        getActiveViewTags: function() {
            var e = this.getActiveViewStates(),
                t = i.map(e, (function(e) {
                    return e.metadata
                })),
                n = [{}].concat(t);
            return i.extend.apply(i, n)
        },
        getActivationEventId: function(e) {
            return this.L.viewStates[e] ? this.L.viewStates[e].activationEventId : null
        },
        getActiveViewStates: function() {
            return i.reduce(this.L.viewStates, i.bind((function(e, t, n) {
                return this.isViewActive(n) && e.push(this.getViewState(n)), e
            }), this), [])
        },
        isViewActive: function(e) {
            var t = this.L.viewStates[e];
            return t || a.warn("No Page registered with id", e), !!t.isActive
        },
        getGlobalTags: function() {
            return i.cloneDeep(this.L.globalTags)
        },
        ut: function() {
            this.L.viewStates = {}, this.emitChange()
        },
        nt: function(e) {
            i.each(e.views, i.bind((function(e) {
                var t = e.id;
                this.L.viewStates[t] = {
                    id: t,
                    isActive: !1,
                    activatedTimestamp: null,
                    activationEventId: null,
                    parsedMetadata: {},
                    userSuppliedMetadata: {}
                }
            }), this)), this.emitChange()
        },
        it: function(e) {
            var t = e.view.id;
            if (!this.L.viewStates[t]) throw new Error("No view exists with id " + t);
            this.L.viewStates[t].isActive = e.isActive, e.isActive ? this.L.viewStates[t].activatedTimestamp = e.timestamp : (this.L.viewStates[t].parsedMetadata = {}, this.L.viewStates[t].userSuppliedMetadata = {}), this.emitChange()
        },
        rt: function(e) {
            var t = e.pageId;
            if (!this.L.viewStates[t]) throw new Error("No view exists with id " + t);
            i.assign(this.L.viewStates[t].parsedMetadata, e.metadata), this.emitChange()
        },
        at: function(e) {
            var t = e.pageId;
            if (!this.L.viewStates[t]) throw new Error("No view exists with id " + t);
            i.assign(this.L.viewStates[t].userSuppliedMetadata, e.metadata), this.emitChange()
        },
        ot: function(e) {
            var t = e.pageId;
            this.L.viewStates[t] && (this.L.viewStates[t].activationEventId = e.eventData.eventId, this.emitChange())
        },
        st: function(e) {
            i.extend(this.L.globalTags, e), this.emitChange()
        },
        Ke: function(e) {
            this.L.shouldBatch = e, this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22);
    e.exports = {
        initialize: function() {
            this.L = {
                views: {},
                apiNamesToViews: {}
            }, this.on(r.DATA_LOADED, this.k)
        },
        getAll: function() {
            return a.safeReference(i.values(this.L.views))
        },
        getPagesMap: function() {
            return a.safeReference(this.L.views)
        },
        get: function(e) {
            return a.safeReference(this.L.views[e])
        },
        getByApiName: function(e) {
            return a.safeReference(this.L.apiNamesToViews[e])
        },
        apiNameToId: function(e) {
            var t = this.L.apiNamesToViews[e];
            if (t) return t.id
        },
        idToApiName: function(e) {
            var t = this.L.views[e];
            if (t) return t.apiName
        },
        getNumberOfPages: function() {
            return i.keys(this.L.views).length
        },
        getAllViewsForActivationType: function(e) {
            return i.filter(this.L.views, {
                activationType: e
            })
        },
        k: function(e) {
            i.isEmpty(e.data.views) || (i.each(e.data.views, i.bind((function(e) {
                a.deepFreeze(e), this.L.views[e.id] = e, this.L.apiNamesToViews[e.apiName] = e
            }), this)), this.emitChange())
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(19);
    e.exports = {
        initialize: function() {
            this.L = {
                profile: {},
                metadata: {},
                visitorId: null
            }, this.on(r.SET_VISITOR_ID_VIA_API, this.ct), this.on(r.SET_VISITOR_ATTRIBUTES, this.dt), this.on(r.LOAD_EXISTING_VISITOR_PROFILE, this.ft)
        },
        getVisitorProfile: function() {
            return this.L.profile
        },
        getVisitorProfileMetadata: function() {
            return this.L.metadata
        },
        getAttribute: function(e) {
            var t = this.L.profile;
            return i.cloneDeep(a.getFieldValue(t, e))
        },
        getAttributeMetadata: function(e) {
            return i.cloneDeep(this.L.metadata[e])
        },
        getVisitorIdFromAPI: function() {
            return this.L.visitorId
        },
        ft: function(e) {
            this.L.profile = e.profile, this.L.metadata = e.metadata, this.emitChange()
        },
        dt: function(e) {
            i.each(e.attributes, i.bind((function(e) {
                var t = e.key;
                a.setFieldValue(this.L.profile, t, e.value), e.metadata && i.forOwn(e.metadata, i.bind((function(e, n) {
                    a.setFieldValue(this.L.metadata, t.concat(n), e)
                }), this))
            }), this)), this.emitChange()
        },
        ct: function(e) {
            this.L.visitorId = e, this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.DATA_LOADED, this.pt)
        },
        getCustomBehavioralAttributes: function() {
            return i.filter(this.L, (function(e) {
                return !!e.rule_json
            }))
        },
        getVisitorAttribute: function(e) {
            var t = i.values(this.L);
            if (e.datasourceId && (t = i.filter(t, {
                    dcp_datasource_id: String(e.datasourceId)
                })), e.attributeName && e.attributeId) throw new Error("Must not specify both attribute name and attribute ID");
            if (e.attributeId) {
                var n = this.L[e.attributeId];
                if (!n) throw new Error("Unrecognized attribute ID: " + e.attributeId);
                return n
            }
            if (e.attributeName) {
                var r = i.filter(t, {
                    name: e.attributeName
                });
                if (!r.length) throw new Error("Unrecognized attribute name: " + e.attributeName);
                if (r.length > 1) throw new Error("Too many attributes with name: " + e.attributeName);
                return r[0]
            }
            throw new Error("Must specify attribute name or attribute ID")
        },
        pt: function(e) {
            i.isEmpty(e.data.visitorAttributes) || (i.each(e.data.visitorAttributes, i.bind((function(e) {
                this.L[e.id] = e
            }), this)), this.emitChange())
        }
    }
}), (function(e, t, n) {
    var i = (n(2), n(7));
    n(63).Event;
    e.exports = {
        initialize: function() {
            this.L = {
                events: [],
                foreignEvents: {},
                foreignEventQueues: {}
            }, this.on(i.SET_VISITOR_EVENTS, this.k), this.on(i.SET_FOREIGN_VISITOR_EVENTS, this.ht), this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE, this._t)
        },
        getEvents: function() {
            return this.L.events
        },
        getForeignEvents: function() {
            return this.L.foreignEvents
        },
        getForeignEventQueues: function() {
            return this.L.foreignEventQueues
        },
        k: function(e) {
            this.L.events = e, this.emitChange()
        },
        ht: function(e) {
            this.L.foreignEvents[e.key] = e.value
        },
        _t: function(e) {
            this.L.foreignEventQueues[e.key] = e.value
        }
    }
}), (function(e, t, n) {
    function i(e, t, n, i, r) {
        this[o.FIELDS.NAME] = e, this[o.FIELDS.TYPE] = t, a.isString(n) && n.trim().length > 0 && (this[o.FIELDS.CATEGORY] = n), i && a.keys(i).length > 0 && (this[o.FIELDS.OPTIONS] = i), a.isUndefined(r) || (this[o.FIELDS.REVENUE] = r)
    }

    function r(e, t, n, i) {
        this.eventBase = e, this[o.FIELDS.TIME] = t, a.isUndefined(n) || (this[o.FIELDS.SESSION_ID] = n), a.isUndefined(i) || (this[o.FIELDS.SESSION_INDEX] = i)
    }
    var a = n(2),
        o = n(64),
        s = n(19).getFieldValue,
        u = n(65);
    t.EventBase = i, i.prototype.digest = function() {
        var e = function(e, t) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t)
            },
            t = [];
        if (t.push(e(o.FIELDS.NAME, this[o.FIELDS.NAME])), t.push(e(o.FIELDS.TYPE, this[o.FIELDS.TYPE])), this[o.FIELDS.CATEGORY] && t.push(e(o.FIELDS.CATEGORY, this[o.FIELDS.CATEGORY])), this[o.FIELDS.REVENUE] && t.push(e(o.FIELDS.REVENUE, this[o.FIELDS.REVENUE])), !this[o.FIELDS.OPTIONS]) return t.join("&");
        var n = this[o.FIELDS.OPTIONS] || {},
            i = a.filter(a.keys(n), (function(e) {
                return n.hasOwnProperty(e)
            }));
        i = i.sort();
        for (var r = 0; r < i.length; r++) t.push(e(i[r], n[i[r]]));
        return t.join("&")
    }, i.prototype.hash = function() {
        return this.hash_ ? this.hash_ : (this.hash_ = u.hashToHex(u.toByteString(this.digest()), u.Seed.BEHAVIOR_EVENT), this.hash_)
    }, i.prototype.setHash = function(e) {
        this.hash_ = e
    }, i.prototype.reHash = function() {
        this.hash_ = null, this.hash()
    }, i.prototype.equals = function(e) {
        if (this.hash() !== e.hash()) return !1;
        if (this[o.FIELDS.NAME] !== e[o.FIELDS.NAME] || this[o.FIELDS.TYPE] !== e[o.FIELDS.TYPE] || this[o.FIELDS.CATEGORY] !== e[o.FIELDS.CATEGORY] || this[o.FIELDS.REVENUE] !== e[o.FIELDS.REVENUE]) return !1;
        if (!this[o.FIELDS.OPTIONS] && !e[o.FIELDS.OPTIONS]) return !0;
        var t = this[o.FIELDS.OPTIONS] || {},
            n = e[o.FIELDS.OPTIONS] || {},
            i = a.filter(a.keys(t), (function(e) {
                return t.hasOwnProperty(e)
            })),
            r = a.filter(a.keys(n), (function(e) {
                return n.hasOwnProperty(e)
            }));
        if (i.length !== r.length) return !1;
        for (var s = 0; s < i.length; s++) {
            var u = i[s];
            if (!n.hasOwnProperty(u) || t[u] !== n[u]) return !1
        }
        return !0
    }, i.prototype.getValueOrDefault = function(e, t) {
        var n = s(this, e);
        return a.isUndefined(n) ? t : n
    }, i.prototype.setFieldValue = function(e, t) {
        e !== o.FIELDS.NAME && e !== o.FIELDS.TYPE && e !== o.FIELDS.CATEGORY && e !== o.FIELDS.REVENUE && e !== o.FIELDS.OPTIONS || (this[e] = t, this.reHash())
    }, t.Event = r, r.prototype.getValueOrDefault = function(e, t) {
        if (0 === e.length) return this;
        var n = {};
        n[o.FIELDS.TIME] = this[o.FIELDS.TIME], n[o.FIELDS.SESSION_ID] = this[o.FIELDS.SESSION_ID], n[o.FIELDS.SESSION_INDEX] = this[o.FIELDS.SESSION_INDEX];
        var i = s(n, e);
        return a.isUndefined(i) ? this.eventBase.getValueOrDefault(e, t) : i
    }, r.prototype.setFieldValue = function(e, t) {
        e === o.FIELDS.TIME || e === o.FIELDS.SESSION_ID || e === o.FIELDS.SESSION_INDEX ? this[e] = t : this.eventBase.setFieldValue(e, t)
    };
    var c = {
        n: "name",
        y: "type",
        c: "category",
        r: "revenue",
        s: "session_id",
        o: "tags",
        si: "session_index"
    };
    r.prototype.readableEvent = function() {
        var e, t, n = function(e) {
                return a.isString(e) ? '"' + e + '"' : e
            },
            i = this,
            r = [];
        a.each([o.FIELDS.NAME, o.FIELDS.TYPE, o.FIELDS.CATEGORY, o.FIELDS.REVENUE, o.FIELDS.SESSION_ID], (function(o) {
            e = c[o], t = i.getValueOrDefault([o]), a.isUndefined(t) || r.push(e + ": " + n(t))
        }));
        var s = [];
        if (e = c[o.FIELDS.OPTIONS], t = i.getValueOrDefault([o.FIELDS.OPTIONS]), a.isUndefined(t) || (a.each(t, (function(e, t) {
                s.push(t + ": " + String(n(e)))
            })), r.push(e + ": {\n\t\t" + s.join(",\n\t\t") + "\n\t}")), t = i.getValueOrDefault([o.FIELDS.TIME]), a.isNumber(t) && (t = n(new Date(t).toString())), !a.isUndefined(t)) {
            var u = "timestamp";
            r.push(u + ": " + t)
        }
        return "{\n\t" + r.join(",\n\t") + "\n}"
    }, r.prototype.toObject = function(e) {
        var t, n, i = {},
            r = this;
        a.each([o.FIELDS.NAME, o.FIELDS.TYPE, o.FIELDS.CATEGORY, o.FIELDS.REVENUE, o.FIELDS.OPTIONS, o.FIELDS.SESSION_INDEX], (function(e) {
            t = c[e], n = r.getValueOrDefault([e], e === o.FIELDS.OPTIONS ? {} : void 0), a.isUndefined(n) || (i[t] = n)
        }));
        var s = c[o.FIELDS.OPTIONS],
            u = c[o.FIELDS.REVENUE];
        if (e && e.revenueAsTag && i[u] && (i[s] = i[s] || {}, i[s][u] = i[u], delete i[u]), n = r.getValueOrDefault([o.FIELDS.TIME]), a.isNumber(n))
            if (e && e.timeAsTimestamp) {
                var l = "timestamp";
                i[l] = new Date(n)
            } else {
                var d = "time";
                i[d] = n
            }
        return i
    }
}), (function(e, t) {
    t.FIELDS = {
        NAME: "n",
        TIME: "t",
        TYPE: "y",
        CATEGORY: "c",
        REVENUE: "r",
        SESSION_ID: "s",
        OPTIONS: "o",
        SESSION_INDEX: "si"
    }, t.FIELDS_V0_2 = {
        name: t.FIELDS.NAME,
        time: t.FIELDS.TIME,
        type: t.FIELDS.TYPE,
        category: t.FIELDS.CATEGORY,
        tags: t.FIELDS.OPTIONS,
        session_index: t.FIELDS.SESSION_INDEX
    }
}), (function(e, t, n) {
    var i = n(66).v3,
        r = {
            IGNORING: 0,
            BUCKETING: 1,
            FALLBACK: 2,
            HOLDBACK: 3,
            BEHAVIOR_EVENT: 2716770798
        },
        a = Math.pow(2, 32),
        o = function(e, t, n) {
            return Math.floor(u(e, t) * n)
        },
        s = function(e, t) {
            var n = i(e, t);
            return (n >>> 16).toString(16) + (65535 & n).toString(16)
        },
        u = function(e, t) {
            var n = i(e, t);
            return (n >>> 0) / a
        },
        c = function(e) {
            var t = String.fromCharCode;
            return e.replace(/[\S\s]/gi, (function(e) {
                e = e.charCodeAt(0);
                var n = t(255 & e);
                return e > 255 && (n = t(e >>> 8 & 255) + n), e > 65535 && (n = t(e >>> 16) + n), n
            }))
        };
    e.exports = {
        Seed: r,
        hashToHex: s,
        hashToInt: o,
        hashToReal: u,
        toByteString: c
    }
}), (function(e, t, n) {
    !(function() {
        function t(e, t) {
            for (var n, i = e.length, r = t ^ i, a = 0; i >= 4;) n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), n ^= n >>> 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ n, i -= 4, ++a;
            switch (i) {
                case 3:
                    r ^= (255 & e.charCodeAt(a + 2)) << 16;
                case 2:
                    r ^= (255 & e.charCodeAt(a + 1)) << 8;
                case 1:
                    r ^= 255 & e.charCodeAt(a), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16)
            }
            return r ^= r >>> 13, r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16), r ^= r >>> 15, r >>> 0
        }

        function n(e, t) {
            var n, i, r, a, o, s, u, c;
            for (n = 3 & e.length, i = e.length - n, r = t, o = 3432918353, s = 461845907, c = 0; c < i;) u = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, u = (65535 & u) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, r ^= u, r = r << 13 | r >>> 19, a = 5 * (65535 & r) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (65535 & a) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
            switch (u = 0, n) {
                case 3:
                    u ^= (255 & e.charCodeAt(c + 2)) << 16;
                case 2:
                    u ^= (255 & e.charCodeAt(c + 1)) << 8;
                case 1:
                    u ^= 255 & e.charCodeAt(c), u = (65535 & u) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, r ^= u
            }
            return r ^= e.length, r ^= r >>> 16, r = 2246822507 * (65535 & r) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (65535 & r) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 16, r >>> 0
        }
        var i = n;
        i.v2 = t, i.v3 = n;
        e.exports = i
    })()
}), (function(e, t, n) {
    var i = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                baseMap: {},
                eventQueue: [],
                lastEvent: null,
                initialized: !1,
                cleared: !1
            }, this.on(i.UPDATE_BEHAVIOR_STORE, this.vt)
        },
        getBaseMap: function() {
            return this.L.baseMap
        },
        getEventQueue: function() {
            return this.L.eventQueue
        },
        getLastEvent: function() {
            return this.L.lastEvent
        },
        getCleared: function() {
            return this.L.cleared
        },
        getInitialized: function() {
            return this.L.initialized
        },
        vt: function(e) {
            this.L[e.key] = e.value
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                randomId: null
            }, this.on(r.SET_VISITOR_ID, this.k)
        },
        getBucketingId: function() {
            return this.getRandomId()
        },
        getRandomId: function() {
            return this.L.randomId
        },
        k: function(e) {
            i.extend(this.L, e), this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(26);
    e.exports = {
        initialize: function() {
            this.L = {
                variationIdMap: {},
                preferredLayerMap: {}
            }, this.on(r.UPDATE_VARIATION_ID_MAP, this.mt), this.on(r.MERGE_VARIATION_ID_MAP, this.Et), this.on(r.UPDATE_PREFERRED_LAYER_MAP, this.It), this.on(r.MERGE_PREFERRED_LAYER_MAP, this.yt)
        },
        getVariationIdMap: function() {
            return i.cloneDeep(this.L.variationIdMap)
        },
        getVariationIdMapString: function() {
            return a.stringify(this.L.variationIdMap)
        },
        mt: function(e) {
            var t = this.L.variationIdMap,
                n = t[e.layerId] || {};
            n[e.experimentId] !== e.variationId && (n[e.experimentId] = e.variationId, this.L.variationIdMap[e.layerId] = n, this.emitChange())
        },
        Et: function(e) {
            var t = this.getVariationIdMap(),
                n = e.variationIdMap;
            i.each(t || {}, (function(e, t) {
                n[t] ? i.assign(n[t], e) : n[t] = e
            })), this.L.variationIdMap = n, this.emitChange()
        },
        getPreferredLayerMap: function() {
            return i.cloneDeep(this.L.preferredLayerMap)
        },
        getPreferredLayerMapString: function() {
            return a.stringify(this.L.preferredLayerMap)
        },
        getPreferredLayerId: function(e) {
            return this.L.preferredLayerMap[e]
        },
        It: function(e) {
            this.L.preferredLayerMap[e.groupId] !== e.layerId && (this.L.preferredLayerMap[e.groupId] = e.layerId, this.emitChange())
        },
        yt: function(e) {
            var t = this.getPreferredLayerMap(),
                n = e.preferredLayerMap;
            i.assign(n, t), this.L.preferredLayerMap = n, this.emitChange()
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7);
    e.exports = {
        initialize: function() {
            this.L = {
                frames: [],
                defaultFrame: null,
                messages: [],
                subscribers: [],
                canonicalOrigins: null,
                disabled: !1
            }, this.on(r.XDOMAIN_SET_DEFAULT_FRAME, this.St), this.on(r.XDOMAIN_ADD_FRAME, this.Tt), this.on(r.XDOMAIN_SET_MESSAGE, this.At), this.on(r.XDOMAIN_ADD_SUBSCRIBER, this.wt), this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS, this.bt), this.on(r.XDOMAIN_SET_DISABLED, this.Dt)
        },
        getMessages: function() {
            return i.cloneDeep(this.L.messages)
        },
        getNextMessageId: function() {
            return this.L.messages.length
        },
        getMessageById: function(e) {
            return this.L.messages[e]
        },
        getSubscribers: function() {
            return this.L.subscribers
        },
        getFrames: function() {
            return this.L.frames
        },
        getNextFrameId: function() {
            return this.L.frames.length
        },
        getDefaultFrame: function() {
            return this.L.defaultFrame
        },
        getCanonicalOrigins: function() {
            return i.cloneDeep(this.L.canonicalOrigins)
        },
        isDisabled: function() {
            return this.L.disabled
        },
        St: function(e) {
            this.L.defaultFrame = e
        },
        Tt: function(e) {
            this.L.frames.push(e)
        },
        At: function(e) {
            this.L.messages[e.messageId] = e.message
        },
        wt: function(e) {
            this.L.subscribers.push(e.subscriber)
        },
        bt: function(e) {
            this.L.canonicalOrigins = e.canonicalOrigins
        },
        Dt: function(e) {
            this.L.disabled = e.disabled
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(22);
    e.exports = {
        initialize: function() {
            this.L = {}, this.on(r.DATA_LOADED, this.k)
        },
        k: function(e) {
            i.isEmpty(e.data.groups) || (i.each(e.data.groups, i.bind((function(e) {
                a.deepFreeze(e), this.L[e.id] = e
            }), this)), this.emitChange())
        },
        getAll: function() {
            return a.safeReference(i.values(this.L))
        },
        getGroupsMap: function() {
            return a.safeReference(this.L)
        },
        get: function(e) {
            return a.safeReference(this.L[e])
        }
    }
}), (function(e, t, n) {
    var i = n(73);
    t.initializeStore = i.initialize, t.addEvent = i.addEvent, t.getEvents = i.getEvents, t.usageInBytes = i.usageInBytes
}), (function(e, t, n) {
    function i(e) {
        I.dispatch(v.SET_VISITOR_EVENTS, e)
    }

    function r(e) {
        I.dispatch(v.UPDATE_BEHAVIOR_STORE, {
            key: "baseMap",
            value: e
        })
    }

    function a(e) {
        I.dispatch(v.UPDATE_BEHAVIOR_STORE, {
            key: "eventQueue",
            value: e
        })
    }

    function o(e) {
        I.dispatch(v.UPDATE_BEHAVIOR_STORE, {
            key: "lastEvent",
            value: e
        })
    }

    function s(e) {
        I.dispatch(v.UPDATE_BEHAVIOR_STORE, {
            key: "cleared",
            value: e
        })
    }

    function u() {
        I.dispatch(v.UPDATE_BEHAVIOR_STORE, {
            key: "initialized",
            value: !0
        })
    }

    function c() {
        return O.getEvents()
    }

    function l() {
        return N.getBaseMap()
    }

    function d() {
        return N.getEventQueue()
    }

    function f() {
        return N.getLastEvent()
    }

    function g() {
        return N.getCleared()
    }

    function p() {
        return N.getInitialized()
    }

    function h() {
        var e = c().concat(d()),
            t = !1;
        return e.length > P && (e = e.slice(-P), t = !0), i(e), a([]), t
    }
    var _ = n(2),
        v = n(7),
        m = n(24),
        E = n(74),
        I = n(9),
        y = n(23),
        S = n(75),
        T = t,
        A = n(63).Event,
        w = n(64),
        b = n(63).EventBase,
        D = n(89),
        R = n(16),
        O = R.get("stores/visitor_events"),
        N = R.get("stores/visitor_events_manager"),
        C = {
            EVENTBASE: "eb",
            HASH: "h",
            TIMEBASE: "tb",
            TIMESTAMPS: "ts",
            DELTA: "d",
            INDEX: "i"
        },
        P = 1e3;
    t.initialize = function(e, t) {
        if (!p()) {
            T.Rt(e, t);
            var n = c();
            n.length > 0 && o(n[n.length - 1]);
            var i = d();
            i.length > 0 && o(i[i.length - 1]), u()
        }
    }, t.addEvent = function(e) {
        y.debug("Behavior store: adding event", e);
        var t = T.Ot(e);
        o(t), a(d().concat(t)), D.reindexIfNecessary(f(), c(), d()), T.Nt(d())
    }, t.getEvents = function() {
        return d().length > 0 && (h() && D.sessionize(c()), T.Ct(c()), T.Nt(d())), c()
    }, T.Rt = function(e, t) {
        T.Pt(e, t) && (T.Ct(c()), T.Nt(d())), D.sessionize(c())
    }, T.Pt = function(e, t) {
        if (0 === e.length && 0 === t.length) return i([]), a([]), !1;
        var n = !1,
            r = e[0] || t[0];
        return C.EVENTBASE in r ? (i(T.Lt(e)), a(T.Lt(t))) : (n = !0, i(T.Vt(e)), a(T.Vt(t))), d().length > 0 && (h(), n = !0), i(T._updateBaseMapAndMaybeDedupe(c())), T._migrateEventBasesAndUpdateStore() && (n = !0), n
    }, T.Vt = function(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var i = e[n],
                r = T.kt(i);
            t[n] = new A(r, i[w.FIELDS.TIME])
        }
        return t
    }, T._migrateEventBasesAndUpdateStore = function() {
        var e = !1,
            t = T.xt();
        return D.applyMigrations(t) && (e = !0, r({}), i(T._updateBaseMapAndMaybeDedupe(c())), a(T._updateBaseMapAndMaybeDedupe(d()))), e
    }, T.Ft = function() {
        return m.now()
    }, T.Ot = function(e) {
        var t, n = e.name,
            i = e.type || "default",
            r = e.category || E.OTHER,
            a = e.tags || {};
        e.revenue && (t = e.revenue);
        var o = new b(n, i, r, a, t);
        o = T.Mt(o);
        var s = T.Ft(),
            u = new A(o, s, -1);
        return D.updateSessionId(f(), u), D.updateSessionIndex(f(), u), u
    }, T._updateBaseMapAndMaybeDedupe = function(e) {
        for (var t = 0; t < e.length; t++) e[t].eventBase = T.Mt(e[t].eventBase);
        return e
    }, T.Ct = function(e) {
        var t = T.Ut(e);
        S.persistBehaviorEvents(t)
    }, T.Nt = function(e) {
        var t = T.Ut(e);
        S.persistBehaviorEventQueue(t)
    }, T.Gt = function() {
        g() || (i([]), a([]), T.Ct(c()), T.Nt(d()), r({}), o(null), s(!0))
    }, T.Mt = function(e) {
        var t = e.hash(),
            n = l(),
            i = n[t];
        if (_.isUndefined(i)) return n[t] = [e], r(n), e;
        for (var a = 0; a < i.length; a++)
            if (e.equals(i[a])) return i[a];
        return i.push(e), r(n), e
    }, T.xt = function() {
        var e = [],
            t = l();
        for (var n in t) t.hasOwnProperty(n) && (e = e.concat(t[n]));
        return e
    }, T.Ut = function(e) {
        for (var t = function(e) {
                var t = {};
                t[w.FIELDS.NAME] = e.getValueOrDefault([w.FIELDS.NAME]), t[w.FIELDS.TYPE] = e.getValueOrDefault([w.FIELDS.TYPE]);
                var n = e.getValueOrDefault([w.FIELDS.CATEGORY]);
                _.isUndefined(n) || (t[w.FIELDS.CATEGORY] = n);
                var i = e.getValueOrDefault([w.FIELDS.REVENUE]);
                _.isUndefined(i) || (t[w.FIELDS.REVENUE] = i);
                var r = e.getValueOrDefault([w.FIELDS.OPTIONS]);
                return _.isUndefined(r) || (t[w.FIELDS.OPTIONS] = r), t
            }, n = C, i = [], r = "_idx_", a = 0; a < e.length; a++) {
            var o, s, u = e[a],
                c = u.eventBase;
            if (c.hasOwnProperty(r)) {
                o = i[c[r]];
                var l = u[w.FIELDS.TIME] - (o[n.TIMEBASE] || 0);
                s = {}, s[n.DELTA] = l, s[n.INDEX] = a, o[n.TIMESTAMPS].push(s)
            } else o = {}, o[n.EVENTBASE] = t(u), o[n.HASH] = c.hash(), o[n.TIMEBASE] = u[w.FIELDS.TIME], s = {}, s[n.DELTA] = 0, s[n.INDEX] = a, o[n.TIMESTAMPS] = [s], i.push(o), c[r] = i.length - 1;
        }
        for (a = 0; a < e.length; a++) delete e[a].eventBase[r];
        return i
    }, T.kt = function(e, t) {
        var n = new b(e[w.FIELDS.NAME], e[w.FIELDS.TYPE], e[w.FIELDS.CATEGORY], e[w.FIELDS.OPTIONS], e[w.FIELDS.REVENUE]);
        return _.isUndefined(t) || n.setHash(t), n
    }, T.Lt = function(e) {
        for (var t = C, n = [], i = 0; i < e.length; i++)
            for (var r = e[i], a = T.kt(r[t.EVENTBASE], r[t.HASH]), o = r[t.TIMEBASE], s = r[t.TIMESTAMPS], u = 0; u < s.length; u++) {
                var c = s[u],
                    l = new A(a, o + c[t.DELTA]),
                    d = c[t.INDEX];
                n[d] = l
            }
        return n
    }, t.deserialize = function(e) {
        return T.Lt(e)
    }, t.mergeAllEvents = function(e) {
        var t = [].concat.apply([], e);
        return t.sort(D.sessionSortPredicate), D.sessionize(t), t
    }
}), (function(e, t) {
    e.exports = {
        OTHER: "other"
    }
}), (function(e, t, n) {
    function i() {
        return c(z.LAYER_MAP) || {}
    }

    function r(e, t) {
        O.dispatch(N.UPDATE_PREFERRED_LAYER_MAP, {
            groupId: e,
            layerId: t
        })
    }

    function a() {
        var e = W.getPreferredLayerMapString();
        p(z.LAYER_MAP, e, !0)
    }

    function o(e) {
        O.dispatch(N.SET_TRACKER_PERSISTABLE_STATE, e)
    }

    function s(e, t) {
        function n(e, n) {
            var i;
            t.attributionType && (i = V.now()), O.dispatch(N.SET_VISITOR_ATTRIBUTES, {
                attributes: [{
                    key: e,
                    value: n,
                    metadata: {
                        lastModified: i
                    }
                }]
            })
        }
        if (t.getter) {
            var i = t.provides;
            R.isArray(i) || (i = [i]);
            var r = t.isSticky && !R.isUndefined(M.getFieldValue(e, i));
            if (!r) {
                var a;
                try {
                    var o = k.evaluate(t.getter);
                    R.isFunction(o) && (o = o((function() {
                        return M.getFieldValue(e, i)
                    }), (function(e) {
                        n(i, e)
                    }))), R.isUndefined(o) || (t.isAsync ? (a = o.then((function(e) {
                        n(i, e)
                    }), (function(e) {
                        G.warn('Failed to evaluate provider for "' + t.provides + '"; error was:', e)
                    })), O.dispatch(N.SET_VISITOR_ATTRIBUTE_PENDING, {
                        key: i,
                        pending: a
                    })) : n(i, o))
                } catch (e) {
                    G.warn('Failed to evaluate getter for provider for "' + t.provides + '"; error was: ' + e.message)
                }
                return a
            }
        }
    }

    function u() {
        y(c(z.EVENTS) || [], c(z.EVENT_QUEUE) || []);
        var e = f(z.LAYER_STATES);
        R.forEach(e, (function(e) {
            e.item = R.map(e.item, d)
        })), S(l(e)), T(c(z.SESSION_STATE) || {}), w(c(z.VISITOR_PROFILE) || {});
        var n = c(z.TRACKER_OPTIMIZELY);
        n && o(n), t.loadForeignData(), t.removeLegacySessionStateCookies()
    }

    function c(e) {
        var t = h(e),
            n = U.getItem(t);
        if (!n) {
            var i = _(e);
            n = U.getItem(i), g(e, n)
        }
        return R.isString(n) && (n = b(n)), n
    }

    function l(e) {
        var t = [];
        return R.each(e, (function(e) {
            R.each(e.item, (function(n) {
                n.namespace = e.namespace, t.push(n)
            }))
        })), t
    }

    function d(e) {
        var t;
        return t = e.layerId ? e : {
            layerId: e.i,
            pageId: e.p,
            decisionTimestamp: e.t,
            decisionTicket: {
                audienceIds: e.a || []
            },
            decision: {
                layerId: e.i,
                experimentId: e.x || null,
                variationId: e.v || null,
                isLayerHoldback: e.h || !1
            }
        }
    }

    function f(e) {
        var t = X.getBucketingId(),
            n = [],
            i = t + "\\$\\$([^$]+?)\\$\\$" + e,
            r = new RegExp(i);
        return R.each(U.keys(), (function(e) {
            var i = e.match(r);
            if (i) {
                var a = {
                    namespace: i[1],
                    userId: t,
                    item: b(U.getItem(e))
                };
                n.push(a)
            }
        })), n
    }

    function g(e, t) {
        var n = h(e),
            i = _(e);
        U.setItem(n, t), U.removeItem(i)
    }

    function p(e, t, n) {
        try {
            var i = h(e);
            n || (t = F.stringify(t));
            try {
                U.removeItem(_(e)), U.setItem(i, t)
            } catch (e) {
                throw G.warn("Visitor / Unable to set localStorage key, error was:", e), new Error("Unable to set localStorage")
            }
            D.setItem(i, t)
        } catch (e) {
            G.warn("Unable to persist visitor data:", e.message)
        }
    }

    function h(e) {
        var n = X.getBucketingId();
        if (!n) throw new Error("Visitor bucketingId not set");
        var i = t.getNamespace();
        if (!i) throw new Error("Namespace is not set");
        return [n, i, e].join("$$")
    }

    function _(e) {
        var t = X.getBucketingId();
        if (!t) throw new Error("Cannot get legacy key: visitor bucketingId not set");
        return [t, e].join("$$")
    }

    function v(e, n) {
        if (!X.getBucketingId()) throw new Error("Cannot update local store because bucketingId not set");
        if (E(e)) {
            var i = t.getStorageKeyFromKey(e);
            if (R.includes(z, i)) {
                var r = h(i);
                if (!(e.indexOf(r) <= 0))
                    if (i === z.EVENT_QUEUE) O.dispatch(N.SET_FOREIGN_VISITOR_EVENT_QUEUE, {
                        key: e,
                        value: P.deserialize(b(n))
                    });
                    else if (i === z.EVENTS) O.dispatch(N.SET_FOREIGN_VISITOR_EVENTS, {
                    key: e,
                    value: P.deserialize(b(n))
                });
                else if (i === z.LAYER_STATES) O.dispatch(N.LOAD_PERSISTED_LAYER_STATES, {
                    layerStates: R.map(b(n), d),
                    merge: !0
                });
                else if (i === z.VARIATION_MAP) O.dispatch(N.MERGE_VARIATION_ID_MAP, {
                    variationIdMap: b(n)
                });
                else if (i === z.VISITOR_PROFILE) {
                    var a = ["custom"],
                        o = b(n);
                    R.each(a, (function(e) {
                        var t = Y.getPlugin(x.PluginTypes.visitorProfileProviders, e);
                        if (t) {
                            if (o.profile && o.metadata) {
                                var n = m(o, e, t.attributionType);
                                if (!R.isEmpty(n)) {
                                    var i = [];
                                    R.forOwn(n.data, (function(t, r) {
                                        var a = n.metadata[r],
                                            o = {
                                                key: [e, r],
                                                value: t,
                                                metadata: a
                                            };
                                        i.push(o)
                                    })), O.dispatch(N.SET_VISITOR_ATTRIBUTES, {
                                        attributes: i
                                    })
                                }
                            }
                        } else G.debug("Attribute type", e, "not used by any audiences")
                    }))
                }
            }
        }
    }

    function m(e, t, n) {
        var i = Q.getAttribute(t),
            r = Q.getAttributeMetadata(t),
            a = e.profile[t],
            o = e.metadata[t];
        if (R.isEmpty(i)) return {
            data: a,
            metadata: o
        };
        var s = {};
        return R.forOwn(a, (function(e, t) {
            var i;
            r && r[t] && (i = r[t].lastModified);
            var a;
            o && o[t] && (a = o[t].lastModified), (n === x.AttributionTypes.FIRST_TOUCH && i >= a || n === x.AttributionTypes.LAST_TOUCH && a >= i || R.isUndefined(i) && a) && (s.data = s.data || {}, s.data[t] = e, a && (s.metadata = s.metadata || {}, s.metadata[t] = s.metadata[t] || {}, s.metadata[t].lastModified = a))
        })), s
    }

    function E(e) {
        var t = e.split("$$")[0];
        return t.indexOf("://") > 0
    }

    function I() {
        var e = Q.getVisitorProfile(),
            t = Q.getVisitorProfileMetadata(),
            n = Y.getAllPlugins(x.PluginTypes.visitorProfileProviders);
        if (n) {
            var i = R.reduce(n, (function(e, t) {
                return t.provides && (e[t.provides] = t), e
            }), {});
            e = R.omitBy(e, (function(e, t) {
                var n = i[t];
                return n && n.isTransient
            }))
        }
        return {
            profile: e,
            metadata: t
        }
    }

    function y(e, t) {
        C.initializeStore(e, t)
    }

    function S(e) {
        O.dispatch(N.LOAD_PERSISTED_LAYER_STATES, {
            layerStates: R.filter(e, (function(e) {
                return !!e.decision
            }))
        })
    }

    function T(e) {
        e = R.extend({
            lastSessionTimestamp: 0,
            sessionId: null
        }, e), O.dispatch(N.LOAD_SESSION_STATE, e)
    }

    function A() {
        return "oeu" + V.now() + "r" + Math.random()
    }

    function w(e) {
        var t, n, i = Y.getAllPlugins(x.PluginTypes.visitorProfileProviders),
            r = R.filter(i, (function(e) {
                return R.isFunction(e.restorer)
            }));
        e.profile && e.metadata ? (t = e.profile, n = e.metadata) : (t = e, n = {}), t = R.reduce(t, (function(e, t, n) {
            var i = t,
                a = R.find(r, {
                    provides: n
                });
            return a && (i = a.restorer(t)), e[n] = i, e
        }), {}), O.dispatch(N.LOAD_EXISTING_VISITOR_PROFILE, {
            profile: t,
            metadata: n
        })
    }

    function b(e) {
        try {
            return F.parse(e)
        } catch (t) {
            return G.debug("Failed to parse: ", e, t), null
        }
    }
    var D, R = n(2),
        O = n(9),
        N = n(7),
        C = n(72),
        P = n(73),
        L = n(76),
        V = n(24),
        k = n(16),
        x = n(25),
        F = n(26),
        M = n(19),
        U = n(82).LocalStorage,
        G = n(23),
        B = n(12).Promise,
        z = n(25).VisitorStorageKeys;
    D = n(85);
    var j = k.get("stores/cookie_options"),
        H = k.get("stores/global"),
        K = k.get("stores/layer"),
        Y = k.get("stores/plugins"),
        q = k.get("stores/session"),
        X = k.get("stores/visitor_id"),
        W = k.get("stores/visitor_bucketing"),
        Q = k.get("stores/visitor"),
        $ = k.get("stores/provider_status");
    t.getOrGenerateId = function() {
        var e = t.getCurrentId();
        return e || (e = A()), {
            randomId: e
        }
    }, t.getCurrentId = function() {
        return Q.getVisitorIdFromAPI() || L.get(x.COOKIES.VISITOR_ID)
    }, t.hasSomeData = function() {
        return U.keys().length > 0
    }, t.setId = function(e) {
        var n = X.getBucketingId();
        O.dispatch(N.SET_VISITOR_ID, e), X.getBucketingId() !== n && (u(), t.deleteOldLocalData(), D.deleteData(e));
        try {
            t.maybePersistVisitorId(e)
        } catch (e) {
            if (G.error("Visitor / Unable to persist visitorId, disabling tracking"), O.dispatch(N.LOAD_DIRECTIVE, {
                    trackingDisabled: !0
                }), e instanceof L.MismatchError) throw G.error("Visitor / Cookie not set to correct value:", e), new Error("Cookie mismatch error while persisting visitorId");
            throw e
        }
        t.refreshSession()
    }, t.getVariationIdMap = function() {
        return c(z.VARIATION_MAP) || {}
    }, t.updateVariationIdMap = function(e, t, n) {
        O.dispatch(N.UPDATE_VARIATION_ID_MAP, {
            layerId: e,
            experimentId: t,
            variationId: n
        })
    }, t.persistVariationIdMap = function() {
        var e = W.getVariationIdMapString();
        p(z.VARIATION_MAP, e, !0)
    }, t.getPreferredLayerMap = i, t.updatePreferredLayerMap = r, t.persistTrackerOptimizelyData = function(e) {
        p(z.TRACKER_OPTIMIZELY, e)
    }, t.refreshSession = function() {
        O.dispatch(N.REFRESH_SESSION)
    }, t.populateEagerVisitorData = function(e, n) {
        var i = R.filter(e, (function(e) {
                return !e.isLazy
            })),
            r = t.populateVisitorData(i, n);
        return r
    }, t.populateLazyVisitorData = function(e, n) {
        var i = R.filter(e, (function(e) {
            return e.isLazy
        }));
        return t.populateVisitorData(i, n)
    }, t.populateVisitorData = function(e, t) {
        t = t || {};
        var n = R.partial(s, t),
            i = R(e).filter({
                isAsync: !0
            }).map(n).filter().value();
        return R.forEach(R.filter(e, (function(e) {
            return !e.isAsync
        })), n), i.length > 0 ? B.all(i) : B.resolve()
    }, t.persistBehaviorEvents = function(e) {
        p(z.EVENTS, e)
    }, t.persistBehaviorEventQueue = function(e) {
        p(z.EVENT_QUEUE, e)
    }, t.persistLayerStates = function() {
        var e = K.getLayerStates(t.getNamespace());
        e = R.map(e, (function(e) {
            return R.omit(e, "namespace")
        })), p(z.LAYER_STATES, e)
    }, t.persistSessionState = function() {
        p(z.SESSION_STATE, q.getState())
    }, t.persistVisitorProfile = function() {
        p(z.VISITOR_PROFILE, I())
    }, t.persistVisitorBucketingStore = function() {
        t.persistVariationIdMap(), a()
    }, t.getUserIdFromKey = function(e, n) {
        var i;
        return R.includes(e, n) && R.includes(e, "_") && R.includes(e, "$$") && R.includes(e.slice(e.indexOf("$$")), t.getNamespace()) && (i = e.slice(e.indexOf("_") + 1, e.indexOf("$$"))), i
    }, t.maybePersistVisitorId = function(e) {
        L.remove(x.COOKIES.VISITOR_UUID), e.randomId && (j.getAutoRefresh() || t.getCurrentId() !== e.randomId ? (L.set(x.COOKIES.VISITOR_ID, e.randomId), G.log("Persisting visitorId:", e.randomId)) : G.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))
    }, t.getAttribute = function(e) {
        return Q.getAttribute(e)
    }, t.getPendingAttributeValue = function(e) {
        return $.getPendingAttributeValue(e)
    }, t.isForeignKey = E, t.checkKeyForVisitorId = function(e) {
        var n = X.getBucketingId() || t.getCurrentId(),
            i = t.getIdFromKey(e);
        return !i || i === n
    }, t.getIdFromKey = function(e) {
        var n = e.split("$$")[0],
            i = t.getStorageKeyFromKey(e),
            r = R.includes(x.StorageKeys, i);
        if (r) return null;
        var a = n.indexOf("_"),
            o = a === -1;
        return o ? n : n.substring(a + 1)
    }, t.getStorageKeyFromKey = function(e) {
        var t, n = e.split("$$").pop(),
            i = n.indexOf("://") > -1;
        if (i) {
            var r = n.indexOf("_");
            t = n.substring(r + 1)
        } else t = n;
        return R.includes(R.values(x.AllStorageKeys), t) ? t : null
    }, t.deleteOldLocalData = function() {
        var e = U.keys();
        R.each(e, (function(e) {
            t.isForeignKey(e) || t.checkKeyForVisitorId(e) || U.removeItem(e)
        }))
    }, t.deleteOldForeignData = function() {
        var e = U.keys();
        R.each(e, (function(e) {
            t.isForeignKey(e) && U.removeItem(e)
        }))
    }, t.loadForeignData = function() {
        R.each(U.keys(), (function(e) {
            var t = U.getItem(e);
            t && v(e, t)
        }))
    }, t.getNamespace = function() {
        return H.getNamespace()
    }, t.serializeFieldKey = function(e) {
        return R.isArray(e) ? e.join("$$") : e
    }, t.removeLegacySessionStateCookies = function() {
        var e = L.getAll();
        R.forEach(R.keys(e), (function(e) {
            0 === e.indexOf(x.COOKIES.SESSION_STATE + "$$") && L.remove(e)
        }))
    }
}), (function(e, t, n) {
    function i(e, n) {
        n !== !1 && (n = !0);
        for (var i, a, o = e.hostname.split("."), s = [], u = null, l = o.length - 1; l >= 0; l--)
            if (s.unshift(o[l]), i = s.join("."), !r.includes(h, i)) {
                a = {
                    domain: n ? "." + i : i
                };
                try {
                    t.set(_, Math.random().toString(), a), t.remove(_, a), u = a.domain;
                    break
                } catch (e) {}
            }
        return d.dispatch(c.SET_COOKIE_DOMAIN, u), u
    }
    var r = n(2),
        a = n(77).create,
        o = n(24),
        s = n(81),
        u = n(41),
        c = n(7),
        l = n(16),
        d = n(9),
        f = l.get("stores/cookie_options"),
        g = t.SetError = a("CookieSetError"),
        p = t.MismatchError = a("CookieMismatchError");
    t.getAll = function(e) {
        r.isUndefined(e) && (e = !0);
        var n, i, a, o, u;
        n = s.getCookieString().split(/\s*;\s*/);
        var c = {};
        for (a = 0; a < n.length; a++)
            if (i = n[a], o = i.indexOf("="), o > 0 && (u = t.safeDecodeURIComponent(i.substring(0, o)), void 0 === c[u])) {
                var l = i.substring(o + 1);
                e && (l = t.safeDecodeURIComponent(l)), c[u] = l
            }
        return c
    }, t.safeDecodeURIComponent = function(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return e
        }
    }, t.get = function(e, n) {
        var i = t.getAll(n);
        return i[e]
    }, t.set = function(e, n, a, c) {
        a = r.extend({
            encodeValue: !0
        }, a), c !== !1 && (c = !0);
        var l = [];
        if (r.isUndefined(a.domain)) {
            var d = f.getCurrentDomain();
            d || (d = i(u.getLocation(), !0)), a.domain = d
        }
        if (a.domain && l.push("domain=" + a.domain), r.isUndefined(a.path) && (a.path = "/"), a.path && l.push("path=" + a.path), r.isUndefined(a.expires)) {
            var h = r.isUndefined(a.maxAge) ? f.getDefaultAgeInSeconds() : a.maxAge;
            a.expires = new Date(o.now() + 1e3 * h)
        }
        if (r.isUndefined(a.expires) || l.push("expires=" + a.expires.toUTCString()), a.secure && l.push("secure"), l = l.join(";"), s.setCookie(e + "=" + (a.encodeValue ? encodeURIComponent(n) : n) + ";" + l), c) {
            var _ = a.encodeValue,
                v = t.get(e, _);
            if (v !== n) {
                if (!v) throw new g('Failed to set cookie "' + e + '"');
                throw new p('Expected "' + n + '" for "' + e + '", got "' + v + '"')
            }
        }
    }, t.remove = function(e, n) {
        for (var i = u.getLocation().hostname.split("."); i.length > 0;) t.set(e, null, r.extend({}, n, {
            domain: "." + i.join("."),
            expires: new Date(0)
        }), !1), i.shift()
    };
    var h = ["optimizely.test"],
        _ = "optimizelyDomainTestCookie"
}), (function(e, t, n) {
    var i = n(78),
        r = i("InternalError");
    t.BaseError = r, t.create = function(e) {
        return i(e, r)
    }
}), (function(e, t, n) {
    function i(e, t) {
        function n(t) {
            if (!(this instanceof n)) return new n(t);
            try {
                throw new Error(t)
            } catch (t) {
                t.name = e, this.stack = t.stack
            }
            r && this.stack && (this.stack = a(this.stack, e, t)), this.message = t || "", this.name = e
        }
        return n.prototype = new(t || Error), n.prototype.constructor = n, n.prototype.inspect = function() {
            return this.message ? "[" + e + ": " + this.message + "]" : "[" + e + "]"
        }, n.prototype.name = e, n
    }
    var r = n(79)(),
        a = n(80);
    e.exports = i
}), (function(e, t) {
    "use strict";
    e.exports = function() {
        var e = new Error("yep");
        return !!e.stack && "Error: yep\n" === e.stack.substr(0, 11)
    }
}), (function(e, t) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = t;
        return n && (i += ": " + n), e = i + e.slice(e.indexOf("\n"))
    }
}), (function(e, t, n) {
    function i() {
        return "loading" === t.getReadyState()
    }
    var r = n(16),
        a = r.get("stores/global");
    t.getDocumentElement = function() {
        return document.documentElement
    }, t.getCookieString = function() {
        return document.cookie || ""
    }, t.setCookie = function(e) {
        document.cookie = e
    }, t.querySelector = function(e) {
        return document.querySelector(e)
    }, t.querySelectorAll = function(e) {
        return document.querySelectorAll(e)
    }, t.parseUri = function(e) {
        var n = t.createElement("a");
        return n.href = e, n
    }, t.childrenOf = function(e) {
        return Array.prototype.slice.call(e.querySelectorAll("*"))
    }, t.createElement = function(e) {
        return document.createElement(e)
    }, t.isReady = function() {
        return a.domContentLoadedHasFired() || "interactive" === document.readyState || "complete" === document.readyState
    }, t.isLoaded = function() {
        return "complete" === document.readyState
    }, t.addReadyHandler = function(e) {
        return document.addEventListener("DOMContentLoaded", e),
            function() {
                t.removeReadyHandler(e)
            }
    }, t.removeReadyHandler = function(e) {
        return function() {
            document.removeEventListener("DOMContentLoaded", e)
        }
    }, t.getReferrer = function() {
        return document.referrer
    }, t.getReadyState = function() {
        return document.readyState
    }, t.write = function(e) {
        if (!i()) throw new Error("Aborting attempt to write to already-loaded document");
        document.write(e)
    }, t.appendToHead = function(e) {
        return t.appendTo(document.head, e)
    }, t.appendTo = function(e, t) {
        e.appendChild(t)
    }, t.addEventListener = function(e, t, n) {
        return document.addEventListener(e, t, n),
            function() {
                document.removeEventListener(e, t, n)
            }
    }, t.getCurrentScript = function() {
        if (document.currentScript) return document.currentScript
    }, t.parentElement = function(e) {
        for (var t = e.parentNode; t.nodeType !== Node.ELEMENT_NODE;) t = t.parentNode;
        return t
    }
}), (function(e, t, n) {
    var i, r, a = "optimizely_data",
        o = n(77).create,
        s = n(83),
        u = n(41),
        c = t.Error = o("StorageError");
    try {
        r = u.getGlobal("localStorage")
    } catch (e) {
        throw new c("Unable to read localStorage: " + e.toString())
    }
    if (!r) throw new c("localStorage is undefined");
    i = s.create(r, a), t.LocalStorage = i, t.isOptimizelyKey = function(e) {
        return e.slice(0, a.length) === a
    }
}), (function(e, t, n) {
    function i(e, t) {
        this.Bt = e, this.zt = t
    }
    var r = n(2),
        a = n(23),
        o = "$$";
    i.prototype.jt = function(e) {
        return [this.zt, e].join(o)
    }, i.prototype.Ht = function(e) {
        return e.replace(this.zt + o, "")
    }, i.prototype.setItem = function(e, t) {
        try {
            this.Bt.setItem(this.jt(e), t)
        } catch (t) {
            a.warn("Failed to save", e, "to localStorage:", t)
        }
    }, i.prototype.removeItem = function(e) {
        this.Bt.removeItem(this.jt(e))
    }, i.prototype.getItem = function(e) {
        var t = null;
        try {
            t = this.Bt.getItem(this.jt(e))
        } catch (e) {}
        return t
    }, i.prototype.keys = function() {
        var e = r.keys(this.Bt);
        return r.map(r.filter(e, r.bind((function(e) {
            return r.includes(e, this.zt)
        }), this)), r.bind(this.Ht, this))
    }, i.prototype.allKeys = function() {
        return r.keys(this.Bt)
    }, i.prototype.allValues = function() {
        return r.values(this.Bt)
    }, e.exports = {
        create: function(e, t) {
            return new i(e, t)
        },
        mockStorage: {
            keys: function() {},
            getItem: function(e) {},
            removeItem: function(e) {},
            setItem: function(e, t) {}
        }
    }
}), (function(e, t, n) {
    function i() {
        return u.getGlobal("performance")
    }
    var r = n(7),
        a = n(77).create,
        o = n(24),
        s = n(9),
        u = n(41),
        c = n(16),
        l = c.get("stores/rum"),
        d = "optimizely:",
        f = t.Error = a("PerformanceError");
    t.time = function(e) {
        if (l.getSampleRum()) {
            var t = i();
            if (t && t.mark) {
                var n = d + e;
                t.clearMarks(n + "Begin"), t.mark(n + "Begin")
            }
        }
    }, t.timeEnd = function(e) {
        if (l.getSampleRum()) {
            var t = i();
            if (t && t.mark) {
                var n = d + e,
                    a = t.getEntriesByName(n + "Begin");
                if (0 === a.length) throw new f("Called timeEnd without matching time: " + e);
                t.clearMarks(n + "End"), t.mark(n + "End");
                var o = t.getEntriesByName(n + "End"),
                    u = e + "Time",
                    c = o[0].startTime - a[0].startTime;
                s.dispatch(r.SET_PERFORMANCE_MARKS_DATA, {
                    name: u,
                    data: {
                        startTime: Math.round(1e3 * a[0].startTime) / 1e3,
                        duration: Math.round(1e3 * c) / 1e3
                    }
                })
            }
        }
    }, t.now = function() {
        var e = i();
        return e ? e.now() : o.now()
    }
}), (function(e, t, n) {
    function i(e) {
        var t;
        if (!o.find(I.getFrames(), {
                origin: e.origin
            })) return void E.debug("XDomain", "No frame found for origin: " + e.origin);
        try {
            t = h.parse(e.data)
        } catch (t) {
            return void E.debug("XDomain", "Ignoring malformed message event:", e)
        }
        if ("ERROR" === t.type) l.dispatch(u.XDOMAIN_SET_DISABLED, {
            disabled: !0
        }), d.emitInternalError(new y("Xdomain Error: " + t.response));
        else if ("SYNC" === t.type) o.each(I.getSubscribers(), (function(e) {
            e(t.response.key, t.response.value)
        }));
        else {
            var n = I.getMessageById(t.id);
            if (!n) {
                if (E.warn("XDomain", "No stored message found for ID", t.id), o.isNumber(t.id)) {
                    var i = I.getNextMessageId();
                    t.id >= i ? d.emitInternalError(new y("Message ID is greater than expected maximum ID (" + t.id + ">" + i + ")")) : t.id < 0 ? d.emitInternalError(new y("Message ID is < 0: " + t.id)) : d.emitInternalError(new y("No stored message found for message ID: " + t.id))
                } else d.emitInternalError(new y("Message ID is not a number: " + t.id));
                return
            }
            n.resolver(t.response), l.dispatch(u.XDOMAIN_SET_MESSAGE, {
                messageId: t.id,
                message: o.extend({}, n, {
                    endTime: g.now(),
                    response: t.response
                })
            })
        }
    }

    function r(e, t) {
        return t || (t = I.getDefaultFrame()), new s(function(n) {
            var i = {
                data: o.extend({}, e, {
                    id: I.getNextMessageId()
                }),
                resolver: n
            };
            t ? I.isDisabled() || a(i, t) : l.dispatch(u.XDOMAIN_SET_MESSAGE, {
                messageId: i.data.id,
                message: i
            })
        })
    }

    function a(e, t) {
        var n = e.data;
        l.dispatch(u.XDOMAIN_SET_MESSAGE, {
            messageId: e.data.id,
            message: o.extend({}, e, {
                startTime: g.now()
            })
        }), t.target.postMessage(h.stringify(n), t.origin)
    }
    var o = n(2),
        s = n(12).Promise,
        u = n(7),
        c = n(16),
        l = n(9),
        d = n(86),
        f = n(77).create,
        g = n(24),
        p = n(81),
        h = n(26),
        _ = n(88),
        v = n(75),
        m = n(41),
        E = n(23),
        I = c.get("stores/xdomain"),
        y = t.Error = f("XDomainStorageError");
    t.setItem = function(e, t, n) {
        return r({
            type: "PUT",
            key: e,
            value: t
        }, n)
    }, t.getItem = function(e, t) {
        return r({
            type: "GET",
            key: e
        }, t)
    }, t.fetchAll = function(e) {
        return r({
            type: "GETALL"
        }, e)
    }, t.deleteData = function(e, t) {
        return r({
            type: "DELETE",
            visitorId: e
        }, t)
    }, t.subscribe = function(e) {
        l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER, {
            subscriber: e
        })
    }, t.loadIframe = function(e, t) {
        return new s(function(n) {
            var i = p.createElement("iframe");
            i.src = e + t, i.hidden = !0, i.setAttribute("aria-hidden", "true"), i.setAttribute("tabindex", "-1"), i.setAttribute("title", "Optimizely Internal Frame"), i.style.display = "none", i.height = 0, i.width = 0, i.onload = function() {
                var r = {
                    id: I.getNextFrameId(),
                    target: i.contentWindow,
                    origin: e,
                    path: t
                };
                l.dispatch(u.XDOMAIN_ADD_FRAME, r), n(r)
            }, p.appendTo(p.querySelector("body"), i)
        })
    }, t.getXDomainUserId = function(e, t) {
        var n, i = {},
            r = o.keys(e);
        return o.each(t, (function(e) {
            i[e] = [], o.each(r, (function(t) {
                var r = v.getUserIdFromKey(t, e);
                !n && r && (n = r), r && !o.includes(i[e], r) && i[e].push(r)
            }))
        })), E.debug("XDomain: Found userIds:", i), n
    }, t.load = function(e, n) {
        m.addEventListener("message", i);
        var r = function() {
                return !!p.querySelector("body")
            },
            s = function() {
                return t.loadIframe(e, n)
            };
        return _.pollFor(r).then(s).then((function(e) {
            l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME, e), I.isDisabled() || o.each(I.getMessages(), (function(t) {
                t.startTime || a(t, e)
            }))
        }))
    }
}), (function(e, t, n) {
    var i = n(87);
    t.emitError = function(e, t, n) {
        var r = !0;
        i.emit({
            type: "error",
            name: e.name || "Error",
            data: {
                error: e,
                metadata: t
            }
        }, n || !1, r)
    }, t.emitInternalError = function(e, n) {
        t.emitError(e, n, !0)
    }, t.emitAnalyticsEvent = function(e, t) {
        var n = {
            type: "analytics",
            name: "trackEvent",
            data: e
        };
        i.emit(n, t)
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(5),
        a = n(7),
        o = n(86),
        s = n(16),
        u = n(9),
        c = n(23),
        l = s.get("stores/event_emitter");
    t.on = function(e) {
        return e.token || (e.token = r.generate()), u.dispatch(a.ADD_EMITTER_HANDLER, e), e.token
    }, t.off = function(e) {
        u.dispatch(a.REMOVE_EMITTER_HANDLER, {
            token: e
        })
    }, t.emit = function(e, t, n) {
        var r = l.getHandlers(e, t);
        i.each(r, (function(i) {
            try {
                i.handler.call({
                    $di: s
                }, e)
            } catch (r) {
                !n && i.emitErrors ? (c.error("Error in handler for event:", e, r), o.emitError(r, null, t)) : c.warn("Suppressed error in handler for event:", e, r)
            }
        }))
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(12).Promise,
        a = n(41),
        o = 100,
        s = 50;
    t.pollFor = function(e, t, n) {
        var u, c;
        return i.isFunction(n) ? c = n : (u = n || o, c = function() {
            return u--, u < -1
        }), t = t || s, new r(function(n, i) {
            !(function r() {
                var o;
                if (!c()) {
                    try {
                        var s = e();
                        if (s) return n(s)
                    } catch (e) {
                        o = e
                    }
                    return a.setTimeout(r, t)
                }
                i(o || new Error("Poll timed out"))
            })()
        })
    }
}), (function(e, t, n) {
    function i(e, n) {
        var i;
        i = t.isInSameSession(e, n) ? e.getValueOrDefault([s.FIELDS.SESSION_ID]) : n.getValueOrDefault([s.FIELDS.TIME]), n.setFieldValue(s.FIELDS.SESSION_ID, i)
    }

    function r(e, n, i) {
        var r, a = e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);
        r = t.isInSameSession(n, e) ? a : i ? a + 1 : a - 1, n.setFieldValue(s.FIELDS.SESSION_INDEX, r)
    }
    var a = n(63).Event,
        o = n(24),
        s = n(64),
        u = n(63).EventBase;
    t.CURRENT_SESSION_INDEX = 0;
    var c = 18e5;
    t.isInSameSession = function(e, t) {
        var n = e.getValueOrDefault([s.FIELDS.TIME], 0),
            i = t.getValueOrDefault([s.FIELDS.TIME], 0);
        return Math.abs(n - i) < c
    }, t.updateSessionId = function(e, t) {
        if (!e) return void t.setFieldValue(s.FIELDS.SESSION_ID, t.getValueOrDefault([s.FIELDS.TIME]));
        var n = e.getValueOrDefault([s.FIELDS.TIME]),
            r = e.getValueOrDefault([s.FIELDS.SESSION_ID]),
            o = t.getValueOrDefault([s.FIELDS.TIME]);
        n = "number" != typeof n ? o - 36e5 : n, r = "number" != typeof r ? n : r, e = new a(new u("", ""), n, r), i(e, t)
    }, t.updateSessionIndex = function(e, t) {
        if (!e) return void t.setFieldValue(s.FIELDS.SESSION_INDEX, 0);
        var n = e.getValueOrDefault([s.FIELDS.TIME]),
            i = e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),
            o = t.getValueOrDefault([s.FIELDS.TIME]),
            c = e.getValueOrDefault([s.FIELDS.SESSION_ID]);
        n = "number" != typeof n ? o - 36e5 : n, i = "number" != typeof i ? 0 : i, c = "number" != typeof c ? n : c, e = new a(new u("", ""), n, c, i), r(e, t, !1)
    }, t.sessionize = function(e) {
        var n = e.length;
        if (0 !== n) {
            e[0].setFieldValue(s.FIELDS.SESSION_ID, e[0].getValueOrDefault([s.FIELDS.TIME]));
            for (var a = 1; a < n; a++) i(e[a - 1], e[a]);
            var u = t.CURRENT_SESSION_INDEX,
                l = e[n - 1].getValueOrDefault([s.FIELDS.TIME]),
                d = o.now();
            d - l > c && (u += 1), e[n - 1].setFieldValue(s.FIELDS.SESSION_INDEX, u);
            for (var a = n - 1; a > 0; a--) r(e[a], e[a - 1], !0)
        }
    }, t.reindexIfNecessary = function(e, t, n) {
        function i(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);
                e[t].setFieldValue(s.FIELDS.SESSION_INDEX, n + 1)
            }
        }
        e.getValueOrDefault([s.FIELDS.SESSION_INDEX]) === -1 && (i(t), i(n))
    }, t.sessionSortPredicate = function(e, t) {
        return e[s.FIELDS.TIME] - t[s.FIELDS.TIME]
    }, t.applyMigrations = function(e) {
        return !1
    }
}), (function(e, t, n) {
    var i = n(12).Promise,
        r = n(41);
    t.estimateStorage = function() {
        var e = r.getGlobal("navigator");
        try {
            return e.storage.estimate()
        } catch (e) {
            return i.resolve({
                usage: null,
                quota: null
            })
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(24),
        o = n(9),
        s = n(26),
        u = n(23),
        c = n(12).Promise,
        l = n(92),
        d = 3;
    t.isCORSSupported = function() {
        var e = l.get("XMLHttpRequest");
        return "withCredentials" in new e
    }, t.request = function(e) {
        return e = i.extend({
            method: "GET",
            async: !0,
            contentType: "text/plain;charset=UTF-8"
        }, e), new c(function(n, r) {
            if (!t.isCORSSupported()) return r("CORS is not supported");
            var a = l.get("XMLHttpRequest"),
                o = new a;
            o.onload = function() {
                e.success && e.success(o), n(o)
            }, o.onerror = function() {
                e.error && e.error(o), r(o)
            }, i.isObject(e.data) && (e.data = s.stringify(e.data)), o.open(e.method, e.url, e.async), e.withCredentials && (o.withCredentials = e.withCredentials), o.setRequestHeader("Content-Type", e.contentType), o.send(e.data)
        })
    }, t.retryableRequest = function(e, n, s, l) {
        if (!n) return c.reject(new Error("No id specified for request."));
        if (!t.isCORSSupported()) return c.reject(new Error("CORS is not supported."));
        i.isUndefined(l) && (l = d), i.isUndefined(s) && (s = 0);
        var f = {
            id: n,
            timeStamp: a.now(),
            data: e,
            retryCount: s
        };
        return o.dispatch(r.SET_PENDING_EVENT, f), u.debug("Sending event ", n), t.request(e).then((function(e) {
            return o.dispatch(r.REMOVE_PENDING_EVENT, {
                id: n
            }), e
        }), (function(e) {
            throw f.retryCount >= l ? (o.dispatch(r.REMOVE_PENDING_EVENT, {
                id: n
            }), u.warn("Event ", f, " could not be sent after ", l, " attempts.")) : (f.retryCount++, o.dispatch(r.SET_PENDING_EVENT, f), u.debug("Event ", f, " failed to send, with error ", e, " It will be retried ", l - s, " times.")), e
        }))
    }, t.sendBeacon = t.request
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(24),
        o = n(16),
        s = n(81),
        u = n(25),
        c = n(9),
        l = n(23),
        d = o.get("stores/sandbox"),
        f = n(41);
    t.shouldSandbox = function() {
        return !1
    }, t.get = function(e) {
        if (!e) throw new Error("Name is required");
        if (t.shouldSandbox()) {
            d.isInitialized() || g();
            var n = d.get(e);
            if (n) return n
        }
        return f.getGlobal(e)
    };
    var g = function() {
        try {
            var e = "optimizely_" + a.now(),
                t = s.createElement("iframe");
            t.name = e, t.style.display = "none", s.appendToHead(t);
            var n = t.contentWindow,
                o = t.contentDocument;
            o.write("<script></script>"), o.close();
            var d = i.mapValues(u.SandboxedFunctions, (function(e) {
                return n[e]
            }));
            c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED, {
                sandboxedFunctions: d
            }), t.parentNode.removeChild(t)
        } catch (e) {
            l.warn("Unable to create a sandbox: ", e)
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(23),
        a = n(94),
        o = n(16),
        s = o.get("stores/plugins"),
        u = n(7),
        c = n(25),
        l = n(9),
        d = [n(107), n(108), n(129)],
        f = ["clientMetadata", "disable", "load", "optOut"];
    t.push = function(e, t) {
        var n, a, o, s;
        if (!i.isArray(e) && i.isObject(e)) s = i.isUndefined(e.version) ? 1 : e.version, n = e.type, o = [e];
        else if (i.isArray(e)) s = 0, n = e[0], o = e.slice(1);
        else {
            if (!i.isString(e)) return r.warn("API / Ignoring non-array/object/string argument:", e), !1;
            s = 0, n = e, o = []
        }
        if (d[s] && (a = d[s][n]), t && f.indexOf(n) === -1) return r.debug("API / Ignoring non high priority function:", n, o), !1;
        if (!a) return r.warn('API / No function found for "' + n + '" (v' + s + ") with arguments:", o), !1;
        r.log('API / Executing: "' + n, '" with arguments:', o);
        try {
            a.apply(null, o), l.dispatch(u.RECORD_API_USAGE, {
                methodName: s ? "v" + s + "." + n : n
            })
        } catch (e) {
            r.error(e)
        }
        return !0
    }, t.get = function(e) {
        r.log('API / Getting module: "' + e + '"');
        var t = a[e];
        return t ? i.isArray(t) && (t = o.evaluate(t)) : t = s.getPlugin(c.PluginTypes.apiModules, e), t ? (l.dispatch(u.RECORD_API_USAGE, {
            methodName: "get." + e
        }), t) : void r.warn('Module "' + e + '" not found.')
    }
}), (function(e, t, n) {
    function i(e, t, n, i) {
        var r = e.getLayerState(i),
            a = t.get(i),
            s = n.get();
        if (!r || !a) return s ? {
            layer: {
                name: s.layerName,
                id: s.layerId,
                policy: s.layerPolicy,
                integrationStringVersion: s.integrationStringVersion
            },
            experiment: {
                name: s.experimentName,
                id: s.experimentId
            },
            variation: {
                name: s.variationName,
                id: s.variationId
            },
            isLayerHoldback: !1
        } : null;
        if (l.isSingleExperimentPolicy(a.policy) && r.decision.isLayerHoldback) return null;
        var u = r.decision.experimentId,
            c = r.decision.variationId;
        if (!u || !c) return null;
        var d, f;
        return (d = o.find(a.experiments, {
            id: u
        })) ? (f = o.find(d.variations, {
            id: c
        }), f ? {
            layer: {
                name: a.name,
                id: a.id,
                policy: a.policy,
                integrationStringVersion: a.integrationStringVersion
            },
            experiment: {
                name: d.name,
                id: d.id
            },
            variation: {
                name: f.name,
                id: f.id
            },
            isLayerHoldback: r.decision.isLayerHoldback
        } : null) : null
    }

    function r(e, t, n, i, r, s) {
        var u = [],
            c = e.getLayerStates();
        s.onlySingleExperiments && (c = o.filter(c, (function(e) {
            var n = t.get(e.layerId);
            return n && l.isSingleExperimentPolicy(n.policy)
        })));
        var f = o.map(c, (function(e) {
                var t = !!e.decision.variationId,
                    n = e.decisionActivationId && e.decisionActivationId === i.getActivationId(),
                    r = d.getExperimentAndVariation(),
                    a = r ? r.variationId : null,
                    s = t && e.decision.variationId === a;
                return o.extend(e, {
                    isActive: t && n || s,
                    visitorRedirected: s
                })
            })),
            g = r ? o.filter(f, r) : f;
        return o.each(g, (function(e) {
            var i = a(e, t, n, s.includeOfferConsistency);
            i && u.push(i)
        })), u
    }

    function a(e, t, n, i) {
        var r, a, s = e.layerId,
            u = t.get(s) || {},
            c = o.map(u.experiments, (function(e) {
                return o.pick(e, ["id", "name"])
            }));
        if (i || !u.decisionMetadata || !u.decisionMetadata.offerConsistency) {
            var l = {
                id: s,
                campaignName: u.name || null,
                experiment: null,
                allExperiments: c,
                variation: null,
                reason: e.decision.reason,
                isActive: e.isActive,
                visitorRedirected: e.visitorRedirected,
                isInCampaignHoldback: e.decision.isLayerHoldback
            };
            e.decision && e.decision.experimentId && (r = o.find(u.experiments, {
                id: e.decision.experimentId
            })), r && (l.experiment = o.pick(r, ["id", "name", "campaignName"])), r && e.decision.variationId && (a = o.find(r.variations, {
                id: e.decision.variationId
            })), a && (l.variation = o.pick(a, ["id", "name"]));
            var d = o.map(e.decisionTicket.audienceIds, (function(e) {
                return o.pick(n.get(e), ["id", "name"])
            }));
            return l.audiences = d, u.decisionMetadata && u.decisionMetadata.offerConsistency && (l.pageId = e.pageId), l
        }
    }
    var o = n(2),
        s = n(95),
        u = n(96),
        c = n(98),
        l = n(45),
        d = n(99);
    t.data = ["stores/audience_data", "stores/client_metadata", "stores/event_data", "stores/layer_data", "stores/view_data", "stores/group_data", "stores/interest_group", "stores/tag_group", "stores/global", function(e, t, n, i, r, a, s, l, d) {
        var f = {},
            g = {},
            p = {},
            h = {
                audiences: e.getAudiencesMap(),
                events: n.getEventsMap(),
                campaigns: f,
                pages: r.getPagesMap(),
                experiments: g,
                variations: p,
                projectId: d.getProjectId(),
                snippetId: d.getSnippetId(),
                accountId: d.getAccountId(),
                dcpServiceId: d.getDCPServiceId(),
                revision: d.getRevision(),
                clientName: t.getClientName(),
                clientVersion: t.getClientVersion()
            },
            _ = c.dereferenceChangeId;
        return o.each(i.getAll(), (function(e) {
            u.defineProperty(f, e.id, (function() {
                var t = o.extend({}, e);
                return u.defineProperty(t, "changes", (function() {
                    return o.map(e.changes, _)
                }), "campaign"), u.defineProperty(t, "experiments", (function() {
                    return o.map(e.experiments, (function(e) {
                        return g[e.id]
                    }))
                }), "campaign"), t
            }), "campaignMap", "byId"), o.each(e.experiments, (function(e) {
                u.defineProperty(g, e.id, (function() {
                    var t = o.extend({}, e);
                    return u.defineProperty(t, "changes", (function() {
                        return o.map(e.changes, _)
                    }), "experiment"), u.defineProperty(t, "variations", (function() {
                        return o.map(e.variations, (function(e) {
                            return p[e.id]
                        }))
                    }), "experiment"), t
                }), "experimentMap", "byId"), o.each(e.variations, (function(e) {
                    u.defineProperty(p, e.id, (function() {
                        var t = o.extend({}, e);
                        return u.defineProperty(t, "actions", (function() {
                            return o.map(e.actions, (function(e) {
                                return o.extend({}, e, {
                                    changes: o.map(e.changes, _)
                                })
                            }))
                        }), "variation"), t
                    }), "variationMap", "byId")
                }))
            }))
        })), h.groups = a.getGroupsMap(), h
    }], t.session = ["stores/session", function(e) {
        return e.getState()
    }], t.visitor = ["stores/visitor", function(e) {
        return o.cloneDeep(e.getVisitorProfile())
    }], t.visitor_id = ["stores/visitor_id", function(e) {
        return {
            randomId: e.getRandomId()
        }
    }], t.state = ["stores/audience_data", "stores/layer_data", "stores/layer", "stores/view_data", "stores/view", "stores/global", "stores/observed_redirect", function(e, t, n, a, u, c, f) {
        return {
            getCampaignStates: function(i) {
                var a = {},
                    s = r(n, t, e, c, i, {
                        includeOfferConsistency: !1
                    });
                return o.each(s, (function(e) {
                    a[e.id] = e
                })), a
            },
            getExperimentStates: function(i) {
                var a = r(n, t, e, c, i, {
                        includeOfferConsistency: !1,
                        onlySingleExperiments: !0
                    }),
                    s = ["audiences", "variation", "reason", "visitorRedirected", "isActive"],
                    u = o.reduce(a, (function(e, t) {
                        var n = t.allExperiments[0];
                        return e[n.id] = o.extend({}, o.pick(t, s), {
                            id: n.id,
                            experimentName: n.name,
                            isInExperimentHoldback: t.isInCampaignHoldback
                        }), e
                    }), {});
                return u
            },
            getCampaignStateLists: function(i) {
                var a = {},
                    s = r(n, t, e, c, i, {
                        includeOfferConsistency: !0
                    });
                return o.each(s, (function(e) {
                    var t = e.id;
                    a[t] || (a[t] = []), a[t].push(e)
                })), a
            },
            getPageStates: function(e) {
                var t = u.getAll(),
                    n = o.reduce(t, (function(e, t) {
                        var n = a.get(t.id);
                        return e[t.id] = o.extend({}, o.pick(n, ["id", "name", "apiName", "category", "staticConditions", "tags"]), o.pick(t, ["isActive", "metadata"])), e
                    }), {});
                return e ? o.pickBy(n, e) : n
            },
            isGlobalHoldback: function() {
                return c.isGlobalHoldback()
            },
            getActivationId: function() {
                return c.getActivationId()
            },
            getVariationMap: function() {
                var e = n.getLayerStates(),
                    i = {};
                return o.each(e, (function(e) {
                    var n = t.get(e.layerId);
                    if (e.decision && e.decision.experimentId && (i[e.decision.experimentId] = {
                            id: e.decision.variationId,
                            name: null,
                            index: null
                        }, n)) {
                        var r = o.find(n.experiments, {
                            id: e.decision.experimentId
                        });
                        if (r && e.decision.variationId) var a = o.find(r.variations, {
                                id: e.decision.variationId
                            }),
                            s = o.findIndex(r.variations, {
                                id: e.decision.variationId
                            });
                        a && (i[e.decision.experimentId] = {
                            id: e.decision.variationId,
                            name: a.name,
                            index: s
                        })
                    }
                })), i
            },
            getActiveExperimentIds: function() {
                var e = {};
                return o.each(this.getCampaignStateLists({
                    isActive: !0
                }), (function(t) {
                    o.each(t, (function(t) {
                        e[t.experiment.id] = !0;
                    }))
                })), o.keys(e)
            },
            getRedirectInfo: function() {
                var e = d.getExperimentAndVariation();
                return e && (e.referrer = d.getReferrer()), e
            },
            getDecisionString: function(e) {
                if (!e) throw new Error("Must pass a config to getDecisionString");
                e = o.extend({
                    maxLength: 255,
                    shouldCleanString: !1
                }, e);
                var r = i(n, t, f, e.campaignId);
                return r ? s.generateAnalyticsString(r.layer, r.experiment, r.variation, r.isLayerHoldback, e.maxLength, e.shouldCleanString) : null
            },
            getDecisionObject: function(e) {
                if (!e) throw new Error("Must pass a config to getDecisionObject");
                e = o.extend({
                    maxLength: 255,
                    shouldCleanString: !1
                }, e);
                var r = i(n, t, f, e.campaignId);
                if (!r) return null;
                var a = s.formatNamesAndIdsForAnalytics(r.layer, r.experiment, r.variation, e.shouldCleanString),
                    u = o.mapValues(a.names, (function(t, n) {
                        return s.combineAndTruncateIdAndName(t, a.idStrings[n], e.maxLength)
                    })),
                    c = {
                        experiment: u.experiment,
                        variation: u.variation
                    };
                return l.isSingleExperimentPolicy(r.layer.policy) || o.extend(c, {
                    campaign: u.layer,
                    holdback: r.isLayerHoldback
                }), c
            }
        }
    }], t.utils = n(100).create(), t.jquery = ["env/jquery", function(e) {
        return e
    }], t.event_emitter = n(106)
}), (function(e, t, n) {
    function i(e) {
        return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_")
    }

    function r(e) {
        return !u.isEmpty(e) && u.includes(["and", "or", "not"], e[0])
    }

    function a(e, t) {
        var n = "";
        return u.isEmpty(t) ? n = d : (n = u.reduce(t, (function(t, n) {
            var r = e.get(n);
            return r ? t + i(r.name ? r.name : r.id) + "," : t
        }), ""), n = n.slice(0, -1)), n
    }

    function o(e, n, i, r, a, o) {
        if (!_.isSingleExperimentPolicy(e.policy) || !r) {
            var s = !_.isSingleExperimentPolicy(e.policy) && r,
                c = t.formatNamesAndIdsForAnalytics(e, n, i, o),
                d = [c.names.experiment, c.names.variation],
                g = [c.idStrings.experiment, c.idStrings.variation];
            _.isSingleExperimentPolicy(e.policy) || (d.unshift(c.names.layer), g.unshift(c.idStrings.layer));
            var p = u.reduce(g, (function(e, t) {
                    return e + t.length
                }), 0),
                h = d.length - 1 + (s ? 1 : 0),
                v = h * l.length,
                m = p + v;
            if (s && (m += f.length), m > a) throw new Error("The analytics string size is too low to send the entity IDs.");
            for (var E = a - m, I = d.length, y = [], S = d.length - 1; S >= 0; S--) {
                var T = d[S],
                    A = Math.min(T.length, Math.floor(E / I));
                E -= A, I--, y.unshift(T.substring(0, A))
            }
            var w = u.map(y, (function(e, t) {
                return e + g[t]
            }));
            return s && w.push(f), w.join(l)
        }
    }

    function s(e, n, i, r, a, o) {
        var s = r ? f : g,
            c = 3 * l.length,
            d = t.formatNamesAndIdsForAnalytics(e, n, i, o),
            p = d.names,
            h = d.idStrings,
            v = u.reduce(h, (function(e, t) {
                return e + t.length
            }), 0);
        if (v + c + s.length > a) throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");
        var m = a - v - c - s.length,
            E = {};
        E.variation = Math.min(p.variation.length, Math.floor(m / 3)), m -= E.variation, E.experiment = Math.min(p.experiment.length, Math.floor(m / 2)), m -= E.experiment, E.layer = m;
        var I = {};
        u.each(p, (function(e, t) {
            I[t] = e.substring(0, E[t])
        }));
        var y = [];
        return _.isSingleExperimentPolicy(e.policy) || y.push(I.layer + h.layer), y = y.concat([I.experiment + h.experiment, I.variation + h.variation, s]), y.join(l)
    }
    var u = n(2),
        c = n(16),
        l = ":",
        d = "everyone_else",
        f = "holdback",
        g = "treatment",
        p = "",
        h = n(23),
        _ = n(45);
    t.formatNamesAndIdsForAnalytics = function(e, t, n, o) {
        var s = {
            layer: e.name || p,
            experiment: t.name || p,
            variation: n.name || p
        };
        if (o && (s = u.mapValues(s, i)), s.experiment === p && (!e.integrationStringVersion || 1 === e.integrationStringVersion))
            if (r(t.audienceIds)) s.experiment = "Exp";
            else {
                var l = c.get("stores/audience_data");
                s.experiment = a(l, t.audienceIds)
            }
        var d = {
            layer: "(" + i(e.id) + ")",
            experiment: "(" + i(t.id) + ")",
            variation: "(" + i(n.id) + ")"
        };
        return {
            names: s,
            idStrings: d
        }
    }, t.combineAndTruncateIdAndName = function(e, t, n) {
        var i = n - t.length;
        if (i < 0 && (h.warn("maxLength must be at least long enough to fit the entity ID, which is length" + t.length + ". Defaulting to only use entity ID as name."), e = p), e === p) return t;
        if (e.length > i) {
            var r = Math.min(e.length, i);
            return e = e.substring(0, r), e + t
        }
        return e + " " + t
    }, t.generateAnalyticsString = function(e, t, n, i, r, a) {
        return e.integrationStringVersion && 2 === e.integrationStringVersion ? o(e, t, n, i, r, a) : s(e, t, n, i, r, a)
    }
}), (function(e, t, n) {
    var i = n(97),
        r = n(7),
        a = n(9),
        o = n(23);
    t.defineProperty = function(e, t, n, s, u) {
        i(e, t, (function() {
            var e = ["prop", s, u || t].join(".");
            return o.debug('Evaluating getter: "' + e + '"'), a.dispatch(r.RECORD_API_USAGE, {
                methodName: e
            }), n()
        }), !0)
    }
}), (function(e, t) {
    "use strict";

    function n(e, t, n, i) {
        Object.defineProperty(e, t, {
            get: function() {
                var e = n.call(this);
                return Object.defineProperty(this, t, {
                    value: e,
                    enumerable: !!i,
                    writable: !0
                }), e
            },
            set: function(e) {
                return Object.defineProperty(this, t, {
                    value: e,
                    enumerable: !!i,
                    writable: !0
                }), e
            },
            enumerable: !!i,
            configurable: !0
        })
    }
    e.exports = n
}), (function(e, t, n) {
    function i(e) {
        var n = r.cloneDeep(e);
        return n.changes && (n.changes = r.map(n.changes, t.dereferenceChangeId)), n.experiments && r.each(n.experiments, (function(e) {
            e.changes && (e.changes = r.map(e.changes, t.dereferenceChangeId)), e.variations && r.each(e.variations, (function(e) {
                e.actions && r.each(e.actions, (function(e) {
                    e.changes && (e.changes = r.map(e.changes, t.dereferenceChangeId))
                }))
            }))
        })), n
    }
    var r = n(2),
        a = n(16),
        o = n(22),
        s = n(96),
        u = a.get("stores/change_data");
    t.translateDecisionToCampaignDecision = function(e) {
        return c(r.cloneDeep(e), {
            layerId: "campaignId",
            isLayerHoldback: "isCampaignHoldback"
        })
    }, t.translateLayerEventToCampaignEvent = function(e) {
        var t = {};
        return s.defineProperty(t, "campaign", (function() {
            var t = i(e.data.layer);
            return t
        }), "campaignEvent"), t.decisionTicket = e.data.decisionTicket, t.decision = this.translateDecisionToCampaignDecision(e.data.decision), t.audiences = e.data.audiences, {
            type: "lifecycle",
            name: "campaignDecided",
            data: t
        }
    }, t.translateViewActivatedToPageActivated = function(e) {
        return {
            type: "lifecycle",
            name: "pageActivated",
            data: {
                page: e.data.view
            }
        }
    }, t.dereferenceChangeId = function(e) {
        var t = u.getChange(e);
        return t ? o.safeReference(t) : e
    };
    var c = function(e, t) {
        var n = r.omit(e, r.keys(t));
        return r.each(t, (function(t, i) {
            n[t] = e[i]
        })), n
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(16),
        a = r.get("stores/global_state"),
        o = r.get("stores/layer_data"),
        s = r.get("stores/observed_redirect");
    t.getReferrer = function() {
        var e = s.get();
        return e ? e.referrer : i.isString(a.getEffectiveReferrer()) ? a.getEffectiveReferrer() : null
    }, t.getExperimentAndVariation = function() {
        var e = s.get();
        if (e && i.isString(e.variationId)) return i.pick(e, ["experimentId", "variationId"]);
        if (i.isString(a.getEffectiveVariationId())) {
            var t = a.getEffectiveVariationId(),
                n = o.getExperimentByVariationId(t),
                r = n ? n.id : null;
            return {
                experimentId: r,
                variationId: t
            }
        }
        return null
    }
}), (function(e, t, n) {
    var i = n(12).Promise,
        r = n(101).observeSelector,
        a = n(102).poll,
        o = n(104).waitForElement,
        s = n(105).waitUntil;
    t.create = function() {
        return {
            observeSelector: r,
            poll: a,
            Promise: i,
            waitForElement: o,
            waitUntil: s
        }
    }
}), (function(e, t, n) {
    function i() {
        if (f.shouldObserveChangesIndefinitely()) {
            var e = {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                },
                t = g.getDocumentElement(),
                n = new MutationObserver(function() {
                    this.disconnect(), l.each(l.keys(m), a), this.observe(t, e)
                });
            return function(i) {
                var r = m[i];
                n.observe(t, e), r.cancelObservation = function() {
                    delete m[i], l.isEmpty(m) && n.disconnect()
                }
            }
        }
        return function(e) {
            var t = h.poll(l.partial(a, e));
            m[e].cancelObservation = function() {
                t(), delete m[e]
            }
        }
    }

    function r(e) {
        var t = m[e];
        t && t.cancelObservation && t.cancelObservation()
    }

    function a(e) {
        if (m[e]) {
            if (o(m[e])) return 0 === m[e].matchedCount && l.isFunction(m[e].options.onTimeout) && m[e].options.onTimeout(), void r(e);
            var t = document.querySelectorAll(m[e].selector);
            t.length && (l.each(t, (function(t) {
                t.Kt && t.Kt[e] || m[e].callbackQueue.push(t)
            })), s(e))
        }
    }

    function o(e) {
        var t = e.options.timeout;
        if (null !== t)
            if ("function" == typeof t) try {
                return t()
            } catch (e) {} else if (Date.now() - e.startTime > t) return !0;
        return !1
    }

    function s(e) {
        for (; m[e] && m[e].callbackQueue.length;) {
            var t = m[e].callbackQueue.shift();
            if (u(t, e), m[e].matchedCount = m[e].matchedCount + 1, m[e].callback(t), m[e] && m[e].options.once) return void r(e)
        }
    }

    function u(e, t) {
        e.Kt || (e.Kt = {}), e.Kt[t] = !0
    }

    function c(e) {
        try {
            document.querySelector(e)
        } catch (e) {
            return !1
        }
        return !0
    }
    var l = n(2),
        d = (n(7), n(16)),
        f = d.get("stores/directive"),
        g = n(81),
        p = (n(25), n(9), n(5).generate),
        h = n(102),
        _ = n(41),
        v = (d.get("stores/rum"), {
            once: !1,
            onTimeout: null,
            timeout: null
        }),
        m = {},
        E = function(e) {
            (E = i())(e)
        };
    t.observeSelector = function(e, t, n) {
        if (!c(e)) throw new Error("observeSelector expects a valid css selector as its first argument");
        if (!l.isFunction(t)) throw new Error("observeSelector expects a function as its second argument");
        if (n && (!l.isObject(n) || l.isFunction(n))) throw new Error("observeSelector expects an object as its third argument");
        var i = p();
        return n = l.assign({}, v, n || {}), m[i] = {
            callback: t,
            callbackQueue: [],
            matchedCount: 0,
            options: n,
            selector: e,
            startTime: Date.now()
        }, E(i), _.setTimeout(l.bind(a, null, i), 0), l.partial(r, i)
    }
}), (function(e, t, n) {
    function i(e) {
        l[e] && a.each(l[e].callbacks, (function(e) {
            e.call(null)
        }))
    }

    function r(e, t) {
        l[t] && l[t].callbacks[e] && (delete l[t].callbacks[e], a.some(l[t].callbacks) || (clearInterval(l[t].id), delete l[t]))
    }
    var a = n(2),
        o = (n(7), n(16)),
        s = (n(25), n(9), n(5).generate),
        u = n(41),
        c = n(103).DEFAULT_INTERVAL,
        l = (o.get("stores/rum"), {});
    t.poll = function(e, t) {
        a.isNumber(t) || (t = c), l[t] || (l[t] = {
            callbacks: {},
            id: u.setInterval(a.partial(i, t), t)
        });
        var n = s();
        return l[t].callbacks[n] = e, a.partial(r, n, t)
    }, t.cancelAll = function() {
        a.each(l, (function(e, t) {
            clearInterval(e.id), delete l[t]
        }))
    }
}), (function(e, t) {
    e.exports = {
        DEFAULT_INTERVAL: 20
    }
}), (function(e, t, n) {
    var i = n(12).Promise,
        r = n(101).observeSelector;
    t.waitForElement = function(e) {
        return new i(function(t, n) {
            r(e, t, {
                once: !0
            })
        })
    }
}), (function(e, t, n) {
    var i = n(12).Promise,
        r = n(102).poll;
    t.waitUntil = function(e) {
        return new i(function(t, n) {
            if (e()) return void t();
            var i = r((function() {
                e() && (i(), t())
            }))
        })
    }
}), (function(e, t, n) {
    var i = n(87);
    t.on = function(e) {
        return e.publicOnly = !0, i.on(e)
    }, t.off = i.off, t.emit = function(e) {
        i.emit(e)
    }
}), (function(e, t, n) {
    function i(e) {
        var t, n = {};
        if (e)
            if (r(e)) t = Number(e);
            else {
                if ("object" != typeof e) throw new Error("tracker", "Revenue argument", e, "not a number.");
                if (n = a.extend({}, e), "revenue" in n) {
                    if (!r(n["revenue"])) throw new Error("tracker", "Revenue value", n["revenue"], "not a number.");
                    t = Number(n["revenue"]), delete n["revenue"]
                }
            }
        return a.isUndefined(t) || (n.revenue = t), n
    }

    function r(e) {
        return a.isNumber(e) || a.isString(e) && Number(e) == e
    }
    var a = n(2),
        o = n(108);
    t.activateGeoDelayedExperiments = function(e, t) {
        t || (t = e.lists ? "odds" : "cdn3"), o.dataFromSource({
            data: e,
            source: t
        })
    }, t.activateSiteCatalyst = function(e) {
        e && e.sVariable && o.integrationSettings({
            id: "adobe_analytics",
            settings: {
                sVariableReference: e.sVariable
            }
        })
    }, t.bucketUser = t.bucketVisitor = function(e, t) {
        if (e && t) {
            var n = {
                experimentId: String(e)
            };
            t > 256 ? n.variationId = String(t) : n.variationIndex = String(t), o.bucketVisitor(n)
        }
    }, t.disable = function(e) {
        o.disable({
            scope: e
        })
    }, t.log = function(e) {
        a.isUndefined(e) && (e = !0), o.log({
            level: e ? "INFO" : "OFF"
        })
    }, t.optOut = function(e) {
        a.isUndefined(e) && (e = !0), o.optOut({
            isOptOut: e
        })
    }, t.setCookieDomain = function(e) {
        o.cookieDomain({
            cookieDomain: e
        })
    }, t.setCookieExpiration = function(e) {
        o.cookieExpiration({
            cookieExpirationDays: e
        })
    }, t.setDimensionValue = function(e, t) {
        var n = {};
        n[e] = t, o.user({
            attributes: n
        })
    }, t.setUserId = function(e) {
        o.user({
            userId: e
        })
    }, t.storeThirdPartyData = function(e, t) {
        o.dataFromSource({
            source: e,
            data: t
        })
    }, t.trackEvent = function(e, t) {
        o.event({
            eventName: e,
            tags: i(t)
        })
    }
}), (function(e, t, n) {
    function i(e) {
        var t;
        return e.eventId && (t = I.create(e.eventId, e.eventName, "custom")), D.updateAllViewTags(),
            function() {
                var n = g.trackCustomEvent(e.eventName, e.tags, t);
                n ? w.log("API / Tracking custom event:", e.eventName, e.tags) : w.log("API / Not tracking custom event:", e.eventName)
            }
    }

    function r(e) {
        var t;
        return e.eventData && (t = I.create(e.eventData.id, e.eventData.apiName, "click", e.eventData)),
            function() {
                var e = g.trackClickEvent(t);
                e ? w.log("API / Tracking click event:", e) : w.log("API / Not tracking click event:", e)
            }
    }

    function a(e) {
        var t = e.eventData,
            n = A.createLayerState(t.layerId, t.experimentId, t.variationId),
            i = A.createSingle(t.layerId, t.experimentId, t.variationId);
        return function() {
            A.recordLayerDecision(n.layerId, n.decisionTicket, n.decision), w.log("API / Tracking decision event:", n), g.trackDecisionEvent(n.decision, n.decisionTicket, i)
        }
    }

    function o(e) {
        var t = D.create(e.eventData.id, e.eventData.apiName),
            n = D.createState(t.id);
        return function() {
            var e = g.trackViewActivation(t, n);
            e ? w.log("API / Tracking pageview event:", e) : w.log("API / Not tracking pageview event:", e)
        }
    }
    var s = n(2),
        u = n(7),
        c = n(93),
        l = n(94),
        d = n(109),
        f = n(25),
        g = n(110),
        p = n(117),
        h = n(6),
        _ = n(77).create,
        v = n(24),
        m = n(118),
        E = n(121),
        I = n(122),
        y = n(87),
        S = n(9),
        T = n(26),
        A = n(113),
        w = n(23),
        b = n(123),
        D = n(124),
        R = n(75),
        O = n(16),
        N = O.get("stores/dimension_data"),
        C = O.get("stores/view_data"),
        P = O.get("stores/visitor_id"),
        L = O.get("stores/layer_data"),
        V = O.get("stores/directive"),
        k = !1,
        x = 86400,
        F = 90,
        M = t.ApiListenerError = _("ApiListenerError");
    t.event = function(e) {
        var t;
        switch (e.eventType) {
            case "click":
                t = r(e);
                break;
            case "decision":
                t = a(e);
                break;
            case "pageview":
                t = o(e);
                break;
            case "custom":
            default:
                t = i(e)
        }
        P.getBucketingId() ? t() : S.dispatch(u.ADD_CLEANUP_FN, {
            lifecycle: f.Lifecycle.postActivate,
            cleanupFn: t
        })
    }, t.clientMetadata = function(e) {
        k && (S.dispatch(u.SET_CLIENT_NAME, e.clientName), S.dispatch(u.SET_CLIENT_VERSION, e.clientVersion))
    }, t.microsnippetError = function(e) {
        if (k) {
            var t = e.errorData.metadata && e.errorData.metadata.err || {};
            t.name = e.errorData.code;
            var n = {
                engine: e.engine,
                msVersion: e.errorData.msVersion,
                requestId: e.errorData.requestId,
                projectId: e.errorData.projectId,
                snippetKey: e.errorData.snippetKey,
                args: e.errorData.args
            };
            E.handleError(t, n)
        }
    }, t.rum = function(e) {
        S.dispatch(u.SET_RUM_DATA, e.eventData)
    }, t.page = function(e) {
        var t = C.getByApiName(e.pageName);
        if (!t) throw new Error('Unknown page "' + e.pageName + '"');
        var n = !e.hasOwnProperty("isActive") || e.isActive,
            i = function() {
                n ? D.activateViaAPI(t, e.tags) : (D.deactivate(t), w.log("API / Deactivated Page", D.description(t)))
            };
        P.getBucketingId() ? i() : S.dispatch(u.ADD_CLEANUP_FN, {
            lifecycle: f.Lifecycle.postViewsActivated,
            cleanupFn: i
        })
    }, t.tags = function(e) {
        D.setGlobalTags(e.tags)
    }, t.user = function(e) {
        k && e.visitorId && (P.getBucketingId() ? (w.log("API / Setting visitor Id:", e.visitorId), R.setId({
            randomId: e.visitorId
        })) : (w.log("API / Setting visitor Id for activation:", e.visitorId), S.dispatch(u.SET_VISITOR_ID_VIA_API, e.visitorId))), w.log("API / Setting visitor attributes:", e.attributes), s.each(e.attributes, (function(e, t) {
            var n, i = t,
                r = N.getById(t) || N.getByApiName(t);
            r && (i = r.id, n = r.segmentId || r.id);
            var a = function() {
                S.dispatch(u.SET_VISITOR_ATTRIBUTES, {
                    attributes: [{
                        key: ["custom", i],
                        value: {
                            id: n,
                            value: e
                        },
                        metadata: {
                            lastModified: v.now()
                        }
                    }]
                })
            };
            P.getBucketingId() ? a() : S.dispatch(u.ADD_CLEANUP_FN, {
                lifecycle: f.Lifecycle.postVisitorProfileLoad,
                cleanupFn: a
            })
        }))
    }, t.optOut = function(e) {
        var t = !e.hasOwnProperty("isOptOut") || e.isOptOut;
        m.setOptOut(t)
    }, t.cookieExpiration = function(e) {
        var t = e.cookieExpirationDays;
        t < F && (w.error('Argument "cookieExpirationDays"=', t, "less than minimum days:", F, ", setting to minimum."), t = F), w.log("API / Setting cookie age to", t, "days."), S.dispatch(u.SET_COOKIE_AGE, t * x)
    }, t.extendCookieLifetime = function(e) {
        e = s.extend({
            isEnabled: !0
        }, e), w.log("API / Setting cookie automatic lifetime extension to", e.isEnabled), S.dispatch(u.SET_COOKIE_AUTO_REFRESH, e.isEnabled)
    }, t.cookieDomain = function(e) {
        w.log("API / Setting cookie domain to", e.cookieDomain), S.dispatch(u.SET_COOKIE_DOMAIN, e.cookieDomain)
    }, t.disable = function(e) {
        if (e.scope) {
            if ("tracking" !== e.scope) throw new Error('Unknown "scope" for disable: ' + e.scope);
            w.log("API / Disabling tracking"), S.dispatch(u.LOAD_DIRECTIVE, {
                trackingDisabled: !0
            })
        } else w.log("API / Disabling everything"), S.dispatch(u.LOAD_DIRECTIVE, {
            disabled: !0
        })
    }, t.log = function(e) {
        var t = e.level,
            n = e.match;
        s.isUndefined(t) && (t = "INFO"), s.isUndefined(n) && (n = ""), w.setLogMatcher(n), w.setLogLevel(t)
    }, t.registerModule = function(e) {
        var t = "custom/" + e.moduleName;
        if (l[t] || c.get(t)) throw new Error('Module name "' + t + '" is reserved. Will not be registered as plugin.');
        b.registerApiModule(t, e.module)
    }, t.dataFromSource = function(e) {
        var t = e.source;
        h.makeAsyncRequest(t), h.resolveRequest(t, e.data)
    }, t.addListener = function(e) {
        if (!s.isFunction(e.handler)) throw new Error("A handler function must be supplied");
        e = s.omit(e, "type"), e.publicOnly = !0, e.emitErrors = !0;
        var t = e.handler;
        e.handler = function(e) {
            try {
                return t(e)
            } catch (e) {
                throw new M(e)
            }
        }, y.on(e)
    }, t.removeListener = function(e) {
        if (!e.token) throw new Error("Must supply a token to removeListener");
        y.off(e.token)
    }, t.load = function(e) {
        e.data = s.extend({}, e.data), d.normalizeClientData(e.data), S.dispatch(u.DATA_LOADED, {
            data: e.data
        })
    }, t.integrationSettings = function(e) {
        if (!e.id) throw new Error("id is required");
        if (!e.settings) throw new Error("settings is required");
        S.dispatch(u.SET_INTEGRATION_SETTINGS, s.extend({}, e.settings, {
            id: e.id
        }))
    }, t.bucketVisitor = function(e) {
        if (!e.variationId && s.isUndefined(e.variationIndex) || e.variationId && e.variationIndex) throw new Error("One of a variationId or a variationIndex is required.");
        if (!e.experimentId) throw new Error("An experimentId is required.");
        var t, n, i = e.campaignId;
        if (i) {
            if (t = L.get(i), !t) throw new Error("Could not find layer " + i)
        } else if (t = L.getLayerByExperimentId(e.experimentId), i = t.id, !i) throw new Error("Could not find layer for experiment " + e.experimentId);
        if (n = s.find(t.experiments, {
                id: e.experimentId
            }), !n) throw new Error("Could not find experiment " + e.experimentId + " in layer " + i);
        var r = e.variationId;
        if (s.isUndefined(e.variationIndex)) {
            if (!s.find(n.variations, {
                    id: r
                })) throw new Error("Cound not find variation " + r + " in experiment " + e.experimentId)
        } else if (r = n.variations[e.variationIndex].id, !r) throw new Error("Could not find variation at index " + e.variationIndex + " in experiment " + e.experimentId);
        R.updateVariationIdMap(i, e.experimentId, r), P.getBucketingId() && R.persistVariationIdMap()
    }, t.waitForOriginSync = function(e) {
        if (!s.isArray(e.canonicalOrigins)) throw new Error("canonicalOrigins must be an array. Got: " + T.stringify(e.canonicalOrigins));
        s.each(e.canonicalOrigins, (function(e) {
            if (!s.isString(e)) throw new Error("Each item in canonicalOrigins must be a string. Found type " + typeof e)
        })), S.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS, {
            canonicalOrigins: e.canonicalOrigins
        })
    }, t.disableCrossOrigin = function() {
        w.log("API / cross origin tracking is DISABLED"), S.dispatch(u.XDOMAIN_SET_DISABLED, {
            disabled: !0
        })
    }, t.activate = function() {
        V.shouldActivate() ? p.emitActivateEvent() : w.debug("Not activating.")
    }, t.sendEvents = function() {
        p.emitSendEvents()
    }, t.holdEvents = function() {
        p.emitHoldEvents()
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(25);
    t.normalizeClientData = function(e) {
        !e.listTargetingKeys && e.listTargetingCookies && (e.listTargetingKeys = i.map(e.listTargetingCookies, (function(e) {
            return {
                type: r.ListTargetingKeyTypes.COOKIE,
                key: e
            }
        })), delete e.listTargetingCookies)
    }
}), (function(e, t, n) {
    function i(e, t) {
        var n = V.description(t),
            i = Q.isExpectingRedirect(),
            r = Q.getLayerId();
        if (i && r === t.id) {
            var a = G.TrackLayerDecisionTimingFlags.preRedirectPolicy;
            e.timing = a, m(a, [G.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT], e), k.log("Called trackLayerDecision for redirect Campaign", n, e)
        } else {
            var a = G.TrackLayerDecisionTimingFlags.nonRedirectPolicy;
            e.timing = a, m(a, [G.NonRedirectPolicies.TRACK_IMMEDIATELY], e), k.log("Called trackLayerDecision for non-redirect Campaign", n, e)
        }
    }

    function r(e, t, n, i, r, a) {
        var o = V.description(a),
            s = d(e, t, n, i);
        _("onLayerDecision", s, r ? "trackLayerDecision" : void 0), k.log("Analytics / Called onLayerDecision for Campaign", o, s)
    }

    function a(e, t, n) {
        var i = f({
                activeViewStates: K.getActiveViewStates(),
                visitorProfile: $.getVisitorProfile(),
                layerStates: q.getLayerStatesForAnalytics()
            }),
            r = n && n.pageId ? p(n) : K.getActiveViewTags(),
            a = I.extend({}, r, t),
            o = n && n.category ? n.category : O.OTHER;
        return I.extend(i, {
            eventEntityId: n && n.id,
            eventApiName: e,
            eventCategory: o,
            eventTags: a
        })
    }

    function o(e, t) {
        var n = f({
            activeViewStates: K.getActiveViewStates(),
            visitorProfile: $.getVisitorProfile(),
            layerStates: q.getLayerStatesForAnalytics()
        });
        return I.extend(n, {
            pageId: e.id,
            viewCategory: e.category,
            eventTags: t.metadata
        })
    }

    function s(e) {
        var t = f({
                activeViewStates: K.getActiveViewStates(),
                visitorProfile: $.getVisitorProfile(),
                layerStates: q.getLayerStatesForAnalytics()
            }),
            n = e.config && e.config.selector ? e.config.selector : e.eventFilter.selector,
            i = e && e.category ? e.category : O.OTHER,
            r = p(e);
        return I.extend(t, {
            event: e,
            eventCategory: i,
            eventTags: r,
            selector: n
        })
    }

    function u() {
        var e = f({
            activeViewStates: [],
            visitorProfile: $.getVisitorProfile(),
            layerStates: q.getLayerStatesForAnalytics()
        });
        return I.extend(e, {
            eventTags: {}
        })
    }

    function c(e, t, n, i) {
        var r = null,
            a = null,
            o = null;
        if (t.experimentId) {
            var s = I.find(i.experiments, {
                id: t.experimentId
            });
            if (s && (r = s.name || null, o = s.integrationSettings, t.variationId)) {
                var u = I.find(s.variations, {
                    id: t.variationId
                });
                u && (a = u.name || null)
            }
        }
        var c = F.getReferrer() || D.getReferrer(),
            l = {
                sessionId: H.getSessionId(),
                decisionTicketAudienceIds: n.audienceIds,
                visitorId: ee.getRandomId(),
                decisionId: e,
                activationId: j.getActivationId(),
                namespace: j.getNamespace(),
                timestamp: w.now(),
                pageId: n.pageId || null,
                variationId: t.variationId,
                variationName: a,
                experimentId: t.experimentId,
                experimentName: r,
                layerId: t.layerId,
                layerName: i.name,
                layerPolicy: i.policy,
                accountId: j.getAccountId(),
                projectId: j.getProjectId(),
                revision: String(j.getRevision()),
                clientName: z.getClientName(),
                clientVersion: z.getClientVersion(),
                referrer: c,
                integrationStringVersion: i.integrationStringVersion,
                integrationSettings: I.extend({}, i.integrationSettings, o)
            };
        return l
    }

    function l(e, t, n) {
        var i = I.extend({}, e, {
            isLayerHoldback: t,
            clientName: I.isNull(e.clientName) ? A.NAME : e.clientName,
            anonymizeIP: I.isNull(j.getAnonymizeIP()) ? void 0 : j.getAnonymizeIP(),
            userFeatures: h(n),
            layerStates: q.getLayerStatesForAnalytics()
        });
        return i
    }

    function d(e, t, n, i) {
        return {
            decisionId: e,
            timestamp: w.now(),
            revision: j.getRevision(),
            clientName: z.getClientName(),
            clientVersion: z.getClientVersion(),
            projectId: j.getProjectId(),
            accountId: j.getAccountId(),
            activationId: j.getActivationId(),
            sessionId: H.getSessionId(),
            visitorId: ee.getRandomId(),
            decision: t,
            decisionTicket: n,
            userFeatures: h(i),
            layerStates: q.getLayerStatesForAnalytics()
        }
    }

    function f(e) {
        var t = {
            eventId: B.generate(),
            timestamp: w.now(),
            revision: j.getRevision(),
            clientName: z.getClientName(),
            clientVersion: z.getClientVersion(),
            projectId: j.getProjectId(),
            accountId: j.getAccountId(),
            activationId: j.getActivationId(),
            sessionId: H.getSessionId(),
            isGlobalHoldback: j.isGlobalHoldback(),
            visitorId: ee.getRandomId(),
            activeViewStates: e.activeViewStates,
            layerStates: e.layerStates,
            userFeatures: h(e.visitorProfile)
        };
        return t
    }

    function g(e) {
        var t = K.getViewState(e),
            n = t && t.isActive ? t.metadata : {};
        return n
    }

    function p(e) {
        var t = {};
        return e.pageId ? g(e.pageId) : t
    }

    function h(e) {
        var t = Y.getAllPlugins(R.PluginTypes.visitorProfileProviders),
            n = I.filter(t, {
                shouldTrack: !0
            }),
            i = {
                id: null,
                type: null,
                name: "",
                value: null,
                shouldIndex: !0
            };
        return I.reduce(n, (function(t, n) {
            try {
                var r = n.provides,
                    a = e[r],
                    o = [];
                if (!I.isUndefined(a)) {
                    I.isObject(a) ? o = I.map(a, (function(e, t) {
                        var n = I.isObject(e) ? e : {
                            value: e
                        };
                        return I.extend({}, {
                            type: r,
                            name: t
                        }, n)
                    })) : o.push({
                        type: r,
                        value: a
                    });
                    var s = I(o).map((function(e) {
                        return I.pick(I.extend({}, i, e), I.keys(i))
                    })).filter((function(e) {
                        return !!e.value
                    })).value();
                    t = t.concat(s)
                }
            } catch (e) {
                k.warn("Error evaluating userFeature against visitorProfile:", e)
            }
            return t
        }), [])
    }

    function _(e, t, n) {
        var i = v(e, n);
        k.debug("Found " + i.length + " analytics integrations defining a " + e + " hook"), k.debug("Calling each with data: ", t), I.each(i, (function(e) {
            try {
                k.debug("Calling plugin: " + e.name), e.hookFn(t), k.debug("Called plugin: " + e.name)
            } catch (e) {
                k.error(e)
            }
        }))
    }

    function v(e, t) {
        var n = [];
        return I.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers), (function(i, r) {
            if (i[e] && (!t || !i[t])) try {
                n.push({
                    name: r,
                    hookFn: b.evaluate(i[e])
                })
            } catch (e) {
                k.error(e)
            }
        })), n
    }

    function m(e, t, n) {
        var i = E(e, t);
        k.debug("Found " + i.length + " analytics integrations  defining a trackLayerDecision " + e + " timing of " + t.join("|")), k.debug("Calling each with data: ", n), I.each(i, (function(e) {
            try {
                k.debug("Calling plugin: " + e.name), e.hookFn(n), k.debug("Called plugin: " + e.name)
            } catch (e) {
                k.error(e)
            }
        }))
    }

    function E(e, t) {
        var n = [];
        return I.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers), (function(i, r) {
            I.includes(t, i[e]) && n.push({
                name: r,
                hookFn: i.trackLayerDecision
            })
        })), n
    }
    var I = n(2),
        y = n(7),
        S = n(86),
        T = n(72),
        A = n(32),
        w = n(24),
        b = n(16),
        D = n(81),
        R = n(25),
        O = n(74),
        N = n(87),
        C = n(111),
        P = n(112),
        L = n(9),
        V = n(113),
        k = n(23),
        x = (n(84), n(12).Promise),
        F = n(99),
        M = n(114),
        U = n(116),
        G = n(115),
        B = n(5),
        z = b.get("stores/client_metadata"),
        j = b.get("stores/global"),
        H = b.get("stores/session"),
        K = b.get("stores/view"),
        Y = b.get("stores/plugins"),
        q = b.get("stores/layer"),
        X = b.get("stores/layer_data"),
        W = b.get("stores/observed_redirect"),
        Q = b.get("stores/pending_redirect"),
        $ = b.get("stores/visitor"),
        J = b.get("stores/directive"),
        Z = b.get("stores/event_data"),
        ee = b.get("stores/visitor_id"),
        te = "COOKIE",
        ne = !0,
        ie = 1e3;
    t.trackClientActivation = function() {
        if (J.shouldSendTrackingData()) {
            var e = u();
            return _("onClientActivation", e), e
        }
    }, t.trackCustomEvent = function(e, t, n) {
        t = t || {}, n || (n = Z.getByApiName(e));
        var i = a(e, t, n),
            r = {
                name: e,
                type: P.CUSTOM,
                category: i.eventCategory,
                tags: I.omit(i.eventTags, "revenue")
            };
        if (I.isUndefined(t.revenue) || (r.revenue = t.revenue), S.emitAnalyticsEvent({
                name: n ? n.name || n.apiName : e,
                apiName: n ? n.apiName : void 0,
                type: P.CUSTOM,
                tags: I.omit(i.eventTags, "revenue"),
                category: i.eventCategory,
                metrics: r.revenue ? {
                    revenue: r.revenue
                } : {}
            }, !J.shouldSendTrackingData()), J.shouldSendTrackingData()) return T.addEvent(r), _("onCustomEvent", i), i
    }, t.trackDecisionEvent = function(e, t, n) {
        n || (n = X.get(e.layerId));
        var a = B.generate();
        L.dispatch(y.RECORD_LAYER_DECISION_EVENT_ID, {
            layerId: e.layerId,
            pageId: t.pageId,
            decisionId: a
        });
        var o;
        if (te) {
            o = c(a, e, t, n);
            var s = Q.isExpectingRedirect(),
                u = Q.getLayerId();
            if (s && u === n.id) {
                M.persist(o, te);
                var d = V.description(n);
                k.log("Relaying decision for redirect Campaign", d, V.description(n))
            }
        }
        if (!J.shouldSendTrackingData()) return void k.log("Analytics / Not tracking decision for Campaign", V.description(n));
        var f = $.getVisitorProfile();
        if (te) {
            var g = l(o, e.isLayerHoldback, f);
            i(g, n), r(a, e, t, f, !0, n)
        } else r(a, e, t, f, !1, n)
    }, t.trackPostRedirectDecisionEvent = function() {
        if (!J.shouldSendTrackingData()) return x.resolve();
        if (W.hasTracked()) return x.resolve();
        var e = W.get();
        if (!e) return x.resolve();
        var t = $.getVisitorProfile(),
            n = l(e, !1, t),
            i = G.TrackLayerDecisionTimingFlags.postRedirectPolicy;
        if (n.timing = i, m(i, [G.PostRedirectPolicies.TRACK_IMMEDIATELY], n), ne) {
            var r = new x(function(e, t) {
                    var n = N.on({
                        filter: {
                            type: C.TYPES.LIFECYCLE,
                            name: "originsSynced"
                        },
                        handler: function() {
                            e(), N.off(n)
                        }
                    })
                }),
                a = U.makeTimeoutPromise(ie);
            return x.race([r, a]).then((function() {
                k.log("Calling trackers after successful sync")
            }), (function(e) {
                k.warn("Calling trackers after failed sync:", e)
            })).then((function() {
                t = $.getVisitorProfile(), n = l(e, !1, t), n.timing = G.TrackLayerDecisionTimingFlags.postRedirectPolicy, m(G.TrackLayerDecisionTimingFlags.postRedirectPolicy, [G.PostRedirectPolicies.TRACK_AFTER_SYNC], n), L.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA)
            }))["catch"]((function(e) {
                k.error("Error when calling trackers after sync:", e)
            }))
        }
        return m(G.TrackLayerDecisionTimingFlags.postRedirectPolicy, [G.PostRedirectPolicies.TRACK_AFTER_SYNC], n), L.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA), x.resolve()
    }, t.trackClickEvent = function(e) {
        var t = s(e),
            n = {
                name: e.apiName,
                type: e.eventType,
                category: t.eventCategory,
                tags: t.eventTags
            };
        if (S.emitAnalyticsEvent({
                name: e.name || e.apiName,
                apiName: e ? e.apiName : void 0,
                type: e.eventType,
                category: t.eventCategory,
                tags: t.eventTags,
                metrics: {}
            }, !J.shouldSendTrackingData()), J.shouldSendTrackingData()) return T.addEvent(n), _("onClickEvent", t), t
    }, t.trackViewActivation = function(e, t) {
        if (t || (t = K.getViewState(e.id)), !t.isActive) return void k.debug("Inactive view passed to `trackViewActivation`");
        var n = o(e, t),
            i = {
                name: e.apiName,
                type: P.PAGEVIEW,
                category: n.viewCategory,
                tags: n.eventTags
            };
        return S.emitAnalyticsEvent({
            name: e.name || e.apiName,
            apiName: e.apiName,
            type: P.PAGEVIEW,
            category: n.viewCategory,
            tags: n.eventTags,
            metrics: {}
        }, !J.shouldSendTrackingData()), J.shouldSendTrackingData() ? (T.addEvent(i), L.dispatch(y.TRACK_VIEW_ACTIVATED_EVENT, {
            pageId: e.id,
            eventData: n
        }), _("onPageActivated", n), n) : void 0
    }
}), (function(e, t) {
    t.TYPES = {
        ACTION: "action",
        ANALYTICS: "analytics",
        EDITOR: "editor",
        LIFECYCLE: "lifecycle"
    }
}), (function(e, t) {
    e.exports = {
        CLICK: "click",
        CUSTOM: "custom",
        ENGAGEMENT: "engagement",
        PAGEVIEW: "pageview"
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(24),
        o = n(16),
        s = n(9),
        u = o.get("stores/global"),
        c = o.get("stores/session"),
        l = 2e3;
    t.recordLayerDecision = function(e, t, n) {
        return s.dispatch(r.RECORD_LAYER_DECISION, {
            layerId: e,
            decision: n,
            decisionTicket: t,
            sessionId: c.getSessionId(),
            activationId: u.getActivationId(),
            timestamp: a.now(),
            revision: u.getRevision(),
            namespace: u.getNamespace(),
            pageId: t.pageId
        }), n
    }, t.relatedAudienceIds = function(e) {
        var t = {},
            n = ["and", "or", "not"];
        return i.each(e.experiments, (function(e) {
            i.each(i.flattenDeep(e.audienceIds), (function(e) {
                i.includes(n, e) || (t[e] = !0)
            }))
        })), i.keys(t)
    }, t.getActivationTimeout = function(e) {
        var t = e.activation;
        return t && null !== t.timeout && void 0 !== t.timeout ? t.timeout : l
    }, t.description = function(e) {
        return (e.name ? '"' + e.name + '" ' : "") + "(" + e.id + ")"
    }, t.createSingle = function(e, t, n) {
        var i = {
            id: e,
            policy: "single_experiment",
            holdback: 0,
            experiments: [{
                id: t,
                variations: [{
                    id: n,
                    actions: []
                }]
            }]
        };
        return i
    }, t.createLayerState = function(e, t, n) {
        var i = {
            layerId: e,
            decision: {
                layerId: e,
                experimentId: t,
                variationId: n,
                isLayerHoldback: !1
            },
            decisionTicket: {
                audienceIds: []
            }
        };
        return i
    }
}), (function(e, t, n) {
    function i(e) {
        try {
            var t = r(e)
        } catch (e) {
            return v.error("Relay / Error computing redirect relay cookie: ", e), void g.emitError(e)
        }
        v.debug("Relay / Setting redirect relay cookie:", t);
        try {
            f.set(h.COOKIES.REDIRECT, t, {
                maxAge: 5,
                encodeValue: !1
            })
        } catch (e) {
            v.error("Relay / Failed to set redirect relay cookie", e), g.emitError(e)
        }
    }

    function r(e) {
        var t = [],
            n = l.reduce(e, (function(e, n, i) {
                var r = S[i];
                return r ? (r.isMulti ? l.forEach(n, (function(t, n) {
                    t = r.valueToValueString ? r.valueToValueString(t, n) : String(t), l.isNull(t) || (t = (r.encodeValueString || encodeURIComponent)(t), e.push(encodeURIComponent(r.relayName + I + n) + "=" + t))
                })) : l.isNull(n) || (n = (r.valueToValueString || String)(n), n = (r.encodeValueString || encodeURIComponent)(n), e.push(r.relayName + "=" + n)), e) : (t.push(i), e)
            }), []);
        if (t.length) throw new Error("Relay / Don't know how to relay some fields:", t);
        return n.sort(), n.join("&")
    }

    function a() {
        var e = f.get(h.COOKIES.REDIRECT, !1);
        if (e) {
            v.log("Relay / Found redirect cookie:", e);
            var t = o(e);
            if (!t.visitorId) {
                v.warn("Relay / Missing required field visitorId, attempting to load from VISITOR_ID cookie");
                var n = f.get(h.COOKIES.VISITOR_ID);
                t.visitorId = l.isString(n) ? n : null
            }
            return t
        }
    }

    function o(e) {
        var t = {},
            n = e.split("&");
        return l.forEach(n, (function(e) {
            var n = e.split("=");
            if (2 !== n.length) return void v.warn("Relay / Skipping invalid segment:", e);
            var i = f.safeDecodeURIComponent(n[0]),
                r = T[i];
            if (!r && (r = l.find(y, (function(e) {
                    return e.isMulti && 0 === i.indexOf(e.relayName + I)
                })), !r)) return void v.warn("Relay / Skipping segment with unknown field identifier:", e, i);
            var a = n[1];
            try {
                if (r.isMulti) {
                    t[r.name] = t[r.name] || {};
                    var o = i.substring(r.relayName.length + I.length);
                    a = (r.decodeValueString || f.safeDecodeURIComponent)(a), a = (r.valueFromValueString || l.identity)(a, o), t[r.name][o] = a
                } else a = (r.decodeValueString || f.safeDecodeURIComponent)(a), a = (r.valueFromValueString || l.identity)(a), t[r.name] = a
            } catch (t) {
                return v.warn("Relay / Skipping segment due to decode or parse error:", e, t), void g.emitError(t)
            }
        })), t
    }

    function s(e, t) {
        var n = null;
        if (e) {
            var i = E.getPlugin(h.PluginTypes.analyticsTrackers, t);
            if (i && l.isFunction(i.serializeSettings)) try {
                n = i.serializeSettings(e)
            } catch (e) {
                v.warn("Analytics / Failed to persist integrationSettings for plugin:", t, e)
            }
        }
        return n
    }

    function u(e, t) {
        var n = null,
            i = E.getPlugin(h.PluginTypes.analyticsTrackers, t);
        if (i && l.isFunction(i.deserializeSettings)) try {
            n = i.deserializeSettings(e)
        } catch (e) {
            v.warn("Analytics / Failed to persist integrationSettings for plugin:", t, e)
        }
        return n
    }

    function c(e) {
        var t = e.pageId || void 0;
        _.dispatch(d.RECORD_LAYER_DECISION, {
            layerId: e.layerId,
            decision: {
                layerId: e.layerId,
                experimentId: e.experimentId,
                variationId: e.variationId,
                isLayerHoldback: !1
            },
            decisionTicket: {
                audienceIds: e.decisionTicketAudienceIds,
                bucketingId: e.visitorId,
                globalHoldback: 0,
                preferredVariationMap: void 0,
                pageId: t,
                activationId: e.activationId
            },
            sessionId: e.sessionId,
            activationId: e.activationId,
            timestamp: e.timestamp,
            revision: e.revision,
            namespace: e.namespace,
            pageId: t
        }), _.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID, {
            layerId: e.layerId,
            pageId: t,
            decisionId: e.decisionId
        }), _.dispatch(d.ACTION_EXECUTED, {
            sessionId: e.sessionId,
            layerId: e.layerId,
            pageId: e.pageId,
            timestamp: e.timestamp,
            activationId: e.activationId
        })
    }
    var l = n(2),
        d = n(7),
        f = n(76),
        g = n(86),
        p = n(16),
        h = n(25),
        _ = n(9),
        v = n(23),
        m = n(115),
        E = p.get("stores/plugins"),
        I = ".",
        y = [{
            name: "sessionId",
            relayName: "s"
        }, {
            name: "decisionTicketAudienceIds",
            relayName: "as",
            valueToValueString: function(e) {
                return l.map(e, encodeURIComponent).join(",")
            },
            encodeValueString: l.identity,
            decodeValueString: l.identity,
            valueFromValueString: function(e) {
                return l.map(e.split(","), f.safeDecodeURIComponent)
            }
        }, {
            name: "decisionId",
            relayName: "d"
        }, {
            name: "activationId",
            relayName: "aId"
        }, {
            name: "pageId",
            relayName: "vId",
            isNullable: !0
        }, {
            name: "variationId",
            relayName: "v",
            isNullable: !0
        }, {
            name: "referrer",
            relayName: "r"
        }, {
            name: "timestamp",
            relayName: "t",
            valueFromValueString: Number
        }, {
            name: "visitorId",
            relayName: "i"
        }, {
            name: "projectId",
            relayName: "p"
        }, {
            name: "revision",
            relayName: "n"
        }, {
            name: "clientName",
            relayName: "cN",
            isNullable: !0
        }, {
            name: "clientVersion",
            relayName: "cV"
        }, {
            name: "namespace",
            relayName: "ns"
        }, {
            name: "accountId",
            relayName: "a"
        }, {
            name: "layerId",
            relayName: "l"
        }, {
            name: "layerName",
            relayName: "lN",
            isNullable: !0
        }, {
            name: "layerPolicy",
            relayName: "lP"
        }, {
            name: "experimentId",
            relayName: "x",
            isNullable: !0
        }, {
            name: "experimentName",
            relayName: "xN",
            isNullable: !0
        }, {
            name: "variationName",
            relayName: "vN",
            isNullable: !0
        }, {
            name: "integrationStringVersion",
            relayName: "isv",
            valueFromValueString: Number,
            isNullable: !0
        }, {
            name: "integrationSettings",
            relayName: "iS",
            isMulti: !0,
            valueToValueString: s,
            valueFromValueString: u,
            isNullable: !0
        }],
        S = {},
        T = {};
    l.forEach(y, (function(e) {
        S[e.name] = e, T[e.relayName] = e
    })), t.persist = function(e, t) {
        t === m.RedirectRelayMedia.COOKIE ? i(e) : v.error("Relay / Unsupported redirect relay medium: " + t)
    }, t.load = function() {
        var e;
        if (e || (e = a()), e) {
            var t = [];
            return l.forEach(y, (function(n) {
                (l.isNull(e[n.name]) || l.isUndefined(e[n.name])) && (n.isNullable ? e[n.name] = null : (delete e[n.name], t.push(n.name)))
            })), t.length ? void v.error("Relay / Observed redirect data with missing fields:", t) : (_.dispatch(d.LOAD_REDIRECT_DATA, e), _.dispatch(d.ADD_CLEANUP_FN, {
                lifecycle: h.Lifecycle.postVisitorProfileLoad,
                cleanupFn: function() {
                    c(e)
                }
            }), e)
        }
    }
}), (function(e, t, n) {
    var i = n(8);
    t.TrackLayerDecisionTimingFlags = i({
        preRedirectPolicy: null,
        postRedirectPolicy: null,
        nonRedirectPolicy: null
    }), t.PreRedirectPolicies = i({
        PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT: null,
        PERSIST_BEFORE_REDIRECT: null
    }), t.PostRedirectPolicies = i({
        TRACK_IMMEDIATELY: null,
        TRACK_AFTER_SYNC: null
    }), t.NonRedirectPolicies = i({
        TRACK_IMMEDIATELY: null
    }), t.RedirectRelayMedia = i({
        COOKIE: null
    })
}), (function(e, t, n) {
    var i = n(12).Promise,
        r = n(41);
    t.makeTimeoutPromise = function(e) {
        return new i(function(t, n) {
            r.setTimeout((function() {
                n(new Error("Timed out after " + e + " ms"))
            }), e)
        })
    }
}), (function(e, t, n) {
    function i(e) {
        var t = ["type", "selector", "attributes", "value"],
            n = r.extend({}, e);
        return n.changeSet = r.map(e.changeSet, (function(e) {
            return r.pick(l.dereferenceChangeId(e), t)
        })), n
    }
    var r = n(2),
        a = n(16),
        o = a.get("stores/audience_data"),
        s = n(87),
        u = n(111),
        c = n(96),
        l = n(98);
    t.emitLayerDecided = function(e) {
        var t = e.decisionTicket ? e.decisionTicket.audienceIds : [],
            n = r.map(t, (function(e) {
                return {
                    id: e,
                    name: o.get(e).name
                }
            })),
            i = {
                type: u.TYPES.LIFECYCLE,
                name: "layerDecided",
                data: r.extend(e, {
                    audiences: n
                })
            },
            a = l.translateLayerEventToCampaignEvent(i);
        s.emit(i), s.emit(a)
    }, t.emitViewActivated = function(e) {
        var t = {
                type: u.TYPES.LIFECYCLE,
                name: "viewActivated",
                data: e
            },
            n = l.translateViewActivatedToPageActivated(t);
        s.emit(t), s.emit(n)
    }, t.emitViewsActivated = function(e) {
        var t = {
            type: u.TYPES.LIFECYCLE,
            name: "viewsActivated",
            data: e
        };
        s.emit(t)
    }, t.emitPageDeactivated = function(e) {
        var t = {
            type: u.TYPES.LIFECYCLE,
            name: "pageDeactivated",
            data: e
        };
        s.emit(t)
    }, t.emitActivateEvent = function() {
        s.emit({
            type: u.TYPES.LIFECYCLE,
            name: "activate"
        }, !0)
    }, t.emitActivatedEvent = function() {
        s.emit({
            type: u.TYPES.LIFECYCLE,
            name: "activated"
        })
    }, t.emitInitializedEvent = function() {
        var e = {
            type: u.TYPES.LIFECYCLE,
            name: "initialized"
        };
        window.optimizely && (window.optimizely.initialized = !0), s.emit(e)
    }, t.emitOriginsSyncedEvent = function() {
        var e = {
            type: u.TYPES.LIFECYCLE,
            name: "originsSynced"
        };
        s.emit(e)
    }, t.emitActionAppliedEvent = function(e) {
        var t = {
            type: e.type,
            campaignId: e.layerId,
            pageId: e.pageId,
            experimentId: e.experimentId,
            variationId: e.variationId
        };
        c.defineProperty(t, "changes", (function() {
            return i(e).changeSet
        }), "actionAppliedEvent");
        var n = {
            type: u.TYPES.ACTION,
            name: "applied",
            data: t
        };
        s.emit(n)
    }, t.emitActionsForDecisionAppliedEvent = function(e, t) {
        var n = {
            decision: e
        };
        c.defineProperty(n, "actions", (function() {
            return r.map(t, i)
        }), "appliedAllForDecisionEvent");
        var a = {
            type: u.TYPES.ACTION,
            name: "appliedAllForDecision",
            data: n
        };
        s.emit(a)
    }, t.emitSendEvents = function() {
        var e = {
            type: u.TYPES.ANALYTICS,
            name: "sendEvents"
        };
        s.emit(e)
    }, t.emitHoldEvents = function() {
        var e = {
            type: u.TYPES.ANALYTICS,
            name: "holdEvents"
        };
        s.emit(e)
    }
}), (function(e, t, n) {
    function i() {
        var e = Boolean(E.result(window.optimizely, "initialized"));
        w.dispatch(I.LOAD_DIRECTIVE, {
            alreadyInitialized: e
        })
    }

    function r() {
        w.dispatch(I.LOAD_DIRECTIVE, {
            mutationObserverAPISupported: N.isMutationObserverAPISupported()
        })
    }

    function a() {
        var e = N.getUserAgent() || "";
        if (!E.isString(e)) return void b.warn("Directive / userAgent not a string");
        e = e.toLowerCase();
        var t = ["googlebot", "yahoo! slurp", "bingbot", "bingpreview", "msnbot", "keynote", "ktxn", "khte", "gomezagent", "alertsite", "yottaamonitor", "pingdom.com_bot", "aihitbot", "baiduspider", "adsbot-google", "mediapartners-google", "applebot", "catchpoint", "phantomjs", "moatbot", "facebookexternalhit"],
            n = function(t) {
                if (E.includes(e, t)) return b.warn("Directive / Matches bot:", t), !0
            };
        E.some(t, n) && (b.log("Directive / Disabling tracking"), w.dispatch(I.LOAD_DIRECTIVE, {
            trackingDisabled: !0
        }))
    }

    function o() {
        var e = S.get(A.COOKIES.OPT_OUT),
            n = R.getQueryParamValue(C.OPT_OUT),
            i = "You have successfully opted out of Optimizely for this domain.",
            r = "You are NOT opted out of Optimizely for this domain.",
            a = "true" === n || "false" === n;
        e ? a && n !== e ? t.setOptOut("true" === n) : w.dispatch(I.LOAD_DIRECTIVE, {
            shouldOptOut: "true" === e
        }) : "true" === n && t.setOptOut(!0), a && N.alert("true" === n ? i : r)
    }

    function s() {
        var e = !1,
            t = [C.AB_PREVIEW, C.DISABLE];
        t.push(C.EDITOR);
        for (var n = 0; n < t.length; n++)
            if ("true" === R.getQueryParamValue(t[n])) {
                b.warn("Directive / Not activating because " + t[n] + " is set."), e = !0;
                break
            }
        w.dispatch(I.LOAD_DIRECTIVE, {
            disabled: e
        })
    }

    function u() {
        w.dispatch(I.LOAD_DIRECTIVE, {
            isPreview: !1
        })
    }

    function c() {
        var e = R.getQueryParamValue(C.LEGACY_PREVIEW);
        e && b.log("Directive / Is legacy preview mode"), w.dispatch(I.LOAD_DIRECTIVE, {
            isLegacyPreview: !!e
        })
    }

    function l() {
        w.dispatch(I.LOAD_DIRECTIVE, {
            isEditor: !1
        })
    }

    function d() {
        w.dispatch(I.LOAD_DIRECTIVE, {
            isSlave: !1
        })
    }

    function f() {
        var e = N.getGlobal("optlyDesktop"),
            t = !(!e || E.isUndefined(e["p13nInner"]));
        t && b.log("Directive / Is running in desktop app editor"), w.dispatch(I.LOAD_DIRECTIVE, {
            isRunningInDesktopApp: t
        })
    }

    function g() {
        var e = "true" === R.getQueryParamValue(C.EDITOR_V2);
        e && b.log("Directive / Is running in editor"), w.dispatch(I.LOAD_DIRECTIVE, {
            isRunningInV2Editor: e
        })
    }

    function p() {
        var e = S.get(A.COOKIES.TOKEN) || null,
            t = R.getQueryParamValue(C.TOKEN) || e;
        w.dispatch(I.LOAD_DIRECTIVE, {
            projectToken: t
        })
    }

    function h() {
        var e = S.get(A.COOKIES.PREVIEW),
            t = [],
            n = R.getQueryParamValue(C.FORCE_AUDIENCES);
        if (n) t = S.safeDecodeURIComponent(n).split(",");
        else if (e) try {
            var i = O.parse(e);
            t = i.forceAudienceIds
        } catch (t) {
            var r = new D("Failed to parse previewCookie in registerForceAudienceIds: " + e),
                a = {
                    originalMessage: t.message,
                    userError: !0
                };
            y.emitError(r, a)
        }
        t.length && (b.log("Directive / Force Audience IDs:", t), w.dispatch(I.LOAD_DIRECTIVE, {
            forceAudienceIds: t
        }))
    }

    function _() {
        var e = S.get(A.COOKIES.PREVIEW),
            t = [],
            n = R.getQueryParamValue(C.FORCE_VARIATIONS);
        if (n) t = S.safeDecodeURIComponent(n).split(",");
        else if (e) try {
            var i = O.parse(e);
            t = i.forceVariationIds
        } catch (t) {
            var r = new D("Failed to parse previewCookie in registerForceVariationIds: " + e),
                a = {
                    originalMessage: t.message,
                    userError: !0
                };
            y.emitError(r, a)
        }
        t.length && (b.log("Directive / Force Variation IDs:", t), w.dispatch(I.LOAD_DIRECTIVE, {
            forceVariationIds: t
        }))
    }

    function v() {
        var e = R.getQueryParamValue(C.FORCE_TRACKING);
        e && w.dispatch(I.LOAD_DIRECTIVE, {
            forceTracking: e
        })
    }

    function m() {
        var e = "OFF",
            t = R.getQueryParamValue("optimizely_log");
        if (t) {
            var n = t.split(":");
            "" !== n[0] && (e = String(n[0]).toUpperCase()), "undefined" != typeof n[1] && b.setLogMatch(n[1])
        }
        b.setLogLevel(e)
    }
    var E = n(2),
        I = n(7),
        y = n(86),
        S = n(76),
        T = n(77).create,
        A = n(25),
        w = n(9),
        b = n(23),
        D = t.JSONParseError = T("JSONParseError"),
        R = n(119),
        O = n(26),
        N = n(41),
        C = {
            AB_PREVIEW: "optimizely_show_preview",
            DISABLE: "optimizely_disable",
            EDITOR: "optimizely_editor",
            EDITOR_V2: "optimizely_p13n",
            FORCE_AUDIENCES: "optimizely_x_audiences",
            FORCE_VARIATIONS: "optimizely_x",
            LEGACY_PREVIEW: "optimizely_show_preview",
            OPT_OUT: "optimizely_opt_out",
            PREVIEW_LAYER_IDS: "optimizely_preview_layer_ids",
            TOKEN: "optimizely_token",
            FORCE_TRACKING: "optimizely_force_tracking"
        };
    t.populateDirectiveData = function() {
        m(), a(), i(), r(), o(), s(), l(), u(), c(), d(), f(), g(), p(), h(), _(), v()
    };
    var P = 31536e3;
    t.setOptOut = function(e) {
        e ? (b.warn("Directive / Opting out"), S.set(A.COOKIES.OPT_OUT, "true", {
            maxAge: 10 * P
        }, !0)) : S.remove(A.COOKIES.OPT_OUT), w.dispatch(I.LOAD_DIRECTIVE, {
            shouldOptOut: e
        })
    }
}), (function(e, t, n) {
    var i = n(120),
        r = n(41);
    t.getLanguage = function() {
        return r.getNavigatorLanguage()
    }, t.getQueryParams = i.getQueryParams, t.getQueryParamValue = i.getQueryParamValue, t.getUrl = function() {
        return r.getHref()
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(41);
    t.getQueryParams = function() {
        var e = r.getLocationSearch() || "";
        if (0 === e.indexOf("?") && (e = e.substring(1)), 0 === e.length) return [];
        for (var t = e.split("&"), n = [], i = 0; i < t.length; i++) {
            var a = "",
                o = "",
                s = t[i].split("=");
            s.length > 0 && (a = s[0]), s.length > 1 && (o = s[1]), n.push([a, o])
        }
        return n
    }, t.getQueryParamValue = function(e) {
        for (var n = t.getQueryParams(), i = 0; i < n.length; i++)
            if (n[i][0] === e) return n[i][1]
    }, t.queryStringFromMap = function(e) {
        return i.map(e, (function(e, t) {
            return t + "=" + e
        })).join("&")
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(77).BaseError,
        a = n(24),
        o = n(16),
        s = n(81),
        u = n(23),
        c = n(41),
        l = n(91),
        d = o.get("stores/client_metadata"),
        f = o.get("stores/global"),
        g = "https://errors.client.optimizely.com";
    t.handleError = function(e, t) {
        function n() {
            return l.request({
                url: g + "/log",
                method: "POST",
                data: _,
                contentType: "application/json"
            }).then((function(e) {
                u.log("Error Monitor / Logged error with response: ", e)
            }), (function(e) {
                u.error("Failed to log error, response was: ", e)
            }))
        }
        var o = e.name || "Error",
            p = e.message || "",
            h = e.stack || null;
        e instanceof r && (p instanceof Error ? (p = p.message, h = e.message.stack) : h = null);
        var _ = {
                timestamp: a.now(),
                clientEngine: d.getClientName(),
                clientVersion: d.getClientVersion(),
                accountId: f.getAccountId(),
                projectId: f.getProjectId(),
                errorClass: o,
                message: p,
                stacktrace: h
            },
            v = i.map(f.getExperimental(), (function(e, t) {
                return {
                    key: "exp_" + t,
                    value: String(e)
                }
            }));
        t && i.forEach(t, (function(e, t) {
            i.isObject(e) || v.push({
                key: t,
                value: String(e)
            })
        }), []), i.isEmpty(v) || (_.metadata = v), u.error("Logging error", _), s.isLoaded() ? n() : c.addEventListener("load", n)
    }
}), (function(e, t, n) {
    var i = n(2);
    t.create = function(e, t, n, r) {
        var a = i.extend({
            category: "other"
        }, r, {
            id: e,
            apiName: t,
            eventType: n
        });
        return a
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(7),
        a = n(16),
        o = n(25),
        s = n(87),
        u = n(9);
    t.registerApiModule = function(e, t) {
        i.isArray(t) && (t = a.evaluate(t)), u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.apiModules,
            name: e,
            plugin: t
        })
    }, t.registerDependency = function(e, t) {
        var n = a.get(e);
        n || a.register(e, t)
    }, t.registerVisitorProfileProvider = function(e) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.visitorProfileProviders,
            name: e.provides,
            plugin: e
        })
    }, t.registerViewProvider = function(e) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.viewProviders,
            name: e.provides,
            plugin: e
        })
    }, t.registerAudienceMatcher = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.audienceMatchers,
            name: e,
            plugin: t
        })
    }, t.registerViewMatcher = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.viewMatchers,
            name: e,
            plugin: t
        })
    }, t.registerAnalyticsTracker = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.analyticsTrackers,
            name: e,
            plugin: t
        })
    }, t.registerViewTagLocator = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.viewTagLocators,
            name: e,
            plugin: t
        })
    }, t.registerAudiencePlugin = function(e) {
        e.dependencies && i.each(e.dependencies, (function(e, n) {
            t.registerDependency(n, e)
        }));
        var n, r = "vendor." + e.vendor;
        n = i.isString(e.provider) ? a.get(e.provider)(e.vendor) : i.isFunction(e.provider) ? e.provider(e.vendor) : i.cloneDeep(e.provider), t.registerVisitorProfileProvider(i.extend(n, {
            provides: r
        }));
        var o;
        o = i.isString(e.matcher) ? a.get(e.matcher) : e.matcher;
        var s = {
            fieldsNeeded: [r],
            match: function(e, t) {
                return o(e[r], t)
            }
        };
        t.registerAudienceMatcher(r, s)
    }, t.registerWidget = function(e) {
        i.isArray(e) && (e = a.evaluate(e));
        var t = s.on({
                filter: {
                    type: "showWidget",
                    name: e.widgetId
                },
                handler: e.showFn
            }),
            n = s.on({
                filter: {
                    type: "hideWidget",
                    name: e.widgetId
                },
                handler: e.hideFn
            });
        return {
            showToken: t,
            hideToken: n
        }
    }, t.registerChangeApplier = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.changeAppliers,
            name: e,
            plugin: t
        })
    }, t.registerDecider = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.deciders,
            name: e,
            plugin: t
        })
    }, t.registerEventImplementation = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.eventImplementations,
            name: e,
            plugin: t
        })
    }, t.registerViewTrigger = function(e, t) {
        u.dispatch(r.REGISTER_PLUGIN, {
            type: o.PluginTypes.viewTriggers,
            name: e,
            plugin: t
        })
    }
}), (function(e, t, n) {
    function i(e, t) {
        r.forEach(e, (function(e) {
            if (e.eventType !== d.CUSTOM) {
                var n = h.getPlugin(l.PluginTypes.eventImplementations, e.eventType);
                n ? t ? n.attach(e) : n.detach(e) : g.warn("No implementation found for event type:", e.eventType, "needed for event:", e)
            }
        }))
    }
    var r = n(2),
        a = n(7),
        o = n(117),
        s = n(125),
        u = n(24),
        c = n(16),
        l = n(25),
        d = n(112),
        f = n(9),
        g = n(23),
        p = n(126),
        h = c.get("stores/plugins"),
        _ = c.get("stores/view"),
        v = c.get("stores/view_data"),
        m = c.get("stores/event_data");
    t.parseViewTags = function(e) {
        var n = t.evaluateViewTags(e);
        t.setParsedViewTags(e.id, n)
    }, t.updateAllViewTags = function() {
        var e = _.getActiveViewStates();
        r.each(e, (function(e) {
            var n = v.get(e.id);
            t.parseViewTags(n)
        }))
    }, t.evaluateViewTags = function(e) {
        if (!e.tags) return {};
        var t = r.reduce(e.tags, (function(e, t) {
            try {
                e[t.apiName] = p.getTagValue(t)
            } catch (e) {
                e instanceof p.Error ? g.warn("Page / Ignoring unparseable tag", t, e) : g.error(e)
            }
            return e
        }), {});
        return t
    }, t.createViewTicket = function() {
        var e = {};
        return r.each(h.getAllPlugins(l.PluginTypes.viewProviders), (function(t) {
            e[t.provides] = c.evaluate(t.getter)
        })), e
    }, t.registerViews = function(e) {
        f.dispatch(a.REGISTER_VIEWS, {
            views: e
        })
    }, t.activateViaAPI = function(e, n) {
        n && t.setUserSuppliedViewTags(e.id, n), t.activateMultiple([e], n)
    }, t.getViewsAndActivate = function(e) {
        var n = v.getAllViewsForActivationType(e);
        t.activateMultiple(n)
    }, t.activateMultiple = function(e, n) {
        var a = [];
        r.each(e, (function(e) {
            var r = _.getViewState(e.id),
                s = t.createViewTicket();
            if (r.isActive)
                if (e.deactivationEnabled) try {
                    t.hasValidStaticConditions(e, s) || t.deactivate(e)
                } catch (n) {
                    g.error("Page / Error evaluating whether to deactivate page ", t.description(e), n)
                } else g.log("Not activating Page, already active ", t.description(e));
                else {
                    try {
                        if (!t.hasValidStaticConditions(e, s)) return void g.log("Page / Failed to match page conditions for " + t.description(e), e.staticConditions)
                    } catch (n) {
                        return void g.error("Page / Error evaluating whether to activate page ", t.description(e), n)
                    }
                    a.push(e), t.setViewActiveState(e, !0), g.log("Activated Page", t.description(e)), o.emitViewActivated({
                        view: e,
                        metadata: n
                    });
                    var u = m.getByPageId(e.id);
                    i(u, !0)
                }
        })), r.isEmpty(a) || o.emitViewsActivated({
            views: a
        })
    }, t.deactivate = function(e) {
        var n = _.getViewState(e.id);
        if (!n.isActive) return void g.log("Not deactivating Page, already inactive ", t.description(e));
        t.setViewActiveState(e, !1), g.log("Deactivated Page", t.description(e)), o.emitPageDeactivated({
            page: e
        });
        var r = m.getByPageId(e.id);
        i(r, !1)
    }, t.setViewActiveState = function(e, t) {
        f.dispatch(a.SET_VIEW_ACTIVE_STATE, {
            view: e,
            timestamp: u.now(),
            isActive: t
        })
    }, t.setGlobalTags = function(e) {
        f.dispatch(a.SET_GLOBAL_TAGS, e)
    }, t.setParsedViewTags = function(e, t) {
        f.dispatch(a.UPDATE_PARSED_VIEW_METADATA, {
            pageId: e,
            metadata: t
        })
    }, t.setUserSuppliedViewTags = function(e, t) {
        f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA, {
            pageId: e,
            metadata: t
        })
    }, t.hasValidStaticConditions = function(e, t) {
        if (r.isEmpty(e.staticConditions)) return !0;
        var n = h.getAllPlugins(l.PluginTypes.viewMatchers);
        g.groupCollapsed("Page / Evaluating staticConditions:", e.staticConditions), g.debug("Matching to current value:", t);
        var i = s.evaluate(e.staticConditions, (function(e) {
            var i = e.type,
                r = n[i];
            if (!r) throw new Error("Page / No matcher found for type=" + i);
            return r.match(t, e)
        }));
        return g.groupEnd(), i
    }, t.description = function(e) {
        return '"' + e.name + '" (' + e.id + ")"
    }, t.shouldTriggerImmediately = function(e) {
        return e === l.ViewActivationTypes.DOMChanged || e === l.ViewActivationTypes.URLChanged || e === l.ViewActivationTypes.immediate || !e
    }, t.create = function(e, t) {
        var n = {
            id: e,
            apiName: t,
            category: "other"
        };
        return n
    }, t.createState = function(e) {
        var t = {
            id: e,
            isActive: !0,
            metadata: {},
            parsedMetadata: {},
            userSuppliedMetadata: {}
        };
        return t
    }
}), (function(e, t, n) {
    function i(e, t) {
        for (var n, i, r = 0; r < e.length; r++) {
            if (n = o(e[r], t), n === !1) return !1;
            s.isUndefined(n) && (i = !0)
        }
        if (!i) return !0
    }

    function r(e, t) {
        for (var n, i = !1, r = 0; r < e.length; r++) {
            if (n = o(e[r], t), n === !0) return !0;
            s.isUndefined(n) && (i = !0)
        }
        if (!i) return !1
    }

    function a(e, t) {
        if (1 !== e.length) return !1;
        var n = o(e[0], t);
        return s.isUndefined(n) ? void 0 : !n
    }

    function o(e, t) {
        var n;
        if (s.isArray(e)) {
            var i, r;
            e[0] in d ? (i = e[0], r = e.slice(1)) : (i = l.OR, r = e), c.groupCollapsed('Condition / Applying operator "' + i + '" with args', u.stringify(r));
            try {
                n = d[i](r, t), c.debug("Condition / Result:", n)
            } finally {
                c.groupEnd()
            }
            return n
        }
        return n = t(e), c.debug("Condition / Evaluated:", u.stringify(e), ":", n), n
    }
    var s = n(2),
        u = n(26),
        c = n(23),
        l = {
            AND: "and",
            OR: "or",
            NOT: "not"
        },
        d = {};
    d[l.AND] = i, d[l.OR] = r, d[l.NOT] = a, e.exports = {
        evaluate: o
    }
}), (function(e, t, n) {
    var i = n(25).PluginTypes,
        r = n(16),
        a = r.get("stores/plugins");
    t.getTagValue = function(e) {
        var n = a.getPlugin(i.viewTagLocators, e.locatorType);
        if (!n) throw new t.Error("No locator registered for tag locatorType: " + e.locatorType);
        return n(e)
    }, t.enums = n(127), t.Error = n(128).Error
}), (function(e, t) {
    t.locatorType = {
        CSS_SELECTOR: "css_selector",
        JAVASCRIPT: "javascript",
        URL_REGEX: "url_regex"
    }, t.valueType = {
        STRING: "string",
        NUMBER: "number",
        CURRENCY: "currency"
    }, t.nodeNames = {
        INPUT: "INPUT",
        SELECT: "SELECT"
    }
}), (function(e, t, n) {
    var i = n(77).create;
    t.Error = i("TagError")
}), (function(e, t) {}), (function(e, t, n) {
    var i = n(16);
    i.register("env/jquery", n(131))
}), (function(e, t, n) {
    var i, r = n(41);
    try {
        i = $
    } catch (e) {}
    var a = r.getGlobal("$");
    i && i !== a ? e.exports = i : e.exports = a
}), (function(e, t, n) {
    var i = n(23),
        r = n(41),
        a = "optimizelyDataApi";
    t.registerFunction = function(e, t) {
        var n = r.getGlobal(a);
        n || (n = {}, r.setGlobal(a, n)), n[e] || (n[e] = t)
    }, t.unregisterFunction = function(e) {
        var t = r.getGlobal(a);
        t && t[e] && (t[e] = function() {
            i.log('Ignoring attempt to call "' + a + "." + e + '" which has been unregistered.')
        })
    }, t.getFunction = function(e) {
        return r.getGlobal(a)[e]
    }
}), (function(e, t, n) {
    var i = n(81),
        r = n(23),
        a = n(91);
    t.addScriptAsync = function(e, t) {
        var n = i.querySelector("head"),
            a = i.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = e, t && (a.onload = t), n.insertBefore(a, n.firstChild), r.debug("Asynchronously requesting " + e)
    }, t.addScriptSync = function(e, n) {
        try {
            var o = "optimizely_synchronous_script_" + Math.floor(1e5 * Math.random());
            if (e.indexOf('"') !== -1) return void r.error("Blocked attempt to load unsafe script: " + e);
            i.write('<script id="' + o + '" src="' + e + '"></script>');
            var s = i.querySelector("#" + o);
            if (!s) throw new Error("Document.write failed to append script");
            s.onload = n, s.onerror = function(i) {
                r.warn("Failed to load script (" + e + ") synchronously:", i), t.addScriptAsync(e, n)
            }
        } catch (i) {
            r.debug("Document.write failed for " + e + ": " + i.message);
            var u = function(e) {
                var t = new Function(e.responseText);
                t(), n && n()
            };
            return a.request({
                url: e,
                async: !1,
                contentType: "text/plain",
                success: u
            })["catch"]((function(i) {
                r.error("Failed to load " + e + " via synchronous XHR: " + i.message), t.addScriptAsync(e, n)
            }))
        }
    }
}), (function(e, t, n) {
    function i() {
        var e = null;
        T.isNumber(e) && 0 === fe.getCount() ? (Y.log("Activating after delay of", e, "ms because no Experiments are running"), z.dispatch(D.SET_RUM_DATA, {
            data: {
                activateDfd: !0
            }
        }), re.setTimeout(O.emitActivateEvent, e)) : O.emitActivateEvent()
    }

    function r(e) {
        Te.handleError(e.data.error, e.data.metadata)
    }

    function a() {
        T.isArray(window.optimizely) && (window.optimizely = T.filter(window.optimizely, (function(e) {
            var t = !0;
            return !Se.push(e, t)
        })))
    }

    function o() {
        var e = n(85),
            i = !!ie.getCurrentId(),
            r = !!i && ie.hasSomeData();
        i ? r ? Y.log("xd / Existing visitor; has data on this origin") : Y.log("xd / Existing visitor; new to this origin") : Y.log("xd / New visitor");
        var a = le.getAccountId(),
            o = "https://a4621041136.cdn.optimizely.com".replace("__SUBDOMAIN__", "a" + a + "."),
            u = "/client_storage/a" + a + ".html";
        e.subscribe((function(e, t) {
            ie.checkKeyForVisitorId(e) && K.setItem(e, t)
        }));
        var c = e.fetchAll().then((function(t) {
            var n = ye.getCanonicalOrigins();
            if (n) {
                var i = e.getXDomainUserId(t, n);
                i && (Y.log("Syncing cross-origin visitor randomId:", i), ie.maybePersistVisitorId({
                    randomId: i
                }))
            }
            return ie.deleteOldForeignData(), t
        })).then(t.persistItemsWithId).then((function(e) {
            if (ie.loadForeignData(), i && !r) {
                var t = !T.isEmpty(e);
                Y.debug("xd / Loaded foreign data? ", t), s(t)
            }
            Y.log("Loaded visitor data from foreign origins"), O.emitOriginsSyncedEvent()
        }), (function(e) {
            throw i && !r && (Y.debug("xd / Failed to load foreign data:", e), s(!1, e)), e
        }));
        return $.all([e.load(o, u)["catch"]((function(e) {
            throw Y.debug("xd / Failed to load iframe:", e), i && !r && s(!1, e), e
        })), c["catch"]((function(e) {
            Y.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):", e.message), Y.debug("xd / Enqueuing sync to happen after visitorId set."), z.dispatch(D.ADD_CLEANUP_FN, {
                lifecycle: M.Lifecycle.postVisitorProfileLoad,
                cleanupFn: O.emitOriginsSyncedEvent
            })
        }))])
    }

    function s(e, t) {
        z.dispatch(D.SET_RUM_DATA, {
            data: {
                extras: {
                    xdAttempt: e,
                    xdError: t ? t.toString() : void 0
                }
            }
        })
    }

    function u(e) {
        var t = _e.getVisitorProfile();
        return ie.populateEagerVisitorData(e, t)
    }

    function c(e, t, n) {
        e = e || [];
        var i = he.getAllPlugins(M.PluginTypes.visitorProfileProviders),
            r = le.getGlobalHoldbackThreshold(),
            a = _e.getVisitorProfile();
        ie.populateLazyVisitorData(i, a);
        var o = Ee.getBucketingId();
        if (!o) throw new Error("bucketingId not set");
        var s, u = _e.getVisitorProfile();
        if (t) {
            var c = Ie.getVariationIdMap();
            s = c[t.id]
        }
        var l = {
            bucketingId: o,
            visitorProfile: u,
            audiences: e,
            globalHoldback: r,
            preferredVariationMap: s,
            layer: t
        };
        return t && n && k.isPageIdRelevant(t) ? T.map(n, (function(e) {
            return k.createTicket(T.extend({}, l, {
                pageId: e
            }))
        })) : [k.createTicket(l)]
    }

    function l(e) {
        return {
            bucketingId: Ee.getBucketingId(),
            preferredLayerId: Ie.getPreferredLayerMap()[e.id]
        }
    }

    function d(e) {
        var n = fe.getAllByPageIds(e),
            i = ce.getForceVariationIds(),
            r = ce.getForceAudienceIds(),
            a = !T.isEmpty(i);
        a && Y.log("Force variations are in use. Disabling mutual exclusivity.");
        var o = a ? {
            individual: n
        } : T.reduce(n, (function(e, t) {
            return t.groupId ? e.groups[t.groupId] || (e.groups[t.groupId] = de.get(t.groupId)) : e.individual.push(t), e
        }), {
            groups: {},
            individual: []
        });
        Y.log("Deciding Campaigns/Experiments for Page(s)", e);
        var s = T.map(o.groups, j.description).join(", ");
        Y.log("Groups:", s);
        var u = T.map(o.individual, H.description).join(", ");
        Y.log("Campaigns/Experiments not in Groups (by Campaign id):", u);
        var c = T.map(o.groups, T.partial(f, i, r, e)) || [],
            l = T.map(o.individual, (function(n) {
                var a = T.filter(n.pageIds, T.partial(T.includes, e));
                return t.decideAndExecuteLayerASAP(i, r, a, n)
            })),
            d = c.concat(l);
        return $.all(d).then((function(t) {
            var n = T.filter(t, (function(e) {
                return !!e
            }));
            return Y.log("All Campaigns/Experiments for Page(s) (by Campaign id)", e, "resolved:", T.map(n, H.description).join(", ")), n
        }))
    }

    function f(e, n, i, r) {
        try {
            var a = l(r),
                o = k.decideGroup(r, a);
            if (o.reason) return Y.debug("Not activating Group", j.description(r), "; reason:", o.reason), $.resolve();
            var s = fe.get(o.layerId);
            if (!s) return Y.debug("Visitor was bucketed into a Campaign (" + o.layerId + ") which is not in this snippet"), $.resolve();
            var u = T.filter(s.pageIds, T.partial(T.includes, i));
            return T.isEmpty(u) ? (Y.debug("Not activating Group", j.description(r), "; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"), $.resolve()) : t.decideAndExecuteLayerASAP(e, n, u, s)
        } catch (e) {
            return Y.error("Error getting decision for Group", j.description(r), "; ", e), $.reject(e)
        }
    }

    function g(e, t, n, i) {
        return new $(function(r, a) {
            try {
                h(i, e, t, n, (function(a) {
                    T.each(a, (function(r) {
                        var a = r.pageId ? [r.pageId] : n;
                        Y.debug("Deciding layer: ", i, "with decisionTicket: ", r, "and actionViewIds: ", a), p(i, e, t, a, r)
                    })), r(i)
                }))
            } catch (e) {
                Y.error("Error getting decision for Campaign: " + H.description(i), e), a(e)
            }
        })
    }

    function p(e, t, n, i, r) {
        var a = H.description(e);
        Y.log("Activating Campaign", a, "on Page(s)", i), n.length && (Y.log("Applying force audienceIds:", n, "to Campaign", a), r = T.cloneDeep(r), r.audienceIds = n);
        var o = E(e, r, t),
            s = !(!t.length && !n.length),
            u = y(e, o, s) || [];
        S(u, i);
        if (Y.warn("Not preparing actions because LIVE_CHANGES is false"), T.forEach(i, (function() {
                R.trackDecisionEvent(o, r)
            })), O.emitLayerDecided({
                layer: e,
                decisionTicket: r,
                decision: o
            }), o.error) throw o.error;
        return k.isInCohort(o) ? void Y.warn("Not executing actions because LIVE_CHANGES is false") : void Y.log("Not activating Campaign: " + H.description(e) + "; not in the cohort because:", o.reason)
    }

    function h(e, t, n, i, r) {
        if (t.length || n.length) return void r(c([], void 0, i));
        var a = H.relatedAudienceIds(e),
            o = T.reduce(a, (function(e, t) {
                var n = oe.get(t);
                return n && e.push(n), e
            }), []);
        m(o, H.getActivationTimeout(e), (function() {
            var t = c(o, e, i);
            T.map(t, (function(t) {
                _(t, o, e)
            })), r(t)
        }))
    }

    function _(e, t, n) {
        var i = T.map(e.audienceIds, T.bind(oe.get, oe)),
            r = T.filter(t, (function(t) {
                return !T.includes(e.audienceIds, t.id)
            }));
        Y.log("When deciding Campaign", H.description(n), "visitor is in audiences:", v(i), "and not in audiences:", v(r))
    }

    function v(e) {
        var t = [];
        return T.each(e, (function(e) {
            t.push(e.name, e)
        })), t
    }

    function m(e, t, n) {
        var i = he.getAllPlugins(M.PluginTypes.audienceMatchers),
            r = T.reduce(e, (function(e, t) {
                return T.extend(e, N.requiredAudienceFieldsForConditions(t.conditions, i))
            }), {}),
            a = T.reduce(r, (function(e, t) {
                if (T.isUndefined(ie.getAttribute(t))) {
                    var n = ie.getPendingAttributeValue(t);
                    T.isUndefined(n) || e.push(n)
                }
                return e
            }), []);
        if (0 === a.length) return n();
        var o = [].concat(e),
            s = J.firstToResolve(T.map(a, (function(e) {
                return $.resolve(e).then((function() {
                    var e = _e.getVisitorProfile();
                    if (o = T.filter(o, (function(t) {
                            return T.isUndefined(N.isInAudience(e, t, i))
                        })), !T.isEmpty(o)) throw new Error("At least one audience is still pending")
                }))
            })));
        $.race([s, new $(function(e, n) {
            re.setTimeout(n, t)
        })]).then((function() {
            Y.log("Activating Campaign after pending Audiences resolved", e), n()
        }), (function() {
            Y.log("Activating Campaign after timeout on Audiences", e), n()
        }))
    }

    function E(e, t, n) {
        var i, r = H.description(e);
        return i = n.length ? k.getDummyLayerDecision(e, n) : k.decideLayer(e, t), Y.log("Recording decision for Campaign", r, t, "->", i), H.recordLayerDecision(e.id, t, i), i.variationId && i.experimentId && ie.updateVariationIdMap(e.id, i.experimentId, i.variationId), e.groupId && ie.updatePreferredLayerMap(e.groupId, e.id), i
    }

    function I(e) {
        var t = ue.getCleanupFns(e);
        if (t.length > 0) {
            for (; t.length > 0;) t.shift()();
            z.dispatch(D.CLEAR_CLEANUP_FN, {
                lifecycle: e
            })
        }
    }

    function y(e, t, n) {
        var i = H.description(e),
            r = "NOT applying changes for Campaign";
        if (!n && le.isGlobalHoldback()) return Y.log(r, i, "(visitor is in global holdback)"), null;
        if (t.isLayerHoldback) return Y.log(r, i, "(visitor is in layer holdback)"), null;
        if (!t.experimentId || !t.variationId) return Y.log(r, i, "(visitor is not eligible for any Experiments)"), null;
        var a = [].concat(se.getLayerActions(t.layerId) || [], se.getExperimentActions(t.experimentId) || [], se.getExperimentVariationActions(t.experimentId, t.variationId) || []);
        return Y.log("Got Actions for Campaign:", i, a), a
    }

    function S(e, t) {
        return T.filter(e, (function(e) {
            return T.isUndefined(e.pageId) || T.includes(t, e.pageId)
        }))
    }
    var T = n(2),
        A = n(77).create,
        w = t.ActivationCodeError = A("ActivationCodeError"),
        b = t.ProjectJSError = A("ProjectJSError"),
        D = (n(135), n(7)),
        R = n(110),
        O = n(117),
        N = n(139),
        C = n(76),
        P = n(86),
        L = n(109),
        V = n(24),
        k = n(140),
        x = n(16),
        F = n(81),
        M = n(25),
        U = n(87),
        G = n(111),
        B = n(145),
        z = n(9),
        j = n(144),
        H = n(113),
        K = n(82).LocalStorage,
        Y = n(23),
        q = n(146),
        X = n(84),
        W = n(123),
        Q = n(88),
        $ = n(12).Promise,
        J = n(147),
        Z = n(114),
        ee = n(116),
        te = n(137),
        ne = n(124),
        ie = n(75),
        re = n(41),
        x = n(16),
        ae = x.get("stores/session"),
        oe = x.get("stores/audience_data"),
        se = x.get("stores/action_data"),
        ue = x.get("stores/cleanup"),
        ce = x.get("stores/directive"),
        le = x.get("stores/global"),
        de = x.get("stores/group_data"),
        fe = x.get("stores/layer_data"),
        ge = x.get("stores/layer"),
        pe = x.get("stores/pending_events"),
        he = x.get("stores/plugins"),
        _e = x.get("stores/visitor"),
        ve = x.get("stores/view_data"),
        me = x.get("stores/view"),
        Ee = x.get("stores/visitor_id"),
        Ie = x.get("stores/visitor_bucketing"),
        ye = x.get("stores/xdomain"),
        Se = n(93),
        Te = n(121),
        Ae = n(1),
        we = 1e3,
        be = !1,
        De = !1,
        Re = 1e3,
        Oe = t;
    t.initialize = function(e) {
        var n = e.clientData;
        if (L.normalizeClientData(e.clientData), U.on({
                filter: {
                    type: "error"
                },
                handler: r
            }), z.dispatch(D.DATA_LOADED, {
                data: n
            }), Y.log("Initialized with DATA:", n), a(), ce.isDisabled() || ce.shouldOptOut()) return void Y.log("Controller / Is disabled");
        Ae.queueBeacons(), F.isReady() ? z.dispatch(D.SET_DOMCONTENTLOADED) : F.addReadyHandler((function() {
            z.dispatch(D.SET_DOMCONTENTLOADED)
        }));
        var o = !1,
            s = C.get(M.COOKIES.REDIRECT);
        if (s) {
            var u = s.match(/^(\d+)\|(.*)/);
            if (u) {
                Y.debug("Found legacy redirect data:", s);
                var c = u[1],
                    l = u[2];
                z.dispatch(D.INITIALIZE_STATE, {
                    effectiveVariationId: c,
                    effectiveReferrer: l
                }), o = !0
            }
        }
        X.time("projectJS");
        var d = le.getProjectJS();
        if (T.isFunction(d)) try {
            B.apply(d)
        } catch (e) {
            Y.error("Error while executing projectJS: ", e), P.emitError(new b(e))
        }
        X.timeEnd("projectJS"), T.each(e.plugins || [], (function(e) {
            try {
                e(W)
            } catch (e) {
                P.emitInternalError(e)
            }
        })), T.each(le.getPlugins() || [], (function(e) {
            try {
                B.apply(e, [W])
            } catch (e) {
                P.emitError(e)
            }
        })), o || Z.load();
        var f = U.on({
            filter: {
                type: "lifecycle",
                name: "activated"
            },
            handler: function() {
                _e.observe(ie.persistVisitorProfile), ge.observe(ie.persistLayerStates), ae.observe(ie.persistSessionState), pe.observe(q.persistPendingEvents), Ie.observe(ie.persistVisitorBucketingStore), U.off(f)
            }
        });
        U.on({
            filter: {
                type: "lifecycle",
                name: "viewsActivated"
            },
            handler: t.onViewsActivated
        }), U.on({
            filter: {
                type: "lifecycle",
                name: "pageDeactivated"
            },
            handler: t.onPageDeactivated
        }), t.initializeApi();
        var g = q.getPendingEvents();
        if (g && (z.dispatch(D.LOAD_PENDING_EVENTS, {
                events: g
            }), q.retryPendingEvents(g)), U.on({
                filter: {
                    type: "lifecycle",
                    name: "activate"
                },
                handler: t.activate
            }), O.emitInitializedEvent(), !ce.shouldActivate()) return $.resolve();
        var p = [];
        if (ye.isDisabled()) i();
        else {
            var h = t.initializeXDomainStorage();
            p.push(h);
            var _ = Boolean(ye.getCanonicalOrigins());
            if (_) {
                var v = ee.makeTimeoutPromise(Re);
                $.race([h, v])["catch"]((function(e) {
                    Y.error("Failed to initialize xDomain storage: ", e)
                })).then(i)["catch"](Te.handleError)
            } else i()
        }
        return $.all(p)
    }, t.activate = function() {
        try {
            var e = [];
            Y.log("Activated client"), T.forEach(me.getActiveViewStates(), (function(e) {
                ne.deactivate(ve.get(e.id))
            })), I(M.Lifecycle.preActivate);
            var t = V.now();
            z.dispatch(D.ACTIVATE, {
                activationId: String(t),
                activationTimestamp: t
            });
            var n = ve.getAll();
            ne.registerViews(n), ie.setId(ie.getOrGenerateId()), e.push(R.trackPostRedirectDecisionEvent()), z.dispatch(D.MERGE_VARIATION_ID_MAP, {
                variationIdMap: ie.getVariationIdMap()
            }), z.dispatch(D.MERGE_PREFERRED_LAYER_MAP, {
                preferredLayerMap: ie.getPreferredLayerMap()
            }), I(M.Lifecycle.postVisitorProfileLoad), e.push(u(he.getAllPlugins(M.PluginTypes.visitorProfileProviders)).then((function() {
                Y.log("Populated visitor profile")
            })));
            var i = c(),
                r = k.decideGlobal(i);
            Y.log("Made global decision", i, "->", r), z.dispatch(D.RECORD_GLOBAL_DECISION, r);
            var a = R.trackClientActivation();
            a ? Y.log("Tracked activation event", a) : Y.log("Not tracking activation event");
            var o = Oe.setUpViewActivation(n);
            return be ? ne.activateMultiple(o) : T.each(o, (function(e) {
                ne.activateMultiple([e])
            })), I(M.Lifecycle.postViewsActivated), I(M.Lifecycle.postActivate), O.emitActivatedEvent(), $.all(e).then((function() {
                U.emit({
                    type: G.TYPES.LIFECYCLE,
                    name: "activateDeferredDone"
                }), Y.log("All immediate effects of activation resolved")
            }), P.emitError)
        } catch (e) {
            return P.emitError(e), $.reject(e)
        }
    }, Oe.setUpViewActivation = function(e) {
        var t = [];
        return T.each(e, (function(e) {
            ne.shouldTriggerImmediately(e.activationType) ? t.push(e) : e.activationType === M.ViewActivationTypes.callback ? (Y.debug("Setting up conditional activation for Page", ne.description(e)), Oe.activateViewOnCallback(e)) : e.activationType === M.ViewActivationTypes.polling ? (Y.debug("Setting up polling activation for Page", ne.description(e)), Q.pollFor(T.partial(B.apply, e.activationCode), null, T.partial(te.isTimedOut, V.now())).then((function() {
                ne.activateMultiple([e])
            }))["catch"]((function(t) {
                Y.warn("Failed to activate view ", e, t)
            }))) : e.activationType !== M.ViewActivationTypes.manual && P.emitError(new Error("Unknown view activationType: " + e.activationType))
        })), t
    }, Oe.activateViewOnCallback = function(e) {
        var t = function(t) {
                var n = T.extend({}, t, {
                    pageName: e.apiName,
                    type: "page"
                });
                Se.push(n)
            },
            n = {
                pageId: e.id
            };
        Object.defineProperty(n, "isActive", {
            get: function() {
                return me.isViewActive(e.id)
            }
        });
        try {
            B.apply(e.activationCode, [t, n])
        } catch (t) {
            var i = new w("(" + t.toString() + ") in activationCode for " + ne.description(e));
            P.emitError(i, {
                originalError: t,
                userError: !0
            })
        }
    }, t.onViewsActivated = function(e) {
        var t, n = e.data.views,
            i = T.map(n, "id");
        try {
            if (!Ee.getBucketingId()) throw new Error("View activated with no visitorId set");
            var r = d(i)["catch"](P.emitError);
            return t = $.all(T.map(n, (function(e) {
                var t = function() {
                    ne.parseViewTags(e);
                    var t = R.trackViewActivation(e);
                    t ? Y.log("Tracked activation for Page", ne.description(e), t) : Y.log("Not Tracking activation for Page", ne.description(e))
                };
                return F.isReady() ? $.resolve(t()) : Q.pollFor(F.isReady, we).then(t)
            }))), $.all([r, t])
        } catch (e) {
            P.emitError(e)
        }
    }, t.onPageDeactivated = function(e) {
        var t = e.data.page,
            n = se.getAllActionIdsByPageId(t.id);
        T.each(n, (function(e) {
            var n = se.getActionState(e);
            n && (T.each(n, (function(e, n) {
                if (e.cancel) try {
                    e.cancel(), Y.debug("Controller / Canceled change", n, "observation due to deactivation of page:", t)
                } catch (e) {
                    Y.error("Controller / Error canceling change", n, "observation upon deactivation of page.", e)
                }
                if (t.undoOnDeactivation && e.undo) try {
                    e.undo(), Y.debug("Controller / Undid change", n, "due to deactivation of page:", t)
                } catch (e) {
                    Y.error("Controller / Error undoing change upon deactivation of page.", e)
                }
            })), z.dispatch(D.REMOVE_ACTION_STATE, {
                actionId: e
            }), Y.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:", t, e))
        }))
    }, t.initializeApi = function() {
        var e = {
            push: Se.push
        };
        De || (e.get = Se.get);
        var t = window.optimizely;
        T.isArray(t) && T.each(t, (function(t) {
            e.push(t)
        })), e.data = {
            note: "Obsolete, use optimizely.get('data') instead"
        }, e.state = {}, window.optimizely = e
    }, t.persistItemsWithId = function(e) {
        return T.each(e, (function(e, t) {
            ie.checkKeyForVisitorId(t) && K.setItem(t, e)
        })), e
    }, t.initializeXDomainStorage = o, t.decideAndExecuteLayerASAP = g
}), (function(e, t, n) {
    function i(e, t, n) {
        var i = v.getActionState(t.id);
        if (!i) return void g.warn("Action / Attempted to prepare change for inactive action: ", t);
        var r = v.getChangeApplier(e.id, t.id);
        if (!a.isUndefined(r)) return void g.warn("Action / Attempted to prepare a change which is already being applied: ", e);
        var s = {
            changeId: e.id,
            actionId: t.id,
            changeApplier: I.create(e, t, n)
        };
        f.dispatch(o.SET_CHANGE_APPLIER, s)
    }

    function r(e, t, n, o) {
        if (a.includes(o, t)) return void g.error("Change with id " + t + " has circular dependencies: " + o.concat(t));
        if (!e[t]) {
            var c = m.getChange(t);
            if (!c) {
                var d = "Change with id " + t + " is absent";
                return o.length && (d += " but listed as a dependency for " + o[o.length - 1]), void g.warn(d)
            }
            e[t] = new p(function(d) {
                var f = a.map(c.dependencies || [], (function(i) {
                    return r(e, i, n, o.concat([t]))
                }));
                if (c.src) {
                    var _ = "change_" + c.src,
                        E = u.makeAsyncRequest(_, (function() {
                            return h.addScriptAsync("https://cdn.optimizely.com/public/4621041136/data" + c.src, (function() {
                                u.resolveRequest(_)
                            }))
                        })).then((function() {
                            var e = m.getChange(c.id);
                            e || s.emitError(new S("Failed to load async change from src: " + c.src)), i(e, n, l.now())
                        }));
                    f.push(E)
                }
                p.all(f).then((function() {
                    var e = l.now(),
                        i = v.getChangeApplier(t, n.id);
                    return i ? (g.debug("Action / Applying change:", c), i.apply().then((function(t) {
                        t ? g.log(t) : g.debug("Action / Applied change for the first time in " + (l.now() - e) + "ms:", c), d()
                    }))) : (g.debug("Action / Not applying change ", t, " - No changeApplier found."), void d())
                }))["catch"]((function(e) {
                    g.error("Action / Failed to apply change:", c, e), d()
                }))
            })
        }
        return e[t]
    }
    var a = n(2),
        o = n(7),
        s = n(86),
        u = n(6),
        c = n(77).create,
        l = n(24),
        d = n(16),
        f = n(9),
        g = n(23),
        p = n(12).Promise,
        h = n(133),
        _ = d.get("stores/global"),
        v = d.get("stores/action_data"),
        m = d.get("stores/change_data"),
        E = d.get("stores/session"),
        I = n(136),
        y = n(137);
    y.initialize();
    var S = c("ActionError");
    t.prepareAction = function(e) {
        g.debug("Action / Preparing:", e), f.dispatch(o.ACTION_EXECUTED, {
            actionId: e.id,
            sessionId: E.getSessionId(),
            layerId: e.layerId,
            pageId: e.pageId,
            timestamp: l.now(),
            activationId: _.getActivationId()
        });
        var t = l.now();
        a.forEach(e.changeSet, (function(n) {
            var r = a.isObject(n) ? n.id : n,
                s = m.getChange(r);
            s || (f.dispatch(o.ADD_CHANGE, n), s = m.getChange(n.id)), s.src || i(s, e, t)
        }))
    }, t.executePreparedAction = function(e) {
        g.debug("Action / Executing:", e);
        var t = {},
            n = a.map(e.changeSet, (function(n) {
                var i = a.isObject(n) ? n.id : n;
                return r(t, i, e, [])
            }));
        return p.all(n).then((function() {
            g.debug("changes for action id=" + e.id + " applied")
        }))
    }
}), (function(e, t, n) {
    var i = n(13).Promise,
        r = n(24),
        a = n(16),
        o = a.get("stores/plugins"),
        s = n(25),
        u = n(23);
    t.create = function(e, t, n) {
        var a = {
            identifier: e.id,
            action: t,
            startTime: n || r.now()
        };
        try {
            var c = o.getPlugin(s.PluginTypes.changeAppliers, e.type);
            if (!c) throw new Error("Unrecognized change type " + e.type);
            return new c(e, a)
        } catch (e) {
            u.error("Change applier was never properly constructed:", e);
            var l = {
                apply: function() {
                    return i.reject(e)
                }
            };
            return l
        }
    }
}), (function(e, t, n) {
    function i() {
        "interactive" !== document.readyState && "complete" !== document.readyState || (t.domReadyTime = Date.now())
    }
    var r = n(138),
        a = n(16).get("stores/directive");
    t.domReadyTime = null, t.initialize = function() {
        i(), document.addEventListener("readystatechange", i, !0)
    }, t.isTimedOut = function(e) {
        var n = Date.now();
        if (!t.domReadyTime || !e) return !1;
        var i = Math.max(e, t.domReadyTime);
        return a.isEditor() && (i = t.domReadyTime), !(n - i < r.SELECTOR_POLLING_MAX_TIME)
    }
}), (function(e, t) {
    e.exports = {
        SELECTOR_POLLING_MAX_TIME: 2e3,
        CHANGE_DATA_KEY: "optimizelyChangeData",
        CHANGE_ID_ATTRIBUTE_PREFIX: "data-optly-"
    }
}), (function(e, t, n) {
    function i(e, t) {
        return function(n) {
            var i = n.type,
                a = t[i];
            if (!a) throw new Error("Audience / No matcher found for type=" + i);
            if (a.fieldsNeeded)
                for (var s = r(a.fieldsNeeded, n), l = 0; l < s.length; l++) {
                    var d = s[l],
                        f = u.getFieldValue(e, d);
                    if (o.isUndefined(f)) return void c.debug("Audience / Required field", d, "for type", i, "has no value")
                }
            c.debug("Matching condition:", n, "to values:", e);
            var g = a.match(e, n);
            if (!o.isUndefined(g)) return !!g
        }
    }

    function r(e, t) {
        var n = "function" == typeof e ? e(t) : e;
        return o.isString(n) && (n = [n]), o.isArray(n) ? n : (c.warn("Couldn't determine fieldsNeeded for matcher; assuming []"), [])
    }

    function a(e) {
        return e.name ? e.name + " (" + e.id + ")" : e.id
    }
    var o = n(2),
        s = n(125),
        u = n(19),
        c = n(23),
        l = n(75);
    t.isInAudience = function(e, t, n) {
        var r = i(e, n);
        c.groupCollapsed("Checking audience", t.name, t.id, t), c.debug("Visitor Profile:", e);
        var o;
        try {
            var u = s.evaluate(t.conditions, r)
        } catch (e) {
            o = e, u = !1
        }
        return c.groupEnd(), o && c.error("Audience / Error evaluating audience", a(t), ":", o), c.log("Is " + (u ? "in" : "NOT in") + " audience:", a(t)), u
    }, t.requiredAudienceFieldsForConditions = function e(t, n) {
        var i = {};
        return o.each(t, (function(t) {
            if (o.isArray(t)) o.extend(i, e(t, n));
            else if (o.isObject(t)) {
                var a = n[t.type];
                if (a) {
                    var s = r(a.fieldsNeeded, t);
                    o.each(s, (function(e) {
                        i[l.serializeFieldKey(e)] = e
                    }))
                }
            }
        })), i
    }
}), (function(e, t, n) {
    function i(e, t) {
        v.debug("Decision / Deciding layer for group: ", h.description(e));
        var n, i, r = t.preferredLayerId,
            a = !!r;
        if (a) v.debug("Decision / Using preferredLayerMap to select layer for group:", h.description(e)), n = r;
        else try {
            n = l.chooseWeightedCandidate(t.bucketingId, e.id, e.weightDistributions), n && "None" !== n || (i = 'Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')
        } catch (e) {
            i = "Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."
        }
        if (i) return {
            layerId: null,
            reason: i
        };
        if (!s.find(e.weightDistributions, {
                entityId: n
            })) {
            var o = a ? " sticky-" : " non-sticky ",
                u = "Visitor was" + o + "bucketed into a campaign (" + n + ") which is not in the group";
            if (!a) throw new f(u);
            return {
                layerId: null,
                reason: u
            }
        }
        return {
            layerId: n
        }
    }

    function r(e, t) {
        for (var n = 0; n < e.experiments.length; n++)
            for (var i = 0; i < e.experiments[n].variations.length; i++)
                if (t.indexOf(e.experiments[n].variations[i].id) > -1) return {
                    experimentId: e.experiments[n].id,
                    variationId: e.experiments[n].variations[i].id
                };
        return null
    }

    function a(e) {
        var t = E.getPlugin(p.PluginTypes.deciders, e);
        if (s.isEmpty(t)) throw new Error("No deciders found for policy: " + e);
        return t
    }

    function o(e, t) {
        var n = E.getAllPlugins(p.PluginTypes.audienceMatchers);
        return s.reduce(t, (function(t, i) {
            return c.isInAudience(e, i, n) && t.push(i.id), t
        }), [])
    }
    var s = n(2),
        u = n(86),
        c = n(139),
        l = n(141),
        d = n(142),
        f = n(143).DecisionError,
        g = n(16),
        p = n(25),
        h = n(144),
        _ = n(113),
        v = n(23),
        m = n(45),
        E = g.get("stores/plugins"),
        I = g.get("stores/global"),
        y = g.get("stores/layer_data");
    t.isPageIdRelevant = function(e) {
        if (!e) return !1;
        var t = a(e.policy);
        return s.isFunction(t.includePageIdInDecisionTicket) ? t.includePageIdInDecisionTicket(e) : t.includePageIdInDecisionTicket === !0
    }, t.createTicket = function(e) {
        var t = s.pick(e, ["bucketingId", "globalHoldback", "preferredVariationMap", "pageId"]);
        return s.extend(t, {
            audienceIds: o(e.visitorProfile, e.audiences),
            activationId: I.getActivationId()
        }), t
    }, t.decideGlobal = function(e) {
        var t = l.isHoldback(e.bucketingId, {
            id: null,
            holdback: e.globalHoldback
        });
        return {
            isGlobalHoldback: t
        }
    }, t.decideGroup = i, t.decideLayer = function(e, t) {
        v.debug("Deciding: ", e, t);
        var n, i, r = a(e.policy),
            o = {
                layerId: e.id,
                experimentId: null,
                variationId: null,
                isLayerHoldback: l.isHoldback(t.bucketingId, e)
            };
        if (s.isEmpty(e.experiments)) throw new f("No experiments in layer.");
        try {
            if (r.decideLayer) {
                v.debug("Decision / Using decider's custom decideLayer.");
                var c = r.decideLayer(e, t);
                n = c.experiment, i = c.variation
            } else v.debug("Decision / Using default decideLayer behavior."), n = r.selectExperiment(e, t.audienceIds, t.bucketingId), i = d.selectVariation(n, t.audienceIds, t.bucketingId, t.activationId, t.preferredVariationMap)
        } catch (e) {
            e instanceof f ? o.reason = e.message : o.error = e
        }
        return o.experimentId = n ? n.id : null, o.variationId = i ? i.id : null, o.error && (o.error.name = "DecisionEngineError", u.emitError(o.error)), o
    }, t.getDummyLayerDecision = function(e, t) {
        var n, i = r(e, t);
        return i ? (v.log("Decision / Applying force variation:", i.variationId, "to Campaign", _.description(e)), n = {
            layerId: e.id,
            variationId: i.variationId,
            experimentId: i.experimentId,
            isLayerHoldback: !1,
            reason: "force"
        }) : (v.log("No variation matches ids:", t, "in Campaign", _.description(e)), n = {
            layerId: e.id,
            variationId: null,
            experimentId: null,
            isLayerHoldback: !1,
            reason: "force"
        }), n
    }, t.isInCohort = function(e) {
        if (!e.experimentId || !e.variationId) return !1;
        var t = y.get(e.layerId);
        return !(m.isSingleExperimentPolicy(t.policy) && e.isLayerHoldback)
    }
}), (function(e, t, n) {
    var i = n(65),
        r = t.TOTAL_POINTS = 1e4;
    t.bucketingNumber = function(e, t, n) {
        var a = i.hashToInt(e + t, n, r);
        return a
    }, t.isHoldback = function(e, n) {
        return t.bucketingNumber(e, n.id, i.Seed.IGNORING) < (n.holdback || 0)
    }, t.chooseWeightedCandidate = function(e, n, r) {
        for (var a = t.bucketingNumber(e, n, i.Seed.BUCKETING), o = 0; o < r.length; o++)
            if (r[o].endOfRange > a) return r[o].entityId;
        throw new Error("Unable to choose candidate")
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(141),
        a = n(125),
        o = n(143).DecisionError,
        s = n(23),
        u = "impression";
    t.isValidExperiment = function(e, t) {
        var n, r = i.partial(i.includes, e);
        return s.groupCollapsed("Decision / Evaluating audiences for experiment:", t, e), n = !t.audienceIds || a.evaluate(t.audienceIds, r), s.groupEnd(), s.debug("Decision / Experiment", t, "is valid?", n), n
    }, t.selectVariation = function(e, t, n, a, c) {
        if (!e.variations || 0 === e.variations.length) throw new o('No variations in selected experiment "' + e.id + '"');
        if (!e.weightDistributions && e.variations.length > 1) throw new o('On selected experiment "' + e.id + '", weightDistributions must be defined if # variations > 1');
        var l;
        if (e.bucketingStrategy && e.bucketingStrategy === u)
            if (1 === e.variations.length) l = e.variations[0].id;
            else {
                var d = a;
                l = r.chooseWeightedCandidate(n + d, e.id, e.weightDistributions)
            }
        else if (c && c[e.id]) {
            s.debug("Decision / Using preferredVariationMap to select variation for experiment:", e.id);
            var f = c[e.id];
            if (!i.find(e.variations, {
                    id: f
                })) return s.debug("Decision / Preferred variation:", f, "not found on experiment:", e.id, ". Visitor not bucketed."), null;
            l = f
        } else l = 1 === e.variations.length ? e.variations[0].id : r.chooseWeightedCandidate(n, e.id, e.weightDistributions);
        var g = i.find(e.variations, {
            id: l
        });
        if (g) return s.debug("Decision / Selected variation:", g), g;
        throw new o('Unable to find selected variation: "' + l + '".')
    }, t.getExperimentById = function(e, t) {
        var n = i.find(e.experiments, {
            id: t
        });
        if (n) return n;
        throw new o("Unable to find selected experiment.")
    }, t.hasVariationActionsOnView = function(e, t) {
        return s.debug("Decision / Checking variation:", e, "for actions on pageId:", t), !!i.find(e.actions, (function(e) {
            return e.pageId === t && !i.isEmpty(e.changes)
        }))
    }
}), (function(e, t) {
    function n(e) {
        this.message = e
    }
    n.prototype = new Error, t.DecisionError = n
}), (function(e, t, n) {
    function i(e) {
        return r.map(e.weightDistributions, "entityId")
    }
    var r = n(2);
    t.description = function(e) {
        var t = !!e.name,
            n = t ? '"' + e.name + '" ' : "",
            r = i(e).join(", ");
        return n + "(id " + e.id + ", campaigns: " + r + ")"
    }
}), (function(module, exports, __webpack_require__) {
    var createError = __webpack_require__(78),
        di = __webpack_require__(16),
        Logger = __webpack_require__(23),
        CSP_MODE = !1,
        EXEC_WITH_JQUERY = !0,
        ExecError = exports.Error = createError("ExecError");
    exports.apply = function(e, t) {
        t = t || [], EXEC_WITH_JQUERY && (t = t.concat(di.get("env/jquery")));
        try {
            return e.apply(void 0, t)
        } catch (n) {
            throw Logger.warn("Error applying function", e, "with args:", t, n), new ExecError(n)
        }
    }, exports.eval = function(str) {
        if (CSP_MODE) throw new ExecError("eval is not supported in CSP mode");
        try {
            return EXEC_WITH_JQUERY && (str = "var $ = optimizely.get('jquery');" + str), eval(str)
        } catch (e) {
            throw Logger.warn("Error executing JS:", str, e), new ExecError(e)
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(86),
        a = n(25),
        o = n(26),
        s = n(82).LocalStorage,
        u = n(23),
        c = n(91),
        l = n(16),
        d = l.get("stores/pending_events"),
        f = a.StorageKeys.PENDING_EVENTS;
    t.persistPendingEvents = function() {
        try {
            var e = d.getEventsString();
            s.setItem(f, e), n(85).setItem(f, e)
        } catch (e) {
            u.warn("PendingEvents / Unable to set localStorage key, error was: ", e), r.emitInternalError(e)
        }
    }, t.getPendingEvents = function() {
        try {
            return o.parse(s.getItem(f))
        } catch (e) {
            return null
        }
    }, t.retryPendingEvents = function(e) {
        i.forOwn(e, (function(e, t) {
            c.retryableRequest(e.data, t, e.retryCount)
        })), i.isEmpty(e) || u.log("Retried pending events: ", e)
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(12).Promise;
    t.firstToResolve = function(e) {
        return new r(function(t) {
            i.each(e, (function(e) {
                r.resolve(e).then(t, (function() {}))
            }))
        })
    }
}), (function(e, t, n) {
    function i(e) {
        var t = !1;
        if (a.isArray(window.optimizely) && a.each(window.optimizely, (function(n) {
                a.isArray(n) && "verifyPreviewProject" === n[0] && String(n[1]) === e && (t = !0)
            })), !t) throw new Error("Preview projectId: " + e + " does not match expected")
    }

    function r() {
        s.on({
            filter: {
                type: u.TYPES.ANALYTICS,
                name: "trackEvent"
            },
            handler: f
        }), s.on({
            filter: {
                type: u.TYPES.LIFECYCLE,
                name: "viewActivated"
            },
            handler: f
        }), s.on({
            filter: {
                type: u.TYPES.LIFECYCLE,
                name: "layerDecided"
            },
            handler: f
        }), s.on({
            filter: {
                type: "error"
            },
            publicOnly: !0,
            handler: f
        })
    }
    var a = n(2),
        o = n(16),
        s = n(87),
        u = n(111),
        c = n(41),
        l = o.get("stores/directive"),
        d = "optimizelyPreview",
        f = function(e) {
            var t = c.getGlobal(d);
            t.push(e)
        };
    t.initialize = function(e) {
        l.isSlave() && i(e), r()
    }, t.setupPreviewGlobal = function() {
        c.getGlobal(d) || c.setGlobal(d, [])
    }, t.pushToPreviewGlobal = function(e) {
        f(e)
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(150))
    }
}), (function(e, t) {
    e.exports = {
        provides: "visitorId",
        getter: ["stores/visitor_id", function(e) {
            return e.getRandomId()
        }]
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(152)), e.registerAudienceMatcher("behavior", n(154))
    }
}), (function(e, t, n) {
    var i = n(153);
    e.exports = {
        provides: "events",
        isTransient: !0,
        getter: [function() {
            return i.getEvents()
        }]
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(73),
        a = n(16),
        o = a.get("stores/visitor_events"),
        s = 1e3;
    t.getEvents = function() {
        var e = r.getEvents(),
            t = [].concat.apply([], i.values(o.getForeignEvents())),
            n = [].concat.apply([], i.values(o.getForeignEventQueues())),
            a = r.mergeAllEvents([e, t, n]);
        return a.slice(a.length - s)
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(26),
        a = n(155),
        o = n(156);
    e.exports = {
        fieldsNeeded: ["events"],
        match: function(e, t) {
            var n = [],
                s = r.parse(t.value);
            return n = i.isUndefined(s.version) ? [s] : a.buildFromSpecV0_1(s), i.every(n, (function(t) {
                return o.isSatisfied(t, e.events)
            }))
        }
    }
}), (function(e, t, n) {
    function i(e) {
        return e = (e || "").toString().trim(), g[e] || e
    }

    function r(e, t, n) {
        var i = {
            where: t
        };
        if (e.count && (i["limit"] = e.count), e.modifier === s.FREQUENCY_FILTERS.MOST_FREQUENT) {
            var r = s.getFieldKeyPathForSource(e.name, n),
                a = s.aggregate("count"),
                o = s.aggregateField("count"),
                l = s.groupField(r);
            return u.extend(i, {
                select: [{
                    field: l
                }],
                groupBy: s.groupBy([r]),
                aggregate: [a],
                orderBy: [{
                    field: o,
                    direction: "DESC"
                }]
            })
        }
        return u.extend(i, {
            orderBy: [{
                field: [c.FIELDS.TIME],
                direction: "DESC"
            }]
        })
    }

    function a(e) {
        var t = [];
        if (u.isUndefined(e)) throw new Error("rule is undefined");
        if (!u.isObject(e)) throw new Error("rule is not an Object");
        "0.2" !== e["version"] && t.push('version: not "0.2"'), e["filter"] && (u.isArray(e["filter"]) ? u.each(e["filter"], (function(e, n) {
            var i = s.validateFieldKeyPathV0_2(e["field"], s.FieldPurpose.FILTER);
            i && t.push("filter[" + n + "]: " + i);
            var r = s.validateComparatorAndValue(e["comparator"], e["value"]);
            r && t.push("filter[" + n + "]: " + r)
        })) : t.push("filter: not an array"));
        var n = [],
            i = [];
        if (e["sort"] && (e["reduce"] && e["reduce"]["aggregator"] && "nth" !== e["reduce"]["aggregator"] && t.push("sort: superfluous because we can apply aggregator " + l.stringify(e["reduce"]["aggregator"]) + " to unsorted items"), u.isArray(e["sort"]) ? u.each(e["sort"], (function(e, r) {
                var a = s.validateFieldKeyPathV0_2(e["field"], s.FieldPurpose.SORT);
                a && t.push("sort[" + r + "]: " + a), e["field"] && "frequency" === e["field"][0] ? n.push(e) : i.push(e);
                var u = o(e["direction"]);
                u && t.push("sort[" + r + "]: " + u)
            })) : t.push("sort: not an array"), n.length && i.length && t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'), n.length && !e["pick"] && t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')), e["pick"]) {
            e["reduce"] && "count" === e["reduce"]["aggregator"] && t.push('pick: superfluous because we can apply aggregator "count" to raw events');
            var r = s.validateFieldKeyPathV0_2(e["pick"]["field"]);
            r && t.push("pick: " + r)
        }
        if (e["reduce"]) {
            var a = e["reduce"]["aggregator"],
                c = "aggregator " + (l.stringify(a) || String(a)),
                d = e["reduce"]["n"],
                f = "index " + (l.stringify(d) || String(d));
            u.includes(["sum", "avg", "max", "min", "count", "nth"], a) || t.push("reduce: " + c + " is unknown"), u.includes(["sum", "avg", "max", "min"], a) && (e["pick"] || t.push("reduce: " + c + " is impossible to use because no values have been picked")), "nth" === a ? ((!u.isNumber(d) || isNaN(d) || parseInt(d, 10) !== d || d < 0) && t.push("reduce: " + f + " is not a non-negative integer (mandated by " + c + ")"), e["sort"] || t.push('reduce: aggregator "nth" is meaningless without a specific sort order')) : u.isUndefined(d) || t.push("reduce: " + f + " is defined (not mandated by " + c + ")")
        }
        if (t.length) throw new Error(t.join("\n"))
    }

    function o(e) {
        var t = "direction " + (l.stringify(e) || String(e));
        if (!u.includes(["ascending", "descending"], e)) return t + ' is not "ascending" or "descending"'
    }
    var s = t,
        u = n(2),
        c = {
            FIELDS: n(64).FIELDS,
            FIELDS_V0_2: n(64).FIELDS_V0_2
        },
        l = n(26),
        d = n(23),
        f = n(156);
    s.MILLIS_IN_A_DAY = 864e5, s.aggregateField = function(e, t) {
        return u.isString(t) && (t = [t]), t = t || f.DEFAULT_FIELD, [f.generateAlias(e, t)]
    }, s.groupField = function(e) {
        return u.isString(e) && (e = [e]), e = e || f.DEFAULT_FIELD, [e.join(".")]
    };
    var g = {
        "<": "lt",
        "<=": "lte",
        ">": "gt",
        ">=": "gte",
        "=": "eq",
        "==": "eq"
    };
    s.fieldComparison = function(e, t, n) {
        return e = i(e), u.isString(t) && (t = [t]), "exists" === e ? {
            op: e,
            args: [{
                field: t
            }]
        } : {
            op: e,
            args: [{
                field: t
            }, {
                value: n
            }]
        }
    }, s.relativeTimeComparison = function(e, t) {
        return {
            op: i(e),
            args: [{
                op: "-",
                args: [{
                    eval: "now"
                }, {
                    field: [c.FIELDS.TIME]
                }]
            }, {
                value: t * s.MILLIS_IN_A_DAY
            }]
        }
    }, s.rangeTimeComparison = function(e) {
        return u.isArray(e) ? {
            op: "between",
            args: [{
                field: [c.FIELDS.TIME]
            }, {
                value: [e[0] || +new Date(0), e[1] || +new Date]
            }]
        } : (d.error("Rule builder", "rangeTimeComparison passed invalid range", e), null)
    }, s.groupBy = function(e) {
        for (var t = [], n = 0; n < e.length; n++) t[n] = {
            field: e[n]
        };
        return t
    }, s.aggregate = function(e, t) {
        return u.isString(t) && (t = [t]), t = t || f.DEFAULT_FIELD, {
            op: e,
            args: [{
                field: t
            }]
        }
    }, s.SOURCE_TYPES = {
        BEHAVIOR: "events",
        CUSTOM_BEHAVIOR: "custom_behavior",
        DCP: "dcp"
    }, s.FREQUENCY_FILTERS = {
        MOST_FREQUENT: "most_frequent",
        LEAST_FREQUENT: "least_frequent"
    }, s.RECENCY_FILTERS = {
        MOST_RECENT: "most_recent",
        LEAST_RECENT: "least_recent"
    }, s.getFieldKeyPathForSource = function(e, t) {
        t = t || s.SOURCE_TYPES.BEHAVIOR;
        var n = [];
        return u.isString(e) ? (n = [e], t !== s.SOURCE_TYPES.BEHAVIOR || u.includes(u.values(c.FIELDS), e) || (n = [c.FIELDS.OPTIONS, e])) : n = e, n
    }, s.buildFromSpecV0_1 = function(e) {
        if (!(e.action || e.filters && 0 !== e.filters.length)) throw new Error('Audience spec must have an "action" field or at least one "filter" ' + l.stringify(e));
        var t = s.fieldComparison("gt", c.FIELDS.TIME, 0),
            n = [],
            i = [];
        if (e.action && (i.push(s.fieldComparison("eq", c.FIELDS.NAME, e.action.value)), e.action.type && i.push(s.fieldComparison("eq", c.FIELDS.TYPE, e.action.type))), e.time)
            if ("last_days" === e.time.type) i.push(s.relativeTimeComparison("lte", e.time.days));
            else if ("range" === e.time.type) {
            var a = s.rangeTimeComparison([e.time.start, e.time.stop]);
            a && i.push(a)
        } else d.error("Rule builder", 'Audience spec has bad "time" type', e.time.type);
        if (t = {
                op: "and",
                args: i
            }, e.count && n.push({
                where: s.fieldComparison(e.count.comparator, "0", e.count.value),
                from: {
                    select: [{
                        field: s.aggregateField("count")
                    }],
                    where: t,
                    aggregate: [s.aggregate("count")]
                }
            }), e.filters && u.each(e.filters, (function(r) {
                var a, o, u = s.getFieldKeyPathForSource(r.name, e.source);
                if (r.modifier === s.FREQUENCY_FILTERS.MOST_FREQUENT ? (a = s.aggregate("count"), o = s.aggregateField("count")) : r.modifier === s.RECENCY_FILTERS.MOST_RECENT && (a = s.aggregate("max", c.FIELDS.TIME), o = s.aggregateField("max", c.FIELDS.TIME)), a) {
                    var l = u,
                        d = s.groupField(l);
                    n.push({
                        where: s.fieldComparison(r.comparator, "0", r.value),
                        from: {
                            select: [{
                                field: d
                            }],
                            where: t,
                            groupBy: s.groupBy([l]),
                            aggregate: [a],
                            orderBy: [{
                                field: o,
                                direction: "DESC"
                            }],
                            limit: 1
                        }
                    })
                } else i.push(s.fieldComparison(r.comparator, u, r.value))
            })), e.pick) {
            if (n.length > 0) throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers' + l.stringify(e));
            return [r(e.pick, t, e.source)]
        }
        return n.length > 0 ? n : [{
            where: t
        }]
    }, s.buildFromSpecV0_2 = function(e) {
        a(e);
        var t = {
            where: {
                op: "and",
                args: u.map(e["filter"] || [], (function(e) {
                    return "age" === e["field"][0] ? s.relativeTimeComparison(e["comparator"] || "eq", e["value"] / s.MILLIS_IN_A_DAY) : s.fieldComparison(e["comparator"] || "eq", s.convertFieldKeyPathFromSpecV0_2(e["field"]), e["value"])
                }))
            }
        };
        if (e["reduce"] && "count" === e["reduce"]["aggregator"]) return u.extend(t, {
            aggregate: [{
                op: "count",
                args: [{
                    field: ["*"]
                }]
            }],
            select: [{
                field: ["_count_*"]
            }]
        });
        var n = [],
            i = [];
        if (e["sort"] && (u.each(e["sort"], (function(e) {
                u.includes(["ascending", "descending"], e["direction"]) && (u.includes(["time", "age"], e["field"][0]) && i.push(e), "frequency" === e["field"][0] && n.push(e))
            })), i.length && !n.length && (t["orderBy"] = u.filter(u.map(i, (function(e) {
                return "time" === e["field"][0] ? {
                    field: s.convertFieldKeyPathFromSpecV0_2(["time"]),
                    direction: "ascending" === e["direction"] ? "ASC" : "DESC"
                } : "age" === e["field"][0] ? {
                    field: s.convertFieldKeyPathFromSpecV0_2(["time"]),
                    direction: "ascending" === e["direction"] ? "DESC" : "ASC"
                } : void 0
            }))))), e["pick"] && e["pick"]["field"]) {
            var r = s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);
            if (e["reduce"] && u.includes(["avg", "max", "min", "sum"], e["reduce"]["aggregator"])) return u.extend(t, {
                aggregate: [{
                    op: e["reduce"]["aggregator"],
                    args: [{
                        field: r
                    }]
                }],
                select: [{
                    field: [f.generateAlias(e["reduce"]["aggregator"], r)]
                }]
            });
            t = n.length ? u.extend(t, {
                groupBy: [{
                    field: r
                }],
                aggregate: [{
                    op: "count",
                    args: [{
                        field: ["*"]
                    }]
                }],
                orderBy: [{
                    field: ["_count_*"],
                    direction: "ascending" === n[0]["direction"] ? "ASC" : "DESC"
                }],
                select: [{
                    field: [r.join(".")]
                }]
            }) : u.extend(t, {
                select: [{
                    field: r
                }]
            })
        }
        if (e["reduce"] && "nth" === e["reduce"]["aggregator"]) {
            var o = e["reduce"]["n"];
            if (u.isNumber(o) && o >= 0 && Number(o) === Math.floor(Number(o))) return u.extend(t, {
                offset: o,
                limit: 1
            })
        }
        return t
    }, s.convertFieldKeyPathFromSpecV0_2 = function(e) {
        return "tags" === e[0] && "revenue" === e[1] ? ["r"] : [c.FIELDS_V0_2[e[0]]].concat(e.slice(1))
    }, s.FieldPurpose = {
        FILTER: "filter",
        SORT: "sort",
        PICK: "pick"
    }, s.validateFieldKeyPathV0_2 = function(e, t) {
        var n = "field " + (l.stringify(e) || String(e));
        if (!u.isArray(e) || !u.every(e, u.isString)) return n + " is not an array of strings";
        if ("tags" === e[0] && e.length > 2 || "tags" !== e[0] && e.length > 1) return n + " includes too many strings";
        if ("tags" === e[0] && e.length < 2) return n + " does not specify an exact tag";
        if (e.length < 1) return n + " does not specify a top-level field";
        var i = u.keys(c.FIELDS_V0_2),
            r = ["age", "frequency"];
        return t === s.FieldPurpose.FILTER && (i.push("age"), r = ["frequency"]), t === s.FieldPurpose.SORT && (i = ["time", "age", "frequency"], r = ["name", "type", "category", "tags"]), u.includes(r, e[0]) ? n + " is not supported here" : u.includes(i, e[0]) ? void 0 : n + " is unknown"
    }, s.validateComparatorAndValue = function(e, t) {
        var n = "comparator " + (l.stringify(e) || String(e)),
            i = "value " + (l.stringify(t) || String(t));
        if (!u.isString(e) && !u.isUndefined(e)) return n + " is not a string";
        switch (e) {
            case void 0:
            case "eq":
            case "is":
            case "contains":
                break;
            case "lt":
            case "gt":
            case "lte":
            case "gte":
                if (!u.isNumber(t)) return i + " is not a number (mandated by " + n + ")";
                break;
            case "in":
                if (!u.isArray(t)) return i + " is not an array (mandated by " + n + ")";
                break;
            case "between":
                if (!(u.isArray(t) && 2 === t.length && u.isNumber(t[0]) && u.isNumber(t[1]) && t[0] <= t[1])) return i + " is not a pair of increasing numbers (mandated by " + n + ")";
                break;
            case "regex":
                if (!(u.isString(t) || u.isArray(t) && 2 === t.length && u.isString(t[0]) && u.isString(t[1]))) return i + " is not a pattern string or a [pattern string, flags string] array (mandated by " + n + ")";
                break;
            case "exists":
                if (!u.isUndefined(t)) return i + " is not undefined (mandated by " + n + ")";
                break;
            default:
                return n + " is unknown"
        }
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(25),
        a = n(23),
        o = i.bind(a.log, a),
        s = n(24),
        u = n(19).getFieldValue,
        c = n(26),
        l = function(e, t, n) {
            if (e.getValueOrDefault) return e.getValueOrDefault(t, n);
            if (!i.isArray(t)) return n;
            var r = u(e, t);
            return "undefined" == typeof r && (r = n), r
        },
        d = function(e) {
            return "string" == typeof e ? e.trim().toLowerCase() : e
        };
    t.clause = {
        WHERE: "where",
        GROUP_BY: "groupBy",
        AGGREGATE: "aggregate",
        HAVING: "having",
        ORDER_BY: "orderBy",
        SELECT: "select",
        OFFSET: "offset",
        LIMIT: "limit",
        FROM: "from"
    }, t.DEFAULT_FIELD = ["*"], t.booleanOperators = {
        eq: function(e) {
            var t = i.map(e, d);
            return t[0] == t[1]
        },
        is: function(e) {
            return e[0] === e[1]
        },
        gt: function(e) {
            return e[0] > e[1]
        },
        lt: function(e) {
            return e[0] < e[1]
        },
        gte: function(e) {
            return e[0] >= e[1]
        },
        lte: function(e) {
            return e[0] <= e[1]
        },
        "in": function(e) {
            var t = i.map(e[1] || [], d);
            return i.includes(t, d(e[0]))
        },
        between: function(e) {
            return e[1][0] <= e[0] && e[0] <= e[1][1]
        },
        contains: function(e) {
            var t = i.map(e, (function(e) {
                return "string" == typeof e ? e.toLowerCase() : e
            }));
            return (t[0] || "").indexOf(t[1]) !== -1
        },
        regex: function(e) {
            try {
                var t, n;
                return i.isString(e[1]) ? (t = e[1], n = "i") : (t = e[1][0] || "", n = e[1][1] || ""), new RegExp(t, n).test(e[0])
            } catch (e) {
                return a.error("Rules", 'In operator "regex", error: ' + (e.message || "invalid RegExp /" + [t, n].join("/"))), !1
            }
        },
        exists: function(e) {
            return "undefined" != typeof e[0]
        },
        and: function(e) {
            return i.every(e, (function(e) {
                return e
            }))
        },
        or: function(e) {
            return i.some(e, (function(e) {
                return e
            }))
        },
        not: function(e) {
            return !e[0]
        }
    }, t.arithmeticOperators = {
        "+": function(e) {
            return (e[0] || 0) + (e[1] || 0)
        },
        "-": function(e) {
            return (e[0] || 0) - (e[1] || 0)
        },
        "/": function(e) {
            return (e[0] || 0) / (e[1] || 1)
        },
        "%": function(e) {
            return (e[0] || 0) % (e[1] || 1)
        }
    }, t.aggregateOperators = {
        sum: function(e, n) {
            for (var i = e[0] || t.DEFAULT_FIELD, r = 0, a = 0; a < n.length; a++) r += l(n[a], i, 0);
            return r
        },
        avg: function(e, n) {
            if (0 === n.length) return 0;
            for (var i = e[0] || t.DEFAULT_FIELD, r = 0, a = 0; a < n.length; a++) r += l(n[a], i, 0);
            return r / n.length
        },
        max: function(e, n) {
            for (var i = e[0] || t.DEFAULT_FIELD, r = Number.NEGATIVE_INFINITY, a = 0; a < n.length; a++) r = Math.max(r, l(n[a], i, Number.NEGATIVE_INFINITY));
            return r
        },
        min: function(e, n) {
            for (var i = e[0] || t.DEFAULT_FIELD, r = Number.POSITIVE_INFINITY, a = 0; a < n.length; a++) r = Math.min(r, l(n[a], i, Number.POSITIVE_INFINITY));
            return r
        },
        count: function(e, t) {
            return t.length
        }
    };
    var f = {
            now: function() {
                return s.now()
            }
        },
        g = function(e) {
            return e in t.booleanOperators ? t.booleanOperators[e] : e in t.arithmeticOperators ? t.arithmeticOperators[e] : null
        },
        p = function(e, t) {
            if (t.hasOwnProperty("value")) return t["value"];
            if (t.hasOwnProperty("field")) return l(e, t["field"]);
            if (t.hasOwnProperty("eval")) return t["eval"] in f ? f[t["eval"]]() : void a.error("Rules", "Unknown function: " + t["eval"]);
            if (!t["op"]) return void a.error("Rules", "No operator specified: " + c.stringify(t));
            var n = g(t["op"]);
            if (!n) return void a.error("Rules", "Unknown operator: " + t["op"]);
            var r = i.partial(p, e),
                o = t["args"] || [],
                s = i.map(o, (function(e) {
                    return r(e)
                }));
            return n(s, e)
        },
        h = function(e, t) {
            var n = {};
            if ("undefined" == typeof e || !i.isArray(e) || 0 === e.length) return n["*"] = {
                fieldValues: {},
                events: t
            }, n;
            for (var r = i.map(e, (function(e) {
                    return e["field"]
                })), a = 0; a < t.length; a++) {
                for (var o = t[a], s = [], u = {}, d = 0; d < r.length; d++) {
                    var f = r[d],
                        g = l(o, f),
                        p = f.join(".");
                    u[p] = g, s.push(encodeURIComponent(p) + "=" + encodeURIComponent(c.stringify(g)))
                }
                var h = s.join("&");
                n.hasOwnProperty(h) || (n[h] = {
                    fieldValues: u,
                    events: []
                }), n[h].events.push(o)
            }
            return n
        };
    t.generateAlias = function(e, t) {
        return "_" + e + "_" + t.join(".")
    };
    var _ = function(e, n) {
            var r = {};
            return i.each(n, (function(n, i) {
                r[i] = {};
                for (var o = 0; o < e.length; o++) {
                    var s = e[o],
                        u = s["op"];
                    if (u in t.aggregateOperators) {
                        var c = (s["args"] && s["args"][0] || {})["field"] || t.DEFAULT_FIELD,
                            l = t.generateAlias(u, c),
                            d = t.aggregateOperators[u]([c], n.events);
                        r[i][l] = d
                    } else a.error("Rules", "Unknown aggregate operator " + u)
                }
            })), r
        },
        v = function(e, t) {
            var n = [];
            return i.each(e, (function(e, r) {
                var a = i.extend({}, e.fieldValues),
                    o = t[r] || {};
                i.extend(a, o), n.push(a)
            })), n
        },
        m = function(e, t) {
            return i.isArray(e) ? 0 === e.length ? t : t.sort((function(t, n) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i],
                        a = r["direction"] || "ASC",
                        o = "ASC" === a ? 1 : -1,
                        s = r["field"],
                        u = l(t, s, 0),
                        c = l(n, s, 0);
                    if (u < c) return -o;
                    if (u > c) return o
                }
                return 0
            })) : (o("Rules", "groupBy rule must be an array"), t)
        };
    t.rewrite = function(e) {
        function n(e, s) {
            if (i.isArray(e) && ("and" !== e[0] && "or" !== e[0] && "not" !== e[0] && a.error("Rules", "Unexpected operation " + e[0] + ". Continuing optimistically."), e = {
                    op: e[0],
                    args: e.slice(1)
                }), e.hasOwnProperty("field") || e.hasOwnProperty("value") || e.hasOwnProperty("eval")) return e;
            if (s && e["op"] in t.aggregateOperators) {
                var u = (e["args"] && e["args"][0] || {})["field"] || t.DEFAULT_FIELD,
                    c = t.generateAlias(e["op"], u);
                return c in o || (r.push({
                    op: e["op"],
                    args: e["args"]
                }), o[c] = !0), {
                    field: [c]
                }
            }
            for (var l = [], d = e["args"] || [], f = 0; f < d.length; f++) l[f] = n(d[f], s);
            return {
                op: e["op"],
                args: l
            }
        }
        var r = [],
            o = {},
            s = {};
        e.hasOwnProperty(t.clause.WHERE) && (s[t.clause.WHERE] = n(e[t.clause.WHERE], !1)), e.hasOwnProperty(t.clause.HAVING) && (s[t.clause.HAVING] = n(e[t.clause.HAVING], !0)), (e.hasOwnProperty(t.clause.AGGREGATE) || r.length > 0) && (s[t.clause.AGGREGATE] = (e[t.clause.AGGREGATE] || []).concat(r));
        for (var u = [t.clause.GROUP_BY, t.clause.ORDER_BY, t.clause.SELECT, t.clause.OFFSET, t.clause.LIMIT], c = 0; c < u.length; c++) e.hasOwnProperty(u[c]) && (s[u[c]] = e[u[c]]);
        return e.hasOwnProperty(t.clause.FROM) && (s[t.clause.FROM] = t.rewrite(e[t.clause.FROM])), s
    };
    var E = function(e, n) {
            n = n || 0;
            var r = [];
            if (e.hasOwnProperty(t.clause.WHERE) ? e[t.clause.WHERE]["op"] ? e[t.clause.WHERE]["op"] in t.booleanOperators || r.push("Non-boolean WHERE clause operator") : r.push("Missing WHERE clause operator") : r.push("Missing WHERE clause"), e.hasOwnProperty(t.clause.HAVING) && (e[t.clause.HAVING]["op"] ? e[t.clause.HAVING]["op"] in t.booleanOperators || r.push("Non-boolean HAVING clause operator") : r.push("Missing HAVING clause operator")), e.hasOwnProperty(t.clause.GROUP_BY) && !e.hasOwnProperty(t.clause.AGGREGATE) && r.push("No AGGREGATE clause specified with GROUP_BY clause"), e.hasOwnProperty(t.clause.SELECT)) {
                var a = e[t.clause.SELECT];
                if (i.isArray(a))
                    for (var o = 0; o < a.length; o++) a[o]["op"] && a[o]["op"] in t.aggregateOperators && r.push('In SELECT clause, aggregate operator "' + a[o]["op"] + '" specified in selector at index ' + o);
                else r.push("SELECT clause must be an array")
            }
            if (e.hasOwnProperty(t.clause.OFFSET)) {
                var s = e[t.clause.OFFSET];
                (!i.isNumber(s) || Number(s) < 0 || Number(s) !== Math.floor(Number(s))) && r.push("OFFSET must be a non-negative integer")
            }
            if (e.hasOwnProperty(t.clause.LIMIT)) {
                var u = e[t.clause.LIMIT];
                (!i.isNumber(u) || Number(u) < 0 || Number(u) !== Math.floor(Number(u))) && r.push("LIMIT must be a non-negative integer")
            }
            return n > 0 && (r = i.map(r, (function(e) {
                return "Sub-rule " + n + ": " + e
            }))), e.hasOwnProperty(t.clause.FROM) && (r = r.concat(E(e[t.clause.FROM], n + 1))), r
        },
        I = function(e, t) {
            return i.map(t, (function(t) {
                return i.map(e, (function(e) {
                    return p(t, e)
                }))
            }))
        },
        y = function(e, n) {
            var r = n;
            if (e.hasOwnProperty(t.clause.FROM) && (a.debug("Evaluating FROM clause:", e[t.clause.FROM]), r = y(e[t.clause.FROM], r), a.debug("Results after FROM:", r)), a.debug("Evaluating WHERE clause:", e[t.clause.WHERE]), r = i.filter(r, (function(n) {
                    return p(n, e[t.clause.WHERE])
                })), a.debug("Results after WHERE:", r), e.hasOwnProperty(t.clause.AGGREGATE)) {
                a.debug("Evaluating AGGREGATE clause:", e[t.clause.AGGREGATE]);
                var o = h(e[t.clause.GROUP_BY], r),
                    s = _(e[t.clause.AGGREGATE], o);
                r = v(o, s), a.debug("Results after AGGREGATE:", r)
            }
            e.hasOwnProperty(t.clause.HAVING) && (a.debug("Evaluating HAVING clause:", e[t.clause.HAVING]), r = i.filter(r, (function(n) {
                return p(n, e[t.clause.HAVING])
            })), a.debug("Results after HAVING:", r)), e.hasOwnProperty(t.clause.ORDER_BY) && (a.debug("Evaluating ORDER_BY clause:", e[t.clause.ORDER_BY]), r = m(e[t.clause.ORDER_BY], r), a.debug("Results after ORDER_BY:", r));
            var u = 0;
            e.hasOwnProperty(t.clause.OFFSET) && (a.debug("Evaluating OFFSET clause:", e[t.clause.OFFSET]), u = Number(e[t.clause.OFFSET]));
            var c;
            return e.hasOwnProperty(t.clause.LIMIT) && (a.debug("Evaluating LIMIT clause:", e[t.clause.LIMIT]), c = u + Number(e[t.clause.LIMIT])), (u > 0 || !i.isUndefined(c)) && (r = r.slice(u, c), a.debug("Results after OFFSET/LIMIT:", r)), e.hasOwnProperty(t.clause.SELECT) && (a.debug("Evaluating SELECT clause:", e[t.clause.SELECT]), r = I(e[t.clause.SELECT], r), a.debug("Results after SELECT:", r)), r
        };
    t.execute = function(e, n) {
        e = t.rewrite(e), a.shouldLog(r.LogLevel.DEBUG) && a.groupCollapsed("Evaluating Behavioral Rule"), a.debug("Rule:", e, c.stringify(e)), a.debug("Events:", n);
        var i = E(e);
        if (i.length > 0) throw new Error("Rule " + c.stringify(e) + " has violations: " + i.join("\n"));
        var o = y(e, n);
        return a.debug("Rule result:", o), a.shouldLog(r.LogLevel.DEBUG) && a.groupEnd(), o
    }, t.isSatisfied = function(e, n) {
        try {
            return t.execute(e, n).length > 0
        } catch (t) {
            return a.error("Rules", "Error " + t.toString() + " while evaluating rule " + c.stringify(e)), !1
        }
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(158))
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(159),
        a = n(153),
        o = n(26),
        s = n(155);
    e.exports = {
        provides: "customBehavior",
        shouldTrack: !0,
        isLazy: !1,
        getter: ["stores/global", "stores/visitor_attribute_entity", function(e, t) {
            var n = e.getProjectId(),
                u = i.filter(i.map(t.getCustomBehavioralAttributes(n), (function(e) {
                    try {
                        return {
                            id: e.id,
                            granularity: r.GRANULARITY.ALL,
                            rule: s.buildFromSpecV0_2(o.parse(e.rule_json))
                        }
                    } catch (e) {
                        return
                    }
                }))),
                c = a.getEvents();
            return r.evaluate(u, c)
        }]
    }
}), (function(e, t, n) {
    function i(e) {
        if (0 === e.length) return [];
        for (var t = e.length - 1, n = o.FIELDS.SESSION_ID, i = e[t][n]; t > 0 && i === e[t - 1][n];) t--;
        return e.slice(t)
    }

    function r(e, t) {
        if (0 === e.length || t <= 0) return [];
        var n = +new Date - t * s.MILLIS_IN_A_DAY;
        n -= n % s.MILLIS_IN_A_DAY;
        for (var i = e.length; i > 0 && n <= e[i - 1][o.FIELDS.TIME];) i--;
        return e.slice(i)
    }
    var a = n(23),
        o = {
            FIELDS: n(64).FIELDS
        },
        s = n(155),
        u = n(156);
    t.GRANULARITY = {
        ALL: "all",
        CURRENT_SESSION: "current_session",
        LAST_30_DAYS: "last_30_days",
        LAST_60_DAYS: "last_60_days"
    }, t.evaluate = function(e, n) {
        var o = {};
        if (0 === n.length) {
            for (var s = 0; s < e.length; s++) o[e[s].id] = e[s].defaultValue;
            return o
        }
        var c = i(n),
            l = r(n, 60);
        for (s = 0; s < e.length; s++) {
            var d = e[s],
                f = n;
            d.granularity === t.GRANULARITY.CURRENT_SESSION ? f = c : d.granularity === t.GRANULARITY.LAST_60_DAYS && (f = l);
            try {
                var g = f;
                d.rule && (g = u.execute(d.rule, f)), o[d.id] = d.defaultValue, 1 === g.length ? o[d.id] = g[0][0] || d.defaultValue : a.debug("Behavior / Rule for", d.id, "returned", g.length, "results, expected 1")
            } catch (e) {
                a.error("Behavior / Rule for", d.id, "failed with", e.message || "")
            }
        }
        return o
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(161)), e.registerAudienceMatcher("first_session", n(162))
    }
}), (function(e, t, n) {
    var i = n(64),
        r = n(153),
        a = n(19).getFieldValue,
        o = n(89).CURRENT_SESSION_INDEX;
    e.exports = {
        provides: "first_session",
        shouldTrack: !0,
        getter: [function() {
            var e = r.getEvents();
            if (e && e.length > 0) {
                var t = e[0],
                    n = a(t, [i.FIELDS.SESSION_INDEX]);
                return n === o
            }
            return !0
        }]
    }
}), (function(e, t) {
    e.exports = {
        fieldsNeeded: ["first_session"],
        match: function(e) {
            return !!e.first_session
        }
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerApiModule("behavior", n(164))
    }
}), (function(e, t, n) {
    function i(e, t) {
        var n = d.buildFromSpecV0_1(t);
        if (1 !== n.length) throw new Error("Invalid query descriptor; verify that no aggregators are specified");
        return f.execute(n[0], e)
    }

    function r(e, t) {
        return c.map(e, (function(e) {
            return c.isFunction(e.toObject) ? e.toObject(t) : e
        }))
    }

    function a(e, t) {
        if (!e) return ["Descriptor not defined"];
        var n = [];
        return e.count && n.push('Unexpected "count" clause specified'), e.pick && e.pick.modifier && t.indexOf(e.pick.modifier) === -1 && n.push('Invalid "pick" modifier "' + e.pick.modifier + '"'), c.each(e.filters, (function(e) {
            c.isUndefined(e.modifier) || n.push('Unexpected "filter" modifier "' + e.modifier + '"')
        })), n.length > 0 ? n : void 0
    }

    function o(e, t) {
        var n, o = {
            revenueAsTag: !1,
            timeAsTimestamp: !0
        };
        if (c.isUndefined(t)) return n = l.getEvents(e), r(n, o);
        if (c.isNumber(t)) {
            if (t <= 0) throw new Error("Count must be a positive integer, got " + t);
            return n = l.getEvents(e), r(n.slice(-t), o)
        }
        var s = a(t, c.values(d.RECENCY_FILTERS));
        if (s) throw new Error(s.join("\n"));
        return n = l.getEvents(e), r(i(n, t), o)
    }

    function s(e, t) {
        if (t = c.cloneDeep(t) || {}, !t.pick) throw new Error('No "pick" clause provided in query descriptor');
        if (!t.pick.name) throw new Error('No field name provided in "pick" clause');
        t.pick.modifier = t.pick.modifier || d.FREQUENCY_FILTERS.MOST_FREQUENT;
        var n = a(t, c.values(d.FREQUENCY_FILTERS));
        if (n) throw new Error(n.join("\n"));
        var r = l.getEvents(e);
        return i(r, t)
    }

    function u(e, t) {
        var n = d.buildFromSpecV0_2(t),
            i = l.getEvents(e),
            a = r(f.execute(n, i), {
                revenueAsTag: !0,
                timeAsTimestamp: !1
            });
        return (t.pick || t.reduce && "count" === t.reduce.aggregator) && (a = c.flatten(a)), t.reduce && (a = a[0]), a
    }
    var c = n(2),
        l = n(153),
        d = n(155),
        f = n(156);
    e.exports = ["stores/visitor_events", function(e) {
        return {
            getEvents: c.partial(o, e),
            getByFrequency: c.partial(s, e),
            query: c.partial(u, e)
        }
    }]
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerDependency("sources/browser_id", n(166)), e.registerVisitorProfileProvider(n(171)), e.registerVisitorProfileProvider(n(172)), e.registerAudienceMatcher("browser_version", n(173))
    }
}), (function(e, t, n) {
    var i = n(167);
    t.getId = function() {
        return i.get().browser.id
    }, t.getVersion = function() {
        return i.get().browser.version
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(168),
        a = n(41),
        o = n(7),
        s = n(16),
        u = n(9),
        c = s.get("stores/ua_data");
    t.get = function() {
        var e = c.get();
        return i.isEmpty(e) && (e = r.parseUA(a.getUserAgent()), u.dispatch(o.SET_UA_DATA, {
            data: e
        })), e
    }
}), (function(e, t, n) {
    function i(e) {
        if (e = (e || "").toLowerCase(), e in u) return e;
        var t = a.keys(u);
        return a.find(t, (function(t) {
            var n = u[t];
            return a.includes(n, e)
        })) || "unknown"
    }

    function r(e, t, n) {
        return t ? t : "unknown" === e ? "unknown" : n ? "mobile" : "desktop_laptop"
    }
    var a = n(2),
        o = n(169);
    t.parseUA = function(e) {
        var t = new o(e),
            n = t.getBrowser(),
            a = t.getOS(),
            u = t.getDevice(),
            l = (a.name || "unknown").toLowerCase(),
            d = (n.name || "unknown").toLowerCase(),
            f = s(u.type, d, l);
        return {
            browser: {
                id: i(n.name),
                version: n.version
            },
            platform: {
                name: l,
                version: a.version
            },
            device: {
                model: c[u.model] || "unknown",
                type: r(d, u.type, f),
                isMobile: f
            }
        }
    };
    var s = function(e, t, n) {
            if (a.includes(["mobile", "tablet"], e)) return !0;
            if (a.includes(["opera mini"], t)) return !0;
            var i = ["android", "blackberry", "ios", "windows phone"];
            return !!a.includes(i, n)
        },
        u = {
            gc: ["chrome", "chromium", "silk", "yandex", "maxthon", "chrome webview"],
            edge: ["edge"],
            ie: ["internet explorer", "iemobile"],
            ff: ["firefox", "iceweasel"],
            opera: ["opera", "opera mini", "opera tablet"],
            safari: ["safari", "mobile safari", "webkit"],
            ucbrowser: ["uc browser"]
        },
        c = {
            iPhone: "iphone",
            iPad: "ipad"
        }
}), (function(e, t, n) {
    var i;
    !(function(r, a) {
        "use strict";
        var o = "0.7.17",
            s = "",
            u = "?",
            c = "function",
            l = "undefined",
            d = "object",
            f = "string",
            g = "major",
            p = "model",
            h = "name",
            _ = "type",
            v = "vendor",
            m = "version",
            E = "architecture",
            I = "console",
            y = "mobile",
            S = "tablet",
            T = "smarttv",
            A = "wearable",
            w = "embedded",
            b = {
                extend: function(e, t) {
                    var n = {};
                    for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                    return n
                },
                has: function(e, t) {
                    return "string" == typeof e && t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return typeof e === f ? e.replace(/[^\d\.]/g, "").split(".")[0] : a
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            D = {
                rgx: function(e, t) {
                    for (var n, i, r, o, s, u, l = 0; l < t.length && !s;) {
                        var f = t[l],
                            g = t[l + 1];
                        for (n = i = 0; n < f.length && !s;)
                            if (s = f[n++].exec(e))
                                for (r = 0; r < g.length; r++) u = s[++i], o = g[r], typeof o === d && o.length > 0 ? 2 == o.length ? typeof o[1] == c ? this[o[0]] = o[1].call(this, u) : this[o[0]] = o[1] : 3 == o.length ? typeof o[1] !== c || o[1].exec && o[1].test ? this[o[0]] = u ? u.replace(o[1], o[2]) : a : this[o[0]] = u ? o[1].call(this, u, o[2]) : a : 4 == o.length && (this[o[0]] = u ? o[3].call(this, u.replace(o[1], o[2])) : a) : this[o] = u ? u : a;
                        l += 2
                    }
                },
                str: function(e, t) {
                    for (var n in t)
                        if (typeof t[n] === d && t[n].length > 0) {
                            for (var i = 0; i < t[n].length; i++)
                                if (b.has(t[n][i], e)) return n === u ? a : n
                        } else if (b.has(t[n], e)) return n === u ? a : n;
                    return e
                }
            },
            R = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            O = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [h, m],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [h, "Opera Mini"], m
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [h, "Opera"], m
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                    [h, m],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [h, "IE"], m
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [h, m],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [h, "Yandex"], m
                    ],
                    [/(puffin)\/([\w\.]+)/i],
                    [
                        [h, "Puffin"], m
                    ],
                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [h, "UCBrowser"], m
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [h, /_/g, " "], m
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [h, "WeChat"], m
                    ],
                    [/(QQ)\/([\d\.]+)/i],
                    [h, m],
                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [h, m],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [m, [h, "MIUI Browser"]],
                    [/;fbav\/([\w\.]+);/i],
                    [m, [h, "Facebook"]],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [m, [h, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [h, /(.+)/, "$1 WebView"], m
                    ],
                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                    [
                        [h, /(.+(?:g|us))(.+)/, "$1 $2"], m
                    ],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [m, [h, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [h, m],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [h, "Dolphin"], m
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [h, "Chrome"], m
                    ],
                    [/(coast)\/([\w\.]+)/i],
                    [
                        [h, "Opera Coast"], m
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    [m, [h, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [m, [h, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [m, h],
                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                        [h, "GSA"], m
                    ],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [h, [m, D.str, R.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [h, m],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [h, "Netscape"], m
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [h, m]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [E, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [E, b.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [E, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [E, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [E, /ower/, "", b.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [E, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [E, b.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [p, v, [_, S]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [p, [v, "Apple"],
                        [_, S]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [p, "Apple TV"],
                        [v, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [v, p, [_, S]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [p, [v, "Amazon"],
                        [_, S]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [p, D.str, R.device.amazon.model],
                        [v, "Amazon"],
                        [_, y]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [p, v, [_, y]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [p, [v, "Apple"],
                        [_, y]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [v, p, [_, y]],
                    [/\(bb10;\s(\w+)/i],
                    [p, [v, "BlackBerry"],
                        [_, y]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [p, [v, "Asus"],
                        [_, S]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [v, "Sony"],
                        [p, "Xperia Tablet"],
                        [_, S]
                    ],
                    [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                    [p, [v, "Sony"],
                        [_, y]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [v, p, [_, I]],
                    [/android.+;\s(shield)\sbuild/i],
                    [p, [v, "Nvidia"],
                        [_, I]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [p, [v, "Sony"],
                        [_, I]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [v, D.str, R.device.sprint.vendor],
                        [p, D.str, R.device.sprint.model],
                        [_, y]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [v, p, [_, S]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [v, [p, /_/g, " "],
                        [_, y]
                    ],
                    [/(nexus\s9)/i],
                    [p, [v, "HTC"],
                        [_, S]
                    ],
                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                    [p, [v, "Huawei"],
                        [_, y]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [v, p, [_, y]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [p, [v, "Microsoft"],
                        [_, I]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [p, /\./g, " "],
                        [v, "Microsoft"],
                        [_, y]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [p, [v, "Motorola"],
                        [_, y]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [p, [v, "Motorola"],
                        [_, S]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [v, b.trim],
                        [p, b.trim],
                        [_, T]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [p, /^/, "SmartTV"],
                        [v, "Samsung"],
                        [_, T]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [p, [v, "Sharp"],
                        [_, T]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [v, "Samsung"], p, [_, S]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [v, [_, T], p],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [v, "Samsung"], p, [_, y]
                    ],
                    [/sie-(\w+)*/i],
                    [p, [v, "Siemens"],
                        [_, y]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [v, "Nokia"], p, [_, y]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [p, [v, "Acer"],
                        [_, S]
                    ],
                    [/android.+([vl]k\-?\d{3})\s+build/i],
                    [p, [v, "LG"],
                        [_, S]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [v, "LG"], p, [_, S]
                    ],
                    [/(lg) netcast\.tv/i],
                    [v, p, [_, T]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                    [p, [v, "LG"],
                        [_, y]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [p, [v, "Lenovo"],
                        [_, S]
                    ],
                    [/linux;.+((jolla));/i],
                    [v, p, [_, y]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [v, p, [_, A]],
                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                    [v, p, [_, y]],
                    [/crkey/i],
                    [
                        [p, "Chromecast"],
                        [v, "Google"]
                    ],
                    [/android.+;\s(glass)\s\d/i],
                    [p, [v, "Google"],
                        [_, A]
                    ],
                    [/android.+;\s(pixel c)\s/i],
                    [p, [v, "Google"],
                        [_, S]
                    ],
                    [/android.+;\s(pixel xl|pixel)\s/i],
                    [p, [v, "Google"],
                        [_, y]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],
                    [
                        [p, /_/g, " "],
                        [v, "Xiaomi"],
                        [_, y]
                    ],
                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],
                    [
                        [p, /_/g, " "],
                        [v, "Xiaomi"],
                        [_, S]
                    ],
                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                    [p, [v, "Meizu"],
                        [_, S]
                    ],
                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                    [p, [v, "OnePlus"],
                        [_, y]
                    ],
                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                    [p, [v, "RCA"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],
                    [p, [v, "Dell"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                    [p, [v, "Verizon"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                    [
                        [v, "Barnes & Noble"], p, [_, S]
                    ],
                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                    [p, [v, "NuVision"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],
                    [
                        [v, "ZTE"], p, [_, S]
                    ],
                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                    [p, [v, "Swiss"],
                        [_, y]
                    ],
                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                    [p, [v, "Swiss"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                    [p, [v, "Zeki"],
                        [_, S]
                    ],
                    [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],
                    [
                        [v, "Dragon Touch"], p, [_, S]
                    ],
                    [/android.+[;\/]\s*(NS-?.+)\s+build/i],
                    [p, [v, "Insignia"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],
                    [p, [v, "NextBook"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                    [
                        [v, "Voice"], p, [_, y]
                    ],
                    [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],
                    [
                        [v, "LvTel"], p, [_, y]
                    ],
                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                    [p, [v, "Envizen"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],
                    [v, p, [_, S]],
                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                    [p, [v, "MachSpeed"],
                        [_, S]
                    ],
                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                    [v, p, [_, S]],
                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                    [p, [v, "Rotor"],
                        [_, S]
                    ],
                    [/android.+(KS(.+))\s+build/i],
                    [p, [v, "Amazon"],
                        [_, S]
                    ],
                    [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],
                    [v, p, [_, S]],
                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [_, b.lowerize], v, p
                    ],
                    [/(android.+)[;\/].+build/i],
                    [p, [v, "Generic"]]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [m, [h, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [h, m],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [m, h]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [h, m],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [h, [m, D.str, R.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [h, "Windows"],
                        [m, D.str, R.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [h, "BlackBerry"], m
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [h, m],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [h, "Symbian"], m
                    ],
                    [/\((series40);/i],
                    [h],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [h, "Firefox OS"], m
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [h, m],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [h, "Chromium OS"], m
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [h, "Solaris"], m
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [h, m],
                    [/(haiku)\s(\w+)/i],
                    [h, m],
                    [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                    [
                        [m, /_/g, "."],
                        [h, "iOS"]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [h, "Mac OS"],
                        [m, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                    [h, m]
                ]
            },
            N = function(e, t) {
                if ("object" == typeof e && (t = e, e = a), !(this instanceof N)) return new N(e, t).getResult();
                var n = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : s),
                    i = t ? b.extend(O, t) : O;
                return this.getBrowser = function() {
                    var e = {
                        name: a,
                        version: a
                    };
                    return D.rgx.call(e, n, i.browser), e.major = b.major(e.version), e
                }, this.getCPU = function() {
                    var e = {
                        architecture: a
                    };
                    return D.rgx.call(e, n, i.cpu), e
                }, this.getDevice = function() {
                    var e = {
                        vendor: a,
                        model: a,
                        type: a
                    };
                    return D.rgx.call(e, n, i.device), e
                }, this.getEngine = function() {
                    var e = {
                        name: a,
                        version: a
                    };
                    return D.rgx.call(e, n, i.engine), e
                }, this.getOS = function() {
                    var e = {
                        name: a,
                        version: a
                    };
                    return D.rgx.call(e, n, i.os), e
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return n
                }, this.setUA = function(e) {
                    return n = e, this
                }, this
            };
        N.VERSION = o, N.BROWSER = {
            NAME: h,
            MAJOR: g,
            VERSION: m
        }, N.CPU = {
            ARCHITECTURE: E
        }, N.DEVICE = {
            MODEL: p,
            VENDOR: v,
            TYPE: _,
            CONSOLE: I,
            MOBILE: y,
            SMARTTV: T,
            TABLET: S,
            WEARABLE: A,
            EMBEDDED: w
        }, N.ENGINE = {
            NAME: h,
            VERSION: m
        }, N.OS = {
            NAME: h,
            VERSION: m
        }, typeof t !== l ? (typeof e !== l && e.exports && (t = e.exports = N), t.UAParser = N) : "function" === c && n(170) ? (i = function() {
            return N
        }.call(t, n, t, e), !(i !== a && (e.exports = i))) : r && (r.UAParser = N)
    })("object" == typeof window ? window : this)
}), (function(e, t) {
    (function(t) {
        e.exports = t
    }).call(t, {})
}), (function(e, t) {
    e.exports = {
        provides: "browserId",
        shouldTrack: !0,
        isSticky: !0,
        getter: ["sources/browser_id", function(e) {
            return e.getId()
        }]
    }
}), (function(e, t) {
    e.exports = {
        provides: "browserVersion",
        getter: ["sources/browser_id", function(e) {
            return e.getVersion()
        }]
    }
}), (function(e, t, n) {
    var i = n(174).compareVersion;
    e.exports = {
        fieldsNeeded: ["browserVersion", "browserId"],
        match: function(e, t) {
            var n = t.value,
                r = e.browserId,
                a = e.browserVersion;
            if (0 === n.indexOf(r)) {
                var o = n.substr(r.length);
                return 0 === i(a, o)
            }
            return !1
        }
    }
}), (function(e, t, n) {
    var i = n(2);
    t.compareVersion = function(e, t) {
        if (!t) return 0;
        for (var n = t.toString().split("."), r = e.toString().split("."), a = 0; a < n.length; a++) {
            if (i.isUndefined(r[a])) return -1;
            if (isNaN(Number(r[a]))) {
                if (r[a] !== n[a]) return -1
            } else {
                if (Number(r[a]) < Number(n[a])) return -1;
                if (Number(r[a]) > Number(n[a])) return 1
            }
        }
        return 0
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(176)), e.registerAudienceMatcher("campaign", n(177))
    }
}), (function(e, t, n) {
    var i = n(119);
    e.exports = {
        provides: "campaign",
        shouldTrack: !0,
        isSticky: !0,
        getter: [function() {
            return i.getQueryParamValue("utm_campaign")
        }]
    }
}), (function(e, t, n) {
    var i = n(20);
    e.exports = {
        fieldsNeeded: ["campaign"],
        match: function(e, t) {
            return i.hasMatch(t.value, t.match, e.campaign)
        }
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(179));
        var t = n(180);
        e.registerAudienceMatcher("custom_attribute", t), e.registerAudienceMatcher("custom_dimension", t)
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(25),
        a = n(23),
        o = n(16),
        s = o.get("stores/dimension_data");
    e.exports = {
        provides: "custom",
        attributionType: r.AttributionTypes.LAST_TOUCH,
        restorer: function(e) {
            return i.reduce(e, (function(e, t, n) {
                var r = t,
                    o = n,
                    u = s.getByApiName(n),
                    c = s.getById(n);
                return i.isObject(t) && !t.id && (u && !c ? (o = u.id, r = {
                    id: u.segmentId || u.id,
                    value: t.value
                }) : c || a.warn("Unable to determine ID for custom attribute:", n, "; segmentation is disabled.")), e[o] = r, e
            }), {})
        },
        shouldTrack: !0
    }
}), (function(e, t, n) {
    var i = n(2),
        r = n(20);
    t.match = function(e, t) {
        var n;
        return e.custom && (n = e.custom[t.name]), i.isObject(n) && (n = n.value), r.hasMatch(t.value, t.match, n)
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerDependency("sources/device", n(182)), e.registerVisitorProfileProvider(n(183)), e.registerAudienceMatcher("device", n(184))
    }
}), (function(e, t, n) {
    var i = n(167);
    t.getDevice = function() {
        var e = i.get().device;
        return "unknown" !== e.model ? e.model : "tablet" === e.type ? "tablet" : e.isMobile ? "mobile" : "desktop"
    }
}), (function(e, t) {
    e.exports = {
        provides: "device",
        shouldTrack: !0,
        isSticky: !0,
        getter: ["sources/device", function(e) {
            return e.getDevice()
        }]
    }
}), (function(e, t) {
    e.exports = {
        fieldsNeeded: ["device"],
        match: function(e, t) {
            return e.device === t.value
        }
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(186)), e.registerAudienceMatcher("device_type", n(187))
    }
}), (function(e, t, n) {
    var i = n(167);
    e.exports = {
        provides: "device_type",
        shouldTrack: !0,
        isSticky: !0,
        getter: [function() {
            var e = i.get().device;
            switch (e.type) {
                case "mobile":
                    return "phone";
                case "tablet":
                case "desktop_laptop":
                    return e.type;
                default:
                    return "other"
            }
        }]
    }
}), (function(e, t) {
    e.exports = {
        fieldsNeeded: ["device_type"],
        match: function(e, t) {
            return e.device_type === t.value
        }
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(189)), e.registerAudienceMatcher("referrer", n(190))
    }
}), (function(e, t, n) {
    var i = n(81),
        r = n(99);
    e.exports = {
        provides: "referrer",
        shouldTrack: !0,
        isSticky: !0,
        getter: [function() {
            var e = r.getReferrer() || i.getReferrer();
            return "" === e && (e = null), e
        }]
    }
}), (function(e, t, n) {
    var i = n(191);
    t.fieldsNeeded = ["referrer"], t.match = function(e, t) {
        return null !== e.referrer && i(e.referrer, t)
    }
}), (function(e, t, n) {
    function i(e) {
        var t = e.indexOf("?");
        return t !== -1 && (e = e.substring(0, t)), t = e.indexOf("#"), t !== -1 && (e = e.substring(0, t)), e
    }

    function r(e) {
        return a(i(e))
    }

    function a(e, t) {
        e = e.replace("/?", "?"), e = e.toLowerCase().replace(/[\/&?]+$/, "");
        var n = l.slice(0);
        t || (n = n.concat(u));
        for (var i = n.length, r = 0; r < i; r++) {
            var a = n[r],
                o = new RegExp("^" + a);
            e = e.replace(o, "")
        }
        return e
    }

    function o(e) {
        var t = e.split("?");
        if (t[1]) {
            var n = t[1].split("#"),
                i = n[0],
                r = n[1],
                a = i.split("&"),
                o = [];
            return s.each(a, (function(e) {
                0 !== e.indexOf(c) && o.push(e)
            })), t[1] = "", o.length > 0 && (t[1] = "?" + o.join("&")), r && (t[1] += "#" + r), t.join("")
        }
        return e
    }
    var s = n(2);
    e.exports = function(e, t) {
        e = o(e);
        var n = t.value;
        switch (t.match) {
            case "exact":
                return e = a(e), e === a(n);
            case "regex":
                try {
                    return Boolean(e.match(n))
                } catch (e) {}
                return !1;
            case "simple":
                return e = r(e), n = r(n), e === n;
            case "substring":
                return e = a(e, !0), n = a(n, !0), e.indexOf(n) !== -1;
            default:
                return !1
        }
    };
    var u = ["www."],
        c = "optimizely_",
        l = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"]
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(193)), e.registerAudienceMatcher("source_type", n(195))
    }
}), (function(e, t, n) {
    var i = n(119),
        r = n(81),
        a = n(99),
        o = n(194),
        s = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www)?\\.google\\..*?/$", "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];
    e.exports = {
        provides: "source_type",
        shouldTrack: !0,
        isSticky: !1,
        getter: [function() {
            return function(e, t) {
                var n = function() {
                        if (i.getQueryParamValue("utm_source") || i.getQueryParamValue("gclid") || i.getQueryParamValue("otm_source")) return "campaign";
                        for (var e = a.getReferrer() || r.getReferrer(), t = 0; t < s.length; t++) {
                            var n = s[t],
                                u = e.match(n);
                            if (u) return "search"
                        }
                        return e && o.guessDomain(e) !== o.guessDomain(i.getUrl()) ? "referral" : "direct"
                    },
                    u = function(e, t) {
                        return !e || "direct" !== t
                    },
                    c = e(),
                    l = n();
                u(c, l) && t(l)
            }
        }]
    }
}), (function(e, t) {
    t.guessDomain = function(e, t) {
        if (!e) return "";
        try {
            return t ? e.match(/:\/\/(.[^\/]+)/)[1] : e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]
        } catch (e) {
            return ""
        }
    }
}), (function(e, t, n) {
    var i = n(20);
    t.fieldsNeeded = ["source_type"], t.match = function(e, t) {
        return i.hasMatch(t.value, t.match, e.source_type)
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerVisitorProfileProvider(n(197)), e.registerVisitorProfileProvider(n(198)), e.registerAudienceMatcher("time_and_day", n(199))
    }
}), (function(e, t, n) {
    var i = n(24);
    e.exports = {
        provides: "currentTimestamp",
        shouldTrack: !0,
        isLazy: !0,
        getter: [function() {
            return i.now()
        }]
    }
}), (function(e, t) {
    e.exports = {
        provides: "offset",
        shouldTrack: !0,
        isLazy: !0,
        getter: [function() {
            return (new Date).getTimezoneOffset()
        }]
    }
}), (function(e, t, n) {
    var i = n(200);
    t.fieldsNeeded = ["currentTimestamp"], t.match = function(e, t) {
        return i.test(t.value, new Date(e.currentTimestamp))
    }
}), (function(e, t, n) {
    function i(e) {
        var t = e.split(o);
        if (3 !== t.length) throw new Error("Invalid time and day string " + e);
        var n = t[2].split(s);
        return {
            start_time: t[0],
            end_time: t[1],
            days: n
        }
    }

    function r(e) {
        var t = e.split(u);
        if (2 !== t.length) throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + e);
        return 60 * parseInt(t[0], 10) + parseInt(t[1], 10)
    }
    var a = n(2),
        o = "_",
        s = ",",
        u = ":";
    t.test = function(e, t) {
        var n = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            o = i(e),
            s = r(o.start_time),
            u = r(o.end_time),
            c = 60 * t.getHours() + t.getMinutes(),
            l = n[t.getDay()];
        return c >= s && c <= u && a.includes(o.days, l)
    }
}), (function(e, t, n) {
    function i(e) {
        function t(e, t, n) {
            try {
                u(t), e[n] = t
            } catch (e) {
                C.emitError(new W("Bad value for eventTags[" + n + "]: " + e.message))
            }
            return e
        }
        var n = N.keys(ie),
            i = N.omit(e, n),
            r = N.pick(e, n),
            a = N.reduce(i, t, {}),
            o = N.reduce(r, (function(e, n, i) {
                var r = ie[i];
                r.excludeFeature || t(a, n, i);
                try {
                    r.validate(n), e[i] = r.sanitize(n), a[i] = e[i]
                } catch (e) {
                    C.emitError(new W("Bad value for eventMetrics[" + i + "]: " + e.message))
                }
                return e
            }), {});
        return o.tags = a, o
    }

    function r(e) {
        var t = N.extend({
            entity_id: e.pageId,
            key: e.pageId,
            timestamp: e.timestamp,
            uuid: e.eventId,
            type: J
        }, i(e.eventTags));
        return t
    }

    function a(e) {
        return N.extend({
            entity_id: e.event.id,
            key: e.event.apiName,
            timestamp: e.timestamp,
            uuid: e.eventId,
            type: e.event.category
        }, i(e.eventTags))
    }

    function o(e) {
        return N.extend({
            entity_id: e.eventEntityId,
            key: e.eventApiName,
            timestamp: e.timestamp,
            uuid: e.eventId,
            type: e.eventCategory
        }, i(e.eventTags))
    }

    function s(e) {
        return {
            entity_id: null,
            type: Q,
            uuid: e.eventId,
            timestamp: e.timestamp
        }
    }

    function u(e) {
        if (null == e) throw new Error("Feature value is null");
        if ("object" == typeof e) {
            var t;
            try {
                t = x.stringify(e)
            } catch (e) {}
            throw new Error('Feature value is complex: "' + t || '[object]"')
        }
    }

    function c(e) {
        if (null == e) throw new Error("Metric value is null");
        if (!N.isNumber(e)) throw new Error("Metric value is not numeric")
    }

    function l(e) {
        return N.reduce(e, (function(e, t) {
            try {
                u(t.value), e.push({
                    entity_id: t.id || null,
                    key: t.name,
                    type: t.type,
                    value: t.value
                })
            } catch (e) {
                F.warn("Error evaluating user feature", t, e)
            }
            return e
        }), [])
    }

    function d(e, t, n) {
        Y.dispatch(V.REGISTER_TRACKER_EVENT, {
            event: e,
            decisions: n
        }), f(t), D()
    }

    function f(e) {
        var t = l(e);
        Y.dispatch(V.UPDATE_TRACKER_VISITOR_ATTRIBUTES, {
            attributes: t
        })
    }

    function g(e) {
        var t = l(e.userFeatures),
            n = {
                account_id: e.accountId,
                anonymize_ip: e.anonymizeIP,
                client_name: e.clientName,
                client_version: e.clientVersion,
                project_id: e.projectId,
                visitors: [{
                    session_id: h(e.sessionId),
                    visitor_id: e.visitorId,
                    attributes: t,
                    snapshots: [{
                        decisions: [{
                            campaign_id: e.layerId,
                            experiment_id: e.experimentId,
                            variation_id: e.variationId,
                            is_campaign_holdback: e.isLayerHoldback
                        }],
                        events: [{
                            uuid: e.decisionId,
                            entity_id: e.layerId,
                            timestamp: e.timestamp,
                            type: $
                        }]
                    }]
                }]
            };
        Y.dispatch(V.REGISTER_PREVIOUS_BATCH, n), D()
    }

    function p(e) {
        var t = N.isNull(q.getAnonymizeIP()) ? void 0 : q.getAnonymizeIP(),
            n = {
                account_id: e.accountId,
                anonymize_ip: t,
                client_name: e.clientName,
                client_version: e.clientVersion,
                project_id: e.projectId,
                visitors: []
            };
        n.revision = e.revision, ee && (n.enrich_decisions = !0);
        var i = {
                session_id: h(e.sessionId),
                visitor_id: e.visitorId,
                attributes: [],
                snapshots: []
            },
            r = R(e.layerStates);
        Y.dispatch(V.REGISTER_TRACKER_VISITOR, {
            data: n,
            visitor: i,
            decisions: r
        }), D()
    }

    function h(e) {
        return se ? oe : e
    }

    function _(e) {
        var t = {
            entity_id: e.layerId,
            type: $,
            uuid: e.decisionId,
            timestamp: e.timestamp
        };
        Y.dispatch(V.REGISTER_TRACKER_DECISION, {
            decisionEvent: t,
            decisions: R(e.layerStates)
        }), f(e.userFeatures), D()
    }

    function v() {
        if (!X.canSend()) return void F.debug("Not sending events (holding)");
        var e = X.hasEventsToSend(),
            t = X.hasPreviousBatchesToSend();
        return e || t ? (t && (N.each(X.getPreviousBatches(), m), Y.dispatch(V.RESET_TRACKER_PREVIOUS_BATCHES)), void(e && (Y.dispatch(V.FINALIZE_BATCH_SNAPSHOT), m(X.getEventBatch()), Y.dispatch(V.RESET_TRACKER_EVENTS)))) : void F.debug("Not sending events because there are no events to send")
    }

    function m(e) {
        F.debug("Sending ticket:", e);
        var t = P.generate();
        B.retryableRequest({
            url: L,
            method: "POST",
            data: E(e)
        }, t)
    }

    function E(e) {
        var t = N.extend({}, N.pick(e, ["account_id", "anonymize_ip", "client_name", "client_version", "enrich_decisions", "project_id", "revision"]), {
            visitors: N.map(e.visitors, I)
        });
        return t
    }

    function I(e) {
        return {
            visitor_id: e.visitor_id,
            session_id: oe,
            attributes: N.map(e.attributes, y),
            snapshots: N.map(e.snapshots, S)
        }
    }

    function y(e) {
        return b(e, {
            entity_id: "e",
            key: "k",
            type: "t",
            value: "v"
        })
    }

    function S(e) {
        var t = e.events;
        return t = T(t), {
            activationTimestamp: q.getActivationTimestamp(),
            decisions: N.map(e.decisions, A),
            events: N.map(t, w)
        }
    }

    function T(e) {
        var t = N.reduce(e, (function(e, t) {
            var n;
            if (n = t.type !== J || !N.isEmpty(t.tags) || !N.isEmpty(N.pick(t, N.keys(ie))) || t.key && t.entity_id !== t.key ? t.uuid : t.type, e[n]) {
                var i = e[n].timestamp;
                t.timestamp > i && (i = t.timestamp), e[n] = N.extend({}, e[n], {
                    key: Z,
                    entity_id: e[n].entity_id + "-" + t.entity_id,
                    timestamp: i
                })
            } else e[n] = t;
            return e
        }), {});
        return N.values(t)
    }

    function A(e) {
        return b(e, {
            campaign_id: "c",
            experiment_id: "x",
            is_campaign_holdback: "h",
            variation_id: "v"
        })
    }

    function w(e) {
        return e.key === $ && (e.type = $, delete e.key), b(e, {
            entity_id: "e",
            key: "k",
            quantity: "q",
            revenue: "$",
            tags: "a",
            timestamp: "t",
            uuid: "u",
            value: "v",
            type: "y"
        })
    }

    function b(e, t) {
        return N.reduce(e, (function(e, n, i) {
            return i in t && (e[t[i] || i] = n), e
        }), {})
    }

    function D() {
        function e() {
            var t = !re || j.isLoaded();
            t && v(), X.isPolling() && G.setTimeout(e, ne)
        }
        return X.shouldBatch() ? void(X.isPolling() || (G.setTimeout(e, ne), Y.dispatch(V.SET_TRACKER_POLLING, !0), G.setTimeout((function() {
            Y.dispatch(V.SET_TRACKER_BATCHING, !1), Y.dispatch(V.SET_TRACKER_POLLING, !1)
        }), te))) : void v()
    }

    function R(e) {
        return N.map(e, (function(e) {
            return {
                campaign_id: e.layerId,
                experiment_id: e.decision.experimentId,
                variation_id: e.decision.variationId,
                is_campaign_holdback: e.decision.isLayerHoldback
            }
        }))
    }

    function O() {
        var e = X.getPersistableState();
        if (e) try {
            F.debug("Persisting pending batch:", e), U.persistTrackerOptimizelyData(e), Y.dispatch(V.SET_TRACKER_DIRTY, !1)
        } catch (e) {
            F.debug("Failed to persist pending batch:", e)
        }
    }
    var N = n(2),
        C = n(86),
        P = n(5),
        L = "https://logx.optimizely.com/v1/events",
        V = n(7),
        k = n(77).create,
        x = n(26),
        F = n(23),
        M = n(115),
        U = n(75),
        G = n(41),
        B = n(91),
        z = n(16),
        j = n(81),
        H = n(87),
        K = n(111),
        Y = n(9),
        q = z.get("stores/global"),
        X = z.get("stores/tracker_optimizely"),
        W = t.Error = k("OptimizelyTrackerError"),
        Q = "client_activation",
        $ = "campaign_activated",
        J = "view_activated",
        Z = "multi-event",
        ee = !1,
        te = 1e4,
        ne = 1e3,
        ie = {
            revenue: {
                validate: c,
                sanitize: Math.floor,
                excludeFeature: !0
            },
            quantity: {
                validate: c,
                sanitize: Math.floor,
                excludeFeature: !0
            },
            value: {
                validate: c,
                sanitize: N.identity
            }
        },
        re = !1,
        ae = !1,
        oe = "AUTO",
        se = !0,
        ue = [function() {
            return function(e) {
                _(N.extend(e, e.decision))
            }
        }],
        ce = function(e) {
            e.timing === M.TrackLayerDecisionTimingFlags.postRedirectPolicy ? g(e) : _(e)
        },
        le = [function() {
            return function(e) {
                d(r(e), e.userFeatures, R(e.layerStates))
            }
        }],
        de = [function() {
            return function(e) {
                p(e), d(s(e), e.userFeatures, R(e.layerStates))
            }
        }],
        fe = [function() {
            return function(e) {
                d(o(e), e.userFeatures, R(e.layerStates))
            }
        }],
        ge = [function() {
            return function(e) {
                d(a(e), e.userFeatures, R(e.layerStates))
            }
        }],
        pe = {
            onLayerDecision: ue,
            trackLayerDecision: ce,
            postRedirectPolicy: M.PostRedirectPolicies.TRACK_AFTER_SYNC,
            nonRedirectPolicy: M.NonRedirectPolicies.TRACK_IMMEDIATELY,
            onPageActivated: le,
            onClientActivation: de,
            onClickEvent: ge,
            onCustomEvent: fe
        };
    e.exports = function(e) {
        e.registerAnalyticsTracker("optimizely", pe), H.on({
            filter: {
                type: K.TYPES.ANALYTICS,
                name: "sendEvents"
            },
            handler: function() {
                Y.dispatch(V.SET_TRACKER_SEND_EVENTS, !0), X.isPolling() || v()
            }
        }), H.on({
            filter: {
                type: K.TYPES.ANALYTICS,
                name: "holdEvents"
            },
            handler: function() {
                Y.dispatch(V.SET_TRACKER_SEND_EVENTS, !1)
            }
        }), Y.dispatch(V.SET_TRACKER_SEND_EVENTS, !ae);
        var t = H.on({
            filter: {
                type: "lifecycle",
                name: "activated"
            },
            handler: function() {
                X.observe(O), H.off(t)
            }
        })
    }
}), (function(e, t, n) {
    e.exports = function(e) {
        e.registerViewProvider(n(203)), e.registerViewMatcher("url", n(204))
    }
}), (function(e, t, n) {
    var i = n(119);
    e.exports = {
        provides: "url",
        getter: [function() {
            return i.getUrl()
        }]
    }
}), (function(e, t, n) {
    var i = n(191);
    e.exports = {
        fieldsNeeded: ["url"],
        match: function(e, t) {
            return i(e.url, t)
        }
    }
}), (function(e, t, n) {
    function i(e) {
        return "apiName: " + e.apiName + ", selector: " + e.eventFilter.selector
    }
    var r = n(110),
        a = n(206),
        o = n(23),
        s = n(124);
    e.exports = function(e) {
        var t = new a(function(e) {
            s.updateAllViewTags();
            var t = r.trackClickEvent(e);
            t ? o.log("Tracking click event:", e) : o.log("Not tracking click event:", e)
        });
        e.registerEventImplementation("click", {
            attach: function(e) {
                t.hasEvents() || t.listen(), t.addEvent(e), o.debug("Started listening for click event (" + i(e) + "):", e)
            },
            detach: function(e) {
                t.removeEvent(e), t.hasEvents() || t.unlisten(), o.debug("Stopped listening for click event (" + i(e) + "):", e)
            }
        })
    }
}), (function(e, t, n) {
    function i(e) {
        this.handler = e, this.events = [], this.unlistenFn = null, this.clickHandler = a.bind((function(e) {
            a.forEach(this.events, a.bind((function(t) {
                try {
                    var n = t.config && t.config.selector ? t.config.selector : t.eventFilter.selector;
                    r(e, n, t) && this.handler(t)
                } catch (e) {
                    o.emitError(new l("Unable to handle click for selector" + n + ":" + e.message))
                }
            }), this))
        }), this)
    }

    function r(e, t, n) {
        for (var i = e.target, r = 0; i;) {
            var s;
            try {
                s = c(i, t)
            } catch (s) {
                var u = {
                    typeofElementValue: typeof i,
                    nodeName: a.result(i, ["nodeName"], null),
                    nodeType: a.result(i, ["nodeType"], null),
                    targetName: a.result(e, ["target", "nodeName"], null),
                    targetType: a.result(e, ["target", "nodeType"], null),
                    numParentsTraversed: r,
                    selector: t,
                    errorMessage: s.message,
                    eventId: n.id
                };
                return o.emitError(new l("Unable to evaluate match for element"), u), !1
            }
            if (s) return !0;
            i = i.parentElement, r++
        }
        return !1
    }
    var a = n(2),
        o = n(86),
        s = n(77).create,
        u = n(81),
        c = n(207),
        l = t.Error = s("ClickDelegateError");
    i.prototype.listen = function() {
        this.unlistenFn = u.addEventListener("click", this.clickHandler, !0)
    }, i.prototype.unlisten = function() {
        this.unlistenFn && (this.unlistenFn(), this.unlistenFn = null)
    }, i.prototype.hasEvents = function() {
        return this.events.length > 0
    }, i.prototype.addEvent = function(e) {
        this.events.push(e)
    }, i.prototype.removeEvent = function(e) {
        this.events = a.filter(this.events, (function(t) {
            return t.apiName !== e.apiName
        }))
    }, e.exports = i
}), (function(e, t, n) {
    e.exports = n(208)
}), (function(e, t) {
    "use strict";

    function n(e, t) {
        if (r) return r.call(e, t);
        for (var n = e.parentNode.querySelectorAll(t), i = 0; i < n.length; i++)
            if (n[i] == e) return !0;
        return !1
    }
    var i = Element.prototype,
        r = i.matches || i.matchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector;
    e.exports = n
})]);