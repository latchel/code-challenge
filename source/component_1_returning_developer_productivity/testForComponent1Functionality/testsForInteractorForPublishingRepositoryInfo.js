const {
  updateAWSConfigurationWithRegionAndAccess,
  createMessageForPublishFromRepositoryInformation,
  executeThenableAndHandleResults
} = require("../interactorForPublishRepositoryInformation");

const sampleRepositoryInformation = require("./sampleRepositoryInformation");

// To run this test, run "node testsForInteractorForPublishingRepositoryInfo.js"
const testCreateMessageForPublishFromRepositoryInformation = async () => {
  updateAWSConfigurationWithRegionAndAccess();

  const publishTextPromise = createMessageForPublishFromRepositoryInformation(
    sampleRepositoryInformation
  );

  executeThenableAndHandleResults(publishTextPromise);
  // Should see Repository information for the selected repository has been published in the console log.
};

testCreateMessageForPublishFromRepositoryInformation();
