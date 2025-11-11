import { Injectable } from "@angular/core";
import { Coche } from "../models/Coche";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class CochesService {
    constructor(private _http: HttpClient) { }

    getCochesHttp(): Observable<Array<Coche>> {
        let request = "webresources/coches/";
        let url = environment.apiCoches + request;

        return this._http.get<Array<Coche>>(url);
    }

    getCochesPromise(): Promise<Array<Coche>> {
        let request = "webresources/coches/";
        let url = environment.apiCoches + request;

        return new Promise((resolve) => {
            fetch(url).then(response => {
                // Convertir la respuesta a JSON
                resolve(response.json());
            })
        });
    };
}