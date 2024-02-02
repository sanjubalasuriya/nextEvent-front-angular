import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewPageComponent } from './event-view-page.component';

describe('EventViewPageComponent', () => {
  let component: EventViewPageComponent;
  let fixture: ComponentFixture<EventViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
