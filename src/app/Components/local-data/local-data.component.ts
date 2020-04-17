import { SearchAndFiltModel } from './../../shared/todoModel';
import { ISearchAndFilt } from './../../shared/ISearchAndFilt';
import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../shared/todoModel';
import { TodoService } from '../../shared/todo.service'
import { Observable} from 'rxjs';

@Component({
  selector: 'app-local-data',
  templateUrl: './local-data.component.html',
  styleUrls: ['./local-data.component.scss']
})
export class LocalDataComponent implements OnInit {


  title = "todo's by Monah";
  public search :ISearchAndFilt = new SearchAndFiltModel();
  items: Observable<any>;
  actionPack: TodoModel;
  editModal:boolean = false; 

  constructor(public taskSvc: TodoService){ }
  
  ngOnInit (){
    
    this.taskSvc.load();
    this.items = this.taskSvc.items;
    this.taskSvc.items.subscribe() 
  }
  ngOnDestroy(): void {
    this.items.subscribe;    
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

  onSearchAndFilt(event : ISearchAndFilt){
    this.search = event;

  }

}
