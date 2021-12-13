import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidebarToggleComponent } from '@layouts/dashboard/fragments';

describe('DashboardSidebarToggleComponent', () => {
  let component: DashboardSidebarToggleComponent;
  let fixture: ComponentFixture<DashboardSidebarToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardSidebarToggleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSidebarToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
