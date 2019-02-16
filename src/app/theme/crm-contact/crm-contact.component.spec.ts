import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmContactComponent } from './crm-contact.component';

describe('CrmContactComponent', () => {
  let component: CrmContactComponent;
  let fixture: ComponentFixture<CrmContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
