import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvTreeComponent } from './adv-tree.component';

describe('AdvTreeComponent', () => {
  let component: AdvTreeComponent;
  let fixture: ComponentFixture<AdvTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
