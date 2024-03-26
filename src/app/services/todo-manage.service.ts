import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoManageService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getById(id: number): Observable<Todo>{
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  deleteById(id: number): Observable<any>{
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
