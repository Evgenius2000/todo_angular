import { ITodoItem } from './Itodo-item'

export class TodoModel implements ITodoItem {
    
    public date: number;
    public importance: number;
    public content: string;
    public done: boolean;
    
    constructor (content : string){
        this.date =  Date.now();
        this.importance = 0;
        this.content = content;
        this.done = false;
    }
    
}