import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { environment } from '../../environments/environment.development';

@Injectable()
export class PersonasService {

    // Para poder realizar decisiones, necesitamos el objeto HttpClient, el cual debemos inyectar en las clases utilizadas con APIs
    constructor(private _http: HttpClient) { }

    // Si vamos a devolver la petición, el objeto a devolver es un observable<any>, para poder suscribirnos.
    getPersonas(): Observable<any> {

        // Uso de Global.ts
        let url = Global.personasAPI;
        let request = "api/personas";
        return this._http.get(url + request);
    }

    getPersonasPromise(): Promise<any> {

        // Uso de environment
        let url = environment.apiPersonas;
        let request = "api/personas";
        let promise = new Promise((resolve) => {
            this._http.get(url + request).subscribe((response) => {
                resolve(response);
            });
        });
        return promise;
    }
}