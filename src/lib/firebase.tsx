import firebase from 'firebase/compat/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDsyx0zcNEuZAgfonrKRLHKM9VuvEQVgC8',
    authDomain: 'doms-dev.firebaseapp.com',
    databaseURL: 'https://doms-dev-default-rtdb.firebaseio.com',
    projectId: 'doms-dev',
    storageBucket: 'doms-dev.appspot.com',
    messagingSenderId: '311634413072',
    appId: '1:311634413072:web:b424abab60c4074645ac95',
  });
}

export default firebase;
