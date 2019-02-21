import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailResetPasswordComponent } from './email-reset-password.component';

describe('EmailResetPasswordComponent', () => {
  let component: EmailResetPasswordComponent;
  let fixture: ComponentFixture<EmailResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
