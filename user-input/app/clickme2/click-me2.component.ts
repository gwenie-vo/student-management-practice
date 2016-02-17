import {Component} from 'angular2/core';
@Component({
  selector: 'click-me2',
  templateUrl: 'app/clickme2/click-me2.component.html'
})

export class ClickMeComponent2 {
  clickMessage = '';
  clicks = 1;

  onClickMe2(event:any) {
    let evtMsg = event ? 'Event target is' + " " + event.target.tagName : '';
    this.clickMessage = (`Click #${this.clicks++}.${evtMsg}`)
  }
}
