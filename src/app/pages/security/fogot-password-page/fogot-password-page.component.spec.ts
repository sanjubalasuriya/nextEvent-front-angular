import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogotPasswordPageComponent } from './fogot-password-page.component';

describe('FogotPasswordPageComponent', () => {
  let component: FogotPasswordPageComponent;
  let fixture: ComponentFixture<FogotPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FogotPasswordPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FogotPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
