/*
 * Autogenerated from ServiceWorkerPlugin
 */

const $VERSION = '4f50c2a7c1c06badc32e26fce38006c5';
const $DEBUG = false;
const $Cache = {
    "template": "/mnt/pinboard/webapp/webpack/plugins/lib/swTemplates/cacheWorkbox.js",
    "precacheChunks": [
        "entryChunk-www",
        "AuthHomePageDesktop",
        "CloseupPageDesktop",
        "ProfileDeciderContainerDesktop",
        "ProfilePageDesktop",
        "SearchPageDesktop",
        "vendor-react"
    ],
    "strategy": [{
        "type": "prefer-cache",
        "matches": [
            "webapp/js/.*\\.js",
            "webapp/js/.*\\.mjs",
            ".*\\.css"
        ]
    }],
    "precache": [
        "https://s.pinimg.com/webapp/js/runtime-4ee410fdfee03f6dfd85.js",
        "https://s.pinimg.com/webapp/js/pjs-vendors~entryChunk-amp-extension~entryChunk-amp-iframe~entryChunk-analytics~entryChunk-business~entr~a548fe00-23c9000854bdd80a2349.js",
        "https://s.pinimg.com/webapp/js/pjs-vendors~entryChunk-amp-extension~entryChunk-amp-iframe~entryChunk-analytics~entryChunk-business~entr~abfa29ff-57d7665bdd527abab51b.js",
        "https://s.pinimg.com/webapp/js/../style/entryChunk-www-083a24430677c60caff9.css",
        "https://s.pinimg.com/webapp/js/pjs-entryChunk-www-cf46ab2c14fb5f8b0ac8.js",
        "https://s.pinimg.com/webapp/js/pjs-1-2f6caaf3fef49374b809.js",
        "https://s.pinimg.com/webapp/js/pjs-2-48e20b8f76ed2204025b.js",
        "https://s.pinimg.com/webapp/js/pjs-0-4a14ba749f3a688b2eda.js",
        "https://s.pinimg.com/webapp/js/pjs-ArticlePageDesktop~AuthHomePageDesktop~BusinessAccountConvertPageDesktop~BusinessAccountCreatePageDe~5b9675e6-444627607ab40bc0e742.js",
        "https://s.pinimg.com/webapp/js/../style/AuthHomePageDesktop-b5078c4cee73f56e9940.css",
        "https://s.pinimg.com/webapp/js/pjs-AuthHomePageDesktop-956f51b631a54ccbaa62.js",
        "https://s.pinimg.com/webapp/js/pjs-3-c16e7ca41b36be803be8.js",
        "https://s.pinimg.com/webapp/js/pjs-vendors~BoardActivityCommentPageDesktop~BoardActivityItemPageDesktop~BoardPageContainerDesktop~Board~dcb7775c-eb6bf5e22aa55c3bb2d0.js",
        "https://s.pinimg.com/webapp/js/../style/CloseupPageDesktop-18f3ef93103d95d00ff2.css",
        "https://s.pinimg.com/webapp/js/pjs-CloseupPageDesktop-ddd67f5bc948da25f93e.js",
        "https://s.pinimg.com/webapp/js/../style/ProfileDeciderContainerDesktop-801670e30615d46ce446.css",
        "https://s.pinimg.com/webapp/js/pjs-ProfileDeciderContainerDesktop-a6381bb77e37476a9c33.js",
        "https://s.pinimg.com/webapp/js/pjs-vendors~CreativeEditorPageDesktop~ExperiencesAfterHomefeed~ExperiencesBeforeHomefeed~InterestFeedPag~a6486f75-a2b2c98d28f38004fc4e.js",
        "https://s.pinimg.com/webapp/js/../style/ProfilePageDesktop-299463e93487d1c8a1b3.css",
        "https://s.pinimg.com/webapp/js/pjs-ProfilePageDesktop-c4d3b49ae4fe8d1ba398.js",
        "https://s.pinimg.com/webapp/js/../style/SearchPageDesktop-829dcd9440f6dab4db15.css",
        "https://s.pinimg.com/webapp/js/pjs-SearchPageDesktop-082dd44f85e75d955ec0.js",
        "https://s.pinimg.com/webapp/js/pjs-vendors~vendor-react-1e8a89155be0558b0a7d.js",
        "https://s.pinimg.com/webapp/js/pjs-vendor-react-04caeab4265f7bb7abd1.js"
    ]
};
const $Notifications = {
    "fallbackURL": "_/_/push/web_push_content/",
    "default": {
        "title": "Fresh Pins!",
        "body": "You’ve got new Pins waiting for you on Pinterest.",
        "icon": "https://s.pinimg.com/images/favicon_red_192.png",
        "tag": "pinterest-push-notification-tag"
    },
    "duration": 300000,
    "template": "/mnt/pinboard/webapp/webpack/plugins/lib/swTemplates/notifications.js"
};
const $Log = {
    "notificationClicked": "_/_/push/web_push_click/"
};

// @flow
/* global $DEBUG, $Cache, self */
/* eslint no-use-before-define:0 */

// $FlowFixMe
if (!$Cache) {
    self.addEventListener('install', (event) => {
        event.waitUntil(self.skipWaiting());
    });
}

function print(fn) {
    return function(message, group) {
        // $FlowFixMe
        if ($DEBUG) {
            if (group && logger.groups[group]) {
                logger.groups[group].push({
                    fn,
                    message,
                });
            } else {
                console[fn].call(console, message);
            }
        }
    };
}

const logger = {
    groups: {},
    group: (group) => {
        logger.groups[group] = [];
    },
    groupEnd: (group) => {
        const groupLogs = logger.groups[group];
        if (groupLogs && groupLogs.length > 0) {
            console.groupCollapsed(group);
            groupLogs.forEach((log) => {
                console[log.fn].call(console, log.message);
            });
            console.groupEnd();
        }
        delete logger.groups[group];
    },
    log: print('log'),
    warn: print('warn'),
    error: print('error'),
};

// @flow
/* global $VERSION, $Cache, importScripts, WorkboxSW, self, caches, fetch */
importScripts('https://unpkg.com/workbox-sw@1.1.0/build/importScripts/workbox-sw.prod.v1.1.0.js');

const OFFLINE_URL = 'offline.html/';

// $FlowFixMe
const workbox = new WorkboxSW({
    handleFetch: true,
    skipWaiting: true,
    clientsClaim: true
});
// $FlowFixMe
$Cache.precache.unshift({
    url: OFFLINE_URL,
    // $FlowFixMe
    revision: $VERSION,
    // TODO(Yen): this isn't 100% accurate since $VERSION is based off the config in swConfigs, but it works for PROD since that takes into account the hashes for our bundles.
    // Ideally the revision for app_shell should also be based off a hash of mobile_auth_app_shell.html
    // (similar to dynamicUrlToDependencies for sw-precache or templatedUrls for workbox)
});
workbox.precache($Cache.precache);

// // Runtime cache all js/css
workbox.router.registerRoute(/webapp\/js\/.*\.js/, workbox.strategies.cacheFirst());
workbox.router.registerRoute(/.*\.css/, workbox.strategies.cacheFirst());

// TODO: add workbox.router.registerNavigationRoute('/sw-shell.html') when we have an app-shell
// registerNavigationRoute uses a cache-first strategy and we don't actually have an app-shell
// for dweb at the moment so we'll manually read from the cache when the fetch fails.
self.addEventListener('fetch', (event) => {
    if (
        event.request.mode === 'navigate' ||
        (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))
    ) {
        event.respondWith(fetch(event.request).catch((error) => caches.match(OFFLINE_URL)));
    }
});

// @flow
/* global $Log, logger, self, fetch, clients, $Notifications */
/* eslint no-use-before-define:0 */

/*         -------- NOTIFICATIONS ---------         */

self.addEventListener('push', handleNotificationPush);
self.addEventListener('notificationclick', handleNotificationClick);

/*         -------- NOTIFICATIONS HANDLERS ---------         */

function handleNotificationPush(event) {
    // $FlowFixMe
    logger.log('Push notification received');
    logAction('', '_/_/push/web_push_log/push_notification_received/');

    // $FlowFixMe
    if ($Log.notificationReceived) {
        event.waitUntil(logNotificationReceived(event));
    }

    // Show notification or fallback
    if (event.data && event.data.title) {
        event.waitUntil(showNotification(event.data));
        // $FlowFixMe
    } else if ($Notifications.fallbackURL) {
        event.waitUntil(
            self.registration.pushManager
            .getSubscription()
            .then(fetchNotification)
            .then(convertResponseToJson)
            .then(showNotification)
            .catch(showNotification)
        );
    } else {
        logger.warn('No notification.data and no fallbackURL.');
        event.waitUntil(showNotification());
    }
}

function handleNotificationClick(event) {
    // $FlowFixMe
    logger.log('Push notification clicked.', event.notification.tag);
    logAction('', '_/_/push/web_push_log/push_notification_clicked/');

    // $FlowFixMe
    if ($Log.notificationClicked) {
        event.waitUntil(logNotificationClick(event));
    }

    // Open the url if provided
    if (event.notification.data && event.notification.data.url) {
        const {
            url
        } = event.notification.data;
        event.waitUntil(openWindow(url));
    } else if (event.notification.tag.indexOf(':') !== -1) {
        // TODO: Deprecate
        const url = event.notification.tag.split(':')[2] || '/';
        event.waitUntil(openWindow(url));
    } else {
        logger.warn('Cannot route click with no data.url property. Using "/".', event.notification.tag);
        event.waitUntil(openWindow('/'));
    }

    event.notification.close();
    logger.groupEnd(event.notification.tag);
}

/*         -------- NOTIFICATIONS HELPERS ---------         */

function showNotification(data) {
    if (!data || !data.tag) {
        // $FlowFixMe
        data = $Notifications.default;
    }
    // $FlowFixMe
    logger.group(data.tag);
    logger.log('Show notification.', data.tag);
    logAction('', '_/_/push/web_push_log/call_google_show_notification_api/');
    return self.registration.showNotification(data.title, data).then(delayDismissNotification);
}

function fetchNotification(subscription) {
    if (!subscription) {
        // $FlowFixMe
        logger.warn('No subscription found.');
        throw new Error('No subscription found.');
    }
    // $FlowFixMe
    logger.log('Fetching remote notification data.');
    logAction('', '_/_/push/web_push_log/fetch_remote_notification_data/');
    const queries = {
        endpoint: subscription.endpoint,
    };
    // $FlowFixMe
    const url = formatUrl($Notifications.fallbackURL, queries);
    return fetch(url, {
        credentials: 'include'
    });
}

function convertResponseToJson(response) {
    if (response.status !== 200) {
        throw new Error('Notification data fetch failed.');
    }
    logAction('', '_/_/push/web_push_log/convert_response_to_json/');
    return response.json();
}

function delayDismissNotification() {
    logAction('', '_/_/push/web_push_log/call_show_notification_success/');
    setTimeout(() => {
        self.registration.getNotifications().then((notifications) => {
            notifications.forEach((notification) => {
                notification.close();
                // $FlowFixMe
                logger.log('Dismissing notification.', notification.tag);
                logger.groupEnd(notification.tag);
            });
        });
        // $FlowFixMe
    }, $Notifications.duration || 5000);
}

function openWindow(url) {
    if (clients.openWindow) {
        return clients.openWindow(url);
    }
    return Promise.resolve();
}

function logNotificationReceived(event) {
    // $FlowFixMe
    return logAction(event, $Log.notificationReceived);
}

function logNotificationClick(event) {
    // $FlowFixMe
    return logAction(event.notification, $Log.notificationClicked);
}

function logAction(notification, url) {
    // $FlowFixMe
    logger.log(`Send log event to ${url}.`, notification.tag);
    return self.registration.pushManager.getSubscription().then((subscription) => {
        const query = {
            endpoint: subscription.endpoint,
            // $FlowFixMe
            tag: notification.tag,
        };
        return fetch(formatUrl(url, query), {
            credentials: 'include'
        });
    });
}

function formatUrl(url, queries) {
    const prefix = url.includes('?') ? '&' : '?';
    const query = Object.keys(queries)
        // $FlowFixMe
        .map((key) => `${key}=${queries[key]}`)
        .join('&');
    return url + prefix + query;
}