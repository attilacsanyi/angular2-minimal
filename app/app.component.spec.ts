import {inject } from '@angular/core/testing';
import {TestComponentBuilder, addProviders} from '@angular/core/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => addProviders([AppComponent]));
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
