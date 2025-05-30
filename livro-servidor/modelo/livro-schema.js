const mongoose = require("./conexao");

const LivroSchema = new mongoose.Schema({
  titulo: {type: String, require: true},
  codEditora: {type: Number, require: true},
  resumo: {type: String, require: true},
  autores: {type: [String], require: true}
});

const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;