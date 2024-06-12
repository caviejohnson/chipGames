import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-which-is-bigger',
  standalone: true,
  imports: [],
  templateUrl: './which-is-bigger.component.html',
  styleUrl: './which-is-bigger.component.scss'
})
export class WhichIsBiggerComponent {
  state = signal('start');
  gameData = {current: {left: 'Earth', right: 'Mars', correct: 'left'}, points: 0}

  onPlay() {
    this.state.set('play');
  }

  sideClicked(side: string) {
    if (side == this.gameData.current.correct) {
      this.gameData.points ++
    } else {
      this.gameData.points = 0
    }
  }
}
