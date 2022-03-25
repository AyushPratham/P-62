import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyACpJC9BIRuFn0nJdjDr-eiBqKiAeFZ9pA",
  authDomain: "p-60-1cce7.firebaseapp.com",
  databaseURL: "https://p-60-1cce7-default-rtdb.firebaseio.com",
  projectId: "p-60-1cce7",
  storageBucket: "p-60-1cce7.appspot.com",
  messagingSenderId: "892602267385",
  appId: "1:892602267385:web:71ea242c9f79873efe1428"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database()
 

  