import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {QuoteComponent} from './components/quote/quote.component';
import {QuotesComponent} from './components/quotes/quotes.component';
import {NewQuoteComponent} from './components/new-quote/new-quote.component';
import {QuoteService} from './services/quote.service';

@NgModule({
    declarations: [
        AppComponent,
        QuoteComponent,
        QuotesComponent,
        NewQuoteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [QuoteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
