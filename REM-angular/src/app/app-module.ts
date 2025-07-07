import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Viewprojects } from './components/projects/viewprojects/viewprojects';
import { Addprojects } from './components/projects/addprojects/addprojects';
import { Editprojects } from './components/projects/editprojects/editprojects';
import { Editbuildings } from './components/buildings/editbuildings/editbuildings';
import { Addbuildings } from './components/buildings/addbuildings/addbuildings';
import { Viewbuildings } from './components/buildings/viewbuildings/viewbuildings';
import { Viewfloors } from './components/floors/viewfloors/viewfloors';
import { Addfloors } from './components/floors/addfloors/addfloors';
import { Editfloors } from './components/floors/editfloors/editfloors';
import { Viewunits } from './components/units/viewunits/viewunits';
import { Addunits } from './components/units/addunits/addunits';
import { Editunits } from './components/units/editunits/editunits';
import { Dashboard } from './components/others/dashboard/dashboard';
import { Header } from './components/others/header/header';
import { Footer } from './components/others/footer/footer';
import { Home } from './components/pages/home/home';
import { Products } from './components/pages/products/products';
import { Addrawmaterials } from './components/rawmaterials/addrawmaterials/addrawmaterials';
import { Viewrawmaterials } from './components/rawmaterials/viewrawmaterials/viewrawmaterials';
import { Editrawmaterials } from './components/rawmaterials/editrawmaterials/editrawmaterials';
import { Viewstages } from './components/stages/viewstages/viewstages';
import { Addstages } from './components/stages/addstages/addstages';
import { Editstages } from './components/stages/editstages/editstages';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Viewprojects,
    Addprojects,
    Editprojects,
    Editbuildings,
    Addbuildings,
    Viewbuildings,
    Viewfloors,
    Addfloors,
    Editfloors,
    Viewunits,
    Addunits,
    Editunits,
    Dashboard,
    Header,
    Footer,
    Home,
    Products,
    Addrawmaterials,
    Viewrawmaterials,
    Editrawmaterials,
    Viewstages,
    Addstages,
    Editstages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
