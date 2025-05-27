import { Injectable } from '@angular/core';
import { Livro } from './livro';

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private baseURL = 'http://localhost:3030/livros';

  constructor() { }

  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(this.baseURL, { method: 'GET' });
      const livrosMongo: LivroMongo[] = await response.json();
      return livrosMongo.map(livroMongo => new Livro(
        livroMongo._id || '',
        livroMongo.codEditora,
        livroMongo.titulo,
        livroMongo.resumo,
        livroMongo.autores
      ));
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      return [];
    }
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(livroMongo)
      });
      return response.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  }

  async excluir(codigo: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/${codigo}`, {
        method: 'DELETE'
      });
      return response.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  }
}