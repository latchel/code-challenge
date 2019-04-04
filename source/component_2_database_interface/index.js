const productionReference = require("./productionDatabaseReference");

const {
  checkIfCurrentIssueCountIsGreaterThanPreviously,
  getPreviousTotalAndUpdateIfNewIssue,
  updateRepositoryIssueCountToCurrent
} = require("./interactorForDatabaseUpdate");

// Entry point for lambda function. Initiated by message from SNS, published by Component 3, which is run using the scheduler.
exports.handler = async (event, context, callback) => {
  let repositoryNameAndIssueCount = JSON.parse(event.Records[0].Sns.Message);

  for (let repositoryName in repositoryNameAndIssueCount) {
    const currentRepositoryIssueCount =
      repositoryNameAndIssueCount[repositoryName];

    await updateDatabaseWithNewCurrentAndTotalIssueCounts(
      repositoryName,
      currentRepositoryIssueCount
    );
  }
};

const updateDatabaseWithNewCurrentAndTotalIssueCounts = async (
  repositoryName,
  currentRepositoryIssueCount
) => {
  await productionReference
    .database()
    .ref(`/${repositoryName}`)
    .once("value")
    .then(async dataFromFirebase => {
      const previousIssueCount = dataFromFirebase.val();
      const currentIssueCount = currentRepositoryIssueCount;

      if (
        checkIfCurrentIssueCountIsGreaterThanPreviously(
          previousIssueCount,
          currentIssueCount
        )
      ) {
        await getPreviousTotalAndUpdateIfNewIssue(
          previousIssueCount,
          currentIssueCount,
          repositoryName
        );
      }

      // whether or not previous total was updated, ensure current total reflects current count of issues on Github.
      await updateRepositoryIssueCountToCurrent(
        repositoryName,
        currentRepositoryIssueCount
      );
    });
};
