import { NgModule, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PersonasApiComponent } from './components/personasapi-component/personasapi-component';
import { PersonasService } from './services/personas-service';
import { PersonasStandaloneComponent } from './components/personas-standalone-component/personas-standalone-component';
import { CochesService } from './services/coches-service';
import { CochesComponent } from './components/coches-component/coches-component';
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';
import { PlantillaService } from './services/plantilla-service';
import { HeaderComponent } from './components/header-component/header-component';
import { HomeComponent } from './components/home-component/home-component';
import { FormsModule } from '@angular/forms';
import { PlantillaFuncionMultiple } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple';


@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    CochesComponent,
    PlantillaFuncionSimple,
    HeaderComponent,
    HomeComponent,
    PlantillaFuncionMultiple,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandaloneComponent,
    FormsModule,
  ],
  providers: [
    PersonasService,
    CochesService,
    PlantillaService,
    { provide: LOCALE_ID, useValue: 'es-ES' },
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }

// Register Spanish locale data so pipes (currency, date, number) use the es-ES format
registerLocaleData(localeEs);
