import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBxv5_UCgCPsj3p8eG0Q5axdbm78y899_k",
    authDomain: "gluon-test-5eb58.firebaseapp.com",
    projectId: "gluon-test-5eb58",
    storageBucket: "gluon-test-5eb58.appspot.com",
    messagingSenderId: "977703206949",
    appId: "1:977703206949:web:21534d725da52448247fcc",
    measurementId: "G-4FD4P8DE84"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
