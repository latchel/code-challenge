const productionReference = require("./productionDatabaseReference");

module.exports.checkIfCurrentIssueCountIsGreaterThanPreviously = (
  previousIssueCount,
  currentIssueCount
) => {
  return parseInt(previousIssueCount) < parseInt(currentIssueCount);
};

module.exports.getPreviousTotalAndUpdateIfNewIssue = (
  previousIssueCount,
  currentRepositoryIssueCount,
  repositoryName
) => {
  return new Promise((resolveFirstPromise, reject) => {
    productionReference
      .database()
      .ref(`/totalCounts/${repositoryName}`)
      .once("value")
      .then(async data => {
        let previousTotal = data.val();

        let newTotal =
          previousTotal +
          (parseInt(currentRepositoryIssueCount) - previousIssueCount);

        await updateTotalCountOfIssuesForTheRepository(
          resolveFirstPromise,
          repositoryName,
          newTotal
        );
      });
  });
};

const updateTotalCountOfIssuesForTheRepository = (
  resolveFirstPromise,
  repositoryName,
  newTotal
) => {
  return new Promise((resolveSecondPromise, reject) => {
    productionReference
      .database()
      .ref(`/totalCounts/`)
      .update({ [repositoryName]: newTotal })
      .then(() => {
        resolveSecondPromise();
        resolveFirstPromise();
      })
      .catch(() => {
        reject();
      });
  });
};

module.exports.updateRepositoryIssueCountToCurrent = (
  repositoryName,
  currentRepositoryIssueCount
) => {
  return new Promise(resolve => {
    productionReference
      .database()
      .ref("/")
      .update({
        [repositoryName]: currentRepositoryIssueCount
      })
      .then(() => {
        resolve();
      });
  });
};
