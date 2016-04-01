import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams, Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp, private http: Http) {}
  search (term: string) {
    // let wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein';
    let wikiUrl = 'https://en.wikipedia.org/w/api.php';
    var params = new URLSearchParams();
    params.set('srsearch', term); // the user's search value
    params.set('action', 'query');
    params.set('format', 'json');
    params.set('list', 'search');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(wikiUrl, { search: params })
    ;
  }
}
