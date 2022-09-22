import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  name="ambekar";
password="tejas123";

onclick():void{
  console.log("clicked on mouse");
}

onhover():void{
  console.log("hovered over mouse");
}


}
