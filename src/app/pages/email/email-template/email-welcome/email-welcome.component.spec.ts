import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailWelcomeComponent } from './email-welcome.component';

describe('EmailWelcomeComponent', () => {
  let component: EmailWelcomeComponent;
  let fixture: ComponentFixture<EmailWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
