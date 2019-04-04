module.exports = {
  Records: [
    {
      EventSource: "aws:sns",
      EventVersion: "1.0",
      EventSubscriptionArn:
        "arn:aws:sns:us-east-1:193442566719:publishIssueCountOfAllRepositories:3ddbf538-1ac4-4d10-969d-789324f03ff9",
      Sns: {
        Type: "Notification",
        MessageId: "47576c22-b182-5c4c-8160-3902e0f18ad2",
        TopicArn:
          "arn:aws:sns:us-east-1:193442566719:publishIssueCountOfAllRepositories",
        Subject: null,
        Message: '{"team1Repository1Store":12,"team1Repository2User":8}',
        Timestamp: "2019-04-04T18:38:43.893Z",
        SignatureVersion: "1",
        Signature:
          "Q9zBx3tMuMB3neX7QZftaokmdSNzvYikQ+Rwjrvt1ZxAG+HlYyB/3rSDJEa2s48Hn6xRtIKW1xdEBohXFWC0MqXyHXq7JMPRsezDvHqNdi249DeTT58WhoUx3df9Vg9TdiroC/R1yx85rIArAqMtEVHe1bms9GxDAxK2bSTs286ofW291K4uqM2CW4FMLW4zVDNJUDbM9yAgO7zND5ynt9j9sQSWCS18XSt7DMKwceECKL3dRTjfMyzMu+jQtHk6tFzoAGFPsognFxFPW5o1dFK2aVgZm3QZoqGg3f3hEdKUe4p/7aOpVtf+hDnVSStid7UNcZa7o62cgnvIgZK4bg==",
        SigningCertUrl:
          "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-6aad65c2f9911b05cd53efda11f913f9.pem",
        UnsubscribeUrl:
          "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:193442566719:publishIssueCountOfAllRepositories:3ddbf538-1ac4-4d10-969d-789324f03ff9",
        MessageAttributes: {}
      }
    }
  ]
};
