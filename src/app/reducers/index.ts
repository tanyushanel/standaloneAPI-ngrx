import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  count: number;
}

export const reducers: ActionReducerMap<State> = {
  count: (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;

      case 'DECREMENT':
        return state - 1;

      default:
        return state;
    }
  },
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
