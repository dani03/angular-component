import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  styleUrls: ['./counter.component.scss'],
  templateUrl: './counter.component.html'
})

export class AppCounterComponent implements OnInit {
  content: string = '';
  limitCaracters: number = 20;
  ngOnInit(): void { }
}