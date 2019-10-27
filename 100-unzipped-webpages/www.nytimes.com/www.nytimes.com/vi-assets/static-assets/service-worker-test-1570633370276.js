"use strict";
var precacheConfig = [
        ["/vi-assets/static-assets/NYT-BestSeller-1200x675-84503d139c9bc060c754589889fa3767.png", "84503d139c9bc060c754589889fa3767"],
        ["/vi-assets/static-assets/NYT-BestSeller-Orange-482417cd6bc9bb38c8dc54a500698d5f.png", "482417cd6bc9bb38c8dc54a500698d5f"],
        ["/vi-assets/static-assets/additionalPlaylists-23a977517c5829b4c42c.js", "2999489858d6eef4805f2a1af7457380"],
        ["/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js", "825409fa151018b0591abad6f1206f08"],
        ["/vi-assets/static-assets/anon-recirculation-0bac95c0ac88889662bf.js", "855c7baa87eceb97d0d17279823cf5c6"],
        ["/vi-assets/static-assets/answerpage-e7c93773cdcb4655d3dd.js", "f3c47cfba23bf848f61123988b75bb82"],
        ["/vi-assets/static-assets/answerpage~bestsellers~collections~hubpage~reviews~search~slideshow~timeswire~weddings~your-list-76ab52cf11b70f30e8c6.js", "c226775a7bfef1189e19b1d9631a6aae"],
        ["/vi-assets/static-assets/answerpage~getstarted~slideshow-f491e6b7cf2571f64a8b.js", "a9b5aaa4e1418e4fb2b02d2501f82aa6"],
        ["/vi-assets/static-assets/app-download-unit-846010bacd86d1085d8a.js", "2eea04f696e0c13ae6ad3509abdd9c57"],
        ["/vi-assets/static-assets/apple-touch-icon-319373aaf4524d94d38aa599c56b8655.png", "319373aaf4524d94d38aa599c56b8655"],
        ["/vi-assets/static-assets/apple-touch-icon-dark-515d16f1cf801524af90e75750e5048e.png", "515d16f1cf801524af90e75750e5048e"],
        ["/vi-assets/static-assets/audio-e4df0a7902f435882031.js", "d7e2be5ea03157cc384b7ce3440e7bca"],
        ["/vi-assets/static-assets/audioblock-62f5bb9239146012e5d4.js", "38b412cafd44b38d7d443c2bd74b66a2"],
        ["/vi-assets/static-assets/bestsellers-0e778ea10dd6b6c0eedf.js", "5d031816406ac672d8d9112d1f4e655e"],
        ["/vi-assets/static-assets/bestsellers~byline~collections~reviews~trending~your-list-e863e182e92a48e1c81e.js", "b639251a7a19c52a1a9e4633fed0ae7b"],
        ["/vi-assets/static-assets/blank-2ea9fe6b6ee02d2dca21.js", "d00a71535e6f3c2139371f7bccc6384b"],
        ["/vi-assets/static-assets/boxes-4cb0eb367fe74749a9779d0e7d5c68ec.png", "4cb0eb367fe74749a9779d0e7d5c68ec"],
        ["/vi-assets/static-assets/byline-7ab1e1429139e063d358.js", "1bef69f5380e43d5e68315205f6251c9"],
        ["/vi-assets/static-assets/byline~search~timeswire~your-list-88edb3f08781d3dd74ae.js", "a3413e202ef1138dece4670a598fd2b9"],
        ["/vi-assets/static-assets/byline~timeswire-e597dfff6bc6d67bc7af.js", "b3ecee2a8305d34a57762c628e9cbe99"],
        ["/vi-assets/static-assets/capsule-d3d971db73e9cb2f243c.js", "e6c5e99f8021a36d84abcc30b13ede82"],
        ["/vi-assets/static-assets/coderedeem-ef823677ce9e867b90d8.js", "6e6edaf772b9ad20d9b64e1f372c684f"],
        ["/vi-assets/static-assets/collections-c2e324b97fa258d5bc84.js", "d30675b81e987bcd3b3a661e2d083642"],
        ["/vi-assets/static-assets/comments-e43ad7a00049de3d64f0.js", "5dba845c93ed0fc15907cab3ba84a7b4"],
        ["/vi-assets/static-assets/dealbook-logo-b18cdedd47a5382fc3109b80e235cb39.png", "b18cdedd47a5382fc3109b80e235cb39"],
        ["/vi-assets/static-assets/dealbook-logo-reduced-7ef9bf245f53a22de79f41f72f75ab1b.png", "7ef9bf245f53a22de79f41f72f75ab1b"],
        ["/vi-assets/static-assets/episodefooter-38bc43717ecea5733e3b.js", "d27a7b3f7316bd1d0831a6ccbfd4aee0"],
        ["/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico", "4bf96cb6a1093748bf5b3c429accb9b4"],
        ["/vi-assets/static-assets/favicon-dark-81bb87c2422e6b661822b4c85eba8a5c.ico", "81bb87c2422e6b661822b4c85eba8a5c"],
        ["/vi-assets/static-assets/getstarted-02fa819ed345ebefeb3f.js", "1093946058e57d09a77322a7acb33be4"],
        ["/vi-assets/static-assets/home-2817a1b4ed3cf753a293.js", "964d27ce10c8f828a3596a32916fae33"],
        ["/vi-assets/static-assets/horizontal-slide-20578c05882c02e99627e3615f29252c.gif", "20578c05882c02e99627e3615f29252c"],
        ["/vi-assets/static-assets/hubpage-7ec581909d2782c2f49d.js", "dd170f074246773583da1c22ef24e4c1"],
        ["/vi-assets/static-assets/icon-activity-indicator-bf41bb61dd4938a2dbab9838c44b9082.gif", "bf41bb61dd4938a2dbab9838c44b9082"],
        ["/vi-assets/static-assets/icon-apple-store_272x80-9d5b7bc6c5146cc54be29bb80df5cfb8.png", "9d5b7bc6c5146cc54be29bb80df5cfb8"],
        ["/vi-assets/static-assets/icon-best-sellers-down-arrow-2b222f82fa1d4559c1e21c6e9d6c9b55.svg", "2b222f82fa1d4559c1e21c6e9d6c9b55"],
        ["/vi-assets/static-assets/icon-best-sellers-up-arrow-7b95c9f2a4edfea6249f19a7ae72ef7e.svg", "7b95c9f2a4edfea6249f19a7ae72ef7e"],
        ["/vi-assets/static-assets/icon-bookmark-empty-17x24-333333-a0db1f788779c64a20e714bca469f640.svg", "a0db1f788779c64a20e714bca469f640"],
        ["/vi-assets/static-assets/icon-down-caret-12x6-979797-fb660a90bed32f7b85a02ee778b55237.svg", "fb660a90bed32f7b85a02ee778b55237"],
        ["/vi-assets/static-assets/icon-facebook-20x20-fullcolor-7312c440fd2b6f323c675d8a08c023e2.svg", "7312c440fd2b6f323c675d8a08c023e2"],
        ["/vi-assets/static-assets/icon-fb-circle-2ec7780140bd9e8e8398bbcdf5661569.svg", "2ec7780140bd9e8e8398bbcdf5661569"],
        ["/vi-assets/static-assets/icon-google-play_272x80-7559563fa091efe889fc4da27a2fa93c.png", "7559563fa091efe889fc4da27a2fa93c"],
        ["/vi-assets/static-assets/icon-instagram-20x20-fullcolor-abe25c82fa464cf69bcbcc35ec468f13.svg", "abe25c82fa464cf69bcbcc35ec468f13"],
        ["/vi-assets/static-assets/icon-media-interactive-16x16-ffffff-c150f947780f5b889d93c4ccb3506348.svg", "c150f947780f5b889d93c4ccb3506348"],
        ["/vi-assets/static-assets/icon-media-slideshow-16x14-ffffff-b2960052d7a8445787266f4d9ca19b3f.svg", "b2960052d7a8445787266f4d9ca19b3f"],
        ["/vi-assets/static-assets/icon-pinterest-20x20-fullcolor-af12a982092af3ed37438369a1779334.svg", "af12a982092af3ed37438369a1779334"],
        ["/vi-assets/static-assets/icon-refresh-50x50-df0a7e8c63e0be0930638e1835acd295.svg", "df0a7e8c63e0be0930638e1835acd295"],
        ["/vi-assets/static-assets/icon-share-email-circle-a2acce7e23b21d47bb606b628a6c7e34.svg", "a2acce7e23b21d47bb606b628a6c7e34"],
        ["/vi-assets/static-assets/icon-share-linkedin-circle-4d7bcf236c5f3a086738746f41f46f7b.svg", "4d7bcf236c5f3a086738746f41f46f7b"],
        ["/vi-assets/static-assets/icon-share-permalink-circle-3ff3876a106221ee493d9542c0895863.svg", "3ff3876a106221ee493d9542c0895863"],
        ["/vi-assets/static-assets/icon-share-reddit-f882338200fd1971b767627fa5f60124.svg", "f882338200fd1971b767627fa5f60124"],
        ["/vi-assets/static-assets/icon-slideshow-ac86b791ea902ff8743e8e9abf096bbb.svg", "ac86b791ea902ff8743e8e9abf096bbb"],
        ["/vi-assets/static-assets/icon-t-logo-16x16-333333-b4a149d323fc80fdbecfa988cc290882.svg", "b4a149d323fc80fdbecfa988cc290882"],
        ["/vi-assets/static-assets/icon-t-logo-16x16-white-ad841ea17addc275d2a0d56571eefb0c.svg", "ad841ea17addc275d2a0d56571eefb0c"],
        ["/vi-assets/static-assets/icon-twitter-20x20-fullcolor-50610484bc91e46269d75fced922b77a.svg", "50610484bc91e46269d75fced922b77a"],
        ["/vi-assets/static-assets/icon-twitter-circle-fc7c2748f5613c68963a0df203bffc05.svg", "fc7c2748f5613c68963a0df203bffc05"],
        ["/vi-assets/static-assets/icon-whatsapp-video-a9503bf2b3c73111106c496d3ebc8c67.svg", "a9503bf2b3c73111106c496d3ebc8c67"],
        ["/vi-assets/static-assets/insider-logo-240x72-3d28a493439c418820942eb2e2a3be08.png", "3d28a493439c418820942eb2e2a3be08"],
        ["/vi-assets/static-assets/insider-logo-240x72-d3d957be605d6cc1665f86413d8f2f6e.svg", "d3d957be605d6cc1665f86413d8f2f6e"],
        ["/vi-assets/static-assets/interactive-ea0d8a369bd4bc6caa9f.js", "137a33ec3d7d44ff8336551cd1efeca8"],
        ["/vi-assets/static-assets/ios-default-homescreen-57x57-7cccbfb151c7db793e92ea58c30b9e72.png", "7cccbfb151c7db793e92ea58c30b9e72"],
        ["/vi-assets/static-assets/ios-default-homescreen-57x57-dark-e9217fd8efadfc24dc8d474ce214978f.png", "e9217fd8efadfc24dc8d474ce214978f"],
        ["/vi-assets/static-assets/ios-ipad-144x144-319373aaf4524d94d38aa599c56b8655.png", "319373aaf4524d94d38aa599c56b8655"],
        ["/vi-assets/static-assets/ios-ipad-144x144-dark-9ce0fa9e96c9e148837853eb279b61cd.png", "9ce0fa9e96c9e148837853eb279b61cd"],
        ["/vi-assets/static-assets/ios-iphone-114x144-61d373c43aa8365d3940c5f1135f4597.png", "61d373c43aa8365d3940c5f1135f4597"],
        ["/vi-assets/static-assets/ios-iphone-114x144-dark-25880f294e45e7361bce91ecb5e2d57d.png", "25880f294e45e7361bce91ecb5e2d57d"],
        ["/vi-assets/static-assets/main-c2910e327e1e6186c633.js", "f0eb97419a080d1f1364e6aae7cb274f"],
        ["/vi-assets/static-assets/mothersday-ff3ac252e8c9dc0a5c2fb3de6e88d4cb.png", "ff3ac252e8c9dc0a5c2fb3de6e88d4cb"],
        ["/vi-assets/static-assets/newsletter-eb254134dfa89e58b093.js", "7123a79d425cb13a3b20201d995096cf"],
        ["/vi-assets/static-assets/newsletter-story-chunk-93994538347da03572c4.js", "b340f4a2402c66f05d0b1b7496e3e371"],
        ["/vi-assets/static-assets/newsletters-53c9c1ee16d49b7a741e.js", "057cc949388034b74d21b9e78ccbdd0a"],
        ["/vi-assets/static-assets/newsletter~regilite-5f4186ea72ce7f1a3382.js", "8635e9cc619774db46fe31932e1ea671"],
        ["/vi-assets/static-assets/nytimes-zh-hans-34e453d5d098ebb8b94f45c9435de8ca.svg", "34e453d5d098ebb8b94f45c9435de8ca"],
        ["/vi-assets/static-assets/nytimes-zh-hant-9490f8f40c9df812c34008edaaad74b3.svg", "9490f8f40c9df812c34008edaaad74b3"],
        ["/vi-assets/static-assets/paidpost-e7f4ce5910c9a0e5bca1.js", "5df742a426a940e89a40766c411c7d8e"],
        ["/vi-assets/static-assets/privacy-5bc554fd8ef89900e783.js", "903e327794304252c1e058b97d8fc855"],
        ["/vi-assets/static-assets/programmables-2851090620e4cebee970.js", "9b41033503f5c4a8f510c84117f7e970"],
        ["/vi-assets/static-assets/recirculation-14bdc27166a1a0aaf0d3.js", "46cf96a069d562f947797f5f341e327a"],
        ["/vi-assets/static-assets/refer-b8ca641f13fc957359c6.js", "00786f92915f15f019dd8262c78aff8b"],
        ["/vi-assets/static-assets/regilite-2e7331474d59ac3873f7.js", "8d76032acf0f6a3d4fe48df70e71427c"],
        ["/vi-assets/static-assets/related-coverage-chunk-e77ceebb5145b781630e.js", "cc2333621e96a1fcc5d79dc2c25edc0d"],
        ["/vi-assets/static-assets/reviews-849deffa0bb595ae8bb7.js", "3cf3839a069cf43b7976c3e2b2d73159"],
        ["/vi-assets/static-assets/rio-logo-285x75-9194e3fa6e14142b1a85bee268598899.svg", "9194e3fa6e14142b1a85bee268598899"],
        ["/vi-assets/static-assets/runtime~adslot-22486f39710543ea12db.js", "ce30f24680da8408b3cf8ac360f6ef39"],
        ["/vi-assets/static-assets/runtime~interactive-2d1cf90baeb4baa04ecb.js", "5a7eef1c7ea41d77e2c56106593466ec"],
        ["/vi-assets/static-assets/runtime~main-822d5447df3c84f65173.js", "00617fb54b808a2641c0132f0c1fa91d"],
        ["/vi-assets/static-assets/search-4d8936ae7ecc38066060.js", "3101a51b72c7d7494256ff7f82ee3985"],
        ["/vi-assets/static-assets/slideshow-fb53cd0d7c1d74f478c9.js", "5ab4bad7ef2e5834f4ef8d21da6fcca0"],
        ["/vi-assets/static-assets/stickyfilljs-50269d645f85b12f03e7.js", "f17adf5b9f4bde1dfcfa5ea1a330d88a"],
        ["/vi-assets/static-assets/story-65ec09d4856bd56d2904.js", "dbd270ecbbea99d2a2e4d08df16406c8"],
        ["/vi-assets/static-assets/t-magazine-t-logo-824x100-04bfbeda4cd197e54d1d3e23f7eba372.svg", "04bfbeda4cd197e54d1d3e23f7eba372"],
        ["/vi-assets/static-assets/the-weekly-510x80-0bd5694830486557f301fc599c033e5e.svg", "0bd5694830486557f301fc599c033e5e"],
        ["/vi-assets/static-assets/timeswire-47203112c8e27bbe3346.js", "f0fdbc033b5061bb926b36600b411f80"],
        ["/vi-assets/static-assets/trending-91b32dadf9aa45be6a28.js", "f5eda6244c89a0260021c3f02dff0702"],
        ["/vi-assets/static-assets/upshot-logo-285x54-55b3e554ac6febafebfdb580abad142d.png", "55b3e554ac6febafebfdb580abad142d"],
        ["/vi-assets/static-assets/upshot-logo-285x54-638b5bac42d2a937bae2c393ba6ae44a.svg", "638b5bac42d2a937bae2c393ba6ae44a"],
        ["/vi-assets/static-assets/vendor-aa12a2c635b09a7cd1bf.js", "017d307dd3075697c42e93c0d758b9a2"],
        ["/vi-assets/static-assets/vendors~answerpage-73ab2c82ec782508eb15.js", "1bb3e0aba777e863adbdcc06ac0751f1"],
        ["/vi-assets/static-assets/vendors~app-download-unit-e2aab932c58e6f11e930.js", "2d603ba42d5e5c54f119083e900053ea"],
        ["/vi-assets/static-assets/vendors~audioblock-609ac7f3b5c2da65128d.js", "89b4064f2b5d6064ca87ecef2e29357e"],
        ["/vi-assets/static-assets/vendors~audio~capsule~home~paidpost~story-8abef87171cf46fe2401.js", "31332ecf98395c53795f128d3bf4be5f"],
        ["/vi-assets/static-assets/vendors~audio~capsule~home~paidpost~story~trending~video-b588873d601199d90204.js", "07413d6c049f018b27dd8215ba2fea2d"],
        ["/vi-assets/static-assets/vendors~audio~capsule~paidpost~story-440de3841e59aec91338.js", "dbc92927aec852cff9b1aa83519003eb"],
        ["/vi-assets/static-assets/vendors~collections-b4e7a9ecb344bcbe8a7f.js", "33f393d49596e1e8e2664e83a22c98db"],
        ["/vi-assets/static-assets/vendors~episodefooter-09506a963c933af037af.js", "9d1e5a538b818ab4d383c8805f237208"],
        ["/vi-assets/static-assets/vendors~home-38ed02a5b0bf945efbf7.js", "e3b704d18e91aae6ebbeff01516c4836"],
        ["/vi-assets/static-assets/vendors~slideshow-9fbcdb8ee631a0a45b1b.js", "44cca7eb42096c4c7dcf3fd3cc2e417f"],
        ["/vi-assets/static-assets/vendors~video-225f6e01d38d883fe421.js", "d133f045fb8b81c4d634af02743744f3"],
        ["/vi-assets/static-assets/vendors~video~videoblock-1a7da100bad8e243a408.js", "57e5f1b8e039f4f5105862ef72ab03cb"],
        ["/vi-assets/static-assets/video-7223a56264121d9ef5a6.js", "ddaa6446003f95a4f72b4fda2185c4a9"],
        ["/vi-assets/static-assets/videoblock-8b512f66af9670ef5da2.js", "50d693987747882bf47ed9df41b00cfe"],
        ["/vi-assets/static-assets/weddings-2488efc58736282e198b.js", "2dd4d693b3877b359e700b983c1cd4a8"],
        ["/vi-assets/static-assets/world-cup-2018-252x37-1f8b55d4281443f2396f03cf25691582.png", "1f8b55d4281443f2396f03cf25691582"],
        ["/vi-assets/static-assets/world-cup-2018-252x37-b4c281dbe11156984cd52cfd45e00d58.svg", "b4c281dbe11156984cd52cfd45e00d58"],
        ["/vi-assets/static-assets/world-cup-2018-382x56-95d6da6870d1507cce4667b1141d7651.png", "95d6da6870d1507cce4667b1141d7651"],
        ["/vi-assets/static-assets/world-cup-2018-382x56-ea6b6f69bdc4e3ea9419d7365c17b5d5.svg", "ea6b6f69bdc4e3ea9419d7365c17b5d5"],
        ["/vi-assets/static-assets/your-list-4d2336ad2bd72a38e619.js", "052fa08fc6535fc3a30070feefe0713a"]
    ],
    cacheName = "sw-precache-v3-vi-cache-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function(s, e) {
        var a = new URL(s);
        return "/" === a.pathname.slice(-1) && (a.pathname += e), a.toString()
    },
    cleanResponse = function(s) {
        return s.redirected ? ("body" in s ? Promise.resolve(s.body) : s.blob()).then(function(e) {
            return new Response(e, {
                headers: s.headers,
                status: s.status,
                statusText: s.statusText
            })
        }) : Promise.resolve(s)
    },
    createCacheKey = function(s, e, a, t) {
        var c = new URL(s);
        return t && c.pathname.match(t) || (c.search += (c.search ? "&" : "") + encodeURIComponent(e) + "=" + encodeURIComponent(a)), c.toString()
    },
    isPathWhitelisted = function(s, e) {
        if (0 === s.length) return !0;
        var a = new URL(e).pathname;
        return s.some(function(s) {
            return a.match(s)
        })
    },
    stripIgnoredUrlParameters = function(s, e) {
        var a = new URL(s);
        return a.hash = "", a.search = a.search.slice(1).split("&").map(function(s) {
            return s.split("=")
        }).filter(function(s) {
            return e.every(function(e) {
                return !e.test(s[0])
            })
        }).map(function(s) {
            return s.join("=")
        }).join("&"), a.toString()
    },
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function(s) {
        var e = s[0],
            a = s[1],
            t = new URL(e, self.location),
            c = createCacheKey(t, hashParamName, a, /-\w{32}\./);
        return [t.toString(), c]
    }));

function setOfCachedUrls(s) {
    return s.keys().then(function(s) {
        return s.map(function(s) {
            return s.url
        })
    }).then(function(s) {
        return new Set(s)
    })
}
self.addEventListener("install", function(s) {
    s.waitUntil(caches.open(cacheName).then(function(s) {
        return setOfCachedUrls(s).then(function(e) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a) {
                if (!e.has(a)) {
                    var t = new Request(a, {
                        credentials: "same-origin"
                    });
                    return fetch(t).then(function(e) {
                        if (!e.ok) throw new Error("Request for " + a + " returned a response with status " + e.status);
                        return cleanResponse(e).then(function(e) {
                            return s.put(a, e)
                        })
                    })
                }
            }))
        })
    }).then(function() {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function(s) {
    var e = new Set(urlsToCacheKeys.values());
    s.waitUntil(caches.open(cacheName).then(function(s) {
        return s.keys().then(function(a) {
            return Promise.all(a.map(function(a) {
                if (!e.has(a.url)) return s.delete(a)
            }))
        })
    }).then(function() {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function(s) {
    if ("GET" === s.request.method) {
        var e, a = stripIgnoredUrlParameters(s.request.url, ignoreUrlParametersMatching);
        (e = urlsToCacheKeys.has(a)) || (a = addDirectoryIndex(a, "index.html"), e = urlsToCacheKeys.has(a));
        0, e && s.respondWith(caches.open(cacheName).then(function(s) {
            return s.match(urlsToCacheKeys.get(a)).then(function(s) {
                if (s) return s;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function(e) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', s.request.url, e), fetch(s.request)
        }))
    }
});