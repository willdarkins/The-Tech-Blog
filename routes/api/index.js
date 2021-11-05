//Taking routes and implementing them to another router instance
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;