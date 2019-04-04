const AWS = require("aws-sdk");

module.exports.createRepositoryIssueCountFromResponse = responseString => {
  let repositoryInformation = JSON.parse(responseString);

  let repositoryIssueCounts = {};

  for (let i = 0; i < repositoryInformation.length; i++) {
    repositoryIssueCounts[repositoryInformation[i].name] =
      repositoryInformation[i].open_issues_count;
  }

  return repositoryIssueCounts;
};

module.exports.createPromiseForPublishingIssueCounts = repositoryIssueCounts => {
  const paramatersForPublishingIssueCounts = {
    Message: JSON.stringify(repositoryIssueCounts),
    TopicArn:
      "arn:aws:sns:us-east-1:193442566719:publishIssueCountOfAllRepositories"
  };

  updateAWSConfigurationWithRegionAndAccess();

  return new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(paramatersForPublishingIssueCounts)
    .promise();
};

const updateAWSConfigurationWithRegionAndAccess = () => {
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAS2CQTKI7Z37ONTGY",
    secretAccessKey: "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"
  });
};

module.exports.executeThenableAndHandleResults = publishTextPromise => {
  publishTextPromise
    .then(() => {
      console.log("Issues for Github repositories have been published.");
    })
    .catch(err => {
      console.error(err, err.stack);
    });
};
