import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './user/listar/listar.component';
import { AgregarComponent } from './user/agregar/agregar.component';
import { EditarComponent } from './user/editar/editar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'editar',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
