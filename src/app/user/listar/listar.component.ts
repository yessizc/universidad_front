import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modelo/User';
import {ServiceService} from'../../Service/service.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  users!:User[];

  constructor(private service:ServiceService, private router:Router){}

  ngOnInit()  {
    this.service.getUser()
    .subscribe(data=>{
      this.users=data;
      console.log(data);
    })
  }



}
