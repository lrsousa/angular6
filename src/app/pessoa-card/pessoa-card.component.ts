import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-card',
  templateUrl: './pessoa-card.component.html',
  styleUrls: ['./pessoa-card.component.css'],
  styles: [`
  .card-block {
    text-transform: uppercase;
    color: blue;
  }
  `],
})
export class PessoaCardComponent {
  @Input() pessoa: any;

  getEstilosCartao() {
    return { 'border-width.px': this.pessoa.id,
             backgroundColor: this.pessoa.id % 2 == 0 ? 'lightblue' : 'lightgreen' };
  }
}
