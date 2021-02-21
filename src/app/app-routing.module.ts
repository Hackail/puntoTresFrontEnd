import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { ListarComponent } from './componentes/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'buscar', component: BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
