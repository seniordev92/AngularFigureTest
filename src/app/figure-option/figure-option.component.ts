import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figure-option',
  templateUrl: './figure-option.component.html',
  styleUrls: ['./figure-option.component.scss']
})
export class FigureOptionComponent implements OnInit {
  constructor() {}
  colorSelect: Array<{ value: string; label: string }>;
  shapeSelect: Array<{ value: string; label: string }>;
  ngOnInit() {
    this.colorSelect = [
      { value: 'black', label: 'Black' },
      { value: 'red', label: 'Red' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'purple', label: 'Purple' },
      { value: 'gray', label: 'Gray' }
    ];
    this.shapeSelect = [
      { value: 'rectangle', label: 'Rectangle' },
      { value: 'triangle', label: 'Triangle' },
      { value: 'circle', label: 'Circle' }
    ];
  }
}
