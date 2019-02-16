import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAppLaunchComponent } from './email-app-launch.component';

describe('EmailAppLaunchComponent', () => {
  let component: EmailAppLaunchComponent;
  let fixture: ComponentFixture<EmailAppLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAppLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAppLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
