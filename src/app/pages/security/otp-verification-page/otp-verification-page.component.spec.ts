import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerificationPageComponent } from './otp-verification-page.component';

describe('OtpVerificationPageComponent', () => {
  let component: OtpVerificationPageComponent;
  let fixture: ComponentFixture<OtpVerificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpVerificationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpVerificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
