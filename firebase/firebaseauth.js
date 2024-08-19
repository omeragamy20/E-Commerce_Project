 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAY3xbSR0BCsMcYP0zPpGgdLPr2hTOviX4",
    authDomain: "uber-4effc.firebaseapp.com",
    projectId: "uber-4effc",
    storageBucket: "uber-4effc.appspot.com",
    messagingSenderId: "153432743818",
    appId: "1:153432743818:web:82c19f2fe8d4c2d044f273",
    measurementId: "G-DQTL5MKG20"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 