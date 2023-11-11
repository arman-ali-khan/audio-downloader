const db = require('../db');

const UserModel = {
    getAllPosts: (offset,limit,callback) => {
        const limitID = limit||1000
        const offsetID = db.offset || 0;
        
            const query =  `SELECT * FROM posts WHERE publish = 1 AND aproved = 1  ORDER BY date DESC LIMIT ${limit} OFFSET ${offset}`  
            db.query('SELECT * FROM episode ORDER BY createdAt DESC LIMIT ? OFFSET ?', [limitID, offsetID], callback);    
       
  },

  getPostById: (userId, callback) => {
    db.query('SELECT * FROM episode WHERE id = ?', [userId], callback);
  },

  createPost: (data, callback) => {
    // console.log(data,'data')
    db.query('INSERT INTO episode (title,description,createdAt,thumbnail,downloadUrl,embedCode,artist,categories,tags) VALUES (?,?,?,?,?,?,?,?,?)', [data.title,data.description,data.createdAt,data.thumbnail,data.downloadUrl,data.embedCode,data.artist,data.categories,data.tags], callback);
  },

  updatePost: (userId, user, callback) => {
    db.query('UPDATE episode SET name = ?, email = ? WHERE id = ?', [user.name, user.email, userId], callback);
  },

  deletePost: (userId, callback) => {
    db.query('DELETE FROM episode WHERE id = ?', [userId], callback);
  },
};

module.exports = UserModel;
