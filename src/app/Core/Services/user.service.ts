import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserModule } from 'src/app/user/user.module';

@Injectable(
  
)
export class UserService {
 
  URL="http://localhost:3000/users"
  httpOption={
    headers : new HttpHeaders({
      'Content-type' :'application/json'
    })
  }
  
 constructor(private http:HttpClient){}
  getAllUsers(){
    return this.http.get<User[]>(this.URL);
  }


  addUser(u:User){
    return this.http.post(this.URL,u)
  }

  updateUser(id:number, u:User){}

  getUserById(id:number){
    
  }

}
