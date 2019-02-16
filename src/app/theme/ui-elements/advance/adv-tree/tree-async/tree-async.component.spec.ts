import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeAsyncComponent } from './tree-async.component';

describe('TreeAsyncComponent', () => {
  let component: TreeAsyncComponent;
  let fixture: ComponentFixture<TreeAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
