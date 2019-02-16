import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFilterComponent } from './tree-filter.component';

describe('TreeFilterComponent', () => {
  let component: TreeFilterComponent;
  let fixture: ComponentFixture<TreeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
