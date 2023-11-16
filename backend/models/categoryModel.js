const db = require('../db');

const CategoryModel = {
    getAllCategories: (offset,limit,callback) => {
        const limitID = limit||1000
        const offsetID = db.offset || 0;
        
            const query =  `SELECT * FROM categories ORDER BY value DESC LIMIT ${limit} OFFSET ${offset}`  
            db.query('SELECT * FROM categories ORDER BY value ASC LIMIT ? OFFSET ?', [limitID, offsetID], callback);    
       
  },

  getCategoryById: (userId, callback) => {
    db.query('SELECT * FROM categories WHERE id = ?', [userId], callback);
  },


  getCategoryPosts: (value,limit,offset,sort, callback) => {
    const value2 = JSON.stringify(value)
    db.query(`SELECT * FROM episode WHERE JSON_CONTAINS(categories, '{"label":${value2}}')`, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const count = result.length || 0;
      const sql = `SELECT * FROM episode WHERE JSON_CONTAINS(categories, '{"label":${value2}}')ORDER BY createdAt ${sort!=='desc'?'ASC':'DESC'} LIMIT ${limit} OFFSET ${offset}`
   // Execute the main query

   db.query(sql, (err, episodes) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Send both episodes and count in the callback
    callback({ episodes, count });
  });
});

   
  },

  createCategory: (data, callback) => {
    db.query('INSERT INTO categories (value,label,count,createdAt) VALUES (?,?,?,?)', [data?.value,data?.label,data?.count,data?.createdAt], callback);
  },

  updateCategory: (categoryId, data, callback) => {
    db.query('UPDATE categories SET label =?, value=?, count=?, updatedAt=? WHERE id = ?', [data?.label,data?.value,data?.count,data?.updatedAt, categoryId], callback);
  },

  deleteCategory: (userId, callback) => {
    db.query('DELETE FROM categories WHERE id = ?', [userId], callback);
  },
};

module.exports = CategoryModel;
