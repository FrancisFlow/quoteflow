import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes:Quote[]= [
    new Quote("The only limit to our realization of tomorrow will be our doubts today", "Franklin D. Rosavlete", "Daniel Roth"),
    new Quote("Some people look for a beautiful place. Others make a beautiful place", "~anonymous", "Kennedy Kamiro"),
    new Quote("Keep your face to the sunshine and you cannot see a shadow", "Hellen Keller", "Walter Whitman"),
    new Quote("Nobody ever wrote a plan to be broke, fat, lazy or stupid. those things ae what happen when you don't have a plan", "Larry Winget", "Michelle Muthoni"),
    new Quote("A single grain of rice can tip the scale", "Emperor", "Faith Kamau"),
    new Quote("No matter how the wind howls, the mountain cannot bow to it", "Mula", "Disney Okumu")
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
