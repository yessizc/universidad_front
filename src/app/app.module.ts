import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './user/listar/listar.component';
import { AgregarComponent } from './user/agregar/agregar.component';
import { EditarComponent } from './user/editar/editar.component';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from'@angular/forms';
import{ServiceService} from'../app/Service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
