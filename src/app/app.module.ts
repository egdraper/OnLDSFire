import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SquareModule } from "app/grid/square/square.module";
import { RowModule } from "app/grid/row/row.module";
import { GridComponent } from "app/grid/grid.component";
import { ShortestPath } from "app/path/shortest-path";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SquareModule,
    RowModule,
  ],
  providers: [
    ShortestPath,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
