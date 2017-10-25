import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SquareModule } from "app/grid/square/square.module";
import { RowModule } from "app/grid/row/row.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SquareModule,
    RowModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
