importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: 'AIzaSyA4Ipq20llNkJEnfgEYYsnbZvudVU-jO0c',
  authDomain: 'kbank-frontend.firebaseapp.com',
  projectId: 'kbank-frontend',
  storageBucket: 'kbank-frontend.appspot.com',
  messagingSenderId: '880064059458',
  appId: '1:880064059458:web:91a9f51ed525673e6235db',
  measurementId: 'G-KL6RDGQ3VD'
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 백그라운드 메시지 핸들러
messaging.onBackgroundMessage((payload) => {
  console.log('백그라운드 메시지 수신:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/images/bell.png' // 알림 아이콘 경로를 지정하세요
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
