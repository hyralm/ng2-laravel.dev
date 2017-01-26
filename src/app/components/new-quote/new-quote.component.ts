import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {QuoteService} from '../../services/quote.service';

@Component({
    selector: 'app-new-quote',
    templateUrl: './new-quote.component.html',
    styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

    constructor(private quoteService:QuoteService) {
    }

    ngOnInit() {
    }

    onSubmit(form:NgForm) {
        this.quoteService.addQuoute(form.value.content)
            .subscribe(
                (quote:any) => console.log(`Quote "${quote.quote.content}" has beed added.`)
            );
        form.reset();
    }

}
