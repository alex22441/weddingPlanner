const Media = require('../models/Media');
const multer = require('multer');
const path = require('path');

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File Filter to Accept Only Images and Videos
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);
  
  if (mimeType && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images and Videos Only!');
  }
};

const upload = multer({ storage, fileFilter }).single('file');

// Upload Media
exports.uploadMedia = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }

    try {
      const media = new Media({
        filename: req.file.filename,
        path: req.file.path,
        mimetype: req.file.mimetype,
      });

      await media.save();
      res.status(201).json({ msg: 'File uploaded successfully', media });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
};

// Get All Media
exports.getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().select('-__v').lean();
    res.json(media);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};