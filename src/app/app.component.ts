import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  modalWindow: boolean = true;
  constructor(public taskSvc: TodoService){}
  
  ngOnInit (){
    this.taskSvc.items.subscribe()
  }
  // showModalWindow(a,b){

  // }
}
