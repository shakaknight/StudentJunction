import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  // {path:'', component: LoginComponent, outlet: "main"},
  {path:'', component: NavComponent},
  {path:'nav', component: NavComponent,children: [
    {path:'home', component: HomeComponent},
  ]},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
