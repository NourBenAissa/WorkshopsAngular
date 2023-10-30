import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/model/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private Router:Router, private userS:UserService){}

  user:User={
      "idCustomer": 6,
      "firstName": "shayma",
      "lastName": " ettaieb",
      "birthDate": "2001-01-20",
      "accountCategory": "Customer",
      "email": "shayma.ettaieb@esprit.tn",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar6.png",
      "profession": "Software Engineer"
  }


  /*add(){
    this.userS.addUser(this.user).subscribe(
    ()=>{alert('added seccesfully!!');
    this.Router.navigate(['listusers']);}
    );
  }*/

  add(F:NgForm){
    console.log(F);
  }

}