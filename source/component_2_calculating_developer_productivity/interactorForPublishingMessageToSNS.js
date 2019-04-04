const AWS = require("aws-sdk");

module.exports.publishPercentCompletedToSNS = async (
  percentCompleteOnIssuesForThisRepo,
  repositoryInformation
) => {
  updateAWSConfigurationWithRegionAndAccess();

  const repositoryName = repositoryInformation.name;

  const publishTextPromise = createPromiseForPublishingIssueCounts(
    percentCompleteOnIssuesForThisRepo,
    repositoryName
  );

  await executeThenableAndHandleResults(publishTextPromise, repositoryName);
};

const updateAWSConfigurationWithRegionAndAccess = () => {
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAS2CQTKI7Z37ONTGY",
    secretAccessKey: "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"
  });
};

const createPromiseForPublishingIssueCounts = (
  percentCompleteOnIssuesForThisRepo,
  repositoryName
) => {
  const paramatersForAWSMessage = {
    Message: `${percentCompleteOnIssuesForThisRepo.toString()}% done for the repository ${repositoryName}`,
    TopicArn:
      "arn:aws:sns:us-east-1:193442566719:publishPercentCompletionOnIssues"
  };

  return new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(paramatersForAWSMessage)
    .promise();
};

const executeThenableAndHandleResults = (
  publishTextPromise,
  repositoryName
) => {
  return new Promise((resolve, reject) => {
    publishTextPromise
      .then(() => {
        resolve();
      })
      .catch(function(err) {
        console.error(err, err.stack);
      });
  });
};
