import { Component } from '@angular/core';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrls: ['./thought-card.component.css']
})
export class ThoughtCardComponent {
  thought = {
    content: 'My content',
    author: 'Brito, Gabriel',
    model: 'modelo3'
  }
}
