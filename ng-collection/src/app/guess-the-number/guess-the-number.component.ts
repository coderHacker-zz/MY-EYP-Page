import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcollection',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent implements OnInit {
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor() {
    this.ngOnInit();
   }

  ngOnInit() {
    this.noOfTries = 0; 
    this.original = Math.floor((Math.random() * 1000) + 1); 
    this.guess = null; 
    this.deviation = null;
  }
  verifyGuess(){
    this.deviation = this.original - this.guess; 
    this.noOfTries = this.noOfTries + 1;
  }

}
