import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Quote} from '../../interfaces/quote';
import {QuoteService} from '../../services/quote.service';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    editing:boolean = false;
    editValue:string = '';
    @Input()
    quote:Quote;
    @Output()
    quoteDeleted = new EventEmitter<Quote>();

    constructor(private quoteService:QuoteService) {
    }

    ngOnInit() {
    }

    onEdit() {
        this.editing = true;
        this.editValue = this.quote.content;
    }

    onUpdate() {
        if (this.editValue) {
            this.quoteService.updateQuote(this.quote.id, this.editValue)
                .subscribe(
                    (quote:any) => {
                        this.quote.content = quote.quote.content;
                        this.editValue = '';
                    }
                );
            this.editing = false;
        }
    }

    onCancel() {
        this.editValue = '';
        this.editing = false;
    }

    onDelete() {
        this.quoteService.deleteQuote(this.quote.id)
            .subscribe(
                (quote:any) => {
                    this.quoteDeleted.emit(this.quote);
                    console.log(`Quote "${quote.quote.content}" has been deleted.`);
                }
            );
    }

}
