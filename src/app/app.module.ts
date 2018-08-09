import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PessoaCardComponent } from './pessoa-card/pessoa-card.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaCardComponent,
    PessoaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
