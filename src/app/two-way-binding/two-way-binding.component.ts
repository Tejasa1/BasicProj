import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {


  username=""
  password=""
  isvalid=""


  validate():void{
    if(this.username=="TejasAmbekar" && this.password=="tejas123"){
      this.isvalid="Valid User"
    }
    else{
      this.isvalid="Invalid User"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
