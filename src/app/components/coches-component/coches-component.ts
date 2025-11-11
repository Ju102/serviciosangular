import { Component, OnInit } from '@angular/core';
import { Coche } from '../../models/Coche';
import { CochesService } from '../../services/coches-service';

@Component({
  selector: 'app-coches',
  standalone: false,
  templateUrl: './coches-component.html',
  styleUrls: ['./coches-component.css'],
})
export class CochesComponent implements OnInit {

  public coches!: Array<Coche>;

  constructor(private _service: CochesService) { }

  ngOnInit(): void {
    this._service.getCochesPromise().then((response) => {
      this.coches = response;
    })
  }
}
