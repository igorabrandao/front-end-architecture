import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error503Component } from './error-503.component';

describe('Error503Component', () => {
  let component: Error503Component;
  let fixture: ComponentFixture<Error503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
