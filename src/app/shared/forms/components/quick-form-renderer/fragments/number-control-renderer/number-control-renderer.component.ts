import { Component } from '@angular/core';
import { AbstractControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/abstract-control-renderer.component';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types';
import { NumberControlConfig } from '@shared/forms/components/quick-form-renderer/interfaces/number-control-config';

@Component({
  selector: 'app-number-control-renderer',
  templateUrl: './number-control-renderer.component.html',
  styleUrls: ['./number-control-renderer.component.scss'],
})
export class NumberControlRendererComponent<
  ControlName extends QuickControlName,
> extends AbstractControlRendererComponent<ControlName> {
  public get config(): NumberControlConfig {
    return this.control.config as NumberControlConfig;
  }
}
