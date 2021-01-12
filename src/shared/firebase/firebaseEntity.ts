import firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
// import 'firebase/storage';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const auth = firebase.auth();

export const googleAuth = new firebase.auth.GoogleAuthProvider();

export const storage = firebase.storage();

export const functions = firebase.functions();

export const authNamespace = firebase.auth;

export default firebase;