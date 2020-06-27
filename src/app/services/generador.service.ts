import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Url } from '../model/url';

@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

  urlBackend: string;

  constructor(private http: HttpClient) {
    this.urlBackend = 'https://url-shorter-apirest.herokuapp.com/api';
  }

  generarUrl(url: Url): Observable<Url> {
    return this.http.post(`${this.urlBackend}/generar`, url).pipe(
      map( res => res as Url )
    );
  }

  obtenerUrl(shortUrl: string): Observable<Url> {
    let params = new HttpParams();
    params = params.append("shortUrl", shortUrl);
    return this.http.get(`${this.urlBackend}/url`, {params: params}).pipe(
      map(res => res as Url)
    );
  }
}
