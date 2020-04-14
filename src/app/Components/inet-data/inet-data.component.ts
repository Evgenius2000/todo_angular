import { ITodoInet } from './../../shared/Itodo-inet';
import { StorageService } from './../../shared/storage.service';
import { Component, OnInit } from '@angular/core'; 


@Component({
  selector: 'app-inet-data',
  templateUrl: './inet-data.component.html',
  styleUrls: ['./inet-data.component.scss']
})
export class InetDataComponent implements OnInit {

  public inetTodos: ITodoInet;
  constructor(public storageSvc:StorageService) { }

  ngOnInit(): void {
  this.storageSvc.loadFromPlceholder().subscribe((response:ITodoInet) => {
    this.inetTodos = response;
    console.log('inetTodos: ', this.inetTodos)        
    });
  }

}
