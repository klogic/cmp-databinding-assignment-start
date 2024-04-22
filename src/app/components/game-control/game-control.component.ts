import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  status = 'stop';
  timer = 0;
  interval;
  @Output() intervalEvent = new EventEmitter<number>();

  startFn() {
    this.status = 'start';
    this.interval = setInterval(() => {
      this.timer += 1;
      this.intervalEvent.emit(this.timer);
    }, 1000);
  }
  stopFn() {
    this.status = 'stop';
    clearInterval(this.interval);
  }
}
