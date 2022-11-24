'use strict';

// variables
const bannerContainer = document.querySelector('.banner__section');
const bannerImg = document.querySelector('#banner__img');
const caption = document.querySelector('.caption');
const bannerVoteBtn = document.querySelector('.vote__btn');
const candidateName = document.querySelector('.candidate__name');
const candidateImage = document.querySelector('.cand__image');
const candidatePosition = document.querySelector('.candidate__position');
const voteYes = document.querySelector('.voting__yes');
const voteNo = document.querySelector('.voting__no');
const bottomMenu = document.querySelector('.menu');
const candidateContainer = document.querySelector('.candidate__container');
const commentBtn = document.querySelector('.comment__btn');
const newsBtn = document.querySelector('.news__btn');
const comment = document.querySelector('.comment');
const NewsForm = document.querySelector('.news__box');

//voting variables
const selectVote = document.querySelectorAll('input[name="president"]');
const voteBtn = document.querySelector('.btn__style');
//slide images and caption
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

commentBtn?.addEventListener('click', () => {
  comment.classList.remove('hide');
  commentBtn.classList.add('hide');
});

newsBtn?.addEventListener('click', () => {
  NewsForm.classList.remove('hide');
  newsBtn.classList.add('hide');
});

// candidate details
// const candidateDetails = [
//   [
//     {
//       image: 'assets/img/tinubu.png',
//       fullName: 'Ahmad Bola Tinubu',
//       position: 'APC Presidential Candidate',
//       noOfVote: 0,
//     },
//     {
//       image: 'assets/img/Atiku.png',
//       fullName: 'Atiku Abubakar',
//       position: 'PDP Presidential Candidate',
//       noOfVote: 0,
//     },
//     {
//       image: 'assets/img/Rabiu-Musa-Kwankwaso',
//       fullName: 'Rabiu Musa Kwankoso',
//       position: 'ANPP Presidential Candidate',
//       noOfVote: 0,
//     },
//   ],

//   [
//     {
//       image: 'assets/img/Kashim-Shettima.png',
//       fullName: 'Kashim Shettima',
//       position: 'APC Vice Presidential Candidate',
//       noOfVote: 0,
//     },
//     {
//       image: 'assets/img/Ifeanyichukwu.png',
//       fullName: 'Ifeanyi Chukwu Arthur Okowa',
//       position: 'PDP Vice Presidential Candidate',
//       noOfVote: 0,
//     },
//     {
//       image: 'assets/img/Edwin-Ume-Ezeoke.png',
//       fullName: 'Chief Edwin Ume-Ezeoke',
//       position: 'ANPP Vice Presidential Candidate',
//       noOfVote: 0,
//     },
//   ],
// ];

const candidateDetail = [
  {
    image: 'assets/img/tinubu.png',
    fullName: 'Ahmad Bola Tinubu',
    position: 'APC Presidential Candidate',
    noOfVote: 0,
  },
  {
    image: 'assets/img/Atiku.png',
    fullName: 'Atiku Abubakar',
    position: 'PDP Presidential Candidate',
    noOfVote: 0,
  },
  {
    image: 'assets/img/Rabiu-Musa-Kwankwaso.png',
    fullName: 'Rabiu Musa Kwankoso',
    position: 'ANPP Presidential Candidate',
    noOfVote: 0,
  },

  {
    image: 'assets/img/Kashim-Shettima.png',
    fullName: 'Kashim Shettima',
    position: 'APC Vice Presidential Candidate',
    noOfVote: 0,
  },
  {
    image: 'assets/img/Ifeanyichukwu.png',
    fullName: 'Ifeanyi Chukwu Arthur Okowa',
    position: 'PDP Vice Presidential Candidate',
    noOfVote: 0,
  },
  {
    image: 'assets/img/Edwin-Ume-Ezeoke.png',
    fullName: 'Chief Edwin Ume-Ezeoke',
    position: 'ANPP Vice Presidential Candidate',
    noOfVote: 0,
  },
];
// this navigate to vote page
bannerVoteBtn?.addEventListener('click', () => (location.href = 'vote.html'));

//Load the banner slides
let i = 0;
window.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    if (bannerImg?.src && caption?.textContent) {
      bannerImg.src = slideDetails[i].imgPth;
      caption.textContent = slideDetails[i].caption;
    }
    i++;
    if (i === slideDetails.length) {
      i = 0;
    }
  }, 5000);
});

//add candidate dynamically to the home page
// const displayCandidate = function (candidateDetails) {
//   if (candidateContainer?.innerHTML) {
//     candidateContainer.innerHTML = '';
//   }

//   candidateDetails.forEach(function (cand, i) {
//     const html = `<div class="candidate__list">
//           <img src="${cand.image}" class="cand_image" alt="">
//           <div class="candidate__label--box">
//             <h3 class="candidate__name">${cand.fullName}</h3>
//             <p class="candidate__position">${cand.position}</p>
//           </div>
//         </div>
//          <div class="number__of__voting">
//           <div class="voting__yes">
//             <p class="voting__number">${cand.noOfVote} <span>Votes</span></p>
//             <!-- <p class="vote__label">Voted</p> -->
//           </div>
//           <div class="voting__no">
//             <p class="voting__number">-10 <span>Votes</span></p>
//             <!-- <p class="vote__label">Voted</p> -->
//           </div>
//         </div>
//         `;

//     candidateContainer?.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayCandidate(candidateDetail.reverse());

//bottom menu
// bottomMenu.addEventListener('click', function (e) {
//   e.preventDefault();
//   bottomMenu.classList.remove('menu__active');
//   console.log(bottomMenu);
// });

//voting code
// window.localStorage;
// let ix = [];
// const contingVote = document.querySelector('.countingvote');

// voteBtn?.addEventListener('click', function () {
//   selectVote.forEach(function (value, i) {
//     if (value.checked && i === 0) {
//       i++;
//       ix.push(i);
//       console.log(
//         //  `i have been selected ${(contingVote.textContent = ix.length)}`
//         `i have been selected ${i - 1} ${(candidateDetail[0].noOfVote =
//           ix.length)}`
//       );
//       // i++;
//     } else if (value.checked && i === i) {
//       i++;
//       ix.push(i);
//       console.log(
//         `i have been selected ${i - 1} ${(candidateDetail[1].noOfVote =
//           ix.length)}`
//       );
//     }
//   });
//   // location.href = '/';
// });
