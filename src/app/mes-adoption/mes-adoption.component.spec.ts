import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesAdoptionComponent } from './mes-adoption.component';

describe('MesAdoptionComponent', () => {
  let component: MesAdoptionComponent;
  let fixture: ComponentFixture<MesAdoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesAdoptionComponent]
    });
    fixture = TestBed.createComponent(MesAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
