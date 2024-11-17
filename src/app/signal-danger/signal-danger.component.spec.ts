import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDangerComponent } from './signal-danger.component';

describe('SignalDangerComponent', () => {
  let component: SignalDangerComponent;
  let fixture: ComponentFixture<SignalDangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalDangerComponent]
    });
    fixture = TestBed.createComponent(SignalDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
