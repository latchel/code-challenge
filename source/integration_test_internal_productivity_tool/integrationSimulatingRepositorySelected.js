const publishManagerWantsProductivityToolResults = require("../application_repository_internal_productivity_tool/src/publishManagerWantsProductivityToolResults");

const fullIntegrationTest = () => {
  const sampleRepositoryName = "team1Repository1Store";

  publishManagerWantsProductivityToolResults(sampleRepositoryName);

  // If your email has been subscribed to SNS, expect an email saying something like: 20% done for the repository team1Repository1Store
};

fullIntegrationTest();
