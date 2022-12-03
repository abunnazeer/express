const Candidates = require('./../models/candidateModel');
const multer = require('multer');
/// Image upload functinalities
const Storage = multer.diskStorage({
  destination: 'public/assets/uploads/parties',
  filename: (reg, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single('photo');

exports.getAllCandidate = async (req, res) => {
  // const candidate = await Candidates.find();
  res.render('addCandidate');
};

exports.createCandidate = (reg, res) => {
  upload(reg, res, err => {
    if (err) {
      console.log(err);
    } else {
      const candidate = new Candidates({
        name: reg.body.name,
        position: reg.body.position,
        photo: reg.file.filename,
        vote: [0],
      });
      candidate
        .save()
        .then(doc => {
          console.log(doc);
        })
        .catch(err => {
          console.log('Error', err);
        });
    }
  });
  res.redirect('addCandidate');
};
