import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {QuotesComponent} from "./components/quotes/quotes.component";
import {NewQuoteComponent} from "./components/new-quote/new-quote.component";

const routes:Routes = [
    {'path': '', component: QuotesComponent},
    {'path': 'new-quote', component: NewQuoteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
