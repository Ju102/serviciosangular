import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personasapi-component/personasapi-component';
import { PersonasService } from './services/personas-service';
import { PersonasStandaloneComponent } from './components/personas-standalone-component/personas-standalone-component';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandaloneComponent
  ],
  providers: [
    PersonasService,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
