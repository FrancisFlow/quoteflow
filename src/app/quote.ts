export class Quote {
    showDetails:boolean;
    constructor(
        public aQuote:string, 
        public author:string,
        public iSubmit:string,
        
        public upVote:number,
        public downVote:number

    )
    {
      this.showDetails=false;
    }
}
