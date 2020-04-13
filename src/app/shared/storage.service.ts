import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  storage: any = window.localStorage;  
  url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
  readonly KEY: string = "ITEMS";

  constructor(private http: HttpClient) { }

  save(data: any){
    let dataStr = JSON.stringify(data);
    this.storage.setItem(this.KEY, dataStr);
  }

  load(){
    let dataStr = this.storage.getItem(this.KEY);
    return dataStr ? JSON.parse(dataStr) : [];
  }

  loadFromPlceholder(){
    return this.http.get(this.url)
  }


  
}
