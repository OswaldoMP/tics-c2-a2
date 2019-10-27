import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any = [];

  @Output() delete = new EventEmitter<number>();

  constructor(private api:ApiService) { this.getUserAll();}

  ngOnInit() {
    this.getUserAll();
  }

  public getUserAll(){
    this.api.getUserAll()
    .subscribe((data)=>{
      this.users = data['data']
      console.log(this.users)
    }),
    (error) => {
      console.error(error);
    };
  }

  public deleteUser(id:number){
    console.log('userId: ' + id)
    this.api.deleteUser(id).subscribe(data=>{
      this.getUserAll();
    })
    // this.delete.emit(id)
  }

}
