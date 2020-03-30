import { TodoModel } from './shared/todoModel';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service'
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  items: Observable<any>;
  actionPack: TodoModel;
  editModal:boolean = false;

  constructor(public taskSvc: TodoService){}
  
  ngOnInit (){
    this.taskSvc.load();
    this.items = this.taskSvc.items;
    this.taskSvc.items.subscribe() 
  }
  onAction(item:TodoModel){
    this.actionPack = item;
    this.editModal = true;
  }
  onCancel(){
    this.editModal = false;
  }

  onSave(item:TodoModel){ // сохранение сервисом
    this.editModal = false;
    this.taskSvc.edit(item);
  }
  onDel(item:TodoModel){ // удаление сервисом
    this.editModal = false;
    this.taskSvc.remove(item.date);
  }

}
