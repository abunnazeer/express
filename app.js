const express = require('express');

const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const path = require('path');

//const dotenv = require('dotenv');

const commentRouter = require('./routes/commentRoutes');
const voteRouter = require('./routes/voteRoutes');
const newsRouter = require('./routes/newsRoutes');
const candidateRouter = require('./routes/candidateRoutes');

const Candidates = require('./models/candidateModel');

//dotenv.config({ path: './config.env' });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

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

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//////////home page///////////
app.get('/', async (reg, res) => {
  const candidate = await Candidates.find();
  res.render('index', {
    candidateDetails: candidate,
    slides: slideDetails,
  });
});

//////////comment//////////
app.use('/comment', commentRouter);

//////////voting///////////////

app.use('/vote', voteRouter);
//////////news///////////////
app.use('/news', newsRouter);
//////////news///////////////
app.use('/addCandidate', candidateRouter);

// app.post('/', (reg, res) => {
//   let v = reg.body.president;
//   if (candidateDetail[0] && reg.body.president === '1') {
//     console.log(candidateDetail[0].noOfVote.push(v));
//   } else if (candidateDetail[1] && reg.body.president === '2') {
//     console.log(candidateDetail[1].noOfVote.push(v));
//   } else if (candidateDetail[1] && reg.body.president === '3') {
//     console.log(candidateDetail[2].noOfVote.push(v));
//   }
//   res.redirect('/');
// });
//////////// Newss //////////////
// app.get('/news', (reg, res) => {
//   // res.render('news');
//   res.render('news', { newsContent: newsLists });
// });

module.exports = app;
