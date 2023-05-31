import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User } from '../Modelo/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor(private http:HttpClient) { }

  url='http://localhost:8080/User/ListarUser';

  getUser(){
    return this.http.get<User[]>(this.url);
  }
}
