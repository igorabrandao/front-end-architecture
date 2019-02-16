import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EStarredComponent } from './e-starred.component';

describe('EStarredComponent', () => {
  let component: EStarredComponent;
  let fixture: ComponentFixture<EStarredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EStarredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EStarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
