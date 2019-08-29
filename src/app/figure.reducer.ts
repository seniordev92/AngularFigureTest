import { ActionEx, FigureActionTypes } from './figure.actions';
import { initialChartData, FigureData } from './figure.state';

export function FigureReducer(
  oldState: FigureData = initialChartData,
  action: ActionEx
) {
  switch (action.type) {
    case FigureActionTypes.SetColor: {
      const state = {
        ...oldState,
        color: action.payload
      };
      return state;
    }
    case FigureActionTypes.SetShape: {
      const state = {
        ...oldState,
        shape: action.payload
      };
      return state;
    }
    default:
      return oldState;
  }
}
