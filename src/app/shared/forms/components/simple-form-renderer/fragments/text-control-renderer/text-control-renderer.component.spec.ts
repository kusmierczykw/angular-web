import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';
import { TextControlRendererComponent } from '@shared/forms/components/simple-form-renderer/fragments/text-control-renderer/text-control-renderer.component';

describe('TextControlRendererComponent', () => {
  let component: TextControlRendererComponent<SimpleControlNameType>;
  let fixture: ComponentFixture<
    TextControlRendererComponent<SimpleControlNameType>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextControlRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
