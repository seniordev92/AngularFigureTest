import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Figure } from '../../models/figure';
import { SetColor, SetShape } from '../../figure.actions';

@Component({
  selector: 'app-select-tag',
  templateUrl: './select-tag.component.html',
  styleUrls: ['./select-tag.component.scss']
})
export class SelectTagComponent implements OnInit {
  @Input() selectTitle: string;
  @Input() options: Array<{ value: string; label: string }>;
  constructor(private store: Store<{ figure: Figure }>) {}

  ngOnInit() {}
  selectOption(value) {
    console.log(this.selectTitle)
    if (this.selectTitle === 'Shape') {
      this.selectShape(value);
    }
    if (this.selectTitle === 'Color') {
      this.selectColor(value);
    }
  }
  selectColor(value) {
    console.log(value)
    this.store.dispatch(new SetColor(value));
  }
  selectShape(value) {
    console.log(value)
    this.store.dispatch(new SetShape(value));
  }
}
