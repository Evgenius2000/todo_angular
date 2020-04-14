import { InetDataComponent } from './Components/inet-data/inet-data.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  {path: 'local', component: InetDataComponent},
  {path: 'fromNet', component: InetDataComponent},
  {path: '**', component: InetDataComponent},
  {path: '', component: InetDataComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
