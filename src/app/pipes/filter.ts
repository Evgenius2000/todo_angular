import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../shared/todoModel';
@Pipe({
    name: 'filter'
})

export class todoFilterPipe implements PipeTransform {
    transform(todos: TodoModel[], search?: string){
        if (!search || !search.trim()) return todos;
        return todos.filter(todo => todo.content.includes(search))
    }   
}