import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureOptionComponent } from './figure-option.component';

describe('FigureOptionComponent', () => {
  let component: FigureOptionComponent;
  let fixture: ComponentFixture<FigureOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
