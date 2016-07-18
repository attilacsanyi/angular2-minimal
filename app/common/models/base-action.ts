import {Action} from '@ngrx/store';

export class BaseAction implements Action {
  constructor(private _type: string) { }

  get type() {
    return this._type;
  }

  get payload() {
    return this;
  }
}
