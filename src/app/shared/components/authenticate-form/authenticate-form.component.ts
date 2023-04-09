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

  @Input() authFormType: string;

  constructor(
    private httpService: HttpService
  ) { 
    this.authFormType = '';
    this.user = { username: '', email: '', password: '' }
    this.confirmPassword = '';
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

    //TODO: Fix an error that accours when send the request with this service :(
    if(this.authFormType === 'register'){
      this.httpService.postRequest('user', this.user).subscribe((response) => {
        console.log('Getting response form http service...');
        console.log(response);
      })
    }
  }

  private doesPasswordMatch():boolean{
    return this.user.password === this.confirmPassword;
  }

}
