const express = require('express');
const CategoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/categories', CategoryController.getAllCategories);
router.get('/category/:id', CategoryController.getCategoryById);
router.post('/category', CategoryController.createCategory);
router.put('/category/:id', CategoryController.updateCategory);
router.delete('/category/:id', CategoryController.deleteCategory);

module.exports = router;
