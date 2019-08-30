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
    if (this.selectTitle === 'Shape') {
      this.selectShape(value);
    }
    if (this.selectTitle === 'Color') {
      this.selectColor(value);
    }
  }
  selectColor(value) {
    this.store.dispatch(new SetColor(value));
  }
  selectShape(value) {
    this.store.dispatch(new SetShape(value));
  }
}
