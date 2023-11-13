const db = require("../db");

const UserModel = {
  getAllPosts: (limit,offset,value, callback) => {
    //  get count
    db.query(`SELECT * FROM episode`, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const count = result.length || 0;
      const limitID = limit || 10;
      const offsetID = offset || 0;
      const value2 = JSON.stringify(value)
      const sql = `SELECT * FROM episode ${value?.length ? `WHERE JSON_CONTAINS(tags, '{"label":${value2}}')`:''} ORDER BY createdAt DESC LIMIT ${limitID} OFFSET ${offsetID}`
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

  getPostById: (userId, callback) => {
    db.query("SELECT * FROM episode WHERE id = ?", [userId], callback);
  },
  // create episode
  createPost: (data, callback) => {
    // console.log(data,'data')
    db.query(
      "INSERT INTO episode (title,description,createdAt,thumbnail,downloadUrl,fileSize,artist,categories,tags) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        data.title,
        data.description,
        data.createdAt,
        data.thumbnail,
        data.downloadUrl,
        data.fileSize,
        data.artist,
        data.categories,
        data.tags,
      ],
      callback
    );
  },

  updatePost: (userId, user, callback) => {
    db.query(
      "UPDATE episode SET name = ?, email = ? WHERE id = ?",
      [user.name, user.email, userId],
      callback
    );
  },

  updateDownloadCount: (userId, callback) => {
    db.query("SELECT * FROM episode WHERE id = ?", [userId], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      // console.log('result1',result[0])
      db.query(
        "UPDATE episode SET totalDownload = ? WHERE id = ?",
        [(result[0]?.totalDownload||0)+1, userId],
        callback
      );
    });
   
  },

  updateCategoryForCount: (data, callback) => {
    const categories = data?.categories;
    const updates = JSON.parse(categories);

    updates.forEach(async (update) => {
      const { value, label, count } = update;
      // console.log(update);
      const query = "UPDATE categories SET count = ? WHERE label = ?";

      db.query(query, [parseInt(count) + 1, label], callback);
    });
  },
  popularPosts: (callback) => {
    const sql = `SELECT * FROM episode WHERE createdAt >= NOW() - INTERVAL 10 DAY ORDER BY totalDownload DESC
    LIMIT 5`;
    db.query(sql, callback);
  },

  deletePost: (userId, callback) => {
    db.query("DELETE FROM episode WHERE id = ?", [userId], callback);
  },

  deleteAllPosts: (callback) => {
    db.query("DELETE FROM episode", callback);
  },
};

module.exports = UserModel;
