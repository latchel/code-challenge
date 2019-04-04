const { handler } = require("../index.js");

const sampleEvent = require("./samplePublishedMessageFromSNS");

const testThatComponentReturnsProductivityForRepository = () => {
  handler(sampleEvent);
};

// You can expect to see the database update with issue counts based on the sample published message.
testThatComponentReturnsProductivityForRepository();
