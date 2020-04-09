import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor() { }

  getTodoData(): Array<Todo> {
    const todos = [
      {
        id: 1,
        title: 'Angular',
        description: '',
        isDone: false,
      },
      {
        id: 2,
        title: 'JS',
        description: 'Test Desc',
        isDone: true,
      }
    ];

    return todos;
  }
}
