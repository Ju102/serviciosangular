import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Sanitario } from "../models/Sanitario";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PlantillaService {
    constructor(private _http: HttpClient) { }

    getPlantillaByFuncion(funcion: string): Promise<Array<Sanitario>> {
        let request = "api/Plantilla/PlantillaFuncion/" + funcion;
        let url = environment.apiPlantilla + request;
        return new Promise((resolve) => {
            fetch(url).then((response) => {
                resolve(response.json());
            })
        })
    }

    getFunciones(): Promise<Array<string>> {
        let request = "api/plantilla/funciones/";
        let url = environment.apiPlantilla + request;

        return new Promise((resolve) => {
            fetch(url).then((response) => {
                resolve(response.json());
            })
        })
    }

    getPlantillaPromise(): Promise<Array<Sanitario>> {
        let request = "api/plantilla/";
        let url = environment.apiPlantilla + request;

        return new Promise((resolve) => {
            fetch(url).then((response) => {
                resolve(response.json());
            })
        });
    }

    getPlantillaByFuncionesPromise(funciones: Array<string>): Observable<Array<Sanitario>> {

        let request = "api/Plantilla/PlantillaFunciones?";
        let data = "";

        for (var funcion of funciones) {
            data += "funcion=" + funcion + "&";
        }
        data.substring(0, data.length - 1);
        request += data;

        let url = environment.apiPlantilla + request;

        return this._http.get<Array<Sanitario>>(url);

    }
}