export class Quote {
    showDetails:boolean;
    constructor(
        public aQuote:string, 
        public author:string,
        public iSubmit:string,
        
        public upVote:number,
        public downVote:number,
        public dayOfPosting: Date

    )
    {
      this.showDetails=false;
    }
}
