const banco = require("mongoose")

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

banco.connect('mongodb://localhost:27017/livraria', options)
  .then(() => {
    console.log('Conexão com MongoDB realizada com sucesso!');
  })
  .catch((erro) => {
    console.error('Erro ao conectar com o MongoDB:', erro);
  });

module.exports = banco;