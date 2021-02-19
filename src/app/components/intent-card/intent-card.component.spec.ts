import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentCardComponent } from './intent-card.component';

describe('IntentCardComponent', () => {
  let component: IntentCardComponent;
  let fixture: ComponentFixture<IntentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
