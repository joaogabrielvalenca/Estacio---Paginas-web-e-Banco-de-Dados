const express = require("express");
const router = express.Router();
const livros = require("../modelo/livro-dao")

router.get("/", async (req, res) => {
  try {
    const lista = await livros.obterLivros();
    res.json(lista);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao obter livros." });
  }
});

router.post("/", async (req, res) => {
  try {
    await livros.incluir(req.body);
    res.json({ mensagem: "Livro incluído com sucesso!" });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao incluir o livro.", erro: erro.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await livros.excluir(req.params.id);
    res.json({ mensagem: "Livro excluído com sucesso!" });
  } catch {
    res.status(500).json({ mensagem: "Erro ao excluir o livro."})
  }
});

module.exports = router;