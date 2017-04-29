#### app.js
* Asks for connection to database
* Matches routes to controllers
* Starts Express

#### db.js
* Sets up connection to database
* Caches connection for reuse

#### comments/comments.controller.js
* Handles requests based on HTTP method and route
* Asks data access layer to get/set
* Processes data with business logic
* Responds to client with success/error

#### comments/comments.dal.js
* Queries the database
* Returns a promise with results or error
