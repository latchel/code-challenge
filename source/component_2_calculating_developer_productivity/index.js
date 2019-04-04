const {
  getTotalOpenIssuesForThisRepository,
  getCurrentOpenIssues,
  calculatePercentCompleted
} = require("./interactorForCalculatingDeveloperProductivity");

const {
  publishPercentCompletedToSNS
} = require("./interactorForPublishingMessageToSNS");

// This handler is called as a microservice. It's subscribed to the
// publishInformationOfRepositorySelectedByManager topic, and therefore is run when a
// manager is requesting developer productivity.
exports.handler = async (event, context, callback) => {
  let repositoryInformation = JSON.parse(event.Records[0].Sns.Message);

  const repositoryName = repositoryInformation.name;

  let totalIssuesOpenedForThisRepositoryWhileComponent3Listens = await getTotalOpenIssuesForThisRepository(
    repositoryName
  );

  let currentOpenIssues = await getCurrentOpenIssues(repositoryName);

  let percentCompleteOnIssuesForThisRepo = calculatePercentCompleted(
    totalIssuesOpenedForThisRepositoryWhileComponent3Listens,
    currentOpenIssues
  );

  await publishPercentCompletedToSNS(
    percentCompleteOnIssuesForThisRepo,
    repositoryInformation
  );
};
