import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAnimalComponent } from './info-animal.component';

describe('InfoAnimalComponent', () => {
  let component: InfoAnimalComponent;
  let fixture: ComponentFixture<InfoAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoAnimalComponent]
    });
    fixture = TestBed.createComponent(InfoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
