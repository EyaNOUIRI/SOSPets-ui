import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreMissionComponent } from './notre-mission.component';

describe('NotreMissionComponent', () => {
  let component: NotreMissionComponent;
  let fixture: ComponentFixture<NotreMissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotreMissionComponent]
    });
    fixture = TestBed.createComponent(NotreMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
