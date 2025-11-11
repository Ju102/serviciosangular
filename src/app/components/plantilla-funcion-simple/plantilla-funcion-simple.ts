import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sanitario } from '../../models/Sanitario';
import { PlantillaService } from '../../services/plantilla-service';

@Component({
  selector: 'app-plantilla',
  standalone: false,
  templateUrl: './plantilla-funcion-simple.html',
  styleUrl: './plantilla-funcion-simple.css',
})
export class PlantillaFuncionSimple implements OnInit {
  public plantilla: Array<Sanitario>;
  public funciones!: Array<string>;

  constructor(private _service: PlantillaService) {
    this.plantilla = new Array<Sanitario>();
  }

  @ViewChild('selectfuncion') selectFuncion!: ElementRef;

  ngOnInit(): void {
    this._service.getFunciones().then((response) => {
      this.funciones = response;
    });
  }

  mostrarPlantillaporFuncion(): void {
    let funcion = this.selectFuncion.nativeElement.value;
    if (funcion != "-1") {
      this._service.getPlantillaByFuncion(this.selectFuncion.nativeElement.value).then((response) => {
        this.plantilla = response;
      });
    } else {
      this.plantilla = [];
      alert("Seleccione una función válida");
    }
  }
}