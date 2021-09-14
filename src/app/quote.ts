export class Quote {
    showiSubmit:boolean;
    constructor(
        public aQuote:string, 
        public author:string,
        public iSubmit:string,
        
        public upVote:number,
        public downVote:number

    )
    {
      this.showiSubmit=false;
    }
}
