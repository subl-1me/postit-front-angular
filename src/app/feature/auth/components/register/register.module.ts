import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { AuthenticateFormModule } from 'src/app/shared/components/authenticate-form/authenticate-form.module';



@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    AuthenticateFormModule
  ]
})
export class RegisterModule { }
