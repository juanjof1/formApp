// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNB9BMd2GM-6qhYj-iwTNZgY48f5hMyaM",
  authDomain: "formapp-4bbb2.firebaseapp.com",
  projectId: "formapp-4bbb2",
  storageBucket: "formapp-4bbb2.appspot.com",
  messagingSenderId: "410726088932",
  appId: "1:410726088932:web:c5f6e7cc517585be566cf1",
  measurementId: "G-FV1MK9KV8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);