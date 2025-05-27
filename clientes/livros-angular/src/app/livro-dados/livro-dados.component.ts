import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro('', 0, '', '', []);
  public autoresForm: string = '';
  public editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    this.livro.autores = this.autoresForm.split('\n')
      .map(autor => autor.trim())
      .filter(autor => autor.length > 0);

    this.servLivros.incluir(this.livro).then((sucesso: boolean) => {
      if (sucesso) {
        this.router.navigateByUrl('/lista');
      }
    }).catch((error: any) => {
      console.error('Erro ao incluir livro:', error);
    });
  }
}