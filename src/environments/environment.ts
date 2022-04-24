// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  projectId: 'dombarber',
  hostApi: 'https://doms-cloudrun-le6bnrchjq-rj.a.run.app',
  firebase: {
    apiKey: 'AIzaSyDsyx0zcNEuZAgfonrKRLHKM9VuvEQVgC8',
    authDomain: 'doms-dev.firebaseapp.com',
    databaseURL: 'https://doms-dev-default-rtdb.firebaseio.com',
    projectId: 'doms-dev',
    storageBucket: 'doms-dev.appspot.com',
    messagingSenderId: '311634413072',
    appId: '1:311634413072:web:b424abab60c4074645ac95',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.