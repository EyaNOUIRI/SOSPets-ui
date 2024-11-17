import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelDonComponent } from './appel-don.component';

describe('AppelDonComponent', () => {
  let component: AppelDonComponent;
  let fixture: ComponentFixture<AppelDonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppelDonComponent]
    });
    fixture = TestBed.createComponent(AppelDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
