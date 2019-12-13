import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service'
import { FormBuilder, FormsModule } from '@angular/forms';
import { User } from '../../models/user'
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public dataUser : any;
  public idUser
  constructor(
    private api:ApiService,
    private route:Router,
    private activatedRoute:ActivatedRoute) { this.dataUser = new User();}


  
  // private fb: FormBuilder
  ngOnInit() {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id')
  }


  public store(){
    this.dataUser.user_id = 1
    console.log(this.dataUser)
    this.api.storeItinerario(this.dataUser).subscribe(data=>{
      console.log('ADD',data)
      this.route.navigate(['/users'])
    })
  }

}




