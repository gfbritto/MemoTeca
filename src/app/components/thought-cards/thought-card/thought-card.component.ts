import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrls: ['./thought-card.component.css']
})

export class ThoughtCardComponent {
  @Input() thought = {
    content: '',
    author: 'Brito, Gabriel',
    model: 'modelo3'
  }
}
