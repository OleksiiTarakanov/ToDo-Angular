import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  toDoList: Array<Todo>;
  search: string;

  constructor(
    private todoService: TodoService
  ) {
    //  this.toDoList = todos; 
  }

  ngOnInit(): void {
    this.getTodos();
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo)
    .subscribe(()=>{
      this.getTodos();
    });
  }

  deleteTodo(todoId: number):void {
    this.todoService.deleteTodo(todoId)
      .subscribe(() => {
        this.getTodos();
      });
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo)
    .subscribe(() => {
      this.getTodos();
    });
  }

  private getTodos(): void {
    this.todoService.getTodos()
      .subscribe(data =>{
        this.toDoList = data;
        console.log(data)
      },
      error => {
        console.error(error);
      }
    );
  }
}


