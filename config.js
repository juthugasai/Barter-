import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBlACCu951PdmTYwGEzWHT5aTRR9q1CHjk",
  authDomain: "barter-system-f76fc.firebaseapp.com",
  projectId: "barter-system-f76fc",
  storageBucket: "barter-system-f76fc.appspot.com",
  messagingSenderId: "562258635807",
  appId: "1:562258635807:web:b8e5e3ce00273e65eb792a"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
