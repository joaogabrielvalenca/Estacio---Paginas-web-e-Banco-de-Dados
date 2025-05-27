import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Editora[] = [];
  public livros: Livro[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    
    this.servLivros.obterLivros().then(livros => {
      this.livros = livros;
    }).catch(error => {
      console.error('Erro ao carregar livros:', error);
    });
  }

  excluir(codigo: string): void {
    this.servLivros.excluir(codigo).then(sucesso => {
      if (sucesso) {
        return this.servLivros.obterLivros();
      }
      return Promise.reject('Falha ao excluir livro');
    }).then(livros => {
      this.livros = livros;
    }).catch(error => {
      console.error('Erro ao excluir livro:', error);
    });
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}