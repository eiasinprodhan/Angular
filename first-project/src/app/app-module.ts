import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Allemployees } from './allemployees/allemployees';
import { Addemployee } from './addemployee/addemployee';
import { Contactus } from './contactus/contactus';
import { Aboutus } from './aboutus/aboutus';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Updateemployee } from './updateemployee/updateemployee';
import { Addlocation } from './addlocation/addlocation';
import { Updatelocation } from './updatelocation/updatelocation';
import { Viewalllocation } from './viewalllocation/viewalllocation';
import { Registration } from './registration/registration';
import { Login } from './login/login';

@NgModule({
  declarations: [
    App,
    Home,
    Allemployees,
    Addemployee,
    Contactus,
    Aboutus,
    Header,
    Footer,
    Updateemployee,
    Addlocation,
    Updatelocation,
    Viewalllocation,
    Registration,
    Login,
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
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
