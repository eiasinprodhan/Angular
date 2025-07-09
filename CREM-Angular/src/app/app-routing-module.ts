import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Addprojects } from './components/projects/addprojects/addprojects';
import { Listprojects } from './components/projects/listprojects/listprojects';
import { Viewprojects } from './components/projects/viewprojects/viewprojects';
import { Editprojects } from './components/projects/editprojects/editprojects';
import { Dashboard } from './components/others/dashboard/dashboard';
import { Addbuildings } from './components/buildings/addbuildings/addbuildings';
import { Listbuildings } from './components/buildings/listbuildings/listbuildings';
import { Viewbuildings } from './components/buildings/viewbuildings/viewbuildings';
import { Editbuildings } from './components/buildings/editbuildings/editbuildings';
import { Editfloors } from './components/floors/editfloors/editfloors';
import { Viewfloors } from './components/floors/viewfloors/viewfloors';
import { Listfloors } from './components/floors/listfloors/listfloors';
import { Addfloors } from './components/floors/addfloors/addfloors';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'addprojects', component: Addprojects },
  { path: 'listprojects', component: Listprojects },
  { path: 'viewprojects/:id', component: Viewprojects },
  { path: 'editprojects/:id', component: Editprojects },
  { path: 'addbuildings', component: Addbuildings },
  { path: 'listbuildings', component: Listbuildings },
  { path: 'viewbuildings/:id', component: Viewbuildings },
  { path: 'editbuildings/:id', component: Editbuildings },
  { path: 'addfloors', component: Addfloors },
  { path: 'listfloors', component: Listfloors },
  { path: 'viewfloors/:id', component: Viewfloors },
  { path: 'editfloors/:id', component: Editfloors }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
