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

router.post('/', (req, res) => {
  dal.createComment(req.body)
    .then(comment => {
      res.status(201).send(comment);
    })
    .catch(error => {
      res.status(500).send({error: 'Could not create comment'});
    });
});

router.get('/:id', (req, res) => {
  dal.getComment(req.params.id)
    .then(comment => {
      if (!comment) {
        res.status(404).send();
      }
      else {
        res.send(comment);
      }
    })
    .catch(error => {
      res.status(500).send({error: 'Error retrieving comment'});
    });
});

module.exports = router;
