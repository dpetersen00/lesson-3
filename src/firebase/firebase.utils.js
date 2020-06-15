import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA8rW5wTj8jREc0dywPSalS3eJokQdP51k',
  authDomain: 'crwn-db-2718d.firebaseapp.com',
  databaseURL: 'https://crwn-db-2718d.firebaseio.com',
  projectId: 'crwn-db-2718d',
  storageBucket: 'crwn-db-2718d.appspot.com',
  messagingSenderId: '85348111152',
  appId: '1:85348111152:web:45d30dbe64cf136189eef5',
  measurementId: 'G-8MSTCG5YGL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
