import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/todo.service';
import { TodoItem } from '../../shared/todo-items';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public todoText :any = '';
  private task : TodoItem = this.clearTask();

  constructor(public todoSvc: TodoService) { }

  ngOnInit(): void {
  }

  add(){
    this.combineToTask();
    console.log(this.task);
    this.todoSvc.add(this.task);
    this.todoText = '';
  }

  combineToTask(){
      this.task.date = Date.now();
      this.task.importance = 0;
      this.task.content = this.todoText;
      this.task.done = false;}

  clearTask(){
    return { 
      date: Date.now(),
      importance : 0,
      content : '',
      done : false,}
  }

}
