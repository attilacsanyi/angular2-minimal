import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AppComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the app component',
    inject([AppComponent], (component: AppComponent) => {
      expect(component).toBeTruthy();
    })
  );

  it('should have app title of "Hello Angular2!"',
    inject([AppComponent], (component: AppComponent) => {
      component.ngOnInit();
      expect(component.title).toEqual('Hello Angular!');
    })
  );

});
