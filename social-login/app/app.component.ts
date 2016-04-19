import {Component} from "angular2/core";
// var FB = "C"
declare var FB: any;

@Component({
  selector: "my-app",
  template: `
    <h2>Login by Facebook, Twitter, G+</h2>
    <div class="fb-login-button" (click)="loginTest()" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="true"></div>
    <div id="status"></div>
  `
})

export class AppComponent {
  /*
   * Load the app with appId
   */
  ngOnInit(){
    console.log("FB:", FB);
    FB.init({
      appId: '1586800451610753',
      cookie: true,  // enable cookies to allow the server to access
      // the session
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
  loginTest(){
    console.debug('loginTest');
    FB.login(function(response) {

      if(response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  /*
   * call the check response Login status function
   */
  checkLoginState() {
    console.debug("checkLoginState1");
    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }

  /*
   * function check status
   */
  statusChangeCallback(response) {
    console.log('statusChangeCallback222');
    console.log(response);
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
    }
  }

  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!' + 'This is your ID: ' + response.id;
    });
  }
}
