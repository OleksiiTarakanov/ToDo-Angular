import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();

  priorityObj = {
    high: "badge-danger",
    medium: "badge-warning",
    low: "badge-success"
  }

  isShowDetails = false;
  constructor( ) {

  }

  ngOnInit(): void {
  }

  toggleToDo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.update.emit(this.todo);
  }

  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }

  toggleDetails(): void {
    this.isShowDetails = !this.isShowDetails;
  };  
}
