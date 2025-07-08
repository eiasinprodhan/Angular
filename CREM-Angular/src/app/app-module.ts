import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Addprojects } from './components/projects/addprojects/addprojects';
import { Editprojects } from './components/projects/editprojects/editprojects';
import { Listprojects } from './components/projects/listprojects/listprojects';
import { Viewprojects } from './components/projects/viewprojects/viewprojects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dashboard } from './components/others/dashboard/dashboard';
import { Header } from './components/others/header/header';
import { Footer } from './components/others/footer/footer';
import { Addbuildings } from './components/buildings/addbuildings/addbuildings';
import { Editbuildings } from './components/buildings/editbuildings/editbuildings';
import { Viewbuildings } from './components/buildings/viewbuildings/viewbuildings';
import { Listbuildings } from './components/buildings/listbuildings/listbuildings';

@NgModule({
  declarations: [
    App,
    Addprojects,
    Editprojects,
    Listprojects,
    Viewprojects,
    Dashboard,
    Header,
    Footer,
    Addbuildings,
    Editbuildings,
    Viewbuildings,
    Listbuildings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
