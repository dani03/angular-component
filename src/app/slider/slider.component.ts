import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() max: number = 255;
  @Input() min: number = 0;
  @Input() valueBox: number = 0;
  @Output() myEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onChange(value: number ):void {
    this.myEvent.emit(value);
  }
  

}
