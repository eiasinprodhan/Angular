import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Projects } from './components/projects/projects';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';
import { Buildings } from './components/buildings/buildings';
import { Floors } from './components/floors/floors';
import { Units } from './components/units/units';
import { Rawmaterials } from './components/rawmaterials/rawmaterials';

const routes: Routes = [
  {path: 'dashboard', component: Dashboard},
  {path: 'projects', component: Projects},
  {path: 'buildings', component: Buildings},
  {path: 'floors', component: Floors},
  {path: 'units', component: Units},
  {path: 'rawmaterials', component: Rawmaterials},
  {path: '', component: Signin},
  {path: 'signup', component: Signup},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
