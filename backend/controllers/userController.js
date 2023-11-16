const UserModel = require('../models/userModel');

const UserController = {
  getAllPosts: (req, res) => {
    let limit = parseInt(req.query.limit) || 10; // number of records per page
        let offset = (parseInt(req.query.page)) * limit || 0; // start index
        let value = req.query.value 

    UserModel.getAllPosts(limit,offset,value,({ episodes, count,err }) => {
   
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({episodes,count});
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

  popularPosts: (req, res) => {
    const limit = req.query.limit||5
    const days = req.query.days||7
    UserModel.popularPosts(limit,days,(err, user) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(user);
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
      fileSize: req.body.fileSize,
      artist: req.body.artist,
      categories: req.body.categories,
      tags: req.body.tags,
    };

    UserModel.createPost(data, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      UserModel.updateCategoryForCount(data, (err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
        }
      })
      res.json({ message: 'Episode created', id: result.insertId });
    });
  },

  updatePost: (req, res) => {
    const postId = req.params.id;
    const data = req.body

    UserModel.updatePost(postId, data, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User updated', affectedRows: result.affectedRows });
    });
  },

  updateDownloadCount: (req, res) => {
    const userId = req.params.id;
  
    UserModel.updateDownloadCount(userId, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'download count updated', affectedRows: result.affectedRows });
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

  deleteAllPosts: (req, res) => {
    UserModel.deleteAllPosts((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'All Episodes Deleted', affectedRows: result.affectedRows });
    });
  },
};

module.exports = UserController;
