import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http'
import { ReturnStatement } from '@angular/compiler';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  urlApi = 'http://localhost:49163/api/v1/users/';

  constructor(
    private http:HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getUserAll(){
    return this.http.get(this.urlApi)
  }

  public store(data:any): Observable<any>{
    return this.http.post<any>(this.urlApi,JSON.stringify(data),this.httpOptions)
  }

  public getUserId(id:any): Observable<User>{
    return this.http.get<User>(this.urlApi+id)
  }

  public deleteUser(id:any){
    return this.http.delete(this.urlApi+id,this.httpOptions)
  }

  public update(id:any,data:User): Observable<User>{
    return this.http.put<User>(this.urlApi+id,JSON.stringify(data),this.httpOptions)
  }

}




