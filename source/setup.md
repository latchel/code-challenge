Latchel Code Challenge
Wilbert Lam
January 24, 2017

The always fun setup part:
1. Clone repo into your machine
2. Make sure you have Node.js installed
3. Run 'npm install' inside the source folder using CLI
4. Run 'npm start' to boot up the application and check it out!
5. Run 'npm test' to run tests to make sure API route endpoint is working.

Some fun facts and somewhat interesting tidbits:
1. Backend: Express.JS v4 (Node), Front end: Angular 1.5.6
2. Used a couple NPM modules including async (to avoid some callback mess), request (for Github HTTP calls), and apicache (for route caching).
3. Ability to search any repositiory for its data given its owner name and repo name.
4. Backend caching to speed up some things (including a little helper function in the middleware to help cache reset when a new repo is requested).
5. Frontend using Angular components (something I learned after it being released in Angular 1.5, more similar to React kindof now)
6. Backend took Github data from the API given owner/repo parameters and I returned to the frontend a new array with only the data we need.
7. Links to Github account for each user.
8. Testing of the REST api endpoint using Frisby.JS built on top of Jasmine

Couple of things that could be added in the future:
1. Better UI scaling with different screen sizes
2. Full end2end testing for the frontend (perhaps using Protractor)
3. More front-end capabilities (order, filtering etc.)