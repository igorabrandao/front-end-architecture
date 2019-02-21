import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESentComponent } from './e-sent.component';

describe('ESentComponent', () => {
  let component: ESentComponent;
  let fixture: ComponentFixture<ESentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
