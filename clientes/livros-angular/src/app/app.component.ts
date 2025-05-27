import { Component } from '@angular/core';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterModule],

  providers: [
    { provide: ActivatedRoute, useValue: {} }
  ]
})


export class AppComponent {
  title = 'livros-angular';
}
