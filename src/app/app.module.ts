import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, BobComponent } from './app.component';
import { Seedling } from 'app/seedling';

@NgModule({
  declarations: [
    AppComponent,
    BobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Seedling],
  bootstrap: [AppComponent]
})
export class AppModule { }
