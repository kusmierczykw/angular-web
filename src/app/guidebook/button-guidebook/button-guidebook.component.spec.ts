import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGuidebookComponent } from './button-guidebook.component';

describe('ButtonGuidebookComponent', () => {
  let component: ButtonGuidebookComponent;
  let fixture: ComponentFixture<ButtonGuidebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonGuidebookComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGuidebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
