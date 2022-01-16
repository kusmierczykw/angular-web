import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAddPageComponent } from './training-add-page.component';

describe('TrainingAddPageComponent', () => {
  let component: TrainingAddPageComponent;
  let fixture: ComponentFixture<TrainingAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
