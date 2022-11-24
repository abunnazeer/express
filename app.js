const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const upload = multer({ dest: 'public/assets/' });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//const router = express.Router();

//slide images
const slideDetails = [
  {
    imgPth: 'assets/img/slide.jpg',
    caption: `Don't Believe there lies, they leave us with no seccurity`,
  },
  {
    imgPth: 'assets/img/slide1.jpg',
    caption: 'No education --Strike',
  },
  {
    imgPth: 'assets/img/slide2.jpg',
    caption: `Don't be decieve again!`,
  },
  {
    imgPth: 'assets/img/slide3.jpg',
    caption: `We can fight them by casting for the right person!`,
  },
  {
    imgPth: 'assets/img/slide4.jpg',
    caption: `Choose the right candidate`,
  },
  {
    imgPth: 'assets/img/slide5.jpg',
    caption: `Let's save Nigeria together`,
  },
  {
    imgPth: 'assets/img/slide6.jpg',
    caption: `We deserve more from our Government`,
  },
];

// candidate details
const candidateDetail = [
  {
    image: 'assets/img/tinubu.png',
    fullName: 'Ahmad Bola Tinubu',
    position: 'APC Presidential Candidate',
    noOfVote: [],
  },
  {
    image: 'assets/img/Atiku.png',
    fullName: 'Atiku Abubakar',
    position: 'PDP Presidential Candidate',
    noOfVote: [],
  },
  {
    image: 'assets/img/Rabiu-Musa-Kwankwaso.png',
    fullName: 'Rabiu Musa Kwankoso',
    position: 'ANPP Presidential Candidate',
    noOfVote: [],
  },
];
/////comments array //////////
const comments = [];
/////////news array//////////

const newsLists = [
  {
    newsImage: 'assets/img/tinubu.png',
    newsTitle: 'Ahmad Bola Tinubu',
    newsCont: 'APC Presidential Candidate',
    newsUrl: 'APC Presidential Candidate',
  },
];
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
//////////home page///////////
app.get('/', (reg, res) => {
  res.render('index', {
    candidateDetails: candidateDetail,
    slides: slideDetails,
  });
});
//////////comment//////////
app.get('/comment', (reg, res) => {
  res.render('comment', { comments: comments });
});

app.post('/comment', (reg, res) => {
  const comment = {
    titleName: reg.body.titlename,
    commentContent: reg.body.comment,
  };
  comments.push(comment);
  res.redirect('/comment');
});

//////////voting///////////////
app.get('/vote', (reg, res) => {
  res.render('vote');
});

app.post('/', (reg, res) => {
  let v = reg.body.president;
  if (candidateDetail[0] && reg.body.president === '1') {
    console.log(candidateDetail[0].noOfVote.push(v));
  } else if (candidateDetail[1] && reg.body.president === '2') {
    console.log(candidateDetail[1].noOfVote.push(v));
  } else if (candidateDetail[1] && reg.body.president === '3') {
    console.log(candidateDetail[2].noOfVote.push(v));
  }
  res.redirect('/');
});
//////////// Newss //////////////
app.get('/news', (reg, res) => {
  // res.render('news');
  res.render('news', { newsContent: newsLists });
});

app.post('/news', upload.single('newsimage'), (reg, res) => {
  const news = {
    newsTitle: reg.body.newstitle,
    newsCont: reg.body.newscontent,
    newsImage: reg.file.originalname,
    newsUrl: reg.body.newsurl,
  };

  newsLists.push(news);
  console.log(news);
  res.redirect('/news');
});

app.listen(3000, () => {
  console.log('server is runing on port 3000');
});
