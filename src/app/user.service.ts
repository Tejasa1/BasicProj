import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  flag:any;
  

  constructor(private http: HttpClient) { }


  getUsers():any{
    return this.http.get("http://localhost:8081/users");

  }

  createUser(user:User):void{
    
  }

  ValidateUser(user:any) {

    this.flag = this.http.put("http://localhost:8081/check", user)
    .subscribe( (response: any) =>{
      user=response;
      console.log(response);
    })

    return this.flag;

  }
 
  

 


}
