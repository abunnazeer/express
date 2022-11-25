const express = require('express');

const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const path = require('path');

//const dotenv = require('dotenv');

const commentRouter = require('./routes/commentRoutes');
const voteRouter = require('./routes/voteRoutes');
const newsRouter = require('./routes/newsRoutes');

//dotenv.config({ path: './config.env' });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//   })
//   .then(con => {
//     // console.log(con.connections);
//     console.log('DB Connection Successful!');
//   });

// const votingSchema = new mongoose.Schema({
//   image: {
//     type: String,
//     required: [true, 'you must provide a image'],
//   },
//   name: {
//     type: String,
//     required: [true, 'you must provide a name'],
//     unique: true,
//   },
//   position: {
//     type: String,
//     required: [true, 'you must provide a position'],
//   },
//   noOfVote: {
//     type: [],
//     default: 0,
//   },
// });

// const commentSchema = new mongoose.Schema({
//   titleName: {
//     type: String,
//     required: [true, 'you must provide a name'],
//     unique: true,
//   },
//   commentContent: {
//     type: String,
//     required: [true, 'you must provide a position'],
//     default: 150,
//   },
// });

// const Comments = mongoose.model('Comment', commentSchema);
//const Voting = mongoose.model('Voting', votingSchema);

// const votingDetails = new Voting({
//   image: 'assets/img/tinubu.png',
//   name: 'Ahmad Bola Tinubu',
//   position: 'APC Presidential Candidate',
//   noOfVote: [1, 2, 3],
// });

// votingDetails
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   });
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
app.use('/comment', commentRouter);

//////////voting///////////////

app.use('/vote', voteRouter);
//////////news///////////////
app.use('/news', newsRouter);
// app.get('/vote', (reg, res) => {
//   res.render('vote');
// });

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

// app.post('/news', (reg, res) => {
//   const news = {
//     newsTitle: reg.body.newstitle,
//     newsCont: reg.body.newscontent,
//     newsImage: reg.file.originalname,
//     newsUrl: reg.body.newsurl,
//   };

//   newsLists.push(news);
//   console.log(news);
//   res.redirect('/news');
// });

// app.post('/news', upload.single('newsimage'), (reg, res) => {
//   const news = {
//     newsTitle: reg.body.newstitle,
//     newsCont: reg.body.newscontent,
//     newsImage: reg.file.originalname,
//     newsUrl: reg.body.newsurl,
//   };

//   newsLists.push(news);
//   console.log(news);
//   res.redirect('/news');
// });

module.exports = app;
