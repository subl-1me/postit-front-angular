import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./feature/home/home.component";

// Modules
const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'auth',
        loadChildren: () => 
            import('./feature/auth/auth.module').then((m) => m.AuthModule)
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }