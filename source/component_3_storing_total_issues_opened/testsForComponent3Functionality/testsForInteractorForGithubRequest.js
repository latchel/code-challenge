const {
  createRepositoryIssueCountFromResponse,
  createPromiseForPublishingIssueCounts,
  executeThenableAndHandleResults
} = require("../interactorForGithubRequest");

const sampleResponseString = require("./sampleResponseString");

const testCreateRepositoryIssueCountFromResponse = () => {
  const repositoryIssueCounts = createRepositoryIssueCountFromResponse(
    sampleResponseString
  );

  if (compareResponseAndExpectedResponse(repositoryIssueCounts)) {
    console.log(
      "Test passed which confirms that when Create Repository Issue Count From Response is called, that it takes in a stringified object which is the response from the https request, and returns an object which includes the name of the repository and the total number of issues for that repository."
    );
  }
};

const compareResponseAndExpectedResponse = repositoryIssueCounts => {
  return (
    JSON.stringify(repositoryIssueCounts) ==
    JSON.stringify({
      team1Repository1Store: 7,
      team1Repository2User: 0
    })
  );
};

testCreateRepositoryIssueCountFromResponse();

const repositoryIssueCounts = {
  team1Repository1Store: 7,
  team1Repository2User: 0
};

const testCreatePromiseForPublishingIssueCounts = async () => {
  const promiseForPublishingIssueCounts = createPromiseForPublishingIssueCounts(
    repositoryIssueCounts
  );

  let responseOfPromise = await promiseForPublishingIssueCounts;

  if (responseOfPromise.MessageId) {
    console.log(
      `Test passed which ensures that when Create Promise For Publishing Issue Counts is called, that it takes in a Repository Issue Count object and returns a resolved promise which contains an object that has a message id.`
    );
  }
};

testCreatePromiseForPublishingIssueCounts();
