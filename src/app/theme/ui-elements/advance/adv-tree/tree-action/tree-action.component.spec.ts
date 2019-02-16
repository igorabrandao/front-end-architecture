import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeActionComponent } from './tree-action.component';

describe('TreeActionComponent', () => {
  let component: TreeActionComponent;
  let fixture: ComponentFixture<TreeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
