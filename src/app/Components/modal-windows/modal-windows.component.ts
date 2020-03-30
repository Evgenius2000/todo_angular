import { TodoModel } from '../../shared/todoModel';
import { Pack } from '../../shared/IPack'
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-modal-windows',
  templateUrl: './modal-windows.component.html',
  styleUrls: ['./modal-windows.component.scss']
})

export class ModalWindowsComponent implements OnInit, OnChanges {
  @Input('actionPack')  actionPack: Pack;
  //@Output() private editItemChange = new EventEmitter();
  @Output() private cancel = new EventEmitter();
  @Output() private save = new EventEmitter();
  @Output() private delete = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
   // console.log(changes)
    
  }
  onCancel(){
    this.cancel.emit();
    console.log(this.actionPack)
  }
  onSaveEdit(){
    this.save.emit(this.actionPack.obj);
  }
  onDelete(){
    this.delete.emit(this.actionPack.obj);
  }
} 
