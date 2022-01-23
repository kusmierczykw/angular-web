import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleFormRendererComponent } from '@shared/forms/components';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';

describe('SimpleFormRendererComponent', () => {
  let component: SimpleFormRendererComponent<SimpleControlNameType>;
  let fixture: ComponentFixture<
    SimpleFormRendererComponent<SimpleControlNameType>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleFormRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
