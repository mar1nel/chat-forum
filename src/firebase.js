import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyDk1ddbCgSer4UgFkjeCXfPkDg4uUDDdIk",
    authDomain: "comment-section-8511f.firebaseapp.com",
    projectId: "comment-section-8511f",
    storageBucket: "comment-section-8511f.appspot.com",
    messagingSenderId: "214918805742",
    appId: "1:214918805742:web:9fd2204de93192541a1bff",
    measurementId: "G-V7JRE14FYB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();