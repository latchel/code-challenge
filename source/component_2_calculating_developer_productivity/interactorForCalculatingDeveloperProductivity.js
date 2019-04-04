const AWS = require("aws-sdk");

const firebase = require("firebase");

var developmentConfigurationForFirebase = {
  apiKey: "AIzaSyC073gs8IJ0xs_1b6MVGS01oVSI6C0OAFE",
  authDomain: "repository-and-issue-count.firebaseapp.com",
  databaseURL: "https://repository-and-issue-count.firebaseio.com",
  projectId: "repository-and-issue-count",
  storageBucket: "repository-and-issue-count.appspot.com",
  messagingSenderId: "676726679095"
};

let productionDatabaseReference;
if (firebase.apps.length == 0) {
  productionDatabaseReference = firebase.initializeApp(
    developmentConfigurationForFirebase
  );
}

module.exports.getTotalOpenIssuesForThisRepository = repositoryName => {
  return new Promise((resolve, reject) => {
    productionDatabaseReference
      .database()
      .ref(`/totalCounts/${repositoryName}`)
      .once("value")
      .then(data => {
        resolve(data.val());
      });
  });
};

module.exports.getCurrentOpenIssues = repositoryName => {
  return new Promise((resolve, reject) => {
    productionDatabaseReference
      .database()
      .ref(`/${repositoryName}`)
      .once("value")
      .then(data => {
        resolve(data.val());
      });
  });
};

module.exports.calculatePercentCompleted = (
  totalIssuesOpenedForThisRepositoryWhileComponent3Listens,
  currentOpenIssues
) => {
  return (
    ((totalIssuesOpenedForThisRepositoryWhileComponent3Listens -
      currentOpenIssues) /
      totalIssuesOpenedForThisRepositoryWhileComponent3Listens) *
    100
  );
};
