const Candidates = require('./../models/candidateModel');
exports.getAllVote = async (reg, res) => {
  const candidate = await Candidates.find();
  res.render('vote', { cand: candidate });
};

exports.createVote = async (reg, res) => {
  const voting = await Candidates.findOne({ name: reg.body.President });
  voting.vote.push(+1);
  await voting.save();
  //console.log(reg.body.President);
  console.log(voting);
  res.redirect('/vote');
};
