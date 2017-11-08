import { Component, ViewChild, HostListener, ElementRef, ChangeDetectorRef } from "@angular/core";
import { Character } from "app/character/character";
import { ShortestPath } from "app/path/shortest-path";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent { }
