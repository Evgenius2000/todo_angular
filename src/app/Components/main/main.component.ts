import { TodoService } from './../../shared/todo.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items: Observable<any>;

  constructor(private todoSvc:TodoService) { }

  ngOnInit(): void {
    this.todoSvc.load();
    this.items = this.todoSvc.items;
  }
  showEmit(event){
    console.log(event)
  }

}
