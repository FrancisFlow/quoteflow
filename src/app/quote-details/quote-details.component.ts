import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quote;
  // quote is the property that will undergo input property binding.
  @Output() yesDelete= new EventEmitter<boolean>();

  iWantToDelete(Delete:boolean) {
    this.yesDelete.emit(Delete);
  
  }
@Output() upVote= new EventEmitter<boolean>();

  upVoteMe(up: boolean) {
        this.upVote.emit(up);
      }

@Output() downVote= new EventEmitter<boolean>();

  downVoteMe(down:boolean) {
      this.downVote.emit(down);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
