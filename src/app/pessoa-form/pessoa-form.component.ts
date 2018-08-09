import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  ultimoId = 0;
  nome = 'Conchita';
  adicionado = false;
  @Output() pessoaAdicionada = new EventEmitter();
  //@Output('criado') pessoaAdicionada = new EventEmitter(); // tambem funciona dando um alias para o @Output, pode ser chamado no outro componente pelo alias.
  adicionar() {
    this.adicionado = true;
    const pessoa = {
      id: ++this.ultimoId,
      nome : this.nome
    };
    this.pessoaAdicionada.emit(pessoa);
  }
}
