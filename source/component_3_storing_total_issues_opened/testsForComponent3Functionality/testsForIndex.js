const { handler } = require("../index.js");

// Should expect to see console log that Issues for Github repositories have been published.

const testThatComponentCorrectlyPublishesToSNS = () => {
  handler();
};

testThatComponentCorrectlyPublishesToSNS();
