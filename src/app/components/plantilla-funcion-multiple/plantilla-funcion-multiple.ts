import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sanitario } from '../../models/Sanitario';
import { PlantillaService } from '../../services/plantilla-service';

@Component({
  selector: 'app-plantilla-multiple',
  standalone: false,
  templateUrl: './plantilla-funcion-multiple.html',
  styleUrl: './plantilla-funcion-multiple.css',
})
export class PlantillaFuncionMultiple implements OnInit {
  public plantilla: Array<Sanitario>;
  public funciones!: Array<string>;
  public selectedFunciones: Array<string>;

  constructor(private _service: PlantillaService) {
    this.plantilla = new Array<Sanitario>();
    this.selectedFunciones = new Array<string>();
  }

  @ViewChild('selectfuncion') selectFuncion!: ElementRef;

  ngOnInit(): void {
    this._service.getFunciones().then((response) => {
      this.funciones = response;
    });
  }

  mostrarPlantillaporFunciones(): void {
    let aux = new Array<string>();

    for (var opt of this.selectFuncion.nativeElement.options) {
      if (opt.selected) {
        aux.push(opt.value);
      }
    }
    this._service.getPlantillaByFuncionesPromise(aux).subscribe((response) => {
      this.plantilla = response;
    });

  }
}
