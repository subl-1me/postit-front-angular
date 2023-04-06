import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuthenticateFormComponent } from "./components/authenticate-form/authenticate-form.component";

@NgModule({
    imports: [ BrowserModule, AuthenticateFormComponent ],
    providers: [],
    declarations: [],
    exports: [ AuthenticateFormComponent ],
    bootstrap: []
})

export class SharedModule { }