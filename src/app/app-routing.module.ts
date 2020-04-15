import { LocalDataComponent } from './Components/local-data/local-data.component';
import { InetDataComponent } from './Components/inet-data/inet-data.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: 'local-data', component: LocalDataComponent},
  {path: 'from-net', component: InetDataComponent},
  {path: '**', redirectTo: 'local-data'},
  {path: '**', redirectTo: 'local-data'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class AppRoutingModule { }
