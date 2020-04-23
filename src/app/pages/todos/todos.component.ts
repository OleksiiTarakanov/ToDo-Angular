import { Component, OnInit, TemplateRef, Output, Input } from '@angular/core';

import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NewTodoComponent } from './new-todo/new-todo.component';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';





@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  toDoList: Array<Todo>;
  search: string;
  priority: string;
  @Input() modalRef: BsModalRef;

  private unsubscribe = new Subject;

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService
  ) {
    //  this.toDoList = todos; 
  }

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy():void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  openModal() {
    this.modalRef = this.modalService.show(NewTodoComponent,
      Object.assign({}, {
        ignoreBackdropClick: true,
        initialState: {
          submit: this.addTodo.bind(this)
        }
      })
    );

  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getTodos();
      });
  }

  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getTodos();
      });
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getTodos();
      });
  }

  private getTodos(): void {
    this.todoService.getTodos()
      .subscribe(data => {
        this.toDoList = data;
        console.log(data)
      },
        error => {
          console.error(error);
        }
      );
  }
}


