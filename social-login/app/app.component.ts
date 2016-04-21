import { Component, OnInit } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { ShowUserInfoComponent } from './show-user-info.component';
// var FB = "C"
declare var FB: any;
declare var twttr: any;

@Component({
  selector: "my-app",
  template: `
    <h2>Login by Facebook, Twitter, G+</h2>
    <a href="#" (click)="loginTest()" data-auto-logout-link="true" data-max-rows="1" data-size="medium" data-show-faces="true">Login by Facebook</a>

    <a href="#" (click)="doTWSignIn()">Login by Twitter</a>
    <div id="status"></div>
  `
})

export class AppComponent implements OnInit {
  /*
   * Load the app with appId
   */
  ngOnInit(){
    FB.init({
      appId: '1586800451610753',
      cookie: true,  // enable cookies to allow the server to access the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.5' // use graph api version 2.5
    });

    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
    console.log("INit");
    twttr.anywhere(T => {
      console.log("token0:", T);
      T.bind("authComplete", (e, user) => {
        var token = user.attributes._identity;
        console.log("token:", token);
        //define the login function on your client through Twitter
      });
    });
  }

  /*
   * show login form popup
   */
  loginTest(){
    // console.debug('loginTest');
    FB.login((response) => {
      this.checkLoginState();
    });
  }

  /*
   * call the check response Login status function
   */
  checkLoginState() {
    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }

  /*
   * function check status
   */
  statusChangeCallback(response) {
    // console.log(response);
    console.log("RESPONSEEEEEEEEEEEEE", response.status);
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.testAPI();
      // response.success = false;
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
    }
  }

  /*
   * show user's info
   */
  testAPI() {
    // console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', (response) => {
      // console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!' + 'This is your ID: ' + response.id;
    });
  }

  //describe the login actions


//function we link to the click on the custom login button through Twitter
  doTWSignIn() {
    twttr.anywhere(T => {
        console.log("doTWSignIn:", T);
      T.signIn();

      T.bind("authComplete", (e, user) => {
      var token = user.attributes._identity;
      console.log("token2:", token);
      //define the login function on your client through Twitter
      });
    });
  }
}
