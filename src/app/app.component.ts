import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ultimoId = 0;
  nome = 'Conchita';
  adicionado = false;
  pessoas = [];

  adicionar() {
    console.log(`Adicionado: ${this.nome}`);
    this.adicionado = true;
    this.pessoas.push({id: ++this.ultimoId,
                       nome : this.nome});
  }
}
