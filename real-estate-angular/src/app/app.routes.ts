import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Projects } from './components/projects/projects';
import { Buildings } from './components/buildings/buildings';
import { Units } from './components/units/units';
import { Rawmaterials } from './components/rawmaterials/rawmaterials';
import { Floors } from './components/floors/floors';

export const routes: Routes = [
    {path: 'dashboard', component: Dashboard},
    {path: 'projects', component: Projects},
    {path: 'buildings', component: Buildings},
    {path: 'floors', component: Floors},
    {path: 'units', component: Units},
    {path: 'rawmaterials', component: Rawmaterials},
];
