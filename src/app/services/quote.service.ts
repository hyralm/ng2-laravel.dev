import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

import {environment} from '../../environments/environment';

@Injectable()
export class QuoteService {

    constructor(private http:Http) {
    }

    addQuoute(content:string) {
        const body = JSON.stringify({content: content});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(environment.apiBaseUrl + 'api/quotes', body, {headers: headers})
            .map(
                (response:Response) => response.json()
            );
    }

    getQuotes():Observable<any> {
        return this.http.get(environment.apiBaseUrl + 'api/quotes')
            .map(
                (response:Response) => {
                    return response.json().quotes;
                }
            );
    }

    updateQuote(id:number, newContent:string) {
        const body = JSON.stringify({content: newContent});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(environment.apiBaseUrl + 'api/quotes/' + id, body, {headers: headers})
            .map(
                (response:Response) => response.json()
            );
    }

    deleteQuote(id:number) {
        return this.http.delete(environment.apiBaseUrl + 'api/quotes/' + id)
            .map(
                (response:Response) => response.json()
            );
    }

}
