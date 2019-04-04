// import { getNextComponent } from "./nextComponent";

const AWS = require("aws-sdk");
module.exports = repositoryProductivityDesired => {
  publishMessageToSNS(repositoryProductivityDesired);
};

const publishMessageToSNS = repositoryProductivityDesired => {
  // Set region
  //   AWS.config.update({ region: "us-east-1" });

  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAS2CQTKI7Z37ONTGY",
    secretAccessKey: "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"
  });

  var params;

  params = {
    Message: repositoryProductivityDesired /* required */,
    TopicArn:
      "arn:aws:sns:us-east-1:193442566719:publishManagerWantsProductivityToolResults"
  };

  // Create promise and SNS service object
  var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  publishTextPromise
    .then(function(data) {
      console.log(
        `Message with repository that information is desired for is published for: ${repositoryProductivityDesired}`
      );
    })
    .catch(function(err) {
      console.error(err, err.stack);
    });
};
