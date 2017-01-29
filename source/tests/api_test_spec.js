var frisby = require('frisby');

frisby.create('Make sure we return github data in right format')
  .post('http://localhost:3000/api/github-data', { 'owner': 'latchel', 'repo': 'code-challenge' })
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes('data.*', {
      login: String,
      id: Number,
      avatarUrl: String,
      htmlUrl: String,
      commits: Number,
  })
.toss();