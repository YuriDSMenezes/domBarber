/* eslint-disable no-return-assign */
import firebase from 'firebase/compat/app';
import { environment } from '../environments/environment';

!firebase.apps.length
  ? firebase.initializeApp(environment.firebase)
  : firebase.app();
