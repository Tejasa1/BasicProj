
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }

  users:any;



  public display():void{
   
    this.service.getUsers()
    .subscribe( (response: any) =>{
      this.users=response;
      console.log(response);
    }
    );
  }
  

}
