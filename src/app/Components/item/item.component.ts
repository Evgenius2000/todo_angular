import { TodoService } from '../../shared/todo.service';
import { ITodoItem } from '../../shared/Itodo-item';
import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: ITodoItem;
  @Output() private onAction: EventEmitter <any> = new EventEmitter();

  constructor(public todoSvc: TodoService) { }

  onEdit(){
    let pack = {
      mode: true, 
      obj: this.item
    }
    this.onAction.emit(pack)
  }
  onDel(){
    let pack = {
      mode: false, 
      obj: this.item
    }
    this.onAction.emit(pack)
  }

}
