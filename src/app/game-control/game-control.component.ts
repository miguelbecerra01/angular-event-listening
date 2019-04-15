import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numberCount = 0;
  interval;

  @Output() currentCounting = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }



  onStart() {
    this.interval = setInterval(() => {
      this.numberCount++;
      this.currentCounting.emit(this.numberCount);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }



}
