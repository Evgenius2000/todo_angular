import { TodoService } from './../../shared/todo.service';
import { ITodoItem } from '../../shared/Itodo-item';
import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Output('modal') private modal = new EventEmitter<string>();
  @Input() item: ITodoItem;

  constructor(public todoSvc: TodoService) { }
  
  onModal(param:string){
    console.log(param);
    this.modal.emit(param)
  }

}
