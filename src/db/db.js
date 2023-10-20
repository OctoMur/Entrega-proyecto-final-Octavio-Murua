import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVqYTDAmzXSKwk2pSF_3kMAlzcTmrU6Lo",
    authDomain: "component-2e6f5.firebaseapp.com",
    projectId: "component-2e6f5",
    storageBucket: "component-2e6f5.appspot.com",
    messagingSenderId: "971964691060",
    appId: "1:971964691060:web:620853b7b1e3aed0365721",
};

initializeApp(firebaseConfig);

export const db = getFirestore()

