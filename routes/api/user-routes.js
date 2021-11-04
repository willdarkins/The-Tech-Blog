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

module.exports = router;