import { Component, ViewChild } from '@angular/core';
import { Seedling } from 'app/seedling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  @ViewChild("bob") public bob

  constructor(public seedling: Seedling) {
    setTimeout(()=> {
      const a = seedling
      const bill = this.bob
      debugger
    }, 2000) 
  }
}

@Component({
  selector: 'app-bob',
  template: "<div>Hey World</div>",
})
export class BobComponent {
  title = 'app works!';
}

