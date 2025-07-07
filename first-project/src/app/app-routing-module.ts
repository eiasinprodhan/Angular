import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Allemployees } from './allemployees/allemployees';
import { Addemployee } from './addemployee/addemployee';
import { Contactus } from './contactus/contactus';
import { Aboutus } from './aboutus/aboutus';
import { Updateemployee } from './updateemployee/updateemployee';
import { Viewalllocation } from './viewalllocation/viewalllocation';
import { Addlocation } from './addlocation/addlocation';
import { Updatelocation } from './updatelocation/updatelocation';
import { Registration } from './registration/registration';
import { Login } from './login/login';
import { Userprofile } from './components/userprofile/userprofile';
import { Adminprofile } from './components/adminprofile/adminprofile';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'allemployees', component: Allemployees},
  {path: 'addemployee', component: Addemployee},
  {path: 'updateemployee/:id', component: Updateemployee},
  {path: 'alllocations', component: Viewalllocation},
  {path: 'addlocation', component: Addlocation},
  {path: 'updatelocation/:id', component: Updatelocation},
  {path: 'contactus', component: Contactus},
  {path: 'aboutus', component: Aboutus}, 
  {path: 'registration', component: Registration},
  {path: 'login', component: Login},
  {path: 'userprofile', component: Userprofile},
  {path: 'adminprofile', component: Adminprofile}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
