const UserModel = require('../models/userModel');

const UserController = {
  getAllPosts: (req, res) => {
    let limit = parseInt(req.query.limit) || 10; // number of records per page
        let offset = (parseInt(req.query.page)) * limit || 0; // start index

    UserModel.getAllPosts(limit,offset,(err, users) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(users);
    });
  },

  getPostById: (req, res) => {
    const userId = req.params.id;
    UserModel.getPostById(userId, (err, user) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(user[0]);
    });
  },

  createPost: (req, res) => {
    const data = {
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      createdAt: new Date(),
      author: req.body.author,
      updatedAt: req.body.updatedAt,
      downloadUrl: req.body.downloadUrl,
      embedCode: req.body.embedCode,
      artist: req.body.artist,
      categories: req.body.categories,
      tags: req.body.tags,
    };

    UserModel.createPost(data, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Episode created', id: result.insertId });
    });
  },

  updatePost: (req, res) => {
    const userId = req.params.id;
    const user = {
      name: req.body.name,
      email: req.body.email,
    };

    UserModel.updatePost(userId, user, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User updated', affectedRows: result.affectedRows });
    });
  },

  deletePost: (req, res) => {
    const userId = req.params.id;
    UserModel.deletePost(userId, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User deleted', affectedRows: result.affectedRows });
    });
  },
};

module.exports = UserController;
