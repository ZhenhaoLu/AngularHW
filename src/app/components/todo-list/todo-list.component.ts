import {Component, OnInit} from '@angular/core';
import {TodoManageService} from "../../services/todo-manage.service";
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  data: Todo[] = [];
  showData: Todo[] = [];
  searchId:string = '';
  constructor(private todoService:TodoManageService) {}

  ngOnInit(){
    this.todoService.getAll().subscribe(
      (response) => {
        // this.data = [response]
        this.data = response.slice(0, 21);
        this.showData = this.data;
      }
    )
  }

  searchById(){
    if(this.searchId.length == 0){
      this.showData = this.data;
    }else{
      this.showData = this.data.filter((value, index) => value.id.toString().includes(this.searchId));
      this.todoService.getById(parseInt(this.searchId)).subscribe(
        (response) =>{
          console.log(response);
        }
      )
    }
  }
}
