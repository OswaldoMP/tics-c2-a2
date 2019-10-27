import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service'
import { FormBuilder, FormsModule } from '@angular/forms';
import { User } from '../../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public dataUser : User;

  constructor(
    private api:ApiService,
    private route:Router) { this.dataUser = new User();}


  
  // private fb: FormBuilder
  ngOnInit() {
  }


  public store(){
    this.api.store(this.dataUser).subscribe(data=>{
      this.route.navigate(["/users"])
      alert("Save successful")
    },error=>{
      console.log(error)
    })

  }

}




