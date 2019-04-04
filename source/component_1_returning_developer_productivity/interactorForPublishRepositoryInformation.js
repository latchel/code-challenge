const AWS = require("aws-sdk");

// Functions used in index.js to publish message with repository information.
module.exports.updateAWSConfigurationWithRegionAndAccess = () => {
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAS2CQTKI7Z37ONTGY",
    secretAccessKey: "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"
  });
};

module.exports.createMessageForPublishFromRepositoryInformation = repositoryInformation => {
  const params = {
    Message: JSON.stringify(repositoryInformation),
    TopicArn:
      "arn:aws:sns:us-east-1:193442566719:publishInformationOfRepositorySelectedByManager"
  };

  return new AWS.SNS({ apiVersion: "2010-03-31" }).publish(params).promise();
};

module.exports.executeThenableAndHandleResults = publishTextPromise => {
  publishTextPromise
    .then(() => {
      console.log(
        "Repository information for the selected repository have been published."
      );
    })
    .catch(err => {
      console.error(err, err.stack);
    });
};
