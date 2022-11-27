import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { auth };
  export default db;