const {
  getTotalOpenIssuesForThisRepository,
  getCurrentOpenIssues
} = require("../interactorForCalculatingDeveloperProductivity");

const testGetTotalOpenIssuesForRepository = async () => {
  const sampleRepositoryName = "team1Repository1Store";
  let totalIssuesOpenedForThisRepositoryWhileComponent3Listens = await getTotalOpenIssuesForThisRepository(
    sampleRepositoryName
  );

  if (
    typeof totalIssuesOpenedForThisRepositoryWhileComponent3Listens == "number"
  ) {
    console.log(
      `This indicates the database was polled correctly, as we expect a number returned which is the total number of times issued have been opened for the repository of this test, which in this case is ${totalIssuesOpenedForThisRepositoryWhileComponent3Listens}.`
    );
  }
};

testGetTotalOpenIssuesForRepository();

const testGetCurrentOpenIssues = async () => {
  const sampleRepositoryName = "team1Repository1Store";

  let currentOpenIssues = await getCurrentOpenIssues(sampleRepositoryName);

  if (typeof currentOpenIssues == "number") {
    console.log(
      `This test similarily indicates the database was polled correctly, the number of current open issues for the repository is ${currentOpenIssues}.`
    );
  }
};

testGetCurrentOpenIssues();

const compareCurrentOpenAndTotalOpen = async () => {
  const sampleRepositoryName = "team1Repository1Store";

  let currentOpenIssues = await getCurrentOpenIssues(sampleRepositoryName);

  let totalIssuesOpenedForThisRepositoryWhileComponent3Listens = await getTotalOpenIssuesForThisRepository(
    sampleRepositoryName
  );

  if (
    currentOpenIssues < totalIssuesOpenedForThisRepositoryWhileComponent3Listens
  ) {
    console.log(
      `This test worked as expected where ${currentOpenIssues} is the current number of open issues, and is less than ${totalIssuesOpenedForThisRepositoryWhileComponent3Listens}, which is the total number of issues that have been opened for this repository so far. `
    );
  }
};

compareCurrentOpenAndTotalOpen();
