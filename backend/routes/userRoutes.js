const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/posts', UserController.getAllPosts);

router.get('/posts/:id', UserController.getPostById);
router.post('/posts', UserController.createPost);
router.put('/posts/:id', UserController.updatePost);
router.delete('/posts/:id', UserController.deletePost);

module.exports = router;
