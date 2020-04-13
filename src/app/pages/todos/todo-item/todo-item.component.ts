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

  isShowDetails = false;
  constructor( ) {

  }

  ngOnInit(): void {
  }

  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }

  toggleDetails(): void {
    this.isShowDetails = !this.isShowDetails;
  };
}
