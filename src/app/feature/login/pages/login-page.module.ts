import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AuthenticateFormComponent } from "src/app/shared/components/authenticate-form/authenticate-form.component";
import { LoginPageRoutingModule } from "./login-page.routing.module";

@NgModule({
    imports: [ 
        BrowserModule, 
        AuthenticateFormComponent,
        LoginPageRoutingModule
    ],
    providers: [],
    declarations: [ LoginPageComponent ],
    exports: [],
    bootstrap: []
})

export class LoginFormModule { }