import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';
import { CochesComponent } from './components/coches-component/coches-component';
import { PersonasApiComponent } from './components/personasapi-component/personasapi-component';
import { PlantillaFuncionMultiple } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "personas", component: PersonasApiComponent},
  {path: "coches", component: CochesComponent},
  {path: "plantillasimple", component: PlantillaFuncionSimple},
  {path: "plantillamultiple", component: PlantillaFuncionMultiple}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
