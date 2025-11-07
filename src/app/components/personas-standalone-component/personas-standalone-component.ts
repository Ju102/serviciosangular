import { Component } from '@angular/core';
import { Persona } from '../../models/Persona';
import { CommonModule } from '@angular/common';
import { PersonasService } from '../../services/personas-service';

@Component({
  selector: 'app-personas-standalone',
  standalone: true,
  templateUrl: './personas-standalone-component.html',
  styleUrls: ['./personas-standalone-component.css'],
  imports: [CommonModule]
})
export class PersonasStandaloneComponent {
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
