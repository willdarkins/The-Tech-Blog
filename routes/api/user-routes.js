const router = require('express').Router();
const { User } = require('../../models');


// GET /api/users - Get all users
router.get('/', (req, res) => {
    User.findAll()
      .then(UserData => res.json(UserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // GET /api/users/1 - Get one user by id
router.get('/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(UserData => {
        if (!UserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(UserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;

