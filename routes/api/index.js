//Taking routes and implementing them to another router instance
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')
const commentRoutes = require('./comment-routes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', userRoutes);

module.exports = router;