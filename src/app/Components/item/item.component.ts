import { TodoService } from './../../shared/todo.service';
import { ITodoItem } from '../../shared/Itodo-item';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: ITodoItem;
  constructor(public todoSvc: TodoService) { }

}
