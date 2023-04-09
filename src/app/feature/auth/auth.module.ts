import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';

import { AuthRoutingModule } from './auth.routing.module';
import { RouterModule } from '@angular/router';
import { AuthenticateFormModule } from 'src/app/shared/components/authenticate-form/authenticate-form.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    AuthenticateFormModule
  ]
})
export class AuthModule { }
