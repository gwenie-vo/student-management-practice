import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <h3>
    {{title}}
    <img src="{{heroImageUrl}}" style="height:350px">
  </h3>
  <!-- "The sum of 1 + 1 is 2" -->
  <p>The sum of 1 + 1 is {{1 + 1}} + </p>

  <!-- "The sum of 1 + 1 is not 4" -->
  <p>The sum of 1 + 1 is not {{2 + 2 + " " + getVal()}}</p>
  <button (click)="toggleSelected()">Save</button>
  <div id="testNgClass1" [ngClass] = "{selected: isSelected, huynh: !isSelected, abc: !isSelected}">1</div>
  <div class="abc" [class.trung]="isSelected"></div>
  <button [title]="tittle">help</button>

<!-- isSpecial is true -->
<div [class.hidden]="!isSpecial">Show with class</div>
<div [class.hidden]="isSpecial">Hide with class</div>

<!-- HeroDetail is in the DOM but hidden -->
<hero-detail [class.hidden]="isSpecial"></hero-detail>

<div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>
<div [style.display]="isSpecial ? 'none'  : 'block'">Hide with style</div>

<span [ngSwitch]="toeChoice">
  <span *ngSwitchWhen="'Eenie'">Eenie</span>
  <span *ngSwitchWhen="'Meanie'">Meanie</span>
  <span *ngSwitchWhen="'Miney'">Miney</span>
  <span *ngSwitchWhen="'Moe'">Moe</span>
  <span *ngSwitchDefault>other</span>
</span>
  `
})

export class AppComponent {
  public heroImageUrl = "http://ww1.prweb.com/prfiles/2014/04/10/11752526/gI_134971_best-image-web-hosting.png";
  public tittle = "Template syntax";

  isSelected: boolean;

  toggleSelected(){
    this.isSelected = !this.isSelected;
    console.log("this.isSelected:", this.isSelected);
  }
  getVal() {
    var a = 40 + 4, b = "Text string";
    return "Message";

  }
  // setClasses() {
  //   let classes = {
  //     saveable: this.canSave,      // true
  //     modified: !this.isUnchanged, // false
  //     special: this.isSpecial,     // true
  //   }
  //   return classes;
  // }
}

