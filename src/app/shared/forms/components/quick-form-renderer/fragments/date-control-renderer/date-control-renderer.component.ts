import { Component } from '@angular/core';
import { AbstractControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/abstract-control-renderer.component';
import { QuickControlNameType } from '@shared/forms/components/quick-form-renderer/types';

@Component({
  selector: 'app-date-control-renderer',
  templateUrl: './date-control-renderer.component.html',
  styleUrls: ['./date-control-renderer.component.scss'],
})
export class DateControlRendererComponent<
  ControlName extends QuickControlNameType,
> extends AbstractControlRendererComponent<ControlName> {}
