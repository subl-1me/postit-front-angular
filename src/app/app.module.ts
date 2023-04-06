import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticateFormComponent } from './shared/components/authenticate-form/authenticate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
