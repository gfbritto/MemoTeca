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
      title: 'First Thought',
      description: 'This is the first thought',
      model: 'modelo1'
    },
    {
      title: 'Second Thought',
      description: 'This is the second thought',
      model: 'modelo2'
    },
    {
      title: 'Third Thought',
      description: 'This is the third thought',
      model: 'modelo3'
    }
  ];
}
