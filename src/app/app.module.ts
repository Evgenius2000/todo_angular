import { todoFilterPipe } from './pipes/filter';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ItemComponent } from './Components/item/item.component';
import { ModalWindowsComponent } from './Components/modal-windows/modal-windows.component';
import { InetDataComponent } from './Components/inet-data/inet-data.component';
import { appRoutes } from './app-routing.module';
import { LocalDataComponent } from './Components/local-data/local-data.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent, 
    ModalWindowsComponent,
    todoFilterPipe,
    InetDataComponent,
    LocalDataComponent
  ], 
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
