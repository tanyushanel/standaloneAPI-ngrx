import { Action, createReducer, on } from '@ngrx/store';

import * as CounterActions from '../actions/counter.actions';
import { State } from '.';

export const initialState: State = {
  count: 0,
};
export const counterReducer = createReducer(
  initialState,
  on(CounterActions.decrement, (state) => {
    if (!state.count) return state;
    return { ...state, count: state.count - 1 };
  }),
  on(CounterActions.increment, (state) => ({
    ...state,
    count: state.count + 1,
  })),

  on(CounterActions.reset, (state) => ({ ...state, count: 0 }))
);

export function reducer(state: State | undefined, action: Action) {
  return counterReducer(state, action);
}
