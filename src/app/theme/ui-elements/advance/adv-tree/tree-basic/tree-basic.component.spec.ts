import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeBasicComponent } from './tree-basic.component';

describe('TreeBasicComponent', () => {
  let component: TreeBasicComponent;
  let fixture: ComponentFixture<TreeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
