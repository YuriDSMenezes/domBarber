import { getClientByUserIdAndCompanyId } from 'cases/client/getClientByUserIdAndCompanyId';
import { useGlobal } from 'hooks/Global';
import { api } from 'services/api';
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
import axios from 'axios';
import { getCompanyFromLocalStorage } from '../cases/company/getCompanyFromLocalStorage';

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
      console.log(company);
      const client = Client({
        companyId: company.id,
        email: user?.email || undefined,
        image: user?.photoURL || undefined,
        name: user?.displayName || '',
        social: {
          block: false,
        },
        terms: [],
        cards: [],
        phones: [],
        addresses: [],
        id: '',
        projectId: 'dombarber',
        createdAt: new Date(),
      });

      const paramsGetAuth = new URLSearchParams([
        ['authId', user.uid],
        ['companyId', company.id],
      ]);

      console.log('passou do create params', paramsGetAuth.toString());
      const resp = await api.get('client/auth', {
        params: paramsGetAuth,
      });
      // .then((res: any) => {
      //   console.log('res', res);
      //   client = Client({ ...client, ...res });
      // })
      // .catch(async (_: any) => {
      //   console.log('chegou');
      //   const response = await api.post('client', {
      //     ...client,
      //     authType: 'google',
      //   });
      // });

      console.log('passou do api.get cli', resp);
      if (typeof window !== 'undefined') {
        localStorage.setItem('@domBarber:token', JSON.stringify(token));
        localStorage.setItem('@domBarber:user', JSON.stringify(user));
        // localStorage.setItem('@domBarber:client', JSON.stringify(client));
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
