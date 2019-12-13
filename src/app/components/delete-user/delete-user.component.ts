import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  public user:any;
  constructor(private api:ApiService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {  this.user = new User();}
  private password:any

  ngOnInit() {



    }

    public login(){
      this.api.login(this.user).subscribe(data=>{
        console.log('log => ',data.user.id)
        localStorage.setItem('idUser',data.user.id)
        this.router.navigate([`/users`])
      })
    }


  








}
