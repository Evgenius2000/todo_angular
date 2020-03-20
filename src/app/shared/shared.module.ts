import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { TodoService } from './todo.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StorageService,
    TodoService
  ]
})
export class SharedModule { }
