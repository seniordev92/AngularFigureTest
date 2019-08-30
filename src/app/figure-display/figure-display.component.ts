import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as d3 from 'd3';
import { UndoActions } from 'ngrx-undo-redo';

import { Figure } from '../models/figure';

@Component({
  selector: 'app-figure-display',
  templateUrl: './figure-display.component.html',
  styleUrls: ['./figure-display.component.scss']
})
export class FigureDisplayComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  figure: Observable<Figure>;
  figureColor$: Observable<string>;
  figureShape$: Observable<string>;
  shape: string;
  color: string;
  constructor(private store: Store<{ figure: Figure }>) {
    this.figureColor$ = store.pipe(select('figure', 'color'));
    this.figureShape$ = store.pipe(select('figure', 'shape'));
  }
  ngOnInit() {
    const shapeSubscription = this.figureShape$.subscribe(res => {
      this.shape = res;
      this.setFigure();
    });
    this.subscription.add(shapeSubscription);
    const scolorSubscription = this.figureColor$.subscribe(res => {
      this.color = res;
      this.setFigure();
    });
    this.subscription.add(scolorSubscription);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  undo() {
    this.store.dispatch({ type: 'UNDO_STATE' } as UndoActions);
  }
  redo() {
    this.store.dispatch({ type: 'REDO_STATE' } as UndoActions);
  }
  setFigure() {
    const xScale = d3
      .scaleLinear()
      .domain([0, 1000])
      .range([0, 1000]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 1000])
      .range([10, 1000]);
    d3.selectAll('svg').remove();
    if (this.shape === 'rectangle') {
      d3.select('.display-figure')
        .append('svg')
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 200)
        .attr('height', 100)
        .attr('fill', this.color);
    }
    if (this.shape === 'triangle') {
      d3.select('.display-figure')
        .append('svg')
        .attr('width', 500)
        .attr('height', 600)
        .append('g')
        .attr('class', 'triangles')
        .attr('transform', 'translate(' + -220 + ',' + -100 + ')')
        .append('path')
        .attr(
          'd',
          d =>
            'M ' +
            xScale(300) +
            ' ' +
            yScale(118.8) +
            ' L ' +
            xScale(500) +
            ' ' +
            yScale(218) +
            ' L ' +
            xScale(225) +
            ' ' +
            yScale(220) +
            ' Z'
        )
        .style('fill', this.color);
    }
    if (this.shape === 'circle') {
      d3.select('.display-figure')
        .append('svg')
        .append('circle')
        .attr('cx', 100)
        .attr('cy', 50)
        .attr('r', 50)
        .attr('fill', this.color);
    }
  }
}
