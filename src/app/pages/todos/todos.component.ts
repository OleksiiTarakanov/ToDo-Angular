import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  toDoList: Array<Todo>;
  constructor() { 
  //  this.toDoList = todos; 
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void{
    setTimeout(()=>{
      this.toDoList = todos;
    },5000)
  }
}

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
]
