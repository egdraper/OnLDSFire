import { Component, ViewChild, HostListener, ElementRef, ChangeDetectorRef } from '@angular/core';

interface Neighbor {
  cell: Cell;
}

interface Cell {
  x: number;
  y: number;
  posX: number;
  posY: number;
  obstacle: boolean;
  neighbors: Cell[];
  destination: true;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public leftPosition: number = 0
  public topPosition: number = 0
  public grid: {[cell: string]: any } = { }
  public gridDisplay: any[][] = []

  private timer: any

  constructor(public elRef: ElementRef, public changeDetected: ChangeDetectorRef) {
    for (let i = 0; i < 100; i++) {
      this.gridDisplay[i] = []

      for (let l = 0; l < 100; l++ ) {
        const obstacle = ((i === 3 && l % 10 !== 0) || (i % 10 && l === 3) || (i % 6 && l === 2))

        this.grid[`x${l}:y${i}`] = { x: l, y: i, posX: l * 50, posY: i * 50, obstacle, };
        this.gridDisplay[i][l] = this.grid[`x${l}:y${i}`]
      }
    }

    for (let i = 0; i < 100; i++) {
      for (let l = 0; l < 100; l++ ) {
        const cell = this.grid[`x${l}:y${i}`]
        cell.neighbors = []
        cell.neighbors[5] = this.grid[`x${l - 1}:y${i - 1}`];
        cell.neighbors[0] = this.grid[`x${l}:y${i - 1}`];
        cell.neighbors[2] = this.grid[`x${l + 1}:y${i - 1}`];
        cell.neighbors[4] = this.grid[`x${l - 1}:y${i}`];
        cell.neighbors[1] = this.grid[`x${l + 1}:y${i}`];
        cell.neighbors[6] = this.grid[`x${l - 1}:y${i + 1}`];
        cell.neighbors[3] = this.grid[`x${l}:y${i + 1}`];
        cell.neighbors[7] = this.grid[`x${l + 1}:y${i + 1}`];
      }

    }

    
  }

  private redirect: any

  public cellClick(e: any): void {
    if (!!this.timer && this.timer.state === "scheduled"){
      this.redirect = {x: e.x, y: e.y };
    } else {
      const path = this.shortestPath(
        this.grid[`x${this.leftPosition / 50}:y${this.topPosition / 50}`],
        this.grid[`x${e.input.x}:y${e.input.y}`]
      );
      path.pop()
      this.moveCharacter(path)
    }
  }

  private moveCharacter(path: Cell[]): void {
      const d = path.pop();
      if (d) {
        this.move(d.posX, d.posY, path);
      }
  }

  private move(x: number, y: number, path: Cell[]) {
    if (this.leftPosition % 50 === 0 && this.topPosition % 50 === 0) {

      if (this.redirect) {
        clearTimeout(this.timer);
        x = this.redirect.x;
        y = this.redirect.y;
        this.redirect = null;
      }
    }

    const xMove = ((this.leftPosition - x) < 0) ? 2 : -2;
    const yMove = ((this.topPosition - y) < 0) ? 2 : -2;
    
    const xDistance = Math.ceil((x - this.leftPosition) / 2);
    const yDistance = Math.ceil((y - this.topPosition) / 2);
    let xArrived = false
    let yArrived = false

    if (xDistance >= 1 || xDistance <= -1) {
      this.leftPosition += xMove
    } else {
      xArrived = true
    }

    if (yDistance >= 1 || yDistance <= -1) {
      this.topPosition += yMove
    } else {
      yArrived = true
    }

    if (!xArrived || !yArrived) {
      this.timer = setTimeout(() => {
        this.move(x, y, path);
      }, 30)
    } else {
      this.moveCharacter(path)
    }
    this.changeDetected.detectChanges()
  }

  private manuver(): void {

  }

  private isObstical(): void {

  }

  private shortestPath(start: Cell, end: Cell ) {
    end.destination = true
    const visited = {}
    visited[`x${start.x}:y${start.y}`] = { cell: start, distance: 0 }

    this.visitedNow(end, visited);
    const shortestPath = [];
    shortestPath.push(end);
    return this.getShortestPath(visited[`x${end.x}:y${end.y}`], shortestPath);
  }

  private getShortestPath(cell: any, shortest: Cell[]) {
    if (cell.prevCel) {
     shortest.push(cell.prevCel.cell);
     cell.prevCel.cell.path = true;
     this.getShortestPath(cell.prevCel, shortest);
    }

    return shortest
  }

  private visitedNow(endingPoint: Cell, visited: {cell?: Cell, distance?: SVGNumber}) {
    if (visited[`x${endingPoint.x}:y${endingPoint.y}`] && visited[`x${endingPoint.x}:y${endingPoint.y}`].cell === endingPoint) {
      return
    }

    Object.keys(visited).forEach(car => {
      visited[car].cell.neighbors.forEach(cell => {
        if (cell && !cell.obstacle) {
          if (!visited[`x${cell.x}:y${cell.y}`]) {
            visited[`x${cell.x}:y${cell.y}`] = { cell, distance: visited[car].distance + 1, prevCel: visited[car]};
          } else {
            if (visited[`x${cell.x}:y${cell.y}`].distance > visited[car] + 1) {
               visited[`x${cell.x}:y${cell.y}`].distance = visited[car] + 1;
            }
          }
        }
      });
    });
    this.visitedNow(endingPoint, visited);
  }
}
