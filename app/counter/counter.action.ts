import {BaseAction} from '../core/models';

// Counter Actions
const PREFIX = 'COUNTER_';

export class IncrementCounterAction extends BaseAction {
  constructor(public amount: number) {
    super(`${PREFIX}INCREMENT`);
  }
}

export class DecrementCounterAction extends BaseAction {
  constructor(public amount: number) {
    super(`${PREFIX}DECREMENT`);
  }
}

export class ResetCounterAction extends BaseAction {
  constructor() {
    super(`${PREFIX}RESET`);
  }
}
