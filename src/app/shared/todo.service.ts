import { Injectable } from '@angular/core';

import { TodoItem } from './todo-items';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: TodoItem[] = [];
  // private task:TodoItem = {
  //   date: Date.now(),
  //   importance:0,
  //   content:'',
  //   done:false
  // };
  private subj: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor( private model: StorageService) { 
    this.todos = this.model.load();  
    console.log(this.todos);  
  }



  add (task: TodoItem){

    this.todos.push(task);
    this.subj.next(this.todos);
    this.save();

    console.log(this.todos);
  }
  load() {
    this.todos = this.model.load();
    this.subj.next(this.todos);
  }

  save() {
    this.model.save(this.todos);
  }
}
