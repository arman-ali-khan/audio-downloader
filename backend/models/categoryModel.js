const db = require('../db');

const CategoryModel = {
    getAllCategories: (offset,limit,callback) => {
        const limitID = limit||1000
        const offsetID = db.offset || 0;
        
            const query =  `SELECT * FROM categories WHERE publish = 1 AND aproved = 1  ORDER BY date DESC LIMIT ${limit} OFFSET ${offset}`  
            db.query('SELECT * FROM categories ORDER BY createdAt DESC LIMIT ? OFFSET ?', [limitID, offsetID], callback);    
       
  },

  getCategoryById: (userId, callback) => {
    db.query('SELECT * FROM categories WHERE id = ?', [userId], callback);
  },

  createCategory: (data, callback) => {
    db.query('INSERT INTO categories (value,label,count) VALUES (?,?,?)', [data?.value,data?.label,data?.count], callback);
  },

  updateCategory: (userId, user, callback) => {
    db.query('UPDATE categories SET name = ?, email = ? WHERE id = ?', [user.name, user.email, userId], callback);
  },

  deleteCategory: (userId, callback) => {
    db.query('DELETE FROM categories WHERE id = ?', [userId], callback);
  },
};

module.exports = CategoryModel;
