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
  public user:User;

  @Output() update = new EventEmitter<number>();

  constructor(private api:ApiService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { this.user = new User();}

  ngOnInit() {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id')
    this.getId(this.idUser)
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

}
