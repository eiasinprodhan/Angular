import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Projects } from './components/projects/projects';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';

const routes: Routes = [
  {path: 'dashboard', component: Dashboard},
  {path: 'projects', component: Projects},
  {path: '', component: Signin},
  {path: 'signup', component: Signup},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
