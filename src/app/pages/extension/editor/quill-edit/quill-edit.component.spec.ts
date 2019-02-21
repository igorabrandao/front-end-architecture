import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillEditComponent } from './quill-edit.component';

describe('QuillEditComponent', () => {
  let component: QuillEditComponent;
  let fixture: ComponentFixture<QuillEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
