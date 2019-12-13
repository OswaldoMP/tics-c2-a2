import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http'
import { ReturnStatement } from '@angular/compiler';
import { Observable, ObservedValueOf } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // urlApi = 'http://localhost:49163/api/v1/users/';
  urlApi = 'https://tic-soa-extra.herokuapp.com/api/v1';

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

  //obtener los itinerarios del usuario
  public getListaItinerario(id:any):Observable<any>{
    return this.http.get<any>(this.urlApi+'/users/'+id)
  }

  //obtener las tareas, actividades del itinerario del usuario
  public getListaActividad(id:any):Observable<any>{
    return this.http.get<any>(this.urlApi+'/itinerarios/'+id)
  }

  //actualizar Actividades
  public updateActivida(id:any,data:any):Observable<any>{
    return this.http.put<any>(this.urlApi+'/tareas/'+id,JSON.stringify(data),this.httpOptions)
  }

  //actualizar Tareas
  public updateTarea(id:any, data:any):Observable<any>{
    return this.http.put<any>(this.urlApi+'/tareas/'+id,JSON.stringify(data),this.httpOptions)
  }

  //create user
  public storeUser(data:any):Observable<any>{
    return this.http.post<any>(this.urlApi+'/users/',JSON.stringify(data),this.httpOptions)
  }

  //create Itinerario
  public storeItinerario(data:any):Observable<any>{
    return this.http.post<any>(this.urlApi+'/itinerarios',JSON.stringify(data),this.httpOptions)
  }

  //create Tarea
  public storeTarea(data:any):Observable<any>{
    return this.http.post<any>(this.urlApi+'/tareas',JSON.stringify(data),this.httpOptions)
  }

  public deleteItinerario(id:any){
    return this.http.delete(this.urlApi+'/itinerarios/'+id)
  }

  public deleteTarea(id:any){
    return this.http.delete(this.urlApi+'/tareas/'+id)
  }

  public login(data:any):Observable<any>{
    return this.http.post<any>(this.urlApi+'/login',JSON.stringify(data),this.httpOptions)
  }

}




