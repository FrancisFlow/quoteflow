import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]= [
    new Quote("The only limit to our realization of tomorrow will be our doubts today", "Franklin D. Rosavlete", "Daniel Roth", 0, 0, new Date(2020, 12, 5)),
    new Quote("Some people look for a beautiful place. Others make a beautiful place", "~anonymous", "Kennedy Kamiro", 8, 0, new Date(2021, 4, 20)),
    new Quote("Keep your face to the sunshine and you cannot see a shadow", "Hellen Keller", "Walter Whitman", 9, 0, new Date(2021, 5, 23)),
    new Quote("Nobody ever wrote a plan to be broke, fat, lazy or stupid. those things ae what happen when you don't have a plan", "Larry Winget", "Michelle Muthoni", 0, 0, new Date(2021, 7, 22)),
    new Quote("A single grain of rice can tip the scale", "Emperor", "Faith Kamau", 0, 0, new Date(2021, 8, 22)),
    new Quote("No matter how the wind howls, the mountain cannot bow to it", "Mula", "Disney Okumu", 3, 0, new Date(2021, 3, 16))
  ];


  // addNewQuote logic

addNewQuote(newQuote:Quote){
 this.quotes.push(newQuote);
}

  // toggle between show and hide description

  toggleDetails(index: number) {
    this.quotes[index].showDetails= !this.quotes[index].showDetails;
  }

//  deleteGoal

deleteGoal(yesDelete:boolean, index:number) {
  if(yesDelete) {
    let reallyDelete = confirm(
    `Are you sure you want to delete
    "${this.quotes[index].aQuote}"?`)
    if(reallyDelete) {
      this.quotes.splice(index, 1)
    }
  }
}

// upTheVote
 upTheVote(upVote:boolean, index:number) {
   if(upVote) {
   this.quotes[index].upVote++
   }

 }
// downTheVote

 downTheVote(downVote:boolean, index:number){
   if(downVote){
      this.quotes[index].downVote++ 
 }
}


// highest upvote

highestUpVote() {
  let highArray=[];

  for(let i = 0; i<this.quotes.length; i++) {
     highArray.push(this.quotes[i].upVote);
  }
  let highestVote = Math.max(...highArray);
  return highestVote;
}

  constructor() { }

  ngOnInit(): void {
  }

}
