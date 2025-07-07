import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Products } from './components/pages/products/products';
import { Dashboard } from './components/others/dashboard/dashboard';
import { Viewprojects } from './components/projects/viewprojects/viewprojects';
import { Addprojects } from './components/projects/addprojects/addprojects';
import { Editprojects } from './components/projects/editprojects/editprojects';
import { Viewbuildings } from './components/buildings/viewbuildings/viewbuildings';
import { Addbuildings } from './components/buildings/addbuildings/addbuildings';
import { Editbuildings } from './components/buildings/editbuildings/editbuildings';
import { Viewfloors } from './components/floors/viewfloors/viewfloors';
import { Addfloors } from './components/floors/addfloors/addfloors';
import { Editfloors } from './components/floors/editfloors/editfloors';
import { Viewunits } from './components/units/viewunits/viewunits';
import { Addunits } from './components/units/addunits/addunits';
import { Editunits } from './components/units/editunits/editunits';
import { Viewstages } from './components/stages/viewstages/viewstages';
import { Addstages } from './components/stages/addstages/addstages';
import { Editstages } from './components/stages/editstages/editstages';
import { Viewrawmaterials } from './components/rawmaterials/viewrawmaterials/viewrawmaterials';
import { Addrawmaterials } from './components/rawmaterials/addrawmaterials/addrawmaterials';
import { Editrawmaterials } from './components/rawmaterials/editrawmaterials/editrawmaterials';


const routes: Routes = [
  {path: '', component: Home},
  {path: 'products', component: Products},
  {path: 'dashboard', component: Dashboard},
  {path: 'viewprojects', component: Viewprojects},
  {path: 'addprojects', component: Addprojects},
  {path: 'editprojects', component: Editprojects},
  {path: 'viewbuildings', component: Viewbuildings},
  {path: 'addbuildings', component: Addbuildings},
  {path: 'editbuildings', component: Editbuildings},
  {path: 'viewfloors', component: Viewfloors},
  {path: 'addfloors', component: Addfloors},
  {path: 'editfloors', component: Editfloors},
  {path: 'viewunits', component: Viewunits},
  {path: 'addunits', component: Addunits},
  {path: 'editunits', component: Editunits},
  {path: 'viewstages', component: Viewstages},
  {path: 'addstages', component: Addstages},
  {path: 'editstages', component: Editstages},
  {path: 'viewrawmaterials', component: Viewrawmaterials},
  {path: 'addrawmaterials', component: Addrawmaterials},
  {path: 'editrawmaterials', component: Editrawmaterials}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
