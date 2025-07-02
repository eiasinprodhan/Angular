import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Buildings } from './components/buildings/buildings';
import { Floors } from './components/floors/floors';
import { Units } from './components/units/units';
import { Rawmaterials } from './components/rawmaterials/rawmaterials';
import { Allstages } from './components/allstages/allstages';
import { Workers } from './components/workers/workers';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'dashboard', component: Dashboard},
  {path: 'projects', component: Projects},
  {path: 'buildings', component: Buildings},
  {path: 'floors', component: Floors},
  {path: 'units', component: Units},
  {path: 'allstages', component: Allstages},
  {path: 'workers', component: Workers},
  {path: 'rawmaterials', component: Rawmaterials},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
