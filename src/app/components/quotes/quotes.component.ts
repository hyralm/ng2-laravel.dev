import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {Quote} from '../../interfaces/quote';
import {QuoteService} from '../../services/quote.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes:Quote[];
    quotesIsEmpty = false;

    constructor(private quoteService:QuoteService) {
    }

    ngOnInit() {
        this.getQuotes();
    }

    getQuotes() {
        this.quoteService.getQuotes()
            .subscribe(
                (quotes:Quote[]) => {
                    this.quotes = quotes;
                    this.quotesIsEmpty = this.quotes.length > 0 ? false : true;
                },
                (error:Response) => console.log(error)
            );
    }

    onDeleted(quote:Quote) {
        const position = this.quotes.findIndex(
            (quoteEl:Quote) => quoteEl.id == quote.id
        );
        this.quotes.splice(position, 1);
    }

}
