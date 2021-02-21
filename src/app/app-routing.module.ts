import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { PersonaCardComponent } from './componentes/persona-card/persona-card.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'persona', component: PersonaCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
