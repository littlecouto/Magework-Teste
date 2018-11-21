import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.sass']
})
export class ScreenComponent implements OnInit {

  @Input() role: {};
  @Input() candidate: {};
  @Input() numpad: {};

  constructor() {
  }

  bindFieldNumber(index){
    return this.numpad[index] || '';
  }

  ngOnInit() {

  }

}
