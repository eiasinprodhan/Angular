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
import { Home } from './components/pages/home/home';
import { Products } from './components/pages/products/products';
import { Productdetails } from './components/pages/productdetails/productdetails';
import { Signin } from './components/pages/signin/signin';
import { Signup } from './components/pages/signup/signup';
import { Editemployees } from './components/employees/editemployees/editemployees';
import { Viewemployees } from './components/employees/viewemployees/viewemployees';
import { Listemployees } from './components/employees/listemployees/listemployees';
import { Addemployees } from './components/employees/addemployees/addemployees';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'products', component: Products },
  { path: 'productdetails', component: Productdetails },
  { path: 'signin', component: Signin },
  { path: 'signup', component: Signup },
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
  { path: 'editfloors/:id', component: Editfloors },
  { path: 'editbuildings/:id', component: Editbuildings },
  { path: 'addemployees', component: Addemployees },
  { path: 'listemployees', component: Listemployees },
  { path: 'viewemployees/:id', component: Viewemployees },
  { path: 'editemployees/:id', component: Editemployees }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
