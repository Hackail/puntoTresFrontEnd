import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  persona:Persona = new Persona();
  personaNueva:Persona;

  constructor(private service:ServiciosService, private router:Router) { }

  ngOnInit(): void {
  }

  crearPersona() {
    this.service.crearPersona(this.persona)
    .subscribe(data => {
      this.personaNueva = data;
      if (data) {
        alert("Se creó correctamente la persona")
        this.router.navigate(["listar"])
      }else {
        alert("La persona que intenta crear ya existe en la base de datos")
      }
    })
  }

}
