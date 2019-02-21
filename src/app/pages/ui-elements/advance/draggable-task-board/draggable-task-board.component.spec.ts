import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableTaskBoardComponent } from './draggable-task-board.component';

describe('DraggableTaskBoardComponent', () => {
  let component: DraggableTaskBoardComponent;
  let fixture: ComponentFixture<DraggableTaskBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableTaskBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableTaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
