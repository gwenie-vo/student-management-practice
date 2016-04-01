import {Component}        from 'angular2/core';
import {JSONP_PROVIDERS}  from 'angular2/http';
import {Observable}       from 'rxjs/Rx';

import {WikipediaService} from './wikipedia.service';

@Component({
	selector: 'my-app',
  template: `
    <div class="container">
      <h1>Wikipedia Search Practice</h1>

      <p><i>Fetches after each keystroke</i></p>

      <input #term />
      <button (click)="search(term.value)" type="button" class="btn btn-default">Search</button>

      <ul>
        <li *ngFor="#item of items">
          {{item.title}}
          <pre>{{item.snippet}}</pre>
        </li>
      </ul>
    </div>
  `,
  providers: [JSONP_PROVIDERS, WikipediaService],
  styles: [`
    .container {
      width: 80%;
      margin: 0 auto;
    }
  `]
})

export class WikiComponent {
  constructor(private _wikipediaService: WikipediaService) { }
  items: any[];
  search(term: string) {
    this._wikipediaService.search(term).subscribe(data => {
      console.log("DATA:", data);
      let dataJson = data.json();
      if (dataJson && dataJson.query){
        this.items = dataJson.query.search;
      } else{
        this.items = [];
      }

    });
  }
}
