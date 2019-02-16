import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNewsletterComponent } from './email-newsletter.component';

describe('EmailNewsletterComponent', () => {
  let component: EmailNewsletterComponent;
  let fixture: ComponentFixture<EmailNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
