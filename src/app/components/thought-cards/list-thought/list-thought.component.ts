import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent {
  //Create for me a list with 3 thoughts
  thoughtsList = [
    {
      content: 'First Thought',
      author: 'This is the first thought',
      model: 'modelo1'
    },
    {
      content: 'Second Thought',
      author: 'This is the second thought',
      model: 'modelo2'
    },
    {
      content: 'Third Thought',
      author: 'This is the third thought',
      model: 'modelo3'
    }
  ];
}
