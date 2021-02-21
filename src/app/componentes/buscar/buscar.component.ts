import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  persona: Persona;
  numDocument: number;
  mostrarTabla:boolean = false;

  constructor(private service:ServiciosService, private router:Router) { }

  ngOnInit(): void {

  }

  buscar() {
    let params = new HttpParams();
    params = params.append('numDocument', this.numDocument.toString());
    this.service.getPersona(params)
    .subscribe(data => {
      this.persona = data;
      if (this.persona != null) {
        this.mostrarTabla=true;
      }else {
        this.mostrarTabla=false;
        alert("El número de documento por el que hace la búsqueda no se encuentra en nuestra base de datos")
      }
    })
    //this.router.navigate(["persona"]);
  }

}
