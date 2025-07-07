import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Addprojects } from './components/projects/addprojects/addprojects';
import { Listprojects } from './components/projects/listprojects/listprojects';
import { Viewprojects } from './components/projects/viewprojects/viewprojects';
import { Editprojects } from './components/projects/editprojects/editprojects';

const routes: Routes = [
  {path:'', component: Dashboard},
  {path:'addprojects', component: Addprojects},
  {path:'listprojects', component: Listprojects},
  {path:'viewprojects', component: Viewprojects},
  {path:'editprojects', component: Editprojects},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
