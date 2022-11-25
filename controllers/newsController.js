const News = require('./../models/newsModel');
const multer = require('multer');
/// Image upload functinalities
const Storage = multer.diskStorage({
  destination: 'public/assets/uploads',
  filename: (reg, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single('newsimage');

exports.getAllNews = async (reg, res) => {
  const newsLists = await News.find();

  res.status(200).render('news', { newsContent: newsLists });
};

exports.createNews = (reg, res) => {
  upload(reg, res, err => {
    if (err) {
      console.log(err);
    } else {
      const news = new News({
        name: reg.body.newstitle,
        source: reg.body.newsurl,
        content: reg.body.newscontent,
        photo: reg.file.filename,
      });
      news
        .save()
        .then(doc => {
          console.log(doc);
        })
        .catch(err => {
          console.log('Error', err);
        });
    }
  });

  res.redirect('/news');
};
