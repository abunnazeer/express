const Candidates = require('./../models/candidateModel');

exports.getAllCandidate = async (req, res) => {
  const candidate = await Candidates.find();
  res.render('addCandidate');
};

exports.createCandidate = (reg, res) => {
  const candidate = new Candidates({
    name: reg.body.name,
    position: reg.body.position,
  });
  candidate
    .save()
    .then(doc => {
      console.log(doc);
    })
    .catch(err => {
      console.log('Error', err);
    });

  res.redirect('/    ');
};
