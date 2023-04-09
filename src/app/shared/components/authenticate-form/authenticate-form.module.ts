import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateFormComponent } from './authenticate-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ AuthenticateFormComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AuthenticateFormComponent
  ]
})
export class AuthenticateFormModule { }
