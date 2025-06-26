
const vagaModel = require('../models/vaga-model');


function listarVagas(req, res) {

  const vagas = vagaModel.listar();

  res.render('vagas', {vagas});
}

module.exports = {
  listarVagas
};