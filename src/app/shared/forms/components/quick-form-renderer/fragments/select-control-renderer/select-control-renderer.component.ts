import { Component } from '@angular/core';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types';
import { AbstractControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/abstract-control-renderer.component';
import { SelectControlConfig } from '@shared/forms/components/quick-form-renderer/interfaces';

@Component({
  selector: 'app-select-control-renderer',
  templateUrl: './select-control-renderer.component.html',
  styleUrls: ['./select-control-renderer.component.scss'],
})
export class SelectControlRendererComponent<
  ControlName extends QuickControlName,
> extends AbstractControlRendererComponent<ControlName> {
  public get config(): SelectControlConfig {
    return this.control.config as SelectControlConfig;
  }
}
