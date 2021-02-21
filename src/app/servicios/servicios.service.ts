import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  url:string = environment.endpoint;

  constructor(private http:HttpClient) { }

  getListaPersonas() {
    return this.http.get<Persona[]>(`${this.url}/listar`)
  }

  getPersona(params:HttpParams){
    return this.http.get<Persona>(`${this.url}/buscarPorId`,{responseType: 'json', params})
  }

  crearPersona(persona:Persona){
    return this.http.post<Persona>(`${this.url}/crear`, persona)
  }
    
}
