import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UserComponent} from '../app/components/user/user.component';
import { CreateUserComponent } from '../app/components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

const routes: Routes = [
  {path:'users', component:UserComponent},
  {path:'createUser',component:CreateUserComponent},
  {path:'editUser/:id', component:EditUserComponent},
  {path:'login',component:DeleteUserComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
