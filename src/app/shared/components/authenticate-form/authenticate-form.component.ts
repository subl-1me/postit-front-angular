import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-authenticate-form',
  templateUrl: './authenticate-form.component.html',
  styleUrls: ['./authenticate-form.component.css'],
  providers: [ HttpService ]  
})
export class AuthenticateFormComponent implements OnInit {

  public user:User;
  public confirmPassword:string;
  public userValue:string;

  @Input() authFormType: string;

  constructor(
    private httpService: HttpService
  ) { 
    this.authFormType = '';
    this.user = { username: '', email: '', password: '' }
    this.confirmPassword = '';
    this.userValue = '';
  }

  ngOnInit(): void {
  }

  public authSubmit(form:any):void{
    // Check if password match only if its register form
    if(this.authFormType === 'register' && !this.doesPasswordMatch()){
      console.log(`${this.user.password} does not match with ${this.confirmPassword}. Try again`);
      return;
    }

    console.log(`Processing ${this.authFormType}...`)
    console.log(this.user);

    if(this.authFormType === 'register'){
      this.httpService.authRegister(this.user).subscribe((response) => {
        console.log('Getting resopnse from auth-register method...');
        console.log(response);
        return;
      })
    }

    // then its login
    if(this.authFormType === 'login'){
      this.httpService.authLogin(this.user.password, this.userValue).subscribe((response) => {
        console.log('Getting response from auth-login method...');
        console.log(response);
        this.setAuthCredentials(response.token, response.user_id);

        return;
      })
    }
  }

  private doesPasswordMatch():boolean{
    return this.user.password === this.confirmPassword;
  }

  private setAuthCredentials(token:string, _id:string):void{
    const auth_data = {
      _id: _id,
      token: token
    }

    localStorage.setItem('auth_data', JSON.stringify(auth_data));
  }

}
