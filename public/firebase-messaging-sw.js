importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: 'AIzaSyAmE7eesdl5WLVKN-xoQD5JUcH4Vf1ex4s',
  authDomain: 'kbank-backend.firebaseapp.com',
  projectId: 'kbank-backend',
  storageBucket: 'kbank-backend.appspot.com',
  messagingSenderId: '505325744639',
  appId: '1:505325744639:web:04843f09853629d93437ca',
  measurementId: 'G-P4BPZ9LN1Y'
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('백그라운드 메시지 수신:', payload);

  if (payload.data && payload.data.foreground === 'false') {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/images/bell.png' // 실제 아이콘 경로로 변경하세요
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});
