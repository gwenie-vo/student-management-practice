import { Component, OnInit } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { ShowUserInfoComponent } from './show-user-info.component';
// var FB = "C"
declare var FB: any;

@Component({
  selector: "my-app",
  template: `
    <h2>Login by Facebook, Twitter, G+</h2>
    <div class="fb-login-button" data-max-rows="2" data-size="large" data-show-faces="true" data-auto-logout-link="true"></div>
    <div id="status"></div>
  `
  // directives: [ROUTER_DIRECTIVES]
})

/*
  config navigation link
 */
// @RouteConfig([
//   { path: '/user-info', name: 'userInfo', component: ShowUserInfoComponent }
//   // { path: '/edit-student/:id', name: 'EditStudent', component: StudentFormComponent }
// ])

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
  }

  /*
   * show login form popup
   */
  // loginTest(){
  //   // console.debug('loginTest');
  //   FB.login((response) => {

  //     if(response.authResponse) {
  //       console.log('Welcome!  Fetching your information.... ');
  //       FB.api('/me', (response) => {
  //         console.log('Good to see you, ' + response.name + '.');
  //       });
  //     } else {
  //       console.log('User cancelled login or did not fully authorize.');
  //     }
  //   });
  // }

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
}
