const CategoryModel = require('../models/categoryModel');
const UserModel = require('../models/userModel');

const CategoryController = {
  getAllCategories: (req, res) => {
    let limit = parseInt(req.query.limit) || 10; // number of records per page
        let offset = (parseInt(req.query.page)) * limit || 0; // start index

    CategoryModel.getAllCategories(limit,offset,(err, users) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(users);
    });
  },

  getCategoryById: (req, res) => {
    const userId = req.params.id;
    CategoryModel.getCategoryById(userId, (err, user) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(user[0]);
    });
  },

  createCategory: (req, res) => {
    const data = {
      value: req.body.value,
      label: req.body.label,
      count: req.body.count,
    };

    CategoryModel.createCategory(data, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Category created', id: result.insertId });
    });
  },

  updateCategory: (req, res) => {
    const userId = req.params.id;
    const user = {
      name: req.body.name,
      email: req.body.email,
    };

    CategoryModel.updateCategory(userId, user, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User updated', affectedRows: result.affectedRows });
    });
  },

  deleteCategory: (req, res) => {
    const userId = req.params.id;
    CategoryModel.deleteCategory(userId, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User deleted', affectedRows: result.affectedRows });
    });
  },
};

module.exports = CategoryController;
