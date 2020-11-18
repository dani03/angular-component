import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-color',
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.scss']
})
export class BoxColorComponent implements OnInit {
  colorsList: {red:number, green: number, blue: number} = {red: 0, green: 2, blue: 3 };

  constructor() { }

  ngOnInit(): void {
  }
  getColor(){
    return `rgb(${this.colorsList.red}, ${this.colorsList.green}, ${this.colorsList.blue})`;
  }


}
