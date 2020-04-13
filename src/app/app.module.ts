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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent, 
    ModalWindowsComponent,
    todoFilterPipe
  ], 
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
