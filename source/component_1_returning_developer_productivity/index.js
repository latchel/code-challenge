const httpsReference = require("https");

const {
  updateAWSConfigurationWithRegionAndAccess,
  createMessageForPublishFromRepositoryInformation,
  executeThenableAndHandleResults
} = require("./interactorForPublishRepositoryInformation");

exports.handler = (event, context, callback) => {
  let repositoryName = event.Records[0].Sns.Message;

  getGithubUsers(repositoryName);
};

const getGithubUsers = repositoryName => {
  httpsReference.get(httpsHostPathAndHeaders, responseFromHttpsRequest =>
    callbackForHttpsReferenceGet(responseFromHttpsRequest, repositoryName)
  );
};

const httpsHostPathAndHeaders = {
  hostname: "api.github.com",
  path: "/users/ejswenson15/repos",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36"
  }
};

const callbackForHttpsReferenceGet = (
  responseFromHttpsRequest,
  repositoryName
) => {
  let responseString = "";

  responseFromHttpsRequest.on("data", data => {
    responseString += data.toString("utf8");
  });

  responseFromHttpsRequest.on("end", () => {
    publishRepositoryInformationForTheRepositorySelectedByTheManager(
      responseString,
      repositoryName
    );
  });
};

const publishRepositoryInformationForTheRepositorySelectedByTheManager = (
  responseString,
  repositoryName
) => {
  let repositoryInformation = JSON.parse(responseString);

  for (let i = 0; i < repositoryInformation.length; i++) {
    if (repositoryInformation[i].name == repositoryName) {
      updateAWSConfigurationWithRegionAndAccess();

      const publishTextPromise = createMessageForPublishFromRepositoryInformation(
        repositoryInformation[i]
      );

      executeThenableAndHandleResults(publishTextPromise);
    }
  }
};
