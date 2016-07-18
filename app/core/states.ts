import {Inject, Provider} from '@angular/core';
import {provideStore} from '@ngrx/store';
import {instrumentStore} from '@ngrx/store-devtools';
import {useLogMonitor} from '@ngrx/store-log-monitor';

// Reducers
import {counterReducer} from '../counter/counter.reducer';

export interface AppState {
  counter: number;
}

export const STORE_PROVIDERS: Provider[] = [
  ...provideStore(
    {
      counter: counterReducer
    }, {
      counter: 55
    }
  ),
  ...instrumentStore({
    monitor: useLogMonitor({
      // Default log monitor options
      position: 'right',
      visible: true,
      size: 0.3
    })
  }),
];