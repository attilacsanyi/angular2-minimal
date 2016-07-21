import {
  expect, it, describe,
  // iit, xit, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, inject
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

  it('should have app title of "Hello Angular 2 !"',
    inject([AppComponent], (component: AppComponent) => {
      component.ngOnInit();
      expect(component.title).toEqual('Hello Angular 2 !');
    })
  );

});
