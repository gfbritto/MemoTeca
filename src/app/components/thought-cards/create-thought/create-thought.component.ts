import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  thought = {
    content: 'My content',
    author: 'Brito, Gabriel',
  }

  createThought = () => {
    alert('Thought created!');
  }

  cancelThoughtCreation = () => {
    alert('Thought creation canceled!');
  }
}
