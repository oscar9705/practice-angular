import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas } from '../model/personas';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(protected http: HttpClient) {}

  getPersonas(): Observable<Personas> {
    return this.http.get<Personas>(
      'https://apimocha.com/personas-prueba' + '/personas'
    );
  }
}
