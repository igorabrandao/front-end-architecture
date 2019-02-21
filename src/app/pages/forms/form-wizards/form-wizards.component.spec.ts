import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWizardsComponent } from './form-wizards.component';

describe('FormWizardsComponent', () => {
  let component: FormWizardsComponent;
  let fixture: ComponentFixture<FormWizardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWizardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWizardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
