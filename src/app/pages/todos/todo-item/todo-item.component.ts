import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NewTodoComponent } from '../new-todo/new-todo.component';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();
  @Output() edit = new EventEmitter<Todo>();

  @Input() modalRef: BsModalRef

  priorityObj = {
    high: "badge-danger",
    medium: "badge-warning",
    low: "badge-success"
  }

  isShowDetails = false;

  constructor(
    private modalService: BsModalService
   ) {

  }

  ngOnInit(): void {
  }


  toggleToDo(): void {
    this.todo.isDone = !this.todo.isDone
    this.updateTodo(this.todo);
  }

  updateTodo(todo: Todo): void {
    this.update.emit(todo);
  }

  editTodo(): void {   
    console.log(this.todo);
    this.modalRef = this.modalService.show(NewTodoComponent,
      Object.assign({}, {
        ignoreBackdropClick: true,
        initialState: {
          todoData: this.todo,
          submit: this.updateTodo.bind(this),
        }
      })
    );
  }

  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }

  toggleDetails(): void {
    this.isShowDetails = !this.isShowDetails;
  };  
}
