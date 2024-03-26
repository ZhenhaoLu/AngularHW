import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/todo.model";
import {TodoManageService} from "../../services/todo-manage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit{
  data: Todo[] = [];
  currentTodo: Todo = {userId:-1, id:-1, completed:false, title:''};

  constructor(private todoService:TodoManageService, private router:Router) {}
  ngOnInit(){
    console.log("Run")
    this.todoService.getAll().subscribe(
      (response) => {
        // this.data = [response]
        this.data = response.slice(0, 10);
      }
    )
  }

  deleteRequest(){
    if(this.currentTodo.id > -1){
      this.todoService.deleteById(this.currentTodo.id).subscribe(
        (response) => {
          console.log(response);
          console.log("Id = " + this.currentTodo.id + " is deleted");
          this.data = this.data.filter((v, i) => v.id != this.currentTodo.id);
          this.currentTodo = {userId:-1, id:-1, completed:false, title:''};
          this.router.navigate(['/todos']);
        }
      );
    }
  }

  selectTodo(index:number){
    this.currentTodo = this.data[index];
    console.log("Select id = " + this.currentTodo.id);
  }

}
