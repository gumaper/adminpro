import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  percent: number = 50;

  constructor() {}

  ngOnInit() {}

  valueA(valor: number) {
    if (this.percent >= 100 && valor > 0) {
      this.percent = 100;
      return;
    }

    if (this.percent <= 0 && valor < 0) {
      this.percent = 0;
      return;
    }

    this.percent = this.percent + valor;
  }
}
