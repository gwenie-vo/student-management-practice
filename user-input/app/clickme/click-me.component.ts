import {Component} from 'angular2/core';

@Component({
  selector: 'click-me',
  templateUrl: 'app/clickme/click-me.component.html'
})

export class ClickMeComponent {
  clickMessage = '';
  onClickMe(){
    this.clickMessage = 'You are my hero';
  }
}


