import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {Store} from '@ngrx/store';
import {AppState}  from '../core/states';
import {IncrementCounterAction, DecrementCounterAction, ResetCounterAction} from './counter.action';

@Component({
  selector: 'counter',
  templateUrl: 'app/counter/counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  counter: Observable<number>;
  amount: number = 34;

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit() {
    this.counter = this._store.select(state => state.counter);
  }

  increment() {
    this._store.dispatch(new IncrementCounterAction(+this.amount));
  }

  decrement() {
    this._store.dispatch(new DecrementCounterAction(+this.amount));
  }

  reset() {
    this._store.dispatch(new ResetCounterAction());
  }

}