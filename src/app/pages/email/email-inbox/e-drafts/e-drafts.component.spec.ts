import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDraftsComponent } from './e-drafts.component';

describe('EDraftsComponent', () => {
  let component: EDraftsComponent;
  let fixture: ComponentFixture<EDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
