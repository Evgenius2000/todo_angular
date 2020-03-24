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
  private count: number = 0;
  private completed: number = 0;
  private subj: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor( private model: StorageService) { 
    this.todos = this.model.load();  
  };

  get items() {
    return this.subj.asObservable();
  }
  get counts() {
    return this.count;
  }
  get completeds() {
    return this.completed;
  }

  calculateFooter(){
    let count = 0;
    let completed = 0;
    this.todos.forEach(i => {
      count++;
      if (i.done === true) completed++;
    });
    this.count = count;
    this.completed = completed;
  }

  add (content : string){
    let todo: TodoModel  = new TodoModel(content);     
    this.todos.push(todo);
    this.subj.next(this.todos);
    this.save();
  }
  load() {
    this.todos = this.model.load();
    this.calculateFooter();
    this.subj.next(this.todos);
  }

  save() {
    this.calculateFooter();
    this.model.save(this.todos);
  }

  findTask(date){
    let index: number = 0;
    this.todos.forEach(i => {
      if (i.date == date){
        index = this.todos.indexOf(i);
      }
    });
    return index;
  }

  remove(date:number){
    this.todos.splice(this.findTask(date),1);
    this.subj.next(this.todos);
    this.save();
  }

  prio (date: number, flag: boolean){
    let index = this.findTask(date);
    if (flag){
      if (this.todos[index].importance < 10)
        this.todos[index].importance += 1;
    } else {
      if (this.todos[index].importance > 0)
      this.todos[index].importance -= 1;
    }
    this.subj.next(this.todos);
    this.save();
  }
  done (date: number){
    let index = this.findTask(date);
    this.todos[index].done = !this.todos[index].done
    this.subj.next(this.todos);
    this.save();
  }


  
}

