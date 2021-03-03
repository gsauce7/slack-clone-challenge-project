import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAIu5rqENXsQE8rz42PWP4TR2Shd-Raek4',
  authDomain: 'slack-clone-challenge-99945.firebaseapp.com',
  projectId: 'slack-clone-challenge-99945',
  storageBucket: 'slack-clone-challenge-99945.appspot.com',
  messagingSenderId: '320221201800',
  appId: '1:320221201800:web:18548d448bb19c58fce63d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
