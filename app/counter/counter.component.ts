import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {Store} from '@ngrx/store';
import {AppState}  from '../core/states';
import {IncrementCounterAction, DecrementCounterAction, ResetCounterAction} from './counter.action';

import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdIcon} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  templateUrl: 'counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES,
    MdIcon, MdInput
  ]
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
