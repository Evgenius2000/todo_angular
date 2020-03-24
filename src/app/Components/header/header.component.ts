import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/todo.service';
import { ITodoItem } from '../../shared/Itodo-item';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public todoText :any = '';

  constructor(public todoSvc: TodoService) { }

  ngOnInit(): void {
  }
  add(){
    this.todoText = this.todoText.trim();
    if(!this.todoText.length || this.todoText.length > 200){
      return window.alert(`Min 1, Max 200 characters! You have enter ${this.todoText.length} smbols`);
    }
    this.todoSvc.add(this.todoText);
    this.todoText = '';
  }
}
