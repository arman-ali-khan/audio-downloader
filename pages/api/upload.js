// pages/api/upload.js
import fs from 'fs';
import multer from 'multer';
import path from 'path';

const upload = multer({ dest: 'public/uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error uploading file' });
      return;
    }
    const fileName = req.file.filename
    const newPath = path.join(process.cwd(), 'public', 'uploads', fileName);

    fs.rename(req.file.path, newPath, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error moving the file' });
        return;
      }

      res.status(200).json({ message: 'File uploaded successfully!', fileName});
    });
  });
}
