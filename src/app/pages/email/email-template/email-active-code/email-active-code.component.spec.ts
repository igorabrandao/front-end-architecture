import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailActiveCodeComponent } from './email-active-code.component';

describe('EmailActiveCodeComponent', () => {
  let component: EmailActiveCodeComponent;
  let fixture: ComponentFixture<EmailActiveCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailActiveCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailActiveCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
