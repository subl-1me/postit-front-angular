import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AuthRoutingModule } from './feature/auth/auth.routing.module';

import { AppComponent } from './app.component';

// Modules
import { AuthModule } from './feature/auth/auth.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './feature/home/home.module';
import { AuthenticateFormModule } from './shared/components/authenticate-form/authenticate-form.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    AuthenticateFormModule,
    AuthModule,
    RouterModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
