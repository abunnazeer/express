const News = require('./../models/newsModel');
const multer = require('multer');
/// Image upload functinalities
const storage = multer.diskStorage({
  destination: (reg, res) => {
    cb(null, 'public/assets/uploads');
  },
  filename: (reg, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${Date.now()}.${ext}`);
  },
});
const multiFilter = (reg, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, false);
  } else {
    cb(new Error('image not found'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: multiFilter,
});

exports.uploadNewsPhoto = upload.single('newsimage');
exports.getAllNews = async (reg, res) => {
  const newsLists = await News.find();
  res.status(200).render('news', { newsContent: newsLists });
};

exports.createNews = (reg, res) => {
  reg.file;
  const news = new News({
    name: reg.body.newstitle,
    source: reg.body.newsurl,
    content: reg.body.newscontent,
    photo: reg.body.newsimage,
  });
  news
    .save()
    .then(doc => {
      console.log(doc);
    })
    .catch(err => {
      console.log('Error', err);
    });

  res.redirect('/news');
};
