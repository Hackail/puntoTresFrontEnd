import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.css']
})
export class PersonaCardComponent implements OnInit {

  @Input('init')
  numDocument:string;
  
  persona:Persona;

  constructor(private service:ServiciosService) { }



  ngOnInit(): void {
    let params = new HttpParams();
    params = params.append('numDocument', this.numDocument);
    this.service.getPersona(params)
    .subscribe(data => {
      this.persona = data;
    })

  }

}
