import {Component} from 'angular2/core';

import {ClickMeComponent} from './clickme/click-me.component';
import {ClickMeComponent2} from './clickme2/click-me2.component';
import {KeyUpComponent_v1,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4} from './keyup/keyup.component';
import {LoopbackComponent} from './loopback/loop-back.component';
import {LittleTourComponent} from './little-tour/little-tour.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    ClickMeComponent, ClickMeComponent2,
    LoopbackComponent,
    KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4,
    LittleTourComponent
  ]
})

export class AppComponent {

}
