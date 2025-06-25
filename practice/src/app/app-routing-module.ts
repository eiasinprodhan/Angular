import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './components/addstudent.component/addstudent.component';
import { ShowstudentComponent } from './components/showstudent.component/showstudent.component';
import { EditstudentComponent } from './components/editstudent.component/editstudent.component';

const routes: Routes = [
  {path: 'addstudent', component: AddstudentComponent},
  {path: '', component: ShowstudentComponent},
  {path: 'editstudent/:id', component: EditstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
