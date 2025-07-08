import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './components/dashboard/dashboard';
import { Addprojects } from './components/projects/addprojects/addprojects';
import { Editprojects } from './components/projects/editprojects/editprojects';
import { Listprojects } from './components/projects/listprojects/listprojects';
import { Viewprojects } from './components/projects/viewprojects/viewprojects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Dashboard,
    Addprojects,
    Editprojects,
    Listprojects,
    Viewprojects
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
