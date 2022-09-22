import { Component, OnInit } from '@angular/core';
import { Movie } from './Movie';

@Component({
  // selector: 'app-testing',
  // templateUrl: './testing.component.html',
  // styleUrls: ['./testing.component.css']


  

  // selector: 'ng-if-else',
  // template:`<br>
  //       <button (click)="show = !show" >{{show ? 'hide' : 'show'}}</button>  
  //       <br>
  //       show={{show}}
  //       <br>
  //       <div *ngIf="show; else elseBlock">show text</div>
  //       <ng-template #elseBlock>cannot show this</ng-template>
  // `

  
selector: 'movie-app',
templateUrl: './testing.component.html'




})
export class TestingComponent implements OnInit {

  movies: Movie[] =[  
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
    {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
]  

title:String="Movies";
  show:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
