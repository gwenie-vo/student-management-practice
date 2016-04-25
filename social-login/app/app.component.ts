import { Component, provide } from "angular2/core";
import { RouteConfig, Router, APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, CanActivate } from 'angular2/router';
import { HTTP_PROVIDERS, Http } from 'angular2/http';
// import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

// var FB = "C"
declare var FB: any;
declare var Auth0Lock: any;

@Component({
  selector: "my-app",
  template: `
    <button (click)="login()">Login to use the website</button>
    <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    <ul *ngIf="userProfile">
      <li>Name: {{userProfile.name}}</li>
      <li>User ID: {{userProfile.user_id}}</li>
      <li *ngIf="userProfile.gender">Gender: {{userProfile.gender}}</li>
      <li>Profile Picture: {{userProfile.picture}}</li>
    </ul>
  `
})

export class AppComponent {

  lock = new Auth0Lock('atLbLHWAQbpHMdEhk02xp8TYYXE43dYo', 'huynhvo.auth0.com');
  userProfile: Object;

  constructor() {
    // console.debug("Auth0Lock:", Auth0Lock);
  }

  login() {
    var hash = this.lock.parseHash();
    // console.log("this.lock:", this.lock);
    this.lock.show({
      connections: ['twitter', 'facebook', 'google-oauth2']
    });

    if (hash) {
      if (hash.error) {
        console.log('There was an error logging in', hash.error);
      } else {
        this.lock.getProfile(hash.id_token, (err, profile) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(profile);
          this.userProfile = profile;
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', hash.id_token);
        });
      }
    }
  }



  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    // return tokenNotExpired();
  }
}

