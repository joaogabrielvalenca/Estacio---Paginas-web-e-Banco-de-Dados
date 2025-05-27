import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { ControleEditoraService } from './app/controle-editora.service';
import { ControleLivrosService } from './app/controle-livros.service';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    ControleEditoraService,
    ControleLivrosService
  ]
}).catch(err => console.error(err));