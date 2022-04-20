/* eslint-disable no-return-assign */
import firebase from 'firebase/compat/app';
import cookie from 'js-cookie';
import Router from 'next/router';
import 'firebase/compat/auth';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import 'firebase/compat/firestore';

export const fireAuth = firebase.auth();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
      if (token) {
        cookie.set('user-cookie', token, {
          expires: 1,
        });
        Router.push('/home');
      }
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const { email } = error;
      const credential = GoogleAuthProvider.credentialFromError(error);
      cookie.remove('teste');
      Router.push('/');
    });

export const signInWithFacebook = () =>
  signInWithPopup(auth, facebookProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const { email } = error;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

export const singIn = (email: string, password: string, call: () => void) => {
  fireAuth
    .signInWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(() => {
      call();
    });
};

export const createUser = (
  email: string,
  password: string,
  call2: () => void,
) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(call2);
};

export const singOut = async () => {
  Router.push('/');
  await firebase.auth().signOut();
};

const service = (collection: string) => ({});

export const myDB = {
  user: service('users'),
  pitch: service('pitches'),
  match: service('matches'),
  notification: service('notifications'),
};
