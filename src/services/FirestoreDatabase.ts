/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import 'firebase/firestore';
import firebase from 'firebase/app';

interface getSyncProps {
  status: number;
  data: {};
}

const FirestoreDBService = (model: any, collection: string) => ({
  add: async ({ doc }) => {
    const response = await firebase
      .firestore()
      .collection(collection)
      .add(model(doc));
    return {
      status: 200,
      data: {
        id: response.id,
      },
    };
  },
  set: async ({ id, doc }) => {
    await firebase.firestore().collection(collection).doc(id).set(model(doc));
    return {
      status: 200,
    };
  },
  update: async ({ id, doc }) => {
    await firebase.firestore().collection(collection).doc(id).update(doc);
    return {
      status: 200,
    };
  },
  delete: async ({ id }) => {
    await firebase.firestore().collection(collection).doc(id).delete();
    return {
      status: 204,
    };
  },
  get: async ({ id }) => {
    const response = await firebase
      .firestore()
      .collection(collection)
      .doc(id)
      .get();
    return {
      status: 200,
      data: {
        doc: model(response.data()),
      },
    };
  },
  getWhere: async ({ wheres = [] }) => {
    let ref = firebase.firestore().collection(collection);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    wheres.length && wheres.forEach(where => (ref = ref.where(...where)));
    const response = await ref.get();
    const docs = {};
    response.forEach(doc => (docs[doc.id] = model(doc.data())));
    return {
      status: 200,
      data: {
        docs,
      },
    };
  },

  getSync: ({ id, callback = ({ status, data }: getSyncProps) => {} }) => {
    firebase
      .firestore()
      .collection(collection)
      .doc(id)
      .onSnapshot(res =>
        callback({
          status: 200,
          data: {
            doc: model(model(res.data())),
          },
        }),
      );
  },
  getSyncWhere: ({
    wheres = [],
    callback = ({ status, data }: getSyncProps) => {},
  }) => {
    let ref = firebase.firestore().collection(collection);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    wheres.length && wheres.forEach(where => (ref = ref.where(...where)));
    ref.onSnapshot(res => {
      const obj = {};
      res.forEach(doc => (obj[doc.id] = model(doc.data())));
      callback({
        status: 200,
        data: {
          docs: obj,
        },
      });
    });
  },
});
export const firestoreDb = {
  // user: FirestoreDBService(modelUser, 'users'),
  // pitch: FirestoreDBService(modelPitch, 'pitches'),
  // match: FirestoreDBService(modelMatch, 'matches'),
  // notification: FirestoreDBService(modelNotification, 'notifications'),
};
