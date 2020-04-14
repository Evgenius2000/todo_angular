import { ITodoItem } from './Itodo-item'
import { ITodoInet } from './Itodo-inet'

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

export class TodoModelInet implements ITodoInet {
    
    public userId: number;
    public id: number;
    public title: string;
    public completed: boolean;
    
    constructor (userId: number, id: number, title :string, completed: boolean){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    
}