const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/posts', UserController.getAllPosts);

router.get('/posts/:id', UserController.getPostById);
router.post('/posts', UserController.createPost);
router.get('/popular-posts', UserController.popularPosts);
router.put('/posts/:id', UserController.updatePost);
router.get('/download/:id', UserController.updateDownloadCount);
router.delete('/posts/:id', UserController.deletePost);
router.delete('/delete-all-posts', UserController.deleteAllPosts);

module.exports = router;
