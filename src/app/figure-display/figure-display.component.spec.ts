import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureDisplayComponent } from './figure-display.component';

describe('FigureDisplayComponent', () => {
  let component: FigureDisplayComponent;
  let fixture: ComponentFixture<FigureDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
