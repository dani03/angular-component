import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandBox';
  allColors: Array<string> = [];
  
  getColor(oneColor):void{
    this.allColors.push(oneColor);
  }
}
