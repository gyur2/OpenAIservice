import firebase from 'firebase/compat/app'; // 최신 버전에서는 /compat/app을 사용합니다.
import 'firebase/compat/firestore'; // 

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_authDomain,
    projectId: process.env.FB_projectId,
    storageBucket: process.env.FB_storageBucket,
    messagingSenderId: process.env.FB_messagingSenderId,
    appId: process.env.FB_appId
};

// Firebase 초기화
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore(); // Firestore 인스턴스를 생성합니다.

export { firebase, db };