import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidebookPageComponent } from './guidebook-page.component';

describe('GuidebookPageComponent', () => {
  let component: GuidebookPageComponent;
  let fixture: ComponentFixture<GuidebookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidebookPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
