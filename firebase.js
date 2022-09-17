import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBiaEWzkRays3yvA2nGxbhyGJQvGWIF5Lc",
    authDomain: "audio-eb388.firebaseapp.com",
    projectId: "audio-eb388",
    storageBucket: "audio-eb388.appspot.com",
    messagingSenderId: "976748006006",
    appId: "1:976748006006:web:bad079555a1279cc00ad57",
    measurementId: "G-XVMMZQDH8S"
  };

  if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
  }

  export {firebase};
