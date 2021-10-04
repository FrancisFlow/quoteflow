import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightHighestVote]'
})
export class HighlightHighestVoteDirective {

  constructor(private elem:ElementRef)
{this.elem.nativeElement.style.backgroundColor= " turquoise "; }
}

