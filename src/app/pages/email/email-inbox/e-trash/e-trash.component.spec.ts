import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETrashComponent } from './e-trash.component';

describe('ETrashComponent', () => {
  let component: ETrashComponent;
  let fixture: ComponentFixture<ETrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
