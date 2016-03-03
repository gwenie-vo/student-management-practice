import {Component} from 'angular2/core';

@Component({
  selector: 'key-up1',
  templateUrl: 'app/keyup/keyup1.component.html'
})
export class KeyUpComponent_v1 {
  values = '';

  /*
  // without strong typing
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }
  */
  // with strong typing
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector:'key-up2',
  templateUrl: 'app/keyup/keyup2.component.html'
})

export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up3',
  templateUrl: 'app/keyup/keyup3.component.html'
})
export class KeyUpComponent_v3 {
  value = '';
}

//////////////////////////////////////////

@Component({
  selector: 'key-up4',
  templateUrl: 'app/keyup/keyup4.component.html'
})

export class KeyUpComponent_v4 {
  value = '';
}
