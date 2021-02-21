import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../modelos/persona';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[] = [];

  constructor(private service:ServiciosService, private router:Router) { 
  }

  ngOnInit(): void {
    this.service.getListaPersonas()
    .subscribe(data => {
      this.personas=data
    });
  }



}
