'use strict';
(function() {
    (function() {
        var cmpScriptElement = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        cmpScriptElement.async = true;
        cmpScriptElement.type = 'text/javascript';
        cmpScriptElement.src = 'https://quantcast.mgr.consensu.org/v25/cmp.js';
        firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
    })();
    (function() {
        var css = "" +
            " .qc-cmp-button { " +
            "   background-color: #0f65ef !important; " +
            "   border-color: #0f65ef !important; " +
            " } " +
            " .qc-cmp-button:hover { " +
            "   border-color: #0f65ef !important; " +
            " } " +
            " .qc-cmp-alt-action, " +
            " .qc-cmp-link { " +
            "   color: #0f65ef !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button:hover { " +
            "   background-color: #0f65ef !important; " +
            "   border-color: #0f65ef !important; " +
            " } " +
            " .qc-cmp-button { " +
            "   color: #ffffff !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button:hover { " +
            "   color: #ffffff !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button { " +
            "   color: #0f65ef !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button { " +
            "   background-color: #ffffff !important; " +
            "   border-color: transparent !important; " +
            " } " +
            " .qc-cmp-ui, " +
            " .qc-cmp-ui .qc-cmp-title, " +
            " .qc-cmp-ui .qc-cmp-table, " +
            " .qc-cmp-ui .qc-cmp-messaging, " +
            " .qc-cmp-ui .qc-cmp-sub-title, " +
            " .qc-cmp-ui .qc-cmp-vendor-list, " +
            " .qc-cmp-ui .qc-cmp-purpose-info, " +
            " .qc-cmp-ui .qc-cmp-table-header, " +
            " .qc-cmp-ui .qc-cmp-beta-messaging, " +
            " .qc-cmp-ui .qc-cmp-main-messaging, " +
            " .qc-cmp-ui .qc-cmp-vendor-list-title{ " +
            "   color: #222222 !important; " +
            " } " +
            " .qc-cmp-ui a, " +
            " .qc-cmp-ui .qc-cmp-alt-action { " +
            "   color: #368bd6 !important; " +
            " } " +
            " .qc-cmp-ui { " +
            "   background-color: #ffffff !important; " +
            " } " +
            " .qc-cmp-small-toggle.qc-cmp-toggle-on, " +
            " .qc-cmp-toggle.qc-cmp-toggle-on { " +
            "   background-color: #68af15!important; " +
            "   border-color: #68af15!important; " +
            " } " +
            "/* title font */.qc-cmp-ui h1,.qc-cmp-ui h2, .qc-cmp-ui h3,.qc-cmp-ui h4,.qc-cmp-ui h5,.qc-cmp-ui h6 {font-family: Arial, Verdana, sans-serif;text-transform: unset;}/* buttons */.qc-cmp-buttons {min-width: unset;}/* accept all button */.qc-cmp-button:hover {background-color: #0f65ef !important;}/* reject all button */.qc-cmp-button.qc-cmp-secondary-button {border-color: #0f65ef !important;}.qc-cmp-button.qc-cmp-button.qc-cmp-secondary-button:hover {color: #0f65ef !important;}/* toggle off */.qc-cmp-small-toggle,.qc-cmp-toggle {background-color: #aaaaaa !important;border-color: #aaaaaa !important;}/* toggle status text */.qc-cmp-toggle-status {color: #222222 !important;}" +
            " .qc-cmp-table { border: 1px solid #000000 !important;} .qc-cmp-table-row { border-top: 1px solid #000000 !important; } .qc-cmp-table-row:last-child {  border-bottom: 1px solid #000000 !important; } .qc-cmp-toggle-status { color: #000000 !important; }  .qc-cmp-arrow-down { background: url(\"data:image\/svg+xml,%3Csvg xmlns=\'http:\/\/www.w3.org\/2000\/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%234D545D\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E %3Cpolyline points=\'2 5 8 11 14 5\'\/%3E %3C\/svg%3E\") center no-repeat; }" +
            "";
        var stylesElement = document.createElement('style');
        var re = new RegExp('&amp;quote;', 'g');
        css = css.replace(re, '"');
        stylesElement.type = 'text/css';
        if (stylesElement.styleSheet) {
            stylesElement.styleSheet.cssText = css;
        } else {
            stylesElement.appendChild(document.createTextNode(css));
        }
        var body = document.body || document.getElementsByTagName('body')[0];
        body.appendChild(stylesElement);
    })();
    (function() {
        var gdprAppliesGlobally = true;

        function addFrame() {
            if (!window.frames['__cmpLocator']) {
                if (document.body) {
                    (function() {
                        var body = document.body;
                        var iframe = document.createElement('iframe');
                        iframe.name = '__cmpLocator';
                        iframe.style.cssText = 'display:none';
                        body.appendChild(iframe);
                    })();
                } else {
                    setTimeout(addFrame, 5);
                }
            }
        }
        addFrame();

        function cmpMsgHandler(event) {
            var json = void 0;
            var msgIsString = typeof event.data === 'string';
            if (msgIsString) {
                json = event.data.indexOf('__cmpCall') !== -1 ? JSON.parse(event.data) : {};
            } else {
                json = event.data;
            }
            if (json.__cmpCall) {
                (function() {
                    var cmpCall = json.__cmpCall;
                    window.__cmp(cmpCall.command, cmpCall.parameter, function(returnValue, success) {
                        var returnMsg = {
                            '__cmpReturn': {
                                'success': success,
                                'callId': cmpCall.callId,
                                'returnValue': returnValue
                            }
                        };
                        event.source.postMessage(msgIsString ? JSON.stringify(returnMsg) : returnMsg, '*');
                    });
                })();
            }
        }
        window.__cmp = function(command) {
            var arg = arguments;
            var returnValue = null;
            if (!arg.length) {
                returnValue = __cmp.a;
            } else if (arg[0] === 'ping') {
                arg[2]({
                    'cmpLoaded': false,
                    'gdprAppliesGlobally': gdprAppliesGlobally
                }, true);
            } else if (command === '__cmp') {
                returnValue = false;
            } else {
                if (typeof __cmp.a === 'undefined') {
                    __cmp.a = [];
                }
                __cmp.a.push([].slice.apply(arg));
            }
            return returnValue
        }
        window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
        window.__cmp.msgHandler = cmpMsgHandler;
        if (window.addEventListener) {
            window.addEventListener('message', cmpMsgHandler, false);
        } else {
            window.attachEvent('onmessage', cmpMsgHandler);
        }
    })();
    var autoDetectedLanguage = 'en';

    function splitLang(lang) {
        return lang.length > 2 ? lang.split('-')[0] : lang;
    };

    function isSupported(lang) {
        var langs = ['bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr', 'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv'];
        return langs.includes(lang);
    };
    if (isSupported(splitLang(document.documentElement.lang))) {
        autoDetectedLanguage = splitLang(document.documentElement.lang);
    } else if (isSupported(splitLang(navigator.language))) {
        autoDetectedLanguage = splitLang(navigator.language);
    };
    var choiceMilliSeconds = (new Date).getTime();
    window.__cmp('init', {
        'Initial Screen Purpose Link Text': 'Show Purposes',
        'Non IAB Vendor List URL': 'https://quantcast.mgr.consensu.org'.concat('/choice').concat('/3aud4J6uA4Z6Y').concat('/www.buzzfeed.com').concat('/.well-known/noniab-vendorlist.json').concat('?timestamp', '=', choiceMilliSeconds),
        'UI Layout': 'banner',
        'Publisher Name': 'BuzzFeed',
        'Publisher Logo': 'https://obiwan-static.buzzfeed.com/static/images/about/press-assets/BuzzFeed_Logo.png',
        'Purpose Screen Body Text': 'We and our partners use technology such as cookies on our site to personalise content and ads, provide social media features, and analyse our traffic. Click below to consent to the use of this technology across the web. You can change your mind and change your consent choices at anytime by returning to this site.',
        'Display Persistent Consent Link': false,
        'No Option': false,
        'Publisher Purpose Legitimate Interest IDs': [1, 2, 3, 4, 5],
        'Soft Opt-in Enabled': false,
        'Min Days Between UI Displays': 30,
        'Default Value for Toggles': 'off',
        'Google Personalization': true,
        'Consent Scope': 'service',
        'Publisher Purpose IDs': [1, 2, 3, 4, 5],
        'Custom Links Displayed on Initial Screen': ['[Privacy Policy](https:\/\/www.buzzfeed.com\/about\/privacy)'],
        'Language': autoDetectedLanguage,
        'Publisher Vendor List URL': 'https://quantcast.mgr.consensu.org'.concat('/choice').concat('/3aud4J6uA4Z6Y').concat('/www.buzzfeed.com').concat('/.well-known/pubvendors.json').concat('?timestamp', '=', choiceMilliSeconds),
        'Initial Screen Body Text Option': 1,
        'Initial Screen Title Text': 'We value your privacy',
        'PCode': '3aud4J6uA4Z6Y',
        'Display UI': 'inEU'
    });
})();