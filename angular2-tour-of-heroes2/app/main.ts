import {bootstrap} from 'angular2/platform/browser'
bootstrap(AppComponent);
// Injecting services in bootstrap works but is discouraged
bootstrap(AppComponent, [HeroService]);

