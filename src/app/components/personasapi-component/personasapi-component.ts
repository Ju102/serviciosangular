import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas-service';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personas-api',
  standalone: false,
  templateUrl: './personasapi-component.html',
  styleUrl: './personasapi-component.css',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: PersonasService) { }

  ngOnInit(): void {
    // Mediante Observable
    /*
    this._service.getPersonas().subscribe(response => {
      console.log("Leyendo servicio...");
      this.personas = response;
    })
    */

    // Mediante Promise
    this._service.getPersonasPromise().then((response) => {
      this.personas = response;
    });
  }
}
