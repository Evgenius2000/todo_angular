import { TodoModel } from './todoModel';
import { Injectable } from '@angular/core';

import { ITodoItem } from './Itodo-item';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: ITodoItem[] = [];

  private subj: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor( private model: StorageService) { 
    this.todos = this.model.load();  
 //   console.log(this.todos);  
  };

  get items() {
    return this.subj.asObservable();
  }

  add (content : string){
    let todo: TodoModel  = new TodoModel(content);     
    this.todos.push(todo);
    this.subj.next(this.todos);
    this.save();
  }
  load() {
    this.todos = this.model.load();
    this.subj.next(this.todos);
  }

  save() {
    this.model.save(this.todos);
  }
  remove(date:number){
    let index: number = 0;

    this.todos.forEach(i => {
      if (i.date == date){
        index = this.todos.indexOf(i);
      }
    });

    this.todos.splice(index,1);
    this.subj.next(this.todos);
    this.save();
  }

  
}

