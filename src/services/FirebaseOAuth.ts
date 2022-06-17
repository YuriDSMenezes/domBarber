import { useGlobal } from 'hooks/Global';
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
import { userLoginOnInternalApi } from 'cases/user/userLoginOnInternalApi';
import { Client } from 'models/client';
import { getCompanyFromLocalStorage } from '../cases/company/getCompanyFromLocalStorage';
import api from './api';

export const fireAuth = firebase.auth();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

export const signInWithGoogle = async () =>
  signInWithPopup(auth, googleProvider)
    .then(async result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      const company = getCompanyFromLocalStorage();

      const paramsGetAuth = new URLSearchParams([
        ['authId', user.uid],
        ['companyId', company.id],
      ]);

      let client = Client({
        companyId: company.id,
        email: user?.email || undefined,
        image: user?.photoURL || undefined,
        name: user?.displayName || '',
        social: {
          block: false,
        },
        genre: 'other',
        terms: [],
        cards: [],
        phones: [],
        addresses: [],
        id: '',
        projectId: 'dombarber',
        createdAt: new Date(),
      });

      await api
        .get('client/auth', {
          params: paramsGetAuth,
        })
        .then((res: any) => {
          client = Client({ ...client, ...res });
        })
        .catch(async (_: any) => {
          const response = await api.post('client', {
            ...client,
            authType: 'google',
            authId: user.uid,
          });
        });

      if (!client.deletedAt) {
        const responseLogin = await api.post('client/auth/login', {
          authType: 'google',
          authId: user.uid,
          companyId: company.id,
        });
        delete responseLogin.data.cards;
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            '@domBarber:token',
            JSON.stringify(responseLogin.data.token),
          );
          localStorage.setItem('@domBarber:user', JSON.stringify(user));
          localStorage.setItem(
            '@domBarber:client',
            JSON.stringify(responseLogin.data),
          );
        }
      }

      if (token) {
        cookie.set('user-cookie', token, {
          expires: 1,
        });
        Router.push('/app');
      }
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const { email } = error;
      const credential = GoogleAuthProvider.credentialFromError(error);
      cookie.remove('user-cookie');
      Router.push('/');
    });

export const signInWithFacebook = () =>
  signInWithPopup(auth, facebookProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
      }
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

// const service = (collection: string) => ({});

// export const myDB = {
//   user: service('users'),
//   pitch: service('pitches'),
//   match: service('matches'),
//   notification: service('notifications'),
// };
