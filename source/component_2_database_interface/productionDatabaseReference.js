const firebase = require("firebase");

// Would normally store these as environment variables.
const productionConfigurationForFirebase = {
  apiKey: "AIzaSyC073gs8IJ0xs_1b6MVGS01oVSI6C0OAFE",
  authDomain: "repository-and-issue-count.firebaseapp.com",
  databaseURL: "https://repository-and-issue-count.firebaseio.com",
  projectId: "repository-and-issue-count",
  storageBucket: "repository-and-issue-count.appspot.com",
  messagingSenderId: "676726679095"
};

let productionReference;

if (firebase.apps.length == 0) {
  productionReference = firebase.initializeApp(
    productionConfigurationForFirebase
  );
}

module.exports = productionReference;
