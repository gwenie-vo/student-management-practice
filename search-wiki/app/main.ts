import {bootstrap} from 'angular2/platform/browser';
import {WikiComponent} from './wiki.component';
import {Jsonp, URLSearchParams, HTTP_PROVIDERS} from 'angular2/http';
import {Observable}       from 'rxjs/Rx';

bootstrap(WikiComponent, [HTTP_PROVIDERS]);
