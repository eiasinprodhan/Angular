import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Allemployees } from './allemployees/allemployees';
import { Addemployee } from './addemployee/addemployee';
import { Searchemployee } from './searchemployee/searchemployee';
import { Contactus } from './contactus/contactus';
import { Aboutus } from './aboutus/aboutus';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'allemployees', component: Allemployees},
  {path: 'addemployee', component: Addemployee},
  {path: 'searchemployee', component: Searchemployee},
  {path: 'contactus', component: Contactus},
  {path: 'aboutus', component: Aboutus}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
