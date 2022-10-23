import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard';
import {AComponent} from './pages/a/a.component';
import { SubaComponent } from './pages/a/suba/suba.component';
import {BComponent} from './pages/b/b.component';
import { SubbComponent } from './pages/b/subb/subb.component';
import { Error404Component } from './pages/error404/error404.component';
import { NotesComponent } from './pages/notes/notes.component';

const routes: Routes = [
  {path:"home", component:NotesComponent ,
  canActivate:[LoginGuard]},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:Error404Component}
  /**
  {path:'a',component:AComponent,
    children:[
      {path:"suba",component:SubaComponent},
      {path:"subb",component:SubbComponent},
      {path:'',redirectTo:'/a/suba',pathMatch:'full'},
      {path:'**',component:Error404Component}
    ],
  canActivate:[LoginGuard]},
  {path:'b/:id/:page',loadComponent:()=> import('./pages/b/b.component').then(m => m.BComponent)},
  {path:'',redirectTo:'a',pathMatch:'full'},
  {path:'**',component:Error404Component}
  **/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
