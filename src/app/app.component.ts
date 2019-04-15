import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-event-listening';
  countList = [];

  onCurrentCounting(count: number) {
    this.countList.push(count);
  }
}
