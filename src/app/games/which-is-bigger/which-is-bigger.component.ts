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
  
  onPlay() {
    this.state.set('play');
  }
}
