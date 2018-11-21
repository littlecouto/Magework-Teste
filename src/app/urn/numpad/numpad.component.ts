import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.sass']
})
export class NumpadComponent implements OnInit {

  @Input() numbers : number;
  @Output() getNumpadNumber = new EventEmitter<object>()
  @Output() eventSaveVote = new EventEmitter<any>()
  @Output() eventResetVote = new EventEmitter<any>()

  private keyNumbers : number[];
  private index = 0;

  private isActive = true;

  constructor() {}

  ngOnInit() {
    this.keyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  }

  resetVote(){
    this.index = 0;
    this.eventResetVote.emit();
    this.isActive = true;
  }

  saveVote(){
    this.eventSaveVote.emit();
    this.resetVote();
  }

  setNumClicked(number: number){

    if(!this.isActive)
      return false;

    this.getNumpadNumber.emit(
      {
        number: number,
        index: this.index
      }
    );

    this.index++;

    this.numbers <= this.index &&
      (this.isActive = false);

  }

}
