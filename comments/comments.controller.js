let express = require('express'),
    router = express.Router();

let dal = require('./comments.dal');

router.get('/', (req, res) => {
  dal.getComments()
    .then(comments => {
      res.send(comments);
    })
    .catch(error => {
      res.status(500).send({error: 'Could not get comments'});
    });
});

module.exports = router;
