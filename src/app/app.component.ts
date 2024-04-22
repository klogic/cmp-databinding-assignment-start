import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentTimer = 0;
  eventNumberList = [];
  oddNumberList = [];
  handleIntervalEvent(timer) {
    this.parentTimer = timer;
    if (this.parentTimer % 2 === 0) {
      this.eventNumberList.push(this.parentTimer);
    } else {
      this.oddNumberList.push(this.parentTimer);
    }
  }
}
