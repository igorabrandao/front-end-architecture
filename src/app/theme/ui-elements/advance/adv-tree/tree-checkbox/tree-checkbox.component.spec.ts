import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCheckboxComponent } from './tree-checkbox.component';

describe('TreeCheckboxComponent', () => {
  let component: TreeCheckboxComponent;
  let fixture: ComponentFixture<TreeCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
