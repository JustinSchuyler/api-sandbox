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

router.delete('/:id', (req, res) => {
  dal.deleteComment(req.params.id)
    .then(result => {
      if (result.deletedCount) {
        res.send({message: req.params.id + ' was deleted'});
      }
      else {
        res.status(410).send({message: req.params.id + ' does not exist'});
      }
    })
    .catch(error => {
      if (error === 400) {
        res.status(400).send({message: req.params.id + ' is not a valid item id'});
      }
      else {
        res.status(500).send({error: 'Error deleting comment'});
      }
    });
});

module.exports = router;
