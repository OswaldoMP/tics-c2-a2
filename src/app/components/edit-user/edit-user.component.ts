import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { User } from '../../models/user'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public idUser:any;
  public dataUser : any = [];
  public user:any;

  @Output() update = new EventEmitter<number>();

  constructor(private api:ApiService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { this.user = new User();}

  ngOnInit() {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id')
    this.getTarea(this.idUser)
  }

  public getId(id:any){
    this.api.getUserId(id).subscribe(data=>{
      this.user = data
    },
    erro=>{
      console.log(erro)
    })
  }

  public updateUser(id:any){
    this.api.update(id,this.user).subscribe(data=>{
      this.router.navigate(['/users'])
      alert("Save successful");
    },erro=>{
      console.log(erro)
    })
  }

  public storeTarea(){
    this.user.itinerario_id = this.idUser
    this.api.storeTarea(this.user).subscribe(data=>{
      console.log('TAREA => ', data)
      this.getTarea(this.idUser)
    })
  }

  public getTarea(id:any){
    this.api.getListaActividad(id).subscribe(data=>{
      console.log('Tareas User => ',data)
      this.dataUser = data
    })
  }

  public deleteTarea(id:any){
    this.api.deleteTarea(id).subscribe(data=>{
      console.log(data)
      this.getTarea(this.idUser)
    })
  }


  public login(){
    this.api.login(this.user)
  }




}
