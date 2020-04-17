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
  public search = '';
  public sort = {
    byDate: false,
    byImportance: false,
    byDone: false,
  }
  @Output() private searchFiltEmit: EventEmitter<any> = new EventEmitter();

  myForm: FormGroup;
 
  constructor(public todoSvc: TodoService) { 
        this.myForm = new FormGroup(
        {'task': new FormControl('', [
          Validators.minLength(6), 
          Validators.required])}
      )
  }
  ngOnInit(): void { 
    console.log(this.myForm.get('task').errors);    
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
      this.myForm.patchValue({task:''})
    }
  }
  onSearchAndFilt(){
    this.searchFiltEmit.emit(this.search);
  }
  onDataFilt(){
    this.sort.byDate = !this.sort.byDate
    this.todoSvc.sortByDate(this.sort.byDate)
  }
  onPriorityFilt(){
    this.sort.byImportance = !this.sort.byImportance
    this.todoSvc.sortByImportance(this.sort.byImportance)  
  } 
  onCompleteFilt(){
    this.sort.byDone = !this.sort.byDone
    this.todoSvc.sortByDone(this.sort.byDone) 
  }

}
