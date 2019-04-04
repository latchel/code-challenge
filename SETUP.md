1. Run Component 3 storing total issues opened against the scheduler.
2. Open tasks in one of the two sample public repositories I have created on Github.
   (I can do this for you if you would like, as I created both repositories for the purposes of this demo.)
3. Wait at least 1 minute for Component 3 to update the database that issues have been opened.
   (If you wouldn't mind asking me to enable component 3 to run against the scheduler, as it is currently disabled to save money. It polls github for the two demo public repositories I have created, and records in a database when a new task is added.)
4. Close some number of issues in github.
5. Run npm start in the application_repository_internal_productivity_tool based folder.
6. Subscribe and email or phone number to SNS, where you would like the productivity report to be sent.
   (If you wouldn't mind asking me to subscribe your phone or email to SNS so you can see this result, I would be happy to do that for you.)
7. At localhost, select one of the first 2 repositories and press the button "get productivity".
8. Expect a text or email with the percent completion of tasks in github, where component 3 is polling at an interval of once a minute, checking for tasks added, and on pressing the button, a request is sent to github to get the current number of tasks open, and the fraction of open vs total tasks opened is returned, indicating the what fraction of tasks have been completed, thereby telling you how productive the developer has been relative to the number of tasks assigned to that developer.

Notes:
-Each component is a microservice, and can be deployed separately, and each would normally have it's own repository.
-Pubsub is used to reduce coupling.
-Key value database is used with a database interface, also to reduce coupling. This can be switch to MySQL with a schema, though in pub sub, concurrent read writes to the database are more likely. Based on what I've read, database choice depends on the situation, and each microservice can have a separate database. With the interface, it's possible to switch in any database without disrupting the flow of traffic.
-Tests are written for each microservice, and can be run straight from the directories provided with no problem, as I have included the keys so you can test it out.
-Files are kept under 60 lines and variable file and function names are long in accordance with Robert Martin's ideas about "Clean Code".
-The front end is a simple react application which has a bare bones UI, in order to focus on the architecture.
-Using pub sub means that it is relatively straightforward to tie new services to any of the topics used for publishing messages. -
