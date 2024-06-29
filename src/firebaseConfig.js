import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiIZUXjcJg6lecvEk9HKCgrG17YCxrQ8w",
    authDomain: "quantumbot-366a2.firebaseapp.com",
    projectId: "quantumbot-366a2",
    storageBucket: "quantumbot-366a2.appspot.com",
    messagingSenderId: "671851161834",
    appId: "1:671851161834:web:4fe916740b1f4d2b914f93",
    measurementId: "G-0TJJGZHCZE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
