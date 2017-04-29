let express = require('express'),
    app = express();

const CONFIG = require('./config.json');
let db = require('./shared/db');

db.connect(CONFIG.db.url, CONFIG.db.dbname)
  .then(_ => {
    app.use('/comments', require('./comments/comments.controller'));
    app.listen(CONFIG.app.port);
  })
  .catch(error => {
    console.log(error);
  });
