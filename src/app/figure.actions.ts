import {Action} from '@ngrx/store';
export enum FigureActionTypes {
  SetColor = '[Figure Component] SetColor',
  SetShape = '[Figure Component] SetShape'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class SetColor implements ActionEx {
  readonly type = FigureActionTypes.SetColor;
  constructor(public payload: any) {
  }
}
export class SetShape implements ActionEx {
  readonly type = FigureActionTypes.SetShape;
  constructor(public payload: any) {
  }
}
