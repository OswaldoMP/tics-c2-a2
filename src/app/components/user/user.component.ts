import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any = [];

  @Output() delete = new EventEmitter<number>();

  constructor(private api:ApiService,private router:Router
    ) { }

  ngOnInit() {
    // this.getUserAll();
    this.getItinerario();
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
    this.api.deleteItinerario(id).subscribe(data=>{
      this.getItinerario();
    })
    // this.delete.emit(id)
  }

  //recuperacio y mostrar los itinerarios del usuario
  public getItinerario(){
    this.api.getListaItinerario(localStorage.getItem('idUser')).subscribe(data=>{
      console.log('Itinerario User: ',data)
      this.users = data;
    })
  }

  public fin(){
    localStorage.setItem('idUser','-1')
    this.router.navigate(['/login'])
  }
  


}
