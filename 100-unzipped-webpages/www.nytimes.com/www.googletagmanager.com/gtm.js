// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "338",

            "macros": [{
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nytAnalytics.derivedReferrer.source?nytAnalytics.derivedReferrer.source:\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.subchannel?nytAnalytics.derivedReferrer.subchannel:\"null\";return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.derivedDesk"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 2], 8, 16], "?", ["escape", ["macro", 2], 8, 16], ":\"null\";return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.type?nytAnalytics.derivedReferrer.type:\"null\";return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.channel?nytAnalytics.derivedReferrer.channel:\"null\";return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.publishedTimestamp"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"year\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"date\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"day\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"hours\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"month\"):\"null\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 100\u003E", ["escape", ["macro", 12], 8, 16], "?\"blurb_under_100\":400\u003E", ["escape", ["macro", 12], 8, 16], "?\"super_short_100_399\":800\u003E", ["escape", ["macro", 12], 8, 16], "?\"short_400_799\":1200\u003E", ["escape", ["macro", 12], 8, 16], "?\"medium_800_1199\":1600\u003E=", ["escape", ["macro", 12], 8, 16], "?\"long_1200_1600\":1600\u003C", ["escape", ["macro", 12], 8, 16], "?\"heave_over_1600\":\"\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 14], 8, 16], "?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 16], 8, 16], "?1:0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 14], 8, 16], "?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.eventName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoCustomMetrics=window.nytAnalytics.videoCustomMetrics||{\"auto-play-next\":32,\"auto-play-start\":31,\"percent-25-viewed\":24,\"percent-50-viewed\":25,\"percent-75-viewed\":26,\"3-seconds-viewed\":42,\"30-seconds-viewed\":43,\"360-drag-start\":58,\"360-drag-stop\":59,\"360-compass-click\":60,\"share-embed\":4,\"share-facebook\":4,\"share-twitter\":4,\"user-play\":1,\"video-complete\":3,\"user-play-audio\":34,\"percent-25-heard\":35,\"percent-50-heard\":36,\n\"percent-75-heard\":37,\"audio-complete\":38,\"audio-inview\":63};return window.nytAnalytics.videoCustomMetrics[", ["escape", ["macro", 19], 8, 16], "]||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoActions=window.nytAnalytics.videoActions||{\"ad-complete\":\"ad complete\",\"ad-pause\":\"ad pause\",\"ad-resume\":\"ad resume\",\"ad-start\":\"ad start\",\"exit-fullscreen\":\"exit fullscreen\",\"go-fullscreen\":\"go fullscreen\",\"hd-off\":\"hd off\",\"hd-on\":\"hd on\",pause:\"pause\",resume:\"resume\",\"skip-ad\":\"ad skip\",\"video-load\":\"video load\",\"video-inview\":\"video inview\",\"auto-play-next\":\"autoplay next\",\"auto-play-start\":\"autoplay start\",\"percent-25-viewed\":\"viewed: 25%\",\n\"percent-50-viewed\":\"viewed: 50%\",\"percent-75-viewed\":\"viewed: 75%\",\"3-seconds-viewed\":\"3-seconds-viewed\",\"30-seconds-viewed\":\"30-seconds-viewed\",\"360-drag-start\":\"360-drag-start\",\"360-drag-stop\":\"360-drag-stop\",\"360-compass-click\":\"360-compass-click\",\"share-embed\":\"share: embed\",\"share-facebook\":\"share: facebook\",\"share-twitter\":\"share: twitter\",seek:\"seek\",\"user-play\":\"user play\",\"video-complete\":\"viewed:100%\",\"media-error\":\"media-error\",\"cherry-api-request-error\":\"cherry-api-request-error\",\"fw-admanager-load-error\":\"fw-admanager-load-error\",\n\"qos-library-load-failure\":\"qos-library-load-failure\",\"rendition-not-found\":\"rendition-not-found\",\"player-load\":\"player load\",\"imax-countdown-pause\":\"imax-countdown-pause\",\"imax-countdown-complete\":\"imax-countdown-complete\"};return window.nytAnalytics.videoActions[", ["escape", ["macro", 19], 8, 16], "]||", ["escape", ["macro", 19], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDeliveryMethod"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return(\"live\"===", ["escape", ["macro", 22], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 23], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return decodeURIComponent(", ["escape", ["macro", 25], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoNonInteractions=window.nytAnalytics.videoNonInteractions||{\"cherry-api-request-error\":!0,\"fw-admanager-load-error\":!0,\"qos-library-load-failure\":!0,\"rendition-not-found\":!0,\"player-load\":!0,\"video-inview\":!0,\"imax-countdown-pause\":!0,\"imax-countdown-complete\":!0};return window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 19], 8, 16], "]||!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){notprod=!document.location.hostname.match(\/nytimes\\.com\/)||!!document.location.hostname.match(\/test\\.|dev\\.|stg\\.\/);switch(", ["escape", ["macro", 28], 8, 16], "){case \"nyt-help\":return\"UA-58630905-28\";default:return notprod?\"UA-58630905-7\":\"UA-58630905-2\"}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 30], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof pageEventTracker})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.errors"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 33], 8, 16], "||{};return JSON.stringify(a).substr(0,128)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 28], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('meta[name\\x3d\"applicationName\"]');return a?a.content:\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 2], 8, 16], "?", ["escape", ["macro", 2], 8, 16], ":\"null\";return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionStart"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=new Date(", ["escape", ["macro", 38], 8, 16], ");return a=a.getHours()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return Date.now()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module.ga.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].action\u0026\u0026window.nytAnalytics.gaEvent[a].action()||", ["escape", ["macro", 44], 8, 16], "||", ["escape", ["macro", 45], 8, 16], "||", ["escape", ["macro", 46], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventCategory"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].category\u0026\u0026window.nytAnalytics.gaEvent[a].category()||", ["escape", ["macro", 48], 8, 16], "||a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.label"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].label\u0026\u0026window.nytAnalytics.gaEvent[a].label()||", ["escape", ["macro", 50], 8, 16], "||", ["escape", ["macro", 51], 8, 16], "||", ["escape", ["macro", 52], 8, 16], "||", ["escape", ["macro", 53], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return{}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.scrollTop"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.height"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.width"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(\"object\"!==typeof window.nytAnalytics)return\"\";var a=", ["escape", ["macro", 57], 8, 16], "||\"\";a=a.toLowerCase();window.nytAnalytics.comScorePage=window.nytAnalytics.comScorePage||1;if(!a||\"oak\"===a||\"article\"===a){a=window.nytAnalytics.comScorePage;var c=", ["escape", ["macro", 58], 8, 16], ",b=", ["escape", ["macro", 59], 8, 16], ",d=768\u003E", ["escape", ["macro", 60], 8, 16], ";b=d?4*b:2*b;window.nytAnalytics.comScorePage=Math.floor(c\/b)+1;return window.nytAnalytics.comScorePage!==a?\"track\":\"\"}})();"]
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "gclid",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "dclid",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 30], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname,a=\"\";", ["escape", ["macro", 62], 8, 16], "\u0026\u0026(a+=\"?gclid\\x3d\"+", ["escape", ["macro", 62], 8, 16], ");", ["escape", ["macro", 63], 8, 16], "\u0026\u0026(a+=(\"\"===a?\"?\":\"\\x26\")+\"dclid\\x3d\"+", ["escape", ["macro", 63], 8, 16], ");return\"\"===a?b:b+a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.ga.eventValue"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].value\u0026\u0026window.nytAnalytics.gaEvent[a].value()||", ["escape", ["macro", 65], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return navigator.userAgent.match(\/iPhone|iPad\/i)?1:0})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-m"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var g=function(a,c){var b=(new RegExp(a+\"\\x3d([il]{1}).([^\\x26]+)\")).exec(c);if(b\u0026\u00263\u003C=b.length)switch(b[1]){case \"i\":return parseInt(b[2],10);case \"l\":return b[2].split(\".\").slice(1).map(function(a){return parseInt(a,10)})}return null},a,d={},e=", ["escape", ["macro", 68], 8, 16], ";if(e){var c=[\"v\",\"t\"];for(a=0;a\u003Cc.length;a++){var f=g(c[a],e);null!==f\u0026\u0026(d[c[a]]=f)}}return d})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\/OS 10_3_3.*CriOS\\\/[\\d\\.]+ Mobile\/.test(navigator.userAgent)?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.trigger"
            }, {
                "function": "__u",
                "vtp_stripWww": false,
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1;if(", ["escape", ["macro", 43], 8, 16], "||", ["escape", ["macro", 71], 8, 16], "===\"module\")return 1;if(", ["escape", ["macro", 72], 8, 16], ".indexOf(\"alpha\")\u003E-1)return 1;return 0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PST?nytAnalytics.pagemeta.PST.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PT?nytAnalytics.pagemeta.PT.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.SCG?nytAnalytics.pagemeta.SCG.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.CG?nytAnalytics.pagemeta.CG.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=", ["escape", ["macro", 52], 8, 16], ",a=", ["escape", ["macro", 46], 8, 16], ",b=", ["escape", ["macro", 43], 8, 16], ";if(\"share-tools\"===b\u0026\u0026a){if(-1\u003Ca.indexOf(\"facebook\"))return 14;if(-1\u003Ca.indexOf(\"twitter\"))return 15;if(-1\u003Ca.indexOf(\"email\"))return 16;if(-1\u003Ca.indexOf(\"pinterest\"))return 17;if(-1\u003Ca.indexOf(\"linkedin\"))return 18;if(-1\u003Ca.indexOf(\"google\"))return 19;if(-1\u003Ca.indexOf(\"reddit\"))return 20;if(-1\u003Ca.indexOf(\"whatsapp\"))return 21;if(-1\u003Ca.indexOf(\"save\"))return 22;if(-1\u003Ca.indexOf(\"permalink\"))return 23}if(\"newsletters\"===\nb\u0026\u0026\"subscribe\"===a)return-1\u003Cc.indexOf(\"opt in\")?10:6;if(\"comments\"===b){if(\"submit-new\"===a)return 11;if(\"submit-reply\"===a)return 33}return\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=navigator.userAgent;if(!\/.*(iphone|ipad|ipod|silk).*$\/i.test(a)\u0026\u0026(a=\/Mac OS X (\\d+)[_\\.](\\d+)([_\\.](\\d+))?\/.exec(a))\u0026\u00265\u003C=a.length){var b=parseInt(a[1],10);return 10\u003Eb||10===b\u0026\u00269\u003E=parseInt(a[2],10)?1:0}return 0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeSubscriberSince"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 81], 8, 16], "||", ["escape", ["macro", 82], 8, 16], ";try{var b=nytAnalytics.formatDates(a,\"dateAlone\")}catch(c){}return b})();"]
            }, {
                "function": "__cid"
            }, {
                "function": "__ctv"
            }, {
                "function": "__c",
                "vtp_value": "Production"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"", ["escape", ["macro", 84], 7], "-", ["escape", ["macro", 85], 7], "-", ["escape", ["macro", 86], 7], "\"})();"]
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 88], 8, 16], ")})();"]
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 90], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!!(window\u0026\u0026window.NYTD\u0026\u0026window.NYTD.Abra)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nyt_et.get_pageview_id()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], "||(document.querySelector(\"meta[name\\x3dsourceApp]\")||{}).content;a||(a=\/parenting\\.\/.test(document.location.host)?\"nyt-parenting\":\/^\\\/puzzles\\\/?|^\\\/crosswords\\\/?\/.test(document.location.pathname)?\"games-crosswords\":\/dg-cookie-policy\/.test(document.location.pathname)||\/help.nytimes.com\/.test(document.location.host)?\"help\":\"nyt-vi\");return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!1})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "NYT-T"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-purr"
            }, {
                "function": "__j",
                "vtp_name": "location.search"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 41],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "test-whitelist", "value", ["macro", 55]],
                    ["map", "key", "article-complete", "value", ["macro", 55]],
                    ["map", "key", "lire-modal", "value", ["macro", 55]],
                    ["map", "key", "LogIn", "value", ["macro", 55]],
                    ["map", "key", "welcome ad", "value", ["macro", 55]],
                    ["map", "key", "review", "value", ["macro", 55]],
                    ["map", "key", "Programs", "value", ["macro", 55]],
                    ["map", "key", "vi-beta-tools", "value", ["macro", 55]],
                    ["map", "key", "inline-message", "value", ["macro", 55]],
                    ["map", "key", "newsletters", "value", ["macro", 55]],
                    ["map", "key", "video-player-share", "value", ["macro", 55]],
                    ["map", "key", "gateway", "value", ["macro", 55]],
                    ["map", "key", "audio-player", "value", ["macro", 55]],
                    ["map", "key", "share-tools", "value", ["macro", 55]],
                    ["map", "key", "comments", "value", ["macro", 55]],
                    ["map", "key", "acm", "value", ["macro", 55]],
                    ["map", "key", "video-player", "value", ["macro", 55]],
                    ["map", "key", "first-scroll", "value", ["macro", 55]],
                    ["map", "key", "^games-prototype.*", "value", ["macro", 55]],
                    ["map", "key", "[M|m]odal", "value", ["macro", 55]],
                    ["map", "key", "settings", "value", ["macro", 55]],
                    ["map", "key", "Puzzle", "value", ["macro", 55]],
                    ["map", "key", "general", "value", ["macro", 55]],
                    ["map", "key", "gameplay", "value", ["macro", 55]],
                    ["map", "key", "^interactive.*", "value", ["macro", 55]],
                    ["map", "key", "out_bound_clicks", "value", ["macro", 55]]
                ]
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignSource"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignMedium"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignName"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignContent"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignKeyword"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 90],
                "vtp_name": "referrer.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 107], 8, 16], "\u0026\u0026\"null\"!==", ["escape", ["macro", 107], 8, 16], "?", ["escape", ["macro", 107], 8, 16], ":", ["escape", ["macro", 90], 8, 16], "})();"]
            }, {
                "function": "__c",
                "vtp_value": "1"
            }, {
                "function": "__c",
                "vtp_value": "2"
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__c",
                "vtp_value": "1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {
                "function": "__c",
                "vtp_value": "2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 41],
                "vtp_name": "asset.is_refresh"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a;(a=document.location.href)\u0026\u0026\"string\"===typeof a\u0026\u0026(a=a.replace(\/=[!#\\$%'\\*\\+\\-\\\/=\\?\\^_`\\{\\|\\}~;\\.,\"\\(\\),:;\u003C\u003E\\[\\\\\\]\\w]+(@|%40)[^.]+\\.[^\u0026]+\/g,\"\\x3demail_block\"));if(", ["escape", ["macro", 116], 8, 16], "){var b=-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\";a+=b+\"WT.z_jog\\x3d1\"}return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.location.search;", ["escape", ["macro", 116], 8, 16], "\u0026\u0026(connector=-1\u003CcleanURL.indexOf(\"?\")?\"\\x26\":\"?\",a+=connector+\"WT.z_jog\\x3d1\");return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__c",
                "vtp_value": "5"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.paid_post"
            }, {
                "function": "__c",
                "vtp_value": "6"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {
                "function": "__c",
                "vtp_value": "7"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {
                "function": "__c",
                "vtp_value": "8"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {
                "function": "__c",
                "vtp_value": "9"
            }, {
                "function": "__c",
                "vtp_value": "10"
            }, {
                "function": "__c",
                "vtp_value": "11"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {
                "function": "__c",
                "vtp_value": "12"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__c",
                "vtp_value": "13"
            }, {
                "function": "__c",
                "vtp_value": "14"
            }, {
                "function": "__c",
                "vtp_value": "15"
            }, {
                "function": "__c",
                "vtp_value": "16"
            }, {
                "function": "__c",
                "vtp_value": "17"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {
                "function": "__c",
                "vtp_value": "18"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {
                "function": "__c",
                "vtp_value": "19"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {
                "function": "__c",
                "vtp_value": "20"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {
                "function": "__c",
                "vtp_value": "21"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {
                "function": "__c",
                "vtp_value": "22"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {
                "function": "__c",
                "vtp_value": "23"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__c",
                "vtp_value": "24"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.gatewayViewed"
            }, {
                "function": "__c",
                "vtp_value": "25"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__c",
                "vtp_value": "26"
            }, {
                "function": "__c",
                "vtp_value": "27"
            }, {
                "function": "__c",
                "vtp_value": "28"
            }, {
                "function": "__c",
                "vtp_value": "29"
            }, {
                "function": "__c",
                "vtp_value": "30"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "null",
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {
                "function": "__c",
                "vtp_value": "31"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {
                "function": "__c",
                "vtp_value": "32"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {
                "function": "__c",
                "vtp_value": "33"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {
                "function": "__c",
                "vtp_value": "34"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {
                "function": "__c",
                "vtp_value": "35"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {
                "function": "__c",
                "vtp_value": "36"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.slug"
            }, {
                "function": "__c",
                "vtp_value": "37"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {
                "function": "__c",
                "vtp_value": "38"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {
                "function": "__c",
                "vtp_value": "39"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {
                "function": "__c",
                "vtp_value": "40"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {
                "function": "__c",
                "vtp_value": "41"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {
                "function": "__c",
                "vtp_value": "42"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {
                "function": "__c",
                "vtp_value": "43"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {
                "function": "__c",
                "vtp_value": "44"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {
                "function": "__c",
                "vtp_value": "45"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {
                "function": "__c",
                "vtp_value": "46"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__c",
                "vtp_value": "47"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {
                "function": "__c",
                "vtp_value": "48"
            }, {
                "function": "__c",
                "vtp_value": "49"
            }, {
                "function": "__c",
                "vtp_value": "50"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {
                "function": "__c",
                "vtp_value": "51"
            }, {
                "function": "__c",
                "vtp_value": "52"
            }, {
                "function": "__c",
                "vtp_value": "53"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {
                "function": "__c",
                "vtp_value": "54"
            }, {
                "function": "__c",
                "vtp_value": "55"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {
                "function": "__c",
                "vtp_value": "56"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__c",
                "vtp_value": "57"
            }, {
                "function": "__c",
                "vtp_value": "58"
            }, {
                "function": "__c",
                "vtp_value": "59"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__c",
                "vtp_value": "60"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__c",
                "vtp_value": "61"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof ", ["escape", ["macro", 69], 8, 16], "?", ["escape", ["macro", 69], 8, 16], ".v:\"\"})();"]
            }, {
                "function": "__c",
                "vtp_value": ["macro", 218]
            }, {
                "function": "__c",
                "vtp_value": "62"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {
                "function": "__c",
                "vtp_value": "63"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-a"
            }, {
                "function": "__c",
                "vtp_value": ["macro", 223]
            }, {
                "function": "__c",
                "vtp_value": "64"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {
                "function": "__c",
                "vtp_value": "65"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__c",
                "vtp_value": "66"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {
                "function": "__c",
                "vtp_value": "67"
            }, {
                "function": "__c",
                "vtp_value": "68"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.channels"
            }, {
                "function": "__c",
                "vtp_value": "69"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.savedArticles"
            }, {
                "function": "__c",
                "vtp_value": "72"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.creative"
            }, {
                "function": "__c",
                "vtp_value": "73"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.flight"
            }, {
                "function": "__c",
                "vtp_value": "74"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.length"
            }, {
                "function": "__c",
                "vtp_value": "75"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.currentEntry"
            }, {
                "function": "__c",
                "vtp_value": "76"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.title"
            }, {
                "function": "__c",
                "vtp_value": "79"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.process"
            }, {
                "function": "__c",
                "vtp_value": "80"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.mood"
            }, {
                "function": "__c",
                "vtp_value": "81"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originalURL"
            }, {
                "function": "__c",
                "vtp_value": "82"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {
                "function": "__c",
                "vtp_value": "83"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {
                "function": "__c",
                "vtp_value": "84"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.beta"
            }, {
                "function": "__c",
                "vtp_value": "85"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.audioFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.series"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_defaultValue": ["macro", 259],
                "vtp_map": ["list", ["map", "key", "audio-player", "value", ["macro", 260]]]
            }, {
                "function": "__c",
                "vtp_value": "86"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiCreateDate"
            }, {
                "function": "__c",
                "vtp_value": "87"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscriber"
            }, {
                "function": "__c",
                "vtp_value": "88"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.era"
            }, {
                "function": "__c",
                "vtp_value": "89"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.genre"
            }, {
                "function": "__c",
                "vtp_value": "90"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.subgenre"
            }, {
                "function": "__c",
                "vtp_value": "91"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscribeDate"
            }, {
                "function": "__c",
                "vtp_value": "92"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.offerID"
            }, {
                "function": "__c",
                "vtp_value": "93"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.stopped"
            }, {
                "function": "__c",
                "vtp_value": "94"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.corp"
            }, {
                "function": "__c",
                "vtp_value": "95"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 83],
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {
                "function": "__c",
                "vtp_value": "96"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeBundles.0"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 283],
                "vtp_name": "user.subscriptions.bundle"
            }, {
                "function": "__c",
                "vtp_value": "97"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.bundeFilter"
            }, {
                "function": "__c",
                "vtp_value": "98"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.payflowType"
            }, {
                "function": "__c",
                "vtp_value": "99"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "market.firstSubLanding"
            }, {
                "function": "__c",
                "vtp_value": "100"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.IntGraphics"
            }, {
                "function": "__c",
                "vtp_value": "101"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.multiLingual"
            }, {
                "function": "__c",
                "vtp_value": "102"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.save_type"
            }, {
                "function": "__c",
                "vtp_value": "104"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.guideTitle"
            }, {
                "function": "__c",
                "vtp_value": "105"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.cardPosition"
            }, {
                "function": "__c",
                "vtp_value": "109"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateChannel"
            }, {
                "function": "__c",
                "vtp_value": "110"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstatePageType"
            }, {
                "function": "__c",
                "vtp_value": "111"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleID"
            }, {
                "function": "__c",
                "vtp_value": "112"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleType"
            }, {
                "function": "__c",
                "vtp_value": "113"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleItemID"
            }, {
                "function": "__c",
                "vtp_value": "114"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.payflowsProduct"
            }, {
                "function": "__c",
                "vtp_value": "116"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.region"
            }, {
                "function": "__c",
                "vtp_value": "117"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.rate"
            }, {
                "function": "__c",
                "vtp_value": "118"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.story_form"
            }, {
                "function": "__c",
                "vtp_value": "119"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.spotlights"
            }, {
                "function": "__c",
                "vtp_value": "120"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.krux_segment"
            }, {
                "function": "__c",
                "vtp_value": "121"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.print_section"
            }, {
                "function": "__c",
                "vtp_value": "122"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.referrer"
            }, {
                "function": "__c",
                "vtp_value": "123"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {
                "function": "__c",
                "vtp_value": "124"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdDuration"
            }, {
                "function": "__c",
                "vtp_value": "125"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdPosition"
            }, {
                "function": "__c",
                "vtp_value": "126"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDuration"
            }, {
                "function": "__c",
                "vtp_value": "127"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__c",
                "vtp_value": "128"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.https_test"
            }, {
                "function": "__c",
                "vtp_value": "129"
            }, {
                "function": "__c",
                "vtp_value": "130"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.www_testID"
            }, {
                "function": "__c",
                "vtp_value": "131"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.mobileweb_testID"
            }, {
                "function": "__c",
                "vtp_value": "132"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_three"
            }, {
                "function": "__c",
                "vtp_value": "133"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "do.we.need.this"
            }, {
                "function": "__c",
                "vtp_value": "134"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_four"
            }, {
                "function": "__c",
                "vtp_value": "135"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {
                "function": "__c",
                "vtp_value": "136"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {
                "function": "__c",
                "vtp_value": "137"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {
                "function": "__c",
                "vtp_value": "138"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoFranchise"
            }, {
                "function": "__c",
                "vtp_value": "139"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoSection"
            }, {
                "function": "__c",
                "vtp_value": "140"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.adblock_enabled"
            }, {
                "function": "__c",
                "vtp_value": "141"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__c",
                "vtp_value": "142"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__c",
                "vtp_value": "143"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.id"
            }, {
                "function": "__c",
                "vtp_value": "144"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.price"
            }, {
                "function": "__c",
                "vtp_value": "145"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.buildingID"
            }, {
                "function": "__c",
                "vtp_value": "146"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.new"
            }, {
                "function": "__c",
                "vtp_value": "147"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.reduced"
            }, {
                "function": "__c",
                "vtp_value": "148"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.open_house"
            }, {
                "function": "__c",
                "vtp_value": "149"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.interface"
            }, {
                "function": "__c",
                "vtp_value": "150"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.subinterface"
            }, {
                "function": "__c",
                "vtp_value": "154"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignID_ecommerce"
            }, {
                "function": "__c",
                "vtp_value": "160"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url_path_filter"
            }, {
                "function": "__c",
                "vtp_value": "162"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.url"
            }, {
                "function": "__c",
                "vtp_value": "163"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__c",
                "vtp_value": "164"
            }, {
                "function": "__c",
                "vtp_value": ["macro", 223]
            }, {
                "function": "__c",
                "vtp_value": "166"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.eligibility"
            }, {
                "function": "__c",
                "vtp_value": "167"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.resolution_type"
            }, {
                "function": "__c",
                "vtp_value": "168"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.redelivery_request"
            }, {
                "function": "__c",
                "vtp_value": "169"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.user_state"
            }, {
                "function": "__c",
                "vtp_value": "172"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {
                "function": "__c",
                "vtp_value": "173"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 401],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {
                "function": "__c",
                "vtp_value": "179"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {
                "function": "__c",
                "vtp_value": "180"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoName"
            }, {
                "function": "__c",
                "vtp_value": "181"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__c",
                "vtp_value": "182"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.section"
            }, {
                "function": "__c",
                "vtp_value": "183"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.subSection"
            }, {
                "function": "__c",
                "vtp_value": "184"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.duration"
            }, {
                "function": "__c",
                "vtp_value": "185"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieName", "value", "walley"],
                    ["map", "fieldName", "location", "value", ["macro", 64]],
                    ["map", "fieldName", "campaignSource", "value", ["macro", 102]],
                    ["map", "fieldName", "campaignMedium", "value", ["macro", 103]],
                    ["map", "fieldName", "campaignName", "value", ["macro", 104]],
                    ["map", "fieldName", "campaignContent", "value", ["macro", 105]],
                    ["map", "fieldName", "campaignKeyword", "value", ["macro", 106]],
                    ["map", "fieldName", "referrer", "value", ["macro", 108]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", ["macro", 109], "group", ["macro", 77]],
                    ["map", "index", ["macro", 110], "group", ["macro", 76]],
                    ["map", "index", ["macro", 111], "group", ["macro", 75]],
                    ["map", "index", ["macro", 112], "group", ["macro", 74]]
                ],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 113], "dimension", ["macro", 114]],
                    ["map", "index", ["macro", 115], "dimension", ["macro", 117]],
                    ["map", "index", ["macro", 118], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 120], "dimension", ["macro", 121]],
                    ["map", "index", ["macro", 122], "dimension", ["macro", 123]],
                    ["map", "index", ["macro", 124], "dimension", ["macro", 125]],
                    ["map", "index", ["macro", 126], "dimension", ["macro", 127]],
                    ["map", "index", ["macro", 128], "dimension", ["macro", 129]],
                    ["map", "index", ["macro", 130], "dimension", ["macro", 130]],
                    ["map", "index", ["macro", 131], "dimension", ["macro", 0]],
                    ["map", "index", ["macro", 132], "dimension", ["macro", 133]],
                    ["map", "index", ["macro", 134], "dimension", ["macro", 135]],
                    ["map", "index", ["macro", 136], "dimension", ["macro", 1]],
                    ["map", "index", ["macro", 137], "dimension", ["macro", 3]],
                    ["map", "index", ["macro", 138], "dimension", ["macro", 4]],
                    ["map", "index", ["macro", 139], "dimension", ["macro", 5]],
                    ["map", "index", ["macro", 140], "dimension", ["macro", 141]],
                    ["map", "index", ["macro", 142], "dimension", ["macro", 143]],
                    ["map", "index", ["macro", 144], "dimension", ["macro", 145]],
                    ["map", "index", ["macro", 146], "dimension", ["macro", 147]],
                    ["map", "index", ["macro", 148], "dimension", ["macro", 149]],
                    ["map", "index", ["macro", 150], "dimension", ["macro", 151]],
                    ["map", "index", ["macro", 152], "dimension", ["macro", 153]],
                    ["map", "index", ["macro", 154], "dimension", ["macro", 155]],
                    ["map", "index", ["macro", 156], "dimension", ["macro", 157]],
                    ["map", "index", ["macro", 158], "dimension", ["macro", 7]],
                    ["map", "index", ["macro", 159], "dimension", ["macro", 8]],
                    ["map", "index", ["macro", 160], "dimension", ["macro", 9]],
                    ["map", "index", ["macro", 161], "dimension", ["macro", 10]],
                    ["map", "index", ["macro", 162], "dimension", ["macro", 163]],
                    ["map", "index", ["macro", 164], "dimension", ["macro", 165]],
                    ["map", "index", ["macro", 166], "dimension", ["macro", 167]],
                    ["map", "index", ["macro", 168], "dimension", ["macro", 169]],
                    ["map", "index", ["macro", 170], "dimension", ["macro", 171]],
                    ["map", "index", ["macro", 172], "dimension", ["macro", 173]],
                    ["map", "index", ["macro", 174], "dimension", ["macro", 175]],
                    ["map", "index", ["macro", 176], "dimension", ["macro", 177]],
                    ["map", "index", ["macro", 178], "dimension", ["macro", 179]],
                    ["map", "index", ["macro", 180], "dimension", ["macro", 181]],
                    ["map", "index", ["macro", 182], "dimension", ["macro", 183]],
                    ["map", "index", ["macro", 184], "dimension", ["macro", 185]],
                    ["map", "index", ["macro", 186], "dimension", ["macro", 187]],
                    ["map", "index", ["macro", 188], "dimension", ["macro", 189]],
                    ["map", "index", ["macro", 190], "dimension", ["macro", 191]],
                    ["map", "index", ["macro", 192], "dimension", ["macro", 193]],
                    ["map", "index", ["macro", 194], "dimension", ["macro", 195]],
                    ["map", "index", ["macro", 196], "dimension", ["macro", 197]],
                    ["map", "index", ["macro", 198], "dimension", ["macro", 11]],
                    ["map", "index", ["macro", 199], "dimension", ["macro", 13]],
                    ["map", "index", ["macro", 200], "dimension", ["macro", 201]],
                    ["map", "index", ["macro", 202], "dimension", ["macro", 35]],
                    ["map", "index", ["macro", 203], "dimension", ["macro", 36]],
                    ["map", "index", ["macro", 204], "dimension", ["macro", 205]],
                    ["map", "index", ["macro", 206], "dimension", ["macro", 37]],
                    ["map", "index", ["macro", 207], "dimension", ["macro", 208]],
                    ["map", "index", ["macro", 209], "dimension", ["macro", 210]],
                    ["map", "index", ["macro", 211], "dimension", ["macro", 15]],
                    ["map", "index", ["macro", 212], "dimension", ["macro", 17]],
                    ["map", "index", ["macro", 213], "dimension", ["macro", 214]],
                    ["map", "index", ["macro", 215], "dimension", ["macro", 216]],
                    ["map", "index", ["macro", 217], "dimension", ["macro", 219]],
                    ["map", "index", ["macro", 220], "dimension", ["macro", 221]],
                    ["map", "index", ["macro", 222], "dimension", ["macro", 224]],
                    ["map", "index", ["macro", 225], "dimension", ["macro", 226]],
                    ["map", "index", ["macro", 227], "dimension", ["macro", 228]],
                    ["map", "index", ["macro", 229], "dimension", ["macro", 230]],
                    ["map", "index", ["macro", 231], "dimension", ["macro", 18]],
                    ["map", "index", ["macro", 232], "dimension", ["macro", 233]],
                    ["map", "index", ["macro", 234], "dimension", ["macro", 235]],
                    ["map", "index", ["macro", 236], "dimension", ["macro", 237]],
                    ["map", "index", ["macro", 238], "dimension", ["macro", 239]],
                    ["map", "index", ["macro", 240], "dimension", ["macro", 241]],
                    ["map", "index", ["macro", 242], "dimension", ["macro", 243]],
                    ["map", "index", ["macro", 244], "dimension", ["macro", 245]],
                    ["map", "index", ["macro", 246], "dimension", ["macro", 247]],
                    ["map", "index", ["macro", 248], "dimension", ["macro", 249]],
                    ["map", "index", ["macro", 250], "dimension", ["macro", 251]],
                    ["map", "index", ["macro", 252], "dimension", ["macro", 253]],
                    ["map", "index", ["macro", 254], "dimension", ["macro", 255]],
                    ["map", "index", ["macro", 256], "dimension", ["macro", 257]],
                    ["map", "index", ["macro", 258], "dimension", ["macro", 261]],
                    ["map", "index", ["macro", 262], "dimension", ["macro", 263]],
                    ["map", "index", ["macro", 264], "dimension", ["macro", 265]],
                    ["map", "index", ["macro", 266], "dimension", ["macro", 267]],
                    ["map", "index", ["macro", 268], "dimension", ["macro", 269]],
                    ["map", "index", ["macro", 270], "dimension", ["macro", 271]],
                    ["map", "index", ["macro", 272], "dimension", ["macro", 273]],
                    ["map", "index", ["macro", 274], "dimension", ["macro", 275]],
                    ["map", "index", ["macro", 276], "dimension", ["macro", 277]],
                    ["map", "index", ["macro", 278], "dimension", ["macro", 279]],
                    ["map", "index", ["macro", 280], "dimension", ["macro", 281]],
                    ["map", "index", ["macro", 282], "dimension", ["macro", 284]],
                    ["map", "index", ["macro", 285], "dimension", ["macro", 286]],
                    ["map", "index", ["macro", 287], "dimension", ["macro", 288]],
                    ["map", "index", ["macro", 289], "dimension", ["macro", 290]],
                    ["map", "index", ["macro", 291], "dimension", ["macro", 292]],
                    ["map", "index", ["macro", 293], "dimension", ["macro", 294]],
                    ["map", "index", ["macro", 295], "dimension", ["macro", 296]],
                    ["map", "index", ["macro", 297], "dimension", ["macro", 298]],
                    ["map", "index", ["macro", 299], "dimension", ["macro", 300]],
                    ["map", "index", ["macro", 301], "dimension", ["macro", 302]],
                    ["map", "index", ["macro", 303], "dimension", ["macro", 304]],
                    ["map", "index", ["macro", 305], "dimension", ["macro", 306]],
                    ["map", "index", ["macro", 307], "dimension", ["macro", 308]],
                    ["map", "index", ["macro", 309], "dimension", ["macro", 310]],
                    ["map", "index", ["macro", 311], "dimension", ["macro", 312]],
                    ["map", "index", ["macro", 313], "dimension", ["macro", 314]],
                    ["map", "index", ["macro", 315], "dimension", ["macro", 316]],
                    ["map", "index", ["macro", 317], "dimension", ["macro", 318]],
                    ["map", "index", ["macro", 319], "dimension", ["macro", 320]],
                    ["map", "index", ["macro", 321], "dimension", ["macro", 322]],
                    ["map", "index", ["macro", 323], "dimension", ["macro", 324]],
                    ["map", "index", ["macro", 325], "dimension", ["macro", 326]],
                    ["map", "index", ["macro", 327], "dimension", ["macro", 328]],
                    ["map", "index", ["macro", 329], "dimension", ["macro", 330]],
                    ["map", "index", ["macro", 331], "dimension", ["macro", 332]],
                    ["map", "index", ["macro", 333], "dimension", ["macro", 334]],
                    ["map", "index", ["macro", 335], "dimension", ["macro", 336]],
                    ["map", "index", ["macro", 337], "dimension", ["macro", 338]],
                    ["map", "index", ["macro", 339], "dimension", ["macro", 39]],
                    ["map", "index", ["macro", 340], "dimension", ["macro", 341]],
                    ["map", "index", ["macro", 342], "dimension", ["macro", 343]],
                    ["map", "index", ["macro", 344], "dimension", ["macro", 345]],
                    ["map", "index", ["macro", 346], "dimension", ["macro", 347]],
                    ["map", "index", ["macro", 348], "dimension", ["macro", 349]],
                    ["map", "index", ["macro", 350], "dimension", ["macro", 351]],
                    ["map", "index", ["macro", 352], "dimension", ["macro", 353]],
                    ["map", "index", ["macro", 354], "dimension", ["macro", 355]],
                    ["map", "index", ["macro", 356], "dimension", ["macro", 357]],
                    ["map", "index", ["macro", 358], "dimension", ["macro", 359]],
                    ["map", "index", ["macro", 360], "dimension", ["macro", 361]],
                    ["map", "index", ["macro", 362], "dimension", ["macro", 363]],
                    ["map", "index", ["macro", 364], "dimension", ["macro", 365]],
                    ["map", "index", ["macro", 366], "dimension", ["macro", 367]],
                    ["map", "index", ["macro", 368], "dimension", ["macro", 369]],
                    ["map", "index", ["macro", 370], "dimension", ["macro", 371]],
                    ["map", "index", ["macro", 372], "dimension", ["macro", 373]],
                    ["map", "index", ["macro", 374], "dimension", ["macro", 375]],
                    ["map", "index", ["macro", 376], "dimension", ["macro", 377]],
                    ["map", "index", ["macro", 378], "dimension", ["macro", 379]],
                    ["map", "index", ["macro", 380], "dimension", ["macro", 381]],
                    ["map", "index", ["macro", 382], "dimension", ["macro", 383]],
                    ["map", "index", ["macro", 384], "dimension", ["macro", 385]],
                    ["map", "index", ["macro", 386], "dimension", ["macro", 387]],
                    ["map", "index", ["macro", 388], "dimension", ["macro", 389]],
                    ["map", "index", ["macro", 390], "dimension", ["macro", 391]],
                    ["map", "index", ["macro", 392], "dimension", ["macro", 393]],
                    ["map", "index", ["macro", 394], "dimension", ["macro", 395]],
                    ["map", "index", ["macro", 396], "dimension", ["macro", 397]],
                    ["map", "index", ["macro", 398], "dimension", ["macro", 399]],
                    ["map", "index", ["macro", 400], "dimension", ["macro", 401]],
                    ["map", "index", ["macro", 402], "dimension", ["macro", 403]],
                    ["map", "index", ["macro", 404], "dimension", ["macro", 405]],
                    ["map", "index", ["macro", 406], "dimension", ["macro", 407]],
                    ["map", "index", ["macro", 408], "dimension", ["macro", 409]],
                    ["map", "index", ["macro", 410], "dimension", ["macro", 411]],
                    ["map", "index", ["macro", 412], "dimension", ["macro", 413]],
                    ["map", "index", ["macro", 414], "dimension", ["macro", 415]],
                    ["map", "index", ["macro", 416], "dimension", ["macro", 417]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false
            }, {
                "function": "__r"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.gaAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.watSegs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData.subscriptions.0.bundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.p"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.adv"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c3"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.hitType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventValue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension2Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.propensity.engagementLevel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 223],
                "vtp_name": "session.etAgentId"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "register",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__t"
            }, {
                "function": "__c",
                "vtp_value": "nzcub"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 86],
                "vtp_defaultValue": "https:\/\/et.stg.nytimes.com\/",
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/et.nytimes.com\/"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 41],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "dock", "value", ["macro", 55]],
                    ["map", "key", "gateway", "value", ["macro", 55]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.environment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 56],
                "vtp_name": "asset"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 56],
                "vtp_name": "user"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 56],
                "vtp_name": "session"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageview.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 454],
                "vtp_name": "interaction.dfp_page_view_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 56],
                "vtp_name": "pageview.performance"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.retentionSegment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreDigiBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreHDBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.newUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.oldUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "user.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.context"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.slug"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.progress"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 56],
                "vtp_name": "viewport"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "5000",
                "vtp_name": "pageview.heartbeat.heartbeatInterval"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.progress.timeInGame"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sectionContent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.geofacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 484],
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriberInfo"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "b2b_cig_opt"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "edu_cig_opt"
            }, {
                "function": "__k",
                "convert_undefined_to": ["macro", 41],
                "vtp_decodeCookie": false,
                "vtp_name": "gatewayHit"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.emotions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "block"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.ad"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_defaultValue": ["macro", 41],
                "vtp_map": ["list", ["map", "key", "gateway", "value", ["macro", 55]],
                    ["map", "key", "article_complete", "value", ["macro", 55]],
                    ["map", "key", "mini-modal", "value", ["macro", 55]],
                    ["map", "key", "game-modal", "value", ["macro", 55]],
                    ["map", "key", "regiwall", "value", ["macro", 55]],
                    ["map", "key", "bar1", "value", ["macro", 55]],
                    ["map", "key", "growl", "value", ["macro", 55]],
                    ["map", "key", "meter", "value", ["macro", 55]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.variant"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 88],
                "vtp_name": "abtest.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "slideshow"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 86],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/a.et.stg.nytimes.com",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/a.et.nytimes.com"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return{asset:", ["escape", ["macro", 451], 8, 16], ",session:", ["escape", ["macro", 453], 8, 16], ",user:", ["escape", ["macro", 452], 8, 16], ",version:", ["escape", ["macro", 509], 8, 16], "}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "allocs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 511],
                "vtp_name": "abtest.batch"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "payload"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "referrer.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.channel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.subchannel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdPosition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoSection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.referrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.url"
            }, {
                "function": "__c",
                "vtp_value": "70"
            }, {
                "function": "__c",
                "vtp_value": "71"
            }, {
                "function": "__c",
                "vtp_value": "77"
            }, {
                "function": "__c",
                "vtp_value": "78"
            }, {
                "function": "__c",
                "vtp_value": "103"
            }, {
                "function": "__c",
                "vtp_value": "106"
            }, {
                "function": "__c",
                "vtp_value": "107"
            }, {
                "function": "__c",
                "vtp_value": "108"
            }, {
                "function": "__c",
                "vtp_value": "115"
            }, {
                "function": "__c",
                "vtp_value": "151"
            }, {
                "function": "__c",
                "vtp_value": "152"
            }, {
                "function": "__c",
                "vtp_value": "153"
            }, {
                "function": "__c",
                "vtp_value": "155"
            }, {
                "function": "__c",
                "vtp_value": "156"
            }, {
                "function": "__c",
                "vtp_value": "157"
            }, {
                "function": "__c",
                "vtp_value": "158"
            }, {
                "function": "__c",
                "vtp_value": "159"
            }, {
                "function": "__c",
                "vtp_value": "160"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.pageIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.avgSessionTime"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.firstReferrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.heartbeat"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.activeDays"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriptions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric2Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetrics"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetric"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.region"
            }, {
                "function": "__c",
                "vtp_value": "nzcu0"
            }, {
                "function": "__d",
                "vtp_elementSelector": "html",
                "vtp_attributeName": "data-nyt-ab",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 586],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriptions.subscriberType"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__e"
            }, {
                "function": "__r"
            }, {
                "function": "__hid"
            }],
            "tags": [{
                "function": "__html",
                "priority": 2000,
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.nytAnalytics=window.nytAnalytics||{},e=function(b){return 10\u003Eb?\"0\"+b:b},f=function(b){var d=-5;if(10\u003Eb.getUTCMonth()\u0026\u00262\u003Cb.getUTCMonth())d=-4;else if(2===b.getUTCMonth()){var c=new Date(b.getUTCFullYear(),2,8,-5);c=0===c.getUTCDay()?8:15-c.getUTCDay();if(b.getUTCDate()\u003Ec||b.getUTCDate()===c\u0026\u00266\u003Cb.getUTCHours())d=-4}else 10===b.getUTCMonth()\u0026\u0026(b.getUTCFullYear(),c=0===c.getUTCDay()?1:8-c.getUTCDay(),b.getUTCDate()\u003Cc||b.getUTCDate()===c\u0026\u00267\u003Eb.getUTCHours())\u0026\u0026(d=-4);return d},g=\n\"Sunday Monday Tuesday Wednesday Thursday Friday Saturday\".split(\" \"),h=\"January February March April May June July August September October November December\".split(\" \");a.formattedDates=a.formattedDates||{};a.formatDates=function(b,d){var c=this.formattedDates;if(!b||!d)return\"\";if(\"undefined\"===typeof c[b]){var a=new Date(b);if(\"Invalid Date\"==a)return\"\";a.setTime(b+36E5*f(a));c[b]={year:a.getUTCFullYear(),date:[a.getUTCFullYear(),e(a.getUTCMonth()+1),e(a.getUTCDate()),e(a.getUTCHours())].join(\"-\"),\ndateAlone:[a.getUTCFullYear(),e(a.getUTCMonth()+1),e(a.getUTCDate())].join(\"-\"),day:g[a.getUTCDay()],hours:e(a.getUTCHours()),month:h[a.getUTCMonth()]}}return c[b][d]};a.resetPage=function(){this.currQuartile=this.maxQuartile=0;this.scrollComplete=this.scrollStart=!1;this.activeTime=0;this.maxViewport={}};a.resetPage();a.hitQuartile=function(b){var a=this.getData(\"viewport.documentHeight\")||document.getElementById(\"app\").clientHeight;a\/=4;this.currQuartile=25*Math.floor(b\/a);return this.currQuartile\u003E\nthis.maxQuartile?(this.maxQuartile=this.currQuartile,!0):!1};a.getMaxViewport=function(b){var a=this.maxViewport;if(!a.scrollTop||!a.height||!a.width||(b.scrollTop+b.height)*b.width\u003E(a.scrollTop+a.height)*a.width)this.maxViewport=JSON.parse(JSON.stringify(b));return this.maxViewport};a.pagemeta=function(){var b,a={},c=document.getElementsByTagName(\"meta\");for(b=c.length-1;0\u003C=b;b--)a[c[b].name]=c[b].content;return a}();a.heartbeat=function(b){this.activeTime=this.activeTime||0;this.activeTime+=b.heartbeatInterval;\nvar a=b.heartbeatInterval\u0026\u0026(3E4\u003E=this.activeTime||12E4\u003E=this.activeTime\u0026\u00260===this.activeTime%(2*b.heartbeatInterval)||3E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(4*b.heartbeatInterval)||3E5\u003Cthis.activeTime\u0026\u002618E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(6*b.heartbeatInterval));\"object\"===typeof pageEventTracker\u0026\u0026(pageEventTracker.updateData({depth:this.maxQuartile,viewport:JSON.stringify(this.getMaxViewport(b.viewport)),performance:JSON.stringify(b.performance),presentation:JSON.stringify(b.presentation),\nactiveTime:this.activeTime}),a\u0026\u0026", ["escape", ["macro", 95], 8, 16], "\u0026\u0026pageEventTracker.shortCircuit());a\u0026\u0026\"function\"==typeof nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",activeTime:this.activeTime,gtm:", ["escape", ["macro", 87], 8, 16], "})};a.interaction=function(b){if(\"function\"===typeof EventTracker){var a={};if(\"object\"===typeof a){a.assetUrl=b.asset_url;a.url=document.location.href;a.subject=\"module-interactions\";var c={eventData:b.eventData};b.module\u0026\u0026(c.moduleObj=b.module,\"object\"===typeof c.moduleObj.element\u0026\u0026\"undefined\"!==\ntypeof c.moduleObj.element.label\u0026\u0026(c.moduleObj.element.label=c.moduleObj.element.label.toString()));b.card\u0026\u0026(c.cardObj=b.card);b.block\u0026\u0026(c.blockObj=b.block);b.newsletter\u0026\u0026(c.newsletter=b.newsletter);a.moduleData=JSON.stringify(c);(new EventTracker).track(a);\"function\"==typeof nyt_et\u0026\u0026(c.subject=\"interaction\",c.gtm=", ["escape", ["macro", 87], 8, 16], ",nyt_et(\"send\",JSON.parse(JSON.stringify(c))))}}};a.performance=function(b){\"function\"==typeof nyt_et\u0026\u0026nyt_et({subject:\"page_update\",performance:b.performance,gtm:", ["escape", ["macro", 87], 8, 16], "})};\na.impression=function(b,a){var c={event:\"impression\"};b.module\u0026\u0026(c.moduleObj=JSON.parse(JSON.stringify(b.module)));b.card\u0026\u0026(c.cardObj=JSON.parse(JSON.stringify(b.card)));b.block\u0026\u0026(c.blockObj=JSON.parse(JSON.stringify(b.block)));b.eventData\u0026\u0026(c.eventData=JSON.parse(JSON.stringify(b.eventData)));b.pageview_ad\u0026\u0026(c.adObj=JSON.parse(JSON.stringify(b.pageview_ad)));a\u0026\u0026(c.priority=!0);if(\"undefined\"!==typeof pageEventTracker)\"object\"===typeof c.moduleObj\u0026\u0026\"gateway\"===c.moduleObj.name\u0026\u0026pageEventTracker.updateData({is_gateway:1}),\npageEventTracker.updateData({activeTime:this.activeTime}),(", ["escape", ["macro", 95], 8, 16], "||a)\u0026\u0026pageEventTracker.addModuleImpression(c);else if(", ["escape", ["macro", 95], 8, 16], "||a)this.impressionBuffer=window.nytAnalytics.impressionBuffer||[],this.impressionBuffer.push(c);\"function\"==typeof nyt_et\u0026\u0026(c.subject=\"impression\",c.gtm=", ["escape", ["macro", 87], 8, 16], ",a?nyt_et(\"send\",c):nyt_et(c));dataLayer.push({module:null,card:null,block:null,eventData:null,pageview:{ad:null}})};a.scrolling=function(b){var d={},c=b.viewport,e=c.scrollTop+\nc.height;c.activeTime=this.activeTime;\"function\"==typeof nyt_et\u0026\u0026nyt_et({subject:\"page_update\",viewport:c,gtm:", ["escape", ["macro", 87], 8, 16], "});\"object\"===typeof pageEventTracker\u0026\u0026(pageEventTracker.updateData({performance:JSON.stringify(b.performance),presentation:JSON.stringify(b.presentation),viewport:JSON.stringify(this.getMaxViewport(c))}),pageEventTracker.addViewportDetail(c),a.scrollStart||(dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"scroll_start\"}}),a.scrollStart=!0,d.assetUrl=b.asset_url,\nd.url=document.location.href,d.subject=\"module-interactions\",d.moduleData=JSON.stringify({module:\"first-scroll\",region:\"first-scroll\"}),(new EventTracker).track(d),\"function\"==typeof nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"interaction\",gtm:", ["escape", ["macro", 87], 8, 16], ",eventData:{trigger:\"module\",type:\"scroll\"},moduleObj:{name:\"scroll\",element:{name:\"first-scroll\"}}})),a.hitQuartile(e)\u0026\u0026(pageEventTracker.updateData({depth:a.maxQuartile}),100===a.maxQuartile\u0026\u0026dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"page_complete\"}}),\n", ["escape", ["macro", 95], 8, 16], "\u0026\u0026pageEventTracker.shortCircuit()))};a.slideshow=function(b){var a={};b.slideshow\u0026\u0026(\"object\"===typeof pageEventTracker\u0026\u0026(a.slideshowObj=JSON.stringify(b.slideshow),pageEventTracker.updateData(a),pageEventTracker.shortCircuit()),\"function\"==typeof nyt_et\u0026\u0026(a.slideshowObj=JSON.parse(JSON.stringify(b.slideshow)),a.subject=\"page_update\",a.gtm=", ["escape", ["macro", 87], 8, 16], ",nyt_et(\"send\",a)),dataLayer.push({slideshow:null}))};a.getData=function(a){return(a=google_tag_manager[", ["escape", ["macro", 84], 8, 16], "].dataLayer.get(a))?\n\"object\"!==typeof a?a:JSON.parse(JSON.stringify(a)):\"\"};a.gaEvent={};a.gaEvent[\"see more\"]={category:function(){return a.getData(\"presentation.pageType\")+\" - \"+a.getData(\"interaction.type\")},action:function(){return a.getData(\"interaction.module.context\")+\" - \"+a.getData(\"interaction.module.name\")},label:function(){return a.getData(\"interaction.module.slug\")},value:function(){return\"\"}};a.gaEvent[\"see more\"]={category:function(){return a.getData(\"presentation.pageType\")+\" - \"+a.getData(\"interaction.type\")},\naction:function(){return a.getData(\"interaction.module.context\")+\" - \"+a.getData(\"interaction.module.name\")},label:function(){return a.getData(\"interaction.module.slug\")},value:function(){return\"\"}};a.gaEvent[\"games-prototype-spelling-bee\"]={value:function(){return a.getData(\"interaction.module.progress.timeInGame\")},label:function(){return a.getData(\"interaction.module.progress.guess\")}}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 18
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 77, 2]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"gtm_et_tag\" type=\"text\/gtmscript\"\u003Eif(typeof window.nytAnalytics===\"object\")window.nytAnalytics.activeTime=0;\nEventTracker=function(){var etHost,et2Host,clazz;var lastEventTime=0;var nextCallbackNum=0;var getMetaTag=function(n,d){var i;var m=document.getElementsByTagName(\"meta\");for(i=m.length-1;i\u003E=0;i--)if(m[i].name===n)return m[i].content;return d||\"\"};var sourceApp=getMetaTag(\"sourceApp\",", ["escape", ["macro", 28], 8, 16], "||\"nyt-vi\");var populateET2PageviewId=function(_evt){_evt.et2_pageview_id=", ["escape", ["macro", 93], 8, 16], "};etHost=function(){var etHost=\"et.nytimes.com\",hosts=[\"et.stg.nytimes.com\",\"et.dev.nytimes.com\"],env=\n", ["escape", ["macro", 450], 8, 16], ";if(env)if(env===\"dev\"||env===\"stg\"||env===\"staging\"||env.indexOf(\"preview\")\u003E-1)etHost=hosts[0];else{if(env===\"dev\"||env===\"development\")etHost=hosts[1]}else if(\/alpha\\..*\\.nytimes\\.com$\/.test(location.hostname)===true)etHost=hosts[0];else if(\/\\.dev\\.nytimes\\.com$\/.test(location.hostname)===true)etHost=hosts[1];return etHost}();et2Host=function(){return\"nyt-etv2-dev.appspot.com\"}();var xhr=function(http_method,api_endpoint,success_callback){this.constructor.prototype.ajax=function(requestString){var xmlHttp=\nnew XMLHttpRequest;var self=this;if(typeof xmlHttp===\"undefined\")return false;xmlHttp.open(http_method,this.api_endpoint,true);xmlHttp.setRequestHeader(\"Content-type\",\"text\/plain; charset\\x3dutf-8\");xmlHttp.withCredentials=true;xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState===XMLHttpRequest.DONE\u0026\u0026xmlHttp.status===200)if(typeof self===\"object\"\u0026\u0026typeof self.success===\"function\")self.success(JSON?JSON.parse(xmlHttp.responseText):xmlHttp.responseText)};if(typeof requestString!==\"undefined\")xmlHttp.send(requestString)};\nif(typeof api_endpoint!==\"undefined\"||typeof success_callback!==\"undefined\"||typeof http_method!==\"undefined\"){this.api_endpoint=api_endpoint;this.success=success_callback;return this}else return false};var buildUrl=function(url,params,useFieldOverwrites){var key,value,qs=\"\";for(key in params)if(params.hasOwnProperty(key)===true){value=params[key];qs+=(qs?\"\\x26\":\"\")+key+\"\\x3d\"+encodeURIComponent(value)}if(qs.length\u003E0)return url+\"?\"+qs;else return url};var copyObject=function(obj){var key,objCopy;\nif(arguments.length===2){objCopy=obj;obj=arguments[1]}else objCopy={};for(key in obj)if(obj.hasOwnProperty(key))objCopy[key]=obj[key];return objCopy};var stringifyJson=JSON?JSON.stringify:function(obj){var t=typeof obj;if(t!=\"object\"||obj===null){if(t==\"string\")obj='\"'+obj+'\"';return String(obj)}else{var n,v,json=[],arr=obj\u0026\u0026obj.constructor==Array;for(n in obj)if(obj.hasOwnProperty(n)){v=obj[n];t=typeof v;if(t==\"string\")v='\"'+v+'\"';else if(t==\"object\"\u0026\u0026v!==null)v=stringifyJson(v);json.push((arr?\"\":\n'\"'+n+'\":')+String(v))}return(arr?\"[\":\"{\")+String(json)+(arr?\"]\":\"}\")}};var extractPageMetaTags=function(obj){var name,content,i;var tags=document.getElementsByTagName(\"meta\");var whiteListObj={PT:\"\",CG:\"\",SCG:\"\",byl:\"\",tom:\"\",hdl:\"\",ptime:\"\",cre:\"\",articleid:\"\",channels:\"\",CN:\"\",CT:\"\"};var errorPageMap={PST:\"Error Page\",errorpage:\"true\"};obj=obj||{};obj.sourceApp=sourceApp;for(i=0;i\u003Ctags.length;i++){name=tags[i].getAttribute(\"name\");content=tags[i].getAttribute(\"content\");if(typeof name===\"string\"\u0026\u0026\ntypeof content===\"string\"){if(whiteListObj.hasOwnProperty(name))whiteListObj[name]=content;if(errorPageMap[name]===content)obj.errorPage=\"true\"}}if(whiteListObj.CG.toLowerCase()===\"opinion\"){whiteListObj.channels+=whiteListObj.channels===\"\"?\"\":\";\";whiteListObj.channels+=whiteListObj.CG.toLowerCase()}function assetDataBackfill(whiteListObj){var assetData=", ["escape", ["macro", 451], 8, 16], "||{},assetBackfill={PT:", ["escape", ["macro", 57], 8, 16], ",articleid:assetData.id,hdl:assetData.headline,ptime:assetData.publishedTimestamp,\nbyl:Array.isArray(assetData.authors)\u0026\u0026assetData.authors.join(\",\"),CG:assetData.section,SCG:assetData.subSection,tom:assetData.tom,cre:assetData.newsSource},backfillKeys=Object.keys(assetBackfill),backFilled=\"\";for(i=0;i\u003CbackfillKeys.length;i++)if(!whiteListObj[backfillKeys[i]]\u0026\u0026assetBackfill[backfillKeys[i]]){if(backFilled)backFilled+=\",\";whiteListObj[backfillKeys[i]]=assetBackfill[backfillKeys[i]];backFilled+=backfillKeys[i]}whiteListObj.backfilled=backFilled}assetDataBackfill(whiteListObj);return obj.pageMetaData=\nstringifyJson(whiteListObj)};var additionalClientData=function(obj){var date,data;data={\"ul\":function(){var ul;if(navigator.appName===\"Netscape\")ul=navigator.language;else ul=navigator.userLanguage;return ul}(),\"js\":\"Yes\",\"jv\":function(){var agt=navigator.userAgent.toLowerCase(),major=parseInt(navigator.appVersion,10),mac=agt.indexOf(\"mac\")!=-1,ff=agt.indexOf(\"firefox\")!=-1,ff0=agt.indexOf(\"firefox\/0.\")!=-1,ff10=agt.indexOf(\"firefox\/1.0\")!=-1,ff15=agt.indexOf(\"firefox\/1.5\")!=-1,ff2up=ff\u0026\u0026!ff0\u0026\u0026!ff10\u0026\u0026\n!ff15,nn=!ff\u0026\u0026agt.indexOf(\"mozilla\")!=-1\u0026\u0026agt.indexOf(\"compatible\")==-1,nn4=nn\u0026\u0026major===4,nn6up=nn\u0026\u0026major\u003E=5,ie=agt.indexOf(\"msie\")!=-1\u0026\u0026agt.indexOf(\"opera\")==-1,ie4=ie\u0026\u0026major==4\u0026\u0026agt.indexOf(\"msie 4\")!=-1,ie5up=ie\u0026\u0026!ie4,op=agt.indexOf(\"opera\")!=-1,op5=agt.indexOf(\"opera 5\")!=-1||agt.indexOf(\"opera\/5\")!=-1,op6=agt.indexOf(\"opera 6\")!=-1||agt.indexOf(\"opera\/6\")!=-1,op7up=op\u0026\u0026!op5\u0026\u0026!op6,jv=\"1.1\";if(ff2up===true)jv=\"1.7\";else if(ff15===true)jv=\"1.6\";else if(ff0===true||ff10===true||nn6up===true||op7up===\ntrue)jv=\"1.5\";else if(mac===true\u0026\u0026ie5up===true||op6===true)jv=\"1.4\";else if(ie5up===true||nn4===true||op5===true)jv=\"1.3\";else if(ie4===true)jv=\"1.2\";return jv}(),\"fi\":\"No\"};date=new Date;data.tz=date.getTimezoneOffset()\/60*-1;data.bh=date.getHours();if(typeof screen===\"object\"){if(navigator.appName===\"Netscape\")data.cd=screen.pixelDepth;else data.cd=screen.colorDepth;data.sr=screen.width+\"x\"+screen.height}if(parseInt(navigator.appVersion,10)\u003E3)if(navigator.appName===\"Microsoft Internet Explorer\"\u0026\u0026\ndocument.body)data.bs=document.body.offsetWidth+\"x\"+document.body.offsetHeight;else if(navigator.appName===\"Netscape\")data.bs=window.innerWidth+\"x\"+window.innerHeight;if(typeof navigator.javaEnabled()===\"boolean\")data.jo=navigator.javaEnabled()?\"Yes\":\"No\";(function(){var i,flash;if(window.ActiveXObject)for(i=50;i\u003E0;i-=1)try{flash=new window.ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.\"+i);data.fi=\"Yes\";data.fv=i+\".0\";break}catch(e){}else if(navigator.plugins\u0026\u0026navigator.plugins.length)for(i=0;i\u003Cnavigator.plugins.length;i+=\n1)if(navigator.plugins[i].name.indexOf(\"Shockwave Flash\")!=-1){data.fi=\"Yes\";data.fv=navigator.plugins[i].description.split(\" \")[2];break}})();if(window.matchMedia)if(window.matchMedia(\"(orientation: portrait)\").matches===true)data.or=\"port\";else if(window.matchMedia(\"(orientation: landscape)\").matches===true)data.or=\"land\";obj.additionalClientData=stringifyJson(data);return obj};clazz=function(){var trackNow,agentId,mergeNewData,getBaseUrl;var datumId=null;var parentDatumId=null;var firedFirstEvent=\nfalse;var firstEventReturned=false;var scripts=[];var queue=[];var newData=[];var et2agentId;var et2datumId=null;var et2parentDatumId=null;var firstET2EventReturned=false;var etAgentIdEventFired=false;if(this instanceof window.EventTracker===false)return new window.EventTracker;getBaseUrl=function(opts){if(typeof opts===\"object\"\u0026\u0026opts.et2)return false;return\"https:\/\/\"+etHost+\"\/\"};trackNow=function(evt,options){var scriptElem,oldScriptElem,et2evt;var callbackNum=nextCallbackNum;var useOverwrites=options\u0026\u0026\noptions.useFieldOverwrites===true?true:false;nextCallbackNum+=1;window.EventTracker[\"cb\"+callbackNum]=function(result){var i;delete window.EventTracker[\"cb\"+callbackNum];if(result.status\u0026\u0026result.status===\"OK\"){if(!datumId\u0026\u0026options.buffer\u0026\u0026!firstEventReturned){firstEventReturned=true;datumId=result.datumIds\u0026\u0026result.datumIds.length?result.datumIds[0]:result.datumId;for(i=0;i\u003Cqueue.length;i+=1)trackNow(queue[i].evt,queue[i].options);queue=[]}if(!agentId)agentId=result.agentId;if(options.callback)options.callback(null,\nresult)}else if(options.callback)options.callback(new Error(\"Event tracking failed\"),result)};evt=copyObject(evt);if(!options.buffer)evt.instant=\"1\";evt.callback=\"window.EventTracker.cb\"+callbackNum;if(datumId\u0026\u0026options.buffer)evt.datumId=datumId;if(options.sendMeta)extractPageMetaTags(evt);if(options.collectClientData)additionalClientData(evt);if(agentId){evt.agentId=agentId;if(!etAgentIdEventFired){etAgentIdEventFired=true;dataLayer.push({event:\"etAgentId\",session:{etAgentId:agentId}})}}if(options.config){options.config.merge(evt);\nif(evt._isNewPageTracker){delete evt.datumId;datumId=null;firstEventReturned=false;firstET2EventReturned=false;delete evt._isNewPageTracker}}var requestUrl=buildUrl(getBaseUrl(),evt,useOverwrites);var et2Url=getBaseUrl({\"et2\":true});if(et2Url){window.EventTracker[\"et2cb\"+callbackNum]=function(result){var i;delete window.EventTracker[\"et2cb\"+callbackNum];if(result.status\u0026\u0026result.status===\"OK\"){if(!et2datumId\u0026\u0026options.buffer\u0026\u0026!firstET2EventReturned){firstET2EventReturned=true;et2datumId=result.datumIds\u0026\u0026\nresult.datumIds.length?result.datumIds[0]:result.datumId;for(i=0;i\u003Cqueue.length;i+=1)trackNow(queue[i].evt,queue[i].options);queue=[]}if(!et2agentId)et2agentId=result.agentId}};et2evt=copyObject(evt);et2evt.callback=\"window.EventTracker.et2cb\"+callbackNum;if(et2datumId\u0026\u0026options.buffer)et2evt.datumId=et2datumId;if(et2evt.subject!==\"page\")et2evt.parentDatumId=et2parentDatumId;if(et2agentId)et2evt.agentId=et2agentId}if(requestUrl.length\u003C2048){scriptElem=document.createElement(\"script\");scriptElem.src=\nrequestUrl;document.body.appendChild(scriptElem);scripts.push(scriptElem);if(et2Url){var scriptElemET2;requestUrl=buildUrl(et2Url,et2evt,useOverwrites);scriptElemET2=document.createElement(\"script\");scriptElemET2.src=requestUrl;document.body.appendChild(scriptElemET2);scripts.push(scriptElemET2)}if(scripts.length\u003E5){oldScriptElem=scripts.shift();document.body.removeChild(oldScriptElem)}}else{var XHR=new xhr(\"POST\",getBaseUrl(),window.EventTracker[\"cb\"+callbackNum]);XHR.ajax(requestUrl.split(\"?\",2)[1]);\nif(et2Url){requestUrl=buildUrl(et2Url,et2evt,useOverwrites);XHR=new xhr(\"POST\",et2Url,window.EventTracker[\"et2cb\"+callbackNum]);XHR.ajax(requestUrl.split(\"?\",2)[1])}}};mergeNewData=function(target,reset){var newDataItem,i,key;if(newData.length\u003E0){for(i=0;i\u003CnewData.length;i++){newDataItem=newData[i];for(key in newDataItem)if(newDataItem.hasOwnProperty(key))target[key]=newDataItem[key]}if(reset)newData=[]}return target};this.track=function(evt,options){options=options||{};if(!options.background)lastEventTime=\n(new Date).valueOf();if(evt.subject!==\"page\"\u0026\u0026this.getParentDatumId()!==null)evt.parentDatumId=this.getParentDatumId();if(evt.subject!==\"page\"\u0026\u0026this.getET2ParentDatumId()!==null)this.getET2ParentDatumId();populateET2PageviewId(evt);evt.sourceApp=sourceApp;evt.gtm=", ["escape", ["macro", 87], 8, 16], ";evt=mergeNewData(evt,true);if(evt.subject!==\"page\"||evt.subject===\"page\"\u0026\u0026(!firedFirstEvent||evt._isNewPageTracker)){var assetData=", ["escape", ["macro", 451], 8, 16], ",skipFilters=[\"content\",\"jkiddata\"],dlUser=", ["escape", ["macro", 452], 8, 16], ",\ndlSession=", ["escape", ["macro", 453], 8, 16], ";delete assetData.storyElements;assetData.jkiddSrc=\"fe\";evt.assetData=JSON.stringify(assetData);if(false\u0026\u0026dlUser){var userData={\"userType\":dlUser.type,\"regiId\":dlUser.regiId,\"isNewsSubscriber\":dlUser.isNewsSubscriber?dlUser.isNewsSubscriber:0,\"loggedIn\":0,\"jkiddSrc\":\"fe\"};if(dlUser.subscriptions){userData.subscriptions=[dlUser.subscriptions];userData.lastUpdate=dlUser.lastUpdate}if(dlSession\u0026\u0026dlSession.isLoggedIn)userData.loggedIn=1;evt.userData=JSON.stringify(userData);\nskipFilters.push(\"userdata\")}evt.skipFilter=JSON.stringify(skipFilters)}if(!options.buffer)trackNow(evt,options);else if(datumId||firstEventReturned||!firedFirstEvent){firedFirstEvent=true;trackNow(evt,options)}else queue.push({evt:copyObject(evt),options:copyObject(options)})};this.updateData=function(oArg){if(oArg instanceof Array)newData=newData.concat(oArg);else if(typeof oArg===\"object\")newData.push(oArg)};this.hasTrackedEventRecently=function(){return(new Date).valueOf()-lastEventTime\u003C96E4};\nthis.getDatumId=function(){return datumId};this.getET2DatumId=function(){return et2datumId};this.getParentDatumId=function(){if(parentDatumId===null\u0026\u0026window.pageEventTracker\u0026\u0026window.pageEventTracker.getDatumId()!==null)parentDatumId=window.pageEventTracker.getDatumId();return parentDatumId};this.getET2ParentDatumId=function(){if(et2parentDatumId===null\u0026\u0026window.pageEventTracker\u0026\u0026window.pageEventTracker.getET2DatumId()!==null)et2parentDatumId=window.pageEventTracker.getET2DatumId();return et2parentDatumId};\nthis.pixelTrack=function(evt,qs){var imgsrc,validEvt,validQs;validEvt=function(e){var k;if(typeof e!==\"object\")return false;for(k in e)if(e.hasOwnProperty(k))return true;return false}(evt);validQs=typeof qs===\"string\"\u0026\u0026qs!==\"\";if(!validEvt\u0026\u0026!validQs)return;imgsrc=\"https:\/\/\"+etHost+\"\/pixel\";if(validEvt)imgsrc=buildUrl(imgsrc,evt);if(validQs)imgsrc+=(imgsrc.indexOf(\"?\")===-1?\"?\":\"\\x26\")+qs;imgsrc+=\"\\x26gtm\\x3d", ["escape", ["macro", 87], 7], "\";(new Image).src=imgsrc};this.buildUrl=buildUrl;this.mergeNewData=mergeNewData;\nthis.getBaseUrl=getBaseUrl;this.populateET2PageviewId=populateET2PageviewId;this.xhr=xhr;this.trackPost=function(evt,options){options=options||{};if(this.xhr)this.xhr(\"POST\",getBaseUrl(),options.callback).ajax(evt)}};clazz.Utils={copyObject:copyObject,stringifyJson:stringifyJson};return clazz}();\nwindow.EventTracker.Config=function(config){var etConfig=config||{};var _config=etConfig.event||{};var _options=etConfig.options||{};var processed={};var getValue=function(value){return typeof value===\"function\"?value():value};return{isSuppressed:function(name){var value=_config[name];return value\u0026\u0026value.suppress===true},get:function(name,defVal){var oneConfig,arr,value;if(oneConfig=_config[name]){if(oneConfig.suppress===true)return;if(oneConfig.repeat===false)processed[name]=1;if(defVal){arr=oneConfig.overwrite===\nfalse?[defVal,oneConfig.value]:[oneConfig.value,defVal];while(arr.length\u003E0)if(typeof(value=getValue(arr.shift()))!==\"undefined\")return value}else return getValue(oneConfig.value)}processed[name]=1;return getValue(defVal)},getOptions:function(name){return getValue(_options[name])},getOption:function(name,defVal){return _options.general\u0026\u0026_options.general[name]?_options.general[name]:defVal},merge:function(evt){var name,value;for(name in _config)if(_config.hasOwnProperty(name)){if(processed[name])continue;\nvalue=_config[name];if(value\u0026\u0026value.suppress===true){delete evt[name];continue}if(typeof(value=this.get(name,evt[name]))!==\"undefined\")evt[name]=value}}}};clearTimeout(window.pageEventTrackerTimeout);window.pageEventTrackerTimeout=0;\nwindow.pageEventTracker=function(updateFrequency){var genUUID=function(){return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var r=Math.random()*16|0,v=c===\"x\"?r:r\u00263|8;return v.toString(16)})};var setUpdateTimeout,bgTrackerTrack,evt;var utils=window.EventTracker.Utils;var tracker=new window.EventTracker;var impressions=[];var viewport_detail=[];var startTime=(new Date).valueOf();var config=new window.EventTracker.Config(window.EventTrackerPageConfig);var subject=config.get(\"subject\",\n\"page\");var url=config.get(\"url\",document.location.href);var referrer=config.get(\"referrer\",", ["escape", ["macro", 108], 8, 16], ");var linkTags=document.getElementsByTagName(\"link\");var assetUrl=config.get(\"assetUrl\",function(u){return function(){var i,link;var href=u||document.location.href,links=linkTags||[];var seenCanonicalOverride=false;if(links\u0026\u0026links.length\u003E0)for(i=0;i\u003Clinks.length;i++){link=links[i];if(link)if(link.rel===\"canonicalOverride\"){href=link.href;seenCanonicalOverride=true;break}else if(!seenCanonicalOverride\u0026\u0026\nlink.rel===\"canonical\"){href=link.href;break}}return href}}(url));if(", ["escape", ["macro", 116], 8, 16], "\u0026\u0026typeof url===\"string\"){var connector=url.indexOf(\"?\")\u003E-1?\"\\x26\":\"?\";url+=connector+\"WT.z_jog\\x3d1\"}var baseEvt={subject:subject,url:url,assetUrl:", ["escape", ["macro", 30], 8, 16], "||assetUrl,referrer:", ["escape", ["macro", 108], 8, 16], "||referrer,clientTimeStamp:Date.now(),totalTime:0,evtUUID:genUUID(),gtm:", ["escape", ["macro", 87], 8, 16], "};var resetTimeout=function(){clearTimeout(window.pageEventTrackerTimeout);window.pageEventTrackerTimeout=\n0};var addImpressions=function(myevt){if(impressions.length===0)return;myevt.impressions=utils.stringifyJson(impressions);impressions.length=0};var addViewportDetails=function(myevt){if(!", ["escape", ["macro", 73], 8, 16], "||viewport_detail.length===0)return;myevt.viewport_detail=utils.stringifyJson(viewport_detail);viewport_detail.length=0};tracker.addModuleImpression=function(module){if(config.isSuppressed(\"impressions\"))return;impressions.unshift(utils.copyObject(module));if(module.priority){delete module.priority;\nthis.shortCircuit()}};tracker.addViewportDetail=function(viewport){if(config.isSuppressed(\"viewport_detail\"))return;viewport_detail.unshift(utils.copyObject(viewport))};updateFrequency=config.getOption(\"updateFrequency\",6E4);bgTrackerTrack=function(isNewPageConfig){var newEvt=tracker.mergeNewData(utils.copyObject(baseEvt),false);newEvt.totalTime=(new Date).valueOf()-startTime;if(", ["escape", ["macro", 455], 8, 16], ")newEvt.page_view_id=", ["escape", ["macro", 455], 8, 16], ";if(", ["escape", ["macro", 456], 8, 16], ")newEvt.performance=JSON.stringify(", ["escape", ["macro", 456], 8, 16], ");\nif(", ["escape", ["macro", 457], 8, 16], ")newEvt.presentation=JSON.stringify(", ["escape", ["macro", 457], 8, 16], ");addImpressions(newEvt);addViewportDetails(newEvt);if(isNewPageConfig){newEvt._isNewPageTracker=true;tracker.populateET2PageviewId(newEvt)}tracker.track(newEvt,{background:true,useFieldOverwrites:true,buffer:true,callback:setUpdateTimeout,config:config})};setUpdateTimeout=function(){return};evt=tracker.mergeNewData(utils.copyObject(baseEvt),false);addImpressions(evt);addViewportDetails(evt);if(", ["escape", ["macro", 455], 8, 16], ")evt.page_view_id=\n", ["escape", ["macro", 455], 8, 16], ";if(", ["escape", ["macro", 456], 8, 16], ")evt.performance=JSON.stringify(", ["escape", ["macro", 456], 8, 16], ");if(", ["escape", ["macro", 457], 8, 16], ")evt.presentation=JSON.stringify(", ["escape", ["macro", 457], 8, 16], ");(function(){var links=linkTags||document.getElementsByTagName(\"link\");var objList=[];var link;for(var l=0;l\u003Clinks.length;l++){link=links[l];if(link\u0026\u0026link.rel===\"alternate\"\u0026\u0026link.hreflang)objList.push({\"language\":link.hreflang,\"url\":link.href})}if(objList.length\u003E0)evt.alternate=JSON.stringify(objList)})();tracker.populateET2PageviewId(evt);\ntracker.track(evt,utils.copyObject({sendMeta:true,useFieldOverwrites:true,buffer:true,collectClientData:true,callback:setUpdateTimeout,config:config},config.getOptions(\"firstcall\")));tracker.shortCircuit=function(){if(window.pageEventTrackerTimeout)resetTimeout();bgTrackerTrack()};tracker.trackNewPage=function(oConfig){if(!oConfig)return;oConfig.totalTime={value:0,repeat:false};var eventTrackerPageConfig={event:oConfig};config=new window.EventTracker.Config(eventTrackerPageConfig);if(window.pageEventTrackerTimeout)resetTimeout();\nbgTrackerTrack(true)};return tracker}();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 4
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,u){function k(){var b,a;if(a=d.crypto||d.msCrypto)a=a.getRandomValues(new Uint8Array(18));else for(a=[];18\u003Ea.length;)a.push(256*Math.random()^255\u0026(b=b||+new Date)),b=Math.floor(b\/256);return btoa(String.fromCharCode.apply(String,a)).replace(\/\\+\/g,\"-\").replace(\/\\\/\/g,\"_\")}var l,m,e,f,g,h=[],r=\"object\"==typeof d.navigator\u0026\u0026\"string\"==typeof d.navigator.userAgent\u0026\u0026\/iP(ad|hone|od)\/.test(d.navigator.userAgent),n=\"object\"==typeof d.navigator\u0026\u0026d.navigator.sendBeacon,t=n?r?\"xhr_ios\":\"beacon\":\"xhr\";\nif(d.nyt_et)try{console.warn(\"et2 snippet should only load once per page\")}catch(b){}else d.nyt_et=function(){function b(a){if(h.length){var c=l+\"\/track\",b=JSON.stringify(h);if(\"beacon\"===t||n\u0026\u0026a)d.navigator.sendBeacon(c,b);else{a=\"undefined\"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\");a.open(\"POST\",c);a.withCredentials=!0;a.setRequestHeader(\"Accept\",\"*\/*\");\"string\"==typeof b?a.setRequestHeader(\"Content-Type\",\"text\/plain;charset\\x3dUTF-8\"):\"[object Blob]\"==={}.toString.call(b)\u0026\u0026\nb.type\u0026\u0026a.setRequestHeader(\"Content-Type\",b.type);try{a.send(b)}catch(v){}}h.length=0;clearTimeout(g);g=null}}var a,p,c=arguments;if(\"string\"==typeof c[0]\u0026\u0026\/init\/.test(c[0])\u0026\u0026(e=k(),\"init\"==c[0]\u0026\u0026!m)){if(m=k(),\"string\"!=typeof c[1]||!\/^http\/.test(c[1]))throw Error(\"init must include an et host url\");l=String(c[1]).replace(\/\\\/$\/,\"\");\"string\"==typeof c[2]\u0026\u0026(f=c[2])}var q=\"page_exit\"==(a=c[c.length-1]).subject||\"ob_click\"==(a.eventData||{}).type;l\u0026\u0026\"object\"==typeof a\u0026\u0026(p=\"page\"==a.subject?e:k(),a.sourceApp\u0026\u0026\n(f=a.sourceApp),a.sourceApp=f,h.push({context_id:m,pageview_id:e,event_id:p,client_lib:\"v1.0.5-GTM\",sourceApp:f,how:q\u0026\u0026r\u0026\u0026n?\"beacon_ios\":t,client_ts:+new Date,data:JSON.parse(JSON.stringify(a))}),\"send\"==c[0]||p==e||q?b(q):g||(g=setTimeout(b,5500)))},d.nyt_et.get_pageview_id=function(){return e}}(window);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()||nyt_et(\"init\",", ["escape", ["macro", 508], 8, 16], ",", ["escape", ["macro", 94], 8, 16], ",{subject:\"page\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 108], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 94], 8, 16], ",\ngtm:", ["escape", ["macro", 87], 8, 16], ",is_iframe:window.top!=window});nytAnalytics=window.nytAnalytics||{};nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 146
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026(nytAnalytics=window.nytAnalytics||{},nytAnalytics.et2_pageview_id===nyt_et.get_pageview_id()?nyt_et(\"pageinit\",\"", ["escape", ["macro", 508], 7], "\",{subject:\"page\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,url:location.href,referrer:", ["escape", ["macro", 108], 8, 16], "||\nvoid 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 94], 8, 16], ",gtm:", ["escape", ["macro", 87], 8, 16], ",is_iframe:window.top!=window}):nyt_et({subject:\"page_update\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,url:location.href,referrer:", ["escape", ["macro", 108], 8, 16], "||\nvoid 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 94], 8, 16], ",gtm:", ["escape", ["macro", 87], 8, 16], ",is_iframe:window.top!=window}),nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id())})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 157
            }, {
                "function": "__html",
                "priority": 100,
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 145
            }, {
                "function": "__html",
                "priority": 1,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){var a={};3\u003CparseInt(navigator.appVersion,10)\u0026\u0026(\"Microsoft Internet Explorer\"===navigator.appName\u0026\u0026document.body?a.size=document.body.offsetWidth+\"x\"+document.body.offsetHeight:\"Netscape\"===navigator.appName\u0026\u0026(a.size=window.innerWidth+\"x\"+window.innerHeight));var b=new Date;a.timeZone=b.getTimezoneOffset()\/60*-1;a.timeZoneHour=b.getHours();window.matchMedia\u0026\u0026(!0===window.matchMedia(\"(orientation: portrait)\").matches?a.orientation=\"port\":!0===window.matchMedia(\"(orientation: landscape)\").matches\u0026\u0026\n(a.orientation=\"land\"));a.language=\"Netscape\"===navigator.appName?navigator.language:navigator.userLanguage;nyt_et({subject:\"page_update\",browser:a,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 108], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||\n{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,referrer:\"", ["escape", ["macro", 108], 7], "\",gtm:", ["escape", ["macro", 87], 8, 16], ",is_iframe:window.top!=window})}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 156
            }, {
                "function": "__csm",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_clientId": "3005403",
                "tag_id": 12
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 49],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 418],
                "vtp_eventAction": ["macro", 47],
                "vtp_eventLabel": ["macro", 54],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_eventValue": ["macro", 66],
                "vtp_metric": ["list", ["map", "index", ["macro", 78], "metric", ["macro", 79]]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 36
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": ["macro", 27],
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 24],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 418],
                "vtp_eventAction": ["macro", 21],
                "vtp_eventLabel": ["macro", 26],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 20], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 37
            }, {
                "function": "__ua",
                "setup_tags": ["list", ["tag", 79, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 418],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 38
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/www.nytimes.com\/svc\/comscore\/pvc.html",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 419],
                "tag_id": 46
            }, {
                "function": "__ua",
                "teardown_tags": ["list", ["tag", 76, 0]],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "scroll",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 418],
                "vtp_eventAction": ["macro", 420],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 52
            }, {
                "function": "__img",
                "setup_tags": ["list", ["tag", 49, 0]],
                "teardown_tags": ["list", ["tag", 48, 0]],
                "once_per_load": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/stags.bluekai.com\/site\/50136?limit=1\u0026id=", ["escape", ["macro", 223], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 419],
                "tag_id": 93
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 421]],
                    ["map", "key", "u5", "value", ["macro", 422]],
                    ["map", "key", "u6", "value", ["macro", 423]],
                    ["map", "key", "u7", "value", ["macro", 223]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u10", "value", ["macro", 108]],
                    ["map", "key", "u11", "value", ["macro", 424]],
                    ["map", "key", "u12", "value", ["macro", 425]],
                    ["map", "key", "u13", "value", ["macro", 426]],
                    ["map", "key", "u14", "value", ["macro", 427]],
                    ["map", "key", "u15", "value", ["macro", 428]],
                    ["map", "key", "u16", "value", ["macro", 28]],
                    ["map", "key", "u17", "value", ["macro", 88]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "allpa0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 419],
                "vtp_url": ["macro", 100],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 115
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 430],
                "vtp_eventCategory": ["macro", 431],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 432], "metric", "1"],
                    ["map", "index", ["macro", 433], "metric", "1"],
                    ["map", "index", ["macro", 434], "metric", "1"]
                ],
                "vtp_gaSettings": ["macro", 418],
                "vtp_eventAction": ["macro", 435],
                "vtp_eventLabel": ["macro", 436],
                "vtp_dimension": ["list", ["map", "index", ["macro", 437], "dimension", ["macro", 438]],
                    ["map", "index", ["macro", 439], "dimension", ["macro", 440]],
                    ["map", "index", ["macro", 441], "dimension", ["macro", 442]],
                    ["map", "index", ["macro", 148], "dimension", ["macro", 149]]
                ],
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 118
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 421]],
                    ["map", "key", "u5", "value", ["macro", 284]],
                    ["map", "key", "u6", "value", ["macro", 443]],
                    ["map", "key", "u7", "value", ["macro", 444]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u9", "value", ["macro", 88]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "newsl0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 419],
                "vtp_url": ["macro", 100],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 121
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": false,
                "vtp_url": "https:\/\/dc.ads.linkedin.com\/collect\/?pid=105730\u0026conversionId=370658\u0026fmt=gif",
                "tag_id": 127
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 421]],
                    ["map", "key", "u5", "value", ["macro", 422]],
                    ["map", "key", "u6", "value", ["macro", 423]],
                    ["map", "key", "u7", "value", ["macro", 223]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u10", "value", ["macro", 108]],
                    ["map", "key", "u11", "value", ["macro", 424]],
                    ["map", "key", "u12", "value", ["macro", 425]],
                    ["map", "key", "u13", "value", ["macro", 426]],
                    ["map", "key", "u14", "value", ["macro", 427]],
                    ["map", "key", "u15", "value", ["macro", 428]],
                    ["map", "key", "u16", "value", ["macro", 28]],
                    ["map", "key", "u17", "value", ["macro", 88]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "regi0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 419],
                "vtp_url": ["macro", 100],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 133
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/dc.ads.linkedin.com\/collect\/?pid=105730\u0026conversionId=370666\u0026fmt=gif",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 419],
                "tag_id": 135
            }, {
                "function": "__twitter_website_tag",
                "once_per_event": true,
                "vtp_event_type": "Signup",
                "vtp_twitter_pixel_id": ["macro", 447],
                "tag_id": 136
            }, {
                "function": "__twitter_website_tag",
                "once_per_event": true,
                "vtp_event_type": "CompleteRegistration",
                "vtp_twitter_pixel_id": "nzcu8",
                "tag_id": 137
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 421]],
                    ["map", "key", "u5", "value", ["macro", 422]],
                    ["map", "key", "u6", "value", ["macro", 423]],
                    ["map", "key", "u7", "value", ["macro", 223]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u10", "value", ["macro", 108]],
                    ["map", "key", "u11", "value", ["macro", 424]],
                    ["map", "key", "u12", "value", ["macro", 425]],
                    ["map", "key", "u13", "value", ["macro", 426]],
                    ["map", "key", "u14", "value", ["macro", 427]],
                    ["map", "key", "u15", "value", ["macro", 428]],
                    ["map", "key", "u16", "value", ["macro", 28]],
                    ["map", "key", "u17", "value", ["macro", 88]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "remar0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "gatew0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 419],
                "vtp_url": ["macro", 100],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 138
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "1008590664",
                "vtp_conversionLabel": "15HpCJzjkogBEMi-9-AD",
                "vtp_url": ["macro", 100],
                "vtp_enableProductReportingCheckbox": false,
                "vtp_enableNewCustomerReportingCheckbox": false,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "tag_id": 153
            }, {
                "function": "__gclidw",
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieUpdateFeature": false,
                "tag_id": 159
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/conv-tm.everesttech.net\/stats\/1\/conv?cpk=r8r9vJweeOxyOVE1yJjr\u0026cak=qUqrnV6o1YdrHwpOUDqY",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 419],
                "tag_id": 160
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/rtd-tm.everesttech.net\/upi\/?sid=7hUAYoSZMFEXrlLULNp7\u0026cs=1",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 419],
                "tag_id": 161
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "registration",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 418],
                "vtp_eventAction": "register",
                "vtp_eventLabel": ["macro", 445],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 163
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", ["escape", ["macro", 448], 14, 3], "pixel?url=", ["escape", ["macro", 89], 12], "\u0026referrer=", ["escape", ["macro", 91], 12], "\u0026subject=registration-event\u0026eventName=registered\u0026sourceApp=nyt-vi\u0026instant=1\u0026gtm=", ["escape", ["macro", 87], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 419],
                "tag_id": 164
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 66],
                "vtp_eventCategory": ["macro", 49],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 78], "metric", ["macro", 79]]],
                "vtp_gaSettings": ["macro", 418],
                "vtp_eventAction": "impression",
                "vtp_eventLabel": ["macro", 54],
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 165
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", ["escape", ["macro", 448], 14, 3], "pixel?url=", ["escape", ["macro", 89], 12], "\u0026referrer=", ["escape", ["macro", 91], 12], "\u0026subject=registration-event\u0026eventName= hitRegiWall\u0026sourceApp=nyt-vi\u0026instant=1\u0026gtm=", ["escape", ["macro", 87], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 419],
                "tag_id": 166
            }, {
                "function": "__hl",
                "tag_id": 186
            }, {
                "function": "__hl",
                "tag_id": 187
            }, {
                "function": "__hl",
                "tag_id": 188
            }, {
                "function": "__hl",
                "tag_id": 189
            }, {
                "function": "__hl",
                "tag_id": 190
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.facebookPixel=function(g){function m(b){b=b||{};var a=b.pixelName||\"PageView\";b=f(b,e);fbq(\"track\",a,b)}function f(b,a){var c;b=b||{};a=a||{};for(c in a)b[c]=a[c]\u0026\u0026\"object\"===typeof a[c]?b[c]\u0026\u0026\"object\"===typeof b[c]?f(b[c],a[c]):f({},a[c]):a[c];return b}function n(b){for(var a=2166136261,c=0;c\u003Cb.length;++c)a^=b.charCodeAt(c),a+=(a\u003C\u003C1)+(a\u003C\u003C4)+(a\u003C\u003C7)+(a\u003C\u003C8)+(a\u003C\u003C24);return a\u003E\u003E\u003E0}g=", ["escape", ["macro", 14], 8, 16], ";var l=", ["escape", ["macro", 444], 8, 16], ",k=", ["escape", ["macro", 443], 8, 16], ",e={ad:", ["escape", ["macro", 424], 8, 16], ",articleId:", ["escape", ["macro", 425], 8, 16], "||\n\"\",fbk:localStorage.getItem(\"kxsegs\")||\"\",pScore:", ["escape", ["macro", 423], 8, 16], ",c1Score:", ["escape", ["macro", 426], 8, 16], ",c2Score:", ["escape", ["macro", 427], 8, 16], ",c3Score:", ["escape", ["macro", 428], 8, 16], ",sourceApp:", ["escape", ["macro", 28], 8, 16], "||\"nyt-vi\",watSegs:", ["escape", ["macro", 421], 8, 16], ",fbBrowser:\/\\\/FBIOS\/i.test(navigator.userAgent),content_ids:[n(window.location.pathname)],content_type:\"product\",content_category:nytAnalytics.pagemeta[\"dfp-ad-unit-path\"]||\"\",userAgent:navigator.userAgent,mc:", ["escape", ["macro", 218], 8, 16], "||\"\",referrer:", ["escape", ["macro", 108], 8, 16], ",\npageType:", ["escape", ["macro", 57], 8, 16], "};g\u0026\u0026\"anon\"!==g.toLowerCase()\u0026\u0026(e.userType=g,e.retentionRiskSegment=", ["escape", ["macro", 458], 8, 16], ",e.bundleCoreDigi=", ["escape", ["macro", 459], 8, 16], ",e.bundleCoreHD=", ["escape", ["macro", 460], 8, 16], ");l\u0026\u0026(e.agentID=l);\"number\"==typeof k\u0026\u00260\u003Ck\u0026\u0026(e.engagementLevel=k);window.fbq\u0026\u0026window.nytfbqInitialized||(window.nytfbqInitialized=!0,function(b){!function(a,b,e,g,d,h,f){a.fbq||(d=a.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},a._fbq||(a._fbq=d),d.push=d,d.loaded=\n!0,d.version=\"2.0\",d.queue=[],h=b.createElement(e),h.async=!0,h.src=g,f=b.getElementsByTagName(e)[0],f.parentNode.insertBefore(h,f))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"592202027582499\")}());return{fire:m}}();", ["escape", ["macro", 445], 8, 16], "\u0026\u0026window.facebookPixel.fire({pixelName:\"CompleteRegistration\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 6
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof window.dataLayer\u0026\u0026window.dataLayer.push({video:\"\",asset:\"\",viewport:\"\"});\"object\"===typeof window.nytAnalytics\u0026\u0026window.nytAnalytics.resetPage();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 10
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 1, 0]],
                "teardown_tags": ["list", ["tag", 38, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 21
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"object\"===typeof window.nytAnalytics\u0026\u0026\"function\"===typeof window.nytAnalytics.getData){var eventObj={};\"object\"===typeof eventObj\u0026\u0026\"object\"===typeof pageEventTracker\u0026\u0026(eventObj={action:\"impression\",module:\"", ["escape", ["macro", 464], 7], "\",errorDetail:\"", ["escape", ["macro", 34], 7], "\",eventtimestamp:Date.now()},pageEventTracker.addModuleImpression(eventObj),pageEventTracker.shortCircuit(),window.dataLayer.push({error:\"\"}))};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 22
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){window.dataLayer.push({event:\"delayError\"})},5E3);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 23
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"function\"===typeof EventTracker){var a={};a.assetUrl=", ["escape", ["macro", 30], 8, 16], ";a.url=document.location.href;a.subject=\"module-interactions\";var b={action:\"", ["escape", ["macro", 465], 7], "\",context:\"", ["escape", ["macro", 466], 7], "\",module:\"", ["escape", ["macro", 42], 7], "\",eventName:\"", ["escape", ["macro", 45], 7], "\",elementLabel:\"", ["escape", ["macro", 467], 7], "\",label:\"", ["escape", ["macro", 468], 7], "\",pgtype:\"", ["escape", ["macro", 57], 7], "\",region:\"", ["escape", ["macro", 51], 7], "\",slug:\"", ["escape", ["macro", 469], 7], "\"};", ["escape", ["macro", 470], 8, 16], "\u0026\u0026(b.progress=JSON.stringify(", ["escape", ["macro", 470], 8, 16], "));\n", ["escape", ["macro", 471], 8, 16], "\u0026\u0026(b.newsletter=JSON.stringify(", ["escape", ["macro", 471], 8, 16], "));a.moduleData=JSON.stringify(b);(new EventTracker).track(a);\"function\"===typeof nyt_et\u0026\u0026(a=JSON.parse(JSON.stringify({subject:\"interaction\",gtm:", ["escape", ["macro", 87], 8, 16], ",moduleObj:", ["escape", ["macro", 472], 8, 16], "||", ["escape", ["macro", 473], 8, 16], ",eventData:", ["escape", ["macro", 474], 8, 16], "||{type:", ["escape", ["macro", 465], 8, 16], ",pagetype:", ["escape", ["macro", 57], 8, 16], "}})),!a.eventData.pagetype\u0026\u0026", ["escape", ["macro", 57], 8, 16], "\u0026\u0026(a.eventData.pagetype=", ["escape", ["macro", 57], 8, 16], "),", ["escape", ["macro", 471], 8, 16], "\u0026\u0026\n(a.newsletter=JSON.parse(JSON.stringify(", ["escape", ["macro", 471], 8, 16], "))),nyt_et(\"send\",a))}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 34
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"object\"===typeof window.nytAnalytics\u0026\u0026\"function\"===typeof window.nytAnalytics.getData\u0026\u0026\"function\"===typeof EventTracker){var a=window.nytAnalytics.getData(\"video\"),c={},b=nytAnalytics.getData(\"video.mData\");\"object\"===typeof a\u0026\u0026\"object\"===typeof a.mData\u0026\u0026(c.moduleData=JSON.stringify(a),c.subject=\"module-interactions\",c.assetUrl=", ["escape", ["macro", 30], 8, 16], ",c.url=document.location.href,(new EventTracker).track(c),b.assetUrl=", ["escape", ["macro", 30], 8, 16], ",b.url=document.location.href,b.referrer=", ["escape", ["macro", 108], 8, 16], ",\nb.event=a.eventName,b.subject=\"video-nytv\",(new EventTracker).track(b),\"function\"==typeof nyt_et\u0026\u0026(a=JSON.parse(JSON.stringify(a)),a.subject=\"interaction\",a.mData=b,nyt_et(\"send\",a)))}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 35
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"scrolling_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.scrolling({viewport:", ["escape", ["macro", 475], 8, 16], ",performance:", ["escape", ["macro", 456], 8, 16], ",presentation:", ["escape", ["macro", 457], 8, 16], ",assetUrl:", ["escape", ["macro", 30], 8, 16], "});(function(){var a=document.querySelector(\"#scrolling_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 40
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"heartbeat_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.heartbeat({viewport:", ["escape", ["macro", 475], 8, 16], ",heartbeatInterval:", ["escape", ["macro", 476], 8, 16], ",performance:", ["escape", ["macro", 456], 8, 16], ",presentation:", ["escape", ["macro", 457], 8, 16], "});(function(){var a=document.querySelector(\"#heartbeat_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 41
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"addtrackingparams_temp\" type=\"text\/gtmscript\"\u003E(function(){var c=function(a,b){var c=a\u0026\u0026a.length;if(c\u0026\u0026\"function\"===typeof b)if(\"function\"===typeof a.forEach)a.forEach(b);else if(\"function\"===typeof b)for(;c;)c--,b(a[c])},d=function(a,b){b=(-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\")+b;return a=-1\u003Ca.indexOf(\"#\")?a.replace(\"#\",b+\"#\"):a+b};c(document.querySelectorAll(\"section[data-block-tracking-id]:not(.gtm-tagged)\"),function(a){var b=\"\";a.classList.add(\"gtm-tagged\");b=a.dataset\u0026\u0026a.dataset.blockTrackingId||\"\";c(a.querySelectorAll(\":not(header) \\x3e a\"),function(a){a.href=\nd(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(b)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 57], 8, 16], ")})});c(document.querySelectorAll(\"#recirc-more-in:not(.gtm-tagged), div[class^\\x3delementStyles-moreInContent]:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");b=b.replace(\"More in \",\"\");a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dMoreInSection\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dTrending-trending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"li a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dTrending\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"#recirc-collection:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");a.classList.add(\"gtm-tagged\");\nc(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dAssociated\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+b)})});c(document.querySelectorAll(\"#recirc-follow-channel:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dFollow\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dRecirculation-lonelyTrending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dLonely%20Trending\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"div[class^\\x3delementStyles-relatedcoverage]\"),function(a){c(a.querySelectorAll(\"article a\"),function(a){a.classList.add(\"gtm-tagged\");\na.href=d(a.href,\"action\\x3dclick\\x26module\\x3dRelatedCoverage\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dRelated\")})});var e=document.querySelector(\"nav[class^\\x3dRibbon-ribbon]:not(.gtm-tagged)\");if(e){var f=\"Ribbon\";e.classList.add(\"gtm-tagged\");c(e.querySelectorAll(\"a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(f)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 57], 8, 16], ")})}c(document.querySelectorAll(\"div[class^\\x3delementStyles-editorContent]:not(.gtm-tagged)\"),\nfunction(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\".StoryBodyCompanionColumn aside\"),function(a){c(a.querySelectorAll(\"article a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 57], 7], "\\x26region\\x3dCompanionColumn\\x26contentCollection\\x3dTrending\")})});\n(function(){var a=document.querySelector(\"#addtrackingparams_temp\");a\u0026\u0026(a.outerHTML=\"\")})()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 44
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({video:\"\",asset:\"\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 45
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof nytAnalytics\u0026\u0026\"object\"===typeof pageEventTracker\u0026\u0026(nytAnalytics.activeTime=nytAnalytics.activeTime||0,nytAnalytics.activeTime=1E3*", ["escape", ["macro", 477], 8, 16], ",pageEventTracker.updateData({activeTime:nytAnalytics.activeTime}),pageEventTracker.shortCircuit());\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 54
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.parent===window\u0026\u0026function(){function d(){var a;return a=(a=unescape(document.cookie).match(\"NYT-Edition\\x3d([^;]+)\"))\u0026\u0026a[1]\u0026\u0026-1!==a[1].indexOf(\"edition|GLOBAL\")?\"international.nytimes.com\":\"nytimes.com\"}function b(){var a;regex=\/(^.*)(nytimes.com.*)\/;return a=", ["escape", ["macro", 30], 8, 16], "\u0026\u0026", ["escape", ["macro", 30], 8, 16], ".match(regex)[2]}function c(){var a=[];\"Homepage\"===", ["escape", ["macro", 57], 8, 16], "?a.push(\"Homepage\"):(", ["escape", ["macro", 478], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 478], 8, 16], "),", ["escape", ["macro", 479], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 479], 8, 16], "),\n", ["escape", ["macro", 2], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 2], 8, 16], "),\/parenting\\.\/.test(document.location.host)\u0026\u0026a.push(\"parenting\"));return a.join(\",\")}if(\"object\"==typeof window._sf_async_config\u0026\u0026\"object\"==typeof pSUPERFLY\u0026\u0026\"function\"==typeof pSUPERFLY.virtualPage)pSUPERFLY.virtualPage({sections:c(),path:b(),title:", ["escape", ["macro", 480], 8, 16], "||document.title});else{window._sf_async_config={uid:16698,domain:d(),pingServer:\"pnytimes.chartbeat.net\",useCanonical:!0,path:b(),title:", ["escape", ["macro", 480], 8, 16], "||document.title};_cbq=\nwindow._cbq=window._cbq||[];switch(", ["escape", ["macro", 14], 8, 16], "){case \"sub\":_cbq.push([\"_acct\",\"paid\"]);break;case \"anon\":_cbq.push([\"_acct\",\"anon\"]);break;case \"regi\":_cbq.push([\"_acct\",\"lgdin\"])}try{window._sf_async_config.sections=c()}catch(a){}try{window._sf_async_config.authors=Array.isArray(", ["escape", ["macro", 481], 8, 16], ")\u0026\u0026", ["escape", ["macro", 481], 8, 16], ".join(\",\")}catch(a){}window._sf_endpt=(new Date).getTime();firstScript=document.getElementsByTagName(\"script\")[0];cbScript=document.createElement(\"script\");cbScript.async=\n!0;cbScript.src=\"https:\/\/static.chartbeat.com\/js\/chartbeat.js\";firstScript.parentNode.insertBefore(cbScript,firstScript)}}();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 68
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Ciframe name=\"__bkframe\" height=\"0\" width=\"0\" frameborder=\"0\" style=\"display:none;position:absolute;clip:rect(0px 0px 0px 0px)\" src=\"about:blank\"\u003E\u003C\/iframe\u003E \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bkrtx.com\/js\/bk-coretag.js\"\u003E\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){var e,g,b=[{name:\"Bot\",regex:\"(GomezAgent|yandex.com\/bots|(Googlebot|bingbot|YandexBot|facebookexternalhit)\/[\\\\d]+(?:.[\\\\d]+)?)\"},{name:\"UC Browser\",regex:\"(UCMini|UCBrowser)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Opera\",regex:\"(OPR|Opera)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Sogou Explorer\",regex:\"(SE) ([\\\\d]+)(.[a-zA-Z\\\\d]+)*\"},{name:\"\",regex:\"(Avant Browser)\"},{name:\"\",regex:\"((?:Mobile)?Iron|Puffin|Maxthon|Chromium|Sleipnir|Lightning|QQBrowser|Silk|chromeframe|iCab|Arora|Kindle|Midori|rekonq|Vienna|Epiphany|NetFront|konqueror|PhantomJS|YaBrowser|IEMobile|PaleMoon|Thunderbird|SeaMonkey|baidubrowser|NokiaBrowser|Edge|Avant Browser|Iceweasel|K-Meleon)\/([\\\\d]+)(.[\\\\d]+)*\"},\n{name:\"\",regex:\"(Lunascape)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Firefox\",regex:\"(Firefox)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"MSIE\",regex:\"(?:(Windows).* Trident\/([\\\\d]+)(.[\\\\d]+)*|(MSIE) ([\\\\d]+)(.[\\\\d]+)*)\"},{name:\"Chrome\",regex:\"(Chrome)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Android Browser\",regex:\"(Android)[ \/]([\\\\d]+)(?:.[\\\\d]+.[\\\\d]+)?.*(Mobile )?Safari\"},{name:\"BlackBerry Browser\",regex:\"(BlackBerry|BB[\\\\d]+);.*Mobile Safari\"},{name:\"\",regex:\"(OmniWeb)\/v([\\\\d]+)(?:.[\\\\d]+)\"},{name:\"Chrome iOS\",regex:\"(CriOS)\/([\\\\d]+)(?:.[\\\\d]+)*\"},\n{name:\"Safari\",regex:\"(?:Version\/([\\\\d]+)(?:.[\\\\d]+)* )?(Safari)\/(?:[\\\\d]+(?:.[\\\\d]+)*)\",mobileRegex:\"(iPhone; CPU iPhone OS|iPad; CPU OS).*Mobile\/\"},{name:\"Facebook App\",regex:\"\\\\[(FBAN).*FBAV\/([\\\\d]+)(.[\\\\d]+)*.*\\\\]?\"},{name:\"NYT App\",regex:\"(NYTimes(-[a-zA-Z]+)?|Crosswords|NYTNow|Cooking|NYTOpinion|)\/([\\\\d]+)(.[\\\\d]+)* CFNetwork\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"AppleWebKit Based Browser\",regex:\"(AppleWebKit)\/([\\\\d]+)(.[\\\\d]+)*\"}];for(e=0;e\u003Cb.length;e++){var c=b[e];if((g=(new RegExp(c.regex)).exec(a))\u0026\u0026\n1\u003Cg.length)return e=c.name||g[1],c.mobileRegex\u0026\u0026(new RegExp(c.mobileRegex)).test(a)\u0026\u0026(e+=\" Mobile\"),e}return\"Unknown\"},a=function(a){return\"object\"===typeof a\u0026\u0026a instanceof Array?a.filter(function(a){return\"\"!==a}).map(function(a){return a.replace(\/,\/g,\" \")}):[]},k=", ["escape", ["macro", 482], 8, 16], "||(document.querySelector(\"meta[name\\x3dCG]\")||{}).content,l=\"\";if(!\/Homepage\/i.test(k)){l=a(", ["escape", ["macro", 483], 8, 16], ");var m=a(", ["escape", ["macro", 485], 8, 16], "||", ["escape", ["macro", 484], 8, 16], "||[]),b=a(", ["escape", ["macro", 486], 8, 16], ");a=a(", ["escape", ["macro", 487], 8, 16], ");\nl=l.concat(m).concat(b).concat(a).join(\",\")}bk_ignore_meta=!0;m=function(a){var c=[];if(null!=a\u0026\u0026\"\"!=a)for(var b in a)null!=a[b]\u0026\u0026\"InclusionFlag\"in a[b]\u0026\u00261==a[b].InclusionFlag\u0026\u0026c.push(b);return c.join(\",\")};bk_addPageCtx(\"regid\",", ["escape", ["macro", 16], 8, 16], ");a=", ["escape", ["macro", 488], 8, 16], "||{};var c=", ["escape", ["macro", 489], 8, 16], "||{};b=c.subscriptions||[];c=c.newsletters||[];var n=!1;0\u003Cb.length\u0026\u0026(n=\"F\"==b[0].grace?!1:!0);bk_addPageCtx(\"usertype\",", ["escape", ["macro", 14], 8, 16], ");bk_addPageCtx(\"userloggedin\",", ["escape", ["macro", 490], 8, 16], ");\nbk_addPageCtx(\"coresubtenure\",a.coreSubscriptionTenure?a.coreSubscriptionTenure:\"\");bk_addPageCtx(\"corestop\",a.coreStopCode?a.coreStopCode:\"\");bk_addPageCtx(\"corepromo\",!!a.coreOnPromotion);bk_addPageCtx(\"ingrace\",n);bk_addPageCtx(\"giftrecipient\",!!a.giftSubscriptionRecipient);bk_addPageCtx(\"childsubrecipient\",!!a.childSubscription);bk_addPageCtx(\"bundlecoredigi\",a.coreDigiBundle?a.coreDigiBundle:\"\");bk_addPageCtx(\"bundlecorehd\",a.coreHDBundle?a.coreHDBundle:\"\");bk_addPageCtx(\"bundlexword\",a.crosswordStandaloneBundle?\na.crosswordStandaloneBundle:\"\");bk_addPageCtx(\"bundlecooking\",a.cookingStandaloneBundle?a.cookingStandaloneBundle:\"\");bk_addPageCtx(\"bundleother\",a.otherBundle?a.otherBundle:\"\");bk_addPageCtx(\"b2bentitle\",!!a.b2bSubscription);bk_addPageCtx(\"marketingoptin\",!!a.marketingOptIn);bk_addPageCtx(\"formercoresub\",!!a.formerCoreSubscriber);bk_addPageCtx(\"formeredusub\",!!a.formerEduSubscriber);bk_addPageCtx(\"formerhdsub\",!!a.formerHDSubscriber);bk_addPageCtx(\"retentionscore\",a.retentionSegment||\"\");bk_addPageCtx(\"newsletters\",\nc.join());bk_addPageCtx(\"topwatseg\",", ["escape", ["macro", 421], 8, 16], ");bk_addPageCtx(\"sassegment\",a.sasSegment||\"\");bk_addPageCtx(\"hdstopreasoncode\",a.hdStopReasonCode||\"\");bk_addPageCtx(\"regitenure\",a.regiTenure||\"\");bk_addPageCtx(\"cookinggrace\",!!a.cookingGrace);bk_addPageCtx(\"crosswordsgrace\",!!a.crosswordsGrace);bk_addPageCtx(\"gatewayhitlm\",!!a.gatewayHitLM);bk_addPageCtx(\"coregracelevel\",!!a.coreGraceLevel);bk_addPageCtx(\"activedaysengagement\",(", ["escape", ["macro", 491], 8, 16], "||{}).activeDays||\"\");bk_addPageCtx(\"authors\",\n(", ["escape", ["macro", 481], 8, 16], "||[]).join(\",\")||\"\");b=", ["escape", ["macro", 492], 8, 16], ";c=\"\";if(null!=b){try{var f=JSON.parse(unescape(b))}catch(g){f={}}f.isCorpUser\u0026\u0026(c=f.orgName)}bk_addPageCtx(\"businessname\",c);bk_addPageCtx(\"corpadblock\",\/CORP_ADBLOCK\/i.test(b));f=", ["escape", ["macro", 493], 8, 16], ";c=b=\"\";if(null!=f){try{var h=JSON.parse(unescape(f))}catch(g){h={}}if(c=h.isEduUser||\"\")b=h.nickName}bk_addPageCtx(\"isedu\",c);bk_addPageCtx(\"propensityedu\",b);bk_addPageCtx(\"propensityscore\",", ["escape", ["macro", 423], 8, 16], ");bk_addPageCtx(\"activedays\",\n", ["escape", ["macro", 424], 8, 16], ");h=", ["escape", ["macro", 69], 8, 16], "||{};bk_addPageCtx(\"metercount\",h.v||\"\");bk_addPageCtx(\"propensitysection\",", ["escape", ["macro", 428], 8, 16], ");bk_addPageCtx(\"propensitytype\",", ["escape", ["macro", 427], 8, 16], ");bk_addPageCtx(\"propensitysite\",", ["escape", ["macro", 426], 8, 16], ");bk_addPageCtx(\"gatewayhit\",", ["escape", ["macro", 494], 8, 16], ");document.cookie=\"gatewayHit\\x3dfalse; path\\x3d\/; domain\\x3d.nytimes.com\";bk_addPageCtx(\"url\",window.location.href);bk_addPageCtx(\"referrer\",", ["escape", ["macro", 108], 8, 16], ");bk_addPageCtx(\"section\",k);k=\n", ["escape", ["macro", 479], 8, 16], "||\"\";bk_addPageCtx(\"subsection\",k);bk_addPageCtx(\"pagetype\",", ["escape", ["macro", 57], 8, 16], ");bk_addPageCtx(\"keywords\",l);bk_addPageCtx(\"sourceapp\",", ["escape", ["macro", 187], 8, 16], ");bk_addPageCtx(\"browsername\",d(navigator.userAgent));bk_addPageCtx(\"funnelpropensity\",", ["escape", ["macro", 443], 8, 16], ");bk_addPageCtx(\"column\",", ["escape", ["macro", 495], 8, 16], ");d=", ["escape", ["macro", 496], 8, 16], "||[];bk_addPageCtx(\"collectionname\",d.join(\",\"));bk_addPageCtx(\"contenttype\",", ["escape", ["macro", 497], 8, 16], ");d=m(", ["escape", ["macro", 498], 8, 16], ");bk_addPageCtx(\"emotions\",\nd);\"object\"===typeof bk_optly\u0026\u0026bk_optly instanceof Array\u0026\u00260\u003Cbk_optly.length\u0026\u0026(bk_addPageCtx(\"optlyexpname\",bk_optly[0].experience||\"\"),bk_addPageCtx(\"optlyexpvariant\",bk_optly[0].variant||\"\"));bk_addPageCtx(\"xwordstenure\",a.crosswordsSubscriptionTenure?a.crosswordsSubscriptionTenure:\"\");bk_addPageCtx(\"cookingtenure\",a.cookingSubscriptionTenure?a.cookingSubscriptionTenure:\"\");bk_addPageCtx(\"xwordsstop\",a.crosswordsStopCode?a.crosswordsStopCode:\"\");bk_addPageCtx(\"cookingstop\",a.cookingStopCode?a.cookingStopCode:\n\"\");bk_addPageCtx(\"productswitch\",a.productSwitch?a.productSwitch:\"\");bk_addPageCtx(\"giftsubgiver\",!!a.giftGiver);bk_addPageCtx(\"formerxwordsub\",!!a.formerCrosswordSubscriber);bk_addPageCtx(\"formercookingsub\",!!a.formerCookingSubscriber);bk_addPageCtx(\"watsegs\",a.watString?a.watString:\"\");bk_addPageCtx(\"edusub\",a.eduSubscriber?a.eduSubscriber:\"\");d=50134;navigator.userAgent.match(\/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM\/i)\u0026\u0026(d=50747);bk_allow_multiple_calls=!0;bk_doJSTag(d,4)})();\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 83
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bluekai.com\/site\/50550?ret=js\u0026amp;limit=1\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 84
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"impression_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.impression({module:", ["escape", ["macro", 472], 8, 16], ",card:", ["escape", ["macro", 499], 8, 16], ",block:", ["escape", ["macro", 500], 8, 16], ",eventData:", ["escape", ["macro", 474], 8, 16], ",pageview_ad:", ["escape", ["macro", 501], 8, 16], "},", ["escape", ["macro", 502], 8, 16], ");(function(){var a=document.querySelector(\"#impression_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 107
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"interaction_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.interaction({module:", ["escape", ["macro", 472], 8, 16], ",card:", ["escape", ["macro", 499], 8, 16], ",block:", ["escape", ["macro", 500], 8, 16], ",newsletter:", ["escape", ["macro", 471], 8, 16], ",eventData:", ["escape", ["macro", 474], 8, 16], ",assetUrl:", ["escape", ["macro", 30], 8, 16], "});dataLayer.push({module:null,card:null,block:null,newsletter:null,eventData:null});(function(){var a=document.querySelector(\"#interaction_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 109
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(b,c){var a=document.createElement(\"script\");a.type=\"text\/javascript\";c\u0026\u0026(a.onload=c,a.onerror=c);var d=document.getElementsByTagName(\"head\")[0];d.appendChild(a);a.src=b}b(\"https:\/\/a1.nyt.com\/analytics\/show-ads.js\",function(){pageEventTracker.updateData({adBlockEnabled:!1!==window.adBlockDetected});window.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",adBlockEnabled:!1!==window.adBlockDetected})})})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 112
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){try{var g=function(a){var c=a.mData||{};return{ns_st_ci:a.contentId||\"*null\",ns_st_cl:c.videoDuration||\"*null\",ns_st_pu:c.videoFranchise||\"*null\",ns_st_pr:decodeURIComponent(c?c.videoName||\"*null\":\"*null\"),c3:a.contentCollection,ns_st_tpr:\"*null\",ns_st_ep:\"*null\",ns_st_tep:\"*null\",ns_st_sn:\"*null\",ns_st_en:\"*null\",ns_st_ge:c.videoType||\"*null\",ns_st_ia:1,ns_st_ddt:\"*null\",ns_st_tdt:\"*null\",ns_st_st:\"*null\",c4:\"*null\",c6:\"*null\",ns_st_ce:\"*null\"}},h=function(a){var c=d.ReducedRequirementsStreamingAnalytics.AdType;\ne.playVideoContentPart({ns_st_cl:a.videoDuration},c.LinearOnDemandMidRoll)},k=function(a,c){var b=d.ReducedRequirementsStreamingAnalytics.ContentType,f=b.ShortFormOnDemand;c\u0026\u0026(f=b.Live);e.playVideoContentPart(a,f)},d=a.ns_,e=a.nyt_streamingAnalytics=a.nyt_streamingAnalytics||new d.ReducedRequirementsStreamingAnalytics({publisherId:\"3005403\"});a=", ["escape", ["macro", 503], 8, 16], "||{};var b=a.eventName,l=\"live\"===a.mData.videoDeliveryMethod,m=g(a);\"pause\"!==b\u0026\u0026\"video-complete\"!==b\u0026\u0026\"ad-pause\"!==b\u0026\u0026\"ad-complete\"!==\nb||e.stop();if(\"auto-play-start\"===b||\"user-play\"===b||\"resume\"===b)return k(m,l);if(\"ad-start\"===b)return h(a)}catch(n){console.log(\"gracefully failed to load comscore.\")}})(window);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 113
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/a1.nyt.com\/analytics\/comscore-streaming.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 114
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar opty_payload,jkidd_data_user_tracking,dl_user=", ["escape", ["macro", 452], 8, 16], ";try{opty_payload={user:{isLoggedIn:", ["escape", ["macro", 490], 8, 16], "}};for(var name in dl_user)dl_user.hasOwnProperty(name)\u0026\u0026(\/jkidd\\-[lsp]\/.test(name)||(opty_payload.user[name]=dl_user[name]));window.NYToptly=window.NYToptly||{};window.NYToptly.jkidd=opty_payload;window.optimizely=window.optimizely||[];window.optimizely.push({type:\"page\",pageName:\"vi_page_data_ready\"})}catch(a){console.error(a)};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 116
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){function e(){if(a.webkitRequestFileSystem)return a.webkitRequestFileSystem(a.TEMPORARY,1,c,b),!0}function f(){if(\"MozAppearance\"in document.documentElement.style){var a=indexedDB.open(\"test\");a.onerror=b;a.onsuccess=c;return!0}}function g(){if(0\u003CObject.prototype.toString.call(a.HTMLElement).indexOf(\"Constructor\")||\"[object SafariRemoteNotification]\"===(!a.safari||safari.pushNotification).toString()||a.localStorage\u0026\u0026\/Safari\/.test(a.navigator.userAgent)){try{a.openDatabase(null,null,null,\nnull)}catch(m){return b(),!0}try{localStorage.length||(localStorage.x=1,localStorage.removeItem(\"x\")),c()}catch(m){navigator.cookieEnabled?b():c()}return!0}}function h(){if(!a.indexedDB\u0026\u0026(a.PointerEvent||a.MSPointerEvent))return b(),!0}function k(a){function c(a,b){\"object\"===typeof pageEventTracker?pageEventTracker.updateData({incognitoEnabled:a}):5\u003Eb\u0026\u0026(b++,setTimeout(function(){c(a,b)},1E3*b))}c(a,0)}function l(b){a.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",isIncognito:b})}var b,c;(function(a,d){b=\na||function(){};c=d||function(){};e()||f()||g()||h()||c()})(function(){k(!0)},function(){k(!1)});a.nyt_et\u0026\u0026function(a,d){b=a||function(){};c=d||function(){};e()||f()||g()||h()||c()}(function(){l(!0)},function(){l(!1)})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 120
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cimg src=\"", ["escape", ["macro", 448], 14, 3], "pixel.gif?subject=ab-alloc\u0026amp;test=", ["escape", ["macro", 504], 12], "\u0026amp;variant=", ["escape", ["macro", 505], 12], "\u0026amp;url=", ["escape", ["macro", 506], 12], "\u0026amp;instant=1\u0026amp;skipAugment=true\u0026amp;gtm=", ["escape", ["macro", 87], 12], "\u0026amp;et2_pageview_id=", ["escape", ["macro", 93], 12], "\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"send\",{subject:\"ab_alloc\",allocs:[{name:", ["escape", ["macro", 504], 8, 16], ",variant:", ["escape", ["macro", 505], 8, 16], "}],gtm:", ["escape", ["macro", 87], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 123
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var d=\"a.nytimes.com\",e=", ["escape", ["macro", 108], 8, 16], "||encodeURIComponent(document.referrer),f=", ["escape", ["macro", 30], 8, 16], "||encodeURIComponent(document.location.href),a=new XMLHttpRequest;a.withCredentials=!0;a.open(\"GET\",\"https:\/\/\"+d+\"\/svc\/nyt\/data-layer?sourceApp\\x3d\"+", ["escape", ["macro", 28], 8, 16], "+\"\\x26referrer\\x3d\"+e+\"\\x26assetUrl\\x3d\"+f,!0);a.onload=function(){var c=JSON.parse(a.responseText);c.event=\"pageDataReady\";window[b].push(c)};a.addEventListener(\"error\",function(){window[b].push({event:\"pageDataReady\"})});\na.send()})(\"dataLayer\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 124
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 35, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.facebookPixel\u0026\u0026window.facebookPixel.fire\u0026\u0026(window.facebookPixel.fire({pixelName:\"NewsletterSignup\"}),clearInterval(a))},1E3)})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 134
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EnytAnalytics.slideshow({slideshow:", ["escape", ["macro", 507], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 141
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 4, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.pintrk\u0026\u0026(pintrk(\"track\",\"signup\"),clearInterval(a))},1E3)})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 144
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cimg src=\"", ["escape", ["macro", 448], 14, 3], "pixel.gif?subject=ab-expose\u0026amp;test=", ["escape", ["macro", 504], 12], "\u0026amp;variant=", ["escape", ["macro", 505], 12], "\u0026amp;url=", ["escape", ["macro", 506], 12], "\u0026amp;instant=1\u0026amp;skipAugment=true\u0026amp;gtm=", ["escape", ["macro", 87], 12], "\u0026amp;et2_pageview_id=", ["escape", ["macro", 93], 12], "\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"send\",{subject:\"ab_expose\",test:", ["escape", ["macro", 504], 8, 16], ",variant:", ["escape", ["macro", 505], 8, 16], ",gtm:", ["escape", ["macro", 87], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 147
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 4, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.pintrk\u0026\u0026(pintrk(\"track\",\"lead\",{lead_type:\"Newsletter\"}),clearInterval(a))},1E3)})();\u003C\/script\u003E  \n\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 152
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",jsonKidd:", ["escape", ["macro", 510], 8, 16], ",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 108], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 94], 8, 16], ",gtm:", ["escape", ["macro", 87], 8, 16], ",presentation:", ["escape", ["macro", 457], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 154
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 2, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,b){if(a\u0026\u0026a.length){nyt_et(\"send\",{subject:\"ab_alloc\",allocs:a});for(var d=\"\",c=0;c\u003Ca.length;c++)d+=\"subject\\x3dab-alloc\\x26test\\x3d\"+encodeURIComponent(a[c].test)+\"\\x26variant\\x3d\"+encodeURIComponent(a[c].variant||0)+\"\\x26url\\x3d\"+encodeURIComponent(window.location.href)+\"\\x26et2_pageview_id\\x3d\"+e+\"\\x26instant\\x3d1\\x26skipAugment\\x3dtrue\\n\";a=new window.XMLHttpRequest;a.withCredentials=!0;a.open(\"POST\",b);a.send(d);b=window.google_tag_manager[", ["escape", ["macro", 84], 8, 16], "];b.dataLayer.set(\"abtest\",\nvoid 0);b.dataLayer.set(\"allocs\",void 0)}})(", ["escape", ["macro", 512], 8, 16], ",", ["escape", ["macro", 93], 8, 16], ",", ["escape", ["macro", 448], 8, 16], ");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 171
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"gtm_beforeunload_temp\" type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"beforeunload\",function(){window.dataLayer.push({event:\"beforeunload\"})});(function(){var a=document.querySelector(\"#gtm_beforeunload_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 172
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()\u0026\u0026nyt_et(\"send\",{subject:\"page_exit\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 108], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),activeTime:(window.nytAnalytics||{}).activeTime,exit:!0,gtm:", ["escape", ["macro", 87], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 173
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.iterateSettings={apiKey:\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNWMwOThiM2QxNjU0YzEwMDAxMmM2OGY5IiwiaWF0IjoxNTQ0MTI5MzQxfQ.UI13nEXGs0udbZxhjyFLruAEed42XwFO4fZlCqOgY1o\"};\n(function(a,d,f,g,h){function e(){b=d.createElement(f);b.id=g;b.async=1;b.src=\"https:\/\/platform.iteratehq.com\/loader.js\";k.parentNode.insertBefore(b,k)}if(!d.getElementById(g)){a.IterateObjectName=h;var c=function(){c.c(arguments)};c.q=[];c.c=function(a){c.q.push(a)};a[h]=c;var b,k=d.getElementsByTagName(f)[0];\"complete\"===d.readyState?e():a.attachEvent?a.attachEvent(\"onload\",e):a.addEventListener(\"load\",e,!1)}})(window,document,\"script\",\"iterate-js\",\"Iterate\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(window.Iterate\u0026\u0026\"function\"===typeof Iterate){var subscriberInfo=\"", ["escape", ["macro", 488], 7], "\",uType=\"", ["escape", ["macro", 14], 7], "\",eduSubscriber=\"object\"===typeof subscriberInfo?subscriberInfo.eduSubscriber:\"\",userType=\"string\"===typeof uType?uType:\"\",params={eduSubscriber:eduSubscriber,userType:userType};Iterate(\"identify\",params)}}catch(a){console.log(a)};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 175
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"gtm_postMessage_tmp\" type=\"text\/gtmscript\"\u003E(function(){function b(a){var b={pageDataReady:!0,scrollComplete:!0,heartbeat:!0,moduleInteraction:!0,trackVirtualPage:!0,dynamicElementsLoaded:!0,videoEvent:!0,mediaEvent:!0,impression:!0,performance:!0,error:!0,\"ab-alloc\":!0,\"ab-expose\":!0,\"send-direct\":!0};\/googlesyndication.com\/.test(a.origin)\u0026\u0026\"object\"===typeof a.data\u0026\u0026\"string\"===typeof a.data.event\u0026\u0026b[a.data.event]\u0026\u0026(a=JSON.parse(JSON.stringify(a.data)),\"moduleInteraction\"===a.event\u0026\u0026(delete a.event,a.subject=\"dfp-ad-events\",a={event:\"send-direct\",\npayload:a}),dataLayer.push(a))}window.addEventListener(\"message\",b,!1)})();(function(){var b=document.querySelector(\"#gtm_postMessage_tmp\");b\u0026\u0026b.parentNode.removeChild(b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 176
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"gatewayHit\",b=\"true\";document.cookie=a+\"\\x3d\"+b+\"; path\\x3d\/; domain\\x3d.nytimes.com\"})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 178
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"et2-send-direct\" type=\"text\/gtmscript\"\u003E\"function\"===typeof nyt_et\u0026\u0026nyt_et(\"send\",", ["escape", ["macro", 513], 8, 16], ");(function(a){a.parentNode.removeChild(a)})(document.getElementById(\"et2-send-direct\"));\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 179
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"performance_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.performance({performance:", ["escape", ["macro", 456], 8, 16], "});(function(){var a=document.querySelector(\"#performance_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 182
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.src=d;b.parentNode.insertBefore(a,b)}(window,document,\"script\",\"https:\/\/js.datadome.co\/tags.js\",\"5F35800FA2155BC5833193CFCB9E4D\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 183
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"e1c4c748-041c-4910-989a-1847d8a95fb2\");snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 184
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"object\"===typeof window.nytAnalytics\u0026\u0026\"function\"===typeof window.nytAnalytics.getData\u0026\u0026\"function\"===typeof EventTracker){var a=window.nytAnalytics.getData(\"media\"),c={},b=nytAnalytics.getData(\"media.mData\");\"object\"===typeof a\u0026\u0026\"object\"===typeof a.mData\u0026\u0026\"video-player\"===a.module\u0026\u0026(c.moduleData=JSON.stringify(a),c.subject=\"module-interactions\",c.assetUrl=", ["escape", ["macro", 30], 8, 16], ",c.url=document.location.href,(new EventTracker).track(c),b.assetUrl=", ["escape", ["macro", 30], 8, 16], ",b.url=document.location.href,\nb.referrer=", ["escape", ["macro", 108], 8, 16], ",b.event=a.eventName,b.subject=\"video-nytv\",(new EventTracker).track(b),\"function\"==typeof nyt_et\u0026\u0026(a=JSON.parse(JSON.stringify(a)),a.subject=\"interaction\",a.mData=b,nyt_et(\"send\",a)))}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 185
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({module:null,card:null,block:null,eventData:null})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 119
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){for(nytAnalytics.impressionBuffer=window.nytAnalytics.impressionBuffer||[];nytAnalytics.impressionBuffer.length;)\"object\"===typeof nytAnalytics.impressionBuffer[0].moduleObj\u0026\u0026\"gateway\"===nytAnalytics.impressionBuffer[0].moduleObj.name\u0026\u0026pageEventTracker.updateData({is_gateway:1}),pageEventTracker.addModuleImpression(nytAnalytics.impressionBuffer.shift())})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 108
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=function(a){return\"string\"===typeof a?a.toLowerCase():a},n=function(a){if(!a)return{};a=decodeURI(a);try{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(c){return{}}},m=function(){var a=window.navigator.userAgent,c=", ["escape", ["macro", 108], 8, 16], "||document.referrer,e=document.location.href,b=n(document.location.search);-1\u003Cc.indexOf(\"?\")\u0026\u0026n(c.substr(c.indexOf(\"?\")));var d=\nc,f=\"src smid nl nrx partner campaignid mcid meid\".split(\" \"),h=\/^[^:]*:\\\/\\\/([^\\\/]*)\/,m=f.length,k;for(k=0;k\u003Cm;k++)if(b[f[k]]){var l=f[k];break}e=l?b[l]:\"\"!==d\u0026\u0026d.match(h)?d.match(h)[1]||\"\":\"\"===d\u0026\u0026\/\\.app\/.test(e)?\"NYT Mobile Apps\":\/FBIOS\/.test(a)?\"FBIOS\":\/FBAN\/.test(a)?\"FBAN\":\"\";l=r(e,b);d=e;a=b;f=c;h=\"NYT Mobile Apps\"===d||\"cur\"===a.smtyp||!!a.nl||\"sms\"===a.src||a.smprod\u0026\u0026a.smprod.indexOf\u0026\u0026(-1\u003Ca.smprod.indexOf(\"nytnow\")||-1\u003Ca.smprod.indexOf(\"tools\"))||a.partner\u0026\u0026a.partner.indexOf\u0026\u0026(-1\u003Ca.partner.indexOf(\"rss\")||\n-1\u003Ca.partner.indexOf(\"socialFlow\"))||!!a.nrx||d\u0026\u0026d.indexOf\u0026\u0026-1\u003Cd.indexOf(\"nytimes.com\")||g(d)===g(\"SafariPush\");a.mcid||a.meid||\"pay\"===a.smtyp||\/aud_dev\/.test(a[\"WT.mc_id\"])||\/paid.outbrain.com\/.test(f)?d=\"paid\":h?d=\"owned\":(p.test(d)\u0026\u0026d.indexOf(\"nytimes.com\"),d=\"earned\");a=e;f=\/naver|aol|lycos|search.netscape|cnn|mamma|terra|search.virgilio|alice|eniro|yahoo|aol|about|voila|baidu|yandex|wp|online.onetcenter|yam|rambler|daum|msn|bing|ask|altavista|alltheweb|bing|najdi|aol|seznam|search|duckduckgo|mynet|ekolay|pchome|kvasir|sesam|ozu|szukacz|google\/;\nh=\/\\.(facebook|twitter|reddit|pinterest|getpocket|stumbleupon|myspace|fark|digg|linkedin|plus.url.google|disqus|quora|yelp|meetup|goodreads|weibo|tumblr|instagram|urbanspoon|weebly|youtube|ycombinator|vk|meneame)\\.\/;c=f.test(a)?\"search\":q(a)||h.test(a)||\"t.co\"===a?\"social\":\/nytimes.com|nytnow.com\/.test(a)||\"NYT Mobile Apps\"===a?\"internal\":!b.moc\u0026\u0026!b.meid||null!==c\u0026\u0026\"\"!==c?(b.mcid||b.mc)\u0026\u0026null!==a?\"marketing_campaign\":b.nl||b.emc?\"newsletter\":null===a?null:g(a)===g(\"SafariPush\")||\"sms\"===a?\"notifications\":\n\"referring_links\":\"marketing_email\";b=e;b=\"string\"===typeof b\u0026\u0026\"SafariPush\"===b?b.toLowerCase():b;return{source:b,subchannel:l,type:d,channel:c}},p=\/.*\\..*\/,q=function(a){if(a){var c=\/^(fb\\-|tw\\-|pin\\-|pi\\-|pinterest\\-|re\\-|go\\-|li\\-|in\\-|kk\\-|ln\\-|wc\\-)\/;a=a\u0026\u0026a.match\u0026\u0026a.match(c);if(Array.isArray(a))return a[1]}},r=function(a,c){if(c.meid)return\"marketing email\";if(c.nl||c.emc)return\"Newsletter\";if(\"FBAN\"===a||\"FBIOS\"===a)return\"facebook\";if(\"NYT Mobile Apps\"==a)return a;if(\"sms\"===a)return\"sms notifications\";\nif(g(a)===g(\"SafariPush\"))return\"safari notifications\";if(p.test(a)){var e=\"stumbleupon typepad blogspot digg disqus facebook fark getpocket google linkedin Social pinterest quora reddit scoop slashdot twitter techmeme tinyurl vk\".split(\" \");var b={stumbleupon:\/corp.stumbleupon.com|stumbleupon.com\/,typepad:\/delong.typepad.com|economistsview.typepad.com\/,blogspot:\/digbysblog.blogspot.com\/,digg:\/digg.com\/,disqus:\/disqus.com\/,facebook:\/facebook.com|fb-nytdining|fb-nytimes|fb-nytmetro\u0026smtyp=cur|fb-nytopinion|fb-nytpolitics|fb-nytvideo|fb-share|fb-share?utm_hp_ref=parents|l.facebook.com|lm.facebook.com|m.facebook.com|www.facebook.com\/,\nfark:\/fark.com\/,getpocket:\/getpocket.com\/,google:\/go-share|gp-nytimes|plus.url.google.com\/,linkedin:\/li-nytimes|li-share|linkedin.com|lnkd.in\/,Social:\/netvibes.com|news.ycombinator.com|nythealth|nytimesarts|nytimesphoto|nytpolitics|nytscience|paper.li|pl-share\/,pinterest:\/pi-nytimes|pin-share|pinterest.com\/,quora:\/quora.com\/,reddit:\/re-share|re-share\/,scoop:\/scoop.it\/,slashdot:\/slashdot.org\/,twitter:\/t.co$|tw-bna|tw-dealbook|tw-nytdavidbrooks|tw-nytfashion|tw-nytfood|tw-nythealth|tw-nytimes|tw-nytimesbits|tw-nytimesbusiness|tw-nytimeskrugman|tw-nytimesmap|tw-nytimesmusic|tw-nytimesscience|tw-nytimestech|tw-nytimestheater|tw-nytimestravel|tw-nytimeswell|tw-nytimesworld|tw-nytmag|tw-nytmedia|tw-nytmetro|tw-nytmovies|tw-nytnational|tw-nytopinion|tw-nytstyles|tw-nytvideo|tw-share|tw-tmagazine|tw-upshotnyt\/,\ntechmeme:\/techmeme.com\/,tinyurl:\/tinyurl.com\/,vk:\/vk.com\/};ln=e.length;for(i=i=0;i\u003Cln;i++)if(b[e[i]].test(a))return rollup=e[i];return a}e={\"fb-\":\"facebook\",\"tw-\":\"twitter\",\"pin-\":\"pinterest\",\"pi-\":\"pinterest\",\"pinterest-\":\"pinterest\",\"re-\":\"reddit\",\"go-\":\"googleplus\",\"li-\":\"linkedin\",\"in-\":\"instagram\",\"kk-\":\"kakao\",\"ln-\":\"line\",\"wc-\":\"wechat\"};return e[q(a)]};window.nytAnalytics=window.nytAnalytics||{};nytAnalytics.derivedReferrer=m()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 70
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 78, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=\"src|smprod|emc|smid|nl|partner|nrx|WT.mc_id|oc|CMP|mc|meid\",l=new RegExp(\"\\\\|(\"+h+\")\\x3d\",\"g\"),m=function(a){return function(c,b){var f=a.indexOf(c),e=a.indexOf(b);return f\u003Ee?1:f\u003Ce?-1:0}}(h.split(\"|\")),n=function(a,f){var b={campaignSource:a,campaignMedium:\"notifications\",campaignContent:c(f,\"msgid\")};\"sms\"===a.toLowerCase()\u0026\u0026(b.campaignName=f.subid);return b},c=function(a,c,b){return\"object\"===typeof a\u0026\u0026a.hasOwnProperty(c)?a[c]:b?b:\"\"},k=function(a){if(!a)return{};a=decodeURI(a);\ntry{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(f){return{}}};h=function(){var a,f=", ["escape", ["macro", 28], 8, 16], ",b={},g=", ["escape", ["macro", 108], 8, 16], ";var e=document.location.search||\"\";if(g\u0026\u0026\/.*\\.nytimes\\.com\/.test(g)||!e)return b;var d=k(e);if(a=e.replace(\/\\?|\u0026\/g,\"|\").match(l)){a=a.map(function(a){return a.replace(\/[\\|=]\/g,\"\")}).sort(m);d=k(e);b.campaignName=c(d,\"subid\");b.campaignContent=\nc(d,\"subid1\");b.campaignKeyword=c(d,\"subid2\")||c(d,\"ad-keywords\");e=a.shift();\"src\"===e\u0026\u0026\"safaripush\"!==c(d,e)\u0026\u0026\"sms\"!==c(d,e)\u0026\u0026(e=a.shift());if(\"smprod\"===e\u0026\u0026\"eta1\"===c(d,\"emc\")||\"emc\"===e\u0026\u0026\"eta1\"!==c(d,e)\u0026\u0026\"edit_na\"!==c(d,e)||\"smid\"===e\u0026\u0026\"\"!==c(d,\"nrx\"))e=a.shift();\"mc\"===e\u0026\u0026\"\"===c(d,\"mcid\")\u0026\u0026(e=a.shift());if(e)switch(a=c(d,e),e){case \"src\":b=n(a,d);break;case \"nl\":b={campaignSource:a,campaignMedium:\"email\",campaignName:c(d,\"emc\"),campaignContent:c(d,\"em_pos\")};break;case \"smid\":b={campaignSource:a,\ncampaignMedium:\"social\",campaignName:c(d,\"smtyp\"),campaignContent:c(d,\"smvar\")};break;case \"smprod\":b={campaignSource:function(){if(g){var a=g.match(\/https?:\\\/\\\/([^\/]*)\/);return a?a[1]:g}return\"nyt-fb-native-external-iframe\"===f?\"m.facebook.com\":\"null\"}(),campaignMedium:\"social\",campaignName:c(d,\"smid\"),campaignContent:a};break;case \"partner\":b.campaignSource=a;b.campaignMedium=\"rss\"===a.toLowerCase()?\"RSS\":\"partner\";break;case \"emc\":b=\"edit_na\"===a?{campaignName:c(d,\"emc\"),campaignContent:c(d,\"empos\"),\ncampaignSource:\"Breaking News\",campaignMedium:\"email\"}:{campaignSource:\"nytnow\",campaignMedium:\"email share\",campaignName:\"share tool\"};break;case \"nrx\":b.campaignSource=a;b.campaignMedium=\"Vanity URL\";break;case \"WT.mc_id\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"oc\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"CMP\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"mc\":b.campaignSource=c(d,\"mcid\");b.campaignMedium=a;break;\ncase \"meid\":b.campaignSource=a,b.campaignMedium=\"marketing email\",b.campaignName=c(d,\"moc\"),b.campaignContent=c(d,\"rid\"),b.campaignKeyword=c(d,\"dt\")}}return b};nytAnalytics=window.nytAnalytics||{};nytAnalytics.campaignMap=h()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 66
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 61],
                "arg1": "track"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "scrollComplete"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "gtm.js"
            }, {
                "function": "_sw",
                "arg0": ["macro", 97],
                "arg1": "out"
            }, {
                "function": "_re",
                "arg0": ["macro", 96],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 98],
                "arg1": "^.s.+"
            }, {
                "function": "_re",
                "arg0": ["macro", 99],
                "arg1": "\\w+\\%40\\w+\\.\\w+|\\w+\\@\\w+\\.\\w+"
            }, {
                "function": "_eq",
                "arg0": ["macro", 101],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "moduleInteraction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "videoEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "pageDataReady"
            }, {
                "function": "_eq",
                "arg0": ["macro", 32],
                "arg1": "false"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "delayError"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "gaScrollEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 70],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 80],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 429],
                "arg1": "event"
            }, {
                "function": "_re",
                "arg0": ["macro", 96],
                "arg1": "gaEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 43],
                "arg1": "newsletters"
            }, {
                "function": "_eq",
                "arg0": ["macro", 46],
                "arg1": "subscribe"
            }, {
                "function": "_eq",
                "arg0": ["macro", 445],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 43],
                "arg1": "gateway"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "impression"
            }, {
                "function": "_eq",
                "arg0": ["macro", 449],
                "arg1": "true"
            }, {
                "function": "_sw",
                "arg0": ["macro", 53],
                "arg1": "elections"
            }, {
                "function": "_eq",
                "arg0": ["macro", 461],
                "arg1": "commentsContainer"
            }, {
                "function": "_eq",
                "arg0": ["macro", 462],
                "arg1": "commentsContainer"
            }, {
                "function": "_eq",
                "arg0": ["macro", 32],
                "arg1": "true"
            }, {
                "function": "_re",
                "arg0": ["macro", 96],
                "arg1": "error|delayError"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "error"
            }, {
                "function": "_re",
                "arg0": ["macro", 71],
                "arg1": "module|card|block",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "heartbeat"
            }, {
                "function": "_gt",
                "arg0": ["macro", 477],
                "arg1": "0"
            }, {
                "function": "_eq",
                "arg0": ["macro", 73],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 71],
                "arg1": "slideshow"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "allocation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "trackVirtualPage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "ab-expose"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "ab-alloc"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "beforeunload"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "send-direct"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "performance"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "mediaEvent"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 6, 36, 45]
                ],
                [
                    ["if", 1, 2],
                    ["add", 6, 10]
                ],
                [
                    ["if", 3],
                    ["add", 6, 0, 2, 5, 69, 73, 30, 31, 32, 33, 34]
                ],
                [
                    ["if", 8, 9],
                    ["add", 7]
                ],
                [
                    ["if", 10],
                    ["add", 8, 41, 53]
                ],
                [
                    ["if", 11],
                    ["add", 9, 12, 13, 1, 44, 47, 48, 49, 52, 54, 55, 56, 64, 66, 68]
                ],
                [
                    ["if", 12, 13],
                    ["add", 9, 37]
                ],
                [
                    ["if", 14],
                    ["add", 11]
                ],
                [
                    ["if", 17, 18],
                    ["add", 14]
                ],
                [
                    ["if", 9, 19, 20],
                    ["add", 15, 18, 19, 22, 23, 59, 63]
                ],
                [
                    ["if", 11],
                    ["unless", 21],
                    ["add", 16, 17, 20, 26, 27, 35, 61, 74]
                ],
                [
                    ["if", 22, 23],
                    ["add", 21, 24, 25, 70]
                ],
                [
                    ["if", 23, 24],
                    ["add", 28]
                ],
                [
                    ["if", 22, 23, 25],
                    ["add", 29]
                ],
                [
                    ["if", 28, 29],
                    ["add", 38]
                ],
                [
                    ["if", 12, 30],
                    ["add", 39]
                ],
                [
                    ["if", 9],
                    ["add", 40]
                ],
                [
                    ["if", 2],
                    ["add", 42, 44]
                ],
                [
                    ["if", 32],
                    ["add", 43]
                ],
                [
                    ["if", 9, 33],
                    ["add", 46]
                ],
                [
                    ["if", 23, 34],
                    ["unless", 35],
                    ["add", 50]
                ],
                [
                    ["if", 9, 31],
                    ["add", 51],
                    ["block", 40]
                ],
                [
                    ["if", 36],
                    ["add", 57]
                ],
                [
                    ["if", 37],
                    ["add", 58, 5, 3]
                ],
                [
                    ["if", 23, 35],
                    ["add", 60]
                ],
                [
                    ["if", 38],
                    ["add", 62]
                ],
                [
                    ["if", 39],
                    ["add", 65]
                ],
                [
                    ["if", 40],
                    ["add", 67]
                ],
                [
                    ["if", 41],
                    ["add", 71]
                ],
                [
                    ["if", 42],
                    ["add", 72]
                ],
                [
                    ["if", 43],
                    ["add", 75]
                ],
                [
                    ["if", 4, 5],
                    ["block", 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 35, 47, 48, 49, 53, 54, 59, 61, 63, 68, 74]
                ],
                [
                    ["if", 3, 4],
                    ["block", 6, 23, 4]
                ],
                [
                    ["if", 0, 4],
                    ["block", 6]
                ],
                [
                    ["if", 5, 6],
                    ["block", 6, 10, 53, 54]
                ],
                [
                    ["if", 3, 6],
                    ["block", 6]
                ],
                [
                    ["if", 0, 6],
                    ["block", 6]
                ],
                [
                    ["if", 5, 7],
                    ["block", 7, 8, 9, 11, 13, 14, 15, 17, 21, 22, 28]
                ],
                [
                    ["if", 5, 15, 16],
                    ["block", 12, 48, 49]
                ],
                [
                    ["if", 3, 7],
                    ["block", 23]
                ],
                [
                    ["if", 0, 26],
                    ["block", 36]
                ],
                [
                    ["if", 0, 27],
                    ["block", 36]
                ]
            ]
        },
        "runtime": [
            [],
            []
        ]



    };
    var aa, ba = this || self,
        ca = function(a) {
            return "boolean" == typeof a
        },
        fa = /^[\w+/_-]+[=]{0,2}$/,
        ha = null;
    var ia = function() {},
        ja = function(a) {
            return "function" == typeof a
        },
        ka = function(a) {
            return "string" == typeof a
        },
        la = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ma = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        f = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        na = function(a, b) {
            if (a && ma(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        pa = function(a, b) {
            if (!la(a) ||
                !la(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ra = function(a, b) {
            for (var c = new qa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        sa = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        ta = function(a) {
            return Math.round(Number(a)) || 0
        },
        ua = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        va = function(a) {
            var b = [];
            if (ma(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        wa = function(a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        xa = function() {
            return (new Date).getTime()
        },
        qa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    qa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    qa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    qa.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var ya = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        za = function(a) {
            var b = !1;
            return function() {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        Ca = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Da = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ea = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Fa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ga = function(a) {
            if (null == a) return String(a);
            var b = Fa.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ha = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ia = function(a) {
            if (!a || "object" != Ga(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ha(a, "constructor") && !Ha(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ha(a, b)
        },
        u = function(a, b) {
            var c = b || ("array" == Ga(a) ? [] : {}),
                d;
            for (d in a)
                if (Ha(a, d)) {
                    var e = a[d];
                    "array" == Ga(e) ? ("array" != Ga(c[d]) && (c[d] = []), c[d] = u(e, c[d])) : Ia(e) ? (Ia(c[d]) || (c[d] = {}), c[d] = u(e, c[d])) : c[d] = e
                }
            return c
        };
    var Ja = [],
        Ka = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        La = function(a) {
            return Ka[a]
        },
        Ma = /[\x00\x22\x26\x27\x3c\x3e]/g;
    Ja[3] = function(a) {
        return String(a).replace(Ma, La)
    };
    var Qa = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Ra = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        Va = function(a) {
            return Ra[a]
        };
    Ja[7] = function(a) {
        return String(a).replace(Qa, Va)
    };
    Ja[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Qa, Va) + "'"
        }
    };
    var ab = /['()]/g,
        bb = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    Ja[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        ab.lastIndex = 0;
        return ab.test(b) ? b.replace(ab, bb) : b
    };
    var cb = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        db = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        eb = function(a) {
            return db[a]
        };
    var fb =
        /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
    Ja[14] = function(a) {
        var b = String(a);
        return fb.test(b) ? b.replace(cb, eb) : "#zSoyz"
    };
    Ja[16] = function(a) {
        return a
    };
    var hb;
    var ib = [],
        jb = [],
        kb = [],
        lb = [],
        mb = [],
        nb = {},
        pb, qb, rb, sb = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        tb = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = !!nb[c],
                e = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
            return d ? nb[c](e) : hb(c, e, b)
        },
        vb = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = ub(a[e], b, c));
            return d
        },
        wb =
        function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = nb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        ub = function(a, b, c) {
            if (ma(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(ub(a[e], b, c));
                        return d;
                    case "macro":
                        var g = a[1];
                        if (c[g]) return;
                        var h = ib[g];
                        if (!h || b.Ac(h)) return;
                        c[g] = !0;
                        try {
                            var k = vb(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = tb(k, b);
                            rb && (d = rb.Ff(d, k))
                        } catch (w) {
                            b.Yd && b.Yd(w, Number(g)), d = !1
                        }
                        c[g] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[ub(a[l], b, c)] = ub(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var p = ub(a[n], b, c);
                            qb && (m = m || p === qb.vb);
                            d.push(p)
                        }
                        return qb && m ? qb.If(d) : d.join("");
                    case "escape":
                        d = ub(a[1], b, c);
                        if (qb && ma(a[1]) && "macro" === a[1][0] && qb.jg(a)) return qb.vg(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Ja[a[t]] && (d = Ja[a[t]](d));
                        return d;
                    case "tag":
                        var q = a[1];
                        if (!lb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                        return d = {
                            Kd: a[2],
                            index: q
                        };
                    case "zb":
                        var r = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        r["function"] = a[1];
                        var v = xb(r, b, c);
                        a[4] && (v = !v);
                        return v;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        xb = function(a, b, c) {
            try {
                return pb(vb(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return null
        };
    var yb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            cd: a("convert_case_to"),
            dd: a("convert_false_to"),
            ed: a("convert_null_to"),
            fd: a("convert_true_to"),
            gd: a("convert_undefined_to"),
            bh: a("debug_mode_metadata"),
            ia: a("function"),
            Se: a("instance_name"),
            Te: a("live_only"),
            Ue: a("malware_disabled"),
            Ve: a("metadata"),
            eh: a("original_vendor_template_id"),
            We: a("once_per_event"),
            yd: a("once_per_load"),
            zd: a("setup_tags"),
            Ad: a("tag_id"),
            Bd: a("teardown_tags")
        }
    }();
    var zb = null,
        Cb = function(a) {
            function b(p) {
                for (var t = 0; t < p.length; t++) d[p[t]] = !0
            }
            var c = [],
                d = [];
            zb = Ab(a);
            for (var e = 0; e < jb.length; e++) {
                var g = jb[e],
                    h = Bb(g);
                if (h) {
                    for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || [])
            }
            for (var m = [], n = 0; n < lb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        Bb = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = zb(b[c]);
                if (!d) return null === d ? null : !1
            }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = zb(e[g]);
                if (null === h) return null;
                if (h) return !1
            }
            return !0
        },
        Ab = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = xb(kb[c], a));
                return b[c]
            }
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    for (var Fb = "floor ceil round max min abs pow sqrt".split(" "), Gb = 0; Gb < Fb.length; Gb++) Math.hasOwnProperty(Fb[Gb]);
    var C = window,
        D = document,
        Hb = navigator,
        Ib = D.currentScript && D.currentScript.src,
        Jb = function(a, b) {
            var c = C[a];
            C[a] = void 0 === c ? b : c;
            return C[a]
        },
        Kb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Lb = function(a, b, c) {
            var d = D.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Kb(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ha) b: {
                var g = ba.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && fa.test(k)) {
                        ha = k;
                        break b
                    }
                }
                ha = ""
            }
            e = ha;
            e && d.setAttribute("nonce", e);
            var l = D.getElementsByTagName("script")[0] || D.body || D.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        Mb = function() {
            if (Ib) {
                var a = Ib.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Nb = function(a, b) {
            var c = D.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = D.body && D.body.lastChild ||
                D.body || D.head;
            d.parentNode.insertBefore(c, d);
            Kb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Ob = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Pb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Qb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            C.setTimeout(a, 0)
        },
        Rb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Tb = function(a) {
            var b = D.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Ub = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        },
        Vb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var H = {
        Yb: "event_callback",
        La: "event_timeout",
        V: "gtag.config",
        O: "allow_ad_personalization_signals",
        R: "cookie_expires",
        Ka: "cookie_update",
        va: "session_duration"
    };
    var jc = /[A-Z]+/,
        kc = /\s/,
        lc = function(a) {
            if (ka(a) && (a = wa(a), !kc.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (jc.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            h: d
                        }
                    }
                }
            }
        },
        nc = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = lc(a[c]);
                d && (b[d.id] = d)
            }
            mc(b);
            var e = [];
            sa(b, function(g, h) {
                e.push(h)
            });
            return e
        };

    function mc(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.h[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var oc = {},
        pc = null,
        qc = Math.random();
    oc.m = "GTM-P528B3";
    oc.zb = "9p0";
    var rc = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
            __paused: !0
        },
        sc = "www.googletagmanager.com/gtm.js";
    var tc = sc,
        uc = null,
        vc = null,
        wc = null,
        xc = "//www.googletagmanager.com/a?id=" + oc.m + "&cv=338",
        yc = {},
        zc = {},
        Ac = function() {
            var a = pc.sequence || 0;
            pc.sequence = a + 1;
            return a
        };
    var Bc = {},
        Dc = function(a, b) {
            Bc[a] = Bc[a] || [];
            Bc[a][b] = !0
        },
        Ec = function(a) {
            for (var b = [], c = Bc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Fc = function() {
            return "&tc=" + lb.filter(function(a) {
                return a
            }).length
        },
        Pc = function() {
            Gc && (C.clearTimeout(Gc), Gc = void 0);
            void 0 === Hc || Ic[Hc] && !Jc || (Kc[Hc] || Lc.lg() || 0 >= Mc-- ? (Dc("GTM", 1), Kc[Hc] = !0) : (Lc.Gg(), Ob(Nc()), Ic[Hc] = !0, Oc = Jc = ""))
        },
        Nc = function() {
            var a = Hc;
            if (void 0 === a) return "";
            var b = Ec("GTM"),
                c = Ec("TAGGING");
            return [Qc, Ic[a] ? "" : "&es=1", Rc[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Fc(), Jc, Oc, "&z=0"].join("")
        },
        Sc = function() {
            return [xc, "&v=3&t=t", "&pid=" + pa(), "&rv=" + oc.zb].join("")
        },
        Tc = "0.005000" >
        Math.random(),
        Qc = Sc(),
        Uc = function() {
            Qc = Sc()
        },
        Ic = {},
        Jc = "",
        Oc = "",
        Hc = void 0,
        Rc = {},
        Kc = {},
        Gc = void 0,
        Lc = function(a, b) {
            var c = 0,
                d = 0;
            return {
                lg: function() {
                    if (c < a) return !1;
                    xa() - d >= b && (c = 0);
                    return c >= a
                },
                Gg: function() {
                    xa() - d >= b && (c = 0);
                    c++;
                    d = xa()
                }
            }
        }(2, 1E3),
        Mc = 1E3,
        Vc = function(a, b) {
            if (Tc && !Kc[a] && Hc !== a) {
                Pc();
                Hc = a;
                Jc = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                Rc[a] = "&e=" + c + "&eid=" + a;
                Gc || (Gc = C.setTimeout(Pc, 500))
            }
        },
        Wc = function(a, b, c) {
            if (Tc && !Kc[a] && b) {
                a !== Hc && (Pc(), Hc = a);
                var d = String(b[yb.ia] || "").replace(/_/g,
                    "");
                0 === d.indexOf("cvt") && (d = "cvt");
                var e = c + d;
                Jc = Jc ? Jc + "." + e : "&tr=" + e;
                Gc || (Gc = C.setTimeout(Pc, 500));
                2022 <= Nc().length && Pc()
            }
        };
    var Xc = {},
        Yc = new qa,
        Zc = {},
        $c = {},
        dd = {
            name: "dataLayer",
            set: function(a, b) {
                u(ad(a, b), Zc);
                bd()
            },
            get: function(a) {
                return cd(a, 2)
            },
            reset: function() {
                Yc = new qa;
                Zc = {};
                bd()
            }
        },
        cd = function(a, b) {
            if (2 != b) {
                var c = Yc.get(a);
                if (Tc) {
                    var d = ed(a);
                    c !== d && Dc("GTM", 5)
                }
                return c
            }
            return ed(a)
        },
        ed = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            return e ? g : gd(d)
        },
        gd = function(a) {
            for (var b = Zc, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var jd = function(a, b) {
            $c.hasOwnProperty(a) || (Yc.set(a, b), u(ad(a, b), Zc), bd())
        },
        ad = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        bd = function(a) {
            sa($c, function(b, c) {
                Yc.set(b, c);
                u(ad(b, void 0), Zc);
                u(ad(b, c), Zc);
                a && delete $c[b]
            })
        },
        kd = function(a, b, c) {
            Xc[a] = Xc[a] || {};
            var d = 1 !== c ? ed(b) : Yc.get(b);
            "array" === Ga(d) || "object" === Ga(d) ? Xc[a][b] = u(d) : Xc[a][b] = d
        },
        ld = function(a, b) {
            if (Xc[a]) return Xc[a][b]
        };
    var md = function() {
        var a = !1;
        return a
    };
    var J = function(a, b, c, d) {
            return (2 === nd() || d || "http:" != C.location.protocol ? a : b) + c
        },
        nd = function() {
            var a = Mb(),
                b;
            if (1 === a) a: {
                var c = tc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = D.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Cd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Dd = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Ed = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Fd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Hd = function(a) {
            var b = cd("gtm.whitelist");
            b && Dc("GTM", 9);
            var c = b && Ea(va(b), Dd),
                d = cd("gtm.blacklist");
            d || (d = cd("tagTypeBlacklist")) && Dc("GTM", 3);
            d ? Dc("GTM", 8) : d = [];
            Gd() && (d = va(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            0 <= f(va(d), "google") && Dc("GTM", 2);
            var e = d && Ea(va(d), Ed),
                g = {};
            return function(h) {
                var k = h && h[yb.ia];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = zc[k] || [],
                    m = a(k, l);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > f(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 >
                                        f(c, l[p])) {
                                        Dc("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var t = !1;
                if (d) {
                    var q = 0 <= f(e, k);
                    if (q) t = q;
                    else {
                        var r = ra(e, l || []);
                        r && Dc("GTM", 10);
                        t = r
                    }
                }
                var v = !m || t;
                v || !(0 <= f(l, "sandboxedScripts")) || c && -1 !== f(c, "sandboxedScripts") || (v = ra(e, Fd));
                return g[k] = v
            }
        },
        Gd = function() {
            return Cd.test(C.location && C.location.hostname)
        };
    var Id = {
        Ff: function(a, b) {
            b[yb.cd] && "string" === typeof a && (a = 1 == b[yb.cd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(yb.ed) && null === a && (a = b[yb.ed]);
            b.hasOwnProperty(yb.gd) && void 0 === a && (a = b[yb.gd]);
            b.hasOwnProperty(yb.fd) && !0 === a && (a = b[yb.fd]);
            b.hasOwnProperty(yb.dd) && !1 === a && (a = b[yb.dd]);
            return a
        }
    };
    var Jd = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        },
        Kd = function(a) {
            var b = pc.zones;
            !b && a && (b = pc.zones = a());
            return b
        };
    var Ld = !1,
        Md = 0,
        Nd = [];

    function Od(a) {
        if (!Ld) {
            var b = D.createEventObject,
                c = "complete" == D.readyState,
                d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Ld = !0;
                for (var e = 0; e < Nd.length; e++) G(Nd[e])
            }
            Nd.push = function() {
                for (var g = 0; g < arguments.length; g++) G(arguments[g]);
                return 0
            }
        }
    }

    function Pd() {
        if (!Ld && 140 > Md) {
            Md++;
            try {
                D.documentElement.doScroll("left"), Od()
            } catch (a) {
                C.setTimeout(Pd, 50)
            }
        }
    }
    var Qd = function(a) {
        Ld ? a() : Nd.push(a)
    };
    var Rd = {},
        Sd = {},
        Td = function(a, b, c, d) {
            if (!Sd[a] || rc[b] || "__zone" === b) return -1;
            var e = {};
            Ia(d) && (e = u(d, e));
            e.id = c;
            e.status = "timeout";
            return Sd[a].tags.push(e) - 1
        },
        Ud = function(a, b, c, d) {
            if (Sd[a]) {
                var e = Sd[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function Vd(a) {
        for (var b = Rd[a] || [], c = 0; c < b.length; c++) b[c]();
        Rd[a] = {
            push: function(d) {
                d(oc.m, Sd[a])
            }
        }
    }
    var Yd = function(a, b, c) {
            Sd[a] = {
                tags: []
            };
            ja(b) && Wd(a, b);
            c && C.setTimeout(function() {
                return Vd(a)
            }, Number(c));
            return Xd(a)
        },
        Wd = function(a, b) {
            Rd[a] = Rd[a] || [];
            Rd[a].push(za(function() {
                return G(function() {
                    b(oc.m, Sd[a])
                })
            }))
        };

    function Xd(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return za(function() {
                    b++;
                    d && b >= c && Vd(a)
                })
            },
            nf: function() {
                d = !0;
                b >= c && Vd(a)
            }
        }
    };
    var Zd = function() {
        function a(d) {
            return !la(d) || 0 > d ? 0 : d
        }
        if (!pc._li && C.performance && C.performance.timing) {
            var b = C.performance.timing.navigationStart,
                c = la(dd.get("gtm.start")) ? dd.get("gtm.start") : 0;
            pc._li = {
                cst: a(c - b),
                cbt: a(vc - b)
            }
        }
    };
    var ce = !1,
        de = function() {
            return C.GoogleAnalyticsObject && C[C.GoogleAnalyticsObject]
        },
        ee = !1;
    var fe = function(a) {
            C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
            var b = C.GoogleAnalyticsObject;
            if (C[b]) C.hasOwnProperty(b) || Dc("GTM", 12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                C[b] = c
            }
            Zd();
            return C[b]
        },
        ge = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = de();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var ie = function() {},
        he = function() {
            return C.GoogleAnalyticsObject || "ga"
        };
    var ke = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var le = /:[0-9]+$/,
        me = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        pe = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = ne(a.protocol) || ne(C.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : C.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || C.location.hostname).replace(le, "").toLowerCase());
            var g = b,
                h, k = ne(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = oe(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(le, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Dc("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= f(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = me(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        ne = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        oe = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        qe = function(a) {
            var b = D.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Dc("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(le, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var we = function(a) {
        var b;
        a: {
            var c = pc.consumeError;
            if (c && ja(c)) {
                b = !0;
                break a
            }
            b = !1
        }
        if (!b) return;
        var d = pc.consumeError,
            e = [];
        if (a instanceof Error) {
            d(ve({
                message: a.message
            }, e));
            return
        }
        ka(a) && d(ve({
            message: a
        }, e));
    };

    function ve(a, b) {
        a.containerId = oc.m;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };

    function xe(a, b, c, d) {
        var e = lb[a],
            g = ye(a, b, c, d);
        if (!g) return null;
        var h = ub(e[yb.zd], c, []);
        if (h && h.length) {
            var k = h[0];
            g = xe(k.index, {
                J: g,
                T: 1 === k.Kd ? b.terminate : g,
                terminate: b.terminate
            }, c, d)
        }
        return g
    }

    function ye(a, b, c, d) {
        function e() {
            if (g[yb.Ue]) k();
            else {
                var w = vb(g, c, []),
                    y = Td(c.id, String(g[yb.ia]), Number(g[yb.Ad]), w[yb.Ve]),
                    x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var B = xa() - z;
                        Wc(c.id, lb[a], "5");
                        Ud(c.id, y, "success", B);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var B = xa() - z;
                        Wc(c.id, lb[a], "6");
                        Ud(c.id, y, "failure", B);
                        k()
                    }
                };
                w.vtp_gtmTagId = g.tag_id;
                w.vtp_gtmEventId = c.id;
                Wc(c.id, g, "1");
                var A = function(B) {
                    var E = xa() - z;
                    we(B);
                    Wc(c.id, g, "7");
                    Ud(c.id, y, "exception", E);
                    x || (x = !0, k())
                };
                var z = xa();
                try {
                    tb(w, c)
                } catch (B) {
                    A(B)
                }
            }
        }
        var g = lb[a],
            h = b.J,
            k = b.T,
            l = b.terminate;
        if (c.Ac(g)) return null;
        var m = ub(g[yb.Bd], c, []);
        if (m && m.length) {
            var n = m[0],
                p = xe(n.index, {
                    J: h,
                    T: k,
                    terminate: l
                }, c, d);
            if (!p) return null;
            h = p;
            k = 2 === n.Kd ? l : p
        }
        if (g[yb.yd] || g[yb.We]) {
            var t = g[yb.yd] ? mb : c.Pg,
                q = h,
                r = k;
            if (!t[a]) {
                e = za(e);
                var v = ze(a, t, e);
                h = v.J;
                k = v.T
            }
            return function() {
                t[a](q, r)
            }
        }
        return e
    }

    function ze(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ae(d, e, c);
        return {
            J: function() {
                b[a] = Be;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            T: function() {
                b[a] = Ce;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function Ae(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Be(a) {
        a()
    }

    function Ce(a, b) {
        b()
    };
    var Fe = function(a, b) {
        for (var c = [], d = 0; d < lb.length; d++)
            if (a.cb[d]) {
                var e = lb[d];
                if (e[yb.Te]) continue;
                var g = b.add();
                try {
                    var h = xe(d, {
                        J: g,
                        T: g,
                        terminate: g
                    }, a, d);
                    h ? c.push({
                        oe: d,
                        de: wb(e),
                        Qf: h
                    }) : (De(d, a), g())
                } catch (l) {
                    g()
                }
            }
        b.nf();
        c.sort(Ee);
        for (var k = 0; k < c.length; k++) c[k].Qf();
        return 0 < c.length
    };

    function Ee(a, b) {
        var c, d = b.de,
            e = a.de;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.oe,
                k = b.oe;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function De(a, b) {
        if (!Tc) return;
        var c = function(d) {
            var e = b.Ac(lb[d]) ? "3" : "4",
                g = ub(lb[d][yb.zd], b, []);
            g && g.length && c(g[0].index);
            Wc(b.id, lb[d], e);
            var h = ub(lb[d][yb.Bd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Ge = !1,
        He = function(a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (Ge) return !1;
                Ge = !0
            }
            Vc(a, b);
            var g = Yd(a, d, e);
            kd(a, "event", 1);
            kd(a, "ecommerce", 1);
            kd(a, "gtm");
            var h = {
                id: a,
                name: b,
                Ac: Hd(c),
                cb: [],
                Pg: [],
                Yd: function(n) {
                    Dc("GTM", 6);
                    we(n)
                }
            };
            h.cb = Cb(h);
            var k = Fe(h, g);
            if (!k) return k;
            for (var l = 0; l < h.cb.length; l++)
                if (h.cb[l]) {
                    var m = lb[l];
                    if (m && !rc[String(m[yb.ia])]) return !0
                }
            return !1
        };
    var Je = function(a, b, c, d, e) {
        var g = this;
        this.eventModel = a;
        this.containerConfig = c || {};
        this.targetConfig = b || {};
        this.containerConfig = c || {};
        this.fb = d || {};
        this.globalConfig = e || {};
        this.getWithConfig = function(h) {
            if (void 0 !== g.eventModel[h]) return g.eventModel[h];
            if (void 0 !== g.targetConfig[h]) return g.targetConfig[h];
            if (void 0 !== g.containerConfig[h]) return g.containerConfig[h];
            if (void 0 !== g.fb[h]) return g.fb[h];
            if (void 0 !== g.globalConfig[h]) return g.globalConfig[h]
        }
    };
    var Ke = {},
        Le = ["G"];
    Ke.pe = "";
    var Me = Ke.pe.split(",");

    function Ne() {
        var a = pc;
        return a.gcq = a.gcq || new Oe
    }
    var Pe = function(a, b) {
            Ne().register(a, b, void 0)
        },
        Qe = function(a, b, c, d) {
            Ne().push("event", [b, a], c, d)
        },
        Re = function(a, b) {
            Ne().push("config", [a], b)
        },
        Se = {},
        Te = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.fb = {};
            this.ee = null;
            this.Ud = !1
        },
        Ue = function(a, b, c, d, e) {
            this.type = a;
            this.Ug = b;
            this.N = c || "";
            this.Cb = d;
            this.defer = e
        },
        Oe = function() {
            this.Gd = {};
            this.Pd = {};
            this.Xa = []
        },
        Ve = function(a, b) {
            var c = lc(b);
            return a.Gd[c.containerId] = a.Gd[c.containerId] || new Te
        },
        We = function(a, b, c, d) {
            if (d.N) {
                var e =
                    Ve(a, d.N),
                    g = e.ee;
                if (g) {
                    var h = u(c),
                        k = u(e.targetConfig[d.N]),
                        l = u(e.containerConfig),
                        m = u(e.fb),
                        n = u(a.Pd),
                        p = new Je(h, k, l, m, n);
                    try {
                        g(b, d.Ug, p)
                    } catch (t) {}
                }
            }
        };
    Oe.prototype.register = function(a, b, c) {
        if (3 !== Ve(this, a).status) {
            Ve(this, a).ee = b;
            Ve(this, a).status = 3;
            c && (Ve(this, a).fb = c);
            var d = lc(a),
                e = Se[d.containerId];
            if (void 0 !== e) {
                var g = cd("gtm.uniqueEventId"),
                    h = d.prefix,
                    k = xa() - e;
                if (Tc && !Kc[g]) {
                    g !== Hc && (Pc(), Hc = g);
                    var l = "" + h + Math.floor(k);
                    Oc = Oc ? Oc + "." + l : "&cl=" + l
                }
                delete Se[d.containerId]
            }
            this.flush()
        }
    };
    Oe.prototype.push = function(a, b, c, d) {
        var e = Math.floor(xa() / 1E3);
        if (c) {
            var g = lc(c),
                h;
            if (h = g) {
                var k;
                if (k = 1 === Ve(this, c).status) a: {
                    var l = g.prefix;k = !0
                }
                h = k
            }
            if (h && (Ve(this, c).status = 2, this.push("require", [], g.containerId), Se[g.containerId] = xa(), !md())) {
                var m = encodeURIComponent(g.containerId);
                Lb(("http:" != C.location.protocol ? "https:" :
                    "http:") + ("//www.googletagmanager.com/gtag/js?id=" + m + "&l=dataLayer&cx=c"))
            }
        }
        this.Xa.push(new Ue(a, e, c, b, d));
        d || this.flush()
    };
    Oe.prototype.flush = function(a) {
        for (var b = this; this.Xa.length;) {
            var c = this.Xa[0];
            if (c.defer) c.defer = !1, this.Xa.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Ve(this, c.N).status && !a) return;
                    break;
                case "set":
                    sa(c.Cb[0], function(l, m) {
                        b.Pd[l] = m
                    });
                    break;
                case "config":
                    var d = c.Cb[0],
                        e = !!d[H.tb];
                    delete d[H.tb];
                    var g = Ve(this, c.N),
                        h = lc(c.N),
                        k = h.containerId === h.id;
                    e || (k ? g.containerConfig = {} : g.targetConfig[c.N] = {});
                    g.Ud && e || We(this, H.V, d, c);
                    g.Ud = !0;
                    k ? u(d, g.containerConfig) : u(d, g.targetConfig[c.N]);
                    break;
                case "event":
                    We(this,
                        c.Cb[1], c.Cb[0], c)
            }
            this.Xa.shift()
        }
    };
    var Xe = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        af = function(a, b, c, d) {
            var e = Ye(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = Ze(e, function(g) {
                    return g.Hb
                }, b);
                if (1 === e.length) return e[0].id;
                e = Ze(e, function(g) {
                    return g.eb
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function bf(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= Xe(b, e).indexOf(c)
    }
    var ef = function(a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
                t = void 0,
                q;
            for (q in h)
                if (h.hasOwnProperty(q)) {
                    var r = h[q];
                    if (null != r) switch (q) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            p = r;
                            break;
                        default:
                            "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + q + "=" + r
                    }
                }
            if ("auto" === p) {
                for (var v = cf(), w = 0; w < v.length; ++w) {
                    var y = "none" != v[w] ? v[w] : void 0;
                    if (!df(y, t) && bf(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !df(p, t) && bf(m, a, l)
        }
        return k
    };

    function Ze(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Ye(a, b) {
        for (var c = [], d = Xe(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    Hb: 1 * k[0] || 1,
                    eb: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var ff = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        gf = /(^|\.)doubleclick\.net$/i,
        df = function(a, b) {
            return gf.test(document.location.hostname) || "/" === b && ff.test(a)
        },
        cf = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            gf.test(e) || ff.test(e) || a.push("none");
            return a
        };
    var hf = "".split(/,/),
        jf = null,
        kf = {},
        lf = {},
        mf, nf = function(a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = u(b), b[H.Yb] && (c.eventCallback = b[H.Yb]), b[H.La] && (c.eventTimeout = b[H.La]));
            return c
        };
    var tf = {
            config: function(a) {},
            event: function(a) {
                var b =
                    a[1];
                if (ka(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ia(a[2]) && void 0 != a[2]) return;
                        c = a[2]
                    }
                    var d = nf(b, c);
                    return d
                }
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function(a) {
                3 === a.length && (void 0).ih(a[1], a[2])
            },
            set: function(a) {
                var b;
                2 == a.length && Ia(a[1]) ? b = u(a[1]) : 3 == a.length && ka(a[1]) && (b = {}, Ia(a[2]) || ma(a[2]) ? b[a[1]] = u(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        uf = {
            policy: !0
        };
    var wf = function(a) {
            return vf ? D.querySelectorAll(a) : null
        },
        xf = function(a, b) {
            if (!vf) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!D.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        yf = !1;
    if (D.querySelectorAll) try {
        var zf = D.querySelectorAll(":root");
        zf && 1 == zf.length && zf[0] == D.documentElement && (yf = !0)
    } catch (a) {}
    var vf = yf;
    var Gf = function(a) {
        if (Ff(a)) return a;
        this.Xg = a
    };
    Gf.prototype.Xf = function() {
        return this.Xg
    };
    var Ff = function(a) {
        return !a || "object" !== Ga(a) || Ia(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Gf.prototype.getUntrustedUpdateValue = Gf.prototype.Xf;
    var Hf = !1,
        If = [];

    function Jf() {
        if (!Hf) {
            Hf = !0;
            for (var a = 0; a < If.length; a++) G(If[a])
        }
    }
    var Kf = function(a) {
        Hf ? G(a) : If.push(a)
    };
    var Lf = [],
        Mf = !1,
        Nf = function(a) {
            return C["dataLayer"].push(a)
        },
        Of = function(a) {
            var b = pc["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {
                ++d === c && a()
            }
        },
        Qf = function(a) {
            var b = a._clear;
            sa(a, function(g, h) {
                "_clear" !== g && (b && jd(g, void 0), jd(g, h))
            });
            uc || (uc = a["gtm.start"]);
            var c = a.event;
            if (!c) return !1;
            var d = a["gtm.uniqueEventId"];
            d || (d = Ac(), a["gtm.uniqueEventId"] = d, jd("gtm.uniqueEventId", d));
            wc = c;
            var e = Pf(a);
            wc = null;
            switch (c) {
                case "gtm.init":
                    Dc("GTM", 19), e && Dc("GTM", 20)
            }
            return e
        };

    function Pf(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = pc.zones;
        d = e ? e.checkState(oc.m, c) : Jd;
        return d.active ? He(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    var Rf = function() {
            for (var a = !1; !Mf && 0 < Lf.length;) {
                Mf = !0;
                delete Zc.eventModel;
                bd();
                var b = Lf.shift();
                if (null != b) {
                    var c = Ff(b);
                    if (c) {
                        var d = b;
                        b = Ff(d) ? d.getUntrustedUpdateValue() : void 0;
                        for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                            var h = e[g],
                                k = cd(h, 1);
                            if (ma(k) || Ia(k)) k = u(k);
                            $c[h] = k
                        }
                    }
                    try {
                        if (ja(b)) try {
                            b.call(dd)
                        } catch (v) {} else if (ma(b)) {
                            var l = b;
                            if (ka(l[0])) {
                                var m =
                                    l[0].split("."),
                                    n = m.pop(),
                                    p = l.slice(1),
                                    t = cd(m.join("."), 2);
                                if (void 0 !== t && null !== t) try {
                                    t[n].apply(t, p)
                                } catch (v) {}
                            }
                        } else {
                            var q = b;
                            if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                                a: {
                                    if (b.length && ka(b[0])) {
                                        var r = tf[b[0]];
                                        if (r && (!c || !uf[b[0]])) {
                                            b = r(b);
                                            break a
                                        }
                                    }
                                    b = void 0
                                }
                                if (!b) {
                                    Mf = !1;
                                    continue
                                }
                            }
                            a = Qf(b) || a
                        }
                    } finally {
                        c && bd(!0)
                    }
                }
                Mf = !1
            }
            return !a
        },
        Sf = function() {
            var a = Rf();
            try {
                var b = oc.m,
                    c = C["dataLayer"].hide;
                if (c && void 0 !== c[b] && c.end) {
                    c[b] = !1;
                    var d = !0,
                        e;
                    for (e in c)
                        if (c.hasOwnProperty(e) && !0 === c[e]) {
                            d = !1;
                            break
                        }
                    d && (c.end(), c.end = null)
                }
            } catch (g) {}
            return a
        },
        Tf = function() {
            var a = Jb("dataLayer", []),
                b = Jb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Qd(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Kf(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers ||
                0) + 1;
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < pc.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new Gf(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                Lf.push.apply(Lf, d);
                if (300 < this.length)
                    for (Dc("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Rf() && h
            };
            Lf.push.apply(Lf, a.slice(0));
            G(Sf)
        };
    var Uf;
    var pg = {};
    pg.vb = new String("undefined");
    var qg = function(a) {
        this.resolve = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === pg.vb ? b : a[d]);
            return c.join("")
        }
    };
    qg.prototype.toString = function() {
        return this.resolve("undefined")
    };
    qg.prototype.valueOf = qg.prototype.toString;
    pg.Ye = qg;
    pg.jc = {};
    pg.If = function(a) {
        return new qg(a)
    };
    var rg = {};
    pg.Hg = function(a, b) {
        var c = Ac();
        rg[c] = [a, b];
        return c
    };
    pg.Hd = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = rg[c];
            if (d && "function" === typeof d[b]) d[b]();
            rg[c] = void 0
        }
    };
    pg.jg = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    pg.vg = function(a) {
        if (a === pg.vb) return a;
        var b = Ac();
        pg.jc[b] = a;
        return 'google_tag_manager["' + oc.m + '"].macro(' + b + ")"
    };
    pg.ng = function(a, b, c) {
        a instanceof pg.Ye && (a = a.resolve(pg.Hg(b, c)), b = ia);
        return {
            yc: a,
            J: b
        }
    };
    var sg = function(a, b, c) {
            function d(g, h) {
                var k = g[h];
                return k
            }
            var e = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": d(a, "className"),
                "gtm.elementId": a["for"] || Rb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || d(a, "target") || ""
            };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        tg = function(a) {
            pc.hasOwnProperty("autoEventsSettings") || (pc.autoEventsSettings = {});
            var b = pc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        ug = function(a, b, c) {
            tg(a)[b] = c
        },
        vg = function(a, b, c, d) {
            var e = tg(a),
                g = ya(e, b, d);
            e[b] = c(g)
        },
        wg = function(a, b, c) {
            var d = tg(a);
            return ya(d, b, c)
        };
    var xg = function() {
            for (var a = Hb.userAgent + (D.cookie || "") + (D.referrer || ""), b = a.length, c = C.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(xa() / 1E3)].join(".")
        },
        Ag = function(a, b, c, d) {
            var e = yg(b);
            return af(a, e, zg(c), d)
        },
        Bg = function(a, b, c, d) {
            var e = "" + yg(c),
                g = zg(d);
            1 < g && (e += "-" + g);
            return [b, e, a].join(".")
        },
        yg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        zg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var Cg = ["1"],
        Dg = {},
        Hg = function(a, b, c, d) {
            var e = Eg(a);
            Dg[e] || Fg(e, b, c) || (Gg(e, xg(), b, c, d), Fg(e, b, c))
        };

    function Gg(a, b, c, d, e) {
        var g = Bg(b, "1", d, c);
        ef(a, g, c, d, 0 == e ? void 0 : new Date(xa() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function Fg(a, b, c) {
        var d = Ag(a, b, c, Cg);
        d && (Dg[a] = d);
        return d
    }

    function Eg(a) {
        return (a || "_gcl") + "_au"
    };
    var Ig = function() {
        for (var a = [], b = D.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Wc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Wc] || (g[a[h].Wc] = []), g[a[h].Wc].push({
                timestamp: k[1],
                Uf: k[2]
            }))
        }
        return g
    };

    function Jg() {
        for (var a = Kg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Lg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Kg, Mg, Ng = function(a) {
            Kg = Kg || Lg();
            Mg = Mg || Jg();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length,
                    e = c + 2 < a.length,
                    g = a.charCodeAt(c),
                    h = d ? a.charCodeAt(c + 1) : 0,
                    k = e ? a.charCodeAt(c + 2) : 0,
                    l = g >> 2,
                    m = (g & 3) << 4 | h >> 4,
                    n = (h & 15) << 2 | k >> 6,
                    p = k & 63;
                e || (p = 64, d || (n = 64));
                b.push(Kg[l], Kg[m], Kg[n], Kg[p])
            }
            return b.join("")
        },
        Og = function(a) {
            function b(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Mg[m];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Kg = Kg || Lg();
            Mg = Mg ||
                Jg();
            for (var c = "", d = 0;;) {
                var e = b(-1),
                    g = b(0),
                    h = b(64),
                    k = b(64);
                if (64 === k && -1 === e) return c;
                c += String.fromCharCode(e << 2 | g >> 4);
                64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
            }
        };
    var Pg;

    function Qg(a, b) {
        if (!a || b === D.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var Ug = function() {
            var a = Rg,
                b = Sg,
                c = Tg(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                Pb(D, "mousedown", d);
                Pb(D, "keyup", d);
                Pb(D, "submit", e);
                var g = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    g.call(this)
                };
                c.init = !0
            }
        },
        Tg = function() {
            var a = Jb("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var Vg = /(.*?)\*(.*?)\*(.*)/,
        Wg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Xg = /^(?:www\.|m\.|amp\.)+/,
        Yg = /([^?#]+)(\?[^#]*)?(#.*)?/,
        Zg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        ah = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ng(String(d))))
                }
            var e = b.join("*");
            return ["1", $g(e), e].join("*")
        },
        $g = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = Pg)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            Pg = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Pg[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        ch = function() {
            return function(a) {
                var b = qe(C.location.href),
                    c = b.search.replace("?", ""),
                    d = me(c, "_gl", !0) || "";
                a.query = bh(d) || {};
                var e = pe(b, "fragment").match(Zg);
                a.fragment = bh(e && e[3] ||
                    "") || {}
            }
        },
        dh = function() {
            var a = ch(),
                b = Tg();
            b.data || (b.data = {
                query: {},
                fragment: {}
            }, a(b.data));
            var c = {},
                d = b.data;
            d && (Ca(c, d.query), Ca(c, d.fragment));
            return c
        },
        bh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = Vg.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === $g(k, n)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = Og(t[q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {}
        };

    function eh(a, b, c) {
        function d(m) {
            var n = m,
                p = Zg.exec(n),
                t = n;
            if (p) {
                var q = p[2],
                    r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Yg.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function fh(a, b, c) {
        for (var d = {}, e = {}, g = Tg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && Qg(k.domains, b) && (k.fragment ? Ca(e, k.callback()) : Ca(d, k.callback()))
        }
        if (Da(d)) {
            var l = ah(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = D.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = eh(l, a.action);
                        ke.test(v) && (a.action = v)
                    }
                }
            } else gh(l, a, !1)
        }
        if (!c && Da(e)) {
            var w = ah(e);
            gh(w, a, !0)
        }
    }

    function gh(a, b, c) {
        if (b.href) {
            var d = eh(a, b.href, void 0 === c ? !1 : c);
            ke.test(d) && (b.href = d)
        }
    }
    var Rg = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var g = e.protocol;
                    "http:" !== g && "https:" !== g || fh(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        Sg = function(a) {
            try {
                if (a.action) {
                    var b = pe(qe(a.action), "host");
                    fh(a, b, !0)
                }
            } catch (c) {}
        },
        hh = function(a, b, c, d) {
            Ug();
            var e = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            Tg().decorators.push(e)
        },
        ih = function() {
            var a = D.location.hostname,
                b = Wg.exec(D.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Xg, ""),
                l = e.replace(Xg, ""),
                m;
            if (!(m = k === l)) {
                var n = "." + l;
                m = k.substring(k.length - n.length, k.length) === n
            }
            return m
        },
        jh = function(a, b) {
            return !1 === a ? !1 : a || b || ih()
        };
    var kh = {};
    var lh = /^\w+$/,
        mh = /^[\w-]+$/,
        nh = /^~?[\w-]+$/,
        oh = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha"
        };

    function ph(a) {
        return a && "string" == typeof a && a.match(lh) ? a : "_gcl"
    }
    var rh = function() {
        var a = qe(C.location.href),
            b = pe(a, "query", !1, void 0, "gclid"),
            c = pe(a, "query", !1, void 0, "gclsrc"),
            d = pe(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || me(e, "gclid", void 0);
            c = c || me(e, "gclsrc", void 0)
        }
        return qh(b, c, d)
    };

    function qh(a, b, c) {
        var d = {},
            e = function(g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(mh)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == kh.gtm_3pds ? 0 : kh.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }
    var th = function(a) {
        var b = rh();
        sh(b, a)
    };

    function sh(a, b, c) {
        function d(p, t) {
            var q = uh(p, e);
            q && ef(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = ph(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Hc ? 7776E3 : b.Hc;
        c = c || xa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(p) {
                return ["GCL", m, p].join(".")
            };
        a.aw && (!0 === b.Dh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var wh = function(a, b, c, d, e) {
            for (var g = dh(), h = ph(b), k = 0; k < a.length; ++k) {
                var l = a[k];
                if (void 0 !== oh[l]) {
                    var m = uh(l, h),
                        n = g[m];
                    if (n) {
                        var p = Math.min(vh(n), xa()),
                            t;
                        b: {
                            for (var q = p, r = Xe(m, D.cookie), v = 0; v < r.length; ++v)
                                if (vh(r[v]) > q) {
                                    t = !0;
                                    break b
                                }
                            t = !1
                        }
                        t || ef(m, n, c, d, 0 == e ? void 0 : new Date(p + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var w = {
                prefix: b,
                path: c,
                domain: d
            };
            sh(qh(g.gclid, g.gclsrc), w)
        },
        uh = function(a, b) {
            var c = oh[a];
            if (void 0 !== c) return b + c
        },
        vh = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
                0)
        };

    function xh(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var yh = function(a, b, c, d, e) {
            if (ma(b)) {
                var g = ph(e);
                hh(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = uh(a[k], g);
                        if (l) {
                            var m = Xe(l, D.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        zh = function(a) {
            return a.filter(function(b) {
                return nh.test(b)
            })
        },
        Ah = function(a) {
            for (var b = ["aw", "dc"], c = ph(a && a.prefix), d = {}, e = 0; e < b.length; e++) oh[b[e]] && (d[b[e]] = oh[b[e]]);
            sa(d, function(g, h) {
                var k = Xe(c + h, D.cookie);
                if (k.length) {
                    var l = k[0],
                        m = vh(l),
                        n = {};
                    n[g] = [xh(l)];
                    sh(n, a, m)
                }
            })
        };
    var Bh = /^\d+\.fls\.doubleclick\.net$/;

    function Ch(a) {
        var b = qe(C.location.href),
            c = pe(b, "host", !1);
        if (c && c.match(Bh)) {
            var d = pe(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Dh(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = Ch("gcl" + a);
            if (c) return c.split(".")
        }
        var d = ph(b);
        if ("_gcl" == d) {
            var e;
            e = rh()[a] || [];
            if (0 < e.length) return e
        }
        var g = uh(a, d),
            h;
        if (g) {
            var k = [];
            if (D.cookie) {
                var l = Xe(g, D.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = xh(l[m]);
                        n && -1 === f(k, n) && k.push(n)
                    }
                    h = zh(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var Eh = function() {
            var a = Ch("gac");
            if (a) return decodeURIComponent(a);
            var b = Ig(),
                c = [];
            sa(b, function(d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Uf);
                g = zh(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        Fh = function(a, b, c, d, e) {
            Hg(b, c, d, e);
            var g = Dg[Eg(b)],
                h = rh().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = pc.joined_au = pc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var p = "https://adservice.google.com/ddm/regclk",
                            t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                        Hb.sendBeacon && Hb.sendBeacon(t) || Ob(t);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var q = Eg(b),
                    r = Dg[q];
                r && Gg(q, r, c, d, e)
            }
        };
    var Gh;
    if (3 === oc.zb.length) Gh = "g";
    else {
        var Hh = "G";
        Gh = Hh
    }
    var Jh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Gh,
            OPT: "o"
        },
        Kh = function(a) {
            var b = oc.m.split("-"),
                c = b[0].toUpperCase(),
                d = Jh[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                g;
            if (3 === oc.zb.length) {
                var h = void 0;
                g = "2" + (h || "w")
            } else g =
                "";
            return g + d + oc.zb + e
        };
    var Lh = function(a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        Mh = function(a, b) {
            var c;
            if (2 === b.M) return a("ord", pa(1E11, 1E13)), !0;
            if (3 === b.M) return a("ord", "1"), a("num", pa(1E11, 1E13)), !0;
            if (4 === b.M) return Lh(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.M) c = "1";
            else if (6 === b.M) c = b.Qc;
            else return !1;
            Lh(c) && a("qty", c);
            Lh(b.Eb) && a("cost", b.Eb);
            Lh(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        Nh = encodeURIComponent,
        Oh = function(a, b) {
            function c(n, p, t) {
                g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" +
                    (t ? p : Nh(p)))
            }
            var d = a.vc,
                e = a.protocol;
            e += a.Pb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + Nh(d) + (";type=" + Nh(a.xc)) + (";cat=" + Nh(a.Wa));
            var g = a.Kf || {};
            sa(g, function(n, p) {
                e += ";" + Nh(n) + "=" + Nh(p + "")
            });
            if (Mh(c, a)) {
                Lh(a.Vb) && c("u", a.Vb);
                Lh(a.Ub) && c("tran", a.Ub);
                c("gtm", Kh());
                !1 === a.hf && c("npa", "1");
                if (a.sc) {
                    var h = Dh("dc", a.ya);
                    h && h.length && c("gcldc", h.join("."));
                    var k = Dh("aw", a.ya);
                    k && k.length && c("gclaw", k.join("."));
                    var l = Eh();
                    l && c("gac", l);
                    Hg(a.ya, void 0, a.Gf, a.Hf);
                    var m = Dg[Eg(a.ya)];
                    m && c("auiddc", m)
                }
                Lh(a.Mc) && c("prd", a.Mc, !0);
                sa(a.Yc, function(n, p) {
                    c(n, p)
                });
                e += b || "";
                Lh(a.Nb) && c("~oref", a.Nb);
                a.Pb ? Nb(e + "?", a.J) : Ob(e + "?", a.J, a.T)
            } else G(a.T)
        };
    var Ph = ["input", "select", "textarea"],
        Qh = ["button", "hidden", "image", "reset", "submit"],
        Rh = function(a) {
            var b = a.tagName.toLowerCase();
            return !na(Ph, function(c) {
                return c === b
            }) || "input" === b && na(Qh, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        Sh = function(a) {
            return a.form ? a.form.tagName ? a.form : D.getElementById(a.form) : Ub(a, ["form"], 100)
        },
        Th = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, g = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (Rh(h)) {
                    if (h.getAttribute(c) === d) return g;
                    g++
                }
            }
            return 0
        };
    var Wh = !!C.MutationObserver,
        Xh = void 0,
        Yh = function(a) {
            if (!Xh) {
                var b = function() {
                    var c = D.body;
                    if (c)
                        if (Wh)(new MutationObserver(function() {
                            for (var e = 0; e < Xh.length; e++) G(Xh[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Pb(c, "DOMNodeInserted", function() {
                                d || (d = !0, G(function() {
                                    d = !1;
                                    for (var e = 0; e < Xh.length; e++) G(Xh[e])
                                }))
                            })
                        }
                };
                Xh = [];
                D.body ? b() : G(b)
            }
            Xh.push(a)
        };
    var zi = C.clearTimeout,
        Ai = C.setTimeout,
        K = function(a, b, c) {
            if (md()) {
                b && G(b)
            } else return Lb(a, b, c)
        },
        Bi = function() {
            return C.location.href
        },
        Ci = function(a) {
            return pe(qe(a), "fragment")
        },
        Di = function(a) {
            return oe(qe(a))
        },
        Ei = null;
    var Fi = function(a, b) {
            return cd(a, b || 2)
        },
        Gi = function(a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return Nf(a)
        },
        Hi = function(a, b) {
            C[a] = b
        },
        W = function(a, b, c) {
            b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
            return C[a]
        },
        Ii = function(a, b, c) {
            return Xe(a, b, void 0 === c ? !0 : !!c)
        },
        Ji = function(a, b, c, d) {
            var e = {
                prefix: a,
                path: b,
                domain: c,
                Hc: d
            };
            th(e);
            Ah(e)
        },
        Ki = function(a, b, c, d, e) {
            wh(a, b, c, d, e);
        },
        Li = function(a, b, c, d, e) {
            yh(a, b, c, d, e);
        },
        Mi = function(a, b) {
            if (md()) {
                b && G(b)
            } else Nb(a, b)
        },
        Ni = function(a) {
            return !!wg(a, "init", !1)
        },
        Oi = function(a) {
            ug(a, "init", !0)
        },
        Pi = function(a, b, c) {
            var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : tc;
            d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            b && sa(b, function(e, g) {
                g && (d += "&" + e + "=" + encodeURIComponent(g))
            });
            K(J("https://", "http://", d))
        },
        Qi = function(a, b) {
            var c = a[b];
            return c
        };
    var Si = pg.ng;
    var Ti = new qa,
        Ui = function(a, b) {
            function c(h) {
                var k = qe(h),
                    l = pe(k, "protocol"),
                    m = pe(k, "host", !0),
                    n = pe(k, "port"),
                    p = pe(k, "path").toLowerCase().replace(/\/$/, "");
                if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
                return [l, m, n, p]
            }
            for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
                if (d[g] !== e[g]) return !1;
            return !0
        },
        Vi = function(a) {
            var b = a.arg0,
                c = a.arg1;
            if (a.any_of && ma(c)) {
                for (var d = 0; d < c.length; d++)
                    if (Vi({
                            "function": a["function"],
                            arg0: b,
                            arg1: c[d]
                        })) return !0;
                return !1
            }
            switch (a["function"]) {
                case "_cn":
                    return 0 <=
                        String(b).indexOf(String(c));
                case "_css":
                    var e;
                    a: {
                        if (b) {
                            var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                            try {
                                for (var h = 0; h < g.length; h++)
                                    if (b[g[h]]) {
                                        e = b[g[h]](c);
                                        break a
                                    }
                            } catch (v) {}
                        }
                        e = !1
                    }
                    return e;
                case "_ew":
                    var k, l;
                    k = String(b);
                    l = String(c);
                    var m = k.length - l.length;
                    return 0 <= m && k.indexOf(l, m) == m;
                case "_eq":
                    return String(b) == String(c);
                case "_ge":
                    return Number(b) >= Number(c);
                case "_gt":
                    return Number(b) > Number(c);
                case "_lc":
                    var n;
                    n = String(b).split(",");
                    return 0 <= f(n, String(c));
                case "_le":
                    return Number(b) <= Number(c);
                case "_lt":
                    return Number(b) < Number(c);
                case "_re":
                    var p;
                    var t = a.ignore_case ? "i" : void 0;
                    try {
                        var q = String(c) + t,
                            r = Ti.get(q);
                        r || (r = new RegExp(c, t), Ti.set(q, r));
                        p = r.test(b)
                    } catch (v) {
                        p = !1
                    }
                    return p;
                case "_sw":
                    return 0 == String(b).indexOf(String(c));
                case "_um":
                    return Ui(b, c)
            }
            return !1
        };
    var Xi = {},
        Yi = function() {
            if (C._gtmexpgrp && C._gtmexpgrp.hasOwnProperty(1)) return C._gtmexpgrp[1];
            void 0 === Xi[1] && (Xi[1] = Math.floor(2 * Math.random()));
            return Xi[1]
        };
    var Zi = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var $i = {},
        aj = encodeURI,
        X = encodeURIComponent,
        bj = Ob;
    var cj = function(a, b) {
        if (!a) return !1;
        var c = pe(qe(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var dj = function(a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    $i.kg = function() {
        var a = !1;
        a = !0;
        return a
    };
    var Ej = function() {
        var a = C.gaGlobal = C.gaGlobal || {};
        a.hid = a.hid || pa();
        return a.hid
    };
    var nk = window,
        ok = document,
        pk = function(a) {
            var b = nk._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === nk["ga-disable-" + a]) return !0;
            try {
                var c = nk.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (g) {}
            for (var d = Xe("AMP_TOKEN", ok.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return ok.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var uk = function(a, b, c) {
            Qe(b, c, a)
        },
        vk = function(a, b, c) {
            Qe(b, c, a, !0)
        },
        xk = function(a, b) {},
        wk = function(a, b) {},
        yk = function(a) {
            return "_" === a.charAt(0)
        },
        zk = function(a) {
            sa(a, function(c) {
                yk(c) && delete a[c]
            });
            var b = a[H.ub] || {};
            sa(b, function(c) {
                yk(c) && delete b[c]
            })
        };
    var Z = {
        a: {}
    };
    Z.a.ctv = ["google"],
        function() {
            (function(a) {
                Z.__ctv = a;
                Z.__ctv.b = "ctv";
                Z.__ctv.g = !0;
                Z.__ctv.priorityOverride = 0
            })(function() {
                return "338"
            })
        }();

    Z.a.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.b = "jsm";
                Z.__jsm.g = !0;
                Z.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = W("google_tag_manager");
                        return c && c.e && c.e(b)
                    } catch (d) {}
                }
            })
        }();
    Z.a.flc = [],
        function() {
            function a(b, c) {
                c = c ? c.slice(0, -1) : void 0;
                Oh(b, c)
            }(function(b) {
                Z.__flc = b;
                Z.__flc.b = "flc";
                Z.__flc.g = !0;
                Z.__flc.priorityOverride = 0
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || b.vtp_enableConversionLinker,
                    d = dj(b.vtp_customVariable || [], "key", "value") || {},
                    e = {
                        Wa: b.vtp_activityTag,
                        sc: c,
                        ya: b.vtp_conversionCookiePrefix || void 0,
                        Eb: void 0,
                        M: {
                            UNIQUE: 3,
                            SESSION: 4
                        }[b.vtp_ordinalType] || 2,
                        vc: b.vtp_advertiserId,
                        xc: b.vtp_groupTag,
                        T: b.vtp_gtmOnFailure,
                        J: b.vtp_gtmOnSuccess,
                        Nb: b.vtp_useImageTag ? void 0 : b.vtp_url,
                        protocol: "",
                        Qc: void 0,
                        Pb: !b.vtp_useImageTag,
                        sessionId: b.vtp_sessionId,
                        Ub: b.vtp_transactionVariable,
                        transactionId: void 0,
                        Vb: b.vtp_userVariable,
                        Yc: d
                    };
                if (b.vtp_enableAttribution) {
                    var g = b.vtp_attributionFields || [];
                    if (g.length) {
                        K("//www.gstatic.com/attribution/collection/attributiontools.js", function() {
                            a(e, W("google_attr").build([dj(g, "key", "value") || {}]))
                        }, b.vtp_gtmOnFailure);
                        return
                    }
                }
                a(e)
            })
        }();
    Z.a.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.b = "c";
                Z.__c.g = !0;
                Z.__c.priorityOverride = 0
            })(function(a) {
                return a.vtp_value
            })
        }();
    Z.a.d = ["google"],
        function() {
            (function(a) {
                Z.__d = a;
                Z.__d.b = "d";
                Z.__d.g = !0;
                Z.__d.priorityOverride = 0
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) {
                    var e = wf(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } else b = D.getElementById(a.vtp_elementId);
                b && (c = d ? Rb(b, d) : Sb(b));
                return wa(String(b && c))
            })
        }();
    Z.a.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.b = "e";
                Z.__e.g = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(ld(a.vtp_gtmEventId, "event"))
            })
        }();
    Z.a.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.b = "f";
                Z.__f.g = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Fi("gtm.referrer", 1) || D.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? pe(qe(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Di(String(b)) : String(b)
            })
        }();
    Z.a.j = ["google"],
        function() {
            (function(a) {
                Z.__j = a;
                Z.__j.b = "j";
                Z.__j.g = !0;
                Z.__j.priorityOverride = 0
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = W(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                return c
            })
        }();
    Z.a.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.b = "k";
                Z.__k.g = !0;
                Z.__k.priorityOverride = 0
            })(function(a) {
                return Ii(a.vtp_name, Fi("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();
    Z.a.r = ["google"],
        function() {
            (function(a) {
                Z.__r = a;
                Z.__r.b = "r";
                Z.__r.g = !0;
                Z.__r.priorityOverride = 0
            })(function(a) {
                return pa(a.vtp_min, a.vtp_max)
            })
        }();
    Z.a.t = ["google"],
        function() {
            (function(a) {
                Z.__t = a;
                Z.__t.b = "t";
                Z.__t.g = !0;
                Z.__t.priorityOverride = 0
            })(function() {
                return (new Date).getTime()
            })
        }();
    Z.a.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.b = "u";
                Z.__u.g = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Fi("gtm.url", 1)) || Bi();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Di(String(c));
                var e = qe(String(c)),
                    g;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        m;m = h ? ma(k) ? k : String(k).replace(/\s+/g,
                        "").split(",") : [String(k)];
                    for (var n = 0; n < m.length; n++) {
                        var p = pe(e, "QUERY", void 0, void 0, m[n]);
                        if (void 0 != p && (!l || "" !== p)) {
                            g = p;
                            break a
                        }
                    }
                    g = void 0
                }
                else g = pe(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return g
            })
        }();
    Z.a.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.b = "v";
                Z.__v.g = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Fi(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();
    Z.a.ua = ["google"],
        function() {
            var a, b = {},
                c = function(d) {
                    var e = {},
                        g = {},
                        h = {},
                        k = {},
                        l = {},
                        m = void 0;
                    if (d.vtp_gaSettings) {
                        var n = d.vtp_gaSettings;
                        u(dj(n.vtp_fieldsToSet, "fieldName", "value"), g);
                        u(dj(n.vtp_contentGroup, "index", "group"), h);
                        u(dj(n.vtp_dimension, "index", "dimension"), k);
                        u(dj(n.vtp_metric, "index", "metric"), l);
                        d.vtp_gaSettings = null;
                        n.vtp_fieldsToSet = void 0;
                        n.vtp_contentGroup = void 0;
                        n.vtp_dimension = void 0;
                        n.vtp_metric = void 0;
                        var p = u(n);
                        d = u(d, p)
                    }
                    u(dj(d.vtp_fieldsToSet, "fieldName", "value"), g);
                    u(dj(d.vtp_contentGroup,
                        "index", "group"), h);
                    u(dj(d.vtp_dimension, "index", "dimension"), k);
                    u(dj(d.vtp_metric, "index", "metric"), l);
                    var t = fe(d.vtp_functionName);
                    if (ja(t)) {
                        var q = "",
                            r = "";
                        d.vtp_setTrackerName && "string" == typeof d.vtp_trackerName ? "" !== d.vtp_trackerName && (r = d.vtp_trackerName, q = r + ".") : (r = "gtm" + Ac(), q = r + ".");
                        var v = {
                                name: !0,
                                clientId: !0,
                                sampleRate: !0,
                                siteSpeedSampleRate: !0,
                                alwaysSendReferrer: !0,
                                allowAnchor: !0,
                                allowLinker: !0,
                                cookieName: !0,
                                cookieDomain: !0,
                                cookieExpires: !0,
                                cookiePath: !0,
                                cookieUpdate: !0,
                                legacyCookieDomain: !0,
                                legacyHistoryImport: !0,
                                storage: !0,
                                useAmpClientId: !0,
                                storeGac: !0
                            },
                            w = {
                                allowAnchor: !0,
                                allowLinker: !0,
                                alwaysSendReferrer: !0,
                                anonymizeIp: !0,
                                cookieUpdate: !0,
                                exFatal: !0,
                                forceSSL: !0,
                                javaEnabled: !0,
                                legacyHistoryImport: !0,
                                nonInteraction: !0,
                                useAmpClientId: !0,
                                useBeacon: !0,
                                storeGac: !0,
                                allowAdFeatures: !0
                            },
                            y = function(S) {
                                var O = [].slice.call(arguments, 0);
                                O[0] = q + O[0];
                                t.apply(window, O)
                            },
                            x = function(S, O) {
                                return void 0 === O ? O : S(O)
                            },
                            A = function(S, O) {
                                if (O)
                                    for (var oa in O) O.hasOwnProperty(oa) && y("set", S + oa, O[oa])
                            },
                            z = function() {},
                            B = function(S, O, oa) {
                                var Sa = 0;
                                if (S)
                                    for (var Aa in S)
                                        if (S.hasOwnProperty(Aa) && (oa && v[Aa] || !oa && void 0 === v[Aa])) {
                                            var Ta = w[Aa] ? ua(S[Aa]) : S[Aa];
                                            "anonymizeIp" != Aa || Ta || (Ta = void 0);
                                            O[Aa] = Ta;
                                            Sa++
                                        }
                                return Sa
                            },
                            E = {
                                name: r
                            };
                        B(g, E, !0);
                        t("create", d.vtp_trackingId || e.trackingId, E);
                        y("set", "&gtm", Kh(!0));
                        d.vtp_enableRecaptcha && y("require", "recaptcha", "recaptcha.js");
                        (function(S, O) {
                            void 0 !== d[O] && y("set", S, d[O])
                        })("nonInteraction", "vtp_nonInteraction");
                        A("contentGroup", h);
                        A("dimension", k);
                        A("metric", l);
                        var F = {};
                        B(g, F, !1) && y("set", F);
                        var M;
                        d.vtp_enableLinkId && y("require", "linkid", "linkid.js");
                        y("set", "hitCallback", function() {
                            var S = g && g.hitCallback;
                            ja(S) && S();
                            d.vtp_gtmOnSuccess()
                        });
                        if ("TRACK_EVENT" == d.vtp_trackType) {
                            d.vtp_enableEcommerce && (y("require", "ec", "ec.js"), z());
                            var N = {
                                hitType: "event",
                                eventCategory: String(d.vtp_eventCategory || e.category),
                                eventAction: String(d.vtp_eventAction || e.action),
                                eventLabel: x(String, d.vtp_eventLabel || e.label),
                                eventValue: x(ta, d.vtp_eventValue ||
                                    e.value)
                            };
                            B(M, N, !1);
                            y("send", N);
                        } else if ("TRACK_SOCIAL" == d.vtp_trackType) {} else if ("TRACK_TRANSACTION" == d.vtp_trackType) {} else if ("TRACK_TIMING" ==
                            d.vtp_trackType) {} else if ("DECORATE_LINK" == d.vtp_trackType) {} else if ("DECORATE_FORM" == d.vtp_trackType) {} else if ("TRACK_DATA" == d.vtp_trackType) {} else {
                            d.vtp_enableEcommerce && (y("require", "ec", "ec.js"), z());
                            if (d.vtp_doubleClick || "DISPLAY_FEATURES" == d.vtp_advertisingFeaturesType) {
                                var Y =
                                    "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                y("require", "displayfeatures", void 0, {
                                    cookieName: Y
                                })
                            }
                            if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == d.vtp_advertisingFeaturesType) {
                                var da = "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                y("require", "adfeatures", {
                                    cookieName: da
                                })
                            }
                            M ? y("send", "pageview", M) : y("send", "pageview");
                        }
                        if (!a) {
                            var ea = d.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                            d.vtp_useInternalVersion && !d.vtp_useDebugVersion && (ea = "internal/" + ea);
                            a = !0;
                            var Ba = J("https:", "http:", "//www.google-analytics.com/" + ea, g && g.forceSSL);
                            K(Ba, function() {
                                var S = de();
                                S && S.loaded || d.vtp_gtmOnFailure();
                            }, d.vtp_gtmOnFailure)
                        }
                    } else G(d.vtp_gtmOnFailure)
                };
            Z.__ua = c;
            Z.__ua.b = "ua";
            Z.__ua.g = !0;
            Z.__ua.priorityOverride = 0
        }();



    Z.a.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.b = "cid";
                Z.__cid.g = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return oc.m
            })
        }();

    Z.a.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.b = "gclidw";
                Z.__gclidw.g = !0;
                Z.__gclidw.priorityOverride = 100
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                var c, d, e;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain);
                var g = null;
                b.vtp_enableCookieUpdateFeature && (g = !0, void 0 !== b.vtp_cookieUpdate && (g = !!b.vtp_cookieUpdate));
                var h = e,
                    k = c,
                    l = d;
                b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain ||
                    ih()) && Ki(a, h, k, l));
                Ji(e, c, d);
                Fh(g, e, c, d);
                var m = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var n = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Li(a, n, b.vtp_urlPosition, !!b.vtp_formDecoration, m)
                }
            })
        }();

    Z.a.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.b = "gas";
                Z.__gas.g = !0;
                Z.__gas.priorityOverride = 0
            })(function(a) {
                var b = u(a),
                    c = b;
                c[yb.ia] = null;
                c[yb.Se] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();

    Z.a.hl = ["google"],
        function() {
            function a(g) {
                return g.target && g.target.location && g.target.location.href ? g.target.location.href : Bi()
            }

            function b(g, h) {
                Pb(g, "hashchange", function(k) {
                    var l = a(k);
                    h({
                        source: "hashchange",
                        state: null,
                        url: Di(l),
                        D: Ci(l)
                    })
                })
            }

            function c(g, h) {
                Pb(g, "popstate", function(k) {
                    var l = a(k);
                    h({
                        source: "popstate",
                        state: k.state,
                        url: Di(l),
                        D: Ci(l)
                    })
                })
            }

            function d(g, h, k) {
                var l = h.history,
                    m = l[g];
                if (ja(m)) try {
                    l[g] = function(n, p, t) {
                        m.apply(l, [].slice.call(arguments, 0));
                        k({
                            source: g,
                            state: n,
                            url: Di(Bi()),
                            D: Ci(Bi())
                        })
                    }
                } catch (n) {}
            }

            function e() {
                var g = {
                    source: null,
                    state: W("history").state || null,
                    url: Di(Bi()),
                    D: Ci(Bi())
                };
                return function(h) {
                    var k = g,
                        l = {};
                    l[k.source] = !0;
                    l[h.source] = !0;
                    if (!l.popstate || !l.hashchange || k.D != h.D) {
                        var m = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": h.source,
                            "gtm.oldUrlFragment": g.D,
                            "gtm.newUrlFragment": h.D,
                            "gtm.oldHistoryState": g.state,
                            "gtm.newHistoryState": h.state
                        };
                        m["gtm.oldUrl"] = g.url, m["gtm.newUrl"] = h.url;
                        g = h;
                        Gi(m)
                    }
                }
            }(function(g) {
                Z.__hl = g;
                Z.__hl.b = "hl";
                Z.__hl.g = !0;
                Z.__hl.priorityOverride = 0
            })(function(g) {
                var h = W("self");
                if (!Ni("hl")) {
                    var k = e();
                    b(h, k);
                    c(h, k);
                    d("pushState", h, k);
                    d("replaceState", h, k);
                    Oi("hl")
                }
                G(g.vtp_gtmOnSuccess)
            })
        }();
    Z.a.awct = ["google"],
        function() {
            var a = !1,
                b = [],
                c = function(k) {
                    var l = W("google_trackConversion"),
                        m = k.gtm_onFailure;
                    "function" == typeof l ? l(k) || m() : m()
                },
                d = function() {
                    for (; 0 < b.length;) c(b.shift())
                },
                e = function() {
                    return function() {
                        d();
                        a = !1
                    }
                },
                g = function() {
                    return function() {
                        d();
                        b = {
                            push: c
                        };
                    }
                },
                h = function(k) {
                    Zd();
                    var l = {
                            google_basket_transaction_type: "purchase",
                            google_conversion_domain: "",
                            google_conversion_id: k.vtp_conversionId,
                            google_conversion_label: k.vtp_conversionLabel,
                            google_conversion_value: k.vtp_conversionValue || 0,
                            google_remarketing_only: !1,
                            onload_callback: k.vtp_gtmOnSuccess,
                            gtm_onFailure: k.vtp_gtmOnFailure,
                            google_gtm: Kh()
                        },
                        m = function(v) {
                            return function(w, y, x) {
                                var A = "DATA_LAYER" == v ? Fi(x) : k[y];
                                A && (l[w] = A)
                            }
                        },
                        n = m("JSON");
                    n("google_conversion_currency", "vtp_currencyCode");
                    n("google_conversion_order_id", "vtp_orderId");
                    k.vtp_enableProductReporting && (n = m(k.vtp_productReportingDataSource), n("google_conversion_merchant_id", "vtp_awMerchantId", "aw_merchant_id"), n("google_basket_feed_country",
                        "vtp_awFeedCountry", "aw_feed_country"), n("google_basket_feed_language", "vtp_awFeedLanguage", "aw_feed_language"), n("google_basket_discount", "vtp_discount", "discount"), n("google_conversion_items", "vtp_items", "items"), l.google_conversion_items = l.google_conversion_items.map(function(v) {
                        return {
                            value: v.price,
                            quantity: v.quantity,
                            item_id: v.id
                        }
                    }));
                    var p = function(v, w) {
                            (l.google_additional_conversion_params = l.google_additional_conversion_params || {})[v] = w
                        },
                        t = function(v) {
                            return function(w, y, x, A) {
                                var z = "DATA_LAYER" ==
                                    v ? Fi(x) : k[y];
                                A(z) && p(w, z)
                            }
                        },
                        q = "//www.googleadservices.com/pagead/conversion_async.js";
                    k.vtp_enableNewCustomerReporting && (n = t(k.vtp_newCustomerReportingDataSource), n("vdnc",
                        "vtp_awNewCustomer", "new_customer", ca), n("vdltv", "vtp_awCustomerLTV", "customer_lifetime_value", function(v) {
                        return void 0 != v && "" !== v
                    }));
                    !k.hasOwnProperty("vtp_enableConversionLinker") || k.vtp_enableConversionLinker ? (k.vtp_conversionCookiePrefix && (l.google_gcl_cookie_prefix = k.vtp_conversionCookiePrefix), l.google_read_gcl_cookie_opt_out = !1) : l.google_read_gcl_cookie_opt_out = !0;
                    var r = !0;
                    r && b.push(l);
                    a || (a = !0, K(q, g(), e(q)))
                };
            Z.__awct = h;
            Z.__awct.b = "awct";
            Z.__awct.g = !0;
            Z.__awct.priorityOverride = 0
        }();
    Z.a.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.b = "remm";
                Z.__remm.g = !0;
                Z.__remm.priorityOverride = 0
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var k = new RegExp(h, e);
                    if (k.test(b)) {
                        var l = c[g].value;
                        a.vtp_replaceAfterMatch && (l = String(b).replace(k, l));
                        return l
                    }
                }
                return a.vtp_defaultValue
            })
        }();
    Z.a.smm = ["google"],
        function() {
            (function(a) {
                Z.__smm = a;
                Z.__smm.b = "smm";
                Z.__smm.g = !0;
                Z.__smm.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_input,
                    c = dj(a.vtp_map, "key", "value") || {};
                return c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue
            })
        }();



    Z.a.hid = ["google"],
        function() {
            (function(a) {
                Z.__hid = a;
                Z.__hid.b = "hid";
                Z.__hid.g = !0;
                Z.__hid.priorityOverride = 0
            })(function() {
                return pg.vb
            })
        }();
    Z.a.twitter_website_tag = ["nonGoogleScripts"],
        function() {
            (function(a) {
                Z.__twitter_website_tag = a;
                Z.__twitter_website_tag.b = "twitter_website_tag";
                Z.__twitter_website_tag.g = !0;
                Z.__twitter_website_tag.priorityOverride = 0
            })(function(a) {
                (function(c, d) {
                    c.twq || (d = c.twq = function() {
                        d.exe ? d.exe.apply(d, arguments) : d.queue.push(arguments)
                    }, d.version = "1", d.queue = [], K("//static.ads-twitter.com/uwt.js"))
                })(window, void 0);
                window.twq("init", String(a.vtp_twitter_pixel_id));
                var b = dj(a.vtp_event_parameters, "param_table_key_column",
                    "param_table_value_column");
                b && void 0 !== b.content_ids && (b.content_ids = JSON.parse(b.content_ids.replace(/'/g, '"')));
                window.twq("track", String(a.vtp_event_type), b);
                G(a.vtp_gtmOnSuccess)
            })
        }();
    Z.a.html = ["customScripts"],
        function() {
            function a(d, e, g, h) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var k = e.shift(),
                                l = a(d, e, g, h);
                            if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
                                var m = D.createElement("script");
                                m.async = !1;
                                m.type = "text/javascript";
                                m.id = k.id;
                                m.text = k.text || k.textContent || k.innerHTML || "";
                                k.charset && (m.charset = k.charset);
                                var n = k.getAttribute("data-gtmsrc");
                                n && (m.src = n, Kb(m, l));
                                d.insertBefore(m, null);
                                n || l()
                            } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var p = []; k.firstChild;) p.push(k.removeChild(k.firstChild));
                                d.insertBefore(k, null);
                                a(k, p, l, h)()
                            } else d.insertBefore(k, null), l()
                        } else g()
                    } catch (t) {
                        G(h)
                    }
                }
            }
            var c = function(d) {
                if (D.body) {
                    var e =
                        d.vtp_gtmOnFailure,
                        g = Si(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        h = g.yc,
                        k = g.J;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(h, k, e) : a(D.body, Tb(h), k, e)()
                } else Ai(function() {
                        c(d)
                    },
                    200)
            };
            Z.__html = c;
            Z.__html.b = "html";
            Z.__html.g = !0;
            Z.__html.priorityOverride = 0
        }();





    Z.a.img = ["customPixels"],
        function() {
            (function(a) {
                Z.__img = a;
                Z.__img.b = "img";
                Z.__img.g = !0;
                Z.__img.priorityOverride = 0
            })(function(a) {
                var b = Tb('<a href="' + a.vtp_url + '"></a>')[0].href,
                    c = a.vtp_cacheBusterQueryParam;
                if (a.vtp_useCacheBuster) {
                    c || (c = "gtmcb");
                    var d = b.charAt(b.length - 1),
                        e = 0 <= b.indexOf("?") ? "?" == d || "&" == d ? "" : "&" : "?";
                    b += e + c + "=" + a.vtp_randomNumber
                }
                bj(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
            })
        }();




    Z.a.csm = ["nonGoogleScripts"],
        function() {
            (function(a) {
                Z.__csm = a;
                Z.__csm.b = "csm";
                Z.__csm.g = !0;
                Z.__csm.priorityOverride = 0
            })(function(a) {
                var b = W("document");
                bj(function(d) {
                    if (2048 < d.length) {
                        var e = d.substring(0, 2040).lastIndexOf("&");
                        d = d.substring(0, e) + "&ns_cut=" + X(d.substring(e + 1));
                        d = d.substring(0, 2048)
                    }
                    return d
                }(function(d, e) {
                    var g = new Date,
                        h = (e || "").split("&");
                    e = "";
                    for (var k = 0; k < h.length; k++)
                        if (h[k]) {
                            var l = h[k].match(/([^=]*)=?(.*)/);
                            e += "&" + X(l[1]) + "=" + X(l[2])
                        }
                    return J("https://sb", "http://b", ".scorecardresearch.com/b?c1=2&c2=" +
                        X(d) + "&ns__t=" + g.valueOf() + "&ns_c=" + (b.characterSet || b.mh || "") + "&c8=" + X(b.title || "") + e + "&c7=" + X(b.URL) + "&c9=" + X(b.referrer))
                }(a.vtp_clientId, function() {
                    var d = "",
                        e = b.cookie;
                    if (0 <= e.indexOf("comScore"))
                        for (var g = e.split(";"), h = 0; h < g.length; h++) {
                            var k = g[h].indexOf("comScore");
                            0 <= k && (d = unescape(g[h].substring(k + 8)))
                        }
                    return d
                }())));
                var c = function() {
                    var d = J("https://sb", "http://b", ".scorecardresearch.com/c2/" + X(a.vtp_clientId) + "/cs.js");
                    K(d, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
                };
                "complete" === b.readyState ?
                    c() : Pb(W("self"), "load", c)
            })
        }();
    var Ik = {};
    Ik.macro = function(a) {
        if (pg.jc.hasOwnProperty(a)) return pg.jc[a]
    }, Ik.onHtmlSuccess = pg.Hd(!0), Ik.onHtmlFailure = pg.Hd(!1);
    Ik.dataLayer = dd;
    Ik.callback = function(a) {
        yc.hasOwnProperty(a) && ja(yc[a]) && yc[a]();
        delete yc[a]
    };
    Ik.tf = function() {
        pc[oc.m] = Ik;
        Ca(zc, Z.a);
        qb = qb || pg;
        rb = Id
    };
    Ik.fg = function() {
        kh.gtm_3pds = !0;
        pc = C.google_tag_manager = C.google_tag_manager || {};
        if (pc[oc.m]) {
            var a = pc.zones;
            a && a.unregisterChild(oc.m)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) ib.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) lb.push(e[g]);
            for (var h = b.predicates || [],
                    k = 0; k < h.length; k++) kb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t < n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                jb.push(p)
            }
            nb = Z;
            pb = Vi;
            Ik.tf();
            Tf();
            Ld = !1;
            Md = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) Od();
            else {
                Pb(D, "DOMContentLoaded", Od);
                Pb(D, "readystatechange", Od);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !C.frameElement
                    } catch (y) {}
                    q && Pd()
                }
                Pb(C, "load", Od)
            }
            Hf = !1;
            "complete" === D.readyState ? Jf() :
                Pb(C, "load", Jf);
            a: {
                if (!Tc) break a;C.setInterval(Uc, 864E5);
            }
            vc = (new Date).getTime();
        }
    };
    (0, Ik.fg)();

})()