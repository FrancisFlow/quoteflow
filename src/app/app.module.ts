import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightHighestVoteDirective } from './highlight-highest-vote.directive';
import { NewQuoteFormComponent } from './new-quote-form/new-quote-form.component';
import { DaysPassedPipe } from './days-passed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    HighlightHighestVoteDirective,
    NewQuoteFormComponent,
    DaysPassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
