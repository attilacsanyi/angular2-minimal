import {ActionReducer, Action} from '@ngrx/store';
import {IncrementCounterAction, DecrementCounterAction, ResetCounterAction} from './counter.action';

export const counterReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
  switch (action.constructor) {
    case IncrementCounterAction:
      return state + (<IncrementCounterAction>action).payload.amount;

    case DecrementCounterAction:
      return state - (<DecrementCounterAction>action).payload.amount;

    case ResetCounterAction:
      return 0;

    default:
      return state;
  }
}