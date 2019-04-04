const {
  publishPercentCompletedToSNS
} = require("../interactorForPublishingMessageToSNS");

const sampleRepositoryInformation = require("./sampleRepositoryInformation");
const testsForInteractorForPublishingMessage = () => {
  const samplePercentCompleteOnIssuesForThisRepo = 20;

  publishPercentCompletedToSNS(
    samplePercentCompleteOnIssuesForThisRepo,
    sampleRepositoryInformation
  );
  // Expect a console log of: Message containing Percent Completion on Issues for the repository team1Repository1Store was published.
};

testsForInteractorForPublishingMessage();
