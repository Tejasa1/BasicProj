import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes : Router, private service : UserService) {
    
   }

  ngOnInit(): void {
  }

  
  username=""
  password=""
  isvalid : boolean=false;
  user : any;

  validate():void{

     this.user= {
      "username":this.username,
      "password":this.password

    }

this.isvalid = this.service.ValidateUser(this.user)
    if(this.isvalid==true){
      console.log("valid user");
      this.routes.navigateByUrl("/display");
      
    }
    else{
      console.log("invalid user");
      this.routes.navigateByUrl("/register");
    }
  }

}

