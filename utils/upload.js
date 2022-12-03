const multer = require('multer');
/// Image upload functinalities
const Storage = multer.diskStorage({
  destination: 'public/assets/uploads',
  filename: (reg, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

// exports.upload = multer({
//   storage: Storage,
// }).single('newsimage');

module.exports = multer;
