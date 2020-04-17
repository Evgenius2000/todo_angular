import { ISearchAndFilt } from './../../shared/ISearchAndFilt';
import { SearchAndFiltModel } from './../../shared/todoModel';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public todoText :any = '';
  public searchAndFilt :ISearchAndFilt = new SearchAndFiltModel();
  @Output() private searchFiltEmit: EventEmitter<any> = new EventEmitter();

  myForm: FormGroup;
 
  constructor(public todoSvc: TodoService) { 
        this.myForm = new FormGroup(
        {'task': new FormControl('', [
          Validators.minLength(6),
          Validators.required ])}
      )
  }
  ngOnInit(): void { 
  }

  bindTodoText(){
    this.todoText = this.myForm.value.task;
  }

  add(){
    if (this.myForm.valid){
      this.todoText = this.todoText.trim();
      if(!this.todoText.length || this.todoText.length > 200){
        return window.alert(`Min 1, Max 200 characters! You have enter ${this.todoText.length} smbols`);
      }
      this.todoSvc.add(this.todoText);
      //this.todoText = '';
      this.myForm.patchValue({task:''})
    }
  }
  onSearchAndFilt(){
    this.searchAndFilt.dateFilter = null;
    this.searchAndFilt.priorityFilter = null;
    this.searchAndFilt.copleateFilter = null;
    this.searchFiltEmit.emit(this.searchAndFilt);
  }
  onDataFilt(){
    if (this.searchAndFilt.dateFilter == null){
      this.searchAndFilt.dateFilter = true
    } else {
      this.searchAndFilt.dateFilter = !this.searchAndFilt.dateFilter; 
    }
    this.searchAndFilt.priorityFilter = null;
    this.searchAndFilt.copleateFilter = null;
    this.searchFiltEmit.emit(this.searchAndFilt);
  }
  onPriorityFilt(){
    if (this.searchAndFilt.priorityFilter == null){
      this.searchAndFilt.priorityFilter = true
    } else {
      this.searchAndFilt.priorityFilter = !this.searchAndFilt.priorityFilter; 
    }
    this.searchAndFilt.dateFilter = null;
    this.searchAndFilt.copleateFilter = null;
    this.searchFiltEmit.emit(this.searchAndFilt);
  } 
  onCompleteFilt(){
    if (this.searchAndFilt.copleateFilter == null){
      this.searchAndFilt.copleateFilter = true
    } else {
      this.searchAndFilt.copleateFilter = !this.searchAndFilt.copleateFilter; 
    }
    this.searchAndFilt.dateFilter = null;
    this.searchAndFilt.priorityFilter = null;
    this.searchFiltEmit.emit(this.searchAndFilt);
  }
}
