const httpsReference = require("https");

const {
  createRepositoryIssueCountFromResponse,
  createPromiseForPublishingIssueCounts,
  executeThenableAndHandleResults
} = require("./interactorForGithubRequest");

module.exports.handler = async () => {
  publishIssueCountsFromAllRepositories();
};

const publishIssueCountsFromAllRepositories = () => {
  httpsReference.get(httpsHostPathAndHeaders, callbackForHttpsReferenceGet);
};

const httpsHostPathAndHeaders = {
  hostname: "api.github.com",
  path: "/users/ejswenson15/repos",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36"
  }
};

const callbackForHttpsReferenceGet = responseFromHttpsRequest => {
  let responseString = "";

  responseFromHttpsRequest.on("data", data => {
    responseString += data.toString("utf8");
  });

  responseFromHttpsRequest.on("end", () => {
    handleBufferEndByPublishingRepositoriesAndIssueCounts(responseString);
  });
};

const handleBufferEndByPublishingRepositoriesAndIssueCounts = responseString => {
  const repositoryIssueCounts = createRepositoryIssueCountFromResponse(
    responseString
  );

  let publishTextPromise = createPromiseForPublishingIssueCounts(
    repositoryIssueCounts
  );

  executeThenableAndHandleResults(publishTextPromise);
};
