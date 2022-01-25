import { Component } from '@angular/core';
import { SimpleControlRendererComponent } from '@shared/forms/components/simple-form-renderer/abstract/simple-control-renderer.component';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';

@Component({
  selector: 'app-date-control-renderer',
  templateUrl: './date-control-renderer.component.html',
  styleUrls: ['./date-control-renderer.component.scss'],
})
export class DateControlRendererComponent<
  ControlName extends SimpleControlNameType,
> extends SimpleControlRendererComponent<ControlName> {}
