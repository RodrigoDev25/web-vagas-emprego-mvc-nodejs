
const vagaModel = require('../models/vaga-model');


function listarrVagas(req, res) {

  const vagasx = vagaModel.listar();

  //vagas = vagas.ejs dapasta view// 
  res.render('vagas', {vagasx});
}

module.exports = {
  listarrVagas
};