import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA_WvOSG8kEl9LinPuHDYcZ-8bSMoE4mUw",
    authDomain: "firestorelearn-7be09.firebaseapp.com",
    databaseURL: "https://firestorelearn-7be09.firebaseio.com",
    projectId: "firestorelearn-7be09",
    storageBucket: "firestorelearn-7be09.appspot.com",
    messagingSenderId: "310244159130",
    appId: "1:310244159130:web:91d5294148479139b0b923",
    measurementId: "G-W4W668TZPM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase