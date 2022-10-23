import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardGuard } from './guards/guard.guard';
import {AComponent} from './pages/a/a.component';
import { SubaComponent } from './pages/a/suba/suba.component';
import {BComponent} from './pages/b/b.component';
import { SubbComponent } from './pages/b/subb/subb.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {path:'a',component:AComponent,
    children:[
      {path:"suba",component:SubaComponent},
      {path:"subb",component:SubbComponent},
      {path:'',redirectTo:'/a/suba',pathMatch:'full'},
      {path:'**',component:Error404Component}
    ],
  canActivate:[GuardGuard]},
  {path:'b/:id/:page',loadComponent:()=> import('./pages/b/b.component').then(m => m.BComponent)},
  {path:'',redirectTo:'a',pathMatch:'full'},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
