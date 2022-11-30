import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJQT5UlnSWwUXVj_3zFDPpfQz7oH-g-qs",
    authDomain: "disneyplus-clone-f667e.firebaseapp.com",
    projectId: "disneyplus-clone-f667e",
    storageBucket: "disneyplus-clone-f667e.appspot.com",
    messagingSenderId: "652948505395",
    appId: "1:652948505395:web:b4715a450e32830bac7446",
    measurementId: "G-1Q668DG6K4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
// collection ref
const colRef = collection(db, 'movies');

export { auth, provider, storage, colRef };

export default db;