import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Zona } from './zona';

@Injectable()
export class ZonasService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private url = 'api/zonas';  // URL to web api
    //private url = 'http://localhost:6346/api/Evento/Zona/'

    constructor(private http: Http) { }

    //--> Tipo de sensores <--
    getZonas(lat: number, lon: number): Promise<Zona[]> {
        const url = `${this.url}cityLat/${lat}/cityLon/${lon}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Zona[])
            .catch(this.handleError);
    }

    getZona(lat: string, lon: string): Promise<Zona> {
        const url = `${this.url}/${lat}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Zona)
            .catch(this.handleError);
    }

    //Todas las zonas, agregado para rias.
    getAllZonas(): Promise<Zona[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as Zona[])
            .catch(this.handleError);
    }

    getPlaces(): Observable<any> {
        console.log("ATES DE");
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCVOAuarlU-eZpS_Ex0DAotelt2M0yOEn8'
        return this.http.get(url).map((res: any) => {
            console.log(res);
        });
    }

    getPlaces2(): Promise<any> {
        console.log("ATES DE");
        //const url = `${this.url}cityLat/${lat}/cityLon/${lon}/`
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCVOAuarlU-eZpS_Ex0DAotelt2M0yOEn8'
        return this.http.get(url).toPromise().then((res: any) => {
            res.json().data
            console.log(res);
        });
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    setZona(nurevaZona: Zona): Promise<Zona> {
        return this.http
            .post(this.url, JSON.stringify(nurevaZona), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Zona)
            .catch(this.handleError);
    }

    update(zona: Zona): Promise<Zona> {
        const url = `${this.url}/${zona.Latitude}`;
        return this.http
            .put(url, JSON.stringify(zona), { headers: this.headers })
            .toPromise()
            .then(() => zona)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}