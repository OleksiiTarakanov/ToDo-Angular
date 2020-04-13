import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient
  ) { }
  
  getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.url);
  }
  
  deleteTodo(todoId: number): Observable<Array<Todo>> {
    return this.http.delete<Array<Todo>>(`${this.url}/${todoId}`);
  }
}