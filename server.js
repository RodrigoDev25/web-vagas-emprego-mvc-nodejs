const express = require('express')
const app = express()
const vagaController = require('./controllers/vaga-controller')



app.get('/vagas', vagaController.listarVagas)

app.set('view engine', 'ejs')
app.set('views', './views')


app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});