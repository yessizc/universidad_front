import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'universidad';


  constructor(private router:Router){}

  listar(){
    this.router.navigate(["listar"]);
  }

  agregar(){
    this.router.navigate(["agregar"]);
  }
}
