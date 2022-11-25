const express = require('express');
const router = express.Router();
//////////voting///////////////

// const candidateDetail = [
//   {
//     image: 'assets/img/tinubu.png',
//     fullName: 'Ahmad Bola Tinubu',
//     position: 'APC Presidential Candidate',
//     noOfVote: [],
//   },
//   {
//     image: 'assets/img/Atiku.png',
//     fullName: 'Atiku Abubakar',
//     position: 'PDP Presidential Candidate',
//     noOfVote: [],
//   },
//   {
//     image: 'assets/img/Rabiu-Musa-Kwankwaso.png',
//     fullName: 'Rabiu Musa Kwankoso',
//     position: 'ANPP Presidential Candidate',
//     noOfVote: [],
//   },
// ];
const createVote = (reg, res) => {
  res.render('./index');
  console.log('we cannot redirect');
};

const getAllVote = (reg, res) => {
  res.status(200).render('vote');
};
router.route('/').get(getAllVote).post(createVote);

module.exports = router;
