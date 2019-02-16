import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMainComponent } from './e-main.component';

describe('EMainComponent', () => {
  let component: EMainComponent;
  let fixture: ComponentFixture<EMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
