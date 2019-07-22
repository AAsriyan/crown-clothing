import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCUDFJpawhuUUIojqjfhrlZgNNXeWTECzU',
	authDomain: 'crown-db-9b4ab.firebaseapp.com',
	databaseURL: 'https://crown-db-9b4ab.firebaseio.com',
	projectId: 'crown-db-9b4ab',
	storageBucket: '',
	messagingSenderId: '505180710730',
	appId: '1:505180710730:web:e0628ae7b6ac183d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
