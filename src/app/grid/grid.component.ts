import { Component, ViewChild, HostListener, ElementRef, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class GridComponent {

    // public square = [ { // 250
    //     id: "S-BC",
    //     parent: "B",
    //     turain: "grass",
    //     character: true,
    //     positionY: ,
    //     positionX: 50,

    // }]

    // public quadrent = [{ // 25
    //     id: "Q-b",
    //     squares: this.square
    //  }]

    // public region = [{  // 25
    //     id: "R-b",
    //     squares: this.quadrent
    //  }]
    // public state = [{ // 25
    //     id: "S-b",
    //     regions: this.region
    //  }
    // ]
    // public country = [{ // 25
    //     id: "C-b",
    //     states: this.state,
    //  }
    // ]
    // public continent = [{ // 25
    //     id: "T-b",
    //     counties: this.square
    //  }
    // ]
    
    // public planet = [{ // 10,000
    //     id: "P-b",
    //     counties: this.square
    //  }
    // ]

    // public Galaxies = [{ //100,000

    // }]

    // public universises = [{ //infinate

    // }]

    // constructor() {
    //     for(let i = 0; i < 250; i++) {
    //         for(let l = 0; l < 250; l++) {
    //            this.square.push({ 
    //             id: "S-BC" + l + i,
    //             parent: "B",
    //             turain: "grass",
    //             character: true,
    //             positionY: ,
    //             positionX: 50,
    //         }
    //     }
    // }

}