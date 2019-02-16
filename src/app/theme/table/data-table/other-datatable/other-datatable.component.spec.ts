import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDatatableComponent } from './other-datatable.component';

describe('OtherDatatableComponent', () => {
  let component: OtherDatatableComponent;
  let fixture: ComponentFixture<OtherDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
