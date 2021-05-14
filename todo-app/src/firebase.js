//const firebaseConfig = {
    
  //};

  import firebase from 'firebase';

  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyB9mEFgyO05kB_9g1SU1rsyruHgP0TWQhI",
    authDomain: "todo-app-react-ae95b.firebaseapp.com",
    projectId: "todo-app-react-ae95b",
    storageBucket: "todo-app-react-ae95b.appspot.com",
    messagingSenderId: "590066429847",
    appId: "1:590066429847:web:b89836969bfe3e4558ded2",
    measurementId: "G-RG61QVRK14"
  })

  const db = firebaseApp.firestore();
  export default db;