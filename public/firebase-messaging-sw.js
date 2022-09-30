// https://firebase.google.com/docs/cloud-messaging/js/receive?authuser=0
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyAHjMEH86-J6tjkwAX-iTPkbnT-BdwqQqQ',
    authDomain: 'monstock.firebaseapp.com',
    databaseURL: 'https://monstock.firebaseio.com',
    projectId: 'monstock',
    storageBucket: 'monstock.appspot.com',
    messagingSenderId: '888468291387',
    appId: '1:888468291387:web:f65e89cb442efebb2f811e',
    measurementId: 'G-ZJHW8CVNXV'
});

// foreground 에 있을때 notification 을 띄워주기 위해서도 service-worker 를 통해야한다.(기존 Notification 이 deprecated)
// https://stackoverflow.com/questions/40411059/create-firebase-notification-with-page-in-foreground-focus
function showMessage(payload) {
    const { title, body, clickAction, messageDeliveryReceipt, messageId } = payload.data;
    const options = {
        body: body,
        icon: 'https://monstock.app/icons/icon-512x512.png',
        data: {
            click_action: clickAction
        }
    };

    return self.registration.showNotification(title, options);
};

// 브라우저 지원 뱃지 세팅하기
// Wrapper to support first and second origin trial
// See https://web.dev/badging-api/ for details.
function setBadge(...args) {
    if (navigator.setAppBadge) {
        navigator.setAppBadge(...args);
    } else if (navigator.setExperimentalAppBadge) {
        navigator.setExperimentalAppBadge(...args);
    } else if (window.ExperimentalBadge) {
        window.ExperimentalBadge.set(...args);
    }
}

// 브라우저 지원 뱃지 클리어하기
// Wrapper to support first and second origin trial
// See https://web.dev/badging-api/ for details.
function clearBadge() {
    if (navigator.clearAppBadge) {
        navigator.clearAppBadge();
    } else if (navigator.clearExperimentalAppBadge) {
        navigator.clearExperimentalAppBadge();
    } else if (window.ExperimentalBadge) {
        window.ExperimentalBadge.clear();
    }
}

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    showMessage(payload);
});

self.addEventListener('message', function(evt) {
    console.log('self', self);
    showMessage(evt.data);
});

/* self.addEventListener('push', function(event) {
    // https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web#what-are-the-limitations-of-push-messaging-in-chrome-42
    console.log('addEventListener push', event, event.data);
    event.waitUntil(
        function() {
            var title = '푸시가 도착했다요';
            var message = '일단 디폴트로 이걸 내용으로 보여줄 뿐이다요';
            var icon = '';
            var notificationTag = 'notification-error';
            return self.registration.showNotification(title, {
                body: message,
                icon: icon,
                tag: notificationTag
            });
        }()
    );
});  */

self.addEventListener('notificationclick', function(event) {
    // https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web#what-are-the-limitations-of-push-messaging-in-chrome-42
    console.log('On notification click: ', event, clients);
    // Android doesn't close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
            .then(function(clientList) {
                for (var i = 0; i < clientList.length; i++) {
                    var client = clientList[i];
                    if (client.url == '/' && 'focus' in client) { return client.focus(); }
                }
                if (clients.openWindow) {
                    if (event.notification.data && event.notification.data.click_action) {
                        // return clients.openWindow(`${self.location.origin}${clients.notification.clickAction}`);
                        return clients.openWindow(event.notification.data.click_action);
                    } else {
                        return clients.openWindow('/');
                    }
                }
            })
    );
});
