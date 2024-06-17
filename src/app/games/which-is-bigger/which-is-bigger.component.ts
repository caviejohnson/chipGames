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
  gameData = { current: { left: 'Earth', right: 'Mars', correct: 'left' }, points: 0 }

  onPlay() {
    this.state.set('play');
  }

  getNewGameData() {
    const solarSystem: { name: string, mass: number }[] = [
      { name: "Mercury", mass: 3.3022e23 },
      { name: "Venus", mass: 4.8675e24 },
      { name: "Earth", mass: 5.9723e24 },
      { name: "Mars", mass: 6.4171e23 },
      { name: "Jupiter", mass: 1.8986e27 },
      { name: "Saturn", mass: 5.6846e26 },
      { name: "Uranus", mass: 8.6810e25 },
      { name: "Neptune", mass: 1.0243e26 },
      { name: "Pluto", mass: 1.309e22 },
      { name: "Eris", mass: 1.663e22 },
      { name: "Haumea", mass: 4.5e21 },
      { name: "Makemake", mass: 3.2e21 },
      { name: "Ceres", mass: 9.43e20 },
      { name: "Eris", mass: 1.663e22 },
    ];
    let right = { name: "", mass: 0 };
    let left = { name: "", mass: 0 };
    while (right.name == left.name) {
      right = solarSystem[Math.floor(Math.random() * solarSystem.length)]
      left = solarSystem[Math.floor(Math.random() * solarSystem.length)]
    }
    return { left: left.name, right: right.name, correct: right.mass > left.mass ? 'right' : 'left' }
  }

  sideClicked(side: string) {
    if (side == this.gameData.current.correct) {
      this.gameData.points++
      this.gameData.current = this.getNewGameData()
    } else {
      this.gameData.points = 0
      this.shake(side)
      this.gameData.current = this.getNewGameData()
    }
  }

  shake(side: string) {
    const element = document.querySelector('#' + side);
    if (element) {
      element.classList.add('shake');
      setTimeout(() => {
        element.classList.remove('shake');
      }, 500);
    }
  }
}
