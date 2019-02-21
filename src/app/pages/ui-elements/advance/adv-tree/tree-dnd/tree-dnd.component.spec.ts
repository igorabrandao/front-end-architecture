import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDndComponent } from './tree-dnd.component';

describe('TreeDndComponent', () => {
  let component: TreeDndComponent;
  let fixture: ComponentFixture<TreeDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
