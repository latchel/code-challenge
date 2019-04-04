const { handler } = require("../index.js");

const sampleEvent = require("./samplePublishedMessageFromSNS");

const testThatComponentCorrectlyCalculatesAndStoresIssues = () => {
  handler(sampleEvent);
};

// You can expect to see the database update with issue counts based on the sample published message.
testThatComponentCorrectlyCalculatesAndStoresIssues();
